webpackJsonp([32], {
    1031: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        }
        var i = n(8),
            r = n(0),
            o = n(1),
            l = n(2),
            s = n(111),
            d = n(415),
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            m = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = l.i.withCategory("ad-slot"), n.createSlot = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var t, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, s.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = a.sent(), Object(d.h)(t.getSlotElementId()), this.setState({
                                            slot: t
                                        }), [3, 4];
                                    case 3:
                                        return n = a.sent(), this.logger.warn("Unable to create ad slot", {
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
                            if (n.props.slotID === d.b.directory.banner) {
                                var a = n.slotRef.querySelector(c);
                                return void(a && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === d.b.directory.rectangle) {
                                var a = n.slotRef.querySelector(u);
                                return void(a && 1 !== a.clientWidth && n.setState({
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
                    d.g.addListener(d.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), d.g.removeListener(d.f, this.onSlotRenderEnd), this.state.slot && s.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = r.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), o.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(o.Component),
            p = m,
            g = Object(i.a)(a)(p);
        n.d(t, "a", function() {
            return g
        })
    },
    1051: function(e, t, n) {
        "use strict";
        var a, i, r, o = n(4),
            l = n(1),
            s = n(2),
            d = n(1052),
            c = n(3),
            u = (n(1132), a = {}, a[d.a.Live] = "stream-type-indicator--live", a[d.a.Premiere] = "stream-type-indicator--premiere", a[d.a.Rerun] = "stream-type-indicator--rerun", a[d.a.WatchParty] = "stream-type-indicator--rerun", a),
            m = (i = {}, i[d.a.Premiere] = c._9.VideoPremiere, i[d.a.Rerun] = c._9.VideoRerun, i[d.a.WatchParty] = c._9.VideoRerun, i),
            p = (r = {}, r[d.a.Premiere] = c._10.Live, r[d.a.Rerun] = c._10.Inherit, r[d.a.WatchParty] = c._10.Inherit, r),
            g = function(e) {
                var t = {
                    "stream-type-indicator": !0
                };
                t[u[e.type]] = !0;
                var n;
                n = e.type === d.a.Live ? l.createElement(c.U, {
                    className: "stream-type-indicator__live-wrapper",
                    display: c.H.Flex,
                    alignItems: c.c.Center
                }, l.createElement(c.V, {
                    size: c.W.Small
                })) : l.createElement(c._8, {
                    asset: m[e.type],
                    type: p[e.type],
                    width: 14,
                    height: 14
                });
                var a;
                switch (e.type) {
                    case d.a.Live:
                        a = Object(s.d)("Live", "StreamTypeIndicator");
                        break;
                    case d.a.Premiere:
                        a = Object(s.d)("Premiere", "StreamTypeIndicator");
                        break;
                    case d.a.Rerun:
                    case d.a.WatchParty:
                        a = Object(s.d)("Rerun", "StreamTypeIndicator");
                        break;
                    default:
                        a = ""
                }
                return l.createElement(c._17, {
                    className: o(t),
                    background: c.m.Overlay,
                    padding: {
                        x: .5
                    },
                    borderRadius: c.s.Small,
                    display: c.H.Flex
                }, l.createElement(c.U, {
                    display: c.H.Flex,
                    margin: {
                        right: .5
                    }
                }, n), l.createElement(c._21, {
                    type: c._26.Span
                }, a))
            };
        n.d(t, "a", function() {
            return g
        })
    },
    1052: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Live = "live", e.WatchParty = "watch_party", e.Premiere = "premiere", e.Rerun = "rerun"
        }(a || (a = {}))
    },
    1057: function(e, t, n) {
        "use strict";
        var a = n(0),
            i = n(1),
            r = n(12),
            o = n(2),
            l = n(1051),
            s = n(3),
            d = (n(1133), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), "yes" === e && o.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = i.createElement(s.U, {
                        display: s.H.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, i.createElement(s.Z, {
                        label: Object(o.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: i.createElement(r.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return i.createElement("div", a.__assign({
                        className: "live-channel-card"
                    }, Object(s._39)(this.props)), i.createElement(s.A, {
                        key: this.props.title
                    }, i.createElement(s.U, {
                        fullWidth: !0
                    }, i.createElement(s.j, {
                        overflow: !0
                    }, i.createElement("div", null, i.createElement(r.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, i.createElement(s.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: s.k.Aspect16x9
                    })), this.renderContentType(), this.renderGameBoxArt()))), i.createElement(s.B, null, i.createElement(r.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, i.createElement(s.P, {
                        margin: {
                            top: .5
                        }
                    }, i.createElement(s._21, {
                        type: s._26.H3,
                        fontSize: s.L.Size5,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), i.createElement(s.U, {
                        className: "live-channel-card__meta",
                        display: s.H.Flex,
                        flexWrap: s.K.NoWrap
                    }, e, i.createElement(s._21, {
                        type: s._26.Span,
                        ellipsis: !0
                    }, t)))))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? i.createElement(r.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, i.createElement(s._17, {
                        className: "live-channel-card__boxart",
                        position: s._2.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, i.createElement(s._30, {
                        display: s.H.Block,
                        direction: s._32.Bottom,
                        label: t
                    }, i.createElement(s.C, {
                        imageSrc: n,
                        imageAlt: t,
                        aspect: s.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? i.createElement(s.U, {
                        position: s._2.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, i.createElement(l.a, {
                        type: this.props.streamType
                    })) : null
                }, t
            }(i.Component)),
            c = d;
        n.d(t, !1, function() {
            return d
        }), n.d(t, "a", function() {
            return c
        })
    },
    1058: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                isLoggedIn: Object(d.d)(e)
            }
        }

        function i(e) {
            return Object(o.bindActionCreators)({
                showLoginModal: function() {
                    return Object(s.f)(l.a.FollowGameButton)
                }
            }, e)
        }
        var r = n(8),
            o = n(11),
            l = n(51),
            s = n(35),
            d = n(19),
            c = n(0),
            u = n(1),
            m = n(31),
            p = n(2),
            g = n(9),
            f = n(23),
            v = n(14),
            h = n(3),
            y = n(1059),
            k = n(1060),
            b = n(1061),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.follow = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.followGame && this.props.data && this.props.data.game ? (e = c.__assign({}, Object(f.a)({
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
                                                var a = n.data.followGame,
                                                    i = e.readQuery({
                                                        query: k,
                                                        variables: {
                                                            name: t.props.gameName
                                                        }
                                                    });
                                                i.game && (i.game.self.follow = a.game.self.follow, e.writeQuery({
                                                    query: k,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: i
                                                }))
                                            }
                                        }), [4, this.props.followGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(v.SpadeEventType.GameFollow), [2]
                                }
                            })
                        })
                    }, t.unfollow = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = c.__assign({}, Object(f.a)({
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
                                                    query: k,
                                                    variables: {
                                                        name: t.props.gameName
                                                    }
                                                });
                                                n.game && (n.game.self.follow = null, e.writeQuery({
                                                    query: k,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: n
                                                }))
                                            }
                                        }), [4, this.props.unfollowGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(v.SpadeEventType.GameUnfollow), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(p.d)("Follow", "FollowGameButton");
                    if (!this.props.isLoggedIn) return u.createElement(h.u, {
                        icon: h._9.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
                        onClick: this.props.showLoginModal
                    }, e);
                    if (this.isLoading) return u.createElement(h._1, {
                        width: 70,
                        height: 30
                    });
                    if (this.isFollowing) {
                        var t = Object(p.d)("Unfollow", "FollowGameButton");
                        return u.createElement(h.v, {
                            ariaLabel: t,
                            "data-test-selector": "follow-game-button-component",
                            icon: h._9.Heart,
                            onClick: this.unfollow,
                            statusAlertIcon: h._9.Unheart
                        })
                    }
                    return u.createElement(h.u, {
                        icon: h._9.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
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
                    p.n.tracking.track(e, {
                        src: this.props.src,
                        kind: e === v.SpadeEventType.GameFollow ? "follow" : "unfollow",
                        name: this.props.gameName
                    })
                }, t
            }(u.Component),
            w = Object(m.compose)(Object(g.a)(k, {
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
            }), Object(g.a)(y, {
                name: "followGame"
            }), Object(g.a)(b, {
                name: "unfollowGame"
            }))(S),
            _ = Object(r.a)(a, i)(w);
        n.d(t, "a", function() {
            return _
        })
    },
    1059: function(e, t) {
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
                                                    value: "follow"
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
                                                            value: "followedAt"
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
            }],
            loc: {
                start: 0,
                end: 187
            }
        };
        n.loc.source = {
            body: "mutation FollowGameButton_FollowGame($input: FollowGameInput!) {\n  followGame(input: $input) {\n    game {\n      self {\n        follow {\n          followedAt\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1060: function(e, t) {
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
                                            value: "follow"
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
                                                    value: "followedAt"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 177
            }
        };
        n.loc.source = {
            body: "query FollowGameButton_Game($name: String!) {\n  game(name: $name) {\n    id\n    name\n    self {\n      follow {\n        followedAt\n      }\n    }\n  }\n\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1061: function(e, t) {
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "followedAt"
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
                end: 143
            }
        };
        n.loc.source = {
            body: "mutation FollowGameButton_UnfollowGame($input: UnfollowGameInput!) {\n  unfollowGame(input: $input) {\n    follow {\n      followedAt\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1125: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return i
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "f", function() {
            return u
        }), n.d(t, "g", function() {
            return m
        });
        var a, i = "TWILIGHT_WEB_ONBOARDING_FOR_YOU",
            r = "TWILIGHT_WEB_ONBOARDING",
            o = "control";
        ! function(e) {
            e.Skip = "skip", e.NoSkip = "no_skip"
        }(a || (a = {}));
        var l, s = new Set([a.Skip.toString(), a.NoSkip.toString()]);
        ! function(e) {
            e.First = "first", e.Last = "last"
        }(l || (l = {}));
        var d = new Set([l.First.toString(), l.Last.toString()]),
            c = function(e) {
                return !!e && d.has(e)
            },
            u = function(e, t) {
                return !!e && s.has(e) && c(t)
            },
            m = function(e) {
                return e.getTime() >= p().getTime()
            },
            p = function() {
                return new Date((new Date).getTime() - 12096e5)
            }
    },
    1126: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        });
        var a = n(954),
            i = function(e) {
                return e.startsWith("/communities") || e.startsWith("/directory/communities") ? a.a.Communities : a.a.Games
            },
            r = function(e) {
                switch (e) {
                    case "communities":
                        return a.a.Communities;
                    case "games":
                        return a.a.Games;
                    case "creative":
                        return a.a.Creative;
                    default:
                        return a.a.Games
                }
            },
            o = function(e) {
                switch (e) {
                    case "communities":
                        return [a.a.Communities, a.a.Creative];
                    case "games":
                        return [a.a.Games];
                    case "creative":
                        return [a.a.Creative];
                    default:
                        return [a.a.Games]
                }
            }
    },
    1132: function(e, t) {},
    1133: function(e, t) {},
    1154: function(e, t, n) {
        "use strict";
        var a = n(0),
            i = n(1),
            r = n(2),
            o = function(e, t) {
                return Object(r.d)("{viewerCount,number} viewers on {channel}", {
                    viewerCount: e,
                    channel: t
                }, "DirectoryGamePage")
            },
            l = Object(r.d)("Untitled Broadcast", "StreamThumbnail"),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return i.createElement("div", null, Object(r.d)("View All", "DirectoryInternationalSection"))
                }, t
            }(i.Component),
            d = s;
        n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return d
        })
    },
    1297: function(e, t, n) {
        "use strict";

        function a(e) {
            for (var t = e.length - 1; t > 0; t--) {
                var n = Math.floor(Math.random() * (t + 1)),
                    a = e[t];
                e[t] = e[n], e[n] = a
            }
            return e
        }
        t.a = a
    },
    1298: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return v
        });
        var a = n(0),
            i = n(21),
            r = (n.n(i), n(1)),
            o = (n.n(r), n(2)),
            l = n(9),
            s = n(19),
            d = n(3),
            c = n(1299),
            u = (n.n(c), n(1300)),
            m = (n.n(u), n(1301)),
            p = (n.n(m), function(e) {
                return "https://api.twitch.tv/api/users/" + e + "/follows/games/follow"
            }),
            g = function(e) {
                return "https://api.twitch.tv/api/users/" + e + "/follows/games/unfollow"
            },
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        followed: !1,
                        inProgress: !1
                    }, t.onClick = function() {
                        t.state.inProgress || t.setState({
                            inProgress: !0
                        }, t.mutateFollowGame)
                    }, t.mutateFollowGame = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, l, d, c, u = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, o.n.apollo.client.query({
                                            query: m
                                        })];
                                    case 1:
                                        return e = a.sent(), e.data.currentUser ? (t = {
                                            "Client-ID": o.n.config.legacyClientID,
                                            Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                            "Accept-Language": "en-us",
                                            "X-Requested-With": "XMLHttpRequest"
                                        }, n = o.n.store.getState(), r = Object(s.b)(n), l = Object(s.c)(n), l && (t.Authorization = "OAuth " + l.authToken), r && (t["Twitch-Api-Token"] = r), this.state.followed ? [4, fetch(g(e.data.currentUser.login), {
                                            method: "DELETE",
                                            body: i.stringify({
                                                src: "onboard",
                                                name: this.props.title,
                                                onsite: 1
                                            }),
                                            headers: t,
                                            credentials: "include"
                                        })] : [3, 3]) : [2];
                                    case 2:
                                        return d = a.sent(), this.setState({
                                            followed: !d.ok,
                                            inProgress: !1
                                        }, function() {
                                            d.ok && u.props.onUnfollow(u.props.title)
                                        }), [3, 5];
                                    case 3:
                                        return [4, fetch(p(e.data.currentUser.login), {
                                            method: "PUT",
                                            body: i.stringify({
                                                src: "onboard",
                                                name: this.props.title,
                                                onsite: 1
                                            }),
                                            headers: t,
                                            credentials: "include"
                                        })];
                                    case 4:
                                        c = a.sent(), this.setState({
                                            followed: c.ok,
                                            inProgress: !1
                                        }, function() {
                                            c.ok && u.props.onFollow(u.props.title)
                                        }), a.label = 5;
                                    case 5:
                                        return this.props.data.refetch(), [2]
                                }
                            })
                        })
                    }, t.onMouseEnter = function() {
                        t.setState({
                            hovered: !0
                        })
                    }, t.onMouseLeave = function() {
                        t.setState({
                            hovered: !1
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.data.refetch()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.updateFollowedState(e)
                }, t.prototype.render = function() {
                    var e;
                    return this.state.inProgress ? e = r.createElement("div", {
                        className: "follow-game-card__overlay"
                    }, r.createElement(d.X, {
                        fillContent: !0
                    })) : this.state.hovered ? e = r.createElement("div", {
                        className: "follow-game-card__overlay"
                    }, r.createElement(d._8, {
                        width: 50,
                        height: 50,
                        asset: this.state.followed ? d._9.Unheart : d._9.Heart
                    })) : this.state.followed && (e = r.createElement("div", {
                        className: "follow-game-card__overlay follow-game-card__overlay--followed",
                        "data-a-target": "follow-game-card--followed"
                    }, r.createElement(d._8, {
                        width: 50,
                        height: 50,
                        asset: d._9.Heart
                    }))), r.createElement(d.P, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement("div", a.__assign({
                        className: "follow-game-card",
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onClick: this.onClick
                    }, Object(d._39)(this.props)), r.createElement(d.A, {
                        key: this.props.title
                    }, r.createElement(d.U, {
                        position: d._2.Relative
                    }, e, r.createElement(d.C, {
                        aspect: d.k.Aspect3x4,
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc
                    })), r.createElement(d.B, null, r.createElement(d.U, {
                        margin: {
                            top: .5,
                            bottom: 1
                        }
                    }, r.createElement(d._21, {
                        color: d.F.Base,
                        fontSize: d.L.Size5
                    }, this.props.title), r.createElement(d._21, {
                        color: d.F.Alt,
                        fontSize: d.L.Size6
                    }, this.props.info))))))
                }, t.prototype.updateFollowedState = function(e) {
                    e.data && e.data.game && (e.data.game.self.follow ? this.setState({
                        followed: !0
                    }) : this.setState({
                        followed: !1
                    }))
                }, t = a.__decorate([Object(l.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                })], t)
            }(r.Component),
            v = f
    },
    1299: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Game_FollowGameCard"
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
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
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
                                            value: "follow"
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
                                                    value: "followedAt"
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
                end: 137
            }
        };
        n.loc.source = {
            body: "query Game_FollowGameCard($name: String) {\n  game(name: $name) {\n    id\n    self {\n      follow {\n        followedAt\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1300: function(e, t) {},
    1301: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Following_FollowGameCard"
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
                                    value: "login"
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
                end: 72
            }
        };
        n.loc.source = {
            body: "query Following_FollowGameCard {\n  currentUser {\n    id\n    login\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1302: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "g", function() {
            return l
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "f", function() {
            return d
        }), n.d(t, "d", function() {
            return c
        }), n.d(t, "c", function() {
            return u
        });
        var a, i = n(2),
            r = n(14);
        ! function(e) {
            e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
        }(a || (a = {}));
        var o;
        ! function(e) {
            e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed", e.Skipped = "skipped"
        }(o || (o = {}));
        var l = function(e) {
                var t = {
                    source: e.source,
                    action: o.Start
                };
                i.m.track(r.SpadeEventType.OnboardingEvent, t)
            },
            s = function() {
                var e = {
                    source: a.HomepageCTA,
                    action: o.Dismissed
                };
                i.m.track(r.SpadeEventType.OnboardingEvent, e)
            },
            d = function(e) {
                var t = {
                    source: a.HomepageCTA,
                    action: e
                };
                i.m.track(r.SpadeEventType.OnboardingEvent, t)
            },
            c = function(e, t) {
                var n = {
                    src: r.SpadeEventType.OnboardingEvent,
                    game: t
                };
                i.m.track(e, n)
            },
            u = function(e) {
                i.m.track(r.SpadeEventType.BrowseForYou, e)
            }
    },
    1333: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded,
                isLoggedIn: Object(v.d)(e)
            }
        }
        var i, r = n(0),
            o = n(1),
            l = n(2),
            s = n(9),
            d = n(6),
            c = n(1125),
            u = n(3),
            m = n(1368);
        ! function(e) {
            e[e.BrowseForYouPage = 0] = "BrowseForYouPage", e[e.BrowseGamePage = 1] = "BrowseGamePage", e[e.BrowseCommunitiesPage = 2] = "BrowseCommunitiesPage", e[e.BrowsePopularPage = 3] = "BrowsePopularPage", e[e.BrowseCreativePage = 4] = "BrowseCreativePage"
        }(i || (i = {}));
        var p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.userDataLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.props.latencyTracking.reportInteractive(), [4, l.n.experiments.getAssignment(c.c)];
                                case 1:
                                    return e = n.sent(), [4, l.n.experiments.getAssignment(c.d)];
                                case 2:
                                    return t = n.sent(), Object(c.f)(e, t) && this.setState({
                                        forYouAssignment: t
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = [o.createElement(u._18, {
                        key: i.BrowseGamePage,
                        active: this.props.activeTab === i.BrowseGamePage,
                        linkTo: "/directory",
                        "data-a-target": "browse-games-tab"
                    }, Object(l.d)("Games", "BrowseHeader")), o.createElement(u._18, {
                        key: i.BrowseCommunitiesPage,
                        active: this.props.activeTab === i.BrowseCommunitiesPage,
                        linkTo: "/directory/communities",
                        "data-a-target": "browse-communities-tab"
                    }, Object(l.d)("Communities", "BrowseHeader")), o.createElement(u._18, {
                        key: i.BrowsePopularPage,
                        active: this.props.activeTab === i.BrowsePopularPage,
                        linkTo: "/directory/all",
                        "data-a-target": "browse-popular-tab"
                    }, Object(l.d)("Popular", "BrowseHeader")), o.createElement(u._18, {
                        key: i.BrowseCreativePage,
                        active: this.props.activeTab === i.BrowseCreativePage,
                        linkTo: "/directory/creative",
                        "data-a-target": "browse-creative-tab"
                    }, Object(l.d)("Creative", "BrowseHeader"))];
                    if (this.props.isLoggedIn && this.userDataLoaded() && this.props.data.currentUser && Object(c.g)(new Date(this.props.data.currentUser.createdAt)) && this.state.forYouAssignment) {
                        var t = o.createElement(u._18, {
                            key: i.BrowseForYouPage,
                            active: this.props.activeTab === i.BrowseForYouPage,
                            linkTo: "/directory/foryou",
                            "data-a-target": "browse-for-you-tab"
                        }, Object(l.d)("For You", "BrowseHeader"));
                        this.state.forYouAssignment === c.b.First ? e.unshift(t) : this.state.forYouAssignment === c.b.Last && e.push(t)
                    }
                    return o.createElement(u.U, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(u._19, null, e))
                }, t = r.__decorate([Object(d.c)("BrowseHeader"), Object(s.a)(m, {
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                })], t)
            }(o.Component),
            g = p,
            f = n(8),
            v = n(19),
            h = Object(f.a)(a, null)(g);
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return h
        })
    },
    1334: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(v.bindActionCreators)({
                onCloseModal: h.c
            }, e)
        }

        function i(e) {
            return Object(v.bindActionCreators)({
                onCloseModal: h.c
            }, e)
        }

        function r(e) {
            return Object(v.bindActionCreators)({
                onShowModal: h.d
            }, e)
        }
        var o = n(0),
            l = n(1),
            s = n(2),
            d = n(1057),
            c = n(1051),
            u = n(52),
            m = n(406),
            p = n(14),
            g = n(954),
            f = n(8),
            v = n(11),
            h = n(50),
            y = n(416),
            k = n(9),
            b = n(6),
            S = n(31),
            w = n(134),
            _ = n(23),
            N = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(s.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(s.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(s.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(s.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(s.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(s.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            },
            E = n(3),
            C = n(1372),
            F = (n(1373), "error-message"),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? l.createElement(E.U, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(E._21, {
                            color: E.F.Error,
                            type: E._26.H4,
                            "data-test-selector": F
                        }, N(t.state.error))) : null
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
                                        return this.props.banUserFromCommunity ? (e = o.__assign({}, Object(_.a)({
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
                                        return t = n.sent(), null === t.data.banUserFromCommunity.error ? (s.n.tracking.track(p.SpadeEventType.CommunityModeration, {
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
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(E.P, {
                        position: E._2.Relative
                    }, l.createElement(E._17, {
                        background: E.m.Base,
                        className: "stream-ban-modal"
                    }, l.createElement(E.U, {
                        padding: 2
                    }, this.renderErrorMessage(), l.createElement(E.U, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(E._21, {
                        type: E._26.H4
                    }, Object(s.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), l.createElement(E._17, {
                        borderTop: !0
                    }, l.createElement(E.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(E._21, {
                        bold: !0
                    }, Object(s.d)("Reason (Required)", "StreamBanModal")), l.createElement(E.Q, {
                        type: E.R.Text,
                        placeholder: Object(s.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), l.createElement(E._17, {
                        borderTop: !0
                    }, l.createElement(E.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: E._22.Center
                    }, l.createElement(E.U, {
                        display: E.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(E.u, {
                        type: E.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(s.d)("Cancel", "StreamBanModal"))), l.createElement(E.U, {
                        display: E.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(E.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(s.d)("Ban", "StreamBanModal")))))), l.createElement(w.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            T = Object(S.compose)(Object(k.a)(C, {
                name: "banUserFromCommunity"
            }))(D),
            O = Object(f.a)(null, a)(T),
            U = (n(1374), n(1375)),
            I = "error-message",
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? l.createElement(E.U, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(E._21, {
                            color: E.F.Error,
                            type: E._26.H4,
                            "data-test-selector": I
                        }, N(t.state.error))) : null
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
                                        return this.props.timeoutUserFromCommunity ? (e = o.__assign({}, Object(_.a)({
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
                                        return t = n.sent(), null === t.data.timeoutUserFromCommunity.error ? (s.n.tracking.track(p.SpadeEventType.CommunityModeration, {
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
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(E.P, {
                        position: E._2.Relative
                    }, l.createElement(E._17, {
                        background: E.m.Base,
                        className: "stream-timeout-modal"
                    }, l.createElement(E.U, {
                        padding: 2
                    }, this.renderErrorMessage(), l.createElement(E.U, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(E._21, {
                        type: E._26.H4
                    }, Object(s.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), l.createElement(E._17, {
                        borderTop: !0
                    }, l.createElement(E.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(E._21, {
                        bold: !0
                    }, Object(s.d)("Reason (Required)", "StreamTimeoutModal")), l.createElement(E.Q, {
                        type: E.R.Text,
                        placeholder: Object(s.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), l.createElement(E.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(E._21, {
                        bold: !0
                    }, Object(s.d)("Duration", "StreamTimeoutModal")), l.createElement(E._14, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, l.createElement("option", {
                        value: "2"
                    }, Object(s.d)("2 hours", "StreamTimeoutModal")), l.createElement("option", {
                        value: "4"
                    }, Object(s.d)("4 hours", "StreamTimeoutModal")), l.createElement("option", {
                        value: "8"
                    }, Object(s.d)("8 hours", "StreamTimeoutModal")), l.createElement("option", {
                        value: "12"
                    }, Object(s.d)("12 hours", "StreamTimeoutModal")), l.createElement("option", {
                        value: "24"
                    }, Object(s.d)("24 hours", "StreamTimeoutModal")))), l.createElement(E._17, {
                        borderTop: !0
                    }, l.createElement(E.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: E._22.Center
                    }, l.createElement(E.U, {
                        display: E.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(E.u, {
                        type: E.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(s.d)("Cancel", "StreamTimeoutModal"))), l.createElement(E.U, {
                        display: E.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(E.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(s.d)("Timeout", "StreamTimeoutModal")))))), l.createElement(w.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            A = Object(S.compose)(Object(k.a)(U, {
                name: "timeoutUserFromCommunity"
            }))(P),
            x = Object(f.a)(null, i)(A),
            j = n(1376),
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(O, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(x, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? l.createElement(y.a, null, l.createElement(E.v, {
                        ariaLabel: Object(s.d)("Moderation", "DirectoryGamePage"),
                        icon: E._9.ChatRiskFlag
                    }), l.createElement(E.p, {
                        direction: E.q.BottomRight,
                        size: E.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? l.createElement(E.S, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, l.createElement(E.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(s.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? l.createElement(E.S, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, l.createElement(E.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(s.d)("Timeout", "StreamFlag"))) : null
                }, t = o.__decorate([Object(k.a)(j, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(b.c)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            G = B,
            L = Object(f.a)(null, r)(G),
            R = n(1154),
            M = (n(1377), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.getLinkTo = function(e, n) {
                        var a = t.props.directoryType === g.a.Communities ? p.PageviewMedium.Community : p.PageviewMedium.Game;
                        return t.props.trackingMedium && (a = t.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: a,
                                content: p.PageviewContent.Live,
                                content_index: n
                            }
                        }
                    }, t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, s.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), "yes" === e && s.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this.props.streamNode,
                        t = this.props.streamIndex;
                    if (!e.broadcaster) return null;
                    var n = null,
                        a = null;
                    if (this.props.directoryType === g.a.Communities && (n = l.createElement(E.U, {
                            className: "card card__flag",
                            position: E._2.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, l.createElement(L, {
                            communityName: this.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        }))), this.props.directoryType === g.a.Communities && e.game) a = l.createElement(d.a, {
                        imageSrc: e.previewImageURL || s.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || R.a,
                        channelName: Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: e.game.boxArtURL || s.a.defaultBoxArtURL,
                        gameTitle: e.game.name,
                        gameLinkTo: this.getLinkTo(Object(m.d)(e.game.name), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type
                    });
                    else {
                        var i = null;
                        this.state.isPremiereExperimentActive && "string" == typeof e.type && e.type && (i = l.createElement(E.U, {
                            position: E._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            padding: .5
                        }, l.createElement(c.a, {
                            type: e.type
                        }))), a = l.createElement(E.U, {
                            position: E._2.Relative
                        }, l.createElement(E._27, {
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            title: e.title || R.a,
                            imageAlt: e.broadcaster.login + " cover image",
                            imageSrc: e.previewImageURL,
                            info: Object(R.b)(e.viewersCount, Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0)),
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        }), i)
                    }
                    return l.createElement("div", {
                        "data-target": t ? "" : "directory-first-item",
                        style: {
                            order: t
                        }
                    }, l.createElement(E.U, {
                        className: "card",
                        position: E._2.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": "directory-game__card_container"
                    }, a, n))
                }, t
            }(l.Component)),
            V = M;
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return "directory-game__card_container"
        }), n.d(t, "b", function() {
            return V
        })
    },
    1368: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowseHeader_User"
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
                end: 69
            }
        };
        n.loc.source = {
            body: "query BrowseHeader_User {\n  currentUser {\n    id\n    createdAt\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1369: function(e, t, n) {
        "use strict";
        var a = n(0),
            i = n(1),
            r = n(2),
            o = n(134),
            l = n(30),
            s = n(9),
            d = n(50),
            c = n(1297),
            u = n(1298),
            m = n(3),
            p = n(1370),
            g = (n(1371), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        followCount: 0
                    }, n.getAndStoreShuffledGameCards = function() {
                        n.props.data && (n.shuffledGameCards = Object(c.a)(n.props.data.games.edges.map(function(e, t) {
                            var a = e.node;
                            return i.createElement(m.U, {
                                key: a.id
                            }, i.createElement(u.a, {
                                info: "",
                                title: a.name,
                                imageAlt: a.name,
                                imageSrc: a.boxArtURL,
                                onFollow: n.onFollow,
                                onUnfollow: n.onUnfollow,
                                "data-a-target": "follow-game-card-" + t
                            }))
                        })))
                    }, n.onClickContinue = function() {
                        n.props.onContinue && n.props.onContinue(), r.n.store.dispatch(Object(d.c)())
                    }, n.onFollow = function() {
                        n.setState(function(e) {
                            return {
                                followCount: e.followCount + 1
                            }
                        }), n.props.onFollowChange && n.props.onFollowChange()
                    }, n.onUnfollow = function() {
                        n.setState(function(e) {
                            return {
                                followCount: e.followCount - 1
                            }
                        }), n.props.onFollowChange && n.props.onFollowChange()
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return !this.props.data || this.props.data.loading ? null : (this.shuffledGameCards || this.getAndStoreShuffledGameCards(), i.createElement(m._17, {
                        className: "following-games-modal",
                        background: m.m.Base,
                        padding: 2,
                        overflow: m.Y.Hidden,
                        "data-a-target": "follow-games-modal",
                        display: m.H.Flex,
                        flexDirection: m.J.Column,
                        flexWrap: m.K.NoWrap
                    }, i.createElement(m.U, {
                        flexGrow: 0,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: m._22.Center,
                        display: m.H.Flex,
                        flexDirection: m.J.Column,
                        alignContent: m.b.Center
                    }, i.createElement(m.U, {
                        margin: {
                            bottom: .5
                        }
                    }, i.createElement(m._21, {
                        fontSize: m.L.Size4,
                        color: m.F.Base,
                        bold: !0
                    }, Object(r.d)("Choose some games that you'd like to follow.", "FollowGamesModal"))), i.createElement(m._21, {
                        fontSize: m.L.Size5,
                        color: m.F.Alt
                    }, Object(r.d)("This will let you pin your favorites for easy access.", "FollowGamesModal"))), i.createElement(m.U, {
                        className: "following-games-modal__list",
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1
                    }, i.createElement(l.b, {
                        suppressScrollX: !0
                    }, i.createElement(m.U, {
                        padding: 1
                    }, i.createElement(m._33, {
                        childWidth: m._34.Small,
                        gutterSize: m._35.Small,
                        placeholderItems: 99
                    }, this.shuffledGameCards)))), i.createElement(m.U, {
                        display: m.H.Flex,
                        justifyContent: m.T.Center,
                        padding: {
                            y: 1
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, i.createElement(m.u, {
                        size: m.x.Large,
                        onClick: this.onClickContinue,
                        disabled: 0 === this.state.followCount
                    }, Object(r.d)("Continue", "FollowGamesModal"))), i.createElement(o.a, null)))
                }, t = a.__decorate([Object(s.a)(p, {
                    options: {
                        variables: {
                            limit: 40
                        }
                    }
                })], t)
            }(i.Component));
        n.d(t, "a", function() {
            return g
        })
    },
    1370: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowGamesModal_Games"
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
                end: 180
            }
        };
        n.loc.source = {
            body: "query FollowGamesModal_Games($limit: Int) {\n  games(first: $limit) {\n    edges {\n      node {\n        id\n        name\n        boxArtURL(width: 285 height: 380)\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1371: function(e, t) {},
    1372: function(e, t) {
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "error"
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
                end: 130
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamBan_BanUser($input: BanUserFromCommunityInput!) {\n  banUserFromCommunity(input: $input) {\n    error\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1373: function(e, t) {},
    1374: function(e, t) {},
    1375: function(e, t) {
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
                                alias: null,
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
                                    value: "error"
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
                end: 188
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamTimeout_TimeoutUser($input: TimeoutUserFromCommunityInput!) {\n  timeoutUserFromCommunity(input: $input) {\n    community {\n      id\n      name\n    }\n    error\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1376: function(e, t) {
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
                                            value: "permissions"
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
                                                    value: "banning"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "timingOut"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 205
            }
        };
        n.loc.source = {
            body: "query DirectoryGame_CommunityPermissions($name: String!) {\n  community(name: $name) {\n    id\n    self {\n      permissions {\n        banning\n        timingOut\n      }\n    }\n  }\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1377: function(e, t) {},
    1663: function(e, t) {
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
                                            value: "cursor"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "hasNextPage"
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
                end: 386
            }
        };
        n.loc.source = {
            body: "query BrowsePage_AllDirectories($limit: Int, $cursor: Cursor, $directoryFilters: [DirectoryFilter!]) {\n  directories(first: $limit, after: $cursor, filterBySet: $directoryFilters) {\n    edges {\n      cursor\n      node {\n        id\n        displayName\n        name\n        avatarURL(width: 285 height: 380)\n        viewersCount\n      }\n    }\n    pageInfo {\n      hasNextPage\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1664: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityStreams_Streams"
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
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
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
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
                end: 582
            }
        };
        n.loc.source = {
            body: "query CommunityStreams_Streams($name: String!, $type: DirectoryType!, $limit: Int) {\n  directory(name: $name, type: $type) {\n    id\n    streams(first: $limit) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          viewersCount\n          previewImageURL(width: 320 height: 180)\n          broadcaster {\n            id\n            login\n            displayName\n          }\n          game {\n            id\n            boxArtURL(width: 285 height: 380)\n            name\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1665: function(e, t) {},
    1666: function(e, t) {},
    1667: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowseForYouPage_UserFollows"
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
                end: 202
            }
        };
        n.loc.source = {
            body: "query BrowseForYouPage_UserFollows($limit: Int) {\n  currentUser {\n    id\n    createdAt\n    followedGames(first: $limit) {\n      nodes {\n        id\n        name\n        directoryType\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2005: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                sideNavExpanded: e.ui.sideNavExpanded
            }
        }

        function i(e) {
            return {
                isLoggedIn: Object(M.d)(e)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0),
            o = n(1),
            l = n(31),
            s = n(2),
            d = n(922),
            c = n(918),
            u = n(14),
            m = n(6),
            p = n(8),
            g = n(66),
            f = n(30),
            v = n(9),
            h = n(137),
            y = n(23),
            k = n(406),
            b = n(111),
            S = n(1031),
            w = n(415),
            _ = n(1333),
            N = n(954),
            E = n(1126),
            C = n(3),
            F = n(1663),
            D = "directory-first-item",
            T = "directory-container",
            O = {
                foryou: _.b.BrowseForYouPage,
                games: _.b.BrowseGamePage,
                communities: _.b.BrowseCommunitiesPage,
                popular: _.b.BrowsePopularPage,
                creative: _.b.BrowseCreativePage
            },
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onWindowResize = function() {
                        return requestAnimationFrame(t.updateDisplayAdOrder)
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + T + '"]'),
                            t = document.querySelector('[data-target="' + D + '"]'),
                            n = document.querySelector("#" + w.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(w.b.directory).length && b.a.display(w.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    w.g.addListener(w.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), w.g.removeListener(w.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize()
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directories) return o.createElement(C.X, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return o.createElement(g.a, {
                        message: Object(s.d)("Error loading data.", "BrowseDirectory")
                    });
                    var t = Object(E.b)(this.props.category) === N.a.Communities ? u.PageviewContent.Community : u.PageviewContent.Game,
                        n = this.props.data.directories.edges.map(function(n, a) {
                            var i = n.node;
                            return o.createElement("div", {
                                key: i.id,
                                "data-target": a ? "" : D,
                                style: {
                                    order: a
                                }
                            }, o.createElement(C.U, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-page__card-container"
                            }, o.createElement(C.t, {
                                linkTo: {
                                    pathname: e.getPathURL(i.name),
                                    state: {
                                        content: t,
                                        content_index: a,
                                        medium: u.PageviewMedium.Browse
                                    }
                                },
                                title: i.displayName,
                                imageAlt: Object(s.d)("{displayName} cover image", {
                                    displayName: i.displayName
                                }, "BrowseDirectory"),
                                imageSrc: i.avatarURL,
                                info: Object(s.d)("{viewerCount,number} viewers", {
                                    viewerCount: i.viewersCount
                                }, "BrowseDirectory"),
                                "data-a-target": "card-" + a,
                                "data-a-id": "card-" + i.displayName.replace(/ /g, "")
                            })))
                        }),
                        a = !this.props.data.loading && !this.props.data.error && !!this.props.data.directories.pageInfo.hasNextPage;
                    return o.createElement(f.b, {
                        className: "browse",
                        "data-a-target": "browse-scroller"
                    }, o.createElement(C.U, {
                        padding: 3
                    }, o.createElement(S.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: w.d.directory,
                        slotID: w.b.directory.banner,
                        adSize: w.c.directory.banner,
                        targeting: {
                            pagetype: w.a.games
                        },
                        autoEnable: !1
                    }), o.createElement(_.a, {
                        activeTab: O[this.props.category]
                    }), this.renderCreateCommunityButton(), o.createElement("div", {
                        "data-target": T
                    }, o.createElement(C._33, {
                        gutterSize: C._35.Small,
                        childWidth: C._34.Small,
                        placeholderItems: 20
                    }, o.createElement(S.a, {
                        key: -1,
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 20,
                            order: 999,
                            width: 300,
                            height: 250
                        },
                        adUnit: w.d.directory,
                        slotID: w.b.directory.rectangle,
                        adSize: w.c.directory.rectangle,
                        targeting: {
                            pagetype: w.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), n), o.createElement(f.a, {
                        enabled: a,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 300
                    })), this.props.children))
                }, t.prototype.getPathURL = function(e) {
                    var t = Object(E.b)(this.props.category);
                    return t === N.a.Communities || t === N.a.Creative ? Object(k.a)(e) : Object(k.d)(e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t.prototype.renderCreateCommunityButton = function() {
                    if ("communities" === this.props.category) return o.createElement(C.U, {
                        display: C.H.Flex,
                        justifyContent: C.T.End,
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(C.u, {
                        linkTo: Object(h.a)("/communities/create"),
                        "data-test-selector": "create-community-button-test"
                    }, Object(s.d)("Create a Community", "BrowseDirectory")))
                }, t
            }(o.Component),
            I = Object(l.compose)(Object(m.c)("BrowseDirectory"), Object(v.a)(F, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: 30,
                            directoryFilters: Object(E.a)(e.category)
                        }
                    }
                },
                props: function(e) {
                    return r.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: F,
                                variables: r.__assign({}, e.data.variables, {
                                    cursor: e.data.directories.edges[e.data.directories.edges.length - 5].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult,
                                        a = n;
                                    return {
                                        directories: r.__assign({}, a.directories, {
                                            edges: Object(y.b)(e.directories.edges, a.directories.edges)
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }))(U),
            P = Object(p.a)(a)(I),
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    s.n.setPageTitle(Object(s.d)("Communities", "BrowseCommunitiesPage"))
                }, t.prototype.render = function() {
                    return o.createElement(P, {
                        category: "communities"
                    })
                }, t
            }(o.Component),
            x = Object(l.compose)(Object(m.c)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: c.a.BrowseCommunities
            }), Object(d.a)({
                location: u.PageviewLocation.BrowseCommunities
            }))(A),
            j = function() {
                return o.createElement(C._17, {
                    borderTop: !0,
                    padding: {
                        top: 3
                    },
                    textAlign: C._22.Center
                }, o.createElement(C._21, {
                    fontSize: C.L.Size4,
                    color: C.F.Alt2
                }, Object(s.d)("Not what you're looking for?", "BrowseCreativePage")), o.createElement(C.U, {
                    margin: {
                        top: 2
                    }
                }, o.createElement(C.u, {
                    type: C.z.Hollow,
                    linkTo: "/directory/game/creative"
                }, Object(s.d)("View All Creative Broadcasters", "BrowseCreativePage"))))
            },
            B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    s.n.setPageTitle(Object(s.d)("Creative", "BrowseCreativePage"))
                }, t.prototype.render = function() {
                    return o.createElement(P, {
                        category: "creative"
                    }, o.createElement(j, null))
                }, t
            }(o.Component),
            G = Object(l.compose)(Object(m.c)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: c.a.BrowseCreative
            }), Object(d.a)({
                location: u.PageviewLocation.BrowseCreative
            }))(B),
            L = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    s.n.setPageTitle(Object(s.d)("All Games", "BrowseGamePage"))
                }, t.prototype.render = function() {
                    return o.createElement(P, {
                        category: "games"
                    })
                }, t
            }(o.Component),
            R = Object(l.compose)(Object(m.c)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: c.a.DirectoryGames
            }), Object(d.a)({
                location: u.PageviewLocation.Directory
            }))(L),
            M = n(19),
            V = n(1369),
            H = n(1125),
            W = n(12),
            q = n(1051),
            z = n(1052),
            Y = n(1058),
            $ = n(15),
            Q = n(1302),
            X = n(1334),
            J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.impressionEventFired = !1, t.setRef = function(e) {
                        return t.element = e
                    }, t.isVisible = function(e) {
                        if (null !== t.element) {
                            var n = t.element.getBoundingClientRect();
                            return n.left < e.right && n.right > e.left
                        }
                        return !1
                    }, t.trackImpression = function() {
                        var e = {
                            channel: t.props.streamNode.title,
                            channel_id: t.props.streamNode.id,
                            action: Q.a.Impression,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(Q.c)(e)
                    }, t.trackClickEvent = function() {
                        var e = {
                            channel: t.props.streamNode.title,
                            channel_id: t.props.streamNode.id,
                            action: Q.a.Click,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(Q.c)(e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : s.i.warn("<StreamThumbnailWithTrackingComponent /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return o.createElement("div", {
                        onClick: this.trackClickEvent
                    }, o.createElement(C.U, {
                        refDelegate: this.setRef
                    }, o.createElement(X.b, {
                        key: this.props.streamIndex,
                        directoryName: this.props.directoryName,
                        directoryType: this.props.directoryType,
                        streamIndex: this.props.streamIndex,
                        streamNode: this.props.streamNode,
                        trackingMedium: this.props.trackingMedium
                    })))
                }, t.prototype.checkVisible = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            return !this.impressionEventFired && this.isVisible(e) && (this.trackImpression(), this.impressionEventFired = !0), [2]
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: $.func
                }, t
            }(o.Component),
            K = J,
            Z = n(1664),
            ee = (n(1665), "community-streams-row__title"),
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderTitle = function() {
                        if (t.props.title) return o.createElement(C.U, {
                            className: "community-streams-row__title"
                        }, o.createElement(C._21, {
                            "data-test-selector": ee,
                            color: C.F.Alt2,
                            fontSize: C.L.Size5,
                            transform: C._25.Uppercase
                        }, o.createElement(W.a, {
                            to: Object(k.d)(t.props.name)
                        }, t.props.title)))
                    }, t.communityStreamDataLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.directory
                    }, t.renderCommunityStreams = function() {
                        if (t.props.data.directory.streams) return t.props.data.directory.streams.edges.filter(function(e) {
                            var t = e.node;
                            return t.broadcaster && t.broadcaster.login
                        }).map(function(e, n) {
                            var a = e.node;
                            return o.createElement(C.U, {
                                key: "community-streams-row-stream-thumbnail-" + a.id,
                                position: C._2.Relative
                            }, o.createElement(C.U, {
                                padding: .5,
                                position: C._2.Absolute,
                                zIndex: C._38.Above
                            }, o.createElement(q.a, {
                                type: z.a.Live
                            })), o.createElement(K, {
                                key: a.id,
                                trackingMedium: u.PageviewMedium.BrowseForYou,
                                directoryName: t.props.name,
                                directoryType: t.props.type,
                                streamIndex: n,
                                streamNode: a
                            }))
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.communityStreamDataLoaded() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.communityStreamDataLoaded() ? o.createElement(C.U, {
                        "data-test-selector": "community-streams-row",
                        flexShrink: 0
                    }, o.createElement(C.U, {
                        alignItems: C.c.Center,
                        display: C.H.Flex,
                        flexWrap: C.K.NoWrap,
                        justifyContent: C.T.Between,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderTitle(), o.createElement(Y.a, {
                        gameName: this.props.name,
                        src: u.PageviewMedium.BrowseForYou
                    })), o.createElement(f.b, null, o.createElement(C.U, {
                        display: C.H.Flex
                    }, o.createElement(C._33, {
                        gutterSize: C._35.Small,
                        childWidth: C._34.Large,
                        noWrap: !0,
                        placeholderItems: 10 - (this.props.data.directory.streams ? this.props.data.directory.streams.edges.length : 0)
                    }, this.renderCommunityStreams())))) : null
                }, t = r.__decorate([Object(v.a)(Z, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.name,
                                limit: 10,
                                type: e.type
                            }
                        }
                    }
                }), Object(m.c)("CommunityStreamsRow")], t)
            }(o.Component),
            ne = te,
            ae = (n(1666), n(1667)),
            ie = "browse-for-you__empty",
            re = "browse-for-you__add_more_games",
            oe = 10,
            le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderPage = function() {
                        return t.userFollowedGamesDataLoaded(t.props) ? t.props.data.currentUser.followedGames && t.props.data.currentUser.followedGames.nodes && t.props.data.currentUser.followedGames.nodes.length ? o.createElement(C.U, null, t.renderFollowedCommunityStreams(), o.createElement(C.U, {
                            margin: {
                                top: .5
                            }
                        }, t.renderAddMoreGamesCTA())) : t.renderEmptyFollowedState() : o.createElement(C.U, null, o.createElement(C.X, {
                            fillContent: !0
                        }))
                    }, t.userFollowedGamesDataLoaded = function(e) {
                        return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                    }, t.renderFollowedCommunityStreams = function() {
                        if (t.props.data.currentUser.followedGames && t.props.data.currentUser.followedGames.nodes && t.props.data.currentUser.followedGames.nodes.length) return t.props.data.currentUser.followedGames.nodes.map(function(e) {
                            return o.createElement(C.U, {
                                key: e.id
                            }, o.createElement(ne, {
                                key: e.id,
                                title: Object(s.d)("BECAUSE YOU FOLLOW {name}", {
                                    name: e.name.toUpperCase()
                                }, "BrowseForYouPage"),
                                name: e.name,
                                type: e.directoryType
                            }))
                        })
                    }, t.renderAddMoreGamesCTA = function() {
                        if (!t.props.data.currentUser.followedGames || !t.props.data.currentUser.followedGames.nodes || t.props.data.currentUser.followedGames.nodes.length < oe) return o.createElement(C.S, {
                            "data-test-selector": re,
                            onClick: t.redirectToCommunitySelectionPage,
                            alpha: !0
                        }, o.createElement(C._17, {
                            alignItems: C.c.Center,
                            border: !0,
                            display: C.H.Flex,
                            justifyContent: C.T.Center,
                            padding: 2
                        }, o.createElement(C.U, {
                            alignItems: C.c.Center,
                            display: C.H.Flex,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(C._8, {
                            asset: C._9.Plus,
                            type: C._10.Alt2
                        })), o.createElement(C._21, {
                            fontSize: C.L.Size5,
                            color: C.F.Alt2
                        }, Object(s.d)("Add More Games", "BrowseForYouPage"))))
                    }, t.renderEmptyFollowedState = function() {
                        return o.createElement(C._17, {
                            background: C.m.Base,
                            display: C.H.Flex,
                            flexDirection: C.J.Column,
                            margin: {
                                bottom: 1
                            },
                            alignItems: C.c.Center,
                            "data-test-selector": ie,
                            className: "browse-for-you__empty"
                        }, o.createElement(V.a, {
                            onContinue: t.refetchFollowedData
                        }))
                    }, t.redirectToDirectory = function() {
                        s.n.history.push("/directory" + location.search)
                    }, t.redirectToCommunitySelectionPage = function() {
                        s.n.history.push("/hi" + location.search), window.location.reload()
                    }, t.refetchFollowedData = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.props.data.refetch()];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return s.n.setPageTitle(Object(s.d)("For You", "BrowseForYouPage")), this.props.isLoggedIn ? [3, 1] : (this.redirectToDirectory(), [3, 4]);
                                case 1:
                                    return [4, s.n.experiments.getAssignment(H.c)];
                                case 2:
                                    return e = n.sent(), [4, s.n.experiments.getAssignment(H.d)];
                                case 3:
                                    t = n.sent(), Object(H.f)(e, t) || this.redirectToDirectory(), n.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.userFollowedGamesDataLoaded(e) && !Object(H.g)(new Date(e.data.currentUser.createdAt)) && this.redirectToDirectory()
                }, t.prototype.componentDidUpdate = function() {
                    this.userFollowedGamesDataLoaded(this.props) && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(f.b, null, o.createElement(C.U, {
                        className: "browse-for-you-page",
                        padding: 3,
                        fullWidth: !0
                    }, o.createElement(_.a, {
                        activeTab: _.b.BrowseForYouPage
                    }), this.props.isLoggedIn && this.renderPage()))
                }, t = r.__decorate([Object(m.c)("DirectoryPage", {
                    destination: c.a.BrowseForYou
                }), Object(v.a)(ae, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: oe
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(d.a)({
                    location: u.PageviewLocation.BrowseForYou
                })], t)
            }(o.Component),
            se = le,
            de = Object(p.a)(i)(se);
        n.d(t, "BrowseCommunitiesPage", function() {
            return x
        }), n.d(t, "BrowseCreativePage", function() {
            return G
        }), n.d(t, "BrowseGamePage", function() {
            return R
        }), n.d(t, "BrowseForYouPage", function() {
            return de
        })
    },
    918: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
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
    922: function(e, t, n) {
        "use strict";

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0, s.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = a.referenceTracking,
                                    o = r.content,
                                    l = r.medium,
                                    d = r.content_index;
                                s.n.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return i.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return o.createElement(t, i.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                i = r.stringify(t);
                            i.length > 0 && (a = "?" + i), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: a
                            })
                        }
                        return n
                    }, a
                }(o.Component);
                return Object(l.f)(n)
            }
        }
        var i = n(0),
            r = n(21),
            o = n(1),
            l = n(12),
            s = n(2);
        n.d(t, "a", function() {
            return a
        })
    },
    954: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
        }(a || (a = {}))
    }
});
//# sourceMappingURL=pages.browse-community-f0e410ae22271c26ad128ed7d29d5f2e.js.map