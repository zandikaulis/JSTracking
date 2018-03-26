webpackJsonp([52, 77], {
    "+GT7": function(e, t, n) {
        "use strict";
        var a, r = n("TToO"),
            i = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2"),
            l = n("IOwa"),
            c = n("RH2O"),
            d = n("2KeS"),
            u = n("PPNL"),
            m = n("HW6M"),
            p = n("YUUt"),
            h = n.n(p),
            g = n("/SNv"),
            f = n.n(g),
            v = n("Vr3l"),
            y = n.n(v);
        ! function(e) {
            e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
        }(a || (a = {}));
        var _ = n("LgcN"),
            k = function(e) {
                try {
                    return decodeURIComponent(e)
                } catch (e) {
                    return null
                }
            },
            b = n("Odds"),
            w = (n("AHWf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1,
                        game: ""
                    }, t.logger = s.o.logger.withCategory("metadata-icon"), t.didUnmount = !1, t.loadData = function() {
                        if (!t.state.isLoading && !t.state.isError && t.props.streamMetadata && !t.state.content) {
                            var e = k(t.props.match.params.encodedCommunityName);
                            if (e) {
                                var n = e.toLowerCase(),
                                    r = t.props.streamMetadata.counterStrikeGlobalOffensive && t.props.streamMetadata.counterStrikeGlobalOffensive.skill,
                                    i = t.props.streamMetadata.hearthstone && t.props.streamMetadata.hearthstone.broadcasterHeroClass,
                                    o = t.props.streamMetadata.leagueOfLegends && t.props.streamMetadata.leagueOfLegends.championID,
                                    s = t.props.streamMetadata.overwatch && t.props.streamMetadata.overwatch.broadcasterCharacter;
                                r && n === a.CounterStrike ? (t.setState({
                                    game: n,
                                    gameSprite: h.a,
                                    item: String(r),
                                    isLoading: !0
                                }), t.getCounterStrikeData(r)) : i && n === a.Hearthstone ? (t.setState({
                                    game: n,
                                    gameSprite: f.a,
                                    item: i,
                                    isLoading: !0
                                }), t.getHearthstoneData()) : o && n === a.LeagueOfLegends ? (t.setState({
                                    game: n,
                                    item: String(o)
                                }), t.getLeagueData()) : s && n === a.Overwatch && (t.setState({
                                    game: n,
                                    gameSprite: y.a,
                                    item: s,
                                    isLoading: !0
                                }), t.getOverwatchData())
                            }
                        }
                    }, t.renderIcon = function(e, n, r, o, s, l) {
                        if (!r) return null;
                        var c = m("metadata-icon", {
                                "metadata-icon--csgo-skill": t.state.game === a.CounterStrike
                            }),
                            d = 30;
                        return t.state.game === a.CounterStrike && (d = 50), i.createElement(b._6, {
                            display: b.P.Flex,
                            flexDirection: b.R.Column,
                            alignItems: b.c.Center,
                            justifyContent: b._5.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(b._46, {
                            direction: b._48.Left,
                            label: e
                        }, i.createElement(b._6, {
                            className: c
                        }, i.createElement("div", {
                            style: {
                                backgroundImage: "url(" + n + ")",
                                backgroundPositionX: s ? -1 * s : 0,
                                backgroundPositionY: l ? -1 * l : 0,
                                width: r ? r + "px" : "3rem",
                                height: r ? o + "px" : "3rem",
                                transform: "scale(" + (r > 0 ? d / r : 1) + ")",
                                transformOrigin: "0 0"
                            }
                        }))))
                    }, t.getCounterStrikeData = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, n, a;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, Object(_.a)()];
                                    case 1:
                                        return t = r.sent(), this.didUnmount ? [2] : ((n = {})[e] = t[0]["Skill Group"][e - 1], this.setState({
                                            content: n
                                        }), [3, 3]);
                                    case 2:
                                        return a = r.sent(), this.logger.error(a, "Failed to load Counter-Strike skill group data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.getHearthstoneData = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, Object(_.b)()];
                                    case 1:
                                        return e = a.sent(), this.didUnmount ? [2] : (t = {}, e[0].Class.forEach(function(e) {
                                            t[e.class] = e
                                        }), this.setState({
                                            content: t,
                                            isLoading: !1
                                        }), [3, 3]);
                                    case 2:
                                        return n = a.sent(), this.logger.error(n, "Failed to load Hearthstone class data"), this.setState({
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
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a, i, o, s, l, c, d, u, m, p;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, Object(_.d)()];
                                    case 1:
                                        if (e = r.sent(), this.didUnmount) return [2];
                                        for (t = !1, n = void 0, a = 0, i = e; a < i.length && (n = i[a], !t); a++)
                                            for (o in n)
                                                if (n.hasOwnProperty(o))
                                                    for (s = n[o], l = 0, c = s; l < c.length; l++)
                                                        if ((d = c[l]).character === this.state.item) {
                                                            (p = {})[d.character] = d, u = p, this.setState({
                                                                content: u,
                                                                isLoading: !1
                                                            }), t = !0;
                                                            break
                                                        }
                                        return [3, 3];
                                    case 2:
                                        return m = r.sent(), this.logger.error(m, "Failed to load Overwatch character data"), this.setState({
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.loadData()
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    if (!this.state.item) return null;
                    if (this.state.game === a.LeagueOfLegends) {
                        if (!this.props.leagueOfLegends.championsMap) return null;
                        var e = this.props.leagueOfLegends.championsMap[this.state.item],
                            t = "https://ddragon.leagueoflegends.com/cdn/" + this.props.leagueOfLegends.version + "/img/sprite/" + e.image.sprite;
                        return this.renderIcon(e.name, t, e.image.w, e.image.h, e.image.x, e.image.y)
                    }
                    var n = this.state.content && this.state.content[this.state.item];
                    return n ? this.renderIcon(n.display_name, this.state.gameSprite || "", n.image_width, n.image_height, n.sprite_x_offset, n.sprite_y_offset) : null
                }, t
            }(i.Component)),
            S = Object(o.f)(w);
        var E = Object(c.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap,
                        isError: e.directory.leagueOfLegends.isError,
                        isLoading: e.directory.leagueOfLegends.isLoading,
                        version: e.directory.leagueOfLegends.version
                    }
                }
            }, function(e) {
                return Object(d.b)({
                    onLoadLeagueOfLegendsChampions: u.a
                }, e)
            })(S),
            C = (n("LEV+"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isPremiereExperimentActive: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
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
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = i.createElement(b._6, {
                        display: b.P.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, i.createElement(b._10, {
                        label: Object(s.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(s.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: i.createElement(o.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return i.createElement("div", r.__assign({
                        className: "live-channel-card"
                    }, Object(b._56)(this.props)), i.createElement(b.B, {
                        key: this.props.title
                    }, i.createElement(b._6, {
                        fullWidth: !0
                    }, i.createElement(b.j, {
                        overflow: !0
                    }, i.createElement("div", null, i.createElement(o.a, {
                        to: this.props.linkTo,
                        title: this.props.hideTooltip ? void 0 : this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link",
                        "data-test-selector": "live-channel-card-link-selector"
                    }, this.props.children ? this.props.children : i.createElement(b.D, {
                        alt: this.props.imageAlt,
                        src: this.props.imageSrc,
                        aspect: b.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), i.createElement(b.C, null, i.createElement(b._6, {
                        display: b.P.Flex,
                        flexWrap: b.S.NoWrap
                    }, i.createElement(b._6, {
                        flexGrow: 1,
                        ellipsis: !0
                    }, i.createElement(o.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, i.createElement(b._0, {
                        margin: {
                            top: .5
                        }
                    }, i.createElement(b.O, {
                        type: b._43.H3,
                        fontSize: b.T.Size5,
                        lineHeight: b._7.Body,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), i.createElement(b._6, {
                        className: "live-channel-card__meta",
                        display: b.P.Flex,
                        flexWrap: b.S.NoWrap
                    }, e, i.createElement(b.O, {
                        type: b._43.Span,
                        ellipsis: !0
                    }, t))), i.createElement(b._6, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, this.renderStreamMetadata())))))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? i.createElement(o.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, i.createElement(b._29, {
                        className: "live-channel-card__boxart",
                        position: b._13.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, i.createElement(b._46, {
                        display: b.P.Block,
                        direction: b._48.Bottom,
                        label: t
                    }, i.createElement(b.D, {
                        src: n,
                        alt: t,
                        aspect: b.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? i.createElement(b._6, {
                        position: b._13.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, i.createElement(l.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? i.createElement(E, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(i.Component)),
            O = C;
        n.d(t, !1, function() {
            return "live-channel-card-link-selector"
        }), n.d(t, !1, function() {
            return C
        }), n.d(t, "a", function() {
            return O
        })
    },
    "+I3D": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("6sO2"),
            o = n("CSlQ"),
            s = n("XhYx"),
            l = n("2qz3"),
            c = n("Odds"),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onFollow = function() {
                        t.props.onFollowCategoryChange(t.props.category, !0)
                    }, t.onUnfollow = function() {
                        t.props.onFollowCategoryChange(t.props.category, !1)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (this.props.isFollowingAllGamesInCategory) return r.createElement(c.v, {
                        ariaLabel: Object(i.d)("Unfollow All", "OnboardingFollowCategory"),
                        "data-test-selector": "onboarding-follow-category-button-component",
                        icon: c._20.Heart,
                        onClick: this.onUnfollow,
                        statusAlertIcon: c._20.Unheart
                    });
                    var e = Object(i.d)("Follow All", "OnboardingFollowCategory");
                    return r.createElement(c.u, {
                        icon: c._20.Heart,
                        ariaLabel: e,
                        "data-test-selector": "onboarding-follow-category-button-component",
                        onClick: this.onFollow
                    }, e)
                }, t
            }(r.Component),
            u = n("DBTH"),
            m = n("v5ho"),
            p = 3,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        categoryChange: null,
                        isFollowCategoriesExperimentEnabled: !1
                    }, t.renderCategoryContent = function() {
                        if (t.props.withStreams) {
                            var e = t.props.data.games.slice(0, p);
                            return r.createElement(l.a, {
                                names: e,
                                withAd: t.props.withAd,
                                directoryType: m.a.Games,
                                trackingMedium: t.props.trackingMedium
                            })
                        }
                        var n = void 0;
                        return t.props.withStreams || t.props.withBoxArtGameCards || (n = {
                            category: t.props.data.name,
                            categoryChange: t.state.categoryChange,
                            onFollow: t.props.onFollow,
                            onUnfollow: t.props.onUnfollow
                        }), r.createElement(s.a, {
                            names: t.props.data.games,
                            directoryType: m.a.Games,
                            cardSize: t.props.cardSize,
                            withAd: t.props.withAd,
                            followGameCardOptions: n,
                            isScrollable: !0
                        })
                    }, t.onFollowCategoryChange = function(e, n) {
                        t.setState({
                            categoryChange: {
                                timestampMs: Date.now(),
                                shouldFollow: n,
                                category: e
                            }
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, i.o.experiments.getAssignment(u.k)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        isFollowCategoriesExperimentEnabled: e === u.d.ENABLED
                                    }), this.props.latencyTracking.reportInteractive(), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return r.createElement(c._6, {
                        "data-test-selector": "community-category",
                        flexShrink: 0
                    }, r.createElement(c._6, {
                        alignItems: c.c.Center,
                        display: c.P.Flex,
                        flexWrap: c.S.NoWrap
                    }, r.createElement(c._6, {
                        margin: {
                            x: 1,
                            bottom: .5
                        }
                    }, r.createElement(c.O, {
                        "data-test-selector": "community-category__title",
                        color: c.J.Base,
                        fontSize: c.T.Size3,
                        bold: !0
                    }, function(e) {
                        switch (e) {
                            case "MOBA":
                                return Object(i.d)("MOBA", "format-category");
                            case "Survival":
                                return Object(i.d)("Survival", "format-category");
                            case "Sandbox":
                                return Object(i.d)("Sandbox", "format-category");
                            case "Strategy":
                                return Object(i.d)("Strategy", "format-category");
                            case "FPS":
                                return Object(i.d)("FPS", "format-category");
                            case "Open World":
                                return Object(i.d)("Open World", "format-category");
                            case "MMORPG":
                                return Object(i.d)("MMORPG", "format-category");
                            case "Science Fiction":
                                return Object(i.d)("Science Fiction", "format-category");
                            case "Hack and Slash":
                                return Object(i.d)("Hack and Slash", "format-category");
                            case "Sports":
                                return Object(i.d)("Sports", "format-category");
                            case "Platform":
                                return Object(i.d)("Platform", "format-category");
                            case "Indie":
                                return Object(i.d)("Indie", "format-category");
                            case "RPG":
                                return Object(i.d)("RPG", "format-category");
                            case "Stealth":
                                return Object(i.d)("Stealth", "format-category");
                            case "Horror":
                                return Object(i.d)("Horror", "format-category");
                            case "Third-Person Shooter":
                                return Object(i.d)("Third-Person Shooter", "format-category");
                            case "Fighting":
                                return Object(i.d)("Fighting", "format-category");
                            case "Historical":
                                return Object(i.d)("Historical", "format-category");
                            case "Music":
                                return Object(i.d)("Music", "format-category");
                            case "Simulator":
                                return Object(i.d)("Simulator", "format-category");
                            case "Adventure":
                                return Object(i.d)("Adventure", "format-category");
                            case "Anime":
                                return Object(i.d)("Anime", "format-category");
                            case "Party":
                                return Object(i.d)("Party", "format-category");
                            case "Rogue-like":
                                return Object(i.d)("Rogue-like", "format-category");
                            case "Racing":
                                return Object(i.d)("Racing", "format-category");
                            case "Puzzle":
                                return Object(i.d)("Puzzle", "format-category");
                            default:
                                return e
                        }
                    }(this.props.data.name))), this.state.isFollowCategoriesExperimentEnabled && !this.props.withStreams && !this.props.withBoxArtGameCards && r.createElement(c._29, {
                        margin: {
                            left: 2
                        }
                    }, r.createElement(d, {
                        category: this.props.data,
                        onFollowCategoryChange: this.onFollowCategoryChange,
                        isFollowingAllGamesInCategory: this.props.isFollowingAllGamesInCategory
                    }))), r.createElement(c._6, null, r.createElement(c._0, {
                        flexGrow: 1
                    }, this.renderCategoryContent())))
                }, t
            }(r.Component),
            g = Object(o.d)("CommunityCategory")(h);
        n.d(t, !1, function() {
            return "community-category"
        }), n.d(t, !1, function() {
            return "community-category__title"
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, "a", function() {
            return g
        })
    },
    "/+to": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            r = n("TToO"),
            i = n("GiK3"),
            o = n("6sO2"),
            s = n("5kgt"),
            l = n("Us7i"),
            c = n("QG7y"),
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            m = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = o.j.withCategory("ad-slot"), n.createSlot = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = n.sent(), Object(c.h)(t.getSlotElementId()), this.setState({
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
                            if (n.props.slotID === c.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            var a;
                            if (n.props.slotID === c.b.directory.banner) return void((a = n.slotRef.querySelector(d)) && 1 !== a.clientWidth && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === c.b.directory.rectangle) return void((a = n.slotRef.querySelector(u)) && 1 !== a.clientWidth && n.setState({
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.g.addListener(c.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet && !this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = r.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), i.createElement("div", r.__assign({
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    }, Object(s.a)(this.props)))
                }, t
            }(i.Component);
        var p = Object(a.b)(function(e) {
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
    "2b/B": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            r = n("2KeS"),
            i = n("+xm8"),
            o = n("f2i/"),
            s = n("NikC"),
            l = n("Aj/L"),
            c = n("TToO"),
            d = n("HW6M"),
            u = n("GiK3"),
            m = n("6sO2"),
            p = n("rCmJ"),
            h = n("7vx8"),
            g = n("NXs7"),
            f = n("VAT8"),
            v = n("CSlQ"),
            y = n("Odds"),
            _ = n("Kkxm"),
            k = (n("e6tx"), function(e) {
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
                    }, n.onLoginClick = function(e) {
                        e.preventDefault(), n.props.login()
                    }, n.onLogoutClick = function(e) {
                        e.preventDefault(), n.props.logout()
                    }, n.onDarkModeCheckboxClick = function() {
                        var e = n.props.theme === g.a.Dark ? g.a.Light : g.a.Dark;
                        n.props.changeTheme(e, s.a.UserMenu)
                    }, n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return u.createElement(y._12, null);
                    if (this.props.isOnboarding) return u.createElement(y._6, {
                        display: y.P.Flex,
                        className: "minimal-top-nav__user",
                        fullHeight: !0
                    }, u.createElement(y._6, {
                        display: y.P.Flex,
                        flexWrap: y.S.NoWrap,
                        alignItems: y.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0
                    }, u.createElement(y._6, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, u.createElement(y._6, null, u.createElement(y.l, {
                        size: 30,
                        src: this.props.data.currentUser.profileImageURL,
                        alt: "User avatar"
                    }))), u.createElement(y._6, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: y.R.Column,
                        ellipsis: !0
                    }, u.createElement(y._29, {
                        className: "minimal-top-nav__username"
                    }, this.props.data.currentUser.displayName))));
                    if (this.props.isLoggedIn) {
                        var e = null;
                        this.props.darkModeEnabled && (e = u.createElement(y._29, {
                            borderBottom: !0,
                            margin: {
                                y: 1
                            }
                        }, u.createElement(y._6, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, u.createElement(y.I, {
                            id: "dark-mode-toggle",
                            label: Object(m.d)("Dark Mode", "MinimalUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === g.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }))));
                        var t = d(Object(f.c)(g.a.Dark), {
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }),
                            n = d({
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }, {
                                "minimal-top-nav__dropdown": !this.state.dropdownOpen
                            });
                        return u.createElement(p.a, {
                            onClickOut: this.onClickOut,
                            className: t
                        }, u.createElement(y._6, {
                            display: y.P.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, u.createElement(y._4, {
                            onClick: this.onCardClick,
                            "data-test-selector": "user-menu-toggle"
                        }, u.createElement(y._6, {
                            display: y.P.Flex,
                            flexWrap: y.S.NoWrap,
                            alignItems: y.c.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, u.createElement(y._6, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, u.createElement(y._6, null, u.createElement(y.l, {
                            size: 30,
                            src: this.props.data.currentUser.profileImageURL,
                            alt: "User avatar"
                        }))), u.createElement(y._6, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: y.R.Column,
                            ellipsis: !0
                        }, u.createElement(y._29, {
                            className: "minimal-top-nav__username"
                        }, this.props.data.currentUser.displayName)), u.createElement(y._29, {
                            display: y.P.Flex,
                            flexShrink: 0,
                            className: "minimal-top-nav__expand"
                        }, u.createElement(y._19, {
                            asset: y._20.GlyphArrDown
                        }))))), u.createElement(y._29, {
                            fullWidth: !0,
                            overflow: y._9.Hidden,
                            position: y._13.Absolute,
                            padding: {
                                y: 1
                            },
                            background: y.m.Base,
                            className: n,
                            "data-test-selector": "dropdown-down"
                        }, e, u.createElement(y._4, {
                            onClick: this.onLogoutClick
                        }, u.createElement(y._29, {
                            color: y.J.Alt,
                            display: y.P.Flex,
                            alignItems: y.c.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, u.createElement(y._6, {
                            display: y.P.Flex,
                            alignItems: y.c.Center,
                            margin: {
                                right: 1
                            }
                        }, u.createElement(y._19, {
                            asset: y._20.NavLogout,
                            height: 18,
                            width: 18
                        })), u.createElement(y.O, null, Object(m.d)("Log Out", "MinimalUser"))))))
                    }
                    return u.createElement(y._6, {
                        margin: 1
                    }, u.createElement(y.u, {
                        onClick: this.onLoginClick
                    }, Object(m.d)("Log in", "MinimalUser")))
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(v.d)("MinimalUser"), Object(h.a)(_)], t)
            }(u.Component));
        var b = Object(a.b)(function(e) {
            return {
                isLoggedIn: Object(l.d)(e),
                theme: e.ui.theme
            }
        }, function(e) {
            return Object(r.b)({
                logout: o.g,
                login: function() {
                    return o.f(i.a.TopNavLoginButton)
                },
                changeTheme: s.b
            }, e)
        })(k);
        n.d(t, "a", function() {
            return b
        })
    },
    "2qz3": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("/+to"),
            o = n("QG7y"),
            s = n("CSlQ"),
            l = n("7vx8"),
            c = n("jkA6"),
            d = n("7tMz"),
            u = n("IOwa"),
            m = n("2o2f"),
            p = n("KSGD"),
            h = n("6sO2"),
            g = n("S4HN"),
            f = n("AadB"),
            v = n("Odds"),
            y = function(e) {
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
                            action: g.a.Impression,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(g.c)(e)
                    }, t.trackClickEvent = function() {
                        var e = {
                            channel_id: t.props.streamNode.id,
                            action: g.a.Click,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(g.c)(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : h.j.warn("<StreamThumbnailWithTrackingComponent /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return r.createElement("div", {
                        onClick: this.trackClickEvent
                    }, r.createElement(v._6, {
                        refDelegate: this.setRef
                    }, r.createElement(f.b, {
                        key: this.props.streamIndex,
                        directoryName: this.props.directoryName,
                        directoryType: this.props.directoryType,
                        streamIndex: this.props.streamIndex,
                        streamNode: this.props.streamNode,
                        trackingMedium: this.props.trackingMedium
                    })))
                }, t.prototype.checkVisible = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            return !this.impressionEventFired && this.isVisible(e) && (this.trackImpression(), this.impressionEventFired = !0), [2]
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: p.func
                }, t
            }(r.Component),
            _ = "community-stream__placeholder",
            k = "community-stream",
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderStream = function() {
                        return t.props.data ? r.createElement(v._6, {
                            "data-test-selector": k,
                            position: v._13.Relative
                        }, r.createElement(v._6, {
                            padding: .5,
                            position: v._13.Absolute,
                            zIndex: v._55.Above
                        }, r.createElement(u.a, {
                            type: m.a.Live
                        })), r.createElement(y, {
                            key: t.props.data.id,
                            trackingMedium: t.props.trackingMedium,
                            directoryName: t.props.directoryName,
                            directoryType: t.props.directoryType,
                            streamIndex: t.props.index,
                            streamNode: t.props.data
                        })) : r.createElement(v._6, {
                            "data-test-selector": _,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(v._6, {
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(v.j, {
                            ratio: v.k.Aspect16x9
                        }, r.createElement(v._12, null))), r.createElement(v.O, null, r.createElement(v._12, {
                            width: 150
                        })), r.createElement(v.O, {
                            fontSize: v.T.Size7
                        }, r.createElement(v._12, {
                            width: 100
                        })))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(v._6, null, this.renderStream())
                }, t
            }(r.Component),
            w = n("eqtY"),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
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
                    return r.createElement(b, {
                        data: e,
                        index: this.props.index,
                        directoryName: t,
                        directoryType: this.props.directoryType,
                        trackingMedium: this.props.trackingMedium
                    })
                }, t = a.__decorate([Object(l.a)(w, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.name,
                                limit: e.limit ? e.limit : 3,
                                type: Object(c.a)(e.directoryType)
                            }
                        }
                    }
                }), Object(d.a)("CommunityStream")], t)
            }(r.Component),
            E = "community-streams-row__ad",
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.renderStreamGridWithAdSlot = function() {
                        var e = r.createElement(v._6, {
                                key: "ad",
                                "data-test-selector": E,
                                display: v.P.Flex,
                                flexGrow: 1,
                                justifyContent: v._5.Center,
                                padding: {
                                    bottom: t.state.adDisplayed ? 2 : 0,
                                    left: t.state.adDisplayed ? .5 : 0
                                }
                            }, r.createElement(i.a, {
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
                                return r.createElement(v.K, {
                                    key: "stream-" + t.toString(),
                                    cols: 4
                                }, e)
                            });
                        return n.splice(2, 0, e), r.createElement(v._6, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(v.W, {
                            gutterSize: v.X.Medium
                        }, n))
                    }, t.renderStreams = function() {
                        if (t.props.data) {
                            var e = t.props.data;
                            return t.props.withAd && t.state.adDisplayed && (e = e.slice(0, 2)), e.map(function(e, n) {
                                return r.createElement(b, {
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
                                return r.createElement(S, {
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.withAd) return this.renderStreamGridWithAdSlot();
                    var e = this.props.data && 1 === this.props.data.length || this.props.names && 1 === this.props.names.length ? 1 : 0;
                    return r.createElement(v._6, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(v._49, {
                        gutterSize: v._51.Small,
                        childWidth: v._50.Large,
                        placeholderItems: e,
                        noWrap: !0
                    }, this.renderStreams()))
                }, t
            }(r.Component),
            O = Object(s.d)("CommunityStreamsRow")(C);
        n.d(t, !1, function() {
            return E
        }), n.d(t, !1, function() {
            return C
        }), n.d(t, "a", function() {
            return O
        })
    },
    "508y": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityCard_CommunityDetails"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 172
            }
        };
        n.loc.source = {
            body: "query CommunityCard_CommunityDetails($name: String! $type: DirectoryType!) {\ndirectory(name: $name type: $type) {\nid\nname\navatarURL(width: 285 height: 380)\nviewersCount\n}\n}",
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
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("7vx8"),
            o = n("oIkB"),
            s = n("LIeg");

        function l(e, t, n, a) {
            void 0 === n && (n = {});
            var r = e.readQuery({
                query: t,
                variables: n
            });
            if (r) {
                var i = s(r, function(e) {
                    return e
                }, function(e) {
                    return a(e)
                });
                e.writeQuery({
                    query: t,
                    variables: n,
                    data: i
                })
            }
        }
        var c = n("Odds"),
            d = n("xGL+"),
            u = n("E+ZP"),
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
                !e.categoryChange || this.props.categoryChange && this.props.categoryChange.timestampMs === e.categoryChange.timestampMs || !e.categoryChange.category.games.includes(this.props.title) || this.isFollowing() !== e.categoryChange.shouldFollow && this.onClick()
            }, t.prototype.render = function() {
                var e;
                return this.state.inProgress ? e = r.createElement("div", {
                    className: "follow-game-card__overlay"
                }, r.createElement(c._8, {
                    fillContent: !0
                })) : this.state.hovered ? e = r.createElement("div", {
                    className: "follow-game-card__overlay"
                }, r.createElement(c._19, {
                    width: 50,
                    height: 50,
                    asset: this.isFollowing() ? c._20.Unheart : c._20.Heart
                })) : this.isFollowing() && (e = r.createElement("div", {
                    className: "follow-game-card__overlay follow-game-card__overlay--followed",
                    "data-a-target": "follow-game-card--followed"
                }, r.createElement(c._19, {
                    width: 50,
                    height: 50,
                    asset: c._20.Heart
                }))), r.createElement(c._0, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement("div", a.__assign({
                    className: "follow-game-card",
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    onClick: this.onClick
                }, Object(c._56)(this.props)), r.createElement(c.B, {
                    key: this.props.title
                }, r.createElement(c._6, {
                    position: c._13.Relative
                }, e, r.createElement(c.D, {
                    aspect: c.k.Aspect3x4,
                    alt: this.props.imageAlt,
                    src: this.props.imageSrc
                })), r.createElement(c.C, null, r.createElement(c._6, {
                    margin: {
                        top: .5,
                        bottom: 1
                    }
                }, r.createElement(c.O, {
                    color: c.J.Base,
                    fontSize: c.T.Size5
                }, this.props.title), r.createElement(c.O, {
                    color: c.J.Alt,
                    fontSize: c.T.Size6
                }, this.props.info))))))
            }, t.prototype.followGame = function(e) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return a.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                t = a.__assign({}, Object(o.a)({
                                    gameID: e
                                }), {
                                    update: function(e, t) {
                                        var a = t.data.followGame;
                                        l(e, u, {
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
                                    n.props.onFollow && n.props.onFollow(n.props.title)
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
                                t = a.__assign({}, Object(o.a)({
                                    gameID: e
                                }), {
                                    update: function(e, t) {
                                        var a = t.data.unfollowGame;
                                        l(e, u, {
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
                                    n.props.onUnfollow && n.props.onUnfollow(n.props.title)
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
            }, t = a.__decorate([Object(i.a)(u, {
                options: function(e) {
                    return {
                        variables: {
                            name: e.title
                        }
                    }
                }
            }), Object(i.a)(d, {
                name: "followGame"
            }), Object(i.a)(m, {
                name: "unfollowGame"
            })], t)
        }(r.Component)
    },
    "7rq1": function(e, t) {},
    "7tMz": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("75D5");

        function o(e) {
            return {
                latencyTracking: function(e, t) {
                    return new i.a(e, t)
                }(e),
                rootLatencyTracker: s()
            }
        }

        function s() {
            return new i.a("Root")
        }
        n("MRMr");

        function l(e, t) {
            return function(t) {
                return function(n) {
                    function i() {
                        return null !== n && n.apply(this, arguments) || this
                    }
                    return a.__extends(i, n), i.prototype.render = function() {
                        return r.createElement(t, a.__assign({}, this.props, o(e)))
                    }, i
                }(r.Component)
            }
        }
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return l
        })
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var a = n("TToO"),
            r = n("6sO2"),
            i = n("Aj/L"),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, a.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, a.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, a.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, a.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, a.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        var r, i, o, s;
                        return a.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, i = this.serialize(t.body, r), o = a.__assign({}, t, {
                                        body: i
                                    }), [4, this._fetch(e, o)];
                                case 1:
                                    return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, l.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        var r, i;
                        return a.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((r = o.sent()).error || r.requestError) throw new Error("Error while making request");
                                    return i = a.__assign({}, r, {
                                        body: r.body
                                    }), [2, Promise.resolve(i)];
                                case 2:
                                    throw o.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, r.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, i;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = a.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return r = a.sent(), e.headers && e.headers.get && (i = e.headers.get("Content-Type")) && -1 !== i.indexOf("application/json") && (t.requestError = r), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(n) {
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
                        headers: a.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var n = r.o.store.getState(),
                        a = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (a["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(i.c)(n);
                    return o && (a.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (a["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        a[e] && delete a[e]
                    }), a
                }, e.logger = r.o.logger.withCategory("legacy-api"), e
            }()
    },
    A9VK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var a = n("TToO"),
            r = this,
            i = function() {
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        return [2, n.e(85).then(n.bind(null, "Revh"))]
                    })
                })
            }
    },
    AHWf: function(e, t) {},
    AadB: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("O27J"),
            o = n("6sO2"),
            s = n("+GT7"),
            l = n("6BvN"),
            c = n("SZoP"),
            d = n("NY9D"),
            u = n("vH/s"),
            m = n("HW6M"),
            p = n("Odds"),
            h = (n("ehrk"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = m("live-channel-preview-card", {
                        "live-channel-preview-card--loading": !this.props.streamLoaded
                    });
                    return r.createElement("div", a.__assign({
                        className: e,
                        "data-test-selector": "live-channel-preview-card"
                    }, Object(p._56)(this.props)), r.createElement(s.a, a.__assign({}, this.props), r.createElement(p.j, {
                        ratio: p.k.Aspect16x9
                    }, this.props.videoPlayer)))
                }, t
            }(r.Component)),
            g = n("v5ho"),
            f = n("RH2O"),
            v = n("2KeS"),
            y = n("V5M+"),
            _ = n("jetF"),
            k = n("7vx8"),
            b = n("CSlQ"),
            w = n("3zLD"),
            S = n("+8VM"),
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
            O = n("nC3l"),
            T = (n("sJt0"), "error-message"),
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? r.createElement(p._6, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(p.O, {
                            color: p.J.Error,
                            type: p._43.H4,
                            "data-test-selector": T
                        }, C(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.banUserFromCommunity = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.banUserFromCommunity ? (e = a.__assign({}, Object(E.a)({
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
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (o.o.tracking.track(u.SpadeEventType.CommunityModeration, {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(p._0, {
                        position: p._13.Relative
                    }, r.createElement(p._29, {
                        background: p.m.Base,
                        className: "stream-ban-modal"
                    }, r.createElement(p._6, {
                        padding: 2
                    }, this.renderErrorMessage(), r.createElement(p._6, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(p.O, {
                        type: p._43.H4
                    }, Object(o.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), r.createElement(p._29, {
                        borderTop: !0
                    }, r.createElement(p._6, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(p.O, {
                        bold: !0
                    }, Object(o.d)("Reason (Required)", "StreamBanModal")), r.createElement(p._2, {
                        type: p._3.Text,
                        placeholder: Object(o.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), r.createElement(p._29, {
                        borderTop: !0
                    }, r.createElement(p._6, {
                        padding: {
                            top: 2
                        },
                        textAlign: p._39.Center
                    }, r.createElement(p._6, {
                        display: p.P.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(p.u, {
                        type: p.A.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(o.d)("Cancel", "StreamBanModal"))), r.createElement(p._6, {
                        display: p.P.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(p.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(o.d)("Ban", "StreamBanModal")))))), r.createElement(S.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            x = Object(w.compose)(Object(k.a)(O, {
                name: "banUserFromCommunity"
            }))(N);
        var D = Object(f.b)(null, function(e) {
                return Object(v.b)({
                    onCloseModal: y.c
                }, e)
            })(x),
            I = (n("npyu"), n("plcU")),
            F = "error-message",
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? r.createElement(p._6, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(p.O, {
                            color: p.J.Error,
                            type: p._43.H4,
                            "data-test-selector": F
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.timeoutUserFromCommunity ? (e = a.__assign({}, Object(E.a)({
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
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (o.o.tracking.track(u.SpadeEventType.CommunityModeration, {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(p._0, {
                        position: p._13.Relative
                    }, r.createElement(p._29, {
                        background: p.m.Base,
                        className: "stream-timeout-modal"
                    }, r.createElement(p._6, {
                        padding: 2
                    }, this.renderErrorMessage(), r.createElement(p._6, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(p.O, {
                        type: p._43.H4
                    }, Object(o.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), r.createElement(p._29, {
                        borderTop: !0
                    }, r.createElement(p._6, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(p.O, {
                        bold: !0
                    }, Object(o.d)("Reason (Required)", "StreamTimeoutModal")), r.createElement(p._2, {
                        type: p._3.Text,
                        placeholder: Object(o.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), r.createElement(p._6, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(p.O, {
                        bold: !0
                    }, Object(o.d)("Duration", "StreamTimeoutModal")), r.createElement(p._25, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, r.createElement("option", {
                        value: "2"
                    }, Object(o.d)("2 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "4"
                    }, Object(o.d)("4 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "8"
                    }, Object(o.d)("8 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "12"
                    }, Object(o.d)("12 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "24"
                    }, Object(o.d)("24 hours", "StreamTimeoutModal")))), r.createElement(p._29, {
                        borderTop: !0
                    }, r.createElement(p._6, {
                        padding: {
                            top: 2
                        },
                        textAlign: p._39.Center
                    }, r.createElement(p._6, {
                        display: p.P.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(p.u, {
                        type: p.A.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(o.d)("Cancel", "StreamTimeoutModal"))), r.createElement(p._6, {
                        display: p.P.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(p.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(o.d)("Timeout", "StreamTimeoutModal")))))), r.createElement(S.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            P = Object(w.compose)(Object(k.a)(I, {
                name: "timeoutUserFromCommunity"
            }))(L);
        var G = Object(f.b)(null, function(e) {
                return Object(v.b)({
                    onCloseModal: y.c
                }, e)
            })(P),
            j = n("PO03"),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(c.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(D, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(c.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(G, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? r.createElement(_.a, null, r.createElement(p.v, {
                        ariaLabel: Object(o.d)("Moderation", "DirectoryGamePage"),
                        icon: p._20.ChatRiskFlag
                    }), r.createElement(p.p, {
                        direction: p.q.BottomRight,
                        size: p.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? r.createElement(p._4, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, r.createElement(p._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? r.createElement(p._4, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, r.createElement(p._6, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Timeout", "StreamFlag"))) : null
                }, t = a.__decorate([Object(k.a)(j, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.communityName
                            }
                        }
                    }
                }), Object(b.d)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component);
        var A = Object(f.b)(null, function(e) {
                return Object(v.b)({
                    onShowModal: y.d
                }, e)
            })(R),
            M = n("BwgW"),
            U = n("fc0G"),
            z = n("L3z0"),
            H = n("5MsU"),
            B = {
                autoplay: !0,
                branding: !1,
                channelInfo: !1,
                controls: !1,
                height: "100%",
                playsinline: !0,
                player: U.b.AnimatedThumbnails,
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
        var V = function(e) {
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
                return a.__extends(t, e), n = t, t.prototype.componentDidMount = function() {
                    var e = this;
                    if (this.userVolumeSetting = window.localStorage.getItem("volume"), this.userMuteSetting = window.localStorage.getItem("muted"), window.addEventListener("beforeunload", function() {
                            return e.resetVolume()
                        }), this.state.canInitializePlayer ? this.initializePlayer() : this.checkPlayerDependencyAnimationFrame = window.requestAnimationFrame(this.checkPlayerDependencyStatus), window.__playerScriptChunk && !n.tagInjected) {
                        var t = document.createElement("script");
                        t.async = !0, t.crossOrigin = "anonymous", t.src = window.__playerScriptChunk, document.body.appendChild(t);
                        var a = document.createElement("link");
                        a.href = window.__playerStyleChunk, a.media = "screen", a.rel = "stylesheet", a.type = "text/css", document.body.appendChild(a), n.tagInjected = !0
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
                    }), this.resetVolume(), this.player && (this.player.removeEventListener(H.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(z.a.Play, this.onPlayerPlay), this.player.removeEventListener(z.a.Playing, this.onPlayerPlaying), M.extensionService.unregisterPlayer(), this.player.destroy())
                }, t.prototype.initializePlayer = function() {
                    var e = B;
                    this.props.channelLogin && (e.channel = this.props.channelLogin);
                    var t = new window.Twitch.Player(this.playerRef, e);
                    this.player = t, t.addEventListener(H.a.PlayerReady, this.onPlayerReady), t.addEventListener(z.a.Play, this.onPlayerPlay), t.addEventListener(z.a.Playing, this.onPlayerPlaying), M.extensionService.registerPlayer(this.player)
                }, t.prototype.resetVolume = function() {
                    this.userVolumeSetting && window.localStorage.setItem("volume", this.userVolumeSetting), this.userMuteSetting && window.localStorage.setItem("muted", this.userMuteSetting)
                }, t.tagInjected = !1, t = n = a.__decorate([Object(b.d)("LiveChannelPreviewCard")], t);
                var n
            }(r.Component),
            q = n("PLRK"),
            K = (n("GiGb"), 5e3),
            Q = 300,
            Y = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getLinkTo = function(e, t) {
                        var a = n.props.trackingContent ? n.props.trackingContent : u.PageviewContent.Live,
                            r = n.props.directoryType === g.a.Communities ? u.PageviewMedium.Community : u.PageviewMedium.Game;
                        return n.props.trackingMedium && (r = n.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: r,
                                content: a,
                                content_index: t
                            }
                        }
                    }, n.renderStreamFlag = function() {
                        var e = n.props.streamNode;
                        return e.broadcaster ? n.props.directoryType === g.a.Communities && n.props.directoryName ? r.createElement(p._6, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: p._13.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, r.createElement(A, {
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
                        }, K)
                    }, n.setRef = function(e) {
                        e && (n.thumbnailNode = i.findDOMNode(e), n.addThumbnailListener())
                    }, n.getVideoPlayer = function() {
                        var e = {
                            onPlayerPlaying: n.onStreamLoaded
                        };
                        if (n.props.showPreview && n.state.hovered && n.props.streamNode.broadcaster && n.props.streamNode.broadcaster.login) return r.createElement(V, a.__assign({
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
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
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
                        a = this.props.showPreview && this.state.hovered && (this.state.loadingPreview || this.state.streamLoaded) && !this.state.previewTimedOut;
                    return r.createElement("div", {
                        className: "stream-thumbnail",
                        ref: this.setRef,
                        "data-target": t ? "" : "directory-first-item",
                        onKeyDown: this.onKeyDown,
                        onMouseLeave: this.onMouseLeaveHandler,
                        style: {
                            order: t
                        }
                    }, r.createElement(p._6, {
                        className: "stream-thumbnail__card",
                        position: p._13.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": "directory-game__card_container"
                    }, n && r.createElement(p._29, {
                        attachRight: !0,
                        attachTop: !0,
                        background: p.m.Overlay,
                        borderRadius: p.s.Small,
                        color: p.J.OverlayAlt,
                        margin: .5,
                        padding: .5,
                        position: p._13.Absolute,
                        zIndex: p._55.Above
                    }, r.createElement(p._8, {
                        fillContent: !0,
                        inheritColor: !0,
                        size: p._27.Small
                    })), !this.state.streamLoaded && r.createElement(s.a, {
                        imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || q.a,
                        channelName: Object(c.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: this.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                        gameTitle: this.shouldShowGame("name"),
                        gameLinkTo: this.getLinkTo(Object(d.c)(this.shouldShowGame("name")), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type,
                        streamMetadata: e.streamMetadata,
                        "data-a-target": "card-" + t,
                        "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                    }), a && r.createElement(h, {
                        streamLoaded: this.state.streamLoaded,
                        imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || q.a,
                        channelName: Object(c.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: this.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                        gameTitle: this.shouldShowGame("name"),
                        gameLinkTo: this.getLinkTo(Object(d.c)(this.shouldShowGame("name")), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type,
                        streamMetadata: e.streamMetadata,
                        videoPlayer: this.getVideoPlayer(),
                        hideTooltip: !0
                    }), this.renderStreamFlag()))
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return "directory-game__card_container"
        }), n.d(t, "b", function() {
            return Y
        })
    },
    AtoX: function(e, t) {},
    CybZ: function(e, t) {},
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
        var a, r, i, o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            c = n("6sO2"),
            d = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), (a = {})[d.a.Live] = "stream-type-indicator--live", a[d.a.Premiere] = "stream-type-indicator--premiere", a[d.a.Rerun] = "stream-type-indicator--rerun", a[d.a.WatchParty] = "stream-type-indicator--rerun", a),
            p = ((r = {})[d.a.Premiere] = u._20.VideoPremiere, r[d.a.Rerun] = u._20.VideoRerun, r[d.a.WatchParty] = u._20.VideoRerun, r),
            h = ((i = {})[d.a.Premiere] = u._21.Live, i[d.a.Rerun] = u._21.Inherit, i[d.a.WatchParty] = u._21.Inherit, i),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u._29, {
                        className: this.getClassNames(),
                        color: u.J.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.P.Flex
                    }, l.createElement(u._6, {
                        display: u.P.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(u.O, {
                        type: u._43.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(u._29, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === d.a.Live ? l.createElement(u._6, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.P.Flex,
                        alignItems: u.c.Center
                    }, l.createElement(u.F, {
                        status: u.H.Live,
                        size: u.G.Small
                    })) : l.createElement(u._19, {
                        asset: p[this.props.type],
                        type: h[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case d.a.Live:
                            return Object(c.d)("Live", "StreamTypeIndicator");
                        case d.a.Premiere:
                            return Object(c.d)("Premiere", "StreamTypeIndicator");
                        case d.a.Rerun:
                        case d.a.WatchParty:
                            return Object(c.d)("Rerun", "StreamTypeIndicator");
                        default:
                            return ""
                    }
                }, t
            }(l.Component);
        n.d(t, "a", function() {
            return g
        })
    },
    Kkxm: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "MinimalTopNav_MinimalUser"
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
                                        value: "70"
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
                end: 93
            }
        };
        n.loc.source = {
            body: "query MinimalTopNav_MinimalUser {\ncurrentUser {\nid\ndisplayName\nprofileImageURL(width: 70)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "LEV+": function(e, t) {},
    LgcN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "d", function() {
            return l
        });
        var a = n("TToO"),
            r = this,
            i = function() {
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
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
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
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
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
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
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
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
    ND9m: function(e, t) {},
    PLRK: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("6sO2"),
            o = function(e, t) {
                return Object(i.d)("{viewerCount,number} viewers on {channel}", {
                    viewerCount: e,
                    channel: t
                }, "DirectoryGamePage")
            },
            s = Object(i.d)("Untitled Broadcast", "StreamThumbnail"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", null, Object(i.d)("View All", "DirectoryInternationalSection"))
                }, t
            }(r.Component);
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
        var a = n("TToO"),
            r = n("OAwv"),
            i = n("6sO2"),
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
            c = n("pqU3");
        t.a = function() {
            var e = this;
            return function(t) {
                clearTimeout(d), d = setTimeout(function() {
                    return a.__awaiter(e, void 0, void 0, function() {
                        var e, n, s, d, u, m;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    e = i.o.logger.withCategory("leagueoflegends-api"), t(Object(c.e)(!0)), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), n = i.o.intl.getLanguageCode(), s = l(n), d = o.a.getAPIURL("/api/lol/champions?" + r.stringify({
                                        locale: s,
                                        on_site: 1
                                    })).toString(), [4, o.a.get(d)];
                                case 2:
                                    return (u = a.sent()).body ? t(Object(c.f)(u.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.d)(!0))), [3, 4];
                                case 3:
                                    throw m = a.sent(), t(Object(c.d)(!0)), e.error(m, "Failed to load LoL champion data"), m;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, u)
            }
        };
        var d = 0,
            u = 350
    },
    Qfvd: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        });
        var a = "//static-cdn.jtvnw.net/ttv-boxart",
            r = "52x72"
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
            return a
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "g", function() {
            return s
        }), n.d(t, "f", function() {
            return l
        }), n.d(t, "d", function() {
            return c
        }), n.d(t, "e", function() {
            return d
        }), n.d(t, "c", function() {
            return u
        });
        var a, r, i = n("6sO2"),
            o = n("vH/s");
        ! function(e) {
            e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
        }(a || (a = {})),
        function(e) {
            e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
        }(r || (r = {}));
        var s = function(e) {
                var t = {
                    source: e.source,
                    action: r.Start
                };
                i.n.track(o.SpadeEventType.OnboardingEvent, t)
            },
            l = function() {
                var e = {
                    source: a.HomepageCTA,
                    action: r.Dismissed
                };
                i.n.track(o.SpadeEventType.OnboardingEvent, e)
            },
            c = function() {
                var e = {
                    source: a.HomepageCTA,
                    action: r.Completed
                };
                i.n.track(o.SpadeEventType.OnboardingEvent, e)
            },
            d = function(e, t) {
                var n = {
                    src: o.SpadeEventType.OnboardingEvent,
                    game: t
                };
                i.n.track(e, n)
            },
            u = function(e) {
                i.n.track(o.SpadeEventType.BrowseForYou, e)
            }
    },
    T0IN: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            for (var t = e.length - 1; t > 0; t--) {
                var n = Math.floor(Math.random() * (t + 1)),
                    a = e[t];
                e[t] = e[n], e[n] = a
            }
            return e
        }
    },
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-062a1df5ff2aaa76eb8e129940ef964a.png"
    },
    XhYx: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("zCIC"),
            o = n("/+to"),
            s = n("QG7y"),
            l = n("CSlQ"),
            c = n("7vx8"),
            d = n("jkA6"),
            u = n("7tMz"),
            m = n("6sO2"),
            p = n("NY9D"),
            h = n("5G5w"),
            g = n("k2jn"),
            f = n("Odds"),
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return null === this.props.game ? r.createElement(f._6, {
                        "data-test-selector": "community-card__placeholder",
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(f._6, {
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(f.j, {
                        ratio: f.k.BoxArt
                    }, r.createElement(f._12, null)))) : this.props.followGameCardOptions ? r.createElement(f._6, {
                        key: this.props.followGameCardOptions.category + "-game-" + this.props.game.id
                    }, r.createElement(h.a, {
                        "data-a-target": "follow-game-card-" + this.props.game.id,
                        "data-test-selector": g.c,
                        info: this.props.game.viewersCount ? Object(m.d)("{viewerCount,number} viewers", {
                            viewerCount: this.props.game.viewersCount
                        }, "CommunitySelectionFollowCard") : "",
                        title: this.props.game.name,
                        imageAlt: this.props.game.name,
                        imageSrc: this.props.game.boxArtURL,
                        onFollow: this.props.followGameCardOptions.onFollow,
                        onUnfollow: this.props.followGameCardOptions.onUnfollow,
                        categoryChange: this.props.followGameCardOptions.categoryChange
                    })) : r.createElement(f._6, {
                        key: "game-" + this.props.game.id,
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(f.t, {
                        title: this.props.game.name,
                        info: this.props.game.viewersCount ? Object(m.d)("{viewerCount,number} viewers", {
                            viewerCount: this.props.game.viewersCount
                        }, "CommunitySelectionBoxCard") : "",
                        linkTo: this.props.isCommunity ? Object(p.a)(this.props.game.name) : Object(p.c)(this.props.game.name),
                        alt: this.props.game.name + " cover image",
                        src: this.props.game.boxArtURL
                    }))
                }, t
            }(r.Component),
            y = n("v5ho"),
            _ = n("508y"),
            k = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    if (this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.directory) e = {
                        id: this.props.data.directory.id,
                        name: this.props.data.directory.name,
                        boxArtURL: this.props.data.directory.avatarURL,
                        viewersCount: this.props.data.directory.viewersCount
                    };
                    else if (null === this.props.data.directory) return null;
                    return r.createElement(v, {
                        game: e,
                        isCommunity: this.props.directoryType === y.a.Communities,
                        followGameCardOptions: this.props.followGameCardOptions
                    })
                }, t = a.__decorate([Object(c.a)(_, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.name,
                                type: Object(d.a)(e.directoryType)
                            }
                        }
                    }
                }), Object(u.a)("CommunityCard")], t)
            }(r.Component),
            b = n("yEZg"),
            w = "community-card-row__ad",
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.renderCards = function(e) {
                        return t.props.withAd ? t.renderCardGridWithAdSlot() : t.renderCardsWithoutAdSlot(e)
                    }, t.renderCardsWithoutAdSlot = function(e) {
                        var n = t.renderCardsFromProps(),
                            a = 1 === n.length ? 1 : 0;
                        return r.createElement(f._6, {
                            padding: {
                                x: 1,
                                top: 2
                            }
                        }, r.createElement(f._49, {
                            gutterSize: f._51.Small,
                            childWidth: t.props.cardSize,
                            placeholderItems: t.props.placeholderItems ? t.props.placeholderItems : a,
                            noWrap: e
                        }, n))
                    }, t.renderCardGridWithAdSlot = function() {
                        var e = r.createElement(f._6, {
                                key: "ad",
                                "data-test-selector": w,
                                display: f.P.Flex,
                                flexGrow: 1,
                                justifyContent: f._5.Center,
                                padding: {
                                    bottom: t.state.adDisplayed ? 2 : 0,
                                    left: t.state.adDisplayed ? 1 : 0
                                }
                            }, r.createElement(o.a, {
                                adSize: s.c.anonFront.rect,
                                adUnit: s.d.frontpage,
                                slotID: s.b.anonFront.rect,
                                targeting: {
                                    pagetype: s.a.frontpage
                                },
                                slotRendered: t.onSlotRendered,
                                autoEnable: !1
                            })),
                            n = t.renderCardsFromProps().map(function(e, t) {
                                return r.createElement(f.K, {
                                    key: "game-" + t.toString(),
                                    cols: 2
                                }, e)
                            });
                        return n.splice(4, 0, e), r.createElement(f._6, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(f.W, null, n))
                    }, t.renderCardsFromProps = function() {
                        if (t.props.games) {
                            var e = t.props.games;
                            return t.props.withAd && !t.state.adDisplayed && (e = e.slice(0, b.GAME_DISPLAY_LIMIT)), e.map(function(e, n) {
                                return r.createElement(v, {
                                    key: "community-card-" + e.id + "-" + n,
                                    game: e,
                                    isCommunity: t.props.directoryType === y.a.Communities,
                                    followGameCardOptions: t.props.followGameCardOptions
                                })
                            })
                        }
                        if (t.props.names) {
                            var n = t.props.names;
                            return t.props.withAd && !t.state.adDisplayed && (n = n.slice(0, b.GAME_DISPLAY_LIMIT)), n.map(function(e, n) {
                                return r.createElement(k, {
                                    key: "community-card-" + e + "-" + n,
                                    name: e,
                                    directoryType: t.props.directoryType,
                                    followGameCardOptions: t.props.followGameCardOptions
                                })
                            })
                        }
                        throw new Error("Need to pass either games or names into CommunityCardRow")
                    }, t.onSlotRendered = function() {
                        t.state.adDisplayed || t.setState({
                            adDisplayed: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.isScrollable ? r.createElement(i.b, null, this.renderCards(!0)) : this.renderCards(!1)
                }, t
            }(r.Component),
            E = Object(l.d)("CommunityCardRow")(S);
        n.d(t, !1, function() {
            return w
        }), n.d(t, !1, function() {
            return S
        }), n.d(t, "a", function() {
            return E
        })
    },
    YUUt: function(e, t, n) {
        e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc37349dfbde7c720.png"
    },
    e6tx: function(e, t) {},
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
    f6or: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunitySelectionPage"
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
                end: 144
            }
        };
        n.loc.source = {
            body: "query CommunitySelectionPage($limit: Int) {\ngames(first: $limit) {\nedges {\nnode {\nid\nname\nboxArtURL(width: 285 height: 380)\nviewersCount\n}\n}\n}\n}",
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
            return r
        });
        var a = n("v5ho"),
            r = function(e) {
                return e === a.a.Communities ? "COMMUNITY" : "GAME"
            }
    },
    k2jn: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return w
        }), n.d(t, "a", function() {
            return S
        }), n.d(t, "b", function() {
            return O
        });
        var a = n("TToO"),
            r = n("GiK3"),
            i = (n.n(r), n("3zLD")),
            o = (n.n(i), n("6sO2")),
            s = n("zCIC"),
            l = n("Th9g"),
            c = n("7vx8"),
            d = n("j7/Y"),
            u = n("w9tK"),
            m = n("vH/s"),
            p = n("CSlQ"),
            h = n("XhYx"),
            g = n("+I3D"),
            f = n("DBTH"),
            v = n("S4HN"),
            y = n("v5ho"),
            _ = n("Odds"),
            k = n("wd/y"),
            b = (n.n(k), n("ND9m")),
            w = (n.n(b), "onboarding_game"),
            S = 100,
            E = 500,
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.doneInitialRedirectCheck = !1, t.gameToCategories = {}, t.onFollow = function(e) {
                        t.props.data.updateQuery(function(t) {
                            if (t.currentUser && t.currentUser.followedGames && t.currentUser.followedGames.nodes) {
                                var n = {
                                        id: e,
                                        name: e,
                                        __typename: "Game"
                                    },
                                    r = t.currentUser.followedGames.nodes.slice();
                                return r.push(n), a.__assign({}, t, {
                                    currentUser: a.__assign({}, t.currentUser, {
                                        followedGames: a.__assign({}, t.currentUser.followedGames, {
                                            nodes: r
                                        })
                                    })
                                })
                            }
                            return t
                        }), Object(v.e)(m.SpadeEventType.GameFollow, e)
                    }, t.onUnfollow = function(e) {
                        t.props.data.updateQuery(function(t) {
                            return t.currentUser && t.currentUser.followedGames && t.currentUser.followedGames.nodes ? a.__assign({}, t, {
                                currentUser: a.__assign({}, t.currentUser, {
                                    followedGames: a.__assign({}, t.currentUser.followedGames, {
                                        nodes: t.currentUser.followedGames.nodes.filter(function(t) {
                                            return t.name !== e
                                        })
                                    })
                                })
                            }) : t
                        }), Object(v.e)(m.SpadeEventType.GameUnfollow, e)
                    }, t.completeAndRedirectToForYou = function() {
                        Object(v.d)();
                        var e = "" === location.search ? "?tt_medium=onboarding" : location.search + "&tt_medium=onboarding";
                        window.location.assign("/directory/following/foryou" + e)
                    }, t.moveNextToChannelSurfing = function() {
                        o.o.history.push("/hi/surf" + location.search)
                    }, t.redirectToFrontPage = function() {
                        window.location.assign("/" + location.search)
                    }, t.onGameInputChange = function(e) {
                        e.persist(), t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), t.inputTimer = setTimeout(function() {
                            t.props.onSearchChange(e.target.value), t.inputTimer = 0
                        }, E)
                    }, t.userFollowedGamesDataLoaded = function(e) {
                        return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return o.o.setPageTitle(Object(o.d)("Welcome", "CommunitySelectionPage")), [4, o.o.experiments.getAssignment(f.j)];
                                case 1:
                                    return e = n.sent(), [4, o.o.experiments.getAssignment(f.i)];
                                case 2:
                                    return t = n.sent(), this.setState({
                                        inOnboardingExperiment: Object(f.p)(e),
                                        inChannelSurfingExperiment: Object(f.o)(e, t)
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.userFollowedGamesDataLoaded(e) && ((!1 === t.inOnboardingExperiment || !this.doneInitialRedirectCheck && this.shouldRedirect(e)) && this.redirectToFrontPage(), this.doneInitialRedirectCheck = !0), (!this.props.categoryData && e.categoryData || this.props.categoryData && e.categoryData && this.props.categoryData.length !== e.categoryData.length) && this.mapGamesToCategories(e.categoryData)
                }, t.prototype.componentDidUpdate = function() {
                    this.userFollowedGamesDataLoaded(this.props) && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.userFollowedGamesDataLoaded(this.props) && this.state.inOnboardingExperiment ? r.createElement(_._29, {
                        className: "community-selection-page",
                        "data-a-target": "community-selection-page",
                        "data-test-selector": "onboarding-community-selection",
                        fullHeight: !0,
                        position: _._13.Relative
                    }, r.createElement(_._6, {
                        className: "community-selection-page__progress-container",
                        fullWidth: !0,
                        position: _._13.Absolute,
                        attachTop: !0
                    }, r.createElement(_._16, {
                        size: _._17.Small,
                        value: this.calculateProgress()
                    })), r.createElement(_._29, {
                        display: _.P.Flex,
                        alignItems: _.c.Center,
                        justifyContent: _._5.Center,
                        flexDirection: _.R.Column,
                        borderBottom: !0,
                        background: _.m.Base,
                        padding: 2,
                        breakpointMedium: {
                            flexDirection: _.R.Row,
                            padding: {
                                x: 2,
                                top: 2,
                                bottom: 1
                            }
                        },
                        fullWidth: !0
                    }, r.createElement(_._6, {
                        className: "community-selection-page__search",
                        position: _._13.Relative,
                        flexOrder: 3,
                        margin: {
                            top: 2
                        },
                        breakpointMedium: {
                            flexOrder: 1,
                            margin: {
                                top: 0
                            }
                        }
                    }, r.createElement(_._22, {
                        id: "onboarding-community-selection__search",
                        "data-a-target": "onboarding-community-selection__search",
                        onChange: this.onGameInputChange,
                        placeholder: "Search Games",
                        spellCheck: !1
                    })), this.renderTitleText(), this.renderCTA()), r.createElement(s.b, null, r.createElement(_._29, {
                        className: "community-selection-page__list",
                        background: _.m.Alt2,
                        overflow: _._9.Hidden,
                        padding: {
                            x: 1,
                            y: 2
                        }
                    }, this.renderGameCardsOrCategories(), r.createElement(s.a, {
                        enabled: this.props.categoriesInfiniteScrollEnabled,
                        loadMore: this.props.onLoadMoreCategories,
                        orientation: l.b.Down,
                        pixelThreshold: 20
                    })))) : this.props.data.error ? (o.j.warn("Data Error in Onboarding Community Selection", this.props.data.error), r.createElement(_._6, {
                        display: _.P.Flex
                    }, r.createElement(_.O, {
                        fontSize: _.T.Size5,
                        color: _.J.Alt
                    }, Object(o.d)("Hmm...having trouble loading right now.", "CommunitySelectionPage")))) : null
                }, t.prototype.getNumFollowedGames = function() {
                    return this.props.data.currentUser.followedGames.nodes.length
                }, t.prototype.mapGamesToCategories = function(e) {
                    var t = this;
                    this.gameToCategories = {}, e.forEach(function(e) {
                        e.games.forEach(function(n) {
                            t.gameToCategories[n] || (t.gameToCategories[n] = []), t.gameToCategories[n].push(e.name)
                        })
                    })
                }, t.prototype.getCategoryFollowCounts = function() {
                    var e = this,
                        t = {};
                    return this.props.data.currentUser.followedGames.nodes.forEach(function(n) {
                        e.gameToCategories[n.name] && e.gameToCategories[n.name].forEach(function(e) {
                            t[e] || (t[e] = 0), t[e]++
                        })
                    }), t
                }, t.prototype.calculateProgress = function() {
                    return Math.min(1 + this.getNumFollowedGames() / 3 * 99, 100)
                }, t.prototype.shouldRedirect = function(e) {
                    return !e.data.currentUser || e.data.currentUser.followedGames.nodes.length >= 10
                }, t.prototype.renderTitleText = function() {
                    return r.createElement(_._6, {
                        display: _.P.Flex,
                        alignItems: _.c.Center,
                        flexGrow: 1,
                        flexDirection: _.R.Column,
                        textAlign: _._39.Center,
                        margin: 1,
                        flexOrder: 2,
                        breakpointMedium: {
                            flexOrder: 1
                        },
                        breakpointLarge: {
                            margin: {
                                x: 2,
                                y: 1
                            }
                        }
                    }, r.createElement(_._29, {
                        color: _.J.Base,
                        fontSize: _.T.Size4,
                        breakpointMedium: {
                            fontSize: _.T.Size3
                        },
                        breakpointExtraLarge: {
                            fontSize: _.T.Size2
                        }
                    }, Object(o.d)("First, pick three or more you’d like to watch.", "CommunitySelectionPage")), r.createElement(_._29, {
                        color: _.J.Alt,
                        margin: {
                            top: .5
                        },
                        display: _.P.Hide,
                        breakpointMedium: {
                            fontSize: _.T.Size4,
                            display: _.P.Block
                        },
                        breakpointExtraLarge: {
                            fontSize: _.T.Size3
                        }
                    }, Object(o.d)("We have tons of games, hobbies, and activities being streamed right now.", "CommunitySelectionPage")))
                }, t.prototype.renderCTA = function() {
                    return r.createElement(_._6, {
                        className: "community-selection-page__cta-container",
                        display: _.P.Flex,
                        justifyContent: _._5.Center,
                        breakpointLarge: {
                            justifyContent: _._5.End
                        },
                        flexGrow: 0,
                        flexShrink: 0,
                        flexOrder: 2,
                        breakpointMedium: {
                            flexOrder: 3
                        }
                    }, r.createElement(_.u, {
                        size: _.y.Large,
                        "data-test-selector": "onboarding_cta",
                        disabled: this.getNumFollowedGames() < 3,
                        onClick: this.state.inChannelSurfingExperiment ? this.moveNextToChannelSurfing : this.completeAndRedirectToForYou
                    }, this.state.inChannelSurfingExperiment ? Object(o.d)("Next", "CommunitySelectionPage") : Object(o.d)("Done", "CommunitySelectionPage")))
                }, t.prototype.renderGameCardsOrCategories = function() {
                    var e = this;
                    if (this.props.gameData) {
                        var t = {
                            onFollow: this.onFollow,
                            onUnfollow: this.onUnfollow
                        };
                        return r.createElement(h.a, {
                            games: this.props.gameData,
                            directoryType: y.a.Games,
                            cardSize: _._50.Medium,
                            followGameCardOptions: t,
                            placeholderItems: 99
                        })
                    }
                    if (this.props.categoryData) {
                        var n = this.getCategoryFollowCounts();
                        return this.props.categoryData.map(function(t) {
                            var a = !!n && (n[t.name] || 0) === t.games.length;
                            return r.createElement(g.a, {
                                key: t.name,
                                data: t,
                                cardSize: _._50.ExtraSmall,
                                trackingMedium: m.PageviewMedium.BrowseForYou,
                                isFollowingAllGamesInCategory: a,
                                onFollow: e.onFollow,
                                onUnfollow: e.onUnfollow
                            })
                        })
                    }
                }, t
            }(r.Component),
            O = Object(i.compose)(Object(c.a)(k, {
                options: {
                    variables: {
                        limit: 10
                    }
                }
            }), Object(p.d)("CommunitySelectionPage", {
                destination: u.a.OnboardingIndex
            }), Object(d.a)({
                location: m.PageviewLocation.OnboardingCommunitySelection
            }))(C)
    },
    l5N5: function(e, t) {},
    lI8O: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("6sO2"),
            o = n("DBTH"),
            s = n("RH2O"),
            l = n("7vx8"),
            c = n("HM6l"),
            d = n("w9tK"),
            u = n("Aj/L"),
            m = n("T0IN"),
            p = n("CSlQ"),
            h = n("A9VK"),
            g = n("5LoI"),
            f = n("MAZT"),
            v = n("uTyw"),
            y = n("Qfvd"),
            _ = n("f6or"),
            k = n("k2jn"),
            b = "285x380",
            w = 5,
            S = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        searching: !1,
                        randomizedGames: [],
                        categoryEndIndex: w
                    }, n.getData = function() {
                        return n.state.searching && n.state.searchGameResults ? n.state.searchGameResults.map(function(e) {
                            return n.mapDataToGame(e.title, e.popularity, e.id)
                        }) : n.props.isRandomExperimentEnabled ? n.state.randomizedGames.map(function(e) {
                            return n.mapDataToGame(e)
                        }) : !n.props.isCategoriesExperimentEnabled && n.gameDataLoaded() ? n.props.data.games.edges.map(function(e) {
                            return {
                                id: e.node.id,
                                name: e.node.name,
                                boxArtURL: e.node.boxArtURL,
                                viewersCount: e.node.viewersCount
                            }
                        }) : void 0
                    }, n.gameDataLoaded = function() {
                        return n.props.data && !n.props.data.loading && !n.props.data.error && n.props.data.games && n.props.data.games.edges
                    }, n.onSearchChange = function(e) {
                        e ? (n.setState({
                            searching: !0
                        }), n.doGameSearch(e).then(function() {})) : n.setState({
                            searching: !1
                        })
                    }, n.doGameSearch = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var t, n, r, o;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = Object(c.a)(), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(g.a.Games, e, t, {
                                            hitsPerPage: k.a
                                        })];
                                    case 2:
                                        return (n = a.sent()) && (r = Object(v.b)({
                                            searchResults: n
                                        }), this.setState({
                                            searchGameResults: r.currentGameResults ? r.currentGameResults.results : []
                                        })), [3, 4];
                                    case 3:
                                        return o = a.sent(), i.j.error(o, "Algolia top results search failed"), this.setState({
                                            searchGameResults: []
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.loadMoreCategories = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                return this.state.categoryData && (e = Math.min(this.state.categoryEndIndex + w, this.state.categoryData.length)) > this.state.categoryEndIndex && this.setState({
                                    categoryEndIndex: e
                                }), [2]
                            })
                        })
                    }, n.mapDataToGame = function(e, t, n) {
                        return {
                            id: n || e.toString(),
                            name: e,
                            boxArtURL: y.a + "/" + encodeURIComponent(e) + "-" + b + ".jpg",
                            viewersCount: t
                        }
                    }, n.searchClient = new f.a({
                        appId: i.a.algoliaApplicationID,
                        apiKey: i.a.algoliaAPIKey,
                        apolloClient: i.o.apollo.client,
                        logger: i.j,
                        config: i.a
                    }), n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.props.isLoggedIn ? this.props.isRandomExperimentEnabled ? [4, this.fetchAndSaveRandomizedGameNames()] : [3, 2] : (this.props.latencyTracking.reportInteractive(), window.location.assign("/" + location.search), [2]);
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    return this.props.isCategoriesExperimentEnabled ? [4, this.fetchCategories()] : [3, 4];
                                case 3:
                                    e.sent(), e.label = 4;
                                case 4:
                                    return this.props.latencyTracking.reportInteractive(), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return r.createElement(k.b, {
                        gameData: this.getData(),
                        categoryData: this.state.categoryData && this.state.categoryData.slice(0, this.state.categoryEndIndex),
                        onSearchChange: this.onSearchChange,
                        categoriesInfiniteScrollEnabled: !!this.state.categoryData && this.state.categoryEndIndex !== this.state.categoryData.length,
                        onLoadMoreCategories: this.loadMoreCategories
                    })
                }, t.prototype.fetchAndSaveRandomizedGameNames = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    e = [], a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, n.e(84).then(n.bind(null, "GZxo"))];
                                case 2:
                                    return e = a.sent(), [3, 4];
                                case 3:
                                    return t = a.sent(), i.j.error(t, "Could not fetch randomized game names"), [3, 4];
                                case 4:
                                    return Object(m.a)(e), e = e.slice(0, 100), this.setState({
                                        randomizedGames: e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.fetchCategories = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, Object(h.a)()];
                                case 1:
                                    return e = n.sent(), t = e.map(function(e) {
                                        return {
                                            name: e.name,
                                            games: e.games.slice(0, 7)
                                        }
                                    }), this.setState({
                                        categoryData: t
                                    }), [2]
                            }
                        })
                    })
                }, t = a.__decorate([Object(l.a)(_, {
                    options: {
                        variables: {
                            limit: k.a
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || e.isRandomExperimentEnabled || e.isCategoriesExperimentEnabled
                    }
                }), Object(p.d)("CommunitySelectionPageContainer", {
                    destination: d.a.OnboardingIndex
                })], t)
            }(r.Component);
        var E = Object(s.b)(function(e) {
                return {
                    isLoggedIn: Object(u.d)(e)
                }
            })(S),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isRandomExperimentEnabled: null,
                        isCategoriesExperimentEnabled: null
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, i.o.experiments.getAssignment(o.l)];
                                case 1:
                                    return e = a.sent(), [4, i.o.experiments.getAssignment(o.g)];
                                case 2:
                                    return t = a.sent(), n = e === o.e.ENABLED, r = t === o.b.Yes, this.setState({
                                        isRandomExperimentEnabled: n && !r,
                                        isCategoriesExperimentEnabled: r
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return null === this.state.isRandomExperimentEnabled || null === this.state.isCategoriesExperimentEnabled ? null : r.createElement(E, {
                        isRandomExperimentEnabled: this.state.isRandomExperimentEnabled,
                        isCategoriesExperimentEnabled: this.state.isCategoriesExperimentEnabled
                    })
                }, t
            }(r.Component),
            O = n("F8kA"),
            T = n("bZTi"),
            N = n("NXs7"),
            x = n("VAT8"),
            D = n("2b/B"),
            I = n("Odds"),
            F = (n("l5N5"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? r.createElement(I._0, {
                        position: I._13.Relative,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement("nav", {
                        className: "top-nav",
                        "data-a-target": "top-nav-container"
                    }, r.createElement(I._6, {
                        className: "top-nav__menu",
                        display: I.P.Flex,
                        alignItems: I.c.Stretch,
                        flexWrap: I.S.NoWrap,
                        fullHeight: !0
                    }, r.createElement(I._0, {
                        display: I.P.InlineFlex,
                        alignItems: I.c.Center,
                        flexShrink: 0
                    }, r.createElement("span", {
                        className: "top-nav__home-link"
                    }, r.createElement(I._19, {
                        asset: I._20.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), r.createElement(I._6, {
                        className: "top-nav__nav-items-container",
                        display: I.P.Flex,
                        flexGrow: 1,
                        flexWrap: I.S.NoWrap,
                        flexShrink: 0
                    }, ""), r.createElement(I._6, {
                        className: "top-nav__nav-items-container",
                        display: I.P.Flex,
                        alignItems: I.c.Stretch,
                        flexWrap: I.S.NoWrap,
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(D.a, {
                        isOnboarding: !0
                    }))))) : (i.j.warn("OnboardingTopNavComponent is only meant to be used for logged in users."), null)
                }, t = a.__decorate([Object(p.d)("OnboardingTopNav")], t)
            }(r.Component));
        var L = Object(s.b)(function(e) {
                return {
                    isLoggedIn: Object(u.d)(e)
                }
            })(F),
            P = n("T8ns"),
            G = T.a.wrap(function() {
                return n.e(74).then(n.bind(null, "sx3M"))
            }, "ChannelSurfingPage"),
            j = T.a.wrap(function() {
                return new Promise(function(e) {
                    e()
                }).then(n.bind(null, "lI8O"))
            }, "CommunitySelectionPage"),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.isLoggedIn || window.location.assign("/" + location.search)
                }, t.prototype.render = function() {
                    return r.createElement(I._6, {
                        className: Object(x.c)(N.a.Dark),
                        display: I.P.Flex,
                        flexDirection: I.R.Column,
                        flexWrap: I.S.NoWrap,
                        position: I._13.Relative,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(L, null), r.createElement(I._6, {
                        display: I.P.Flex,
                        flexWrap: I.S.NoWrap,
                        position: I._13.Relative,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(I._0, {
                        position: I._13.Relative,
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement("main", {
                        className: P.b
                    }, r.createElement(O.e, null, r.createElement(O.d, {
                        path: "/hi/surf",
                        component: G
                    }), r.createElement(O.d, {
                        path: "/hi",
                        component: j
                    }))))))
                }, t = a.__decorate([Object(p.d)("OnboardingRoot", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component);
        var A = Object(O.f)(Object(s.b)(function(e) {
            return {
                isLoggedIn: Object(u.d)(e)
            }
        })(R));
        n.d(t, "CommunitySelectionPage", function() {
            return C
        }), n.d(t, "OnboardingRoot", function() {
            return A
        })
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
            return a
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "b", function() {
            return i
        }), t.d = function(e) {
            return {
                type: i,
                leagueOfLegendsChampionsErrored: e
            }
        }, t.e = function(e) {
            return {
                type: r,
                leagueOfLegendsChampionsLoading: e
            }
        }, t.f = function(e) {
            var t = {},
                n = e.data;
            for (var r in n) n.hasOwnProperty(r) && (t[n[r].id] = n[r]);
            return {
                type: a,
                apiData: e,
                championsMap: t,
                apiVersion: e.version
            }
        };
        var a = "directory.LOL_CHAMPIONS_CHANGED",
            r = "directory.LOL_CHAMPIONS_LOADING",
            i = "directory.LOL_CHAMPIONS_ERRORED"
    },
    sJt0: function(e, t) {},
    v5ho: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
            }(a || (a = {}))
    },
    "wd/y": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunitySelectionPage_User"
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
                end: 120
            }
        };
        n.loc.source = {
            body: "query CommunitySelectionPage_User($limit: Int) {\ncurrentUser {\nid\nfollowedGames(first: $limit) {\nnodes {\nid\nname\n}\n}\n}\n}",
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
    yEZg: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("F8kA"),
            o = n("6sO2"),
            s = n("yWCw"),
            l = n("CSlQ"),
            c = n("+I3D"),
            d = n("A9VK"),
            u = n("Odds"),
            m = (n("7rq1"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        categoryData: []
                    }, t.renderHeader = function() {
                        var e, n;
                        return t.props.withStreams ? (e = Object(o.d)("Featured Genres", "FeaturedGenres"), n = Object(o.d)("Watch your favorite games on Twitch", "FeaturedGenres")) : (e = Object(o.d)("Featured Games", "FeaturedGenres"), n = Object(o.d)("Find your favorite games on Twitch", "FeaturedGenres")), r.createElement(u._6, {
                            alignItems: u.c.Baseline,
                            display: u.P.Flex,
                            flexDirection: u.R.Row,
                            margin: {
                                left: 1,
                                bottom: 1
                            }
                        }, r.createElement(u.O, {
                            fontSize: u.T.Size2,
                            color: u.J.Base
                        }, e), r.createElement(u._6, {
                            className: "anon-featured-genres__subheader",
                            margin: {
                                left: 2
                            }
                        }, r.createElement(u.O, {
                            fontSize: u.T.Size3,
                            color: u.J.Alt2
                        }, n)))
                    }, t.renderContent = function() {
                        return t.state.categoryData.map(function(e, n) {
                            return r.createElement(c.a, {
                                key: e.name,
                                data: e,
                                cardSize: u._50.ExtraSmall,
                                withAd: 0 === n,
                                trackingMedium: t.props.trackingMedium,
                                withStreams: t.props.withStreams,
                                withBoxArtGameCards: !t.props.withStreams,
                                isFollowingAllGamesInCategory: !1
                            })
                        })
                    }, t.renderFooter = function() {
                        return r.createElement(u._6, {
                            display: u.P.Flex,
                            justifyContent: u._5.End
                        }, r.createElement(u._0, {
                            display: u.P.Flex,
                            alignItems: u.c.Center
                        }, r.createElement(i.a, {
                            to: "/directory"
                        }, r.createElement(u.O, {
                            fontSize: u.T.Size4
                        }, Object(o.d)("See all live games", "FeaturedGenres")), r.createElement(u._29, {
                            alignItems: u.c.Center,
                            color: u.J.Link,
                            display: u.P.InlineFlex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(u._19, {
                            asset: u._20.AngleRight,
                            width: 14,
                            height: 14
                        })))))
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.fetchCategories()];
                                case 1:
                                    return e.sent(), this.props.latencyTracking.reportInteractive(), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return null === this.state.categoryData ? r.createElement(s.a, {
                        message: Object(o.d)("Featured Genres are unavailable at this time.", "FeaturedGenres")
                    }) : r.createElement(u._6, null, this.renderHeader(), this.renderContent(), this.renderFooter())
                }, t.prototype.fetchCategories = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, Object(d.a)()];
                                case 1:
                                    return e = a.sent(), t = e.slice(0, 3).map(function(e, t) {
                                        return {
                                            name: e.name,
                                            games: e.games.slice(0, 0 === t ? 10 : 6)
                                        }
                                    }), this.setState({
                                        categoryData: t
                                    }), [3, 3];
                                case 2:
                                    return n = a.sent(), o.j.error(n, "Unable to fetch categories."), this.setState({
                                        categoryData: null
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t = a.__decorate([Object(l.d)("FeaturedGenres")], t)
            }(r.Component));
        n.d(t, "GENRE_DISPLAY_LIMIT", function() {
            return 3
        }), n.d(t, "GAME_DISPLAY_LIMIT", function() {
            return 6
        }), n.d(t, "GAME_DISPLAY_WITH_AD_LIMIT", function() {
            return 10
        }), n.d(t, "FeaturedGenres", function() {
            return m
        })
    }
});
//# sourceMappingURL=pages.onboarding-61f61cf6418a0a6baecfa0a7c2bfa189.js.map