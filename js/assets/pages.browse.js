webpackJsonp([52], {
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
            _ = n("Vr3l"),
            k = n.n(_),
            w = n("nyge"),
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
                                    gameSprite: k.a,
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
                        return r.createElement(C._7, {
                            display: C.Q.Flex,
                            flexDirection: C.S.Column,
                            alignItems: C.c.Center,
                            justifyContent: C._6.Center,
                            fullHeight: !0,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(C._47, {
                            direction: C._49.Left,
                            label: e
                        }, r.createElement(C._7, {
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
            P = Object(i.f)(O);
        var T = Object(m.b)(function(e) {
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
            })(P),
            L = (n("LEV+"), "live-channel-card-link-selector"),
            N = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderVariation = function() {
                        return r.createElement("div", a.__assign({
                            className: "live-channel-card"
                        }, Object(C._58)(n.props)), r.createElement(l.a, {
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
                            streamType: n.props.streamType || c.a.Live,
                            currentViewerCount: n.props.viewerCount,
                            enableLivePreview: n.props.enableLivePreview,
                            hostedByChannelLogin: n.props.hostedByChannelLogin
                        }))
                    }, n.renderFallback = function() {
                        var e = null;
                        !0 !== n.state.isPremiereExperimentActive && n.props.vodcast && (e = r.createElement(C._7, {
                            display: C.Q.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, r.createElement(C._11, {
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
                        }, Object(C._58)(n.props)), r.createElement(C.B, {
                            key: n.props.title
                        }, r.createElement(C._7, {
                            fullWidth: !0
                        }, r.createElement(C.j, {
                            overflow: !0
                        }, r.createElement("div", null, r.createElement(i.a, {
                            to: n.props.linkTo,
                            title: n.props.hideTooltip ? void 0 : n.props.title,
                            "data-a-target": "live-channel-card-thumbnail-link",
                            "data-test-selector": L
                        }, n.props.children ? n.props.children : r.createElement(C.D, {
                            alt: n.props.imageAlt,
                            src: n.props.imageSrc,
                            aspect: C.k.Aspect16x9
                        }), n.renderContentType()), n.renderGameBoxArt()))), r.createElement(C.C, null, r.createElement(C._7, {
                            display: C.Q.Flex,
                            flexWrap: C.T.NoWrap
                        }, r.createElement(C._7, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, r.createElement(i.a, {
                            to: n.props.linkTo,
                            className: "live-channel-card__channel",
                            "data-a-target": "live-channel-card-title-link"
                        }, r.createElement(C._1, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(C.P, {
                            type: C._44.H3,
                            fontSize: C.U.Size5,
                            lineHeight: C._8.Body,
                            ellipsis: !0,
                            className: "live-channel-card__title"
                        }, n.props.title))), r.createElement(C._7, {
                            className: "live-channel-card__meta",
                            display: C.Q.Flex,
                            flexWrap: C.T.NoWrap
                        }, e, r.createElement(C.P, {
                            type: C._44.Span,
                            ellipsis: !0
                        }, t))), r.createElement(C._7, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, n.renderStreamMetadata())))))
                    }, n.state = {
                        isPremiereExperimentActive: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, o.o.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return "yes" === e.sent() && o.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
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
                    }, r.createElement(C._30, {
                        className: "live-channel-card__boxart",
                        position: C._14.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(C._47, {
                        display: C.Q.Block,
                        direction: C._49.Bottom,
                        label: t
                    }, r.createElement(C.D, {
                        src: n,
                        alt: t,
                        aspect: C.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(C._7, {
                        position: C._14.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(d.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t.prototype.renderStreamMetadata = function() {
                    return this.props.streamMetadata ? r.createElement(T, {
                        streamMetadata: this.props.streamMetadata
                    }) : null
                }, t
            }(r.Component),
            I = N;
        n.d(t, !1, function() {
            return L
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
                        return t.state.error ? s.createElement(h._7, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(h.P, {
                            color: h.J.Error,
                            type: h._44.H4,
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
                    return s.createElement(h._1, {
                        position: h._14.Relative
                    }, s.createElement(h._30, {
                        background: h.m.Base,
                        className: "stream-ban-modal"
                    }, s.createElement(h._7, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(h._7, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(h.P, {
                        type: h._44.H4
                    }, Object(d.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), s.createElement(h._30, {
                        borderTop: !0
                    }, s.createElement(h._7, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(h.P, {
                        bold: !0
                    }, Object(d.d)("Reason (Required)", "StreamBanModal")), s.createElement(h._3, {
                        type: h._4.Text,
                        placeholder: Object(d.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), s.createElement(h._30, {
                        borderTop: !0
                    }, s.createElement(h._7, {
                        padding: {
                            top: 2
                        },
                        textAlign: h._40.Center
                    }, s.createElement(h._7, {
                        display: h.Q.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(h.u, {
                        type: h.A.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(d.d)("Cancel", "StreamBanModal"))), s.createElement(h._7, {
                        display: h.Q.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(h.u, {
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
        var _ = Object(a.b)(null, function(e) {
            return Object(r.b)({
                onCloseModal: i.c
            }, e)
        })(b);
        n.d(t, "a", function() {
            return _
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
                        return t.state.error ? s.createElement(h._7, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(h.P, {
                            color: h.J.Error,
                            type: h._44.H4,
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
                    return s.createElement(h._1, {
                        position: h._14.Relative
                    }, s.createElement(h._30, {
                        background: h.m.Base,
                        className: "stream-timeout-modal"
                    }, s.createElement(h._7, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(h._7, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(h.P, {
                        type: h._44.H4
                    }, Object(d.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), s.createElement(h._30, {
                        borderTop: !0
                    }, s.createElement(h._7, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(h.P, {
                        bold: !0
                    }, Object(d.d)("Reason (Required)", "StreamTimeoutModal")), s.createElement(h._3, {
                        type: h._4.Text,
                        placeholder: Object(d.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), s.createElement(h._7, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(h.P, {
                        bold: !0
                    }, Object(d.d)("Duration", "StreamTimeoutModal")), s.createElement(h._26, {
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
                    }, Object(d.d)("24 hours", "StreamTimeoutModal")))), s.createElement(h._30, {
                        borderTop: !0
                    }, s.createElement(h._7, {
                        padding: {
                            top: 2
                        },
                        textAlign: h._40.Center
                    }, s.createElement(h._7, {
                        display: h.Q.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(h.u, {
                        type: h.A.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(d.d)("Cancel", "StreamTimeoutModal"))), s.createElement(h._7, {
                        display: h.Q.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(h.u, {
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
        var _ = Object(a.b)(null, function(e) {
            return Object(r.b)({
                onCloseModal: i.c
            }, e)
        })(b);
        n.d(t, "a", function() {
            return _
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
                        return l.createElement(g._7, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, l.createElement(g.I, {
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
                    return l.createElement(g._7, {
                        className: "language-select-menu"
                    }, l.createElement(u.a, null, l.createElement(g.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: g.A.Hollow
                    }, l.createElement(g._7, {
                        display: g.Q.Flex
                    }, Object(d.d)("Language", "LanguageSelectMenu"), l.createElement(g._7, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && l.createElement(g._11, {
                        type: g._12.Brand,
                        label: e.toString()
                    })))), l.createElement(g.p, {
                        direction: g.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, l.createElement(c.b, {
                        className: "language-select-menu__balloon"
                    }, l.createElement(g._7, {
                        padding: .5
                    }, Object(m.b)().map(this.renderLanguageOption))), l.createElement(g._30, {
                        background: g.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, l.createElement(g.u, {
                        type: g.A.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(d.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = s.__decorate([Object(p.d)("LanguageSelectMenu")], t)
            }(l.Component));
        var v = Object(a.b)(function(e) {
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
            return v
        })
    },
    "7FW4": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = a.createElement(o._7, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.S.Column,
                justifyContent: o._6.Center,
                display: o.Q.Flex
            }, a.createElement(o.P, {
                color: o.J.Link,
                fontSize: o.U.Size4,
                noWrap: !0
            }, Object(i.d)("View All", "Following--ViewAllButton")), a.createElement(o.P, {
                color: o.J.Alt2,
                fontSize: o.U.Size4,
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
            }, a.createElement(o._7, null, a.createElement(o.j, {
                ratio: e.aspectRatio
            }, a.createElement(o._30, {
                background: o.m.Alt2,
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
                    }, Object(h._58)(this.props)), r.createElement(l.a, a.__assign({}, this.props), r.createElement(h.j, {
                        ratio: h.k.Aspect16x9
                    }, this.props.videoPlayer)))
                }, t
            }(r.Component)),
            f = n("81qH"),
            y = n("v5ho"),
            b = n("RH2O"),
            _ = n("2KeS"),
            k = n("V5M+"),
            w = n("jetF"),
            S = n("7vx8"),
            E = n("CSlQ"),
            C = n("/gww"),
            O = n("0w5y"),
            P = n("PO03"),
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
                        t.props.onShowModal(O.a, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? r.createElement(w.a, null, r.createElement(h.v, {
                        ariaLabel: Object(o.d)("Moderation", "DirectoryGamePage"),
                        icon: h._21.ChatRiskFlag
                    }), r.createElement(h.p, {
                        direction: h.q.BottomRight,
                        size: h.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? r.createElement(h._5, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, r.createElement(h._7, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? r.createElement(h._5, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, r.createElement(h._7, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Timeout", "StreamFlag"))) : null
                }, t = a.__decorate([Object(S.a)(P, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.communityName
                            }
                        }
                    }
                }), Object(E.d)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component);
        var L = Object(b.b)(null, function(e) {
                return Object(_.b)({
                    onShowModal: k.d
                }, e)
            })(T),
            N = n("vKYI"),
            I = n("PLRK"),
            D = (n("GiGb"), "directory-first-item"),
            x = "directory-game__card_container",
            R = 5e3,
            j = 300,
            A = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderVariation = function() {
                        var e = n.props.streamNode,
                            t = n.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var i = {
                            context: n.props.directoryType === y.a.Games ? d.b.SingleGameList : d.b.MixedGameAndChannelList,
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
                            "data-target": t ? "" : D,
                            style: {
                                order: t
                            }
                        }, r.createElement(h._7, {
                            className: "stream-thumbnail__card",
                            position: h._14.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": x
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
                            "data-target": t ? "" : D,
                            onKeyDown: n.onKeyDown,
                            onMouseLeave: n.onMouseLeaveHandler,
                            style: {
                                order: t
                            }
                        }, r.createElement(h._7, {
                            className: "stream-thumbnail__card",
                            position: h._14.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": x
                        }, a && r.createElement(h._30, {
                            attachRight: !0,
                            attachTop: !0,
                            background: h.m.Overlay,
                            borderRadius: h.s.Small,
                            color: h.J.OverlayAlt,
                            margin: .5,
                            padding: .5,
                            position: h._14.Absolute,
                            zIndex: h._57.Above
                        }, r.createElement(h._9, {
                            fillContent: !0,
                            inheritColor: !0,
                            size: h._28.Small
                        })), !n.state.streamLoaded && r.createElement(l.a, {
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || I.a,
                            channelName: Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
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
                            title: e.title || I.a,
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
                            r = n.props.directoryType === y.a.Communities ? p.PageviewMedium.Community : p.PageviewMedium.Game;
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
                        return e.broadcaster ? n.props.directoryType === y.a.Communities && n.props.directoryName ? r.createElement(h._7, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: h._14.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, r.createElement(L, {
                            communityName: n.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, n.shouldShowGame = function(e) {
                        return n.props.directoryType !== y.a.Games && n.props.streamNode.game ? n.props.streamNode.game[e] : ""
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
                            }, j)
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
                        }, R)
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
                        loader: function() {
                            return r.createElement(f.VideoPreviewCardPlaceholder, null)
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return r.createElement(s.a, a.__assign({}, e))
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return D
        }), n.d(t, !1, function() {
            return x
        }), n.d(t, "b", function() {
            return A
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
            _ = n("w9tK"),
            k = n("vH/s"),
            w = n("CSlQ"),
            S = n("RH2O"),
            E = n("2KeS"),
            C = n("F8kA"),
            O = n("yWCw"),
            P = n("zCIC"),
            T = n("7vx8"),
            L = n("oIkB"),
            N = n("NY9D"),
            I = n("Us7i"),
            D = n("/+to"),
            x = n("QG7y"),
            R = n("Odds"),
            j = (n("i3hh"), function(e) {
                return f.createElement(R._7, r.__assign({
                    className: "drops-badge",
                    position: R._14.Absolute,
                    attachTop: !0,
                    attachRight: !0
                }, Object(R._58)(e)), f.createElement(R._47, {
                    direction: R._49.Top,
                    align: R._48.Right,
                    label: Object(i.d)("Offers in-game Drops", "DropsBadge")
                }, f.createElement(R._30, {
                    className: "drops-badge__drops-icon",
                    position: R._14.Relative,
                    padding: {
                        top: .5,
                        right: .5,
                        bottom: 3,
                        left: 3
                    },
                    overflow: R._10.Hidden,
                    color: R.J.Overlay,
                    zIndex: R._57.Default
                }, f.createElement(R.N, {
                    type: R.O.Inherit,
                    to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                }, f.createElement(R._20, {
                    asset: R._21.Drops
                })))))
            }),
            A = n("eXld"),
            F = n("v5ho"),
            B = n("lYCI"),
            M = "directory-first-item",
            U = "directory-container",
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onWindowResize = function() {
                        return requestAnimationFrame(t.updateDisplayAdOrder)
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + U + '"]'),
                            t = document.querySelector('[data-target="' + M + '"]'),
                            n = document.querySelector("#" + x.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(x.b.directory).length && I.a.display(x.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    x.g.addListener(x.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), x.g.removeListener(x.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading) return f.createElement(R._9, {
                        fillContent: !0
                    });
                    if (!this.props.data.directories) return f.createElement(O.a, {
                        message: Object(i.d)("Error loading data.", "BrowseDirectory")
                    });
                    var t = this.props.category === l.Communities ? k.PageviewContent.Community : k.PageviewContent.Game,
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
                            }, f.createElement(R._7, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-page__card-container",
                                position: R._14.Relative
                            }, f.createElement(R.t, {
                                linkTo: {
                                    pathname: e.getPathURL(r.name, r.directoryType),
                                    state: {
                                        content: t,
                                        content_index: a,
                                        medium: k.PageviewMedium.Browse
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
                    return f.createElement(R._7, null, f.createElement(A.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), f.createElement("div", {
                        "data-target": U
                    }, f.createElement(R._50, {
                        gutterSize: R._52.Small,
                        childWidth: R._51.Small,
                        placeholderItems: 20
                    }, f.createElement(D.a, {
                        key: -1,
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 20,
                            order: 999,
                            width: 300,
                            height: 250
                        },
                        adUnit: x.d.directory,
                        slotID: x.b.directory.rectangle,
                        adSize: x.c.directory.rectangle,
                        "data-a-target": "browse-card-ad-slot",
                        targeting: {
                            pagetype: x.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), n), f.createElement(P.a, {
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
            V = Object(y.compose)(Object(w.d)("BrowseDirectory"), Object(T.a)(B, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        errorPolicy: "all",
                        variables: {
                            limit: 30,
                            directoryFilters: function(e) {
                                switch (e) {
                                    case l.Communities:
                                        return [F.a.Communities, F.a.Creative];
                                    case l.CreativeCommunities:
                                        return [F.a.Creative];
                                    default:
                                        return [F.a.Games]
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
                                            edges: Object(L.b)(e.directories.edges, n.directories.edges)
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }))(Object(C.f)(H));
        var G, W = Object(S.b)(function(e) {
                return {
                    browseType: e.browse.browseType,
                    lastBrowsePath: e.browse.lastBrowsePath,
                    sideNavExpanded: e.ui.sideNavExpanded,
                    sortBy: e.browse.sortBy
                }
            }, function(e) {
                return Object(E.b)({
                    changeLastBrowsePath: p
                }, e)
            })(V),
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
                destination: _.a.BrowseCommunities
            }), Object(b.a)({
                location: k.PageviewLocation.BrowseCommunities
            }))(z),
            Q = function() {
                return f.createElement(R._30, {
                    borderTop: !0,
                    padding: {
                        top: 3
                    },
                    textAlign: R._40.Center
                }, f.createElement(R.P, {
                    fontSize: R.U.Size4,
                    color: R.J.Alt2
                }, Object(i.d)("Not what you're looking for?", "BrowseCreativePage")), f.createElement(R._7, {
                    margin: {
                        top: 2
                    }
                }, f.createElement(R.u, {
                    type: R.A.Hollow,
                    linkTo: "/directory/game/creative",
                    "data-a-target": "view-all-creative"
                }, Object(i.d)("View All Creative Broadcasters", "BrowseCreativePage"))))
            },
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    i.o.setPageTitle(Object(i.d)("Creative", "BrowseCreativePage"))
                }, t.prototype.render = function() {
                    return f.createElement(W, {
                        category: l.CreativeCommunities
                    }, f.createElement(Q, null))
                }, t
            }(f.Component),
            J = Object(y.compose)(Object(w.d)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: _.a.BrowseCreative
            }), Object(b.a)({
                location: k.PageviewLocation.BrowseCreative
            }))(K),
            $ = function(e) {
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
            Y = Object(y.compose)(Object(w.d)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: _.a.BrowseGames
            }), Object(b.a)({
                location: k.PageviewLocation.Browse
            }))($),
            X = n("CIox"),
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
                return f.createElement(R._7, {
                    display: R.Q.Flex
                }, f.createElement(R._7, {
                    display: R.Q.InlineFlex
                }, f.createElement(te.a, {
                    ref: this.saveBalloonWrapperRef
                }, f.createElement(R.u, {
                    type: R.A.Hollow,
                    "data-test-selector": "filter-dropdown-button",
                    "data-a-target": "browse-filter-dropdown",
                    dropdown: !0
                }, ne(this.props.browseType)), f.createElement(R.p, {
                    direction: R.q.Bottom,
                    noTail: !0
                }, f.createElement(R._7, {
                    padding: {
                        y: 1
                    }
                }, this.renderFilterItem(l.Games), this.renderFilterItem(l.Communities), this.renderFilterItem(l.CreativeCommunities), this.renderFilterItem(l.Channels))))))
            }, t.prototype.renderFilterItem = function(e) {
                return f.createElement(R._5, {
                    onClick: this.typeChangeHandler,
                    "data-filter-type": e,
                    "data-test-selector": e + "-selector",
                    "data-a-target": "browse-" + e + "-button",
                    selected: this.props.browseType === e
                }, f.createElement(R._7, {
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
            return Object(E.b)({
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
                return f.createElement(R._7, {
                    display: R.Q.Flex
                }, f.createElement(R._7, {
                    display: R.Q.InlineFlex
                }, f.createElement(te.a, {
                    ref: this.saveBalloonWrapperRef
                }, f.createElement(R.u, {
                    type: R.A.Hollow,
                    "data-test-selector": "sort-dropdown-button",
                    dropdown: !0
                }, ie(this.props.sortBy)), f.createElement(R.p, {
                    direction: R.q.Bottom,
                    noTail: !0
                }, f.createElement(R._7, {
                    padding: {
                        y: 1
                    }
                }, this.renderSortItem(a.Popularity), this.renderSortItem(a.Relevancy))))))
            }, t.prototype.renderSortItem = function(e) {
                var t = this;
                return f.createElement(R._5, {
                    onClick: function() {
                        var n, a, r;
                        t.balloonWrapperRef.toggleBalloon(!1), t.props.changeSortBy(e), n = "sortBy", a = e, (r = s())[n] = a, i.l.set(o, r)
                    },
                    "data-test-selector": e + "-selector",
                    selected: this.props.sortBy === e
                }, f.createElement(R._7, {
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
                return Object(E.b)({
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
                    return f.createElement(R._7, {
                        display: R.Q.Flex
                    }, f.createElement("div", null, f.createElement(R._7, {
                        display: R.Q.InlineFlex
                    }, f.createElement(te.a, {
                        ref: this.saveBalloonWrapperRef,
                        "data-a-target": "platform-filter-balloon"
                    }, f.createElement(R.u, {
                        type: R.A.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "platform-filter-dropdown",
                        dropdown: !0
                    }, e), f.createElement(R.p, {
                        direction: R.q.Bottom,
                        noTail: !0
                    }, f.createElement(R._7, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, this.renderFilterItem("all", t, "filter-item-all"), this.renderFilterItem("xbox", n, "filter-item-xbox"), this.renderFilterItem("ps4", a, "filter-item-ps4")))))))
                }, t.prototype.renderFilterItem = function(e, t, n) {
                    var a = de("platform-filter", {
                        "platform-filter--active": !this.props.broadcastType || this.props.broadcastType === e
                    });
                    return f.createElement(R._5, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": e,
                        "data-a-target": "platform-filter-" + e + "-button"
                    }, f.createElement(R._7, {
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
                            filter: f.createElement(R._7, {
                                margin: {
                                    x: 1
                                }
                            }, f.createElement(re, null)),
                            platform: f.createElement(R._7, {
                                margin: {
                                    x: 1
                                }
                            }, f.createElement(ce, {
                                broadcastType: ue[decodeURIComponent(t.props.match.path)] || "all"
                            }))
                        }, "NewBrowseHeader") : Object(i.d)("Show me {filter} sorted by {sort}", {
                            filter: f.createElement(R._7, {
                                margin: {
                                    x: 1
                                }
                            }, f.createElement(re, null)),
                            sort: f.createElement(R._7, {
                                margin: {
                                    x: 1
                                }
                            }, f.createElement(se, null))
                        }, "NewBrowseHeader")
                    }, t.renderCreateCommunity = function() {
                        return t.props.location.pathname !== G.Communities ? null : f.createElement(R.u, {
                            type: R.A.Hollow,
                            linkTo: Object(ee.a)("/communities/create"),
                            "data-test-selector": me
                        }, Object(i.d)("Create Community", "NewBrowseHeader"))
                    }, t.renderLanguageSelect = function() {
                        return le(t.props.match.path) ? f.createElement(Z.a, null) : null
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return f.createElement(R._30, {
                        background: R.m.Base,
                        border: !0,
                        display: R.Q.Flex,
                        flexDirection: R.S.Row,
                        margin: {
                            bottom: 2
                        },
                        padding: 2
                    }, f.createElement(R._7, {
                        display: R.Q.Flex,
                        flexGrow: 1
                    }, f.createElement(R._7, {
                        display: R.Q.Flex,
                        alignItems: R.c.Center
                    }, this.renderSortOrStream())), f.createElement(R._7, {
                        display: R.Q.Flex,
                        flexGrow: 1,
                        justifyContent: R._6.End
                    }, f.createElement(R._7, {
                        display: R.Q.Flex,
                        flexDirection: R.S.Row
                    }, this.renderCreateCommunity(), this.renderLanguageSelect())))
                }, t
            }(f.Component),
            ge = Object(C.f)(pe),
            he = n("+GT7"),
            ve = n("DtWM"),
            fe = n("SZoP"),
            ye = n("PLRK"),
            be = n("7FW4"),
            _e = n("peXu"),
            ke = n("SN3I"),
            we = n("AadB"),
            Se = n("MMhf"),
            Ee = n("I1+1"),
            Ce = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams || this.props.data.error || !this.props.data.streams) return null;
                    var e, t = Object(Se.a)(this.props.languageCode),
                        n = this.props.directoryWidth,
                        a = k.PageviewMedium.Browse,
                        r = k.PageviewContent.Popular,
                        i = this.props.data.streams.edges || [];
                    if (n && n > 0) {
                        var o = Object(_e.a)(n, 240, 2);
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
                            directoryType: F.a.Communities,
                            streamIndex: t,
                            streamNode: n,
                            key: n.id,
                            trackingMedium: a,
                            trackingContent: r
                        })
                    });
                    return f.createElement("div", null, f.createElement(ke.a, {
                        languageCode: this.props.languageCode
                    }), f.createElement(R._50, {
                        gutterSize: R._52.Small,
                        childWidth: R._51.Medium,
                        placeholderItems: 20
                    }, s, e))
                }, t = r.__decorate([Object(T.a)(Ee, {
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
            Pe = "directory-first-item",
            Te = "directory-container",
            Le = function(e) {
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
                        var e = document.querySelector('[data-target="' + Te + '"]'),
                            t = document.querySelector('[data-target="' + Pe + '"]'),
                            n = document.querySelector("#" + x.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(x.b.directory).length && I.a.display(x.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    x.g.addListener(x.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    i.o.setPageTitle(Object(i.d)("Top Channels", "DirectoryPopularPage")), window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), x.g.removeListener(x.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return f.createElement(R._9, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return f.createElement(O.a, {
                        message: Object(i.d)("Error loading data.", "DirectoryPopularPage")
                    });
                    var e = null,
                        t = null;
                    "en" !== this.props.languageCode && (t = f.createElement(R._7, {
                        margin: {
                            bottom: 2
                        }
                    }, f.createElement(R.P, {
                        type: R._44.H4,
                        color: R.J.Alt2,
                        fontSize: R.U.Size5,
                        transform: R._43.Uppercase
                    }, Object(i.d)("All Channels", "PopularInternationalSection"))), e = f.createElement(Ce, {
                        directoryWidth: this.state.directoryWidth,
                        languageCode: this.props.languageCode,
                        platformType: ue[decodeURIComponent(this.props.match.path)] || "all"
                    }));
                    var n = k.PageviewMedium.Browse,
                        a = this.props.data.streams.edges.map(function(e, t) {
                            var a = e.node;
                            return a.broadcaster && a.broadcaster.id ? f.createElement("div", {
                                key: a.id,
                                "data-target": t ? "" : Pe,
                                style: {
                                    order: t
                                }
                            }, f.createElement(R._7, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-game__card_container"
                            }, f.createElement(he.a, {
                                linkTo: {
                                    pathname: "/" + a.broadcaster.login,
                                    state: {
                                        content: k.PageviewContent.Live,
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
                                        content: k.PageviewContent.Live,
                                        content_index: t
                                    }
                                },
                                "data-a-target": "card-" + t,
                                "data-a-id": "card-" + (a.broadcaster.login || "").replace(/ /g, ""),
                                channelNameLinkTo: {
                                    pathname: "/" + a.broadcaster.login + "/videos",
                                    state: {
                                        medium: n,
                                        content: k.PageviewContent.Live,
                                        content_index: t
                                    }
                                },
                                streamType: a.type,
                                channelImageSrc: a.broadcaster.profileImageURL || ""
                            }))) : null
                        }),
                        r = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                    return f.createElement(R._7, {
                        flexShrink: 0,
                        "data-target": Te
                    }, f.createElement(A.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), e, t, f.createElement(R._50, {
                        gutterSize: R._52.Small,
                        childWidth: R._51.Large,
                        placeholderItems: 20
                    }, f.createElement(D.a, {
                        key: -1,
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 20,
                            order: 999,
                            width: 300,
                            height: 250
                        },
                        adUnit: x.d.directory,
                        slotID: x.b.directory.rectangle,
                        adSize: x.c.directory.rectangle,
                        targeting: {
                            pagetype: x.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), a), f.createElement(P.a, {
                        enabled: r,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 200
                    }), f.createElement(ve.a, {
                        onResize: this.onResize
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t = r.__decorate([Object(T.a)(Oe, {
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
                                                edges: Object(L.b)(e.streams.edges, n.streams.edges)
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(w.d)("DirectoryPopularPage", {
                    destination: _.a.DirectoryPopular
                }), Object(b.a)({
                    location: k.PageviewLocation.DirectoryPopular
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
                return Object(E.b)({
                    changeLastBrowsePath: p
                }, e)
            })(Le),
            Ie = n("yFXh"),
            De = "directory-container",
            xe = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + De + '"]'),
                            t = document.querySelector('[data-target="' + we.a + '"]'),
                            n = document.querySelector("#" + x.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsCreated + 1;
                            return t === Object.keys(x.b.directory).length && I.a.display(x.b.directory.banner), {
                                numSlotsCreated: t
                            }
                        })
                    }, n.state = {
                        numSlotsCreated: 0
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    x.g.addListener(x.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    x.g.removeListener(x.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return f.createElement(R._9, {
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
                            directoryType: F.a.Communities,
                            streamIndex: t,
                            streamNode: n,
                            key: n.id,
                            trackingMedium: k.PageviewMedium.Browse
                        })
                    });
                    if (t.length > 0) {
                        var n = R._51.Large,
                            a = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                        e = f.createElement(R._7, null, f.createElement(R._50, {
                            gutterSize: R._52.Small,
                            childWidth: n,
                            placeholderItems: 20
                        }, f.createElement(D.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: x.d.directory,
                            slotID: x.b.directory.rectangle,
                            adSize: x.c.directory.rectangle,
                            targeting: {
                                pagetype: x.a.games
                            },
                            key: -1,
                            autoEnable: !1
                        }), t), f.createElement(P.a, {
                            enabled: a,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 200
                        }))
                    } else {
                        var r = Object(i.d)("No live channels for this game", "PopularDirectoryByLanguagePage");
                        e = f.createElement(R._7, {
                            display: R.Q.Flex,
                            alignItems: R.c.Center,
                            justifyContent: R._6.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, f.createElement(R.P, {
                            color: R.J.Alt2,
                            fontSize: R.U.Size4,
                            italic: !0
                        }, r))
                    }
                    return f.createElement(R._7, {
                        "data-target": De
                    }, f.createElement(A.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), f.createElement(D.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: x.d.directory,
                        slotID: x.b.directory.banner,
                        adSize: x.c.directory.banner,
                        targeting: {
                            pagetype: x.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), f.createElement(ke.a, {
                        languageCode: this.props.match.params.encodedLanguage
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = r.__decorate([Object(T.a)(Ie, {
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
                                                edges: Object(L.b)(e.streams.edges, n.streams.edges)
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(w.d)("DirectoryPopularByLanguagePage", {
                    destination: _.a.DirectoryPopularByLanguage
                }), Object(b.a)({
                    location: k.PageviewLocation.DirectoryPopular,
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
            Re = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setBrowseType(this.props.match.path)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setBrowseType(e.match.path)
                }, t.prototype.render = function() {
                    return f.createElement(R._7, {
                        padding: 3
                    }, f.createElement(D.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: x.d.directory,
                        "data-a-target": "browse-banner-ad-slot",
                        slotID: x.b.directory.banner,
                        adSize: x.c.directory.banner,
                        targeting: {
                            pagetype: x.a.games
                        },
                        autoEnable: !1
                    }), this.renderBrowseHeader(), f.createElement(X.e, null, f.createElement(X.c, {
                        path: G.Communities,
                        component: q
                    }), f.createElement(X.c, {
                        path: G.CreativeCommunities,
                        component: J
                    }), f.createElement(X.c, {
                        path: G.PopularPlaystation,
                        component: Ne
                    }), f.createElement(X.c, {
                        path: G.PopularXbox,
                        component: Ne
                    }), f.createElement(X.c, {
                        path: G.PopularEncodedLanguage,
                        component: xe
                    }), f.createElement(X.c, {
                        path: G.Popular,
                        component: Ne
                    }), f.createElement(X.c, {
                        path: G.DirectoryCategory,
                        component: Y
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
            return Object(E.b)({
                changeBrowseType: m
            }, e)
        })(Re);
        n.d(t, "BrowseCommunitiesPage", function() {
            return q
        }), n.d(t, "BrowseCreativePage", function() {
            return J
        }), n.d(t, "BrowseGamesPage", function() {
            return Y
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
            p = ((r = {})[c.a.Premiere] = u._21.VideoPremiere, r[c.a.Rerun] = u._21.VideoRerun, r[c.a.WatchParty] = u._21.VideoRerun, r),
            g = ((i = {})[c.a.Premiere] = u._22.Live, i[c.a.Rerun] = u._22.Inherit, i[c.a.WatchParty] = u._22.Inherit, i),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u._30, {
                        className: this.getClassNames(),
                        color: u.J.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.Q.Flex
                    }, l.createElement(u._7, {
                        display: u.Q.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(u.P, {
                        type: u._44.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(u._30, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === c.a.Live ? l.createElement(u._7, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.Q.Flex,
                        alignItems: u.c.Center
                    }, l.createElement(u.F, {
                        status: u.H.Live,
                        size: u.G.Small
                    })) : l.createElement(u._20, {
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
        });
        var a = n("TToO"),
            r = this,
            i = function() {
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(92).then(n.bind(null, "tk3B"))];
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
                                return [4, n.e(91).then(n.bind(null, "e/M0"))];
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
                                return [4, n.e(90).then(n.bind(null, "Dan5"))];
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
                                return [4, n.e(89).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent()]
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
        var a = n("GiK3"),
            r = n("MMhf"),
            i = n("Odds"),
            o = function(e) {
                return a.createElement(i._7, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(i.P, {
                    type: i._44.H4,
                    color: i.J.Alt2,
                    fontSize: i.U.Size5,
                    transform: i._43.Uppercase,
                    "data-a-target": "international-section-header"
                }, Object(r.a)(e.languageCode)))
            };
        n.d(t, "a", function() {
            return o
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
        e.exports = n.p + "assets/overwatch-chars-062a1df5ff2aaa76eb8e129940ef964a.png"
    },
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var a = n("GiK3"),
            r = (n.n(a), n("Odds")),
            i = function() {
                return a.createElement(r.B, null, a.createElement(r.j, {
                    ratio: r.k.Aspect16x9
                }, a.createElement(r._13, null)), a.createElement(r.C, null, a.createElement(r._7, {
                    display: r.Q.Flex,
                    margin: {
                        bottom: 1
                    }
                }, a.createElement(r._7, {
                    display: r.Q.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, a.createElement(r._13, {
                    width: 40,
                    height: 56
                })), a.createElement(r._7, {
                    display: r.Q.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, a.createElement(r.P, null, a.createElement(r._13, {
                    width: 150
                })), a.createElement(r.P, {
                    fontSize: r.U.Size7
                }, a.createElement(r._13, {
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
            h = n("Odds"),
            v = n("a0ve"),
            f = (n.n(v), "video-view-count"),
            y = "video-length",
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.renderVariation = function() {
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
                                alt: t.props.video.title
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
                        return null !== n && (e = o.createElement(h._7, {
                            position: h._14.Absolute,
                            attachBottom: !0,
                            fullWidth: !0
                        }, o.createElement(h._17, {
                            size: h._18.Small,
                            value: n,
                            mask: !0
                        }))), o.createElement("div", a.__assign({
                            onClick: t.onClickHandler,
                            onMouseEnter: t.onMouseEnterHandler,
                            onMouseLeave: t.onMouseLeaveHandler
                        }, Object(h._58)(t.props)), o.createElement(h.B, null, o.createElement(h._7, {
                            fullWidth: !0
                        }, o.createElement(h.j, {
                            overflow: !0
                        }, o.createElement("div", null, o.createElement(h._30, {
                            display: h.Q.InlineFlex,
                            position: h._14.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: .5,
                            zIndex: h._57.Default,
                            fontSize: h.U.Size6,
                            background: h.m.Overlay,
                            color: h.J.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(h._29, {
                            "data-test-selector": f,
                            icon: h._21.GlyphViews,
                            label: Object(l.d)("views", "VideoPreviewCard"),
                            value: Object(l.f)(t.props.video.viewCount)
                        })), o.createElement(h._30, {
                            display: h.Q.InlineFlex,
                            position: h._14.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            margin: .5,
                            zIndex: h._57.Default,
                            fontSize: h.U.Size6,
                            background: h.m.Overlay,
                            color: h.J.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(h._29, {
                            "data-test-selector": y,
                            icon: h._21.GlyphLength,
                            label: Object(l.d)("length", "VideoPreviewCard"),
                            value: Object(m.a)(t.props.video.lengthSeconds)
                        })), t.videoPreviewImage(), e))), o.createElement(h.C, null, o.createElement(h._7, {
                            display: h.Q.Flex,
                            flexDirection: h.S.Row,
                            flexWrap: h.T.NoWrap,
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
                        t.props.latencyTracking.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewLoad: !0
                        })
                    }, t.onPreviewImageLoadError = function(e) {
                        e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewFailToLoad: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.overrideImageInteractivity && this.props.latencyTracking.reportInteractive()
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
                    return o.createElement(h.j, {
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
                    }, o.createElement(h._1, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(h.j, {
                        ratio: h.k.Aspect16x9
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
                    return o.createElement(h._7, {
                        "data-test-selector": "game-box-art",
                        display: h.Q.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(h._1, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(h._47, {
                        display: h.Q.Block,
                        direction: h._49.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(h.D, {
                        aspect: h.k.BoxArt,
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
                    return o.createElement(h._7, {
                        display: h.Q.Flex,
                        flexDirection: h.S.Column,
                        overflow: h._10.Hidden
                    }, o.createElement(h._7, {
                        "data-test-selector": "video-title",
                        overflow: h._10.Hidden,
                        position: h._14.Relative
                    }, o.createElement(h.P, {
                        color: h.J.Base,
                        fontSize: h.U.Size5,
                        lineHeight: h._8.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(h._7, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(h.P, {
                        type: h._44.Span,
                        color: h.J.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(h._1, {
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
            _ = Object(p.d)("VideoPreviewCard")(b)
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
            return Math.floor(e / t) * n
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
                return r.createElement(d._7, {
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
            u = n("YUUt"),
            m = n.n(u),
            p = n("/SNv"),
            g = n.n(p),
            h = n("Vr3l"),
            v = n.n(h),
            f = n("PPNL"),
            y = n("EOpv"),
            b = n("LgcN"),
            _ = this,
            k = i.o.logger.withCategory("metadata-info"),
            w = function(e, t) {
                return a.__awaiter(_, void 0, void 0, function() {
                    var n, r, o, s, d, c;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return n = t.toLowerCase(), r = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, d = e.overwatch && e.overwatch.broadcasterCharacter, r && n === l.a.CounterStrike ? [4, S(r)] : [3, 2];
                            case 1:
                                return [2, a.sent()];
                            case 2:
                                return o && n === l.a.Hearthstone ? [4, E(o)] : [3, 4];
                            case 3:
                                return [2, a.sent()];
                            case 4:
                                return d && n === l.a.Overwatch ? [4, C(d)] : [3, 6];
                            case 5:
                                return [2, a.sent()];
                            case 6:
                                if (s && n === l.a.LeagueOfLegends && (c = i.o.store.getState()).directory)
                                    if (c.directory.leagueOfLegends.championsMap) {
                                        if (c.directory.leagueOfLegends.championsMap) return [2, O(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                    } else i.o.store.dispatch(Object(f.a)());
                                a.label = 7;
                            case 7:
                                return [2, null]
                        }
                    })
                })
            },
            S = function(e) {
                return a.__awaiter(_, void 0, void 0, function() {
                    var t, n, r;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, Object(b.a)()];
                            case 1:
                                return t = a.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                    name: n[e].display_name,
                                    label: Object(y.b)(y.a.CSGOSkillGroup),
                                    spriteDetails: {
                                        imageWidth: n[e].image_width,
                                        imageHeight: n[e].image_height,
                                        spriteOffsetX: n[e].sprite_x_offset,
                                        spriteOffsetY: n[e].sprite_y_offset,
                                        spriteURL: m.a
                                    }
                                }];
                            case 2:
                                return r = a.sent(), k.error(r, "Failed to load Counter-Strike skill group data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            E = function(e) {
                return a.__awaiter(_, void 0, void 0, function() {
                    var t, n, r;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, Object(b.b)()];
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
                                        spriteURL: g.a
                                    }
                                }];
                            case 2:
                                return r = a.sent(), k.error(r, "Failed to load Hearthstone class data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            C = function(e) {
                return a.__awaiter(_, void 0, void 0, function() {
                    var t, n, r, i, o, s, l, d, c, u, m, p;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, Object(b.d)()];
                            case 1:
                                for (t = a.sent(), n = void 0, r = 0, i = t; r < i.length; r++)
                                    for (o in n = i[r])
                                        if (n.hasOwnProperty(o))
                                            for (s = n[o], l = 0, d = s; l < d.length; l++)
                                                if ((c = d[l]).character === e) return (p = {})[c.character] = c, [2, {
                                                    name: (u = p)[e].display_name,
                                                    label: Object(y.b)(y.a.OverwatchCharacter),
                                                    spriteDetails: {
                                                        imageWidth: u[e].image_width,
                                                        imageHeight: u[e].image_height,
                                                        spriteOffsetX: u[e].sprite_x_offset,
                                                        spriteOffsetY: u[e].sprite_y_offset,
                                                        spriteURL: v.a
                                                    }
                                                }];
                                return [2, null];
                            case 2:
                                return m = a.sent(), k.error(m, "Failed to load Overwatch character data"), [2, null];
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
            P = (n("nUXg"), function(e) {
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
                                        return n.trys.push([1, 3, , 4]), [4, w(this.props.streamMetadata, this.props.game)];
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
                    return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? r.createElement(d._7, {
                        className: "preview-card-appendage",
                        display: d.Q.Flex
                    }, r.createElement(d._7, {
                        className: "preview-card-appendage__image-wrapper",
                        flexGrow: 0,
                        flexShrink: 0,
                        display: d.Q.Flex,
                        alignItems: d.c.Center,
                        justifyContent: d._6.End
                    }, r.createElement("div", null, r.createElement(c, {
                        game: this.props.game,
                        spriteDetails: this.state.metadataDetails.spriteDetails
                    }))), r.createElement(d._30, {
                        flexGrow: 1,
                        flexShrink: 1,
                        borderTop: !0,
                        padding: {
                            y: .5
                        },
                        margin: {
                            left: 1
                        },
                        display: d.Q.Flex,
                        overflow: d._10.Hidden
                    }, r.createElement(d._7, {
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: d._10.Hidden
                    }, r.createElement(d.P, {
                        ellipsis: !0
                    }, this.state.metadataDetails.name)), r.createElement(d._7, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(d.P, null, this.state.metadataDetails.label)))) : null
                }, t
            }(r.Component));
        var T, L = Object(o.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap
                    }
                }
            })(P),
            N = (n("YVIF"), function(e) {
                var t = r.createElement(d._30, {
                    className: "preview-card-iconic-image__wrapper",
                    borderRadius: d.s.Small,
                    overflow: d._10.Hidden
                }, r.createElement(d.j, {
                    ratio: e.aspect || d.k.BoxArt,
                    align: d.a.Center
                }, r.createElement(d.M, a.__assign({}, e.imageProps))));
                return e.linkTo && (t = r.createElement(d.N, {
                    to: e.linkTo
                }, t)), t
            }),
            I = (n("IJO1"), function(e) {
                var t = .5,
                    n = null;
                return "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = r.createElement(d._7, {
                    position: d._14.Absolute,
                    attachBottom: !0,
                    fullWidth: !0
                }, r.createElement(d._17, {
                    size: d._18.Small,
                    value: e.progressBarPercent,
                    mask: !0
                })), t = 1), r.createElement(d._7, {
                    position: d._14.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    fullWidth: !0,
                    fullHeight: !0,
                    className: "preview-card-overlay"
                }, n, r.createElement(d._7, {
                    position: d._14.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    margin: 1,
                    "data-test-selector": "top-left-selector"
                }, e.topLeft), r.createElement(d._7, {
                    position: d._14.Absolute,
                    attachTop: !0,
                    attachRight: !0,
                    margin: 1,
                    "data-test-selector": "top-right-selector"
                }, e.topRight), r.createElement(d._7, {
                    position: d._14.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-left-selector"
                }, e.bottomLeft), r.createElement(d._7, {
                    position: d._14.Absolute,
                    attachBottom: !0,
                    attachRight: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-right-selector"
                }, e.bottomRight))
            }),
            D = (n("BJwU"), function(e) {
                var t = e.icon && r.createElement(d._7, {
                    display: d.Q.Flex
                }, r.createElement(d._20, {
                    asset: e.icon,
                    width: 14,
                    height: 14
                }));
                return e.withBackground ? r.createElement(d._30, {
                    alignItems: d.c.Center,
                    background: d.m.Overlay,
                    borderRadius: d.s.Small,
                    className: "preview-card-stat",
                    color: d.J.Overlay,
                    display: d.Q.Flex,
                    fontSize: d.U.Size6,
                    justifyContent: d._6.Center
                }, t, r.createElement(d.P, null, e.value)) : r.createElement(d._30, {
                    className: "preview-card-stat",
                    color: d.J.Overlay,
                    display: d.Q.Flex,
                    padding: {
                        x: .5
                    }
                }, t, r.createElement(d.P, null, e.value))
            }),
            x = n("vKYI"),
            R = (n("jpZi"), 300),
            j = 5e3,
            A = "preview-card-thumbnail__image-selector",
            F = function(e) {
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
                            }, R)
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
                        }, j)
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
                    }), r.createElement("div", a.__assign({}, e), this.renderLoadingSpinner(), r.createElement(d._30, {
                        background: d.m.Alt2
                    }, r.createElement(d.j, {
                        ratio: this.props.aspectRatio
                    }, this.renderImage())))
                }, t.prototype.renderImage = function() {
                    var e, t, n = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                        i = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e["preview-card-thumbnail__image--hidden"] = this.shouldShowLiveVideoPreview() && this.state.isLiveVideoPreviewLoaded, e));
                    return this.shouldShowLiveVideoPreview() ? [r.createElement("div", {
                        key: "player-key",
                        className: s((t = {}, t["preview-card-thumbnail__image--hidden"] = !this.state.isLiveVideoPreviewLoaded, t))
                    }, r.createElement(x.a, {
                        channelLogin: this.props.liveChannelLogin,
                        onPlayerPlaying: this.onLivePreviewLoaded
                    })), r.createElement("div", {
                        key: "image-key",
                        className: i
                    }, r.createElement(d.M, a.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": A
                    })))] : n && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                        className: i
                    }, r.createElement(d.M, a.__assign({}, this.props.animatedImageProps, {
                        onLoad: this.onImageLoad,
                        onError: this.onImageLoadError,
                        "data-test-selector": A
                    }))) : r.createElement("div", {
                        className: i
                    }, r.createElement(d.M, a.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": A
                    })))
                }, t.prototype.renderLoadingSpinner = function() {
                    if (this.shouldShowLiveVideoPreview() && !this.state.isLiveVideoPreviewLoaded) return r.createElement(d._30, {
                        attachRight: !0,
                        attachTop: !0,
                        background: d.m.Overlay,
                        borderRadius: d.s.Small,
                        color: d.J.OverlayAlt,
                        margin: .5,
                        padding: .5,
                        position: d._14.Absolute,
                        zIndex: d._57.Above
                    }, r.createElement(d._9, {
                        fillContent: !0,
                        inheritColor: !0,
                        size: d._28.Small,
                        delay: 0
                    }))
                }, t
            }(r.Component),
            B = (n("ea7N"), function(e) {
                var t = null;
                return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                    return r.createElement(d._7, {
                        key: t,
                        "data-test-selector": "preview-card-titles__subtitle"
                    }, r.createElement(d.P, {
                        color: d.J.Alt
                    }, "string" == typeof e ? e : r.createElement(d.N, {
                        to: e.linkTo,
                        type: d.O.Inherit
                    }, e.text)))
                })), r.createElement("div", null, r.createElement(d.N, {
                    to: e.linkTo,
                    onClick: e.onClick,
                    type: d.O.Inherit,
                    "data-test-selector": "preview-card-titles__primary-link"
                }, r.createElement(d.P, {
                    type: d._44.H3,
                    fontSize: d.U.Size5,
                    lines: 1,
                    bold: !0,
                    ellipsis: !0
                }, e.title)), r.createElement(d._7, {
                    className: "preview-card-titles__subtitle-wrapper"
                }, t))
            }),
            M = n("IOwa"),
            U = n("mi6k");

        function H(e) {
            return void 0 !== e.streamType
        }

        function V(e) {
            return void 0 !== e.watchedProgressPercent
        }

        function G(e) {
            return void 0 !== e.clipCreatedByChannelLogin
        }! function(e) {
            e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
        }(T || (T = {}));
        var W = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return r.createElement("div", {
                    className: "preview-card"
                }, r.createElement(d._7, {
                    position: d._14.Relative
                }, r.createElement(d.N, {
                    to: this.props.linkTo,
                    onClick: this.props.onClick
                }, r.createElement(F, {
                    staticImageProps: this.props.thumbnailImageProps,
                    animatedImageProps: V(this.props) && this.props.animatedImageProps || void 0,
                    liveChannelLogin: H(this.props) && this.props.enableLivePreview ? this.props.channelLogin : void 0
                }), this.renderOverlay())), r.createElement(d._7, {
                    display: d.Q.Flex,
                    flexWrap: d.T.NoWrap,
                    margin: {
                        top: 1
                    }
                }, r.createElement(d._7, {
                    flexGrow: 0,
                    flexShrink: 0,
                    padding: {
                        right: 1
                    }
                }, this.renderIconicImage()), r.createElement(d._7, {
                    flexGrow: 1,
                    flexShrink: 1,
                    overflow: d._10.Hidden
                }, this.renderTitles())), this.renderAppendages())
            }, t.prototype.renderOverlay = function() {
                return H(this.props) ? r.createElement(I, {
                    topLeft: r.createElement(M.a, {
                        type: this.props.streamType,
                        hosting: !!this.props.hostedByChannelLogin
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(D, {
                        value: Object(i.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                            viewerCount: this.props.currentViewerCount
                        }, "VideoPreviewCard")
                    }),
                    bottomRight: void 0
                }) : V(this.props) ? r.createElement(I, {
                    topLeft: r.createElement(D, {
                        value: Object(U.a)(this.props.durationInSeconds),
                        icon: d._21.GlyphArrRight,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(D, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: r.createElement(D, {
                        value: Object(i.c)(new Date(this.props.datePublished), "medium")
                    }),
                    progressBarPercent: this.props.watchedProgressPercent
                }) : G(this.props) ? r.createElement(I, {
                    topLeft: r.createElement(D, {
                        value: Object(U.a)(this.props.durationInSeconds),
                        icon: d._21.Clip,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: r.createElement(D, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: r.createElement(D, {
                        value: Object(i.c)(new Date(this.props.datePublished), "medium")
                    })
                }) : void 0
            }, t.prototype.getViewCountLabel = function() {
                return V(this.props) || G(this.props) ? Object(i.d)("{viewerCount, plural, one {# view} other {# views}}", {
                    viewerCount: this.props.viewCount
                }, "VideoPreviewCard") : ""
            }, t.prototype.renderIconicImage = function() {
                return this.props.context === T.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameTitleLinkTo ? r.createElement(N, {
                    imageProps: this.props.gameBoxArtImageProps,
                    linkTo: this.props.gameTitleLinkTo,
                    aspect: d.k.BoxArt
                }) : r.createElement(N, {
                    imageProps: this.props.channelImageProps,
                    linkTo: this.props.channelLoginLinkTo,
                    aspect: d.k.Aspect1x1
                })
            }, t.prototype.renderTitles = function() {
                var e = [{
                    text: this.props.channelLogin,
                    linkTo: this.props.channelLoginLinkTo
                }];
                return G(this.props) ? e.push({
                    text: Object(i.d)("Clipped by {userName}", {
                        userName: this.props.clipCreatedByChannelLogin
                    }, "VideoPreviewCard"),
                    linkTo: this.props.clipCreatedByChannelLoginLinkTo
                }) : this.props.context !== T.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && e.push({
                    text: this.props.gameTitle,
                    linkTo: this.props.gameTitleLinkTo
                }), r.createElement(B, {
                    title: this.props.title,
                    linkTo: this.props.linkTo,
                    subtitles: e
                })
            }, t.prototype.renderAppendages = function() {
                if (this.props.playerMetadata && this.props.playerMetadataGame) return r.createElement(L, {
                    streamMetadata: this.props.playerMetadata,
                    game: this.props.playerMetadataGame
                })
            }, t
        }(r.Component);
        n.d(t, "b", function() {
            return T
        }), n.d(t, "a", function() {
            return W
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
//# sourceMappingURL=pages.browse-4d4903868619fc12450c217f6810e621.js.map