webpackJsonp([102], {
    "+GT7": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("F8kA"),
            o = n("6sO2"),
            s = n("iOr9"),
            l = n("vKFS"),
            c = n("IOwa"),
            u = n("2o2f"),
            d = n("81qH"),
            p = n("RH2O"),
            m = n("2KeS"),
            h = n("PPNL"),
            g = n("HW6M"),
            f = n("YUUt"),
            b = n.n(f),
            v = n("/SNv"),
            y = n.n(v),
            _ = n("Vr3l"),
            k = n.n(_),
            S = n("nyge"),
            T = n("LgcN"),
            w = function(e) {
                try {
                    return decodeURIComponent(e)
                } catch (e) {
                    return null
                }
            },
            P = n("Odds"),
            E = (n("AHWf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1,
                        game: ""
                    }, t.logger = o.o.logger.withCategory("metadata-icon"), t.didUnmount = !1, t.loadData = function() {
                        if (!t.state.isLoading && !t.state.isError && t.props.streamMetadata && !t.state.content) {
                            var e = w(t.props.match.params.encodedCommunityName);
                            if (e) {
                                var n = e.toLowerCase(),
                                    r = t.props.streamMetadata.counterStrikeGlobalOffensive && t.props.streamMetadata.counterStrikeGlobalOffensive.skill,
                                    i = t.props.streamMetadata.hearthstone && t.props.streamMetadata.hearthstone.broadcasterHeroClass,
                                    a = t.props.streamMetadata.leagueOfLegends && t.props.streamMetadata.leagueOfLegends.championID,
                                    o = t.props.streamMetadata.overwatch && t.props.streamMetadata.overwatch.broadcasterCharacter;
                                r && n === S.a.CounterStrike ? (t.setState({
                                    game: n,
                                    gameSprite: b.a,
                                    item: String(r),
                                    isLoading: !0
                                }), t.getCounterStrikeData(r)) : i && n === S.a.Hearthstone ? (t.setState({
                                    game: n,
                                    gameSprite: y.a,
                                    item: i,
                                    isLoading: !0
                                }), t.getHearthstoneData()) : a && n === S.a.LeagueOfLegends ? (t.setState({
                                    game: n,
                                    item: String(a)
                                }), t.getLeagueData()) : o && n === S.a.Overwatch && (t.setState({
                                    game: n,
                                    gameSprite: k.a,
                                    item: o,
                                    isLoading: !0
                                }), t.getOverwatchData())
                            }
                        }
                    }, t.renderIcon = function(e, n, r, a, o, s) {
                        if (!r) return null;
                        var l = g("metadata-icon", {
                                "metadata-icon--csgo-skill": t.state.game === S.a.CounterStrike
                            }),
                            c = t.state.game === S.a.CounterStrike ? 50 : 30;
                        return i.createElement(P._8, {
                            display: P.R.Flex,
                            flexDirection: P.T.Column,
                            alignItems: P.c.Center,
                            justifyContent: P._7.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(P._52, {
                            direction: P._54.Left,
                            label: e
                        }, i.createElement(P._8, {
                            className: l
                        }, i.createElement("div", {
                            style: {
                                backgroundImage: "url(" + n + ")",
                                backgroundPositionX: o ? -1 * o : 0,
                                backgroundPositionY: s ? -1 * s : 0,
                                width: r ? r + "px" : "3rem",
                                height: r ? a + "px" : "3rem",
                                transform: "scale(" + (r > 0 ? c / r : 1) + ")",
                                transformOrigin: "0 0"
                            }
                        }))))
                    }, t.getCounterStrikeData = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, Object(T.a)()];
                                    case 1:
                                        return t = r.sent(), this.didUnmount ? [2] : ((n = {})[e] = t[0]["Skill Group"][e - 1], this.setState({
                                            content: n
                                        }), [3, 3]);
                                    case 2:
                                        return i = r.sent(), this.logger.error(i, "Failed to load Counter-Strike skill group data"), this.setState({
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
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, Object(T.b)()];
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
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, a, o, s, l, c, u, d, p, m;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, Object(T.d)()];
                                    case 1:
                                        if (e = r.sent(), this.didUnmount) return [2];
                                        for (t = !1, n = void 0, i = 0, a = e; i < a.length && (n = a[i], !t); i++)
                                            for (o in n)
                                                if (n.hasOwnProperty(o))
                                                    for (s = n[o], l = 0, c = s; l < c.length; l++)
                                                        if ((u = c[l]).character === this.state.item) {
                                                            (m = {})[u.character] = u, d = m, this.setState({
                                                                content: d,
                                                                isLoading: !1
                                                            }), t = !0;
                                                            break
                                                        }
                                        return [3, 3];
                                    case 2:
                                        return p = r.sent(), this.logger.error(p, "Failed to load Overwatch character data"), this.setState({
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
                    if (this.state.game === S.a.LeagueOfLegends) {
                        if (!this.props.leagueOfLegends.championsMap) return null;
                        var e = this.props.leagueOfLegends.championsMap[this.state.item],
                            t = "https://ddragon.leagueoflegends.com/cdn/" + this.props.leagueOfLegends.version + "/img/sprite/" + e.image.sprite;
                        return this.renderIcon(e.name, t, e.image.w, e.image.h, e.image.x, e.image.y)
                    }
                    var n = this.state.content && this.state.content[this.state.item];
                    return n ? this.renderIcon(n.display_name, this.state.gameSprite || "", n.image_width, n.image_height, n.sprite_x_offset, n.sprite_y_offset) : null
                }, t
            }(i.Component)),
            O = Object(a.f)(E);
        var C = Object(p.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap,
                        isError: e.directory.leagueOfLegends.isError,
                        isLoading: e.directory.leagueOfLegends.isLoading,
                        version: e.directory.leagueOfLegends.version
                    }
                }
            }, function(e) {
                return Object(m.b)({
                    onLoadLeagueOfLegendsChampions: h.a
                }, e)
            })(O),
            R = (n("LEV+"), "live-channel-card-link-selector"),
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderVariation = function() {
                        return i.createElement("div", r.__assign({
                            className: "live-channel-card"
                        }, Object(P._63)(t.props)), i.createElement(l.a, {
                            context: l.b.MixedGameAndChannelList,
                            title: t.props.title,
                            linkTo: t.props.linkTo,
                            onVideoTitleClick: t.props.onTitleClick,
                            thumbnailImageProps: {
                                src: t.props.imageSrc,
                                alt: t.props.imageAlt
                            },
                            onThumbnailClick: t.props.onThumbnailClick,
                            channelLogin: t.props.channelName,
                            channelLoginLinkTo: t.props.channelNameLinkTo,
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
                            streamType: t.props.streamType || u.a.Live,
                            currentViewerCount: t.props.viewerCount,
                            enableLivePreview: t.props.enableLivePreview,
                            hostedByChannelLogin: t.props.hostedByChannelLogin
                        }))
                    }, t.renderFallback = function() {
                        var e = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                            viewerCount: t.props.viewerCount,
                            channel: i.createElement(a.a, {
                                to: t.props.channelNameLinkTo,
                                className: "live-channel-card__videos",
                                "data-a-target": "live-channel-card-channel-name-link"
                            }, t.props.channelName)
                        }, "Live Channel Card");
                        return i.createElement("div", r.__assign({
                            className: "live-channel-card"
                        }, Object(P._63)(t.props)), i.createElement(P.C, {
                            key: t.props.title
                        }, i.createElement(P._8, {
                            fullWidth: !0
                        }, i.createElement(P.k, {
                            overflow: !0
                        }, i.createElement("div", null, i.createElement(a.a, {
                            to: t.props.linkTo,
                            title: t.props.hideTooltip ? void 0 : t.props.title,
                            "data-a-target": "live-channel-card-thumbnail-link",
                            "data-test-selector": R,
                            onClick: t.props.onThumbnailClick
                        }, t.props.children ? t.props.children : i.createElement(P.E, {
                            alt: t.props.imageAlt,
                            src: t.props.imageSrc,
                            aspect: P.l.Aspect16x9
                        }), t.renderContentType()), t.renderGameBoxArt()))), i.createElement(P.D, null, i.createElement(P._8, {
                            display: P.R.Flex,
                            flexWrap: P.U.NoWrap
                        }, i.createElement(P._8, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, i.createElement(P.O, {
                            to: t.props.linkTo,
                            onClick: t.props.onTitleClick,
                            className: "live-channel-card__channel",
                            "data-a-target": "live-channel-card-title-link"
                        }, i.createElement(P._2, {
                            margin: {
                                top: .5
                            }
                        }, i.createElement(P.Q, {
                            type: P._49.H3,
                            fontSize: P.V.Size5,
                            lineHeight: P._9.Body,
                            ellipsis: !0,
                            className: "live-channel-card__title"
                        }, t.props.title))), i.createElement(P._8, {
                            className: "live-channel-card__meta",
                            display: P.R.Flex,
                            flexWrap: P.U.NoWrap
                        }, i.createElement(P.Q, {
                            type: P._49.Span,
                            ellipsis: !0
                        }, e))), i.createElement(P._8, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, t.renderStreamMetadata())))))
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = {
                        assignments: {
                            fallback: this.renderFallback,
                            variation: this.renderVariation
                        },
                        loader: function() {
                            return i.createElement(d.VideoPreviewCardPlaceholder, null)
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return i.createElement(s.a, r.__assign({}, e))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? i.createElement(a.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, i.createElement(P._35, {
                        className: "live-channel-card__boxart",
                        position: P._15.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, i.createElement(P._52, {
                        display: P.R.Block,
                        direction: P._54.Bottom,
                        label: t
                    }, i.createElement(P.E, {
                        src: n,
                        alt: t,
                        aspect: P.l.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return "string" == typeof this.props.streamType && this.props.streamType ? i.createElement(P._8, {
                        position: P._15.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, i.createElement(c.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? i.createElement(C, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(i.Component),
            I = N;
        n.d(t, !1, function() {
            return R
        }), n.d(t, !1, function() {
            return N
        }), n.d(t, "a", function() {
            return I
        })
    },
    "+YN9": function(e, t) {},
    "+p4h": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeBalloon_User"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "subscriptionProducts"
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
                                            value: "price"
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
                                            value: "emoteSetID"
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
                                            value: "emotes"
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
                                                    value: "promotion"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "newPrice"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "oldPrice"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "discountType"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "discountValue"
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
                                            value: "giftPromotion"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "newPrice"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "oldPrice"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "discountValue"
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
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionBenefit"
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
                                                    value: "purchasedWithPrime"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "tier"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "platform"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "renewsAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "paidUpgrade"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
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
                                                            value: "startsAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "gift"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isGift"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "gifter"
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
                                    value: "login"
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
                end: 554
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeBalloon_User($login: String!) {\nuser(login: $login) {\nid\nlogin\ndisplayName\nsubscriptionProducts {\nid\nprice\nurl\nemoteSetID\ndisplayName\nname\nemotes {\nid\n}\nself {\npromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\ngiftPromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nrenewsAt\nendsAt\npaidUpgrade {\nprice\nstartsAt\n}\ngift {\nisGift\ngifter {\nid\ndisplayName\n}\n}\n}\n}\n}\ncurrentUser {\nid\nlogin\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "/3Lr": function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return s
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "a", function() {
            return c
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "e", function() {
            return i
        });
        var r, i, a, o, s = {
                BitsLeaderboardEvents: "leaderboard-events-v1",
                CampaignGlobalEvents: "campaign-events",
                CampaignUserEvents: "user-campaign-events",
                ChannelBitsEvents: "channel-bits-events-v1",
                ChannelBitsPinEvents: "channel-bit-events-public",
                ChannelEventUpdates: "channel-event-updates",
                ChannelSubscribeEvents: "channel-subscribe-events-v1",
                BroadcastSettingsUpdate: "broadcast-settings-update",
                ChatRoom: "chatrooms-room-v1",
                ChatRoomsChannel: "chatrooms-channel-v1",
                ChatRoomsUser: "chatrooms-user-v1",
                Friendship: "friendship",
                ImageUpload: "user-image-update",
                ModerationActionsByUserAndChannel: "chat_moderator_actions",
                OnsiteNotifications: "onsite-notifications",
                PayoutOnboardingEvents: "payout-onboarding-events",
                Presence: "presence",
                Raid: "raid",
                StreamChange: "stream-change-v1",
                StreamChatRoom: "stream-chat-room-v1",
                UploadService: "upload",
                UserBitsUpdates: "user-bits-updates-v1",
                UserCommerceEvents: "user-commerce-events",
                UserCrateEvents: "user-crate-events-v1",
                UserSubscribeEvents: "user-subscribe-events-v1",
                VideoPlayback: "video-playback",
                VideoPlaybackById: "video-playback-by-id",
                VideoThumbnailProcessing: "video-thumbnail-processing",
                Whispers: "whispers"
            },
            l = {
                BitsPinEvent: "bits-pin-event",
                BitsLeaderboardEvent: "bits-leaderboard-event",
                ChannelStreamDown: "stream-down",
                ChannelStreamUp: "stream-up",
                BroadcastSettingsUpdate: "broadcast_settings_update",
                ChatNotification: "chat-notification",
                ChatRoomCreated: "created_room",
                ChatRoomDeleted: "deleted_room",
                ChatRoomUpdated: "updated_room",
                ChatRoomsUserModAction: "user_moderation_action",
                ChatRoomMessageCreated: "created_room_message",
                ChatRoomMessageEdited: "edited_room_message",
                ChatRoomMessageDeleted: "deleted_room_message",
                ChatRoomsRoomViewUpdated: "updated_room_view",
                ImageUploadSuccess: "imageuploadsuccess",
                LiveEvent: "live-event",
                ModerationAction: "moderation_action",
                OnsiteNotificationCreate: "create-notification",
                OnsiteNotificationDelete: "delete-notification",
                OnsiteNotificationsRead: "read-notifications",
                OnsiteNotificationSummaryUpdate: "update-summary",
                OnsiteNotificationUpdate: "update-notification",
                PayoutOnboardingEvent: "payout-onboarding-event",
                Presence: "presence",
                PresenceSettings: "settings",
                PurgeMessageRequest: "purge_messages_request",
                RaidCancel: "raid_cancel",
                RaidUpdate: "raid_update",
                StreamChatRoomChatRichEmbed: "chat_rich_embed",
                StreamDown: "stream_down",
                StreamUp: "stream_up",
                UpdatedChannelChatProperty: "updated_channel_chat_property",
                UploadService: "upload",
                UserBitsBalanceUpdate: "balance_update",
                UserBitsBadgeUpdate: "badge_update",
                UserCampaignProgressEvent: "progress",
                UserCampaignRewardEvent: "reward",
                UserCrateEvent: "crate-event",
                UserGiftEvent: "gift-event",
                UserMention: "user_mention",
                VideoThumbnailProcessingComplete: "processing_complete",
                VideoThumbnailProcessingError: "processing_error",
                ViewCount: "viewcount",
                Vodcast: "watchparty-vod",
                WhisperAllThreadsUpdate: "threads",
                WhisperDeleted: "whisper_deleted",
                WhisperEdited: "whisper_edited",
                WhisperReceived: "whisper_received",
                WhisperSent: "whisper_sent",
                WhisperThreadUpdate: "thread"
            },
            c = {
                Accepted: "accepted",
                Requested: "requested",
                Removed: "removed",
                SelfAccepted: "self_accepted",
                SelfRemoved: "self_removed",
                SelfRequested: "self_requested"
            };
        ! function(e) {
            e.AddBlockedTerm = "add_blocked_term", e.AddPermittedTerm = "add_permitted_term", e.AutoModEnabled = "automod_enabled", e.AutoModRejected = "automod_rejected", e.Ban = "ban", e.Clear = "clear", e.DeleteBlockedTerm = "delete_blocked_term", e.DeletePermittedTerm = "delete_permitted_term", e.EmoteOnly = "emoteonly", e.EmoteOnlyOff = "emoteonlyoff", e.FollowersOnly = "followers", e.FollowersOnlyOff = "followersoff", e.Host = "host", e.Mod = "mod", e.ModifiedAutoModProperties = "modified_automod_properties", e.R9kBeta = "r9kbeta", e.R9kBetaOff = "r9kbetaoff", e.Raid = "raid", e.Slow = "slow", e.SlowOff = "slowoff", e.SubsBeta = "subsbeta", e.SubscribersOnly = "subscribers", e.SubscribersOnlyOff = "subscribersoff", e.Timeout = "timeout", e.Unban = "unban", e.Unhost = "unhost", e.Unmod = "unmod", e.Unraid = "unraid", e.Untimeout = "untimeout"
        }(r || (r = {})),
        function(e) {
            e.AutoModMessageRejected = "automod_message_rejected", e.AutoModMessageApproved = "automod_message_approved", e.AutoModMessageDenied = "automod_message_denied"
        }(i || (i = {})),
        function(e) {
            e.Archive = "archive", e.Highlight = "highlight", e.Upload = "upload", e.Premiere = "premiere", e.Rerun = "rerun", e.WatchPartyPremiere = "watch_party_premiere", e.WatchPartyRerun = "watch_party_rerun"
        }(a || (a = {})),
        function(e) {
            e.Private = "private", e.Public = "public"
        }(o || (o = {}))
    },
    "/SNv": function(e, t, n) {
        e.exports = n.p + "assets/hearthstone-classes-b3b59eedbe78268cf62299a41ec09be1.png"
    },
    "/gww": function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            i = n("2KeS"),
            a = n("V5M+"),
            o = n("TToO"),
            s = n("GiK3"),
            l = n("3zLD"),
            c = n("6sO2"),
            u = n("+8VM"),
            d = n("7vx8"),
            p = n("oIkB"),
            m = n("vH/s"),
            h = n("UQNI"),
            g = n("Odds"),
            f = n("nC3l"),
            b = (n("sJt0"), "error-message"),
            v = function(e) {
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
                            type: g._49.H4,
                            "data-test-selector": b
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
                                        return this.props.banUserFromCommunity ? (e = o.__assign({}, Object(p.a)({
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
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (c.o.tracking.track(m.SpadeEventType.CommunityModeration, {
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
                    }, s.createElement(g._35, {
                        background: g.n.Base,
                        className: "stream-ban-modal"
                    }, s.createElement(g._8, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(g._8, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(g.Q, {
                        type: g._49.H4
                    }, Object(c.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), s.createElement(g._35, {
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
                    }))), s.createElement(g._35, {
                        borderTop: !0
                    }, s.createElement(g._8, {
                        padding: {
                            top: 2
                        },
                        textAlign: g._45.Center
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
                    }, Object(c.d)("Ban", "StreamBanModal")))))), s.createElement(u.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(s.Component),
            y = Object(l.compose)(Object(d.a)(f, {
                name: "banUserFromCommunity"
            }))(v);
        var _ = Object(r.b)(null, function(e) {
            return Object(i.b)({
                onCloseModal: a.c
            }, e)
        })(y);
        n.d(t, "a", function() {
            return _
        })
    },
    "0w5y": function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            i = n("2KeS"),
            a = n("V5M+"),
            o = n("TToO"),
            s = n("GiK3"),
            l = n("3zLD"),
            c = n("6sO2"),
            u = n("+8VM"),
            d = n("7vx8"),
            p = n("oIkB"),
            m = n("vH/s"),
            h = n("UQNI"),
            g = n("Odds"),
            f = (n("npyu"), n("plcU")),
            b = "error-message",
            v = function(e) {
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
                            type: g._49.H4,
                            "data-test-selector": b
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
                                        return this.props.timeoutUserFromCommunity ? (e = o.__assign({}, Object(p.a)({
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
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (c.o.tracking.track(m.SpadeEventType.CommunityModeration, {
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
                    }, s.createElement(g._35, {
                        background: g.n.Base,
                        className: "stream-timeout-modal"
                    }, s.createElement(g._8, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(g._8, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(g.Q, {
                        type: g._49.H4
                    }, Object(c.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), s.createElement(g._35, {
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
                    }, Object(c.d)("Duration", "StreamTimeoutModal")), s.createElement(g._30, {
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
                    }, Object(c.d)("24 hours", "StreamTimeoutModal")))), s.createElement(g._35, {
                        borderTop: !0
                    }, s.createElement(g._8, {
                        padding: {
                            top: 2
                        },
                        textAlign: g._45.Center
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
                    }, Object(c.d)("Timeout", "StreamTimeoutModal")))))), s.createElement(u.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(s.Component),
            y = Object(l.compose)(Object(d.a)(f, {
                name: "timeoutUserFromCommunity"
            }))(v);
        var _ = Object(r.b)(null, function(e) {
            return Object(i.b)({
                onCloseModal: a.c
            }, e)
        })(y);
        n.d(t, "a", function() {
            return _
        })
    },
    "1EXI": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_UserCommunities"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userId"
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
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
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
                                    value: "directories"
                                },
                                arguments: [],
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
                                                    value: "displayName"
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
                end: 140
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_UserCommunities($userId: ID!) {\nuser(id: $userId) {\nid\ndirectories {\nnodes {\nid\nname\ndisplayName\ndirectoryType\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2655: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_ClaimedPrimeOffer"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 138
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_ClaimedPrimeOffer($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\nself {\nhasEntitlement\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "2BvQ": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Core_Services_Spade_Video"
                },
                variableDefinitions: [{
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
                            value: "video"
                        },
                        arguments: [{
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
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "broadcastType"
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
                end: 81
            }
        };
        n.loc.source = {
            body: "query Core_Services_Spade_Video($id: ID!) {\nvideo(id: $id) {\nid\nbroadcastType\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "2o2f": function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.Live = "live", e.WatchParty = "watch_party", e.Premiere = "premiere", e.Rerun = "rerun"
            }(r || (r = {}))
    },
    3: function(e, t) {},
    "37Pp": function(e, t, n) {
        "use strict";
        var r = n("GiK3"),
            i = n("6sO2"),
            a = n("FDYX"),
            o = n("Odds"),
            s = (n("M5Tl"), function(e) {
                var t = e.subscriptionProduct;
                if (void 0 === t) return r.createElement("div", null);
                var n = e.isOneTime ? Object(i.d)("{price} / One-time purchase", {
                    price: t.price
                }, "SubDiscountPriceLabel") : Object(i.d)("{price} / Month", {
                    price: t.price
                }, "SubDiscountPriceLabel");
                if (e.isGift ? Object(a.c)([e.subscriptionProduct]) : Object(a.d)([e.subscriptionProduct])) {
                    var s = void 0;
                    return s = e.isGift ? Object(i.d)("{price} (Save {percent})", {
                        price: Object(a.a)(e.subscriptionProduct, e.isGift),
                        percent: Object(i.e)(Object(a.b)(e.subscriptionProduct, e.isGift) / 100, "percent")
                    }, "SubDiscountPriceLabel") : Object(i.d)("{price} for the first month (Save {percent})", {
                        price: Object(a.a)(e.subscriptionProduct, e.isGift),
                        percent: Object(i.e)(Object(a.b)(e.subscriptionProduct, e.isGift) / 100, "percent")
                    }, "SubDiscountPriceLabel"), r.createElement(o._8, {
                        "data-test-selector": "sub-discount-price-label__discounted"
                    }, r.createElement(o.Q, {
                        color: o.K.Alt2,
                        decoration: o._47.Strikethrough
                    }, n), r.createElement(o.Q, {
                        className: "sub-discount-price-label__discount-price",
                        type: o._49.H5,
                        bold: !0
                    }, s))
                }
                return r.createElement(o._8, {
                    "data-test-selector": "sub-discount-price-label__non-discounted"
                }, r.createElement(o.Q, null, n))
            });
        n.d(t, !1, function() {
            return "sub-discount-price-label__discounted"
        }), n.d(t, !1, function() {
            return "sub-discount-price-label__non-discounted"
        }), n.d(t, "a", function() {
            return s
        })
    },
    "3QSP": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Core_Services_Spade_SubEvent_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelID"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withVideo"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
                        }
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
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "channelID"
                                }
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
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionBenefit"
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
                                                    value: "tier"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "purchasedWithPrime"
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
                            value: "video"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "videoID"
                                }
                            }
                        }],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "withVideo"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "broadcastType"
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
                end: 266
            }
        };
        n.loc.source = {
            body: "query Core_Services_Spade_SubEvent_User($channelID: ID! $withVideo: Boolean! $videoID: ID) {\nuser(id: $channelID) {\nid\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\ntier\npurchasedWithPrime\n}\n}\n}\nvideo(id: $videoID) @include(if: $withVideo) {\nid\nbroadcastType\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "3iBR": function(e, t, n) {
        "use strict";
        n.d(t, "m", function() {
            return a
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "i", function() {
            return c
        }), n.d(t, "k", function() {
            return u
        }), n.d(t, "j", function() {
            return d
        }), n.d(t, "l", function() {
            return p
        }), n.d(t, "g", function() {
            return m
        }), n.d(t, "h", function() {
            return h
        }), n.d(t, "d", function() {
            return g
        }), n.d(t, "e", function() {
            return f
        }), n.d(t, "f", function() {
            return b
        });
        var r, i = n("I89S"),
            a = {
                ERROR_DISPLAY_TIMEOUT: 5e3,
                GET_BALANCE_RATE_LIMIT: 5e3,
                UNDO_PROMPT_DURATION: 5e3
            },
            o = "https://d3aqoihi2n8ty8.cloudfront.net",
            s = o + "/cheer",
            l = o + "/actions",
            c = 8e5,
            u = 1e4,
            d = 500,
            p = 1e3,
            m = "cheer",
            h = i.a.Purple,
            g = "FIRST_PARTY",
            f = "THIRD_PARTY",
            b = ((r = {})[i.a.Gray] = "#979797", r[i.a.Purple] = "#9c3ee8", r[i.a.Green] = "#1db2a5", r[i.a.Blue] = "#0099fe", r[i.a.Red] = "#f43021", r[i.a.Yellow] = "#f3a71a", r)
    },
    "3yQz": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "c", function() {
            return r
        });
        var r, i = "VIEWS",
            a = "TIME";
        ! function(e) {
            e.Popular = "VIEWS", e.Newest = "TIME"
        }(r || (r = {}))
    },
    "3ydF": function(e, t) {},
    "4MRZ": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_User"
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
                                    value: "subscriptionProducts"
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
                                            value: "emoteSetID"
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
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionBenefit"
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
                                                    value: "purchasedWithPrime"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "tier"
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
                end: 262
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_User($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nsubscriptionProducts {\nid\nemoteSetID\n}\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\n}\n}\n}\ncurrentUser {\nid\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "4NZK": function(e, t) {},
    "4bQk": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = n("+Znq"),
            s = n("7vx8"),
            l = n("oIkB"),
            c = n("2BvQ"),
            u = n("xrVp"),
            d = n("YugT"),
            p = {
                Channel: "channel"
            };
        var m = n("vH/s"),
            h = n("CSlQ"),
            g = n("Odds"),
            f = n("VNvG"),
            b = (n("3ydF"), n("SUA7")),
            v = n("x4k6");
        n.d(t, "b", function() {
            return y
        }), n.d(t, "a", function() {
            return _
        });
        var y;
        ! function(e) {
            e[e.IconOnly = 0] = "IconOnly", e[e.TextOnly = 1] = "TextOnly", e[e.IconAndText = 2] = "IconAndText"
        }(y || (y = {}));
        var _ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    isFollowing: !1,
                    showDropdown: !1,
                    disableNotifications: !0
                }, t.userDataLoaded = function() {
                    return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.user
                }, t.toggleFollowing = function() {
                    var e;
                    t.state.isFollowing ? (t.unfollowUser(), e = m.SpadeEventType.Unfollow) : (t.followUser(), e = m.SpadeEventType.Follow);
                    var n = t.getFollowData();
                    n && function(e, t) {
                        r.__awaiter(this, void 0, void 0, function() {
                            var n, i, o, s, l, p, m, h, g, f;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (n = null, i = null, o = null, s = null, l = null, !t.channelID) return [3, 5];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, a.o.apollo.client.query({
                                            query: d,
                                            variables: {
                                                id: t.channelID
                                            }
                                        })];
                                    case 2:
                                        return s = r.sent(), [3, 4];
                                    case 3:
                                        return m = r.sent(), a.j.error(m, "Failed to make query for channel info in FollowEvent reporting.", {
                                            channelID: t.channelID
                                        }), [3, 4];
                                    case 4:
                                        (o = s && s.data && s.data.user) ? l = o.hosting.stream && o.hosting.stream.game ? o.hosting.stream.game.name : o.stream && o.stream.game && o.stream.game.name: a.j.error(new Error("GraphQL empty response"), "Query for channel info in FollowEvent reporting return no data.", {
                                            channelID: t.channelID
                                        }), r.label = 5;
                                    case 5:
                                        if (!(h = a.n.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                        r.label = 6;
                                    case 6:
                                        return r.trys.push([6, 8, , 9]), [4, a.o.apollo.client.query({
                                            query: c,
                                            variables: {
                                                id: h
                                            }
                                        })];
                                    case 7:
                                        return n = r.sent(), [3, 9];
                                    case 8:
                                        return g = r.sent(), a.j.error(g, "Failed to make query for VOd info in FollowEvent reporting.", {
                                            currentVODID: h
                                        }), [3, 9];
                                    case 9:
                                        (i = n && n.data && n.data.video) ? p = Object(u.a)(i.broadcastType): (p = null, a.j.error(new Error("GraphQL empty response"), "Query for video info in FollowEvent reporting return no data.", {
                                            currentVODID: h
                                        })), r.label = 10;
                                    case 10:
                                        return f = {
                                            channel: t.channelLogin,
                                            channel_id: t.channelID,
                                            channel_game: l,
                                            cta_visible: a.n.getVideoPlayerTrackingData().followCTAVisible,
                                            host_channel: t.hostChannelLogin,
                                            host_channel_id: t.hostChannelID,
                                            game: t.game,
                                            partner: o ? o.isPartner : null,
                                            src: t.src,
                                            vod_id: h,
                                            vod_type: p
                                        }, a.n.track(e, f), [2]
                                }
                            })
                        })
                    }(e, {
                        channelLogin: n.user && n.user.login || "",
                        channelID: n.user && n.user.id || "",
                        hostChannelLogin: t.props.hostChannelLogin,
                        hostChannelID: t.props.hostChannelID,
                        src: p.Channel
                    }), t.setState(function(e) {
                        return {
                            isFollowing: !e.isFollowing,
                            disableNotifications: !1
                        }
                    })
                }, t.followUser = function() {
                    var e = t.getFollowData();
                    if (t.props.followUser && e) {
                        t.setState({
                            showDropdown: !0
                        });
                        var n = r.__assign({}, Object(l.a)({
                            disableNotifications: !1,
                            targetID: e.user && e.user.id || ""
                        }), {
                            optimisticResponse: {
                                followUser: {
                                    __typename: "FollowUserPayload",
                                    follow: {
                                        disableNotifications: !1,
                                        __typename: "Follow"
                                    }
                                }
                            }
                        });
                        t.props.followUser(n).then(function(e) {
                            Object(l.e)(v, {
                                login: t.props.channelLogin
                            }, function(t) {
                                var n = t.user;
                                return n && n.self && (n.self.follower ? n.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications : n.self.follower = {
                                    __typename: "FollowerEdge",
                                    disableNotifications: e.data.followUser.follow.disableNotifications
                                }), t
                            }), t.props.onFollow && t.props.onFollow(t.props.channelLogin)
                        })
                    }
                }, t.unfollowUser = function() {
                    var e = t.getFollowData();
                    if (t.props.unfollowUser && e) {
                        var n = r.__assign({}, Object(l.a)({
                            targetID: e.user && e.user.id || ""
                        }), {
                            optimisticResponse: {
                                unfollowUser: {
                                    __typename: "UnfollowUserPayload",
                                    follow: {
                                        disableNotifications: null,
                                        __typename: "Follow"
                                    }
                                }
                            }
                        });
                        t.props.unfollowUser(n).then(function() {
                            Object(l.e)(v, {
                                login: t.props.channelLogin
                            }, function(e) {
                                var t = e.user;
                                return t && t.self && (t.self.follower ? t.self.follower.disableNotifications = null : t.self.follower = {
                                    __typename: "FollowerEdge",
                                    disableNotifications: null
                                }), e
                            }), t.props.onUnfollow && t.props.onUnfollow(t.props.channelLogin)
                        })
                    }
                }, t.toggleNotificationsEnabled = function() {
                    var e = t.getFollowData();
                    if (t.props.followUser && e) {
                        var n = r.__assign({}, Object(l.a)({
                            disableNotifications: !t.state.disableNotifications,
                            targetID: e.user && e.user.id || ""
                        }), {
                            optimisticResponse: {
                                followUser: {
                                    __typename: "FollowUserPayload",
                                    follow: {
                                        disableNotifications: !t.state.disableNotifications,
                                        __typename: "Follow"
                                    }
                                }
                            }
                        });
                        t.props.followUser(n).then(function(e) {
                            Object(l.e)(v, {
                                login: t.props.channelLogin
                            }, function(t) {
                                var n = t.user;
                                return n && n.self && (n.self.follower ? n.self.follower.disableNotifications = e.data.followUser.follow.disableNotifications : n.self.follower = {
                                    __typename: "FollowerEdge",
                                    disableNotifications: e.data.followUser.follow.disableNotifications
                                }), t
                            })
                        }), t.setState(function(e) {
                            return {
                                disableNotifications: !e.disableNotifications
                            }
                        })
                    }
                }, t.getFollowData = function() {
                    return t.props.followData ? t.props.followData : t.props.data
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.reportInteractive()
            }, t.prototype.componentDidUpdate = function() {
                this.props.channelLogin && !this.userDataLoaded() || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.reportInteractive()
            }, t.prototype.componentWillMount = function() {
                var e = this.props.followData;
                if (e) {
                    var t = e.user;
                    this.setState({
                        isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                        disableNotifications: t && t.self && t.self.follower && t.self.follower.disableNotifications
                    })
                }
            }, t.prototype.componentWillReceiveProps = function(e) {
                if (e.data && !e.data.loading && !e.data.error) {
                    var t = e.data.user;
                    this.setState({
                        isFollowing: t && t.self && t.self.follower && null !== t.self.follower.disableNotifications || !1,
                        disableNotifications: !(t && t.self && t.self.follower && null !== t.self.follower.disableNotifications) || t.self.follower.disableNotifications
                    })
                }
            }, t.prototype.render = function() {
                return this.props.isLoggedIn ? !this.props.showLoadingPlaceholder || this.props.data && !this.props.data.loading ? this.props.currentUserLogin !== this.props.channelLogin && this.props.followUser && this.props.unfollowUser && (this.props.followData || this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.user) ? this.state.isFollowing ? this.props.hideWhenFollowing ? null : this.props.hideDropdownWhenFollowing ? this.renderUnfollowButton() : this.renderUnfollowButtonWithDropdown() : this.renderFollowButton(this.toggleFollowing) : null : this.renderPlaceholder() : this.renderFollowButton(this.props.login)
            }, t.prototype.renderPlaceholder = function() {
                switch (this.props.size) {
                    case g.z.Large:
                        return i.createElement(g._14, {
                            width: 93,
                            height: 36
                        });
                    case g.z.Small:
                        return i.createElement(g._14, {
                            width: 66,
                            height: 24
                        });
                    default:
                        return i.createElement(g._14, {
                            width: 70,
                            height: 30
                        })
                }
            }, t.prototype.renderFollowButton = function(e) {
                var t = this.props.isHostedFollow && this.props.channelName ? Object(a.d)("Follow {username}", {
                    username: this.props.channelName
                }, "FollowButton") : Object(a.d)("Follow", "FollowButton");
                return i.createElement(g.v, r.__assign({
                    ariaLabel: t,
                    blurAfterClick: this.props.blurAfterClick,
                    "data-a-target": "follow-button",
                    "data-test-selector": "follow-button",
                    icon: this.props.followUIType === y.TextOnly ? void 0 : g._25.Heart,
                    onClick: e,
                    size: this.props.size,
                    tabIndex: this.props.tabIndex
                }, Object(g._63)(this.props)), this.props.followUIType === y.IconOnly ? null : t)
            }, t.prototype.renderUnfollowButton = function() {
                var e = Object(a.d)("Unfollow", "FollowButton");
                return i.createElement(g.v, r.__assign({
                    ariaLabel: e,
                    blurAfterClick: this.props.blurAfterClick,
                    "data-a-target": "unfollow-button",
                    "data-test-selector": "unfollow-button",
                    icon: this.props.unfollowUIType === y.TextOnly ? void 0 : g._25.Heart,
                    statusAlertIcon: this.props.unfollowUIType === y.TextOnly ? void 0 : g._25.Unheart,
                    statusAlertText: this.props.unfollowUIType === y.IconOnly ? "" : e,
                    tabIndex: this.props.tabIndex,
                    size: this.props.size,
                    onClick: this.toggleFollowing
                }, Object(g._63)(this.props)), this.props.unfollowUIType === y.IconOnly ? null : Object(a.d)("Followed", "FollowButton"))
            }, t.prototype.renderUnfollowButtonWithDropdown = function() {
                var e = this.props.balloonDirection ? this.props.balloonDirection : g.r.BottomRight,
                    t = this.getFollowData(),
                    n = t && t.user && t.user.displayName || "",
                    r = this.state.disableNotifications ? Object(a.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "FollowButton") : Object(a.d)("You will be notified on this channel's activity, including when they go live.", "FollowButton");
                return i.createElement(g._8, {
                    display: g.R.Flex,
                    className: "follow-btn",
                    "data-test-selector": "unfollow-button__dropdown"
                }, i.createElement(g._8, null, this.renderUnfollowButton()), i.createElement(o.a, {
                    display: g.R.InlineFlex,
                    openByDefault: this.state.showDropdown
                }, i.createElement("button", {
                    tabIndex: this.props.tabIndex,
                    "aria-label": Object(a.d)("Dropdown", "FollowButton"),
                    className: "follow-btn__dropdown-toggle",
                    "data-a-target": "follow-dropdown-toggle"
                }, i.createElement(g._8, {
                    justifyContent: g._7.Center,
                    display: g.R.Flex,
                    alignItems: g.c.Stretch,
                    fullHeight: !0
                }, i.createElement(g._24, {
                    asset: g._25.GlyphArrDown
                }))), i.createElement(g.q, {
                    size: g.s.Small,
                    direction: e,
                    "data-a-target": "follow-notifications-balloon"
                }, i.createElement(g._35, {
                    color: g.K.Base,
                    display: g.R.Flex,
                    flexWrap: g.U.Wrap,
                    padding: 1
                }, i.createElement(g._8, {
                    display: g.R.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(g.Q, {
                    type: g._49.H6
                }, Object(a.d)("You are following {followingName}", {
                    followingName: n
                }, "FollowButton"))), i.createElement(g._8, {
                    display: g.R.Flex,
                    flexWrap: g.U.NoWrap,
                    padding: {
                        bottom: 1
                    }
                }, i.createElement(g._8, {
                    display: g.R.Flex,
                    padding: {
                        right: 2
                    }
                }, i.createElement("span", null, i.createElement(g.Q, {
                    type: g._49.H6
                }, Object(a.d)("Notifications", "FollowButton")))), i.createElement(g._8, {
                    display: g.R.Flex,
                    flexShrink: 0
                }, i.createElement(g._51, {
                    onChange: this.toggleNotificationsEnabled,
                    checked: !this.state.disableNotifications,
                    "data-a-target": "notifications-toggle"
                }))), i.createElement(g._8, {
                    display: g.R.InlineFlex,
                    padding: {
                        bottom: 1
                    }
                }, i.createElement(g.Q, {
                    type: g._49.Span,
                    color: g.K.Alt2
                }, r))))))
            }, t.prototype.reportInteractive = function() {
                k(this.props) ? this.props.latencyTracking.reportInteractive() : this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = r.__decorate([Object(s.a)(v, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return k(e)
                }
            }), Object(s.a)(f, {
                name: "followUser"
            }), Object(s.a)(b, {
                name: "unfollowUser"
            }), Object(h.d)("FollowButton")], t)
        }(i.Component);

        function k(e) {
            return !e.isLoggedIn || (!e.channelLogin || (!!e.followData || e.channelLogin === e.currentUserLogin))
        }
    },
    "5DPx": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return v
        });
        var r, i = n("TToO"),
            a = n("6sO2"),
            o = n("YUUt"),
            s = n.n(o),
            l = n("/SNv"),
            c = n.n(l),
            u = n("Vr3l"),
            d = n.n(u),
            p = n("PPNL"),
            m = n("nyge"),
            h = n("EOpv"),
            g = n("LgcN"),
            f = this,
            b = a.o.logger.withCategory("metadata-info");
        ! function(e) {
            e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
        }(r || (r = {}));
        var v = function(e, t) {
                return i.__awaiter(f, void 0, void 0, function() {
                    var n, r, o, s, l, c;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return n = t.toLowerCase(), r = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, r && n === m.a.CounterStrike ? [4, y(r)] : [3, 2];
                            case 1:
                                return [2, i.sent()];
                            case 2:
                                return o && n === m.a.Hearthstone ? [4, _(o)] : [3, 4];
                            case 3:
                                return [2, i.sent()];
                            case 4:
                                return l && n === m.a.Overwatch ? [4, k(l)] : [3, 6];
                            case 5:
                                return [2, i.sent()];
                            case 6:
                                if (s && n === m.a.LeagueOfLegends && (c = a.o.store.getState()).directory)
                                    if (c.directory.leagueOfLegends.championsMap) {
                                        if (c.directory.leagueOfLegends.championsMap) return [2, S(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                    } else a.o.store.dispatch(Object(p.a)());
                                i.label = 7;
                            case 7:
                                return [2, null]
                        }
                    })
                })
            },
            y = function(e) {
                return i.__awaiter(f, void 0, void 0, function() {
                    var t, n, r;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, Object(g.a)()];
                            case 1:
                                return t = i.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                    name: n[e].display_name,
                                    label: Object(h.b)(h.a.CSGOSkillGroup),
                                    spriteDetails: {
                                        imageWidth: n[e].image_width,
                                        imageHeight: n[e].image_height,
                                        spriteOffsetX: n[e].sprite_x_offset,
                                        spriteOffsetY: n[e].sprite_y_offset,
                                        spriteURL: s.a
                                    }
                                }];
                            case 2:
                                return r = i.sent(), b.error(r, "Failed to load Counter-Strike skill group data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            _ = function(e) {
                return i.__awaiter(f, void 0, void 0, function() {
                    var t, n, r;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, Object(g.b)()];
                            case 1:
                                return t = i.sent(), n = {}, t[0].Class.forEach(function(e) {
                                    n[e.class] = e
                                }), [2, {
                                    name: n[e].display_name,
                                    label: Object(h.b)(h.a.HearthstoneClass),
                                    spriteDetails: {
                                        imageWidth: n[e].image_width,
                                        imageHeight: n[e].image_height,
                                        spriteOffsetX: n[e].sprite_x_offset,
                                        spriteOffsetY: n[e].sprite_y_offset,
                                        spriteURL: c.a
                                    }
                                }];
                            case 2:
                                return r = i.sent(), b.error(r, "Failed to load Hearthstone class data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            k = function(e) {
                return i.__awaiter(f, void 0, void 0, function() {
                    var t, n, r, a, o, s, l, c, u, p, m, f;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, Object(g.d)()];
                            case 1:
                                for (t = i.sent(), n = void 0, r = 0, a = t; r < a.length; r++)
                                    for (o in n = a[r])
                                        if (n.hasOwnProperty(o))
                                            for (s = n[o], l = 0, c = s; l < c.length; l++)
                                                if ((u = c[l]).character === e) return (f = {})[u.character] = u, [2, {
                                                    name: (p = f)[e].display_name,
                                                    label: Object(h.b)(h.a.OverwatchCharacter),
                                                    spriteDetails: {
                                                        imageWidth: p[e].image_width,
                                                        imageHeight: p[e].image_height,
                                                        spriteOffsetX: p[e].sprite_x_offset,
                                                        spriteOffsetY: p[e].sprite_y_offset,
                                                        spriteURL: d.a
                                                    }
                                                }];
                                return [2, null];
                            case 2:
                                return m = i.sent(), b.error(m, "Failed to load Overwatch character data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            S = function(e, t, n) {
                if (!t || !e) return null;
                var r = t[e],
                    i = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + r.image.sprite;
                return {
                    name: r.name,
                    label: Object(h.b)(h.a.LeagueChampion),
                    spriteDetails: {
                        imageWidth: r.image.w,
                        imageHeight: r.image.h,
                        spriteOffsetX: r.image.x,
                        spriteOffsetY: r.image.y,
                        spriteURL: i
                    }
                }
            }
    },
    "5LoI": function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.Games = "game", e.Videos = "vod", e.VideosNewest = "vod_by_created_at", e.Users = "user", e.Channels = "live_channel", e.Communities = "community"
            }(r || (r = {}))
    },
    "5MsU": function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.PlayerInit = "init", e.ContentShowing = "contentShowing", e.PlaybackStatistics = "playbackStatistics", e.ChansubRequired = "chansubRequired", e.VideoFailure = "videoFailure", e.Formats = "videoFormats", e.ABSStreamFormatChange = "abs_stream_format_change", e.FormatChanged = "videoFormatChanged", e.TimeChange = "timeChange", e.BufferChange = "bufferChange", e.SegmentChange = "segmentchange", e.UsherFailError = "usherFail", e.CaptionUpdate = "captions", e.SeekFailed = "seekfailed", e.VariantSwitchRequest = "variantSwitchRequested", e.ViewersChange = "viewerschange", e.StreamLoaded = "streamLoaded", e.VideoLoaded = "videoLoaded", e.VideoPaused = "videoPaused", e.QualityChange = "qualitychange", e.Online = "online", e.Offline = "offline", e.Restricted = "restricted", e.CastingChange = "castingchange", e.TheatreChange = "theatrechange", e.MidrollRequested = "midrollrequested", e.ManifestExtraInfo = "manifestExtraInfo", e.TransitionToCollectionVOD = "transitionToCollectionVod", e.TransitionToRecommendedVOD = "transitionToRecommendedVod", e.StitchedAdStart = "stitchedadstart", e.StichedAdEnd = "stitchedadend", e.PersistenPlayerToggle = "persistentPlayerEnableToggle", e.StatsUpdate = "statsupdate", e.PromptLoginModal = "prompt login modal", e.OpenStream = "openStream", e.PlayerReady = "ready", e.FullscreenChange = "fullscreenchange", e.ExternalFullscreenChange = "externalfullscreenchange", e.ClipsModerationOpen = "clips-moderation-open"
            }(r || (r = {}))
    },
    "6O9f": function(e, t) {},
    "6WAQ": function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.Archive = "ARCHIVE", e.Highlight = "HIGHLIGHT", e.Upload = "UPLOAD", e.WatchParty = "WATCH_PARTY", e.PastPremiere = "PAST_PREMIERE", e.PremiereUpload = "PREMIERE_UPLOAD"
            }(r || (r = {}))
    },
    "6uxC": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Algolia_RequestInfo"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                end: 57
            }
        };
        n.loc.source = {
            body: "query Algolia_RequestInfo {\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "70dR": function(e, t, n) {
        "use strict";
        var r, i = n("TToO"),
            a = n("GiK3"),
            o = n("RH2O"),
            s = n("Aj/L"),
            l = n("CSlQ"),
            c = n("6sO2"),
            u = n("+Znq"),
            d = n("7vx8"),
            p = n("RweG"),
            m = n("vBst"),
            h = n("TeXj"),
            g = n("S1vB"),
            f = n("HZww"),
            b = n("oIkB"),
            v = n("HM6l"),
            y = n("a0y1"),
            _ = n("3iBR"),
            k = n("Odds"),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(k._8, {
                        className: "esports-top-page-details"
                    }, a.createElement(k._8, {
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            x: 2,
                            y: 1
                        },
                        display: k.R.Flex,
                        justifyContent: k._7.Center,
                        className: "insider-pass-pre-purchase__header"
                    }, a.createElement("img", {
                        src: _.c + "/owl-2017/all-access-logo.svg",
                        alt: Object(c.d)("Overwatch League All-Access Pass on Twitch", "EsportsTopPageDetails"),
                        height: "80px",
                        "data-test-selector": "balloon-detail-logo"
                    })), a.createElement(k._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(k.Q, {
                        type: k._49.H4,
                        bold: !0,
                        "data-test-selector": "balloon-detail-subheader"
                    }, Object(c.d)("Your VIP pass to the best of the Overwatch League", "EsportsTopPageDetails"))), a.createElement(k._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(k.Q, {
                        type: k._49.H6,
                        bold: !0,
                        "data-test-selector": "balloon-detail-igc-subheader"
                    }, Object(c.d)("Overwatch In-Game Content (requires Blizzard account link)", "EsportsTopPageDetails")), a.createElement(k.Q, {
                        "data-test-selector": "balloon-detail-igc-copy"
                    }, Object(c.d)("3 Hero Skins • Overwatch League Player Icon • Overwatch League Spray •", "EsportsTopPageDetails"), " ", a.createElement(k.Q, {
                        type: k._49.Span,
                        italic: !0
                    }, Object(c.d)("Plus more content coming soon", "EsportsTopPageDetails")))), a.createElement(k._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(k.Q, {
                        type: k._49.H6,
                        bold: !0,
                        "data-test-selector": "balloon-detail-experience-subheader"
                    }, Object(c.d)("The Overwatch League All-Access Experience", "EsportsTopPageDetails")), a.createElement(k.Q, {
                        "data-test-selector": "balloon-detail-experience-copy"
                    }, Object(c.d)("Exclusive Command Center stream • Match analysis videos by players • Ask questions in post-match Q&A with players • Passholder-only chat • 23 Twitch emotes • Overwatch League chat badges • Ad-free viewing on Overwatch League", "EsportsTopPageDetails"))))
                }, t
            }(a.PureComponent),
            T = n("YEG/"),
            w = n("FDYX"),
            P = (n("VOrx"), function(e) {
                var t = Object(w.d)(e.subscriptionProducts) ? Object(w.a)(e.subscriptionProducts[0]) : e.subscriptionProducts[0].price,
                    n = null;
                if (e.isEsportGiftingApproved) {
                    var r = Object(c.d)("Gift All-Access Pass", "EsportsNonSubbedTopPage");
                    n = a.createElement(k.v, {
                        ariaLabel: r,
                        onClick: e.showRecipientSelect,
                        type: k.B.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, r)
                }
                return a.createElement(k._8, {
                    padding: 2
                }, a.createElement(S, null), a.createElement(k.Q, {
                    type: k._49.H6,
                    bold: !0
                }, Object(c.d)("One-Time Purchase for the 2018 Season", "EsportsNonSubbedTopPage")), a.createElement(k.Q, null, Object(c.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season. Twitch emotes, badges, and in-game content are yours to keep forever.", "EsportsNonSubbedTopPage")), a.createElement(k._8, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(k._8, {
                    margin: {
                        right: .5
                    },
                    display: k.R.Inline
                }, a.createElement(T.a, {
                    isSubbedToTier: !1,
                    tierPrice: t,
                    "data-a-target": "tier1-subscribe-button",
                    reportSubAction: e.handleTopPageSubButtonClick,
                    url: e.subscriptionProducts[0].url,
                    isEsportChannel: !0
                })), n), a.createElement(k._8, {
                    display: k.R.Flex,
                    margin: {
                        top: 1
                    },
                    flexDirection: k.T.Column
                }, a.createElement(y.a, {
                    subscriptionProducts: e.subscriptionProducts,
                    userHasPrime: e.userHasPrime
                })))
            }),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    if (this.props.isEsportGiftingApproved) {
                        var t = Object(c.d)("Gift All-Access Pass", "EsportsSubbedTopPage");
                        e = a.createElement(k._8, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(k.v, {
                            ariaLabel: t,
                            onClick: this.props.showRecipientSelect,
                            type: k.B.Hollow,
                            "data-test-selector": "subscribe-button__gift"
                        }, t))
                    }
                    return a.createElement(k._8, {
                        padding: 2
                    }, a.createElement(S, null), a.createElement(k.Q, {
                        "test-selector": "subbed-subheader",
                        type: k._49.H4,
                        bold: !0
                    }, Object(c.d)("You have the All-Access Pass", "EsportsSubbedTopPage")), a.createElement(k.Q, {
                        "test-selector": "subbed-copy"
                    }, Object(c.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season. Twitch emotes, badges, and in-game content are yours to keep.", "EsportsSubbedTopPage")), e)
                }, t
            }(a.PureComponent),
            O = n("6BvN"),
            C = n("5LoI"),
            R = n("MAZT"),
            N = n("uTyw"),
            I = n("zCIC"),
            L = n("SZoP"),
            x = n("2KeS"),
            F = n("lK86"),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading || !this.props.recipientLogin || this.props.data.user.self.canGift) return null;
                    var e = this.props.isEsportChannel ? Object(c.d)("Sorry, an All-Access Pass to this channel is not available for this user", "GiftRecipientIneligibleMessage") : Object(c.d)("Sorry, a gift subscription to this channel is not available for this user.", "GiftRecipientIneligibleMessage"),
                        t = this.props.isEsportChannel ? "esports-gift-eligibility-message-selector" : "gift-eligibility-message-selector";
                    return a.createElement(k._8, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(k.Q, {
                        italic: !0,
                        color: k.K.Alt2,
                        "data-test-selector": t
                    }, e))
                }, t
            }(a.Component),
            D = Object(x.d)(Object(l.d)("GiftRecipientIneligibleMessage"), Object(d.a)(F, {
                options: function(e) {
                    return {
                        variables: {
                            recipientLogin: e.recipientLogin,
                            subProductId: e.subProductId
                        }
                    }
                },
                skip: function(e) {
                    return !e.recipientLogin || !e.subProductId
                }
            }))(j),
            M = n("daN3"),
            U = n("CwIZ"),
            A = (n("+YN9"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedUser: null
                    }, t.reportGiftCheckoutAction = function() {
                        t.props.reportSubMenuAction({
                            action: U.a.BuyGiftSub,
                            checkoutButtonTier: t.props.selectedProductPrice,
                            giftRecipient: t.state.selectedUser ? t.state.selectedUser.login : null
                        })
                    }, t.onUserClick = function(e) {
                        for (var n = e.target; n.parentElement && !n.dataset.user_id;) n = n.parentElement;
                        n.dataset.user_id && n.dataset.user_login && n.dataset.user_name ? t.setState({
                            selectedUser: {
                                id: n.dataset.userId || "",
                                login: n.dataset.user_login || "",
                                name: n.dataset.user_name || ""
                            }
                        }) : t.setState({
                            selectedUser: null
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (e.isWaiting || e.isErrored || !e.hasInput) && this.setState({
                        selectedUser: null
                    })
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? a.createElement(k._8, {
                        fullHeight: !0
                    }, a.createElement(k._10, {
                        fillContent: !0
                    })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : a.createElement(k._8, {
                        margin: 1
                    }, a.createElement(k.Q, {
                        color: k.K.Alt2
                    }, Object(c.d)("Start typing to see a list of suggestions here.", "GiftRecipientSearchResult"))), a.createElement("div", {
                        onKeyDown: this.props.onKeyDown
                    }, a.createElement(k._35, {
                        className: "gift-recipient-search-result-view",
                        background: k.n.Alt,
                        position: k._15.Relative,
                        overflow: k._11.Hidden,
                        display: k.R.Block,
                        margin: {
                            bottom: 2
                        },
                        borderLeft: !0,
                        borderBottom: !0,
                        borderRight: !0
                    }, a.createElement(k._2, {
                        overflow: k._11.Hidden,
                        position: k._15.Relative
                    }, a.createElement(I.b, {
                        suppressScrollX: !0
                    }, a.createElement(k._8, null, e, a.createElement(I.a, {
                        enabled: !this.props.isWaiting && this.props.hasInput,
                        loadMore: this.props.loadMore
                    }))))), a.createElement(k._8, null, a.createElement(k._8, {
                        display: k.R.Flex,
                        alignItems: k.c.Center,
                        fullWidth: !0
                    }, this.getBuyGiftButton(), a.createElement(k._2, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(k.Q, {
                        "data-test-selector": "gift-recipient-display-name-selector"
                    }, Object(c.d)("for {displayName}", {
                        displayName: a.createElement(k.Q, {
                            bold: !0,
                            type: k._49.Span
                        }, this.getFormattedDisplayName())
                    }, "GiftRecipientCheckoutButton")))), a.createElement(D, {
                        subProductId: this.props.selectedProductId,
                        recipientLogin: this.state.selectedUser ? this.state.selectedUser.login : null,
                        isEsportChannel: this.props.isEsportChannel
                    })))
                }, t.prototype.getBuyGiftButton = function() {
                    return a.createElement(M.a, {
                        subProductId: this.props.selectedProductId,
                        giftRecipient: this.state.selectedUser ? this.state.selectedUser.login : null,
                        checkoutURL: this.props.selectedProductURL,
                        onClick: this.reportGiftCheckoutAction,
                        isEsportChannel: this.props.isEsportChannel
                    })
                }, t.prototype.getFormattedDisplayName = function() {
                    return this.state.selectedUser ? Object(L.a)(this.state.selectedUser.login, this.state.selectedUser.name) : ""
                }, t.prototype.getErrorMessage = function() {
                    return a.createElement(k._8, {
                        fullWidth: !0,
                        textAlign: k._45.Center,
                        justifyContent: k._7.Center
                    }, a.createElement(k.Q, null, Object(c.d)("Something went wrong", "GiftRecipientSearchResult")))
                }, t.prototype.getUserResultContent = function() {
                    var e = this;
                    return this.props.userResults ? this.props.userResults.results.map(function(t) {
                        var n = Object(L.a)(t.login || "", t.name || "");
                        return a.createElement(k._6, {
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "git-recipient-result__" + t.id,
                            "data-user_id": t.id,
                            "data-user_login": t.login,
                            "data-user_name": t.name,
                            onClick: e.onUserClick,
                            "data-test-selector": "subscribe-button__gift_search_result"
                        }, a.createElement(k._8, {
                            padding: .5
                        }, a.createElement(k.C, {
                            row: !0
                        }, a.createElement(k.E, {
                            alt: t.thumbnailAltText,
                            src: t.thumbnail ? t.thumbnail : "",
                            size: k.F.Size4,
                            aspect: k.l.Aspect1x1
                        }), a.createElement(k.D, {
                            overflow: k._11.Hidden
                        }, a.createElement(k._2, {
                            padding: {
                                x: 1
                            }
                        }, a.createElement(k.Q, {
                            type: k._49.H5,
                            ellipsis: !0
                        }, n))))))
                    }) : a.createElement(k._14, null)
                }, t.prototype.getNoResultsMessage = function() {
                    return a.createElement(k._8, {
                        margin: 1
                    }, a.createElement(k.Q, {
                        color: k.K.Alt2
                    }, Object(c.d)("No Results", "GiftRecipientSearchResult")))
                }, t = i.__decorate([Object(l.d)("GiftRecipientSearchResultPanel")], t)
            }(a.Component)),
            B = (n("m0Vj"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.selectedSubProduct) {
                        var e = null;
                        if (this.props.selectedSubProduct && this.props.selectedSubProduct.giftPromotion) {
                            var t = this.props.selectedSubProduct && this.props.selectedSubProduct.giftPromotion ? this.props.selectedSubProduct.giftPromotion : null;
                            e = a.createElement(k.Q, {
                                bold: !0,
                                className: "subscription-gift-recipient-search__discount-message"
                            }, Object(c.d)("{price} (Save {percent})", {
                                price: t ? t.newPrice : "",
                                percent: Object(c.e)(t ? t.discountValue / 100 : 0, "percent")
                            }, "GiftRecipientSearch"))
                        }
                        var n = "gift-recipient-search-subheading-selector",
                            r = Object(c.d)("{subDisplayName}: {giftPrice} Gift Subscription (Single Month)", {
                                subDisplayName: this.props.selectedSubProduct ? this.props.selectedSubProduct.displayName : "",
                                giftPrice: this.props.selectedSubProduct ? this.props.selectedSubProduct.price : ""
                            }, "GiftRecipientSearch");
                        return this.props.isEsportChannel && (n = "gift-recipient-search-esports-subheading-selector", r = Object(c.d)("Overwatch League: {giftPrice} All-Access Pass for current season", {
                            giftPrice: this.props.selectedSubProduct ? this.props.selectedSubProduct.price : ""
                        }, "GiftRecipientSearch")), a.createElement(k._8, {
                            padding: 2,
                            className: "subscription-gift-recipient-search"
                        }, a.createElement(k._8, null, a.createElement(k._8, {
                            display: k.R.Flex,
                            justifyContent: k._7.Between,
                            alignItems: k.c.Center,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(k.Q, {
                            type: k._49.H4,
                            bold: !0
                        }, Object(c.d)("Choose a Gift Recipient", "GiftRecipientSearch")), a.createElement(k.v, {
                            type: k.B.Text,
                            "data-a-target": "subscribe-back-button",
                            icon: k._25.AngleLeft,
                            onClick: this.props.onBack,
                            "data-test-selector": "gift-recipient-search-back-button"
                        }, a.createElement(k._8, {
                            alignItems: k.c.Center,
                            display: k.R.InlineFlex
                        }, a.createElement(k.Q, null, Object(c.d)("Back", "GiftRecipientSearch"))))), a.createElement(k._8, null, a.createElement(k.Q, {
                            "data-test-selector": n
                        }, r), e, a.createElement(k._8, {
                            display: k.R.Flex,
                            justifyContent: k._7.Center,
                            padding: {
                                top: 1
                            },
                            fullWidth: !0
                        }, a.createElement(k._2, {
                            fullWidth: !0
                        }, a.createElement("div", null, a.createElement(k._27, {
                            onChange: this.handleChange,
                            onKeyDown: this.props.onKeyDown,
                            id: "gift-recipient-search",
                            placeholder: Object(c.d)("Search for a Twitch ID", "GiftRecipientSearch"),
                            "data-test-selector": "gift-recipient-search-input-selector"
                        }), a.createElement(A, {
                            hasInput: this.props.hasInput,
                            userResults: this.props.userResults,
                            isErrored: this.props.isErrored,
                            isWaiting: this.props.isWaiting,
                            loadMore: this.props.loadMore,
                            onKeyDown: this.props.onKeyDown,
                            selectedProductId: this.props.selectedSubProduct.id,
                            selectedProductURL: this.props.selectedSubProduct.url,
                            selectedProductPrice: this.props.selectedSubProduct.price,
                            reportSubMenuAction: this.props.reportSubMenuAction,
                            isEsportChannel: this.props.isEsportChannel
                        })))))))
                    }
                    return a.createElement(k._14, null)
                }, t
            }(a.Component)),
            V = 50,
            G = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onChange = function(e) {
                        n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), e ? (n.setState({
                            isWaiting: !0
                        }), n.inputTimer = setTimeout(function() {
                            return n.doSearch(e)
                        }, V)) : n.setState(n.getEmptyState())
                    }, n.loadMore = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var e, t, n;
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(C.a.Users, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = r.sent(), [3, 4];
                                    case 3:
                                        return r.sent(), this.setState(i.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2];
                                    case 4:
                                        return t ? (n = Object(N.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentUserResults: this.state.currentUserResults
                                        }), this.setState({
                                            currentUserResults: n.currentUserResults,
                                            term: this.state.term,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: n.exhaustedHits
                                        }), [2]) : (this.setState(i.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2])
                                }
                            })
                        })
                    }, n.onKeyDown = function(e) {
                        n.state.term && (e.keyCode === O.a.Esc ? n.setState({
                            hasInput: !1
                        }) : e.keyCode === O.a.Up ? n.focusNext(-1) : e.keyCode === O.a.Down && n.focusNext(1))
                    }, n.state = n.getEmptyState(), n.searchClient = new R.a({
                        appId: c.a.algoliaApplicationID,
                        apiKey: c.a.algoliaAPIKey,
                        apolloClient: c.o.apollo.client,
                        logger: c.j,
                        config: c.a
                    }), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(B, {
                        onChange: this.onChange,
                        loadMore: this.loadMore,
                        onKeyDown: this.onKeyDown,
                        userResults: this.state.currentUserResults,
                        hasInput: this.state.hasInput,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onBack: this.props.onBack,
                        selectedSubProduct: this.props.selectedSubProduct,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        isEsportChannel: this.props.isEsportChannel
                    })
                }, t.prototype.getEmptyState = function() {
                    return {
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        term: "",
                        hasInput: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1
                    }
                }, t.prototype.doSearch = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, a, o;
                        return i.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = v.a(), r = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !r && !!this.state.currentFocus
                                    }), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(C.a.Users, e, n)];
                                case 2:
                                    return a = s.sent(), [3, 4];
                                case 3:
                                    return s.sent(), this.setState(i.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return a ? this.state.queryID !== a.id ? [2] : (o = Object(N.b)({
                                        searchResults: a,
                                        append: !1
                                    }), this.setState(function(n) {
                                        return i.__assign({}, n, o, {
                                            queryID: "",
                                            term: e,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(i.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                        r = document.activeElement,
                        i = Array.prototype.indexOf.call(n, r);
                    if ((t = i < 0 ? e > 0 ? 0 : n.length - 1 : i + e) < 0 && (t = 0), !(t >= n.length)) {
                        var a = n.item(t);
                        a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: a
                        })
                    }
                }, t = i.__decorate([Object(l.d)("GiftRecipientSearch")], t)
            }(a.Component);
        ! function(e) {
            e[e.Top = 0] = "Top", e[e.SubOptions = 1] = "SubOptions", e[e.GiftOptions = 2] = "GiftOptions", e[e.RecipientSelect = 3] = "RecipientSelect"
        }(r || (r = {}));
        var H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goToPreviousPage = function() {
                        t.props.reportSubMenuAction({
                            action: U.a.ClickBack,
                            modalLevel: t.props.currentPage === r.SubOptions || t.props.currentPage === r.GiftOptions ? "top_page" : "second_page"
                        }), t.props.currentPage !== r.RecipientSelect || t.props.showTop()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.currentPage === r.RecipientSelect ? this.getGiftRecipientSearchPage() : this.props.isSubscribed ? this.getSubbedTopPage() : this.getUnsubbedTopPage()
                }, t.prototype.getSubbedTopPage = function() {
                    return a.createElement(E, {
                        showRecipientSelect: this.props.showRecipientSelect,
                        isEsportGiftingApproved: this.props.isEsportGiftingApproved
                    })
                }, t.prototype.getUnsubbedTopPage = function() {
                    return a.createElement(P, {
                        channelLogin: this.props.channelLogin,
                        handleTopPageSubButtonClick: this.props.handleTopPageSubButtonClick,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts ? this.props.subscriptionProducts : [],
                        userHasPrime: this.props.userHasPrime,
                        showRecipientSelect: this.props.showRecipientSelect,
                        isEsportGiftingApproved: this.props.isEsportGiftingApproved
                    })
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return this.props.subscriptionProducts ? a.createElement(G, {
                        key: "gift-recipient-search-page",
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[0],
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        isEsportChannel: this.props.isEsportGiftingApproved
                    }) : null
                }, t
            }(a.Component),
            W = n("37Pp"),
            z = n("odx1"),
            Q = function(e) {
                var t = null,
                    n = null,
                    r = null,
                    i = e.subscriptionProducts[0].price;
                if (Object(w.d)(e.subscriptionProducts) && (i = Object(w.a)(e.subscriptionProducts[0])), e.channelLogin && (e.inPrimeRegion || e.userHasPrime)) {
                    var o = e.userHasPrime ? Object(c.d)("Use your free channel subscription to directly support your favorite streamer. {upsellTextLink}", {
                        upsellTextLink: a.createElement("a", {
                            href: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                            target: "_blank"
                        }, Object(c.d)("Learn more about your free sub", "NonSubbedTopPage"))
                    }, "NonSubbedTopPage") : Object(c.d)("{upsellTextBold}, plus get free game loot every month, ad-free viewing, and loads more with Twitch Prime.", {
                        upsellTextBold: a.createElement("strong", null, Object(c.d)("Support your favorite streamer", "NonSubbedTopPage"))
                    }, "NonSubbedTopPage");
                    r = a.createElement(k._8, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(k._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(k.Q, {
                        type: k._49.H4,
                        bold: !0
                    }, Object(c.d)("Free Channel Sub with Twitch Prime", "NonSubbedTopPage"))), a.createElement(k._8, null, a.createElement(k._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(k.Q, null, o)), a.createElement(z.a, {
                        authToken: e.authToken,
                        "data-a-target": "subscribe-with-prime-button",
                        isSubscribed: !1,
                        isSubscribedWithPrime: !1,
                        onSubscribedWithPrime: e.onSubscribedWithPrime,
                        reportSubMenuAction: e.reportSubMenuAction,
                        subLogin: e.channelLogin,
                        userHasPrime: e.userHasPrime,
                        canPrimeSubscribe: e.canPrimeSubscribe,
                        channelLogin: e.channelLogin
                    })))
                }
                if (!e.isNonStandardSub) {
                    var s = Object(c.d)("More Paid Subscription Options", "NonSubbedTopPage");
                    t = a.createElement(k._8, {
                        margin: {
                            right: 1
                        },
                        display: k.R.Inline
                    }, a.createElement(k.v, {
                        ariaLabel: s,
                        onClick: e.showSubOptions,
                        type: k.B.Hollow,
                        "data-test-selector": "subscribe-button__more-sub-options-button",
                        "data-a-target": "see-more-sub-options-button"
                    }, s));
                    var l = Object(c.d)("Gift a Subscription", "NonSubbedTopPage");
                    n = a.createElement(k._8, {
                        display: k.R.Inline
                    }, a.createElement(k.v, {
                        ariaLabel: l,
                        onClick: e.showGiftOptions,
                        type: k.B.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, l))
                }
                return a.createElement(k._8, {
                    padding: 2
                }, r, a.createElement(k._8, null, a.createElement(k.Q, {
                    type: k._49.H4,
                    bold: !0
                }, Object(c.d)("Paid Subscription", "NonSubbedTopPage")), a.createElement(W.a, {
                    subscriptionProduct: e.subscriptionProducts[0]
                }), a.createElement(k._8, {
                    display: k.R.Flex
                }, a.createElement(k._8, {
                    margin: {
                        right: 1,
                        top: 1
                    }
                }, a.createElement(T.a, {
                    isSubbedToTier: !1,
                    tierPrice: i,
                    "data-a-target": "tier1-subscribe-button",
                    reportSubAction: e.handleTopPageSubButtonClick,
                    url: e.subscriptionProducts[0].url
                })))), a.createElement(k._8, {
                    margin: {
                        right: 1,
                        top: 2
                    }
                }, t, n))
            },
            q = n("YH6m"),
            K = function(e) {
                return a.createElement(k._8, {
                    padding: 2
                }, a.createElement(k._8, null, a.createElement(k._8, {
                    display: k.R.Flex,
                    justifyContent: k._7.Between,
                    alignItems: k.c.Center,
                    fullWidth: !0
                }, a.createElement(k.Q, {
                    type: k._49.H4,
                    bold: !0
                }, e.header), a.createElement(k.v, {
                    type: k.B.Text,
                    "data-a-target": "subscribe-back-button",
                    "data-test-selector": "subscribe-button__back-button",
                    icon: k._25.AngleLeft,
                    onClick: e.onBack
                }, a.createElement(k._8, {
                    alignItems: k.c.Center,
                    display: k.R.InlineFlex
                }, a.createElement(k.Q, null, Object(c.d)("Back", "PaidSubOptions"))))), a.createElement(q.a, {
                    canPrimeSubscribe: !1,
                    channelDisplayName: e.channelDisplayName,
                    isSubscribed: e.isSubscribed,
                    onSelectTierTab: e.onSelectTierTab,
                    isGift: e.isGift,
                    onGiftSelect: e.onGiftSelect,
                    giftRecipient: e.giftRecipient,
                    reportSubMenuAction: e.reportSubMenuAction,
                    subscriptionProducts: e.subscriptionProducts,
                    userHasPrime: !1
                })))
            },
            Y = n("pQNb"),
            $ = (n("DquS"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform,
                        t = e || this.props.isGift ? null : this.getTopPageUpgradeSection(),
                        n = e ? this.getMobileSubbedSection() : null,
                        r = this.getGiftSection();
                    return a.createElement(k._8, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, r, n, t)
                }, t.prototype.getTopPageUpgradeSection = function() {
                    var e = this.props.subbedTier !== m.a.Tier3 ? Object(c.d)("Change Your Subscription", "SubbedTopPage") : this.getSubbedHeader();
                    return a.createElement(k._8, null, a.createElement(k.Q, {
                        type: k._49.H4,
                        bold: !0
                    }, e), a.createElement(q.a, {
                        authToken: this.props.authToken,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        subLogin: this.props.channelLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.props.onSelectTierTab,
                        subbedTier: this.props.subbedTier,
                        subscriptionProducts: this.props.subscriptionProducts,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        onGiftSelect: this.props.showRecipientSelect,
                        isSubscribed: !0
                    }))
                }, t.prototype.getMobileSubbedSection = function() {
                    var e = this.getFormattedRenewalDate(),
                        t = this.getFormattedGiftEndDate(),
                        n = 0 === e.length ? Object(c.d)("Tier 1 Subscription, benefits end on {date}", {
                            date: t
                        }, "SubbedTopPage") : Object(c.d)("Tier 1 Subscription, benefits renew on {date}", {
                            date: e
                        }, "SubbedTopPage"),
                        r = Object(c.d)("Subscribed via {platform} Subscriptions", {
                            platform: "IOS" === this.props.subbedPlatform ? "Apple" : "Google"
                        }, "SubbedTopPage"),
                        i = "IOS" === this.props.subbedPlatform ? "https://help.twitch.tv/customer/portal/articles/2921095#ManageiOS" : "https://help.twitch.tv/customer/portal/articles/2921095#ManageGoogle";
                    return a.createElement(k._8, {
                        "data-test-selector": "subscribed-view-mobile"
                    }, a.createElement(k._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(k.Q, {
                        type: k._49.H4,
                        bold: !0
                    }, this.getSubbedHeader())), a.createElement(k._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(k._8, null, n), a.createElement(k._8, null, r), a.createElement(k._8, null, a.createElement(k.O, {
                        to: i
                    }, Object(c.d)("How do I manage this subscription?", "SubbedTopPage")))))
                }, t.prototype.getGiftSection = function() {
                    return this.props.giftSender ? this.props.giftSender && !this.props.giftPaidUpgrade ? a.createElement(k._8, null, a.createElement(k._8, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getGiftExtendSection()) : a.createElement(k._8, null, a.createElement(k._8, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getTopPageGiftSection()) : a.createElement(k._8, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getTopPageGiftSection())
                }, t.prototype.getGiftInfoSection = function() {
                    var e, t, n = null;
                    return this.props.giftPaidUpgrade ? (e = this.getSubbedHeader(), t = Object(c.d)("{giftPrice} Gift Subscription from {giftSender}", {
                        giftPrice: this.getCurrentSubPrice(),
                        giftSender: a.createElement(k.Q, {
                            bold: !0,
                            type: k._49.Span
                        }, this.props.giftSender || "")
                    }, "SubbedTopPage"), n = Object(c.d)("Your new {upgradePrice} Paid Subscription will begin on {subStartDate}", {
                        upgradePrice: this.props.giftPaidUpgrade ? this.props.giftPaidUpgrade.price : "",
                        subStartDate: this.getFormattedGiftUpgradeStartDate()
                    }, "SubbedTopPage")) : (e = Object(c.d)("Your Gift Subscription", "SubbedTopPage"), t = Object(c.d)("{giftPrice} Subscription from {giftSender} - Benefits expire on {giftEndDate}", {
                        giftPrice: this.getCurrentSubPrice(),
                        giftSender: a.createElement(k.Q, {
                            bold: !0,
                            type: k._49.Span
                        }, this.props.giftSender || ""),
                        giftEndDate: this.getFormattedGiftEndDate()
                    }, "SubbedTopPage")), a.createElement(k._8, null, a.createElement(k.Q, {
                        bold: !0,
                        type: k._49.H4
                    }, e), a.createElement(k._2, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(k.Q, null, t)), a.createElement(k.Q, {
                        className: "balloon-subscribed-user__gift-upgrade-info",
                        bold: !0
                    }, n))
                }, t.prototype.getGiftExtendSection = function() {
                    var e, t = null;
                    if (!this.props.isNonStandardSub) {
                        var n = Object(c.d)("More Paid Subscription Options", "SubbedTopPage");
                        t = a.createElement(k._8, {
                            margin: {
                                right: 1
                            },
                            display: k.R.Inline
                        }, a.createElement(k.v, {
                            ariaLabel: n,
                            onClick: this.props.showSubOptions,
                            type: k.B.Hollow,
                            "data-a-target": "see-more-sub-options-button"
                        }, n))
                    }
                    var r = this.getGiftMessage();
                    return e = a.createElement(k._8, {
                        display: k.R.Inline
                    }, a.createElement(k.v, {
                        "data-test-selector": "subscribe-button__gift",
                        ariaLabel: r,
                        onClick: this.props.showGiftOptions,
                        type: k.B.Hollow
                    }, r)), a.createElement(k._8, null, a.createElement(k._8, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(k.Q, {
                        type: k._49.H4,
                        bold: !0
                    }, Object(c.d)("Extend Your Subscription", "SubbedTopPage")), a.createElement(k._2, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(k.Q, null, Object(c.d)("{price} / Month", {
                        price: this.props.subscriptionProducts[0].price
                    }, "SubbedTopPage"))), a.createElement(k._8, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, a.createElement(k.v, {
                        ariaLabel: this.props.subscriptionProducts[0].price,
                        "data-a-target": "tier1-subscribe-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.props.handleTopPageSubButtonClick,
                        purchase: this.props.subscriptionProducts[0].price,
                        targetBlank: !0
                    }, Object(c.d)("Subscribe Now", "SubbedTopPage")))), a.createElement(k._8, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, t, e))
                }, t.prototype.getTopPageGiftSection = function() {
                    var e = this.props.subscriptionProducts[0].price;
                    Object(w.c)(this.props.subscriptionProducts) && (e = Object(w.a)(this.props.subscriptionProducts[0], !0));
                    var t = this.getGiftMessage(),
                        n = Object(c.d)("More Gift Options", "SubbedTopPage");
                    return a.createElement(k._8, null, a.createElement(k.Q, {
                        type: k._49.H4,
                        bold: !0
                    }, Object(c.d)("Help Grow {streamer}'s Community", {
                        streamer: this.props.channelDisplayName
                    }, "SubbedTopPage")), a.createElement(k._8, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: k.R.Flex
                    }, a.createElement(k.v, {
                        ariaLabel: t + " " + e,
                        onClick: this.props.onGiftSelect,
                        purchase: e
                    }, t), a.createElement(k._8, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(k.v, {
                        ariaLabel: n,
                        onClick: this.props.showGiftOptions,
                        type: k.B.Hollow
                    }, n))))
                }, t.prototype.getFormattedGiftUpgradeStartDate = function() {
                    var e = "";
                    if (this.props.giftPaidUpgrade && this.props.giftPaidUpgrade.startsAt) try {
                        e = Object(c.c)(new Date(this.props.giftPaidUpgrade.startsAt), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        c.j.debug(t, "There was an error formatting gift upgrade start date."), e = ""
                    }
                    return e
                }, t.prototype.getFormattedGiftEndDate = function() {
                    var e = "";
                    if (this.props.subEndDate) try {
                        e = Object(c.c)(new Date(this.props.subEndDate), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        c.j.debug(t, "There was an error formatting gift end date."), e = ""
                    }
                    return e
                }, t.prototype.getFormattedRenewalDate = function() {
                    var e = "";
                    if (this.props.renewsAt) try {
                        e = Object(c.c)(new Date(this.props.renewsAt), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        c.j.debug(t, "There was an error formatting sub renewal date."), e = ""
                    }
                    return e
                }, t.prototype.getCurrentSubPrice = function() {
                    switch (this.props.subbedTier) {
                        case m.a.Tier1:
                            return this.props.subscriptionProducts[0].price;
                        case m.a.Tier2:
                            return this.props.subscriptionProducts[1].price;
                        case m.a.Tier3:
                            return this.props.subscriptionProducts[2].price;
                        default:
                            return this.props.subscriptionProducts[0].price
                    }
                }, t.prototype.getSubbedHeader = function() {
                    return Object(c.d)("Your Subscription", "SubbedTopPage")
                }, t.prototype.getGiftMessage = function() {
                    return Object(c.d)("Gift A Subscription", "SubbedTopPage")
                }, t
            }(a.Component));
        n("UKw0");
        var X = n("+p4h"),
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentPage: r.Top,
                        selectedSubProductIndex: 0,
                        giftShortcut: !1
                    }, t.showTop = function() {
                        t.setState(function() {
                            return {
                                currentPage: r.Top
                            }
                        })
                    }, t.showRecipientSelect = function() {
                        t.setState(function() {
                            return {
                                currentPage: r.RecipientSelect
                            }
                        })
                    }, t.showGiftOptions = function() {
                        t.props.reportSubMenuAction({
                            action: U.a.ClickGiftSubOptions,
                            modalLevel: "second_page"
                        }), t.setState(function() {
                            return {
                                currentPage: r.GiftOptions
                            }
                        })
                    }, t.showSubOptions = function() {
                        t.props.reportSubMenuAction({
                            action: U.a.ClickMoreSubOptions,
                            modalLevel: "second_page"
                        }), t.setState(function() {
                            return {
                                currentPage: r.SubOptions
                            }
                        })
                    }, t.goToPreviousPage = function() {
                        if (t.props.reportSubMenuAction({
                                action: U.a.ClickBack,
                                modalLevel: t.state.currentPage === r.SubOptions || t.state.currentPage === r.GiftOptions ? "top_page" : "second_page"
                            }), t.state.currentPage === r.GiftOptions || t.state.currentPage === r.SubOptions || t.state.giftShortcut) return t.showTop(), void t.setState({
                            giftShortcut: !1
                        });
                        t.state.currentPage !== r.RecipientSelect || t.showGiftOptions()
                    }, t.onGiftSelect = function() {
                        if (!t.props.data.user || !t.props.data.user.subscriptionProducts) return null;
                        t.state.currentPage === r.Top ? t.setState({
                            giftShortcut: !0,
                            selectedSubProductIndex: 0
                        }) : t.setState({
                            giftShortcut: !1
                        }), t.props.reportSubMenuAction({
                            action: U.a.GiftASub,
                            checkoutButtonTier: t.props.data.user.subscriptionProducts[t.state.selectedSubProductIndex].price
                        }), t.showRecipientSelect()
                    }, t.onSelectTierTab = function(e) {
                        if (!t.props.data.user || !t.props.data.user.subscriptionProducts) return null;
                        var n, r;
                        t.tabToSubProduct || (t.tabToSubProduct = (n = t.props.data.user.subscriptionProducts, (r = new Map).set(q.b.Prime, null), n.forEach(function(e, t) {
                            r.set(t + 1, e)
                        }), r));
                        var i = t.tabToSubProduct.get(e);
                        if (i) {
                            var a = t.props.data.user.subscriptionProducts.findIndex(function(e) {
                                return e.price === i.price
                            });
                            a !== t.state.selectedSubProductIndex && t.setState({
                                selectedSubProductIndex: a
                            }), t.props.onSelectTierTab(i.price)
                        } else t.props.onSelectTierTab(m.a.Prime)
                    }, t.handleTopPageSubButtonClick = function() {
                        if (!t.props.data.user || !t.props.data.user.subscriptionProducts) return null;
                        t.props.reportSubMenuAction({
                            action: U.a.ClickCheckout,
                            checkoutButtonTier: t.props.data.user.subscriptionProducts[0].price
                        })
                    }, t.onSubscribedWithPrime = function() {
                        t.props.onSubscribedWithPrime(), Object(b.e)(X, {
                            login: t.props.channelLogin
                        }, function(e) {
                            return e.user && e.user.self && (e.user.self.canPrimeSubscribe = !1, e.user.self.subscriptionBenefit = {
                                id: Object(v.a)(),
                                platform: "WEB",
                                purchasedWithPrime: !0,
                                tier: m.a.Prime,
                                endsAt: null,
                                renewsAt: null,
                                paidUpgrade: null,
                                gift: {
                                    isGift: !1,
                                    gifter: null,
                                    __typename: "SubscriptionGift"
                                },
                                __typename: "SubscriptionBenefit"
                            }), e
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.channelLogin !== this.props.channelLogin && this.setState({
                        currentPage: r.Top,
                        selectedSubProductIndex: 0,
                        giftShortcut: !1
                    })
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return c.j.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), a.createElement(k._8, {
                        display: k.R.Flex,
                        alignItems: k.c.Center,
                        justifyContent: k._7.Center,
                        className: "channel-header__subscription-modal"
                    }, a.createElement(k._10, {
                        fillContent: !0
                    }));
                    if (!this.props.data.user || !this.props.data.user.subscriptionProducts) return c.j.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), null;
                    c.j.debug("rendering balloon", {
                        state: this.state
                    });
                    var e, t = a.createElement(k._14, null),
                        n = !1,
                        i = this.props.data.user.subscriptionProducts,
                        o = !0;
                    if (this.props.isEsportChannel) return this.getEsportPage();
                    switch (this.state.currentPage) {
                        case r.Top:
                            if (!this.props.isSubscribed) {
                                e = this.getUnsubbedTopPage();
                                break
                            }
                            e = this.getSubbedTopPage(), n = !0;
                            break;
                        case r.SubOptions:
                            if (this.props.isSubscribed) {
                                e = this.getPaidOptionsPage(!0), o = !1;
                                break
                            }
                            e = this.getPaidOptionsPage(!1);
                            break;
                        case r.GiftOptions:
                            e = this.getGiftOptionsPage(), n = !0;
                            break;
                        case r.RecipientSelect:
                            e = this.getGiftRecipientSearchPage(), i = [i[this.state.selectedSubProductIndex]], n = !0;
                            break;
                        default:
                            if (!this.props.isSubscribed) {
                                e = this.getUnsubbedTopPage();
                                break
                            }
                            e = this.getSubbedTopPage(), n = !0
                    }
                    return o && (t = a.createElement(Y.a, {
                        subscriptionProducts: i,
                        isGift: n
                    })), a.createElement(k._8, {
                        key: "subscribe-balloon"
                    }, t, e)
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? a.createElement(G, {
                        key: "gift-recipient-search-page",
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.data.user.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        isEsportChannel: this.props.isEsportChannel
                    }) : null
                }, t.prototype.getGiftOptionsPage = function() {
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? a.createElement(K, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.data.user.displayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.data.user.subscriptionProducts,
                        isGift: !0,
                        onGiftSelect: this.onGiftSelect,
                        isSubscribed: !1,
                        header: Object(c.d)("Choose A Gift Subscription", "SubscribeBalloon"),
                        channelLogin: this.props.channelLogin
                    }) : null
                }, t.prototype.getPaidOptionsPage = function(e) {
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? a.createElement(K, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.data.user.displayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.data.user.subscriptionProducts,
                        isSubscribed: e,
                        header: Object(c.d)("All Paid Subscriptions", "SubscribeBalloon"),
                        channelLogin: this.props.channelLogin
                    }) : null
                }, t.prototype.getSubbedTopPage = function() {
                    if (!this.props.data.user || !this.props.data.user.self || !this.props.data.user.self.subscriptionBenefit) return null;
                    var e = this.props.data.user.self.subscriptionBenefit.gift,
                        t = e && e.isGift ? e.gifter.displayName : null,
                        n = !(!e || !e.isGift);
                    return a.createElement($, {
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        channelDisplayName: this.props.data.user.displayName,
                        canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                        isGift: n,
                        handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                        isNonStandardSub: this.props.isNonStandardSub,
                        subEndDate: this.props.data.user.self.subscriptionBenefit.endsAt,
                        giftPaidUpgrade: this.props.data.user.self.subscriptionBenefit.paidUpgrade,
                        onGiftSelect: this.onGiftSelect,
                        onSelectTierTab: this.onSelectTierTab,
                        onSubscribedWithPrime: this.onSubscribedWithPrime,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        showGiftOptions: this.showGiftOptions,
                        showSubOptions: this.showSubOptions,
                        subbedPlatform: this.props.data.user.self.subscriptionBenefit.platform,
                        renewsAt: this.props.data.user.self.subscriptionBenefit.renewsAt,
                        showRecipientSelect: this.showRecipientSelect,
                        subbedTier: this.props.subbedTier,
                        giftSender: t,
                        subscriptionProducts: this.props.data.user ? this.props.data.user.subscriptionProducts : [],
                        userHasPrime: !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    })
                }, t.prototype.getUnsubbedTopPage = function() {
                    return this.props.data.user ? a.createElement(Q, {
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                        handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                        inPrimeRegion: this.props.inPrimeRegion,
                        isNonStandardSub: this.props.isNonStandardSub,
                        onSubscribedWithPrime: this.onSubscribedWithPrime,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        showGiftOptions: this.showGiftOptions,
                        showSubOptions: this.showSubOptions,
                        subscriptionProducts: this.props.data.user ? this.props.data.user.subscriptionProducts : [],
                        userHasPrime: !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    }) : null
                }, t.prototype.getEsportPage = function() {
                    return this.props.data.user ? a.createElement(k._8, {
                        key: "subscribe-balloon"
                    }, a.createElement(H, {
                        channelLogin: this.props.channelLogin,
                        handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.data.user ? this.props.data.user.subscriptionProducts : [],
                        isSubscribed: this.props.isSubscribed,
                        userHasPrime: !!this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        currentPage: this.state.currentPage,
                        showTop: this.showTop,
                        showRecipientSelect: this.showRecipientSelect,
                        isEsportGiftingApproved: this.props.isEsportGiftingApproved
                    })) : null
                }, t = i.__decorate([Object(d.a)(X, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(l.d)("SubscribeBalloon")], t)
            }(a.Component),
            J = n("4MRZ"),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeTierPrice: null,
                        inPrimeRegion: !1
                    }, t.modalLevel = "top_page", t.reportSubMenuAction = function(e) {
                        var n = !!(t.props.data.user && t.props.data.user.self && t.props.data.user.self.subscriptionBenefit),
                            r = t.props.data.requestInfo && Object(g.a)(t.props.data.requestInfo.countryCode);
                        Object(U.b)({
                            action: e.action || "",
                            channelLogin: t.props.channelLogin || "",
                            channelID: t.props.data && t.props.data.user.id,
                            checkoutButtonTier: e.checkoutButtonTier || (t.state.activeTierPrice || m.a.Prime).slice(),
                            hasSubCredit: !!t.props.data.user.self && t.props.data.user.self.canPrimeSubscribe,
                            hostChannelID: t.props.hostChannelID,
                            hostChannelLogin: t.props.hostChannelLogin,
                            isMenuOpen: !(e.action === U.a.OpenSubMenu),
                            sub_location: "channel_page",
                            modal: !n,
                            modalLevel: n ? "" : t.modalLevel.slice(),
                            showPrimeContent: r,
                            giftRecipient: e.giftRecipient || null
                        }), !e.modalLevel || e.action !== U.a.ClickMoreSubOptions && e.action !== U.a.ClickBack || (t.modalLevel = e.modalLevel, t.setState({
                            activeTierPrice: m.a.Prime
                        }))
                    }, t.handleMenuToggle = function(e) {
                        t.reportSubMenuAction({
                            action: e ? U.a.CloseSubMenu : U.a.OpenSubMenu
                        })
                    }, t.onSelectTierTab = function(e) {
                        t.state.activeTierPrice !== e && t.setState({
                            activeTierPrice: e
                        })
                    }, t.onSubscribedWithPrime = function() {
                        t.reportSubMenuAction({
                            action: U.a.SubWithPrime
                        }), t.modalLevel = ""
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.props.reportInteractive()
                }, t.prototype.componentDidMount = function() {
                    this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.props.data && !this.props.data.loading && this.props.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch()
                }, t.prototype.render = function() {
                    if (!this.isUserDataReady(this.props) || !this.hasSubscriptionProducts(this.props)) return null;
                    if (this.props.hideEsportsSubscription && Object(h.a)(this.props.data.user.id, this.props.sessionUser)) return null;
                    var e = this.props.data.requestInfo && Object(g.a)(this.props.data.requestInfo.countryCode),
                        t = !!(this.props.data.user && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit),
                        n = Object(h.a)(this.props.data.user.id, this.props.sessionUser),
                        r = Object(h.b)(this.props.data.user.id, this.props.sessionUser),
                        i = 1 === this.props.data.user.subscriptionProducts.length,
                        o = null;
                    this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && (o = this.props.data.user.self.subscriptionBenefit.purchasedWithPrime ? m.a.Prime : this.props.data.user.self.subscriptionBenefit.tier, this.modalLevel = ""), this.props.data.user.subscriptionProducts.some(this.isSubscriptionProductInvalid) && (i = !0);
                    var s, l = t ? Object(c.d)("All-Access Pass", "SubscribeButton") : Object(c.d)("Get the All-Access Pass", "SubscribeButton");
                    if (t) {
                        var d = i ? Object(c.d)("Subscribed", "SubscribeButton") : Object(c.d)("Gift A Sub", "SubscribeButton");
                        if (s = this.props.hostChannelID ? Object(c.d)("Subscribed to {username}", {
                                username: this.props.data.user.displayName
                            }, "SubscribeButton") : d, i && !n) return a.createElement(k.v, {
                            disabled: !0,
                            ariaLabel: s,
                            icon: k._25.Star
                        }, s);
                        n && (s = l)
                    } else s = n ? l : this.props.hostChannelID ? Object(c.d)("Subscribe to {username}", {
                        username: this.props.data.user.displayName
                    }, "SubscribeButton") : Object(c.d)("Subscribe", "SubscribeButton");
                    var p = o === m.a.Prime ? k._25.Crown : k._25.Star,
                        f = t ? "subscribed-button" : "subscribe-button",
                        b = a.createElement(k.v, {
                            "data-a-target": f,
                            "data-test-selector": "subscribe-button__dropdown",
                            ariaLabel: s,
                            type: t ? k.B.Success : k.B.Default,
                            dropdown: !0,
                            icon: t ? p : void 0
                        }, s),
                        v = this.props.hostChannelID ? k.r.TopLeft : k.r.BottomRight;
                    return a.createElement(u.a, {
                        onToggle: this.handleMenuToggle
                    }, b, a.createElement(k.q, {
                        size: k.s.Large,
                        direction: v,
                        "data-a-target": "sub-balloon"
                    }, a.createElement(Z, {
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin || "",
                        inPrimeRegion: e,
                        isNonStandardSub: i,
                        onSelectTierTab: this.onSelectTierTab,
                        onSubscribedWithPrime: this.onSubscribedWithPrime,
                        reportSubMenuAction: this.reportSubMenuAction,
                        subbedTier: o || m.a.Prime,
                        userHasPrime: !1,
                        isSubscribed: t,
                        isEsportChannel: n,
                        isEsportGiftingApproved: r
                    })))
                }, t.prototype.hasSubscriptionProducts = function(e) {
                    return e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0
                }, t.prototype.isUserDataReady = function(e) {
                    return e.data && e.data.user && !e.data.loading && !e.data.error
                }, t.prototype.isSubscriptionProductInvalid = function(e) {
                    return !e.emoteSetID
                }, t = i.__decorate([Object(d.a)(J, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(p.a)([{
                    topic: function(e) {
                        return Object(f.x)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }])], t)
            }(a.Component),
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(ee, {
                        authToken: this.props.authToken,
                        sessionUser: this.props.sessionUser,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        channelLogin: this.props.channelLogin,
                        updateContainerWidth: this.props.updateContainerWidth,
                        hideEsportsSubscription: this.props.hideEsportsSubscription,
                        reportInteractive: this.reportInteractive
                    })
                }, t = i.__decorate([Object(l.d)("SubscribeButton")], t)
            }(a.Component);
        var ne = Object(o.b)(function(e) {
            return {
                authToken: Object(s.a)(e),
                sessionUser: Object(s.c)(e)
            }
        })(te);
        n.d(t, !1, function() {
            return te
        }), n.d(t, "a", function() {
            return ne
        }), n.d(t, !1, function() {
            return "subscribe-button__dropdown"
        }), n.d(t, !1, function() {
            return ee
        })
    },
    "81qH": function(e, t, n) {
        "use strict";
        var r = n("aBed");
        n.d(t, "VideoPreviewCard", function() {
            return r.a
        });
        var i = n("a4C9"),
            a = (n.n(i), n("XYqD"));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return a.a
        })
    },
    "9GX+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("3zLD"),
            o = n("CIox"),
            s = n("6sO2"),
            l = n("7vx8"),
            c = n("j7/Y"),
            u = n("w9tK"),
            d = n("vH/s"),
            p = n("CSlQ"),
            m = n("Kloa"),
            h = n("P3dd"),
            g = n("Kckk"),
            f = n("c6bv"),
            b = n("RH2O"),
            v = n("c8Oh"),
            y = n("v5ho"),
            _ = n("AadB"),
            k = n("Odds"),
            S = n("PCKG"),
            T = (n("MTjQ"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return null;
                    if (this.props.data.loading) return i.createElement(k._8, null, i.createElement(k._10, {
                        fillContent: !0
                    }));
                    var e = this.props.data,
                        t = e.directory.streams.edges.filter(function(e) {
                            var t = e.node;
                            return t.broadcaster && t.broadcaster.login && t.broadcaster.id
                        }).map(function(e, t) {
                            var n = e.node;
                            return i.createElement(_.b, {
                                directoryName: "fortnite",
                                directoryType: y.a.Games,
                                streamIndex: t,
                                streamNode: n,
                                key: n.id,
                                showPreview: !!n.broadcaster && !!n.broadcaster.roles && !!n.broadcaster.roles.isPartner
                            })
                        });
                    return i.createElement(k._8, {
                        className: "twitch-prime-streamers__tower",
                        flexShrink: 0,
                        "data-target": "twitch-prime-streamers",
                        "data-test-selector": "twitch-prime-streamers-grid",
                        padding: {
                            x: 2
                        },
                        margin: {
                            x: "auto"
                        }
                    }, i.createElement(k._8, {
                        margin: {
                            y: 1
                        },
                        className: "twitch-prime-streamers__count"
                    }, i.createElement(k.Q, {
                        type: k._49.H3,
                        color: k.K.Link,
                        bold: !0
                    }, Object(s.d)("Check out Fortnite on Twitch.tv", "TwitchPrimeStreamers")), i.createElement(k.Q, {
                        type: k._49.H4,
                        color: k.K.Link
                    }, Object(s.d)("{viewers, number} viewers right now", {
                        viewers: e.directory && e.directory.viewersCount || 0
                    }, "TwitchPrimeStreamers"))), i.createElement(k._55, {
                        gutterSize: k._57.Small,
                        childWidth: k._56.Large,
                        children: t,
                        center: !0
                    }), i.createElement(k._8, {
                        margin: {
                            y: 1
                        },
                        className: "twitch-prime-streamers__game-page",
                        textAlign: k._45.Center
                    }, i.createElement(k.O, {
                        to: "/directory/game/Fortnite",
                        hoverUnderlineNone: !1,
                        type: k.P.Default
                    }, Object(s.d)("View more Fortnite on Twitch.tv >", "TwitchPrimeStreamers"))))
                }, t
            }(i.Component)),
            w = Object(a.compose)(Object(p.d)("TwitchPrimeStreamers"), Object(l.a)(S, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            name: decodeURIComponent("fortnite"),
                            limit: 4,
                            languages: e.languagePreferences
                        }
                    }
                }
            }))(T);
        var P = Object(b.b)(function(e) {
                return {
                    languagePreferences: Object(v.a)(e)
                }
            }, null)(w),
            E = n("dlQw"),
            O = n("2655"),
            C = (n("Ql3t"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getFortniteOffer = function() {
                        var e = s.b.get(E.b, E.a),
                            n = t.props.data,
                            r = n && n.primeOffers,
                            i = r && r.filter(function(t) {
                                return t.id === e
                            });
                        return i && i[0]
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data;
                    if (e && e.loading) return i.createElement(k._10, {
                        fillContent: !0
                    });
                    var t = this.getFortniteOffer();
                    return e && e.error || !t || !t.self || !t.self.hasEntitlement ? i.createElement(o.b, {
                        to: "/prime/fortnite"
                    }) : i.createElement(k._8, {
                        className: "twitch-prime-success",
                        "data-test-selector": "twitch-prime-success-page"
                    }, i.createElement(k._8, {
                        textAlign: k._45.Center,
                        className: "twitch-prime-success__header"
                    }, i.createElement(f.a, {
                        renderOfferImage: !0
                    }, i.createElement(k._8, null, i.createElement(k._8, {
                        margin: {
                            y: 2
                        }
                    }, i.createElement(k.Q, {
                        type: k._49.H1,
                        color: k.K.Overlay,
                        transform: k._48.Uppercase,
                        bold: !0
                    }, Object(s.d)("Loot acquired!", "FortniteSuccess"))), i.createElement(k._8, {
                        margin: {
                            y: 2
                        }
                    }, i.createElement(k.Q, {
                        type: k._49.H3,
                        color: k.K.Overlay,
                        transform: k._48.Uppercase,
                        bold: !0
                    }, Object(s.d)("Load up Fortnite and your rewards will be waiting for you!", "FortniteSuccess")))), i.createElement(k._8, {
                        padding: {
                            y: 2
                        }
                    }, i.createElement(k.Q, {
                        type: k._49.H3,
                        color: k.K.Overlay,
                        bold: !0
                    }, Object(s.d)("Problems? <x:link>Click here ›</x:link>", {
                        "x:link": function(e) {
                            return i.createElement(k.O, {
                                to: "#faq",
                                hoverUnderlineNone: !1,
                                key: e,
                                type: k.P.Overlay
                            }, e)
                        }
                    }, "FortniteSuccess"))))), i.createElement(P, null), i.createElement(m.a, {
                        hash: this.props.location.hash.replace("#", "")
                    }), i.createElement(h.a, {
                        partnerSocialLink: "https://twitter.com/FortniteGame",
                        partnerSocialText: "@FortniteGame"
                    }))
                }, t
            }(i.Component)),
            R = Object(a.compose)(Object(l.a)(O, {
                options: function() {
                    return {
                        variables: {
                            dateOverride: Object(g.e)()
                        }
                    }
                }
            }), Object(p.d)("TwitchPrimeSuccessPage", {
                destination: u.a.TwitchPrimeSuccessPage
            }), Object(c.a)({
                location: d.PageviewLocation.TwitchPrimeSuccessPage
            }))(C);
        n.d(t, "TEST_SELECTOR", function() {
            return "twitch-prime-success-page"
        }), n.d(t, "TwitchPrimeSuccessPageComponent", function() {
            return C
        }), n.d(t, "TwitchPrimeSuccessPage", function() {
            return R
        })
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("Aj/L"),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var i, a, o, s;
                        return r.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, i), o = r.__assign({}, t, {
                                        body: a
                                    }), [4, this._fetch(e, o)];
                                case 1:
                                    return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, l.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var i, a;
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((i = o.sent()).error || i.requestError) throw new Error("Error while making request");
                                    return a = r.__assign({}, i, {
                                        body: i.body
                                    }), [2, Promise.resolve(a)];
                                case 2:
                                    throw o.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, i.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, a;
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
                                    return i = r.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = i), [3, 4];
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
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var n = i.o.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": i.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(a.c)(n);
                    return o && (r.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (r["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e.logger = i.o.logger.withCategory("legacy-api"), e
            }()
    },
    A5Hr: function(e, t, n) {
        "use strict";
        var r, i = n("TToO"),
            a = n("GiK3"),
            o = n("RH2O"),
            s = n("2KeS"),
            l = n("6sO2"),
            c = n("7vx8"),
            u = n("u8SD"),
            d = n("Kxgf"),
            p = n("oIkB"),
            m = n("HM6l"),
            h = n("vH/s"),
            g = n("CSlQ"),
            f = n("Odds"),
            b = (n("Vr0l"), "report-wizard-block"),
            v = "report-wizard-unblock",
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        userBlocked: t.props.userBlocked || !1
                    }, t.renderBlock = function() {
                        return a.createElement(f.O, {
                            hoverUnderlineNone: !0,
                            onClick: t.handleBlock,
                            "data-test-selector": b
                        }, a.createElement(f._8, {
                            display: f.R.Flex,
                            alignItems: f.c.Center
                        }, a.createElement(f._24, {
                            type: f._26.Brand,
                            asset: f._25.Ban
                        }), a.createElement(f._8, {
                            margin: {
                                left: .5
                            }
                        }, Object(l.d)("Block {user}", {
                            user: t.props.targetUser.displayName
                        }, "ReportWizardBlockActions"))))
                    }, t.renderUnblock = function() {
                        return a.createElement(f._8, {
                            className: "reporting-wizard__block-actions",
                            display: f.R.Flex,
                            alignItems: f.c.Center
                        }, a.createElement(f._24, {
                            type: f._26.Success,
                            asset: f._25.FollowCheck
                        }), a.createElement(f._8, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(f.Q, {
                            className: "block-user__success",
                            type: f._49.Span
                        }, Object(l.d)("{user} blocked", {
                            user: t.props.targetUser.displayName
                        }, "ReportWizardBlockActions"))), a.createElement(f.O, {
                            hoverUnderlineNone: !0,
                            onClick: t.handleUnblock,
                            "data-test-selector": v
                        }, a.createElement(f._8, {
                            margin: {
                                left: .5
                            }
                        }, Object(l.d)("Unblock", "ReportWizardBlockActions"))))
                    }, t.handleBlock = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                return this.props.onBlock(), this.setState({
                                    userBlocked: !0
                                }), [2]
                            })
                        })
                    }, t.handleUnblock = function() {
                        t.props.onUnblock(), t.setState({
                            userBlocked: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock();
                    return a.createElement(f._35, {
                        borderTop: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            top: 1
                        }
                    }, a.createElement(f._8, null, Object(l.d)("Would you like to block {user}?", {
                        user: this.props.targetUser.displayName
                    }, "ReportWizardBlockActions")), a.createElement(f._8, {
                        margin: {
                            y: 1
                        }
                    }, Object(l.d)("By blocking them, you will no longer see their messages, and they will not be able to host you or add you as a friend.", "ReportWizardBlockActions")), a.createElement(f._8, {
                        margin: {
                            top: 1
                        }
                    }, e))
                }, t
            }(a.Component),
            _ = n("mw/a");
        ! function(e) {
            e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
        }(r || (r = {}));
        var k, S = {
                generalFilter: function() {
                    return Object(l.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                },
                me: function() {
                    return Object(l.d)("Me", "ReportModalWizard")
                },
                someoneElse: function() {
                    return Object(l.d)("Someone else", "ReportModalWizard")
                },
                sexuallyCoercive: function() {
                    return Object(l.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                },
                abusiveViolence: function() {
                    return Object(l.d)("They're threatening violence or physical harm", "ReportModalWizard")
                },
                commitingViolence: function() {
                    return Object(l.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                },
                threatening: function() {
                    return Object(l.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                },
                abusive: function() {
                    return Object(l.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                }
            },
            T = {
                input_description: {
                    getTitle: function() {
                        return Object(l.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                    },
                    value: "description",
                    type: r.Textarea,
                    required: !0
                },
                input_link: {
                    getTitle: function() {
                        return Object(l.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                    },
                    rows: 2,
                    value: "external links",
                    type: r.Textarea
                },
                input_usernames: {
                    getTitle: function() {
                        return Object(l.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                    },
                    value: "other usernames",
                    rows: 2,
                    type: r.Textarea
                },
                input_connection: {
                    getTitle: function() {
                        return Object(l.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                    },
                    value: "offsite content connection",
                    type: r.Textarea
                },
                input_comments: {
                    getTitle: function() {
                        return Object(l.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                    },
                    value: "comments",
                    type: r.Textarea
                },
                input_identifyOwner: {
                    getTitle: function() {
                        return Object(l.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                    },
                    rows: 2,
                    value: "connect account owner",
                    type: r.Textarea
                },
                endBlurb_socialmedia: {
                    getTitle: function() {
                        return Object(l.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                    },
                    type: r.Text
                },
                endBlurb_threat: {
                    getTitle: function() {
                        return Object(l.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                    },
                    type: r.Text
                },
                endLink_selfharm: {
                    getTitle: function() {
                        return Object(l.d)("Learn more about mental health support", "ReportModalWizard")
                    },
                    value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                    type: r.Link
                },
                endLink_DMCA: {
                    getTitle: function() {
                        return Object(l.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                    type: r.Link
                },
                endLink_trademark: {
                    getTitle: function() {
                        return Object(l.d)("View our Trademark Policy", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/trademark-policy/",
                    type: r.Link
                },
                endLink_devAgreement: {
                    getTitle: function() {
                        return Object(l.d)("View our Developer Agreement", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/developer-agreement/",
                    type: r.Link
                },
                endLink_eventCoC: {
                    getTitle: function() {
                        return Object(l.d)("View our Events Code of Conduct", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                    type: r.Link
                },
                messaging_general: {
                    getTitle: S.generalFilter,
                    value: "general_messaging",
                    omitFromDescription: !0
                },
                profile_general: {
                    getTitle: S.generalFilter,
                    value: "general_profile",
                    omitFromDescription: !0
                },
                maliciousRaid: {
                    getTitle: function() {
                        return Object(l.d)("They're participating in a malicious raid", "ReportModalWizard")
                    },
                    value: "malicious raid",
                    reportReason: _.b.Harassment
                },
                violence: {
                    getTitle: function() {
                        return Object(l.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                    },
                    value: "violence/threats",
                    reportReason: _.b.Harm
                },
                report_username: {
                    getTitle: function() {
                        return Object(l.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                    },
                    value: "inappropriate username",
                    reportReason: _.b.OffensiveUsername
                },
                report_emotes: {
                    getTitle: function() {
                        return Object(l.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                    },
                    value: "inappropriate emotes",
                    reportReason: _.b.Other
                },
                abusive: {
                    getTitle: function() {
                        return Object(l.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                    },
                    value: "abusive"
                },
                scam: {
                    getTitle: function() {
                        return Object(l.d)("It contains attempts to scam other community members", "ReportModalWizard")
                    },
                    value: "scam",
                    reportReason: _.b.Spam
                },
                emptyStream: {
                    getTitle: function() {
                        return Object(l.d)("There's nobody on the stream", "ReportModalWizard")
                    },
                    value: "empty stream"
                },
                impersonation: {
                    getTitle: function() {
                        return Object(l.d)("They're impersonating someone", "ReportModalWizard")
                    },
                    value: "impersonation",
                    reportReason: _.b.Impersonation
                },
                underage: {
                    getTitle: function() {
                        return Object(l.d)("They're underage (12 or younger)", "ReportModalWizard")
                    },
                    value: "underage",
                    reportReason: _.b.Underaged
                },
                report_ip: {
                    getTitle: function() {
                        return Object(l.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                    },
                    value: "intellectual property"
                },
                inappropriateContent: {
                    getTitle: function() {
                        return Object(l.d)("It's inappropriate or obscene", "ReportModalWizard")
                    },
                    value: "inappropriate content"
                },
                violateDevAgreement: {
                    getTitle: function() {
                        return Object(l.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                    },
                    value: "violating developer agreement"
                },
                revealPersonalInfo: {
                    getTitle: function() {
                        return Object(l.d)("They might have revealed someone's personal information", "ReportModalWizard")
                    },
                    value: "revealing personal info",
                    reportReason: _.b.Other
                },
                inappropriateBadge: {
                    getTitle: function() {
                        return Object(l.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                    },
                    value: "emote/subscriber badge",
                    reportReason: _.b.Other
                },
                noModeration: {
                    getTitle: function() {
                        return Object(l.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                    },
                    value: "not moderating chat",
                    reportReason: _.b.Other
                },
                inappropriateExtension: {
                    getTitle: function() {
                        return Object(l.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                    },
                    value: "inappropriate extension",
                    reportReason: _.b.Other
                },
                cheating: {
                    getTitle: function() {
                        return Object(l.d)("They're cheating in an online game", "ReportModalWizard")
                    },
                    value: "cheating",
                    reportReason: _.b.Cheating
                },
                bitsViolation: {
                    getTitle: function() {
                        return Object(l.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                    },
                    value: "bits violation",
                    reportReason: _.b.BitsViolation
                },
                video_labeling: {
                    getTitle: function() {
                        return Object(l.d)("Their content is labeled incorrectly", "ReportModalWizard")
                    },
                    value: "incorrect label",
                    reportReason: _.b.Miscategorized
                },
                video_inactive: {
                    getTitle: function() {
                        return Object(l.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                    },
                    value: "inactive stream",
                    reportReason: _.b.Miscategorized
                },
                video_general: {
                    getTitle: S.generalFilter,
                    value: "general_video",
                    omitFromDescription: !0
                },
                hateSpeech: {
                    getTitle: function() {
                        return Object(l.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                    },
                    value: "hate speech",
                    reportReason: _.b.HatefulConduct
                },
                harassment: {
                    getTitle: function() {
                        return Object(l.d)("They're harassing or bullying someone", "ReportModalWizard")
                    },
                    value: "harassment",
                    reportReason: _.b.Harassment
                },
                abusiveViolence: {
                    getTitle: S.abusiveViolence,
                    value: "threatening violence",
                    reportReason: _.b.Harm
                },
                commitingViolence: {
                    getTitle: S.commitingViolence,
                    value: "committing violence",
                    reportReason: _.b.Harm
                },
                swatting: {
                    getTitle: function() {
                        return Object(l.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                    },
                    value: "swatting/ddosing",
                    reportReason: _.b.Harassment
                },
                personalInfo: {
                    getTitle: function() {
                        return Object(l.d)("They're purposely revealing personal information", "ReportModalWizard")
                    },
                    value: "revealing personal info",
                    reportReason: _.b.Harassment
                },
                threat_me: {
                    getTitle: function() {
                        return Object(l.d)("At me", "ReportModalWizard")
                    },
                    value: "against me",
                    reportReason: _.b.Harm
                },
                threat_person: {
                    getTitle: function() {
                        return Object(l.d)("At someone else", "ReportModalWizard")
                    },
                    value: "against another person",
                    reportReason: _.b.Harm
                },
                threat_group: {
                    getTitle: function() {
                        return Object(l.d)("At a group of people", "ReportModalWizard")
                    },
                    value: "against group of people",
                    reportReason: _.b.Harm
                },
                threat_selfharm: {
                    getTitle: function() {
                        return Object(l.d)("They're threatening self-harm", "ReportModalWizard")
                    },
                    value: "selfharm"
                },
                inappropriate_game: {
                    getTitle: function() {
                        return Object(l.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                    },
                    value: "prohibited game",
                    reportReason: _.b.Prohibited
                },
                sexuallyViolent: {
                    getTitle: function() {
                        return Object(l.d)("Violent sexual conduct", "ReportModalWizard")
                    },
                    value: "sexually violent",
                    reportReason: _.b.SexualViolence
                },
                childAnimal: {
                    getTitle: function() {
                        return Object(l.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                    },
                    value: "sexual conduct; child or animal",
                    reportReason: _.b.SexualViolence
                },
                pornographic: {
                    getTitle: function() {
                        return Object(l.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                    },
                    value: "pornographic",
                    reportReason: _.b.SexualContent
                },
                gory: {
                    getTitle: function() {
                        return Object(l.d)("Extreme violence or gore", "ReportModalWizard")
                    },
                    value: "gory",
                    reportReason: _.b.Gore
                },
                suggestive: {
                    getTitle: function() {
                        return Object(l.d)("Sexually suggestive content", "ReportModalWizard")
                    },
                    value: "sexually suggestive",
                    reportReason: _.b.SexualContent
                },
                nudity: {
                    getTitle: function() {
                        return Object(l.d)("Full or partial nudity", "ReportModalWizard")
                    },
                    value: "nudity",
                    reportReason: _.b.SexualContent
                },
                other: {
                    getTitle: function() {
                        return Object(l.d)("There's something else wrong with it...", "ReportModalWizard")
                    },
                    value: "other",
                    reportReason: _.b.Other
                },
                evasion: {
                    getTitle: function() {
                        return Object(l.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                    },
                    value: "ban evasion"
                },
                evasion_sitewide: {
                    getTitle: function() {
                        return Object(l.d)("A sitewide ban from Twitch", "ReportModalWizard")
                    },
                    value: "sitewide ban",
                    reportReason: _.b.TosBanEvasion
                },
                evasion_chat: {
                    getTitle: function() {
                        return Object(l.d)("A chat ban from one or more channels", "ReportModalWizard")
                    },
                    value: "chat ban",
                    reportReason: _.b.ChatBanEvasion
                },
                evasion_messaging: {
                    getTitle: function() {
                        return Object(l.d)("A block from messaging me", "ReportModalWizard")
                    },
                    value: "messaging block",
                    reportReason: _.b.ChatBanEvasion
                },
                impersonation_me: {
                    getTitle: S.me,
                    value: "impersonating me",
                    reportReason: _.b.Impersonation
                },
                impersonation_brand: {
                    getTitle: function() {
                        return Object(l.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                    },
                    value: "impersonating brand",
                    reportReason: _.b.Impersonation
                },
                impersonation_other: {
                    getTitle: S.someoneElse,
                    value: "impersonating someone else",
                    reportReason: _.b.Impersonation
                },
                selfharm: {
                    getTitle: function() {
                        return Object(l.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                    },
                    value: "selfharm",
                    reportReason: _.b.SelfHarm
                },
                chat: {
                    getTitle: function() {
                        return Object(l.d)("In a stream chat message", "ReportModalWizard")
                    },
                    value: "chat"
                },
                profile: {
                    getTitle: function() {
                        return Object(l.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                    },
                    value: "profile"
                },
                video: {
                    getTitle: function() {
                        return Object(l.d)("In a live stream, video, or clip", "ReportModalWizard")
                    },
                    value: "video"
                },
                room: {
                    getTitle: function(e) {
                        return Object(l.d)("In one of {username}'s rooms", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    value: "room"
                },
                whisper: {
                    getTitle: function() {
                        return Object(l.d)("In a whisper (private message)", "ReportModalWizard")
                    },
                    value: "whisper",
                    reportContext: _.a.Whisper
                },
                username: {
                    getTitle: function() {
                        return Object(l.d)("In the username", "ReportModalWizard")
                    },
                    value: "username",
                    reportReason: _.b.OffensiveUsername
                },
                report_other: {
                    getTitle: function() {
                        return Object(l.d)("Somewhere else...", "ReportModalWizard")
                    },
                    value: "somewhere else",
                    omitFromDescription: !0
                },
                video_streamer: {
                    getTitle: function() {
                        return Object(l.d)("The streamer or channel owner", "ReportModalWizard")
                    },
                    value: "streamer"
                },
                video_someoneElse: {
                    getTitle: function() {
                        return Object(l.d)("Someone else in the video", "ReportModalWizard")
                    },
                    value: "someone else in video"
                },
                video_chatSomeone: {
                    getTitle: function() {
                        return Object(l.d)("Someone in chat", "ReportModalWizard")
                    },
                    value: "someone in chat",
                    differentTarget: !0
                },
                report_channelOwner: {
                    getTitle: function() {
                        return Object(l.d)("The channel owner", "ReportModalWizard")
                    },
                    value: "channel owner"
                },
                report_member: {
                    getTitle: function() {
                        return Object(l.d)("Another community member", "ReportModalWizard")
                    },
                    value: "community member",
                    differentTarget: !0
                },
                location_onTwitch: {
                    getTitle: function() {
                        return Object(l.d)("On Twitch", "ReportModalWizard")
                    },
                    value: "on twitch"
                },
                location_anotherSite: {
                    getTitle: function() {
                        return Object(l.d)("On another site or service", "RpoertModalWizard")
                    },
                    value: "another site"
                },
                location_TwitchEvent: {
                    getTitle: function() {
                        return Object(l.d)("In person, at a Twitch event", "ReportModalWizard")
                    },
                    value: "twitch event"
                },
                external_incitingRaids: {
                    getTitle: function() {
                        return Object(l.d)("inciting brigading or malicious raids", "ReportModalWizard")
                    },
                    reportReason: _.b.Harassment,
                    value: "brigading/raids"
                },
                external_threatening: {
                    getTitle: S.threatening,
                    value: "threatening"
                },
                external_harassment: {
                    getTitle: S.abusive,
                    value: "hateful/harassing"
                },
                external_abusiveViolence: {
                    getTitle: S.abusiveViolence,
                    value: "external site; threatening violence",
                    reportReason: _.b.Harm
                },
                external_commitingViolence: {
                    getTitle: S.commitingViolence,
                    value: "external site; committing violence",
                    reportReason: _.b.Harm
                },
                conduct_impersonation: {
                    getTitle: function() {
                        return Object(l.d)("impersonating someone", "ReportModalWizard")
                    },
                    value: "impersonation",
                    reportReason: _.b.Impersonation
                },
                spam: {
                    getTitle: function() {
                        return Object(l.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                    },
                    value: "spam",
                    reportReason: _.b.Spam
                },
                spam_bot: {
                    getTitle: function() {
                        return Object(l.d)("I think this is a bot account", "ReportModalWizard")
                    },
                    value: "bot"
                },
                spam_scam: {
                    getTitle: function() {
                        return Object(l.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                    },
                    value: "scam or malicious links"
                },
                spam_repeated: {
                    getTitle: function() {
                        return Object(l.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                    },
                    value: "repeat messages"
                }
            },
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        var n = e.target,
                            r = n.name,
                            i = n.value;
                        t.props.onChangeText(r, i)
                    }, t.onSelect = function(e) {
                        if (t.props.currentCard.items && e.currentTarget.parentElement) {
                            var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                r = t.props.currentCard.items[n];
                            t.props.onChangeRadio(r)
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.currentCard.getDescription ? a.createElement(f._8, {
                        padding: {
                            bottom: 1
                        }
                    }, this.props.currentCard.getDescription()) : null;
                    return a.createElement(f._8, {
                        className: "reporting-wizard-card"
                    }, e, a.createElement(f.W, {
                        label: this.props.currentCard.getLabel ? this.props.currentCard.getLabel() : ""
                    }, this.renderCardItems()))
                }, t.prototype.renderCardItems = function() {
                    var e = this,
                        t = this.props.currentCard,
                        n = [];
                    return t.items && t.type && (n = t.items.filter(function(e) {
                        return !!e
                    }).map(function(t, n) {
                        switch (t.type) {
                            case r.Text:
                                return a.createElement(f._8, {
                                    key: n,
                                    padding: {
                                        bottom: 1
                                    }
                                }, t.getTitle());
                            case r.Link:
                                return a.createElement(f._8, {
                                    key: n,
                                    padding: {
                                        bottom: 1
                                    }
                                }, a.createElement(f.O, {
                                    to: t.value,
                                    targetBlank: !0
                                }, a.createElement(f._8, {
                                    display: f.R.Flex
                                }, a.createElement(f._8, {
                                    display: f.R.Inline,
                                    padding: {
                                        right: .5
                                    }
                                }, a.createElement(f._24, {
                                    asset: f._25.Document
                                })), t.getTitle())));
                            case r.Textarea:
                                var i = t.value ? e.props.userTextInputs[t.value] : void 0,
                                    o = t.required && (!i || !!i && 0 === i.trim().length);
                                return a.createElement(f._8, {
                                    key: n,
                                    padding: {
                                        bottom: 1
                                    }
                                }, a.createElement(f.W, {
                                    label: t.getTitle(),
                                    labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                }, a.createElement(f._46, {
                                    onChange: e.onChange,
                                    rows: t.rows || 3,
                                    name: t.value,
                                    error: e.props.error && o,
                                    value: i,
                                    "data-test-selector": "report-wizard-textarea"
                                })));
                            case r.MultipleChoice:
                            default:
                                return a.createElement(f._8, {
                                    key: n,
                                    padding: {
                                        y: .5
                                    }
                                }, a.createElement(f._21, {
                                    checked: !!e.props.currentSelection && e.props.currentSelection.value === t.value,
                                    onChange: e.onSelect,
                                    label: t.getTitle(e.props.targetUser.displayName),
                                    "data-a-index": n,
                                    name: "card",
                                    value: t.value
                                }))
                        }
                    })), n
                }, t
            }(a.Component),
            P = n("LjAQ");
        ! function(e) {
            e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
        }(k || (k = {}));
        var E, O, C, R = {
                contentGeneral: function() {
                    return Object(l.d)("What would you like to report?", "ReportModalWizard")
                },
                content: function() {
                    return Object(l.d)("What's wrong with this content?", "ReportModalWizard")
                },
                identifyUser: function() {
                    return Object(l.d)("Who do you want to report?", "ReportModalWizard")
                },
                thisPersonIs: function() {
                    return Object(l.d)("This person is...", "ReportModalWizard")
                },
                relevantStatements: function() {
                    return Object(l.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                }
            },
            N = {
                report: function(e) {
                    return Object(l.d)("Report {username}", {
                        username: e
                    }, "ReportModalWizard")
                },
                reportVideo: function(e) {
                    return Object(l.d)("Report {username}'s Video", {
                        username: e
                    }, "ReportModalWizard")
                },
                reportMessage: function(e) {
                    return Object(l.d)("Report {username}'s Message", {
                        username: e
                    }, "ReportModalWizard")
                },
                reportProfile: function(e) {
                    return Object(l.d)("Report {username}'s Profile Or Other Content", {
                        username: e
                    }, "ReportModalWizard")
                },
                reportAbusive: function(e) {
                    return Object(l.d)("Report {username} for Abusive Conduct", {
                        username: e
                    }, "ReportModalWizard")
                },
                tellUsMore: function() {
                    return Object(l.d)("Tell Us More", "ReportModalWizard")
                },
                thanks: function() {
                    return Object(l.d)("Thanks for letting us know", "ReportModalWizard")
                },
                thanksConcern: function() {
                    return Object(l.d)("Thank you for your concern", "ReportModalWizard")
                }
            },
            I = {
                getDescription: function() {
                    return Object(l.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                },
                blockPrompt: !0,
                getTitle: N.thanks,
                type: k.Info,
                value: "end card"
            },
            L = {
                socialMedia: i.__assign({}, I, {
                    items: [T.endBlurb_socialmedia]
                }),
                violence: i.__assign({}, I, {
                    items: [T.endBlurb_threat]
                }),
                legal: {
                    getTitle: N.thanksConcern,
                    getDescription: function() {
                        return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                    },
                    items: [T.endLink_DMCA, T.endLink_trademark, T.endLink_devAgreement],
                    type: k.Info,
                    value: "ip end"
                },
                selfharm: {
                    getTitle: N.thanksConcern,
                    getDescription: function() {
                        return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                    },
                    items: [T.endLink_selfharm],
                    type: k.Info,
                    value: "selfharm end"
                },
                twitchEvent: {
                    getTitle: N.thanksConcern,
                    getDescription: function() {
                        return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                    },
                    items: [T.endLink_eventCoC],
                    value: "twitch event end",
                    type: k.Info
                }
            },
            x = {
                getTitle: N.report,
                getLabel: function() {
                    return Object(l.d)("Where is the problem?", "ReportModalWizard")
                },
                items: [T.video, T.whisper, T.chat, T.room, T.profile, T.username, T.report_other],
                type: k.MultipleChoice,
                value: "content type"
            },
            F = {
                identifyUser: {
                    getTitle: N.reportVideo,
                    getLabel: R.identifyUser,
                    items: [T.video_streamer, T.video_someoneElse, T.video_chatSomeone],
                    type: k.MultipleChoice,
                    value: "video identify user"
                },
                content: {
                    getTitle: N.reportVideo,
                    getLabel: R.contentGeneral,
                    items: [T.revealPersonalInfo, T.video_labeling, T.video_inactive, T.video_general, T.report_ip, T.violateDevAgreement, T.selfharm],
                    type: k.MultipleChoice,
                    value: "video report reason"
                },
                general: {
                    getTitle: N.reportVideo,
                    getLabel: R.content,
                    items: [T.report_username, T.violence, T.abusive, T.cheating, T.scam, T.inappropriateContent, T.evasion, T.impersonation, T.underage, T.bitsViolation],
                    type: k.MultipleChoice,
                    value: "video general report reason"
                }
            },
            j = {
                content: {
                    getTitle: N.reportMessage,
                    getLabel: R.contentGeneral,
                    items: [T.revealPersonalInfo, T.evasion, T.spam, T.maliciousRaid, T.report_username, T.messaging_general, T.selfharm],
                    type: k.MultipleChoice,
                    value: "message report reason"
                },
                general: {
                    getTitle: N.reportMessage,
                    getLabel: R.content,
                    items: [T.report_emotes, T.violence, T.abusive, T.inappropriateContent, T.impersonation, T.underage, T.bitsViolation],
                    type: k.MultipleChoice,
                    value: "message general report reason"
                }
            },
            D = i.__assign({}, j.content, {
                getDescription: function() {
                    return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                }
            }),
            M = {
                content: {
                    getTitle: N.reportProfile,
                    getLabel: R.contentGeneral,
                    items: [T.revealPersonalInfo, T.inappropriateBadge, T.inappropriateExtension, T.noModeration, T.profile_general, T.report_ip, T.violateDevAgreement, T.selfharm],
                    type: k.MultipleChoice,
                    value: "profile report reason"
                },
                general: {
                    getTitle: N.reportProfile,
                    getLabel: R.content,
                    items: [T.report_username, T.violence, T.abusive, T.scam, T.inappropriateContent, T.evasion, T.impersonation, T.underage, T.bitsViolation],
                    type: k.MultipleChoice,
                    value: "profile general report reason"
                }
            },
            U = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username}'s Room", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: R.identifyUser,
                items: [T.report_channelOwner, T.report_member],
                value: "room report user",
                type: k.MultipleChoice
            },
            A = {
                getTitle: N.tellUsMore,
                items: [T.input_description],
                type: k.Confirm,
                value: "tell us more"
            },
            B = {
                banEvasion: i.__assign({}, A, {
                    items: [T.input_usernames, T.input_description],
                    value: "ban evasion tell us more"
                }),
                socialMedia: i.__assign({}, A, {
                    items: [T.input_link, T.input_connection, T.input_description],
                    nextCard: L.socialMedia,
                    value: "social media tell us more"
                })
            },
            V = {
                content: {
                    getTitle: N.reportAbusive,
                    getLabel: R.relevantStatements,
                    items: [T.hateSpeech, T.harassment, T.abusiveViolence, T.commitingViolence, T.swatting, T.personalInfo],
                    type: k.MultipleChoice,
                    value: "abuse type"
                },
                violence: {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Violence or Threats", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                    },
                    items: [T.threat_me, T.threat_person, T.threat_group, T.threat_selfharm],
                    type: k.MultipleChoice,
                    value: "violence type"
                }
            },
            G = {
                identifyLocation: {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for something else...", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("Where did the problem happen?", "ReportModalWizard")
                    },
                    items: [T.location_onTwitch, T.location_anotherSite, T.location_TwitchEvent],
                    type: k.MultipleChoice,
                    value: "off-site conduct location"
                },
                externalSite: {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Conduct on Another Site or Service", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: R.thisPersonIs,
                    getDescription: function() {
                        return Object(l.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                    },
                    items: [T.external_incitingRaids, T.external_threatening, T.external_harassment],
                    type: k.MultipleChoice,
                    nextCard: B.socialMedia,
                    value: "external site conduct"
                },
                external_violence: i.__assign({}, V.violence, {
                    items: [T.threat_me, T.threat_person, T.threat_group],
                    nextCard: B.socialMedia
                }),
                external_abusive: i.__assign({}, V.content, {
                    items: [T.hateSpeech, T.harassment, T.external_abusiveViolence, T.external_commitingViolence, T.swatting, T.personalInfo],
                    nextCard: B.socialMedia
                })
            },
            H = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username}'s Spam or Malicious Links", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: R.contentGeneral,
                items: [T.spam_bot, T.spam_scam, T.spam_repeated],
                type: k.MultipleChoice,
                value: "spam type"
            },
            W = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username} for Inappropriate Content", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: R.relevantStatements,
                items: [T.inappropriate_game, T.gory, T.sexuallyViolent, T.childAnimal, T.pornographic, T.suggestive, T.nudity, T.other],
                type: k.MultipleChoice,
                value: "inappropriate content type"
            },
            z = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username} for Evading a Ban", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: function() {
                    return Object(l.d)("What kind of ban are they evading?", "ReportModalWizard")
                },
                value: "ban type",
                items: [T.evasion_chat, T.evasion_sitewide, T.evasion_messaging],
                type: k.MultipleChoice,
                nextCard: B.banEvasion
            },
            Q = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username} for Impersonation", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: function() {
                    return Object(l.d)("Who is being impersonated?", "ReportModalWizard")
                },
                getDescription: function() {
                    return Object(l.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                },
                items: [T.impersonation_me, T.impersonation_brand, T.impersonation_other],
                type: k.MultipleChoice,
                value: "impersonation type"
            },
            q = x,
            K = A,
            Y = I,
            $ = {
                video: F.identifyUser,
                whisper: D,
                chat: j.content,
                profile: M.content,
                room: U,
                "somewhere else": G.identifyLocation,
                streamer: F.content,
                "someone else in video": F.content,
                "someone in chat": j.content,
                general_video: F.general,
                general_messaging: j.general,
                general_profile: M.general,
                "channel owner": M.content,
                "community member": j.content,
                "on twitch": M.content,
                "another site": G.externalSite,
                "twitch event": L.twitchEvent,
                "brigading/raids": B.socialMedia,
                threatening: G.external_violence,
                "hateful/harassing": G.external_abusive,
                "external site; threatening violence": G.external_violence,
                "external site; committing violence": G.external_violence,
                "external site; scam": B.socialMedia,
                "ban evasion": z,
                spam: H,
                hateful: V.content,
                impersonation: Q,
                "violence/threats": V.violence,
                "threatening violence": V.violence,
                "committing violence": V.violence,
                abusive: V.content,
                "inappropriate content": W,
                "intellectual property": L.legal,
                "violating developer agreement": L.legal
            },
            X = {
                selfharm: L.selfharm,
                harm: L.violence,
                other: Y
            },
            Z = {
                CHANNEL_FEED_POST_REPORT: M.content,
                COMMUNITY_REPORT: M.content,
                CHAT_REPORT: j.content,
                CLIP_REPORT: F.content,
                EVENT_REPORT: M.content,
                EXTENSION_REPORT: M.content,
                LIVE_UP_REPORT: M.content,
                ROOM_REPORT: U,
                WHISPER_REPORT: D,
                VOD_COMMENT_REPORT: j.content
            },
            J = "report-wizard-back",
            ee = "report-wizard-close",
            te = "report-wizard-next",
            ne = "report-wizard-submit",
            re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentCard: t.props.currentCard || Z[t.props.reportContentType] || q,
                        prevCards: [],
                        currentSelection: null,
                        prevSelections: [],
                        displacedSelections: [],
                        userTextInput: {},
                        error: "",
                        reportReason: t.props.reportReason || "",
                        modalCloseTracked: !1,
                        targetUnknown: !1,
                        reportContext: t.props.reportContentType
                    }, t.renderPrimer = function() {
                        return a.createElement(f._8, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(f.Q, null, Object(l.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                    }, t.renderButtons = function() {
                        var e = Object(l.d)("Close", "ReportModalWizard"),
                            n = t.handleClose,
                            r = ee,
                            i = !1,
                            o = t.state.prevCards.length ? t.renderBack() : null;
                        switch (t.state.currentCard.type) {
                            case k.MultipleChoice:
                                e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, r = te, i = !t.state.currentSelection;
                                break;
                            case k.Confirm:
                                e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, i = !t.state.userTextInput, r = ne
                        }
                        return a.createElement(f._8, null, o, a.createElement(f.v, {
                            onClick: n,
                            disabled: i,
                            "data-test-selector": r
                        }, a.createElement(f._8, {
                            padding: {
                                x: 1
                            }
                        }, e)))
                    }, t.renderBack = function() {
                        return a.createElement(f._8, {
                            margin: {
                                right: 1
                            },
                            display: f.R.InlineBlock
                        }, a.createElement(f.v, {
                            type: f.B.Hollow,
                            onClick: t.handleBack,
                            "data-test-selector": J
                        }, a.createElement(f._8, {
                            padding: {
                                x: 1
                            }
                        }, Object(l.d)("Back", "ReportModalWizard"))))
                    }, t.getTitle = function() {
                        return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUserID ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(l.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(l.d)("Report User", "ReportModalWizard") : t.props.title
                    }, t.handleClose = function() {
                        t.setState({
                            modalCloseTracked: !0
                        }, function() {
                            return t.props.trackClose(C.Finish, t.state.currentCard.value)
                        }), t.props.onClose()
                    }, t.handleNext = function() {
                        if (t.state.currentSelection && t.state.currentSelection.value) {
                            var e = t.state.currentCard,
                                n = t.state.prevCards.concat(e),
                                r = t.state.prevSelections.concat(t.state.currentSelection),
                                i = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                o = t.state.currentSelection.reportContext || t.state.reportContext,
                                s = e.nextCard || K;
                            $[t.state.currentSelection.value] && (s = $[t.state.currentSelection.value]);
                            var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                c = s.type === k.Info;
                            t.setState({
                                currentCard: s,
                                reportReason: l,
                                prevCards: c ? [] : n,
                                prevSelections: r,
                                targetUnknown: a,
                                currentSelection: i || null,
                                displacedSelections: t.state.displacedSelections.slice(0, -1),
                                reportContext: o
                            }, function() {
                                return t.trackNavigation(O.Next, e.value)
                            })
                        }
                    }, t.createReportDescription = function() {
                        return "" + (t.state.reportContext !== t.props.reportContentType ? "report context: " + t.props.reportContentType + "\n\n" : "") + t.state.prevSelections.map(function(e) {
                            if (!e.omitFromDescription) return e.value
                        }).filter(function(e) {
                            return !!e
                        }).join(" > ") + "\n\n" + Object.keys(t.state.userTextInput).map(function(e) {
                            return e + ": " + t.state.userTextInput[e]
                        }).join("\n")
                    }, t.requiredInputsNonEmpty = function() {
                        if (t.state.currentCard.items) return 0 === t.state.currentCard.items.filter(function(e) {
                            if (e.type !== r.Textarea || !e.required) return !1;
                            var n = t.state.userTextInput[e.value],
                                i = n && 0 === n.trim().length;
                            return !n || i
                        }).length
                    }, t.handleSubmit = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, a = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, null, null, this.state.reportContext)]) : [3, 2];
                                    case 1:
                                        switch (i.sent(), this.props.submitStatus) {
                                            case P.b.FormError:
                                                this.setState({
                                                    error: e
                                                });
                                                break;
                                            case P.b.Success:
                                                r = Y, X[t] && (r = X[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                    currentCard: r,
                                                    prevCards: [],
                                                    prevSelections: [],
                                                    currentSelection: null,
                                                    displacedSelections: [],
                                                    userTextInput: {},
                                                    error: ""
                                                }, function() {
                                                    return a.trackNavigation(O.Submit)
                                                });
                                                break;
                                            case P.b.UserError:
                                                this.setState({
                                                    error: Object(l.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                });
                                                break;
                                            case P.b.MutationError:
                                            default:
                                                this.setState({
                                                    error: Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                })
                                        }
                                        return [3, 3];
                                    case 2:
                                        this.props.onError(P.b.FormError), this.setState({
                                            error: e
                                        }), i.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleBack = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, a, o = this;
                            return i.__generator(this, function(i) {
                                return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, a = this.state.displacedSelections, this.state.currentSelection && (a = a.concat(this.state.currentSelection)), t && n && this.setState({
                                    currentCard: t,
                                    currentSelection: n,
                                    displacedSelections: a,
                                    prevCards: this.state.prevCards.slice(0, -1),
                                    prevSelections: this.state.prevSelections.slice(0, -1),
                                    error: "",
                                    targetUnknown: r
                                }, function() {
                                    return o.trackNavigation(O.Back, e.value)
                                }), [2]
                            })
                        })
                    }, t.handleTextInput = function(e, n) {
                        var r = t.state.userTextInput;
                        r[e] = n, t.setState({
                            userTextInput: r
                        })
                    }, t.handleSelection = function(e) {
                        if (t.state.currentCard.items && e !== t.state.currentSelection) {
                            var n = t.state.targetUnknown;
                            if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                return e.differentTarget
                            }).length;
                            var r = t.state.reportContext;
                            (t.state.displacedSelections.filter(function(e) {
                                return e.reportContext
                            }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (r = t.props.reportContentType), t.setState({
                                currentSelection: e,
                                displacedSelections: [],
                                userTextInput: {},
                                targetUnknown: n,
                                reportContext: r
                            })
                        }
                    }, t.trackNavigation = function(e, n) {
                        t.props.trackAction(e, n, t.state.currentCard.value)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.state.modalCloseTracked || this.props.trackClose(C.Close, this.state.currentCard.value)
                }, t.prototype.render = function() {
                    var e = this.state.currentCard.type === k.Info && this.state.currentCard.blockPrompt ? a.createElement(y, {
                            targetUser: this.props.targetUser,
                            onBlock: this.props.onBlock,
                            onUnblock: this.props.onUnblock,
                            userBlocked: this.props.userBlocked
                        }) : null,
                        t = this.state.error ? a.createElement(f._35, {
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            },
                            padding: 1,
                            className: "reporting__error-container"
                        }, this.state.error) : null,
                        n = this.state.prevCards.length || this.state.currentCard.type === k.Info ? null : this.renderPrimer();
                    return a.createElement(f._35, {
                        className: "reporting-wizard",
                        display: f.R.Flex,
                        margin: {
                            x: 1
                        },
                        flexDirection: f.T.Column,
                        fullHeight: !0,
                        "data-test-card-value": this.state.currentCard.value
                    }, t, a.createElement(f.Q, {
                        bold: !0,
                        fontSize: f.V.Size4
                    }, this.getTitle()), n, a.createElement(f._8, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(w, {
                        currentCard: this.state.currentCard,
                        currentSelection: this.state.currentSelection,
                        targetUser: this.props.targetUser,
                        targetUserID: this.props.targetUserID,
                        onChangeRadio: this.handleSelection,
                        onChangeText: this.handleTextInput,
                        userTextInputs: this.state.userTextInput,
                        error: this.props.submitStatus === P.b.FormError && !!this.state.error
                    }), e), this.renderButtons())
                }, t
            }(a.Component),
            ie = n("xwpJ"),
            ae = n("mmQh"),
            oe = n("mRH2"),
            se = n("IRHd");
        n.d(t, "c", function() {
                return O
            }), n.d(t, "a", function() {
                return C
            }), n.d(t, "b", function() {
                return ce
            }),
            function(e) {
                e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
            }(E || (E = {})),
            function(e) {
                e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
            }(O || (O = {})),
            function(e) {
                e.Close = "close", e.Finish = "finish"
            }(C || (C = {}));
        var le = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.handleSubmit = function(e, t, r, a, o) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, s, c, u, d = this;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (e !== P.a) return [3, 5];
                                    c = {
                                        userID: this.props.reportContext.targetUserID,
                                        communityID: r || "",
                                        reason: t
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(p.a)(c))];
                                case 2:
                                    return i.sent(), l.o.tracking.track(h.SpadeEventType.CommunityModeration, {
                                        community_id: r,
                                        name: a,
                                        is_official: !1,
                                        user_id: this.props.sessionUser && this.props.sessionUser.id,
                                        target_id: this.props.reportContext.targetUserID,
                                        action: "report",
                                        reason: e
                                    }), this.setState({
                                        submitStatus: P.b.Success
                                    }, function() {
                                        d.state.showWizard || d.trackAction(E.Submit)
                                    }), [3, 4];
                                case 3:
                                    return n = i.sent(), l.j.error(n, "ReportUserInCommunity Mutation failed."), this.setState({
                                        submitStatus: P.b.MutationError
                                    }), [3, 4];
                                case 4:
                                    return [3, 9];
                                case 5:
                                    if (s = o === _.a.Whisper ? o : this.props.reportContext.contentType, c = {
                                            description: t,
                                            reason: e,
                                            content: s,
                                            contentID: this.props.reportContext.contentID,
                                            extra: this.props.reportContext.extra,
                                            targetID: this.props.reportContext.targetUserID
                                        }, this.props.reportContext.contentType === _.a.Community && this.props.reportContext.extra && (c.description = Object(ie.a)(this.props.reportContext.extra, t)), null === c.targetID) return this.setState({
                                        submitStatus: P.b.UserError
                                    }), [2];
                                    i.label = 6;
                                case 6:
                                    return i.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(p.a)(c))];
                                case 7:
                                    return i.sent(), this.props.reportContext.contentType === _.a.Community && l.o.tracking.track(h.SpadeEventType.CommunityReport, {
                                        community_id: this.props.reportContext.contentID,
                                        name: this.props.reportContext.extra,
                                        is_official: !1,
                                        user_id: this.props.sessionUser && this.props.sessionUser.id,
                                        reason: e
                                    }), this.setState({
                                        submitStatus: P.b.Success
                                    }, function() {
                                        d.state.showWizard || d.trackAction(E.Submit)
                                    }), [3, 9];
                                case 8:
                                    return u = i.sent(), l.j.error(u, "ReportUser Mutation failed."), this.setState({
                                        submitStatus: P.b.MutationError
                                    }), [3, 9];
                                case 9:
                                    return [2]
                            }
                        })
                    })
                }, n.handleChildError = function(e) {
                    return n.setState({
                        submitStatus: e
                    })
                }, n.handleClose = function() {
                    n.props.onClose && n.props.onClose(n.state.submitStatus, n.state.userBlocked)
                }, n.onBlock = function() {
                    n.props.blockUserMutation(n.props.reportContext.targetUserID, void 0, void 0, i.__assign({}, n.props.sessionUser, {
                        __typename: "User"
                    })), n.setState({
                        userBlocked: !0
                    })
                }, n.onUnblock = function() {
                    n.props.unblockUserMutation(n.props.reportContext.targetUserID, i.__assign({}, n.props.sessionUser, {
                        __typename: "User"
                    })), n.setState({
                        userBlocked: !1
                    })
                }, n.trackOpen = function(e) {
                    n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(O.Open, void 0, e) : n.trackAction(E.Open), n.setState({
                        openEventSent: !0
                    }))
                }, n.trackClose = function(e, t) {
                    n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(O.Close, t, void 0, e) : n.trackAction(E.Close), n.setState({
                        closeEventSent: !0
                    }))
                }, n.trackWizardAction = function(e, t, r, i) {
                    l.o.tracking.track(h.SpadeEventType.ReportWizardFlowAction, {
                        ui_context: n.props.reportContext.contentType,
                        target_user_id: n.props.reportContext.targetUserID,
                        report_sent: n.state.submitStatus === P.b.Success,
                        modal_type: "wizard_v1",
                        extra_user_id: n.props.reportContext.additionalTrackingID,
                        action: e,
                        close_type: i,
                        report_session_id: n.reportID,
                        current_step: t,
                        navigated_to: r
                    })
                }, n.trackAction = function(e) {
                    l.o.tracking.track(h.SpadeEventType.ReportFlowAction, {
                        ui_context: n.props.reportContext.contentType,
                        target_user_id: n.props.reportContext.targetUserID,
                        report_sent: n.state.submitStatus === P.b.Success,
                        extra_user_id: n.props.reportContext.additionalTrackingID,
                        action: e,
                        report_session_id: n.reportID
                    })
                }, n.reportID = Object(m.a)();
                var r = l.o.experiments.getAssignment("TWILIGHT_NEW_REPORTING_WIZARD");
                return n.state = {
                    submitStatus: P.b.Unsubmitted,
                    showWizard: "yes" === r,
                    openEventSent: !1,
                    closeEventSent: !1,
                    userBlocked: !1
                }, n
            }
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                this.trackOpen()
            }, t.prototype.componentWillUnmount = function() {
                this.handleClose(), this.state.showWizard || this.trackClose()
            }, t.prototype.render = function() {
                var e = {
                    onClose: this.handleClose,
                    onError: this.handleChildError,
                    onSubmit: this.handleSubmit,
                    reportContentType: this.props.reportContext.contentType,
                    submitStatus: this.state.submitStatus,
                    targetUserID: this.props.reportContext.targetUserID,
                    title: this.props.title,
                    defaultDescription: this.props.defaultDescription
                };
                return this.state.showWizard ? this.props.data.loading ? a.createElement(f._10, null) : a.createElement(re, i.__assign({}, e, {
                    user: this.props.sessionUser,
                    targetUser: this.props.data.user,
                    onBlock: this.onBlock,
                    onUnblock: this.onUnblock,
                    trackAction: this.trackWizardAction,
                    trackClose: this.trackClose,
                    userBlocked: this.userBlocked
                })) : a.createElement(P.c, i.__assign({}, e))
            }, Object.defineProperty(t.prototype, "userBlocked", {
                get: function() {
                    var e = this;
                    return !(!this.props.data.currentUser.blockedUsers || !this.props.data.currentUser.blockedUsers.find(function(t) {
                        return !!t && t.id === e.props.reportContext.targetUserID
                    }))
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(a.Component);
        var ce = Object(s.d)(Object(c.a)(ae, {
            name: "reportUserInCommunity"
        }), Object(c.a)(oe, {
            name: "reportUser"
        }), Object(c.a)(se, {
            options: function(e) {
                return {
                    variables: {
                        userId: e.reportContext.targetUserID
                    }
                }
            }
        }), Object(g.d)("ReportUser", {
            autoReportInteractive: !0
        }), Object(u.a)(), Object(d.a)(), Object(o.b)(function(e) {
            return {
                sessionUser: e.session.user
            }
        }, null))(le)
    },
    AHWf: function(e, t) {},
    AadB: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("O27J"),
            o = n("6sO2"),
            s = n("iOr9"),
            l = n("+GT7"),
            c = n("vKFS"),
            u = n("6BvN"),
            d = n("SZoP"),
            p = n("NY9D"),
            m = n("vH/s"),
            h = n("HW6M"),
            g = n("Odds"),
            f = (n("ehrk"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = h("live-channel-preview-card", {
                        "live-channel-preview-card--loading": !this.props.streamLoaded
                    });
                    return i.createElement("div", r.__assign({
                        className: e,
                        "data-test-selector": "live-channel-preview-card"
                    }, Object(g._63)(this.props)), i.createElement(l.a, r.__assign({}, this.props), i.createElement(g.k, {
                        ratio: g.l.Aspect16x9
                    }, this.props.videoPlayer)))
                }, t
            }(i.Component)),
            b = n("v5ho"),
            v = n("RH2O"),
            y = n("2KeS"),
            _ = n("V5M+"),
            k = n("jetF"),
            S = n("7vx8"),
            T = n("CSlQ"),
            w = n("/gww"),
            P = n("0w5y"),
            E = n("PO03"),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(d.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(w.a, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(d.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(P.a, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? i.createElement(k.a, null, i.createElement(g.w, {
                        ariaLabel: Object(o.d)("Moderation", "DirectoryGamePage"),
                        icon: g._25.ChatRiskFlag
                    }), i.createElement(g.q, {
                        direction: g.r.BottomRight,
                        size: g.s.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? i.createElement(g._6, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, i.createElement(g._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? i.createElement(g._6, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, i.createElement(g._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Timeout", "StreamFlag"))) : null
                }, t = r.__decorate([Object(S.a)(E, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.communityName
                            }
                        }
                    }
                }), Object(T.d)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(i.Component);
        var C = Object(v.b)(null, function(e) {
                return Object(y.b)({
                    onShowModal: _.d
                }, e)
            })(O),
            R = n("vKYI"),
            N = n("PLRK"),
            I = (n("GiGb"), "directory-first-item"),
            L = "directory-game__card_container",
            x = 5e3,
            F = 300,
            j = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderVariation = function() {
                        var e = n.props.streamNode,
                            t = n.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var a = {
                            context: n.props.directoryType === b.a.Games ? c.b.SingleGameList : c.b.MixedGameAndChannelList,
                            title: e.title || N.a,
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            onVideoTitleClick: n.onVideoTitleClick,
                            thumbnailImageProps: {
                                src: e.previewImageURL || o.a.defaultStreamPreviewURL,
                                alt: "" + e.broadcaster.login
                            },
                            onThumbnailClick: n.onThumbnailClick,
                            channelLogin: e.broadcaster.login || "",
                            channelLoginLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            channelImageProps: {
                                src: e.broadcaster.profileImageURL || "",
                                alt: "" + e.broadcaster.login
                            },
                            gameTitle: n.shouldShowGame("name"),
                            gameTitleLinkTo: n.getLinkTo(Object(p.c)(n.shouldShowGame("name")), t),
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
                        return i.createElement("div", {
                            className: "stream-thumbnail",
                            ref: n.setRef,
                            "data-target": t ? "" : I,
                            style: {
                                order: t
                            }
                        }, i.createElement(g._8, {
                            className: "stream-thumbnail__card",
                            position: g._15.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": L
                        }, i.createElement(c.a, r.__assign({}, a, {
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        })), n.renderStreamFlag()))
                    }, n.renderFallback = function() {
                        var e = n.props.streamNode,
                            t = n.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var r = n.props.showPreview && n.state.hovered && n.state.loadingPreview && !n.state.streamLoaded && !n.state.previewTimedOut,
                            a = n.props.showPreview && n.state.hovered && (n.state.loadingPreview || n.state.streamLoaded) && !n.state.previewTimedOut;
                        return i.createElement("div", {
                            className: "stream-thumbnail",
                            ref: n.setRef,
                            "data-target": t ? "" : I,
                            onKeyDown: n.onKeyDown,
                            onMouseLeave: n.onMouseLeaveHandler,
                            style: {
                                order: t
                            }
                        }, i.createElement(g._8, {
                            className: "stream-thumbnail__card",
                            position: g._15.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": L
                        }, r && i.createElement(g._35, {
                            attachRight: !0,
                            attachTop: !0,
                            background: g.n.Overlay,
                            borderRadius: g.t.Small,
                            color: g.K.OverlayAlt,
                            margin: .5,
                            padding: .5,
                            position: g._15.Absolute,
                            zIndex: g._62.Above
                        }, i.createElement(g._10, {
                            fillContent: !0,
                            inheritColor: !0,
                            size: g._33.Small
                        })), !n.state.streamLoaded && i.createElement(l.a, {
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || N.a,
                            channelName: Object(d.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                            onTitleClick: n.onVideoTitleClick,
                            onThumbnailClick: n.onThumbnailClick,
                            gameImageSrc: n.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                            gameTitle: n.shouldShowGame("name"),
                            gameLinkTo: n.getLinkTo(Object(p.c)(n.shouldShowGame("name")), t),
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            channelNameLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            streamType: e.type,
                            streamMetadata: e.streamMetadata,
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        }), a && i.createElement(f, {
                            streamLoaded: n.state.streamLoaded,
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || N.a,
                            channelName: Object(d.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                            gameImageSrc: n.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                            gameTitle: n.shouldShowGame("name"),
                            gameLinkTo: n.getLinkTo(Object(p.c)(n.shouldShowGame("name")), t),
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            channelNameLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            streamType: e.type,
                            streamMetadata: e.streamMetadata,
                            videoPlayer: n.getVideoPlayer(),
                            hideTooltip: !0
                        }), n.renderStreamFlag()))
                    }, n.getLinkTo = function(e, t) {
                        var r = n.props.trackingContent ? n.props.trackingContent : m.PageviewContent.Live,
                            i = n.props.directoryType === b.a.Communities ? m.PageviewMedium.Community : m.PageviewMedium.Game;
                        return n.props.trackingMedium && (i = n.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: i,
                                content: r,
                                content_index: t
                            }
                        }
                    }, n.renderStreamFlag = function() {
                        var e = n.props.streamNode;
                        return e.broadcaster ? n.props.directoryType === b.a.Communities && n.props.directoryName ? i.createElement(g._8, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: g._15.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, i.createElement(C, {
                            communityName: n.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, n.shouldShowGame = function(e) {
                        return n.props.directoryType !== b.a.Games && n.props.streamNode.game ? n.props.streamNode.game[e] : ""
                    }, n.onThumbnailClick = function(e) {
                        n.props.onThumbnailClick && n.props.onThumbnailClick(e, n.props.streamNode.broadcaster && n.props.streamNode.broadcaster.id)
                    }, n.onVideoTitleClick = function(e) {
                        n.props.onVideoTitleClick && n.props.onVideoTitleClick(e, n.props.streamNode.broadcaster && n.props.streamNode.broadcaster.id)
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
                        n.state.focused && ((e.charCode || e.keyCode) === u.a.Tab && n.onMouseLeaveHandler())
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
                        }, x)
                    }, n.setRef = function(e) {
                        e && (n.thumbnailNode = a.findDOMNode(e), n.addThumbnailListener())
                    }, n.getVideoPlayer = function() {
                        var e = {
                            onPlayerPlaying: n.onStreamLoaded
                        };
                        if (n.props.showPreview && n.state.hovered && n.props.streamNode.broadcaster && n.props.streamNode.broadcaster.login) return i.createElement(R.a, r.__assign({
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
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
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
                    return i.createElement(s.a, r.__assign({}, e))
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return I
        }), n.d(t, !1, function() {
            return L
        }), n.d(t, "b", function() {
            return j
        })
    },
    BJwU: function(e, t) {},
    Bir6: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }
    },
    CwIZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        }), t.b = function(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, n, l, c, u, d, p, m, h, g, f, b, v;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            t = i.n.getVideoPlayerTrackingData().vodID, n = !!t, l = {
                                channelID: e.channelID,
                                withVideo: !1
                            }, n && (l.withVideo = !0, l.videoID = t), c = null, r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, i.o.apollo.client.query({
                                query: s,
                                variables: l
                            })];
                        case 2:
                            return c = r.sent(), [3, 4];
                        case 3:
                            return u = r.sent(), i.j.error(u, "Failed to make query for channel info in FollowEvent reporting.", {
                                channelID: e.channelID
                            }), [3, 4];
                        case 4:
                            return d = c && c.data && c.data.user || null, c && !d && i.j.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                channelID: e.channelID
                            }), p = null, c && n && ((m = c && c.data && c.data.video) ? p = Object(o.a)(m.broadcastType) : i.j.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
                                currentVideoID: t
                            })), h = d && d.self, g = h ? !!h.subscriptionBenefit : null, f = h && h.subscriptionBenefit && h.subscriptionBenefit.purchasedWithPrime || !1, b = h ? h.canPrimeSubscribe : null, v = {
                                action: e.action,
                                can_subscribe: b,
                                channel: e.channelLogin,
                                channel_id: e.channelID,
                                checkout_button_tier: e.checkoutButtonTier,
                                has_sub_credit: e.hasSubCredit,
                                host_channel: e.hostChannelLogin,
                                host_channel_id: e.hostChannelID,
                                is_menu_open: e.isMenuOpen,
                                is_subscribed: g,
                                is_subscribed_current_tier: h && h.subscriptionBenefit && h.subscriptionBenefit.tier,
                                sub_location: e.sub_location,
                                sub_recipient: e.giftRecipient,
                                modal: e.modal,
                                modal_level: e.modalLevel || "",
                                show_prime_content: e.showPrimeContent,
                                show_resub: d ? b && f : null,
                                vod_id: t,
                                vod_type: p,
                                viewport_height: window.innerHeight,
                                viewport_width: window.innerWidth
                            }, i.n.track(a.SpadeEventType.Subscription, v), [2]
                    }
                })
            })
        };
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("vH/s"),
            o = n("xrVp"),
            s = n("3QSP"),
            l = (n.n(s), {
                BuyGiftSub: "buy_gift_sub",
                ClickCheckout: "click_checkout_button",
                ClickMoreSubOptions: "more_options_click",
                ClickGiftSubOptions: "gift_options_click",
                ClickPrimeFAQ: "click_prime_faq",
                ClickSignupForPrime: "click_signup_for_prime",
                ClickBack: "back_top_level",
                CloseSubMenu: "close_subscribe_menu",
                GiftASub: "gift_a_sub",
                OpenSubMenu: "open_subscribe_menu",
                SubWithPrime: "samus_spend_credit"
            })
    },
    CybZ: function(e, t) {},
    D9fv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.b = function() {
            var e = r.o.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return i.slice().sort(function(e, n) {
                var r = t(e),
                    i = t(n);
                return r !== i ? r - i : r + ":" + e.label < i + ":" + n.label ? -1 : 1
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
            }];

        function a(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(r.d)("Other", "broadcaster-languages") : "Other"
            }]
        }
        var o = new Set(i.concat(a()).map(function(e) {
            return e.code
        }))
    },
    DquS: function(e, t) {},
    EOpv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        });
        var r, i = n("6sO2");
        ! function(e) {
            e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
        }(r || (r = {}));
        var a = function(e) {
            switch (e) {
                case r.CSGOMap:
                    return Object(i.d)("Map", "CSGOMapFilter");
                case r.CSGOSkillGroup:
                    return Object(i.d)("Rank", "CSGORankFilter");
                case r.HearthstoneClass:
                    return Object(i.d)("Class", "HearthstoneClassFilter");
                case r.HearthstoneMode:
                    return Object(i.d)("Mode", "HearthstoneModeFilter");
                case r.LeagueChampion:
                    return Object(i.d)("Champion", "LeagueFilter");
                case r.OverwatchCharacter:
                    return Object(i.d)("Hero", "OverwatchFilter");
                default:
                    return ""
            }
        }
    },
    FDYX: function(e, t, n) {
        "use strict";
        t.d = function(e) {
            return e.some(function(e) {
                return !!e.self && !!e.self.promotion
            })
        }, t.c = function(e) {
            return e.some(function(e) {
                return !!e.giftPromotion
            })
        }, t.a = function(e, t) {
            var n;
            t ? n = e.giftPromotion : e.self && (n = e.self.promotion);
            if (n) return n.newPrice;
            return e.price
        }, t.b = function(e, t) {
            var n;
            t ? n = e.giftPromotion : e.self && (n = e.self.promotion);
            if (n) return n.discountValue;
            return 0
        }
    },
    GHQc: function(e, t) {},
    GiGb: function(e, t) {},
    HZww: function(e, t, n) {
        "use strict";
        t.c = function(e) {
            return i.PubsubTopic.BroadcastSettingsUpdate + "." + e
        }, t.e = function(e) {
            return i.PubsubTopic.ChatRoom + "." + e
        }, t.f = function(e) {
            return i.PubsubTopic.ChatRoomsChannel + "." + e
        }, t.g = function(e) {
            return i.PubsubTopic.ChatRoomsUser + "." + e
        }, t.z = function(e) {
            return i.PubsubTopic.VideoThumbnailProcessing + "." + e
        }, t.i = function(e) {
            return i.PubsubTopic.ImageUpload + "." + e
        }, t.s = function(e) {
            return i.PubsubTopic.UploadService + "." + e
        }, t.y = function(e) {
            return i.PubsubTopic.VideoPlaybackById + "." + e
        }, t.l = function(e) {
            return i.PubsubTopic.PayoutOnboardingEvents + "." + e
        }, t.m = function(e) {
            return i.PubsubTopic.Presence + "." + e
        }, t.j = function(e, t) {
            return i.PubsubTopic.ModerationActionsByUserAndChannel + "." + e + "." + t
        }, t.n = function(e) {
            return i.PubsubTopic.Raid + "." + e
        }, t.o = function(e) {
            return i.PubsubTopic.StreamChange + "." + e
        }, t.h = function(e) {
            return i.PubsubTopic.Friendship + "." + e
        }, t.b = function(e) {
            return i.PubsubTopic.ChannelBitsPinEvents + "." + e
        }, t.a = function(e) {
            return i.PubsubTopic.BitsLeaderboardEvents + "." + e.id
        }, t.t = function(e) {
            return i.PubsubTopic.UserBitsUpdates + "." + e
        }, t.x = function(e) {
            return i.PubsubTopic.UserSubscribeEvents + "." + e
        }, t.w = function(e) {
            return i.PubsubTopic.UserCrateEvents + "." + e
        }, t.u = function(e) {
            return i.PubsubTopic.CampaignUserEvents + "." + e
        }, t.v = function(e) {
            return i.PubsubTopic.UserCommerceEvents + "." + e
        }, t.A = function(e) {
            return i.PubsubTopic.Whispers + "." + e
        }, t.k = function(e) {
            return i.PubsubTopic.OnsiteNotifications + "." + e
        }, t.p = function(e) {
            return i.PubsubTopic.StreamChatRoom + "." + e
        }, t.d = function(e) {
            return i.PubsubTopic.ChannelEventUpdates + "." + e
        }, t.r = function(e) {
            return r.k.subscribe({
                topic: e.topic,
                onMessage: function(t) {
                    t.type && !e.type && !e.types || t.type && e.type && t.type !== e.type || t.type && e.types && !e.types.includes(t.type) || Object(a.e)(e.query, e.variables, function(n) {
                        return e.mutator(t, n)
                    }, function(n) {
                        return !!e.skipMessage && e.skipMessage(t, n)
                    })
                }
            })
        }, t.q = function(e) {
            return r.k.subscribe({
                topic: e.topic,
                onMessage: function(t) {
                    t.type && t.type !== e.type || Object(a.d)({
                        fragment: e.fragment,
                        id: e.id,
                        mutator: function(n) {
                            return e.mutator(t, n)
                        }
                    })
                }
            })
        };
        var r = n("6sO2"),
            i = n("aMxy"),
            a = n("oIkB")
    },
    Hjbq: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.b = function(e) {
            return {
                type: r,
                playerRefID: e
            }
        };
        var r = "video-player.VIDEO_PLAYER_INSTANCE_STARTED"
    },
    I4TS: function(e, t) {},
    I89S: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
            }(r || (r = {}))
    },
    IJO1: function(e, t) {},
    IOwa: function(e, t, n) {
        "use strict";
        var r, i, a, o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            c = n("6sO2"),
            u = n("2o2f"),
            d = n("Odds"),
            p = (n("CybZ"), (r = {})[u.a.Live] = "stream-type-indicator--live", r[u.a.Premiere] = "stream-type-indicator--premiere", r[u.a.Rerun] = "stream-type-indicator--rerun", r[u.a.WatchParty] = "stream-type-indicator--rerun", r),
            m = ((i = {})[u.a.Premiere] = d._25.VideoPremiere, i[u.a.Rerun] = d._25.VideoRerun, i[u.a.WatchParty] = d._25.VideoRerun, i),
            h = ((a = {})[u.a.Premiere] = d._26.Live, a[u.a.Rerun] = d._26.Inherit, a[u.a.WatchParty] = d._26.Inherit, a),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(d._35, {
                        className: this.getClassNames(),
                        color: d.K.Overlay,
                        background: d.n.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: d.t.Small,
                        display: d.R.Flex
                    }, l.createElement(d._8, {
                        display: d.R.Flex,
                        alignItems: d.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(d.Q, {
                        type: d._49.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[p[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(d._35, {
                        borderRadius: d.t.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === u.a.Live ? l.createElement(d._8, {
                        className: "stream-type-indicator__live-wrapper",
                        display: d.R.Flex,
                        alignItems: d.c.Center
                    }, l.createElement(d.G, {
                        status: d.I.Live,
                        size: d.H.Small
                    })) : l.createElement(d._24, {
                        asset: m[this.props.type],
                        type: h[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case u.a.Live:
                            return Object(c.d)("LIVE", "StreamTypeIndicator");
                        case u.a.Premiere:
                            return Object(c.d)("Premiere", "StreamTypeIndicator");
                        case u.a.Rerun:
                        case u.a.WatchParty:
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
    IRHd: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_TargetReportUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userId"
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
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
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
                                    value: "blockedUsers"
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
                end: 132
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_TargetReportUser($userId: ID!) {\nuser(id: $userId) {\nid\ndisplayName\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    JVP6: function(e, t) {},
    JpYe: function(e, t, n) {
        "use strict";
        t.e = function(e, t, n, i) {
            var o = i || l(t),
                u = "";
            o && (u = "?sort=" + function(e) {
                switch (e) {
                    case s.b:
                        return r.Popular;
                    case s.a:
                        return r.Newest;
                    default:
                        var t = e;
                        return t
                }
            }(o));
            var d = n ? n.toLowerCase() : function(e) {
                var t = c(e);
                return t ? t.toLowerCase() : "all"
            }(t);
            a.o.history.push(e + "/" + d + u)
        }, t.d = l, t.c = c, t.a = function(e) {
            var t = i.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }, t.f = u, t.b = function(e) {
            if ("" === e) return "";
            if (e.startsWith("v")) return e;
            return "v" + e
        };
        var r, i = n("OAwv"),
            a = (n.n(i), n("6sO2")),
            o = n("6WAQ"),
            s = n("3yQz");

        function l(e) {
            return u(i.parse(e.location.search).sort || "")
        }

        function c(e) {
            switch (e.match.params.filter) {
                case o.a.Archive.toLowerCase():
                    return o.a.Archive;
                case o.a.Highlight.toLowerCase():
                    return o.a.Highlight;
                case o.a.Upload.toLowerCase():
                    return o.a.Upload;
                case o.a.PastPremiere.toLowerCase():
                    return o.a.PastPremiere;
                default:
                    return
            }
        }

        function u(e) {
            switch (e.toUpperCase()) {
                case s.b:
                    return s.b;
                case s.a:
                    return s.a;
                default:
                    return null
            }
        }! function(e) {
            e.Popular = "views", e.Newest = "time"
        }(r || (r = {}))
    },
    KJtg: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UnblockUser"
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
                                value: "UnblockUserInput"
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
                            value: "unblockUser"
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
                                    value: "targetUser"
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
                end: 100
            }
        };
        n.loc.source = {
            body: "mutation UnblockUser($input: UnblockUserInput!) {\nunblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Kloa: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("O27J"),
            o = n("6sO2"),
            s = n("Odds"),
            l = (n("j9al"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props.hash,
                        t = e && a.findDOMNode(this.refs[e]);
                    t && t.scrollIntoView()
                }, t.prototype.render = function() {
                    return i.createElement("div", {
                        id: "faq",
                        ref: "faq"
                    }, i.createElement(s._35, {
                        className: "twitch-prime-faq",
                        padding: {
                            x: 1,
                            y: 5
                        }
                    }, i.createElement(s._23, {
                        centered: !0
                    }, i.createElement(s.Y, {
                        justifyContent: s._7.Center
                    }, i.createElement(s.L, {
                        cols: {
                            default: 12,
                            sm: 10,
                            md: 8,
                            lg: 7,
                            xl: 6
                        }
                    }, i.createElement(s._8, {
                        margin: {
                            bottom: 2
                        },
                        textAlign: s._45.Center,
                        fullWidth: !0
                    }, i.createElement(s.Q, {
                        type: s._49.H2,
                        bold: !0
                    }, Object(o.d)("FAQ/Help", "PrimeFAQComponent"))), this.renderQuestion(Object(o.d)("Do I need a Twitch Prime membership to get Fortnite content?", "PrimeFAQComponent"), "membership"), this.renderAnswer(Object(o.d)("Yes.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("What exactly will I get in the Twitch Prime Pack #2?", "PrimeFAQComponent"), "loot"), this.renderAnswer(Object(o.d)("This pack includes 4 distinct items, all of which are exclusively available to Twitch Prime members:", "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("Battle Royale Trailblazer Outfit: On the forefront of victory.", "PrimeFAQComponent"), Object(o.d)("Battle Royale True North Back Bling: Find your way.", "PrimeFAQComponent"), Object(o.d)("Battle Royale Tenderizer Pickaxe: Leave a good first impression.", "PrimeFAQComponent"), Object(o.d)("Battle Royale Freestylin’ Emote: Tear up the dance floor.", "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("Note: All items are cosmetic only and provide no competitive advantage. All items for Twitch Prime Pack #2 are for Battle Royale only.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How do I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "content"), this.renderAnswer(Object(o.d)("If you already have an active Twitch Prime membership (either paid or free trial), log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I already linked my Twitch and Epic account when I claimed the first Twitch Prime Pack. Do I need to claim again to get the current Twitch Prime content?", "PrimeFAQComponent"), "linkedaccount"), this.renderAnswer(Object(o.d)("YES. You must claim each Twitch Prime Pack individually. If you already linked your Twitch and Epic accounts for the previous Twitch Prime loot in Fortnite, log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How do I become a Twitch Prime member?", "PrimeFAQComponent"), "signup"), this.renderAnswerWithLink(Object(o.d)("Twitch Prime is included with Amazon Prime in the US, Mexico, Canada, Italy, France, Germany, Belgium, Austria, Spain, Japan, Singapore, Netherlands, and the United Kingdom. Twitch Prime is included with Prime Video in over 200 other countries and territories. If you are already an Amazon Prime member, you get Twitch Prime at no additional cost by connecting your Amazon account to your Twitch account at <x:link>http://www.twitchprime.com</x:link>.", {
                        "x:link": function(e) {
                            return i.createElement(s.O, {
                                key: e,
                                to: "http://www.twitchprime.com"
                            }, e)
                        }
                    }, "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("If you are not already an Amazon Prime member, you may start your free trial (if available) above. Follow all of the steps and the content that is currently available will be sent directly to your game account.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("When will I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "when"), this.renderAnswer(Object(o.d)("If you've followed all of the steps in the claim process for this offer, your content will be waiting for you in your locker the next time you log in to Fortnite!", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I change which Epic account my Fortnite content is delivered to?", "PrimeFAQComponent"), "changeaccount"), this.renderAnswerWithLink(Object(o.d)("If you claimed the first Fortnite Twitch Prime Pack and would like to use a different Epic account for this offer, you may unlink your previous Epic account from Twitch and link a new one to receive content on that account after completing the claim process above. You can manage your connected accounts at <x:link>https://www.epicgames.com/account/connected</x:link>.", {
                        "x:link": function(e) {
                            return i.createElement(s.O, {
                                key: e,
                                to: "https://www.epicgames.com/account/connected"
                            }, e)
                        }
                    }, "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I received an error that my Twitch or Amazon account has already claimed this content. What do I do?", "PrimeFAQComponent"), "alreadyclaimed"), this.renderAnswer(Object(o.d)("This happens when a different Twitch account was linked to your Amazon account (or vice versa) and claimed the current Twitch Prime Pack. Please check that the same Twitch account is linked to the Amazon account that was originally used to claim this Twitch Prime Pack.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I play Fortnite on my PS4/Xbox One/PC primarily, but also play on mobile. Will I be able to access the Twitch Prime content everywhere that I play?", "PrimeFAQComponent"), "mobile"), this.renderAnswer(Object(o.d)("As long as you use the same Epic account to play on each platform, you will be able to access your Twitch Prime content across PC/console and mobile. Content is not shared between Xbox One and PS4, however.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I link multiple Twitch Prime accounts to my Epic account and get additional content?", "PrimeFAQComponent"), "multiple"), this.renderAnswer(Object(o.d)("No. Each offer can only be applied once to a single Epic account.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How long do I have to claim Twitch Prime Pack #2?", "PrimeFAQComponent"), "duration"), this.renderAnswer(Object(o.d)("You'll have until July 11, 2018 at 9 AM PST to claim the Twitch Prime Pack #2.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I still get previous Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "pack1"), this.renderAnswer(Object(o.d)("You will only receive content that is currently available. However, if you have successfully claimed the first Twitch Prime pack but not completed the account linking flow prior to May 9, 2018 at 9 AM PST, you will receive that content after completing the current offer claim flow above.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Do I continue to receive content if my free trial expires? What happens to my content if I no longer have a Prime membership or my free trial expires?", "PrimeFAQComponent"), "freetrial"), this.renderAnswer(Object(o.d)("You need to have an active Twitch Prime membership to receive content that is currently available. Once you claim your Fortnite content, all content that is delivered to your game is yours to keep, subject to any Epic Games rules or policies that apply to the content. However, you will not receive future content without an active Twitch Prime membership.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Where can I get Fortnite?", "PrimeFAQComponent"), "fortnite"), this.renderAnswerWithLink(Object(o.d)("Fortnite: Battle Royale is free! Visit <x:link>https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale</x:link> to find out how to start playing on PC, Xbox One, PS4, and iOS.", {
                        "x:link": function(e) {
                            return i.createElement(s.O, {
                                key: e,
                                to: "https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale"
                            }, e)
                        }
                    }, "PrimeFAQComponent")), i.createElement(s._8, {
                        margin: {
                            y: 2
                        }
                    }, i.createElement(s.v, {
                        linkTo: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#HelpContact",
                        fullWidth: !0
                    }, Object(o.d)("Need help? Contact Us", "PrimeFAQComponent"))))))))
                }, t.prototype.renderQuestion = function(e, t) {
                    return i.createElement("div", {
                        id: t,
                        ref: t
                    }, i.createElement(s._8, {
                        margin: {
                            top: 2
                        }
                    }, i.createElement(s.Q, {
                        type: s._49.H4,
                        bold: !0
                    }, e)))
                }, t.prototype.renderAnswer = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return 1 === e.length ? i.createElement(s._8, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(s.Q, null, e[0])) : i.createElement(s._8, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(s._58, null, i.createElement("ul", null, e.map(function(e) {
                        return i.createElement("li", {
                            key: e
                        }, i.createElement(s.Q, null, e))
                    }))))
                }, t.prototype.renderAnswerWithLink = function(e) {
                    return i.createElement(s._8, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(s.Q, null, e))
                }, t
            }(i.Component));
        n.d(t, "a", function() {
            return l
        })
    },
    Kxgf: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = this;
            return Object(i.a)(s, {
                props: function(t) {
                    return {
                        unblockUserMutation: function(n, i) {
                            return r.__awaiter(e, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t.mutate ? [4, t.mutate({
                                                variables: {
                                                    input: {
                                                        targetUserID: n
                                                    }
                                                },
                                                optimisticResponse: {
                                                    unblockUser: {
                                                        __typename: "UnblockUserPayload",
                                                        targetUser: {
                                                            __typename: "User",
                                                            id: n
                                                        }
                                                    }
                                                },
                                                update: function(e) {
                                                    var t = e.readFragment({
                                                        id: Object(o.a)(i),
                                                        fragment: a
                                                    });
                                                    t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                        return null !== e && e.id !== n
                                                    }), e.writeFragment({
                                                        id: Object(o.a)(i),
                                                        fragment: a,
                                                        data: t
                                                    }))
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            throw new Error("unblockUserMutation is not ready");
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })
        };
        var r = n("TToO"),
            i = n("7vx8"),
            a = n("nmYW"),
            o = (n.n(a), n("yADj")),
            s = n("KJtg");
        n.n(s)
    },
    L3z0: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.LoadStart = "loadstart", e.Error = "error", e.LoadedMetadata = "loadedmetadata", e.CanPlay = "canplay", e.Playing = "playing", e.Waiting = "waiting", e.Seeking = "seeking", e.Seeked = "seeked", e.Ended = "ended", e.DurationChange = "durationchange", e.TimeUpdate = "timeupdate", e.Play = "play", e.Pause = "pause", e.VolumeChange = "volumechange", e.RateChange = "ratechange"
            }(r || (r = {}))
    },
    "LEV+": function(e, t) {},
    LgcN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "d", function() {
            return l
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "f", function() {
            return u
        });
        var r = n("TToO"),
            i = this,
            a = function() {
                return r.__awaiter(i, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(132).then(n.bind(null, "tk3B"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            o = function() {
                return r.__awaiter(i, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(131).then(n.bind(null, "e/M0"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            s = function() {
                return r.__awaiter(i, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(130).then(n.bind(null, "Dan5"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            l = function() {
                return r.__awaiter(i, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(129).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            c = function() {
                return r.__awaiter(i, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(128).then(n.bind(null, "+kKy"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            },
            u = function() {
                return r.__awaiter(i, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(127).then(n.bind(null, "2NJ8"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            }
    },
    LjAQ: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("HW6M"),
            a = n("GiK3"),
            o = n("2KeS"),
            s = n("6sO2"),
            l = n("7vx8"),
            c = n("CSlQ"),
            u = n("xwpJ"),
            d = n("Odds"),
            p = n("x6ny"),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = Object(s.d)("Select One...", "ReportUserModal");
                    this.props.data.loading ? e = [a.createElement("option", {
                        key: "Loading"
                    }, Object(s.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || Object(u.b)()).map(function(e) {
                        return a.createElement("option", {
                            key: e.id,
                            value: e.id
                        }, e.text)
                    });
                    return a.createElement(d._8, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(d.W, {
                        id: "reporting-modal__select",
                        label: Object(s.d)("Select Reason (required)", "ReportUserModal")
                    }, a.createElement(d._30, {
                        id: "reporting-modal__select",
                        "data-test-selector": "reporting-modal.select",
                        disabled: this.props.data.loading || !!this.props.data.error,
                        onChange: this.handleChange,
                        defaultValue: t
                    }, a.createElement("option", {
                        disabled: !0,
                        key: "default"
                    }, t), e)))
                }, t = r.__decorate([Object(c.d)("ReportReasonSelect")], t)
            }(a.Component),
            h = Object(l.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            })(m),
            g = (n("I4TS"), n("1EXI"));
        n.d(t, "a", function() {
            return b
        }), n.d(t, "b", function() {
            return f
        }), n.d(t, "c", function() {
            return y
        });
        var f, b = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError", e[e.CommunityError = 5] = "CommunityError"
        }(f || (f = {}));
        var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        community: null,
                        description: "",
                        reason: null,
                        isCommunityReason: !1,
                        selectedCommunityID: null,
                        selectedCommunityName: null
                    }, t.headerMessage = Object(s.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(s.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.selectCommunity = function(e) {
                        t.setState({
                            selectedCommunityID: e.target.value,
                            selectedCommunityName: e.target.getAttribute("data-community-name")
                        })
                    }, t.handleSubmit = function(e) {
                        if (e.preventDefault(), t.state.reason && t.state.description.length > 0) {
                            if (t.state.reason === b && !t.state.selectedCommunityID) {
                                if (t.props.data.user && !t.props.data.user.directories.nodes.length) return void t.props.onError(f.CommunityError);
                                t.props.onError(f.FormError)
                            }
                            t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName)
                        } else t.props.onError(f.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        if (!t.props.data || t.props.data.loading || t.props.data.error || !t.props.data.user) return null;
                        var n = t.props.data.user.directories ? t.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        }) : [];
                        n.length && e === b ? t.setState({
                            reason: e,
                            selectedCommunityID: n[0].id,
                            selectedCommunityName: n[0].name,
                            isCommunityReason: !0
                        }) : t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d._8, {
                        display: d.R.Flex,
                        flexDirection: d.T.Column,
                        alignItems: d.c.Center,
                        justifyContent: d._7.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === f.Success ? a.createElement("div", null, a.createElement(d.v, {
                        onClick: this.props.onClose
                    }, a.createElement(d._8, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(d._8, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(d.Q, {
                        type: d._49.H4
                    }, this.props.title), a.createElement(d._35, {
                        color: d.K.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(d._35, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(h, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), this.renderCommunitiesSelector(), a.createElement(d.W, {
                        id: "reporting__text-area",
                        label: Object(s.d)("Description (required)", "ReportUser")
                    }, a.createElement(d._46, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(d._35, {
                        display: d.R.Flex,
                        justifyContent: d._7.Center
                    }, a.createElement(d.v, {
                        onClick: this.handleSubmit
                    }, a.createElement(d._8, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Send", "ReportUser"))))))
                }, t.prototype.renderCommunitiesSelector = function() {
                    if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user) return null;
                    if (this.state.isCommunityReason) {
                        var e = this.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        }).map(function(e) {
                            return a.createElement("option", {
                                key: e.id,
                                value: e.id,
                                "data-community-name": e.name
                            }, e.displayName)
                        });
                        return a.createElement(d._8, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d.W, {
                            id: "reporting__select-community",
                            label: Object(s.d)("Community", "ReportUser")
                        }, a.createElement(d._30, {
                            id: "reporting__select-community",
                            "data-test-selector": "reporting.select-community",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.selectCommunity
                        }, e)))
                    }
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case f.FormError:
                            e = Object(s.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case f.MutationError:
                            e = Object(s.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case f.Success:
                            e = Object(s.d)("Thank you for your report.", "ReportUser");
                            break;
                        case f.UserError:
                            e = Object(s.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        case f.CommunityError:
                            e = Object(s.d)("A report of this type could not be sent because this user has not selected a Community.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = i({
                        "reporting__error-container": this.props.submitStatus !== f.Success,
                        "reporting__success-container": this.props.submitStatus === f.Success
                    });
                    return a.createElement(d._35, {
                        className: t,
                        fullWidth: this.props.submitStatus !== f.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component),
            y = Object(o.d)(Object(l.a)(g, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            userId: e.targetUserID
                        }
                    }
                }
            }))(v)
    },
    Lwev: function(e, t) {},
    M5Tl: function(e, t) {},
    MAZT: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        });
        var r = n("TToO"),
            i = n("6gPI"),
            a = (n.n(i), n("+UWA")),
            o = (n.n(a), n("Ejve")),
            s = n("5LoI"),
            l = n("PHcJ"),
            c = n("6uxC"),
            u = (n.n(c), {
                games: {
                    indexName: s.a.Games,
                    hitsPerPage: 2,
                    topNumericFilters: ["popularity>1"],
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                },
                videos: {
                    indexName: s.a.Videos,
                    hitsPerPage: 6,
                    get topNumericFilters() {
                        return ["created_at>" + function(e) {
                            if (e <= 100) return e;
                            return 100 * Math.round(e / 100)
                        }((e = new Date, e.setMonth(e.getMonth() - 1), Math.floor(e.getTime() / 1e3)))];
                        var e
                    },
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                },
                users: {
                    indexName: s.a.Users,
                    hitsPerPage: 2,
                    topNumericFilters: ["followers>50"],
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                },
                channels: {
                    indexName: s.a.Channels,
                    hitsPerPage: 6,
                    get topNumericFilters() {
                        return ["channel_count>10", "updated_on>" + p()]
                    },
                    get singleTypeNumericFilters() {
                        return ["updated_on>" + p()]
                    },
                    optionalFacetFilters: ""
                },
                communities: {
                    indexName: s.a.Communities,
                    hitsPerPage: 2,
                    topNumericFilters: [],
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                }
            }),
            d = function() {
                function e(e) {
                    this.client = i(e.appId, e.apiKey), this.stats = a.Stats.getInstance(e.config.buildType === o.a.Production ? "production" : "development", "twilight.features.algolia"), this.logger = e.logger.withCategory("search-client"), this.getCountryCode(e.apolloClient)
                }
                return e.prototype.queryTopResults = function(e, t) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var n, i, a, o;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return i = [], (n = []).push(this.getTopResult(u.games, e)), n.push(this.getTopResult(u.videos, e)), n.push(this.getTopResult(u.users, e)), n.push(this.getTopResult(u.channels, e)), n.push(this.getTopResult(u.communities, e)), i.push(this.getTotalResult(u.games, e)), i.push(this.getTotalResult(u.videos, e)), i.push(this.getTotalResult(u.users, e)), i.push(this.getTotalResult(u.channels, e)), [4, this.query(n.concat(i))];
                                case 1:
                                    return (a = r.sent()) ? (o = a.results, [2, {
                                        id: t,
                                        games: {
                                            totalHits: o[5].nbHits,
                                            hits: o[0].hits
                                        },
                                        videos: {
                                            totalHits: o[6].nbHits,
                                            hits: o[1].hits
                                        },
                                        users: {
                                            totalHits: o[7].nbHits,
                                            hits: o[2].hits
                                        },
                                        channels: {
                                            totalHits: o[8].nbHits,
                                            hits: o[3].hits
                                        },
                                        communities: {
                                            totalHits: o[4].nbHits,
                                            hits: o[4].hits
                                        }
                                    }]) : [2, function(e) {
                                        return {
                                            id: e,
                                            games: {
                                                totalHits: 0,
                                                hits: []
                                            },
                                            videos: {
                                                totalHits: 0,
                                                hits: []
                                            },
                                            users: {
                                                totalHits: 0,
                                                hits: []
                                            },
                                            channels: {
                                                totalHits: 0,
                                                hits: []
                                            },
                                            communities: {
                                                totalHits: 0,
                                                hits: []
                                            }
                                        }
                                    }(t)]
                            }
                        })
                    })
                }, e.prototype.queryForType = function(e, t, n, i) {
                    var a = void 0 === i ? {} : i,
                        o = a.page,
                        l = void 0 === o ? 0 : o,
                        c = a.hitsPerPage,
                        d = void 0 === c ? 50 : c,
                        p = a.facetFilters,
                        m = void 0 === p ? "" : p,
                        h = a.numericFilters;
                    return r.__awaiter(this, void 0, void 0, function() {
                        var i, a, o, c, p, g, f, b = this;
                        return r.__generator(this, function(v) {
                            switch (v.label) {
                                case 0:
                                    switch (i = {
                                        id: n,
                                        currentPage: l
                                    }, a = function(e) {
                                        return r.__awaiter(b, void 0, void 0, function() {
                                            var n, a;
                                            return r.__generator(this, function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return n = {
                                                            indexName: e.indexName,
                                                            query: t,
                                                            params: {
                                                                page: l,
                                                                hitsPerPage: d,
                                                                numericFilters: h || e.singleTypeNumericFilters,
                                                                facets: "*",
                                                                facetFilters: m
                                                            }
                                                        }, [4, this.query([n])];
                                                    case 1:
                                                        return (a = r.sent()) ? (i.exhaustedHits = !a.results[0].nbHits || a.results[0].hits.length < d, [2, {
                                                            totalHits: a.results[0].nbHits,
                                                            hits: a.results[0].hits
                                                        }]) : (i.exhaustedHits = !0, [2, {
                                                            totalHits: 0,
                                                            hits: []
                                                        }])
                                                }
                                            })
                                        })
                                    }, e) {
                                        case s.a.Games:
                                            return [3, 1];
                                        case s.a.Users:
                                            return [3, 3];
                                        case s.a.Channels:
                                            return [3, 5];
                                        case s.a.Videos:
                                            return [3, 7];
                                        case s.a.Communities:
                                            return [3, 9]
                                    }
                                    return [3, 11];
                                case 1:
                                    return o = i, [4, a(u.games)];
                                case 2:
                                    return o.games = v.sent(), [3, 12];
                                case 3:
                                    return c = i, [4, a(u.users)];
                                case 4:
                                    return c.users = v.sent(), [3, 12];
                                case 5:
                                    return p = i, [4, a(u.channels)];
                                case 6:
                                    return p.channels = v.sent(), [3, 12];
                                case 7:
                                    return g = i, [4, a(u.videos)];
                                case 8:
                                    return g.videos = v.sent(), [3, 12];
                                case 9:
                                    return f = i, [4, a(u.communities)];
                                case 10:
                                    return f.communities = v.sent(), [3, 12];
                                case 11:
                                    return [2, null];
                                case 12:
                                    return [2, i]
                            }
                        })
                    })
                }, e.prototype.queryVideos = function(e, t, n) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var i, a, o, c;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    switch (n.sort) {
                                        case l.b.Newest:
                                            i = s.a.VideosNewest;
                                            break;
                                        case l.b.Popular:
                                        default:
                                            i = s.a.Videos
                                    }
                                    switch (a = [], n.length) {
                                        case l.a.Short:
                                            a.push("length<=900");
                                            break;
                                        case l.a.Long:
                                            a.push("length>900")
                                    }
                                    switch (o = {
                                        indexName: i,
                                        query: e,
                                        params: {
                                            page: 0,
                                            hitsPerPage: 50,
                                            numericFilters: a,
                                            facets: "*",
                                            facetFilters: ""
                                        }
                                    }, n.type) {
                                        case l.c.PastBroadcasts:
                                            o.params.facetFilters = "broadcast_type:archive";
                                            break;
                                        case l.c.Uploads:
                                            o.params.facetFilters = "broadcast_type:upload";
                                            break;
                                        case l.c.Highlights:
                                            o.params.facetFilters = "broadcast_type:highlight"
                                    }
                                    return [4, this.query([o])];
                                case 1:
                                    return (c = r.sent()) ? [2, {
                                        id: t,
                                        totalHits: c.results[0].nbHits,
                                        hits: c.results[0].hits
                                    }] : [2, {
                                        id: t,
                                        totalHits: 0,
                                        hits: []
                                    }]
                            }
                        })
                    })
                }, e.prototype.getCountryCode = function(e) {
                    var t = this;
                    e.query({
                        query: c
                    }).then(function(e) {
                        t.countryCode = e.data.requestInfo.countryCode
                    }).catch(function(e) {
                        t.logger.error(e, "Failed to get country code")
                    })
                }, e.prototype.getTopResult = function(e, t) {
                    return {
                        indexName: e.indexName,
                        query: t,
                        params: {
                            page: 0,
                            hitsPerPage: e.hitsPerPage,
                            numericFilters: e.topNumericFilters
                        }
                    }
                }, e.prototype.getTotalResult = function(e, t) {
                    return {
                        indexName: e.indexName,
                        query: t,
                        params: {
                            hitsPerPage: 0,
                            numericFilters: e.singleTypeNumericFilters
                        }
                    }
                }, e.prototype.query = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    n = Date.now(), a = !1, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, this.client.search(e)];
                                case 2:
                                    return t = r.sent(), [3, 4];
                                case 3:
                                    return r.sent(), a = !0, t = null, [3, 4];
                                case 4:
                                    i = Date.now();
                                    try {
                                        this.countryCode && (a ? (this.stats.logCounter("error." + this.countryCode, 1), this.stats.logTimer("error_duration." + this.countryCode, i - n)) : (this.stats.logCounter("success." + this.countryCode, 1), this.stats.logTimer("success_duration." + this.countryCode, i - n)))
                                    } catch (t) {
                                        this.logger.error(t, "Failed to send search stats", e)
                                    }
                                    return [2, t]
                            }
                        })
                    })
                }, e
            }();

        function p() {
            return Math.floor(((new Date).getTime() - 6e5) / 1e3)
        }
    },
    MTjQ: function(e, t) {},
    NY9D: function(e, t, n) {
        "use strict";
        t.c = function(e) {
            return "/directory/game/" + encodeURIComponent(e)
        }, t.a = function(e) {
            return "/communities/" + encodeURIComponent(e)
        }, t.b = function(e) {
            return "/events/" + encodeURIComponent(e)
        }, t.d = function(e) {
            return "/" + encodeURIComponent(e) + "/manager"
        }
    },
    NikC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.b = function(e, t, n) {
            void 0 === n && (n = !0);
            return function(r) {
                r(Object(a.A)(e)), n && Object(i.d)(e), t && Object(o.b)(e, t)
            }
        };
        var r, i = n("VAT8"),
            a = n("7enT"),
            o = n("xrVp");
        ! function(e) {
            e[e.UserMenu = 1] = "UserMenu", e[e.TypedCommand = 2] = "TypedCommand"
        }(r || (r = {}))
    },
    P3dd: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = n("CSlQ"),
            s = n("Odds"),
            l = (n("JVP6"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.partnerSocialLink && this.props.partnerSocialText;
                    return i.createElement(s._8, {
                        className: "prime-footer",
                        position: s._15.Relative
                    }, i.createElement(s._35, {
                        position: s._15.Absolute,
                        justifyContent: s._7.Center,
                        alignItems: s.c.Center,
                        className: "twitter-container"
                    }, i.createElement(s._24, {
                        asset: s._25.Twitter,
                        width: 71,
                        height: 71,
                        type: s._26.Prime
                    })), i.createElement(s._35, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "social-twitch-prime",
                        padding: 4
                    }, i.createElement(s._8, {
                        className: "prime-footer__twitter-links",
                        display: s.R.Flex,
                        justifyContent: e ? s._7.Between : s._7.Center
                    }, i.createElement(s.O, {
                        to: "https://twitter.com/TwitchPrime",
                        targetBlank: !0
                    }, i.createElement(s.Q, {
                        bold: !0,
                        fontSize: s.V.Size5
                    }, Object(a.d)("Follow us @TwitchPrime", "PrimeSubsite"))), e && i.createElement(s.O, {
                        to: this.props.partnerSocialLink,
                        targetBlank: !0
                    }, i.createElement(s.Q, {
                        bold: !0,
                        fontSize: s.V.Size5
                    }, this.props.partnerSocialText)))), i.createElement(s._35, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        padding: {
                            top: 2
                        },
                        className: "prime-footer-links"
                    }, i.createElement(s._35, {
                        padding: 2
                    }, i.createElement(s.O, {
                        to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                        targetBlank: !0
                    }, Object(a.d)("Terms", "PrimeSubsiteFooter"))), i.createElement(s._35, {
                        padding: 2
                    }, i.createElement(s.O, {
                        to: "https://www.amazon.com/twitchprivacy",
                        targetBlank: !0
                    }, Object(a.d)("Privacy Policy", "PrimeSubsiteFooter"))), i.createElement(s._35, {
                        padding: 2
                    }, i.createElement(s.O, {
                        to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                        targetBlank: !0
                    }, Object(a.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                }, t
            }(i.Component)),
            c = Object(o.d)("PrimeFooter", {
                autoReportInteractive: !0
            })(l);
        n.d(t, "a", function() {
            return c
        })
    },
    PCKG: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PrimePage_Streams"
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
                                kind: "EnumValue",
                                value: "GAME"
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
                                    value: "viewersCount"
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
                end: 346
            }
        };
        n.loc.source = {
            body: "query PrimePage_Streams($name: String! $limit: Int $languages: [String!]) {\ndirectory(name:$name type:GAME) {\nid\ndisplayName\nviewersCount\n... on Game {\nid\nstreams(first: $limit languages:$languages) {\nedges {\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nroles {\nisPartner\n}\n}\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    PHcJ: function(e, t, n) {
        "use strict";
        var r, i, a;
        n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }),
            function(e) {
                e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
            }(r || (r = {})),
            function(e) {
                e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
            }(i || (i = {})),
            function(e) {
                e[e.Popular = 0] = "Popular", e[e.Newest = 1] = "Newest"
            }(a || (a = {}))
    },
    PLRK: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = function(e, t) {
                return Object(a.d)("{viewerCount,number} viewers on {channel}", {
                    viewerCount: e,
                    channel: t
                }, "DirectoryGamePage")
            },
            s = Object(a.d)("Untitled Broadcast", "StreamThumbnail"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement("div", null, Object(a.d)("View All", "DirectoryInternationalSection"))
                }, t
            }(i.Component);
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
        var r = n("TToO"),
            i = n("OAwv"),
            a = n("6sO2"),
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
                clearTimeout(u), u = setTimeout(function() {
                    return r.__awaiter(e, void 0, void 0, function() {
                        var e, n, s, u, d, p;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    e = a.o.logger.withCategory("leagueoflegends-api"), t(Object(c.e)(!0)), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), n = a.o.intl.getLanguageCode(), s = l(n), u = o.a.getAPIURL("/api/lol/champions?" + i.stringify({
                                        locale: s,
                                        on_site: 1
                                    })).toString(), [4, o.a.get(u)];
                                case 2:
                                    return (d = r.sent()).body ? t(Object(c.f)(d.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.d)(!0))), [3, 4];
                                case 3:
                                    throw p = r.sent(), t(Object(c.d)(!0)), e.error(p, "Failed to load LoL champion data"), p;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, d)
            }
        };
        var u = 0,
            d = 350
    },
    QRuM: function(e, t, n) {
        "use strict";
        var r, i = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2");
        ! function(e) {
            e.On = "on", e.Off = "off", e.StaffOnly = "staff"
        }(r || (r = {}));
        var s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = o.b.get(this.props.name, r.Off);
                    return e === r.On || e === r.StaffOnly && this.props.isStaff ? this.props.children : null
                }, t
            }(a.Component),
            l = s;
        n.d(t, "a", function() {
            return r
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "b", function() {
            return l
        })
    },
    Ql3t: function(e, t) {},
    RweG: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2");

        function o(e) {
            return function(t) {
                return function(n) {
                    function o(t) {
                        var r = n.call(this, t) || this;
                        r.unsubscribers = {};
                        var i = {};
                        return e.map(function(e) {
                            e.skip && e.skip(t) || (i[r.getTopic(e.topic, t)] = {
                                isSubscribing: !0
                            })
                        }), r.state = {
                            status: i,
                            messages: {}
                        }, r
                    }
                    return r.__extends(o, n), o.prototype.componentDidMount = function() {
                        var t = this;
                        e.forEach(function(e) {
                            if (!e.skip || !e.skip(t.props)) {
                                var n = t.getTopic(e.topic, t.props);
                                t.unsubscribers[n] = t.subscribe(e, n)
                            }
                        })
                    }, o.prototype.componentWillReceiveProps = function(t) {
                        var n = this,
                            i = {},
                            a = {};
                        e.forEach(function(e) {
                            if (!e.skip || !e.skip(t)) {
                                var r = n.getTopic(e.topic, t);
                                i[r] || (i[r] = {
                                    isSubscribing: !0
                                }), n.unsubscribers[r] ? a[r] = n.unsubscribers[r] : a[r] = n.subscribe(e, r)
                            }
                        }), Object.keys(this.unsubscribers).forEach(function(e) {
                            a[e] || n.unsubscribers[e]()
                        }), this.unsubscribers = a, this.setState(function(e) {
                            return {
                                status: r.__assign({}, e.status, i)
                            }
                        })
                    }, o.prototype.componentWillUnmount = function() {
                        var e = this;
                        Object.keys(this.unsubscribers).map(function(t) {
                            return e.unsubscribers[t]()
                        })
                    }, o.prototype.render = function() {
                        var e = {
                            pubsub: {
                                messages: this.state.messages,
                                status: this.state.status
                            }
                        };
                        return i.createElement(t, r.__assign({}, this.props, e))
                    }, o.prototype.getTopic = function(e, t) {
                        return "string" == typeof e ? e : e(t)
                    }, o.prototype.subscribe = function(e, t) {
                        var n = this;
                        return a.k.subscribe({
                            topic: t,
                            success: function() {
                                n.setState(function(e) {
                                    return {
                                        status: r.__assign({}, e.status, (n = {}, n[t] = {
                                            isSubscribing: !1
                                        }, n))
                                    };
                                    var n
                                })
                            },
                            failure: function(e) {
                                n.setState(function(n) {
                                    return {
                                        status: r.__assign({}, n.status, (i = {}, i[t] = {
                                            error: e,
                                            isSubscribing: !1
                                        }, i))
                                    };
                                    var i
                                })
                            },
                            onMessage: function(t) {
                                var i = e.mapMessageTypesToProps[t.type || ""] || e.mapMessageTypesToProps["*"];
                                i && (e.skipMessage && e.skipMessage(t, n.props) || n.setState(function(e) {
                                    return {
                                        messages: r.__assign({}, e.messages, (n = {}, n[i] = t, n))
                                    };
                                    var n
                                }))
                            }
                        })
                    }, o
                }(i.Component)
            }
        }
        n.d(t, "a", function() {
            return o
        })
    },
    Ryxq: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = Math.floor(e / 3600),
                n = Math.floor((e - 3600 * t) / 60),
                r = e - 3600 * t - 60 * n;
            t < 10 && (t = "0" + t);
            n < 10 && (n = "0" + n);
            r < 10 && (r = "0" + r);
            return t + "h" + n + "m" + r + "s"
        }
    },
    SUA7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowButton_UnfollowUser"
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
                                value: "UnfollowUserInput"
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
                            value: "unfollowUser"
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
                                            value: "disableNotifications"
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
                end: 130
            }
        };
        n.loc.source = {
            body: "mutation FollowButton_UnfollowUser($input: UnfollowUserInput!) {\nunfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    SZoP: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), t.b = o;
        var r = n("GiK3"),
            i = (n.n(r), /^[\x00-\x7F]*$/),
            a = function(e, t, n) {
                return void 0 === n && (n = !1), t && e && !o(t) ? n ? t + " (" + e + ")" : r.createElement("span", null, t, " ", r.createElement("span", {
                    className: "intl-login"
                }, "(" + e + ")")) : t || (e || "")
            };

        function o(e) {
            return i.test(e)
        }
    },
    TTpp: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return c
        });
        var r = n("TToO"),
            i = n("GiK3"),
            a = (n.n(i), n("6sO2")),
            o = n("TeXj"),
            s = n("Odds"),
            l = "https://blog.twitch.tv/overwatch-league-all-access-pass-on-twitch-8cbf3e23df0a",
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = Object(o.e)(this.props.user),
                        t = !e,
                        n = this.getPrimePromotionTextNode(t, e),
                        r = this.props.isOverlay ? s.K.Overlay : s.K.Base,
                        c = this.props.isOverlay ? s.P.Overlay : s.P.Default;
                    return n ? i.createElement(s._8, null, i.createElement(s._8, {
                        display: s.R.Flex
                    }, i.createElement(s._8, {
                        margin: {
                            right: .5
                        }
                    }, i.createElement(s._24, {
                        asset: s._25.Crown,
                        type: s._26.Prime
                    })), i.createElement(s.Q, {
                        color: r
                    }, n)), t && !e && i.createElement(s.Q, {
                        fontSize: s.V.Size7
                    }, i.createElement(s.O, {
                        to: l,
                        type: c
                    }, Object(a.d)("Offer available for a limited time. Terms and conditions apply", "EsportsCampaignTabs")))) : null
                }, t.prototype.getPrimePromotionTextNode = function(e, t) {
                    var n = this.props.isOverlay ? s.P.Overlay : s.P.Default;
                    if (this.props.userHasPrime) {
                        if (t) return Object(a.d)("Get 500 Bits as a bonus reward on purchase, only with Twitch Prime.", "EsportsCampaignTabs");
                        if (e) return Object(a.d)("You’re saving $10 off the $29.99 price with Twitch Prime", "EsportsCampaignTabs")
                    } else {
                        var r = function(e) {
                            return i.createElement(s.Q, {
                                noWrap: !0,
                                type: s._49.Span
                            }, i.createElement(s.O, {
                                key: "insider-prime-link",
                                to: a.a.tryPrimeURI,
                                type: n,
                                targetBlank: !0
                            }, e))
                        };
                        if (t) return Object(a.d)("Get 500 Bits as a bonus reward on purchase, only with Twitch Prime <x:link>Sign up now</x:link>", {
                            "x:link": r
                        }, "EsportsCampaignTabs");
                        if (e) return Object(a.d)("Get $10 off with Twitch Prime <x:link>Sign up now</x:link>", {
                            "x:link": r
                        }, "EsportsCampaignTabs")
                    }
                }, t
            }(i.PureComponent)
    },
    TeXj: function(e, t, n) {
        "use strict";
        t.c = function(e, t, n) {
            void 0 === n && (n = !1);
            return p(a, e, t, n)
        }, t.a = d, t.b = function(e, t, n) {
            void 0 === n && (n = !1);
            var a = r.b.get(s, i.a.Off),
                o = t && t.roles && t.roles.isStaff || !1;
            return d(e, t, n) && (a === i.a.On || a === i.a.StaffOnly && o)
        }, t.e = function(e) {
            var t = r.b.get(l, i.a.Off),
                n = r.b.get(c, []),
                a = e && n.includes(e.id) || !1,
                o = e && e.roles && e.roles.isStaff || !1;
            return t === i.a.On || t === i.a.StaffOnly && o || a
        }, t.d = function(e, t) {
            return p(u, e, t)
        };
        var r = n("6sO2"),
            i = n("QRuM"),
            a = "esport_channel_page_whitelist",
            o = "esport_insider_pass_whitelist",
            s = "esport_insider_pass_gifting_launch",
            l = "esport_insider_prime_bits_launch",
            c = "esport_insider_prime_bits_launch_user_whitelist",
            u = "esports_room_cheering_whitelist";

        function d(e, t, n) {
            return void 0 === n && (n = !1), p(o, e, t, n)
        }

        function p(e, t, n, i) {
            void 0 === i && (i = !1);
            var a = r.b.get(e, []),
                o = n && n.roles && n.roles.isStaff || i;
            return a.includes(t) || a.includes(t + "-staff") && o
        }
    },
    Tg4T: function(e, t, n) {
        "use strict";
        var r, i = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            s = n("Odds");
        ! function(e) {
            e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
        }(r || (r = {}));
        var l = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.render = function() {
                if (!(this.props.restriction && this.props.restriction.productName && this.props.restriction.title && this.props.videoID)) return null;
                var e = Object(o.d)("Get It Now", "VideoPreviewCardRestriction"),
                    t = this.props.restriction.canViewRestricted,
                    n = t ? Object(o.d)("unlocked", "VideoPreviewCardRestriction") : Object(o.d)("locked", "VideoPreviewCardRestriction"),
                    i = t ? s._25.Unlock : s._25.Lock;
                return a.createElement(s._8, null, !t && a.createElement(s._35, {
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
                    "data-test-selector": r.LockSelector
                }, a.createElement(s._2, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(s.Q, {
                    color: s.K.Overlay,
                    fontSize: s.V.Size5,
                    "data-test-selector": r.UpsellSelector
                }, Object(o.d)("View with {title}", {
                    title: this.props.restriction.title
                }, "VideoPreviewCardRestriction"))), a.createElement(s._8, null, a.createElement(s.v, {
                    type: s.B.Hollow,
                    ariaLabel: e,
                    targetBlank: !0,
                    disabled: "" === this.props.restriction.productName,
                    linkTo: "https://www.twitch.tv/products/" + this.props.restriction.productName,
                    overlay: !0
                }, e))), a.createElement(s._35, {
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
                }, a.createElement(s._52, {
                    direction: this.props.attachTop ? s._54.Bottom : s._54.Top,
                    align: s._53.Right,
                    label: n
                }, a.createElement(s._24, {
                    asset: i,
                    height: 20,
                    width: 20
                }))))
            }, t
        }(a.PureComponent);
        n.d(t, !1, function() {
            return r
        }), n.d(t, "a", function() {
            return l
        })
    },
    Tjmd: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            if (!e && !t) return !1;
            if (!t || !e) return !0;
            return t.channelLogin !== e.channelLogin || t.vodID !== e.vodID || t.collectionID !== e.collectionID
        }, t.a = function(e, t) {
            if (!e && !t) return !1;
            if (!t || !e) return !0;
            return e.vodID && !t.vodID || e.collectionID && !t.collectionID
        }
    },
    Tzcg: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return u
        }), n.d(t, "a", function() {
            return p
        }), n.d(t, "e", function() {
            return h
        }), n.d(t, "d", function() {
            return g
        });
        var r = n("TToO"),
            i = n("Bir6"),
            a = n("nEoF"),
            o = {
                "^B-?\\)$": "B)",
                "^:-?[z|Z|\\|]$": ":|",
                "^:-?\\)$": ":)",
                "^:-?\\($": ":(",
                "^:-?(p|P)$": ":P",
                "^;-?(p|P)$": ";P",
                "^:-?[\\\\/]$": ":/",
                "^;-?\\)$": ";)",
                "^R-?\\)$": "R)",
                "^:>$": ":>",
                "^[oO](_|\\.)[oO]$": "O_o",
                "^:-?D$": ":D",
                "^:-?(o|O)$": ":O",
                "^>\\($": ">(",
                "^:-?(?:7|L)$": ":7",
                "^:-?(S|s)$": ":S",
                "^#-?[\\\\/]$": "#/",
                "^<\\]$": "<]",
                "^<3$": "<3",
                "^&lt;3$": "<3",
                "^&lt;\\]$": "<]",
                "^&gt;\\($": ">("
            },
            s = ["1.0", "2.0", "3.0"],
            l = new Set([457, 33, 42, 0]),
            c = function(e) {
                return e.map(function(e) {
                    var t = m(e.token),
                        n = o[t] || t,
                        i = s.reduce(function(t, n) {
                            var r = t.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x");
                            return "3.0" !== n && (r = r.concat(", ")), r
                        }, "");
                    return r.__assign({
                        displayName: n,
                        srcSet: i
                    }, e)
                })
            },
            u = function(e) {
                var t = m(e);
                return o[t] || t
            },
            d = function(e) {
                return e.slice().sort(function(e, t) {
                    return parseInt(e.id, 10) - parseInt(t.id, 10)
                })
            },
            p = function(e) {
                for (var t = [], n = [], r = 0, i = e; r < i.length; r++) {
                    var a = i[r];
                    l.has(parseInt(a.id, 10)) ? t.push({
                        id: a.id,
                        emotes: c(d(a.emotes))
                    }) : n.push({
                        id: a.id,
                        emotes: c(d(a.emotes))
                    })
                }
                return n.concat(t)
            },
            m = function(e) {
                return function(e) {
                    return /[\|\\\^\$\*\+\?\:\#]/.test(e)
                }(e) ? "^" + e.replace(/\\(?=[&;:])/g, "") + "$" : e
            },
            h = function(e, t) {
                var n = a.c,
                    r = [],
                    o = [],
                    s = [],
                    l = new RegExp("^" + Object(i.a)(t), "i");
                return e.forEach(function(e) {
                    n[e.token] ? s.push(e) : e.token.match(l) ? r.push(e) : o.push(e)
                }), r.sort(function(e, t) {
                    return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                }), o.sort(function(e, t) {
                    return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                }), s.sort(function(e, t) {
                    return n[t.token].count - n[e.token].count
                }), s.concat(r).concat(o)
            },
            g = function(e) {
                var t = {};
                return e.filter(function(e) {
                    return !t.hasOwnProperty(e.token) && (t[e.token] = !0)
                })
            }
    },
    UKw0: function(e, t) {},
    UQNI: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var r = n("6sO2"),
            i = function(e) {
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
            }
    },
    V9YC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.b = function(e) {
            return {
                type: r,
                languagePreferences: e
            }
        };
        var r = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED"
    },
    VNvG: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowButton_FollowUser"
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
                                value: "FollowUserInput"
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
                            value: "followUser"
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
                                            value: "disableNotifications"
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
            body: "mutation FollowButton_FollowUser($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    VOrx: function(e, t) {},
    Vr0l: function(e, t) {},
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-9fc82f039194a365a8d6d2bf2797e041.png"
    },
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var r = n("GiK3"),
            i = (n.n(r), n("Odds")),
            a = function() {
                return r.createElement(i.C, null, r.createElement(i.k, {
                    ratio: i.l.Aspect16x9
                }, r.createElement(i._14, null)), r.createElement(i.D, null, r.createElement(i._8, {
                    display: i.R.Flex,
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(i._8, {
                    display: i.R.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, r.createElement(i._14, {
                    width: 40,
                    height: 56
                })), r.createElement(i._8, {
                    display: i.R.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, r.createElement(i.Q, null, r.createElement(i._14, {
                    width: 150
                })), r.createElement(i.Q, {
                    fontSize: i.V.Size7
                }, r.createElement(i._14, {
                    width: 100
                }))))))
            }
    },
    "YEG/": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = n("yDzg"),
            s = n("CSlQ"),
            l = n("CwIZ"),
            c = n("Odds"),
            u = "subscribe-button__subscribe-tier-button",
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasPopupExperiment: !1
                    }, t.handleClick = function() {
                        t.openCheckout(), t.props.reportSubAction({
                            action: l.a.ClickCheckout,
                            checkoutButtonTier: t.props.tierPrice
                        })
                    }, t.setPopupExperiment = function() {
                        var e = a.o.experiments.getAssignment("TWILIGHT_SUB_CHECKOUT_POPUP");
                        t.setState({
                            hasPopupExperiment: "yes" === e
                        })
                    }, t.openCheckout = function() {
                        t.state.hasPopupExperiment && window.open(Object(o.a)(t.props.url, {
                            ref: "subscribe-tier-button"
                        }), "Twitch", "width=1000, height=1100, menubar, toolbar, location, personalbar, scrollbars")
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    !1 !== this.props.targetBlank && this.setPopupExperiment()
                }, t.prototype.render = function() {
                    if (this.props.isSubbedToTier) {
                        var e = Object(a.d)("Subscribed", "SubTierButton");
                        return i.createElement(c.v, {
                            ariaLabel: e,
                            "data-test-selector": u,
                            disabled: !0,
                            icon: c._25.Star
                        }, e)
                    }
                    var t = this.props.isEsportChannel ? Object(a.d)("Get the All-Access Pass", "SubTierButton") : Object(a.d)("Subscribe Now", "SubTierButton");
                    return i.createElement(c.v, r.__assign({
                        ariaLabel: t + " " + this.props.tierPrice,
                        "data-test-selector": u,
                        linkTo: this.state.hasPopupExperiment ? void 0 : this.props.url,
                        onClick: this.handleClick,
                        purchase: this.props.tierPrice
                    }, Object(c._63)(this.props), {
                        targetBlank: void 0 === this.props.targetBlank || this.props.targetBlank
                    }), t)
                }, t = r.__decorate([Object(s.d)("SubTierButton", {
                    autoReportInteractive: !0
                })], t)
            }(i.Component);
        n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return d
        })
    },
    YH6m: function(e, t, n) {
        "use strict";
        var r, i = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            s = n("vBst"),
            l = n("Tzcg"),
            c = n("CSlQ"),
            u = n("daN3"),
            d = n("37Pp"),
            p = n("YEG/"),
            m = n("FDYX"),
            h = n("CwIZ"),
            g = n("odx1"),
            f = n("Odds"),
            b = (n("6O9f"), "gift-subscription-button"),
            v = "subscribe-button";

        function y(e) {
            return "subscribe-button-modal-tab-" + e
        }! function(e) {
            e[e.Prime = 0] = "Prime", e[e.Tier1 = 1] = "Tier1", e[e.Tier2 = 2] = "Tier2", e[e.Tier3 = 3] = "Tier3"
        }(r || (r = {}));
        var _ = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.toggleActiveTab = function(e) {
                    if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-tier")) {
                        case "subscribe-button-modal-tab-" + r.Prime:
                            n.setState({
                                activeTab: r.Prime,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[0])
                            }), n.props.onSelectTierTab(r.Prime);
                            break;
                        case "subscribe-button-modal-tab-" + r.Tier1:
                            n.setState({
                                activeTab: r.Tier1,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[0])
                            }), n.props.onSelectTierTab(r.Tier1);
                            break;
                        case "subscribe-button-modal-tab-" + r.Tier2:
                            n.setState({
                                activeTab: r.Tier2,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[1])
                            }), n.props.onSelectTierTab(r.Tier2);
                            break;
                        case "subscribe-button-modal-tab-" + r.Tier3:
                            n.setState({
                                activeTab: r.Tier3,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[2])
                            }), n.props.onSelectTierTab(r.Tier3);
                            break;
                        default:
                            n.setState({
                                activeTab: r.Prime,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[0])
                            }), n.props.onSelectTierTab(r.Prime)
                    }
                }, n.getTabTitle = function() {
                    switch (n.state.activeTab) {
                        case r.Prime:
                            return Object(o.d)("Free Channel Sub with Twitch Prime", "SubTierTabs");
                        case r.Tier1:
                            return n.props.subscriptionProducts[0].displayName;
                        case r.Tier2:
                            return n.props.subscriptionProducts[1].displayName;
                        case r.Tier3:
                            return n.props.subscriptionProducts[2].displayName;
                        default:
                            return n.props.subscriptionProducts[0].displayName
                    }
                }, n.getTierSubscribeButton = function() {
                    var e = n.props.subscriptionProducts[n.state.activeTab - 1];
                    if (n.props.isGift) {
                        var t = Object(o.d)("Gift A Subscription", "SubTierTabs");
                        return n.props.giftRecipient ? a.createElement(u.a, {
                            subProductId: e.id,
                            giftRecipient: n.props.giftRecipient,
                            checkoutURL: e.url,
                            buttonMessage: t,
                            purchase: n.state.currentPurchasePrice,
                            onClick: n.reportGiftCheckoutAction
                        }) : a.createElement(f.v, {
                            ariaLabel: t + " " + n.state.currentPurchasePrice,
                            "data-test-selector": b,
                            onClick: n.onGiftSelect,
                            purchase: n.state.currentPurchasePrice
                        }, t)
                    }
                    return n.state.subbedTier === n.state.activeTab && n.state.activeTab === r.Prime ? a.createElement(g.a, {
                        authToken: n.props.authToken,
                        "data-a-target": "subscribe-with-prime-button",
                        isSubscribed: n.props.isSubscribed,
                        isSubscribedWithPrime: n.props.subbedTier === s.a.Prime,
                        onSubscribedWithPrime: n.onSubscribedWithPrime,
                        reportSubMenuAction: n.props.reportSubMenuAction,
                        subLogin: n.props.subLogin,
                        userHasPrime: n.props.userHasPrime,
                        canPrimeSubscribe: n.props.canPrimeSubscribe,
                        channelLogin: n.props.subLogin
                    }) : a.createElement(p.a, {
                        isSubbedToTier: n.state.subbedTier === n.state.activeTab,
                        tierPrice: n.state.currentPurchasePrice,
                        reportSubAction: n.props.reportSubMenuAction,
                        url: e.url,
                        "data-a-target": "subscribe-now-button",
                        "data-test-selector": v
                    })
                }, n.onSubscribedWithPrime = function() {
                    n.props.onSubscribedWithPrime && n.props.onSubscribedWithPrime()
                }, n.reportGiftCheckoutAction = function() {
                    n.props.reportSubMenuAction({
                        action: h.a.BuyGiftSub,
                        checkoutButtonTier: n.state.currentPurchasePrice,
                        giftRecipient: n.props.giftRecipient ? n.props.giftRecipient : null
                    })
                }, n.onGiftSelect = function() {
                    n.props.onGiftSelect && n.props.onGiftSelect()
                }, n.getTierExperimentAssignment = function() {
                    var e = o.o.experiments.getAssignment("TWILIGHT_MOBILE_SUBS_TIER_NAMES");
                    n.setState({
                        tierNameEnabled: "name" === e
                    })
                }, n.mapSubbedTierToTabs = function(e) {
                    e.subbedTier === s.a.Prime ? (n.setState({
                        activeTab: r.Prime,
                        subbedTier: r.Prime
                    }), e.onSelectTierTab(r.Prime)) : e.subbedTier === s.a.Tier1 ? (n.setState({
                        activeTab: r.Tier1,
                        subbedTier: r.Tier1
                    }), e.onSelectTierTab(r.Tier1)) : e.subbedTier === s.a.Tier2 ? (n.setState({
                        activeTab: r.Tier2,
                        subbedTier: r.Tier2
                    }), e.onSelectTierTab(r.Tier2)) : e.subbedTier === s.a.Tier3 ? (n.setState({
                        activeTab: r.Tier3,
                        subbedTier: r.Tier3
                    }), e.onSelectTierTab(r.Tier3)) : e.isGift ? e.onSelectTierTab(n.state.activeTab) : e.onSelectTierTab(r.Prime)
                }, n.getExtraEmotes = function(e) {
                    return (e === r.Tier2 ? Object(l.b)(n.props.subscriptionProducts[1].emotes) : Object(l.b)(n.props.subscriptionProducts[2].emotes.concat(n.props.subscriptionProducts[1].emotes))).map(function(e) {
                        return a.createElement(f._8, {
                            display: f.R.InlineFlex,
                            margin: {
                                right: .5
                            },
                            key: e.id
                        }, a.createElement("img", {
                            srcSet: "https://static-cdn.jtvnw.net/emoticons/v1/" + e.srcSet
                        }))
                    })
                }, n.state = n.getInitialState(), n
            }
            return i.__extends(t, e), t.prototype.componentWillMount = function() {
                this.mapSubbedTierToTabs(this.props), this.getTierExperimentAssignment()
            }, t.prototype.componentDidMount = function() {
                this.props.latencyTracking.reportInteractive()
            }, t.prototype.render = function() {
                var e = null;
                this.state.subbedTier && (e = a.createElement(f._8, {
                    display: f.R.InlineFlex,
                    margin: {
                        right: .5
                    },
                    className: "subscription-balloon-options__subbed-star"
                }, a.createElement(f._24, {
                    asset: f._25.Star
                })));
                var t = null,
                    n = null,
                    i = null,
                    l = this.state.tierNameEnabled ? Object(o.d)("Tier 3", "SubTierTabs") : this.props.subscriptionProducts[2].price,
                    c = a.createElement(f._8, {
                        display: f.R.InlineFlex
                    }, this.state.subbedTier === r.Tier3 && e, a.createElement(f._36, {
                        active: this.state.activeTab === r.Tier3,
                        "data-tier": y(r.Tier3),
                        "data-a-target": y(r.Tier3),
                        onClick: this.toggleActiveTab
                    }, l));
                if (this.props.subbedTier !== s.a.Prime || this.props.isGift || (t = a.createElement(f._8, {
                        display: f.R.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, a.createElement(f._8, {
                        display: f.R.InlineFlex,
                        margin: {
                            right: 1
                        },
                        className: "subscription-balloon-options__prime-crown"
                    }, a.createElement(f._24, {
                        asset: f._25.Crown
                    })), a.createElement(f._36, {
                        active: this.state.activeTab === r.Prime,
                        "data-tier": y(r.Prime),
                        "data-a-target": y(r.Prime),
                        onClick: this.toggleActiveTab
                    }, Object(o.d)("Prime", "SubTierTabs")))), !this.props.subbedTier || this.props.subbedTier === s.a.Tier1) {
                    var u = this.state.tierNameEnabled ? Object(o.d)("Tier 1", "SubTierTabs") : this.props.subscriptionProducts[0].price;
                    n = a.createElement(f._8, {
                        display: f.R.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === r.Tier1 && e, a.createElement(f._36, {
                        active: this.state.activeTab === r.Tier1,
                        "data-tier": y(r.Tier1),
                        "data-a-target": y(r.Tier1),
                        onClick: this.toggleActiveTab
                    }, u))
                }
                if (!this.props.subbedTier || this.props.subbedTier === s.a.Prime || this.props.subbedTier === s.a.Tier1 || this.props.subbedTier === s.a.Tier2) {
                    var p = this.state.tierNameEnabled ? Object(o.d)("Tier 2", "SubTierTabs") : this.props.subscriptionProducts[1].price;
                    i = a.createElement(f._8, {
                        display: f.R.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === r.Tier2 && e, a.createElement(f._36, {
                        active: this.state.activeTab === r.Tier2,
                        "data-tier": y(r.Tier2),
                        "data-a-target": y(r.Tier2),
                        onClick: this.toggleActiveTab
                    }, p))
                }
                var m = this.props.subscriptionProducts[1].emotes.length,
                    h = m + this.props.subscriptionProducts[2].emotes.length,
                    g = null;
                (m > 0 && this.state.activeTab === r.Tier2 || h > 0 && this.state.activeTab === r.Tier3) && (g = a.createElement(f._8, {
                    display: f.R.InlineFlex,
                    alignItems: f.c.Center
                }, this.getExtraEmotes(this.state.activeTab), a.createElement(f.Q, {
                    bold: !0
                }, Object(o.d)("{extraEmoteCount, plural, one {Plus {extraEmoteCount, number} extra channel emote} other {Plus {extraEmoteCount, number} extra channel emotes}}", {
                    extraEmoteCount: this.state.activeTab === r.Tier2 ? m : h
                }, "SubTierTabs"))));
                var b = this.props.subscriptionProducts[this.state.activeTab - 1];
                return a.createElement(f._8, {
                    className: "channel-header__subscription-balloon-options"
                }, a.createElement(f._8, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(f._37, null, t, n, i, c)), a.createElement(f._8, null, a.createElement(f._8, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(f.Q, {
                    type: f._49.H5,
                    bold: !0
                }, this.getTabTitle())), a.createElement(f._8, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(f.Q, null, Object(o.d)("{availableEmoteCount, plural, one {Includes {availableEmoteCount, number} emoticon, subscriber badge, and customizable messages upon subscribing} other {Includes {availableEmoteCount, number} emoticons, subscriber badge, and customizable messages upon subscribing}}", {
                    availableEmoteCount: this.props.subscriptionProducts[0].emotes.length
                }, "SubTierTabs"))), g, a.createElement(d.a, {
                    subscriptionProduct: b,
                    isGift: this.props.isGift
                }), a.createElement(f._8, {
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, this.getTierSubscribeButton())))
            }, t.prototype.getInitialState = function() {
                var e = this.props.subscriptionProducts[0].price;
                return (Object(m.d)(this.props.subscriptionProducts) || Object(m.c)(this.props.subscriptionProducts)) && (e = Object(m.a)(this.props.subscriptionProducts[0], this.props.isGift)), {
                    activeTab: r.Tier1,
                    currentPurchasePrice: e,
                    subbedTier: null,
                    tierNameEnabled: !1
                }
            }, t.prototype.getPrice = function(e) {
                return Object(m.d)(this.props.subscriptionProducts) || Object(m.c)(this.props.subscriptionProducts) ? Object(m.a)(e, this.props.isGift) : e.price
            }, t = i.__decorate([Object(c.d)("SubTierTabs")], t)
        }(a.Component);
        n.d(t, !1, function() {
            return b
        }), n.d(t, !1, function() {
            return v
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, !1, function() {
            return y
        }), n.d(t, "a", function() {
            return _
        })
    },
    YUUt: function(e, t, n) {
        e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc37349dfbde7c720.png"
    },
    YVIF: function(e, t) {},
    YugT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowButton_FollowEvent_User"
                },
                variableDefinitions: [{
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
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isPartner"
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
                                            }]
                                        }
                                    }]
                                }
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
                end: 157
            }
        };
        n.loc.source = {
            body: "query FollowButton_FollowEvent_User($id: ID!) {\nuser(id: $id) {\nid\nisPartner\nstream {\nid\ngame {\nid\nname\n}\n}\nhosting {\nid\nstream {\nid\ngame {\nid\nname\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "Z+EN": function(e, t) {},
    Zifq: function(e, t) {},
    a0ve: function(e, t) {},
    a0y1: function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            i = n("Aj/L"),
            a = n("TTpp");
        var o = Object(r.b)(function(e) {
            return {
                user: Object(i.c)(e)
            }
        })(a.a);
        n.d(t, "a", function() {
            return o
        })
    },
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return k
        });
        var r = n("TToO"),
            i = n("HW6M"),
            a = (n.n(i), n("OAwv")),
            o = (n.n(a), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("6sO2"),
            c = n("iOr9"),
            u = n("vKFS"),
            d = n("SZoP"),
            p = n("mi6k"),
            m = n("CSlQ"),
            h = n("81qH"),
            g = n("Tg4T"),
            f = n("Odds"),
            b = n("a0ve"),
            v = (n.n(b), "video-view-count"),
            y = "video-length",
            _ = function(e) {
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
                        return o.createElement(u.a, {
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
                        null !== n && (e = o.createElement(f._8, {
                            position: f._15.Absolute,
                            attachBottom: !0,
                            fullWidth: !0
                        }, o.createElement(f._18, {
                            size: f._20.Small,
                            value: n,
                            mask: !0
                        })));
                        var i = {
                            productName: t.props.video.restriction && t.props.video.restriction.productName,
                            title: t.props.video.restriction && t.props.video.restriction.productTitle,
                            canViewRestricted: t.props.video.self && !t.props.video.self.isRestricted || !1
                        };
                        return o.createElement("div", r.__assign({
                            onClick: t.onClickHandler,
                            onMouseEnter: t.onMouseEnterHandler,
                            onMouseLeave: t.onMouseLeaveHandler
                        }, Object(f._63)(t.props)), o.createElement(f.C, null, o.createElement(f._8, {
                            fullWidth: !0
                        }, o.createElement(f.k, {
                            overflow: !0
                        }, o.createElement("div", null, o.createElement(g.a, {
                            videoID: t.props.video.id,
                            restriction: i
                        }), o.createElement(f._35, {
                            display: f.R.InlineFlex,
                            position: f._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: .5,
                            zIndex: f._62.Default,
                            fontSize: f.V.Size6,
                            background: f.n.Overlay,
                            color: f.K.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(f._34, {
                            "data-test-selector": v,
                            icon: f._25.GlyphViews,
                            label: Object(l.d)("views", "VideoPreviewCard"),
                            value: Object(l.f)(t.props.video.viewCount)
                        })), o.createElement(f._35, {
                            display: f.R.InlineFlex,
                            position: f._15.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            margin: .5,
                            zIndex: f._62.Default,
                            fontSize: f.V.Size6,
                            background: f.n.Overlay,
                            color: f.K.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(f._34, {
                            "data-test-selector": y,
                            icon: f._25.GlyphLength,
                            label: Object(l.d)("length", "VideoPreviewCard"),
                            value: Object(p.b)(t.props.video.lengthSeconds)
                        })), t.videoPreviewImage(), e))), o.createElement(f.D, null, o.createElement(f._8, {
                            display: f.R.Flex,
                            flexDirection: f.T.Row,
                            flexWrap: f.U.NoWrap,
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    return o.createElement(c.a, r.__assign({}, e))
                }, t.prototype.generateSearchString = function() {
                    var e = {};
                    this.props.collectionID && (e.collection = this.props.collectionID);
                    var t = a.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = i("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        }),
                        n = i("video-preview-card__preview-image", {
                            "video-preview-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return o.createElement(f.k, {
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
                    }, o.createElement(f._2, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(f.k, {
                        ratio: f.l.Aspect16x9
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
                        n = i("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        });
                    return o.createElement(f._8, {
                        "data-test-selector": "game-box-art",
                        display: f.R.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(f._2, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(f._52, {
                        display: f.R.Block,
                        direction: f._54.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(f.E, {
                        aspect: f.l.BoxArt,
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
                    return o.createElement(f._8, {
                        display: f.R.Flex,
                        flexDirection: f.T.Column,
                        overflow: f._11.Hidden
                    }, o.createElement(f._8, {
                        "data-test-selector": "video-title",
                        overflow: f._11.Hidden,
                        position: f._15.Relative
                    }, o.createElement(f.Q, {
                        color: f.K.Base,
                        fontSize: f.V.Size5,
                        lineHeight: f._9.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(f._8, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(f.Q, {
                        type: f._49.Span,
                        color: f.K.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(f._2, {
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
            }(o.Component),
            k = Object(m.d)("VideoPreviewCard")(_)
    },
    aMxy: function(e, t, n) {
        "use strict";
        var r = n("arZ9");
        n.n(r);
        n.o(r, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
            return r.FrienshipChangeType
        }), n.o(r, "ModerationActions") && n.d(t, "ModerationActions", function() {
            return r.ModerationActions
        }), n.o(r, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
            return r.PubsubMessageType
        }), n.o(r, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
            return r.PubsubTopic
        }), n.o(r, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
            return r.TargetedModerationActions
        });
        var i = n("GHQc");
        n.n(i);
        n.o(i, "FrienshipChangeType") && n.d(t, "FrienshipChangeType", function() {
            return i.FrienshipChangeType
        }), n.o(i, "ModerationActions") && n.d(t, "ModerationActions", function() {
            return i.ModerationActions
        }), n.o(i, "PubsubMessageType") && n.d(t, "PubsubMessageType", function() {
            return i.PubsubMessageType
        }), n.o(i, "PubsubTopic") && n.d(t, "PubsubTopic", function() {
            return i.PubsubTopic
        }), n.o(i, "TargetedModerationActions") && n.d(t, "TargetedModerationActions", function() {
            return i.TargetedModerationActions
        });
        var a = n("/3Lr");
        n.d(t, "FrienshipChangeType", function() {
            return a.a
        }), n.d(t, "ModerationActions", function() {
            return a.b
        }), n.d(t, "PubsubMessageType", function() {
            return a.c
        }), n.d(t, "PubsubTopic", function() {
            return a.d
        }), n.d(t, "TargetedModerationActions", function() {
            return a.e
        })
    },
    arZ9: function(e, t) {},
    c6bv: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("HW6M"),
            a = n("GiK3"),
            o = n("CSlQ"),
            s = n("Odds"),
            l = (n("zaS7"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOfferImage = function() {
                        return a.createElement(s._8, {
                            textAlign: s._45.Center,
                            breakpointMedium: {
                                textAlign: s._45.Right
                            },
                            className: "twitch-prime-fortnite__offer-image twitch-prime-fortnite__offer-image--desktop"
                        }, a.createElement(s.N, {
                            alt: "Offer items",
                            src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/LandingPage_OfferComp_934x730.png"
                        }))
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = i({
                            "twitch-prime-fortnite-header": !0,
                            "twitch-prime-fortnite-header--centered": this.props.alwaysCentered
                        }),
                        t = i({
                            "twitch-prime-fortnite__header__logo": !0,
                            "twitch-prime-fortnite__header__logo--centered": this.props.alwaysCentered
                        });
                    return a.createElement(s._8, {
                        className: "twitch-prime-fortnite__header__container",
                        padding: {
                            x: 1,
                            top: 1
                        }
                    }, a.createElement(s._8, {
                        className: e
                    }, a.createElement(s._8, {
                        className: "twitch-prime-fortnite__header",
                        display: s.R.Flex,
                        alignItems: s.c.End,
                        justifyContent: s._7.Center,
                        flexWrap: s.U.Wrap,
                        textAlign: s._45.Left,
                        "data-test-selector": "twitch-prime-fortnite-header",
                        margin: {
                            y: 0,
                            x: "auto"
                        },
                        padding: {
                            x: 1
                        }
                    }, a.createElement(s._8, {
                        textAlign: s._45.Center,
                        breakpointMedium: {
                            textAlign: s._45.Left
                        },
                        breakpointLarge: {
                            margin: {
                                bottom: 5
                            },
                            padding: {
                                left: 5
                            }
                        },
                        alignSelf: s.d.Center,
                        className: "twitch-prime-fortnite__header__section"
                    }, a.createElement(s._8, {
                        className: t,
                        margin: {
                            y: 2
                        }
                    }, a.createElement("img", {
                        src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/logo.png"
                    })), this.props.children), this.props.renderOfferImage && this.renderOfferImage())))
                }, t
            }(a.Component)),
            c = Object(o.d)("TwitchPrimeBrandedHeader", {
                autoReportInteractive: !0
            })(l);
        n.d(t, !1, function() {
            return "twitch-prime-fortnite-header"
        }), n.d(t, !1, function() {
            return l
        }), n.d(t, "a", function() {
            return c
        })
    },
    c8Oh: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.userPreferences.languagePreferences
        };
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("V9YC"),
            o = n("iJpA");
        i.o.store.registerReducer("userPreferences", function(e, t) {
            switch (void 0 === e && (e = {
                languagePreferences: Object(o.b)()
            }), t.type) {
                case a.a:
                    return r.__assign({}, e, {
                        languagePreferences: t.languagePreferences
                    });
                default:
                    return e
            }
        })
    },
    daN3: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = n("7vx8"),
            s = n("yDzg"),
            l = n("CSlQ"),
            c = n("Odds"),
            u = n("lK86"),
            d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleClick = function() {
                        return n.openCheckout(), n.props.onClick && n.props.onClick()
                    }, n.openCheckout = function() {
                        n.state.hasPopupExperiment && n.props.checkoutURL && n.props.giftRecipient && window.open(Object(s.a)(n.props.checkoutURL, {
                            recipient: n.props.giftRecipient,
                            ref: "gift-subscribe-button"
                        }), "Twitch", "width=1000, height=1100, menubar, toolbar, location, personalbar, scrollbars")
                    };
                    var r = a.o.experiments.getAssignment("TWILIGHT_SUB_CHECKOUT_POPUP");
                    return n.state = {
                        hasPopupExperiment: "yes" === r
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = !!(this.props.data && this.props.data.user && this.props.data.user.self) && this.props.data.user.self.canGift;
                    this.props.checkoutURL ? this.props.isEsportChannel ? (e = Object(a.d)("Buy All-Access Pass Gift", "GiftSubscribeButton"), t = "esports-checkout-gift-subscribe-button") : (e = Object(a.d)("Buy Gift Subscription", "GiftSubscribeButton"), t = "checkout-gift-subscribe-button") : this.props.isEsportChannel ? (e = Object(a.d)("Gift All-Access Pass", "GiftSubscribeButton"), t = "esports-gift-subscribe-button") : (e = Object(a.d)("Gift Subscription", "GiftSubscribeButton"), t = "gift-subscribe-button");
                    var r = this.props.checkoutURL && this.props.giftRecipient ? Object(s.a)(this.props.checkoutURL, {
                        recipient: this.props.giftRecipient
                    }) : "";
                    return i.createElement(c.v, {
                        targetBlank: !0,
                        disabled: !n,
                        onClick: this.handleClick,
                        linkTo: this.state.hasPopupExperiment ? void 0 : r,
                        "data-test-selector": t,
                        purchase: this.props.purchase
                    }, this.props.buttonMessage || e)
                }, t = r.__decorate([Object(l.d)("GiftSubscribeButton", {
                    autoReportInteractive: !0
                }), Object(o.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                recipientLogin: e.giftRecipient,
                                subProductId: e.subProductId
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.giftRecipient || !e.subProductId
                    }
                })], t)
            }(i.Component);
        n.d(t, !1, function() {
            return "gift-subscribe-button"
        }), n.d(t, !1, function() {
            return "checkout-gift-subscribe-button"
        }), n.d(t, !1, function() {
            return "esports-gift-subscribe-button"
        }), n.d(t, !1, function() {
            return "esports-checkout-gift-subscribe-button"
        }), n.d(t, "a", function() {
            return d
        })
    },
    dlQw: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return i
        });
        n("6sO2");
        var r = "twitch_prime_fortnite_offer_id",
            i = "c0b1816d-300b-d234-828e-59e76119bffe"
    },
    eBiB: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (e && "v" === e.charAt(0)) return e.substring(1);
            return e
        }
    },
    ea7N: function(e, t) {},
    ehrk: function(e, t) {},
    fc0G: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("F8kA"),
            o = n("6sO2"),
            s = n("hdYS"),
            l = n("+Znq"),
            c = n("vH/s"),
            u = n("LjAQ"),
            d = n("mw/a"),
            p = n("70dR"),
            m = n("Odds"),
            h = (n("Zifq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportHosterClick = function() {
                        t.props.isLoggedIn ? t.props.showReportUserModal({
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentType: d.a.User,
                                targetUserID: t.props.hostChannelID
                            },
                            title: Object(o.d)("Report {channelDisplayName}", {
                                channelDisplayName: t.props.hostChannelDisplayName
                            }, "VideoPlayerHostingUI")
                        }) : t.props.login()
                    }, t.handleReportModalClose = function(e) {
                        (e === u.b.MutationError || e === u.b.Success) && t.props.history.push("/")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = !!this.props.hostedChannelDisplayName;
                    return i.createElement(m._35, {
                        className: "video-player-hosting-ui__container"
                    }, e && this.renderHeader(), i.createElement("span", {
                        key: "video-player"
                    }, this.props.children), i.createElement(m._8, {
                        display: e ? m.R.Block : m.R.Hide,
                        position: m._15.Relative,
                        zIndex: m._62.Above
                    }, e && this.renderFooter()))
                }, t.prototype.renderHeader = function() {
                    return i.createElement(m.e, {
                        type: m.j.SlideInBottom,
                        delay: m.f.Medium,
                        duration: m.g.Medium,
                        enabled: !0
                    }, i.createElement(a.a, {
                        key: "hosting-ui-header",
                        className: "video-player-hosting-ui__link",
                        to: {
                            pathname: "/" + this.props.hostedChannelLogin,
                            state: {
                                medium: c.PageviewMedium.Channel,
                                content: c.PageviewContent.Host
                            }
                        },
                        "data-a-target": "hosting-ui-link",
                        "data-test-selector": "video-player-hosting-ui__header"
                    }, i.createElement(m._35, {
                        className: "video-player-hosting-ui__header",
                        display: m.R.Flex,
                        background: m.n.AccentAlt2,
                        color: m.K.Overlay,
                        alignItems: m.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        "data-a-target": "hosting-ui-header"
                    }, i.createElement(m._8, {
                        className: "video-player-hosting-ui__avatar-container"
                    }, i.createElement(m.m, {
                        src: this.props.hostedChannelProfileImageURL || "",
                        size: 30,
                        alt: Object(o.d)("Hosted Channel {hostedChannelDisplayName}'s Avatar", {
                            hostedChannelDisplayName: this.props.hostedChannelDisplayName || ""
                        }, "VideoPlayerHostingUI")
                    })), i.createElement(m._35, {
                        margin: {
                            left: 1
                        },
                        fontSize: m.V.Size5
                    }, Object(o.d)("Hosting", "VideoPlayerHostingUI"), " ", i.createElement(m.Q, {
                        type: m._49.Span,
                        className: "video-player-hosting-ui__channel-name",
                        color: m.K.OverlayAlt,
                        "data-a-target": "hosting-ui-channel-name"
                    }, this.props.hostedChannelDisplayName)))))
                }, t.prototype.renderFooter = function() {
                    return i.createElement(m.e, {
                        type: m.j.SlideInTop,
                        enabled: !0,
                        delay: m.f.Medium,
                        duration: m.g.Medium
                    }, i.createElement(m._35, {
                        key: "hosting-ui-footer",
                        background: m.n.AccentAlt2,
                        className: "video-player-hosting-ui__footer",
                        display: m.R.Block,
                        padding: 1,
                        "data-test-selector": "video-player-hosting-ui__footer",
                        "data-a-target": "hosting-ui-footer"
                    }, i.createElement(m._8, {
                        padding: {
                            y: .5
                        },
                        display: m.R.Flex,
                        justifyContent: m._7.Between
                    }, i.createElement(m._8, {
                        display: m.R.Flex
                    }, i.createElement(m._8, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement(s.a, {
                        "data-a-target": "hosting-ui-follow-button",
                        channelName: this.props.hostedChannelLogin || "",
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelLogin: this.props.hostChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        isHostedFollow: !0,
                        balloonDirection: m.r.BottomLeft,
                        followUIType: s.b.IconAndText,
                        unfollowUIType: s.b.IconOnly
                    })), i.createElement(m._8, null, i.createElement(p.a, {
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        "data-a-target": "hosting-ui-subscribe-button"
                    }))), i.createElement(l.a, null, i.createElement(m.w, {
                        ariaLabel: Object(o.d)("More options", "HostingUI"),
                        overlay: !0,
                        icon: m._25.More,
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-more-button"
                    }), i.createElement(m.q, {
                        direction: m.r.TopRight,
                        "data-a-target": "hosting-ui-more-balloon"
                    }, i.createElement(m._8, {
                        padding: {
                            y: 1
                        }
                    }, i.createElement(m._6, {
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-report-button"
                    }, i.createElement(m._8, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, Object(o.d)("Report {hostChannelDisplayName}", {
                        hostChannelDisplayName: this.props.hostChannelDisplayName
                    }, "VideoPlayerHostingUI")))))))))
                }, t
            }(i.Component)),
            g = n("RH2O"),
            f = n("2KeS"),
            b = n("+xm8"),
            v = n("V5M+"),
            y = n("f2i/"),
            _ = n("Aj/L"),
            k = n("oSFp");
        var S = Object(g.b)(function(e) {
                return {
                    isLoggedIn: Object(_.d)(e)
                }
            }, function(e) {
                return Object(f.b)({
                    login: function() {
                        return Object(y.f)(b.a.ReportHoster)
                    },
                    showReportUserModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(v.d)(k.a, t)
                    }
                }, e)
            })(Object(a.f)(h)),
            T = n("CIox"),
            w = n("BhGt"),
            P = [];
        w.onchange = function() {
            P.forEach(function(e) {
                e()
            })
        };
        var E = n("7enT"),
            O = n("0nzt"),
            C = n("Hjbq"),
            R = n("j0cR"),
            N = n("HW6M"),
            I = n("BwgW"),
            L = n("knr3"),
            x = n("OAwv"),
            F = n("eBiB"),
            j = n("HM6l"),
            D = n("JpYe"),
            M = n("ZVME"),
            U = n("CSlQ"),
            A = n("L3z0"),
            B = n("5MsU"),
            V = n("ijOz"),
            G = n("Tjmd"),
            H = (n("4NZK"), n("Ryxq")),
            W = {
                allowfullscreen: !0,
                externalfullscreen: !1,
                autoplay: !0,
                branding: !1,
                channelInfo: !1,
                controls: !0,
                height: "100%",
                playsinline: !0,
                player: V.c.Site,
                showInfo: !1,
                showtheatre: !1,
                trackingProperties: {
                    client_app: "twilight"
                },
                width: "100%",
                oauth_token: ""
            };

        function z() {
            return !!window.Twitch && !!window.Twitch.Player
        }
        var Q = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = o.j.withCategory("video-player"), n.checkPlayerDependencyStatus = function() {
                        z() ? (n.setState({
                            canInitializePlayer: !0
                        }), n.checkPlayerDependencyAnimationFrame = null) : n.checkPlayerDependencyAnimationFrame = requestAnimationFrame(n.checkPlayerDependencyStatus)
                    }, n.attachRef = function(e) {
                        return n.playerRef = e
                    }, n.onMetadataLoaded = function() {
                        var e = n.player && n.player.getSessionInfo();
                        e && (n.logger.debug("Got player session info from player instance", e), o.n.setVideoPlayerTrackingData({
                            broadcastID: e.broadcastId,
                            playSessionID: e.playSessionId
                        }))
                    }, n.onOpenStream = function() {
                        if (n.props.playerTypeOverride === V.c.Frontpage && n.player)
                            if (n.props.channelLogin) o.o.history.push("/" + n.props.channelLogin);
                            else if (n.props.vodID) {
                            var e = Math.floor(n.player.getCurrentTime());
                            o.o.history.push("/videos/" + n.props.vodID + "?t=" + Object(H.a)(e))
                        } else n.props.collectionID && o.o.history.push("/collections/" + n.props.collectionID)
                    }, n.onPlayerReady = function() {
                        n.player && (n.logger.debug("Ready"), n.props.latencyTracking.reportInteractive(), n.hasPlayed = !1, n.props.latencyTracking.reportCustomEvent(n.playerLoaded), n.setState({
                            playerInitialized: !0
                        }, n.updatePlayerTrackingDataFromProps))
                    }, n.onPlayerPlay = function() {
                        n.logger.debug("Play"), n.reportPlayerBuffering(), n.lastPausedProp = !1, n.togglePause(!1)
                    }, n.onPlayerPlaying = function() {
                        n.logger.debug("Playing"), n.reportPlayerPlayed(), n.lastPausedProp = !1, n.state.playerRefID !== n.props.activeVideoPlayerRefID && n.props.reportPlayerInstanceStarted && n.props.reportPlayerInstanceStarted(n.state.playerRefID), n.togglePause(!1)
                    }, n.onPause = function() {
                        n.logger.debug("Pause"), n.lastPausedProp = !0, n.togglePause(!0)
                    }, n.togglePause = function(e) {
                        n.setState({
                            playerPaused: e
                        }), n.props.onPauseToggled && n.props.onPauseToggled(e)
                    }, n.onStreamStatusOnline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(B.a.Online)
                    }, n.onStreamStatusOffline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(B.a.Offline)
                    }, n.onTheatreChange = function(e) {
                        e ? (n.logger.debug("Theatre Entered"), n.props.enableTheatreMode && !n.props.theatreModeEnabled && n.props.enableTheatreMode()) : (n.logger.debug("Theatre Exited"), n.props.disableTheatreMode && n.props.theatreModeEnabled && n.props.disableTheatreMode())
                    }, n.onFullScreenChange = function() {
                        n.player && (n.logger.debug("Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && n.setState({
                            isFullScreen: n.player.fullscreen
                        }))
                    }, n.onExternalFullScreenChange = function() {
                        n.player && (n.logger.debug("External Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && (n.player.fullscreen ? n.enterFullscreen() : n.exitFullscreen()))
                    }, n.onClipsModerationOpen = function(e) {
                        n.player && (n.logger.debug("Clips Moderation Open", e), n.props.onClipsModerationOpen && n.props.onClipsModerationOpen(e))
                    }, n.onTwilightFullscreenChange = function() {
                        var e = n.props.fullscreen.element(),
                            t = !!e && !!n.playerRef && e.contains(n.playerRef);
                        n.state.isFullScreen && !t && n.exitFullscreen()
                    }, n.onSeek = function() {
                        n.props.onSeek && n.player && n.props.onSeek(n.player.getCurrentTime())
                    }, n.onTimeUpdate = function() {
                        n.props.onVideoTimeChange && n.player && n.props.onVideoTimeChange(n.player.getCurrentTime())
                    }, n.onHistoryChange = function() {
                        n.state.isFullScreen && n.exitFullscreen()
                    }, n.onTransitionToCollectionVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(F.a)(e.vodId)), e.collectionId && (t.collectionID = e.collectionId), n.props.onNavigationRequest(t)
                        }
                    }, n.onTransitionToRecommendedVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(F.a)(e.vodId)), n.props.onNavigationRequest(t)
                        }
                    }, n.onPersistentPlayerToggled = function() {
                        n.props.togglePersistentPlayer && n.props.togglePersistentPlayer()
                    }, n.updatePlayerTrackingData = function(e) {
                        if (n.state.playerInitialized && n.player) {
                            var t = o.n.getLastPageview(),
                                i = {
                                    host_channel: e.hostChannel,
                                    collapse_right: !e.rightColumnExpanded,
                                    collapse_left: !e.sideNavExpanded
                                };
                            t ? n.logger.debug("Tracking data updated.", {
                                pageviewProperties: t,
                                updates: i
                            }) : n.logger.debug("pageviewProperties not found; only hosting status updated", {
                                pageviewProperties: t,
                                updates: i
                            }), n.player.setTrackingProperties(r.__assign({}, t, i))
                        }
                    }, n.updatePlayerTrackingDataFromProps = function() {
                        n.updatePlayerTrackingData(n.props)
                    }, n.updatePlayerType = function(e) {
                        var t = e || W.player;
                        n.player && n.playerType !== t && (n.player.setPlayerType(t), n.playerType = t)
                    }, n.maybeRecordClip = function() {
                        n.player && n.state.playerInitialized && n.player.recordClip()
                    }, n.playerBuffering = n.registerBufferingEvent(), n.playerCreated = n.registerCreatedEvent(), n.playerLoaded = n.registerLoadedEvent(), n.playerPlayed = n.registerPlayedEvent(), n.state = {
                        canInitializePlayer: z(),
                        playerInitialized: !1,
                        isFullScreen: !1,
                        playerPaused: !1,
                        playerRefID: Object(j.a)()
                    }, n.playerType = t.playerTypeOverride || W.player, n.lastSetChannel = t.channelLogin, t.fullscreen.addChangeListener(n.onTwilightFullscreenChange), t.instanceRef && t.instanceRef(n), n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.props.latencyTracking.reportCustomEvent(this.playerCreated), this.bindHotKeys(), this.historyUnlistener = this.props.history.listen(this.onHistoryChange), this.state.canInitializePlayer ? this.initializePlayer() : this.checkPlayerDependencyAnimationFrame = window.requestAnimationFrame(this.checkPlayerDependencyStatus), o.n.eventEmitter.addListener(c.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps), window.__playerScriptChunk && !t.tagInjected) {
                        this.logger.debug("Loading player chunk after page loaded");
                        var e = document.createElement("script");
                        e.async = !0, e.crossOrigin = "anonymous", e.src = window.__playerScriptChunk, document.body.appendChild(e);
                        var n = document.createElement("link");
                        n.href = window.__playerStyleChunk, n.media = "screen", n.rel = "stylesheet", n.type = "text/css", document.body.appendChild(n), t.tagInjected = !0
                    }
                }, t.prototype.componentWillUpdate = function(e, t) {
                    if (this.state.canInitializePlayer || !t.canInitializePlayer) {
                        if (t.canInitializePlayer && t.playerInitialized) {
                            if (this.updatePlayerTrackingData(e), this.updatePlayerType(e.playerTypeOverride), this.player && t.isFullScreen !== this.player.fullscreen && this.player.setFullscreen(t.isFullScreen), this.player) {
                                var n = this.props.editing || {},
                                    r = e.editing || {},
                                    i = n.startOffset,
                                    a = n.endOffset,
                                    s = n.videoUrl,
                                    l = n.isPostEdit;
                                s !== r.videoUrl && r.slug && this.player.setEditClipStream({
                                    videoUrl: r.videoUrl,
                                    slug: r.slug
                                }), l !== r.isPostEdit && this.player.updateClipsEditing({
                                    isPostEdit: r.isPostEdit
                                }), i === r.startOffset && a === r.endOffset || this.player.updateEditingOffsets([{
                                    startOffset: r.startOffset,
                                    endOffset: r.endOffset
                                }])
                            }
                            this.player && e.clipSlug && this.props.clipSlug !== e.clipSlug && this.player.setClip(e.clipSlug), this.player && e.theatreModeEnabled !== this.player.getTheatre() && this.player.setTheatre(e.theatreModeEnabled), this.player && e.miniModeEnabled !== this.props.miniModeEnabled && this.player.setMiniPlayerMode(!!e.miniModeEnabled), this.player && t.playerPaused !== this.lastPausedProp && (t.playerPaused ? this.player.pause() : t.playerPaused || this.player.play(), this.lastPausedProp = t.playerPaused);
                            var c = e.channelLogin !== this.lastSetChannel;
                            if (this.player && e.channelLogin && (c || Object(G.a)(this.props, e))) return this.logger.debug("Setting Channel: ", e.channelLogin), this.player.setChannel(e.channelLogin), this.lastSetChannel = e.channelLogin, void o.n.setVideoPlayerTrackingData({
                                vodID: void 0
                            });
                            var u = e.collectionID && this.props.collectionID !== e.collectionID,
                                d = e.vodID && this.props.vodID !== e.vodID;
                            if (u || d) {
                                var p = e.vodID ? Object(D.b)(e.vodID) : "";
                                if ("" !== p && o.n.setVideoPlayerTrackingData({
                                        vodID: e.vodID
                                    }), !this.player) return;
                                u || e.collectionID && d ? this.player.setCollection(e.collectionID, p, e.nextVideoOffset) : this.player.setVideo(p, e.nextVideoOffset)
                            } else void 0 !== e.nextVideoOffset && e.nextVideoOffset >= 0 && this.props.nextVideoOffset !== e.nextVideoOffset && this.player && this.player.setCurrentTime(e.nextVideoOffset)
                        }
                    } else this.initializePlayer()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (void 0 !== e.paused && this.props.paused !== e.paused) this.togglePause(e.paused);
                    else {
                        var t = this.props.activeVideoPlayerRefID,
                            n = e.activeVideoPlayerRefID;
                        t !== n && (n === this.state.playerRefID && this.state.playerPaused ? this.togglePause(!1) : n === this.state.playerRefID || this.state.playerPaused || this.togglePause(!0))
                    }
                }, t.prototype.render = function() {
                    var e = N("video-player", {
                            "video-player--theatre": this.props.theatreModeEnabled,
                            "video-player--theatre-whispers": this.props.theatreModeEnabled && this.props.isWhispersBottomBarVisible,
                            "video-player--logged-in": this.props.isLoggedIn,
                            "video-player--fullscreen": this.state.isFullScreen
                        }),
                        t = N("video-player__container", {
                            "video-player__container--clips": V.a.includes(this.playerType)
                        });
                    return i.createElement("div", {
                        className: N(e),
                        "data-test-selector": "video-player"
                    }, i.createElement("div", {
                        className: t,
                        ref: this.attachRef
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.props.latencyTracking.reportInteractive(), this.unbindHotKeys(), this.historyUnlistener && this.historyUnlistener(), this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), this.maybeDetachFromWindow(), this.state.isFullScreen && this.exitFullscreen(), this.props.fullscreen.removeChangeListener(this.onTwilightFullscreenChange), this.props.onDestroy && this.props.onDestroy(), o.n.eventEmitter.removeListener(c.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps), this.player && (this.player.removeEventListener(B.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(B.a.Online, this.onStreamStatusOnline), this.player.removeEventListener(B.a.Offline, this.onStreamStatusOffline), this.player.removeEventListener(A.a.Ended, this.onStreamStatusOffline), this.player.removeEventListener(A.a.Play, this.onPlayerPlay), this.player.removeEventListener(A.a.Playing, this.onPlayerPlaying), this.player.removeEventListener(B.a.TheatreChange, this.onTheatreChange), this.player.removeEventListener(B.a.TransitionToCollectionVOD, this.onTransitionToCollectionVod), this.player.removeEventListener(B.a.FullscreenChange, this.onFullScreenChange), this.player.removeEventListener(B.a.ExternalFullscreenChange, this.onExternalFullScreenChange), this.player.removeEventListener(A.a.Seeked, this.onSeek), this.player.removeEventListener(A.a.TimeUpdate, this.onTimeUpdate), this.player.removeEventListener(B.a.OpenStream, this.onOpenStream), this.player.removeEventListener(A.a.Pause, this.onPause), this.player.removeEventListener(B.a.PersistenPlayerToggle, this.onPersistentPlayerToggled), this.player.removeEventListener(A.a.LoadedMetadata, this.onMetadataLoaded), I.extensionService.unregisterPlayer(), this.player.destroy()), o.n.setVideoPlayerTrackingData({
                        vodID: void 0
                    })
                }, t.prototype.trackMiniPlayerAction = function(e, t) {
                    this.player && this.state.playerInitialized && this.player.trackMiniPlayerAction(e, t)
                }, t.prototype.initializePlayer = function() {
                    var e = r.__assign({}, W, {
                        showtheatre: !this.props.disableTheatreButton,
                        allowfullscreen: !this.props.disableFullscreen,
                        externalfullscreen: this.props.fullscreen.supported(),
                        autoplay: !this.props.paused
                    });
                    this.props.playerTypeOverride && (e.player = this.props.playerTypeOverride, this.playerType = this.props.playerTypeOverride, this.props.playerTypeOverride === V.c.ClipsEditing && (e.muted = !0)), this.props.channelLogin && (e.channel = this.props.channelLogin, this.lastSetChannel = this.props.channelLogin), this.props.collectionID && (e.collection = this.props.collectionID), this.props.clipSlug && (e.clip = this.props.clipSlug), this.props.vodID && (e.video = Object(D.b)(this.props.vodID), o.n.setVideoPlayerTrackingData({
                        vodID: this.props.vodID
                    })), this.props.showChannelInfoOnHover && (e.showInfo = this.props.showChannelInfoOnHover), void 0 !== this.props.nextVideoOffset && this.props.nextVideoOffset >= 0 && (e.time = Object(H.a)(this.props.nextVideoOffset)), this.lastPausedProp = this.props.paused, e.oauth_token = this.props.authToken || "", this.logger.debug("Initializing", e);
                    var t = new window.Twitch.Player(this.playerRef, e);
                    this.player = t, t.addEventListener(B.a.PlayerReady, this.onPlayerReady), t.addEventListener(B.a.Online, this.onStreamStatusOnline), t.addEventListener(B.a.Offline, this.onStreamStatusOffline), t.addEventListener(A.a.Ended, this.onStreamStatusOffline), t.addEventListener(A.a.Play, this.onPlayerPlay), t.addEventListener(A.a.Playing, this.onPlayerPlaying), t.addEventListener(A.a.Seeked, this.onSeek), t.addEventListener(A.a.TimeUpdate, this.onTimeUpdate), t.addEventListener(B.a.TheatreChange, this.onTheatreChange), t.addEventListener(B.a.FullscreenChange, this.onFullScreenChange), t.addEventListener(B.a.ExternalFullscreenChange, this.onExternalFullScreenChange), t.addEventListener(B.a.ClipsModerationOpen, this.onClipsModerationOpen), t.addEventListener(B.a.TransitionToCollectionVOD, this.onTransitionToCollectionVod), t.addEventListener(B.a.TransitionToRecommendedVOD, this.onTransitionToRecommendedVod), t.addEventListener(B.a.OpenStream, this.onOpenStream), t.addEventListener(A.a.Pause, this.onPause), t.addEventListener(B.a.PersistenPlayerToggle, this.onPersistentPlayerToggled), t.addEventListener(A.a.LoadedMetadata, this.onMetadataLoaded), I.extensionService.registerPlayer(this.player), I.extensionService.setPlayerWindow(window), this.props.onInit && this.props.onInit(t), this.maybeAttachToWindow(this.props)
                }, t.prototype.registerBufferingEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 1e3,
                        group: M.a.Player,
                        key: M.b.PlayerBuffering,
                        label: M.c.Buffering
                    })
                }, t.prototype.registerCreatedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 1e3,
                        group: M.a.Player,
                        key: M.b.PlayerCreated,
                        label: M.c.Created
                    })
                }, t.prototype.registerLoadedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 2500,
                        group: M.a.Player,
                        key: M.b.PlayerLoaded,
                        label: M.c.Init
                    })
                }, t.prototype.registerPlayedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent({
                        benchmark: 4e3,
                        group: M.a.Player,
                        key: M.b.PlayerPlayed,
                        label: M.c.FirstFrame
                    })
                }, t.prototype.reportPlayerBuffering = function() {
                    this.hasBuffered || (this.hasBuffered = !0, this.playerBuffering && this.props.latencyTracking.reportCustomEvent(this.playerBuffering))
                }, t.prototype.reportPlayerPlayed = function() {
                    this.hasPlayed || (this.hasPlayed = !0, this.playerPlayed && this.props.latencyTracking.reportCustomEvent(this.playerPlayed))
                }, t.prototype.enterFullscreen = function() {
                    this.setState({
                        isFullScreen: !0
                    }), this.props.fullscreenRef ? this.props.fullscreen.enable(this.props.fullscreenRef) : this.props.supportTheatreFullscreen ? (this.props.enableFullscreenTheatreMode(), this.props.fullscreen.enable(document.body)) : this.props.fullscreen.enable(this.playerRef)
                }, t.prototype.exitFullscreen = function() {
                    this.state.isFullScreen && (this.props.disableFullscreenTheatreMode(), this.setState({
                        isFullScreen: !1
                    }), this.props.fullscreen.disable())
                }, t.prototype.maybeAttachToWindow = function(e) {
                    x.parse(window.location.search).attachPlayer && e.attachToWindow && this.player && (window.player = this.player)
                }, t.prototype.maybeDetachFromWindow = function() {
                    window.player = void 0
                }, t.prototype.bindHotKeys = function() {
                    L.bind("alt+x", this.maybeRecordClip)
                }, t.prototype.unbindHotKeys = function() {
                    L.unbind("alt+x")
                }, t.tagInjected = !1, t
            }(i.Component),
            q = Object(U.d)("VideoPlayer")(Q);
        var K = Object(f.d)(Object(g.b)(function(e) {
            return {
                isWhispersBottomBarVisible: Object(O.b)(e),
                theatreModeEnabled: e.ui.theatreModeEnabled,
                rightColumnExpanded: e.ui.rightColumnExpanded,
                sideNavExpanded: e.ui.sideNavExpanded,
                isLoggedIn: Object(_.d)(e),
                authToken: Object(_.a)(e),
                activeVideoPlayerRefID: Object(R.a)(e)
            }
        }, function(e) {
            return Object(f.b)({
                enableTheatreMode: E.v,
                disableTheatreMode: E.t,
                enableFullscreenTheatreMode: E.u,
                disableFullscreenTheatreMode: E.s,
                togglePersistentPlayer: E.B,
                reportPlayerInstanceStarted: C.b
            }, e)
        }), function(e) {
            return function(t) {
                function n() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.addChangeListener = function(e) {
                        P.push(e)
                    }, e.removeChangeListener = function(e) {
                        P = P.filter(function(t) {
                            return t !== e
                        })
                    }, e
                }
                return r.__extends(n, t), n.prototype.render = function() {
                    var t = {
                        fullscreen: {
                            addChangeListener: this.addChangeListener,
                            removeChangeListener: this.removeChangeListener,
                            supported: this.supported,
                            element: this.element,
                            enable: this.enable,
                            disable: this.disable
                        }
                    };
                    return i.createElement(e, r.__assign({}, t, this.props))
                }, n.prototype.supported = function() {
                    return !!w.enabled
                }, n.prototype.element = function() {
                    return w.element
                }, n.prototype.enable = function(e) {
                    w.request(e)
                }, n.prototype.disable = function() {
                    w.exit()
                }, n
            }(i.Component)
        }, T.f)(q);

        function Y(e, t, n) {
            if (e.collectionID || !e.videoID)
                if (e.collectionID && e.videoID) {
                    if (n && n.currentVideoID && n.currentCollectionID && n.currentVideoID === e.videoID && n.currentCollectionID === e.collectionID) return;
                    t.push("/videos/" + e.videoID + "?collection=" + e.collectionID)
                } else !e.collectionID || e.videoID ? o.j.withCategory("video-player").error(new Error("No collection or video specified from the emitted player transition event."), "No collection or video specified from the emitted player transition event.") : t.push("/collections/" + e.collectionID);
            else t.push("/videos/" + e.videoID)
        }
        n.d(t, !1, function() {
            return "hosting-ui-report-button"
        }), n.d(t, !1, function() {
            return "hosting-ui-more-balloon"
        }), n.d(t, !1, function() {
            return "hosting-ui-more-button"
        }), n.d(t, !1, function() {
            return "hosting-ui-channel-name"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__header"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__footer"
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, "a", function() {
            return S
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return K
        }), n.d(t, "d", function() {
            return Y
        }), n.d(t, "b", function() {
            return V.c
        })
    },
    hdYS: function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            i = n("2KeS"),
            a = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            l = n("4bQk");
        var c = Object(r.b)(function(e) {
            var t = Object(s.c)(e);
            return {
                currentUserLogin: t && t.login,
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(i.b)({
                login: function() {
                    return Object(o.f)(a.a.FollowButton)
                }
            }, e)
        })(l.a);
        n.d(t, "a", function() {
            return c
        }), n.d(t, "b", function() {
            return l.b
        })
    },
    iJpA: function(e, t, n) {
        "use strict";
        t.c = function(e, t) {
            var n = this;
            return function(a) {
                return r.__awaiter(n, void 0, void 0, function() {
                    var n, c;
                    return r.__generator(this, function(r) {
                        return n = new Set(l()), t ? n.add(e) : n.delete(e), c = Array.from(n), i.l.set(s, c), a(Object(o.b)(c)), [2]
                    })
                })
            }
        }, t.a = function() {
            var e = this;
            return function(t) {
                return r.__awaiter(e, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        return i.l.set(s, []), t(Object(o.b)([])), [2]
                    })
                })
            }
        }, t.b = l;
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("D9fv"),
            o = n("V9YC"),
            s = "languageDirectoryFilters";

        function l() {
            return i.l.get(s, []).filter(function(e) {
                return a.a.has(e)
            })
        }
    },
    iOr9: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.logger = a.o.logger.withCategory("component-experiment");
                    var r = a.o.experiments.getAssignment(n.props.name, n.props.channel ? {
                        channel: n.props.channel
                    } : {});
                    return r && n.props.assignments[r] ? n.logger.debug("Displaying component for experiment", {
                        name: n.props.name,
                        assignment: r
                    }) : n.logger.debug("Displaying fallback component for experiment", {
                        name: n.props.name,
                        assignment: r
                    }), n.state = {
                        assignment: r
                    }, n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (this.state.assignment && this.props.assignments[this.state.assignment]) {
                        var e = this.props.assignments[this.state.assignment]();
                        return "string" == typeof e ? (window.location.replace(e), null) : e
                    }
                    return this.props.assignments.fallback()
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    ijOz: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            }),
            function(e) {
                e.AnimatedThumbnails = "animated_thumbnails", e.Embed = "embed", e.Feed = "feed", e.Frontpage = "frontpage", e.Site = "site", e.Highlighter = "highlighter", e.Onboarding = "onboarding", e.ClipsViewing = "clips-viewing", e.ClipsEditing = "clips-editing", e.ClipsEmbed = "clips-embed"
            }(r || (r = {}));
        var i, a = [r.ClipsEditing, r.ClipsViewing, r.ClipsEmbed];
        ! function(e) {
            e.Delete = "delete", e.DeleteAll = "deleteAll", e.ReportUser = "report"
        }(i || (i = {}))
    },
    j0cR: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.videoPlayer.activeVideoPlayerInstanceRefID
        };
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("Hjbq");
        i.o.store.registerReducer("videoPlayer", function(e, t) {
            switch (void 0 === e && (e = {
                activeVideoPlayerInstanceRefID: void 0
            }), t.type) {
                case a.a:
                    return r.__assign({}, e, {
                        activeVideoPlayerInstanceRefID: t.playerRefID
                    });
                default:
                    return e
            }
        })
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("OAwv"),
            a = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2");

        function l(e) {
            return function(t) {
                var n = function(n) {
                    function o(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = i.referenceTracking,
                                    o = a.content,
                                    l = a.medium,
                                    c = a.content_index;
                                s.o.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return r.__extends(o, n), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return a.createElement(t, r.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? i.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var r = "",
                                a = i.stringify(t);
                            a.length > 0 && (r = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: r
                            })
                        }
                        return n
                    }, o
                }(a.Component);
                return Object(o.f)(n)
            }
        }
        n.d(t, "a", function() {
            return l
        })
    },
    j9al: function(e, t) {},
    jpZi: function(e, t) {},
    lK86: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GiftSubscribeButton_Gift_Eligibility"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "recipientLogin"
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
                            value: "subProductId"
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
                                    value: "recipientLogin"
                                }
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
                                            value: "canGift"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "product"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "subProductId"
                                                }
                                            }
                                        }],
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
                end: 171
            }
        };
        n.loc.source = {
            body: "query GiftSubscribeButton_Gift_Eligibility($recipientLogin: String $subProductId: String!) {\nuser(login: $recipientLogin) {\nid\nself {\ncanGift(product: $subProductId)\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    m0Vj: function(e, t) {},
    mRH2: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUser"
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
                                value: "ReportContentInput"
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
                            value: "reportContent"
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
                                    value: "contentID"
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
                end: 111
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\nreportContent(input: $input) {\ncontentID\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    mi6k: function(e, t, n) {
        "use strict";

        function r(e, t) {
            return (t -= e.toString().length) > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.b = function(e, t) {
            var n = Math.floor(e % 60),
                i = Math.floor(e % 3600 / 60),
                a = Math.floor(e / 3600);
            return t && t.zeroPadAll ? r(a, 2) + ":" + r(i, 2) + ":" + r(n, 2) : a ? a + ":" + r(i, 2) + ":" + r(n, 2) : i + ":" + r(n, 2)
        }, t.a = function(e) {
            if ("" === e) return 0;
            var t = e.split(":");
            if (t.length > 3) return NaN;
            return t.reduce(function(e, t) {
                var n;
                return n = "-" === t[0] ? NaN : Math.round(parseInt(t, 10)), 60 * e + n
            }, 0)
        }
    },
    mmQh: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUserCommunity"
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
                                value: "ReportUserInCommunityInput"
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
                            value: "reportUserInCommunity"
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
                                    value: "user"
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
                end: 138
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\nreportUserInCommunity(input: $input) {\nuser {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "mw/a": function(e, t, n) {
        "use strict";
        var r, i;
        n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }),
            function(e) {
                e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
            }(r || (r = {})),
            function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(i || (i = {}))
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
    nEoF: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        });
        var r, i = {
                TriHard: {
                    count: 196568036
                },
                Kappa: {
                    count: 192158118
                },
                "4Head": {
                    count: 155758710
                },
                PogChamp: {
                    count: 151485090
                },
                cmonBruh: {
                    count: 146352878
                },
                BibleThump: {
                    count: 56472964
                },
                WutFace: {
                    count: 45069031
                },
                Kreygasm: {
                    count: 41387580
                },
                DansGame: {
                    count: 38097659
                },
                hi5F: {
                    count: 34986404
                },
                SMOrc: {
                    count: 34734484
                },
                KappaPride: {
                    count: 34262839
                },
                VoHiYo: {
                    count: 27886434
                },
                SwiftRage: {
                    count: 24561900
                },
                ResidentSleeper: {
                    count: 24438298
                },
                EleGiggle: {
                    count: 19891526
                },
                FailFish: {
                    count: 19118343
                },
                NotLikeThis: {
                    count: 18802905
                },
                Keepo: {
                    count: 18351415
                },
                BabyRage: {
                    count: 18220906
                },
                MingLee: {
                    count: 18026207
                },
                pbfSSH: {
                    count: 16911241
                },
                forsenE: {
                    count: 14960299
                },
                HeyGuys: {
                    count: 14851569
                },
                ANELE: {
                    count: 14648986
                },
                PJSalt: {
                    count: 14438861
                }
            },
            a = ["354", "49106", "4339", "48", "25", "55338", "70433", "1902", "68856", "81103", "76171", "27509"];
        ! function(e) {
            e.Web = "WEB", e.IOS = "IOS", e.Android = "ANDROID"
        }(r || (r = {}))
    },
    nUXg: function(e, t) {},
    nmYW: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "blockedUsers"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "User"
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
                            value: "blockedUsers"
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
                end: 56
            }
        };
        n.loc.source = {
            body: "fragment blockedUsers on User {\nid\nblockedUsers {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    npyu: function(e, t) {},
    nyge: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
            }(r || (r = {}))
    },
    oFw4: function(e, t) {},
    oSFp: function(e, t, n) {
        "use strict";
        var r = n("A5Hr"),
            i = n("TToO"),
            a = n("GiK3"),
            o = n("RH2O"),
            s = n("2KeS"),
            l = n("+8VM"),
            c = n("V5M+"),
            u = n("CSlQ"),
            d = n("Odds"),
            p = (n("oFw4"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function(e, n) {
                        t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d._35, {
                        className: "reporting-modal__container",
                        background: d.n.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, a.createElement(r.b, {
                        onClose: this.handleClose,
                        reportContext: this.props.reportContext,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    }), a.createElement(l.a, null))
                }, t
            }(a.Component));
        var m = Object(s.d)(Object(u.d)("ReportUserModal"), Object(o.b)(null, function(e) {
            return Object(s.b)({
                closeModal: c.c
            }, e)
        }))(p);
        n.d(t, !1, function() {}), n.d(t, !1, function() {
            return r.c
        }), n.d(t, !1, function() {
            return r.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return r.b
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return m
        })
    },
    odx1: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        });
        var r, i = n("TToO"),
            a = n("GiK3"),
            o = (n.n(a), n("iOr9")),
            s = n("bZTi"),
            l = n("Odds");
        ! function(e) {
            e.TREATMENT = "treatment", e.CONTROL = "control"
        }(r || (r = {}));
        var c = function(e) {
            var t, c = {
                    failSilently: !1,
                    placeholder: a.createElement(l._14, {
                        width: 82,
                        height: 30
                    })
                },
                u = {
                    name: "TWILIGHT_PRIME_SUB_CREDIT_API_WEXIT",
                    assignments: (t = {
                        fallback: function() {
                            return s.a.wrap(function() {
                                return n.e(61).then(n.bind(null, "tkxl"))
                            }, "SubscribeWithPrimeButton", c)(e)
                        }
                    }, t[r.TREATMENT] = function() {
                        return s.a.wrap(function() {
                            return n.e(59).then(n.bind(null, "JJaH"))
                        }, "PrimeSubscribeButton", c)(e)
                    }, t),
                    loader: function() {
                        return a.createElement(l._14, {
                            width: 82,
                            height: 30
                        })
                    }
                };
            return a.createElement(o.a, i.__assign({}, u))
        }
    },
    onRC: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "followButtonFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "User"
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
                            value: "displayName"
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
                                    value: "follower"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
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
                end: 172
            }
        };
        n.loc.source = {
            body: "# Queries the data necessary to render the FollowButton component.\nfragment followButtonFragment on User {\nid\ndisplayName\nlogin\nself {\nfollower {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    pQNb: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = n("FDYX"),
            s = n("Odds"),
            l = (n("Z+EN"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (this.hasDiscount(this.props.subscriptionProducts)) {
                        var e = this.getMessage();
                        return i.createElement(s._35, {
                            textAlign: s._45.Center,
                            className: "sub-discount-banner",
                            padding: 1,
                            color: s.K.Overlay,
                            "data-test-selector": "sub-discount-banner"
                        }, i.createElement(s.Q, {
                            bold: !0
                        }, e))
                    }
                    return null
                }, t.prototype.getMessage = function() {
                    var e = Object(o.b)(this.props.subscriptionProducts[0], this.props.isGift);
                    return this.props.isGift ? Object(a.d)("Gift a sub and get {percent} off!", {
                        percent: Object(a.e)(e / 100, "percent")
                    }, "SubDiscountBanner") : Object(a.d)("Get {percent} off the first month of any paid subscription!", {
                        percent: Object(a.e)(e / 100, "percent")
                    }, "SubDiscountBanner")
                }, t.prototype.hasDiscount = function(e) {
                    return this.props.isGift ? Object(o.c)(e) : Object(o.d)(e)
                }, t
            }(i.Component));
        n.d(t, !1, function() {
            return "sub-discount-banner"
        }), n.d(t, "a", function() {
            return l
        })
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
            return r
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), t.d = function(e) {
            return {
                type: a,
                leagueOfLegendsChampionsErrored: e
            }
        }, t.e = function(e) {
            return {
                type: i,
                leagueOfLegendsChampionsLoading: e
            }
        }, t.f = function(e) {
            var t = {},
                n = e.data;
            for (var i in n) n.hasOwnProperty(i) && (t[n[i].id] = n[i]);
            return {
                type: r,
                apiData: e,
                championsMap: t,
                apiVersion: e.version
            }
        };
        var r = "directory.LOL_CHAMPIONS_CHANGED",
            i = "directory.LOL_CHAMPIONS_LOADING",
            a = "directory.LOL_CHAMPIONS_ERRORED"
    },
    puy8: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), t.a = i, t.c = function(e, t) {
            var n = parseInt(e, 10) % r.length;
            return i(r[n], t)
        };
        var r = [{
            id: "profile_image_001",
            urlSlug: "bb97f7e6-f11a-4194-9708-52bf5a5125e8"
        }, {
            id: "profile_image_002",
            urlSlug: "27103734-3cda-44d6-a384-f2ab71e4bb85"
        }, {
            id: "profile_image_003",
            urlSlug: "49988c7b-57bc-4dee-bd4f-6df4ad215d3a"
        }, {
            id: "profile_image_004",
            urlSlug: "0ecbb6c3-fecb-4016-8115-aa467b7c36ed"
        }, {
            id: "profile_image_005",
            urlSlug: "cd618d3e-f14d-4960-b7cf-094231b04735"
        }, {
            id: "profile_image_006",
            urlSlug: "4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5"
        }, {
            id: "profile_image_007",
            urlSlug: "b83b1794-7df9-4878-916c-88c2ad2e4f9f"
        }];

        function i(e, t) {
            var n = 70;
            return 300 === t ? n = 300 : 96 !== t && 80 !== t || (n = 150), "https://static-cdn.jtvnw.net/user-default-pictures/" + e.urlSlug + "-profile_image-" + n + "x" + n + ".jpg"
        }
    },
    rWzl: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "BlockUser"
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
                                value: "BlockUserInput"
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
                            value: "blockUser"
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
                                    value: "targetUser"
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
                end: 94
            }
        };
        n.loc.source = {
            body: "mutation BlockUser($input: BlockUserInput!) {\nblockUser(input: $input) {\ntargetUser {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    sJt0: function(e, t) {},
    u8SD: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = this;
            return Object(i.a)(s, {
                props: function(t) {
                    return {
                        blockUserMutation: function(n, i, s, l) {
                            return r.__awaiter(e, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t.mutate ? [4, t.mutate({
                                                variables: {
                                                    input: {
                                                        targetUserID: n,
                                                        sourceContext: s,
                                                        reason: i
                                                    }
                                                },
                                                optimisticResponse: {
                                                    blockUser: {
                                                        __typename: "BlockUserPayload",
                                                        targetUser: {
                                                            __typename: "User",
                                                            id: n
                                                        }
                                                    }
                                                },
                                                update: function(e) {
                                                    var t = e.readFragment({
                                                        id: Object(o.a)(l),
                                                        fragment: a
                                                    });
                                                    t && (t.blockedUsers.push({
                                                        id: n,
                                                        __typename: "User"
                                                    }), e.writeFragment({
                                                        id: Object(o.a)(l),
                                                        fragment: a,
                                                        data: t
                                                    }))
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            throw new Error("blockUserMutation is not ready");
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })
        };
        var r = n("TToO"),
            i = n("7vx8"),
            a = n("nmYW"),
            o = (n.n(a), n("yADj")),
            s = n("rWzl");
        n.n(s)
    },
    uTyw: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            var t, n, l, c, u, d = e.append,
                p = void 0 !== d && d,
                m = e.searchResults,
                h = e.currentGameResults,
                g = e.currentUserResults,
                f = e.currentCommunityResults,
                b = e.currentVideoResults,
                v = e.currentLiveResults;
            m.games && (t = {
                totalHits: m.games.totalHits,
                results: p && h ? h.results : []
            }, p && m.exhaustedHits && h && !m.games.totalHits && (t.totalHits = h.totalHits), t.results = t.results.concat(m.games.hits.map(function(e, t) {
                var n = r.o.intl.getLanguageCode();
                return {
                    title: n && void 0 !== e.localizations && n in e.localizations ? e.localizations[n] : e.name,
                    thumbnailAltText: e.name,
                    linkTo: {
                        pathname: Object(a.c)(e.name),
                        state: {
                            content: o.PageviewContent.Game,
                            content_index: t,
                            medium: o.PageviewMedium.NavSearch
                        }
                    },
                    id: e.objectID,
                    popularity: e.popularity
                }
            })));
            if (m.videos) {
                var y = p && b ? b.results : [],
                    _ = m.videos.totalHits;
                p && m.exhaustedHits && b && !m.videos.totalHits && (_ = b.totalHits), c = function(e, t, n) {
                    return {
                        results: e.concat(t.hits.map(s)),
                        totalHits: t.totalHits || n
                    }
                }(y, m.videos, _)
            }
            m.users && (n = {
                totalHits: p && g ? g.totalHits : m.users.totalHits,
                results: p && g ? g.results : []
            }, p && m.exhaustedHits && g && !m.users.totalHits && (n.totalHits = g.totalHits), n.results = n.results.concat(m.users.hits.map(function(e, t) {
                return {
                    login: e.login,
                    name: e.name,
                    thumbnail: e.profile_image || Object(i.c)(e.objectID, 64),
                    thumbnailAltText: e.name,
                    linkTo: {
                        pathname: "/" + e.login,
                        state: {
                            content: o.PageviewContent.User,
                            content_index: t,
                            medium: o.PageviewMedium.NavSearch
                        }
                    },
                    id: e.objectID,
                    followers: e.followers
                }
            })));
            m.channels && ((u = {
                totalHits: p && v ? v.totalHits : m.channels.totalHits,
                results: p && v ? v.results : []
            }).results = u.results.concat(m.channels.hits.map(function(e, t) {
                return {
                    viewerCount: e.channel_count,
                    login: e.login,
                    name: e.name,
                    thumbnailAltText: e.status,
                    linkTo: {
                        pathname: "/" + e.login,
                        state: {
                            content: o.PageviewContent.Live,
                            content_index: t,
                            medium: o.PageviewMedium.NavSearch
                        }
                    },
                    id: e.objectID,
                    status: e.status
                }
            })));
            m.communities && (l = {
                totalHits: m.communities.totalHits,
                results: p && f ? f.results : []
            }, p && m.exhaustedHits && f && !m.communities.totalHits && (l.totalHits = f.totalHits), l.results = l.results.concat(m.communities.hits.map(function(e, t) {
                return {
                    name: e.name,
                    thumbnail: e.avatar_image_url,
                    thumbnailAltText: e.name,
                    linkTo: {
                        pathname: "/communities/" + e.name,
                        state: {
                            content: o.PageviewContent.Community,
                            content_index: t,
                            medium: o.PageviewMedium.NavSearch
                        }
                    },
                    viewerCount: e.viewers,
                    id: e.objectID
                }
            })));
            return {
                currentGameResults: t,
                currentUserResults: n,
                currentLiveResults: u,
                currentCommunityResults: l,
                currentVideoResults: c,
                exhaustedHits: m.exhaustedHits
            }
        }, t.a = s;
        var r = n("6sO2"),
            i = n("puy8"),
            a = n("NY9D"),
            o = n("vH/s");

        function s(e, t) {
            return {
                title: e.title,
                thumbnail: e.thumbnail,
                thumbnailAltText: e.title,
                linkTo: {
                    pathname: "/videos/" + e.objectID,
                    state: {
                        content: o.PageviewContent.Video,
                        content_index: t,
                        medium: o.PageviewMedium.NavSearch
                    }
                },
                login: e.broadcaster_login,
                name: e.broadcaster_name,
                createdAt: e.created_at,
                length: e.length,
                id: e.objectID
            }
        }
    },
    v5ho: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
            }(r || (r = {}))
    },
    vBst: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.PercentOff = "percent_off", e.FixedValueOff = "fixed_value_off"
            }(r || (r = {}));
        var i = {
            Prime: "prime",
            Tier1: "1000",
            Tier2: "2000",
            Tier3: "3000",
            Custom: "Custom"
        }
    },
    vKFS: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = n("RH2O"),
            s = n("HW6M"),
            l = n("nyge"),
            c = n("Odds"),
            u = (n("Lwev"), function(e) {
                var t, n = e.spriteDetails,
                    r = e.game.toLowerCase(),
                    a = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = r === l.a.CounterStrike, t)),
                    o = r === l.a.CounterStrike ? 40 : 20;
                return i.createElement(c._8, {
                    className: a
                }, i.createElement("div", {
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
            d = n("5DPx"),
            p = (n("nUXg"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        metadataDetails: null
                    }, t.didUnmount = !1, t.loadStreamMetadataDetails = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.props.streamMetadata || !this.props.game) return [3, 4];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, Object(d.b)(this.props.streamMetadata, this.props.game)];
                                    case 2:
                                        if (e = n.sent()) {
                                            if (this.didUnmount) return [2];
                                            this.setState({
                                                metadataDetails: e
                                            })
                                        }
                                        return [3, 4];
                                    case 3:
                                        return t = n.sent(), a.j.error(t, "Failed to get metadata details."), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.loadStreamMetadataDetails()
                }, t.prototype.componentDidUpdate = function(e) {
                    !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? i.createElement(c._8, {
                        className: "preview-card-appendage",
                        display: c.R.Flex
                    }, i.createElement(c._8, {
                        className: "preview-card-appendage__image-wrapper",
                        flexGrow: 0,
                        flexShrink: 0,
                        display: c.R.Flex,
                        alignItems: c.c.Center,
                        justifyContent: c._7.End
                    }, i.createElement("div", null, i.createElement(u, {
                        game: this.props.game,
                        spriteDetails: this.state.metadataDetails.spriteDetails
                    }))), i.createElement(c._35, {
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
                    }, i.createElement(c._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: c._11.Hidden
                    }, i.createElement(c.Q, {
                        ellipsis: !0
                    }, this.state.metadataDetails.name)), i.createElement(c._8, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, i.createElement(c.Q, null, this.state.metadataDetails.label)))) : null
                }, t
            }(i.Component));
        var m = Object(o.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap
                    }
                }
            })(p),
            h = (n("YVIF"), function(e) {
                var t = i.createElement(c._35, {
                    className: "preview-card-iconic-image__wrapper",
                    borderRadius: c.t.Small,
                    overflow: c._11.Hidden
                }, i.createElement(c.k, {
                    ratio: e.aspect || c.l.BoxArt,
                    align: c.a.Center
                }, i.createElement(c.N, r.__assign({}, e.imageProps))));
                return e.linkTo && (t = i.createElement(c.O, {
                    to: e.linkTo
                }, t)), t
            });
        h.displayName = "PreviewCardIconicImage";
        n("IJO1");
        var g, f = function(e) {
                var t = .5,
                    n = null;
                return "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = i.createElement(c._8, {
                    position: c._15.Absolute,
                    attachBottom: !0,
                    fullWidth: !0
                }, i.createElement(c._18, {
                    size: c._20.Small,
                    value: e.progressBarPercent,
                    mask: !0
                })), t = 1), i.createElement(c._8, {
                    position: c._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    fullWidth: !0,
                    fullHeight: !0,
                    className: "preview-card-overlay"
                }, n, i.createElement(c._8, {
                    position: c._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    margin: 1,
                    "data-test-selector": "top-left-selector"
                }, e.topLeft), i.createElement(c._8, {
                    position: c._15.Absolute,
                    attachTop: !0,
                    attachRight: !0,
                    margin: 1,
                    "data-test-selector": "top-right-selector"
                }, e.topRight), i.createElement(c._8, {
                    position: c._15.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-left-selector"
                }, e.bottomLeft), i.createElement(c._8, {
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
            b = (n("BJwU"), function(e) {
                var t = e.icon && i.createElement(c._8, {
                    display: c.R.Flex
                }, i.createElement(c._24, {
                    asset: e.icon,
                    width: 14,
                    height: 14
                }));
                return e.withBackground ? i.createElement(c._35, {
                    alignItems: c.c.Center,
                    background: c.n.Overlay,
                    borderRadius: c.t.Small,
                    className: "preview-card-stat",
                    color: c.K.Overlay,
                    display: c.R.Flex,
                    fontSize: c.V.Size6,
                    justifyContent: c._7.Center
                }, t, i.createElement(c.Q, null, e.value)) : i.createElement(c._35, {
                    className: "preview-card-stat",
                    color: c.K.Overlay,
                    display: c.R.Flex,
                    padding: {
                        x: .5
                    }
                }, t, i.createElement(c.Q, null, e.value))
            }),
            v = n("vKYI"),
            y = (n("jpZi"), 300),
            _ = 5e3,
            k = "preview-card-thumbnail__image-selector",
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
                        }, _)
                    }, t.clearTimeouts = function() {
                        t.hoverTimeout && window.clearTimeout(t.hoverTimeout), t.createPreviewTimeout && window.clearTimeout(t.previewTimeout)
                    }, t.shouldShowLiveVideoPreview = function() {
                        return !!t.props.liveChannelLogin && t.state.isHovered && (t.state.isLiveVideoPreviewLoaded || t.state.isLiveVideoPreviewLoading) && !t.state.isLiveVideoPreviewTimedOut
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.clearTimeouts()
                }, t.prototype.render = function() {
                    var e = {};
                    return (this.props.animatedImageProps || this.props.liveChannelLogin) && (e = {
                        onMouseEnter: this.handleFocus,
                        onMouseLeave: this.handleBlur,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    }), i.createElement("div", r.__assign({}, e, {
                        onClick: this.props.onClick
                    }), this.renderLoadingSpinner(), i.createElement(c._35, {
                        background: c.n.Alt2
                    }, i.createElement(c.k, {
                        ratio: this.props.aspectRatio
                    }, this.renderImage())))
                }, t.prototype.renderImage = function() {
                    var e, t, n = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                        a = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e["preview-card-thumbnail__image--hidden"] = this.shouldShowLiveVideoPreview() && this.state.isLiveVideoPreviewLoaded, e));
                    return this.shouldShowLiveVideoPreview() ? [i.createElement("div", {
                        key: "player-key",
                        className: s((t = {}, t["preview-card-thumbnail__image--hidden"] = !this.state.isLiveVideoPreviewLoaded, t))
                    }, i.createElement(v.a, {
                        channelLogin: this.props.liveChannelLogin,
                        onPlayerPlaying: this.onLivePreviewLoaded
                    })), i.createElement("div", {
                        key: "image-key",
                        className: a
                    }, i.createElement(c.N, r.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": k
                    })))] : n && void 0 !== this.props.animatedImageProps ? i.createElement("div", {
                        className: a
                    }, i.createElement(c.N, r.__assign({}, this.props.animatedImageProps, {
                        onLoad: this.onImageLoad,
                        onError: this.onImageLoadError,
                        "data-test-selector": k
                    }))) : i.createElement("div", {
                        className: a
                    }, i.createElement(c.N, r.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": k
                    })))
                }, t.prototype.renderLoadingSpinner = function() {
                    if (this.shouldShowLiveVideoPreview() && !this.state.isLiveVideoPreviewLoaded) return i.createElement(c._35, {
                        attachRight: !0,
                        attachTop: !0,
                        background: c.n.Overlay,
                        borderRadius: c.t.Small,
                        color: c.K.OverlayAlt,
                        margin: .5,
                        padding: .5,
                        position: c._15.Absolute,
                        zIndex: c._62.Above
                    }, i.createElement(c._10, {
                        fillContent: !0,
                        inheritColor: !0,
                        size: c._33.Small,
                        delay: 0
                    }))
                }, t
            }(i.Component),
            T = (n("ea7N"), function(e) {
                var t = null;
                return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                    return i.createElement(c._8, {
                        key: t,
                        "data-test-selector": "preview-card-titles__subtitle"
                    }, i.createElement(c.Q, {
                        color: c.K.Alt
                    }, "string" == typeof e ? e : i.createElement(c.O, {
                        to: e.linkTo,
                        type: c.P.Inherit
                    }, e.text)))
                })), i.createElement("div", null, i.createElement(c.O, {
                    to: e.linkTo,
                    onClick: e.onClick,
                    type: c.P.Inherit,
                    "data-test-selector": "preview-card-titles__primary-link"
                }, i.createElement(c.Q, {
                    type: c._49.H3,
                    fontSize: c.V.Size5,
                    lines: 1,
                    bold: !0,
                    ellipsis: !0
                }, e.title)), i.createElement(c._8, {
                    className: "preview-card-titles__subtitle-wrapper"
                }, t))
            }),
            w = n("IOwa"),
            P = n("mi6k"),
            E = n("Tg4T");

        function O(e) {
            return void 0 !== e.streamType
        }

        function C(e) {
            return void 0 !== e.watchedProgressPercent
        }

        function R(e) {
            return void 0 !== e.clipCreatedByChannelLogin
        }! function(e) {
            e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
        }(g || (g = {}));
        var N = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.render = function() {
                return i.createElement("div", {
                    className: "preview-card"
                }, i.createElement(c._8, {
                    position: c._15.Relative
                }, C(this.props) && i.createElement(E.a, {
                    videoID: this.props.videoID || "",
                    restriction: this.props.restriction,
                    attachTop: !0
                }), i.createElement(c.O, {
                    to: this.props.linkTo,
                    onClick: this.props.onClick
                }, i.createElement(S, {
                    staticImageProps: this.props.thumbnailImageProps,
                    animatedImageProps: C(this.props) && this.props.animatedImageProps || void 0,
                    liveChannelLogin: O(this.props) && this.props.enableLivePreview ? this.props.channelLogin : void 0,
                    onClick: this.props.onThumbnailClick
                }), this.renderOverlay())), i.createElement(c._8, {
                    display: c.R.Flex,
                    flexWrap: c.U.NoWrap,
                    margin: {
                        top: 1
                    }
                }, i.createElement(c._8, {
                    flexGrow: 0,
                    flexShrink: 0
                }, this.renderIconicImage()), i.createElement(c._8, {
                    flexGrow: 1,
                    flexShrink: 1,
                    overflow: c._11.Hidden
                }, this.renderTitles())), this.renderAppendages())
            }, t.prototype.renderOverlay = function() {
                return O(this.props) ? i.createElement(f, {
                    topLeft: i.createElement(w.a, {
                        type: this.props.streamType,
                        hosting: !!this.props.hostedByChannelLogin
                    }),
                    topRight: void 0,
                    bottomLeft: i.createElement(b, {
                        value: Object(a.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                            viewerCount: this.props.currentViewerCount
                        }, "VideoPreviewCard")
                    }),
                    bottomRight: void 0
                }) : C(this.props) ? i.createElement(f, {
                    topLeft: i.createElement(b, {
                        value: Object(P.b)(this.props.durationInSeconds),
                        icon: c._25.GlyphArrRight,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: i.createElement(b, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: i.createElement(b, {
                        value: Object(a.c)(new Date(this.props.datePublished), "medium")
                    }),
                    progressBarPercent: this.props.watchedProgressPercent
                }) : R(this.props) ? i.createElement(f, {
                    topLeft: i.createElement(b, {
                        value: Object(P.b)(this.props.durationInSeconds),
                        icon: c._25.Clip,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: i.createElement(b, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: i.createElement(b, {
                        value: Object(a.c)(new Date(this.props.datePublished), "medium")
                    })
                }) : void 0
            }, t.prototype.getViewCountLabel = function() {
                return C(this.props) || R(this.props) ? Object(a.d)("{viewerCount, plural, one {# view} other {# views}}", {
                    viewerCount: this.props.viewCount
                }, "VideoPreviewCard") : ""
            }, t.prototype.renderIconicImage = function() {
                return this.props.context === g.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? i.createElement(c._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(h, {
                    imageProps: this.props.gameBoxArtImageProps,
                    linkTo: this.props.gameTitleLinkTo,
                    aspect: c.l.BoxArt
                })) : (this.props.context === g.SingleGameList || this.props.context === g.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? i.createElement(c._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(h, {
                    imageProps: this.props.channelImageProps,
                    linkTo: this.props.channelLoginLinkTo,
                    aspect: c.l.Aspect1x1
                })) : void 0
            }, t.prototype.renderTitles = function() {
                var e = [{
                    text: this.props.channelLogin,
                    linkTo: this.props.channelLoginLinkTo
                }];
                return R(this.props) ? e.push({
                    text: Object(a.d)("Clipped by {userName}", {
                        userName: this.props.clipCreatedByChannelLogin
                    }, "VideoPreviewCard"),
                    linkTo: this.props.clipCreatedByChannelLoginLinkTo
                }) : this.props.context !== g.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && e.push({
                    text: this.props.gameTitle,
                    linkTo: this.props.gameTitleLinkTo
                }), i.createElement(T, {
                    title: this.props.title,
                    onClick: this.props.onVideoTitleClick,
                    linkTo: this.props.linkTo,
                    subtitles: e
                })
            }, t.prototype.renderAppendages = function() {
                if (this.props.playerMetadata && this.props.playerMetadataGame) return i.createElement(m, {
                    streamMetadata: this.props.playerMetadata,
                    game: this.props.playerMetadataGame
                })
            }, t
        }(i.Component);
        n.d(t, "b", function() {
            return g
        }), n.d(t, "a", function() {
            return N
        })
    },
    vKYI: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("BwgW"),
            a = n("GiK3"),
            o = n("CSlQ"),
            s = n("fc0G"),
            l = n("L3z0"),
            c = n("5MsU"),
            u = {
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

        function d() {
            return !!window.Twitch && !!window.Twitch.Player
        }
        var p = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.checkPlayerDependencyStatus = function() {
                    d() ? (n.setState({
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
                    canInitializePlayer: d(),
                    playerInitialized: !1
                }, n
            }
            return r.__extends(t, e), n = t, t.prototype.componentDidMount = function() {
                var e = this;
                if (this.userVolumeSetting = window.localStorage.getItem("volume"), this.userMuteSetting = window.localStorage.getItem("muted"), window.addEventListener("beforeunload", function() {
                        return e.resetVolume()
                    }), this.state.canInitializePlayer ? this.initializePlayer() : this.checkPlayerDependencyAnimationFrame = window.requestAnimationFrame(this.checkPlayerDependencyStatus), window.__playerScriptChunk && !n.tagInjected) {
                    var t = document.createElement("script");
                    t.async = !0, t.crossOrigin = "anonymous", t.src = window.__playerScriptChunk, document.body.appendChild(t);
                    var r = document.createElement("link");
                    r.href = window.__playerStyleChunk, r.media = "screen", r.rel = "stylesheet", r.type = "text/css", document.body.appendChild(r), n.tagInjected = !0
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
                }), this.resetVolume(), this.player && (this.player.removeEventListener(c.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(l.a.Play, this.onPlayerPlay), this.player.removeEventListener(l.a.Playing, this.onPlayerPlaying), i.extensionService.unregisterPlayer(), this.player.destroy())
            }, t.prototype.initializePlayer = function() {
                var e = u;
                this.props.channelLogin && (e.channel = this.props.channelLogin);
                var t = new window.Twitch.Player(this.playerRef, e);
                this.player = t, t.addEventListener(c.a.PlayerReady, this.onPlayerReady), t.addEventListener(l.a.Play, this.onPlayerPlay), t.addEventListener(l.a.Playing, this.onPlayerPlaying), i.extensionService.registerPlayer(this.player)
            }, t.prototype.resetVolume = function() {
                this.userVolumeSetting && window.localStorage.setItem("volume", this.userVolumeSetting), this.userMuteSetting && window.localStorage.setItem("muted", this.userMuteSetting)
            }, t.tagInjected = !1, t = n = r.__decorate([Object(o.d)("LiveChannelPreviewCard")], t);
            var n
        }(a.Component);
        n.d(t, !1, function() {
            return "thumbnail-video-player"
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return p
        })
    },
    x4k6: function(e, t, n) {
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowButton_User"
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "followButtonFragment"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 156
            }
        };
        r.loc.source = {
            body: '#import "twilight/common/queries/follow-button-fragment.gql"\nquery FollowButton_User($login: String!) {\nuser(login: $login) {\nid\n...followButtonFragment\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        r.definitions = r.definitions.concat(n("onRC").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !i[t] && (i[t] = !0, !0)
        })), e.exports = r
    },
    x6ny: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportReasons"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "content"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ReportContentType"
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
                            value: "reportReasons"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "content"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "content"
                                }
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 114
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\nreportReasons(content: $content) {\nid\ntext\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    xrVp: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = "";
            switch (t) {
                case o.a.TypedCommand:
                    n = "typed_command";
                    break;
                case o.a.UserMenu:
                    n = "user_menu";
                    break;
                default:
                    n = "user_menu"
            }
            var a = "";
            switch (e) {
                case i.a.Dark:
                    a = "dark";
                    break;
                case i.a.Light:
                    a = "light";
                    break;
                default:
                    a = "light"
            }
            r.n.track(s.SpadeEventType.ThemeChange, {
                source: n,
                mode: a
            })
        }, t.a = function(e) {
            switch (e) {
                case a.a.Archive:
                    return s.SpadeVideoBroadcastType.Archive;
                case a.a.Highlight:
                    return s.SpadeVideoBroadcastType.Highlight;
                case a.a.Upload:
                    return s.SpadeVideoBroadcastType.Upload;
                case a.a.WatchParty:
                    return s.SpadeVideoBroadcastType.WatchParty;
                case a.a.PastPremiere:
                    return s.SpadeVideoBroadcastType.PastPremiere;
                case a.a.PremiereUpload:
                    return s.SpadeVideoBroadcastType.PremiereUpload;
                default:
                    var t = e;
                    return t
            }
        };
        var r = n("6sO2"),
            i = n("NXs7"),
            a = n("6WAQ"),
            o = n("NikC"),
            s = n("vH/s")
    },
    xwpJ: function(e, t, n) {
        "use strict";
        var r = function(e, t) {
                var n = "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e);
                return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, n).replace(/{description}/, t)
            },
            i = n("6sO2");

        function a() {
            return [{
                id: "other",
                text: Object(i.d)("Other Terms of Service Violation", "ReportUserModal")
            }]
        }
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        })
    },
    yADj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e && Object(r.c)(e) || ""
        };
        var r = n("+dIz")
    },
    zaS7: function(e, t) {}
});
//# sourceMappingURL=pages.prime.components.twitch-prime-success-d6fd39efe4164536c11b66bb211583b4.js.map