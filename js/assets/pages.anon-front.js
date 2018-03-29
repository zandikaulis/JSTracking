webpackJsonp([54], {
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
            g = n.n(p),
            h = n("/SNv"),
            f = n.n(h),
            v = n("Vr3l"),
            _ = n.n(v);
        ! function(e) {
            e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
        }(a || (a = {}));
        var k = n("LgcN"),
            y = function(e) {
                try {
                    return decodeURIComponent(e)
                } catch (e) {
                    return null
                }
            },
            b = n("Odds"),
            E = (n("AHWf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1,
                        game: ""
                    }, t.logger = s.o.logger.withCategory("metadata-icon"), t.didUnmount = !1, t.loadData = function() {
                        if (!t.state.isLoading && !t.state.isError && t.props.streamMetadata && !t.state.content) {
                            var e = y(t.props.match.params.encodedCommunityName);
                            if (e) {
                                var n = e.toLowerCase(),
                                    r = t.props.streamMetadata.counterStrikeGlobalOffensive && t.props.streamMetadata.counterStrikeGlobalOffensive.skill,
                                    i = t.props.streamMetadata.hearthstone && t.props.streamMetadata.hearthstone.broadcasterHeroClass,
                                    o = t.props.streamMetadata.leagueOfLegends && t.props.streamMetadata.leagueOfLegends.championID,
                                    s = t.props.streamMetadata.overwatch && t.props.streamMetadata.overwatch.broadcasterCharacter;
                                r && n === a.CounterStrike ? (t.setState({
                                    game: n,
                                    gameSprite: g.a,
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
                                    gameSprite: _.a,
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
                                        return r.trys.push([0, 2, , 3]), [4, Object(k.a)()];
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
                                        return a.trys.push([0, 2, , 3]), [4, Object(k.b)()];
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
                                        return r.trys.push([0, 2, , 3]), [4, Object(k.d)()];
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
            S = Object(o.f)(E);
        var w = Object(c.b)(function(e) {
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
                    }, Object(b._55)(this.props)), i.createElement(b.B, {
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
                    return this.props.streamMetadata ? i.createElement(w, {
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
    "//Ty": function(e, t) {},
    "/7C1": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "a", function() {
            return i
        }), t.e = function(e) {
            return {
                type: a,
                player: e
            }
        }, t.f = function() {
            return {
                type: r
            }
        }, t.d = function() {
            return {
                type: i
            }
        };
        var a = "carouselPlayer.CAROUSEL_REGISTERED",
            r = "carouselPlayer.CAROUSEL_UNREGISTERED",
            i = "carouselPlayer.CAROUSEL_PAUSED"
    },
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
                end: 283
            }
        };
        n.loc.source = {
            body: "query AnonFrontPage_TopChannels($platformType: PlatformType) {\nstreams(first: 6 platformType: $platformType) {\nedges {\nnode {\nid\ngame {\nid\nname\nboxArtURL(width: 285 height: 380)\n}\nviewersCount\ntitle\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
            u = function(e) {
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
            return u
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
            u = n("Odds"),
            m = (n("//Ty"), Object(d.d)("Footer", {
                autoReportInteractive: !0
            })(function() {
                return i.createElement(u._6, {
                    className: "footer",
                    padding: {
                        y: 3
                    }
                }, i.createElement(u._6, {
                    className: "footer__link-container",
                    display: u.P.Flex,
                    alignItems: u.c.Center,
                    justifyContent: u._5.Center,
                    flexWrap: u.S.Wrap,
                    margin: "auto",
                    padding: {
                        y: 3
                    }
                }, i.createElement(u._6, {
                    className: "footer__glitch",
                    display: u.P.Flex,
                    alignItems: u.c.Center,
                    margin: {
                        right: 2
                    }
                }, i.createElement(u._19, {
                    asset: u._20.LogoGlitch,
                    width: 30,
                    height: 30
                })), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/about/",
                    "data-a-target": "frontpage-footer-about-link"
                }, Object(o.d)("About", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://blog.twitch.tv/",
                    "data-a-target": "frontpage-footer-blog-link"
                }, Object(o.d)("Blog", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/products/turbo/ticket?ref=footer",
                    "data-a-target": "frontpage-footer-turbo-link"
                }, Object(o.d)("Turbo", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://music.twitch.tv/",
                    "data-a-target": "frontpage-footer-music-link"
                }, Object(o.d)("Music", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "http://twitchadvertising.tv/",
                    "data-a-target": "frontpage-footer-advertising-link"
                }, Object(o.d)("Advertise", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://dev.twitch.tv/",
                    "data-a-target": "frontpage-footer-developers-link"
                }, Object(o.d)("Developers", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/partners/",
                    "data-a-target": "frontpage-footer-partners-link"
                }, Object(o.d)("Partners", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/platforms/",
                    "data-a-target": "frontpage-footer-mobile-link"
                }, Object(o.d)("Mobile", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/jobs/",
                    "data-a-target": "frontpage-footer-jobs-link"
                }, Object(o.d)("Jobs", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://help.twitch.tv/",
                    "data-a-target": "frontpage-footer-help-link"
                }, Object(o.d)("Help", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/terms-of-service/",
                    "data-a-target": "frontpage-footer-terms-link"
                }, Object(o.d)("Terms", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/privacy-policy/",
                    "data-a-target": "frontpage-footer-privacy-link"
                }, Object(o.d)("Privacy Policy", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/ad-choices/",
                    "data-a-target": "frontpage-footer-choices-link"
                }, Object(o.d)("Ad Choices", "Footer"))), i.createElement(u._6, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/cookie-policy/",
                    "data-a-target": "frontpage-footer-cookie-link"
                }, Object(o.d)("Cookie Policy", "Footer"))), i.createElement(u._6, {
                    margin: {
                        left: 5
                    }
                }, i.createElement(c.a, null, i.createElement("span", {
                    className: "footer__link",
                    "data-a-target": "frontpage-footer-language-link"
                }, Object(o.d)("Language", "Footer")), i.createElement(u.p, {
                    "data-a-target": "frontpage-footer-language-options",
                    size: u.r.Medium,
                    direction: u.q.TopRight
                }, i.createElement(l.a, null))))))
            })),
            p = n("bZTi"),
            g = n("j7/Y"),
            h = n("w9tK"),
            f = n("Us7i"),
            v = n("vH/s"),
            _ = n("/+to"),
            k = n("QG7y"),
            y = n("86JD"),
            b = n("DBTH"),
            E = n("2aoH"),
            S = n("8PKe"),
            w = n("F8kA"),
            C = n("7vx8"),
            O = n("NY9D"),
            N = n("dXGo"),
            F = (n("APTF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.getItems = function() {
                        if (t.props.data.loading || t.props.data.error) {
                            for (var e = [], n = 0; n < 12; n++) e.push(i.createElement(u.K, {
                                cols: 2,
                                key: "placeholder-" + n
                            }, i.createElement(u._6, {
                                key: n,
                                margin: {
                                    bottom: n < 6 ? 4 : 0
                                }
                            }, i.createElement(u._6, {
                                margin: {
                                    bottom: .5
                                }
                            }, i.createElement(u.j, {
                                ratio: u.k.Aspect3x4
                            }, i.createElement(u._12, null))), i.createElement(u.O, null, i.createElement(u._12, {
                                width: 120
                            })), i.createElement(u.O, {
                                fontSize: u.T.Size7
                            }, i.createElement(u._12, {
                                width: 80
                            })))));
                            return e
                        }
                        var a = t.props.data.games.edges.slice(0, t.state.adDisplayed ? 10 : 12).map(function(e, t) {
                                var n = e.node;
                                return n && n.id ? i.createElement(u.K, {
                                    cols: 2,
                                    key: "game-" + n.id
                                }, i.createElement(u._6, {
                                    margin: {
                                        bottom: t < 6 ? 4 : 0
                                    }
                                }, i.createElement(u.t, {
                                    linkTo: Object(O.c)(n.name),
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
                            r = i.createElement(u._6, {
                                display: u.P.Flex,
                                flexGrow: 1,
                                justifyContent: u._5.Center,
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
                    var e = i.createElement(u._6, {
                            display: u.P.Flex,
                            flexDirection: u.R.Row,
                            alignItems: u.c.Baseline,
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(u.O, {
                            fontSize: u.T.Size2,
                            color: u.J.Base
                        }, Object(o.d)("Featured Games", "FeaturedGames")), i.createElement(u._6, {
                            className: "anon-featured-games__subheader",
                            margin: {
                                left: 2
                            }
                        }, i.createElement(u.O, {
                            fontSize: u.T.Size3,
                            color: u.J.Alt2
                        }, Object(o.d)("Games people are watching now", "FeaturedGames")))),
                        t = i.createElement(u._6, {
                            display: u.P.Flex,
                            justifyContent: u._5.End
                        }, i.createElement(u._0, {
                            display: u.P.Flex,
                            alignItems: u.c.Center
                        }, i.createElement(w.a, {
                            to: "/directory",
                            "data-a-target": "see-all-live-games-link"
                        }, i.createElement(u.O, {
                            fontSize: u.T.Size4
                        }, Object(o.d)("See all live games", "FeaturedGames")), i.createElement(u._29, {
                            color: u.J.Link,
                            margin: {
                                left: .5
                            },
                            display: u.P.InlineFlex,
                            alignItems: u.c.Center
                        }, i.createElement(u._19, {
                            asset: u._20.AngleRight,
                            width: 14,
                            height: 14
                        })))));
                    return i.createElement(u._29, {
                        className: "anon-featured-games",
                        background: u.m.Base,
                        padding: {
                            x: 1
                        }
                    }, e, i.createElement(u.W, null, this.getItems()), t)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = r.__decorate([Object(C.a)(N), Object(d.d)("FeaturedGames")], t)
            }(i.Component)),
            T = n("+GT7"),
            x = n("SZoP");
        ! function(e) {
            e[e.All = 1] = "All", e[e.Xbox = 2] = "Xbox", e[e.PS4 = 3] = "PS4"
        }(a || (a = {}));
        var P = n("262o"),
            L = (n("GrwT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getItems = function() {
                        if (t.props.data.loading || t.props.data.error) {
                            for (var e = [], n = 0; n < 6; n++) e.push(i.createElement(u._6, {
                                key: n,
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(u._6, {
                                margin: {
                                    bottom: .5
                                }
                            }, i.createElement(u.j, {
                                ratio: u.k.Aspect16x9
                            }, i.createElement(u._12, null))), i.createElement(u.O, null, i.createElement(u._12, {
                                width: 150
                            })), i.createElement(u.O, {
                                fontSize: u.T.Size7
                            }, i.createElement(u._12, {
                                width: 100
                            }))));
                            return e
                        }
                        return t.props.data.streams.edges.map(function(e, n) {
                            if (!e.node.broadcaster.id) return null;
                            var a = e.node,
                                r = Object(x.a)(a.broadcaster.login, a.broadcaster.displayName),
                                s = {
                                    medium: v.PageviewMedium.Following,
                                    content: v.PageviewContent.Live,
                                    content_index: n
                                },
                                l = a && a.game ? Object(O.c)(a.game.name) : "";
                            return i.createElement(u._6, {
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
                    var e = i.createElement(u._6, {
                            display: u.P.Flex,
                            flexDirection: u.R.Row,
                            alignItems: u.c.Baseline,
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(u.O, {
                            fontSize: u.T.Size2,
                            color: u.J.Base
                        }, this.getTitle()), i.createElement(u._6, {
                            className: "anon-top-channels__subheader",
                            margin: {
                                left: 2
                            }
                        }, i.createElement(u.O, {
                            fontSize: u.T.Size3,
                            color: u.J.Alt2
                        }, this.getSubtitle()))),
                        t = i.createElement(u._6, {
                            className: "anon-top-channels__footer",
                            display: u.P.Flex,
                            justifyContent: u._5.End
                        }, i.createElement(u._0, {
                            display: u.P.Flex,
                            alignItems: u.c.Center
                        }, i.createElement(w.a, {
                            to: this.getLink(),
                            "data-a-target": "see-all-" + this.getDataProp() + "-channels-link"
                        }, i.createElement(u.O, {
                            fontSize: u.T.Size4
                        }, this.getFooter()), i.createElement(u._29, {
                            color: u.J.Link,
                            margin: {
                                left: .5
                            },
                            display: u.P.InlineFlex,
                            alignItems: u.c.Center
                        }, i.createElement(u._19, {
                            asset: u._20.AngleRight,
                            width: 14,
                            height: 14
                        })))));
                    return i.createElement("div", null, e, i.createElement(u._49, {
                        gutterSize: u._51.Small,
                        childWidth: u._50.Large,
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
                }, t = r.__decorate([Object(C.a)(P, {
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
            I = (n("9zTP"), p.a.wrap(function() {
                return n.e(77).then(n.bind(null, "yEZg"))
            }, "FeaturedGenres")),
            R = p.a.wrap(function() {
                return n.e(76).then(n.bind(null, "2hMh"))
            }, "TopCreative"),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        takeoverRendered: !1,
                        numSlotsAdded: 0
                    }, t.onTakeoverRendered = function() {
                        t.setState({
                            takeoverRendered: !0
                        })
                    }, t.renderFeaturedGamesOrGenres = function() {
                        if (void 0 !== t.state.categoriesExperimentAssignment) {
                            if (t.state.categoriesExperimentAssignment) {
                                var e = t.state.categoriesExperimentAssignment === b.a.Streams;
                                return i.createElement(I, {
                                    trackingMedium: v.PageviewMedium.AnonFrontPage,
                                    withStreams: e
                                })
                            }
                            return i.createElement(F, null)
                        }
                    }, t.renderTopCreative = function() {
                        if (t.state.categoriesExperimentAssignment) {
                            var e = t.state.categoriesExperimentAssignment === b.a.Streams;
                            return i.createElement(u._29, {
                                className: "anon-front__content-section",
                                background: u.m.Base,
                                margin: {
                                    x: "auto"
                                },
                                padding: {
                                    x: 1,
                                    top: 5,
                                    bottom: 3
                                }
                            }, i.createElement(R, {
                                trackingMedium: v.PageviewMedium.AnonFrontPage,
                                withStreams: e
                            }))
                        }
                    }, t.renderSocialBar = function() {
                        return i.createElement(u._29, {
                            className: "anon-front__social-container",
                            alignItems: u.c.Center,
                            display: u.P.Flex,
                            flexDirection: u.R.Column,
                            justifyContent: u._5.Center,
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 3,
                                x: 2
                            }
                        }, i.createElement(u.O, {
                            fontSize: u.T.Size3
                        }, Object(o.d)("Follow the latest Twitch news", "AnonFrontPage")), i.createElement(u._6, {
                            margin: {
                                top: 1
                            },
                            display: u.P.Flex,
                            flexDirection: u.R.Row
                        }, i.createElement(u.u, {
                            linkTo: "https://www.facebook.com/twitch",
                            targetBlank: !0,
                            size: u.y.Large,
                            "data-a-target": "frontpage-facebook-link"
                        }, Object(o.d)("Facebook", "AnonFrontPage")), i.createElement(u._6, {
                            margin: {
                                x: .5
                            }
                        }, i.createElement(u.u, {
                            linkTo: "https://www.twitter.com/twitch",
                            targetBlank: !0,
                            size: u.y.Large,
                            "data-a-target": "frontpage-twitter-link"
                        }, Object(o.d)("Twitter", "AnonFrontPage"))), i.createElement(u.u, {
                            linkTo: "https://blog.twitch.tv/",
                            targetBlank: !0,
                            size: u.y.Large,
                            "data-a-target": "frontpage-blog-link"
                        }, Object(o.d)("Official Blog", "AnonFrontPage"))))
                    }, t.renderPlatformTopChannels = function() {
                        return i.createElement(u._6, null, i.createElement(u._29, {
                            background: u.m.Base,
                            padding: {
                                x: 2,
                                y: 3
                            },
                            margin: {
                                x: "auto"
                            },
                            className: "anon-front__content-section"
                        }, i.createElement(L, {
                            type: a.PS4,
                            key: "channels.ps4"
                        })), i.createElement(u._29, {
                            background: u.m.Base,
                            padding: {
                                x: 2,
                                y: 3
                            },
                            margin: {
                                x: "auto"
                            },
                            className: "anon-front__content-section"
                        }, i.createElement(L, {
                            type: a.Xbox,
                            key: "channels.xbox"
                        })))
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(k.b.anonFront).length && f.a.display(k.b.anonFront.takeover), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    k.g.addListener(k.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.o.experiments.getAssignment(b.e)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        categoriesExperimentAssignment: Object(b.k)(e) ? e : null
                                    }), this.props.latencyTracking.reportInteractive(), o.o.setPageTitle(), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = void 0 !== this.state.categoriesExperimentAssignment && !this.state.categoriesExperimentAssignment;
                    return i.createElement(u._6, {
                        fullHeight: !0
                    }, i.createElement(E.a, null, i.createElement(S.a, null)), i.createElement(u._29, {
                        className: "anon-front",
                        background: u.m.Base,
                        position: u._13.Relative,
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
                    }), i.createElement(u._6, {
                        className: "anon-front__featured-section",
                        display: u.P.Flex,
                        flexWrap: u.S.Wrap,
                        justifyContent: u._5.Center
                    }, i.createElement(u._6, {
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
                    })), i.createElement(u._6, {
                        className: "anon-front__content-section",
                        padding: this.state.takeoverRendered ? 2 : 0
                    }, i.createElement(y.b, {
                        renderContext: y.a.AnonFront
                    })), i.createElement(u._6, {
                        className: "anon-front__sizzle-strip",
                        display: u.P.Flex,
                        justifyContent: u._5.Center
                    }, i.createElement(_.a, {
                        adSize: k.c.anonFront.sizzle,
                        adUnit: k.d.sizzle,
                        "data-a-target": "anon-front-sizzle-strip-ad-slot",
                        slotID: k.b.anonFront.sizzle,
                        targeting: {
                            pagetype: k.a.frontpage
                        },
                        autoEnable: !1
                    }))), i.createElement(s.a, null, i.createElement(u._29, {
                        background: u.m.Base,
                        margin: {
                            x: "auto"
                        },
                        padding: {
                            x: 1,
                            top: 5,
                            bottom: 3
                        },
                        className: "anon-front__content-section"
                    }, this.renderFeaturedGamesOrGenres())), this.renderTopCreative(), e && this.renderSocialBar(), i.createElement(u._29, {
                        background: u.m.Base,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 3
                        },
                        margin: {
                            x: "auto"
                        },
                        className: "anon-front__content-section"
                    }, i.createElement(L, {
                        type: a.All,
                        key: "channels.all"
                    })), e && this.renderPlatformTopChannels(), i.createElement(u._6, {
                        className: "anon-front__bottom",
                        display: u.P.Flex,
                        justifyContent: u._5.Center
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
                    destination: h.a.Index
                }), Object(g.a)({
                    location: v.PageviewLocation.FrontPage
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
    "9zTP": function(e, t) {},
    AHWf: function(e, t) {},
    APTF: function(e, t) {},
    CybZ: function(e, t) {},
    GrwT: function(e, t) {},
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
            g = ((i = {})[d.a.Premiere] = u._21.Live, i[d.a.Rerun] = u._21.Inherit, i[d.a.WatchParty] = u._21.Inherit, i),
            h = function(e) {
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
                        type: g[this.props.type],
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
        });
        var a = n("TToO"),
            r = this,
            i = function() {
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(89).then(n.bind(null, "tk3B"))];
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
                                return [4, n.e(88).then(n.bind(null, "e/M0"))];
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
                                return [4, n.e(87).then(n.bind(null, "Dan5"))];
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
                                return [4, n.e(86).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            }
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
    QG7y: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "d", function() {
            return s
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "f", function() {
            return c
        }), n.d(t, "e", function() {
            return d
        }), n.d(t, "g", function() {
            return u
        }), t.i = function(e) {
            u.emit(c, e)
        }, t.h = function(e) {
            u.emit(d, e)
        };
        var a = n("BzvE"),
            r = (n.n(a), n("6sO2")),
            i = {
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
                directory: "/" + r.a.dfpNetworkCode + "/twitch/directory",
                channel: "/" + r.a.dfpNetworkCode + "/twitch/channels",
                frontpage: "/" + r.a.dfpNetworkCode + "/twitch/homepage",
                sizzle: "/" + r.a.dfpNetworkCode + "/twitch/sizzle_strip"
            },
            l = {
                games: "games",
                channel: "channel",
                frontpage: "homepage"
            },
            c = "ads.slot-render-end",
            d = "ads.slot-ready",
            u = new a.EventEmitter
    },
    TUg1: function(e, t) {},
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-062a1df5ff2aaa76eb8e129940ef964a.png"
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
            u = (n.n(d), n("Xg86")),
            m = n("CSlQ"),
            p = n("Odds");
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
                    return r.createElement(p._29, {
                        className: "featured-content",
                        background: p.m.Base,
                        elevation: 1
                    }, r.createElement(p._6, {
                        padding: 1
                    }, function(e) {
                        return e ? r.createElement(p.O, {
                            fontSize: p.T.Size5,
                            color: p.J.Alt2
                        }, r.createElement(p._12, {
                            width: 100
                        })) : r.createElement(p.O, {
                            fontSize: p.T.Size5,
                            color: p.J.Alt2
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
                    t = Object(u.a)(e),
                    n = this.props.data.featuredVideos || [],
                    a = Object(u.b)(n);
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
            u = n("CSlQ"),
            m = n("Odds"),
            p = n("uckt");
        n.n(p);
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
                    return i.createElement(m._29, {
                        className: "featured-broadcasters",
                        background: m.m.Base,
                        elevation: 1
                    }, i.createElement(m._6, {
                        padding: 1
                    }, i.createElement(m.O, {
                        fontSize: m.T.Size5,
                        color: m.J.Alt2
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
            }, t = r.__decorate([Object(s.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            language: o.o.intl.getLanguageCode(),
                            first: e.streamCount || 8
                        }
                    }
                }
            }), Object(u.d)("FeaturedBroadcasters")], t)
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
    g91j: function(e, t, n) {
        "use strict";
        var a, r = n("TToO"),
            i = n("6sO2"),
            o = n("/7C1");
        i.o.store.registerReducer("carouselPlayer", function(e, t) {
            switch (void 0 === e && (e = {
                isPlayerInitialized: !1
            }), t.type) {
                case o.b:
                    return a = t.player, r.__assign({}, e, {
                        isPlayerInitialized: !0
                    });
                case o.c:
                    return a = null, r.__assign({}, e, {
                        isPlayerInitialized: !1
                    });
                case o.a:
                    return e.isPlayerInitialized && a && a.pause(), e;
                default:
                    return e
            }
        });
        var s = n("RH2O"),
            l = n("2KeS"),
            c = n("HW6M"),
            d = n("GiK3"),
            u = n("NXs7"),
            m = n("VAT8"),
            p = n("WKwZ"),
            g = n("CSlQ"),
            h = n("Odds"),
            f = (n("TUg1"), "carousel-card-live"),
            v = "carousel-card-vod",
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderIndicator = function() {
                        return t.props.item.content.type === p.b.Stream ? d.createElement(h.F, {
                            status: h.H.Live,
                            size: h.G.Small,
                            "data-test-selector": f
                        }) : d.createElement(h._19, {
                            asset: h._20.GlyphViews,
                            "data-test-selector": v
                        })
                    }, t.itemClick = function() {
                        t.props.itemClick(t.props.item)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = c({
                        "carousel-nav__item": !0,
                        "carousel-nav__item--active": this.props.itemActive
                    });
                    return d.createElement(h._6, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: h._13.Relative
                    }, d.createElement(h._46, {
                        label: (this.props.item.isSponsored ? Object(i.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: h._48.Top,
                        display: h.P.Block
                    }, d.createElement(h._4, r.__assign({
                        onClick: this.itemClick
                    }, Object(h._55)(this.props)), d.createElement(h.j, {
                        ratio: h.k.Aspect16x9
                    }, d.createElement(h._6, {
                        className: "carousel-nav__meta",
                        alignItems: h.c.Center,
                        attachBottom: !0,
                        margin: {
                            left: .5
                        },
                        zIndex: h._54.Above
                    }, this.renderIndicator(), d.createElement(h._6, {
                        display: h.P.InlineFlex,
                        margin: {
                            left: .5
                        }
                    }, d.createElement(h.O, {
                        color: h.J.Overlay,
                        type: h._43.Span
                    }, Object(i.e)(this.props.item.content.viewersCount)))), d.createElement(h._6, {
                        className: "carousel-nav__img-container"
                    }, d.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? d.createElement(h._6, {
                        position: h._13.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, d.createElement(h._19, {
                        asset: h._20.Featured,
                        type: h._21.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = r.__decorate([Object(g.d)("CarouselCard")], t)
            }(d.Component),
            k = n("lfvs"),
            y = n("F8kA"),
            b = n("SZoP"),
            E = n("fc0G");

        function S(e) {
            switch (e.type) {
                case p.b.Stream:
                    return d.createElement(E.c, {
                        channelLogin: e.id,
                        vodID: "",
                        disableTheatreButton: !0,
                        playerTypeOverride: E.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy
                    });
                case p.b.Vod:
                    return d.createElement(E.c, {
                        channelLogin: "",
                        vodID: e.id,
                        disableTheatreButton: !0,
                        playerTypeOverride: E.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy,
                        onVideoTimeChange: e.onVideoTimeChange
                    });
                default:
                    return null
            }
        }
        n("i6UE");
        var w = {
                content: "carousel",
                medium: "twitch_home"
            },
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = c("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(i.d)("playing {game}", {
                                game: d.createElement(y.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: w
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
                        return d.createElement(h._29, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: h.P.Flex,
                            flexDirection: h.R.Row,
                            color: h.J.Alt
                        }, d.createElement(h._6, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, d.createElement(h._6, {
                            className: "horizontal-carousel-player__video",
                            position: h._13.Relative,
                            overflow: h._9.Hidden
                        }, S(a))), d.createElement(h._6, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, d.createElement(h._6, {
                            display: h.P.Flex,
                            flexWrap: h.S.NoWrap,
                            textAlign: h._39.Left,
                            alignItems: h.c.Center,
                            padding: {
                                bottom: .5
                            }
                        }, d.createElement(h._6, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, d.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, d.createElement(y.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: w
                            },
                            "data-a-target": "carousel-profile-image"
                        }, d.createElement(h.l, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(i.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), d.createElement(h._6, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, d.createElement(h.O, {
                            fontSize: h.T.Size4,
                            color: h.J.Base,
                            lineHeight: h._7.Heading,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(b.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), d.createElement(h.O, {
                            fontSize: h.T.Size6,
                            color: h.J.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, d.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), d.createElement(h._6, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, d.createElement(y.a, {
                            to: t.getLinkForTitle()
                        }, d.createElement(h.O, {
                            type: h._43.Span,
                            "data-a-target": p.a,
                            fontSize: h.T.Size3,
                            lineHeight: h._7.Heading
                        }, t.props.item.title)))), d.createElement(k, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === p.b.Stream) return {
                            pathname: "/" + t.props.item.broadcaster.login,
                            state: w
                        };
                        var e = t.state && t.state.videoOffset || 0;
                        return {
                            pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                            state: w
                        }
                    }, t.getPlaceholderRender = function() {
                        var e = c("horizontal-carousel-player__details", {
                            "horizontal-carousel-player__details--overlay": t.props.darkTheme
                        });
                        return d.createElement(h._6, {
                            display: h.P.Flex,
                            flexWrap: h.S.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(h._6, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, d.createElement(h.j, {
                            ratio: h.k.Aspect16x9
                        }, d.createElement(h._12, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), d.createElement(h._6, {
                            className: c(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, d.createElement(h._6, {
                            display: h.P.Flex,
                            flexWrap: h.S.NoWrap,
                            textAlign: h._39.Left,
                            alignItems: h.c.Start
                        }, d.createElement(h._6, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, d.createElement(h._12, {
                            width: 40,
                            height: 40
                        })), d.createElement(h._6, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, d.createElement(h.O, null, d.createElement(h._12, {
                            width: 70
                        })), d.createElement(h.O, null, d.createElement(h._12, {
                            width: 70
                        })))), d.createElement(h._6, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(h.O, null, d.createElement(h._12, {
                            lineCount: 1
                        })), d.createElement(h.O, null, d.createElement(h._12, {
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
                return r.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                    e.item !== this.props.item && this.props.onPromotionCardView(e.item)
                }, t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(d.Component),
            O = n("hdYS"),
            N = (n("0v28"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = c("vertical-carousel-player__details", {
                                "vertical-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(i.d)("{login} playing {game}", {
                                login: d.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "display_name")
                                }, d.createElement(y.a, {
                                    to: {
                                        pathname: "/" + t.props.item.broadcaster.login,
                                        state: w
                                    },
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(b.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: d.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, d.createElement(y.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: w
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
                        return d.createElement(h._29, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: h.J.Alt
                        }, d.createElement(h._6, {
                            className: "vertical-carousel-player__video",
                            position: h._13.Relative,
                            overflow: h._9.Hidden
                        }, S(a)), d.createElement(h._6, {
                            className: c(e),
                            display: h.P.Flex,
                            flexWrap: h.S.NoWrap,
                            textAlign: h._39.Left,
                            alignItems: h.c.Center,
                            padding: {
                                y: 1
                            }
                        }, d.createElement(h._6, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, d.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, d.createElement(y.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, d.createElement(h.l, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(i.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), d.createElement(h._6, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, d.createElement(h.O, {
                            "data-a-target": p.a,
                            fontSize: h.T.Size5,
                            color: h.J.Base,
                            bold: !0
                        }, t.props.item.title), d.createElement(h.O, {
                            fontSize: h.T.Size6,
                            color: h.J.Base
                        }, n)), d.createElement(h._6, {
                            flexShrink: 0
                        }, t.renderFollowButton())), d.createElement(k, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return d.createElement(h._6, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, d.createElement(h.j, {
                            ratio: h.k.Aspect16x9
                        }, d.createElement(h._12, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), d.createElement(h._6, {
                            display: h.P.Flex,
                            flexWrap: h.S.NoWrap,
                            textAlign: h._39.Left,
                            alignItems: h.c.Center,
                            padding: {
                                y: 1
                            }
                        }, d.createElement(h._6, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, d.createElement(h._12, {
                            width: 40,
                            height: 40
                        })), d.createElement(h._6, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, d.createElement(h.O, null, d.createElement(h._12, {
                            width: 150
                        })), d.createElement(h.O, null, d.createElement(h._12, {
                            width: 100
                        }))), d.createElement(h._6, {
                            flexShrink: 0
                        }, d.createElement(h._12, {
                            width: 70,
                            height: 30
                        }))), d.createElement(h.O, null, d.createElement(h._12, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t.prototype.renderFollowButton = function() {
                    return this.props.firstPageLoaded ? d.createElement(O.a, {
                        "data-a-target": "carousel-follow-button",
                        channelLogin: this.props.item.broadcaster.login,
                        followUIType: O.b.IconAndText,
                        unfollowUIType: O.b.IconOnly,
                        showLoadingPlaceholder: !0
                    }) : d.createElement(h._12, {
                        width: 70,
                        height: 30
                    })
                }, t
            }(d.Component));
        var F = Object(s.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(N),
            T = n("vH/s");

        function x(e) {
            i.n.track(T.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        }
        n("0OPT");
        var P = 6,
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > P) {
                            var e = t.state.startingIndex > 0;
                            return d.createElement(h._6, {
                                display: h.P.Flex,
                                alignItems: h.c.Stretch
                            }, d.createElement(h.v, {
                                ariaLabel: Object(i.d)("Page Left", "CarouselPlayerComponent"),
                                icon: h._20.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": p.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > P) {
                            var e = t.props.items.length > t.state.startingIndex + P;
                            return d.createElement(h._6, {
                                display: h.P.Flex,
                                alignItems: h.c.Stretch
                            }, d.createElement(h.v, {
                                ariaLabel: Object(i.d)("Page Right", "CarouselPlayerComponent"),
                                icon: h._20.AngleRight,
                                onClick: t.handlePageRight,
                                "data-test-selector": p.e,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.getCardsRender = function() {
                        var e, n;
                        if (t.state.activeItem) return t.displayEventFired || (e = t.props.items, n = {}, e.forEach(function(e, t) {
                            n["carousel_slot_" + t + "_channel"] = e.broadcaster.login, n["carousel_slot_" + t + "_priority"] = e.priorityLevel, n["carousel_slot_" + t + "_game"] = e.content.gameName, n["carousel_slot_" + t + "_ccu"] = e.content.viewersCount, n["carousel_slot_" + t + "_type"] = e.content.subType
                        }), i.n.track(T.SpadeEventType.FrontPageCarouselDisplay, n), t.displayEventFired = !0), t.props.items.slice(t.state.startingIndex, t.state.startingIndex + P).map(function(e, n) {
                            return d.createElement(_, {
                                key: e.content.id,
                                item: e,
                                itemClick: t.selectContent,
                                itemActive: e.content.id === t.state.activeItem.content.id,
                                "data-a-target": "carousel-card-" + n
                            })
                        });
                        for (var a = [], r = 0; r < P; r++) a.push(d.createElement(h._6, {
                            key: r,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, d.createElement(h.j, {
                            ratio: h.k.Aspect16x9
                        }, d.createElement(h._12, null)), d.createElement(h._6, {
                            margin: {
                                top: .5
                            }
                        }, d.createElement(h._12, {
                            height: 4
                        }))));
                        return a
                    }, t.getLayoutRender = function() {
                        var e = {
                            darkTheme: t.props.darkTheme || !1,
                            item: t.state.activeItem,
                            onPromotionCardClick: t.trackPromotionClick,
                            onPromotionCardView: t.trackPromotionView,
                            onPlayerInit: t.registerCarousel,
                            onPlayerDestroy: t.unregisterCarousel
                        };
                        switch (t.props.layout) {
                            case p.c.Vertical:
                                return d.createElement(F, r.__assign({}, e));
                            default:
                                return d.createElement(C, r.__assign({}, e))
                        }
                    }, t.registerCarousel = function(e) {
                        t.props.registerCarousel && t.props.registerCarousel(e)
                    }, t.unregisterCarousel = function() {
                        t.props.unregisterCarousel && t.props.unregisterCarousel()
                    }, t.selectContent = function(e) {
                        t.setState({
                            activeItem: e
                        });
                        var n, a = {
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        };
                        n = a, i.n.track(T.SpadeEventType.FrontPageCarouselClick, n)
                    }, t.trackPromotionClick = function(e, n) {
                        var a = e.broadcaster,
                            o = e.content,
                            s = e.isScheduled;
                        ! function(e, t) {
                            var n = r.__assign({
                                clicked_element: t
                            }, e);
                            i.n.track(T.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
                        }({
                            broadcast_type: o.subType,
                            carousel_index: t.props.items.indexOf(t.state.activeItem),
                            channel: a.displayName,
                            game: o.gameName,
                            promotion_was_scheduled: s,
                            views: o.viewersCount
                        }, n)
                    }, t.trackPromotionView = function(e) {
                        var n, a = {
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        };
                        n = a, i.n.track(T.SpadeEventType.FrontPageCarouselPromotionCardView, n)
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - P;
                        e !== t.state.startingIndex && (x("next"), t.setState({
                            startingIndex: e
                        }))
                    }, t.handlePageLeft = function() {
                        t.state.startingIndex > 0 && (x("prev"), t.setState({
                            startingIndex: 0
                        }))
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUpdate = function(e) {
                    !this.state.activeItem && e.items.length > 0 && this.setState({
                        activeItem: e.items[0]
                    })
                }, t.prototype.render = function() {
                    var e;
                    return this.props.darkTheme && (e = Object(m.c)(u.a.Dark)), d.createElement(h._6, {
                        className: c("carousel-player", e)
                    }, this.getLayoutRender(), d.createElement(h._29, {
                        background: h.m.Alt
                    }, d.createElement(h._6, {
                        display: h.P.Flex,
                        flexWrap: h.S.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = r.__decorate([Object(g.d)("CarouselPlayer")], t)
            }(d.Component);
        var I = Object(s.b)(null, function(e) {
            return Object(l.b)({
                registerCarousel: o.e,
                unregisterCarousel: o.f
            }, e)
        })(L);
        n.d(t, "a", function() {
            return I
        })
    },
    i6UE: function(e, t) {},
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
    }
});
//# sourceMappingURL=pages.anon-front-c261b95c9fbc5ee557e30c93815071b8.js.map