webpackJsonp([50], {
    "+GT7": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("F8kA"),
            o = n("6sO2"),
            s = n("iOr9"),
            l = n("vKFS"),
            d = n("IOwa"),
            c = n("2o2f"),
            u = n("81qH"),
            m = n("RH2O"),
            p = n("2KeS"),
            g = n("PPNL"),
            h = n("HW6M"),
            v = n("YUUt"),
            f = n.n(v),
            k = n("/SNv"),
            y = n.n(k),
            b = n("Vr3l"),
            _ = n.n(b),
            S = n("nyge"),
            C = n("LgcN"),
            E = function(e) {
                try {
                    return decodeURIComponent(e)
                } catch (e) {
                    return null
                }
            },
            N = n("Odds"),
            w = (n("AHWf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1,
                        game: ""
                    }, t.logger = o.o.logger.withCategory("metadata-icon"), t.didUnmount = !1, t.loadData = function() {
                        if (!t.state.isLoading && !t.state.isError && t.props.streamMetadata && !t.state.content) {
                            var e = E(t.props.match.params.encodedCommunityName);
                            if (e) {
                                var n = e.toLowerCase(),
                                    i = t.props.streamMetadata.counterStrikeGlobalOffensive && t.props.streamMetadata.counterStrikeGlobalOffensive.skill,
                                    a = t.props.streamMetadata.hearthstone && t.props.streamMetadata.hearthstone.broadcasterHeroClass,
                                    r = t.props.streamMetadata.leagueOfLegends && t.props.streamMetadata.leagueOfLegends.championID,
                                    o = t.props.streamMetadata.overwatch && t.props.streamMetadata.overwatch.broadcasterCharacter;
                                i && n === S.a.CounterStrike ? (t.setState({
                                    game: n,
                                    gameSprite: f.a,
                                    item: String(i),
                                    isLoading: !0
                                }), t.getCounterStrikeData(i)) : a && n === S.a.Hearthstone ? (t.setState({
                                    game: n,
                                    gameSprite: y.a,
                                    item: a,
                                    isLoading: !0
                                }), t.getHearthstoneData()) : r && n === S.a.LeagueOfLegends ? (t.setState({
                                    game: n,
                                    item: String(r)
                                }), t.getLeagueData()) : o && n === S.a.Overwatch && (t.setState({
                                    game: n,
                                    gameSprite: _.a,
                                    item: o,
                                    isLoading: !0
                                }), t.getOverwatchData())
                            }
                        }
                    }, t.renderIcon = function(e, n, i, r, o, s) {
                        if (!i) return null;
                        var l = h("metadata-icon", {
                                "metadata-icon--csgo-skill": t.state.game === S.a.CounterStrike
                            }),
                            d = t.state.game === S.a.CounterStrike ? 50 : 30;
                        return a.createElement(N._8, {
                            display: N.R.Flex,
                            flexDirection: N.T.Column,
                            alignItems: N.c.Center,
                            justifyContent: N._7.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(N._52, {
                            direction: N._54.Left,
                            label: e
                        }, a.createElement(N._8, {
                            className: l
                        }, a.createElement("div", {
                            style: {
                                backgroundImage: "url(" + n + ")",
                                backgroundPositionX: o ? -1 * o : 0,
                                backgroundPositionY: s ? -1 * s : 0,
                                width: i ? i + "px" : "3rem",
                                height: i ? r + "px" : "3rem",
                                transform: "scale(" + (i > 0 ? d / i : 1) + ")",
                                transformOrigin: "0 0"
                            }
                        }))))
                    }, t.getCounterStrikeData = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, a;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, Object(C.a)()];
                                    case 1:
                                        return t = i.sent(), this.didUnmount ? [2] : ((n = {})[e] = t[0]["Skill Group"][e - 1], this.setState({
                                            content: n
                                        }), [3, 3]);
                                    case 2:
                                        return a = i.sent(), this.logger.error(a, "Failed to load Counter-Strike skill group data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.getHearthstoneData = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, Object(C.b)()];
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
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a, r, o, s, l, d, c, u, m, p;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, Object(C.d)()];
                                    case 1:
                                        if (e = i.sent(), this.didUnmount) return [2];
                                        for (t = !1, n = void 0, a = 0, r = e; a < r.length && (n = r[a], !t); a++)
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
                                        return m = i.sent(), this.logger.error(m, "Failed to load Overwatch character data"), this.setState({
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.loadData()
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    if (!this.state.item) return null;
                    if (this.state.game === S.a.LeagueOfLegends) {
                        if (!this.props.leagueOfLegends.championsMap) return null;
                        var e = this.props.leagueOfLegends.championsMap[this.state.item],
                            t = "https://ddragon.leagueoflegends.com/cdn/" + this.props.leagueOfLegends.version + "/img/sprite/" + e.image.sprite;
                        return this.renderIcon(e.name, t, e.image.w, e.image.h, e.image.x, e.image.y)
                    }
                    var n = this.state.content && this.state.content[this.state.item];
                    return n ? this.renderIcon(n.display_name, this.state.gameSprite || "", n.image_width, n.image_height, n.sprite_x_offset, n.sprite_y_offset) : null
                }, t
            }(a.Component)),
            O = Object(r.f)(w);
        var T = Object(m.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap,
                        isError: e.directory.leagueOfLegends.isError,
                        isLoading: e.directory.leagueOfLegends.isLoading,
                        version: e.directory.leagueOfLegends.version
                    }
                }
            }, function(e) {
                return Object(p.b)({
                    onLoadLeagueOfLegendsChampions: g.a
                }, e)
            })(O),
            D = (n("LEV+"), "live-channel-card-link-selector"),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderVariation = function() {
                        return a.createElement("div", i.__assign({
                            className: "live-channel-card"
                        }, Object(N._63)(t.props)), a.createElement(l.a, {
                            context: l.b.MixedGameAndChannelList,
                            title: t.props.title,
                            linkTo: t.props.linkTo,
                            onVideoTitleClick: t.props.onClick,
                            thumbnailImageProps: {
                                src: t.props.imageSrc,
                                alt: t.props.imageAlt
                            },
                            onThumbnailClick: t.props.onClick,
                            channelLogin: t.props.channelName,
                            channelLoginLinkTo: t.props.channelNameLinkTo,
                            channelLoginOnClick: t.props.onClick,
                            channelImageProps: {
                                src: t.props.channelImageSrc || "",
                                alt: t.props.channelName
                            },
                            gameTitle: t.props.gameTitle,
                            gameTitleLinkTo: t.props.gameLinkTo,
                            gameBoxArtImageProps: {
                                src: t.props.gameImageSrc,
                                alt: t.props.gameTitle
                            },
                            playerMetadata: t.props.streamMetadata || void 0,
                            playerMetadataGame: t.props.streamMetadata ? t.props.gameTitle : void 0,
                            streamType: t.props.streamType || c.a.Live,
                            currentViewerCount: t.props.viewerCount,
                            enableLivePreview: t.props.enableLivePreview,
                            hostedByChannelLogin: t.props.hostedByChannelLogin
                        }))
                    }, t.renderFallback = function() {
                        var e = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                            viewerCount: t.props.viewerCount,
                            channel: a.createElement(r.a, {
                                to: t.props.channelNameLinkTo,
                                onClick: t.props.onClick,
                                className: "live-channel-card__videos",
                                "data-a-target": "live-channel-card-channel-name-link"
                            }, t.props.channelName)
                        }, "Live Channel Card");
                        return a.createElement("div", i.__assign({
                            className: "live-channel-card"
                        }, Object(N._63)(t.props)), a.createElement(N.C, {
                            key: t.props.title
                        }, a.createElement(N._8, {
                            fullWidth: !0
                        }, a.createElement(N.k, {
                            overflow: !0
                        }, a.createElement("div", null, a.createElement(r.a, {
                            to: t.props.linkTo,
                            title: t.props.hideTooltip ? void 0 : t.props.title,
                            "data-a-target": "live-channel-card-thumbnail-link",
                            "data-test-selector": D,
                            onClick: t.props.onClick
                        }, t.props.children ? t.props.children : a.createElement(N.E, {
                            alt: t.props.imageAlt,
                            src: t.props.imageSrc,
                            aspect: N.l.Aspect16x9
                        }), t.renderContentType()), t.renderGameBoxArt()))), a.createElement(N.D, null, a.createElement(N._8, {
                            display: N.R.Flex,
                            flexWrap: N.U.NoWrap
                        }, a.createElement(N._8, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, a.createElement(N.O, {
                            to: t.props.linkTo,
                            onClick: t.props.onClick,
                            className: "live-channel-card__channel",
                            "data-a-target": "live-channel-card-title-link"
                        }, a.createElement(N._2, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(N.Q, {
                            type: N._49.H3,
                            fontSize: N.V.Size5,
                            lineHeight: N._9.Body,
                            ellipsis: !0,
                            className: "live-channel-card__title"
                        }, t.props.title))), a.createElement(N._8, {
                            className: "live-channel-card__meta",
                            display: N.R.Flex,
                            flexWrap: N.U.NoWrap
                        }, a.createElement(N.Q, {
                            type: N._49.Span,
                            ellipsis: !0
                        }, e))), a.createElement(N._8, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, t.renderStreamMetadata())))))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = {
                        assignments: {
                            fallback: this.renderFallback,
                            variation: this.renderVariation
                        },
                        loader: function() {
                            return a.createElement(u.VideoPreviewCardPlaceholder, null)
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return a.createElement(s.a, i.__assign({}, e))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? a.createElement(r.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, a.createElement(N._35, {
                        className: "live-channel-card__boxart",
                        position: N._15.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, a.createElement(N._52, {
                        display: N.R.Block,
                        direction: N._54.Bottom,
                        label: t
                    }, a.createElement(N.E, {
                        src: n,
                        alt: t,
                        aspect: N.l.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return "string" == typeof this.props.streamType && this.props.streamType ? a.createElement(N._8, {
                        position: N._15.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, a.createElement(d.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? a.createElement(T, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(a.Component),
            F = L;
        n.d(t, !1, function() {
            return D
        }), n.d(t, !1, function() {
            return L
        }), n.d(t, "a", function() {
            return F
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
            s = n("5kgt"),
            l = n("Us7i"),
            d = n("QG7y"),
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            m = function(e) {
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
                            if (n.props.slotID === d.b.directory.rectangle) return void((i = n.slotRef.querySelector(u)) && 1 !== i.clientWidth && n.setState({
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
        })(m);
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
            u = n("6sO2"),
            m = n("7vx8"),
            p = n("oIkB"),
            g = n("vH/s"),
            h = n("Odds"),
            v = n("z4nH"),
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
                    var e = Object(u.d)("Follow", "FollowGameButton");
                    if (!this.props.isLoggedIn) return d.createElement(h.v, {
                        icon: h._25.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
                        onClick: this.props.showLoginModal
                    }, e);
                    if (this.isLoading) return d.createElement(h._14, {
                        width: 70,
                        height: 30
                    });
                    if (this.isFollowing) {
                        var t = Object(u.d)("Unfollow", "FollowGameButton");
                        return d.createElement(h.w, {
                            ariaLabel: t,
                            "data-test-selector": "follow-game-button-component",
                            "data-a-target": "game-directory-unfollow-button",
                            icon: h._25.Heart,
                            onClick: this.unfollow,
                            statusAlertIcon: h._25.Unheart
                        })
                    }
                    return d.createElement(h.v, {
                        icon: h._25.Heart,
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
                    u.o.tracking.track(e, {
                        src: this.props.src,
                        kind: e === g.SpadeEventType.GameFollow ? "follow" : "unfollow",
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
            }), Object(m.a)(k, {
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
        })(b);
        n.d(t, "a", function() {
            return _
        })
    },
    "/gww": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("V5M+"),
            o = n("TToO"),
            s = n("GiK3"),
            l = n("3zLD"),
            d = n("6sO2"),
            c = n("+8VM"),
            u = n("7vx8"),
            m = n("oIkB"),
            p = n("vH/s"),
            g = n("UQNI"),
            h = n("Odds"),
            v = n("nC3l"),
            f = (n("sJt0"), "error-message"),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? s.createElement(h._8, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(h.Q, {
                            color: h.K.Error,
                            type: h._49.H4,
                            "data-test-selector": f
                        }, Object(g.a)(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.banUserFromCommunity = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.banUserFromCommunity ? (e = o.__assign({}, Object(m.a)({
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
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (d.o.tracking.track(p.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "ban",
                                            reason: this.state.reason
                                        }), this.props.onSuccess && this.props.onSuccess(), this.props.onCloseModal()) : this.setState({
                                            error: t.data.banUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(h._2, {
                        position: h._15.Relative
                    }, s.createElement(h._35, {
                        background: h.n.Base,
                        className: "stream-ban-modal"
                    }, s.createElement(h._8, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(h._8, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(h.Q, {
                        type: h._49.H4
                    }, Object(d.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), s.createElement(h._35, {
                        borderTop: !0
                    }, s.createElement(h._8, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(h.Q, {
                        bold: !0
                    }, Object(d.d)("Reason (Required)", "StreamBanModal")), s.createElement(h._4, {
                        type: h._5.Text,
                        placeholder: Object(d.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), s.createElement(h._35, {
                        borderTop: !0
                    }, s.createElement(h._8, {
                        padding: {
                            top: 2
                        },
                        textAlign: h._45.Center
                    }, s.createElement(h._8, {
                        display: h.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(h.v, {
                        type: h.B.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(d.d)("Cancel", "StreamBanModal"))), s.createElement(h._8, {
                        display: h.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(h.v, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(d.d)("Ban", "StreamBanModal")))))), s.createElement(c.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(s.Component),
            y = Object(l.compose)(Object(u.a)(v, {
                name: "banUserFromCommunity"
            }))(k);
        var b = Object(i.b)(null, function(e) {
            return Object(a.b)({
                onCloseModal: r.c
            }, e)
        })(y);
        n.d(t, "a", function() {
            return b
        })
    },
    "0ewX": function(e, t) {},
    "0w5y": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("V5M+"),
            o = n("TToO"),
            s = n("GiK3"),
            l = n("3zLD"),
            d = n("6sO2"),
            c = n("+8VM"),
            u = n("7vx8"),
            m = n("oIkB"),
            p = n("vH/s"),
            g = n("UQNI"),
            h = n("Odds"),
            v = (n("npyu"), n("plcU")),
            f = "error-message",
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? s.createElement(h._8, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(h.Q, {
                            color: h.K.Error,
                            type: h._49.H4,
                            "data-test-selector": f
                        }, Object(g.a)(t.state.error))) : null
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
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.timeoutUserFromCommunity ? (e = o.__assign({}, Object(m.a)({
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
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (d.o.tracking.track(p.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "timeout",
                                            reason: this.state.reason,
                                            duration: this.state.durationHours
                                        }), this.props.onSuccess && this.props.onSuccess(), this.props.onCloseModal()) : this.setState({
                                            error: t.data.timeoutUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(h._2, {
                        position: h._15.Relative
                    }, s.createElement(h._35, {
                        background: h.n.Base,
                        className: "stream-timeout-modal"
                    }, s.createElement(h._8, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(h._8, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(h.Q, {
                        type: h._49.H4
                    }, Object(d.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), s.createElement(h._35, {
                        borderTop: !0
                    }, s.createElement(h._8, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(h.Q, {
                        bold: !0
                    }, Object(d.d)("Reason (Required)", "StreamTimeoutModal")), s.createElement(h._4, {
                        type: h._5.Text,
                        placeholder: Object(d.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), s.createElement(h._8, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(h.Q, {
                        bold: !0
                    }, Object(d.d)("Duration", "StreamTimeoutModal")), s.createElement(h._30, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, s.createElement("option", {
                        value: "2"
                    }, Object(d.d)("2 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "4"
                    }, Object(d.d)("4 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "8"
                    }, Object(d.d)("8 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "12"
                    }, Object(d.d)("12 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "24"
                    }, Object(d.d)("24 hours", "StreamTimeoutModal")))), s.createElement(h._35, {
                        borderTop: !0
                    }, s.createElement(h._8, {
                        padding: {
                            top: 2
                        },
                        textAlign: h._45.Center
                    }, s.createElement(h._8, {
                        display: h.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(h.v, {
                        type: h.B.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(d.d)("Cancel", "StreamTimeoutModal"))), s.createElement(h._8, {
                        display: h.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(h.v, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(d.d)("Timeout", "StreamTimeoutModal")))))), s.createElement(c.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(s.Component),
            y = Object(l.compose)(Object(u.a)(v, {
                name: "timeoutUserFromCommunity"
            }))(k);
        var b = Object(i.b)(null, function(e) {
            return Object(a.b)({
                onCloseModal: r.c
            }, e)
        })(y);
        n.d(t, "a", function() {
            return b
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
    "1qqv": function(e, t, n) {
        "use strict";
        var i, a, r = n("RH2O"),
            o = n("2KeS"),
            s = n("V5M+"),
            l = n("TToO"),
            d = n("HW6M"),
            c = n("GiK3"),
            u = n("6sO2"),
            m = n("+8VM"),
            p = n("sikP"),
            g = n("CSlQ"),
            h = n("oSFp"),
            v = n("mw/a"),
            f = n("6BvN"),
            k = n("F8kA"),
            y = n("rCmJ"),
            b = n("4Gcm"),
            _ = n("8Wuk"),
            S = n("2hJ3"),
            C = n("NY9D"),
            E = n("HM6l"),
            N = n("sEID"),
            w = n("jetF"),
            O = n("7vx8"),
            T = n("J4ib"),
            D = n("Kckb");
        ! function(e) {
            e.AR = "AR", e.ASL = "ASL", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.OTHER = "OTHER", e.PL = "PL", e.PT = "PT", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH"
        }(i || (i = {})),
        function(e) {
            e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
        }(a || (a = {}));
        var L = n("Odds"),
            F = n("6fIs"),
            I = [a.Delete, a.DeleteAll],
            R = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.clipsMaintenance = Object(D.a)(), n.renderMenuItem = function(e) {
                        var t = n.menuData.get(e);
                        return e && t ? c.createElement(L._6, {
                            key: t.display,
                            onClick: t.destinationHandler,
                            "data-a-target": "clip-moderation-button-" + t.display,
                            disabled: n.clipsMaintenance && I.includes(e)
                        }, c.createElement(L._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, t.display)) : null
                    }, n.menuData = new Map([
                        [a.Report, {
                            display: Object(T.d)("Report", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(a.Report)
                            }
                        }],
                        [a.Delete, {
                            display: Object(T.d)("Delete", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(a.Delete)
                            }
                        }],
                        [a.DeleteAll, {
                            display: Object(T.d)("Delete All Clips from Video", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(a.DeleteAll)
                            }
                        }],
                        [a.Ban, {
                            display: Object(T.d)("Ban User", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(a.Ban)
                            }
                        }],
                        [a.Timeout, {
                            display: Object(T.d)("Timeout User (24 hr)", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(a.Timeout)
                            }
                        }]
                    ]), n
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = this.props.clip;
                    if (!e || !e.currentUser) return null;
                    var n = e.currentUser.isStaff || e.currentUser.isSiteAdmin,
                        i = !!t.curator && e.currentUser.id === t.curator.id,
                        r = !!t.broadcaster && e.currentUser.id === t.broadcaster.id,
                        o = i || r || n,
                        s = r || n,
                        l = [a.Report];
                    return o && l.push(a.Delete), s && (l.push(a.DeleteAll), t.curator && t.broadcaster && (l.push(a.Ban), l.push(a.Timeout))), c.createElement(L._8, {
                        className: "moderation-menu"
                    }, c.createElement(w.a, null, c.createElement(L.v, {
                        type: L.B.Hollow,
                        icon: L._25.More,
                        ariaLabel: Object(T.d)("More Options", "ModerationMenu"),
                        "data-a-target": "moderation-menu-button"
                    }), c.createElement(L.q, {
                        direction: L.r.TopRight
                    }, c.createElement(L._8, {
                        padding: {
                            y: .5
                        }
                    }, this.moderationMenuRender(l)))))
                }, t.prototype.moderationMenuRender = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        return t.renderMenuItem(e)
                    })
                }, t = l.__decorate([Object(O.a)(F), Object(g.d)("ModerationMenu")], t)
            }(c.Component),
            P = n("WNmM"),
            A = (n("MjlB"), 2e3),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingBalloon: !1,
                        playerRefID: Object(E.a)()
                    }, t.timeoutID = null, t.copyClipURL = function() {
                        var e;
                        try {
                            e = Object(S.a)(t.props.clip.url)
                        } catch (e) {
                            return void u.j.warn("Failed to copy", e)
                        }
                        e && (t.setState({
                            isShowingBalloon: !0
                        }), t.timeoutID = setTimeout(function() {
                            t.setState({
                                isShowingBalloon: !1
                            })
                        }, A), Object(P.c)(t.props.clip.id, t.props.clip.game && t.props.clip.game.name, t.props.clip.broadcaster && t.props.clip.broadcaster.id, t.props.clip.broadcaster && t.props.clip.broadcaster.login, t.props.pageType)(_.b.CopyInput))
                    }, t.dismissBalloon = function() {
                        t.setState({
                            isShowingBalloon: !1
                        }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.reportPlayerInstanceStarted(this.state.playerRefID)
                }, t.prototype.render = function() {
                    var e, t = this.props.clip.broadcaster && c.createElement(k.a, {
                        to: "/" + this.props.clip.broadcaster.login,
                        onClick: this.props.closeModal,
                        "data-a-target": "clip-modal-broadcaster-link"
                    }, this.props.clip.broadcaster.login);
                    return e = this.props.clip.game && t ? Object(u.d)("{broadcaster} playing {game}", {
                        broadcaster: t,
                        game: c.createElement(k.a, {
                            to: "" + Object(C.c)(this.props.clip.game.name),
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-game-link"
                        }, this.props.clip.game.name)
                    }, "ClipsViewModalContent") : t, c.createElement(L._35, {
                        className: "clips-view-modal-content",
                        background: L.n.Base
                    }, c.createElement(L._8, {
                        padding: {
                            bottom: 2
                        }
                    }, c.createElement(L.k, {
                        ratio: L.l.Aspect16x9
                    }, c.createElement("iframe", {
                        src: this.props.clip.embedURL,
                        width: "100%",
                        height: "100%",
                        allowFullScreen: !0
                    }))), c.createElement(L._8, {
                        padding: {
                            x: 2,
                            bottom: 2
                        }
                    }, c.createElement(L._8, {
                        display: L.R.Flex,
                        flexWrap: L.U.NoWrap
                    }, c.createElement(L._8, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, c.createElement(y.a, {
                        onClickOut: this.dismissBalloon
                    }, c.createElement(b.a, {
                        text: this.props.clip.url,
                        icon: !0,
                        iconAsset: L._25.Link,
                        onSelection: this.copyClipURL,
                        "data-a-target": "clip-share-input"
                    }, c.createElement(L.q, {
                        show: this.state.isShowingBalloon,
                        direction: L.r.TopRight
                    }, c.createElement(L._6, {
                        onClick: this.dismissBalloon
                    }, c.createElement(L._8, {
                        padding: 1
                    }, c.createElement(L.Q, {
                        bold: !0
                    }, Object(u.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), c.createElement(N.a, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    }), c.createElement(R, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState
                    }))), c.createElement(L._8, {
                        padding: {
                            x: 2,
                            bottom: 2
                        },
                        display: L.R.Flex,
                        flexWrap: L.U.NoWrap,
                        justifyContent: L._7.Between,
                        fullWidth: !0,
                        overflow: L._11.Hidden
                    }, c.createElement(L._8, {
                        flexGrow: 1,
                        ellipsis: !0
                    }, c.createElement(L._2, {
                        ellipsis: !0
                    }, c.createElement(L._35, {
                        display: L.R.Flex,
                        fontSize: L.V.Size5
                    }, c.createElement(L._8, {
                        ellipsis: !0
                    }, this.props.clip.title), c.createElement(L._8, {
                        flexShrink: 0
                    }, c.createElement(L.Q, {
                        type: L._49.Span,
                        color: L.K.Alt2
                    }, " • ", Object(u.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsViewModalContent"))))), c.createElement(L._2, {
                        ellipsis: !0
                    }, c.createElement(L._35, {
                        color: L.K.Alt2
                    }, e, e && !!this.props.clip.curator && c.createElement("span", null, " • "), this.props.clip.curator && Object(u.d)("Clipped by {curator}", {
                        curator: c.createElement(k.a, {
                            to: "/" + this.props.clip.curator.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-curator-link"
                        }, this.props.clip.curator.login)
                    }, "ClipsViewModalContent")))), c.createElement(L._35, {
                        display: L.R.Flex,
                        padding: {
                            bottom: 2,
                            left: 2
                        },
                        fontSize: L.V.Size5,
                        color: L.K.Alt2,
                        flexShrink: 0
                    }, c.createElement(L._8, {
                        margin: {
                            right: .5
                        },
                        alignItems: L.c.Center,
                        display: L.R.Flex
                    }, c.createElement(L._24, {
                        asset: L._25.GlyphViews
                    })), Object(u.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsViewModalContent"))))
                }, t = l.__decorate([Object(g.d)("ClipsViewModalContent")], t)
            }(c.Component),
            j = n("Hjbq");
        var M = Object(r.b)(null, function(e) {
                return Object(o.b)({
                    reportPlayerInstanceStarted: j.b
                }, e)
            })(x),
            U = (n("GOrw"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onKeyDown = function(e) {
                        var n = e.charCode || e.keyCode;
                        n === f.a.Left ? t.updateClipBackward() : n === f.a.Right && t.updateClipForward()
                    }, t.updateClipForward = function() {
                        t.updateClipIndex(t.props.clipIndex + 1)
                    }, t.updateClipBackward = function() {
                        t.updateClipIndex(t.props.clipIndex - 1)
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.setUpArrowListeners()
                }, t.prototype.render = function() {
                    var e = null,
                        t = null;
                    this.props.clipIndex > 0 && (e = c.createElement(L._8, {
                        position: L._15.Absolute,
                        display: L.R.Flex,
                        alignItems: L.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--left"
                    }, c.createElement(L.w, {
                        ariaLabel: Object(u.d)("Previous clip", "ClipsViewModalNavigation"),
                        type: L.y.Primary,
                        icon: L._25.AngleLeft,
                        onClick: this.updateClipBackward,
                        "data-test-selector": "clips-view-modal-navigation-back"
                    })));
                    var n = this.props.getClips();
                    return this.props.loadMoreClips && n.length - this.props.clipIndex < 4 && this.props.loadMoreClips(), this.props.clipIndex < n.length - 1 && (t = c.createElement(L._8, {
                        position: L._15.Absolute,
                        display: L.R.Flex,
                        alignItems: L.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--right"
                    }, c.createElement(L.w, {
                        ariaLabel: Object(u.d)("Next clip", "ClipsViewModalNavigation"),
                        type: L.y.Primary,
                        icon: L._25.AngleRight,
                        onClick: this.updateClipForward,
                        "data-test-selector": "clips-view-modal-navigation-forward"
                    }))), c.createElement(L._8, {
                        className: "clips-view-modal-navigation"
                    }, e, c.createElement(M, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState,
                        pageType: this.props.pageType,
                        closeModal: this.props.closeModal
                    }), t)
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("keydown", this.onKeyDown)
                }, t.prototype.setUpArrowListeners = function() {
                    document.addEventListener("keydown", this.onKeyDown)
                }, t.prototype.updateClipIndex = function(e) {
                    var t = Math.max(0, e),
                        n = this.props.getClips();
                    n.length - t < 4 && this.props.loadMoreClips && this.props.loadMoreClips(), t < n.length && this.props.showModal(H, {
                        getClips: this.props.getClips,
                        clip: n[t],
                        clipIndex: t,
                        loadMoreClips: this.props.loadMoreClips,
                        pageType: this.props.pageType
                    })
                }, t
            }(c.Component)),
            V = Object(g.d)("ClipsViewModalNavigation")(U);
        var B = Object(r.b)(null, function(e) {
                return Object(o.b)({
                    showModal: s.d,
                    closeModal: s.c
                }, e)
            })(V),
            G = (n("/+aa"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        modalView: a.View
                    }, t.setToViewState = function() {
                        t.updateClipsModalViewState(a.View)
                    }, t.updateClipsModalViewState = function(e) {
                        t.setState({
                            modalView: e
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t, n = ((t = {})["clips-modal-view"] = !0, t["clips-modal-view--wide"] = !1, t);
                    switch (this.state.modalView) {
                        case a.Report:
                            e = c.createElement(h.a, {
                                title: Object(u.d)("Report this Clip", "ClipsViewModal"),
                                reportContext: {
                                    contentType: v.a.Clip,
                                    contentID: this.props.clip.slug,
                                    targetUserID: this.props.clip.broadcaster && this.props.clip.broadcaster.id || "",
                                    additionalTrackingID: this.props.clip.curator && this.props.clip.curator.id || ""
                                },
                                onClose: this.setToViewState
                            });
                            break;
                        case a.Delete:
                            e = c.createElement(p.d, {
                                slug: this.props.clip.slug,
                                onClose: this.setToViewState
                            });
                            break;
                        case a.DeleteAll:
                            e = c.createElement(p.e, {
                                slug: this.props.clip.slug,
                                onClose: this.setToViewState
                            });
                            break;
                        case a.Ban:
                        case a.Timeout:
                            if (this.props.clip.curator && this.props.clip.broadcaster) {
                                e = c.createElement(p.b, {
                                    targetUser: {
                                        displayName: this.props.clip.curator.displayName || "",
                                        login: this.props.clip.curator.login || ""
                                    },
                                    broadcasterID: this.props.clip.broadcaster.id || "",
                                    isTemporary: this.state.modalView === a.Timeout,
                                    onClose: this.setToViewState
                                });
                                break
                            }
                        default:
                            e = c.createElement(B, {
                                getClips: this.props.getClips,
                                clip: this.props.clip,
                                clipIndex: this.props.clipIndex,
                                updateModalViewState: this.updateClipsModalViewState,
                                loadMoreClips: this.props.loadMoreClips,
                                pageType: this.props.pageType
                            }), n["clips-modal-view--wide"] = !0
                    }
                    return c.createElement(L._8, {
                        className: d(n)
                    }, e, c.createElement(m.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, t = l.__decorate([Object(g.d)("ClipsViewModal")], t)
            }(c.Component));
        var H = Object(r.b)(null, function(e) {
            return Object(o.b)({
                showModal: s.d
            }, e)
        })(G);
        n.d(t, "a", function() {
            return H
        })
    },
    "2hJ3": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.fontSize = "12pt", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
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
    "4Gcm": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        });
        var i = n("TToO"),
            a = n("GiK3"),
            r = (n.n(a), n("2KeS")),
            o = n("CSlQ"),
            s = n("Odds"),
            l = n("Jg0G"),
            d = (n.n(l), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectOnFocus = function(e) {
                        e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(s._8, i.__assign({
                        position: s._15.Relative,
                        className: "selectable-input-wrapper"
                    }, Object(s._63)(this.props)), a.createElement(s._4, {
                        type: s._5.Text,
                        value: this.props.text,
                        readOnly: !0,
                        onFocus: this.selectOnFocus,
                        icon: this.props.iconAsset,
                        id: this.props.id
                    }), this.props.children)
                }, t
            }(a.Component)),
            c = Object(r.d)(Object(o.d)("SelectableInput"))(d)
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
        var i, a = n("RH2O"),
            r = n("2KeS"),
            o = n("Hjbq"),
            s = n("j0cR"),
            l = n("TToO"),
            d = n("GiK3"),
            c = n("6sO2"),
            u = n("mi6k"),
            m = n("HM6l"),
            p = n("CSlQ"),
            g = n("Odds"),
            h = (n("kuCN"), "embed-overlay");
        ! function(e) {
            e[e.Clip = 0] = "Clip", e[e.Video = 1] = "Video", e[e.Stream = 2] = "Stream", e[e.VideoOEmbed = 3] = "VideoOEmbed"
        }(i || (i = {}));
        var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showOverlay: !0,
                        playerRefID: Object(m.a)()
                    }, t.getOverlayComponent = function() {
                        var e = t.props,
                            n = e.createdAt,
                            a = e.lengthSeconds,
                            r = e.thumbnailURL,
                            o = e.type,
                            s = e.viewCount,
                            l = a && a > 0 ? Object(u.b)(a) : "";
                        return d.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": h
                        }, d.createElement(g.k, {
                            ratio: g.l.Aspect16x9
                        }, d.createElement(g._8, null, d.createElement(g._2, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: g._15.Absolute
                        }, d.createElement("img", {
                            src: r
                        })), d.createElement(g._8, {
                            className: "embed-card__overlay",
                            position: g._15.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, d.createElement(g._8, {
                            className: "embed-card__play",
                            display: g.R.Flex,
                            justifyContent: g._7.Center,
                            position: g._15.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, d.createElement(g._24, {
                            asset: g._25.Play,
                            width: 50,
                            height: 50
                        })), d.createElement(g._8, {
                            position: g._15.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && d.createElement(g.Q, null, Object(c.c)(new Date(n), "medium")), d.createElement(g._8, null, o === i.Stream && d.createElement(g._8, {
                            display: g.R.Inline,
                            margin: {
                                right: .5
                            }
                        }, d.createElement(g.G, {
                            status: g.I.Live
                        })), void 0 !== s && d.createElement("span", null, t.getFormattedViewCount(s, o)))), d.createElement(g._8, {
                            position: g._15.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, l && d.createElement(g._8, null, d.createElement(g.Q, null, l)))), d.createElement(g._35, {
                            position: g._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: g.V.Size5
                        }, o === i.Stream && d.createElement(g._12, {
                            label: Object(c.d)("Live", "EmbedOverlayPill"),
                            type: g._13.Live
                        }), o === i.Video && d.createElement(g._12, {
                            label: Object(c.d)("Video", "EmbedOverlayPill"),
                            type: g._13.Overlay
                        }), o === i.Clip && d.createElement(g._12, {
                            label: Object(c.d)("Clip", "EmbedOverlayPill"),
                            type: g._13.Overlay
                        })))))
                    }, t.handleClick = function(e) {
                        e.preventDefault(), t.setState({
                            showOverlay: !1
                        }), t.props.type === i.Clip && t.props.reportPlayerInstanceStarted(t.state.playerRefID), t.props.onClick && t.props.onClick()
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    if (this.props.type === i.Clip) {
                        var t = e.activeVideoPlayerRefID;
                        t === this.state.playerRefID ? this.setState({
                            showOverlay: !1
                        }) : this.props.activeVideoPlayerRefID === t || t === this.state.playerRefID || this.state.showOverlay || this.setState({
                            showOverlay: !0
                        })
                    }
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.state.showOverlay ? this.getOverlayComponent() : d.createElement(g.k, {
                        ratio: g.l.Aspect16x9
                    }, d.createElement("div", {
                        "data-test-selector": "embed-overlay-wrapper"
                    }, this.props.children))
                }, t.prototype.getFormattedViewCount = function(e, t) {
                    switch (t) {
                        case i.Stream:
                            return Object(c.d)("{viewCount,number} viewers", {
                                viewCount: e
                            }, "OverlayViewCount");
                        case i.Clip:
                        case i.Video:
                            return Object(c.d)("{viewCount,number} views", {
                                viewCount: e
                            }, "OverlayViewCount");
                        default:
                            return ""
                    }
                }, t
            }(d.Component),
            f = Object(p.d)("EmbedOverlay")(v);
        var k = Object(a.b)(function(e) {
            return {
                activeVideoPlayerRefID: Object(s.a)(e)
            }
        }, function(e) {
            return Object(r.b)({
                reportPlayerInstanceStarted: o.b
            }, e)
        })(f);
        n.d(t, "a", function() {
            return k
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, !1, function() {
            return "embed-overlay-wrapper"
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, !1, function() {
            return v
        }), n.d(t, !1, function() {
            return f
        })
    },
    "5DPx": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return k
        });
        var i, a = n("TToO"),
            r = n("6sO2"),
            o = n("YUUt"),
            s = n.n(o),
            l = n("/SNv"),
            d = n.n(l),
            c = n("Vr3l"),
            u = n.n(c),
            m = n("PPNL"),
            p = n("nyge"),
            g = n("EOpv"),
            h = n("LgcN"),
            v = this,
            f = r.o.logger.withCategory("metadata-info");
        ! function(e) {
            e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
        }(i || (i = {}));
        var k = function(e, t) {
                return a.__awaiter(v, void 0, void 0, function() {
                    var n, i, o, s, l, d;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return n = t.toLowerCase(), i = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, i && n === p.a.CounterStrike ? [4, y(i)] : [3, 2];
                            case 1:
                                return [2, a.sent()];
                            case 2:
                                return o && n === p.a.Hearthstone ? [4, b(o)] : [3, 4];
                            case 3:
                                return [2, a.sent()];
                            case 4:
                                return l && n === p.a.Overwatch ? [4, _(l)] : [3, 6];
                            case 5:
                                return [2, a.sent()];
                            case 6:
                                if (s && n === p.a.LeagueOfLegends && (d = r.o.store.getState()).directory)
                                    if (d.directory.leagueOfLegends.championsMap) {
                                        if (d.directory.leagueOfLegends.championsMap) return [2, S(s, d.directory.leagueOfLegends.championsMap, d.directory.leagueOfLegends.version)]
                                    } else r.o.store.dispatch(Object(m.a)());
                                a.label = 7;
                            case 7:
                                return [2, null]
                        }
                    })
                })
            },
            y = function(e) {
                return a.__awaiter(v, void 0, void 0, function() {
                    var t, n, i;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, Object(h.a)()];
                            case 1:
                                return t = a.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                    name: n[e].display_name,
                                    label: Object(g.b)(g.a.CSGOSkillGroup),
                                    spriteDetails: {
                                        imageWidth: n[e].image_width,
                                        imageHeight: n[e].image_height,
                                        spriteOffsetX: n[e].sprite_x_offset,
                                        spriteOffsetY: n[e].sprite_y_offset,
                                        spriteURL: s.a
                                    }
                                }];
                            case 2:
                                return i = a.sent(), f.error(i, "Failed to load Counter-Strike skill group data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            b = function(e) {
                return a.__awaiter(v, void 0, void 0, function() {
                    var t, n, i;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, Object(h.b)()];
                            case 1:
                                return t = a.sent(), n = {}, t[0].Class.forEach(function(e) {
                                    n[e.class] = e
                                }), [2, {
                                    name: n[e].display_name,
                                    label: Object(g.b)(g.a.HearthstoneClass),
                                    spriteDetails: {
                                        imageWidth: n[e].image_width,
                                        imageHeight: n[e].image_height,
                                        spriteOffsetX: n[e].sprite_x_offset,
                                        spriteOffsetY: n[e].sprite_y_offset,
                                        spriteURL: d.a
                                    }
                                }];
                            case 2:
                                return i = a.sent(), f.error(i, "Failed to load Hearthstone class data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            _ = function(e) {
                return a.__awaiter(v, void 0, void 0, function() {
                    var t, n, i, r, o, s, l, d, c, m, p, v;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, Object(h.d)()];
                            case 1:
                                for (t = a.sent(), n = void 0, i = 0, r = t; i < r.length; i++)
                                    for (o in n = r[i])
                                        if (n.hasOwnProperty(o))
                                            for (s = n[o], l = 0, d = s; l < d.length; l++)
                                                if ((c = d[l]).character === e) return (v = {})[c.character] = c, [2, {
                                                    name: (m = v)[e].display_name,
                                                    label: Object(g.b)(g.a.OverwatchCharacter),
                                                    spriteDetails: {
                                                        imageWidth: m[e].image_width,
                                                        imageHeight: m[e].image_height,
                                                        spriteOffsetX: m[e].sprite_x_offset,
                                                        spriteOffsetY: m[e].sprite_y_offset,
                                                        spriteURL: u.a
                                                    }
                                                }];
                                return [2, null];
                            case 2:
                                return p = a.sent(), f.error(p, "Failed to load Overwatch character data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            S = function(e, t, n) {
                if (!t || !e) return null;
                var i = t[e],
                    a = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + i.image.sprite;
                return {
                    name: i.name,
                    label: Object(g.b)(g.a.LeagueChampion),
                    spriteDetails: {
                        imageWidth: i.image.w,
                        imageHeight: i.image.h,
                        spriteOffsetX: i.image.x,
                        spriteOffsetY: i.image.y,
                        spriteURL: a
                    }
                }
            }
    },
    "5bwi": function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("6yQB"),
            o = n("CSlQ"),
            s = n("RH2O"),
            l = n("2KeS"),
            d = n("V5M+"),
            c = n("1qqv"),
            u = n("TToO"),
            m = n("iOr9"),
            p = n("vKFS"),
            g = n("J4ib"),
            h = n("F8kA"),
            v = n("NY9D"),
            f = n("WNmM"),
            k = n("XOun"),
            y = n("Odds"),
            b = (n("Ajho"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getClips = function() {
                        return t.props.clips
                    }, t.openModal = function(e) {
                        e.preventDefault(), t.props.showModal(c.a, {
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
                    return this.props.pageType === f.b.Channel && this.props.clip.game && (e = i.createElement(y._35, {
                        position: y._15.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        borderRight: !1,
                        borderBottom: !1,
                        className: "clips-preview-card__boxart"
                    }, i.createElement(h.a, {
                        to: Object(v.c)(this.props.clip.game.name) + "/clips",
                        "data-test-selector": "card-view-game-link",
                        "data-a-target": "clip-game-link"
                    }, i.createElement(y._52, {
                        display: y.R.Block,
                        direction: y._54.Bottom,
                        label: this.props.clip.game.name
                    }, i.createElement(y.E, {
                        alt: this.props.clip.game.name,
                        src: this.props.clip.game.boxArtURL || a.a.defaultBoxArtURL,
                        aspect: y.l.BoxArt,
                        size: y.F.Size4
                    }))))), this.props.pageType === f.b.Game && this.props.clip.broadcaster && (t = i.createElement(y._8, null, i.createElement(h.a, {
                        className: "clips-preview-card__display-name",
                        to: "/" + this.props.clip.broadcaster.login + "/clips"
                    }, this.props.clip.broadcaster.login))), i.createElement(y._8, {
                        margin: {
                            bottom: 2,
                            right: 1
                        }
                    }, i.createElement(y.C, u.__assign({
                        row: !0
                    }, Object(y._63)(this.props)), i.createElement(y._8, {
                        position: y._15.Relative,
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, i.createElement(h.a, {
                        to: this.props.clip.url,
                        onClick: this.openModal,
                        "data-a-target": "clip-thumbnail-link"
                    }, i.createElement(y.E, {
                        src: this.props.clip.thumbnailURL || a.o.config.defaultStreamPreviewURL,
                        alt: this.props.clip.title,
                        aspect: y.l.Aspect16x9,
                        size: y.F.Size24
                    })), e), i.createElement(y.D, {
                        overflow: y._11.Hidden
                    }, i.createElement(y.Q, {
                        type: y._49.H3,
                        fontSize: y.V.Size5
                    }, i.createElement(h.a, {
                        className: "clips-preview-card__title",
                        to: this.props.clip.url,
                        onClick: this.openModal,
                        "data-a-target": "clip-title-link"
                    }, this.props.clip.title)), i.createElement(y.Q, {
                        ellipsis: !0
                    }, t), i.createElement(y.Q, {
                        color: y.K.Alt2,
                        ellipsis: !0
                    }, Object(a.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsCardView"), this.props.clip.curator && i.createElement("span", null, " · ", this.props.isClipChampExperiment && this.props.clip.champBadge && i.createElement(y._8, {
                        margin: {
                            right: .5
                        },
                        display: y.R.InlineBlock
                    }, i.createElement(k.a, {
                        pageType: this.props.pageType
                    })), Object(a.d)("Clipped by {curator}", {
                        curator: i.createElement(h.a, {
                            className: "clips-preview-card__display-name",
                            to: "/" + this.props.clip.curator.login,
                            "data-a-target": "clip-curator-link"
                        }, this.props.clip.curator.login)
                    }, "ClipsCardView"))), i.createElement(y.Q, {
                        color: y.K.Alt2
                    }, Object(a.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsCardView")))))
                }, t = u.__decorate([Object(o.d)("ClipsCardView")], t)
            }(i.Component));
        var _ = Object(s.b)(null, function(e) {
                return Object(l.b)({
                    showModal: d.d
                }, e)
            })(b),
            S = n("QAcM"),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderVariation = function() {
                        if (0 === t.props.clips.length) return i.createElement(y._8, {
                            className: "clips-cards"
                        }, t.renderEmpty());
                        var e = p.b.MixedGameAndChannelList;
                        return t.props.pageType === f.b.Channel && (e = p.b.SingleChannelList), t.props.pageType === f.b.Game && (e = p.b.SingleGameList), i.createElement(y._8, {
                            className: "clips-cards",
                            fullWidth: !0
                        }, i.createElement(y._55, {
                            gutterSize: y._57.Small,
                            childWidth: y._56.Large,
                            placeholderItems: 20
                        }, t.props.clips.map(function(n, a) {
                            return i.createElement(y._8, {
                                margin: {
                                    bottom: 2
                                },
                                key: a
                            }, i.createElement(p.a, {
                                context: e,
                                title: n.title,
                                linkTo: n.url,
                                onClick: t.openModal.bind(t, n, a),
                                thumbnailImageProps: {
                                    src: n.thumbnailURL || g.p.config.defaultStreamPreviewURL,
                                    alt: n.title
                                },
                                channelLogin: n.broadcaster && n.broadcaster.login || "",
                                channelLoginLinkTo: {
                                    pathname: n.broadcaster ? "/" + n.broadcaster.login : ""
                                },
                                channelImageProps: {
                                    src: n.broadcaster && n.broadcaster.profileImageURL || "",
                                    alt: n.broadcaster && n.broadcaster.login || ""
                                },
                                gameTitle: n.game && n.game.name || void 0,
                                gameTitleLinkTo: n.game ? {
                                    pathname: "/directory/game/" + encodeURI(n.game.name)
                                } : void 0,
                                gameBoxArtImageProps: n.game ? {
                                    src: n.game.boxArtURL || g.a.defaultBoxArtURL,
                                    alt: n.game.name
                                } : void 0,
                                datePublished: n.createdAt,
                                viewCount: n.viewCount,
                                durationInSeconds: n.durationSeconds,
                                clipCreatedByChannelLogin: n.curator && n.curator.login || "",
                                clipCreatedByChannelLoginLinkTo: n.curator ? "/" + n.curator.login : ""
                            }))
                        })))
                    }, t.renderFallback = function() {
                        return i.createElement(y._8, {
                            className: "clips-cards"
                        }, i.createElement(y.Y, {
                            gutterSize: y.Z.None
                        }, 0 === t.props.clips.length ? t.renderEmpty() : t.renderClips()))
                    }, t.updateToAllTime = function() {
                        t.props.updateTimeFilter(S.b.All)
                    }, t.openModal = function(e, n, i) {
                        i.preventDefault(), t.props.showClipsViewModal(e, n, function() {
                            return t.props.clips
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = {
                        assignments: {
                            fallback: this.renderFallback,
                            variation: this.renderVariation
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return i.createElement(m.a, u.__assign({}, e))
                }, t.prototype.renderEmpty = function() {
                    var e = this.props.timeFilterValue === S.b.All ? i.createElement(y._8, null, i.createElement(y.Q, {
                        fontSize: y.V.Size4
                    }, Object(g.d)("No Clips Found", "ClipsCards")), i.createElement(y._8, {
                        margin: 3
                    }, Object(g.d)("<x:link>Learn how</x:link> to make and share clips of this channel", {
                        "x:link": function(e) {
                            return i.createElement("a", {
                                href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips",
                                target: "_blank"
                            }, e)
                        }
                    }, "ClipsCards"))) : i.createElement(y._8, null, i.createElement(y.Q, {
                        fontSize: y.V.Size4
                    }, Object(g.d)("No clips were created in this time period.", "ClipsCards"), i.createElement("br", null), Object(g.d)("Check out all popular clips from this channel instead.", "ClipsCards")), i.createElement(y._8, {
                        margin: 3
                    }, i.createElement(y.v, {
                        type: y.B.Hollow,
                        onClick: this.updateToAllTime
                    }, Object(g.d)("See all popular clips", "ClipCards"))));
                    return i.createElement(y._8, {
                        fullWidth: !0
                    }, i.createElement(y.Y, null, i.createElement(y.L, {
                        cols: 3
                    }), i.createElement(y.L, {
                        cols: 6
                    }, i.createElement(y._8, {
                        textAlign: y._45.Center
                    }, e)), i.createElement(y.L, {
                        cols: 3
                    })))
                }, t.prototype.renderClips = function() {
                    var e = this,
                        t = "on" === g.p.dynamicSettings.get("twilight_clips_already", "off");
                    return this.props.clips.map(function(n, a) {
                        return i.createElement(y.L, {
                            cols: {
                                default: 12,
                                xl: 6
                            },
                            key: n.slug
                        }, i.createElement(_, {
                            clip: n,
                            clips: e.props.clips,
                            clipIndex: a,
                            "data-target": "clips-card-view",
                            "data-a-target": "clips-card-" + a,
                            isClipChampExperiment: t,
                            loadMoreClips: e.props.loadMoreClips,
                            pageType: e.props.pageType
                        }))
                    })
                }, t = u.__decorate([Object(o.d)("ClipCards")], t)
            }(i.Component);
        var E = Object(s.b)(null, function(e, t) {
                return Object.assign(Object(l.b)({
                    showClipsViewModal: function(e, n, i) {
                        return Object(d.d)(c.a, {
                            getClips: i,
                            clip: e,
                            clipIndex: n,
                            loadMoreClips: t.loadMoreClips,
                            pageType: t.pageType
                        })
                    }
                }, e), t)
            })(C),
            N = function(e) {
                return i.createElement(y._8, null, i.createElement(y._8, {
                    display: y.R.Flex,
                    flexWrap: y.U.NoWrap,
                    justifyContent: y._7.Between,
                    margin: {
                        bottom: 2
                    },
                    fullWidth: !0
                }, i.createElement(y._8, {
                    display: y.R.Flex,
                    flexWrap: y.U.NoWrap
                }, e.pageType === f.b.Game && i.createElement(y._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(r.a, null)), i.createElement(y._8, null, i.createElement(S.c, {
                    updateTimeFilter: e.updateTimeFilter,
                    timeFilterValue: e.timeFilterValue
                }))), i.createElement(y.v, {
                    linkTo: "https://twitch.tv/manager/clips",
                    targetBlank: !0,
                    type: y.B.Hollow,
                    "data-a-target": "manage-clips-button"
                }, Object(a.d)("Manage my clips", "TopClips"))), i.createElement(y._8, null, e.isLoading ? i.createElement(y._10, {
                    fillContent: !0
                }) : i.createElement(E, {
                    clips: e.clips,
                    pageType: e.pageType,
                    loadMoreClips: e.loadMoreClips,
                    updateTimeFilter: e.updateTimeFilter,
                    timeFilterValue: e.timeFilterValue
                })))
            },
            w = Object(o.d)("TopClips", {
                autoReportInteractive: !0
            })(N);
        n.d(t, !1, function() {
            return N
        }), n.d(t, "a", function() {
            return w
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
                    }, a.createElement(s._8, {
                        className: "image-uploader",
                        textAlign: s._45.Center,
                        display: s.R.Flex,
                        flexDirection: s.T.Column,
                        alignItems: s.c.Center,
                        justifyContent: s._7.Center,
                        position: s._15.Relative,
                        fullHeight: !0,
                        fullWidth: !0
                    }, this.renderErrorMessage(), a.createElement(s._8, {
                        position: s._15.Relative
                    }, a.createElement(s._8, {
                        className: "image-uploader__upload-svg--anim-backfill"
                    }, a.createElement(s._24, {
                        asset: s._25.Upload,
                        type: s._26.Alt2,
                        width: this.props.iconWidth || 99,
                        height: this.props.iconWidth || 76
                    })), a.createElement(s._8, {
                        className: "image-uploader__upload-svg--anim-fill",
                        position: s._15.Absolute,
                        display: this.props.isLoading ? s.R.Block : s.R.Hide,
                        attachTop: !0
                    }, a.createElement(s._24, {
                        asset: s._25.Upload,
                        type: s._26.Brand,
                        width: this.props.iconWidth || 99,
                        height: this.props.iconHeight || 76
                    }))), this.props.isLoading ? this.renderLoadingState() : this.renderNormalState()))
                }, t.prototype.renderLoadingState = function() {
                    return a.createElement(s._8, {
                        margin: 1,
                        "data-test-selector": "image-uploader-loading"
                    }, a.createElement(s.Q, {
                        type: s._49.H4
                    }, Object(r.d)("Uploading", "ImageUploader")))
                }, t.prototype.renderNormalState = function() {
                    var e = Object(r.d)("Browse", "ImageUploader");
                    return a.createElement(s._8, null, a.createElement(s._8, null, a.createElement(s.Q, {
                        type: s._49.H4
                    }, Object(r.d)("Drag and drop your image here", "ImageUploader"))), a.createElement(s._8, {
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            x: 1,
                            y: 0
                        },
                        fullWidth: !0,
                        "data-test-selector": "image-uploader-hint"
                    }, a.createElement(s.Q, {
                        type: s._49.P,
                        fontSize: s.V.Size7,
                        color: s.K.Alt2
                    }, this.props.hintMessage)), a.createElement(s._8, null, a.createElement(s.v, {
                        ariaLabel: e,
                        type: s.B.Hollow
                    }, e)))
                }, t.prototype.renderErrorMessage = function() {
                    if (this.props.errorMessage) return a.createElement(s._8, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "image-uploader-error"
                    }, a.createElement(s.Q, {
                        type: s._49.H5,
                        color: s.K.Error,
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
            g = n("Odds"),
            h = (n("vQzq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            i = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        i && t.props.updateLanguagePreferences(i, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return l.createElement(g._8, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, l.createElement(g.J, {
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
                    return l.createElement(g._8, {
                        className: "language-select-menu"
                    }, l.createElement(u.a, null, l.createElement(g.v, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: g.B.Hollow
                    }, l.createElement(g._8, {
                        display: g.R.Flex
                    }, Object(d.d)("Language", "LanguageSelectMenu"), l.createElement(g._8, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && l.createElement(g._12, {
                        type: g._13.Brand,
                        label: e.toString()
                    })))), l.createElement(g.q, {
                        direction: g.r.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, l.createElement(c.b, {
                        className: "language-select-menu__balloon"
                    }, l.createElement(g._8, {
                        padding: .5
                    }, Object(m.b)().map(this.renderLanguageOption))), l.createElement(g._35, {
                        background: g.n.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, l.createElement(g.v, {
                        type: g.B.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(d.d)("Clear all", "LanguageSelectMenu"))))))
                }, t
            }(l.Component)),
            v = Object(a.d)(Object(p.d)("LanguageSelectMenu"))(h);
        var f = Object(i.b)(function(e) {
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
            return f
        })
    },
    "7FW4": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = i.createElement(o._8, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.T.Column,
                justifyContent: o._7.Center,
                display: o.R.Flex
            }, i.createElement(o.Q, {
                color: o.K.Link,
                fontSize: o.V.Size4,
                noWrap: !0
            }, Object(r.d)("View All", "Following--ViewAllButton")), i.createElement(o.Q, {
                color: o.K.Alt2,
                fontSize: o.V.Size4,
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
            }, i.createElement(o._8, null, i.createElement(o.k, {
                ratio: e.aspectRatio
            }, i.createElement(o._35, {
                background: o.n.Alt2,
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
        a.o.store.registerReducer("directory", function(e, t) {
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

        function g(e) {
            return {
                type: d,
                hearthstoneClass: e
            }
        }

        function h(e) {
            return {
                type: c,
                hearthstoneMode: e
            }
        }
        var v = "csgoMapFilter",
            f = "hearthstoneClassFilter",
            k = "hearthstoneModeFilter",
            y = "leagueChampionFilter",
            b = "overwatchHeroFilter",
            _ = 0;

        function S(e) {
            var t = this;
            return function(n) {
                return i.__awaiter(t, void 0, void 0, function() {
                    return i.__generator(this, function(t) {
                        return a.m.set(v, e), n(u(e)), [2]
                    })
                })
            }
        }

        function C() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.m.remove(v), t(u("")), [2]
                    })
                })
            }
        }

        function E(e) {
            var t = this;
            return function(n) {
                return i.__awaiter(t, void 0, void 0, function() {
                    return i.__generator(this, function(t) {
                        return a.m.set(y, e), n(m(e)), [2]
                    })
                })
            }
        }

        function N() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.m.remove(y), t(m(_)), [2]
                    })
                })
            }
        }

        function w(e) {
            var t = this;
            return function(n) {
                return i.__awaiter(t, void 0, void 0, function() {
                    return i.__generator(this, function(t) {
                        return a.m.set(b, e), n(p(e)), [2]
                    })
                })
            }
        }

        function O(e) {
            var t = this;
            return function(n) {
                return i.__awaiter(t, void 0, void 0, function() {
                    return i.__generator(this, function(t) {
                        return a.m.set(f, e), n(g(e)), [2]
                    })
                })
            }
        }

        function T() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.m.remove(b), t(p("")), [2]
                    })
                })
            }
        }

        function D() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.m.remove(f), t(g("")), [2]
                    })
                })
            }
        }

        function L(e) {
            var t = this;
            return function(n) {
                return i.__awaiter(t, void 0, void 0, function() {
                    return i.__generator(this, function(t) {
                        return a.m.set(k, e), n(h(e)), [2]
                    })
                })
            }
        }

        function F() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.m.remove(k), t(h("")), [2]
                    })
                })
            }
        }

        function I() {
            return {
                csgoMap: a.m.get(v, ""),
                hearthstoneClass: a.m.get(f, ""),
                hearthstoneMode: a.m.get(k, ""),
                leagueChampion: a.m.get(y, _),
                overwatchCharacter: a.m.get(b, "")
            }
        }

        function R(e) {
            return e.gameFilters.csgoMap
        }

        function P(e) {
            return e.gameFilters.leagueChampion
        }

        function A(e) {
            return e.gameFilters.overwatchCharacter
        }

        function x(e) {
            return e.gameFilters.hearthstoneClass
        }

        function j(e) {
            return e.gameFilters.hearthstoneMode
        }
        a.o.store.registerReducer("gameFilters", function(e, t) {
            switch (void 0 === e && (e = I()), t.type) {
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
        var M = n("GiK3"),
            U = n("RH2O"),
            V = n("c8Oh"),
            B = n("6yQB"),
            G = n("yWCw"),
            H = n("DtWM"),
            W = n("7vx8"),
            q = n("j7/Y"),
            Q = n("oIkB"),
            z = n("w9tK"),
            K = n("Us7i"),
            $ = n("vH/s"),
            Y = n("/+to"),
            J = n("QG7y"),
            X = n("CSlQ"),
            Z = n("v5ho"),
            ee = function(e) {
                return e.startsWith("/communities") || e.startsWith("/directory/communities") ? Z.a.Communities : Z.a.Games
            },
            te = n("2KeS"),
            ne = n("zCIC"),
            ie = n("+Znq"),
            ae = n("Odds"),
            re = (n("IDLB"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.balloonOpen = !1, t.onChangeSearchTerm = function(e) {
                        t.props.onSearch(e.currentTarget.value)
                    }, t.onToggle = function(e) {
                        return t.balloonOpen = !e
                    }, t.renderSections = function() {
                        return t.props.sections ? t.props.sections.map(function(e) {
                            return [M.createElement(ae._2, {
                                padding: {
                                    x: 1,
                                    top: .5
                                },
                                key: "header"
                            }, M.createElement(ae.Q, {
                                color: ae.K.Alt2
                            }, e.title)), e.items]
                        }) : null
                    }, t.renderSelected = function() {
                        return t.props.selected ? M.createElement(ae._35, {
                            borderBottom: !0
                        }, M.createElement(ae._2, {
                            padding: {
                                x: 1,
                                top: .5
                            }
                        }, M.createElement(ae.Q, {
                            color: ae.K.Alt2
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
                    return this.props.isError ? null : this.props.isLoading ? M.createElement(ae._8, {
                        display: ae.R.Flex,
                        justifyContent: ae._7.Center,
                        alignItems: ae.c.Center
                    }, M.createElement(ae._14, {
                        width: 70,
                        height: 30
                    })) : M.createElement(ae._8, {
                        className: "selectable-filter"
                    }, M.createElement(ie.a, {
                        onToggle: this.onToggle,
                        ref: this.setToggleRef
                    }, M.createElement(ae.v, i.__assign({
                        dropdown: !0,
                        type: ae.B.Hollow
                    }, Object(ae._63)(this.props)), M.createElement(ae._8, {
                        display: ae.R.Flex
                    }, this.props.title)), M.createElement(ae.q, {
                        direction: ae.r.BottomLeft,
                        noTail: !0
                    }, M.createElement(ae._8, {
                        className: "selectable-filter__balloon",
                        padding: {
                            y: .5
                        }
                    }, M.createElement(ae._35, {
                        padding: 1,
                        borderBottom: !0
                    }, M.createElement(ae._27, {
                        refDelegate: this.setSearchRef,
                        onChange: this.onChangeSearchTerm,
                        placeholder: this.props.searchPlaceholder
                    })), this.renderSelected(), M.createElement(ne.b, {
                        className: "selectable-filter__scroll-container"
                    }, M.createElement(ae._8, null, this.renderSections()))))))
                }, t
            }(M.Component)),
            oe = (n("zu64"), function(e) {
                return M.createElement(ae._6, i.__assign({
                    onClick: e.onClick,
                    key: e.key,
                    disabled: e.disabled
                }, Object(ae._63)(e)), M.createElement(ae._8, {
                    className: "selectable-filter-item",
                    display: ae.R.Flex,
                    flexDirection: ae.T.Row,
                    alignItems: ae.c.Center,
                    margin: {
                        y: .5,
                        x: 1
                    },
                    flexWrap: ae.U.NoWrap
                }, e.spriteWidth && M.createElement(ae._8, {
                    className: "selectable-filter-item__avatar-container",
                    flexShrink: 0
                }, M.createElement("div", {
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
                })), M.createElement(ae._2, {
                    margin: {
                        left: 1
                    },
                    flexGrow: 1,
                    ellipsis: !0
                }, M.createElement(ae.Q, {
                    fontSize: ae.V.Size5
                }, e.name)), e.withClose && M.createElement(ae._24, {
                    asset: ae._25.Close
                })))
            }),
            se = [{
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
            le = n("EOpv"),
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
                                    content: se
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
                        return void 0 === n && (n = !1), M.createElement(oe, {
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
                        var t = se[0].Maps.find(function(t) {
                            return t.name === e.props.csgoMap
                        });
                        t && this.setState({
                            selected: t
                        })
                    }
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return M.createElement(re, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(a.d)("Search by Map", "CSGOMapFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(a.d)("Selected Map", "CSGOMapFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(le.b)(le.a.CSGOMap),
                        "data-test-selector": "csgo-filter-selector"
                    })
                }, t
            }(M.Component);
        var ce = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    csgoMap: R(e)
                }
            }, function(e) {
                return Object(te.b)({
                    updateCSGOMapPreference: S,
                    clearCSGOMapPreference: C
                }, e)
            })(de),
            ue = n("iOr9"),
            me = n("HW6M"),
            pe = (n("0ewX"), function(e) {
                var t = {
                    backgroundImage: "url(" + e.imageURL + ")"
                };
                return M.createElement(ae._35, {
                    className: "event",
                    margin: {
                        bottom: 1
                    },
                    border: !0
                }, M.createElement("div", {
                    className: "event__header",
                    style: t
                }, M.createElement("div", {
                    className: "event__header-overlay"
                }, M.createElement(ae.Q, {
                    type: ae._49.H5,
                    bold: !0
                }, e.title))), e.children)
            }),
            ge = n("OFFm"),
            he = n("MQiv"),
            ve = function(e) {
                var t = {
                        pathname: "/events/" + e.event.id,
                        state: {
                            medium: $.PageviewMedium.Game,
                            content: $.PageviewContent.EventUpcoming,
                            content_index: e.orderIndex
                        }
                    },
                    n = new Date(e.event.startAt),
                    i = new Date(e.event.endAt);
                return M.createElement(ae._6, {
                    key: e.event.id,
                    linkTo: t,
                    alpha: !0
                }, M.createElement(ae._8, {
                    className: "event__broadcast-wrapper"
                }, M.createElement(ae._8, {
                    className: me("event__broadcast", {
                        "event__broadcast-last": e.last
                    }),
                    padding: {
                        y: .5,
                        left: 2,
                        right: 1
                    },
                    margin: {
                        left: 2
                    },
                    display: ae.R.Flex,
                    flexWrap: ae.U.NoWrap,
                    justifyContent: ae._7.Between
                }, M.createElement(ae._8, {
                    flexShrink: 1
                }, M.createElement(ae._8, {
                    className: "event__broadcast-header",
                    fullWidth: !0
                }, M.createElement(ae.Q, {
                    bold: !0
                }, Object(a.c)(n, "medium"), e.event.title && " - ", e.event.title)), M.createElement(ae._8, {
                    className: "event__broadcast-details"
                }, Object(a.d)("{start,time,short} - {end,time,short}", {
                    start: n,
                    end: i
                }, "UpcomingEvents"))), M.createElement(ae._8, {
                    display: ae.R.Flex,
                    flexShrink: 0,
                    margin: {
                        left: 1
                    },
                    alignSelf: ae.d.Center
                }, M.createElement(ge.a, {
                    eventID: e.event.id,
                    areNotificationsEnabled: e.event.self && e.event.self.isFollowing || !1,
                    eventLocation: he.a.EventSidebar,
                    eventTypename: e.event.__typename,
                    tooltipDirection: ae._54.Left,
                    small: !0
                })))))
            },
            fe = [" | ", " - "];

        function ke(e) {
            for (var t = "", n = [], i = 0, a = fe.length; i < a && n.length <= 1; i++) t = fe[i], n = e.split(t).map(function(e) {
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
        var ye = function(e) {
                var t = new Map,
                    n = new Map;
                e.events.forEach(function(e) {
                    if (e.parent) {
                        var i = t.get(e.parent.id) || [];
                        i.push(e), t.set(e.parent.id, i)
                    } else {
                        var a = e.channel && e.channel.id || void 0;
                        if (void 0 === a) return;
                        var r = n.get(a) || [];
                        r.push(e), n.set(a, r)
                    }
                });
                var a = [];
                t.forEach(function(e) {
                    var t = e[0];
                    t && a.push({
                        key: t.id,
                        title: t.parent && t.parent.title || "",
                        image: t.parent && t.parent.imageURL || "",
                        events: e,
                        startAt: new Date(t.startAt).valueOf()
                    })
                }), n.forEach(function(e) {
                    var t = new Map;
                    e.forEach(function(e) {
                        var n = ke(e.title),
                            a = t.get(n.prefix) || [],
                            r = n.postfix;
                        a.push(i.__assign({}, e, {
                            title: r
                        })), t.has(n.prefix) || t.set(n.prefix, a)
                    }), t.forEach(function(e, t) {
                        var n = e[0];
                        n && a.push({
                            key: n.id,
                            title: t,
                            image: n.imageURL,
                            events: e,
                            startAt: new Date(n.startAt).valueOf()
                        })
                    })
                });
                var r = 0,
                    o = a.sort(function(e, t) {
                        return e.startAt - t.startAt
                    }).map(function(e) {
                        var t = e.events.map(function(t, n) {
                            return M.createElement(ve, {
                                key: t.id,
                                event: t,
                                orderIndex: r++,
                                last: n === e.events.length - 1
                            })
                        });
                        return M.createElement(pe, {
                            key: e.key,
                            title: e.title,
                            imageURL: e.image
                        }, t)
                    });
                return M.createElement(M.Fragment, null, o)
            },
            be = function(e) {
                return M.createElement(ae._8, {
                    margin: {
                        bottom: 3
                    }
                }, M.createElement(ae._8, {
                    margin: {
                        bottom: 1
                    }
                }, M.createElement(ae.Q, {
                    type: ae._49.H4
                }, e.title)), e.children)
            },
            _e = function(e) {
                if (!(e.event.liveChannel && e.event.liveChannel.stream && e.event.channel && e.event.channel.login)) return null;
                var t = {
                        pathname: "/" + e.event.channel.login,
                        state: {
                            medium: $.PageviewMedium.Game,
                            content: $.PageviewContent.EventLive,
                            content_index: e.orderIndex
                        }
                    },
                    n = e.event.channel.displayName || e.event.channel.login,
                    i = "";
                return e.event.liveChannel.stream.viewersCount && (i = Object(a.d)("{viewerCount, number} viewers", {
                    viewerCount: e.event.liveChannel.stream.viewersCount
                }, "Events"), i += " - "), M.createElement(pe, {
                    title: e.event.title,
                    imageURL: e.event.imageURL
                }, M.createElement(ae._8, {
                    padding: 1,
                    alignItems: ae.c.Baseline,
                    display: ae.R.Flex,
                    justifyContent: ae._7.Between
                }, M.createElement(ae.Q, {
                    type: ae._49.P
                }, i, n), M.createElement(ae.v, {
                    linkTo: t
                }, Object(a.d)("Watch Now", "Events"))))
            },
            Se = n("mi6k"),
            Ce = function(e) {
                var t = null;
                if (e.event.highlights && e.event.highlights.edges && e.event.highlights.edges.length ? t = e.event.highlights.edges.map(function(e) {
                        return e.node
                    }) : e.event.archives && e.event.archives.edges && e.event.archives.edges.length && (t = e.event.archives.edges.map(function(e) {
                        return e.node
                    })), !t || 0 === t.length) return null;
                var n = t.map(function(t, n, i) {
                    if (!t) return null;
                    var r = {
                            pathname: "/videos/" + t.id,
                            state: {
                                medium: $.PageviewMedium.Game,
                                content: $.PageviewContent.EventPast,
                                context_index: e.orderIndex
                            }
                        },
                        o = Object(Se.b)(t.lengthSeconds || 0);
                    return M.createElement(ae._6, {
                        key: t.id,
                        linkTo: r,
                        alpha: !0
                    }, M.createElement(ae._8, {
                        className: me("event__video", {
                            "event__video-last": n === i.length - 1
                        }),
                        padding: 1
                    }, M.createElement(ae._8, {
                        className: "event__video-card"
                    }, M.createElement(ae.C, {
                        row: !0
                    }, M.createElement(ae.E, {
                        src: t.previewThumbnailURL,
                        alt: t.title || "",
                        size: ae.F.Size6
                    }), M.createElement(ae.D, null, M.createElement(ae._8, {
                        padding: {
                            left: 1
                        }
                    }, M.createElement(ae.Q, {
                        type: ae._49.H6
                    }, t.title), M.createElement(ae._8, {
                        className: "event__broadcast-details"
                    }, M.createElement(ae.Q, {
                        type: ae._49.P
                    }, Object(a.d)("{viewCount, number} views", {
                        viewCount: t.viewCount || 0
                    }, "Events"), " • ", o))))))))
                });
                return M.createElement(pe, {
                    key: e.event.id,
                    title: e.event.title,
                    imageURL: e.event.imageURL
                }, n)
            },
            Ee = n("hcPX"),
            Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tracked = !1, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return null;
                    if (this.props.data.error || !this.props.data.game || !this.props.data.game.featuredEventsByTime) return null;
                    var e = (this.props.data.game.featuredEventsByTime.live || []).filter(this.isNotEmpty),
                        t = null;
                    if (e.length) {
                        var n = e.map(function(e, t) {
                            return M.createElement(_e, {
                                key: e.id,
                                event: e,
                                orderIndex: t
                            })
                        });
                        t = M.createElement(be, {
                            title: Object(a.d)("Live Events", "Events")
                        }, n)
                    }
                    var i = (this.props.data.game.featuredEventsByTime.future || []).filter(this.isNotEmpty),
                        r = null;
                    i.length && (r = M.createElement(be, {
                        title: Object(a.d)("Upcoming Events", "Events")
                    }, M.createElement(ye, {
                        events: i
                    })));
                    var o = (this.props.data.game.featuredEventsByTime.past || []).filter(this.isNotEmpty).filter(this.hasVideo),
                        s = null;
                    if (o.length) {
                        var l = o.map(function(e, t) {
                            return M.createElement(Ce, {
                                key: e.id,
                                event: e,
                                orderIndex: t
                            })
                        });
                        s = M.createElement(be, {
                            title: Object(a.d)("Recent Events", "Events")
                        }, l)
                    }
                    var d = !!e.length || !!i.length || !!o.length;
                    return M.createElement(ae.e, {
                        duration: ae.g.Medium,
                        enabled: !0,
                        type: ae.j.SlideInRight
                    }, M.createElement(ae._8, {
                        className: me({
                            "featured-events-layout__column": d
                        })
                    }, t, r, s))
                }, t.prototype.trackPresentation = function(e, t, n) {
                    var i = e.map(function(e) {
                            return e.id
                        }),
                        r = t.map(function(e) {
                            return e.id
                        }),
                        o = n.map(function(e) {
                            return e.id
                        });
                    a.o.tracking.track($.SpadeEventType.FeaturedEventPresentation, {
                        game: this.props.data.game ? this.props.data.game.name : "unknown game",
                        live_events: JSON.stringify(i),
                        upcoming_events: JSON.stringify(r),
                        past_events: JSON.stringify(o)
                    })
                }, t.prototype.isNotEmpty = function(e) {
                    return null !== e && e !== {}
                }, t.prototype.hasVideo = function(e) {
                    var t = !!e.highlights && !!e.highlights.edges && !!e.highlights.edges.length,
                        n = !!e.archives && !!e.archives.edges && !!e.archives.edges.length;
                    return t || n
                }, t.prototype.onRender = function() {
                    if (!this.props.data.loading && !this.tracked && !this.props.data.error && this.props.data.game && this.props.data.game.featuredEventsByTime) {
                        var e = this.props.data.game.featuredEventsByTime;
                        this.trackPresentation((e.live || []).filter(this.isNotEmpty), (e.future || []).filter(this.isNotEmpty), (e.past || []).filter(this.isNotEmpty)), this.tracked = !0
                    }
                }, t = i.__decorate([Object(W.a)(Ee, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.gameName
                            }
                        }
                    }
                })], t)
            }(M.Component),
            we = n("AadB"),
            Oe = (n("SG0P"), "directory-container"),
            Te = "direectory-grid-grid-layout",
            De = "directory-grid-sidebar-layout",
            Le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderGrid = function(e) {
                        void 0 === e && (e = !0);
                        var n = null;
                        return e && (n = M.createElement(Y.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: J.d.directory,
                            slotID: J.b.directory.rectangle,
                            adSize: J.c.directory.rectangle,
                            "data-a-target": "directory-card-ad-slot",
                            targeting: {
                                pagetype: J.a.games,
                                game: t.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        })), M.createElement(ae._8, {
                            flexShrink: 0,
                            "data-target": Oe,
                            "data-test-selector": Te
                        }, M.createElement(ae._55, {
                            gutterSize: ae._57.Small,
                            childWidth: ae._56.Large,
                            placeholderItems: 20
                        }, n, t.props.children), M.createElement(ne.a, {
                            enabled: t.props.canLoadMore,
                            loadMore: t.props.loadMore,
                            pixelThreshold: 200
                        }))
                    }, t.renderSidebar = function() {
                        return M.createElement(ae._8, {
                            display: ae.R.Flex,
                            flexWrap: ae.U.NoWrap,
                            fullWidth: !0,
                            "data-test-selector": De
                        }, M.createElement(ae._8, {
                            flexGrow: 1,
                            display: ae.R.Flex,
                            flexWrap: ae.U.Wrap,
                            fullWidth: !0
                        }, M.createElement(ae._55, {
                            gutterSize: ae._57.Small,
                            childWidth: ae._56.Medium,
                            placeholderItems: 20
                        }, t.props.children), M.createElement(ne.a, {
                            enabled: t.props.canLoadMore,
                            loadMore: t.props.loadMore,
                            pixelThreshold: 200
                        })), M.createElement(ae._8, {
                            display: ae.R.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            margin: {
                                left: 3
                            }
                        }, M.createElement(ae._8, {
                            display: ae.R.Flex,
                            flexDirection: ae.T.Column
                        }, M.createElement(Y.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 0,
                                width: 320,
                                height: 250
                            },
                            adUnit: J.d.directory,
                            slotID: J.b.directory.rectangle,
                            adSize: J.c.directory.rectangle,
                            "data-a-target": "directory-event-ad-slot",
                            targeting: {
                                pagetype: J.a.games,
                                game: t.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        }), t.props.firstPageLoaded && M.createElement(Ne, {
                            gameName: t.props.communityName
                        }))))
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + Oe + '"]'),
                            t = document.querySelector('[data-target="' + we.a + '"]'),
                            n = document.querySelector("#" + J.b.directory.rectangle);
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
                        };
                        return M.createElement(ue.a, {
                            name: "TWILIGHT_EVENT_GAME_DIRECTORY",
                            assignments: e
                        })
                    }
                    return this.renderGrid()
                }, t.prototype.isEventApprovedDirectory = function(e) {
                    return a.o.dynamicSettings.get("event_directory_enabled_games", []).includes(e.toLowerCase())
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t
            }(M.Component),
            Fe = Object(X.d)("DirectoryGrid")(Le);
        var Ie, Re, Pe, Ae = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(Fe),
            xe = n("NY9D"),
            je = n("jkA6"),
            Me = n("7FW4"),
            Ue = n("peXu"),
            Ve = n("F3Wg"),
            Be = n("SN3I"),
            Ge = n("MMhf"),
            He = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory || this.props.data.error || !this.props.data.directory) return null;
                    var t, n = Object(Ge.a)(this.props.languageCode),
                        i = this.props.directoryWidth,
                        a = this.props.directoryType === Z.a.Communities ? $.PageviewMedium.Community : $.PageviewMedium.Game,
                        r = this.props.data.directory.streams.edges || [];
                    if (i && i > 0) {
                        var o = Object(Ue.a)(i, 240, 2);
                        o < r.length && (r = r.slice(0, o - 1), t = M.createElement("div", {
                            style: {
                                order: r.length
                            }
                        }, M.createElement(Me.a, {
                            subHeader: n,
                            linkTo: {
                                pathname: this.getViewAllPath(),
                                state: {
                                    medium: a,
                                    content: $.PageviewContent.Game
                                }
                            }
                        })))
                    }
                    var s = r.filter(function(e) {
                        var t = e.node;
                        return t && t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(t, n) {
                        var i = t.node;
                        if (i) return M.createElement(we.b, {
                            directoryName: e.props.directoryName,
                            directoryType: e.props.directoryType,
                            streamIndex: n,
                            streamNode: i,
                            key: i.id,
                            trackingMedium: a
                        })
                    });
                    return M.createElement("div", null, M.createElement(Be.a, {
                        languageCode: this.props.languageCode
                    }), M.createElement(ae._55, {
                        gutterSize: ae._57.Small,
                        childWidth: ae._56.Medium,
                        placeholderItems: 20
                    }, s, t))
                }, t.prototype.getViewAllPath = function() {
                    return this.props.directoryType === Z.a.Communities ? Object(xe.a)(this.props.directoryName) + "/" + this.props.languageCode : Object(xe.c)(this.props.directoryName) + "/" + this.props.languageCode
                }, t = i.__decorate([Object(W.a)(Ve, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                limit: 30,
                                languages: [e.languageCode],
                                type: Object(je.a)(e.directoryType)
                            }
                        }
                    }
                }), Object(X.d)("DirectoryInternationalSection", {
                    autoReportInteractive: !0
                })], t)
            }(M.Component),
            We = n("/SNv"),
            qe = n.n(We),
            Qe = n("LgcN"),
            ze = n("5DPx");

        function Ke(e) {
            a.n.track($.SpadeEventType.HearthstoneFilterAction, i.__assign({
                client_time: Date.now()
            }, e))
        }

        function $e(e) {
            a.n.track($.SpadeEventType.OverwatchFilterAction, i.__assign({
                client_time: Date.now()
            }, e))
        }

        function Ye(e) {
            a.n.track($.SpadeEventType.FilterClick, e)
        }! function(e) {
            e.Deselect = "deselect", e.Select = "select"
        }(Ie || (Ie = {})),
        function(e) {
            e.RemainingPlayers = "remaining_players", e.TeamType = "team_type"
        }(Re || (Re = {})),
        function(e) {
            e.FewerThan25 = "fewer_than_25", e.MoreThan50 = "more_than_50", e.Range25To50 = "25-50"
        }(Pe || (Pe = {}));
        var Je = "hearthstone-class-filter-item-selector",
            Xe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = a.o.logger.withCategory("hearthstone-class-filter"), t.getSections = function() {
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
                                    t.searchRef && (t.searchRef.value = ""), t.props.clearHearthstoneClassPreference(), Ke({
                                        hero: "",
                                        mode: t.props.hearthstoneMode
                                    })
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
                                        return i.trys.push([1, 3, , 4]), [4, Object(Qe.b)()];
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
                            t.searchRef && (t.searchRef.value = ""), t.props.updateHearthstoneClassPreference(e.class), Ke({
                                hero: e.class,
                                mode: t.props.hearthstoneMode
                            })
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), M.createElement(oe, {
                            key: e.name,
                            name: e.class,
                            onClick: t,
                            spriteAsset: qe.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_width,
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
                    return M.createElement(re, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(a.d)("Search by Class", "HearthstoneClassFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(a.d)("Selected Class", "HearthstoneClassFilter"),
                        title: this.state.selected ? this.state.selected.class : Object(le.b)(le.a.HearthstoneClass),
                        "data-test-selector": "hearthstone-class-filter-selector"
                    })
                }, t
            }(M.Component);
        var Ze = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    hearthstoneClass: x(e),
                    hearthstoneMode: j(e)
                }
            }, function(e) {
                return Object(te.b)({
                    updateHearthstoneClassPreference: O,
                    clearHearthstoneClassPreference: D
                }, e)
            })(Xe),
            et = n("Ehh8"),
            tt = n.n(et),
            nt = "hearthstone-mode-filter-item-selector",
            it = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = a.o.logger.withCategory("hearthstone-mode-filter"), t.getSections = function() {
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
                                    t.searchRef && (t.searchRef.value = ""), t.props.clearHearthstoneModePreference(), Ke({
                                        hero: t.props.hearthstoneClass,
                                        mode: ""
                                    })
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
                                        return i.trys.push([1, 3, , 4]), [4, Object(Qe.c)()];
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
                            t.searchRef && (t.searchRef.value = ""), t.props.updateHearthstoneModePreference(e.name), Ke({
                                hero: t.props.hearthstoneClass,
                                mode: e.name
                            })
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), M.createElement(oe, {
                            key: e.name,
                            name: e.display_name,
                            onClick: t,
                            spriteAsset: tt.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_height,
                            spriteHeight: e.image_height,
                            withClose: n,
                            "data-test-selector": nt
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
                    return M.createElement(re, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(a.d)("Search by Mode", "HearthstoneModeFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(a.d)("Selected Mode", "HearthstoneModeFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(le.b)(le.a.HearthstoneMode),
                        "data-test-selector": "hearthstone-mode-filter-selector"
                    })
                }, t
            }(M.Component);
        var at = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    hearthstoneClass: x(e),
                    hearthstoneMode: j(e)
                }
            }, function(e) {
                return Object(te.b)({
                    updateHearthstoneModePreference: L,
                    clearHearthstoneModePreference: F
                }, e)
            })(it),
            rt = n("PPNL"),
            ot = "league-filter-item-selector",
            st = function(e) {
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
                        return M.createElement(oe, {
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
                            "data-test-selector": ot
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
                    return M.createElement(re, {
                        isError: this.props.leagueOfLegends.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.props.leagueOfLegends.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(a.d)("Search by Champion", "LeagueFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(a.d)("Selected Champion", "LeagueFilter"),
                        title: this.state.selected ? this.state.selected.name : Object(le.b)(le.a.LeagueChampion),
                        "data-a-target": "league-champion-filter-dropdown",
                        "data-test-selector": "league-filter-selector"
                    })
                }, t
            }(M.Component);
        var lt, dt = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    leagueChampion: P(e),
                    leagueOfLegends: {
                        apiData: e.directory.leagueOfLegends.apiData,
                        isError: e.directory.leagueOfLegends.isError,
                        isLoading: e.directory.leagueOfLegends.isLoading,
                        version: e.directory.leagueOfLegends.version
                    }
                }
            }, function(e) {
                return Object(te.b)({
                    updateLeagueChampionPreference: E,
                    clearLeagueChampionPreference: N,
                    onLoadLeagueOfLegendsChampions: rt.a
                }, e)
            })(st),
            ct = n("Aj/L"),
            ut = "pubg-prompt";
        ! function(e) {
            e[e.Active = 0] = "Active", e[e.Dismissed = 1] = "Dismissed"
        }(lt || (lt = {}));
        var mt = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    pubgPromptStatus: lt.Dismissed
                }, t.handlePubgPrompt = function() {
                    t.setState({
                        pubgPromptStatus: a.l.get(ut, lt.Active)
                    })
                }, t.dismissPrompt = function() {
                    a.l.set(ut, lt.Dismissed), t.setState({
                        pubgPromptStatus: lt.Dismissed
                    })
                }, t
            }
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                this.handlePubgPrompt()
            }, t.prototype.render = function() {
                return this.state.pubgPromptStatus === lt.Active && this.props.sessionUser ? M.createElement(ae._35, {
                    "data-test-selector": "pubg-prompt__selector",
                    background: ae.n.Base,
                    display: ae.R.Flex,
                    elevation: 3,
                    margin: {
                        bottom: 1
                    },
                    padding: 1,
                    borderMarked: !0
                }, M.createElement(ae._35, {
                    display: ae.R.Flex,
                    flexWrap: ae.U.NoWrap,
                    textAlign: ae._45.Left,
                    alignItems: ae.c.Center,
                    fullWidth: !0
                }, M.createElement(ae._8, {
                    margin: {
                        right: 1
                    },
                    flexGrow: 1
                }, M.createElement(ae.Q, {
                    type: ae._49.H5,
                    color: ae.K.Base
                }, this.props.sessionUser && Object(a.d)("Want to watch a game close to Chicken Dinner? Interested in watching solo mode only? Find streams you like with the new Team Type and Remaining Players filters.", "PUBGPrompt"))), M.createElement(ae._8, {
                    margin: {
                        bottom: 1
                    },
                    flexShrink: 0
                }, M.createElement(ae.w, {
                    "data-test-selector": "pubg-prompt__dismiss",
                    ariaLabel: Object(a.d)("dismiss pubg prompt", "PUBGPrompt"),
                    type: ae.y.Default,
                    onClick: this.dismissPrompt,
                    icon: ae._25.Close
                })))) : null
            }, t
        }(M.Component);
        var pt = Object(U.b)(function(e) {
                return {
                    sessionUser: Object(ct.c)(e)
                }
            })(mt),
            gt = n("Vr3l"),
            ht = n.n(gt),
            vt = "overwatch-hero-filter-item-selector",
            ft = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = a.o.logger.withCategory("overwatch-filter"), t.getSections = function() {
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
                                    t.searchRef && (t.searchRef.value = ""), t.props.clearOverwatchCharacterPreference(), $e({
                                        character: ""
                                    })
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
                                        return i.trys.push([1, 3, , 4]), [4, Object(Qe.d)()];
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
                            t.searchRef && (t.searchRef.value = ""), t.props.updateOverwatchCharacterPreference(e.character), $e({
                                character: e.character
                            })
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), M.createElement(oe, {
                            key: e.character,
                            name: e.display_name,
                            onClick: t,
                            spriteAsset: ht.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_width,
                            spriteHeight: e.image_height,
                            withClose: n,
                            "data-test-selector": vt
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
                    return M.createElement(re, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(a.d)("Search by Hero", "OverwatchFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(a.d)("Selected Hero", "OverwatchFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(le.b)(le.a.OverwatchCharacter),
                        "data-test-selector": "overwatch-hero-filter-selector"
                    })
                }, t
            }(M.Component);
        var kt = Object(U.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded,
                overwatchCharacter: A(e)
            }
        }, function(e) {
            return Object(te.b)({
                updateOverwatchCharacterPreference: w,
                clearOverwatchCharacterPreference: T
            }, e)
        })(ft);

        function yt(e) {
            switch (e) {
                case "FewerThan25":
                    return Object(a.d)("Fewer Than 25", "PUBGRemainingPlayersFilter");
                case "25-50":
                    return Object(a.d)("25-50", "PUBGRemainingPlayersFilter");
                case "MoreThan50":
                    return Object(a.d)("More Than 50", "PUBGRemainingPlayersFilter");
                case "Solo":
                    return Object(a.d)("Solo", "PUBGTeamTypeFilter");
                case "Duo":
                    return Object(a.d)("Duo", "PUBGTeamTypeFilter");
                case "Squad":
                    return Object(a.d)("Squad", "PUBGTeamTypeFilter");
                default:
                    return ""
            }
        }
        var bt = "pubg-dismiss-selector",
            _t = "pubg-item-selector",
            St = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = a.o.logger.withCategory("pubg-remaining-players-filter"), t.getRemainingPlayersFilters = function() {
                        var e = [];
                        return t.state.content && t.state.content.forEach(function(n) {
                            Object.keys(n).forEach(function(i) {
                                n[i].forEach(function(n) {
                                    t.state.selected && t.state.selected.name === n.name || e.push(t.renderRemainingPlayer(n, function() {
                                        t.balloonWrapperRef.toggleBalloon(!1), t.onSelect(n)
                                    }))
                                })
                            })
                        }), e
                    }, t.getSelected = function() {
                        return t.state.selected ? M.createElement(ae._8, null, M.createElement(ae._2, {
                            padding: {
                                left: .5
                            }
                        }, M.createElement("span", null, yt(t.state.selected.name)))) : Object(a.d)("Remaining Players", "PUBGRemainingPlayersFilter")
                    }, t.getSelectedListItem = function() {
                        if (!t.state.selected) return null;
                        return M.createElement(ae._35, {
                            borderBottom: !0
                        }, M.createElement(oe, {
                            key: "pubg-" + t.state.selected.name,
                            name: yt(t.state.selected.name),
                            onClick: function(e) {
                                e.stopPropagation(), Ye({
                                    game: ze.a.PUBG,
                                    item_action: Ie.Deselect,
                                    item_name: Re.RemainingPlayers,
                                    item_value: t.state.selected ? t.state.selected.name.toLowerCase() : "",
                                    open_click: !1
                                }), t.setState({
                                    selected: void 0
                                }, function() {
                                    t.balloonWrapperRef.toggleBalloon(!1), t.props.onSelect()
                                })
                            },
                            withClose: !0,
                            "data-test-selector": bt
                        }))
                    }, t.loadRemainingPlayerData = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, Object(Qe.f)()];
                                    case 2:
                                        return e = n.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = n.sent(), this.logger.error(t, "Failed to load PUBG Remaining Players data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onBalloonToggle = function(e) {
                        e || Ye({
                            game: ze.a.PUBG,
                            item_action: null,
                            item_name: Re.RemainingPlayers,
                            item_value: null,
                            open_click: !0
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e
                        }, function() {
                            e.max_value && e.min_value ? t.props.onSelect(e.max_value.toString(), e.min_value.toString()) : !e.max_value && e.min_value ? t.props.onSelect("", e.min_value.toString()) : e.max_value && !e.min_value && t.props.onSelect(e.max_value.toString(), ""), Ye({
                                game: ze.a.PUBG,
                                item_action: Ie.Select,
                                item_name: Re.RemainingPlayers,
                                item_value: e.name.toLowerCase(),
                                open_click: !1
                            })
                        })
                    }, t.renderRemainingPlayer = function(e, t, n) {
                        return void 0 === n && (n = !1), M.createElement(oe, {
                            key: e.name,
                            name: yt(e.name),
                            onClick: t,
                            withClose: n,
                            "data-test-selector": _t
                        })
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadRemainingPlayerData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadRemainingPlayerData()
                }, t.prototype.render = function() {
                    return M.createElement(ae._8, {
                        display: ae.R.Flex
                    }, M.createElement(ae._8, {
                        display: ae.R.InlineFlex
                    }, M.createElement(ie.a, {
                        ref: this.saveBalloonWrapperRef,
                        onToggle: this.onBalloonToggle
                    }, M.createElement(ae.v, {
                        type: ae.B.Hollow,
                        dropdown: !0,
                        "data-test-selector": "pubg-button-selector"
                    }, this.getSelected()), M.createElement(ae.q, {
                        direction: ae.r.Bottom,
                        noTail: !0
                    }, M.createElement(ae._8, {
                        padding: {
                            y: 1
                        }
                    }, this.getSelectedListItem(), this.getRemainingPlayersFilters())))))
                }, t
            }(M.Component);
        var Ct = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(St),
            Et = "pubg-dismiss-selector",
            Nt = "pubg-item-selector",
            wt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = a.o.logger.withCategory("pubg-team-type-filter"), t.getTeamTypeFilters = function() {
                        var e = [];
                        return t.state.content && t.state.content.forEach(function(n) {
                            Object.keys(n).forEach(function(i) {
                                n[i].forEach(function(n) {
                                    t.state.selected && t.state.selected.name === n.name || e.push(t.renderMode(n, function() {
                                        t.balloonWrapperRef.toggleBalloon(!1), t.onSelect(n)
                                    }))
                                })
                            })
                        }), e
                    }, t.getSelected = function() {
                        return t.state.selected ? M.createElement(ae._8, null, M.createElement(ae._2, {
                            padding: {
                                left: .5
                            }
                        }, M.createElement("span", null, yt(t.state.selected.name)))) : Object(a.d)("Team Type", "PUBGTeamTypeFilter")
                    }, t.getSelectedListItem = function() {
                        if (!t.state.selected) return null;
                        return M.createElement(ae._35, {
                            borderBottom: !0
                        }, M.createElement(oe, {
                            key: "pubg-" + t.state.selected.name,
                            name: yt(t.state.selected.name),
                            onClick: function(e) {
                                e.stopPropagation(), Ye({
                                    game: ze.a.PUBG,
                                    item_action: Ie.Deselect,
                                    item_name: Re.TeamType,
                                    item_value: t.state.selected ? t.state.selected.name.toLowerCase() : "",
                                    open_click: !1
                                }), t.setState({
                                    selected: void 0
                                }, function() {
                                    t.balloonWrapperRef.toggleBalloon(!1), t.props.onSelect()
                                })
                            },
                            withClose: !0,
                            "data-test-selector": Et
                        }))
                    }, t.loadTeamTypeData = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, Object(Qe.e)()];
                                    case 2:
                                        return e = n.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = n.sent(), this.logger.error(t, "Failed to load PUBG Team Type data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onBalloonToggle = function(e) {
                        e || Ye({
                            game: ze.a.PUBG,
                            item_action: null,
                            item_name: Re.TeamType,
                            item_value: null,
                            open_click: !0
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e
                        }, function() {
                            t.props.onSelect(e.name), Ye({
                                game: ze.a.PUBG,
                                item_action: Ie.Select,
                                item_name: Re.TeamType,
                                item_value: e.name.toLowerCase(),
                                open_click: !1
                            })
                        })
                    }, t.renderMode = function(e, t, n) {
                        return void 0 === n && (n = !1), M.createElement(oe, {
                            key: e.name,
                            name: yt(e.name),
                            onClick: t,
                            withClose: n,
                            "data-test-selector": Nt
                        })
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadTeamTypeData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadTeamTypeData()
                }, t.prototype.render = function() {
                    return M.createElement(ae._8, {
                        display: ae.R.Flex
                    }, M.createElement(ae._8, {
                        display: ae.R.InlineFlex
                    }, M.createElement(ie.a, {
                        ref: this.saveBalloonWrapperRef,
                        onToggle: this.onBalloonToggle
                    }, M.createElement(ae.v, {
                        type: ae.B.Hollow,
                        dropdown: !0,
                        "data-test-selector": "pubg-button-selector"
                    }, this.getSelected()), M.createElement(ae.q, {
                        direction: ae.r.Bottom,
                        noTail: !0
                    }, M.createElement(ae._8, {
                        padding: {
                            y: 1
                        }
                    }, this.getSelectedListItem(), this.getTeamTypeFilters())))))
                }, t
            }(M.Component);
        var Ot = Object(U.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(wt),
            Tt = n("qw9S"),
            Dt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderPubgPrompt = function() {
                        var e = decodeURI(n.props.match.params.encodedCommunityName).toLowerCase();
                        return n.state.directoryType === Z.a.Communities || e !== ze.a.PUBG ? null : M.createElement(pt, null)
                    }, n.getAdditionalFilters = function() {
                        var e = [];
                        if (n.props.match.params.encodedLanguage || e.push(M.createElement(B.a, null)), n.state.directoryType === Z.a.Communities) return e;
                        switch (decodeURI(n.props.match.params.encodedCommunityName).toLowerCase()) {
                            case ze.a.Hearthstone:
                                e.push(M.createElement(Ze, null), M.createElement(at, null));
                                break;
                            case ze.a.PUBG:
                                n.state.showPUBGFilters && e.push(M.createElement(Ot, {
                                    onSelect: n.props.onSelectPubgTeamType,
                                    key: "pubg-team-type"
                                }), M.createElement(Ct, {
                                    onSelect: n.props.onSelectPubgRemainingPlayers,
                                    key: "pubg-remaining-player"
                                }));
                                break;
                            case ze.a.League:
                                e.push(M.createElement(dt, null));
                                break;
                            case ze.a.Overwatch:
                                e.push(M.createElement(kt, null));
                                break;
                            case ze.a.CSGO:
                                e.push(M.createElement(ce, null))
                        }
                        return e
                    }, n.styleFilters = function() {
                        return n.getAdditionalFilters().map(function(e, t) {
                            return M.createElement(ae._8, {
                                margin: {
                                    right: 1
                                },
                                key: t
                            }, e)
                        })
                    }, n.trackBrowseClick = function(e, t) {
                        var i, r = decodeURI(n.props.match.params.encodedCommunityName).toLowerCase(),
                            o = function(e, t) {
                                switch (e) {
                                    case ze.a.CSGO:
                                        return {
                                            map: t.csgoMap
                                        };
                                    case ze.a.Hearthstone:
                                        return {
                                            hero_class: t.hearthstoneClass,
                                            game_mode: t.hearthstoneMode
                                        };
                                    case ze.a.League:
                                        return {
                                            champion_id: t.leagueChampion
                                        };
                                    case ze.a.Overwatch:
                                        return {
                                            character_name: t.overwatchCharacter
                                        };
                                    case ze.a.PUBG:
                                        var n = void 0;
                                        return t.pubgPlayerAliveMax ? n = t.pubgPlayerAliveMin && "1" === t.pubgPlayerAliveMin ? Pe.FewerThan25 : Pe.Range25To50 : t.pubgPlayerAliveMin && (n = Pe.MoreThan50), {
                                            team_type: t.pubgGameMode && t.pubgGameMode.toLowerCase(),
                                            remaining_players: n
                                        };
                                    default:
                                        return {}
                                }
                            }(r, n.props);
                        i = {
                            channel_id: parseInt(t, 10),
                            filters_json: JSON.stringify(o),
                            game: r
                        }, a.n.track($.SpadeEventType.BrowseClick, i)
                    }, n.onResize = function(e) {
                        n.setState({
                            directoryWidth: e
                        })
                    }, n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(J.b.directory).length && K.a.display(J.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, n.state = {
                        directoryType: ee(t.match.path),
                        directoryWidth: -1,
                        numSlotsAdded: 0,
                        showAnimatedThumbnails: !1,
                        showPUBGFilters: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    J.g.addListener(J.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    (this.onRender(), "irl" !== decodeURIComponent(this.props.match.params.encodedCommunityName).toLowerCase()) && ("experiment" === a.o.experiments.getAssignment("TWILIGHT_ANIMATED_DIRECTORY_THUMBNAILS") && this.setState({
                        showAnimatedThumbnails: !0
                    }));
                    var e = "variant" === a.o.experiments.getAssignment("TWILIGHT_PUBG_FILTERS");
                    this.setState({
                        showPUBGFilters: e
                    })
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.match.path !== e.match.path && this.setState({
                        directoryType: ee(e.match.path)
                    })
                }, t.prototype.componentWillUnmount = function() {
                    J.g.removeListener(J.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory) return M.createElement(ae._8, {
                        margin: 2
                    }, M.createElement(ae._10, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return M.createElement(G.a, {
                        message: Object(a.d)("Error loading data.", "DirectoryGamePage")
                    });
                    if (!this.props.data.directory) return M.createElement(G.a, {
                        message: Object(a.d)("Game does not exist", "DirectoryGamePage")
                    });
                    var t = null,
                        n = null;
                    this.props.match.params.encodedLanguage ? n = M.createElement(Be.a, {
                        languageCode: this.props.match.params.encodedLanguage
                    }) : "en" !== this.props.languageCode && (n = M.createElement(ae._8, {
                        margin: {
                            bottom: 2
                        }
                    }, M.createElement(ae.Q, {
                        type: ae._49.H4,
                        color: ae.K.Alt2,
                        fontSize: ae.V.Size5,
                        transform: ae._48.Uppercase,
                        "data-a-target": "international-section-header"
                    }, Object(a.d)("All Channels", "DirectoryInternationalSection"))), t = M.createElement(He, {
                        directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        directoryType: ee(this.props.match.path),
                        directoryWidth: this.state.directoryWidth,
                        languageCode: this.props.languageCode
                    }));
                    var i, r = this.props.data.directory.streams.edges.filter(function(e) {
                        var t = e.node;
                        return t && t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(t, n) {
                        var i = t.node;
                        return M.createElement(we.b, {
                            onClick: e.trackBrowseClick,
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
                        i = M.createElement(Ae, {
                            directoryName: this.props.data.directory.displayName,
                            communityName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                            canLoadMore: o,
                            loadMore: this.props.loadMore
                        }, r)
                    } else {
                        var s = Object(a.d)("There are currently no channels streaming to this community", "DirectoryGamePage");
                        this.state.directoryType === Z.a.Games && (s = Object(a.d)("No live channels for this game", "DirectoryGamePage")), i = M.createElement(ae._8, {
                            display: ae.R.Flex,
                            alignItems: ae.c.Center,
                            justifyContent: ae._7.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, M.createElement(ae.Q, {
                            color: ae.K.Alt2,
                            fontSize: ae.V.Size4,
                            italic: !0
                        }, s))
                    }
                    return M.createElement(ae._8, null, M.createElement(ae._8, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, M.createElement(Y.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: J.d.directory,
                        slotID: J.b.directory.banner,
                        adSize: J.c.directory.banner,
                        "data-a-target": "directory-banner-ad-slot",
                        targeting: {
                            pagetype: J.a.games,
                            game: this.props.data.directory.displayName
                        },
                        autoEnable: !1
                    }), t, this.props.firstPageLoaded && this.state.showPUBGFilters && this.renderPubgPrompt(), M.createElement(ae._8, {
                        margin: {
                            bottom: 2
                        },
                        display: ae.R.Flex,
                        flexDirection: ae.T.Row
                    }, this.styleFilters()), n, i, M.createElement(H.a, {
                        onResize: this.onResize
                    })))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || (this.props.latencyTracking.reportInteractive(), this.props.data.directory && a.o.setPageTitle(this.props.data.directory.displayName))
                }, t = i.__decorate([Object(W.a)(Tt, {
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
                                    pubgGameMode: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === ze.a.PUBG ? e.pubgGameMode : "",
                                    pubgPlayerAliveMax: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === ze.a.PUBG ? e.pubgPlayerAliveMax : "",
                                    pubgPlayerAliveMin: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === ze.a.PUBG ? e.pubgPlayerAliveMin : "",
                                    hearthstoneBroadcasterHeroClass: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === ze.a.Hearthstone ? e.hearthstoneClass : "",
                                    hearthstoneGameMode: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === ze.a.Hearthstone ? e.hearthstoneMode : "",
                                    overwatchBroadcasterCharacter: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === ze.a.Overwatch ? e.overwatchCharacter : "",
                                    leagueOfLegendsChampionID: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === ze.a.League && e.leagueChampion ? e.leagueChampion.toString() : "",
                                    counterStrikeMap: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === ze.a.CSGO ? e.csgoMap : "",
                                    counterStrikeSkill: ""
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: Tt,
                                    variables: i.__assign({}, e.data.variables, {
                                        cursor: e.data.directory.streams.edges[e.data.directory.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            directory: i.__assign({}, n.directory, {
                                                streams: i.__assign({}, n.directory.streams, {
                                                    edges: Object(Q.c)(e.directory.streams.edges, n.directory.streams.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(X.d)("DirectoryGamePage", {
                    destination: z.a.DirectoryGameIndex
                }), Object(q.a)({
                    location: $.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: e.match.path.startsWith("/communities") ? $.PageviewDirectoryContentType.Communities : $.PageviewDirectoryContentType.Games,
                            game: e.data.directory ? e.data.directory.displayName : null
                        }
                    }
                })], t)
            }(M.Component),
            Lt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onSelectPubgTeamType = function(e) {
                        return t.setState({
                            pubgGameMode: e
                        })
                    }, t.onSelectPubgRemainingPlayers = function(e, n) {
                        return t.setState({
                            pubgPlayerAliveMax: e,
                            pubgPlayerAliveMin: n
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Dt;
                    return M.createElement(e, i.__assign({
                        csgoMap: this.state.csgoMap,
                        hearthstoneClass: this.state.hearthstoneClass,
                        hearthstoneMode: this.state.hearthstoneMode,
                        pubgGameMode: this.state.pubgGameMode,
                        pubgPlayerAliveMax: this.state.pubgPlayerAliveMax,
                        pubgPlayerAliveMin: this.state.pubgPlayerAliveMin,
                        leagueChampion: this.state.leagueChampion,
                        onSelectPubgTeamType: this.onSelectPubgTeamType,
                        onSelectPubgRemainingPlayers: this.onSelectPubgRemainingPlayers,
                        overwatchCharacter: this.state.overwatchCharacter
                    }, this.props))
                }, t
            }(M.Component);
        var Ft = Object(U.b)(function(e) {
                return {
                    languagePreferences: Object(V.a)(e),
                    sideNavExpanded: e.ui.sideNavExpanded,
                    languageCode: e.session.languageCode,
                    firstPageLoaded: e.session.firstPageLoaded,
                    csgoMap: R(e),
                    hearthstoneClass: x(e),
                    hearthstoneMode: j(e),
                    leagueChampion: P(e),
                    overwatchCharacter: A(e)
                }
            })(Lt),
            It = n("CIox"),
            Rt = "header.DIRECTORY_HEADER_EDIT_ENABLED",
            Pt = "header.DIRECTORY_HEADER_EDIT_DISABLED";

        function At() {
            return {
                type: Rt
            }
        }

        function xt() {
            return {
                type: Pt
            }
        }

        function jt(e) {
            return e.directoryHeader.isEditingEnabled
        }
        a.o.store.registerReducer("directoryHeader", function(e, t) {
            switch (void 0 === e && (e = {
                isEditingEnabled: !1
            }), t.type) {
                case Rt:
                    return i.__assign({}, e, {
                        isEditingEnabled: !0
                    });
                case Pt:
                    return i.__assign({}, e, {
                        isEditingEnabled: !1
                    });
                default:
                    return e
            }
        });
        var Mt, Ut = n("V5M+"),
            Vt = n("9u8h"),
            Bt = n("5eRk");

        function Gt() {
            var e = this;
            return Object(W.a)(Bt, {
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
        }(Mt || (Mt = {}));
        var Ht = "directory-avatar-edit-menu",
            Wt = "directory-avatar-overlay",
            qt = "directory-avatar-remover",
            Qt = "directory-avatar-uploader",
            zt = "directory-banner-edit-menu",
            Kt = "directory-banner-overlay",
            $t = "directory-banner-remover",
            Yt = "directory-banner-uploader",
            Jt = "https://static-cdn.jtvnw.net/community-images/defaults/avatar-285x380.png",
            Xt = "https://static-cdn.jtvnw.net/community-images/defaults/banner-1200x180.png",
            Zt = function() {
                return Object(a.d)("Upload new image", "DirectoryHeader")
            },
            en = function() {
                return Object(a.d)("Remove", "DirectoryHeader")
            },
            tn = function(e) {
                return "https://api.twitch.tv/kraken/communities/" + e + "/images/avatar"
            },
            nn = function(e) {
                return "https://api.twitch.tv/kraken/communities/" + e + "/images/cover"
            },
            an = n("+8VM"),
            rn = n("66ch"),
            on = (n("wB6A"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return M.createElement(ae._35, {
                        className: "image-uploader-modal",
                        background: ae.n.Base
                    }, M.createElement(rn.a, i.__assign({}, this.props)), M.createElement(an.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(M.Component));
        var sn = Object(U.b)(null, function(e) {
                return Object(te.b)({
                    onClose: Ut.c
                }, e)
            })(on),
            ln = n("TFaR"),
            dn = n("HZww"),
            cn = n("SiVO"),
            un = n("wXwV"),
            mn = 1e4,
            pn = function() {
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
                                            return (l = i.sent()).status > 300 && r(new Error(Object(un.e)(l.status))), this.unsubscribe = a.k.subscribe({
                                                topic: Object(dn.s)(s),
                                                success: function() {
                                                    c.timeoutID = setTimeout(function() {
                                                        c.unsubscribe(), r(new Error(Object(un.d)()))
                                                    }, mn)
                                                },
                                                failure: function() {
                                                    clearTimeout(c.timeoutID), r(new Error(Object(un.d)()))
                                                },
                                                onMessage: function(e) {
                                                    if (e.upload_id === s) {
                                                        switch (clearTimeout(c.timeoutID), e.status) {
                                                            case ln.a.POSTPROCESS_COMPLETE:
                                                                c.onFinishUploading && c.onFinishUploading(), t();
                                                                break;
                                                            case ln.a.WIDTH_VALIDATION_FAILED:
                                                            case ln.a.HEIGHT_VALIDATION_FAILED:
                                                                r(new Error(Object(un.c)()));
                                                                break;
                                                            case ln.a.FILE_SIZE_VALIDATION_FAILED:
                                                                r(new Error(Object(un.a)()));
                                                                break;
                                                            case ln.a.IS_IMAGE_VALIDATION_FAILED:
                                                                r(new Error(Object(un.b)(cn.b)));
                                                                break;
                                                            default:
                                                                r(new Error(Object(un.d)()))
                                                        }
                                                        c.unsubscribe && c.unsubscribe()
                                                    }
                                                }
                                            }), [3, 4];
                                        case 3:
                                            return d = i.sent(), a.j.error(d, "unable to upload image"), r(new Error(Object(un.d)())), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }
                }
            }(),
            gn = n("YADZ"),
            hn = (n("IMj1"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingAvatar: !1
                    }, t.renderAvatarEditMode = function() {
                        return t.props.headerEditMode ? M.createElement(ae._8, null, M.createElement("div", {
                            onClick: t.onAvatarClick
                        }, M.createElement(ae._8, {
                            "data-test-selector": Wt,
                            className: "directory-header__overlay",
                            flexDirection: ae.T.Column,
                            textAlign: ae._45.Center,
                            display: ae.R.Flex,
                            position: ae._15.Absolute,
                            alignItems: ae.c.Center,
                            justifyContent: ae._7.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, M.createElement(ae._35, {
                            color: ae.K.Overlay
                        }, M.createElement(ae._24, {
                            asset: ae._25.Edit
                        })), M.createElement(ae.Q, {
                            color: ae.K.Overlay,
                            type: ae._49.P
                        }, Object(a.d)("Change avatar", "DirectoryHeader")))), t.renderAvatarEditMenu()) : null
                    }, t.renderAvatarEditMenu = function() {
                        return t.state.isEditingAvatar ? M.createElement(ae.q, {
                            "data-test-selector": Ht,
                            direction: ae.r.BottomLeft,
                            show: !0
                        }, M.createElement(ae._6, {
                            "data-test-selector": Qt,
                            onClick: t.onAvatarUploadClick
                        }, M.createElement(ae._8, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Zt())), M.createElement(ae._6, {
                            "data-test-selector": qt,
                            onClick: t.onAvatarDeleteClick
                        }, M.createElement(ae._8, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, en()))) : null
                    }, t.trackAvatarEdit = function(e) {
                        a.o.tracking.track($.SpadeEventType.CommunityEdit, {
                            community_id: t.props.data.directory.id,
                            name: t.props.data.directory.name,
                            is_official: !1,
                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles && t.props.data.currentUser.roles.isStaff,
                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles && t.props.data.currentUser.roles.isSiteAdmin,
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
                                return this.props.data && this.props.data.directory && this.props.data.directory.id && this.props.createUploadURLMutation ? (e = new pn(this.getAvatarUploadURL, this.onAvatarDoneUploading), t = {
                                    imageDimensions: "600x800",
                                    maxFileSizeMegabytes: 1,
                                    isRequiredImageDimensions: !0,
                                    provider: e
                                }, this.props.onShowModal(sn, t), [2]) : [2, null]
                            })
                        })
                    }, t.onAvatarDeleteClick = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Vt.a.delete(tn(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackAvatarEdit(), e = function(e) {
                                            return e.directory.avatarURL = Jt, e
                                        }, Object(Q.e)(gn, {
                                            name: this.props.directoryName,
                                            type: Object(je.a)(this.props.directoryType)
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
                                        t = 0, n = cn.b, i.label = 1;
                                    case 1:
                                        return t < n.length ? (a = n[t], e.type !== a ? [3, 3] : [4, this.props.createUploadURLMutation(this.props.data.directory.id, Mt.AVATAR, a)]) : [3, 4];
                                    case 2:
                                        return [2, i.sent()];
                                    case 3:
                                        return t++, [3, 1];
                                    case 4:
                                        throw new Error(Object(un.b)(cn.b))
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
                    return e = this.props.data.loading || this.props.data.error || !this.props.data.directory ? M.createElement(ae._14, {
                        width: 80,
                        height: 112,
                        overlay: !0
                    }) : M.createElement(ae.E, {
                        alt: "",
                        src: this.props.data.directory.avatarURL || "",
                        size: ae.F.Size8,
                        aspect: ae.l.BoxArt
                    }), M.createElement(ae._8, {
                        className: "directory-header__avatar",
                        margin: {
                            left: 3,
                            bottom: 1
                        },
                        position: ae._15.Absolute,
                        attachBottom: !0
                    }, e, this.renderAvatarEditMode())
                }, t = i.__decorate([Object(W.a)(gn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Object(je.a)(e.directoryType)
                            }
                        }
                    }
                }), Gt(), Object(X.d)("DirectoryAvatar", {
                    autoReportInteractive: !0
                })], t)
            }(M.Component));
        var vn = Object(U.b)(function(e) {
                return {
                    headerEditMode: e.directoryHeader.isEditingEnabled
                }
            }, function(e) {
                return Object(te.b)({
                    onCloseModal: Ut.c,
                    onShowModal: Ut.d
                }, e)
            })(hn),
            fn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if ("GAMES" !== this.props.directoryType) return null;
                    var e, t = null;
                    if ("irl" === this.props.directoryName.toLowerCase()) {
                        var n, i = Object(a.d)("New to IRL?", "DirectoryHeader"),
                            r = Object(a.d)("Learn More", "DirectoryHeader");
                        n = M.createElement("a", {
                            target: "_blank",
                            href: "http://link.twitch.tv/irldirectorytooltip",
                            className: "directory-header__link",
                            rel: "noopener noreferrer"
                        }, r), e = M.createElement("span", null, i, " ", n)
                    } else "always on" === this.props.directoryName.toLowerCase() && (e = Object(a.d)("24/7 streaming from your favorite brands. Watch together.", "DirectoryHeader"));
                    return e && (t = M.createElement(ae.Q, {
                        color: ae.K.Overlay,
                        type: ae._49.P,
                        "data-test-selector": "directory-game-descriptor"
                    }, e)), t
                }, t
            }(M.Component),
            kn = n("8UKc"),
            yn = (n("zSAx"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingBanner: !1
                    }, t.renderDropsAvailable = function() {
                        if (t.props.data.directory && t.props.data.directory.activeDropCampaigns && t.props.data.directory.activeDropCampaigns.some(function(e) {
                                return 0 === e.applicableChannels.length
                            })) return M.createElement(ae.Q, {
                            color: ae.K.Overlay
                        }, Object(a.d)("Offers in-game Drops. <x:link>Learn More.</x:link>", {
                            "x:link": function(e) {
                                return M.createElement("a", {
                                    href: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops",
                                    className: "directory-header__link",
                                    target: "_blank"
                                }, e)
                            }
                        }, "drops"))
                    }, t.renderBannerEditMode = function() {
                        return t.props.headerEditMode ? M.createElement(ae._8, null, M.createElement("div", {
                            onClick: t.onBannerClick
                        }, M.createElement(ae._8, {
                            "data-test-selector": Kt,
                            className: "directory-header__overlay",
                            flexDirection: ae.T.Column,
                            display: ae.R.Flex,
                            position: ae._15.Absolute,
                            alignItems: ae.c.Center,
                            justifyContent: ae._7.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, M.createElement(ae._8, {
                            position: ae._15.Relative
                        }, M.createElement(ae._35, {
                            color: ae.K.Overlay,
                            textAlign: ae._45.Center
                        }, M.createElement(ae._24, {
                            asset: ae._25.Edit
                        })), M.createElement(ae.Q, {
                            color: ae.K.Overlay,
                            type: ae._49.P
                        }, Object(a.d)("Change cover image", "DirectoryHeader")), t.renderBannerEditMenu()))), M.createElement(ae._8, {
                            alignContent: ae.b.End,
                            position: ae._15.Absolute,
                            textAlign: ae._45.Right,
                            margin: 3,
                            attachBottom: !0,
                            attachRight: !0
                        }, M.createElement(ae.v, {
                            icon: ae._25.Check,
                            onClick: t.onDoneClick
                        }, Object(a.d)("Done", "DirectoryHeader")))) : null
                    }, t.renderBannerEditMenu = function() {
                        return t.state.isEditingBanner ? M.createElement(ae.q, {
                            "data-test-selector": zt,
                            direction: ae.r.BottomCenter,
                            show: !0
                        }, M.createElement(ae._6, {
                            "data-test-selector": Yt,
                            onClick: t.onBannerUploadClick
                        }, M.createElement(ae._8, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Zt())), M.createElement(ae._6, {
                            "data-test-selector": $t,
                            onClick: t.onBannerDeleteClick
                        }, M.createElement(ae._8, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, en()))) : null
                    }, t.trackBannerEdit = function(e) {
                        t.props.data.directory && a.o.tracking.track($.SpadeEventType.CommunityEdit, {
                            community_id: t.props.data.directory.id,
                            name: t.props.data.directory.name,
                            is_official: !1,
                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles && t.props.data.currentUser.roles.isStaff,
                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles && t.props.data.currentUser.roles.isSiteAdmin,
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
                                return this.props.data.directory && this.props.data.directory.id && this.props.createUploadURLMutation ? (e = new pn(this.getBannerUploadURL, this.onBannerDoneUploading), t = {
                                    imageDimensions: "1200x180",
                                    maxFileSizeMegabytes: 3,
                                    isRequiredImageDimensions: !0,
                                    provider: e
                                }, this.props.onShowModal(sn, t), [2]) : [2, null]
                            })
                        })
                    }, t.onBannerDeleteClick = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.data.directory ? [4, Vt.a.delete(nn(this.props.data.directory.id))] : [2];
                                    case 1:
                                        return t.sent(), this.trackBannerEdit(), e = function(e) {
                                            return e.directory && (e.directory.coverURL = Xt), e
                                        }, Object(Q.e)(kn, {
                                            name: this.props.directoryName,
                                            type: Object(je.a)(this.props.directoryType)
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
                                        t = 0, n = cn.b, i.label = 1;
                                    case 1:
                                        return t < n.length ? (a = n[t], e.type !== a ? [3, 3] : [4, this.props.createUploadURLMutation(this.props.data.directory.id, Mt.BANNER, a)]) : [3, 4];
                                    case 2:
                                        return [2, i.sent()];
                                    case 3:
                                        return t++, [3, 1];
                                    case 4:
                                        throw new Error(Object(un.b)(cn.b))
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
                        e = M.createElement(ae.Q, {
                            color: ae.K.Overlay,
                            type: ae._49.P
                        }, t, " · ", n)
                    } else e = M.createElement(ae._14, {
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
                    return M.createElement(ae._8, {
                        position: ae._15.Relative,
                        overflow: ae._11.Hidden
                    }, M.createElement("div", {
                        className: s,
                        style: o,
                        "data-test-selector": "directory-banner-image"
                    }), M.createElement(ae._8, {
                        className: "directory-header__title",
                        position: ae._15.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, M.createElement(ae.Q, {
                        color: ae.K.Overlay,
                        type: ae._49.H2
                    }, this.props.data && this.props.data.directory && this.props.data.directory.displayName), M.createElement(fn, i.__assign({}, this.props)), this.renderDropsAvailable(), e), this.renderBannerEditMode())
                }, t = i.__decorate([Object(W.a)(kn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Object(je.a)(e.directoryType)
                            }
                        }
                    }
                }), Gt(), Object(X.d)("DirectoryBanner", {
                    autoReportInteractive: !0
                })], t)
            }(M.Component));
        var bn = Object(U.b)(function(e) {
                return {
                    headerEditMode: e.directoryHeader.isEditingEnabled
                }
            }, function(e) {
                return Object(te.b)({
                    onCloseModal: Ut.c,
                    onDisableDirectoryHeaderEdit: xt,
                    onShowModal: Ut.d
                }, e)
            })(yn),
            _n = n("F8kA"),
            Sn = n("W/wc"),
            Cn = n("+xm8"),
            En = n("f2i/"),
            Nn = n("jetF"),
            wn = n("czpb"),
            On = n("oSFp"),
            Tn = n("LjAQ"),
            Dn = n("mw/a"),
            Ln = n("3zLD"),
            Fn = (n("vxr0"), n("0zzo")),
            In = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tosBanCommunity = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.tosBanCommunity ? (e = i.__assign({}, Object(Q.a)({
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
                    return M.createElement(ae._2, {
                        position: ae._15.Relative
                    }, M.createElement(ae._35, {
                        background: ae.n.Base,
                        className: "community-ban-modal"
                    }, M.createElement(ae._8, {
                        padding: 2
                    }, M.createElement(ae._8, {
                        margin: {
                            bottom: 2
                        }
                    }, M.createElement(ae.Q, {
                        type: ae._49.H4
                    }, Object(a.d)("Are you sure you want to ban {name}?", {
                        name: this.props.communityName
                    }, "CommunityBanModal"))), M.createElement(ae._35, {
                        borderTop: !0
                    }, M.createElement(ae._8, {
                        padding: {
                            top: 2
                        },
                        textAlign: ae._45.Center
                    }, M.createElement(ae._8, {
                        display: ae.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, M.createElement(ae.v, {
                        type: ae.B.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(a.d)("Cancel", "CommunityBanModal"))), M.createElement(ae._8, {
                        display: ae.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, M.createElement(ae.v, {
                        onClick: this.tosBanCommunity,
                        "data-test-selector": "ban-button"
                    }, Object(a.d)("Ban", "CommunityBanModal")))))), M.createElement(an.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(M.Component),
            Rn = Object(Ln.compose)(Object(W.a)(Fn, {
                name: "tosBanCommunity"
            }))(In);
        var Pn = Object(U.b)(null, function(e) {
                return Object(te.b)({
                    onCloseModal: Ut.c
                }, e)
            })(Rn),
            An = n("9VER"),
            xn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingCommunity: !1
                    }, t.openReportModal = function() {
                        t.props.isLoggedIn ? t.props.onShowModal(On.a, {
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentID: t.props.data.community.id,
                                contentType: Dn.a.Community,
                                targetUserID: t.props.data.community.owner.id,
                                extra: t.props.communityName
                            },
                            title: Object(a.d)("Report {communityName}", {
                                communityName: t.props.communityName
                            }, "CommunitiesSettingsCog")
                        }) : t.props.login()
                    }, t.openBanModal = function() {
                        t.props.onShowModal(Pn, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName
                        })
                    }, t.onEditModeToggle = function() {
                        t.props.isHeaderEditEnabled ? t.props.onDisableDirectoryHeaderEdit() : (a.o.history.push(Object(xe.a)(t.props.communityName) + "/details"), t.props.onEnableDirectoryHeaderEdit())
                    }, t.handleReportModalClose = function(e) {
                        (e === Tn.b.MutationError || e === Tn.b.Success) && t.props.history.push("/")
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && this.props.data.error ? null : M.createElement(ae._8, {
                        position: ae._15.Relative
                    }, M.createElement(Nn.a, null, M.createElement(ae.w, {
                        ariaLabel: Object(a.d)("Settings", "CommunitiesSettingsCog"),
                        icon: ae._25.Gear
                    }), M.createElement(ae.q, {
                        direction: ae.r.BottomRight,
                        size: ae.s.ExtraSmall,
                        offsetX: "0.5rem"
                    }, this.renderModerationInteractable(), this.renderEditInteractable(), M.createElement(ae._6, {
                        onClick: this.openReportModal,
                        "data-test-selector": "report-selector"
                    }, M.createElement(ae._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(a.d)("Report", "CommunitiesSettingsCog"))), this.renderBanInteractable())))
                }, t.prototype.renderEditInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.editing ? null : M.createElement(ae._6, {
                        onClick: this.onEditModeToggle,
                        "data-test-selector": "edit-selector"
                    }, M.createElement(ae._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(a.d)("Edit", "CommunitiesSettingsCog")))
                }, t.prototype.renderModerationInteractable = function() {
                    if (!this.props.data || this.props.data.loading) return null;
                    if (this.props.data.community && !this.props.data.community.self.permissions.banning) return null;
                    var e = this.props.communityName.toLowerCase();
                    return M.createElement(ae._6, {
                        linkTo: Object(wn.a)("/communities/" + e + "/moderation/log"),
                        "data-test-selector": "moderation-selector"
                    }, M.createElement(ae._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(a.d)("Moderation", "CommunitiesSettingsCog")))
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.community && this.props.data.community.id && this.props.data && this.props.data.currentUser && this.props.data.currentUser.roles && (this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin) ? M.createElement(ae._6, {
                        onClick: this.openBanModal,
                        "data-test-selector": "ban-selector"
                    }, M.createElement(ae._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(a.d)("Ban", "CommunitiesSettingsCog"))) : null
                }, t = i.__decorate([Object(W.a)(An, {
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
            }(M.Component);
        var jn, Mn = Object(U.b)(function(e) {
                return {
                    isHeaderEditEnabled: jt(e),
                    isLoggedIn: Object(ct.d)(e)
                }
            }, function(e) {
                return Object(te.b)({
                    login: function() {
                        return Object(En.f)(Cn.a.ReportChannel)
                    },
                    onShowModal: Ut.d,
                    onCloseModal: Ut.c,
                    onEnableDirectoryHeaderEdit: At,
                    onDisableDirectoryHeaderEdit: xt
                }, e)
            })(Object(_n.f)(xn)),
            Un = n("/XPz"),
            Vn = n("D88i");
        n("5yZy");
        ! function(e) {
            e[e.DirectoryPage = 0] = "DirectoryPage", e[e.DirectoryVideosPage = 1] = "DirectoryVideosPage", e[e.DirectoryClipsPage = 2] = "DirectoryClipsPage", e[e.DirectoryDetailsPage = 3] = "DirectoryDetailsPage"
        }(jn || (jn = {}));
        var Bn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return M.createElement(ae._8, {
                        className: "directory-tabs"
                    }, M.createElement(ae._8, {
                        display: ae.R.Flex,
                        justifyContent: ae._7.Between,
                        flexWrap: ae.U.NoWrap,
                        fullHeight: !0
                    }, M.createElement(ae._8, {
                        display: ae.R.Flex,
                        alignItems: ae.c.Stretch,
                        flexShrink: 0,
                        flexWrap: ae.U.NoWrap
                    }, this.renderTabs(), this.renderGameDetailsTab()), M.createElement(ae._8, {
                        display: ae.R.Flex,
                        alignItems: ae.c.Center,
                        flexShrink: 0,
                        flexWrap: ae.U.NoWrap,
                        padding: {
                            x: 2
                        }
                    }, this.renderSettingsCog(), this.renderFollowButton())))
                }, t.prototype.renderTabs = function() {
                    var e = this,
                        t = this.props.directoryType === Z.a.Games ? Object(xe.c)(this.props.directoryName) : Object(xe.a)(this.props.directoryName);
                    return this.getDirectoryTabs().map(function(n, i) {
                        var a, r = n.label.replace(/ /g, "-").toLowerCase(),
                            o = me("directory-tabs__item", ((a = {})["directory-tabs__item--first"] = 0 === i, a["directory-tabs__item--selected"] = n.isSelected, a));
                        return M.createElement(ae._2, {
                            key: "directory-tabs__item--" + n.label,
                            display: ae.R.Flex,
                            alignItems: ae.c.Center,
                            flexShrink: 0,
                            "data-a-target": "game-directory-" + r + "-tab"
                        }, M.createElement(_n.a, {
                            className: o,
                            to: "" + t + n.path
                        }, e.renderTabData(n.label)))
                    })
                }, t.prototype.renderTabData = function(e) {
                    return M.createElement(ae._8, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: ae.R.Flex
                    }, M.createElement(ae.Q, {
                        type: ae._49.Span,
                        fontSize: ae.V.Size5
                    }, e))
                }, t.prototype.renderGameDetailsTab = function() {
                    if (this.props.data.loading && !this.props.data.directory) return null;
                    if (this.props.data.error || !this.props.data.directory) return null;
                    if (this.props.data.directory && !this.props.data.directory.product) return null;
                    var e, t = me("directory-tabs__item", ((e = {})["directory-tabs__item--selected"] = this.props.activeTab === jn.DirectoryDetailsPage, e)),
                        n = Object(a.d)("Game Details", "DirectoryGameTabs"),
                        i = Object(xe.c)(this.props.directoryName) + "/details";
                    return M.createElement(ae._2, {
                        display: ae.R.Flex,
                        alignItems: ae.c.Center,
                        flexShrink: 0
                    }, M.createElement(_n.a, {
                        className: t,
                        to: i
                    }, this.renderTabData(n)))
                }, t.prototype.renderSettingsCog = function() {
                    return this.props.directoryType !== Z.a.Communities ? null : M.createElement(Mn, {
                        communityName: this.props.directoryName
                    })
                }, t.prototype.renderFollowButton = function() {
                    switch (this.props.directoryType) {
                        case Z.a.Communities:
                            return M.createElement(ae._8, {
                                margin: {
                                    left: 1
                                }
                            }, M.createElement(Sn.a, {
                                directoryName: this.props.directoryName
                            }));
                        case Z.a.Games:
                            return M.createElement(ae._8, {
                                margin: {
                                    left: 1
                                }
                            }, M.createElement(Un.a, {
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
                        isSelected: this.props.activeTab === jn.DirectoryPage,
                        whitelistDirectories: [Z.a.Communities, Z.a.Games]
                    }, {
                        label: Object(a.d)("Videos", "DirectoryGameTabs"),
                        path: "/videos/all",
                        isSelected: this.props.activeTab === jn.DirectoryVideosPage,
                        whitelistDirectories: [Z.a.Games]
                    }, {
                        label: Object(a.d)("Clips", "DirectoryGameTabs"),
                        path: "/clips",
                        isSelected: this.props.activeTab === jn.DirectoryClipsPage,
                        whitelistDirectories: [Z.a.Games]
                    }, {
                        label: Object(a.d)("Details", "DirectoryHeader"),
                        path: "/details",
                        isSelected: this.props.activeTab === jn.DirectoryDetailsPage,
                        whitelistDirectories: [Z.a.Communities]
                    }].filter(function(t) {
                        return t.whitelistDirectories.includes(e.props.directoryType)
                    })
                }, t = i.__decorate([Object(W.a)(Vn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Object(je.a)(e.directoryType)
                            }
                        }
                    }
                }), Object(X.d)("DirectoryGameTabs")], t)
            }(M.Component),
            Gn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return M.createElement(ae._8, {
                        position: ae._15.Relative
                    }, M.createElement(bn, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), M.createElement(vn, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), M.createElement(Bn, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName,
                        activeTab: this.props.activeTab
                    }))
                }, t = i.__decorate([Object(X.d)("DirectoryHeader", {
                    autoReportInteractive: !0
                })], t)
            }(M.Component),
            Hn = n("eXld"),
            Wn = n("lfvs"),
            qn = n("dH4b"),
            Qn = n("J4ib"),
            zn = n("QYm2"),
            Kn = n("2nSg"),
            $n = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        buttonState: ae.A.Default,
                        description: "",
                        rules: "",
                        summary: ""
                    }, t.onDescriptionChange = function(e) {
                        t.setState({
                            buttonState: ae.A.Default,
                            description: e.target.value
                        })
                    }, t.onRulesChange = function(e) {
                        t.setState({
                            buttonState: ae.A.Default,
                            rules: e.target.value
                        })
                    }, t.onSummaryChange = function(e) {
                        t.setState({
                            buttonState: ae.A.Default,
                            summary: e.target.value
                        })
                    }, t.onSaveClick = function() {
                        if (t.props.editCommunity && t.props.data) {
                            var e = t.state.description,
                                n = t.state.rules,
                                r = t.state.summary,
                                o = i.__assign({}, Object(Q.a)({
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
                                buttonState: ae.A.Loading
                            }), t.props.editCommunity(o).then(function(e) {
                                Object(Q.e)(zn, {
                                    name: t.props.communityName
                                }, function(n) {
                                    return ["description", "summary", "rules"].forEach(function(i) {
                                        var r = n.community[i],
                                            o = e.data.editCommunity.community[i];
                                        r !== o && a.o.tracking.track($.SpadeEventType.CommunityEdit, {
                                            community_id: t.props.data.community.id,
                                            name: t.props.data.community.name,
                                            is_official: !1,
                                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles && t.props.data.currentUser.roles.isStaff,
                                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles && t.props.data.currentUser.roles.isSiteAdmin,
                                            edit_type: i,
                                            old_value: r,
                                            new_value: o
                                        })
                                    }), n.community.description = e.data.editCommunity.community.description, n.community.rules = e.data.editCommunity.community.rules, n.community.summary = e.data.editCommunity.community.summary, t.setState({
                                        buttonState: ae.A.Success
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
                    return this.props.data.loading ? M.createElement(ae._55, {
                        childWidth: ae._56.Large
                    }, this.renderPlaceholder(), this.renderPlaceholder()) : this.props.data.error ? null : M.createElement(ae._55, {
                        childWidth: ae._56.Large
                    }, M.createElement(ae._8, null, this.renderSummary(), this.renderDetailsPanel({
                        title: Object(Qn.d)("Description", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.description,
                        onChangeHandler: this.onDescriptionChange
                    })), M.createElement(ae._8, null, this.renderDetailsPanel({
                        title: Object(Qn.d)("Rules", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.rules,
                        onChangeHandler: this.onRulesChange
                    }), this.props.isHeaderEditEnabled ? this.renderSaveButton() : null))
                }, t.prototype.renderDetailsPanel = function(e) {
                    var t = M.createElement(ae._58, null, M.createElement(Wn, i.__assign({
                        source: e.data
                    }, qn.a)));
                    return this.props.isHeaderEditEnabled && (t = M.createElement(ae._46, {
                        defaultValue: e.data,
                        onChange: e.onChangeHandler,
                        rows: e.rows || 15,
                        maxLength: e.maxLength
                    })), M.createElement(ae._35, {
                        background: ae.n.Base,
                        border: !0,
                        margin: {
                            bottom: 2
                        }
                    }, M.createElement(ae._35, {
                        borderBottom: !0
                    }, M.createElement(ae._8, {
                        padding: 1
                    }, M.createElement(ae.Q, {
                        transform: ae._48.Uppercase,
                        type: ae._49.H5
                    }, e.title))), M.createElement(ae._8, {
                        padding: 1
                    }, t))
                }, t.prototype.renderSummary = function() {
                    return this.props.isHeaderEditEnabled ? this.renderDetailsPanel({
                        title: Object(Qn.d)("Summary", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.summary,
                        onChangeHandler: this.onSummaryChange,
                        rows: 5,
                        maxLength: 160
                    }) : null
                }, t.prototype.renderSaveButton = function() {
                    return M.createElement(ae._8, {
                        margin: {
                            top: 1
                        },
                        textAlign: ae._45.Right
                    }, M.createElement(ae.v, {
                        state: this.state.buttonState,
                        onClick: this.onSaveClick,
                        disabled: !this.state.description || !this.state.rules || !this.state.summary,
                        "data-test-selector": "save-button"
                    }, Object(Qn.d)("Save", "DirectoryCommunityDetailsContent")))
                }, t.prototype.renderPlaceholder = function() {
                    return M.createElement(ae._8, null, M.createElement(ae._35, {
                        background: ae.n.Base,
                        border: !0
                    }, M.createElement(ae._35, {
                        borderBottom: !0
                    }, M.createElement(ae._8, {
                        padding: 1
                    }, M.createElement(ae._14, {
                        lineCount: 6
                    })))))
                }, t = i.__decorate([Object(W.a)(zn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.communityName
                            }
                        }
                    }
                }), Object(W.a)(Kn, {
                    name: "editCommunity"
                }), Object(X.d)("DirectoryCommunityDetailsComponent", {
                    autoReportInteractive: !0
                })], t)
            }(M.Component);
        var Yn = Object(U.b)(function(e) {
                return {
                    isHeaderEditEnabled: jt(e)
                }
            }, function(e) {
                return Object(te.b)({
                    onDisableDirectoryHeaderEdit: xt
                }, e)
            })($n),
            Jn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        directoryType: ee(t.match.path)
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), a.o.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    return M.createElement(ae._8, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, M.createElement(Yn, {
                        communityName: decodeURIComponent(this.props.match.params.encodedCommunityName)
                    }))
                }, t = i.__decorate([Object(X.d)("DirectoryCommunityDetailsPage", {
                    destination: z.a.DirectoryCommunityDetails
                })], t)
            }(M.Component),
            Xn = n("QAcM"),
            Zn = n("5bwi"),
            ei = n("WNmM"),
            ti = n("TLUY"),
            ni = function(e) {
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
                    if (this.props.data.loading && !this.props.data.game) return M.createElement(ae._10, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return M.createElement(G.a, {
                        message: Object(Qn.d)("Error loading data.", "DirectoryGameClipsContent")
                    });
                    if (this.props.data.game) {
                        var e = Xn.a[this.props.timeFilterValue];
                        return M.createElement(ae._8, {
                            padding: {
                                top: 2,
                                bottom: 3,
                                x: 3
                            }
                        }, M.createElement(Zn.a, {
                            clips: this.props.data.game.clips.edges.map(function(e) {
                                return e.node
                            }),
                            pageType: ei.b.Game,
                            timeFilterValue: this.props.timeFilterValue,
                            updateTimeFilter: this.props.updateTimeFilter,
                            loadMoreClips: this.loadMoreTopClips,
                            isLoading: !1
                        }), M.createElement(ne.a, {
                            enabled: this.canLoadMore(),
                            key: e,
                            loadMore: this.props.loadMore
                        }))
                    }
                    return M.createElement(G.a, {
                        message: Object(Qn.d)("Game does not exist", "DirectoryGameClipsContent")
                    })
                }, t = i.__decorate([Object(X.d)("DirectoryGameClipsContent", {
                    autoReportInteractive: !0
                }), Object(W.a)(ti, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: e.gameName,
                                limit: 20,
                                criteria: {
                                    languages: e.languagePreferences,
                                    filter: Xn.a[e.timeFilterValue]
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: ti,
                                    variables: i.__assign({}, e.data.variables, {
                                        cursor: e.data.game.clips.edges[e.data.game.clips.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            game: i.__assign({}, n.game, {
                                                clips: i.__assign({}, n.game.clips, {
                                                    edges: Object(Q.c)(e.game.clips.edges, n.game.clips.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                })], t)
            }(M.Component);
        var ii = Object(U.b)(function(e) {
                return {
                    languagePreferences: Object(V.a)(e)
                }
            })(ni),
            ai = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateTimeFilter = function(e) {
                        n.setState({
                            timeFilterValue: e
                        })
                    }, n.state = {
                        directoryType: ee(t.match.path),
                        timeFilterValue: Xn.b.Day
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), a.o.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    return M.createElement(ii, {
                        gameName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        updateTimeFilter: this.updateTimeFilter,
                        timeFilterValue: this.state.timeFilterValue
                    })
                }, t = i.__decorate([Object(X.d)("DirectoryGameClipsPage", {
                    destination: z.a.DirectoryGameClips
                }), Object(q.a)({
                    location: $.PageviewLocation.ClipsGame
                })], t)
            }(M.Component),
            ri = n("OAwv"),
            oi = n("68hr"),
            si = n("oAfo"),
            li = n("4Tv+"),
            di = n("J5Bm"),
            ci = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        var e = t.props && t.props.referrer;
                        Object(li.a)(t.props.content.info, e, t.props.game, $.PageviewLocation.GameDetail, t.onPopupClose)
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
                    return M.createElement(ae.L, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 6
                        }
                    }, M.createElement(ae._8, {
                        margin: {
                            bottom: 3
                        }
                    }, M.createElement(ae.Y, {
                        gutterSize: ae.Z.Default
                    }, M.createElement(ae.L, {
                        cols: 4
                    }, M.createElement(ae.k, {
                        ratio: ae.l.Aspect1x1
                    }, M.createElement("img", {
                        src: r
                    }))), M.createElement(ae.L, {
                        cols: 8
                    }, M.createElement(ae.Q, {
                        type: ae._49.P,
                        fontSize: ae.V.Size4,
                        title: o
                    }, o), M.createElement(ae.Q, {
                        type: ae._49.P,
                        color: ae.K.Alt2,
                        title: s
                    }, s), M.createElement(ae._8, {
                        display: ae.R.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: ae.U.NoWrap,
                        padding: {
                            bottom: 1,
                            top: 2
                        }
                    }, M.createElement(di.a, {
                        onClickBuyNow: this.onBuyInGameContentNow,
                        options: l
                    })), M.createElement(ae._58, null, M.createElement(Wn, {
                        source: a || t
                    }))))))
                }, t
            }(M.Component),
            ui = Object(X.d)("FeaturedContent")(ci),
            mi = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.alt ? ae.n.Alt : ae.n.Base;
                    return M.createElement(ae._35, {
                        background: e,
                        border: !0,
                        padding: {
                            left: 3,
                            right: 3
                        }
                    }, this.props.children)
                }, t
            }(M.Component),
            pi = Object(X.d)("GameDetailsSection")(mi),
            gi = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return M.createElement(ae._8, {
                        margin: {
                            bottom: 1
                        }
                    }, M.createElement(ae.Q, {
                        type: ae._49.H3
                    }, this.props.title))
                }, t
            }(M.Component),
            hi = Object(X.d)("GameDetailsTitle")(gi),
            vi = function(e) {
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
                        return M.createElement(ui, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            refetchData: e.props.refetchData,
                            key: n,
                            referrer: e.props.referrer
                        })
                    });
                    return M.createElement(pi, {
                        alt: !0
                    }, M.createElement(hi, {
                        title: Object(a.d)("Game Add-Ons", "FeaturedContentRow")
                    }), M.createElement(ae.Y, {
                        gutterSize: ae.Z.Large
                    }, n))
                }, t
            }(M.Component),
            fi = Object(X.d)("FeaturedContentRow")(vi),
            ki = n("aFoJ"),
            yi = (n("nAt9"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSeparator = function() {
                        return M.createElement(ae._35, {
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
                        n && Object(li.a)(n, e, t.props.game, $.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onClaimPrimeOffer = function(e) {
                        t.props.claimPrimeOffer && t.props.claimPrimeOffer(Object(Q.a)({
                            offerID: e
                        })).then(function(e) {
                            t.props.refetchData && t.props.refetchData()
                        })
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t.renderNewWindowLink = function(e) {
                        return M.createElement("a", {
                            href: e.href,
                            target: "_blank"
                        }, e.children)
                    }, t.renderSharedRevenueLink = function(e) {
                        return M.createElement("a", {
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
                    if (!e || !t) return M.createElement(pi, {
                        alt: !0
                    }, M.createElement(ae._35, {
                        className: "game-details-box",
                        padding: {
                            top: 2,
                            right: 1,
                            bottom: 2,
                            left: 1
                        },
                        flexDirection: ae.T.Row,
                        display: ae.R.Flex,
                        justifyContent: ae._7.Between,
                        alignItems: ae.c.Center
                    }, M.createElement(ae._8, {
                        display: ae.R.Flex,
                        flexDirection: ae.T.Row,
                        alignItems: ae.c.Center
                    }, M.createElement(ae._8, null, M.createElement(ae._14, {
                        width: 175,
                        height: 36
                    })), this.renderSeparator(), M.createElement(ae._8, null, M.createElement(ae._14, {
                        width: 22,
                        height: 30
                    })), M.createElement(ae._8, null, M.createElement(ae._14, {
                        width: 50,
                        height: 15
                    }))), M.createElement(ae._8, null, M.createElement(ae._14, {
                        width: 290,
                        height: 20
                    }))));
                    var n = this.props.countryCode,
                        i = !(!this.props.currentUser || !this.props.currentUser.hasPrime),
                        r = {
                            info: t.info,
                            crates: t.info.crateASINs,
                            size: ae.z.Large,
                            externalAcquisition: t.acquisition,
                            countryCode: n,
                            userHasPrime: i
                        },
                        o = t.supportedPlatforms.map(function(e) {
                            return M.createElement("img", {
                                "data-test-selector": "game-details-box-platform-" + e.name,
                                alt: e.name,
                                src: e.iconURL,
                                key: "platform:" + e.name
                            })
                        }),
                        s = null;
                    if (this.props.referrer && this.props.referrer.settings.isCommerceRevShareEnabled) {
                        var l = Object(a.d)("Purchase revenue <x:link>will be shared</x:link> with {channel}", {
                            channel: M.createElement(ae.Q, {
                                bold: !0,
                                type: ae._49.Span
                            }, this.props.referrer.displayName),
                            "x:link": this.renderSharedRevenueLink
                        }, "GameDetailsBox");
                        s = M.createElement(ae.Q, {
                            "data-test-selector": "fuel-shared-revenue"
                        }, l)
                    }
                    return M.createElement(pi, {
                        alt: !0
                    }, M.createElement(ae._35, {
                        className: "game-details-box",
                        padding: {
                            top: 2,
                            right: 1,
                            bottom: 2,
                            left: 1
                        },
                        flexDirection: ae.T.Row,
                        display: ae.R.Flex,
                        justifyContent: ae._7.Between,
                        alignItems: ae.c.Center
                    }, M.createElement(ae._8, {
                        display: ae.R.Flex,
                        flexDirection: ae.T.Row,
                        alignItems: ae.c.Center
                    }, M.createElement(di.a, {
                        onClickBuyNow: this.onBuyNowClick,
                        onClickClaimPrimeOffer: this.onClaimPrimeOffer,
                        options: r,
                        "data-test-selector": "game-details-box-fuel-buy-button"
                    }), this.renderSeparator(), M.createElement("img", {
                        alt: Object(a.d)("Maturity Rating", "GameDetailsBox"),
                        src: t.esrbRating.iconURL,
                        "data-test-selector": "game-details-box-rating",
                        className: "game-details-box__rating"
                    }), o, M.createElement(Wn, {
                        "data-test-selector": "game-details-box-launch-platform",
                        source: t.launchPlatform.description,
                        renderers: {
                            Link: this.renderNewWindowLink
                        }
                    })), s))
                }, t
            }(M.Component)),
            bi = Object(X.d)("GameDetailBox")(yi),
            _i = Object(W.a)(ki, {
                name: "claimPrimeOffer"
            })(bi),
            Si = function(e) {
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
                            return M.createElement("li", {
                                key: t
                            }, M.createElement(Wn, {
                                source: e
                            }))
                        }),
                        l = i.map(function(e, t) {
                            return [M.createElement(ae.L, {
                                key: t + "lang",
                                cols: 3
                            }, M.createElement(ae._8, null, e.language)), M.createElement(ae.L, {
                                key: t + "audio",
                                cols: 3
                            }, M.createElement(ae._35, {
                                textAlign: ae._45.Center
                            }, e.hasAudio && M.createElement(ae._24, {
                                asset: ae._25.Check,
                                type: ae._26.Success
                            }))), M.createElement(ae.L, {
                                key: t + "int",
                                cols: 3
                            }, M.createElement(ae._35, {
                                textAlign: ae._45.Center
                            }, e.hasInterface && M.createElement(ae._24, {
                                asset: ae._25.Check,
                                type: ae._26.Success
                            }))), M.createElement(ae.L, {
                                key: t + "subs",
                                cols: 3
                            }, M.createElement(ae._35, {
                                textAlign: ae._45.Center
                            }, e.hasSubtitles && M.createElement(ae._24, {
                                asset: ae._25.Check,
                                type: ae._26.Success
                            }))), M.createElement(ae.L, {
                                key: t + "hr",
                                cols: 12
                            }, M.createElement(ae._35, {
                                margin: {
                                    top: .5,
                                    bottom: .5
                                },
                                borderBottom: !0,
                                alignContent: ae.b.Stretch
                            }))]
                        }),
                        d = this.renderSystemRequirements(r),
                        c = this.renderSystemRequirements(o);
                    return M.createElement(pi, null, M.createElement(ae.Y, {
                        gutterSize: ae.Z.Large
                    }, M.createElement(ae.L, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, M.createElement(ae._8, {
                        margin: {
                            top: 4
                        }
                    }, M.createElement(hi, {
                        title: Object(a.d)("Description", "DirectoryGameDetailsPage")
                    }), M.createElement(ae._58, null, M.createElement(Wn, {
                        source: t.description
                    }))), M.createElement(ae._8, {
                        margin: {
                            top: 4
                        }
                    }, M.createElement(hi, {
                        title: Object(a.d)("Features", "DirectoryGameDetailsPage")
                    }), M.createElement(ae._58, null, M.createElement("ul", null, s))), M.createElement(ae._35, {
                        margin: {
                            top: 4
                        },
                        fontSize: ae.V.Size6
                    }, M.createElement(hi, {
                        title: Object(a.d)("Information", "DirectoryGameDetailsPage")
                    }), this.renderRow(Object(a.d)("Title: ", "DirectoryGameDetailsPage"), t.title), this.renderRow(Object(a.d)("Developer: ", "DirectoryGameDetailsPage"), e.developer), this.renderRow(Object(a.d)("Publisher: ", "DirectoryGameDetailsPage"), e.publisher), this.renderRowLink(Object(a.d)("More Info: ", "DirectoryGameDetailsPage"), Object(a.d)("Website", "DirectoryGameDetailsPage"), e.websiteURL), e.eulaURL && this.renderRowLink(Object(a.d)("License Agreement: ", "DirectoryGameDetailsPage"), Object(a.d)("Check out the EULA", "DirectoryGameDetailsPage"), e.eulaURL), this.renderRowLink(Object(a.d)("Need Help? ", "DirectoryGameDetailsPage"), Object(a.d)("Contact Support", "DirectoryGameDetailsPage"), e.supportURL))), M.createElement(ae.L, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, M.createElement(ae._8, {
                        margin: {
                            top: 4
                        }
                    }, M.createElement(hi, {
                        title: Object(a.d)("Hardware Requirements", "DirectoryGameDetailsPage")
                    }), M.createElement(ae._8, {
                        padding: {
                            bottom: 1
                        }
                    }, M.createElement(ae.Q, {
                        type: ae._49.H4,
                        bold: !0
                    }, Object(a.d)("Minimum", "DirectoryGameDetailsPage"))), d, M.createElement(ae._8, {
                        padding: {
                            top: 1,
                            bottom: 1
                        }
                    }, M.createElement(ae.Q, {
                        type: ae._49.H4,
                        bold: !0
                    }, Object(a.d)("Recommended", "DirectoryGameDetailsPage"))), c), M.createElement(ae._8, {
                        margin: {
                            top: 4
                        }
                    }, M.createElement(hi, {
                        title: Object(a.d)("Language Support", "DirectoryGameDetailsPage")
                    }), M.createElement(ae.Y, null, M.createElement(ae.L, {
                        cols: 3
                    }, M.createElement(ae._35, {
                        color: ae.K.Alt2
                    }, Object(a.d)("Language", "DirectoryGameDetailsPage"))), M.createElement(ae.L, {
                        cols: 3
                    }, M.createElement(ae._35, {
                        color: ae.K.Alt2,
                        textAlign: ae._45.Center
                    }, Object(a.d)("Audio", "DirectoryGameDetailsPage"))), M.createElement(ae.L, {
                        cols: 3
                    }, M.createElement(ae._35, {
                        color: ae.K.Alt2,
                        textAlign: ae._45.Center
                    }, Object(a.d)("Interface", "DirectoryGameDetailsPage"))), M.createElement(ae.L, {
                        cols: 3
                    }, M.createElement(ae._35, {
                        color: ae.K.Alt2,
                        textAlign: ae._45.Center
                    }, Object(a.d)("Subtitles", "DirectoryGameDetailsPage"))), M.createElement(ae.L, {
                        cols: 12
                    }, M.createElement(ae._35, {
                        borderBottom: !0,
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    })), l)))))
                }, t.prototype.renderSystemRequirements = function(e) {
                    return M.createElement(ae._8, null, this.renderRow(Object(a.d)("OS:", "DirectoryGameDetailsPage"), e.osVersion), this.renderRow(Object(a.d)("Processor:", "DirectoryGameDetailsPage"), e.processor), this.renderRow(Object(a.d)("Memory:", "DirectoryGameDetailsPage"), e.ram), this.renderRow(Object(a.d)("Graphics Card:", "DirectoryGameDetailsPage"), e.videoCard), this.renderRow(Object(a.d)("DirectX:", "DirectoryGameDetailsPage"), e.directXVersion), this.renderRow(Object(a.d)("Hard Drive Space:", "DirectoryGameDetailsPage"), e.hardDriveSpace), this.renderRow(Object(a.d)("Other:", "DirectoryGameDetailsPage"), e.other))
                }, t.prototype.renderRow = function(e, t) {
                    return t ? M.createElement(ae._8, {
                        display: ae.R.Flex,
                        flexDirection: ae.T.Row,
                        flexWrap: ae.U.NoWrap
                    }, M.createElement(ae._35, {
                        color: ae.K.Alt2,
                        padding: {
                            right: 1
                        },
                        display: ae.R.Flex,
                        flexShrink: 0
                    }, e), M.createElement(ae._8, {
                        display: ae.R.Flex,
                        flexGrow: 1
                    }, t)) : null
                }, t.prototype.renderRowLink = function(e, t, n) {
                    return this.renderRow(e, M.createElement("a", {
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, t))
                }, t
            }(M.Component),
            Ci = Object(X.d)("GameInfoSection")(Si),
            Ei = n("S/9j"),
            Ni = n("4mYF"),
            wi = n("fc0G"),
            Oi = Object(X.d)("VideoEmbed", {
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
                return M.createElement(Ni.a, {
                    createdAt: r,
                    lengthSeconds: a,
                    type: Ni.b.Video,
                    thumbnailURL: o,
                    viewCount: s
                }, M.createElement(wi.c, i.__assign({}, l)))
            }),
            Ti = n("KqsW"),
            Di = (n("OOh8"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderItems = function() {
                        if (!t.props.videos && !t.props.thumbnailURLs) return [0, 1, 2, 3].map(function(e) {
                            return M.createElement(ae._8, {
                                key: "placeholder-" + e,
                                padding: {
                                    right: 2
                                }
                            }, M.createElement(ae._14, {
                                width: 460,
                                height: 260
                            }))
                        });
                        var e = (t.props.videos || []).map(function(e) {
                                return M.createElement(ae._8, {
                                    className: "game-media__video",
                                    padding: {
                                        right: 2
                                    },
                                    key: e.id
                                }, M.createElement(Oi, {
                                    video: e
                                }))
                            }),
                            n = (t.props.thumbnailURLs || []).map(function(e, n) {
                                return M.createElement(ae._8, {
                                    className: "game-media__image",
                                    padding: {
                                        right: 2
                                    },
                                    key: e
                                }, M.createElement(ae._6, {
                                    onClick: t.handleOpenModal,
                                    "data-full": t.props.screenshotURLs[n],
                                    ariaLabel: Object(a.d)("Screenshot", "DirectoryGameDetailsGameMedia")
                                }, M.createElement(ae.k, {
                                    ratio: ae.l.Aspect16x9
                                }, M.createElement("img", {
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
                    return M.createElement(pi, null, M.createElement(hi, {
                        title: Object(a.d)("Videos and Screenshots", "DirectoryGameDetailsPage")
                    }), M.createElement(ae._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, M.createElement(Ti.a, {
                        items: this.renderItems()
                    })))
                }, t = i.__decorate([Object(X.d)("GameMedia")], t)
            }(M.Component));
        var Li = Object(U.b)(function() {
                return {}
            }, function(e) {
                return Object(te.b)({
                    showImageViewerModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(Ut.d)(Ei.a, t)
                    }
                }, e)
            })(Di),
            Fi = (n("UJ+F"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        var e = t.props && t.props.referrer;
                        Object(li.a)(t.props.content.info, e, t.props.game, $.PageviewLocation.GameDetail, t.onPopupClose)
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
                        u = M.createElement(di.a, {
                            onClickBuyNow: this.onBuyInGameContentNow,
                            options: c
                        });
                    if (r.length > 1) {
                        var m = Object(a.d)("{numCrates} Twitch Crates", {
                            numCrates: r.length
                        }, "InGameContentCrateReward");
                        e = M.createElement(ae._35, {
                            className: "in-game-content__crates",
                            attachBottom: !0,
                            padding: {
                                left: 1,
                                right: 1
                            },
                            position: ae._15.Absolute,
                            textAlign: ae._45.Right
                        }, m)
                    }
                    return M.createElement(ae._8, {
                        margin: {
                            bottom: 3
                        }
                    }, M.createElement(ae._35, {
                        className: "in-game-content",
                        border: !0,
                        fullHeight: !0,
                        position: ae._15.Relative
                    }, M.createElement(ae.k, {
                        ratio: ae.l.Aspect1x1
                    }, M.createElement("img", {
                        src: o
                    })), M.createElement(ae._35, {
                        background: ae.n.Base,
                        padding: 1
                    }, M.createElement(ae._8, {
                        className: "in-game-content__info-header"
                    }, M.createElement(ae.Q, {
                        type: ae._49.P,
                        fontSize: ae.V.Size5,
                        bold: !0,
                        title: l
                    }, l), M.createElement(ae.Q, {
                        type: ae._49.P,
                        color: ae.K.Alt2,
                        title: d
                    }, d)), M.createElement(ae._8, {
                        className: "in-game-content__price",
                        position: ae._15.Relative
                    }, M.createElement("p", {
                        title: s
                    }, s), e), M.createElement(ae._8, {
                        className: "in-game-content__buy-button",
                        position: ae._15.Absolute,
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
            }(M.Component)),
            Ii = Object(X.d)("InGameContent")(Fi),
            Ri = function(e) {
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
                        return M.createElement(Ii, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            refetchData: e.props.refetchData,
                            key: n,
                            referrer: e.props.referrer
                        })
                    });
                    return M.createElement(pi, {
                        alt: !0
                    }, M.createElement(hi, {
                        title: Object(a.d)("In-Game Content", "FeaturedContentRow")
                    }), M.createElement(ae._55, {
                        childWidth: ae._56.Medium,
                        gutterSize: ae._57.Small,
                        noGrow: !0
                    }, n))
                }, t
            }(M.Component),
            Pi = Object(X.d)("InGameContentRow")(Ri),
            Ai = n("FEHb"),
            xi = n("xCTX"),
            ji = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        sortedInGameContent: []
                    }, t.refetchData = function() {
                        t.props.data && t.props.data.refetch && t.props.data.refetch()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), a.o.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data && e.data.game,
                        n = t && t.product;
                    if (n) {
                        var i = n.inGameContent.slice().sort(si.a);
                        this.setState({
                            sortedInGameContent: i
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.props.data.loading) {
                        if (this.props.data.error) return M.createElement(G.a, {
                            message: Object(a.d)("Error loading data.", "DirectoryGameDetailsPage")
                        });
                        if (!this.props.data.game || !this.props.data.game.product || !this.props.data.game.product.id) return M.createElement(oi.a, null)
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
                    }), M.createElement(ae._8, null, M.createElement(_i, {
                        game: this.props.data.game,
                        referrer: l,
                        countryCode: d,
                        currentUser: this.props.data.currentUser,
                        refetchData: this.refetchData
                    }), M.createElement(Li, {
                        screenshotURLs: e,
                        thumbnailURLs: t,
                        videos: n
                    }), M.createElement(fi, {
                        contentList: c,
                        countryCode: d,
                        game: o,
                        hasPrime: s,
                        refetchData: this.refetchData,
                        referrer: l
                    }), M.createElement(Pi, {
                        contentList: u,
                        countryCode: d,
                        game: o,
                        hasPrime: s,
                        refetchData: this.refetchData,
                        referrer: l
                    }), M.createElement(Ci, {
                        game: this.props.data.game
                    }))
                }, t = i.__decorate([Object(W.a)(xi, {
                    options: function(e) {
                        return {
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName)
                            }
                        }
                    }
                }), Object(W.a)(Ai, {
                    name: "referrerData",
                    skip: function(e) {
                        var t = ri.parse(e.location.search),
                            n = t.br_name,
                            i = t.br_id;
                        return !(n || i)
                    },
                    options: function(e) {
                        var t = ri.parse(e.location.search),
                            n = t.br_name,
                            i = t.br_id;
                        return {
                            variables: {
                                login: n || null,
                                id: i || null
                            }
                        }
                    }
                }), Object(X.d)("DirectoryGameDetailsPage", {
                    destination: z.a.DirectoryGameDetails
                }), Object(q.a)({
                    location: $.PageviewLocation.GameDetail
                })], t)
            }(M.Component),
            Mi = n("vKFS"),
            Ui = n("JpYe"),
            Vi = n("n2E0"),
            Bi = n("VDV3"),
            Gi = n("3yQz"),
            Hi = n("JtGN"),
            Wi = Gi.b,
            qi = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onVideoSortChange = function(e) {
                        Object(Ui.e)("/directory/game/" + n.props.match.params.encodedCommunityName + "/videos", n.props, void 0, e)
                    }, n.onVideoFilterChange = function(e) {
                        Object(Ui.e)("/directory/game/" + n.props.match.params.encodedCommunityName + "/videos", n.props, e)
                    }, n.state = {
                        directoryType: ee(t.match.path)
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), a.o.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    var e = null,
                        t = decodeURIComponent(this.props.match.params.encodedCommunityName),
                        n = Object(Ui.d)(this.props) || Wi,
                        i = Object(Ui.c)(this.props);
                    if (this.props.data.error) {
                        var r = Object(a.d)("{gameName} videos are temporarily unavailable.", {
                            gameName: t
                        }, "DirectoryVideosPage");
                        return M.createElement(G.a, {
                            message: r
                        })
                    }
                    if (!this.props.data.loading && null === this.props.data.game) {
                        r = Object(a.d)("{gameName} does not exist.", {
                            gameName: t
                        }, "DirectoryVideosPage");
                        return M.createElement(G.a, {
                            message: r
                        })
                    }
                    return this.props.data.game && this.props.data.game.videos && (e = this.props.data.game.videos.edges.map(function(e) {
                        return e.node
                    })), M.createElement(ae._8, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, M.createElement(Bi.a, {
                        onVideoSortChange: this.onVideoSortChange,
                        onVideoFilterChange: this.onVideoFilterChange,
                        selectedSort: n,
                        broadcastType: i
                    }), M.createElement(Bi.c, {
                        hideGameArt: !0,
                        trackingContent: Object(Vi.a)(n),
                        trackingMedium: $.PageviewMedium.GameVideos,
                        videos: e,
                        listContext: Mi.b.SingleGameList
                    }), M.createElement(ne.a, {
                        enabled: this.enablePagination(),
                        key: "directory-game-videos-page-" + i + "-" + n,
                        loadMore: this.props.loadMore
                    }))
                }, t.prototype.enablePagination = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.game && this.props.data.game.videos && !!this.props.data.game.videos.pageInfo.hasNextPage
                }, t = i.__decorate([Object(W.a)(Hi, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                gameName: decodeURIComponent(e.match.params.encodedCommunityName),
                                videoLimit: 30,
                                languages: e.languagePreferences,
                                broadcastTypes: e.match.params.filter && "all" !== e.match.params.filter ? [e.match.params.filter] : void 0,
                                videoSort: Object(Ui.d)(e) || Gi.b
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: Hi,
                                    variables: i.__assign({}, e.data.variables, {
                                        followedCursor: e.data.game && e.data.game.videos.edges.length > 0 ? e.data.game.videos.edges[e.data.game.videos.edges.length - 1].cursor : void 0
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            game: i.__assign({}, n.game, {
                                                videos: i.__assign({}, n.game.videos, {
                                                    edges: Object(Q.c)(e.game.videos.edges, n.game.videos.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(X.d)("DirectoryGameVideosPage", {
                    destination: z.a.DirectoryGameVideos
                }), Object(q.a)({
                    location: $.PageviewLocation.Directory,
                    properties: function(e) {
                        return {
                            content_type: $.PageviewDirectoryContentType.Videos,
                            game: decodeURIComponent(e.match.params.encodedCommunityName)
                        }
                    }
                })], t)
            }(M.Component);
        var Qi, zi = Object(U.b)(function(e) {
            return {
                languagePreferences: Object(V.a)(e)
            }
        })(qi);
        ! function(e) {
            e.CLIPS = "clips-scroller", e.DEFAULT = "directory-root-scroller", e.GAME = "game-scroller"
        }(Qi || (Qi = {}));
        var Ki = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.render = function() {
                var e = this.props.match.path.startsWith("/communities") ? Z.a.Communities : Z.a.Games;
                return M.createElement(ae._8, {
                    "data-a-target": this.getScrollerName()
                }, M.createElement(Hn.b, {
                    suppressScrollX: !0,
                    addPaddingWhenPlayerIsPersisting: !0
                }), M.createElement(Gn, {
                    directoryType: e,
                    directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                    activeTab: this.getActiveTab()
                }), M.createElement(It.e, null, M.createElement(It.c, {
                    path: "/communities/:encodedCommunityName/details",
                    component: Jn
                }), M.createElement(It.c, {
                    path: "/communities/:encodedCommunityName/:encodedLanguage",
                    component: Ft
                }), M.createElement(It.c, {
                    path: "/communities/:encodedCommunityName",
                    component: Ft
                }), M.createElement(It.c, {
                    path: "/directory/game/:encodedCommunityName/clips",
                    component: ai
                }), M.createElement(It.c, {
                    path: "/directory/game/:encodedCommunityName/details",
                    component: ji
                }), M.createElement(It.c, {
                    path: "/directory/game/:encodedCommunityName/videos/:filter",
                    component: zi
                }), M.createElement(It.c, {
                    path: "/directory/game/:encodedCommunityName/:encodedLanguage",
                    component: Ft
                }), M.createElement(It.c, {
                    path: "/directory/game/:encodedCommunityName",
                    component: Ft
                })))
            }, t.prototype.getActiveTab = function() {
                var e = void 0;
                return this.isClipsPage() ? e = jn.DirectoryClipsPage : this.isDetailsPage() ? e = jn.DirectoryDetailsPage : this.isVideosPage() ? e = jn.DirectoryVideosPage : this.isMainPage() && (e = jn.DirectoryPage), e
            }, t.prototype.getScrollerName = function() {
                var e = Qi.DEFAULT;
                return this.isClipsPage() ? e = Qi.CLIPS : this.isMainPage() && (e = Qi.GAME), e
            }, t.prototype.isMainPage = function() {
                return "/communities/:encodedCommunityName" === this.props.match.path || "/directory/game/:encodedCommunityName" === this.props.match.path
            }, t.prototype.isClipsPage = function() {
                return "/directory/game/:encodedCommunityName/clips" === this.props.match.path
            }, t.prototype.isDetailsPage = function() {
                return "/communities/:encodedCommunityName/details" === this.props.match.path || "/directory/game/:encodedCommunityName/details" === this.props.match.path
            }, t.prototype.isVideosPage = function() {
                return "/directory/game/:encodedCommunityName/videos/:filter" === this.props.match.path
            }, t
        }(M.Component);
        n.d(t, "DirectoryGamePage", function() {
            return Ft
        }), n.d(t, "DirectoryRootPage", function() {
            return Ki
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
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
        }(i || (i = {}));
        var u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.props.type === i.Download ? r.createElement("a", a.__assign({
                        href: n.props.url,
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(d._63)(n.props), {
                        download: n.props.text
                    }), n.renderIcon()) : n.isLink() ? r.createElement("a", a.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(d._63)(n.props)), n.renderIcon()) : r.createElement("button", a.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(d._63)(n.props)), n.renderIcon())
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
                    var e = n.getAssetFromType(),
                        t = n.getAssetSizeFromType();
                    return r.createElement(d._8, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                        display: d.R.Flex,
                        justifyContent: d._7.Center,
                        alignItems: d.c.Center
                    }, r.createElement(d._24, {
                        asset: e,
                        width: t,
                        height: t
                    }))
                }, n.isLink = function() {
                    return n.props.type !== i.Copy
                }, n.getAssetSizeFromType = function() {
                    switch (n.props.type) {
                        case i.Download:
                            return 20;
                        default:
                            return 30
                    }
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
                        case i.Download:
                            return Object(o.d)("Download", "SocialButton");
                        case i.Copy:
                            return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return d._25.Twitter;
                        case i.Facebook:
                            return d._25.Facebook;
                        case i.VKontakte:
                            return d._25.VKontakte;
                        case i.Reddit:
                            return d._25.Reddit;
                        case i.Download:
                            return d._25.Download;
                        case i.Copy:
                        default:
                            return d._25.Copy
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
                        case i.Download:
                            return e + "--download";
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
                return r.createElement(d._8, {
                    className: "social-button"
                }, r.createElement(d._52, {
                    label: this.getTooltipFromType(),
                    direction: d._54.Bottom
                }, this.renderLink()))
            }, t
        }(r.Component)
    },
    "9SRT": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Events_UnfollowEvent"
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
                                value: "UnfollowEventInput"
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
                            value: "unfollowEvent"
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
                                    value: "event"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "EventCollection"
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
                                                            value: "isFollowing"
                                                        },
                                                        arguments: [],
                                                        directives: []
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
                                                value: "EventLeaf"
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
                                                            value: "isFollowing"
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
                end: 199
            }
        };
        n.loc.source = {
            body: "mutation Events_UnfollowEvent($input: UnfollowEventInput!) {\nunfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    AHWf: function(e, t) {},
    AadB: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("O27J"),
            o = n("6sO2"),
            s = n("iOr9"),
            l = n("+GT7"),
            d = n("vKFS"),
            c = n("6BvN"),
            u = n("SZoP"),
            m = n("NY9D"),
            p = n("vH/s"),
            g = n("HW6M"),
            h = n("Odds"),
            v = (n("ehrk"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = g("live-channel-preview-card", {
                        "live-channel-preview-card--loading": !this.props.streamLoaded
                    });
                    return a.createElement("div", i.__assign({
                        className: e,
                        "data-test-selector": "live-channel-preview-card"
                    }, Object(h._63)(this.props)), a.createElement(l.a, i.__assign({}, this.props), a.createElement(h.k, {
                        ratio: h.l.Aspect16x9
                    }, this.props.videoPlayer)))
                }, t
            }(a.Component)),
            f = n("v5ho"),
            k = n("RH2O"),
            y = n("2KeS"),
            b = n("V5M+"),
            _ = n("jetF"),
            S = n("7vx8"),
            C = n("CSlQ"),
            E = n("/gww"),
            N = n("0w5y"),
            w = n("PO03"),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(E.a, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(N.a, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? a.createElement(_.a, null, a.createElement(h.w, {
                        ariaLabel: Object(o.d)("Moderation", "DirectoryGamePage"),
                        icon: h._25.ChatRiskFlag
                    }), a.createElement(h.q, {
                        direction: h.r.BottomRight,
                        size: h.s.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? a.createElement(h._6, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, a.createElement(h._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? a.createElement(h._6, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, a.createElement(h._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Timeout", "StreamFlag"))) : null
                }, t = i.__decorate([Object(S.a)(w, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.communityName
                            }
                        }
                    }
                }), Object(C.d)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component);
        var T = Object(k.b)(null, function(e) {
                return Object(y.b)({
                    onShowModal: b.d
                }, e)
            })(O),
            D = n("vKYI"),
            L = n("PLRK"),
            F = (n("GiGb"), "directory-first-item"),
            I = "directory-game__card_container",
            R = 5e3,
            P = 300,
            A = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderVariation = function() {
                        var e = n.props.streamNode,
                            t = n.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var r = {
                            context: n.props.directoryType === f.a.Games ? d.b.SingleGameList : d.b.MixedGameAndChannelList,
                            title: e.title || L.a,
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            onVideoTitleClick: n.onClick,
                            thumbnailImageProps: {
                                src: e.previewImageURL || o.a.defaultStreamPreviewURL,
                                alt: "" + e.broadcaster.login
                            },
                            onThumbnailClick: n.onClick,
                            channelLogin: e.broadcaster.login || "",
                            channelLoginLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            channelLoginOnClick: n.onClick,
                            channelImageProps: {
                                src: e.broadcaster.profileImageURL || "",
                                alt: "" + e.broadcaster.login
                            },
                            gameTitle: n.shouldShowGame("name"),
                            gameTitleLinkTo: n.getLinkTo(Object(m.c)(n.shouldShowGame("name")), t),
                            gameBoxArtImageProps: {
                                src: n.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                                alt: n.shouldShowGame("name")
                            },
                            playerMetadata: e.streamMetadata || void 0,
                            playerMetadataGame: e.streamMetadata ? n.props.directoryName : void 0,
                            streamType: e.type,
                            currentViewerCount: e.viewersCount || 0,
                            enableLivePreview: n.props.showPreview
                        };
                        return a.createElement("div", {
                            className: "stream-thumbnail",
                            ref: n.setRef,
                            "data-target": t ? "" : F,
                            style: {
                                order: t
                            }
                        }, a.createElement(h._8, {
                            className: "stream-thumbnail__card",
                            position: h._15.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": I
                        }, a.createElement(d.a, i.__assign({}, r, {
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        })), n.renderStreamFlag()))
                    }, n.renderFallback = function() {
                        var e = n.props.streamNode,
                            t = n.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var i = n.props.showPreview && n.state.hovered && n.state.loadingPreview && !n.state.streamLoaded && !n.state.previewTimedOut,
                            r = n.props.showPreview && n.state.hovered && (n.state.loadingPreview || n.state.streamLoaded) && !n.state.previewTimedOut;
                        return a.createElement("div", {
                            className: "stream-thumbnail",
                            ref: n.setRef,
                            "data-target": t ? "" : F,
                            onKeyDown: n.onKeyDown,
                            onMouseLeave: n.onMouseLeaveHandler,
                            style: {
                                order: t
                            }
                        }, a.createElement(h._8, {
                            className: "stream-thumbnail__card",
                            position: h._15.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": I
                        }, i && a.createElement(h._35, {
                            attachRight: !0,
                            attachTop: !0,
                            background: h.n.Overlay,
                            borderRadius: h.t.Small,
                            color: h.K.OverlayAlt,
                            margin: .5,
                            padding: .5,
                            position: h._15.Absolute,
                            zIndex: h._62.Above
                        }, a.createElement(h._10, {
                            fillContent: !0,
                            inheritColor: !0,
                            size: h._33.Small
                        })), !n.state.streamLoaded && a.createElement(l.a, {
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || L.a,
                            channelName: Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                            onClick: n.onClick,
                            gameImageSrc: n.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                            gameTitle: n.shouldShowGame("name"),
                            gameLinkTo: n.getLinkTo(Object(m.c)(n.shouldShowGame("name")), t),
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            channelNameLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            streamType: e.type,
                            streamMetadata: e.streamMetadata,
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        }), r && a.createElement(v, {
                            streamLoaded: n.state.streamLoaded,
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || L.a,
                            channelName: Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                            gameImageSrc: n.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                            gameTitle: n.shouldShowGame("name"),
                            gameLinkTo: n.getLinkTo(Object(m.c)(n.shouldShowGame("name")), t),
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            channelNameLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            streamType: e.type,
                            streamMetadata: e.streamMetadata,
                            videoPlayer: n.getVideoPlayer(),
                            hideTooltip: !0
                        }), n.renderStreamFlag()))
                    }, n.getLinkTo = function(e, t) {
                        var i = n.props.trackingContent ? n.props.trackingContent : p.PageviewContent.Live,
                            a = n.props.directoryType === f.a.Communities ? p.PageviewMedium.Community : p.PageviewMedium.Game;
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
                        return e.broadcaster ? n.props.directoryType === f.a.Communities && n.props.directoryName ? a.createElement(h._8, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: h._15.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, a.createElement(T, {
                            communityName: n.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, n.shouldShowGame = function(e) {
                        return n.props.directoryType !== f.a.Games && n.props.streamNode.game ? n.props.streamNode.game[e] : ""
                    }, n.onClick = function(e) {
                        n.props.onClick && n.props.onClick(e, n.props.streamNode.broadcaster && n.props.streamNode.broadcaster.id)
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
                            }, P)
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
                        n.state.focused && ((e.charCode || e.keyCode) === c.a.Tab && n.onMouseLeaveHandler())
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
                        }, R)
                    }, n.setRef = function(e) {
                        e && (n.thumbnailNode = r.findDOMNode(e), n.addThumbnailListener())
                    }, n.getVideoPlayer = function() {
                        var e = {
                            onPlayerPlaying: n.onStreamLoaded
                        };
                        if (n.props.showPreview && n.state.hovered && n.props.streamNode.broadcaster && n.props.streamNode.broadcaster.login) return a.createElement(D.a, i.__assign({
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
                    var e = {
                        assignments: {
                            fallback: this.renderFallback,
                            variation: this.renderVariation
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return a.createElement(s.a, i.__assign({}, e))
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return F
        }), n.d(t, !1, function() {
            return I
        }), n.d(t, "b", function() {
            return A
        })
    },
    Ajho: function(e, t) {},
    BJwU: function(e, t) {},
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
    EOpv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        });
        var i, a = n("6sO2");
        ! function(e) {
            e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
        }(i || (i = {}));
        var r = function(e) {
            switch (e) {
                case i.CSGOMap:
                    return Object(a.d)("Map", "CSGOMapFilter");
                case i.CSGOSkillGroup:
                    return Object(a.d)("Rank", "CSGORankFilter");
                case i.HearthstoneClass:
                    return Object(a.d)("Class", "HearthstoneClassFilter");
                case i.HearthstoneMode:
                    return Object(a.d)("Mode", "HearthstoneModeFilter");
                case i.LeagueChampion:
                    return Object(a.d)("Champion", "LeagueFilter");
                case i.OverwatchCharacter:
                    return Object(a.d)("Hero", "OverwatchFilter");
                default:
                    return ""
            }
        }
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
                                                                        value: "50"
                                                                    }
                                                                }],
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
                end: 457
            }
        };
        n.loc.source = {
            body: "query GamePage_Game($name: String! $type: DirectoryType! $limit: Int $languages: [String!] $cursor: Cursor) {\ndirectory(name: $name type: $type) {\nid\ndisplayName\nstreams(first: $limit after: $cursor languages: $languages) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nboxArtURL(width: 285 height: 380)\nname\n}\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
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
    IJO1: function(e, t) {},
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
            p = ((a = {})[c.a.Premiere] = u._25.VideoPremiere, a[c.a.Rerun] = u._25.VideoRerun, a[c.a.WatchParty] = u._25.VideoRerun, a),
            g = ((r = {})[c.a.Premiere] = u._26.Live, r[c.a.Rerun] = u._26.Inherit, r[c.a.WatchParty] = u._26.Inherit, r),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u._35, {
                        className: this.getClassNames(),
                        color: u.K.Overlay,
                        background: u.n.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.t.Small,
                        display: u.R.Flex
                    }, l.createElement(u._8, {
                        display: u.R.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(u.Q, {
                        type: u._49.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(u._35, {
                        borderRadius: u.t.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === c.a.Live ? l.createElement(u._8, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.R.Flex,
                        alignItems: u.c.Center
                    }, l.createElement(u.G, {
                        status: u.I.Live,
                        size: u.H.Small
                    })) : l.createElement(u._24, {
                        asset: p[this.props.type],
                        type: g[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case c.a.Live:
                            return Object(d.d)("LIVE", "StreamTypeIndicator");
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
            return h
        })
    },
    ISok: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("vKFS"),
            o = n("WxKK"),
            s = n("CSlQ"),
            l = n("81qH"),
            d = n("XYqD"),
            c = n("Odds"),
            u = function(e) {
                var t = [],
                    n = null;
                if (null === e.videos)
                    for (var s = void 0 === e.placeholderCount ? 20 : e.placeholderCount, u = 0; u < s; u++) t.push(a.createElement(d.a, {
                        key: u
                    }));
                else e.viewAllButtonProps && (n = a.createElement(o.a, i.__assign({}, e.viewAllButtonProps))), t = e.videos.map(function(t, n) {
                    return a.createElement(c._8, {
                        "data-a-target": "video-tower-card-" + n,
                        key: "video-" + n,
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(l.VideoPreviewCard, {
                        hideGameArt: e.hideGameArt,
                        context: e.listContext || r.b.MixedGameAndChannelList,
                        tracking: {
                            content: e.trackingContent,
                            content_index: n,
                            medium: e.trackingMedium
                        },
                        video: t
                    }))
                });
                return a.createElement(c._55, {
                    gutterSize: c._57.Small,
                    childWidth: e.videoCardSize || c._56.Large,
                    placeholderItems: 20
                }, t, n)
            },
            m = Object(s.d)("VideoTower", {
                autoReportInteractive: !0
            })(u);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return m
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
                        return a.createElement(l.Q, {
                            italic: !0,
                            "data-target": "fuel-buy-button-unavailable"
                        }, e)
                    }, t.renderBuyNowButton = function(e, n, i, r) {
                        void 0 === r && (r = l.z.Default);
                        var s = null;
                        if (n && n.length > 1) {
                            var d = Object(o.d)("Includes {crates} Twitch Crates!", {
                                crates: n.length
                            }, "FuelBuyButton");
                            s = a.createElement(l.Q, {
                                className: "fuel-buy-button__crates",
                                "data-target": "fuel-buy-button-crates"
                            }, d)
                        }
                        var c = i ? "fuel-buy-button-content" : "fuel-buy-button";
                        return a.createElement(l._8, {
                            alignItems: l.c.Center
                        }, a.createElement(l.v, {
                            fullWidth: !0,
                            icon: n && n.length > 0 ? l._25.Crate : void 0,
                            purchase: e,
                            onClick: t.props.onClickBuyNow,
                            "data-target": c,
                            size: r
                        }, Object(o.d)("Buy Now", "FuelBuyButton")), s)
                    }, t.renderPrimeTreatment = function(e, n) {
                        var i = [],
                            r = a.createElement(l._24, {
                                asset: l._25.Crown,
                                type: l._26.Prime,
                                width: 16,
                                height: 16,
                                key: "fuel-crown"
                            });
                        return i = e ? [r, a.createElement("div", {
                            className: "fuel-buy-button__prime-button",
                            key: "fuel-claim"
                        }, a.createElement(l.v, {
                            onClick: t.onClickClaimPrimeOffer
                        }, Object(o.d)("Claim Offer", "FuelBuyButton")))] : [r, a.createElement(l._8, {
                            padding: {
                                x: 1
                            },
                            key: "fuel-free-label"
                        }, a.createElement(l.Q, {
                            type: l._49.Strong
                        }, Object(o.d)("Free", "FuelBuyButton"))), a.createElement("div", {
                            className: "fuel-buy-button__prime-trial-button",
                            key: "fuel-trial"
                        }, a.createElement(l.v, {
                            linkTo: d,
                            targetBlank: !0,
                            "data-target": "fuel-buy-button-prime-trial"
                        }, Object(o.d)("Start Your Free Trial", "FuelBuyButton")))], a.createElement(l._8, {
                            flexDirection: l.T.Row,
                            display: l.R.Flex,
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
                        g = n && Object(s.a)(n),
                        h = !p || !g;
                    if (t.isEntitled) return a.createElement(l.Q, {
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
                    if (!t.isForSale && h) return this.renderUnavailableText();
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
    Kckb: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "variant1" === i.o.experiments.getAssignment("TWILIGHT_CLIPS_ON_THE_BRAIN")
        };
        var i = n("6sO2")
    },
    KqsW: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return g
        });
        var i, a = n("TToO"),
            r = n("HW6M"),
            o = (n.n(r), n("GiK3")),
            s = (n.n(o), n("6sO2")),
            l = n("CSlQ"),
            d = n("Odds"),
            c = n("M4d4"),
            u = (n.n(c), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(i || (i = {}));
        var m, p = ((m = {})[i.Previous] = d._25.AngleLeft, m[i.Next] = d._25.AngleRight, m),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentElementIndex: 0,
                        childrenRendered: !1,
                        windowWidth: window.innerWidth
                    }, t.onResize = function() {
                        t.setState({
                            windowWidth: window.innerWidth
                        })
                    }, t.moveCarouselForward = function() {
                        if (!t.isForwardButtonDisabled() && t.props.items) {
                            for (var e = t.getCarouselChildren(), n = t.getCarouselWidth(), i = t.state.currentElementIndex + 1, a = i; a < e.length; a++) {
                                if (e[a].getBoundingClientRect().right - t.getBaseOffset() > n) {
                                    i = a;
                                    break
                                }
                            }
                            t.setState({
                                currentElementIndex: i
                            })
                        }
                    }, t.moveCarouselBackward = function() {
                        if (!t.isBackButtonDisabled()) {
                            for (var e = t.getCarouselChildren(), n = t.getCarouselWidth(), i = t.state.currentElementIndex - 1, a = i - 1; a >= 0; a--) {
                                if (n < -1 * (e[a].getBoundingClientRect().left - t.getBaseOffset())) break;
                                i = a
                            }
                            t.setState({
                                currentElementIndex: i
                            })
                        }
                    }, t.isForwardButtonDisabled = function() {
                        if (!t.carouselContainerRef) return !0;
                        if (t.props.items) {
                            var e = t.getCarouselWidth(),
                                n = t.getCarouselChildren();
                            if (t.state.currentElementIndex >= n.length - 1) return !0;
                            var i = n[t.state.currentElementIndex].getBoundingClientRect().left;
                            if (n[n.length - 1].getBoundingClientRect().right - i > e) return !1
                        }
                        return !0
                    }, t.isBackButtonDisabled = function() {
                        return 0 === t.state.currentElementIndex
                    }, t.getCarouselChildren = function() {
                        if (!t.carouselContainerRef) return [];
                        var e = t.getCarouselSlider();
                        return e && e.children.length ? Array.prototype.slice.call(e.children) : []
                    }, t.getCarouselSlider = function() {
                        return t.carouselContainerRef.querySelector(u)
                    }, t.getCarouselWidth = function() {
                        return t.carouselContainerRef ? t.carouselContainerRef.getBoundingClientRect().width : 0
                    }, t.getBaseOffset = function() {
                        return t.carouselContainerRef ? t.carouselContainerRef.getBoundingClientRect().left : 0
                    }, t.getSliderOffset = function() {
                        if (!t.carouselContainerRef) return 0;
                        var e = t.getCarouselSlider();
                        return e ? e.getBoundingClientRect().left : 0
                    }, t.getChildOffset = function(e) {
                        var n = t.getCarouselChildren();
                        return 0 === n.length || n.length <= e ? 0 : n[e].getBoundingClientRect().left
                    }, t.transformString = function() {
                        return -1 * (t.getChildOffset(t.state.currentElementIndex) - t.getSliderOffset()) + "px"
                    }, t.refHandler = function(e) {
                        return t.state.childrenRendered || null === t.props.items || t.setState({
                            childrenRendered: !0
                        }), t.carouselContainerRef = e
                    }, t.renderNavButton = function(e, n, a) {
                        var l, c = ((l = {})[i.Previous] = Object(s.d)("previous", "MediaCarouselNavButton"), l[i.Next] = Object(s.d)("next", "MediaCarouselNavButton"), l),
                            u = r("media-carousel__button", {
                                "media-carousel__button--previous": e === i.Previous,
                                "media-carousel__button--next": e === i.Next,
                                "media-carousel__button--disabled": n
                            }, {
                                "media-carousel__button--inset": !0 === t.props.insetStyle
                            });
                        return o.createElement(d._8, {
                            className: u,
                            position: d._15.Relative,
                            display: d.R.Flex,
                            alignItems: d.c.Stretch
                        }, o.createElement(d.w, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: a,
                            disabled: n,
                            ariaLabel: c[e],
                            icon: p[e],
                            size: d.x.Large
                        }))
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.state.childrenRendered || null === this.props.items || this.setState({
                        childrenRendered: !0
                    })
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onResize)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onResize)
                }, t.prototype.render = function() {
                    return o.createElement(d._2, a.__assign({}, this.props, {
                        position: d._15.Relative
                    }), o.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, o.createElement(d._8, {
                        className: "media-carousel__child-container",
                        overflow: d._11.Hidden,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, o.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            marginLeft: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, o.createElement(d._2, {
                        className: "media-carousel__content",
                        display: d.R.Flex,
                        flexWrap: d.U.NoWrap,
                        flexDirection: d.T.Row,
                        alignItems: d.c.Center,
                        "data-js-selector": "carousel-content"
                    }, o.createElement("div", {
                        style: {
                            width: "max-content"
                        }
                    }, this.props.items)))), o.createElement(d._8, {
                        className: "media-carousel__nav",
                        display: d.R.Flex,
                        alignItems: d.c.Center,
                        position: d._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), o.createElement(d._8, {
                        className: "media-carousel__nav",
                        display: d.R.Flex,
                        alignItems: d.c.Center,
                        position: d._15.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                }, t = a.__decorate([Object(l.d)("MediaCarousel", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component)
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
        }), n.d(t, "e", function() {
            return d
        }), n.d(t, "f", function() {
            return c
        });
        var i = n("TToO"),
            a = this,
            r = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(128).then(n.bind(null, "tk3B"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            o = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(127).then(n.bind(null, "e/M0"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            s = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(126).then(n.bind(null, "Dan5"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            l = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(125).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            d = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(124).then(n.bind(null, "+kKy"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            c = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(123).then(n.bind(null, "2NJ8"))];
                            case 1:
                                return [2, e.sent().items]
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
    Lwev: function(e, t) {},
    M4d4: function(e, t) {},
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
    MQiv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), t.c = function(e) {
            var t = {
                share_medium: e.shareMedium,
                event_id: e.eventID,
                channel: e.channelLogin,
                channel_id: e.channelID,
                location: e.location
            };
            return r.o.tracking.track(o.SpadeEventType.EventShare, t)
        }, t.d = function(e) {
            var t = {
                action: e.action,
                channel: e.channelLogin,
                channel_id: e.channelID,
                event_id: e.eventID,
                location: e.location
            };
            return r.o.tracking.track(o.SpadeEventType.EventFollowing, t)
        };
        var i, a, r = n("6sO2"),
            o = n("vH/s");
        ! function(e) {
            e.ChannelEvents = "channel_events", e.DashboardEvents = "dashboard_events", e.EventDetails = "event_details", e.EventManagment = "event_managment", e.EventSidebar = "event_sidebar"
        }(i || (i = {})),
        function(e) {
            e.RemindMeOpen = "remind_me_open_modal", e.EmailReminderOn = "email_reminder_on", e.EmailReminderOff = "email_reminder_off"
        }(a || (a = {}))
    },
    McFO: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("Aj/L"),
            r = n("TToO"),
            o = n("GiK3"),
            s = n("Snvs"),
            l = n("bhVC"),
            d = n("7vx8"),
            c = n("WNmM"),
            u = n("U2Sd"),
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.data.clip,
                        n = "";
                    if (t && t.videoQualities) {
                        var i = t.videoQualities[0];
                        n = i.sourceURL
                    }
                    var a = this.props,
                        r = a.broadcasterId,
                        d = a.broadcasterLogin,
                        u = a.forceShow;
                    return o.createElement(s.a, {
                        ownerLogin: this.props.broadcasterLogin,
                        permittedRoles: {
                            editor: !0,
                            staff: !0
                        }
                    }, function(i) {
                        var a = i.permitted;
                        return n && (a || u) ? o.createElement(l.a, {
                            type: l.b.Download,
                            text: e.props.slug,
                            url: n,
                            onShareClick: t ? Object(c.c)(t.id, t.game && t.game.name, r, d, e.props.pageType) : void 0
                        }) : null
                    })
                }, t
            }(o.Component),
            p = Object(d.a)(u)(m);
        var g = Object(i.b)(function(e) {
            var t = Object(a.c)(e);
            return {
                userLogin: t ? t.login : ""
            }
        })(p);
        n.d(t, "a", function() {
            return g
        })
    },
    MjlB: function(e, t) {},
    OFFm: function(e, t, n) {
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
            m = n("oIkB"),
            p = n("MQiv"),
            g = n("Odds"),
            h = n("Ru53"),
            v = n("9SRT"),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleButton = function(e) {
                        return e && (e.stopPropagation(), e.preventDefault()), t.toggleFollowing()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = Object(u.d)("Remind Me", "FollowEvent"),
                        t = Object(u.d)("Reminder Set", "FollowEvent");
                    if (this.props.small) {
                        var n = e,
                            i = g._25.Heart;
                        return this.props.areNotificationsEnabled && (n = t, i = g._25.FollowCheck), d.createElement(g._52, {
                            label: n,
                            direction: this.props.tooltipDirection
                        }, d.createElement(g.w, {
                            size: g.x.Default,
                            icon: i,
                            onClick: this.handleButton,
                            ariaLabel: n
                        }))
                    }
                    return d.createElement(g.v, {
                        type: this.props.areNotificationsEnabled ? g.B.Success : g.B.Default,
                        onClick: this.handleButton,
                        icon: this.props.areNotificationsEnabled ? g._25.FollowCheck : g._25.Heart,
                        ariaLabel: this.props.areNotificationsEnabled ? t : e
                    }, this.props.areNotificationsEnabled ? t : e)
                }, t.prototype.createOptimisticResponse = function(e) {
                    var t = {
                        __typename: e ? "FollowEventPayload" : "UnfollowEventPayload",
                        event: {
                            id: this.props.eventID,
                            self: {
                                __typename: "EventSelfConnection",
                                isFollowing: e
                            },
                            __typename: this.props.eventTypename
                        }
                    };
                    return e ? {
                        __typename: "Mutation",
                        followEvent: t
                    } : {
                        __typename: "Mutation",
                        unfollowEvent: t
                    }
                }, t.prototype.toggleFollowing = function() {
                    if (!this.props.isLoggedIn) return this.props.login();
                    var e = l.__assign({}, Object(m.a)({
                        eventID: this.props.eventID
                    }), {
                        optimisticResponse: this.createOptimisticResponse(!this.props.areNotificationsEnabled)
                    });
                    this.props.areNotificationsEnabled ? this.props.unfollowEvent(e) : this.props.followEvent(e), Object(p.d)({
                        action: this.props.areNotificationsEnabled ? p.b.EmailReminderOff : p.b.EmailReminderOn,
                        channelLogin: this.props.channelLogin || "undefined",
                        channelID: this.props.channelID || "undefined",
                        eventID: this.props.eventID,
                        location: this.props.eventLocation
                    })
                }, t
            }(d.PureComponent),
            k = Object(c.compose)(Object(c.graphql)(h, {
                name: "followEvent"
            }), Object(c.graphql)(v, {
                name: "unfollowEvent"
            }))(f);
        var y = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(o.f)(r.a.EventFollowButton)
                }
            }, e)
        })(k);
        n.d(t, "a", function() {
            return y
        })
    },
    OOh8: function(e, t) {},
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
                                    e = r.o.logger.withCategory("leagueoflegends-api"), t(Object(d.e)(!0)), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), n = r.o.intl.getLanguageCode(), s = l(n), c = o.a.getAPIURL("/api/lol/champions?" + a.stringify({
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
            return h
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
            g = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderFilterButton = function(e) {
                        return r.createElement(d._6, {
                            key: e,
                            onClick: n.updateFilterFuncs[e],
                            "data-a-target": "time-filter-option-" + u(e),
                            selected: e === n.props.timeFilterValue
                        }, r.createElement(d._8, {
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
                    return r.createElement(d._8, {
                        className: "top-clips-time-filter"
                    }, r.createElement(s.a, null, r.createElement(d.v, {
                        dropdown: !0,
                        type: d.B.Hollow,
                        "data-a-target": "time-filter-selection"
                    }, this.renderFilterText(this.props.timeFilterValue)), r.createElement(d.q, {
                        direction: d.r.BottomLeft,
                        noTail: !0
                    }, r.createElement(d._8, {
                        padding: {
                            y: .5
                        }
                    }, p.map(this.renderFilterButton)))))
                }, t.prototype.renderFilterText = function(e) {
                    return e === i.Trending ? r.createElement("span", null, Object(o.d)("Trending", "TopClipsTimeFilter")) : r.createElement(d._8, {
                        display: d.R.Flex
                    }, Object(o.d)("Top", "TopClipsTimeFilter"), r.createElement(d._8, {
                        margin: {
                            left: .5
                        }
                    }, r.createElement(d._12, {
                        type: d._13.Brand,
                        label: u(e)
                    })))
                }, t
            }(r.Component),
            h = Object(l.d)("TopClipsTimeFilter")(g)
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
    RsvU: function(e, t) {},
    Ru53: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Events_FollowEvent"
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
                                value: "FollowEventInput"
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
                            value: "followEvent"
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
                                    value: "event"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "EventCollection"
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
                                                            value: "isFollowing"
                                                        },
                                                        arguments: [],
                                                        directives: []
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
                                                value: "EventLeaf"
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
                                                            value: "isFollowing"
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
                end: 193
            }
        };
        n.loc.source = {
            body: "mutation Events_FollowEvent($input: FollowEventInput!) {\nfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "S/9j": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u
        });
        var i = n("TToO"),
            a = n("GiK3"),
            r = (n.n(a), n("RH2O")),
            o = n("2KeS"),
            s = n("+8VM"),
            l = n("V5M+"),
            d = n("Odds"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d._35, {
                        padding: {
                            x: 2,
                            y: 3
                        },
                        background: d.n.Base
                    }, a.createElement("img", {
                        src: this.props.screenshotURL
                    }), a.createElement(s.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, t
            }(a.Component);
        var u = Object(o.d)(Object(r.b)(null, function(e) {
            return Object(o.b)({
                closeModal: l.c
            }, e)
        }))(c)
    },
    SG0P: function(e, t) {},
    SN3I: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("MMhf"),
            r = n("Odds"),
            o = function(e) {
                return i.createElement(r._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(r.Q, {
                    type: r._49.H4,
                    color: r.K.Alt2,
                    fontSize: r.V.Size5,
                    transform: r._48.Uppercase,
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
    Snvs: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("3zLD"),
            o = n("6sO2"),
            s = n("7vx8"),
            l = n("CSlQ"),
            d = n("acVP"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        loading: !0,
                        permitted: !1,
                        roles: {
                            staff: !1,
                            editor: !1,
                            owner: !1
                        },
                        error: null
                    }, t.logger = o.j.withCategory("role-restricted"), t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = m(e),
                        n = {
                            loading: e.data.loading,
                            permitted: u(t, e.permittedRoles),
                            roles: t,
                            error: null
                        };
                    e.data.error ? (n.error = new Error(e.data.error.toString()), this.logger.warn("Unable to retrieve data from GraphQL.", {
                        err: n.error
                    })) : e.data.loading || e.data.user && e.data.currentUser || (n.error = new Error("Failed to fetch user information"), this.logger.warn("Failed to fetch user information.", {
                        err: n.error
                    })), this.setState(n)
                }, t.prototype.render = function() {
                    return this.props.children(this.state)
                }, t
            }(a.Component);

        function u(e, t) {
            return !!e.owner || (!(!e.staff || !t.staff) || !(!e.editor || !t.editor))
        }

        function m(e) {
            var t = e.data,
                n = {
                    staff: !1,
                    editor: !1,
                    owner: !1
                };
            return !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id), n
        }
        var p = Object(r.compose)(Object(s.a)(d, {
            options: function(e) {
                return {
                    variables: {
                        contentOwnerLogin: e.ownerLogin
                    }
                }
            }
        }), Object(l.d)("RoleRestricted"))(c);
        n.d(t, !1, function() {
            return c
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return p
        })
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
                                                                        value: "50"
                                                                    }
                                                                }],
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
                end: 489
            }
        };
        n.loc.source = {
            body: "query ClipsCards__Game($gameName: String! $limit: Int $cursor: Cursor $criteria: GameClipsInput) {\ngame(name: $gameName) {\nid\nclips(first: $limit after: $cursor criteria: $criteria) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\nid\nslug\nurl\nembedURL\ntitle\nviewCount\nlanguage\ncurator {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 52 height: 72)\n}\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\nchampBadge {\nid\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Tg4T: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            s = n("Odds");
        ! function(e) {
            e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
        }(i || (i = {}));
        var l = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.render = function() {
                if (!(this.props.restriction && this.props.restriction.productName && this.props.restriction.title && this.props.videoID)) return null;
                var e = Object(o.d)("Get It Now", "VideoPreviewCardRestriction"),
                    t = this.props.restriction.canViewRestricted,
                    n = t ? Object(o.d)("unlocked", "VideoPreviewCardRestriction") : Object(o.d)("locked", "VideoPreviewCardRestriction"),
                    a = t ? s._25.Unlock : s._25.Lock;
                return r.createElement(s._8, null, !t && r.createElement(s._35, {
                    background: s.n.Overlay,
                    className: "video-preview-card-restriction",
                    color: s.K.Overlay,
                    display: s.R.Flex,
                    position: s._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    zIndex: s._62.Default,
                    padding: {
                        x: 5
                    },
                    textAlign: s._45.Center,
                    fullWidth: !0,
                    fullHeight: !0,
                    alignItems: s.c.Center,
                    alignContent: s.b.Center,
                    flexDirection: s.T.Column,
                    flexWrap: s.U.Wrap,
                    justifyContent: s._7.Center,
                    "data-test-selector": i.LockSelector
                }, r.createElement(s._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(s.Q, {
                    color: s.K.Overlay,
                    fontSize: s.V.Size5,
                    "data-test-selector": i.UpsellSelector
                }, Object(o.d)("View with {title}", {
                    title: this.props.restriction.title
                }, "VideoPreviewCardRestriction"))), r.createElement(s._8, null, r.createElement(s.v, {
                    type: s.B.Hollow,
                    ariaLabel: e,
                    targetBlank: !0,
                    disabled: "" === this.props.restriction.productName,
                    linkTo: "https://www.twitch.tv/products/" + this.props.restriction.productName,
                    overlay: !0
                }, e))), r.createElement(s._35, {
                    display: s.R.InlineFlex,
                    position: s._15.Absolute,
                    attachTop: this.props.attachTop,
                    attachBottom: !this.props.attachTop,
                    attachRight: !0,
                    margin: .5,
                    zIndex: s._62.Default,
                    fontSize: s.V.Size6,
                    background: s.n.Overlay,
                    borderRadius: s.t.Medium,
                    color: s.K.Overlay
                }, r.createElement(s._52, {
                    direction: this.props.attachTop ? s._54.Bottom : s._54.Top,
                    align: s._53.Right,
                    label: n
                }, r.createElement(s._24, {
                    asset: a,
                    height: 20,
                    width: 20
                }))))
            }, t
        }(r.PureComponent);
        n.d(t, !1, function() {
            return i
        }), n.d(t, "a", function() {
            return l
        })
    },
    U2Sd: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsDownloadButton"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "videoQualities"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "sourceURL"
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
                end: 131
            }
        };
        n.loc.source = {
            body: "query ClipsDownloadButton($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ngame {\nid\nname\n}\nvideoQualities {\nsourceURL\n}\n}\n}",
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
    UQNI: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("6sO2"),
            a = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(i.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(i.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(i.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(i.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(i.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(i.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            }
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
        var i, a = n("TToO"),
            r = n("HW6M"),
            o = n("GiK3"),
            s = n("6sO2"),
            l = n("6yQB"),
            d = n("+Znq"),
            c = n("6WAQ"),
            u = n("JpYe"),
            m = n("3yQz"),
            p = n("Odds");
        n("C2pI");
        ! function(e) {
            e.SortNewest = "sort-option-newest", e.SortPopular = "sort-option-popular", e.SortSelector = "sort-selector"
        }(i || (i = {}));
        var g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.sortChangeHandler = function(e) {
                        t.props.onVideoSortChange(e.target.value)
                    }, t.typeChangeHandler = function(e) {
                        if (t.balloonWrapperRef.toggleBalloon(!1), t.props.onVideoFilterChange) {
                            var n = e.currentTarget.getAttribute("data-filter-type");
                            n && t.props.onVideoFilterChange(n)
                        }
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t = Object(s.d)("All Videos", "VideoFilter"),
                        n = Object(s.d)("Past Premieres", "VideoFilter"),
                        i = Object(s.d)("Past Broadcasts", "VideoFilter"),
                        a = Object(s.d)("Highlights", "VideoFilter"),
                        l = Object(s.d)("Uploads", "VideoFilter");
                    switch (this.props.broadcastType) {
                        case c.a.PastPremiere:
                            e = n;
                            break;
                        case c.a.Archive:
                            e = i;
                            break;
                        case c.a.Highlight:
                            e = a;
                            break;
                        case c.a.Upload:
                            e = l;
                            break;
                        default:
                            e = t
                    }
                    var u = {
                            "video-filters": !0,
                            "video-filters--active": !0
                        },
                        m = {
                            "video-filters": !0
                        };
                    return o.createElement(p._8, {
                        margin: {
                            bottom: 2
                        },
                        display: p.R.Flex,
                        justifyContent: p._7.Between
                    }, o.createElement("div", null, this.renderLanguageSelector(), o.createElement(p._8, {
                        display: p.R.InlineFlex
                    }, o.createElement(d.a, {
                        ref: this.saveBalloonWrapperRef
                    }, o.createElement(p.v, {
                        type: p.B.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "video-type-filter-dropdown",
                        dropdown: !0
                    }, e), o.createElement(p.q, {
                        direction: p.r.Bottom,
                        "data-a-target": "video-type-filter-balloon",
                        offsetX: "0",
                        noTail: !0
                    }, o.createElement(p._8, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, o.createElement(p._6, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": "all",
                        "data-a-target": "video-type-filter-all"
                    }, o.createElement(p._8, {
                        className: r(this.props.broadcastType ? m : u),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-all"
                    }, t)), o.createElement(p._6, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": c.a.PastPremiere,
                        "data-a-target": "video-type-filter-past-premieres"
                    }, o.createElement(p._8, {
                        className: r(this.props.broadcastType === c.a.PastPremiere ? u : m),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-past-premiere"
                    }, n)), o.createElement(p._6, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": c.a.Archive,
                        "data-a-target": "video-type-filter-past-broadcasts"
                    }, o.createElement(p._8, {
                        className: r(this.props.broadcastType === c.a.Archive ? u : m),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-archive"
                    }, i)), o.createElement(p._6, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": c.a.Highlight,
                        "data-a-target": "video-type-filter-highlights"
                    }, o.createElement(p._8, {
                        className: r(this.props.broadcastType === c.a.Highlight ? u : m),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-highlight"
                    }, a)), o.createElement(p._6, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": c.a.Upload,
                        "data-a-target": "video-type-filter-uploads"
                    }, o.createElement(p._8, {
                        className: r(this.props.broadcastType === c.a.Upload ? u : m),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-upload"
                    }, l))))))), o.createElement("div", null, this.renderSortSelector()))
                }, t.prototype.renderLanguageSelector = function() {
                    return this.props.hideLanguageSelector ? null : o.createElement(p._8, {
                        display: p.R.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, o.createElement(l.a, null))
                }, t.prototype.renderSortSelector = function() {
                    if (this.props.hideSortSelector) return null;
                    var e = this.props.selectedSort && Object(u.f)(this.props.selectedSort) || m.a;
                    return o.createElement(p._30, {
                        "data-a-target": "video-sort-select",
                        "data-test-selector": i.SortSelector,
                        name: "sort",
                        onChange: this.sortChangeHandler,
                        value: e
                    }, o.createElement("option", {
                        "data-a-target": "video-sort-newest",
                        "data-test-selector": i.SortNewest,
                        value: m.a
                    }, Object(s.d)("Newest", "VideoFilter")), o.createElement("option", {
                        "data-a-target": "video-sort-popular",
                        "data-test-selector": i.SortPopular,
                        value: m.b
                    }, Object(s.d)("Popular", "VideoFilter")))
                }, t
            }(o.Component),
            h = n("ISok");
        n.d(t, "a", function() {
            return g
        }), n.d(t, "c", function() {
            return h.a
        }), n.d(t, "b", function() {
            return m.c
        })
    },
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-9fc82f039194a365a8d6d2bf2797e041.png"
    },
    "W/wc": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            l = n("TToO"),
            d = n("GiK3"),
            c = n("6sO2"),
            u = n("7vx8"),
            m = n("oIkB"),
            p = n("vH/s"),
            g = n("CSlQ"),
            h = n("Odds"),
            v = n("qs/O"),
            f = n("odW7"),
            k = n("d+bE"),
            y = function(e) {
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
                            var n = "follow" === e ? p.SpadeEventType.CommunityFollow : p.SpadeEventType.CommunityUnfollow;
                            c.o.tracking.track(n, {
                                community_id: t.props.data.community.id,
                                name: t.props.data.community.name,
                                is_official: !1,
                                user_id: t.props.data.currentUser && t.props.data.currentUser.id
                            })
                        }
                    }, t.followChannel = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return l.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.props.followCommunity && this.props.data ? (e = l.__assign({}, Object(m.a)({
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
                                        return t = a.sent(), n = function(e) {
                                            return i.trackResponse("follow"), e.community.self.follow && (e.community.self.follow.followedAt = t.data.followCommunity.community.self.follow.followedAt), e
                                        }, Object(m.e)(v, {
                                            name: this.props.directoryName
                                        }, n), [2]
                                }
                            })
                        })
                    }, t.unfollowChannel = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return l.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.props.unfollowCommunity && this.props.data ? (e = l.__assign({}, Object(m.a)({
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
                                        return i.sent(), t = function(e) {
                                            return n.trackResponse("unfollow"), e.community.self.follow = null, e
                                        }, Object(m.e)(v, {
                                            name: this.props.directoryName
                                        }, t), [2]
                                }
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && !e.data.loading && !e.data.error && e.data.community && this.setState({
                        isFollowing: e.data.community.self && null !== e.data.community.self.follow
                    })
                }, t.prototype.render = function() {
                    var e = Object(c.d)("Follow", "DirectoryFollowButton");
                    return this.props.isLoggedIn ? !this.props.data || this.props.data.loading ? d.createElement(h._14, {
                        width: 70,
                        height: 30
                    }) : this.communityDataLoaded() ? this.state.isFollowing ? d.createElement(h._8, {
                        display: h.R.Flex,
                        margin: {
                            left: 1
                        },
                        className: "directory-follow-btn"
                    }, d.createElement(h.w, {
                        ariaLabel: Object(c.d)("Unfollow", "DirectoryFollowButton"),
                        onClick: this.toggleFollowing,
                        "data-a-target": "directory-unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: h._25.Heart,
                        statusAlertIcon: h._25.Unheart
                    })) : d.createElement(h.v, l.__assign({
                        ariaLabel: e,
                        "data-a-target": "directory-follow-button",
                        "data-test-selector": "follow-button",
                        icon: h._25.Heart,
                        onClick: this.toggleFollowing
                    }, Object(h._63)(this.props)), e) : null : d.createElement(h.v, {
                        ariaLabel: e,
                        icon: h._25.Heart,
                        onClick: this.props.login,
                        "data-a-target": "directory-follow-button"
                    }, e)
                }, t.prototype.reportInteractive = function() {
                    this.props.isLoggedIn && this.props.directoryName && !this.communityDataLoaded() || this.props.latencyTracking.reportInteractive()
                }, t = l.__decorate([Object(u.a)(v, {
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
                }), Object(u.a)(f, {
                    name: "followCommunity"
                }), Object(u.a)(k, {
                    name: "unfollowCommunity"
                }), Object(g.d)("DirectoryFollowButton")], t)
            }(d.Component);
        var b = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(o.f)(r.a.DirectoryFollowButton)
                }
            }, e)
        })(y);
        n.d(t, "a", function() {
            return b
        })
    },
    WNmM: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return m
        });
        var i, a, r = n("6sO2"),
            o = n("8Wuk"),
            s = n("vH/s"),
            l = ((i = {})[o.b.Twitter] = "twitter", i[o.b.Reddit] = "reddit", i[o.b.VKontakte] = "vkontakte", i[o.b.Facebook] = "facebook", i[o.b.Copy] = "link", i[o.b.CopyInput] = "option_link", i[o.b.Download] = "download", i),
            d = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            c = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            u = ((a = {
                MyClips: s.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: s.PageviewLocation.ChannelClipsManager,
                TopClipsGame: s.PageviewLocation.ClipsGame,
                TopClipsChannel: s.PageviewLocation.ChannelClips
            })[s.PageviewLocation.ClipsEditing] = s.PageviewLocation.ClipsEditing, a[s.PageviewLocation.ClipsViewing] = s.PageviewLocation.ClipsViewing, a),
            m = function(e, t, n, i, a) {
                return function(o) {
                    r.o.tracking.track(s.SpadeEventType.VideoShare, {
                        vod_id: e,
                        vod_type: "clip",
                        share_platform: l[o],
                        location: u[a],
                        game: t,
                        channel_id: Number(n || 0),
                        channel: i,
                        live: null
                    })
                }
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
    XOun: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("vH/s"),
            s = "https://help.twitch.tv/customer/portal/articles/2918323-clip-champs-guide",
            l = function(e) {
                var t = e.type;
                r.o.tracking.track(o.SpadeEventType.ClipChampHelpClick, {
                    target_url: s,
                    type: t.toLowerCase()
                })
            };
        n("RsvU");
        n.d(t, "a", function() {
            return d
        });
        var d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onClick = function() {
                    l({
                        type: t.props.pageType
                    })
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement("a", {
                    href: s,
                    onClick: this.onClick,
                    target: "_blank"
                }, a.createElement("img", {
                    alt: Object(r.d)("clip champ badge", "ClipsCurator"),
                    className: "clips-champ-badge-img",
                    src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/clipchampbadge"
                }))
            }, t
        }(a.Component)
    },
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            a = (n.n(i), n("Odds")),
            r = function() {
                return i.createElement(a.C, null, i.createElement(a.k, {
                    ratio: a.l.Aspect16x9
                }, i.createElement(a._14, null)), i.createElement(a.D, null, i.createElement(a._8, {
                    display: a.R.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a._8, {
                    display: a.R.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._14, {
                    width: 40,
                    height: 56
                })), i.createElement(a._8, {
                    display: a.R.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a.Q, null, i.createElement(a._14, {
                    width: 150
                })), i.createElement(a.Q, {
                    fontSize: a.V.Size7
                }, i.createElement(a._14, {
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
                                        value: "107"
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
            body: "query DirectoryHeader_DirectoryAvatar($name: String! $type: DirectoryType!) {\ndirectory(name: $name type: $type) {\nid\nname\ndisplayName\navatarURL(width: 80 height: 107)\n}\ncurrentUser {\nid\nroles {\nisSiteAdmin\nisStaff\n}\n}\n}",
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
    YVIF: function(e, t) {},
    ZdVn: function(e, t) {},
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return _
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("OAwv")),
            o = (n.n(r), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("6sO2"),
            d = n("iOr9"),
            c = n("vKFS"),
            u = n("SZoP"),
            m = n("mi6k"),
            p = n("CSlQ"),
            g = n("81qH"),
            h = n("Tg4T"),
            v = n("Odds"),
            f = n("a0ve"),
            k = (n.n(f), "video-view-count"),
            y = "video-length",
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.renderVariation = function() {
                        var e = {
                            productName: t.props.video.restriction && t.props.video.restriction.productName,
                            title: t.props.video.restriction && t.props.video.restriction.productTitle,
                            canViewRestricted: t.props.video.self && !t.props.video.self.isRestricted || !1
                        };
                        return o.createElement(c.a, {
                            context: t.props.context,
                            title: t.props.video.title,
                            linkTo: {
                                pathname: "/videos/" + t.props.video.id,
                                state: t.getLinkState(),
                                search: t.generateSearchString()
                            },
                            thumbnailImageProps: {
                                src: t.props.video.previewThumbnailURL,
                                alt: t.props.video.title,
                                onLoad: t.reportInteractive,
                                onError: t.reportInteractive
                            },
                            channelLogin: t.props.video.owner && t.props.video.owner.login || "",
                            channelLoginLinkTo: {
                                pathname: "/" + (t.props.video.owner ? t.props.video.owner.login : ""),
                                state: t.getLinkState()
                            },
                            channelImageProps: {
                                src: t.props.video.owner && t.props.video.owner.profileImageURL || "",
                                alt: t.props.video.owner ? t.props.video.owner.displayName : ""
                            },
                            gameTitle: t.props.video.game && t.props.video.game.name || "",
                            gameTitleLinkTo: {
                                pathname: "/directory/game/" + encodeURI(t.props.video.game && t.props.video.game.name || ""),
                                state: t.getLinkState()
                            },
                            gameBoxArtImageProps: {
                                src: t.props.video.game && t.props.video.game.boxArtURL || "",
                                alt: t.props.video.game ? t.props.video.game.displayName : ""
                            },
                            datePublished: t.props.video.publishedAt,
                            viewCount: t.props.video.viewCount,
                            durationInSeconds: t.props.video.lengthSeconds,
                            animatedImageProps: t.props.video.animatedPreviewURL ? {
                                src: t.props.video.animatedPreviewURL,
                                alt: ""
                            } : void 0,
                            watchedProgressPercent: t.getVideoPreviousWatchPercentage() || 0,
                            restriction: e,
                            videoID: t.props.video.id
                        })
                    }, t.renderFallback = function() {
                        var e = null,
                            n = t.getVideoPreviousWatchPercentage();
                        null !== n && (e = o.createElement(v._8, {
                            position: v._15.Absolute,
                            attachBottom: !0,
                            fullWidth: !0
                        }, o.createElement(v._18, {
                            size: v._20.Small,
                            value: n,
                            mask: !0
                        })));
                        var a = {
                            productName: t.props.video.restriction && t.props.video.restriction.productName,
                            title: t.props.video.restriction && t.props.video.restriction.productTitle,
                            canViewRestricted: t.props.video.self && !t.props.video.self.isRestricted || !1
                        };
                        return o.createElement("div", i.__assign({
                            onClick: t.onClickHandler,
                            onMouseEnter: t.onMouseEnterHandler,
                            onMouseLeave: t.onMouseLeaveHandler
                        }, Object(v._63)(t.props)), o.createElement(v.C, null, o.createElement(v._8, {
                            fullWidth: !0
                        }, o.createElement(v.k, {
                            overflow: !0
                        }, o.createElement("div", null, o.createElement(h.a, {
                            videoID: t.props.video.id,
                            restriction: a
                        }), o.createElement(v._35, {
                            display: v.R.InlineFlex,
                            position: v._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: .5,
                            zIndex: v._62.Default,
                            fontSize: v.V.Size6,
                            background: v.n.Overlay,
                            color: v.K.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(v._34, {
                            "data-test-selector": k,
                            icon: v._25.GlyphViews,
                            label: Object(l.d)("views", "VideoPreviewCard"),
                            value: Object(l.f)(t.props.video.viewCount)
                        })), o.createElement(v._35, {
                            display: v.R.InlineFlex,
                            position: v._15.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            margin: .5,
                            zIndex: v._62.Default,
                            fontSize: v.V.Size6,
                            background: v.n.Overlay,
                            color: v.K.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(v._34, {
                            "data-test-selector": y,
                            icon: v._25.GlyphLength,
                            label: Object(l.d)("length", "VideoPreviewCard"),
                            value: Object(m.b)(t.props.video.lengthSeconds)
                        })), t.videoPreviewImage(), e))), o.createElement(v.D, null, o.createElement(v._8, {
                            display: v.R.Flex,
                            flexDirection: v.T.Row,
                            flexWrap: v.U.NoWrap,
                            padding: {
                                top: .5
                            }
                        }, t.props.hideGameArt ? null : t.gameBoxArt(), t.videoMetaData()))))
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
                        t.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewLoad: !0
                        })
                    }, t.onPreviewImageLoadError = function(e) {
                        t.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewFailToLoad: !0
                        })
                    }, t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.overrideImageInteractivity && this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = {
                        assignments: {
                            fallback: this.renderFallback,
                            variation: this.renderVariation
                        },
                        loader: function() {
                            return o.createElement(g.VideoPreviewCardPlaceholder, null)
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return o.createElement(d.a, i.__assign({}, e))
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
                    return o.createElement(v.k, {
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
                    }, o.createElement(v._2, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(v.k, {
                        ratio: v.l.Aspect16x9
                    }, o.createElement("img", {
                        alt: this.props.video.title,
                        className: n,
                        "data-test-selector": "preview-image",
                        onLoad: this.onPreviewImageLoad,
                        onError: this.onPreviewImageLoadError,
                        src: e || ""
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
                    return o.createElement(v._8, {
                        "data-test-selector": "game-box-art",
                        display: v.R.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(v._2, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(v._52, {
                        display: v.R.Block,
                        direction: v._54.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(v.E, {
                        aspect: v.l.BoxArt,
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
                            title: Object(u.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(u.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return o.createElement(v._8, {
                        display: v.R.Flex,
                        flexDirection: v.T.Column,
                        overflow: v._11.Hidden
                    }, o.createElement(v._8, {
                        "data-test-selector": "video-title",
                        overflow: v._11.Hidden,
                        position: v._15.Relative
                    }, o.createElement(v.Q, {
                        color: v.K.Base,
                        fontSize: v.V.Size5,
                        lineHeight: v._9.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(v._8, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(v.Q, {
                        type: v._49.Span,
                        color: v.K.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(v._2, {
                        padding: {
                            x: .5
                        }
                    }, o.createElement("span", null, "·")), t)))
                }, t.prototype.getVideoPreviousWatchPercentage = function() {
                    return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                }, t.prototype.showGameArt = function() {
                    return !this.props.hideGameArt && this.props.video.game && "" !== this.props.video.game.name
                }, t.prototype.formatTitle = function(e) {
                    if (this.props.video.owner) return e + " · " + Object(u.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                }, t.prototype.getLinkState = function() {
                    return {
                        content: this.props.tracking.content,
                        content_index: this.props.tracking.content_index,
                        medium: this.props.tracking.medium
                    }
                }, t
            }(o.Component),
            _ = Object(p.d)("VideoPreviewCard")(b)
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
    acVP: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "RoleRestricted"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "contentOwnerLogin"
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
                                    }]
                                }
                            }]
                        }
                    }, {
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
                                    value: "contentOwnerLogin"
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
                                            value: "isEditor"
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
                end: 147
            }
        };
        n.loc.source = {
            body: "query RoleRestricted($contentOwnerLogin: String!) {\ncurrentUser {\nid\nroles {\nisStaff\n}\n}\nuser(login: $contentOwnerLogin) {\nid\nself {\nisEditor\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bdk8: function(e, t) {},
    bhVC: function(e, t, n) {
        "use strict";
        var i = n("8Wuk");
        n.d(t, "a", function() {
            return i.a
        }), n.d(t, "b", function() {
            return i.b
        })
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
    ea7N: function(e, t) {},
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
            a.o.tracking.track(o.SpadeEventType.FuelBuyButton, i)
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
            a.o.tracking.track(o.SpadeEventType.FuelOfferView, t)
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
            a.o.tracking.track(o.SpadeEventType.FuelOfferInteraction, n)
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
                                    value: "featuredEventsByTime"
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
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "EventLeaf"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "InlineEventLeaf"
                                                        },
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "liveChannel"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "channel"
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
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "EventLeaf"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "InlineEventLeaf"
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
                                                                    value: "isFollowing"
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
                                            value: "past"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "EventLeaf"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "InlineEventLeaf"
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
                                                                                    value: "previewThumbnailURL"
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
                                                            value: "archives"
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
                                                                                    value: "previewThumbnailURL"
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
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "InlineEventLeaf"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "EventLeaf"
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
                            value: "imageURL"
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
                            value: "channel"
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
                            value: "parent"
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
                                    value: "imageURL"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 799
            }
        };
        n.loc.source = {
            body: "query GamePage_Events($name: String!) {\ngame(name: $name) {\nid\nname\nfeaturedEventsByTime {\nlive {\n...on EventLeaf {\n...InlineEventLeaf\nliveChannel: channel {\nid\nstream {\nid\nviewersCount\n}\n}\n}\n}\nfuture {\n...on EventLeaf {\n...InlineEventLeaf\nself {\nisFollowing\n}\n}\n}\npast {\n...on EventLeaf {\n...InlineEventLeaf\nhighlights: videos(first: 3 type:HIGHLIGHT sort:VIEWS) {\nedges {\nnode {\nid\ntitle\npreviewThumbnailURL(height: 54 width:96)\nviewCount\nlengthSeconds\n}\n}\n}\narchives: videos(first: 1 type:ARCHIVE sort:VIEWS) {\nedges {\nnode {\nid\ntitle\npreviewThumbnailURL(height: 54 width:96)\nviewCount\nlengthSeconds\n}\n}\n}\n}\n}\n}\n}\n}\nfragment InlineEventLeaf on EventLeaf {\nid\ntitle\nstartAt\nendAt\nimageURL(width:340 height:193)\nchannel {\nid\nlogin\ndisplayName\n}\nparent {\nid\ntitle\nimageURL(width:340 height: 193)\n}\n}",
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
    jpZi: function(e, t) {},
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
    nUXg: function(e, t) {},
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
    nyge: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
            }(i || (i = {}))
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
            var a = window.getComputedStyle(document.documentElement).fontSize || i.toString(),
                r = parseFloat(a) / i;
            return Math.floor(e / (t * r)) * n
        };
        var i = 10
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
                                    value: "displayName"
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
                                        value: "50"
                                    }
                                }],
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
                                    value: "isRestricted"
                                },
                                arguments: [],
                                directives: []
                            }, {
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "restriction"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "productName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "productTitle"
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
                end: 356
            }
        };
        n.loc.source = {
            body: "fragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\ndisplayName\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\nprofileImageURL(width: 50)\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nisRestricted\nviewingHistory {\nposition\n}\n}\ntitle\nviewCount\nrestriction {\nproductName\nproductTitle\n}\n}",
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
                                                                                value: "50"
                                                                            }
                                                                        }],
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
                                                                                value: "50"
                                                                            }
                                                                        }],
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
                end: 1107
            }
        };
        n.loc.source = {
            body: "query GamePage_Game($name: String! $type: DirectoryType! $limit: Int $languages: [String!] $cursor: Cursor $filters: StreamMetadataFilterInput) {\ndirectory(name: $name type: $type) {\nid\ndisplayName\n... on Community {\nid\nstreams(first: $limit after: $cursor languages: $languages) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nroles {\nisPartner\n}\nprofileImageURL(width: 50)\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n... on Game {\nid\nstreams(first: $limit after: $cursor languages: $languages filters: $filters) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nroles {\nisPartner\n}\nprofileImageURL(width: 50)\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\nstreamMetadata {\ncounterStrikeGlobalOffensive {\nskill\n}\nhearthstone {\nbroadcasterHeroClass\n}\noverwatch {\nbroadcasterCharacter\n}\nleagueOfLegends {\nchampionID\nsummonerDivision\nsummonerID\nsummonerName\nsummonerRank\n}\n}\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}\n}",
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
            return d
        }), n.d(t, "a", function() {
            return c
        });
        var i = n("GiK3"),
            a = (n.n(i), n("8Wuk")),
            r = n("yDzg"),
            o = n("WNmM"),
            s = n("McFO"),
            l = n("Odds"),
            d = [{
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
            c = function(e) {
                return i.createElement(l._8, {
                    className: "clips-social-share",
                    display: l.R.Flex,
                    flexWrap: l.U.NoWrap
                }, i.createElement(l._8, {
                    display: l.R.InlineBlock,
                    margin: {
                        right: 1
                    }
                }, i.createElement(s.a, {
                    broadcasterLogin: e.clip.broadcaster && e.clip.broadcaster.login || "",
                    broadcasterId: e.clip.broadcaster && e.clip.broadcaster.id || "",
                    slug: e.clip.slug,
                    pageType: e.pageType
                })), d.map(function(t) {
                    return i.createElement(l._8, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(a.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(r.a)(e.clip.url, t.params),
                        onShareClick: Object(o.c)(e.clip.id, e.clip.game && e.clip.game.name, e.clip.broadcaster && e.clip.broadcaster.id, e.clip.broadcaster && e.clip.broadcaster.login, e.pageType)
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
                        return t.props.successContent ? a.createElement(s._35, {
                            "data-test-selector": l.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.n.Alt,
                            fullWidth: !0
                        }, a.createElement(s.Q, {
                            type: s._49.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? a.createElement(s._35, {
                            "data-test-selector": l.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.n.Alt,
                            fullWidth: !0
                        }, a.createElement(s.Q, {
                            type: s._49.Strong,
                            color: s.K.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? a.createElement(o.a, {
                        onClickOut: this.props.onClose
                    }, a.createElement(s._35, {
                        padding: 2,
                        background: s.n.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), a.createElement(s._8, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center
                    }, a.createElement(s._8, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(s.v, {
                        "data-test-selector": l.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(r.d)("Close", "ClipsModal")))))) : a.createElement(o.a, {
                        onClickOut: this.props.onClose
                    }, a.createElement(s._35, {
                        padding: 2,
                        background: s.n.Base,
                        className: "clip-modal"
                    }, a.createElement(s._35, {
                        "data-test-selector": l.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), a.createElement(s._35, {
                        "data-test-selector": l.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), a.createElement(s._8, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center
                    }, a.createElement(s._8, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(s.v, {
                        "data-test-selector": l.CANCEL_BUTTON,
                        type: s.B.Text,
                        onClick: this.props.onClose
                    }, Object(r.d)("Cancel", "ClipsModal"))), a.createElement(s._8, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(s.v, {
                        "data-test-selector": l.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : s.B.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && a.createElement(s._10, {
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
                        return t.props.isTemporary ? a.createElement(s.Q, {
                            type: s._49.H5,
                            ellipsis: !0
                        }, Object(r.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : a.createElement(s.Q, {
                            type: s._49.H5,
                            ellipsis: !0
                        }, Object(r.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? a.createElement(s.Q, null, Object(r.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser")) : a.createElement(s.Q, null, Object(r.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
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
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(a.Component),
            g = Object(u.d)("ClipsModalBanUser")(Object(c.b)(function(e) {
                return {
                    channelID: e.broadcasterID
                }
            })(p)),
            h = n("7vx8"),
            v = n("wnjK");

        function f(e) {
            return Object(h.a)(v, e)
        }
        var k = n("LnKh"),
            y = (n("lTii"), this),
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
                    var e = [a.createElement(s.Q, {
                        key: "title",
                        type: s._49.H4
                    }, Object(r.d)("Delete This Clip", "ClipsModalDelete")), a.createElement(s._8, {
                        key: "message",
                        margin: {
                            top: 1
                        }
                    }, a.createElement(s.Q, {
                        type: s._49.P,
                        color: s.K.Alt2
                    }, Object(r.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                    if (!this.props.data.clip) return null;
                    var t = null;
                    this.props.data.clip.curator && (t = a.createElement("span", null, " • ", Object(r.d)("Clipped by {curator}", {
                        curator: this.props.data.clip.curator.login
                    }, "ClipsModalDelete")));
                    var n = a.createElement(s._35, {
                        display: s.R.Flex,
                        flexWrap: s.U.NoWrap
                    }, a.createElement(s._8, {
                        className: "clips-modal-delete__thumb",
                        margin: {
                            right: 1
                        }
                    }, a.createElement(s.k, {
                        ratio: s.l.Aspect16x9
                    }, a.createElement("img", {
                        src: this.props.data.clip.thumbnailURL
                    }))), a.createElement(s._8, null, a.createElement(s.Q, {
                        type: s._49.H5
                    }, this.props.data.clip.title), a.createElement(s.Q, {
                        color: s.K.Alt2
                    }, Object(r.d)("{created, date, medium}", {
                        created: new Date(this.props.data.clip.createdAt)
                    }, "ClipsModalDelete"), t), a.createElement(s.Q, {
                        color: s.K.Alt2
                    }, Object(r.d)("{viewCount, number} views", {
                        viewCount: this.props.data.clip.viewCount
                    }, "ClipsModalDelete"))));
                    return a.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: n,
                        buttonContent: Object(r.d)("Delete", "ClipsModalDelete"),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(a.Component),
            S = Object(h.a)(k)(f({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return i.__awaiter(y, void 0, void 0, function() {
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
                                            throw n = i.sent(), r.j.error(n, "Failed to delete clip"), n;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(_)),
            C = n("3zLD"),
            E = n("wqRA"),
            N = this,
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
                    var e = a.createElement(s.Q, {
                        type: s._49.P
                    }, Object(r.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return a.createElement(d, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: a.createElement(s.Q, {
                            type: s._49.H4
                        }, Object(r.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(r.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(a.Component),
            T = Object(C.compose)(Object(u.d)("ClipsModalDeleteAll"), f({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return i.__awaiter(N, void 0, void 0, function() {
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
                                            throw s = i.sent(), r.j.error(s, "Failed to delete clips from VOD"), s;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            }), Object(h.a)(E, {
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
            D = this,
            L = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            F = function(e) {
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
                    }, n.state = L, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a.createElement(s.Q, {
                            type: s._49.H4
                        }, Object(r.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = a.createElement(s.Q, {
                            type: s._49.P
                        }, Object(r.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return a.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(r.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(a.Component),
            I = f({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return i.__awaiter(D, void 0, void 0, function() {
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
                                            throw t = n.sent(), r.j.error(t, "Failed to delete clips"), t;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(F);
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, "d", function() {
            return S
        }), n.d(t, "e", function() {
            return T
        }), n.d(t, "c", function() {
            return I
        })
    },
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
    vKFS: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("RH2O"),
            s = n("HW6M"),
            l = n("nyge"),
            d = n("Odds"),
            c = (n("Lwev"), function(e) {
                var t, n = e.spriteDetails,
                    i = e.game.toLowerCase(),
                    r = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = i === l.a.CounterStrike, t)),
                    o = i === l.a.CounterStrike ? 40 : 20;
                return a.createElement(d._8, {
                    className: r
                }, a.createElement("div", {
                    style: {
                        backgroundImage: "url(" + n.spriteURL + ")",
                        backgroundPositionX: n.spriteOffsetX ? -1 * n.spriteOffsetX : 0,
                        backgroundPositionY: n.spriteOffsetY ? -1 * n.spriteOffsetY : 0,
                        width: n.imageWidth ? n.imageWidth + "px" : "2rem",
                        height: n.imageWidth ? n.imageHeight + "px" : "2rem",
                        transform: "scale(" + (n.imageWidth > 0 ? o / n.imageWidth : 1) + ")",
                        transformOrigin: "0 0"
                    }
                }))
            }),
            u = n("5DPx"),
            m = (n("nUXg"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        metadataDetails: null
                    }, t.didUnmount = !1, t.loadStreamMetadataDetails = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.props.streamMetadata || !this.props.game) return [3, 4];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, Object(u.b)(this.props.streamMetadata, this.props.game)];
                                    case 2:
                                        if (e = n.sent()) {
                                            if (this.didUnmount) return [2];
                                            this.setState({
                                                metadataDetails: e
                                            })
                                        }
                                        return [3, 4];
                                    case 3:
                                        return t = n.sent(), r.j.error(t, "Failed to get metadata details."), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.loadStreamMetadataDetails()
                }, t.prototype.componentDidUpdate = function(e) {
                    !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? a.createElement(d._8, {
                        className: "preview-card-appendage",
                        display: d.R.Flex
                    }, a.createElement(d._8, {
                        className: "preview-card-appendage__image-wrapper",
                        flexGrow: 0,
                        flexShrink: 0,
                        display: d.R.Flex,
                        alignItems: d.c.Center,
                        justifyContent: d._7.End
                    }, a.createElement("div", null, a.createElement(c, {
                        game: this.props.game,
                        spriteDetails: this.state.metadataDetails.spriteDetails
                    }))), a.createElement(d._35, {
                        flexGrow: 1,
                        flexShrink: 1,
                        borderTop: !0,
                        padding: {
                            y: .5
                        },
                        margin: {
                            left: 1
                        },
                        display: d.R.Flex,
                        overflow: d._11.Hidden
                    }, a.createElement(d._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: d._11.Hidden
                    }, a.createElement(d.Q, {
                        ellipsis: !0
                    }, this.state.metadataDetails.name)), a.createElement(d._8, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(d.Q, null, this.state.metadataDetails.label)))) : null
                }, t
            }(a.Component));
        var p = Object(o.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap
                    }
                }
            })(m),
            g = (n("YVIF"), function(e) {
                var t = a.createElement(d._35, {
                    className: "preview-card-iconic-image__wrapper",
                    borderRadius: d.t.Small,
                    overflow: d._11.Hidden
                }, a.createElement(d.k, {
                    ratio: e.aspect || d.l.BoxArt,
                    align: d.a.Center
                }, a.createElement(d.N, i.__assign({}, e.imageProps))));
                return e.linkTo && (t = a.createElement(d.O, {
                    to: e.linkTo,
                    onClick: e.onClick
                }, t)), t
            });
        g.displayName = "PreviewCardIconicImage";
        n("IJO1");
        var h, v = function(e) {
                var t = .5,
                    n = null;
                return "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachBottom: !0,
                    fullWidth: !0
                }, a.createElement(d._18, {
                    size: d._20.Small,
                    value: e.progressBarPercent,
                    mask: !0
                })), t = 1), a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    fullWidth: !0,
                    fullHeight: !0,
                    className: "preview-card-overlay"
                }, n, a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    margin: 1,
                    "data-test-selector": "top-left-selector"
                }, e.topLeft), a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    attachRight: !0,
                    margin: 1,
                    "data-test-selector": "top-right-selector"
                }, e.topRight), a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-left-selector"
                }, e.bottomLeft), a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachBottom: !0,
                    attachRight: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-right-selector"
                }, e.bottomRight))
            },
            f = (n("BJwU"), function(e) {
                var t = e.icon && a.createElement(d._8, {
                    display: d.R.Flex
                }, a.createElement(d._24, {
                    asset: e.icon,
                    width: 14,
                    height: 14
                }));
                return e.withBackground ? a.createElement(d._35, {
                    alignItems: d.c.Center,
                    background: d.n.Overlay,
                    borderRadius: d.t.Small,
                    className: "preview-card-stat",
                    color: d.K.Overlay,
                    display: d.R.Flex,
                    fontSize: d.V.Size6,
                    justifyContent: d._7.Center
                }, t, a.createElement(d.Q, null, e.value)) : a.createElement(d._35, {
                    className: "preview-card-stat",
                    color: d.K.Overlay,
                    display: d.R.Flex,
                    padding: {
                        x: .5
                    }
                }, t, a.createElement(d.Q, null, e.value))
            }),
            k = n("vKYI"),
            y = (n("jpZi"), 300),
            b = 5e3,
            _ = "preview-card-thumbnail__image-selector",
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1,
                        isLiveVideoPreviewLoaded: !1,
                        isLiveVideoPreviewLoading: !1,
                        isLiveVideoPreviewTimedOut: !1,
                        isHovered: !1
                    }, t.onImageLoad = function(e) {
                        void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                            didAnimatedPreviewLoad: !0
                        })
                    }, t.onImageLoadError = function(e) {
                        void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                            didAnimatedPreviewFailToLoad: !0
                        })
                    }, t.handleFocus = function() {
                        t.clearTimeouts(), t.setState({
                            isHovered: !0
                        }, function() {
                            t.hoverTimeout = setTimeout(function() {
                                t.state.isHovered && t.setState({
                                    isLiveVideoPreviewLoaded: !1,
                                    isLiveVideoPreviewLoading: !0,
                                    isLiveVideoPreviewTimedOut: !1
                                })
                            }, y)
                        })
                    }, t.handleBlur = function() {
                        t.clearTimeouts(), t.setState({
                            isHovered: !1,
                            isLiveVideoPreviewLoaded: !1,
                            isLiveVideoPreviewLoading: !1,
                            isLiveVideoPreviewTimedOut: !1
                        })
                    }, t.onLivePreviewLoaded = function() {
                        t.clearTimeouts(), t.state.isHovered && (t.setState({
                            isLiveVideoPreviewLoaded: !0,
                            isLiveVideoPreviewLoading: !1
                        }), t.createPreviewTimeout())
                    }, t.createPreviewTimeout = function() {
                        t.previewTimeout && window.clearTimeout(t.previewTimeout), t.previewTimeout = setTimeout(function() {
                            t.state.isHovered && t.setState({
                                isLiveVideoPreviewLoaded: !1,
                                isLiveVideoPreviewLoading: !1,
                                isLiveVideoPreviewTimedOut: !0
                            })
                        }, b)
                    }, t.clearTimeouts = function() {
                        t.hoverTimeout && window.clearTimeout(t.hoverTimeout), t.createPreviewTimeout && window.clearTimeout(t.previewTimeout)
                    }, t.shouldShowLiveVideoPreview = function() {
                        return !!t.props.liveChannelLogin && t.state.isHovered && (t.state.isLiveVideoPreviewLoaded || t.state.isLiveVideoPreviewLoading) && !t.state.isLiveVideoPreviewTimedOut
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.clearTimeouts()
                }, t.prototype.render = function() {
                    var e = {};
                    return (this.props.animatedImageProps || this.props.liveChannelLogin) && (e = {
                        onMouseEnter: this.handleFocus,
                        onMouseLeave: this.handleBlur,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    }), a.createElement("div", i.__assign({}, e, {
                        onClick: this.props.onClick
                    }), this.renderLoadingSpinner(), a.createElement(d._35, {
                        background: d.n.Alt2
                    }, a.createElement(d.k, {
                        ratio: this.props.aspectRatio
                    }, this.renderImage())))
                }, t.prototype.renderImage = function() {
                    var e, t, n = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                        r = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e["preview-card-thumbnail__image--hidden"] = this.shouldShowLiveVideoPreview() && this.state.isLiveVideoPreviewLoaded, e));
                    return this.shouldShowLiveVideoPreview() ? [a.createElement("div", {
                        key: "player-key",
                        className: s((t = {}, t["preview-card-thumbnail__image--hidden"] = !this.state.isLiveVideoPreviewLoaded, t))
                    }, a.createElement(k.a, {
                        channelLogin: this.props.liveChannelLogin || void 0,
                        onPlayerPlaying: this.onLivePreviewLoaded
                    })), a.createElement("div", {
                        key: "image-key",
                        className: r
                    }, a.createElement(d.N, i.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": _
                    })))] : n && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                        className: r
                    }, a.createElement(d.N, i.__assign({}, this.props.animatedImageProps, {
                        onLoad: this.onImageLoad,
                        onError: this.onImageLoadError,
                        "data-test-selector": _
                    }))) : a.createElement("div", {
                        className: r
                    }, a.createElement(d.N, i.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": _
                    })))
                }, t.prototype.renderLoadingSpinner = function() {
                    if (this.shouldShowLiveVideoPreview() && !this.state.isLiveVideoPreviewLoaded) return a.createElement(d._35, {
                        attachRight: !0,
                        attachTop: !0,
                        background: d.n.Overlay,
                        borderRadius: d.t.Small,
                        color: d.K.OverlayAlt,
                        margin: .5,
                        padding: .5,
                        position: d._15.Absolute,
                        zIndex: d._62.Above
                    }, a.createElement(d._10, {
                        fillContent: !0,
                        inheritColor: !0,
                        size: d._33.Small,
                        delay: 0
                    }))
                }, t
            }(a.Component),
            C = (n("ea7N"), function(e) {
                var t = null;
                return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                    return a.createElement(d._8, {
                        key: t,
                        "data-test-selector": "preview-card-titles__subtitle"
                    }, a.createElement(d.Q, {
                        color: d.K.Alt,
                        ellipsis: !0
                    }, "string" == typeof e ? e : a.createElement(d.O, {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: d.P.Inherit
                    }, e.text)))
                })), a.createElement("div", null, a.createElement(d.O, {
                    to: e.linkTo,
                    onClick: e.onClick,
                    type: d.P.Inherit,
                    "data-test-selector": "preview-card-titles__primary-link"
                }, a.createElement(d.Q, {
                    type: d._49.H3,
                    fontSize: d.V.Size5,
                    lines: 1,
                    bold: !0,
                    ellipsis: !0
                }, e.title)), a.createElement(d._8, {
                    className: "preview-card-titles__subtitle-wrapper"
                }, t))
            }),
            E = n("IOwa"),
            N = n("mi6k"),
            w = n("Tg4T");

        function O(e) {
            return void 0 !== e.streamType
        }

        function T(e) {
            return void 0 !== e.watchedProgressPercent
        }

        function D(e) {
            return void 0 !== e.clipCreatedByChannelLogin
        }! function(e) {
            e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
        }(h || (h = {}));
        var L = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement("div", {
                    className: "preview-card"
                }, a.createElement(d._8, {
                    position: d._15.Relative
                }, T(this.props) && a.createElement(w.a, {
                    videoID: this.props.videoID || "",
                    restriction: this.props.restriction,
                    attachTop: !0
                }), a.createElement(d.O, {
                    to: this.props.thumbnailLinkTo || this.props.linkTo,
                    onClick: this.props.onThumbnailClick || this.props.onClick
                }, this.props.thumbnailImageProps && a.createElement(S, {
                    staticImageProps: this.props.thumbnailImageProps,
                    animatedImageProps: T(this.props) && this.props.animatedImageProps || void 0,
                    liveChannelLogin: O(this.props) && this.props.enableLivePreview ? this.props.channelLogin : null
                }), this.renderOverlay())), a.createElement(d._8, {
                    display: d.R.Flex,
                    flexWrap: d.U.NoWrap,
                    margin: {
                        top: 1
                    }
                }, a.createElement(d._8, {
                    flexGrow: 0,
                    flexShrink: 0
                }, this.renderIconicImage()), a.createElement(d._8, {
                    flexGrow: 1,
                    flexShrink: 1,
                    overflow: d._11.Hidden
                }, this.renderTitles())), this.renderAppendages())
            }, t.prototype.renderOverlay = function() {
                return O(this.props) ? a.createElement(v, {
                    topLeft: a.createElement(E.a, {
                        type: this.props.streamType,
                        hosting: !!this.props.hostedByChannelLogin
                    }),
                    topRight: void 0,
                    bottomLeft: a.createElement(f, {
                        value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                            viewerCount: this.props.currentViewerCount
                        }, "VideoPreviewCard")
                    }),
                    bottomRight: void 0
                }) : T(this.props) ? a.createElement(v, {
                    topLeft: a.createElement(f, {
                        value: Object(N.b)(this.props.durationInSeconds),
                        icon: d._25.GlyphArrRight,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: a.createElement(f, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: a.createElement(f, {
                        value: Object(r.c)(new Date(this.props.datePublished), "medium")
                    }),
                    progressBarPercent: this.props.watchedProgressPercent
                }) : D(this.props) ? a.createElement(v, {
                    topLeft: a.createElement(f, {
                        value: Object(N.b)(this.props.durationInSeconds),
                        icon: d._25.Clip,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: a.createElement(f, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: a.createElement(f, {
                        value: Object(r.c)(new Date(this.props.datePublished), "medium")
                    })
                }) : void 0
            }, t.prototype.getViewCountLabel = function() {
                return T(this.props) || D(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                    viewerCount: this.props.viewCount
                }, "VideoPreviewCard") : ""
            }, t.prototype.renderIconicImage = function() {
                return this.props.context === h.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(d._8, {
                    margin: {
                        right: 1
                    }
                }, a.createElement(g, {
                    imageProps: this.props.gameBoxArtImageProps,
                    linkTo: this.props.gameBoxArtImageLinkTo || this.props.gameTitleLinkTo,
                    onClick: this.props.gameTitleOnClick,
                    aspect: d.l.BoxArt
                })) : (this.props.context === h.SingleGameList || this.props.context === h.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(d._8, {
                    margin: {
                        right: 1
                    }
                }, a.createElement(g, {
                    imageProps: this.props.channelImageProps,
                    linkTo: this.props.channelImageLinkTo || this.props.channelLoginLinkTo,
                    onClick: this.props.channelLoginOnClick,
                    aspect: d.l.Aspect1x1
                })) : void 0
            }, t.prototype.renderTitles = function() {
                var e = [{
                    text: this.props.channelLogin,
                    linkTo: this.props.channelLoginLinkTo,
                    onClick: this.props.channelLoginOnClick
                }];
                return D(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? e.push({
                    text: Object(r.d)("Clipped by {userName}", {
                        userName: this.props.clipCreatedByChannelLogin || ""
                    }, "VideoPreviewCard"),
                    linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                    onClick: this.props.clipCreatedByChannelLoginOnClick
                }) : this.props.context !== h.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && e.push({
                    text: this.props.gameTitle,
                    linkTo: this.props.gameTitleLinkTo,
                    onClick: this.props.gameTitleOnClick
                }), a.createElement(C, {
                    title: this.props.title,
                    onClick: this.props.onVideoTitleClick || this.props.onClick,
                    linkTo: this.props.videoTitleLinkTo || this.props.linkTo,
                    subtitles: e
                })
            }, t.prototype.renderAppendages = function() {
                if (this.props.playerMetadata && this.props.playerMetadataGame) return a.createElement(p, {
                    streamMetadata: this.props.playerMetadata,
                    game: this.props.playerMetadataGame
                })
            }, t
        }(a.Component);
        n.d(t, "b", function() {
            return h
        }), n.d(t, "a", function() {
            return L
        })
    },
    vKYI: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("BwgW"),
            r = n("GiK3"),
            o = n("CSlQ"),
            s = n("fc0G"),
            l = n("L3z0"),
            d = n("5MsU"),
            c = {
                autoplay: !0,
                branding: !1,
                channelInfo: !1,
                controls: !1,
                height: "100%",
                playsinline: !0,
                player: s.b.AnimatedThumbnails,
                showInfo: !1,
                trackingProperties: {
                    client_app: "twilight"
                },
                width: "100%",
                oauth_token: ""
            };

        function u() {
            return !!window.Twitch && !!window.Twitch.Player
        }
        var m = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.checkPlayerDependencyStatus = function() {
                    u() ? (n.setState({
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
                    canInitializePlayer: u(),
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
                return r.createElement("div", {
                    className: "video-player",
                    "data-test-selector": "thumbnail-video-player"
                }, r.createElement("div", {
                    className: "video-player__container",
                    ref: this.attachRef
                }))
            }, t.prototype.componentWillUnmount = function() {
                var e = this;
                this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), window.removeEventListener("beforeunload", function() {
                    return e.resetVolume()
                }), this.resetVolume(), this.player && (this.player.removeEventListener(d.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(l.a.Play, this.onPlayerPlay), this.player.removeEventListener(l.a.Playing, this.onPlayerPlaying), a.extensionService.unregisterPlayer(), this.player.destroy())
            }, t.prototype.initializePlayer = function() {
                var e = c;
                this.props.channelLogin && (e.channel = this.props.channelLogin);
                var t = new window.Twitch.Player(this.playerRef, e);
                this.player = t, t.addEventListener(d.a.PlayerReady, this.onPlayerReady), t.addEventListener(l.a.Play, this.onPlayerPlay), t.addEventListener(l.a.Playing, this.onPlayerPlaying), a.extensionService.registerPlayer(this.player)
            }, t.prototype.resetVolume = function() {
                this.userVolumeSetting && window.localStorage.setItem("volume", this.userVolumeSetting), this.userMuteSetting && window.localStorage.setItem("muted", this.userMuteSetting)
            }, t.tagInjected = !1, t = n = i.__decorate([Object(o.d)("LiveChannelPreviewCard")], t);
            var n
        }(r.Component);
        n.d(t, !1, function() {
            return "thumbnail-video-player"
        }), n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return m
        })
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
                return Object(a.d)("The provided image does not have the required dimensions.", "ImageUploader")
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
//# sourceMappingURL=pages.directory-game-7b22077a41be6d3f13c7a2fa7e97843c.js.map