webpackJsonp([52], {
    "+GT7": function(e, t, n) {
        "use strict";
        var a, r = n("TToO"),
            i = n("U7vG"),
            o = n("F8kA"),
            s = n("6sO2"),
            l = n("IOwa"),
            d = n("RH2O"),
            c = n("2KeS"),
            u = n("PPNL"),
            m = n("/SNv"),
            p = n.n(m),
            g = n("Vr3l"),
            h = n.n(g);
        ! function(e) {
            e[e.Hearthstone = 0] = "Hearthstone", e[e.LeagueOfLegends = 1] = "LeagueOfLegends", e[e.Overwatch = 2] = "Overwatch"
        }(a || (a = {}));
        var y = this,
            v = function() {
                return r.__awaiter(y, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(71).then(n.bind(null, "e/M0"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            f = function() {
                return r.__awaiter(y, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(70).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            b = n("Odds"),
            k = (n("AHWf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = s.n.logger.withCategory("metadata-icon"), t.didUnmount = !1, t.loadData = function() {
                        if (!t.state.isLoading && !t.state.isError && t.props.streamMetadata && !t.state.content) {
                            var e = t.props.streamMetadata.hearthstone && t.props.streamMetadata.hearthstone.broadcasterHeroClass,
                                n = t.props.streamMetadata.leagueOfLegends && t.props.streamMetadata.leagueOfLegends.championID,
                                r = t.props.streamMetadata.overwatch && t.props.streamMetadata.overwatch.broadcasterCharacter;
                            e ? (t.setState({
                                game: a.Hearthstone,
                                gameSprite: p.a,
                                item: e,
                                isLoading: !0
                            }), t.getHearthstoneData()) : n ? (t.setState({
                                game: a.LeagueOfLegends,
                                item: n.toString()
                            }), t.getLeagueData()) : r && (t.setState({
                                game: a.Overwatch,
                                gameSprite: h.a,
                                item: r,
                                isLoading: !0
                            }), t.getOverwatchData())
                        }
                    }, t.renderIcon = function(e, t, n, a, r, o) {
                        return n ? i.createElement(b.Z, {
                            display: b.L.Flex,
                            flexDirection: b.N.Column,
                            alignItems: b.c.Center,
                            justifyContent: b.Y.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(b._33, {
                            direction: b._35.Left,
                            label: e
                        }, i.createElement(b.Z, {
                            className: "metadata-icon"
                        }, i.createElement("div", {
                            style: {
                                backgroundImage: "url(" + t + ")",
                                backgroundPositionX: r ? -1 * r : 0,
                                backgroundPositionY: o ? -1 * o : 0,
                                width: n ? n + "px" : "3rem",
                                height: n ? a + "px" : "3rem",
                                transform: "scale(" + (n > 0 ? 30 / n : 1) + ")",
                                transformOrigin: "0 0"
                            }
                        })))) : null
                    }, t.getHearthstoneData = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, v()];
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
                            var e, t, n, a, i, o, s, l, d, c, u, m, p;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, f()];
                                    case 1:
                                        if (e = r.sent(), this.didUnmount) return [2];
                                        for (t = !1, n = void 0, a = 0, i = e; a < i.length && (n = i[a], !t); a++)
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
            _ = Object(d.b)(function(e) {
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
            })(k),
            S = (n("LEV+"), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
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
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = i.createElement(b.Z, {
                        display: b.L.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, i.createElement(b._3, {
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
                    }, Object(b._43)(this.props)), i.createElement(b.A, {
                        key: this.props.title
                    }, i.createElement(b.Z, {
                        fullWidth: !0
                    }, i.createElement(b.j, {
                        overflow: !0
                    }, i.createElement("div", null, i.createElement(o.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, i.createElement(b.C, {
                        alt: this.props.imageAlt,
                        src: this.props.imageSrc,
                        aspect: b.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), i.createElement(b.B, null, i.createElement(b.Z, {
                        display: b.L.Flex,
                        flexWrap: b.O.NoWrap
                    }, i.createElement(b.Z, {
                        flexGrow: 1,
                        ellipsis: !0
                    }, i.createElement(o.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, i.createElement(b.U, {
                        margin: {
                            top: .5
                        }
                    }, i.createElement(b._25, {
                        type: b._30.H3,
                        fontSize: b.P.Size5,
                        lineHeight: b._0.Body,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), i.createElement(b.Z, {
                        className: "live-channel-card__meta",
                        display: b.L.Flex,
                        flexWrap: b.O.NoWrap
                    }, e, i.createElement(b._25, {
                        type: b._30.Span,
                        ellipsis: !0
                    }, t))), i.createElement(b.Z, {
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
                    }, i.createElement(b._21, {
                        className: "live-channel-card__boxart",
                        position: b._6.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, i.createElement(b._33, {
                        display: b.L.Block,
                        direction: b._35.Bottom,
                        label: t
                    }, i.createElement(b.C, {
                        src: n,
                        alt: t,
                        aspect: b.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? i.createElement(b.Z, {
                        position: b._6.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, i.createElement(l.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? i.createElement(_, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(i.Component)),
            C = S;
        n.d(t, !1, function() {
            return S
        }), n.d(t, "a", function() {
            return C
        })
    },
    "/+to": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            r = n("TToO"),
            i = n("U7vG"),
            o = n("6sO2"),
            s = n("Us7i"),
            l = n("QG7y"),
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = o.i.withCategory("ad-slot"), n.createSlot = function(e) {
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
                            if (n.props.slotID === l.b.directory.banner) {
                                return void((a = n.slotRef.querySelector(d)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === l.b.directory.rectangle) {
                                var a;
                                return void((a = n.slotRef.querySelector(c)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
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
                    l.g.addListener(l.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), l.g.removeListener(l.f, this.onSlotRenderEnd), this.state.slot && s.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = r.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), i.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(i.Component),
            m = Object(a.b)(function(e) {
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
    "4pV0": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowsePage_Popular"
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
                }, {
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
                                    value: "Language"
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
                                value: "platformType"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "platformType"
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
            }],
            loc: {
                start: 0,
                end: 405
            }
        };
        n.loc.source = {
            body: "query BrowsePage_Popular($limit: Int $cursor: Cursor $platformType: PlatformType $languages: [Language!]) {\nstreams(first: $limit after: $cursor platformType: $platformType languages: $languages) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}",
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
        var a = n("RH2O"),
            r = n("2KeS"),
            i = n("iJpA"),
            o = n("c8Oh"),
            s = n("TToO"),
            l = n("U7vG"),
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
                            a = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        a && t.props.updateLanguagePreferences(a, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return l.createElement(g.Z, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, l.createElement(g.H, {
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
                    return l.createElement(g.Z, {
                        className: "language-select-menu"
                    }, l.createElement(u.a, null, l.createElement(g.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: g.z.Hollow
                    }, l.createElement(g.Z, {
                        display: g.L.Flex
                    }, Object(d.d)("Language", "LanguageSelectMenu"), l.createElement(g.Z, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && l.createElement(g._3, {
                        type: g._4.Brand,
                        label: e.toString()
                    })))), l.createElement(g.p, {
                        direction: g.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, l.createElement(c.b, {
                        className: "language-select-menu__balloon"
                    }, l.createElement(g.Z, {
                        padding: .5
                    }, Object(m.b)().map(this.renderLanguageOption))), l.createElement(g._21, {
                        background: g.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, l.createElement(g.u, {
                        type: g.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(d.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = s.__decorate([Object(p.d)("LanguageSelectMenu")], t)
            }(l.Component)),
            y = Object(a.b)(function(e) {
                return {
                    languagePreferences: Object(o.a)(e)
                }
            }, function(e) {
                return Object(r.b)({
                    updateLanguagePreferences: i.c,
                    clearLanguagePreferences: i.a
                }, e)
            })(h);
        n.d(t, "a", function() {
            return y
        })
    },
    "7FW4": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = a.createElement(o.Z, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.N.Column,
                justifyContent: o.Y.Center,
                display: o.L.Flex
            }, a.createElement(o._25, {
                color: o.I.Link,
                fontSize: o.P.Size4,
                noWrap: !0
            }, Object(i.d)("View All", "Following--ViewAllButton")), a.createElement(o._25, {
                color: o.I.Alt2,
                fontSize: o.P.Size4,
                noWrap: !0
            }, e.subHeader));
            return e.linkTo && (t = a.createElement(r.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t)), a.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": l
            }, a.createElement(o.Z, null, a.createElement(o.j, {
                ratio: e.aspectRatio
            }, a.createElement(o._21, {
                background: o.m.Alt2,
                fullHeight: !0
            }, t))))
        };
        var a = n("U7vG"),
            r = (n.n(a), n("F8kA")),
            i = n("6sO2"),
            o = n("Odds"),
            s = n("oHn4"),
            l = (n.n(s), "view-all-button-selector")
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var a = n("TToO"),
            r = n("6sO2"),
            i = n("Aj/L"),
            o = "application/json; charset=UTF-8",
            s = function() {
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
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), a.__awaiter(this, void 0, void 0, function() {
                        var r, i;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, r), [4, this._fetch(e, t)];
                                case 1:
                                    return i = a.sent(), [4, this.constructLegacyAPIResponse(i)];
                                case 2:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, r.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n, r;
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
                                    return r = a.sent(), t.requestError = r, [3, 4];
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
                    return t === o ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = r.n.store.getState(),
                        a = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (a["Content-Type"] = o);
                    var s = Object(i.c)(n);
                    return s && (a.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (a["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        a[e] && delete a[e]
                    }), a
                }, e
            }()
    },
    AHWf: function(e, t) {},
    AadB: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("U7vG"),
            i = n("6sO2"),
            o = n("+GT7"),
            s = n("SZoP"),
            l = n("NY9D"),
            d = n("vH/s"),
            c = n("v5ho"),
            u = n("RH2O"),
            m = n("2KeS"),
            p = n("V5M+"),
            g = n("jetF"),
            h = n("7vx8"),
            y = n("CSlQ"),
            v = n("3zLD"),
            f = n("+8VM"),
            b = n("oIkB"),
            k = function(e) {
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
            },
            _ = n("Odds"),
            S = n("nC3l"),
            C = (n("sJt0"), "error-message"),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? r.createElement(_.Z, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(_._25, {
                            color: _.I.Error,
                            type: _._30.H4,
                            "data-test-selector": C
                        }, k(t.state.error))) : null
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
                                        return this.props.banUserFromCommunity ? (e = a.__assign({}, Object(b.a)({
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
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (i.n.tracking.track(d.SpadeEventType.CommunityModeration, {
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
                    return r.createElement(_.U, {
                        position: _._6.Relative
                    }, r.createElement(_._21, {
                        background: _.m.Base,
                        className: "stream-ban-modal"
                    }, r.createElement(_.Z, {
                        padding: 2
                    }, this.renderErrorMessage(), r.createElement(_.Z, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(_._25, {
                        type: _._30.H4
                    }, Object(i.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), r.createElement(_._21, {
                        borderTop: !0
                    }, r.createElement(_.Z, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(_._25, {
                        bold: !0
                    }, Object(i.d)("Reason (Required)", "StreamBanModal")), r.createElement(_.V, {
                        type: _.W.Text,
                        placeholder: Object(i.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), r.createElement(_._21, {
                        borderTop: !0
                    }, r.createElement(_.Z, {
                        padding: {
                            top: 2
                        },
                        textAlign: _._26.Center
                    }, r.createElement(_.Z, {
                        display: _.L.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(_.u, {
                        type: _.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(i.d)("Cancel", "StreamBanModal"))), r.createElement(_.Z, {
                        display: _.L.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(_.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(i.d)("Ban", "StreamBanModal")))))), r.createElement(f.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            E = Object(v.compose)(Object(h.a)(S, {
                name: "banUserFromCommunity"
            }))(w),
            N = Object(u.b)(null, function(e) {
                return Object(m.b)({
                    onCloseModal: p.c
                }, e)
            })(E),
            O = (n("npyu"), n("plcU")),
            T = "error-message",
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? r.createElement(_.Z, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(_._25, {
                            color: _.I.Error,
                            type: _._30.H4,
                            "data-test-selector": T
                        }, k(t.state.error))) : null
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
                                        return this.props.timeoutUserFromCommunity ? (e = a.__assign({}, Object(b.a)({
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
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (i.n.tracking.track(d.SpadeEventType.CommunityModeration, {
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
                    return r.createElement(_.U, {
                        position: _._6.Relative
                    }, r.createElement(_._21, {
                        background: _.m.Base,
                        className: "stream-timeout-modal"
                    }, r.createElement(_.Z, {
                        padding: 2
                    }, this.renderErrorMessage(), r.createElement(_.Z, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(_._25, {
                        type: _._30.H4
                    }, Object(i.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), r.createElement(_._21, {
                        borderTop: !0
                    }, r.createElement(_.Z, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(_._25, {
                        bold: !0
                    }, Object(i.d)("Reason (Required)", "StreamTimeoutModal")), r.createElement(_.V, {
                        type: _.W.Text,
                        placeholder: Object(i.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), r.createElement(_.Z, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(_._25, {
                        bold: !0
                    }, Object(i.d)("Duration", "StreamTimeoutModal")), r.createElement(_._18, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, r.createElement("option", {
                        value: "2"
                    }, Object(i.d)("2 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "4"
                    }, Object(i.d)("4 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "8"
                    }, Object(i.d)("8 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "12"
                    }, Object(i.d)("12 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "24"
                    }, Object(i.d)("24 hours", "StreamTimeoutModal")))), r.createElement(_._21, {
                        borderTop: !0
                    }, r.createElement(_.Z, {
                        padding: {
                            top: 2
                        },
                        textAlign: _._26.Center
                    }, r.createElement(_.Z, {
                        display: _.L.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(_.u, {
                        type: _.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(i.d)("Cancel", "StreamTimeoutModal"))), r.createElement(_.Z, {
                        display: _.L.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(_.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(i.d)("Timeout", "StreamTimeoutModal")))))), r.createElement(f.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            L = Object(v.compose)(Object(h.a)(O, {
                name: "timeoutUserFromCommunity"
            }))(P),
            I = Object(u.b)(null, function(e) {
                return Object(m.b)({
                    onCloseModal: p.c
                }, e)
            })(L),
            D = n("PO03"),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(s.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(N, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(s.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(I, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? r.createElement(g.a, null, r.createElement(_.v, {
                        ariaLabel: Object(i.d)("Moderation", "DirectoryGamePage"),
                        icon: _._13.ChatRiskFlag
                    }), r.createElement(_.p, {
                        direction: _.q.BottomRight,
                        size: _.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? r.createElement(_.X, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, r.createElement(_.Z, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(i.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? r.createElement(_.X, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, r.createElement(_.Z, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(i.d)("Timeout", "StreamFlag"))) : null
                }, t = a.__decorate([Object(h.a)(D, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(y.d)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component),
            R = Object(u.b)(null, function(e) {
                return Object(m.b)({
                    onShowModal: p.d
                }, e)
            })(j),
            F = n("PLRK"),
            x = (n("GiGb"), "directory-game__card_container"),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getLinkTo = function(e, n) {
                        var a = t.props.trackingContent ? t.props.trackingContent : d.PageviewContent.Live,
                            r = t.props.directoryType === c.a.Communities ? d.PageviewMedium.Community : d.PageviewMedium.Game;
                        return t.props.trackingMedium && (r = t.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: r,
                                content: a,
                                content_index: n
                            }
                        }
                    }, t.renderStreamFlag = function() {
                        var e = t.props.streamNode;
                        return e.broadcaster ? t.props.directoryType === c.a.Communities && t.props.directoryName ? r.createElement(_.Z, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: _._6.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, r.createElement(R, {
                            communityName: t.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, t.shouldShowGame = function(e) {
                        return t.props.directoryType !== c.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.streamNode,
                        t = this.props.streamIndex;
                    return e.broadcaster ? r.createElement("div", {
                        className: "stream-thumbnail",
                        "data-target": t ? "" : "directory-first-item",
                        style: {
                            order: t
                        }
                    }, r.createElement(_.Z, {
                        className: "stream-thumbnail__card",
                        position: _._6.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": x
                    }, r.createElement(o.a, {
                        imageSrc: e.previewImageURL || i.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || F.a,
                        channelName: Object(s.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: this.shouldShowGame("boxArtURL") || i.a.defaultBoxArtURL,
                        gameTitle: this.shouldShowGame("name"),
                        gameLinkTo: this.getLinkTo(Object(l.c)(this.shouldShowGame("name")), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type,
                        streamMetadata: e.streamMetadata,
                        "data-a-target": "card-" + t,
                        "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                    }), this.renderStreamFlag())) : null
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return x
        }), n.d(t, "b", function() {
            return A
        })
    },
    CybZ: function(e, t) {},
    D9fv: function(e, t, n) {
        "use strict";

        function a(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(r.d)("Other", "broadcaster-languages") : "Other"
            }]
        }
        n.d(t, "a", function() {
            return o
        }), t.b = function() {
            var e = r.n.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return i.slice().sort(function(e, n) {
                var a = t(e),
                    r = t(n);
                return a !== r ? a - r : a + ":" + e.label < r + ":" + n.label ? -1 : 1
            }).concat(a(!0))
        };
        var r = n("6sO2"),
            i = [{
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
            o = new Set(i.concat(a()).map(function(e) {
                return e.code
            }))
    },
    Dd84: function(e, t, n) {
        "use strict";

        function a(e) {
            switch (e) {
                case T.a.Channels:
                    return Object(c.d)("Channels", "NewBrowseHeader");
                case T.a.Communities:
                    return Object(c.d)("Communities", "NewBrowseHeader");
                case T.a.CreativeCommunities:
                    return Object(c.d)("Creative Communities", "NewBrowseHeader");
                case T.a.Games:
                    return Object(c.d)("Games", "NewBrowseHeader");
                default:
                    return Object(c.d)("Games and Communities", "NewBrowseHeader")
            }
        }

        function r(e) {
            switch (e) {
                case L.a.Relevancy:
                    return Object(c.d)("Relevancy", "BrowseHeader");
                default:
                    return Object(c.d)("Popularity", "BrowseHeader")
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("mmuw"),
            s = n("TToO"),
            l = n("U7vG"),
            d = n("3zLD"),
            c = n("6sO2"),
            u = n("j7/Y"),
            m = n("w9tK"),
            p = n("vH/s"),
            g = n("CSlQ"),
            h = n("RH2O"),
            y = n("2KeS"),
            v = n("UAN1"),
            f = n("F8kA"),
            b = n("yWCw"),
            k = n("zCIC"),
            _ = n("7vx8"),
            S = n("oIkB"),
            C = n("NY9D"),
            w = n("Us7i"),
            E = n("/+to"),
            N = n("QG7y"),
            O = n("eXld"),
            T = n("dzKs"),
            P = n("v5ho"),
            L = n("r4vp"),
            I = n("Odds"),
            D = n("lYCI"),
            j = "directory-first-item",
            R = "directory-container",
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onWindowResize = function() {
                        return requestAnimationFrame(t.updateDisplayAdOrder)
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + R + '"]'),
                            t = document.querySelector('[data-target="' + j + '"]'),
                            n = document.querySelector("#" + N.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(N.b.directory).length && w.a.display(N.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentWillMount = function() {
                    N.g.addListener(N.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), N.g.removeListener(N.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directories) return l.createElement(I._1, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return l.createElement(b.a, {
                        message: Object(c.d)("Error loading data.", "BrowseDirectory")
                    });
                    var t = this.props.category === T.a.Communities ? p.PageviewContent.Community : p.PageviewContent.Game,
                        n = this.props.data.directories.edges.map(function(n, a) {
                            var r = n.node;
                            return l.createElement("div", {
                                key: r.id,
                                "data-target": a ? "" : j,
                                style: {
                                    order: a
                                }
                            }, l.createElement(I.Z, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-page__card-container"
                            }, l.createElement(I.t, {
                                linkTo: {
                                    pathname: e.getPathURL(r.name, r.directoryType),
                                    state: {
                                        content: t,
                                        content_index: a,
                                        medium: p.PageviewMedium.Browse
                                    }
                                },
                                title: r.displayName,
                                alt: Object(c.d)("{displayName} cover image", {
                                    displayName: r.displayName
                                }, "BrowseDirectory"),
                                src: r.avatarURL,
                                info: Object(c.d)("{viewerCount,number} viewers", {
                                    viewerCount: r.viewersCount
                                }, "BrowseDirectory"),
                                "data-a-target": "card-" + a,
                                "data-a-id": "card-" + r.displayName.replace(/ /g, "")
                            })))
                        }),
                        a = !this.props.data.loading && !this.props.data.error && !!this.props.data.directories.pageInfo.hasNextPage;
                    return l.createElement(I.Z, null, l.createElement(O.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), l.createElement("div", {
                        "data-target": R
                    }, l.createElement(I._36, {
                        gutterSize: I._38.Small,
                        childWidth: I._37.Small,
                        placeholderItems: 20
                    }, l.createElement(E.a, {
                        key: -1,
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 20,
                            order: 999,
                            width: 300,
                            height: 250
                        },
                        adUnit: N.d.directory,
                        slotID: N.b.directory.rectangle,
                        adSize: N.c.directory.rectangle,
                        targeting: {
                            pagetype: N.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), n), l.createElement(k.a, {
                        enabled: a,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 300
                    })), this.props.children)
                }, t.prototype.getPathURL = function(e, t) {
                    return "COMMUNITY" === t || this.props.category === T.a.Communities || this.props.category === T.a.CreativeCommunities ? Object(C.a)(e) : Object(C.c)(e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t
            }(l.Component),
            x = Object(d.compose)(Object(g.d)("BrowseDirectory"), Object(_.a)(D, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: 30,
                            directoryFilters: function(e) {
                                switch (e) {
                                    case T.a.Communities:
                                        return [P.a.Communities, P.a.Creative];
                                    case T.a.Games:
                                        return [P.a.Games];
                                    case T.a.CreativeCommunities:
                                        return [P.a.Creative];
                                    default:
                                        return [P.a.Communities, P.a.Creative, P.a.Games]
                                }
                            }(e.browseType),
                            directorySort: function(e) {
                                return e === L.a.Relevancy ? "RELEVANCE" : "VIEWER_COUNT"
                            }(e.sortBy)
                        }
                    }
                },
                props: function(e) {
                    return s.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: D,
                                variables: s.__assign({}, e.data.variables, {
                                    cursor: e.data.directories.edges[e.data.directories.edges.length - 5].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        directories: s.__assign({}, n.directories, {
                                            edges: Object(S.b)(e.directories.edges, n.directories.edges)
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }))(Object(f.f)(F)),
            A = Object(h.b)(function(e) {
                return {
                    browseType: e.browse.browseType,
                    lastBrowsePath: e.browse.lastBrowsePath,
                    sideNavExpanded: e.ui.sideNavExpanded,
                    sortBy: e.browse.sortBy
                }
            }, function(e) {
                return Object(y.b)({
                    changeLastBrowsePath: v.e
                }, e)
            })(x),
            B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.n.setPageTitle(Object(c.d)("Communities", "BrowseCommunitiesPage"))
                }, t.prototype.render = function() {
                    return l.createElement(A, {
                        category: T.a.Communities
                    })
                }, t
            }(l.Component),
            U = Object(d.compose)(Object(g.d)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: m.a.BrowseCommunities
            }), Object(u.a)({
                location: p.PageviewLocation.BrowseCommunities
            }))(B),
            M = function() {
                return l.createElement(I._21, {
                    borderTop: !0,
                    padding: {
                        top: 3
                    },
                    textAlign: I._26.Center
                }, l.createElement(I._25, {
                    fontSize: I.P.Size4,
                    color: I.I.Alt2
                }, Object(c.d)("Not what you're looking for?", "BrowseCreativePage")), l.createElement(I.Z, {
                    margin: {
                        top: 2
                    }
                }, l.createElement(I.u, {
                    type: I.z.Hollow,
                    linkTo: "/directory/game/creative",
                    "data-a-target": "view-all-creative"
                }, Object(c.d)("View All Creative Broadcasters", "BrowseCreativePage"))))
            },
            H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.n.setPageTitle(Object(c.d)("Creative", "BrowseCreativePage"))
                }, t.prototype.render = function() {
                    return l.createElement(A, {
                        category: T.a.CreativeCommunities
                    }, l.createElement(M, null))
                }, t
            }(l.Component),
            V = Object(d.compose)(Object(g.d)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: m.a.BrowseCreative
            }), Object(u.a)({
                location: p.PageviewLocation.BrowseCreative
            }))(H),
            G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(A, {
                        category: T.a.GamesAndCommunities
                    })
                }, t
            }(l.Component),
            z = Object(d.compose)(Object(g.d)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: m.a.BrowseGamesAndCommunities
            }), Object(u.a)({
                location: p.PageviewLocation.Browse
            }))(G),
            W = n("CIox"),
            Z = n("6yQB"),
            q = n("czpb"),
            $ = n("+Znq");
        ! function(e) {
            e.Communities = "/directory/communities", e.CreativeCommunities = "/directory/creative", e.Games = "/directory/games", e.GamesAndCommunities = "/directory", e.DirectoryCategory = "/directory/:category?", e.Popular = "/directory/all", e.PopularEncodedLanguage = "/directory/all/:encodedLanguage", e.PopularPlaystation = "/directory/all/ps4", e.PopularXbox = "/directory/all/xbox"
        }(i || (i = {}));
        var Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.typeChangeHandler = function(e) {
                        t.balloonWrapperRef.toggleBalloon(!1);
                        switch (e.currentTarget.getAttribute("data-filter-type")) {
                            case T.a.Channels:
                                c.n.history.push(i.Popular), t.props.changeBrowseType(T.a.Channels);
                                break;
                            case T.a.Communities:
                                c.n.history.push(i.Communities), t.props.changeBrowseType(T.a.Communities);
                                break;
                            case T.a.CreativeCommunities:
                                c.n.history.push(i.CreativeCommunities), t.props.changeBrowseType(T.a.CreativeCommunities);
                                break;
                            case T.a.Games:
                                c.n.history.push(i.GamesAndCommunities), t.props.changeBrowseType(T.a.Games);
                                break;
                            default:
                                c.n.history.push(i.GamesAndCommunities), t.props.changeBrowseType(T.a.GamesAndCommunities)
                        }
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(I.Z, {
                        display: I.L.Flex
                    }, l.createElement(I.Z, {
                        display: I.L.InlineFlex
                    }, l.createElement($.a, {
                        ref: this.saveBalloonWrapperRef
                    }, l.createElement(I.u, {
                        type: I.z.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "browse-filter-dropdown",
                        dropdown: !0
                    }, a(this.props.browseType)), l.createElement(I.p, {
                        direction: I.q.Bottom,
                        noTail: !0
                    }, l.createElement(I.Z, {
                        padding: {
                            y: 1
                        }
                    }, this.renderFilterItem(T.a.Games), this.renderFilterItem(T.a.Communities), this.renderFilterItem(T.a.GamesAndCommunities), this.renderFilterItem(T.a.CreativeCommunities), this.renderFilterItem(T.a.Channels))))))
                }, t.prototype.renderFilterItem = function(e) {
                    return l.createElement(I.X, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": e,
                        "data-test-selector": e + "-selector",
                        "data-a-target": "browse-" + e + "-button",
                        selected: this.props.browseType === e
                    }, l.createElement(I.Z, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, a(e)))
                }, t
            }(l.Component),
            X = Object(h.b)(function(e) {
                return {
                    browseType: Object(o.b)(e)
                }
            }, function(e) {
                return Object(y.b)({
                    changeBrowseType: v.d
                }, e)
            })(Y),
            Q = n("Y6wo"),
            K = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(I.Z, {
                        display: I.L.Flex
                    }, l.createElement(I.Z, {
                        display: I.L.InlineFlex
                    }, l.createElement($.a, {
                        ref: this.saveBalloonWrapperRef
                    }, l.createElement(I.u, {
                        type: I.z.Hollow,
                        "data-test-selector": "sort-dropdown-button",
                        dropdown: !0
                    }, r(this.props.sortBy)), l.createElement(I.p, {
                        direction: I.q.Bottom,
                        noTail: !0
                    }, l.createElement(I.Z, {
                        padding: {
                            y: 1
                        }
                    }, this.renderSortItem(L.a.Popularity), this.renderSortItem(L.a.Relevancy))))))
                }, t.prototype.renderSortItem = function(e) {
                    var t = this;
                    return l.createElement(I.X, {
                        onClick: function() {
                            t.balloonWrapperRef.toggleBalloon(!1), t.props.changeSortBy(e), Object(Q.b)("sortBy", e)
                        },
                        "data-test-selector": e + "-selector",
                        selected: this.props.sortBy === e
                    }, l.createElement(I.Z, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r(e)))
                }, t
            }(l.Component),
            J = Object(h.b)(function(e) {
                return {
                    sortBy: Object(o.a)(e)
                }
            }, function(e) {
                return Object(y.b)({
                    changeSortBy: v.f
                }, e)
            })(K),
            ee = function(e) {
                return e === i.Popular || e === i.PopularEncodedLanguage || e === i.PopularPlaystation || e === i.PopularXbox
            },
            te = n("HW6M"),
            ne = (n("R0TX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.typeChangeHandler = function(e) {
                        t.balloonWrapperRef.toggleBalloon(!1);
                        var n = e.currentTarget.getAttribute("data-filter-type");
                        "all" === n ? c.n.history.push("/directory/all/") : c.n.history.push("/directory/all/" + n)
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e, t = Object(c.d)("All Platforms", "PlatformFilter"),
                        n = Object(c.d)("Xbox One", "PlatformFilter"),
                        a = Object(c.d)("PlayStation 4", "PlatformFilter");
                    switch (this.props.broadcastType) {
                        case "xbox":
                            e = n;
                            break;
                        case "ps4":
                            e = a;
                            break;
                        default:
                            e = t
                    }
                    return l.createElement(I.Z, {
                        display: I.L.Flex
                    }, l.createElement("div", null, l.createElement(I.Z, {
                        display: I.L.InlineFlex
                    }, l.createElement($.a, {
                        ref: this.saveBalloonWrapperRef,
                        "data-a-target": "platform-filter-balloon"
                    }, l.createElement(I.u, {
                        type: I.z.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "platform-filter-dropdown",
                        dropdown: !0
                    }, e), l.createElement(I.p, {
                        direction: I.q.Bottom,
                        noTail: !0
                    }, l.createElement(I.Z, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, this.renderFilterItem("all", t, "filter-item-all"), this.renderFilterItem("xbox", n, "filter-item-xbox"), this.renderFilterItem("ps4", a, "filter-item-ps4")))))))
                }, t.prototype.renderFilterItem = function(e, t, n) {
                    var a = te("platform-filter", {
                        "platform-filter--active": !this.props.broadcastType || this.props.broadcastType === e
                    });
                    return l.createElement(I.X, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": e,
                        "data-a-target": "platform-filter-" + e + "-button"
                    }, l.createElement(I.Z, {
                        className: a,
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": n
                    }, t))
                }, t
            }(l.Component)),
            ae = {
                "/directory/all": "all",
                "/directory/all/:encodedLanguage": "all",
                "/directory/all/xbox": "xbox",
                "/directory/all/xb1": "xbox",
                "/directory/all/ps4": "ps4"
            },
            re = "create-community-button",
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSortOrStream = function() {
                        return ee(t.props.match.path) ? Object(c.d)("Show me {filter} streaming from {platform}", {
                            filter: l.createElement(I.Z, {
                                margin: {
                                    x: 1
                                }
                            }, l.createElement(X, null)),
                            platform: l.createElement(I.Z, {
                                margin: {
                                    x: 1
                                }
                            }, l.createElement(ne, {
                                broadcastType: ae[decodeURIComponent(t.props.match.path)] || "all"
                            }))
                        }, "NewBrowseHeader") : Object(c.d)("Show me {filter} sorted by {sort}", {
                            filter: l.createElement(I.Z, {
                                margin: {
                                    x: 1
                                }
                            }, l.createElement(X, null)),
                            sort: l.createElement(I.Z, {
                                margin: {
                                    x: 1
                                }
                            }, l.createElement(J, null))
                        }, "NewBrowseHeader")
                    }, t.renderCreateCommunity = function() {
                        return t.props.location.pathname !== i.Communities ? null : l.createElement(I.u, {
                            type: I.z.Hollow,
                            linkTo: Object(q.a)("/communities/create"),
                            "data-test-selector": re
                        }, Object(c.d)("Create Community", "NewBrowseHeader"))
                    }, t.renderLanguageSelect = function() {
                        return ee(t.props.match.path) ? l.createElement(Z.a, null) : null
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(I._21, {
                        background: I.m.Base,
                        border: !0,
                        display: I.L.Flex,
                        flexDirection: I.N.Row,
                        margin: {
                            bottom: 2
                        },
                        padding: 2
                    }, l.createElement(I.Z, {
                        display: I.L.Flex,
                        flexGrow: 1
                    }, l.createElement(I.Z, {
                        display: I.L.Flex,
                        alignItems: I.c.Center
                    }, this.renderSortOrStream())), l.createElement(I.Z, {
                        display: I.L.Flex,
                        flexGrow: 1,
                        justifyContent: I.Y.End
                    }, l.createElement(I.Z, {
                        display: I.L.Flex,
                        flexDirection: I.N.Row
                    }, this.renderCreateCommunity(), this.renderLanguageSelect())))
                }, t
            }(l.Component),
            oe = Object(f.f)(ie),
            se = n("+GT7"),
            le = n("DtWM"),
            de = n("SZoP"),
            ce = n("PLRK"),
            ue = n("7FW4"),
            me = n("peXu"),
            pe = n("SN3I"),
            ge = n("AadB"),
            he = n("MMhf"),
            ye = n("I1+1"),
            ve = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams || this.props.data.error || !this.props.data.streams) return null;
                    var e, t = Object(he.a)(this.props.languageCode),
                        n = this.props.directoryWidth,
                        a = p.PageviewMedium.Browse,
                        r = p.PageviewContent.Popular,
                        i = this.props.data.streams.edges || [];
                    if (n && n > 0) {
                        var o = Object(me.a)(n, 240, 2);
                        o < i.length && (i = i.slice(0, o - 1), e = l.createElement("div", {
                            style: {
                                order: i.length
                            }
                        }, l.createElement(ue.a, {
                            subHeader: t,
                            linkTo: {
                                pathname: "/directory/all/" + this.props.languageCode,
                                state: {
                                    medium: a,
                                    content: r
                                }
                            }
                        })))
                    }
                    var s = i.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(e, t) {
                        var n = e.node;
                        return l.createElement(ge.b, {
                            directoryType: P.a.Communities,
                            streamIndex: t,
                            streamNode: n,
                            key: n.id,
                            trackingMedium: a,
                            trackingContent: r
                        })
                    });
                    return l.createElement("div", null, l.createElement(pe.a, {
                        languageCode: this.props.languageCode
                    }), l.createElement(I._36, {
                        gutterSize: I._38.Small,
                        childWidth: I._37.Medium,
                        placeholderItems: 20
                    }, s, e))
                }, t = s.__decorate([Object(_.a)(ye, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30,
                                languages: [e.languageCode],
                                platformType: e.platformType
                            }
                        }
                    }
                }), Object(g.d)("PopularInternationalSection", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            fe = n("4pV0"),
            be = "directory-first-item",
            ke = "directory-container",
            _e = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0,
                        directoryWidth: -1
                    }, t.onResize = function(e) {
                        t.setState({
                            directoryWidth: e
                        })
                    }, t.onWindowResize = function() {
                        return requestAnimationFrame(t.updateDisplayAdOrder)
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + ke + '"]'),
                            t = document.querySelector('[data-target="' + be + '"]'),
                            n = document.querySelector("#" + N.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(N.b.directory).length && w.a.display(N.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentWillMount = function() {
                    N.g.addListener(N.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    c.n.setPageTitle(Object(c.d)("Top Channels", "DirectoryPopularPage")), window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), N.g.removeListener(N.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return l.createElement(I._1, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return l.createElement(b.a, {
                        message: Object(c.d)("Error loading data.", "DirectoryPopularPage")
                    });
                    var e = null,
                        t = null;
                    "en" !== this.props.languageCode && (t = l.createElement(I.Z, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(I._25, {
                        type: I._30.H4,
                        color: I.I.Alt2,
                        fontSize: I.P.Size5,
                        transform: I._29.Uppercase
                    }, Object(c.d)("All Channels", "PopularInternationalSection"))), e = l.createElement(ve, {
                        directoryWidth: this.state.directoryWidth,
                        languageCode: this.props.languageCode,
                        platformType: ae[decodeURIComponent(this.props.match.path)] || "all"
                    }));
                    var n = p.PageviewMedium.Browse,
                        a = this.props.data.streams.edges.map(function(e, t) {
                            var a = e.node;
                            return a.broadcaster.id ? l.createElement("div", {
                                key: a.id,
                                "data-target": t ? "" : be,
                                style: {
                                    order: t
                                }
                            }, l.createElement(I.Z, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-game__card_container"
                            }, l.createElement(se.a, {
                                linkTo: {
                                    pathname: "/" + a.broadcaster.login,
                                    state: {
                                        content: p.PageviewContent.Live,
                                        content_index: t,
                                        medium: n
                                    }
                                },
                                title: a.title || ce.a,
                                imageAlt: a.broadcaster.login + " cover image",
                                imageSrc: a.previewImageURL,
                                viewerCount: a.viewersCount || 0,
                                channelName: Object(de.a)(a.broadcaster.login, a.broadcaster.displayName, !0),
                                gameImageSrc: a.game && a.game.boxArtURL || c.a.defaultBoxArtURL,
                                gameTitle: a.game && a.game.name || "",
                                gameLinkTo: {
                                    pathname: Object(C.c)(a.game && a.game.name || ""),
                                    state: {
                                        medium: n,
                                        content: p.PageviewContent.Live,
                                        content_index: t
                                    }
                                },
                                "data-a-target": "card-" + t,
                                "data-a-id": "card-" + (a.broadcaster.login || "").replace(/ /g, ""),
                                channelNameLinkTo: {
                                    pathname: "/" + a.broadcaster.login + "/videos",
                                    state: {
                                        medium: n,
                                        content: p.PageviewContent.Live,
                                        content_index: t
                                    }
                                },
                                streamType: a.type
                            }))) : null
                        }),
                        r = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                    return l.createElement(I.Z, {
                        flexShrink: 0,
                        "data-target": ke
                    }, l.createElement(O.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), e, t, l.createElement(I._36, {
                        gutterSize: I._38.Small,
                        childWidth: I._37.Large,
                        placeholderItems: 20
                    }, l.createElement(E.a, {
                        key: -1,
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 20,
                            order: 999,
                            width: 300,
                            height: 250
                        },
                        adUnit: N.d.directory,
                        slotID: N.b.directory.rectangle,
                        adSize: N.c.directory.rectangle,
                        targeting: {
                            pagetype: N.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), a), l.createElement(k.a, {
                        enabled: r,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 200
                    }), l.createElement(le.a, {
                        onResize: this.onResize
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t = s.__decorate([Object(_.a)(fe, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30,
                                platformType: ae[decodeURIComponent(e.match.path)] || "all",
                                languages: e.languagePreferences.map(function(e, t) {
                                    return e.toUpperCase()
                                })
                            }
                        }
                    },
                    props: function(e) {
                        return s.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data,
                                    n = t.fetchMore,
                                    a = t.variables,
                                    r = t.streams;
                                return n({
                                    query: fe,
                                    variables: s.__assign({}, a, {
                                        cursor: r.edges[r.edges.length - 5].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            streams: s.__assign({}, n.streams, {
                                                edges: Object(S.b)(e.streams.edges, n.streams.edges)
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(g.d)("DirectoryPopularPage", {
                    destination: m.a.DirectoryPopular
                }), Object(u.a)({
                    location: p.PageviewLocation.DirectoryPopular
                })], t)
            }(l.Component),
            Se = Object(h.b)(function(e) {
                return {
                    languageCode: e.session.languageCode,
                    languagePreferences: e.userPreferences.languagePreferences,
                    lastBrowsePath: e.browse.lastBrowsePath,
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            }, function(e) {
                return Object(y.b)({
                    changeLastBrowsePath: v.e
                }, e)
            })(_e),
            Ce = n("yFXh"),
            we = "directory-container",
            Ee = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + we + '"]'),
                            t = document.querySelector('[data-target="' + ge.a + '"]'),
                            n = document.querySelector("#" + N.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsCreated + 1;
                            return t === Object.keys(N.b.directory).length && w.a.display(N.b.directory.banner), {
                                numSlotsCreated: t
                            }
                        })
                    }, n.state = {
                        numSlotsCreated: 0
                    }, n
                }
                return s.__extends(t, e), t.prototype.componentWillMount = function() {
                    N.g.addListener(N.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    N.g.removeListener(N.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return l.createElement(I._1, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return l.createElement(b.a, {
                        message: Object(c.d)("Error loading data.", "PopularDirectoryByLanguagePage")
                    });
                    if (!this.props.data.streams) return l.createElement(b.a, {
                        message: Object(c.d)("Game does not exist", "PopularDirectoryByLanguagePage")
                    });
                    var e, t = this.props.data.streams.edges.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(e, t) {
                        var n = e.node;
                        return l.createElement(ge.b, {
                            directoryType: P.a.Communities,
                            streamIndex: t,
                            streamNode: n,
                            key: n.id,
                            trackingMedium: p.PageviewMedium.Browse
                        })
                    });
                    if (t.length > 0) {
                        var n = I._37.Large,
                            a = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                        e = l.createElement(I.Z, {
                            flexShrink: 0,
                            "data-target": we
                        }, l.createElement(I._36, {
                            gutterSize: I._38.Small,
                            childWidth: n,
                            placeholderItems: 20
                        }, l.createElement(E.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: N.d.directory,
                            slotID: N.b.directory.rectangle,
                            adSize: N.c.directory.rectangle,
                            targeting: {
                                pagetype: N.a.games
                            },
                            key: -1,
                            autoEnable: !1
                        }), t), l.createElement(k.a, {
                            enabled: a,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 200
                        }))
                    } else {
                        var r = Object(c.d)("No live channels for this game", "PopularDirectoryByLanguagePage");
                        e = l.createElement(I.Z, {
                            display: I.L.Flex,
                            alignItems: I.c.Center,
                            justifyContent: I.Y.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, l.createElement(I._25, {
                            color: I.I.Alt2,
                            fontSize: I.P.Size4,
                            italic: !0
                        }, r))
                    }
                    return l.createElement(I.Z, {
                        margin: {
                            bottom: 2
                        },
                        display: I.L.Flex,
                        flexDirection: I.N.Row
                    }, l.createElement(O.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), l.createElement(E.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: N.d.directory,
                        slotID: N.b.directory.banner,
                        adSize: N.c.directory.banner,
                        targeting: {
                            pagetype: N.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), l.createElement(pe.a, {
                        languageCode: this.props.match.params.encodedLanguage
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(_.a)(Ce, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: 30,
                                languages: [e.match.params.encodedLanguage]
                            }
                        }
                    },
                    props: function(e) {
                        return s.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: Ce,
                                    variables: s.__assign({}, e.data.variables, {
                                        cursor: e.data.streams.edges[e.data.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            streams: s.__assign({}, n.streams, {
                                                edges: Object(S.b)(e.streams.edges, n.streams.edges)
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(g.d)("DirectoryPopularByLanguagePage", {
                    destination: m.a.DirectoryPopularByLanguage
                }), Object(u.a)({
                    location: p.PageviewLocation.DirectoryPopular,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            language: e.match.params.encodedLanguage
                        }
                    }
                })], t)
            }(l.Component),
            Ne = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    return s.__awaiter(this, void 0, void 0, function() {
                        return s.__generator(this, function(e) {
                            return this.props.match.path === i.DirectoryCategory ? this.props.changeBrowseType(T.a.Games) : this.setBrowseType(this.props.match.path), this.setCorrectPageTitle(this.props.browseType), [2]
                        })
                    })
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setBrowseType(e.match.path), this.setCorrectPageTitle(e.browseType)
                }, t.prototype.render = function() {
                    return l.createElement(I.Z, {
                        padding: 3
                    }, l.createElement(E.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: N.d.directory,
                        slotID: N.b.directory.banner,
                        adSize: N.c.directory.banner,
                        targeting: {
                            pagetype: N.a.games
                        },
                        autoEnable: !1
                    }), this.renderBrowseHeader(), l.createElement(W.d, null, l.createElement(W.b, {
                        path: i.Communities,
                        component: U
                    }), l.createElement(W.b, {
                        path: i.CreativeCommunities,
                        component: V
                    }), l.createElement(W.b, {
                        path: i.PopularPlaystation,
                        component: Se
                    }), l.createElement(W.b, {
                        path: i.PopularXbox,
                        component: Se
                    }), l.createElement(W.b, {
                        path: i.PopularEncodedLanguage,
                        component: Ee
                    }), l.createElement(W.b, {
                        path: i.Popular,
                        component: Se
                    }), l.createElement(W.b, {
                        path: i.DirectoryCategory,
                        component: z
                    })))
                }, t.prototype.renderBrowseHeader = function() {
                    return l.createElement(oe, null)
                }, t.prototype.setCorrectPageTitle = function(e) {
                    e === T.a.GamesAndCommunities ? c.n.setPageTitle(Object(c.d)("Games and Communities", "BrowseGamesAndCommunitiesPage")) : e === T.a.Games && c.n.setPageTitle(Object(c.d)("All Games", "BrowseGamePage"))
                }, t.prototype.setBrowseType = function(e) {
                    e === i.Communities ? this.props.changeBrowseType(T.a.Communities) : e === i.CreativeCommunities ? this.props.changeBrowseType(T.a.CreativeCommunities) : ee(e) && this.props.changeBrowseType(T.a.Channels)
                }, t
            }(l.Component),
            Oe = Object(h.b)(function(e) {
                return {
                    browseType: Object(o.b)(e),
                    sortBy: Object(o.a)(e)
                }
            }, function(e) {
                return Object(y.b)({
                    changeBrowseType: v.d
                }, e)
            })(Ne);
        n.d(t, "BrowseCommunitiesPage", function() {
            return U
        }), n.d(t, "BrowseCreativePage", function() {
            return V
        }), n.d(t, "BrowseGamesAndCommunitiesPage", function() {
            return z
        }), n.d(t, "BrowseRootPage", function() {
            return Oe
        })
    },
    GiGb: function(e, t) {},
    "I1+1": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowsePopular_InternationalStreams"
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
                                    value: "Language"
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
                            value: "streams"
                        },
                        arguments: [{
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
                                    value: "limit"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 358
            }
        };
        n.loc.source = {
            body: "query BrowsePopular_InternationalStreams($platformType: PlatformType $limit: Int $languages: [Language!]) {\nstreams(platformType: $platformType first: $limit languages: $languages) {\nedges {\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    IOwa: function(e, t, n) {
        "use strict";
        var a, r, i, o = n("TToO"),
            s = n("HW6M"),
            l = n("U7vG"),
            d = n("6sO2"),
            c = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), a = {}, a[c.a.Live] = "stream-type-indicator--live", a[c.a.Premiere] = "stream-type-indicator--premiere", a[c.a.Rerun] = "stream-type-indicator--rerun", a[c.a.WatchParty] = "stream-type-indicator--rerun", a),
            p = (r = {}, r[c.a.Premiere] = u._13.VideoPremiere, r[c.a.Rerun] = u._13.VideoRerun, r[c.a.WatchParty] = u._13.VideoRerun, r),
            g = (i = {}, i[c.a.Premiere] = u._14.Live, i[c.a.Rerun] = u._14.Inherit, i[c.a.WatchParty] = u._14.Inherit, i),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u._21, {
                        className: this.getClassNames(),
                        color: u.I.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.L.Flex
                    }, l.createElement(u.Z, {
                        display: u.L.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(u._25, {
                        type: u._30.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(u._21, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === c.a.Live ? l.createElement(u.Z, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.L.Flex,
                        alignItems: u.c.Center
                    }, l.createElement(u.E, {
                        status: u.G.Live,
                        size: u.F.Small
                    })) : l.createElement(u._12, {
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
            return h
        })
    },
    "LEV+": function(e, t) {},
    MMhf: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var a = n("6sO2"),
            r = function(e) {
                switch (e) {
                    case "ar":
                        return Object(a.d)("Channels in Arabic", "DirectoryInternationalSectionHeader");
                    case "asl":
                        return Object(a.d)("Channels in American Sign Language", "DirectoryInternationalSectionHeader");
                    case "bg":
                        return Object(a.d)("Channels in Bulgarian", "DirectoryInternationalSectionHeader");
                    case "cs":
                        return Object(a.d)("Channels in Czech", "DirectoryInternationalSectionHeader");
                    case "da":
                        return Object(a.d)("Channels in Danish", "DirectoryInternationalSectionHeader");
                    case "de":
                        return Object(a.d)("Channels in German", "DirectoryInternationalSectionHeader");
                    case "el":
                        return Object(a.d)("Channels in Greek", "DirectoryInternationalSectionHeader");
                    case "es":
                        return Object(a.d)("Channels in Spanish", "DirectoryInternationalSectionHeader");
                    case "fi":
                        return Object(a.d)("Channels in Finnish", "DirectoryInternationalSectionHeader");
                    case "fr":
                        return Object(a.d)("Channels in French", "DirectoryInternationalSectionHeader");
                    case "hu":
                        return Object(a.d)("Channels in Hungarian", "DirectoryInternationalSectionHeader");
                    case "it":
                        return Object(a.d)("Channels in Italian", "DirectoryInternationalSectionHeader");
                    case "ja":
                        return Object(a.d)("Channels in Japanese", "DirectoryInternationalSectionHeader");
                    case "ko":
                        return Object(a.d)("Channels in Korean", "DirectoryInternationalSectionHeader");
                    case "nl":
                        return Object(a.d)("Channels in Dutch", "DirectoryInternationalSectionHeader");
                    case "no":
                        return Object(a.d)("Channels in Norwegian", "DirectoryInternationalSectionHeader");
                    case "pl":
                        return Object(a.d)("Channels in Polish", "DirectoryInternationalSectionHeader");
                    case "pt":
                        return Object(a.d)("Channels in Portuguese", "DirectoryInternationalSectionHeader");
                    case "ru":
                        return Object(a.d)("Channels in Russian", "DirectoryInternationalSectionHeader");
                    case "sk":
                        return Object(a.d)("Channels in Slovak", "DirectoryInternationalSectionHeader");
                    case "sv":
                        return Object(a.d)("Channels in Swedish", "DirectoryInternationalSectionHeader");
                    case "th":
                        return Object(a.d)("Channels in Thai", "DirectoryInternationalSectionHeader");
                    case "tr":
                        return Object(a.d)("Channels in Turkish", "DirectoryInternationalSectionHeader");
                    case "vi":
                        return Object(a.d)("Channels in Vietnamese", "DirectoryInternationalSectionHeader");
                    case "zh":
                        return Object(a.d)("Channels in Chinese", "DirectoryInternationalSectionHeader");
                    default:
                        return Object(a.d)("Channels in English", "DirectoryInternationalSectionHeader")
                }
            }
    },
    MSvX: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("OAwv"),
            i = n("U7vG"),
            o = n("6sO2"),
            s = n("Ejve"),
            l = "legacy_routes_enabled",
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
                                    var a = "" !== e.search ? r.parse(e.search) : {};
                                    a["from-redirect"] = "true";
                                    var i = r.stringify(a),
                                        l = o.a.buildType === s.a.Dev ? window.location.host : window.location.hostname,
                                        d = window.location.protocol + "//" + l + e.pathname + "?" + i;
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
                            var t = "" !== e.search ? r.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var a = r.stringify(t),
                                    i = "";
                                a.length > 0 && (i = "?" + a), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: i
                                })
                            }
                        }
                    }, n.isEnabled = o.b.get(l, !1), n.logger = o.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = o.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, a = e; n < a.length; n++) {
                        var r = a[n];
                        try {
                            var i = new RegExp(r, "i");
                            t.push(i)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: r,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return d
        })
    },
    PLRK: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("U7vG"),
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
                return e ? s[e] || "en_US" : "en_US"
            },
            d = n("pqU3");
        t.a = function() {
            var e = this;
            return function(t) {
                clearTimeout(c), c = setTimeout(function() {
                    return a.__awaiter(e, void 0, void 0, function() {
                        var e, n, s, c, u, m;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    e = i.n.logger.withCategory("leagueoflegends-api"), t(Object(d.e)(!0)), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), n = i.n.intl.getLanguageCode(), s = l(n), c = o.a.getAPIURL("/api/lol/champions?" + r.stringify({
                                        locale: s,
                                        on_site: 1
                                    })).toString(), [4, o.a.get(c)];
                                case 2:
                                    return (u = a.sent()).body ? t(Object(d.f)(u.body)) : (e.warn("LoL champion API response body was empty."), t(Object(d.d)(!0))), [3, 4];
                                case 3:
                                    throw m = a.sent(), t(Object(d.d)(!0)), e.error(m, "Failed to load LoL champion data"), m;
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
            d = "ads.slot-render-end",
            c = "ads.slot-ready",
            u = new a.EventEmitter
    },
    R0TX: function(e, t) {},
    SN3I: function(e, t, n) {
        "use strict";
        var a = n("U7vG"),
            r = n("MMhf"),
            i = n("Odds"),
            o = function(e) {
                return a.createElement(i.Z, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(i._25, {
                    type: i._30.H4,
                    color: i.I.Alt2,
                    fontSize: i.P.Size5,
                    transform: i._29.Uppercase,
                    "data-a-target": "international-section-header"
                }, Object(r.a)(e.languageCode)))
            };
        n.d(t, "a", function() {
            return o
        })
    },
    UAN1: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return i
        }), t.d = function(e) {
            return {
                type: a,
                browseType: e
            }
        }, t.e = function(e) {
            return {
                type: r,
                lastBrowsePath: e
            }
        }, t.f = function(e) {
            return {
                type: i,
                sortBy: e
            }
        };
        var a = "browse.BROWSE_TYPE_CHANGED",
            r = "browse.LAST_BROWSE_PATH",
            i = "browse.SORT_BY_CHANGED"
    },
    V9YC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), t.b = function(e) {
            return {
                type: a,
                languagePreferences: e
            }
        };
        var a = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED"
    },
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-062a1df5ff2aaa76eb8e129940ef964a.png"
    },
    Y6wo: function(e, t, n) {
        "use strict";

        function a() {
            var e = i.k.get(s, {});
            return r.__assign({
                sortBy: o.a.Popularity
            }, e)
        }
        t.a = a, t.b = function(e, t) {
            var n = a();
            n[e] = t, i.k.set(s, n)
        };
        var r = n("TToO"),
            i = n("6sO2"),
            o = n("r4vp"),
            s = "browseSettings"
    },
    c8Oh: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.userPreferences.languagePreferences
        };
        var a = n("TToO"),
            r = n("6sO2"),
            i = n("V9YC"),
            o = n("iJpA");
        r.n.store.registerReducer("userPreferences", function(e, t) {
            switch (void 0 === e && (e = {
                languagePreferences: Object(o.b)()
            }), t.type) {
                case i.a:
                    return a.__assign({}, e, {
                        languagePreferences: t.languagePreferences
                    });
                default:
                    return e
            }
        })
    },
    czpb: function(e, t, n) {
        "use strict";
        var a = n("6sO2"),
            r = n("Ejve"),
            i = n("MSvX");
        t.a = function(e) {
            return a.b.get(i.a, !1) || a.a.buildType !== r.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? o + e : o + e.pathname
        }, t.b = function() {
            return !a.b.get(i.a, !1) && a.a.buildType === r.a.Production
        };
        var o = "https://www.twitch.tv"
    },
    dzKs: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Channels = "channels", e.ChannelsPlaystation = "channels-playstation", e.ChannelsXbox = "channels-xbox", e.Communities = "communities", e.CreativeCommunities = "creative-communities", e.Games = "games", e.GamesAndCommunities = "games-and-communities"
        }(a || (a = {}))
    },
    iJpA: function(e, t, n) {
        "use strict";

        function a() {
            return i.k.get(l, []).filter(function(e) {
                return o.a.has(e)
            })
        }
        t.c = function(e, t) {
            var n = this;
            return function(o) {
                return r.__awaiter(n, void 0, void 0, function() {
                    var n, d;
                    return r.__generator(this, function(r) {
                        return n = new Set(a()), t ? n.add(e) : n.delete(e), d = Array.from(n), i.k.set(l, d), o(Object(s.b)(d)), [2]
                    })
                })
            }
        }, t.a = function() {
            var e = this;
            return function(t) {
                return r.__awaiter(e, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        return i.k.set(l, []), t(Object(s.b)([])), [2]
                    })
                })
            }
        }, t.b = a;
        var r = n("TToO"),
            i = n("6sO2"),
            o = n("D9fv"),
            s = n("V9YC"),
            l = "languageDirectoryFilters"
    },
    "j7/Y": function(e, t, n) {
        "use strict";

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
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
                                    s = i.medium,
                                    d = i.content_index;
                                l.n.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return r.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return o.createElement(t, r.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? i.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                r = i.stringify(t);
                            r.length > 0 && (a = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: a
                            })
                        }
                        return n
                    }, a
                }(o.Component);
                return Object(s.f)(n)
            }
        }
        var r = n("TToO"),
            i = n("OAwv"),
            o = n("U7vG"),
            s = n("F8kA"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return a
        })
    },
    lYCI: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowsePage_AllDirectories"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "directoryFilters"
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
                                    value: "DirectoryFilter"
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
                            value: "directorySort"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "DirectorySort"
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
                            value: "directories"
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
                                value: "filterBySet"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "directoryFilters"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "sortBy"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "directorySort"
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
                                                    value: "directoryType"
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
            }],
            loc: {
                start: 0,
                end: 364
            }
        };
        n.loc.source = {
            body: "query BrowsePage_AllDirectories($limit: Int $cursor: Cursor $directoryFilters: [DirectoryFilter!] $directorySort: DirectorySort) {\ndirectories(first: $limit after: $cursor filterBySet: $directoryFilters sortBy: $directorySort) {\nedges {\ncursor\nnode {\nid\ndisplayName\nname\navatarURL(width: 285 height: 380)\nviewersCount\ndirectoryType\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    mmuw: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.browse.sortBy
        }, t.b = function(e) {
            return e.browse.browseType
        }, t.c = function(e) {
            return e.browse.lastBrowsePath
        };
        var a = n("TToO"),
            r = n("6sO2"),
            i = n("r4vp"),
            o = n("Y6wo"),
            s = n("UAN1"),
            l = n("dzKs");
        r.n.store.registerReducer("browse", function(e, t) {
            switch (void 0 === e && (e = function() {
                var e = Object(o.a)();
                return a.__assign({
                    browseType: l.a.GamesAndCommunities,
                    lastBrowsePath: "/directory",
                    sortBy: i.a.Popularity
                }, e)
            }()), t.type) {
                case s.a:
                    return a.__assign({}, e, {
                        browseType: t.browseType
                    });
                case s.b:
                    return a.__assign({}, e, {
                        lastBrowsePath: t.lastBrowsePath
                    });
                case s.c:
                    return a.__assign({}, e, {
                        sortBy: t.sortBy
                    });
                default:
                    return e
            }
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
    r4vp: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Popularity = "popularity", e.Relevancy = "relevancy"
        }(a || (a = {}))
    },
    sJt0: function(e, t) {},
    v5ho: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
        }(a || (a = {}))
    },
    vQzq: function(e, t) {},
    yFXh: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PopularPage_StreamsByLanguage"
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
                                    value: "Language"
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
            }],
            loc: {
                start: 0,
                end: 360
            }
        };
        n.loc.source = {
            body: "query PopularPage_StreamsByLanguage($limit: Int $languages: [Language!] $cursor: Cursor) {\nstreams(first: $limit after: $cursor languages: $languages) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.browse-3f379f55a199de0fe9c85f4f23ee9bad.js.map