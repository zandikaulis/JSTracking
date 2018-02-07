webpackJsonp([45], {
    "+GT7": function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("U7vG"),
            o = n("F8kA"),
            s = n("6sO2"),
            l = n("IOwa"),
            d = n("RH2O"),
            c = n("2KeS"),
            u = n("PPNL"),
            m = n("/SNv"),
            p = n.n(m),
            h = n("Vr3l"),
            g = n.n(h);
        ! function(e) {
            e[e.Hearthstone = 0] = "Hearthstone", e[e.LeagueOfLegends = 1] = "LeagueOfLegends", e[e.Overwatch = 2] = "Overwatch"
        }(i || (i = {}));
        var v = this,
            f = function() {
                return a.__awaiter(v, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(71).then(n.bind(null, "e/M0"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            y = function() {
                return a.__awaiter(v, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(70).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            k = n("Odds"),
            b = (n("AHWf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = s.n.logger.withCategory("metadata-icon"), t.didUnmount = !1, t.loadData = function() {
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
                                gameSprite: g.a,
                                item: a,
                                isLoading: !0
                            }), t.getOverwatchData())
                        }
                    }, t.renderIcon = function(e, t, n, i, a, o) {
                        return n ? r.createElement(k.Z, {
                            display: k.L.Flex,
                            flexDirection: k.N.Column,
                            alignItems: k.c.Center,
                            justifyContent: k.Y.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(k._33, {
                            direction: k._35.Left,
                            label: e
                        }, r.createElement(k.Z, {
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
                            var e, t, n, i, r, o, s, l, d, c, u, m, p;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, y()];
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
            }(r.Component)),
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
            })(b),
            S = (n("LEV+"), function(e) {
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
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = r.createElement(k.Z, {
                        display: k.L.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, r.createElement(k._3, {
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
                    }, Object(k._43)(this.props)), r.createElement(k.A, {
                        key: this.props.title
                    }, r.createElement(k.Z, {
                        fullWidth: !0
                    }, r.createElement(k.j, {
                        overflow: !0
                    }, r.createElement("div", null, r.createElement(o.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, r.createElement(k.C, {
                        alt: this.props.imageAlt,
                        src: this.props.imageSrc,
                        aspect: k.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), r.createElement(k.B, null, r.createElement(k.Z, {
                        display: k.L.Flex,
                        flexWrap: k.O.NoWrap
                    }, r.createElement(k.Z, {
                        flexGrow: 1,
                        ellipsis: !0
                    }, r.createElement(o.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, r.createElement(k.U, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(k._25, {
                        type: k._30.H3,
                        fontSize: k.P.Size5,
                        lineHeight: k._0.Body,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), r.createElement(k.Z, {
                        className: "live-channel-card__meta",
                        display: k.L.Flex,
                        flexWrap: k.O.NoWrap
                    }, e, r.createElement(k._25, {
                        type: k._30.Span,
                        ellipsis: !0
                    }, t))), r.createElement(k.Z, {
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
                    }, r.createElement(k._21, {
                        className: "live-channel-card__boxart",
                        position: k._6.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(k._33, {
                        display: k.L.Block,
                        direction: k._35.Bottom,
                        label: t
                    }, r.createElement(k.C, {
                        src: n,
                        alt: t,
                        aspect: k.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(k.Z, {
                        position: k._6.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(l.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? r.createElement(_, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(r.Component)),
            C = S;
        n.d(t, !1, function() {
            return S
        }), n.d(t, "a", function() {
            return C
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
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("wn+H").definitions)), e.exports = i
    },
    "/+aa": function(e, t) {},
    "/+to": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("TToO"),
            r = n("U7vG"),
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
                            if (n.props.slotID === l.b.directory.banner) {
                                return void((i = n.slotRef.querySelector(d)) && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === l.b.directory.rectangle) {
                                var i;
                                return void((i = n.slotRef.querySelector(c)) && 1 !== i.clientWidth && n.setState({
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    l.g.addListener(l.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
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
            }(r.Component),
            m = Object(i.b)(function(e) {
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
            d = n("U7vG"),
            c = n("3zLD"),
            u = n("6sO2"),
            m = n("7vx8"),
            p = n("oIkB"),
            h = n("vH/s"),
            g = n("Odds"),
            v = n("z4nH"),
            f = n("rG8a"),
            y = n("U9Fb"),
            k = "follow-game-button-component",
            b = function(e) {
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
                        icon: g._13.Heart,
                        ariaLabel: e,
                        "data-test-selector": k,
                        onClick: this.props.showLoginModal
                    }, e);
                    if (this.isLoading) return d.createElement(g._5, {
                        width: 70,
                        height: 30
                    });
                    if (this.isFollowing) {
                        var t = Object(u.d)("Unfollow", "FollowGameButton");
                        return d.createElement(g.v, {
                            ariaLabel: t,
                            "data-test-selector": k,
                            "data-a-target": "game-directory-unfollow-button",
                            icon: g._13.Heart,
                            onClick: this.unfollow,
                            statusAlertIcon: g._13.Unheart
                        })
                    }
                    return d.createElement(g.u, {
                        icon: g._13.Heart,
                        ariaLabel: e,
                        "data-test-selector": k,
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
            _ = Object(c.compose)(Object(m.a)(f, {
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
            }))(b),
            S = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e)
                }
            }, function(e) {
                return Object(a.b)({
                    showLoginModal: function() {
                        return Object(o.f)(r.a.FollowGameButton)
                    }
                }, e)
            })(_);
        n.d(t, "a", function() {
            return S
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

        function i() {
            return Object(r.d)("Unable to ban user", "BlockUserMutation")
        }
        t.a = function(e) {
            var t = this;
            return Object(o.a)(u, {
                props: function(n) {
                    return {
                        onBanUser: function(o, u) {
                            return void 0 === u && (u = null), a.__awaiter(t, void 0, void 0, function() {
                                var t, f, y, k, b, _;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (t = u ? c.a.Timeout : c.a.Ban, f = e(n.ownProps), y = f.channelID, k = f.onPushMessage, !n.mutate) return [3, 5];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, n.mutate(Object(s.a)({
                                                channelID: y,
                                                bannedUserLogin: o,
                                                expiresIn: u && function(e) {
                                                    if (!e) return "0s";
                                                    var t = e,
                                                        n = "";
                                                    if (t > v) {
                                                        var i = Math.floor(t / v);
                                                        t -= i * v, n += i + "mo"
                                                    }
                                                    if (t > g) {
                                                        var a = Math.floor(t / g);
                                                        t -= a * g, n += a + "w"
                                                    }
                                                    if (t > h) {
                                                        var r = Math.floor(t / h);
                                                        t -= r * h, n += r + "d"
                                                    }
                                                    if (t > p) {
                                                        var o = Math.floor(t / p);
                                                        t -= o * p, n += o + "h"
                                                    }
                                                    if (t > m) {
                                                        var s = Math.floor(t / m);
                                                        t -= s * m, n += s + "m"
                                                    }
                                                    return t > 0 && (n += t + "s"), n
                                                }(u)
                                            }))];
                                        case 2:
                                            return a.sent(), b = Object(d.a)(t, o, null, u), k && k(b), [2, b];
                                        case 3:
                                            throw _ = a.sent(), r.i.error(_, "Unable to ban user"), k && k(Object(l.a)(i())), new Error(i());
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            throw k && k(Object(l.a)(i())), new Error(i());
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })
        };
        var a = n("TToO"),
            r = n("6sO2"),
            o = n("7vx8"),
            s = n("oIkB"),
            l = n("aUOx"),
            d = n("Ncf8"),
            c = n("qkCi"),
            u = n("MApH"),
            m = (n.n(u), 60),
            p = 60 * m,
            h = 24 * p,
            g = 7 * h,
            v = 4 * g
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
    "4Tv+": function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, o, s) {
            var l = (n = n || t && t.lastBroadcast && t.lastBroadcast.game) && n.product;
            if (n && l) {
                Object(r.d)({
                    user: t,
                    game: n,
                    product: l,
                    info: e,
                    location: o
                });
                var d = "";
                t && t.settings.isCommerceRevShareEnabled && (d = "&br_id=" + t.id),
                    function(e, t) {
                        var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                        n && !Object(i.a)() && (n.focus(), Object(a.a)(n, function(e) {
                            t(e)
                        }))
                    }(e.purchaseURL + d, s)
            }
        };
        var i = n("Ouuk"),
            a = n("jF7o"),
            r = n("hNWd")
    },
    "4mYF": function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("U7vG"),
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
                        }, r.createElement(d.Z, null, r.createElement(d.U, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: d._6.Absolute
                        }, r.createElement("img", {
                            src: l
                        })), r.createElement(d.Z, {
                            className: "embed-card__overlay",
                            position: d._6.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(d.Z, {
                            className: "embed-card__play",
                            display: d.L.Flex,
                            justifyContent: d.Y.Center,
                            position: d._6.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(d._12, {
                            asset: d._13.Play,
                            width: 50,
                            height: 50
                        })), r.createElement(d.Z, {
                            position: d._6.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && r.createElement(d._25, null, Object(o.c)(new Date(n), "medium")), r.createElement(d.Z, null, u === i.Stream && r.createElement(d.Z, {
                            display: d.L.Inline,
                            margin: {
                                right: .5
                            }
                        }, r.createElement(d.E, {
                            status: d.G.Live
                        })), m && r.createElement("span", null, t.getFormattedViewCount(m, u)))), r.createElement(d.Z, {
                            position: d._6.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, p && r.createElement(d.Z, null, r.createElement(d._25, null, p)))), r.createElement(d._21, {
                            position: d._6.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: d.P.Size5
                        }, u === i.Stream && r.createElement(d._3, {
                            label: Object(o.d)("Live", "EmbedOverlayPill"),
                            type: d._4.Live
                        }), u === i.Video && r.createElement(d._3, {
                            label: Object(o.d)("Video", "EmbedOverlayPill"),
                            type: d._4.Overlay
                        }), u === i.Clip && r.createElement(d._3, {
                            label: Object(o.d)("Clip", "EmbedOverlayPill"),
                            type: d._4.Overlay
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
        var i, a = n("U7vG"),
            r = n("6sO2"),
            o = n("6yQB"),
            s = n("CSlQ"),
            l = n("RH2O"),
            d = n("2KeS"),
            c = n("V5M+"),
            u = n("TToO"),
            m = n("F8kA"),
            p = n("NY9D"),
            h = n("HW6M"),
            g = n("+8VM"),
            v = n("sikP"),
            f = n("oSFp"),
            y = n("mw/a"),
            k = n("6BvN"),
            b = n("rCmJ"),
            _ = n("Odds"),
            S = (n("Jg0G"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectOnFocus = function(e) {
                        e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(_.Z, u.__assign({
                        position: _._6.Relative,
                        className: "selectable-input-wrapper"
                    }, Object(_._43)(this.props)), a.createElement(_.V, {
                        type: _.W.Text,
                        value: this.props.text,
                        readOnly: !0,
                        onFocus: this.selectOnFocus,
                        icon: this.props.iconAsset,
                        id: this.props.id
                    }), this.props.children)
                }, t = u.__decorate([Object(s.d)("SelectableInput")], t)
            }(a.Component)),
            C = n("8Wuk"),
            E = n("2hJ3"),
            N = n("yDzg"),
            w = n("WNmM"),
            O = [{
                type: C.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: C.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: C.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: C.b.Copy
            }],
            D = function(e) {
                return a.createElement(_.Z, {
                    className: "clips-social-share",
                    display: _.L.Flex,
                    flexWrap: _.O.NoWrap
                }, O.map(function(t) {
                    return a.createElement(_.Z, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(C.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(N.a)(e.clip.url, t.params),
                        onShareClick: Object(w.d)(e.clip, e.pageType)
                    }))
                }))
            },
            F = n("jetF"),
            T = n("7vx8"),
            L = n("J4ib");
        ! function(e) {
            e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
        }(i || (i = {}));
        var I = n("6fIs"),
            A = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderMenuItem = function(e) {
                        var t = n.menuData.get(e);
                        return e && t ? a.createElement(_.X, {
                            key: t.display,
                            onClick: t.destinationHandler,
                            "data-a-target": "clip-moderation-button-" + t.display
                        }, a.createElement(_.Z, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, t.display)) : null
                    }, n.menuData = new Map([
                        [i.Report, {
                            display: Object(L.d)("Report", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.Report)
                            }
                        }],
                        [i.Delete, {
                            display: Object(L.d)("Delete", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.Delete)
                            }
                        }],
                        [i.DeleteAll, {
                            display: Object(L.d)("Delete All Clips from Video", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.DeleteAll)
                            }
                        }],
                        [i.Ban, {
                            display: Object(L.d)("Ban User", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.Ban)
                            }
                        }],
                        [i.Timeout, {
                            display: Object(L.d)("Timeout User (24 hr)", "ModerationMenu"),
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
                        r = e.currentUser.id === t.curator.id,
                        o = e.currentUser.id === t.broadcaster.id,
                        s = r || o || n,
                        l = o || n,
                        d = [i.Report];
                    return s && d.push(i.Delete), l && (d.push(i.DeleteAll), d.push(i.Ban), d.push(i.Timeout)), a.createElement(_.Z, {
                        className: "moderation-menu"
                    }, a.createElement(F.a, null, a.createElement(_.u, {
                        type: _.z.Hollow,
                        icon: _._13.More,
                        ariaLabel: Object(L.d)("More Options", "ModerationMenu"),
                        "data-a-target": "moderation-menu-button"
                    }), a.createElement(_.p, {
                        direction: _.q.TopRight
                    }, a.createElement(_.Z, {
                        padding: {
                            y: .5
                        }
                    }, this.moderationMenuRender(d)))))
                }, t.prototype.moderationMenuRender = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        return t.renderMenuItem(e)
                    })
                }, t = u.__decorate([Object(T.a)(I), Object(s.d)("ModerationMenu")], t)
            }(a.Component),
            R = (n("MjlB"), 2e3),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingBalloon: !1
                    }, t.timeoutID = null, t.copyClipURL = function() {
                        var e;
                        try {
                            e = Object(E.a)(t.props.clip.url)
                        } catch (e) {
                            return void r.i.warn("Failed to copy", e)
                        }
                        e && (t.setState({
                            isShowingBalloon: !0
                        }), t.timeoutID = setTimeout(function() {
                            t.setState({
                                isShowingBalloon: !1
                            })
                        }, R), Object(w.d)(t.props.clip, t.props.pageType)(C.b.CopyInput))
                    }, t.dismissBalloon = function() {
                        t.setState({
                            isShowingBalloon: !1
                        }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = a.createElement(m.a, {
                        to: "/" + this.props.clip.broadcaster.login,
                        onClick: this.props.closeModal,
                        "data-a-target": "clip-modal-broadcaster-link"
                    }, this.props.clip.broadcaster.login);
                    return e = this.props.clip.game ? Object(r.d)("{broadcaster} playing {game}", {
                        broadcaster: t,
                        game: a.createElement(m.a, {
                            to: "" + Object(p.c)(this.props.clip.game.name),
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-game-link"
                        }, this.props.clip.game.name)
                    }, "ClipsViewModalContent") : Object(r.d)("{broadcaster}", {
                        broadcaster: t
                    }, "ClipsViewModalContent"), a.createElement(_._21, {
                        className: "clips-view-modal-content",
                        background: _.m.Base
                    }, a.createElement(_.Z, {
                        padding: {
                            bottom: 2
                        }
                    }, a.createElement(_.j, {
                        ratio: _.k.Aspect16x9
                    }, a.createElement("iframe", {
                        src: this.props.clip.embedURL,
                        width: "100%",
                        height: "100%",
                        allowFullScreen: !0
                    }))), a.createElement(_.Z, {
                        padding: {
                            x: 2,
                            bottom: 2
                        }
                    }, a.createElement(_.Z, {
                        display: _.L.Flex,
                        flexWrap: _.O.NoWrap
                    }, a.createElement(_.Z, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(b.a, {
                        onClickOut: this.dismissBalloon
                    }, a.createElement(S, {
                        text: this.props.clip.url,
                        icon: !0,
                        iconAsset: _._13.Link,
                        onSelection: this.copyClipURL,
                        "data-a-target": "clip-share-input"
                    }, a.createElement(_.p, {
                        show: this.state.isShowingBalloon,
                        direction: _.q.TopRight
                    }, a.createElement(_.X, {
                        onClick: this.dismissBalloon
                    }, a.createElement(_.Z, {
                        padding: 1
                    }, a.createElement(_._25, {
                        bold: !0
                    }, Object(r.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), a.createElement(D, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    }), a.createElement(A, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState
                    }))), a.createElement(_.Z, {
                        padding: {
                            x: 2,
                            bottom: 2
                        },
                        display: _.L.Flex,
                        flexWrap: _.O.NoWrap,
                        justifyContent: _.Y.Between,
                        fullWidth: !0
                    }, a.createElement(_.Z, {
                        flexGrow: 1
                    }, a.createElement(_.U, {
                        ellipsis: !0
                    }, a.createElement(_._21, {
                        display: _.L.Flex,
                        flexWrap: _.O.NoWrap,
                        fontSize: _.P.Size5
                    }, a.createElement(_.Z, {
                        ellipsis: !0
                    }, this.props.clip.title), a.createElement(_.Z, {
                        flexShrink: 0
                    }, a.createElement(_._25, {
                        type: _._30.Span,
                        color: _.I.Alt2
                    }, " • ", Object(r.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsViewModalContent"))))), a.createElement(_.U, {
                        ellipsis: !0
                    }, a.createElement(_._21, {
                        color: _.I.Alt2
                    }, e, " • ", Object(r.d)("Clipped by {curator}", {
                        curator: a.createElement(m.a, {
                            to: "/" + this.props.clip.curator.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-curator-link"
                        }, this.props.clip.curator.login)
                    }, "ClipsViewModalContent")))), a.createElement(_._21, {
                        display: _.L.Flex,
                        margin: {
                            bottom: 2,
                            left: 2
                        },
                        fontSize: _.P.Size5,
                        color: _.I.Alt2,
                        flexShrink: 0
                    }, a.createElement(_.Z, {
                        margin: {
                            right: .5
                        },
                        alignItems: _.c.Center,
                        display: _.L.Flex
                    }, a.createElement(_._12, {
                        asset: _._13.GlyphViews
                    })), Object(r.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsViewModalContent"))))
                }, t = u.__decorate([Object(s.d)("ClipsViewModalContent")], t)
            }(a.Component),
            P = (n("GOrw"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onKeyDown = function(e) {
                        var n = e.charCode || e.keyCode;
                        n === k.a.Left ? t.updateClipBackward() : n === k.a.Right && t.updateClipForward()
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
                    return this.props.clipIndex && this.props.clipIndex > 0 && (e = a.createElement(_.Z, {
                        position: _._6.Absolute,
                        display: _.L.Flex,
                        alignItems: _.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--left"
                    }, a.createElement(_.v, {
                        ariaLabel: Object(r.d)("Previous clip", "ClipsViewModalNavigation"),
                        type: _.w.Primary,
                        icon: _._13.AngleLeft,
                        onClick: this.updateClipBackward,
                        "data-test-selector": "clips-view-modal-content-back"
                    }))), a.createElement(_.Z, {
                        className: "clips-view-modal-content"
                    }, e, a.createElement(j, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState,
                        pageType: this.props.pageType,
                        closeModal: this.props.closeModal
                    }), a.createElement(_.Z, {
                        position: _._6.Absolute,
                        display: _.L.Flex,
                        alignItems: _.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--right"
                    }, a.createElement(_.v, {
                        ariaLabel: Object(r.d)("Next clip", "ClipsViewModalNavigation"),
                        type: _.w.Primary,
                        icon: _._13.AngleRight,
                        onClick: this.updateClipForward,
                        "data-test-selector": "clips-view-modal-content-forward"
                    })))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("keydown", this.onKeyDown)
                }, t.prototype.setUpArrowListeners = function() {
                    document.addEventListener("keydown", this.onKeyDown)
                }, t.prototype.updateClipIndex = function(e) {
                    var t = Math.max(0, e),
                        n = this.props.getClips();
                    n.length - t < 4 && this.props.loadMoreClips(), t < n.length && this.props.showModal(B, {
                        getClips: this.props.getClips,
                        clip: n[t],
                        clipIndex: t,
                        loadMoreClips: this.props.loadMoreClips,
                        pageType: this.props.pageType
                    })
                }, t
            }(a.Component)),
            x = Object(s.d)("ClipsViewModalNavigation")(P),
            M = Object(l.b)(null, function(e) {
                return Object(d.b)({
                    showModal: c.d,
                    closeModal: c.c
                }, e)
            })(x),
            U = (n("/+aa"), "clips-modal-view--wide"),
            V = function(e) {
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
                    var e, t = (n = {}, n["clips-modal-view"] = !0, n[U] = !1, n);
                    return this.state.modalView === i.Report ? e = a.createElement(f.a, {
                        title: Object(r.d)("Report this Clip", "ClipsViewModal"),
                        reportContext: {
                            contentType: y.a.Clip,
                            contentID: this.props.clip.slug,
                            targetUserID: this.props.clip.broadcaster.id
                        },
                        onClose: this.setToViewState
                    }) : this.state.modalView === i.Delete ? e = a.createElement(v.d, {
                        clip: this.props.clip,
                        onClose: this.setToViewState
                    }) : this.state.modalView === i.DeleteAll ? e = a.createElement(v.e, {
                        clip: this.props.clip,
                        onClose: this.setToViewState
                    }) : this.state.modalView === i.Ban ? e = a.createElement(v.b, {
                        clip: this.props.clip,
                        isTemporary: !1,
                        onClose: this.setToViewState
                    }) : this.state.modalView === i.Timeout ? e = a.createElement(v.b, {
                        clip: this.props.clip,
                        isTemporary: !0,
                        onClose: this.setToViewState
                    }) : (e = a.createElement(M, {
                        getClips: this.props.getClips,
                        clip: this.props.clip,
                        clipIndex: this.props.clipIndex,
                        updateModalViewState: this.updateClipsModalViewState,
                        loadMoreClips: this.props.loadMoreClips,
                        pageType: this.props.pageType
                    }), t[U] = !0), a.createElement(_.Z, {
                        className: h(t)
                    }, e, a.createElement(g.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }));
                    var n
                }, t = u.__decorate([Object(s.d)("ClipsViewModal")], t)
            }(a.Component),
            B = Object(l.b)(null, function(e) {
                return Object(d.b)({
                    showModal: c.d
                }, e)
            })(V),
            G = (n("Ajho"), "https://help.twitch.tv/customer/portal/articles/2918323-clip-champs-guide"),
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.clipChampIconClickHandler = function() {
                        Object(w.c)({
                            targetURL: G,
                            type: t.props.pageType
                        })
                    }, t.getClips = function() {
                        return t.props.clips
                    }, t.openModal = function(e) {
                        e.preventDefault(), t.props.showModal(B, {
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
                    return this.props.pageType === w.b.Channel && this.props.clip.game && (e = a.createElement(_._21, {
                        position: _._6.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        borderRight: !1,
                        borderBottom: !1,
                        className: "clips-preview-card__boxart"
                    }, a.createElement(m.a, {
                        to: Object(p.c)(this.props.clip.game.name) + "/clips",
                        "data-test-selector": "card-view-game-link",
                        "data-a-target": "clip-game-link"
                    }, a.createElement(_._33, {
                        display: _.L.Block,
                        direction: _._35.Bottom,
                        label: this.props.clip.game.name
                    }, a.createElement(_.C, {
                        alt: this.props.clip.game.name,
                        src: this.props.clip.game.boxArtURL,
                        aspect: _.k.BoxArt,
                        size: _.D.Size4
                    }))))), this.props.pageType === w.b.Game && (t = a.createElement(_.Z, null, a.createElement(m.a, {
                        className: "clips-preview-card__display-name",
                        to: "/" + this.props.clip.broadcaster.login + "/clips"
                    }, this.props.clip.broadcaster.login))), a.createElement(_.Z, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(_.A, u.__assign({
                        row: !0
                    }, Object(_._43)(this.props)), a.createElement(_.Z, {
                        position: _._6.Relative,
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, a.createElement(m.a, {
                        to: this.props.clip.url,
                        onClick: this.openModal,
                        "data-a-target": "clip-thumbnail-link"
                    }, a.createElement(_.C, {
                        src: this.props.clip.thumbnailURL || r.n.config.defaultStreamPreviewURL,
                        alt: this.props.clip.title,
                        aspect: _.k.Aspect16x9,
                        size: _.D.Size24
                    })), e), a.createElement(_.B, null, a.createElement(_._25, {
                        type: _._30.H3,
                        fontSize: _.P.Size5
                    }, a.createElement(m.a, {
                        className: "clips-preview-card__title",
                        to: this.props.clip.url,
                        onClick: this.openModal,
                        "data-a-target": "clip-title-link"
                    }, this.props.clip.title)), a.createElement(_._25, {
                        ellipsis: !0
                    }, t), a.createElement(_._25, {
                        color: _.I.Alt2,
                        ellipsis: !0
                    }, Object(r.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsCardView"), a.createElement(_.U, {
                        padding: {
                            x: .5
                        }
                    }, a.createElement("span", null, "·")), this.props.isClipChampExperiment && this.props.clip.champBadge && a.createElement(_.U, null, a.createElement("a", {
                        className: "clips-preview-card__clips-champ-badge",
                        href: G,
                        onClick: this.clipChampIconClickHandler,
                        target: "_blank"
                    }, a.createElement("img", {
                        alt: "clip champ badge",
                        className: "clips-preview-card__clips-champ-badge-img",
                        src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/clipchampbadge"
                    }))), a.createElement(_.U, {
                        padding: {
                            right: .5
                        }
                    }, a.createElement("span", null, Object(r.d)("Clipped by", "ClipsCardView"))), a.createElement(m.a, {
                        className: "clips-preview-card__display-name",
                        to: "/" + this.props.clip.curator.login,
                        "data-a-target": "clip-curator-link"
                    }, this.props.clip.curator.login)), a.createElement(_._25, {
                        color: _.I.Alt2
                    }, Object(r.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsCardView")))))
                }, t = u.__decorate([Object(s.d)("ClipsCardView")], t)
            }(a.Component),
            Z = Object(l.b)(null, function(e) {
                return Object(d.b)({
                    showModal: c.d
                }, e)
            })(H),
            W = n("QAcM"),
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.updateToAllTime = function() {
                        t.props.updateTimeFilter(W.b.All)
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(_.Z, {
                        className: "clips-cards"
                    }, a.createElement(_.S, {
                        gutterSize: _.T.None
                    }, 0 === this.props.clips.length ? this.renderEmpty() : this.renderClips()))
                }, t.prototype.renderEmpty = function() {
                    var e = this.props.timeFilterValue === W.b.All ? a.createElement(_.Z, null, a.createElement(_._25, {
                        fontSize: _.P.Size4
                    }, Object(r.d)("No Clips Found", "ClipsCards")), a.createElement(_.Z, {
                        margin: 3
                    }, Object(r.d)("<x:link>Learn how</x:link> to make and share clips of this channel", {
                        "x:link": function(e) {
                            return a.createElement("a", {
                                href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips",
                                target: "_blank"
                            }, e)
                        }
                    }, "ClipsCards"))) : a.createElement(_.Z, null, a.createElement(_._25, {
                        fontSize: _.P.Size4
                    }, Object(r.d)("No clips were created in this time period.", "ClipsCards"), a.createElement("br", null), Object(r.d)("Check out all popular clips from this channel instead.", "ClipsCards")), a.createElement(_.Z, {
                        margin: 3
                    }, a.createElement(_.u, {
                        type: _.z.Hollow,
                        onClick: this.updateToAllTime
                    }, Object(r.d)("See all popular clips", "ClipCards"))));
                    return a.createElement(_.Z, {
                        fullWidth: !0
                    }, a.createElement(_.S, null, a.createElement(_.J, {
                        cols: 3
                    }), a.createElement(_.J, {
                        cols: 6
                    }, a.createElement(_.Z, {
                        textAlign: _._26.Center
                    }, e)), a.createElement(_.J, {
                        cols: 3
                    })))
                }, t.prototype.renderClips = function() {
                    var e = this,
                        t = "on" === r.n.dynamicSettings.get("twilight_clips_already", "off");
                    return this.props.clips.map(function(n, i) {
                        return a.createElement(_.J, {
                            cols: {
                                default: 12,
                                xl: 6
                            },
                            key: n.slug
                        }, a.createElement(Z, {
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
            }(a.Component),
            q = Object(l.b)(null, function(e) {
                return Object(d.b)({
                    showModal: c.d
                }, e)
            })(z),
            $ = function(e) {
                return a.createElement(_.Z, null, a.createElement(_.Z, {
                    display: _.L.Flex,
                    flexWrap: _.O.NoWrap,
                    justifyContent: _.Y.Between,
                    margin: {
                        bottom: 2
                    },
                    fullWidth: !0
                }, a.createElement(_.Z, {
                    display: _.L.Flex,
                    flexWrap: _.O.NoWrap
                }, e.pageType === w.b.Game && a.createElement(_.Z, {
                    margin: {
                        right: 1
                    }
                }, a.createElement(o.a, null)), a.createElement(_.Z, null, a.createElement(W.c, {
                    updateTimeFilter: e.updateTimeFilter,
                    timeFilterValue: e.timeFilterValue
                }))), a.createElement(_.u, {
                    linkTo: "https://twitch.tv/manager/clips",
                    targetBlank: !0,
                    type: _.z.Hollow,
                    "data-a-target": "manage-clips-button"
                }, Object(r.d)("Manage my clips", "TopClips"))), a.createElement(_.Z, null, e.isLoading ? a.createElement(_._1, {
                    fillContent: !0
                }) : a.createElement(q, {
                    clips: e.clips,
                    pageType: e.pageType,
                    loadMoreClips: e.loadMoreClips,
                    updateTimeFilter: e.updateTimeFilter,
                    timeFilterValue: e.timeFilterValue
                })))
            },
            Q = Object(s.d)("TopClips", {
                autoReportInteractive: !0
            })($);
        n.d(t, !1, function() {
            return $
        }), n.d(t, "a", function() {
            return Q
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
            a = n("U7vG"),
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
                    }, a.createElement(s.Z, {
                        className: "image-uploader",
                        textAlign: s._26.Center,
                        display: s.L.Flex,
                        flexDirection: s.N.Column,
                        alignItems: s.c.Center,
                        justifyContent: s.Y.Center,
                        position: s._6.Relative,
                        fullHeight: !0,
                        fullWidth: !0
                    }, this.renderErrorMessage(), a.createElement(s.Z, {
                        position: s._6.Relative
                    }, a.createElement(s.Z, {
                        className: "image-uploader__upload-svg--anim-backfill"
                    }, a.createElement(s._12, {
                        asset: s._13.Upload,
                        type: s._14.Alt2,
                        width: this.props.iconWidth || 99,
                        height: this.props.iconWidth || 76
                    })), a.createElement(s.Z, {
                        className: "image-uploader__upload-svg--anim-fill",
                        position: s._6.Absolute,
                        display: this.props.isLoading ? s.L.Block : s.L.Hide,
                        attachTop: !0
                    }, a.createElement(s._12, {
                        asset: s._13.Upload,
                        type: s._14.Brand,
                        width: this.props.iconWidth || 99,
                        height: this.props.iconHeight || 76
                    }))), this.props.isLoading ? this.renderLoadingState() : this.renderNormalState()))
                }, t.prototype.renderLoadingState = function() {
                    return a.createElement(s.Z, {
                        margin: 1,
                        "data-test-selector": "image-uploader-loading"
                    }, a.createElement(s._25, {
                        type: s._30.H4
                    }, Object(r.d)("Uploading", "ImageUploader")))
                }, t.prototype.renderNormalState = function() {
                    var e = Object(r.d)("Browse", "ImageUploader");
                    return a.createElement(s.Z, null, a.createElement(s.Z, null, a.createElement(s._25, {
                        type: s._30.H4
                    }, Object(r.d)("Drag and drop your image here", "ImageUploader"))), a.createElement(s.Z, {
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            x: 1,
                            y: 0
                        },
                        fullWidth: !0,
                        "data-test-selector": "image-uploader-hint"
                    }, a.createElement(s._25, {
                        type: s._30.P,
                        fontSize: s.P.Size7,
                        color: s.I.Alt2
                    }, this.props.hintMessage)), a.createElement(s.Z, null, a.createElement(s.u, {
                        ariaLabel: e,
                        type: s.z.Hollow
                    }, e)))
                }, t.prototype.renderErrorMessage = function() {
                    if (this.props.errorMessage) return a.createElement(s.Z, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "image-uploader-error"
                    }, a.createElement(s._25, {
                        type: s._30.H5,
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
    "68hr": function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("6sO2"),
            r = n("yWCw"),
            o = n("Odds"),
            s = function() {
                return i.createElement(r.a, {
                    message: Object(a.d)("Sorry. Unless you’ve got a time machine, that content is unavailable.", "PageNotFound")
                }, i.createElement(o.Z, {
                    margin: {
                        top: 2
                    }
                }, i.createElement(o.u, {
                    linkTo: "/directory",
                    "data-a-target": "browse-channels-button"
                }, Object(a.d)("Browse channels", "PageNotFound"))))
            };
        n.d(t, "a", function() {
            return s
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
            l = n("U7vG"),
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
                        return l.createElement(h.Z, {
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
                    return l.createElement(h.Z, {
                        className: "language-select-menu"
                    }, l.createElement(u.a, null, l.createElement(h.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: h.z.Hollow
                    }, l.createElement(h.Z, {
                        display: h.L.Flex
                    }, Object(d.d)("Language", "LanguageSelectMenu"), l.createElement(h.Z, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && l.createElement(h._3, {
                        type: h._4.Brand,
                        label: e.toString()
                    })))), l.createElement(h.p, {
                        direction: h.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, l.createElement(c.b, {
                        className: "language-select-menu__balloon"
                    }, l.createElement(h.Z, {
                        padding: .5
                    }, Object(m.b)().map(this.renderLanguageOption))), l.createElement(h._21, {
                        background: h.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, l.createElement(h.u, {
                        type: h.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(d.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = s.__decorate([Object(p.d)("LanguageSelectMenu")], t)
            }(l.Component)),
            v = Object(i.b)(function(e) {
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
            var t = i.createElement(o.Z, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.N.Column,
                justifyContent: o.Y.Center,
                display: o.L.Flex
            }, i.createElement(o._25, {
                color: o.I.Link,
                fontSize: o.P.Size4,
                noWrap: !0
            }, Object(r.d)("View All", "Following--ViewAllButton")), i.createElement(o._25, {
                color: o.I.Alt2,
                fontSize: o.P.Size4,
                noWrap: !0
            }, e.subHeader));
            return e.linkTo && (t = i.createElement(a.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t)), i.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": l
            }, i.createElement(o.Z, null, i.createElement(o.j, {
                ratio: e.aspectRatio
            }, i.createElement(o._21, {
                background: o.m.Alt2,
                fullHeight: !0
            }, t))))
        };
        var i = n("U7vG"),
            a = (n.n(i), n("F8kA")),
            r = n("6sO2"),
            o = n("Odds"),
            s = n("oHn4"),
            l = (n.n(s), "view-all-button-selector")
    },
    "7yeK": function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                type: I,
                csgoMap: e
            }
        }

        function a(e) {
            return {
                type: A,
                leagueChampion: e
            }
        }

        function r(e) {
            return {
                type: R,
                overwatchCharacter: e
            }
        }

        function o(e) {
            return {
                type: j,
                hearthstoneClass: e
            }
        }

        function s(e) {
            return {
                type: P,
                hearthstoneMode: e
            }
        }

        function l(e) {
            var t = this;
            return function(n) {
                return F.__awaiter(t, void 0, void 0, function() {
                    return F.__generator(this, function(t) {
                        return T.l.set(x, e), n(i(e)), [2]
                    })
                })
            }
        }

        function d() {
            var e = this;
            return function(t) {
                return F.__awaiter(e, void 0, void 0, function() {
                    return F.__generator(this, function(e) {
                        return T.l.remove(x), t(i("")), [2]
                    })
                })
            }
        }

        function c(e) {
            var t = this;
            return function(n) {
                return F.__awaiter(t, void 0, void 0, function() {
                    return F.__generator(this, function(t) {
                        return T.l.set(V, e), n(a(e)), [2]
                    })
                })
            }
        }

        function u() {
            var e = this;
            return function(t) {
                return F.__awaiter(e, void 0, void 0, function() {
                    return F.__generator(this, function(e) {
                        return T.l.remove(V), t(a(G)), [2]
                    })
                })
            }
        }

        function m(e) {
            var t = this;
            return function(n) {
                return F.__awaiter(t, void 0, void 0, function() {
                    return F.__generator(this, function(t) {
                        return T.l.set(B, e), n(r(e)), [2]
                    })
                })
            }
        }

        function p(e) {
            var t = this;
            return function(n) {
                return F.__awaiter(t, void 0, void 0, function() {
                    return F.__generator(this, function(t) {
                        return T.l.set(M, e), n(o(e)), [2]
                    })
                })
            }
        }

        function h() {
            var e = this;
            return function(t) {
                return F.__awaiter(e, void 0, void 0, function() {
                    return F.__generator(this, function(e) {
                        return T.l.remove(B), t(r("")), [2]
                    })
                })
            }
        }

        function g() {
            var e = this;
            return function(t) {
                return F.__awaiter(e, void 0, void 0, function() {
                    return F.__generator(this, function(e) {
                        return T.l.remove(M), t(o("")), [2]
                    })
                })
            }
        }

        function v(e) {
            var t = this;
            return function(n) {
                return F.__awaiter(t, void 0, void 0, function() {
                    return F.__generator(this, function(t) {
                        return T.l.set(U, e), n(s(e)), [2]
                    })
                })
            }
        }

        function f() {
            var e = this;
            return function(t) {
                return F.__awaiter(e, void 0, void 0, function() {
                    return F.__generator(this, function(e) {
                        return T.l.remove(U), t(s("")), [2]
                    })
                })
            }
        }

        function y() {
            return {
                csgoMap: T.l.get(x, ""),
                hearthstoneClass: T.l.get(M, ""),
                hearthstoneMode: T.l.get(U, ""),
                leagueChampion: T.l.get(V, G),
                overwatchCharacter: T.l.get(B, "")
            }
        }

        function k(e) {
            return e.gameFilters.csgoMap
        }

        function b(e) {
            return e.gameFilters.leagueChampion
        }

        function _(e) {
            return e.gameFilters.overwatchCharacter
        }

        function S(e) {
            return e.gameFilters.hearthstoneClass
        }

        function C(e) {
            return e.gameFilters.hearthstoneMode
        }

        function E(e) {
            for (var t = "", n = [], i = 0, a = Fe.length; i < a && n.length <= 1; i++) t = Fe[i], n = e.split(t).map(function(e) {
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

        function N() {
            return {
                type: pt
            }
        }

        function w() {
            return {
                type: ht
            }
        }

        function O(e) {
            return e.directoryHeader.isEditingEnabled
        }

        function D() {
            var e = this;
            return Object(Y.a)(yt, {
                props: function(t) {
                    return {
                        createUploadURLMutation: function(n, i, a) {
                            return F.__awaiter(e, void 0, void 0, function() {
                                var e;
                                return F.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return t.mutate ? [4, t.mutate({
                                                variables: {
                                                    input: {
                                                        communityID: n,
                                                        imageType: i,
                                                        imageFormat: a.substring(a.indexOf("/") + 1).toUpperCase()
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return e = r.sent(), [2, {
                                                url: e.data.createCommunityImageUploadURL.url,
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
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var F = n("TToO"),
            T = n("6sO2"),
            L = n("pqU3");
        T.n.store.registerReducer("directory", function(e, t) {
            switch (void 0 === e && (e = {
                leagueOfLegends: {
                    apiData: null,
                    championsMap: null,
                    isError: !1,
                    isLoading: !1,
                    version: ""
                }
            }), t.type) {
                case L.a:
                    return F.__assign({}, e, {
                        leagueOfLegends: {
                            apiData: t.apiData,
                            championsMap: t.championsMap,
                            isError: !1,
                            isLoading: !1,
                            version: t.apiVersion
                        }
                    });
                case L.b:
                    return F.__assign({}, e, {
                        leagueOfLegends: F.__assign({}, e.leagueOfLegends, {
                            isError: t.leagueOfLegendsChampionsErrored,
                            isLoading: !1
                        })
                    });
                case L.c:
                    return F.__assign({}, e, {
                        leagueOfLegends: F.__assign({}, e.leagueOfLegends, {
                            isError: !1,
                            isLoading: t.leagueOfLegendsChampionsLoading
                        })
                    });
                default:
                    return e
            }
        });
        var I = "core.game-filters.CSGO_MAP_PREFERENCES_UPDATED",
            A = "core.game-filters.LEAGUE_CHAMPION_PREFERENCES_UPDATED",
            R = "core.game-filters.OVERWATCH_CHARACTER_PREFERENCES_UPDATED",
            j = "core.game-filters.HEARTHSTONE_CLASS_PREFERENCES_UPDATED",
            P = "core.game-filters.HEARTHSTONE_MODE_PREFERENCES_UPDATED",
            x = "csgoMapFilter",
            M = "hearthstoneClassFilter",
            U = "hearthstoneModeFilter",
            V = "leagueChampionFilter",
            B = "overwatchHeroFilter",
            G = 0;
        T.n.store.registerReducer("gameFilters", function(e, t) {
            switch (void 0 === e && (e = y()), t.type) {
                case I:
                    return F.__assign({}, e, {
                        csgoMap: t.csgoMap
                    });
                case j:
                    return F.__assign({}, e, {
                        hearthstoneClass: t.hearthstoneClass
                    });
                case P:
                    return F.__assign({}, e, {
                        hearthstoneMode: t.hearthstoneMode
                    });
                case A:
                    return F.__assign({}, e, {
                        leagueChampion: t.leagueChampion
                    });
                case R:
                    return F.__assign({}, e, {
                        overwatchCharacter: t.overwatchCharacter
                    });
                default:
                    return e
            }
        });
        var H, Z = n("U7vG"),
            W = n("RH2O"),
            z = n("c8Oh"),
            q = n("6yQB"),
            $ = n("yWCw"),
            Q = n("DtWM"),
            Y = n("7vx8"),
            J = n("j7/Y"),
            X = n("oIkB"),
            K = n("w9tK"),
            ee = n("Us7i"),
            te = n("vH/s"),
            ne = n("/+to"),
            ie = n("QG7y"),
            ae = n("CSlQ"),
            re = n("Jwld"),
            oe = n("v5ho"),
            se = function(e) {
                return e.startsWith("/communities") || e.startsWith("/directory/communities") ? oe.a.Communities : oe.a.Games
            },
            le = n("2KeS"),
            de = n("zCIC"),
            ce = n("+Znq"),
            ue = n("Odds"),
            me = (n("IDLB"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.balloonOpen = !1, t.onChangeSearchTerm = function(e) {
                        t.props.onSearch(e.currentTarget.value)
                    }, t.onToggle = function(e) {
                        return t.balloonOpen = !e
                    }, t.renderSections = function() {
                        return t.props.sections ? t.props.sections.map(function(e) {
                            return [Z.createElement(ue.U, {
                                padding: {
                                    x: 1,
                                    top: .5
                                },
                                key: "header"
                            }, Z.createElement(ue._25, {
                                color: ue.I.Alt2
                            }, e.title)), e.items]
                        }) : null
                    }, t.renderSelected = function() {
                        return t.props.selected ? Z.createElement(ue._21, {
                            borderBottom: !0
                        }, Z.createElement(ue.U, {
                            padding: {
                                x: 1,
                                top: .5
                            }
                        }, Z.createElement(ue._25, {
                            color: ue.I.Alt2
                        }, t.props.selectedTitle)), t.props.selected) : null
                    }, t.setSearchRef = function(e) {
                        t.props.searchRefDelegate && t.props.searchRefDelegate(e)
                    }, t.setToggleRef = function(e) {
                        return t.toggleRef = e
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    (!this.props.selected && e.selected || this.props.selected && !e.selected) && this.balloonOpen && this.toggleRef && this.toggleRef.toggleBalloon(!1)
                }, t.prototype.render = function() {
                    return this.props.isError ? null : this.props.isLoading ? Z.createElement(ue.Z, {
                        display: ue.L.Flex,
                        justifyContent: ue.Y.Center,
                        alignItems: ue.c.Center
                    }, Z.createElement(ue._5, {
                        width: 70,
                        height: 30
                    })) : Z.createElement(ue.Z, {
                        className: "selectable-filter"
                    }, Z.createElement(ce.a, {
                        onToggle: this.onToggle,
                        ref: this.setToggleRef
                    }, Z.createElement(ue.u, F.__assign({
                        dropdown: !0,
                        type: ue.z.Hollow
                    }, Object(ue._43)(this.props)), Z.createElement(ue.Z, {
                        display: ue.L.Flex
                    }, this.props.title)), Z.createElement(ue.p, {
                        direction: ue.q.BottomLeft,
                        noTail: !0
                    }, Z.createElement(ue.Z, {
                        className: "selectable-filter__balloon",
                        padding: {
                            y: .5
                        }
                    }, Z.createElement(ue._21, {
                        padding: 1,
                        borderBottom: !0
                    }, Z.createElement(ue._15, {
                        refDelegate: this.setSearchRef,
                        onChange: this.onChangeSearchTerm,
                        placeholder: this.props.searchPlaceholder
                    })), this.renderSelected(), Z.createElement(de.b, {
                        className: "selectable-filter__scroll-container"
                    }, Z.createElement(ue.Z, null, this.renderSections()))))))
                }, t
            }(Z.Component)),
            pe = (n("zu64"), function(e) {
                return Z.createElement(ue.X, F.__assign({
                    onClick: e.onClick,
                    key: e.key,
                    disabled: e.disabled
                }, Object(ue._43)(e)), Z.createElement(ue.Z, {
                    className: "selectable-filter-item",
                    display: ue.L.Flex,
                    flexDirection: ue.N.Row,
                    alignItems: ue.c.Center,
                    margin: {
                        y: .5,
                        x: 1
                    },
                    flexWrap: ue.O.NoWrap
                }, e.spriteWidth && Z.createElement(ue.Z, {
                    className: "selectable-filter-item__avatar-container",
                    flexShrink: 0
                }, Z.createElement("div", {
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
                })), Z.createElement(ue.U, {
                    margin: {
                        left: 1
                    },
                    flexGrow: 1,
                    ellipsis: !0
                }, Z.createElement(ue._25, {
                    fontSize: ue.P.Size5
                }, e.name)), e.withClose && Z.createElement(ue._12, {
                    asset: ue._13.Close
                })))
            }),
            he = [{
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
            ge = function(e) {
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
                        return F.__awaiter(t, void 0, void 0, function() {
                            return F.__generator(this, function(e) {
                                return this.state.isLoading || this.state.isError || this.state.content ? [2] : (this.setState({
                                    content: he
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
                        return void 0 === n && (n = !1), Z.createElement(pe, {
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
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (this.props.firstPageLoaded && this.loadData(), this.props.csgoMap) {
                        var t = he[0].Maps.find(function(t) {
                            return t.name === e.props.csgoMap
                        });
                        t && this.setState({
                            selected: t
                        })
                    }
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return Z.createElement(me, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(T.d)("Search by Map", "CSGOMapFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(T.d)("Selected Map", "CSGOMapFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(T.d)("Map", "CSGOMapFilter"),
                        "data-test-selector": "csgo-filter-selector"
                    })
                }, t
            }(Z.Component),
            ve = Object(W.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    csgoMap: k(e)
                }
            }, function(e) {
                return Object(le.b)({
                    updateCSGOMapPreference: l,
                    clearCSGOMapPreference: d
                }, e)
            })(ge),
            fe = n("iOr9"),
            ye = n("HW6M"),
            ke = function() {
                var e = function() {
                    return Z.createElement(ue.Z, {
                        className: "featured-events-layout__column",
                        margin: {
                            bottom: 3
                        }
                    }, Z.createElement(ue.Z, {
                        margin: {
                            bottom: 1
                        }
                    }, Z.createElement(ue._5, {
                        height: 60
                    })), Z.createElement(ue._25, null, Z.createElement(ue._5, {
                        width: 130
                    })), Z.createElement(ue._25, null, Z.createElement(ue._5, {
                        width: 105
                    })))
                };
                return Z.createElement(ue.Z, {
                    fullWidth: !0
                }, Z.createElement(ue.Z, {
                    margin: {
                        bottom: 2
                    }
                }, Z.createElement(ue._25, null, Z.createElement(ue._5, {
                    width: 150
                }))), [1, 2, 3].map(function(t) {
                    return Z.createElement(e, {
                        key: t
                    })
                }))
            },
            be = (n("tmqW"), Object(ae.d)("EventCard", {
                autoReportInteractive: !0
            })(function(e) {
                var t = {
                    backgroundImage: "url(" + e.imageURL + ")"
                };
                return Z.createElement(ue._21, {
                    className: "event",
                    margin: {
                        bottom: 1
                    },
                    border: !0
                }, Z.createElement("div", {
                    className: "event__header",
                    style: t
                }, Z.createElement("div", {
                    className: "event__header-overlay"
                }, Z.createElement(ue._25, {
                    type: ue._30.H5,
                    bold: !0
                }, e.title))), e.children)
            })),
            _e = Object(ae.d)("LiveEvents", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.events.map(function(e, t) {
                    if (!e.owner) return null;
                    var n = e.owner.stream;
                    if (!n) return null;
                    var i = {
                        pathname: "/" + e.owner.login,
                        state: {
                            medium: te.PageviewMedium.Game,
                            content: te.PageviewContent.EventLive,
                            content_index: t
                        }
                    };
                    return Z.createElement(be, {
                        key: e.id,
                        title: e.title,
                        imageURL: e.coverImageURL,
                        eventIDs: [e.id]
                    }, Z.createElement(ue.Z, {
                        padding: 1,
                        alignItems: ue.c.Baseline,
                        display: ue.L.Flex,
                        justifyContent: ue.Y.Between
                    }, Z.createElement(ue._25, {
                        type: ue._30.P
                    }, Object(T.d)("{viewerCount, number} viewers", {
                        viewerCount: n.viewersCount
                    }, "Events"), " - ", e.owner.displayName), Z.createElement(ue.u, {
                        linkTo: i
                    }, Object(T.d)("Watch Now", "Events"))))
                });
                return Z.createElement(ue.Z, null, t)
            }),
            Se = n("mi6k"),
            Ce = Object(ae.d)("PastEvents", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.events.map(function(e, t) {
                    if (0 === e.videos.length) return null;
                    var n = e.videos.map(function(n, i) {
                        var a = Object(Se.a)(n.lengthSeconds || 0),
                            r = i === e.videos.length - 1 ? "event__video-last" : "",
                            o = {
                                pathname: "/videos/" + n.id,
                                state: {
                                    medium: te.PageviewMedium.Game,
                                    content: te.PageviewContent.EventPast,
                                    content_index: t
                                }
                            };
                        return Z.createElement(ue.X, {
                            key: n.id,
                            linkTo: o,
                            alpha: !0
                        }, Z.createElement(ue.Z, {
                            className: "event__video " + r,
                            padding: 1
                        }, Z.createElement(ue.Z, {
                            className: "event__video-card"
                        }, Z.createElement(ue.A, {
                            row: !0
                        }, Z.createElement(ue.C, {
                            src: n.thumbnailURL,
                            alt: n.title,
                            size: ue.D.Size6
                        }), Z.createElement(ue.B, null, Z.createElement(ue.Z, {
                            padding: {
                                left: 1
                            }
                        }, Z.createElement(ue._25, {
                            type: ue._30.H6
                        }, n.title), Z.createElement(ue.Z, {
                            className: "event__broadcast-details"
                        }, Z.createElement(ue._25, {
                            type: ue._30.P
                        }, Object(T.d)("{viewCount, number} views", {
                            viewCount: n.viewCount
                        }, "Events"), " · ", a))))))))
                    });
                    return Z.createElement(be, {
                        key: e.id,
                        title: e.title,
                        imageURL: e.imageURL,
                        eventIDs: [e.id]
                    }, n)
                });
                return Z.createElement(ue.Z, null, t)
            }),
            Ee = n("Aj/L"),
            Ne = n("AMWC"),
            we = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.unfollowEvent = function(e) {
                        e && (e.stopPropagation(), e.preventDefault()), t.props.updateEventBroadcastNotifications(Object(X.a)({
                            eventID: t.props.eventID,
                            emailEnabled: !1
                        })), T.n.tracking.track(te.SpadeEventType.EventFollowing, {
                            action: "email_reminder_off",
                            event_id: t.props.eventID,
                            location: "directory"
                        })
                    }, t.followEvent = function(e) {
                        e && (e.stopPropagation(), e.preventDefault()), t.props.updateEventBroadcastNotifications(Object(X.a)({
                            eventID: t.props.eventID,
                            emailEnabled: !0
                        })), T.n.tracking.track(te.SpadeEventType.EventFollowing, {
                            action: "email_reminder_on",
                            event_id: t.props.eventID,
                            location: "directory"
                        })
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.isLoggedIn) return null;
                    var e = ue._13.Heart,
                        t = this.followEvent,
                        n = Object(T.d)("Remind Me", "Events");
                    return this.props.areNotificationsEnabled && (e = ue._13.FollowCheck, t = this.unfollowEvent, n = Object(T.d)("Reminder Set", "Events")), Z.createElement(ue._33, {
                        label: n,
                        align: ue._34.Right
                    }, Z.createElement(ue.v, {
                        size: ue.x.Default,
                        icon: e,
                        onClick: t,
                        ariaLabel: n
                    }))
                }, t = F.__decorate([Object(Y.a)(Ne, {
                    name: "updateEventBroadcastNotifications"
                }), Object(ae.d)("NotifyMeComponent")], t)
            }(Z.Component),
            Oe = Object(W.b)(function(e) {
                return {
                    isLoggedIn: Object(Ee.d)(e)
                }
            })(we),
            De = Object(ae.d)("UpcomingEvents", {
                autoReportInteractive: !0
            })(function(e) {
                var t = 0,
                    n = e.events.map(function(e) {
                        var n = e.broadcasts.map(function(n, i) {
                                return Z.createElement(ue.X, {
                                    key: n.id,
                                    linkTo: function(e, t, n) {
                                        return e + "?tt_medium=" + te.PageviewMedium.Game + "&tt_content=" + t + "&tt_content_index=" + n
                                    }("https://twitch.tv/events/" + n.id, te.PageviewContent.EventUpcoming, t++),
                                    alpha: !0
                                }, Z.createElement(ue.Z, {
                                    className: "event__broadcast-wrapper"
                                }, Z.createElement(ue.Z, {
                                    className: ye("event__broadcast", {
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
                                    display: ue.L.Flex,
                                    flexWrap: ue.O.NoWrap,
                                    justifyContent: ue.Y.Between
                                }, Z.createElement(ue.Z, {
                                    flexShrink: 1
                                }, Z.createElement(ue.Z, {
                                    className: "event__broadcast-header",
                                    fullWidth: !0
                                }, Z.createElement(ue._25, {
                                    bold: !0
                                }, Object(T.c)(n.startAt, "medium"), n.title && " - ", n.title)), Z.createElement(ue.Z, {
                                    className: "event__broadcast-details"
                                }, Object(T.d)("{start,time,short} - {end,time,short}", {
                                    start: n.startAt,
                                    end: n.endAt
                                }, "UpcomingEvents"))), Z.createElement(ue.Z, {
                                    display: ue.L.Flex,
                                    flexShrink: 0,
                                    margin: {
                                        left: 1
                                    },
                                    alignSelf: ue.d.Center
                                }, Z.createElement(Oe, {
                                    eventID: n.id,
                                    areNotificationsEnabled: n.notificationsEnabled
                                })))))
                            }),
                            i = e.broadcasts.map(function(e) {
                                return e.id
                            });
                        return Z.createElement(be, {
                            key: i.join(""),
                            imageURL: e.imageURL,
                            title: e.title,
                            eventIDs: i
                        }, n)
                    });
                return Z.createElement(ue.Z, null, n)
            }),
            Fe = [" | ", " - "],
            Te = n("hcPX"),
            Le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tracked = !1, t
                }
                return F.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return Z.createElement(ke, null);
                    if (this.props.data.error || null === this.props.data.game) return Z.createElement(ue._21, {
                        color: ue.I.Alt2,
                        display: ue.L.Flex,
                        justifyContent: ue.Y.Center,
                        alignItems: ue.c.Center,
                        fullWidth: !0
                    }, Z.createElement(ue._12, {
                        asset: ue._13.DeadGlitch,
                        width: 46,
                        height: 48
                    }));
                    var e = !1,
                        t = null,
                        n = this.props.data.game.featuredEventBroadcasts.live.filter(this.isNotNull);
                    0 !== n.length && (e = !0, t = Z.createElement(ue.Z, {
                        margin: {
                            bottom: 3
                        }
                    }, Z.createElement(ue.Z, {
                        margin: {
                            bottom: 1
                        }
                    }, Z.createElement(ue._25, {
                        type: ue._30.H4
                    }, Object(T.d)("Live Events", "Events"))), Z.createElement(ue.Z, null, Z.createElement(_e, {
                        events: n
                    }))));
                    var i = null,
                        a = this.props.data.game.featuredEventBroadcasts.future.filter(this.isNotNull),
                        r = this.convertUpcomingEvents(a);
                    0 !== r.length && (e = !0, i = Z.createElement(ue.Z, {
                        margin: {
                            bottom: 3
                        }
                    }, Z.createElement(ue.Z, {
                        margin: {
                            bottom: 1
                        }
                    }, Z.createElement(ue._25, {
                        type: ue._30.H4
                    }, Object(T.d)("Upcoming Events", "Events"))), Z.createElement(ue.Z, null, Z.createElement(De, {
                        events: r
                    }))));
                    var o = null,
                        s = this.props.data.game.featuredEventBroadcasts.past.filter(this.isNotNull),
                        l = this.convertPastEvents(s);
                    return 0 !== l.length && (e = !0, o = Z.createElement(ue.Z, {
                        margin: {
                            bottom: 3
                        }
                    }, Z.createElement(ue.Z, {
                        margin: {
                            bottom: 1
                        }
                    }, Z.createElement(ue._25, {
                        type: ue._30.H4
                    }, Object(T.d)("Recent Events", "Events"))), Z.createElement(ue.Z, null, Z.createElement(Ce, {
                        events: l
                    })))), Z.createElement(ue.Z, {
                        className: ye({
                            "featured-events-layout__column": e
                        })
                    }, t, i, o)
                }, t.prototype.trackPresentation = function(e, t, n) {
                    var i = e.map(function(e) {
                            return e.id
                        }),
                        a = [];
                    t.forEach(function(e) {
                        var t = e.broadcasts.map(function(e) {
                            return e.id
                        });
                        a.push.apply(a, t)
                    });
                    var r = n.map(function(e) {
                        return e.id
                    });
                    T.n.tracking.track(te.SpadeEventType.FeaturedEventPresentation, {
                        game: this.props.data.game ? this.props.data.game.name : "unknown game",
                        live_events: JSON.stringify(i),
                        upcoming_events: JSON.stringify(a),
                        past_events: JSON.stringify(r)
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
                            var n = E(e.title),
                                i = t.get(n.prefix) || [];
                            i.push(e), t.has(n.prefix) || t.set(n.prefix, i)
                        }), t.forEach(function(e, t) {
                            n.push({
                                title: t,
                                imageURL: e[0].coverImageURL,
                                broadcasts: e.map(function(e) {
                                    return {
                                        id: e.id,
                                        title: E(e.title).postfix,
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
                            for (var t = "", n = [], i = 0, a = 0, r = Fe.length; a < r && i <= 1; a++) t = Fe[a], n = e.map(function(e) {
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
                                    identifier: E(e).best
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
                }, t = F.__decorate([Object(Y.a)(Te, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.gameName
                            }
                        }
                    }
                })], t)
            }(Z.Component),
            Ie = n("AadB"),
            Ae = (n("SG0P"), "directory-container"),
            Re = "direectory-grid-grid-layout",
            je = "directory-grid-sidebar-layout",
            Pe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderAdLessGrid = function() {
                        return t.renderGrid(!1)
                    }, t.renderGrid = function(e) {
                        void 0 === e && (e = !0);
                        var n = null;
                        return e && (n = Z.createElement(ne.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: ie.d.directory,
                            slotID: ie.b.directory.rectangle,
                            adSize: ie.c.directory.rectangle,
                            targeting: {
                                pagetype: ie.a.games,
                                game: t.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        })), Z.createElement(ue.Z, {
                            flexShrink: 0,
                            "data-target": Ae,
                            "data-test-selector": Re
                        }, Z.createElement(ue._36, {
                            gutterSize: ue._38.Small,
                            childWidth: ue._37.Large,
                            placeholderItems: 20
                        }, n, t.props.children), Z.createElement(de.a, {
                            enabled: t.props.canLoadMore,
                            loadMore: t.props.loadMore,
                            pixelThreshold: 200
                        }))
                    }, t.renderSidebar = function() {
                        return Z.createElement(ue.Z, {
                            display: ue.L.Flex,
                            flexWrap: ue.O.NoWrap,
                            fullWidth: !0,
                            "data-test-selector": je
                        }, Z.createElement(ue.Z, {
                            flexGrow: 1,
                            display: ue.L.Flex,
                            flexWrap: ue.O.Wrap,
                            fullWidth: !0
                        }, Z.createElement(ue._36, {
                            gutterSize: ue._38.Small,
                            childWidth: ue._37.Medium,
                            placeholderItems: 20
                        }, t.props.children), Z.createElement(de.a, {
                            enabled: t.props.canLoadMore,
                            loadMore: t.props.loadMore,
                            pixelThreshold: 200
                        })), Z.createElement(ue.Z, {
                            display: ue.L.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            margin: {
                                left: 3
                            }
                        }, Z.createElement(ue.Z, {
                            display: ue.L.Flex,
                            flexDirection: ue.N.Column
                        }, Z.createElement(ne.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 0,
                                width: 320,
                                height: 250
                            },
                            adUnit: ie.d.directory,
                            slotID: ie.b.directory.rectangle,
                            adSize: ie.c.directory.rectangle,
                            targeting: {
                                pagetype: ie.a.games,
                                game: t.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        }), t.props.firstPageLoaded ? Z.createElement(Le, {
                            gameName: t.props.communityName
                        }) : Z.createElement(ke, null))))
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + Ae + '"]'),
                            t = document.querySelector('[data-target="' + Ie.a + '"]'),
                            n = document.querySelector("#" + ie.b.directory.rectangle);
                        if (t && e && n) {
                            var i = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== i && "0" !== i && (n.style.order = i)
                        }
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        return Z.createElement(fe.a, {
                            name: "TWILIGHT_EVENT_GAME_DIRECTORY",
                            assignments: e,
                            loader: t
                        })
                    }
                    return this.renderGrid()
                }, t.prototype.isEventApprovedDirectory = function(e) {
                    return T.n.dynamicSettings.get("event_directory_enabled_games", []).includes(e.toLowerCase())
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t
            }(Z.Component),
            xe = Object(ae.d)("DirectoryGrid")(Pe),
            Me = Object(W.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(xe),
            Ue = n("NY9D"),
            Ve = n("jkA6"),
            Be = n("7FW4"),
            Ge = n("peXu"),
            He = n("F3Wg"),
            Ze = n("SN3I"),
            We = n("MMhf"),
            ze = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return F.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory || this.props.data.error || !this.props.data.directory) return null;
                    var t, n = Object(We.a)(this.props.languageCode),
                        i = this.props.directoryWidth,
                        a = this.props.directoryType === oe.a.Communities ? te.PageviewMedium.Community : te.PageviewMedium.Game,
                        r = this.props.data.directory.streams.edges || [];
                    if (i && i > 0) {
                        var o = Object(Ge.a)(i, 240, 2);
                        o < r.length && (r = r.slice(0, o - 1), t = Z.createElement("div", {
                            style: {
                                order: r.length
                            }
                        }, Z.createElement(Be.a, {
                            subHeader: n,
                            linkTo: {
                                pathname: this.getViewAllPath(),
                                state: {
                                    medium: a,
                                    content: te.PageviewContent.Game
                                }
                            }
                        })))
                    }
                    var s = r.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(t, n) {
                        var i = t.node;
                        return Z.createElement(Ie.b, {
                            directoryName: decodeURIComponent(e.props.directoryName),
                            directoryType: e.props.directoryType,
                            streamIndex: n,
                            streamNode: i,
                            key: i.id,
                            trackingMedium: a
                        })
                    });
                    return Z.createElement("div", null, Z.createElement(Ze.a, {
                        languageCode: this.props.languageCode
                    }), Z.createElement(ue._36, {
                        gutterSize: ue._38.Small,
                        childWidth: ue._37.Medium,
                        placeholderItems: 20
                    }, s, t))
                }, t.prototype.getViewAllPath = function() {
                    return this.props.directoryType === oe.a.Communities ? Object(Ue.a)(this.props.directoryName) + "/" + this.props.languageCode : Object(Ue.c)(this.props.directoryName) + "/" + this.props.languageCode
                }, t = F.__decorate([Object(Y.a)(He, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.directoryName),
                                limit: 30,
                                languages: [e.languageCode],
                                type: Object(Ve.a)(e.directoryType)
                            }
                        }
                    }
                }), Object(ae.d)("DirectoryInternationalSection", {
                    autoReportInteractive: !0
                })], t)
            }(Z.Component),
            qe = n("/SNv"),
            $e = n.n(qe),
            Qe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = T.n.logger.withCategory("hearthstone-class-filter"), t.getSections = function() {
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
                        return F.__awaiter(t, void 0, void 0, function() {
                            var e, t, i = this;
                            return F.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, n.e(71).then(n.bind(null, "e/M0"))];
                                    case 2:
                                        return e = a.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }, function() {
                                            i.state.content && i.state.content.forEach(function(e) {
                                                Object.keys(e).forEach(function(t) {
                                                    e[t].forEach(function(e) {
                                                        i.props.hearthstoneClass && i.props.hearthstoneClass === e.class && i.setState({
                                                            selected: e
                                                        })
                                                    })
                                                })
                                            })
                                        }), [3, 4];
                                    case 3:
                                        return t = a.sent(), this.logger.error(t, "Failed to load Hearthstone class data"), this.setState({
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
                        return void 0 === n && (n = !1), Z.createElement(pe, {
                            key: e.name,
                            name: e.class,
                            onClick: t,
                            spriteAsset: $e.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_width,
                            spriteHeight: e.image_height,
                            withClose: n
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return Z.createElement(me, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(T.d)("Search by Class", "HearthstoneClassFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(T.d)("Selected Class", "HearthstoneClassFilter"),
                        title: this.state.selected ? this.state.selected.class : Object(T.d)("Class", "HearthstoneClassFilter")
                    })
                }, t
            }(Z.Component),
            Ye = Object(W.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    hearthstoneClass: S(e)
                }
            }, function(e) {
                return Object(le.b)({
                    updateHearthstoneClassPreference: p,
                    clearHearthstoneClassPreference: g
                }, e)
            })(Qe),
            Je = n("Ehh8"),
            Xe = n.n(Je),
            Ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = T.n.logger.withCategory("hearthstone-mode-filter"), t.getSections = function() {
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
                        return F.__awaiter(t, void 0, void 0, function() {
                            var e, t, i = this;
                            return F.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, n.e(82).then(n.bind(null, "Dan5"))];
                                    case 2:
                                        return e = a.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }, function() {
                                            i.state.content && i.state.content.forEach(function(e) {
                                                Object.keys(e).forEach(function(t) {
                                                    e[t].forEach(function(e) {
                                                        i.props.hearthstoneMode && i.props.hearthstoneMode === e.name && i.setState({
                                                            selected: e
                                                        })
                                                    })
                                                })
                                            })
                                        }), [3, 4];
                                    case 3:
                                        return t = a.sent(), this.logger.error(t, "Failed to load Hearthstone mode data"), this.setState({
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
                        return void 0 === n && (n = !1), Z.createElement(pe, {
                            key: e.name,
                            name: e.display_name,
                            onClick: t,
                            spriteAsset: Xe.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_height,
                            spriteHeight: e.image_height,
                            withClose: n
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return Z.createElement(me, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(T.d)("Search by Mode", "HearthstoneModeFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(T.d)("Selected Mode", "HearthstoneModeFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(T.d)("Mode", "HearthstoneModeFilter")
                    })
                }, t
            }(Z.Component),
            et = Object(W.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    hearthstoneMode: C(e)
                }
            }, function(e) {
                return Object(le.b)({
                    updateHearthstoneModePreference: v,
                    clearHearthstoneModePreference: f
                }, e)
            })(Ke),
            tt = n("PPNL"),
            nt = function(e) {
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
                                a = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            Object.keys(t.props.leagueOfLegends.apiData.data).forEach(function(r) {
                                if (t.props.leagueOfLegends.apiData) {
                                    var o = t.props.leagueOfLegends.apiData.data[r];
                                    if (t.state.selected && t.state.selected.name === o.name) return;
                                    if (i && !o.name.match(i) && a && !o.name.match(a)) return;
                                    var s = t.renderCharacter(o, function() {
                                        return t.onSelect(o)
                                    });
                                    o.channels > 0 ? e.push(s) : n.push(s)
                                }
                            })
                        }
                        var r = [];
                        return e.length > 0 && r.push({
                            title: Object(T.d)("Champions Online", "LeagueFilter"),
                            items: e
                        }), n.length > 0 && r.push({
                            title: Object(T.d)("Champions Offline", "LeagueFilter"),
                            items: n
                        }), r
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
                        return Z.createElement(pe, {
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
                            "data-a-target": "champion-filter-" + r
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData(), this.props.leagueChampion && this.props.leagueOfLegends.apiData && this.setSelectedChampion(this.props.leagueOfLegends.apiData)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData(), this.props.leagueChampion && !this.props.leagueOfLegends.apiData && e.leagueOfLegends.apiData && this.setSelectedChampion(e.leagueOfLegends.apiData)
                }, t.prototype.render = function() {
                    return Z.createElement(me, {
                        isError: this.props.leagueOfLegends.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.props.leagueOfLegends.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(T.d)("Search by Champion", "LeagueFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(T.d)("Selected Champion", "LeagueFilter"),
                        title: this.state.selected ? this.state.selected.name : Object(T.d)("Champion", "LeagueFilter"),
                        "data-a-target": "league-champion-filter-dropdown"
                    })
                }, t
            }(Z.Component),
            it = Object(W.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    leagueChampion: b(e),
                    leagueOfLegends: {
                        apiData: e.directory.leagueOfLegends.apiData,
                        isError: e.directory.leagueOfLegends.isError,
                        isLoading: e.directory.leagueOfLegends.isLoading,
                        version: e.directory.leagueOfLegends.version
                    }
                }
            }, function(e) {
                return Object(le.b)({
                    updateLeagueChampionPreference: c,
                    clearLeagueChampionPreference: u,
                    onLoadLeagueOfLegendsChampions: tt.a
                }, e)
            })(nt),
            at = n("Vr3l"),
            rt = n.n(at),
            ot = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = T.n.logger.withCategory("overwatch-filter"), t.getSections = function() {
                        var e = [],
                            n = [],
                            i = [],
                            a = [];
                        if (t.state.content) {
                            var r = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                o = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null,
                                s = function(e, n) {
                                    t.state.selected && t.state.selected.character === e.character || r && !e.display_name.match(r) && o && !e.display_name.match(o) || n.push(t.renderCharacter(e, function() {
                                        return t.onSelectCharacter(e)
                                    }))
                                };
                            t.state.content[0].Offense.forEach(function(t) {
                                return s(t, e)
                            }), t.state.content[1].Defense.forEach(function(e) {
                                return s(e, n)
                            }), t.state.content[2].Tank.forEach(function(e) {
                                return s(e, i)
                            }), t.state.content[3].Support.forEach(function(e) {
                                return s(e, a)
                            })
                        }
                        var l = [];
                        return e.length > 0 && l.push({
                            title: Object(T.d)("Offense", "OverwatchFilter"),
                            items: e
                        }), n.length > 0 && l.push({
                            title: Object(T.d)("Defense", "OverwatchFilter"),
                            items: n
                        }), i.length > 0 && l.push({
                            title: Object(T.d)("Tank", "OverwatchFilter"),
                            items: i
                        }), a.length > 0 && l.push({
                            title: Object(T.d)("Support", "OverwatchFilter"),
                            items: a
                        }), l
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
                        return F.__awaiter(t, void 0, void 0, function() {
                            var e, t, i = this;
                            return F.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, n.e(70).then(n.bind(null, "sQp1"))];
                                    case 2:
                                        return e = a.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }, function() {
                                            i.state.content && i.props.overwatchCharacter && i.state.content.forEach(function(e) {
                                                Object.keys(e).forEach(function(t) {
                                                    e[t].forEach(function(e) {
                                                        i.props.overwatchCharacter === e.character && i.setState({
                                                            selected: e
                                                        })
                                                    })
                                                })
                                            })
                                        }), [3, 4];
                                    case 3:
                                        return t = a.sent(), this.logger.error(t, "Failed to load Overwatch character data"), this.setState({
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
                        return void 0 === n && (n = !1), Z.createElement(pe, {
                            key: e.character,
                            name: e.display_name,
                            onClick: t,
                            spriteAsset: rt.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_width,
                            spriteHeight: e.image_height,
                            withClose: n
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return Z.createElement(me, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(T.d)("Search by Hero", "OverwatchFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(T.d)("Selected Hero", "OverwatchFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(T.d)("Hero", "OverwatchFilter")
                    })
                }, t
            }(Z.Component),
            st = Object(W.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    overwatchCharacter: _(e)
                }
            }, function(e) {
                return Object(le.b)({
                    updateOverwatchCharacterPreference: m,
                    clearOverwatchCharacterPreference: h
                }, e)
            })(ot),
            lt = n("qw9S");
        ! function(e) {
            e.Hearthstone = "hearthstone", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
        }(H || (H = {}));
        var dt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getAdditionalFilters = function() {
                        var e = [];
                        if (n.props.match.params.encodedLanguage || e.push(Z.createElement(q.a, null)), n.state.directoryType === oe.a.Communities) return e;
                        switch (decodeURI(n.props.match.params.encodedCommunityName).toLowerCase()) {
                            case H.Hearthstone:
                                e.push(Z.createElement(Ye, null), Z.createElement(et, null));
                                break;
                            case H.League:
                                e.push(Z.createElement(it, null));
                                break;
                            case H.Overwatch:
                                e.push(Z.createElement(st, null));
                                break;
                            case H.CSGO:
                                e.push(Z.createElement(ve, null))
                        }
                        return e
                    }, n.styleFilters = function() {
                        return n.getAdditionalFilters().map(function(e, t) {
                            return Z.createElement(ue.Z, {
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
                            return t === Object.keys(ie.b.directory).length && ee.a.display(ie.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, n.state = {
                        directoryType: se(t.match.path),
                        directoryWidth: -1,
                        numSlotsAdded: 0
                    }, n
                }
                return F.__extends(t, e), t.prototype.componentWillMount = function() {
                    ie.g.addListener(ie.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.match.path !== e.match.path && this.setState({
                        directoryType: se(e.match.path)
                    })
                }, t.prototype.componentWillUnmount = function() {
                    ie.g.removeListener(ie.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory) return Z.createElement(ue.Z, {
                        margin: 2
                    }, Z.createElement(ue._1, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return Z.createElement($.a, {
                        message: Object(T.d)("Error loading data.", "DirectoryGamePage")
                    });
                    if (!this.props.data.directory) return Z.createElement($.a, {
                        message: Object(T.d)("Game does not exist", "DirectoryGamePage")
                    });
                    var t = null,
                        n = null;
                    this.props.match.params.encodedLanguage ? n = Z.createElement(Ze.a, {
                        languageCode: this.props.match.params.encodedLanguage
                    }) : "en" !== this.props.languageCode && (n = Z.createElement(ue.Z, {
                        margin: {
                            bottom: 2
                        }
                    }, Z.createElement(ue._25, {
                        type: ue._30.H4,
                        color: ue.I.Alt2,
                        fontSize: ue.P.Size5,
                        transform: ue._29.Uppercase,
                        "data-a-target": "international-section-header"
                    }, Object(T.d)("All Channels", "DirectoryInternationalSection"))), t = Z.createElement(ze, {
                        directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        directoryType: se(this.props.match.path),
                        directoryWidth: this.state.directoryWidth,
                        languageCode: this.props.languageCode
                    }));
                    var i, a = this.props.data.directory.streams.edges.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(t, n) {
                        var i = t.node;
                        return Z.createElement(Ie.b, {
                            directoryName: decodeURIComponent(e.props.match.params.encodedCommunityName),
                            directoryType: e.state.directoryType,
                            streamIndex: n,
                            streamNode: i,
                            key: i.id
                        })
                    });
                    if (a.length > 0) {
                        var r = !this.props.data.loading && !this.props.data.error && "" !== this.props.data.directory.id && !!this.props.data.directory.streams.pageInfo.hasNextPage;
                        i = Z.createElement(Me, {
                            directoryName: this.props.data.directory.displayName,
                            communityName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                            canLoadMore: r,
                            loadMore: this.props.loadMore
                        }, a)
                    } else {
                        var o = Object(T.d)("There are currently no channels streaming to this community", "DirectoryGamePage");
                        this.state.directoryType === oe.a.Games && (o = Object(T.d)("No live channels for this game", "DirectoryGamePage")), i = Z.createElement(ue.Z, {
                            display: ue.L.Flex,
                            alignItems: ue.c.Center,
                            justifyContent: ue.Y.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, Z.createElement(ue._25, {
                            color: ue.I.Alt2,
                            fontSize: ue.P.Size4,
                            italic: !0
                        }, o))
                    }
                    return Z.createElement(ue.Z, null, Z.createElement(ue.Z, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, Z.createElement(ne.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: ie.d.directory,
                        slotID: ie.b.directory.banner,
                        adSize: ie.c.directory.banner,
                        targeting: {
                            pagetype: ie.a.games,
                            game: this.props.data.directory.displayName
                        },
                        autoEnable: !1
                    }), t, Z.createElement(ue.Z, {
                        margin: {
                            bottom: 2
                        },
                        display: ue.L.Flex,
                        flexDirection: ue.N.Row
                    }, this.styleFilters()), n, i, Z.createElement(Q.a, {
                        onResize: this.onResize
                    })), this.props.firstPageLoaded && Z.createElement(re.a, {
                        gameID: this.props.data.directory.id
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || (this.props.latencyTracking.reportInteractive(), this.props.data.directory && T.n.setPageTitle(this.props.data.directory.displayName))
                }, t = F.__decorate([Object(Y.a)(lt, {
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
                                    hearthstoneBroadcasterHeroClass: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === H.Hearthstone ? e.hearthstoneClass : "",
                                    hearthstoneGameMode: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === H.Hearthstone ? e.hearthstoneMode : "",
                                    overwatchBroadcasterCharacter: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === H.Overwatch ? e.overwatchCharacter : "",
                                    leagueOfLegendsChampionID: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === H.League && e.leagueChampion ? e.leagueChampion.toString() : "",
                                    counterStrikeMap: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === H.CSGO ? e.csgoMap : "",
                                    counterStrikeSkill: ""
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return F.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: lt,
                                    variables: F.__assign({}, e.data.variables, {
                                        cursor: e.data.directory.streams.edges[e.data.directory.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            directory: F.__assign({}, n.directory, {
                                                streams: F.__assign({}, n.directory.streams, {
                                                    edges: Object(X.b)(e.directory.streams.edges, n.directory.streams.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(ae.d)("DirectoryGamePage", {
                    destination: K.a.DirectoryGameIndex
                }), Object(J.a)({
                    location: te.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: e.match.path.startsWith("/communities") ? te.PageviewDirectoryContentType.Communities : te.PageviewDirectoryContentType.Games,
                            game: e.data.directory ? e.data.directory.displayName : null
                        }
                    }
                })], t)
            }(Z.Component),
            ct = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return F.__extends(t, e), t.prototype.render = function() {
                    var e = dt;
                    return Z.createElement(e, F.__assign({
                        csgoMap: this.state.csgoMap,
                        hearthstoneClass: this.state.hearthstoneClass,
                        hearthstoneMode: this.state.hearthstoneMode,
                        leagueChampion: this.state.leagueChampion,
                        overwatchCharacter: this.state.overwatchCharacter
                    }, this.props))
                }, t
            }(Z.Component),
            ut = Object(W.b)(function(e) {
                return {
                    languagePreferences: Object(z.a)(e),
                    sideNavExpanded: e.ui.sideNavExpanded,
                    languageCode: e.session.languageCode,
                    firstPageLoaded: e.session.firstPageLoaded,
                    csgoMap: k(e),
                    hearthstoneClass: S(e),
                    hearthstoneMode: C(e),
                    leagueChampion: b(e),
                    overwatchCharacter: _(e)
                }
            })(ct),
            mt = n("CIox"),
            pt = "header.DIRECTORY_HEADER_EDIT_ENABLED",
            ht = "header.DIRECTORY_HEADER_EDIT_DISABLED";
        T.n.store.registerReducer("directoryHeader", function(e, t) {
            switch (void 0 === e && (e = {
                isEditingEnabled: !1
            }), t.type) {
                case pt:
                    return F.__assign({}, e, {
                        isEditingEnabled: !0
                    });
                case ht:
                    return F.__assign({}, e, {
                        isEditingEnabled: !1
                    });
                default:
                    return e
            }
        });
        var gt, vt = n("V5M+"),
            ft = n("9u8h"),
            yt = n("5eRk");
        ! function(e) {
            e.AVATAR = "AVATAR", e.BANNER = "BANNER"
        }(gt || (gt = {}));
        var kt, bt = "directory-avatar-edit-menu",
            _t = "directory-avatar-overlay",
            St = "directory-avatar-remover",
            Ct = "directory-avatar-uploader",
            Et = "directory-banner-edit-menu",
            Nt = "directory-banner-overlay",
            wt = "directory-banner-remover",
            Ot = "directory-banner-uploader",
            Dt = "https://static-cdn.jtvnw.net/community-images/defaults/avatar-285x380.png",
            Ft = "https://static-cdn.jtvnw.net/community-images/defaults/banner-1200x180.png",
            Tt = function() {
                return Object(T.d)("Upload new image", "DirectoryHeader")
            },
            Lt = function() {
                return Object(T.d)("Remove", "DirectoryHeader")
            },
            It = "https://api.twitch.tv/kraken/communities/",
            At = function(e) {
                return "" + It + e + "/images/avatar"
            },
            Rt = function(e) {
                return "" + It + e + "/images/cover"
            },
            jt = n("+8VM"),
            Pt = n("66ch"),
            xt = (n("wB6A"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return F.__extends(t, e), t.prototype.render = function() {
                    return Z.createElement(ue._21, {
                        className: "image-uploader-modal",
                        background: ue.m.Base
                    }, Z.createElement(Pt.a, F.__assign({}, this.props)), Z.createElement(jt.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(Z.Component)),
            Mt = Object(W.b)(null, function(e) {
                return Object(le.b)({
                    onClose: vt.c
                }, e)
            })(xt),
            Ut = n("TFaR"),
            Vt = n("HZww"),
            Bt = n("SiVO"),
            Gt = n("wXwV"),
            Ht = 1e4,
            Zt = function() {
                return function(e, t) {
                    var n = this;
                    this.getUploadURL = e, this.onFinishUploading = t, this.uploadFile = function(e) {
                        return new Promise(function(t, i) {
                            return F.__awaiter(n, void 0, void 0, function() {
                                var n, a, r, o, s, l = this;
                                return F.__generator(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            return d.trys.push([0, 3, , 4]), [4, this.getUploadURL(e)];
                                        case 1:
                                            return n = d.sent(), a = n.url, r = n.uploadID, [4, fetch(a, {
                                                body: e,
                                                method: "PUT"
                                            })];
                                        case 2:
                                            return (o = d.sent()).status > 300 && i(new Error(Object(Gt.e)(o.status))), this.unsubscribe = T.j.subscribe({
                                                topic: Object(Vt.l)(r),
                                                success: function() {
                                                    l.timeoutID = setTimeout(function() {
                                                        l.unsubscribe(), i(new Error(Object(Gt.d)()))
                                                    }, Ht)
                                                },
                                                failure: function() {
                                                    clearTimeout(l.timeoutID), i(new Error(Object(Gt.d)()))
                                                },
                                                onMessage: function(e) {
                                                    if (e.upload_id === r) {
                                                        switch (clearTimeout(l.timeoutID), e.status) {
                                                            case Ut.a.POSTPROCESS_COMPLETE:
                                                                l.onFinishUploading && l.onFinishUploading(), t();
                                                                break;
                                                            case Ut.a.WIDTH_VALIDATION_FAILED:
                                                            case Ut.a.HEIGHT_VALIDATION_FAILED:
                                                                i(new Error(Object(Gt.c)()));
                                                                break;
                                                            case Ut.a.FILE_SIZE_VALIDATION_FAILED:
                                                                i(new Error(Object(Gt.a)()));
                                                                break;
                                                            case Ut.a.IS_IMAGE_VALIDATION_FAILED:
                                                                i(new Error(Object(Gt.b)(Bt.b)));
                                                                break;
                                                            default:
                                                                i(new Error(Object(Gt.d)()))
                                                        }
                                                        l.unsubscribe && l.unsubscribe()
                                                    }
                                                }
                                            }), [3, 4];
                                        case 3:
                                            return s = d.sent(), T.i.error(s, "unable to upload image"), i(new Error(Object(Gt.d)())), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }
                }
            }(),
            Wt = n("YADZ"),
            zt = (n("IMj1"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingAvatar: !1
                    }, t.renderAvatarEditMode = function() {
                        return t.props.headerEditMode ? Z.createElement(ue.Z, null, Z.createElement("div", {
                            onClick: t.onAvatarClick
                        }, Z.createElement(ue.Z, {
                            "data-test-selector": _t,
                            className: "directory-header__overlay",
                            flexDirection: ue.N.Column,
                            textAlign: ue._26.Center,
                            display: ue.L.Flex,
                            position: ue._6.Absolute,
                            alignItems: ue.c.Center,
                            justifyContent: ue.Y.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, Z.createElement(ue._21, {
                            color: ue.I.Overlay
                        }, Z.createElement(ue._12, {
                            asset: ue._13.Edit
                        })), Z.createElement(ue._25, {
                            color: ue.I.Overlay,
                            type: ue._30.P
                        }, Object(T.d)("Change avatar", "DirectoryHeader")))), t.renderAvatarEditMenu()) : null
                    }, t.renderAvatarEditMenu = function() {
                        return t.state.isEditingAvatar ? Z.createElement(ue.p, {
                            "data-test-selector": bt,
                            direction: ue.q.BottomLeft,
                            show: !0
                        }, Z.createElement(ue.X, {
                            "data-test-selector": Ct,
                            onClick: t.onAvatarUploadClick
                        }, Z.createElement(ue.Z, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Tt())), Z.createElement(ue.X, {
                            "data-test-selector": St,
                            onClick: t.onAvatarDeleteClick
                        }, Z.createElement(ue.Z, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Lt()))) : null
                    }, t.trackAvatarEdit = function(e) {
                        T.n.tracking.track(te.SpadeEventType.CommunityEdit, {
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
                        return F.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return F.__generator(this, function(n) {
                                return this.props.data && this.props.data.directory && this.props.data.directory.id && this.props.createUploadURLMutation ? (e = new Zt(this.getAvatarUploadURL, this.onAvatarDoneUploading), t = {
                                    imageDimensions: "600x800",
                                    maxFileSizeMegabytes: 1,
                                    isRequiredImageDimensions: !0,
                                    provider: e
                                }, this.props.onShowModal(Mt, t), [2]) : [2, null]
                            })
                        })
                    }, t.onAvatarDeleteClick = function() {
                        return F.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return F.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, ft.a.delete(At(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackAvatarEdit(), e = function(e) {
                                            return e.directory.avatarURL = Dt, e
                                        }, Object(X.d)(Wt, {
                                            name: this.props.directoryName,
                                            type: Object(Ve.a)(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.getAvatarUploadURL = function(e) {
                        return F.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return F.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = 0, n = Bt.b, a.label = 1;
                                    case 1:
                                        return t < n.length ? (i = n[t], e.type !== i ? [3, 3] : [4, this.props.createUploadURLMutation(this.props.data.directory.id, gt.AVATAR, i)]) : [3, 4];
                                    case 2:
                                        return [2, a.sent()];
                                    case 3:
                                        return t++, [3, 1];
                                    case 4:
                                        throw new Error(Object(Gt.b)(Bt.b))
                                }
                            })
                        })
                    }, t.onAvatarDoneUploading = function() {
                        return F.__awaiter(t, void 0, void 0, function() {
                            return F.__generator(this, function(e) {
                                return this.props.data.refetch(), this.props.onCloseModal(), [2]
                            })
                        })
                    }, t
                }
                return F.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading || this.props.data.error || !this.props.data.directory ? Z.createElement(ue._5, {
                        width: 80,
                        height: 112,
                        overlay: !0
                    }) : Z.createElement(ue.C, {
                        alt: "",
                        src: this.props.data.directory.avatarURL,
                        size: ue.D.Size8,
                        aspect: ue.k.BoxArt
                    }), Z.createElement(ue.Z, {
                        className: "directory-header__avatar",
                        margin: {
                            left: 3,
                            bottom: 1
                        },
                        position: ue._6.Absolute,
                        attachBottom: !0
                    }, e, this.renderAvatarEditMode())
                }, t = F.__decorate([Object(Y.a)(Wt, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Object(Ve.a)(e.directoryType)
                            }
                        }
                    }
                }), D(), Object(ae.d)("DirectoryAvatar", {
                    autoReportInteractive: !0
                })], t)
            }(Z.Component)),
            qt = Object(W.b)(function(e) {
                return {
                    headerEditMode: e.directoryHeader.isEditingEnabled
                }
            }, function(e) {
                return Object(le.b)({
                    onCloseModal: vt.c,
                    onShowModal: vt.d
                }, e)
            })(zt),
            $t = n("F8kA"),
            Qt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return F.__extends(t, e), t.prototype.render = function() {
                    if ("GAMES" !== this.props.directoryType) return null;
                    var e, t = null;
                    if ("irl" === this.props.directoryName.toLowerCase()) {
                        var n = Object(T.d)("New to IRL?", "DirectoryHeader"),
                            i = Object(T.d)("Learn More", "DirectoryHeader"),
                            a = void 0;
                        a = Z.createElement("a", {
                            target: "_blank",
                            href: "http://link.twitch.tv/irldirectorytooltip",
                            className: "directory-header__link",
                            rel: "noopener noreferrer"
                        }, i), e = Z.createElement("span", null, n, " ", a)
                    } else "always on" === this.props.directoryName.toLowerCase() && (e = Object(T.d)("24/7 streaming from your favorite brands. Watch together.", "DirectoryHeader"));
                    return e && (t = Z.createElement(ue._25, {
                        color: ue.I.Overlay,
                        type: ue._30.P,
                        "data-test-selector": "directory-game-descriptor"
                    }, e)), t
                }, t
            }(Z.Component),
            Yt = n("8UKc"),
            Jt = (n("zSAx"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingBanner: !1
                    }, t.renderBannerEditMode = function() {
                        return t.props.headerEditMode ? Z.createElement(ue.Z, null, Z.createElement("div", {
                            onClick: t.onBannerClick
                        }, Z.createElement(ue.Z, {
                            "data-test-selector": Nt,
                            className: "directory-header__overlay",
                            flexDirection: ue.N.Column,
                            display: ue.L.Flex,
                            position: ue._6.Absolute,
                            alignItems: ue.c.Center,
                            justifyContent: ue.Y.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, Z.createElement(ue.Z, {
                            position: ue._6.Relative
                        }, Z.createElement(ue._21, {
                            color: ue.I.Overlay,
                            textAlign: ue._26.Center
                        }, Z.createElement(ue._12, {
                            asset: ue._13.Edit
                        })), Z.createElement(ue._25, {
                            color: ue.I.Overlay,
                            type: ue._30.P
                        }, Object(T.d)("Change cover image", "DirectoryHeader")), t.renderBannerEditMenu()))), Z.createElement(ue.Z, {
                            alignContent: ue.b.End,
                            position: ue._6.Absolute,
                            textAlign: ue._26.Right,
                            margin: 3,
                            attachBottom: !0,
                            attachRight: !0
                        }, Z.createElement(ue.u, {
                            icon: ue._13.Check,
                            onClick: t.onDoneClick
                        }, Object(T.d)("Done", "DirectoryHeader")))) : null
                    }, t.renderBannerEditMenu = function() {
                        return t.state.isEditingBanner ? Z.createElement(ue.p, {
                            "data-test-selector": Et,
                            direction: ue.q.BottomCenter,
                            show: !0
                        }, Z.createElement(ue.X, {
                            "data-test-selector": Ot,
                            onClick: t.onBannerUploadClick
                        }, Z.createElement(ue.Z, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Tt())), Z.createElement(ue.X, {
                            "data-test-selector": wt,
                            onClick: t.onBannerDeleteClick
                        }, Z.createElement(ue.Z, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Lt()))) : null
                    }, t.trackBannerEdit = function(e) {
                        T.n.tracking.track(te.SpadeEventType.CommunityEdit, {
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
                        return F.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return F.__generator(this, function(n) {
                                return this.props.data && this.props.data.directory && this.props.data.directory.id && this.props.createUploadURLMutation ? (e = new Zt(this.getBannerUploadURL, this.onBannerDoneUploading), t = {
                                    imageDimensions: "600x800",
                                    maxFileSizeMegabytes: 1,
                                    isRequiredImageDimensions: !0,
                                    provider: e
                                }, this.props.onShowModal(Mt, t), [2]) : [2, null]
                            })
                        })
                    }, t.onBannerDeleteClick = function() {
                        return F.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return F.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, ft.a.delete(Rt(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackBannerEdit(), e = function(e) {
                                            return e.directory.coverURL = Ft, e
                                        }, Object(X.d)(Yt, {
                                            name: this.props.directoryName,
                                            type: Object(Ve.a)(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.getBannerUploadURL = function(e) {
                        return F.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return F.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = 0, n = Bt.b, a.label = 1;
                                    case 1:
                                        return t < n.length ? (i = n[t], e.type !== i ? [3, 3] : [4, this.props.createUploadURLMutation(this.props.data.directory.id, gt.BANNER, i)]) : [3, 4];
                                    case 2:
                                        return [2, a.sent()];
                                    case 3:
                                        return t++, [3, 1];
                                    case 4:
                                        throw new Error(Object(Gt.b)(Bt.b))
                                }
                            })
                        })
                    }, t.onBannerDoneUploading = function() {
                        return F.__awaiter(t, void 0, void 0, function() {
                            return F.__generator(this, function(e) {
                                return this.props.data.refetch(), this.props.onCloseModal(), [2]
                            })
                        })
                    }, t
                }
                return F.__extends(t, e), t.prototype.render = function() {
                    var e;
                    if (this.props.data.loading || this.props.data.error || !this.props.data.directory) e = Z.createElement(ue._5, {
                        width: 200,
                        height: 20,
                        overlay: !0
                    });
                    else {
                        var t = Object(T.d)("{followerCount,number} Followers", {
                                followerCount: this.props.data.directory.followersCount
                            }, "DirectoryHeader"),
                            n = Object(T.d)("{viewerCount,number} Viewers", {
                                viewerCount: this.props.data.directory.viewersCount
                            }, "DirectoryHeader");
                        e = Z.createElement(ue._25, {
                            color: ue.I.Overlay,
                            type: ue._30.P
                        }, t, " · ", n)
                    }
                    var i = !1,
                        a = {};
                    this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.directory && (this.props.data.directory.coverURL ? a = {
                        backgroundImage: "url(" + this.props.data.directory.coverURL + ")"
                    } : this.props.data.directory.streams.edges.length && this.props.data.directory.streams.edges.filter(function(e) {
                        return e.node.previewImageURL
                    }).map(function(e) {
                        var t = e.node;
                        i = !0, a = {
                            backgroundImage: "url(" + t.previewImageURL + ")"
                        }
                    }));
                    var r = ye("directory-header__banner", {
                        "directory-header__banner--blur": i
                    });
                    return Z.createElement(ue.Z, {
                        position: ue._6.Relative,
                        overflow: ue._2.Hidden
                    }, Z.createElement("div", {
                        className: r,
                        style: a,
                        "data-test-selector": "directory-banner-image"
                    }), Z.createElement(ue.Z, {
                        className: "directory-header__title",
                        position: ue._6.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, Z.createElement($t.a, {
                        to: {
                            pathname: this.props.lastBrowsePath
                        },
                        className: "directory-header__link"
                    }, Z.createElement(ue._12, {
                        asset: ue._13.AngleLeft,
                        height: 10
                    }), Object(T.d)("Browse", "DirectoryHeader")), Z.createElement(ue._25, {
                        color: ue.I.Overlay,
                        type: ue._30.H2
                    }, this.props.data && this.props.data.directory && this.props.data.directory.displayName), Z.createElement(Qt, F.__assign({}, this.props)), e), this.renderBannerEditMode())
                }, t = F.__decorate([Object(Y.a)(Yt, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Object(Ve.a)(e.directoryType)
                            }
                        }
                    }
                }), D(), Object(ae.d)("DirectoryBanner", {
                    autoReportInteractive: !0
                })], t)
            }(Z.Component)),
            Xt = n("mmuw"),
            Kt = Object(W.b)(function(e) {
                return {
                    headerEditMode: e.directoryHeader.isEditingEnabled,
                    lastBrowsePath: Object(Xt.c)(e)
                }
            }, function(e) {
                return Object(le.b)({
                    onCloseModal: vt.c,
                    onDisableDirectoryHeaderEdit: w,
                    onShowModal: vt.d
                }, e)
            })(Jt),
            en = n("+xm8"),
            tn = n("f2i/"),
            nn = n("qs/O"),
            an = n("odW7"),
            rn = n("d+bE"),
            on = function(e) {
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
                            var n = "follow" === e ? te.SpadeEventType.CommunityFollow : te.SpadeEventType.CommunityUnfollow;
                            T.n.tracking.track(n, {
                                community_id: t.props.data.community.id,
                                name: t.props.data.community.name,
                                is_official: !1,
                                user_id: t.props.data.currentUser && t.props.data.currentUser.id
                            })
                        }
                    }, t.followChannel = function() {
                        return F.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return F.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.props.followCommunity && this.props.data ? (e = F.__assign({}, Object(X.a)({
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
                                        }, Object(X.d)(nn, {
                                            name: this.props.directoryName
                                        }, n), [2]
                                }
                            })
                        })
                    }, t.unfollowChannel = function() {
                        return F.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return F.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.props.unfollowCommunity && this.props.data ? (e = F.__assign({}, Object(X.a)({
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
                                        }, Object(X.d)(nn, {
                                            name: this.props.directoryName
                                        }, t), [2]
                                }
                            })
                        })
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && !e.data.loading && !e.data.error && e.data.community && this.setState({
                        isFollowing: e.data.community.self && null !== e.data.community.self.follow
                    })
                }, t.prototype.render = function() {
                    var e = Object(T.d)("Follow", "DirectoryFollowButton");
                    return this.props.isLoggedIn ? !this.props.data || this.props.data.loading ? Z.createElement(ue._5, {
                        width: 70,
                        height: 30
                    }) : this.communityDataLoaded() ? this.state.isFollowing ? Z.createElement(ue.Z, {
                        display: ue.L.Flex,
                        margin: {
                            left: 1
                        },
                        className: "directory-follow-btn"
                    }, Z.createElement(ue.v, {
                        ariaLabel: Object(T.d)("Unfollow", "DirectoryFollowButton"),
                        onClick: this.toggleFollowing,
                        "data-a-target": "directory-unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: ue._13.Heart,
                        statusAlertIcon: ue._13.Unheart
                    })) : Z.createElement(ue.u, F.__assign({
                        ariaLabel: e,
                        "data-a-target": "directory-follow-button",
                        "data-test-selector": "follow-button",
                        icon: ue._13.Heart,
                        onClick: this.toggleFollowing
                    }, Object(ue._43)(this.props)), e) : null : Z.createElement(ue.u, {
                        ariaLabel: e,
                        icon: ue._13.Heart,
                        onClick: this.props.login,
                        "data-a-target": "directory-follow-button"
                    }, e)
                }, t.prototype.reportInteractive = function() {
                    this.props.isLoggedIn ? this.props.directoryName && !this.communityDataLoaded() || this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive()
                }, t = F.__decorate([Object(Y.a)(nn, {
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
                }), Object(Y.a)(an, {
                    name: "followCommunity"
                }), Object(Y.a)(rn, {
                    name: "unfollowCommunity"
                }), Object(ae.d)("DirectoryFollowButton")], t)
            }(Z.Component),
            sn = Object(W.b)(function(e) {
                return {
                    isLoggedIn: Object(Ee.d)(e)
                }
            }, function(e) {
                return Object(le.b)({
                    login: function() {
                        return Object(tn.f)(en.a.DirectoryFollowButton)
                    }
                }, e)
            })(on),
            ln = n("jetF"),
            dn = n("czpb"),
            cn = n("oSFp"),
            un = n("LjAQ"),
            mn = n("mw/a"),
            pn = n("3zLD"),
            hn = (n("vxr0"), n("0zzo")),
            gn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tosBanCommunity = function() {
                        return F.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return F.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.tosBanCommunity ? (e = F.__assign({}, Object(X.a)({
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
                return F.__extends(t, e), t.prototype.render = function() {
                    return Z.createElement(ue.U, {
                        position: ue._6.Relative
                    }, Z.createElement(ue._21, {
                        background: ue.m.Base,
                        className: "community-ban-modal"
                    }, Z.createElement(ue.Z, {
                        padding: 2
                    }, Z.createElement(ue.Z, {
                        margin: {
                            bottom: 2
                        }
                    }, Z.createElement(ue._25, {
                        type: ue._30.H4
                    }, Object(T.d)("Are you sure you want to ban {name}?", {
                        name: this.props.communityName
                    }, "CommunityBanModal"))), Z.createElement(ue._21, {
                        borderTop: !0
                    }, Z.createElement(ue.Z, {
                        padding: {
                            top: 2
                        },
                        textAlign: ue._26.Center
                    }, Z.createElement(ue.Z, {
                        display: ue.L.Inline,
                        margin: {
                            x: 1
                        }
                    }, Z.createElement(ue.u, {
                        type: ue.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(T.d)("Cancel", "CommunityBanModal"))), Z.createElement(ue.Z, {
                        display: ue.L.Inline,
                        margin: {
                            x: 1
                        }
                    }, Z.createElement(ue.u, {
                        onClick: this.tosBanCommunity,
                        "data-test-selector": "ban-button"
                    }, Object(T.d)("Ban", "CommunityBanModal")))))), Z.createElement(jt.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(Z.Component),
            vn = Object(pn.compose)(Object(Y.a)(hn, {
                name: "tosBanCommunity"
            }))(gn),
            fn = Object(W.b)(null, function(e) {
                return Object(le.b)({
                    onCloseModal: vt.c
                }, e)
            })(vn),
            yn = n("9VER"),
            kn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingCommunity: !1
                    }, t.openReportModal = function() {
                        t.props.isLoggedIn ? t.props.onShowModal(cn.a, {
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentID: t.props.data.community.id,
                                contentType: mn.a.Community,
                                targetUserID: t.props.data.community.owner.id,
                                extra: t.props.communityName
                            },
                            title: Object(T.d)("Report {communityName}", {
                                communityName: t.props.communityName
                            }, "CommunitiesSettingsCog")
                        }) : t.props.login()
                    }, t.openBanModal = function() {
                        t.props.onShowModal(fn, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName
                        })
                    }, t.onEditModeToggle = function() {
                        t.props.isHeaderEditEnabled ? t.props.onDisableDirectoryHeaderEdit() : (T.n.history.push(Object(Ue.a)(t.props.communityName) + "/details"), t.props.onEnableDirectoryHeaderEdit())
                    }, t.handleReportModalClose = function(e) {
                        (e === un.b.MutationError || e === un.b.Success) && t.props.history.push("/")
                    }, t
                }
                return F.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && this.props.data.error ? null : Z.createElement(ue.Z, {
                        position: ue._6.Relative
                    }, Z.createElement(ln.a, null, Z.createElement(ue.v, {
                        ariaLabel: Object(T.d)("Settings", "CommunitiesSettingsCog"),
                        icon: ue._13.Gear
                    }), Z.createElement(ue.p, {
                        direction: ue.q.BottomRight,
                        size: ue.r.ExtraSmall,
                        offsetX: "0.5rem"
                    }, this.renderModerationInteractable(), this.renderEditInteractable(), Z.createElement(ue.X, {
                        onClick: this.openReportModal,
                        "data-test-selector": "report-selector"
                    }, Z.createElement(ue.Z, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(T.d)("Report", "CommunitiesSettingsCog"))), this.renderBanInteractable())))
                }, t.prototype.renderEditInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.editing ? null : Z.createElement(ue.X, {
                        onClick: this.onEditModeToggle,
                        "data-test-selector": "edit-selector"
                    }, Z.createElement(ue.Z, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(T.d)("Edit", "CommunitiesSettingsCog")))
                }, t.prototype.renderModerationInteractable = function() {
                    if (!this.props.data || this.props.data.loading) return null;
                    if (this.props.data.community && !this.props.data.community.self.permissions.banning) return null;
                    var e = this.props.communityName.toLowerCase();
                    return Z.createElement(ue.X, {
                        linkTo: Object(dn.a)("/communities/" + e + "/moderation/log"),
                        "data-test-selector": "moderation-selector"
                    }, Z.createElement(ue.Z, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(T.d)("Moderation", "CommunitiesSettingsCog")))
                }, t.prototype.renderBanInteractable = function() {
                    if (!this.props.data || this.props.data.loading || !this.props.data.community || !this.props.data.community.id) return null;
                    return this.props.data && this.props.data.currentUser && this.props.data.currentUser.roles && (this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin) ? Z.createElement(ue.X, {
                        onClick: this.openBanModal,
                        "data-test-selector": "ban-selector"
                    }, Z.createElement(ue.Z, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(T.d)("Ban", "CommunitiesSettingsCog"))) : null
                }, t = F.__decorate([Object(Y.a)(yn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.communityName
                    }
                }), Object(ae.d)("SettingsCog", {
                    autoReportInteractive: !0
                })], t)
            }(Z.Component),
            bn = Object(W.b)(function(e) {
                return {
                    isHeaderEditEnabled: O(e),
                    isLoggedIn: Object(Ee.d)(e)
                }
            }, function(e) {
                return Object(le.b)({
                    login: function() {
                        return Object(tn.f)(en.a.ReportChannel)
                    },
                    onShowModal: vt.d,
                    onCloseModal: vt.c,
                    onEnableDirectoryHeaderEdit: N,
                    onDisableDirectoryHeaderEdit: w
                }, e)
            })(Object($t.f)(kn)),
            _n = n("/XPz"),
            Sn = n("D88i"),
            Cn = (n("5yZy"), "directory-tabs__item"),
            En = Cn + "--selected";
        ! function(e) {
            e[e.DirectoryPage = 0] = "DirectoryPage", e[e.DirectoryVideosPage = 1] = "DirectoryVideosPage", e[e.DirectoryClipsPage = 2] = "DirectoryClipsPage", e[e.DirectoryDetailsPage = 3] = "DirectoryDetailsPage"
        }(kt || (kt = {}));
        var Nn, wn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return Z.createElement(ue.Z, {
                        className: "directory-tabs"
                    }, Z.createElement(ue.Z, {
                        display: ue.L.Flex,
                        justifyContent: ue.Y.Between,
                        flexWrap: ue.O.NoWrap,
                        fullHeight: !0
                    }, Z.createElement(ue.Z, {
                        display: ue.L.Flex,
                        alignItems: ue.c.Stretch,
                        flexShrink: 0,
                        flexWrap: ue.O.NoWrap
                    }, this.renderTabs(), this.renderGameDetailsTab()), Z.createElement(ue.Z, {
                        display: ue.L.Flex,
                        alignItems: ue.c.Center,
                        flexShrink: 0,
                        flexWrap: ue.O.NoWrap,
                        padding: {
                            x: 2
                        }
                    }, this.renderSettingsCog(), this.renderFollowButton())))
                }, t.prototype.renderTabs = function() {
                    var e = this,
                        t = this.props.directoryType === oe.a.Games ? Object(Ue.c)(this.props.directoryName) : Object(Ue.a)(this.props.directoryName);
                    return this.getDirectoryTabs().map(function(n, i) {
                        var a = n.label.replace(/ /g, "-").toLowerCase(),
                            r = ye(Cn, (o = {}, o["directory-tabs__item--first"] = 0 === i, o[En] = n.isSelected, o));
                        return Z.createElement(ue.U, {
                            key: Cn + "--" + n.label,
                            display: ue.L.Flex,
                            alignItems: ue.c.Center,
                            flexShrink: 0,
                            "data-a-target": "game-directory-" + a + "-tab"
                        }, Z.createElement($t.a, {
                            className: r,
                            to: "" + t + n.path
                        }, e.renderTabData(n.label)));
                        var o
                    })
                }, t.prototype.renderTabData = function(e) {
                    return Z.createElement(ue.Z, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: ue.L.Flex
                    }, Z.createElement(ue._25, {
                        type: ue._30.Span,
                        fontSize: ue.P.Size5
                    }, e))
                }, t.prototype.renderGameDetailsTab = function() {
                    if (this.props.data.loading && !this.props.data.directory) return null;
                    if (this.props.data.error || !this.props.data.directory) return null;
                    if (this.props.data.directory && !this.props.data.directory.product) return null;
                    var e = ye(Cn, (i = {}, i[En] = this.props.activeTab === kt.DirectoryDetailsPage, i)),
                        t = Object(T.d)("Game Details", "DirectoryGameTabs"),
                        n = Object(Ue.c)(this.props.directoryName) + "/details";
                    return Z.createElement(ue.U, {
                        display: ue.L.Flex,
                        alignItems: ue.c.Center,
                        flexShrink: 0
                    }, Z.createElement($t.a, {
                        className: e,
                        to: n
                    }, this.renderTabData(t)));
                    var i
                }, t.prototype.renderSettingsCog = function() {
                    return this.props.directoryType !== oe.a.Communities ? null : Z.createElement(bn, {
                        communityName: this.props.directoryName
                    })
                }, t.prototype.renderFollowButton = function() {
                    switch (this.props.directoryType) {
                        case oe.a.Communities:
                            return Z.createElement(ue.Z, {
                                margin: {
                                    left: 1
                                }
                            }, Z.createElement(sn, {
                                directoryName: this.props.directoryName
                            }));
                        case oe.a.Games:
                            return Z.createElement(ue.Z, {
                                margin: {
                                    left: 1
                                }
                            }, Z.createElement(_n.a, {
                                gameName: this.props.directoryName,
                                src: "directory"
                            }));
                        default:
                            return null
                    }
                }, t.prototype.getDirectoryTabs = function() {
                    var e = this;
                    return [{
                        label: Object(T.d)("Live Channels", "DirectoryGameTabs"),
                        path: "",
                        isSelected: this.props.activeTab === kt.DirectoryPage,
                        whitelistDirectories: [oe.a.Communities, oe.a.Games]
                    }, {
                        label: Object(T.d)("Videos", "DirectoryGameTabs"),
                        path: "/videos/all",
                        isSelected: this.props.activeTab === kt.DirectoryVideosPage,
                        whitelistDirectories: [oe.a.Games]
                    }, {
                        label: Object(T.d)("Clips", "DirectoryGameTabs"),
                        path: "/clips",
                        isSelected: this.props.activeTab === kt.DirectoryClipsPage,
                        whitelistDirectories: [oe.a.Games]
                    }, {
                        label: Object(T.d)("Details", "DirectoryHeader"),
                        path: "/details",
                        isSelected: this.props.activeTab === kt.DirectoryDetailsPage,
                        whitelistDirectories: [oe.a.Communities]
                    }].filter(function(t) {
                        return t.whitelistDirectories.includes(e.props.directoryType)
                    })
                }, t = F.__decorate([Object(Y.a)(Sn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.directoryName),
                                type: Object(Ve.a)(e.directoryType)
                            }
                        }
                    }
                }), Object(ae.d)("DirectoryGameTabs")], t)
            }(Z.Component),
            On = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return F.__extends(t, e), t.prototype.render = function() {
                    return Z.createElement(ue.Z, {
                        position: ue._6.Relative
                    }, Z.createElement(Kt, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), Z.createElement(qt, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), Z.createElement(wn, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName,
                        activeTab: this.props.activeTab
                    }))
                }, t = F.__decorate([Object(ae.d)("DirectoryHeader", {
                    autoReportInteractive: !0
                })], t)
            }(Z.Component),
            Dn = n("eXld"),
            Fn = n("lfvs"),
            Tn = n("dH4b"),
            Ln = n("J4ib"),
            In = n("QYm2"),
            An = n("2nSg"),
            Rn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        buttonState: ue.y.Default,
                        description: "",
                        rules: "",
                        summary: ""
                    }, t.onDescriptionChange = function(e) {
                        t.setState({
                            buttonState: ue.y.Default,
                            description: e.target.value
                        })
                    }, t.onRulesChange = function(e) {
                        t.setState({
                            buttonState: ue.y.Default,
                            rules: e.target.value
                        })
                    }, t.onSummaryChange = function(e) {
                        t.setState({
                            buttonState: ue.y.Default,
                            summary: e.target.value
                        })
                    }, t.onSaveClick = function() {
                        if (t.props.editCommunity && t.props.data) {
                            var e = t.state.description,
                                n = t.state.rules,
                                i = t.state.summary,
                                a = F.__assign({}, Object(X.a)({
                                    communityID: t.props.data.community.id,
                                    description: e,
                                    rules: n,
                                    summary: i
                                }), {
                                    optimisticResponse: {
                                        editCommunity: {
                                            __typename: "EditCommunityPayload",
                                            community: {
                                                description: e,
                                                rules: n,
                                                summary: i,
                                                __typename: "Community"
                                            }
                                        }
                                    }
                                });
                            t.setState({
                                buttonState: ue.y.Loading
                            }), t.props.editCommunity(a).then(function(e) {
                                Object(X.d)(In, {
                                    name: decodeURIComponent(t.props.communityName)
                                }, function(n) {
                                    return ["description", "summary", "rules"].forEach(function(i) {
                                        var a = n.community[i],
                                            r = e.data.editCommunity.community[i];
                                        a !== r && T.n.tracking.track(te.SpadeEventType.CommunityEdit, {
                                            community_id: t.props.data.community.id,
                                            name: t.props.data.community.name,
                                            is_official: !1,
                                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles.isStaff,
                                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles.isSiteAdmin,
                                            edit_type: i,
                                            old_value: a,
                                            new_value: r
                                        })
                                    }), n.community.description = e.data.editCommunity.community.description, n.community.rules = e.data.editCommunity.community.rules, n.community.summary = e.data.editCommunity.community.summary, t.setState({
                                        buttonState: ue.y.Success
                                    }), n
                                })
                            })
                        }
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.data.loading || e.data.error || !e.data.community || this.setState({
                        description: e.data.community.description,
                        rules: e.data.community.rules,
                        summary: e.data.community.summary
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.props.isHeaderEditEnabled && this.props.onDisableDirectoryHeaderEdit()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? Z.createElement(ue._36, {
                        childWidth: ue._37.Large
                    }, this.renderPlaceholder(), this.renderPlaceholder()) : this.props.data.error ? null : Z.createElement(ue._36, {
                        childWidth: ue._37.Large
                    }, Z.createElement(ue.Z, null, this.renderSummary(), this.renderDetailsPanel({
                        title: Object(Ln.d)("Description", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.description,
                        onChangeHandler: this.onDescriptionChange
                    })), Z.createElement(ue.Z, null, this.renderDetailsPanel({
                        title: Object(Ln.d)("Rules", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.rules,
                        onChangeHandler: this.onRulesChange
                    }), this.props.isHeaderEditEnabled ? this.renderSaveButton() : null))
                }, t.prototype.renderDetailsPanel = function(e) {
                    var t = Z.createElement(ue._39, null, Z.createElement(Fn, F.__assign({
                        source: e.data
                    }, Tn.a)));
                    return this.props.isHeaderEditEnabled && (t = Z.createElement(ue._27, {
                        defaultValue: e.data,
                        onChange: e.onChangeHandler,
                        rows: e.rows || 15,
                        maxLength: e.maxLength
                    })), Z.createElement(ue._21, {
                        background: ue.m.Base,
                        border: !0,
                        margin: {
                            bottom: 2
                        }
                    }, Z.createElement(ue._21, {
                        borderBottom: !0
                    }, Z.createElement(ue.Z, {
                        padding: 1
                    }, Z.createElement(ue._25, {
                        transform: ue._29.Uppercase,
                        type: ue._30.H5
                    }, e.title))), Z.createElement(ue.Z, {
                        padding: 1
                    }, t))
                }, t.prototype.renderSummary = function() {
                    return this.props.isHeaderEditEnabled ? this.renderDetailsPanel({
                        title: Object(Ln.d)("Summary", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.summary,
                        onChangeHandler: this.onSummaryChange,
                        rows: 5,
                        maxLength: 160
                    }) : null
                }, t.prototype.renderSaveButton = function() {
                    return Z.createElement(ue.Z, {
                        margin: {
                            top: 1
                        },
                        textAlign: ue._26.Right
                    }, Z.createElement(ue.u, {
                        state: this.state.buttonState,
                        onClick: this.onSaveClick,
                        disabled: !this.state.description || !this.state.rules || !this.state.summary,
                        "data-test-selector": "save-button"
                    }, Object(Ln.d)("Save", "DirectoryCommunityDetailsContent")))
                }, t.prototype.renderPlaceholder = function() {
                    return Z.createElement(ue.Z, null, Z.createElement(ue._21, {
                        background: ue.m.Base,
                        border: !0
                    }, Z.createElement(ue._21, {
                        borderBottom: !0
                    }, Z.createElement(ue.Z, {
                        padding: 1
                    }, Z.createElement(ue._5, {
                        lineCount: 6
                    })))))
                }, t = F.__decorate([Object(Y.a)(In, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(Y.a)(An, {
                    name: "editCommunity"
                }), Object(ae.d)("DirectoryCommunityDetailsComponent", {
                    autoReportInteractive: !0
                })], t)
            }(Z.Component),
            jn = Object(W.b)(function(e) {
                return {
                    isHeaderEditEnabled: O(e)
                }
            }, function(e) {
                return Object(le.b)({
                    onDisableDirectoryHeaderEdit: w
                }, e)
            })(Rn),
            Pn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        directoryType: se(t.match.path)
                    }, n
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), T.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    return Z.createElement(ue.Z, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, Z.createElement(jn, {
                        communityName: decodeURIComponent(this.props.match.params.encodedCommunityName)
                    }))
                }, t = F.__decorate([Object(ae.d)("DirectoryCommunityDetailsPage", {
                    destination: K.a.DirectoryCommunityDetails
                })], t)
            }(Z.Component),
            xn = n("QAcM"),
            Mn = n("5bwi"),
            Un = n("WNmM"),
            Vn = n("TLUY"),
            Bn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.loadMoreTopClips = function() {
                        return F.__awaiter(t, void 0, void 0, function() {
                            return F.__generator(this, function(e) {
                                return this.canLoadMore() ? [2, this.props.loadMore()] : [2]
                            })
                        })
                    }, t.canLoadMore = function() {
                        var e = t.props.data;
                        return !e.loading && !e.error && "" !== t.props.gameName && e.game && e.game.clips.pageInfo.hasNextPage
                    }, t
                }
                return F.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.game) return Z.createElement(ue._1, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return Z.createElement($.a, {
                        message: Object(Ln.d)("Error loading data.", "DirectoryGameClipsContent")
                    });
                    if (this.props.data.game) {
                        var e = xn.a[this.props.timeFilterValue];
                        return Z.createElement(ue.Z, {
                            padding: {
                                top: 2,
                                bottom: 3,
                                x: 3
                            }
                        }, Z.createElement(Mn.a, {
                            clips: this.props.data.game.clips.edges.map(function(e) {
                                return e.node
                            }),
                            pageType: Un.b.Game,
                            timeFilterValue: this.props.timeFilterValue,
                            updateTimeFilter: this.props.updateTimeFilter,
                            loadMoreClips: this.loadMoreTopClips,
                            isLoading: !1
                        }), Z.createElement(de.a, {
                            enabled: this.canLoadMore(),
                            key: e,
                            loadMore: this.props.loadMore
                        }))
                    }
                    return Z.createElement($.a, {
                        message: Object(Ln.d)("Game does not exist", "DirectoryGameClipsContent")
                    })
                }, t = F.__decorate([Object(ae.d)("DirectoryGameClipsContent", {
                    autoReportInteractive: !0
                }), Object(Y.a)(Vn, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: decodeURIComponent(e.gameName),
                                limit: 20,
                                criteria: {
                                    languages: e.languagePreferences,
                                    filter: xn.a[e.timeFilterValue]
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return F.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: Vn,
                                    variables: F.__assign({}, e.data.variables, {
                                        cursor: e.data.game.clips.edges[e.data.game.clips.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            game: F.__assign({}, n.game, {
                                                clips: F.__assign({}, n.game.clips, {
                                                    edges: Object(X.b)(e.game.clips.edges, n.game.clips.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                })], t)
            }(Z.Component),
            Gn = Object(W.b)(function(e) {
                return {
                    languagePreferences: Object(z.a)(e)
                }
            })(Bn),
            Hn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateTimeFilter = function(e) {
                        n.setState({
                            timeFilterValue: e
                        })
                    }, n.state = {
                        directoryType: se(t.match.path),
                        timeFilterValue: xn.b.Day
                    }, n
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), T.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    return Z.createElement(Gn, {
                        gameName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        updateTimeFilter: this.updateTimeFilter,
                        timeFilterValue: this.state.timeFilterValue
                    })
                }, t = F.__decorate([Object(ae.d)("DirectoryGameClipsPage", {
                    destination: K.a.DirectoryGameClips
                }), Object(J.a)({
                    location: te.PageviewLocation.ClipsGame
                })], t)
            }(Z.Component),
            Zn = n("OAwv"),
            Wn = n("68hr"),
            zn = n("oAfo"),
            qn = n("4Tv+"),
            $n = n("J5Bm"),
            Qn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        var e = t.props && t.props.referrer;
                        Object(qn.a)(t.props.content.info, e, t.props.game, te.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    return Z.createElement(ue.J, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 6
                        }
                    }, Z.createElement(ue.Z, {
                        margin: {
                            bottom: 3
                        }
                    }, Z.createElement(ue.S, {
                        gutterSize: ue.T.Default
                    }, Z.createElement(ue.J, {
                        cols: 4
                    }, Z.createElement(ue.j, {
                        ratio: ue.k.Aspect1x1
                    }, Z.createElement("img", {
                        src: r
                    }))), Z.createElement(ue.J, {
                        cols: 8
                    }, Z.createElement(ue._25, {
                        type: ue._30.P,
                        fontSize: ue.P.Size4,
                        title: o
                    }, o), Z.createElement(ue._25, {
                        type: ue._30.P,
                        color: ue.I.Alt2,
                        title: s
                    }, s), Z.createElement(ue.Z, {
                        display: ue.L.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: ue.O.NoWrap,
                        padding: {
                            bottom: 1,
                            top: 2
                        }
                    }, Z.createElement($n.a, {
                        onClickBuyNow: this.onBuyInGameContentNow,
                        options: l
                    })), Z.createElement(ue._39, null, Z.createElement(Fn, {
                        source: a || t
                    }))))))
                }, t
            }(Z.Component),
            Yn = Object(ae.d)("FeaturedContent")(Qn),
            Jn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.alt ? ue.m.Alt : ue.m.Base;
                    return Z.createElement(ue._21, {
                        background: e,
                        border: !0,
                        padding: {
                            left: 3,
                            right: 3
                        }
                    }, this.props.children)
                }, t
            }(Z.Component),
            Xn = Object(ae.d)("GameDetailsSection")(Jn),
            Kn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return Z.createElement(ue.Z, {
                        margin: {
                            bottom: 1
                        }
                    }, Z.createElement(ue._25, {
                        type: ue._30.H3
                    }, this.props.title))
                }, t
            }(Z.Component),
            ei = Object(ae.d)("GameDetailsTitle")(Kn),
            ti = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.contentList;
                    if (0 === t.length) return null;
                    var n = t.map(function(t, n) {
                        return Z.createElement(Yn, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            refetchData: e.props.refetchData,
                            key: n,
                            referrer: e.props.referrer
                        })
                    });
                    return Z.createElement(Xn, {
                        alt: !0
                    }, Z.createElement(ei, {
                        title: Object(T.d)("Game Add-Ons", "FeaturedContentRow")
                    }), Z.createElement(ue.S, {
                        gutterSize: ue.T.Large
                    }, n))
                }, t
            }(Z.Component),
            ni = Object(ae.d)("FeaturedContentRow")(ti),
            ii = n("aFoJ"),
            ai = (n("nAt9"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSeparator = function() {
                        return Z.createElement(ue._21, {
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
                        n && Object(qn.a)(n, e, t.props.game, te.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onClaimPrimeOffer = function(e) {
                        t.props.claimPrimeOffer && t.props.claimPrimeOffer(Object(X.a)({
                            offerID: e
                        })).then(function(e) {
                            t.props.refetchData && t.props.refetchData()
                        })
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t.renderNewWindowLink = function(e) {
                        return Z.createElement("a", {
                            href: e.href,
                            target: "_blank"
                        }, e.children)
                    }, t.renderSharedRevenueLink = function(e) {
                        return Z.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2771293-how-to-buy-games-on-twitch#partners",
                            "data-test-selector": "fuel-shared-revenue-link",
                            target: "_blank"
                        }, e)
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.game,
                        t = e ? e.product : void 0;
                    if (!e || !t) return Z.createElement(Xn, {
                        alt: !0
                    }, Z.createElement(ue._21, {
                        className: "game-details-box",
                        padding: {
                            top: 2,
                            right: 1,
                            bottom: 2,
                            left: 1
                        },
                        flexDirection: ue.N.Row,
                        display: ue.L.Flex,
                        justifyContent: ue.Y.Between,
                        alignItems: ue.c.Center
                    }, Z.createElement(ue.Z, {
                        display: ue.L.Flex,
                        flexDirection: ue.N.Row,
                        alignItems: ue.c.Center
                    }, Z.createElement(ue.Z, null, Z.createElement(ue._5, {
                        width: 175,
                        height: 36
                    })), this.renderSeparator(), Z.createElement(ue.Z, null, Z.createElement(ue._5, {
                        width: 22,
                        height: 30
                    })), Z.createElement(ue.Z, null, Z.createElement(ue._5, {
                        width: 50,
                        height: 15
                    }))), Z.createElement(ue.Z, null, Z.createElement(ue._5, {
                        width: 290,
                        height: 20
                    }))));
                    var n = this.props.countryCode,
                        i = !(!this.props.currentUser || !this.props.currentUser.hasPrime),
                        a = {
                            info: t.info,
                            crates: t.info.crateASINs,
                            size: ue.x.Large,
                            externalAcquisition: t.acquisition,
                            countryCode: n,
                            userHasPrime: i
                        },
                        r = t.supportedPlatforms.map(function(e) {
                            return Z.createElement("img", {
                                "data-test-selector": "game-details-box-platform-" + e.name,
                                alt: e.name,
                                src: e.iconURL,
                                key: "platform:" + e.name
                            })
                        }),
                        o = null;
                    if (this.props.referrer && this.props.referrer.settings.isCommerceRevShareEnabled) {
                        var s = Object(T.d)("Purchase revenue <x:link>will be shared</x:link> with {channel}", {
                            channel: Z.createElement(ue._25, {
                                bold: !0,
                                type: ue._30.Span
                            }, this.props.referrer.displayName),
                            "x:link": this.renderSharedRevenueLink
                        }, "GameDetailsBox");
                        o = Z.createElement(ue._25, {
                            "data-test-selector": "fuel-shared-revenue"
                        }, s)
                    }
                    return Z.createElement(Xn, {
                        alt: !0
                    }, Z.createElement(ue._21, {
                        className: "game-details-box",
                        padding: {
                            top: 2,
                            right: 1,
                            bottom: 2,
                            left: 1
                        },
                        flexDirection: ue.N.Row,
                        display: ue.L.Flex,
                        justifyContent: ue.Y.Between,
                        alignItems: ue.c.Center
                    }, Z.createElement(ue.Z, {
                        display: ue.L.Flex,
                        flexDirection: ue.N.Row,
                        alignItems: ue.c.Center
                    }, Z.createElement($n.a, {
                        onClickBuyNow: this.onBuyNowClick,
                        onClickClaimPrimeOffer: this.onClaimPrimeOffer,
                        options: a,
                        "data-test-selector": "game-details-box-fuel-buy-button"
                    }), this.renderSeparator(), Z.createElement("img", {
                        alt: Object(T.d)("Maturity Rating", "GameDetailsBox"),
                        src: t.esrbRating.iconURL,
                        "data-test-selector": "game-details-box-rating",
                        className: "game-details-box__rating"
                    }), r, Z.createElement(Fn, {
                        "data-test-selector": "game-details-box-launch-platform",
                        source: t.launchPlatform.description,
                        renderers: {
                            Link: this.renderNewWindowLink
                        }
                    })), o))
                }, t
            }(Z.Component)),
            ri = Object(ae.d)("GameDetailBox")(ai),
            oi = Object(Y.a)(ii, {
                name: "claimPrimeOffer"
            })(ri),
            si = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.game || !this.props.game.product || !this.props.game.product.info) return null;
                    var e = this.props.game.product,
                        t = e.info,
                        n = e.featureDetails,
                        i = e.supportedLanguages,
                        a = e.minimumSystemRequirement,
                        r = e.recommendedSystemRequirement,
                        o = n.map(function(e, t) {
                            return Z.createElement("li", {
                                key: t
                            }, Z.createElement(Fn, {
                                source: e
                            }))
                        }),
                        s = i.map(function(e, t) {
                            return [Z.createElement(ue.J, {
                                key: t + "lang",
                                cols: 3
                            }, Z.createElement(ue.Z, null, e.language)), Z.createElement(ue.J, {
                                key: t + "audio",
                                cols: 3
                            }, Z.createElement(ue._21, {
                                textAlign: ue._26.Center
                            }, e.hasAudio && Z.createElement(ue._12, {
                                asset: ue._13.Check,
                                type: ue._14.Success
                            }))), Z.createElement(ue.J, {
                                key: t + "int",
                                cols: 3
                            }, Z.createElement(ue._21, {
                                textAlign: ue._26.Center
                            }, e.hasInterface && Z.createElement(ue._12, {
                                asset: ue._13.Check,
                                type: ue._14.Success
                            }))), Z.createElement(ue.J, {
                                key: t + "subs",
                                cols: 3
                            }, Z.createElement(ue._21, {
                                textAlign: ue._26.Center
                            }, e.hasSubtitles && Z.createElement(ue._12, {
                                asset: ue._13.Check,
                                type: ue._14.Success
                            }))), Z.createElement(ue.J, {
                                key: t + "hr",
                                cols: 12
                            }, Z.createElement(ue._21, {
                                margin: {
                                    top: .5,
                                    bottom: .5
                                },
                                borderBottom: !0,
                                alignContent: ue.b.Stretch
                            }))]
                        }),
                        l = this.renderSystemRequirements(a),
                        d = this.renderSystemRequirements(r);
                    return Z.createElement(Xn, null, Z.createElement(ue.S, {
                        gutterSize: ue.T.Large
                    }, Z.createElement(ue.J, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, Z.createElement(ue.Z, {
                        margin: {
                            top: 4
                        }
                    }, Z.createElement(ei, {
                        title: Object(T.d)("Description", "DirectoryGameDetailsPage")
                    }), Z.createElement(ue._39, null, Z.createElement(Fn, {
                        source: t.description
                    }))), Z.createElement(ue.Z, {
                        margin: {
                            top: 4
                        }
                    }, Z.createElement(ei, {
                        title: Object(T.d)("Features", "DirectoryGameDetailsPage")
                    }), Z.createElement(ue._39, null, Z.createElement("ul", null, o))), Z.createElement(ue._21, {
                        margin: {
                            top: 4
                        },
                        fontSize: ue.P.Size6
                    }, Z.createElement(ei, {
                        title: Object(T.d)("Information", "DirectoryGameDetailsPage")
                    }), this.renderRow(Object(T.d)("Title: ", "DirectoryGameDetailsPage"), t.title), this.renderRow(Object(T.d)("Developer: ", "DirectoryGameDetailsPage"), e.developer), this.renderRow(Object(T.d)("Publisher: ", "DirectoryGameDetailsPage"), e.publisher), this.renderRowLink(Object(T.d)("More Info: ", "DirectoryGameDetailsPage"), Object(T.d)("Website", "DirectoryGameDetailsPage"), e.websiteURL), e.eulaURL && this.renderRowLink(Object(T.d)("License Agreement: ", "DirectoryGameDetailsPage"), Object(T.d)("Check out the EULA", "DirectoryGameDetailsPage"), e.eulaURL), this.renderRowLink(Object(T.d)("Need Help? ", "DirectoryGameDetailsPage"), Object(T.d)("Contact Support", "DirectoryGameDetailsPage"), e.supportURL))), Z.createElement(ue.J, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, Z.createElement(ue.Z, {
                        margin: {
                            top: 4
                        }
                    }, Z.createElement(ei, {
                        title: Object(T.d)("Hardware Requirements", "DirectoryGameDetailsPage")
                    }), Z.createElement(ue.Z, {
                        padding: {
                            bottom: 1
                        }
                    }, Z.createElement(ue._25, {
                        type: ue._30.H4,
                        bold: !0
                    }, Object(T.d)("Minimum", "DirectoryGameDetailsPage"))), l, Z.createElement(ue.Z, {
                        padding: {
                            top: 1,
                            bottom: 1
                        }
                    }, Z.createElement(ue._25, {
                        type: ue._30.H4,
                        bold: !0
                    }, Object(T.d)("Recommended", "DirectoryGameDetailsPage"))), d), Z.createElement(ue.Z, {
                        margin: {
                            top: 4
                        }
                    }, Z.createElement(ei, {
                        title: Object(T.d)("Language Support", "DirectoryGameDetailsPage")
                    }), Z.createElement(ue.S, null, Z.createElement(ue.J, {
                        cols: 3
                    }, Z.createElement(ue._21, {
                        color: ue.I.Alt2
                    }, Object(T.d)("Language", "DirectoryGameDetailsPage"))), Z.createElement(ue.J, {
                        cols: 3
                    }, Z.createElement(ue._21, {
                        color: ue.I.Alt2,
                        textAlign: ue._26.Center
                    }, Object(T.d)("Audio", "DirectoryGameDetailsPage"))), Z.createElement(ue.J, {
                        cols: 3
                    }, Z.createElement(ue._21, {
                        color: ue.I.Alt2,
                        textAlign: ue._26.Center
                    }, Object(T.d)("Interface", "DirectoryGameDetailsPage"))), Z.createElement(ue.J, {
                        cols: 3
                    }, Z.createElement(ue._21, {
                        color: ue.I.Alt2,
                        textAlign: ue._26.Center
                    }, Object(T.d)("Subtitles", "DirectoryGameDetailsPage"))), Z.createElement(ue.J, {
                        cols: 12
                    }, Z.createElement(ue._21, {
                        borderBottom: !0,
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    })), s)))))
                }, t.prototype.renderSystemRequirements = function(e) {
                    return Z.createElement(ue.Z, null, this.renderRow(Object(T.d)("OS:", "DirectoryGameDetailsPage"), e.osVersion), this.renderRow(Object(T.d)("Processor:", "DirectoryGameDetailsPage"), e.processor), this.renderRow(Object(T.d)("Memory:", "DirectoryGameDetailsPage"), e.ram), this.renderRow(Object(T.d)("Graphics Card:", "DirectoryGameDetailsPage"), e.videoCard), this.renderRow(Object(T.d)("DirectX:", "DirectoryGameDetailsPage"), e.directXVersion), this.renderRow(Object(T.d)("Hard Drive Space:", "DirectoryGameDetailsPage"), e.hardDriveSpace), this.renderRow(Object(T.d)("Other:", "DirectoryGameDetailsPage"), e.other))
                }, t.prototype.renderRow = function(e, t) {
                    return t ? Z.createElement(ue.Z, {
                        display: ue.L.Flex,
                        flexDirection: ue.N.Row,
                        flexWrap: ue.O.NoWrap
                    }, Z.createElement(ue._21, {
                        color: ue.I.Alt2,
                        padding: {
                            right: 1
                        },
                        display: ue.L.Flex,
                        flexShrink: 0
                    }, e), Z.createElement(ue.Z, {
                        display: ue.L.Flex,
                        flexGrow: 1
                    }, t)) : null
                }, t.prototype.renderRowLink = function(e, t, n) {
                    return this.renderRow(e, Z.createElement("a", {
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, t))
                }, t
            }(Z.Component),
            li = Object(ae.d)("GameInfoSection")(si),
            di = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return F.__extends(t, e), t.prototype.render = function() {
                    return Z.createElement(ue._21, {
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, Z.createElement("img", {
                        src: this.props.screenshotURL
                    }), Z.createElement(jt.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, t
            }(Z.Component),
            ci = Object(le.d)(Object(W.b)(null, function(e) {
                return Object(le.b)({
                    closeModal: vt.c
                }, e)
            }))(di),
            ui = n("4mYF"),
            mi = n("fc0G"),
            pi = Object(ae.d)("VideoEmbed", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.video,
                    n = t.id,
                    i = t.lengthSeconds,
                    a = t.publishedAt,
                    r = t.previewThumbnailURL,
                    o = t.viewCount,
                    s = {
                        vodID: n,
                        disableTheatreButton: !0,
                        playerTypeOverride: e.playerTypeOverride
                    };
                return Z.createElement(ui.a, {
                    createdAt: a,
                    lengthSeconds: i,
                    type: ui.b.Video,
                    thumbnailURL: r,
                    viewCount: o
                }, Z.createElement(mi.c, F.__assign({}, s)))
            }),
            hi = n("KqsW"),
            gi = (n("OOh8"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderItems = function() {
                        if (!t.props.videos && !t.props.thumbnailURLs) return [0, 1, 2, 3].map(function(e) {
                            return Z.createElement(ue.Z, {
                                key: "placeholder-" + e,
                                padding: {
                                    right: 2
                                }
                            }, Z.createElement(ue._5, {
                                width: 460,
                                height: 260
                            }))
                        });
                        var e = (t.props.videos || []).map(function(e) {
                                return Z.createElement(ue.Z, {
                                    className: "game-media__video",
                                    padding: {
                                        right: 2
                                    },
                                    key: e.id
                                }, Z.createElement(pi, {
                                    video: e
                                }))
                            }),
                            n = (t.props.thumbnailURLs || []).map(function(e, n) {
                                return Z.createElement(ue.Z, {
                                    className: "game-media__image",
                                    padding: {
                                        right: 2
                                    },
                                    key: e
                                }, Z.createElement(ue.X, {
                                    onClick: t.handleOpenModal,
                                    "data-full": t.props.screenshotURLs[n],
                                    ariaLabel: Object(T.d)("Screenshot", "DirectoryGameDetailsGameMedia")
                                }, Z.createElement(ue.j, {
                                    ratio: ue.k.Aspect16x9
                                }, Z.createElement("img", {
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
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return Z.createElement(Xn, null, Z.createElement(ei, {
                        title: Object(T.d)("Videos and Screenshots", "DirectoryGameDetailsPage")
                    }), Z.createElement(ue.U, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, Z.createElement(hi.a, {
                        items: this.renderItems()
                    })))
                }, t = F.__decorate([Object(ae.d)("GameMedia")], t)
            }(Z.Component)),
            vi = Object(W.b)(function() {
                return {}
            }, function(e) {
                return Object(le.b)({
                    showImageViewerModal: function(e) {
                        var t = F.__rest(e, []);
                        return Object(vt.d)(ci, t)
                    }
                }, e)
            })(gi),
            fi = (n("UJ+F"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        var e = t.props && t.props.referrer;
                        Object(qn.a)(t.props.content.info, e, t.props.game, te.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = this.props.content,
                        n = t.info,
                        i = t.tags,
                        a = n.crateASINs,
                        r = n.imageURL,
                        o = n.price,
                        s = n.title,
                        l = i.join(", "),
                        d = {
                            info: n,
                            countryCode: this.props.countryCode,
                            crates: n.crateASINs,
                            isInGameContent: !0,
                            userHasPrime: this.props.hasPrime
                        },
                        c = Z.createElement($n.a, {
                            onClickBuyNow: this.onBuyInGameContentNow,
                            options: d
                        });
                    if (a.length > 1) {
                        var u = Object(T.d)("{numCrates} Twitch Crates", {
                            numCrates: a.length
                        }, "InGameContentCrateReward");
                        e = Z.createElement(ue._21, {
                            className: "in-game-content__crates",
                            attachBottom: !0,
                            padding: {
                                left: 1,
                                right: 1
                            },
                            position: ue._6.Absolute,
                            textAlign: ue._26.Right
                        }, u)
                    }
                    return Z.createElement(ue.Z, {
                        margin: {
                            bottom: 3
                        }
                    }, Z.createElement(ue._21, {
                        className: "in-game-content",
                        border: !0,
                        fullHeight: !0,
                        position: ue._6.Relative
                    }, Z.createElement(ue.j, {
                        ratio: ue.k.Aspect1x1
                    }, Z.createElement("img", {
                        src: r
                    })), Z.createElement(ue._21, {
                        background: ue.m.Base,
                        padding: 1
                    }, Z.createElement(ue.Z, {
                        className: "in-game-content__info-header"
                    }, Z.createElement(ue._25, {
                        type: ue._30.P,
                        fontSize: ue.P.Size5,
                        bold: !0,
                        title: s
                    }, s), Z.createElement(ue._25, {
                        type: ue._30.P,
                        color: ue.I.Alt2,
                        title: l
                    }, l)), Z.createElement(ue.Z, {
                        className: "in-game-content__price",
                        position: ue._6.Relative
                    }, Z.createElement("p", {
                        title: o
                    }, o), e), Z.createElement(ue.Z, {
                        className: "in-game-content__buy-button",
                        position: ue._6.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        margin: {
                            left: 1,
                            bottom: 1,
                            right: 1
                        }
                    }, c))))
                }, t
            }(Z.Component)),
            yi = Object(ae.d)("InGameContent")(fi),
            ki = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.contentList;
                    if (0 === t.length) return null;
                    var n = t.map(function(t, n) {
                        return Z.createElement(yi, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            refetchData: e.props.refetchData,
                            key: n,
                            referrer: e.props.referrer
                        })
                    });
                    return Z.createElement(Xn, {
                        alt: !0
                    }, Z.createElement(ei, {
                        title: Object(T.d)("In-Game Content", "FeaturedContentRow")
                    }), Z.createElement(ue._36, {
                        childWidth: ue._37.Medium,
                        gutterSize: ue._38.Small,
                        noGrow: !0
                    }, n))
                }, t
            }(Z.Component),
            bi = Object(ae.d)("InGameContentRow")(ki),
            _i = n("FEHb"),
            Si = n("xCTX"),
            Ci = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        sortedInGameContent: []
                    }, t.refetchData = function() {
                        t.props.data && t.props.data.refetch && t.props.data.refetch()
                    }, t
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), T.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data && e.data.game,
                        n = t && t.product;
                    if (n) {
                        var i = n.inGameContent.slice().sort(zn.a);
                        this.setState({
                            sortedInGameContent: i
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.props.data.loading) {
                        if (this.props.data.error) return Z.createElement($.a, {
                            message: Object(T.d)("Error loading data.", "DirectoryGameDetailsPage")
                        });
                        if (!this.props.data.game || !this.props.data.game.product || !this.props.data.game.product.id) return Z.createElement(Wn.a, null)
                    }
                    var e = null,
                        t = null,
                        n = null;
                    this.props.data.game && this.props.data.game.product && (e = this.props.data.game.product.media.screenshotURLs, t = this.props.data.game.product.media.thumbnailURLs, n = this.props.data.game.product.media.videos);
                    var i = this.props.data,
                        a = i.currentUser,
                        r = i.game,
                        o = a && a.hasPrime,
                        s = this.props.referrerData && this.props.referrerData.user,
                        l = "";
                    this.props.data.requestInfo && (l = this.props.data.requestInfo.countryCode);
                    var d = [],
                        c = [];
                    return this.state.sortedInGameContent.forEach(function(e) {
                        e.info.isFeatured ? d.push(e) : c.push(e)
                    }), Z.createElement(ue.Z, null, Z.createElement(oi, {
                        game: this.props.data.game,
                        referrer: s,
                        countryCode: l,
                        currentUser: this.props.data.currentUser,
                        refetchData: this.refetchData
                    }), Z.createElement(vi, {
                        screenshotURLs: e,
                        thumbnailURLs: t,
                        videos: n
                    }), Z.createElement(ni, {
                        contentList: d,
                        countryCode: l,
                        game: r,
                        hasPrime: o,
                        refetchData: this.refetchData,
                        referrer: s
                    }), Z.createElement(bi, {
                        contentList: c,
                        countryCode: l,
                        game: r,
                        hasPrime: o,
                        refetchData: this.refetchData,
                        referrer: s
                    }), Z.createElement(li, {
                        game: this.props.data.game
                    }))
                }, t = F.__decorate([Object(Y.a)(Si, {
                    options: function(e) {
                        return {
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName)
                            }
                        }
                    }
                }), Object(Y.a)(_i, {
                    name: "referrerData",
                    skip: function(e) {
                        var t = Zn.parse(e.location.search),
                            n = t.br_name,
                            i = t.br_id;
                        return !(n || i)
                    },
                    options: function(e) {
                        var t = Zn.parse(e.location.search),
                            n = t.br_name,
                            i = t.br_id;
                        return {
                            variables: {
                                login: n || null,
                                id: i || null
                            }
                        }
                    }
                }), Object(ae.d)("DirectoryGameDetailsPage", {
                    destination: K.a.DirectoryGameDetails
                }), Object(J.a)({
                    location: te.PageviewLocation.GameDetail
                })], t)
            }(Z.Component),
            Ei = n("JpYe"),
            Ni = n("n2E0"),
            wi = n("VDV3"),
            Oi = n("3yQz"),
            Di = n("JtGN"),
            Fi = Oi.b,
            Ti = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onVideoSortChange = function(e) {
                        Object(Ei.d)("/directory/game/" + n.props.match.params.encodedCommunityName + "/videos", n.props, void 0, e)
                    }, n.onVideoFilterChange = function(e) {
                        Object(Ei.d)("/directory/game/" + n.props.match.params.encodedCommunityName + "/videos", n.props, e)
                    }, n.state = {
                        directoryType: se(t.match.path)
                    }, n
                }
                return F.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), T.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    var e = null,
                        t = decodeURIComponent(this.props.match.params.encodedCommunityName),
                        n = Object(Ei.c)(this.props) || Fi,
                        i = Object(Ei.b)(this.props);
                    if (this.props.data.error) {
                        var a = Object(T.d)("{gameName} videos are temporarily unavailable.", {
                            gameName: t
                        }, "DirectoryVideosPage");
                        return Z.createElement($.a, {
                            message: a
                        })
                    }
                    if (!this.props.data.loading && null === this.props.data.game) {
                        a = Object(T.d)("{gameName} does not exist.", {
                            gameName: t
                        }, "DirectoryVideosPage");
                        return Z.createElement($.a, {
                            message: a
                        })
                    }
                    return this.props.data.game && this.props.data.game.videos && (e = this.props.data.game.videos.edges.map(function(e) {
                        return e.node
                    })), Z.createElement(ue.Z, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, Z.createElement(wi.a, {
                        onVideoSortChange: this.onVideoSortChange,
                        onVideoFilterChange: this.onVideoFilterChange,
                        selectedSort: n,
                        broadcastType: i
                    }), Z.createElement(wi.b, {
                        hideGameArt: !0,
                        trackingContent: Object(Ni.a)(n),
                        trackingMedium: te.PageviewMedium.GameVideos,
                        videos: e
                    }), Z.createElement(de.a, {
                        enabled: this.enablePagination(),
                        key: "directory-game-videos-page-" + i + "-" + n,
                        loadMore: this.props.loadMore
                    }))
                }, t.prototype.enablePagination = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.game && this.props.data.game.videos && !!this.props.data.game.videos.pageInfo.hasNextPage
                }, t = F.__decorate([Object(Y.a)(Di, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                gameName: decodeURIComponent(e.match.params.encodedCommunityName),
                                videoLimit: 30,
                                languages: e.languagePreferences,
                                broadcastTypes: e.match.params.filter && "all" !== e.match.params.filter ? [e.match.params.filter] : void 0,
                                videoSort: Object(Ei.c)(e) || Oi.b
                            }
                        }
                    },
                    props: function(e) {
                        return F.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: Di,
                                    variables: F.__assign({}, e.data.variables, {
                                        followedCursor: e.data.game && e.data.game.videos.edges.length > 0 ? e.data.game.videos.edges[e.data.game.videos.edges.length - 1].cursor : void 0
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            game: F.__assign({}, n.game, {
                                                videos: F.__assign({}, n.game.videos, {
                                                    edges: Object(X.b)(e.game.videos.edges, n.game.videos.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(ae.d)("DirectoryGameVideosPage", {
                    destination: K.a.DirectoryGameVideos
                }), Object(J.a)({
                    location: te.PageviewLocation.Directory,
                    properties: function(e) {
                        return {
                            content_type: te.PageviewDirectoryContentType.Videos,
                            game: decodeURIComponent(e.match.params.encodedCommunityName)
                        }
                    }
                })], t)
            }(Z.Component),
            Li = Object(W.b)(function(e) {
                return {
                    languagePreferences: Object(z.a)(e)
                }
            })(Ti);
        ! function(e) {
            e.CLIPS = "clips-scroller", e.DEFAULT = "directory-root-scroller", e.GAME = "game-scroller"
        }(Nn || (Nn = {}));
        var Ii = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return F.__extends(t, e), t.prototype.render = function() {
                var e = this.props.match.path.startsWith("/communities") ? oe.a.Communities : oe.a.Games;
                return Z.createElement(ue.Z, {
                    "data-a-target": this.getScrollerName()
                }, Z.createElement(Dn.b, {
                    suppressScrollX: !0,
                    addPaddingWhenPlayerIsPersisting: !0
                }), Z.createElement(On, {
                    directoryType: e,
                    directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                    activeTab: this.getActiveTab()
                }), Z.createElement(mt.d, null, Z.createElement(mt.b, {
                    path: "/communities/:encodedCommunityName/details",
                    component: Pn
                }), Z.createElement(mt.b, {
                    path: "/communities/:encodedCommunityName/:encodedLanguage",
                    component: ut
                }), Z.createElement(mt.b, {
                    path: "/communities/:encodedCommunityName",
                    component: ut
                }), Z.createElement(mt.b, {
                    path: "/directory/game/:encodedCommunityName/clips",
                    component: Hn
                }), Z.createElement(mt.b, {
                    path: "/directory/game/:encodedCommunityName/details",
                    component: Ci
                }), Z.createElement(mt.b, {
                    path: "/directory/game/:encodedCommunityName/videos/:filter",
                    component: Li
                }), Z.createElement(mt.b, {
                    path: "/directory/game/:encodedCommunityName/:encodedLanguage",
                    component: ut
                }), Z.createElement(mt.b, {
                    path: "/directory/game/:encodedCommunityName",
                    component: ut
                })))
            }, t.prototype.getActiveTab = function() {
                var e = void 0;
                return this.isClipsPage() ? e = kt.DirectoryClipsPage : this.isDetailsPage() ? e = kt.DirectoryDetailsPage : this.isVideosPage() ? e = kt.DirectoryVideosPage : this.isMainPage() && (e = kt.DirectoryPage), e
            }, t.prototype.getScrollerName = function() {
                var e = Nn.DEFAULT;
                return this.isClipsPage() ? e = Nn.CLIPS : this.isMainPage() && (e = Nn.GAME), e
            }, t.prototype.isMainPage = function() {
                return "/communities/:encodedCommunityName" === this.props.match.path || "/directory/game/:encodedCommunityName" === this.props.match.path
            }, t.prototype.isClipsPage = function() {
                return "/directory/game/:encodedCommunityName/clips" === this.props.match.path
            }, t.prototype.isDetailsPage = function() {
                return "/communities/:encodedCommunityName/details" === this.props.match.path || "/directory/game/:encodedCommunityName/details" === this.props.match.path
            }, t.prototype.isVideosPage = function() {
                return "/directory/game/:encodedCommunityName/videos/:filter" === this.props.match.path
            }, t
        }(Z.Component);
        n.d(t, "DirectoryGamePage", function() {
            return ut
        }), n.d(t, "DirectoryRootPage", function() {
            return Ii
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
                end: 333
            }
        };
        n.loc.source = {
            body: "query DirectoryHeader_DirectoryBanner($name: String! $type: DirectoryType!) {\ndirectory(name: $name type: $type) {\nid\nname\ndisplayName\ncoverURL(width: 1200 height: 180)\nviewersCount\nfollowersCount\nstreams(first: 1) {\nedges {\nnode {\nid\npreviewImageURL(width: 320 height: 180)\n}\n}\n}\n}\ncurrentUser {\nid\nroles {\nisSiteAdmin\nisStaff\n}\n}\n}",
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
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("2hJ3"),
            s = n("yDzg"),
            l = "https://www.facebook.com/sharer/sharer.php",
            d = "https://www.twitter.com/share",
            c = "https://www.reddit.com/submit",
            u = "https://vk.com/share.php",
            m = n("Odds");
        n("bdk8");
        n.d(t, "b", function() {
            return p
        }), n.d(t, "a", function() {
            return h
        });
        var p;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(p || (p = {}));
        var h = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? a.createElement("a", i.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(m._43)(n.props)), n.renderIcon()) : a.createElement("button", i.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(m._43)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(o.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return a.createElement(m.Z, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, a.createElement(m._12, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== p.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case p.Twitter:
                            return "Twitter";
                        case p.Reddit:
                            return "Reddit";
                        case p.Facebook:
                            return "Facebook";
                        case p.VKontakte:
                            return "VKontakte";
                        case p.Copy:
                            return n.state.isCopied ? Object(r.d)("Copied", "SocialButton") : Object(r.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case p.Twitter:
                            return m._13.Twitter;
                        case p.Facebook:
                            return m._13.Facebook;
                        case p.VKontakte:
                            return m._13.VKontakte;
                        case p.Reddit:
                            return m._13.Reddit;
                        case p.Copy:
                        default:
                            return m._13.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case p.Twitter:
                            return e + "--twitter";
                        case p.Reddit:
                            return e + "--reddit";
                        case p.Facebook:
                            return e + "--facebook";
                        case p.VKontakte:
                            return e + "--vkontakte";
                        case p.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        i = e.type,
                        a = n.getUrl(),
                        r = t || "";
                    switch (i) {
                        case p.Reddit:
                            return function(e, t) {
                                return Object(s.a)(c, {
                                    url: e,
                                    title: t
                                })
                            }(a, r);
                        case p.VKontakte:
                            return function(e) {
                                return Object(s.a)(u, {
                                    url: e
                                })
                            }(a);
                        case p.Facebook:
                            return function(e) {
                                return Object(s.a)(l, {
                                    u: e
                                })
                            }(a);
                        case p.Twitter:
                            return function(e, t) {
                                return Object(s.a)(d, {
                                    url: e,
                                    text: t
                                })
                            }(a, r);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement(m.Z, {
                    className: "social-button"
                }, a.createElement(m._33, {
                    label: this.getTooltipFromType(),
                    direction: m._35.Top
                }, this.renderLink()))
            }, t
        }(a.Component)
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
            return s
        });
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("Aj/L"),
            o = "application/json; charset=UTF-8",
            s = function() {
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
                    var s = Object(r.c)(n);
                    return s && (i.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (i["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
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
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("+GT7"),
            s = n("SZoP"),
            l = n("NY9D"),
            d = n("vH/s"),
            c = n("v5ho"),
            u = n("RH2O"),
            m = n("2KeS"),
            p = n("V5M+"),
            h = n("jetF"),
            g = n("7vx8"),
            v = n("CSlQ"),
            f = n("3zLD"),
            y = n("+8VM"),
            k = n("oIkB"),
            b = function(e) {
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
            _ = n("Odds"),
            S = n("nC3l"),
            C = (n("sJt0"), "error-message"),
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? a.createElement(_.Z, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(_._25, {
                            color: _.I.Error,
                            type: _._30.H4,
                            "data-test-selector": C
                        }, b(t.state.error))) : null
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
                                        return this.props.banUserFromCommunity ? (e = i.__assign({}, Object(k.a)({
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
                    return a.createElement(_.U, {
                        position: _._6.Relative
                    }, a.createElement(_._21, {
                        background: _.m.Base,
                        className: "stream-ban-modal"
                    }, a.createElement(_.Z, {
                        padding: 2
                    }, this.renderErrorMessage(), a.createElement(_.Z, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(_._25, {
                        type: _._30.H4
                    }, Object(r.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), a.createElement(_._21, {
                        borderTop: !0
                    }, a.createElement(_.Z, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(_._25, {
                        bold: !0
                    }, Object(r.d)("Reason (Required)", "StreamBanModal")), a.createElement(_.V, {
                        type: _.W.Text,
                        placeholder: Object(r.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), a.createElement(_._21, {
                        borderTop: !0
                    }, a.createElement(_.Z, {
                        padding: {
                            top: 2
                        },
                        textAlign: _._26.Center
                    }, a.createElement(_.Z, {
                        display: _.L.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(_.u, {
                        type: _.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(r.d)("Cancel", "StreamBanModal"))), a.createElement(_.Z, {
                        display: _.L.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(_.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(r.d)("Ban", "StreamBanModal")))))), a.createElement(y.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(a.Component),
            N = Object(f.compose)(Object(g.a)(S, {
                name: "banUserFromCommunity"
            }))(E),
            w = Object(u.b)(null, function(e) {
                return Object(m.b)({
                    onCloseModal: p.c
                }, e)
            })(N),
            O = (n("npyu"), n("plcU")),
            D = "error-message",
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? a.createElement(_.Z, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(_._25, {
                            color: _.I.Error,
                            type: _._30.H4,
                            "data-test-selector": D
                        }, b(t.state.error))) : null
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
                                        return this.props.timeoutUserFromCommunity ? (e = i.__assign({}, Object(k.a)({
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
                    return a.createElement(_.U, {
                        position: _._6.Relative
                    }, a.createElement(_._21, {
                        background: _.m.Base,
                        className: "stream-timeout-modal"
                    }, a.createElement(_.Z, {
                        padding: 2
                    }, this.renderErrorMessage(), a.createElement(_.Z, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(_._25, {
                        type: _._30.H4
                    }, Object(r.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), a.createElement(_._21, {
                        borderTop: !0
                    }, a.createElement(_.Z, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(_._25, {
                        bold: !0
                    }, Object(r.d)("Reason (Required)", "StreamTimeoutModal")), a.createElement(_.V, {
                        type: _.W.Text,
                        placeholder: Object(r.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), a.createElement(_.Z, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(_._25, {
                        bold: !0
                    }, Object(r.d)("Duration", "StreamTimeoutModal")), a.createElement(_._18, {
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
                    }, Object(r.d)("24 hours", "StreamTimeoutModal")))), a.createElement(_._21, {
                        borderTop: !0
                    }, a.createElement(_.Z, {
                        padding: {
                            top: 2
                        },
                        textAlign: _._26.Center
                    }, a.createElement(_.Z, {
                        display: _.L.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(_.u, {
                        type: _.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(r.d)("Cancel", "StreamTimeoutModal"))), a.createElement(_.Z, {
                        display: _.L.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(_.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(r.d)("Timeout", "StreamTimeoutModal")))))), a.createElement(y.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(a.Component),
            T = Object(f.compose)(Object(g.a)(O, {
                name: "timeoutUserFromCommunity"
            }))(F),
            L = Object(u.b)(null, function(e) {
                return Object(m.b)({
                    onCloseModal: p.c
                }, e)
            })(T),
            I = n("PO03"),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(s.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(w, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(s.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(L, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? a.createElement(h.a, null, a.createElement(_.v, {
                        ariaLabel: Object(r.d)("Moderation", "DirectoryGamePage"),
                        icon: _._13.ChatRiskFlag
                    }), a.createElement(_.p, {
                        direction: _.q.BottomRight,
                        size: _.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? a.createElement(_.X, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, a.createElement(_.Z, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(r.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? a.createElement(_.X, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, a.createElement(_.Z, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(r.d)("Timeout", "StreamFlag"))) : null
                }, t = i.__decorate([Object(g.a)(I, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(v.d)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component),
            R = Object(u.b)(null, function(e) {
                return Object(m.b)({
                    onShowModal: p.d
                }, e)
            })(A),
            j = n("PLRK"),
            P = (n("GiGb"), "directory-game__card_container"),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getLinkTo = function(e, n) {
                        var i = t.props.trackingContent ? t.props.trackingContent : d.PageviewContent.Live,
                            a = t.props.directoryType === c.a.Communities ? d.PageviewMedium.Community : d.PageviewMedium.Game;
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
                        return e.broadcaster ? t.props.directoryType === c.a.Communities && t.props.directoryName ? a.createElement(_.Z, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: _._6.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, a.createElement(R, {
                            communityName: t.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, t.shouldShowGame = function(e) {
                        return t.props.directoryType !== c.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
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
                    }, a.createElement(_.Z, {
                        className: "stream-thumbnail__card",
                        position: _._6.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": P
                    }, a.createElement(o.a, {
                        imageSrc: e.previewImageURL || r.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || j.a,
                        channelName: Object(s.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: this.shouldShowGame("boxArtURL") || r.a.defaultBoxArtURL,
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
            }(a.Component);
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return P
        }), n.d(t, "b", function() {
            return x
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
    INp2: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e + "-" + Date.now() + "}"
        }
    },
    IOwa: function(e, t, n) {
        "use strict";
        var i, a, r, o = n("TToO"),
            s = n("HW6M"),
            l = n("U7vG"),
            d = n("6sO2"),
            c = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), i = {}, i[c.a.Live] = "stream-type-indicator--live", i[c.a.Premiere] = "stream-type-indicator--premiere", i[c.a.Rerun] = "stream-type-indicator--rerun", i[c.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = (a = {}, a[c.a.Premiere] = u._13.VideoPremiere, a[c.a.Rerun] = u._13.VideoRerun, a[c.a.WatchParty] = u._13.VideoRerun, a),
            h = (r = {}, r[c.a.Premiere] = u._14.Live, r[c.a.Rerun] = u._14.Inherit, r[c.a.WatchParty] = u._14.Inherit, r),
            g = function(e) {
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
            a = n("U7vG"),
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
                    return a.createElement(d.Z, {
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
                return a.createElement(d._36, {
                    gutterSize: d._38.Small,
                    childWidth: e.videoCardSize || d._37.Large,
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
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
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
        a.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product.gql"\n#import "twilight/features/fuel/models/product-language.gql"\n#import "twilight/features/fuel/models/system-requirement.gql"\nfragment fuelProductFull on GameProduct {\n...fuelProduct\npublisher\nwebsiteURL\neulaURL\nsupportURL\nmedia {\nid\nbackgroundImageURL\nboxArtURL\nscreenshotURLs(width: 1920)\nthumbnailURLs: screenshotURLs(width:460)\nvideos {\nid\nlengthSeconds\npreviewThumbnailURL(width: 460 height: 260)\npublishedAt\ntitle\nviewCount\n}\n}\nminimumSystemRequirement {\n...systemRequirement\n}\nrecommendedSystemRequirement {\n...systemRequirement\n}\nsupportedLanguages {\n...productLangauge\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("wn+H").definitions)), a.definitions = a.definitions.concat(i(n("ny0O").definitions)), a.definitions = a.definitions.concat(i(n("iRJa").definitions)), e.exports = a
    },
    J5Bm: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("lfvs"),
            o = n("6sO2"),
            s = n("S1vB"),
            l = n("Odds"),
            d = (n("PlCc"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        balloonOpen: !1
                    }, t.renderUnavailableText = function() {
                        var e = t.props.options.isInGameContent ? Object(o.d)("This content is currently unavailable", "FuelBuyButton") : Object(o.d)("This game is currently unavailable", "FuelBuyButton");
                        return a.createElement(l._25, {
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
                            s = a.createElement(l._25, {
                                className: "fuel-buy-button__crates",
                                "data-target": "fuel-buy-button-crates"
                            }, d)
                        }
                        var c = i ? "fuel-buy-button-content" : "fuel-buy-button";
                        return a.createElement(l.Z, {
                            alignItems: l.c.Center
                        }, a.createElement(l.u, {
                            fullWidth: !0,
                            icon: n && n.length > 0 ? l._13.Crate : void 0,
                            purchase: e,
                            onClick: t.props.onClickBuyNow,
                            "data-target": c,
                            size: r
                        }, Object(o.d)("Buy Now", "FuelBuyButton")), s)
                    }, t.renderPrimeTreatment = function(e, n) {
                        var i = [],
                            r = a.createElement(l._12, {
                                asset: l._13.Crown,
                                type: l._14.Prime,
                                width: 16,
                                height: 16,
                                key: "fuel-crown"
                            });
                        return e ? i = [r, a.createElement("div", {
                            className: "fuel-buy-button__prime-button",
                            key: "fuel-claim"
                        }, a.createElement(l.u, {
                            onClick: t.onClickClaimPrimeOffer
                        }, Object(o.d)("Claim Offer", "FuelBuyButton")))] : n && (i = [n]), a.createElement(l.Z, {
                            flexDirection: l.N.Row,
                            display: l.L.Flex,
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
                    return t.isEntitled ? a.createElement(l._25, {
                        "data-target": "fuel-buy-button-purchased"
                    }, Object(o.d)("Purchased", "FuelBuyButton")) : 0 === t.price.length && i && i.isExternal ? a.createElement("div", {
                        "data-target": "fuel-buy-button-external"
                    }, a.createElement(r, {
                        source: i.description,
                        renderers: {
                            Link: this.renderExternalAcquisitionLink
                        }
                    })) : !t.isForSale && g ? this.renderUnavailableText() : p && !c ? this.renderPrimeTreatment(c, this.renderBuyNowButton(t.price, d, u, m)) : p ? this.renderPrimeTreatment(c) : this.renderBuyNowButton(t.price, d, u, m)
                }, t
            }(a.Component));
        n.d(t, "a", function() {
            return d
        })
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            a = n("U7vG"),
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
                    return a.createElement(r.M, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, a.createElement(r.U, {
                        position: r._6.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: r._42.Above
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
    JpYe: function(e, t, n) {
        "use strict";

        function i(e) {
            return r(s.parse(e.location.search).sort || "")
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
                case c.b:
                    return c.b;
                case c.a:
                    return c.a;
                default:
                    return null
            }
        }
        t.d = function(e, t, n, r) {
            var s = r || i(t),
                d = "";
            s && (d = "?sort=" + function(e) {
                switch (e) {
                    case c.b:
                        return o.Popular;
                    case c.a:
                        return o.Newest;
                    default:
                        var t = e;
                        return t
                }
            }(s));
            var u = n ? n.toLowerCase() : function(e) {
                var t = a(e);
                return t ? t.toLowerCase() : "all"
            }(t);
            l.n.history.push(e + "/" + u + d)
        }, t.c = i, t.b = a, t.a = function(e) {
            var t = s.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }, t.e = r;
        var o, s = n("OAwv"),
            l = (n.n(s), n("6sO2")),
            d = n("6WAQ"),
            c = n("3yQz");
        ! function(e) {
            e.Popular = "views", e.Newest = "time"
        }(o || (o = {}))
    },
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
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
    },
    Jwld: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
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
    KqsW: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return h
        });
        var i, a = n("TToO"),
            r = n("HW6M"),
            o = (n.n(r), n("U7vG")),
            s = (n.n(o), n("6sO2")),
            l = n("CSlQ"),
            d = n("Odds"),
            c = n("M4d4"),
            u = (n.n(c), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(i || (i = {}));
        var m, p = (m = {}, m[i.Previous] = d._13.AngleLeft, m[i.Next] = d._13.AngleRight, m),
            h = function(e) {
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
                        if (!e || !e.children.length) return [];
                        return Array.prototype.slice.call(e.children)
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
                        var l = (u = {}, u[i.Previous] = Object(s.d)("previous", "MediaCarouselNavButton"), u[i.Next] = Object(s.d)("next", "MediaCarouselNavButton"), u),
                            c = r("media-carousel__button", {
                                "media-carousel__button--previous": e === i.Previous,
                                "media-carousel__button--next": e === i.Next,
                                "media-carousel__button--disabled": n
                            }, {
                                "media-carousel__button--inset": !0 === t.props.insetStyle
                            });
                        return o.createElement(d.Z, {
                            className: c,
                            position: d._6.Relative,
                            display: d.L.Flex,
                            alignItems: d.c.Stretch
                        }, o.createElement(d.v, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: a,
                            disabled: n,
                            ariaLabel: l[e],
                            icon: p[e],
                            size: d.x.Large
                        }));
                        var u
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
                    return o.createElement(d.U, a.__assign({}, this.props, {
                        position: d._6.Relative
                    }), o.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, o.createElement(d.Z, {
                        className: "media-carousel__child-container",
                        overflow: d._2.Hidden,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, o.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            marginLeft: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, o.createElement(d.U, {
                        className: "media-carousel__content",
                        display: d.L.Flex,
                        flexWrap: d.O.NoWrap,
                        flexDirection: d.N.Row,
                        alignItems: d.c.Center,
                        "data-js-selector": "carousel-content"
                    }, o.createElement("div", {
                        style: {
                            width: "max-content"
                        }
                    }, this.props.items)))), o.createElement(d.Z, {
                        className: "media-carousel__nav",
                        display: d.L.Flex,
                        alignItems: d.c.Center,
                        position: d._6.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), o.createElement(d.Z, {
                        className: "media-carousel__nav",
                        display: d.L.Flex,
                        alignItems: d.c.Center,
                        position: d._6.Absolute,
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
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("Bxh2").definitions)), e.exports = i
    },
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
                                    value: "ban"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 129
            }
        };
        n.loc.source = {
            body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nban {\ncreatedAt\n}\n}\n}",
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
    MSvX: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("U7vG"),
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
                                    var i = "" !== e.search ? a.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var r = a.stringify(i),
                                        l = o.a.buildType === s.a.Dev ? window.location.host : window.location.hostname,
                                        d = window.location.protocol + "//" + l + e.pathname + "?" + r;
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
                    }, n.isEnabled = o.b.get(l, !1), n.logger = o.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
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
            return l
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return d
        })
    },
    MjlB: function(e, t) {},
    Ncf8: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, a) {
            return {
                type: e,
                id: Object(i.a)(t + "-mod"),
                userLogin: t,
                reason: n,
                duration: a
            }
        };
        var i = n("INp2")
    },
    OOh8: function(e, t) {},
    Ouuk: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e || (e = navigator.userAgent), !!i.exec(e)
        };
        var i = /\scurse\/\d/
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
                return e ? s[e] || "en_US" : "en_US"
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
            return m
        }), n.d(t, "c", function() {
            return v
        });
        var i, a = n("TToO"),
            r = n("U7vG"),
            o = (n.n(r), n("6sO2")),
            s = n("+Znq"),
            l = n("CSlQ"),
            d = n("Odds");
        ! function(e) {
            e[e.All = 0] = "All", e[e.Month = 1] = "Month", e[e.Week = 2] = "Week", e[e.Day = 3] = "Day", e[e.Trending = 4] = "Trending"
        }(i || (i = {}));
        var c, u, m = (c = {}, c[i.All] = "ALL_TIME", c[i.Day] = "LAST_DAY", c[i.Week] = "LAST_WEEK", c[i.Month] = "LAST_MONTH", c[i.Trending] = "TRENDING", c),
            p = (u = {}, u[i.Trending] = "", u[i.Day] = Object(o.d)("24h", "TopClipsTimeFilter"), u[i.Week] = Object(o.d)("7d", "TopClipsTimeFilter"), u[i.Month] = Object(o.d)("30d", "TopClipsTimeFilter"), u[i.All] = Object(o.d)("all", "TopClipsTimeFilter"), u),
            h = [i.Trending, i.Day, i.Week, i.Month, i.All],
            g = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderFilterButton = function(e) {
                        return r.createElement(d.X, {
                            key: e,
                            onClick: n.updateFilterFuncs[e],
                            "data-a-target": "time-filter-option-" + p[e],
                            selected: e === n.props.timeFilterValue
                        }, r.createElement(d.Z, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, n.renderFilterText(e)))
                    }, n.state = {
                        isShowingMenu: !1
                    }, n.updateFilterFuncs = h.reduce(function(e, t) {
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
                    return r.createElement(d.Z, {
                        className: "top-clips-time-filter"
                    }, r.createElement(s.a, null, r.createElement(d.u, {
                        dropdown: !0,
                        type: d.z.Hollow,
                        "data-a-target": "time-filter-selection"
                    }, this.renderFilterText(this.props.timeFilterValue)), r.createElement(d.p, {
                        direction: d.q.BottomLeft,
                        noTail: !0
                    }, r.createElement(d.Z, {
                        padding: {
                            y: .5
                        }
                    }, h.map(this.renderFilterButton)))))
                }, t.prototype.renderFilterText = function(e) {
                    return e === i.Trending ? r.createElement("span", null, Object(o.d)("Trending", "TopClipsTimeFilter")) : r.createElement(d.Z, {
                        display: d.L.Flex
                    }, Object(o.d)("Top", "TopClipsTimeFilter"), r.createElement(d.Z, {
                        margin: {
                            left: .5
                        }
                    }, r.createElement(d._3, {
                        type: d._4.Brand,
                        label: p[e]
                    })))
                }, t
            }(r.Component),
            v = Object(l.d)("TopClipsTimeFilter")(g)
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
        var i = n("U7vG"),
            a = n("MMhf"),
            r = n("Odds"),
            o = function(e) {
                return i.createElement(r.Z, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(r._25, {
                    type: r._30.H4,
                    color: r.I.Alt2,
                    fontSize: r.P.Size5,
                    transform: r._29.Uppercase,
                    "data-a-target": "international-section-header"
                }, Object(a.a)(e.languageCode)))
            };
        n.d(t, "a", function() {
            return o
        })
    },
    SiVO: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        });
        var i;
        ! function(e) {
            e.JPEG = "image/jpeg", e.PNG = "image/png", e.GIF = "image/gif"
        }(i || (i = {}));
        var a = [i.JPEG, i.PNG]
    },
    TFaR: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
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
                end: 444
            }
        };
        n.loc.source = {
            body: "query ClipsCards__Game($gameName: String! $limit: Int $cursor: Cursor $criteria: GameClipsInput) {\ngame(name: $gameName) {\nid\nclips(first: $limit after: $cursor criteria: $criteria) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\nid\nslug\nurl\nembedURL\ntitle\nviewCount\nlanguage\ncurator {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 52 height: 72)\n}\nbroadcaster {\nid\nlogin\ndisplayName\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\n}\n}\n}\n}\n}",
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
    UAN1: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "c", function() {
            return r
        }), t.d = function(e) {
            return {
                type: i,
                browseType: e
            }
        }, t.e = function(e) {
            return {
                type: a,
                lastBrowsePath: e
            }
        }, t.f = function(e) {
            return {
                type: r,
                sortBy: e
            }
        };
        var i = "browse.BROWSE_TYPE_CHANGED",
            a = "browse.LAST_BROWSE_PATH",
            r = "browse.SORT_BY_CHANGED"
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
            r = n("U7vG"),
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
                        return n.props.hideLanguageSelector ? null : r.createElement(m.Z, {
                            display: m.L.InlineFlex,
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
                        h = this.props.selectedSort && Object(c.e)(this.props.selectedSort) || u.a;
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
                    return this.state.isPremiereExperimentActive && (f = r.createElement(m.X, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.PastPremiere,
                        "data-a-target": "video-type-filter-past-premieres"
                    }, r.createElement(m.Z, {
                        className: a(this.props.broadcastType === d.a.PastPremiere ? g : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-past-premiere"
                    }, n))), r.createElement(m.Z, {
                        margin: {
                            bottom: 2
                        },
                        display: m.L.Flex,
                        justifyContent: m.Y.Between
                    }, r.createElement("div", null, this.renderLanguageSelector(), r.createElement(m.Z, {
                        display: m.L.InlineFlex
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
                    }, r.createElement(m.Z, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, r.createElement(m.X, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": "all",
                        "data-a-target": "video-type-filter-all"
                    }, r.createElement(m.Z, {
                        className: a(this.props.broadcastType ? v : g),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-all"
                    }, t)), f, r.createElement(m.X, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Archive,
                        "data-a-target": "video-type-filter-past-broadcasts"
                    }, r.createElement(m.Z, {
                        className: a(this.props.broadcastType === d.a.Archive ? g : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-archive"
                    }, i)), r.createElement(m.X, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Highlight,
                        "data-a-target": "video-type-filter-highlights"
                    }, r.createElement(m.Z, {
                        className: a(this.props.broadcastType === d.a.Highlight ? g : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-highlight"
                    }, s)), r.createElement(m.X, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Upload,
                        "data-a-target": "video-type-filter-uploads"
                    }, r.createElement(m.Z, {
                        className: a(this.props.broadcastType === d.a.Upload ? g : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-upload"
                    }, p))))))), r.createElement("div", null, r.createElement(m._18, {
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
            s = (i = {}, i[r.b.Twitter] = "twitter", i[r.b.Reddit] = "reddit", i[r.b.VKontakte] = "vkontakte", i[r.b.Facebook] = "facebook", i[r.b.Copy] = "link", i[r.b.CopyInput] = "option_link", i),
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
                        channel_id: Number(e.broadcaster.id),
                        channel: e.broadcaster.login,
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
        var i = n("U7vG"),
            a = (n.n(i), n("Odds")),
            r = function() {
                return i.createElement(a.A, null, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._5, null)), i.createElement(a.B, null, i.createElement(a.Z, {
                    display: a.L.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a.Z, {
                    display: a.L.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._5, {
                    width: 40,
                    height: 56
                })), i.createElement(a.Z, {
                    display: a.L.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a._25, null, i.createElement(a._5, {
                    width: 150
                })), i.createElement(a._25, {
                    fontSize: a.P.Size7
                }, i.createElement(a._5, {
                    width: 100
                }))))))
            }
    },
    Y6wo: function(e, t, n) {
        "use strict";

        function i() {
            var e = r.k.get(s, {});
            return a.__assign({
                sortBy: o.a.Popularity
            }, e)
        }
        t.a = i, t.b = function(e, t) {
            var n = i();
            n[e] = t, r.k.set(s, n)
        };
        var a = n("TToO"),
            r = n("6sO2"),
            o = n("r4vp"),
            s = "browseSettings"
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
            o = (n.n(r), n("U7vG")),
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
                    return null !== t && (e = o.createElement(m.Z, {
                        position: m._6.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, o.createElement(m._9, {
                        size: m._10.Small,
                        value: t,
                        mask: !0
                    }))), o.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(m._43)(this.props)), o.createElement(m.A, null, o.createElement(m.Z, {
                        fullWidth: !0
                    }, o.createElement(m.j, {
                        overflow: !0
                    }, o.createElement("div", null, o.createElement(m._21, {
                        display: m.L.InlineFlex,
                        position: m._6.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: m._42.Default,
                        fontSize: m.P.Size6,
                        background: m.m.Overlay,
                        color: m.I.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._20, {
                        "data-test-selector": "video-view-count",
                        icon: m._13.GlyphViews,
                        label: Object(l.d)("views", "VideoPreviewCard"),
                        value: Object(l.f)(this.props.video.viewCount)
                    })), o.createElement(m._21, {
                        display: m.L.InlineFlex,
                        position: m._6.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: m._42.Default,
                        fontSize: m.P.Size6,
                        background: m.m.Overlay,
                        color: m.I.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._20, {
                        "data-test-selector": "video-length",
                        icon: m._13.GlyphLength,
                        label: Object(l.d)("length", "VideoPreviewCard"),
                        value: Object(c.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), o.createElement(m.B, null, o.createElement(m.Z, {
                        display: m.L.Flex,
                        flexDirection: m.N.Row,
                        flexWrap: m.O.NoWrap,
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
                    }, o.createElement(m.U, {
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
                    return o.createElement(m.Z, {
                        "data-test-selector": "game-box-art",
                        display: m.L.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(m.U, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(m._33, {
                        display: m.L.Block,
                        direction: m._35.Bottom,
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
                    return o.createElement(m.Z, {
                        display: m.L.Flex,
                        flexDirection: m.N.Column,
                        overflow: m._2.Hidden
                    }, o.createElement(m.Z, {
                        "data-test-selector": "video-title",
                        overflow: m._2.Hidden,
                        position: m._6.Relative
                    }, o.createElement(m._25, {
                        color: m.I.Base,
                        fontSize: m.P.Size5,
                        lineHeight: m._0.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(m.Z, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(m._25, {
                        type: m._30.Span,
                        color: m.I.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(m.U, {
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
    aUOx: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return {
                type: i.a.Info,
                id: Object(a.a)("notice"),
                message: e
            }
        };
        var i = n("qkCi"),
            a = n("INp2")
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
            a = n("U7vG"),
            r = (n.n(a), {
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
            })
    },
    dzKs: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Channels = "channels", e.ChannelsPlaystation = "channels-playstation", e.ChannelsXbox = "channels-xbox", e.Communities = "communities", e.CreativeCommunities = "creative-communities", e.Games = "games", e.GamesAndCommunities = "games-and-communities"
        }(i || (i = {}))
    },
    hNWd: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.match(l);
            return t && t.length >= 2 ? t[1] : ""
        }
        n.d(t, "a", function() {
            return a
        }), t.d = function(e) {
            if (e.game && e.product) {
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
                r.n.tracking.track(s.SpadeEventType.FuelBuyButton, i)
            }
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
                store_id: i(e.item.info.purchaseURL)
            };
            r.n.tracking.track(s.SpadeEventType.FuelOfferView, t)
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
                store_id: i(t.item.info.purchaseURL)
            };
            r.n.tracking.track(s.SpadeEventType.FuelOfferInteraction, n)
        }, t.c = function(e, t, n) {
            var i = Object(o.b)(),
                a = e.inGameContent.length + 1,
                r = {
                    product: {
                        game: t,
                        user: n,
                        item: e,
                        impressionGroupID: i,
                        offerCount: a,
                        impressionID: Object(o.b)(),
                        index: 0,
                        offerType: "fuel"
                    },
                    igc: {}
                };
            return e.inGameContent.forEach(function(e, s) {
                r.igc[e.id] = {
                    game: t,
                    user: n,
                    item: e,
                    impressionGroupID: i,
                    offerCount: a,
                    impressionID: Object(o.b)(),
                    index: s + 1,
                    offerType: "fuel"
                }
            }), r
        }, t.b = function(e, t, n) {
            var i = Object(o.b)(),
                a = e.length,
                r = {};
            return e.forEach(function(e, s) {
                r[e.id] = {
                    impressionGroupID: i,
                    index: s,
                    offerCount: a,
                    game: t,
                    user: n,
                    item: e,
                    impressionID: Object(o.b)(),
                    offerType: "bt"
                }
            }), r
        };
        var a, r = n("6sO2"),
            o = n("HM6l"),
            s = n("vH/s"),
            l = /tag=(.*?)(&|$)/;
        ! function(e) {
            e.Hover = "hover", e.ViewDetails = "view_asin_detail", e.ClickToAmazon = "click_to_amazon"
        }(a || (a = {}))
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

        function i() {
            return r.k.get(l, []).filter(function(e) {
                return o.a.has(e)
            })
        }
        t.c = function(e, t) {
            var n = this;
            return function(o) {
                return a.__awaiter(n, void 0, void 0, function() {
                    var n, d;
                    return a.__generator(this, function(a) {
                        return n = new Set(i()), t ? n.add(e) : n.delete(e), d = Array.from(n), r.k.set(l, d), o(Object(s.b)(d)), [2]
                    })
                })
            }
        }, t.a = function() {
            var e = this;
            return function(t) {
                return a.__awaiter(e, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        return r.k.set(l, []), t(Object(s.b)([])), [2]
                    })
                })
            }
        }, t.b = i;
        var a = n("TToO"),
            r = n("6sO2"),
            o = n("D9fv"),
            s = n("V9YC"),
            l = "languageDirectoryFilters"
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
                                    s = r.medium,
                                    d = r.content_index;
                                l.n.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
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
                return Object(s.f)(n)
            }
        }
        var a = n("TToO"),
            r = n("OAwv"),
            o = n("U7vG"),
            s = n("F8kA"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e) var n = setInterval(function() {
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
            }, 500);
            else i.i.warn("[onPopupClose] Attempted to observe a window that failed to open.")
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
    mmuw: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.browse.sortBy
        }, t.b = function(e) {
            return e.browse.browseType
        }, t.c = function(e) {
            return e.browse.lastBrowsePath
        };
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("r4vp"),
            o = n("Y6wo"),
            s = n("UAN1"),
            l = n("dzKs");
        a.n.store.registerReducer("browse", function(e, t) {
            switch (void 0 === e && (e = function() {
                var e = Object(o.a)();
                return i.__assign({
                    browseType: l.a.GamesAndCommunities,
                    lastBrowsePath: "/directory",
                    sortBy: r.a.Popularity
                }, e)
            }()), t.type) {
                case s.a:
                    return i.__assign({}, e, {
                        browseType: t.browseType
                    });
                case s.b:
                    return i.__assign({}, e, {
                        lastBrowsePath: t.lastBrowsePath
                    });
                case s.c:
                    return i.__assign({}, e, {
                        sortBy: t.sortBy
                    });
                default:
                    return e
            }
        })
    },
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
                    return e
            }
        }, t.a = function(e) {
            switch (e) {
                case r.b:
                    return a.PageviewContent.PopularVideos;
                case r.a:
                    return a.PageviewContent.RecentVideos;
                default:
                    return e
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
                var r = +e.info.price.replace("$", "") - +t.info.price.replace("$", "");
                return 0 !== r ? r : e.info.title.localeCompare(t.info.title)
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
    qkCi: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention", e[e.Ban = 3] = "Ban", e[e.Timeout = 4] = "Timeout", e[e.AutoModRejectedPrompt = 5] = "AutoModRejectedPrompt", e[e.AutoModMessageRejected = 6] = "AutoModMessageRejected", e[e.AutoModMessageAllowed = 7] = "AutoModMessageAllowed", e[e.AutoModMessageDenied = 8] = "AutoModMessageDenied", e[e.Connected = 9] = "Connected", e[e.Disconnected = 10] = "Disconnected", e[e.Reconnect = 11] = "Reconnect", e[e.Hosting = 12] = "Hosting", e[e.Unhost = 13] = "Unhost", e[e.Subscription = 14] = "Subscription", e[e.Resubscription = 15] = "Resubscription", e[e.SubGift = 16] = "SubGift", e[e.Clear = 17] = "Clear", e[e.SubscriberOnlyMode = 18] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 19] = "FollowerOnlyMode", e[e.SlowMode = 20] = "SlowMode", e[e.EmoteOnlyMode = 21] = "EmoteOnlyMode", e[e.RoomMods = 22] = "RoomMods", e[e.RoomState = 23] = "RoomState", e[e.Raid = 24] = "Raid", e[e.Unraid = 25] = "Unraid", e[e.Ritual = 26] = "Ritual", e[e.Notice = 27] = "Notice", e[e.Info = 28] = "Info", e[e.BadgesUpdated = 29] = "BadgesUpdated", e[e.Purchase = 30] = "Purchase", e[e.BitsCharity = 31] = "BitsCharity", e[e.CrateGift = 32] = "CrateGift"
        }(i || (i = {}))
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
                end: 974
            }
        };
        n.loc.source = {
            body: "query GamePage_Game($name: String! $type: DirectoryType! $limit: Int $languages: [String!] $cursor: Cursor $filters: StreamMetadataFilterInput) {\ndirectory(name: $name type: $type) {\nid\ndisplayName\n... on Community {\nid\nstreams(first: $limit after: $cursor languages: $languages) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n... on Game {\nid\nstreams(first: $limit after: $cursor languages: $languages filters: $filters) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\nstreamMetadata {\nhearthstone {\nbroadcasterHeroClass\n}\noverwatch {\nbroadcasterCharacter\n}\nleagueOfLegends {\nchampionID\nsummonerDivision\nsummonerID\nsummonerName\nsummonerRank\n}\n}\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    r4vp: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Popularity = "popularity", e.Relevancy = "relevancy"
        }(i || (i = {}))
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
    sikP: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(f.a)(y, e)
        }
        var a = n("TToO"),
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("rCmJ"),
            l = n("Odds"),
            d = (n("XITx"), {
                TITLE: "clips-modal-title",
                MAIN_BODY: "clips-modal-main-body",
                SUCCESS_BODY: "clips-modal-success-body",
                ERROR_BODY: "clips-modal-error-body",
                SUBMIT_BUTTON: "clips-modal-submit-button",
                CANCEL_BUTTON: "clips-modal-cancel-button"
            }),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSuccess = function() {
                        return t.props.successContent ? r.createElement(l._21, {
                            "data-test-selector": d.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: l.m.Alt,
                            fullWidth: !0
                        }, r.createElement(l._25, {
                            type: l._30.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? r.createElement(l._21, {
                            "data-test-selector": d.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: l.m.Alt,
                            fullWidth: !0
                        }, r.createElement(l._25, {
                            type: l._30.Strong,
                            color: l.I.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? r.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(l._21, {
                        padding: 2,
                        background: l.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), r.createElement(l.Z, {
                        display: l.L.Flex,
                        justifyContent: l.Y.Center
                    }, r.createElement(l.Z, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(l.u, {
                        "data-test-selector": d.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(o.d)("Close", "ClipsModal")))))) : r.createElement(s.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(l._21, {
                        padding: 2,
                        background: l.m.Base,
                        className: "clip-modal"
                    }, r.createElement(l._21, {
                        "data-test-selector": d.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), r.createElement(l._21, {
                        "data-test-selector": d.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), r.createElement(l.Z, {
                        display: l.L.Flex,
                        justifyContent: l.Y.Center
                    }, r.createElement(l.Z, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(l.u, {
                        "data-test-selector": d.CANCEL_BUTTON,
                        type: l.z.Text,
                        onClick: this.props.onClose
                    }, Object(o.d)("Cancel", "ClipsModal"))), r.createElement(l.Z, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(l.u, {
                        "data-test-selector": d.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : l.z.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && r.createElement(l._1, {
                        delay: 0
                    })))))
                }, t
            }(r.Component),
            u = n("1OO3"),
            m = n("CSlQ"),
            p = 86400,
            h = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            g = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderTitle = function() {
                        return t.props.isTemporary ? r.createElement(l._25, {
                            type: l._30.H5,
                            ellipsis: !0
                        }, Object(o.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(l._25, {
                            type: l._30.H5,
                            ellipsis: !0
                        }, Object(o.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? r.createElement(l._25, null, Object(o.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.clip.curator.displayName
                        }, "ClipsModalBanUser")) : r.createElement(l._25, null, Object(o.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.clip.curator.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(o.d)("Timeout User", "ClipsModalBanUser") : Object(o.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(o.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(o.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(o.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                    }, t.banUser = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e = this.props.clip.curator.login, t = this.props.isTemporary ? this.props.onBanUser(e, p) : this.props.onBanUser(e), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, t];
                                    case 2:
                                        return n.sent(), this.setState({
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
                    }, t.state = h, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(c, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: l.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            v = Object(m.d)("ClipsModalBanUser")(Object(u.a)(function(e) {
                return {
                    channelID: e.clip.broadcaster.id
                }
            })(g)),
            f = n("7vx8"),
            y = n("wnjK"),
            k = (n("lTii"), this),
            b = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            _ = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onDeleteClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.deleteClip(this.props.clip)];
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
                    }, t.state = b, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = [r.createElement(l._25, {
                            key: "title",
                            type: l._30.H4
                        }, Object(o.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(l.Z, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, r.createElement(l._25, {
                            type: l._30.P,
                            color: l.I.Alt2
                        }, Object(o.d)("This clip will be permanently deleted.", "ClipsModalDelete")))],
                        t = r.createElement(l._21, {
                            display: l.L.Flex,
                            flexWrap: l.O.NoWrap
                        }, r.createElement(l.Z, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(l.j, {
                            ratio: l.k.Aspect16x9
                        }, r.createElement("img", {
                            src: this.props.clip.thumbnailURL
                        }))), r.createElement(l.Z, null, r.createElement(l._25, {
                            type: l._30.H5
                        }, this.props.clip.title), r.createElement(l._25, {
                            color: l.I.Alt2
                        }, Object(o.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsModalDelete"), " • ", Object(o.d)("Clipped by {curator}", {
                            curator: this.props.clip.curator.login
                        }, "ClipsModalDelete")), r.createElement(l._25, {
                            color: l.I.Alt2
                        }, Object(o.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsModalDelete"))));
                    return r.createElement(c, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(o.d)("Delete", "ClipsModalDelete"),
                        buttonType: l.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(o.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            S = i({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return a.__awaiter(k, void 0, void 0, function() {
                                var n;
                                return a.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: [t.slug]
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return i.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                        case 2:
                                            throw n = i.sent(), o.i.error(n, "Failed to delete clip"), n;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(_),
            C = n("3zLD"),
            E = n("wqRA"),
            N = this,
            w = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            O = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.deleteAll = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
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
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(o.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                    }, t.state = w, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = r.createElement(l._25, {
                        type: l._30.P
                    }, Object(o.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return r.createElement(c, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: r.createElement(l._25, {
                            type: l._30.H4
                        }, Object(o.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(o.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: l.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(r.Component),
            D = Object(C.compose)(Object(m.d)("ClipsModalDeleteAll"), i({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return a.__awaiter(N, void 0, void 0, function() {
                                var i, r, s;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 6, , 7]), i = void 0, n ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        videoID: n
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return r = a.sent(), i = r.data, [3, 5];
                                        case 2:
                                            return t ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        broadcastID: t
                                                    }
                                                }
                                            })] : [3, 4];
                                        case 3:
                                            return r = a.sent(), i = r.data, [3, 5];
                                        case 4:
                                            throw new Error("Invalid broadcastID specified for deleteAllClips");
                                        case 5:
                                            return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(i.deleteClips.clips), [3, 7];
                                        case 6:
                                            throw s = a.sent(), o.i.error(s, "Failed to delete clips from VOD"), s;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            }), Object(f.a)(E, {
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
                            slug: e.clip.slug
                        }
                    }
                }
            }))(O),
            F = this,
            T = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            L = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(o.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, t.renderError = function() {
                        return t.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                    }, t.onDeleteClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
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
                    }, t.state = T, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(l._25, {
                            type: l._30.H4
                        }, Object(o.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = r.createElement(l._25, {
                            type: l._30.P
                        }, Object(o.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return r.createElement(c, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(o.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: l.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(r.Component),
            I = i({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return a.__awaiter(F, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: e.ownProps.clips.map(function(e) {
                                                            return e.slug
                                                        })
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                        case 2:
                                            throw t = n.sent(), o.i.error(t, "Failed to delete clips"), t;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(L);
        n.d(t, "a", function() {
            return c
        }), n.d(t, "b", function() {
            return v
        }), n.d(t, "d", function() {
            return S
        }), n.d(t, "e", function() {
            return D
        }), n.d(t, "c", function() {
            return I
        })
    },
    tmqW: function(e, t) {},
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
            m = (i = {}, i[r.a.JPEG] = "JPG", i[r.a.PNG] = "PNG", i[r.a.GIF] = "GIF", i),
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
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
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
        a.loc.source = {
            body: '#import "twilight/features/fuel/models/product-info.gql"\n#import "twilight/features/fuel/models/in-game-content.gql"\nfragment fuelProduct on GameProduct {\nid\nacquisition {\nid\ndescription\nisExternal\n}\ndeveloper\nesrbRating {\nid\ndetails\niconURL\n}\nfeatureDetails\ngenres\ninGameContent {\n...inGameContent\n}\ninfo {\n...productInfo\n}\nlaunchPlatform {\nid\ndescription\nisExternal\n}\nsupportedPlatforms {\nid\nname\niconURL\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("Bxh2").definitions)), a.definitions = a.definitions.concat(i(n("LSBw").definitions)), e.exports = a
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
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
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
        a.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product-full.gql"\n#import "twilight/features/fuel/models/fuel-game.gql"\nquery DirectoryGameDetails($name: String!) {\ngame(name: $name) {\nproduct {\n...fuelProductFull\n}\n...fuelGame\n}\nrequestInfo {\ncountryCode\n}\ncurrentUser {\nid\nhasPrime\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("IWzU").definitions)), a.definitions = a.definitions.concat(i(n("+lUI").definitions)), e.exports = a
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
//# sourceMappingURL=pages.directory-game-104213706fe31b67f9acd69c3e874865.js.map