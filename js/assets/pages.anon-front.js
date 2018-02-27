webpackJsonp([51], {
    "+GT7": function(e, t, n) {
        "use strict";
        var r, a = n("TToO"),
            i = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2"),
            l = n("IOwa"),
            c = n("RH2O"),
            d = n("2KeS"),
            u = n("PPNL"),
            m = n("HW6M"),
            p = n("YUUt"),
            f = n.n(p),
            g = n("/SNv"),
            h = n.n(g),
            v = n("Vr3l"),
            _ = n.n(v);
        ! function(e) {
            e[e.CounterStrike = 0] = "CounterStrike", e[e.Hearthstone = 1] = "Hearthstone", e[e.LeagueOfLegends = 2] = "LeagueOfLegends", e[e.Overwatch = 3] = "Overwatch"
        }(r || (r = {}));
        var k = n("LgcN"),
            y = n("Odds"),
            b = (n("AHWf"), function(e) {
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
                                i = t.props.streamMetadata.overwatch && t.props.streamMetadata.overwatch.broadcasterCharacter;
                            e ? (t.setState({
                                game: r.CounterStrike,
                                gameSprite: f.a,
                                item: String(e),
                                isLoading: !0
                            }), t.getCounterStrikeData(e)) : n ? (t.setState({
                                game: r.Hearthstone,
                                gameSprite: h.a,
                                item: n,
                                isLoading: !0
                            }), t.getHearthstoneData()) : a ? (t.setState({
                                game: r.LeagueOfLegends,
                                item: String(a)
                            }), t.getLeagueData()) : i && (t.setState({
                                game: r.Overwatch,
                                gameSprite: _.a,
                                item: i,
                                isLoading: !0
                            }), t.getOverwatchData())
                        }
                    }, t.renderIcon = function(e, n, a, o, s, l) {
                        if (!a) return null;
                        var c = m("metadata-icon", {
                                "metadata-icon--csgo-skill": t.state.game === r.CounterStrike
                            }),
                            d = 30;
                        return t.state.game === r.CounterStrike && (d = 50), i.createElement(y._2, {
                            display: y.N.Flex,
                            flexDirection: y.P.Column,
                            alignItems: y.c.Center,
                            justifyContent: y._1.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(y._43, {
                            direction: y._45.Left,
                            label: e
                        }, i.createElement(y._2, {
                            className: c
                        }, i.createElement("div", {
                            style: {
                                backgroundImage: "url(" + n + ")",
                                backgroundPositionX: s ? -1 * s : 0,
                                backgroundPositionY: l ? -1 * l : 0,
                                width: a ? a + "px" : "3rem",
                                height: a ? o + "px" : "3rem",
                                transform: "scale(" + (a > 0 ? d / a : 1) + ")",
                                transformOrigin: "0 0"
                            }
                        }))))
                    }, t.getCounterStrikeData = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n, r;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, Object(k.a)()];
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
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, Object(k.b)()];
                                    case 1:
                                        return e = r.sent(), this.didUnmount ? [2] : (t = {}, e[0].Class.forEach(function(e) {
                                            t[e.class] = e
                                        }), this.setState({
                                            content: t,
                                            isLoading: !1
                                        }), [3, 3]);
                                    case 2:
                                        return n = r.sent(), this.logger.error(n, "Failed to load Hearthstone class data"), this.setState({
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
                            var e, t, n, r, i, o, s, l, c, d, u, m, p;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, Object(k.d)()];
                                    case 1:
                                        if (e = a.sent(), this.didUnmount) return [2];
                                        for (t = !1, n = void 0, r = 0, i = e; r < i.length && (n = i[r], !t); r++)
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
                    if (this.state.game === r.LeagueOfLegends) {
                        if (!this.props.leagueOfLegends.championsMap) return null;
                        var e = this.props.leagueOfLegends.championsMap[this.state.item],
                            t = "https://ddragon.leagueoflegends.com/cdn/" + this.props.leagueOfLegends.version + "/img/sprite/" + e.image.sprite;
                        return this.renderIcon(e.name, t, e.image.w, e.image.h, e.image.x, e.image.y)
                    }
                    var n = this.state.content && this.state.content[this.state.item];
                    return n ? this.renderIcon(n.display_name, this.state.gameSprite || "", n.image_width, n.image_height, n.sprite_x_offset, n.sprite_y_offset) : null
                }, t
            }(i.Component));
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
            })(b),
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
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = i.createElement(y._2, {
                        display: y.N.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, i.createElement(y._6, {
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
                    return i.createElement("div", a.__assign({
                        className: "live-channel-card"
                    }, Object(y._53)(this.props)), i.createElement(y.A, {
                        key: this.props.title
                    }, i.createElement(y._2, {
                        fullWidth: !0
                    }, i.createElement(y.j, {
                        overflow: !0
                    }, i.createElement("div", null, i.createElement(o.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, this.props.children ? this.props.children : i.createElement(y.C, {
                        alt: this.props.imageAlt,
                        src: this.props.imageSrc,
                        aspect: y.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), i.createElement(y.B, null, i.createElement(y._2, {
                        display: y.N.Flex,
                        flexWrap: y.Q.NoWrap
                    }, i.createElement(y._2, {
                        flexGrow: 1,
                        ellipsis: !0
                    }, i.createElement(o.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, i.createElement(y.W, {
                        margin: {
                            top: .5
                        }
                    }, i.createElement(y._35, {
                        type: y._40.H3,
                        fontSize: y.R.Size5,
                        lineHeight: y._3.Body,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), i.createElement(y._2, {
                        className: "live-channel-card__meta",
                        display: y.N.Flex,
                        flexWrap: y.Q.NoWrap
                    }, e, i.createElement(y._35, {
                        type: y._40.Span,
                        ellipsis: !0
                    }, t))), i.createElement(y._2, {
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
                    }, i.createElement(y._25, {
                        className: "live-channel-card__boxart",
                        position: y._9.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, i.createElement(y._43, {
                        display: y.N.Block,
                        direction: y._45.Bottom,
                        label: t
                    }, i.createElement(y.C, {
                        src: n,
                        alt: t,
                        aspect: y.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? i.createElement(y._2, {
                        position: y._9.Absolute,
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
            S = N;
        n.d(t, !1, function() {
            return N
        }), n.d(t, "a", function() {
            return S
        })
    },
    "/+to": function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            a = n("TToO"),
            i = n("GiK3"),
            o = n("6sO2"),
            s = n("Us7i"),
            l = n("QG7y"),
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
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
                            var r;
                            if (n.props.slotID === l.b.directory.banner) return void((r = n.slotRef.querySelector(c)) && 1 !== r.clientWidth && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === l.b.directory.rectangle) return void((r = n.slotRef.querySelector(d)) && 1 !== r.clientWidth && n.setState({
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
                    return this.state.shouldDisplay || (e.display = "none"), i.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(i.Component);
        var m = Object(r.b)(function(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        })(u);
        n.d(t, "a", function() {
            return m
        })
    },
    "//Ty": function(e, t) {},
    "/7C1": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "a", function() {
            return i
        }), t.e = function(e) {
            return {
                type: r,
                player: e
            }
        }, t.f = function() {
            return {
                type: a
            }
        }, t.d = function() {
            return {
                type: i
            }
        };
        var r = "carouselPlayer.CAROUSEL_REGISTERED",
            a = "carouselPlayer.CAROUSEL_UNREGISTERED",
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
    "2Nqs": function(e, t) {},
    "65au": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "7L7x": function(e, t) {},
    "86JD": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("GiK3"),
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
                            }, "FeaturedBroadcasters")(r.__assign({}, e))
                        },
                        mixed: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "Wjt1"))
                            }, "FeaturedContent")(r.__assign({}, e, {
                                shouldMixContent: !0
                            }))
                        },
                        last: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "Wjt1"))
                            }, "FeaturedContent")(r.__assign({}, e, {
                                shouldMixContent: !1
                            }))
                        }
                    },
                    loader: function() {
                        return Object(c.c)(e.renderContext)
                    }
                };
                return "en" === i.n.intl.getLanguageCode() ? a.createElement(o.a, r.__assign({}, t)) : a.createElement(l.FeaturedBroadcasters, {
                    renderContext: e.renderContext
                })
            };
        n.d(t, "a", function() {
            return d.FeaturedBroadcastersRenderContext
        }), n.d(t, "b", function() {
            return u
        })
    },
    "8PKe": function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            a = n("TToO"),
            i = n("OAwv"),
            o = n("GiK3"),
            s = n("6sO2"),
            l = n("+Znq"),
            c = n("7vx8"),
            d = n("S1vB"),
            u = n("ZVME"),
            m = n("CSlQ"),
            p = n("Odds"),
            f = (n("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._2, null, o.createElement(p._25, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: p.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o.createElement(p._35, {
                        bold: !0,
                        type: p._40.H6
                    }, Object(s.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return o.createElement(p._25, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: p.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o.createElement(p._2, {
                        fullWidth: !0,
                        display: p.N.Flex,
                        alignItems: p.c.Center
                    }, o.createElement(p._2, {
                        flexGrow: 1
                    }, o.createElement(p._35, {
                        bold: !0,
                        type: p._40.H6
                    }, Object(s.d)("New Prime Loot", "PrimeOfferHeader"))), o.createElement(p._2, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: p._36.Center
                    }, o.createElement(p._25, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: p.m.Base,
                        color: p.I.Base,
                        display: p.N.Flex,
                        alignItems: p.c.Center,
                        justifyContent: p._1.Center
                    }, o.createElement(p._35, null, e.toString())))))
                }, t = a.__decorate([Object(m.d)("PrimeOfferHeader")], t)
            }(o.Component)),
            g = n("zCIC"),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(s.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: o.createElement(p._35, {
                            italic: !0,
                            type: p._40.Span
                        }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                        smite: o.createElement(p._35, {
                            italic: !0,
                            type: p._40.Span
                        }, Object(s.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return o.createElement(p._2, {
                        className: "prime-empty",
                        margin: 2
                    }, o.createElement(p._2, {
                        textAlign: p._36.Center,
                        margin: 2
                    }, o.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), o.createElement(p._35, {
                        type: p._40.P,
                        bold: !0
                    }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), o.createElement("div", null, e))
                }, t = a.__decorate([Object(m.d)("PrimeEmpty")], t)
            }(o.Component),
            v = n("lfvs"),
            _ = n("oIkB"),
            k = n("R0Kh"),
            y = (n("w/8h"), n("sq7i")),
            b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._2, {
                        className: "prime-claim-button"
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        n = o.createElement(p.u, {
                            fullWidth: !0,
                            state: this.props.claiming ? p.y.Loading : p.y.Default,
                            disabled: this.props.claiming,
                            onClick: this.props.claimCallback,
                            "data-a-target": "prime-claim-button"
                        }, t);
                    return e.offerType === k.a.EXTERNAL_OFFER ? o.createElement(p.u, {
                        fullWidth: !0,
                        linkTo: e.offerLinkUri,
                        targetBlank: !0
                    }, t) : o.createElement(p._2, {
                        position: p._9.Relative
                    }, n)
                }, t.prototype.getButtonText = function() {
                    return this.props.offerType === k.a.CLAIM_CODE ? Object(s.d)("Get Code", "PrimeClaimButton") : this.props.offerType === k.a.EXTERNAL_OFFER ? Object(s.d)("Learn More", "PrimeClaimButton") : Object(s.d)("Claim Offer", "PrimeClaimButton")
                }, t = a.__decorate([Object(c.a)(y), Object(m.d)("PrimeClaimButton")], t)
            }(o.Component),
            E = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleShowDescription = function() {
                        n.setState({
                            showDescription: !n.state.showDescription
                        })
                    }, n.state = {
                        showDescription: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._2, {
                        className: "prime-claim-description",
                        margin: {
                            top: 1
                        }
                    }, o.createElement(p.u, {
                        fullWidth: !0,
                        type: p.z.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText()), this.getDescriptionBlock())
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimDescription") : Object(s.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function() {
                    var e = null;
                    return this.state.showDescription && (e = o.createElement(p._25, {
                        className: "prime-claim-description__body",
                        background: p.m.Alt2,
                        border: !0
                    }, o.createElement(p._2, {
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, o.createElement(v, {
                        source: this.props.description || ""
                    })))), e
                }, t = a.__decorate([Object(m.d)("PrimeClaimDescription")], t)
            }(o.Component),
            N = n("Hs3O"),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.getLink = function() {
                    return this.props.externalUri ? this.props.externalUri : Object(N.d)(N.c, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return o.createElement(p._2, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(p.u, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0
                    }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton")))
                }, t = a.__decorate([Object(m.d)("PrimeUpsellButton")], t)
            }(o.Component),
            O = n("e2wA"),
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._2, {
                        className: "prime-claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.hasPrime ? o.createElement(b, {
                        offerType: this.props.offerType,
                        offerId: this.props.offerId,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        offerLinkUri: this.props.externalUri
                    }) : o.createElement(S, {
                        externalUri: this.props.externalUri
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    return this.props.offerType === k.a.EXTERNAL_OFFER ? null : o.createElement(E, {
                        description: this.props.offerDescription
                    })
                }, t = a.__decorate([Object(c.a)(O), Object(m.d)("PrimeInstructions")], t)
            }(o.Component),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._25, {
                        background: p.m.Alt2,
                        display: p.N.Flex,
                        justifyContent: p._1.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: p._36.Center
                    }, o.createElement(p._35, {
                        type: p._40.H4,
                        align: p._50.Middle
                    }, o.createElement(p._25, {
                        padding: 1,
                        display: p.N.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.Q.NoWrap,
                        alignItems: p.c.Center,
                        fontSize: this.props.fontSize ? this.props.fontSize : p.R.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, o.createElement(p._2, {
                        margin: {
                            right: 1
                        },
                        display: p.N.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.Q.NoWrap,
                        alignItems: p.c.Center
                    }, o.createElement(p._15, {
                        asset: p._16.DeadGlitch,
                        type: p._17.Alert,
                        width: 20,
                        height: 20
                    })), Object(s.d)("Something has gone wrong. Please try again later.", "PrimeError"))))
                }, t = a.__decorate([Object(m.d)("PrimeError")], t)
            }(o.Component),
            x = (n("nFc2"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.setRef = function(e) {
                        n.setState({
                            clipboardInput: e
                        })
                    }, n.copy = function() {
                        var e;
                        try {
                            n.state.clipboardInput && n.state.clipboardInput.select(), e = document.execCommand("copy")
                        } catch (t) {
                            e = !1
                        }
                        return n.setState({
                            copied: e
                        }), e
                    }, n.state = {
                        copied: !1,
                        clipboardInput: null
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.state.copied ? Object(s.d)("copied", "CopyButton") : Object(s.d)("copy", "CopyButton");
                    return o.createElement(p._2, {
                        className: "copy-button copy-btn",
                        display: p.N.Flex,
                        "data-test-target": "copy-button"
                    }, o.createElement(p.W, {
                        className: "copy-button__btn"
                    }, o.createElement(p.u, {
                        onClick: this.copy,
                        type: this.state.copied ? p.z.Success : p.z.Default
                    }, e)), o.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t = a.__decorate([Object(m.d)("CopyButton")], t)
            }(o.Component)),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.setState({
                            value: e.currentTarget.value,
                            copied: !1
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillMount = function() {
                    this.props.initialText && this.setState({
                        value: this.props.initialText,
                        copied: !1
                    })
                }, t.prototype.render = function() {
                    return this.state && this.state.value ? o.createElement(p._2, {
                        className: "copyable-item",
                        display: p.N.Flex,
                        flexGrow: 1
                    }, o.createElement(p._2, {
                        flexGrow: 1
                    }, o.createElement(p.Y, {
                        type: p.Z.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), o.createElement(p._2, null, o.createElement(x, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = a.__decorate([Object(m.d)("CopyableItem")], t)
            }(o.Component),
            I = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._25, {
                        className: "prime-claim-instructions",
                        background: p.m.Alt2,
                        border: !0,
                        padding: 1,
                        fontSize: p.R.Size6
                    }, o.createElement(p._49, null, o.createElement(v, {
                        source: this.props.claimInstructions || "",
                        escapeHtml: !0,
                        renderers: {
                            Link: function(e) {
                                return o.createElement("a", {
                                    href: e.href,
                                    target: "_blank",
                                    rel: "nofollow noopener noreferrer"
                                }, e.children)
                            }
                        }
                    })))
                }, t = a.__decorate([Object(m.d)("PrimeClaimInstructions")], t)
            }(o.Component),
            T = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._2, {
                        className: "prime-redeem",
                        margin: {
                            top: 1
                        }
                    }, this.getCodeOrConfirmation(), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function() {
                    return this.props.code && this.props.deliveryMethod === k.a.CLAIM_CODE ? o.createElement(p._2, null, o.createElement(F, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    })) : o.createElement(p._25, {
                        background: p.m.Alt2,
                        display: p.N.Flex,
                        justifyContent: p._1.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(p._35, {
                        type: p._40.H4,
                        align: p._50.Middle
                    }, o.createElement(p._2, {
                        padding: 1,
                        display: p.N.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.Q.NoWrap,
                        alignItems: p.c.Center,
                        "data-a-target": "prime-redeem-check"
                    }, o.createElement(p._2, {
                        margin: {
                            right: 1
                        },
                        display: p.N.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.Q.NoWrap,
                        alignItems: p.c.Center
                    }, o.createElement(p._15, {
                        asset: p._16.Check,
                        type: p._17.Success,
                        width: 20,
                        height: 20
                    })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t.prototype.getPrimeClaimInstructions = function() {
                    if (this.props.claimInstructions) return o.createElement(I, {
                        claimInstructions: this.props.claimInstructions || ""
                    })
                }, t = a.__decorate([Object(m.d)("PrimeRedeem")], t)
            }(o.Component),
            L = n("el3o"),
            P = (n("v+rJ"), n("rM0q")),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        claimed: !1,
                        claiming: !1,
                        error: !1,
                        claimData: ""
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var n = e.content || {},
                            r = e.self || {
                                claimData: ""
                            },
                            a = (t.props.data || {}).currentUser || {};
                        if (t.state.error) return o.createElement(w, {
                            fontSize: p.R.Size6
                        });
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && a && a.hasPrime) {
                            var i = t.state.claimData || r.claimData;
                            return o.createElement(T, {
                                claimInstructions: e.claimInstructions,
                                code: i,
                                deliveryMethod: e.deliveryMethod
                            })
                        }
                        return o.createElement(C, {
                            offerId: e.id,
                            offerDescription: e.description || "",
                            offerType: e.deliveryMethod || "",
                            externalUri: n.externalURL || "",
                            claimCallback: t.claimOffer,
                            claiming: t.state.claiming
                        })
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser.id) {
                            var r = n.currentUser.id,
                                a = t.props.offer,
                                i = Object(_.a)({
                                    offerID: a.id
                                });
                            t.props.claimPrimeOffer(i).then(function(e) {
                                var n = ((e.data || {}).claimPrimeOffer || {}).self || {};
                                n && a && t.setState({
                                    claimData: n.claimData
                                }), t.markAsClaimedInLocalStorage(r)
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: !0
                                })
                            })
                        }
                    }, t.markAsClaimedInLocalStorage = function(e) {
                        var n = t.props.offer,
                            r = k.b(n.id, e),
                            a = k.c();
                        a.push(r), k.f(a), t.setState({
                            claiming: !1,
                            claimed: !0,
                            error: !1
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.offer,
                        t = this.props.isLast || !1;
                    if (e) {
                        var n = e.content || {},
                            r = n.game || {},
                            a = n.categories || [];
                        return o.createElement(p._25, {
                            className: "prime-offer",
                            alignItems: p.c.Center,
                            borderBottom: !t,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, o.createElement(p._2, {
                            className: "prime-offer__title",
                            padding: {
                                y: .5
                            }
                        }, o.createElement(v, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), o.createElement("img", {
                            src: e.imageURL
                        }), o.createElement(p._2, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, o.createElement(p._35, {
                            type: p._40.P
                        }, r.name, " ", a[0])), o.createElement(p._2, {
                            className: "prime-offer__publisher"
                        }, o.createElement(p._35, {
                            type: p._40.P,
                            color: p.I.Alt2,
                            fontSize: p.R.Size7
                        }, n.publisher)), this.renderRedeemUpsellOrClaimSection(e))
                    }
                    return null
                }, t.prototype.isCurrentOfferClaimed = function(e) {
                    return (e.self || {
                        hasEntitlement: !1
                    }).hasEntitlement || this.isCurrentOfferClaimedInLocalStorage()
                }, t.prototype.isCurrentOfferClaimedInLocalStorage = function() {
                    var e = this.props.data,
                        t = this.props.offer;
                    if (!e.loading && !e.error && e.currentUser) {
                        var n = e.currentUser.id,
                            r = k.b(t.id, n);
                        return k.c().includes(r)
                    }
                }, t = a.__decorate([Object(c.a)(P, {
                    name: "data"
                }), Object(c.a)(L, {
                    name: "claimPrimeOffer"
                }), Object(m.d)("PrimeOffer")], t)
            }(o.Component),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._25, {
                        className: "prime-offer-placeholder",
                        alignItems: p.c.Center,
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, o.createElement(p._2, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, o.createElement(p._8, {
                        height: 20
                    })), o.createElement(p._8, {
                        height: 160
                    }), o.createElement(p._2, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, o.createElement(p._8, {
                        height: 20,
                        width: 160
                    })), o.createElement(p._2, {
                        className: "prime-offer-placeholder__publisher"
                    }, o.createElement(p._8, {
                        height: 20,
                        width: 80
                    })), o.createElement(p._2, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(p._8, {
                        height: 40
                    })))
                }, t = a.__decorate([Object(m.d)("PrimeOfferPlaceholder")], t)
            }(o.Component),
            j = (n("7L7x"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._25, {
                        "data-test-target": "prime-offers-upsell",
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: p.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(p._35, {
                        type: p._40.H4
                    }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), o.createElement(p._2, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: p._36.Center
                    }, o.createElement(p._15, {
                        asset: p._16.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: p._17.Brand
                    })), o.createElement(p._35, {
                        type: p._40.P
                    }, Object(s.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), o.createElement(S, null))
                }, t = a.__decorate([Object(m.d)("PrimeUpsell")], t)
            }(o.Component)),
            A = n("eY4D"),
            U = (n("DgR+"), n("65au")),
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shouldShowPlaceholders = function() {
                        var e = t.props.offersData,
                            n = e.primeOffers,
                            r = null == n;
                        return e.loading || !e.error && r && t.props.showByDefault
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], t = 0; t < 3; ++t) e.push(o.createElement(R, {
                            key: t
                        }));
                        return e
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props.offersData;
                    e && e.primeOffers && this.props.latencyTracking.reportInteractive(e.primeOffers.length)
                }, t.prototype.render = function() {
                    return o.createElement(g.b, {
                        className: "prime-offer-listing"
                    }, o.createElement(p._2, {
                        className: "prime-offer-listing__content",
                        alignItems: p.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            left: 1,
                            right: 1
                        }
                    }, this.renderUpsell(), this.renderOfferExperience()))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!e.loading && !e.error && !this.currentUserHasPrime(e)) return o.createElement(j, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!e.error && e.primeOffers && e.primeOffers.length) {
                        var t = this.getSortedOffers(),
                            n = t[t.length - 1];
                        return t.map(function(e) {
                            return o.createElement(D, {
                                key: e.id,
                                offer: e,
                                isLast: n.id === e.id
                            })
                        })
                    }
                    return o.createElement(h, null)
                }, t.prototype.getSortedOffers = function() {
                    var e = this.props.offersData.primeOffers,
                        t = this.getUserId();
                    if (t) {
                        var n = Object(k.c)(),
                            r = e.filter(function(e) {
                                return !n.includes(Object(k.b)(e.id, t))
                            }).sort(k.i),
                            a = e.filter(function(e) {
                                return !r.includes(e)
                            }).sort(k.i);
                        return r.concat(a)
                    }
                    return e.slice().sort(k.i)
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t.prototype.currentUserHasPrime = function(e) {
                    var t = e.currentUser;
                    return t && t.hasPrime
                }, t = a.__decorate([Object(c.a)(A, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(k.d)()
                            }
                        }
                    }
                }), Object(c.a)(U, {
                    name: "userData"
                }), Object(m.d)("PrimeOfferList")], t)
            }(o.Component),
            z = n("tTbW"),
            G = (n("9856"), n("wjhu")),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            n = i.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.offersLoadedEvent = t.registerOffersLoadedEvent();
                        var n = t.props.offersData;
                        !n || n.loading || n.error || t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        })
                    }, t.registerOffersLoadedEvent = function() {
                        return t.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: u.a.TwitchPrime,
                            key: u.b.PrimeOfferLoaded,
                            label: u.c.Loaded,
                            start: u.d.Registration
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var r = n.primeOffers || [],
                                a = k.e();
                            t.setState({
                                numOfUnseenOffers: r.filter(function(e) {
                                    return !(a.includes(e.id) || t.offerIsClaimed(e))
                                }).length
                            })
                        }
                    }, t.offerIsClaimed = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var n = (e.primeOffers || []).map(function(e) {
                                return "" + e.id
                            });
                            k.g(n)
                        }
                    }, t.renderOfferList = function() {
                        var e = t.props.offersData,
                            n = t.showOffersByDefault() || !1,
                            r = e && !e.loading && !e.error;
                        return t.offersLoadedEvent && r && t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), r || n ? o.createElement(p._2, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, o.createElement(f, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), o.createElement(B, {
                            showByDefault: n
                        })) : null
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getUnseenOffers(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getUnseenOffers(e)
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(d.a)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: p._44.Center,
                        direction: p._45.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(s.d)("New Prime Loot", "PrimeOffers") : n.label = Object(s.d)("Prime Loot", "PrimeOffers"), o.createElement(p._2, {
                        className: "prime-offers",
                        position: p._9.Relative
                    }, o.createElement(l.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, o.createElement(p.v, {
                        ariaLabel: Object(s.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: p.x.Large,
                        icon: p._16.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    }), o.createElement(p.p, {
                        direction: p.q.BottomRight,
                        size: p.r.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e) return o.createElement(p._2, {
                        className: "prime-offers__pill",
                        position: p._9.Absolute
                    }, o.createElement(p.e, {
                        type: p.i.BounceIn,
                        duration: p.g.Medium,
                        timing: p.h.EaseIn,
                        enabled: e > 0
                    }, o.createElement(p._6, {
                        label: e.toString(),
                        type: p._7.Notification
                    })))
                }, t = a.__decorate([Object(c.a)(z, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(k.d)()
                            }
                        }
                    }
                }), Object(c.a)(G, {
                    name: "userData"
                }), Object(m.d)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component);
        var W = Object(r.b)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(M),
            V = (n("ukY1"), n("F1v6")),
            H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                    if (!Object(k.h)(e, t)) return null;
                    if (this.props.data.loading) return null;
                    var n = Object(N.d)(N.a, ""),
                        r = Object(s.d)("Twitch Prime", "BlueBar"),
                        a = o.createElement("span", null, Object(s.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        i = Object(N.d)(N.a, ""),
                        l = Object(s.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var c = this.props.data;
                        c && c.primePromotions && c.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    n = e.externalURL, r = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    a = o.createElement(v, {
                                        source: e.text,
                                        renderers: {
                                            Link: function(e) {
                                                return o.createElement("a", {
                                                    href: e.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                }, e.children)
                                            }
                                        }
                                    });
                                    break;
                                case "twitch.prime.bluebar.right1":
                                    i = e.externalURL, l = e.text
                            }
                        })
                    }
                    return o.createElement(p._25, {
                        color: p.I.Base,
                        className: "blue-bar",
                        position: p._9.Relative,
                        fullWidth: !0
                    }, o.createElement(p._2, {
                        className: "blue-bar__bar",
                        display: p.N.Flex,
                        alignItems: p.c.Center,
                        justifyContent: p._1.Between,
                        flexWrap: p.Q.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, o.createElement(p._2, {
                        display: p.N.InlineFlex,
                        alignItems: p.c.Center,
                        padding: {
                            right: .5
                        }
                    }, o.createElement(p._2, {
                        className: "blue-bar__logo",
                        display: p.N.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, o.createElement(p._15, {
                        asset: p._16.Crown,
                        width: 20,
                        height: 13
                    })), o.createElement(p._35, {
                        bold: !0,
                        type: p._40.Span,
                        noWrap: !0,
                        fontSize: p.R.Size6
                    }, o.createElement(p.W, {
                        padding: {
                            x: 1
                        }
                    }, o.createElement("a", {
                        className: "blue-bar__link",
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r))), o.createElement(p._35, {
                        className: "blue-bar__headline",
                        type: p._40.Span,
                        fontSize: p.R.Size6
                    }, a)), o.createElement(p._2, {
                        display: p.N.InlineFlex,
                        flexShrink: 0
                    }, o.createElement(p._35, {
                        bold: !0,
                        type: p._40.Span,
                        noWrap: !0,
                        fontSize: p.R.Size6,
                        color: p.I.Base
                    }, o.createElement("a", {
                        className: "blue-bar__link",
                        href: i,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, l)))))
                }, t = a.__decorate([Object(c.a)(V, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(k.d)()
                            }
                        }
                    }
                }), Object(m.d)("BlueBarComponent")], t)
            }(o.Component);
        n.d(t, "b", function() {
            return W
        }), n.d(t, "a", function() {
            return H
        }), n.d(t, "c", function() {
            return k.d
        })
    },
    "8U1+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, a = n("TToO"),
            i = n("GiK3"),
            o = n("6sO2"),
            s = n("Qk3C"),
            l = n("+Znq"),
            c = n("CSlQ"),
            d = n("Odds"),
            u = (n("//Ty"), Object(c.d)("Footer", {
                autoReportInteractive: !0
            })(function() {
                return i.createElement(d._2, {
                    className: "footer",
                    padding: {
                        y: 3
                    }
                }, i.createElement(d._2, {
                    className: "footer__link-container",
                    display: d.N.Flex,
                    alignItems: d.c.Center,
                    justifyContent: d._1.Center,
                    margin: "auto",
                    padding: {
                        y: 3
                    }
                }, i.createElement(d._2, {
                    className: "footer__glitch",
                    display: d.N.Flex,
                    alignItems: d.c.Center,
                    margin: {
                        right: 2
                    }
                }, i.createElement(d._15, {
                    asset: d._16.LogoGlitch,
                    width: 30,
                    height: 30
                })), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/about/",
                    "data-a-target": "frontpage-footer-about-link"
                }, Object(o.d)("About", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://blog.twitch.tv/",
                    "data-a-target": "frontpage-footer-blog-link"
                }, Object(o.d)("Blog", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/products/turbo/ticket?ref=footer",
                    "data-a-target": "frontpage-footer-turbo-link"
                }, Object(o.d)("Turbo", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://music.twitch.tv/",
                    "data-a-target": "frontpage-footer-music-link"
                }, Object(o.d)("Music", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "http://twitchadvertising.tv/",
                    "data-a-target": "frontpage-footer-advertising-link"
                }, Object(o.d)("Advertise", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://dev.twitch.tv/",
                    "data-a-target": "frontpage-footer-developers-link"
                }, Object(o.d)("Developers", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/partners/",
                    "data-a-target": "frontpage-footer-partners-link"
                }, Object(o.d)("Partners", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/platforms/",
                    "data-a-target": "frontpage-footer-mobile-link"
                }, Object(o.d)("Mobile", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/jobs/",
                    "data-a-target": "frontpage-footer-jobs-link"
                }, Object(o.d)("Jobs", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://help.twitch.tv/",
                    "data-a-target": "frontpage-footer-help-link"
                }, Object(o.d)("Help", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/terms-of-service/",
                    "data-a-target": "frontpage-footer-terms-link"
                }, Object(o.d)("Terms", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/privacy-policy/",
                    "data-a-target": "frontpage-footer-privacy-link"
                }, Object(o.d)("Privacy Policy", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/ad-choices/",
                    "data-a-target": "frontpage-footer-choices-link"
                }, Object(o.d)("Ad Choices", "Footer"))), i.createElement(d._2, {
                    margin: {
                        right: 1
                    }
                }, i.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/cookie-policy/",
                    "data-a-target": "frontpage-footer-cookie-link"
                }, Object(o.d)("Cookie Policy", "Footer"))), i.createElement(d._2, {
                    margin: {
                        left: 5
                    }
                }, i.createElement(l.a, null, i.createElement("span", {
                    className: "footer__link",
                    "data-a-target": "frontpage-footer-language-link"
                }, Object(o.d)("Language", "Footer")), i.createElement(d.p, {
                    "data-a-target": "frontpage-footer-language-options",
                    size: d.r.Medium,
                    direction: d.q.TopRight
                }, i.createElement(s.a, null))))))
            })),
            m = n("bZTi"),
            p = n("j7/Y"),
            f = n("w9tK"),
            g = n("Us7i"),
            h = n("vH/s"),
            v = n("/+to"),
            _ = n("QG7y"),
            k = n("86JD"),
            y = n("DBTH"),
            b = n("2aoH"),
            E = n("8PKe"),
            N = n("F8kA"),
            S = n("7vx8"),
            O = n("NY9D"),
            C = n("dXGo"),
            w = (n("APTF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.getItems = function() {
                        if (t.props.data.loading || t.props.data.error) {
                            for (var e = [], n = 0; n < 12; n++) e.push(i.createElement(d.J, {
                                cols: 2,
                                key: "placeholder-" + n
                            }, i.createElement(d._2, {
                                key: n,
                                margin: {
                                    bottom: n < 6 ? 4 : 0
                                }
                            }, i.createElement(d._2, {
                                margin: {
                                    bottom: .5
                                }
                            }, i.createElement(d.j, {
                                ratio: d.k.Aspect3x4
                            }, i.createElement(d._8, null))), i.createElement(d._35, null, i.createElement(d._8, {
                                width: 120
                            })), i.createElement(d._35, {
                                fontSize: d.R.Size7
                            }, i.createElement(d._8, {
                                width: 80
                            })))));
                            return e
                        }
                        var r = t.props.data.games.edges.slice(0, t.state.adDisplayed ? 10 : 12).map(function(e, t) {
                                var n = e.node;
                                return i.createElement(d.J, {
                                    cols: 2,
                                    key: "game-" + n.id
                                }, i.createElement(d._2, {
                                    margin: {
                                        bottom: t < 6 ? 4 : 0
                                    }
                                }, i.createElement(d.t, {
                                    linkTo: Object(O.c)(n.name),
                                    title: n.name,
                                    alt: n.name + " cover image",
                                    src: n.boxArtURL,
                                    info: Object(o.d)("{viewerCount,number} viewers", {
                                        viewerCount: n.viewersCount
                                    }, "FeaturedGames"),
                                    "data-a-target": "card-" + t,
                                    "data-a-id": "card-" + n.name.replace(/ /g, "")
                                })))
                            }),
                            a = i.createElement(d._2, {
                                display: d.N.Flex,
                                flexGrow: 1,
                                justifyContent: d._1.Center,
                                key: "ad"
                            }, i.createElement(v.a, {
                                adSize: _.c.anonFront.rect,
                                adUnit: _.d.frontpage,
                                slotID: _.b.anonFront.rect,
                                targeting: {
                                    pagetype: _.a.frontpage
                                },
                                slotRendered: t.onSlotRendered,
                                autoEnable: !1
                            }));
                        return r.splice(4, 0, a), r
                    }, t.onSlotRendered = function() {
                        t.state.adDisplayed || t.setState({
                            adDisplayed: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = i.createElement(d._2, {
                            display: d.N.Flex,
                            flexDirection: d.P.Row,
                            alignItems: d.c.Baseline,
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(d._35, {
                            fontSize: d.R.Size2,
                            color: d.I.Base
                        }, Object(o.d)("Featured Games", "FeaturedGames")), i.createElement(d._2, {
                            className: "anon-featured-games__subheader",
                            margin: {
                                left: 2
                            }
                        }, i.createElement(d._35, {
                            fontSize: d.R.Size3,
                            color: d.I.Alt2
                        }, Object(o.d)("Games people are watching now", "FeaturedGames")))),
                        t = i.createElement(d._2, {
                            display: d.N.Flex,
                            justifyContent: d._1.End
                        }, i.createElement(d.W, {
                            display: d.N.Flex,
                            alignItems: d.c.Center
                        }, i.createElement(N.a, {
                            to: "/directory",
                            "data-a-target": "see-all-live-games-link"
                        }, i.createElement(d._35, {
                            fontSize: d.R.Size4
                        }, Object(o.d)("See all live games", "FeaturedGames")), i.createElement(d._25, {
                            color: d.I.Link,
                            margin: {
                                left: .5
                            },
                            display: d.N.InlineFlex,
                            alignItems: d.c.Center
                        }, i.createElement(d._15, {
                            asset: d._16.AngleRight,
                            width: 14,
                            height: 14
                        })))));
                    return i.createElement(d._25, {
                        className: "anon-featured-games",
                        background: d.m.Base,
                        padding: {
                            x: 1
                        }
                    }, e, i.createElement(d.U, null, this.getItems()), t)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(S.a)(C), Object(c.d)("FeaturedGames")], t)
            }(i.Component)),
            x = n("+GT7"),
            F = n("SZoP");
        ! function(e) {
            e[e.All = 1] = "All", e[e.Xbox = 2] = "Xbox", e[e.PS4 = 3] = "PS4"
        }(r || (r = {}));
        var I = n("262o"),
            T = (n("GrwT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getItems = function() {
                        if (t.props.data.loading || t.props.data.error) {
                            for (var e = [], n = 0; n < 6; n++) e.push(i.createElement(d._2, {
                                key: n,
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(d._2, {
                                margin: {
                                    bottom: .5
                                }
                            }, i.createElement(d.j, {
                                ratio: d.k.Aspect16x9
                            }, i.createElement(d._8, null))), i.createElement(d._35, null, i.createElement(d._8, {
                                width: 150
                            })), i.createElement(d._35, {
                                fontSize: d.R.Size7
                            }, i.createElement(d._8, {
                                width: 100
                            }))));
                            return e
                        }
                        return t.props.data.streams.edges.map(function(e, n) {
                            if (!e.node.broadcaster.id) return null;
                            var r = e.node,
                                a = Object(F.a)(r.broadcaster.login, r.broadcaster.displayName),
                                s = {
                                    medium: h.PageviewMedium.Following,
                                    content: h.PageviewContent.Live,
                                    content_index: n
                                },
                                l = r && r.game ? Object(O.c)(r.game.name) : "";
                            return i.createElement(d._2, {
                                className: "anon-top-channels",
                                key: r.broadcaster.id,
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(x.a, {
                                imageSrc: r && r.previewImageURL || o.a.defaultStreamPreviewURL,
                                imageAlt: r && r.title || "",
                                viewerCount: r && r.viewersCount || 0,
                                title: r && r.title || "",
                                channelName: a,
                                gameImageSrc: r && r.game && r.game.boxArtURL || o.a.defaultBoxArtURL,
                                gameTitle: r && r.game ? r.game.name : "",
                                gameLinkTo: {
                                    pathname: l,
                                    state: s
                                },
                                linkTo: {
                                    pathname: "/" + r.broadcaster.login,
                                    state: s
                                },
                                channelNameLinkTo: {
                                    pathname: "/" + r.broadcaster.login + "/videos",
                                    state: s
                                },
                                "data-a-target": "top-" + t.getDataProp() + "-channel-" + n
                            }))
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = i.createElement(d._2, {
                            display: d.N.Flex,
                            flexDirection: d.P.Row,
                            alignItems: d.c.Baseline,
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(d._35, {
                            fontSize: d.R.Size2,
                            color: d.I.Base
                        }, this.getTitle()), i.createElement(d._2, {
                            className: "anon-top-channels__subheader",
                            margin: {
                                left: 2
                            }
                        }, i.createElement(d._35, {
                            fontSize: d.R.Size3,
                            color: d.I.Alt2
                        }, this.getSubtitle()))),
                        t = i.createElement(d._2, {
                            className: "anon-top-channels__footer",
                            display: d.N.Flex,
                            justifyContent: d._1.End
                        }, i.createElement(d.W, {
                            display: d.N.Flex,
                            alignItems: d.c.Center
                        }, i.createElement(N.a, {
                            to: this.getLink(),
                            "data-a-target": "see-all-" + this.getDataProp() + "-channels-link"
                        }, i.createElement(d._35, {
                            fontSize: d.R.Size4
                        }, this.getFooter()), i.createElement(d._25, {
                            color: d.I.Link,
                            margin: {
                                left: .5
                            },
                            display: d.N.InlineFlex,
                            alignItems: d.c.Center
                        }, i.createElement(d._15, {
                            asset: d._16.AngleRight,
                            width: 14,
                            height: 14
                        })))));
                    return i.createElement("div", null, e, i.createElement(d._46, {
                        gutterSize: d._48.Small,
                        childWidth: d._47.Large,
                        placeholderItems: 6
                    }, this.getItems()), t)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.getFooter = function() {
                    switch (this.props.type) {
                        case r.All:
                            return Object(o.d)("See all live Channels", "TopChannels");
                        case r.PS4:
                            return Object(o.d)("See all PS4 Channels", "TopChannels");
                        case r.Xbox:
                            return Object(o.d)("See all Xbox One Channels", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getSubtitle = function() {
                    switch (this.props.type) {
                        case r.All:
                            return Object(o.d)("Broadcasters people are watching now", "TopChannels");
                        case r.PS4:
                            return Object(o.d)("Channels broadcasted from Playstation 4", "TopChannels");
                        case r.Xbox:
                            return Object(o.d)("Channels broadcasted from Xbox one", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getTitle = function() {
                    switch (this.props.type) {
                        case r.All:
                            return Object(o.d)("Top Live Channels", "TopChannels");
                        case r.PS4:
                            return Object(o.d)("Top PS4 Channels", "TopChannels");
                        case r.Xbox:
                            return Object(o.d)("Top Xbox One Channels", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getDataProp = function() {
                    switch (this.props.type) {
                        case r.All:
                            return "live";
                        case r.PS4:
                            return "ps4";
                        case r.Xbox:
                            return "xbox";
                        default:
                            return ""
                    }
                }, t.prototype.getLink = function() {
                    switch (this.props.type) {
                        case r.All:
                            return "/directory/all";
                        case r.PS4:
                            return "/directory/all/ps4";
                        case r.Xbox:
                            return "/directory/all/xbox";
                        default:
                            return ""
                    }
                }, t = a.__decorate([Object(S.a)(I, {
                    options: function(e) {
                        var t = "";
                        switch (e.type) {
                            case r.PS4:
                                t = "ps4";
                                break;
                            case r.Xbox:
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
                }), Object(c.d)("TopChannels")], t)
            }(i.Component)),
            L = (n("9zTP"), m.a.wrap(function() {
                return n.e(74).then(n.bind(null, "yEZg"))
            }, "FeaturedGenres")),
            P = m.a.wrap(function() {
                return n.e(73).then(n.bind(null, "2hMh"))
            }, "TopCreative"),
            D = function(e) {
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
                                var e = t.state.categoriesExperimentAssignment === y.a.Streams;
                                return i.createElement(L, {
                                    trackingMedium: h.PageviewMedium.AnonFrontPage,
                                    withStreams: e
                                })
                            }
                            return i.createElement(w, null)
                        }
                    }, t.renderTopCreative = function() {
                        if (t.state.categoriesExperimentAssignment) {
                            var e = t.state.categoriesExperimentAssignment === y.a.Streams;
                            return i.createElement(d._25, {
                                className: "anon-front__content-section",
                                background: d.m.Base,
                                margin: {
                                    x: "auto"
                                },
                                padding: {
                                    x: 1,
                                    top: 5,
                                    bottom: 3
                                }
                            }, i.createElement(P, {
                                trackingMedium: h.PageviewMedium.AnonFrontPage,
                                withStreams: e
                            }))
                        }
                    }, t.renderSocialBar = function() {
                        return i.createElement(d._25, {
                            className: "anon-front__social-container",
                            alignItems: d.c.Center,
                            display: d.N.Flex,
                            flexDirection: d.P.Column,
                            justifyContent: d._1.Center,
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 3,
                                x: 2
                            }
                        }, i.createElement(d._35, {
                            fontSize: d.R.Size3
                        }, Object(o.d)("Follow the latest Twitch news", "AnonFrontPage")), i.createElement(d._2, {
                            margin: {
                                top: 1
                            },
                            display: d.N.Flex,
                            flexDirection: d.P.Row
                        }, i.createElement(d.u, {
                            linkTo: "https://www.facebook.com/twitch",
                            targetBlank: !0,
                            size: d.x.Large,
                            "data-a-target": "frontpage-facebook-link"
                        }, Object(o.d)("Facebook", "AnonFrontPage")), i.createElement(d._2, {
                            margin: {
                                x: .5
                            }
                        }, i.createElement(d.u, {
                            linkTo: "https://www.twitter.com/twitch",
                            targetBlank: !0,
                            size: d.x.Large,
                            "data-a-target": "frontpage-twitter-link"
                        }, Object(o.d)("Twitter", "AnonFrontPage"))), i.createElement(d.u, {
                            linkTo: "https://blog.twitch.tv/",
                            targetBlank: !0,
                            size: d.x.Large,
                            "data-a-target": "frontpage-blog-link"
                        }, Object(o.d)("Official Blog", "AnonFrontPage"))))
                    }, t.renderPlatformTopChannels = function() {
                        return i.createElement(d._2, null, i.createElement(d._25, {
                            background: d.m.Base,
                            padding: {
                                x: 2,
                                y: 3
                            },
                            margin: {
                                x: "auto"
                            },
                            className: "anon-front__content-section"
                        }, i.createElement(T, {
                            type: r.PS4,
                            key: "channels.ps4"
                        })), i.createElement(d._25, {
                            background: d.m.Base,
                            padding: {
                                x: 2,
                                y: 3
                            },
                            margin: {
                                x: "auto"
                            },
                            className: "anon-front__content-section"
                        }, i.createElement(T, {
                            type: r.Xbox,
                            key: "channels.xbox"
                        })))
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(_.b.anonFront).length && g.a.display(_.b.anonFront.takeover), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    _.g.addListener(_.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment(y.f)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        categoriesExperimentAssignment: Object(y.m)(e) ? e : null
                                    }), this.props.latencyTracking.reportInteractive(), o.n.setPageTitle(), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = void 0 !== this.state.categoriesExperimentAssignment && !this.state.categoriesExperimentAssignment;
                    return i.createElement(d._2, {
                        fullHeight: !0
                    }, i.createElement(b.a, null, i.createElement(E.a, null)), i.createElement(d._25, {
                        className: "anon-front",
                        background: d.m.Base,
                        position: d._9.Relative,
                        fullHeight: !0
                    }, i.createElement("div", {
                        id: "mantle_skin",
                        className: this.state.takeoverRendered ? "anon-front__takeover" : ""
                    }, i.createElement(v.a, {
                        adSize: _.c.anonFront.takeover,
                        adUnit: _.d.frontpage,
                        slotID: _.b.anonFront.takeover,
                        targeting: {
                            pagetype: _.a.frontpage
                        },
                        slotRendered: this.onTakeoverRendered,
                        autoEnable: !1
                    }), i.createElement(d._2, {
                        className: "anon-front__featured-section",
                        display: d.N.Flex,
                        flexWrap: d.Q.Wrap,
                        justifyContent: d._1.Center
                    }, i.createElement(d._2, {
                        className: "anon-front__banner"
                    }, i.createElement(v.a, {
                        adSize: _.c.anonFront.banner,
                        adUnit: _.d.frontpage,
                        slotID: _.b.anonFront.banner,
                        targeting: {
                            pagetype: _.a.frontpage
                        },
                        injectStyles: {
                            display: "flex"
                        },
                        autoEnable: !1
                    })), i.createElement(d._2, {
                        className: "anon-front__content-section",
                        padding: this.state.takeoverRendered ? 2 : 0
                    }, i.createElement(k.b, {
                        renderContext: k.a.AnonFront
                    })), i.createElement(d._2, {
                        className: "anon-front__sizzle-strip",
                        display: d.N.Flex,
                        justifyContent: d._1.Center
                    }, i.createElement(v.a, {
                        adSize: _.c.anonFront.sizzle,
                        adUnit: _.d.sizzle,
                        slotID: _.b.anonFront.sizzle,
                        targeting: {
                            pagetype: _.a.frontpage
                        },
                        autoEnable: !1
                    }))), i.createElement(d._25, {
                        background: d.m.Base,
                        margin: {
                            x: "auto"
                        },
                        padding: {
                            x: 1,
                            top: 5,
                            bottom: 3
                        },
                        className: "anon-front__content-section"
                    }, this.renderFeaturedGamesOrGenres()), this.renderTopCreative(), e && this.renderSocialBar(), i.createElement(d._25, {
                        background: d.m.Base,
                        padding: {
                            x: 2,
                            top: 3,
                            bottom: 3
                        },
                        margin: {
                            x: "auto"
                        },
                        className: "anon-front__content-section"
                    }, i.createElement(T, {
                        type: r.All,
                        key: "channels.all"
                    })), e && this.renderPlatformTopChannels(), i.createElement(d._2, {
                        className: "anon-front__bottom",
                        display: d.N.Flex,
                        justifyContent: d._1.Center
                    }, i.createElement(v.a, {
                        adSize: _.c.anonFront.bottom,
                        adUnit: _.d.frontpage,
                        slotID: _.b.anonFront.bottom,
                        targeting: {
                            pagetype: _.a.frontpage
                        },
                        injectStyles: {
                            display: "flex"
                        },
                        autoEnable: !1
                    })), i.createElement(u, null))))
                }, t.prototype.componentWillUnmount = function() {
                    _.g.removeListener(_.e, this.onSlotAdded)
                }, t = a.__decorate([Object(c.d)("AnonFrontPage", {
                    destination: f.a.Index
                }), Object(p.a)({
                    location: h.PageviewLocation.FrontPage
                })], t)
            }(i.Component);
        n.d(t, "AnonFrontPage", function() {
            return D
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
    9856: function(e, t) {},
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n("TToO"),
            a = n("6sO2"),
            i = n("Aj/L"),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var a, i;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, a), [4, this._fetch(e, t)];
                                case 1:
                                    return i = r.sent(), [4, this.constructLegacyAPIResponse(i)];
                                case 2:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = r.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return a = r.sent(), t.requestError = a, [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
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
                        headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = a.n.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(i.c)(n);
                    return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e
            }()
    },
    "9zTP": function(e, t) {},
    AHWf: function(e, t) {},
    APTF: function(e, t) {},
    CybZ: function(e, t) {},
    DBTH: function(e, t, n) {
        "use strict";
        n.d(t, "g", function() {
            return i
        }), n.d(t, "f", function() {
            return o
        }), n.d(t, "h", function() {
            return s
        }), n.d(t, "j", function() {
            return l
        }), n.d(t, "i", function() {
            return c
        }), n.d(t, "l", function() {
            return d
        }), n.d(t, "k", function() {
            return u
        }), n.d(t, "d", function() {
            return a
        }), n.d(t, "b", function() {
            return p
        }), n.d(t, "a", function() {
            return f
        }), n.d(t, "c", function() {
            return h
        }), n.d(t, "e", function() {
            return v
        }), n.d(t, "q", function() {
            return k
        }), n.d(t, "o", function() {
            return y
        }), n.d(t, "p", function() {
            return b
        }), n.d(t, "n", function() {
            return E
        }), n.d(t, "m", function() {
            return N
        }), n.d(t, "r", function() {
            return S
        });
        var r, a, i = "TWILIGHT_WEB_ONBOARDING_CATEGORIES",
            o = "TWILIGHT_WEB_ONBOARDING_CATEGORIES_ANON_FRONT_PAGE",
            s = "TWILIGHT_WEB_ONBOARDING_CHANNEL_RANKING",
            l = "TWILIGHT_WEB_ONBOARDING_FOLLOWING_FOR_YOU",
            c = "TWILIGHT_WEB_ONBOARDING",
            d = "TWILIGHT_WEB_ONBOARDING_RANDOMIZED_GAMES",
            u = "TWILIGHT_WEB_ONBOARDING_FOLLOW_CATEGORIES";
        ! function(e) {
            e.NoSkip = "no_skip"
        }(r || (r = {})),
        function(e) {
            e.First = "first", e.Last = "last"
        }(a || (a = {}));
        var m, p, f, g = new Set([a.First.toString(), a.Last.toString()]);
        ! function(e) {
            e.Yes = "yes"
        }(m || (m = {})),
        function(e) {
            e.Yes = "yes"
        }(p || (p = {})),
        function(e) {
            e.Games = "games", e.Streams = "streams"
        }(f || (f = {}));
        var h, v, _ = new Set([f.Games.toString(), f.Streams.toString()]);
        ! function(e) {
            e.ENABLED = "enabled"
        }(h || (h = {})),
        function(e) {
            e.ENABLED = "enabled"
        }(v || (v = {}));
        var k = function(e) {
                return e === r.NoSkip
            },
            y = function(e) {
                return !!e && g.has(e)
            },
            b = function(e, t) {
                return k(e) && y(t)
            },
            E = function(e, t, n) {
                return k(e) && y(t) && n === m.Yes
            },
            N = function(e) {
                return !!e && _.has(e)
            },
            S = function(e) {
                return e.getTime() >= O().getTime()
            },
            O = function() {
                return new Date((new Date).getTime() - 12096e5)
            }
    },
    "DgR+": function(e, t) {},
    F1v6: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_BlueBar_CurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "stringIds"
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
                                    value: "ID"
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
                            value: "dateOverride"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "primePromotions"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "ids"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "stringIds"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
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
                                    value: "text"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "externalURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isExternalLink"
                                },
                                arguments: [],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 231
            }
        };
        n.loc.source = {
            body: "query Prime_BlueBar_CurrentUser($stringIds: [ID!] $dateOverride: Time) {\ncurrentUser {\nid\nhasPrime\n}\nprimePromotions (ids: $stringIds dateOverride: $dateOverride) {\nid\ntext\nexternalURL\nisExternalLink\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    GrwT: function(e, t) {},
    Hs3O: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return i
        }), n.d(t, "c", function() {
            return o
        }), t.d = function(e, t) {
            var n = r.b.get(s, "https://twitch.amazon.com/prime"),
                a = "";
            try {
                a = btoa(t)
            } catch (e) {
                l.error(e, "Could not decode location pathname substring for redirect")
            }
            return a ? n + "?ref_=" + e + "&redirectRoute=" + a : n + "?ref_=" + e
        };
        var r = n("6sO2"),
            a = "sm_tw_tup_ntp_t_all",
            i = "sm_tw_thp_blue_t_all",
            o = "sm_w_tup_ntp_t_c",
            s = "prime_landing_page_base_url",
            l = r.i.withCategory("PrimeUtilsLogger")
    },
    IOwa: function(e, t, n) {
        "use strict";
        var r, a, i, o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            c = n("6sO2"),
            d = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), (r = {})[d.a.Live] = "stream-type-indicator--live", r[d.a.Premiere] = "stream-type-indicator--premiere", r[d.a.Rerun] = "stream-type-indicator--rerun", r[d.a.WatchParty] = "stream-type-indicator--rerun", r),
            p = ((a = {})[d.a.Premiere] = u._16.VideoPremiere, a[d.a.Rerun] = u._16.VideoRerun, a[d.a.WatchParty] = u._16.VideoRerun, a),
            f = ((i = {})[d.a.Premiere] = u._17.Live, i[d.a.Rerun] = u._17.Inherit, i[d.a.WatchParty] = u._17.Inherit, i),
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
                    }) : this.props.type === d.a.Live ? l.createElement(u._2, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.N.Flex,
                        alignItems: u.c.Center
                    }, l.createElement(u.E, {
                        status: u.G.Live,
                        size: u.F.Small
                    })) : l.createElement(u._15, {
                        asset: p[this.props.type],
                        type: f[this.props.type],
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
        var r = n("TToO"),
            a = this,
            i = function() {
                return r.__awaiter(a, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
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
                return r.__awaiter(a, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
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
                return r.__awaiter(a, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
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
                return r.__awaiter(a, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
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
    PPNL: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("OAwv"),
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
                    return r.__awaiter(e, void 0, void 0, function() {
                        var e, n, s, d, u, m;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    e = i.n.logger.withCategory("leagueoflegends-api"), t(Object(c.e)(!0)), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), n = i.n.intl.getLanguageCode(), s = l(n), d = o.a.getAPIURL("/api/lol/champions?" + a.stringify({
                                        locale: s,
                                        on_site: 1
                                    })).toString(), [4, o.a.get(d)];
                                case 2:
                                    return (u = r.sent()).body ? t(Object(c.f)(u.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.d)(!0))), [3, 4];
                                case 3:
                                    throw m = r.sent(), t(Object(c.d)(!0)), e.error(m, "Failed to load LoL champion data"), m;
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
        var r = n("BzvE"),
            a = (n.n(r), n("6sO2")),
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
            c = "ads.slot-render-end",
            d = "ads.slot-ready",
            u = new r.EventEmitter
    },
    Qk3C: function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            a = n("2KeS"),
            i = n("TToO"),
            o = n("FuaS"),
            s = n("U9pL");

        function l(e, t) {
            var n = this;
            return function() {
                return i.__awaiter(n, void 0, void 0, function() {
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return t ? [4, Object(s.c)({
                                    userID: t,
                                    preferredLanguageTag: Object(s.b)(e)
                                })] : [3, 2];
                            case 1:
                                n.sent(), n.label = 2;
                            case 2:
                                return Object(o.c)(e), window.location.reload(!0), [2]
                        }
                    })
                })
            }
        }
        var c = n("GiK3"),
            d = n("6sO2"),
            u = n("Odds"),
            m = (n("2Nqs"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        return c.createElement(u._0, {
                            key: e.languageCode,
                            onClick: t.handleLanguageClick,
                            "data-target": "language-selector-link",
                            "data-language": e.languageCode
                        }, c.createElement(u._2, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            "data-a-target": "language-" + e.languageCode
                        }, e.name))
                    }, t.handleLanguageClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-language");
                        n && t.props.changeLanguage(n, t.props.currentUserID)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Math.floor(d.a.locales.length / 2);
                    return c.createElement(u._2, {
                        className: "language-selector",
                        display: u.N.Flex,
                        padding: {
                            y: 1
                        }
                    }, c.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right"
                    }, d.a.locales.slice(0, e).map(this.renderLink)), c.createElement("div", {
                        className: "language-selector__list"
                    }, d.a.locales.slice(e).map(this.renderLink)))
                }, t
            }(c.Component));
        var p = Object(r.b)(function(e) {
            return {
                currentUserID: e.session.user && e.session.user.id || null
            }
        }, function(e) {
            return Object(a.b)({
                changeLanguage: l
            }, e)
        })(m);
        n.d(t, "a", function() {
            return p
        })
    },
    R0Kh: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "f", function() {
            return c
        }), n.d(t, "e", function() {
            return d
        }), n.d(t, "g", function() {
            return u
        }), n.d(t, "i", function() {
            return m
        }), n.d(t, "h", function() {
            return f
        }), n.d(t, "d", function() {
            return g
        });
        var r = n("OAwv"),
            a = (n.n(r), n("6sO2")),
            i = n("S1vB"),
            o = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            },
            s = function(e, t) {
                return e + "-" + t
            },
            l = function() {
                return p("claimedOffers")
            },
            c = function(e) {
                a.k.set("claimedOffers", e)
            },
            d = function() {
                return p("seenOffers")
            },
            u = function(e) {
                a.k.set("seenOffers", e)
            },
            m = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            p = function(e) {
                return a.k.get(e, [])
            },
            f = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(i.a)(t))
            },
            g = function() {
                var e = location.search,
                    t = r.parse(e);
                return t && t.dateOverride || void 0
            }
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
            return r
        }), n.d(t, "b", function() {
            return a
        });
        var r, a, i = "carousel-player__main-description",
            o = "carousel-player-left-button",
            s = "carousel-player-right-button";
        ! function(e) {
            e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
        }(r || (r = {})),
        function(e) {
            e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
        }(a || (a = {}))
    },
    Wjt1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.placeholderFeaturedBroadcasters = function(e) {
            return f([], e, !0)
        }, n.d(t, "FeaturedContent", function() {
            return g
        });
        var r = n("TToO"),
            a = n("GiK3"),
            i = (n.n(a), n("6sO2")),
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

        function f(e, t, n) {
            switch (t) {
                case c.FeaturedBroadcastersRenderContext.AnonFront:
                    return a.createElement(s.a, {
                        items: e,
                        isLoading: n,
                        layout: l.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return a.createElement(p._25, {
                        className: "featured-content",
                        background: p.m.Base,
                        elevation: 1
                    }, a.createElement(p._2, {
                        padding: 1
                    }, function(e) {
                        return e ? a.createElement(p._35, {
                            fontSize: p.R.Size5,
                            color: p.I.Alt2
                        }, a.createElement(p._8, {
                            width: 100
                        })) : a.createElement(p._35, {
                            fontSize: p.R.Size5,
                            color: p.I.Alt2
                        }, Object(i.d)("Featured", "FeaturedContentComponent"))
                    }(n)), a.createElement(s.a, {
                        items: e,
                        isLoading: n,
                        layout: l.c.Vertical
                    }))
            }
        }
        var g = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(u.a)(e),
                    n = this.props.data.featuredVideos || [],
                    r = Object(u.b)(n);
                if (t.length > 0 && t.splice(t.length - r.length), this.props.shouldMixContent && r.length > 0) {
                    var a = 6 - r.length,
                        i = t.splice(a);
                    t = t.concat(r).concat(i)
                } else t = t.concat(r);
                var o = !(!this.props.data.loading && !this.props.data.error);
                return f(t, this.props.renderContext, o)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = r.__decorate([Object(o.a)(d, {
                options: function() {
                    return {
                        variables: {
                            language: i.n.intl.getLanguageCode()
                        }
                    }
                }
            }), Object(m.d)("FeaturedContent")], t)
        }(a.Component)
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
                        type: r.b.Stream,
                        subType: e.stream ? e.stream.type : "",
                        viewersCount: e.stream ? e.stream.viewersCount : 0
                    },
                    description: a(e.description || ""),
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
                        type: r.b.Vod,
                        subType: "video",
                        viewersCount: e.video ? e.video.viewCount : 0
                    },
                    description: a(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        };
        var r = n("WKwZ");

        function a(e) {
            return e.replace(/\[\]\(.+\)/, "")
        }
    },
    YUUt: function(e, t, n) {
        e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc37349dfbde7c720.png"
    },
    bNhH: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), t.c = function(e) {
            return f([], e, !0)
        }, n.d(t, "a", function() {
            return g
        });
        var r, a = n("TToO"),
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
        }(r || (r = {}));

        function f(e, t, n) {
            switch (t) {
                case r.AnonFront:
                    return i.createElement(l.a, {
                        items: e,
                        isLoading: n,
                        layout: c.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return i.createElement(m._25, {
                        className: "featured-broadcasters",
                        background: m.m.Base,
                        elevation: 1
                    }, i.createElement(m._2, {
                        padding: 1
                    }, i.createElement(m._35, {
                        fontSize: m.R.Size5,
                        color: m.I.Alt2
                    }, Object(o.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), i.createElement(l.a, {
                        items: e,
                        isLoading: n,
                        layout: c.c.Vertical
                    }))
            }
        }
        var g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getRender = function(e) {
                    var n = !(!t.props.data.loading && !t.props.data.error);
                    return f(e, t.props.renderContext, n)
                }, t
            }
            return a.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(d.a)(e);
                return this.getRender(t)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = a.__decorate([Object(s.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            language: o.n.intl.getLanguageCode(),
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
    e2wA: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    eY4D: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOfferList_PrimeOffers"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "dateOverride"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                            value: "primeOffers"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
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
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "claimInstructions"
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
                                    value: "deliveryMethod"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "priority"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "content"
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
                                            value: "externalURL"
                                        },
                                        arguments: [],
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
                                            value: "categories"
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
                end: 276
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOfferList_PrimeOffers($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    el3o: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "claimPrimeOffer"
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
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasEntitlement"
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
                end: 128
            }
        };
        n.loc.source = {
            body: "mutation claimPrimeOffer($input: ClaimPrimeOfferInput!) {\nclaimPrimeOffer(input: $input) {\nself {\nclaimData\nhasEntitlement\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    f8UT: function(e, t) {},
    g91j: function(e, t, n) {
        "use strict";
        var r, a = n("TToO"),
            i = n("6sO2"),
            o = n("/7C1");
        i.n.store.registerReducer("carouselPlayer", function(e, t) {
            switch (void 0 === e && (e = {
                isPlayerInitialized: !1
            }), t.type) {
                case o.b:
                    return r = t.player, a.__assign({}, e, {
                        isPlayerInitialized: !0
                    });
                case o.c:
                    return r = null, a.__assign({}, e, {
                        isPlayerInitialized: !1
                    });
                case o.a:
                    return e.isPlayerInitialized && r && r.pause(), e;
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
            f = n("CSlQ"),
            g = n("Odds"),
            h = (n("TUg1"), "carousel-card-live"),
            v = "carousel-card-vod",
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderIndicator = function() {
                        return t.props.item.content.type === p.b.Stream ? d.createElement(g.E, {
                            status: g.G.Live,
                            size: g.F.Small,
                            "data-test-selector": h
                        }) : d.createElement(g._15, {
                            asset: g._16.GlyphViews,
                            "data-test-selector": v
                        })
                    }, t.itemClick = function() {
                        t.props.itemClick(t.props.item)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = c({
                        "carousel-nav__item": !0,
                        "carousel-nav__item--active": this.props.itemActive
                    });
                    return d.createElement(g._2, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: g._9.Relative
                    }, d.createElement(g._43, {
                        label: (this.props.item.isSponsored ? Object(i.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: g._45.Top,
                        display: g.N.Block
                    }, d.createElement(g._0, a.__assign({
                        onClick: this.itemClick
                    }, Object(g._53)(this.props)), d.createElement(g.j, {
                        ratio: g.k.Aspect16x9
                    }, d.createElement(g._2, {
                        className: "carousel-nav__meta",
                        alignItems: g.c.Center,
                        attachBottom: !0,
                        margin: {
                            left: .5
                        },
                        zIndex: g._52.Above
                    }, this.renderIndicator(), d.createElement(g._2, {
                        display: g.N.InlineFlex,
                        margin: {
                            left: .5
                        }
                    }, d.createElement(g._35, {
                        color: g.I.Overlay,
                        type: g._40.Span
                    }, Object(i.e)(this.props.item.content.viewersCount)))), d.createElement(g._2, {
                        className: "carousel-nav__img-container"
                    }, d.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? d.createElement(g._2, {
                        position: g._9.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, d.createElement(g._15, {
                        asset: g._16.Featured,
                        type: g._17.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = a.__decorate([Object(f.d)("CarouselCard")], t)
            }(d.Component),
            k = n("lfvs"),
            y = n("F8kA"),
            b = n("SZoP"),
            E = n("fc0G");

        function N(e) {
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
        var S = {
                content: "carousel",
                medium: "twitch_home"
            },
            O = function(e) {
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
                                        state: S
                                    }
                                }, t.props.item.content.gameName)
                            }, "HorizontalCarouselPlayer"),
                            r = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy,
                                onVideoTimeChange: t.onVideoTimeChange
                            };
                        return d.createElement(g._25, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: g.N.Flex,
                            flexDirection: g.P.Row,
                            color: g.I.Alt
                        }, d.createElement(g._2, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, d.createElement(g._2, {
                            className: "horizontal-carousel-player__video",
                            position: g._9.Relative,
                            overflow: g._5.Hidden
                        }, N(r))), d.createElement(g._2, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, d.createElement(g._2, {
                            display: g.N.Flex,
                            flexWrap: g.Q.NoWrap,
                            textAlign: g._36.Left,
                            alignItems: g.c.Center,
                            padding: {
                                bottom: .5
                            }
                        }, d.createElement(g._2, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, d.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, d.createElement(y.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: S
                            },
                            "data-a-target": "carousel-profile-image"
                        }, d.createElement(g.l, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(i.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), d.createElement(g._2, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, d.createElement(g._35, {
                            fontSize: g.R.Size4,
                            color: g.I.Base,
                            lineHeight: g._3.Heading,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(b.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), d.createElement(g._35, {
                            fontSize: g.R.Size6,
                            color: g.I.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, d.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), d.createElement(g._2, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, d.createElement(y.a, {
                            to: t.getLinkForTitle()
                        }, d.createElement(g._35, {
                            type: g._40.Span,
                            "data-a-target": p.a,
                            fontSize: g.R.Size3,
                            lineHeight: g._3.Heading
                        }, t.props.item.title)))), d.createElement(k, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === p.b.Stream) return {
                            pathname: "/" + t.props.item.broadcaster.login,
                            state: S
                        };
                        var e = t.state && t.state.videoOffset || 0;
                        return {
                            pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                            state: S
                        }
                    }, t.getPlaceholderRender = function() {
                        var e = c("horizontal-carousel-player__details", {
                            "horizontal-carousel-player__details--overlay": t.props.darkTheme
                        });
                        return d.createElement(g._2, {
                            display: g.N.Flex,
                            flexWrap: g.Q.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(g._2, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, d.createElement(g.j, {
                            ratio: g.k.Aspect16x9
                        }, d.createElement(g._8, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), d.createElement(g._2, {
                            className: c(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, d.createElement(g._2, {
                            display: g.N.Flex,
                            flexWrap: g.Q.NoWrap,
                            textAlign: g._36.Left,
                            alignItems: g.c.Start
                        }, d.createElement(g._2, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, d.createElement(g._8, {
                            width: 40,
                            height: 40
                        })), d.createElement(g._2, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, d.createElement(g._35, null, d.createElement(g._8, {
                            width: 70
                        })), d.createElement(g._35, null, d.createElement(g._8, {
                            width: 70
                        })))), d.createElement(g._2, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement(g._35, null, d.createElement(g._8, {
                            lineCount: 1
                        })), d.createElement(g._35, null, d.createElement(g._8, {
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
            }(d.Component),
            C = n("hdYS"),
            w = (n("0v28"), function(e) {
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
                                    to: "/" + t.props.item.broadcaster.login,
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(b.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: d.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, d.createElement(y.a, {
                                    to: "/directory/game/" + t.props.item.content.gameName,
                                    "data-a-target": "carousel-broadcaster-game-name"
                                }, t.props.item.content.gameName))
                            }, "VerticalCarouselPlayer"),
                            r = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy
                            };
                        return d.createElement(g._25, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: g.I.Alt
                        }, d.createElement(g._2, {
                            className: "vertical-carousel-player__video",
                            position: g._9.Relative,
                            overflow: g._5.Hidden
                        }, N(r)), d.createElement(g._2, {
                            className: c(e),
                            display: g.N.Flex,
                            flexWrap: g.Q.NoWrap,
                            textAlign: g._36.Left,
                            alignItems: g.c.Center,
                            padding: {
                                y: 1
                            }
                        }, d.createElement(g._2, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, d.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, d.createElement(y.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, d.createElement(g.l, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(i.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), d.createElement(g._2, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, d.createElement(g._35, {
                            "data-a-target": p.a,
                            fontSize: g.R.Size5,
                            color: g.I.Base,
                            bold: !0
                        }, t.props.item.title), d.createElement(g._35, {
                            fontSize: g.R.Size6,
                            color: g.I.Base
                        }, n)), d.createElement(g._2, {
                            flexShrink: 0
                        }, t.props.firstPageLoaded ? d.createElement(C.a, {
                            showLoadingPlaceholder: !0,
                            channelLogin: t.props.item.broadcaster.login,
                            "data-a-target": "carousel-follow-button"
                        }) : d.createElement(g._8, {
                            width: 70,
                            height: 30
                        }))), d.createElement(k, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return d.createElement(g._2, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, d.createElement(g.j, {
                            ratio: g.k.Aspect16x9
                        }, d.createElement(g._8, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), d.createElement(g._2, {
                            display: g.N.Flex,
                            flexWrap: g.Q.NoWrap,
                            textAlign: g._36.Left,
                            alignItems: g.c.Center,
                            padding: {
                                y: 1
                            }
                        }, d.createElement(g._2, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, d.createElement(g._8, {
                            width: 40,
                            height: 40
                        })), d.createElement(g._2, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, d.createElement(g._35, null, d.createElement(g._8, {
                            width: 150
                        })), d.createElement(g._35, null, d.createElement(g._8, {
                            width: 100
                        }))), d.createElement(g._2, {
                            flexShrink: 0
                        }, d.createElement(g._8, {
                            width: 70,
                            height: 30
                        }))), d.createElement(g._35, null, d.createElement(g._8, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(d.Component));
        var x = Object(s.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(w),
            F = n("vH/s");

        function I(e) {
            i.m.track(F.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        }
        n("0OPT");
        var T = 6,
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > T) {
                            var e = t.state.startingIndex > 0;
                            return d.createElement(g._2, {
                                display: g.N.Flex,
                                alignItems: g.c.Stretch
                            }, d.createElement(g.v, {
                                ariaLabel: Object(i.d)("Page Left", "CarouselPlayerComponent"),
                                icon: g._16.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": p.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > T) {
                            var e = t.props.items.length > t.state.startingIndex + T;
                            return d.createElement(g._2, {
                                display: g.N.Flex,
                                alignItems: g.c.Stretch
                            }, d.createElement(g.v, {
                                ariaLabel: Object(i.d)("Page Right", "CarouselPlayerComponent"),
                                icon: g._16.AngleRight,
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
                        }), i.m.track(F.SpadeEventType.FrontPageCarouselDisplay, n), t.displayEventFired = !0), t.props.items.slice(t.state.startingIndex, t.state.startingIndex + T).map(function(e, n) {
                            return d.createElement(_, {
                                key: e.content.id,
                                item: e,
                                itemClick: t.selectContent,
                                itemActive: e.content.id === t.state.activeItem.content.id,
                                "data-a-target": "carousel-card-" + n
                            })
                        });
                        for (var r = [], a = 0; a < T; a++) r.push(d.createElement(g._2, {
                            key: a,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, d.createElement(g.j, {
                            ratio: g.k.Aspect16x9
                        }, d.createElement(g._8, null)), d.createElement(g._2, {
                            margin: {
                                top: .5
                            }
                        }, d.createElement(g._8, {
                            height: 4
                        }))));
                        return r
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
                                return d.createElement(x, a.__assign({}, e));
                            default:
                                return d.createElement(O, a.__assign({}, e))
                        }
                    }, t.registerCarousel = function(e) {
                        t.props.registerCarousel && t.props.registerCarousel(e)
                    }, t.unregisterCarousel = function() {
                        t.props.unregisterCarousel && t.props.unregisterCarousel()
                    }, t.selectContent = function(e) {
                        t.setState({
                            activeItem: e
                        });
                        var n, r = {
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        };
                        n = r, i.m.track(F.SpadeEventType.FrontPageCarouselClick, n)
                    }, t.trackPromotionClick = function(e, n) {
                        var r = e.broadcaster,
                            o = e.content,
                            s = e.isScheduled;
                        ! function(e, t) {
                            var n = a.__assign({
                                clicked_element: t
                            }, e);
                            i.m.track(F.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
                        }({
                            broadcast_type: o.subType,
                            carousel_index: t.props.items.indexOf(t.state.activeItem),
                            channel: r.displayName,
                            game: o.gameName,
                            promotion_was_scheduled: s,
                            views: o.viewersCount
                        }, n)
                    }, t.trackPromotionView = function(e) {
                        var n, r = {
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        };
                        n = r, i.m.track(F.SpadeEventType.FrontPageCarouselPromotionCardView, n)
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - T;
                        e !== t.state.startingIndex && (I("next"), t.setState({
                            startingIndex: e
                        }))
                    }, t.handlePageLeft = function() {
                        t.state.startingIndex > 0 && (I("prev"), t.setState({
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
                    return this.props.darkTheme && (e = Object(m.c)(u.a.Dark)), d.createElement(g._2, {
                        className: c("carousel-player", e)
                    }, this.getLayoutRender(), d.createElement(g._25, {
                        background: g.m.Alt
                    }, d.createElement(g._2, {
                        display: g.N.Flex,
                        flexWrap: g.Q.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = a.__decorate([Object(f.d)("CarouselPlayer")], t)
            }(d.Component);
        var P = Object(s.b)(null, function(e) {
            return Object(l.b)({
                registerCarousel: o.e,
                unregisterCarousel: o.f
            }, e)
        })(L);
        n.d(t, "a", function() {
            return P
        })
    },
    i6UE: function(e, t) {},
    "j7/Y": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            a = n("OAwv"),
            i = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2");

        function l(e) {
            return function(t) {
                var n = function(n) {
                    function o(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var i = a.referenceTracking,
                                    o = i.content,
                                    l = i.medium,
                                    c = i.content_index;
                                s.n.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return r.__extends(o, n), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return i.createElement(t, r.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var r = "",
                                i = a.stringify(t);
                            i.length > 0 && (r = "?" + i), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: r
                            })
                        }
                        return n
                    }, o
                }(i.Component);
                return Object(o.f)(n)
            }
        }
        n.d(t, "a", function() {
            return l
        })
    },
    nFc2: function(e, t) {},
    o8Pq: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("bNhH");
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return r.b
        }), n.d(t, "placeholderFeaturedBroadcasters", function() {
            return r.c
        }), n.d(t, "FeaturedBroadcasters", function() {
            return r.a
        })
    },
    pqU3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "b", function() {
            return i
        }), t.d = function(e) {
            return {
                type: i,
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
                type: r,
                apiData: e,
                championsMap: t,
                apiVersion: e.version
            }
        };
        var r = "directory.LOL_CHAMPIONS_CHANGED",
            a = "directory.LOL_CHAMPIONS_LOADING",
            i = "directory.LOL_CHAMPIONS_ERRORED"
    },
    rM0q: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    sq7i: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 41
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    tTbW: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_PrimeOfferIds"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "dateOverride"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                            value: "primeOffers"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
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
                end: 144
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_PrimeOfferIds($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    ukY1: function(e, t) {},
    "v+rJ": function(e, t) {},
    "w/8h": function(e, t) {},
    wjhu: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_CurrentUser"
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
                                    value: "hasPrime"
                                },
                                arguments: [],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 95
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.anon-front-1605e102cad2a59af6893f3884c29082.js.map