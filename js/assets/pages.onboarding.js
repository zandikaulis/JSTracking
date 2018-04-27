webpackJsonp([52, 100], {
    "+GT7": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("F8kA"),
            o = n("6sO2"),
            s = n("iOr9"),
            l = n("vKFS"),
            c = n("IOwa"),
            d = n("2o2f"),
            m = n("81qH"),
            u = n("RH2O"),
            p = n("2KeS"),
            h = n("PPNL"),
            g = n("HW6M"),
            v = n("YUUt"),
            f = n.n(v),
            y = n("/SNv"),
            _ = n.n(y),
            w = n("Vr3l"),
            b = n.n(w),
            k = n("nyge"),
            S = n("LgcN"),
            E = function(e) {
                try {
                    return decodeURIComponent(e)
                } catch (e) {
                    return null
                }
            },
            C = n("Odds"),
            O = (n("AHWf"), function(e) {
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
                                    a = t.props.streamMetadata.counterStrikeGlobalOffensive && t.props.streamMetadata.counterStrikeGlobalOffensive.skill,
                                    r = t.props.streamMetadata.hearthstone && t.props.streamMetadata.hearthstone.broadcasterHeroClass,
                                    i = t.props.streamMetadata.leagueOfLegends && t.props.streamMetadata.leagueOfLegends.championID,
                                    o = t.props.streamMetadata.overwatch && t.props.streamMetadata.overwatch.broadcasterCharacter;
                                a && n === k.a.CounterStrike ? (t.setState({
                                    game: n,
                                    gameSprite: f.a,
                                    item: String(a),
                                    isLoading: !0
                                }), t.getCounterStrikeData(a)) : r && n === k.a.Hearthstone ? (t.setState({
                                    game: n,
                                    gameSprite: _.a,
                                    item: r,
                                    isLoading: !0
                                }), t.getHearthstoneData()) : i && n === k.a.LeagueOfLegends ? (t.setState({
                                    game: n,
                                    item: String(i)
                                }), t.getLeagueData()) : o && n === k.a.Overwatch && (t.setState({
                                    game: n,
                                    gameSprite: b.a,
                                    item: o,
                                    isLoading: !0
                                }), t.getOverwatchData())
                            }
                        }
                    }, t.renderIcon = function(e, n, a, i, o, s) {
                        if (!a) return null;
                        var l = g("metadata-icon", {
                                "metadata-icon--csgo-skill": t.state.game === k.a.CounterStrike
                            }),
                            c = t.state.game === k.a.CounterStrike ? 50 : 30;
                        return r.createElement(C._8, {
                            display: C.R.Flex,
                            flexDirection: C.T.Column,
                            alignItems: C.c.Center,
                            justifyContent: C._7.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(C._50, {
                            direction: C._52.Left,
                            label: e
                        }, r.createElement(C._8, {
                            className: l
                        }, r.createElement("div", {
                            style: {
                                backgroundImage: "url(" + n + ")",
                                backgroundPositionX: o ? -1 * o : 0,
                                backgroundPositionY: s ? -1 * s : 0,
                                width: a ? a + "px" : "3rem",
                                height: a ? i + "px" : "3rem",
                                transform: "scale(" + (a > 0 ? c / a : 1) + ")",
                                transformOrigin: "0 0"
                            }
                        }))))
                    }, t.getCounterStrikeData = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n, r;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, Object(S.a)()];
                                    case 1:
                                        return t = a.sent(), this.didUnmount ? [2] : ((n = {})[e] = t[0]["Skill Group"][e - 1], this.setState({
                                            content: n
                                        }), [3, 3]);
                                    case 2:
                                        return r = a.sent(), this.logger.error(r, "Failed to load Counter-Strike skill group data"), this.setState({
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
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, Object(S.b)()];
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, o, s, l, c, d, m, u, p;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, Object(S.d)()];
                                    case 1:
                                        if (e = a.sent(), this.didUnmount) return [2];
                                        for (t = !1, n = void 0, r = 0, i = e; r < i.length && (n = i[r], !t); r++)
                                            for (o in n)
                                                if (n.hasOwnProperty(o))
                                                    for (s = n[o], l = 0, c = s; l < c.length; l++)
                                                        if ((d = c[l]).character === this.state.item) {
                                                            (p = {})[d.character] = d, m = p, this.setState({
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
                    if (this.state.game === k.a.LeagueOfLegends) {
                        if (!this.props.leagueOfLegends.championsMap) return null;
                        var e = this.props.leagueOfLegends.championsMap[this.state.item],
                            t = "https://ddragon.leagueoflegends.com/cdn/" + this.props.leagueOfLegends.version + "/img/sprite/" + e.image.sprite;
                        return this.renderIcon(e.name, t, e.image.w, e.image.h, e.image.x, e.image.y)
                    }
                    var n = this.state.content && this.state.content[this.state.item];
                    return n ? this.renderIcon(n.display_name, this.state.gameSprite || "", n.image_width, n.image_height, n.sprite_x_offset, n.sprite_y_offset) : null
                }, t
            }(r.Component)),
            T = Object(i.f)(O);
        var L = Object(u.b)(function(e) {
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
                    onLoadLeagueOfLegendsChampions: h.a
                }, e)
            })(T),
            N = (n("LEV+"), "live-channel-card-link-selector"),
            I = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderVariation = function() {
                        return r.createElement("div", a.__assign({
                            className: "live-channel-card"
                        }, Object(C._61)(n.props)), r.createElement(l.a, {
                            context: l.b.MixedGameAndChannelList,
                            title: n.props.title,
                            linkTo: n.props.linkTo,
                            thumbnailImageProps: {
                                src: n.props.imageSrc,
                                alt: n.props.imageAlt
                            },
                            channelLogin: n.props.channelName,
                            channelLoginLinkTo: n.props.channelNameLinkTo,
                            channelImageProps: {
                                src: n.props.channelImageSrc || "",
                                alt: n.props.channelName
                            },
                            gameTitle: n.props.gameTitle,
                            gameTitleLinkTo: n.props.gameLinkTo,
                            gameBoxArtImageProps: {
                                src: n.props.gameImageSrc,
                                alt: n.props.gameTitle
                            },
                            playerMetadata: n.props.streamMetadata || void 0,
                            playerMetadataGame: n.props.streamMetadata ? n.props.gameTitle : void 0,
                            streamType: n.props.streamType || d.a.Live,
                            currentViewerCount: n.props.viewerCount,
                            enableLivePreview: n.props.enableLivePreview,
                            hostedByChannelLogin: n.props.hostedByChannelLogin
                        }))
                    }, n.renderFallback = function() {
                        var e = null;
                        !0 !== n.state.isPremiereExperimentActive && n.props.vodcast && (e = r.createElement(C._8, {
                            display: C.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, r.createElement(C._12, {
                            label: Object(o.d)("Vodcast", "LiveChannelCard")
                        })));
                        var t = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                            viewerCount: n.props.viewerCount,
                            channel: r.createElement(i.a, {
                                to: n.props.channelNameLinkTo,
                                className: "live-channel-card__videos",
                                "data-a-target": "live-channel-card-channel-name-link"
                            }, n.props.channelName)
                        }, "Live Channel Card");
                        return r.createElement("div", a.__assign({
                            className: "live-channel-card"
                        }, Object(C._61)(n.props)), r.createElement(C.C, {
                            key: n.props.title
                        }, r.createElement(C._8, {
                            fullWidth: !0
                        }, r.createElement(C.k, {
                            overflow: !0
                        }, r.createElement("div", null, r.createElement(i.a, {
                            to: n.props.linkTo,
                            title: n.props.hideTooltip ? void 0 : n.props.title,
                            "data-a-target": "live-channel-card-thumbnail-link",
                            "data-test-selector": N
                        }, n.props.children ? n.props.children : r.createElement(C.E, {
                            alt: n.props.imageAlt,
                            src: n.props.imageSrc,
                            aspect: C.l.Aspect16x9
                        }), n.renderContentType()), n.renderGameBoxArt()))), r.createElement(C.D, null, r.createElement(C._8, {
                            display: C.R.Flex,
                            flexWrap: C.U.NoWrap
                        }, r.createElement(C._8, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, r.createElement(i.a, {
                            to: n.props.linkTo,
                            className: "live-channel-card__channel",
                            "data-a-target": "live-channel-card-title-link"
                        }, r.createElement(C._2, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(C.Q, {
                            type: C._47.H3,
                            fontSize: C.V.Size5,
                            lineHeight: C._9.Body,
                            ellipsis: !0,
                            className: "live-channel-card__title"
                        }, n.props.title))), r.createElement(C._8, {
                            className: "live-channel-card__meta",
                            display: C.R.Flex,
                            flexWrap: C.U.NoWrap
                        }, e, r.createElement(C.Q, {
                            type: C._47.Span,
                            ellipsis: !0
                        }, t))), r.createElement(C._8, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, n.renderStreamMetadata())))))
                    }, n.state = {
                        isPremiereExperimentActive: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    "yes" === o.o.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW") && o.b.get("premiere_video_manager_staff", !1) && this.setState({
                        isPremiereExperimentActive: !0
                    })
                }, t.prototype.render = function() {
                    var e = {
                        assignments: {
                            fallback: this.renderFallback,
                            variation: this.renderVariation
                        },
                        loader: function() {
                            return r.createElement(m.VideoPreviewCardPlaceholder, null)
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return r.createElement(s.a, a.__assign({}, e))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? r.createElement(i.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, r.createElement(C._33, {
                        className: "live-channel-card__boxart",
                        position: C._15.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(C._50, {
                        display: C.R.Block,
                        direction: C._52.Bottom,
                        label: t
                    }, r.createElement(C.E, {
                        src: n,
                        alt: t,
                        aspect: C.l.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(C._8, {
                        position: C._15.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(c.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? r.createElement(L, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(r.Component),
            x = I;
        n.d(t, !1, function() {
            return N
        }), n.d(t, !1, function() {
            return I
        }), n.d(t, "a", function() {
            return x
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
                    if (this.props.isFollowingAllGamesInCategory) return r.createElement(c.w, {
                        ariaLabel: Object(i.d)("Unfollow All", "OnboardingFollowCategory"),
                        "data-test-selector": "onboarding-follow-category-button-component",
                        icon: c._24.Heart,
                        onClick: this.onUnfollow,
                        statusAlertIcon: c._24.Unheart
                    });
                    var e = Object(i.d)("Follow All", "OnboardingFollowCategory");
                    return r.createElement(c.v, {
                        icon: c._24.Heart,
                        ariaLabel: e,
                        "data-test-selector": "onboarding-follow-category-button-component",
                        onClick: this.onFollow
                    }, e)
                }, t
            }(r.Component),
            m = n("DBTH"),
            u = n("v5ho"),
            p = 3,
            h = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.renderCategoryContent = function() {
                        if (n.props.withStreams) {
                            var e = n.props.data.games.slice(0, p);
                            return r.createElement(l.a, {
                                names: e,
                                withAd: n.props.withAd,
                                directoryType: u.a.Games,
                                trackingMedium: n.props.trackingMedium
                            })
                        }
                        var t = void 0;
                        return n.props.withStreams || n.props.withBoxArtGameCards || (t = {
                            category: n.props.data.name,
                            categoryChange: n.state.categoryChange,
                            onFollow: n.props.onFollow,
                            onUnfollow: n.props.onUnfollow
                        }), r.createElement(s.a, {
                            names: n.props.data.games,
                            directoryType: u.a.Games,
                            cardSize: n.props.cardSize,
                            withAd: n.props.withAd,
                            followGameCardOptions: t,
                            isScrollable: !0
                        })
                    }, n.onFollowCategoryChange = function(e, t) {
                        n.setState({
                            categoryChange: {
                                timestampMs: Date.now(),
                                shouldFollow: t,
                                category: e
                            }
                        })
                    };
                    var a = i.o.experiments.getAssignment(m.j);
                    return n.state = {
                        categoryChange: null,
                        isFollowCategoriesExperimentEnabled: a === m.d.ENABLED
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(c._8, {
                        "data-test-selector": "community-category",
                        flexShrink: 0
                    }, r.createElement(c._8, {
                        alignItems: c.c.Center,
                        display: c.R.Flex,
                        flexWrap: c.U.NoWrap
                    }, r.createElement(c._8, {
                        margin: {
                            x: 1,
                            bottom: .5
                        }
                    }, r.createElement(c.Q, {
                        "data-test-selector": "community-category__title",
                        color: c.K.Base,
                        fontSize: c.V.Size3,
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
                    }(this.props.data.name))), this.state.isFollowCategoriesExperimentEnabled && !this.props.withStreams && !this.props.withBoxArtGameCards && r.createElement(c._33, {
                        margin: {
                            left: 2
                        }
                    }, r.createElement(d, {
                        category: this.props.data,
                        onFollowCategoryChange: this.onFollowCategoryChange,
                        isFollowingAllGamesInCategory: this.props.isFollowingAllGamesInCategory
                    }))), r.createElement(c._8, null, r.createElement(c._2, {
                        flexGrow: 1
                    }, this.renderCategoryContent())))
                }, t
            }(r.Component),
            g = Object(o.d)("CommunityCategory", {
                autoReportInteractive: !0
            })(h);
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
            m = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            u = function(e) {
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
                            if (n.props.slotID === c.b.directory.rectangle) return void((a = n.slotRef.querySelector(m)) && 1 !== a.clientWidth && n.setState({
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
        })(u);
        n.d(t, "a", function() {
            return p
        })
    },
    "/SNv": function(e, t, n) {
        e.exports = n.p + "assets/hearthstone-classes-b3b59eedbe78268cf62299a41ec09be1.png"
    },
    "/gww": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            r = n("2KeS"),
            i = n("V5M+"),
            o = n("TToO"),
            s = n("GiK3"),
            l = n("3zLD"),
            c = n("6sO2"),
            d = n("+8VM"),
            m = n("7vx8"),
            u = n("oIkB"),
            p = n("vH/s"),
            h = n("UQNI"),
            g = n("Odds"),
            v = n("nC3l"),
            f = (n("sJt0"), "error-message"),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? s.createElement(g._8, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(g.Q, {
                            color: g.K.Error,
                            type: g._47.H4,
                            "data-test-selector": f
                        }, Object(h.a)(t.state.error))) : null
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
                                        return this.props.banUserFromCommunity ? (e = o.__assign({}, Object(u.a)({
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
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (c.o.tracking.track(p.SpadeEventType.CommunityModeration, {
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
                    return s.createElement(g._2, {
                        position: g._15.Relative
                    }, s.createElement(g._33, {
                        background: g.n.Base,
                        className: "stream-ban-modal"
                    }, s.createElement(g._8, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(g._8, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(g.Q, {
                        type: g._47.H4
                    }, Object(c.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), s.createElement(g._33, {
                        borderTop: !0
                    }, s.createElement(g._8, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(g.Q, {
                        bold: !0
                    }, Object(c.d)("Reason (Required)", "StreamBanModal")), s.createElement(g._4, {
                        type: g._5.Text,
                        placeholder: Object(c.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), s.createElement(g._33, {
                        borderTop: !0
                    }, s.createElement(g._8, {
                        padding: {
                            top: 2
                        },
                        textAlign: g._43.Center
                    }, s.createElement(g._8, {
                        display: g.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(g.v, {
                        type: g.B.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(c.d)("Cancel", "StreamBanModal"))), s.createElement(g._8, {
                        display: g.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(g.v, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(c.d)("Ban", "StreamBanModal")))))), s.createElement(d.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(s.Component),
            _ = Object(l.compose)(Object(m.a)(v, {
                name: "banUserFromCommunity"
            }))(y);
        var w = Object(a.b)(null, function(e) {
            return Object(r.b)({
                onCloseModal: i.c
            }, e)
        })(_);
        n.d(t, "a", function() {
            return w
        })
    },
    "0w5y": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            r = n("2KeS"),
            i = n("V5M+"),
            o = n("TToO"),
            s = n("GiK3"),
            l = n("3zLD"),
            c = n("6sO2"),
            d = n("+8VM"),
            m = n("7vx8"),
            u = n("oIkB"),
            p = n("vH/s"),
            h = n("UQNI"),
            g = n("Odds"),
            v = (n("npyu"), n("plcU")),
            f = "error-message",
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? s.createElement(g._8, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(g.Q, {
                            color: g.K.Error,
                            type: g._47.H4,
                            "data-test-selector": f
                        }, Object(h.a)(t.state.error))) : null
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
                                        return this.props.timeoutUserFromCommunity ? (e = o.__assign({}, Object(u.a)({
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
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (c.o.tracking.track(p.SpadeEventType.CommunityModeration, {
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
                    return s.createElement(g._2, {
                        position: g._15.Relative
                    }, s.createElement(g._33, {
                        background: g.n.Base,
                        className: "stream-timeout-modal"
                    }, s.createElement(g._8, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(g._8, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(g.Q, {
                        type: g._47.H4
                    }, Object(c.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), s.createElement(g._33, {
                        borderTop: !0
                    }, s.createElement(g._8, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(g.Q, {
                        bold: !0
                    }, Object(c.d)("Reason (Required)", "StreamTimeoutModal")), s.createElement(g._4, {
                        type: g._5.Text,
                        placeholder: Object(c.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), s.createElement(g._8, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(g.Q, {
                        bold: !0
                    }, Object(c.d)("Duration", "StreamTimeoutModal")), s.createElement(g._29, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, s.createElement("option", {
                        value: "2"
                    }, Object(c.d)("2 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "4"
                    }, Object(c.d)("4 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "8"
                    }, Object(c.d)("8 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "12"
                    }, Object(c.d)("12 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "24"
                    }, Object(c.d)("24 hours", "StreamTimeoutModal")))), s.createElement(g._33, {
                        borderTop: !0
                    }, s.createElement(g._8, {
                        padding: {
                            top: 2
                        },
                        textAlign: g._43.Center
                    }, s.createElement(g._8, {
                        display: g.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(g.v, {
                        type: g.B.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(c.d)("Cancel", "StreamTimeoutModal"))), s.createElement(g._8, {
                        display: g.R.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(g.v, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(c.d)("Timeout", "StreamTimeoutModal")))))), s.createElement(d.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(s.Component),
            _ = Object(l.compose)(Object(m.a)(v, {
                name: "timeoutUserFromCommunity"
            }))(y);
        var w = Object(a.b)(null, function(e) {
            return Object(r.b)({
                onCloseModal: i.c
            }, e)
        })(_);
        n.d(t, "a", function() {
            return w
        })
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
            m = n("GiK3"),
            u = n("6sO2"),
            p = n("rCmJ"),
            h = n("7vx8"),
            g = n("NXs7"),
            v = n("VAT8"),
            f = n("CSlQ"),
            y = n("Odds"),
            _ = n("Kkxm"),
            w = (n("e6tx"), function(e) {
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
                    if (this.props.data.loading || this.props.data.error) return m.createElement(y._14, null);
                    if (this.props.isOnboarding) return m.createElement(y._8, {
                        display: y.R.Flex,
                        className: "minimal-top-nav__user",
                        fullHeight: !0
                    }, m.createElement(y._8, {
                        display: y.R.Flex,
                        flexWrap: y.U.NoWrap,
                        alignItems: y.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0
                    }, m.createElement(y._8, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, m.createElement(y._8, null, m.createElement(y.m, {
                        size: 30,
                        src: this.props.data.currentUser.profileImageURL,
                        alt: "User avatar"
                    }))), m.createElement(y._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: y.T.Column,
                        ellipsis: !0
                    }, m.createElement(y._33, {
                        className: "minimal-top-nav__username"
                    }, this.props.data.currentUser.displayName))));
                    if (this.props.isLoggedIn) {
                        var e = null;
                        this.props.darkModeEnabled && (e = m.createElement(y._33, {
                            borderBottom: !0,
                            margin: {
                                y: 1
                            }
                        }, m.createElement(y._8, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, m.createElement(y.J, {
                            id: "dark-mode-toggle",
                            label: Object(u.d)("Dark Mode", "MinimalUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === g.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }))));
                        var t = d(Object(v.c)(g.a.Dark), {
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }),
                            n = d({
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }, {
                                "minimal-top-nav__dropdown": !this.state.dropdownOpen
                            });
                        return m.createElement(p.a, {
                            onClickOut: this.onClickOut,
                            className: t
                        }, m.createElement(y._8, {
                            display: y.R.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, m.createElement(y._6, {
                            onClick: this.onCardClick,
                            "data-test-selector": "user-menu-toggle"
                        }, m.createElement(y._8, {
                            display: y.R.Flex,
                            flexWrap: y.U.NoWrap,
                            alignItems: y.c.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, m.createElement(y._8, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, m.createElement(y._8, null, m.createElement(y.m, {
                            size: 30,
                            src: this.props.data.currentUser.profileImageURL,
                            alt: "User avatar"
                        }))), m.createElement(y._8, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: y.T.Column,
                            ellipsis: !0
                        }, m.createElement(y._33, {
                            className: "minimal-top-nav__username"
                        }, this.props.data.currentUser.displayName)), m.createElement(y._33, {
                            display: y.R.Flex,
                            flexShrink: 0,
                            className: "minimal-top-nav__expand"
                        }, m.createElement(y._23, {
                            asset: y._24.GlyphArrDown
                        }))))), m.createElement(y._33, {
                            fullWidth: !0,
                            overflow: y._11.Hidden,
                            position: y._15.Absolute,
                            padding: {
                                y: 1
                            },
                            background: y.n.Base,
                            className: n,
                            "data-test-selector": "dropdown-down"
                        }, e, m.createElement(y._6, {
                            onClick: this.onLogoutClick
                        }, m.createElement(y._33, {
                            color: y.K.Alt,
                            display: y.R.Flex,
                            alignItems: y.c.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, m.createElement(y._8, {
                            display: y.R.Flex,
                            alignItems: y.c.Center,
                            margin: {
                                right: 1
                            }
                        }, m.createElement(y._23, {
                            asset: y._24.NavLogout,
                            height: 18,
                            width: 18
                        })), m.createElement(y.Q, null, Object(u.d)("Log Out", "MinimalUser"))))))
                    }
                    return m.createElement(y._8, {
                        margin: 1
                    }, m.createElement(y.v, {
                        onClick: this.onLoginClick
                    }, Object(u.d)("Log in", "MinimalUser")))
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(f.d)("MinimalUser"), Object(h.a)(_)], t)
            }(m.Component));
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
        })(w);
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
            m = n("IOwa"),
            u = n("2o2f"),
            p = n("KSGD"),
            h = n("6sO2"),
            g = n("S4HN"),
            v = n("AadB"),
            f = n("Odds"),
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
                    }, r.createElement(f._8, {
                        refDelegate: this.setRef
                    }, r.createElement(v.b, {
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
            w = "community-stream",
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderStream = function() {
                        return t.props.data ? r.createElement(f._8, {
                            "data-test-selector": w,
                            position: f._15.Relative
                        }, r.createElement(f._8, {
                            padding: .5,
                            position: f._15.Absolute,
                            zIndex: f._60.Above
                        }, r.createElement(m.a, {
                            type: u.a.Live
                        })), r.createElement(y, {
                            key: t.props.data.id,
                            trackingMedium: t.props.trackingMedium,
                            directoryName: t.props.directoryName,
                            directoryType: t.props.directoryType,
                            streamIndex: t.props.index,
                            streamNode: t.props.data
                        })) : r.createElement(f._8, {
                            "data-test-selector": _,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(f._8, {
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(f.k, {
                            ratio: f.l.Aspect16x9
                        }, r.createElement(f._14, null))), r.createElement(f.Q, null, r.createElement(f._14, {
                            width: 150
                        })), r.createElement(f.Q, {
                            fontSize: f.V.Size7
                        }, r.createElement(f._14, {
                            width: 100
                        })))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(f._8, null, this.renderStream())
                }, t
            }(r.Component),
            k = n("eqtY"),
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
                            return t && t.broadcaster && t.broadcaster.login
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
                }, t = a.__decorate([Object(l.a)(k, {
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
                        var e = r.createElement(f._8, {
                                key: "ad",
                                "data-test-selector": E,
                                display: f.R.Flex,
                                flexGrow: 1,
                                justifyContent: f._7.Center,
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
                                return r.createElement(f.L, {
                                    key: "stream-" + t.toString(),
                                    cols: 4
                                }, e)
                            });
                        return n.splice(2, 0, e), r.createElement(f._8, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(f.Y, {
                            gutterSize: f.Z.Medium
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
                    return r.createElement(f._8, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(f._53, {
                        gutterSize: f._55.Small,
                        childWidth: f._54.Large,
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
                return r.createElement(c._2, {
                    position: c._15.Relative,
                    margin: {
                        bottom: 1
                    }
                }, r.createElement("div", a.__assign({
                    className: "follow-game-card",
                    "data-test-selector": "follow-game-card",
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    onClick: this.onClick
                }, Object(c._61)(this.props)), r.createElement(c.C, {
                    key: this.props.title
                }, r.createElement(c._8, {
                    position: c._15.Relative
                }, this.renderOverlay(), r.createElement(c.E, {
                    aspect: c.l.Aspect3x4,
                    alt: this.props.imageAlt,
                    src: this.props.imageSrc
                })), r.createElement(c.D, null, r.createElement(c._8, {
                    margin: {
                        top: .5,
                        bottom: 1
                    }
                }, r.createElement(c.Q, {
                    color: c.K.Base,
                    fontSize: c.V.Size5
                }, this.props.title), r.createElement(c.Q, {
                    color: c.K.Alt,
                    fontSize: c.V.Size6
                }, this.props.info))))))
            }, t.prototype.renderOverlay = function() {
                var e, t = this.isFollowing();
                return this.state.inProgress ? e = r.createElement(c._10, {
                    delay: 0
                }) : this.state.hovered ? e = r.createElement(c._23, {
                    width: 50,
                    height: 50,
                    asset: t ? c._24.Unheart : c._24.Heart
                }) : t && (e = r.createElement(c._23, {
                    width: 50,
                    height: 50,
                    asset: c._24.Heart
                })), e ? r.createElement(c._33, {
                    className: "follow-game-card__overlay " + (t ? "follow-game-card__overlay--followed" : ""),
                    background: c.n.Overlay,
                    color: c.K.Overlay,
                    "data-a-target": t ? "follow-game-card--followed" : "",
                    display: c.R.Flex,
                    alignItems: c.c.Center,
                    justifyContent: c._7.Center,
                    position: c._15.Absolute,
                    zIndex: c._60.Above,
                    attachBottom: !0,
                    attachTop: !0,
                    attachLeft: !0,
                    attachRight: !0
                }, e) : null
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
                                        l(e, m, {
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
                                        l(e, m, {
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
            }, t = a.__decorate([Object(i.a)(m, {
                options: function(e) {
                    return {
                        variables: {
                            name: e.title
                        }
                    }
                }
            }), Object(i.a)(d, {
                name: "followGame"
            }), Object(i.a)(u, {
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
    "81qH": function(e, t, n) {
        "use strict";
        var a = n("aBed");
        n.d(t, "VideoPreviewCard", function() {
            return a.a
        });
        var r = n("a4C9"),
            i = (n.n(r), n("XYqD"));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return i.a
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
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
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
                        return [2, n.e(116).then(n.bind(null, "Revh"))]
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
            s = n("iOr9"),
            l = n("+GT7"),
            c = n("vKFS"),
            d = n("6BvN"),
            m = n("SZoP"),
            u = n("NY9D"),
            p = n("vH/s"),
            h = n("HW6M"),
            g = n("Odds"),
            v = (n("ehrk"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = h("live-channel-preview-card", {
                        "live-channel-preview-card--loading": !this.props.streamLoaded
                    });
                    return r.createElement("div", a.__assign({
                        className: e,
                        "data-test-selector": "live-channel-preview-card"
                    }, Object(g._61)(this.props)), r.createElement(l.a, a.__assign({}, this.props), r.createElement(g.k, {
                        ratio: g.l.Aspect16x9
                    }, this.props.videoPlayer)))
                }, t
            }(r.Component)),
            f = n("v5ho"),
            y = n("RH2O"),
            _ = n("2KeS"),
            w = n("V5M+"),
            b = n("jetF"),
            k = n("7vx8"),
            S = n("CSlQ"),
            E = n("/gww"),
            C = n("0w5y"),
            O = n("PO03"),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(m.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(E.a, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(m.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(C.a, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? r.createElement(b.a, null, r.createElement(g.w, {
                        ariaLabel: Object(o.d)("Moderation", "DirectoryGamePage"),
                        icon: g._24.ChatRiskFlag
                    }), r.createElement(g.q, {
                        direction: g.r.BottomRight,
                        size: g.s.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? r.createElement(g._6, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, r.createElement(g._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? r.createElement(g._6, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, r.createElement(g._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Timeout", "StreamFlag"))) : null
                }, t = a.__decorate([Object(k.a)(O, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.communityName
                            }
                        }
                    }
                }), Object(S.d)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component);
        var L = Object(y.b)(null, function(e) {
                return Object(_.b)({
                    onShowModal: w.d
                }, e)
            })(T),
            N = n("vKYI"),
            I = n("PLRK"),
            x = (n("GiGb"), "directory-first-item"),
            P = "directory-game__card_container",
            D = 5e3,
            F = 300,
            R = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderVariation = function() {
                        var e = n.props.streamNode,
                            t = n.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var i = {
                            context: n.props.directoryType === f.a.Games ? c.b.SingleGameList : c.b.MixedGameAndChannelList,
                            title: e.title || I.a,
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            thumbnailImageProps: {
                                src: e.previewImageURL || o.a.defaultStreamPreviewURL,
                                alt: "" + e.broadcaster.login
                            },
                            channelLogin: e.broadcaster.login || "",
                            channelLoginLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            channelImageProps: {
                                src: e.broadcaster.profileImageURL || "",
                                alt: "" + e.broadcaster.login
                            },
                            gameTitle: n.shouldShowGame("name"),
                            gameTitleLinkTo: n.getLinkTo(Object(u.c)(n.shouldShowGame("name")), t),
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
                        return r.createElement("div", {
                            className: "stream-thumbnail",
                            ref: n.setRef,
                            "data-target": t ? "" : x,
                            style: {
                                order: t
                            }
                        }, r.createElement(g._8, {
                            className: "stream-thumbnail__card",
                            position: g._15.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": P
                        }, r.createElement(c.a, a.__assign({}, i, {
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        })), n.renderStreamFlag()))
                    }, n.renderFallback = function() {
                        var e = n.props.streamNode,
                            t = n.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var a = n.props.showPreview && n.state.hovered && n.state.loadingPreview && !n.state.streamLoaded && !n.state.previewTimedOut,
                            i = n.props.showPreview && n.state.hovered && (n.state.loadingPreview || n.state.streamLoaded) && !n.state.previewTimedOut;
                        return r.createElement("div", {
                            className: "stream-thumbnail",
                            ref: n.setRef,
                            "data-target": t ? "" : x,
                            onKeyDown: n.onKeyDown,
                            onMouseLeave: n.onMouseLeaveHandler,
                            style: {
                                order: t
                            }
                        }, r.createElement(g._8, {
                            className: "stream-thumbnail__card",
                            position: g._15.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": P
                        }, a && r.createElement(g._33, {
                            attachRight: !0,
                            attachTop: !0,
                            background: g.n.Overlay,
                            borderRadius: g.t.Small,
                            color: g.K.OverlayAlt,
                            margin: .5,
                            padding: .5,
                            position: g._15.Absolute,
                            zIndex: g._60.Above
                        }, r.createElement(g._10, {
                            fillContent: !0,
                            inheritColor: !0,
                            size: g._31.Small
                        })), !n.state.streamLoaded && r.createElement(l.a, {
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || I.a,
                            channelName: Object(m.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                            gameImageSrc: n.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                            gameTitle: n.shouldShowGame("name"),
                            gameLinkTo: n.getLinkTo(Object(u.c)(n.shouldShowGame("name")), t),
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            channelNameLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            streamType: e.type,
                            streamMetadata: e.streamMetadata,
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        }), i && r.createElement(v, {
                            streamLoaded: n.state.streamLoaded,
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || I.a,
                            channelName: Object(m.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                            gameImageSrc: n.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                            gameTitle: n.shouldShowGame("name"),
                            gameLinkTo: n.getLinkTo(Object(u.c)(n.shouldShowGame("name")), t),
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            channelNameLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            streamType: e.type,
                            streamMetadata: e.streamMetadata,
                            videoPlayer: n.getVideoPlayer(),
                            hideTooltip: !0
                        }), n.renderStreamFlag()))
                    }, n.getLinkTo = function(e, t) {
                        var a = n.props.trackingContent ? n.props.trackingContent : p.PageviewContent.Live,
                            r = n.props.directoryType === f.a.Communities ? p.PageviewMedium.Community : p.PageviewMedium.Game;
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
                        return e.broadcaster ? n.props.directoryType === f.a.Communities && n.props.directoryName ? r.createElement(g._8, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: g._15.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, r.createElement(L, {
                            communityName: n.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, n.shouldShowGame = function(e) {
                        return n.props.directoryType !== f.a.Games && n.props.streamNode.game ? n.props.streamNode.game[e] : ""
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
                            }, F)
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
                        n.state.focused && ((e.charCode || e.keyCode) === d.a.Tab && n.onMouseLeaveHandler())
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
                        }, D)
                    }, n.setRef = function(e) {
                        e && (n.thumbnailNode = i.findDOMNode(e), n.addThumbnailListener())
                    }, n.getVideoPlayer = function() {
                        var e = {
                            onPlayerPlaying: n.onStreamLoaded
                        };
                        if (n.props.showPreview && n.state.hovered && n.props.streamNode.broadcaster && n.props.streamNode.broadcaster.login) return r.createElement(N.a, a.__assign({
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
                    var e = {
                        assignments: {
                            fallback: this.renderFallback,
                            variation: this.renderVariation
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return r.createElement(s.a, a.__assign({}, e))
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return x
        }), n.d(t, !1, function() {
            return P
        }), n.d(t, "b", function() {
            return R
        })
    },
    AtoX: function(e, t) {},
    BJwU: function(e, t) {},
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
    EOpv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return i
        });
        var a, r = n("6sO2");
        ! function(e) {
            e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
        }(a || (a = {}));
        var i = function(e) {
            switch (e) {
                case a.CSGOMap:
                    return Object(r.d)("Map", "CSGOMapFilter");
                case a.CSGOSkillGroup:
                    return Object(r.d)("Rank", "CSGORankFilter");
                case a.HearthstoneClass:
                    return Object(r.d)("Class", "HearthstoneClassFilter");
                case a.HearthstoneMode:
                    return Object(r.d)("Mode", "HearthstoneModeFilter");
                case a.LeagueChampion:
                    return Object(r.d)("Champion", "LeagueFilter");
                case a.OverwatchCharacter:
                    return Object(r.d)("Hero", "OverwatchFilter");
                default:
                    return ""
            }
        }
    },
    GiGb: function(e, t) {},
    IJO1: function(e, t) {},
    IOwa: function(e, t, n) {
        "use strict";
        var a, r, i, o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            c = n("6sO2"),
            d = n("2o2f"),
            m = n("Odds"),
            u = (n("CybZ"), (a = {})[d.a.Live] = "stream-type-indicator--live", a[d.a.Premiere] = "stream-type-indicator--premiere", a[d.a.Rerun] = "stream-type-indicator--rerun", a[d.a.WatchParty] = "stream-type-indicator--rerun", a),
            p = ((r = {})[d.a.Premiere] = m._24.VideoPremiere, r[d.a.Rerun] = m._24.VideoRerun, r[d.a.WatchParty] = m._24.VideoRerun, r),
            h = ((i = {})[d.a.Premiere] = m._25.Live, i[d.a.Rerun] = m._25.Inherit, i[d.a.WatchParty] = m._25.Inherit, i),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(m._33, {
                        className: this.getClassNames(),
                        color: m.K.Overlay,
                        background: m.n.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: m.t.Small,
                        display: m.R.Flex
                    }, l.createElement(m._8, {
                        display: m.R.Flex,
                        alignItems: m.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(m.Q, {
                        type: m._47.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[u[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(m._33, {
                        borderRadius: m.t.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === d.a.Live ? l.createElement(m._8, {
                        className: "stream-type-indicator__live-wrapper",
                        display: m.R.Flex,
                        alignItems: m.c.Center
                    }, l.createElement(m.G, {
                        status: m.I.Live,
                        size: m.H.Small
                    })) : l.createElement(m._23, {
                        asset: p[this.props.type],
                        type: h[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case d.a.Live:
                            return Object(c.d)("LIVE", "StreamTypeIndicator");
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
                                return [4, n.e(121).then(n.bind(null, "tk3B"))];
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
                                return [4, n.e(120).then(n.bind(null, "e/M0"))];
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
                                return [4, n.e(119).then(n.bind(null, "Dan5"))];
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
                                return [4, n.e(118).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            }
    },
    Lwev: function(e, t) {},
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
                        var e, n, s, d, m, u;
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
                                    return (m = a.sent()).body ? t(Object(c.f)(m.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.d)(!0))), [3, 4];
                                case 3:
                                    throw u = a.sent(), t(Object(c.d)(!0)), e.error(u, "Failed to load LoL champion data"), u;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, m)
            }
        };
        var d = 0,
            m = 350
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
            return m
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
            m = function(e) {
                i.n.track(o.SpadeEventType.BrowseForYou, e)
            }
    },
    UQNI: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var a = n("6sO2"),
            r = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(a.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(a.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(a.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(a.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(a.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(a.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            }
    },
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-9fc82f039194a365a8d6d2bf2797e041.png"
    },
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var a = n("GiK3"),
            r = (n.n(a), n("Odds")),
            i = function() {
                return a.createElement(r.C, null, a.createElement(r.k, {
                    ratio: r.l.Aspect16x9
                }, a.createElement(r._14, null)), a.createElement(r.D, null, a.createElement(r._8, {
                    display: r.R.Flex,
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(r._8, {
                    display: r.R.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, a.createElement(r._14, {
                    width: 40,
                    height: 56
                })), a.createElement(r._8, {
                    display: r.R.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, a.createElement(r.Q, null, a.createElement(r._14, {
                    width: 150
                })), a.createElement(r.Q, {
                    fontSize: r.V.Size7
                }, a.createElement(r._14, {
                    width: 100
                }))))))
            }
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
            m = n("7tMz"),
            u = n("6sO2"),
            p = n("NY9D"),
            h = n("5G5w"),
            g = n("k2jn"),
            v = n("Odds"),
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return null === this.props.game ? r.createElement(v._8, {
                        "data-test-selector": "community-card__placeholder",
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(v._8, {
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(v.k, {
                        ratio: v.l.BoxArt
                    }, r.createElement(v._14, null)))) : this.props.followGameCardOptions ? r.createElement(v._8, {
                        key: this.props.followGameCardOptions.category + "-game-" + this.props.game.id
                    }, r.createElement(h.a, {
                        "data-a-target": "follow-game-card-" + this.props.game.id,
                        "data-test-selector": g.c,
                        info: this.props.game.viewersCount ? Object(u.d)("{viewerCount,number} viewers", {
                            viewerCount: this.props.game.viewersCount
                        }, "CommunitySelectionFollowCard") : "",
                        title: this.props.game.name,
                        imageAlt: this.props.game.name,
                        imageSrc: this.props.game.boxArtURL,
                        onFollow: this.props.followGameCardOptions.onFollow,
                        onUnfollow: this.props.followGameCardOptions.onUnfollow,
                        categoryChange: this.props.followGameCardOptions.categoryChange
                    })) : r.createElement(v._8, {
                        key: "game-" + this.props.game.id,
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(v.u, {
                        title: this.props.game.name,
                        info: this.props.game.viewersCount ? Object(u.d)("{viewerCount,number} viewers", {
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
            w = function(e) {
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
                    return r.createElement(f, {
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
                }), Object(m.a)("CommunityCard")], t)
            }(r.Component),
            b = n("yEZg"),
            k = "community-card-row__ad",
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
                        return r.createElement(v._8, {
                            padding: {
                                x: 1,
                                top: 2
                            }
                        }, r.createElement(v._53, {
                            gutterSize: v._55.Small,
                            childWidth: t.props.cardSize,
                            placeholderItems: t.props.placeholderItems ? t.props.placeholderItems : a,
                            noWrap: e
                        }, n))
                    }, t.renderCardGridWithAdSlot = function() {
                        var e = r.createElement(v._8, {
                                key: "ad",
                                "data-test-selector": k,
                                display: v.R.Flex,
                                flexGrow: 1,
                                justifyContent: v._7.Center,
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
                                return r.createElement(v.L, {
                                    key: "game-" + t.toString(),
                                    cols: 2
                                }, e)
                            });
                        return n.splice(4, 0, e), r.createElement(v._8, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(v.Y, null, n))
                    }, t.renderCardsFromProps = function() {
                        if (t.props.games) {
                            var e = t.props.games;
                            return t.props.withAd && !t.state.adDisplayed && (e = e.slice(0, b.GAME_DISPLAY_LIMIT)), e.map(function(e, n) {
                                return r.createElement(f, {
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
                                return r.createElement(w, {
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
            return k
        }), n.d(t, !1, function() {
            return S
        }), n.d(t, "a", function() {
            return E
        })
    },
    YUUt: function(e, t, n) {
        e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc37349dfbde7c720.png"
    },
    YVIF: function(e, t) {},
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return w
        });
        var a = n("TToO"),
            r = n("HW6M"),
            i = (n.n(r), n("OAwv")),
            o = (n.n(i), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("6sO2"),
            c = n("iOr9"),
            d = n("vKFS"),
            m = n("SZoP"),
            u = n("mi6k"),
            p = n("CSlQ"),
            h = n("81qH"),
            g = n("Odds"),
            v = n("a0ve"),
            f = (n.n(v), "video-view-count"),
            y = "video-length",
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.renderVariation = function() {
                        return o.createElement(d.a, {
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
                            watchedProgressPercent: t.getVideoPreviousWatchPercentage() || 0
                        })
                    }, t.renderFallback = function() {
                        var e = null,
                            n = t.getVideoPreviousWatchPercentage();
                        return null !== n && (e = o.createElement(g._8, {
                            position: g._15.Absolute,
                            attachBottom: !0,
                            fullWidth: !0
                        }, o.createElement(g._18, {
                            size: g._20.Small,
                            value: n,
                            mask: !0
                        }))), o.createElement("div", a.__assign({
                            onClick: t.onClickHandler,
                            onMouseEnter: t.onMouseEnterHandler,
                            onMouseLeave: t.onMouseLeaveHandler
                        }, Object(g._61)(t.props)), o.createElement(g.C, null, o.createElement(g._8, {
                            fullWidth: !0
                        }, o.createElement(g.k, {
                            overflow: !0
                        }, o.createElement("div", null, o.createElement(g._33, {
                            display: g.R.InlineFlex,
                            position: g._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: .5,
                            zIndex: g._60.Default,
                            fontSize: g.V.Size6,
                            background: g.n.Overlay,
                            color: g.K.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(g._32, {
                            "data-test-selector": f,
                            icon: g._24.GlyphViews,
                            label: Object(l.d)("views", "VideoPreviewCard"),
                            value: Object(l.f)(t.props.video.viewCount)
                        })), o.createElement(g._33, {
                            display: g.R.InlineFlex,
                            position: g._15.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            margin: .5,
                            zIndex: g._60.Default,
                            fontSize: g.V.Size6,
                            background: g.n.Overlay,
                            color: g.K.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(g._32, {
                            "data-test-selector": y,
                            icon: g._24.GlyphLength,
                            label: Object(l.d)("length", "VideoPreviewCard"),
                            value: Object(u.b)(t.props.video.lengthSeconds)
                        })), t.videoPreviewImage(), e))), o.createElement(g.D, null, o.createElement(g._8, {
                            display: g.R.Flex,
                            flexDirection: g.T.Row,
                            flexWrap: g.U.NoWrap,
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.overrideImageInteractivity && this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = {
                        assignments: {
                            fallback: this.renderFallback,
                            variation: this.renderVariation
                        },
                        loader: function() {
                            return o.createElement(h.VideoPreviewCardPlaceholder, null)
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return o.createElement(c.a, a.__assign({}, e))
                }, t.prototype.generateSearchString = function() {
                    var e = {};
                    this.props.collectionID && (e.collection = this.props.collectionID);
                    var t = i.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = r("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        }),
                        n = r("video-preview-card__preview-image", {
                            "video-preview-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return o.createElement(g.k, {
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
                    }, o.createElement(g._2, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(g.k, {
                        ratio: g.l.Aspect16x9
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
                        n = r("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        });
                    return o.createElement(g._8, {
                        "data-test-selector": "game-box-art",
                        display: g.R.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(g._2, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(g._50, {
                        display: g.R.Block,
                        direction: g._52.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(g.E, {
                        aspect: g.l.BoxArt,
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
                            title: Object(m.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(m.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return o.createElement(g._8, {
                        display: g.R.Flex,
                        flexDirection: g.T.Column,
                        overflow: g._11.Hidden
                    }, o.createElement(g._8, {
                        "data-test-selector": "video-title",
                        overflow: g._11.Hidden,
                        position: g._15.Relative
                    }, o.createElement(g.Q, {
                        color: g.K.Base,
                        fontSize: g.V.Size5,
                        lineHeight: g._9.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(g._8, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(g.Q, {
                        type: g._47.Span,
                        color: g.K.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(g._2, {
                        padding: {
                            x: .5
                        }
                    }, o.createElement("span", null, "·")), t)))
                }, t.prototype.getVideoPreviousWatchPercentage = function() {
                    return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                }, t.prototype.showGameArt = function() {
                    return !this.props.hideGameArt && this.props.video.game && "" !== this.props.video.game.name
                }, t.prototype.formatTitle = function(e) {
                    if (this.props.video.owner) return e + " · " + Object(m.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                }, t.prototype.getLinkState = function() {
                    return {
                        content: this.props.tracking.content,
                        content_index: this.props.tracking.content_index,
                        medium: this.props.tracking.medium
                    }
                }, t
            }(o.Component),
            w = Object(p.d)("VideoPreviewCard")(_)
    },
    e6tx: function(e, t) {},
    ea7N: function(e, t) {},
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
    jpZi: function(e, t) {},
    k2jn: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return w
        }), n.d(t, "a", function() {
            return b
        }), n.d(t, "b", function() {
            return E
        });
        var a = n("TToO"),
            r = n("GiK3"),
            i = (n.n(r), n("3zLD")),
            o = (n.n(i), n("6sO2")),
            s = n("zCIC"),
            l = n("Th9g"),
            c = n("7vx8"),
            d = n("vH/s"),
            m = n("CSlQ"),
            u = n("XhYx"),
            p = n("+I3D"),
            h = n("DBTH"),
            g = n("S4HN"),
            v = n("v5ho"),
            f = n("Odds"),
            y = n("wd/y"),
            _ = (n.n(y), n("ND9m")),
            w = (n.n(_), "onboarding_game"),
            b = 100,
            k = 500,
            S = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.doneInitialRedirectCheck = !1, n.gameToCategories = {}, n.onFollow = function(e) {
                        n.props.data.updateQuery(function(t) {
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
                        }), Object(g.e)(d.SpadeEventType.GameFollow, e)
                    }, n.onUnfollow = function(e) {
                        n.props.data.updateQuery(function(t) {
                            return t.currentUser && t.currentUser.followedGames && t.currentUser.followedGames.nodes ? a.__assign({}, t, {
                                currentUser: a.__assign({}, t.currentUser, {
                                    followedGames: a.__assign({}, t.currentUser.followedGames, {
                                        nodes: t.currentUser.followedGames.nodes.filter(function(t) {
                                            return t.name !== e
                                        })
                                    })
                                })
                            }) : t
                        }), Object(g.e)(d.SpadeEventType.GameUnfollow, e)
                    }, n.completeAndRedirectToForYou = function() {
                        Object(g.d)();
                        var e = "" === location.search ? "?tt_medium=onboarding" : location.search + "&tt_medium=onboarding";
                        window.location.assign("/directory/following/foryou" + e)
                    }, n.moveNextToChannelSurfing = function() {
                        o.o.history.push("/hi/surf" + location.search)
                    }, n.redirectToFrontPage = function() {
                        window.location.assign("/" + location.search)
                    }, n.onGameInputChange = function(e) {
                        e.persist(), n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), n.inputTimer = setTimeout(function() {
                            n.props.onSearchChange(e.target.value), n.inputTimer = 0
                        }, k)
                    }, n.userFollowedGamesDataLoaded = function(e) {
                        return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                    };
                    var r = o.o.experiments.getAssignment(h.i),
                        i = o.o.experiments.getAssignment(h.h);
                    return n.state = {
                        inOnboardingExperiment: Object(h.n)(r),
                        inChannelSurfingExperiment: Object(h.m)(r, i)
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.shouldRedirect(this.props, this.state) && this.redirectToFrontPage(), o.o.setPageTitle(Object(o.d)("Welcome", "CommunitySelectionPage"))
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.shouldRedirect(e, t) && this.redirectToFrontPage(), (!this.props.categoryData && e.categoryData || this.props.categoryData && e.categoryData && this.props.categoryData.length !== e.categoryData.length) && this.mapGamesToCategories(e.categoryData)
                }, t.prototype.componentDidUpdate = function() {
                    this.userFollowedGamesDataLoaded(this.props) && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.userFollowedGamesDataLoaded(this.props) && this.state.inOnboardingExperiment ? r.createElement(f._33, {
                        className: "community-selection-page",
                        "data-a-target": "community-selection-page",
                        "data-test-selector": "onboarding-community-selection",
                        background: f.n.Alt2,
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        fullHeight: !0
                    }, r.createElement(f._33, {
                        background: f.n.Base,
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        alignItems: f.c.Center,
                        justifyContent: f._7.Center,
                        padding: {
                            x: 4,
                            y: 1
                        },
                        breakpointMedium: {
                            padding: {
                                x: 2
                            }
                        },
                        flexShrink: 0,
                        fullWidth: !0,
                        borderBottom: !0
                    }, r.createElement(f._8, {
                        className: "community-selection-page__search",
                        position: f._15.Absolute,
                        margin: {
                            left: 1
                        },
                        attachLeft: !0
                    }, r.createElement(f._26, {
                        id: "onboarding-community-selection__search",
                        "data-a-target": "onboarding-community-selection__search",
                        onChange: this.onGameInputChange,
                        placeholder: "Search Games",
                        spellCheck: !1
                    })), this.renderTitleText(), this.renderCTA()), r.createElement(f._18, {
                        size: f._20.Small,
                        value: this.calculateProgress()
                    }), r.createElement(s.b, null, r.createElement(f._33, {
                        background: f.n.Alt2,
                        overflow: f._11.Hidden,
                        padding: {
                            left: 1,
                            y: 2
                        },
                        fullHeight: !0
                    }, this.renderGameCardsOrCategories(), r.createElement(s.a, {
                        enabled: this.props.categoriesInfiniteScrollEnabled,
                        loadMore: this.props.onLoadMoreCategories,
                        orientation: l.b.Down,
                        pixelThreshold: 20
                    })))) : this.props.data.error ? (o.j.warn("Data Error in Onboarding Community Selection", this.props.data.error), r.createElement(f._8, {
                        display: f.R.Flex
                    }, r.createElement(f.Q, {
                        fontSize: f.V.Size5,
                        color: f.K.Alt
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
                }, t.prototype.shouldRedirect = function(e, t) {
                    return !(!this.userFollowedGamesDataLoaded(e) || !(!1 === t.inOnboardingExperiment || !this.doneInitialRedirectCheck && !e.data.currentUser || e.data.currentUser.followedGames.nodes.length >= 10)) && (this.doneInitialRedirectCheck = !0, !0)
                }, t.prototype.renderTitleText = function() {
                    return r.createElement(f._8, {
                        display: f.R.Flex,
                        alignItems: f.c.Center,
                        flexDirection: f.T.Column,
                        flexShrink: 0
                    }, r.createElement(f._8, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(f.Q, {
                        color: f.K.Base,
                        fontSize: f.V.Size5,
                        breakpointLarge: {
                            fontSize: f.V.Size4
                        },
                        breakpointExtraExtraLarge: {
                            fontSize: f.V.Size3
                        }
                    }, Object(o.d)("First, pick three or more you’d like to watch.", "CommunitySelectionPage"))), r.createElement(f._8, {
                        margin: {
                            y: .5
                        },
                        display: f.R.Hide,
                        breakpointMedium: {
                            display: f.R.Block
                        }
                    }, r.createElement(f.Q, {
                        color: f.K.Alt,
                        fontSize: f.V.Size6,
                        breakpointLarge: {
                            fontSize: f.V.Size5
                        },
                        breakpointExtraExtraLarge: {
                            fontSize: f.V.Size4
                        }
                    }, Object(o.d)("We have tons of games, hobbies, and activities being streamed right now.", "CommunitySelectionPage"))))
                }, t.prototype.renderCTA = function() {
                    return r.createElement(f._8, {
                        position: f._15.Absolute,
                        margin: {
                            right: 1
                        },
                        attachRight: !0
                    }, r.createElement(f.v, {
                        size: f.z.Large,
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
                        return r.createElement(u.a, {
                            games: this.props.gameData,
                            directoryType: v.a.Games,
                            cardSize: f._54.Medium,
                            followGameCardOptions: t,
                            placeholderItems: 99
                        })
                    }
                    if (this.props.categoryData) {
                        var n = this.getCategoryFollowCounts();
                        return this.props.categoryData.map(function(t) {
                            var a = !!n && (n[t.name] || 0) === t.games.length;
                            return r.createElement(p.a, {
                                key: t.name,
                                data: t,
                                cardSize: f._54.ExtraSmall,
                                trackingMedium: d.PageviewMedium.BrowseForYou,
                                isFollowingAllGamesInCategory: a,
                                onFollow: e.onFollow,
                                onUnfollow: e.onUnfollow
                            })
                        })
                    }
                }, t
            }(r.Component),
            E = Object(i.compose)(Object(c.a)(y, {
                options: {
                    variables: {
                        limit: 10
                    }
                }
            }), Object(m.d)("CommunitySelectionPageComponent"))(S)
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
            c = n("j7/Y"),
            d = n("HM6l"),
            m = n("w9tK"),
            u = n("vH/s"),
            p = n("Aj/L"),
            h = n("CSlQ"),
            g = n("A9VK"),
            v = n("5LoI"),
            f = n("MAZT"),
            y = n("uTyw"),
            _ = n("Qfvd"),
            w = n("f6or"),
            b = n("k2jn"),
            k = "285x380",
            S = 5,
            E = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        searching: !1,
                        categoryEndIndex: S
                    }, n.getData = function() {
                        return n.state.searching && n.state.searchGameResults ? n.state.searchGameResults.map(function(e) {
                            return n.mapDataToGame(e.title, e.popularity, e.id)
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
                                        t = Object(d.a)(), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(v.a.Games, e, t, {
                                            hitsPerPage: b.a
                                        })];
                                    case 2:
                                        return (n = a.sent()) && (r = Object(y.b)({
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
                                return this.state.categoryData && (e = Math.min(this.state.categoryEndIndex + S, this.state.categoryData.length)) > this.state.categoryEndIndex && this.setState({
                                    categoryEndIndex: e
                                }), [2]
                            })
                        })
                    }, n.mapDataToGame = function(e, t, n) {
                        return {
                            id: n || e.toString(),
                            name: e,
                            boxArtURL: _.a + "/" + encodeURIComponent(e) + "-" + k + ".jpg",
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
                                    return this.props.isLoggedIn ? this.props.isCategoriesExperimentEnabled ? [4, this.fetchCategories()] : [3, 2] : (this.props.latencyTracking.reportInteractive(), window.location.assign("/" + location.search), [2]);
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    return this.props.latencyTracking.reportInteractive(), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return r.createElement(b.b, {
                        gameData: this.getData(),
                        categoryData: this.state.categoryData && this.state.categoryData.slice(0, this.state.categoryEndIndex),
                        onSearchChange: this.onSearchChange,
                        categoriesInfiniteScrollEnabled: !!this.state.categoryData && this.state.categoryEndIndex !== this.state.categoryData.length,
                        onLoadMoreCategories: this.loadMoreCategories
                    })
                }, t.prototype.fetchCategories = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, Object(g.a)()];
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
                }, t = a.__decorate([Object(l.a)(w, {
                    options: {
                        variables: {
                            limit: b.a
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || e.isCategoriesExperimentEnabled
                    }
                }), Object(c.a)({
                    location: u.PageviewLocation.OnboardingCommunitySelection
                }), Object(h.d)("CommunitySelectionPage", {
                    destination: m.a.OnboardingIndex
                })], t)
            }(r.Component);
        var C = Object(s.b)(function(e) {
                return {
                    isLoggedIn: Object(p.d)(e)
                }
            })(E),
            O = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        a = i.o.experiments.getAssignment(o.f) === o.b.Yes;
                    return n.state = {
                        isCategoriesExperimentEnabled: a
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return null === this.state.isCategoriesExperimentEnabled ? null : r.createElement(C, {
                        isCategoriesExperimentEnabled: this.state.isCategoriesExperimentEnabled
                    })
                }, t
            }(r.Component),
            T = n("F8kA"),
            L = n("bZTi"),
            N = n("NXs7"),
            I = n("VAT8"),
            x = n("2b/B"),
            P = n("Odds"),
            D = (n("l5N5"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? r.createElement(P._2, {
                        position: P._15.Relative,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement("nav", {
                        className: "top-nav",
                        "data-a-target": "top-nav-container"
                    }, r.createElement(P._8, {
                        className: "top-nav__menu",
                        display: P.R.Flex,
                        alignItems: P.c.Stretch,
                        flexWrap: P.U.NoWrap,
                        fullHeight: !0
                    }, r.createElement(P._2, {
                        display: P.R.InlineFlex,
                        alignItems: P.c.Center,
                        flexShrink: 0
                    }, r.createElement("span", {
                        className: "top-nav__home-link"
                    }, r.createElement(P._23, {
                        asset: P._24.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), r.createElement(P._8, {
                        className: "top-nav__nav-items-container",
                        display: P.R.Flex,
                        flexGrow: 1,
                        flexWrap: P.U.NoWrap,
                        flexShrink: 0
                    }, ""), r.createElement(P._8, {
                        className: "top-nav__nav-items-container",
                        display: P.R.Flex,
                        alignItems: P.c.Stretch,
                        flexWrap: P.U.NoWrap,
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(x.a, {
                        isOnboarding: !0
                    }))))) : (i.j.warn("OnboardingTopNavComponent is only meant to be used for logged in users."), null)
                }, t = a.__decorate([Object(h.d)("OnboardingTopNav")], t)
            }(r.Component));
        var F = Object(s.b)(function(e) {
                return {
                    isLoggedIn: Object(p.d)(e)
                }
            })(D),
            R = n("T8ns"),
            G = L.a.wrap(function() {
                return n.e(90).then(n.bind(null, "sx3M"))
            }, "ChannelSurfingPage"),
            A = L.a.wrap(function() {
                return new Promise(function(e) {
                    e()
                }).then(n.bind(null, "lI8O"))
            }, "CommunitySelectionPage"),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.isLoggedIn || window.location.assign("/" + location.search)
                }, t.prototype.render = function() {
                    return r.createElement(P._8, {
                        className: Object(I.c)(N.a.Dark),
                        display: P.R.Flex,
                        flexDirection: P.T.Column,
                        flexWrap: P.U.NoWrap,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(F, null), r.createElement(P._8, {
                        display: P.R.Flex,
                        flexWrap: P.U.NoWrap,
                        position: P._15.Relative,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(P._2, {
                        overflow: P._11.Hidden,
                        position: P._15.Relative,
                        display: P.R.Flex,
                        flexDirection: P.T.Column,
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement("main", {
                        className: R.b
                    }, r.createElement(T.e, null, r.createElement(T.d, {
                        path: "/hi/surf",
                        component: G
                    }), r.createElement(T.d, {
                        path: "/hi",
                        component: A
                    }))))))
                }, t = a.__decorate([Object(h.d)("OnboardingRoot", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component);
        var M = Object(T.f)(Object(s.b)(function(e) {
            return {
                isLoggedIn: Object(p.d)(e)
            }
        })(j));
        n.d(t, "CommunitySelectionPage", function() {
            return O
        }), n.d(t, "OnboardingRoot", function() {
            return M
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
    nUXg: function(e, t) {},
    npyu: function(e, t) {},
    nyge: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
            }(a || (a = {}))
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
    vKFS: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("6sO2"),
            o = n("RH2O"),
            s = n("HW6M"),
            l = n("nyge"),
            c = n("Odds"),
            d = (n("Lwev"), function(e) {
                var t, n = e.spriteDetails,
                    a = e.game.toLowerCase(),
                    i = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = a === l.a.CounterStrike, t)),
                    o = a === l.a.CounterStrike ? 40 : 20;
                return r.createElement(c._8, {
                    className: i
                }, r.createElement("div", {
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
            m = n("YUUt"),
            u = n.n(m),
            p = n("/SNv"),
            h = n.n(p),
            g = n("Vr3l"),
            v = n.n(g),
            f = n("PPNL"),
            y = n("EOpv"),
            _ = n("LgcN"),
            w = this,
            b = i.o.logger.withCategory("metadata-info"),
            k = function(e, t) {
                return a.__awaiter(w, void 0, void 0, function() {
                    var n, r, o, s, c, d;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return n = t.toLowerCase(), r = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, c = e.overwatch && e.overwatch.broadcasterCharacter, r && n === l.a.CounterStrike ? [4, S(r)] : [3, 2];
                            case 1:
                                return [2, a.sent()];
                            case 2:
                                return o && n === l.a.Hearthstone ? [4, E(o)] : [3, 4];
                            case 3:
                                return [2, a.sent()];
                            case 4:
                                return c && n === l.a.Overwatch ? [4, C(c)] : [3, 6];
                            case 5:
                                return [2, a.sent()];
                            case 6:
                                if (s && n === l.a.LeagueOfLegends && (d = i.o.store.getState()).directory)
                                    if (d.directory.leagueOfLegends.championsMap) {
                                        if (d.directory.leagueOfLegends.championsMap) return [2, O(s, d.directory.leagueOfLegends.championsMap, d.directory.leagueOfLegends.version)]
                                    } else i.o.store.dispatch(Object(f.a)());
                                a.label = 7;
                            case 7:
                                return [2, null]
                        }
                    })
                })
            },
            S = function(e) {
                return a.__awaiter(w, void 0, void 0, function() {
                    var t, n, r;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, Object(_.a)()];
                            case 1:
                                return t = a.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                    name: n[e].display_name,
                                    label: Object(y.b)(y.a.CSGOSkillGroup),
                                    spriteDetails: {
                                        imageWidth: n[e].image_width,
                                        imageHeight: n[e].image_height,
                                        spriteOffsetX: n[e].sprite_x_offset,
                                        spriteOffsetY: n[e].sprite_y_offset,
                                        spriteURL: u.a
                                    }
                                }];
                            case 2:
                                return r = a.sent(), b.error(r, "Failed to load Counter-Strike skill group data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            E = function(e) {
                return a.__awaiter(w, void 0, void 0, function() {
                    var t, n, r;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, Object(_.b)()];
                            case 1:
                                return t = a.sent(), n = {}, t[0].Class.forEach(function(e) {
                                    n[e.class] = e
                                }), [2, {
                                    name: n[e].display_name,
                                    label: Object(y.b)(y.a.HearthstoneClass),
                                    spriteDetails: {
                                        imageWidth: n[e].image_width,
                                        imageHeight: n[e].image_height,
                                        spriteOffsetX: n[e].sprite_x_offset,
                                        spriteOffsetY: n[e].sprite_y_offset,
                                        spriteURL: h.a
                                    }
                                }];
                            case 2:
                                return r = a.sent(), b.error(r, "Failed to load Hearthstone class data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            C = function(e) {
                return a.__awaiter(w, void 0, void 0, function() {
                    var t, n, r, i, o, s, l, c, d, m, u, p;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, Object(_.d)()];
                            case 1:
                                for (t = a.sent(), n = void 0, r = 0, i = t; r < i.length; r++)
                                    for (o in n = i[r])
                                        if (n.hasOwnProperty(o))
                                            for (s = n[o], l = 0, c = s; l < c.length; l++)
                                                if ((d = c[l]).character === e) return (p = {})[d.character] = d, [2, {
                                                    name: (m = p)[e].display_name,
                                                    label: Object(y.b)(y.a.OverwatchCharacter),
                                                    spriteDetails: {
                                                        imageWidth: m[e].image_width,
                                                        imageHeight: m[e].image_height,
                                                        spriteOffsetX: m[e].sprite_x_offset,
                                                        spriteOffsetY: m[e].sprite_y_offset,
                                                        spriteURL: v.a
                                                    }
                                                }];
                                return [2, null];
                            case 2:
                                return u = a.sent(), b.error(u, "Failed to load Overwatch character data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            O = function(e, t, n) {
                if (!t || !e) return null;
                var a = t[e],
                    r = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + a.image.sprite;
                return {
                    name: a.name,
                    label: Object(y.b)(y.a.LeagueChampion),
                    spriteDetails: {
                        imageWidth: a.image.w,
                        imageHeight: a.image.h,
                        spriteOffsetX: a.image.x,
                        spriteOffsetY: a.image.y,
                        spriteURL: r
                    }
                }
            },
            T = (n("nUXg"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        metadataDetails: null
                    }, t.didUnmount = !1, t.loadStreamMetadataDetails = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.props.streamMetadata || !this.props.game) return [3, 4];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, k(this.props.streamMetadata, this.props.game)];
                                    case 2:
                                        if (e = n.sent()) {
                                            if (this.didUnmount) return [2];
                                            this.setState({
                                                metadataDetails: e
                                            })
                                        }
                                        return [3, 4];
                                    case 3:
                                        return t = n.sent(), i.j.error(t, "Failed to get metadata details."), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.loadStreamMetadataDetails()
                }, t.prototype.componentDidUpdate = function(e) {
                    !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? r.createElement(c._8, {
                        className: "preview-card-appendage",
                        display: c.R.Flex
                    }, r.createElement(c._8, {
                        className: "preview-card-appendage__image-wrapper",
                        flexGrow: 0,
                        flexShrink: 0,
                        display: c.R.Flex,
                        alignItems: c.c.Center,
                        justifyContent: c._7.End
                    }, r.createElement("div", null, r.createElement(d, {
                        game: this.props.game,
                        spriteDetails: this.state.metadataDetails.spriteDetails
                    }))), r.createElement(c._33, {
                        flexGrow: 1,
                        flexShrink: 1,
                        borderTop: !0,
                        padding: {
                            y: .5
                        },
                        margin: {
                            left: 1
                        },
                        display: c.R.Flex,
                        overflow: c._11.Hidden
                    }, r.createElement(c._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: c._11.Hidden
                    }, r.createElement(c.Q, {
                        ellipsis: !0
                    }, this.state.metadataDetails.name)), r.createElement(c._8, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(c.Q, null, this.state.metadataDetails.label)))) : null
                }, t
            }(r.Component));
        var L, N = Object(o.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap
                    }
                }
            })(T),
            I = (n("YVIF"), function(e) {
                var t = r.createElement(c._33, {
                    className: "preview-card-iconic-image__wrapper",
                    borderRadius: c.t.Small,
                    overflow: c._11.Hidden
                }, r.createElement(c.k, {
                    ratio: e.aspect || c.l.BoxArt,
                    align: c.a.Center
                }, r.createElement(c.N, a.__assign({}, e.imageProps))));
                return e.linkTo && (t = r.createElement(c.O, {
                    to: e.linkTo
                }, t)), t
            }),
            x = (n("IJO1"), function(e) {
                var t = .5,
                    n = null;
                return "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = r.createElement(c._8, {
                    position: c._15.Absolute,
                    attachBottom: !0,
                    fullWidth: !0
                }, r.createElement(c._18, {
                    size: c._20.Small,
                    value: e.progressBarPercent,
                    mask: !0
                })), t = 1), r.createElement(c._8, {
                    position: c._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    fullWidth: !0,
                    fullHeight: !0,
                    className: "preview-card-overlay"
                }, n, r.createElement(c._8, {
                    position: c._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    margin: 1,
                    "data-test-selector": "top-left-selector"
                }, e.topLeft), r.createElement(c._8, {
                    position: c._15.Absolute,
                    attachTop: !0,
                    attachRight: !0,
                    margin: 1,
                    "data-test-selector": "top-right-selector"
                }, e.topRight), r.createElement(c._8, {
                    position: c._15.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-left-selector"
                }, e.bottomLeft), r.createElement(c._8, {
                    position: c._15.Absolute,
                    attachBottom: !0,
                    attachRight: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-right-selector"
                }, e.bottomRight))
            }),
            P = (n("BJwU"), function(e) {
                var t = e.icon && r.createElement(c._8, {
                    display: c.R.Flex
                }, r.createElement(c._23, {
                    asset: e.icon,
                    width: 14,
                    height: 14
                }));
                return e.withBackground ? r.createElement(c._33, {
                    alignItems: c.c.Center,
                    background: c.n.Overlay,
                    borderRadius: c.t.Small,
                    className: "preview-card-stat",
                    color: c.K.Overlay,
                    display: c.R.Flex,
                    fontSize: c.V.Size6,
                    justifyContent: c._7.Center
                }, t, r.createElement(c.Q, null, e.value)) : r.createElement(c._33, {
                    className: "preview-card-stat",
                    color: c.K.Overlay,
                    display: c.R.Flex,
                    padding: {
                        x: .5
                    }
                }, t, r.createElement(c.Q, null, e.value))
            }),
            D = n("vKYI"),
            F = (n("jpZi"), 300),
            R = 5e3,
            G = "preview-card-thumbnail__image-selector",
            A = function(e) {
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
                            }, F)
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
                        }, R)
                    }, t.clearTimeouts = function() {
                        t.hoverTimeout && window.clearTimeout(t.hoverTimeout), t.createPreviewTimeout && window.clearTimeout(t.previewTimeout)
                    }, t.shouldShowLiveVideoPreview = function() {
                        return !!t.props.liveChannelLogin && t.state.isHovered && (t.state.isLiveVideoPreviewLoaded || t.state.isLiveVideoPreviewLoading) && !t.state.isLiveVideoPreviewTimedOut
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.clearTimeouts()
                }, t.prototype.render = function() {
                    var e = {};
                    return (this.props.animatedImageProps || this.props.liveChannelLogin) && (e = {
                        onMouseEnter: this.handleFocus,
                        onMouseLeave: this.handleBlur,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    }), r.createElement("div", a.__assign({}, e), this.renderLoadingSpinner(), r.createElement(c._33, {
                        background: c.n.Alt2
                    }, r.createElement(c.k, {
                        ratio: this.props.aspectRatio
                    }, this.renderImage())))
                }, t.prototype.renderImage = function() {
                    var e, t, n = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                        i = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e["preview-card-thumbnail__image--hidden"] = this.shouldShowLiveVideoPreview() && this.state.isLiveVideoPreviewLoaded, e));
                    return this.shouldShowLiveVideoPreview() ? [r.createElement("div", {
                        key: "player-key",
                        className: s((t = {}, t["preview-card-thumbnail__image--hidden"] = !this.state.isLiveVideoPreviewLoaded, t))
                    }, r.createElement(D.a, {
                        channelLogin: this.props.liveChannelLogin,
                        onPlayerPlaying: this.onLivePreviewLoaded
                    })), r.createElement("div", {
                        key: "image-key",
                        className: i
                    }, r.createElement(c.N, a.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": G
                    })))] : n && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                        className: i
                    }, r.createElement(c.N, a.__assign({}, this.props.animatedImageProps, {
                        onLoad: this.onImageLoad,
                        onError: this.onImageLoadError,
                        "data-test-selector": G
                    }))) : r.createElement("div", {
                        className: i
                    }, r.createElement(c.N, a.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": G
                    })))
                }, t.prototype.renderLoadingSpinner = function() {
                    if (this.shouldShowLiveVideoPreview() && !this.state.isLiveVideoPreviewLoaded) return r.createElement(c._33, {
                        attachRight: !0,
                        attachTop: !0,
                        background: c.n.Overlay,
                        borderRadius: c.t.Small,
                        color: c.K.OverlayAlt,
                        margin: .5,
                        padding: .5,
                        position: c._15.Absolute,
                        zIndex: c._60.Above
                    }, r.createElement(c._10, {
                        fillContent: !0,
                        inheritColor: !0,
                        size: c._31.Small,
                        delay: 0
                    }))
                }, t
            }(r.Component),
            j = (n("ea7N"), function(e) {
                var t = null;
                return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                    return r.createElement(c._8, {
                        key: t,
                        "data-test-selector": "preview-card-titles__subtitle"
                    }, r.createElement(c.Q, {
                        color: c.K.Alt
                    }, "string" == typeof e ? e : r.createElement(c.O, {
                        to: e.linkTo,
                        type: c.P.Inherit
                    }, e.text)))
                })), r.createElement("div", null, r.createElement(c.O, {
                    to: e.linkTo,
                    onClick: e.onClick,
                    type: c.P.Inherit,
                    "data-test-selector": "preview-card-titles__primary-link"
                }, r.createElement(c.Q, {
                    type: c._47.H3,
                    fontSize: c.V.Size5,
                    lines: 1,
                    bold: !0,
                    ellipsis: !0
                }, e.title)), r.createElement(c._8, {
                    className: "preview-card-titles__subtitle-wrapper"
                }, t))
            }),
            M = n("IOwa"),
            U = n("mi6k");

        function V(e) {
            return void 0 !== e.streamType
        }

        function H(e) {
            return void 0 !== e.watchedProgressPercent
        }

        function B(e) {
            return void 0 !== e.clipCreatedByChannelLogin
        }! function(e) {
            e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
        }(L || (L = {}));
        var z = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return r.createElement("div", {
                    className: "preview-card"
                }, r.createElement(c._8, {
                    position: c._15.Relative
                }, r.createElement(c.O, {
                    to: this.props.linkTo,
                    onClick: this.props.onClick
                }, r.createElement(A, {
                    staticImageProps: this.props.thumbnailImageProps,
                    animatedImageProps: H(this.props) && this.props.animatedImageProps || void 0,
                    liveChannelLogin: V(this.props) && this.props.enableLivePreview ? this.props.channelLogin : void 0
                }), this.renderOverlay())), r.createElement(c._8, {
                    display: c.R.Flex,
                    flexWrap: c.U.NoWrap,
                    margin: {
                        top: 1
                    }
                }, r.createElement(c._8, {
                    flexGrow: 0,
                    flexShrink: 0,
                    padding: {
                        right: 1
                    }
                }, this.renderIconicImage()), r.createElement(c._8, {
                    flexGrow: 1,
                    flexShrink: 1,
                    overflow: c._11.Hidden
                }, this.renderTitles())), this.renderAppendages())
            }, t.prototype.renderOverlay = function() {
                return V(this.props) ? r.createElement(x, {
                    topLeft: r.createElement(M.a, {
                        type: this.props.streamType,
                        hosting: !!this.props.hostedByChannelLogin
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(P, {
                        value: Object(i.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                            viewerCount: this.props.currentViewerCount
                        }, "VideoPreviewCard")
                    }),
                    bottomRight: void 0
                }) : H(this.props) ? r.createElement(x, {
                    topLeft: r.createElement(P, {
                        value: Object(U.b)(this.props.durationInSeconds),
                        icon: c._24.GlyphArrRight,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(P, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: r.createElement(P, {
                        value: Object(i.c)(new Date(this.props.datePublished), "medium")
                    }),
                    progressBarPercent: this.props.watchedProgressPercent
                }) : B(this.props) ? r.createElement(x, {
                    topLeft: r.createElement(P, {
                        value: Object(U.b)(this.props.durationInSeconds),
                        icon: c._24.Clip,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(P, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: r.createElement(P, {
                        value: Object(i.c)(new Date(this.props.datePublished), "medium")
                    })
                }) : void 0
            }, t.prototype.getViewCountLabel = function() {
                return H(this.props) || B(this.props) ? Object(i.d)("{viewerCount, plural, one {# view} other {# views}}", {
                    viewerCount: this.props.viewCount
                }, "VideoPreviewCard") : ""
            }, t.prototype.renderIconicImage = function() {
                return this.props.context === L.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameTitleLinkTo ? r.createElement(I, {
                    imageProps: this.props.gameBoxArtImageProps,
                    linkTo: this.props.gameTitleLinkTo,
                    aspect: c.l.BoxArt
                }) : r.createElement(I, {
                    imageProps: this.props.channelImageProps,
                    linkTo: this.props.channelLoginLinkTo,
                    aspect: c.l.Aspect1x1
                })
            }, t.prototype.renderTitles = function() {
                var e = [{
                    text: this.props.channelLogin,
                    linkTo: this.props.channelLoginLinkTo
                }];
                return B(this.props) ? e.push({
                    text: Object(i.d)("Clipped by {userName}", {
                        userName: this.props.clipCreatedByChannelLogin
                    }, "VideoPreviewCard"),
                    linkTo: this.props.clipCreatedByChannelLoginLinkTo
                }) : this.props.context !== L.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && e.push({
                    text: this.props.gameTitle,
                    linkTo: this.props.gameTitleLinkTo
                }), r.createElement(j, {
                    title: this.props.title,
                    linkTo: this.props.linkTo,
                    subtitles: e
                })
            }, t.prototype.renderAppendages = function() {
                if (this.props.playerMetadata && this.props.playerMetadataGame) return r.createElement(N, {
                    streamMetadata: this.props.playerMetadata,
                    game: this.props.playerMetadataGame
                })
            }, t
        }(r.Component);
        n.d(t, "b", function() {
            return L
        }), n.d(t, "a", function() {
            return z
        })
    },
    vKYI: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("BwgW"),
            i = n("GiK3"),
            o = n("CSlQ"),
            s = n("fc0G"),
            l = n("L3z0"),
            c = n("5MsU"),
            d = {
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

        function m() {
            return !!window.Twitch && !!window.Twitch.Player
        }
        var u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.checkPlayerDependencyStatus = function() {
                    m() ? (n.setState({
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
                    canInitializePlayer: m(),
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
                return i.createElement("div", {
                    className: "video-player",
                    "data-test-selector": "thumbnail-video-player"
                }, i.createElement("div", {
                    className: "video-player__container",
                    ref: this.attachRef
                }))
            }, t.prototype.componentWillUnmount = function() {
                var e = this;
                this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), window.removeEventListener("beforeunload", function() {
                    return e.resetVolume()
                }), this.resetVolume(), this.player && (this.player.removeEventListener(c.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(l.a.Play, this.onPlayerPlay), this.player.removeEventListener(l.a.Playing, this.onPlayerPlaying), r.extensionService.unregisterPlayer(), this.player.destroy())
            }, t.prototype.initializePlayer = function() {
                var e = d;
                this.props.channelLogin && (e.channel = this.props.channelLogin);
                var t = new window.Twitch.Player(this.playerRef, e);
                this.player = t, t.addEventListener(c.a.PlayerReady, this.onPlayerReady), t.addEventListener(l.a.Play, this.onPlayerPlay), t.addEventListener(l.a.Playing, this.onPlayerPlaying), r.extensionService.registerPlayer(this.player)
            }, t.prototype.resetVolume = function() {
                this.userVolumeSetting && window.localStorage.setItem("volume", this.userVolumeSetting), this.userMuteSetting && window.localStorage.setItem("muted", this.userMuteSetting)
            }, t.tagInjected = !1, t = n = a.__decorate([Object(o.d)("LiveChannelPreviewCard")], t);
            var n
        }(i.Component);
        n.d(t, !1, function() {
            return "thumbnail-video-player"
        }), n.d(t, !1, function() {
            return d
        }), n.d(t, "a", function() {
            return u
        })
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
            m = n("Odds"),
            u = (n("7rq1"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        categoryData: []
                    }, t.renderHeader = function() {
                        var e, n;
                        return t.props.withStreams ? (e = Object(o.d)("Featured Genres", "FeaturedGenres"), n = Object(o.d)("Watch your favorite games on Twitch", "FeaturedGenres")) : (e = Object(o.d)("Featured Games", "FeaturedGenres"), n = Object(o.d)("Find your favorite games on Twitch", "FeaturedGenres")), r.createElement(m._8, {
                            alignItems: m.c.Baseline,
                            display: m.R.Flex,
                            flexDirection: m.T.Row,
                            margin: {
                                left: 1,
                                bottom: 1
                            }
                        }, r.createElement(m.Q, {
                            fontSize: m.V.Size2,
                            color: m.K.Base
                        }, e), r.createElement(m._8, {
                            className: "anon-featured-genres__subheader",
                            margin: {
                                left: 2
                            }
                        }, r.createElement(m.Q, {
                            fontSize: m.V.Size3,
                            color: m.K.Alt2
                        }, n)))
                    }, t.renderContent = function() {
                        return t.state.categoryData.map(function(e, n) {
                            return r.createElement(c.a, {
                                key: e.name,
                                data: e,
                                cardSize: m._54.ExtraSmall,
                                withAd: 0 === n,
                                trackingMedium: t.props.trackingMedium,
                                withStreams: t.props.withStreams,
                                withBoxArtGameCards: !t.props.withStreams,
                                isFollowingAllGamesInCategory: !1
                            })
                        })
                    }, t.renderFooter = function() {
                        return r.createElement(m._8, {
                            display: m.R.Flex,
                            justifyContent: m._7.End
                        }, r.createElement(m._2, {
                            display: m.R.Flex,
                            alignItems: m.c.Center
                        }, r.createElement(i.a, {
                            to: "/directory"
                        }, r.createElement(m.Q, {
                            fontSize: m.V.Size4
                        }, Object(o.d)("See all live games", "FeaturedGenres")), r.createElement(m._33, {
                            alignItems: m.c.Center,
                            color: m.K.Link,
                            display: m.R.InlineFlex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(m._23, {
                            asset: m._24.AngleRight,
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
                    }) : r.createElement(m._8, null, this.renderHeader(), this.renderContent(), this.renderFooter())
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
            return u
        })
    }
});
//# sourceMappingURL=pages.onboarding-bb53e8d6b883a839213be5c80f7dcdc4.js.map