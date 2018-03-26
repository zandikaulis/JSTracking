webpackJsonp([49], {
    "+GT7": function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2"),
            l = n("IOwa"),
            d = n("RH2O"),
            c = n("2KeS"),
            m = n("PPNL"),
            u = n("HW6M"),
            p = n("YUUt"),
            g = n.n(p),
            v = n("/SNv"),
            h = n.n(v),
            f = n("Vr3l"),
            k = n.n(f);
        ! function(e) {
            e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
        }(i || (i = {}));
        var y = n("LgcN"),
            w = function(e) {
                try {
                    return decodeURIComponent(e)
                } catch (e) {
                    return null
                }
            },
            _ = n("Odds"),
            b = (n("AHWf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1,
                        game: ""
                    }, t.logger = s.o.logger.withCategory("metadata-icon"), t.didUnmount = !1, t.loadData = function() {
                        if (!t.state.isLoading && !t.state.isError && t.props.streamMetadata && !t.state.content) {
                            var e = w(t.props.match.params.encodedCommunityName);
                            if (e) {
                                var n = e.toLowerCase(),
                                    a = t.props.streamMetadata.counterStrikeGlobalOffensive && t.props.streamMetadata.counterStrikeGlobalOffensive.skill,
                                    r = t.props.streamMetadata.hearthstone && t.props.streamMetadata.hearthstone.broadcasterHeroClass,
                                    o = t.props.streamMetadata.leagueOfLegends && t.props.streamMetadata.leagueOfLegends.championID,
                                    s = t.props.streamMetadata.overwatch && t.props.streamMetadata.overwatch.broadcasterCharacter;
                                a && n === i.CounterStrike ? (t.setState({
                                    game: n,
                                    gameSprite: g.a,
                                    item: String(a),
                                    isLoading: !0
                                }), t.getCounterStrikeData(a)) : r && n === i.Hearthstone ? (t.setState({
                                    game: n,
                                    gameSprite: h.a,
                                    item: r,
                                    isLoading: !0
                                }), t.getHearthstoneData()) : o && n === i.LeagueOfLegends ? (t.setState({
                                    game: n,
                                    item: String(o)
                                }), t.getLeagueData()) : s && n === i.Overwatch && (t.setState({
                                    game: n,
                                    gameSprite: k.a,
                                    item: s,
                                    isLoading: !0
                                }), t.getOverwatchData())
                            }
                        }
                    }, t.renderIcon = function(e, n, a, o, s, l) {
                        if (!a) return null;
                        var d = u("metadata-icon", {
                                "metadata-icon--csgo-skill": t.state.game === i.CounterStrike
                            }),
                            c = 30;
                        return t.state.game === i.CounterStrike && (c = 50), r.createElement(_._6, {
                            display: _.P.Flex,
                            flexDirection: _.R.Column,
                            alignItems: _.c.Center,
                            justifyContent: _._5.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(_._46, {
                            direction: _._48.Left,
                            label: e
                        }, r.createElement(_._6, {
                            className: d
                        }, r.createElement("div", {
                            style: {
                                backgroundImage: "url(" + n + ")",
                                backgroundPositionX: s ? -1 * s : 0,
                                backgroundPositionY: l ? -1 * l : 0,
                                width: a ? a + "px" : "3rem",
                                height: a ? o + "px" : "3rem",
                                transform: "scale(" + (a > 0 ? c / a : 1) + ")",
                                transformOrigin: "0 0"
                            }
                        }))))
                    }, t.getCounterStrikeData = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, Object(y.a)()];
                                    case 1:
                                        return t = a.sent(), this.didUnmount ? [2] : ((n = {})[e] = t[0]["Skill Group"][e - 1], this.setState({
                                            content: n
                                        }), [3, 3]);
                                    case 2:
                                        return i = a.sent(), this.logger.error(i, "Failed to load Counter-Strike skill group data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.getHearthstoneData = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, Object(y.b)()];
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
                            var e, t, n, i, r, o, s, l, d, c, m, u, p;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, Object(y.d)()];
                                    case 1:
                                        if (e = a.sent(), this.didUnmount) return [2];
                                        for (t = !1, n = void 0, i = 0, r = e; i < r.length && (n = r[i], !t); i++)
                                            for (o in n)
                                                if (n.hasOwnProperty(o))
                                                    for (s = n[o], l = 0, d = s; l < d.length; l++)
                                                        if ((c = d[l]).character === this.state.item) {
                                                            (p = {})[c.character] = c, m = p, this.setState({
                                                                content: m,
                                                                isLoading: !1
                                                            }), t = !0;
                                                            break
                                                        }
                                        return [3, 3];
                                    case 2:
                                        return u = a.sent(), this.logger.error(u, "Failed to load Overwatch character data"), this.setState({
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
            S = Object(o.f)(b);
        var N = Object(d.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap,
                        isError: e.directory.leagueOfLegends.isError,
                        isLoading: e.directory.leagueOfLegends.isLoading,
                        version: e.directory.leagueOfLegends.version
                    }
                }
            }, function(e) {
                return Object(c.b)({
                    onLoadLeagueOfLegendsChampions: m.a
                }, e)
            })(S),
            E = (n("LEV+"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isPremiereExperimentActive: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, s.o.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return "yes" === e.sent() && s.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = r.createElement(_._6, {
                        display: _.P.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, r.createElement(_._10, {
                        label: Object(s.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(s.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: r.createElement(o.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return r.createElement("div", a.__assign({
                        className: "live-channel-card"
                    }, Object(_._56)(this.props)), r.createElement(_.B, {
                        key: this.props.title
                    }, r.createElement(_._6, {
                        fullWidth: !0
                    }, r.createElement(_.j, {
                        overflow: !0
                    }, r.createElement("div", null, r.createElement(o.a, {
                        to: this.props.linkTo,
                        title: this.props.hideTooltip ? void 0 : this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link",
                        "data-test-selector": "live-channel-card-link-selector"
                    }, this.props.children ? this.props.children : r.createElement(_.D, {
                        alt: this.props.imageAlt,
                        src: this.props.imageSrc,
                        aspect: _.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), r.createElement(_.C, null, r.createElement(_._6, {
                        display: _.P.Flex,
                        flexWrap: _.S.NoWrap
                    }, r.createElement(_._6, {
                        flexGrow: 1,
                        ellipsis: !0
                    }, r.createElement(o.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, r.createElement(_._0, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(_.O, {
                        type: _._43.H3,
                        fontSize: _.T.Size5,
                        lineHeight: _._7.Body,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), r.createElement(_._6, {
                        className: "live-channel-card__meta",
                        display: _.P.Flex,
                        flexWrap: _.S.NoWrap
                    }, e, r.createElement(_.O, {
                        type: _._43.Span,
                        ellipsis: !0
                    }, t))), r.createElement(_._6, {
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
                    }, r.createElement(_._29, {
                        className: "live-channel-card__boxart",
                        position: _._13.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(_._46, {
                        display: _.P.Block,
                        direction: _._48.Bottom,
                        label: t
                    }, r.createElement(_.D, {
                        src: n,
                        alt: t,
                        aspect: _.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(_._6, {
                        position: _._13.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(l.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? r.createElement(N, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(r.Component)),
            C = E;
        n.d(t, !1, function() {
            return "live-channel-card-link-selector"
        }), n.d(t, !1, function() {
            return E
        }), n.d(t, "a", function() {
            return C
        })
    },
    "/+to": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            s = n("5kgt"),
            l = n("Us7i"),
            d = n("QG7y"),
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            m = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = o.j.withCategory("ad-slot"), n.createSlot = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = n.sent(), Object(d.h)(t.getSlotElementId()), this.setState({
                                            slot: t
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.logger.warn("Unable to create ad slot", {
                                            slotID: e.slotID,
                                            adUnit: e.adUnit,
                                            adSize: e.adSize,
                                            targeting: e.targeting,
                                            autoEnable: e.autoEnable
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.setRef = function(e) {
                        return n.slotRef = e
                    }, n.onSlotRenderEnd = function(e) {
                        var t = e.slot.getSlotElementId();
                        if (n.state.slot && t === n.props.slotID) {
                            if (n.logger.debug("Ad slot render ended", {
                                    elementID: t,
                                    lineItemID: e.lineItemId,
                                    createdID: e.creativeId,
                                    isEmpty: e.isEmpty,
                                    serviceName: e.serviceName,
                                    size: e.size
                                }), e.isEmpty) return;
                            if (!n.slotRef) return;
                            if (n.props.slotID === d.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            var i;
                            if (n.props.slotID === d.b.directory.banner) return void((i = n.slotRef.querySelector(c)) && 1 !== i.clientWidth && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === d.b.directory.rectangle) return void((i = n.slotRef.querySelector(m)) && 1 !== i.clientWidth && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            })
                        }
                    }, n.slotRendered = function(e) {
                        n.props.slotRendered && n.props.slotRendered(e)
                    }, n.state = {
                        shouldDisplay: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.g.addListener(d.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet && !this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), d.g.removeListener(d.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = a.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), r.createElement("div", a.__assign({
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    }, Object(s.a)(this.props)))
                }, t
            }(r.Component);
        var p = Object(i.b)(function(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        })(u);
        n.d(t, "a", function() {
            return p
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
            s = n("Aj/L"),
            l = n("TToO"),
            d = n("GiK3"),
            c = n("3zLD"),
            m = n("6sO2"),
            u = n("7vx8"),
            p = n("oIkB"),
            g = n("vH/s"),
            v = n("Odds"),
            h = n("z4nH"),
            f = n("rG8a"),
            k = n("U9Fb"),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.follow = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return l.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.followGame && this.props.data && this.props.data.game ? (e = l.__assign({}, Object(p.a)({
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
                                                a && a.game && (a.game.self.follow = i.game.self.follow, e.writeQuery({
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
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return l.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = l.__assign({}, Object(p.a)({
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
                                                n && n.game && (n.game.self.follow = null, e.writeQuery({
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
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = Object(m.d)("Follow", "FollowGameButton");
                    if (!this.props.isLoggedIn) return d.createElement(v.u, {
                        icon: v._20.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
                        onClick: this.props.showLoginModal
                    }, e);
                    if (this.isLoading) return d.createElement(v._12, {
                        width: 70,
                        height: 30
                    });
                    if (this.isFollowing) {
                        var t = Object(m.d)("Unfollow", "FollowGameButton");
                        return d.createElement(v.v, {
                            ariaLabel: t,
                            "data-test-selector": "follow-game-button-component",
                            "data-a-target": "game-directory-unfollow-button",
                            icon: v._20.Heart,
                            onClick: this.unfollow,
                            statusAlertIcon: v._20.Unheart
                        })
                    }
                    return d.createElement(v.u, {
                        icon: v._20.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
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
                    m.o.tracking.track(e, {
                        src: this.props.src,
                        kind: e === g.SpadeEventType.GameFollow ? "follow" : "unfollow",
                        name: this.props.gameName
                    })
                }, t
            }(d.Component),
            w = Object(c.compose)(Object(u.a)(f, {
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
            }), Object(u.a)(h, {
                name: "followGame"
            }), Object(u.a)(k, {
                name: "unfollowGame"
            }))(y);
        var _ = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                showLoginModal: function() {
                    return Object(o.f)(r.a.FollowGameButton)
                }
            }, e)
        })(w);
        n.d(t, "a", function() {
            return _
        })
    },
    "2qz3": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("/+to"),
            o = n("QG7y"),
            s = n("CSlQ"),
            l = n("7vx8"),
            d = n("jkA6"),
            c = n("7tMz"),
            m = n("IOwa"),
            u = n("2o2f"),
            p = n("KSGD"),
            g = n("6sO2"),
            v = n("S4HN"),
            h = n("AadB"),
            f = n("Odds"),
            k = function(e) {
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
                            channel_id: t.props.streamNode.id,
                            action: v.a.Impression,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(v.c)(e)
                    }, t.trackClickEvent = function() {
                        var e = {
                            channel_id: t.props.streamNode.id,
                            action: v.a.Click,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(v.c)(e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : g.j.warn("<StreamThumbnailWithTrackingComponent /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return a.createElement("div", {
                        onClick: this.trackClickEvent
                    }, a.createElement(f._6, {
                        refDelegate: this.setRef
                    }, a.createElement(h.b, {
                        key: this.props.streamIndex,
                        directoryName: this.props.directoryName,
                        directoryType: this.props.directoryType,
                        streamIndex: this.props.streamIndex,
                        streamNode: this.props.streamNode,
                        trackingMedium: this.props.trackingMedium
                    })))
                }, t.prototype.checkVisible = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(t) {
                            return !this.impressionEventFired && this.isVisible(e) && (this.trackImpression(), this.impressionEventFired = !0), [2]
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: p.func
                }, t
            }(a.Component),
            y = "community-stream__placeholder",
            w = "community-stream",
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderStream = function() {
                        return t.props.data ? a.createElement(f._6, {
                            "data-test-selector": w,
                            position: f._13.Relative
                        }, a.createElement(f._6, {
                            padding: .5,
                            position: f._13.Absolute,
                            zIndex: f._55.Above
                        }, a.createElement(m.a, {
                            type: u.a.Live
                        })), a.createElement(k, {
                            key: t.props.data.id,
                            trackingMedium: t.props.trackingMedium,
                            directoryName: t.props.directoryName,
                            directoryType: t.props.directoryType,
                            streamIndex: t.props.index,
                            streamNode: t.props.data
                        })) : a.createElement(f._6, {
                            "data-test-selector": y,
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(f._6, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(f.j, {
                            ratio: f.k.Aspect16x9
                        }, a.createElement(f._12, null))), a.createElement(f.O, null, a.createElement(f._12, {
                            width: 150
                        })), a.createElement(f.O, {
                            fontSize: f.T.Size7
                        }, a.createElement(f._12, {
                            width: 100
                        })))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(f._6, null, this.renderStream())
                }, t
            }(a.Component),
            b = n("eqtY"),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = "/directory";
                    if (this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.directory && this.props.data.directory.streams && this.props.data.directory.streams.edges) {
                        t = this.props.data.directory.name;
                        var n = this.props.data.directory.streams.edges.filter(function(e) {
                            var t = e.node;
                            return t.broadcaster && t.broadcaster.login
                        }).slice(0, 1).map(function(e) {
                            return e.node
                        });
                        n.length && (e = n[0])
                    }
                    return a.createElement(_, {
                        data: e,
                        index: this.props.index,
                        directoryName: t,
                        directoryType: this.props.directoryType,
                        trackingMedium: this.props.trackingMedium
                    })
                }, t = i.__decorate([Object(l.a)(b, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.name,
                                limit: e.limit ? e.limit : 3,
                                type: Object(d.a)(e.directoryType)
                            }
                        }
                    }
                }), Object(c.a)("CommunityStream")], t)
            }(a.Component),
            N = "community-streams-row__ad",
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.renderStreamGridWithAdSlot = function() {
                        var e = a.createElement(f._6, {
                                key: "ad",
                                "data-test-selector": N,
                                display: f.P.Flex,
                                flexGrow: 1,
                                justifyContent: f._5.Center,
                                padding: {
                                    bottom: t.state.adDisplayed ? 2 : 0,
                                    left: t.state.adDisplayed ? .5 : 0
                                }
                            }, a.createElement(r.a, {
                                adSize: o.c.anonFront.rect,
                                adUnit: o.d.frontpage,
                                slotID: o.b.anonFront.rect,
                                targeting: {
                                    pagetype: o.a.frontpage
                                },
                                slotRendered: t.onSlotRendered,
                                autoEnable: !1
                            })),
                            n = t.renderStreams().map(function(e, t) {
                                return a.createElement(f.K, {
                                    key: "stream-" + t.toString(),
                                    cols: 4
                                }, e)
                            });
                        return n.splice(2, 0, e), a.createElement(f._6, {
                            padding: {
                                x: 1
                            }
                        }, a.createElement(f.W, {
                            gutterSize: f.X.Medium
                        }, n))
                    }, t.renderStreams = function() {
                        if (t.props.data) {
                            var e = t.props.data;
                            return t.props.withAd && t.state.adDisplayed && (e = e.slice(0, 2)), e.map(function(e, n) {
                                return a.createElement(_, {
                                    key: e.id,
                                    data: e,
                                    index: n,
                                    directoryName: e.title,
                                    directoryType: t.props.directoryType,
                                    trackingMedium: t.props.trackingMedium
                                })
                            })
                        }
                        if (t.props.names) {
                            var n = t.props.names;
                            return t.props.withAd && t.state.adDisplayed && (n = n.slice(0, 2)), n.map(function(e, n) {
                                return a.createElement(S, {
                                    key: e,
                                    name: e,
                                    index: n,
                                    directoryType: t.props.directoryType,
                                    trackingMedium: t.props.trackingMedium
                                })
                            })
                        }
                        throw new Error("Need to pass either data or names into CommunityStreamsRow")
                    }, t.onSlotRendered = function() {
                        t.state.adDisplayed || t.setState({
                            adDisplayed: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.withAd) return this.renderStreamGridWithAdSlot();
                    var e = this.props.data && 1 === this.props.data.length || this.props.names && 1 === this.props.names.length ? 1 : 0;
                    return a.createElement(f._6, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(f._49, {
                        gutterSize: f._51.Small,
                        childWidth: f._50.Large,
                        placeholderItems: e,
                        noWrap: !0
                    }, this.renderStreams()))
                }, t
            }(a.Component),
            C = Object(s.d)("CommunityStreamsRow")(E);
        n.d(t, !1, function() {
            return N
        }), n.d(t, !1, function() {
            return E
        }), n.d(t, "a", function() {
            return C
        })
    },
    4194: function(e, t) {},
    "4az8": function(e, t) {},
    "5G5w": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("7vx8"),
            o = n("oIkB"),
            s = n("LIeg");

        function l(e, t, n, i) {
            void 0 === n && (n = {});
            var a = e.readQuery({
                query: t,
                variables: n
            });
            if (a) {
                var r = s(a, function(e) {
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
        }
        var d = n("Odds"),
            c = n("xGL+"),
            m = n("E+ZP"),
            u = (n("AtoX"), n("RuaR"));
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
                    return i.__awaiter(t, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
            return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                !e.categoryChange || this.props.categoryChange && this.props.categoryChange.timestampMs === e.categoryChange.timestampMs || !e.categoryChange.category.games.includes(this.props.title) || this.isFollowing() !== e.categoryChange.shouldFollow && this.onClick()
            }, t.prototype.render = function() {
                var e;
                return this.state.inProgress ? e = a.createElement("div", {
                    className: "follow-game-card__overlay"
                }, a.createElement(d._8, {
                    fillContent: !0
                })) : this.state.hovered ? e = a.createElement("div", {
                    className: "follow-game-card__overlay"
                }, a.createElement(d._19, {
                    width: 50,
                    height: 50,
                    asset: this.isFollowing() ? d._20.Unheart : d._20.Heart
                })) : this.isFollowing() && (e = a.createElement("div", {
                    className: "follow-game-card__overlay follow-game-card__overlay--followed",
                    "data-a-target": "follow-game-card--followed"
                }, a.createElement(d._19, {
                    width: 50,
                    height: 50,
                    asset: d._20.Heart
                }))), a.createElement(d._0, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement("div", i.__assign({
                    className: "follow-game-card",
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    onClick: this.onClick
                }, Object(d._56)(this.props)), a.createElement(d.B, {
                    key: this.props.title
                }, a.createElement(d._6, {
                    position: d._13.Relative
                }, e, a.createElement(d.D, {
                    aspect: d.k.Aspect3x4,
                    alt: this.props.imageAlt,
                    src: this.props.imageSrc
                })), a.createElement(d.C, null, a.createElement(d._6, {
                    margin: {
                        top: .5,
                        bottom: 1
                    }
                }, a.createElement(d.O, {
                    color: d.J.Base,
                    fontSize: d.T.Size5
                }, this.props.title), a.createElement(d.O, {
                    color: d.J.Alt,
                    fontSize: d.T.Size6
                }, this.props.info))))))
            }, t.prototype.followGame = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return i.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                t = i.__assign({}, Object(o.a)({
                                    gameID: e
                                }), {
                                    update: function(e, t) {
                                        var i = t.data.followGame;
                                        l(e, m, {
                                            name: n.props.title
                                        }, function(e) {
                                            return e.game && i && i.game ? (e.game.self.follow = i.game.self.follow, e) : e
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
                                }), a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, this.props.followGame(t)];
                            case 2:
                                return a.sent(), this.setState({
                                    inProgress: !1
                                }, function() {
                                    n.props.onFollow && n.props.onFollow(n.props.title)
                                }), [3, 4];
                            case 3:
                                return a.sent(), this.setState({
                                    inProgress: !1
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype.unfollowGame = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return i.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                t = i.__assign({}, Object(o.a)({
                                    gameID: e
                                }), {
                                    update: function(e, t) {
                                        var i = t.data.unfollowGame;
                                        l(e, m, {
                                            name: n.props.title
                                        }, function(e) {
                                            return e.game && i && i.game ? (e.game.self.follow = i.game.self.follow, e) : e
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
                                }), a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, this.props.unfollowGame(t)];
                            case 2:
                                return a.sent(), this.setState({
                                    inProgress: !1
                                }, function() {
                                    n.props.onUnfollow && n.props.onUnfollow(n.props.title)
                                }), [3, 4];
                            case 3:
                                return a.sent(), this.setState({
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
            }, t = i.__decorate([Object(r.a)(m, {
                options: function(e) {
                    return {
                        variables: {
                            name: e.title
                        }
                    }
                }
            }), Object(r.a)(c, {
                name: "followGame"
            }), Object(r.a)(u, {
                name: "unfollowGame"
            })], t)
        }(a.Component)
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
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
    "6yQB": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("iJpA"),
            o = n("c8Oh"),
            s = n("TToO"),
            l = n("GiK3"),
            d = n("6sO2"),
            c = n("zCIC"),
            m = n("+Znq"),
            u = n("D9fv"),
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
                        return l.createElement(g._6, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, l.createElement(g.I, {
                            label: e.label,
                            checked: t.props.languagePreferences.includes(e.code),
                            "data-language-code": e.code,
                            "data-a-target": "language-filter-" + e.code + "-checkbox",
                            onChange: t.handleLanguageChange
                        }))
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.languagePreferences.length;
                    return l.createElement(g._6, {
                        className: "language-select-menu"
                    }, l.createElement(m.a, null, l.createElement(g.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: g.A.Hollow
                    }, l.createElement(g._6, {
                        display: g.P.Flex
                    }, Object(d.d)("Language", "LanguageSelectMenu"), l.createElement(g._6, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && l.createElement(g._10, {
                        type: g._11.Brand,
                        label: e.toString()
                    })))), l.createElement(g.p, {
                        direction: g.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, l.createElement(c.b, {
                        className: "language-select-menu__balloon"
                    }, l.createElement(g._6, {
                        padding: .5
                    }, Object(u.b)().map(this.renderLanguageOption))), l.createElement(g._29, {
                        background: g.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, l.createElement(g.u, {
                        type: g.A.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(d.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = s.__decorate([Object(p.d)("LanguageSelectMenu")], t)
            }(l.Component));
        var h = Object(i.b)(function(e) {
            return {
                languagePreferences: Object(o.a)(e)
            }
        }, function(e) {
            return Object(a.b)({
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
            var t = i.createElement(o._6, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.R.Column,
                justifyContent: o._5.Center,
                display: o.P.Flex
            }, i.createElement(o.O, {
                color: o.J.Link,
                fontSize: o.T.Size4,
                noWrap: !0
            }, Object(r.d)("View All", "Following--ViewAllButton")), i.createElement(o.O, {
                color: o.J.Alt2,
                fontSize: o.T.Size4,
                noWrap: !0
            }, e.subHeader));
            e.linkTo && (t = i.createElement(a.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t));
            return i.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": l
            }, i.createElement(o._6, null, i.createElement(o.j, {
                ratio: e.aspectRatio
            }, i.createElement(o._29, {
                background: o.m.Alt2,
                fullHeight: !0
            }, t))))
        };
        var i = n("GiK3"),
            a = (n.n(i), n("F8kA")),
            r = n("6sO2"),
            o = n("Odds"),
            s = n("oHn4"),
            l = (n.n(s), "view-all-button-selector")
    },
    "7tMz": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("75D5");

        function o(e) {
            return {
                latencyTracking: function(e, t) {
                    return new r.a(e, t)
                }(e),
                rootLatencyTracker: s()
            }
        }

        function s() {
            return new r.a("Root")
        }
        n("MRMr");

        function l(e, t) {
            return function(t) {
                return function(n) {
                    function r() {
                        return null !== n && n.apply(this, arguments) || this
                    }
                    return i.__extends(r, n), r.prototype.render = function() {
                        return a.createElement(t, i.__assign({}, this.props, o(e)))
                    }, r
                }(a.Component)
            }
        }
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return l
        })
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
            return o
        });
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("Aj/L"),
            o = function() {
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
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
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
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
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
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
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
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var a, r, o, s;
                        return i.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, r = this.serialize(t.body, a), o = i.__assign({}, t, {
                                        body: r
                                    }), [4, this._fetch(e, o)];
                                case 1:
                                    return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, l.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var a, r;
                        return i.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((a = o.sent()).error || a.requestError) throw new Error("Error while making request");
                                    return r = i.__assign({}, a, {
                                        body: a.body
                                    }), [2, Promise.resolve(r)];
                                case 2:
                                    throw o.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, a, r;
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
                                    return a = i.sent(), e.headers && e.headers.get && (r = e.headers.get("Content-Type")) && -1 !== r.indexOf("application/json") && (t.requestError = a), [3, 4];
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
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var n = a.o.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(r.c)(n);
                    return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e.logger = a.o.logger.withCategory("legacy-api"), e
            }()
    },
    A8Kk: function(e, t) {},
    AHWf: function(e, t) {},
    AadB: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("O27J"),
            o = n("6sO2"),
            s = n("+GT7"),
            l = n("6BvN"),
            d = n("SZoP"),
            c = n("NY9D"),
            m = n("vH/s"),
            u = n("HW6M"),
            p = n("Odds"),
            g = (n("ehrk"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = u("live-channel-preview-card", {
                        "live-channel-preview-card--loading": !this.props.streamLoaded
                    });
                    return a.createElement("div", i.__assign({
                        className: e,
                        "data-test-selector": "live-channel-preview-card"
                    }, Object(p._56)(this.props)), a.createElement(s.a, i.__assign({}, this.props), a.createElement(p.j, {
                        ratio: p.k.Aspect16x9
                    }, this.props.videoPlayer)))
                }, t
            }(a.Component)),
            v = n("v5ho"),
            h = n("RH2O"),
            f = n("2KeS"),
            k = n("V5M+"),
            y = n("jetF"),
            w = n("7vx8"),
            _ = n("CSlQ"),
            b = n("3zLD"),
            S = n("+8VM"),
            N = n("oIkB"),
            E = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(o.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(o.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(o.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(o.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(o.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(o.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            },
            C = n("nC3l"),
            F = (n("sJt0"), "error-message"),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? a.createElement(p._6, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(p.O, {
                            color: p.J.Error,
                            type: p._43.H4,
                            "data-test-selector": F
                        }, E(t.state.error))) : null
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
                                        return this.props.banUserFromCommunity ? (e = i.__assign({}, Object(N.a)({
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
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (o.o.tracking.track(m.SpadeEventType.CommunityModeration, {
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
                    return a.createElement(p._0, {
                        position: p._13.Relative
                    }, a.createElement(p._29, {
                        background: p.m.Base,
                        className: "stream-ban-modal"
                    }, a.createElement(p._6, {
                        padding: 2
                    }, this.renderErrorMessage(), a.createElement(p._6, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(p.O, {
                        type: p._43.H4
                    }, Object(o.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), a.createElement(p._29, {
                        borderTop: !0
                    }, a.createElement(p._6, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(p.O, {
                        bold: !0
                    }, Object(o.d)("Reason (Required)", "StreamBanModal")), a.createElement(p._2, {
                        type: p._3.Text,
                        placeholder: Object(o.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), a.createElement(p._29, {
                        borderTop: !0
                    }, a.createElement(p._6, {
                        padding: {
                            top: 2
                        },
                        textAlign: p._39.Center
                    }, a.createElement(p._6, {
                        display: p.P.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(p.u, {
                        type: p.A.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(o.d)("Cancel", "StreamBanModal"))), a.createElement(p._6, {
                        display: p.P.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(p.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(o.d)("Ban", "StreamBanModal")))))), a.createElement(S.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(a.Component),
            T = Object(b.compose)(Object(w.a)(C, {
                name: "banUserFromCommunity"
            }))(O);
        var L = Object(h.b)(null, function(e) {
                return Object(f.b)({
                    onCloseModal: k.c
                }, e)
            })(T),
            P = (n("npyu"), n("plcU")),
            D = "error-message",
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? a.createElement(p._6, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(p.O, {
                            color: p.J.Error,
                            type: p._43.H4,
                            "data-test-selector": D
                        }, E(t.state.error))) : null
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
                                        return this.props.timeoutUserFromCommunity ? (e = i.__assign({}, Object(N.a)({
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
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (o.o.tracking.track(m.SpadeEventType.CommunityModeration, {
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
                    return a.createElement(p._0, {
                        position: p._13.Relative
                    }, a.createElement(p._29, {
                        background: p.m.Base,
                        className: "stream-timeout-modal"
                    }, a.createElement(p._6, {
                        padding: 2
                    }, this.renderErrorMessage(), a.createElement(p._6, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(p.O, {
                        type: p._43.H4
                    }, Object(o.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), a.createElement(p._29, {
                        borderTop: !0
                    }, a.createElement(p._6, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(p.O, {
                        bold: !0
                    }, Object(o.d)("Reason (Required)", "StreamTimeoutModal")), a.createElement(p._2, {
                        type: p._3.Text,
                        placeholder: Object(o.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), a.createElement(p._6, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(p.O, {
                        bold: !0
                    }, Object(o.d)("Duration", "StreamTimeoutModal")), a.createElement(p._25, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, a.createElement("option", {
                        value: "2"
                    }, Object(o.d)("2 hours", "StreamTimeoutModal")), a.createElement("option", {
                        value: "4"
                    }, Object(o.d)("4 hours", "StreamTimeoutModal")), a.createElement("option", {
                        value: "8"
                    }, Object(o.d)("8 hours", "StreamTimeoutModal")), a.createElement("option", {
                        value: "12"
                    }, Object(o.d)("12 hours", "StreamTimeoutModal")), a.createElement("option", {
                        value: "24"
                    }, Object(o.d)("24 hours", "StreamTimeoutModal")))), a.createElement(p._29, {
                        borderTop: !0
                    }, a.createElement(p._6, {
                        padding: {
                            top: 2
                        },
                        textAlign: p._39.Center
                    }, a.createElement(p._6, {
                        display: p.P.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(p.u, {
                        type: p.A.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(o.d)("Cancel", "StreamTimeoutModal"))), a.createElement(p._6, {
                        display: p.P.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(p.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(o.d)("Timeout", "StreamTimeoutModal")))))), a.createElement(S.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(a.Component),
            I = Object(b.compose)(Object(w.a)(P, {
                name: "timeoutUserFromCommunity"
            }))(A);
        var U = Object(h.b)(null, function(e) {
                return Object(f.b)({
                    onCloseModal: k.c
                }, e)
            })(I),
            x = n("PO03"),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(d.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(L, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(d.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(U, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? a.createElement(y.a, null, a.createElement(p.v, {
                        ariaLabel: Object(o.d)("Moderation", "DirectoryGamePage"),
                        icon: p._20.ChatRiskFlag
                    }), a.createElement(p.p, {
                        direction: p.q.BottomRight,
                        size: p.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? a.createElement(p._4, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, a.createElement(p._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? a.createElement(p._4, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, a.createElement(p._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Timeout", "StreamFlag"))) : null
                }, t = i.__decorate([Object(w.a)(x, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.communityName
                            }
                        }
                    }
                }), Object(_.d)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component);
        var R = Object(h.b)(null, function(e) {
                return Object(f.b)({
                    onShowModal: k.d
                }, e)
            })(j),
            G = n("BwgW"),
            V = n("fc0G"),
            M = n("L3z0"),
            H = n("5MsU"),
            z = {
                autoplay: !0,
                branding: !1,
                channelInfo: !1,
                controls: !1,
                height: "100%",
                playsinline: !0,
                player: V.b.AnimatedThumbnails,
                showInfo: !1,
                trackingProperties: {
                    client_app: "twilight"
                },
                width: "100%",
                oauth_token: ""
            };

        function W() {
            return !!window.Twitch && !!window.Twitch.Player
        }
        var B = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.checkPlayerDependencyStatus = function() {
                        W() ? (n.setState({
                            canInitializePlayer: !0
                        }), n.checkPlayerDependencyAnimationFrame = null) : n.checkPlayerDependencyAnimationFrame = requestAnimationFrame(n.checkPlayerDependencyStatus)
                    }, n.attachRef = function(e) {
                        return n.playerRef = e
                    }, n.onPlayerReady = function() {
                        n.player && n.setState({
                            playerInitialized: !0
                        })
                    }, n.onPlayerPlay = function() {
                        n.player.setVolume(0)
                    }, n.onPlayerPlaying = function() {
                        n.player.setQuality("160p30"), n.props.onPlayerPlaying && n.props.onPlayerPlaying()
                    }, n.state = {
                        canInitializePlayer: W(),
                        playerInitialized: !1
                    }, n
                }
                return i.__extends(t, e), n = t, t.prototype.componentDidMount = function() {
                    var e = this;
                    if (this.userVolumeSetting = window.localStorage.getItem("volume"), this.userMuteSetting = window.localStorage.getItem("muted"), window.addEventListener("beforeunload", function() {
                            return e.resetVolume()
                        }), this.state.canInitializePlayer ? this.initializePlayer() : this.checkPlayerDependencyAnimationFrame = window.requestAnimationFrame(this.checkPlayerDependencyStatus), window.__playerScriptChunk && !n.tagInjected) {
                        var t = document.createElement("script");
                        t.async = !0, t.crossOrigin = "anonymous", t.src = window.__playerScriptChunk, document.body.appendChild(t);
                        var i = document.createElement("link");
                        i.href = window.__playerStyleChunk, i.media = "screen", i.rel = "stylesheet", i.type = "text/css", document.body.appendChild(i), n.tagInjected = !0
                    }
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.state.canInitializePlayer || !t.canInitializePlayer ? t.canInitializePlayer && t.playerInitialized : this.initializePlayer()
                }, t.prototype.render = function() {
                    return a.createElement("div", {
                        className: "video-player",
                        "data-test-selector": "thumbnail-video-player"
                    }, a.createElement("div", {
                        className: "video-player__container",
                        ref: this.attachRef
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    var e = this;
                    this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), window.removeEventListener("beforeunload", function() {
                        return e.resetVolume()
                    }), this.resetVolume(), this.player && (this.player.removeEventListener(H.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(M.a.Play, this.onPlayerPlay), this.player.removeEventListener(M.a.Playing, this.onPlayerPlaying), G.extensionService.unregisterPlayer(), this.player.destroy())
                }, t.prototype.initializePlayer = function() {
                    var e = z;
                    this.props.channelLogin && (e.channel = this.props.channelLogin);
                    var t = new window.Twitch.Player(this.playerRef, e);
                    this.player = t, t.addEventListener(H.a.PlayerReady, this.onPlayerReady), t.addEventListener(M.a.Play, this.onPlayerPlay), t.addEventListener(M.a.Playing, this.onPlayerPlaying), G.extensionService.registerPlayer(this.player)
                }, t.prototype.resetVolume = function() {
                    this.userVolumeSetting && window.localStorage.setItem("volume", this.userVolumeSetting), this.userMuteSetting && window.localStorage.setItem("muted", this.userMuteSetting)
                }, t.tagInjected = !1, t = n = i.__decorate([Object(_.d)("LiveChannelPreviewCard")], t);
                var n
            }(a.Component),
            q = n("PLRK"),
            $ = (n("GiGb"), 5e3),
            Q = 300,
            Y = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getLinkTo = function(e, t) {
                        var i = n.props.trackingContent ? n.props.trackingContent : m.PageviewContent.Live,
                            a = n.props.directoryType === v.a.Communities ? m.PageviewMedium.Community : m.PageviewMedium.Game;
                        return n.props.trackingMedium && (a = n.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: a,
                                content: i,
                                content_index: t
                            }
                        }
                    }, n.renderStreamFlag = function() {
                        var e = n.props.streamNode;
                        return e.broadcaster ? n.props.directoryType === v.a.Communities && n.props.directoryName ? a.createElement(p._6, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: p._13.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, a.createElement(R, {
                            communityName: n.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, n.shouldShowGame = function(e) {
                        return n.props.directoryType !== v.a.Games && n.props.streamNode.game ? n.props.streamNode.game[e] : ""
                    }, n.onMouseEnterHandler = function() {
                        !n.props.showPreview || n.state.hovered && !n.state.previewTimedOut || (n.removeThumbnailListener(), n.clearTimeouts(), n.setState({
                            hovered: !0
                        }, function() {
                            n.hoverTimeout = setTimeout(function() {
                                n.state.hovered && n.setState({
                                    loadingPreview: !0,
                                    previewTimedOut: !1,
                                    streamLoaded: !1
                                })
                            }, Q)
                        }))
                    }, n.onFocusHandler = function() {
                        n.setState({
                            focused: !0
                        }), n.onMouseEnterHandler()
                    }, n.onMouseLeaveHandler = function() {
                        n.state.hovered && n.props.showPreview && (n.clearTimeouts(), n.setState({
                            hovered: !1,
                            focused: !1,
                            loadingPreview: !1,
                            previewTimedOut: !1,
                            streamLoaded: !1
                        }, function() {
                            n.addThumbnailListener()
                        }))
                    }, n.onKeyDown = function(e) {
                        n.state.focused && ((e.charCode || e.keyCode) === l.a.Tab && n.onMouseLeaveHandler())
                    }, n.onStreamLoaded = function() {
                        n.state.hovered && (n.setState({
                            streamLoaded: !0,
                            loadingPreview: !1
                        }), n.createPreviewTimeout())
                    }, n.createPreviewTimeout = function() {
                        n.previewTimeout && window.clearTimeout(n.previewTimeout), n.previewTimeout = setTimeout(function() {
                            n.state.hovered && n.setState({
                                previewTimedOut: !0,
                                streamLoaded: !1,
                                loadingPreview: !1
                            })
                        }, $)
                    }, n.setRef = function(e) {
                        e && (n.thumbnailNode = r.findDOMNode(e), n.addThumbnailListener())
                    }, n.getVideoPlayer = function() {
                        var e = {
                            onPlayerPlaying: n.onStreamLoaded
                        };
                        if (n.props.showPreview && n.state.hovered && n.props.streamNode.broadcaster && n.props.streamNode.broadcaster.login) return a.createElement(B, i.__assign({
                            channelLogin: n.props.streamNode.broadcaster.login
                        }, e))
                    }, n.clearTimeouts = function() {
                        n.hoverTimeout && window.clearTimeout(n.hoverTimeout), n.createPreviewTimeout && window.clearTimeout(n.previewTimeout)
                    }, n.addThumbnailListener = function() {
                        n.thumbnailNode && n.props.showPreview && n.thumbnailNode.getElementsByClassName("tw-card-img")[0] && (n.thumbnailNode.getElementsByClassName("tw-card-img")[0].addEventListener("mouseenter", n.onMouseEnterHandler), n.thumbnailNode.getElementsByClassName("tw-card-img")[0].parentElement.addEventListener("focus", n.onFocusHandler))
                    }, n.removeThumbnailListener = function() {
                        n.thumbnailNode && n.props.showPreview && n.thumbnailNode.getElementsByClassName("tw-card-img")[0] && (n.thumbnailNode.getElementsByClassName("tw-card-img")[0].removeEventListener("mouseenter", n.onMouseEnterHandler), n.thumbnailNode.getElementsByClassName("tw-card-img")[0].parentElement.removeEventListener("focus", n.onFocusHandler))
                    }, n.state = {
                        focused: !1,
                        streamLoaded: !1,
                        hovered: !1,
                        previewTimedOut: !1,
                        loadingPreview: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.showPreview && this.addThumbnailListener()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.focused && this.thumbnailNode.getElementsByTagName("a").length && this.thumbnailNode.getElementsByTagName("a")[0].focus()
                }, t.prototype.componentWillUnmount = function() {
                    this.clearTimeouts(), this.removeThumbnailListener()
                }, t.prototype.render = function() {
                    var e = this.props.streamNode,
                        t = this.props.streamIndex;
                    if (!e.broadcaster) return null;
                    var n = this.props.showPreview && this.state.hovered && this.state.loadingPreview && !this.state.streamLoaded && !this.state.previewTimedOut,
                        i = this.props.showPreview && this.state.hovered && (this.state.loadingPreview || this.state.streamLoaded) && !this.state.previewTimedOut;
                    return a.createElement("div", {
                        className: "stream-thumbnail",
                        ref: this.setRef,
                        "data-target": t ? "" : "directory-first-item",
                        onKeyDown: this.onKeyDown,
                        onMouseLeave: this.onMouseLeaveHandler,
                        style: {
                            order: t
                        }
                    }, a.createElement(p._6, {
                        className: "stream-thumbnail__card",
                        position: p._13.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": "directory-game__card_container"
                    }, n && a.createElement(p._29, {
                        attachRight: !0,
                        attachTop: !0,
                        background: p.m.Overlay,
                        borderRadius: p.s.Small,
                        color: p.J.OverlayAlt,
                        margin: .5,
                        padding: .5,
                        position: p._13.Absolute,
                        zIndex: p._55.Above
                    }, a.createElement(p._8, {
                        fillContent: !0,
                        inheritColor: !0,
                        size: p._27.Small
                    })), !this.state.streamLoaded && a.createElement(s.a, {
                        imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || q.a,
                        channelName: Object(d.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: this.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                        gameTitle: this.shouldShowGame("name"),
                        gameLinkTo: this.getLinkTo(Object(c.c)(this.shouldShowGame("name")), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type,
                        streamMetadata: e.streamMetadata,
                        "data-a-target": "card-" + t,
                        "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                    }), i && a.createElement(g, {
                        streamLoaded: this.state.streamLoaded,
                        imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || q.a,
                        channelName: Object(d.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: this.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                        gameTitle: this.shouldShowGame("name"),
                        gameLinkTo: this.getLinkTo(Object(c.c)(this.shouldShowGame("name")), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type,
                        streamMetadata: e.streamMetadata,
                        videoPlayer: this.getVideoPlayer(),
                        hideTooltip: !0
                    }), this.renderStreamFlag()))
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return "directory-game__card_container"
        }), n.d(t, "b", function() {
            return Y
        })
    },
    AtoX: function(e, t) {},
    C2pI: function(e, t) {},
    CybZ: function(e, t) {},
    D9fv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.b = function() {
            var e = i.o.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return a.slice().sort(function(e, n) {
                var i = t(e),
                    a = t(n);
                return i !== a ? i - a : i + ":" + e.label < a + ":" + n.label ? -1 : 1
            }).concat(r(!0))
        };
        var i = n("6sO2"),
            a = [{
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
            }];

        function r(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(i.d)("Other", "broadcaster-languages") : "Other"
            }]
        }
        var o = new Set(a.concat(r()).map(function(e) {
            return e.code
        }))
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                            value: "follow"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "followedAt"
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
            s = n("HW6M"),
            l = n("GiK3"),
            d = n("6sO2"),
            c = n("2o2f"),
            m = n("Odds"),
            u = (n("CybZ"), (i = {})[c.a.Live] = "stream-type-indicator--live", i[c.a.Premiere] = "stream-type-indicator--premiere", i[c.a.Rerun] = "stream-type-indicator--rerun", i[c.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = ((a = {})[c.a.Premiere] = m._20.VideoPremiere, a[c.a.Rerun] = m._20.VideoRerun, a[c.a.WatchParty] = m._20.VideoRerun, a),
            g = ((r = {})[c.a.Premiere] = m._21.Live, r[c.a.Rerun] = m._21.Inherit, r[c.a.WatchParty] = m._21.Inherit, r),
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(m._29, {
                        className: this.getClassNames(),
                        color: m.J.Overlay,
                        background: m.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: m.s.Small,
                        display: m.P.Flex
                    }, l.createElement(m._6, {
                        display: m.P.Flex,
                        alignItems: m.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(m.O, {
                        type: m._43.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[u[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(m._29, {
                        borderRadius: m.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === c.a.Live ? l.createElement(m._6, {
                        className: "stream-type-indicator__live-wrapper",
                        display: m.P.Flex,
                        alignItems: m.c.Center
                    }, l.createElement(m.F, {
                        status: m.H.Live,
                        size: m.G.Small
                    })) : l.createElement(m._19, {
                        asset: p[this.props.type],
                        type: g[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case c.a.Live:
                            return Object(d.d)("Live", "StreamTypeIndicator");
                        case c.a.Premiere:
                            return Object(d.d)("Premiere", "StreamTypeIndicator");
                        case c.a.Rerun:
                        case c.a.WatchParty:
                            return Object(d.d)("Rerun", "StreamTypeIndicator");
                        default:
                            return ""
                    }
                }, t
            }(l.Component);
        n.d(t, "a", function() {
            return v
        })
    },
    ISok: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("WxKK"),
            o = n("CSlQ"),
            s = n("81qH"),
            l = n("XYqD"),
            d = n("Odds"),
            c = function(e) {
                var t = [],
                    n = null;
                if (null === e.videos)
                    for (var o = void 0 === e.placeholderCount ? 20 : e.placeholderCount, c = 0; c < o; c++) t.push(a.createElement(l.a, {
                        key: c
                    }));
                else e.viewAllButtonProps && (n = a.createElement(r.a, i.__assign({}, e.viewAllButtonProps))), t = e.videos.map(function(t, n) {
                    return a.createElement(d._6, {
                        "data-a-target": "video-tower-card-" + n,
                        key: "video-" + n,
                        padding: {
                            bottom: .5
                        }
                    }, a.createElement(s.VideoPreviewCard, {
                        hideGameArt: e.hideGameArt,
                        tracking: {
                            content: e.trackingContent,
                            content_index: n,
                            medium: e.trackingMedium
                        },
                        video: t
                    }))
                });
                return a.createElement(d._49, {
                    gutterSize: d._51.Small,
                    childWidth: e.videoCardSize || d._50.Large,
                    placeholderItems: 20
                }, t, n)
            },
            m = Object(o.d)("VideoTower", {
                autoReportInteractive: !0
            })(c);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return m
        })
    },
    IpE8: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            l = n("TToO"),
            d = n("GiK3"),
            c = n("CIox"),
            m = n("6sO2"),
            u = n("yWCw"),
            p = n("CSlQ"),
            g = n("eXld"),
            v = n("7vx8"),
            h = n("j7/Y"),
            f = n("w9tK"),
            k = n("vH/s"),
            y = n("czpb"),
            w = n("DBTH"),
            _ = n("Odds"),
            b = n("qb8C"),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.userDataLoaded = function() {
                        return t.props.data && !t.props.data.loading
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return l.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, m.o.experiments.getAssignment(w.j)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        inOnboarding: Object(w.p)(e)
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.userDataLoaded() && void 0 !== this.state.inOnboarding && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (void 0 === this.state.inOnboarding || !this.userDataLoaded()) return null;
                    var e = this.props.activeCategory,
                        t = [d.createElement(_._30, {
                            key: "following-overview-tab",
                            active: void 0 === e,
                            linkTo: "/directory/following",
                            "data-a-target": "following-overview-tab"
                        }, Object(m.d)("Overview", "FollowingHeaderTabs")), d.createElement(_._30, {
                            key: "following-channels-tab",
                            active: e === k.SpadeFollowingCategory.Live,
                            "data-a-target": "following-channels-tab",
                            linkTo: "/directory/following/live"
                        }, Object(m.d)("Channels", "FollowingHeaderTabs")), d.createElement(_._30, {
                            key: "following-hosts-tab",
                            active: e === k.SpadeFollowingCategory.Hosts,
                            "data-a-target": "following-hosts-tab",
                            linkTo: "/directory/following/hosts"
                        }, Object(m.d)("Hosts", "FollowingHeaderTabs")), d.createElement(_._30, {
                            key: "following-games-tab",
                            active: e === k.SpadeFollowingCategory.Games,
                            "data-a-target": "following-games-tab",
                            linkTo: "/directory/following/games"
                        }, Object(m.d)("Games", "FollowingHeaderTabs")), d.createElement(_._30, {
                            key: "following-communities-tab",
                            active: e === k.SpadeFollowingCategory.Communities,
                            linkTo: Object(y.a)("/directory/following/communities"),
                            targetBlank: Object(y.b)(),
                            "data-a-target": "following-communities-tab"
                        }, Object(m.d)("Communities", "FollowingPage"))];
                    if (this.state.inOnboarding && !this.props.data.error && this.props.data.currentUser && Object(w.q)(new Date(this.props.data.currentUser.createdAt))) {
                        var n = d.createElement(_._30, {
                            key: "following-foryou-tab",
                            "data-test-selector": "for-you-tab",
                            active: e === k.SpadeFollowingCategory.ForYou,
                            linkTo: "/directory/following/foryou",
                            "data-a-target": "following-foryou-tab"
                        }, Object(m.d)("For You", "FollowingHeaderTabs"));
                        t.unshift(n)
                    }
                    return d.createElement(_._6, {
                        className: "following__header-tabs",
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(_._31, null, t))
                }, t = l.__decorate([Object(p.d)("FollowingHeaderTabs"), Object(v.a)(b)], t)
            }(d.Component),
            N = n("7FW4"),
            E = n("peXu");
        n("4194");

        function C(e) {
            var t;
            if (!e.communities || 0 === e.communities.length) return d.createElement(_.O, {
                "data-a-target": "no-communities-text"
            }, Object(m.d)("No communities", "LiveCommunities"));
            var n, i = e.communities;
            if (e.showSample) {
                var a = Object(E.a)(e.directoryWidth || 0, 180, 1); - 1 === a ? i = [] : a < i.length && (i = i.slice(0, a - 1), n = d.createElement(N.a, {
                    subHeader: Object(m.d)("Communities", "LiveCommunities--view-all"),
                    linkTo: "/directory/following/communities",
                    aspectRatio: _.k.Aspect3x4
                })), t = d.createElement(_._6, {
                    margin: {
                        bottom: 2
                    }
                }, d.createElement(_.O, {
                    type: _._43.H4,
                    color: _.J.Alt2,
                    fontSize: _.T.Size5,
                    transform: _._42.Uppercase,
                    "data-a-target": "live-communities-header"
                }, Object(m.d)("Communities", "LiveCommunities")))
            }
            var r = i.map(function(e, t) {
                var n = e.node,
                    i = Object(m.d)("{channelsCount,number} streams", {
                        channelsCount: n.broadcastersCount
                    }, "LiveCommunities"),
                    a = Object(m.d)("{viewerCount,number} viewers {streams}", {
                        viewerCount: n.viewersCount,
                        streams: d.createElement("span", null, i)
                    }, "LiveCommunities");
                return d.createElement(_._6, {
                    key: n.id,
                    margin: {
                        bottom: 2
                    }
                }, d.createElement(_.t, {
                    linkTo: {
                        pathname: "/communities/" + encodeURIComponent(n.name),
                        state: {
                            content: "communities_select_click",
                            medium: "twitch_communities_directory",
                            content_index: t
                        }
                    },
                    title: n.displayName,
                    alt: n.displayName + " cover image",
                    src: n.avatarURL || m.a.defaultBoxArtURL,
                    info: d.createElement("span", {
                        className: "live-communities__info"
                    }, a),
                    "data-a-target": "live-community-card-" + t
                }))
            });
            return d.createElement("div", null, t, d.createElement(_._49, {
                gutterSize: _._51.Small,
                childWidth: _._50.Small,
                placeholderItems: 30
            }, r, n))
        }
        var F = n("hOej"),
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    m.o.setPageTitle(Object(m.d)("Communities You Follow", "FollowingCommunitiesPage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? d.createElement(_._6, {
                        display: _.P.Flex,
                        position: _._13.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, d.createElement(_._8, {
                        fillContent: !0
                    })) : this.props.data.error ? d.createElement(u.a, {
                        message: Object(m.d)("Error loading data.", "FollowingCommunitiesPage")
                    }) : d.createElement(C, {
                        communities: this.props.data.currentUser ? this.props.data.currentUser.followedCommunities.edges : []
                    }), d.createElement(_._6, {
                        padding: 3
                    }, d.createElement(S, {
                        activeCategory: k.SpadeFollowingCategory.Communities
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = l.__decorate([Object(v.a)(F, {
                    options: {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 100
                        }
                    }
                }), Object(p.d)("FollowingCommunitiesPage", {
                    destination: f.a.DirectoryFollowingCommunities
                }), Object(h.a)({
                    location: k.PageviewLocation.Directory,
                    properties: function() {
                        return {
                            content_type: k.PageviewDirectoryContentType.Communities,
                            tab: k.PageviewFollowingTab.Communities
                        }
                    }
                })], t)
            }(d.Component),
            T = n("V5M+"),
            L = n("+8VM"),
            P = n("zCIC"),
            D = n("T0IN"),
            A = n("5G5w"),
            I = n("6lWU"),
            U = (n("A8Kk"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        followCount: 0
                    }, n.getAndStoreShuffledGameCards = function() {
                        n.props.data && n.props.data.games && (n.shuffledGameCards = Object(D.a)(n.props.data.games.edges.map(function(e, t) {
                            var i = e.node;
                            return i && i.id ? d.createElement(_._6, {
                                key: i.id
                            }, d.createElement(A.a, {
                                info: "",
                                title: i.name,
                                imageAlt: i.name,
                                imageSrc: i.boxArtURL,
                                onFollow: n.onFollow,
                                onUnfollow: n.onUnfollow,
                                "data-a-target": "follow-game-card-" + t
                            })) : null
                        })))
                    }, n.onClickContinue = function() {
                        n.props.onContinue && n.props.onContinue(), m.o.store.dispatch(Object(T.c)())
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
                return l.__extends(t, e), t.prototype.render = function() {
                    return !this.props.data || this.props.data.loading ? null : (this.shuffledGameCards || this.getAndStoreShuffledGameCards(), d.createElement(_._29, {
                        className: "following-games-modal",
                        background: _.m.Base,
                        padding: 2,
                        overflow: _._9.Hidden,
                        "data-a-target": "follow-games-modal",
                        display: _.P.Flex,
                        flexDirection: _.R.Column,
                        flexWrap: _.S.NoWrap
                    }, d.createElement(_._6, {
                        flexGrow: 0,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: _._39.Center,
                        display: _.P.Flex,
                        flexDirection: _.R.Column,
                        alignContent: _.b.Center
                    }, d.createElement(_._6, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(_.O, {
                        fontSize: _.T.Size4,
                        color: _.J.Base,
                        bold: !0
                    }, Object(m.d)("Choose some games that you'd like to follow.", "FollowGamesModal"))), d.createElement(_.O, {
                        fontSize: _.T.Size5,
                        color: _.J.Alt
                    }, Object(m.d)("This will let you pin your favorites for easy access.", "FollowGamesModal"))), d.createElement(_._6, {
                        className: "following-games-modal__list",
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1
                    }, d.createElement(P.b, {
                        suppressScrollX: !0
                    }, d.createElement(_._6, {
                        padding: 1
                    }, d.createElement(_._49, {
                        childWidth: _._50.Small,
                        gutterSize: _._51.Small,
                        placeholderItems: 99
                    }, this.shuffledGameCards)))), d.createElement(_._6, {
                        display: _.P.Flex,
                        justifyContent: _._5.Center,
                        padding: {
                            y: 1
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, d.createElement(_.u, {
                        size: _.y.Large,
                        onClick: this.onClickContinue,
                        disabled: 0 === this.state.followCount
                    }, Object(m.d)("Continue", "FollowGamesModal"))), d.createElement(L.a, null)))
                }, t = l.__decorate([Object(v.a)(I, {
                    options: {
                        variables: {
                            limit: 40
                        }
                    }
                })], t)
            }(d.Component)),
            x = n("NY9D"),
            j = n("WxKK"),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = d.createElement(_._6, {
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(_.O, {
                        type: _._43.H4,
                        color: _.J.Alt2,
                        fontSize: _.T.Size5,
                        transform: _._42.Uppercase,
                        "data-a-target": "live-games-header"
                    }, Object(m.d)("Live games", "LiveGames")));
                    if (!this.props.games) return d.createElement("div", null, e);
                    var t, n = this.props.games.filter(function(e) {
                        return e && !!e.viewersCount
                    });
                    if (!(n = n.sort(function(e, t) {
                            if (!e) return -1;
                            if (!t) return 1;
                            var n = e.name.toLowerCase(),
                                i = t.name.toLowerCase();
                            return n < i ? -1 : n > i ? 1 : 0
                        })) || 0 === n.length) return d.createElement(_._29, {
                        fullWidth: !0,
                        background: _.m.Alt2,
                        display: _.P.Flex,
                        flexDirection: _.R.Column,
                        alignItems: _.c.Center,
                        padding: {
                            y: 3
                        },
                        margin: {
                            y: 2
                        },
                        "data-target": "following__follow-games-cta"
                    }, d.createElement(_._6, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(_.O, {
                        fontSize: _.T.Size4,
                        color: _.J.Alt2
                    }, Object(m.d)("You can now follow your favorite games!", "LiveGames"))), d.createElement(_._6, {
                        margin: {
                            top: .5
                        }
                    }, d.createElement(_.u, {
                        size: _.y.Large,
                        onClick: this.props.showFollowGamesModal,
                        "data-a-target": "find-out-more-button"
                    }, Object(m.d)("Find Out More!", "LiveGames"))));
                    if (this.props.showSample && this.props.directoryWidth && this.props.directoryWidth > 0) {
                        var i = Object(E.a)(this.props.directoryWidth, 180, 1);
                        i < n.length && (n = n.slice(0, i - 1), t = d.createElement(_._6, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(j.a, {
                            subHeader: "Live Games",
                            linkTo: "/directory/following/games",
                            aspectRatio: _.k.Aspect3x4
                        })))
                    }
                    var a = n.map(function(e, t) {
                        return e ? d.createElement(_._6, {
                            key: e.id,
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(_.t, {
                            linkTo: {
                                pathname: Object(x.c)(e.name),
                                state: {
                                    content: "twitch_following",
                                    medium: "live_game",
                                    content_index: t
                                }
                            },
                            title: e.name,
                            alt: e.name + " cover image",
                            src: e.boxArtURL || m.a.defaultBoxArtURL,
                            info: Object(m.d)("{viewerCount,number} viewers", {
                                viewerCount: e.viewersCount
                            }, "LiveGames"),
                            "data-a-target": "live-game-card-" + t
                        })) : null
                    });
                    return d.createElement("div", null, e, d.createElement(_._49, {
                        gutterSize: _._51.Small,
                        childWidth: _._50.Small,
                        placeholderItems: 30
                    }, a, t))
                }, t
            }(d.Component);
        var G = Object(i.b)(null, function(e, t) {
                return Object.assign(Object(a.b)({
                    showFollowGamesModal: function() {
                        return Object(T.d)(U, {
                            onFollowChange: t.onFollowChange
                        })
                    }
                }, e), t)
            })(R),
            V = n("x/hU"),
            M = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    m.o.setPageTitle(Object(m.d)("Games You Follow", "FollowingGamesPage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? d.createElement(_._6, {
                        display: _.P.Flex,
                        position: _._13.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, d.createElement(_._8, {
                        fillContent: !0
                    })) : this.props.data.error ? d.createElement(u.a, {
                        message: Object(m.d)("Error loading data.", "FollowingGamesPage")
                    }) : d.createElement(G, {
                        games: this.props.data.currentUser ? this.props.data.currentUser.followedGames.nodes : [],
                        onFollowChange: this.props.data.refetch
                    }), d.createElement(_._6, {
                        padding: 3
                    }, d.createElement(S, {
                        activeCategory: k.SpadeFollowingCategory.Games
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = l.__decorate([Object(v.a)(V, {
                    options: {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 100
                        }
                    }
                }), Object(p.d)("FollowingGamesPage", {
                    destination: f.a.DirectoryFollowingGames
                }), Object(h.a)({
                    location: k.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: k.PageviewDirectoryContentType.Games,
                            tab: k.PageviewFollowingTab.Games,
                            num_live_games: e.data.currentUser.followedGames.nodes.filter(function(e) {
                                return e && e.viewersCount > 0
                            }).length
                        }
                    }
                })], t)
            }(d.Component),
            H = n("+GT7"),
            z = n("SZoP");
        n("tkib");

        function W() {
            return d.createElement(_._6, {
                className: "following__empty",
                margin: {
                    x: "auto"
                }
            }, d.createElement(_._6, {
                textAlign: _._39.Center,
                margin: {
                    bottom: 2
                }
            }, d.createElement(_.O, {
                color: _.J.Alt2,
                fontSize: _.T.Size4,
                type: _._43.H4
            }, Object(m.d)("Never miss the Channels you love.", "EmptyChannelList"))), d.createElement(_._6, {
                display: _.P.Flex,
                justifyContent: _._5.Between
            }, d.createElement(_._6, {
                className: "following__empty-information",
                position: _._13.Relative
            }, d.createElement(_._6, {
                margin: {
                    bottom: 1
                }
            }, d.createElement("figure", {
                className: "following__empty-image"
            }, d.createElement("img", {
                src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_1.png"
            }))), d.createElement(_.O, {
                fontSize: _.T.Size5
            }, Object(m.d)("Like the channel you're watching? Follow it.", "EmptyChannelList")), d.createElement(_._29, {
                className: "following__empty-information-num",
                position: _._13.Absolute,
                attachLeft: !0,
                attachTop: !0,
                background: _.m.Alt,
                textAlign: _._39.Center
            }, "1")), d.createElement(_._6, {
                className: "following__empty-information",
                position: _._13.Relative
            }, d.createElement(_._6, {
                margin: {
                    bottom: 1
                }
            }, d.createElement("figure", {
                className: "following__empty-image"
            }, d.createElement("img", {
                src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_2.png"
            }))), d.createElement(_.O, {
                fontSize: _.T.Size5
            }, Object(m.d)("We'll let you know when the channel goes live again.", "EmptyChannelList")), d.createElement(_._29, {
                className: "following__empty-information-num",
                position: _._13.Absolute,
                attachLeft: !0,
                attachTop: !0,
                background: _.m.Alt,
                textAlign: _._39.Center
            }, "2")), d.createElement(_._6, {
                className: "following__empty-information",
                position: _._13.Relative
            }, d.createElement(_._6, {
                margin: {
                    bottom: 1
                }
            }, d.createElement("figure", {
                className: "following__empty-image"
            }, d.createElement("img", {
                src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_3.png"
            }))), d.createElement(_.O, {
                fontSize: _.T.Size5
            }, Object(m.d)("Come back and watch your favorite channels.", "EmptyChannelList")), d.createElement(_._29, {
                className: "following__empty-information-num",
                position: _._13.Absolute,
                attachLeft: !0,
                attachTop: !0,
                background: _.m.Alt,
                textAlign: _._39.Center
            }, "3"))))
        }

        function B(e) {
            var t = Object(m.d)("Live hosts", "LiveHosts"),
                n = d.createElement(_._6, {
                    margin: {
                        bottom: 2
                    }
                }, d.createElement(_.O, {
                    type: _._43.H4,
                    color: _.J.Alt2,
                    fontSize: _.T.Size5,
                    transform: _._42.Uppercase,
                    "data-a-target": "live-hosts-header"
                }, t));
            if (!e.hosts || 0 === e.hosts.length) return e.followsCount > 0 ? d.createElement("div", null, n, d.createElement(_._6, {
                textAlign: _._39.Center,
                padding: {
                    y: 5
                }
            }, d.createElement(_.O, {
                color: _.J.Alt2,
                fontSize: _.T.Size4,
                "data-a-target": "no-hosts-live-text",
                italic: !0
            }, Object(m.d)("No Hosts Live", "LiveHosts")))) : d.createElement("div", null, n, !e.showSample && d.createElement(W, null));
            var i, a = [];
            if (e.hosts.forEach(function(e) {
                    e && e.hosting && e.hosting.stream && e.hosting.id && a.push(e)
                }), e.maxCount) e.maxCount < a.length && (a = a.slice(0, e.maxCount - 1), i = d.createElement(N.a, {
                subHeader: "Live Hosts",
                onClickViewAll: e.onClickViewAll
            }));
            else if (e.showSample && e.directoryWidth && e.directoryWidth > 0) {
                var r = Object(E.a)(e.directoryWidth, 240, 2);
                r < a.length && (a = a.slice(0, r - 1), i = d.createElement(N.a, {
                    subHeader: t,
                    linkTo: {
                        pathname: "/directory/following/hosts",
                        state: {
                            medium: k.PageviewMedium.Following,
                            content: k.PageviewContent.Following
                        }
                    }
                }))
            }
            var o = a.map(function(e, t) {
                if (e.hosting && e.hosting.stream && e.hosting.id) {
                    var n = Object(z.a)(e.hosting.login, e.hosting.displayName, !0),
                        i = Object(z.a)(e.login, e.displayName, !0),
                        a = Object(m.d)("{hostDisplayName} hosting {hostedDisplayName}", {
                            hostDisplayName: i,
                            hostedDisplayName: n
                        }, "LiveHosts"),
                        r = e.hosting.stream && e.hosting.stream.game ? Object(x.c)(e.hosting.stream.game.name) : "";
                    return d.createElement(_._6, {
                        key: e.id,
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(H.a, {
                        imageSrc: e.hosting.stream.previewImageURL || m.a.defaultStreamPreviewURL,
                        imageAlt: a,
                        viewerCount: e.hosting.stream && e.hosting.stream.viewersCount || 0,
                        title: a,
                        channelName: n,
                        gameImageSrc: e.hosting.stream && e.hosting.stream.game && e.hosting.stream.game.boxArtURL || m.a.defaultBoxArtURL,
                        gameTitle: e.hosting.stream.game && e.hosting.stream.game.name || "",
                        gameLinkTo: {
                            pathname: r,
                            state: {
                                medium: k.PageviewMedium.Following,
                                content: k.PageviewContent.LiveHost,
                                content_index: t
                            }
                        },
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                medium: k.PageviewMedium.Following,
                                content: k.PageviewContent.LiveHost,
                                content_index: t
                            }
                        },
                        channelNameLinkTo: {
                            pathname: "/" + e.hosting.login + "/videos",
                            state: {
                                medium: k.PageviewMedium.Following,
                                content: k.PageviewContent.LiveHost,
                                content_index: t
                            }
                        },
                        "data-a-target": "live-host-card-" + t,
                        streamType: e.hosting.stream.type,
                        hosting: !0
                    }))
                }
            });
            return d.createElement("div", null, n, d.createElement(_._49, {
                gutterSize: _._51.Small,
                childWidth: _._50.Medium,
                placeholderItems: 20
            }, o, i))
        }
        var q, $ = n("b+Vy"),
            Q = 50,
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        maxCount: Q
                    }, t.onClickViewAll = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            return l.__generator(this, function(e) {
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
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    m.o.setPageTitle(Object(m.d)("Hosts You Follow", "FollowingHostsPage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e;
                    if (this.props.data.loading) e = d.createElement(_._6, {
                        display: _.P.Flex,
                        position: _._13.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, d.createElement(_._8, {
                        fillContent: !0
                    }));
                    else if (this.props.data.error) e = d.createElement(u.a, {
                        message: Object(m.d)("Error loading data.", "FollowingHostsPage")
                    });
                    else {
                        var t = this.props.data.currentUser ? this.props.data.currentUser.followedHosts.nodes : [],
                            n = this.props.data.currentUser ? this.props.data.currentUser.follows.totalCount : 0;
                        e = d.createElement(B, {
                            hosts: t,
                            followsCount: n,
                            maxCount: this.state.maxCount,
                            onClickViewAll: this.onClickViewAll
                        })
                    }
                    return d.createElement(_._6, {
                        padding: 3
                    }, d.createElement(S, {
                        activeCategory: k.SpadeFollowingCategory.Hosts
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = l.__decorate([Object(v.a)($, {
                    options: function() {
                        return {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                limit: 51
                            }
                        }
                    }
                }), Object(p.d)("FollowingHostsPage", {
                    destination: f.a.DirectoryFollowingHosts
                }), Object(h.a)({
                    location: k.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: k.PageviewDirectoryContentType.Hosts,
                            tab: k.PageviewFollowingTab.Hosts,
                            num_host_channels: e.data.currentUser && e.data.currentUser.followedHosts.nodes.length || 0
                        }
                    }
                })], t)
            }(d.Component),
            K = n("DtWM"),
            J = n("iOr9"),
            X = n("bZTi"),
            Z = n("MZUk");
        ! function(e) {
            e.FOLLOWING_BASIC = "following_basic", e.FOLLOWING_ADVANCED = "following_advanced"
        }(q || (q = {}));
        var ee = function(e) {
                var t, i = {
                        directoryWidth: e.directoryWidth,
                        tracking: {
                            content: k.PageviewContent.ResumeWatchingVideos,
                            medium: k.PageviewMedium.FinishWatching
                        }
                    },
                    a = l.__assign({}, i, {
                        viewAllButton: !0
                    }),
                    r = {
                        name: "TWILIGHT_VOD_REDITUS",
                        assignments: (t = {
                            fallback: function() {
                                return d.createElement(Z.a, {
                                    directoryWidth: e.directoryWidth
                                })
                            }
                        }, t[q.FOLLOWING_BASIC] = function() {
                            return X.a.wrap(function() {
                                return n.e(73).then(n.bind(null, "BmWY"))
                            }, "FinishWatchingTower")(i)
                        }, t[q.FOLLOWING_ADVANCED] = function() {
                            return X.a.wrap(function() {
                                return n.e(73).then(n.bind(null, "BmWY"))
                            }, "FinishWatchingTower")(a)
                        }, t),
                        loader: function() {
                            return null
                        }
                    };
                return d.createElement(J.a, l.__assign({}, r))
            },
            te = n("81qH");

        function ne(e) {
            var t = Object(m.d)("Live channels", "LiveChannels"),
                n = d.createElement(_._6, {
                    margin: {
                        bottom: 2
                    }
                }, d.createElement(_.O, {
                    type: _._43.H4,
                    color: _.J.Alt2,
                    fontSize: _.T.Size5,
                    transform: _._42.Uppercase,
                    "data-a-target": "live-channels-header"
                }, t));
            if (null !== e.users && 0 === e.users.length) return e.followsCount > 0 ? d.createElement("div", null, n, d.createElement(_._6, {
                textAlign: _._39.Center,
                padding: {
                    y: 5
                }
            }, d.createElement(_.O, {
                color: _.J.Alt2,
                fontSize: _.T.Size4,
                "data-a-target": "no-channels-live-text",
                italic: !0
            }, Object(m.d)("No Channels Live", "LiveChannels")))) : d.createElement("div", null, n, d.createElement(W, null));
            var i, a = e.users || [];
            if (e.maxDisplayCount && e.maxDisplayCount < a.length) a = a.slice(0, e.maxDisplayCount - 1), i = d.createElement(j.a, {
                subHeader: "Live Channels",
                onClickViewAll: e.onClickViewAll
            });
            else if (e.showSample && e.directoryWidth && e.directoryWidth > 0) {
                var r = Object(E.a)(e.directoryWidth, 240, 2);
                r < a.length && (a = a.slice(0, r - 1), i = d.createElement(j.a, {
                    subHeader: t,
                    linkTo: "/directory/following/live"
                }))
            }
            var o = a.map(function(e, t) {
                if (!e.stream || !e.id) return null;
                var n = Object(z.a)(e.login, e.displayName),
                    i = {
                        medium: k.PageviewMedium.Following,
                        content: k.PageviewContent.Live,
                        content_index: t
                    },
                    a = e.stream && e.stream.game ? Object(x.c)(e.stream.game.name) : "";
                return d.createElement(_._6, {
                    key: e.id,
                    margin: {
                        bottom: 2
                    }
                }, d.createElement(H.a, {
                    imageSrc: e.stream && e.stream.previewImageURL || m.a.defaultStreamPreviewURL,
                    imageAlt: e.stream && e.stream.title || "",
                    viewerCount: e.stream && e.stream.viewersCount || 0,
                    title: e.stream && e.stream.title || Object(m.d)("Untitled Broadcast", "LiveChannels"),
                    channelName: n,
                    gameImageSrc: e.stream && e.stream.game && e.stream.game.boxArtURL || m.a.defaultBoxArtURL,
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
            if (0 === a.length)
                for (var s = 0; s < 5; s++) o.push(d.createElement(te.VideoPreviewCardPlaceholder, {
                    key: "live-channels-placeholder-" + s
                }));
            return d.createElement("div", null, n, d.createElement(_._49, {
                gutterSize: _._51.Small,
                childWidth: _._50.Medium,
                placeholderItems: 20
            }, o, i))
        }
        var ie = function(e) {
                var t = {
                    assignments: {
                        fallback: function() {
                            return null
                        },
                        enabled: function() {
                            return X.a.wrap(function() {
                                return n.e(83).then(n.bind(null, "IwGL"))
                            }, "LatestVideosFromFollowedCarousel")(e)
                        }
                    },
                    loader: function() {
                        return d.createElement(_._8, null)
                    },
                    name: "TWILIGHT_FOLLOWING_INDEX_LATEST_VIDEOS_V2"
                };
                return d.createElement(J.a, l.__assign({}, t))
            },
            ae = n("LVbz"),
            re = function(e) {
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
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    m.o.setPageTitle(Object(m.d)("Following", "FollowingPage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.currentUser;
                    return this.props.data.error || !this.props.data.loading && !e ? d.createElement(u.a, {
                        message: Object(m.d)("Error loading data.", "FollowingPage")
                    }) : d.createElement(_._6, {
                        padding: 3
                    }, d.createElement(S, null), d.createElement(ne, {
                        key: "live-channels",
                        showSample: !0,
                        directoryWidth: this.state.directoryWidth,
                        users: this.props.data.loading ? null : e && e.followedLiveUsers.nodes || [],
                        followsCount: e ? e.follows.totalCount : 0
                    }), d.createElement(ie, {
                        tracking: {
                            content: k.PageviewContent.Following,
                            location: k.PageviewLocation.Directory,
                            medium: k.PageviewMedium.Following
                        }
                    }), e && e.followedHosts.nodes.length > 0 && d.createElement(B, {
                        key: "live-hosts",
                        showSample: !0,
                        directoryWidth: this.state.directoryWidth,
                        hosts: e ? e.followedHosts.nodes : [],
                        followsCount: e ? e.follows.totalCount : 0
                    }), e && d.createElement(G, {
                        key: "live-games",
                        showSample: !0,
                        directoryWidth: this.state.directoryWidth,
                        games: e ? e.followedGames.nodes : [],
                        onFollowChange: this.props.data.refetch
                    }), d.createElement(ee, {
                        key: "finish-watching-tower-experiments",
                        directoryWidth: this.state.directoryWidth
                    }), e && d.createElement(C, {
                        key: "live-communities",
                        showSample: !0,
                        communities: e ? e.followedCommunities.edges : [],
                        directoryWidth: this.state.directoryWidth
                    }), d.createElement(K.a, {
                        onResize: this.onResize
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = l.__decorate([Object(v.a)(ae, {
                    options: {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 30
                        }
                    }
                }), Object(p.d)("FollowingIndexPage", {
                    destination: f.a.DirectoryFollowingIndex
                }), Object(h.a)({
                    location: k.PageviewLocation.Directory,
                    properties: function() {
                        return {
                            content_type: k.PageviewDirectoryContentType.Mixed,
                            tab: k.PageviewFollowingTab.Overview
                        }
                    }
                })], t)
            }(d.Component),
            oe = n("LrP9");
        var se = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    m.o.setPageTitle(Object(m.d)("Channels You Follow", "FollowingLivePage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e, t = !1;
                    if (this.props.data.loading && !this.props.data.currentUser) e = d.createElement(_._6, {
                        display: _.P.Flex,
                        position: _._13.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, d.createElement(_._8, {
                        fillContent: !0
                    }));
                    else if (this.props.data.error) e = d.createElement(u.a, {
                        message: Object(m.d)("Error loading data.", "FollowingLivePage")
                    });
                    else {
                        var n = this.props.data.currentUser,
                            i = [];
                        n && n.followedLiveUsers.edges && (i = n.followedLiveUsers.edges.map(function(e) {
                            return e.node
                        }));
                        var a = this.props.data.currentUser ? this.props.data.currentUser.follows.totalCount : 0;
                        e = d.createElement(ne, {
                            users: i,
                            followsCount: a
                        }), t = !(!n || !n.followedLiveUsers.pageInfo.hasNextPage)
                    }
                    return d.createElement(_._6, {
                        padding: 3
                    }, d.createElement(S, {
                        activeCategory: k.SpadeFollowingCategory.Live
                    }), e, d.createElement(P.a, {
                        enabled: t,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 100
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = l.__decorate([Object(v.a)(oe, {
                    options: function() {
                        return {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                limit: 50
                            }
                        }
                    },
                    props: function(e) {
                        return l.__assign({}, e, {
                            loadMore: function() {
                                if (e.data.currentUser) {
                                    var t = e.data.currentUser.followedLiveUsers.edges;
                                    return e.data.fetchMore({
                                        query: oe,
                                        variables: {
                                            limit: 30,
                                            cursor: t[t.length - 1].cursor
                                        },
                                        updateQuery: function(e, t) {
                                            var n, i, a, r = t.fetchMoreResult;
                                            return r.currentUser && e.currentUser ? {
                                                currentUser: l.__assign({}, r.currentUser, {
                                                    followedLiveUsers: l.__assign({}, r.currentUser.followedLiveUsers, {
                                                        edges: (n = e.currentUser.followedLiveUsers.edges, i = r.currentUser.followedLiveUsers.edges, a = new Set(n.map(function(e) {
                                                            return e.node.id
                                                        })), n.concat(i.filter(function(e) {
                                                            return !a.has(e.node.id)
                                                        })))
                                                    })
                                                })
                                            } : r
                                        }
                                    })
                                }
                            }
                        })
                    }
                }), Object(p.d)("FollowingLivePage", {
                    destination: f.a.DirectoryFollowingLiveChannels
                }), Object(h.a)({
                    location: k.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: k.PageviewDirectoryContentType.Channels,
                            tab: k.PageviewFollowingTab.Channels,
                            num_live_channels: e.data.currentUser && e.data.currentUser.followedLiveUsers.edges.length || 0
                        }
                    }
                })], t)
            }(d.Component),
            le = function() {
                return n.e(86).then(n.bind(null, "oms2"))
            },
            de = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToChannelSurfing = function() {
                        var e = "tt_medium=" + t.props.trackingMedium,
                            n = "" === location.search ? "?" + e : location.search + "&" + e;
                        window.location.assign("/hi/surf" + n)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(_._29, {
                        "data-test-selector": "channel-surfing-upsell",
                        background: _.m.Alt2,
                        display: _.P.Flex,
                        flexDirection: _.R.Column,
                        alignItems: _.c.Center,
                        padding: {
                            y: 3
                        }
                    }, d.createElement(_._6, {
                        textAlign: _._39.Center,
                        margin: 1,
                        breakpointMedium: {
                            margin: {
                                x: 2,
                                y: 1
                            }
                        }
                    }, d.createElement(_._29, {
                        color: _.J.Base,
                        fontSize: _.T.Size4,
                        breakpointMedium: {
                            fontSize: _.T.Size3
                        },
                        breakpointExtraLarge: {
                            fontSize: _.T.Size2
                        }
                    }, Object(m.d)("Need some more channels to follow?", "ChannelSurfingUpsell")), d.createElement(_._29, {
                        color: _.J.Alt2,
                        margin: {
                            y: 1
                        },
                        fontSize: _.T.Size6,
                        display: _.P.Hide,
                        breakpointMedium: {
                            fontSize: _.T.Size5,
                            display: _.P.Block
                        },
                        breakpointExtraLarge: {
                            fontSize: _.T.Size4
                        }
                    }, Object(m.d)("We have crafted up a new way for you to seek and find new channels based on the games you follow.", "ChannelSurfingUpsell"))), d.createElement(_._6, null, d.createElement(_.u, {
                        "data-test-selector": "channel-surfing-upsell__button",
                        size: _.y.Large,
                        onClick: this.redirectToChannelSurfing
                    }, Object(m.d)("Discover new channels", "ChannelSurfingUpsell"))))
                }, t
            }(d.Component),
            ce = n("wx0k"),
            me = n("F8kA"),
            ue = n("/XPz"),
            pe = n("2qz3"),
            ge = (n("zH/G"), "for-you-community-streams-row__title"),
            ve = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderTitle = function() {
                        if (t.props.title) return d.createElement(_._6, {
                            className: "for-you-community-streams-row__title"
                        }, d.createElement(_.O, {
                            "data-test-selector": ge,
                            color: _.J.Alt2,
                            fontSize: _.T.Size5,
                            transform: _._42.Uppercase
                        }, d.createElement(me.a, {
                            to: Object(x.c)(t.props.name)
                        }, t.props.title)))
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.length ? d.createElement(_._6, {
                        "data-test-selector": "for-you-community-streams-row",
                        flexShrink: 0
                    }, d.createElement(_._6, {
                        alignItems: _.c.Center,
                        display: _.P.Flex,
                        flexWrap: _.S.NoWrap,
                        justifyContent: _._5.Between,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderTitle(), d.createElement(ue.a, {
                        gameName: this.props.name,
                        src: k.PageviewMedium.BrowseForYou
                    })), d.createElement(P.b, null, d.createElement(_._6, {
                        display: _.P.Flex
                    }, d.createElement(pe.a, {
                        data: this.props.data,
                        directoryType: this.props.type,
                        trackingMedium: k.PageviewMedium.BrowseForYou
                    })))) : null
                }, t = l.__decorate([Object(p.d)("ForYouCommunityStreamsRow")], t)
            }(d.Component),
            he = n("giFn"),
            fe = 7,
            ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getData = function() {
                        var e = t.rankedChannelStreamsInputPresent() && t.rankedChannelStreamsLoaded();
                        if (e && t.communityStreamsLoaded() && t.props.communityStreamsData.directory.streams && t.props.communityStreamsData.directory.streams.edges) {
                            var n = t.props.rankedChannelData.users.filter(function(e) {
                                return e && e.stream && e.stream.id && e.stream.broadcaster && e.stream.broadcaster.login
                            }).slice(0, fe).map(function(e) {
                                return e.stream
                            });
                            if (n.length === fe) return n;
                            var i = new Set(n.map(function(e) {
                                    return e.id
                                })),
                                a = t.props.communityStreamsData.directory.streams.edges.filter(function(e) {
                                    var t = e.node;
                                    return !i.has(t.id) && t.broadcaster && t.broadcaster.login
                                }).map(function(e) {
                                    return e.node
                                });
                            return n.concat(a.slice(0, fe - n.length))
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
                return l.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    (this.rankedChannelStreamsInputPresent() && this.rankedChannelStreamsLoaded() || !this.rankedChannelStreamsInputPresent() && !this.rankedChannelStreamsLoaded()) && this.communityStreamsLoaded() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return d.createElement(ve, {
                        name: this.props.name,
                        title: this.props.title,
                        type: this.props.type,
                        data: this.getData()
                    })
                }, t = l.__decorate([Object(v.a)(ce, {
                    name: "communityStreamsData",
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.name,
                                limit: fe,
                                type: e.type
                            }
                        }
                    }
                }), Object(v.a)(he, {
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
                }), Object(p.d)("ForYouCommunityStreamsRowContainer")], t)
            }(d.Component),
            ye = (n("4az8"), n("QjjF")),
            we = "for-you__empty",
            _e = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        rankedChannelData: {},
                        loadingRankedChannelData: !1
                    }, t.logger = m.o.logger.withCategory("for-you"), t.loadedChannelRankingsData = !1, t.renderPage = function() {
                        return t.userFollowedGamesDataLoaded(t.props) ? t.props.data.currentUser.followedGames && t.props.data.currentUser.followedGames.nodes && t.props.data.currentUser.followedGames.nodes.length ? d.createElement(_._6, null, t.renderFollowedCommunityStreams(), d.createElement(_._6, {
                            margin: {
                                top: .5
                            }
                        }, t.renderFooterCTA())) : t.renderEmptyFollowedState() : d.createElement(_._6, null, d.createElement(_._8, {
                            fillContent: !0
                        }))
                    }, t.userFollowedGamesDataLoaded = function(e) {
                        return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                    }, t.renderFollowedCommunityStreams = function() {
                        if (t.props.data.currentUser.followedGames && t.props.data.currentUser.followedGames.nodes && t.props.data.currentUser.followedGames.nodes.length) return t.props.data.currentUser.followedGames.nodes.filter(function(e) {
                            return null !== e
                        }).map(function(e) {
                            return d.createElement(_._6, {
                                key: e.id
                            }, d.createElement(ke, {
                                key: e.id,
                                title: Object(m.d)("BECAUSE YOU FOLLOW {name}", {
                                    name: e.name.toUpperCase()
                                }, "ForYouPage"),
                                name: e.name,
                                type: e.directoryType,
                                channelLogins: t.state.rankedChannelData[e.id]
                            }))
                        })
                    }, t.renderEmptyFollowedState = function() {
                        return d.createElement(_._29, {
                            className: "for-you__empty",
                            "data-test-selector": we,
                            background: _.m.Base,
                            display: _.P.Flex,
                            flexDirection: _.R.Column,
                            margin: {
                                bottom: 1
                            },
                            alignItems: _.c.Center
                        }, d.createElement(U, {
                            onContinue: t.refetchFollowedData
                        }))
                    }, t.redirectToFollowing = function() {
                        m.o.history.push("/directory/following" + location.search)
                    }, t.redirectToCommunitySelectionPage = function() {
                        window.location.assign("/hi" + location.search)
                    }, t.refetchFollowedData = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            return l.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.props.data.refetch()];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            })
                        })
                    }, t.loadChannelRankingsByGameData = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return l.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.loadedChannelRankingsData) return [3, 4];
                                        this.loadedChannelRankingsData = !0, this.setState({
                                            loadingRankedChannelData: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, le()];
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
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return l.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return m.o.setPageTitle(Object(m.d)("For You", "ForYouPage")), [4, m.o.experiments.getAssignment(w.j)];
                                case 1:
                                    return e = i.sent(), Object(w.p)(e) ? [3, 2] : (this.redirectToFollowing(), [3, 5]);
                                case 2:
                                    return [4, m.o.experiments.getAssignment(w.h)];
                                case 3:
                                    return t = i.sent(), [4, m.o.experiments.getAssignment(w.i)];
                                case 4:
                                    n = i.sent(), Object(w.n)(e, t) && this.loadChannelRankingsByGameData(), this.setState({
                                        inChannelSurfingExperiment: Object(w.o)(e, n)
                                    }), i.label = 5;
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.userFollowedGamesDataLoaded(e) && !Object(w.q)(new Date(e.data.currentUser.createdAt)) && this.redirectToFollowing()
                }, t.prototype.componentDidUpdate = function() {
                    this.userFollowedGamesDataLoaded(this.props) && !this.state.loadingRankedChannelData && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return d.createElement(P.b, null, d.createElement(_._6, {
                        className: "for-you-page",
                        padding: 3,
                        fullWidth: !0
                    }, d.createElement(S, {
                        activeCategory: k.SpadeFollowingCategory.ForYou
                    }), this.renderPage()))
                }, t.prototype.renderFooterCTA = function() {
                    var e = this.props.data.currentUser.followedGames && this.props.data.currentUser.followedGames.nodes ? this.props.data.currentUser.followedGames.nodes.length : 0;
                    return e >= 10 ? null : 0 !== e && this.state.inChannelSurfingExperiment ? e > 0 && this.state.inChannelSurfingExperiment ? d.createElement(de, {
                        trackingMedium: k.PageviewMedium.BrowseForYou
                    }) : void 0 : this.renderAddMoreGamesCTA()
                }, t.prototype.renderAddMoreGamesCTA = function() {
                    if (!this.props.data.currentUser.followedGames || !this.props.data.currentUser.followedGames.nodes || this.props.data.currentUser.followedGames.nodes.length < 10) return d.createElement(_._4, {
                        "data-test-selector": "for-you__add_more_games",
                        onClick: this.redirectToCommunitySelectionPage,
                        alpha: !0
                    }, d.createElement(_._29, {
                        alignItems: _.c.Center,
                        border: !0,
                        display: _.P.Flex,
                        justifyContent: _._5.Center,
                        padding: 2
                    }, d.createElement(_._6, {
                        alignItems: _.c.Center,
                        display: _.P.Flex,
                        margin: {
                            right: 1
                        }
                    }, d.createElement(_._19, {
                        asset: _._20.Plus,
                        type: _._21.Alt2
                    })), d.createElement(_.O, {
                        fontSize: _.T.Size5,
                        color: _.J.Alt2
                    }, Object(m.d)("Add More Games", "ForYouPage"))))
                }, t = l.__decorate([Object(p.d)("ForYouPage", {
                    destination: f.a.ForYou
                }), Object(v.a)(ye, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: 10
                        }
                    }
                }), Object(h.a)({
                    location: k.PageviewLocation.BrowseForYou
                })], t)
            }(d.Component),
            be = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? d.createElement(_._6, null, d.createElement(g.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), d.createElement(c.e, null, d.createElement(c.c, {
                        path: "/directory/following/foryou",
                        component: _e
                    }), d.createElement(c.c, {
                        path: "/directory/following/live",
                        component: se
                    }), d.createElement(c.c, {
                        path: "/directory/following/hosts",
                        component: Y
                    }), d.createElement(c.c, {
                        path: "/directory/following/games",
                        component: M
                    }), d.createElement(c.c, {
                        path: "/directory/following/communities",
                        component: O
                    }), d.createElement(c.c, {
                        path: "/",
                        component: re
                    }))) : (this.props.login(), d.createElement(u.a, {
                        message: Object(m.d)("You must be logged in to view this page", "FollowingRoot")
                    }))
                }, t = l.__decorate([Object(p.d)("FollowingPageRoot", {
                    autoReportInteractive: !0
                })], t)
            }(d.Component);
        var Se = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(o.f)(r.a.FollowingPage)
                }
            }, e)
        })(be);
        n.d(t, "FollowingRootPage", function() {
            return Se
        })
    },
    "LEV+": function(e, t) {},
    LVbz: function(e, t) {
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
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
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
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
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
                                                    value: "stream"
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
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
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
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewersCount"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
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
                                                            value: "type"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
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
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
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
                                                    value: "hosting"
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
                                                            value: "stream"
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
                                                                            value: "name"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
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
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewersCount"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
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
                                                                    value: "type"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
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
                                                                directives: []
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
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewersCount"
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
                                                            value: "broadcastersCount"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
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
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: []
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
    LgcN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "d", function() {
            return l
        });
        var i = n("TToO"),
            a = this,
            r = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(90).then(n.bind(null, "tk3B"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            o = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(89).then(n.bind(null, "e/M0"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            s = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(88).then(n.bind(null, "Dan5"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            l = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(87).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            }
    },
    LrP9: function(e, t) {
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
                                    value: "follows"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
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
                                                            value: "stream"
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
                                                                            value: "name"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
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
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewersCount"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
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
                                                                    value: "type"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
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
                                                                directives: []
                                                            }]
                                                        }
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
    MZUk: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("7vx8"),
            s = n("vH/s"),
            l = n("peXu"),
            d = n("CSlQ"),
            c = n("VDV3"),
            m = n("Odds"),
            u = n("NF3U"),
            p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error || !this.props.data.currentUser || !this.props.data.currentUser.recommendations || 0 === this.props.data.currentUser.recommendations.videos.edges.length) return null;
                    var e = a.createElement(m._6, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(m.O, {
                            type: m._43.H4,
                            color: m.J.Alt2,
                            fontSize: m.T.Size5,
                            transform: m._42.Uppercase
                        }, Object(r.d)("Based on your viewing history", "SuggestedVideos"))),
                        t = [];
                    if (this.props.data.currentUser.recommendations.videos && (t = this.props.data.currentUser.recommendations.videos.edges.map(function(e) {
                            return e.node
                        })), this.props.directoryWidth > 0) {
                        var n = Object(l.a)(this.props.directoryWidth, 240, 2);
                        t = t.slice(0, n)
                    }
                    return a.createElement("div", null, e, a.createElement(c.b, {
                        trackingMedium: s.PageviewMedium.Following,
                        trackingContent: s.PageviewContent.SuggestedVideos,
                        videoCardSize: m._50.Medium,
                        videos: t
                    }))
                }, t = i.__decorate([Object(o.a)(u, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: 30
                        }
                    }
                }), Object(d.d)("SuggestedVideos")], t)
            }(a.Component);
        n.d(t, "a", function() {
            return p
        })
    },
    NF3U: function(e, t, n) {
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
                                    value: "recommendations"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
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
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    PLRK: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = function(e, t) {
                return Object(r.d)("{viewerCount,number} viewers on {channel}", {
                    viewerCount: e,
                    channel: t
                }, "DirectoryGamePage")
            },
            s = Object(r.d)("Untitled Broadcast", "StreamThumbnail"),
            l = function(e) {
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
            return s
        }), n.d(t, !1, function() {
            return l
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                            value: "permissions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "banning"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "timingOut"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
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
            s = {
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
            l = function(e) {
                return e && s[e] || "en_US"
            },
            d = n("pqU3");
        t.a = function() {
            var e = this;
            return function(t) {
                clearTimeout(c), c = setTimeout(function() {
                    return i.__awaiter(e, void 0, void 0, function() {
                        var e, n, s, c, m, u;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = r.o.logger.withCategory("leagueoflegends-api"), t(Object(d.e)(!0)), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), n = r.o.intl.getLanguageCode(), s = l(n), c = o.a.getAPIURL("/api/lol/champions?" + a.stringify({
                                        locale: s,
                                        on_site: 1
                                    })).toString(), [4, o.a.get(c)];
                                case 2:
                                    return (m = i.sent()).body ? t(Object(d.f)(m.body)) : (e.warn("LoL champion API response body was empty."), t(Object(d.d)(!0))), [3, 4];
                                case 3:
                                    throw u = i.sent(), t(Object(d.d)(!0)), e.error(u, "Failed to load LoL champion data"), u;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, m)
            }
        };
        var c = 0,
            m = 350
    },
    QG7y: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "d", function() {
            return s
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "f", function() {
            return d
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "g", function() {
            return m
        }), t.i = function(e) {
            m.emit(d, e)
        }, t.h = function(e) {
            m.emit(c, e)
        };
        var i = n("BzvE"),
            a = (n.n(i), n("6sO2")),
            r = {
                directory: {
                    banner: "dfp-directory-banner",
                    rectangle: "dfp-directory-rectangle"
                },
                channel250: "google_companion_300x250",
                anonFront: {
                    rect: "Twitch_FPMedRect_holder",
                    banner: "Twitch_FPopaBanner_holder",
                    takeover: "Twitch_FPTakeoverSkinv2_holder",
                    bottom: "Twitch_FP970Bottom_holder",
                    sizzle: "sizzle_strip"
                },
                front: {
                    leaderboard: "hpto_logged_in_leaderboard",
                    rightTop: "hpto_logged_in_rcol_top",
                    rightBottom: "hpto_logged_in_rcol_bottom"
                }
            },
            o = {
                directory: {
                    banner: [
                        [970, 66],
                        [970, 250],
                        [728, 90]
                    ],
                    rectangle: [
                        [300, 250]
                    ]
                },
                channel250: [300, 250],
                anonFront: {
                    rect: [
                        [300, 250]
                    ],
                    banner: [
                        [970, 418],
                        [970, 67],
                        [970, 250],
                        [970, 150],
                        [980, 250]
                    ],
                    takeover: [
                        [1, 1]
                    ],
                    bottom: [
                        [970, 66],
                        [728, 90]
                    ],
                    sizzle: [
                        [980, 250]
                    ]
                },
                front: {
                    leaderboard: [
                        [970, 66],
                        [728, 90]
                    ],
                    rightTop: [
                        [300, 250]
                    ],
                    rightBottom: [
                        [300, 600]
                    ]
                }
            },
            s = {
                directory: "/" + a.a.dfpNetworkCode + "/twitch/directory",
                channel: "/" + a.a.dfpNetworkCode + "/twitch/channels",
                frontpage: "/" + a.a.dfpNetworkCode + "/twitch/homepage",
                sizzle: "/" + a.a.dfpNetworkCode + "/twitch/sizzle_strip"
            },
            l = {
                games: "games",
                channel: "channel",
                frontpage: "homepage"
            },
            d = "ads.slot-render-end",
            c = "ads.slot-ready",
            m = new i.EventEmitter
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
                                    value: "createdAt"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "directoryType"
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                                    value: "follow"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "followedAt"
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
            return a
        }), n.d(t, "g", function() {
            return s
        }), n.d(t, "f", function() {
            return l
        }), n.d(t, "d", function() {
            return d
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "c", function() {
            return m
        });
        var i, a, r = n("6sO2"),
            o = n("vH/s");
        ! function(e) {
            e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
        }(i || (i = {})),
        function(e) {
            e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
        }(a || (a = {}));
        var s = function(e) {
                var t = {
                    source: e.source,
                    action: a.Start
                };
                r.n.track(o.SpadeEventType.OnboardingEvent, t)
            },
            l = function() {
                var e = {
                    source: i.HomepageCTA,
                    action: a.Dismissed
                };
                r.n.track(o.SpadeEventType.OnboardingEvent, e)
            },
            d = function() {
                var e = {
                    source: i.HomepageCTA,
                    action: a.Completed
                };
                r.n.track(o.SpadeEventType.OnboardingEvent, e)
            },
            c = function(e, t) {
                var n = {
                    src: o.SpadeEventType.OnboardingEvent,
                    game: t
                };
                r.n.track(e, n)
            },
            m = function(e) {
                r.n.track(o.SpadeEventType.BrowseForYou, e)
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                        name: {
                                            kind: "Name",
                                            value: "followedAt"
                                        },
                                        arguments: [],
                                        directives: []
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
            r = n("GiK3"),
            o = n("6sO2"),
            s = n("6yQB"),
            l = n("+Znq"),
            d = n("6WAQ"),
            c = n("JpYe"),
            m = n("3yQz"),
            u = n("Odds"),
            p = (n("C2pI"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortChangeHandler = function(e) {
                        n.props.onVideoSortChange(e.target.value)
                    }, n.renderLanguageSelector = function() {
                        return n.props.hideLanguageSelector ? null : r.createElement(u._6, {
                            display: u.P.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(s.a, null))
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
                                    return [4, o.o.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
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
                        s = Object(o.d)("Highlights", "VideoFilter"),
                        p = Object(o.d)("Uploads", "VideoFilter"),
                        g = this.props.selectedSort && Object(c.f)(this.props.selectedSort) || m.a;
                    switch (this.props.broadcastType) {
                        case d.a.PastPremiere:
                            e = n;
                            break;
                        case d.a.Archive:
                            e = i;
                            break;
                        case d.a.Highlight:
                            e = s;
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
                    return this.state.isPremiereExperimentActive && (f = r.createElement(u._4, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.PastPremiere,
                        "data-a-target": "video-type-filter-past-premieres"
                    }, r.createElement(u._6, {
                        className: a(this.props.broadcastType === d.a.PastPremiere ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-past-premiere"
                    }, n))), r.createElement(u._6, {
                        margin: {
                            bottom: 2
                        },
                        display: u.P.Flex,
                        justifyContent: u._5.Between
                    }, r.createElement("div", null, this.renderLanguageSelector(), r.createElement(u._6, {
                        display: u.P.InlineFlex
                    }, r.createElement(l.a, {
                        ref: this.saveBalloonWrapperRef
                    }, r.createElement(u.u, {
                        type: u.A.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "video-type-filter-dropdown",
                        dropdown: !0
                    }, e), r.createElement(u.p, {
                        direction: u.q.Bottom,
                        "data-a-target": "video-type-filter-balloon",
                        offsetX: "0",
                        noTail: !0
                    }, r.createElement(u._6, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, r.createElement(u._4, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": "all",
                        "data-a-target": "video-type-filter-all"
                    }, r.createElement(u._6, {
                        className: a(this.props.broadcastType ? h : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-all"
                    }, t)), f, r.createElement(u._4, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Archive,
                        "data-a-target": "video-type-filter-past-broadcasts"
                    }, r.createElement(u._6, {
                        className: a(this.props.broadcastType === d.a.Archive ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-archive"
                    }, i)), r.createElement(u._4, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Highlight,
                        "data-a-target": "video-type-filter-highlights"
                    }, r.createElement(u._6, {
                        className: a(this.props.broadcastType === d.a.Highlight ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-highlight"
                    }, s)), r.createElement(u._4, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Upload,
                        "data-a-target": "video-type-filter-uploads"
                    }, r.createElement(u._6, {
                        className: a(this.props.broadcastType === d.a.Upload ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-upload"
                    }, p))))))), r.createElement("div", null, r.createElement(u._25, {
                        name: "sort",
                        onChange: this.sortChangeHandler,
                        value: g,
                        "data-a-target": "video-sort-select"
                    }, r.createElement("option", {
                        "data-test-selector": "sort-option-newest",
                        value: m.a,
                        "data-a-target": "video-sort-newest"
                    }, Object(o.d)("Newest", "VideoFilter")), r.createElement("option", {
                        "data-test-selector": "sort-option-popular",
                        value: m.b,
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
    WxKK: function(e, t, n) {
        "use strict";
        var i = n("7FW4");
        n.d(t, "a", function() {
            return i.a
        })
    },
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            a = (n.n(i), n("Odds")),
            r = function() {
                return i.createElement(a.B, null, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._12, null)), i.createElement(a.C, null, i.createElement(a._6, {
                    display: a.P.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a._6, {
                    display: a.P.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._12, {
                    width: 40,
                    height: 56
                })), i.createElement(a._6, {
                    display: a.P.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a.O, null, i.createElement(a._12, {
                    width: 150
                })), i.createElement(a.O, {
                    fontSize: a.T.Size7
                }, i.createElement(a._12, {
                    width: 100
                }))))))
            }
    },
    YUUt: function(e, t, n) {
        e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc37349dfbde7c720.png"
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
            o = (n.n(r), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("6sO2"),
            d = n("SZoP"),
            c = n("mi6k"),
            m = n("CSlQ"),
            u = n("Odds"),
            p = n("a0ve"),
            g = (n.n(p), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.onClickHandler = function() {
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
                }, t.prototype.render = function() {
                    var e = null,
                        t = this.getVideoPreviousWatchPercentage();
                    return null !== t && (e = o.createElement(u._6, {
                        position: u._13.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, o.createElement(u._16, {
                        size: u._17.Small,
                        value: t,
                        mask: !0
                    }))), o.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(u._56)(this.props)), o.createElement(u.B, null, o.createElement(u._6, {
                        fullWidth: !0
                    }, o.createElement(u.j, {
                        overflow: !0
                    }, o.createElement("div", null, o.createElement(u._29, {
                        display: u.P.InlineFlex,
                        position: u._13.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: u._55.Default,
                        fontSize: u.T.Size6,
                        background: u.m.Overlay,
                        color: u.J.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(u._28, {
                        "data-test-selector": "video-view-count",
                        icon: u._20.GlyphViews,
                        label: Object(l.d)("views", "VideoPreviewCard"),
                        value: Object(l.f)(this.props.video.viewCount)
                    })), o.createElement(u._29, {
                        display: u.P.InlineFlex,
                        position: u._13.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: u._55.Default,
                        fontSize: u.T.Size6,
                        background: u.m.Overlay,
                        color: u.J.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(u._28, {
                        "data-test-selector": "video-length",
                        icon: u._20.GlyphLength,
                        label: Object(l.d)("length", "VideoPreviewCard"),
                        value: Object(c.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), o.createElement(u.C, null, o.createElement(u._6, {
                        display: u.P.Flex,
                        flexDirection: u.R.Row,
                        flexWrap: u.S.NoWrap,
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
                    return o.createElement(u.j, {
                        overflow: !0
                    }, o.createElement(s.a, {
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
                    }, o.createElement(u._0, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(u.j, {
                        ratio: u.k.Aspect16x9
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
                    return o.createElement(u._6, {
                        "data-test-selector": "game-box-art",
                        display: u.P.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(u._0, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(u._46, {
                        display: u.P.Block,
                        direction: u._48.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(u.D, {
                        aspect: u.k.BoxArt,
                        alt: e.name,
                        src: e.boxArtURL || l.a.defaultBoxArtURL
                    })))))))
                }, t.prototype.videoMetaData = function() {
                    var e = Object(l.c)(new Date(this.props.video.publishedAt), "medium"),
                        t = null;
                    if (this.props.video.owner) {
                        var n = {
                            pathname: "/" + this.props.video.owner.login,
                            state: this.getLinkState()
                        };
                        t = o.createElement(s.a, {
                            to: n,
                            className: "video-preview-card__owner-display-name",
                            "data-a-target": "video-preview-card-channel-link",
                            "data-test-selector": "video-owner",
                            title: Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return o.createElement(u._6, {
                        display: u.P.Flex,
                        flexDirection: u.R.Column,
                        overflow: u._9.Hidden
                    }, o.createElement(u._6, {
                        "data-test-selector": "video-title",
                        overflow: u._9.Hidden,
                        position: u._13.Relative
                    }, o.createElement(u.O, {
                        color: u.J.Base,
                        fontSize: u.T.Size5,
                        lineHeight: u._7.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(u._6, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(u.O, {
                        type: u._43.Span,
                        color: u.J.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(u._0, {
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
            v = Object(m.d)("VideoPreviewCard")(g)
    },
    "b+Vy": function(e, t) {
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
                                    value: "follows"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
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
                                                    value: "hosting"
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
                                                            value: "stream"
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
                                                                            value: "name"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
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
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewersCount"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
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
                                                                    value: "type"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
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
    c8Oh: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.userPreferences.languagePreferences
        };
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("V9YC"),
            o = n("iJpA");
        a.o.store.registerReducer("userPreferences", function(e, t) {
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
    ehrk: function(e, t) {},
    eqtY: function(e, t) {
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
                    }
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewersCount"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
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
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
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
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "type"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
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
                end: 364
            }
        };
        n.loc.source = {
            body: "query CommunityStreams_Streams($name: String! $type: DirectoryType! $limit: Int) {\ndirectory(name: $name type: $type) {\nid\nname\nstreams(first: $limit) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 285 height: 380)\nname\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    giFn: function(e, t) {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                    value: "stream"
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
                                            value: "title"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "viewersCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
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
                                        directives: []
                                    }, {
                                        kind: "Field",
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
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
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
    hOej: function(e, t) {
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
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewersCount"
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
                                                            value: "broadcastersCount"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
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
    iJpA: function(e, t, n) {
        "use strict";
        t.c = function(e, t) {
            var n = this;
            return function(r) {
                return i.__awaiter(n, void 0, void 0, function() {
                    var n, d;
                    return i.__generator(this, function(i) {
                        return n = new Set(l()), t ? n.add(e) : n.delete(e), d = Array.from(n), a.l.set(s, d), r(Object(o.b)(d)), [2]
                    })
                })
            }
        }, t.a = function() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.l.set(s, []), t(Object(o.b)([])), [2]
                    })
                })
            }
        }, t.b = l;
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("D9fv"),
            o = n("V9YC"),
            s = "languageDirectoryFilters";

        function l() {
            return a.l.get(s, []).filter(function(e) {
                return r.a.has(e)
            })
        }
    },
    jkA6: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("v5ho"),
            a = function(e) {
                return e === i.a.Communities ? "COMMUNITY" : "GAME"
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                name: {
                                    kind: "Name",
                                    value: "error"
                                },
                                arguments: [],
                                directives: []
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
            void 0 === n && (n = 1);
            if (!t || !e) return -1;
            return Math.floor(e / t) * n
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "error"
                                },
                                arguments: [],
                                directives: []
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
                                    value: "createdAt"
                                },
                                arguments: [],
                                directives: []
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
                        name: {
                            kind: "Name",
                            value: "animatedPreviewURL"
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
                                directives: []
                            }, {
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
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
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
                            value: "lengthSeconds"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
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
                            }]
                        }
                    }, {
                        kind: "Field",
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
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "publishedAt"
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
                                    value: "viewingHistory"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "position"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
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
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: []
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                    value: "name"
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
                                            value: "follow"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "followedAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
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
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
            }(i || (i = {}))
    },
    vQzq: function(e, t) {},
    wx0k: function(e, t) {
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
                    }
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewersCount"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
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
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
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
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
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
    "x/hU": function(e, t) {
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
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
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
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                                    value: "follow"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "followedAt"
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                                    value: "follow"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "followedAt"
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
    },
    "zH/G": function(e, t) {}
});
//# sourceMappingURL=pages.following-549e6082e4185a608dc887e3ed4cd14b.js.map