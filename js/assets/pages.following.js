webpackJsonp([46], {
    "+GT7": function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("U7vG"),
            o = n("F8kA"),
            l = n("6sO2"),
            s = n("IOwa"),
            d = n("RH2O"),
            u = n("2KeS"),
            c = n("PPNL"),
            m = n("/SNv"),
            p = n.n(m),
            g = n("Vr3l"),
            v = n.n(g);
        ! function(e) {
            e[e.Hearthstone = 0] = "Hearthstone", e[e.LeagueOfLegends = 1] = "LeagueOfLegends", e[e.Overwatch = 2] = "Overwatch"
        }(i || (i = {}));
        var h = this,
            f = function() {
                return a.__awaiter(h, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(65).then(n.bind(null, "e/M0"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            k = function() {
                return a.__awaiter(h, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(64).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            y = n("Odds"),
            S = (n("AHWf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = l.n.logger.withCategory("metadata-icon"), t.didUnmount = !1, t.loadData = function() {
                        if (!t.state.isLoading && !t.state.isError && t.props.streamMetadata && !t.state.content) {
                            var e = t.props.streamMetadata.hearthstone && t.props.streamMetadata.hearthstone.broadcasterHeroClass,
                                n = t.props.streamMetadata.leagueOfLegends && t.props.streamMetadata.leagueOfLegends.championID,
                                a = t.props.streamMetadata.overwatch && t.props.streamMetadata.overwatch.broadcasterCharacter;
                            e ? (t.setState({
                                game: i.Hearthstone,
                                gameSprite: p.a,
                                item: e,
                                isLoading: !0
                            }), t.getHearthstoneData()) : n ? (t.setState({
                                game: i.LeagueOfLegends,
                                item: n.toString()
                            }), t.getLeagueData()) : a && (t.setState({
                                game: i.Overwatch,
                                gameSprite: v.a,
                                item: a,
                                isLoading: !0
                            }), t.getOverwatchData())
                        }
                    }, t.renderIcon = function(e, t, n, i, a, o) {
                        return n ? r.createElement(y.V, {
                            display: y.H.Flex,
                            flexDirection: y.J.Column,
                            alignItems: y.c.Center,
                            justifyContent: y.U.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(y._31, {
                            direction: y._33.Left,
                            label: e
                        }, r.createElement(y.V, {
                            className: "metadata-icon"
                        }, r.createElement("div", {
                            style: {
                                backgroundImage: "url(" + t + ")",
                                backgroundPositionX: a ? -1 * a : 0,
                                backgroundPositionY: o ? -1 * o : 0,
                                width: n ? n + "px" : "3rem",
                                height: n ? i + "px" : "3rem",
                                transform: "scale(" + (n > 0 ? 30 / n : 1) + ")",
                                transformOrigin: "0 0"
                            }
                        })))) : null
                    }, t.getHearthstoneData = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, f()];
                                    case 1:
                                        return e = i.sent(), this.didUnmount ? [2] : (t = {}, e[0].Class.forEach(function(e) {
                                            t[e.class] = e
                                        }), this.setState({
                                            content: t,
                                            isLoading: !1
                                        }), [3, 3]);
                                    case 2:
                                        return n = i.sent(), this.logger.error(n, "Failed to load Hearthstone class data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.getLeagueData = function() {
                        t.props.leagueOfLegends.isLoading || t.props.leagueOfLegends.isError || t.props.leagueOfLegends.championsMap || t.props.onLoadLeagueOfLegendsChampions()
                    }, t.getOverwatchData = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, r, o, l, s, d, u, c, m, p;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, k()];
                                    case 1:
                                        if (e = a.sent(), this.didUnmount) return [2];
                                        for (t = !1, n = void 0, i = 0, r = e; i < r.length && (n = r[i], !t); i++)
                                            for (o in n)
                                                if (n.hasOwnProperty(o))
                                                    for (l = n[o], s = 0, d = l; s < d.length; s++)
                                                        if ((u = d[s]).character === this.state.item) {
                                                            (p = {})[u.character] = u, c = p, this.setState({
                                                                content: c,
                                                                isLoading: !1
                                                            }), t = !0;
                                                            break
                                                        }
                                        return [3, 3];
                                    case 2:
                                        return m = a.sent(), this.logger.error(m, "Failed to load Overwatch character data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.loadData()
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    if (!this.state.item) return null;
                    if (this.state.game === i.LeagueOfLegends) {
                        if (!this.props.leagueOfLegends.championsMap) return null;
                        var e = this.props.leagueOfLegends.championsMap[this.state.item],
                            t = "https://ddragon.leagueoflegends.com/cdn/" + this.props.leagueOfLegends.version + "/img/sprite/" + e.image.sprite;
                        return this.renderIcon(e.name, t, e.image.w, e.image.h, e.image.x, e.image.y)
                    }
                    var n = this.state.content && this.state.content[this.state.item];
                    return n ? this.renderIcon(n.display_name, this.state.gameSprite || "", n.image_width, n.image_height, n.sprite_x_offset, n.sprite_y_offset) : null
                }, t
            }(r.Component)),
            w = Object(d.a)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap,
                        isError: e.directory.leagueOfLegends.isError,
                        isLoading: e.directory.leagueOfLegends.isLoading,
                        version: e.directory.leagueOfLegends.version
                    }
                }
            }, function(e) {
                return Object(u.bindActionCreators)({
                    onLoadLeagueOfLegendsChampions: c.a
                }, e)
            })(S),
            b = (n("LEV+"), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, l.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return "yes" === e.sent() && l.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = r.createElement(y.V, {
                        display: y.H.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, r.createElement(y._1, {
                        label: Object(l.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(l.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: r.createElement(o.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return r.createElement("div", a.__assign({
                        className: "live-channel-card"
                    }, Object(y._40)(this.props)), r.createElement(y.A, {
                        key: this.props.title
                    }, r.createElement(y.V, {
                        fullWidth: !0
                    }, r.createElement(y.j, {
                        overflow: !0
                    }, r.createElement("div", null, r.createElement(o.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, r.createElement(y.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: y.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), r.createElement(y.B, null, r.createElement(y.V, {
                        display: y.H.Flex,
                        flexWrap: y.K.NoWrap
                    }, r.createElement(y.V, {
                        flexGrow: 1,
                        fullWidth: !0
                    }, r.createElement(o.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, r.createElement(y.Q, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(y._23, {
                        type: y._28.H3,
                        fontSize: y.L.Size5,
                        lineHeight: y.W.Body,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), r.createElement(y.V, {
                        className: "live-channel-card__meta",
                        display: y.H.Flex,
                        flexWrap: y.K.NoWrap
                    }, e, r.createElement(y._23, {
                        type: y._28.Span,
                        ellipsis: !0
                    }, t))), r.createElement(y.V, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, this.renderStreamMetadata())))))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? r.createElement(o.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, r.createElement(y._19, {
                        className: "live-channel-card__boxart",
                        position: y._4.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(y._31, {
                        display: y.H.Block,
                        direction: y._33.Bottom,
                        label: t
                    }, r.createElement(y.C, {
                        imageSrc: n,
                        imageAlt: t,
                        aspect: y.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(y.V, {
                        position: y._4.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(s.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? r.createElement(w, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(r.Component)),
            _ = b;
        n.d(t, !1, function() {
            return b
        }), n.d(t, "a", function() {
            return _
        })
    },
    "/SNv": function(e, t, n) {
        e.exports = n.p + "assets/hearthstone-classes-b3b59eedbe78268cf62299a41ec09be1.png"
    },
    "/XPz": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("+xm8"),
            o = n("f2i/"),
            l = n("Aj/L"),
            s = n("TToO"),
            d = n("U7vG"),
            u = n("BhyV"),
            c = n("6sO2"),
            m = n("7vx8"),
            p = n("oIkB"),
            g = n("vH/s"),
            v = n("Odds"),
            h = n("z4nH"),
            f = n("rG8a"),
            k = n("U9Fb"),
            y = "follow-game-button-component",
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.follow = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.followGame && this.props.data && this.props.data.game ? (e = s.__assign({}, Object(p.a)({
                                            gameID: this.props.data.game.id
                                        }), {
                                            optimisticResponse: {
                                                followGame: {
                                                    __typename: "FollowGamePayload",
                                                    game: {
                                                        self: {
                                                            follow: {
                                                                followedAt: (new Date).toISOString(),
                                                                __typename: "GameFollow"
                                                            },
                                                            __typename: "GameSelfConnection"
                                                        },
                                                        __typename: "Game"
                                                    }
                                                }
                                            },
                                            update: function(e, n) {
                                                var i = n.data.followGame,
                                                    a = e.readQuery({
                                                        query: f,
                                                        variables: {
                                                            name: t.props.gameName
                                                        }
                                                    });
                                                a.game && (a.game.self.follow = i.game.self.follow, e.writeQuery({
                                                    query: f,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: a
                                                }))
                                            }
                                        }), [4, this.props.followGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(g.SpadeEventType.GameFollow), [2]
                                }
                            })
                        })
                    }, t.unfollow = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = s.__assign({}, Object(p.a)({
                                            gameID: this.props.data.game.id
                                        }), {
                                            optimisticResponse: {
                                                unfollowGame: {
                                                    __typename: "UnfollowGamePayload",
                                                    follow: null
                                                }
                                            },
                                            update: function(e) {
                                                var n = e.readQuery({
                                                    query: f,
                                                    variables: {
                                                        name: t.props.gameName
                                                    }
                                                });
                                                n.game && (n.game.self.follow = null, e.writeQuery({
                                                    query: f,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: n
                                                }))
                                            }
                                        }), [4, this.props.unfollowGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(g.SpadeEventType.GameUnfollow), [2]
                                }
                            })
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = Object(c.d)("Follow", "FollowGameButton");
                    if (!this.props.isLoggedIn) return d.createElement(v.u, {
                        icon: v._11.Heart,
                        ariaLabel: e,
                        "data-test-selector": y,
                        onClick: this.props.showLoginModal
                    }, e);
                    if (this.isLoading) return d.createElement(v._3, {
                        width: 70,
                        height: 30
                    });
                    if (this.isFollowing) {
                        var t = Object(c.d)("Unfollow", "FollowGameButton");
                        return d.createElement(v.v, {
                            ariaLabel: t,
                            "data-test-selector": y,
                            "data-a-target": "game-directory-unfollow-button",
                            icon: v._11.Heart,
                            onClick: this.unfollow,
                            statusAlertIcon: v._11.Unheart
                        })
                    }
                    return d.createElement(v.u, {
                        icon: v._11.Heart,
                        ariaLabel: e,
                        "data-test-selector": y,
                        onClick: this.follow,
                        "data-a-target": "game-directory-follow-button"
                    }, e)
                }, Object.defineProperty(t.prototype, "isFollowing", {
                    get: function() {
                        return !!(this.props.data && this.props.data.game && this.props.data.game.self && null !== this.props.data.game.self.follow)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isLoading", {
                    get: function() {
                        return !this.props.data || this.props.data.loading
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.track = function(e) {
                    c.n.tracking.track(e, {
                        src: this.props.src,
                        kind: e === g.SpadeEventType.GameFollow ? "follow" : "unfollow",
                        name: this.props.gameName
                    })
                }, t
            }(d.Component),
            w = Object(u.compose)(Object(m.a)(f, {
                options: function(e) {
                    return {
                        variables: {
                            name: e.gameName
                        }
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn || !e.gameName
                }
            }), Object(m.a)(h, {
                name: "followGame"
            }), Object(m.a)(k, {
                name: "unfollowGame"
            }))(S),
            b = Object(i.a)(function(e) {
                return {
                    isLoggedIn: Object(l.d)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    showLoginModal: function() {
                        return Object(o.f)(r.a.FollowGameButton)
                    }
                }, e)
            })(w);
        n.d(t, "a", function() {
            return b
        })
    },
    "3yQz": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        });
        var i, a = "VIEWS",
            r = "TIME";
        ! function(e) {
            e.Popular = "VIEWS", e.Newest = "TIME"
        }(i || (i = {}))
    },
    4194: function(e, t) {},
    "4az8": function(e, t) {},
    "54wg": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityStreams_Streams"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "type"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DirectoryType"
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "directory"
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "type"
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
                                    value: "streams"
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
                                                            value: "viewersCount"
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
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "broadcaster"
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
                                                            }]
                                                        }
                                                    }, {
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
                                                                        value: "285"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "380"
                                                                    }
                                                                }],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 354
            }
        };
        n.loc.source = {
            body: "query CommunityStreams_Streams($name: String! $type: DirectoryType! $limit: Int) {\ndirectory(name: $name type: $type) {\nid\nstreams(first: $limit) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 285 height: 380)\nname\n}\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "5G5w": function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            void 0 === n && (n = {});
            var a = e.readQuery({
                    query: t,
                    variables: n
                }),
                r = s(a, function(e) {
                    return e
                }, function(e) {
                    return i(e)
                });
            e.writeQuery({
                query: t,
                variables: n,
                data: r
            })
        }
        var a = n("TToO"),
            r = n("U7vG"),
            o = n("7vx8"),
            l = n("oIkB"),
            s = n("LIeg"),
            d = n("Odds"),
            u = n("xGL+"),
            c = n("E+ZP"),
            m = (n("AtoX"), n("RuaR"));
        n.d(t, "a", function() {
            return p
        });
        var p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    hovered: !1,
                    inProgress: !1
                }, t.onClick = function() {
                    t.state.inProgress || t.setState({
                        inProgress: !0
                    }, t.mutateFollowGame)
                }, t.mutateFollowGame = function() {
                    return a.__awaiter(t, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.followGameDataLoadedWithoutError() && this.props.data.game ? this.isFollowing() ? [3, 2] : [4, this.followGame(this.props.data.game.id)] : [2];
                                case 1:
                                    return e.sent(), [3, 4];
                                case 2:
                                    return [4, this.unfollowGame(this.props.data.game.id)];
                                case 3:
                                    e.sent(), e.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.onMouseEnter = function() {
                    t.setState({
                        hovered: !0
                    })
                }, t.onMouseLeave = function() {
                    t.setState({
                        hovered: !1
                    })
                }, t
            }
            return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                var t = this;
                !e.categoryChange || this.props.categoryChange && this.props.categoryChange.timestampMs === e.categoryChange.timestampMs || !e.categoryChange.category.games.find(function(e) {
                    return e.name === t.props.title
                }) || this.isFollowing() !== e.categoryChange.shouldFollow && this.onClick()
            }, t.prototype.render = function() {
                var e;
                return this.state.inProgress ? e = r.createElement("div", {
                    className: "follow-game-card__overlay"
                }, r.createElement(d.Z, {
                    fillContent: !0
                })) : this.state.hovered ? e = r.createElement("div", {
                    className: "follow-game-card__overlay"
                }, r.createElement(d._10, {
                    width: 50,
                    height: 50,
                    asset: this.isFollowing() ? d._11.Unheart : d._11.Heart
                })) : this.isFollowing() && (e = r.createElement("div", {
                    className: "follow-game-card__overlay follow-game-card__overlay--followed",
                    "data-a-target": "follow-game-card--followed"
                }, r.createElement(d._10, {
                    width: 50,
                    height: 50,
                    asset: d._11.Heart
                }))), r.createElement(d.Q, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement("div", a.__assign({
                    className: "follow-game-card",
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    onClick: this.onClick
                }, Object(d._40)(this.props)), r.createElement(d.A, {
                    key: this.props.title
                }, r.createElement(d.V, {
                    position: d._4.Relative
                }, e, r.createElement(d.C, {
                    aspect: d.k.Aspect3x4,
                    imageAlt: this.props.imageAlt,
                    imageSrc: this.props.imageSrc
                })), r.createElement(d.B, null, r.createElement(d.V, {
                    margin: {
                        top: .5,
                        bottom: 1
                    }
                }, r.createElement(d._23, {
                    color: d.F.Base,
                    fontSize: d.L.Size5
                }, this.props.title), r.createElement(d._23, {
                    color: d.F.Alt,
                    fontSize: d.L.Size6
                }, this.props.info))))))
            }, t.prototype.followGame = function(e) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return a.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                t = a.__assign({}, Object(l.a)({
                                    gameID: e
                                }), {
                                    update: function(e, t) {
                                        var a = t.data.followGame;
                                        i(e, c, {
                                            name: n.props.title
                                        }, function(e) {
                                            return e.game && a && a.game ? (e.game.self.follow = a.game.self.follow, e) : e
                                        })
                                    },
                                    optimisticResponse: {
                                        followGame: {
                                            __typename: "FollowGamePayload",
                                            game: {
                                                __typename: "Game",
                                                self: {
                                                    __typename: "GameSelfConnection",
                                                    follow: {
                                                        __typename: "GameFollow",
                                                        followedAt: (new Date).toISOString()
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.props.followGame(t)];
                            case 2:
                                return r.sent(), this.setState({
                                    inProgress: !1
                                }, function() {
                                    n.props.onFollow(n.props.title)
                                }), [3, 4];
                            case 3:
                                return r.sent(), this.setState({
                                    inProgress: !1
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype.unfollowGame = function(e) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return a.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                t = a.__assign({}, Object(l.a)({
                                    gameID: e
                                }), {
                                    update: function(e, t) {
                                        var a = t.data.unfollowGame;
                                        i(e, c, {
                                            name: n.props.title
                                        }, function(e) {
                                            return e.game && a && a.game ? (e.game.self.follow = a.game.self.follow, e) : e
                                        })
                                    },
                                    optimisticResponse: {
                                        unfollowGame: {
                                            __typename: "UnfollowGamePayload",
                                            game: {
                                                __typename: "Game",
                                                self: {
                                                    __typename: "GameSelfConnection",
                                                    follow: null
                                                }
                                            }
                                        }
                                    }
                                }), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.props.unfollowGame(t)];
                            case 2:
                                return r.sent(), this.setState({
                                    inProgress: !1
                                }, function() {
                                    n.props.onUnfollow(n.props.title)
                                }), [3, 4];
                            case 3:
                                return r.sent(), this.setState({
                                    inProgress: !1
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype.isFollowing = function() {
                return !!(this.followGameDataLoadedWithoutError() && this.props.data.game && this.props.data.game.self && this.props.data.game.self.follow)
            }, t.prototype.followGameDataLoadedWithoutError = function() {
                return !(!this.props || !this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.game)
            }, t = a.__decorate([Object(o.a)(c, {
                options: function(e) {
                    return {
                        variables: {
                            name: e.title
                        }
                    }
                }
            }), Object(o.a)(u, {
                name: "followGame"
            }), Object(o.a)(m, {
                name: "unfollowGame"
            })], t)
        }(r.Component)
    },
    "6lWU": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowGamesModal_Games"
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "games"
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
                                                    value: "name"
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
                                                        value: "285"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "380"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 131
            }
        };
        n.loc.source = {
            body: "query FollowGamesModal_Games($limit: Int) {\ngames(first: $limit) {\nedges {\nnode {\nid\nname\nboxArtURL(width: 285 height: 380)\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "6xx4": function(e, t) {},
    "6yQB": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("iJpA"),
            o = n("c8Oh"),
            l = n("TToO"),
            s = n("U7vG"),
            d = n("6sO2"),
            u = n("zCIC"),
            c = n("+Znq"),
            m = n("D9fv"),
            p = n("CSlQ"),
            g = n("Odds"),
            v = (n("vQzq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            i = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        i && t.props.updateLanguagePreferences(i, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return s.createElement(g.V, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, s.createElement(g.E, {
                            label: e.label,
                            checked: t.props.languagePreferences.includes(e.code),
                            "data-language-code": e.code,
                            "data-a-target": "language-filter-" + e.code + "-checkbox",
                            onChange: t.handleLanguageChange
                        }))
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.languagePreferences.length;
                    return s.createElement(g.V, {
                        className: "language-select-menu"
                    }, s.createElement(c.a, null, s.createElement(g.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: g.z.Hollow
                    }, s.createElement(g.V, {
                        display: g.H.Flex
                    }, Object(d.d)("Language", "LanguageSelectMenu"), s.createElement(g.V, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && s.createElement(g._1, {
                        type: g._2.Brand,
                        label: e.toString()
                    })))), s.createElement(g.p, {
                        direction: g.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, s.createElement(u.b, {
                        className: "language-select-menu__balloon"
                    }, s.createElement(g.V, {
                        padding: .5
                    }, Object(m.b)().map(this.renderLanguageOption))), s.createElement(g._19, {
                        background: g.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, s.createElement(g.u, {
                        type: g.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(d.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = l.__decorate([Object(p.c)("LanguageSelectMenu")], t)
            }(s.Component)),
            h = Object(i.a)(function(e) {
                return {
                    languagePreferences: Object(o.a)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    updateLanguagePreferences: r.c,
                    clearLanguagePreferences: r.a
                }, e)
            })(v);
        n.d(t, "a", function() {
            return h
        })
    },
    "7FW4": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = i.createElement(o.V, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.J.Column,
                justifyContent: o.U.Center,
                display: o.H.Flex
            }, i.createElement(o._23, {
                color: o.F.Link,
                fontSize: o.L.Size4,
                noWrap: !0
            }, Object(r.d)("View All", "Following--ViewAllButton")), i.createElement(o._23, {
                color: o.F.Alt2,
                fontSize: o.L.Size4,
                noWrap: !0
            }, e.subHeader));
            return e.linkTo && (t = i.createElement(a.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t)), i.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": s
            }, i.createElement(o.V, null, i.createElement(o.j, {
                ratio: e.aspectRatio
            }, i.createElement(o._19, {
                background: o.m.Alt2,
                fullHeight: !0
            }, t))))
        };
        var i = n("U7vG"),
            a = (n.n(i), n("F8kA")),
            r = n("6sO2"),
            o = n("Odds"),
            l = n("oHn4"),
            s = (n.n(l), "view-all-button-selector")
    },
    "81qH": function(e, t, n) {
        "use strict";
        var i = n("aBed");
        n.d(t, "VideoPreviewCard", function() {
            return i.a
        });
        var a = n("a4C9"),
            r = (n.n(a), n("XYqD"));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return r.a
        })
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("Aj/L"),
            o = "application/json; charset=UTF-8",
            l = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var a, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, a), [4, this._fetch(e, t)];
                                case 1:
                                    return r = i.sent(), [4, this.constructLegacyAPIResponse(r)];
                                case 2:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return a = i.sent(), t.requestError = a, [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return t === o ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = a.n.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = o);
                    var l = Object(r.c)(n);
                    return l && (i.Authorization = "OAuth " + l.authToken, l.legacyCSRFToken && (i["Twitch-Api-Token"] = l.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e
            }()
    },
    A8Kk: function(e, t) {},
    AHWf: function(e, t) {},
    AadB: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("+GT7"),
            l = n("SZoP"),
            s = n("NY9D"),
            d = n("vH/s"),
            u = n("v5ho"),
            c = n("RH2O"),
            m = n("2KeS"),
            p = n("V5M+"),
            g = n("jetF"),
            v = n("7vx8"),
            h = n("CSlQ"),
            f = n("BhyV"),
            k = n("+8VM"),
            y = n("oIkB"),
            S = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(r.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(r.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(r.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(r.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(r.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(r.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            },
            w = n("Odds"),
            b = n("nC3l"),
            _ = (n("sJt0"), "error-message"),
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? a.createElement(w.V, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(w._23, {
                            color: w.F.Error,
                            type: w._28.H4,
                            "data-test-selector": _
                        }, S(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.banUserFromCommunity = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.banUserFromCommunity ? (e = i.__assign({}, Object(y.a)({
                                            communityID: this.props.communityID,
                                            userID: this.props.userID,
                                            reason: this.state.reason
                                        }), {
                                            optimisticResponse: {
                                                banUserFromCommunity: {
                                                    error: null,
                                                    __typename: "BanUserFromCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.banUserFromCommunity(e)]) : [2];
                                    case 1:
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (r.n.tracking.track(d.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "ban",
                                            reason: this.state.reason
                                        }), this.props.onCloseModal()) : this.setState({
                                            error: t.data.banUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(w.Q, {
                        position: w._4.Relative
                    }, a.createElement(w._19, {
                        background: w.m.Base,
                        className: "stream-ban-modal"
                    }, a.createElement(w.V, {
                        padding: 2
                    }, this.renderErrorMessage(), a.createElement(w.V, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(w._23, {
                        type: w._28.H4
                    }, Object(r.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), a.createElement(w._19, {
                        borderTop: !0
                    }, a.createElement(w.V, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(w._23, {
                        bold: !0
                    }, Object(r.d)("Reason (Required)", "StreamBanModal")), a.createElement(w.R, {
                        type: w.S.Text,
                        placeholder: Object(r.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), a.createElement(w._19, {
                        borderTop: !0
                    }, a.createElement(w.V, {
                        padding: {
                            top: 2
                        },
                        textAlign: w._24.Center
                    }, a.createElement(w.V, {
                        display: w.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(w.u, {
                        type: w.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(r.d)("Cancel", "StreamBanModal"))), a.createElement(w.V, {
                        display: w.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(w.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(r.d)("Ban", "StreamBanModal")))))), a.createElement(k.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(a.Component),
            C = Object(f.compose)(Object(v.a)(b, {
                name: "banUserFromCommunity"
            }))(N),
            F = Object(c.a)(null, function(e) {
                return Object(m.bindActionCreators)({
                    onCloseModal: p.c
                }, e)
            })(C),
            E = (n("npyu"), n("plcU")),
            O = "error-message",
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? a.createElement(w.V, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(w._23, {
                            color: w.F.Error,
                            type: w._28.H4,
                            "data-test-selector": O
                        }, S(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.onDurationHoursChange = function(e) {
                        var n = parseInt(e.target.value, 10);
                        t.setState({
                            durationHours: n
                        })
                    }, t.timeoutUserFromCommunity = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.timeoutUserFromCommunity ? (e = i.__assign({}, Object(y.a)({
                                            communityID: this.props.communityID,
                                            durationHours: this.state.durationHours,
                                            userID: this.props.userID,
                                            reason: this.state.reason
                                        }), {
                                            optimisticResponse: {
                                                timeoutUserFromCommunity: {
                                                    error: null,
                                                    __typename: "TimeoutUserFromCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.timeoutUserFromCommunity(e)]) : [2];
                                    case 1:
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (r.n.tracking.track(d.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "timeout",
                                            reason: this.state.reason,
                                            duration: this.state.durationHours
                                        }), this.props.onCloseModal()) : this.setState({
                                            error: t.data.timeoutUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(w.Q, {
                        position: w._4.Relative
                    }, a.createElement(w._19, {
                        background: w.m.Base,
                        className: "stream-timeout-modal"
                    }, a.createElement(w.V, {
                        padding: 2
                    }, this.renderErrorMessage(), a.createElement(w.V, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(w._23, {
                        type: w._28.H4
                    }, Object(r.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), a.createElement(w._19, {
                        borderTop: !0
                    }, a.createElement(w.V, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(w._23, {
                        bold: !0
                    }, Object(r.d)("Reason (Required)", "StreamTimeoutModal")), a.createElement(w.R, {
                        type: w.S.Text,
                        placeholder: Object(r.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), a.createElement(w.V, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(w._23, {
                        bold: !0
                    }, Object(r.d)("Duration", "StreamTimeoutModal")), a.createElement(w._16, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, a.createElement("option", {
                        value: "2"
                    }, Object(r.d)("2 hours", "StreamTimeoutModal")), a.createElement("option", {
                        value: "4"
                    }, Object(r.d)("4 hours", "StreamTimeoutModal")), a.createElement("option", {
                        value: "8"
                    }, Object(r.d)("8 hours", "StreamTimeoutModal")), a.createElement("option", {
                        value: "12"
                    }, Object(r.d)("12 hours", "StreamTimeoutModal")), a.createElement("option", {
                        value: "24"
                    }, Object(r.d)("24 hours", "StreamTimeoutModal")))), a.createElement(w._19, {
                        borderTop: !0
                    }, a.createElement(w.V, {
                        padding: {
                            top: 2
                        },
                        textAlign: w._24.Center
                    }, a.createElement(w.V, {
                        display: w.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(w.u, {
                        type: w.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(r.d)("Cancel", "StreamTimeoutModal"))), a.createElement(w.V, {
                        display: w.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(w.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(r.d)("Timeout", "StreamTimeoutModal")))))), a.createElement(k.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(a.Component),
            T = Object(f.compose)(Object(v.a)(E, {
                name: "timeoutUserFromCommunity"
            }))(L),
            A = Object(c.a)(null, function(e) {
                return Object(m.bindActionCreators)({
                    onCloseModal: p.c
                }, e)
            })(T),
            V = n("PO03"),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(l.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(F, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(l.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(A, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? a.createElement(g.a, null, a.createElement(w.v, {
                        ariaLabel: Object(r.d)("Moderation", "DirectoryGamePage"),
                        icon: w._11.ChatRiskFlag
                    }), a.createElement(w.p, {
                        direction: w.q.BottomRight,
                        size: w.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? a.createElement(w.T, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, a.createElement(w.V, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(r.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? a.createElement(w.T, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, a.createElement(w.V, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(r.d)("Timeout", "StreamFlag"))) : null
                }, t = i.__decorate([Object(v.a)(V, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(h.c)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component),
            U = Object(c.a)(null, function(e) {
                return Object(m.bindActionCreators)({
                    onShowModal: p.d
                }, e)
            })(D),
            I = n("PLRK"),
            x = (n("GiGb"), "directory-game__card_container"),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getLinkTo = function(e, n) {
                        var i = t.props.trackingContent ? t.props.trackingContent : d.PageviewContent.Live,
                            a = t.props.directoryType === u.a.Communities ? d.PageviewMedium.Community : d.PageviewMedium.Game;
                        return t.props.trackingMedium && (a = t.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: a,
                                content: i,
                                content_index: n
                            }
                        }
                    }, t.renderStreamFlag = function() {
                        var e = t.props.streamNode;
                        return e.broadcaster ? t.props.directoryType === u.a.Communities && t.props.directoryName ? a.createElement(w.V, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: w._4.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, a.createElement(U, {
                            communityName: t.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, t.shouldShowGame = function(e) {
                        return t.props.directoryType !== u.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.streamNode,
                        t = this.props.streamIndex;
                    return e.broadcaster ? a.createElement("div", {
                        className: "stream-thumbnail",
                        "data-target": t ? "" : "directory-first-item",
                        style: {
                            order: t
                        }
                    }, a.createElement(w.V, {
                        className: "stream-thumbnail__card",
                        position: w._4.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": x
                    }, a.createElement(o.a, {
                        imageSrc: e.previewImageURL || r.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || I.a,
                        channelName: Object(l.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: this.shouldShowGame("boxArtURL") || r.a.defaultBoxArtURL,
                        gameTitle: this.shouldShowGame("name"),
                        gameLinkTo: this.getLinkTo(Object(s.c)(this.shouldShowGame("name")), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type,
                        streamMetadata: e.streamMetadata,
                        "data-a-target": "card-" + t,
                        "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                    }), this.renderStreamFlag())) : null
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return x
        }), n.d(t, "b", function() {
            return P
        })
    },
    AtoX: function(e, t) {},
    "Au+y": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowingGames_CurrentUser"
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
                                    value: "followedGames"
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
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
                                                        value: "285"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "380"
                                                    }
                                                }],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
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
                end: 166
            }
        };
        n.loc.source = {
            body: "query FollowingGames_CurrentUser($limit: Int) {\ncurrentUser {\nid\nfollowedGames(first: $limit) {\nnodes {\nid\nname\nboxArtURL(width: 285 height: 380)\nviewersCount\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    BWqq: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowingLive_CurrentUser"
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
                                    value: "followedLiveUsers"
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
                                                                                value: "56"
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
                                                                    value: "viewersCount"
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
                end: 357
            }
        };
        n.loc.source = {
            body: "query FollowingLive_CurrentUser($limit: Int $cursor: Cursor) {\ncurrentUser {\nid\nfollows {\ntotalCount\n}\nfollowedLiveUsers(first: $limit after: $cursor) {\nedges {\nnode {\nid\nlogin\ndisplayName\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\nviewersCount\ntitle\ntype\npreviewImageURL(width: 320 height: 180)\n}\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    C2pI: function(e, t) {},
    CybZ: function(e, t) {},
    D9fv: function(e, t, n) {
        "use strict";

        function i(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(a.d)("Other", "broadcaster-languages") : "Other"
            }]
        }
        n.d(t, "a", function() {
            return o
        }), t.b = function() {
            var e = a.n.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return r.slice().sort(function(e, n) {
                var i = t(e),
                    a = t(n);
                return i !== a ? i - a : i + ":" + e.label < a + ":" + n.label ? -1 : 1
            }).concat(i(!0))
        };
        var a = n("6sO2"),
            r = [{
                code: "ar",
                label: "العربية"
            }, {
                code: "bg",
                label: "Български"
            }, {
                code: "cs",
                label: "Čeština"
            }, {
                code: "da",
                label: "Dansk"
            }, {
                code: "de",
                label: "Deutsch"
            }, {
                code: "el",
                label: "Ελληνικά"
            }, {
                code: "en",
                label: "English"
            }, {
                code: "es",
                label: "Español"
            }, {
                code: "fi",
                label: "Suomi"
            }, {
                code: "fr",
                label: "Français"
            }, {
                code: "hu",
                label: "Magyar"
            }, {
                code: "it",
                label: "Italiano"
            }, {
                code: "ja",
                label: "日本語"
            }, {
                code: "ko",
                label: "한국어"
            }, {
                code: "nl",
                label: "Nederlands"
            }, {
                code: "no",
                label: "Norsk"
            }, {
                code: "pl",
                label: "Polski"
            }, {
                code: "pt",
                label: "Português"
            }, {
                code: "ru",
                label: "Русский"
            }, {
                code: "sk",
                label: "Slovenčina"
            }, {
                code: "sv",
                label: "Svenska"
            }, {
                code: "th",
                label: "ภาษาไทย"
            }, {
                code: "tr",
                label: "Türkçe"
            }, {
                code: "vi",
                label: "Tiếng Việt"
            }, {
                code: "zh-hk",
                label: "中文(粵語)"
            }, {
                code: "zh",
                label: "中文"
            }],
            o = new Set(r.concat(i()).map(function(e) {
                return e.code
            }))
    },
    DBTH: function(e, t, n) {
        "use strict";
        n.d(t, "f", function() {
            return a
        }), n.d(t, "g", function() {
            return r
        }), n.d(t, "i", function() {
            return o
        }), n.d(t, "h", function() {
            return l
        }), n.d(t, "k", function() {
            return s
        }), n.d(t, "j", function() {
            return d
        }), n.d(t, "a", function() {
            return u
        }), n.d(t, "d", function() {
            return c
        }), n.d(t, "b", function() {
            return v
        }), n.d(t, "c", function() {
            return h
        }), n.d(t, "e", function() {
            return f
        }), n.d(t, "m", function() {
            return k
        }), n.d(t, "n", function() {
            return y
        }), n.d(t, "l", function() {
            return S
        }), n.d(t, "o", function() {
            return w
        });
        var i, a = "TWILIGHT_WEB_ONBOARDING_CATEGORIES",
            r = "TWILIGHT_WEB_ONBOARDING_CHANNEL_RANKING",
            o = "TWILIGHT_WEB_ONBOARDING_FOLLOWING_FOR_YOU",
            l = "TWILIGHT_WEB_ONBOARDING",
            s = "TWILIGHT_WEB_ONBOARDING_RANDOMIZED_GAMES",
            d = "TWILIGHT_WEB_ONBOARDING_FOLLOW_CATEGORIES",
            u = "control";
        ! function(e) {
            e.Skip = "skip", e.NoSkip = "no_skip"
        }(i || (i = {}));
        var c, m = new Set([i.Skip.toString(), i.NoSkip.toString()]);
        ! function(e) {
            e.First = "first", e.Last = "last"
        }(c || (c = {}));
        var p, g = new Set([c.First.toString(), c.Last.toString()]);
        (p || (p = {})).Yes = "yes";
        var v;
        (v || (v = {})).Yes = "yes";
        var h;
        (h || (h = {})).ENABLED = "enabled";
        var f;
        (f || (f = {})).ENABLED = "enabled";
        var k = function(e) {
                return !!e && g.has(e)
            },
            y = function(e, t) {
                return !!e && m.has(e) && k(t)
            },
            S = function(e, t, n) {
                return !!e && m.has(e) && k(t) && n === p.Yes
            },
            w = function(e) {
                return e.getTime() >= b().getTime()
            },
            b = function() {
                return new Date((new Date).getTime() - 12096e5)
            }
    },
    "E+ZP": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Game_FollowGameCard"
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
                                            value: "follow"
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
                                                    value: "followedAt"
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
                end: 100
            }
        };
        n.loc.source = {
            body: "query Game_FollowGameCard($name: String) {\ngame(name: $name) {\nid\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    GiGb: function(e, t) {},
    IOwa: function(e, t, n) {
        "use strict";
        var i, a, r, o = n("TToO"),
            l = n("HW6M"),
            s = n("U7vG"),
            d = n("6sO2"),
            u = n("2o2f"),
            c = n("Odds"),
            m = (n("CybZ"), i = {}, i[u.a.Live] = "stream-type-indicator--live", i[u.a.Premiere] = "stream-type-indicator--premiere", i[u.a.Rerun] = "stream-type-indicator--rerun", i[u.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = (a = {}, a[u.a.Premiere] = c._11.VideoPremiere, a[u.a.Rerun] = c._11.VideoRerun, a[u.a.WatchParty] = c._11.VideoRerun, a),
            g = (r = {}, r[u.a.Premiere] = c._12.Live, r[u.a.Rerun] = c._12.Inherit, r[u.a.WatchParty] = c._12.Inherit, r),
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(c._19, {
                        className: this.getClassNames(),
                        color: c.F.Overlay,
                        background: c.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: c.s.Small,
                        display: c.H.Flex
                    }, s.createElement(c.V, {
                        display: c.H.Flex,
                        alignItems: c.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), s.createElement(c._23, {
                        type: c._28.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, l(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? s.createElement(c._19, {
                        borderRadius: c.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === u.a.Live ? s.createElement(c.V, {
                        className: "stream-type-indicator__live-wrapper",
                        display: c.H.Flex,
                        alignItems: c.c.Center
                    }, s.createElement(c.X, {
                        size: c.Y.Small
                    })) : s.createElement(c._10, {
                        asset: p[this.props.type],
                        type: g[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case u.a.Live:
                            return Object(d.d)("Live", "StreamTypeIndicator");
                        case u.a.Premiere:
                            return Object(d.d)("Premiere", "StreamTypeIndicator");
                        case u.a.Rerun:
                        case u.a.WatchParty:
                            return Object(d.d)("Rerun", "StreamTypeIndicator");
                        default:
                            return ""
                    }
                }, t
            }(s.Component);
        n.d(t, "a", function() {
            return v
        })
    },
    ISok: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("CSlQ"),
            r = n("81qH"),
            o = n("XYqD"),
            l = n("Odds"),
            s = function(e) {
                var t = [];
                if (null === e.videos)
                    for (var n = void 0 === e.placeholderCount ? 20 : e.placeholderCount, a = 0; a < n; a++) t.push(i.createElement(o.a, {
                        key: a
                    }));
                else t = e.videos.map(function(t, n) {
                    return i.createElement(l.V, {
                        "data-a-target": "video-tower-card-" + n,
                        key: "video-" + n,
                        padding: {
                            bottom: .5
                        }
                    }, i.createElement(r.VideoPreviewCard, {
                        hideGameArt: e.hideGameArt,
                        tracking: {
                            content: e.trackingContent,
                            content_index: n,
                            medium: e.trackingMedium
                        },
                        video: t
                    }))
                });
                return i.createElement(l._34, {
                    gutterSize: l._36.Small,
                    childWidth: e.videoCardSize || l._35.Large,
                    placeholderItems: 20
                }, t)
            },
            d = Object(a.c)("VideoTower", {
                autoReportInteractive: !0
            })(s);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return s
        }), n.d(t, "a", function() {
            return d
        })
    },
    IpE8: function(e, t, n) {
        "use strict";

        function i(e) {
            var t;
            if (!e.communities || 0 === e.communities.length) return g.createElement(F._23, {
                "data-a-target": "no-communities-text"
            }, Object(h.d)("No communities", "LiveCommunities"));
            var n, i = e.communities;
            if (e.showSample) {
                var a = Object(T.a)(e.directoryWidth || 0, 180, 1); - 1 === a ? i = [] : a < i.length && (i = i.slice(0, a - 1), n = g.createElement(L.a, {
                    subHeader: Object(h.d)("Communities", "LiveCommunities--view-all"),
                    linkTo: "/directory/following/communities",
                    aspectRatio: F.k.Aspect3x4
                })), t = g.createElement(F.V, {
                    margin: {
                        bottom: 2
                    }
                }, g.createElement(F._23, {
                    type: F._28.H4,
                    color: F.F.Alt2,
                    fontSize: F.L.Size5,
                    transform: F._27.Uppercase,
                    "data-a-target": "live-communities-header"
                }, Object(h.d)("Communities", "LiveCommunities")))
            }
            var r = i.map(function(e, t) {
                var n = e.node,
                    i = Object(h.d)("{channelsCount,number} streams", {
                        channelsCount: n.broadcastersCount
                    }, "LiveCommunities"),
                    a = Object(h.d)("{viewerCount,number} viewers {streams}", {
                        viewerCount: n.viewersCount,
                        streams: g.createElement("span", null, i)
                    }, "LiveCommunities");
                return g.createElement(F.V, {
                    key: n.id,
                    margin: {
                        bottom: 2
                    }
                }, g.createElement(F.t, {
                    linkTo: {
                        pathname: "/communities/" + encodeURIComponent(n.name),
                        state: {
                            content: "communities_select_click",
                            medium: "twitch_communities_directory",
                            content_index: t
                        }
                    },
                    title: n.displayName,
                    imageAlt: n.displayName + " cover image",
                    imageSrc: n.avatarURL || h.a.defaultBoxArtURL,
                    info: g.createElement("span", {
                        className: "live-communities__info"
                    }, a),
                    "data-a-target": "live-community-card-" + t
                }))
            });
            return g.createElement("div", null, t, g.createElement(F._34, {
                gutterSize: F._36.Small,
                childWidth: F._35.Small,
                placeholderItems: 30
            }, r, n))
        }

        function a() {
            return g.createElement(F.V, {
                className: "following__empty",
                margin: {
                    x: "auto"
                }
            }, g.createElement(F.V, {
                textAlign: F._24.Center,
                margin: {
                    bottom: 2
                }
            }, g.createElement(F._23, {
                color: F.F.Alt2,
                fontSize: F.L.Size4,
                type: F._28.H4
            }, Object(h.d)("Never miss the Channels you love.", "EmptyChannelList"))), g.createElement(F.V, {
                display: F.H.Flex,
                justifyContent: F.U.Between
            }, g.createElement(F.V, {
                className: "following__empty-information",
                position: F._4.Relative
            }, g.createElement(F.V, {
                margin: {
                    bottom: 1
                }
            }, g.createElement("figure", {
                className: "following__empty-image"
            }, g.createElement("img", {
                src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_1.png"
            }))), g.createElement(F._23, {
                fontSize: F.L.Size5
            }, Object(h.d)("Like the channel you're watching? Follow it.", "EmptyChannelList")), g.createElement(F._19, {
                className: "following__empty-information-num",
                position: F._4.Absolute,
                attachLeft: !0,
                attachTop: !0,
                background: F.m.Alt,
                textAlign: F._24.Center
            }, "1")), g.createElement(F.V, {
                className: "following__empty-information",
                position: F._4.Relative
            }, g.createElement(F.V, {
                margin: {
                    bottom: 1
                }
            }, g.createElement("figure", {
                className: "following__empty-image"
            }, g.createElement("img", {
                src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_2.png"
            }))), g.createElement(F._23, {
                fontSize: F.L.Size5
            }, Object(h.d)("We'll let you know when the channel goes live again.", "EmptyChannelList")), g.createElement(F._19, {
                className: "following__empty-information-num",
                position: F._4.Absolute,
                attachLeft: !0,
                attachTop: !0,
                background: F.m.Alt,
                textAlign: F._24.Center
            }, "2")), g.createElement(F.V, {
                className: "following__empty-information",
                position: F._4.Relative
            }, g.createElement(F.V, {
                margin: {
                    bottom: 1
                }
            }, g.createElement("figure", {
                className: "following__empty-image"
            }, g.createElement("img", {
                src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_3.png"
            }))), g.createElement(F._23, {
                fontSize: F.L.Size5
            }, Object(h.d)("Come back and watch your favorite channels.", "EmptyChannelList")), g.createElement(F._19, {
                className: "following__empty-information-num",
                position: F._4.Absolute,
                attachLeft: !0,
                attachTop: !0,
                background: F.m.Alt,
                textAlign: F._24.Center
            }, "3"))))
        }

        function r(e) {
            var t = Object(h.d)("Live hosts", "LiveHosts"),
                n = g.createElement(F.V, {
                    margin: {
                        bottom: 2
                    }
                }, g.createElement(F._23, {
                    type: F._28.H4,
                    color: F.F.Alt2,
                    fontSize: F.L.Size5,
                    transform: F._27.Uppercase,
                    "data-a-target": "live-hosts-header"
                }, t));
            if (!e.hosts || 0 === e.hosts.length) return e.followsCount > 0 ? g.createElement("div", null, n, g.createElement(F.V, {
                textAlign: F._24.Center,
                padding: {
                    y: 5
                }
            }, g.createElement(F._23, {
                color: F.F.Alt2,
                fontSize: F.L.Size4,
                "data-a-target": "no-hosts-live-text",
                italic: !0
            }, Object(h.d)("No Hosts Live", "LiveHosts")))) : g.createElement("div", null, n, !e.showSample && g.createElement(a, null));
            var i, r = e.hosts.filter(function(e) {
                return e.hosting && e.hosting.stream && e.hosting.id
            });
            if (e.maxCount) e.maxCount < r.length && (r = r.slice(0, e.maxCount - 1), i = g.createElement(L.a, {
                subHeader: "Live Hosts",
                onClickViewAll: e.onClickViewAll
            }));
            else if (e.showSample && e.directoryWidth && e.directoryWidth > 0) {
                var o = Object(T.a)(e.directoryWidth, 240, 2);
                o < r.length && (r = r.slice(0, o - 1), i = g.createElement(L.a, {
                    subHeader: t,
                    linkTo: {
                        pathname: "/directory/following/hosts",
                        state: {
                            medium: _.PageviewMedium.Following,
                            content: _.PageviewContent.Following
                        }
                    }
                }))
            }
            var l = r.map(function(e, t) {
                if (e.hosting && e.hosting.stream && e.hosting.id) {
                    var n = Object(q.a)(e.hosting.login, e.hosting.displayName, !0),
                        i = Object(q.a)(e.login, e.displayName, !0),
                        a = Object(h.d)("{hostDisplayName} hosting {hostedDisplayName}", {
                            hostDisplayName: i,
                            hostedDisplayName: n
                        }, "LiveHosts"),
                        r = e.hosting.stream && e.hosting.stream.game ? Object(R.c)(e.hosting.stream.game.name) : "";
                    return g.createElement(F.V, {
                        key: e.id,
                        margin: {
                            bottom: 2
                        }
                    }, g.createElement(z.a, {
                        imageSrc: e.hosting.stream.previewImageURL || h.a.defaultStreamPreviewURL,
                        imageAlt: a,
                        viewerCount: e.hosting.stream && e.hosting.stream.viewersCount || 0,
                        title: a,
                        channelName: n,
                        gameImageSrc: e.hosting.stream && e.hosting.stream.game && e.hosting.stream.game.boxArtURL || h.a.defaultBoxArtURL,
                        gameTitle: e.hosting.stream.game && e.hosting.stream.game.name || "",
                        gameLinkTo: {
                            pathname: r,
                            state: {
                                medium: _.PageviewMedium.Following,
                                content: _.PageviewContent.LiveHost,
                                content_index: t
                            }
                        },
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                medium: _.PageviewMedium.Following,
                                content: _.PageviewContent.LiveHost,
                                content_index: t
                            }
                        },
                        channelNameLinkTo: {
                            pathname: "/" + e.hosting.login + "/videos",
                            state: {
                                medium: _.PageviewMedium.Following,
                                content: _.PageviewContent.LiveHost,
                                content_index: t
                            }
                        },
                        "data-a-target": "live-host-card-" + t,
                        streamType: e.hosting.stream.type,
                        hosting: !0
                    }))
                }
            });
            return g.createElement("div", null, n, g.createElement(F._34, {
                gutterSize: F._36.Small,
                childWidth: F._35.Medium,
                placeholderItems: 20
            }, l, i))
        }

        function o(e) {
            var t = Object(h.d)("Live channels", "LiveChannels"),
                n = g.createElement(F.V, {
                    margin: {
                        bottom: 2
                    }
                }, g.createElement(F._23, {
                    type: F._28.H4,
                    color: F.F.Alt2,
                    fontSize: F.L.Size5,
                    transform: F._27.Uppercase,
                    "data-a-target": "live-channels-header"
                }, t));
            if (null !== e.users && 0 === e.users.length) return e.followsCount > 0 ? g.createElement("div", null, n, g.createElement(F.V, {
                textAlign: F._24.Center,
                padding: {
                    y: 5
                }
            }, g.createElement(F._23, {
                color: F.F.Alt2,
                fontSize: F.L.Size4,
                "data-a-target": "no-channels-live-text",
                italic: !0
            }, Object(h.d)("No Channels Live", "LiveChannels")))) : g.createElement("div", null, n, g.createElement(a, null));
            var i, r = e.users || [];
            if (e.maxDisplayCount && e.maxDisplayCount < r.length) r = r.slice(0, e.maxDisplayCount - 1), i = g.createElement(L.a, {
                subHeader: "Live Channels",
                onClickViewAll: e.onClickViewAll
            });
            else if (e.showSample && e.directoryWidth && e.directoryWidth > 0) {
                var o = Object(T.a)(e.directoryWidth, 240, 2);
                o < r.length && (r = r.slice(0, o - 1), i = g.createElement(L.a, {
                    subHeader: t,
                    linkTo: "/directory/following/live"
                }))
            }
            var l = r.map(function(e, t) {
                if (!e.stream || !e.id) return null;
                var n = Object(q.a)(e.login, e.displayName),
                    i = {
                        medium: _.PageviewMedium.Following,
                        content: _.PageviewContent.Live,
                        content_index: t
                    },
                    a = e.stream && e.stream.game ? Object(R.c)(e.stream.game.name) : "";
                return g.createElement(F.V, {
                    key: e.id,
                    margin: {
                        bottom: 2
                    }
                }, g.createElement(z.a, {
                    imageSrc: e.stream && e.stream.previewImageURL || h.a.defaultStreamPreviewURL,
                    imageAlt: e.stream && e.stream.title || "",
                    viewerCount: e.stream && e.stream.viewersCount || 0,
                    title: e.stream && e.stream.title || Object(h.d)("Untitled Broadcast", "LiveChannels"),
                    channelName: n,
                    gameImageSrc: e.stream && e.stream.game && e.stream.game.boxArtURL || h.a.defaultBoxArtURL,
                    gameTitle: e.stream && e.stream.game ? e.stream.game.name : "",
                    gameLinkTo: {
                        pathname: a,
                        state: i
                    },
                    linkTo: {
                        pathname: "/" + e.login,
                        state: i
                    },
                    channelNameLinkTo: {
                        pathname: "/" + e.login + "/videos",
                        state: i
                    },
                    "data-a-target": "live-channel-card-" + t,
                    vodcast: !(!e.stream || "watch_party" !== e.stream.type),
                    streamType: e.stream.type
                }))
            });
            if (0 === r.length)
                for (var s = 0; s < 5; s++) l.push(g.createElement(ie.VideoPreviewCardPlaceholder, {
                    key: "live-channels-placeholder-" + s
                }));
            return g.createElement("div", null, n, g.createElement(F._34, {
                gutterSize: F._36.Small,
                childWidth: F._35.Medium,
                placeholderItems: 20
            }, l, i))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l, s = n("RH2O"),
            d = n("2KeS"),
            u = n("+xm8"),
            c = n("f2i/"),
            m = n("Aj/L"),
            p = n("TToO"),
            g = n("U7vG"),
            v = n("CIox"),
            h = n("6sO2"),
            f = n("yWCw"),
            k = n("CSlQ"),
            y = n("eXld"),
            S = n("7vx8"),
            w = n("j7/Y"),
            b = n("w9tK"),
            _ = n("vH/s"),
            N = n("czpb"),
            C = n("DBTH"),
            F = n("Odds"),
            E = n("qb8C"),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.userDataLoaded = function() {
                        return t.props.data && !t.props.data.loading
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return p.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, h.n.experiments.getAssignment(C.h)];
                                case 1:
                                    return e = n.sent(), [4, h.n.experiments.getAssignment(C.i)];
                                case 2:
                                    return t = n.sent(), Object(C.n)(e, t) ? this.setState({
                                        forYouAssignment: t
                                    }) : this.setState({
                                        forYouAssignment: null
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.userDataLoaded() && void 0 !== this.state.forYouAssignment && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (void 0 === this.state.forYouAssignment || !this.userDataLoaded()) return null;
                    var e = this.props.activeCategory,
                        t = [g.createElement(F._20, {
                            key: "following-overview-tab",
                            active: void 0 === e,
                            linkTo: "/directory/following",
                            "data-a-target": "following-overview-tab"
                        }, Object(h.d)("Overview", "FollowingHeaderTabs")), g.createElement(F._20, {
                            key: "following-channels-tab",
                            active: e === _.SpadeFollowingCategory.Live,
                            "data-a-target": "following-channels-tab",
                            linkTo: "/directory/following/live"
                        }, Object(h.d)("Channels", "FollowingHeaderTabs")), g.createElement(F._20, {
                            key: "following-hosts-tab",
                            active: e === _.SpadeFollowingCategory.Hosts,
                            "data-a-target": "following-hosts-tab",
                            linkTo: "/directory/following/hosts"
                        }, Object(h.d)("Hosts", "FollowingHeaderTabs")), g.createElement(F._20, {
                            key: "following-games-tab",
                            active: e === _.SpadeFollowingCategory.Games,
                            "data-a-target": "following-games-tab",
                            linkTo: "/directory/following/games"
                        }, Object(h.d)("Games", "FollowingHeaderTabs")), g.createElement(F._20, {
                            key: "following-communities-tab",
                            active: e === _.SpadeFollowingCategory.Communities,
                            linkTo: Object(N.a)("/directory/following/communities"),
                            targetBlank: Object(N.b)(),
                            "data-a-target": "following-communities-tab"
                        }, Object(h.d)("Communities", "FollowingPage"))];
                    if (this.state.forYouAssignment && !this.props.data.error && this.props.data.currentUser && Object(C.o)(new Date(this.props.data.currentUser.createdAt))) {
                        var n = g.createElement(F._20, {
                            key: "following-foryou-tab",
                            "data-test-selector": "for-you-tab",
                            active: e === _.SpadeFollowingCategory.ForYou,
                            linkTo: "/directory/following/foryou",
                            "data-a-target": "following-foryou-tab"
                        }, Object(h.d)("For You", "FollowingHeaderTabs"));
                        this.state.forYouAssignment === C.d.First ? t.unshift(n) : this.state.forYouAssignment === C.d.Last && t.push(n)
                    }
                    return g.createElement(F.V, {
                        className: "following__header-tabs",
                        margin: {
                            bottom: 2
                        }
                    }, g.createElement(F._21, null, t))
                }, t = p.__decorate([Object(k.c)("FollowingHeaderTabs"), Object(S.a)(E)], t)
            }(g.Component),
            L = n("7FW4"),
            T = n("peXu"),
            A = (n("4194"), n("cJkg")),
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    h.n.setPageTitle(Object(h.d)("Communities You Follow", "FollowingCommunitiesPage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? g.createElement(F.V, {
                        display: F.H.Flex,
                        position: F._4.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, g.createElement(F.Z, {
                        fillContent: !0
                    })) : this.props.data.error ? g.createElement(f.a, {
                        message: Object(h.d)("Error loading data.", "FollowingCommunitiesPage")
                    }) : g.createElement(i, {
                        communities: this.props.data.currentUser ? this.props.data.currentUser.followedCommunities.edges : []
                    }), g.createElement(F.V, {
                        padding: 3
                    }, g.createElement(O, {
                        activeCategory: _.SpadeFollowingCategory.Communities
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = p.__decorate([Object(S.a)(A, {
                    options: {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 100
                        }
                    }
                }), Object(k.c)("FollowingCommunitiesPage", {
                    destination: b.a.DirectoryFollowingCommunities
                }), Object(w.a)({
                    location: _.PageviewLocation.Directory,
                    properties: function() {
                        return {
                            content_type: _.PageviewDirectoryContentType.Communities,
                            tab: _.PageviewFollowingTab.Communities
                        }
                    }
                })], t)
            }(g.Component),
            D = n("V5M+"),
            U = n("+8VM"),
            I = n("zCIC"),
            x = n("T0IN"),
            P = n("5G5w"),
            G = n("6lWU"),
            j = (n("A8Kk"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        followCount: 0
                    }, n.getAndStoreShuffledGameCards = function() {
                        n.props.data && (n.shuffledGameCards = Object(x.a)(n.props.data.games.edges.map(function(e, t) {
                            var i = e.node;
                            return g.createElement(F.V, {
                                key: i.id
                            }, g.createElement(P.a, {
                                info: "",
                                title: i.name,
                                imageAlt: i.name,
                                imageSrc: i.boxArtURL,
                                onFollow: n.onFollow,
                                onUnfollow: n.onUnfollow,
                                "data-a-target": "follow-game-card-" + t
                            }))
                        })))
                    }, n.onClickContinue = function() {
                        n.props.onContinue && n.props.onContinue(), h.n.store.dispatch(Object(D.c)())
                    }, n.onFollow = function() {
                        n.setState(function(e) {
                            return {
                                followCount: e.followCount + 1
                            }
                        }), n.props.onFollowChange && n.props.onFollowChange()
                    }, n.onUnfollow = function() {
                        n.setState(function(e) {
                            return {
                                followCount: e.followCount - 1
                            }
                        }), n.props.onFollowChange && n.props.onFollowChange()
                    }, n
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return !this.props.data || this.props.data.loading ? null : (this.shuffledGameCards || this.getAndStoreShuffledGameCards(), g.createElement(F._19, {
                        className: "following-games-modal",
                        background: F.m.Base,
                        padding: 2,
                        overflow: F._0.Hidden,
                        "data-a-target": "follow-games-modal",
                        display: F.H.Flex,
                        flexDirection: F.J.Column,
                        flexWrap: F.K.NoWrap
                    }, g.createElement(F.V, {
                        flexGrow: 0,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: F._24.Center,
                        display: F.H.Flex,
                        flexDirection: F.J.Column,
                        alignContent: F.b.Center
                    }, g.createElement(F.V, {
                        margin: {
                            bottom: .5
                        }
                    }, g.createElement(F._23, {
                        fontSize: F.L.Size4,
                        color: F.F.Base,
                        bold: !0
                    }, Object(h.d)("Choose some games that you'd like to follow.", "FollowGamesModal"))), g.createElement(F._23, {
                        fontSize: F.L.Size5,
                        color: F.F.Alt
                    }, Object(h.d)("This will let you pin your favorites for easy access.", "FollowGamesModal"))), g.createElement(F.V, {
                        className: "following-games-modal__list",
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1
                    }, g.createElement(I.b, {
                        suppressScrollX: !0
                    }, g.createElement(F.V, {
                        padding: 1
                    }, g.createElement(F._34, {
                        childWidth: F._35.Small,
                        gutterSize: F._36.Small,
                        placeholderItems: 99
                    }, this.shuffledGameCards)))), g.createElement(F.V, {
                        display: F.H.Flex,
                        justifyContent: F.U.Center,
                        padding: {
                            y: 1
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, g.createElement(F.u, {
                        size: F.x.Large,
                        onClick: this.onClickContinue,
                        disabled: 0 === this.state.followCount
                    }, Object(h.d)("Continue", "FollowGamesModal"))), g.createElement(U.a, null)))
                }, t = p.__decorate([Object(S.a)(G, {
                    options: {
                        variables: {
                            limit: 40
                        }
                    }
                })], t)
            }(g.Component)),
            R = n("NY9D"),
            H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = g.createElement(F.V, {
                        margin: {
                            bottom: 2
                        }
                    }, g.createElement(F._23, {
                        type: F._28.H4,
                        color: F.F.Alt2,
                        fontSize: F.L.Size5,
                        transform: F._27.Uppercase,
                        "data-a-target": "live-games-header"
                    }, Object(h.d)("Live games", "LiveGames")));
                    if (!this.props.games) return g.createElement("div", null, e);
                    var t = this.props.games.filter(function(e) {
                        return e && !!e.viewersCount
                    });
                    if (!(t = t.sort(function(e, t) {
                            if (!e) return -1;
                            if (!t) return 1;
                            var n = e.name.toLowerCase(),
                                i = t.name.toLowerCase();
                            return n < i ? -1 : n > i ? 1 : 0
                        })) || 0 === t.length) return g.createElement(F._19, {
                        fullWidth: !0,
                        background: F.m.Alt2,
                        display: F.H.Flex,
                        flexDirection: F.J.Column,
                        alignItems: F.c.Center,
                        padding: {
                            y: 3
                        },
                        margin: {
                            y: 2
                        },
                        "data-target": "following__follow-games-cta"
                    }, g.createElement(F.V, {
                        margin: {
                            bottom: 1
                        }
                    }, g.createElement(F._23, {
                        fontSize: F.L.Size4,
                        color: F.F.Alt2
                    }, Object(h.d)("You can now follow your favorite games!", "LiveGames"))), g.createElement(F.V, {
                        margin: {
                            top: .5
                        }
                    }, g.createElement(F.u, {
                        size: F.x.Large,
                        onClick: this.props.showFollowGamesModal,
                        "data-a-target": "find-out-more-button"
                    }, Object(h.d)("Find Out More!", "LiveGames"))));
                    var n;
                    if (this.props.showSample && this.props.directoryWidth && this.props.directoryWidth > 0) {
                        var i = Object(T.a)(this.props.directoryWidth, 180, 1);
                        i < t.length && (t = t.slice(0, i - 1), n = g.createElement(F.V, {
                            margin: {
                                bottom: 2
                            }
                        }, g.createElement(L.a, {
                            subHeader: "Live Games",
                            linkTo: "/directory/following/games",
                            aspectRatio: F.k.Aspect3x4
                        })))
                    }
                    var a = t.map(function(e, t) {
                        return e ? g.createElement(F.V, {
                            key: e.id,
                            margin: {
                                bottom: 2
                            }
                        }, g.createElement(F.t, {
                            linkTo: {
                                pathname: Object(R.c)(e.name),
                                state: {
                                    content: "twitch_following",
                                    medium: "live_game",
                                    content_index: t
                                }
                            },
                            title: e.name,
                            imageAlt: e.name + " cover image",
                            imageSrc: e.boxArtURL || h.a.defaultBoxArtURL,
                            info: Object(h.d)("{viewerCount,number} viewers", {
                                viewerCount: e.viewersCount
                            }, "LiveGames"),
                            "data-a-target": "live-game-card-" + t
                        })) : null
                    });
                    return g.createElement("div", null, e, g.createElement(F._34, {
                        gutterSize: F._36.Small,
                        childWidth: F._35.Small,
                        placeholderItems: 30
                    }, a, n))
                }, t
            }(g.Component),
            M = Object(s.a)(null, function(e, t) {
                return Object.assign(Object(d.bindActionCreators)({
                    showFollowGamesModal: function() {
                        return Object(D.d)(j, {
                            onFollowChange: t.onFollowChange
                        })
                    }
                }, e), t)
            })(H),
            W = n("Au+y"),
            B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    h.n.setPageTitle(Object(h.d)("Games You Follow", "FollowingGamesPage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? g.createElement(F.V, {
                        display: F.H.Flex,
                        position: F._4.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, g.createElement(F.Z, {
                        fillContent: !0
                    })) : this.props.data.error ? g.createElement(f.a, {
                        message: Object(h.d)("Error loading data.", "FollowingGamesPage")
                    }) : g.createElement(M, {
                        games: this.props.data.currentUser ? this.props.data.currentUser.followedGames.nodes : [],
                        onFollowChange: this.props.data.refetch
                    }), g.createElement(F.V, {
                        padding: 3
                    }, g.createElement(O, {
                        activeCategory: _.SpadeFollowingCategory.Games
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = p.__decorate([Object(S.a)(W, {
                    options: {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 100
                        }
                    }
                }), Object(k.c)("FollowingGamesPage", {
                    destination: b.a.DirectoryFollowingGames
                }), Object(w.a)({
                    location: _.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: _.PageviewDirectoryContentType.Games,
                            tab: _.PageviewFollowingTab.Games,
                            num_live_games: e.data.currentUser.followedGames.nodes.filter(function(e) {
                                return e && e.viewersCount > 0
                            }).length
                        }
                    }
                })], t)
            }(g.Component),
            z = n("+GT7"),
            q = n("SZoP"),
            Q = (n("tkib"), n("NAfc")),
            Y = 50,
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        maxCount: Y
                    }, t.onClickViewAll = function() {
                        return p.__awaiter(t, void 0, void 0, function() {
                            return p.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.props.data.refetch({
                                            limit: 100
                                        })];
                                    case 1:
                                        return e.sent(), this.setState({
                                            maxCount: null
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    h.n.setPageTitle(Object(h.d)("Hosts You Follow", "FollowingHostsPage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e;
                    if (this.props.data.loading) e = g.createElement(F.V, {
                        display: F.H.Flex,
                        position: F._4.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, g.createElement(F.Z, {
                        fillContent: !0
                    }));
                    else if (this.props.data.error) e = g.createElement(f.a, {
                        message: Object(h.d)("Error loading data.", "FollowingHostsPage")
                    });
                    else {
                        var t = this.props.data.currentUser ? this.props.data.currentUser.followedHosts.nodes : [],
                            n = this.props.data.currentUser ? this.props.data.currentUser.follows.totalCount : 0;
                        e = g.createElement(r, {
                            hosts: t,
                            followsCount: n,
                            maxCount: this.state.maxCount,
                            onClickViewAll: this.onClickViewAll
                        })
                    }
                    return g.createElement(F.V, {
                        padding: 3
                    }, g.createElement(O, {
                        activeCategory: _.SpadeFollowingCategory.Hosts
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = p.__decorate([Object(S.a)(Q, {
                    options: function() {
                        return {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                limit: 51
                            }
                        }
                    }
                }), Object(k.c)("FollowingHostsPage", {
                    destination: b.a.DirectoryFollowingHosts
                }), Object(w.a)({
                    location: _.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: _.PageviewDirectoryContentType.Hosts,
                            tab: _.PageviewFollowingTab.Hosts,
                            num_host_channels: e.data.currentUser.followedHosts.nodes.length
                        }
                    }
                })], t)
            }(g.Component),
            X = n("DtWM"),
            J = n("iOr9"),
            Z = n("bZTi"),
            K = n("VDV3"),
            ee = n("TGxD"),
            te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error || 0 === this.props.data.currentUser.recommendations.videos.edges.length) return null;
                    var e = g.createElement(F.V, {
                            margin: {
                                bottom: 2
                            }
                        }, g.createElement(F._23, {
                            type: F._28.H4,
                            color: F.F.Alt2,
                            fontSize: F.L.Size5,
                            transform: F._27.Uppercase
                        }, Object(h.d)("Based on your viewing history", "SuggestedVideos"))),
                        t = [];
                    if (this.props.data.currentUser.recommendations.videos && (t = this.props.data.currentUser.recommendations.videos.edges.map(function(e) {
                            return e.node
                        })), this.props.directoryWidth > 0) {
                        var n = Object(T.a)(this.props.directoryWidth, 240, 2);
                        t = t.slice(0, n)
                    }
                    return g.createElement("div", null, e, g.createElement(K.b, {
                        trackingMedium: _.PageviewMedium.Following,
                        trackingContent: _.PageviewContent.SuggestedVideos,
                        videoCardSize: F._35.Medium,
                        videos: t
                    }))
                }, t = p.__decorate([Object(S.a)(ee, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: 30
                        }
                    }
                }), Object(k.c)("SuggestedVideos")], t)
            }(g.Component);
        ! function(e) {
            e.FOLLOWING_BASIC = "following_basic", e.CONTROL = "control"
        }(l || (l = {}));
        var ne = function(e) {
                var t = {
                    name: "TWILIGHT_VOD_REDITUS",
                    assignments: (i = {
                        fallback: function() {
                            return g.createElement(te, {
                                directoryWidth: e.directoryWidth
                            })
                        }
                    }, i[l.FOLLOWING_BASIC] = function() {
                        return Z.a.wrap(function() {
                            return n.e(71).then(n.bind(null, "crkb"))
                        }, "FinishWatchingTower")({
                            directoryWidth: e.directoryWidth
                        })
                    }, i),
                    loader: function() {
                        return null
                    }
                };
                return g.createElement(J.a, p.__assign({}, t));
                var i
            },
            ie = n("81qH"),
            ae = function(e) {
                var t = {
                    assignments: {
                        fallback: function() {
                            return null
                        },
                        enabled: function() {
                            return Z.a.wrap(function() {
                                return n.e(69).then(n.bind(null, "IwGL"))
                            }, "LatestVideosFromFollowedCarousel")(e)
                        }
                    },
                    loader: function() {
                        return g.createElement(F.Z, null)
                    },
                    name: "TWILIGHT_FOLLOWING_INDEX_LATEST_VIDEOS_V2"
                };
                return g.createElement(J.a, p.__assign({}, t))
            },
            re = n("X9eO"),
            oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        directoryWidth: -1
                    }, t.onResize = function(e) {
                        t.setState({
                            directoryWidth: e
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    h.n.setPageTitle(Object(h.d)("Following", "FollowingPage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.currentUser;
                    return this.props.data.error || !this.props.data.loading && !e ? g.createElement(f.a, {
                        message: Object(h.d)("Error loading data.", "FollowingPage")
                    }) : g.createElement(F.V, {
                        padding: 3
                    }, g.createElement(O, null), g.createElement(o, {
                        key: "live-channels",
                        showSample: !0,
                        directoryWidth: this.state.directoryWidth,
                        users: this.props.data.loading ? null : e && e.followedLiveUsers.nodes || [],
                        followsCount: e ? e.follows.totalCount : 0
                    }), g.createElement(ae, {
                        tracking: {
                            content: _.PageviewContent.Following,
                            location: _.PageviewLocation.Directory,
                            medium: _.PageviewMedium.Following
                        }
                    }), e && e.followedHosts.nodes.length > 0 && g.createElement(r, {
                        key: "live-hosts",
                        showSample: !0,
                        directoryWidth: this.state.directoryWidth,
                        hosts: e ? e.followedHosts.nodes : [],
                        followsCount: e ? e.follows.totalCount : 0
                    }), e && g.createElement(M, {
                        key: "live-games",
                        showSample: !0,
                        directoryWidth: this.state.directoryWidth,
                        games: e ? e.followedGames.nodes : [],
                        onFollowChange: this.props.data.refetch
                    }), g.createElement(ne, {
                        key: "finish-watching-experiments",
                        directoryWidth: this.state.directoryWidth
                    }), e && g.createElement(i, {
                        key: "live-communities",
                        showSample: !0,
                        communities: e ? e.followedCommunities.edges : [],
                        directoryWidth: this.state.directoryWidth
                    }), g.createElement(X.a, {
                        onResize: this.onResize
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = p.__decorate([Object(S.a)(re, {
                    options: {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 30
                        }
                    }
                }), Object(k.c)("FollowingIndexPage", {
                    destination: b.a.DirectoryFollowingIndex
                }), Object(w.a)({
                    location: _.PageviewLocation.Directory,
                    properties: function() {
                        return {
                            content_type: _.PageviewDirectoryContentType.Mixed,
                            tab: _.PageviewFollowingTab.Overview
                        }
                    }
                })], t)
            }(g.Component),
            le = n("BWqq"),
            se = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    h.n.setPageTitle(Object(h.d)("Channels You Follow", "FollowingLivePage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e, t = !1;
                    if (this.props.data.loading && !this.props.data.currentUser) e = g.createElement(F.V, {
                        display: F.H.Flex,
                        position: F._4.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, g.createElement(F.Z, {
                        fillContent: !0
                    }));
                    else if (this.props.data.error) e = g.createElement(f.a, {
                        message: Object(h.d)("Error loading data.", "FollowingLivePage")
                    });
                    else {
                        var n = this.props.data.currentUser,
                            i = [];
                        n && n.followedLiveUsers.edges && (i = n.followedLiveUsers.edges.map(function(e) {
                            return e.node
                        }));
                        var a = this.props.data.currentUser ? this.props.data.currentUser.follows.totalCount : 0;
                        e = g.createElement(o, {
                            users: i,
                            followsCount: a
                        }), t = this.props.data.currentUser && n.followedLiveUsers.pageInfo.hasNextPage
                    }
                    return g.createElement(F.V, {
                        padding: 3
                    }, g.createElement(O, {
                        activeCategory: _.SpadeFollowingCategory.Live
                    }), e, g.createElement(I.a, {
                        enabled: t,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 100
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = p.__decorate([Object(S.a)(le, {
                    options: function() {
                        return {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                limit: 50
                            }
                        }
                    },
                    props: function(e) {
                        return p.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data.currentUser.followedLiveUsers.edges;
                                return e.data.fetchMore({
                                    query: le,
                                    variables: {
                                        limit: 30,
                                        cursor: t[t.length - 1].cursor
                                    },
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            currentUser: p.__assign({}, n.currentUser, {
                                                followedLiveUsers: p.__assign({}, n.currentUser.followedLiveUsers, {
                                                    edges: function(e, t) {
                                                        var n = new Set(e.map(function(e) {
                                                            return e.node.id
                                                        }));
                                                        return e.concat(t.filter(function(e) {
                                                            return !n.has(e.node.id)
                                                        }))
                                                    }(e.currentUser.followedLiveUsers.edges, n.currentUser.followedLiveUsers.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(k.c)("FollowingLivePage", {
                    destination: b.a.DirectoryFollowingLiveChannels
                }), Object(w.a)({
                    location: _.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: _.PageviewDirectoryContentType.Channels,
                            tab: _.PageviewFollowingTab.Channels,
                            num_live_channels: e.data.currentUser.followedLiveUsers.edges.length
                        }
                    }
                })], t)
            }(g.Component),
            de = function() {
                return n.e(74).then(n.bind(null, "oms2"))
            },
            ue = n("54wg"),
            ce = n("F8kA"),
            me = n("IOwa"),
            pe = n("2o2f"),
            ge = n("/XPz"),
            ve = n("KSGD"),
            he = n("S4HN"),
            fe = n("AadB"),
            ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.impressionEventFired = !1, t.setRef = function(e) {
                        return t.element = e
                    }, t.isVisible = function(e) {
                        if (null !== t.element) {
                            var n = t.element.getBoundingClientRect();
                            return n.left < e.right && n.right > e.left
                        }
                        return !1
                    }, t.trackImpression = function() {
                        var e = {
                            channel: t.props.streamNode.title,
                            channel_id: t.props.streamNode.id,
                            action: he.a.Impression,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(he.c)(e)
                    }, t.trackClickEvent = function() {
                        var e = {
                            channel: t.props.streamNode.title,
                            channel_id: t.props.streamNode.id,
                            action: he.a.Click,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(he.c)(e)
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : h.i.warn("<StreamThumbnailWithTrackingComponent /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return g.createElement("div", {
                        onClick: this.trackClickEvent
                    }, g.createElement(F.V, {
                        refDelegate: this.setRef
                    }, g.createElement(fe.b, {
                        key: this.props.streamIndex,
                        directoryName: this.props.directoryName,
                        directoryType: this.props.directoryType,
                        streamIndex: this.props.streamIndex,
                        streamNode: this.props.streamNode,
                        trackingMedium: this.props.trackingMedium
                    })))
                }, t.prototype.checkVisible = function(e) {
                    return p.__awaiter(this, void 0, void 0, function() {
                        return p.__generator(this, function(t) {
                            return !this.impressionEventFired && this.isVisible(e) && (this.trackImpression(), this.impressionEventFired = !0), [2]
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: ve.func
                }, t
            }(g.Component),
            ye = (n("6xx4"), "community-streams-row__title"),
            Se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderTitle = function() {
                        if (t.props.title) return g.createElement(F.V, {
                            className: "community-streams-row__title"
                        }, g.createElement(F._23, {
                            "data-test-selector": ye,
                            color: F.F.Alt2,
                            fontSize: F.L.Size5,
                            transform: F._27.Uppercase
                        }, g.createElement(ce.a, {
                            to: Object(R.c)(t.props.name)
                        }, t.props.title)))
                    }, t.renderCommunityStreams = function() {
                        return t.props.data.map(function(e, n) {
                            return g.createElement(F.V, {
                                key: "community-streams-row-stream-thumbnail-" + e.id,
                                position: F._4.Relative
                            }, g.createElement(F.V, {
                                padding: .5,
                                position: F._4.Absolute,
                                zIndex: F._39.Above
                            }, g.createElement(me.a, {
                                type: pe.a.Live
                            })), g.createElement(ke, {
                                key: e.id,
                                trackingMedium: _.PageviewMedium.BrowseForYou,
                                directoryName: t.props.name,
                                directoryType: t.props.type,
                                streamIndex: n,
                                streamNode: e
                            }))
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.length) return null;
                    var e = 1 === this.props.data.length ? 1 : 0;
                    return g.createElement(F.V, {
                        "data-test-selector": "community-streams-row",
                        flexShrink: 0
                    }, g.createElement(F.V, {
                        alignItems: F.c.Center,
                        display: F.H.Flex,
                        flexWrap: F.K.NoWrap,
                        justifyContent: F.U.Between,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderTitle(), g.createElement(ge.a, {
                        gameName: this.props.name,
                        src: _.PageviewMedium.BrowseForYou
                    })), g.createElement(I.b, null, g.createElement(F.V, {
                        display: F.H.Flex
                    }, g.createElement(F._34, {
                        gutterSize: F._36.Small,
                        childWidth: F._35.Large,
                        noWrap: !0,
                        placeholderItems: e
                    }, this.renderCommunityStreams()))))
                }, t = p.__decorate([Object(k.c)("CommunityStreamsRow")], t)
            }(g.Component),
            we = n("QcSp"),
            be = 7,
            _e = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getData = function() {
                        var e = t.rankedChannelStreamsInputPresent() && t.rankedChannelStreamsLoaded();
                        if (e && t.communityStreamsLoaded() && t.props.communityStreamsData.directory.streams && t.props.communityStreamsData.directory.streams.edges) {
                            var n = t.props.rankedChannelData.users.filter(function(e) {
                                return e.stream && e.stream.id && e.stream.broadcaster && e.stream.broadcaster.login
                            }).map(function(e) {
                                return e.stream
                            }).slice(0, be);
                            if (n.length === be) return n;
                            var i = new Set(n.map(function(e) {
                                    return e.id
                                })),
                                a = t.props.communityStreamsData.directory.streams.edges.filter(function(e) {
                                    var t = e.node;
                                    return !i.has(t.id) && t.broadcaster && t.broadcaster.login
                                }).map(function(e) {
                                    return e.node
                                });
                            return n.concat(a.slice(0, be - n.length))
                        }
                        return !e && t.communityStreamsLoaded() && t.props.communityStreamsData.directory.streams && t.props.communityStreamsData.directory.streams.edges ? t.props.communityStreamsData.directory.streams.edges.filter(function(e) {
                            var t = e.node;
                            return t.broadcaster && t.broadcaster.login
                        }).map(function(e) {
                            return e.node
                        }) : []
                    }, t.communityStreamsLoaded = function() {
                        return t.props.communityStreamsData && !t.props.communityStreamsData.loading && !t.props.communityStreamsData.error && t.props.communityStreamsData.directory
                    }, t.rankedChannelStreamsInputPresent = function() {
                        return !!t.props.channelLogins && !!t.props.channelLogins.length
                    }, t.rankedChannelStreamsLoaded = function() {
                        return t.props.rankedChannelData && !t.props.rankedChannelData.loading && !t.props.rankedChannelData.error && t.props.rankedChannelData.users
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    (this.rankedChannelStreamsInputPresent() && this.rankedChannelStreamsLoaded() || !this.rankedChannelStreamsInputPresent() && !this.rankedChannelStreamsLoaded()) && this.communityStreamsLoaded() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return g.createElement(Se, {
                        name: this.props.name,
                        title: this.props.title,
                        type: this.props.type,
                        data: this.getData()
                    })
                }, t = p.__decorate([Object(S.a)(ue, {
                    name: "communityStreamsData",
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.name,
                                limit: be,
                                type: e.type
                            }
                        }
                    }
                }), Object(S.a)(we, {
                    name: "rankedChannelData",
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                logins: e.channelLogins
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogins || !e.channelLogins.length
                    }
                }), Object(k.c)("CommunityStreamsRowContainer")], t)
            }(g.Component),
            Ne = (n("4az8"), n("QjjF")),
            Ce = "for-you__empty",
            Fe = "for-you__add_more_games",
            Ee = 10,
            Oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        rankedChannelData: {},
                        loadingRankedChannelData: !1
                    }, t.logger = h.n.logger.withCategory("for-you"), t.loadedChannelRankingsData = !1, t.renderPage = function() {
                        return t.userFollowedGamesDataLoaded(t.props) ? t.props.data.currentUser.followedGames && t.props.data.currentUser.followedGames.nodes && t.props.data.currentUser.followedGames.nodes.length ? g.createElement(F.V, null, t.renderFollowedCommunityStreams(), g.createElement(F.V, {
                            margin: {
                                top: .5
                            }
                        }, t.renderAddMoreGamesCTA())) : t.renderEmptyFollowedState() : g.createElement(F.V, null, g.createElement(F.Z, {
                            fillContent: !0
                        }))
                    }, t.userFollowedGamesDataLoaded = function(e) {
                        return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                    }, t.renderFollowedCommunityStreams = function() {
                        if (t.props.data.currentUser.followedGames && t.props.data.currentUser.followedGames.nodes && t.props.data.currentUser.followedGames.nodes.length) return t.props.data.currentUser.followedGames.nodes.map(function(e) {
                            return g.createElement(F.V, {
                                key: e.id
                            }, g.createElement(_e, {
                                key: e.id,
                                title: Object(h.d)("BECAUSE YOU FOLLOW {name}", {
                                    name: e.name.toUpperCase()
                                }, "ForYouPage"),
                                name: e.name,
                                type: e.directoryType,
                                channelLogins: t.state.rankedChannelData[e.id]
                            }))
                        })
                    }, t.renderAddMoreGamesCTA = function() {
                        if (!t.props.data.currentUser.followedGames || !t.props.data.currentUser.followedGames.nodes || t.props.data.currentUser.followedGames.nodes.length < Ee) return g.createElement(F.T, {
                            "data-test-selector": Fe,
                            onClick: t.redirectToCommunitySelectionPage,
                            alpha: !0
                        }, g.createElement(F._19, {
                            alignItems: F.c.Center,
                            border: !0,
                            display: F.H.Flex,
                            justifyContent: F.U.Center,
                            padding: 2
                        }, g.createElement(F.V, {
                            alignItems: F.c.Center,
                            display: F.H.Flex,
                            margin: {
                                right: 1
                            }
                        }, g.createElement(F._10, {
                            asset: F._11.Plus,
                            type: F._12.Alt2
                        })), g.createElement(F._23, {
                            fontSize: F.L.Size5,
                            color: F.F.Alt2
                        }, Object(h.d)("Add More Games", "ForYouPage"))))
                    }, t.renderEmptyFollowedState = function() {
                        return g.createElement(F._19, {
                            className: "for-you__empty",
                            "data-test-selector": Ce,
                            background: F.m.Base,
                            display: F.H.Flex,
                            flexDirection: F.J.Column,
                            margin: {
                                bottom: 1
                            },
                            alignItems: F.c.Center
                        }, g.createElement(j, {
                            onContinue: t.refetchFollowedData
                        }))
                    }, t.redirectToFollowing = function() {
                        h.n.history.push("/directory/following" + location.search)
                    }, t.redirectToCommunitySelectionPage = function() {
                        window.location.assign("/hi" + location.search)
                    }, t.refetchFollowedData = function() {
                        return p.__awaiter(t, void 0, void 0, function() {
                            return p.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.props.data.refetch()];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            })
                        })
                    }, t.loadChannelRankingsByGameData = function() {
                        return p.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return p.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.loadedChannelRankingsData) return [3, 4];
                                        this.loadedChannelRankingsData = !0, this.setState({
                                            loadingRankedChannelData: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, de()];
                                    case 2:
                                        return e = n.sent(), this.setState({
                                            rankedChannelData: e,
                                            loadingRankedChannelData: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = n.sent(), this.logger.error(t, "failed to load channel ranking data"), this.setState({
                                            loadingRankedChannelData: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return p.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return h.n.setPageTitle(Object(h.d)("For You", "ForYouPage")), [4, h.n.experiments.getAssignment(C.h)];
                                case 1:
                                    return e = i.sent(), [4, h.n.experiments.getAssignment(C.i)];
                                case 2:
                                    return t = i.sent(), Object(C.n)(e, t) ? [3, 3] : (this.redirectToFollowing(), [3, 5]);
                                case 3:
                                    return [4, h.n.experiments.getAssignment(C.g)];
                                case 4:
                                    n = i.sent(), Object(C.l)(e, t, n) && this.loadChannelRankingsByGameData(), i.label = 5;
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.userFollowedGamesDataLoaded(e) && !Object(C.o)(new Date(e.data.currentUser.createdAt)) && this.redirectToFollowing()
                }, t.prototype.componentDidUpdate = function() {
                    this.userFollowedGamesDataLoaded(this.props) && !this.state.loadingRankedChannelData && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return g.createElement(I.b, null, g.createElement(F.V, {
                        className: "for-you-page",
                        padding: 3,
                        fullWidth: !0
                    }, g.createElement(O, {
                        activeCategory: _.SpadeFollowingCategory.ForYou
                    }), this.renderPage()))
                }, t = p.__decorate([Object(k.c)("ForYouPage", {
                    destination: b.a.ForYou
                }), Object(S.a)(Ne, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: Ee
                        }
                    }
                }), Object(w.a)({
                    location: _.PageviewLocation.BrowseForYou
                })], t)
            }(g.Component),
            Le = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? g.createElement(F.V, null, g.createElement(y.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), g.createElement(v.d, null, g.createElement(v.b, {
                        path: "/directory/following/foryou",
                        component: Oe
                    }), g.createElement(v.b, {
                        path: "/directory/following/live",
                        component: se
                    }), g.createElement(v.b, {
                        path: "/directory/following/hosts",
                        component: $
                    }), g.createElement(v.b, {
                        path: "/directory/following/games",
                        component: B
                    }), g.createElement(v.b, {
                        path: "/directory/following/communities",
                        component: V
                    }), g.createElement(v.b, {
                        path: "/",
                        component: oe
                    }))) : (this.props.login(), g.createElement(f.a, {
                        message: Object(h.d)("You must be logged in to view this page", "FollowingRoot")
                    }))
                }, t = p.__decorate([Object(k.c)("FollowingPageRoot", {
                    autoReportInteractive: !0
                })], t)
            }(g.Component),
            Te = Object(s.a)(function(e) {
                return {
                    isLoggedIn: Object(m.d)(e)
                }
            }, function(e) {
                return Object(d.bindActionCreators)({
                    login: function() {
                        return Object(c.f)(u.a.FollowingPage)
                    }
                }, e)
            })(Le);
        n.d(t, "FollowingRootPage", function() {
            return Te
        })
    },
    JpYe: function(e, t, n) {
        "use strict";

        function i(e) {
            return r(l.parse(e.location.search).sort || "")
        }

        function a(e) {
            switch (e.match.params.filter) {
                case d.a.Archive.toLowerCase():
                    return d.a.Archive;
                case d.a.Highlight.toLowerCase():
                    return d.a.Highlight;
                case d.a.Upload.toLowerCase():
                    return d.a.Upload;
                case d.a.PastPremiere.toLowerCase():
                    return d.a.PastPremiere;
                default:
                    return
            }
        }

        function r(e) {
            switch (e.toUpperCase()) {
                case u.b:
                    return u.b;
                case u.a:
                    return u.a;
                default:
                    return null
            }
        }
        t.d = function(e, t, n, r) {
            var l = r || i(t),
                d = "";
            l && (d = "?sort=" + function(e) {
                switch (e) {
                    case u.b:
                        return o.Popular;
                    case u.a:
                        return o.Newest;
                    default:
                        var t = e;
                        return t
                }
            }(l));
            var c = n ? n.toLowerCase() : function(e) {
                var t = a(e);
                return t ? t.toLowerCase() : "all"
            }(t);
            s.n.history.push(e + "/" + c + d)
        }, t.c = i, t.b = a, t.a = function(e) {
            var t = l.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }, t.e = r;
        var o, l = n("OAwv"),
            s = (n.n(l), n("6sO2")),
            d = n("6WAQ"),
            u = n("3yQz");
        ! function(e) {
            e.Popular = "views", e.Newest = "time"
        }(o || (o = {}))
    },
    "LEV+": function(e, t) {},
    MSvX: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("U7vG"),
            o = n("6sO2"),
            l = n("Ejve"),
            s = "legacy_routes_enabled",
            d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        n.isEnabled ? "REPLACE" !== t ? e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var i = "" !== e.search ? a.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var r = a.stringify(i),
                                        s = o.a.buildType === l.a.Dev ? window.location.host : window.location.hostname,
                                        d = window.location.protocol + "//" + s + e.pathname + "?" + r;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: d
                                    }), void window.location.replace(d)
                                }
                            } catch (e) {
                                o.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : n.logger.debug("Unable to process history change. Path is null or empty.") : n.logger.debug("Skipping legacy route processing, due to history replace.") : n.logger.debug("Legacy routing not enabled.")
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
                    }, n.isEnabled = o.b.get(s, !1), n.logger = o.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = o.b.get("legacy_routes", []),
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
            }(r.Component);
        n.d(t, "a", function() {
            return s
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return d
        })
    },
    NAfc: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowingHosts_CurrentUser"
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
                                    value: "followedHosts"
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
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
                                                                                value: "56"
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
                                                                    value: "viewersCount"
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
                end: 315
            }
        };
        n.loc.source = {
            body: "query FollowingHosts_CurrentUser($limit: Int) {\ncurrentUser {\nid\nfollows {\ntotalCount\n}\nfollowedHosts(first: $limit) {\nnodes {\nid\nlogin\ndisplayName\nhosting {\nid\nlogin\ndisplayName\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\nviewersCount\ntitle\ntype\npreviewImageURL(width: 320 height: 180)\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    PLRK: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = function(e, t) {
                return Object(r.d)("{viewerCount,number} viewers on {channel}", {
                    viewerCount: e,
                    channel: t
                }, "DirectoryGamePage")
            },
            l = Object(r.d)("Untitled Broadcast", "StreamThumbnail"),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", null, Object(r.d)("View All", "DirectoryInternationalSection"))
                }, t
            }(a.Component);
        n.d(t, !1, function() {
            return o
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return s
        })
    },
    PO03: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryGame_CommunityPermissions"
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
                            value: "community"
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
                                            value: "permissions"
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
                                                    value: "banning"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "timingOut"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 152
            }
        };
        n.loc.source = {
            body: "query DirectoryGame_CommunityPermissions($name: String!) {\ncommunity(name: $name) {\nid\nself {\npermissions {\nbanning\ntimingOut\n}\n}\n}\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    PPNL: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("6sO2"),
            o = n("9u8h"),
            l = {
                en: "en_US",
                de: "de_DE",
                es: "es_ES",
                "es-mx": "es_ES",
                fr: "fr_FR",
                it: "it_IT",
                hu: "hu_HU",
                pl: "pl_PL",
                pt: "pt_BR",
                "pt-br": "pt_BR",
                vi: "vn_VN",
                tr: "tr_TR",
                ro: "ro_RO",
                cs: "cs_CZ",
                el: "el_GR",
                ru: "ru_RU",
                th: "th_TH",
                "zh-cn": "zh_CN",
                "zh-tw": "zh_TW",
                ja: "ja_JP",
                ko: "ko_KR"
            },
            s = function(e) {
                return e ? l[e] || "en_US" : "en_US"
            },
            d = n("pqU3");
        t.a = function() {
            var e = this;
            return function(t) {
                clearTimeout(u), u = setTimeout(function() {
                    return i.__awaiter(e, void 0, void 0, function() {
                        var e, n, l, u, c, m, p;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = r.n.logger.withCategory("leagueoflegends-api"), t(Object(d.e)(!0)), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), n = r.n.intl.getLanguageCode(), l = s(n), u = o.a.getAPIURL("/api/lol/champions?" + a.stringify({
                                        locale: l,
                                        on_site: 1
                                    })).toString(), c = t, m = d.f, [4, o.a.get(u)];
                                case 2:
                                    return c.apply(void 0, [m.apply(void 0, [i.sent().body || null])]), [3, 4];
                                case 3:
                                    throw p = i.sent(), t(Object(d.d)(!0)), e.error(p, "Failed to load LoL champion data"), p;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, c)
            }
        };
        var u = 0,
            c = 350
    },
    QcSp: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityStreams_RankedChannelStreams"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "logins"
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
                                    value: "String"
                                }
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
                            value: "users"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "logins"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "logins"
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
                                            value: "viewersCount"
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
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "broadcaster"
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
                                            }]
                                        }
                                    }, {
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
                                                        value: "285"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "380"
                                                    }
                                                }],
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 264
            }
        };
        n.loc.source = {
            body: "query CommunityStreams_RankedChannelStreams($logins: [String!]) {\nusers(logins: $logins) {\nid\nlogin\nstream {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 285 height: 380)\nname\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    QjjF: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ForYouPage_UserFollows"
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
                                    value: "followedGames"
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
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
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "directoryType"
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
                end: 139
            }
        };
        n.loc.source = {
            body: "query ForYouPage_UserFollows($limit: Int) {\ncurrentUser {\nid\ncreatedAt\nfollowedGames(first: $limit) {\nnodes {\nid\nname\ndirectoryType\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    RuaR: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameCard_UnfollowGame"
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
                                value: "UnfollowGameInput"
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
                            value: "unfollowGame"
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
                                                    value: "follow"
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
                                                            value: "followedAt"
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
                end: 140
            }
        };
        n.loc.source = {
            body: "mutation FollowGameCard_UnfollowGame($input: UnfollowGameInput!) {\nunfollowGame(input: $input) {\ngame {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    S4HN: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "g", function() {
            return l
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "f", function() {
            return d
        }), n.d(t, "d", function() {
            return u
        }), n.d(t, "c", function() {
            return c
        });
        var i, a = n("6sO2"),
            r = n("vH/s");
        ! function(e) {
            e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
        }(i || (i = {}));
        var o;
        ! function(e) {
            e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed", e.Skipped = "skipped"
        }(o || (o = {}));
        var l = function(e) {
                var t = {
                    source: e.source,
                    action: o.Start
                };
                a.m.track(r.SpadeEventType.OnboardingEvent, t)
            },
            s = function() {
                var e = {
                    source: i.HomepageCTA,
                    action: o.Dismissed
                };
                a.m.track(r.SpadeEventType.OnboardingEvent, e)
            },
            d = function(e) {
                var t = {
                    source: i.HomepageCTA,
                    action: e
                };
                a.m.track(r.SpadeEventType.OnboardingEvent, t)
            },
            u = function(e, t) {
                var n = {
                    src: r.SpadeEventType.OnboardingEvent,
                    game: t
                };
                a.m.track(e, n)
            },
            c = function(e) {
                a.m.track(r.SpadeEventType.BrowseForYou, e)
            }
    },
    T0IN: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            for (var t = e.length - 1; t > 0; t--) {
                var n = Math.floor(Math.random() * (t + 1)),
                    i = e[t];
                e[t] = e[n], e[n] = i
            }
            return e
        }
    },
    TGxD: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SuggestedVideos_CurrentUser"
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
                                    value: "recommendations"
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
                                            value: "videos"
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
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "PreviewCardVideo"
                                                                },
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
                end: 240
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery SuggestedVideos_CurrentUser($limit: Int) {\ncurrentUser {\nid\nrecommendations {\nvideos(first: $limit) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}\n}',
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
        }(n("qjMx").definitions)), e.exports = i
    },
    U9Fb: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_UnfollowGame"
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
                                value: "UnfollowGameInput"
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
                            value: "unfollowGame"
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
                                    value: "follow"
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
                                            value: "followedAt"
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
                end: 124
            }
        };
        n.loc.source = {
            body: "mutation FollowGameButton_UnfollowGame($input: UnfollowGameInput!) {\nunfollowGame(input: $input) {\nfollow {\nfollowedAt\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    V9YC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.b = function(e) {
            return {
                type: i,
                languagePreferences: e
            }
        };
        var i = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED"
    },
    VDV3: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("U7vG"),
            o = n("6sO2"),
            l = n("6yQB"),
            s = n("+Znq"),
            d = n("6WAQ"),
            u = n("JpYe"),
            c = n("3yQz"),
            m = n("Odds"),
            p = (n("C2pI"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortChangeHandler = function(e) {
                        n.props.onVideoSortChange(e.target.value)
                    }, n.renderLanguageSelector = function() {
                        return n.props.hideLanguageSelector ? null : r.createElement(m.V, {
                            display: m.H.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(l.a, null))
                    }, n.typeChangeHandler = function(e) {
                        if (n.balloonWrapperRef.toggleBalloon(!1), n.props.onVideoFilterChange) {
                            var t = e.currentTarget.getAttribute("data-filter-type");
                            t && n.props.onVideoFilterChange(t)
                        }
                    }, n.saveBalloonWrapperRef = function(e) {
                        n.balloonWrapperRef = e
                    }, n.state = {
                        isPremiereExperimentActive: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        isPremiereExperimentActive: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e, t = Object(o.d)("All Videos", "VideoFilter"),
                        n = Object(o.d)("Past Premieres", "VideoFilter"),
                        i = Object(o.d)("Past Broadcasts", "VideoFilter"),
                        l = Object(o.d)("Highlights", "VideoFilter"),
                        p = Object(o.d)("Uploads", "VideoFilter"),
                        g = this.props.selectedSort && Object(u.e)(this.props.selectedSort) || c.a;
                    switch (this.props.broadcastType) {
                        case d.a.PastPremiere:
                            e = n;
                            break;
                        case d.a.Archive:
                            e = i;
                            break;
                        case d.a.Highlight:
                            e = l;
                            break;
                        case d.a.Upload:
                            e = p;
                            break;
                        default:
                            e = t
                    }
                    var v = {
                            "video-filters": !0,
                            "video-filters--active": !0
                        },
                        h = {
                            "video-filters": !0
                        },
                        f = null;
                    return this.state.isPremiereExperimentActive && (f = r.createElement(m.T, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.PastPremiere,
                        "data-a-target": "video-type-filter-past-premieres"
                    }, r.createElement(m.V, {
                        className: a(this.props.broadcastType === d.a.PastPremiere ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-past-premiere"
                    }, n))), r.createElement(m.V, {
                        margin: {
                            bottom: 2
                        },
                        display: m.H.Flex,
                        justifyContent: m.U.Between
                    }, r.createElement("div", null, this.renderLanguageSelector(), r.createElement(m.V, {
                        display: m.H.InlineFlex
                    }, r.createElement(s.a, {
                        ref: this.saveBalloonWrapperRef
                    }, r.createElement(m.u, {
                        type: m.z.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "video-type-filter-dropdown",
                        dropdown: !0
                    }, e), r.createElement(m.p, {
                        direction: m.q.Bottom,
                        "data-a-target": "video-type-filter-balloon",
                        offsetX: "0",
                        noTail: !0
                    }, r.createElement(m.V, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, r.createElement(m.T, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": "all",
                        "data-a-target": "video-type-filter-all"
                    }, r.createElement(m.V, {
                        className: a(this.props.broadcastType ? h : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-all"
                    }, t)), f, r.createElement(m.T, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Archive,
                        "data-a-target": "video-type-filter-past-broadcasts"
                    }, r.createElement(m.V, {
                        className: a(this.props.broadcastType === d.a.Archive ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-archive"
                    }, i)), r.createElement(m.T, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Highlight,
                        "data-a-target": "video-type-filter-highlights"
                    }, r.createElement(m.V, {
                        className: a(this.props.broadcastType === d.a.Highlight ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-highlight"
                    }, l)), r.createElement(m.T, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Upload,
                        "data-a-target": "video-type-filter-uploads"
                    }, r.createElement(m.V, {
                        className: a(this.props.broadcastType === d.a.Upload ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-upload"
                    }, p))))))), r.createElement("div", null, r.createElement(m._16, {
                        name: "sort",
                        onChange: this.sortChangeHandler,
                        value: g,
                        "data-a-target": "video-sort-select"
                    }, r.createElement("option", {
                        "data-test-selector": "sort-option-newest",
                        value: c.a,
                        "data-a-target": "video-sort-newest"
                    }, Object(o.d)("Newest", "VideoFilter")), r.createElement("option", {
                        "data-test-selector": "sort-option-popular",
                        value: c.b,
                        "data-a-target": "video-sort-popular"
                    }, Object(o.d)("Popular", "VideoFilter")))))
                }, t
            }(r.Component)),
            g = n("ISok");
        n.d(t, "a", function() {
            return p
        }), n.d(t, "b", function() {
            return g.a
        }), n.d(t, !1, function() {})
    },
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-062a1df5ff2aaa76eb8e129940ef964a.png"
    },
    X9eO: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowedIndex_CurrentUser"
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
                                    value: "followedGames"
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
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
                                                        value: "285"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "380"
                                                    }
                                                }],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
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
                                    value: "followedLiveUsers"
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
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
                                                                        value: "56"
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
                                                            value: "viewersCount"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "followedHosts"
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
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
                                                                                value: "56"
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
                                                                    value: "viewersCount"
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
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "followedCommunities"
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
                                                            value: "avatarURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "285"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "380"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewersCount"
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
                                                            value: "broadcastersCount"
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
                                            }]
                                        }
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 750
            }
        };
        n.loc.source = {
            body: "query FollowedIndex_CurrentUser($limit: Int) {\ncurrentUser {\nid\nfollowedGames(first: $limit) {\nnodes {\nid\nname\nboxArtURL(width: 285 height: 380)\nviewersCount\n}\n}\nfollowedLiveUsers(first: $limit) {\nnodes {\nid\nlogin\ndisplayName\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\nviewersCount\ntitle\ntype\npreviewImageURL(width: 320 height: 180)\n}\n}\n}\nfollowedHosts(first: $limit) {\nnodes {\nid\nlogin\ndisplayName\nhosting {\nid\nlogin\ndisplayName\nstream {\nid\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\nviewersCount\ntitle\ntype\npreviewImageURL(width: 320 height: 180)\n}\n}\n}\n}\nfollowedCommunities(first: $limit) {\nedges {\nnode {\nid\navatarURL(width: 285 height: 380)\nviewersCount\ndisplayName\nbroadcastersCount\nname\n}\n}\n}\nfollows {\ntotalCount\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("U7vG"),
            a = (n.n(i), n("Odds")),
            r = function() {
                return i.createElement(a.A, null, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._3, null)), i.createElement(a.B, null, i.createElement(a.V, {
                    display: a.H.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a.V, {
                    display: a.H.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._3, {
                    width: 40,
                    height: 56
                })), i.createElement(a.V, {
                    display: a.H.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a._23, null, i.createElement(a._3, {
                    width: 150
                })), i.createElement(a._23, {
                    fontSize: a.L.Size7
                }, i.createElement(a._3, {
                    width: 100
                }))))))
            }
    },
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return v
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("OAwv")),
            o = (n.n(r), n("U7vG")),
            l = (n.n(o), n("F8kA")),
            s = n("6sO2"),
            d = n("SZoP"),
            u = n("mi6k"),
            c = n("CSlQ"),
            m = n("Odds"),
            p = n("a0ve"),
            g = (n.n(p), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.ignoreResumeTimeResponse = !1, t.onClickHandler = function() {
                        t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                    }, t.onMouseEnterHandler = function() {
                        t.setState({
                            hovered: !0
                        })
                    }, t.onMouseLeaveHandler = function() {
                        t.setState({
                            hovered: !1
                        })
                    }, t.onPreviewImageLoad = function(e) {
                        t.props.latencyTracking.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewLoad: !0
                        })
                    }, t.onPreviewImageLoadError = function(e) {
                        e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewFailToLoad: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.overrideImageInteractivity && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.ignoreResumeTimeResponse = !0
                }, t.prototype.render = function() {
                    var e = null,
                        t = this.getVideoPreviousWatchPercentage();
                    return null !== t && (e = o.createElement(m.V, {
                        position: m._4.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, o.createElement(m._7, {
                        size: m._8.Small,
                        value: t,
                        mask: !0
                    }))), o.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(m._40)(this.props)), o.createElement(m.A, null, o.createElement(m.V, {
                        fullWidth: !0
                    }, o.createElement(m.j, {
                        overflow: !0
                    }, o.createElement("div", null, o.createElement(m._19, {
                        display: m.H.InlineFlex,
                        position: m._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: m._39.Default,
                        fontSize: m.L.Size6,
                        background: m.m.Overlay,
                        color: m.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._18, {
                        "data-test-selector": "video-view-count",
                        icon: m._11.GlyphViews,
                        label: Object(s.d)("views", "VideoPreviewCard"),
                        value: Object(s.f)(this.props.video.viewCount)
                    })), o.createElement(m._19, {
                        display: m.H.InlineFlex,
                        position: m._4.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: m._39.Default,
                        fontSize: m.L.Size6,
                        background: m.m.Overlay,
                        color: m.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._18, {
                        "data-test-selector": "video-length",
                        icon: m._11.GlyphLength,
                        label: Object(s.d)("length", "VideoPreviewCard"),
                        value: Object(u.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), o.createElement(m.B, null, o.createElement(m.V, {
                        display: m.H.Flex,
                        flexDirection: m.J.Row,
                        flexWrap: m.K.NoWrap,
                        padding: {
                            top: .5
                        }
                    }, this.props.hideGameArt ? null : this.gameBoxArt(), this.videoMetaData()))))
                }, t.prototype.generateSearchString = function() {
                    var e = {};
                    this.props.collectionID && (e.collection = this.props.collectionID);
                    var t = r.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        }),
                        n = a("video-preview-card__preview-image", {
                            "video-preview-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return o.createElement(m.j, {
                        overflow: !0
                    }, o.createElement(l.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-image-link",
                        "data-test-selector": "preview-image-link"
                    }, o.createElement("div", {
                        className: t,
                        "data-test-selector": "preview-image-wrapper"
                    }, o.createElement(m.Q, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(m.j, {
                        ratio: m.k.Aspect16x9
                    }, o.createElement("img", {
                        alt: this.props.video.title,
                        className: n,
                        "data-test-selector": "preview-image",
                        onLoad: this.onPreviewImageLoad,
                        onError: this.onPreviewImageLoadError,
                        src: e
                    })))))))
                }, t.prototype.gameBoxArt = function() {
                    if (!this.showGameArt() || !this.props.video.game) return null;
                    var e = this.props.video.game,
                        t = {
                            pathname: "/directory/game/" + encodeURI(e.name),
                            state: this.getLinkState()
                        },
                        n = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        });
                    return o.createElement(m.V, {
                        "data-test-selector": "game-box-art",
                        display: m.H.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(l.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(m.Q, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(m._31, {
                        display: m.H.Block,
                        direction: m._33.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(m.C, {
                        aspect: m.k.BoxArt,
                        imageAlt: e.name,
                        imageSrc: e.boxArtURL || s.a.defaultBoxArtURL
                    })))))))
                }, t.prototype.videoMetaData = function() {
                    var e = Object(s.c)(new Date(this.props.video.publishedAt), "medium"),
                        t = null;
                    if (this.props.video.owner) {
                        var n = {
                            pathname: "/" + this.props.video.owner.login,
                            state: this.getLinkState()
                        };
                        t = o.createElement(l.a, {
                            to: n,
                            className: "video-preview-card__owner-display-name",
                            "data-a-target": "video-preview-card-channel-link",
                            "data-test-selector": "video-owner",
                            title: Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return o.createElement(m.V, {
                        display: m.H.Flex,
                        flexDirection: m.J.Column
                    }, o.createElement(m.V, {
                        "data-test-selector": "video-title",
                        overflow: m._0.Hidden,
                        position: m._4.Relative
                    }, o.createElement(m._23, {
                        color: m.F.Base,
                        fontSize: m.L.Size5,
                        lineHeight: m.W.Heading
                    }, o.createElement(l.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(m.V, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(m._23, {
                        type: m._28.Span,
                        color: m.F.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(m.Q, {
                        padding: {
                            x: .5
                        }
                    }, o.createElement("span", null, "·")), t)))
                }, t.prototype.getVideoPreviousWatchPercentage = function() {
                    return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                }, t.prototype.showGameArt = function() {
                    return !this.props.hideGameArt && this.props.video.game && "" !== this.props.video.game.name
                }, t.prototype.formatTitle = function(e) {
                    if (this.props.video.owner) return e + " · " + Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                }, t.prototype.getLinkState = function() {
                    return {
                        content: this.props.tracking.content,
                        content_index: this.props.tracking.content_index,
                        medium: this.props.tracking.medium
                    }
                }, t
            }(o.Component)),
            v = Object(c.c)("VideoPreviewCard")(g)
    },
    c8Oh: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.userPreferences.languagePreferences
        };
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("V9YC"),
            o = n("iJpA");
        a.n.store.registerReducer("userPreferences", function(e, t) {
            switch (void 0 === e && (e = {
                languagePreferences: Object(o.b)()
            }), t.type) {
                case r.a:
                    return i.__assign({}, e, {
                        languagePreferences: t.languagePreferences
                    });
                default:
                    return e
            }
        })
    },
    cJkg: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowingCommunities_CurrentUser"
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
                                    value: "followedCommunities"
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
                                                            value: "avatarURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "285"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "380"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewersCount"
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
                                                            value: "broadcastersCount"
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
                end: 217
            }
        };
        n.loc.source = {
            body: "query FollowingCommunities_CurrentUser($limit: Int) {\ncurrentUser {\nid\nfollowedCommunities(first: $limit) {\nedges {\nnode {\nid\navatarURL(width: 285 height: 380)\nviewersCount\ndisplayName\nbroadcastersCount\nname\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    czpb: function(e, t, n) {
        "use strict";
        var i = n("6sO2"),
            a = n("Ejve"),
            r = n("MSvX");
        t.a = function(e) {
            return i.b.get(r.a, !1) || i.a.buildType !== a.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? o + e : o + e.pathname
        }, t.b = function() {
            return !i.b.get(r.a, !1) && i.a.buildType === a.a.Production
        };
        var o = "https://www.twitch.tv"
    },
    iJpA: function(e, t, n) {
        "use strict";

        function i() {
            return r.k.get(s, []).filter(function(e) {
                return o.a.has(e)
            })
        }
        t.c = function(e, t) {
            var n = this;
            return function(o) {
                return a.__awaiter(n, void 0, void 0, function() {
                    var n, d;
                    return a.__generator(this, function(a) {
                        return n = new Set(i()), t ? n.add(e) : n.delete(e), d = Array.from(n), r.k.set(s, d), o(Object(l.b)(d)), [2]
                    })
                })
            }
        }, t.a = function() {
            var e = this;
            return function(t) {
                return a.__awaiter(e, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        return r.k.set(s, []), t(Object(l.b)([])), [2]
                    })
                })
            }
        }, t.b = i;
        var a = n("TToO"),
            r = n("6sO2"),
            o = n("D9fv"),
            l = n("V9YC"),
            s = "languageDirectoryFilters"
    },
    iOr9: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = function(e) {
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
            }(a.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    "j7/Y": function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    o = r.content,
                                    l = r.medium,
                                    d = r.content_index;
                                s.n.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return o.createElement(t, a.__assign({}, this.props))
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
                }(o.Component);
                return Object(l.f)(n)
            }
        }
        var a = n("TToO"),
            r = n("OAwv"),
            o = n("U7vG"),
            l = n("F8kA"),
            s = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
    },
    mi6k: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return (t -= e.toString().length) > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.a = function(e, t) {
            var n = Math.floor(e % 60),
                a = Math.floor(e % 3600 / 60),
                r = Math.floor(e / 3600);
            return t && t.zeroPadAll ? i(r, 2) + ":" + i(a, 2) + ":" + i(n, 2) : r ? r + ":" + i(a, 2) + ":" + i(n, 2) : a + ":" + i(n, 2)
        }
    },
    nC3l: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityStreamBan_BanUser"
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
                                value: "BanUserFromCommunityInput"
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
                            value: "banUserFromCommunity"
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
                                    value: "error"
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
                end: 121
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamBan_BanUser($input: BanUserFromCommunityInput!) {\nbanUserFromCommunity(input: $input) {\nerror\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    npyu: function(e, t) {},
    oHn4: function(e, t) {},
    peXu: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            return void 0 === n && (n = 1), t && e ? Math.floor(e / t) * n : -1
        }
    },
    plcU: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityStreamTimeout_TimeoutUser"
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
                                value: "TimeoutUserFromCommunityInput"
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
                            value: "timeoutUserFromCommunity"
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
                                    value: "community"
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
                                    value: "error"
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
                end: 159
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamTimeout_TimeoutUser($input: TimeoutUserFromCommunityInput!) {\ntimeoutUserFromCommunity(input: $input) {\ncommunity {\nid\nname\n}\nerror\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    pqU3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        }), t.d = function(e) {
            return {
                type: r,
                leagueOfLegendsChampionsErrored: e
            }
        }, t.e = function(e) {
            return {
                type: a,
                leagueOfLegendsChampionsLoading: e
            }
        }, t.f = function(e) {
            var t = {},
                n = e.data;
            for (var a in n) n.hasOwnProperty(a) && (t[n[a].id] = n[a]);
            return {
                type: i,
                apiData: e,
                championsMap: t,
                apiVersion: e.version
            }
        };
        var i = "directory.LOL_CHAMPIONS_CHANGED",
            a = "directory.LOL_CHAMPIONS_LOADING",
            r = "directory.LOL_CHAMPIONS_ERRORED"
    },
    qb8C: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowingHeaderTabs_User"
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
                                    value: "createdAt"
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
            body: "query FollowingHeaderTabs_User {\ncurrentUser {\nid\ncreatedAt\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    qjMx: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "PreviewCardVideo"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Video"
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
                            value: "animatedPreviewURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
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
                                        value: "56"
                                    }
                                }],
                                directives: [],
                                selectionSet: null
                            }, {
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
                            value: "lengthSeconds"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "owner"
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "previewThumbnailURL"
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
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "publishedAt"
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
                                    value: "viewingHistory"
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
                                            value: "position"
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
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 263
            }
        };
        n.loc.source = {
            body: "fragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nviewingHistory {\nposition\n}\n}\ntitle\nviewCount\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    rG8a: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_Game"
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
                                    value: "name"
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
                                            value: "follow"
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
                                                    value: "followedAt"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 127
            }
        };
        n.loc.source = {
            body: "query FollowGameButton_Game($name: String!) {\ngame(name: $name) {\nid\nname\nself {\nfollow {\nfollowedAt\n}\n}\n}\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    sJt0: function(e, t) {},
    tkib: function(e, t) {},
    v5ho: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
        }(i || (i = {}))
    },
    vQzq: function(e, t) {},
    "xGL+": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameCard_FollowGame"
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
                                value: "FollowGameInput"
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
                            value: "followGame"
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
                                                    value: "follow"
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
                                                            value: "followedAt"
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
                end: 134
            }
        };
        n.loc.source = {
            body: "mutation FollowGameCard_FollowGame($input: FollowGameInput!) {\nfollowGame(input: $input) {\ngame {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    z4nH: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_FollowGame"
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
                                value: "FollowGameInput"
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
                            value: "followGame"
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
                                                    value: "follow"
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
                                                            value: "followedAt"
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
                end: 136
            }
        };
        n.loc.source = {
            body: "mutation FollowGameButton_FollowGame($input: FollowGameInput!) {\nfollowGame(input: $input) {\ngame {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.following-125bc9dc2824b736d3058e9442ff7b31.js.map