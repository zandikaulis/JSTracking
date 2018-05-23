webpackJsonp([56], {
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
            p = n("81qH"),
            m = n("RH2O"),
            u = n("2KeS"),
            g = n("PPNL"),
            h = n("HW6M"),
            v = n("YUUt"),
            f = n.n(v),
            _ = n("/SNv"),
            k = n.n(_),
            y = n("Vr3l"),
            b = n.n(y),
            w = n("nyge"),
            E = n("LgcN"),
            S = function(e) {
                try {
                    return decodeURIComponent(e)
                } catch (e) {
                    return null
                }
            },
            C = n("Odds"),
            L = (n("AHWf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1,
                        game: ""
                    }, t.logger = o.o.logger.withCategory("metadata-icon"), t.didUnmount = !1, t.loadData = function() {
                        if (!t.state.isLoading && !t.state.isError && t.props.streamMetadata && !t.state.content) {
                            var e = S(t.props.match.params.encodedCommunityName);
                            if (e) {
                                var n = e.toLowerCase(),
                                    a = t.props.streamMetadata.counterStrikeGlobalOffensive && t.props.streamMetadata.counterStrikeGlobalOffensive.skill,
                                    r = t.props.streamMetadata.hearthstone && t.props.streamMetadata.hearthstone.broadcasterHeroClass,
                                    i = t.props.streamMetadata.leagueOfLegends && t.props.streamMetadata.leagueOfLegends.championID,
                                    o = t.props.streamMetadata.overwatch && t.props.streamMetadata.overwatch.broadcasterCharacter;
                                a && n === w.a.CounterStrike ? (t.setState({
                                    game: n,
                                    gameSprite: f.a,
                                    item: String(a),
                                    isLoading: !0
                                }), t.getCounterStrikeData(a)) : r && n === w.a.Hearthstone ? (t.setState({
                                    game: n,
                                    gameSprite: k.a,
                                    item: r,
                                    isLoading: !0
                                }), t.getHearthstoneData()) : i && n === w.a.LeagueOfLegends ? (t.setState({
                                    game: n,
                                    item: String(i)
                                }), t.getLeagueData()) : o && n === w.a.Overwatch && (t.setState({
                                    game: n,
                                    gameSprite: b.a,
                                    item: o,
                                    isLoading: !0
                                }), t.getOverwatchData())
                            }
                        }
                    }, t.renderIcon = function(e, n, a, i, o, s) {
                        if (!a) return null;
                        var l = h("metadata-icon", {
                                "metadata-icon--csgo-skill": t.state.game === w.a.CounterStrike
                            }),
                            c = t.state.game === w.a.CounterStrike ? 50 : 30;
                        return r.createElement(C._8, {
                            display: C.R.Flex,
                            flexDirection: C.T.Column,
                            alignItems: C.c.Center,
                            justifyContent: C._7.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(C._52, {
                            direction: C._54.Left,
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
                                        return a.trys.push([0, 2, , 3]), [4, Object(E.a)()];
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
                                        return a.trys.push([0, 2, , 3]), [4, Object(E.b)()];
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
                            var e, t, n, r, i, o, s, l, c, d, p, m, u;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, Object(E.d)()];
                                    case 1:
                                        if (e = a.sent(), this.didUnmount) return [2];
                                        for (t = !1, n = void 0, r = 0, i = e; r < i.length && (n = i[r], !t); r++)
                                            for (o in n)
                                                if (n.hasOwnProperty(o))
                                                    for (s = n[o], l = 0, c = s; l < c.length; l++)
                                                        if ((d = c[l]).character === this.state.item) {
                                                            (u = {})[d.character] = d, p = u, this.setState({
                                                                content: p,
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
                    if (this.state.game === w.a.LeagueOfLegends) {
                        if (!this.props.leagueOfLegends.championsMap) return null;
                        var e = this.props.leagueOfLegends.championsMap[this.state.item],
                            t = "https://ddragon.leagueoflegends.com/cdn/" + this.props.leagueOfLegends.version + "/img/sprite/" + e.image.sprite;
                        return this.renderIcon(e.name, t, e.image.w, e.image.h, e.image.x, e.image.y)
                    }
                    var n = this.state.content && this.state.content[this.state.item];
                    return n ? this.renderIcon(n.display_name, this.state.gameSprite || "", n.image_width, n.image_height, n.sprite_x_offset, n.sprite_y_offset) : null
                }, t
            }(r.Component)),
            O = Object(i.f)(L);
        var P = Object(m.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap,
                        isError: e.directory.leagueOfLegends.isError,
                        isLoading: e.directory.leagueOfLegends.isLoading,
                        version: e.directory.leagueOfLegends.version
                    }
                }
            }, function(e) {
                return Object(u.b)({
                    onLoadLeagueOfLegendsChampions: g.a
                }, e)
            })(O),
            T = (n("LEV+"), "live-channel-card-link-selector"),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderVariation = function() {
                        return r.createElement("div", a.__assign({
                            className: "live-channel-card"
                        }, Object(C._63)(t.props)), r.createElement(l.a, {
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
                            streamType: t.props.streamType || d.a.Live,
                            currentViewerCount: t.props.viewerCount,
                            enableLivePreview: t.props.enableLivePreview,
                            hostedByChannelLogin: t.props.hostedByChannelLogin
                        }))
                    }, t.renderFallback = function() {
                        var e = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                            viewerCount: t.props.viewerCount,
                            channel: r.createElement(i.a, {
                                to: t.props.channelNameLinkTo,
                                onClick: t.props.onClick,
                                className: "live-channel-card__videos",
                                "data-a-target": "live-channel-card-channel-name-link"
                            }, t.props.channelName)
                        }, "Live Channel Card");
                        return r.createElement("div", a.__assign({
                            className: "live-channel-card"
                        }, Object(C._63)(t.props)), r.createElement(C.C, {
                            key: t.props.title
                        }, r.createElement(C._8, {
                            fullWidth: !0
                        }, r.createElement(C.k, {
                            overflow: !0
                        }, r.createElement("div", null, r.createElement(i.a, {
                            to: t.props.linkTo,
                            title: t.props.hideTooltip ? void 0 : t.props.title,
                            "data-a-target": "live-channel-card-thumbnail-link",
                            "data-test-selector": T,
                            onClick: t.props.onClick
                        }, t.props.children ? t.props.children : r.createElement(C.E, {
                            alt: t.props.imageAlt,
                            src: t.props.imageSrc,
                            aspect: C.l.Aspect16x9
                        }), t.renderContentType()), t.renderGameBoxArt()))), r.createElement(C.D, null, r.createElement(C._8, {
                            display: C.R.Flex,
                            flexWrap: C.U.NoWrap
                        }, r.createElement(C._8, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, r.createElement(C.O, {
                            to: t.props.linkTo,
                            onClick: t.props.onClick,
                            className: "live-channel-card__channel",
                            "data-a-target": "live-channel-card-title-link"
                        }, r.createElement(C._2, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(C.Q, {
                            type: C._49.H3,
                            fontSize: C.V.Size5,
                            lineHeight: C._9.Body,
                            ellipsis: !0,
                            className: "live-channel-card__title"
                        }, t.props.title))), r.createElement(C._8, {
                            className: "live-channel-card__meta",
                            display: C.R.Flex,
                            flexWrap: C.U.NoWrap
                        }, r.createElement(C.Q, {
                            type: C._49.Span,
                            ellipsis: !0
                        }, e))), r.createElement(C._8, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, t.renderStreamMetadata())))))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = {
                        assignments: {
                            fallback: this.renderFallback,
                            variation: this.renderVariation
                        },
                        loader: function() {
                            return r.createElement(p.VideoPreviewCardPlaceholder, null)
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
                    }, r.createElement(C._35, {
                        className: "live-channel-card__boxart",
                        position: C._15.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(C._52, {
                        display: C.R.Block,
                        direction: C._54.Bottom,
                        label: t
                    }, r.createElement(C.E, {
                        src: n,
                        alt: t,
                        aspect: C.l.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(C._8, {
                        position: C._15.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(c.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? r.createElement(P, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(r.Component),
            N = x;
        n.d(t, !1, function() {
            return T
        }), n.d(t, !1, function() {
            return x
        }), n.d(t, "a", function() {
            return N
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
            p = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
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
                            if (n.props.slotID === c.b.directory.rectangle) return void((a = n.slotRef.querySelector(p)) && 1 !== a.clientWidth && n.setState({
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
        var u = Object(a.b)(function(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        })(m);
        n.d(t, "a", function() {
            return u
        })
    },
    "//Ty": function(e, t) {},
    "/SNv": function(e, t, n) {
        e.exports = n.p + "assets/hearthstone-classes-b3b59eedbe78268cf62299a41ec09be1.png"
    },
    "0OPT": function(e, t) {},
    "0v28": function(e, t) {},
    "262o": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AnonFrontPage_TopChannels"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "platformType"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "PlatformType"
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
                                value: "6"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "platformType"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "platformType"
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
                end: 310
            }
        };
        n.loc.source = {
            body: "query AnonFrontPage_TopChannels($platformType: PlatformType) {\nstreams(first: 6 platformType: $platformType) {\nedges {\nnode {\nid\ngame {\nid\nname\nboxArtURL(width: 285 height: 380)\n}\nviewersCount\ntitle\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "5DPx": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return _
        });
        var a, r = n("TToO"),
            i = n("6sO2"),
            o = n("YUUt"),
            s = n.n(o),
            l = n("/SNv"),
            c = n.n(l),
            d = n("Vr3l"),
            p = n.n(d),
            m = n("PPNL"),
            u = n("nyge"),
            g = n("EOpv"),
            h = n("LgcN"),
            v = this,
            f = i.o.logger.withCategory("metadata-info");
        ! function(e) {
            e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
        }(a || (a = {}));
        var _ = function(e, t) {
                return r.__awaiter(v, void 0, void 0, function() {
                    var n, a, o, s, l, c;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = t.toLowerCase(), a = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, a && n === u.a.CounterStrike ? [4, k(a)] : [3, 2];
                            case 1:
                                return [2, r.sent()];
                            case 2:
                                return o && n === u.a.Hearthstone ? [4, y(o)] : [3, 4];
                            case 3:
                                return [2, r.sent()];
                            case 4:
                                return l && n === u.a.Overwatch ? [4, b(l)] : [3, 6];
                            case 5:
                                return [2, r.sent()];
                            case 6:
                                if (s && n === u.a.LeagueOfLegends && (c = i.o.store.getState()).directory)
                                    if (c.directory.leagueOfLegends.championsMap) {
                                        if (c.directory.leagueOfLegends.championsMap) return [2, w(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                    } else i.o.store.dispatch(Object(m.a)());
                                r.label = 7;
                            case 7:
                                return [2, null]
                        }
                    })
                })
            },
            k = function(e) {
                return r.__awaiter(v, void 0, void 0, function() {
                    var t, n, a;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, Object(h.a)()];
                            case 1:
                                return t = r.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
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
                                return a = r.sent(), f.error(a, "Failed to load Counter-Strike skill group data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            y = function(e) {
                return r.__awaiter(v, void 0, void 0, function() {
                    var t, n, a;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, Object(h.b)()];
                            case 1:
                                return t = r.sent(), n = {}, t[0].Class.forEach(function(e) {
                                    n[e.class] = e
                                }), [2, {
                                    name: n[e].display_name,
                                    label: Object(g.b)(g.a.HearthstoneClass),
                                    spriteDetails: {
                                        imageWidth: n[e].image_width,
                                        imageHeight: n[e].image_height,
                                        spriteOffsetX: n[e].sprite_x_offset,
                                        spriteOffsetY: n[e].sprite_y_offset,
                                        spriteURL: c.a
                                    }
                                }];
                            case 2:
                                return a = r.sent(), f.error(a, "Failed to load Hearthstone class data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            b = function(e) {
                return r.__awaiter(v, void 0, void 0, function() {
                    var t, n, a, i, o, s, l, c, d, m, u, v;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, Object(h.d)()];
                            case 1:
                                for (t = r.sent(), n = void 0, a = 0, i = t; a < i.length; a++)
                                    for (o in n = i[a])
                                        if (n.hasOwnProperty(o))
                                            for (s = n[o], l = 0, c = s; l < c.length; l++)
                                                if ((d = c[l]).character === e) return (v = {})[d.character] = d, [2, {
                                                    name: (m = v)[e].display_name,
                                                    label: Object(g.b)(g.a.OverwatchCharacter),
                                                    spriteDetails: {
                                                        imageWidth: m[e].image_width,
                                                        imageHeight: m[e].image_height,
                                                        spriteOffsetX: m[e].sprite_x_offset,
                                                        spriteOffsetY: m[e].sprite_y_offset,
                                                        spriteURL: p.a
                                                    }
                                                }];
                                return [2, null];
                            case 2:
                                return u = r.sent(), f.error(u, "Failed to load Overwatch character data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            w = function(e, t, n) {
                if (!t || !e) return null;
                var a = t[e],
                    r = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + a.image.sprite;
                return {
                    name: a.name,
                    label: Object(g.b)(g.a.LeagueChampion),
                    spriteDetails: {
                        imageWidth: a.image.w,
                        imageHeight: a.image.h,
                        spriteOffsetX: a.image.x,
                        spriteOffsetY: a.image.y,
                        spriteURL: r
                    }
                }
            }
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
    "86JD": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("6sO2"),
            o = n("iOr9"),
            s = n("bZTi"),
            l = n("o8Pq"),
            c = n("bNhH"),
            d = n("Wjt1"),
            p = function(e) {
                var t = {
                    name: "TWILIGHT_VIDEO_FEATURO_EN",
                    assignments: {
                        fallback: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "o8Pq"))
                            }, "FeaturedBroadcasters")(a.__assign({}, e))
                        },
                        mixed: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "Wjt1"))
                            }, "FeaturedContent")(a.__assign({}, e, {
                                shouldMixContent: !0
                            }))
                        },
                        last: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "Wjt1"))
                            }, "FeaturedContent")(a.__assign({}, e, {
                                shouldMixContent: !1
                            }))
                        }
                    },
                    loader: function() {
                        return Object(c.c)(e.renderContext)
                    }
                };
                return "en" === i.o.intl.getLanguageCode() ? r.createElement(o.a, a.__assign({}, t)) : r.createElement(l.FeaturedBroadcasters, {
                    renderContext: e.renderContext
                })
            };
        n.d(t, "a", function() {
            return d.FeaturedBroadcastersRenderContext
        }), n.d(t, "b", function() {
            return p
        })
    },
    "8U1+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r = n("TToO"),
            i = n("GiK3"),
            o = n("6sO2"),
            s = n("o5l+"),
            l = n("Qk3C"),
            c = n("+Znq"),
            d = n("CSlQ"),
            p = n("Odds"),
            m = (n("//Ty"), Object(d.d)("Footer", {
                autoReportInteractive: !0
            })(function() {
                return i.createElement(p._8, {
                    className: "footer",
                    padding: {
                        y: 3
                    }
                }, i.createElement(p._8, {
                    className: "footer__link-container",
                    display: p.R.Flex,
                    alignItems: p.c.Center,
                    justifyContent: p._7.Center,
                    flexWrap: p.U.Wrap,
                    margin: "auto",
                    padding: {
                        y: 3
                    }
                }, i.createElement(p._8, {
                    className: "footer__glitch",
                    display: p.R.Flex,
                    alignItems: p.c.Center,
                    margin: {
                        right: 2
                    }
                }, i.createElement(p._24, {
                    asset: p._25.LogoGlitch,
                    width: 30,
                    height: 30
                })), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/about/",
                    "data-a-target": "frontpage-footer-about-link"
                }, Object(o.d)("About", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://blog.twitch.tv/",
                    "data-a-target": "frontpage-footer-blog-link"
                }, Object(o.d)("Blog", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/products/turbo/ticket?ref=footer",
                    "data-a-target": "frontpage-footer-turbo-link"
                }, Object(o.d)("Turbo", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://music.twitch.tv/",
                    "data-a-target": "frontpage-footer-music-link"
                }, Object(o.d)("Music", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "http://twitchadvertising.tv/",
                    "data-a-target": "frontpage-footer-advertising-link"
                }, Object(o.d)("Advertise", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://dev.twitch.tv/",
                    "data-a-target": "frontpage-footer-developers-link"
                }, Object(o.d)("Developers", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/partners/",
                    "data-a-target": "frontpage-footer-partners-link"
                }, Object(o.d)("Partners", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/platforms/",
                    "data-a-target": "frontpage-footer-mobile-link"
                }, Object(o.d)("Mobile", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/jobs/",
                    "data-a-target": "frontpage-footer-jobs-link"
                }, Object(o.d)("Jobs", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://help.twitch.tv/",
                    "data-a-target": "frontpage-footer-help-link"
                }, Object(o.d)("Help", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/terms-of-service/",
                    "data-a-target": "frontpage-footer-terms-link"
                }, Object(o.d)("Terms", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/privacy-policy/",
                    "data-a-target": "frontpage-footer-privacy-link"
                }, Object(o.d)("Privacy Policy", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/ad-choices/",
                    "data-a-target": "frontpage-footer-choices-link"
                }, Object(o.d)("Ad Choices", "Footer"))), i.createElement(p._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/cookie-policy/",
                    "data-a-target": "frontpage-footer-cookie-link"
                }, Object(o.d)("Cookie Policy", "Footer"))), i.createElement(p._8, {
                    margin: {
                        left: 5
                    }
                }, i.createElement(c.a, null, i.createElement("span", {
                    className: "footer__link",
                    "data-a-target": "frontpage-footer-language-link"
                }, Object(o.d)("Language", "Footer")), i.createElement(p.q, {
                    "data-a-target": "frontpage-footer-language-options",
                    size: p.s.Medium,
                    direction: p.r.TopRight
                }, i.createElement(l.a, null))))))
            })),
            u = n("bZTi"),
            g = n("j7/Y"),
            h = n("w9tK"),
            v = n("Us7i"),
            f = n("vH/s"),
            _ = n("/+to"),
            k = n("QG7y"),
            y = n("86JD"),
            b = n("DBTH"),
            w = n("2aoH"),
            E = n("8PKe"),
            S = n("F8kA"),
            C = n("7vx8"),
            L = n("NY9D"),
            O = n("dXGo"),
            P = (n("APTF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.getItems = function() {
                        if (t.props.data.loading || t.props.data.error) {
                            for (var e = [], n = 0; n < 12; n++) e.push(i.createElement(p.L, {
                                cols: 2,
                                key: "placeholder-" + n
                            }, i.createElement(p._8, {
                                key: n,
                                margin: {
                                    bottom: n < 6 ? 4 : 0
                                }
                            }, i.createElement(p._8, {
                                margin: {
                                    bottom: .5
                                }
                            }, i.createElement(p.k, {
                                ratio: p.l.Aspect3x4
                            }, i.createElement(p._14, null))), i.createElement(p.Q, null, i.createElement(p._14, {
                                width: 120
                            })), i.createElement(p.Q, {
                                fontSize: p.V.Size7
                            }, i.createElement(p._14, {
                                width: 80
                            })))));
                            return e
                        }
                        var a = t.props.data.games.edges.slice(0, t.state.adDisplayed ? 10 : 12).map(function(e, t) {
                                var n = e.node;
                                return n && n.id ? i.createElement(p.L, {
                                    cols: 2,
                                    key: "game-" + n.id
                                }, i.createElement(p._8, {
                                    margin: {
                                        bottom: t < 6 ? 4 : 0
                                    }
                                }, i.createElement(p.u, {
                                    linkTo: Object(L.c)(n.name),
                                    title: n.name,
                                    alt: n.name + " cover image",
                                    src: n.boxArtURL,
                                    info: Object(o.d)("{viewerCount,number} viewers", {
                                        viewerCount: n.viewersCount
                                    }, "FeaturedGames"),
                                    "data-a-target": "card-" + t,
                                    "data-a-id": "card-" + n.name.replace(/ /g, "")
                                }))) : null
                            }),
                            r = i.createElement(p._8, {
                                display: p.R.Flex,
                                flexGrow: 1,
                                justifyContent: p._7.Center,
                                key: "ad"
                            }, i.createElement(_.a, {
                                adSize: k.c.anonFront.rect,
                                adUnit: k.d.frontpage,
                                "data-a-target": "featured-games-ad-slot",
                                slotID: k.b.anonFront.rect,
                                targeting: {
                                    pagetype: k.a.frontpage
                                },
                                slotRendered: t.onSlotRendered,
                                autoEnable: !1
                            }));
                        return a.splice(4, 0, r), a
                    }, t.onSlotRendered = function() {
                        t.state.adDisplayed || t.setState({
                            adDisplayed: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = i.createElement(p._8, {
                            display: p.R.Flex,
                            flexDirection: p.T.Row,
                            alignItems: p.c.Baseline,
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(p.Q, {
                            fontSize: p.V.Size2,
                            color: p.K.Base
                        }, Object(o.d)("Featured Games", "FeaturedGames")), i.createElement(p._8, {
                            className: "anon-featured-games__subheader",
                            margin: {
                                left: 2
                            }
                        }, i.createElement(p.Q, {
                            fontSize: p.V.Size3,
                            color: p.K.Alt2
                        }, Object(o.d)("Games people are watching now", "FeaturedGames")))),
                        t = i.createElement(p._8, {
                            display: p.R.Flex,
                            justifyContent: p._7.End
                        }, i.createElement(p._2, {
                            display: p.R.Flex,
                            alignItems: p.c.Center
                        }, i.createElement(S.a, {
                            to: "/directory",
                            "data-a-target": "see-all-live-games-link"
                        }, i.createElement(p.Q, {
                            fontSize: p.V.Size4
                        }, Object(o.d)("See all live games", "FeaturedGames")), i.createElement(p._35, {
                            color: p.K.Link,
                            margin: {
                                left: .5
                            },
                            display: p.R.InlineFlex,
                            alignItems: p.c.Center
                        }, i.createElement(p._24, {
                            asset: p._25.AngleRight,
                            width: 14,
                            height: 14
                        })))));
                    return i.createElement(p._35, {
                        className: "anon-featured-games",
                        background: p.n.Base,
                        padding: {
                            x: 1
                        }
                    }, e, i.createElement(p.Y, null, this.getItems()), t)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = r.__decorate([Object(C.a)(O), Object(d.d)("FeaturedGames")], t)
            }(i.Component)),
            T = n("+GT7"),
            x = n("SZoP");
        ! function(e) {
            e[e.All = 1] = "All", e[e.Xbox = 2] = "Xbox", e[e.PS4 = 3] = "PS4"
        }(a || (a = {}));
        var N = n("262o"),
            I = (n("GrwT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getItems = function() {
                        if (t.props.data.loading || t.props.data.error) {
                            for (var e = [], n = 0; n < 6; n++) e.push(i.createElement(p._8, {
                                key: n,
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(p._8, {
                                margin: {
                                    bottom: .5
                                }
                            }, i.createElement(p.k, {
                                ratio: p.l.Aspect16x9
                            }, i.createElement(p._14, null))), i.createElement(p.Q, null, i.createElement(p._14, {
                                width: 150
                            })), i.createElement(p.Q, {
                                fontSize: p.V.Size7
                            }, i.createElement(p._14, {
                                width: 100
                            }))));
                            return e
                        }
                        return t.props.data.streams.edges.map(function(e, n) {
                            if (!e.node.broadcaster.id) return null;
                            var a = e.node,
                                r = Object(x.a)(a.broadcaster.login, a.broadcaster.displayName),
                                s = {
                                    medium: f.PageviewMedium.Following,
                                    content: f.PageviewContent.Live,
                                    content_index: n
                                },
                                l = a && a.game ? Object(L.c)(a.game.name) : "";
                            return i.createElement(p._8, {
                                className: "anon-top-channels",
                                key: a.broadcaster.id,
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(T.a, {
                                imageSrc: a && a.previewImageURL || o.a.defaultStreamPreviewURL,
                                imageAlt: a && a.title || "",
                                viewerCount: a && a.viewersCount || 0,
                                title: a && a.title || "",
                                channelName: r,
                                gameImageSrc: a && a.game && a.game.boxArtURL || o.a.defaultBoxArtURL,
                                gameTitle: a && a.game ? a.game.name : "",
                                gameLinkTo: {
                                    pathname: l,
                                    state: s
                                },
                                linkTo: {
                                    pathname: "/" + a.broadcaster.login,
                                    state: s
                                },
                                channelNameLinkTo: {
                                    pathname: "/" + a.broadcaster.login + "/videos",
                                    state: s
                                },
                                channelImageSrc: a.broadcaster.profileImageURL,
                                "data-a-target": "top-" + t.getDataProp() + "-channel-" + n
                            }))
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = i.createElement(p._8, {
                            display: p.R.Flex,
                            flexDirection: p.T.Row,
                            alignItems: p.c.Baseline,
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(p.Q, {
                            fontSize: p.V.Size2,
                            color: p.K.Base
                        }, this.getTitle()), i.createElement(p._8, {
                            className: "anon-top-channels__subheader",
                            margin: {
                                left: 2
                            }
                        }, i.createElement(p.Q, {
                            fontSize: p.V.Size3,
                            color: p.K.Alt2
                        }, this.getSubtitle()))),
                        t = i.createElement(p._8, {
                            className: "anon-top-channels__footer",
                            display: p.R.Flex,
                            justifyContent: p._7.End
                        }, i.createElement(p._2, {
                            display: p.R.Flex,
                            alignItems: p.c.Center
                        }, i.createElement(S.a, {
                            to: this.getLink(),
                            "data-a-target": "see-all-" + this.getDataProp() + "-channels-link"
                        }, i.createElement(p.Q, {
                            fontSize: p.V.Size4
                        }, this.getFooter()), i.createElement(p._35, {
                            color: p.K.Link,
                            margin: {
                                left: .5
                            },
                            display: p.R.InlineFlex,
                            alignItems: p.c.Center
                        }, i.createElement(p._24, {
                            asset: p._25.AngleRight,
                            width: 14,
                            height: 14
                        })))));
                    return i.createElement("div", null, e, i.createElement(p._55, {
                        gutterSize: p._57.Small,
                        childWidth: p._56.Large,
                        placeholderItems: 6
                    }, this.getItems()), t)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.getFooter = function() {
                    switch (this.props.type) {
                        case a.All:
                            return Object(o.d)("See all live Channels", "TopChannels");
                        case a.PS4:
                            return Object(o.d)("See all PS4 Channels", "TopChannels");
                        case a.Xbox:
                            return Object(o.d)("See all Xbox One Channels", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getSubtitle = function() {
                    switch (this.props.type) {
                        case a.All:
                            return Object(o.d)("Broadcasters people are watching now", "TopChannels");
                        case a.PS4:
                            return Object(o.d)("Channels broadcasted from Playstation 4", "TopChannels");
                        case a.Xbox:
                            return Object(o.d)("Channels broadcasted from Xbox one", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getTitle = function() {
                    switch (this.props.type) {
                        case a.All:
                            return Object(o.d)("Top Live Channels", "TopChannels");
                        case a.PS4:
                            return Object(o.d)("Top PS4 Channels", "TopChannels");
                        case a.Xbox:
                            return Object(o.d)("Top Xbox One Channels", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getDataProp = function() {
                    switch (this.props.type) {
                        case a.All:
                            return "live";
                        case a.PS4:
                            return "ps4";
                        case a.Xbox:
                            return "xbox";
                        default:
                            return ""
                    }
                }, t.prototype.getLink = function() {
                    switch (this.props.type) {
                        case a.All:
                            return "/directory/all";
                        case a.PS4:
                            return "/directory/all/ps4";
                        case a.Xbox:
                            return "/directory/all/xbox";
                        default:
                            return ""
                    }
                }, t = r.__decorate([Object(C.a)(N, {
                    options: function(e) {
                        var t = "";
                        switch (e.type) {
                            case a.PS4:
                                t = "ps4";
                                break;
                            case a.Xbox:
                                t = "xbox";
                                break;
                            default:
                                t = "all"
                        }
                        return {
                            variables: {
                                platformType: t
                            }
                        }
                    }
                }), Object(d.d)("TopChannels")], t)
            }(i.Component)),
            F = (n("9zTP"), u.a.wrap(function() {
                return n.e(104).then(n.bind(null, "yEZg"))
            }, "FeaturedGenres")),
            R = u.a.wrap(function() {
                return n.e(101).then(n.bind(null, "2hMh"))
            }, "TopCreative"),
            A = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.onTakeoverRendered = function() {
                        n.setState({
                            takeoverRendered: !0
                        })
                    }, n.renderFeaturedGamesOrGenres = function() {
                        if (void 0 !== n.state.categoriesExperimentAssignment) {
                            if (n.state.categoriesExperimentAssignment) {
                                var e = n.state.categoriesExperimentAssignment === b.a.Streams;
                                return i.createElement(F, {
                                    trackingMedium: f.PageviewMedium.AnonFrontPage,
                                    withStreams: e
                                })
                            }
                            return i.createElement(P, null)
                        }
                    }, n.renderTopCreative = function() {
                        if (n.state.categoriesExperimentAssignment) {
                            var e = n.state.categoriesExperimentAssignment === b.a.Streams;
                            return i.createElement(p._35, {
                                className: "anon-front__content-section",
                                background: p.n.Base,
                                margin: {
                                    x: "auto"
                                },
                                padding: {
                                    x: 1,
                                    top: 5,
                                    bottom: 3
                                }
                            }, i.createElement(R, {
                                trackingMedium: f.PageviewMedium.AnonFrontPage,
                                withStreams: e
                            }))
                        }
                    }, n.renderSocialBar = function() {
                        return i.createElement(p._35, {
                            className: "anon-front__social-container",
                            alignItems: p.c.Center,
                            display: p.R.Flex,
                            flexDirection: p.T.Column,
                            justifyContent: p._7.Center,
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 3,
                                x: 2
                            }
                        }, i.createElement(p.Q, {
                            fontSize: p.V.Size3
                        }, Object(o.d)("Follow the latest Twitch news", "AnonFrontPage")), i.createElement(p._8, {
                            margin: {
                                top: 1
                            },
                            display: p.R.Flex,
                            flexDirection: p.T.Row
                        }, i.createElement(p.v, {
                            linkTo: "https://www.facebook.com/twitch",
                            targetBlank: !0,
                            size: p.z.Large,
                            "data-a-target": "frontpage-facebook-link"
                        }, Object(o.d)("Facebook", "AnonFrontPage")), i.createElement(p._8, {
                            margin: {
                                x: .5
                            }
                        }, i.createElement(p.v, {
                            linkTo: "https://www.twitter.com/twitch",
                            targetBlank: !0,
                            size: p.z.Large,
                            "data-a-target": "frontpage-twitter-link"
                        }, Object(o.d)("Twitter", "AnonFrontPage"))), i.createElement(p.v, {
                            linkTo: "https://blog.twitch.tv/",
                            targetBlank: !0,
                            size: p.z.Large,
                            "data-a-target": "frontpage-blog-link"
                        }, Object(o.d)("Official Blog", "AnonFrontPage"))))
                    }, n.renderPlatformTopChannels = function() {
                        return i.createElement(p._8, null, i.createElement(p._35, {
                            background: p.n.Base,
                            padding: {
                                x: 2,
                                y: 3
                            },
                            margin: {
                                x: "auto"
                            },
                            className: "anon-front__content-section"
                        }, i.createElement(I, {
                            type: a.PS4,
                            key: "channels.ps4"
                        })), i.createElement(p._35, {
                            background: p.n.Base,
                            padding: {
                                x: 2,
                                y: 3
                            },
                            margin: {
                                x: "auto"
                            },
                            className: "anon-front__content-section"
                        }, i.createElement(I, {
                            type: a.Xbox,
                            key: "channels.xbox"
                        })))
                    }, n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(k.b.anonFront).length && v.a.display(k.b.anonFront.takeover), {
                                numSlotsAdded: t
                            }
                        })
                    };
                    var r = o.o.experiments.getAssignment(b.f);
                    return n.state = {
                        categoriesExperimentAssignment: Object(b.l)(r) ? r : null,
                        takeoverRendered: !1,
                        numSlotsAdded: 0
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    k.g.addListener(k.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    o.o.setPageTitle()
                }, t.prototype.render = function() {
                    var e = void 0 !== this.state.categoriesExperimentAssignment && !this.state.categoriesExperimentAssignment;
                    return i.createElement(p._8, {
                        fullHeight: !0
                    }, i.createElement(w.a, null, i.createElement(E.a, null)), i.createElement(p._35, {
                        className: "anon-front",
                        background: p.n.Base,
                        position: p._15.Relative,
                        fullHeight: !0
                    }, i.createElement("div", {
                        id: "mantle_skin",
                        className: this.state.takeoverRendered ? "anon-front__takeover" : ""
                    }, i.createElement(_.a, {
                        adSize: k.c.anonFront.takeover,
                        adUnit: k.d.frontpage,
                        "data-a-target": "site-skin-ad-slot",
                        slotID: k.b.anonFront.takeover,
                        targeting: {
                            pagetype: k.a.frontpage
                        },
                        slotRendered: this.onTakeoverRendered,
                        autoEnable: !1
                    }), i.createElement(p._8, {
                        className: "anon-front__featured-section",
                        display: p.R.Flex,
                        flexWrap: p.U.Wrap,
                        justifyContent: p._7.Center
                    }, i.createElement(p._8, {
                        className: "anon-front__banner"
                    }, i.createElement(_.a, {
                        adSize: k.c.anonFront.banner,
                        adUnit: k.d.frontpage,
                        "data-a-target": "anon-front-banner-ad-slot",
                        slotID: k.b.anonFront.banner,
                        targeting: {
                            pagetype: k.a.frontpage
                        },
                        injectStyles: {
                            display: "flex"
                        },
                        autoEnable: !1
                    })), i.createElement(p._8, {
                        className: "anon-front__content-section",
                        padding: this.state.takeoverRendered ? 2 : 0
                    }, i.createElement(y.b, {
                        renderContext: y.a.AnonFront
                    })), i.createElement(p._8, {
                        className: "anon-front__sizzle-strip",
                        display: p.R.Flex,
                        justifyContent: p._7.Center
                    }, i.createElement(_.a, {
                        adSize: k.c.anonFront.sizzle,
                        adUnit: k.d.sizzle,
                        "data-a-target": "anon-front-sizzle-strip-ad-slot",
                        slotID: k.b.anonFront.sizzle,
                        targeting: {
                            pagetype: k.a.frontpage
                        },
                        autoEnable: !1
                    }))), i.createElement(s.a, null, i.createElement(p._35, {
                        background: p.n.Base,
                        margin: {
                            x: "auto"
                        },
                        padding: {
                            x: 1,
                            top: 5,
                            bottom: 3
                        },
                        className: "anon-front__content-section"
                    }, this.renderFeaturedGamesOrGenres())), this.renderTopCreative(), e && this.renderSocialBar(), i.createElement(p._35, {
                        background: p.n.Base,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 3
                        },
                        margin: {
                            x: "auto"
                        },
                        className: "anon-front__content-section"
                    }, i.createElement(I, {
                        type: a.All,
                        key: "channels.all"
                    })), e && this.renderPlatformTopChannels(), i.createElement(p._8, {
                        className: "anon-front__bottom",
                        display: p.R.Flex,
                        justifyContent: p._7.Center
                    }, i.createElement(_.a, {
                        adSize: k.c.anonFront.bottom,
                        adUnit: k.d.frontpage,
                        "data-a-target": "anon-front-footer-ad-slot",
                        slotID: k.b.anonFront.bottom,
                        targeting: {
                            pagetype: k.a.frontpage
                        },
                        injectStyles: {
                            display: "flex"
                        },
                        autoEnable: !1
                    })), i.createElement(m, null))))
                }, t.prototype.componentWillUnmount = function() {
                    k.g.removeListener(k.e, this.onSlotAdded)
                }, t = r.__decorate([Object(d.d)("AnonFrontPage", {
                    destination: h.a.Index,
                    autoReportInteractive: !0
                }), Object(g.a)({
                    location: f.PageviewLocation.FrontPage
                })], t)
            }(i.Component);
        n.d(t, "AnonFrontPage", function() {
            return A
        })
    },
    "8atL": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FeaturedContent"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "language"
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
                            value: "featuredStreams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "8"
                            }
                        }],
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
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
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
                                                        value: "150"
                                                    }
                                                }],
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
                                            value: "id"
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
                                            value: "viewersCount"
                                        },
                                        arguments: [],
                                        directives: []
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "featuredVideos"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "2"
                            }
                        }],
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
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
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
                                                        value: "150"
                                                    }
                                                }],
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
                                            value: "viewCount"
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
                end: 797
            }
        };
        n.loc.source = {
            body: "# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\nquery FeaturedContent($language: String!) {\nfeaturedStreams(language: $language first: 8) {\ndescription\nimageURL\nisScheduled\nisSponsored\npriorityLevel\nstream {\nbroadcaster {\ndisplayName\nid\nprofileImageURL(width: 150)\nlogin\n}\ngame {\nid\nname\n}\nid\ntype\nviewersCount\n}\ntitle\n}\nfeaturedVideos(language: $language first: 2) {\ndescription\nimageURL\nisScheduled\nisSponsored\npriorityLevel\ntitle\nvideo {\ngame {\nid\nname\n}\nid\nowner {\ndisplayName\nid\nprofileImageURL(width: 150)\nlogin\n}\nviewCount\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "9zTP": function(e, t) {},
    AHWf: function(e, t) {},
    APTF: function(e, t) {},
    BJwU: function(e, t) {},
    CybZ: function(e, t) {},
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
    GrwT: function(e, t) {},
    IJO1: function(e, t) {},
    IOwa: function(e, t, n) {
        "use strict";
        var a, r, i, o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            c = n("6sO2"),
            d = n("2o2f"),
            p = n("Odds"),
            m = (n("CybZ"), (a = {})[d.a.Live] = "stream-type-indicator--live", a[d.a.Premiere] = "stream-type-indicator--premiere", a[d.a.Rerun] = "stream-type-indicator--rerun", a[d.a.WatchParty] = "stream-type-indicator--rerun", a),
            u = ((r = {})[d.a.Premiere] = p._25.VideoPremiere, r[d.a.Rerun] = p._25.VideoRerun, r[d.a.WatchParty] = p._25.VideoRerun, r),
            g = ((i = {})[d.a.Premiere] = p._26.Live, i[d.a.Rerun] = p._26.Inherit, i[d.a.WatchParty] = p._26.Inherit, i),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(p._35, {
                        className: this.getClassNames(),
                        color: p.K.Overlay,
                        background: p.n.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: p.t.Small,
                        display: p.R.Flex
                    }, l.createElement(p._8, {
                        display: p.R.Flex,
                        alignItems: p.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(p.Q, {
                        type: p._49.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(p._35, {
                        borderRadius: p.t.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === d.a.Live ? l.createElement(p._8, {
                        className: "stream-type-indicator__live-wrapper",
                        display: p.R.Flex,
                        alignItems: p.c.Center
                    }, l.createElement(p.G, {
                        status: p.I.Live,
                        size: p.H.Small
                    })) : l.createElement(p._24, {
                        asset: u[this.props.type],
                        type: g[this.props.type],
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
            return h
        })
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
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "f", function() {
            return d
        });
        var a = n("TToO"),
            r = this,
            i = function() {
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
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
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
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
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
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
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(125).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            c = function() {
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(124).then(n.bind(null, "+kKy"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            d = function() {
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
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
    Lwev: function(e, t) {},
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
                        var e, n, s, d, p, m;
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
                                    return (p = a.sent()).body ? t(Object(c.f)(p.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.d)(!0))), [3, 4];
                                case 3:
                                    throw m = a.sent(), t(Object(c.d)(!0)), e.error(m, "Failed to load LoL champion data"), m;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, p)
            }
        };
        var d = 0,
            p = 350
    },
    TUg1: function(e, t) {},
    Tg4T: function(e, t, n) {
        "use strict";
        var a, r = n("TToO"),
            i = n("GiK3"),
            o = n("6sO2"),
            s = n("Odds");
        ! function(e) {
            e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
        }(a || (a = {}));
        var l = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.render = function() {
                if (!(this.props.restriction && this.props.restriction.productName && this.props.restriction.title && this.props.videoID)) return null;
                var e = Object(o.d)("Get It Now", "VideoPreviewCardRestriction"),
                    t = this.props.restriction.canViewRestricted,
                    n = t ? Object(o.d)("unlocked", "VideoPreviewCardRestriction") : Object(o.d)("locked", "VideoPreviewCardRestriction"),
                    r = t ? s._25.Unlock : s._25.Lock;
                return i.createElement(s._8, null, !t && i.createElement(s._35, {
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
                    "data-test-selector": a.LockSelector
                }, i.createElement(s._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(s.Q, {
                    color: s.K.Overlay,
                    fontSize: s.V.Size5,
                    "data-test-selector": a.UpsellSelector
                }, Object(o.d)("View with {title}", {
                    title: this.props.restriction.title
                }, "VideoPreviewCardRestriction"))), i.createElement(s._8, null, i.createElement(s.v, {
                    type: s.B.Hollow,
                    ariaLabel: e,
                    targetBlank: !0,
                    disabled: "" === this.props.restriction.productName,
                    linkTo: "https://www.twitch.tv/products/" + this.props.restriction.productName,
                    overlay: !0
                }, e))), i.createElement(s._35, {
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
                }, i.createElement(s._52, {
                    direction: this.props.attachTop ? s._54.Bottom : s._54.Top,
                    align: s._53.Right,
                    label: n
                }, i.createElement(s._24, {
                    asset: r,
                    height: 20,
                    width: 20
                }))))
            }, t
        }(i.PureComponent);
        n.d(t, !1, function() {
            return a
        }), n.d(t, "a", function() {
            return l
        })
    },
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-9fc82f039194a365a8d6d2bf2797e041.png"
    },
    WKwZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "d", function() {
            return o
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        });
        var a, r, i = "carousel-player__main-description",
            o = "carousel-player-left-button",
            s = "carousel-player-right-button";
        ! function(e) {
            e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
        }(a || (a = {})),
        function(e) {
            e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
        }(r || (r = {}))
    },
    Wjt1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.placeholderFeaturedBroadcasters = function(e) {
            return g([], e, !0)
        }, n.d(t, "FeaturedContent", function() {
            return h
        });
        var a = n("TToO"),
            r = n("GiK3"),
            i = (n.n(r), n("6sO2")),
            o = n("7vx8"),
            s = n("g91j"),
            l = n("WKwZ"),
            c = n("o8Pq"),
            d = n("8atL"),
            p = (n.n(d), n("Xg86")),
            m = n("CSlQ"),
            u = n("Odds");
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return c.FeaturedBroadcastersRenderContext
        });

        function g(e, t, n) {
            switch (t) {
                case c.FeaturedBroadcastersRenderContext.AnonFront:
                    return r.createElement(s.a, {
                        items: e,
                        isLoading: n,
                        layout: l.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return r.createElement(u._35, {
                        className: "featured-content",
                        background: u.n.Base,
                        elevation: 1
                    }, r.createElement(u._8, {
                        padding: 1
                    }, function(e) {
                        return e ? r.createElement(u.Q, {
                            fontSize: u.V.Size5,
                            color: u.K.Alt2
                        }, r.createElement(u._14, {
                            width: 100
                        })) : r.createElement(u.Q, {
                            fontSize: u.V.Size5,
                            color: u.K.Alt2
                        }, Object(i.d)("Featured", "FeaturedContentComponent"))
                    }(n)), r.createElement(s.a, {
                        items: e,
                        isLoading: n,
                        layout: l.c.Vertical
                    }))
            }
        }
        var h = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(p.a)(e),
                    n = this.props.data.featuredVideos || [],
                    a = Object(p.b)(n);
                if (t.length > 0 && t.splice(t.length - a.length), this.props.shouldMixContent && a.length > 0) {
                    var r = 6 - a.length,
                        i = t.splice(r);
                    t = t.concat(a).concat(i)
                } else t = t.concat(a);
                var o = !(!this.props.data.loading && !this.props.data.error);
                return g(t, this.props.renderContext, o)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = a.__decorate([Object(o.a)(d, {
                options: function() {
                    return {
                        variables: {
                            language: i.o.intl.getLanguageCode()
                        }
                    }
                }
            }), Object(m.d)("FeaturedContent")], t)
        }(r.Component)
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
    Xg86: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.map(function(e) {
                var t = "",
                    n = null;
                return e.stream && e.stream.game && null !== e.stream.game.name && (t = e.stream.game.name), e.stream && e.stream.broadcaster && (n = e.stream.broadcaster), {
                    broadcaster: {
                        displayName: n ? n.displayName : "",
                        id: n ? n.id : "",
                        login: n ? n.login : "",
                        profileImageURL: n ? n.profileImageURL : ""
                    },
                    content: {
                        id: n ? n.login : "",
                        gameName: t,
                        type: a.b.Stream,
                        subType: e.stream ? e.stream.type : "",
                        viewersCount: e.stream ? e.stream.viewersCount : 0
                    },
                    description: r(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        }, t.b = function(e) {
            return e.map(function(e) {
                var t = "",
                    n = null;
                return e.video && e.video.game && null !== e.video.game.name && (t = e.video.game.name), e.video && e.video.owner && (n = e.video.owner), {
                    broadcaster: {
                        displayName: n ? n.displayName : "",
                        id: n ? n.id : "",
                        login: n ? n.login : "",
                        profileImageURL: n ? n.profileImageURL : ""
                    },
                    content: {
                        id: e.video ? e.video.id : "",
                        gameName: t,
                        type: a.b.Vod,
                        subType: "video",
                        viewersCount: e.video ? e.video.viewCount : 0
                    },
                    description: r(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        };
        var a = n("WKwZ");

        function r(e) {
            return e.replace(/\[\]\(.+\)/, "")
        }
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
            return b
        });
        var a = n("TToO"),
            r = n("HW6M"),
            i = (n.n(r), n("OAwv")),
            o = (n.n(i), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("6sO2"),
            c = n("iOr9"),
            d = n("vKFS"),
            p = n("SZoP"),
            m = n("mi6k"),
            u = n("CSlQ"),
            g = n("81qH"),
            h = n("Tg4T"),
            v = n("Odds"),
            f = n("a0ve"),
            _ = (n.n(f), "video-view-count"),
            k = "video-length",
            y = function(e) {
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
                        var r = {
                            productName: t.props.video.restriction && t.props.video.restriction.productName,
                            title: t.props.video.restriction && t.props.video.restriction.productTitle,
                            canViewRestricted: t.props.video.self && !t.props.video.self.isRestricted || !1
                        };
                        return o.createElement("div", a.__assign({
                            onClick: t.onClickHandler,
                            onMouseEnter: t.onMouseEnterHandler,
                            onMouseLeave: t.onMouseLeaveHandler
                        }, Object(v._63)(t.props)), o.createElement(v.C, null, o.createElement(v._8, {
                            fullWidth: !0
                        }, o.createElement(v.k, {
                            overflow: !0
                        }, o.createElement("div", null, o.createElement(h.a, {
                            videoID: t.props.video.id,
                            restriction: r
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
                            "data-test-selector": _,
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
                            "data-test-selector": k,
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        n = r("video-preview-card__image-wrapper", {
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
                            title: Object(p.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(p.a)(this.props.video.owner.login, this.props.video.owner.displayName))
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
                    if (this.props.video.owner) return e + " · " + Object(p.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                }, t.prototype.getLinkState = function() {
                    return {
                        content: this.props.tracking.content,
                        content_index: this.props.tracking.content_index,
                        medium: this.props.tracking.medium
                    }
                }, t
            }(o.Component),
            b = Object(u.d)("VideoPreviewCard")(y)
    },
    bNhH: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), t.c = function(e) {
            return g([], e, !0)
        }, n.d(t, "a", function() {
            return h
        });
        var a, r = n("TToO"),
            i = n("GiK3"),
            o = (n.n(i), n("6sO2")),
            s = n("7vx8"),
            l = n("g91j"),
            c = n("WKwZ"),
            d = n("Xg86"),
            p = n("CSlQ"),
            m = n("Odds"),
            u = n("uckt");
        n.n(u);
        ! function(e) {
            e[e.AnonFront = 1] = "AnonFront", e[e.Front = 2] = "Front"
        }(a || (a = {}));

        function g(e, t, n) {
            switch (t) {
                case a.AnonFront:
                    return i.createElement(l.a, {
                        items: e,
                        isLoading: n,
                        layout: c.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return i.createElement(m._35, {
                        className: "featured-broadcasters",
                        background: m.n.Base,
                        elevation: 1
                    }, i.createElement(m._8, {
                        padding: 1
                    }, i.createElement(m.Q, {
                        fontSize: m.V.Size5,
                        color: m.K.Alt2
                    }, Object(o.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), i.createElement(l.a, {
                        items: e,
                        isLoading: n,
                        layout: c.c.Vertical
                    }))
            }
        }
        var h = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getRender = function(e) {
                    var n = !(!t.props.data.loading && !t.props.data.error);
                    return g(e, t.props.renderContext, n)
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(d.a)(e);
                return this.getRender(t)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = r.__decorate([Object(s.a)(u, {
                options: function(e) {
                    return {
                        variables: {
                            language: o.o.intl.getLanguageCode(),
                            first: e.streamCount || 8
                        }
                    }
                }
            }), Object(p.d)("FeaturedBroadcasters")], t)
        }(i.Component)
    },
    dXGo: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AnonFront_FeaturedGames"
                },
                variableDefinitions: [],
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
                                kind: "IntValue",
                                value: "11"
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
                                                    value: "viewersCount"
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
                end: 128
            }
        };
        n.loc.source = {
            body: "query AnonFront_FeaturedGames {\ngames(first: 11) {\nedges {\nnode {\nid\nname\nviewersCount\nboxArtURL(width: 285 height: 380)\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ea7N: function(e, t) {},
    g91j: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("HW6M"),
            i = n("GiK3"),
            o = n("6sO2"),
            s = n("NXs7"),
            l = n("VAT8"),
            c = n("WKwZ"),
            d = n("CSlQ"),
            p = n("Odds"),
            m = (n("TUg1"), "carousel-card-live"),
            u = "carousel-card-vod",
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderIndicator = function() {
                        return t.props.item.content.type === c.b.Stream ? i.createElement(p.G, {
                            status: p.I.Live,
                            size: p.H.Small,
                            "data-test-selector": m
                        }) : i.createElement(p._24, {
                            asset: p._25.GlyphViews,
                            "data-test-selector": u
                        })
                    }, t.itemClick = function() {
                        t.props.itemClick(t.props.item)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = r({
                        "carousel-nav__item": !0,
                        "carousel-nav__item--active": this.props.itemActive
                    });
                    return i.createElement(p._8, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: p._15.Relative
                    }, i.createElement(p._52, {
                        label: (this.props.item.isSponsored ? Object(o.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: p._54.Top,
                        display: p.R.Block
                    }, i.createElement(p._6, a.__assign({
                        onClick: this.itemClick
                    }, Object(p._63)(this.props)), i.createElement(p.k, {
                        ratio: p.l.Aspect16x9
                    }, i.createElement(p._8, {
                        className: "carousel-nav__meta",
                        alignItems: p.c.Center,
                        attachBottom: !0,
                        margin: {
                            left: .5
                        },
                        zIndex: p._62.Above
                    }, this.renderIndicator(), i.createElement(p._8, {
                        display: p.R.InlineFlex,
                        margin: {
                            left: .5
                        }
                    }, i.createElement(p.Q, {
                        color: p.K.Overlay,
                        type: p._49.Span
                    }, Object(o.e)(this.props.item.content.viewersCount)))), i.createElement(p._8, {
                        className: "carousel-nav__img-container"
                    }, i.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? i.createElement(p._8, {
                        position: p._15.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, i.createElement(p._24, {
                        asset: p._25.Featured,
                        type: p._26.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = a.__decorate([Object(d.d)("CarouselCard")], t)
            }(i.Component),
            h = n("lfvs"),
            v = n("F8kA"),
            f = n("SZoP"),
            _ = n("p+bz"),
            k = (n("i6UE"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = r("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(o.d)("playing {game}", {
                                game: i.createElement(v.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: Object(_.b)(t.props.item.isScheduled)
                                    }
                                }, t.props.item.content.gameName)
                            }, "HorizontalCarouselPlayer"),
                            a = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy,
                                onVideoTimeChange: t.onVideoTimeChange
                            };
                        return i.createElement(p._35, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: p.R.Flex,
                            flexDirection: p.T.Row,
                            color: p.K.Alt
                        }, i.createElement(p._8, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, i.createElement(p._8, {
                            className: "horizontal-carousel-player__video",
                            position: p._15.Relative,
                            overflow: p._11.Hidden
                        }, Object(_.c)(a))), i.createElement(p._8, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, i.createElement(p._8, {
                            display: p.R.Flex,
                            flexWrap: p.U.NoWrap,
                            textAlign: p._45.Left,
                            alignItems: p.c.Center,
                            padding: {
                                bottom: .5
                            }
                        }, i.createElement(p._8, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, i.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, i.createElement(v.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: Object(_.b)(t.props.item.isScheduled)
                            },
                            "data-a-target": "carousel-profile-image"
                        }, i.createElement(p.m, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(o.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), i.createElement(p._8, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, i.createElement(p.Q, {
                            fontSize: p.V.Size4,
                            color: p.K.Base,
                            lineHeight: p._9.Heading,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(f.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), i.createElement(p.Q, {
                            fontSize: p.V.Size6,
                            color: p.K.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, i.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), i.createElement(p._8, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, i.createElement(v.a, {
                            to: t.getLinkForTitle()
                        }, i.createElement(p.Q, {
                            type: p._49.Span,
                            "data-a-target": c.a,
                            fontSize: p.V.Size3,
                            lineHeight: p._9.Heading
                        }, t.props.item.title)))), i.createElement(h, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === c.b.Stream) return {
                            pathname: "/" + t.props.item.broadcaster.login,
                            state: Object(_.b)(t.props.item.isScheduled)
                        };
                        var e = t.state && t.state.videoOffset || 0;
                        return {
                            pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                            state: Object(_.b)(t.props.item.isScheduled)
                        }
                    }, t.getPlaceholderRender = function() {
                        var e = r("horizontal-carousel-player__details", {
                            "horizontal-carousel-player__details--overlay": t.props.darkTheme
                        });
                        return i.createElement(p._8, {
                            display: p.R.Flex,
                            flexWrap: p.U.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(p._8, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, i.createElement(p.k, {
                            ratio: p.l.Aspect16x9
                        }, i.createElement(p._14, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), i.createElement(p._8, {
                            className: r(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, i.createElement(p._8, {
                            display: p.R.Flex,
                            flexWrap: p.U.NoWrap,
                            textAlign: p._45.Left,
                            alignItems: p.c.Start
                        }, i.createElement(p._8, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, i.createElement(p._14, {
                            width: 40,
                            height: 40
                        })), i.createElement(p._8, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, i.createElement(p.Q, null, i.createElement(p._14, {
                            width: 70
                        })), i.createElement(p.Q, null, i.createElement(p._14, {
                            width: 70
                        })))), i.createElement(p._8, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(p.Q, null, i.createElement(p._14, {
                            lineCount: 1
                        })), i.createElement(p.Q, null, i.createElement(p._14, {
                            lineCount: 4
                        })))))
                    }, t.onVideoTimeChange = function(e) {
                        t.setState({
                            videoOffset: e
                        })
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                    e.item !== this.props.item && this.props.onPromotionCardView(e.item)
                }, t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(i.Component)),
            y = n("RH2O"),
            b = n("hdYS"),
            w = (n("0v28"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = r("vertical-carousel-player__details", {
                                "vertical-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(o.d)("{login} playing {game}", {
                                login: i.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "display_name")
                                }, i.createElement(v.a, {
                                    to: {
                                        pathname: "/" + t.props.item.broadcaster.login,
                                        state: Object(_.b)(t.props.item.isScheduled)
                                    },
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(f.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: i.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, i.createElement(v.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: Object(_.b)(t.props.item.isScheduled)
                                    },
                                    "data-a-target": "carousel-broadcaster-game-name"
                                }, t.props.item.content.gameName))
                            }, "VerticalCarouselPlayer"),
                            a = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy
                            };
                        return i.createElement(p._35, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: p.K.Alt
                        }, i.createElement(p._8, {
                            className: "vertical-carousel-player__video",
                            position: p._15.Relative,
                            overflow: p._11.Hidden
                        }, Object(_.c)(a)), i.createElement(p._8, {
                            className: r(e),
                            display: p.R.Flex,
                            flexWrap: p.U.NoWrap,
                            textAlign: p._45.Left,
                            alignItems: p.c.Center,
                            padding: {
                                y: 1
                            }
                        }, i.createElement(p._8, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, i.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, i.createElement(v.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, i.createElement(p.m, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(o.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), i.createElement(p._8, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, i.createElement(p.Q, {
                            "data-a-target": c.a,
                            fontSize: p.V.Size5,
                            color: p.K.Base,
                            bold: !0
                        }, t.props.item.title), i.createElement(p.Q, {
                            fontSize: p.V.Size6,
                            color: p.K.Base
                        }, n)), i.createElement(p._8, {
                            flexShrink: 0
                        }, t.renderFollowButton())), i.createElement(h, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return i.createElement(p._8, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, i.createElement(p.k, {
                            ratio: p.l.Aspect16x9
                        }, i.createElement(p._14, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), i.createElement(p._8, {
                            display: p.R.Flex,
                            flexWrap: p.U.NoWrap,
                            textAlign: p._45.Left,
                            alignItems: p.c.Center,
                            padding: {
                                y: 1
                            }
                        }, i.createElement(p._8, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, i.createElement(p._14, {
                            width: 40,
                            height: 40
                        })), i.createElement(p._8, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, i.createElement(p.Q, null, i.createElement(p._14, {
                            width: 150
                        })), i.createElement(p.Q, null, i.createElement(p._14, {
                            width: 100
                        }))), i.createElement(p._8, {
                            flexShrink: 0
                        }, i.createElement(p._14, {
                            width: 70,
                            height: 30
                        }))), i.createElement(p.Q, null, i.createElement(p._14, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t.prototype.renderFollowButton = function() {
                    return this.props.firstPageLoaded ? i.createElement(b.a, {
                        "data-a-target": "carousel-follow-button",
                        channelLogin: this.props.item.broadcaster.login,
                        followUIType: b.b.IconAndText,
                        unfollowUIType: b.b.IconOnly,
                        showLoadingPlaceholder: !0
                    }) : i.createElement(p._14, {
                        width: 70,
                        height: 30
                    })
                }, t
            }(i.Component));
        var E = Object(y.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(w),
            S = n("o6H2"),
            C = (n("0OPT"), 6),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > C) {
                            var e = t.state.startingIndex > 0;
                            return i.createElement(p._8, {
                                display: p.R.Flex,
                                alignItems: p.c.Stretch
                            }, i.createElement(p.w, {
                                ariaLabel: Object(o.d)("Page Left", "CarouselPlayerComponent"),
                                icon: p._25.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": c.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > C) {
                            var e = t.props.items.length > t.state.startingIndex + C;
                            return i.createElement(p._8, {
                                display: p.R.Flex,
                                alignItems: p.c.Stretch
                            }, i.createElement(p.w, {
                                ariaLabel: Object(o.d)("Page Right", "CarouselPlayerComponent"),
                                icon: p._25.AngleRight,
                                onClick: t.handlePageRight,
                                "data-test-selector": c.e,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.getCardsRender = function() {
                        if (t.state.activeItem) return t.displayEventFired || (Object(S.a)(t.props.items), t.displayEventFired = !0), t.props.items.slice(t.state.startingIndex, t.state.startingIndex + C).map(function(e, n) {
                            return i.createElement(g, {
                                key: e.content.id,
                                item: e,
                                itemClick: t.selectContent,
                                itemActive: e.content.id === t.state.activeItem.content.id,
                                "data-a-target": "carousel-card-" + n
                            })
                        });
                        for (var e = [], n = 0; n < C; n++) e.push(i.createElement(p._8, {
                            key: n,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, i.createElement(p.k, {
                            ratio: p.l.Aspect16x9
                        }, i.createElement(p._14, null)), i.createElement(p._8, {
                            margin: {
                                top: .5
                            }
                        }, i.createElement(p._14, {
                            height: 4
                        }))));
                        return e
                    }, t.getLayoutRender = function() {
                        var e = {
                            darkTheme: t.props.darkTheme || !1,
                            item: t.state.activeItem,
                            onPromotionCardClick: t.trackPromotionClick,
                            onPromotionCardView: t.trackPromotionView
                        };
                        switch (t.props.layout) {
                            case c.c.Vertical:
                                return i.createElement(E, a.__assign({}, e));
                            default:
                                return i.createElement(k, a.__assign({}, e))
                        }
                    }, t.selectContent = function(e) {
                        t.setState({
                            activeItem: e
                        });
                        var n = {
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        };
                        Object(S.b)(n)
                    }, t.trackPromotionClick = function(e, n) {
                        var a = e.broadcaster,
                            r = e.content,
                            i = e.isScheduled,
                            o = {
                                broadcast_type: r.subType,
                                carousel_index: t.props.items.indexOf(t.state.activeItem),
                                channel: a.displayName,
                                game: r.gameName,
                                promotion_was_scheduled: i,
                                views: r.viewersCount
                            };
                        Object(S.d)(o, n)
                    }, t.trackPromotionView = function(e) {
                        var n = {
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        };
                        Object(S.e)(n)
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - C;
                        e !== t.state.startingIndex && (Object(S.c)("next"), t.setState({
                            startingIndex: e
                        }))
                    }, t.handlePageLeft = function() {
                        t.state.startingIndex > 0 && (Object(S.c)("prev"), t.setState({
                            startingIndex: 0
                        }))
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUpdate = function(e) {
                    !this.state.activeItem && e.items.length > 0 && this.setState({
                        activeItem: e.items[0]
                    })
                }, t.prototype.render = function() {
                    var e;
                    return this.props.darkTheme && (e = Object(l.c)(s.a.Dark)), i.createElement(p._8, {
                        className: r("carousel-player", e)
                    }, this.getLayoutRender(), i.createElement(p._35, {
                        background: p.n.Alt
                    }, i.createElement(p._8, {
                        display: p.R.Flex,
                        flexWrap: p.U.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = a.__decorate([Object(d.d)("CarouselPlayer")], t)
            }(i.Component);
        n.d(t, "a", function() {
            return L
        })
    },
    i6UE: function(e, t) {},
    jpZi: function(e, t) {},
    nUXg: function(e, t) {},
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
    o6H2: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = {};
            e.forEach(function(e, n) {
                t["carousel_slot_" + n + "_channel"] = e.broadcaster.login, t["carousel_slot_" + n + "_priority"] = e.priorityLevel, t["carousel_slot_" + n + "_game"] = e.content.gameName, t["carousel_slot_" + n + "_ccu"] = e.content.viewersCount, t["carousel_slot_" + n + "_type"] = e.content.subType, e.isScheduled ? t["carousel_slot_" + n + "_source"] = o : t["carousel_slot_" + n + "_source"] = s
            }), r.n.track(i.SpadeEventType.FrontPageCarouselDisplay, t)
        }, t.b = function(e) {
            r.n.track(i.SpadeEventType.FrontPageCarouselClick, e)
        }, t.d = function(e, t) {
            var n = a.__assign({
                clicked_element: t
            }, e);
            r.n.track(i.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
        }, t.e = function(e) {
            r.n.track(i.SpadeEventType.FrontPageCarouselPromotionCardView, e)
        }, t.c = function(e) {
            r.n.track(i.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        };
        var a = n("TToO"),
            r = n("6sO2"),
            i = n("vH/s"),
            o = "google_calendar",
            s = "backfill"
    },
    o8Pq: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("bNhH");
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return a.b
        }), n.d(t, "placeholderFeaturedBroadcasters", function() {
            return a.c
        }), n.d(t, "FeaturedBroadcasters", function() {
            return a.a
        })
    },
    "p+bz": function(e, t, n) {
        "use strict";
        t.c = function(e) {
            switch (e.type) {
                case r.b.Stream:
                    return a.createElement(i.c, {
                        channelLogin: e.id,
                        vodID: "",
                        showChannelInfoOnHover: e.showChannelInfoOnHover,
                        disableTheatreButton: !0,
                        playerTypeOverride: i.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy
                    });
                case r.b.Vod:
                    return a.createElement(i.c, {
                        channelLogin: "",
                        vodID: e.id,
                        disableTheatreButton: !0,
                        playerTypeOverride: i.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy,
                        onVideoTimeChange: e.onVideoTimeChange
                    });
                default:
                    return null
            }
        }, t.a = function(e) {
            return e.map(function(e) {
                var t = "",
                    n = null;
                return e.stream && e.stream.game && null !== e.stream.game.name && (t = e.stream.game.name), e.stream && e.stream.broadcaster && (n = e.stream.broadcaster), {
                    broadcaster: {
                        displayName: n && n.displayName ? n.displayName : "",
                        id: n && n.id ? n.id : "",
                        login: n && n.login ? n.login : "",
                        profileImageURL: n && n.profileImageURL ? n.profileImageURL : ""
                    },
                    content: {
                        id: n && n.login ? n.login : "",
                        gameName: t,
                        previewImageURL: e.stream && e.stream.previewImageURL ? e.stream.previewImageURL : "",
                        type: r.b.Stream,
                        subType: e.stream && e.stream.type ? e.stream.type : "",
                        viewersCount: e.stream && e.stream.viewersCount ? e.stream.viewersCount : 0
                    },
                    description: "",
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel || 10,
                    title: e.title || ""
                }
            })
        }, t.b = function(e) {
            return {
                medium: "twitch_home",
                content: e ? "carousel_promo" : "carousel_backfill"
            }
        };
        var a = n("GiK3"),
            r = (n.n(a), n("WKwZ")),
            i = n("fc0G")
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
    uckt: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FeaturedStreams"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "language"
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
                            value: "first"
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
                            value: "featuredStreams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "first"
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
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
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
                                                        value: "150"
                                                    }
                                                }],
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
                                            value: "id"
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
                                            value: "viewersCount"
                                        },
                                        arguments: [],
                                        directives: []
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 290
            }
        };
        n.loc.source = {
            body: "query FeaturedStreams($language: String $first: Int) {\nfeaturedStreams(language: $language first: $first) {\ndescription\nimageURL\nisScheduled\nisSponsored\npriorityLevel\nstream {\nbroadcaster {\ndisplayName\nid\nprofileImageURL(width: 150)\nlogin\n}\ngame {\nid\nname\n}\nid\ntype\nviewersCount\n}\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
            p = n("5DPx"),
            m = (n("nUXg"), function(e) {
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
                                        return n.trys.push([1, 3, , 4]), [4, Object(p.b)(this.props.streamMetadata, this.props.game)];
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
                    }))), r.createElement(c._35, {
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
        var u = Object(o.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap
                    }
                }
            })(m),
            g = (n("YVIF"), function(e) {
                var t = r.createElement(c._35, {
                    className: "preview-card-iconic-image__wrapper",
                    borderRadius: c.t.Small,
                    overflow: c._11.Hidden
                }, r.createElement(c.k, {
                    ratio: e.aspect || c.l.BoxArt,
                    align: c.a.Center
                }, r.createElement(c.N, a.__assign({}, e.imageProps))));
                return e.linkTo && (t = r.createElement(c.O, {
                    to: e.linkTo,
                    onClick: e.onClick
                }, t)), t
            });
        g.displayName = "PreviewCardIconicImage";
        n("IJO1");
        var h, v = function(e) {
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
            },
            f = (n("BJwU"), function(e) {
                var t = e.icon && r.createElement(c._8, {
                    display: c.R.Flex
                }, r.createElement(c._24, {
                    asset: e.icon,
                    width: 14,
                    height: 14
                }));
                return e.withBackground ? r.createElement(c._35, {
                    alignItems: c.c.Center,
                    background: c.n.Overlay,
                    borderRadius: c.t.Small,
                    className: "preview-card-stat",
                    color: c.K.Overlay,
                    display: c.R.Flex,
                    fontSize: c.V.Size6,
                    justifyContent: c._7.Center
                }, t, r.createElement(c.Q, null, e.value)) : r.createElement(c._35, {
                    className: "preview-card-stat",
                    color: c.K.Overlay,
                    display: c.R.Flex,
                    padding: {
                        x: .5
                    }
                }, t, r.createElement(c.Q, null, e.value))
            }),
            _ = n("vKYI"),
            k = (n("jpZi"), 300),
            y = 5e3,
            b = "preview-card-thumbnail__image-selector",
            w = function(e) {
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
                            }, k)
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
                        }, y)
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
                    }), r.createElement("div", a.__assign({}, e, {
                        onClick: this.props.onClick
                    }), this.renderLoadingSpinner(), r.createElement(c._35, {
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
                    }, r.createElement(_.a, {
                        channelLogin: this.props.liveChannelLogin || void 0,
                        onPlayerPlaying: this.onLivePreviewLoaded
                    })), r.createElement("div", {
                        key: "image-key",
                        className: i
                    }, r.createElement(c.N, a.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": b
                    })))] : n && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                        className: i
                    }, r.createElement(c.N, a.__assign({}, this.props.animatedImageProps, {
                        onLoad: this.onImageLoad,
                        onError: this.onImageLoadError,
                        "data-test-selector": b
                    }))) : r.createElement("div", {
                        className: i
                    }, r.createElement(c.N, a.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": b
                    })))
                }, t.prototype.renderLoadingSpinner = function() {
                    if (this.shouldShowLiveVideoPreview() && !this.state.isLiveVideoPreviewLoaded) return r.createElement(c._35, {
                        attachRight: !0,
                        attachTop: !0,
                        background: c.n.Overlay,
                        borderRadius: c.t.Small,
                        color: c.K.OverlayAlt,
                        margin: .5,
                        padding: .5,
                        position: c._15.Absolute,
                        zIndex: c._62.Above
                    }, r.createElement(c._10, {
                        fillContent: !0,
                        inheritColor: !0,
                        size: c._33.Small,
                        delay: 0
                    }))
                }, t
            }(r.Component),
            E = (n("ea7N"), function(e) {
                var t = null;
                return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                    return r.createElement(c._8, {
                        key: t,
                        "data-test-selector": "preview-card-titles__subtitle"
                    }, r.createElement(c.Q, {
                        color: c.K.Alt,
                        ellipsis: !0
                    }, "string" == typeof e ? e : r.createElement(c.O, {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: c.P.Inherit
                    }, e.text)))
                })), r.createElement("div", null, r.createElement(c.O, {
                    to: e.linkTo,
                    onClick: e.onClick,
                    type: c.P.Inherit,
                    "data-test-selector": "preview-card-titles__primary-link"
                }, r.createElement(c.Q, {
                    type: c._49.H3,
                    fontSize: c.V.Size5,
                    lines: 1,
                    bold: !0,
                    ellipsis: !0
                }, e.title)), r.createElement(c._8, {
                    className: "preview-card-titles__subtitle-wrapper"
                }, t))
            }),
            S = n("IOwa"),
            C = n("mi6k"),
            L = n("Tg4T");

        function O(e) {
            return void 0 !== e.streamType
        }

        function P(e) {
            return void 0 !== e.watchedProgressPercent
        }

        function T(e) {
            return void 0 !== e.clipCreatedByChannelLogin
        }! function(e) {
            e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
        }(h || (h = {}));
        var x = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return r.createElement("div", {
                    className: "preview-card"
                }, r.createElement(c._8, {
                    position: c._15.Relative
                }, P(this.props) && r.createElement(L.a, {
                    videoID: this.props.videoID || "",
                    restriction: this.props.restriction,
                    attachTop: !0
                }), r.createElement(c.O, {
                    to: this.props.thumbnailLinkTo || this.props.linkTo,
                    onClick: this.props.onThumbnailClick || this.props.onClick
                }, this.props.thumbnailImageProps && r.createElement(w, {
                    staticImageProps: this.props.thumbnailImageProps,
                    animatedImageProps: P(this.props) && this.props.animatedImageProps || void 0,
                    liveChannelLogin: O(this.props) && this.props.enableLivePreview ? this.props.channelLogin : null
                }), this.renderOverlay())), r.createElement(c._8, {
                    display: c.R.Flex,
                    flexWrap: c.U.NoWrap,
                    margin: {
                        top: 1
                    }
                }, r.createElement(c._8, {
                    flexGrow: 0,
                    flexShrink: 0
                }, this.renderIconicImage()), r.createElement(c._8, {
                    flexGrow: 1,
                    flexShrink: 1,
                    overflow: c._11.Hidden
                }, this.renderTitles())), this.renderAppendages())
            }, t.prototype.renderOverlay = function() {
                return O(this.props) ? r.createElement(v, {
                    topLeft: r.createElement(S.a, {
                        type: this.props.streamType,
                        hosting: !!this.props.hostedByChannelLogin
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(f, {
                        value: Object(i.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                            viewerCount: this.props.currentViewerCount
                        }, "VideoPreviewCard")
                    }),
                    bottomRight: void 0
                }) : P(this.props) ? r.createElement(v, {
                    topLeft: r.createElement(f, {
                        value: Object(C.b)(this.props.durationInSeconds),
                        icon: c._25.GlyphArrRight,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(f, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: r.createElement(f, {
                        value: Object(i.c)(new Date(this.props.datePublished), "medium")
                    }),
                    progressBarPercent: this.props.watchedProgressPercent
                }) : T(this.props) ? r.createElement(v, {
                    topLeft: r.createElement(f, {
                        value: Object(C.b)(this.props.durationInSeconds),
                        icon: c._25.Clip,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(f, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: r.createElement(f, {
                        value: Object(i.c)(new Date(this.props.datePublished), "medium")
                    })
                }) : void 0
            }, t.prototype.getViewCountLabel = function() {
                return P(this.props) || T(this.props) ? Object(i.d)("{viewerCount, plural, one {# view} other {# views}}", {
                    viewerCount: this.props.viewCount
                }, "VideoPreviewCard") : ""
            }, t.prototype.renderIconicImage = function() {
                return this.props.context === h.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(c._8, {
                    margin: {
                        right: 1
                    }
                }, r.createElement(g, {
                    imageProps: this.props.gameBoxArtImageProps,
                    linkTo: this.props.gameBoxArtImageLinkTo || this.props.gameTitleLinkTo,
                    onClick: this.props.gameTitleOnClick,
                    aspect: c.l.BoxArt
                })) : (this.props.context === h.SingleGameList || this.props.context === h.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(c._8, {
                    margin: {
                        right: 1
                    }
                }, r.createElement(g, {
                    imageProps: this.props.channelImageProps,
                    linkTo: this.props.channelImageLinkTo || this.props.channelLoginLinkTo,
                    onClick: this.props.channelLoginOnClick,
                    aspect: c.l.Aspect1x1
                })) : void 0
            }, t.prototype.renderTitles = function() {
                var e = [{
                    text: this.props.channelLogin,
                    linkTo: this.props.channelLoginLinkTo,
                    onClick: this.props.channelLoginOnClick
                }];
                return T(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? e.push({
                    text: Object(i.d)("Clipped by {userName}", {
                        userName: this.props.clipCreatedByChannelLogin || ""
                    }, "VideoPreviewCard"),
                    linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                    onClick: this.props.clipCreatedByChannelLoginOnClick
                }) : this.props.context !== h.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && e.push({
                    text: this.props.gameTitle,
                    linkTo: this.props.gameTitleLinkTo,
                    onClick: this.props.gameTitleOnClick
                }), r.createElement(E, {
                    title: this.props.title,
                    onClick: this.props.onVideoTitleClick || this.props.onClick,
                    linkTo: this.props.videoTitleLinkTo || this.props.linkTo,
                    subtitles: e
                })
            }, t.prototype.renderAppendages = function() {
                if (this.props.playerMetadata && this.props.playerMetadataGame) return r.createElement(u, {
                    streamMetadata: this.props.playerMetadata,
                    game: this.props.playerMetadataGame
                })
            }, t
        }(r.Component);
        n.d(t, "b", function() {
            return h
        }), n.d(t, "a", function() {
            return x
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

        function p() {
            return !!window.Twitch && !!window.Twitch.Player
        }
        var m = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.checkPlayerDependencyStatus = function() {
                    p() ? (n.setState({
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
                    canInitializePlayer: p(),
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
            return m
        })
    }
});
//# sourceMappingURL=pages.anon-front-e793d5abc21207a9c129733ed9ab20b2.js.map