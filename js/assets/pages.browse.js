webpackJsonp([55], {
    "+GT7": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("F8kA"),
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
            y = n("/SNv"),
            b = n.n(y),
            k = n("Vr3l"),
            _ = n.n(k),
            w = n("nyge"),
            S = n("LgcN"),
            C = function(e) {
                try {
                    return decodeURIComponent(e)
                } catch (e) {
                    return null
                }
            },
            E = n("Odds"),
            O = (n("AHWf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1,
                        game: ""
                    }, t.logger = o.o.logger.withCategory("metadata-icon"), t.didUnmount = !1, t.loadData = function() {
                        if (!t.state.isLoading && !t.state.isError && t.props.streamMetadata && !t.state.content) {
                            var e = C(t.props.match.params.encodedCommunityName);
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
                                    gameSprite: b.a,
                                    item: r,
                                    isLoading: !0
                                }), t.getHearthstoneData()) : i && n === w.a.LeagueOfLegends ? (t.setState({
                                    game: n,
                                    item: String(i)
                                }), t.getLeagueData()) : o && n === w.a.Overwatch && (t.setState({
                                    game: n,
                                    gameSprite: _.a,
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
                            d = t.state.game === w.a.CounterStrike ? 50 : 30;
                        return r.createElement(E._8, {
                            display: E.R.Flex,
                            flexDirection: E.T.Column,
                            alignItems: E.c.Center,
                            justifyContent: E._7.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(E._52, {
                            direction: E._54.Left,
                            label: e
                        }, r.createElement(E._8, {
                            className: l
                        }, r.createElement("div", {
                            style: {
                                backgroundImage: "url(" + n + ")",
                                backgroundPositionX: o ? -1 * o : 0,
                                backgroundPositionY: s ? -1 * s : 0,
                                width: a ? a + "px" : "3rem",
                                height: a ? i + "px" : "3rem",
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
                            var e, t, n, r, i, o, s, l, d, c, u, m, p;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, Object(S.d)()];
                                    case 1:
                                        if (e = a.sent(), this.didUnmount) return [2];
                                        for (t = !1, n = void 0, r = 0, i = e; r < i.length && (n = i[r], !t); r++)
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
            T = Object(i.f)(O);
        var L = Object(m.b)(function(e) {
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
            })(T),
            P = (n("LEV+"), "live-channel-card-link-selector"),
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderVariation = function() {
                        return r.createElement("div", a.__assign({
                            className: "live-channel-card"
                        }, Object(E._63)(t.props)), r.createElement(l.a, {
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
                            channel: r.createElement(i.a, {
                                to: t.props.channelNameLinkTo,
                                onClick: t.props.onClick,
                                className: "live-channel-card__videos",
                                "data-a-target": "live-channel-card-channel-name-link"
                            }, t.props.channelName)
                        }, "Live Channel Card");
                        return r.createElement("div", a.__assign({
                            className: "live-channel-card"
                        }, Object(E._63)(t.props)), r.createElement(E.C, {
                            key: t.props.title
                        }, r.createElement(E._8, {
                            fullWidth: !0
                        }, r.createElement(E.k, {
                            overflow: !0
                        }, r.createElement("div", null, r.createElement(i.a, {
                            to: t.props.linkTo,
                            title: t.props.hideTooltip ? void 0 : t.props.title,
                            "data-a-target": "live-channel-card-thumbnail-link",
                            "data-test-selector": P,
                            onClick: t.props.onClick
                        }, t.props.children ? t.props.children : r.createElement(E.E, {
                            alt: t.props.imageAlt,
                            src: t.props.imageSrc,
                            aspect: E.l.Aspect16x9
                        }), t.renderContentType()), t.renderGameBoxArt()))), r.createElement(E.D, null, r.createElement(E._8, {
                            display: E.R.Flex,
                            flexWrap: E.U.NoWrap
                        }, r.createElement(E._8, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, r.createElement(E.O, {
                            to: t.props.linkTo,
                            onClick: t.props.onClick,
                            className: "live-channel-card__channel",
                            "data-a-target": "live-channel-card-title-link"
                        }, r.createElement(E._2, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(E.Q, {
                            type: E._49.H3,
                            fontSize: E.V.Size5,
                            lineHeight: E._9.Body,
                            ellipsis: !0,
                            className: "live-channel-card__title"
                        }, t.props.title))), r.createElement(E._8, {
                            className: "live-channel-card__meta",
                            display: E.R.Flex,
                            flexWrap: E.U.NoWrap
                        }, r.createElement(E.Q, {
                            type: E._49.Span,
                            ellipsis: !0
                        }, e))), r.createElement(E._8, {
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
                            return r.createElement(u.VideoPreviewCardPlaceholder, null)
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
                    }, r.createElement(E._35, {
                        className: "live-channel-card__boxart",
                        position: E._15.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(E._52, {
                        display: E.R.Block,
                        direction: E._54.Bottom,
                        label: t
                    }, r.createElement(E.E, {
                        src: n,
                        alt: t,
                        aspect: E.l.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(E._8, {
                        position: E._15.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(d.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? r.createElement(L, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(r.Component),
            I = N;
        n.d(t, !1, function() {
            return P
        }), n.d(t, !1, function() {
            return N
        }), n.d(t, "a", function() {
            return I
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
            d = n("QG7y"),
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
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
                            var a;
                            if (n.props.slotID === d.b.directory.banner) return void((a = n.slotRef.querySelector(c)) && 1 !== a.clientWidth && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === d.b.directory.rectangle) return void((a = n.slotRef.querySelector(u)) && 1 !== a.clientWidth && n.setState({
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
                    d.g.addListener(d.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet && !this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), d.g.removeListener(d.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
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
    "/gww": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            r = n("2KeS"),
            i = n("V5M+"),
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
            y = function(e) {
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
            b = Object(l.compose)(Object(u.a)(v, {
                name: "banUserFromCommunity"
            }))(y);
        var k = Object(a.b)(null, function(e) {
            return Object(r.b)({
                onCloseModal: i.c
            }, e)
        })(b);
        n.d(t, "a", function() {
            return k
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
            d = n("6sO2"),
            c = n("+8VM"),
            u = n("7vx8"),
            m = n("oIkB"),
            p = n("vH/s"),
            g = n("UQNI"),
            h = n("Odds"),
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
            b = Object(l.compose)(Object(u.a)(v, {
                name: "timeoutUserFromCommunity"
            }))(y);
        var k = Object(a.b)(null, function(e) {
            return Object(r.b)({
                onCloseModal: i.c
            }, e)
        })(b);
        n.d(t, "a", function() {
            return k
        })
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
                end: 432
            }
        };
        n.loc.source = {
            body: "query BrowsePage_Popular($limit: Int $cursor: Cursor $platformType: PlatformType $languages: [Language!]) {\nstreams(first: $limit after: $cursor platformType: $platformType languages: $languages) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}",
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
            return y
        });
        var a, r = n("TToO"),
            i = n("6sO2"),
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
            f = i.o.logger.withCategory("metadata-info");
        ! function(e) {
            e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
        }(a || (a = {}));
        var y = function(e, t) {
                return r.__awaiter(v, void 0, void 0, function() {
                    var n, a, o, s, l, d;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = t.toLowerCase(), a = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, a && n === p.a.CounterStrike ? [4, b(a)] : [3, 2];
                            case 1:
                                return [2, r.sent()];
                            case 2:
                                return o && n === p.a.Hearthstone ? [4, k(o)] : [3, 4];
                            case 3:
                                return [2, r.sent()];
                            case 4:
                                return l && n === p.a.Overwatch ? [4, _(l)] : [3, 6];
                            case 5:
                                return [2, r.sent()];
                            case 6:
                                if (s && n === p.a.LeagueOfLegends && (d = i.o.store.getState()).directory)
                                    if (d.directory.leagueOfLegends.championsMap) {
                                        if (d.directory.leagueOfLegends.championsMap) return [2, w(s, d.directory.leagueOfLegends.championsMap, d.directory.leagueOfLegends.version)]
                                    } else i.o.store.dispatch(Object(m.a)());
                                r.label = 7;
                            case 7:
                                return [2, null]
                        }
                    })
                })
            },
            b = function(e) {
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
            k = function(e) {
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
                                        spriteURL: d.a
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
            _ = function(e) {
                return r.__awaiter(v, void 0, void 0, function() {
                    var t, n, a, i, o, s, l, d, c, m, p, v;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, Object(h.d)()];
                            case 1:
                                for (t = r.sent(), n = void 0, a = 0, i = t; a < i.length; a++)
                                    for (o in n = i[a])
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
                                return p = r.sent(), f.error(p, "Failed to load Overwatch character data"), [2, null];
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
    "6yQB": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            r = n("2KeS"),
            i = n("iJpA"),
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
                            a = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        a && t.props.updateLanguagePreferences(a, n.checked)
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
            v = Object(r.d)(Object(p.d)("LanguageSelectMenu"))(h);
        var f = Object(a.b)(function(e) {
            return {
                languagePreferences: Object(o.a)(e)
            }
        }, function(e) {
            return Object(r.b)({
                updateLanguagePreferences: i.c,
                clearLanguagePreferences: i.a
            }, e)
        })(v);
        n.d(t, "a", function() {
            return f
        })
    },
    "7FW4": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = a.createElement(o._8, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.T.Column,
                justifyContent: o._7.Center,
                display: o.R.Flex
            }, a.createElement(o.Q, {
                color: o.K.Link,
                fontSize: o.V.Size4,
                noWrap: !0
            }, Object(i.d)("View All", "Following--ViewAllButton")), a.createElement(o.Q, {
                color: o.K.Alt2,
                fontSize: o.V.Size4,
                noWrap: !0
            }, e.subHeader));
            e.linkTo && (t = a.createElement(r.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t));
            return a.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": l
            }, a.createElement(o._8, null, a.createElement(o.k, {
                ratio: e.aspectRatio
            }, a.createElement(o._35, {
                background: o.n.Alt2,
                fullHeight: !0
            }, t))))
        };
        var a = n("GiK3"),
            r = (n.n(a), n("F8kA")),
            i = n("6sO2"),
            o = n("Odds"),
            s = n("oHn4"),
            l = (n.n(s), "view-all-button-selector")
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
    AHWf: function(e, t) {},
    AadB: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("O27J"),
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
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = g("live-channel-preview-card", {
                        "live-channel-preview-card--loading": !this.props.streamLoaded
                    });
                    return r.createElement("div", a.__assign({
                        className: e,
                        "data-test-selector": "live-channel-preview-card"
                    }, Object(h._63)(this.props)), r.createElement(l.a, a.__assign({}, this.props), r.createElement(h.k, {
                        ratio: h.l.Aspect16x9
                    }, this.props.videoPlayer)))
                }, t
            }(r.Component)),
            f = n("v5ho"),
            y = n("RH2O"),
            b = n("2KeS"),
            k = n("V5M+"),
            _ = n("jetF"),
            w = n("7vx8"),
            S = n("CSlQ"),
            C = n("/gww"),
            E = n("0w5y"),
            O = n("PO03"),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(C.a, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(E.a, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? r.createElement(_.a, null, r.createElement(h.w, {
                        ariaLabel: Object(o.d)("Moderation", "DirectoryGamePage"),
                        icon: h._25.ChatRiskFlag
                    }), r.createElement(h.q, {
                        direction: h.r.BottomRight,
                        size: h.s.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? r.createElement(h._6, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, r.createElement(h._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? r.createElement(h._6, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, r.createElement(h._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Timeout", "StreamFlag"))) : null
                }, t = a.__decorate([Object(w.a)(O, {
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
                return Object(b.b)({
                    onShowModal: k.d
                }, e)
            })(T),
            P = n("vKYI"),
            N = n("PLRK"),
            I = (n("GiGb"), "directory-first-item"),
            R = "directory-game__card_container",
            D = 5e3,
            x = 300,
            j = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderVariation = function() {
                        var e = n.props.streamNode,
                            t = n.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var i = {
                            context: n.props.directoryType === f.a.Games ? d.b.SingleGameList : d.b.MixedGameAndChannelList,
                            title: e.title || N.a,
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
                        return r.createElement("div", {
                            className: "stream-thumbnail",
                            ref: n.setRef,
                            "data-target": t ? "" : I,
                            style: {
                                order: t
                            }
                        }, r.createElement(h._8, {
                            className: "stream-thumbnail__card",
                            position: h._15.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": R
                        }, r.createElement(d.a, a.__assign({}, i, {
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
                            "data-target": t ? "" : I,
                            onKeyDown: n.onKeyDown,
                            onMouseLeave: n.onMouseLeaveHandler,
                            style: {
                                order: t
                            }
                        }, r.createElement(h._8, {
                            className: "stream-thumbnail__card",
                            position: h._15.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": R
                        }, a && r.createElement(h._35, {
                            attachRight: !0,
                            attachTop: !0,
                            background: h.n.Overlay,
                            borderRadius: h.t.Small,
                            color: h.K.OverlayAlt,
                            margin: .5,
                            padding: .5,
                            position: h._15.Absolute,
                            zIndex: h._62.Above
                        }, r.createElement(h._10, {
                            fillContent: !0,
                            inheritColor: !0,
                            size: h._33.Small
                        })), !n.state.streamLoaded && r.createElement(l.a, {
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || N.a,
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
                        }), i && r.createElement(v, {
                            streamLoaded: n.state.streamLoaded,
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || N.a,
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
                        return e.broadcaster ? n.props.directoryType === f.a.Communities && n.props.directoryName ? r.createElement(h._8, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: h._15.Absolute,
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
                            }, x)
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
                        }, D)
                    }, n.setRef = function(e) {
                        e && (n.thumbnailNode = i.findDOMNode(e), n.addThumbnailListener())
                    }, n.getVideoPlayer = function() {
                        var e = {
                            onPlayerPlaying: n.onStreamLoaded
                        };
                        if (n.props.showPreview && n.state.hovered && n.props.streamNode.broadcaster && n.props.streamNode.broadcaster.login) return r.createElement(P.a, a.__assign({
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
            return I
        }), n.d(t, !1, function() {
            return R
        }), n.d(t, "b", function() {
            return j
        })
    },
    BJwU: function(e, t) {},
    CybZ: function(e, t) {},
    D9fv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.b = function() {
            var e = a.o.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return r.slice().sort(function(e, n) {
                var a = t(e),
                    r = t(n);
                return a !== r ? a - r : a + ":" + e.label < r + ":" + n.label ? -1 : 1
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

        function i(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(a.d)("Other", "broadcaster-languages") : "Other"
            }]
        }
        var o = new Set(r.concat(i()).map(function(e) {
            return e.code
        }))
    },
    Dd84: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r = n("TToO"),
            i = n("6sO2");
        ! function(e) {
            e.Popularity = "popularity", e.Relevancy = "relevancy"
        }(a || (a = {}));
        var o = "browseSettings";

        function s() {
            var e = i.l.get(o, {});
            return r.__assign({
                sortBy: a.Popularity
            }, e)
        }
        var l, d = "browse.BROWSE_TYPE_CHANGED",
            c = "browse.LAST_BROWSE_PATH",
            u = "browse.SORT_BY_CHANGED";

        function m(e) {
            return {
                type: d,
                browseType: e
            }
        }

        function p(e) {
            return {
                type: c,
                lastBrowsePath: e
            }
        }

        function g(e) {
            return {
                type: u,
                sortBy: e
            }
        }

        function h(e) {
            return e.browse.sortBy
        }

        function v(e) {
            return e.browse.browseType
        }! function(e) {
            e.Channels = "channels", e.ChannelsPlaystation = "channels-playstation", e.ChannelsXbox = "channels-xbox", e.Communities = "communities", e.CreativeCommunities = "creative-communities", e.Games = "games"
        }(l || (l = {})), i.o.store.registerReducer("browse", function(e, t) {
            var n;
            switch (void 0 === e && (n = s(), e = r.__assign({
                browseType: l.Games,
                lastBrowsePath: "/directory",
                sortBy: a.Popularity
            }, n)), t.type) {
                case d:
                    return r.__assign({}, e, {
                        browseType: t.browseType
                    });
                case c:
                    return r.__assign({}, e, {
                        lastBrowsePath: t.lastBrowsePath
                    });
                case u:
                    return r.__assign({}, e, {
                        sortBy: t.sortBy
                    });
                default:
                    return e
            }
        });
        var f = n("GiK3"),
            y = n("3zLD"),
            b = n("j7/Y"),
            k = n("w9tK"),
            _ = n("vH/s"),
            w = n("CSlQ"),
            S = n("RH2O"),
            C = n("2KeS"),
            E = n("F8kA"),
            O = n("yWCw"),
            T = n("zCIC"),
            L = n("7vx8"),
            P = n("oIkB"),
            N = n("NY9D"),
            I = n("Us7i"),
            R = n("/+to"),
            D = n("QG7y"),
            x = n("Odds"),
            j = (n("i3hh"), function(e) {
                return f.createElement(x._8, r.__assign({
                    className: "drops-badge",
                    position: x._15.Absolute,
                    attachTop: !0,
                    attachRight: !0
                }, Object(x._63)(e)), f.createElement(x._52, {
                    direction: x._54.Top,
                    align: x._53.Right,
                    label: Object(i.d)("Offers in-game Drops", "DropsBadge")
                }, f.createElement(x._35, {
                    className: "drops-badge__drops-icon",
                    position: x._15.Relative,
                    padding: {
                        top: .5,
                        right: .5,
                        bottom: 3,
                        left: 3
                    },
                    overflow: x._11.Hidden,
                    color: x.K.Overlay,
                    zIndex: x._62.Default
                }, f.createElement(x.O, {
                    type: x.P.Inherit,
                    to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                }, f.createElement(x._24, {
                    asset: x._25.Drops
                })))))
            }),
            F = n("eXld"),
            A = n("v5ho"),
            B = n("lYCI"),
            M = "directory-first-item",
            U = "directory-container",
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onWindowResize = function() {
                        return requestAnimationFrame(t.updateDisplayAdOrder)
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + U + '"]'),
                            t = document.querySelector('[data-target="' + M + '"]'),
                            n = document.querySelector("#" + D.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(D.b.directory).length && I.a.display(D.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    D.g.addListener(D.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), D.g.removeListener(D.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading) return f.createElement(x._10, {
                        fillContent: !0
                    });
                    if (!this.props.data.directories) return f.createElement(O.a, {
                        message: Object(i.d)("Error loading data.", "BrowseDirectory")
                    });
                    var t = this.props.category === l.Communities ? _.PageviewContent.Community : _.PageviewContent.Game,
                        n = this.props.data.directories.edges.map(function(n, a) {
                            var r = n.node,
                                o = !1,
                                s = r && r.activeDropCampaigns;
                            return s && (o = s.some(function(e) {
                                return e && 0 === e.applicableChannels.length || !1
                            })), r ? f.createElement("div", {
                                key: r.id,
                                "data-target": a ? "" : M,
                                style: {
                                    order: a
                                }
                            }, f.createElement(x._8, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-page__card-container",
                                position: x._15.Relative
                            }, f.createElement(x.u, {
                                linkTo: {
                                    pathname: e.getPathURL(r.name, r.directoryType),
                                    state: {
                                        content: t,
                                        content_index: a,
                                        medium: _.PageviewMedium.Browse
                                    }
                                },
                                title: r.displayName,
                                alt: Object(i.d)("{displayName} cover image", {
                                    displayName: r.displayName
                                }, "BrowseDirectory"),
                                src: r.avatarURL,
                                info: Object(i.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: r.viewersCount
                                }, "BrowseDirectory"),
                                "data-a-target": "card-" + a,
                                "data-a-id": "card-" + r.displayName.replace(/ /g, "")
                            }), o && f.createElement(j, null))) : null
                        }),
                        a = !this.props.data.loading && !this.props.data.error && !!this.props.data.directories.pageInfo.hasNextPage;
                    return f.createElement(x._8, null, f.createElement(F.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), f.createElement("div", {
                        "data-target": U
                    }, f.createElement(x._55, {
                        gutterSize: x._57.Small,
                        childWidth: x._56.Small,
                        placeholderItems: 20
                    }, f.createElement(R.a, {
                        key: -1,
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 20,
                            order: 999,
                            width: 300,
                            height: 250
                        },
                        adUnit: D.d.directory,
                        slotID: D.b.directory.rectangle,
                        adSize: D.c.directory.rectangle,
                        "data-a-target": "browse-card-ad-slot",
                        targeting: {
                            pagetype: D.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), n), f.createElement(T.a, {
                        enabled: a,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 300
                    })), this.props.children)
                }, t.prototype.getPathURL = function(e, t) {
                    return "COMMUNITY" === t || this.props.category === l.Communities || this.props.category === l.CreativeCommunities ? Object(N.a)(e) : Object(N.c)(e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t
            }(f.Component),
            H = Object(y.compose)(Object(w.d)("BrowseDirectory"), Object(L.a)(B, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        errorPolicy: "all",
                        variables: {
                            limit: 30,
                            directoryFilters: function(e) {
                                switch (e) {
                                    case l.Communities:
                                        return [A.a.Communities, A.a.Creative];
                                    case l.CreativeCommunities:
                                        return [A.a.Creative];
                                    default:
                                        return [A.a.Games]
                                }
                            }(e.browseType),
                            directorySort: (t = e.sortBy, t === a.Relevancy ? "RELEVANCE" : "VIEWER_COUNT")
                        }
                    };
                    var t
                },
                props: function(e) {
                    return r.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: B,
                                variables: r.__assign({}, e.data.variables, {
                                    cursor: e.data.directories.edges[e.data.directories.edges.length - 5].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        directories: r.__assign({}, n.directories, {
                                            edges: Object(P.c)(e.directories.edges, n.directories.edges)
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }))(Object(E.f)(V));
        var G, W = Object(S.b)(function(e) {
                return {
                    browseType: e.browse.browseType,
                    lastBrowsePath: e.browse.lastBrowsePath,
                    sideNavExpanded: e.ui.sideNavExpanded,
                    sortBy: e.browse.sortBy
                }
            }, function(e) {
                return Object(C.b)({
                    changeLastBrowsePath: p
                }, e)
            })(H),
            z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    i.o.setPageTitle(Object(i.d)("Communities", "BrowseCommunitiesPage"))
                }, t.prototype.render = function() {
                    return f.createElement(W, {
                        category: l.Communities
                    })
                }, t
            }(f.Component),
            q = Object(y.compose)(Object(w.d)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: k.a.BrowseCommunities
            }), Object(b.a)({
                location: _.PageviewLocation.BrowseCommunities
            }))(z),
            K = function() {
                return f.createElement(x._35, {
                    borderTop: !0,
                    padding: {
                        top: 3
                    },
                    textAlign: x._45.Center
                }, f.createElement(x.Q, {
                    fontSize: x.V.Size4,
                    color: x.K.Alt2
                }, Object(i.d)("Not what you're looking for?", "BrowseCreativePage")), f.createElement(x._8, {
                    margin: {
                        top: 2
                    }
                }, f.createElement(x.v, {
                    type: x.B.Hollow,
                    linkTo: "/directory/game/creative",
                    "data-a-target": "view-all-creative"
                }, Object(i.d)("View All Creative Broadcasters", "BrowseCreativePage"))))
            },
            Q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    i.o.setPageTitle(Object(i.d)("Creative", "BrowseCreativePage"))
                }, t.prototype.render = function() {
                    return f.createElement(W, {
                        category: l.CreativeCommunities
                    }, f.createElement(K, null))
                }, t
            }(f.Component),
            $ = Object(y.compose)(Object(w.d)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: k.a.BrowseCreative
            }), Object(b.a)({
                location: _.PageviewLocation.BrowseCreative
            }))(Q),
            Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    i.o.setPageTitle(Object(i.d)("All Games", "BrowseGamePage"))
                }, t.prototype.render = function() {
                    return f.createElement(W, {
                        category: l.Games
                    })
                }, t
            }(f.Component),
            X = Object(y.compose)(Object(w.d)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: k.a.BrowseGames
            }), Object(b.a)({
                location: _.PageviewLocation.Browse
            }))(Y),
            J = n("CIox"),
            Z = n("6yQB"),
            ee = n("czpb"),
            te = n("+Znq");

        function ne(e) {
            switch (e) {
                case l.Channels:
                    return Object(i.d)("Channels", "NewBrowseHeader");
                case l.Communities:
                    return Object(i.d)("Communities", "NewBrowseHeader");
                case l.CreativeCommunities:
                    return Object(i.d)("Creative Communities", "NewBrowseHeader");
                case l.Games:
                    return Object(i.d)("Games", "NewBrowseHeader");
                default:
                    return Object(i.d)("Games and Communities", "NewBrowseHeader")
            }
        }! function(e) {
            e.Communities = "/directory/communities", e.CreativeCommunities = "/directory/creative", e.Games = "/directory", e.DirectoryCategory = "/directory/:category?", e.Popular = "/directory/all", e.PopularEncodedLanguage = "/directory/all/:encodedLanguage", e.PopularPlaystation = "/directory/all/ps4", e.PopularXbox = "/directory/all/xbox"
        }(G || (G = {}));
        var ae = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.typeChangeHandler = function(e) {
                    switch (t.balloonWrapperRef.toggleBalloon(!1), e.currentTarget.getAttribute("data-filter-type")) {
                        case l.Channels:
                            i.o.history.push(G.Popular), t.props.changeBrowseType(l.Channels);
                            break;
                        case l.Communities:
                            i.o.history.push(G.Communities), t.props.changeBrowseType(l.Communities);
                            break;
                        case l.CreativeCommunities:
                            i.o.history.push(G.CreativeCommunities), t.props.changeBrowseType(l.CreativeCommunities);
                            break;
                        default:
                            i.o.history.push(G.Games), t.props.changeBrowseType(l.Games)
                    }
                }, t.saveBalloonWrapperRef = function(e) {
                    t.balloonWrapperRef = e
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                return f.createElement(x._8, {
                    display: x.R.Flex
                }, f.createElement(x._8, {
                    display: x.R.InlineFlex
                }, f.createElement(te.a, {
                    ref: this.saveBalloonWrapperRef
                }, f.createElement(x.v, {
                    type: x.B.Hollow,
                    "data-test-selector": "filter-dropdown-button",
                    "data-a-target": "browse-filter-dropdown",
                    dropdown: !0
                }, ne(this.props.browseType)), f.createElement(x.q, {
                    direction: x.r.Bottom,
                    noTail: !0
                }, f.createElement(x._8, {
                    padding: {
                        y: 1
                    }
                }, this.renderFilterItem(l.Games), this.renderFilterItem(l.Communities), this.renderFilterItem(l.CreativeCommunities), this.renderFilterItem(l.Channels))))))
            }, t.prototype.renderFilterItem = function(e) {
                return f.createElement(x._6, {
                    onClick: this.typeChangeHandler,
                    "data-filter-type": e,
                    "data-test-selector": e + "-selector",
                    "data-a-target": "browse-" + e + "-button",
                    selected: this.props.browseType === e
                }, f.createElement(x._8, {
                    padding: {
                        y: .5,
                        x: 1
                    }
                }, ne(e)))
            }, t
        }(f.Component);
        var re = Object(S.b)(function(e) {
            return {
                browseType: v(e)
            }
        }, function(e) {
            return Object(C.b)({
                changeBrowseType: m
            }, e)
        })(ae);

        function ie(e) {
            switch (e) {
                case a.Relevancy:
                    return Object(i.d)("Relevancy", "BrowseHeader");
                default:
                    return Object(i.d)("Popularity", "BrowseHeader")
            }
        }
        var oe = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.saveBalloonWrapperRef = function(e) {
                    t.balloonWrapperRef = e
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                return f.createElement(x._8, {
                    display: x.R.Flex
                }, f.createElement(x._8, {
                    display: x.R.InlineFlex
                }, f.createElement(te.a, {
                    ref: this.saveBalloonWrapperRef
                }, f.createElement(x.v, {
                    type: x.B.Hollow,
                    "data-test-selector": "sort-dropdown-button",
                    dropdown: !0
                }, ie(this.props.sortBy)), f.createElement(x.q, {
                    direction: x.r.Bottom,
                    noTail: !0
                }, f.createElement(x._8, {
                    padding: {
                        y: 1
                    }
                }, this.renderSortItem(a.Popularity), this.renderSortItem(a.Relevancy))))))
            }, t.prototype.renderSortItem = function(e) {
                var t = this;
                return f.createElement(x._6, {
                    onClick: function() {
                        var n, a, r;
                        t.balloonWrapperRef.toggleBalloon(!1), t.props.changeSortBy(e), n = "sortBy", a = e, (r = s())[n] = a, i.l.set(o, r)
                    },
                    "data-test-selector": e + "-selector",
                    selected: this.props.sortBy === e
                }, f.createElement(x._8, {
                    padding: {
                        y: .5,
                        x: 1
                    }
                }, ie(e)))
            }, t
        }(f.Component);
        var se = Object(S.b)(function(e) {
                return {
                    sortBy: h(e)
                }
            }, function(e) {
                return Object(C.b)({
                    changeSortBy: g
                }, e)
            })(oe),
            le = function(e) {
                return e === G.Popular || e === G.PopularEncodedLanguage || e === G.PopularPlaystation || e === G.PopularXbox
            },
            de = n("HW6M"),
            ce = (n("R0TX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.typeChangeHandler = function(e) {
                        t.balloonWrapperRef.toggleBalloon(!1);
                        var n = e.currentTarget.getAttribute("data-filter-type");
                        "all" === n ? i.o.history.push("/directory/all/") : i.o.history.push("/directory/all/" + n)
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t = Object(i.d)("All Platforms", "PlatformFilter"),
                        n = Object(i.d)("Xbox One", "PlatformFilter"),
                        a = Object(i.d)("PlayStation 4", "PlatformFilter");
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
                    return f.createElement(x._8, {
                        display: x.R.Flex
                    }, f.createElement("div", null, f.createElement(x._8, {
                        display: x.R.InlineFlex
                    }, f.createElement(te.a, {
                        ref: this.saveBalloonWrapperRef,
                        "data-a-target": "platform-filter-balloon"
                    }, f.createElement(x.v, {
                        type: x.B.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "platform-filter-dropdown",
                        dropdown: !0
                    }, e), f.createElement(x.q, {
                        direction: x.r.Bottom,
                        noTail: !0
                    }, f.createElement(x._8, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, this.renderFilterItem("all", t, "filter-item-all"), this.renderFilterItem("xbox", n, "filter-item-xbox"), this.renderFilterItem("ps4", a, "filter-item-ps4")))))))
                }, t.prototype.renderFilterItem = function(e, t, n) {
                    var a = de("platform-filter", {
                        "platform-filter--active": !this.props.broadcastType || this.props.broadcastType === e
                    });
                    return f.createElement(x._6, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": e,
                        "data-a-target": "platform-filter-" + e + "-button"
                    }, f.createElement(x._8, {
                        className: a,
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": n
                    }, t))
                }, t
            }(f.Component)),
            ue = {
                "/directory/all": "all",
                "/directory/all/:encodedLanguage": "all",
                "/directory/all/xbox": "xbox",
                "/directory/all/xb1": "xbox",
                "/directory/all/ps4": "ps4"
            },
            me = "create-community-button",
            pe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSortOrStream = function() {
                        return le(t.props.match.path) ? Object(i.d)("Show me {filter} streaming from {platform}", {
                            filter: f.createElement(x._8, {
                                margin: {
                                    x: 1
                                }
                            }, f.createElement(re, null)),
                            platform: f.createElement(x._8, {
                                margin: {
                                    x: 1
                                }
                            }, f.createElement(ce, {
                                broadcastType: ue[decodeURIComponent(t.props.match.path)] || "all"
                            }))
                        }, "NewBrowseHeader") : Object(i.d)("Show me {filter} sorted by {sort}", {
                            filter: f.createElement(x._8, {
                                margin: {
                                    x: 1
                                }
                            }, f.createElement(re, null)),
                            sort: f.createElement(x._8, {
                                margin: {
                                    x: 1
                                }
                            }, f.createElement(se, null))
                        }, "NewBrowseHeader")
                    }, t.renderCreateCommunity = function() {
                        return t.props.location.pathname !== G.Communities ? null : f.createElement(x.v, {
                            type: x.B.Hollow,
                            linkTo: Object(ee.a)("/communities/create"),
                            "data-test-selector": me
                        }, Object(i.d)("Create Community", "NewBrowseHeader"))
                    }, t.renderLanguageSelect = function() {
                        return le(t.props.match.path) ? f.createElement(Z.a, null) : null
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return f.createElement(x._35, {
                        background: x.n.Base,
                        border: !0,
                        display: x.R.Flex,
                        flexDirection: x.T.Row,
                        margin: {
                            bottom: 2
                        },
                        padding: 2
                    }, f.createElement(x._8, {
                        display: x.R.Flex,
                        flexGrow: 1
                    }, f.createElement(x._8, {
                        display: x.R.Flex,
                        alignItems: x.c.Center
                    }, this.renderSortOrStream())), f.createElement(x._8, {
                        display: x.R.Flex,
                        flexGrow: 1,
                        justifyContent: x._7.End
                    }, f.createElement(x._8, {
                        display: x.R.Flex,
                        flexDirection: x.T.Row
                    }, this.renderCreateCommunity(), this.renderLanguageSelect())))
                }, t
            }(f.Component),
            ge = Object(E.f)(pe),
            he = n("+GT7"),
            ve = n("DtWM"),
            fe = n("SZoP"),
            ye = n("PLRK"),
            be = n("7FW4"),
            ke = n("peXu"),
            _e = n("SN3I"),
            we = n("AadB"),
            Se = n("MMhf"),
            Ce = n("I1+1"),
            Ee = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams || this.props.data.error || !this.props.data.streams) return null;
                    var e, t = Object(Se.a)(this.props.languageCode),
                        n = this.props.directoryWidth,
                        a = _.PageviewMedium.Browse,
                        r = _.PageviewContent.Popular,
                        i = this.props.data.streams.edges || [];
                    if (n && n > 0) {
                        var o = Object(ke.a)(n, 240, 2);
                        o < i.length && (i = i.slice(0, o - 1), e = f.createElement("div", {
                            style: {
                                order: i.length
                            }
                        }, f.createElement(be.a, {
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
                        return f.createElement(we.b, {
                            directoryType: A.a.Communities,
                            streamIndex: t,
                            streamNode: n,
                            key: n.id,
                            trackingMedium: a,
                            trackingContent: r
                        })
                    });
                    return f.createElement("div", null, f.createElement(_e.a, {
                        languageCode: this.props.languageCode
                    }), f.createElement(x._55, {
                        gutterSize: x._57.Small,
                        childWidth: x._56.Medium,
                        placeholderItems: 20
                    }, s, e))
                }, t = r.__decorate([Object(L.a)(Ce, {
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
                }), Object(w.d)("PopularInternationalSection", {
                    autoReportInteractive: !0
                })], t)
            }(f.Component),
            Oe = n("4pV0"),
            Te = "directory-first-item",
            Le = "directory-container",
            Pe = function(e) {
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
                        var e = document.querySelector('[data-target="' + Le + '"]'),
                            t = document.querySelector('[data-target="' + Te + '"]'),
                            n = document.querySelector("#" + D.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(D.b.directory).length && I.a.display(D.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    D.g.addListener(D.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    i.o.setPageTitle(Object(i.d)("Top Channels", "DirectoryPopularPage")), window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), D.g.removeListener(D.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return f.createElement(x._10, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return f.createElement(O.a, {
                        message: Object(i.d)("Error loading data.", "DirectoryPopularPage")
                    });
                    var e = null,
                        t = null;
                    "en" !== this.props.languageCode && (t = f.createElement(x._8, {
                        margin: {
                            bottom: 2
                        }
                    }, f.createElement(x.Q, {
                        type: x._49.H4,
                        color: x.K.Alt2,
                        fontSize: x.V.Size5,
                        transform: x._48.Uppercase
                    }, Object(i.d)("All Channels", "PopularInternationalSection"))), e = f.createElement(Ee, {
                        directoryWidth: this.state.directoryWidth,
                        languageCode: this.props.languageCode,
                        platformType: ue[decodeURIComponent(this.props.match.path)] || "all"
                    }));
                    var n = _.PageviewMedium.Browse,
                        a = this.props.data.streams.edges.map(function(e, t) {
                            var a = e.node;
                            return a.broadcaster && a.broadcaster.id ? f.createElement("div", {
                                key: a.id,
                                "data-target": t ? "" : Te,
                                style: {
                                    order: t
                                }
                            }, f.createElement(x._8, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-game__card_container"
                            }, f.createElement(he.a, {
                                linkTo: {
                                    pathname: "/" + a.broadcaster.login,
                                    state: {
                                        content: _.PageviewContent.Live,
                                        content_index: t,
                                        medium: n
                                    }
                                },
                                title: a.title || ye.a,
                                imageAlt: a.broadcaster.login + " cover image",
                                imageSrc: a.previewImageURL,
                                viewerCount: a.viewersCount || 0,
                                channelName: Object(fe.a)(a.broadcaster.login, a.broadcaster.displayName, !0),
                                gameImageSrc: a.game && a.game.boxArtURL || i.a.defaultBoxArtURL,
                                gameTitle: a.game && a.game.name || "",
                                gameLinkTo: {
                                    pathname: Object(N.c)(a.game && a.game.name || ""),
                                    state: {
                                        medium: n,
                                        content: _.PageviewContent.Live,
                                        content_index: t
                                    }
                                },
                                "data-a-target": "card-" + t,
                                "data-a-id": "card-" + (a.broadcaster.login || "").replace(/ /g, ""),
                                channelNameLinkTo: {
                                    pathname: "/" + a.broadcaster.login + "/videos",
                                    state: {
                                        medium: n,
                                        content: _.PageviewContent.Live,
                                        content_index: t
                                    }
                                },
                                streamType: a.type,
                                channelImageSrc: a.broadcaster.profileImageURL || ""
                            }))) : null
                        }),
                        r = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                    return f.createElement(x._8, {
                        flexShrink: 0,
                        "data-target": Le
                    }, f.createElement(F.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), e, t, f.createElement(x._55, {
                        gutterSize: x._57.Small,
                        childWidth: x._56.Large,
                        placeholderItems: 20
                    }, f.createElement(R.a, {
                        key: -1,
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 20,
                            order: 999,
                            width: 300,
                            height: 250
                        },
                        adUnit: D.d.directory,
                        slotID: D.b.directory.rectangle,
                        adSize: D.c.directory.rectangle,
                        targeting: {
                            pagetype: D.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), a), f.createElement(T.a, {
                        enabled: r,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 200
                    }), f.createElement(ve.a, {
                        onResize: this.onResize
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t = r.__decorate([Object(L.a)(Oe, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30,
                                platformType: ue[decodeURIComponent(e.match.path)] || "all",
                                languages: e.languagePreferences.map(function(e, t) {
                                    return e.toUpperCase()
                                })
                            }
                        }
                    },
                    props: function(e) {
                        return r.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data,
                                    n = t.fetchMore,
                                    a = t.variables,
                                    i = t.streams;
                                return n({
                                    query: Oe,
                                    variables: r.__assign({}, a, {
                                        cursor: i.edges[i.edges.length - 5].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            streams: r.__assign({}, n.streams, {
                                                edges: Object(P.c)(e.streams.edges, n.streams.edges)
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(w.d)("DirectoryPopularPage", {
                    destination: k.a.DirectoryPopular
                }), Object(b.a)({
                    location: _.PageviewLocation.DirectoryPopular
                })], t)
            }(f.Component);
        var Ne = Object(S.b)(function(e) {
                return {
                    languageCode: e.session.languageCode,
                    languagePreferences: e.userPreferences.languagePreferences,
                    lastBrowsePath: e.browse.lastBrowsePath,
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            }, function(e) {
                return Object(C.b)({
                    changeLastBrowsePath: p
                }, e)
            })(Pe),
            Ie = n("yFXh"),
            Re = "directory-container",
            De = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + Re + '"]'),
                            t = document.querySelector('[data-target="' + we.a + '"]'),
                            n = document.querySelector("#" + D.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsCreated + 1;
                            return t === Object.keys(D.b.directory).length && I.a.display(D.b.directory.banner), {
                                numSlotsCreated: t
                            }
                        })
                    }, n.state = {
                        numSlotsCreated: 0
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    D.g.addListener(D.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    D.g.removeListener(D.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return f.createElement(x._10, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return f.createElement(O.a, {
                        message: Object(i.d)("Error loading data.", "PopularDirectoryByLanguagePage")
                    });
                    if (!this.props.data.streams) return f.createElement(O.a, {
                        message: Object(i.d)("Game does not exist", "PopularDirectoryByLanguagePage")
                    });
                    var e, t = this.props.data.streams.edges.filter(function(e) {
                        var t = e.node;
                        return t && t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(e, t) {
                        var n = e.node;
                        if (n) return f.createElement(we.b, {
                            directoryType: A.a.Communities,
                            streamIndex: t,
                            streamNode: n,
                            key: n.id,
                            trackingMedium: _.PageviewMedium.Browse
                        })
                    });
                    if (t.length > 0) {
                        var n = x._56.Large,
                            a = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                        e = f.createElement(x._8, null, f.createElement(x._55, {
                            gutterSize: x._57.Small,
                            childWidth: n,
                            placeholderItems: 20
                        }, f.createElement(R.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: D.d.directory,
                            slotID: D.b.directory.rectangle,
                            adSize: D.c.directory.rectangle,
                            targeting: {
                                pagetype: D.a.games
                            },
                            key: -1,
                            autoEnable: !1
                        }), t), f.createElement(T.a, {
                            enabled: a,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 200
                        }))
                    } else {
                        var r = Object(i.d)("No live channels for this game", "PopularDirectoryByLanguagePage");
                        e = f.createElement(x._8, {
                            display: x.R.Flex,
                            alignItems: x.c.Center,
                            justifyContent: x._7.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, f.createElement(x.Q, {
                            color: x.K.Alt2,
                            fontSize: x.V.Size4,
                            italic: !0
                        }, r))
                    }
                    return f.createElement(x._8, {
                        "data-target": Re
                    }, f.createElement(F.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), f.createElement(R.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: D.d.directory,
                        slotID: D.b.directory.banner,
                        adSize: D.c.directory.banner,
                        targeting: {
                            pagetype: D.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), f.createElement(_e.a, {
                        languageCode: this.props.match.params.encodedLanguage
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = r.__decorate([Object(L.a)(Ie, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: 30,
                                languages: [e.match.params.encodedLanguage]
                            }
                        }
                    },
                    props: function(e) {
                        return r.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: Ie,
                                    variables: r.__assign({}, e.data.variables, {
                                        cursor: e.data.streams.edges[e.data.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            streams: r.__assign({}, n.streams, {
                                                edges: Object(P.c)(e.streams.edges, n.streams.edges)
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(w.d)("DirectoryPopularByLanguagePage", {
                    destination: k.a.DirectoryPopularByLanguage
                }), Object(b.a)({
                    location: _.PageviewLocation.DirectoryPopular,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            language: e.match.params.encodedLanguage
                        }
                    }
                })], t)
            }(f.Component),
            xe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setBrowseType(this.props.match.path)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setBrowseType(e.match.path)
                }, t.prototype.render = function() {
                    return f.createElement(x._8, {
                        padding: 3
                    }, f.createElement(R.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: D.d.directory,
                        "data-a-target": "browse-banner-ad-slot",
                        slotID: D.b.directory.banner,
                        adSize: D.c.directory.banner,
                        targeting: {
                            pagetype: D.a.games
                        },
                        autoEnable: !1
                    }), this.renderBrowseHeader(), f.createElement(J.e, null, f.createElement(J.c, {
                        path: G.Communities,
                        component: q
                    }), f.createElement(J.c, {
                        path: G.CreativeCommunities,
                        component: $
                    }), f.createElement(J.c, {
                        path: G.PopularPlaystation,
                        component: Ne
                    }), f.createElement(J.c, {
                        path: G.PopularXbox,
                        component: Ne
                    }), f.createElement(J.c, {
                        path: G.PopularEncodedLanguage,
                        component: De
                    }), f.createElement(J.c, {
                        path: G.Popular,
                        component: Ne
                    }), f.createElement(J.c, {
                        path: G.DirectoryCategory,
                        component: X
                    })))
                }, t.prototype.renderBrowseHeader = function() {
                    return f.createElement(ge, null)
                }, t.prototype.setBrowseType = function(e) {
                    e === G.DirectoryCategory ? this.props.changeBrowseType(l.Games) : e === G.Communities ? this.props.changeBrowseType(l.Communities) : e === G.CreativeCommunities ? this.props.changeBrowseType(l.CreativeCommunities) : le(e) && this.props.changeBrowseType(l.Channels)
                }, t
            }(f.Component);
        var je = Object(S.b)(function(e) {
            return {
                browseType: v(e),
                sortBy: h(e)
            }
        }, function(e) {
            return Object(C.b)({
                changeBrowseType: m
            }, e)
        })(xe);
        n.d(t, "BrowseCommunitiesPage", function() {
            return q
        }), n.d(t, "BrowseCreativePage", function() {
            return $
        }), n.d(t, "BrowseGamesPage", function() {
            return X
        }), n.d(t, "BrowseRootPage", function() {
            return je
        })
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 385
            }
        };
        n.loc.source = {
            body: "query BrowsePopular_InternationalStreams($platformType: PlatformType $limit: Int $languages: [Language!]) {\nstreams(platformType: $platformType first: $limit languages: $languages) {\nedges {\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    IJO1: function(e, t) {},
    IOwa: function(e, t, n) {
        "use strict";
        var a, r, i, o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            d = n("6sO2"),
            c = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), (a = {})[c.a.Live] = "stream-type-indicator--live", a[c.a.Premiere] = "stream-type-indicator--premiere", a[c.a.Rerun] = "stream-type-indicator--rerun", a[c.a.WatchParty] = "stream-type-indicator--rerun", a),
            p = ((r = {})[c.a.Premiere] = u._25.VideoPremiere, r[c.a.Rerun] = u._25.VideoRerun, r[c.a.WatchParty] = u._25.VideoRerun, r),
            g = ((i = {})[c.a.Premiere] = u._26.Live, i[c.a.Rerun] = u._26.Inherit, i[c.a.WatchParty] = u._26.Inherit, i),
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
            return d
        }), n.d(t, "f", function() {
            return c
        });
        var a = n("TToO"),
            r = this,
            i = function() {
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
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
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
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
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
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
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(127).then(n.bind(null, "sQp1"))];
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
                                return [4, n.e(126).then(n.bind(null, "+kKy"))];
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
                                return [4, n.e(125).then(n.bind(null, "2NJ8"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            }
    },
    Lwev: function(e, t) {},
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
                                    e = i.o.logger.withCategory("leagueoflegends-api"), t(Object(d.e)(!0)), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), n = i.o.intl.getLanguageCode(), s = l(n), c = o.a.getAPIURL("/api/lol/champions?" + r.stringify({
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
    R0TX: function(e, t) {},
    SN3I: function(e, t, n) {
        "use strict";
        var a = n("GiK3"),
            r = n("MMhf"),
            i = n("Odds"),
            o = function(e) {
                return a.createElement(i._8, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(i.Q, {
                    type: i._49.H4,
                    color: i.K.Alt2,
                    fontSize: i.V.Size5,
                    transform: i._48.Uppercase,
                    "data-a-target": "international-section-header"
                }, Object(r.a)(e.languageCode)))
            };
        n.d(t, "a", function() {
            return o
        })
    },
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
    YUUt: function(e, t, n) {
        e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc37349dfbde7c720.png"
    },
    YVIF: function(e, t) {},
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return _
        });
        var a = n("TToO"),
            r = n("HW6M"),
            i = (n.n(r), n("OAwv")),
            o = (n.n(i), n("GiK3")),
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
            y = (n.n(f), "video-view-count"),
            b = "video-length",
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
                            "data-test-selector": y,
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
                            "data-test-selector": b,
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
                    return o.createElement(d.a, a.__assign({}, e))
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
            _ = Object(p.d)("VideoPreviewCard")(k)
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
        r.o.store.registerReducer("userPreferences", function(e, t) {
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
    ea7N: function(e, t) {},
    ehrk: function(e, t) {},
    i3hh: function(e, t) {},
    iJpA: function(e, t, n) {
        "use strict";
        t.c = function(e, t) {
            var n = this;
            return function(i) {
                return a.__awaiter(n, void 0, void 0, function() {
                    var n, d;
                    return a.__generator(this, function(a) {
                        return n = new Set(l()), t ? n.add(e) : n.delete(e), d = Array.from(n), r.l.set(s, d), i(Object(o.b)(d)), [2]
                    })
                })
            }
        }, t.a = function() {
            var e = this;
            return function(t) {
                return a.__awaiter(e, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        return r.l.set(s, []), t(Object(o.b)([])), [2]
                    })
                })
            }
        }, t.b = l;
        var a = n("TToO"),
            r = n("6sO2"),
            i = n("D9fv"),
            o = n("V9YC"),
            s = "languageDirectoryFilters";

        function l() {
            return r.l.get(s, []).filter(function(e) {
                return i.a.has(e)
            })
        }
    },
    jpZi: function(e, t) {},
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
            }],
            loc: {
                start: 0,
                end: 430
            }
        };
        n.loc.source = {
            body: "query BrowsePage_AllDirectories($limit: Int $cursor: Cursor $directoryFilters: [DirectoryFilter!] $directorySort: DirectorySort) {\ndirectories(first: $limit after: $cursor filterBySet: $directoryFilters sortBy: $directorySort) {\nedges {\ncursor\nnode {\nid\ndisplayName\nname\navatarURL(width: 285 height: 380)\nviewersCount\ndirectoryType\n... on Game {\nactiveDropCampaigns {\napplicableChannels {\nid\n}\n}\n}\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    oHn4: function(e, t) {},
    peXu: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            void 0 === n && (n = 1);
            if (!t || !e) return -1;
            var r = window.getComputedStyle(document.documentElement).fontSize || a.toString(),
                i = parseFloat(r) / a;
            return Math.floor(e / (t * i)) * n
        };
        var a = 10
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
            d = n("Odds"),
            c = (n("Lwev"), function(e) {
                var t, n = e.spriteDetails,
                    a = e.game.toLowerCase(),
                    i = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = a === l.a.CounterStrike, t)),
                    o = a === l.a.CounterStrike ? 40 : 20;
                return r.createElement(d._8, {
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
            u = n("5DPx"),
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
                    return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? r.createElement(d._8, {
                        className: "preview-card-appendage",
                        display: d.R.Flex
                    }, r.createElement(d._8, {
                        className: "preview-card-appendage__image-wrapper",
                        flexGrow: 0,
                        flexShrink: 0,
                        display: d.R.Flex,
                        alignItems: d.c.Center,
                        justifyContent: d._7.End
                    }, r.createElement("div", null, r.createElement(c, {
                        game: this.props.game,
                        spriteDetails: this.state.metadataDetails.spriteDetails
                    }))), r.createElement(d._35, {
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
                    }, r.createElement(d._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: d._11.Hidden
                    }, r.createElement(d.Q, {
                        ellipsis: !0
                    }, this.state.metadataDetails.name)), r.createElement(d._8, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(d.Q, null, this.state.metadataDetails.label)))) : null
                }, t
            }(r.Component));
        var p = Object(o.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap
                    }
                }
            })(m),
            g = (n("YVIF"), function(e) {
                var t = r.createElement(d._35, {
                    className: "preview-card-iconic-image__wrapper",
                    borderRadius: d.t.Small,
                    overflow: d._11.Hidden
                }, r.createElement(d.k, {
                    ratio: e.aspect || d.l.BoxArt,
                    align: d.a.Center
                }, r.createElement(d.N, a.__assign({}, e.imageProps))));
                return e.linkTo && (t = r.createElement(d.O, {
                    to: e.linkTo,
                    onClick: e.onClick
                }, t)), t
            });
        g.displayName = "PreviewCardIconicImage";
        n("IJO1");
        var h, v = function(e) {
                var t = .5,
                    n = null;
                return "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = r.createElement(d._8, {
                    position: d._15.Absolute,
                    attachBottom: !0,
                    fullWidth: !0
                }, r.createElement(d._18, {
                    size: d._20.Small,
                    value: e.progressBarPercent,
                    mask: !0
                })), t = 1), r.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    fullWidth: !0,
                    fullHeight: !0,
                    className: "preview-card-overlay"
                }, n, r.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    margin: 1,
                    "data-test-selector": "top-left-selector"
                }, e.topLeft), r.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    attachRight: !0,
                    margin: 1,
                    "data-test-selector": "top-right-selector"
                }, e.topRight), r.createElement(d._8, {
                    position: d._15.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-left-selector"
                }, e.bottomLeft), r.createElement(d._8, {
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
                var t = e.icon && r.createElement(d._8, {
                    display: d.R.Flex
                }, r.createElement(d._24, {
                    asset: e.icon,
                    width: 14,
                    height: 14
                }));
                return e.withBackground ? r.createElement(d._35, {
                    alignItems: d.c.Center,
                    background: d.n.Overlay,
                    borderRadius: d.t.Small,
                    className: "preview-card-stat",
                    color: d.K.Overlay,
                    display: d.R.Flex,
                    fontSize: d.V.Size6,
                    justifyContent: d._7.Center
                }, t, r.createElement(d.Q, null, e.value)) : r.createElement(d._35, {
                    className: "preview-card-stat",
                    color: d.K.Overlay,
                    display: d.R.Flex,
                    padding: {
                        x: .5
                    }
                }, t, r.createElement(d.Q, null, e.value))
            }),
            y = n("vKYI"),
            b = (n("jpZi"), 300),
            k = 5e3,
            _ = "preview-card-thumbnail__image-selector",
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
                            }, b)
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
                    }), this.renderLoadingSpinner(), r.createElement(d._35, {
                        background: d.n.Alt2
                    }, r.createElement(d.k, {
                        ratio: this.props.aspectRatio
                    }, this.renderImage())))
                }, t.prototype.renderImage = function() {
                    var e, t, n = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                        i = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e["preview-card-thumbnail__image--hidden"] = this.shouldShowLiveVideoPreview() && this.state.isLiveVideoPreviewLoaded, e));
                    return this.shouldShowLiveVideoPreview() ? [r.createElement("div", {
                        key: "player-key",
                        className: s((t = {}, t["preview-card-thumbnail__image--hidden"] = !this.state.isLiveVideoPreviewLoaded, t))
                    }, r.createElement(y.a, {
                        channelLogin: this.props.liveChannelLogin || void 0,
                        onPlayerPlaying: this.onLivePreviewLoaded
                    })), r.createElement("div", {
                        key: "image-key",
                        className: i
                    }, r.createElement(d.N, a.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": _
                    })))] : n && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                        className: i
                    }, r.createElement(d.N, a.__assign({}, this.props.animatedImageProps, {
                        onLoad: this.onImageLoad,
                        onError: this.onImageLoadError,
                        "data-test-selector": _
                    }))) : r.createElement("div", {
                        className: i
                    }, r.createElement(d.N, a.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": _
                    })))
                }, t.prototype.renderLoadingSpinner = function() {
                    if (this.shouldShowLiveVideoPreview() && !this.state.isLiveVideoPreviewLoaded) return r.createElement(d._35, {
                        attachRight: !0,
                        attachTop: !0,
                        background: d.n.Overlay,
                        borderRadius: d.t.Small,
                        color: d.K.OverlayAlt,
                        margin: .5,
                        padding: .5,
                        position: d._15.Absolute,
                        zIndex: d._62.Above
                    }, r.createElement(d._10, {
                        fillContent: !0,
                        inheritColor: !0,
                        size: d._33.Small,
                        delay: 0
                    }))
                }, t
            }(r.Component),
            S = (n("ea7N"), function(e) {
                var t = null;
                return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                    return r.createElement(d._8, {
                        key: t,
                        "data-test-selector": "preview-card-titles__subtitle"
                    }, r.createElement(d.Q, {
                        color: d.K.Alt,
                        ellipsis: !0
                    }, "string" == typeof e ? e : r.createElement(d.O, {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: d.P.Inherit
                    }, e.text)))
                })), r.createElement("div", null, r.createElement(d.O, {
                    to: e.linkTo,
                    onClick: e.onClick,
                    type: d.P.Inherit,
                    "data-test-selector": "preview-card-titles__primary-link"
                }, r.createElement(d.Q, {
                    type: d._49.H3,
                    fontSize: d.V.Size5,
                    lines: 1,
                    bold: !0,
                    ellipsis: !0
                }, e.title)), r.createElement(d._8, {
                    className: "preview-card-titles__subtitle-wrapper"
                }, t))
            }),
            C = n("IOwa"),
            E = n("mi6k"),
            O = n("Tg4T");

        function T(e) {
            return void 0 !== e.streamType
        }

        function L(e) {
            return void 0 !== e.watchedProgressPercent
        }

        function P(e) {
            return void 0 !== e.clipCreatedByChannelLogin
        }! function(e) {
            e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
        }(h || (h = {}));
        var N = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return r.createElement("div", {
                    className: "preview-card"
                }, r.createElement(d._8, {
                    position: d._15.Relative
                }, L(this.props) && r.createElement(O.a, {
                    videoID: this.props.videoID || "",
                    restriction: this.props.restriction,
                    attachTop: !0
                }), r.createElement(d.O, {
                    to: this.props.thumbnailLinkTo || this.props.linkTo,
                    onClick: this.props.onThumbnailClick || this.props.onClick
                }, this.props.thumbnailImageProps && r.createElement(w, {
                    staticImageProps: this.props.thumbnailImageProps,
                    animatedImageProps: L(this.props) && this.props.animatedImageProps || void 0,
                    liveChannelLogin: T(this.props) && this.props.enableLivePreview ? this.props.channelLogin : null
                }), this.renderOverlay())), r.createElement(d._8, {
                    display: d.R.Flex,
                    flexWrap: d.U.NoWrap,
                    margin: {
                        top: 1
                    }
                }, r.createElement(d._8, {
                    flexGrow: 0,
                    flexShrink: 0
                }, this.renderIconicImage()), r.createElement(d._8, {
                    flexGrow: 1,
                    flexShrink: 1,
                    overflow: d._11.Hidden
                }, this.renderTitles())), this.renderAppendages())
            }, t.prototype.renderOverlay = function() {
                return T(this.props) ? r.createElement(v, {
                    topLeft: r.createElement(C.a, {
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
                }) : L(this.props) ? r.createElement(v, {
                    topLeft: r.createElement(f, {
                        value: Object(E.b)(this.props.durationInSeconds),
                        icon: d._25.GlyphArrRight,
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
                }) : P(this.props) ? r.createElement(v, {
                    topLeft: r.createElement(f, {
                        value: Object(E.b)(this.props.durationInSeconds),
                        icon: d._25.Clip,
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
                return L(this.props) || P(this.props) ? Object(i.d)("{viewerCount, plural, one {# view} other {# views}}", {
                    viewerCount: this.props.viewCount
                }, "VideoPreviewCard") : ""
            }, t.prototype.renderIconicImage = function() {
                return this.props.context === h.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(d._8, {
                    margin: {
                        right: 1
                    }
                }, r.createElement(g, {
                    imageProps: this.props.gameBoxArtImageProps,
                    linkTo: this.props.gameBoxArtImageLinkTo || this.props.gameTitleLinkTo,
                    onClick: this.props.gameTitleOnClick,
                    aspect: d.l.BoxArt
                })) : (this.props.context === h.SingleGameList || this.props.context === h.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(d._8, {
                    margin: {
                        right: 1
                    }
                }, r.createElement(g, {
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
                return P(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? e.push({
                    text: Object(i.d)("Clipped by {userName}", {
                        userName: this.props.clipCreatedByChannelLogin || ""
                    }, "VideoPreviewCard"),
                    linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                    onClick: this.props.clipCreatedByChannelLoginOnClick
                }) : this.props.context !== h.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && e.push({
                    text: this.props.gameTitle,
                    linkTo: this.props.gameTitleLinkTo,
                    onClick: this.props.gameTitleOnClick
                }), r.createElement(S, {
                    title: this.props.title,
                    onClick: this.props.onVideoTitleClick || this.props.onClick,
                    linkTo: this.props.videoTitleLinkTo || this.props.linkTo,
                    subtitles: e
                })
            }, t.prototype.renderAppendages = function() {
                if (this.props.playerMetadata && this.props.playerMetadataGame) return r.createElement(p, {
                    streamMetadata: this.props.playerMetadata,
                    game: this.props.playerMetadataGame
                })
            }, t
        }(r.Component);
        n.d(t, "b", function() {
            return h
        }), n.d(t, "a", function() {
            return N
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
                }), this.resetVolume(), this.player && (this.player.removeEventListener(d.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(l.a.Play, this.onPlayerPlay), this.player.removeEventListener(l.a.Playing, this.onPlayerPlaying), r.extensionService.unregisterPlayer(), this.player.destroy())
            }, t.prototype.initializePlayer = function() {
                var e = c;
                this.props.channelLogin && (e.channel = this.props.channelLogin);
                var t = new window.Twitch.Player(this.playerRef, e);
                this.player = t, t.addEventListener(d.a.PlayerReady, this.onPlayerReady), t.addEventListener(l.a.Play, this.onPlayerPlay), t.addEventListener(l.a.Playing, this.onPlayerPlaying), r.extensionService.registerPlayer(this.player)
            }, t.prototype.resetVolume = function() {
                this.userVolumeSetting && window.localStorage.setItem("volume", this.userVolumeSetting), this.userMuteSetting && window.localStorage.setItem("muted", this.userMuteSetting)
            }, t.tagInjected = !1, t = n = a.__decorate([Object(o.d)("LiveChannelPreviewCard")], t);
            var n
        }(i.Component);
        n.d(t, !1, function() {
            return "thumbnail-video-player"
        }), n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return m
        })
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
            }],
            loc: {
                start: 0,
                end: 387
            }
        };
        n.loc.source = {
            body: "query PopularPage_StreamsByLanguage($limit: Int $languages: [Language!] $cursor: Cursor) {\nstreams(first: $limit after: $cursor languages: $languages) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.browse-cac9cb75a0e17f2126daa0c358452dff.js.map