webpackJsonp([99], {
    "+GT7": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
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
            k = n("Vr3l"),
            _ = n.n(k),
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
            C = (n("AHWf"), function(e) {
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
                                    i = t.props.streamMetadata.counterStrikeGlobalOffensive && t.props.streamMetadata.counterStrikeGlobalOffensive.skill,
                                    r = t.props.streamMetadata.hearthstone && t.props.streamMetadata.hearthstone.broadcasterHeroClass,
                                    a = t.props.streamMetadata.leagueOfLegends && t.props.streamMetadata.leagueOfLegends.championID,
                                    o = t.props.streamMetadata.overwatch && t.props.streamMetadata.overwatch.broadcasterCharacter;
                                i && n === S.a.CounterStrike ? (t.setState({
                                    game: n,
                                    gameSprite: b.a,
                                    item: String(i),
                                    isLoading: !0
                                }), t.getCounterStrikeData(i)) : r && n === S.a.Hearthstone ? (t.setState({
                                    game: n,
                                    gameSprite: y.a,
                                    item: r,
                                    isLoading: !0
                                }), t.getHearthstoneData()) : a && n === S.a.LeagueOfLegends ? (t.setState({
                                    game: n,
                                    item: String(a)
                                }), t.getLeagueData()) : o && n === S.a.Overwatch && (t.setState({
                                    game: n,
                                    gameSprite: _.a,
                                    item: o,
                                    isLoading: !0
                                }), t.getOverwatchData())
                            }
                        }
                    }, t.renderIcon = function(e, n, i, a, o, s) {
                        if (!i) return null;
                        var l = g("metadata-icon", {
                                "metadata-icon--csgo-skill": t.state.game === S.a.CounterStrike
                            }),
                            c = t.state.game === S.a.CounterStrike ? 50 : 30;
                        return r.createElement(P._8, {
                            display: P.R.Flex,
                            flexDirection: P.T.Column,
                            alignItems: P.c.Center,
                            justifyContent: P._7.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(P._52, {
                            direction: P._54.Left,
                            label: e
                        }, r.createElement(P._8, {
                            className: l
                        }, r.createElement("div", {
                            style: {
                                backgroundImage: "url(" + n + ")",
                                backgroundPositionX: o ? -1 * o : 0,
                                backgroundPositionY: s ? -1 * s : 0,
                                width: i ? i + "px" : "3rem",
                                height: i ? a + "px" : "3rem",
                                transform: "scale(" + (i > 0 ? c / i : 1) + ")",
                                transformOrigin: "0 0"
                            }
                        }))))
                    }, t.getCounterStrikeData = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, r;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, Object(T.a)()];
                                    case 1:
                                        return t = i.sent(), this.didUnmount ? [2] : ((n = {})[e] = t[0]["Skill Group"][e - 1], this.setState({
                                            content: n
                                        }), [3, 3]);
                                    case 2:
                                        return r = i.sent(), this.logger.error(r, "Failed to load Counter-Strike skill group data"), this.setState({
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
                                        return i.trys.push([0, 2, , 3]), [4, Object(T.b)()];
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
                            var e, t, n, r, a, o, s, l, c, u, d, p, m;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, Object(T.d)()];
                                    case 1:
                                        if (e = i.sent(), this.didUnmount) return [2];
                                        for (t = !1, n = void 0, r = 0, a = e; r < a.length && (n = a[r], !t); r++)
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
                                        return p = i.sent(), this.logger.error(p, "Failed to load Overwatch character data"), this.setState({
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
            }(r.Component)),
            O = Object(a.f)(C);
        var E = Object(p.b)(function(e) {
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
            N = (n("LEV+"), "live-channel-card-link-selector"),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderVariation = function() {
                        return r.createElement("div", i.__assign({
                            className: "live-channel-card"
                        }, Object(P._63)(t.props)), r.createElement(l.a, {
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
                            streamType: t.props.streamType || u.a.Live,
                            currentViewerCount: t.props.viewerCount,
                            enableLivePreview: t.props.enableLivePreview,
                            hostedByChannelLogin: t.props.hostedByChannelLogin
                        }))
                    }, t.renderFallback = function() {
                        var e = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                            viewerCount: t.props.viewerCount,
                            channel: r.createElement(a.a, {
                                to: t.props.channelNameLinkTo,
                                onClick: t.props.onClick,
                                className: "live-channel-card__videos",
                                "data-a-target": "live-channel-card-channel-name-link"
                            }, t.props.channelName)
                        }, "Live Channel Card");
                        return r.createElement("div", i.__assign({
                            className: "live-channel-card"
                        }, Object(P._63)(t.props)), r.createElement(P.C, {
                            key: t.props.title
                        }, r.createElement(P._8, {
                            fullWidth: !0
                        }, r.createElement(P.k, {
                            overflow: !0
                        }, r.createElement("div", null, r.createElement(a.a, {
                            to: t.props.linkTo,
                            title: t.props.hideTooltip ? void 0 : t.props.title,
                            "data-a-target": "live-channel-card-thumbnail-link",
                            "data-test-selector": N,
                            onClick: t.props.onClick
                        }, t.props.children ? t.props.children : r.createElement(P.E, {
                            alt: t.props.imageAlt,
                            src: t.props.imageSrc,
                            aspect: P.l.Aspect16x9
                        }), t.renderContentType()), t.renderGameBoxArt()))), r.createElement(P.D, null, r.createElement(P._8, {
                            display: P.R.Flex,
                            flexWrap: P.U.NoWrap
                        }, r.createElement(P._8, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, r.createElement(P.O, {
                            to: t.props.linkTo,
                            onClick: t.props.onClick,
                            className: "live-channel-card__channel",
                            "data-a-target": "live-channel-card-title-link"
                        }, r.createElement(P._2, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(P.Q, {
                            type: P._49.H3,
                            fontSize: P.V.Size5,
                            lineHeight: P._9.Body,
                            ellipsis: !0,
                            className: "live-channel-card__title"
                        }, t.props.title))), r.createElement(P._8, {
                            className: "live-channel-card__meta",
                            display: P.R.Flex,
                            flexWrap: P.U.NoWrap
                        }, r.createElement(P.Q, {
                            type: P._49.Span,
                            ellipsis: !0
                        }, e))), r.createElement(P._8, {
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
                            return r.createElement(d.VideoPreviewCardPlaceholder, null)
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return r.createElement(s.a, i.__assign({}, e))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? r.createElement(a.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, r.createElement(P._35, {
                        className: "live-channel-card__boxart",
                        position: P._15.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(P._52, {
                        display: P.R.Block,
                        direction: P._54.Bottom,
                        label: t
                    }, r.createElement(P.E, {
                        src: n,
                        alt: t,
                        aspect: P.l.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(P._8, {
                        position: P._15.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(c.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? r.createElement(E, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(r.Component),
            I = R;
        n.d(t, !1, function() {
            return N
        }), n.d(t, !1, function() {
            return R
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
            return i
        }), n.d(t, "e", function() {
            return r
        });
        var i, r, a, o, s = {
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
        }(i || (i = {})),
        function(e) {
            e.AutoModMessageRejected = "automod_message_rejected", e.AutoModMessageApproved = "automod_message_approved", e.AutoModMessageDenied = "automod_message_denied"
        }(r || (r = {})),
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
        var i = n("RH2O"),
            r = n("2KeS"),
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
        var k = Object(i.b)(null, function(e) {
            return Object(r.b)({
                onCloseModal: a.c
            }, e)
        })(y);
        n.d(t, "a", function() {
            return k
        })
    },
    "0w5y": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
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
        var k = Object(i.b)(null, function(e) {
            return Object(r.b)({
                onCloseModal: a.c
            }, e)
        })(y);
        n.d(t, "a", function() {
            return k
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
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Live = "live", e.WatchParty = "watch_party", e.Premiere = "premiere", e.Rerun = "rerun"
            }(i || (i = {}))
    },
    3: function(e, t) {},
    "37Pp": function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            r = n("6sO2"),
            a = n("FDYX"),
            o = n("Odds"),
            s = (n("M5Tl"), function(e) {
                var t = e.subscriptionProduct;
                if (void 0 === t) return i.createElement("div", null);
                var n = e.isOneTime ? Object(r.d)("{price} / One-time purchase", {
                    price: t.price
                }, "SubDiscountPriceLabel") : Object(r.d)("{price} / Month", {
                    price: t.price
                }, "SubDiscountPriceLabel");
                if (e.isGift ? Object(a.c)([e.subscriptionProduct]) : Object(a.d)([e.subscriptionProduct])) {
                    var s = void 0;
                    return s = e.isGift ? Object(r.d)("{price} (Save {percent})", {
                        price: Object(a.a)(e.subscriptionProduct, e.isGift),
                        percent: Object(r.e)(Object(a.b)(e.subscriptionProduct, e.isGift) / 100, "percent")
                    }, "SubDiscountPriceLabel") : Object(r.d)("{price} for the first month (Save {percent})", {
                        price: Object(a.a)(e.subscriptionProduct, e.isGift),
                        percent: Object(r.e)(Object(a.b)(e.subscriptionProduct, e.isGift) / 100, "percent")
                    }, "SubDiscountPriceLabel"), i.createElement(o._8, {
                        "data-test-selector": "sub-discount-price-label__discounted"
                    }, i.createElement(o.Q, {
                        color: o.K.Alt2,
                        decoration: o._47.Strikethrough
                    }, n), i.createElement(o.Q, {
                        className: "sub-discount-price-label__discount-price",
                        type: o._49.H5,
                        bold: !0
                    }, s))
                }
                return i.createElement(o._8, {
                    "data-test-selector": "sub-discount-price-label__non-discounted"
                }, i.createElement(o.Q, null, n))
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
        var i, r = n("I89S"),
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
            h = r.a.Purple,
            g = "FIRST_PARTY",
            f = "THIRD_PARTY",
            b = ((i = {})[r.a.Gray] = "#979797", i[r.a.Purple] = "#9c3ee8", i[r.a.Green] = "#1db2a5", i[r.a.Blue] = "#0099fe", i[r.a.Red] = "#f43021", i[r.a.Yellow] = "#f3a71a", i)
    },
    "3yQz": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "c", function() {
            return i
        });
        var i, r = "VIEWS",
            a = "TIME";
        ! function(e) {
            e.Popular = "VIEWS", e.Newest = "TIME"
        }(i || (i = {}))
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
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("2KeS"),
            o = n("6sO2"),
            s = n("+Znq"),
            l = n("7vx8"),
            c = n("oIkB"),
            u = n("2BvQ"),
            d = n("xrVp"),
            p = n("YugT"),
            m = {
                Channel: "channel"
            };
        var h = n("vH/s"),
            g = n("CSlQ"),
            f = n("Odds"),
            b = n("VNvG"),
            v = (n("3ydF"), n("SUA7")),
            y = n("x4k6");
        n.d(t, "b", function() {
            return k
        }), n.d(t, "a", function() {
            return S
        });
        var k;
        ! function(e) {
            e[e.IconOnly = 0] = "IconOnly", e[e.TextOnly = 1] = "TextOnly", e[e.IconAndText = 2] = "IconAndText"
        }(k || (k = {}));
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
                        t.state.isFollowing ? (t.unfollowUser(), e = h.SpadeEventType.Unfollow) : (t.followUser(), e = h.SpadeEventType.Follow);
                        var n = t.getFollowData();
                        n && function(e, t) {
                            i.__awaiter(this, void 0, void 0, function() {
                                var n, r, a, s, l, c, m, h, g, f;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (n = null, r = null, a = null, s = null, l = null, !t.channelID) return [3, 5];
                                            i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, o.o.apollo.client.query({
                                                query: p,
                                                variables: {
                                                    id: t.channelID
                                                }
                                            })];
                                        case 2:
                                            return s = i.sent(), [3, 4];
                                        case 3:
                                            return m = i.sent(), o.j.error(m, "Failed to make query for channel info in FollowEvent reporting.", {
                                                channelID: t.channelID
                                            }), [3, 4];
                                        case 4:
                                            (a = s && s.data && s.data.user) ? l = a.hosting.stream && a.hosting.stream.game ? a.hosting.stream.game.name : a.stream && a.stream.game && a.stream.game.name: o.j.error(new Error("GraphQL empty response"), "Query for channel info in FollowEvent reporting return no data.", {
                                                channelID: t.channelID
                                            }), i.label = 5;
                                        case 5:
                                            if (!(h = o.n.getVideoPlayerTrackingData().vodID)) return [3, 10];
                                            i.label = 6;
                                        case 6:
                                            return i.trys.push([6, 8, , 9]), [4, o.o.apollo.client.query({
                                                query: u,
                                                variables: {
                                                    id: h
                                                }
                                            })];
                                        case 7:
                                            return n = i.sent(), [3, 9];
                                        case 8:
                                            return g = i.sent(), o.j.error(g, "Failed to make query for VOd info in FollowEvent reporting.", {
                                                currentVODID: h
                                            }), [3, 9];
                                        case 9:
                                            (r = n && n.data && n.data.video) ? c = Object(d.a)(r.broadcastType): (c = null, o.j.error(new Error("GraphQL empty response"), "Query for video info in FollowEvent reporting return no data.", {
                                                currentVODID: h
                                            })), i.label = 10;
                                        case 10:
                                            return f = {
                                                channel: t.channelLogin,
                                                channel_id: t.channelID,
                                                channel_game: l,
                                                cta_visible: o.n.getVideoPlayerTrackingData().followCTAVisible,
                                                host_channel: t.hostChannelLogin,
                                                host_channel_id: t.hostChannelID,
                                                game: t.game,
                                                partner: a ? a.isPartner : null,
                                                src: t.src,
                                                vod_id: h,
                                                vod_type: c
                                            }, o.n.track(e, f), [2]
                                    }
                                })
                            })
                        }(e, {
                            channelLogin: n.user && n.user.login || "",
                            channelID: n.user && n.user.id || "",
                            hostChannelLogin: t.props.hostChannelLogin,
                            hostChannelID: t.props.hostChannelID,
                            src: m.Channel
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
                            var n = i.__assign({}, Object(c.a)({
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
                                Object(c.e)(y, {
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
                            var n = i.__assign({}, Object(c.a)({
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
                                Object(c.e)(y, {
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
                            var n = i.__assign({}, Object(c.a)({
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
                                Object(c.e)(y, {
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        case f.z.Large:
                            return r.createElement(f._14, {
                                width: 93,
                                height: 36
                            });
                        case f.z.Small:
                            return r.createElement(f._14, {
                                width: 66,
                                height: 24
                            });
                        default:
                            return r.createElement(f._14, {
                                width: 70,
                                height: 30
                            })
                    }
                }, t.prototype.renderFollowButton = function(e) {
                    var t = this.props.isHostedFollow && this.props.channelName ? Object(o.d)("Follow {username}", {
                        username: this.props.channelName
                    }, "FollowButton") : Object(o.d)("Follow", "FollowButton");
                    return r.createElement(f.v, i.__assign({
                        ariaLabel: t,
                        blurAfterClick: this.props.blurAfterClick,
                        "data-a-target": "follow-button",
                        "data-test-selector": "follow-button",
                        icon: this.props.followUIType === k.TextOnly ? void 0 : f._25.Heart,
                        onClick: e,
                        size: this.props.size,
                        tabIndex: this.props.tabIndex
                    }, Object(f._63)(this.props)), this.props.followUIType === k.IconOnly ? null : t)
                }, t.prototype.renderUnfollowButton = function() {
                    var e = Object(o.d)("Unfollow", "FollowButton");
                    return r.createElement(f.v, i.__assign({
                        ariaLabel: e,
                        blurAfterClick: this.props.blurAfterClick,
                        "data-a-target": "unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: this.props.unfollowUIType === k.TextOnly ? void 0 : f._25.Heart,
                        statusAlertIcon: this.props.unfollowUIType === k.TextOnly ? void 0 : f._25.Unheart,
                        statusAlertText: this.props.unfollowUIType === k.IconOnly ? "" : e,
                        tabIndex: this.props.tabIndex,
                        size: this.props.size,
                        onClick: this.toggleFollowing
                    }, Object(f._63)(this.props)), this.props.unfollowUIType === k.IconOnly ? null : Object(o.d)("Followed", "FollowButton"))
                }, t.prototype.renderUnfollowButtonWithDropdown = function() {
                    var e = this.props.balloonDirection ? this.props.balloonDirection : f.r.BottomRight,
                        t = this.getFollowData(),
                        n = t && t.user && t.user.displayName || "",
                        i = this.state.disableNotifications ? Object(o.d)("Opt in to notifications to receive updates on this channel's activity, including when they go live.", "FollowButton") : Object(o.d)("You will be notified on this channel's activity, including when they go live.", "FollowButton");
                    return r.createElement(f._8, {
                        display: f.R.Flex,
                        className: "follow-btn",
                        "data-test-selector": "unfollow-button__dropdown"
                    }, r.createElement(f._8, null, this.renderUnfollowButton()), r.createElement(s.a, {
                        display: f.R.InlineFlex,
                        openByDefault: this.state.showDropdown
                    }, r.createElement("button", {
                        tabIndex: this.props.tabIndex,
                        "aria-label": Object(o.d)("Dropdown", "FollowButton"),
                        className: "follow-btn__dropdown-toggle",
                        "data-a-target": "follow-dropdown-toggle"
                    }, r.createElement(f._8, {
                        justifyContent: f._7.Center,
                        display: f.R.Flex,
                        alignItems: f.c.Stretch,
                        fullHeight: !0
                    }, r.createElement(f._24, {
                        asset: f._25.GlyphArrDown
                    }))), r.createElement(f.q, {
                        size: f.s.Small,
                        direction: e,
                        "data-a-target": "follow-notifications-balloon"
                    }, r.createElement(f._35, {
                        color: f.K.Base,
                        display: f.R.Flex,
                        flexWrap: f.U.Wrap,
                        padding: 1
                    }, r.createElement(f._8, {
                        display: f.R.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(f.Q, {
                        type: f._49.H6
                    }, Object(o.d)("You are following {followingName}", {
                        followingName: n
                    }, "FollowButton"))), r.createElement(f._8, {
                        display: f.R.Flex,
                        flexWrap: f.U.NoWrap,
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(f._8, {
                        display: f.R.Flex,
                        padding: {
                            right: 2
                        }
                    }, r.createElement("span", null, r.createElement(f.Q, {
                        type: f._49.H6
                    }, Object(o.d)("Notifications", "FollowButton")))), r.createElement(f._8, {
                        display: f.R.Flex,
                        flexShrink: 0
                    }, r.createElement(f._51, {
                        onChange: this.toggleNotificationsEnabled,
                        checked: !this.state.disableNotifications,
                        "data-a-target": "notifications-toggle"
                    }))), r.createElement(f._8, {
                        display: f.R.InlineFlex,
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(f.Q, {
                        type: f._49.Span,
                        color: f.K.Alt2
                    }, i))))))
                }, t.prototype.reportInteractive = function() {
                    T(this.props) ? this.props.latencyTracking.reportInteractive() : this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t
            }(r.Component),
            S = Object(a.d)(Object(l.a)(y, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return T(e)
                }
            }), Object(l.a)(b, {
                name: "followUser"
            }), Object(l.a)(v, {
                name: "unfollowUser"
            }), Object(g.d)("FollowButton"))(_);

        function T(e) {
            return !e.isLoggedIn || (!e.channelLogin || (!!e.followData || e.channelLogin === e.currentUserLogin))
        }
    },
    "5DPx": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return v
        });
        var i, r = n("TToO"),
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
        }(i || (i = {}));
        var v = function(e, t) {
                return r.__awaiter(f, void 0, void 0, function() {
                    var n, i, o, s, l, c;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = t.toLowerCase(), i = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, i && n === m.a.CounterStrike ? [4, y(i)] : [3, 2];
                            case 1:
                                return [2, r.sent()];
                            case 2:
                                return o && n === m.a.Hearthstone ? [4, k(o)] : [3, 4];
                            case 3:
                                return [2, r.sent()];
                            case 4:
                                return l && n === m.a.Overwatch ? [4, _(l)] : [3, 6];
                            case 5:
                                return [2, r.sent()];
                            case 6:
                                if (s && n === m.a.LeagueOfLegends && (c = a.o.store.getState()).directory)
                                    if (c.directory.leagueOfLegends.championsMap) {
                                        if (c.directory.leagueOfLegends.championsMap) return [2, S(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                    } else a.o.store.dispatch(Object(p.a)());
                                r.label = 7;
                            case 7:
                                return [2, null]
                        }
                    })
                })
            },
            y = function(e) {
                return r.__awaiter(f, void 0, void 0, function() {
                    var t, n, i;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, Object(g.a)()];
                            case 1:
                                return t = r.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
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
                                return i = r.sent(), b.error(i, "Failed to load Counter-Strike skill group data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            k = function(e) {
                return r.__awaiter(f, void 0, void 0, function() {
                    var t, n, i;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, Object(g.b)()];
                            case 1:
                                return t = r.sent(), n = {}, t[0].Class.forEach(function(e) {
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
                                return i = r.sent(), b.error(i, "Failed to load Hearthstone class data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            _ = function(e) {
                return r.__awaiter(f, void 0, void 0, function() {
                    var t, n, i, a, o, s, l, c, u, p, m, f;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, Object(g.d)()];
                            case 1:
                                for (t = r.sent(), n = void 0, i = 0, a = t; i < a.length; i++)
                                    for (o in n = a[i])
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
                                return m = r.sent(), b.error(m, "Failed to load Overwatch character data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            S = function(e, t, n) {
                if (!t || !e) return null;
                var i = t[e],
                    r = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + i.image.sprite;
                return {
                    name: i.name,
                    label: Object(h.b)(h.a.LeagueChampion),
                    spriteDetails: {
                        imageWidth: i.image.w,
                        imageHeight: i.image.h,
                        spriteOffsetX: i.image.x,
                        spriteOffsetY: i.image.y,
                        spriteURL: r
                    }
                }
            }
    },
    "5LoI": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Games = "game", e.Videos = "vod", e.VideosNewest = "vod_by_created_at", e.Users = "user", e.Channels = "live_channel", e.Communities = "community"
            }(i || (i = {}))
    },
    "5MsU": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.PlayerInit = "init", e.ContentShowing = "contentShowing", e.PlaybackStatistics = "playbackStatistics", e.ChansubRequired = "chansubRequired", e.VideoFailure = "videoFailure", e.Formats = "videoFormats", e.ABSStreamFormatChange = "abs_stream_format_change", e.FormatChanged = "videoFormatChanged", e.TimeChange = "timeChange", e.BufferChange = "bufferChange", e.SegmentChange = "segmentchange", e.UsherFailError = "usherFail", e.CaptionUpdate = "captions", e.SeekFailed = "seekfailed", e.VariantSwitchRequest = "variantSwitchRequested", e.ViewersChange = "viewerschange", e.StreamLoaded = "streamLoaded", e.VideoLoaded = "videoLoaded", e.VideoPaused = "videoPaused", e.QualityChange = "qualitychange", e.Online = "online", e.Offline = "offline", e.Restricted = "restricted", e.CastingChange = "castingchange", e.TheatreChange = "theatrechange", e.MidrollRequested = "midrollrequested", e.ManifestExtraInfo = "manifestExtraInfo", e.TransitionToCollectionVOD = "transitionToCollectionVod", e.TransitionToRecommendedVOD = "transitionToRecommendedVod", e.StitchedAdStart = "stitchedadstart", e.StichedAdEnd = "stitchedadend", e.PersistenPlayerToggle = "persistentPlayerEnableToggle", e.StatsUpdate = "statsupdate", e.PromptLoginModal = "prompt login modal", e.OpenStream = "openStream", e.PlayerReady = "ready", e.FullscreenChange = "fullscreenchange", e.ExternalFullscreenChange = "externalfullscreenchange", e.ClipsModerationOpen = "clips-moderation-open"
            }(i || (i = {}))
    },
    "6O9f": function(e, t) {},
    "6WAQ": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Archive = "ARCHIVE", e.Highlight = "HIGHLIGHT", e.Upload = "UPLOAD", e.WatchParty = "WATCH_PARTY", e.PastPremiere = "PAST_PREMIERE", e.PremiereUpload = "PREMIERE_UPLOAD"
            }(i || (i = {}))
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
        var i, r = n("TToO"),
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
            b = n("a0y1"),
            v = n("3iBR"),
            y = n("Odds"),
            k = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(y._8, {
                        className: "esports-top-page-details"
                    }, a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            x: 2,
                            y: 1
                        },
                        display: y.R.Flex,
                        justifyContent: y._7.Center,
                        className: "insider-pass-pre-purchase__header"
                    }, a.createElement("img", {
                        src: v.c + "/owl-2017/all-access-logo.svg",
                        alt: Object(c.d)("Overwatch League All-Access Pass on Twitch", "EsportsTopPageDetails"),
                        height: "80px",
                        "data-test-selector": "balloon-detail-logo"
                    })), a.createElement(y._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y.Q, {
                        type: y._49.H4,
                        bold: !0,
                        "data-test-selector": "balloon-detail-subheader"
                    }, Object(c.d)("Your VIP pass to the best of the Overwatch League", "EsportsTopPageDetails"))), a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y.Q, {
                        type: y._49.H6,
                        bold: !0,
                        "data-test-selector": "balloon-detail-igc-subheader"
                    }, Object(c.d)("Overwatch In-Game Content (requires Blizzard account link)", "EsportsTopPageDetails")), a.createElement(y.Q, {
                        "data-test-selector": "balloon-detail-igc-copy"
                    }, Object(c.d)("3 Hero Skins • Overwatch League Player Icon • Overwatch League Spray •", "EsportsTopPageDetails"), " ", a.createElement(y.Q, {
                        type: y._49.Span,
                        italic: !0
                    }, Object(c.d)("Plus more content coming soon", "EsportsTopPageDetails")))), a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y.Q, {
                        type: y._49.H6,
                        bold: !0,
                        "data-test-selector": "balloon-detail-experience-subheader"
                    }, Object(c.d)("The Overwatch League All-Access Experience", "EsportsTopPageDetails")), a.createElement(y.Q, {
                        "data-test-selector": "balloon-detail-experience-copy"
                    }, Object(c.d)("Exclusive Command Center stream • Match analysis videos by players • Ask questions in post-match Q&A with players • Passholder-only chat • 23 Twitch emotes • Overwatch League chat badges • Ad-free viewing on Overwatch League", "EsportsTopPageDetails"))))
                }, t
            }(a.PureComponent),
            _ = n("YEG/"),
            S = n("FDYX"),
            T = (n("VOrx"), function(e) {
                var t = Object(S.d)(e.subscriptionProducts) ? Object(S.a)(e.subscriptionProducts[0]) : e.subscriptionProducts[0].price,
                    n = null;
                if (e.isEsportGiftingApproved) {
                    var i = Object(c.d)("Gift All-Access Pass", "EsportsNonSubbedTopPage");
                    n = a.createElement(y.v, {
                        ariaLabel: i,
                        onClick: e.showRecipientSelect,
                        type: y.B.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, i)
                }
                return a.createElement(y._8, {
                    padding: 2
                }, a.createElement(k, null), a.createElement(y.Q, {
                    type: y._49.H6,
                    bold: !0
                }, Object(c.d)("One-Time Purchase for the 2018 Season", "EsportsNonSubbedTopPage")), a.createElement(y.Q, null, Object(c.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season. Twitch emotes, badges, and in-game content are yours to keep forever.", "EsportsNonSubbedTopPage")), a.createElement(y._8, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(y._8, {
                    margin: {
                        right: .5
                    },
                    display: y.R.Inline
                }, a.createElement(_.a, {
                    isSubbedToTier: !1,
                    tierPrice: t,
                    "data-a-target": "tier1-subscribe-button",
                    reportSubAction: e.handleTopPageSubButtonClick,
                    url: e.subscriptionProducts[0].url,
                    isEsportChannel: !0
                })), n), a.createElement(y._8, {
                    display: y.R.Flex,
                    margin: {
                        top: 1
                    },
                    flexDirection: y.T.Column
                }, a.createElement(b.a, {
                    subscriptionProducts: e.subscriptionProducts,
                    userHasPrime: e.userHasPrime
                })))
            }),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    if (this.props.isEsportGiftingApproved) {
                        var t = Object(c.d)("Gift All-Access Pass", "EsportsSubbedTopPage");
                        e = a.createElement(y._8, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(y.v, {
                            ariaLabel: t,
                            onClick: this.props.showRecipientSelect,
                            type: y.B.Hollow,
                            "data-test-selector": "subscribe-button__gift"
                        }, t))
                    }
                    return a.createElement(y._8, {
                        padding: 2
                    }, a.createElement(k, null), a.createElement(y.Q, {
                        "test-selector": "subbed-subheader",
                        type: y._49.H4,
                        bold: !0
                    }, Object(c.d)("You have the All-Access Pass", "EsportsSubbedTopPage")), a.createElement(y.Q, {
                        "test-selector": "subbed-copy"
                    }, Object(c.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season. Twitch emotes, badges, and in-game content are yours to keep.", "EsportsSubbedTopPage")), e)
                }, t
            }(a.PureComponent),
            P = n("6BvN"),
            C = n("HM6l"),
            O = n("5LoI"),
            E = n("MAZT"),
            N = n("uTyw"),
            R = n("zCIC"),
            I = n("SZoP"),
            L = n("2KeS"),
            F = n("lK86"),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading || !this.props.recipientLogin || this.props.data.user.self.canGift) return null;
                    var e = this.props.isEsportChannel ? Object(c.d)("Sorry, an All-Access Pass to this channel is not available for this user", "GiftRecipientIneligibleMessage") : Object(c.d)("Sorry, a gift subscription to this channel is not available for this user.", "GiftRecipientIneligibleMessage"),
                        t = this.props.isEsportChannel ? "esports-gift-eligibility-message-selector" : "gift-eligibility-message-selector";
                    return a.createElement(y._8, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(y.Q, {
                        italic: !0,
                        color: y.K.Alt2,
                        "data-test-selector": t
                    }, e))
                }, t
            }(a.Component),
            x = Object(L.d)(Object(l.d)("GiftRecipientIneligibleMessage"), Object(d.a)(F, {
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
            }))(D),
            j = n("daN3"),
            U = n("CwIZ"),
            M = (n("+YN9"), function(e) {
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (e.isWaiting || e.isErrored || !e.hasInput) && this.setState({
                        selectedUser: null
                    })
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? a.createElement(y._8, {
                        fullHeight: !0
                    }, a.createElement(y._10, {
                        fillContent: !0
                    })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : a.createElement(y._8, {
                        margin: 1
                    }, a.createElement(y.Q, {
                        color: y.K.Alt2
                    }, Object(c.d)("Start typing to see a list of suggestions here.", "GiftRecipientSearchResult"))), a.createElement("div", {
                        onKeyDown: this.props.onKeyDown
                    }, a.createElement(y._35, {
                        className: "gift-recipient-search-result-view",
                        background: y.n.Alt,
                        position: y._15.Relative,
                        overflow: y._11.Hidden,
                        display: y.R.Block,
                        margin: {
                            bottom: 2
                        },
                        borderLeft: !0,
                        borderBottom: !0,
                        borderRight: !0
                    }, a.createElement(y._2, {
                        overflow: y._11.Hidden,
                        position: y._15.Relative
                    }, a.createElement(R.b, {
                        suppressScrollX: !0
                    }, a.createElement(y._8, null, e, a.createElement(R.a, {
                        enabled: !this.props.isWaiting && this.props.hasInput,
                        loadMore: this.props.loadMore
                    }))))), a.createElement(y._8, null, a.createElement(y._8, {
                        display: y.R.Flex,
                        alignItems: y.c.Center,
                        fullWidth: !0
                    }, this.getBuyGiftButton(), a.createElement(y._2, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(y.Q, {
                        "data-test-selector": "gift-recipient-display-name-selector"
                    }, Object(c.d)("for {displayName}", {
                        displayName: a.createElement(y.Q, {
                            bold: !0,
                            type: y._49.Span
                        }, this.getFormattedDisplayName())
                    }, "GiftRecipientCheckoutButton")))), a.createElement(x, {
                        subProductId: this.props.selectedProductId,
                        recipientLogin: this.state.selectedUser ? this.state.selectedUser.login : null,
                        isEsportChannel: this.props.isEsportChannel
                    })))
                }, t.prototype.getBuyGiftButton = function() {
                    return a.createElement(j.a, {
                        subProductId: this.props.selectedProductId,
                        giftRecipient: this.state.selectedUser ? this.state.selectedUser.login : null,
                        checkoutURL: this.props.selectedProductURL,
                        onClick: this.reportGiftCheckoutAction,
                        isEsportChannel: this.props.isEsportChannel
                    })
                }, t.prototype.getFormattedDisplayName = function() {
                    return this.state.selectedUser ? Object(I.a)(this.state.selectedUser.login, this.state.selectedUser.name) : ""
                }, t.prototype.getErrorMessage = function() {
                    return a.createElement(y._8, {
                        fullWidth: !0,
                        textAlign: y._45.Center,
                        justifyContent: y._7.Center
                    }, a.createElement(y.Q, null, Object(c.d)("Something went wrong", "GiftRecipientSearchResult")))
                }, t.prototype.getUserResultContent = function() {
                    var e = this;
                    return this.props.userResults ? this.props.userResults.results.map(function(t) {
                        var n = Object(I.a)(t.login || "", t.name || "");
                        return a.createElement(y._6, {
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "git-recipient-result__" + t.id,
                            "data-user_id": t.id,
                            "data-user_login": t.login,
                            "data-user_name": t.name,
                            onClick: e.onUserClick,
                            "data-test-selector": "subscribe-button__gift_search_result"
                        }, a.createElement(y._8, {
                            padding: .5
                        }, a.createElement(y.C, {
                            row: !0
                        }, a.createElement(y.E, {
                            alt: t.thumbnailAltText,
                            src: t.thumbnail ? t.thumbnail : "",
                            size: y.F.Size4,
                            aspect: y.l.Aspect1x1
                        }), a.createElement(y.D, {
                            overflow: y._11.Hidden
                        }, a.createElement(y._2, {
                            padding: {
                                x: 1
                            }
                        }, a.createElement(y.Q, {
                            type: y._49.H5,
                            ellipsis: !0
                        }, n))))))
                    }) : a.createElement(y._14, null)
                }, t.prototype.getNoResultsMessage = function() {
                    return a.createElement(y._8, {
                        margin: 1
                    }, a.createElement(y.Q, {
                        color: y.K.Alt2
                    }, Object(c.d)("No Results", "GiftRecipientSearchResult")))
                }, t = r.__decorate([Object(l.d)("GiftRecipientSearchResultPanel")], t)
            }(a.Component)),
            A = (n("m0Vj"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (this.props.selectedSubProduct) {
                        var e = null;
                        if (this.props.selectedSubProduct && this.props.selectedSubProduct.giftPromotion) {
                            var t = this.props.selectedSubProduct && this.props.selectedSubProduct.giftPromotion ? this.props.selectedSubProduct.giftPromotion : null;
                            e = a.createElement(y.Q, {
                                bold: !0,
                                className: "subscription-gift-recipient-search__discount-message"
                            }, Object(c.d)("{price} (Save {percent})", {
                                price: t ? t.newPrice : "",
                                percent: Object(c.e)(t ? t.discountValue / 100 : 0, "percent")
                            }, "GiftRecipientSearch"))
                        }
                        var n = "gift-recipient-search-subheading-selector",
                            i = Object(c.d)("{subDisplayName}: {giftPrice} Gift Subscription (Single Month)", {
                                subDisplayName: this.props.selectedSubProduct ? this.props.selectedSubProduct.displayName : "",
                                giftPrice: this.props.selectedSubProduct ? this.props.selectedSubProduct.price : ""
                            }, "GiftRecipientSearch");
                        return this.props.isEsportChannel && (n = "gift-recipient-search-esports-subheading-selector", i = Object(c.d)("Overwatch League: {giftPrice} All-Access Pass for current season", {
                            giftPrice: this.props.selectedSubProduct ? this.props.selectedSubProduct.price : ""
                        }, "GiftRecipientSearch")), a.createElement(y._8, {
                            padding: 2,
                            className: "subscription-gift-recipient-search"
                        }, a.createElement(y._8, null, a.createElement(y._8, {
                            display: y.R.Flex,
                            justifyContent: y._7.Between,
                            alignItems: y.c.Center,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(y.Q, {
                            type: y._49.H4,
                            bold: !0
                        }, Object(c.d)("Choose a Gift Recipient", "GiftRecipientSearch")), a.createElement(y.v, {
                            type: y.B.Text,
                            "data-a-target": "subscribe-back-button",
                            icon: y._25.AngleLeft,
                            onClick: this.props.onBack,
                            "data-test-selector": "gift-recipient-search-back-button"
                        }, a.createElement(y._8, {
                            alignItems: y.c.Center,
                            display: y.R.InlineFlex
                        }, a.createElement(y.Q, null, Object(c.d)("Back", "GiftRecipientSearch"))))), a.createElement(y._8, null, a.createElement(y.Q, {
                            "data-test-selector": n
                        }, i), e, a.createElement(y._8, {
                            display: y.R.Flex,
                            justifyContent: y._7.Center,
                            padding: {
                                top: 1
                            },
                            fullWidth: !0
                        }, a.createElement(y._2, {
                            fullWidth: !0
                        }, a.createElement("div", null, a.createElement(y._27, {
                            onChange: this.handleChange,
                            onKeyDown: this.props.onKeyDown,
                            id: "gift-recipient-search",
                            placeholder: Object(c.d)("Search for a Twitch ID", "GiftRecipientSearch"),
                            "data-test-selector": "gift-recipient-search-input-selector"
                        }), a.createElement(M, {
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
                    return a.createElement(y._14, null)
                }, t
            }(a.Component)),
            B = 50,
            G = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onChange = function(e) {
                        n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), e ? (n.setState({
                            isWaiting: !0
                        }), n.inputTimer = setTimeout(function() {
                            return n.doSearch(e)
                        }, B)) : n.setState(n.getEmptyState())
                    }, n.loadMore = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(O.a.Users, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = i.sent(), [3, 4];
                                    case 3:
                                        return i.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
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
                                        }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2])
                                }
                            })
                        })
                    }, n.onKeyDown = function(e) {
                        n.state.term && (e.keyCode === P.a.Esc ? n.setState({
                            hasInput: !1
                        }) : e.keyCode === P.a.Up ? n.focusNext(-1) : e.keyCode === P.a.Down && n.focusNext(1))
                    }, n.state = n.getEmptyState(), n.searchClient = new E.a({
                        appId: c.a.algoliaApplicationID,
                        apiKey: c.a.algoliaAPIKey,
                        apolloClient: c.o.apollo.client,
                        logger: c.j,
                        config: c.a
                    }), n
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(A, {
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
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, a, o;
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = C.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(O.a.Users, e, n)];
                                case 2:
                                    return a = s.sent(), [3, 4];
                                case 3:
                                    return s.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return a ? this.state.queryID !== a.id ? [2] : (o = Object(N.b)({
                                        searchResults: a,
                                        append: !1
                                    }), this.setState(function(n) {
                                        return r.__assign({}, n, o, {
                                            queryID: "",
                                            term: e,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                        i = document.activeElement,
                        r = Array.prototype.indexOf.call(n, i);
                    if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
                        var a = n.item(t);
                        a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: a
                        })
                    }
                }, t = r.__decorate([Object(l.d)("GiftRecipientSearch")], t)
            }(a.Component);
        ! function(e) {
            e[e.Top = 0] = "Top", e[e.SubOptions = 1] = "SubOptions", e[e.GiftOptions = 2] = "GiftOptions", e[e.RecipientSelect = 3] = "RecipientSelect"
        }(i || (i = {}));
        var V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goToPreviousPage = function() {
                        t.props.reportSubMenuAction({
                            action: U.a.ClickBack,
                            modalLevel: t.props.currentPage === i.SubOptions || t.props.currentPage === i.GiftOptions ? "top_page" : "second_page"
                        }), t.props.currentPage !== i.RecipientSelect || t.props.showTop()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.currentPage === i.RecipientSelect ? this.getGiftRecipientSearchPage() : this.props.isSubscribed ? this.getSubbedTopPage() : this.getUnsubbedTopPage()
                }, t.prototype.getSubbedTopPage = function() {
                    return a.createElement(w, {
                        showRecipientSelect: this.props.showRecipientSelect,
                        isEsportGiftingApproved: this.props.isEsportGiftingApproved
                    })
                }, t.prototype.getUnsubbedTopPage = function() {
                    return a.createElement(T, {
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
            H = n("37Pp"),
            W = n("JJaH"),
            z = function(e) {
                var t = null,
                    n = null,
                    i = null,
                    r = e.subscriptionProducts[0].price;
                if (Object(S.d)(e.subscriptionProducts) && (r = Object(S.a)(e.subscriptionProducts[0])), e.channelLogin && (e.inPrimeRegion || e.userHasPrime)) {
                    var o = e.userHasPrime ? Object(c.d)("Use your free channel subscription to directly support your favorite streamer. {upsellTextLink}", {
                        upsellTextLink: a.createElement("a", {
                            href: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                            target: "_blank"
                        }, Object(c.d)("Learn more about your free sub", "NonSubbedTopPage"))
                    }, "NonSubbedTopPage") : Object(c.d)("{upsellTextBold}, plus get free game loot every month, ad-free viewing, and loads more with Twitch Prime.", {
                        upsellTextBold: a.createElement("strong", null, Object(c.d)("Support your favorite streamer", "NonSubbedTopPage"))
                    }, "NonSubbedTopPage");
                    i = a.createElement(y._8, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y.Q, {
                        type: y._49.H4,
                        bold: !0
                    }, Object(c.d)("Free Channel Sub with Twitch Prime", "NonSubbedTopPage"))), a.createElement(y._8, null, a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "prime-sub-upsell"
                    }, a.createElement(y.Q, null, o)), a.createElement(W.a, {
                        "data-a-target": "subscribe-with-prime-button",
                        reportSubMenuAction: e.reportSubMenuAction,
                        channelLogin: e.channelLogin
                    })))
                }
                if (!e.isNonStandardSub) {
                    var s = Object(c.d)("More Paid Subscription Options", "NonSubbedTopPage");
                    t = a.createElement(y._8, {
                        margin: {
                            right: 1
                        },
                        display: y.R.Inline
                    }, a.createElement(y.v, {
                        ariaLabel: s,
                        onClick: e.showSubOptions,
                        type: y.B.Hollow,
                        "data-test-selector": "subscribe-button__more-sub-options-button",
                        "data-a-target": "see-more-sub-options-button"
                    }, s));
                    var l = Object(c.d)("Gift a Subscription", "NonSubbedTopPage");
                    n = a.createElement(y._8, {
                        display: y.R.Inline
                    }, a.createElement(y.v, {
                        ariaLabel: l,
                        onClick: e.showGiftOptions,
                        type: y.B.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, l))
                }
                return a.createElement(y._8, {
                    padding: 2
                }, i, a.createElement(y._8, null, a.createElement(y.Q, {
                    type: y._49.H4,
                    bold: !0
                }, Object(c.d)("Paid Subscription", "NonSubbedTopPage")), a.createElement(H.a, {
                    subscriptionProduct: e.subscriptionProducts[0]
                }), a.createElement(y._8, {
                    display: y.R.Flex
                }, a.createElement(y._8, {
                    margin: {
                        right: 1,
                        top: 1
                    }
                }, a.createElement(_.a, {
                    isSubbedToTier: !1,
                    tierPrice: r,
                    "data-a-target": "tier1-subscribe-button",
                    reportSubAction: e.handleTopPageSubButtonClick,
                    url: e.subscriptionProducts[0].url
                })))), a.createElement(y._8, {
                    margin: {
                        right: 1,
                        top: 2
                    }
                }, t, n))
            },
            Q = n("YH6m"),
            q = function(e) {
                return a.createElement(y._8, {
                    padding: 2
                }, a.createElement(y._8, null, a.createElement(y._8, {
                    display: y.R.Flex,
                    justifyContent: y._7.Between,
                    alignItems: y.c.Center,
                    fullWidth: !0
                }, a.createElement(y.Q, {
                    type: y._49.H4,
                    bold: !0
                }, e.header), a.createElement(y.v, {
                    type: y.B.Text,
                    "data-a-target": "subscribe-back-button",
                    "data-test-selector": "subscribe-button__back-button",
                    icon: y._25.AngleLeft,
                    onClick: e.onBack
                }, a.createElement(y._8, {
                    alignItems: y.c.Center,
                    display: y.R.InlineFlex
                }, a.createElement(y.Q, null, Object(c.d)("Back", "PaidSubOptions"))))), a.createElement(Q.a, {
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
            K = n("pQNb"),
            Y = (n("DquS"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = "IOS" === this.props.subbedPlatform || "ANDROID" === this.props.subbedPlatform,
                        t = e || this.props.isGift ? null : this.getTopPageUpgradeSection(),
                        n = e ? this.getMobileSubbedSection() : null,
                        i = this.getGiftSection();
                    return a.createElement(y._8, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, i, n, t)
                }, t.prototype.getTopPageUpgradeSection = function() {
                    var e = this.props.subbedTier !== m.a.Tier3 ? Object(c.d)("Change Your Subscription", "SubbedTopPage") : this.getSubbedHeader();
                    return a.createElement(y._8, null, a.createElement(y.Q, {
                        type: y._49.H4,
                        bold: !0
                    }, e), a.createElement(Q.a, {
                        authToken: this.props.authToken,
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
                        i = Object(c.d)("Subscribed via {platform} Subscriptions", {
                            platform: "IOS" === this.props.subbedPlatform ? "Apple" : "Google"
                        }, "SubbedTopPage"),
                        r = "IOS" === this.props.subbedPlatform ? "https://help.twitch.tv/customer/portal/articles/2921095#ManageiOS" : "https://help.twitch.tv/customer/portal/articles/2921095#ManageGoogle";
                    return a.createElement(y._8, {
                        "data-test-selector": "subscribed-view-mobile"
                    }, a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y.Q, {
                        type: y._49.H4,
                        bold: !0
                    }, this.getSubbedHeader())), a.createElement(y._8, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y._8, null, n), a.createElement(y._8, null, i), a.createElement(y._8, null, a.createElement(y.O, {
                        to: r
                    }, Object(c.d)("How do I manage this subscription?", "SubbedTopPage")))))
                }, t.prototype.getGiftSection = function() {
                    return this.props.giftSender ? this.props.giftSender && !this.props.giftPaidUpgrade ? a.createElement(y._8, null, a.createElement(y._8, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getGiftExtendSection()) : a.createElement(y._8, null, a.createElement(y._8, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getTopPageGiftSection()) : a.createElement(y._8, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getTopPageGiftSection())
                }, t.prototype.getGiftInfoSection = function() {
                    var e, t, n = null;
                    return this.props.giftPaidUpgrade ? (e = this.getSubbedHeader(), t = Object(c.d)("{giftPrice} Gift Subscription from {giftSender}", {
                        giftPrice: this.getCurrentSubPrice(),
                        giftSender: a.createElement(y.Q, {
                            bold: !0,
                            type: y._49.Span
                        }, this.props.giftSender || "")
                    }, "SubbedTopPage"), n = Object(c.d)("Your new {upgradePrice} Paid Subscription will begin on {subStartDate}", {
                        upgradePrice: this.props.giftPaidUpgrade ? this.props.giftPaidUpgrade.price : "",
                        subStartDate: this.getFormattedGiftUpgradeStartDate()
                    }, "SubbedTopPage")) : (e = Object(c.d)("Your Gift Subscription", "SubbedTopPage"), t = Object(c.d)("{giftPrice} Subscription from {giftSender} - Benefits expire on {giftEndDate}", {
                        giftPrice: this.getCurrentSubPrice(),
                        giftSender: a.createElement(y.Q, {
                            bold: !0,
                            type: y._49.Span
                        }, this.props.giftSender || ""),
                        giftEndDate: this.getFormattedGiftEndDate()
                    }, "SubbedTopPage")), a.createElement(y._8, null, a.createElement(y.Q, {
                        bold: !0,
                        type: y._49.H4
                    }, e), a.createElement(y._2, {
                        margin: {
                            y: 1
                        }
                    }, a.createElement(y.Q, null, t)), a.createElement(y.Q, {
                        className: "balloon-subscribed-user__gift-upgrade-info",
                        bold: !0
                    }, n))
                }, t.prototype.getGiftExtendSection = function() {
                    var e, t = null;
                    if (!this.props.isNonStandardSub) {
                        var n = Object(c.d)("More Paid Subscription Options", "SubbedTopPage");
                        t = a.createElement(y._8, {
                            margin: {
                                right: 1
                            },
                            display: y.R.Inline
                        }, a.createElement(y.v, {
                            ariaLabel: n,
                            onClick: this.props.showSubOptions,
                            type: y.B.Hollow,
                            "data-a-target": "see-more-sub-options-button"
                        }, n))
                    }
                    var i = this.getGiftMessage();
                    return e = a.createElement(y._8, {
                        display: y.R.Inline
                    }, a.createElement(y.v, {
                        "data-test-selector": "subscribe-button__gift",
                        ariaLabel: i,
                        onClick: this.props.showGiftOptions,
                        type: y.B.Hollow
                    }, i)), a.createElement(y._8, null, a.createElement(y._8, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(y.Q, {
                        type: y._49.H4,
                        bold: !0
                    }, Object(c.d)("Extend Your Subscription", "SubbedTopPage")), a.createElement(y._2, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(y.Q, null, Object(c.d)("{price} / Month", {
                        price: this.props.subscriptionProducts[0].price
                    }, "SubbedTopPage"))), a.createElement(y._8, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, a.createElement(y.v, {
                        ariaLabel: this.props.subscriptionProducts[0].price,
                        "data-a-target": "tier1-subscribe-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.props.handleTopPageSubButtonClick,
                        purchase: this.props.subscriptionProducts[0].price,
                        targetBlank: !0
                    }, Object(c.d)("Subscribe Now", "SubbedTopPage")))), a.createElement(y._8, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, t, e))
                }, t.prototype.getTopPageGiftSection = function() {
                    var e = this.props.subscriptionProducts[0].price;
                    Object(S.c)(this.props.subscriptionProducts) && (e = Object(S.a)(this.props.subscriptionProducts[0], !0));
                    var t = this.getGiftMessage(),
                        n = Object(c.d)("More Gift Options", "SubbedTopPage");
                    return a.createElement(y._8, null, a.createElement(y.Q, {
                        type: y._49.H4,
                        bold: !0
                    }, Object(c.d)("Help Grow {streamer}'s Community", {
                        streamer: this.props.channelDisplayName
                    }, "SubbedTopPage")), a.createElement(y._8, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: y.R.Flex
                    }, a.createElement(y.v, {
                        ariaLabel: t + " " + e,
                        onClick: this.props.onGiftSelect,
                        purchase: e
                    }, t), a.createElement(y._8, {
                        margin: {
                            left: 1
                        }
                    }, a.createElement(y.v, {
                        ariaLabel: n,
                        onClick: this.props.showGiftOptions,
                        type: y.B.Hollow
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
        var $ = n("+p4h"),
            J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentPage: i.Top,
                        selectedSubProductIndex: 0,
                        giftShortcut: !1
                    }, t.showTop = function() {
                        t.setState(function() {
                            return {
                                currentPage: i.Top
                            }
                        })
                    }, t.showRecipientSelect = function() {
                        t.setState(function() {
                            return {
                                currentPage: i.RecipientSelect
                            }
                        })
                    }, t.showGiftOptions = function() {
                        t.props.reportSubMenuAction({
                            action: U.a.ClickGiftSubOptions,
                            modalLevel: "second_page"
                        }), t.setState(function() {
                            return {
                                currentPage: i.GiftOptions
                            }
                        })
                    }, t.showSubOptions = function() {
                        t.props.reportSubMenuAction({
                            action: U.a.ClickMoreSubOptions,
                            modalLevel: "second_page"
                        }), t.setState(function() {
                            return {
                                currentPage: i.SubOptions
                            }
                        })
                    }, t.goToPreviousPage = function() {
                        if (t.props.reportSubMenuAction({
                                action: U.a.ClickBack,
                                modalLevel: t.state.currentPage === i.SubOptions || t.state.currentPage === i.GiftOptions ? "top_page" : "second_page"
                            }), t.state.currentPage === i.GiftOptions || t.state.currentPage === i.SubOptions || t.state.giftShortcut) return t.showTop(), void t.setState({
                            giftShortcut: !1
                        });
                        t.state.currentPage !== i.RecipientSelect || t.showGiftOptions()
                    }, t.onGiftSelect = function() {
                        if (!t.props.data.user || !t.props.data.user.subscriptionProducts) return null;
                        t.state.currentPage === i.Top ? t.setState({
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
                        var n, i;
                        t.tabToSubProduct || (t.tabToSubProduct = (n = t.props.data.user.subscriptionProducts, (i = new Map).set(Q.b.Prime, null), n.forEach(function(e, t) {
                            i.set(t + 1, e)
                        }), i));
                        var r = t.tabToSubProduct.get(e);
                        if (r) {
                            var a = t.props.data.user.subscriptionProducts.findIndex(function(e) {
                                return e.price === r.price
                            });
                            a !== t.state.selectedSubProductIndex && t.setState({
                                selectedSubProductIndex: a
                            }), t.props.onSelectTierTab(r.price)
                        } else t.props.onSelectTierTab(m.a.Prime)
                    }, t.handleTopPageSubButtonClick = function() {
                        if (!t.props.data.user || !t.props.data.user.subscriptionProducts) return null;
                        t.props.reportSubMenuAction({
                            action: U.a.ClickCheckout,
                            checkoutButtonTier: t.props.data.user.subscriptionProducts[0].price
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.channelLogin !== this.props.channelLogin && this.setState({
                        currentPage: i.Top,
                        selectedSubProductIndex: 0,
                        giftShortcut: !1
                    })
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return c.j.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), a.createElement(y._8, {
                        display: y.R.Flex,
                        alignItems: y.c.Center,
                        justifyContent: y._7.Center,
                        className: "channel-header__subscription-modal"
                    }, a.createElement(y._10, {
                        fillContent: !0
                    }));
                    if (!this.props.data.user || !this.props.data.user.subscriptionProducts) return c.j.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), null;
                    c.j.debug("rendering balloon", {
                        state: this.state
                    });
                    var e, t = a.createElement(y._14, null),
                        n = !1,
                        r = this.props.data.user.subscriptionProducts,
                        o = !0;
                    if (this.props.isEsportChannel) return this.getEsportPage();
                    switch (this.state.currentPage) {
                        case i.Top:
                            if (!this.props.isSubscribed) {
                                e = this.getUnsubbedTopPage();
                                break
                            }
                            e = this.getSubbedTopPage(), n = !0;
                            break;
                        case i.SubOptions:
                            if (this.props.isSubscribed) {
                                e = this.getPaidOptionsPage(!0), o = !1;
                                break
                            }
                            e = this.getPaidOptionsPage(!1);
                            break;
                        case i.GiftOptions:
                            e = this.getGiftOptionsPage(), n = !0;
                            break;
                        case i.RecipientSelect:
                            e = this.getGiftRecipientSearchPage(), r = [r[this.state.selectedSubProductIndex]], n = !0;
                            break;
                        default:
                            if (!this.props.isSubscribed) {
                                e = this.getUnsubbedTopPage();
                                break
                            }
                            e = this.getSubbedTopPage(), n = !0
                    }
                    return o && (t = a.createElement(K.a, {
                        subscriptionProducts: r,
                        isGift: n
                    })), a.createElement(y._8, {
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
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? a.createElement(q, {
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
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? a.createElement(q, {
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
                    return a.createElement(Y, {
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
                    return this.props.data.user ? a.createElement(z, {
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                        handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                        inPrimeRegion: this.props.inPrimeRegion,
                        isNonStandardSub: this.props.isNonStandardSub,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        showGiftOptions: this.showGiftOptions,
                        showSubOptions: this.showSubOptions,
                        subscriptionProducts: this.props.data.user ? this.props.data.user.subscriptionProducts : [],
                        userHasPrime: !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    }) : null
                }, t.prototype.getEsportPage = function() {
                    return this.props.data.user ? a.createElement(y._8, {
                        key: "subscribe-balloon"
                    }, a.createElement(V, {
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
                }, t = r.__decorate([Object(d.a)($, {
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
            Z = n("4MRZ"),
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeTierPrice: null,
                        inPrimeRegion: !1
                    }, t.modalLevel = "top_page", t.reportSubMenuAction = function(e) {
                        var n = !!(t.props.data.user && t.props.data.user.self && t.props.data.user.self.subscriptionBenefit),
                            i = t.props.data.requestInfo && Object(g.a)(t.props.data.requestInfo.countryCode);
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
                            showPrimeContent: i,
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
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
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
                        i = Object(h.b)(this.props.data.user.id, this.props.sessionUser),
                        r = 1 === this.props.data.user.subscriptionProducts.length,
                        o = null;
                    this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && (o = this.props.data.user.self.subscriptionBenefit.purchasedWithPrime ? m.a.Prime : this.props.data.user.self.subscriptionBenefit.tier, this.modalLevel = ""), this.props.data.user.subscriptionProducts.some(this.isSubscriptionProductInvalid) && (r = !0);
                    var s, l = t ? Object(c.d)("All-Access Pass", "SubscribeButton") : Object(c.d)("Get the All-Access Pass", "SubscribeButton");
                    if (t) {
                        var d = r ? Object(c.d)("Subscribed", "SubscribeButton") : Object(c.d)("Gift A Sub", "SubscribeButton");
                        if (s = this.props.hostChannelID ? Object(c.d)("Subscribed to {username}", {
                                username: this.props.data.user.displayName
                            }, "SubscribeButton") : d, r && !n) return a.createElement(y.v, {
                            disabled: !0,
                            ariaLabel: s,
                            icon: y._25.Star
                        }, s);
                        n && (s = l)
                    } else s = n ? l : this.props.hostChannelID ? Object(c.d)("Subscribe to {username}", {
                        username: this.props.data.user.displayName
                    }, "SubscribeButton") : Object(c.d)("Subscribe", "SubscribeButton");
                    var p = o === m.a.Prime ? y._25.Crown : y._25.Star,
                        f = t ? "subscribed-button" : "subscribe-button",
                        b = a.createElement(y.v, {
                            "data-a-target": f,
                            "data-test-selector": "subscribe-button__dropdown",
                            ariaLabel: s,
                            type: t ? y.B.Success : y.B.Default,
                            dropdown: !0,
                            icon: t ? p : void 0
                        }, s),
                        v = this.props.hostChannelID ? y.r.TopLeft : y.r.BottomRight;
                    return a.createElement(u.a, {
                        onToggle: this.handleMenuToggle
                    }, b, a.createElement(y.q, {
                        size: y.s.Large,
                        direction: v,
                        "data-a-target": "sub-balloon"
                    }, a.createElement(J, {
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin || "",
                        inPrimeRegion: e,
                        isNonStandardSub: r,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.reportSubMenuAction,
                        subbedTier: o || m.a.Prime,
                        userHasPrime: !1,
                        isSubscribed: t,
                        isEsportChannel: n,
                        isEsportGiftingApproved: i
                    })))
                }, t.prototype.hasSubscriptionProducts = function(e) {
                    return e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0
                }, t.prototype.isUserDataReady = function(e) {
                    return e.data && e.data.user && !e.data.loading && !e.data.error
                }, t.prototype.isSubscriptionProductInvalid = function(e) {
                    return !e.emoteSetID
                }, t = r.__decorate([Object(d.a)(Z, {
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
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(X, {
                        authToken: this.props.authToken,
                        sessionUser: this.props.sessionUser,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        channelLogin: this.props.channelLogin,
                        updateContainerWidth: this.props.updateContainerWidth,
                        hideEsportsSubscription: this.props.hideEsportsSubscription,
                        reportInteractive: this.reportInteractive
                    })
                }, t = r.__decorate([Object(l.d)("SubscribeButton")], t)
            }(a.Component);
        var te = Object(o.b)(function(e) {
            return {
                authToken: Object(s.a)(e),
                sessionUser: Object(s.c)(e)
            }
        })(ee);
        n.d(t, !1, function() {
            return ee
        }), n.d(t, "a", function() {
            return te
        }), n.d(t, !1, function() {
            return "subscribe-button__dropdown"
        }), n.d(t, !1, function() {
            return X
        })
    },
    "81fF": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PrimeSubscribe_UserPrimeData"
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
                end: 314
            }
        };
        n.loc.source = {
            body: "query PrimeSubscribe_UserPrimeData($login: String!) {\nuser(login: $login) {\nid\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nrenewsAt\nendsAt\npaidUpgrade {\nprice\nstartsAt\n}\ngift {\nisGift\ngifter {\nid\ndisplayName\n}\n}\n}\n}\n}\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "81qH": function(e, t, n) {
        "use strict";
        var i = n("aBed");
        n.d(t, "VideoPreviewCard", function() {
            return i.a
        });
        var r = n("a4C9"),
            a = (n.n(r), n("XYqD"));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return a.a
        })
    },
    "9GX+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            r = n("GiK3"),
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
            k = n("AadB"),
            _ = n("Odds"),
            S = n("PCKG"),
            T = (n("MTjQ"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return null;
                    if (this.props.data.loading) return r.createElement(_._8, null, r.createElement(_._10, {
                        fillContent: !0
                    }));
                    var e = this.props.data,
                        t = e.directory.streams.edges.filter(function(e) {
                            var t = e.node;
                            return t.broadcaster && t.broadcaster.login && t.broadcaster.id
                        }).map(function(e, t) {
                            var n = e.node;
                            return r.createElement(k.b, {
                                directoryName: "fortnite",
                                directoryType: y.a.Games,
                                streamIndex: t,
                                streamNode: n,
                                key: n.id,
                                showPreview: !!n.broadcaster && !!n.broadcaster.roles && !!n.broadcaster.roles.isPartner
                            })
                        });
                    return r.createElement(_._8, {
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
                    }, r.createElement(_._8, {
                        margin: {
                            y: 1
                        },
                        className: "twitch-prime-streamers__count"
                    }, r.createElement(_.Q, {
                        type: _._49.H3,
                        color: _.K.Link,
                        bold: !0
                    }, Object(s.d)("Check out Fortnite on Twitch.tv", "TwitchPrimeStreamers")), r.createElement(_.Q, {
                        type: _._49.H4,
                        color: _.K.Link
                    }, Object(s.d)("{viewers, number} viewers right now", {
                        viewers: e.directory && e.directory.viewersCount || 0
                    }, "TwitchPrimeStreamers"))), r.createElement(_._55, {
                        gutterSize: _._57.Small,
                        childWidth: _._56.Large,
                        children: t,
                        center: !0
                    }), r.createElement(_._8, {
                        margin: {
                            y: 1
                        },
                        className: "twitch-prime-streamers__game-page",
                        textAlign: _._45.Center
                    }, r.createElement(_.O, {
                        to: "/directory/game/Fortnite",
                        hoverUnderlineNone: !1,
                        type: _.P.Default
                    }, Object(s.d)("View more Fortnite on Twitch.tv >", "TwitchPrimeStreamers"))))
                }, t
            }(r.Component)),
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
            C = n("dlQw"),
            O = n("2655"),
            E = (n("Ql3t"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getFortniteOffer = function() {
                        var e = s.b.get(C.b, C.a),
                            n = t.props.data,
                            i = n && n.primeOffers,
                            r = i && i.filter(function(t) {
                                return t.id === e
                            });
                        return r && r[0]
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data;
                    if (e && e.loading) return r.createElement(_._10, {
                        fillContent: !0
                    });
                    var t = this.getFortniteOffer();
                    return e && e.error || !t || !t.self || !t.self.hasEntitlement ? r.createElement(o.b, {
                        to: "/prime/fortnite"
                    }) : r.createElement(_._8, {
                        className: "twitch-prime-success",
                        "data-test-selector": "twitch-prime-success-page"
                    }, r.createElement(_._8, {
                        textAlign: _._45.Center,
                        className: "twitch-prime-success__header"
                    }, r.createElement(f.a, {
                        renderOfferImage: !0
                    }, r.createElement(_._8, null, r.createElement(_._8, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(_.Q, {
                        type: _._49.H1,
                        color: _.K.Overlay,
                        transform: _._48.Uppercase,
                        bold: !0
                    }, Object(s.d)("Loot acquired!", "FortniteSuccess"))), r.createElement(_._8, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(_.Q, {
                        type: _._49.H3,
                        color: _.K.Overlay,
                        transform: _._48.Uppercase,
                        bold: !0
                    }, Object(s.d)("Load up Fortnite and your rewards will be waiting for you!", "FortniteSuccess")))), r.createElement(_._8, {
                        padding: {
                            y: 2
                        }
                    }, r.createElement(_.Q, {
                        type: _._49.H3,
                        color: _.K.Overlay,
                        bold: !0
                    }, Object(s.d)("Problems? <x:link>Click here ›</x:link>", {
                        "x:link": function(e) {
                            return r.createElement(_.O, {
                                to: "#faq",
                                hoverUnderlineNone: !1,
                                key: e,
                                type: _.P.Overlay
                            }, e)
                        }
                    }, "FortniteSuccess"))))), r.createElement(P, null), r.createElement(m.a, {
                        hash: this.props.location.hash.replace("#", "")
                    }), r.createElement(h.a, {
                        partnerSocialLink: "https://twitter.com/FortniteGame",
                        partnerSocialText: "@FortniteGame"
                    }))
                }, t
            }(r.Component)),
            N = Object(a.compose)(Object(l.a)(O, {
                options: function() {
                    return {
                        variables: {
                            dateOverride: Object(g.f)()
                        }
                    }
                }
            }), Object(p.d)("TwitchPrimeSuccessPage", {
                destination: u.a.TwitchPrimeSuccessPage
            }), Object(c.a)({
                location: d.PageviewLocation.TwitchPrimeSuccessPage
            }))(E);
        n.d(t, "TEST_SELECTOR", function() {
            return "twitch-prime-success-page"
        }), n.d(t, "TwitchPrimeSuccessPageComponent", function() {
            return E
        }), n.d(t, "TwitchPrimeSuccessPage", function() {
            return N
        })
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("Aj/L"),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var r, a, o, s;
                        return i.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, r), o = i.__assign({}, t, {
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
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var r, a;
                        return i.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((r = o.sent()).error || r.requestError) throw new Error("Error while making request");
                                    return a = i.__assign({}, r, {
                                        body: r.body
                                    }), [2, Promise.resolve(a)];
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
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, a;
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
                                    return r = i.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = r), [3, 4];
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
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var n = r.o.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(a.c)(n);
                    return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e.logger = r.o.logger.withCategory("legacy-api"), e
            }()
    },
    A5Hr: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
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
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
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
            k = n("mw/a");
        ! function(e) {
            e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
        }(i || (i = {}));
        var _, S = {
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
                    type: i.Textarea,
                    required: !0
                },
                input_link: {
                    getTitle: function() {
                        return Object(l.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                    },
                    rows: 2,
                    value: "external links",
                    type: i.Textarea
                },
                input_usernames: {
                    getTitle: function() {
                        return Object(l.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                    },
                    value: "other usernames",
                    rows: 2,
                    type: i.Textarea
                },
                input_connection: {
                    getTitle: function() {
                        return Object(l.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                    },
                    value: "offsite content connection",
                    type: i.Textarea
                },
                input_comments: {
                    getTitle: function() {
                        return Object(l.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                    },
                    value: "comments",
                    type: i.Textarea
                },
                input_identifyOwner: {
                    getTitle: function() {
                        return Object(l.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                    },
                    rows: 2,
                    value: "connect account owner",
                    type: i.Textarea
                },
                endBlurb_socialmedia: {
                    getTitle: function() {
                        return Object(l.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                    },
                    type: i.Text
                },
                endBlurb_threat: {
                    getTitle: function() {
                        return Object(l.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                    },
                    type: i.Text
                },
                endLink_selfharm: {
                    getTitle: function() {
                        return Object(l.d)("Learn more about mental health support", "ReportModalWizard")
                    },
                    value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                    type: i.Link
                },
                endLink_DMCA: {
                    getTitle: function() {
                        return Object(l.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                    type: i.Link
                },
                endLink_trademark: {
                    getTitle: function() {
                        return Object(l.d)("View our Trademark Policy", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/trademark-policy/",
                    type: i.Link
                },
                endLink_devAgreement: {
                    getTitle: function() {
                        return Object(l.d)("View our Developer Agreement", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/developer-agreement/",
                    type: i.Link
                },
                endLink_eventCoC: {
                    getTitle: function() {
                        return Object(l.d)("View our Events Code of Conduct", "ReportModalWizard")
                    },
                    value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                    type: i.Link
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
                    reportReason: k.b.Harassment
                },
                violence: {
                    getTitle: function() {
                        return Object(l.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                    },
                    value: "violence/threats",
                    reportReason: k.b.Harm
                },
                report_username: {
                    getTitle: function() {
                        return Object(l.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                    },
                    value: "inappropriate username",
                    reportReason: k.b.OffensiveUsername
                },
                report_emotes: {
                    getTitle: function() {
                        return Object(l.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                    },
                    value: "inappropriate emotes",
                    reportReason: k.b.Other
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
                    reportReason: k.b.Spam
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
                    reportReason: k.b.Impersonation
                },
                underage: {
                    getTitle: function() {
                        return Object(l.d)("They're underage (12 or younger)", "ReportModalWizard")
                    },
                    value: "underage",
                    reportReason: k.b.Underaged
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
                    reportReason: k.b.Other
                },
                inappropriateBadge: {
                    getTitle: function() {
                        return Object(l.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                    },
                    value: "emote/subscriber badge",
                    reportReason: k.b.Other
                },
                noModeration: {
                    getTitle: function() {
                        return Object(l.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                    },
                    value: "not moderating chat",
                    reportReason: k.b.Other
                },
                inappropriateExtension: {
                    getTitle: function() {
                        return Object(l.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                    },
                    value: "inappropriate extension",
                    reportReason: k.b.Other
                },
                cheating: {
                    getTitle: function() {
                        return Object(l.d)("They're cheating in an online game", "ReportModalWizard")
                    },
                    value: "cheating",
                    reportReason: k.b.Cheating
                },
                bitsViolation: {
                    getTitle: function() {
                        return Object(l.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                    },
                    value: "bits violation",
                    reportReason: k.b.BitsViolation
                },
                video_labeling: {
                    getTitle: function() {
                        return Object(l.d)("Their content is labeled incorrectly", "ReportModalWizard")
                    },
                    value: "incorrect label",
                    reportReason: k.b.Miscategorized
                },
                video_inactive: {
                    getTitle: function() {
                        return Object(l.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                    },
                    value: "inactive stream",
                    reportReason: k.b.Miscategorized
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
                    reportReason: k.b.HatefulConduct
                },
                harassment: {
                    getTitle: function() {
                        return Object(l.d)("They're harassing or bullying someone", "ReportModalWizard")
                    },
                    value: "harassment",
                    reportReason: k.b.Harassment
                },
                abusiveViolence: {
                    getTitle: S.abusiveViolence,
                    value: "threatening violence",
                    reportReason: k.b.Harm
                },
                commitingViolence: {
                    getTitle: S.commitingViolence,
                    value: "committing violence",
                    reportReason: k.b.Harm
                },
                swatting: {
                    getTitle: function() {
                        return Object(l.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                    },
                    value: "swatting/ddosing",
                    reportReason: k.b.Harassment
                },
                personalInfo: {
                    getTitle: function() {
                        return Object(l.d)("They're purposely revealing personal information", "ReportModalWizard")
                    },
                    value: "revealing personal info",
                    reportReason: k.b.Harassment
                },
                threat_me: {
                    getTitle: function() {
                        return Object(l.d)("At me", "ReportModalWizard")
                    },
                    value: "against me",
                    reportReason: k.b.Harm
                },
                threat_person: {
                    getTitle: function() {
                        return Object(l.d)("At someone else", "ReportModalWizard")
                    },
                    value: "against another person",
                    reportReason: k.b.Harm
                },
                threat_group: {
                    getTitle: function() {
                        return Object(l.d)("At a group of people", "ReportModalWizard")
                    },
                    value: "against group of people",
                    reportReason: k.b.Harm
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
                    reportReason: k.b.Prohibited
                },
                sexuallyViolent: {
                    getTitle: function() {
                        return Object(l.d)("Violent sexual conduct", "ReportModalWizard")
                    },
                    value: "sexually violent",
                    reportReason: k.b.SexualViolence
                },
                childAnimal: {
                    getTitle: function() {
                        return Object(l.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                    },
                    value: "sexual conduct; child or animal",
                    reportReason: k.b.SexualViolence
                },
                pornographic: {
                    getTitle: function() {
                        return Object(l.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                    },
                    value: "pornographic",
                    reportReason: k.b.SexualContent
                },
                gory: {
                    getTitle: function() {
                        return Object(l.d)("Extreme violence or gore", "ReportModalWizard")
                    },
                    value: "gory",
                    reportReason: k.b.Gore
                },
                suggestive: {
                    getTitle: function() {
                        return Object(l.d)("Sexually suggestive content", "ReportModalWizard")
                    },
                    value: "sexually suggestive",
                    reportReason: k.b.SexualContent
                },
                nudity: {
                    getTitle: function() {
                        return Object(l.d)("Full or partial nudity", "ReportModalWizard")
                    },
                    value: "nudity",
                    reportReason: k.b.SexualContent
                },
                other: {
                    getTitle: function() {
                        return Object(l.d)("There's something else wrong with it...", "ReportModalWizard")
                    },
                    value: "other",
                    reportReason: k.b.Other
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
                    reportReason: k.b.TosBanEvasion
                },
                evasion_chat: {
                    getTitle: function() {
                        return Object(l.d)("A chat ban from one or more channels", "ReportModalWizard")
                    },
                    value: "chat ban",
                    reportReason: k.b.ChatBanEvasion
                },
                evasion_messaging: {
                    getTitle: function() {
                        return Object(l.d)("A block from messaging me", "ReportModalWizard")
                    },
                    value: "messaging block",
                    reportReason: k.b.ChatBanEvasion
                },
                impersonation_me: {
                    getTitle: S.me,
                    value: "impersonating me",
                    reportReason: k.b.Impersonation
                },
                impersonation_brand: {
                    getTitle: function() {
                        return Object(l.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                    },
                    value: "impersonating brand",
                    reportReason: k.b.Impersonation
                },
                impersonation_other: {
                    getTitle: S.someoneElse,
                    value: "impersonating someone else",
                    reportReason: k.b.Impersonation
                },
                selfharm: {
                    getTitle: function() {
                        return Object(l.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                    },
                    value: "selfharm",
                    reportReason: k.b.SelfHarm
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
                    reportContext: k.a.Whisper
                },
                username: {
                    getTitle: function() {
                        return Object(l.d)("In the username", "ReportModalWizard")
                    },
                    value: "username",
                    reportReason: k.b.OffensiveUsername
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
                    reportReason: k.b.Harassment,
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
                    reportReason: k.b.Harm
                },
                external_commitingViolence: {
                    getTitle: S.commitingViolence,
                    value: "external site; committing violence",
                    reportReason: k.b.Harm
                },
                conduct_impersonation: {
                    getTitle: function() {
                        return Object(l.d)("impersonating someone", "ReportModalWizard")
                    },
                    value: "impersonation",
                    reportReason: k.b.Impersonation
                },
                spam: {
                    getTitle: function() {
                        return Object(l.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                    },
                    value: "spam",
                    reportReason: k.b.Spam
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
                            i = n.name,
                            r = n.value;
                        t.props.onChangeText(i, r)
                    }, t.onSelect = function(e) {
                        if (t.props.currentCard.items && e.currentTarget.parentElement) {
                            var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                i = t.props.currentCard.items[n];
                            t.props.onChangeRadio(i)
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
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
                            case i.Text:
                                return a.createElement(f._8, {
                                    key: n,
                                    padding: {
                                        bottom: 1
                                    }
                                }, t.getTitle());
                            case i.Link:
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
                            case i.Textarea:
                                var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                    o = t.required && (!r || !!r && 0 === r.trim().length);
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
                                    value: r,
                                    "data-test-selector": "report-wizard-textarea"
                                })));
                            case i.MultipleChoice:
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
        }(_ || (_ = {}));
        var C, O, E, N = {
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
            R = {
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
                getTitle: R.thanks,
                type: _.Info,
                value: "end card"
            },
            L = {
                socialMedia: r.__assign({}, I, {
                    items: [T.endBlurb_socialmedia]
                }),
                violence: r.__assign({}, I, {
                    items: [T.endBlurb_threat]
                }),
                legal: {
                    getTitle: R.thanksConcern,
                    getDescription: function() {
                        return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                    },
                    items: [T.endLink_DMCA, T.endLink_trademark, T.endLink_devAgreement],
                    type: _.Info,
                    value: "ip end"
                },
                selfharm: {
                    getTitle: R.thanksConcern,
                    getDescription: function() {
                        return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                    },
                    items: [T.endLink_selfharm],
                    type: _.Info,
                    value: "selfharm end"
                },
                twitchEvent: {
                    getTitle: R.thanksConcern,
                    getDescription: function() {
                        return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                    },
                    items: [T.endLink_eventCoC],
                    value: "twitch event end",
                    type: _.Info
                }
            },
            F = {
                getTitle: R.report,
                getLabel: function() {
                    return Object(l.d)("Where is the problem?", "ReportModalWizard")
                },
                items: [T.video, T.whisper, T.chat, T.room, T.profile, T.username, T.report_other],
                type: _.MultipleChoice,
                value: "content type"
            },
            D = {
                identifyUser: {
                    getTitle: R.reportVideo,
                    getLabel: N.identifyUser,
                    items: [T.video_streamer, T.video_someoneElse, T.video_chatSomeone],
                    type: _.MultipleChoice,
                    value: "video identify user"
                },
                content: {
                    getTitle: R.reportVideo,
                    getLabel: N.contentGeneral,
                    items: [T.revealPersonalInfo, T.video_labeling, T.video_inactive, T.video_general, T.report_ip, T.violateDevAgreement, T.selfharm],
                    type: _.MultipleChoice,
                    value: "video report reason"
                },
                general: {
                    getTitle: R.reportVideo,
                    getLabel: N.content,
                    items: [T.report_username, T.violence, T.abusive, T.cheating, T.scam, T.inappropriateContent, T.evasion, T.impersonation, T.underage, T.bitsViolation],
                    type: _.MultipleChoice,
                    value: "video general report reason"
                }
            },
            x = {
                content: {
                    getTitle: R.reportMessage,
                    getLabel: N.contentGeneral,
                    items: [T.revealPersonalInfo, T.evasion, T.spam, T.maliciousRaid, T.report_username, T.messaging_general, T.selfharm],
                    type: _.MultipleChoice,
                    value: "message report reason"
                },
                general: {
                    getTitle: R.reportMessage,
                    getLabel: N.content,
                    items: [T.report_emotes, T.violence, T.abusive, T.inappropriateContent, T.impersonation, T.underage, T.bitsViolation],
                    type: _.MultipleChoice,
                    value: "message general report reason"
                }
            },
            j = r.__assign({}, x.content, {
                getDescription: function() {
                    return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                }
            }),
            U = {
                content: {
                    getTitle: R.reportProfile,
                    getLabel: N.contentGeneral,
                    items: [T.revealPersonalInfo, T.inappropriateBadge, T.inappropriateExtension, T.noModeration, T.profile_general, T.report_ip, T.violateDevAgreement, T.selfharm],
                    type: _.MultipleChoice,
                    value: "profile report reason"
                },
                general: {
                    getTitle: R.reportProfile,
                    getLabel: N.content,
                    items: [T.report_username, T.violence, T.abusive, T.scam, T.inappropriateContent, T.evasion, T.impersonation, T.underage, T.bitsViolation],
                    type: _.MultipleChoice,
                    value: "profile general report reason"
                }
            },
            M = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username}'s Room", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: N.identifyUser,
                items: [T.report_channelOwner, T.report_member],
                value: "room report user",
                type: _.MultipleChoice
            },
            A = {
                getTitle: R.tellUsMore,
                items: [T.input_description],
                type: _.Confirm,
                value: "tell us more"
            },
            B = {
                banEvasion: r.__assign({}, A, {
                    items: [T.input_usernames, T.input_description],
                    value: "ban evasion tell us more"
                }),
                socialMedia: r.__assign({}, A, {
                    items: [T.input_link, T.input_connection, T.input_description],
                    nextCard: L.socialMedia,
                    value: "social media tell us more"
                })
            },
            G = {
                content: {
                    getTitle: R.reportAbusive,
                    getLabel: N.relevantStatements,
                    items: [T.hateSpeech, T.harassment, T.abusiveViolence, T.commitingViolence, T.swatting, T.personalInfo],
                    type: _.MultipleChoice,
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
                    type: _.MultipleChoice,
                    value: "violence type"
                }
            },
            V = {
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
                    type: _.MultipleChoice,
                    value: "off-site conduct location"
                },
                externalSite: {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Conduct on Another Site or Service", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: N.thisPersonIs,
                    getDescription: function() {
                        return Object(l.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                    },
                    items: [T.external_incitingRaids, T.external_threatening, T.external_harassment],
                    type: _.MultipleChoice,
                    nextCard: B.socialMedia,
                    value: "external site conduct"
                },
                external_violence: r.__assign({}, G.violence, {
                    items: [T.threat_me, T.threat_person, T.threat_group],
                    nextCard: B.socialMedia
                }),
                external_abusive: r.__assign({}, G.content, {
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
                getLabel: N.contentGeneral,
                items: [T.spam_bot, T.spam_scam, T.spam_repeated],
                type: _.MultipleChoice,
                value: "spam type"
            },
            W = {
                getTitle: function(e) {
                    return Object(l.d)("Report {username} for Inappropriate Content", {
                        username: e
                    }, "ReportModalWizard")
                },
                getLabel: N.relevantStatements,
                items: [T.inappropriate_game, T.gory, T.sexuallyViolent, T.childAnimal, T.pornographic, T.suggestive, T.nudity, T.other],
                type: _.MultipleChoice,
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
                type: _.MultipleChoice,
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
                type: _.MultipleChoice,
                value: "impersonation type"
            },
            q = F,
            K = A,
            Y = I,
            $ = {
                video: D.identifyUser,
                whisper: j,
                chat: x.content,
                profile: U.content,
                room: M,
                "somewhere else": V.identifyLocation,
                streamer: D.content,
                "someone else in video": D.content,
                "someone in chat": x.content,
                general_video: D.general,
                general_messaging: x.general,
                general_profile: U.general,
                "channel owner": U.content,
                "community member": x.content,
                "on twitch": U.content,
                "another site": V.externalSite,
                "twitch event": L.twitchEvent,
                "brigading/raids": B.socialMedia,
                threatening: V.external_violence,
                "hateful/harassing": V.external_abusive,
                "external site; threatening violence": V.external_violence,
                "external site; committing violence": V.external_violence,
                "external site; scam": B.socialMedia,
                "ban evasion": z,
                spam: H,
                hateful: G.content,
                impersonation: Q,
                "violence/threats": G.violence,
                "threatening violence": G.violence,
                "committing violence": G.violence,
                abusive: G.content,
                "inappropriate content": W,
                "intellectual property": L.legal,
                "violating developer agreement": L.legal
            },
            J = {
                selfharm: L.selfharm,
                harm: L.violence,
                other: Y
            },
            Z = {
                CHANNEL_FEED_POST_REPORT: U.content,
                COMMUNITY_REPORT: U.content,
                CHAT_REPORT: x.content,
                CLIP_REPORT: D.content,
                EVENT_REPORT: U.content,
                EXTENSION_REPORT: U.content,
                LIVE_UP_REPORT: U.content,
                ROOM_REPORT: M,
                WHISPER_REPORT: j,
                VOD_COMMENT_REPORT: x.content
            },
            X = "report-wizard-back",
            ee = "report-wizard-close",
            te = "report-wizard-next",
            ne = "report-wizard-submit",
            ie = function(e) {
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
                            i = ee,
                            r = !1,
                            o = t.state.prevCards.length ? t.renderBack() : null;
                        switch (t.state.currentCard.type) {
                            case _.MultipleChoice:
                                e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, i = te, r = !t.state.currentSelection;
                                break;
                            case _.Confirm:
                                e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, r = !t.state.userTextInput, i = ne
                        }
                        return a.createElement(f._8, null, o, a.createElement(f.v, {
                            onClick: n,
                            disabled: r,
                            "data-test-selector": i
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
                            "data-test-selector": X
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
                            return t.props.trackClose(E.Finish, t.state.currentCard.value)
                        }), t.props.onClose()
                    }, t.handleNext = function() {
                        if (t.state.currentSelection && t.state.currentSelection.value) {
                            var e = t.state.currentCard,
                                n = t.state.prevCards.concat(e),
                                i = t.state.prevSelections.concat(t.state.currentSelection),
                                r = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                o = t.state.currentSelection.reportContext || t.state.reportContext,
                                s = e.nextCard || K;
                            $[t.state.currentSelection.value] && (s = $[t.state.currentSelection.value]);
                            var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                c = s.type === _.Info;
                            t.setState({
                                currentCard: s,
                                reportReason: l,
                                prevCards: c ? [] : n,
                                prevSelections: i,
                                targetUnknown: a,
                                currentSelection: r || null,
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
                            if (e.type !== i.Textarea || !e.required) return !1;
                            var n = t.state.userTextInput[e.value],
                                r = n && 0 === n.trim().length;
                            return !n || r
                        }).length
                    }, t.handleSubmit = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, a = this;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, null, null, this.state.reportContext)]) : [3, 2];
                                    case 1:
                                        switch (r.sent(), this.props.submitStatus) {
                                            case P.b.FormError:
                                                this.setState({
                                                    error: e
                                                });
                                                break;
                                            case P.b.Success:
                                                i = Y, J[t] && (i = J[t]), this.state.currentCard.nextCard && (i = this.state.currentCard.nextCard), this.setState({
                                                    currentCard: i,
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
                                        }), r.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleBack = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, a, o = this;
                            return r.__generator(this, function(r) {
                                return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], i = !n.differentTarget && this.state.targetUnknown, a = this.state.displacedSelections, this.state.currentSelection && (a = a.concat(this.state.currentSelection)), t && n && this.setState({
                                    currentCard: t,
                                    currentSelection: n,
                                    displacedSelections: a,
                                    prevCards: this.state.prevCards.slice(0, -1),
                                    prevSelections: this.state.prevSelections.slice(0, -1),
                                    error: "",
                                    targetUnknown: i
                                }, function() {
                                    return o.trackNavigation(O.Back, e.value)
                                }), [2]
                            })
                        })
                    }, t.handleTextInput = function(e, n) {
                        var i = t.state.userTextInput;
                        i[e] = n, t.setState({
                            userTextInput: i
                        })
                    }, t.handleSelection = function(e) {
                        if (t.state.currentCard.items && e !== t.state.currentSelection) {
                            var n = t.state.targetUnknown;
                            if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                return e.differentTarget
                            }).length;
                            var i = t.state.reportContext;
                            (t.state.displacedSelections.filter(function(e) {
                                return e.reportContext
                            }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (i = t.props.reportContentType), t.setState({
                                currentSelection: e,
                                displacedSelections: [],
                                userTextInput: {},
                                targetUnknown: n,
                                reportContext: i
                            })
                        }
                    }, t.trackNavigation = function(e, n) {
                        t.props.trackAction(e, n, t.state.currentCard.value)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.state.modalCloseTracked || this.props.trackClose(E.Close, this.state.currentCard.value)
                }, t.prototype.render = function() {
                    var e = this.state.currentCard.type === _.Info && this.state.currentCard.blockPrompt ? a.createElement(y, {
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
                        n = this.state.prevCards.length || this.state.currentCard.type === _.Info ? null : this.renderPrimer();
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
            re = n("xwpJ"),
            ae = n("mmQh"),
            oe = n("mRH2"),
            se = n("IRHd");
        n.d(t, "c", function() {
                return O
            }), n.d(t, "a", function() {
                return E
            }), n.d(t, "b", function() {
                return ce
            }),
            function(e) {
                e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
            }(C || (C = {})),
            function(e) {
                e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
            }(O || (O = {})),
            function(e) {
                e.Close = "close", e.Finish = "finish"
            }(E || (E = {}));
        var le = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.handleSubmit = function(e, t, i, a, o) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, s, c, u, d = this;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (e !== P.a) return [3, 5];
                                    c = {
                                        userID: this.props.reportContext.targetUserID,
                                        communityID: i || "",
                                        reason: t
                                    }, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(p.a)(c))];
                                case 2:
                                    return r.sent(), l.o.tracking.track(h.SpadeEventType.CommunityModeration, {
                                        community_id: i,
                                        name: a,
                                        is_official: !1,
                                        user_id: this.props.sessionUser && this.props.sessionUser.id,
                                        target_id: this.props.reportContext.targetUserID,
                                        action: "report",
                                        reason: e
                                    }), this.setState({
                                        submitStatus: P.b.Success
                                    }, function() {
                                        d.state.showWizard || d.trackAction(C.Submit)
                                    }), [3, 4];
                                case 3:
                                    return n = r.sent(), l.j.error(n, "ReportUserInCommunity Mutation failed."), this.setState({
                                        submitStatus: P.b.MutationError
                                    }), [3, 4];
                                case 4:
                                    return [3, 9];
                                case 5:
                                    if (s = o === k.a.Whisper ? o : this.props.reportContext.contentType, c = {
                                            description: t,
                                            reason: e,
                                            content: s,
                                            contentID: this.props.reportContext.contentID,
                                            extra: this.props.reportContext.extra,
                                            targetID: this.props.reportContext.targetUserID
                                        }, this.props.reportContext.contentType === k.a.Community && this.props.reportContext.extra && (c.description = Object(re.a)(this.props.reportContext.extra, t)), null === c.targetID) return this.setState({
                                        submitStatus: P.b.UserError
                                    }), [2];
                                    r.label = 6;
                                case 6:
                                    return r.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(p.a)(c))];
                                case 7:
                                    return r.sent(), this.props.reportContext.contentType === k.a.Community && l.o.tracking.track(h.SpadeEventType.CommunityReport, {
                                        community_id: this.props.reportContext.contentID,
                                        name: this.props.reportContext.extra,
                                        is_official: !1,
                                        user_id: this.props.sessionUser && this.props.sessionUser.id,
                                        reason: e
                                    }), this.setState({
                                        submitStatus: P.b.Success
                                    }, function() {
                                        d.state.showWizard || d.trackAction(C.Submit)
                                    }), [3, 9];
                                case 8:
                                    return u = r.sent(), l.j.error(u, "ReportUser Mutation failed."), this.setState({
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
                    n.props.blockUserMutation(n.props.reportContext.targetUserID, void 0, void 0, r.__assign({}, n.props.sessionUser, {
                        __typename: "User"
                    })), n.setState({
                        userBlocked: !0
                    })
                }, n.onUnblock = function() {
                    n.props.unblockUserMutation(n.props.reportContext.targetUserID, r.__assign({}, n.props.sessionUser, {
                        __typename: "User"
                    })), n.setState({
                        userBlocked: !1
                    })
                }, n.trackOpen = function(e) {
                    n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(O.Open, void 0, e) : n.trackAction(C.Open), n.setState({
                        openEventSent: !0
                    }))
                }, n.trackClose = function(e, t) {
                    n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(O.Close, t, void 0, e) : n.trackAction(C.Close), n.setState({
                        closeEventSent: !0
                    }))
                }, n.trackWizardAction = function(e, t, i, r) {
                    l.o.tracking.track(h.SpadeEventType.ReportWizardFlowAction, {
                        ui_context: n.props.reportContext.contentType,
                        target_user_id: n.props.reportContext.targetUserID,
                        report_sent: n.state.submitStatus === P.b.Success,
                        modal_type: "wizard_v1",
                        extra_user_id: n.props.reportContext.additionalTrackingID,
                        action: e,
                        close_type: r,
                        report_session_id: n.reportID,
                        current_step: t,
                        navigated_to: i
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
                var i = l.o.experiments.getAssignment("TWILIGHT_NEW_REPORTING_WIZARD");
                return n.state = {
                    submitStatus: P.b.Unsubmitted,
                    showWizard: "yes" === i,
                    openEventSent: !1,
                    closeEventSent: !1,
                    userBlocked: !1
                }, n
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
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
                return this.state.showWizard ? this.props.data.loading ? a.createElement(f._10, null) : a.createElement(ie, r.__assign({}, e, {
                    user: this.props.sessionUser,
                    targetUser: this.props.data.user,
                    onBlock: this.onBlock,
                    onUnblock: this.onUnblock,
                    trackAction: this.trackWizardAction,
                    trackClose: this.trackClose,
                    userBlocked: this.userBlocked
                })) : a.createElement(P.c, r.__assign({}, e))
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
        var i = n("TToO"),
            r = n("GiK3"),
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
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = h("live-channel-preview-card", {
                        "live-channel-preview-card--loading": !this.props.streamLoaded
                    });
                    return r.createElement("div", i.__assign({
                        className: e,
                        "data-test-selector": "live-channel-preview-card"
                    }, Object(g._63)(this.props)), r.createElement(l.a, i.__assign({}, this.props), r.createElement(g.k, {
                        ratio: g.l.Aspect16x9
                    }, this.props.videoPlayer)))
                }, t
            }(r.Component)),
            b = n("v5ho"),
            v = n("RH2O"),
            y = n("2KeS"),
            k = n("V5M+"),
            _ = n("jetF"),
            S = n("7vx8"),
            T = n("CSlQ"),
            w = n("/gww"),
            P = n("0w5y"),
            C = n("PO03"),
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
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? r.createElement(_.a, null, r.createElement(g.w, {
                        ariaLabel: Object(o.d)("Moderation", "DirectoryGamePage"),
                        icon: g._25.ChatRiskFlag
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
                }, t = i.__decorate([Object(S.a)(C, {
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
            }(r.Component);
        var E = Object(v.b)(null, function(e) {
                return Object(y.b)({
                    onShowModal: k.d
                }, e)
            })(O),
            N = n("vKYI"),
            R = n("PLRK"),
            I = (n("GiGb"), "directory-first-item"),
            L = "directory-game__card_container",
            F = 5e3,
            D = 300,
            x = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderVariation = function() {
                        var e = n.props.streamNode,
                            t = n.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var a = {
                            context: n.props.directoryType === b.a.Games ? c.b.SingleGameList : c.b.MixedGameAndChannelList,
                            title: e.title || R.a,
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
                        return r.createElement("div", {
                            className: "stream-thumbnail",
                            ref: n.setRef,
                            "data-target": t ? "" : I,
                            style: {
                                order: t
                            }
                        }, r.createElement(g._8, {
                            className: "stream-thumbnail__card",
                            position: g._15.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": L
                        }, r.createElement(c.a, i.__assign({}, a, {
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        })), n.renderStreamFlag()))
                    }, n.renderFallback = function() {
                        var e = n.props.streamNode,
                            t = n.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var i = n.props.showPreview && n.state.hovered && n.state.loadingPreview && !n.state.streamLoaded && !n.state.previewTimedOut,
                            a = n.props.showPreview && n.state.hovered && (n.state.loadingPreview || n.state.streamLoaded) && !n.state.previewTimedOut;
                        return r.createElement("div", {
                            className: "stream-thumbnail",
                            ref: n.setRef,
                            "data-target": t ? "" : I,
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
                            "data-target": L
                        }, i && r.createElement(g._35, {
                            attachRight: !0,
                            attachTop: !0,
                            background: g.n.Overlay,
                            borderRadius: g.t.Small,
                            color: g.K.OverlayAlt,
                            margin: .5,
                            padding: .5,
                            position: g._15.Absolute,
                            zIndex: g._62.Above
                        }, r.createElement(g._10, {
                            fillContent: !0,
                            inheritColor: !0,
                            size: g._33.Small
                        })), !n.state.streamLoaded && r.createElement(l.a, {
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || R.a,
                            channelName: Object(d.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                            onClick: n.onClick,
                            gameImageSrc: n.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                            gameTitle: n.shouldShowGame("name"),
                            gameLinkTo: n.getLinkTo(Object(p.c)(n.shouldShowGame("name")), t),
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            channelNameLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            streamType: e.type,
                            streamMetadata: e.streamMetadata,
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        }), a && r.createElement(f, {
                            streamLoaded: n.state.streamLoaded,
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || R.a,
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
                        var i = n.props.trackingContent ? n.props.trackingContent : m.PageviewContent.Live,
                            r = n.props.directoryType === b.a.Communities ? m.PageviewMedium.Community : m.PageviewMedium.Game;
                        return n.props.trackingMedium && (r = n.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: r,
                                content: i,
                                content_index: t
                            }
                        }
                    }, n.renderStreamFlag = function() {
                        var e = n.props.streamNode;
                        return e.broadcaster ? n.props.directoryType === b.a.Communities && n.props.directoryName ? r.createElement(g._8, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: g._15.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, r.createElement(E, {
                            communityName: n.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, n.shouldShowGame = function(e) {
                        return n.props.directoryType !== b.a.Games && n.props.streamNode.game ? n.props.streamNode.game[e] : ""
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
                            }, D)
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
                        }, F)
                    }, n.setRef = function(e) {
                        e && (n.thumbnailNode = a.findDOMNode(e), n.addThumbnailListener())
                    }, n.getVideoPlayer = function() {
                        var e = {
                            onPlayerPlaying: n.onStreamLoaded
                        };
                        if (n.props.showPreview && n.state.hovered && n.props.streamNode.broadcaster && n.props.streamNode.broadcaster.login) return r.createElement(N.a, i.__assign({
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
                    return r.createElement(s.a, i.__assign({}, e))
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return I
        }), n.d(t, !1, function() {
            return L
        }), n.d(t, "b", function() {
            return x
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
            return i.__awaiter(this, void 0, void 0, function() {
                var t, n, l, c, u, d, p, m, h, g, f, b, v;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            t = r.n.getVideoPlayerTrackingData().vodID, n = !!t, l = {
                                channelID: e.channelID,
                                withVideo: !1
                            }, n && (l.withVideo = !0, l.videoID = t), c = null, i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]), [4, r.o.apollo.client.query({
                                query: s,
                                variables: l
                            })];
                        case 2:
                            return c = i.sent(), [3, 4];
                        case 3:
                            return u = i.sent(), r.j.error(u, "Failed to make query for channel info in FollowEvent reporting.", {
                                channelID: e.channelID
                            }), [3, 4];
                        case 4:
                            return d = c && c.data && c.data.user || null, c && !d && r.j.error(new Error("GraphQL empty response"), "Query for channel info in SubEvent reporting returned no data.", {
                                channelID: e.channelID
                            }), p = null, c && n && ((m = c && c.data && c.data.video) ? p = Object(o.a)(m.broadcastType) : r.j.error(new Error("GraphQL empty response"), "Query for video info in SubEvent reporting returned no data.", {
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
                            }, r.n.track(a.SpadeEventType.Subscription, v), [2]
                    }
                })
            })
        };
        var i = n("TToO"),
            r = n("6sO2"),
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
            var e = i.o.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return r.slice().sort(function(e, n) {
                var i = t(e),
                    r = t(n);
                return i !== r ? i - r : i + ":" + e.label < r + ":" + n.label ? -1 : 1
            }).concat(a(!0))
        };
        var i = n("6sO2"),
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
                code: "ro",
                label: "Română"
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
                label: e ? Object(i.d)("Other", "broadcaster-languages") : "Other"
            }]
        }
        var o = new Set(r.concat(a()).map(function(e) {
            return e.code
        }))
    },
    DquS: function(e, t) {},
    EOpv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        });
        var i, r = n("6sO2");
        ! function(e) {
            e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
        }(i || (i = {}));
        var a = function(e) {
            switch (e) {
                case i.CSGOMap:
                    return Object(r.d)("Map", "CSGOMapFilter");
                case i.CSGOSkillGroup:
                    return Object(r.d)("Rank", "CSGORankFilter");
                case i.HearthstoneClass:
                    return Object(r.d)("Class", "HearthstoneClassFilter");
                case i.HearthstoneMode:
                    return Object(r.d)("Mode", "HearthstoneModeFilter");
                case i.LeagueChampion:
                    return Object(r.d)("Champion", "LeagueFilter");
                case i.OverwatchCharacter:
                    return Object(r.d)("Hero", "OverwatchFilter");
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
            return r.PubsubTopic.BroadcastSettingsUpdate + "." + e
        }, t.e = function(e) {
            return r.PubsubTopic.ChatRoom + "." + e
        }, t.f = function(e) {
            return r.PubsubTopic.ChatRoomsChannel + "." + e
        }, t.g = function(e) {
            return r.PubsubTopic.ChatRoomsUser + "." + e
        }, t.z = function(e) {
            return r.PubsubTopic.VideoThumbnailProcessing + "." + e
        }, t.i = function(e) {
            return r.PubsubTopic.ImageUpload + "." + e
        }, t.s = function(e) {
            return r.PubsubTopic.UploadService + "." + e
        }, t.y = function(e) {
            return r.PubsubTopic.VideoPlaybackById + "." + e
        }, t.l = function(e) {
            return r.PubsubTopic.PayoutOnboardingEvents + "." + e
        }, t.m = function(e) {
            return r.PubsubTopic.Presence + "." + e
        }, t.j = function(e, t) {
            return r.PubsubTopic.ModerationActionsByUserAndChannel + "." + e + "." + t
        }, t.n = function(e) {
            return r.PubsubTopic.Raid + "." + e
        }, t.o = function(e) {
            return r.PubsubTopic.StreamChange + "." + e
        }, t.h = function(e) {
            return r.PubsubTopic.Friendship + "." + e
        }, t.b = function(e) {
            return r.PubsubTopic.ChannelBitsPinEvents + "." + e
        }, t.a = function(e) {
            return r.PubsubTopic.BitsLeaderboardEvents + "." + e.id
        }, t.t = function(e) {
            return r.PubsubTopic.UserBitsUpdates + "." + e
        }, t.x = function(e) {
            return r.PubsubTopic.UserSubscribeEvents + "." + e
        }, t.w = function(e) {
            return r.PubsubTopic.UserCrateEvents + "." + e
        }, t.u = function(e) {
            return r.PubsubTopic.CampaignUserEvents + "." + e
        }, t.v = function(e) {
            return r.PubsubTopic.UserCommerceEvents + "." + e
        }, t.A = function(e) {
            return r.PubsubTopic.Whispers + "." + e
        }, t.k = function(e) {
            return r.PubsubTopic.OnsiteNotifications + "." + e
        }, t.p = function(e) {
            return r.PubsubTopic.StreamChatRoom + "." + e
        }, t.d = function(e) {
            return r.PubsubTopic.ChannelEventUpdates + "." + e
        }, t.r = function(e) {
            return i.k.subscribe({
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
            return i.k.subscribe({
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
        var i = n("6sO2"),
            r = n("aMxy"),
            a = n("oIkB")
    },
    Hjbq: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.b = function(e) {
            return {
                type: i,
                playerRefID: e
            }
        };
        var i = "video-player.VIDEO_PLAYER_INSTANCE_STARTED"
    },
    I4TS: function(e, t) {},
    I89S: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
            }(i || (i = {}))
    },
    IJO1: function(e, t) {},
    IOwa: function(e, t, n) {
        "use strict";
        var i, r, a, o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            c = n("6sO2"),
            u = n("2o2f"),
            d = n("Odds"),
            p = (n("CybZ"), (i = {})[u.a.Live] = "stream-type-indicator--live", i[u.a.Premiere] = "stream-type-indicator--premiere", i[u.a.Rerun] = "stream-type-indicator--rerun", i[u.a.WatchParty] = "stream-type-indicator--rerun", i),
            m = ((r = {})[u.a.Premiere] = d._25.VideoPremiere, r[u.a.Rerun] = d._25.VideoRerun, r[u.a.WatchParty] = d._25.VideoRerun, r),
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
    JJaH: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = n("3zLD"),
            s = n("6sO2"),
            l = n("7vx8"),
            c = n("vBst"),
            u = n("oIkB"),
            d = n("CSlQ"),
            p = n("CwIZ"),
            m = n("8PKe"),
            h = n("Kckk"),
            g = n("Odds"),
            f = n("iQti");
        ! function(e) {
            e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
        }(i || (i = {}));
        var b = n("81fF");
        n.d(t, "a", function() {
            return k
        });
        var v = "subscribe-button__prime-subscribe",
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribing: !1,
                        primeSubFailure: !1,
                        error: void 0
                    }, t.handleStartPrimeTrialClick = function() {
                        t.props.reportSubMenuAction({
                            action: p.a.ClickSignupForPrime
                        })
                    }, t.getErrorType = function() {
                        return t.state.error || h.b.UNABLE_TO_SPEND
                    }, t.spendPrimeCredit = function() {
                        t.setState({
                            isSubscribing: !0
                        });
                        var e = t.props,
                            n = e.data;
                        if (t.isUserDataReady(e) && n.currentUser && n.currentUser.id && n.user && n.user.id) {
                            var r = n.user.id,
                                a = n.currentUser.id,
                                o = Object(u.a)({
                                    broadcasterID: r,
                                    userID: a
                                });
                            t.props.spendPrimeSubscriptionCredit(o).then(function(e) {
                                var n = ((e.data || {}).spendSubscriptionCredit || {}).error;
                                if (n) {
                                    var r = h.b[n.code];
                                    t.setState({
                                        isSubscribing: !1,
                                        primeSubFailure: !0,
                                        error: r || h.b.UNABLE_TO_SPEND
                                    })
                                } else {
                                    t.setState({
                                        isSubscribing: !1,
                                        primeSubFailure: !1,
                                        error: void 0
                                    });
                                    Object(u.e)(b, {
                                        login: t.props.channelLogin
                                    }, function(e) {
                                        var t = e.user;
                                        return t && t.self && t.id && (t.self.subscriptionBenefit || (t.self.subscriptionBenefit = {
                                            __typename: "SubscriptionBenefit",
                                            id: t.id,
                                            purchasedWithPrime: !0,
                                            tier: c.a.Prime,
                                            platform: i.WEB,
                                            gift: {
                                                __typename: "SubscriptionGift",
                                                isGift: !1,
                                                gifter: null
                                            },
                                            renewsAt: null,
                                            endsAt: null,
                                            paidUpgrade: null
                                        }), t.self.canPrimeSubscribe = !1), e
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    isSubscribing: !1,
                                    primeSubFailure: !0,
                                    error: h.b.UNABLE_TO_SPEND
                                })
                            })
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.state.isSubscribing) return a.createElement(g.v, r.__assign({
                        "data-test-selector": v,
                        disabled: this.state.isSubscribing,
                        icon: g._25.Crown,
                        state: g.A.Loading
                    }, Object(g._63)(this.props)));
                    if (this.state.primeSubFailure) {
                        var e = this.getErrorType();
                        return a.createElement(m.b, {
                            fontSize: g.V.Size6,
                            testTarget: "prime-sub-error",
                            errorType: e
                        })
                    }
                    if (!this.isUserDataReady(this.props)) return a.createElement(g._14, {
                        width: 82,
                        height: 30
                    });
                    var t = this.canPrimeSubscribe(this.props),
                        n = this.canResub(this.props);
                    if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                        var i = Object(s.d)("Start Your Free Trial", "PrimeSubscribe");
                        return a.createElement(g.v, r.__assign({
                            ariaLabel: i,
                            "data-test-selector": v,
                            icon: g._25.Crown,
                            linkTo: s.a.tryPrimeURI,
                            onClick: this.handleStartPrimeTrialClick
                        }, Object(g._63)(this.props), {
                            targetBlank: !0
                        }), i)
                    }
                    if (this.isSubscribed(this.props) && !n) {
                        var o = Object(s.d)("Subscribed", "PrimeSubscribe");
                        return a.createElement(g.v, r.__assign({
                            ariaLabel: o,
                            "data-test-selector": v,
                            disabled: !0,
                            icon: g._25.Crown
                        }, Object(g._63)(this.props)), o)
                    }
                    if (!t) {
                        var l = Object(s.d)("Not yet!", "PrimeSubscribe");
                        return a.createElement(g.v, r.__assign({
                            ariaLabel: l,
                            "data-test-selector": v,
                            disabled: !0,
                            icon: g._25.Crown
                        }, Object(g._63)(this.props)), l)
                    }
                    var c = n ? Object(s.d)("Resubscribe Free", "PrimeSubscribe") : Object(s.d)("Subscribe Free", "PrimeSubscribe");
                    return a.createElement(g.v, r.__assign({
                        ariaLabel: c,
                        "data-test-selector": v,
                        disabled: this.state.isSubscribing,
                        icon: g._25.Crown,
                        state: this.state.isSubscribing ? g.A.Loading : g.A.Default,
                        onClick: this.spendPrimeCredit
                    }, Object(g._63)(this.props)), c)
                }, t.prototype.isUserDataReady = function(e) {
                    return e.data && e.data.user && !e.data.loading && !e.data.error
                }, t.prototype.canPrimeSubscribe = function(e) {
                    return e.data && e.data.user && e.data.user.self && e.data.user.self.canPrimeSubscribe
                }, t.prototype.canResub = function(e) {
                    return e.data && e.data.user && e.data.user.self && e.data.user.self.subscriptionBenefit && e.data.user.self.subscriptionBenefit.purchasedWithPrime && this.canPrimeSubscribe(this.props)
                }, t.prototype.isSubscribed = function(e) {
                    var t = e.data,
                        n = t && t.user,
                        i = n && n.self;
                    return i && i.subscriptionBenefit
                }, t
            }(a.Component),
            k = Object(o.compose)(Object(d.d)("PrimeSubscribe"), Object(l.a)(b, {
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
            }), Object(l.a)(f, {
                name: "spendPrimeSubscriptionCredit"
            }))(y)
    },
    JVP6: function(e, t) {},
    JpYe: function(e, t, n) {
        "use strict";
        t.e = function(e, t, n, r) {
            var o = r || l(t),
                u = "";
            o && (u = "?sort=" + function(e) {
                switch (e) {
                    case s.b:
                        return i.Popular;
                    case s.a:
                        return i.Newest;
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
            var t = r.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }, t.f = u, t.b = function(e) {
            if ("" === e) return "";
            if (e.startsWith("v")) return e;
            return "v" + e
        };
        var i, r = n("OAwv"),
            a = (n.n(r), n("6sO2")),
            o = n("6WAQ"),
            s = n("3yQz");

        function l(e) {
            return u(r.parse(e.location.search).sort || "")
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
        }(i || (i = {}))
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
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("O27J"),
            o = n("6sO2"),
            s = n("Odds"),
            l = (n("j9al"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props.hash,
                        t = e && a.findDOMNode(this.refs[e]);
                    t && t.scrollIntoView()
                }, t.prototype.render = function() {
                    return r.createElement("div", {
                        id: "faq",
                        ref: "faq"
                    }, r.createElement(s._35, {
                        className: "twitch-prime-faq",
                        padding: {
                            x: 1,
                            y: 5
                        }
                    }, r.createElement(s._23, {
                        centered: !0
                    }, r.createElement(s.Y, {
                        justifyContent: s._7.Center
                    }, r.createElement(s.L, {
                        cols: {
                            default: 12,
                            sm: 10,
                            md: 8,
                            lg: 7,
                            xl: 6
                        }
                    }, r.createElement(s._8, {
                        margin: {
                            bottom: 2
                        },
                        textAlign: s._45.Center,
                        fullWidth: !0
                    }, r.createElement(s.Q, {
                        type: s._49.H2,
                        bold: !0
                    }, Object(o.d)("FAQ/Help", "PrimeFAQComponent"))), this.renderQuestion(Object(o.d)("Do I need a Twitch Prime membership to get Fortnite content?", "PrimeFAQComponent"), "membership"), this.renderAnswer(Object(o.d)("Yes.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("What exactly will I get in the Twitch Prime Pack #2?", "PrimeFAQComponent"), "loot"), this.renderAnswer(Object(o.d)("This pack includes 4 distinct items, all of which are exclusively available to Twitch Prime members:", "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("Battle Royale Trailblazer Outfit: On the forefront of victory.", "PrimeFAQComponent"), Object(o.d)("Battle Royale True North Back Bling: Find your way.", "PrimeFAQComponent"), Object(o.d)("Battle Royale Tenderizer Pickaxe: Leave a good first impression.", "PrimeFAQComponent"), Object(o.d)("Battle Royale Freestylin’ Emote: Tear up the dance floor.", "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("Note: All items are cosmetic only and provide no competitive advantage. All items for Twitch Prime Pack #2 are for Battle Royale only.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How do I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "content"), this.renderAnswer(Object(o.d)("If you already have an active Twitch Prime membership (either paid or free trial), log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I already linked my Twitch and Epic account when I claimed the first Twitch Prime Pack. Do I need to claim again to get the current Twitch Prime content?", "PrimeFAQComponent"), "linkedaccount"), this.renderAnswer(Object(o.d)("YES. You must claim each Twitch Prime Pack individually. If you already linked your Twitch and Epic accounts for the previous Twitch Prime loot in Fortnite, log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How do I become a Twitch Prime member?", "PrimeFAQComponent"), "signup"), this.renderAnswerWithLink(Object(o.d)("Twitch Prime is included with Amazon Prime in the US, Mexico, Canada, Italy, France, Germany, Belgium, Austria, Spain, Japan, Singapore, Netherlands, and the United Kingdom. Twitch Prime is included with Prime Video in over 200 other countries and territories. If you are already an Amazon Prime member, you get Twitch Prime at no additional cost by connecting your Amazon account to your Twitch account at <x:link>http://www.twitchprime.com</x:link>.", {
                        "x:link": function(e) {
                            return r.createElement(s.O, {
                                key: e,
                                to: "http://www.twitchprime.com"
                            }, e)
                        }
                    }, "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("If you are not already an Amazon Prime member, you may start your free trial (if available) above. Follow all of the steps and the content that is currently available will be sent directly to your game account.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("When will I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "when"), this.renderAnswer(Object(o.d)("If you've followed all of the steps in the claim process for this offer, your content will be waiting for you in your locker the next time you log in to Fortnite!", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I change which Epic account my Fortnite content is delivered to?", "PrimeFAQComponent"), "changeaccount"), this.renderAnswerWithLink(Object(o.d)("If you claimed the first Fortnite Twitch Prime Pack and would like to use a different Epic account for this offer, you may unlink your previous Epic account from Twitch and link a new one to receive content on that account after completing the claim process above. You can manage your connected accounts at <x:link>https://www.epicgames.com/account/connected</x:link>.", {
                        "x:link": function(e) {
                            return r.createElement(s.O, {
                                key: e,
                                to: "https://www.epicgames.com/account/connected"
                            }, e)
                        }
                    }, "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I received an error that my Twitch or Amazon account has already claimed this content. What do I do?", "PrimeFAQComponent"), "alreadyclaimed"), this.renderAnswer(Object(o.d)("This happens when a different Twitch account was linked to your Amazon account (or vice versa) and claimed the current Twitch Prime Pack. Please check that the same Twitch account is linked to the Amazon account that was originally used to claim this Twitch Prime Pack.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I play Fortnite on my PS4/Xbox One/PC primarily, but also play on mobile. Will I be able to access the Twitch Prime content everywhere that I play?", "PrimeFAQComponent"), "mobile"), this.renderAnswer(Object(o.d)("As long as you use the same Epic account to play on each platform, you will be able to access your Twitch Prime content across PC/console and mobile. Content is not shared between Xbox One and PS4, however.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I link multiple Twitch Prime accounts to my Epic account and get additional content?", "PrimeFAQComponent"), "multiple"), this.renderAnswer(Object(o.d)("No. Each offer can only be applied once to a single Epic account.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How long do I have to claim Twitch Prime Pack #2?", "PrimeFAQComponent"), "duration"), this.renderAnswer(Object(o.d)("You'll have until July 11, 2018 at 9 AM PST to claim the Twitch Prime Pack #2.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I still get previous Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "pack1"), this.renderAnswer(Object(o.d)("You will only receive content that is currently available. However, if you have successfully claimed the first Twitch Prime pack but not completed the account linking flow prior to May 9, 2018 at 9 AM PST, you will receive that content after completing the current offer claim flow above.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Do I continue to receive content if my free trial expires? What happens to my content if I no longer have a Prime membership or my free trial expires?", "PrimeFAQComponent"), "freetrial"), this.renderAnswer(Object(o.d)("You need to have an active Twitch Prime membership to receive content that is currently available. Once you claim your Fortnite content, all content that is delivered to your game is yours to keep, subject to any Epic Games rules or policies that apply to the content. However, you will not receive future content without an active Twitch Prime membership.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Where can I get Fortnite?", "PrimeFAQComponent"), "fortnite"), this.renderAnswerWithLink(Object(o.d)("Fortnite: Battle Royale is free! Visit <x:link>https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale</x:link> to find out how to start playing on PC, Xbox One, PS4, and iOS.", {
                        "x:link": function(e) {
                            return r.createElement(s.O, {
                                key: e,
                                to: "https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale"
                            }, e)
                        }
                    }, "PrimeFAQComponent")), r.createElement(s._8, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(s.v, {
                        linkTo: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#HelpContact",
                        fullWidth: !0
                    }, Object(o.d)("Need help? Contact Us", "PrimeFAQComponent"))))))))
                }, t.prototype.renderQuestion = function(e, t) {
                    return r.createElement("div", {
                        id: t,
                        ref: t
                    }, r.createElement(s._8, {
                        margin: {
                            top: 2
                        }
                    }, r.createElement(s.Q, {
                        type: s._49.H4,
                        bold: !0
                    }, e)))
                }, t.prototype.renderAnswer = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return 1 === e.length ? r.createElement(s._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(s.Q, null, e[0])) : r.createElement(s._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(s._58, null, r.createElement("ul", null, e.map(function(e) {
                        return r.createElement("li", {
                            key: e
                        }, r.createElement(s.Q, null, e))
                    }))))
                }, t.prototype.renderAnswerWithLink = function(e) {
                    return r.createElement(s._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(s.Q, null, e))
                }, t
            }(r.Component));
        n.d(t, "a", function() {
            return l
        })
    },
    Kxgf: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = this;
            return Object(r.a)(s, {
                props: function(t) {
                    return {
                        unblockUserMutation: function(n, r) {
                            return i.__awaiter(e, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
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
                                                        id: Object(o.a)(r),
                                                        fragment: a
                                                    });
                                                    t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                        return null !== e && e.id !== n
                                                    }), e.writeFragment({
                                                        id: Object(o.a)(r),
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
        var i = n("TToO"),
            r = n("7vx8"),
            a = n("nmYW"),
            o = (n.n(a), n("yADj")),
            s = n("KJtg");
        n.n(s)
    },
    L3z0: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.LoadStart = "loadstart", e.Error = "error", e.LoadedMetadata = "loadedmetadata", e.CanPlay = "canplay", e.Playing = "playing", e.Waiting = "waiting", e.Seeking = "seeking", e.Seeked = "seeked", e.Ended = "ended", e.DurationChange = "durationchange", e.TimeUpdate = "timeupdate", e.Play = "play", e.Pause = "pause", e.VolumeChange = "volumechange", e.RateChange = "ratechange"
            }(i || (i = {}))
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
        var i = n("TToO"),
            r = this,
            a = function() {
                return i.__awaiter(r, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(130).then(n.bind(null, "tk3B"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            o = function() {
                return i.__awaiter(r, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(129).then(n.bind(null, "e/M0"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            s = function() {
                return i.__awaiter(r, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(128).then(n.bind(null, "Dan5"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            l = function() {
                return i.__awaiter(r, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(127).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            c = function() {
                return i.__awaiter(r, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(126).then(n.bind(null, "+kKy"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            u = function() {
                return i.__awaiter(r, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(125).then(n.bind(null, "2NJ8"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            }
    },
    LjAQ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("HW6M"),
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
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
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
                }, t
            }(a.Component),
            h = Object(o.d)(Object(l.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            }), Object(c.d)("ReportReasonSelect"))(m),
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
                return i.__extends(t, e), t.prototype.render = function() {
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
                    var t = r({
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
        var i = n("TToO"),
            r = n("6gPI"),
            a = (n.n(r), n("+UWA")),
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
                    this.client = r(e.appId, e.apiKey), this.stats = a.Stats.getInstance(e.config.buildType === o.a.Production ? "production" : "development", "twilight.features.algolia"), this.logger = e.logger.withCategory("search-client"), this.getCountryCode(e.apolloClient)
                }
                return e.prototype.queryTopResults = function(e, t) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var n, r, a, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return r = [], (n = []).push(this.getTopResult(u.games, e)), n.push(this.getTopResult(u.videos, e)), n.push(this.getTopResult(u.users, e)), n.push(this.getTopResult(u.channels, e)), n.push(this.getTopResult(u.communities, e)), r.push(this.getTotalResult(u.games, e)), r.push(this.getTotalResult(u.videos, e)), r.push(this.getTotalResult(u.users, e)), r.push(this.getTotalResult(u.channels, e)), [4, this.query(n.concat(r))];
                                case 1:
                                    return (a = i.sent()) ? (o = a.results, [2, {
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
                }, e.prototype.queryForType = function(e, t, n, r) {
                    var a = void 0 === r ? {} : r,
                        o = a.page,
                        l = void 0 === o ? 0 : o,
                        c = a.hitsPerPage,
                        d = void 0 === c ? 50 : c,
                        p = a.facetFilters,
                        m = void 0 === p ? "" : p,
                        h = a.numericFilters;
                    return i.__awaiter(this, void 0, void 0, function() {
                        var r, a, o, c, p, g, f, b = this;
                        return i.__generator(this, function(v) {
                            switch (v.label) {
                                case 0:
                                    switch (r = {
                                        id: n,
                                        currentPage: l
                                    }, a = function(e) {
                                        return i.__awaiter(b, void 0, void 0, function() {
                                            var n, a;
                                            return i.__generator(this, function(i) {
                                                switch (i.label) {
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
                                                        return (a = i.sent()) ? (r.exhaustedHits = !a.results[0].nbHits || a.results[0].hits.length < d, [2, {
                                                            totalHits: a.results[0].nbHits,
                                                            hits: a.results[0].hits
                                                        }]) : (r.exhaustedHits = !0, [2, {
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
                                    return o = r, [4, a(u.games)];
                                case 2:
                                    return o.games = v.sent(), [3, 12];
                                case 3:
                                    return c = r, [4, a(u.users)];
                                case 4:
                                    return c.users = v.sent(), [3, 12];
                                case 5:
                                    return p = r, [4, a(u.channels)];
                                case 6:
                                    return p.channels = v.sent(), [3, 12];
                                case 7:
                                    return g = r, [4, a(u.videos)];
                                case 8:
                                    return g.videos = v.sent(), [3, 12];
                                case 9:
                                    return f = r, [4, a(u.communities)];
                                case 10:
                                    return f.communities = v.sent(), [3, 12];
                                case 11:
                                    return [2, null];
                                case 12:
                                    return [2, r]
                            }
                        })
                    })
                }, e.prototype.queryVideos = function(e, t, n) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var r, a, o, c;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    switch (n.sort) {
                                        case l.b.Newest:
                                            r = s.a.VideosNewest;
                                            break;
                                        case l.b.Popular:
                                        default:
                                            r = s.a.Videos
                                    }
                                    switch (a = [], n.length) {
                                        case l.a.Short:
                                            a.push("length<=900");
                                            break;
                                        case l.a.Long:
                                            a.push("length>900")
                                    }
                                    switch (o = {
                                        indexName: r,
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
                                    return (c = i.sent()) ? [2, {
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
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    n = Date.now(), a = !1, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, this.client.search(e)];
                                case 2:
                                    return t = i.sent(), [3, 4];
                                case 3:
                                    return i.sent(), a = !0, t = null, [3, 4];
                                case 4:
                                    r = Date.now();
                                    try {
                                        this.countryCode && (a ? (this.stats.logCounter("error." + this.countryCode, 1), this.stats.logTimer("error_duration." + this.countryCode, r - n)) : (this.stats.logCounter("success." + this.countryCode, 1), this.stats.logTimer("success_duration." + this.countryCode, r - n)))
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
            return i
        }), t.b = function(e, t, n) {
            void 0 === n && (n = !0);
            return function(i) {
                i(Object(a.A)(e)), n && Object(r.d)(e), t && Object(o.b)(e, t)
            }
        };
        var i, r = n("VAT8"),
            a = n("7enT"),
            o = n("xrVp");
        ! function(e) {
            e[e.UserMenu = 1] = "UserMenu", e[e.TypedCommand = 2] = "TypedCommand"
        }(i || (i = {}))
    },
    P3dd: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("CSlQ"),
            s = n("Odds"),
            l = (n("JVP6"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.partnerSocialLink && this.props.partnerSocialText;
                    return r.createElement(s._8, {
                        className: "prime-footer",
                        position: s._15.Relative
                    }, r.createElement(s._35, {
                        position: s._15.Absolute,
                        justifyContent: s._7.Center,
                        alignItems: s.c.Center,
                        className: "twitter-container"
                    }, r.createElement(s._24, {
                        asset: s._25.Twitter,
                        width: 71,
                        height: 71,
                        type: s._26.Prime
                    })), r.createElement(s._35, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "social-twitch-prime",
                        padding: 4
                    }, r.createElement(s._8, {
                        className: "prime-footer__twitter-links",
                        display: s.R.Flex,
                        justifyContent: e ? s._7.Between : s._7.Center
                    }, r.createElement(s.O, {
                        to: "https://twitter.com/TwitchPrime",
                        targetBlank: !0
                    }, r.createElement(s.Q, {
                        bold: !0,
                        fontSize: s.V.Size5
                    }, Object(a.d)("Follow us @TwitchPrime", "PrimeSubsite"))), e && r.createElement(s.O, {
                        to: this.props.partnerSocialLink,
                        targetBlank: !0
                    }, r.createElement(s.Q, {
                        bold: !0,
                        fontSize: s.V.Size5
                    }, this.props.partnerSocialText)))), r.createElement(s._35, {
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
                    }, r.createElement(s._35, {
                        padding: 2
                    }, r.createElement(s.O, {
                        to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                        targetBlank: !0
                    }, Object(a.d)("Terms", "PrimeSubsiteFooter"))), r.createElement(s._35, {
                        padding: 2
                    }, r.createElement(s.O, {
                        to: "https://www.amazon.com/twitchprivacy",
                        targetBlank: !0
                    }, Object(a.d)("Privacy Policy", "PrimeSubsiteFooter"))), r.createElement(s._35, {
                        padding: 2
                    }, r.createElement(s.O, {
                        to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                        targetBlank: !0
                    }, Object(a.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                }, t
            }(r.Component)),
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
        var i, r, a;
        n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }),
            function(e) {
                e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
            }(i || (i = {})),
            function(e) {
                e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
            }(r || (r = {})),
            function(e) {
                e[e.Popular = 0] = "Popular", e[e.Newest = 1] = "Newest"
            }(a || (a = {}))
    },
    PLRK: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
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
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", null, Object(a.d)("View All", "DirectoryInternationalSection"))
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
        var i = n("TToO"),
            r = n("OAwv"),
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
                    return i.__awaiter(e, void 0, void 0, function() {
                        var e, n, s, u, d, p;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = a.o.logger.withCategory("leagueoflegends-api"), t(Object(c.e)(!0)), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), n = a.o.intl.getLanguageCode(), s = l(n), u = o.a.getAPIURL("/api/lol/champions?" + r.stringify({
                                        locale: s,
                                        on_site: 1
                                    })).toString(), [4, o.a.get(u)];
                                case 2:
                                    return (d = i.sent()).body ? t(Object(c.f)(d.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.d)(!0))), [3, 4];
                                case 3:
                                    throw p = i.sent(), t(Object(c.d)(!0)), e.error(p, "Failed to load LoL champion data"), p;
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
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2");
        ! function(e) {
            e.On = "on", e.Off = "off", e.StaffOnly = "staff"
        }(i || (i = {}));
        var s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = o.b.get(this.props.name, i.Off);
                    return e === i.On || e === i.StaffOnly && this.props.isStaff ? this.props.children : null
                }, t
            }(a.Component),
            l = s;
        n.d(t, "a", function() {
            return i
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "b", function() {
            return l
        })
    },
    Ql3t: function(e, t) {},
    RweG: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2");

        function o(e) {
            return function(t) {
                return function(n) {
                    function o(t) {
                        var i = n.call(this, t) || this;
                        i.unsubscribers = {};
                        var r = {};
                        return e.map(function(e) {
                            e.skip && e.skip(t) || (r[i.getTopic(e.topic, t)] = {
                                isSubscribing: !0
                            })
                        }), i.state = {
                            status: r,
                            messages: {}
                        }, i
                    }
                    return i.__extends(o, n), o.prototype.componentDidMount = function() {
                        var t = this;
                        e.forEach(function(e) {
                            if (!e.skip || !e.skip(t.props)) {
                                var n = t.getTopic(e.topic, t.props);
                                t.unsubscribers[n] = t.subscribe(e, n)
                            }
                        })
                    }, o.prototype.componentWillReceiveProps = function(t) {
                        var n = this,
                            r = {},
                            a = {};
                        e.forEach(function(e) {
                            if (!e.skip || !e.skip(t)) {
                                var i = n.getTopic(e.topic, t);
                                r[i] || (r[i] = {
                                    isSubscribing: !0
                                }), n.unsubscribers[i] ? a[i] = n.unsubscribers[i] : a[i] = n.subscribe(e, i)
                            }
                        }), Object.keys(this.unsubscribers).forEach(function(e) {
                            a[e] || n.unsubscribers[e]()
                        }), this.unsubscribers = a, this.setState(function(e) {
                            return {
                                status: i.__assign({}, e.status, r)
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
                        return r.createElement(t, i.__assign({}, this.props, e))
                    }, o.prototype.getTopic = function(e, t) {
                        return "string" == typeof e ? e : e(t)
                    }, o.prototype.subscribe = function(e, t) {
                        var n = this;
                        return a.k.subscribe({
                            topic: t,
                            success: function() {
                                n.setState(function(e) {
                                    return {
                                        status: i.__assign({}, e.status, (n = {}, n[t] = {
                                            isSubscribing: !1
                                        }, n))
                                    };
                                    var n
                                })
                            },
                            failure: function(e) {
                                n.setState(function(n) {
                                    return {
                                        status: i.__assign({}, n.status, (r = {}, r[t] = {
                                            error: e,
                                            isSubscribing: !1
                                        }, r))
                                    };
                                    var r
                                })
                            },
                            onMessage: function(t) {
                                var r = e.mapMessageTypesToProps[t.type || ""] || e.mapMessageTypesToProps["*"];
                                r && (e.skipMessage && e.skipMessage(t, n.props) || n.setState(function(e) {
                                    return {
                                        messages: i.__assign({}, e.messages, (n = {}, n[r] = t, n))
                                    };
                                    var n
                                }))
                            }
                        })
                    }, o
                }(r.Component)
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
                i = e - 3600 * t - 60 * n;
            t < 10 && (t = "0" + t);
            n < 10 && (n = "0" + n);
            i < 10 && (i = "0" + i);
            return t + "h" + n + "m" + i + "s"
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
        var i = n("GiK3"),
            r = (n.n(i), /^[\x00-\x7F]*$/),
            a = function(e, t, n) {
                return void 0 === n && (n = !1), t && e && !o(t) ? n ? t + " (" + e + ")" : i.createElement("span", null, t, " ", i.createElement("span", {
                    className: "intl-login"
                }, "(" + e + ")")) : t || (e || "")
            };

        function o(e) {
            return r.test(e)
        }
    },
    TeXj: function(e, t, n) {
        "use strict";
        t.c = function(e, t, n) {
            void 0 === n && (n = !1);
            return u(a, e, t, n)
        }, t.a = c, t.b = function(e, t, n) {
            void 0 === n && (n = !1);
            var a = i.b.get(s, r.a.Off),
                o = t && t.roles && t.roles.isStaff || !1;
            return c(e, t, n) && (a === r.a.On || a === r.a.StaffOnly && o)
        }, t.d = function(e, t) {
            return u(l, e, t)
        };
        var i = n("6sO2"),
            r = n("QRuM"),
            a = "esport_channel_page_whitelist",
            o = "esport_insider_pass_whitelist",
            s = "esport_insider_pass_gifting_launch",
            l = "esports_room_cheering_whitelist";

        function c(e, t, n) {
            return void 0 === n && (n = !1), u(o, e, t, n)
        }

        function u(e, t, n, r) {
            void 0 === r && (r = !1);
            var a = i.b.get(e, []),
                o = n && n.roles && n.roles.isStaff || r;
            return a.includes(t) || a.includes(t + "-staff") && o
        }
    },
    Tg4T: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            s = n("Odds");
        ! function(e) {
            e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
        }(i || (i = {}));
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
                    "data-test-selector": i.LockSelector
                }, a.createElement(s._2, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(s.Q, {
                    color: s.K.Overlay,
                    fontSize: s.V.Size5,
                    "data-test-selector": i.UpsellSelector
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
                    asset: r,
                    height: 20,
                    width: 20
                }))))
            }, t
        }(a.PureComponent);
        n.d(t, !1, function() {
            return i
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
        var i = n("TToO"),
            r = n("Bir6"),
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
                        r = s.reduce(function(t, n) {
                            var i = t.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x");
                            return "3.0" !== n && (i = i.concat(", ")), i
                        }, "");
                    return i.__assign({
                        displayName: n,
                        srcSet: r
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
                for (var t = [], n = [], i = 0, r = e; i < r.length; i++) {
                    var a = r[i];
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
                    i = [],
                    o = [],
                    s = [],
                    l = new RegExp("^" + Object(r.a)(t), "i");
                return e.forEach(function(e) {
                    n[e.token] ? s.push(e) : e.token.match(l) ? i.push(e) : o.push(e)
                }), i.sort(function(e, t) {
                    return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                }), o.sort(function(e, t) {
                    return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                }), s.sort(function(e, t) {
                    return n[t.token].count - n[e.token].count
                }), s.concat(i).concat(o)
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
            return r
        });
        var i = n("6sO2"),
            r = function(e) {
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
        var i = n("GiK3"),
            r = (n.n(i), n("Odds")),
            a = function() {
                return i.createElement(r.C, null, i.createElement(r.k, {
                    ratio: r.l.Aspect16x9
                }, i.createElement(r._14, null)), i.createElement(r.D, null, i.createElement(r._8, {
                    display: r.R.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(r._8, {
                    display: r.R.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(r._14, {
                    width: 40,
                    height: 56
                })), i.createElement(r._8, {
                    display: r.R.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(r.Q, null, i.createElement(r._14, {
                    width: 150
                })), i.createElement(r.Q, {
                    fontSize: r.V.Size7
                }, i.createElement(r._14, {
                    width: 100
                }))))))
            }
    },
    "YEG/": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    !1 !== this.props.targetBlank && this.setPopupExperiment()
                }, t.prototype.render = function() {
                    if (this.props.isSubbedToTier) {
                        var e = Object(a.d)("Subscribed", "SubTierButton");
                        return r.createElement(c.v, {
                            ariaLabel: e,
                            "data-test-selector": u,
                            disabled: !0,
                            icon: c._25.Star
                        }, e)
                    }
                    var t = this.props.isEsportChannel ? Object(a.d)("Get the All-Access Pass", "SubTierButton") : Object(a.d)("Subscribe Now", "SubTierButton");
                    return r.createElement(c.v, i.__assign({
                        ariaLabel: t + " " + this.props.tierPrice,
                        "data-test-selector": u,
                        linkTo: this.state.hasPopupExperiment ? void 0 : this.props.url,
                        onClick: this.handleClick,
                        purchase: this.props.tierPrice
                    }, Object(c._63)(this.props), {
                        targetBlank: void 0 === this.props.targetBlank || this.props.targetBlank
                    }), t)
                }, t = i.__decorate([Object(s.d)("SubTierButton", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component);
        n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return d
        })
    },
    YH6m: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
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
            g = n("JJaH"),
            f = n("Odds"),
            b = (n("6O9f"), "gift-subscription-button"),
            v = "subscribe-button";
        ! function(e) {
            e[e.Prime = 0] = "Prime", e[e.Tier1 = 1] = "Tier1", e[e.Tier2 = 2] = "Tier2", e[e.Tier3 = 3] = "Tier3"
        }(i || (i = {}));
        var y = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.toggleActiveTab = function(e) {
                    if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-tier")) {
                        case "subscribe-button-modal-tab-" + i.Prime:
                            n.setState({
                                activeTab: i.Prime,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[0])
                            }), n.props.onSelectTierTab(i.Prime);
                            break;
                        case "subscribe-button-modal-tab-" + i.Tier1:
                            n.setState({
                                activeTab: i.Tier1,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[0])
                            }), n.props.onSelectTierTab(i.Tier1);
                            break;
                        case "subscribe-button-modal-tab-" + i.Tier2:
                            n.setState({
                                activeTab: i.Tier2,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[1])
                            }), n.props.onSelectTierTab(i.Tier2);
                            break;
                        case "subscribe-button-modal-tab-" + i.Tier3:
                            n.setState({
                                activeTab: i.Tier3,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[2])
                            }), n.props.onSelectTierTab(i.Tier3);
                            break;
                        default:
                            n.setState({
                                activeTab: i.Prime,
                                currentPurchasePrice: n.getPrice(n.props.subscriptionProducts[0])
                            }), n.props.onSelectTierTab(i.Prime)
                    }
                }, n.getTabTitle = function() {
                    switch (n.state.activeTab) {
                        case i.Prime:
                            return Object(o.d)("Free Channel Sub with Twitch Prime", "SubTierTabs");
                        case i.Tier1:
                            return n.props.subscriptionProducts[0].displayName;
                        case i.Tier2:
                            return n.props.subscriptionProducts[1].displayName;
                        case i.Tier3:
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
                    return n.state.subbedTier === n.state.activeTab && n.state.activeTab === i.Prime ? a.createElement(g.a, {
                        "data-a-target": "subscribe-with-prime-button",
                        reportSubMenuAction: n.props.reportSubMenuAction,
                        channelLogin: n.props.subLogin
                    }) : a.createElement(p.a, {
                        isSubbedToTier: n.state.subbedTier === n.state.activeTab,
                        tierPrice: n.state.currentPurchasePrice,
                        reportSubAction: n.props.reportSubMenuAction,
                        url: e.url,
                        "data-a-target": "subscribe-now-button",
                        "data-test-selector": v
                    })
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
                        activeTab: i.Prime,
                        subbedTier: i.Prime
                    }), e.onSelectTierTab(i.Prime)) : e.subbedTier === s.a.Tier1 ? (n.setState({
                        activeTab: i.Tier1,
                        subbedTier: i.Tier1
                    }), e.onSelectTierTab(i.Tier1)) : e.subbedTier === s.a.Tier2 ? (n.setState({
                        activeTab: i.Tier2,
                        subbedTier: i.Tier2
                    }), e.onSelectTierTab(i.Tier2)) : e.subbedTier === s.a.Tier3 ? (n.setState({
                        activeTab: i.Tier3,
                        subbedTier: i.Tier3
                    }), e.onSelectTierTab(i.Tier3)) : e.isGift ? e.onSelectTierTab(n.state.activeTab) : e.onSelectTierTab(i.Prime)
                }, n.getExtraEmotes = function(e) {
                    return (e === i.Tier2 ? Object(l.b)(n.props.subscriptionProducts[1].emotes) : Object(l.b)(n.props.subscriptionProducts[2].emotes.concat(n.props.subscriptionProducts[1].emotes))).map(function(e) {
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
            return r.__extends(t, e), t.prototype.componentWillMount = function() {
                this.mapSubbedTierToTabs(this.props), this.getTierExperimentAssignment()
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
                    r = null,
                    l = this.state.tierNameEnabled ? Object(o.d)("Tier 3", "SubTierTabs") : this.props.subscriptionProducts[2].price,
                    c = a.createElement(f._8, {
                        display: f.R.InlineFlex
                    }, this.state.subbedTier === i.Tier3 && e, a.createElement(f._36, {
                        active: this.state.activeTab === i.Tier3,
                        "data-tier": k(i.Tier3),
                        "data-a-target": k(i.Tier3),
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
                        active: this.state.activeTab === i.Prime,
                        "data-tier": k(i.Prime),
                        "data-a-target": k(i.Prime),
                        onClick: this.toggleActiveTab
                    }, Object(o.d)("Prime", "SubTierTabs")))), !this.props.subbedTier || this.props.subbedTier === s.a.Tier1) {
                    var u = this.state.tierNameEnabled ? Object(o.d)("Tier 1", "SubTierTabs") : this.props.subscriptionProducts[0].price;
                    n = a.createElement(f._8, {
                        display: f.R.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === i.Tier1 && e, a.createElement(f._36, {
                        active: this.state.activeTab === i.Tier1,
                        "data-tier": k(i.Tier1),
                        "data-a-target": k(i.Tier1),
                        onClick: this.toggleActiveTab
                    }, u))
                }
                if (!this.props.subbedTier || this.props.subbedTier === s.a.Prime || this.props.subbedTier === s.a.Tier1 || this.props.subbedTier === s.a.Tier2) {
                    var p = this.state.tierNameEnabled ? Object(o.d)("Tier 2", "SubTierTabs") : this.props.subscriptionProducts[1].price;
                    r = a.createElement(f._8, {
                        display: f.R.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === i.Tier2 && e, a.createElement(f._36, {
                        active: this.state.activeTab === i.Tier2,
                        "data-tier": k(i.Tier2),
                        "data-a-target": k(i.Tier2),
                        onClick: this.toggleActiveTab
                    }, p))
                }
                var m = this.props.subscriptionProducts[1].emotes.length,
                    h = m + this.props.subscriptionProducts[2].emotes.length,
                    g = null;
                (m > 0 && this.state.activeTab === i.Tier2 || h > 0 && this.state.activeTab === i.Tier3) && (g = a.createElement(f._8, {
                    display: f.R.InlineFlex,
                    alignItems: f.c.Center
                }, this.getExtraEmotes(this.state.activeTab), a.createElement(f.Q, {
                    bold: !0
                }, Object(o.d)("{extraEmoteCount, plural, one {Plus {extraEmoteCount, number} extra channel emote} other {Plus {extraEmoteCount, number} extra channel emotes}}", {
                    extraEmoteCount: this.state.activeTab === i.Tier2 ? m : h
                }, "SubTierTabs"))));
                var b = this.props.subscriptionProducts[this.state.activeTab - 1];
                return a.createElement(f._8, {
                    className: "channel-header__subscription-balloon-options"
                }, a.createElement(f._8, {
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(f._37, null, t, n, r, c)), a.createElement(f._8, null, a.createElement(f._8, {
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
                    activeTab: i.Tier1,
                    currentPurchasePrice: e,
                    subbedTier: null,
                    tierNameEnabled: !1
                }
            }, t.prototype.getPrice = function(e) {
                return Object(m.d)(this.props.subscriptionProducts) || Object(m.c)(this.props.subscriptionProducts) ? Object(m.a)(e, this.props.isGift) : e.price
            }, t
        }(a.Component);

        function k(e) {
            return "subscribe-button-modal-tab-" + e
        }
        var _ = Object(c.d)("SubTierTabs", {
            autoReportInteractive: !0
        })(y);
        n.d(t, !1, function() {
            return b
        }), n.d(t, !1, function() {
            return v
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, !1, function() {
            return y
        }), n.d(t, !1, function() {
            return k
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
        var i = n("RH2O"),
            r = n("Aj/L"),
            a = n("TToO"),
            o = n("GiK3"),
            s = n("6sO2"),
            l = n("Odds"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.getPrimePromotionTextNode(),
                        t = this.props.isOverlay ? l.K.Overlay : l.K.Base;
                    return e ? o.createElement(l._8, null, o.createElement(l._8, {
                        display: l.R.Flex
                    }, o.createElement(l._8, {
                        margin: {
                            right: .5
                        }
                    }, o.createElement(l._24, {
                        asset: l._25.Crown,
                        type: l._26.Prime
                    })), o.createElement(l.Q, {
                        color: t
                    }, e))) : null
                }, t.prototype.getPrimePromotionTextNode = function() {
                    var e = this.props.isOverlay ? l.P.Overlay : l.P.Default;
                    if (this.props.userHasPrime) return Object(s.d)("Get 500 Bits as a bonus reward on purchase, only with Twitch Prime.", "EsportsCampaignTabs");
                    return Object(s.d)("Get 500 Bits as a bonus reward on purchase, only with Twitch Prime <x:link>Sign up now</x:link>", {
                        "x:link": function(t) {
                            return o.createElement(l.Q, {
                                noWrap: !0,
                                type: l._49.Span
                            }, o.createElement(l.O, {
                                key: "insider-prime-link",
                                to: s.a.tryPrimeURI,
                                type: e,
                                targetBlank: !0
                            }, t))
                        }
                    }, "EsportsCampaignTabs")
                }, t
            }(o.PureComponent);
        var u = Object(i.b)(function(e) {
            return {
                user: Object(r.c)(e)
            }
        })(c);
        n.d(t, "a", function() {
            return u
        })
    },
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return _
        });
        var i = n("TToO"),
            r = n("HW6M"),
            a = (n.n(r), n("OAwv")),
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
            k = function(e) {
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
                        var r = {
                            productName: t.props.video.restriction && t.props.video.restriction.productName,
                            title: t.props.video.restriction && t.props.video.restriction.productTitle,
                            canViewRestricted: t.props.video.self && !t.props.video.self.isRestricted || !1
                        };
                        return o.createElement("div", i.__assign({
                            onClick: t.onClickHandler,
                            onMouseEnter: t.onMouseEnterHandler,
                            onMouseLeave: t.onMouseLeaveHandler
                        }, Object(f._63)(t.props)), o.createElement(f.C, null, o.createElement(f._8, {
                            fullWidth: !0
                        }, o.createElement(f.k, {
                            overflow: !0
                        }, o.createElement("div", null, o.createElement(g.a, {
                            videoID: t.props.video.id,
                            restriction: r
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    return o.createElement(c.a, i.__assign({}, e))
                }, t.prototype.generateSearchString = function() {
                    var e = {};
                    this.props.collectionID && (e.collection = this.props.collectionID);
                    var t = a.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = r("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        }),
                        n = r("video-preview-card__preview-image", {
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
                        n = r("video-preview-card__image-wrapper", {
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
            _ = Object(m.d)("VideoPreviewCard")(k)
    },
    aMxy: function(e, t, n) {
        "use strict";
        var i = n("arZ9");
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
        var r = n("GHQc");
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
        var i = n("TToO"),
            r = n("HW6M"),
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
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = r({
                            "twitch-prime-fortnite-header": !0,
                            "twitch-prime-fortnite-header--centered": this.props.alwaysCentered
                        }),
                        t = r({
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
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("V9YC"),
            o = n("iJpA");
        r.o.store.registerReducer("userPreferences", function(e, t) {
            switch (void 0 === e && (e = {
                languagePreferences: Object(o.b)()
            }), t.type) {
                case a.a:
                    return i.__assign({}, e, {
                        languagePreferences: t.languagePreferences
                    });
                default:
                    return e
            }
        })
    },
    daN3: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
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
                    var i = a.o.experiments.getAssignment("TWILIGHT_SUB_CHECKOUT_POPUP");
                    return n.state = {
                        hasPopupExperiment: "yes" === i
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = !!(this.props.data && this.props.data.user && this.props.data.user.self) && this.props.data.user.self.canGift;
                    this.props.checkoutURL ? this.props.isEsportChannel ? (e = Object(a.d)("Buy All-Access Pass Gift", "GiftSubscribeButton"), t = "esports-checkout-gift-subscribe-button") : (e = Object(a.d)("Buy Gift Subscription", "GiftSubscribeButton"), t = "checkout-gift-subscribe-button") : this.props.isEsportChannel ? (e = Object(a.d)("Gift All-Access Pass", "GiftSubscribeButton"), t = "esports-gift-subscribe-button") : (e = Object(a.d)("Gift Subscription", "GiftSubscribeButton"), t = "gift-subscribe-button");
                    var i = this.props.checkoutURL && this.props.giftRecipient ? Object(s.a)(this.props.checkoutURL, {
                        recipient: this.props.giftRecipient
                    }) : "";
                    return r.createElement(c.v, {
                        targetBlank: !0,
                        disabled: !n,
                        onClick: this.handleClick,
                        linkTo: this.state.hasPopupExperiment ? void 0 : i,
                        "data-test-selector": t,
                        purchase: this.props.purchase
                    }, this.props.buttonMessage || e)
                }, t = i.__decorate([Object(l.d)("GiftSubscribeButton", {
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
            }(r.Component);
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
            return i
        }), n.d(t, "a", function() {
            return r
        });
        n("6sO2");
        var i = "twitch_prime_fortnite_offer_id",
            r = "c0b1816d-300b-d234-828e-59e76119bffe"
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
        var i = n("TToO"),
            r = n("GiK3"),
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
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = !!this.props.hostedChannelDisplayName;
                    return r.createElement(m._35, {
                        className: "video-player-hosting-ui__container"
                    }, e && this.renderHeader(), r.createElement("span", {
                        key: "video-player"
                    }, this.props.children), r.createElement(m._8, {
                        display: e ? m.R.Block : m.R.Hide,
                        position: m._15.Relative,
                        zIndex: m._62.Above
                    }, e && this.renderFooter()))
                }, t.prototype.renderHeader = function() {
                    return r.createElement(m.e, {
                        type: m.j.SlideInBottom,
                        delay: m.f.Medium,
                        duration: m.g.Medium,
                        enabled: !0
                    }, r.createElement(a.a, {
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
                    }, r.createElement(m._35, {
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
                    }, r.createElement(m._8, {
                        className: "video-player-hosting-ui__avatar-container"
                    }, r.createElement(m.m, {
                        src: this.props.hostedChannelProfileImageURL || "",
                        size: 30,
                        alt: Object(o.d)("Hosted Channel {hostedChannelDisplayName}'s Avatar", {
                            hostedChannelDisplayName: this.props.hostedChannelDisplayName || ""
                        }, "VideoPlayerHostingUI")
                    })), r.createElement(m._35, {
                        margin: {
                            left: 1
                        },
                        fontSize: m.V.Size5
                    }, Object(o.d)("Hosting", "VideoPlayerHostingUI"), " ", r.createElement(m.Q, {
                        type: m._49.Span,
                        className: "video-player-hosting-ui__channel-name",
                        color: m.K.OverlayAlt,
                        "data-a-target": "hosting-ui-channel-name"
                    }, this.props.hostedChannelDisplayName)))))
                }, t.prototype.renderFooter = function() {
                    return r.createElement(m.e, {
                        type: m.j.SlideInTop,
                        enabled: !0,
                        delay: m.f.Medium,
                        duration: m.g.Medium
                    }, r.createElement(m._35, {
                        key: "hosting-ui-footer",
                        background: m.n.AccentAlt2,
                        className: "video-player-hosting-ui__footer",
                        display: m.R.Block,
                        padding: 1,
                        "data-test-selector": "video-player-hosting-ui__footer",
                        "data-a-target": "hosting-ui-footer"
                    }, r.createElement(m._8, {
                        padding: {
                            y: .5
                        },
                        display: m.R.Flex,
                        justifyContent: m._7.Between
                    }, r.createElement(m._8, {
                        display: m.R.Flex
                    }, r.createElement(m._8, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(s.a, {
                        "data-a-target": "hosting-ui-follow-button",
                        channelName: this.props.hostedChannelLogin || "",
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelLogin: this.props.hostChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        isHostedFollow: !0,
                        balloonDirection: m.r.BottomLeft,
                        followUIType: s.b.IconAndText,
                        unfollowUIType: s.b.IconOnly
                    })), r.createElement(m._8, null, r.createElement(p.a, {
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        "data-a-target": "hosting-ui-subscribe-button"
                    }))), r.createElement(l.a, null, r.createElement(m.w, {
                        ariaLabel: Object(o.d)("More options", "HostingUI"),
                        overlay: !0,
                        icon: m._25.More,
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-more-button"
                    }), r.createElement(m.q, {
                        direction: m.r.TopRight,
                        "data-a-target": "hosting-ui-more-balloon"
                    }, r.createElement(m._8, {
                        padding: {
                            y: 1
                        }
                    }, r.createElement(m._6, {
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-report-button"
                    }, r.createElement(m._8, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, Object(o.d)("Report {hostChannelDisplayName}", {
                        hostChannelDisplayName: this.props.hostChannelDisplayName
                    }, "VideoPlayerHostingUI")))))))))
                }, t
            }(r.Component)),
            g = n("RH2O"),
            f = n("2KeS"),
            b = n("+xm8"),
            v = n("V5M+"),
            y = n("f2i/"),
            k = n("Aj/L"),
            _ = n("oSFp");
        var S = Object(g.b)(function(e) {
                return {
                    isLoggedIn: Object(k.d)(e)
                }
            }, function(e) {
                return Object(f.b)({
                    login: function() {
                        return Object(y.f)(b.a.ReportHoster)
                    },
                    showReportUserModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(v.d)(_.a, t)
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
        var C = n("7enT"),
            O = n("0nzt"),
            E = n("UvtE"),
            N = n("Hjbq"),
            R = n("j0cR"),
            I = n("HW6M"),
            L = n("BwgW"),
            F = n("knr3"),
            D = n("OAwv"),
            x = n("eBiB"),
            j = n("HM6l"),
            U = n("JpYe"),
            M = n("ZVME"),
            A = n("CSlQ"),
            B = n("L3z0"),
            G = n("5MsU"),
            V = n("ijOz"),
            H = n("Tjmd"),
            W = (n("4NZK"), n("Ryxq")),
            z = {
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
                oauth_token: "",
                gdprConsent: !1
            };

        function Q() {
            return !!window.Twitch && !!window.Twitch.Player
        }
        var q = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.lastGDPRConsent = !1, n.logger = o.j.withCategory("video-player"), n.checkPlayerDependencyStatus = function() {
                        Q() ? (n.setState({
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
                            o.o.history.push("/videos/" + n.props.vodID + "?t=" + Object(W.a)(e))
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
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(G.a.Online)
                    }, n.onStreamStatusOffline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(G.a.Offline)
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
                            e.vodId && (t.videoID = Object(x.a)(e.vodId)), e.collectionId && (t.collectionID = e.collectionId), n.props.onNavigationRequest(t)
                        }
                    }, n.onTransitionToRecommendedVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(x.a)(e.vodId)), n.props.onNavigationRequest(t)
                        }
                    }, n.onPersistentPlayerToggled = function() {
                        n.props.togglePersistentPlayer && n.props.togglePersistentPlayer()
                    }, n.updatePlayerTrackingData = function(e) {
                        if (n.state.playerInitialized && n.player) {
                            var t = o.n.getLastPageview(),
                                r = {
                                    host_channel: e.hostChannel,
                                    collapse_right: !e.rightColumnExpanded,
                                    collapse_left: !e.sideNavExpanded
                                };
                            t ? n.logger.debug("Tracking data updated.", {
                                pageviewProperties: t,
                                updates: r
                            }) : n.logger.debug("pageviewProperties not found; only hosting status updated", {
                                pageviewProperties: t,
                                updates: r
                            }), n.player.setTrackingProperties(i.__assign({}, t, r))
                        }
                    }, n.updatePlayerTrackingDataFromProps = function() {
                        n.updatePlayerTrackingData(n.props)
                    }, n.updatePlayerType = function(e) {
                        var t = e || z.player;
                        n.player && n.playerType !== t && (n.player.setPlayerType(t), n.playerType = t)
                    }, n.maybeRecordClip = function() {
                        n.player && n.state.playerInitialized && n.player.recordClip()
                    }, n.playerBuffering = n.registerBufferingEvent(), n.playerCreated = n.registerCreatedEvent(), n.playerLoaded = n.registerLoadedEvent(), n.playerPlayed = n.registerPlayedEvent(), n.state = {
                        canInitializePlayer: Q(),
                        playerInitialized: !1,
                        isFullScreen: !1,
                        playerPaused: !1,
                        playerRefID: Object(j.a)()
                    }, n.playerType = t.playerTypeOverride || z.player, n.lastSetChannel = t.channelLogin, n.lastGDPRConsent = t.gdpr.consentGiven, t.fullscreen.addChangeListener(n.onTwilightFullscreenChange), t.instanceRef && t.instanceRef(n), n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                                    i = e.editing || {},
                                    r = n.startOffset,
                                    a = n.endOffset,
                                    s = n.videoUrl,
                                    l = n.isPostEdit;
                                s !== i.videoUrl && i.slug && this.player.setEditClipStream({
                                    videoUrl: i.videoUrl,
                                    slug: i.slug
                                }), l !== i.isPostEdit && this.player.updateClipsEditing({
                                    isPostEdit: i.isPostEdit
                                }), r === i.startOffset && a === i.endOffset || this.player.updateEditingOffsets([{
                                    startOffset: i.startOffset,
                                    endOffset: i.endOffset
                                }])
                            }
                            this.player && e.clipSlug && this.props.clipSlug !== e.clipSlug && this.player.setClip(e.clipSlug), this.player && e.theatreModeEnabled !== this.player.getTheatre() && this.player.setTheatre(e.theatreModeEnabled), this.player && e.miniModeEnabled !== this.props.miniModeEnabled && this.player.setMiniPlayerMode(!!e.miniModeEnabled), this.player && t.playerPaused !== this.lastPausedProp && (t.playerPaused ? this.player.pause() : t.playerPaused || this.player.play(), this.lastPausedProp = t.playerPaused), this.player && e.gdpr.consentGiven !== this.lastGDPRConsent && (this.player.setGDPRConsent(e.gdpr.consentGiven), this.lastGDPRConsent = e.gdpr.consentGiven);
                            var c = e.channelLogin !== this.lastSetChannel;
                            if (this.player && e.channelLogin && (c || Object(H.a)(this.props, e))) return this.logger.debug("Setting Channel: ", e.channelLogin), this.player.setChannel(e.channelLogin), this.lastSetChannel = e.channelLogin, void o.n.setVideoPlayerTrackingData({
                                vodID: void 0
                            });
                            var u = e.collectionID && this.props.collectionID !== e.collectionID,
                                d = e.vodID && this.props.vodID !== e.vodID;
                            if (u || d) {
                                var p = e.vodID ? Object(U.b)(e.vodID) : "";
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
                    var e = I("video-player", {
                            "video-player--theatre": this.props.theatreModeEnabled,
                            "video-player--theatre-whispers": this.props.theatreModeEnabled && this.props.isWhispersBottomBarVisible && !this.state.isFullScreen,
                            "video-player--logged-in": this.props.isLoggedIn,
                            "video-player--fullscreen": this.state.isFullScreen
                        }),
                        t = I("video-player__container", {
                            "video-player__container--clips": V.a.includes(this.playerType)
                        });
                    return r.createElement("div", {
                        className: I(e),
                        "data-test-selector": "video-player"
                    }, r.createElement("div", {
                        className: t,
                        ref: this.attachRef
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.props.latencyTracking.reportInteractive(), this.unbindHotKeys(), this.historyUnlistener && this.historyUnlistener(), this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), this.maybeDetachFromWindow(), this.state.isFullScreen && this.exitFullscreen(), this.props.fullscreen.removeChangeListener(this.onTwilightFullscreenChange), this.props.onDestroy && this.props.onDestroy(), o.n.eventEmitter.removeListener(c.SpadeEventType.Pageview, this.updatePlayerTrackingDataFromProps), this.player && (this.player.removeEventListener(G.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(G.a.Online, this.onStreamStatusOnline), this.player.removeEventListener(G.a.Offline, this.onStreamStatusOffline), this.player.removeEventListener(B.a.Ended, this.onStreamStatusOffline), this.player.removeEventListener(B.a.Play, this.onPlayerPlay), this.player.removeEventListener(B.a.Playing, this.onPlayerPlaying), this.player.removeEventListener(G.a.TheatreChange, this.onTheatreChange), this.player.removeEventListener(G.a.TransitionToCollectionVOD, this.onTransitionToCollectionVod), this.player.removeEventListener(G.a.FullscreenChange, this.onFullScreenChange), this.player.removeEventListener(G.a.ExternalFullscreenChange, this.onExternalFullScreenChange), this.player.removeEventListener(B.a.Seeked, this.onSeek), this.player.removeEventListener(B.a.TimeUpdate, this.onTimeUpdate), this.player.removeEventListener(G.a.OpenStream, this.onOpenStream), this.player.removeEventListener(B.a.Pause, this.onPause), this.player.removeEventListener(G.a.PersistenPlayerToggle, this.onPersistentPlayerToggled), this.player.removeEventListener(B.a.LoadedMetadata, this.onMetadataLoaded), L.extensionService.unregisterPlayer(), this.player.destroy()), o.n.setVideoPlayerTrackingData({
                        vodID: void 0
                    })
                }, t.prototype.trackMiniPlayerAction = function(e, t) {
                    this.player && this.state.playerInitialized && this.player.trackMiniPlayerAction(e, t)
                }, t.prototype.initializePlayer = function() {
                    var e = i.__assign({}, z, {
                        showtheatre: !this.props.disableTheatreButton,
                        allowfullscreen: !this.props.disableFullscreen,
                        externalfullscreen: this.props.fullscreen.supported(),
                        autoplay: !this.props.paused,
                        gdprConsent: this.props.gdpr.consentGiven
                    });
                    this.props.playerTypeOverride && (e.player = this.props.playerTypeOverride, this.playerType = this.props.playerTypeOverride, this.props.playerTypeOverride === V.c.ClipsEditing && (e.muted = !0)), this.props.channelLogin && (e.channel = this.props.channelLogin, this.lastSetChannel = this.props.channelLogin), this.props.collectionID && (e.collection = this.props.collectionID), this.props.clipSlug && (e.clip = this.props.clipSlug), this.props.vodID && (e.video = Object(U.b)(this.props.vodID), o.n.setVideoPlayerTrackingData({
                        vodID: this.props.vodID
                    })), this.props.showChannelInfoOnHover && (e.showInfo = this.props.showChannelInfoOnHover), void 0 !== this.props.nextVideoOffset && this.props.nextVideoOffset >= 0 && (e.time = Object(W.a)(this.props.nextVideoOffset)), this.lastPausedProp = this.props.paused, e.oauth_token = this.props.authToken || "", this.logger.debug("Initializing", e);
                    var t = new window.Twitch.Player(this.playerRef, e);
                    this.player = t, t.addEventListener(G.a.PlayerReady, this.onPlayerReady), t.addEventListener(G.a.Online, this.onStreamStatusOnline), t.addEventListener(G.a.Offline, this.onStreamStatusOffline), t.addEventListener(B.a.Ended, this.onStreamStatusOffline), t.addEventListener(B.a.Play, this.onPlayerPlay), t.addEventListener(B.a.Playing, this.onPlayerPlaying), t.addEventListener(B.a.Seeked, this.onSeek), t.addEventListener(B.a.TimeUpdate, this.onTimeUpdate), t.addEventListener(G.a.TheatreChange, this.onTheatreChange), t.addEventListener(G.a.FullscreenChange, this.onFullScreenChange), t.addEventListener(G.a.ExternalFullscreenChange, this.onExternalFullScreenChange), t.addEventListener(G.a.ClipsModerationOpen, this.onClipsModerationOpen), t.addEventListener(G.a.TransitionToCollectionVOD, this.onTransitionToCollectionVod), t.addEventListener(G.a.TransitionToRecommendedVOD, this.onTransitionToRecommendedVod), t.addEventListener(G.a.OpenStream, this.onOpenStream), t.addEventListener(B.a.Pause, this.onPause), t.addEventListener(G.a.PersistenPlayerToggle, this.onPersistentPlayerToggled), t.addEventListener(B.a.LoadedMetadata, this.onMetadataLoaded), L.extensionService.registerPlayer(this.player), L.extensionService.setPlayerWindow(window), this.props.onInit && this.props.onInit(t), this.maybeAttachToWindow(this.props)
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
                    D.parse(window.location.search).attachPlayer && e.attachToWindow && this.player && (window.player = this.player)
                }, t.prototype.maybeDetachFromWindow = function() {
                    window.player = void 0
                }, t.prototype.bindHotKeys = function() {
                    F.bind("alt+x", this.maybeRecordClip)
                }, t.prototype.unbindHotKeys = function() {
                    F.unbind("alt+x")
                }, t.tagInjected = !1, t
            }(r.Component),
            K = Object(A.d)("VideoPlayer")(q);
        var Y = Object(f.d)(Object(g.b)(function(e) {
            return {
                isWhispersBottomBarVisible: Object(O.b)(e),
                theatreModeEnabled: e.ui.theatreModeEnabled,
                rightColumnExpanded: e.ui.rightColumnExpanded,
                sideNavExpanded: e.ui.sideNavExpanded,
                isLoggedIn: Object(k.d)(e),
                authToken: Object(k.a)(e),
                activeVideoPlayerRefID: Object(R.a)(e)
            }
        }, function(e) {
            return Object(f.b)({
                enableTheatreMode: C.v,
                disableTheatreMode: C.t,
                enableFullscreenTheatreMode: C.u,
                disableFullscreenTheatreMode: C.s,
                togglePersistentPlayer: C.B,
                reportPlayerInstanceStarted: N.b
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
                return i.__extends(n, t), n.prototype.render = function() {
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
                    return r.createElement(e, i.__assign({}, t, this.props))
                }, n.prototype.supported = function() {
                    return !!w.enabled
                }, n.prototype.element = function() {
                    return w.element
                }, n.prototype.enable = function(e) {
                    w.request(e)
                }, n.prototype.disable = function() {
                    w.exit()
                }, n
            }(r.Component)
        }, Object(E.b)(), T.f)(K);

        function $(e, t, n) {
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
            return Y
        }), n.d(t, "d", function() {
            return $
        }), n.d(t, "b", function() {
            return V.c
        })
    },
    hdYS: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            l = n("4bQk");
        var c = Object(i.b)(function(e) {
            var t = Object(s.c)(e);
            return {
                currentUserLogin: t && t.login,
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(r.b)({
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
                return i.__awaiter(n, void 0, void 0, function() {
                    var n, c;
                    return i.__generator(this, function(i) {
                        return n = new Set(l()), t ? n.add(e) : n.delete(e), c = Array.from(n), r.l.set(s, c), a(Object(o.b)(c)), [2]
                    })
                })
            }
        }, t.a = function() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return r.l.set(s, []), t(Object(o.b)([])), [2]
                    })
                })
            }
        }, t.b = l;
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("D9fv"),
            o = n("V9YC"),
            s = "languageDirectoryFilters";

        function l() {
            return r.l.get(s, []).filter(function(e) {
                return a.a.has(e)
            })
        }
    },
    iOr9: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.logger = a.o.logger.withCategory("component-experiment");
                    var i = a.o.experiments.getAssignment(n.props.name, n.props.channel ? {
                        channel: n.props.channel
                    } : {});
                    return i && n.props.assignments[i] ? n.logger.debug("Displaying component for experiment", {
                        name: n.props.name,
                        assignment: i
                    }) : n.logger.debug("Displaying fallback component for experiment", {
                        name: n.props.name,
                        assignment: i
                    }), n.state = {
                        assignment: i
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.state.assignment && this.props.assignments[this.state.assignment]) {
                        var e = this.props.assignments[this.state.assignment]();
                        return "string" == typeof e ? (window.location.replace(e), null) : e
                    }
                    return this.props.assignments.fallback()
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    iQti: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "PrimeSubscribe_SpendPrimeSubscriptionCredit"
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
                                value: "SpendSubscriptionCreditInput"
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
                            value: "spendSubscriptionCredit"
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
                                    value: "userID"
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
                                            value: "endsAt"
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
                end: 227
            }
        };
        n.loc.source = {
            body: "mutation PrimeSubscribe_SpendPrimeSubscriptionCredit($input: SpendSubscriptionCreditInput!) {\nspendSubscriptionCredit(input: $input) {\nuserID\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nendsAt\n}\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ijOz: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }),
            function(e) {
                e.AnimatedThumbnails = "animated_thumbnails", e.Embed = "embed", e.Feed = "feed", e.Frontpage = "frontpage", e.Site = "site", e.Highlighter = "highlighter", e.Onboarding = "onboarding", e.ClipsViewing = "clips-viewing", e.ClipsEditing = "clips-editing", e.ClipsEmbed = "clips-embed", e.Dashboard = "dashboard"
            }(i || (i = {}));
        var r, a = [i.ClipsEditing, i.ClipsViewing, i.ClipsEmbed];
        ! function(e) {
            e.Delete = "delete", e.DeleteAll = "deleteAll", e.ReportUser = "report"
        }(r || (r = {}))
    },
    j0cR: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.videoPlayer.activeVideoPlayerInstanceRefID
        };
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("Hjbq");
        r.o.store.registerReducer("videoPlayer", function(e, t) {
            switch (void 0 === e && (e = {
                activeVideoPlayerInstanceRefID: void 0
            }), t.type) {
                case a.a:
                    return i.__assign({}, e, {
                        activeVideoPlayerInstanceRefID: t.playerRefID
                    });
                default:
                    return e
            }
        })
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("OAwv"),
            a = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2");

        function l(e) {
            return function(t) {
                var n = function(n) {
                    function o(t) {
                        var r = n.call(this, t) || this;
                        return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                            if (!(r.tracked || e.skip && e.skip(r.props))) {
                                r.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, r.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = r.referenceTracking,
                                    o = a.content,
                                    l = a.medium,
                                    c = a.content_index;
                                s.o.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                    }
                    return i.__extends(o, n), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return a.createElement(t, i.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
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

        function i(e, t) {
            return (t -= e.toString().length) > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.b = function(e, t) {
            var n = Math.floor(e % 60),
                r = Math.floor(e % 3600 / 60),
                a = Math.floor(e / 3600);
            return t && t.zeroPadAll ? i(a, 2) + ":" + i(r, 2) + ":" + i(n, 2) : a ? a + ":" + i(r, 2) + ":" + i(n, 2) : r + ":" + i(n, 2)
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
        var i, r;
        n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }),
            function(e) {
                e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
            }(i || (i = {})),
            function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(r || (r = {}))
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
            return r
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return i
        });
        var i, r = {
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
        }(i || (i = {}))
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
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
            }(i || (i = {}))
    },
    oFw4: function(e, t) {},
    oSFp: function(e, t, n) {
        "use strict";
        var i = n("A5Hr"),
            r = n("TToO"),
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
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d._35, {
                        className: "reporting-modal__container",
                        background: d.n.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, a.createElement(i.b, {
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
            return i.c
        }), n.d(t, !1, function() {
            return i.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return i.b
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return m
        })
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
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("FDYX"),
            s = n("Odds"),
            l = (n("Z+EN"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.hasDiscount(this.props.subscriptionProducts)) {
                        var e = this.getMessage();
                        return r.createElement(s._35, {
                            textAlign: s._45.Center,
                            className: "sub-discount-banner",
                            padding: 1,
                            color: s.K.Overlay,
                            "data-test-selector": "sub-discount-banner"
                        }, r.createElement(s.Q, {
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
            }(r.Component));
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
            return i
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        }), t.d = function(e) {
            return {
                type: a,
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
                type: i,
                apiData: e,
                championsMap: t,
                apiVersion: e.version
            }
        };
        var i = "directory.LOL_CHAMPIONS_CHANGED",
            r = "directory.LOL_CHAMPIONS_LOADING",
            a = "directory.LOL_CHAMPIONS_ERRORED"
    },
    puy8: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), t.a = r, t.c = function(e, t) {
            var n = parseInt(e, 10) % i.length;
            return r(i[n], t)
        };
        var i = [{
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

        function r(e, t) {
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
            return Object(r.a)(s, {
                props: function(t) {
                    return {
                        blockUserMutation: function(n, r, s, l) {
                            return i.__awaiter(e, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t.mutate ? [4, t.mutate({
                                                variables: {
                                                    input: {
                                                        targetUserID: n,
                                                        sourceContext: s,
                                                        reason: r
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
        var i = n("TToO"),
            r = n("7vx8"),
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
                var n = i.o.intl.getLanguageCode();
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
                    k = m.videos.totalHits;
                p && m.exhaustedHits && b && !m.videos.totalHits && (k = b.totalHits), c = function(e, t, n) {
                    return {
                        results: e.concat(t.hits.map(s)),
                        totalHits: t.totalHits || n
                    }
                }(y, m.videos, k)
            }
            m.users && (n = {
                totalHits: p && g ? g.totalHits : m.users.totalHits,
                results: p && g ? g.results : []
            }, p && m.exhaustedHits && g && !m.users.totalHits && (n.totalHits = g.totalHits), n.results = n.results.concat(m.users.hits.map(function(e, t) {
                return {
                    login: e.login,
                    name: e.name,
                    thumbnail: e.profile_image || Object(r.c)(e.objectID, 64),
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
        var i = n("6sO2"),
            r = n("puy8"),
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
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
            }(i || (i = {}))
    },
    vBst: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.PercentOff = "percent_off", e.FixedValueOff = "fixed_value_off"
            }(i || (i = {}));
        var r = {
            Prime: "prime",
            Tier1: "1000",
            Tier2: "2000",
            Tier3: "3000",
            Custom: "Custom"
        }
    },
    vKFS: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("6sO2"),
            o = n("RH2O"),
            s = n("HW6M"),
            l = n("nyge"),
            c = n("Odds"),
            u = (n("Lwev"), function(e) {
                var t, n = e.spriteDetails,
                    i = e.game.toLowerCase(),
                    a = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = i === l.a.CounterStrike, t)),
                    o = i === l.a.CounterStrike ? 40 : 20;
                return r.createElement(c._8, {
                    className: a
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
            d = n("5DPx"),
            p = (n("nUXg"), function(e) {
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    }, r.createElement("div", null, r.createElement(u, {
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
        var m = Object(o.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap
                    }
                }
            })(p),
            h = (n("YVIF"), function(e) {
                var t = r.createElement(c._35, {
                    className: "preview-card-iconic-image__wrapper",
                    borderRadius: c.t.Small,
                    overflow: c._11.Hidden
                }, r.createElement(c.k, {
                    ratio: e.aspect || c.l.BoxArt,
                    align: c.a.Center
                }, r.createElement(c.N, i.__assign({}, e.imageProps))));
                return e.linkTo && (t = r.createElement(c.O, {
                    to: e.linkTo,
                    onClick: e.onClick
                }, t)), t
            });
        h.displayName = "PreviewCardIconicImage";
        n("IJO1");
        var g, f = function(e) {
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
            b = (n("BJwU"), function(e) {
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
            v = n("vKYI"),
            y = (n("jpZi"), 300),
            k = 5e3,
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
                        }, k)
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
                    }), r.createElement("div", i.__assign({}, e, {
                        onClick: this.props.onClick
                    }), this.renderLoadingSpinner(), r.createElement(c._35, {
                        background: c.n.Alt2
                    }, r.createElement(c.k, {
                        ratio: this.props.aspectRatio
                    }, this.renderImage())))
                }, t.prototype.renderImage = function() {
                    var e, t, n = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                        a = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e["preview-card-thumbnail__image--hidden"] = this.shouldShowLiveVideoPreview() && this.state.isLiveVideoPreviewLoaded, e));
                    return this.shouldShowLiveVideoPreview() ? [r.createElement("div", {
                        key: "player-key",
                        className: s((t = {}, t["preview-card-thumbnail__image--hidden"] = !this.state.isLiveVideoPreviewLoaded, t))
                    }, r.createElement(v.a, {
                        channelLogin: this.props.liveChannelLogin || void 0,
                        onPlayerPlaying: this.onLivePreviewLoaded
                    })), r.createElement("div", {
                        key: "image-key",
                        className: a
                    }, r.createElement(c.N, i.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": _
                    })))] : n && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                        className: a
                    }, r.createElement(c.N, i.__assign({}, this.props.animatedImageProps, {
                        onLoad: this.onImageLoad,
                        onError: this.onImageLoadError,
                        "data-test-selector": _
                    }))) : r.createElement("div", {
                        className: a
                    }, r.createElement(c.N, i.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": _
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
            T = (n("ea7N"), function(e) {
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
            w = n("IOwa"),
            P = n("mi6k"),
            C = n("Tg4T");

        function O(e) {
            return void 0 !== e.streamType
        }

        function E(e) {
            return void 0 !== e.watchedProgressPercent
        }

        function N(e) {
            return void 0 !== e.clipCreatedByChannelLogin
        }! function(e) {
            e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
        }(g || (g = {}));
        var R = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return r.createElement("div", {
                    className: "preview-card"
                }, r.createElement(c._8, {
                    position: c._15.Relative
                }, E(this.props) && r.createElement(C.a, {
                    videoID: this.props.videoID || "",
                    restriction: this.props.restriction,
                    attachTop: !0
                }), r.createElement(c.O, {
                    to: this.props.thumbnailLinkTo || this.props.linkTo,
                    onClick: this.props.onThumbnailClick || this.props.onClick
                }, this.props.thumbnailImageProps && r.createElement(S, {
                    staticImageProps: this.props.thumbnailImageProps,
                    animatedImageProps: E(this.props) && this.props.animatedImageProps || void 0,
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
                return O(this.props) ? r.createElement(f, {
                    topLeft: r.createElement(w.a, {
                        type: this.props.streamType,
                        hosting: !!this.props.hostedByChannelLogin
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(b, {
                        value: Object(a.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                            viewerCount: this.props.currentViewerCount
                        }, "VideoPreviewCard")
                    }),
                    bottomRight: void 0
                }) : E(this.props) ? r.createElement(f, {
                    topLeft: r.createElement(b, {
                        value: Object(P.b)(this.props.durationInSeconds),
                        icon: c._25.GlyphArrRight,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(b, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: r.createElement(b, {
                        value: Object(a.c)(new Date(this.props.datePublished), "medium")
                    }),
                    progressBarPercent: this.props.watchedProgressPercent
                }) : N(this.props) ? r.createElement(f, {
                    topLeft: r.createElement(b, {
                        value: Object(P.b)(this.props.durationInSeconds),
                        icon: c._25.Clip,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(b, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: r.createElement(b, {
                        value: Object(a.c)(new Date(this.props.datePublished), "medium")
                    })
                }) : void 0
            }, t.prototype.getViewCountLabel = function() {
                return E(this.props) || N(this.props) ? Object(a.d)("{viewerCount, plural, one {# view} other {# views}}", {
                    viewerCount: this.props.viewCount
                }, "VideoPreviewCard") : ""
            }, t.prototype.renderIconicImage = function() {
                return this.props.context === g.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(c._8, {
                    margin: {
                        right: 1
                    }
                }, r.createElement(h, {
                    imageProps: this.props.gameBoxArtImageProps,
                    linkTo: this.props.gameBoxArtImageLinkTo || this.props.gameTitleLinkTo,
                    onClick: this.props.gameTitleOnClick,
                    aspect: c.l.BoxArt
                })) : (this.props.context === g.SingleGameList || this.props.context === g.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(c._8, {
                    margin: {
                        right: 1
                    }
                }, r.createElement(h, {
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
                return N(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? e.push({
                    text: Object(a.d)("Clipped by {userName}", {
                        userName: this.props.clipCreatedByChannelLogin || ""
                    }, "VideoPreviewCard"),
                    linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                    onClick: this.props.clipCreatedByChannelLoginOnClick
                }) : this.props.context !== g.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && e.push({
                    text: this.props.gameTitle,
                    linkTo: this.props.gameTitleLinkTo,
                    onClick: this.props.gameTitleOnClick
                }), r.createElement(T, {
                    title: this.props.title,
                    onClick: this.props.onVideoTitleClick || this.props.onClick,
                    linkTo: this.props.videoTitleLinkTo || this.props.linkTo,
                    subtitles: e
                })
            }, t.prototype.renderAppendages = function() {
                if (this.props.playerMetadata && this.props.playerMetadataGame) return r.createElement(m, {
                    streamMetadata: this.props.playerMetadata,
                    game: this.props.playerMetadataGame
                })
            }, t
        }(r.Component);
        n.d(t, "b", function() {
            return g
        }), n.d(t, "a", function() {
            return R
        })
    },
    vKYI: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("BwgW"),
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
                }), this.resetVolume(), this.player && (this.player.removeEventListener(c.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(l.a.Play, this.onPlayerPlay), this.player.removeEventListener(l.a.Playing, this.onPlayerPlaying), r.extensionService.unregisterPlayer(), this.player.destroy())
            }, t.prototype.initializePlayer = function() {
                var e = u;
                this.props.channelLogin && (e.channel = this.props.channelLogin);
                var t = new window.Twitch.Player(this.playerRef, e);
                this.player = t, t.addEventListener(c.a.PlayerReady, this.onPlayerReady), t.addEventListener(l.a.Play, this.onPlayerPlay), t.addEventListener(l.a.Playing, this.onPlayerPlaying), r.extensionService.registerPlayer(this.player)
            }, t.prototype.resetVolume = function() {
                this.userVolumeSetting && window.localStorage.setItem("volume", this.userVolumeSetting), this.userMuteSetting && window.localStorage.setItem("muted", this.userMuteSetting)
            }, t.tagInjected = !1, t = n = i.__decorate([Object(o.d)("LiveChannelPreviewCard")], t);
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
        var i = {
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
        i.loc.source = {
            body: '#import "twilight/common/queries/follow-button-fragment.gql"\nquery FollowButton_User($login: String!) {\nuser(login: $login) {\nid\n...followButtonFragment\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("onRC").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
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
                case r.a.Dark:
                    a = "dark";
                    break;
                case r.a.Light:
                    a = "light";
                    break;
                default:
                    a = "light"
            }
            i.n.track(s.SpadeEventType.ThemeChange, {
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
        var i = n("6sO2"),
            r = n("NXs7"),
            a = n("6WAQ"),
            o = n("NikC"),
            s = n("vH/s")
    },
    xwpJ: function(e, t, n) {
        "use strict";
        var i = function(e, t) {
                var n = "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e);
                return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, n).replace(/{description}/, t)
            },
            r = n("6sO2");

        function a() {
            return [{
                id: "other",
                text: Object(r.d)("Other Terms of Service Violation", "ReportUserModal")
            }]
        }
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        })
    },
    yADj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e && Object(i.c)(e) || ""
        };
        var i = n("+dIz")
    },
    zaS7: function(e, t) {}
});
//# sourceMappingURL=pages.prime.components.twitch-prime-success-fe8c0da3707b844cec766d93fe3b651a.js.map