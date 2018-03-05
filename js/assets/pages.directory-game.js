webpackJsonp([44], {
    "+GT7": function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2"),
            l = n("IOwa"),
            d = n("RH2O"),
            c = n("2KeS"),
            u = n("PPNL"),
            m = n("HW6M"),
            p = n("YUUt"),
            h = n.n(p),
            g = n("/SNv"),
            v = n.n(g),
            f = n("Vr3l"),
            y = n.n(f);
        ! function(e) {
            e[e.CounterStrike = 0] = "CounterStrike", e[e.Hearthstone = 1] = "Hearthstone", e[e.LeagueOfLegends = 2] = "LeagueOfLegends", e[e.Overwatch = 3] = "Overwatch"
        }(i || (i = {}));
        var k = n("LgcN"),
            b = n("Odds"),
            _ = (n("AHWf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = s.n.logger.withCategory("metadata-icon"), t.didUnmount = !1, t.loadData = function() {
                        if (!t.state.isLoading && !t.state.isError && t.props.streamMetadata && !t.state.content) {
                            var e = t.props.streamMetadata.counterStrikeGlobalOffensive && t.props.streamMetadata.counterStrikeGlobalOffensive.skill,
                                n = t.props.streamMetadata.hearthstone && t.props.streamMetadata.hearthstone.broadcasterHeroClass,
                                a = t.props.streamMetadata.leagueOfLegends && t.props.streamMetadata.leagueOfLegends.championID,
                                r = t.props.streamMetadata.overwatch && t.props.streamMetadata.overwatch.broadcasterCharacter;
                            e ? (t.setState({
                                game: i.CounterStrike,
                                gameSprite: h.a,
                                item: String(e),
                                isLoading: !0
                            }), t.getCounterStrikeData(e)) : n ? (t.setState({
                                game: i.Hearthstone,
                                gameSprite: v.a,
                                item: n,
                                isLoading: !0
                            }), t.getHearthstoneData()) : a ? (t.setState({
                                game: i.LeagueOfLegends,
                                item: String(a)
                            }), t.getLeagueData()) : r && (t.setState({
                                game: i.Overwatch,
                                gameSprite: y.a,
                                item: r,
                                isLoading: !0
                            }), t.getOverwatchData())
                        }
                    }, t.renderIcon = function(e, n, a, o, s, l) {
                        if (!a) return null;
                        var d = m("metadata-icon", {
                                "metadata-icon--csgo-skill": t.state.game === i.CounterStrike
                            }),
                            c = 30;
                        return t.state.game === i.CounterStrike && (c = 50), r.createElement(b._2, {
                            display: b.N.Flex,
                            flexDirection: b.P.Column,
                            alignItems: b.c.Center,
                            justifyContent: b._1.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(b._43, {
                            direction: b._45.Left,
                            label: e
                        }, r.createElement(b._2, {
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
                                        return a.trys.push([0, 2, , 3]), [4, Object(k.a)()];
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
                                        return i.trys.push([0, 2, , 3]), [4, Object(k.b)()];
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
                            var e, t, n, i, r, o, s, l, d, c, u, m, p;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, Object(k.d)()];
                                    case 1:
                                        if (e = a.sent(), this.didUnmount) return [2];
                                        for (t = !1, n = void 0, i = 0, r = e; i < r.length && (n = r[i], !t); i++)
                                            for (o in n)
                                                if (n.hasOwnProperty(o))
                                                    for (s = n[o], l = 0, d = s; l < d.length; l++)
                                                        if ((c = d[l]).character === this.state.item) {
                                                            (p = {})[c.character] = c, u = p, this.setState({
                                                                content: u,
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
            }(r.Component));
        var S = Object(d.b)(function(e) {
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
                    onLoadLeagueOfLegendsChampions: u.a
                }, e)
            })(_),
            N = (n("LEV+"), function(e) {
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
                                    return [4, s.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return "yes" === e.sent() && s.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = r.createElement(b._2, {
                        display: b.N.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, r.createElement(b._6, {
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
                    }, Object(b._53)(this.props)), r.createElement(b.A, {
                        key: this.props.title
                    }, r.createElement(b._2, {
                        fullWidth: !0
                    }, r.createElement(b.j, {
                        overflow: !0
                    }, r.createElement("div", null, r.createElement(o.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, this.props.children ? this.props.children : r.createElement(b.C, {
                        alt: this.props.imageAlt,
                        src: this.props.imageSrc,
                        aspect: b.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), r.createElement(b.B, null, r.createElement(b._2, {
                        display: b.N.Flex,
                        flexWrap: b.Q.NoWrap
                    }, r.createElement(b._2, {
                        flexGrow: 1,
                        ellipsis: !0
                    }, r.createElement(o.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, r.createElement(b.W, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(b._35, {
                        type: b._40.H3,
                        fontSize: b.R.Size5,
                        lineHeight: b._3.Body,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), r.createElement(b._2, {
                        className: "live-channel-card__meta",
                        display: b.N.Flex,
                        flexWrap: b.Q.NoWrap
                    }, e, r.createElement(b._35, {
                        type: b._40.Span,
                        ellipsis: !0
                    }, t))), r.createElement(b._2, {
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
                    }, r.createElement(b._25, {
                        className: "live-channel-card__boxart",
                        position: b._9.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(b._43, {
                        display: b.N.Block,
                        direction: b._45.Bottom,
                        label: t
                    }, r.createElement(b.C, {
                        src: n,
                        alt: t,
                        aspect: b.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(b._2, {
                        position: b._9.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(l.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? r.createElement(S, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(r.Component)),
            E = N;
        n.d(t, !1, function() {
            return N
        }), n.d(t, "a", function() {
            return E
        })
    },
    "+lUI": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "fuelGame"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Game"
                    }
                },
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
                            value: "product"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "fuelProduct"
                                },
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
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product.gql"\nfragment fuelGame on Game {\nid\nname\nproduct {\n...fuelProduct\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("wn+H").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    "/+aa": function(e, t) {},
    "/+to": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            s = n("Us7i"),
            l = n("QG7y"),
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = o.i.withCategory("ad-slot"), n.createSlot = function(e) {
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
                                        return n.trys.push([1, 3, , 4]), [4, s.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = n.sent(), Object(l.h)(t.getSlotElementId()), this.setState({
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
                            if (n.props.slotID === l.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            var i;
                            if (n.props.slotID === l.b.directory.banner) return void((i = n.slotRef.querySelector(d)) && 1 !== i.clientWidth && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === l.b.directory.rectangle) return void((i = n.slotRef.querySelector(c)) && 1 !== i.clientWidth && n.setState({
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
                    l.g.addListener(l.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet && !this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), l.g.removeListener(l.f, this.onSlotRenderEnd), this.state.slot && s.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = a.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), r.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(r.Component);
        var m = Object(i.b)(function(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        })(u);
        n.d(t, "a", function() {
            return m
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
            u = n("6sO2"),
            m = n("7vx8"),
            p = n("oIkB"),
            h = n("vH/s"),
            g = n("Odds"),
            v = n("z4nH"),
            f = n("rG8a"),
            y = n("U9Fb"),
            k = function(e) {
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
                                        return n.sent(), this.track(h.SpadeEventType.GameFollow), [2]
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
                                        return n.sent(), this.track(h.SpadeEventType.GameUnfollow), [2]
                                }
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = Object(u.d)("Follow", "FollowGameButton");
                    if (!this.props.isLoggedIn) return d.createElement(g.u, {
                        icon: g._16.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
                        onClick: this.props.showLoginModal
                    }, e);
                    if (this.isLoading) return d.createElement(g._8, {
                        width: 70,
                        height: 30
                    });
                    if (this.isFollowing) {
                        var t = Object(u.d)("Unfollow", "FollowGameButton");
                        return d.createElement(g.v, {
                            ariaLabel: t,
                            "data-test-selector": "follow-game-button-component",
                            "data-a-target": "game-directory-unfollow-button",
                            icon: g._16.Heart,
                            onClick: this.unfollow,
                            statusAlertIcon: g._16.Unheart
                        })
                    }
                    return d.createElement(g.u, {
                        icon: g._16.Heart,
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
                    u.n.tracking.track(e, {
                        src: this.props.src,
                        kind: e === h.SpadeEventType.GameFollow ? "follow" : "unfollow",
                        name: this.props.gameName
                    })
                }, t
            }(d.Component),
            b = Object(c.compose)(Object(m.a)(f, {
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
            }), Object(m.a)(v, {
                name: "followGame"
            }), Object(m.a)(y, {
                name: "unfollowGame"
            }))(k);
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
        })(b);
        n.d(t, "a", function() {
            return _
        })
    },
    "0zzo": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityTosBan_TosBanCommunity"
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
                                value: "TOSBanCommunityInput"
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
                            value: "tosBanCommunity"
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
                                    }]
                                }
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
            body: "mutation CommunityTosBan_TosBanCommunity($input: TOSBanCommunityInput!) {\ntosBanCommunity(input: $input) {\ncommunity {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "1OO3": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("7vx8"),
            r = 60,
            o = 60 * r,
            s = 24 * o,
            l = 7 * s,
            d = 4 * l;
        var c, u = n("MApH");
        n.d(t, "a", function() {
                return c
            }), t.b = function(e) {
                var t = this;
                return Object(a.a)(u, {
                    props: function(n) {
                        return {
                            banUserMutation: function(a, c) {
                                return void 0 === c && (c = null), i.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: a,
                                                            expiresIn: c && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > d) {
                                                                    var i = Math.floor(t / d);
                                                                    t -= i * d, n += i + "mo"
                                                                }
                                                                if (t > l) {
                                                                    var a = Math.floor(t / l);
                                                                    t -= a * l, n += a + "w"
                                                                }
                                                                if (t > s) {
                                                                    var c = Math.floor(t / s);
                                                                    t -= c * s, n += c + "d"
                                                                }
                                                                if (t > o) {
                                                                    var u = Math.floor(t / o);
                                                                    t -= u * o, n += u + "h"
                                                                }
                                                                if (t > r) {
                                                                    var m = Math.floor(t / r);
                                                                    t -= m * r, n += m + "m"
                                                                }
                                                                return t > 0 && (n += t + "s"), n
                                                            }(c)
                                                        }
                                                    }
                                                })];
                                            case 2:
                                                return [2, i.sent().data];
                                            case 3:
                                                throw i.sent(), new Error("Unable to ban user");
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                throw new Error("Ban user mutation is not ready");
                                            case 6:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            },
            function(e) {
                e.Forbidden = "FORBIDDEN", e.TargetNotFound = "TARGET_NOT_FOUND", e.TargetIsSelf = "TARGET_IS_SELF", e.TargetIsAnonymous = "TARGET_IS_ANONYMOUS", e.TargetIsMod = "TARGET_IS_MOD", e.TargetIsBroadcaster = "TARGET_IS_BROADCASTER", e.TargetIsStaff = "TARGET_IS_STAFF", e.TargetIsAdmin = "TARGET_IS_ADMIN", e.TargetIsGlobalMod = "TARGET_IS_GLOBAL_MOD", e.TargetIsAlreadyBanned = "TARGET_ALREADY_BANNED", e.DurationInvalid = "DURATION_INVALID"
            }(c || (c = {}))
    },
    "2hJ3": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
            var n = !0;
            try {
                n = document.execCommand("copy")
            } catch (e) {
                n = !1
            }
            return document.body.removeChild(t), n
        }
    },
    "2nSg": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityPage_EditCommunity"
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
                                value: "EditCommunityInput"
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
                            value: "editCommunity"
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
                                            value: "description"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "rules"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "summary"
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
                end: 142
            }
        };
        n.loc.source = {
            body: "mutation CommunityPage_EditCommunity($input: EditCommunityInput!) {\neditCommunity(input: $input) {\ncommunity {\ndescription\nrules\nsummary\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "4Tv+": function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, o, s) {
            var l = (n = n || t && t.lastBroadcast && t.lastBroadcast.game) && n.product;
            if (!n || !l) return;
            Object(r.d)({
                user: t,
                game: n,
                product: l,
                info: e,
                location: o
            });
            var d = "";
            t && t.settings.isCommerceRevShareEnabled && (d = "&br_id=" + t.id);
            ! function(e, t) {
                var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                if (!n || Object(i.a)()) return;
                n.focus(), Object(a.a)(n, function(e) {
                    t(e)
                })
            }(e.purchaseURL + d, s)
        };
        var i = n("Ouuk"),
            a = n("jF7o"),
            r = n("hNWd")
    },
    "4mYF": function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            s = n("mi6k"),
            l = n("CSlQ"),
            d = n("Odds"),
            c = (n("kuCN"), "embed-overlay");
        ! function(e) {
            e[e.Clip = 0] = "Clip", e[e.Video = 1] = "Video", e[e.Stream = 2] = "Stream", e[e.VideoOEmbed = 3] = "VideoOEmbed"
        }(i || (i = {}));
        var u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showOverlay: !0
                    }, t.getOverlayComponent = function() {
                        var e = t.props,
                            n = e.createdAt,
                            a = e.lengthSeconds,
                            l = e.thumbnailURL,
                            u = e.type,
                            m = e.viewCount,
                            p = a && a > 0 ? Object(s.a)(a) : "";
                        return r.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": c
                        }, r.createElement(d.j, {
                            ratio: d.k.Aspect16x9
                        }, r.createElement(d._2, null, r.createElement(d.W, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: d._9.Absolute
                        }, r.createElement("img", {
                            src: l
                        })), r.createElement(d._2, {
                            className: "embed-card__overlay",
                            position: d._9.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(d._2, {
                            className: "embed-card__play",
                            display: d.N.Flex,
                            justifyContent: d._1.Center,
                            position: d._9.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(d._15, {
                            asset: d._16.Play,
                            width: 50,
                            height: 50
                        })), r.createElement(d._2, {
                            position: d._9.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && r.createElement(d._35, null, Object(o.c)(new Date(n), "medium")), r.createElement(d._2, null, u === i.Stream && r.createElement(d._2, {
                            display: d.N.Inline,
                            margin: {
                                right: .5
                            }
                        }, r.createElement(d.E, {
                            status: d.G.Live
                        })), m && r.createElement("span", null, t.getFormattedViewCount(m, u)))), r.createElement(d._2, {
                            position: d._9.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, p && r.createElement(d._2, null, r.createElement(d._35, null, p)))), r.createElement(d._25, {
                            position: d._9.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: d.R.Size5
                        }, u === i.Stream && r.createElement(d._6, {
                            label: Object(o.d)("Live", "EmbedOverlayPill"),
                            type: d._7.Live
                        }), u === i.Video && r.createElement(d._6, {
                            label: Object(o.d)("Video", "EmbedOverlayPill"),
                            type: d._7.Overlay
                        }), u === i.Clip && r.createElement(d._6, {
                            label: Object(o.d)("Clip", "EmbedOverlayPill"),
                            type: d._7.Overlay
                        })))))
                    }, t.handleClick = function(e) {
                        e.preventDefault(), t.setState({
                            showOverlay: !1
                        }), t.props.onClick && t.props.onClick()
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.state.showOverlay ? this.getOverlayComponent() : r.createElement(d.j, {
                        ratio: d.k.Aspect16x9
                    }, this.props.children)
                }, t.prototype.getFormattedViewCount = function(e, t) {
                    switch (t) {
                        case i.Stream:
                            return Object(o.d)("{viewCount,number} viewers", {
                                viewCount: e
                            }, "OverlayViewCount");
                        case i.Clip:
                        case i.Video:
                            return Object(o.d)("{viewCount,number} views", {
                                viewCount: e
                            }, "OverlayViewCount");
                        default:
                            return ""
                    }
                }, t
            }(r.Component),
            m = Object(l.d)("EmbedOverlay")(u);
        n.d(t, !1, function() {
            return c
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return m
        })
    },
    "5bwi": function(e, t, n) {
        "use strict";
        var i, a = n("GiK3"),
            r = n("6sO2"),
            o = n("6yQB"),
            s = n("CSlQ"),
            l = n("RH2O"),
            d = n("2KeS"),
            c = n("V5M+"),
            u = n("TToO"),
            m = n("J4ib"),
            p = n("F8kA"),
            h = n("NY9D"),
            g = n("HW6M"),
            v = n("+8VM"),
            f = n("sikP"),
            y = n("oSFp"),
            k = n("mw/a"),
            b = n("6BvN"),
            _ = n("rCmJ"),
            S = n("Odds"),
            N = (n("Jg0G"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectOnFocus = function(e) {
                        e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(S._2, u.__assign({
                        position: S._9.Relative,
                        className: "selectable-input-wrapper"
                    }, Object(S._53)(this.props)), a.createElement(S.Y, {
                        type: S.Z.Text,
                        value: this.props.text,
                        readOnly: !0,
                        onFocus: this.selectOnFocus,
                        icon: this.props.iconAsset,
                        id: this.props.id
                    }), this.props.children)
                }, t = u.__decorate([Object(s.d)("SelectableInput")], t)
            }(a.Component)),
            E = n("8Wuk"),
            C = n("2hJ3"),
            w = n("sEID"),
            O = n("jetF"),
            D = n("7vx8");
        ! function(e) {
            e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
        }(i || (i = {}));
        var T = n("6fIs"),
            F = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderMenuItem = function(e) {
                        var t = n.menuData.get(e);
                        return e && t ? a.createElement(S._0, {
                            key: t.display,
                            onClick: t.destinationHandler,
                            "data-a-target": "clip-moderation-button-" + t.display
                        }, a.createElement(S._2, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, t.display)) : null
                    }, n.menuData = new Map([
                        [i.Report, {
                            display: Object(m.d)("Report", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.Report)
                            }
                        }],
                        [i.Delete, {
                            display: Object(m.d)("Delete", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.Delete)
                            }
                        }],
                        [i.DeleteAll, {
                            display: Object(m.d)("Delete All Clips from Video", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.DeleteAll)
                            }
                        }],
                        [i.Ban, {
                            display: Object(m.d)("Ban User", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.Ban)
                            }
                        }],
                        [i.Timeout, {
                            display: Object(m.d)("Timeout User (24 hr)", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.Timeout)
                            }
                        }]
                    ]), n
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = this.props.clip;
                    if (!e || !e.currentUser) return null;
                    var n = e.currentUser.isStaff || e.currentUser.isSiteAdmin,
                        r = !!t.curator && e.currentUser.id === t.curator.id,
                        o = !!t.broadcaster && e.currentUser.id === t.broadcaster.id,
                        s = r || o || n,
                        l = o || n,
                        d = [i.Report];
                    return s && d.push(i.Delete), l && (d.push(i.DeleteAll), t.curator && t.broadcaster && (d.push(i.Ban), d.push(i.Timeout))), a.createElement(S._2, {
                        className: "moderation-menu"
                    }, a.createElement(O.a, null, a.createElement(S.u, {
                        type: S.z.Hollow,
                        icon: S._16.More,
                        ariaLabel: Object(m.d)("More Options", "ModerationMenu"),
                        "data-a-target": "moderation-menu-button"
                    }), a.createElement(S.p, {
                        direction: S.q.TopRight
                    }, a.createElement(S._2, {
                        padding: {
                            y: .5
                        }
                    }, this.moderationMenuRender(d)))))
                }, t.prototype.moderationMenuRender = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        return t.renderMenuItem(e)
                    })
                }, t = u.__decorate([Object(D.a)(T), Object(s.d)("ModerationMenu")], t)
            }(a.Component),
            I = n("WNmM"),
            L = (n("MjlB"), 2e3),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingBalloon: !1
                    }, t.timeoutID = null, t.copyClipURL = function() {
                        var e;
                        try {
                            e = Object(C.a)(t.props.clip.url)
                        } catch (e) {
                            return void r.i.warn("Failed to copy", e)
                        }
                        e && (t.setState({
                            isShowingBalloon: !0
                        }), t.timeoutID = setTimeout(function() {
                            t.setState({
                                isShowingBalloon: !1
                            })
                        }, L), Object(I.d)(t.props.clip, t.props.pageType)(E.b.CopyInput))
                    }, t.dismissBalloon = function() {
                        t.setState({
                            isShowingBalloon: !1
                        }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = this.props.clip.broadcaster && a.createElement(p.a, {
                        to: "/" + this.props.clip.broadcaster.login,
                        onClick: this.props.closeModal,
                        "data-a-target": "clip-modal-broadcaster-link"
                    }, this.props.clip.broadcaster.login);
                    return e = this.props.clip.game && t ? Object(r.d)("{broadcaster} playing {game}", {
                        broadcaster: t,
                        game: a.createElement(p.a, {
                            to: "" + Object(h.c)(this.props.clip.game.name),
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-game-link"
                        }, this.props.clip.game.name)
                    }, "ClipsViewModalContent") : t, a.createElement(S._25, {
                        className: "clips-view-modal-content",
                        background: S.m.Base
                    }, a.createElement(S._2, {
                        padding: {
                            bottom: 2
                        }
                    }, a.createElement(S.j, {
                        ratio: S.k.Aspect16x9
                    }, a.createElement("iframe", {
                        src: this.props.clip.embedURL,
                        width: "100%",
                        height: "100%",
                        allowFullScreen: !0
                    }))), a.createElement(S._2, {
                        padding: {
                            x: 2,
                            bottom: 2
                        }
                    }, a.createElement(S._2, {
                        display: S.N.Flex,
                        flexWrap: S.Q.NoWrap
                    }, a.createElement(S._2, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(_.a, {
                        onClickOut: this.dismissBalloon
                    }, a.createElement(N, {
                        text: this.props.clip.url,
                        icon: !0,
                        iconAsset: S._16.Link,
                        onSelection: this.copyClipURL,
                        "data-a-target": "clip-share-input"
                    }, a.createElement(S.p, {
                        show: this.state.isShowingBalloon,
                        direction: S.q.TopRight
                    }, a.createElement(S._0, {
                        onClick: this.dismissBalloon
                    }, a.createElement(S._2, {
                        padding: 1
                    }, a.createElement(S._35, {
                        bold: !0
                    }, Object(r.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), a.createElement(w.a, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    }), a.createElement(F, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState
                    }))), a.createElement(S._2, {
                        padding: {
                            x: 2,
                            bottom: 2
                        },
                        display: S.N.Flex,
                        flexWrap: S.Q.NoWrap,
                        justifyContent: S._1.Between,
                        fullWidth: !0,
                        overflow: S._5.Hidden
                    }, a.createElement(S._2, {
                        flexGrow: 1,
                        ellipsis: !0
                    }, a.createElement(S.W, {
                        ellipsis: !0
                    }, a.createElement(S._25, {
                        display: S.N.Flex,
                        fontSize: S.R.Size5
                    }, a.createElement(S._2, {
                        ellipsis: !0
                    }, this.props.clip.title), a.createElement(S._2, {
                        flexShrink: 0
                    }, a.createElement(S._35, {
                        type: S._40.Span,
                        color: S.I.Alt2
                    }, " • ", Object(r.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsViewModalContent"))))), a.createElement(S.W, {
                        ellipsis: !0
                    }, a.createElement(S._25, {
                        color: S.I.Alt2
                    }, e, e && !!this.props.clip.curator && a.createElement("span", null, " • "), this.props.clip.curator && Object(r.d)("Clipped by {curator}", {
                        curator: a.createElement(p.a, {
                            to: "/" + this.props.clip.curator.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-curator-link"
                        }, this.props.clip.curator.login)
                    }, "ClipsViewModalContent")))), a.createElement(S._25, {
                        display: S.N.Flex,
                        padding: {
                            bottom: 2,
                            left: 2
                        },
                        fontSize: S.R.Size5,
                        color: S.I.Alt2,
                        flexShrink: 0
                    }, a.createElement(S._2, {
                        margin: {
                            right: .5
                        },
                        alignItems: S.c.Center,
                        display: S.N.Flex
                    }, a.createElement(S._15, {
                        asset: S._16.GlyphViews
                    })), Object(r.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsViewModalContent"))))
                }, t = u.__decorate([Object(s.d)("ClipsViewModalContent")], t)
            }(a.Component),
            R = (n("GOrw"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onKeyDown = function(e) {
                        var n = e.charCode || e.keyCode;
                        n === b.a.Left ? t.updateClipBackward() : n === b.a.Right && t.updateClipForward()
                    }, t.updateClipForward = function() {
                        t.updateClipIndex(t.props.clipIndex + 1)
                    }, t.updateClipBackward = function() {
                        t.updateClipIndex(t.props.clipIndex - 1)
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.setUpArrowListeners()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.clipIndex && this.props.clipIndex > 0 && (e = a.createElement(S._2, {
                        position: S._9.Absolute,
                        display: S.N.Flex,
                        alignItems: S.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--left"
                    }, a.createElement(S.v, {
                        ariaLabel: Object(r.d)("Previous clip", "ClipsViewModalNavigation"),
                        type: S.w.Primary,
                        icon: S._16.AngleLeft,
                        onClick: this.updateClipBackward,
                        "data-test-selector": "clips-view-modal-navigation-back"
                    }))), a.createElement(S._2, {
                        className: "clips-view-modal-navigation"
                    }, e, a.createElement(A, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState,
                        pageType: this.props.pageType,
                        closeModal: this.props.closeModal
                    }), a.createElement(S._2, {
                        position: S._9.Absolute,
                        display: S.N.Flex,
                        alignItems: S.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--right"
                    }, a.createElement(S.v, {
                        ariaLabel: Object(r.d)("Next clip", "ClipsViewModalNavigation"),
                        type: S.w.Primary,
                        icon: S._16.AngleRight,
                        onClick: this.updateClipForward,
                        "data-test-selector": "clips-view-modal-navigation-forward"
                    })))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("keydown", this.onKeyDown)
                }, t.prototype.setUpArrowListeners = function() {
                    document.addEventListener("keydown", this.onKeyDown)
                }, t.prototype.updateClipIndex = function(e) {
                    var t = Math.max(0, e),
                        n = this.props.getClips();
                    n.length - t < 4 && this.props.loadMoreClips(), t < n.length && this.props.showModal(x, {
                        getClips: this.props.getClips,
                        clip: n[t],
                        clipIndex: t,
                        loadMoreClips: this.props.loadMoreClips,
                        pageType: this.props.pageType
                    })
                }, t
            }(a.Component)),
            P = Object(s.d)("ClipsViewModalNavigation")(R);
        var j = Object(l.b)(null, function(e) {
                return Object(d.b)({
                    showModal: c.d,
                    closeModal: c.c
                }, e)
            })(P),
            M = (n("/+aa"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        modalView: i.View
                    }, t.setToViewState = function() {
                        t.updateClipsModalViewState(i.View)
                    }, t.updateClipsModalViewState = function(e) {
                        t.setState({
                            modalView: e
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t, n = ((t = {})["clips-modal-view"] = !0, t["clips-modal-view--wide"] = !1, t);
                    switch (this.state.modalView) {
                        case i.Report:
                            e = a.createElement(y.a, {
                                title: Object(r.d)("Report this Clip", "ClipsViewModal"),
                                reportContext: {
                                    contentType: k.a.Clip,
                                    contentID: this.props.clip.slug,
                                    targetUserID: this.props.clip.broadcaster ? this.props.clip.broadcaster.id : ""
                                },
                                onClose: this.setToViewState
                            });
                            break;
                        case i.Delete:
                            e = a.createElement(f.d, {
                                slug: this.props.clip.slug,
                                onClose: this.setToViewState
                            });
                            break;
                        case i.DeleteAll:
                            e = a.createElement(f.e, {
                                slug: this.props.clip.slug,
                                onClose: this.setToViewState
                            });
                            break;
                        case i.Ban:
                        case i.Timeout:
                            if (this.props.clip.curator && this.props.clip.broadcaster) {
                                e = a.createElement(f.b, {
                                    targetUser: this.props.clip.curator,
                                    broadcasterID: this.props.clip.broadcaster.id,
                                    isTemporary: this.state.modalView === i.Timeout,
                                    onClose: this.setToViewState
                                });
                                break
                            }
                        default:
                            e = a.createElement(j, {
                                getClips: this.props.getClips,
                                clip: this.props.clip,
                                clipIndex: this.props.clipIndex,
                                updateModalViewState: this.updateClipsModalViewState,
                                loadMoreClips: this.props.loadMoreClips,
                                pageType: this.props.pageType
                            }), n["clips-modal-view--wide"] = !0
                    }
                    return a.createElement(S._2, {
                        className: g(n)
                    }, e, a.createElement(v.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, t = u.__decorate([Object(s.d)("ClipsViewModal")], t)
            }(a.Component));
        var x = Object(l.b)(null, function(e) {
                return Object(d.b)({
                    showModal: c.d
                }, e)
            })(M),
            U = (n("Ajho"), "https://help.twitch.tv/customer/portal/articles/2918323-clip-champs-guide"),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.clipChampIconClickHandler = function() {
                        Object(I.c)({
                            targetURL: U,
                            type: t.props.pageType
                        })
                    }, t.getClips = function() {
                        return t.props.clips
                    }, t.openModal = function(e) {
                        e.preventDefault(), t.props.showModal(x, {
                            getClips: t.getClips,
                            clip: t.props.clip,
                            clipIndex: t.props.clipIndex,
                            loadMoreClips: t.props.loadMoreClips,
                            pageType: t.props.pageType
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = null;
                    return this.props.pageType === I.b.Channel && this.props.clip.game && (e = a.createElement(S._25, {
                        position: S._9.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        borderRight: !1,
                        borderBottom: !1,
                        className: "clips-preview-card__boxart"
                    }, a.createElement(p.a, {
                        to: Object(h.c)(this.props.clip.game.name) + "/clips",
                        "data-test-selector": "card-view-game-link",
                        "data-a-target": "clip-game-link"
                    }, a.createElement(S._43, {
                        display: S.N.Block,
                        direction: S._45.Bottom,
                        label: this.props.clip.game.name
                    }, a.createElement(S.C, {
                        alt: this.props.clip.game.name,
                        src: this.props.clip.game.boxArtURL,
                        aspect: S.k.BoxArt,
                        size: S.D.Size4
                    }))))), this.props.pageType === I.b.Game && this.props.clip.broadcaster && (t = a.createElement(S._2, null, a.createElement(p.a, {
                        className: "clips-preview-card__display-name",
                        to: "/" + this.props.clip.broadcaster.login + "/clips"
                    }, this.props.clip.broadcaster.login))), a.createElement(S._2, {
                        margin: {
                            bottom: 2,
                            right: 1
                        }
                    }, a.createElement(S.A, u.__assign({
                        row: !0
                    }, Object(S._53)(this.props)), a.createElement(S._2, {
                        position: S._9.Relative,
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, a.createElement(p.a, {
                        to: this.props.clip.url,
                        onClick: this.openModal,
                        "data-a-target": "clip-thumbnail-link"
                    }, a.createElement(S.C, {
                        src: this.props.clip.thumbnailURL || r.n.config.defaultStreamPreviewURL,
                        alt: this.props.clip.title,
                        aspect: S.k.Aspect16x9,
                        size: S.D.Size24
                    })), e), a.createElement(S.B, {
                        overflow: S._5.Hidden
                    }, a.createElement(S._35, {
                        type: S._40.H3,
                        fontSize: S.R.Size5
                    }, a.createElement(p.a, {
                        className: "clips-preview-card__title",
                        to: this.props.clip.url,
                        onClick: this.openModal,
                        "data-a-target": "clip-title-link"
                    }, this.props.clip.title)), a.createElement(S._35, {
                        ellipsis: !0
                    }, t), a.createElement(S._35, {
                        color: S.I.Alt2,
                        ellipsis: !0
                    }, Object(r.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsCardView"), this.props.clip.curator && a.createElement("span", null, " · ", this.props.isClipChampExperiment && this.props.clip.champBadge && a.createElement(S.W, null, a.createElement("a", {
                        className: "clips-preview-card__clips-champ-badge",
                        href: U,
                        onClick: this.clipChampIconClickHandler,
                        target: "_blank"
                    }, a.createElement("img", {
                        alt: "clip champ badge",
                        className: "clips-preview-card__clips-champ-badge-img",
                        src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/clipchampbadge"
                    }))), Object(r.d)("Clipped by {curator}", {
                        curator: a.createElement(p.a, {
                            className: "clips-preview-card__display-name",
                            to: "/" + this.props.clip.curator.login,
                            "data-a-target": "clip-curator-link"
                        }, this.props.clip.curator.login)
                    }, "ClipsCardView"))), a.createElement(S._35, {
                        color: S.I.Alt2
                    }, Object(r.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsCardView")))))
                }, t = u.__decorate([Object(s.d)("ClipsCardView")], t)
            }(a.Component);
        var G = Object(l.b)(null, function(e) {
                return Object(d.b)({
                    showModal: c.d
                }, e)
            })(V),
            B = n("QAcM"),
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.updateToAllTime = function() {
                        t.props.updateTimeFilter(B.b.All)
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(S._2, {
                        className: "clips-cards"
                    }, a.createElement(S.U, {
                        gutterSize: S.V.None
                    }, 0 === this.props.clips.length ? this.renderEmpty() : this.renderClips()))
                }, t.prototype.renderEmpty = function() {
                    var e = this.props.timeFilterValue === B.b.All ? a.createElement(S._2, null, a.createElement(S._35, {
                        fontSize: S.R.Size4
                    }, Object(m.d)("No Clips Found", "ClipsCards")), a.createElement(S._2, {
                        margin: 3
                    }, Object(m.d)("<x:link>Learn how</x:link> to make and share clips of this channel", {
                        "x:link": function(e) {
                            return a.createElement("a", {
                                href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips",
                                target: "_blank"
                            }, e)
                        }
                    }, "ClipsCards"))) : a.createElement(S._2, null, a.createElement(S._35, {
                        fontSize: S.R.Size4
                    }, Object(m.d)("No clips were created in this time period.", "ClipsCards"), a.createElement("br", null), Object(m.d)("Check out all popular clips from this channel instead.", "ClipsCards")), a.createElement(S._2, {
                        margin: 3
                    }, a.createElement(S.u, {
                        type: S.z.Hollow,
                        onClick: this.updateToAllTime
                    }, Object(m.d)("See all popular clips", "ClipCards"))));
                    return a.createElement(S._2, {
                        fullWidth: !0
                    }, a.createElement(S.U, null, a.createElement(S.J, {
                        cols: 3
                    }), a.createElement(S.J, {
                        cols: 6
                    }, a.createElement(S._2, {
                        textAlign: S._36.Center
                    }, e)), a.createElement(S.J, {
                        cols: 3
                    })))
                }, t.prototype.renderClips = function() {
                    var e = this,
                        t = "on" === m.o.dynamicSettings.get("twilight_clips_already", "off");
                    return this.props.clips.map(function(n, i) {
                        return a.createElement(S.J, {
                            cols: {
                                default: 12,
                                xl: 6
                            },
                            key: n.slug
                        }, a.createElement(G, {
                            clip: n,
                            clips: e.props.clips,
                            clipIndex: i,
                            "data-target": "clips-card-view",
                            "data-a-target": "clips-card-" + i,
                            isClipChampExperiment: t,
                            loadMoreClips: e.props.loadMoreClips,
                            pageType: e.props.pageType
                        }))
                    })
                }, t = u.__decorate([Object(s.d)("ClipCards")], t)
            }(a.Component);
        var W = Object(l.b)(null, function(e) {
                return Object(d.b)({
                    showModal: c.d
                }, e)
            })(H),
            z = function(e) {
                return a.createElement(S._2, null, a.createElement(S._2, {
                    display: S.N.Flex,
                    flexWrap: S.Q.NoWrap,
                    justifyContent: S._1.Between,
                    margin: {
                        bottom: 2
                    },
                    fullWidth: !0
                }, a.createElement(S._2, {
                    display: S.N.Flex,
                    flexWrap: S.Q.NoWrap
                }, e.pageType === I.b.Game && a.createElement(S._2, {
                    margin: {
                        right: 1
                    }
                }, a.createElement(o.a, null)), a.createElement(S._2, null, a.createElement(B.c, {
                    updateTimeFilter: e.updateTimeFilter,
                    timeFilterValue: e.timeFilterValue
                }))), a.createElement(S.u, {
                    linkTo: "https://twitch.tv/manager/clips",
                    targetBlank: !0,
                    type: S.z.Hollow,
                    "data-a-target": "manage-clips-button"
                }, Object(r.d)("Manage my clips", "TopClips"))), a.createElement(S._2, null, e.isLoading ? a.createElement(S._4, {
                    fillContent: !0
                }) : a.createElement(W, {
                    clips: e.clips,
                    pageType: e.pageType,
                    loadMoreClips: e.loadMoreClips,
                    updateTimeFilter: e.updateTimeFilter,
                    timeFilterValue: e.timeFilterValue
                })))
            },
            q = Object(s.d)("TopClips", {
                autoReportInteractive: !0
            })(z);
        n.d(t, !1, function() {
            return z
        }), n.d(t, "a", function() {
            return q
        })
    },
    "5eRk": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "DirectoryHeader_CreateCommunityImageUploadURL"
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
                                value: "CreateCommunityImageUploadURLInput"
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
                            value: "createCommunityImageUploadURL"
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
                                    value: "url"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "uploadID"
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
                end: 165
            }
        };
        n.loc.source = {
            body: "mutation DirectoryHeader_CreateCommunityImageUploadURL($input: CreateCommunityImageUploadURLInput!) {\ncreateCommunityImageUploadURL(input: $input) {\nurl\nuploadID\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "5yZy": function(e, t) {},
    "66ch": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("J8WN"),
            s = n("Odds"),
            l = (n("ZdVn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(o.a, {
                        allowedFileTypes: this.props.allowedFileTypes,
                        onFilesSubmitted: this.props.processFiles,
                        error: !!this.props.errorMessage
                    }, a.createElement(s._2, {
                        className: "image-uploader",
                        textAlign: s._36.Center,
                        display: s.N.Flex,
                        flexDirection: s.P.Column,
                        alignItems: s.c.Center,
                        justifyContent: s._1.Center,
                        position: s._9.Relative,
                        fullHeight: !0,
                        fullWidth: !0
                    }, this.renderErrorMessage(), a.createElement(s._2, {
                        position: s._9.Relative
                    }, a.createElement(s._2, {
                        className: "image-uploader__upload-svg--anim-backfill"
                    }, a.createElement(s._15, {
                        asset: s._16.Upload,
                        type: s._17.Alt2,
                        width: this.props.iconWidth || 99,
                        height: this.props.iconWidth || 76
                    })), a.createElement(s._2, {
                        className: "image-uploader__upload-svg--anim-fill",
                        position: s._9.Absolute,
                        display: this.props.isLoading ? s.N.Block : s.N.Hide,
                        attachTop: !0
                    }, a.createElement(s._15, {
                        asset: s._16.Upload,
                        type: s._17.Brand,
                        width: this.props.iconWidth || 99,
                        height: this.props.iconHeight || 76
                    }))), this.props.isLoading ? this.renderLoadingState() : this.renderNormalState()))
                }, t.prototype.renderLoadingState = function() {
                    return a.createElement(s._2, {
                        margin: 1,
                        "data-test-selector": "image-uploader-loading"
                    }, a.createElement(s._35, {
                        type: s._40.H4
                    }, Object(r.d)("Uploading", "ImageUploader")))
                }, t.prototype.renderNormalState = function() {
                    var e = Object(r.d)("Browse", "ImageUploader");
                    return a.createElement(s._2, null, a.createElement(s._2, null, a.createElement(s._35, {
                        type: s._40.H4
                    }, Object(r.d)("Drag and drop your image here", "ImageUploader"))), a.createElement(s._2, {
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            x: 1,
                            y: 0
                        },
                        fullWidth: !0,
                        "data-test-selector": "image-uploader-hint"
                    }, a.createElement(s._35, {
                        type: s._40.P,
                        fontSize: s.R.Size7,
                        color: s.I.Alt2
                    }, this.props.hintMessage)), a.createElement(s._2, null, a.createElement(s.u, {
                        ariaLabel: e,
                        type: s.z.Hollow
                    }, e)))
                }, t.prototype.renderErrorMessage = function() {
                    if (this.props.errorMessage) return a.createElement(s._2, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "image-uploader-error"
                    }, a.createElement(s._35, {
                        type: s._40.H5,
                        color: s.I.Error,
                        bold: !0
                    }, this.props.errorMessage))
                }, t
            }(a.Component)),
            d = n("SiVO"),
            c = n("wXwV"),
            u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isLoading: !1,
                        errorMessage: "",
                        hintMessage: "",
                        allowedFileTypes: d.b
                    }, n.processFiles = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var t, n;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return t = e[0], this.setState({
                                            errorMessage: "",
                                            isLoading: !0
                                        }), this.isFileTypeAcceptable(t) ? [3, 1] : (this.setState({
                                            errorMessage: Object(c.b)(this.state.allowedFileTypes),
                                            isLoading: !1
                                        }), [3, 5]);
                                    case 1:
                                        return this.isFileSizeAcceptable(t) ? [3, 2] : (this.setState({
                                            errorMessage: Object(c.a)(),
                                            isLoading: !1
                                        }), [3, 5]);
                                    case 2:
                                        return i.trys.push([2, 4, , 5]), [4, this.props.provider.uploadFile(t)];
                                    case 3:
                                        return i.sent(), this.props.onClose && this.props.onClose(), [3, 5];
                                    case 4:
                                        return n = i.sent(), this.setState({
                                            errorMessage: n.message,
                                            isLoading: !1
                                        }), [3, 5];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.allowedFileTypes && (n.state.allowedFileTypes = t.allowedFileTypes), n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = "";
                    e = this.props.isRequiredImageDimensions ? Object(c.g)(this.props.imageDimensions, this.props.maxFileSizeMegabytes) : Object(c.f)(this.props.imageDimensions, this.props.maxFileSizeMegabytes), this.setState({
                        hintMessage: e
                    })
                }, t.prototype.render = function() {
                    return a.createElement(l, {
                        allowedFileTypes: this.state.allowedFileTypes,
                        errorMessage: this.state.errorMessage,
                        hintMessage: this.state.hintMessage,
                        isLoading: this.state.isLoading,
                        processFiles: this.processFiles,
                        iconHeight: this.props.iconHeight,
                        iconWidth: this.props.iconWidth
                    })
                }, t.prototype.isFileTypeAcceptable = function(e) {
                    return this.state.allowedFileTypes.includes(e.type)
                }, t.prototype.isFileSizeAcceptable = function(e) {
                    var t = 1048576 * this.props.maxFileSizeMegabytes;
                    return e.size <= t
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return u
        })
    },
    "6fIs": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ModerationMenu_CurrentUser"
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
                                    value: "isSiteAdmin"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isStaff"
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
                end: 75
            }
        };
        n.loc.source = {
            body: "query ModerationMenu_CurrentUser {\ncurrentUser {\nid\nisSiteAdmin\nisStaff\n}\n}",
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
            u = n("+Znq"),
            m = n("D9fv"),
            p = n("CSlQ"),
            h = n("Odds"),
            g = (n("vQzq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            i = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        i && t.props.updateLanguagePreferences(i, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return l.createElement(h._2, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, l.createElement(h.H, {
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
                    return l.createElement(h._2, {
                        className: "language-select-menu"
                    }, l.createElement(u.a, null, l.createElement(h.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: h.z.Hollow
                    }, l.createElement(h._2, {
                        display: h.N.Flex
                    }, Object(d.d)("Language", "LanguageSelectMenu"), l.createElement(h._2, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && l.createElement(h._6, {
                        type: h._7.Brand,
                        label: e.toString()
                    })))), l.createElement(h.p, {
                        direction: h.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, l.createElement(c.b, {
                        className: "language-select-menu__balloon"
                    }, l.createElement(h._2, {
                        padding: .5
                    }, Object(m.b)().map(this.renderLanguageOption))), l.createElement(h._25, {
                        background: h.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, l.createElement(h.u, {
                        type: h.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(d.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = s.__decorate([Object(p.d)("LanguageSelectMenu")], t)
            }(l.Component));
        var v = Object(i.b)(function(e) {
            return {
                languagePreferences: Object(o.a)(e)
            }
        }, function(e) {
            return Object(a.b)({
                updateLanguagePreferences: r.c,
                clearLanguagePreferences: r.a
            }, e)
        })(g);
        n.d(t, "a", function() {
            return v
        })
    },
    "7FW4": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = i.createElement(o._2, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.P.Column,
                justifyContent: o._1.Center,
                display: o.N.Flex
            }, i.createElement(o._35, {
                color: o.I.Link,
                fontSize: o.R.Size4,
                noWrap: !0
            }, Object(r.d)("View All", "Following--ViewAllButton")), i.createElement(o._35, {
                color: o.I.Alt2,
                fontSize: o.R.Size4,
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
            }, i.createElement(o._2, null, i.createElement(o.j, {
                ratio: e.aspectRatio
            }, i.createElement(o._25, {
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
    "7yeK": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("pqU3");
        a.n.store.registerReducer("directory", function(e, t) {
            switch (void 0 === e && (e = {
                leagueOfLegends: {
                    apiData: null,
                    championsMap: null,
                    isError: !1,
                    isLoading: !1,
                    version: ""
                }
            }), t.type) {
                case r.a:
                    return i.__assign({}, e, {
                        leagueOfLegends: {
                            apiData: t.apiData,
                            championsMap: t.championsMap,
                            isError: !1,
                            isLoading: !1,
                            version: t.apiVersion
                        }
                    });
                case r.b:
                    return i.__assign({}, e, {
                        leagueOfLegends: i.__assign({}, e.leagueOfLegends, {
                            isError: t.leagueOfLegendsChampionsErrored,
                            isLoading: !1
                        })
                    });
                case r.c:
                    return i.__assign({}, e, {
                        leagueOfLegends: i.__assign({}, e.leagueOfLegends, {
                            isError: !1,
                            isLoading: t.leagueOfLegendsChampionsLoading
                        })
                    });
                default:
                    return e
            }
        });
        var o = "core.game-filters.CSGO_MAP_PREFERENCES_UPDATED",
            s = "core.game-filters.LEAGUE_CHAMPION_PREFERENCES_UPDATED",
            l = "core.game-filters.OVERWATCH_CHARACTER_PREFERENCES_UPDATED",
            d = "core.game-filters.HEARTHSTONE_CLASS_PREFERENCES_UPDATED",
            c = "core.game-filters.HEARTHSTONE_MODE_PREFERENCES_UPDATED";

        function u(e) {
            return {
                type: o,
                csgoMap: e
            }
        }

        function m(e) {
            return {
                type: s,
                leagueChampion: e
            }
        }

        function p(e) {
            return {
                type: l,
                overwatchCharacter: e
            }
        }

        function h(e) {
            return {
                type: d,
                hearthstoneClass: e
            }
        }

        function g(e) {
            return {
                type: c,
                hearthstoneMode: e
            }
        }
        var v = "csgoMapFilter",
            f = "hearthstoneClassFilter",
            y = "hearthstoneModeFilter",
            k = "leagueChampionFilter",
            b = "overwatchHeroFilter",
            _ = 0;

        function S(e) {
            var t = this;
            return function(n) {
                return i.__awaiter(t, void 0, void 0, function() {
                    return i.__generator(this, function(t) {
                        return a.l.set(v, e), n(u(e)), [2]
                    })
                })
            }
        }

        function N() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.l.remove(v), t(u("")), [2]
                    })
                })
            }
        }

        function E(e) {
            var t = this;
            return function(n) {
                return i.__awaiter(t, void 0, void 0, function() {
                    return i.__generator(this, function(t) {
                        return a.l.set(k, e), n(m(e)), [2]
                    })
                })
            }
        }

        function C() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.l.remove(k), t(m(_)), [2]
                    })
                })
            }
        }

        function w(e) {
            var t = this;
            return function(n) {
                return i.__awaiter(t, void 0, void 0, function() {
                    return i.__generator(this, function(t) {
                        return a.l.set(b, e), n(p(e)), [2]
                    })
                })
            }
        }

        function O(e) {
            var t = this;
            return function(n) {
                return i.__awaiter(t, void 0, void 0, function() {
                    return i.__generator(this, function(t) {
                        return a.l.set(f, e), n(h(e)), [2]
                    })
                })
            }
        }

        function D() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.l.remove(b), t(p("")), [2]
                    })
                })
            }
        }

        function T() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.l.remove(f), t(h("")), [2]
                    })
                })
            }
        }

        function F(e) {
            var t = this;
            return function(n) {
                return i.__awaiter(t, void 0, void 0, function() {
                    return i.__generator(this, function(t) {
                        return a.l.set(y, e), n(g(e)), [2]
                    })
                })
            }
        }

        function I() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.l.remove(y), t(g("")), [2]
                    })
                })
            }
        }

        function L() {
            return {
                csgoMap: a.l.get(v, ""),
                hearthstoneClass: a.l.get(f, ""),
                hearthstoneMode: a.l.get(y, ""),
                leagueChampion: a.l.get(k, _),
                overwatchCharacter: a.l.get(b, "")
            }
        }

        function A(e) {
            return e.gameFilters.csgoMap
        }

        function R(e) {
            return e.gameFilters.leagueChampion
        }

        function P(e) {
            return e.gameFilters.overwatchCharacter
        }

        function j(e) {
            return e.gameFilters.hearthstoneClass
        }

        function M(e) {
            return e.gameFilters.hearthstoneMode
        }
        a.n.store.registerReducer("gameFilters", function(e, t) {
            switch (void 0 === e && (e = L()), t.type) {
                case o:
                    return i.__assign({}, e, {
                        csgoMap: t.csgoMap
                    });
                case d:
                    return i.__assign({}, e, {
                        hearthstoneClass: t.hearthstoneClass
                    });
                case c:
                    return i.__assign({}, e, {
                        hearthstoneMode: t.hearthstoneMode
                    });
                case s:
                    return i.__assign({}, e, {
                        leagueChampion: t.leagueChampion
                    });
                case l:
                    return i.__assign({}, e, {
                        overwatchCharacter: t.overwatchCharacter
                    });
                default:
                    return e
            }
        });
        var x = n("GiK3"),
            U = n("RH2O"),
            V = n("c8Oh"),
            G = n("6yQB"),
            B = n("yWCw"),
            H = n("DtWM"),
            W = n("7vx8"),
            z = n("j7/Y"),
            q = n("oIkB"),
            $ = n("w9tK"),
            Q = n("Us7i"),
            K = n("vH/s"),
            J = n("/+to"),
            Y = n("QG7y"),
            X = n("CSlQ"),
            Z = n("Jwld"),
            ee = n("v5ho"),
            te = function(e) {
                return e.startsWith("/communities") || e.startsWith("/directory/communities") ? ee.a.Communities : ee.a.Games
            },
            ne = n("2KeS"),
            ie = n("zCIC"),
            ae = n("+Znq"),
            re = n("Odds"),
            oe = (n("IDLB"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.balloonOpen = !1, t.onChangeSearchTerm = function(e) {
                        t.props.onSearch(e.currentTarget.value)
                    }, t.onToggle = function(e) {
                        return t.balloonOpen = !e
                    }, t.renderSections = function() {
                        return t.props.sections ? t.props.sections.map(function(e) {
                            return [x.createElement(re.W, {
                                padding: {
                                    x: 1,
                                    top: .5
                                },
                                key: "header"
                            }, x.createElement(re._35, {
                                color: re.I.Alt2
                            }, e.title)), e.items]
                        }) : null
                    }, t.renderSelected = function() {
                        return t.props.selected ? x.createElement(re._25, {
                            borderBottom: !0
                        }, x.createElement(re.W, {
                            padding: {
                                x: 1,
                                top: .5
                            }
                        }, x.createElement(re._35, {
                            color: re.I.Alt2
                        }, t.props.selectedTitle)), t.props.selected) : null
                    }, t.setSearchRef = function(e) {
                        t.props.searchRefDelegate && t.props.searchRefDelegate(e)
                    }, t.setToggleRef = function(e) {
                        return t.toggleRef = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    (!this.props.selected && e.selected || this.props.selected && !e.selected) && this.balloonOpen && this.toggleRef && this.toggleRef.toggleBalloon(!1)
                }, t.prototype.render = function() {
                    return this.props.isError ? null : this.props.isLoading ? x.createElement(re._2, {
                        display: re.N.Flex,
                        justifyContent: re._1.Center,
                        alignItems: re.c.Center
                    }, x.createElement(re._8, {
                        width: 70,
                        height: 30
                    })) : x.createElement(re._2, {
                        className: "selectable-filter"
                    }, x.createElement(ae.a, {
                        onToggle: this.onToggle,
                        ref: this.setToggleRef
                    }, x.createElement(re.u, i.__assign({
                        dropdown: !0,
                        type: re.z.Hollow
                    }, Object(re._53)(this.props)), x.createElement(re._2, {
                        display: re.N.Flex
                    }, this.props.title)), x.createElement(re.p, {
                        direction: re.q.BottomLeft,
                        noTail: !0
                    }, x.createElement(re._2, {
                        className: "selectable-filter__balloon",
                        padding: {
                            y: .5
                        }
                    }, x.createElement(re._25, {
                        padding: 1,
                        borderBottom: !0
                    }, x.createElement(re._18, {
                        refDelegate: this.setSearchRef,
                        onChange: this.onChangeSearchTerm,
                        placeholder: this.props.searchPlaceholder
                    })), this.renderSelected(), x.createElement(ie.b, {
                        className: "selectable-filter__scroll-container"
                    }, x.createElement(re._2, null, this.renderSections()))))))
                }, t
            }(x.Component)),
            se = (n("zu64"), function(e) {
                return x.createElement(re._0, i.__assign({
                    onClick: e.onClick,
                    key: e.key,
                    disabled: e.disabled
                }, Object(re._53)(e)), x.createElement(re._2, {
                    className: "selectable-filter-item",
                    display: re.N.Flex,
                    flexDirection: re.P.Row,
                    alignItems: re.c.Center,
                    margin: {
                        y: .5,
                        x: 1
                    },
                    flexWrap: re.Q.NoWrap
                }, e.spriteWidth && x.createElement(re._2, {
                    className: "selectable-filter-item__avatar-container",
                    flexShrink: 0
                }, x.createElement("div", {
                    className: "selectable-filter-item__avatar",
                    style: {
                        backgroundImage: "url(" + e.spriteAsset + ")",
                        backgroundPositionX: e.spriteOffsetX ? -1 * e.spriteOffsetX : 0,
                        backgroundPositionY: e.spriteOffsetY ? -1 * e.spriteOffsetY : 0,
                        width: e.spriteWidth ? e.spriteWidth + "px" : "3rem",
                        height: e.spriteWidth ? e.spriteHeight + "px" : "3rem",
                        transform: "scale(" + (e.spriteWidth > 0 ? 30 / e.spriteWidth : 1) + ")",
                        transformOrigin: "0 0"
                    }
                })), x.createElement(re.W, {
                    margin: {
                        left: 1
                    },
                    flexGrow: 1,
                    ellipsis: !0
                }, x.createElement(re._35, {
                    fontSize: re.R.Size5
                }, e.name)), e.withClose && x.createElement(re._15, {
                    asset: re._16.Close
                })))
            }),
            le = [{
                Maps: [{
                    name: "cs_agency",
                    display_name: "Agency"
                }, {
                    name: "cs_assault",
                    display_name: "Assault"
                }, {
                    name: "de_austria",
                    display_name: "Austria"
                }, {
                    name: "de_cache",
                    display_name: "Cache"
                }, {
                    name: "de_canals",
                    display_name: "Canals"
                }, {
                    name: "de_cbble",
                    display_name: "Cobblestone"
                }, {
                    name: "custom",
                    display_name: "Custom"
                }, {
                    name: "deathmatch",
                    display_name: "Deathmatch"
                }, {
                    name: "de_dust",
                    display_name: "Dust"
                }, {
                    name: "de_dust2",
                    display_name: "Dust II"
                }, {
                    name: "guardian",
                    display_name: "Guardian"
                }, {
                    name: "de_inferno",
                    display_name: "Inferno"
                }, {
                    name: "cs_insertion",
                    display_name: "Insertion"
                }, {
                    name: "cs_italy",
                    display_name: "Italy"
                }, {
                    name: "de_mirage",
                    display_name: "Mirage"
                }, {
                    name: "de_nuke",
                    display_name: "Nuke"
                }, {
                    name: "cs_office",
                    display_name: "Office"
                }, {
                    name: "de_overpass",
                    display_name: "Overpass"
                }, {
                    name: "de_train",
                    display_name: "Train"
                }, {
                    name: "wargames",
                    display_name: "War Games"
                }, {
                    name: "weaponsexpert",
                    display_name: "Weapons Expert"
                }]
            }],
            de = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.getSections = function() {
                        var e = [];
                        if (t.state.content) {
                            var n = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                i = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            t.state.content.forEach(function(a) {
                                Object.keys(a).forEach(function(r) {
                                    var o = [];
                                    a[r].forEach(function(e) {
                                        t.state.selected && t.state.selected.name === e.name || n && !e.name.match(n) && i && !e.name.match(i) || o.push(t.renderMap(e, function() {
                                            return t.onSelect(e)
                                        }))
                                    }), o.length && e.push({
                                        title: r,
                                        items: o
                                    })
                                })
                            })
                        }
                        return e
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            return t.renderMap(t.state.selected, function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.clearCSGOMapPreference()
                                })
                            }, !0)
                        }
                    }, t.loadData = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                return this.state.isLoading || this.state.isError || this.state.content ? [2] : (this.setState({
                                    content: le
                                }), [2])
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.updateCSGOMapPreference(e.name)
                        })
                    }, t.renderMap = function(e, t, n) {
                        return void 0 === n && (n = !1), x.createElement(se, {
                            key: e.name,
                            "data-a-name": e.name,
                            name: e.display_name,
                            onClick: t,
                            withClose: n
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (this.props.firstPageLoaded && this.loadData(), this.props.csgoMap) {
                        var t = le[0].Maps.find(function(t) {
                            return t.name === e.props.csgoMap
                        });
                        t && this.setState({
                            selected: t
                        })
                    }
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return x.createElement(oe, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(a.d)("Search by Map", "CSGOMapFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(a.d)("Selected Map", "CSGOMapFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(a.d)("Map", "CSGOMapFilter"),
                        "data-test-selector": "csgo-filter-selector"
                    })
                }, t
            }(x.Component);
        var ce = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    csgoMap: A(e)
                }
            }, function(e) {
                return Object(ne.b)({
                    updateCSGOMapPreference: S,
                    clearCSGOMapPreference: N
                }, e)
            })(de),
            ue = n("iOr9"),
            me = n("HW6M"),
            pe = function() {
                var e = function() {
                    return x.createElement(re._2, {
                        className: "featured-events-layout__column",
                        margin: {
                            bottom: 3
                        }
                    }, x.createElement(re._2, {
                        margin: {
                            bottom: 1
                        }
                    }, x.createElement(re._8, {
                        height: 60
                    })), x.createElement(re._35, null, x.createElement(re._8, {
                        width: 130
                    })), x.createElement(re._35, null, x.createElement(re._8, {
                        width: 105
                    })))
                };
                return x.createElement(re._2, {
                    fullWidth: !0
                }, x.createElement(re._2, {
                    margin: {
                        bottom: 2
                    }
                }, x.createElement(re._35, null, x.createElement(re._8, {
                    width: 150
                }))), [1, 2, 3].map(function(t) {
                    return x.createElement(e, {
                        key: t
                    })
                }))
            },
            he = (n("tmqW"), Object(X.d)("EventCard", {
                autoReportInteractive: !0
            })(function(e) {
                var t = {
                    backgroundImage: "url(" + e.imageURL + ")"
                };
                return x.createElement(re._25, {
                    className: "event",
                    margin: {
                        bottom: 1
                    },
                    border: !0
                }, x.createElement("div", {
                    className: "event__header",
                    style: t
                }, x.createElement("div", {
                    className: "event__header-overlay"
                }, x.createElement(re._35, {
                    type: re._40.H5,
                    bold: !0
                }, e.title))), e.children)
            })),
            ge = Object(X.d)("LiveEvents", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.events.map(function(e, t) {
                    if (!e.owner) return null;
                    var n = e.owner.stream;
                    if (!n) return null;
                    var i = {
                        pathname: "/" + e.owner.login,
                        state: {
                            medium: K.PageviewMedium.Game,
                            content: K.PageviewContent.EventLive,
                            content_index: t
                        }
                    };
                    return x.createElement(he, {
                        key: e.id,
                        title: e.title,
                        imageURL: e.coverImageURL,
                        eventIDs: [e.id]
                    }, x.createElement(re._2, {
                        padding: 1,
                        alignItems: re.c.Baseline,
                        display: re.N.Flex,
                        justifyContent: re._1.Between
                    }, x.createElement(re._35, {
                        type: re._40.P
                    }, Object(a.d)("{viewerCount, number} viewers", {
                        viewerCount: n.viewersCount
                    }, "Events"), " - ", e.owner.displayName), x.createElement(re.u, {
                        linkTo: i
                    }, Object(a.d)("Watch Now", "Events"))))
                });
                return x.createElement(re._2, null, t)
            }),
            ve = n("mi6k"),
            fe = Object(X.d)("PastEvents", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.events.map(function(e, t) {
                    if (0 === e.videos.length) return null;
                    var n = e.videos.map(function(n, i) {
                        var r = Object(ve.a)(n.lengthSeconds || 0),
                            o = i === e.videos.length - 1 ? "event__video-last" : "",
                            s = {
                                pathname: "/videos/" + n.id,
                                state: {
                                    medium: K.PageviewMedium.Game,
                                    content: K.PageviewContent.EventPast,
                                    content_index: t
                                }
                            };
                        return x.createElement(re._0, {
                            key: n.id,
                            linkTo: s,
                            alpha: !0
                        }, x.createElement(re._2, {
                            className: "event__video " + o,
                            padding: 1
                        }, x.createElement(re._2, {
                            className: "event__video-card"
                        }, x.createElement(re.A, {
                            row: !0
                        }, x.createElement(re.C, {
                            src: n.thumbnailURL,
                            alt: n.title,
                            size: re.D.Size6
                        }), x.createElement(re.B, null, x.createElement(re._2, {
                            padding: {
                                left: 1
                            }
                        }, x.createElement(re._35, {
                            type: re._40.H6
                        }, n.title), x.createElement(re._2, {
                            className: "event__broadcast-details"
                        }, x.createElement(re._35, {
                            type: re._40.P
                        }, Object(a.d)("{viewCount, number} views", {
                            viewCount: n.viewCount
                        }, "Events"), " · ", r))))))))
                    });
                    return x.createElement(he, {
                        key: e.id,
                        title: e.title,
                        imageURL: e.imageURL,
                        eventIDs: [e.id]
                    }, n)
                });
                return x.createElement(re._2, null, t)
            }),
            ye = n("Aj/L"),
            ke = n("AMWC"),
            be = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.unfollowEvent = function(e) {
                        e && (e.stopPropagation(), e.preventDefault()), t.props.updateEventBroadcastNotifications(Object(q.a)({
                            eventID: t.props.eventID,
                            emailEnabled: !1
                        })), a.n.tracking.track(K.SpadeEventType.EventFollowing, {
                            action: "email_reminder_off",
                            event_id: t.props.eventID,
                            location: "directory"
                        })
                    }, t.followEvent = function(e) {
                        e && (e.stopPropagation(), e.preventDefault()), t.props.updateEventBroadcastNotifications(Object(q.a)({
                            eventID: t.props.eventID,
                            emailEnabled: !0
                        })), a.n.tracking.track(K.SpadeEventType.EventFollowing, {
                            action: "email_reminder_on",
                            event_id: t.props.eventID,
                            location: "directory"
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.isLoggedIn) return null;
                    var e = re._16.Heart,
                        t = this.followEvent,
                        n = Object(a.d)("Remind Me", "Events");
                    return this.props.areNotificationsEnabled && (e = re._16.FollowCheck, t = this.unfollowEvent, n = Object(a.d)("Reminder Set", "Events")), x.createElement(re._43, {
                        label: n,
                        align: re._44.Right
                    }, x.createElement(re.v, {
                        size: re.x.Default,
                        icon: e,
                        onClick: t,
                        ariaLabel: n
                    }))
                }, t = i.__decorate([Object(W.a)(ke, {
                    name: "updateEventBroadcastNotifications"
                }), Object(X.d)("NotifyMeComponent")], t)
            }(x.Component);
        var _e = Object(U.b)(function(e) {
            return {
                isLoggedIn: Object(ye.d)(e)
            }
        })(be);
        var Se = Object(X.d)("UpcomingEvents", {
                autoReportInteractive: !0
            })(function(e) {
                var t = 0,
                    n = e.events.map(function(e) {
                        var n = e.broadcasts.map(function(n, i) {
                                return x.createElement(re._0, {
                                    key: n.id,
                                    linkTo: (r = "https://twitch.tv/events/" + n.id, o = K.PageviewContent.EventUpcoming, s = t++, r + "?tt_medium=" + K.PageviewMedium.Game + "&tt_content=" + o + "&tt_content_index=" + s),
                                    alpha: !0
                                }, x.createElement(re._2, {
                                    className: "event__broadcast-wrapper"
                                }, x.createElement(re._2, {
                                    className: me("event__broadcast", {
                                        "event__broadcast-last": i === e.broadcasts.length - 1
                                    }),
                                    padding: {
                                        y: .5,
                                        left: 2,
                                        right: 1
                                    },
                                    margin: {
                                        left: 2
                                    },
                                    display: re.N.Flex,
                                    flexWrap: re.Q.NoWrap,
                                    justifyContent: re._1.Between
                                }, x.createElement(re._2, {
                                    flexShrink: 1
                                }, x.createElement(re._2, {
                                    className: "event__broadcast-header",
                                    fullWidth: !0
                                }, x.createElement(re._35, {
                                    bold: !0
                                }, Object(a.c)(n.startAt, "medium"), n.title && " - ", n.title)), x.createElement(re._2, {
                                    className: "event__broadcast-details"
                                }, Object(a.d)("{start,time,short} - {end,time,short}", {
                                    start: n.startAt,
                                    end: n.endAt
                                }, "UpcomingEvents"))), x.createElement(re._2, {
                                    display: re.N.Flex,
                                    flexShrink: 0,
                                    margin: {
                                        left: 1
                                    },
                                    alignSelf: re.d.Center
                                }, x.createElement(_e, {
                                    eventID: n.id,
                                    areNotificationsEnabled: n.notificationsEnabled
                                })))));
                                var r, o, s
                            }),
                            i = e.broadcasts.map(function(e) {
                                return e.id
                            });
                        return x.createElement(he, {
                            key: i.join(""),
                            imageURL: e.imageURL,
                            title: e.title,
                            eventIDs: i
                        }, n)
                    });
                return x.createElement(re._2, null, n)
            }),
            Ne = [" | ", " - "];

        function Ee(e) {
            for (var t = "", n = [], i = 0, a = Ne.length; i < a && n.length <= 1; i++) t = Ne[i], n = e.split(t).map(function(e) {
                return e.trim()
            }).filter(function(e) {
                return e.length
            });
            if (n.length <= 1) return {
                prefix: e,
                postfix: "",
                best: e
            };
            for (var r = 0, o = ""; 0 === o.length;) r--, o = n.slice(r).join(t);
            return {
                prefix: n.slice(0, n.length + r).join(t).trim(),
                postfix: o,
                best: o
            }
        }
        var Ce = n("hcPX"),
            we = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tracked = !1, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return x.createElement(pe, null);
                    if (this.props.data.error || null === this.props.data.game) return x.createElement(re._25, {
                        color: re.I.Alt2,
                        display: re.N.Flex,
                        justifyContent: re._1.Center,
                        alignItems: re.c.Center,
                        fullWidth: !0
                    }, x.createElement(re._15, {
                        asset: re._16.DeadGlitch,
                        width: 46,
                        height: 48
                    }));
                    var e = !1,
                        t = null,
                        n = this.props.data.game.featuredEventBroadcasts.live.filter(this.isNotNull);
                    0 !== n.length && (e = !0, t = x.createElement(re._2, {
                        margin: {
                            bottom: 3
                        }
                    }, x.createElement(re._2, {
                        margin: {
                            bottom: 1
                        }
                    }, x.createElement(re._35, {
                        type: re._40.H4
                    }, Object(a.d)("Live Events", "Events"))), x.createElement(re._2, null, x.createElement(ge, {
                        events: n
                    }))));
                    var i = null,
                        r = this.props.data.game.featuredEventBroadcasts.future.filter(this.isNotNull),
                        o = this.convertUpcomingEvents(r);
                    0 !== o.length && (e = !0, i = x.createElement(re._2, {
                        margin: {
                            bottom: 3
                        }
                    }, x.createElement(re._2, {
                        margin: {
                            bottom: 1
                        }
                    }, x.createElement(re._35, {
                        type: re._40.H4
                    }, Object(a.d)("Upcoming Events", "Events"))), x.createElement(re._2, null, x.createElement(Se, {
                        events: o
                    }))));
                    var s = null,
                        l = this.props.data.game.featuredEventBroadcasts.past.filter(this.isNotNull),
                        d = this.convertPastEvents(l);
                    return 0 !== d.length && (e = !0, s = x.createElement(re._2, {
                        margin: {
                            bottom: 3
                        }
                    }, x.createElement(re._2, {
                        margin: {
                            bottom: 1
                        }
                    }, x.createElement(re._35, {
                        type: re._40.H4
                    }, Object(a.d)("Recent Events", "Events"))), x.createElement(re._2, null, x.createElement(fe, {
                        events: d
                    })))), x.createElement(re._2, {
                        className: me({
                            "featured-events-layout__column": e
                        })
                    }, t, i, s)
                }, t.prototype.trackPresentation = function(e, t, n) {
                    var i = e.map(function(e) {
                            return e.id
                        }),
                        r = [];
                    t.forEach(function(e) {
                        var t = e.broadcasts.map(function(e) {
                            return e.id
                        });
                        r.push.apply(r, t)
                    });
                    var o = n.map(function(e) {
                        return e.id
                    });
                    a.n.tracking.track(K.SpadeEventType.FeaturedEventPresentation, {
                        game: this.props.data.game ? this.props.data.game.name : "unknown game",
                        live_events: JSON.stringify(i),
                        upcoming_events: JSON.stringify(r),
                        past_events: JSON.stringify(o)
                    })
                }, t.prototype.convertUpcomingEvents = function(e) {
                    var t = new Map;
                    e.forEach(function(e) {
                        var n = e.owner;
                        if (null !== n) {
                            var i = t.get(n.id) || [];
                            i.push(e), t.set(n.id, i)
                        }
                    });
                    var n = [];
                    return t.forEach(function(e) {
                        var t = new Map;
                        e.forEach(function(e) {
                            var n = Ee(e.title),
                                i = t.get(n.prefix) || [];
                            i.push(e), t.has(n.prefix) || t.set(n.prefix, i)
                        }), t.forEach(function(e, t) {
                            n.push({
                                title: t,
                                imageURL: e[0].coverImageURL,
                                broadcasts: e.map(function(e) {
                                    return {
                                        id: e.id,
                                        title: Ee(e.title).postfix,
                                        startAt: new Date(e.startAt),
                                        endAt: new Date(e.endAt),
                                        notificationsEnabled: !!e.self && e.self.emailEnabled
                                    }
                                }),
                                broadcaster: e[0].owner
                            })
                        })
                    }), n
                }, t.prototype.convertPastEvents = function(e) {
                    return e.map(function(e) {
                        var t = [];
                        e.highlights && e.highlights.edges.length > 0 ? t = e.highlights.edges : e.vods && e.vods.edges.length > 0 && (t = e.vods.edges);
                        var n = function(e) {
                            if (0 === e.length) return [];
                            for (var t = "", n = [], i = 0, a = 0, r = Ne.length; a < r && i <= 1; a++) t = Ne[a], n = e.map(function(e) {
                                return e.split(t).map(function(e) {
                                    return e.trim()
                                }).filter(function(e) {
                                    return e.length
                                })
                            }), i = Math.min.apply(Math, n.map(function(e) {
                                return e.length
                            }));
                            for (var o = 0, s = -1, l = function(e) {
                                    var t = n.reduce(function(t, i, a) {
                                        for (var r = 0; r < a; r++) {
                                            var o = n[r];
                                            i[e] !== o[e] && (t += 1)
                                        }
                                        return t
                                    }, 0);
                                    t > o && (o = t, s = e)
                                }, d = 0; d < i; d++) l(d);
                            return -1 === s ? e.map(function(e) {
                                return {
                                    full: e,
                                    identifier: Ee(e).best
                                }
                            }) : e.map(function(e, t) {
                                return {
                                    full: e,
                                    identifier: n[t][s]
                                }
                            })
                        }(t.map(function(e) {
                            return e.node.title
                        }));
                        return {
                            id: e.id,
                            title: e.title,
                            imageURL: e.coverImageURL,
                            videos: t.map(function(e, t) {
                                return {
                                    id: e.node.id,
                                    title: n[t].identifier,
                                    thumbnailURL: e.node.thumbnailURLs[0],
                                    viewCount: e.node.viewCount,
                                    lengthSeconds: e.node.lengthSeconds
                                }
                            })
                        }
                    })
                }, t.prototype.isNotNull = function(e) {
                    return null !== e
                }, t.prototype.onRender = function() {
                    if (!this.props.data.loading && !this.tracked && !this.props.data.error && this.props.data.game) {
                        var e = this.props.data.game.featuredEventBroadcasts;
                        this.trackPresentation(e.live.filter(this.isNotNull), this.convertUpcomingEvents(e.future.filter(this.isNotNull)), this.convertPastEvents(e.past.filter(this.isNotNull))), this.tracked = !0
                    }
                }, t = i.__decorate([Object(W.a)(Ce, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.gameName
                            }
                        }
                    }
                })], t)
            }(x.Component),
            Oe = n("AadB"),
            De = (n("SG0P"), "directory-container"),
            Te = "direectory-grid-grid-layout",
            Fe = "directory-grid-sidebar-layout",
            Ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderAdLessGrid = function() {
                        return t.renderGrid(!1)
                    }, t.renderGrid = function(e) {
                        void 0 === e && (e = !0);
                        var n = null;
                        return e && (n = x.createElement(J.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: Y.d.directory,
                            slotID: Y.b.directory.rectangle,
                            adSize: Y.c.directory.rectangle,
                            targeting: {
                                pagetype: Y.a.games,
                                game: t.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        })), x.createElement(re._2, {
                            flexShrink: 0,
                            "data-target": De,
                            "data-test-selector": Te
                        }, x.createElement(re._46, {
                            gutterSize: re._48.Small,
                            childWidth: re._47.Large,
                            placeholderItems: 20
                        }, n, t.props.children), x.createElement(ie.a, {
                            enabled: t.props.canLoadMore,
                            loadMore: t.props.loadMore,
                            pixelThreshold: 200
                        }))
                    }, t.renderSidebar = function() {
                        return x.createElement(re._2, {
                            display: re.N.Flex,
                            flexWrap: re.Q.NoWrap,
                            fullWidth: !0,
                            "data-test-selector": Fe
                        }, x.createElement(re._2, {
                            flexGrow: 1,
                            display: re.N.Flex,
                            flexWrap: re.Q.Wrap,
                            fullWidth: !0
                        }, x.createElement(re._46, {
                            gutterSize: re._48.Small,
                            childWidth: re._47.Medium,
                            placeholderItems: 20
                        }, t.props.children), x.createElement(ie.a, {
                            enabled: t.props.canLoadMore,
                            loadMore: t.props.loadMore,
                            pixelThreshold: 200
                        })), x.createElement(re._2, {
                            display: re.N.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            margin: {
                                left: 3
                            }
                        }, x.createElement(re._2, {
                            display: re.N.Flex,
                            flexDirection: re.P.Column
                        }, x.createElement(J.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 0,
                                width: 320,
                                height: 250
                            },
                            adUnit: Y.d.directory,
                            slotID: Y.b.directory.rectangle,
                            adSize: Y.c.directory.rectangle,
                            targeting: {
                                pagetype: Y.a.games,
                                game: t.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        }), t.props.firstPageLoaded ? x.createElement(we, {
                            gameName: t.props.communityName
                        }) : x.createElement(pe, null))))
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + De + '"]'),
                            t = document.querySelector('[data-target="' + Oe.a + '"]'),
                            n = document.querySelector("#" + Y.b.directory.rectangle);
                        if (t && e && n) {
                            var i = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== i && "0" !== i && (n.style.order = i)
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.updateDisplayAdOrder), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.updateDisplayAdOrder()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.updateDisplayAdOrder)
                }, t.prototype.render = function() {
                    if (this.isEventApprovedDirectory(this.props.communityName)) {
                        var e = {
                                shown: this.renderSidebar,
                                hidden: this.renderGrid,
                                fallback: this.renderGrid
                            },
                            t = this.renderAdLessGrid;
                        return x.createElement(ue.a, {
                            name: "TWILIGHT_EVENT_GAME_DIRECTORY",
                            assignments: e,
                            loader: t
                        })
                    }
                    return this.renderGrid()
                }, t.prototype.isEventApprovedDirectory = function(e) {
                    return a.n.dynamicSettings.get("event_directory_enabled_games", []).includes(e.toLowerCase())
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t
            }(x.Component),
            Le = Object(X.d)("DirectoryGrid")(Ie);
        var Ae = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(Le),
            Re = n("NY9D"),
            Pe = n("jkA6"),
            je = n("7FW4"),
            Me = n("peXu"),
            xe = n("F3Wg"),
            Ue = n("SN3I"),
            Ve = n("MMhf"),
            Ge = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory || this.props.data.error || !this.props.data.directory) return null;
                    var t, n = Object(Ve.a)(this.props.languageCode),
                        i = this.props.directoryWidth,
                        a = this.props.directoryType === ee.a.Communities ? K.PageviewMedium.Community : K.PageviewMedium.Game,
                        r = this.props.data.directory.streams.edges || [];
                    if (i && i > 0) {
                        var o = Object(Me.a)(i, 240, 2);
                        o < r.length && (r = r.slice(0, o - 1), t = x.createElement("div", {
                            style: {
                                order: r.length
                            }
                        }, x.createElement(je.a, {
                            subHeader: n,
                            linkTo: {
                                pathname: this.getViewAllPath(),
                                state: {
                                    medium: a,
                                    content: K.PageviewContent.Game
                                }
                            }
                        })))
                    }
                    var s = r.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(t, n) {
                        var i = t.node;
                        return x.createElement(Oe.b, {
                            directoryName: e.props.directoryName,
                            directoryType: e.props.directoryType,
                            streamIndex: n,
                            streamNode: i,
                            key: i.id,
                            trackingMedium: a
                        })
                    });
                    return x.createElement("div", null, x.createElement(Ue.a, {
                        languageCode: this.props.languageCode
                    }), x.createElement(re._46, {
                        gutterSize: re._48.Small,
                        childWidth: re._47.Medium,
                        placeholderItems: 20
                    }, s, t))
                }, t.prototype.getViewAllPath = function() {
                    return this.props.directoryType === ee.a.Communities ? Object(Re.a)(this.props.directoryName) + "/" + this.props.languageCode : Object(Re.c)(this.props.directoryName) + "/" + this.props.languageCode
                }, t = i.__decorate([Object(W.a)(xe, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                limit: 30,
                                languages: [e.languageCode],
                                type: Object(Pe.a)(e.directoryType)
                            }
                        }
                    }
                }), Object(X.d)("DirectoryInternationalSection", {
                    autoReportInteractive: !0
                })], t)
            }(x.Component),
            Be = n("/SNv"),
            He = n.n(Be),
            We = n("LgcN"),
            ze = "hearthstone-class-filter-item-selector",
            qe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = a.n.logger.withCategory("hearthstone-class-filter"), t.getSections = function() {
                        var e = [];
                        if (t.state.content) {
                            var n = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                i = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            t.state.content.forEach(function(a) {
                                Object.keys(a).forEach(function(r) {
                                    var o = [];
                                    a[r].forEach(function(e) {
                                        t.state.selected && t.state.selected.name === e.name || n && !e.name.match(n) && i && !e.name.match(i) || o.push(t.renderCharacter(e, function() {
                                            return t.onSelect(e)
                                        }))
                                    }), o.length > 0 && e.push({
                                        title: r,
                                        items: o
                                    })
                                })
                            })
                        }
                        return e
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            return t.renderCharacter(t.state.selected, function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.clearHearthstoneClassPreference()
                                })
                            }, !0)
                        }
                    }, t.loadData = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, Object(We.b)()];
                                    case 2:
                                        return e = i.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }, function() {
                                            n.state.content && n.state.content.forEach(function(e) {
                                                Object.keys(e).forEach(function(t) {
                                                    e[t].forEach(function(e) {
                                                        n.props.hearthstoneClass && n.props.hearthstoneClass === e.class && n.setState({
                                                            selected: e
                                                        })
                                                    })
                                                })
                                            })
                                        }), [3, 4];
                                    case 3:
                                        return t = i.sent(), this.logger.error(t, "Failed to load Hearthstone class data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.updateHearthstoneClassPreference(e.class)
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), x.createElement(se, {
                            key: e.name,
                            name: e.class,
                            onClick: t,
                            spriteAsset: He.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_width,
                            spriteHeight: e.image_height,
                            withClose: n,
                            "data-test-selector": ze
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return x.createElement(oe, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(a.d)("Search by Class", "HearthstoneClassFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(a.d)("Selected Class", "HearthstoneClassFilter"),
                        title: this.state.selected ? this.state.selected.class : Object(a.d)("Class", "HearthstoneClassFilter"),
                        "data-test-selector": "hearthstone-class-filter-selector"
                    })
                }, t
            }(x.Component);
        var $e = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    hearthstoneClass: j(e)
                }
            }, function(e) {
                return Object(ne.b)({
                    updateHearthstoneClassPreference: O,
                    clearHearthstoneClassPreference: T
                }, e)
            })(qe),
            Qe = n("Ehh8"),
            Ke = n.n(Qe),
            Je = "hearthstone-mode-filter-item-selector",
            Ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = a.n.logger.withCategory("hearthstone-mode-filter"), t.getSections = function() {
                        var e = [];
                        if (t.state.content) {
                            var n = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                i = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            t.state.content.forEach(function(a) {
                                Object.keys(a).forEach(function(r) {
                                    var o = [];
                                    a[r].forEach(function(e) {
                                        t.state.selected && t.state.selected.name === e.name || n && !e.name.match(n) && i && !e.name.match(i) || o.push(t.renderCharacter(e, function() {
                                            return t.onSelect(e)
                                        }))
                                    }), o.length && e.push({
                                        title: r,
                                        items: o
                                    })
                                })
                            })
                        }
                        return e
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            return t.renderCharacter(t.state.selected, function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.clearHearthstoneModePreference()
                                })
                            }, !0)
                        }
                    }, t.loadData = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, Object(We.c)()];
                                    case 2:
                                        return e = i.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }, function() {
                                            n.state.content && n.state.content.forEach(function(e) {
                                                Object.keys(e).forEach(function(t) {
                                                    e[t].forEach(function(e) {
                                                        n.props.hearthstoneMode && n.props.hearthstoneMode === e.name && n.setState({
                                                            selected: e
                                                        })
                                                    })
                                                })
                                            })
                                        }), [3, 4];
                                    case 3:
                                        return t = i.sent(), this.logger.error(t, "Failed to load Hearthstone mode data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.updateHearthstoneModePreference(e.name)
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), x.createElement(se, {
                            key: e.name,
                            name: e.display_name,
                            onClick: t,
                            spriteAsset: Ke.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_height,
                            spriteHeight: e.image_height,
                            withClose: n,
                            "data-test-selector": Je
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return x.createElement(oe, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(a.d)("Search by Mode", "HearthstoneModeFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(a.d)("Selected Mode", "HearthstoneModeFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(a.d)("Mode", "HearthstoneModeFilter"),
                        "data-test-selector": "hearthstone-mode-filter-selector"
                    })
                }, t
            }(x.Component);
        var Xe = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    hearthstoneMode: M(e)
                }
            }, function(e) {
                return Object(ne.b)({
                    updateHearthstoneModePreference: F,
                    clearHearthstoneModePreference: I
                }, e)
            })(Ye),
            Ze = n("PPNL"),
            et = "league-filter-item-selector",
            tt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.setSelectedChampion = function(e) {
                        Object.keys(e.data).forEach(function(n) {
                            var i = e.data[n];
                            i.id === t.props.leagueChampion && t.setState({
                                selected: i
                            })
                        })
                    }, t.getSections = function() {
                        var e = [],
                            n = [];
                        if (t.props.leagueOfLegends.apiData) {
                            var i = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                r = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            Object.keys(t.props.leagueOfLegends.apiData.data).forEach(function(a) {
                                if (t.props.leagueOfLegends.apiData) {
                                    var o = t.props.leagueOfLegends.apiData.data[a];
                                    if (t.state.selected && t.state.selected.name === o.name) return;
                                    if (i && !o.name.match(i) && r && !o.name.match(r)) return;
                                    var s = t.renderCharacter(o, function() {
                                        return t.onSelect(o)
                                    });
                                    o.channels > 0 ? e.push(s) : n.push(s)
                                }
                            })
                        }
                        var o = [];
                        return e.length > 0 && o.push({
                            title: Object(a.d)("Champions Online", "LeagueFilter"),
                            items: e
                        }), n.length > 0 && o.push({
                            title: Object(a.d)("Champions Offline", "LeagueFilter"),
                            items: n
                        }), o
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            return t.renderCharacter(t.state.selected, function() {
                                t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.clearLeagueChampionPreference()
                                })
                            }, !0)
                        }
                    }, t.loadData = function() {
                        t.props.leagueOfLegends.isLoading || t.props.leagueOfLegends.isError || t.props.leagueOfLegends.apiData || t.props.onLoadLeagueOfLegendsChampions()
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.updateLeagueChampionPreference(e.id)
                        })
                    }, t.renderCharacter = function(e, n, i) {
                        void 0 === i && (i = !1);
                        var a = "https://ddragon.leagueoflegends.com/cdn/" + t.props.leagueOfLegends.version + "/img/sprite/" + e.image.sprite,
                            r = e.name.replace(/[.']/g, "").replace(/ /g, "").toLowerCase();
                        return x.createElement(se, {
                            disabled: 0 === e.channels,
                            key: e.id,
                            name: e.name,
                            onClick: n,
                            spriteAsset: a,
                            spriteOffsetX: e.image.x,
                            spriteOffsetY: e.image.y,
                            spriteWidth: e.image.w,
                            spriteHeight: e.image.h,
                            withClose: i,
                            "data-a-target": "champion-filter-" + r,
                            "data-test-selector": et
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData(), this.props.leagueChampion && this.props.leagueOfLegends.apiData && this.setSelectedChampion(this.props.leagueOfLegends.apiData)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData(), this.props.leagueChampion && !this.props.leagueOfLegends.apiData && e.leagueOfLegends.apiData && this.setSelectedChampion(e.leagueOfLegends.apiData)
                }, t.prototype.render = function() {
                    return x.createElement(oe, {
                        isError: this.props.leagueOfLegends.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.props.leagueOfLegends.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(a.d)("Search by Champion", "LeagueFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(a.d)("Selected Champion", "LeagueFilter"),
                        title: this.state.selected ? this.state.selected.name : Object(a.d)("Champion", "LeagueFilter"),
                        "data-a-target": "league-champion-filter-dropdown",
                        "data-test-selector": "league-filter-selector"
                    })
                }, t
            }(x.Component);
        var nt = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    leagueChampion: R(e),
                    leagueOfLegends: {
                        apiData: e.directory.leagueOfLegends.apiData,
                        isError: e.directory.leagueOfLegends.isError,
                        isLoading: e.directory.leagueOfLegends.isLoading,
                        version: e.directory.leagueOfLegends.version
                    }
                }
            }, function(e) {
                return Object(ne.b)({
                    updateLeagueChampionPreference: E,
                    clearLeagueChampionPreference: C,
                    onLoadLeagueOfLegendsChampions: Ze.a
                }, e)
            })(tt),
            it = n("Vr3l"),
            at = n.n(it),
            rt = "overwatch-hero-filter-item-selector",
            ot = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = a.n.logger.withCategory("overwatch-filter"), t.getSections = function() {
                        var e = [],
                            n = [],
                            i = [],
                            r = [];
                        if (t.state.content) {
                            var o = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                s = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null,
                                l = function(e, n) {
                                    t.state.selected && t.state.selected.character === e.character || o && !e.display_name.match(o) && s && !e.display_name.match(s) || n.push(t.renderCharacter(e, function() {
                                        return t.onSelectCharacter(e)
                                    }))
                                };
                            t.state.content[0].Offense.forEach(function(t) {
                                return l(t, e)
                            }), t.state.content[1].Defense.forEach(function(e) {
                                return l(e, n)
                            }), t.state.content[2].Tank.forEach(function(e) {
                                return l(e, i)
                            }), t.state.content[3].Support.forEach(function(e) {
                                return l(e, r)
                            })
                        }
                        var d = [];
                        return e.length > 0 && d.push({
                            title: Object(a.d)("Offense", "OverwatchFilter"),
                            items: e
                        }), n.length > 0 && d.push({
                            title: Object(a.d)("Defense", "OverwatchFilter"),
                            items: n
                        }), i.length > 0 && d.push({
                            title: Object(a.d)("Tank", "OverwatchFilter"),
                            items: i
                        }), r.length > 0 && d.push({
                            title: Object(a.d)("Support", "OverwatchFilter"),
                            items: r
                        }), d
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            return t.renderCharacter(t.state.selected, function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.clearOverwatchCharacterPreference()
                                })
                            }, !0)
                        }
                    }, t.loadData = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, Object(We.d)()];
                                    case 2:
                                        return e = i.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }, function() {
                                            n.state.content && n.props.overwatchCharacter && n.state.content.forEach(function(e) {
                                                Object.keys(e).forEach(function(t) {
                                                    e[t].forEach(function(e) {
                                                        n.props.overwatchCharacter === e.character && n.setState({
                                                            selected: e
                                                        })
                                                    })
                                                })
                                            })
                                        }), [3, 4];
                                    case 3:
                                        return t = i.sent(), this.logger.error(t, "Failed to load Overwatch character data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelectCharacter = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.updateOverwatchCharacterPreference(e.character)
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), x.createElement(se, {
                            key: e.character,
                            name: e.display_name,
                            onClick: t,
                            spriteAsset: at.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_width,
                            spriteHeight: e.image_height,
                            withClose: n,
                            "data-test-selector": rt
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return x.createElement(oe, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(a.d)("Search by Hero", "OverwatchFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(a.d)("Selected Hero", "OverwatchFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(a.d)("Hero", "OverwatchFilter"),
                        "data-test-selector": "overwatch-hero-filter-selector"
                    })
                }, t
            }(x.Component);
        var st, lt = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    overwatchCharacter: P(e)
                }
            }, function(e) {
                return Object(ne.b)({
                    updateOverwatchCharacterPreference: w,
                    clearOverwatchCharacterPreference: D
                }, e)
            })(ot),
            dt = n("qw9S");
        ! function(e) {
            e.Hearthstone = "hearthstone", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
        }(st || (st = {}));
        var ct = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getAdditionalFilters = function() {
                        var e = [];
                        if (n.props.match.params.encodedLanguage || e.push(x.createElement(G.a, null)), n.state.directoryType === ee.a.Communities) return e;
                        switch (decodeURI(n.props.match.params.encodedCommunityName).toLowerCase()) {
                            case st.Hearthstone:
                                e.push(x.createElement($e, null), x.createElement(Xe, null));
                                break;
                            case st.League:
                                e.push(x.createElement(nt, null));
                                break;
                            case st.Overwatch:
                                e.push(x.createElement(lt, null));
                                break;
                            case st.CSGO:
                                e.push(x.createElement(ce, null))
                        }
                        return e
                    }, n.styleFilters = function() {
                        return n.getAdditionalFilters().map(function(e, t) {
                            return x.createElement(re._2, {
                                margin: {
                                    right: 1
                                },
                                key: t
                            }, e)
                        })
                    }, n.onResize = function(e) {
                        n.setState({
                            directoryWidth: e
                        })
                    }, n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(Y.b.directory).length && Q.a.display(Y.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, n.state = {
                        directoryType: te(t.match.path),
                        directoryWidth: -1,
                        numSlotsAdded: 0,
                        showAnimatedThumbnails: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    Y.g.addListener(Y.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.onRender(), "irl" === decodeURIComponent(this.props.match.params.encodedCommunityName).toLowerCase() ? [3, 2] : [4, a.n.experiments.getAssignment("TWILIGHT_ANIMATED_DIRECTORY_THUMBNAILS")];
                                case 1:
                                    "experiment" === e.sent() && this.setState({
                                        showAnimatedThumbnails: !0
                                    }), e.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.match.path !== e.match.path && this.setState({
                        directoryType: te(e.match.path)
                    })
                }, t.prototype.componentWillUnmount = function() {
                    Y.g.removeListener(Y.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory) return x.createElement(re._2, {
                        margin: 2
                    }, x.createElement(re._4, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return x.createElement(B.a, {
                        message: Object(a.d)("Error loading data.", "DirectoryGamePage")
                    });
                    if (!this.props.data.directory) return x.createElement(B.a, {
                        message: Object(a.d)("Game does not exist", "DirectoryGamePage")
                    });
                    var t = null,
                        n = null;
                    this.props.match.params.encodedLanguage ? n = x.createElement(Ue.a, {
                        languageCode: this.props.match.params.encodedLanguage
                    }) : "en" !== this.props.languageCode && (n = x.createElement(re._2, {
                        margin: {
                            bottom: 2
                        }
                    }, x.createElement(re._35, {
                        type: re._40.H4,
                        color: re.I.Alt2,
                        fontSize: re.R.Size5,
                        transform: re._39.Uppercase,
                        "data-a-target": "international-section-header"
                    }, Object(a.d)("All Channels", "DirectoryInternationalSection"))), t = x.createElement(Ge, {
                        directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        directoryType: te(this.props.match.path),
                        directoryWidth: this.state.directoryWidth,
                        languageCode: this.props.languageCode
                    }));
                    var i, r = this.props.data.directory.streams.edges.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(t, n) {
                        var i = t.node;
                        return x.createElement(Oe.b, {
                            directoryName: decodeURIComponent(e.props.match.params.encodedCommunityName),
                            directoryType: e.state.directoryType,
                            streamIndex: n,
                            streamNode: i,
                            key: i.id,
                            showPreview: e.state.showAnimatedThumbnails && !!i.broadcaster && !!i.broadcaster.roles && !!i.broadcaster.roles.isPartner
                        })
                    });
                    if (r.length > 0) {
                        var o = !this.props.data.loading && !this.props.data.error && "" !== this.props.data.directory.id && !!this.props.data.directory.streams.pageInfo.hasNextPage;
                        i = x.createElement(Ae, {
                            directoryName: this.props.data.directory.displayName,
                            communityName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                            canLoadMore: o,
                            loadMore: this.props.loadMore
                        }, r)
                    } else {
                        var s = Object(a.d)("There are currently no channels streaming to this community", "DirectoryGamePage");
                        this.state.directoryType === ee.a.Games && (s = Object(a.d)("No live channels for this game", "DirectoryGamePage")), i = x.createElement(re._2, {
                            display: re.N.Flex,
                            alignItems: re.c.Center,
                            justifyContent: re._1.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, x.createElement(re._35, {
                            color: re.I.Alt2,
                            fontSize: re.R.Size4,
                            italic: !0
                        }, s))
                    }
                    return x.createElement(re._2, null, x.createElement(re._2, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, x.createElement(J.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: Y.d.directory,
                        slotID: Y.b.directory.banner,
                        adSize: Y.c.directory.banner,
                        targeting: {
                            pagetype: Y.a.games,
                            game: this.props.data.directory.displayName
                        },
                        autoEnable: !1
                    }), t, x.createElement(re._2, {
                        margin: {
                            bottom: 2
                        },
                        display: re.N.Flex,
                        flexDirection: re.P.Row
                    }, this.styleFilters()), n, i, x.createElement(H.a, {
                        onResize: this.onResize
                    })), this.props.firstPageLoaded && x.createElement(Z.a, {
                        gameID: this.props.data.directory.id
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || (this.props.latencyTracking.reportInteractive(), this.props.data.directory && a.n.setPageTitle(this.props.data.directory.displayName))
                }, t = i.__decorate([Object(W.a)(dt, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName),
                                limit: 30,
                                languages: e.match.params.encodedLanguage && [e.match.params.encodedLanguage] || e.languagePreferences,
                                type: e.match.path.startsWith("/communities") ? "COMMUNITY" : "GAME",
                                filters: {
                                    hearthstoneBroadcasterHeroName: "",
                                    hearthstoneBroadcasterHeroClass: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === st.Hearthstone ? e.hearthstoneClass : "",
                                    hearthstoneGameMode: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === st.Hearthstone ? e.hearthstoneMode : "",
                                    overwatchBroadcasterCharacter: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === st.Overwatch ? e.overwatchCharacter : "",
                                    leagueOfLegendsChampionID: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === st.League && e.leagueChampion ? e.leagueChampion.toString() : "",
                                    counterStrikeMap: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === st.CSGO ? e.csgoMap : "",
                                    counterStrikeSkill: ""
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: dt,
                                    variables: i.__assign({}, e.data.variables, {
                                        cursor: e.data.directory.streams.edges[e.data.directory.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            directory: i.__assign({}, n.directory, {
                                                streams: i.__assign({}, n.directory.streams, {
                                                    edges: Object(q.b)(e.directory.streams.edges, n.directory.streams.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(X.d)("DirectoryGamePage", {
                    destination: $.a.DirectoryGameIndex
                }), Object(z.a)({
                    location: K.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: e.match.path.startsWith("/communities") ? K.PageviewDirectoryContentType.Communities : K.PageviewDirectoryContentType.Games,
                            game: e.data.directory ? e.data.directory.displayName : null
                        }
                    }
                })], t)
            }(x.Component),
            ut = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = ct;
                    return x.createElement(e, i.__assign({
                        csgoMap: this.state.csgoMap,
                        hearthstoneClass: this.state.hearthstoneClass,
                        hearthstoneMode: this.state.hearthstoneMode,
                        leagueChampion: this.state.leagueChampion,
                        overwatchCharacter: this.state.overwatchCharacter
                    }, this.props))
                }, t
            }(x.Component);
        var mt = Object(U.b)(function(e) {
                return {
                    languagePreferences: Object(V.a)(e),
                    sideNavExpanded: e.ui.sideNavExpanded,
                    languageCode: e.session.languageCode,
                    firstPageLoaded: e.session.firstPageLoaded,
                    csgoMap: A(e),
                    hearthstoneClass: j(e),
                    hearthstoneMode: M(e),
                    leagueChampion: R(e),
                    overwatchCharacter: P(e)
                }
            })(ut),
            pt = n("CIox"),
            ht = "header.DIRECTORY_HEADER_EDIT_ENABLED",
            gt = "header.DIRECTORY_HEADER_EDIT_DISABLED";

        function vt() {
            return {
                type: ht
            }
        }

        function ft() {
            return {
                type: gt
            }
        }

        function yt(e) {
            return e.directoryHeader.isEditingEnabled
        }
        a.n.store.registerReducer("directoryHeader", function(e, t) {
            switch (void 0 === e && (e = {
                isEditingEnabled: !1
            }), t.type) {
                case ht:
                    return i.__assign({}, e, {
                        isEditingEnabled: !0
                    });
                case gt:
                    return i.__assign({}, e, {
                        isEditingEnabled: !1
                    });
                default:
                    return e
            }
        });
        var kt, bt = n("V5M+"),
            _t = n("9u8h"),
            St = n("5eRk");

        function Nt() {
            var e = this;
            return Object(W.a)(St, {
                props: function(t) {
                    return {
                        createUploadURLMutation: function(n, a, r) {
                            return i.__awaiter(e, void 0, void 0, function() {
                                var e;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return t.mutate ? [4, t.mutate({
                                                variables: {
                                                    input: {
                                                        communityID: n,
                                                        imageType: a,
                                                        imageFormat: r.substring(r.indexOf("/") + 1).toUpperCase()
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return [2, {
                                                url: (e = i.sent()).data.createCommunityImageUploadURL.url,
                                                uploadID: e.data.createCommunityImageUploadURL.uploadID
                                            }];
                                        case 2:
                                            throw new Error("Unable to upload image")
                                    }
                                })
                            })
                        }
                    }
                }
            })
        }! function(e) {
            e.AVATAR = "AVATAR", e.BANNER = "BANNER"
        }(kt || (kt = {}));
        var Et = "directory-avatar-edit-menu",
            Ct = "directory-avatar-overlay",
            wt = "directory-avatar-remover",
            Ot = "directory-avatar-uploader",
            Dt = "directory-banner-edit-menu",
            Tt = "directory-banner-overlay",
            Ft = "directory-banner-remover",
            It = "directory-banner-uploader",
            Lt = "https://static-cdn.jtvnw.net/community-images/defaults/avatar-285x380.png",
            At = "https://static-cdn.jtvnw.net/community-images/defaults/banner-1200x180.png",
            Rt = function() {
                return Object(a.d)("Upload new image", "DirectoryHeader")
            },
            Pt = function() {
                return Object(a.d)("Remove", "DirectoryHeader")
            },
            jt = function(e) {
                return "https://api.twitch.tv/kraken/communities/" + e + "/images/avatar"
            },
            Mt = function(e) {
                return "https://api.twitch.tv/kraken/communities/" + e + "/images/cover"
            },
            xt = n("+8VM"),
            Ut = n("66ch"),
            Vt = (n("wB6A"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return x.createElement(re._25, {
                        className: "image-uploader-modal",
                        background: re.m.Base
                    }, x.createElement(Ut.a, i.__assign({}, this.props)), x.createElement(xt.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(x.Component));
        var Gt = Object(U.b)(null, function(e) {
                return Object(ne.b)({
                    onClose: bt.c
                }, e)
            })(Vt),
            Bt = n("TFaR"),
            Ht = n("HZww"),
            Wt = n("SiVO"),
            zt = n("wXwV"),
            qt = 1e4,
            $t = function() {
                return function(e, t) {
                    var n = this;
                    this.getUploadURL = e, this.onFinishUploading = t, this.uploadFile = function(e) {
                        return new Promise(function(t, r) {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var n, o, s, l, d, c = this;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 3, , 4]), [4, this.getUploadURL(e)];
                                        case 1:
                                            return n = i.sent(), o = n.url, s = n.uploadID, [4, fetch(o, {
                                                body: e,
                                                method: "PUT"
                                            })];
                                        case 2:
                                            return (l = i.sent()).status > 300 && r(new Error(Object(zt.e)(l.status))), this.unsubscribe = a.j.subscribe({
                                                topic: Object(Ht.q)(s),
                                                success: function() {
                                                    c.timeoutID = setTimeout(function() {
                                                        c.unsubscribe(), r(new Error(Object(zt.d)()))
                                                    }, qt)
                                                },
                                                failure: function() {
                                                    clearTimeout(c.timeoutID), r(new Error(Object(zt.d)()))
                                                },
                                                onMessage: function(e) {
                                                    if (e.upload_id === s) {
                                                        switch (clearTimeout(c.timeoutID), e.status) {
                                                            case Bt.a.POSTPROCESS_COMPLETE:
                                                                c.onFinishUploading && c.onFinishUploading(), t();
                                                                break;
                                                            case Bt.a.WIDTH_VALIDATION_FAILED:
                                                            case Bt.a.HEIGHT_VALIDATION_FAILED:
                                                                r(new Error(Object(zt.c)()));
                                                                break;
                                                            case Bt.a.FILE_SIZE_VALIDATION_FAILED:
                                                                r(new Error(Object(zt.a)()));
                                                                break;
                                                            case Bt.a.IS_IMAGE_VALIDATION_FAILED:
                                                                r(new Error(Object(zt.b)(Wt.b)));
                                                                break;
                                                            default:
                                                                r(new Error(Object(zt.d)()))
                                                        }
                                                        c.unsubscribe && c.unsubscribe()
                                                    }
                                                }
                                            }), [3, 4];
                                        case 3:
                                            return d = i.sent(), a.i.error(d, "unable to upload image"), r(new Error(Object(zt.d)())), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }
                }
            }(),
            Qt = n("YADZ"),
            Kt = (n("IMj1"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingAvatar: !1
                    }, t.renderAvatarEditMode = function() {
                        return t.props.headerEditMode ? x.createElement(re._2, null, x.createElement("div", {
                            onClick: t.onAvatarClick
                        }, x.createElement(re._2, {
                            "data-test-selector": Ct,
                            className: "directory-header__overlay",
                            flexDirection: re.P.Column,
                            textAlign: re._36.Center,
                            display: re.N.Flex,
                            position: re._9.Absolute,
                            alignItems: re.c.Center,
                            justifyContent: re._1.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, x.createElement(re._25, {
                            color: re.I.Overlay
                        }, x.createElement(re._15, {
                            asset: re._16.Edit
                        })), x.createElement(re._35, {
                            color: re.I.Overlay,
                            type: re._40.P
                        }, Object(a.d)("Change avatar", "DirectoryHeader")))), t.renderAvatarEditMenu()) : null
                    }, t.renderAvatarEditMenu = function() {
                        return t.state.isEditingAvatar ? x.createElement(re.p, {
                            "data-test-selector": Et,
                            direction: re.q.BottomLeft,
                            show: !0
                        }, x.createElement(re._0, {
                            "data-test-selector": Ot,
                            onClick: t.onAvatarUploadClick
                        }, x.createElement(re._2, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Rt())), x.createElement(re._0, {
                            "data-test-selector": wt,
                            onClick: t.onAvatarDeleteClick
                        }, x.createElement(re._2, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Pt()))) : null
                    }, t.trackAvatarEdit = function(e) {
                        a.n.tracking.track(K.SpadeEventType.CommunityEdit, {
                            community_id: t.props.data.directory.id,
                            name: t.props.data.directory.name,
                            is_official: !1,
                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles.isStaff,
                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles.isSiteAdmin,
                            edit_type: "avatar",
                            old_value: t.props.data.directory.avatarURL,
                            new_value: e || null
                        })
                    }, t.onAvatarClick = function() {
                        t.setState({
                            isEditingAvatar: !t.state.isEditingAvatar
                        })
                    }, t.onAvatarUploadClick = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                return this.props.data && this.props.data.directory && this.props.data.directory.id && this.props.createUploadURLMutation ? (e = new $t(this.getAvatarUploadURL, this.onAvatarDoneUploading), t = {
                                    imageDimensions: "600x800",
                                    maxFileSizeMegabytes: 1,
                                    isRequiredImageDimensions: !0,
                                    provider: e
                                }, this.props.onShowModal(Gt, t), [2]) : [2, null]
                            })
                        })
                    }, t.onAvatarDeleteClick = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, _t.a.delete(jt(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackAvatarEdit(), e = function(e) {
                                            return e.directory.avatarURL = Lt, e
                                        }, Object(q.d)(Qt, {
                                            name: this.props.directoryName,
                                            type: Object(Pe.a)(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.getAvatarUploadURL = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, a;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = 0, n = Wt.b, i.label = 1;
                                    case 1:
                                        return t < n.length ? (a = n[t], e.type !== a ? [3, 3] : [4, this.props.createUploadURLMutation(this.props.data.directory.id, kt.AVATAR, a)]) : [3, 4];
                                    case 2:
                                        return [2, i.sent()];
                                    case 3:
                                        return t++, [3, 1];
                                    case 4:
                                        throw new Error(Object(zt.b)(Wt.b))
                                }
                            })
                        })
                    }, t.onAvatarDoneUploading = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                return this.props.data.refetch(), this.props.onCloseModal(), [2]
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading || this.props.data.error || !this.props.data.directory ? x.createElement(re._8, {
                        width: 80,
                        height: 112,
                        overlay: !0
                    }) : x.createElement(re.C, {
                        alt: "",
                        src: this.props.data.directory.avatarURL,
                        size: re.D.Size8,
                        aspect: re.k.BoxArt
                    }), x.createElement(re._2, {
                        className: "directory-header__avatar",
                        margin: {
                            left: 3,
                            bottom: 1
                        },
                        position: re._9.Absolute,
                        attachBottom: !0
                    }, e, this.renderAvatarEditMode())
                }, t = i.__decorate([Object(W.a)(Qt, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Object(Pe.a)(e.directoryType)
                            }
                        }
                    }
                }), Nt(), Object(X.d)("DirectoryAvatar", {
                    autoReportInteractive: !0
                })], t)
            }(x.Component));
        var Jt = Object(U.b)(function(e) {
                return {
                    headerEditMode: e.directoryHeader.isEditingEnabled
                }
            }, function(e) {
                return Object(ne.b)({
                    onCloseModal: bt.c,
                    onShowModal: bt.d
                }, e)
            })(Kt),
            Yt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if ("GAMES" !== this.props.directoryType) return null;
                    var e, t = null;
                    if ("irl" === this.props.directoryName.toLowerCase()) {
                        var n, i = Object(a.d)("New to IRL?", "DirectoryHeader"),
                            r = Object(a.d)("Learn More", "DirectoryHeader");
                        n = x.createElement("a", {
                            target: "_blank",
                            href: "http://link.twitch.tv/irldirectorytooltip",
                            className: "directory-header__link",
                            rel: "noopener noreferrer"
                        }, r), e = x.createElement("span", null, i, " ", n)
                    } else "always on" === this.props.directoryName.toLowerCase() && (e = Object(a.d)("24/7 streaming from your favorite brands. Watch together.", "DirectoryHeader"));
                    return e && (t = x.createElement(re._35, {
                        color: re.I.Overlay,
                        type: re._40.P,
                        "data-test-selector": "directory-game-descriptor"
                    }, e)), t
                }, t
            }(x.Component),
            Xt = n("8UKc"),
            Zt = (n("zSAx"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingBanner: !1
                    }, t.renderDropsAvailable = function() {
                        if (t.props.data.directory && t.props.data.directory.activeDropCampaigns && t.props.data.directory.activeDropCampaigns.some(function(e) {
                                return 0 === e.applicableChannels.length
                            })) return x.createElement(re._35, {
                            color: re.I.Overlay
                        }, Object(a.d)("Offers in-game Drops. <x:link>Learn More.</x:link>", {
                            "x:link": function(e) {
                                return x.createElement("a", {
                                    href: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops",
                                    className: "directory-header__link",
                                    target: "_blank"
                                }, e)
                            }
                        }, "drops"))
                    }, t.renderBannerEditMode = function() {
                        return t.props.headerEditMode ? x.createElement(re._2, null, x.createElement("div", {
                            onClick: t.onBannerClick
                        }, x.createElement(re._2, {
                            "data-test-selector": Tt,
                            className: "directory-header__overlay",
                            flexDirection: re.P.Column,
                            display: re.N.Flex,
                            position: re._9.Absolute,
                            alignItems: re.c.Center,
                            justifyContent: re._1.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, x.createElement(re._2, {
                            position: re._9.Relative
                        }, x.createElement(re._25, {
                            color: re.I.Overlay,
                            textAlign: re._36.Center
                        }, x.createElement(re._15, {
                            asset: re._16.Edit
                        })), x.createElement(re._35, {
                            color: re.I.Overlay,
                            type: re._40.P
                        }, Object(a.d)("Change cover image", "DirectoryHeader")), t.renderBannerEditMenu()))), x.createElement(re._2, {
                            alignContent: re.b.End,
                            position: re._9.Absolute,
                            textAlign: re._36.Right,
                            margin: 3,
                            attachBottom: !0,
                            attachRight: !0
                        }, x.createElement(re.u, {
                            icon: re._16.Check,
                            onClick: t.onDoneClick
                        }, Object(a.d)("Done", "DirectoryHeader")))) : null
                    }, t.renderBannerEditMenu = function() {
                        return t.state.isEditingBanner ? x.createElement(re.p, {
                            "data-test-selector": Dt,
                            direction: re.q.BottomCenter,
                            show: !0
                        }, x.createElement(re._0, {
                            "data-test-selector": It,
                            onClick: t.onBannerUploadClick
                        }, x.createElement(re._2, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Rt())), x.createElement(re._0, {
                            "data-test-selector": Ft,
                            onClick: t.onBannerDeleteClick
                        }, x.createElement(re._2, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Pt()))) : null
                    }, t.trackBannerEdit = function(e) {
                        t.props.data.directory && a.n.tracking.track(K.SpadeEventType.CommunityEdit, {
                            community_id: t.props.data.directory.id,
                            name: t.props.data.directory.name,
                            is_official: !1,
                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles.isStaff,
                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles.isSiteAdmin,
                            edit_type: "banner",
                            old_value: t.props.data.directory.coverURL,
                            new_value: e || null
                        })
                    }, t.onDoneClick = function() {
                        t.props.onDisableDirectoryHeaderEdit()
                    }, t.onBannerClick = function() {
                        t.setState({
                            isEditingBanner: !t.state.isEditingBanner
                        })
                    }, t.onBannerUploadClick = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                return this.props.data.directory && this.props.data.directory.id && this.props.createUploadURLMutation ? (e = new $t(this.getBannerUploadURL, this.onBannerDoneUploading), t = {
                                    imageDimensions: "600x800",
                                    maxFileSizeMegabytes: 1,
                                    isRequiredImageDimensions: !0,
                                    provider: e
                                }, this.props.onShowModal(Gt, t), [2]) : [2, null]
                            })
                        })
                    }, t.onBannerDeleteClick = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.data.directory ? [4, _t.a.delete(Mt(this.props.data.directory.id))] : [2];
                                    case 1:
                                        return t.sent(), this.trackBannerEdit(), e = function(e) {
                                            return e.directory && (e.directory.coverURL = At), e
                                        }, Object(q.d)(Xt, {
                                            name: this.props.directoryName,
                                            type: Object(Pe.a)(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.getBannerUploadURL = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, a;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = 0, n = Wt.b, i.label = 1;
                                    case 1:
                                        return t < n.length ? (a = n[t], e.type !== a ? [3, 3] : [4, this.props.createUploadURLMutation(this.props.data.directory.id, kt.BANNER, a)]) : [3, 4];
                                    case 2:
                                        return [2, i.sent()];
                                    case 3:
                                        return t++, [3, 1];
                                    case 4:
                                        throw new Error(Object(zt.b)(Wt.b))
                                }
                            })
                        })
                    }, t.onBannerDoneUploading = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                return this.props.data.refetch(), this.props.onCloseModal(), [2]
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e;
                    if (this.props.data.directory) {
                        var t = Object(a.d)("{followerCount,number} Followers", {
                                followerCount: this.props.data.directory.followersCount
                            }, "DirectoryHeader"),
                            n = Object(a.d)("{viewerCount,number} Viewers", {
                                viewerCount: this.props.data.directory.viewersCount
                            }, "DirectoryHeader");
                        e = x.createElement(re._35, {
                            color: re.I.Overlay,
                            type: re._40.P
                        }, t, " · ", n)
                    } else e = x.createElement(re._8, {
                        width: 200,
                        height: 20,
                        overlay: !0
                    });
                    var r = !1,
                        o = {};
                    this.props.data.directory && (this.props.data.directory.coverURL ? o = {
                        backgroundImage: "url(" + this.props.data.directory.coverURL + ")"
                    } : this.props.data.directory.streams && (r = this.props.data.directory.streams.edges.some(function(e) {
                        var t = e.node;
                        return !(!t || !t.previewImageURL) && (o = {
                            backgroundImage: "url(" + t.previewImageURL + ")"
                        }, !0)
                    })));
                    var s = me("directory-header__banner", {
                        "directory-header__banner--blur": r
                    });
                    return x.createElement(re._2, {
                        position: re._9.Relative,
                        overflow: re._5.Hidden
                    }, x.createElement("div", {
                        className: s,
                        style: o,
                        "data-test-selector": "directory-banner-image"
                    }), x.createElement(re._2, {
                        className: "directory-header__title",
                        position: re._9.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, x.createElement(re._35, {
                        color: re.I.Overlay,
                        type: re._40.H2
                    }, this.props.data && this.props.data.directory && this.props.data.directory.displayName), x.createElement(Yt, i.__assign({}, this.props)), this.renderDropsAvailable(), e), this.renderBannerEditMode())
                }, t = i.__decorate([Object(W.a)(Xt, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Object(Pe.a)(e.directoryType)
                            }
                        }
                    }
                }), Nt(), Object(X.d)("DirectoryBanner", {
                    autoReportInteractive: !0
                })], t)
            }(x.Component));
        var en = Object(U.b)(function(e) {
                return {
                    headerEditMode: e.directoryHeader.isEditingEnabled
                }
            }, function(e) {
                return Object(ne.b)({
                    onCloseModal: bt.c,
                    onDisableDirectoryHeaderEdit: ft,
                    onShowModal: bt.d
                }, e)
            })(Zt),
            tn = n("F8kA"),
            nn = n("+xm8"),
            an = n("f2i/"),
            rn = n("qs/O"),
            on = n("odW7"),
            sn = n("d+bE"),
            ln = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isFollowing: !1
                    }, t.communityDataLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.community
                    }, t.toggleFollowing = function() {
                        t.state.isFollowing ? t.unfollowChannel() : t.followChannel(), t.setState(function(e) {
                            return {
                                isFollowing: !e.isFollowing
                            }
                        })
                    }, t.trackResponse = function(e) {
                        if (t.props.data) {
                            var n = "follow" === e ? K.SpadeEventType.CommunityFollow : K.SpadeEventType.CommunityUnfollow;
                            a.n.tracking.track(n, {
                                community_id: t.props.data.community.id,
                                name: t.props.data.community.name,
                                is_official: !1,
                                user_id: t.props.data.currentUser && t.props.data.currentUser.id
                            })
                        }
                    }, t.followChannel = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a = this;
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.props.followCommunity && this.props.data ? (e = i.__assign({}, Object(q.a)({
                                            communityID: this.props.data.community.id
                                        }), {
                                            optimisticResponse: {
                                                followCommunity: {
                                                    __typename: "FollowCommunityPayload",
                                                    community: {
                                                        self: {
                                                            follow: {
                                                                followedAt: (new Date).toISOString(),
                                                                __typename: "CommunityFollow"
                                                            },
                                                            __typename: "CommunitySelfConnection"
                                                        },
                                                        __typename: "Community"
                                                    }
                                                }
                                            }
                                        }), [4, this.props.followCommunity(e)]) : [2];
                                    case 1:
                                        return t = r.sent(), n = function(e) {
                                            return a.trackResponse("follow"), e.community.self.follow && (e.community.self.follow.followedAt = t.data.followCommunity.community.self.follow.followedAt), e
                                        }, Object(q.d)(rn, {
                                            name: this.props.directoryName
                                        }, n), [2]
                                }
                            })
                        })
                    }, t.unfollowChannel = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.props.unfollowCommunity && this.props.data ? (e = i.__assign({}, Object(q.a)({
                                            communityID: this.props.data.community.id
                                        }), {
                                            optimisticResponse: {
                                                unfollowCommunity: {
                                                    __typename: "UnfollowCommunityPayload",
                                                    follow: null
                                                }
                                            }
                                        }), [4, this.props.unfollowCommunity(e)]) : [2];
                                    case 1:
                                        return a.sent(), t = function(e) {
                                            return n.trackResponse("unfollow"), e.community.self.follow = null, e
                                        }, Object(q.d)(rn, {
                                            name: this.props.directoryName
                                        }, t), [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && !e.data.loading && !e.data.error && e.data.community && this.setState({
                        isFollowing: e.data.community.self && null !== e.data.community.self.follow
                    })
                }, t.prototype.render = function() {
                    var e = Object(a.d)("Follow", "DirectoryFollowButton");
                    return this.props.isLoggedIn ? !this.props.data || this.props.data.loading ? x.createElement(re._8, {
                        width: 70,
                        height: 30
                    }) : this.communityDataLoaded() ? this.state.isFollowing ? x.createElement(re._2, {
                        display: re.N.Flex,
                        margin: {
                            left: 1
                        },
                        className: "directory-follow-btn"
                    }, x.createElement(re.v, {
                        ariaLabel: Object(a.d)("Unfollow", "DirectoryFollowButton"),
                        onClick: this.toggleFollowing,
                        "data-a-target": "directory-unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: re._16.Heart,
                        statusAlertIcon: re._16.Unheart
                    })) : x.createElement(re.u, i.__assign({
                        ariaLabel: e,
                        "data-a-target": "directory-follow-button",
                        "data-test-selector": "follow-button",
                        icon: re._16.Heart,
                        onClick: this.toggleFollowing
                    }, Object(re._53)(this.props)), e) : null : x.createElement(re.u, {
                        ariaLabel: e,
                        icon: re._16.Heart,
                        onClick: this.props.login,
                        "data-a-target": "directory-follow-button"
                    }, e)
                }, t.prototype.reportInteractive = function() {
                    this.props.isLoggedIn && this.props.directoryName && !this.communityDataLoaded() || this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(W.a)(rn, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.directoryName
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.directoryName
                    }
                }), Object(W.a)(on, {
                    name: "followCommunity"
                }), Object(W.a)(sn, {
                    name: "unfollowCommunity"
                }), Object(X.d)("DirectoryFollowButton")], t)
            }(x.Component);
        var dn = Object(U.b)(function(e) {
                return {
                    isLoggedIn: Object(ye.d)(e)
                }
            }, function(e) {
                return Object(ne.b)({
                    login: function() {
                        return Object(an.f)(nn.a.DirectoryFollowButton)
                    }
                }, e)
            })(ln),
            cn = n("jetF"),
            un = n("czpb"),
            mn = n("oSFp"),
            pn = n("LjAQ"),
            hn = n("mw/a"),
            gn = n("3zLD"),
            vn = (n("vxr0"), n("0zzo")),
            fn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tosBanCommunity = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.tosBanCommunity ? (e = i.__assign({}, Object(q.a)({
                                            communityID: this.props.communityID
                                        }), {
                                            optimisticResponse: {
                                                tosBanCommunity: {
                                                    community: {
                                                        id: this.props.communityID,
                                                        __typename: "Community"
                                                    },
                                                    __typename: "TosBanCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.tosBanCommunity(e)]) : [2];
                                    case 1:
                                        return t.sent(), this.props.onCloseModal(), [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return x.createElement(re.W, {
                        position: re._9.Relative
                    }, x.createElement(re._25, {
                        background: re.m.Base,
                        className: "community-ban-modal"
                    }, x.createElement(re._2, {
                        padding: 2
                    }, x.createElement(re._2, {
                        margin: {
                            bottom: 2
                        }
                    }, x.createElement(re._35, {
                        type: re._40.H4
                    }, Object(a.d)("Are you sure you want to ban {name}?", {
                        name: this.props.communityName
                    }, "CommunityBanModal"))), x.createElement(re._25, {
                        borderTop: !0
                    }, x.createElement(re._2, {
                        padding: {
                            top: 2
                        },
                        textAlign: re._36.Center
                    }, x.createElement(re._2, {
                        display: re.N.Inline,
                        margin: {
                            x: 1
                        }
                    }, x.createElement(re.u, {
                        type: re.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(a.d)("Cancel", "CommunityBanModal"))), x.createElement(re._2, {
                        display: re.N.Inline,
                        margin: {
                            x: 1
                        }
                    }, x.createElement(re.u, {
                        onClick: this.tosBanCommunity,
                        "data-test-selector": "ban-button"
                    }, Object(a.d)("Ban", "CommunityBanModal")))))), x.createElement(xt.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(x.Component),
            yn = Object(gn.compose)(Object(W.a)(vn, {
                name: "tosBanCommunity"
            }))(fn);
        var kn = Object(U.b)(null, function(e) {
                return Object(ne.b)({
                    onCloseModal: bt.c
                }, e)
            })(yn),
            bn = n("9VER"),
            _n = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingCommunity: !1
                    }, t.openReportModal = function() {
                        t.props.isLoggedIn ? t.props.onShowModal(mn.a, {
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentID: t.props.data.community.id,
                                contentType: hn.a.Community,
                                targetUserID: t.props.data.community.owner.id,
                                extra: t.props.communityName
                            },
                            title: Object(a.d)("Report {communityName}", {
                                communityName: t.props.communityName
                            }, "CommunitiesSettingsCog")
                        }) : t.props.login()
                    }, t.openBanModal = function() {
                        t.props.onShowModal(kn, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName
                        })
                    }, t.onEditModeToggle = function() {
                        t.props.isHeaderEditEnabled ? t.props.onDisableDirectoryHeaderEdit() : (a.n.history.push(Object(Re.a)(t.props.communityName) + "/details"), t.props.onEnableDirectoryHeaderEdit())
                    }, t.handleReportModalClose = function(e) {
                        (e === pn.b.MutationError || e === pn.b.Success) && t.props.history.push("/")
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && this.props.data.error ? null : x.createElement(re._2, {
                        position: re._9.Relative
                    }, x.createElement(cn.a, null, x.createElement(re.v, {
                        ariaLabel: Object(a.d)("Settings", "CommunitiesSettingsCog"),
                        icon: re._16.Gear
                    }), x.createElement(re.p, {
                        direction: re.q.BottomRight,
                        size: re.r.ExtraSmall,
                        offsetX: "0.5rem"
                    }, this.renderModerationInteractable(), this.renderEditInteractable(), x.createElement(re._0, {
                        onClick: this.openReportModal,
                        "data-test-selector": "report-selector"
                    }, x.createElement(re._2, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(a.d)("Report", "CommunitiesSettingsCog"))), this.renderBanInteractable())))
                }, t.prototype.renderEditInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.editing ? null : x.createElement(re._0, {
                        onClick: this.onEditModeToggle,
                        "data-test-selector": "edit-selector"
                    }, x.createElement(re._2, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(a.d)("Edit", "CommunitiesSettingsCog")))
                }, t.prototype.renderModerationInteractable = function() {
                    if (!this.props.data || this.props.data.loading) return null;
                    if (this.props.data.community && !this.props.data.community.self.permissions.banning) return null;
                    var e = this.props.communityName.toLowerCase();
                    return x.createElement(re._0, {
                        linkTo: Object(un.a)("/communities/" + e + "/moderation/log"),
                        "data-test-selector": "moderation-selector"
                    }, x.createElement(re._2, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(a.d)("Moderation", "CommunitiesSettingsCog")))
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.community && this.props.data.community.id && this.props.data && this.props.data.currentUser && this.props.data.currentUser.roles && (this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin) ? x.createElement(re._0, {
                        onClick: this.openBanModal,
                        "data-test-selector": "ban-selector"
                    }, x.createElement(re._2, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(a.d)("Ban", "CommunitiesSettingsCog"))) : null
                }, t = i.__decorate([Object(W.a)(bn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.communityName
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.communityName
                    }
                }), Object(X.d)("SettingsCog", {
                    autoReportInteractive: !0
                })], t)
            }(x.Component);
        var Sn, Nn = Object(U.b)(function(e) {
                return {
                    isHeaderEditEnabled: yt(e),
                    isLoggedIn: Object(ye.d)(e)
                }
            }, function(e) {
                return Object(ne.b)({
                    login: function() {
                        return Object(an.f)(nn.a.ReportChannel)
                    },
                    onShowModal: bt.d,
                    onCloseModal: bt.c,
                    onEnableDirectoryHeaderEdit: vt,
                    onDisableDirectoryHeaderEdit: ft
                }, e)
            })(Object(tn.f)(_n)),
            En = n("/XPz"),
            Cn = n("D88i");
        n("5yZy");
        ! function(e) {
            e[e.DirectoryPage = 0] = "DirectoryPage", e[e.DirectoryVideosPage = 1] = "DirectoryVideosPage", e[e.DirectoryClipsPage = 2] = "DirectoryClipsPage", e[e.DirectoryDetailsPage = 3] = "DirectoryDetailsPage"
        }(Sn || (Sn = {}));
        var wn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return x.createElement(re._2, {
                        className: "directory-tabs"
                    }, x.createElement(re._2, {
                        display: re.N.Flex,
                        justifyContent: re._1.Between,
                        flexWrap: re.Q.NoWrap,
                        fullHeight: !0
                    }, x.createElement(re._2, {
                        display: re.N.Flex,
                        alignItems: re.c.Stretch,
                        flexShrink: 0,
                        flexWrap: re.Q.NoWrap
                    }, this.renderTabs(), this.renderGameDetailsTab()), x.createElement(re._2, {
                        display: re.N.Flex,
                        alignItems: re.c.Center,
                        flexShrink: 0,
                        flexWrap: re.Q.NoWrap,
                        padding: {
                            x: 2
                        }
                    }, this.renderSettingsCog(), this.renderFollowButton())))
                }, t.prototype.renderTabs = function() {
                    var e = this,
                        t = this.props.directoryType === ee.a.Games ? Object(Re.c)(this.props.directoryName) : Object(Re.a)(this.props.directoryName);
                    return this.getDirectoryTabs().map(function(n, i) {
                        var a, r = n.label.replace(/ /g, "-").toLowerCase(),
                            o = me("directory-tabs__item", ((a = {})["directory-tabs__item--first"] = 0 === i, a["directory-tabs__item--selected"] = n.isSelected, a));
                        return x.createElement(re.W, {
                            key: "directory-tabs__item--" + n.label,
                            display: re.N.Flex,
                            alignItems: re.c.Center,
                            flexShrink: 0,
                            "data-a-target": "game-directory-" + r + "-tab"
                        }, x.createElement(tn.a, {
                            className: o,
                            to: "" + t + n.path
                        }, e.renderTabData(n.label)))
                    })
                }, t.prototype.renderTabData = function(e) {
                    return x.createElement(re._2, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: re.N.Flex
                    }, x.createElement(re._35, {
                        type: re._40.Span,
                        fontSize: re.R.Size5
                    }, e))
                }, t.prototype.renderGameDetailsTab = function() {
                    if (this.props.data.loading && !this.props.data.directory) return null;
                    if (this.props.data.error || !this.props.data.directory) return null;
                    if (this.props.data.directory && !this.props.data.directory.product) return null;
                    var e, t = me("directory-tabs__item", ((e = {})["directory-tabs__item--selected"] = this.props.activeTab === Sn.DirectoryDetailsPage, e)),
                        n = Object(a.d)("Game Details", "DirectoryGameTabs"),
                        i = Object(Re.c)(this.props.directoryName) + "/details";
                    return x.createElement(re.W, {
                        display: re.N.Flex,
                        alignItems: re.c.Center,
                        flexShrink: 0
                    }, x.createElement(tn.a, {
                        className: t,
                        to: i
                    }, this.renderTabData(n)))
                }, t.prototype.renderSettingsCog = function() {
                    return this.props.directoryType !== ee.a.Communities ? null : x.createElement(Nn, {
                        communityName: this.props.directoryName
                    })
                }, t.prototype.renderFollowButton = function() {
                    switch (this.props.directoryType) {
                        case ee.a.Communities:
                            return x.createElement(re._2, {
                                margin: {
                                    left: 1
                                }
                            }, x.createElement(dn, {
                                directoryName: this.props.directoryName
                            }));
                        case ee.a.Games:
                            return x.createElement(re._2, {
                                margin: {
                                    left: 1
                                }
                            }, x.createElement(En.a, {
                                gameName: this.props.directoryName,
                                src: "directory"
                            }));
                        default:
                            return null
                    }
                }, t.prototype.getDirectoryTabs = function() {
                    var e = this;
                    return [{
                        label: Object(a.d)("Live Channels", "DirectoryGameTabs"),
                        path: "",
                        isSelected: this.props.activeTab === Sn.DirectoryPage,
                        whitelistDirectories: [ee.a.Communities, ee.a.Games]
                    }, {
                        label: Object(a.d)("Videos", "DirectoryGameTabs"),
                        path: "/videos/all",
                        isSelected: this.props.activeTab === Sn.DirectoryVideosPage,
                        whitelistDirectories: [ee.a.Games]
                    }, {
                        label: Object(a.d)("Clips", "DirectoryGameTabs"),
                        path: "/clips",
                        isSelected: this.props.activeTab === Sn.DirectoryClipsPage,
                        whitelistDirectories: [ee.a.Games]
                    }, {
                        label: Object(a.d)("Details", "DirectoryHeader"),
                        path: "/details",
                        isSelected: this.props.activeTab === Sn.DirectoryDetailsPage,
                        whitelistDirectories: [ee.a.Communities]
                    }].filter(function(t) {
                        return t.whitelistDirectories.includes(e.props.directoryType)
                    })
                }, t = i.__decorate([Object(W.a)(Cn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Object(Pe.a)(e.directoryType)
                            }
                        }
                    }
                }), Object(X.d)("DirectoryGameTabs")], t)
            }(x.Component),
            On = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return x.createElement(re._2, {
                        position: re._9.Relative
                    }, x.createElement(en, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), x.createElement(Jt, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), x.createElement(wn, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName,
                        activeTab: this.props.activeTab
                    }))
                }, t = i.__decorate([Object(X.d)("DirectoryHeader", {
                    autoReportInteractive: !0
                })], t)
            }(x.Component),
            Dn = n("eXld"),
            Tn = n("lfvs"),
            Fn = n("dH4b"),
            In = n("J4ib"),
            Ln = n("QYm2"),
            An = n("2nSg"),
            Rn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        buttonState: re.y.Default,
                        description: "",
                        rules: "",
                        summary: ""
                    }, t.onDescriptionChange = function(e) {
                        t.setState({
                            buttonState: re.y.Default,
                            description: e.target.value
                        })
                    }, t.onRulesChange = function(e) {
                        t.setState({
                            buttonState: re.y.Default,
                            rules: e.target.value
                        })
                    }, t.onSummaryChange = function(e) {
                        t.setState({
                            buttonState: re.y.Default,
                            summary: e.target.value
                        })
                    }, t.onSaveClick = function() {
                        if (t.props.editCommunity && t.props.data) {
                            var e = t.state.description,
                                n = t.state.rules,
                                r = t.state.summary,
                                o = i.__assign({}, Object(q.a)({
                                    communityID: t.props.data.community.id,
                                    description: e,
                                    rules: n,
                                    summary: r
                                }), {
                                    optimisticResponse: {
                                        editCommunity: {
                                            __typename: "EditCommunityPayload",
                                            community: {
                                                description: e,
                                                rules: n,
                                                summary: r,
                                                __typename: "Community"
                                            }
                                        }
                                    }
                                });
                            t.setState({
                                buttonState: re.y.Loading
                            }), t.props.editCommunity(o).then(function(e) {
                                Object(q.d)(Ln, {
                                    name: t.props.communityName
                                }, function(n) {
                                    return ["description", "summary", "rules"].forEach(function(i) {
                                        var r = n.community[i],
                                            o = e.data.editCommunity.community[i];
                                        r !== o && a.n.tracking.track(K.SpadeEventType.CommunityEdit, {
                                            community_id: t.props.data.community.id,
                                            name: t.props.data.community.name,
                                            is_official: !1,
                                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles.isStaff,
                                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles.isSiteAdmin,
                                            edit_type: i,
                                            old_value: r,
                                            new_value: o
                                        })
                                    }), n.community.description = e.data.editCommunity.community.description, n.community.rules = e.data.editCommunity.community.rules, n.community.summary = e.data.editCommunity.community.summary, t.setState({
                                        buttonState: re.y.Success
                                    }), n
                                })
                            })
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.data.loading || e.data.error || !e.data.community || this.setState({
                        description: e.data.community.description,
                        rules: e.data.community.rules,
                        summary: e.data.community.summary
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.props.isHeaderEditEnabled && this.props.onDisableDirectoryHeaderEdit()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? x.createElement(re._46, {
                        childWidth: re._47.Large
                    }, this.renderPlaceholder(), this.renderPlaceholder()) : this.props.data.error ? null : x.createElement(re._46, {
                        childWidth: re._47.Large
                    }, x.createElement(re._2, null, this.renderSummary(), this.renderDetailsPanel({
                        title: Object(In.d)("Description", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.description,
                        onChangeHandler: this.onDescriptionChange
                    })), x.createElement(re._2, null, this.renderDetailsPanel({
                        title: Object(In.d)("Rules", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.rules,
                        onChangeHandler: this.onRulesChange
                    }), this.props.isHeaderEditEnabled ? this.renderSaveButton() : null))
                }, t.prototype.renderDetailsPanel = function(e) {
                    var t = x.createElement(re._49, null, x.createElement(Tn, i.__assign({
                        source: e.data
                    }, Fn.a)));
                    return this.props.isHeaderEditEnabled && (t = x.createElement(re._37, {
                        defaultValue: e.data,
                        onChange: e.onChangeHandler,
                        rows: e.rows || 15,
                        maxLength: e.maxLength
                    })), x.createElement(re._25, {
                        background: re.m.Base,
                        border: !0,
                        margin: {
                            bottom: 2
                        }
                    }, x.createElement(re._25, {
                        borderBottom: !0
                    }, x.createElement(re._2, {
                        padding: 1
                    }, x.createElement(re._35, {
                        transform: re._39.Uppercase,
                        type: re._40.H5
                    }, e.title))), x.createElement(re._2, {
                        padding: 1
                    }, t))
                }, t.prototype.renderSummary = function() {
                    return this.props.isHeaderEditEnabled ? this.renderDetailsPanel({
                        title: Object(In.d)("Summary", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.summary,
                        onChangeHandler: this.onSummaryChange,
                        rows: 5,
                        maxLength: 160
                    }) : null
                }, t.prototype.renderSaveButton = function() {
                    return x.createElement(re._2, {
                        margin: {
                            top: 1
                        },
                        textAlign: re._36.Right
                    }, x.createElement(re.u, {
                        state: this.state.buttonState,
                        onClick: this.onSaveClick,
                        disabled: !this.state.description || !this.state.rules || !this.state.summary,
                        "data-test-selector": "save-button"
                    }, Object(In.d)("Save", "DirectoryCommunityDetailsContent")))
                }, t.prototype.renderPlaceholder = function() {
                    return x.createElement(re._2, null, x.createElement(re._25, {
                        background: re.m.Base,
                        border: !0
                    }, x.createElement(re._25, {
                        borderBottom: !0
                    }, x.createElement(re._2, {
                        padding: 1
                    }, x.createElement(re._8, {
                        lineCount: 6
                    })))))
                }, t = i.__decorate([Object(W.a)(Ln, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.communityName
                            }
                        }
                    }
                }), Object(W.a)(An, {
                    name: "editCommunity"
                }), Object(X.d)("DirectoryCommunityDetailsComponent", {
                    autoReportInteractive: !0
                })], t)
            }(x.Component);
        var Pn = Object(U.b)(function(e) {
                return {
                    isHeaderEditEnabled: yt(e)
                }
            }, function(e) {
                return Object(ne.b)({
                    onDisableDirectoryHeaderEdit: ft
                }, e)
            })(Rn),
            jn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        directoryType: te(t.match.path)
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), a.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    return x.createElement(re._2, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, x.createElement(Pn, {
                        communityName: decodeURIComponent(this.props.match.params.encodedCommunityName)
                    }))
                }, t = i.__decorate([Object(X.d)("DirectoryCommunityDetailsPage", {
                    destination: $.a.DirectoryCommunityDetails
                })], t)
            }(x.Component),
            Mn = n("QAcM"),
            xn = n("5bwi"),
            Un = n("WNmM"),
            Vn = n("TLUY"),
            Gn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.loadMoreTopClips = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                return this.canLoadMore() ? [2, this.props.loadMore()] : [2]
                            })
                        })
                    }, t.canLoadMore = function() {
                        var e = t.props.data;
                        return !e.loading && !e.error && "" !== t.props.gameName && e.game && e.game.clips.pageInfo.hasNextPage
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.game) return x.createElement(re._4, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return x.createElement(B.a, {
                        message: Object(In.d)("Error loading data.", "DirectoryGameClipsContent")
                    });
                    if (this.props.data.game) {
                        var e = Mn.a[this.props.timeFilterValue];
                        return x.createElement(re._2, {
                            padding: {
                                top: 2,
                                bottom: 3,
                                x: 3
                            }
                        }, x.createElement(xn.a, {
                            clips: this.props.data.game.clips.edges.map(function(e) {
                                return e.node
                            }),
                            pageType: Un.b.Game,
                            timeFilterValue: this.props.timeFilterValue,
                            updateTimeFilter: this.props.updateTimeFilter,
                            loadMoreClips: this.loadMoreTopClips,
                            isLoading: !1
                        }), x.createElement(ie.a, {
                            enabled: this.canLoadMore(),
                            key: e,
                            loadMore: this.props.loadMore
                        }))
                    }
                    return x.createElement(B.a, {
                        message: Object(In.d)("Game does not exist", "DirectoryGameClipsContent")
                    })
                }, t = i.__decorate([Object(X.d)("DirectoryGameClipsContent", {
                    autoReportInteractive: !0
                }), Object(W.a)(Vn, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: e.gameName,
                                limit: 20,
                                criteria: {
                                    languages: e.languagePreferences,
                                    filter: Mn.a[e.timeFilterValue]
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: Vn,
                                    variables: i.__assign({}, e.data.variables, {
                                        cursor: e.data.game.clips.edges[e.data.game.clips.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            game: i.__assign({}, n.game, {
                                                clips: i.__assign({}, n.game.clips, {
                                                    edges: Object(q.b)(e.game.clips.edges, n.game.clips.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                })], t)
            }(x.Component);
        var Bn = Object(U.b)(function(e) {
                return {
                    languagePreferences: Object(V.a)(e)
                }
            })(Gn),
            Hn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateTimeFilter = function(e) {
                        n.setState({
                            timeFilterValue: e
                        })
                    }, n.state = {
                        directoryType: te(t.match.path),
                        timeFilterValue: Mn.b.Day
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), a.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    return x.createElement(Bn, {
                        gameName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        updateTimeFilter: this.updateTimeFilter,
                        timeFilterValue: this.state.timeFilterValue
                    })
                }, t = i.__decorate([Object(X.d)("DirectoryGameClipsPage", {
                    destination: $.a.DirectoryGameClips
                }), Object(z.a)({
                    location: K.PageviewLocation.ClipsGame
                })], t)
            }(x.Component),
            Wn = n("OAwv"),
            zn = n("68hr"),
            qn = n("oAfo"),
            $n = n("4Tv+"),
            Qn = n("J5Bm"),
            Kn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        var e = t.props && t.props.referrer;
                        Object($n.a)(t.props.content.info, e, t.props.game, K.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.content,
                        t = e.description,
                        n = e.info,
                        i = e.tags,
                        a = n.description,
                        r = n.imageURL,
                        o = n.title,
                        s = i.join(", "),
                        l = {
                            info: n,
                            countryCode: this.props.countryCode,
                            crates: n.crateASINs,
                            isInGameContent: !0,
                            userHasPrime: this.props.hasPrime
                        };
                    return x.createElement(re.J, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 6
                        }
                    }, x.createElement(re._2, {
                        margin: {
                            bottom: 3
                        }
                    }, x.createElement(re.U, {
                        gutterSize: re.V.Default
                    }, x.createElement(re.J, {
                        cols: 4
                    }, x.createElement(re.j, {
                        ratio: re.k.Aspect1x1
                    }, x.createElement("img", {
                        src: r
                    }))), x.createElement(re.J, {
                        cols: 8
                    }, x.createElement(re._35, {
                        type: re._40.P,
                        fontSize: re.R.Size4,
                        title: o
                    }, o), x.createElement(re._35, {
                        type: re._40.P,
                        color: re.I.Alt2,
                        title: s
                    }, s), x.createElement(re._2, {
                        display: re.N.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: re.Q.NoWrap,
                        padding: {
                            bottom: 1,
                            top: 2
                        }
                    }, x.createElement(Qn.a, {
                        onClickBuyNow: this.onBuyInGameContentNow,
                        options: l
                    })), x.createElement(re._49, null, x.createElement(Tn, {
                        source: a || t
                    }))))))
                }, t
            }(x.Component),
            Jn = Object(X.d)("FeaturedContent")(Kn),
            Yn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.alt ? re.m.Alt : re.m.Base;
                    return x.createElement(re._25, {
                        background: e,
                        border: !0,
                        padding: {
                            left: 3,
                            right: 3
                        }
                    }, this.props.children)
                }, t
            }(x.Component),
            Xn = Object(X.d)("GameDetailsSection")(Yn),
            Zn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return x.createElement(re._2, {
                        margin: {
                            bottom: 1
                        }
                    }, x.createElement(re._35, {
                        type: re._40.H3
                    }, this.props.title))
                }, t
            }(x.Component),
            ei = Object(X.d)("GameDetailsTitle")(Zn),
            ti = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.contentList;
                    if (0 === t.length) return null;
                    var n = t.map(function(t, n) {
                        return x.createElement(Jn, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            refetchData: e.props.refetchData,
                            key: n,
                            referrer: e.props.referrer
                        })
                    });
                    return x.createElement(Xn, {
                        alt: !0
                    }, x.createElement(ei, {
                        title: Object(a.d)("Game Add-Ons", "FeaturedContentRow")
                    }), x.createElement(re.U, {
                        gutterSize: re.V.Large
                    }, n))
                }, t
            }(x.Component),
            ni = Object(X.d)("FeaturedContentRow")(ti),
            ii = n("aFoJ"),
            ai = (n("nAt9"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSeparator = function() {
                        return x.createElement(re._25, {
                            borderRight: !0,
                            padding: {
                                left: .5
                            },
                            margin: {
                                right: 1
                            },
                            className: "game-details-box__separator"
                        })
                    }, t.onBuyNowClick = function() {
                        var e = t.props && t.props.referrer,
                            n = t.props && t.props.game && t.props.game.product && t.props.game.product.info;
                        n && Object($n.a)(n, e, t.props.game, K.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onClaimPrimeOffer = function(e) {
                        t.props.claimPrimeOffer && t.props.claimPrimeOffer(Object(q.a)({
                            offerID: e
                        })).then(function(e) {
                            t.props.refetchData && t.props.refetchData()
                        })
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t.renderNewWindowLink = function(e) {
                        return x.createElement("a", {
                            href: e.href,
                            target: "_blank"
                        }, e.children)
                    }, t.renderSharedRevenueLink = function(e) {
                        return x.createElement("a", {
                            key: "shared-revenue-link",
                            href: "https://help.twitch.tv/customer/portal/articles/2771293-how-to-buy-games-on-twitch#partners",
                            "data-test-selector": "fuel-shared-revenue-link",
                            target: "_blank"
                        }, e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.game,
                        t = e ? e.product : void 0;
                    if (!e || !t) return x.createElement(Xn, {
                        alt: !0
                    }, x.createElement(re._25, {
                        className: "game-details-box",
                        padding: {
                            top: 2,
                            right: 1,
                            bottom: 2,
                            left: 1
                        },
                        flexDirection: re.P.Row,
                        display: re.N.Flex,
                        justifyContent: re._1.Between,
                        alignItems: re.c.Center
                    }, x.createElement(re._2, {
                        display: re.N.Flex,
                        flexDirection: re.P.Row,
                        alignItems: re.c.Center
                    }, x.createElement(re._2, null, x.createElement(re._8, {
                        width: 175,
                        height: 36
                    })), this.renderSeparator(), x.createElement(re._2, null, x.createElement(re._8, {
                        width: 22,
                        height: 30
                    })), x.createElement(re._2, null, x.createElement(re._8, {
                        width: 50,
                        height: 15
                    }))), x.createElement(re._2, null, x.createElement(re._8, {
                        width: 290,
                        height: 20
                    }))));
                    var n = this.props.countryCode,
                        i = !(!this.props.currentUser || !this.props.currentUser.hasPrime),
                        r = {
                            info: t.info,
                            crates: t.info.crateASINs,
                            size: re.x.Large,
                            externalAcquisition: t.acquisition,
                            countryCode: n,
                            userHasPrime: i
                        },
                        o = t.supportedPlatforms.map(function(e) {
                            return x.createElement("img", {
                                "data-test-selector": "game-details-box-platform-" + e.name,
                                alt: e.name,
                                src: e.iconURL,
                                key: "platform:" + e.name
                            })
                        }),
                        s = null;
                    if (this.props.referrer && this.props.referrer.settings.isCommerceRevShareEnabled) {
                        var l = Object(a.d)("Purchase revenue <x:link>will be shared</x:link> with {channel}", {
                            channel: x.createElement(re._35, {
                                bold: !0,
                                type: re._40.Span
                            }, this.props.referrer.displayName),
                            "x:link": this.renderSharedRevenueLink
                        }, "GameDetailsBox");
                        s = x.createElement(re._35, {
                            "data-test-selector": "fuel-shared-revenue"
                        }, l)
                    }
                    return x.createElement(Xn, {
                        alt: !0
                    }, x.createElement(re._25, {
                        className: "game-details-box",
                        padding: {
                            top: 2,
                            right: 1,
                            bottom: 2,
                            left: 1
                        },
                        flexDirection: re.P.Row,
                        display: re.N.Flex,
                        justifyContent: re._1.Between,
                        alignItems: re.c.Center
                    }, x.createElement(re._2, {
                        display: re.N.Flex,
                        flexDirection: re.P.Row,
                        alignItems: re.c.Center
                    }, x.createElement(Qn.a, {
                        onClickBuyNow: this.onBuyNowClick,
                        onClickClaimPrimeOffer: this.onClaimPrimeOffer,
                        options: r,
                        "data-test-selector": "game-details-box-fuel-buy-button"
                    }), this.renderSeparator(), x.createElement("img", {
                        alt: Object(a.d)("Maturity Rating", "GameDetailsBox"),
                        src: t.esrbRating.iconURL,
                        "data-test-selector": "game-details-box-rating",
                        className: "game-details-box__rating"
                    }), o, x.createElement(Tn, {
                        "data-test-selector": "game-details-box-launch-platform",
                        source: t.launchPlatform.description,
                        renderers: {
                            Link: this.renderNewWindowLink
                        }
                    })), s))
                }, t
            }(x.Component)),
            ri = Object(X.d)("GameDetailBox")(ai),
            oi = Object(W.a)(ii, {
                name: "claimPrimeOffer"
            })(ri),
            si = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.game || !this.props.game.product || !this.props.game.product.info) return null;
                    var e = this.props.game.product,
                        t = e.info,
                        n = e.featureDetails,
                        i = e.supportedLanguages,
                        r = e.minimumSystemRequirement,
                        o = e.recommendedSystemRequirement,
                        s = n.map(function(e, t) {
                            return x.createElement("li", {
                                key: t
                            }, x.createElement(Tn, {
                                source: e
                            }))
                        }),
                        l = i.map(function(e, t) {
                            return [x.createElement(re.J, {
                                key: t + "lang",
                                cols: 3
                            }, x.createElement(re._2, null, e.language)), x.createElement(re.J, {
                                key: t + "audio",
                                cols: 3
                            }, x.createElement(re._25, {
                                textAlign: re._36.Center
                            }, e.hasAudio && x.createElement(re._15, {
                                asset: re._16.Check,
                                type: re._17.Success
                            }))), x.createElement(re.J, {
                                key: t + "int",
                                cols: 3
                            }, x.createElement(re._25, {
                                textAlign: re._36.Center
                            }, e.hasInterface && x.createElement(re._15, {
                                asset: re._16.Check,
                                type: re._17.Success
                            }))), x.createElement(re.J, {
                                key: t + "subs",
                                cols: 3
                            }, x.createElement(re._25, {
                                textAlign: re._36.Center
                            }, e.hasSubtitles && x.createElement(re._15, {
                                asset: re._16.Check,
                                type: re._17.Success
                            }))), x.createElement(re.J, {
                                key: t + "hr",
                                cols: 12
                            }, x.createElement(re._25, {
                                margin: {
                                    top: .5,
                                    bottom: .5
                                },
                                borderBottom: !0,
                                alignContent: re.b.Stretch
                            }))]
                        }),
                        d = this.renderSystemRequirements(r),
                        c = this.renderSystemRequirements(o);
                    return x.createElement(Xn, null, x.createElement(re.U, {
                        gutterSize: re.V.Large
                    }, x.createElement(re.J, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, x.createElement(re._2, {
                        margin: {
                            top: 4
                        }
                    }, x.createElement(ei, {
                        title: Object(a.d)("Description", "DirectoryGameDetailsPage")
                    }), x.createElement(re._49, null, x.createElement(Tn, {
                        source: t.description
                    }))), x.createElement(re._2, {
                        margin: {
                            top: 4
                        }
                    }, x.createElement(ei, {
                        title: Object(a.d)("Features", "DirectoryGameDetailsPage")
                    }), x.createElement(re._49, null, x.createElement("ul", null, s))), x.createElement(re._25, {
                        margin: {
                            top: 4
                        },
                        fontSize: re.R.Size6
                    }, x.createElement(ei, {
                        title: Object(a.d)("Information", "DirectoryGameDetailsPage")
                    }), this.renderRow(Object(a.d)("Title: ", "DirectoryGameDetailsPage"), t.title), this.renderRow(Object(a.d)("Developer: ", "DirectoryGameDetailsPage"), e.developer), this.renderRow(Object(a.d)("Publisher: ", "DirectoryGameDetailsPage"), e.publisher), this.renderRowLink(Object(a.d)("More Info: ", "DirectoryGameDetailsPage"), Object(a.d)("Website", "DirectoryGameDetailsPage"), e.websiteURL), e.eulaURL && this.renderRowLink(Object(a.d)("License Agreement: ", "DirectoryGameDetailsPage"), Object(a.d)("Check out the EULA", "DirectoryGameDetailsPage"), e.eulaURL), this.renderRowLink(Object(a.d)("Need Help? ", "DirectoryGameDetailsPage"), Object(a.d)("Contact Support", "DirectoryGameDetailsPage"), e.supportURL))), x.createElement(re.J, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, x.createElement(re._2, {
                        margin: {
                            top: 4
                        }
                    }, x.createElement(ei, {
                        title: Object(a.d)("Hardware Requirements", "DirectoryGameDetailsPage")
                    }), x.createElement(re._2, {
                        padding: {
                            bottom: 1
                        }
                    }, x.createElement(re._35, {
                        type: re._40.H4,
                        bold: !0
                    }, Object(a.d)("Minimum", "DirectoryGameDetailsPage"))), d, x.createElement(re._2, {
                        padding: {
                            top: 1,
                            bottom: 1
                        }
                    }, x.createElement(re._35, {
                        type: re._40.H4,
                        bold: !0
                    }, Object(a.d)("Recommended", "DirectoryGameDetailsPage"))), c), x.createElement(re._2, {
                        margin: {
                            top: 4
                        }
                    }, x.createElement(ei, {
                        title: Object(a.d)("Language Support", "DirectoryGameDetailsPage")
                    }), x.createElement(re.U, null, x.createElement(re.J, {
                        cols: 3
                    }, x.createElement(re._25, {
                        color: re.I.Alt2
                    }, Object(a.d)("Language", "DirectoryGameDetailsPage"))), x.createElement(re.J, {
                        cols: 3
                    }, x.createElement(re._25, {
                        color: re.I.Alt2,
                        textAlign: re._36.Center
                    }, Object(a.d)("Audio", "DirectoryGameDetailsPage"))), x.createElement(re.J, {
                        cols: 3
                    }, x.createElement(re._25, {
                        color: re.I.Alt2,
                        textAlign: re._36.Center
                    }, Object(a.d)("Interface", "DirectoryGameDetailsPage"))), x.createElement(re.J, {
                        cols: 3
                    }, x.createElement(re._25, {
                        color: re.I.Alt2,
                        textAlign: re._36.Center
                    }, Object(a.d)("Subtitles", "DirectoryGameDetailsPage"))), x.createElement(re.J, {
                        cols: 12
                    }, x.createElement(re._25, {
                        borderBottom: !0,
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    })), l)))))
                }, t.prototype.renderSystemRequirements = function(e) {
                    return x.createElement(re._2, null, this.renderRow(Object(a.d)("OS:", "DirectoryGameDetailsPage"), e.osVersion), this.renderRow(Object(a.d)("Processor:", "DirectoryGameDetailsPage"), e.processor), this.renderRow(Object(a.d)("Memory:", "DirectoryGameDetailsPage"), e.ram), this.renderRow(Object(a.d)("Graphics Card:", "DirectoryGameDetailsPage"), e.videoCard), this.renderRow(Object(a.d)("DirectX:", "DirectoryGameDetailsPage"), e.directXVersion), this.renderRow(Object(a.d)("Hard Drive Space:", "DirectoryGameDetailsPage"), e.hardDriveSpace), this.renderRow(Object(a.d)("Other:", "DirectoryGameDetailsPage"), e.other))
                }, t.prototype.renderRow = function(e, t) {
                    return t ? x.createElement(re._2, {
                        display: re.N.Flex,
                        flexDirection: re.P.Row,
                        flexWrap: re.Q.NoWrap
                    }, x.createElement(re._25, {
                        color: re.I.Alt2,
                        padding: {
                            right: 1
                        },
                        display: re.N.Flex,
                        flexShrink: 0
                    }, e), x.createElement(re._2, {
                        display: re.N.Flex,
                        flexGrow: 1
                    }, t)) : null
                }, t.prototype.renderRowLink = function(e, t, n) {
                    return this.renderRow(e, x.createElement("a", {
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, t))
                }, t
            }(x.Component),
            li = Object(X.d)("GameInfoSection")(si),
            di = n("S/9j"),
            ci = n("4mYF"),
            ui = n("fc0G"),
            mi = Object(X.d)("VideoEmbed", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.video,
                    n = t.id,
                    a = t.lengthSeconds,
                    r = t.publishedAt,
                    o = t.previewThumbnailURL,
                    s = t.viewCount,
                    l = {
                        vodID: n,
                        disableTheatreButton: !0,
                        playerTypeOverride: e.playerTypeOverride
                    };
                return x.createElement(ci.a, {
                    createdAt: r,
                    lengthSeconds: a,
                    type: ci.b.Video,
                    thumbnailURL: o,
                    viewCount: s
                }, x.createElement(ui.c, i.__assign({}, l)))
            }),
            pi = n("KqsW"),
            hi = (n("OOh8"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderItems = function() {
                        if (!t.props.videos && !t.props.thumbnailURLs) return [0, 1, 2, 3].map(function(e) {
                            return x.createElement(re._2, {
                                key: "placeholder-" + e,
                                padding: {
                                    right: 2
                                }
                            }, x.createElement(re._8, {
                                width: 460,
                                height: 260
                            }))
                        });
                        var e = (t.props.videos || []).map(function(e) {
                                return x.createElement(re._2, {
                                    className: "game-media__video",
                                    padding: {
                                        right: 2
                                    },
                                    key: e.id
                                }, x.createElement(mi, {
                                    video: e
                                }))
                            }),
                            n = (t.props.thumbnailURLs || []).map(function(e, n) {
                                return x.createElement(re._2, {
                                    className: "game-media__image",
                                    padding: {
                                        right: 2
                                    },
                                    key: e
                                }, x.createElement(re._0, {
                                    onClick: t.handleOpenModal,
                                    "data-full": t.props.screenshotURLs[n],
                                    ariaLabel: Object(a.d)("Screenshot", "DirectoryGameDetailsGameMedia")
                                }, x.createElement(re.j, {
                                    ratio: re.k.Aspect16x9
                                }, x.createElement("img", {
                                    src: e
                                }))))
                            });
                        return e.concat(n)
                    }, t.handleOpenModal = function(e) {
                        var n = e.currentTarget.dataset.full || "";
                        t.props.showImageViewerModal({
                            onClose: t.handleCloseModal,
                            screenshotURL: n
                        })
                    }, t.handleCloseModal = function() {}, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return x.createElement(Xn, null, x.createElement(ei, {
                        title: Object(a.d)("Videos and Screenshots", "DirectoryGameDetailsPage")
                    }), x.createElement(re.W, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, x.createElement(pi.a, {
                        items: this.renderItems()
                    })))
                }, t = i.__decorate([Object(X.d)("GameMedia")], t)
            }(x.Component));
        var gi = Object(U.b)(function() {
                return {}
            }, function(e) {
                return Object(ne.b)({
                    showImageViewerModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(bt.d)(di.a, t)
                    }
                }, e)
            })(hi),
            vi = (n("UJ+F"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        var e = t.props && t.props.referrer;
                        Object($n.a)(t.props.content.info, e, t.props.game, K.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = this.props.content,
                        n = t.info,
                        i = t.tags,
                        r = n.crateASINs,
                        o = n.imageURL,
                        s = n.price,
                        l = n.title,
                        d = i.join(", "),
                        c = {
                            info: n,
                            countryCode: this.props.countryCode,
                            crates: n.crateASINs,
                            isInGameContent: !0,
                            userHasPrime: this.props.hasPrime
                        },
                        u = x.createElement(Qn.a, {
                            onClickBuyNow: this.onBuyInGameContentNow,
                            options: c
                        });
                    if (r.length > 1) {
                        var m = Object(a.d)("{numCrates} Twitch Crates", {
                            numCrates: r.length
                        }, "InGameContentCrateReward");
                        e = x.createElement(re._25, {
                            className: "in-game-content__crates",
                            attachBottom: !0,
                            padding: {
                                left: 1,
                                right: 1
                            },
                            position: re._9.Absolute,
                            textAlign: re._36.Right
                        }, m)
                    }
                    return x.createElement(re._2, {
                        margin: {
                            bottom: 3
                        }
                    }, x.createElement(re._25, {
                        className: "in-game-content",
                        border: !0,
                        fullHeight: !0,
                        position: re._9.Relative
                    }, x.createElement(re.j, {
                        ratio: re.k.Aspect1x1
                    }, x.createElement("img", {
                        src: o
                    })), x.createElement(re._25, {
                        background: re.m.Base,
                        padding: 1
                    }, x.createElement(re._2, {
                        className: "in-game-content__info-header"
                    }, x.createElement(re._35, {
                        type: re._40.P,
                        fontSize: re.R.Size5,
                        bold: !0,
                        title: l
                    }, l), x.createElement(re._35, {
                        type: re._40.P,
                        color: re.I.Alt2,
                        title: d
                    }, d)), x.createElement(re._2, {
                        className: "in-game-content__price",
                        position: re._9.Relative
                    }, x.createElement("p", {
                        title: s
                    }, s), e), x.createElement(re._2, {
                        className: "in-game-content__buy-button",
                        position: re._9.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        margin: {
                            left: 1,
                            bottom: 1,
                            right: 1
                        }
                    }, u))))
                }, t
            }(x.Component)),
            fi = Object(X.d)("InGameContent")(vi),
            yi = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.contentList;
                    if (0 === t.length) return null;
                    var n = t.map(function(t, n) {
                        return x.createElement(fi, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            refetchData: e.props.refetchData,
                            key: n,
                            referrer: e.props.referrer
                        })
                    });
                    return x.createElement(Xn, {
                        alt: !0
                    }, x.createElement(ei, {
                        title: Object(a.d)("In-Game Content", "FeaturedContentRow")
                    }), x.createElement(re._46, {
                        childWidth: re._47.Medium,
                        gutterSize: re._48.Small,
                        noGrow: !0
                    }, n))
                }, t
            }(x.Component),
            ki = Object(X.d)("InGameContentRow")(yi),
            bi = n("FEHb"),
            _i = n("xCTX"),
            Si = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        sortedInGameContent: []
                    }, t.refetchData = function() {
                        t.props.data && t.props.data.refetch && t.props.data.refetch()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), a.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data && e.data.game,
                        n = t && t.product;
                    if (n) {
                        var i = n.inGameContent.slice().sort(qn.a);
                        this.setState({
                            sortedInGameContent: i
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.props.data.loading) {
                        if (this.props.data.error) return x.createElement(B.a, {
                            message: Object(a.d)("Error loading data.", "DirectoryGameDetailsPage")
                        });
                        if (!this.props.data.game || !this.props.data.game.product || !this.props.data.game.product.id) return x.createElement(zn.a, null)
                    }
                    var e = null,
                        t = null,
                        n = null;
                    this.props.data.game && this.props.data.game.product && (e = this.props.data.game.product.media.screenshotURLs, t = this.props.data.game.product.media.thumbnailURLs, n = this.props.data.game.product.media.videos);
                    var i = this.props.data,
                        r = i.currentUser,
                        o = i.game,
                        s = r && r.hasPrime,
                        l = this.props.referrerData && this.props.referrerData.user,
                        d = "";
                    this.props.data.requestInfo && (d = this.props.data.requestInfo.countryCode);
                    var c = [],
                        u = [];
                    return this.state.sortedInGameContent.forEach(function(e) {
                        e.info.isFeatured ? c.push(e) : u.push(e)
                    }), x.createElement(re._2, null, x.createElement(oi, {
                        game: this.props.data.game,
                        referrer: l,
                        countryCode: d,
                        currentUser: this.props.data.currentUser,
                        refetchData: this.refetchData
                    }), x.createElement(gi, {
                        screenshotURLs: e,
                        thumbnailURLs: t,
                        videos: n
                    }), x.createElement(ni, {
                        contentList: c,
                        countryCode: d,
                        game: o,
                        hasPrime: s,
                        refetchData: this.refetchData,
                        referrer: l
                    }), x.createElement(ki, {
                        contentList: u,
                        countryCode: d,
                        game: o,
                        hasPrime: s,
                        refetchData: this.refetchData,
                        referrer: l
                    }), x.createElement(li, {
                        game: this.props.data.game
                    }))
                }, t = i.__decorate([Object(W.a)(_i, {
                    options: function(e) {
                        return {
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName)
                            }
                        }
                    }
                }), Object(W.a)(bi, {
                    name: "referrerData",
                    skip: function(e) {
                        var t = Wn.parse(e.location.search),
                            n = t.br_name,
                            i = t.br_id;
                        return !(n || i)
                    },
                    options: function(e) {
                        var t = Wn.parse(e.location.search);
                        return {
                            variables: {
                                login: t.br_name || null,
                                id: t.br_id || null
                            }
                        }
                    }
                }), Object(X.d)("DirectoryGameDetailsPage", {
                    destination: $.a.DirectoryGameDetails
                }), Object(z.a)({
                    location: K.PageviewLocation.GameDetail
                })], t)
            }(x.Component),
            Ni = n("JpYe"),
            Ei = n("n2E0"),
            Ci = n("VDV3"),
            wi = n("3yQz"),
            Oi = n("JtGN"),
            Di = wi.b,
            Ti = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onVideoSortChange = function(e) {
                        Object(Ni.e)("/directory/game/" + n.props.match.params.encodedCommunityName + "/videos", n.props, void 0, e)
                    }, n.onVideoFilterChange = function(e) {
                        Object(Ni.e)("/directory/game/" + n.props.match.params.encodedCommunityName + "/videos", n.props, e)
                    }, n.state = {
                        directoryType: te(t.match.path)
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), a.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    var e = null,
                        t = decodeURIComponent(this.props.match.params.encodedCommunityName),
                        n = Object(Ni.d)(this.props) || Di,
                        i = Object(Ni.c)(this.props);
                    if (this.props.data.error) {
                        var r = Object(a.d)("{gameName} videos are temporarily unavailable.", {
                            gameName: t
                        }, "DirectoryVideosPage");
                        return x.createElement(B.a, {
                            message: r
                        })
                    }
                    if (!this.props.data.loading && null === this.props.data.game) {
                        r = Object(a.d)("{gameName} does not exist.", {
                            gameName: t
                        }, "DirectoryVideosPage");
                        return x.createElement(B.a, {
                            message: r
                        })
                    }
                    return this.props.data.game && this.props.data.game.videos && (e = this.props.data.game.videos.edges.map(function(e) {
                        return e.node
                    })), x.createElement(re._2, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, x.createElement(Ci.a, {
                        onVideoSortChange: this.onVideoSortChange,
                        onVideoFilterChange: this.onVideoFilterChange,
                        selectedSort: n,
                        broadcastType: i
                    }), x.createElement(Ci.b, {
                        hideGameArt: !0,
                        trackingContent: Object(Ei.a)(n),
                        trackingMedium: K.PageviewMedium.GameVideos,
                        videos: e
                    }), x.createElement(ie.a, {
                        enabled: this.enablePagination(),
                        key: "directory-game-videos-page-" + i + "-" + n,
                        loadMore: this.props.loadMore
                    }))
                }, t.prototype.enablePagination = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.game && this.props.data.game.videos && !!this.props.data.game.videos.pageInfo.hasNextPage
                }, t = i.__decorate([Object(W.a)(Oi, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                gameName: decodeURIComponent(e.match.params.encodedCommunityName),
                                videoLimit: 30,
                                languages: e.languagePreferences,
                                broadcastTypes: e.match.params.filter && "all" !== e.match.params.filter ? [e.match.params.filter] : void 0,
                                videoSort: Object(Ni.d)(e) || wi.b
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: Oi,
                                    variables: i.__assign({}, e.data.variables, {
                                        followedCursor: e.data.game && e.data.game.videos.edges.length > 0 ? e.data.game.videos.edges[e.data.game.videos.edges.length - 1].cursor : void 0
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            game: i.__assign({}, n.game, {
                                                videos: i.__assign({}, n.game.videos, {
                                                    edges: Object(q.b)(e.game.videos.edges, n.game.videos.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(X.d)("DirectoryGameVideosPage", {
                    destination: $.a.DirectoryGameVideos
                }), Object(z.a)({
                    location: K.PageviewLocation.Directory,
                    properties: function(e) {
                        return {
                            content_type: K.PageviewDirectoryContentType.Videos,
                            game: decodeURIComponent(e.match.params.encodedCommunityName)
                        }
                    }
                })], t)
            }(x.Component);
        var Fi, Ii = Object(U.b)(function(e) {
            return {
                languagePreferences: Object(V.a)(e)
            }
        })(Ti);
        ! function(e) {
            e.CLIPS = "clips-scroller", e.DEFAULT = "directory-root-scroller", e.GAME = "game-scroller"
        }(Fi || (Fi = {}));
        var Li = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.render = function() {
                var e = this.props.match.path.startsWith("/communities") ? ee.a.Communities : ee.a.Games;
                return x.createElement(re._2, {
                    "data-a-target": this.getScrollerName()
                }, x.createElement(Dn.b, {
                    suppressScrollX: !0,
                    addPaddingWhenPlayerIsPersisting: !0
                }), x.createElement(On, {
                    directoryType: e,
                    directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                    activeTab: this.getActiveTab()
                }), x.createElement(pt.d, null, x.createElement(pt.b, {
                    path: "/communities/:encodedCommunityName/details",
                    component: jn
                }), x.createElement(pt.b, {
                    path: "/communities/:encodedCommunityName/:encodedLanguage",
                    component: mt
                }), x.createElement(pt.b, {
                    path: "/communities/:encodedCommunityName",
                    component: mt
                }), x.createElement(pt.b, {
                    path: "/directory/game/:encodedCommunityName/clips",
                    component: Hn
                }), x.createElement(pt.b, {
                    path: "/directory/game/:encodedCommunityName/details",
                    component: Si
                }), x.createElement(pt.b, {
                    path: "/directory/game/:encodedCommunityName/videos/:filter",
                    component: Ii
                }), x.createElement(pt.b, {
                    path: "/directory/game/:encodedCommunityName/:encodedLanguage",
                    component: mt
                }), x.createElement(pt.b, {
                    path: "/directory/game/:encodedCommunityName",
                    component: mt
                })))
            }, t.prototype.getActiveTab = function() {
                var e = void 0;
                return this.isClipsPage() ? e = Sn.DirectoryClipsPage : this.isDetailsPage() ? e = Sn.DirectoryDetailsPage : this.isVideosPage() ? e = Sn.DirectoryVideosPage : this.isMainPage() && (e = Sn.DirectoryPage), e
            }, t.prototype.getScrollerName = function() {
                var e = Fi.DEFAULT;
                return this.isClipsPage() ? e = Fi.CLIPS : this.isMainPage() && (e = Fi.GAME), e
            }, t.prototype.isMainPage = function() {
                return "/communities/:encodedCommunityName" === this.props.match.path || "/directory/game/:encodedCommunityName" === this.props.match.path
            }, t.prototype.isClipsPage = function() {
                return "/directory/game/:encodedCommunityName/clips" === this.props.match.path
            }, t.prototype.isDetailsPage = function() {
                return "/communities/:encodedCommunityName/details" === this.props.match.path || "/directory/game/:encodedCommunityName/details" === this.props.match.path
            }, t.prototype.isVideosPage = function() {
                return "/directory/game/:encodedCommunityName/videos/:filter" === this.props.match.path
            }, t
        }(x.Component);
        n.d(t, "DirectoryGamePage", function() {
            return mt
        }), n.d(t, "DirectoryRootPage", function() {
            return Li
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
    "8UKc": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryHeader_DirectoryBanner"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "coverURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1200"
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
                                    value: "viewersCount"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "followersCount"
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
                                        kind: "IntValue",
                                        value: "1"
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
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Game"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "activeDropCampaigns"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "applicableChannels"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isEnabled"
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
                            }, {
                                kind: "Field",
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
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
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
                end: 409
            }
        };
        n.loc.source = {
            body: "query DirectoryHeader_DirectoryBanner($name: String! $type: DirectoryType!) {\ndirectory(name: $name type: $type) {\nid\nname\ndisplayName\ncoverURL(width: 1200 height: 180)\nviewersCount\nfollowersCount\nstreams(first: 1) {\nedges {\nnode {\nid\npreviewImageURL(width: 320 height: 180)\n}\n}\n}\n... on Game {\nactiveDropCampaigns {\napplicableChannels {\nid\n}\nisEnabled\n}\n}\n}\ncurrentUser {\nid\nroles {\nisSiteAdmin\nisStaff\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "8Wuk": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        });
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = (n.n(r), n("6sO2")),
            s = n("2hJ3"),
            l = n("f6Cj"),
            d = n("Odds"),
            c = n("bdk8");
        n.n(c);
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(i || (i = {}));
        var u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? r.createElement("a", a.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(d._53)(n.props)), n.renderIcon()) : r.createElement("button", a.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(d._53)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(s.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return r.createElement(d._2, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, r.createElement(d._15, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== i.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return "Twitter";
                        case i.Reddit:
                            return "Reddit";
                        case i.Facebook:
                            return "Facebook";
                        case i.VKontakte:
                            return "VKontakte";
                        case i.Copy:
                            return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return d._16.Twitter;
                        case i.Facebook:
                            return d._16.Facebook;
                        case i.VKontakte:
                            return d._16.VKontakte;
                        case i.Reddit:
                            return d._16.Reddit;
                        case i.Copy:
                        default:
                            return d._16.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case i.Twitter:
                            return e + "--twitter";
                        case i.Reddit:
                            return e + "--reddit";
                        case i.Facebook:
                            return e + "--facebook";
                        case i.VKontakte:
                            return e + "--vkontakte";
                        case i.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        a = e.type,
                        r = n.getUrl(),
                        o = t || "";
                    switch (a) {
                        case i.Reddit:
                            return Object(l.b)(r, o);
                        case i.VKontakte:
                            return Object(l.d)(r);
                        case i.Facebook:
                            return Object(l.a)(r);
                        case i.Twitter:
                            return Object(l.c)(r, o);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return r.createElement(d._2, {
                    className: "social-button"
                }, r.createElement(d._43, {
                    label: this.getTooltipFromType(),
                    direction: d._45.Top
                }, this.renderLink()))
            }, t
        }(r.Component)
    },
    "9VER": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsCog_CommunityUserPermissions"
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
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
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
                                                    value: "editing"
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
                            }, {
                                kind: "Field",
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
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
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
                end: 195
            }
        };
        n.loc.source = {
            body: "query SettingsCog_CommunityUserPermissions($name: String!) {\ncommunity(name: $name) {\nid\nowner {\nid\n}\nself {\npermissions {\nbanning\nediting\n}\n}\n}\ncurrentUser {\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = a.n.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(r.c)(n);
                    return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e
            }()
    },
    AHWf: function(e, t) {},
    AMWC: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Events_UpdateEventBroadcastNotifications"
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
                                value: "UpdateEventBroadcastNotificationsInput"
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
                            value: "updateEventBroadcastNotifications"
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
                                    value: "eventBroadcast"
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
                                                    value: "emailEnabled"
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
                end: 199
            }
        };
        n.loc.source = {
            body: "mutation Events_UpdateEventBroadcastNotifications($input: UpdateEventBroadcastNotificationsInput!) {\nupdateEventBroadcastNotifications(input: $input) {\neventBroadcast {\nid\nself {\nemailEnabled\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
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
            u = n("vH/s"),
            m = n("HW6M"),
            p = n("Odds"),
            h = (n("ehrk"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = m("live-channel-preview-card", {
                        "live-channel-preview-card--loading": !this.props.streamLoaded
                    });
                    return a.createElement("div", i.__assign({
                        className: e,
                        "data-test-selector": "live-channel-preview-card"
                    }, Object(p._53)(this.props)), a.createElement(s.a, i.__assign({}, this.props), a.createElement(p.j, {
                        ratio: p.k.Aspect16x9
                    }, this.props.videoPlayer)))
                }, t
            }(a.Component)),
            g = n("v5ho"),
            v = n("RH2O"),
            f = n("2KeS"),
            y = n("V5M+"),
            k = n("jetF"),
            b = n("7vx8"),
            _ = n("CSlQ"),
            S = n("3zLD"),
            N = n("+8VM"),
            E = n("oIkB"),
            C = function(e) {
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
            w = n("nC3l"),
            O = (n("sJt0"), "error-message"),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? a.createElement(p._2, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(p._35, {
                            color: p.I.Error,
                            type: p._40.H4,
                            "data-test-selector": O
                        }, C(t.state.error))) : null
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
                                        return this.props.banUserFromCommunity ? (e = i.__assign({}, Object(E.a)({
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
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (o.n.tracking.track(u.SpadeEventType.CommunityModeration, {
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
                    return a.createElement(p.W, {
                        position: p._9.Relative
                    }, a.createElement(p._25, {
                        background: p.m.Base,
                        className: "stream-ban-modal"
                    }, a.createElement(p._2, {
                        padding: 2
                    }, this.renderErrorMessage(), a.createElement(p._2, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(p._35, {
                        type: p._40.H4
                    }, Object(o.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), a.createElement(p._25, {
                        borderTop: !0
                    }, a.createElement(p._2, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(p._35, {
                        bold: !0
                    }, Object(o.d)("Reason (Required)", "StreamBanModal")), a.createElement(p.Y, {
                        type: p.Z.Text,
                        placeholder: Object(o.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), a.createElement(p._25, {
                        borderTop: !0
                    }, a.createElement(p._2, {
                        padding: {
                            top: 2
                        },
                        textAlign: p._36.Center
                    }, a.createElement(p._2, {
                        display: p.N.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(p.u, {
                        type: p.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(o.d)("Cancel", "StreamBanModal"))), a.createElement(p._2, {
                        display: p.N.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(p.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(o.d)("Ban", "StreamBanModal")))))), a.createElement(N.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(a.Component),
            T = Object(S.compose)(Object(b.a)(w, {
                name: "banUserFromCommunity"
            }))(D);
        var F = Object(v.b)(null, function(e) {
                return Object(f.b)({
                    onCloseModal: y.c
                }, e)
            })(T),
            I = (n("npyu"), n("plcU")),
            L = "error-message",
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? a.createElement(p._2, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(p._35, {
                            color: p.I.Error,
                            type: p._40.H4,
                            "data-test-selector": L
                        }, C(t.state.error))) : null
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
                                        return this.props.timeoutUserFromCommunity ? (e = i.__assign({}, Object(E.a)({
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
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (o.n.tracking.track(u.SpadeEventType.CommunityModeration, {
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
                    return a.createElement(p.W, {
                        position: p._9.Relative
                    }, a.createElement(p._25, {
                        background: p.m.Base,
                        className: "stream-timeout-modal"
                    }, a.createElement(p._2, {
                        padding: 2
                    }, this.renderErrorMessage(), a.createElement(p._2, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(p._35, {
                        type: p._40.H4
                    }, Object(o.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), a.createElement(p._25, {
                        borderTop: !0
                    }, a.createElement(p._2, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(p._35, {
                        bold: !0
                    }, Object(o.d)("Reason (Required)", "StreamTimeoutModal")), a.createElement(p.Y, {
                        type: p.Z.Text,
                        placeholder: Object(o.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), a.createElement(p._2, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(p._35, {
                        bold: !0
                    }, Object(o.d)("Duration", "StreamTimeoutModal")), a.createElement(p._21, {
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
                    }, Object(o.d)("24 hours", "StreamTimeoutModal")))), a.createElement(p._25, {
                        borderTop: !0
                    }, a.createElement(p._2, {
                        padding: {
                            top: 2
                        },
                        textAlign: p._36.Center
                    }, a.createElement(p._2, {
                        display: p.N.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(p.u, {
                        type: p.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(o.d)("Cancel", "StreamTimeoutModal"))), a.createElement(p._2, {
                        display: p.N.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(p.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(o.d)("Timeout", "StreamTimeoutModal")))))), a.createElement(N.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(a.Component),
            R = Object(S.compose)(Object(b.a)(I, {
                name: "timeoutUserFromCommunity"
            }))(A);
        var P = Object(v.b)(null, function(e) {
                return Object(f.b)({
                    onCloseModal: y.c
                }, e)
            })(R),
            j = n("PO03"),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(d.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(F, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(d.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(P, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? a.createElement(k.a, null, a.createElement(p.v, {
                        ariaLabel: Object(o.d)("Moderation", "DirectoryGamePage"),
                        icon: p._16.ChatRiskFlag
                    }), a.createElement(p.p, {
                        direction: p.q.BottomRight,
                        size: p.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? a.createElement(p._0, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, a.createElement(p._2, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? a.createElement(p._0, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, a.createElement(p._2, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Timeout", "StreamFlag"))) : null
                }, t = i.__decorate([Object(b.a)(j, {
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
        var x = Object(v.b)(null, function(e) {
                return Object(f.b)({
                    onShowModal: y.d
                }, e)
            })(M),
            U = n("BwgW"),
            V = n("fc0G"),
            G = n("L3z0"),
            B = n("5MsU"),
            H = {
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
        var z = function(e) {
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
                    }), this.resetVolume(), this.player && (this.player.removeEventListener(B.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(G.a.Play, this.onPlayerPlay), this.player.removeEventListener(G.a.Playing, this.onPlayerPlaying), U.extensionService.unregisterPlayer(), this.player.destroy())
                }, t.prototype.initializePlayer = function() {
                    var e = H;
                    this.props.channelLogin && (e.channel = this.props.channelLogin);
                    var t = new window.Twitch.Player(this.playerRef, e);
                    this.player = t, t.addEventListener(B.a.PlayerReady, this.onPlayerReady), t.addEventListener(G.a.Play, this.onPlayerPlay), t.addEventListener(G.a.Playing, this.onPlayerPlaying), U.extensionService.registerPlayer(this.player)
                }, t.prototype.resetVolume = function() {
                    this.userVolumeSetting && window.localStorage.setItem("volume", this.userVolumeSetting), this.userMuteSetting && window.localStorage.setItem("muted", this.userMuteSetting)
                }, t.tagInjected = !1, t = n = i.__decorate([Object(_.d)("LiveChannelPreviewCard")], t);
                var n
            }(a.Component),
            q = n("PLRK"),
            $ = (n("GiGb"), 5e3),
            Q = 300,
            K = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getLinkTo = function(e, t) {
                        var i = n.props.trackingContent ? n.props.trackingContent : u.PageviewContent.Live,
                            a = n.props.directoryType === g.a.Communities ? u.PageviewMedium.Community : u.PageviewMedium.Game;
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
                        return e.broadcaster ? n.props.directoryType === g.a.Communities && n.props.directoryName ? a.createElement(p._2, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: p._9.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, a.createElement(x, {
                            communityName: n.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, n.shouldShowGame = function(e) {
                        return n.props.directoryType !== g.a.Games && n.props.streamNode.game ? n.props.streamNode.game[e] : ""
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
                        if (n.props.showPreview && n.state.hovered && n.props.streamNode.broadcaster && n.props.streamNode.broadcaster.login) return a.createElement(z, i.__assign({
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
                    }, a.createElement(p._2, {
                        className: "stream-thumbnail__card",
                        position: p._9.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": "directory-game__card_container"
                    }, n && a.createElement(p._25, {
                        attachRight: !0,
                        attachTop: !0,
                        background: p.m.Overlay,
                        borderRadius: p.s.Small,
                        color: p.I.OverlayAlt,
                        margin: .5,
                        padding: .5,
                        position: p._9.Absolute,
                        zIndex: p._52.Above
                    }, a.createElement(p._4, {
                        fillContent: !0,
                        inheritColor: !0,
                        size: p._23.Small
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
                    }), i && a.createElement(h, {
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
                        videoPlayer: this.getVideoPlayer()
                    }), this.renderStreamFlag()))
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return "directory-game__card_container"
        }), n.d(t, "b", function() {
            return K
        })
    },
    Ajho: function(e, t) {},
    Bxh2: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "productInfo"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "ProductInfo"
                    }
                },
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
                            value: "asin"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "crateASINs"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "description"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "size"
                            },
                            value: {
                                kind: "IntValue",
                                value: "256"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "isEntitled"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "isFeatured"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "isForSale"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "price"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "primeOffer"
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "purchaseURL"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 164
            }
        };
        n.loc.source = {
            body: "fragment productInfo on ProductInfo {\nid\nasin\ncrateASINs\ndescription\nimageURL(size: 256)\nisEntitled\nisFeatured\nisForSale\nprice\nprimeOffer {\nid\n}\npurchaseURL\ntitle\n}",
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
    D88i: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryTabs_Directory"
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
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Game"
                                    }
                                },
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
                                            value: "product"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 147
            }
        };
        n.loc.source = {
            body: "query DirectoryTabs_Directory($name: String! $type: DirectoryType!) {\ndirectory(name: $name type: $type) {\nid\n... on Game {\nid\nproduct {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    D9fv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.b = function() {
            var e = i.n.intl.getLanguageCode(),
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
    Ehh8: function(e, t, n) {
        e.exports = n.p + "assets/hearthstone-modes-2390ca3de0f916ce2c85d7b26b665138.png"
    },
    F3Wg: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GamePage_Game"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "languages"
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
                                    value: "displayName"
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
                                        value: "languages"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "languages"
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
                end: 430
            }
        };
        n.loc.source = {
            body: "query GamePage_Game($name: String! $type: DirectoryType! $limit: Int $languages: [String!] $cursor: Cursor) {\ndirectory(name: $name type: $type) {\nid\ndisplayName\nstreams(first: $limit after: $cursor languages: $languages) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 285 height: 380)\nname\n}\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    FEHb: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryGameDetails"
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
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    },
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "id"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                                        name: {
                                            kind: "Name",
                                            value: "isCommerceRevShareEnabled"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 142
            }
        };
        n.loc.source = {
            body: "query DirectoryGameDetails($login: String! $id: ID!) {\nuser(login: $login id: $id) {\ndisplayName\nsettings {\nisCommerceRevShareEnabled\n}\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    GOrw: function(e, t) {},
    GiGb: function(e, t) {},
    IDLB: function(e, t) {},
    IMj1: function(e, t) {},
    IOwa: function(e, t, n) {
        "use strict";
        var i, a, r, o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            d = n("6sO2"),
            c = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), (i = {})[c.a.Live] = "stream-type-indicator--live", i[c.a.Premiere] = "stream-type-indicator--premiere", i[c.a.Rerun] = "stream-type-indicator--rerun", i[c.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = ((a = {})[c.a.Premiere] = u._16.VideoPremiere, a[c.a.Rerun] = u._16.VideoRerun, a[c.a.WatchParty] = u._16.VideoRerun, a),
            h = ((r = {})[c.a.Premiere] = u._17.Live, r[c.a.Rerun] = u._17.Inherit, r[c.a.WatchParty] = u._17.Inherit, r),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u._25, {
                        className: this.getClassNames(),
                        color: u.I.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.N.Flex
                    }, l.createElement(u._2, {
                        display: u.N.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(u._35, {
                        type: u._40.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(u._25, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === c.a.Live ? l.createElement(u._2, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.N.Flex,
                        alignItems: u.c.Center
                    }, l.createElement(u.E, {
                        status: u.G.Live,
                        size: u.F.Small
                    })) : l.createElement(u._15, {
                        asset: p[this.props.type],
                        type: h[this.props.type],
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
            return g
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
                    return a.createElement(d._2, {
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
                return a.createElement(d._46, {
                    gutterSize: d._48.Small,
                    childWidth: e.videoCardSize || d._47.Large,
                    placeholderItems: 20
                }, t, n)
            },
            u = Object(o.d)("VideoTower", {
                autoReportInteractive: !0
            })(c);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return u
        })
    },
    IWzU: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "fuelProductFull"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "GameProduct"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "fuelProduct"
                        },
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "publisher"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "websiteURL"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "eulaURL"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "supportURL"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "media"
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
                                    value: "backgroundImageURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "boxArtURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "screenshotURLs"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1920"
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "thumbnailURLs"
                                },
                                name: {
                                    kind: "Name",
                                    value: "screenshotURLs"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "460"
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
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
                                                value: "460"
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "260"
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "minimumSystemRequirement"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "systemRequirement"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "recommendedSystemRequirement"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "systemRequirement"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "supportedLanguages"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "productLangauge"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 636
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product.gql"\n#import "twilight/features/fuel/models/product-language.gql"\n#import "twilight/features/fuel/models/system-requirement.gql"\nfragment fuelProductFull on GameProduct {\n...fuelProduct\npublisher\nwebsiteURL\neulaURL\nsupportURL\nmedia {\nid\nbackgroundImageURL\nboxArtURL\nscreenshotURLs(width: 1920)\nthumbnailURLs: screenshotURLs(width:460)\nvideos {\nid\nlengthSeconds\npreviewThumbnailURL(width: 460 height: 260)\npublishedAt\ntitle\nviewCount\n}\n}\nminimumSystemRequirement {\n...systemRequirement\n}\nrecommendedSystemRequirement {\n...systemRequirement\n}\nsupportedLanguages {\n...productLangauge\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("wn+H").definitions)), i.definitions = i.definitions.concat(r(n("ny0O").definitions)), i.definitions = i.definitions.concat(r(n("iRJa").definitions)), e.exports = i
    },
    J5Bm: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("lfvs"),
            o = n("6sO2"),
            s = n("S1vB"),
            l = n("Odds"),
            d = (n("PlCc"), "https://twitch.amazon.com/prime/?ref_=sm_w_tup_ln_t_c"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        balloonOpen: !1
                    }, t.renderUnavailableText = function() {
                        var e = t.props.options.isInGameContent ? Object(o.d)("This content is currently unavailable", "FuelBuyButton") : Object(o.d)("This game is currently unavailable", "FuelBuyButton");
                        return a.createElement(l._35, {
                            italic: !0,
                            "data-target": "fuel-buy-button-unavailable"
                        }, e)
                    }, t.renderBuyNowButton = function(e, n, i, r) {
                        void 0 === r && (r = l.x.Default);
                        var s = null;
                        if (n && n.length > 1) {
                            var d = Object(o.d)("Includes {crates} Twitch Crates!", {
                                crates: n.length
                            }, "FuelBuyButton");
                            s = a.createElement(l._35, {
                                className: "fuel-buy-button__crates",
                                "data-target": "fuel-buy-button-crates"
                            }, d)
                        }
                        var c = i ? "fuel-buy-button-content" : "fuel-buy-button";
                        return a.createElement(l._2, {
                            alignItems: l.c.Center
                        }, a.createElement(l.u, {
                            fullWidth: !0,
                            icon: n && n.length > 0 ? l._16.Crate : void 0,
                            purchase: e,
                            onClick: t.props.onClickBuyNow,
                            "data-target": c,
                            size: r
                        }, Object(o.d)("Buy Now", "FuelBuyButton")), s)
                    }, t.renderPrimeTreatment = function(e, n) {
                        var i = [],
                            r = a.createElement(l._15, {
                                asset: l._16.Crown,
                                type: l._17.Prime,
                                width: 16,
                                height: 16,
                                key: "fuel-crown"
                            });
                        return i = e ? [r, a.createElement("div", {
                            className: "fuel-buy-button__prime-button",
                            key: "fuel-claim"
                        }, a.createElement(l.u, {
                            onClick: t.onClickClaimPrimeOffer
                        }, Object(o.d)("Claim Offer", "FuelBuyButton")))] : [r, a.createElement(l._2, {
                            padding: {
                                x: 1
                            },
                            key: "fuel-free-label"
                        }, a.createElement(l._35, {
                            type: l._40.Strong
                        }, Object(o.d)("Free", "FuelBuyButton"))), a.createElement("div", {
                            className: "fuel-buy-button__prime-trial-button",
                            key: "fuel-trial"
                        }, a.createElement(l.u, {
                            linkTo: d,
                            targetBlank: !0,
                            "data-target": "fuel-buy-button-prime-trial"
                        }, Object(o.d)("Start Your Free Trial", "FuelBuyButton")))], a.createElement(l._2, {
                            flexDirection: l.P.Row,
                            display: l.N.Flex,
                            alignItems: l.c.Center,
                            "data-target": "fuel-buy-button-prime"
                        }, i)
                    }, t.onClickClaimPrimeOffer = function() {
                        if (t.props.onClickClaimPrimeOffer) {
                            var e = t.props.options.info.primeOffer;
                            e && t.props.onClickClaimPrimeOffer(e.id)
                        }
                    }, t.renderExternalAcquisitionLink = function(e) {
                        return a.createElement("a", {
                            href: e.href,
                            target: "_blank"
                        }, e.children)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.options,
                        t = e.info,
                        n = e.countryCode,
                        i = e.externalAcquisition,
                        d = e.crates,
                        c = e.userHasPrime,
                        u = e.isInGameContent,
                        m = e.size,
                        p = t.primeOffer,
                        h = n && Object(s.a)(n),
                        g = !p || !h;
                    if (t.isEntitled) return a.createElement(l._35, {
                        "data-target": "fuel-buy-button-purchased"
                    }, Object(o.d)("Purchased", "FuelBuyButton"));
                    if (!t.isForSale && i && i.isExternal) return a.createElement("div", {
                        "data-target": "fuel-buy-button-external"
                    }, a.createElement(r, {
                        source: i.description,
                        renderers: {
                            Link: this.renderExternalAcquisitionLink
                        }
                    }));
                    if (!t.isForSale && g) return this.renderUnavailableText();
                    if (p && !c) {
                        var v = t.isForSale ? this.renderBuyNowButton(t.price, d, u, m) : void 0;
                        return this.renderPrimeTreatment(c, v)
                    }
                    return p ? this.renderPrimeTreatment(c) : this.renderBuyNowButton(t.price, d, u, m)
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return c
        })
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            a = n("GiK3"),
            r = (n.n(a), n("Odds")),
            o = n("yU6t"),
            s = (n.n(o), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.onDragEnter = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files), e.target.value = ""
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(r.O, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, a.createElement(r.W, {
                        position: r._9.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: r._52.Above
                    }, a.createElement("input", {
                        "data-test-selector": "file-picker-input",
                        className: "drag-and-drop-file-picker__input",
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        type: "file",
                        onDragLeave: this.onDragLeave,
                        onDragEnter: this.onDragEnter,
                        onDrop: this.onFileDrop
                    })), this.props.children)
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(a.Component))
    },
    Jg0G: function(e, t) {},
    JtGN: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryVideos_Game"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "gameName"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoLimit"
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
                            value: "followedCursor"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoSort"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoSort"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "languages"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "broadcastTypes"
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
                                    value: "BroadcastType"
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
                                    value: "gameName"
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
                                            value: "videoLimit"
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
                                            value: "followedCursor"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "languages"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "languages"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "types"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "broadcastTypes"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "sort"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "videoSort"
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
                end: 474
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery DirectoryVideos_Game($gameName: String $videoLimit: Int $followedCursor: Cursor $videoSort: VideoSort $languages: [String!] $broadcastTypes: [BroadcastType!]) {\ngame(name: $gameName) {\nid\nname\nvideos(first: $videoLimit after: $followedCursor languages: $languages types: $broadcastTypes sort: $videoSort) {\nedges{\ncursor\nnode {\n...PreviewCardVideo\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
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
    Jwld: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.configScript = null, t.enabledChannelNames = new Set(r.b.get("sizmek_versatag_channels", [])), t.enabledGameIDs = new Set(r.b.get("sizmek_versatag_games", [])), t.logger = r.i.withCategory("sizmek-versatag"), t.trackingScript = null, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    (this.props.gameID && this.enabledGameIDs.has(this.props.gameID) || this.props.channelName && this.enabledChannelNames.has(this.props.channelName)) && this.injectScripts()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (e.gameID && this.enabledGameIDs.has(e.gameID) && this.props.gameID !== e.gameID || e.channelName && this.enabledChannelNames.has(e.channelName) && this.props.channelName !== e.channelName) && this.reloadScripts()
                }, t.prototype.componentWillUnmount = function() {
                    this.removeScripts()
                }, t.prototype.render = function() {
                    return null
                }, t.prototype.reloadScripts = function() {
                    this.removeScripts(), this.injectScripts()
                }, t.prototype.removeScripts = function() {
                    try {
                        this.configScript && (document.body.removeChild(this.configScript), this.configScript = null, this.logger.debug("VersaTag config script removed.")), this.trackingScript && (document.body.removeChild(this.trackingScript), this.trackingScript = null, this.logger.debug("VersaTag tracking script removed."));
                        var e = document.querySelector('[src^="https://bs.serving-sys.com/Serving?"]');
                        e && (document.body.removeChild(e), this.logger.debug("Extra VersaTag scripts removed."))
                    } catch (e) {
                        this.logger.warn("Failed to remove VersaTag", {
                            error: e
                        })
                    }
                }, t.prototype.injectScripts = function() {
                    try {
                        document.querySelector('[data-target="' + t.configScriptSelector + '"]') || (this.configScript = document.createElement("script"), this.configScript.setAttribute("data-target", t.configScriptSelector), this.configScript.innerHTML = "\n          versaTag = {\n            id: '8034',\n            sync: 0,\n            dispType: 'js',\n            ptcl: 'HTTPS',\n            bsUrl: 'bs.serving-sys.com/BurstingPipe',\n            activityParams: {\n              OrderID: '',\n              Session: '',\n              Value: '',\n              productid: '',\n              productinfo: '',\n              Quantity: '',\n            },\n            retargetParams: {},\n            dynamicRetargetParams: {},\n            conditionalParams: {},\n          };\n        ", document.body.appendChild(this.configScript), this.logger.debug("VersaTag config script created.")), document.querySelector('[data-target="' + t.trackingScriptSelector + '"]') || (this.trackingScript = document.createElement("script"), this.trackingScript.setAttribute("data-target", t.trackingScriptSelector), this.trackingScript.id = "ebOneTagUrlId", this.trackingScript.async = !0, this.trackingScript.src = "https://secure-ds.serving-sys.com/SemiCachedScripts/ebOneTag.js", document.body.appendChild(this.trackingScript), this.logger.debug("VersaTag tracking script created."))
                    } catch (e) {
                        this.logger.warn("Failed to create VersaTag", {
                            error: e
                        })
                    }
                }, t.configScriptSelector = "sizmek-versatag-config", t.trackingScriptSelector = "sizmek-versatag-tracking", t
            }(a.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    "LEV+": function(e, t) {},
    LSBw: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "inGameContent"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "InGameContent"
                    }
                },
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
                            value: "description"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "info"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "productInfo"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "tags"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 144
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/product-info.gql"\nfragment inGameContent on InGameContent {\nid\ndescription\ninfo {\n...productInfo\n}\ntags\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("Bxh2").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
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
                                return [4, n.e(88).then(n.bind(null, "tk3B"))];
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
                                return [4, n.e(87).then(n.bind(null, "e/M0"))];
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
                                return [4, n.e(86).then(n.bind(null, "Dan5"))];
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
                                return [4, n.e(85).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            }
    },
    LnKh: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Clips_ModalDelete"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
                        }
                    },
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "curator"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "thumbnailURL"
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
                                    value: "viewCount"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 143
            }
        };
        n.loc.source = {
            body: "query Clips_ModalDelete($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ncurator {\nid\nlogin\n}\nthumbnailURL\ncreatedAt\nviewCount\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    MApH: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Chat_BanUserFromChatRoom"
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
                                value: "BanUserFromChatRoomInput"
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
                            value: "banUserFromChatRoom"
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
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "code"
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
                end: 126
            }
        };
        n.loc.source = {
            body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    MMhf: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("6sO2"),
            a = function(e) {
                switch (e) {
                    case "ar":
                        return Object(i.d)("Channels in Arabic", "DirectoryInternationalSectionHeader");
                    case "asl":
                        return Object(i.d)("Channels in American Sign Language", "DirectoryInternationalSectionHeader");
                    case "bg":
                        return Object(i.d)("Channels in Bulgarian", "DirectoryInternationalSectionHeader");
                    case "cs":
                        return Object(i.d)("Channels in Czech", "DirectoryInternationalSectionHeader");
                    case "da":
                        return Object(i.d)("Channels in Danish", "DirectoryInternationalSectionHeader");
                    case "de":
                        return Object(i.d)("Channels in German", "DirectoryInternationalSectionHeader");
                    case "el":
                        return Object(i.d)("Channels in Greek", "DirectoryInternationalSectionHeader");
                    case "es":
                        return Object(i.d)("Channels in Spanish", "DirectoryInternationalSectionHeader");
                    case "fi":
                        return Object(i.d)("Channels in Finnish", "DirectoryInternationalSectionHeader");
                    case "fr":
                        return Object(i.d)("Channels in French", "DirectoryInternationalSectionHeader");
                    case "hu":
                        return Object(i.d)("Channels in Hungarian", "DirectoryInternationalSectionHeader");
                    case "it":
                        return Object(i.d)("Channels in Italian", "DirectoryInternationalSectionHeader");
                    case "ja":
                        return Object(i.d)("Channels in Japanese", "DirectoryInternationalSectionHeader");
                    case "ko":
                        return Object(i.d)("Channels in Korean", "DirectoryInternationalSectionHeader");
                    case "nl":
                        return Object(i.d)("Channels in Dutch", "DirectoryInternationalSectionHeader");
                    case "no":
                        return Object(i.d)("Channels in Norwegian", "DirectoryInternationalSectionHeader");
                    case "pl":
                        return Object(i.d)("Channels in Polish", "DirectoryInternationalSectionHeader");
                    case "pt":
                        return Object(i.d)("Channels in Portuguese", "DirectoryInternationalSectionHeader");
                    case "ru":
                        return Object(i.d)("Channels in Russian", "DirectoryInternationalSectionHeader");
                    case "sk":
                        return Object(i.d)("Channels in Slovak", "DirectoryInternationalSectionHeader");
                    case "sv":
                        return Object(i.d)("Channels in Swedish", "DirectoryInternationalSectionHeader");
                    case "th":
                        return Object(i.d)("Channels in Thai", "DirectoryInternationalSectionHeader");
                    case "tr":
                        return Object(i.d)("Channels in Turkish", "DirectoryInternationalSectionHeader");
                    case "vi":
                        return Object(i.d)("Channels in Vietnamese", "DirectoryInternationalSectionHeader");
                    case "zh":
                        return Object(i.d)("Channels in Chinese", "DirectoryInternationalSectionHeader");
                    default:
                        return Object(i.d)("Channels in English", "DirectoryInternationalSectionHeader")
                }
            }
    },
    MjlB: function(e, t) {},
    OOh8: function(e, t) {},
    Ouuk: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            e || (e = navigator.userAgent);
            return !!i.exec(e)
        };
        var i = /\scurse\/\d/
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
                        var e, n, s, c, u, m;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = r.n.logger.withCategory("leagueoflegends-api"), t(Object(d.e)(!0)), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), n = r.n.intl.getLanguageCode(), s = l(n), c = o.a.getAPIURL("/api/lol/champions?" + a.stringify({
                                        locale: s,
                                        on_site: 1
                                    })).toString(), [4, o.a.get(c)];
                                case 2:
                                    return (u = i.sent()).body ? t(Object(d.f)(u.body)) : (e.warn("LoL champion API response body was empty."), t(Object(d.d)(!0))), [3, 4];
                                case 3:
                                    throw m = i.sent(), t(Object(d.d)(!0)), e.error(m, "Failed to load LoL champion data"), m;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, u)
            }
        };
        var c = 0,
            u = 350
    },
    PlCc: function(e, t) {},
    QAcM: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return c
        }), n.d(t, "c", function() {
            return g
        });
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = (n.n(r), n("6sO2")),
            s = n("+Znq"),
            l = n("CSlQ"),
            d = n("Odds");
        ! function(e) {
            e[e.All = 0] = "All", e[e.Month = 1] = "Month", e[e.Week = 2] = "Week", e[e.Day = 3] = "Day", e[e.Trending = 4] = "Trending"
        }(i || (i = {}));
        var c = ((m = {})[i.All] = "ALL_TIME", m[i.Day] = "LAST_DAY", m[i.Week] = "LAST_WEEK", m[i.Month] = "LAST_MONTH", m[i.Trending] = "TRENDING", m);

        function u(e) {
            switch (e) {
                case i.Day:
                    return Object(o.d)("24h", "TopClipsTimeFilter");
                case i.Week:
                    return Object(o.d)("7d", "TopClipsTimeFilter");
                case i.Month:
                    return Object(o.d)("30d", "TopClipsTimeFilter");
                case i.All:
                    return Object(o.d)("all", "TopClipsTimeFilter");
                default:
                    return ""
            }
        }
        var m, p = [i.Trending, i.Day, i.Week, i.Month, i.All],
            h = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderFilterButton = function(e) {
                        return r.createElement(d._0, {
                            key: e,
                            onClick: n.updateFilterFuncs[e],
                            "data-a-target": "time-filter-option-" + u(e),
                            selected: e === n.props.timeFilterValue
                        }, r.createElement(d._2, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, n.renderFilterText(e)))
                    }, n.state = {
                        isShowingMenu: !1
                    }, n.updateFilterFuncs = p.reduce(function(e, t) {
                        return e[t] = function() {
                            n.props.updateTimeFilter(t), n.setState({
                                isShowingMenu: !1
                            })
                        }, e
                    }, {}), n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(d._2, {
                        className: "top-clips-time-filter"
                    }, r.createElement(s.a, null, r.createElement(d.u, {
                        dropdown: !0,
                        type: d.z.Hollow,
                        "data-a-target": "time-filter-selection"
                    }, this.renderFilterText(this.props.timeFilterValue)), r.createElement(d.p, {
                        direction: d.q.BottomLeft,
                        noTail: !0
                    }, r.createElement(d._2, {
                        padding: {
                            y: .5
                        }
                    }, p.map(this.renderFilterButton)))))
                }, t.prototype.renderFilterText = function(e) {
                    return e === i.Trending ? r.createElement("span", null, Object(o.d)("Trending", "TopClipsTimeFilter")) : r.createElement(d._2, {
                        display: d.N.Flex
                    }, Object(o.d)("Top", "TopClipsTimeFilter"), r.createElement(d._2, {
                        margin: {
                            left: .5
                        }
                    }, r.createElement(d._6, {
                        type: d._7.Brand,
                        label: u(e)
                    })))
                }, t
            }(r.Component),
            g = Object(l.d)("TopClipsTimeFilter")(h)
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
            return u
        }), t.i = function(e) {
            u.emit(d, e)
        }, t.h = function(e) {
            u.emit(c, e)
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
            u = new i.EventEmitter
    },
    QYm2: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityPage_Details"
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
                                    value: "name"
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
                                    value: "description"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "rules"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "summary"
                                },
                                arguments: [],
                                directives: []
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
                            }, {
                                kind: "Field",
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
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
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
                end: 169
            }
        };
        n.loc.source = {
            body: "query CommunityPage_Details($name: String!) {\ncommunity(name: $name) {\nid\nname\ndisplayName\ndescription\nrules\nsummary\n}\ncurrentUser {\nid\nroles {\nisSiteAdmin\nisStaff\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    SG0P: function(e, t) {},
    SN3I: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("MMhf"),
            r = n("Odds"),
            o = function(e) {
                return i.createElement(r._2, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(r._35, {
                    type: r._40.H4,
                    color: r.I.Alt2,
                    fontSize: r.R.Size5,
                    transform: r._39.Uppercase,
                    "data-a-target": "international-section-header"
                }, Object(a.a)(e.languageCode)))
            };
        n.d(t, "a", function() {
            return o
        })
    },
    SiVO: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }),
            function(e) {
                e.JPEG = "image/jpeg", e.PNG = "image/png", e.GIF = "image/gif"
            }(i || (i = {}));
        var a = [i.JPEG, i.PNG]
    },
    TFaR: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.REQUESTED = 0] = "REQUESTED", e[e.POSTPROCESS_STARTED = 1] = "POSTPROCESS_STARTED", e[e.POSTPROCESS_COMPLETE = 2] = "POSTPROCESS_COMPLETE", e[e.COMPLETE = 3] = "COMPLETE", e[e.VALIDATION_FAILED = 4] = "VALIDATION_FAILED", e[e.POSTPROCESS_FAILED = 5] = "POSTPROCESS_FAILED", e[e.POSTPROCESS_RETRYING = 6] = "POSTPROCESS_RETRYING", e[e.FEATURE_SERVICE_FAILED = 7] = "FEATURE_SERVICE_FAILED", e[e.IS_IMAGE_VALIDATION_FAILED = 110] = "IS_IMAGE_VALIDATION_FAILED", e[e.ASPECT_RATIO_VALIDATION_FAILED = 111] = "ASPECT_RATIO_VALIDATION_FAILED", e[e.WIDTH_VALIDATION_FAILED = 112] = "WIDTH_VALIDATION_FAILED", e[e.HEIGHT_VALIDATION_FAILED = 113] = "HEIGHT_VALIDATION_FAILED", e[e.IMAGE_FORMAT_VALIDATION_FAILED = 114] = "IMAGE_FORMAT_VALIDATION_FAILED", e[e.FILE_SIZE_VALIDATION_FAILED = 120] = "FILE_SIZE_VALIDATION_FAILED", e[e.TRANSFORMATION_FAILED = 210] = "TRANSFORMATION_FAILED", e[e.PROCESSING_FAILED = 220] = "PROCESSING_FAILED"
            }(i || (i = {}))
    },
    TLUY: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsCards__Game"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "gameName"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "criteria"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "GameClipsInput"
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
                                    value: "gameName"
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
                                    value: "clips"
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
                                        value: "criteria"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "criteria"
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
                                    }, {
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
                                                            value: "slug"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "embedURL"
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
                                                            value: "viewCount"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "language"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "curator"
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
                                                                        value: "52"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "72"
                                                                    }
                                                                }],
                                                                directives: []
                                                            }]
                                                        }
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
                                                            value: "thumbnailURL"
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
                                                            value: "durationSeconds"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "champBadge"
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
                end: 462
            }
        };
        n.loc.source = {
            body: "query ClipsCards__Game($gameName: String! $limit: Int $cursor: Cursor $criteria: GameClipsInput) {\ngame(name: $gameName) {\nid\nclips(first: $limit after: $cursor criteria: $criteria) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\nid\nslug\nurl\nembedURL\ntitle\nviewCount\nlanguage\ncurator {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 52 height: 72)\n}\nbroadcaster {\nid\nlogin\ndisplayName\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\nchampBadge {\nid\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    "UJ+F": function(e, t) {},
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
            u = n("3yQz"),
            m = n("Odds"),
            p = (n("C2pI"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortChangeHandler = function(e) {
                        n.props.onVideoSortChange(e.target.value)
                    }, n.renderLanguageSelector = function() {
                        return n.props.hideLanguageSelector ? null : r.createElement(m._2, {
                            display: m.N.InlineFlex,
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
                        s = Object(o.d)("Highlights", "VideoFilter"),
                        p = Object(o.d)("Uploads", "VideoFilter"),
                        h = this.props.selectedSort && Object(c.f)(this.props.selectedSort) || u.a;
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
                    var g = {
                            "video-filters": !0,
                            "video-filters--active": !0
                        },
                        v = {
                            "video-filters": !0
                        },
                        f = null;
                    return this.state.isPremiereExperimentActive && (f = r.createElement(m._0, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.PastPremiere,
                        "data-a-target": "video-type-filter-past-premieres"
                    }, r.createElement(m._2, {
                        className: a(this.props.broadcastType === d.a.PastPremiere ? g : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-past-premiere"
                    }, n))), r.createElement(m._2, {
                        margin: {
                            bottom: 2
                        },
                        display: m.N.Flex,
                        justifyContent: m._1.Between
                    }, r.createElement("div", null, this.renderLanguageSelector(), r.createElement(m._2, {
                        display: m.N.InlineFlex
                    }, r.createElement(l.a, {
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
                    }, r.createElement(m._2, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, r.createElement(m._0, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": "all",
                        "data-a-target": "video-type-filter-all"
                    }, r.createElement(m._2, {
                        className: a(this.props.broadcastType ? v : g),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-all"
                    }, t)), f, r.createElement(m._0, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Archive,
                        "data-a-target": "video-type-filter-past-broadcasts"
                    }, r.createElement(m._2, {
                        className: a(this.props.broadcastType === d.a.Archive ? g : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-archive"
                    }, i)), r.createElement(m._0, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Highlight,
                        "data-a-target": "video-type-filter-highlights"
                    }, r.createElement(m._2, {
                        className: a(this.props.broadcastType === d.a.Highlight ? g : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-highlight"
                    }, s)), r.createElement(m._0, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Upload,
                        "data-a-target": "video-type-filter-uploads"
                    }, r.createElement(m._2, {
                        className: a(this.props.broadcastType === d.a.Upload ? g : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-upload"
                    }, p))))))), r.createElement("div", null, r.createElement(m._21, {
                        name: "sort",
                        onChange: this.sortChangeHandler,
                        value: h,
                        "data-a-target": "video-sort-select"
                    }, r.createElement("option", {
                        "data-test-selector": "sort-option-newest",
                        value: u.a,
                        "data-a-target": "video-sort-newest"
                    }, Object(o.d)("Newest", "VideoFilter")), r.createElement("option", {
                        "data-test-selector": "sort-option-popular",
                        value: u.b,
                        "data-a-target": "video-sort-popular"
                    }, Object(o.d)("Popular", "VideoFilter")))))
                }, t
            }(r.Component)),
            h = n("ISok");
        n.d(t, "a", function() {
            return p
        }), n.d(t, "b", function() {
            return h.a
        }), n.d(t, !1, function() {})
    },
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-062a1df5ff2aaa76eb8e129940ef964a.png"
    },
    WNmM: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, "d", function() {
            return u
        }), n.d(t, "c", function() {
            return m
        });
        var i, a = n("6sO2"),
            r = n("8Wuk"),
            o = n("vH/s"),
            s = ((i = {})[r.b.Twitter] = "twitter", i[r.b.Reddit] = "reddit", i[r.b.VKontakte] = "vkontakte", i[r.b.Facebook] = "facebook", i[r.b.Copy] = "link", i[r.b.CopyInput] = "option_link", i),
            l = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            d = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            c = {
                MyClips: o.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: o.PageviewLocation.ChannelClipsManager,
                TopClipsGame: o.PageviewLocation.ClipsGame,
                TopClipsChannel: o.PageviewLocation.ChannelClips
            },
            u = function(e, t) {
                return function(n) {
                    a.n.tracking.track(o.SpadeEventType.VideoShare, {
                        vod_id: e.id,
                        vod_type: "clip",
                        share_platform: s[n],
                        location: c[t],
                        game: e.game ? e.game.name : null,
                        channel_id: e.broadcaster ? Number(e.broadcaster.id) : 0,
                        channel: e.broadcaster ? e.broadcaster.login : "",
                        live: null
                    })
                }
            },
            m = function(e) {
                var t = e.targetURL,
                    n = e.type;
                a.n.tracking.track(o.SpadeEventType.ClipChampHelpClick, {
                    target_url: t,
                    type: n.toLowerCase()
                })
            }
    },
    WxKK: function(e, t, n) {
        "use strict";
        var i = n("7FW4");
        n.d(t, "a", function() {
            return i.a
        })
    },
    XITx: function(e, t) {},
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            a = (n.n(i), n("Odds")),
            r = function() {
                return i.createElement(a.A, null, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._8, null)), i.createElement(a.B, null, i.createElement(a._2, {
                    display: a.N.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a._2, {
                    display: a.N.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._8, {
                    width: 40,
                    height: 56
                })), i.createElement(a._2, {
                    display: a.N.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a._35, null, i.createElement(a._8, {
                    width: 150
                })), i.createElement(a._35, {
                    fontSize: a.R.Size7
                }, i.createElement(a._8, {
                    width: 100
                }))))))
            }
    },
    YADZ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryHeader_DirectoryAvatar"
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
                                    value: "displayName"
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
                                        value: "80"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "112"
                                    }
                                }],
                                directives: []
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
                            }, {
                                kind: "Field",
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
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
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
                end: 220
            }
        };
        n.loc.source = {
            body: "query DirectoryHeader_DirectoryAvatar($name: String! $type: DirectoryType!) {\ndirectory(name: $name type: $type) {\nid\nname\ndisplayName\navatarURL(width: 80 height: 112)\n}\ncurrentUser {\nid\nroles {\nisSiteAdmin\nisStaff\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    YUUt: function(e, t, n) {
        e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc37349dfbde7c720.png"
    },
    ZdVn: function(e, t) {},
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return g
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("OAwv")),
            o = (n.n(r), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("6sO2"),
            d = n("SZoP"),
            c = n("mi6k"),
            u = n("CSlQ"),
            m = n("Odds"),
            p = n("a0ve"),
            h = (n.n(p), function(e) {
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
                    return null !== t && (e = o.createElement(m._2, {
                        position: m._9.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, o.createElement(m._12, {
                        size: m._13.Small,
                        value: t,
                        mask: !0
                    }))), o.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(m._53)(this.props)), o.createElement(m.A, null, o.createElement(m._2, {
                        fullWidth: !0
                    }, o.createElement(m.j, {
                        overflow: !0
                    }, o.createElement("div", null, o.createElement(m._25, {
                        display: m.N.InlineFlex,
                        position: m._9.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: m._52.Default,
                        fontSize: m.R.Size6,
                        background: m.m.Overlay,
                        color: m.I.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._24, {
                        "data-test-selector": "video-view-count",
                        icon: m._16.GlyphViews,
                        label: Object(l.d)("views", "VideoPreviewCard"),
                        value: Object(l.f)(this.props.video.viewCount)
                    })), o.createElement(m._25, {
                        display: m.N.InlineFlex,
                        position: m._9.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: m._52.Default,
                        fontSize: m.R.Size6,
                        background: m.m.Overlay,
                        color: m.I.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._24, {
                        "data-test-selector": "video-length",
                        icon: m._16.GlyphLength,
                        label: Object(l.d)("length", "VideoPreviewCard"),
                        value: Object(c.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), o.createElement(m.B, null, o.createElement(m._2, {
                        display: m.N.Flex,
                        flexDirection: m.P.Row,
                        flexWrap: m.Q.NoWrap,
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
                    }, o.createElement(m.W, {
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
                    return o.createElement(m._2, {
                        "data-test-selector": "game-box-art",
                        display: m.N.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(m.W, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(m._43, {
                        display: m.N.Block,
                        direction: m._45.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(m.C, {
                        aspect: m.k.BoxArt,
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
                    return o.createElement(m._2, {
                        display: m.N.Flex,
                        flexDirection: m.P.Column,
                        overflow: m._5.Hidden
                    }, o.createElement(m._2, {
                        "data-test-selector": "video-title",
                        overflow: m._5.Hidden,
                        position: m._9.Relative
                    }, o.createElement(m._35, {
                        color: m.I.Base,
                        fontSize: m.R.Size5,
                        lineHeight: m._3.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(m._2, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(m._35, {
                        type: m._40.Span,
                        color: m.I.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(m.W, {
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
            g = Object(u.d)("VideoPreviewCard")(h)
    },
    aFoJ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Fuel_ClaimPrimeOffer"
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
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
                end: 133
            }
        };
        n.loc.source = {
            body: "mutation Fuel_ClaimPrimeOffer($input: ClaimPrimeOfferInput!) {\nclaimPrimeOffer(input: $input) {\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bdk8: function(e, t) {},
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
    "d+bE": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_UnfollowCommunity"
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
                                value: "UnfollowCommunityInput"
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
                            value: "unfollowCommunity"
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
                end: 144
            }
        };
        n.loc.source = {
            body: "mutation DirectoryFollowButton_UnfollowCommunity($input: UnfollowCommunityInput!) {\nunfollowCommunity(input: $input) {\nfollow {\nfollowedAt\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    dH4b: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            return e.replace(/(^|\n)(#+)([^\s#]+)/g, function(e, t, n, i) {
                return "" + t + n + " " + i
            })
        }, n.d(t, "a", function() {
            return r
        });
        var i = n("TToO"),
            a = n("GiK3");
        n.n(a);
        var r = {
            allowedTypes: ["BlockQuote", "Emph", "Hardbreak", "Heading", "Item", "Link", "List", "Paragraph", "Softbreak", "Strong", "Text"],
            className: "panel-description",
            renderers: {
                Heading: function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e;
                        switch (this.props.level) {
                            case 1:
                                e = "h4";
                                break;
                            case 6:
                                e = "h6";
                                break;
                            default:
                                e = "h5"
                        }
                        return Object(a.createElement)(e, {}, this.props.children)
                    }, t
                }(a.Component),
                Link: function(e) {
                    return a.createElement("a", {
                        href: e.href,
                        title: e.title,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, e.children)
                }
            },
            skipHtml: !0,
            softBreak: "br"
        }
    },
    ehrk: function(e, t) {},
    f6Cj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return Object(i.a)(a, {
                u: e
            })
        }, t.c = function(e, t) {
            return Object(i.a)(r, {
                url: e,
                text: t
            })
        }, t.b = function(e, t) {
            return Object(i.a)(o, {
                url: e,
                title: t
            })
        }, t.d = function(e) {
            return Object(i.a)(s, {
                url: e
            })
        };
        var i = n("yDzg"),
            a = "https://www.facebook.com/sharer/sharer.php",
            r = "https://www.twitter.com/share",
            o = "https://www.reddit.com/submit",
            s = "https://vk.com/share.php"
    },
    hNWd: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.d = function(e) {
            if (!e.game || !e.product) return;
            var t, n;
            e.user && (t = e.user.displayName, n = e.user.id);
            var i = {
                location: e.location,
                game_id: e.game.id,
                game_name: e.game.name,
                developer: e.product.developer,
                genre: e.product.genres,
                asin: e.info.asin,
                channel: t,
                channel_id: n,
                crate: e.info.crateASINs
            };
            a.n.tracking.track(o.SpadeEventType.FuelBuyButton, i)
        }, t.f = function(e) {
            var t = {
                asin: e.item.info.asin,
                price: e.item.info.price,
                channel_id: e.user.id,
                channel: e.user.login,
                game_id: e.game.id,
                game_name: e.game.name,
                impression_group_id: e.impressionGroupID,
                impression_id: e.impressionID,
                item_index: e.index,
                max_index: e.offerCount,
                offer_type: e.offerType,
                store_id: l(e.item.info.purchaseURL)
            };
            a.n.tracking.track(o.SpadeEventType.FuelOfferView, t)
        }, t.e = function(e, t) {
            var n = {
                action: e,
                asin: t.item.info.asin,
                price: t.item.info.price,
                channel_id: t.user.id,
                channel: t.user.login,
                game_id: t.game.id,
                game_name: t.game.name,
                impression_group_id: t.impressionGroupID,
                impression_id: t.impressionID,
                item_index: t.index,
                max_index: t.offerCount,
                offer_type: t.offerType,
                store_id: l(t.item.info.purchaseURL)
            };
            a.n.tracking.track(o.SpadeEventType.FuelOfferInteraction, n)
        }, t.c = function(e, t, n) {
            var i = Object(r.b)(),
                a = e.inGameContent.length + 1,
                o = {
                    product: {
                        game: t,
                        user: n,
                        item: e,
                        impressionGroupID: i,
                        offerCount: a,
                        impressionID: Object(r.b)(),
                        index: 0,
                        offerType: "fuel"
                    },
                    igc: {}
                };
            return e.inGameContent.forEach(function(e, s) {
                o.igc[e.id] = {
                    game: t,
                    user: n,
                    item: e,
                    impressionGroupID: i,
                    offerCount: a,
                    impressionID: Object(r.b)(),
                    index: s + 1,
                    offerType: "fuel"
                }
            }), o
        }, t.b = function(e, t, n) {
            var i = Object(r.b)(),
                a = e.length,
                o = {};
            return e.forEach(function(e, s) {
                o[e.id] = {
                    impressionGroupID: i,
                    index: s,
                    offerCount: a,
                    game: t,
                    user: n,
                    item: e,
                    impressionID: Object(r.b)(),
                    offerType: "bt"
                }
            }), o
        };
        var i, a = n("6sO2"),
            r = n("HM6l"),
            o = n("vH/s"),
            s = /tag=(.*?)(&|$)/;

        function l(e) {
            var t = e.match(s);
            return t && t.length >= 2 ? t[1] : ""
        }! function(e) {
            e.Hover = "hover", e.ViewDetails = "view_asin_detail", e.ClickToAmazon = "click_to_amazon"
        }(i || (i = {}))
    },
    hcPX: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GamePage_Events"
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
                                    value: "featuredEventBroadcasts"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "live"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "InlineEventBroadcast"
                                                },
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "future"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "InlineEventBroadcast"
                                                },
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
                                                            value: "emailEnabled"
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
                                            value: "past"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "InlineEventBroadcast"
                                                },
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "highlights"
                                                },
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
                                                        kind: "IntValue",
                                                        value: "3"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "type"
                                                    },
                                                    value: {
                                                        kind: "EnumValue",
                                                        value: "HIGHLIGHT"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "sort"
                                                    },
                                                    value: {
                                                        kind: "EnumValue",
                                                        value: "VIEWS"
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
                                                                            value: "title"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "thumbnailURLs"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "54"
                                                                            }
                                                                        }, {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "width"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "96"
                                                                            }
                                                                        }],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "viewCount"
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
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "vods"
                                                },
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
                                                        kind: "IntValue",
                                                        value: "1"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "type"
                                                    },
                                                    value: {
                                                        kind: "EnumValue",
                                                        value: "ARCHIVE"
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
                                                                            value: "title"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "thumbnailURLs"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "54"
                                                                            }
                                                                        }, {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "width"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "96"
                                                                            }
                                                                        }],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "viewCount"
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
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "InlineEventBroadcast"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "EventBroadcast"
                    }
                },
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
                            value: "startAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "endAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "coverImageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "340"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "193"
                            }
                        }],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 674
            }
        };
        n.loc.source = {
            body: "query GamePage_Events($name: String!) {\ngame(name: $name) {\nid\nname\nfeaturedEventBroadcasts {\nlive {\n...InlineEventBroadcast\nowner {\nstream {\nid\nviewersCount\n}\n}\n}\nfuture {\n...InlineEventBroadcast\nself {\nemailEnabled\n}\n}\npast {\n...InlineEventBroadcast\nhighlights: videos(first: 3 type:HIGHLIGHT sort:VIEWS) {\nedges {\nnode {\nid\ntitle\nthumbnailURLs(height: 54 width:96)\nviewCount\nlengthSeconds\n}\n}\n}\nvods: videos(first: 1 type:ARCHIVE) {\nedges {\nnode {\nid\ntitle\nthumbnailURLs(height: 54 width:96)\nviewCount\nlengthSeconds\n}\n}\n}\n}\n}\n}\n}\nfragment InlineEventBroadcast on EventBroadcast {\nid\ntitle\nstartAt\nendAt\ncoverImageURL(width:340 height:193)\nowner {\nid\nlogin\ndisplayName\n}\n}",
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
                        return n = new Set(l()), t ? n.add(e) : n.delete(e), d = Array.from(n), a.k.set(s, d), r(Object(o.b)(d)), [2]
                    })
                })
            }
        }, t.a = function() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.k.set(s, []), t(Object(o.b)([])), [2]
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
            return a.k.get(s, []).filter(function(e) {
                return r.a.has(e)
            })
        }
    },
    iRJa: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "systemRequirement"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "SystemRequirement"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "osVersion"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "processor"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "ram"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "videoCard"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "directXVersion"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "hardDriveSpace"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "other"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 121
            }
        };
        n.loc.source = {
            body: "fragment systemRequirement on SystemRequirement {\nosVersion\nprocessor\nram\nvideoCard\ndirectXVersion\nhardDriveSpace\nother\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (!e) return void i.i.warn("[onPopupClose] Attempted to observe a window that failed to open.");
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
        };
        var i = n("6sO2")
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
    kuCN: function(e, t) {},
    lTii: function(e, t) {},
    n2E0: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            switch (e) {
                case i.a.Archive:
                    return a.SpadeVideoBroadcastType.Archive;
                case i.a.Highlight:
                    return a.SpadeVideoBroadcastType.Highlight;
                case i.a.Upload:
                    return a.SpadeVideoBroadcastType.Upload;
                case i.a.WatchParty:
                    return a.SpadeVideoBroadcastType.WatchParty;
                case i.a.PastPremiere:
                    return a.SpadeVideoBroadcastType.PastPremiere;
                case i.a.PremiereUpload:
                    return a.SpadeVideoBroadcastType.PremiereUpload;
                default:
                    var t = e;
                    return t
            }
        }, t.a = function(e) {
            switch (e) {
                case r.b:
                    return a.PageviewContent.PopularVideos;
                case r.a:
                    return a.PageviewContent.RecentVideos;
                default:
                    var t = e;
                    return t
            }
        };
        var i = n("6WAQ"),
            a = n("vH/s"),
            r = n("3yQz")
    },
    nAt9: function(e, t) {},
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
    ny0O: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "productLangauge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "ProductLanguage"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "language"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "hasInterface"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "hasAudio"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "hasSubtitles"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 91
            }
        };
        n.loc.source = {
            body: "fragment productLangauge on ProductLanguage {\nlanguage\nhasInterface\nhasAudio\nhasSubtitles\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    oAfo: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            var n = i.test(e.info.price),
                a = i.test(t.info.price);
            if (n && a) {
                var r = +e.info.price.replace("$", ""),
                    o = +t.info.price.replace("$", ""),
                    s = r - o;
                return 0 !== s ? s : e.info.title.localeCompare(t.info.title)
            }
            return n && !a ? -1 : a ? 1 : e.info.price.localeCompare(t.info.price)
        };
        var i = /^\$[\d]+.[\d]{2}$/
    },
    oHn4: function(e, t) {},
    odW7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_FollowCommunity"
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
                                value: "FollowCommunityInput"
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
                            value: "followCommunity"
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
                end: 161
            }
        };
        n.loc.source = {
            body: "mutation DirectoryFollowButton_FollowCommunity($input: FollowCommunityInput!) {\nfollowCommunity(input: $input) {\ncommunity {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
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
    "qs/O": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_Community"
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
                end: 142
            }
        };
        n.loc.source = {
            body: "query DirectoryFollowButton_Community($name: String!) {\ncommunity(name: $name) {\nid\nname\nself {\nfollow {\nfollowedAt\n}\n}\n}\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    qw9S: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GamePage_Game"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "languages"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "filters"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "StreamMetadataFilterInput"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Community"
                                    }
                                },
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
                                                value: "languages"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "languages"
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
                                                                    }, {
                                                                        kind: "Field",
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
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "isPartner"
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
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Game"
                                    }
                                },
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
                                                value: "languages"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "languages"
                                                }
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "filters"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "filters"
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
                                                                    }, {
                                                                        kind: "Field",
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
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "isPartner"
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
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "streamMetadata"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "counterStrikeGlobalOffensive"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "skill"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "hearthstone"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "broadcasterHeroClass"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "overwatch"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "broadcasterCharacter"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "leagueOfLegends"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "championID"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "summonerDivision"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "summonerID"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "summonerName"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "summonerRank"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 1053
            }
        };
        n.loc.source = {
            body: "query GamePage_Game($name: String! $type: DirectoryType! $limit: Int $languages: [String!] $cursor: Cursor $filters: StreamMetadataFilterInput) {\ndirectory(name: $name type: $type) {\nid\ndisplayName\n... on Community {\nid\nstreams(first: $limit after: $cursor languages: $languages) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nroles {\nisPartner\n}\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n... on Game {\nid\nstreams(first: $limit after: $cursor languages: $languages filters: $filters) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nroles {\nisPartner\n}\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\nstreamMetadata {\ncounterStrikeGlobalOffensive {\nskill\n}\nhearthstone {\nbroadcasterHeroClass\n}\noverwatch {\nbroadcasterCharacter\n}\nleagueOfLegends {\nchampionID\nsummonerDivision\nsummonerID\nsummonerName\nsummonerRank\n}\n}\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}\n}",
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
    sEID: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return d
        });
        var i = n("GiK3"),
            a = (n.n(i), n("8Wuk")),
            r = n("yDzg"),
            o = n("WNmM"),
            s = n("Odds"),
            l = [{
                type: a.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: a.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: a.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: a.b.Copy
            }],
            d = function(e) {
                return i.createElement(s._2, {
                    className: "clips-social-share",
                    display: s.N.Flex,
                    flexWrap: s.Q.NoWrap
                }, l.map(function(t) {
                    return i.createElement(s._2, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(a.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(r.a)(e.clip.url, t.params),
                        onShareClick: Object(o.d)(e.clip, e.pageType)
                    }))
                }))
            }
    },
    sJt0: function(e, t) {},
    sikP: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("rCmJ"),
            s = n("Odds"),
            l = (n("XITx"), {
                TITLE: "clips-modal-title",
                MAIN_BODY: "clips-modal-main-body",
                SUCCESS_BODY: "clips-modal-success-body",
                ERROR_BODY: "clips-modal-error-body",
                SUBMIT_BUTTON: "clips-modal-submit-button",
                CANCEL_BUTTON: "clips-modal-cancel-button"
            }),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSuccess = function() {
                        return t.props.successContent ? a.createElement(s._25, {
                            "data-test-selector": l.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.m.Alt,
                            fullWidth: !0
                        }, a.createElement(s._35, {
                            type: s._40.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? a.createElement(s._25, {
                            "data-test-selector": l.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.m.Alt,
                            fullWidth: !0
                        }, a.createElement(s._35, {
                            type: s._40.Strong,
                            color: s.I.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? a.createElement(o.a, {
                        onClickOut: this.props.onClose
                    }, a.createElement(s._25, {
                        padding: 2,
                        background: s.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), a.createElement(s._2, {
                        display: s.N.Flex,
                        justifyContent: s._1.Center
                    }, a.createElement(s._2, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(s.u, {
                        "data-test-selector": l.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(r.d)("Close", "ClipsModal")))))) : a.createElement(o.a, {
                        onClickOut: this.props.onClose
                    }, a.createElement(s._25, {
                        padding: 2,
                        background: s.m.Base,
                        className: "clip-modal"
                    }, a.createElement(s._25, {
                        "data-test-selector": l.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), a.createElement(s._25, {
                        "data-test-selector": l.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), a.createElement(s._2, {
                        display: s.N.Flex,
                        justifyContent: s._1.Center
                    }, a.createElement(s._2, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(s.u, {
                        "data-test-selector": l.CANCEL_BUTTON,
                        type: s.z.Text,
                        onClick: this.props.onClose
                    }, Object(r.d)("Cancel", "ClipsModal"))), a.createElement(s._2, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(s.u, {
                        "data-test-selector": l.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : s.z.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && a.createElement(s._4, {
                        delay: 0
                    })))))
                }, t
            }(a.Component),
            c = n("1OO3"),
            u = n("CSlQ"),
            m = 86400,
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        hasErrored: !1,
                        hasSucceeded: !1
                    }, t.renderTitle = function() {
                        return t.props.isTemporary ? a.createElement(s._35, {
                            type: s._40.H5,
                            ellipsis: !0
                        }, Object(r.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : a.createElement(s._35, {
                            type: s._40.H5,
                            ellipsis: !0
                        }, Object(r.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? a.createElement(s._35, null, Object(r.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser")) : a.createElement(s._35, null, Object(r.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(r.d)("Timeout User", "ClipsModalBanUser") : Object(r.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(r.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(r.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                    }, t.banUser = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e = this.props.targetUser.login, t = this.props.isTemporary ? this.props.banUserMutation(e, m) : this.props.banUserMutation(e), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, t];
                                    case 2:
                                        return n.sent().banUserFromChatRoom.error ? this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }) : this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(d, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(a.Component),
            h = Object(u.d)("ClipsModalBanUser")(Object(c.b)(function(e) {
                return {
                    channelID: e.broadcasterID
                }
            })(p)),
            g = n("7vx8"),
            v = n("wnjK");

        function f(e) {
            return Object(g.a)(v, e)
        }
        var y = n("LnKh"),
            k = (n("lTii"), this),
            b = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            _ = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onDeleteClick = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), this.props.data.clip ? [4, this.props.deleteClip(this.props.slug)] : [2];
                                    case 2:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.state = b, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = [a.createElement(s._35, {
                        key: "title",
                        type: s._40.H4
                    }, Object(r.d)("Delete This Clip", "ClipsModalDelete")), a.createElement(s._2, {
                        key: "message",
                        margin: {
                            top: 1
                        }
                    }, a.createElement(s._35, {
                        type: s._40.P,
                        color: s.I.Alt2
                    }, Object(r.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                    if (!this.props.data.clip) return null;
                    var t = null;
                    this.props.data.clip.curator && (t = a.createElement("span", null, " • ", Object(r.d)("Clipped by {curator}", {
                        curator: this.props.data.clip.curator.login
                    }, "ClipsModalDelete")));
                    var n = a.createElement(s._25, {
                        display: s.N.Flex,
                        flexWrap: s.Q.NoWrap
                    }, a.createElement(s._2, {
                        className: "clips-modal-delete__thumb",
                        margin: {
                            right: 1
                        }
                    }, a.createElement(s.j, {
                        ratio: s.k.Aspect16x9
                    }, a.createElement("img", {
                        src: this.props.data.clip.thumbnailURL
                    }))), a.createElement(s._2, null, a.createElement(s._35, {
                        type: s._40.H5
                    }, this.props.data.clip.title), a.createElement(s._35, {
                        color: s.I.Alt2
                    }, Object(r.d)("{created, date, medium}", {
                        created: new Date(this.props.data.clip.createdAt)
                    }, "ClipsModalDelete"), t), a.createElement(s._35, {
                        color: s.I.Alt2
                    }, Object(r.d)("{viewCount, number} views", {
                        viewCount: this.props.data.clip.viewCount
                    }, "ClipsModalDelete"))));
                    return a.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: n,
                        buttonContent: Object(r.d)("Delete", "ClipsModalDelete"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(a.Component),
            S = Object(g.a)(y)(f({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return i.__awaiter(k, void 0, void 0, function() {
                                var n;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: [t]
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return i.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                        case 2:
                                            throw n = i.sent(), r.i.error(n, "Failed to delete clip"), n;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(_)),
            N = n("3zLD"),
            E = n("wqRA"),
            C = this,
            w = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            O = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.deleteAll = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.deleteAllClips(this.props.broadcastID, this.props.videoID)];
                                    case 2:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.renderSuccess = function() {
                        return n.state.hasSucceeded ? Object(r.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                    }, n.renderFailure = function() {
                        return n.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                    }, n.state = w, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = a.createElement(s._35, {
                        type: s._40.P
                    }, Object(r.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return a.createElement(d, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: a.createElement(s._35, {
                            type: s._40.H4
                        }, Object(r.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(r.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(a.Component),
            D = Object(N.compose)(Object(u.d)("ClipsModalDeleteAll"), f({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return i.__awaiter(C, void 0, void 0, function() {
                                var a, o, s;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 6, , 7]), a = void 0, n ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        videoID: n
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return o = i.sent(), a = o.data, [3, 5];
                                        case 2:
                                            return t ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        broadcastID: t
                                                    }
                                                }
                                            })] : [3, 4];
                                        case 3:
                                            return o = i.sent(), a = o.data, [3, 5];
                                        case 4:
                                            throw new Error("Invalid broadcastID specified for deleteAllClips");
                                        case 5:
                                            return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(a.deleteClips.clips), [3, 7];
                                        case 6:
                                            throw s = i.sent(), r.i.error(s, "Failed to delete clips from VOD"), s;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            }), Object(g.a)(E, {
                props: function(e) {
                    var t = e.data.clip;
                    return t ? {
                        videoID: t.video ? t.video.id : null,
                        broadcastID: t.broadcast.id
                    } : {
                        videoID: null,
                        broadcastID: ""
                    }
                },
                options: function(e) {
                    return {
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }))(O),
            T = this,
            F = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            I = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderSuccess = function() {
                        return n.state.hasSucceeded ? Object(r.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, n.renderError = function() {
                        return n.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                    }, n.onDeleteClick = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.deleteClips()];
                                    case 2:
                                        return e.sent(), this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.state = F, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a.createElement(s._35, {
                            type: s._40.H4
                        }, Object(r.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = a.createElement(s._35, {
                            type: s._40.P
                        }, Object(r.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return a.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(r.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(a.Component),
            L = f({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return i.__awaiter(T, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: e.ownProps.clipSlugs
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                        case 2:
                                            throw t = n.sent(), r.i.error(t, "Failed to delete clips"), t;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(I);
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return h
        }), n.d(t, "d", function() {
            return S
        }), n.d(t, "e", function() {
            return D
        }), n.d(t, "c", function() {
            return L
        })
    },
    tmqW: function(e, t) {},
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
    vxr0: function(e, t) {},
    wB6A: function(e, t) {},
    wXwV: function(e, t, n) {
        "use strict";
        n.d(t, "f", function() {
            return o
        }), n.d(t, "g", function() {
            return s
        }), n.d(t, "e", function() {
            return l
        }), n.d(t, "c", function() {
            return d
        }), n.d(t, "a", function() {
            return c
        }), n.d(t, "d", function() {
            return u
        }), n.d(t, "b", function() {
            return p
        });
        var i, a = n("6sO2"),
            r = n("SiVO"),
            o = function(e, t) {
                return Object(a.d)("Recommended image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            s = function(e, t) {
                return Object(a.d)("Required image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            l = function(e) {
                return Object(a.d)("Couldn't upload image. Request returned {statusCode, number}", {
                    statusCode: e
                }, "ImageUploader")
            },
            d = function() {
                return Object(a.d)("The privided image does not have the required dimensions.", "ImageUploader")
            },
            c = function() {
                return Object(a.d)("File too large.", "ImageUploader")
            },
            u = function() {
                return Object(a.d)("Unexpected error while uploading your image. Please try again later", "ImageUploader")
            },
            m = ((i = {})[r.a.JPEG] = "JPG", i[r.a.PNG] = "PNG", i[r.a.GIF] = "GIF", i),
            p = function(e) {
                var t = e.map(function(e) {
                    return m[e]
                });
                return t.length > 1 && (t[t.length - 1] = "or " + t[t.length - 1]), Object(a.d)("Incompatible format. File must be an image in {allowedTypes} format.", {
                    allowedTypes: t.join(", ")
                }, "ImageUploader")
            }
    },
    "wn+H": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "fuelProduct"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "GameProduct"
                    }
                },
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
                            value: "acquisition"
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
                                    value: "description"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isExternal"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "developer"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "esrbRating"
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
                                    value: "details"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "iconURL"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "featureDetails"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "genres"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "inGameContent"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "inGameContent"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "info"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "productInfo"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "launchPlatform"
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
                                    value: "description"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isExternal"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "supportedPlatforms"
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
                                    value: "iconURL"
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
                end: 410
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/product-info.gql"\n#import "twilight/features/fuel/models/in-game-content.gql"\nfragment fuelProduct on GameProduct {\nid\nacquisition {\nid\ndescription\nisExternal\n}\ndeveloper\nesrbRating {\nid\ndetails\niconURL\n}\nfeatureDetails\ngenres\ninGameContent {\n...inGameContent\n}\ninfo {\n...productInfo\n}\nlaunchPlatform {\nid\ndescription\nisExternal\n}\nsupportedPlatforms {\nid\nname\niconURL\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("Bxh2").definitions)), i.definitions = i.definitions.concat(r(n("LSBw").definitions)), e.exports = i
    },
    wnjK: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Clips_DeleteClips"
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
                                value: "DeleteClipsInput"
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
                            value: "deleteClips"
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
                                    value: "clips"
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
                                            value: "slug"
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
                end: 106
            }
        };
        n.loc.source = {
            body: "mutation Clips_DeleteClips($input: DeleteClipsInput!) {\ndeleteClips(input: $input) {\nclips {\nid\nslug\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    wqRA: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsModalDeleteAll_Clip"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
                        }
                    },
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "video"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "broadcast"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 101
            }
        };
        n.loc.source = {
            body: "query ClipsModalDeleteAll_Clip($slug: ID!) {\nclip(slug: $slug) {\nid\nvideo {\nid\n}\nbroadcast {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    xCTX: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryGameDetails"
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
                                    value: "product"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "fuelProductFull"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "fuelGame"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
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
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                arguments: [],
                                directives: []
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
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
                end: 283
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product-full.gql"\n#import "twilight/features/fuel/models/fuel-game.gql"\nquery DirectoryGameDetails($name: String!) {\ngame(name: $name) {\nproduct {\n...fuelProductFull\n}\n...fuelGame\n}\nrequestInfo {\ncountryCode\n}\ncurrentUser {\nid\nhasPrime\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("IWzU").definitions)), i.definitions = i.definitions.concat(r(n("+lUI").definitions)), e.exports = i
    },
    yU6t: function(e, t) {},
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
    zSAx: function(e, t) {},
    zu64: function(e, t) {}
});
//# sourceMappingURL=pages.directory-game-380a2336484ecba439e076508ac9a649.js.map