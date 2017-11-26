webpackJsonp([45], {
    1001: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "d", function() {
            return a
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "b", function() {
            return s
        });
        var i, r = "carousel-player__main-description",
            a = "carousel-player-left-button",
            o = "carousel-player-right-button";
        ! function(e) {
            e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
        }(i || (i = {}));
        var s;
        ! function(e) {
            e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
        }(s || (s = {}))
    },
    1029: function(e, t, n) {
        "use strict";
        var i = n(14),
            r = n(1310),
            a = n(1048),
            o = function(e, t) {
                var n = s(e);
                Object(a.c)(i.SpadeEventType.FeedCardImpression, n, t)
            },
            s = function(e) {
                var t = e.item.reasons[0] ? Object(r.b)(e.item.reasons[0].reason) : "";
                switch (e.item.content.__typename) {
                    case "Clip":
                        return {
                            card_author_id: e.item.content.broadcaster.id,
                            display_reason: t,
                            feed_presentation: e.feedPresentation
                        };
                    case "Post":
                        return {
                            card_author_id: e.item.content.author.id,
                            display_reason: t,
                            feed_presentation: e.feedPresentation
                        };
                    case "Stream":
                        return {
                            card_author_id: e.item.content.broadcaster.id,
                            display_reason: t,
                            feed_presentation: e.feedPresentation
                        };
                    case "Video":
                        return {
                            card_author_id: e.item.content.owner.id,
                            display_reason: t,
                            feed_presentation: e.feedPresentation
                        };
                    default:
                        return {
                            card_author_id: "",
                            display_reason: "",
                            feed_presentation: ""
                        }
                }
            },
            l = n(1127),
            u = function(e, t) {
                var n = c(e.embed);
                Object(a.c)(i.SpadeEventType.FeedCardEmbedImpression, n, t)
            },
            c = function(e) {
                switch (e.__typename) {
                    case "Clip":
                        var t = e;
                        return {
                            embed_entity: l.a + ":" + t.id,
                            embed_id: t.id,
                            embed_type: l.a,
                            media_type: "video"
                        };
                    case "PhotoOEmbed":
                        var n = e;
                        return {
                            embed_entity: l.b + ":" + n.inputURL,
                            embed_id: n.inputURL,
                            embed_type: l.b,
                            media_type: "photo"
                        };
                    case "Stream":
                        var i = e;
                        return {
                            embed_entity: l.d + ":" + i.id,
                            embed_id: i.id,
                            embed_type: l.d,
                            media_type: "video"
                        };
                    case "Video":
                        var r = e;
                        return {
                            embed_entity: l.e + ":" + r.id,
                            embed_id: r.id,
                            embed_type: l.e,
                            media_type: "video"
                        };
                    case "VideoOEmbed":
                        var a = e;
                        return {
                            embed_entity: l.b + ":" + a.inputURL,
                            embed_id: a.inputURL,
                            embed_type: l.b,
                            media_type: "video"
                        };
                    default:
                        return {
                            embed_entity: "",
                            embed_id: "",
                            embed_type: "",
                            media_type: ""
                        }
                }
            },
            d = function(e, t) {
                var n = p(e.embed);
                Object(a.c)(i.SpadeEventType.FeedCardEmbedPlay, n, t)
            },
            p = function(e) {
                switch (e.__typename) {
                    case "Clip":
                        var t = e;
                        return {
                            action: "play",
                            embed_entity: l.a + ":" + t.id,
                            embed_id: t.id,
                            embed_type: l.a,
                            media_type: "video"
                        };
                    case "Stream":
                        var n = e;
                        return {
                            action: "play",
                            embed_entity: l.d + ":" + n.id,
                            embed_id: n.id,
                            embed_type: l.d,
                            media_type: "video"
                        };
                    case "Video":
                        var i = e;
                        return {
                            action: "play",
                            embed_entity: l.e + ":" + i.id,
                            embed_id: i.id,
                            embed_type: l.e,
                            media_type: "video"
                        };
                    case "VideoOEmbed":
                        var r = e;
                        return {
                            action: "play",
                            embed_entity: l.b + ":" + r.inputURL,
                            embed_id: r.inputURL,
                            embed_type: l.b,
                            media_type: "video"
                        };
                    default:
                        return {
                            action: "",
                            embed_entity: "",
                            embed_id: "",
                            embed_type: "",
                            media_type: ""
                        }
                }
            },
            m = (n(1309), function(e, t) {
                var n = Object(l.f)(e.entity),
                    r = {
                        action: e.action,
                        reaction_int: e.reactionInt,
                        reaction_text: e.reactionText,
                        target_entity: e.entity,
                        target_id: n.id,
                        target_type: n.type
                    };
                Object(a.c)(i.SpadeEventType.FeedReaction, r, t)
            });
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return u
        }), n.d(t, "c", function() {
            return d
        }), n.d(t, !1, function() {}), n.d(t, "d", function() {
            return m
        })
    },
    1031: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        }
        var r = n(8),
            a = n(0),
            o = n(1),
            s = n(2),
            l = n(111),
            u = n(415),
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            p = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = s.i.withCategory("ad-slot"), n.createSlot = function(e) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var t, n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = i.sent(), Object(u.h)(t.getSlotElementId()), this.setState({
                                            slot: t
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Unable to create ad slot", {
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
                            if (n.props.slotID === u.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === u.b.directory.banner) {
                                var i = n.slotRef.querySelector(c);
                                return void(i && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === u.b.directory.rectangle) {
                                var i = n.slotRef.querySelector(d);
                                return void(i && 1 !== i.clientWidth && n.setState({
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
                    u.g.addListener(u.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), u.g.removeListener(u.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = a.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), o.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(o.Component),
            m = p,
            f = Object(r.a)(i)(m);
        n.d(t, "a", function() {
            return f
        })
    },
    1033: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = [];
            return e.forEach(function(e) {
                t[e.from] = {
                    startIndex: e.from,
                    endIndex: e.to + 1,
                    data: {
                        images: {
                            themed: !1,
                            sources: {
                                "1x": Object(u.e)(e.emoteID, 1),
                                "2x": Object(u.e)(e.emoteID, 2),
                                "4x": Object(u.e)(e.emoteID, 4)
                            }
                        }
                    }
                }
            }), t
        }

        function r(e, t, n) {
            var r = i(e.body.emotes),
                a = e.badges.reduce(function(e, t) {
                    return e[t.setID] = t.version, e
                }, {});
            return {
                type: l.a.Post,
                id: e.id,
                badges: a,
                bits: e.bitsUsed,
                timestamp: 0,
                deleted: !1,
                user: o.__assign({
                    userID: e.author.id,
                    userLogin: e.author.login,
                    userType: s.a.User,
                    color: e.authorColor
                }, Object(c.a)(e.authorName, e.author.login)),
                messageParts: Object(u.f)(e.body.content, r, e.bitsUsed, t, n, e.authorName)
            }
        }

        function a(e) {
            var t = "ChatMessage:" + e.tags.msg_id;
            return {
                __typename: "ChatMessage",
                "Symbol(id)": t,
                id: e.tags.msg_id,
                authorName: e.tags.display_name,
                authorColor: e.tags.color,
                author: {
                    __typename: "User",
                    "Symbol(id)": "User:" + e.user_id,
                    id: e.user_id,
                    login: e.username
                },
                body: {
                    __typename: "MessageBody",
                    "Symbol(id)": "$" + t + ".body",
                    content: e.message,
                    emotes: e.tags.emotes.map(function(e, n) {
                        return {
                            __typename: "EmbeddedEmote",
                            "Symbol(id)": t + ".body.emotes." + n,
                            emoteID: e.id.toString(),
                            from: e.start,
                            to: e.end,
                            setID: e.set
                        }
                    })
                },
                badges: e.tags.badges.map(function(e, n) {
                    return {
                        __typename: "Badge",
                        "Symbol(id)": t + ".badges." + n,
                        setID: e.badge_set_id,
                        version: e.badge_set_version
                    }
                }),
                bitsUsed: e.bits_used
            }
        }
        t.b = i, t.a = r, t.c = a;
        var o = n(0),
            s = n(931),
            l = n(914),
            u = n(135),
            c = n(412)
    },
    1034: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "embeddedEmote"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "EmbeddedEmote"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "emoteID"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "setID"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "from"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "to"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 74
            }
        };
        n.loc.source = {
            body: "fragment embeddedEmote on EmbeddedEmote {\n  emoteID\n  setID\n  from\n  to\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1047: function(e, t, n) {
        "use strict";

        function i() {
            return function(e) {
                return function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            impressionEventFired: !1,
                            impressionEvent: function(e) {
                                return {}
                            }
                        }, e.triggerImpressionEvent = function() {
                            e.state.impressionEvent(e.context.feedTrackingProps), e.setState({
                                impressionEventFired: !0
                            })
                        }, e.setImpressionEvent = function(t) {
                            e.setState({
                                impressionEvent: t
                            })
                        }, e.setRef = function(t) {
                            return e.element = t
                        }, e
                    }
                    return o.__extends(n, t), n.prototype.componentDidMount = function() {
                        if (this.context.feedImpressionSettings && this.context.feedImpressionSettings.autoReport) return this.triggerImpressionEvent();
                        var e = this.context,
                            t = e.registerReceiver;
                        if (!t) return void u.i.warn("<FeedItem /> initialized missing a <ScrollableArea /> provider");
                        this.unregister = t(this)
                    }, n.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, n.prototype.render = function() {
                        var t = {
                            impressionTracking: {
                                onImpression: this.setImpressionEvent
                            }
                        };
                        return l.createElement("div", {
                            ref: this.setRef
                        }, l.createElement(e, o.__assign({}, this.props, t)))
                    }, n.prototype.checkVisible = function(e) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var t, n;
                            return o.__generator(this, function(i) {
                                return this.element ? (t = this.element.getBoundingClientRect(), n = t.top < e.bottom && t.bottom > e.top, n && !this.state.impressionEventFired && this.triggerImpressionEvent(), [2]) : [2]
                            })
                        })
                    }, n.contextTypes = {
                        registerReceiver: s.func,
                        feedTrackingProps: s.object,
                        feedImpressionSettings: s.object
                    }, n
                }(l.Component)
            }
        }

        function r(e) {
            return function(t) {
                return function(n) {
                    function i() {
                        var t = null !== n && n.apply(this, arguments) || this;
                        return t.getChildContext = function() {
                            var n = e(t.props);
                            return {
                                feedTrackingProps: o.__assign({}, t.context.feedTrackingProps, n)
                            }
                        }, t
                    }
                    return o.__extends(i, n), i.prototype.render = function() {
                        var e = {
                            feedTrackingProps: this.getChildContext().feedTrackingProps
                        };
                        return l.createElement(t, o.__assign({}, this.props, e))
                    }, i.contextTypes = {
                        feedTrackingProps: s.object
                    }, i.childContextTypes = {
                        feedTrackingProps: s.object
                    }, i
                }(l.Component)
            }
        }
        var a = n(1048),
            o = n(0),
            s = n(15),
            l = n(1),
            u = n(2);
        n.d(t, "a", function() {
            return a.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return a.b
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "d", function() {
            return r
        })
    },
    1048: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.content.id;
            switch (e.content.__typename) {
                case "Clip":
                    var n = e.content;
                    return {
                        type: s.a,
                        id: n.slug
                    };
                case "Post":
                    return Object(s.f)(t);
                case "Stream":
                    var i = e.content;
                    return {
                        type: s.d,
                        id: i.broadcaster.id + ":" + t
                    };
                case "Video":
                    return {
                        type: s.e,
                        id: t
                    };
                default:
                    return {
                        type: "",
                        id: ""
                    }
            }
        }
        n.d(t, "a", function() {
            return r
        }), t.b = i, n.d(t, "c", function() {
            return l
        });
        var r, a = n(1288),
            o = (n.n(a), n(2)),
            s = n(1127);
        ! function(e) {
            e.Create = "create", e.Remove = "remove"
        }(r || (r = {}));
        var l = function(e, t, n) {
            o.m.track(e, Object(a.merge)(t, n))
        }
    },
    1055: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "feedUser"
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "displayName"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "login"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 85
            }
        };
        n.loc.source = {
            body: "fragment feedUser on User {\n  id\n  displayName\n  login\n  profileImageURL(width:70)\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1056: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(I.d)(e)
            }
        }

        function r(e) {
            return Object(P.bindActionCreators)({
                login: function() {
                    return Object(O.f)(w.a.ReportHoster)
                },
                showReportUserModal: function(e) {
                    var t = c.__rest(e, []);
                    return Object(N.d)(U.a, t)
                }
            }, e)
        }

        function a() {
            return !!window.Twitch && !!window.Twitch.Player
        }

        function o(e) {
            return {
                theatreModeEnabled: e.ui.theatreModeEnabled,
                isLoggedIn: Object(I.d)(e),
                authToken: Object(I.a)(e)
            }
        }

        function s(e) {
            return Object(P.bindActionCreators)({
                enableTheatreMode: D.k,
                disableTheatreMode: D.j
            }, e)
        }

        function l(e, t, n) {
            if (!e.collectionID && e.videoID) return void t.push("/videos/" + e.videoID);
            if (e.collectionID && e.videoID) {
                if (n && n.currentVideoID && n.currentCollectionID && n.currentVideoID === e.videoID && n.currentCollectionID === e.collectionID) return;
                return void t.push("/videos/" + e.videoID + "?collection=" + e.collectionID)
            }
            if (e.collectionID && !e.videoID) return void t.push("/collections/" + e.collectionID);
            f.i.withCategory("video-player").error(new Error("No collection or video specified from the emitted player transition event."), "No collection or video specified from the emitted player transition event.")
        }
        var u, c = n(0),
            d = n(4),
            p = n(1),
            m = n(12),
            f = n(2),
            h = n(275),
            g = n(64),
            b = n(37),
            v = n(46),
            y = n(14),
            S = n(921),
            k = n(919),
            _ = n(934),
            E = n(3),
            T = (n(1274), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportHosterClick = function() {
                        t.props.isLoggedIn ? t.props.showReportUserModal({
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentType: k.a.User,
                                targetUserID: t.props.hostChannelID
                            },
                            title: Object(f.d)("Report {channelDisplayName}", {
                                channelDisplayName: t.props.hostChannelDisplayName
                            }, "VideoPlayerHostingUI")
                        }) : t.props.login()
                    }, t.handleReportModalClose = function(e) {
                        (e === S.b.MutationError || e === S.b.Success) && t.props.history.push("/")
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = !!this.props.hostedChannelDisplayName,
                        t = d("video-player-hosting-ui__header", (i = {}, i["video-player-hosting-ui__header--visible"] = e, i["video-player-hosting-ui__header--hidden"] = !e, i)),
                        n = d("video-player-hosting-ui__footer", (r = {}, r["video-player-hosting-ui__footer--visible"] = e, r["video-player-hosting-ui__footer--hidden"] = !e, r));
                    return p.createElement(E.U, {
                        className: "video-player-hosting-ui__container " + Object(v.b)(b.a.Dark)
                    }, p.createElement(m.a, {
                        key: "hosting-ui-header",
                        className: "video-player-hosting-ui__link",
                        to: {
                            pathname: "/" + this.props.hostedChannelLogin,
                            state: {
                                medium: y.PageviewMedium.Channel,
                                content: y.PageviewContent.Host
                            }
                        },
                        "data-a-target": "hosting-ui-link",
                        "data-test-selector": "video-player-hosting-ui__header"
                    }, e && this.renderHeader(t)), p.createElement("span", {
                        key: "video-player"
                    }, this.props.children), p.createElement(E._17, {
                        key: "hosting-ui-footer",
                        className: n,
                        padding: 1,
                        background: E.m.Base,
                        zIndex: E._38.Above,
                        position: E._2.Relative,
                        "data-test-selector": "video-player-hosting-ui__footer",
                        "data-a-target": "hosting-ui-footer"
                    }, e && this.renderFooter()));
                    var i, r
                }, t.prototype.renderHeader = function(e) {
                    return p.createElement(E._17, {
                        className: e,
                        display: E.H.Flex,
                        alignItems: E.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        background: E.m.Base,
                        "data-a-target": "hosting-ui-header"
                    }, p.createElement(E.U, {
                        className: "video-player-hosting-ui__avatar-container"
                    }, p.createElement(E.l, {
                        imageSrc: this.props.hostedChannelProfileImageURL || "",
                        size: 30,
                        imageAlt: Object(f.d)("Hosted Channel {hostedChannelDisplayName}'s Avatar", {
                            hostedChannelDisplayName: this.props.hostedChannelDisplayName || ""
                        }, "VideoPlayerHostingUI")
                    })), p.createElement(E._17, {
                        margin: {
                            left: 1
                        },
                        fontSize: E.L.Size5,
                        color: E.F.Base
                    }, Object(f.d)("Hosting", "VideoPlayerHostingUI"), " ", p.createElement(E._17, {
                        className: "video-player-hosting-ui__channel-name",
                        color: E.F.Link,
                        "data-a-target": "hosting-ui-channel-name"
                    }, this.props.hostedChannelDisplayName)))
                }, t.prototype.renderFooter = function() {
                    return p.createElement(E.U, {
                        padding: {
                            y: .5
                        },
                        display: E.H.Flex,
                        justifyContent: E.T.Between
                    }, p.createElement(E.U, {
                        display: E.H.Flex
                    }, p.createElement(E.U, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(h.a, {
                        "data-a-target": "hosting-ui-follow-button",
                        channelName: this.props.hostedChannelLogin || "",
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelLogin: this.props.hostChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        isHostedFollow: !0,
                        balloonDirection: E.q.BottomLeft
                    })), p.createElement(E.U, null, p.createElement(_.b, {
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        "data-a-target": "hosting-ui-subscribe-button"
                    }))), p.createElement(g.a, null, p.createElement(E.v, {
                        type: E.w.Hollow,
                        ariaLabel: Object(f.d)("More options", "HostingUI"),
                        icon: E._9.More,
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-more-button"
                    }), p.createElement(E.p, {
                        direction: E.q.TopRight,
                        "data-a-target": "hosting-ui-more-balloon"
                    }, p.createElement(E.U, {
                        padding: {
                            y: 1
                        }
                    }, p.createElement(E.S, {
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-report-button"
                    }, p.createElement(E.U, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, Object(f.d)("Report {hostChannelDisplayName}", {
                        hostChannelDisplayName: this.props.hostChannelDisplayName
                    }, "VideoPlayerHostingUI")))))))
                }, t
            }(p.Component)),
            C = n(8),
            P = n(11),
            w = n(51),
            N = n(50),
            O = n(35),
            I = n(19),
            U = n(928),
            R = Object(C.a)(i, r)(Object(m.f)(T)),
            D = n(69),
            F = n(427),
            x = n(456),
            j = n(21),
            L = n(998),
            A = n(6);
        ! function(e) {
            e.LoadStart = "loadstart", e.Error = "error", e.LoadedMetadata = "loadedmetadata", e.CanPlay = "canplay", e.Playing = "playing", e.Waiting = "waiting", e.Seeking = "seeking", e.Seeked = "seeked", e.Ended = "ended", e.DurationChange = "durationchange", e.TimeUpdate = "timeupdate", e.Play = "play", e.Pause = "pause", e.VolumeChange = "volumechange", e.RateChange = "ratechange"
        }(u || (u = {}));
        var M;
        ! function(e) {
            e.PlayerInit = "init", e.ContentShowing = "contentShowing", e.PlaybackStatistics = "playbackStatistics", e.ChansubRequired = "chansubRequired", e.VideoFailure = "videoFailure", e.Formats = "videoFormats", e.ABSStreamFormatChange = "abs_stream_format_change", e.FormatChanged = "videoFormatChanged", e.TimeChange = "timeChange", e.BufferChange = "bufferChange", e.SegmentChange = "segmentchange", e.UsherFailError = "usherFail", e.CaptionUpdate = "captions", e.SeekFailed = "seekfailed", e.VariantSwitchRequest = "variantSwitchRequested", e.ViewersChange = "viewerschange", e.StreamLoaded = "streamLoaded", e.VideoLoaded = "videoLoaded", e.VideoPaused = "videoPaused", e.QualityChange = "qualitychange", e.Online = "online", e.Offline = "offline", e.Restricted = "restricted", e.CastingChange = "castingchange", e.TheatreChange = "theatrechange", e.MidrollRequested = "midrollrequested", e.ManifestExtraInfo = "manifestExtraInfo", e.TransitionToCollectionVOD = "transitionToCollectionVod", e.TransitionToRecommendedVOD = "transitionToRecommendedVod", e.StitchedAdStart = "stitchedadstart", e.StichedAdEnd = "stitchedadend", e.PersistenPlayerToggle = "persistentPlayerEnableToggle", e.StatsUpdate = "statsupdate", e.PromptLoginModal = "prompt login modal", e.OpenStream = "openStream", e.PlayerReady = "ready", e.FullscreenChange = "fullscreenchange"
        }(M || (M = {}));
        var V, G = (n(1275), n(978));
        ! function(e) {
            e.Embed = "embed", e.Frontpage = "frontpage", e.Site = "site"
        }(V || (V = {}));
        var B = {
                allowfullscreen: !0,
                branding: !1,
                channelInfo: !1,
                controls: !0,
                height: "100%",
                playsinline: !0,
                player: V.Site,
                showInfo: !1,
                showtheatre: !1,
                trackingProperties: {
                    client_app: "twilight"
                },
                width: "100%",
                oauth_token: ""
            },
            z = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = f.i.withCategory("video-player"), n.checkPlayerDependencyStatus = function() {
                        a() ? (n.setState({
                            canInitializePlayer: !0
                        }), n.checkPlayerDependencyAnimationFrame = null) : n.checkPlayerDependencyAnimationFrame = requestAnimationFrame(n.checkPlayerDependencyStatus)
                    }, n.attachRef = function(e) {
                        return n.playerRef = e
                    }, n.onOpenStream = function() {
                        n.props.playerTypeOverride === V.Frontpage && (n.props.channelLogin ? f.n.history.push("/" + n.props.channelLogin) : n.props.vodID ? f.n.history.push("/videos/" + n.props.vodID) : n.props.collectionID && f.n.history.push("/collections/" + n.props.collectionID))
                    }, n.onPlayerReady = function() {
                        n.player && (n.logger.debug("Ready"), n.props.latencyTracking.reportInteractive(), n.hasPlayed = !1, n.props.latencyTracking.reportCustomEvent(n.playerLoaded), n.setState({
                            playerInitialized: !0
                        }, function() {
                            return n.updatePlayerTrackingData(n.props.hostChannel)
                        }))
                    }, n.onPlayerPlay = function() {
                        n.logger.debug("Play"), n.reportPlayerPlayed()
                    }, n.onStreamStatusOnline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(M.Online)
                    }, n.onStreamStatusOffline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(M.Offline)
                    }, n.onTheatreChange = function(e) {
                        e ? (n.logger.debug("Theatre Entered"), n.props.enableTheatreMode && !n.props.theatreModeEnabled && n.props.enableTheatreMode()) : (n.logger.debug("Theatre Exited"), n.props.disableTheatreMode && n.props.theatreModeEnabled && n.props.disableTheatreMode())
                    }, n.onFullScreenChange = function() {
                        n.player && (n.logger.debug("Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && n.setState({
                            isFullScreen: n.player.fullscreen
                        }))
                    }, n.onSeek = function() {
                        n.props.onSeek && n.player && n.props.onSeek(n.player.getCurrentTime())
                    }, n.onTimeUpdate = function() {
                        n.props.onVideoTimeChange && n.player && n.props.onVideoTimeChange(n.player.getCurrentTime())
                    }, n.onTransitionToCollectionVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(L.a)(e.vodId)), e.collectionId && (t.collectionID = e.collectionId), n.props.onNavigationRequest(t)
                        }
                    }, n.onTransitionToRecommendedVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(L.a)(e.vodId)), n.props.onNavigationRequest(t)
                        }
                    }, n.updatePlayerTrackingData = function(e) {
                        if (n.state.playerInitialized && n.player) {
                            var t = f.m.getLastPageview();
                            t ? n.logger.debug("Tracking data updated.", {
                                pageviewProperties: t,
                                hostChannel: e
                            }) : n.logger.debug("pageviewProperties not found; only hosting status updated", {
                                pageviewProperties: t,
                                hostChannel: e
                            }), n.player.setTrackingProperties(c.__assign({}, t, {
                                host_channel: e
                            }))
                        }
                    }, n.updatePlayerType = function() {
                        var e = n.props.playerTypeOverride || B.player;
                        n.player && n.playerType !== e && (n.player.setPlayerType(e), n.playerType = e)
                    }, n.maybeRecordClip = function() {
                        n.player && n.state.playerInitialized && n.player.recordClip()
                    }, n.playerCreated = n.registerCreatedEvent(), n.playerLoaded = n.registerLoadedEvent(), n.playerPlayed = n.registerPlayedEvent(), n.state = {
                        canInitializePlayer: a(),
                        playerInitialized: !1,
                        isFullScreen: !1
                    }, n.playerType = t.playerTypeOverride || B.player, n.lastSetChannel = t.channelLogin, n
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (this.props.latencyTracking.reportCustomEvent(this.playerCreated), this.bindHotKeys(), this.state.canInitializePlayer ? this.initializePlayer() : this.checkPlayerDependencyAnimationFrame = window.requestAnimationFrame(this.checkPlayerDependencyStatus), f.m.eventEmitter.addListener(y.SpadeEventType.Pageview, function() {
                            return e.updatePlayerTrackingData(e.props.hostChannel)
                        }), window.__playerScriptChunk && !t.tagInjected) {
                        this.logger.debug("Loading player chunk after page loaded");
                        var n = document.createElement("script");
                        n.crossOrigin = "anonymous", n.src = window.__jqueryChunk, n.onload = function() {
                            var e = document.createElement("script");
                            e.async = !0, e.crossOrigin = "anonymous", e.src = window.__playerScriptChunk, document.body.appendChild(e)
                        }, document.body.appendChild(n);
                        var i = document.createElement("link");
                        i.href = window.__playerStyleChunk, i.media = "screen", i.rel = "stylesheet", i.type = "text/css", document.body.appendChild(i), t.tagInjected = !0
                    }
                }, t.prototype.componentWillUpdate = function(e, t) {
                    if (!this.state.canInitializePlayer && t.canInitializePlayer) return void this.initializePlayer();
                    if (t.canInitializePlayer && t.playerInitialized) {
                        if (this.updatePlayerTrackingData(e.hostChannel), this.updatePlayerType(), this.player && e.theatreModeEnabled !== this.player.getTheatre() && this.player.setTheatre(e.theatreModeEnabled), this.player && e.channelLogin && e.channelLogin !== this.lastSetChannel) return this.logger.debug("Setting Channel: ", e.channelLogin), this.player.setChannel(e.channelLogin), this.lastSetChannel = e.channelLogin, void f.m.setVideoPlayerTrackingData({
                            vodID: void 0
                        });
                        var n = e.collectionID && this.props.collectionID !== e.collectionID,
                            i = e.vodID && this.props.vodID !== e.vodID;
                        if (n || i) {
                            var r = e.vodID ? Object(G.a)(e.vodID) : "";
                            if ("" !== r && f.m.setVideoPlayerTrackingData({
                                    vodID: e.vodID
                                }), !this.player) return;
                            return void(n || e.collectionID && i ? this.player.setCollection(e.collectionID, r, e.nextVideoOffset) : this.player.setVideo(r, e.nextVideoOffset))
                        }
                        void 0 !== e.nextVideoOffset && e.nextVideoOffset >= 0 && this.props.nextVideoOffset !== e.nextVideoOffset && this.player && this.player.setCurrentTime(e.nextVideoOffset)
                    }
                }, t.prototype.render = function() {
                    var e = d("video-player", {
                        "video-player--theatre": this.props.theatreModeEnabled,
                        "video-player--logged-in": this.props.isLoggedIn,
                        "video-player--fullscreen": this.state.isFullScreen
                    });
                    return p.createElement("div", {
                        className: d(e),
                        "data-test-selector": "video-player"
                    }, p.createElement("div", {
                        className: "video-player__container",
                        ref: this.attachRef
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.unbindHotKeys(), this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), this.maybeDetachFromWindow(), this.props.onDestroy && this.props.onDestroy(), this.player && (f.m.eventEmitter.removeListener(y.SpadeEventType.Pageview, this.updatePlayerTrackingData), this.player.removeEventListener(M.PlayerReady, this.onPlayerReady), this.player.removeEventListener(M.Online, this.onStreamStatusOnline), this.player.removeEventListener(M.Offline, this.onStreamStatusOffline), this.player.removeEventListener(u.Ended, this.onStreamStatusOffline), this.player.removeEventListener(u.Play, this.onPlayerPlay), this.player.removeEventListener(M.TheatreChange, this.onTheatreChange), this.player.removeEventListener(M.TransitionToCollectionVOD, this.onTransitionToCollectionVod), this.player.removeEventListener(M.FullscreenChange, this.onFullScreenChange), this.player.removeEventListener(u.Seeked, this.onSeek), this.player.removeEventListener(u.TimeUpdate, this.onTimeUpdate), this.player.removeEventListener(M.OpenStream, this.onOpenStream), F.extensionService.unregisterPlayer(), this.player.destroy()), f.m.setVideoPlayerTrackingData({
                        vodID: void 0
                    })
                }, t.prototype.initializePlayer = function() {
                    var e = c.__assign({}, B, {
                        showtheatre: !this.props.disableTheatreButton
                    });
                    this.props.playerTypeOverride && (e.player = this.props.playerTypeOverride, this.playerType = this.props.playerTypeOverride), this.props.channelLogin && (e.channel = this.props.channelLogin, this.lastSetChannel = this.props.channelLogin), this.props.collectionID && (e.collection = this.props.collectionID), this.props.vodID && (e.video = Object(G.a)(this.props.vodID), f.m.setVideoPlayerTrackingData({
                        vodID: this.props.vodID
                    })), this.props.nextVideoOffset && (e.time = Object(G.b)(this.props.nextVideoOffset)), e.oauth_token = this.props.authToken || "", this.logger.debug("Initializing", e);
                    var t = new window.Twitch.Player(this.playerRef, e);
                    this.player = t, t.addEventListener(M.PlayerReady, this.onPlayerReady), t.addEventListener(M.Online, this.onStreamStatusOnline), t.addEventListener(M.Offline, this.onStreamStatusOffline), t.addEventListener(u.Ended, this.onStreamStatusOffline), t.addEventListener(u.Play, this.onPlayerPlay), t.addEventListener(u.Seeked, this.onSeek), t.addEventListener(u.TimeUpdate, this.onTimeUpdate), t.addEventListener(M.TheatreChange, this.onTheatreChange), t.addEventListener(M.FullscreenChange, this.onFullScreenChange), t.addEventListener(M.TransitionToCollectionVOD, this.onTransitionToCollectionVod), t.addEventListener(M.TransitionToRecommendedVOD, this.onTransitionToRecommendedVod), t.addEventListener(M.OpenStream, this.onOpenStream), F.extensionService.registerPlayer(this.player), this.props.onInit && this.props.onInit(t), this.maybeAttachToWindow(this.props)
                }, t.prototype.registerCreatedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent("Player", "player-created", "Created", 1e3)
                }, t.prototype.registerLoadedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent("Player", "player-loaded", "Init", 2500)
                }, t.prototype.registerPlayedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent("Player", "player-played", "First Frame", 4e3)
                }, t.prototype.reportPlayerPlayed = function() {
                    this.hasPlayed || (this.hasPlayed = !0, this.playerPlayed && this.props.latencyTracking.reportCustomEvent(this.playerPlayed))
                }, t.prototype.maybeAttachToWindow = function(e) {
                    j.parse(window.location.search).attachPlayer && e.attachToWindow && this.player && (window.player = this.player)
                }, t.prototype.maybeDetachFromWindow = function() {
                    window.player = void 0
                }, t.prototype.bindHotKeys = function() {
                    x.bind("alt+x", this.maybeRecordClip)
                }, t.prototype.unbindHotKeys = function() {
                    x.unbind("alt+x")
                }, t.tagInjected = !1, t
            }(p.Component),
            W = Object(A.c)("VideoPlayer")(z),
            H = Object(C.a)(o, s)(W);
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
            return "video-player-hosting-ui__header--hidden"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__header--visible"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__footer--hidden"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__footer--visible"
        }), n.d(t, !1, function() {
            return T
        }), n.d(t, "a", function() {
            return R
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return V
        }), n.d(t, "c", function() {
            return H
        }), n.d(t, "d", function() {
            return l
        })
    },
    1120: function(e, t, n) {
        "use strict";
        var i, r = n(0),
            a = n(1),
            o = n(2),
            s = n(419),
            l = n(6),
            u = n(3),
            c = (n(1399), "embed-overlay");
        ! function(e) {
            e[e.Clip = 0] = "Clip", e[e.Video = 1] = "Video", e[e.Stream = 2] = "Stream", e[e.VideoOEmbed = 3] = "VideoOEmbed"
        }(i || (i = {}));
        var d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showOverlay: !0
                    }, t.getOverlayComponent = function() {
                        var e = t.props,
                            n = e.createdAt,
                            r = e.lengthSeconds,
                            l = e.thumbnailURL,
                            d = e.type,
                            p = e.viewCount,
                            m = r && r > 0 ? Object(s.a)(r) : "";
                        return a.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": c
                        }, a.createElement(u.j, {
                            ratio: u.k.Aspect16x9
                        }, a.createElement(u.U, null, a.createElement(u.P, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: u._2.Absolute
                        }, a.createElement("img", {
                            src: l
                        })), a.createElement(u.U, {
                            className: "embed-card__overlay",
                            position: u._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, a.createElement(u.U, {
                            display: u.H.Flex,
                            justifyContent: u.T.Center,
                            position: u._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, a.createElement(u._8, {
                            asset: u._9.Play,
                            width: 50,
                            height: 50
                        })), a.createElement(u.U, {
                            position: u._2.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && a.createElement(u._21, null, Object(o.c)(new Date(n), "medium")), a.createElement(u.U, null, d === i.Stream && a.createElement(u.U, {
                            display: u.H.Inline,
                            margin: {
                                right: .5
                            }
                        }, a.createElement(u.V, null)), p && a.createElement("span", null, t.getFormattedViewCount(p, d)))), a.createElement(u.U, {
                            position: u._2.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, m && a.createElement(u.U, null, a.createElement(u._21, null, m)))), a.createElement(u._17, {
                            position: u._2.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: u.L.Size5
                        }, d === i.Stream && a.createElement(u.Z, {
                            label: Object(o.d)("Live", "EmbedOverlayPill"),
                            type: u._0.Live
                        }), d === i.Video && a.createElement(u.Z, {
                            label: Object(o.d)("Video", "EmbedOverlayPill"),
                            type: u._0.Overlay
                        }), d === i.Clip && a.createElement(u.Z, {
                            label: Object(o.d)("Clip", "EmbedOverlayPill"),
                            type: u._0.Overlay
                        })))))
                    }, t.handleClick = function(e) {
                        e.preventDefault(), t.setState({
                            showOverlay: !1
                        }), t.props.onClick && t.props.onClick()
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.state.showOverlay ? this.getOverlayComponent() : a.createElement(u.j, {
                        ratio: u.k.Aspect16x9
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
            }(a.Component),
            p = Object(l.c)("EmbedOverlay")(d),
            m = p;
        n.d(t, !1, function() {
            return c
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return m
        })
    },
    1124: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                type: o,
                player: e
            }
        }

        function r() {
            return {
                type: s
            }
        }

        function a() {
            return {
                type: l
            }
        }
        n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "a", function() {
            return l
        }), t.e = i, t.f = r, t.d = a;
        var o = "carouselPlayer.CAROUSEL_REGISTERED",
            s = "carouselPlayer.CAROUSEL_UNREGISTERED",
            l = "carouselPlayer.CAROUSEL_PAUSED"
    },
    1125: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return r
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "f", function() {
            return d
        }), n.d(t, "g", function() {
            return p
        });
        var i, r = "TWILIGHT_WEB_ONBOARDING_FOR_YOU",
            a = "TWILIGHT_WEB_ONBOARDING",
            o = "control";
        ! function(e) {
            e.Skip = "skip", e.NoSkip = "no_skip"
        }(i || (i = {}));
        var s, l = new Set([i.Skip.toString(), i.NoSkip.toString()]);
        ! function(e) {
            e.First = "first", e.Last = "last"
        }(s || (s = {}));
        var u = new Set([s.First.toString(), s.Last.toString()]),
            c = function(e) {
                return !!e && u.has(e)
            },
            d = function(e, t) {
                return !!e && l.has(e) && c(t)
            },
            p = function(e) {
                return e.getTime() >= m().getTime()
            },
            m = function() {
                return new Date((new Date).getTime() - 12096e5)
            }
    },
    1127: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.split(":");
            return t.length < 2 ? {
                type: "",
                id: ""
            } : {
                type: t[0],
                id: t[1]
            }
        }
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "d", function() {
            return s
        }), n.d(t, "e", function() {
            return l
        }), t.f = i;
        var r = "clip",
            a = "url",
            o = "post",
            s = "stream",
            l = "vod"
    },
    1128: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        var r = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "feedItemPost"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Post"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "body"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "content"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "emotes"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "embeddedEmote"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "reactions"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "emote"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "token"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "setID"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "count"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "hasReacted"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "embeds"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedItemClip"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedItemVideo"
                                },
                                directives: []
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "PhotoOEmbed"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "title"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "inputURL"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "providerName"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "thumbnail"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                                        value: "VideoOEmbed"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "title"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "inputURL"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "providerName"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "thumbnail"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "html"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "author"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedUser"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 803
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/chat/models/embedded-emote-fragment.gql"\n#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/user-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\n\nfragment feedItemPost on Post {\n  id\n  createdAt\n  body {\n    content\n    emotes {\n      ...embeddedEmote\n    }\n  }\n  reactions {\n    emote {\n      id\n      token\n      setID\n    }\n    count\n    self {\n      hasReacted\n    }\n  }\n  embeds {\n    ...feedItemClip\n    ...feedItemVideo\n    ... on PhotoOEmbed {\n      title\n      inputURL\n      providerName\n      thumbnail {\n        url\n      }\n    }\n    ... on VideoOEmbed {\n      title\n      inputURL\n      providerName\n      thumbnail {\n        url\n      }\n      html\n    }\n  }\n  author {\n    ...feedUser\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n(1034).definitions)), r.definitions = r.definitions.concat(i(n(1156).definitions)), r.definitions = r.definitions.concat(i(n(1055).definitions)), r.definitions = r.definitions.concat(i(n(1157).definitions)), e.exports = r
    },
    1155: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(6),
            o = n(1056),
            s = n(3),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChannelStatus = function() {}, t.onWheelPostMessage = function(e) {
                        if (t.postMessageIsWheelEvent(e) && t.componentEl) {
                            var n = e.data.args[0].data,
                                r = new WheelEvent("wheel", i.__assign({
                                    bubbles: !0
                                }, n));
                            t.componentEl.dispatchEvent(r)
                        }
                    }, t.setComponentRef = function(e) {
                        t.componentEl = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), window.addEventListener("message", this.onWheelPostMessage)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.onWheelPostMessage)
                }, t.prototype.render = function() {
                    return r.createElement("div", {
                        ref: this.setComponentRef
                    }, r.createElement(s.j, {
                        ratio: s.k.Aspect16x9
                    }, this.getVideoEmbedComponent()))
                }, t.prototype.getVideoEmbedComponent = function() {
                    var e = this.props,
                        t = e.channelLogin,
                        n = e.vodID,
                        a = e.embedURL,
                        l = e.playerTypeOverride,
                        u = {
                            disableTheatreButton: !0,
                            onChannelStatus: this.onChannelStatus,
                            playerTypeOverride: l || o.b.Frontpage
                        };
                    return a ? r.createElement("iframe", {
                        src: a,
                        width: "100%",
                        height: "100%",
                        allowFullScreen: !0
                    }) : t ? r.createElement(o.c, i.__assign({
                        channelLogin: t
                    }, u)) : n ? r.createElement(o.c, i.__assign({
                        vodID: n
                    }, u)) : r.createElement(s.U, null)
                }, t.prototype.postMessageIsWheelEvent = function(e) {
                    return "player.embed.client" === e.data.namespace && "bridgeplayereventwithpayload" === e.data.method && e.data.args.length > 0 && "wheel" === e.data.args[0].event
                }, t = i.__decorate([Object(a.c)("EmbedVideoPlayer")], t)
            }(r.Component),
            u = l;
        n.d(t, !1, function() {
            return "player.embed.client"
        }), n.d(t, !1, function() {
            return "bridgeplayereventwithpayload"
        }), n.d(t, "a", function() {
            return u
        })
    },
    1156: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "feedItemClip"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Clip"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "clipCreatedAt"
                        },
                        name: {
                            kind: "Name",
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "embedURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "thumbnailURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "480"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "272"
                            }
                        }],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "slug"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "durationSeconds"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "clipTitle"
                        },
                        name: {
                            kind: "Name",
                            value: "title"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "broadcaster"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedUser"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "reactions"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "emote"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "token"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "setID"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "count"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "hasReacted"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
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
        i.loc.source = {
            body: '#import "twilight/features/feed/models/user-fragment.gql"\n\nfragment feedItemClip on Clip {\n  id\n  clipCreatedAt: createdAt\n  embedURL\n  thumbnailURL(width:480, height:272)\n  viewCount\n  slug\n  durationSeconds\n  clipTitle: title\n  broadcaster {\n    ...feedUser\n  }\n  reactions {\n    emote {\n      id\n      token\n      setID\n    }\n    count\n    self {\n      hasReacted\n    }\n  }\n  video {\n    game {\n      id\n      name\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n(1055).definitions)), e.exports = i
    },
    1157: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "feedItemVideo"
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "description"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "lengthSeconds"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "owner"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedUser"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                value: "480"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "272"
                            }
                        }],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "publishedAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "reactions"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "emote"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "token"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "setID"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "count"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "hasReacted"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "title"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "videoViewCount"
                        },
                        name: {
                            kind: "Name",
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 401
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/user-fragment.gql"\n\nfragment feedItemVideo on Video {\n  id\n  description\n  game {\n    id\n    name\n  }\n  lengthSeconds\n  owner {\n    ...feedUser\n  }\n  previewThumbnailURL(width: 480, height: 272)\n  publishedAt\n  reactions {\n    emote {\n      id\n      token\n      setID\n    }\n    count\n    self {\n      hasReacted\n    }\n  }\n  title\n  videoViewCount: viewCount #\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n(1055).definitions)), e.exports = i
    },
    1274: function(e, t) {},
    1275: function(e, t) {},
    1288: function(e, t, n) {
        (function(e, i) {
            var r;
            (function() {
                function a(e, t) {
                    return e.set(t[0], t[1]), e
                }

                function o(e, t) {
                    return e.add(t), e
                }

                function s(e, t, n) {
                    switch (n.length) {
                        case 0:
                            return e.call(t);
                        case 1:
                            return e.call(t, n[0]);
                        case 2:
                            return e.call(t, n[0], n[1]);
                        case 3:
                            return e.call(t, n[0], n[1], n[2])
                    }
                    return e.apply(t, n)
                }

                function l(e, t, n, i) {
                    for (var r = -1, a = null == e ? 0 : e.length; ++r < a;) {
                        var o = e[r];
                        t(i, o, n(o), e)
                    }
                    return i
                }

                function u(e, t) {
                    for (var n = -1, i = null == e ? 0 : e.length; ++n < i && !1 !== t(e[n], n, e););
                    return e
                }

                function c(e, t) {
                    for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
                    return e
                }

                function d(e, t) {
                    for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                        if (!t(e[n], n, e)) return !1;
                    return !0
                }

                function p(e, t) {
                    for (var n = -1, i = null == e ? 0 : e.length, r = 0, a = []; ++n < i;) {
                        var o = e[n];
                        t(o, n, e) && (a[r++] = o)
                    }
                    return a
                }

                function m(e, t) {
                    return !!(null == e ? 0 : e.length) && T(e, t, 0) > -1
                }

                function f(e, t, n) {
                    for (var i = -1, r = null == e ? 0 : e.length; ++i < r;)
                        if (n(t, e[i])) return !0;
                    return !1
                }

                function h(e, t) {
                    for (var n = -1, i = null == e ? 0 : e.length, r = Array(i); ++n < i;) r[n] = t(e[n], n, e);
                    return r
                }

                function g(e, t) {
                    for (var n = -1, i = t.length, r = e.length; ++n < i;) e[r + n] = t[n];
                    return e
                }

                function b(e, t, n, i) {
                    var r = -1,
                        a = null == e ? 0 : e.length;
                    for (i && a && (n = e[++r]); ++r < a;) n = t(n, e[r], r, e);
                    return n
                }

                function v(e, t, n, i) {
                    var r = null == e ? 0 : e.length;
                    for (i && r && (n = e[--r]); r--;) n = t(n, e[r], r, e);
                    return n
                }

                function y(e, t) {
                    for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                        if (t(e[n], n, e)) return !0;
                    return !1
                }

                function S(e) {
                    return e.split("")
                }

                function k(e) {
                    return e.match(Vt) || []
                }

                function _(e, t, n) {
                    var i;
                    return n(e, function(e, n, r) {
                        if (t(e, n, r)) return i = n, !1
                    }), i
                }

                function E(e, t, n, i) {
                    for (var r = e.length, a = n + (i ? 1 : -1); i ? a-- : ++a < r;)
                        if (t(e[a], a, e)) return a;
                    return -1
                }

                function T(e, t, n) {
                    return t === t ? Z(e, t, n) : E(e, P, n)
                }

                function C(e, t, n, i) {
                    for (var r = n - 1, a = e.length; ++r < a;)
                        if (i(e[r], t)) return r;
                    return -1
                }

                function P(e) {
                    return e !== e
                }

                function w(e, t) {
                    var n = null == e ? 0 : e.length;
                    return n ? R(e, t) / n : xe
                }

                function N(e) {
                    return function(t) {
                        return null == t ? re : t[e]
                    }
                }

                function O(e) {
                    return function(t) {
                        return null == e ? re : e[t]
                    }
                }

                function I(e, t, n, i, r) {
                    return r(e, function(e, r, a) {
                        n = i ? (i = !1, e) : t(n, e, r, a)
                    }), n
                }

                function U(e, t) {
                    var n = e.length;
                    for (e.sort(t); n--;) e[n] = e[n].value;
                    return e
                }

                function R(e, t) {
                    for (var n, i = -1, r = e.length; ++i < r;) {
                        var a = t(e[i]);
                        a !== re && (n = n === re ? a : n + a)
                    }
                    return n
                }

                function D(e, t) {
                    for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                    return i
                }

                function F(e, t) {
                    return h(t, function(t) {
                        return [t, e[t]]
                    })
                }

                function x(e) {
                    return function(t) {
                        return e(t)
                    }
                }

                function j(e, t) {
                    return h(t, function(t) {
                        return e[t]
                    })
                }

                function L(e, t) {
                    return e.has(t)
                }

                function A(e, t) {
                    for (var n = -1, i = e.length; ++n < i && T(t, e[n], 0) > -1;);
                    return n
                }

                function M(e, t) {
                    for (var n = e.length; n-- && T(t, e[n], 0) > -1;);
                    return n
                }

                function V(e, t) {
                    for (var n = e.length, i = 0; n--;) e[n] === t && ++i;
                    return i
                }

                function G(e) {
                    return "\\" + Nn[e]
                }

                function B(e, t) {
                    return null == e ? re : e[t]
                }

                function z(e) {
                    return yn.test(e)
                }

                function W(e) {
                    return Sn.test(e)
                }

                function H(e) {
                    for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                    return n
                }

                function q(e) {
                    var t = -1,
                        n = Array(e.size);
                    return e.forEach(function(e, i) {
                        n[++t] = [i, e]
                    }), n
                }

                function $(e, t) {
                    return function(n) {
                        return e(t(n))
                    }
                }

                function K(e, t) {
                    for (var n = -1, i = e.length, r = 0, a = []; ++n < i;) {
                        var o = e[n];
                        o !== t && o !== ce || (e[n] = ce, a[r++] = n)
                    }
                    return a
                }

                function Q(e) {
                    var t = -1,
                        n = Array(e.size);
                    return e.forEach(function(e) {
                        n[++t] = e
                    }), n
                }

                function Y(e) {
                    var t = -1,
                        n = Array(e.size);
                    return e.forEach(function(e) {
                        n[++t] = [e, e]
                    }), n
                }

                function Z(e, t, n) {
                    for (var i = n - 1, r = e.length; ++i < r;)
                        if (e[i] === t) return i;
                    return -1
                }

                function J(e, t, n) {
                    for (var i = n + 1; i--;)
                        if (e[i] === t) return i;
                    return i
                }

                function X(e) {
                    return z(e) ? te(e) : Hn(e)
                }

                function ee(e) {
                    return z(e) ? ne(e) : S(e)
                }

                function te(e) {
                    for (var t = bn.lastIndex = 0; bn.test(e);) ++t;
                    return t
                }

                function ne(e) {
                    return e.match(bn) || []
                }

                function ie(e) {
                    return e.match(vn) || []
                }
                var re, ae = 200,
                    oe = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                    se = "Expected a function",
                    le = "__lodash_hash_undefined__",
                    ue = 500,
                    ce = "__lodash_placeholder__",
                    de = 1,
                    pe = 2,
                    me = 4,
                    fe = 1,
                    he = 2,
                    ge = 1,
                    be = 2,
                    ve = 4,
                    ye = 8,
                    Se = 16,
                    ke = 32,
                    _e = 64,
                    Ee = 128,
                    Te = 256,
                    Ce = 512,
                    Pe = 30,
                    we = "...",
                    Ne = 800,
                    Oe = 16,
                    Ie = 1,
                    Ue = 2,
                    Re = 1 / 0,
                    De = 9007199254740991,
                    Fe = 1.7976931348623157e308,
                    xe = NaN,
                    je = 4294967295,
                    Le = je - 1,
                    Ae = je >>> 1,
                    Me = [
                        ["ary", Ee],
                        ["bind", ge],
                        ["bindKey", be],
                        ["curry", ye],
                        ["curryRight", Se],
                        ["flip", Ce],
                        ["partial", ke],
                        ["partialRight", _e],
                        ["rearg", Te]
                    ],
                    Ve = "[object Arguments]",
                    Ge = "[object Array]",
                    Be = "[object AsyncFunction]",
                    ze = "[object Boolean]",
                    We = "[object Date]",
                    He = "[object DOMException]",
                    qe = "[object Error]",
                    $e = "[object Function]",
                    Ke = "[object GeneratorFunction]",
                    Qe = "[object Map]",
                    Ye = "[object Number]",
                    Ze = "[object Null]",
                    Je = "[object Object]",
                    Xe = "[object Proxy]",
                    et = "[object RegExp]",
                    tt = "[object Set]",
                    nt = "[object String]",
                    it = "[object Symbol]",
                    rt = "[object Undefined]",
                    at = "[object WeakMap]",
                    ot = "[object WeakSet]",
                    st = "[object ArrayBuffer]",
                    lt = "[object DataView]",
                    ut = "[object Float32Array]",
                    ct = "[object Float64Array]",
                    dt = "[object Int8Array]",
                    pt = "[object Int16Array]",
                    mt = "[object Int32Array]",
                    ft = "[object Uint8Array]",
                    ht = "[object Uint8ClampedArray]",
                    gt = "[object Uint16Array]",
                    bt = "[object Uint32Array]",
                    vt = /\b__p \+= '';/g,
                    yt = /\b(__p \+=) '' \+/g,
                    St = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                    kt = /&(?:amp|lt|gt|quot|#39);/g,
                    _t = /[&<>"']/g,
                    Et = RegExp(kt.source),
                    Tt = RegExp(_t.source),
                    Ct = /<%-([\s\S]+?)%>/g,
                    Pt = /<%([\s\S]+?)%>/g,
                    wt = /<%=([\s\S]+?)%>/g,
                    Nt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    Ot = /^\w*$/,
                    It = /^\./,
                    Ut = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    Rt = /[\\^$.*+?()[\]{}|]/g,
                    Dt = RegExp(Rt.source),
                    Ft = /^\s+|\s+$/g,
                    xt = /^\s+/,
                    jt = /\s+$/,
                    Lt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                    At = /\{\n\/\* \[wrapped with (.+)\] \*/,
                    Mt = /,? & /,
                    Vt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                    Gt = /\\(\\)?/g,
                    Bt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                    zt = /\w*$/,
                    Wt = /^[-+]0x[0-9a-f]+$/i,
                    Ht = /^0b[01]+$/i,
                    qt = /^\[object .+?Constructor\]$/,
                    $t = /^0o[0-7]+$/i,
                    Kt = /^(?:0|[1-9]\d*)$/,
                    Qt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                    Yt = /($^)/,
                    Zt = /['\n\r\u2028\u2029\\]/g,
                    Jt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                    Xt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                    en = "[" + Xt + "]",
                    tn = "[" + Jt + "]",
                    nn = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                    rn = "[^\\ud800-\\udfff" + Xt + "\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                    an = "\\ud83c[\\udffb-\\udfff]",
                    on = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    sn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    ln = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                    un = "(?:" + nn + "|" + rn + ")",
                    cn = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
                    dn = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", on, sn].join("|") + ")[\\ufe0e\\ufe0f]?" + cn + ")*",
                    pn = "[\\ufe0e\\ufe0f]?" + cn + dn,
                    mn = "(?:" + ["[\\u2700-\\u27bf]", on, sn].join("|") + ")" + pn,
                    fn = "(?:" + ["[^\\ud800-\\udfff]" + tn + "?", tn, on, sn, "[\\ud800-\\udfff]"].join("|") + ")",
                    hn = RegExp("['’]", "g"),
                    gn = RegExp(tn, "g"),
                    bn = RegExp(an + "(?=" + an + ")|" + fn + pn, "g"),
                    vn = RegExp([ln + "?" + nn + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [en, ln, "$"].join("|") + ")", "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [en, ln + un, "$"].join("|") + ")", ln + "?" + un + "+(?:['’](?:d|ll|m|re|s|t|ve))?", ln + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", "\\d+", mn].join("|"), "g"),
                    yn = RegExp("[\\u200d\\ud800-\\udfff" + Jt + "\\ufe0e\\ufe0f]"),
                    Sn = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                    kn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                    _n = -1,
                    En = {};
                En[ut] = En[ct] = En[dt] = En[pt] = En[mt] = En[ft] = En[ht] = En[gt] = En[bt] = !0, En[Ve] = En[Ge] = En[st] = En[ze] = En[lt] = En[We] = En[qe] = En[$e] = En[Qe] = En[Ye] = En[Je] = En[et] = En[tt] = En[nt] = En[at] = !1;
                var Tn = {};
                Tn[Ve] = Tn[Ge] = Tn[st] = Tn[lt] = Tn[ze] = Tn[We] = Tn[ut] = Tn[ct] = Tn[dt] = Tn[pt] = Tn[mt] = Tn[Qe] = Tn[Ye] = Tn[Je] = Tn[et] = Tn[tt] = Tn[nt] = Tn[it] = Tn[ft] = Tn[ht] = Tn[gt] = Tn[bt] = !0, Tn[qe] = Tn[$e] = Tn[at] = !1;
                var Cn = {
                        "À": "A",
                        "Á": "A",
                        "Â": "A",
                        "Ã": "A",
                        "Ä": "A",
                        "Å": "A",
                        "à": "a",
                        "á": "a",
                        "â": "a",
                        "ã": "a",
                        "ä": "a",
                        "å": "a",
                        "Ç": "C",
                        "ç": "c",
                        "Ð": "D",
                        "ð": "d",
                        "È": "E",
                        "É": "E",
                        "Ê": "E",
                        "Ë": "E",
                        "è": "e",
                        "é": "e",
                        "ê": "e",
                        "ë": "e",
                        "Ì": "I",
                        "Í": "I",
                        "Î": "I",
                        "Ï": "I",
                        "ì": "i",
                        "í": "i",
                        "î": "i",
                        "ï": "i",
                        "Ñ": "N",
                        "ñ": "n",
                        "Ò": "O",
                        "Ó": "O",
                        "Ô": "O",
                        "Õ": "O",
                        "Ö": "O",
                        "Ø": "O",
                        "ò": "o",
                        "ó": "o",
                        "ô": "o",
                        "õ": "o",
                        "ö": "o",
                        "ø": "o",
                        "Ù": "U",
                        "Ú": "U",
                        "Û": "U",
                        "Ü": "U",
                        "ù": "u",
                        "ú": "u",
                        "û": "u",
                        "ü": "u",
                        "Ý": "Y",
                        "ý": "y",
                        "ÿ": "y",
                        "Æ": "Ae",
                        "æ": "ae",
                        "Þ": "Th",
                        "þ": "th",
                        "ß": "ss",
                        "Ā": "A",
                        "Ă": "A",
                        "Ą": "A",
                        "ā": "a",
                        "ă": "a",
                        "ą": "a",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "Ď": "D",
                        "Đ": "D",
                        "ď": "d",
                        "đ": "d",
                        "Ē": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ę": "E",
                        "Ě": "E",
                        "ē": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ę": "e",
                        "ě": "e",
                        "Ĝ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ģ": "G",
                        "ĝ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ģ": "g",
                        "Ĥ": "H",
                        "Ħ": "H",
                        "ĥ": "h",
                        "ħ": "h",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "Į": "I",
                        "İ": "I",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "į": "i",
                        "ı": "i",
                        "Ĵ": "J",
                        "ĵ": "j",
                        "Ķ": "K",
                        "ķ": "k",
                        "ĸ": "k",
                        "Ĺ": "L",
                        "Ļ": "L",
                        "Ľ": "L",
                        "Ŀ": "L",
                        "Ł": "L",
                        "ĺ": "l",
                        "ļ": "l",
                        "ľ": "l",
                        "ŀ": "l",
                        "ł": "l",
                        "Ń": "N",
                        "Ņ": "N",
                        "Ň": "N",
                        "Ŋ": "N",
                        "ń": "n",
                        "ņ": "n",
                        "ň": "n",
                        "ŋ": "n",
                        "Ō": "O",
                        "Ŏ": "O",
                        "Ő": "O",
                        "ō": "o",
                        "ŏ": "o",
                        "ő": "o",
                        "Ŕ": "R",
                        "Ŗ": "R",
                        "Ř": "R",
                        "ŕ": "r",
                        "ŗ": "r",
                        "ř": "r",
                        "Ś": "S",
                        "Ŝ": "S",
                        "Ş": "S",
                        "Š": "S",
                        "ś": "s",
                        "ŝ": "s",
                        "ş": "s",
                        "š": "s",
                        "Ţ": "T",
                        "Ť": "T",
                        "Ŧ": "T",
                        "ţ": "t",
                        "ť": "t",
                        "ŧ": "t",
                        "Ũ": "U",
                        "Ū": "U",
                        "Ŭ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ų": "U",
                        "ũ": "u",
                        "ū": "u",
                        "ŭ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ų": "u",
                        "Ŵ": "W",
                        "ŵ": "w",
                        "Ŷ": "Y",
                        "ŷ": "y",
                        "Ÿ": "Y",
                        "Ź": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "ź": "z",
                        "ż": "z",
                        "ž": "z",
                        "Ĳ": "IJ",
                        "ĳ": "ij",
                        "Œ": "Oe",
                        "œ": "oe",
                        "ŉ": "'n",
                        "ſ": "s"
                    },
                    Pn = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    },
                    wn = {
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&#39;": "'"
                    },
                    Nn = {
                        "\\": "\\",
                        "'": "'",
                        "\n": "n",
                        "\r": "r",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                    },
                    On = parseFloat,
                    In = parseInt,
                    Un = "object" == typeof e && e && e.Object === Object && e,
                    Rn = "object" == typeof self && self && self.Object === Object && self,
                    Dn = Un || Rn || Function("return this")(),
                    Fn = "object" == typeof t && t && !t.nodeType && t,
                    xn = Fn && "object" == typeof i && i && !i.nodeType && i,
                    jn = xn && xn.exports === Fn,
                    Ln = jn && Un.process,
                    An = function() {
                        try {
                            return Ln && Ln.binding && Ln.binding("util")
                        } catch (e) {}
                    }(),
                    Mn = An && An.isArrayBuffer,
                    Vn = An && An.isDate,
                    Gn = An && An.isMap,
                    Bn = An && An.isRegExp,
                    zn = An && An.isSet,
                    Wn = An && An.isTypedArray,
                    Hn = N("length"),
                    qn = O(Cn),
                    $n = O(Pn),
                    Kn = O(wn),
                    Qn = function e(t) {
                        function n(e) {
                            if (al(e) && !gp(e) && !(e instanceof S)) {
                                if (e instanceof r) return e;
                                if (gc.call(e, "__wrapped__")) return to(e)
                            }
                            return new r(e)
                        }

                        function i() {}

                        function r(e, t) {
                            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = re
                        }

                        function S(e) {
                            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = je, this.__views__ = []
                        }

                        function O() {
                            var e = new S(this.__wrapped__);
                            return e.__actions__ = Lr(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Lr(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Lr(this.__views__), e
                        }

                        function Z() {
                            if (this.__filtered__) {
                                var e = new S(this);
                                e.__dir__ = -1, e.__filtered__ = !0
                            } else e = this.clone(), e.__dir__ *= -1;
                            return e
                        }

                        function te() {
                            var e = this.__wrapped__.value(),
                                t = this.__dir__,
                                n = gp(e),
                                i = t < 0,
                                r = n ? e.length : 0,
                                a = Pa(0, r, this.__views__),
                                o = a.start,
                                s = a.end,
                                l = s - o,
                                u = i ? s : o - 1,
                                c = this.__iteratees__,
                                d = c.length,
                                p = 0,
                                m = qc(l, this.__takeCount__);
                            if (!n || !i && r == l && m == l) return vr(e, this.__actions__);
                            var f = [];
                            e: for (; l-- && p < m;) {
                                u += t;
                                for (var h = -1, g = e[u]; ++h < d;) {
                                    var b = c[h],
                                        v = b.iteratee,
                                        y = b.type,
                                        S = v(g);
                                    if (y == Ue) g = S;
                                    else if (!S) {
                                        if (y == Ie) continue e;
                                        break e
                                    }
                                }
                                f[p++] = g
                            }
                            return f
                        }

                        function ne(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var i = e[t];
                                this.set(i[0], i[1])
                            }
                        }

                        function Vt() {
                            this.__data__ = nd ? nd(null) : {}, this.size = 0
                        }

                        function Jt(e) {
                            var t = this.has(e) && delete this.__data__[e];
                            return this.size -= t ? 1 : 0, t
                        }

                        function Xt(e) {
                            var t = this.__data__;
                            if (nd) {
                                var n = t[e];
                                return n === le ? re : n
                            }
                            return gc.call(t, e) ? t[e] : re
                        }

                        function en(e) {
                            var t = this.__data__;
                            return nd ? t[e] !== re : gc.call(t, e)
                        }

                        function tn(e, t) {
                            var n = this.__data__;
                            return this.size += this.has(e) ? 0 : 1, n[e] = nd && t === re ? le : t, this
                        }

                        function nn(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var i = e[t];
                                this.set(i[0], i[1])
                            }
                        }

                        function rn() {
                            this.__data__ = [], this.size = 0
                        }

                        function an(e) {
                            var t = this.__data__,
                                n = Yn(t, e);
                            return !(n < 0) && (n == t.length - 1 ? t.pop() : Ic.call(t, n, 1), --this.size, !0)
                        }

                        function on(e) {
                            var t = this.__data__,
                                n = Yn(t, e);
                            return n < 0 ? re : t[n][1]
                        }

                        function sn(e) {
                            return Yn(this.__data__, e) > -1
                        }

                        function ln(e, t) {
                            var n = this.__data__,
                                i = Yn(n, e);
                            return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
                        }

                        function un(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var i = e[t];
                                this.set(i[0], i[1])
                            }
                        }

                        function cn() {
                            this.size = 0, this.__data__ = {
                                hash: new ne,
                                map: new(Jc || nn),
                                string: new ne
                            }
                        }

                        function dn(e) {
                            var t = _a(this, e).delete(e);
                            return this.size -= t ? 1 : 0, t
                        }

                        function pn(e) {
                            return _a(this, e).get(e)
                        }

                        function mn(e) {
                            return _a(this, e).has(e)
                        }

                        function fn(e, t) {
                            var n = _a(this, e),
                                i = n.size;
                            return n.set(e, t), this.size += n.size == i ? 0 : 1, this
                        }

                        function bn(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.__data__ = new un; ++t < n;) this.add(e[t])
                        }

                        function vn(e) {
                            return this.__data__.set(e, le), this
                        }

                        function yn(e) {
                            return this.__data__.has(e)
                        }

                        function Sn(e) {
                            var t = this.__data__ = new nn(e);
                            this.size = t.size
                        }

                        function Cn() {
                            this.__data__ = new nn, this.size = 0
                        }

                        function Pn(e) {
                            var t = this.__data__,
                                n = t.delete(e);
                            return this.size = t.size, n
                        }

                        function wn(e) {
                            return this.__data__.get(e)
                        }

                        function Nn(e) {
                            return this.__data__.has(e)
                        }

                        function Un(e, t) {
                            var n = this.__data__;
                            if (n instanceof nn) {
                                var i = n.__data__;
                                if (!Jc || i.length < ae - 1) return i.push([e, t]), this.size = ++n.size, this;
                                n = this.__data__ = new un(i)
                            }
                            return n.set(e, t), this.size = n.size, this
                        }

                        function Rn(e, t) {
                            var n = gp(e),
                                i = !n && hp(e),
                                r = !n && !i && vp(e),
                                a = !n && !i && !r && Ep(e),
                                o = n || i || r || a,
                                s = o ? D(e.length, uc) : [],
                                l = s.length;
                            for (var u in e) !t && !gc.call(e, u) || o && ("length" == u || r && ("offset" == u || "parent" == u) || a && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Fa(u, l)) || s.push(u);
                            return s
                        }

                        function Fn(e) {
                            var t = e.length;
                            return t ? e[Xi(0, t - 1)] : re
                        }

                        function xn(e, t) {
                            return Za(Lr(e), ni(t, 0, e.length))
                        }

                        function Ln(e) {
                            return Za(Lr(e))
                        }

                        function An(e, t, n) {
                            (n === re || Hs(e[t], n)) && (n !== re || t in e) || ei(e, t, n)
                        }

                        function Hn(e, t, n) {
                            var i = e[t];
                            gc.call(e, t) && Hs(i, n) && (n !== re || t in e) || ei(e, t, n)
                        }

                        function Yn(e, t) {
                            for (var n = e.length; n--;)
                                if (Hs(e[n][0], t)) return n;
                            return -1
                        }

                        function Zn(e, t, n, i) {
                            return fd(e, function(e, r, a) {
                                t(i, e, n(e), a)
                            }), i
                        }

                        function Jn(e, t) {
                            return e && Ar(t, Vl(t), e)
                        }

                        function Xn(e, t) {
                            return e && Ar(t, Gl(t), e)
                        }

                        function ei(e, t, n) {
                            "__proto__" == t && Fc ? Fc(e, t, {
                                configurable: !0,
                                enumerable: !0,
                                value: n,
                                writable: !0
                            }) : e[t] = n
                        }

                        function ti(e, t) {
                            for (var n = -1, i = t.length, r = nc(i), a = null == e; ++n < i;) r[n] = a ? re : Ll(e, t[n]);
                            return r
                        }

                        function ni(e, t, n) {
                            return e === e && (n !== re && (e = e <= n ? e : n), t !== re && (e = e >= t ? e : t)), e
                        }

                        function ii(e, t, n, i, r, a) {
                            var o, s = t & de,
                                l = t & pe,
                                c = t & me;
                            if (n && (o = r ? n(e, i, r, a) : n(e)), o !== re) return o;
                            if (!rl(e)) return e;
                            var d = gp(e);
                            if (d) {
                                if (o = Oa(e), !s) return Lr(e, o)
                            } else {
                                var p = Pd(e),
                                    m = p == $e || p == Ke;
                                if (vp(e)) return Cr(e, s);
                                if (p == Je || p == Ve || m && !r) {
                                    if (o = l || m ? {} : Ia(e), !s) return l ? Vr(e, Xn(o, e)) : Mr(e, Jn(o, e))
                                } else {
                                    if (!Tn[p]) return r ? e : {};
                                    o = Ua(e, p, ii, s)
                                }
                            }
                            a || (a = new Sn);
                            var f = a.get(e);
                            if (f) return f;
                            a.set(e, o);
                            var h = c ? l ? va : ba : l ? Gl : Vl,
                                g = d ? re : h(e);
                            return u(g || e, function(i, r) {
                                g && (r = i, i = e[r]), Hn(o, r, ii(i, t, n, r, e, a))
                            }), o
                        }

                        function ri(e) {
                            var t = Vl(e);
                            return function(n) {
                                return ai(n, e, t)
                            }
                        }

                        function ai(e, t, n) {
                            var i = n.length;
                            if (null == e) return !i;
                            for (e = sc(e); i--;) {
                                var r = n[i],
                                    a = t[r],
                                    o = e[r];
                                if (o === re && !(r in e) || !a(o)) return !1
                            }
                            return !0
                        }

                        function oi(e, t, n) {
                            if ("function" != typeof e) throw new cc(se);
                            return Od(function() {
                                e.apply(re, n)
                            }, t)
                        }

                        function si(e, t, n, i) {
                            var r = -1,
                                a = m,
                                o = !0,
                                s = e.length,
                                l = [],
                                u = t.length;
                            if (!s) return l;
                            n && (t = h(t, x(n))), i ? (a = f, o = !1) : t.length >= ae && (a = L, o = !1, t = new bn(t));
                            e: for (; ++r < s;) {
                                var c = e[r],
                                    d = null == n ? c : n(c);
                                if (c = i || 0 !== c ? c : 0, o && d === d) {
                                    for (var p = u; p--;)
                                        if (t[p] === d) continue e;
                                    l.push(c)
                                } else a(t, d, i) || l.push(c)
                            }
                            return l
                        }

                        function li(e, t) {
                            var n = !0;
                            return fd(e, function(e, i, r) {
                                return n = !!t(e, i, r)
                            }), n
                        }

                        function ui(e, t, n) {
                            for (var i = -1, r = e.length; ++i < r;) {
                                var a = e[i],
                                    o = t(a);
                                if (null != o && (s === re ? o === o && !gl(o) : n(o, s))) var s = o,
                                    l = a
                            }
                            return l
                        }

                        function ci(e, t, n, i) {
                            var r = e.length;
                            for (n = _l(n), n < 0 && (n = -n > r ? 0 : r + n), i = i === re || i > r ? r : _l(i), i < 0 && (i += r), i = n > i ? 0 : El(i); n < i;) e[n++] = t;
                            return e
                        }

                        function di(e, t) {
                            var n = [];
                            return fd(e, function(e, i, r) {
                                t(e, i, r) && n.push(e)
                            }), n
                        }

                        function pi(e, t, n, i, r) {
                            var a = -1,
                                o = e.length;
                            for (n || (n = Da), r || (r = []); ++a < o;) {
                                var s = e[a];
                                t > 0 && n(s) ? t > 1 ? pi(s, t - 1, n, i, r) : g(r, s) : i || (r[r.length] = s)
                            }
                            return r
                        }

                        function mi(e, t) {
                            return e && gd(e, t, Vl)
                        }

                        function fi(e, t) {
                            return e && bd(e, t, Vl)
                        }

                        function hi(e, t) {
                            return p(t, function(t) {
                                return tl(e[t])
                            })
                        }

                        function gi(e, t) {
                            t = Er(t, e);
                            for (var n = 0, i = t.length; null != e && n < i;) e = e[Ja(t[n++])];
                            return n && n == i ? e : re
                        }

                        function bi(e, t, n) {
                            var i = t(e);
                            return gp(e) ? i : g(i, n(e))
                        }

                        function vi(e) {
                            return null == e ? e === re ? rt : Ze : Dc && Dc in sc(e) ? Ca(e) : Ha(e)
                        }

                        function yi(e, t) {
                            return e > t
                        }

                        function Si(e, t) {
                            return null != e && gc.call(e, t)
                        }

                        function ki(e, t) {
                            return null != e && t in sc(e)
                        }

                        function _i(e, t, n) {
                            return e >= qc(t, n) && e < Hc(t, n)
                        }

                        function Ei(e, t, n) {
                            for (var i = n ? f : m, r = e[0].length, a = e.length, o = a, s = nc(a), l = 1 / 0, u = []; o--;) {
                                var c = e[o];
                                o && t && (c = h(c, x(t))), l = qc(c.length, l), s[o] = !n && (t || r >= 120 && c.length >= 120) ? new bn(o && c) : re
                            }
                            c = e[0];
                            var d = -1,
                                p = s[0];
                            e: for (; ++d < r && u.length < l;) {
                                var g = c[d],
                                    b = t ? t(g) : g;
                                if (g = n || 0 !== g ? g : 0, !(p ? L(p, b) : i(u, b, n))) {
                                    for (o = a; --o;) {
                                        var v = s[o];
                                        if (!(v ? L(v, b) : i(e[o], b, n))) continue e
                                    }
                                    p && p.push(b), u.push(g)
                                }
                            }
                            return u
                        }

                        function Ti(e, t, n, i) {
                            return mi(e, function(e, r, a) {
                                t(i, n(e), r, a)
                            }), i
                        }

                        function Ci(e, t, n) {
                            t = Er(t, e), e = $a(e, t);
                            var i = null == e ? e : e[Ja(ko(t))];
                            return null == i ? re : s(i, e, n)
                        }

                        function Pi(e) {
                            return al(e) && vi(e) == Ve
                        }

                        function wi(e) {
                            return al(e) && vi(e) == st
                        }

                        function Ni(e) {
                            return al(e) && vi(e) == We
                        }

                        function Oi(e, t, n, i, r) {
                            return e === t || (null == e || null == t || !al(e) && !al(t) ? e !== e && t !== t : Ii(e, t, n, i, Oi, r))
                        }

                        function Ii(e, t, n, i, r, a) {
                            var o = gp(e),
                                s = gp(t),
                                l = o ? Ge : Pd(e),
                                u = s ? Ge : Pd(t);
                            l = l == Ve ? Je : l, u = u == Ve ? Je : u;
                            var c = l == Je,
                                d = u == Je,
                                p = l == u;
                            if (p && vp(e)) {
                                if (!vp(t)) return !1;
                                o = !0, c = !1
                            }
                            if (p && !c) return a || (a = new Sn), o || Ep(e) ? ma(e, t, n, i, r, a) : fa(e, t, l, n, i, r, a);
                            if (!(n & fe)) {
                                var m = c && gc.call(e, "__wrapped__"),
                                    f = d && gc.call(t, "__wrapped__");
                                if (m || f) {
                                    var h = m ? e.value() : e,
                                        g = f ? t.value() : t;
                                    return a || (a = new Sn), r(h, g, n, i, a)
                                }
                            }
                            return !!p && (a || (a = new Sn), ha(e, t, n, i, r, a))
                        }

                        function Ui(e) {
                            return al(e) && Pd(e) == Qe
                        }

                        function Ri(e, t, n, i) {
                            var r = n.length,
                                a = r,
                                o = !i;
                            if (null == e) return !a;
                            for (e = sc(e); r--;) {
                                var s = n[r];
                                if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
                            }
                            for (; ++r < a;) {
                                s = n[r];
                                var l = s[0],
                                    u = e[l],
                                    c = s[1];
                                if (o && s[2]) {
                                    if (u === re && !(l in e)) return !1
                                } else {
                                    var d = new Sn;
                                    if (i) var p = i(u, c, l, e, t, d);
                                    if (!(p === re ? Oi(c, u, fe | he, i, d) : p)) return !1
                                }
                            }
                            return !0
                        }

                        function Di(e) {
                            return !(!rl(e) || Ma(e)) && (tl(e) ? _c : qt).test(Xa(e))
                        }

                        function Fi(e) {
                            return al(e) && vi(e) == et
                        }

                        function xi(e) {
                            return al(e) && Pd(e) == tt
                        }

                        function ji(e) {
                            return al(e) && il(e.length) && !!En[vi(e)]
                        }

                        function Li(e) {
                            return "function" == typeof e ? e : null == e ? Iu : "object" == typeof e ? gp(e) ? zi(e[0], e[1]) : Bi(e) : Au(e)
                        }

                        function Ai(e) {
                            if (!Va(e)) return Wc(e);
                            var t = [];
                            for (var n in sc(e)) gc.call(e, n) && "constructor" != n && t.push(n);
                            return t
                        }

                        function Mi(e) {
                            if (!rl(e)) return Wa(e);
                            var t = Va(e),
                                n = [];
                            for (var i in e)("constructor" != i || !t && gc.call(e, i)) && n.push(i);
                            return n
                        }

                        function Vi(e, t) {
                            return e < t
                        }

                        function Gi(e, t) {
                            var n = -1,
                                i = qs(e) ? nc(e.length) : [];
                            return fd(e, function(e, r, a) {
                                i[++n] = t(e, r, a)
                            }), i
                        }

                        function Bi(e) {
                            var t = Ea(e);
                            return 1 == t.length && t[0][2] ? Ba(t[0][0], t[0][1]) : function(n) {
                                return n === e || Ri(n, e, t)
                            }
                        }

                        function zi(e, t) {
                            return ja(e) && Ga(t) ? Ba(Ja(e), t) : function(n) {
                                var i = Ll(n, e);
                                return i === re && i === t ? Ml(n, e) : Oi(t, i, fe | he)
                            }
                        }

                        function Wi(e, t, n, i, r) {
                            e !== t && gd(t, function(a, o) {
                                if (rl(a)) r || (r = new Sn), Hi(e, t, o, n, Wi, i, r);
                                else {
                                    var s = i ? i(e[o], a, o + "", e, t, r) : re;
                                    s === re && (s = a), An(e, o, s)
                                }
                            }, Gl)
                        }

                        function Hi(e, t, n, i, r, a, o) {
                            var s = e[n],
                                l = t[n],
                                u = o.get(l);
                            if (u) return void An(e, n, u);
                            var c = a ? a(s, l, n + "", e, t, o) : re,
                                d = c === re;
                            if (d) {
                                var p = gp(l),
                                    m = !p && vp(l),
                                    f = !p && !m && Ep(l);
                                c = l, p || m || f ? gp(s) ? c = s : $s(s) ? c = Lr(s) : m ? (d = !1, c = Cr(l, !0)) : f ? (d = !1, c = Rr(l, !0)) : c = [] : ml(l) || hp(l) ? (c = s, hp(s) ? c = Cl(s) : (!rl(s) || i && tl(s)) && (c = Ia(l))) : d = !1
                            }
                            d && (o.set(l, c), r(c, l, i, a, o), o.delete(l)), An(e, n, c)
                        }

                        function qi(e, t) {
                            var n = e.length;
                            if (n) return t += t < 0 ? n : 0, Fa(t, n) ? e[t] : re
                        }

                        function $i(e, t, n) {
                            var i = -1;
                            return t = h(t.length ? t : [Iu], x(ka())), U(Gi(e, function(e, n, r) {
                                return {
                                    criteria: h(t, function(t) {
                                        return t(e)
                                    }),
                                    index: ++i,
                                    value: e
                                }
                            }), function(e, t) {
                                return Fr(e, t, n)
                            })
                        }

                        function Ki(e, t) {
                            return Qi(e, t, function(t, n) {
                                return Ml(e, n)
                            })
                        }

                        function Qi(e, t, n) {
                            for (var i = -1, r = t.length, a = {}; ++i < r;) {
                                var o = t[i],
                                    s = gi(e, o);
                                n(s, o) && ar(a, Er(o, e), s)
                            }
                            return a
                        }

                        function Yi(e) {
                            return function(t) {
                                return gi(t, e)
                            }
                        }

                        function Zi(e, t, n, i) {
                            var r = i ? C : T,
                                a = -1,
                                o = t.length,
                                s = e;
                            for (e === t && (t = Lr(t)), n && (s = h(e, x(n))); ++a < o;)
                                for (var l = 0, u = t[a], c = n ? n(u) : u;
                                    (l = r(s, c, l, i)) > -1;) s !== e && Ic.call(s, l, 1), Ic.call(e, l, 1);
                            return e
                        }

                        function Ji(e, t) {
                            for (var n = e ? t.length : 0, i = n - 1; n--;) {
                                var r = t[n];
                                if (n == i || r !== a) {
                                    var a = r;
                                    Fa(r) ? Ic.call(e, r, 1) : hr(e, r)
                                }
                            }
                            return e
                        }

                        function Xi(e, t) {
                            return e + Mc(Qc() * (t - e + 1))
                        }

                        function er(e, t, n, i) {
                            for (var r = -1, a = Hc(Ac((t - e) / (n || 1)), 0), o = nc(a); a--;) o[i ? a : ++r] = e, e += n;
                            return o
                        }

                        function tr(e, t) {
                            var n = "";
                            if (!e || t < 1 || t > De) return n;
                            do {
                                t % 2 && (n += e), (t = Mc(t / 2)) && (e += e)
                            } while (t);
                            return n
                        }

                        function nr(e, t) {
                            return Id(qa(e, t, Iu), e + "")
                        }

                        function ir(e) {
                            return Fn(Xl(e))
                        }

                        function rr(e, t) {
                            var n = Xl(e);
                            return Za(n, ni(t, 0, n.length))
                        }

                        function ar(e, t, n, i) {
                            if (!rl(e)) return e;
                            t = Er(t, e);
                            for (var r = -1, a = t.length, o = a - 1, s = e; null != s && ++r < a;) {
                                var l = Ja(t[r]),
                                    u = n;
                                if (r != o) {
                                    var c = s[l];
                                    u = i ? i(c, l, s) : re, u === re && (u = rl(c) ? c : Fa(t[r + 1]) ? [] : {})
                                }
                                Hn(s, l, u), s = s[l]
                            }
                            return e
                        }

                        function or(e) {
                            return Za(Xl(e))
                        }

                        function sr(e, t, n) {
                            var i = -1,
                                r = e.length;
                            t < 0 && (t = -t > r ? 0 : r + t), n = n > r ? r : n, n < 0 && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
                            for (var a = nc(r); ++i < r;) a[i] = e[i + t];
                            return a
                        }

                        function lr(e, t) {
                            var n;
                            return fd(e, function(e, i, r) {
                                return !(n = t(e, i, r))
                            }), !!n
                        }

                        function ur(e, t, n) {
                            var i = 0,
                                r = null == e ? i : e.length;
                            if ("number" == typeof t && t === t && r <= Ae) {
                                for (; i < r;) {
                                    var a = i + r >>> 1,
                                        o = e[a];
                                    null !== o && !gl(o) && (n ? o <= t : o < t) ? i = a + 1 : r = a
                                }
                                return r
                            }
                            return cr(e, t, Iu, n)
                        }

                        function cr(e, t, n, i) {
                            t = n(t);
                            for (var r = 0, a = null == e ? 0 : e.length, o = t !== t, s = null === t, l = gl(t), u = t === re; r < a;) {
                                var c = Mc((r + a) / 2),
                                    d = n(e[c]),
                                    p = d !== re,
                                    m = null === d,
                                    f = d === d,
                                    h = gl(d);
                                if (o) var g = i || f;
                                else g = u ? f && (i || p) : s ? f && p && (i || !m) : l ? f && p && !m && (i || !h) : !m && !h && (i ? d <= t : d < t);
                                g ? r = c + 1 : a = c
                            }
                            return qc(a, Le)
                        }

                        function dr(e, t) {
                            for (var n = -1, i = e.length, r = 0, a = []; ++n < i;) {
                                var o = e[n],
                                    s = t ? t(o) : o;
                                if (!n || !Hs(s, l)) {
                                    var l = s;
                                    a[r++] = 0 === o ? 0 : o
                                }
                            }
                            return a
                        }

                        function pr(e) {
                            return "number" == typeof e ? e : gl(e) ? xe : +e
                        }

                        function mr(e) {
                            if ("string" == typeof e) return e;
                            if (gp(e)) return h(e, mr) + "";
                            if (gl(e)) return pd ? pd.call(e) : "";
                            var t = e + "";
                            return "0" == t && 1 / e == -Re ? "-0" : t
                        }

                        function fr(e, t, n) {
                            var i = -1,
                                r = m,
                                a = e.length,
                                o = !0,
                                s = [],
                                l = s;
                            if (n) o = !1, r = f;
                            else if (a >= ae) {
                                var u = t ? null : _d(e);
                                if (u) return Q(u);
                                o = !1, r = L, l = new bn
                            } else l = t ? [] : s;
                            e: for (; ++i < a;) {
                                var c = e[i],
                                    d = t ? t(c) : c;
                                if (c = n || 0 !== c ? c : 0, o && d === d) {
                                    for (var p = l.length; p--;)
                                        if (l[p] === d) continue e;
                                    t && l.push(d), s.push(c)
                                } else r(l, d, n) || (l !== s && l.push(d), s.push(c))
                            }
                            return s
                        }

                        function hr(e, t) {
                            return t = Er(t, e), null == (e = $a(e, t)) || delete e[Ja(ko(t))]
                        }

                        function gr(e, t, n, i) {
                            return ar(e, t, n(gi(e, t)), i)
                        }

                        function br(e, t, n, i) {
                            for (var r = e.length, a = i ? r : -1;
                                (i ? a-- : ++a < r) && t(e[a], a, e););
                            return n ? sr(e, i ? 0 : a, i ? a + 1 : r) : sr(e, i ? a + 1 : 0, i ? r : a)
                        }

                        function vr(e, t) {
                            var n = e;
                            return n instanceof S && (n = n.value()), b(t, function(e, t) {
                                return t.func.apply(t.thisArg, g([e], t.args))
                            }, n)
                        }

                        function yr(e, t, n) {
                            var i = e.length;
                            if (i < 2) return i ? fr(e[0]) : [];
                            for (var r = -1, a = nc(i); ++r < i;)
                                for (var o = e[r], s = -1; ++s < i;) s != r && (a[r] = si(a[r] || o, e[s], t, n));
                            return fr(pi(a, 1), t, n)
                        }

                        function Sr(e, t, n) {
                            for (var i = -1, r = e.length, a = t.length, o = {}; ++i < r;) {
                                var s = i < a ? t[i] : re;
                                n(o, e[i], s)
                            }
                            return o
                        }

                        function kr(e) {
                            return $s(e) ? e : []
                        }

                        function _r(e) {
                            return "function" == typeof e ? e : Iu
                        }

                        function Er(e, t) {
                            return gp(e) ? e : ja(e, t) ? [e] : Ud(wl(e))
                        }

                        function Tr(e, t, n) {
                            var i = e.length;
                            return n = n === re ? i : n, !t && n >= i ? e : sr(e, t, n)
                        }

                        function Cr(e, t) {
                            if (t) return e.slice();
                            var n = e.length,
                                i = Pc ? Pc(n) : new e.constructor(n);
                            return e.copy(i), i
                        }

                        function Pr(e) {
                            var t = new e.constructor(e.byteLength);
                            return new Cc(t).set(new Cc(e)), t
                        }

                        function wr(e, t) {
                            var n = t ? Pr(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.byteLength)
                        }

                        function Nr(e, t, n) {
                            return b(t ? n(q(e), de) : q(e), a, new e.constructor)
                        }

                        function Or(e) {
                            var t = new e.constructor(e.source, zt.exec(e));
                            return t.lastIndex = e.lastIndex, t
                        }

                        function Ir(e, t, n) {
                            return b(t ? n(Q(e), de) : Q(e), o, new e.constructor)
                        }

                        function Ur(e) {
                            return dd ? sc(dd.call(e)) : {}
                        }

                        function Rr(e, t) {
                            var n = t ? Pr(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.length)
                        }

                        function Dr(e, t) {
                            if (e !== t) {
                                var n = e !== re,
                                    i = null === e,
                                    r = e === e,
                                    a = gl(e),
                                    o = t !== re,
                                    s = null === t,
                                    l = t === t,
                                    u = gl(t);
                                if (!s && !u && !a && e > t || a && o && l && !s && !u || i && o && l || !n && l || !r) return 1;
                                if (!i && !a && !u && e < t || u && n && r && !i && !a || s && n && r || !o && r || !l) return -1
                            }
                            return 0
                        }

                        function Fr(e, t, n) {
                            for (var i = -1, r = e.criteria, a = t.criteria, o = r.length, s = n.length; ++i < o;) {
                                var l = Dr(r[i], a[i]);
                                if (l) {
                                    if (i >= s) return l;
                                    return l * ("desc" == n[i] ? -1 : 1)
                                }
                            }
                            return e.index - t.index
                        }

                        function xr(e, t, n, i) {
                            for (var r = -1, a = e.length, o = n.length, s = -1, l = t.length, u = Hc(a - o, 0), c = nc(l + u), d = !i; ++s < l;) c[s] = t[s];
                            for (; ++r < o;)(d || r < a) && (c[n[r]] = e[r]);
                            for (; u--;) c[s++] = e[r++];
                            return c
                        }

                        function jr(e, t, n, i) {
                            for (var r = -1, a = e.length, o = -1, s = n.length, l = -1, u = t.length, c = Hc(a - s, 0), d = nc(c + u), p = !i; ++r < c;) d[r] = e[r];
                            for (var m = r; ++l < u;) d[m + l] = t[l];
                            for (; ++o < s;)(p || r < a) && (d[m + n[o]] = e[r++]);
                            return d
                        }

                        function Lr(e, t) {
                            var n = -1,
                                i = e.length;
                            for (t || (t = nc(i)); ++n < i;) t[n] = e[n];
                            return t
                        }

                        function Ar(e, t, n, i) {
                            var r = !n;
                            n || (n = {});
                            for (var a = -1, o = t.length; ++a < o;) {
                                var s = t[a],
                                    l = i ? i(n[s], e[s], s, n, e) : re;
                                l === re && (l = e[s]), r ? ei(n, s, l) : Hn(n, s, l)
                            }
                            return n
                        }

                        function Mr(e, t) {
                            return Ar(e, Td(e), t)
                        }

                        function Vr(e, t) {
                            return Ar(e, Cd(e), t)
                        }

                        function Gr(e, t) {
                            return function(n, i) {
                                var r = gp(n) ? l : Zn,
                                    a = t ? t() : {};
                                return r(n, e, ka(i, 2), a)
                            }
                        }

                        function Br(e) {
                            return nr(function(t, n) {
                                var i = -1,
                                    r = n.length,
                                    a = r > 1 ? n[r - 1] : re,
                                    o = r > 2 ? n[2] : re;
                                for (a = e.length > 3 && "function" == typeof a ? (r--, a) : re, o && xa(n[0], n[1], o) && (a = r < 3 ? re : a, r = 1), t = sc(t); ++i < r;) {
                                    var s = n[i];
                                    s && e(t, s, i, a)
                                }
                                return t
                            })
                        }

                        function zr(e, t) {
                            return function(n, i) {
                                if (null == n) return n;
                                if (!qs(n)) return e(n, i);
                                for (var r = n.length, a = t ? r : -1, o = sc(n);
                                    (t ? a-- : ++a < r) && !1 !== i(o[a], a, o););
                                return n
                            }
                        }

                        function Wr(e) {
                            return function(t, n, i) {
                                for (var r = -1, a = sc(t), o = i(t), s = o.length; s--;) {
                                    var l = o[e ? s : ++r];
                                    if (!1 === n(a[l], l, a)) break
                                }
                                return t
                            }
                        }

                        function Hr(e, t, n) {
                            function i() {
                                return (this && this !== Dn && this instanceof i ? a : e).apply(r ? n : this, arguments)
                            }
                            var r = t & ge,
                                a = Kr(e);
                            return i
                        }

                        function qr(e) {
                            return function(t) {
                                t = wl(t);
                                var n = z(t) ? ee(t) : re,
                                    i = n ? n[0] : t.charAt(0),
                                    r = n ? Tr(n, 1).join("") : t.slice(1);
                                return i[e]() + r
                            }
                        }

                        function $r(e) {
                            return function(t) {
                                return b(Cu(au(t).replace(hn, "")), e, "")
                            }
                        }

                        function Kr(e) {
                            return function() {
                                var t = arguments;
                                switch (t.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t[0]);
                                    case 2:
                                        return new e(t[0], t[1]);
                                    case 3:
                                        return new e(t[0], t[1], t[2]);
                                    case 4:
                                        return new e(t[0], t[1], t[2], t[3]);
                                    case 5:
                                        return new e(t[0], t[1], t[2], t[3], t[4]);
                                    case 6:
                                        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                    case 7:
                                        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                }
                                var n = md(e.prototype),
                                    i = e.apply(n, t);
                                return rl(i) ? i : n
                            }
                        }

                        function Qr(e, t, n) {
                            function i() {
                                for (var a = arguments.length, o = nc(a), l = a, u = Sa(i); l--;) o[l] = arguments[l];
                                var c = a < 3 && o[0] !== u && o[a - 1] !== u ? [] : K(o, u);
                                return (a -= c.length) < n ? oa(e, t, Jr, i.placeholder, re, o, c, re, re, n - a) : s(this && this !== Dn && this instanceof i ? r : e, this, o)
                            }
                            var r = Kr(e);
                            return i
                        }

                        function Yr(e) {
                            return function(t, n, i) {
                                var r = sc(t);
                                if (!qs(t)) {
                                    var a = ka(n, 3);
                                    t = Vl(t), n = function(e) {
                                        return a(r[e], e, r)
                                    }
                                }
                                var o = e(t, n, i);
                                return o > -1 ? r[a ? t[o] : o] : re
                            }
                        }

                        function Zr(e) {
                            return ga(function(t) {
                                var n = t.length,
                                    i = n,
                                    a = r.prototype.thru;
                                for (e && t.reverse(); i--;) {
                                    var o = t[i];
                                    if ("function" != typeof o) throw new cc(se);
                                    if (a && !s && "wrapper" == ya(o)) var s = new r([], !0)
                                }
                                for (i = s ? i : n; ++i < n;) {
                                    o = t[i];
                                    var l = ya(o),
                                        u = "wrapper" == l ? Ed(o) : re;
                                    s = u && Aa(u[0]) && u[1] == (Ee | ye | ke | Te) && !u[4].length && 1 == u[9] ? s[ya(u[0])].apply(s, u[3]) : 1 == o.length && Aa(o) ? s[l]() : s.thru(o)
                                }
                                return function() {
                                    var e = arguments,
                                        i = e[0];
                                    if (s && 1 == e.length && gp(i)) return s.plant(i).value();
                                    for (var r = 0, a = n ? t[r].apply(this, e) : i; ++r < n;) a = t[r].call(this, a);
                                    return a
                                }
                            })
                        }

                        function Jr(e, t, n, i, r, a, o, s, l, u) {
                            function c() {
                                for (var b = arguments.length, v = nc(b), y = b; y--;) v[y] = arguments[y];
                                if (f) var S = Sa(c),
                                    k = V(v, S);
                                if (i && (v = xr(v, i, r, f)), a && (v = jr(v, a, o, f)), b -= k, f && b < u) {
                                    var _ = K(v, S);
                                    return oa(e, t, Jr, c.placeholder, n, v, _, s, l, u - b)
                                }
                                var E = p ? n : this,
                                    T = m ? E[e] : e;
                                return b = v.length, s ? v = Ka(v, s) : h && b > 1 && v.reverse(), d && l < b && (v.length = l), this && this !== Dn && this instanceof c && (T = g || Kr(T)), T.apply(E, v)
                            }
                            var d = t & Ee,
                                p = t & ge,
                                m = t & be,
                                f = t & (ye | Se),
                                h = t & Ce,
                                g = m ? re : Kr(e);
                            return c
                        }

                        function Xr(e, t) {
                            return function(n, i) {
                                return Ti(n, e, t(i), {})
                            }
                        }

                        function ea(e, t) {
                            return function(n, i) {
                                var r;
                                if (n === re && i === re) return t;
                                if (n !== re && (r = n), i !== re) {
                                    if (r === re) return i;
                                    "string" == typeof n || "string" == typeof i ? (n = mr(n), i = mr(i)) : (n = pr(n), i = pr(i)), r = e(n, i)
                                }
                                return r
                            }
                        }

                        function ta(e) {
                            return ga(function(t) {
                                return t = h(t, x(ka())), nr(function(n) {
                                    var i = this;
                                    return e(t, function(e) {
                                        return s(e, i, n)
                                    })
                                })
                            })
                        }

                        function na(e, t) {
                            t = t === re ? " " : mr(t);
                            var n = t.length;
                            if (n < 2) return n ? tr(t, e) : t;
                            var i = tr(t, Ac(e / X(t)));
                            return z(t) ? Tr(ee(i), 0, e).join("") : i.slice(0, e)
                        }

                        function ia(e, t, n, i) {
                            function r() {
                                for (var t = -1, l = arguments.length, u = -1, c = i.length, d = nc(c + l), p = this && this !== Dn && this instanceof r ? o : e; ++u < c;) d[u] = i[u];
                                for (; l--;) d[u++] = arguments[++t];
                                return s(p, a ? n : this, d)
                            }
                            var a = t & ge,
                                o = Kr(e);
                            return r
                        }

                        function ra(e) {
                            return function(t, n, i) {
                                return i && "number" != typeof i && xa(t, n, i) && (n = i = re), t = kl(t), n === re ? (n = t, t = 0) : n = kl(n), i = i === re ? t < n ? 1 : -1 : kl(i), er(t, n, i, e)
                            }
                        }

                        function aa(e) {
                            return function(t, n) {
                                return "string" == typeof t && "string" == typeof n || (t = Tl(t), n = Tl(n)), e(t, n)
                            }
                        }

                        function oa(e, t, n, i, r, a, o, s, l, u) {
                            var c = t & ye,
                                d = c ? o : re,
                                p = c ? re : o,
                                m = c ? a : re,
                                f = c ? re : a;
                            t |= c ? ke : _e, (t &= ~(c ? _e : ke)) & ve || (t &= ~(ge | be));
                            var h = [e, t, r, m, d, f, p, s, l, u],
                                g = n.apply(re, h);
                            return Aa(e) && Nd(g, h), g.placeholder = i, Qa(g, e, t)
                        }

                        function sa(e) {
                            var t = oc[e];
                            return function(e, n) {
                                if (e = Tl(e), n = null == n ? 0 : qc(_l(n), 292)) {
                                    var i = (wl(e) + "e").split("e");
                                    return i = (wl(t(i[0] + "e" + (+i[1] + n))) + "e").split("e"), +(i[0] + "e" + (+i[1] - n))
                                }
                                return t(e)
                            }
                        }

                        function la(e) {
                            return function(t) {
                                var n = Pd(t);
                                return n == Qe ? q(t) : n == tt ? Y(t) : F(t, e(t))
                            }
                        }

                        function ua(e, t, n, i, r, a, o, s) {
                            var l = t & be;
                            if (!l && "function" != typeof e) throw new cc(se);
                            var u = i ? i.length : 0;
                            if (u || (t &= ~(ke | _e), i = r = re), o = o === re ? o : Hc(_l(o), 0), s = s === re ? s : _l(s), u -= r ? r.length : 0, t & _e) {
                                var c = i,
                                    d = r;
                                i = r = re
                            }
                            var p = l ? re : Ed(e),
                                m = [e, t, n, i, r, c, d, a, o, s];
                            if (p && za(m, p), e = m[0], t = m[1], n = m[2], i = m[3], r = m[4], s = m[9] = m[9] === re ? l ? 0 : e.length : Hc(m[9] - u, 0), !s && t & (ye | Se) && (t &= ~(ye | Se)), t && t != ge) f = t == ye || t == Se ? Qr(e, t, s) : t != ke && t != (ge | ke) || r.length ? Jr.apply(re, m) : ia(e, t, n, i);
                            else var f = Hr(e, t, n);
                            return Qa((p ? vd : Nd)(f, m), e, t)
                        }

                        function ca(e, t, n, i) {
                            return e === re || Hs(e, mc[n]) && !gc.call(i, n) ? t : e
                        }

                        function da(e, t, n, i, r, a) {
                            return rl(e) && rl(t) && (a.set(t, e), Wi(e, t, re, da, a), a.delete(t)), e
                        }

                        function pa(e) {
                            return ml(e) ? re : e
                        }

                        function ma(e, t, n, i, r, a) {
                            var o = n & fe,
                                s = e.length,
                                l = t.length;
                            if (s != l && !(o && l > s)) return !1;
                            var u = a.get(e);
                            if (u && a.get(t)) return u == t;
                            var c = -1,
                                d = !0,
                                p = n & he ? new bn : re;
                            for (a.set(e, t), a.set(t, e); ++c < s;) {
                                var m = e[c],
                                    f = t[c];
                                if (i) var h = o ? i(f, m, c, t, e, a) : i(m, f, c, e, t, a);
                                if (h !== re) {
                                    if (h) continue;
                                    d = !1;
                                    break
                                }
                                if (p) {
                                    if (!y(t, function(e, t) {
                                            if (!L(p, t) && (m === e || r(m, e, n, i, a))) return p.push(t)
                                        })) {
                                        d = !1;
                                        break
                                    }
                                } else if (m !== f && !r(m, f, n, i, a)) {
                                    d = !1;
                                    break
                                }
                            }
                            return a.delete(e), a.delete(t), d
                        }

                        function fa(e, t, n, i, r, a, o) {
                            switch (n) {
                                case lt:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                    e = e.buffer, t = t.buffer;
                                case st:
                                    return !(e.byteLength != t.byteLength || !a(new Cc(e), new Cc(t)));
                                case ze:
                                case We:
                                case Ye:
                                    return Hs(+e, +t);
                                case qe:
                                    return e.name == t.name && e.message == t.message;
                                case et:
                                case nt:
                                    return e == t + "";
                                case Qe:
                                    var s = q;
                                case tt:
                                    var l = i & fe;
                                    if (s || (s = Q), e.size != t.size && !l) return !1;
                                    var u = o.get(e);
                                    if (u) return u == t;
                                    i |= he, o.set(e, t);
                                    var c = ma(s(e), s(t), i, r, a, o);
                                    return o.delete(e), c;
                                case it:
                                    if (dd) return dd.call(e) == dd.call(t)
                            }
                            return !1
                        }

                        function ha(e, t, n, i, r, a) {
                            var o = n & fe,
                                s = ba(e),
                                l = s.length;
                            if (l != ba(t).length && !o) return !1;
                            for (var u = l; u--;) {
                                var c = s[u];
                                if (!(o ? c in t : gc.call(t, c))) return !1
                            }
                            var d = a.get(e);
                            if (d && a.get(t)) return d == t;
                            var p = !0;
                            a.set(e, t), a.set(t, e);
                            for (var m = o; ++u < l;) {
                                c = s[u];
                                var f = e[c],
                                    h = t[c];
                                if (i) var g = o ? i(h, f, c, t, e, a) : i(f, h, c, e, t, a);
                                if (!(g === re ? f === h || r(f, h, n, i, a) : g)) {
                                    p = !1;
                                    break
                                }
                                m || (m = "constructor" == c)
                            }
                            if (p && !m) {
                                var b = e.constructor,
                                    v = t.constructor;
                                b != v && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof v && v instanceof v) && (p = !1)
                            }
                            return a.delete(e), a.delete(t), p
                        }

                        function ga(e) {
                            return Id(qa(e, re, mo), e + "")
                        }

                        function ba(e) {
                            return bi(e, Vl, Td)
                        }

                        function va(e) {
                            return bi(e, Gl, Cd)
                        }

                        function ya(e) {
                            for (var t = e.name + "", n = rd[t], i = gc.call(rd, t) ? n.length : 0; i--;) {
                                var r = n[i],
                                    a = r.func;
                                if (null == a || a == e) return r.name
                            }
                            return t
                        }

                        function Sa(e) {
                            return (gc.call(n, "placeholder") ? n : e).placeholder
                        }

                        function ka() {
                            var e = n.iteratee || Uu;
                            return e = e === Uu ? Li : e, arguments.length ? e(arguments[0], arguments[1]) : e
                        }

                        function _a(e, t) {
                            var n = e.__data__;
                            return La(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                        }

                        function Ea(e) {
                            for (var t = Vl(e), n = t.length; n--;) {
                                var i = t[n],
                                    r = e[i];
                                t[n] = [i, r, Ga(r)]
                            }
                            return t
                        }

                        function Ta(e, t) {
                            var n = B(e, t);
                            return Di(n) ? n : re
                        }

                        function Ca(e) {
                            var t = gc.call(e, Dc),
                                n = e[Dc];
                            try {
                                e[Dc] = re;
                                var i = !0
                            } catch (e) {}
                            var r = yc.call(e);
                            return i && (t ? e[Dc] = n : delete e[Dc]), r
                        }

                        function Pa(e, t, n) {
                            for (var i = -1, r = n.length; ++i < r;) {
                                var a = n[i],
                                    o = a.size;
                                switch (a.type) {
                                    case "drop":
                                        e += o;
                                        break;
                                    case "dropRight":
                                        t -= o;
                                        break;
                                    case "take":
                                        t = qc(t, e + o);
                                        break;
                                    case "takeRight":
                                        e = Hc(e, t - o)
                                }
                            }
                            return {
                                start: e,
                                end: t
                            }
                        }

                        function wa(e) {
                            var t = e.match(At);
                            return t ? t[1].split(Mt) : []
                        }

                        function Na(e, t, n) {
                            t = Er(t, e);
                            for (var i = -1, r = t.length, a = !1; ++i < r;) {
                                var o = Ja(t[i]);
                                if (!(a = null != e && n(e, o))) break;
                                e = e[o]
                            }
                            return a || ++i != r ? a : !!(r = null == e ? 0 : e.length) && il(r) && Fa(o, r) && (gp(e) || hp(e))
                        }

                        function Oa(e) {
                            var t = e.length,
                                n = e.constructor(t);
                            return t && "string" == typeof e[0] && gc.call(e, "index") && (n.index = e.index, n.input = e.input), n
                        }

                        function Ia(e) {
                            return "function" != typeof e.constructor || Va(e) ? {} : md(wc(e))
                        }

                        function Ua(e, t, n, i) {
                            var r = e.constructor;
                            switch (t) {
                                case st:
                                    return Pr(e);
                                case ze:
                                case We:
                                    return new r(+e);
                                case lt:
                                    return wr(e, i);
                                case ut:
                                case ct:
                                case dt:
                                case pt:
                                case mt:
                                case ft:
                                case ht:
                                case gt:
                                case bt:
                                    return Rr(e, i);
                                case Qe:
                                    return Nr(e, i, n);
                                case Ye:
                                case nt:
                                    return new r(e);
                                case et:
                                    return Or(e);
                                case tt:
                                    return Ir(e, i, n);
                                case it:
                                    return Ur(e)
                            }
                        }

                        function Ra(e, t) {
                            var n = t.length;
                            if (!n) return e;
                            var i = n - 1;
                            return t[i] = (n > 1 ? "& " : "") + t[i], t = t.join(n > 2 ? ", " : " "), e.replace(Lt, "{\n/* [wrapped with " + t + "] */\n")
                        }

                        function Da(e) {
                            return gp(e) || hp(e) || !!(Uc && e && e[Uc])
                        }

                        function Fa(e, t) {
                            return !!(t = null == t ? De : t) && ("number" == typeof e || Kt.test(e)) && e > -1 && e % 1 == 0 && e < t
                        }

                        function xa(e, t, n) {
                            if (!rl(n)) return !1;
                            var i = typeof t;
                            return !!("number" == i ? qs(n) && Fa(t, n.length) : "string" == i && t in n) && Hs(n[t], e)
                        }

                        function ja(e, t) {
                            if (gp(e)) return !1;
                            var n = typeof e;
                            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !gl(e)) || (Ot.test(e) || !Nt.test(e) || null != t && e in sc(t))
                        }

                        function La(e) {
                            var t = typeof e;
                            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                        }

                        function Aa(e) {
                            var t = ya(e),
                                i = n[t];
                            if ("function" != typeof i || !(t in S.prototype)) return !1;
                            if (e === i) return !0;
                            var r = Ed(i);
                            return !!r && e === r[0]
                        }

                        function Ma(e) {
                            return !!vc && vc in e
                        }

                        function Va(e) {
                            var t = e && e.constructor;
                            return e === ("function" == typeof t && t.prototype || mc)
                        }

                        function Ga(e) {
                            return e === e && !rl(e)
                        }

                        function Ba(e, t) {
                            return function(n) {
                                return null != n && (n[e] === t && (t !== re || e in sc(n)))
                            }
                        }

                        function za(e, t) {
                            var n = e[1],
                                i = t[1],
                                r = n | i,
                                a = r < (ge | be | Ee),
                                o = i == Ee && n == ye || i == Ee && n == Te && e[7].length <= t[8] || i == (Ee | Te) && t[7].length <= t[8] && n == ye;
                            if (!a && !o) return e;
                            i & ge && (e[2] = t[2], r |= n & ge ? 0 : ve);
                            var s = t[3];
                            if (s) {
                                var l = e[3];
                                e[3] = l ? xr(l, s, t[4]) : s, e[4] = l ? K(e[3], ce) : t[4]
                            }
                            return s = t[5], s && (l = e[5], e[5] = l ? jr(l, s, t[6]) : s, e[6] = l ? K(e[5], ce) : t[6]), s = t[7], s && (e[7] = s), i & Ee && (e[8] = null == e[8] ? t[8] : qc(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = r, e
                        }

                        function Wa(e) {
                            var t = [];
                            if (null != e)
                                for (var n in sc(e)) t.push(n);
                            return t
                        }

                        function Ha(e) {
                            return yc.call(e)
                        }

                        function qa(e, t, n) {
                            return t = Hc(t === re ? e.length - 1 : t, 0),
                                function() {
                                    for (var i = arguments, r = -1, a = Hc(i.length - t, 0), o = nc(a); ++r < a;) o[r] = i[t + r];
                                    r = -1;
                                    for (var l = nc(t + 1); ++r < t;) l[r] = i[r];
                                    return l[t] = n(o), s(e, this, l)
                                }
                        }

                        function $a(e, t) {
                            return t.length < 2 ? e : gi(e, sr(t, 0, -1))
                        }

                        function Ka(e, t) {
                            for (var n = e.length, i = qc(t.length, n), r = Lr(e); i--;) {
                                var a = t[i];
                                e[i] = Fa(a, n) ? r[a] : re
                            }
                            return e
                        }

                        function Qa(e, t, n) {
                            var i = t + "";
                            return Id(e, Ra(i, eo(wa(i), n)))
                        }

                        function Ya(e) {
                            var t = 0,
                                n = 0;
                            return function() {
                                var i = $c(),
                                    r = Oe - (i - n);
                                if (n = i, r > 0) {
                                    if (++t >= Ne) return arguments[0]
                                } else t = 0;
                                return e.apply(re, arguments)
                            }
                        }

                        function Za(e, t) {
                            var n = -1,
                                i = e.length,
                                r = i - 1;
                            for (t = t === re ? i : t; ++n < t;) {
                                var a = Xi(n, r),
                                    o = e[a];
                                e[a] = e[n], e[n] = o
                            }
                            return e.length = t, e
                        }

                        function Ja(e) {
                            if ("string" == typeof e || gl(e)) return e;
                            var t = e + "";
                            return "0" == t && 1 / e == -Re ? "-0" : t
                        }

                        function Xa(e) {
                            if (null != e) {
                                try {
                                    return hc.call(e)
                                } catch (e) {}
                                try {
                                    return e + ""
                                } catch (e) {}
                            }
                            return ""
                        }

                        function eo(e, t) {
                            return u(Me, function(n) {
                                var i = "_." + n[0];
                                t & n[1] && !m(e, i) && e.push(i)
                            }), e.sort()
                        }

                        function to(e) {
                            if (e instanceof S) return e.clone();
                            var t = new r(e.__wrapped__, e.__chain__);
                            return t.__actions__ = Lr(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                        }

                        function no(e, t, n) {
                            t = (n ? xa(e, t, n) : t === re) ? 1 : Hc(_l(t), 0);
                            var i = null == e ? 0 : e.length;
                            if (!i || t < 1) return [];
                            for (var r = 0, a = 0, o = nc(Ac(i / t)); r < i;) o[a++] = sr(e, r, r += t);
                            return o
                        }

                        function io(e) {
                            for (var t = -1, n = null == e ? 0 : e.length, i = 0, r = []; ++t < n;) {
                                var a = e[t];
                                a && (r[i++] = a)
                            }
                            return r
                        }

                        function ro() {
                            var e = arguments.length;
                            if (!e) return [];
                            for (var t = nc(e - 1), n = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                            return g(gp(n) ? Lr(n) : [n], pi(t, 1))
                        }

                        function ao(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? (t = n || t === re ? 1 : _l(t), sr(e, t < 0 ? 0 : t, i)) : []
                        }

                        function oo(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? (t = n || t === re ? 1 : _l(t), t = i - t, sr(e, 0, t < 0 ? 0 : t)) : []
                        }

                        function so(e, t) {
                            return e && e.length ? br(e, ka(t, 3), !0, !0) : []
                        }

                        function lo(e, t) {
                            return e && e.length ? br(e, ka(t, 3), !0) : []
                        }

                        function uo(e, t, n, i) {
                            var r = null == e ? 0 : e.length;
                            return r ? (n && "number" != typeof n && xa(e, t, n) && (n = 0, i = r), ci(e, t, n, i)) : []
                        }

                        function co(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var r = null == n ? 0 : _l(n);
                            return r < 0 && (r = Hc(i + r, 0)), E(e, ka(t, 3), r)
                        }

                        function po(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var r = i - 1;
                            return n !== re && (r = _l(n), r = n < 0 ? Hc(i + r, 0) : qc(r, i - 1)), E(e, ka(t, 3), r, !0)
                        }

                        function mo(e) {
                            return (null == e ? 0 : e.length) ? pi(e, 1) : []
                        }

                        function fo(e) {
                            return (null == e ? 0 : e.length) ? pi(e, Re) : []
                        }

                        function ho(e, t) {
                            return (null == e ? 0 : e.length) ? (t = t === re ? 1 : _l(t), pi(e, t)) : []
                        }

                        function go(e) {
                            for (var t = -1, n = null == e ? 0 : e.length, i = {}; ++t < n;) {
                                var r = e[t];
                                i[r[0]] = r[1]
                            }
                            return i
                        }

                        function bo(e) {
                            return e && e.length ? e[0] : re
                        }

                        function vo(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var r = null == n ? 0 : _l(n);
                            return r < 0 && (r = Hc(i + r, 0)), T(e, t, r)
                        }

                        function yo(e) {
                            return (null == e ? 0 : e.length) ? sr(e, 0, -1) : []
                        }

                        function So(e, t) {
                            return null == e ? "" : zc.call(e, t)
                        }

                        function ko(e) {
                            var t = null == e ? 0 : e.length;
                            return t ? e[t - 1] : re
                        }

                        function _o(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var r = i;
                            return n !== re && (r = _l(n), r = r < 0 ? Hc(i + r, 0) : qc(r, i - 1)), t === t ? J(e, t, r) : E(e, P, r, !0)
                        }

                        function Eo(e, t) {
                            return e && e.length ? qi(e, _l(t)) : re
                        }

                        function To(e, t) {
                            return e && e.length && t && t.length ? Zi(e, t) : e
                        }

                        function Co(e, t, n) {
                            return e && e.length && t && t.length ? Zi(e, t, ka(n, 2)) : e
                        }

                        function Po(e, t, n) {
                            return e && e.length && t && t.length ? Zi(e, t, re, n) : e
                        }

                        function wo(e, t) {
                            var n = [];
                            if (!e || !e.length) return n;
                            var i = -1,
                                r = [],
                                a = e.length;
                            for (t = ka(t, 3); ++i < a;) {
                                var o = e[i];
                                t(o, i, e) && (n.push(o), r.push(i))
                            }
                            return Ji(e, r), n
                        }

                        function No(e) {
                            return null == e ? e : Yc.call(e)
                        }

                        function Oo(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? (n && "number" != typeof n && xa(e, t, n) ? (t = 0, n = i) : (t = null == t ? 0 : _l(t), n = n === re ? i : _l(n)), sr(e, t, n)) : []
                        }

                        function Io(e, t) {
                            return ur(e, t)
                        }

                        function Uo(e, t, n) {
                            return cr(e, t, ka(n, 2))
                        }

                        function Ro(e, t) {
                            var n = null == e ? 0 : e.length;
                            if (n) {
                                var i = ur(e, t);
                                if (i < n && Hs(e[i], t)) return i
                            }
                            return -1
                        }

                        function Do(e, t) {
                            return ur(e, t, !0)
                        }

                        function Fo(e, t, n) {
                            return cr(e, t, ka(n, 2), !0)
                        }

                        function xo(e, t) {
                            if (null == e ? 0 : e.length) {
                                var n = ur(e, t, !0) - 1;
                                if (Hs(e[n], t)) return n
                            }
                            return -1
                        }

                        function jo(e) {
                            return e && e.length ? dr(e) : []
                        }

                        function Lo(e, t) {
                            return e && e.length ? dr(e, ka(t, 2)) : []
                        }

                        function Ao(e) {
                            var t = null == e ? 0 : e.length;
                            return t ? sr(e, 1, t) : []
                        }

                        function Mo(e, t, n) {
                            return e && e.length ? (t = n || t === re ? 1 : _l(t), sr(e, 0, t < 0 ? 0 : t)) : []
                        }

                        function Vo(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? (t = n || t === re ? 1 : _l(t), t = i - t, sr(e, t < 0 ? 0 : t, i)) : []
                        }

                        function Go(e, t) {
                            return e && e.length ? br(e, ka(t, 3), !1, !0) : []
                        }

                        function Bo(e, t) {
                            return e && e.length ? br(e, ka(t, 3)) : []
                        }

                        function zo(e) {
                            return e && e.length ? fr(e) : []
                        }

                        function Wo(e, t) {
                            return e && e.length ? fr(e, ka(t, 2)) : []
                        }

                        function Ho(e, t) {
                            return t = "function" == typeof t ? t : re, e && e.length ? fr(e, re, t) : []
                        }

                        function qo(e) {
                            if (!e || !e.length) return [];
                            var t = 0;
                            return e = p(e, function(e) {
                                if ($s(e)) return t = Hc(e.length, t), !0
                            }), D(t, function(t) {
                                return h(e, N(t))
                            })
                        }

                        function $o(e, t) {
                            if (!e || !e.length) return [];
                            var n = qo(e);
                            return null == t ? n : h(n, function(e) {
                                return s(t, re, e)
                            })
                        }

                        function Ko(e, t) {
                            return Sr(e || [], t || [], Hn)
                        }

                        function Qo(e, t) {
                            return Sr(e || [], t || [], ar)
                        }

                        function Yo(e) {
                            var t = n(e);
                            return t.__chain__ = !0, t
                        }

                        function Zo(e, t) {
                            return t(e), e
                        }

                        function Jo(e, t) {
                            return t(e)
                        }

                        function Xo() {
                            return Yo(this)
                        }

                        function es() {
                            return new r(this.value(), this.__chain__)
                        }

                        function ts() {
                            this.__values__ === re && (this.__values__ = Sl(this.value()));
                            var e = this.__index__ >= this.__values__.length;
                            return {
                                done: e,
                                value: e ? re : this.__values__[this.__index__++]
                            }
                        }

                        function ns() {
                            return this
                        }

                        function is(e) {
                            for (var t, n = this; n instanceof i;) {
                                var r = to(n);
                                r.__index__ = 0, r.__values__ = re, t ? a.__wrapped__ = r : t = r;
                                var a = r;
                                n = n.__wrapped__
                            }
                            return a.__wrapped__ = e, t
                        }

                        function rs() {
                            var e = this.__wrapped__;
                            if (e instanceof S) {
                                var t = e;
                                return this.__actions__.length && (t = new S(this)), t = t.reverse(), t.__actions__.push({
                                    func: Jo,
                                    args: [No],
                                    thisArg: re
                                }), new r(t, this.__chain__)
                            }
                            return this.thru(No)
                        }

                        function as() {
                            return vr(this.__wrapped__, this.__actions__)
                        }

                        function os(e, t, n) {
                            var i = gp(e) ? d : li;
                            return n && xa(e, t, n) && (t = re), i(e, ka(t, 3))
                        }

                        function ss(e, t) {
                            return (gp(e) ? p : di)(e, ka(t, 3))
                        }

                        function ls(e, t) {
                            return pi(fs(e, t), 1)
                        }

                        function us(e, t) {
                            return pi(fs(e, t), Re)
                        }

                        function cs(e, t, n) {
                            return n = n === re ? 1 : _l(n), pi(fs(e, t), n)
                        }

                        function ds(e, t) {
                            return (gp(e) ? u : fd)(e, ka(t, 3))
                        }

                        function ps(e, t) {
                            return (gp(e) ? c : hd)(e, ka(t, 3))
                        }

                        function ms(e, t, n, i) {
                            e = qs(e) ? e : Xl(e), n = n && !i ? _l(n) : 0;
                            var r = e.length;
                            return n < 0 && (n = Hc(r + n, 0)), hl(e) ? n <= r && e.indexOf(t, n) > -1 : !!r && T(e, t, n) > -1
                        }

                        function fs(e, t) {
                            return (gp(e) ? h : Gi)(e, ka(t, 3))
                        }

                        function hs(e, t, n, i) {
                            return null == e ? [] : (gp(t) || (t = null == t ? [] : [t]), n = i ? re : n, gp(n) || (n = null == n ? [] : [n]), $i(e, t, n))
                        }

                        function gs(e, t, n) {
                            var i = gp(e) ? b : I,
                                r = arguments.length < 3;
                            return i(e, ka(t, 4), n, r, fd)
                        }

                        function bs(e, t, n) {
                            var i = gp(e) ? v : I,
                                r = arguments.length < 3;
                            return i(e, ka(t, 4), n, r, hd)
                        }

                        function vs(e, t) {
                            return (gp(e) ? p : di)(e, Rs(ka(t, 3)))
                        }

                        function ys(e) {
                            return (gp(e) ? Fn : ir)(e)
                        }

                        function Ss(e, t, n) {
                            return t = (n ? xa(e, t, n) : t === re) ? 1 : _l(t), (gp(e) ? xn : rr)(e, t)
                        }

                        function ks(e) {
                            return (gp(e) ? Ln : or)(e)
                        }

                        function _s(e) {
                            if (null == e) return 0;
                            if (qs(e)) return hl(e) ? X(e) : e.length;
                            var t = Pd(e);
                            return t == Qe || t == tt ? e.size : Ai(e).length
                        }

                        function Es(e, t, n) {
                            var i = gp(e) ? y : lr;
                            return n && xa(e, t, n) && (t = re), i(e, ka(t, 3))
                        }

                        function Ts(e, t) {
                            if ("function" != typeof t) throw new cc(se);
                            return e = _l(e),
                                function() {
                                    if (--e < 1) return t.apply(this, arguments)
                                }
                        }

                        function Cs(e, t, n) {
                            return t = n ? re : t, t = e && null == t ? e.length : t, ua(e, Ee, re, re, re, re, t)
                        }

                        function Ps(e, t) {
                            var n;
                            if ("function" != typeof t) throw new cc(se);
                            return e = _l(e),
                                function() {
                                    return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = re), n
                                }
                        }

                        function ws(e, t, n) {
                            t = n ? re : t;
                            var i = ua(e, ye, re, re, re, re, re, t);
                            return i.placeholder = ws.placeholder, i
                        }

                        function Ns(e, t, n) {
                            t = n ? re : t;
                            var i = ua(e, Se, re, re, re, re, re, t);
                            return i.placeholder = Ns.placeholder, i
                        }

                        function Os(e, t, n) {
                            function i(t) {
                                var n = p,
                                    i = m;
                                return p = m = re, v = t, h = e.apply(i, n)
                            }

                            function r(e) {
                                return v = e, g = Od(s, t), y ? i(e) : h
                            }

                            function a(e) {
                                var n = e - b,
                                    i = e - v,
                                    r = t - n;
                                return S ? qc(r, f - i) : r
                            }

                            function o(e) {
                                var n = e - b,
                                    i = e - v;
                                return b === re || n >= t || n < 0 || S && i >= f
                            }

                            function s() {
                                var e = rp();
                                if (o(e)) return l(e);
                                g = Od(s, a(e))
                            }

                            function l(e) {
                                return g = re, k && p ? i(e) : (p = m = re, h)
                            }

                            function u() {
                                g !== re && kd(g), v = 0, p = b = m = g = re
                            }

                            function c() {
                                return g === re ? h : l(rp())
                            }

                            function d() {
                                var e = rp(),
                                    n = o(e);
                                if (p = arguments, m = this, b = e, n) {
                                    if (g === re) return r(b);
                                    if (S) return g = Od(s, t), i(b)
                                }
                                return g === re && (g = Od(s, t)), h
                            }
                            var p, m, f, h, g, b, v = 0,
                                y = !1,
                                S = !1,
                                k = !0;
                            if ("function" != typeof e) throw new cc(se);
                            return t = Tl(t) || 0, rl(n) && (y = !!n.leading, S = "maxWait" in n, f = S ? Hc(Tl(n.maxWait) || 0, t) : f, k = "trailing" in n ? !!n.trailing : k), d.cancel = u, d.flush = c, d
                        }

                        function Is(e) {
                            return ua(e, Ce)
                        }

                        function Us(e, t) {
                            if ("function" != typeof e || null != t && "function" != typeof t) throw new cc(se);
                            var n = function() {
                                var i = arguments,
                                    r = t ? t.apply(this, i) : i[0],
                                    a = n.cache;
                                if (a.has(r)) return a.get(r);
                                var o = e.apply(this, i);
                                return n.cache = a.set(r, o) || a, o
                            };
                            return n.cache = new(Us.Cache || un), n
                        }

                        function Rs(e) {
                            if ("function" != typeof e) throw new cc(se);
                            return function() {
                                var t = arguments;
                                switch (t.length) {
                                    case 0:
                                        return !e.call(this);
                                    case 1:
                                        return !e.call(this, t[0]);
                                    case 2:
                                        return !e.call(this, t[0], t[1]);
                                    case 3:
                                        return !e.call(this, t[0], t[1], t[2])
                                }
                                return !e.apply(this, t)
                            }
                        }

                        function Ds(e) {
                            return Ps(2, e)
                        }

                        function Fs(e, t) {
                            if ("function" != typeof e) throw new cc(se);
                            return t = t === re ? t : _l(t), nr(e, t)
                        }

                        function xs(e, t) {
                            if ("function" != typeof e) throw new cc(se);
                            return t = null == t ? 0 : Hc(_l(t), 0), nr(function(n) {
                                var i = n[t],
                                    r = Tr(n, 0, t);
                                return i && g(r, i), s(e, this, r)
                            })
                        }

                        function js(e, t, n) {
                            var i = !0,
                                r = !0;
                            if ("function" != typeof e) throw new cc(se);
                            return rl(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), Os(e, t, {
                                leading: i,
                                maxWait: t,
                                trailing: r
                            })
                        }

                        function Ls(e) {
                            return Cs(e, 1)
                        }

                        function As(e, t) {
                            return cp(_r(t), e)
                        }

                        function Ms() {
                            if (!arguments.length) return [];
                            var e = arguments[0];
                            return gp(e) ? e : [e]
                        }

                        function Vs(e) {
                            return ii(e, me)
                        }

                        function Gs(e, t) {
                            return t = "function" == typeof t ? t : re, ii(e, me, t)
                        }

                        function Bs(e) {
                            return ii(e, de | me)
                        }

                        function zs(e, t) {
                            return t = "function" == typeof t ? t : re, ii(e, de | me, t)
                        }

                        function Ws(e, t) {
                            return null == t || ai(e, t, Vl(t))
                        }

                        function Hs(e, t) {
                            return e === t || e !== e && t !== t
                        }

                        function qs(e) {
                            return null != e && il(e.length) && !tl(e)
                        }

                        function $s(e) {
                            return al(e) && qs(e)
                        }

                        function Ks(e) {
                            return !0 === e || !1 === e || al(e) && vi(e) == ze
                        }

                        function Qs(e) {
                            return al(e) && 1 === e.nodeType && !ml(e)
                        }

                        function Ys(e) {
                            if (null == e) return !0;
                            if (qs(e) && (gp(e) || "string" == typeof e || "function" == typeof e.splice || vp(e) || Ep(e) || hp(e))) return !e.length;
                            var t = Pd(e);
                            if (t == Qe || t == tt) return !e.size;
                            if (Va(e)) return !Ai(e).length;
                            for (var n in e)
                                if (gc.call(e, n)) return !1;
                            return !0
                        }

                        function Zs(e, t) {
                            return Oi(e, t)
                        }

                        function Js(e, t, n) {
                            n = "function" == typeof n ? n : re;
                            var i = n ? n(e, t) : re;
                            return i === re ? Oi(e, t, re, n) : !!i
                        }

                        function Xs(e) {
                            if (!al(e)) return !1;
                            var t = vi(e);
                            return t == qe || t == He || "string" == typeof e.message && "string" == typeof e.name && !ml(e)
                        }

                        function el(e) {
                            return "number" == typeof e && Bc(e)
                        }

                        function tl(e) {
                            if (!rl(e)) return !1;
                            var t = vi(e);
                            return t == $e || t == Ke || t == Be || t == Xe
                        }

                        function nl(e) {
                            return "number" == typeof e && e == _l(e)
                        }

                        function il(e) {
                            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= De
                        }

                        function rl(e) {
                            var t = typeof e;
                            return null != e && ("object" == t || "function" == t)
                        }

                        function al(e) {
                            return null != e && "object" == typeof e
                        }

                        function ol(e, t) {
                            return e === t || Ri(e, t, Ea(t))
                        }

                        function sl(e, t, n) {
                            return n = "function" == typeof n ? n : re, Ri(e, t, Ea(t), n)
                        }

                        function ll(e) {
                            return pl(e) && e != +e
                        }

                        function ul(e) {
                            if (wd(e)) throw new rc(oe);
                            return Di(e)
                        }

                        function cl(e) {
                            return null === e
                        }

                        function dl(e) {
                            return null == e
                        }

                        function pl(e) {
                            return "number" == typeof e || al(e) && vi(e) == Ye
                        }

                        function ml(e) {
                            if (!al(e) || vi(e) != Je) return !1;
                            var t = wc(e);
                            if (null === t) return !0;
                            var n = gc.call(t, "constructor") && t.constructor;
                            return "function" == typeof n && n instanceof n && hc.call(n) == Sc
                        }

                        function fl(e) {
                            return nl(e) && e >= -De && e <= De
                        }

                        function hl(e) {
                            return "string" == typeof e || !gp(e) && al(e) && vi(e) == nt
                        }

                        function gl(e) {
                            return "symbol" == typeof e || al(e) && vi(e) == it
                        }

                        function bl(e) {
                            return e === re
                        }

                        function vl(e) {
                            return al(e) && Pd(e) == at
                        }

                        function yl(e) {
                            return al(e) && vi(e) == ot
                        }

                        function Sl(e) {
                            if (!e) return [];
                            if (qs(e)) return hl(e) ? ee(e) : Lr(e);
                            if (Rc && e[Rc]) return H(e[Rc]());
                            var t = Pd(e);
                            return (t == Qe ? q : t == tt ? Q : Xl)(e)
                        }

                        function kl(e) {
                            if (!e) return 0 === e ? e : 0;
                            if ((e = Tl(e)) === Re || e === -Re) {
                                return (e < 0 ? -1 : 1) * Fe
                            }
                            return e === e ? e : 0
                        }

                        function _l(e) {
                            var t = kl(e),
                                n = t % 1;
                            return t === t ? n ? t - n : t : 0
                        }

                        function El(e) {
                            return e ? ni(_l(e), 0, je) : 0
                        }

                        function Tl(e) {
                            if ("number" == typeof e) return e;
                            if (gl(e)) return xe;
                            if (rl(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = rl(t) ? t + "" : t
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = e.replace(Ft, "");
                            var n = Ht.test(e);
                            return n || $t.test(e) ? In(e.slice(2), n ? 2 : 8) : Wt.test(e) ? xe : +e
                        }

                        function Cl(e) {
                            return Ar(e, Gl(e))
                        }

                        function Pl(e) {
                            return e ? ni(_l(e), -De, De) : 0 === e ? e : 0
                        }

                        function wl(e) {
                            return null == e ? "" : mr(e)
                        }

                        function Nl(e, t) {
                            var n = md(e);
                            return null == t ? n : Jn(n, t)
                        }

                        function Ol(e, t) {
                            return _(e, ka(t, 3), mi)
                        }

                        function Il(e, t) {
                            return _(e, ka(t, 3), fi)
                        }

                        function Ul(e, t) {
                            return null == e ? e : gd(e, ka(t, 3), Gl)
                        }

                        function Rl(e, t) {
                            return null == e ? e : bd(e, ka(t, 3), Gl)
                        }

                        function Dl(e, t) {
                            return e && mi(e, ka(t, 3))
                        }

                        function Fl(e, t) {
                            return e && fi(e, ka(t, 3))
                        }

                        function xl(e) {
                            return null == e ? [] : hi(e, Vl(e))
                        }

                        function jl(e) {
                            return null == e ? [] : hi(e, Gl(e))
                        }

                        function Ll(e, t, n) {
                            var i = null == e ? re : gi(e, t);
                            return i === re ? n : i
                        }

                        function Al(e, t) {
                            return null != e && Na(e, t, Si)
                        }

                        function Ml(e, t) {
                            return null != e && Na(e, t, ki)
                        }

                        function Vl(e) {
                            return qs(e) ? Rn(e) : Ai(e)
                        }

                        function Gl(e) {
                            return qs(e) ? Rn(e, !0) : Mi(e)
                        }

                        function Bl(e, t) {
                            var n = {};
                            return t = ka(t, 3), mi(e, function(e, i, r) {
                                ei(n, t(e, i, r), e)
                            }), n
                        }

                        function zl(e, t) {
                            var n = {};
                            return t = ka(t, 3), mi(e, function(e, i, r) {
                                ei(n, i, t(e, i, r))
                            }), n
                        }

                        function Wl(e, t) {
                            return Hl(e, Rs(ka(t)))
                        }

                        function Hl(e, t) {
                            if (null == e) return {};
                            var n = h(va(e), function(e) {
                                return [e]
                            });
                            return t = ka(t), Qi(e, n, function(e, n) {
                                return t(e, n[0])
                            })
                        }

                        function ql(e, t, n) {
                            t = Er(t, e);
                            var i = -1,
                                r = t.length;
                            for (r || (r = 1, e = re); ++i < r;) {
                                var a = null == e ? re : e[Ja(t[i])];
                                a === re && (i = r, a = n), e = tl(a) ? a.call(e) : a
                            }
                            return e
                        }

                        function $l(e, t, n) {
                            return null == e ? e : ar(e, t, n)
                        }

                        function Kl(e, t, n, i) {
                            return i = "function" == typeof i ? i : re, null == e ? e : ar(e, t, n, i)
                        }

                        function Ql(e, t, n) {
                            var i = gp(e),
                                r = i || vp(e) || Ep(e);
                            if (t = ka(t, 4), null == n) {
                                var a = e && e.constructor;
                                n = r ? i ? new a : [] : rl(e) && tl(a) ? md(wc(e)) : {}
                            }
                            return (r ? u : mi)(e, function(e, i, r) {
                                return t(n, e, i, r)
                            }), n
                        }

                        function Yl(e, t) {
                            return null == e || hr(e, t)
                        }

                        function Zl(e, t, n) {
                            return null == e ? e : gr(e, t, _r(n))
                        }

                        function Jl(e, t, n, i) {
                            return i = "function" == typeof i ? i : re, null == e ? e : gr(e, t, _r(n), i)
                        }

                        function Xl(e) {
                            return null == e ? [] : j(e, Vl(e))
                        }

                        function eu(e) {
                            return null == e ? [] : j(e, Gl(e))
                        }

                        function tu(e, t, n) {
                            return n === re && (n = t, t = re), n !== re && (n = Tl(n), n = n === n ? n : 0), t !== re && (t = Tl(t), t = t === t ? t : 0), ni(Tl(e), t, n)
                        }

                        function nu(e, t, n) {
                            return t = kl(t), n === re ? (n = t, t = 0) : n = kl(n), e = Tl(e), _i(e, t, n)
                        }

                        function iu(e, t, n) {
                            if (n && "boolean" != typeof n && xa(e, t, n) && (t = n = re), n === re && ("boolean" == typeof t ? (n = t, t = re) : "boolean" == typeof e && (n = e, e = re)), e === re && t === re ? (e = 0, t = 1) : (e = kl(e), t === re ? (t = e, e = 0) : t = kl(t)), e > t) {
                                var i = e;
                                e = t, t = i
                            }
                            if (n || e % 1 || t % 1) {
                                var r = Qc();
                                return qc(e + r * (t - e + On("1e-" + ((r + "").length - 1))), t)
                            }
                            return Xi(e, t)
                        }

                        function ru(e) {
                            return Qp(wl(e).toLowerCase())
                        }

                        function au(e) {
                            return (e = wl(e)) && e.replace(Qt, qn).replace(gn, "")
                        }

                        function ou(e, t, n) {
                            e = wl(e), t = mr(t);
                            var i = e.length;
                            n = n === re ? i : ni(_l(n), 0, i);
                            var r = n;
                            return (n -= t.length) >= 0 && e.slice(n, r) == t
                        }

                        function su(e) {
                            return e = wl(e), e && Tt.test(e) ? e.replace(_t, $n) : e
                        }

                        function lu(e) {
                            return e = wl(e), e && Dt.test(e) ? e.replace(Rt, "\\$&") : e
                        }

                        function uu(e, t, n) {
                            e = wl(e), t = _l(t);
                            var i = t ? X(e) : 0;
                            if (!t || i >= t) return e;
                            var r = (t - i) / 2;
                            return na(Mc(r), n) + e + na(Ac(r), n)
                        }

                        function cu(e, t, n) {
                            e = wl(e), t = _l(t);
                            var i = t ? X(e) : 0;
                            return t && i < t ? e + na(t - i, n) : e
                        }

                        function du(e, t, n) {
                            e = wl(e), t = _l(t);
                            var i = t ? X(e) : 0;
                            return t && i < t ? na(t - i, n) + e : e
                        }

                        function pu(e, t, n) {
                            return n || null == t ? t = 0 : t && (t = +t), Kc(wl(e).replace(xt, ""), t || 0)
                        }

                        function mu(e, t, n) {
                            return t = (n ? xa(e, t, n) : t === re) ? 1 : _l(t), tr(wl(e), t)
                        }

                        function fu() {
                            var e = arguments,
                                t = wl(e[0]);
                            return e.length < 3 ? t : t.replace(e[1], e[2])
                        }

                        function hu(e, t, n) {
                            return n && "number" != typeof n && xa(e, t, n) && (t = n = re), (n = n === re ? je : n >>> 0) ? (e = wl(e), e && ("string" == typeof t || null != t && !kp(t)) && !(t = mr(t)) && z(e) ? Tr(ee(e), 0, n) : e.split(t, n)) : []
                        }

                        function gu(e, t, n) {
                            return e = wl(e), n = null == n ? 0 : ni(_l(n), 0, e.length), t = mr(t), e.slice(n, n + t.length) == t
                        }

                        function bu(e, t, i) {
                            var r = n.templateSettings;
                            i && xa(e, t, i) && (t = re), e = wl(e), t = Np({}, t, r, ca);
                            var a, o, s = Np({}, t.imports, r.imports, ca),
                                l = Vl(s),
                                u = j(s, l),
                                c = 0,
                                d = t.interpolate || Yt,
                                p = "__p += '",
                                m = lc((t.escape || Yt).source + "|" + d.source + "|" + (d === wt ? Bt : Yt).source + "|" + (t.evaluate || Yt).source + "|$", "g"),
                                f = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++_n + "]") + "\n";
                            e.replace(m, function(t, n, i, r, s, l) {
                                return i || (i = r), p += e.slice(c, l).replace(Zt, G), n && (a = !0, p += "' +\n__e(" + n + ") +\n'"), s && (o = !0, p += "';\n" + s + ";\n__p += '"), i && (p += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), c = l + t.length, t
                            }), p += "';\n";
                            var h = t.variable;
                            h || (p = "with (obj) {\n" + p + "\n}\n"), p = (o ? p.replace(vt, "") : p).replace(yt, "$1").replace(St, "$1;"), p = "function(" + (h || "obj") + ") {\n" + (h ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                            var g = Yp(function() {
                                return ac(l, f + "return " + p).apply(re, u)
                            });
                            if (g.source = p, Xs(g)) throw g;
                            return g
                        }

                        function vu(e) {
                            return wl(e).toLowerCase()
                        }

                        function yu(e) {
                            return wl(e).toUpperCase()
                        }

                        function Su(e, t, n) {
                            if ((e = wl(e)) && (n || t === re)) return e.replace(Ft, "");
                            if (!e || !(t = mr(t))) return e;
                            var i = ee(e),
                                r = ee(t);
                            return Tr(i, A(i, r), M(i, r) + 1).join("")
                        }

                        function ku(e, t, n) {
                            if ((e = wl(e)) && (n || t === re)) return e.replace(jt, "");
                            if (!e || !(t = mr(t))) return e;
                            var i = ee(e);
                            return Tr(i, 0, M(i, ee(t)) + 1).join("")
                        }

                        function _u(e, t, n) {
                            if ((e = wl(e)) && (n || t === re)) return e.replace(xt, "");
                            if (!e || !(t = mr(t))) return e;
                            var i = ee(e);
                            return Tr(i, A(i, ee(t))).join("")
                        }

                        function Eu(e, t) {
                            var n = Pe,
                                i = we;
                            if (rl(t)) {
                                var r = "separator" in t ? t.separator : r;
                                n = "length" in t ? _l(t.length) : n, i = "omission" in t ? mr(t.omission) : i
                            }
                            e = wl(e);
                            var a = e.length;
                            if (z(e)) {
                                var o = ee(e);
                                a = o.length
                            }
                            if (n >= a) return e;
                            var s = n - X(i);
                            if (s < 1) return i;
                            var l = o ? Tr(o, 0, s).join("") : e.slice(0, s);
                            if (r === re) return l + i;
                            if (o && (s += l.length - s), kp(r)) {
                                if (e.slice(s).search(r)) {
                                    var u, c = l;
                                    for (r.global || (r = lc(r.source, wl(zt.exec(r)) + "g")), r.lastIndex = 0; u = r.exec(c);) var d = u.index;
                                    l = l.slice(0, d === re ? s : d)
                                }
                            } else if (e.indexOf(mr(r), s) != s) {
                                var p = l.lastIndexOf(r);
                                p > -1 && (l = l.slice(0, p))
                            }
                            return l + i
                        }

                        function Tu(e) {
                            return e = wl(e), e && Et.test(e) ? e.replace(kt, Kn) : e
                        }

                        function Cu(e, t, n) {
                            return e = wl(e), t = n ? re : t, t === re ? W(e) ? ie(e) : k(e) : e.match(t) || []
                        }

                        function Pu(e) {
                            var t = null == e ? 0 : e.length,
                                n = ka();
                            return e = t ? h(e, function(e) {
                                if ("function" != typeof e[1]) throw new cc(se);
                                return [n(e[0]), e[1]]
                            }) : [], nr(function(n) {
                                for (var i = -1; ++i < t;) {
                                    var r = e[i];
                                    if (s(r[0], this, n)) return s(r[1], this, n)
                                }
                            })
                        }

                        function wu(e) {
                            return ri(ii(e, de))
                        }

                        function Nu(e) {
                            return function() {
                                return e
                            }
                        }

                        function Ou(e, t) {
                            return null == e || e !== e ? t : e
                        }

                        function Iu(e) {
                            return e
                        }

                        function Uu(e) {
                            return Li("function" == typeof e ? e : ii(e, de))
                        }

                        function Ru(e) {
                            return Bi(ii(e, de))
                        }

                        function Du(e, t) {
                            return zi(e, ii(t, de))
                        }

                        function Fu(e, t, n) {
                            var i = Vl(t),
                                r = hi(t, i);
                            null != n || rl(t) && (r.length || !i.length) || (n = t, t = e, e = this, r = hi(t, Vl(t)));
                            var a = !(rl(n) && "chain" in n && !n.chain),
                                o = tl(e);
                            return u(r, function(n) {
                                var i = t[n];
                                e[n] = i, o && (e.prototype[n] = function() {
                                    var t = this.__chain__;
                                    if (a || t) {
                                        var n = e(this.__wrapped__);
                                        return (n.__actions__ = Lr(this.__actions__)).push({
                                            func: i,
                                            args: arguments,
                                            thisArg: e
                                        }), n.__chain__ = t, n
                                    }
                                    return i.apply(e, g([this.value()], arguments))
                                })
                            }), e
                        }

                        function xu() {
                            return Dn._ === this && (Dn._ = kc), this
                        }

                        function ju() {}

                        function Lu(e) {
                            return e = _l(e), nr(function(t) {
                                return qi(t, e)
                            })
                        }

                        function Au(e) {
                            return ja(e) ? N(Ja(e)) : Yi(e)
                        }

                        function Mu(e) {
                            return function(t) {
                                return null == e ? re : gi(e, t)
                            }
                        }

                        function Vu() {
                            return []
                        }

                        function Gu() {
                            return !1
                        }

                        function Bu() {
                            return {}
                        }

                        function zu() {
                            return ""
                        }

                        function Wu() {
                            return !0
                        }

                        function Hu(e, t) {
                            if ((e = _l(e)) < 1 || e > De) return [];
                            var n = je,
                                i = qc(e, je);
                            t = ka(t), e -= je;
                            for (var r = D(i, t); ++n < e;) t(n);
                            return r
                        }

                        function qu(e) {
                            return gp(e) ? h(e, Ja) : gl(e) ? [e] : Lr(Ud(wl(e)))
                        }

                        function $u(e) {
                            var t = ++bc;
                            return wl(e) + t
                        }

                        function Ku(e) {
                            return e && e.length ? ui(e, Iu, yi) : re
                        }

                        function Qu(e, t) {
                            return e && e.length ? ui(e, ka(t, 2), yi) : re
                        }

                        function Yu(e) {
                            return w(e, Iu)
                        }

                        function Zu(e, t) {
                            return w(e, ka(t, 2))
                        }

                        function Ju(e) {
                            return e && e.length ? ui(e, Iu, Vi) : re
                        }

                        function Xu(e, t) {
                            return e && e.length ? ui(e, ka(t, 2), Vi) : re
                        }

                        function ec(e) {
                            return e && e.length ? R(e, Iu) : 0
                        }

                        function tc(e, t) {
                            return e && e.length ? R(e, ka(t, 2)) : 0
                        }
                        t = null == t ? Dn : Qn.defaults(Dn.Object(), t, Qn.pick(Dn, kn));
                        var nc = t.Array,
                            ic = t.Date,
                            rc = t.Error,
                            ac = t.Function,
                            oc = t.Math,
                            sc = t.Object,
                            lc = t.RegExp,
                            uc = t.String,
                            cc = t.TypeError,
                            dc = nc.prototype,
                            pc = ac.prototype,
                            mc = sc.prototype,
                            fc = t["__core-js_shared__"],
                            hc = pc.toString,
                            gc = mc.hasOwnProperty,
                            bc = 0,
                            vc = function() {
                                var e = /[^.]+$/.exec(fc && fc.keys && fc.keys.IE_PROTO || "");
                                return e ? "Symbol(src)_1." + e : ""
                            }(),
                            yc = mc.toString,
                            Sc = hc.call(sc),
                            kc = Dn._,
                            _c = lc("^" + hc.call(gc).replace(Rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            Ec = jn ? t.Buffer : re,
                            Tc = t.Symbol,
                            Cc = t.Uint8Array,
                            Pc = Ec ? Ec.allocUnsafe : re,
                            wc = $(sc.getPrototypeOf, sc),
                            Nc = sc.create,
                            Oc = mc.propertyIsEnumerable,
                            Ic = dc.splice,
                            Uc = Tc ? Tc.isConcatSpreadable : re,
                            Rc = Tc ? Tc.iterator : re,
                            Dc = Tc ? Tc.toStringTag : re,
                            Fc = function() {
                                try {
                                    var e = Ta(sc, "defineProperty");
                                    return e({}, "", {}), e
                                } catch (e) {}
                            }(),
                            xc = t.clearTimeout !== Dn.clearTimeout && t.clearTimeout,
                            jc = ic && ic.now !== Dn.Date.now && ic.now,
                            Lc = t.setTimeout !== Dn.setTimeout && t.setTimeout,
                            Ac = oc.ceil,
                            Mc = oc.floor,
                            Vc = sc.getOwnPropertySymbols,
                            Gc = Ec ? Ec.isBuffer : re,
                            Bc = t.isFinite,
                            zc = dc.join,
                            Wc = $(sc.keys, sc),
                            Hc = oc.max,
                            qc = oc.min,
                            $c = ic.now,
                            Kc = t.parseInt,
                            Qc = oc.random,
                            Yc = dc.reverse,
                            Zc = Ta(t, "DataView"),
                            Jc = Ta(t, "Map"),
                            Xc = Ta(t, "Promise"),
                            ed = Ta(t, "Set"),
                            td = Ta(t, "WeakMap"),
                            nd = Ta(sc, "create"),
                            id = td && new td,
                            rd = {},
                            ad = Xa(Zc),
                            od = Xa(Jc),
                            sd = Xa(Xc),
                            ld = Xa(ed),
                            ud = Xa(td),
                            cd = Tc ? Tc.prototype : re,
                            dd = cd ? cd.valueOf : re,
                            pd = cd ? cd.toString : re,
                            md = function() {
                                function e() {}
                                return function(t) {
                                    if (!rl(t)) return {};
                                    if (Nc) return Nc(t);
                                    e.prototype = t;
                                    var n = new e;
                                    return e.prototype = re, n
                                }
                            }();
                        n.templateSettings = {
                            escape: Ct,
                            evaluate: Pt,
                            interpolate: wt,
                            variable: "",
                            imports: {
                                _: n
                            }
                        }, n.prototype = i.prototype, n.prototype.constructor = n, r.prototype = md(i.prototype), r.prototype.constructor = r, S.prototype = md(i.prototype), S.prototype.constructor = S, ne.prototype.clear = Vt, ne.prototype.delete = Jt, ne.prototype.get = Xt, ne.prototype.has = en, ne.prototype.set = tn, nn.prototype.clear = rn, nn.prototype.delete = an, nn.prototype.get = on, nn.prototype.has = sn, nn.prototype.set = ln, un.prototype.clear = cn, un.prototype.delete = dn, un.prototype.get = pn, un.prototype.has = mn, un.prototype.set = fn, bn.prototype.add = bn.prototype.push = vn, bn.prototype.has = yn, Sn.prototype.clear = Cn, Sn.prototype.delete = Pn, Sn.prototype.get = wn, Sn.prototype.has = Nn, Sn.prototype.set = Un;
                        var fd = zr(mi),
                            hd = zr(fi, !0),
                            gd = Wr(),
                            bd = Wr(!0),
                            vd = id ? function(e, t) {
                                return id.set(e, t), e
                            } : Iu,
                            yd = Fc ? function(e, t) {
                                return Fc(e, "toString", {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: Nu(t),
                                    writable: !0
                                })
                            } : Iu,
                            Sd = nr,
                            kd = xc || function(e) {
                                return Dn.clearTimeout(e)
                            },
                            _d = ed && 1 / Q(new ed([, -0]))[1] == Re ? function(e) {
                                return new ed(e)
                            } : ju,
                            Ed = id ? function(e) {
                                return id.get(e)
                            } : ju,
                            Td = Vc ? function(e) {
                                return null == e ? [] : (e = sc(e), p(Vc(e), function(t) {
                                    return Oc.call(e, t)
                                }))
                            } : Vu,
                            Cd = Vc ? function(e) {
                                for (var t = []; e;) g(t, Td(e)), e = wc(e);
                                return t
                            } : Vu,
                            Pd = vi;
                        (Zc && Pd(new Zc(new ArrayBuffer(1))) != lt || Jc && Pd(new Jc) != Qe || Xc && "[object Promise]" != Pd(Xc.resolve()) || ed && Pd(new ed) != tt || td && Pd(new td) != at) && (Pd = function(e) {
                            var t = vi(e),
                                n = t == Je ? e.constructor : re,
                                i = n ? Xa(n) : "";
                            if (i) switch (i) {
                                case ad:
                                    return lt;
                                case od:
                                    return Qe;
                                case sd:
                                    return "[object Promise]";
                                case ld:
                                    return tt;
                                case ud:
                                    return at
                            }
                            return t
                        });
                        var wd = fc ? tl : Gu,
                            Nd = Ya(vd),
                            Od = Lc || function(e, t) {
                                return Dn.setTimeout(e, t)
                            },
                            Id = Ya(yd),
                            Ud = function(e) {
                                var t = Us(e, function(e) {
                                        return n.size === ue && n.clear(), e
                                    }),
                                    n = t.cache;
                                return t
                            }(function(e) {
                                var t = [];
                                return It.test(e) && t.push(""), e.replace(Ut, function(e, n, i, r) {
                                    t.push(i ? r.replace(Gt, "$1") : n || e)
                                }), t
                            }),
                            Rd = nr(function(e, t) {
                                return $s(e) ? si(e, pi(t, 1, $s, !0)) : []
                            }),
                            Dd = nr(function(e, t) {
                                var n = ko(t);
                                return $s(n) && (n = re), $s(e) ? si(e, pi(t, 1, $s, !0), ka(n, 2)) : []
                            }),
                            Fd = nr(function(e, t) {
                                var n = ko(t);
                                return $s(n) && (n = re), $s(e) ? si(e, pi(t, 1, $s, !0), re, n) : []
                            }),
                            xd = nr(function(e) {
                                var t = h(e, kr);
                                return t.length && t[0] === e[0] ? Ei(t) : []
                            }),
                            jd = nr(function(e) {
                                var t = ko(e),
                                    n = h(e, kr);
                                return t === ko(n) ? t = re : n.pop(), n.length && n[0] === e[0] ? Ei(n, ka(t, 2)) : []
                            }),
                            Ld = nr(function(e) {
                                var t = ko(e),
                                    n = h(e, kr);
                                return t = "function" == typeof t ? t : re, t && n.pop(), n.length && n[0] === e[0] ? Ei(n, re, t) : []
                            }),
                            Ad = nr(To),
                            Md = ga(function(e, t) {
                                var n = null == e ? 0 : e.length,
                                    i = ti(e, t);
                                return Ji(e, h(t, function(e) {
                                    return Fa(e, n) ? +e : e
                                }).sort(Dr)), i
                            }),
                            Vd = nr(function(e) {
                                return fr(pi(e, 1, $s, !0))
                            }),
                            Gd = nr(function(e) {
                                var t = ko(e);
                                return $s(t) && (t = re), fr(pi(e, 1, $s, !0), ka(t, 2))
                            }),
                            Bd = nr(function(e) {
                                var t = ko(e);
                                return t = "function" == typeof t ? t : re, fr(pi(e, 1, $s, !0), re, t)
                            }),
                            zd = nr(function(e, t) {
                                return $s(e) ? si(e, t) : []
                            }),
                            Wd = nr(function(e) {
                                return yr(p(e, $s))
                            }),
                            Hd = nr(function(e) {
                                var t = ko(e);
                                return $s(t) && (t = re), yr(p(e, $s), ka(t, 2))
                            }),
                            qd = nr(function(e) {
                                var t = ko(e);
                                return t = "function" == typeof t ? t : re, yr(p(e, $s), re, t)
                            }),
                            $d = nr(qo),
                            Kd = nr(function(e) {
                                var t = e.length,
                                    n = t > 1 ? e[t - 1] : re;
                                return n = "function" == typeof n ? (e.pop(), n) : re, $o(e, n)
                            }),
                            Qd = ga(function(e) {
                                var t = e.length,
                                    n = t ? e[0] : 0,
                                    i = this.__wrapped__,
                                    a = function(t) {
                                        return ti(t, e)
                                    };
                                return !(t > 1 || this.__actions__.length) && i instanceof S && Fa(n) ? (i = i.slice(n, +n + (t ? 1 : 0)), i.__actions__.push({
                                    func: Jo,
                                    args: [a],
                                    thisArg: re
                                }), new r(i, this.__chain__).thru(function(e) {
                                    return t && !e.length && e.push(re), e
                                })) : this.thru(a)
                            }),
                            Yd = Gr(function(e, t, n) {
                                gc.call(e, n) ? ++e[n] : ei(e, n, 1)
                            }),
                            Zd = Yr(co),
                            Jd = Yr(po),
                            Xd = Gr(function(e, t, n) {
                                gc.call(e, n) ? e[n].push(t) : ei(e, n, [t])
                            }),
                            ep = nr(function(e, t, n) {
                                var i = -1,
                                    r = "function" == typeof t,
                                    a = qs(e) ? nc(e.length) : [];
                                return fd(e, function(e) {
                                    a[++i] = r ? s(t, e, n) : Ci(e, t, n)
                                }), a
                            }),
                            tp = Gr(function(e, t, n) {
                                ei(e, n, t)
                            }),
                            np = Gr(function(e, t, n) {
                                e[n ? 0 : 1].push(t)
                            }, function() {
                                return [
                                    [],
                                    []
                                ]
                            }),
                            ip = nr(function(e, t) {
                                if (null == e) return [];
                                var n = t.length;
                                return n > 1 && xa(e, t[0], t[1]) ? t = [] : n > 2 && xa(t[0], t[1], t[2]) && (t = [t[0]]), $i(e, pi(t, 1), [])
                            }),
                            rp = jc || function() {
                                return Dn.Date.now()
                            },
                            ap = nr(function(e, t, n) {
                                var i = ge;
                                if (n.length) {
                                    var r = K(n, Sa(ap));
                                    i |= ke
                                }
                                return ua(e, i, t, n, r)
                            }),
                            op = nr(function(e, t, n) {
                                var i = ge | be;
                                if (n.length) {
                                    var r = K(n, Sa(op));
                                    i |= ke
                                }
                                return ua(t, i, e, n, r)
                            }),
                            sp = nr(function(e, t) {
                                return oi(e, 1, t)
                            }),
                            lp = nr(function(e, t, n) {
                                return oi(e, Tl(t) || 0, n)
                            });
                        Us.Cache = un;
                        var up = Sd(function(e, t) {
                                t = 1 == t.length && gp(t[0]) ? h(t[0], x(ka())) : h(pi(t, 1), x(ka()));
                                var n = t.length;
                                return nr(function(i) {
                                    for (var r = -1, a = qc(i.length, n); ++r < a;) i[r] = t[r].call(this, i[r]);
                                    return s(e, this, i)
                                })
                            }),
                            cp = nr(function(e, t) {
                                var n = K(t, Sa(cp));
                                return ua(e, ke, re, t, n)
                            }),
                            dp = nr(function(e, t) {
                                var n = K(t, Sa(dp));
                                return ua(e, _e, re, t, n)
                            }),
                            pp = ga(function(e, t) {
                                return ua(e, Te, re, re, re, t)
                            }),
                            mp = aa(yi),
                            fp = aa(function(e, t) {
                                return e >= t
                            }),
                            hp = Pi(function() {
                                return arguments
                            }()) ? Pi : function(e) {
                                return al(e) && gc.call(e, "callee") && !Oc.call(e, "callee")
                            },
                            gp = nc.isArray,
                            bp = Mn ? x(Mn) : wi,
                            vp = Gc || Gu,
                            yp = Vn ? x(Vn) : Ni,
                            Sp = Gn ? x(Gn) : Ui,
                            kp = Bn ? x(Bn) : Fi,
                            _p = zn ? x(zn) : xi,
                            Ep = Wn ? x(Wn) : ji,
                            Tp = aa(Vi),
                            Cp = aa(function(e, t) {
                                return e <= t
                            }),
                            Pp = Br(function(e, t) {
                                if (Va(t) || qs(t)) return void Ar(t, Vl(t), e);
                                for (var n in t) gc.call(t, n) && Hn(e, n, t[n])
                            }),
                            wp = Br(function(e, t) {
                                Ar(t, Gl(t), e)
                            }),
                            Np = Br(function(e, t, n, i) {
                                Ar(t, Gl(t), e, i)
                            }),
                            Op = Br(function(e, t, n, i) {
                                Ar(t, Vl(t), e, i)
                            }),
                            Ip = ga(ti),
                            Up = nr(function(e) {
                                return e.push(re, ca), s(Np, re, e)
                            }),
                            Rp = nr(function(e) {
                                return e.push(re, da), s(Lp, re, e)
                            }),
                            Dp = Xr(function(e, t, n) {
                                e[t] = n
                            }, Nu(Iu)),
                            Fp = Xr(function(e, t, n) {
                                gc.call(e, t) ? e[t].push(n) : e[t] = [n]
                            }, ka),
                            xp = nr(Ci),
                            jp = Br(function(e, t, n) {
                                Wi(e, t, n)
                            }),
                            Lp = Br(function(e, t, n, i) {
                                Wi(e, t, n, i)
                            }),
                            Ap = ga(function(e, t) {
                                var n = {};
                                if (null == e) return n;
                                var i = !1;
                                t = h(t, function(t) {
                                    return t = Er(t, e), i || (i = t.length > 1), t
                                }), Ar(e, va(e), n), i && (n = ii(n, de | pe | me, pa));
                                for (var r = t.length; r--;) hr(n, t[r]);
                                return n
                            }),
                            Mp = ga(function(e, t) {
                                return null == e ? {} : Ki(e, t)
                            }),
                            Vp = la(Vl),
                            Gp = la(Gl),
                            Bp = $r(function(e, t, n) {
                                return t = t.toLowerCase(), e + (n ? ru(t) : t)
                            }),
                            zp = $r(function(e, t, n) {
                                return e + (n ? "-" : "") + t.toLowerCase()
                            }),
                            Wp = $r(function(e, t, n) {
                                return e + (n ? " " : "") + t.toLowerCase()
                            }),
                            Hp = qr("toLowerCase"),
                            qp = $r(function(e, t, n) {
                                return e + (n ? "_" : "") + t.toLowerCase()
                            }),
                            $p = $r(function(e, t, n) {
                                return e + (n ? " " : "") + Qp(t)
                            }),
                            Kp = $r(function(e, t, n) {
                                return e + (n ? " " : "") + t.toUpperCase()
                            }),
                            Qp = qr("toUpperCase"),
                            Yp = nr(function(e, t) {
                                try {
                                    return s(e, re, t)
                                } catch (e) {
                                    return Xs(e) ? e : new rc(e)
                                }
                            }),
                            Zp = ga(function(e, t) {
                                return u(t, function(t) {
                                    t = Ja(t), ei(e, t, ap(e[t], e))
                                }), e
                            }),
                            Jp = Zr(),
                            Xp = Zr(!0),
                            em = nr(function(e, t) {
                                return function(n) {
                                    return Ci(n, e, t)
                                }
                            }),
                            tm = nr(function(e, t) {
                                return function(n) {
                                    return Ci(e, n, t)
                                }
                            }),
                            nm = ta(h),
                            im = ta(d),
                            rm = ta(y),
                            am = ra(),
                            om = ra(!0),
                            sm = ea(function(e, t) {
                                return e + t
                            }, 0),
                            lm = sa("ceil"),
                            um = ea(function(e, t) {
                                return e / t
                            }, 1),
                            cm = sa("floor"),
                            dm = ea(function(e, t) {
                                return e * t
                            }, 1),
                            pm = sa("round"),
                            mm = ea(function(e, t) {
                                return e - t
                            }, 0);
                        return n.after = Ts, n.ary = Cs, n.assign = Pp, n.assignIn = wp, n.assignInWith = Np, n.assignWith = Op, n.at = Ip, n.before = Ps, n.bind = ap, n.bindAll = Zp, n.bindKey = op, n.castArray = Ms, n.chain = Yo, n.chunk = no, n.compact = io, n.concat = ro, n.cond = Pu, n.conforms = wu, n.constant = Nu, n.countBy = Yd, n.create = Nl, n.curry = ws, n.curryRight = Ns, n.debounce = Os, n.defaults = Up, n.defaultsDeep = Rp, n.defer = sp, n.delay = lp, n.difference = Rd, n.differenceBy = Dd, n.differenceWith = Fd, n.drop = ao, n.dropRight = oo, n.dropRightWhile = so, n.dropWhile = lo, n.fill = uo, n.filter = ss, n.flatMap = ls, n.flatMapDeep = us, n.flatMapDepth = cs, n.flatten = mo, n.flattenDeep = fo, n.flattenDepth = ho, n.flip = Is, n.flow = Jp, n.flowRight = Xp, n.fromPairs = go, n.functions = xl, n.functionsIn = jl, n.groupBy = Xd, n.initial = yo, n.intersection = xd, n.intersectionBy = jd, n.intersectionWith = Ld, n.invert = Dp, n.invertBy = Fp, n.invokeMap = ep, n.iteratee = Uu, n.keyBy = tp, n.keys = Vl, n.keysIn = Gl, n.map = fs, n.mapKeys = Bl, n.mapValues = zl, n.matches = Ru, n.matchesProperty = Du, n.memoize = Us, n.merge = jp, n.mergeWith = Lp, n.method = em, n.methodOf = tm, n.mixin = Fu, n.negate = Rs, n.nthArg = Lu, n.omit = Ap, n.omitBy = Wl, n.once = Ds, n.orderBy = hs, n.over = nm, n.overArgs = up, n.overEvery = im, n.overSome = rm, n.partial = cp, n.partialRight = dp, n.partition = np, n.pick = Mp, n.pickBy = Hl, n.property = Au, n.propertyOf = Mu, n.pull = Ad, n.pullAll = To, n.pullAllBy = Co, n.pullAllWith = Po, n.pullAt = Md, n.range = am, n.rangeRight = om, n.rearg = pp, n.reject = vs, n.remove = wo, n.rest = Fs, n.reverse = No, n.sampleSize = Ss, n.set = $l, n.setWith = Kl, n.shuffle = ks, n.slice = Oo, n.sortBy = ip, n.sortedUniq = jo, n.sortedUniqBy = Lo, n.split = hu, n.spread = xs, n.tail = Ao, n.take = Mo, n.takeRight = Vo, n.takeRightWhile = Go, n.takeWhile = Bo, n.tap = Zo, n.throttle = js, n.thru = Jo, n.toArray = Sl, n.toPairs = Vp, n.toPairsIn = Gp, n.toPath = qu, n.toPlainObject = Cl, n.transform = Ql, n.unary = Ls, n.union = Vd, n.unionBy = Gd, n.unionWith = Bd, n.uniq = zo, n.uniqBy = Wo, n.uniqWith = Ho, n.unset = Yl, n.unzip = qo, n.unzipWith = $o, n.update = Zl, n.updateWith = Jl, n.values = Xl, n.valuesIn = eu, n.without = zd, n.words = Cu, n.wrap = As, n.xor = Wd, n.xorBy = Hd, n.xorWith = qd, n.zip = $d, n.zipObject = Ko, n.zipObjectDeep = Qo, n.zipWith = Kd, n.entries = Vp, n.entriesIn = Gp, n.extend = wp, n.extendWith = Np, Fu(n, n), n.add = sm, n.attempt = Yp, n.camelCase = Bp, n.capitalize = ru, n.ceil = lm, n.clamp = tu, n.clone = Vs, n.cloneDeep = Bs, n.cloneDeepWith = zs, n.cloneWith = Gs, n.conformsTo = Ws, n.deburr = au, n.defaultTo = Ou, n.divide = um, n.endsWith = ou, n.eq = Hs, n.escape = su, n.escapeRegExp = lu, n.every = os, n.find = Zd, n.findIndex = co, n.findKey = Ol, n.findLast = Jd, n.findLastIndex = po, n.findLastKey = Il, n.floor = cm, n.forEach = ds, n.forEachRight = ps, n.forIn = Ul, n.forInRight = Rl, n.forOwn = Dl, n.forOwnRight = Fl, n.get = Ll, n.gt = mp, n.gte = fp, n.has = Al, n.hasIn = Ml, n.head = bo, n.identity = Iu, n.includes = ms, n.indexOf = vo, n.inRange = nu, n.invoke = xp, n.isArguments = hp, n.isArray = gp, n.isArrayBuffer = bp, n.isArrayLike = qs, n.isArrayLikeObject = $s, n.isBoolean = Ks, n.isBuffer = vp, n.isDate = yp, n.isElement = Qs, n.isEmpty = Ys, n.isEqual = Zs, n.isEqualWith = Js, n.isError = Xs, n.isFinite = el, n.isFunction = tl, n.isInteger = nl, n.isLength = il, n.isMap = Sp, n.isMatch = ol, n.isMatchWith = sl, n.isNaN = ll, n.isNative = ul, n.isNil = dl, n.isNull = cl, n.isNumber = pl, n.isObject = rl, n.isObjectLike = al, n.isPlainObject = ml, n.isRegExp = kp, n.isSafeInteger = fl, n.isSet = _p, n.isString = hl, n.isSymbol = gl, n.isTypedArray = Ep, n.isUndefined = bl, n.isWeakMap = vl, n.isWeakSet = yl, n.join = So, n.kebabCase = zp, n.last = ko, n.lastIndexOf = _o, n.lowerCase = Wp, n.lowerFirst = Hp, n.lt = Tp, n.lte = Cp, n.max = Ku, n.maxBy = Qu, n.mean = Yu, n.meanBy = Zu, n.min = Ju, n.minBy = Xu, n.stubArray = Vu, n.stubFalse = Gu, n.stubObject = Bu, n.stubString = zu, n.stubTrue = Wu, n.multiply = dm, n.nth = Eo, n.noConflict = xu, n.noop = ju, n.now = rp, n.pad = uu, n.padEnd = cu, n.padStart = du, n.parseInt = pu, n.random = iu, n.reduce = gs, n.reduceRight = bs, n.repeat = mu, n.replace = fu, n.result = ql, n.round = pm, n.runInContext = e, n.sample = ys, n.size = _s, n.snakeCase = qp, n.some = Es, n.sortedIndex = Io, n.sortedIndexBy = Uo, n.sortedIndexOf = Ro, n.sortedLastIndex = Do, n.sortedLastIndexBy = Fo, n.sortedLastIndexOf = xo, n.startCase = $p, n.startsWith = gu, n.subtract = mm, n.sum = ec, n.sumBy = tc, n.template = bu, n.times = Hu, n.toFinite = kl, n.toInteger = _l, n.toLength = El, n.toLower = vu, n.toNumber = Tl, n.toSafeInteger = Pl, n.toString = wl, n.toUpper = yu, n.trim = Su, n.trimEnd = ku, n.trimStart = _u, n.truncate = Eu, n.unescape = Tu, n.uniqueId = $u, n.upperCase = Kp, n.upperFirst = Qp, n.each = ds, n.eachRight = ps, n.first = bo, Fu(n, function() {
                            var e = {};
                            return mi(n, function(t, i) {
                                gc.call(n.prototype, i) || (e[i] = t)
                            }), e
                        }(), {
                            chain: !1
                        }), n.VERSION = "4.17.4", u(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                            n[e].placeholder = n
                        }), u(["drop", "take"], function(e, t) {
                            S.prototype[e] = function(n) {
                                n = n === re ? 1 : Hc(_l(n), 0);
                                var i = this.__filtered__ && !t ? new S(this) : this.clone();
                                return i.__filtered__ ? i.__takeCount__ = qc(n, i.__takeCount__) : i.__views__.push({
                                    size: qc(n, je),
                                    type: e + (i.__dir__ < 0 ? "Right" : "")
                                }), i
                            }, S.prototype[e + "Right"] = function(t) {
                                return this.reverse()[e](t).reverse()
                            }
                        }), u(["filter", "map", "takeWhile"], function(e, t) {
                            var n = t + 1,
                                i = n == Ie || 3 == n;
                            S.prototype[e] = function(e) {
                                var t = this.clone();
                                return t.__iteratees__.push({
                                    iteratee: ka(e, 3),
                                    type: n
                                }), t.__filtered__ = t.__filtered__ || i, t
                            }
                        }), u(["head", "last"], function(e, t) {
                            var n = "take" + (t ? "Right" : "");
                            S.prototype[e] = function() {
                                return this[n](1).value()[0]
                            }
                        }), u(["initial", "tail"], function(e, t) {
                            var n = "drop" + (t ? "" : "Right");
                            S.prototype[e] = function() {
                                return this.__filtered__ ? new S(this) : this[n](1)
                            }
                        }), S.prototype.compact = function() {
                            return this.filter(Iu)
                        }, S.prototype.find = function(e) {
                            return this.filter(e).head()
                        }, S.prototype.findLast = function(e) {
                            return this.reverse().find(e)
                        }, S.prototype.invokeMap = nr(function(e, t) {
                            return "function" == typeof e ? new S(this) : this.map(function(n) {
                                return Ci(n, e, t)
                            })
                        }), S.prototype.reject = function(e) {
                            return this.filter(Rs(ka(e)))
                        }, S.prototype.slice = function(e, t) {
                            e = _l(e);
                            var n = this;
                            return n.__filtered__ && (e > 0 || t < 0) ? new S(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== re && (t = _l(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n)
                        }, S.prototype.takeRightWhile = function(e) {
                            return this.reverse().takeWhile(e).reverse()
                        }, S.prototype.toArray = function() {
                            return this.take(je)
                        }, mi(S.prototype, function(e, t) {
                            var i = /^(?:filter|find|map|reject)|While$/.test(t),
                                a = /^(?:head|last)$/.test(t),
                                o = n[a ? "take" + ("last" == t ? "Right" : "") : t],
                                s = a || /^find/.test(t);
                            o && (n.prototype[t] = function() {
                                var t = this.__wrapped__,
                                    l = a ? [1] : arguments,
                                    u = t instanceof S,
                                    c = l[0],
                                    d = u || gp(t),
                                    p = function(e) {
                                        var t = o.apply(n, g([e], l));
                                        return a && m ? t[0] : t
                                    };
                                d && i && "function" == typeof c && 1 != c.length && (u = d = !1);
                                var m = this.__chain__,
                                    f = !!this.__actions__.length,
                                    h = s && !m,
                                    b = u && !f;
                                if (!s && d) {
                                    t = b ? t : new S(this);
                                    var v = e.apply(t, l);
                                    return v.__actions__.push({
                                        func: Jo,
                                        args: [p],
                                        thisArg: re
                                    }), new r(v, m)
                                }
                                return h && b ? e.apply(this, l) : (v = this.thru(p), h ? a ? v.value()[0] : v.value() : v)
                            })
                        }), u(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                            var t = dc[e],
                                i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                r = /^(?:pop|shift)$/.test(e);
                            n.prototype[e] = function() {
                                var e = arguments;
                                if (r && !this.__chain__) {
                                    var n = this.value();
                                    return t.apply(gp(n) ? n : [], e)
                                }
                                return this[i](function(n) {
                                    return t.apply(gp(n) ? n : [], e)
                                })
                            }
                        }), mi(S.prototype, function(e, t) {
                            var i = n[t];
                            if (i) {
                                var r = i.name + "";
                                (rd[r] || (rd[r] = [])).push({
                                    name: t,
                                    func: i
                                })
                            }
                        }), rd[Jr(re, be).name] = [{
                            name: "wrapper",
                            func: re
                        }], S.prototype.clone = O, S.prototype.reverse = Z, S.prototype.value = te, n.prototype.at = Qd, n.prototype.chain = Xo, n.prototype.commit = es, n.prototype.next = ts, n.prototype.plant = is, n.prototype.reverse = rs, n.prototype.toJSON = n.prototype.valueOf = n.prototype.value = as, n.prototype.first = n.prototype.head, Rc && (n.prototype[Rc] = ns), n
                    }();
                Dn._ = Qn, (r = function() {
                    return Qn
                }.call(t, n, t, i)) !== re && (i.exports = r)
            }).call(this)
        }).call(t, n(32), n(424)(e))
    },
    1295: function(e, t, n) {
        "use strict";

        function i() {
            return {
                isPlayerInitialized: !1
            }
        }

        function r(e, t) {
            switch (void 0 === e && (e = i()), t.type) {
                case g.b:
                    return m = t.player, f.__assign({}, e, {
                        isPlayerInitialized: !0
                    });
                case g.c:
                    return m = null, f.__assign({}, e, {
                        isPlayerInitialized: !1
                    });
                case g.a:
                    return e.isPlayerInitialized && m && m.pause(), e;
                default:
                    return e
            }
        }

        function a(e) {
            switch (e.type) {
                case k.b.Stream:
                    return S.createElement(U.c, {
                        channelLogin: e.id,
                        vodID: "",
                        disableTheatreButton: !0,
                        playerTypeOverride: U.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy
                    });
                case k.b.Vod:
                    return S.createElement(U.c, {
                        channelLogin: "",
                        vodID: e.id,
                        disableTheatreButton: !0,
                        playerTypeOverride: U.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy,
                        onVideoTimeChange: e.onVideoTimeChange
                    });
                default:
                    return null
            }
        }

        function o(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function s(e) {
            var t = {};
            e.forEach(function(e, n) {
                t["carousel_slot_" + n + "_channel"] = e.broadcaster.login, t["carousel_slot_" + n + "_priority"] = e.priorityLevel, t["carousel_slot_" + n + "_game"] = e.content.gameName
            }), h.m.track(L.SpadeEventType.FrontPageCarouselDisplay, t)
        }

        function l(e) {
            h.m.track(L.SpadeEventType.FrontPageCarouselClick, e)
        }

        function u(e, t) {
            var n = f.__assign({
                clicked_element: t
            }, e);
            h.m.track(L.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
        }

        function c(e) {
            h.m.track(L.SpadeEventType.FrontPageCarouselPromotionCardView, e)
        }

        function d(e) {
            h.m.track(L.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        }

        function p(e) {
            return Object(v.bindActionCreators)({
                registerCarousel: g.e,
                unregisterCarousel: g.f
            }, e)
        }
        var m, f = n(0),
            h = n(2),
            g = n(1124);
        h.n.store.registerReducer("carouselPlayer", r);
        var b = n(8),
            v = n(11),
            y = n(4),
            S = n(1),
            k = n(1001),
            _ = n(6),
            E = n(3),
            T = (n(1362), "carousel-card-live"),
            C = "carousel-card-vod",
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLiveCounts = function() {
                        return t.props.showCounts ? S.createElement(E.U, {
                            className: "carousel-nav__meta",
                            alignItems: E.c.Center,
                            attachBottom: !0,
                            margin: {
                                left: .5
                            },
                            zIndex: E._38.Above
                        }, t.renderIndicator(), S.createElement(E.U, {
                            display: E.H.InlineFlex,
                            margin: {
                                left: .5
                            }
                        }, S.createElement(E._21, {
                            color: E.F.Overlay,
                            type: E._26.Span
                        }, Object(h.e)(t.props.item.content.viewersCount)))) : null
                    }, t.renderIndicator = function() {
                        return t.props.item.content.type === k.b.Stream ? S.createElement(E.V, {
                            size: E.W.Small,
                            "data-test-selector": T
                        }) : S.createElement(E._8, {
                            asset: E._9.GlyphViews,
                            "data-test-selector": C
                        })
                    }, t.itemClick = function() {
                        t.props.itemClick(t.props.item)
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = y({
                        "carousel-nav__item": !0,
                        "carousel-nav__item--active": this.props.itemActive
                    });
                    return S.createElement(E.U, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: E._2.Relative
                    }, S.createElement(E._30, {
                        label: (this.props.item.isSponsored ? Object(h.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: E._32.Top,
                        display: E.H.Block
                    }, S.createElement(E.S, f.__assign({
                        onClick: this.itemClick
                    }, Object(E._39)(this.props)), S.createElement(E.j, {
                        ratio: E.k.Aspect16x9
                    }, this.renderLiveCounts(), S.createElement(E.U, {
                        className: "carousel-nav__img-container"
                    }, S.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? S.createElement(E.U, {
                        position: E._2.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, S.createElement(E._8, {
                        asset: E._9.Featured,
                        type: E._10.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = f.__decorate([Object(_.c)("CarouselCard")], t)
            }(S.Component),
            w = P,
            N = n(68),
            O = n(12),
            I = n(52),
            U = n(1056),
            R = (n(1363), {
                content: "carousel",
                medium: "twitch_home"
            }),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = y("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(h.d)("playing {game}", {
                                game: S.createElement(O.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: R
                                    }
                                }, t.props.item.content.gameName)
                            }, "HorizontalCarouselPlayer"),
                            i = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy,
                                onVideoTimeChange: t.onVideoTimeChange
                            };
                        return S.createElement(E._17, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: E.H.Flex,
                            flexDirection: E.J.Row,
                            color: E.F.Alt
                        }, S.createElement(E.U, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, S.createElement(E.U, {
                            className: "horizontal-carousel-player__video",
                            position: E._2.Relative,
                            overflow: E.Y.Hidden
                        }, a(i))), S.createElement(E.U, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, S.createElement(E.U, {
                            display: E.H.Flex,
                            flexWrap: E.K.NoWrap,
                            textAlign: E._22.Left,
                            alignItems: E.c.Start
                        }, S.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, S.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, S.createElement(O.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: R
                            },
                            "data-a-target": "carousel-profile-image"
                        }, S.createElement(E.l, {
                            imageSrc: t.props.item.broadcaster.profileImageURL,
                            imageAlt: Object(h.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), S.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, S.createElement(E._21, {
                            fontSize: E.L.Size4,
                            color: E.F.Base,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(I.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), S.createElement(E._21, {
                            fontSize: E.L.Size6,
                            color: E.F.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, S.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), S.createElement(E.U, {
                            margin: {
                                y: 1
                            }
                        }, S.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, S.createElement(O.a, {
                            to: t.getLinkForTitle()
                        }, S.createElement(E._21, {
                            type: E._26.Span,
                            "data-a-target": k.a,
                            fontSize: E.L.Size3
                        }, t.props.item.title)))), S.createElement(N, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === k.b.Stream) return {
                            pathname: "/" + t.props.item.broadcaster.login,
                            state: R
                        };
                        var e = t.state ? t.state.videoOffset || 0 : 0;
                        return {
                            pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                            state: R
                        }
                    }, t.getPlaceholderRender = function() {
                        var e = y("horizontal-carousel-player__details", {
                            "horizontal-carousel-player__details--overlay": t.props.darkTheme
                        });
                        return S.createElement(E.U, {
                            display: E.H.Flex,
                            flexWrap: E.K.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, S.createElement(E.U, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, S.createElement(E.j, {
                            ratio: E.k.Aspect16x9
                        }, S.createElement(E._1, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), S.createElement(E.U, {
                            className: y(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, S.createElement(E.U, {
                            display: E.H.Flex,
                            flexWrap: E.K.NoWrap,
                            textAlign: E._22.Left,
                            alignItems: E.c.Start
                        }, S.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, S.createElement(E._1, {
                            width: 40,
                            height: 40
                        })), S.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, S.createElement(E._21, null, S.createElement(E._1, {
                            width: 70
                        })), S.createElement(E._21, null, S.createElement(E._1, {
                            width: 70
                        })))), S.createElement(E.U, {
                            margin: {
                                y: 1
                            }
                        }, S.createElement(E._21, null, S.createElement(E._1, {
                            lineCount: 1
                        })), S.createElement(E._21, null, S.createElement(E._1, {
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
                return f.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                    e.item !== this.props.item && this.props.onPromotionCardView(e.item)
                }, t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(S.Component),
            F = n(275),
            x = (n(1364), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = y("vertical-carousel-player__details", {
                                "vertical-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(h.d)("{login} playing {game}", {
                                login: S.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "display_name")
                                }, S.createElement(O.a, {
                                    to: "/" + t.props.item.broadcaster.login,
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(I.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: S.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, S.createElement(O.a, {
                                    to: "/directory/game/" + t.props.item.content.gameName,
                                    "data-a-target": "carousel-broadcaster-game-name"
                                }, t.props.item.content.gameName))
                            }, "VerticalCarouselPlayer"),
                            i = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy
                            };
                        return S.createElement(E._17, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: E.F.Alt
                        }, S.createElement(E.U, {
                            className: "vertical-carousel-player__video",
                            position: E._2.Relative,
                            overflow: E.Y.Hidden
                        }, a(i)), S.createElement(E.U, {
                            className: y(e),
                            display: E.H.Flex,
                            flexWrap: E.K.NoWrap,
                            textAlign: E._22.Left,
                            alignItems: E.c.Center,
                            padding: {
                                y: 1
                            }
                        }, S.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, S.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, S.createElement(O.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, S.createElement(E.l, {
                            imageSrc: t.props.item.broadcaster.profileImageURL,
                            imageAlt: Object(h.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), S.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, S.createElement(E._21, {
                            "data-a-target": k.a,
                            fontSize: E.L.Size5,
                            color: E.F.Base,
                            bold: !0
                        }, t.props.item.title), S.createElement(E._21, {
                            fontSize: E.L.Size6,
                            color: E.F.Base
                        }, n)), S.createElement(E.U, {
                            flexShrink: 0
                        }, t.props.firstPageLoaded ? S.createElement(F.a, {
                            showLoadingPlaceholder: !0,
                            channelLogin: t.props.item.broadcaster.login,
                            "data-a-target": "carousel-follow-button"
                        }) : S.createElement(E._1, {
                            width: 70,
                            height: 30
                        }))), S.createElement(N, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return S.createElement(E.U, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, S.createElement(E.j, {
                            ratio: E.k.Aspect16x9
                        }, S.createElement(E._1, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), S.createElement(E.U, {
                            display: E.H.Flex,
                            flexWrap: E.K.NoWrap,
                            textAlign: E._22.Left,
                            alignItems: E.c.Center,
                            padding: {
                                y: 1
                            }
                        }, S.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, S.createElement(E._1, {
                            width: 40,
                            height: 40
                        })), S.createElement(E.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, S.createElement(E._21, null, S.createElement(E._1, {
                            width: 150
                        })), S.createElement(E._21, null, S.createElement(E._1, {
                            width: 100
                        }))), S.createElement(E.U, {
                            flexShrink: 0
                        }, S.createElement(E._1, {
                            width: 70,
                            height: 30
                        }))), S.createElement(E._21, null, S.createElement(E._1, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(S.Component)),
            j = Object(b.a)(o)(x),
            L = n(14),
            A = (n(1365), 6),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > A) {
                            var e = t.state.startingIndex > 0;
                            return S.createElement(E.U, {
                                display: E.H.Flex,
                                alignItems: E.c.Stretch
                            }, S.createElement(E.v, {
                                ariaLabel: Object(h.d)("Page Left", "CarouselPlayerComponent"),
                                icon: E._9.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": k.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > A) {
                            var e = t.props.items.length > t.state.startingIndex + A;
                            return S.createElement(E.U, {
                                display: E.H.Flex,
                                alignItems: E.c.Stretch
                            }, S.createElement(E.v, {
                                ariaLabel: Object(h.d)("Page Right", "CarouselPlayerComponent"),
                                icon: E._9.AngleRight,
                                onClick: t.handlePageRight,
                                "data-test-selector": k.e,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.getCardsRender = function() {
                        if (t.state.activeItem) {
                            t.displayEventFired || (s(t.props.items), t.displayEventFired = !0);
                            return t.props.items.slice(t.state.startingIndex, t.state.startingIndex + A).map(function(e, n) {
                                return S.createElement(w, {
                                    key: e.content.id,
                                    item: e,
                                    itemClick: t.selectContent,
                                    itemActive: e.content.id === t.state.activeItem.content.id,
                                    showCounts: t.props.showCounts,
                                    "data-a-target": "carousel-card-" + n
                                })
                            })
                        }
                        for (var e = [], n = 0; n < A; n++) e.push(S.createElement(E.U, {
                            key: n,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, S.createElement(E.j, {
                            ratio: E.k.Aspect16x9
                        }, S.createElement(E._1, null)), S.createElement(E.U, {
                            margin: {
                                top: .5
                            }
                        }, S.createElement(E._1, {
                            height: 4
                        }))));
                        return e
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
                            case k.c.Vertical:
                                return S.createElement(j, f.__assign({}, e));
                            default:
                                return S.createElement(D, f.__assign({}, e))
                        }
                    }, t.registerCarousel = function(e) {
                        t.props.registerCarousel && t.props.registerCarousel(e)
                    }, t.unregisterCarousel = function() {
                        t.props.unregisterCarousel && t.props.unregisterCarousel()
                    }, t.selectContent = function(e) {
                        t.setState({
                            activeItem: e
                        }), l({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.trackPromotionClick = function(e, n) {
                        var i = e.broadcaster,
                            r = e.content,
                            a = e.isScheduled;
                        u({
                            broadcast_type: r.subType,
                            carousel_index: t.props.items.indexOf(t.state.activeItem),
                            channel: i.displayName,
                            game: r.gameName,
                            promotion_was_scheduled: a,
                            views: r.viewersCount
                        }, n)
                    }, t.trackPromotionView = function(e) {
                        c({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - A;
                        e !== t.state.startingIndex && (d("next"), t.setState({
                            startingIndex: e
                        }))
                    }, t.handlePageLeft = function() {
                        t.state.startingIndex > 0 && (d("prev"), t.setState({
                            startingIndex: 0
                        }))
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUpdate = function(e) {
                    !this.state.activeItem && e.items.length > 0 && this.setState({
                        activeItem: e.items[0]
                    })
                }, t.prototype.render = function() {
                    return S.createElement(E.U, {
                        className: y("carousel-player", {
                            "theme--dark": this.props.darkTheme
                        })
                    }, this.getLayoutRender(), S.createElement(E._17, {
                        background: E.m.Alt
                    }, S.createElement(E.U, {
                        display: E.H.Flex,
                        flexWrap: E.K.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = f.__decorate([Object(_.c)("CarouselPlayer")], t)
            }(S.Component),
            V = M,
            G = Object(b.a)(null, p)(V);
        n.d(t, "a", function() {
            return G
        })
    },
    1296: function(e, t, n) {
        "use strict";

        function i(e) {
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
                        type: o.b.Stream,
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
        }

        function r(e) {
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
                        type: o.b.Vod,
                        subType: "",
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
        }

        function a(e) {
            return e.replace(/\[\]\(.+\)/, "")
        }
        t.a = i, t.b = r;
        var o = n(1001)
    },
    1297: function(e, t, n) {
        "use strict";

        function i(e) {
            for (var t = e.length - 1; t > 0; t--) {
                var n = Math.floor(Math.random() * (t + 1)),
                    i = e[t];
                e[t] = e[n], e[n] = i
            }
            return e
        }
        t.a = i
    },
    1302: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "g", function() {
            return s
        }), n.d(t, "e", function() {
            return l
        }), n.d(t, "f", function() {
            return u
        }), n.d(t, "d", function() {
            return c
        }), n.d(t, "c", function() {
            return d
        });
        var i, r = n(2),
            a = n(14);
        ! function(e) {
            e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
        }(i || (i = {}));
        var o;
        ! function(e) {
            e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed", e.Skipped = "skipped"
        }(o || (o = {}));
        var s = function(e) {
                var t = {
                    source: e.source,
                    action: o.Start
                };
                r.m.track(a.SpadeEventType.OnboardingEvent, t)
            },
            l = function() {
                var e = {
                    source: i.HomepageCTA,
                    action: o.Dismissed
                };
                r.m.track(a.SpadeEventType.OnboardingEvent, e)
            },
            u = function(e) {
                var t = {
                    source: i.HomepageCTA,
                    action: e
                };
                r.m.track(a.SpadeEventType.OnboardingEvent, t)
            },
            c = function(e, t) {
                var n = {
                    src: a.SpadeEventType.OnboardingEvent,
                    game: t
                };
                r.m.track(e, n)
            },
            d = function(e) {
                r.m.track(a.SpadeEventType.BrowseForYou, e)
            }
    },
    1309: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n(2),
            r = n(14),
            a = (n(1048), function(e) {
                var t = {
                    action: e.action,
                    entity: "post:" + e.postID,
                    post_id: e.postID,
                    post_content: e.postContent,
                    composer_location: e.composerLocation
                };
                i.m.track(r.SpadeEventType.FeedPost, t)
            })
    },
    1310: function(e, t, n) {
        "use strict";

        function i(e) {
            switch (e) {
                case o.RECOMMENDATION_VIEWED:
                    return Object(a.d)("Because of your viewing history", "FeedItemReason");
                case o.RECOMMENDATION_FOLLOWED:
                    return Object(a.d)("Because of who you follow", "FeedItemReason");
                case o.RECOMMENDATION_POPULAR:
                    return Object(a.d)("Because it's popular", "FeedItemReason");
                default:
                    return ""
            }
        }
        var r = n(1),
            a = n(2),
            o = {
                RECOMMENDATION_FOLLOWED: "followed",
                RECOMMENDATION_VIEWED: "viewed",
                RECOMMENDATION_POPULAR: "popular"
            },
            s = n(3),
            l = function(e) {
                if (0 === e.reasons.length) return r.createElement(s.U, null);
                var t = i(e.reasons[0].reason);
                return "" === t ? r.createElement(s.U, null) : r.createElement(s.U, {
                    padding: 1
                }, t)
            },
            u = l;
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        })
    },
    1337: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(E.bindActionCreators)({
                pauseCarousel: T.d
            }, e)
        }

        function r(e) {
            return Object(E.bindActionCreators)({
                pauseCarousel: T.d
            }, e)
        }

        function a(e) {
            var t = [];
            return e && 0 !== e.length && (t = e.slice().sort(function(e, t) {
                return o(e, t)
            })), t
        }

        function o(e, t) {
            if (e.emote.id === me.emote.id) return -1;
            if (t.emote.id === me.emote.id) return 1;
            var n = e.self.hasReacted,
                i = t.self.hasReacted;
            if (e.count === t.count) {
                if (n && !i) return -1;
                if (!n && i) return 1
            }
            return t.count - e.count
        }

        function s(e) {
            return {
                isLoggedIn: Object(Y.d)(e)
            }
        }

        function l(e) {
            return Object(E.bindActionCreators)({
                login: function() {
                    return Object(Q.f)(K.a.FeedReactionToggle)
                }
            }, e)
        }

        function u(e, t) {
            return {
                emoteID: e.emoteID,
                from: e.from - t,
                to: e.to - t,
                setID: e.setID
            }
        }

        function c(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var i = e[n];
                switch (i.type) {
                    case Se.a.ClipLink:
                        t.push(g.createElement("a", {
                            key: n,
                            href: i.content.url,
                            target: "_blank"
                        }, i.content.url));
                        break;
                    case Se.a.Link:
                        i.content.url.match(_e) ? t.push(g.createElement(w.a, {
                            key: n,
                            to: i.content.url.replace(_e, "")
                        }, i.content.displayText)) : t.push(g.createElement("a", {
                            key: n,
                            href: i.content.url,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, i.content.displayText));
                        break;
                    case Se.a.Mention:
                        t.push(g.createElement(w.a, {
                            key: n,
                            to: "/" + i.content.recipient
                        }, i.content.recipient));
                        break;
                    case Se.a.Emote:
                        i.content.images.themed || t.push(g.createElement("img", {
                            key: n,
                            src: i.content.images.sources["1x"],
                            alt: i.content.alt
                        }));
                        break;
                    case Se.a.Text:
                        t.push(g.createElement("span", {
                            key: n
                        }, i.content))
                }
            }
            return t
        }

        function d(e, t) {
            return e.from < 0 || e.from >= t || e.to < 0 || e.to >= t
        }

        function p(e, t, n) {
            void 0 === t && (t = []);
            for (var i, r = [], a = e.split(/\n+/), o = 0, s = 0; o < a.length; o++) ! function(e, o) {
                e > 0 && (o += a[e - 1].length + 1);
                var s = t.map(function(e) {
                        return u(e, o)
                    }).filter(function(t) {
                        return !d(t, a[e].length)
                    }),
                    l = Object(te.f)(a[e], Object(ke.b)(s), 0, {}, !1, n);
                r.push(g.createElement(k._21, {
                    key: e
                }, c(l))), i = o
            }(o, s), s = i;
            return r
        }

        function m(e) {
            return e.replace("post:", "")
        }

        function f(e) {
            return Object(F.d)("{dateTime, date, medium} {dateTime, time, short}", {
                dateTime: e
            }, "PostDate")
        }

        function h(e) {
            return void 0 !== we[e]
        }
        var g = n(1),
            b = n(0),
            v = n(1047),
            y = n(1029),
            S = n(6),
            k = n(3),
            _ = n(8),
            E = n(11),
            T = n(1124),
            C = n(15),
            P = n(1120),
            w = n(12),
            N = function(e) {
                var t = e.author,
                    n = e.title,
                    i = e.description,
                    r = null,
                    a = null;
                return t && (r = g.createElement(k.U, {
                    margin: {
                        right: 1
                    },
                    flexShrink: 0
                }, g.createElement(w.a, {
                    to: "/" + t.login,
                    "data-a-target": "pulse-profile-picture"
                }, g.createElement(k.P, {
                    flexShrink: 0
                }, g.createElement(k.l, {
                    size: 40,
                    imageSrc: t.profileImageURL,
                    imageAlt: "User profile picture"
                })))), a = g.createElement(k._21, {
                    fontSize: k.L.Size6,
                    color: k.F.Alt
                }, g.createElement(w.a, {
                    to: "/" + t.login,
                    "data-a-target": "pulse-displayname-link"
                }, t.displayName))), g.createElement(k._17, {
                    display: k.H.Flex,
                    flexWrap: k.K.NoWrap,
                    padding: 1,
                    background: k.m.Base
                }, r, g.createElement(k.U, {
                    flexGrow: 1,
                    overflow: k.Y.Hidden
                }, a, g.createElement(k._21, {
                    fontSize: k.L.Size6,
                    color: k.F.Base,
                    bold: !0,
                    ellipsis: !0
                }, n), i && g.createElement(k._21, {
                    fontSize: k.L.Size6,
                    color: k.F.Alt2,
                    noWrap: !0
                }, i)))
            },
            O = Object(S.c)("EmbedInfo", {
                autoReportInteractive: !0
            })(N),
            I = n(1155),
            U = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    r = n.clipTitle,
                    a = n.clipCreatedAt,
                    o = n.durationSeconds,
                    s = n.embedURL,
                    l = n.thumbnailURL,
                    u = n.video,
                    c = n.viewCount,
                    d = u && u.game ? u.game.name : "",
                    p = function() {
                        e.pauseCarousel && e.pauseCarousel(), Object(y.c)(e, t.feedTrackingProps)
                    };
                return g.createElement(k.U, null, g.createElement(P.a, {
                    createdAt: a,
                    lengthSeconds: o,
                    onClick: p,
                    thumbnailURL: l,
                    type: P.b.Clip,
                    viewCount: c
                }, g.createElement(I.a, {
                    embedURL: s
                })), g.createElement(O, {
                    author: i,
                    title: r,
                    description: d
                }))
            };
        U.contextTypes = {
            feedTrackingProps: C.object
        };
        var R = Object(S.c)("ClipEmbed", {
                autoReportInteractive: !0
            })(U),
            D = Object(_.a)(null, i)(R),
            F = n(2),
            x = function(e) {
                var t = e.embed,
                    n = t.inputURL,
                    i = t.thumbnail,
                    r = t.providerName;
                return g.createElement("a", {
                    href: "" + n,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, g.createElement(k.j, {
                    ratio: k.k.Aspect16x9
                }, g.createElement(k.U, null, g.createElement(k.P, {
                    fullWidth: !0,
                    fullHeight: !0,
                    position: k._2.Absolute
                }, g.createElement("img", {
                    src: i && i.url || F.n.config.defaultStreamPreviewURL
                })))), g.createElement(O, {
                    title: r
                }))
            },
            j = Object(S.c)("PhotoOEmbed", {
                autoReportInteractive: !0
            })(x),
            L = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    r = n.game,
                    a = n.title,
                    o = n.previewImageURL,
                    s = n.viewersCount,
                    l = r ? r.name : "",
                    u = function() {
                        Object(y.c)(e, t.feedTrackingProps)
                    };
                return g.createElement(k.U, null, g.createElement(P.a, {
                    onClick: u,
                    thumbnailURL: o,
                    type: P.b.Stream,
                    viewCount: s
                }, g.createElement(I.a, {
                    channelLogin: i.login
                })), g.createElement(O, {
                    author: i,
                    title: a,
                    description: l
                }))
            };
        L.contextTypes = {
            feedTrackingProps: C.object
        };
        var A = Object(S.c)("StreamEmbed", {
                autoReportInteractive: !0
            })(L),
            M = function(e, t) {
                var n = e.embed,
                    i = n.id,
                    r = n.owner,
                    a = n.lengthSeconds,
                    o = n.game,
                    s = n.publishedAt,
                    l = n.previewThumbnailURL,
                    u = n.title,
                    c = n.videoViewCount,
                    d = o ? o.name : "",
                    p = function() {
                        e.pauseCarousel && e.pauseCarousel(), Object(y.c)(e, t.feedTrackingProps)
                    };
                return g.createElement(k.U, null, g.createElement(P.a, {
                    createdAt: s,
                    lengthSeconds: a,
                    onClick: p,
                    thumbnailURL: l,
                    type: P.b.Video,
                    viewCount: c
                }, g.createElement(I.a, {
                    vodID: i
                })), g.createElement(O, {
                    author: r,
                    title: u,
                    description: d
                }))
            };
        M.contextTypes = {
            feedTrackingProps: C.object
        };
        var V = Object(S.c)("VideoEmbed", {
                autoReportInteractive: !0
            })(M),
            G = Object(_.a)(null, r)(V),
            B = (n(1400), function(e, t) {
                var n = e.embed,
                    i = n.html,
                    r = n.thumbnail,
                    a = n.providerName,
                    o = i.replace("autoplay=false", "autoplay=true"),
                    s = function() {
                        Object(y.c)(e, t.feedTrackingProps)
                    };
                return g.createElement(k.U, null, g.createElement(P.a, {
                    thumbnailURL: r && r.url || F.n.config.defaultStreamPreviewURL,
                    type: P.b.VideoOEmbed,
                    onClick: s
                }, g.createElement("div", {
                    className: "video-oembed-container",
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                })), g.createElement(O, {
                    title: a
                }))
            });
        B.contextTypes = {
            feedTrackingProps: C.object
        };
        var z, W = Object(S.c)("VideoOEmbed", {
                autoReportInteractive: !0
            })(B),
            H = {
                PhotoOEmbed: j,
                VideoOEmbed: W,
                Clip: D,
                Stream: A,
                Video: G
            },
            q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onImpression = function(e) {
                        Object(y.b)({
                            embed: t.props.embed
                        }, e)
                    }, t
                }
                return b.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.impressionTracking.onImpression(this.onImpression)
                }, t.prototype.render = function() {
                    var e = H[this.props.embed.__typename];
                    return e ? g.createElement(e, {
                        embed: this.props.embed
                    }) : g.createElement(k.U, null)
                }, t = b.__decorate([Object(S.c)("Embed"), Object(v.c)()], t)
            }(g.Component),
            $ = q,
            K = n(51),
            Q = n(35),
            Y = n(19),
            Z = n(88),
            J = n(9),
            X = n(23),
            ee = n(271),
            te = n(135),
            ne = (n(1401), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasReacted: t.props.reaction.self.hasReacted,
                        reactionCount: t.props.reaction.count
                    }, t.toggleReaction = function() {
                        t.state.hasReacted ? (t.setState(function(e) {
                            return {
                                hasReacted: !1,
                                reactionCount: e.reactionCount - 1
                            }
                        }), t.props.removeReaction(t.props.reaction.emote.id, t.props.reaction.emote.token).then(function() {}, function() {
                            t.setState(function(e) {
                                return {
                                    hasReacted: !0,
                                    reactionCount: e.reactionCount + 1
                                }
                            })
                        })) : (t.setState(function(e) {
                            return {
                                hasReacted: !0,
                                reactionCount: e.reactionCount + 1
                            }
                        }), t.props.addReaction(t.props.reaction.emote.id, t.props.reaction.emote.token).then(function() {}, function() {
                            t.setState(function(e) {
                                return {
                                    hasReacted: !1,
                                    reactionCount: e.reactionCount - 1
                                }
                            })
                        }))
                    }, t
                }
                return b.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setState({
                        hasReacted: e.reaction.self.hasReacted
                    })
                }, t.prototype.render = function() {
                    var e = this.props.reaction.emote,
                        t = e.token;
                    return parseInt(e.id, 10) < 15 && (t = Object(ee.c)(e.token)), g.createElement("div", b.__assign({
                        onClick: this.toggleReaction
                    }, Object(k._39)(this.props)), g.createElement(k._30, {
                        label: 0 === this.state.reactionCount ? e.token : this.state.reactionCount + " " + t,
                        direction: k._32.Top,
                        align: k._31.Center
                    }, g.createElement(k.U, {
                        className: this.state.hasReacted ? "activity-reaction activity-reaction--active" : "activity-reaction"
                    }, g.createElement(k.U, {
                        className: "activity-reaction__emote-contain"
                    }, g.createElement("img", {
                        src: Object(te.e)("endorse" === e.id ? "1" : e.id, 3),
                        alt: t,
                        className: "activity-reaction__emote"
                    })))))
                }, t = b.__decorate([Object(S.c)("Reaction")], t)
            }(g.Component)),
            ie = ne,
            re = function(e) {
                var t = e.reactions.map(function(t, n) {
                    return g.createElement(k.U, {
                        key: n,
                        margin: {
                            right: 1,
                            bottom: 1
                        }
                    }, g.createElement(ie, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "additional-reaction-" + n
                    }))
                });
                return g.createElement(k.U, {
                    position: k._2.Relative
                }, g.createElement(k.p, {
                    direction: k.q.TopCenter,
                    size: k.r.Small,
                    show: !0
                }, g.createElement(k._17, {
                    display: k.H.Flex,
                    padding: {
                        left: 1,
                        top: 1
                    }
                }, t)))
            },
            ae = Object(S.c)("AdditionalReactions", {
                autoReportInteractive: !0
            })(re),
            oe = function(e) {
                var t = e.reactions.map(function(t, n) {
                    return g.createElement(k.U, {
                        key: n,
                        margin: {
                            right: 1
                        }
                    }, g.createElement(ie, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "top-reaction-" + n
                    }))
                });
                return g.createElement(k._17, {
                    display: k.H.Flex
                }, t)
            },
            se = Object(S.c)("TopReactions", {
                autoReportInteractive: !0
            })(oe),
            le = n(1402),
            ue = n(1403),
            ce = n(278),
            de = (n(1404), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.closeEmoteSelector = function() {
                        n.setState({
                            emoteSelectorVisible: !1
                        })
                    }, n.emotesLoaded = function() {
                        n.setState({
                            emotesLoaded: !0
                        })
                    }, n.onEmoteSelect = function(e, t) {
                        n.props.onEmoteSelect(t, e), n.closeEmoteSelector()
                    }, n.toggleEmoteSelector = function() {
                        n.setState(function(e) {
                            return {
                                emoteSelectorVisible: !e.emoteSelectorVisible
                            }
                        })
                    }, n.state = {
                        emotesLoaded: !1,
                        emoteSelectorVisible: !1
                    }, n
                }
                return b.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = g.createElement("div", {
                        onClick: this.toggleEmoteSelector,
                        "data-a-target": "add-reaction-button"
                    }, this.props.children);
                    return this.state.emoteSelectorVisible || (e = g.createElement(k._30, {
                        label: Object(F.d)("Add a Reaction", "ReactionSelector"),
                        direction: k._32.Top,
                        align: k._31.Center
                    }, e)), g.createElement(k.U, {
                        className: "reaction-selector",
                        position: k._2.Relative
                    }, g.createElement(Z.a, {
                        onClickOut: this.closeEmoteSelector
                    }, this.state.emoteSelectorVisible && g.createElement(ce.a, {
                        onClickEmote: this.onEmoteSelect,
                        visible: this.state.emoteSelectorVisible && this.state.emotesLoaded,
                        toggleVisibility: this.toggleEmoteSelector,
                        onLoad: this.emotesLoaded,
                        direction: k.q.TopLeft
                    }), e))
                }, t = b.__decorate([Object(S.c)("ReactionSelector")], t)
            }(g.Component)),
            pe = de;
        ! function(e) {
            e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
        }(z || (z = {}));
        var me = {
                emote: {
                    id: "9",
                    token: "<3",
                    setID: ""
                },
                count: 0,
                self: {
                    hasReacted: !1
                }
            },
            fe = 4,
            he = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        totalReactionCount: 0,
                        additionalReactionsVisible: !1
                    }, t.addReaction = function(e, n) {
                        return t.toggleReaction(z.Add, e, n)
                    }, t.countTotalReactions = function() {
                        var e = 0;
                        if (t.props.reactions)
                            for (var n = 0, i = t.props.reactions; n < i.length; n++) {
                                var r = i[n];
                                e += r.count
                            }
                        t.setState({
                            totalReactionCount: e
                        })
                    }, t.hideAdditional = function() {
                        t.setState({
                            additionalReactionsVisible: !1
                        })
                    }, t.removeReaction = function(e, n) {
                        return t.toggleReaction(z.Remove, e, n)
                    }, t.toggleAdditional = function(e, n) {
                        n.preventDefault(), e.length <= fe || t.setState(function(e) {
                            return {
                                additionalReactionsVisible: !e.additionalReactionsVisible
                            }
                        })
                    }, t.toggleReaction = function(e, n, i) {
                        if (!t.props.isLoggedIn) return t.props.login(), Promise.reject(new Error("user not logged in"));
                        var r = i;
                        return parseInt(n, 10) < 15 && (r = Object(ee.c)(i)), e === z.Add ? (t.setState(function(e) {
                            return {
                                totalReactionCount: e.totalReactionCount + 1
                            }
                        }), t.props.addReaction(Object(X.a)({
                            entityID: t.props.parentEntity,
                            emoteID: n
                        })).then(function(e) {
                            var i = {
                                action: v.a.Create,
                                entity: t.props.parentEntity,
                                reactionInt: n,
                                reactionText: r
                            };
                            return Object(y.d)(i, t.context.feedTrackingProps), e
                        }, function(e) {
                            return t.setState(function(e) {
                                return {
                                    totalReactionCount: e.totalReactionCount - 1
                                }
                            }), Promise.reject(e)
                        })) : (t.setState(function(e) {
                            return {
                                totalReactionCount: e.totalReactionCount - 1
                            }
                        }), t.props.removeReaction(Object(X.a)({
                            entityID: t.props.parentEntity,
                            emoteID: n
                        })).then(function(e) {
                            var i = {
                                action: v.a.Remove,
                                entity: t.props.parentEntity,
                                reactionInt: n,
                                reactionText: r
                            };
                            return Object(y.d)(i, t.context.feedTrackingProps), e
                        }, function(e) {
                            return t.setState(function(e) {
                                return {
                                    totalReactionCount: e.totalReactionCount + 1
                                }
                            }), Promise.reject(e)
                        }))
                    }, t
                }
                return b.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.countTotalReactions(), this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = a(this.props.reactions);
                    0 !== t.length && t[0].emote.id === me.emote.id || (t = [me].concat(t));
                    var n = function(n) {
                            return e.toggleAdditional(t, n)
                        },
                        i = null;
                    this.state.additionalReactionsVisible && (i = g.createElement(ae, {
                        reactions: t.slice(fe),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction
                    }));
                    var r = null;
                    r = g.createElement(se, {
                        reactions: t.slice(0, fe),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction
                    });
                    var o = null;
                    this.props.reactions && this.state.totalReactionCount > 0 && (o = this.props.reactions.length >= fe ? g.createElement("a", {
                        href: "#",
                        onClick: n,
                        "data-test-selector": "additional-toggle-tracking"
                    }, this.state.totalReactionCount) : g.createElement("span", {
                        "data-test-selector": "additional-toggle-tracking",
                        "data-a-target": "pulse-reaction-count"
                    }, this.state.totalReactionCount)), this.state.additionalReactionsVisible || (o = g.createElement(k._30, {
                        label: Object(F.d)("Total Reactions", "ReactionList"),
                        direction: k._32.Top,
                        align: k._31.Center
                    }, o));
                    var s = null;
                    return this.props.isLoggedIn && (s = g.createElement(k.U, {
                        margin: {
                            right: 1
                        }
                    }, g.createElement(pe, {
                        onEmoteSelect: this.addReaction
                    }, g.createElement(k._8, {
                        asset: k._9.AddReaction,
                        type: k._10.Brand,
                        width: 24,
                        height: 24
                    })))), g.createElement(k._17, {
                        display: k.H.Flex,
                        alignItems: k.c.Center,
                        padding: 1
                    }, r, g.createElement(k.U, {
                        margin: {
                            right: 1
                        }
                    }, s), g.createElement(Z.a, {
                        onClickOut: this.hideAdditional
                    }, i, o))
                }, t.contextTypes = {
                    feedTrackingProps: C.object
                }, t = b.__decorate([Object(J.a)(le, {
                    name: "addReaction"
                }), Object(J.a)(ue, {
                    name: "removeReaction"
                }), Object(S.c)("Reactions")], t)
            }(g.Component),
            ge = he,
            be = Object(_.a)(s, l)(ge),
            ve = function(e) {
                var t = e.content,
                    n = t.slug,
                    i = t.reactions;
                return g.createElement(k.U, null, g.createElement($, {
                    embed: e.content
                }), g.createElement(be, {
                    parentEntity: "clip:" + n,
                    reactions: i
                }))
            },
            ye = Object(S.c)("ClipContent", {
                autoReportInteractive: !0
            })(ve),
            Se = n(270),
            ke = n(1033),
            _e = /^(https?:\/\/)?(www.)?twitch\.tv/,
            Ee = (n(1405), function(e) {
                var t = e.content,
                    n = t.author,
                    i = t.body,
                    r = t.createdAt,
                    a = t.embeds,
                    o = t.id,
                    s = t.reactions;
                return g.createElement(k.U, null, g.createElement(k._17, {
                    display: k.H.Flex,
                    alignItems: k.c.Center,
                    padding: 1,
                    borderBottom: !0
                }, g.createElement(k.U, {
                    margin: {
                        right: 1
                    }
                }, g.createElement(w.a, {
                    to: {
                        pathname: "/" + n.login,
                        state: {
                            content: "author_avatar",
                            medium: "pulse_card"
                        }
                    },
                    "data-a-target": "pulse-profile-picture"
                }, g.createElement(k.l, {
                    size: 40,
                    imageSrc: n.profileImageURL,
                    imageAlt: "User profile picture"
                }))), g.createElement(k.U, {
                    flexGrow: 1
                }, g.createElement(k.U, {
                    display: k.H.Flex,
                    flexDirection: k.J.Column
                }, g.createElement(w.a, {
                    to: {
                        pathname: "/" + n.login,
                        state: {
                            content: "author_name",
                            medium: "pulse_card"
                        }
                    }
                }, g.createElement(k._21, {
                    fontSize: k.L.Size4,
                    color: k.F.Base,
                    bold: !0
                }, n.displayName)), g.createElement(w.a, {
                    to: "/" + n.login + "/p/" + m(o),
                    "data-a-target": "pulse-post-link"
                }, g.createElement(k._30, {
                    label: f(new Date(r)),
                    direction: k._32.Bottom
                }, g.createElement(k._21, {
                    fontSize: k.L.Size6,
                    color: k.F.Alt2
                }, Object(F.g)(new Date(r)))))))), i && g.createElement(k._17, {
                    padding: 1,
                    className: "feed-item-text"
                }, p(i.content, i.emotes, n.login)), g.createElement(k.U, null, a && a.slice(0, 1).map(function(e, t) {
                    return g.createElement($, {
                        key: t,
                        embed: e
                    })
                })), g.createElement(be, {
                    parentEntity: o,
                    reactions: s
                }))
            }),
            Te = Object(S.c)("PostContent", {
                autoReportInteractive: !0
            })(Ee),
            Ce = function(e) {
                var t = e.content,
                    n = t.id,
                    i = t.reactions;
                return g.createElement(k.U, null, g.createElement($, {
                    embed: e.content
                }), g.createElement(be, {
                    parentEntity: "vod:" + n,
                    reactions: i
                }))
            },
            Pe = Object(S.c)("VideoContent", {
                autoReportInteractive: !0
            })(Ce),
            we = {
                Clip: ye,
                Post: Te,
                Video: Pe,
                Stream: function(e) {
                    return g.createElement($, {
                        embed: e.content
                    })
                }
            },
            Ne = function(e) {
                var t = we[e.content.__typename];
                return g.createElement(t, {
                    content: e.content
                })
            };
        n.d(t, "b", function() {
            return h
        }), n.d(t, "a", function() {
            return Ne
        })
    },
    1338: function(e, t, n) {
        "use strict";
        var i = n(1),
            r = n(3),
            a = function() {
                return i.createElement(r._17, {
                    elevation: 1,
                    margin: {
                        bottom: 2
                    },
                    background: r.m.Base
                }, i.createElement(r._17, {
                    display: r.H.Flex,
                    flexWrap: r.K.NoWrap,
                    padding: 1,
                    background: r.m.Base,
                    borderBottom: !0
                }, i.createElement(r.U, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(r._21, null, i.createElement(r._1, {
                    width: 40,
                    height: 40
                }))), i.createElement(r.U, {
                    flexGrow: 1
                }, i.createElement(r._21, {
                    fontSize: r.L.Size6
                }, i.createElement(r._1, {
                    width: 100
                })), i.createElement(r._21, {
                    fontSize: r.L.Size7
                }, i.createElement(r._1, {
                    width: 120
                })))), i.createElement(r.U, {
                    margin: {
                        bottom: .5
                    },
                    padding: 1
                }, i.createElement(r._21, {
                    fontSize: r.L.Size6
                }, i.createElement(r._1, null)), i.createElement(r._21, {
                    fontSize: r.L.Size6
                }, i.createElement(r._1, null)), i.createElement(r._21, {
                    fontSize: r.L.Size6
                }, i.createElement(r._1, {
                    width: 280
                }))))
            },
            o = function() {
                return i.createElement(r._17, {
                    elevation: 1,
                    margin: {
                        bottom: 2
                    },
                    background: r.m.Base
                }, i.createElement(r.U, {
                    margin: {
                        bottom: .5
                    }
                }, i.createElement(r.j, {
                    ratio: r.k.Aspect16x9
                }, i.createElement(r._1, null))), i.createElement(r._17, {
                    display: r.H.Flex,
                    flexWrap: r.K.NoWrap,
                    padding: 1,
                    background: r.m.Base
                }, i.createElement(r.U, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(r._21, null, i.createElement(r._1, {
                    width: 40,
                    height: 40
                }))), i.createElement(r.U, {
                    flexGrow: 1
                }, i.createElement(r._21, {
                    fontSize: r.L.Size6
                }, i.createElement(r._1, {
                    width: 100
                })), i.createElement(r._21, {
                    fontSize: r.L.Size6
                }, i.createElement(r._1, {
                    width: 140
                })), i.createElement(r._21, {
                    fontSize: r.L.Size6
                }, i.createElement(r._1, {
                    width: 120
                })))))
            };
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return o
        })
    },
    1339: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "feedItemStream"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Stream"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "title"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "broadcaster"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedUser"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "viewersCount"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                                value: "480"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "272"
                            }
                        }],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 245
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/user-fragment.gql"\n\nfragment feedItemStream on Stream {\n  id\n  title\n  broadcaster {\n    ...feedUser\n  }\n  game {\n    id\n    name\n  }\n  viewersCount\n  previewImageURL(width: 480, height: 272)\n  createdAt\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n(1055).definitions)), e.exports = i
    },
    1361: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(2),
            o = n(413),
            s = n(113),
            l = n(73),
            u = n(74),
            c = n(293),
            d = function(e) {
                var t = {
                    name: "TWILIGHT_VIDEO_FEATURO_EN",
                    assignments: {
                        fallback: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 73))
                            }, "FeaturedBroadcasters")(i.__assign({}, e))
                        },
                        mixed: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 293))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !0
                            }))
                        },
                        last: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 293))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !1
                            }))
                        }
                    },
                    loader: function() {
                        return Object(u.placeholderFeaturedBroadcasters)(e.renderContext)
                    }
                };
                return "en" === a.n.intl.getLanguageCode() ? r.createElement(o.a, i.__assign({}, t)) : r.createElement(l.FeaturedBroadcasters, {
                    renderContext: e.renderContext
                })
            };
        n.d(t, "a", function() {
            return c.FeaturedBroadcastersRenderContext
        }), n.d(t, "b", function() {
            return d
        })
    },
    1362: function(e, t) {},
    1363: function(e, t) {},
    1364: function(e, t) {},
    1365: function(e, t) {},
    1366: function(e, t) {
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "login"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "viewersCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "title"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 419
            }
        };
        n.loc.source = {
            body: "query FeaturedStreams($language: String, $first: Int) {\n  featuredStreams(language: $language, first: $first) {\n    description\n    imageURL\n    isScheduled\n    isSponsored\n    priorityLevel\n    stream {\n      broadcaster {\n        displayName\n        id\n        profileImageURL(width: 150)\n        login\n      }\n      game {\n        id\n        name\n      }\n      id\n      type\n      viewersCount\n    }\n    title\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1367: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "login"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "viewersCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "title"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "title"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "login"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "viewCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 1047
            }
        };
        n.loc.source = {
            body: "# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally, use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\nquery FeaturedContent($language: String!) {\n  featuredStreams(language: $language, first: 8) {\n    description\n    imageURL\n    isScheduled\n    isSponsored\n    priorityLevel\n    stream {\n      broadcaster {\n        displayName\n        id\n        profileImageURL(width: 150)\n        login\n      }\n      game {\n        id\n        name\n      }\n      id\n      type\n      viewersCount\n    }\n    title\n  }\n  featuredVideos(language: $language, first: 2) {\n    description\n    imageURL\n    isScheduled\n    isSponsored\n    priorityLevel\n    title\n    video {\n      game {\n        id\n        name\n      }\n      id\n      owner {\n        displayName\n        id\n        profileImageURL(width: 150)\n        login\n      }\n      viewCount\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1397: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }
        var r, a = n(0),
            o = n(1),
            s = n(2),
            l = n(88),
            u = n(64),
            c = n(137),
            d = n(414),
            p = n(1047),
            m = n(1309),
            f = n(6),
            h = n(3),
            g = Object(c.a)("/settings/profile");
        ! function(e) {
            e.HomePage = "home", e.Channel = "channel", e.Dashboard = "dashboard", e.Contextual = "contextual"
        }(r || (r = {}));
        var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasInteractedOrPageload: t.props.firstPageLoaded,
                        disabled: !1,
                        shareToTwitter: !1,
                        isEmotePickerMenuVisible: !1,
                        isTwitterBubbleVisible: !1
                    }, t.minHeight = 50, t.setTextArea = function(e) {
                        t.textArea = e, t.resize()
                    }, t.onKeyDown = function(e) {
                        (e.metaKey || e.ctrlKey) && "Enter" === e.key && t.onSubmit()
                    }, t.onChange = function(e) {
                        t.resize()
                    }, t.onSubmit = function() {
                        var e = t.textArea.value;
                        !t.state.disabled && e && (t.disableComposer(), t.props.onCreate(e, t.state.shareToTwitter).then(function(e) {
                            t.resetComposer();
                            var n = e.data.createPost.post,
                                i = n.id.split(":"),
                                r = {
                                    action: p.a.Create,
                                    postID: i[i.length - 1],
                                    postContent: n.body && n.body.content || void 0,
                                    composerLocation: t.props.composerLocation
                                };
                            Object(m.a)(r)
                        }, function() {
                            t.enableComposer()
                        }))
                    }, t.interact = function() {
                        t.setState({
                            hasInteractedOrPageload: !0
                        })
                    }, t.onFocus = function() {
                        t.interact()
                    }, t.onMouseEnter = function() {
                        t.interact()
                    }, t.disableComposer = function() {
                        t.setState({
                            disabled: !0
                        })
                    }, t.enableComposer = function() {
                        t.setState({
                            disabled: !1
                        })
                    }, t.resetComposer = function() {
                        t.textArea.value = "", t.textArea.selectionStart = 0, t.textArea.selectionEnd = 0, t.setState({
                            shareToTwitter: !1
                        }), t.enableComposer()
                    }, t.toggleShareActivity = function() {
                        t.setState(function(e) {
                            return {
                                shareToTwitter: !e.shareToTwitter
                            }
                        })
                    }, t.onEmotePickerClickOut = function() {
                        t.setState({
                            isEmotePickerMenuVisible: !1
                        })
                    }, t.closeTwitterBubble = function() {
                        t.setState({
                            isTwitterBubbleVisible: !1
                        })
                    }, t.toggleEmotePicker = function() {
                        t.interact(), t.setState(function(e) {
                            return {
                                isEmotePickerMenuVisible: !e.isEmotePickerMenuVisible
                            }
                        })
                    }, t.onClickEmote = function(e, n) {
                        e += " ", t.textArea.selectionStart > 0 && " " !== t.textArea.value[t.textArea.selectionStart - 1] && (e = " " + e);
                        var i = t.textArea.selectionStart + e.length,
                            r = t.textArea.value.substring(0, t.textArea.selectionStart) + e + t.textArea.value.substring(t.textArea.selectionEnd, t.textArea.value.length);
                        t.textArea.value = r, t.textArea.focus(), t.textArea.selectionStart = i, t.textArea.selectionEnd = i
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.setState({
                        hasInteractedOrPageload: !0
                    })
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(s.d)("Post", "Composer"),
                        t = o.createElement(d.b, {
                            key: "emote-picker",
                            onClick: this.toggleEmotePicker
                        }),
                        n = null;
                    this.state.hasInteractedOrPageload && (n = o.createElement(d.c, {
                        channelOwnerID: this.props.userID,
                        onClickEmote: this.onClickEmote,
                        toggleVisibility: this.toggleEmotePicker,
                        visible: this.state.isEmotePickerMenuVisible && !this.state.disabled,
                        direction: h.q.BottomRight
                    }));
                    var i, r = o.createElement(l.a, {
                        onClickOut: this.onEmotePickerClickOut
                    }, t, n);
                    return i = this.props.isConnectedToTwitter ? o.createElement(h.E, {
                        "data-test-selector": "twitter-checkbox",
                        id: "share-twitter-toggle",
                        label: Object(s.d)("Share Posts to Twitter", "TwitterShare"),
                        onChange: this.toggleShareActivity,
                        checked: this.state.shareToTwitter
                    }) : o.createElement("a", {
                        href: g
                    }, Object(s.d)("Connect Twitter", "ConnectTwitter")), o.createElement(h._17, {
                        elevation: 1,
                        padding: 1,
                        margin: {
                            bottom: 1
                        },
                        background: h.m.Base,
                        position: h._2.Relative,
                        "data-a-target": "pulse-post-container"
                    }, o.createElement("div", {
                        onMouseEnter: this.onMouseEnter
                    }, o.createElement(h._23, {
                        "data-test-selector": "composer",
                        "data-a-target": "pulse-input",
                        disabled: this.state.disabled,
                        onKeyDown: this.onKeyDown,
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        placeholder: this.props.placeholder ? this.props.placeholder : "",
                        noResize: !0,
                        refDelegate: this.setTextArea,
                        paddingRight: 30,
                        overflow: h.Y.Hidden
                    }), o.createElement(h._17, {
                        textAlign: h._22.Right,
                        position: h._2.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, r), o.createElement(h.U, {
                        display: h.H.Flex,
                        margin: {
                            top: 1
                        }
                    }, o.createElement(h.U, {
                        flexGrow: 1
                    }), o.createElement(h.U, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(l.a, {
                        onClickOut: this.closeTwitterBubble
                    }, o.createElement(u.a, null, o.createElement(h.v, {
                        icon: h._9.Gear,
                        ariaLabel: Object(s.d)("Composer Settings", "ComposerSettings"),
                        "data-test-selector": "composer-setting",
                        "data-a-target": "pulse-settings"
                    }), o.createElement(h.p, {
                        direction: h.q.Left
                    }, o.createElement(h.U, {
                        padding: 1
                    }, i))))), o.createElement(h.U, null, o.createElement(h.u, {
                        "data-test-selector": "submit-post",
                        disabled: this.state.disabled,
                        ariaLabel: e,
                        onClick: this.onSubmit,
                        "data-a-target": "pulse-post-button"
                    }, e)))))
                }, t.prototype.resize = function() {
                    this.textArea && (this.textArea.style.height = this.minHeight + "px", this.textArea.style.height = this.textArea.scrollHeight + "px")
                }, t = a.__decorate([Object(f.c)("Composer")], t)
            }(o.Component),
            v = b,
            y = n(8),
            S = Object(y.a)(i)(v);
        n.d(t, !1, function() {
            return "composer"
        }), n.d(t, !1, function() {
            return "submit-post"
        }), n.d(t, !1, function() {
            return "twitter-checkbox"
        }), n.d(t, !1, function() {
            return "composer-setting"
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, !1, function() {
            return v
        }), n.d(t, "a", function() {
            return S
        })
    },
    1398: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(v.d)(e)
            }
        }

        function r(e) {
            return Object(f.bindActionCreators)({
                showReportUserModal: function(e) {
                    var t = s.__rest(e, []);
                    return Object(g.d)(y.a, t)
                },
                login: function() {
                    return Object(b.f)(h.a.FeedReactionToggle)
                }
            }, e)
        }
        var a = n(1),
            o = n(2),
            s = n(0),
            l = n(1047),
            u = n(1029),
            c = n(6),
            d = n(3),
            p = n(1337),
            m = n(8),
            f = n(11),
            h = n(51),
            g = n(50),
            b = n(35),
            v = n(19),
            y = n(928),
            S = n(88),
            k = n(919),
            _ = (n(1406), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showOptionMenu: !1
                    }, t.closeOptionMenu = function() {
                        t.setState({
                            showOptionMenu: !1
                        })
                    }, t.showReport = function() {
                        if (!t.props.isLoggedIn) return void t.props.login();
                        t.props.showReportUserModal({
                            reportContext: t.getReportContext(t.props.content),
                            title: Object(o.d)("Report {itemType}", {
                                itemType: t.props.content.__typename
                            }, "ReportFeedPost")
                        })
                    }, t.toggleOptionMenu = function() {
                        t.setState(function(e) {
                            return {
                                showOptionMenu: !e.showOptionMenu
                            }
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = a.createElement(d.p, {
                        direction: d.q.Left,
                        size: d.r.Small,
                        show: !0
                    }, a.createElement(d.U, {
                        padding: 1
                    }, a.createElement(d.S, {
                        onClick: this.showReport,
                        "data-a-target": "pulse-post-report"
                    }, a.createElement(d.U, {
                        padding: {
                            y: .5,
                            x: 1
                        },
                        className: "report"
                    }, "Report"))));
                    return a.createElement(d.U, {
                        position: d._2.Relative
                    }, a.createElement(S.a, {
                        onClickOut: this.closeOptionMenu
                    }, this.state.showOptionMenu && e, a.createElement("div", {
                        className: this.state.showOptionMenu ? "button-icon--show" : "button-icon"
                    }, a.createElement(d.v, {
                        icon: d._9.Gear,
                        ariaLabel: Object(o.d)("Post Options", "FeedPostOptions"),
                        onClick: this.toggleOptionMenu,
                        "data-a-target": "pulse-post-options"
                    }))))
                }, t.prototype.getReportContext = function(e) {
                    switch (e.__typename) {
                        case "Clip":
                            var t = e;
                            return {
                                contentType: k.a.Clip,
                                targetUserID: t.broadcaster.id,
                                contentID: t.id
                            };
                        case "Post":
                            var n = e,
                                i = n.id.split(":");
                            return {
                                contentType: k.a.ChannelFeedPost,
                                targetUserID: n.author.id,
                                contentID: 2 === i.length ? i[1] : ""
                            };
                        case "Stream":
                            var r = e;
                            return {
                                contentType: k.a.User,
                                targetUserID: r.broadcaster.id
                            };
                        case "Video":
                            var a = e;
                            return {
                                contentType: k.a.Vod,
                                targetUserID: a.owner.id,
                                contentID: a.id
                            };
                        default:
                            return {
                                contentType: k.a.User,
                                targetUserID: ""
                            }
                    }
                }, t = s.__decorate([Object(c.c)("FeedItemOptions")], t)
            }(a.Component)),
            E = _,
            T = Object(m.a)(i, r)(E),
            C = n(1310),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onImpression = function(e) {
                        var n = {
                            feedPresentation: "inline",
                            item: t.props.item
                        };
                        Object(u.a)(n, e)
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.impressionTracking.onImpression(this.onImpression)
                }, t.prototype.render = function() {
                    return Object(p.b)(this.props.item.content.__typename) ? a.createElement(d._17, s.__assign({
                        elevation: 1,
                        margin: {
                            bottom: 1
                        },
                        background: d.m.Base,
                        position: d._2.Relative
                    }, Object(d._39)(this.props)), a.createElement(d.U, {
                        position: d._2.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: .5,
                            right: .5
                        }
                    }, a.createElement(T, {
                        content: this.props.item.content
                    })), a.createElement(C.a, {
                        reasons: this.props.item.reasons
                    }), a.createElement(p.a, {
                        content: this.props.item.content
                    })) : a.createElement(d.U, null)
                }, t = s.__decorate([Object(c.c)("FeedItem"), Object(l.d)(function(e) {
                    var t = e.item,
                        n = e.index,
                        i = Object(l.b)(t);
                    return {
                        batch_id: t.tracking.batchID || "",
                        card_entity: i.type + ":" + i.id,
                        card_id: i.id,
                        card_impression_id: t.tracking.cardImpressionID || "",
                        card_type: i.type,
                        feed_index: n,
                        rec_generation_id: t.tracking.recGenerationID || "",
                        rec_generation_index: t.tracking.recGenerationIndex || null
                    }
                }), Object(l.c)()], t)
            }(a.Component),
            w = P,
            N = function(e) {
                var t = e.items.edges.filter(function(e) {
                    return e.node.content.id
                }).map(function(e, t) {
                    var n = e.node;
                    return a.createElement(w, {
                        key: n.content.id,
                        item: n,
                        index: t,
                        "data-a-target": "pulse-item-" + t
                    })
                });
                return e.latencyTracking.reportInteractive(t.length), t.length ? a.createElement(d.U, null, t) : a.createElement(d.U, {
                    textAlign: d._22.Center
                }, a.createElement(d._21, {
                    color: d.F.Alt2
                }, Object(o.d)("There are no feed posts.", "ChannelFeedComponent")))
            },
            O = Object(c.c)("Feed")(N);
        n.d(t, "a", function() {
            return O
        })
    },
    1399: function(e, t) {},
    1400: function(e, t) {},
    1401: function(e, t) {},
    1402: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Reaction_Add"
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
                                value: "AddReactionInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "addReaction"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "content"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemClip"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemPost"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemVideo"
                                        },
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
                end: 351
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/post-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\n\nmutation Reaction_Add($input: AddReactionInput!) {\n  addReaction(input: $input) {\n    content {\n      ...feedItemClip\n      ...feedItemPost\n      ...feedItemVideo\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n(1156).definitions)), r.definitions = r.definitions.concat(i(n(1128).definitions)), r.definitions = r.definitions.concat(i(n(1157).definitions)), e.exports = r
    },
    1403: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Reaction_Remove"
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
                                value: "RemoveReactionInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "removeReaction"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "content"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemClip"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemPost"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemVideo"
                                        },
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
                end: 243
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/post-fragment.gql"\n\nmutation Reaction_Remove($input: RemoveReactionInput!) {\n  removeReaction(input: $input) {\n    content {\n      ...feedItemClip\n      ...feedItemPost\n      ...feedItemVideo\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n(1128).definitions)), e.exports = i
    },
    1404: function(e, t) {},
    1405: function(e, t) {},
    1406: function(e, t) {},
    1407: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Feed_Composer_CreatePost"
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
                                value: "CreatePostInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "createPost"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "post"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "feedItemPost"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "tweetStatus"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "tweet"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 222
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/post-fragment.gql"\n\nmutation Feed_Composer_CreatePost($input: CreatePostInput!) {\n  createPost(input: $input) {\n    post {\n      ...feedItemPost\n    }\n    tweetStatus\n    tweet\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n(1128).definitions)), e.exports = i
    },
    1408: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        var r = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "feed"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "FeedItemConnection"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "content"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "feedItemClip"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "feedItemPost"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "feedItemStream"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "feedItemVideo"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "reasons"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "FeedItemReason"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "reason"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "tracking"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "batchID"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cardImpressionID"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "recGenerationID"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "recGenerationIndex"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "cursor"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 641
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/feed/models/post-fragment.gql"\n#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\n#import "twilight/features/feed/models/stream-fragment.gql"\n\nfragment feed on FeedItemConnection {\n  edges {\n    node {\n      content {\n        ...feedItemClip\n        ...feedItemPost\n        ...feedItemStream\n        ...feedItemVideo\n      }\n      reasons {\n        ... on FeedItemReason {\n          reason\n        }\n      }\n      tracking {\n        batchID\n        cardImpressionID\n        recGenerationID\n        recGenerationIndex\n      }\n    }\n    cursor\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n(1128).definitions)), r.definitions = r.definitions.concat(i(n(1156).definitions)), r.definitions = r.definitions.concat(i(n(1157).definitions)), r.definitions = r.definitions.concat(i(n(1339).definitions)), e.exports = r
    },
    1864: function(e, t) {},
    1865: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowedGames_Games"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                directives: [],
                                                selectionSet: null
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
                end: 218
            }
        };
        n.loc.source = {
            body: "query FollowedGames_Games($limit: Int) {\n  currentUser{\n    id\n    followedGames(first: $limit){\n      nodes{\n        id\n        name\n        viewersCount\n        boxArtURL(width: 285, height: 380)\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1866: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnboardingPrompt_User"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "createdAt"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 176
            }
        };
        n.loc.source = {
            body: "query OnboardingPrompt_User($limit: Int) {\n  currentUser {\n    id\n    displayName\n    createdAt\n    followedGames(first: $limit) {\n      nodes {\n        id\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1867: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoEmbed_Video"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "height"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "width"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "lengthSeconds"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "publishedAt"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "title"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "viewCount"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 208
            }
        };
        n.loc.source = {
            body: "query VideoEmbed_Video($id: ID!, $height: Int, $width: Int) {\n  video(id: $id) {\n    id\n    lengthSeconds\n    previewThumbnailURL(width: $width, height: $height)\n    publishedAt\n    title\n    viewCount\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1868: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "StreamerTrailer_GetLiveStreams"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "ids"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "users"
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
                                    value: "ids"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "viewersCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        value: "sort"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "TIME"
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
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
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
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
                end: 429
            }
        };
        n.loc.source = {
            body: "query StreamerTrailer_GetLiveStreams($ids: [ID!]) {\n  users(ids: $ids) {\n    id\n    login\n    displayName\n    profileImageURL(width: 70)\n    stream {\n      id\n      viewersCount\n      previewImageURL(width: 320, height: 180)\n      game {\n        id\n        name\n      }\n    }\n    videos(first: 1, sort: TIME) {\n      edges {\n        node {\n          id\n          game {\n            name\n          }\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1869: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "StreamerTrailersExperiment"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "language"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "createdAt"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 91
            }
        };
        n.loc.source = {
            body: "query StreamerTrailersExperiment {\n  currentUser {\n    id\n    language\n    createdAt\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1870: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Pulse"
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "feedUser"
                                },
                                directives: []
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isConnectedToTwitter"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "pulseFeed"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "items"
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
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "feed"
                                                },
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
                end: 314
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/feed/models/feed-fragment.gql"\n#import "twilight/features/feed/models/user-fragment.gql"\n\nquery Pulse($limit: Int, $cursor: Cursor) {\n  currentUser {\n    ...feedUser\n    isConnectedToTwitter\n    pulseFeed {\n      items(first: $limit after: $cursor) {\n        ...feed\n      }\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n(1408).definitions)), r.definitions = r.definitions.concat(i(n(1055).definitions)), e.exports = r
    },
    1871: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopGames_Games"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                directives: [],
                                                selectionSet: null
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
                end: 193
            }
        };
        n.loc.source = {
            body: "query TopGames_Games($limit: Int) {\n  games(first: $limit) {\n    edges {\n      node {\n        id\n        name\n        viewersCount\n        boxArtURL(width: 285 height: 380)\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1872: function(e, t) {},
    2025: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                sideNavExpanded: e.ui.sideNavExpanded
            }
        }

        function r(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function a(e, t) {
            var n = new Set(e.map(function(e) {
                return e.node.content.id
            }));
            return e.concat(t.filter(function(e) {
                return !n.has(e.node.content.id)
            }))
        }

        function o(e) {
            var t = [];
            return e.games.edges.map(function(e) {
                var n = e.node;
                return t.push({
                    id: n.id,
                    name: n.name,
                    viewersCount: n.viewersCount,
                    boxArtURL: n.boxArtURL
                })
            }), t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n(0),
            l = n(1),
            u = n(2),
            c = n(30),
            d = n(922),
            p = n(918),
            m = n(111),
            f = n(14),
            h = n(1031),
            g = n(415),
            b = n(1361),
            v = n(6),
            y = n(8),
            S = n(33),
            k = n(9),
            _ = n(1125),
            E = n(1302),
            T = n(66),
            C = n(4),
            P = n(12),
            w = n(406),
            N = n(3),
            O = (n(1864), "game-list-first-item"),
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.logger = u.i.withCategory("game-list"), t.updateDisplayAdOrder = function() {
                        if (t.props.showAd) {
                            var e = document.querySelector('[data-target="' + t.props.containerType + '"]'),
                                n = document.querySelector('[data-target="' + (t.props.containerType + O) + '"]'),
                                i = document.querySelector("#" + g.b.front.rightTop);
                            if (n && e && i) {
                                var r = Math.floor((e.clientWidth - 300) / n.clientWidth).toString();
                                i.style.order !== r && (i.style.order = r)
                            }
                        }
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.updateDisplayAdOrder), this.updateDisplayAdOrder()
                }, t.prototype.componentDidUpdate = function() {
                    this.logger.debug("Component did update", this.props), this.updateDisplayAdOrder()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.logger.debug("Component will receive props", this.props, e), this.props.sideNavExpanded !== e.sideNavExpanded && this.updateDisplayAdOrder()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.updateDisplayAdOrder)
                }, t.prototype.render = function() {
                    this.logger.debug("Render", this.props);
                    for (var e = this.props, t = l.createElement(N.U, {
                            padding: 1
                        }, l.createElement(N._21, {
                            fontSize: N.L.Size5,
                            color: N.F.Alt2
                        }, Object(u.d)("{title}", {
                            title: e.title
                        }, "GameListComponent"))), n = l.createElement(N._17, {
                            background: N.m.Alt,
                            padding: 1
                        }, l.createElement(N.P, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: N.H.Block
                        }, l.createElement(P.a, s.__assign({
                            to: e.viewAllLinkTo
                        }, Object(N._39)(e)), Object(u.d)("View All", "GameListComponent")))), i = {
                            "game-list__item": !0,
                            "game-list__item--with-ad": e.showAd
                        }, r = new Array, a = 0; a < 10; ++a) r.push(l.createElement("div", {
                        className: "game-list__item game-list__item--placeholder",
                        key: a
                    }));
                    var o = [];
                    if (e.loading)
                        for (var c = 0; c < e.limit; c++) o.push(l.createElement(N.U, {
                            key: c,
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(N.j, {
                            ratio: N.k.Aspect3x4
                        }, l.createElement(N._1, null)), l.createElement(N.U, null, l.createElement(N._21, null, l.createElement(N._1, {
                            width: 100
                        })), l.createElement(N._21, null, l.createElement(N._1, {
                            width: 70
                        })))));
                    else e.items && e.items.length > 0 && (o = e.items.map(function(t, n) {
                        if (!t) return null;
                        var r = t.name,
                            a = t.viewersCount,
                            o = t.boxArtURL;
                        return l.createElement("div", {
                            className: C(i),
                            "data-target": n ? "" : e.containerType + O,
                            style: {
                                order: n
                            },
                            key: r
                        }, l.createElement(N.U, {
                            margin: {
                                bottom: 1
                            },
                            "data-target": "game-list-game__card_container"
                        }, l.createElement(N.t, {
                            linkTo: Object(w.d)(r),
                            title: r,
                            imageAlt: r + " cover image",
                            imageSrc: o,
                            info: Object(u.d)("{viewerCount,number} viewers", {
                                viewerCount: a
                            }, "GameListComponent"),
                            "data-a-target": "card-" + n,
                            "data-a-id": "card-" + r.replace(/ /g, "")
                        })))
                    }));
                    return e.showAd ? l.createElement(N._17, {
                        elevation: 1,
                        background: N.m.Base,
                        display: N.H.Hide,
                        breakpointMedium: {
                            display: N.H.Block
                        },
                        "data-target": e.containerType
                    }, t, l.createElement(N.U, {
                        padding: {
                            x: 1
                        }
                    }, l.createElement(N._33, {
                        gutterSize: N._35.ExtraSmall,
                        childWidth: N._34.Small,
                        placeholderItems: 0
                    }, l.createElement(h.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: "1rem",
                            flex: "1 0 auto",
                            order: 999,
                            width: 300,
                            height: 250,
                            maxWidth: "100%"
                        },
                        adSize: g.c.front.rightTop,
                        adUnit: g.d.frontpage,
                        slotID: g.b.front.rightTop,
                        targeting: {
                            pagetype: g.a.frontpage
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), o, r)), n) : l.createElement(N._17, {
                        elevation: 1,
                        background: N.m.Base,
                        display: N.H.Hide,
                        breakpointMedium: {
                            display: N.H.Block
                        },
                        "data-target": e.containerType
                    }, t, l.createElement(N.U, {
                        padding: {
                            x: 1
                        }
                    }, l.createElement(N._33, {
                        gutterSize: N._35.ExtraSmall,
                        childWidth: N._34.Small,
                        placeholderItems: 0
                    }, o, r)), n)
                }, t = s.__decorate([Object(v.c)("GameList", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            U = Object(y.a)(i)(I),
            R = n(1865),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = [];
                    return this.props.data.error ? l.createElement(T.a, {
                        message: Object(u.d)("Followed Games are unavailable at this time.", "FollowedGamesCompoment")
                    }) : (this.props.data.loading || (e = this.props.data.currentUser.followedGames && this.props.data.currentUser.followedGames.nodes || []), this.props.data.loading || e && e.length > 0 ? l.createElement(U, {
                        "data-a-target": "view-all-followed-games-link",
                        items: e,
                        limit: 18,
                        loading: this.props.data.loading,
                        title: Object(u.d)("Followed Games", "FollowedGamesCompoment"),
                        viewAllLinkTo: "/directory/following/games",
                        showAd: !1,
                        containerType: "followed-"
                    }) : null)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(k.a)(R, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    }
                }), Object(v.c)("FollowedGames")], t)
            }(l.Component),
            F = D,
            x = n(1866),
            j = "twilight_onboarding",
            L = "twilight_onboarding-prompt_dismissed",
            A = {
                domain: window.location.hostname.endsWith(".twitch.tv") ? ".twitch.tv" : void 0,
                secure: "https:" === window.location.protocol
            },
            M = s.__assign({}, A, {
                expires: 365
            }),
            V = new Map([
                ["skip", 1],
                ["no_skip", 3]
            ]),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isOnboardingDismissedCookieSet: void 0 !== S.get(L)
                    }, t.handleAutoOnboardingRedirect = function() {
                        void 0 === S.get(j) && Object(_.g)(new Date(t.props.data.currentUser.createdAt)) && (S.set(j, !0, M), t.redirectToOnboarding(E.b.NewSignup))
                    }, t.startOnboarding = function() {
                        t.redirectToOnboarding(E.b.HomepageCTA)
                    }, t.redirectToOnboarding = function(e) {
                        Object(E.g)({
                            source: e
                        }), u.n.history.push("/hi" + location.search), window.location.reload()
                    }, t.dismissOnboardingPrompt = function() {
                        Object(E.e)(), S.set(L, !0, M), t.setState({
                            isOnboardingDismissedCookieSet: !0
                        })
                    }, t.followedGamesForUserHasLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.currentUser
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    return s.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return s.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, u.n.experiments.getAssignment("TWILIGHT_WEB_ONBOARDING")];
                                case 1:
                                    return e = t.sent(), e && V.has(e) && this.setState({
                                        experimentAssignment: e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return this.state.isOnboardingDismissedCookieSet || !this.followedGamesForUserHasLoaded() || !this.state.experimentAssignment || this.props.data.currentUser.followedGames.nodes.length >= (V.get(this.state.experimentAssignment) || 0) || !Object(_.g)(new Date(this.props.data.currentUser.createdAt)) ? null : (this.handleAutoOnboardingRedirect(), l.createElement(N._17, {
                        "data-test-selector": "onboarding-prompt",
                        background: N.m.Base,
                        display: N.H.Flex,
                        elevation: 3,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        borderMarked: !0
                    }, l.createElement(N._17, {
                        display: N.H.Flex,
                        flexWrap: N.K.NoWrap,
                        textAlign: N._22.Left,
                        alignItems: N.c.Center,
                        fullWidth: !0,
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(N.U, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, l.createElement(N._21, {
                        type: N._26.H5,
                        color: N.F.Base,
                        bold: !0
                    }, Object(u.d)("Welcome to your homepage, {displayName}!", {
                        displayName: this.props.data.currentUser.displayName
                    }, "OnboardingPrompt"))), l.createElement(N.U, {
                        flexShrink: 0
                    }, l.createElement(N.v, {
                        "data-test-selector": "onboarding-prompt__dismiss",
                        ariaLabel: Object(u.d)("dismiss onboarding", "OnboardingPrompt"),
                        type: N.w.Default,
                        onClick: this.dismissOnboardingPrompt,
                        icon: N._9.Close
                    }))), l.createElement(N.U, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(N._21, null, Object(u.d)("Here you can find your Pulse Feed and popular content on Twitch. Take a moment to personalize this page to your interests.", "OnboardingPrompt"))), l.createElement(N.U, {
                        margin: {
                            y: .5
                        }
                    }, l.createElement(N.u, {
                        "data-test-selector": "onboarding-prompt__start",
                        onClick: this.startOnboarding
                    }, l.createElement(N.U, {
                        padding: {
                            x: 1
                        }
                    }, Object(u.d)("Start", "OnboardingPrompt"))))))
                }, t = s.__decorate([Object(v.c)("OnboardingPrompt", {
                    autoReportInteractive: !0
                }), Object(k.a)(x, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                })], t)
            }(l.Component),
            B = G,
            z = Object(y.a)(r)(B),
            W = n(1120),
            H = n(1056),
            q = n(1867),
            $ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.height || 540,
                        t = this.props.width || 960;
                    if (this.props.data.loading) return l.createElement(N._1, {
                        height: e,
                        width: t
                    });
                    if (this.props.data.error || !this.props.data.video) return l.createElement(N._1, {
                        height: e,
                        width: t
                    });
                    var n = this.props.data.video,
                        i = n.id,
                        r = n.lengthSeconds,
                        a = n.publishedAt,
                        o = n.previewThumbnailURL,
                        u = n.videoViewCount,
                        c = {
                            vodID: i,
                            disableTheatreButton: !0,
                            playerTypeOverride: this.props.playerTypeOverride
                        };
                    return l.createElement(N.U, null, l.createElement(W.a, {
                        createdAt: a,
                        lengthSeconds: r,
                        type: W.b.Video,
                        thumbnailURL: o,
                        viewCount: u
                    }, l.createElement(H.c, s.__assign({}, c))))
                }, t
            }(l.Component),
            K = Object(v.c)("VideoEmbed")($),
            Q = Object(k.a)(q, {
                options: function(e) {
                    return {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            id: e.videoID,
                            height: 540,
                            width: 960
                        }
                    }
                }
            })(K),
            Y = Q,
            Z = n(1297),
            J = n(1155),
            X = new Map([
                ["52233100", "179571457"],
                ["66228451", "179571772"],
                ["72433606", "179571940"],
                ["109836715", "179572536"],
                ["30890872", "179573149"],
                ["39604685", "179573959"],
                ["81549092", "179574053"],
                ["21730259", "179574118"],
                ["30672745", "179574189"],
                ["41227372", "179574247"],
                ["62983472", "179574365"],
                ["31582795", "179574437"],
                ["46471425", "179574519"],
                ["29400754", "179574576"],
                ["75221947", "179574669"],
                ["59152750", "179574753"],
                ["114905994", "179575231"],
                ["40601000", "179575616"],
                ["143357760", "179576090"],
                ["63321379", "179576469"],
                ["39179278", "179576900"],
                ["28036688", "179577763"],
                ["90699192", "179578710"],
                ["77693236", "179578774"],
                ["147395652", "166443236"],
                ["94127416", "179945804"],
                ["64998532", "179947622"],
                ["7134678", "179948027"],
                ["9244832", "179948291"],
                ["66365608", "179948521"],
                ["23334283", "179949878"],
                ["93649253", "179950484"],
                ["130419496", "179950675"],
                ["63208102", "159198069"],
                ["37764822", "179949198"],
                ["31506856", "179948841"],
                ["13220401", "179943646"],
                ["124751250", "179952949"],
                ["51533859", "179570565"]
            ]),
            ee = Array.from(X.keys()),
            te = ["28036688", "30672745", "31582795", "51533859", "63321379", "62983472", "29400754"],
            ne = n(1868),
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.usedStreamerTrailers = [], t.userIDToData = new Map, t.blankVideo = {
                        id: "",
                        game: {
                            id: "",
                            name: ""
                        }
                    }, t.blankGame = {
                        id: "",
                        name: ""
                    }, t.blankUser = {
                        id: "",
                        displayName: "",
                        login: "",
                        profileImageURL: "",
                        stream: {
                            id: "",
                            viewersCount: 0,
                            previewImageURL: "",
                            game: t.blankGame
                        },
                        videos: {
                            edges: [{
                                node: t.blankVideo
                            }]
                        }
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error ? (this.props.data.error && u.i.warn("StreamerTrailer data error:", this.props.data.error), null) : l.createElement(N._17, {
                        background: N.m.Base,
                        elevation: 1,
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            x: .5,
                            y: 1
                        },
                        display: N.H.Flex,
                        flexDirection: N.J.Column,
                        flexWrap: N.K.NoWrap
                    }, l.createElement(N.U, {
                        margin: {
                            bottom: .5
                        },
                        padding: {
                            left: .5
                        }
                    }, l.createElement(N._21, {
                        fontSize: N.L.Size5,
                        color: N.F.Alt2
                    }, "Streamers You May Like")), l.createElement(N.U, {
                        display: N.H.Flex,
                        flexDirection: N.J.Row,
                        flexWrap: N.K.NoWrap
                    }, this.renderStreamerVideos()))
                }, t.prototype.renderStatusLink = function(e, t, n) {
                    var i = e.login,
                        r = e.displayName,
                        a = e.stream,
                        o = l.createElement(P.a, {
                            to: "/" + i
                        }, r);
                    return "" === a.id && "" !== n.id && void 0 !== n.game && "" !== n.game.name && !1 === this.props.showTrailers ? l.createElement(N.U, null, l.createElement(N._21, {
                        fontSize: N.L.Size6,
                        ellipsis: !0
                    }, o, " "), l.createElement(N._21, {
                        fontSize: N.L.Size6,
                        color: N.F.Base,
                        ellipsis: !0
                    }, "was playing ", l.createElement(P.a, {
                        to: "/directory/game/" + n.game.name
                    }, n.game.name))) : "" !== t ? l.createElement(N.U, null, l.createElement(N._21, {
                        fontSize: N.L.Size6,
                        ellipsis: !0
                    }, o, " "), l.createElement(N._21, {
                        fontSize: N.L.Size6,
                        color: N.F.Base,
                        ellipsis: !0
                    }, "playing ", l.createElement(P.a, {
                        to: "/directory/game/" + t
                    }, t))) : l.createElement(N._21, {
                        fontSize: N.L.Size6,
                        color: N.F.Base,
                        ellipsis: !0
                    }, "Meet ", o)
                }, t.prototype.renderViewLinkText = function(e) {
                    return "" === e ? "View Channel" : "View Stream"
                }, t.prototype.renderStreamerVideos = function() {
                    var e = this;
                    return this.getStreamerTrailerVideos().map(function(t) {
                        var n = t.userData,
                            i = n.stream,
                            r = n.videos,
                            a = t.videoID,
                            o = "";
                        "" !== i.id && void 0 !== i.game && "" !== i.game.name && (o = i.game.name);
                        var s = r.edges[0].node || e.blankVideo;
                        return l.createElement(N.U, {
                            className: "streamer-trailer",
                            margin: .5,
                            fullHeight: !0,
                            fullWidth: !0,
                            key: a,
                            "data-test-selector": t.selector
                        }, e.mapStreamToEmbed(t), e.renderStreamerInfo(t.userData, o, s))
                    })
                }, t.prototype.mapStreamToEmbed = function(e) {
                    var t = e.userData,
                        n = t.login,
                        i = t.stream,
                        r = t.videos,
                        a = e.videoID,
                        o = r.edges[0].node;
                    return !0 === this.props.showTrailers ? l.createElement(Y, {
                        width: 211,
                        height: 118,
                        playerTypeOverride: H.b.Frontpage,
                        videoID: a
                    }) : "" === i.id ? l.createElement(Y, {
                        width: 211,
                        height: 118,
                        playerTypeOverride: H.b.Frontpage,
                        videoID: o.id
                    }) : l.createElement(W.a, {
                        type: W.b.Stream,
                        viewCount: i.viewersCount,
                        thumbnailURL: i.previewImageURL
                    }, l.createElement(J.a, {
                        channelLogin: n,
                        playerTypeOverride: H.b.Frontpage
                    }))
                }, t.prototype.renderStreamerInfo = function(e, t, n) {
                    var i = e.login,
                        r = e.profileImageURL,
                        a = e.stream;
                    return l.createElement(N.U, {
                        "data-test-selector": i + "-streamer-trailer",
                        display: N.H.Flex,
                        flexGrow: 0,
                        alignItems: N.c.Start,
                        flexWrap: N.K.NoWrap,
                        margin: {
                            top: 1
                        }
                    }, l.createElement(N.U, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(P.a, {
                        to: "/" + i
                    }, l.createElement(N.l, {
                        imageSrc: r,
                        imageAlt: "Profile Image",
                        size: 40
                    }))), l.createElement(N.U, {
                        margin: {
                            x: 1
                        },
                        flexGrow: 1,
                        "data-a-target": "streamer-trailer-playing-message"
                    }, this.renderStatusLink(e, t, n)), l.createElement(N.U, {
                        display: N.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(N.u, {
                        type: N.z.Hollow,
                        linkTo: "/" + i
                    }, this.renderViewLinkText(a.id))))
                }, t.prototype.getLiveUsersInRandomOrder = function() {
                    for (var e = [], t = 0, n = this.props.data.users; t < n.length; t++) {
                        var i = n[t];
                        this.userIDToData.set(i.id, i), "" !== i.stream.id && e.push(i.id)
                    }
                    return Object(Z.a)(e)
                }, t.prototype.addLiveUsersToUsedStreamerTrailers = function(e) {
                    for (var t = 0; t < e.length && !(t >= 4); t++) {
                        var n = e[t],
                            i = X.get(n) || "",
                            r = this.userIDToData.get(n) || this.blankUser;
                        if ("" !== i) {
                            var a = this.props.showTrailers ? "online-streamer-trailer" : "online-stream-trailer";
                            this.usedStreamerTrailers.push({
                                videoID: i,
                                userData: r,
                                selector: a
                            })
                        }
                    }
                }, t.prototype.addTopOfflineUsersToUsedStreamerTrailers = function(e) {
                    for (var t = e.length, n = 0; t < 4 && n < te.length; n++) {
                        for (var i = !0, r = te[n], a = 0, o = e; a < o.length; a++) {
                            if (r === o[a]) {
                                i = !1;
                                break
                            }
                        }
                        if (i) {
                            var s = X.get(r) || "",
                                l = this.userIDToData.get(r) || this.blankUser;
                            if (void 0 !== s && "" !== l.login) {
                                var u = this.props.showTrailers ? "offline-streamer-trailer" : "offline-streamer-video";
                                this.usedStreamerTrailers.push({
                                    videoID: s,
                                    userData: l,
                                    selector: u
                                }), t++
                            }
                        }
                    }
                }, t.prototype.getStreamerTrailerVideos = function() {
                    if (this.usedStreamerTrailers.length > 0) return this.usedStreamerTrailers;
                    var e = this.getLiveUsersInRandomOrder();
                    return this.addLiveUsersToUsedStreamerTrailers(e), this.addTopOfflineUsersToUsedStreamerTrailers(e), this.usedStreamerTrailers
                }, t = s.__decorate([Object(v.c)("StreamerTrailer"), Object(k.a)(ne, {
                    options: {
                        variables: {
                            ids: ee
                        }
                    }
                })], t)
            }(l.Component),
            re = ie,
            ae = n(1869),
            oe = ["control", "on"],
            se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        assignmentDetermined: !1,
                        assignment: ""
                    }, t.didUnmount = !1, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    return s.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return s.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.latencyTracking.reportInteractive(), [4, u.n.experiments.getAssignment("STREAMER_TRAILERS", {})];
                                case 1:
                                    return e = t.sent(), this.didUnmount ? [2] : (this.setState({
                                        assignment: e,
                                        assignmentDetermined: !0
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    if (this.state.assignmentDetermined && !this.props.data.loading && !this.props.data.error) {
                        var e = this.props.data.currentUser;
                        if (e && e.createdAt) {
                            if (new Date(e.createdAt) > this.getStartDate() && "en" === e.language && this.validAssignment()) return l.createElement(re, {
                                showTrailers: "on" === this.state.assignment
                            })
                        }
                    }
                    return null
                }, t.prototype.getStartDate = function() {
                    var e = u.b.get("streamer_trailers_start_date", "2017-10-05T20:00:26.75536206Z");
                    return isNaN(Date.parse(e)) ? (u.i.warn("Date", e, "is not a valid date"), new Date("2017-10-05T20:00:26.75536206Z")) : new Date(e)
                }, t.prototype.validAssignment = function() {
                    var e = this.state.assignment || "";
                    return void 0 !== oe.find(function(t) {
                        return t === e
                    })
                }, t = s.__decorate([Object(v.c)("StreamerTrailersExperiment"), Object(k.a)(ae)], t)
            }(l.Component),
            le = se,
            ue = n(462),
            ce = n(23),
            de = n(1397),
            pe = n(1398),
            me = n(1407),
            fe = n(1047),
            he = n(1338),
            ge = function(e) {
                for (var t = e.cardCount, n = [], i = 0; i < t; i++) 1 === i ? n.push(l.createElement(he.b, {
                    key: i
                })) : n.push(l.createElement(he.a, {
                    key: i
                }));
                return l.createElement(N.U, null, n)
            },
            be = n(1870),
            ve = Object(fe.d)(function() {
                return {
                    feed_type: "rec"
                }
            })(pe.a),
            ye = {
                limit: 5
            },
            Se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCreatePost = function(e, n) {
                        return void 0 === n && (n = !1), t.props.createPost(e, n)
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? l.createElement(ge, {
                        cardCount: 5
                    }) : this.props.data.error ? l.createElement(T.a, {
                        message: Object(u.d)("Error loading data.", "PulseComponent")
                    }) : l.createElement(N.U, null, l.createElement(de.a, {
                        placeholder: Object(u.d)("Share a clip or video with your followers by adding links from Twitch, Vimeo, and YouTube.", "PulseComposer"),
                        onCreate: this.onCreatePost,
                        isConnectedToTwitter: this.props.data.currentUser.isConnectedToTwitter,
                        userID: this.props.data.currentUser.id,
                        composerLocation: de.b.HomePage
                    }), l.createElement(ve, {
                        items: this.props.data.currentUser.pulseFeed.items
                    }), l.createElement(c.a, {
                        enabled: !this.props.data.loading && !this.props.data.error,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 100
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(k.a)(be, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: ye
                    },
                    props: function(e) {
                        return s.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data.currentUser.pulseFeed.items.edges;
                                return e.data.fetchMore({
                                    query: be,
                                    variables: {
                                        limit: 5,
                                        cursor: t[t.length - 1].cursor
                                    },
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            i = n;
                                        return {
                                            currentUser: s.__assign({}, i.currentUser, {
                                                pulseFeed: s.__assign({}, i.currentUser.pulseFeed, {
                                                    items: s.__assign({}, i.currentUser.pulseFeed.items, {
                                                        edges: a(e.currentUser.pulseFeed.items.edges, i.currentUser.pulseFeed.items.edges)
                                                    })
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(k.a)(me, {
                    props: function(e) {
                        return {
                            createPost: function(t, n) {
                                return e.mutate(s.__assign({}, Object(ce.a)({
                                    channelID: e.ownProps.data.currentUser.id,
                                    body: t,
                                    postToTwitter: n
                                }), {
                                    optimisticResponse: {
                                        createPost: {
                                            post: {
                                                id: "post:" + +new Date,
                                                createdAt: (new Date).toISOString(),
                                                body: {
                                                    content: t,
                                                    emotes: [],
                                                    __typename: "MessageBody"
                                                },
                                                author: e.ownProps.data.currentUser,
                                                embeds: [],
                                                reactions: [],
                                                __typename: "Post"
                                            },
                                            tweetStatus: "",
                                            tweet: "",
                                            __typename: "Mutation"
                                        }
                                    },
                                    update: function(e, t) {
                                        var n = e.readQuery({
                                            query: be,
                                            variables: ye
                                        });
                                        n.currentUser.pulseFeed.items.edges = [{
                                            node: {
                                                content: t.data.createPost.post,
                                                reasons: [],
                                                tracking: {
                                                    batchID: "",
                                                    cardImpressionID: "",
                                                    recGenerationID: "",
                                                    recGenerationIndex: 0,
                                                    __typename: "FeedItemTracking"
                                                },
                                                __typename: "FeedItem"
                                            },
                                            cursor: "",
                                            __typename: "FeedItemEdge"
                                        }].concat(n.currentUser.pulseFeed.items.edges), e.writeQuery({
                                            query: be,
                                            data: n,
                                            variables: ye
                                        })
                                    }
                                }))
                            }
                        }
                    }
                }), Object(v.c)("Pulse")], t)
            }(l.Component),
            ke = Se,
            _e = n(1871),
            Ee = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = [];
                    return this.props.data.error ? l.createElement(T.a, {
                        message: Object(u.d)("Top Games are unavailable at this time.", "TopGamesCompoment")
                    }) : (this.props.data.loading || (e = o(this.props.data)), l.createElement(U, {
                        title: Object(u.d)("Top Games", "TopGamesCompoment"),
                        items: e,
                        loading: this.props.data.loading,
                        limit: 18,
                        viewAllLinkTo: "/directory",
                        "data-a-target": "view-all-link",
                        showAd: !0,
                        containerType: "top-"
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(k.a)(_e, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: e.count || 18
                            }
                        }
                    }
                }), Object(v.c)("TopGames")], t)
            }(l.Component),
            Te = Ee,
            Ce = (n(1872), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(g.b.front).length && m.a.display(g.b.front.leaderboard), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentWillMount = function() {
                    g.g.addListener(g.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender(), u.n.setPageTitle()
                }, t.prototype.render = function() {
                    return l.createElement(N.U, {
                        fullHeight: !0
                    }, l.createElement(N.U, {
                        position: N._2.Relative,
                        zIndex: N._38.Default
                    }, l.createElement(ue.a, null)), l.createElement(c.b, {
                        suppressScrollX: !0,
                        disableDebounce: !0,
                        "data-a-target": "pulse-scroller"
                    }, l.createElement(N.U, {
                        padding: 3
                    }, l.createElement(h.a, {
                        adSize: g.c.front.leaderboard,
                        adUnit: g.d.frontpage,
                        slotID: g.b.front.leaderboard,
                        targeting: {
                            pagetype: g.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginBottom: "2rem"
                        },
                        autoEnable: !1
                    }), l.createElement(le, null), l.createElement(N.U, {
                        className: "front-page",
                        display: N.H.Flex,
                        flexDirection: N.J.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: N.J.Row
                        },
                        flexWrap: N.K.NoWrap,
                        margin: {
                            x: "auto"
                        }
                    }, l.createElement(N.U, {
                        className: "front-page__main-col",
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(z, null), l.createElement(ke, null)), l.createElement(N.U, {
                        flexGrow: 1,
                        breakpointMedium: {
                            padding: {
                                left: 2
                            }
                        }
                    }, l.createElement(c.c, {
                        bottomPixelThreshold: 20,
                        disableStickinessBelowWidth: 1127
                    }, l.createElement(N.U, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(b.b, {
                        renderContext: b.a.Front
                    })), l.createElement(N.U, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(Te, null)), l.createElement(N.U, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(F, null)), l.createElement(N.U, {
                        display: N.H.Hide,
                        breakpointMedium: {
                            display: N.H.Block
                        }
                    }, l.createElement(h.a, {
                        adSize: g.c.front.rightBottom,
                        adUnit: g.d.frontpage,
                        slotID: g.b.front.rightBottom,
                        targeting: {
                            pagetype: g.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1rem"
                        },
                        autoEnable: !1
                    }))))))))
                }, t.prototype.componentWillUnmount = function() {
                    g.g.removeListener(g.e, this.onSlotAdded)
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(v.c)("FrontPage", {
                    destination: p.a.Index
                }), Object(d.a)({
                    location: f.PageviewLocation.FrontPage
                })], t)
            }(l.Component)),
            Pe = Ce;
        n.d(t, "FrontPage", function() {
            return Pe
        })
    },
    293: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            switch (t) {
                case p.FeaturedBroadcastersRenderContext.AnonFront:
                    return s.createElement(c.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Horizontal,
                        showCounts: !0,
                        darkTheme: !0
                    });
                default:
                    return s.createElement(g._17, {
                        className: "featured-content",
                        background: g.m.Base,
                        elevation: 1
                    }, s.createElement(g.U, {
                        padding: 1
                    }, r(n)), s.createElement(c.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Vertical,
                        showCounts: !0
                    }))
            }
        }

        function r(e) {
            return e ? s.createElement(g._21, {
                fontSize: g.L.Size5,
                color: g.F.Alt2
            }, s.createElement(g._1, {
                width: 100
            })) : s.createElement(g._21, {
                fontSize: g.L.Size5,
                color: g.F.Alt2
            }, Object(l.d)("Featured", "FeaturedContentComponent"))
        }

        function a(e) {
            return i([], e, !0)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.placeholderFeaturedBroadcasters = a, n.d(t, "FeaturedContent", function() {
            return v
        });
        var o = n(0),
            s = n(1),
            l = (n.n(s), n(2)),
            u = n(9),
            c = n(1295),
            d = n(1001),
            p = n(73),
            m = n(1367),
            f = (n.n(m), n(1296)),
            h = n(6),
            g = n(3);
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return p.FeaturedBroadcastersRenderContext
        });
        var b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = this.props.data.featuredStreams || [],
                        t = Object(f.a)(e),
                        n = this.props.data.featuredVideos || [],
                        r = Object(f.b)(n);
                    if (t.length > 0 && t.splice(t.length - r.length), this.props.shouldMixContent && r.length > 0) {
                        var a = 6 - r.length,
                            o = t.splice(a);
                        t = t.concat(r).concat(o)
                    } else t = t.concat(r);
                    var s = !(!this.props.data.loading && !this.props.data.error);
                    return i(t, this.props.renderContext, s)
                }, t.prototype.postRender = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t = o.__decorate([Object(u.a)(m, {
                    options: function() {
                        return {
                            variables: {
                                language: l.n.intl.getLanguageCode()
                            }
                        }
                    }
                }), Object(h.c)("FeaturedContent")], t)
            }(s.Component),
            v = b
    },
    73: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            r = n(1),
            a = n(413),
            o = n(113),
            s = n(74),
            l = function(e) {
                var t = {
                    name: "TWILIGHT_EXPANDO_FEATURO",
                    assignments: {
                        fallback: function() {
                            return o.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 74))
                            }, "FeaturedBroadcasters")(i.__assign({}, e, {
                                streamCount: 6,
                                showCounts: !1
                            }))
                        },
                        expanded: function() {
                            return o.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 74))
                            }, "FeaturedBroadcasters")(i.__assign({}, e, {
                                streamCount: 8,
                                showCounts: !0
                            }))
                        }
                    },
                    loader: function() {
                        return Object(s.placeholderFeaturedBroadcasters)(e.renderContext)
                    }
                };
                return r.createElement(a.a, i.__assign({}, t))
            };
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return s.FeaturedBroadcastersRenderContext
        }), n.d(t, "FeaturedBroadcasters", function() {
            return l
        })
    },
    74: function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            switch (t) {
                case a.AnonFront:
                    return s.createElement(c.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Horizontal,
                        showCounts: i,
                        darkTheme: !0
                    });
                default:
                    return s.createElement(f._17, {
                        className: "featured-broadcasters",
                        background: f.m.Base,
                        elevation: 1
                    }, s.createElement(f.U, {
                        padding: 1
                    }, s.createElement(f._21, {
                        fontSize: f.L.Size5,
                        color: f.F.Alt2
                    }, Object(l.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), s.createElement(c.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Vertical,
                        showCounts: i
                    }))
            }
        }

        function r(e) {
            return i([], e, !0)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return a
        }), t.placeholderFeaturedBroadcasters = r, n.d(t, "FeaturedBroadcasters", function() {
            return b
        });
        var a, o = n(0),
            s = n(1),
            l = (n.n(s), n(2)),
            u = n(9),
            c = n(1295),
            d = n(1001),
            p = n(1296),
            m = n(6),
            f = n(3),
            h = n(1366);
        n.n(h);
        ! function(e) {
            e[e.AnonFront = 1] = "AnonFront", e[e.Front = 2] = "Front"
        }(a || (a = {}));
        var g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getRender = function(e) {
                        var n = !(!t.props.data.loading && !t.props.data.error);
                        return i(e, t.props.renderContext, n, t.props.showCounts)
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = this.props.data.featuredStreams || [],
                        t = Object(p.a)(e);
                    return this.getRender(t)
                }, t.prototype.postRender = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t = o.__decorate([Object(u.a)(h, {
                    options: function(e) {
                        return {
                            variables: {
                                language: l.n.intl.getLanguageCode(),
                                first: e.streamCount || 6
                            }
                        }
                    }
                }), Object(m.c)("FeaturedBroadcasters")], t)
            }(s.Component),
            b = g
    },
    914: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention", e[e.Ban = 3] = "Ban", e[e.Timeout = 4] = "Timeout", e[e.AutoModRejectedPrompt = 5] = "AutoModRejectedPrompt", e[e.AutoModMessageRejected = 6] = "AutoModMessageRejected", e[e.AutoModMessageAllowed = 7] = "AutoModMessageAllowed", e[e.AutoModMessageDenied = 8] = "AutoModMessageDenied", e[e.Connected = 9] = "Connected", e[e.Disconnected = 10] = "Disconnected", e[e.Reconnect = 11] = "Reconnect", e[e.Hosting = 12] = "Hosting", e[e.Unhost = 13] = "Unhost", e[e.Subscription = 14] = "Subscription", e[e.Resubscription = 15] = "Resubscription", e[e.SubGift = 16] = "SubGift", e[e.Clear = 17] = "Clear", e[e.SubscriberOnlyMode = 18] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 19] = "FollowerOnlyMode", e[e.SlowMode = 20] = "SlowMode", e[e.RoomMods = 21] = "RoomMods", e[e.RoomState = 22] = "RoomState", e[e.Raid = 23] = "Raid", e[e.Unraid = 24] = "Unraid", e[e.Notice = 25] = "Notice", e[e.Info = 26] = "Info", e[e.BadgesUpdated = 27] = "BadgesUpdated", e[e.Purchase = 28] = "Purchase"
        }(i || (i = {}))
    },
    918: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseForYou: "browse.for-you",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardModeration: "channel.dashboard.moderation",
            ChannelDashboardStreamSummary: "channel.dashboard.stream-summary",
            ChannelClips: "channel.clips",
            ChannelClipsManager: "videoManager.clips.channel",
            ChannelCollections: "channel.collections",
            ChannelEvents: "channel.events",
            ChatPopout: "chat",
            DevOnly: "dev",
            DirectoryCommunityByLanguage: "directory.community.language",
            DirectoryCommunityIndex: "directory.community.index",
            DirectoryCommunityDetails: "directory.community.details",
            DirectoryGames: "directory.games",
            DirectoryPopular: "directory.popular",
            DirectoryGameIndex: "directory.game.index",
            DirectoryGameClips: "directory.game.clips",
            DirectoryGameDetails: "directory.game.details",
            DirectoryGameVideos: "directory.game.videos",
            DirectoryFollowingIndex: "directory.following.index",
            DirectoryFollowingGames: "directory.following.games",
            DirectoryFollowingVideos: "directory.following.videos.video-type",
            DirectoryFollowingHosts: "directory.following.hosts",
            DirectoryFollowingLiveChannels: "directory.following.channels",
            DirectoryFollowingCommunities: "directory.following.communities",
            EmailVerification: "emailVerification",
            EventDetails: "event.details",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardBasicInfo: "teams.dashboard.basic-info",
            TeamsDashboardCustomize: "teams.dashboard.customize",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    919: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT"
        }(i || (i = {}))
    },
    921: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(4),
            a = n(1),
            o = n(11),
            s = n(2),
            l = n(9),
            u = n(6),
            c = n(926),
            d = n(3),
            p = n(944),
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
                    return e = this.props.data.loading ? [a.createElement("option", {
                        key: "Loading"
                    }, Object(s.d)("Loading...", "ReportReasonsSelect"))] : Object(c.b)(this.props.data.reportReasons).map(function(e) {
                        return a.createElement("option", {
                            key: e.canonical,
                            value: e.canonical
                        }, e.localized)
                    }), a.createElement(d.U, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(d.M, {
                        id: "reporting-modal__select",
                        label: Object(s.d)("Select Reason (required)", "ReportUserModal")
                    }, a.createElement(d._14, {
                        id: "reporting-modal__select",
                        "data-test-selector": "reporting-modal.select",
                        disabled: this.props.data.loading || !!this.props.data.error,
                        onChange: this.handleChange,
                        defaultValue: t
                    }, a.createElement("option", {
                        disabled: !0,
                        key: "default"
                    }, t), e)))
                }, t = i.__decorate([Object(u.c)("ReportReasonSelect")], t)
            }(a.Component),
            f = Object(l.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            })(m),
            h = (n(945), n(946));
        n.d(t, "a", function() {
            return b
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, "c", function() {
            return y
        });
        var g, b = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError"
        }(g || (g = {}));
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
                            selectedCommunityName: e.target.name
                        })
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName) : t.props.onError(g.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        if (!t.props.data || t.props.data.loading || t.props.data.error || !t.props.data.user) return null;
                        var n = t.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        });
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
                    return a.createElement(d.U, {
                        display: d.H.Flex,
                        flexDirection: d.J.Column,
                        alignItems: d.c.Center,
                        justifyContent: d.T.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === g.Success ? a.createElement("div", null, a.createElement(d.u, {
                        onClick: this.props.onClose
                    }, a.createElement(d.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(d.U, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d._21, {
                        type: d._26.H4
                    }, this.props.title), a.createElement(d._17, {
                        color: d.F.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(d._17, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(f, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), this.renderCommunitiesSelector(), a.createElement(d.M, {
                        id: "reporting__text-area",
                        label: Object(s.d)("Description (required)", "ReportUser")
                    }, a.createElement(d._23, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(d._17, {
                        display: d.H.Flex,
                        justifyContent: d.T.Center
                    }, a.createElement(d.u, {
                        onClick: this.handleSubmit
                    }, a.createElement(d.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Send", "ReportUser"))))))
                }, t.prototype.renderCommunitiesSelector = function() {
                    if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user) return null;
                    if (this.state.isCommunityReason) {
                        var e = this.props.data.user.directories.nodes.filter(function(e) {
                                return "COMMUNITY" === e.directoryType
                            }),
                            t = e.map(function(e) {
                                return a.createElement("option", {
                                    key: e.id,
                                    value: e.id,
                                    name: e.name
                                }, e.displayName)
                            });
                        return a.createElement(d.U, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d.M, {
                            id: "reporting__select-community",
                            label: Object(s.d)("Community", "ReportUser")
                        }, a.createElement(d._14, {
                            id: "reporting__select-community",
                            "data-test-selector": "reporting.select-community",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.selectCommunity
                        }, t)))
                    }
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case g.FormError:
                            e = Object(s.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case g.MutationError:
                            e = Object(s.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case g.Success:
                            e = Object(s.d)("Thank you for your report.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = r({
                        "reporting__error-container": this.props.submitStatus !== g.Success,
                        "reporting__success-container": this.props.submitStatus === g.Success
                    });
                    return a.createElement(d._17, {
                        className: t,
                        fullWidth: this.props.submitStatus !== g.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component),
            y = Object(o.compose)(Object(l.a)(h, {
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
    922: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = i.referenceTracking,
                                    o = a.content,
                                    s = a.medium,
                                    u = a.content_index;
                                l.n.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: u,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return r.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return o.createElement(t, r.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                r = a.stringify(t);
                            r.length > 0 && (i = "?" + r), this.props.history.replace({
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
        var r = n(0),
            a = n(21),
            o = n(1),
            s = n(12),
            l = n(2);
        n.d(t, "a", function() {
            return i
        })
    },
    923: function(e, t, n) {
        "use strict";

        function i(e) {
            return "subscribe-button-modal-tab-" + e
        }
        var r, a = n(0),
            o = n(1),
            s = n(2),
            l = n(936),
            u = n(136),
            c = n(271),
            d = n(6),
            p = n(935),
            m = n(410),
            f = n(952),
            h = n(937),
            g = n(269),
            b = n(3),
            v = (n(973), "gift-subscription-button"),
            y = "subscribe-button";
        ! function(e) {
            e[e.Prime = 0] = "Prime", e[e.Tier1 = 1] = "Tier1", e[e.Tier2 = 2] = "Tier2", e[e.Tier3 = 3] = "Tier3"
        }(r || (r = {}));
        var S = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleActiveTab = function(e) {
                        if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-a-target")) {
                            case "subscribe-button-modal-tab-" + r.Prime:
                                n.setState({
                                    activeTab: r.Prime,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(r.Prime);
                                break;
                            case "subscribe-button-modal-tab-" + r.Tier1:
                                n.setState({
                                    activeTab: r.Tier1,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(r.Tier1);
                                break;
                            case "subscribe-button-modal-tab-" + r.Tier2:
                                n.setState({
                                    activeTab: r.Tier2,
                                    currentPurchasePrice: n.messages.tier2Price
                                }), n.props.onSelectTierTab(r.Tier2);
                                break;
                            case "subscribe-button-modal-tab-" + r.Tier3:
                                n.setState({
                                    activeTab: r.Tier3,
                                    currentPurchasePrice: n.messages.tier3Price
                                }), n.props.onSelectTierTab(r.Tier3);
                                break;
                            default:
                                n.setState({
                                    activeTab: r.Prime,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(r.Prime)
                        }
                    }, n.getTabTitle = function() {
                        switch (n.state.activeTab) {
                            case r.Prime:
                                return n.messages.freeSubWithPrime;
                            case r.Tier1:
                                return n.messages.tier1Sub;
                            case r.Tier2:
                                return n.messages.tier2Sub;
                            case r.Tier3:
                                return n.messages.tier3Sub;
                            default:
                                return n.messages.tier1Sub
                        }
                    }, n.getTierSubscribeButton = function() {
                        var e = n.props.subscriptionProducts[n.state.activeTab - 1];
                        return n.props.isGift ? n.props.giftRecipient ? o.createElement(b.u, {
                            ariaLabel: n.messages.giftSubscription + " " + n.state.currentPurchasePrice,
                            "data-test-selector": v,
                            onClick: n.reportGiftCheckoutAction,
                            targetBlank: !0,
                            purchase: n.state.currentPurchasePrice,
                            linkTo: Object(u.a)(e.url, {
                                recipient: n.props.giftRecipient
                            })
                        }, n.messages.giftSubscription) : o.createElement(b.u, {
                            ariaLabel: n.messages.giftSubscription + " " + n.state.currentPurchasePrice,
                            "data-test-selector": v,
                            onClick: n.onGiftSelect,
                            purchase: n.state.currentPurchasePrice
                        }, n.messages.giftSubscription) : n.state.subbedTier === n.state.activeTab && n.state.activeTab === r.Prime ? o.createElement(f.a, {
                            authToken: n.props.authToken,
                            "data-a-target": "subscribe-with-prime-button",
                            isSubscribed: n.props.isSubscribed,
                            isSubscribedWithPrime: n.props.subbedTier === p.a,
                            onSubscribedWithPrime: n.onSubscribedWithPrime,
                            reportSubMenuAction: n.props.reportSubMenuAction,
                            subLogin: n.props.subLogin,
                            userHasPrime: n.props.userHasPrime,
                            canPrimeSubscribe: n.props.canPrimeSubscribe
                        }) : o.createElement(m.a, {
                            isSubbedToTier: n.state.subbedTier === n.state.activeTab,
                            tierPrice: n.state.currentPurchasePrice,
                            reportSubAction: n.props.reportSubMenuAction,
                            url: e.url,
                            "data-a-target": "subscribe-now-button",
                            "data-test-selector": y
                        })
                    }, n.onSubscribedWithPrime = function() {
                        n.props.onSubscribedWithPrime && n.props.onSubscribedWithPrime()
                    }, n.reportGiftCheckoutAction = function() {
                        n.props.reportSubMenuAction({
                            action: g.a.BuyGiftSub,
                            checkoutButtonTier: n.state.currentPurchasePrice,
                            giftRecipient: n.props.giftRecipient ? n.props.giftRecipient : null
                        })
                    }, n.onGiftSelect = function() {
                        n.props.reportSubMenuAction({
                            action: g.a.GiftASub,
                            checkoutButtonTier: n.state.currentPurchasePrice
                        }), n.props.onGiftSelect && n.props.onGiftSelect()
                    }, n.mapSubbedTierToTabs = function(e) {
                        e.subbedTier === l.a.Prime ? (n.setState({
                            activeTab: r.Prime,
                            subbedTier: r.Prime
                        }), e.onSelectTierTab(r.Prime)) : e.subbedTier === l.a.Tier1 ? (n.setState({
                            activeTab: r.Tier1,
                            subbedTier: r.Tier1
                        }), e.onSelectTierTab(r.Tier1)) : e.subbedTier === l.a.Tier2 ? (n.setState({
                            activeTab: r.Tier2,
                            subbedTier: r.Tier2
                        }), e.onSelectTierTab(r.Tier2)) : e.subbedTier === l.a.Tier3 ? (n.setState({
                            activeTab: r.Tier3,
                            subbedTier: r.Tier3
                        }), e.onSelectTierTab(r.Tier3)) : e.isGift ? e.onSelectTierTab(n.state.activeTab) : e.onSelectTierTab(r.Prime)
                    }, n.getExtraEmotes = function(e) {
                        return (e === r.Tier2 ? Object(c.b)(n.props.subscriptionProducts[1].emotes) : Object(c.b)(n.props.subscriptionProducts[2].emotes.concat(n.props.subscriptionProducts[1].emotes))).map(function(e) {
                            return o.createElement(b.U, {
                                display: b.H.InlineFlex,
                                margin: {
                                    right: .5
                                },
                                key: e.id
                            }, o.createElement("img", {
                                srcSet: "https://static-cdn.jtvnw.net/emoticons/v1/" + e.srcSet
                            }))
                        })
                    }, n.state = {
                        activeTab: r.Tier1,
                        currentPurchasePrice: n.props.subscriptionProducts[0].price,
                        subbedTier: null
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages(this.props), this.mapSubbedTierToTabs(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setMessages(e)
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    this.state.subbedTier && (e = o.createElement(b.U, {
                        display: b.H.InlineFlex,
                        margin: {
                            right: .5
                        },
                        className: "subscription-balloon-options__subbed-star"
                    }, o.createElement(b._8, {
                        asset: b._9.Star
                    })));
                    var t = o.createElement(b._21, null),
                        n = null,
                        a = null,
                        u = null,
                        c = o.createElement(b.U, {
                            display: b.H.InlineFlex
                        }, this.state.subbedTier === r.Tier3 && e, o.createElement(b._18, {
                            active: this.state.activeTab === r.Tier3,
                            "data-a-target": i(r.Tier3),
                            onClick: this.toggleActiveTab
                        }, this.messages.tier3TabName));
                    this.hasDiscount(this.props) && this.state.activeTab !== r.Prime && (t = o.createElement(b.U, null, o.createElement(b._21, {
                        className: "tw-subscription-modal__old-price"
                    }, o.createElement("s", null, Object(h.a)(this.props.subscriptionProducts[this.state.activeTab - 1].self.oldPrice), " / Month")), o.createElement(b._21, {
                        className: "tw-subscription-modal__new-price",
                        type: b._26.H5,
                        bold: !0
                    }, Object(h.a)(this.props.subscriptionProducts[this.state.activeTab - 1].self.newPrice), " for the first month (Save 50%)"))), this.props.subbedTier !== l.a.Prime || this.props.isGift || (n = o.createElement(b.U, {
                        display: b.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, o.createElement(b.U, {
                        display: b.H.InlineFlex,
                        margin: {
                            right: 1
                        },
                        className: "subscription-balloon-options__prime-crown"
                    }, o.createElement(b._8, {
                        asset: b._9.Crown
                    })), o.createElement(b._18, {
                        active: this.state.activeTab === r.Prime,
                        "data-a-target": i(r.Prime),
                        onClick: this.toggleActiveTab
                    }, this.messages.prime))), this.props.subbedTier && this.props.subbedTier !== l.a.Tier1 || (a = o.createElement(b.U, {
                        display: b.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === r.Tier1 && e, o.createElement(b._18, {
                        active: this.state.activeTab === r.Tier1,
                        "data-a-target": i(r.Tier1),
                        onClick: this.toggleActiveTab
                    }, this.messages.tier1TabName))), this.props.subbedTier && this.props.subbedTier !== l.a.Prime && this.props.subbedTier !== l.a.Tier1 && this.props.subbedTier !== l.a.Tier2 || (u = o.createElement(b.U, {
                        display: b.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === r.Tier2 && e, o.createElement(b._18, {
                        active: this.state.activeTab === r.Tier2,
                        "data-a-target": i(r.Tier2),
                        onClick: this.toggleActiveTab
                    }, this.messages.tier2TabName)));
                    var d = null;
                    return (this.messages.tier2EmoteCount > 0 && this.state.activeTab === r.Tier2 || this.messages.tier3EmoteCount > 0 && this.state.activeTab === r.Tier3) && (d = o.createElement(b.U, {
                        display: b.H.InlineFlex,
                        alignItems: b.c.Center
                    }, this.getExtraEmotes(this.state.activeTab), o.createElement(b._21, {
                        bold: !0
                    }, Object(s.d)("Plus {extraEmoteCount, number} extra channel emote(s)", {
                        extraEmoteCount: this.state.activeTab === r.Tier2 ? this.messages.tier2EmoteCount : this.messages.tier3EmoteCount
                    }, "SubTierTabs")))), o.createElement(b.U, {
                        className: "channel-header__subscription-balloon-options"
                    }, o.createElement(b.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b._19, null, n, a, u, c)), o.createElement(b.U, null, o.createElement(b.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b._21, {
                        type: b._26.H5,
                        bold: !0
                    }, this.getTabTitle())), o.createElement(b.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b._21, null, this.messages.subTierBenefits)), d, t, o.createElement(b.U, {
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, this.getTierSubscribeButton())))
                }, t.prototype.setMessages = function(e) {
                    var t = e.subscriptionProducts[1].emotes.length,
                        n = t + e.subscriptionProducts[2].emotes.length;
                    this.messages = {
                        tier2EmoteCount: t,
                        tier3EmoteCount: n,
                        prime: Object(s.d)("Prime", "SubTierTabs"),
                        subscribed: Object(s.d)("Subscribed", "SubTierTabs"),
                        subTierBenefits: Object(s.d)("Includes {availableEmoteCount, number} emoticon(s), subscriber badge, customizable messages upon subscribing, and ad-free viewing", {
                            availableEmoteCount: e.subscriptionProducts[0].emotes.length
                        }, "SubTierTabs"),
                        tier1Price: e.subscriptionProducts[0].price,
                        tier2Price: e.subscriptionProducts[1].price,
                        tier3Price: e.subscriptionProducts[2].price,
                        tier1TabName: e.subscriptionProducts[0].price,
                        tier2TabName: e.subscriptionProducts[1].price,
                        tier3TabName: e.subscriptionProducts[2].price,
                        subscribeNow: Object(s.d)("Subscribe Now", "SubTierTabs"),
                        freeSubWithPrime: Object(s.d)("Free Channel Sub with Twitch Prime", "SubTierTabs"),
                        giftSubscription: Object(s.d)("Gift A Subscription", "SubTierTabs"),
                        tier1Sub: e.subscriptionProducts[0].displayName,
                        tier2Sub: e.subscriptionProducts[1].displayName,
                        tier3Sub: e.subscriptionProducts[2].displayName
                    }, this.hasDiscount(e) && (this.messages.tier1Price = Object(h.a)(e.subscriptionProducts[0].self.newPrice), this.messages.tier2Price = Object(h.a)(e.subscriptionProducts[1].self.newPrice), this.messages.tier3Price = Object(h.a)(e.subscriptionProducts[2].self.newPrice))
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return void 0 !== e.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function(e) {
                    return !!this.isSubscriptionDiscountReady(e) && Object(h.b)(e.subscriptionProducts)
                }, t = a.__decorate([Object(d.c)("SubTierTabs")], t)
            }(o.Component),
            k = S;
        n.d(t, !1, function() {
            return v
        }), n.d(t, !1, function() {
            return y
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, !1, function() {
            return i
        }), n.d(t, "a", function() {
            return k
        })
    },
    926: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e) {
                var t = e.map(function(e) {
                    return e.id
                });
                return o().filter(function(e) {
                    return t.includes(e.canonical)
                })
            }
            return o()
        }
        var r = function(e, t) {
                return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e)).replace(/{description}/, t)
            },
            a = n(2),
            o = function() {
                return [{
                    localized: Object(a.d)("Site Suspension Evasion", "ReportUserModal"),
                    canonical: "tos_ban_evasion"
                }, {
                    localized: Object(a.d)("Chat Ban Evasion", "ReportUserModal"),
                    canonical: "chat_ban_evasion"
                }, {
                    localized: Object(a.d)("Self-Harm", "ReportUserModal"),
                    canonical: "selfharm"
                }, {
                    localized: Object(a.d)("Attempts or Threats to Harm", "ReportUserModal"),
                    canonical: "harm"
                }, {
                    localized: Object(a.d)("Harassment", "ReportUserModal"),
                    canonical: "harassment"
                }, {
                    localized: Object(a.d)("Hate Speech", "ReportUserModal"),
                    canonical: "hate_speech"
                }, {
                    localized: Object(a.d)("Offensive Username", "ReportUserModal"),
                    canonical: "offensive_username"
                }, {
                    localized: Object(a.d)("Impersonation", "ReportUserModal"),
                    canonical: "impersonation"
                }, {
                    localized: Object(a.d)("Spam, Scams, or Other Malicious Content", "ReportUserModal"),
                    canonical: "spam"
                }, {
                    localized: Object(a.d)("Porn or Other Sexually Explicit Content", "ReportUserModal"),
                    canonical: "porn"
                }, {
                    localized: Object(a.d)("Nudity or Sexual Behavior/Attire", "ReportUserModal"),
                    canonical: "nudity"
                }, {
                    localized: Object(a.d)("Extreme Violence, Gore, or Other Obscene Content", "ReportUserModal"),
                    canonical: "gore"
                }, {
                    localized: Object(a.d)("Underaged User", "ReportUserModal"),
                    canonical: "underaged"
                }, {
                    localized: Object(a.d)("Cheating in Online Game", "ReportUserModal"),
                    canonical: "cheating"
                }, {
                    localized: Object(a.d)("Prohibited Game", "ReportUserModal"),
                    canonical: "prohibited"
                }, {
                    localized: Object(a.d)("Miscategorized Content or Other Category Violation", "ReportUserModal"),
                    canonical: "miscategorized"
                }, {
                    localized: Object(a.d)("Community Rules Violation", "ReportUserModal"),
                    canonical: "community_rules_violation"
                }, {
                    localized: Object(a.d)("Community is Violating Terms of Service", "ReportUserModal"),
                    canonical: "community_tos_violation"
                }, {
                    localized: Object(a.d)("Bits Acceptable Use Policy Violation", "ReportUserModal"),
                    canonical: "bits_violation"
                }, {
                    localized: Object(a.d)("Other Terms of Service Violation", "ReportUserModal"),
                    canonical: "other"
                }]
            };
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return i
        })
    },
    927: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                sessionUser: e.session.user
            }
        }
        n.d(t, "a", function() {
            return S
        });
        var r = n(0),
            a = n(1),
            o = (n.n(a), n(8)),
            s = n(11),
            l = n(2),
            u = n(9),
            c = n(23),
            d = n(14),
            p = n(6),
            m = n(921),
            f = n(919),
            h = n(926),
            g = n(921),
            b = n(947),
            v = (n.n(b), n(948)),
            y = (n.n(v), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        submitStatus: g.b.Unsubmitted
                    }, t.handleSubmit = function(e, n, i, a) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, o, t, s;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (e !== m.a) return [3, 5];
                                        t = {
                                            userID: this.props.reportContext.targetUserID,
                                            communityID: i || "",
                                            reason: n
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(c.a)(t))];
                                    case 2:
                                        return r.sent(), l.n.tracking.track(d.SpadeEventType.CommunityModeration, {
                                            community_id: i,
                                            name: a,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: g.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return o = r.sent(), l.i.error(o, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: g.b.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        t = {
                                            description: n,
                                            reason: e,
                                            content: this.props.reportContext.contentType,
                                            contentID: this.props.reportContext.contentID,
                                            extra: this.props.reportContext.extra,
                                            targetID: this.props.reportContext.targetUserID
                                        }, this.props.reportContext.contentType === f.a.Community && this.props.reportContext.extra && (t.description = Object(h.a)(this.props.reportContext.extra, n)), r.label = 6;
                                    case 6:
                                        return r.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(c.a)(t))];
                                    case 7:
                                        return r.sent(), this.props.reportContext.contentType === f.a.Community && l.n.tracking.track(d.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: g.b.Success
                                        }), [3, 9];
                                    case 8:
                                        return s = r.sent(), l.i.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: g.b.MutationError
                                        }), [3, 9];
                                    case 9:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleChildError = function(e) {
                        return t.setState({
                            submitStatus: e
                        })
                    }, t.handleClose = function() {
                        t.props.onClose && t.props.onClose(t.state.submitStatus)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose()
                }, t.prototype.render = function() {
                    return a.createElement(g.c, {
                        onClose: this.handleClose,
                        onError: this.handleChildError,
                        onSubmit: this.handleSubmit,
                        reportContentType: this.props.reportContext.contentType,
                        submitStatus: this.state.submitStatus,
                        targetUserID: this.props.reportContext.targetUserID,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    })
                }, t
            }(a.Component)),
            S = Object(s.compose)(Object(u.a)(b, {
                name: "reportUserInCommunity"
            }), Object(u.a)(v, {
                name: "reportUser"
            }), Object(p.c)("ReportUser"), Object(o.a)(i, null))(y)
    },
    928: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(l.bindActionCreators)({
                closeModal: c.c
            }, e)
        }
        var r = n(927),
            a = n(0),
            o = n(1),
            s = n(8),
            l = n(11),
            u = n(134),
            c = n(50),
            d = n(6),
            p = n(3),
            m = (n(953), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function(e) {
                        t.props.closeModal(), t.props.onClose && t.props.onClose(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(p._17, {
                        className: "reporting-modal__container",
                        background: p.m.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, o.createElement(r.a, {
                        onClose: this.handleClose,
                        reportContext: this.props.reportContext,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    }), o.createElement(u.a, null))
                }, t
            }(o.Component)),
            f = Object(l.compose)(Object(d.c)("ReportUserModal"), Object(s.a)(null, i))(m);
        n.d(t, !1, function() {}), n.d(t, !1, function() {
            return r.a
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return f
        })
    },
    931: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
        }(i || (i = {}))
    },
    934: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                authToken: Object(s.a)(e)
            }
        }
        var r = n(0),
            a = n(1),
            o = n(8),
            s = n(19),
            l = n(6),
            u = n(935),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(u.b, {
                        authToken: this.props.authToken,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        channelLogin: this.props.channelLogin,
                        updateContainerWidth: this.props.updateContainerWidth,
                        reportInteractive: this.reportInteractive
                    })
                }, t = r.__decorate([Object(l.c)("SubscribeButton")], t)
            }(a.Component),
            d = Object(o.a)(i)(c);
        n.d(t, !1, function() {
            return c
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return u.a
        }), n.d(t, !1, function() {
            return u.b
        })
    },
    935: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = new Map;
            return t.set(F.b.Prime, null), e.forEach(function(e, n) {
                t.set(n + 1, e)
            }), t
        }
        var r, a = n(0),
            o = n(1),
            s = n(2),
            l = n(64),
            u = n(9),
            c = n(109),
            d = n(936),
            p = n(142),
            m = n(23),
            f = n(36),
            h = n(20),
            g = n(6),
            b = n(65),
            v = n(89),
            y = n(139),
            S = n(409),
            k = n(30),
            _ = n(52),
            E = n(136),
            T = n(957),
            C = n(269),
            P = n(3),
            w = (n(972), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedUser: null
                    }, t.messages = {
                        noResults: Object(s.d)("No Results", "GiftRecipientSearchResult"),
                        buyGift: Object(s.d)("Buy Gift Subscription", "GiftRecipientSearchResult"),
                        searchHint: Object(s.d)("Start typing to see a list of suggestions here.", "GiftRecipientSearchResult")
                    }, t.reportGiftCheckoutAction = function() {
                        t.props.reportSubMenuAction({
                            action: C.a.BuyGiftSub,
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (e.isWaiting || e.isErrored || !e.hasInput) && this.setState({
                        selectedUser: null
                    })
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? o.createElement(P.U, {
                        fullHeight: !0
                    }, o.createElement(P.X, {
                        fillContent: !0
                    })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : o.createElement(P.U, {
                        margin: 1
                    }, o.createElement(P._21, {
                        color: P.F.Alt2
                    }, this.messages.searchHint)), o.createElement("div", {
                        onKeyDown: this.props.onKeyDown
                    }, o.createElement(P._17, {
                        className: "gift-recipient-search-result-view",
                        background: P.m.Alt,
                        position: P._2.Relative,
                        overflow: P.Y.Hidden,
                        display: P.H.Block,
                        margin: {
                            bottom: 2
                        },
                        borderLeft: !0,
                        borderBottom: !0,
                        borderRight: !0
                    }, o.createElement(P.P, {
                        overflow: P.Y.Hidden,
                        position: P._2.Relative
                    }, o.createElement(k.b, {
                        suppressScrollX: !0
                    }, o.createElement(P.U, null, e, o.createElement(k.a, {
                        enabled: !this.props.isWaiting && this.props.hasInput,
                        loadMore: this.props.loadMore
                    }))))), this.getBuyGiftButton())
                }, t.prototype.getBuyGiftButton = function() {
                    var e = Object(E.a)(this.props.selectedProductURL, {
                            recipient: this.state.selectedUser ? this.state.selectedUser.login : ""
                        }),
                        t = o.createElement(T.a, {
                            subProductId: this.props.selectedProductId,
                            giftRecipient: this.state.selectedUser ? this.state.selectedUser.login : null,
                            onClick: this.reportGiftCheckoutAction,
                            checkoutURL: e
                        }),
                        n = null;
                    if (this.state.selectedUser) {
                        var i = Object(_.a)(this.state.selectedUser.login || "", this.state.selectedUser.name || "");
                        n = o.createElement(P.P, {
                            margin: {
                                x: 1
                            }
                        }, o.createElement(P._21, null, Object(s.d)("for {displayName}", {
                            displayName: o.createElement(P._21, {
                                bold: !0,
                                type: P._26.Span
                            }, i)
                        }, "GiftRecipientSearchResult")))
                    }
                    return o.createElement(P.U, {
                        display: P.H.Flex,
                        alignItems: P.c.Center,
                        fullWidth: !0
                    }, t, n)
                }, t.prototype.getErrorMessage = function() {
                    return o.createElement(P.U, {
                        fullWidth: !0,
                        textAlign: P._22.Center,
                        justifyContent: P.T.Center
                    }, o.createElement(P._21, null, Object(s.d)("Something went wrong", "GiftRecipientSearchResult")))
                }, t.prototype.getUserResultContent = function() {
                    var e = this;
                    return this.props.userResults ? this.props.userResults.results.map(function(t) {
                        var n = Object(_.a)(t.login || "", t.name || "");
                        return o.createElement(P.S, {
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "git-recipient-result__" + t.id,
                            "data-user_id": t.id,
                            "data-user_login": t.login,
                            "data-user_name": t.name,
                            onClick: e.onUserClick,
                            "data-test-selector": "subscribe-button__gift_search_result"
                        }, o.createElement(P.U, {
                            padding: .5
                        }, o.createElement(P.A, {
                            row: !0
                        }, o.createElement(P.C, {
                            imageAlt: t.thumbnailAltText,
                            imageSrc: t.thumbnail ? t.thumbnail : "",
                            size: P.D.Size4,
                            aspect: P.k.Aspect1x1
                        }), o.createElement(P.B, null, o.createElement(P.P, {
                            padding: {
                                x: 1
                            }
                        }, o.createElement(P._21, {
                            type: P._26.H5,
                            ellipsis: !0
                        }, n))))))
                    }) : o.createElement(P._1, null)
                }, t.prototype.getNoResultsMessage = function() {
                    return o.createElement(P.U, {
                        margin: 1
                    }, o.createElement(P._21, {
                        color: P.F.Alt2
                    }, this.messages.noResults))
                }, t = a.__decorate([Object(g.c)("GiftRecipientSearchResultPanel")], t)
            }(o.Component)),
            N = w,
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.selectedSubProduct ? (this.formatMessages(), o.createElement(P.U, {
                        padding: 2
                    }, o.createElement(P.U, null, o.createElement(P.U, {
                        display: P.H.Flex,
                        justifyContent: P.T.Between,
                        alignItems: P.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.giftSubscription), o.createElement(P.u, {
                        type: P.z.Text,
                        "data-a-target": "subscribe-back-button",
                        icon: P._9.AngleLeft,
                        onClick: this.props.onBack
                    }, o.createElement(P.U, {
                        alignItems: P.c.Center,
                        display: P.H.InlineFlex
                    }, o.createElement(P._21, null, this.messages.back)))), o.createElement(P.U, null, o.createElement(P._21, null, this.messages.giftSingleMonth), o.createElement(P.U, {
                        display: P.H.Flex,
                        justifyContent: P.T.Center,
                        fullWidth: !0
                    }, o.createElement(P.P, {
                        fullWidth: !0
                    }, o.createElement("div", null, o.createElement(P._11, {
                        onChange: this.handleChange,
                        onKeyDown: this.props.onKeyDown,
                        id: "gift-recipient-search",
                        placeholder: this.messages.searchPlaceholder
                    }), o.createElement(N, {
                        hasInput: this.props.hasInput,
                        userResults: this.props.userResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown,
                        selectedProductId: this.props.selectedSubProduct.id,
                        selectedProductURL: this.props.selectedSubProduct.url,
                        selectedProductPrice: this.props.selectedSubProduct.price,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })))))))) : o.createElement(P._1, null)
                }, t.prototype.formatMessages = function() {
                    this.messages = {
                        giftSubscription: Object(s.d)("Choose a Gift Recipient", "GiftRecipientSearch"),
                        giftSingleMonth: Object(s.d)("{subDisplayName}: {giftPrice} Gift Subscription (Single Month)", {
                            subDisplayName: this.props.selectedSubProduct ? this.props.selectedSubProduct.displayName : "",
                            giftPrice: this.props.selectedSubProduct ? this.props.selectedSubProduct.price : ""
                        }, "GiftRecipientSearch"),
                        back: Object(s.d)("Back", "GiftRecipientSearch"),
                        searchPlaceholder: Object(s.d)("Search for a Twitch ID", "GiftRecipientSearch")
                    }
                }, t
            }(o.Component),
            I = 50,
            U = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return void t.setState(t.getEmptyState());
                        t.setState({
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, I)
                    }, t.loadMore = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(v.a.Users, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = r.sent(), [3, 4];
                                    case 3:
                                        return n = r.sent(), this.setState(a.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2];
                                    case 4:
                                        return t ? (i = Object(S.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentUserResults: this.state.currentUserResults
                                        }), this.setState({
                                            currentUserResults: i.currentUserResults,
                                            term: this.state.term,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: i.exhaustedHits
                                        }), [2]) : (this.setState(a.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === b.a.Esc ? t.setState({
                            hasInput: !1
                        }) : e.keyCode === b.a.Up ? t.focusNext(-1) : e.keyCode === b.a.Down && t.focusNext(1))
                    }, t.state = t.getEmptyState(), t.searchClient = new y.a(s.a.algoliaApplicationID, s.a.algoliaAPIKey), t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(O, {
                        onChange: this.onChange,
                        loadMore: this.loadMore,
                        onKeyDown: this.onKeyDown,
                        userResults: this.state.currentUserResults,
                        hasInput: this.state.hasInput,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onBack: this.props.onBack,
                        selectedSubProduct: this.props.selectedSubProduct,
                        reportSubMenuAction: this.props.reportSubMenuAction
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
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, r, o, s;
                        return a.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = h.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(v.a.Users, e, n)];
                                case 2:
                                    return r = l.sent(), [3, 4];
                                case 3:
                                    return o = l.sent(), this.setState(a.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return r ? this.state.queryID !== r.id ? [2] : (s = Object(S.b)({
                                        searchResults: r,
                                        append: !1
                                    }), this.setState(function(n) {
                                        return a.__assign({}, n, s, {
                                            queryID: "",
                                            term: e,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(a.__assign({}, this.getEmptyState(), {
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
                    if (t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e, t < 0 && (t = 0), !(t >= n.length)) {
                        var a = n.item(t);
                        a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: a
                        })
                    }
                }, t = a.__decorate([Object(g.c)("GiftRecipientSearch")], t)
            }(o.Component),
            R = U,
            D = n(940),
            F = n(923),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages()
                }, t.prototype.render = function() {
                    return o.createElement(P.U, {
                        padding: 2
                    }, o.createElement(P.U, null, o.createElement(P.U, {
                        display: P.H.Flex,
                        justifyContent: P.T.Between,
                        alignItems: P.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.allSubscriptions), o.createElement(P.u, {
                        type: P.z.Text,
                        "data-a-target": "subscribe-back-button",
                        "data-test-selector": "subscribe-button__back-button",
                        icon: P._9.AngleLeft,
                        onClick: this.props.onBack
                    }, o.createElement(P.U, {
                        alignItems: P.c.Center,
                        display: P.H.InlineFlex
                    }, o.createElement(P._21, null, this.messages.back)))), o.createElement(F.a, {
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.props.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        userHasPrime: !1,
                        canPrimeSubscribe: !1,
                        isSubscribed: this.props.isSubscribed
                    })))
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        back: Object(s.d)("Back", "PaidSubOptions"),
                        allSubscriptions: Object(s.d)("All Paid Subscriptions", "PaidSubOptions")
                    }
                }, t
            }(o.Component),
            j = x,
            L = n(934),
            A = n(952);
        ! function(e) {
            e[e.Top = 0] = "Top", e[e.SubOptions = 1] = "SubOptions", e[e.GiftOptions = 2] = "GiftOptions", e[e.RecipientSelect = 3] = "RecipientSelect"
        }(r || (r = {}));
        var M = n(937),
            V = n(974),
            G = (n(975), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleTopPageSubButtonClick = function() {
                        n.props.reportSubMenuAction({
                            action: C.a.ClickCheckout,
                            checkoutButtonTier: n.messages.tier1Price
                        })
                    }, n.showGiftOptions = function() {
                        n.props.reportSubMenuAction({
                            action: C.a.ClickGiftSubOptions,
                            modalLevel: "second_page"
                        }), n.setState(function() {
                            return {
                                currentPage: r.GiftOptions
                            }
                        })
                    }, n.showSubOptions = function() {
                        n.props.reportSubMenuAction({
                            action: C.a.ClickMoreSubOptions,
                            modalLevel: "second_page"
                        }), n.setState(function() {
                            return {
                                currentPage: r.SubOptions
                            }
                        })
                    }, n.showRecipientSelect = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.RecipientSelect
                            }
                        })
                    }, n.showTop = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.Top
                            }
                        })
                    }, n.goToPreviousPage = function() {
                        return n.props.reportSubMenuAction({
                            action: C.a.ClickBack,
                            modalLevel: n.state.currentPage === r.SubOptions || n.state.currentPage === r.GiftOptions ? "top_page" : "second_page"
                        }), n.state.currentPage === r.SubOptions || n.state.currentPage === r.GiftOptions ? void n.showTop() : n.state.currentPage === r.RecipientSelect ? void n.showGiftOptions() : void 0
                    }, n.onSelectTierTab = function(e) {
                        var t = n.tabToSubProduct.get(e);
                        if (t) {
                            var i = n.props.subscriptionProducts.findIndex(function(e) {
                                return e.price === t.price
                            });
                            i !== n.state.selectedSubProductIndex && n.setState({
                                selectedSubProductIndex: i
                            }), n.props.onSelectTierTab(t.price)
                        } else n.props.onSelectTierTab(L.a)
                    }, n.state = {
                        currentPage: r.Top,
                        selectedSubProductIndex: 0,
                        giftingEnabled: !1
                    }, n.tabToSubProduct = i(t.subscriptionProducts), n
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!this.isSubscriptionDiscountReady(e) && this.isDiscountDataReady(e)) {
                        if (e.data.error) return;
                        var t = Object.assign({}, e.data.user.subscriptionProducts);
                        this.props.setPromotionData(t)
                    }
                }, t.prototype.render = function() {
                    return this.setMessages(), this.state.currentPage === r.Top ? this.getTopPage() : this.state.currentPage === r.SubOptions ? this.getPaidOptionsPage() : this.state.currentPage === r.GiftOptions ? this.getGiftOptionsPage() : this.state.currentPage === r.RecipientSelect ? this.getGiftRecipientSearchPage() : this.getTopPage()
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, s.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        giftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getPaidOptionsPage = function() {
                    return o.createElement(j, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        isSubscribed: !1,
                        hasDiscount: this.hasDiscount(this.props)
                    })
                }, t.prototype.getGiftOptionsPage = function() {
                    return o.createElement(P.U, {
                        padding: 2
                    }, o.createElement(D.a, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onGiftSelect: this.showRecipientSelect
                    }))
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return o.createElement(R, {
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getTopPage = function() {
                    var e = null,
                        t = null,
                        n = null,
                        i = o.createElement(P._21, null, this.messages.tier1PricePerMonth),
                        r = this.messages.tier1Price;
                    return this.hasDiscount(this.props) && (i = o.createElement(P.U, null, o.createElement(P._21, {
                        className: "tw-subscription-modal__old-price"
                    }, o.createElement("s", null, this.messages.tier1PricePerMonth)), o.createElement(P._21, {
                        className: "tw-subscription-modal__new-price",
                        type: P._26.H5,
                        bold: !0
                    }, this.messages.discountMessage, " ")), r = Object(M.a)(this.props.subscriptionProducts[0].self.newPrice)), (this.props.inPrimeRegion || this.props.userHasPrime) && (n = this.renderPrimeSection()), this.props.isNonStandardSub || (e = o.createElement(P.U, {
                        margin: {
                            right: 1
                        },
                        display: P.H.Inline
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.seeMoreSubOptions,
                        onClick: this.showSubOptions,
                        type: P.z.Hollow,
                        "data-test-selector": "subscribe-button__more-sub-options-button",
                        "data-a-target": "see-more-sub-options-button"
                    }, this.messages.seeMoreSubOptions))), this.state.giftingEnabled && (t = o.createElement(P.U, {
                        display: P.H.Inline
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.giftSubscription,
                        onClick: this.showGiftOptions,
                        type: P.z.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, this.messages.giftSubscription))), o.createElement(P.U, {
                        padding: 2
                    }, n, o.createElement(P.U, null, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.paidSubscription), i, o.createElement(P.U, {
                        display: P.H.Flex
                    }, o.createElement(P.U, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.subscribeTier1,
                        "data-a-target": "tier1-subscribe-button",
                        "data-test-selector": "subscribe-button__top-page-sub-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.handleTopPageSubButtonClick,
                        purchase: r,
                        targetBlank: !0
                    }, this.messages.subscribe)))), o.createElement(P.U, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, e, t))
                }, t.prototype.renderPrimeSection = function() {
                    var e = this.props.userHasPrime ? this.messages.useFreeChannelSub : this.messages.primeUpsell;
                    return o.createElement(P.U, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(P.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.freeSubWithPrime)), o.createElement(P.U, null, o.createElement(P.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(P._21, null, e)), o.createElement(A.a, {
                        authToken: this.props.authToken,
                        "data-a-target": "subscribe-with-prime-button",
                        isSubscribed: !1,
                        isSubscribedWithPrime: !1,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subLogin: this.props.subLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe
                    })))
                }, t.prototype.setMessages = function() {
                    var e = this.props.subscriptionProducts[0].price;
                    this.hasDiscount(this.props) && this.props.subscriptionProducts[0].self.isEligibleForDiscount && (e = Object(M.a)(this.props.subscriptionProducts[0].self.newPrice)), this.messages = {
                        useFreeChannelSub: Object(s.d)("Use your free channel subscription to directly support your favorite streamer. {upsellTextLink}", {
                            upsellTextLink: o.createElement("a", {
                                href: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                                target: "_blank"
                            }, Object(s.d)("Learn more about your free sub", "BalloonNonSubbedUser"))
                        }, "BalloonNonSubbedUser"),
                        primeUpsell: Object(s.d)("{upsellTextBold}, plus get free game loot every month, ad-free viewing, and loads more with Twitch Prime.", {
                            upsellTextBold: o.createElement("strong", null, Object(s.d)("Support your favorite streamer", "BalloonNonSubbedUser"))
                        }, "BalloonNonSubbedUser"),
                        freeSubWithPrime: Object(s.d)("Free Channel Sub with Twitch Prime", "BalloonNonSubbedUser"),
                        changeSubscription: Object(s.d)("Change Your Subscription", "BalloonNonSubbedUser"),
                        seeMoreSubOptions: Object(s.d)("More Paid Subscription Options", "BalloonNonSubbedUser"),
                        tier1Price: Object(s.d)("{tier1Price}", {
                            tier1Price: e
                        }, "BalloonNonSubbedUser"),
                        paidSubscription: Object(s.d)("Paid Subscription", "BalloonNonSubbedUser"),
                        tier1PricePerMonth: Object(s.d)("{price} / Month", {
                            price: this.props.subscriptionProducts[0].price
                        }, "BalloonNonSubbedUser"),
                        subscribeTier1: Object(s.d)("Subscribe {tier1Price}", {
                            tier1Price: e
                        }, "BalloonNonSubbedUser"),
                        subscribeToUser: Object(s.d)("Subscribe to {username}", {
                            username: this.props.channelDisplayName
                        }, "BalloonNonSubbedUser"),
                        subscribe: Object(s.d)("Subscribe", "BalloonNonSubbedUser"),
                        back: Object(s.d)("Back", "BalloonNonSubbedUser"),
                        allSubscriptions: Object(s.d)("All Paid Subscriptions", "BalloonNonSubbedUser"),
                        chooseGiftSubscription: Object(s.d)("Choose A Gift Subscription", "BalloonNonSubbedUser"),
                        discountMessage: Object(s.d)("{price} for the first month (Save 50%)", {
                            price: e
                        }, "BalloonNonSubbedUser"),
                        giftSubscription: Object(s.d)("Gift a Subscription", "BalloonNonSubbedUser"),
                        giftDiscountDisclaimer: Object(s.d)("Promotions do not apply to Gift Subscriptions", "BalloonNonSubbedUser")
                    }
                }, t.prototype.isDiscountDataReady = function(e) {
                    return e.data.user && e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0 && e.data.user.subscriptionProducts[0] && e.data.user.subscriptionProducts[0].self && void 0 !== e.data.user.subscriptionProducts[0].self.isEligibleForDiscount
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return void 0 !== e.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function(e) {
                    return !!this.isDiscountDataReady(e) && Object(M.b)(e.subscriptionProducts)
                }, t = a.__decorate([Object(u.a)(V, {
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
                }), Object(g.c)("BalloonNonSubbedUser")], t)
            }(o.Component)),
            B = G,
            z = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.showTop = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.Top
                            }
                        })
                    }, n.showRecipientSelect = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.RecipientSelect
                            }
                        })
                    }, n.showGiftOptions = function() {
                        n.props.reportSubMenuAction({
                            action: C.a.ClickGiftSubOptions
                        }), n.setState(function() {
                            return {
                                currentPage: r.GiftOptions
                            }
                        })
                    }, n.showSubOptions = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.SubOptions
                            }
                        })
                    }, n.goToPreviousPage = function() {
                        return n.state.currentPage === r.GiftOptions || n.state.currentPage === r.SubOptions || n.state.giftShortcut ? (n.showTop(), void n.setState({
                            giftShortcut: !1
                        })) : n.state.currentPage === r.RecipientSelect ? void n.showGiftOptions() : void 0
                    }, n.onGiftSelect = function() {
                        n.props.reportSubMenuAction({
                            action: C.a.GiftASub,
                            checkoutButtonTier: n.props.subscriptionProducts[0].price
                        }), n.setState({
                            selectedSubProductIndex: 0,
                            giftShortcut: !0
                        }), n.showRecipientSelect()
                    }, n.handleTopPageSubButtonClick = function() {
                        n.props.reportSubMenuAction({
                            action: C.a.ClickCheckout,
                            checkoutButtonTier: n.props.subscriptionProducts[0].price
                        })
                    }, n.onSelectTierTab = function(e) {
                        var t = n.tabToSubProduct.get(e);
                        if (t) {
                            var i = n.props.subscriptionProducts.findIndex(function(e) {
                                return e.price === t.price
                            });
                            i !== n.state.selectedSubProductIndex && n.setState({
                                selectedSubProductIndex: i
                            }), n.props.onSelectTierTab(t.price)
                        } else n.props.onSelectTierTab(L.a)
                    }, n.state = {
                        currentPage: r.Top,
                        selectedSubProductIndex: 0,
                        giftShortcut: !1,
                        giftingEnabled: !1
                    }, n.tabToSubProduct = i(t.subscriptionProducts), n
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.setMessages(), this.state.currentPage === r.Top ? this.getTopPage() : this.state.currentPage === r.SubOptions ? this.getSubOptionsPage() : this.state.currentPage === r.GiftOptions ? this.getGiftOptionsPage() : this.state.currentPage === r.RecipientSelect ? this.getGiftRecipientSearchPage() : this.getTopPage()
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, s.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        giftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return o.createElement(R, {
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getGiftOptionsPage = function() {
                    return o.createElement(P.U, {
                        padding: 2
                    }, o.createElement(D.a, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onGiftSelect: this.showRecipientSelect,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    }))
                }, t.prototype.getSubOptionsPage = function() {
                    return o.createElement(j, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        hasDiscount: !1,
                        isSubscribed: !0
                    })
                }, t.prototype.getTopPageGiftSection = function() {
                    return o.createElement(P.U, null, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.helpGrow), o.createElement(P.U, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: P.H.Flex
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.giftSubscription + " " + this.props.subscriptionProducts[0].price,
                        onClick: this.onGiftSelect,
                        purchase: this.props.subscriptionProducts[0].price
                    }, this.messages.giftSubscription), o.createElement(P.U, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.giftOptions,
                        onClick: this.showGiftOptions,
                        type: P.z.Hollow
                    }, this.messages.giftOptions))))
                }, t.prototype.getTopPageUpgradeSection = function() {
                    return o.createElement(P.U, null, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.upgradeSubscription), o.createElement(F.a, {
                        authToken: this.props.authToken,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        subLogin: this.props.subLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        subbedTier: this.props.subbedTier,
                        subscriptionProducts: this.props.subscriptionProducts,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        onGiftSelect: this.showRecipientSelect,
                        isSubscribed: !0
                    }))
                }, t.prototype.getGiftInfoSection = function() {
                    var e, t, n = null;
                    return this.props.giftPaidUpgrade ? (e = this.messages.yourSubscription, t = this.messages.giftInfo, n = this.messages.giftUpgradeInfo) : (e = this.messages.yourGiftSub, t = this.messages.giftInfoWithExpiration), o.createElement(P.U, null, o.createElement(P._21, {
                        bold: !0,
                        type: P._26.H4
                    }, e), o.createElement(P.P, {
                        margin: {
                            y: 1
                        }
                    }, o.createElement(P._21, null, t)), n)
                }, t.prototype.getGiftExtendSection = function() {
                    var e = null,
                        t = null;
                    return this.props.isNonStandardSub || (e = o.createElement(P.U, {
                        margin: {
                            right: 1
                        },
                        display: P.H.Inline
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.seeMoreSubOptions,
                        onClick: this.showSubOptions,
                        type: P.z.Hollow,
                        "data-a-target": "see-more-sub-options-button"
                    }, this.messages.seeMoreSubOptions))), t = o.createElement(P.U, {
                        display: P.H.Inline
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.giftSubscription,
                        onClick: this.showGiftOptions,
                        type: P.z.Hollow
                    }, this.messages.giftSubscription)), o.createElement(P.U, null, o.createElement(P.U, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.extendSubscription), o.createElement(P.P, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(P._21, null, this.messages.tier1PricePerMonth)), o.createElement(P.U, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, o.createElement(P.u, {
                        ariaLabel: this.props.subscriptionProducts[0].price,
                        "data-a-target": "tier1-subscribe-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.handleTopPageSubButtonClick,
                        purchase: this.props.subscriptionProducts[0].price,
                        targetBlank: !0
                    }, this.messages.subscribe))), o.createElement(P.U, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, e, t))
                }, t.prototype.getTopPage = function() {
                    return this.state.giftingEnabled ? this.props.userHasGiftSub ? this.props.userHasGiftSub && !this.props.giftPaidUpgrade ? o.createElement(P.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, o.createElement(P.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getGiftExtendSection()) : o.createElement(P.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, o.createElement(P.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getTopPageGiftSection()) : o.createElement(P.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, o.createElement(P.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getTopPageGiftSection()), this.getTopPageUpgradeSection()) : o.createElement(P.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, this.getTopPageUpgradeSection())
                }, t.prototype.setMessages = function() {
                    switch (this.props.subbedTier) {
                        case d.a.Tier1:
                            this.props.subscriptionProducts[0].price;
                            break;
                        case d.a.Tier2:
                            this.props.subscriptionProducts[1].price;
                            break;
                        case d.a.Tier3:
                            this.props.subscriptionProducts[2].price;
                            break;
                        default:
                            this.props.subscriptionProducts[0].price
                    }
                    this.messages = {
                        upgradeSubscription: Object(s.d)("Upgrade Your Subscription", "BalloonSubbedUser"),
                        helpGrow: Object(s.d)("Help Grow {streamer}'s Community", {
                            streamer: this.props.channelDisplayName
                        }, "BalloonSubbedUser"),
                        giftSubscription: Object(s.d)("Gift A Subscription", "BalloonSubbedUser"),
                        giftOptions: Object(s.d)("More Gift Options", "BalloonSubbedUser"),
                        chooseGiftSubscription: Object(s.d)("Choose A Gift Subscription", "BalloonSubbedUser"),
                        back: Object(s.d)("Back", "BalloonSubbedUser"),
                        yourSubscription: Object(s.d)("Your Subscription", "BalloonSubbedUser"),
                        extendSubscription: Object(s.d)("Extend Your Subscription", "BalloonSubbedUser"),
                        yourGiftSub: Object(s.d)("Your Gift Subscription", "BalloonSubbedUser"),
                        seeMoreSubOptions: Object(s.d)("More Paid Subscription Options", "BalloonSubbedUser"),
                        subscribe: Object(s.d)("Subscribe", "BalloonSubbedUser"),
                        giftInfo: Object(s.d)("{giftPrice} Gift Subscription from {giftSender}", {
                            giftPrice: this.getCurrentSubPrice(),
                            giftSender: o.createElement(P._21, {
                                bold: !0,
                                type: P._26.Span
                            }, this.props.giftSender || "")
                        }, "BalloonSubbedUser"),
                        giftUpgradeInfo: Object(s.d)("Your new {upgradePrice} Paid Subscription will begin on {subStartDate}", {
                            upgradePrice: this.props.giftPaidUpgrade ? this.props.giftPaidUpgrade.price : "",
                            subStartDate: this.getFormattedGiftUpgradeStartDate()
                        }, "BalloonSubbedUser"),
                        giftInfoWithExpiration: Object(s.d)("{giftPrice} Subscription from {giftSender} - Benefits expire on {giftEndDate}", {
                            giftPrice: this.getCurrentSubPrice(),
                            giftSender: o.createElement(P._21, {
                                bold: !0,
                                type: P._26.Span
                            }, this.props.giftSender || ""),
                            giftEndDate: this.getFormattedGiftEndDate()
                        }, "BalloonSubbedUser"),
                        tier1PricePerMonth: Object(s.d)("{price} / Month", {
                            price: this.props.subscriptionProducts[0].price
                        }, "BalloonSubbedUser"),
                        allSubscriptions: Object(s.d)("All Paid Subscriptions", "BalloonSubbedUser")
                    }
                }, t.prototype.getFormattedGiftUpgradeStartDate = function() {
                    var e = "";
                    if (this.props.giftPaidUpgrade && this.props.giftPaidUpgrade.startsAt) try {
                        e = Object(s.c)(new Date(this.props.giftPaidUpgrade.startsAt), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        s.i.debug(t, "There was an error formatting gift upgrade start date."), e = ""
                    }
                    return e
                }, t.prototype.getFormattedGiftEndDate = function() {
                    var e = "";
                    if (this.props.giftSubEndDate) try {
                        e = Object(s.c)(new Date(this.props.giftSubEndDate), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        s.i.debug(t, "There was an error formatting gift end date."), e = ""
                    }
                    return e
                }, t.prototype.getCurrentSubPrice = function() {
                    switch (this.props.subbedTier) {
                        case "1000":
                            return this.props.subscriptionProducts[0].price;
                        case "2000":
                            return this.props.subscriptionProducts[1].price;
                        case "3000":
                            return this.props.subscriptionProducts[2].price;
                        default:
                            return this.props.subscriptionProducts[0].price
                    }
                }, t = a.__decorate([Object(g.c)("BalloonSubbedUser")], t)
            }(o.Component),
            W = z,
            H = (n(976), n(977));
        n.d(t, "a", function() {
            return q
        }), n.d(t, "b", function() {
            return K
        });
        var q = "prime",
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribed: !1,
                        activeTierPrice: q,
                        subbedTier: null,
                        subData: null,
                        inPrimeRegion: !1,
                        isNonStandardSub: !1,
                        isGiftSub: !1,
                        hasReconciledUser: !1,
                        subGiftingEnabled: !1
                    }, t.modalLevel = "top_page", t.reportSubMenuAction = function(e) {
                        Object(C.b)({
                            action: e.action || "",
                            channelLogin: t.props.channelLogin || "",
                            channelID: t.props.data && t.props.data.user.id,
                            checkoutButtonTier: e.checkoutButtonTier || t.state.activeTierPrice.slice(),
                            hasSubCredit: !!t.props.data.user.self && t.props.data.user.self.canPrimeSubscribe,
                            hostChannelID: t.props.hostChannelID,
                            hostChannelLogin: t.props.hostChannelLogin,
                            isMenuOpen: !(e.action === C.a.OpenSubMenu),
                            sub_location: "channel_page",
                            modal: !t.state.isSubscribed,
                            modalLevel: t.state.isSubscribed ? "" : t.modalLevel.slice(),
                            showPrimeContent: t.state.inPrimeRegion,
                            giftRecipient: e.giftRecipient || null
                        }), !e.modalLevel || e.action !== C.a.ClickMoreSubOptions && e.action !== C.a.ClickBack || (t.modalLevel = e.modalLevel, t.setState({
                            activeTierPrice: q
                        }))
                    }, t.handleMenuToggle = function(e) {
                        t.reportSubMenuAction({
                            action: e ? C.a.CloseSubMenu : C.a.OpenSubMenu
                        })
                    }, t.onSelectTierTab = function(e) {
                        t.state.activeTierPrice !== e && t.setState({
                            activeTierPrice: e
                        })
                    }, t.onSubscribedWithPrime = function() {
                        t.reportSubMenuAction({
                            action: C.a.SubWithPrime
                        }), t.modalLevel = "", t.setState({
                            isSubscribed: !0,
                            subbedTier: d.a.Prime
                        }), Object(m.d)(H, {
                            login: t.props.channelLogin
                        }, function(e) {
                            return e.user && e.user.self && (e.user.self.canPrimeSubscribe = !1, e.user.self.subscriptionBenefit = {
                                id: Object(h.a)(),
                                purchasedWithPrime: !0,
                                tier: q,
                                endsAt: null,
                                paidUpgrade: null,
                                gift: {
                                    isGift: !1,
                                    gifter: null,
                                    __typename: "SubscriptionGift"
                                },
                                __typename: "SubscriptionBenefit"
                            }), e
                        })
                    }, t.setMessages = function() {
                        var e;
                        e = t.state.subGiftingEnabled ? Object(s.d)("Gift A Sub", "SubscribeButton") : Object(s.d)("Subscribed", "SubscribeButton"), t.messages = {
                            subscribe: t.props.hostChannelID ? Object(s.d)("Subscribe to {username}", {
                                username: t.props.data.user.displayName
                            }, "SubscribeButton") : Object(s.d)("Subscribe", "SubscribeButton"),
                            subscribed: t.props.hostChannelID ? Object(s.d)("Subscribed to {username}", {
                                username: t.props.data.user.displayName
                            }, "SubscribeButton") : e,
                            discountMessage: Object(s.d)("Get 50% off the first month of any paid Subscription", "SubscribeButton")
                        }
                    }, t.setPromotionData = function(e) {
                        if (t.state) {
                            var n = Object.assign({}, t.state.subData);
                            if (null !== n) {
                                for (var i = [], r = 0; r < 3; r++) {
                                    var a = Object.assign({}, n.subscriptionProducts[r]);
                                    a.self = e[r].self, i.push(a)
                                }
                                n.subscriptionProducts = i, t.setState({
                                    subData: n
                                })
                            }
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch(), this.props.channelLogin !== e.channelLogin && this.setState({
                            subData: null,
                            isSubscribed: !1,
                            hasReconciledUser: !1
                        }), this.isUserDataReady(e) && this.hasSubscriptionProducts(e)) {
                        if (!this.state.inPrimeRegion && e.data.requestInfo && Object(p.b)(e.data.requestInfo.countryCode) && this.setState({
                                inPrimeRegion: !0
                            }), e.data.currentUser && this.isOwnChannel(e)) return void this.setState({
                            hasReconciledUser: !0
                        });
                        if (this.setState({
                                subData: e.data.user,
                                isNonStandardSub: 1 === e.data.user.subscriptionProducts.length
                            }), e.data.user.subscriptionProducts.some(this.isSubscriptionProductInvalid) && this.setState({
                                isNonStandardSub: !0
                            }), e.data.currentUser && e.data.user.self)
                            if (e.data.user.self.subscriptionBenefit) {
                                var t = e.data.user.self.subscriptionBenefit.purchasedWithPrime ? q : e.data.user.self.subscriptionBenefit.tier;
                                this.modalLevel = "";
                                var n = e.data.user.self.subscriptionBenefit.gift.isGift;
                                this.setState({
                                    isSubscribed: !0,
                                    subbedTier: t,
                                    hasReconciledUser: !0,
                                    isGiftSub: n
                                })
                            } else this.setState({
                                isSubscribed: !1,
                                hasReconciledUser: !0
                            });
                        else this.setState({
                            hasReconciledUser: !0
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.shouldRender() || !this.hasSubscriptionProducts(this.props)) return null;
                    if (this.setMessages(), this.props.data.currentUser && this.state.isSubscribed && this.state.isNonStandardSub) return o.createElement(P.u, {
                        disabled: !0,
                        ariaLabel: this.messages.subscribed,
                        icon: P._9.Star
                    }, this.messages.subscribed);
                    var e = this.state.subbedTier === d.a.Prime ? P._9.Crown : P._9.Star,
                        t = this.state.isSubscribed ? this.messages.subscribed : this.messages.subscribe,
                        n = this.state.isSubscribed ? "subscribed-button" : "subscribe-button",
                        i = o.createElement(P.u, {
                            "data-a-target": n,
                            "data-test-selector": "subscribe-button__dropdown",
                            ariaLabel: t,
                            type: this.state.isSubscribed ? P.z.Success : P.z.Default,
                            dropdown: !0,
                            icon: this.state.isSubscribed ? e : void 0
                        }, t),
                        r = this.props.hostChannelID ? P.q.TopLeft : P.q.BottomRight;
                    return o.createElement(l.a, {
                        onToggle: this.handleMenuToggle
                    }, i, o.createElement(P.p, {
                        size: P.r.Large,
                        direction: r,
                        "data-a-target": "sub-balloon"
                    }, this.renderBalloonContent()))
                }, t.prototype.renderBalloonContent = function() {
                    if (!this.state.subData) return s.i.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), null;
                    if (s.i.debug("rendering sub balloon", {
                            state: this.state
                        }), this.props.data.currentUser) {
                        if (this.state.isSubscribed) return o.createElement(W, {
                            authToken: this.props.authToken,
                            canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                            channelDisplayName: this.state.subData.displayName,
                            onSelectTierTab: this.onSelectTierTab,
                            reportSubMenuAction: this.reportSubMenuAction,
                            subbedTier: this.state.subbedTier,
                            isNonStandardSub: this.state.isNonStandardSub,
                            subscriptionProducts: this.state.subData.subscriptionProducts,
                            onSubscribedWithPrime: this.onSubscribedWithPrime,
                            userHasPrime: this.props.data.currentUser.hasPrime,
                            userHasGiftSub: this.state.isGiftSub,
                            subLogin: this.state.subData.login,
                            giftSubEndDate: this.props.data.user.self && this.props.data.user.self.subscriptionBenefit ? this.props.data.user.self.subscriptionBenefit.endsAt : void 0,
                            giftPaidUpgrade: this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && this.props.data.user.self.subscriptionBenefit.paidUpgrade ? this.props.data.user.self.subscriptionBenefit.paidUpgrade : void 0,
                            giftSender: this.getGiftSender()
                        });
                        var e = null;
                        return this.hasDiscount() && (e = o.createElement(P.U, {
                            className: "tw-subscription-modal__discount-bar"
                        }, o.createElement(P._21, null, this.messages.discountMessage))), o.createElement(P.U, null, e, o.createElement(B, {
                            authToken: this.props.authToken,
                            channelDisplayName: this.state.subData.displayName,
                            channelLogin: this.props.channelLogin,
                            canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                            inPrimeRegion: this.state.inPrimeRegion,
                            isNonStandardSub: this.state.isNonStandardSub,
                            onSelectTierTab: this.onSelectTierTab,
                            onSubscribedWithPrime: this.onSubscribedWithPrime,
                            reportSubMenuAction: this.reportSubMenuAction,
                            subLogin: this.state.subData.login,
                            subscriptionProducts: this.state.subData.subscriptionProducts,
                            userHasPrime: this.props.data.currentUser.hasPrime,
                            setPromotionData: this.setPromotionData
                        }))
                    }
                    return o.createElement(B, {
                        authToken: this.props.authToken,
                        channelDisplayName: this.state.subData.displayName,
                        channelLogin: this.props.channelLogin,
                        canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                        inPrimeRegion: this.state.inPrimeRegion,
                        isNonStandardSub: this.state.isNonStandardSub,
                        onSelectTierTab: this.onSelectTierTab,
                        onSubscribedWithPrime: this.onSubscribedWithPrime,
                        reportSubMenuAction: this.reportSubMenuAction,
                        subLogin: this.state.subData.login,
                        subscriptionProducts: this.state.subData.subscriptionProducts,
                        userHasPrime: !1,
                        setPromotionData: this.setPromotionData
                    })
                }, t.prototype.hasSubscriptionProducts = function(e) {
                    return e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0
                }, t.prototype.shouldRender = function() {
                    return !!this.isUserDataReady(this.props) && (!this.hasSubscriptionProducts(this.props) || !!this.isSubscriptionReady())
                }, t.prototype.isUserDataReady = function(e) {
                    return e.data && e.data.user && !e.data.loading && !e.data.error
                }, t.prototype.isOwnChannel = function(e) {
                    return e.data.user.id === (e.data.currentUser && e.data.currentUser.id)
                }, t.prototype.isSubscriptionReady = function() {
                    return this.state.subData && this.state.hasReconciledUser
                }, t.prototype.getGiftSender = function() {
                    return this.state.isGiftSub && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && this.props.data.user.self.subscriptionBenefit.gift.isGift ? this.props.data.user.self.subscriptionBenefit.gift.gifter.displayName : null
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    e = "no", n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, s.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 2:
                                    return e = n.sent(), [3, 4];
                                case 3:
                                    return t = n.sent(), e = "no", [3, 4];
                                case 4:
                                    return this.setState({
                                        subGiftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.isSubscriptionProductInvalid = function(e) {
                    return !e.emoteSetID
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return !(!e || !e.subData) && void 0 !== e.subData.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function() {
                    var e = this.state;
                    return !!this.isSubscriptionDiscountReady(e) && (!(!e || !e.subData) && Object(M.b)(e.subData.subscriptionProducts))
                }, t = a.__decorate([Object(u.a)(H, {
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
                }), Object(c.a)([{
                    topic: function(e) {
                        return Object(f.n)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }])], t)
            }(o.Component),
            K = $
    },
    936: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            Prime: "prime",
            Tier1: "1000",
            Tier2: "2000",
            Tier3: "3000"
        }
    },
    937: function(e, t, n) {
        "use strict";

        function i(e) {
            return "$" + (e / 100).toFixed(2).toString()
        }

        function r(e) {
            if (e[0].self && e[1].self && e[2].self) {
                if (e[0].self.isEligibleForDiscount) return !0;
                if (e[1].self.isEligibleForDiscount) return !0;
                if (e[2].self.isEligibleForDiscount) return !0
            }
            return !1
        }
        t.a = i, t.b = r
    },
    940: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(2),
            o = n(923),
            s = n(3),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onGiftSelect = function() {
                        t.props.onGiftSelect && t.props.onGiftSelect()
                    }, t.onSelectTierTab = function(e) {
                        t.props.onSelectTierTab && t.props.onSelectTierTab(e)
                    }, t.reportSubMenuAction = function(e) {
                        t.props.reportSubMenuAction && t.props.reportSubMenuAction(e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(s.U, null, r.createElement(s.U, {
                        display: s.H.Flex,
                        justifyContent: s.T.Between,
                        alignItems: s.c.Center,
                        fullWidth: !0
                    }, r.createElement(s._21, {
                        bold: !0,
                        type: s._26.H5
                    }, Object(a.d)("Choose A Gift Subscription", "GiftTierTabs")), r.createElement(s.u, {
                        type: s.z.Text,
                        icon: s._9.AngleLeft,
                        onClick: this.props.onBack,
                        "data-test-selector": "sub-gift-select-back-button"
                    }, r.createElement(s.U, {
                        alignItems: s.c.Center,
                        display: s.H.InlineFlex
                    }, r.createElement(s._21, null, Object(a.d)("Back", "GiftTierTabs"))))), r.createElement(o.a, {
                        isGift: !0,
                        giftRecipient: this.props.giftRecipient,
                        onGiftSelect: this.onGiftSelect,
                        channelDisplayName: this.props.channelDisplayName,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.reportSubMenuAction,
                        userHasPrime: !1,
                        canPrimeSubscribe: !1,
                        isSubscribed: !1
                    }))
                }, t
            }(r.Component),
            u = l;
        n.d(t, !1, function() {
            return "sub-gift-select-back-button"
        }), n.d(t, "a", function() {
            return u
        })
    },
    944: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 118
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\n  reportReasons(content: $content) {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    945: function(e, t) {},
    946: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "directoryType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 201
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_UserCommunities($userId: ID!) {\n  user(id: $userId) {\n    id\n    directories {\n      nodes {\n        id\n        name\n        displayName\n        directoryType\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    947: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
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
            body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\n  reportUserInCommunity(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    948: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "contentID"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
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
            body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\n  reportContent(input: $input) {\n    contentID\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    952: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return r.__awaiter(this, void 0, void 0, function() {
                var n, i, a, l, u;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            n = "https://api.twitch.tv/api/premium/credit/spend_token?channel_id=" + e, i = 1, r.label = 1;
                        case 1:
                            if (!(i <= s)) return [3, 7];
                            r.label = 2;
                        case 2:
                            return r.trys.push([2, 5, , 6]), [4, fetch(n, {
                                method: "POST",
                                headers: {
                                    "Client-ID": o.n.config.legacyClientID,
                                    Accept: "application/json; charset=UTF-8",
                                    "content-type": "application/json; charset=UTF-8",
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 3:
                            return a = r.sent(), [4, a.body];
                        case 4:
                            return l = r.sent(), [2, l];
                        case 5:
                            if (u = r.sent(), i === s) throw u;
                            return [3, 6];
                        case 6:
                            return ++i, [3, 1];
                        case 7:
                            return [2]
                    }
                })
            })
        }
        var r = n(0),
            a = n(1),
            o = n(2),
            s = 3,
            l = n(269),
            u = n(3),
            c = "subscribe-button__subscribe-with-prime",
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribing: !1,
                        primeSubFailure: !0
                    }, t.handleStartPrimeTrialClick = function() {
                        t.props.reportSubMenuAction({
                            action: l.a.ClickSignupForPrime
                        })
                    }, t.handleSubWithPrimeClick = function() {
                        t.setState({
                            isSubscribing: !0
                        }, function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return r.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 3, 4, 5]), this.props.authToken && this.props.userHasPrime && this.props.subLogin ? [4, i(this.props.subLogin, this.props.authToken)] : [3, 2];
                                        case 1:
                                            t.sent(), this.props.onSubscribedWithPrime(), t.label = 2;
                                        case 2:
                                            return [3, 5];
                                        case 3:
                                            return e = t.sent(), o.i.error(e, "Failed to subscribe with Prime", {
                                                subLogin: this.props.subLogin
                                            }), this.setState({
                                                isSubscribing: !1,
                                                primeSubFailure: !0
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                isSubscribing: !1
                                            }), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages()
                }, t.prototype.render = function() {
                    var e = this.props.isSubscribedWithPrime && this.props.canPrimeSubscribe;
                    return this.props.userHasPrime ? this.props.isSubscribed && !e ? a.createElement(u.u, r.__assign({
                        ariaLabel: this.messages.subscribed,
                        "data-test-selector": c,
                        disabled: !0,
                        icon: u._9.Crown
                    }, Object(u._39)(this.props)), this.messages.subscribed) : this.props.canPrimeSubscribe ? a.createElement(u.u, r.__assign({
                        ariaLabel: this.messages.subscribeFree,
                        "data-test-selector": c,
                        disabled: this.state.isSubscribing,
                        icon: u._9.Crown,
                        state: this.state.isSubscribing ? u.y.Loading : u.y.Default,
                        onClick: this.handleSubWithPrimeClick
                    }, Object(u._39)(this.props)), e ? this.messages.resubscribeFree : this.messages.subscribeFree) : a.createElement(u.u, r.__assign({
                        ariaLabel: this.messages.primeSubNotAvailable,
                        "data-test-selector": c,
                        disabled: !0,
                        icon: u._9.Crown
                    }, Object(u._39)(this.props)), this.messages.primeSubNotAvailable) : a.createElement(u.u, r.__assign({
                        ariaLabel: this.messages.startPrimeTrial,
                        "data-test-selector": c,
                        icon: u._9.Crown,
                        linkTo: o.a.tryPrimeURI,
                        onClick: this.handleStartPrimeTrialClick
                    }, Object(u._39)(this.props), {
                        targetBlank: !0
                    }), this.messages.startPrimeTrial)
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        subscribed: Object(o.d)("Subscribed", "SubscribeWithPrime"),
                        startPrimeTrial: Object(o.d)("Start Your Free Trial", "SubscribeWithPrime"),
                        primeSubNotAvailable: Object(o.d)("Not yet!", "SubscribeWithPrime"),
                        subscribeFree: Object(o.d)("Subscribe Free", "SubscribeWithPrime"),
                        resubscribeFree: Object(o.d)("Resubscribe Free", "SubscribeWithPrime")
                    }
                }, t
            }(a.Component),
            p = d;
        n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return p
        })
    },
    953: function(e, t) {},
    957: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(2),
            o = n(9),
            s = n(6),
            l = n(3),
            u = n(971),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        canGift: !1,
                        giftingEnabled: !1
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && e.data.user && e.data.user.self ? this.setState({
                        canGift: e.data.user.self.canGift
                    }) : this.setState({
                        canGift: !1
                    })
                }, t.prototype.render = function() {
                    return this.state.giftingEnabled ? r.createElement(l.u, {
                        targetBlank: !0,
                        disabled: !this.state.canGift,
                        onClick: this.props.onClick,
                        linkTo: this.props.checkoutURL,
                        "data-test-selector": "gift-subscribe-button"
                    }, Object(a.d)("Gift Subscription", "GiftSubscribeButton")) : null
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), "yes" === e ? this.setState({
                                        giftingEnabled: !0
                                    }) : this.setState({
                                        giftingEnabled: !1
                                    }), [2]
                            }
                        })
                    })
                }, t = i.__decorate([Object(s.c)("GiftSubscribeButton"), Object(o.a)(u, {
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
            }(r.Component),
            d = c;
        n.d(t, !1, function() {
            return "gift-subscribe-button"
        }), n.d(t, "a", function() {
            return d
        })
    },
    971: function(e, t) {
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
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
                                        directives: [],
                                        selectionSet: null
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
            body: "query GiftSubscribeButton_Gift_Eligibility($recipientLogin: String, $subProductId: String!) {\n  user(login: $recipientLogin) {\n    id\n    self {\n      canGift(product: $subProductId)\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    972: function(e, t) {},
    973: function(e, t) {},
    974: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_Promotion"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "isEligibleForDiscount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "newPrice"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "oldPrice"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 246
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_Promotion($login: String!) {\n  user(login: $login) {\n    id\n    subscriptionProducts {\n      id\n      self {\n\t\t\t\tisEligibleForDiscount\n\t\t\t\tnewPrice\n\t\t\t\toldPrice\n\t\t\t\tdiscountType\n\t\t\t\tdiscountType\n\t\t\t}\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    975: function(e, t) {},
    976: function(e, t) {},
    977: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "price"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "url"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "emoteSetID"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "displayName"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "purchasedWithPrime"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "tier"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "price"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "startsAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isGift"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
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
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "displayName"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
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
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 673
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_User($login: String!) {\n  user(login: $login) {\n    id\n    login\n    displayName\n    subscriptionProducts {\n      id\n      price\n      url\n      emoteSetID\n      displayName\n      name\n      emotes {\n        id\n      }\n    }\n    self {\n      canPrimeSubscribe\n      subscriptionBenefit {\n        id\n        purchasedWithPrime\n        tier\n        endsAt\n        paidUpgrade {\n          price\n          startsAt\n        }\n        gift {\n          isGift\n          gifter {\n            id\n            displayName\n          }\n        }\n      }\n    }\n  }\n  currentUser {\n    id\n    login\n    hasPrime\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    978: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = Math.floor(e / 3600),
                n = Math.floor((e - 3600 * t) / 60),
                i = e - 3600 * t - 60 * n;
            return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), t + "h" + n + "m" + i + "s"
        }

        function r(e) {
            return "" === e ? "" : e.startsWith("v") ? e : "v" + e
        }
        t.b = i, t.a = r
    },
    998: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && "v" === e.charAt(0) ? e.substring(1) : e
        }
        t.a = i
    }
});
//# sourceMappingURL=pages.front-09f399e0f980c89aa06e1009e68d5f4a.js.map