webpackJsonp([43], {
    "+GT7": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("F8kA"),
            o = n("6sO2"),
            l = n("IOwa"),
            s = n("Odds"),
            c = (n("LEV+"), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return "yes" === e.sent() && o.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = a.createElement(s.V, {
                        display: s.H.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, a.createElement(s._1, {
                        label: Object(o.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: a.createElement(r.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return a.createElement("div", i.__assign({
                        className: "live-channel-card"
                    }, Object(s._40)(this.props)), a.createElement(s.A, {
                        key: this.props.title
                    }, a.createElement(s.V, {
                        fullWidth: !0
                    }, a.createElement(s.j, {
                        overflow: !0
                    }, a.createElement("div", null, a.createElement(r.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, a.createElement(s.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: s.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), a.createElement(s.B, null, a.createElement(r.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, a.createElement(s.Q, {
                        margin: {
                            top: .5
                        }
                    }, a.createElement(s._23, {
                        type: s._28.H3,
                        fontSize: s.L.Size5,
                        lineHeight: s.W.Body,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), a.createElement(s.V, {
                        className: "live-channel-card__meta",
                        display: s.H.Flex,
                        flexWrap: s.K.NoWrap
                    }, e, a.createElement(s._23, {
                        type: s._28.Span,
                        ellipsis: !0
                    }, t)))))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? a.createElement(r.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, a.createElement(s._19, {
                        className: "live-channel-card__boxart",
                        position: s._4.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, a.createElement(s._31, {
                        display: s.H.Block,
                        direction: s._33.Bottom,
                        label: t
                    }, a.createElement(s.C, {
                        imageSrc: n,
                        imageAlt: t,
                        aspect: s.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? a.createElement(s.V, {
                        position: s._4.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, a.createElement(l.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t
            }(a.Component)),
            d = c;
        n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return d
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
            l = n("Us7i"),
            s = n("QG7y"),
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
                                        return n.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = n.sent(), Object(s.h)(t.getSlotElementId()), this.setState({
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
                            if (n.props.slotID === s.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === s.b.directory.banner) {
                                return void((i = n.slotRef.querySelector(c)) && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === s.b.directory.rectangle) {
                                var i;
                                return void((i = n.slotRef.querySelector(d)) && 1 !== i.clientWidth && n.setState({
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
                    s.g.addListener(s.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), s.g.removeListener(s.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
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
            m = Object(i.a)(function(e) {
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
            l = n("Aj/L"),
            s = n("TToO"),
            c = n("U7vG"),
            d = n("BhyV"),
            u = n("6sO2"),
            m = n("7vx8"),
            p = n("oIkB"),
            g = n("vH/s"),
            h = n("Odds"),
            v = n("z4nH"),
            f = n("rG8a"),
            y = n("U9Fb"),
            k = "follow-game-button-component",
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.follow = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.followGame && this.props.data && this.props.data.game ? (e = s.__assign({}, Object(p.a)({
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
                                                a.game && (a.game.self.follow = i.game.self.follow, e.writeQuery({
                                                    query: f,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: a
                                                }))
                                            }
                                        }), [4, this.props.followGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(g.SpadeEventType.GameFollow), [2]
                                }
                            })
                        })
                    }, t.unfollow = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return s.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = s.__assign({}, Object(p.a)({
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
                                                n.game && (n.game.self.follow = null, e.writeQuery({
                                                    query: f,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: n
                                                }))
                                            }
                                        }), [4, this.props.unfollowGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(g.SpadeEventType.GameUnfollow), [2]
                                }
                            })
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = Object(u.d)("Follow", "FollowGameButton");
                    if (!this.props.isLoggedIn) return c.createElement(h.u, {
                        icon: h._11.Heart,
                        ariaLabel: e,
                        "data-test-selector": k,
                        onClick: this.props.showLoginModal
                    }, e);
                    if (this.isLoading) return c.createElement(h._3, {
                        width: 70,
                        height: 30
                    });
                    if (this.isFollowing) {
                        var t = Object(u.d)("Unfollow", "FollowGameButton");
                        return c.createElement(h.v, {
                            ariaLabel: t,
                            "data-test-selector": k,
                            icon: h._11.Heart,
                            onClick: this.unfollow,
                            statusAlertIcon: h._11.Unheart
                        })
                    }
                    return c.createElement(h.u, {
                        icon: h._11.Heart,
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
                        kind: e === g.SpadeEventType.GameFollow ? "follow" : "unfollow",
                        name: this.props.gameName
                    })
                }, t
            }(c.Component),
            S = Object(d.compose)(Object(m.a)(f, {
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
            _ = Object(i.a)(function(e) {
                return {
                    isLoggedIn: Object(l.d)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    showLoginModal: function() {
                        return Object(o.f)(r.a.FollowGameButton)
                    }
                }, e)
            })(S);
        n.d(t, "a", function() {
            return _
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
                                var t, f, y, k, b, S;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (t = u ? d.a.Timeout : d.a.Ban, f = e(n.ownProps), y = f.channelID, k = f.onPushMessage, !n.mutate) return [3, 5];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, n.mutate(Object(l.a)({
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
                                                    if (t > h) {
                                                        var a = Math.floor(t / h);
                                                        t -= a * h, n += a + "w"
                                                    }
                                                    if (t > g) {
                                                        var r = Math.floor(t / g);
                                                        t -= r * g, n += r + "d"
                                                    }
                                                    if (t > p) {
                                                        var o = Math.floor(t / p);
                                                        t -= o * p, n += o + "h"
                                                    }
                                                    if (t > m) {
                                                        var l = Math.floor(t / m);
                                                        t -= l * m, n += l + "m"
                                                    }
                                                    return t > 0 && (n += t + "s"), n
                                                }(u)
                                            }))];
                                        case 2:
                                            return a.sent(), b = Object(c.a)(t, o, null, u), k && k(b), [2, b];
                                        case 3:
                                            throw S = a.sent(), r.i.error(S, "Unable to ban user"), k && k(Object(s.a)(i())), new Error(i());
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            throw k && k(Object(s.a)(i())), new Error(i());
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
            l = n("oIkB"),
            s = n("aUOx"),
            c = n("Ncf8"),
            d = n("qkCi"),
            u = n("MApH"),
            m = (n.n(u), 60),
            p = 60 * m,
            g = 24 * p,
            h = 7 * g,
            v = 4 * h
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
                                            value: "rules"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "summary"
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
        t.a = function(e, t, n, o, l) {
            var s = (n = n || t && t.lastBroadcast && t.lastBroadcast.game) && n.product;
            if (n && s) {
                Object(r.d)({
                    user: t,
                    game: n,
                    product: s,
                    info: e,
                    location: o
                });
                var c = "";
                t && t.settings.isCommerceRevShareEnabled && (c = "&br_id=" + t.id),
                    function(e, t) {
                        var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                        n && !Object(i.a)() && (n.focus(), Object(a.a)(n, function(e) {
                            t(e)
                        }))
                    }(e.purchaseURL + c, l)
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
            l = n("mi6k"),
            s = n("CSlQ"),
            c = n("Odds"),
            d = (n("kuCN"), "embed-overlay");
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
                            s = e.thumbnailURL,
                            u = e.type,
                            m = e.viewCount,
                            p = a && a > 0 ? Object(l.a)(a) : "";
                        return r.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": d
                        }, r.createElement(c.j, {
                            ratio: c.k.Aspect16x9
                        }, r.createElement(c.V, null, r.createElement(c.Q, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: c._4.Absolute
                        }, r.createElement("img", {
                            src: s
                        })), r.createElement(c.V, {
                            className: "embed-card__overlay",
                            position: c._4.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(c.V, {
                            className: "embed-card__play",
                            display: c.H.Flex,
                            justifyContent: c.U.Center,
                            position: c._4.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(c._10, {
                            asset: c._11.Play,
                            width: 50,
                            height: 50
                        })), r.createElement(c.V, {
                            position: c._4.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && r.createElement(c._23, null, Object(o.c)(new Date(n), "medium")), r.createElement(c.V, null, u === i.Stream && r.createElement(c.V, {
                            display: c.H.Inline,
                            margin: {
                                right: .5
                            }
                        }, r.createElement(c.X, null)), m && r.createElement("span", null, t.getFormattedViewCount(m, u)))), r.createElement(c.V, {
                            position: c._4.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, p && r.createElement(c.V, null, r.createElement(c._23, null, p)))), r.createElement(c._19, {
                            position: c._4.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: c.L.Size5
                        }, u === i.Stream && r.createElement(c._1, {
                            label: Object(o.d)("Live", "EmbedOverlayPill"),
                            type: c._2.Live
                        }), u === i.Video && r.createElement(c._1, {
                            label: Object(o.d)("Video", "EmbedOverlayPill"),
                            type: c._2.Overlay
                        }), u === i.Clip && r.createElement(c._1, {
                            label: Object(o.d)("Clip", "EmbedOverlayPill"),
                            type: c._2.Overlay
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
                    return this.state.showOverlay ? this.getOverlayComponent() : r.createElement(c.j, {
                        ratio: c.k.Aspect16x9
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
            m = Object(s.c)("EmbedOverlay")(u);
        n.d(t, !1, function() {
            return d
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
            l = n("CSlQ"),
            s = n("RH2O"),
            c = n("2KeS"),
            d = n("V5M+"),
            u = n("TToO"),
            m = n("J4ib"),
            p = n("F8kA"),
            g = n("NY9D"),
            h = n("HW6M"),
            v = n("+8VM"),
            f = n("sikP"),
            y = n("oSFp"),
            k = n("mw/a"),
            b = n("6BvN"),
            S = n("rCmJ"),
            _ = n("Odds"),
            C = (n("Jg0G"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectOnFocus = function(e) {
                        e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(_.V, u.__assign({
                        position: _._4.Relative,
                        className: "selectable-input-wrapper"
                    }, Object(_._40)(this.props)), a.createElement(_.R, {
                        type: _.S.Text,
                        value: this.props.text,
                        readOnly: !0,
                        onFocus: this.selectOnFocus,
                        icon: this.props.iconAsset,
                        id: this.props.id
                    }), this.props.children)
                }, t = u.__decorate([Object(l.c)("SelectableInput")], t)
            }(a.Component)),
            E = n("8Wuk"),
            N = n("2hJ3"),
            w = n("yDzg"),
            D = n("WNmM"),
            O = [{
                type: E.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: E.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: E.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: E.b.Copy
            }],
            F = function(e) {
                return a.createElement(_.V, {
                    className: "clips-social-share",
                    display: _.H.Flex,
                    flexWrap: _.K.NoWrap
                }, O.map(function(t) {
                    return a.createElement(_.V, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(E.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(w.a)(e.clip.url, t.params),
                        onShareClick: Object(D.c)(e.clip, e.pageType)
                    }))
                }))
            },
            T = n("jetF"),
            I = n("7vx8");
        ! function(e) {
            e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
        }(i || (i = {}));
        var V = n("ZoyS"),
            L = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderMenuItem = function(e) {
                        var t = n.menuData.get(e);
                        return e && t ? a.createElement(_.T, {
                            key: t.display,
                            onClick: t.destinationHandler,
                            "data-a-target": "clip-moderation-button-" + t.display
                        }, a.createElement(_.V, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, t.display)) : null
                    }, n.menuData = new Map([
                        [i.Report, {
                            display: Object(m.d)("Report", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.Report)
                            }
                        }],
                        [i.Delete, {
                            display: Object(m.d)("Delete", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.Delete)
                            }
                        }],
                        [i.DeleteAll, {
                            display: Object(m.d)("Delete All Clips from Video", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.DeleteAll)
                            }
                        }],
                        [i.Ban, {
                            display: Object(m.d)("Ban User", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(i.Ban)
                            }
                        }],
                        [i.Timeout, {
                            display: Object(m.d)("Timeout User (24 hr)", "ModerationMenu"),
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
                        l = r || o || n,
                        s = o || n,
                        c = [i.Report];
                    return l && c.push(i.Delete), s && (c.push(i.DeleteAll), c.push(i.Ban), c.push(i.Timeout)), a.createElement(_.V, {
                        className: "moderation-menu"
                    }, a.createElement(T.a, null, a.createElement(_.u, {
                        type: _.z.Hollow,
                        icon: _._11.More,
                        ariaLabel: Object(m.d)("More Options", "ModerationMenu"),
                        "data-a-target": "moderation-menu-button"
                    }), a.createElement(_.p, {
                        direction: _.q.TopRight
                    }, a.createElement(_.V, {
                        padding: {
                            y: .5
                        }
                    }, this.moderationMenuRender(c)))))
                }, t.prototype.moderationMenuRender = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        return t.renderMenuItem(e)
                    })
                }, t = u.__decorate([Object(I.a)(V), Object(l.c)("ModerationMenu")], t)
            }(a.Component),
            A = (n("MjlB"), 2e3),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingBalloon: !1
                    }, t.timeoutID = null, t.copyClipURL = function() {
                        var e;
                        try {
                            e = Object(N.a)(t.props.clip.url)
                        } catch (e) {
                            return void r.i.warn("Failed to copy", e)
                        }
                        e && (t.setState({
                            isShowingBalloon: !0
                        }), t.timeoutID = setTimeout(function() {
                            t.setState({
                                isShowingBalloon: !1
                            })
                        }, A), Object(D.c)(t.props.clip, t.props.pageType)(E.b.CopyInput))
                    }, t.dismissBalloon = function() {
                        t.setState({
                            isShowingBalloon: !1
                        }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = a.createElement(p.a, {
                        to: "/" + this.props.clip.broadcaster.login,
                        onClick: this.props.closeModal,
                        "data-a-target": "clip-modal-broadcaster-link"
                    }, this.props.clip.broadcaster.login);
                    return e = this.props.clip.game ? Object(r.d)("{broadcaster} playing {game}", {
                        broadcaster: t,
                        game: a.createElement(p.a, {
                            to: "" + Object(g.c)(this.props.clip.game.name),
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-game-link"
                        }, this.props.clip.game.name)
                    }, "ClipsViewModalContent") : Object(r.d)("{broadcaster}", {
                        broadcaster: t
                    }, "ClipsViewModalContent"), a.createElement(_._19, {
                        className: "clips-view-modal-content",
                        background: _.m.Base
                    }, a.createElement(_.V, {
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
                    }))), a.createElement(_.V, {
                        padding: {
                            x: 2,
                            bottom: 2
                        }
                    }, a.createElement(_.V, {
                        display: _.H.Flex,
                        flexWrap: _.K.NoWrap
                    }, a.createElement(_.V, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(S.a, {
                        onClickOut: this.dismissBalloon
                    }, a.createElement(C, {
                        text: this.props.clip.url,
                        icon: !0,
                        iconAsset: _._11.Link,
                        onSelection: this.copyClipURL,
                        "data-a-target": "clip-share-input"
                    }, a.createElement(_.p, {
                        show: this.state.isShowingBalloon,
                        direction: _.q.TopRight
                    }, a.createElement(_.T, {
                        onClick: this.dismissBalloon
                    }, a.createElement(_.V, {
                        padding: 1
                    }, a.createElement(_._23, {
                        bold: !0
                    }, Object(r.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), a.createElement(F, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    }), a.createElement(L, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState
                    }))), a.createElement(_.V, {
                        padding: {
                            x: 2,
                            bottom: 2
                        },
                        display: _.H.Flex,
                        flexWrap: _.K.NoWrap,
                        justifyContent: _.U.Between,
                        fullWidth: !0
                    }, a.createElement(_.V, {
                        flexGrow: 1
                    }, a.createElement(_.Q, {
                        ellipsis: !0
                    }, a.createElement(_._19, {
                        display: _.H.Flex,
                        flexWrap: _.K.NoWrap,
                        fontSize: _.L.Size5
                    }, a.createElement(_.V, {
                        ellipsis: !0
                    }, this.props.clip.title), a.createElement(_.V, {
                        flexShrink: 0
                    }, a.createElement(_._23, {
                        type: _._28.Span,
                        color: _.F.Alt2
                    }, " • ", Object(r.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsViewModalContent"))))), a.createElement(_.Q, {
                        ellipsis: !0
                    }, a.createElement(_._19, {
                        color: _.F.Alt2
                    }, e, " • ", Object(r.d)("Clipped by {curator}", {
                        curator: a.createElement(p.a, {
                            to: "/" + this.props.clip.curator.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-curator-link"
                        }, this.props.clip.curator.login)
                    }, "ClipsViewModalContent")))), a.createElement(_._19, {
                        display: _.H.Flex,
                        margin: {
                            bottom: 2,
                            left: 2
                        },
                        fontSize: _.L.Size5,
                        color: _.F.Alt2,
                        flexShrink: 0
                    }, a.createElement(_.V, {
                        margin: {
                            right: .5
                        },
                        alignItems: _.c.Center,
                        display: _.H.Flex
                    }, a.createElement(_._10, {
                        asset: _._11.GlyphViews
                    })), Object(r.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsViewModalContent"))))
                }, t = u.__decorate([Object(l.c)("ClipsViewModalContent")], t)
            }(a.Component),
            j = (n("GOrw"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onKeyDown = function(e) {
                        var n = e.charCode || e.keyCode;
                        n === b.a.Left ? t.updateClipBackward() : n === b.a.Right && t.updateClipForward()
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
                    return this.props.clipIndex && this.props.clipIndex > 0 && (e = a.createElement(_.V, {
                        position: _._4.Absolute,
                        display: _.H.Flex,
                        alignItems: _.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--left"
                    }, a.createElement(_.v, {
                        ariaLabel: Object(r.d)("Previous clip", "ClipsViewModalNavigation"),
                        type: _.w.Primary,
                        icon: _._11.AngleLeft,
                        onClick: this.updateClipBackward,
                        "data-test-selector": "clips-view-modal-content-back"
                    }))), a.createElement(_.V, {
                        className: "clips-view-modal-content"
                    }, e, a.createElement(R, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState,
                        pageType: this.props.pageType,
                        closeModal: this.props.closeModal
                    }), a.createElement(_.V, {
                        position: _._4.Absolute,
                        display: _.H.Flex,
                        alignItems: _.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--right"
                    }, a.createElement(_.v, {
                        ariaLabel: Object(r.d)("Next clip", "ClipsViewModalNavigation"),
                        type: _.w.Primary,
                        icon: _._11.AngleRight,
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
            x = Object(l.c)("ClipsViewModalNavigation")(j),
            P = Object(s.a)(null, function(e) {
                return Object(c.bindActionCreators)({
                    showModal: d.d,
                    closeModal: d.c
                }, e)
            })(x),
            M = (n("/+aa"), "clips-modal-view--wide"),
            U = function(e) {
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
                    var e, t = (n = {}, n["clips-modal-view"] = !0, n[M] = !1, n);
                    return this.state.modalView === i.Report ? e = a.createElement(y.a, {
                        title: Object(r.d)("Report this Clip", "ClipsViewModal"),
                        reportContext: {
                            contentType: k.a.Clip,
                            contentID: this.props.clip.slug,
                            targetUserID: this.props.clip.broadcaster.id
                        },
                        onClose: this.setToViewState
                    }) : this.state.modalView === i.Delete ? e = a.createElement(f.d, {
                        clip: this.props.clip,
                        onClose: this.setToViewState
                    }) : this.state.modalView === i.DeleteAll ? e = a.createElement(f.e, {
                        clip: this.props.clip,
                        onClose: this.setToViewState
                    }) : this.state.modalView === i.Ban ? e = a.createElement(f.b, {
                        clip: this.props.clip,
                        isTemporary: !1,
                        onClose: this.setToViewState
                    }) : this.state.modalView === i.Timeout ? e = a.createElement(f.b, {
                        clip: this.props.clip,
                        isTemporary: !0,
                        onClose: this.setToViewState
                    }) : (e = a.createElement(P, {
                        getClips: this.props.getClips,
                        clip: this.props.clip,
                        clipIndex: this.props.clipIndex,
                        updateModalViewState: this.updateClipsModalViewState,
                        loadMoreClips: this.props.loadMoreClips,
                        pageType: this.props.pageType
                    }), t[M] = !0), a.createElement(_.V, {
                        className: h(t)
                    }, e, a.createElement(v.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }));
                    var n
                }, t = u.__decorate([Object(l.c)("ClipsViewModal")], t)
            }(a.Component),
            B = Object(s.a)(null, function(e) {
                return Object(c.bindActionCreators)({
                    showModal: d.d
                }, e)
            })(U),
            G = (n("Ajho"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getClips = function() {
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
                    return this.props.pageType === D.b.Channel && this.props.clip.game && (e = a.createElement(_._19, {
                        position: _._4.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        borderRight: !1,
                        borderBottom: !1,
                        className: "clips-preview-card__boxart"
                    }, a.createElement(p.a, {
                        to: Object(g.c)(this.props.clip.game.name) + "/clips",
                        "data-test-selector": "card-view-game-link",
                        "data-a-target": "clip-game-link"
                    }, a.createElement(_._31, {
                        display: _.H.Block,
                        direction: _._33.Bottom,
                        label: this.props.clip.game.name
                    }, a.createElement(_.C, {
                        imageAlt: this.props.clip.game.name,
                        imageSrc: this.props.clip.game.boxArtURL,
                        aspect: _.k.BoxArt,
                        size: _.D.Size4
                    }))))), this.props.pageType === D.b.Game && (t = a.createElement(_.V, null, a.createElement(p.a, {
                        className: "clips-preview-card__display-name",
                        to: "/" + this.props.clip.broadcaster.login + "/clips"
                    }, this.props.clip.broadcaster.login))), a.createElement(_.V, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(_.A, u.__assign({
                        row: !0
                    }, Object(_._40)(this.props)), a.createElement(_.V, {
                        position: _._4.Relative,
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, a.createElement(p.a, {
                        to: this.props.clip.url,
                        onClick: this.openModal,
                        "data-a-target": "clip-thumbnail-link"
                    }, a.createElement(_.C, {
                        imageSrc: this.props.clip.thumbnailURL || r.n.config.defaultStreamPreviewURL,
                        imageAlt: this.props.clip.title,
                        aspect: _.k.Aspect16x9,
                        size: _.D.Size24
                    })), e), a.createElement(_.B, null, a.createElement(_._23, {
                        type: _._28.H3,
                        fontSize: _.L.Size5
                    }, a.createElement(p.a, {
                        className: "clips-preview-card__title",
                        to: this.props.clip.url,
                        onClick: this.openModal,
                        "data-a-target": "clip-title-link"
                    }, this.props.clip.title)), a.createElement(_._23, {
                        ellipsis: !0
                    }, t), a.createElement(_._23, {
                        color: _.F.Alt2,
                        ellipsis: !0
                    }, Object(r.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsCardView"), a.createElement(_.Q, {
                        padding: {
                            x: .5
                        }
                    }, a.createElement("span", null, "·")), a.createElement(_.Q, {
                        padding: {
                            right: .5
                        }
                    }, a.createElement("span", null, Object(r.d)("Clipped by", "ClipsCardView"))), a.createElement(p.a, {
                        className: "clips-preview-card__display-name",
                        to: "/" + this.props.clip.curator.login,
                        "data-a-target": "clip-curator-link"
                    }, this.props.clip.curator.login)), a.createElement(_._23, {
                        color: _.F.Alt2
                    }, Object(r.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsCardView")))))
                }, t = u.__decorate([Object(l.c)("ClipsCardView")], t)
            }(a.Component)),
            H = Object(s.a)(null, function(e) {
                return Object(c.bindActionCreators)({
                    showModal: d.d
                }, e)
            })(G),
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
                    return a.createElement(_.V, {
                        className: "clips-cards"
                    }, a.createElement(_.O, {
                        gutterSize: _.P.None
                    }, 0 === this.props.clips.length ? this.renderEmpty() : this.renderClips()))
                }, t.prototype.renderEmpty = function() {
                    var e = this.props.timeFilterValue === W.b.All ? a.createElement(_.V, null, a.createElement(_._23, {
                        fontSize: _.L.Size4
                    }, Object(m.d)("No Clips Found", "ClipsCards")), a.createElement(_.V, {
                        margin: 3
                    }, Object(m.d)("<x:link>Learn how</x:link> to make and share clips of this channel", {
                        "x:link": function(e) {
                            return a.createElement("a", {
                                href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips",
                                target: "_blank"
                            }, e)
                        }
                    }, "ClipsCards"))) : a.createElement(_.V, null, a.createElement(_._23, {
                        fontSize: _.L.Size4
                    }, Object(m.d)("No clips were created in this time period.", "ClipsCards"), a.createElement("br", null), Object(m.d)("Check out all popular clips from this channel instead.", "ClipsCards")), a.createElement(_.V, {
                        margin: 3
                    }, a.createElement(_.u, {
                        type: _.z.Hollow,
                        onClick: this.updateToAllTime
                    }, Object(m.d)("See all popular clips", "ClipCards"))));
                    return a.createElement(_.V, {
                        fullWidth: !0
                    }, a.createElement(_.O, null, a.createElement(_.G, {
                        cols: 3
                    }), a.createElement(_.G, {
                        cols: 6
                    }, a.createElement(_.V, {
                        textAlign: _._24.Center
                    }, e)), a.createElement(_.G, {
                        cols: 3
                    })))
                }, t.prototype.renderClips = function() {
                    var e = this;
                    return this.props.clips.map(function(t, n) {
                        return a.createElement(_.G, {
                            cols: {
                                default: 12,
                                xl: 6
                            },
                            key: t.slug
                        }, a.createElement(H, {
                            clip: t,
                            clips: e.props.clips,
                            clipIndex: n,
                            pageType: e.props.pageType,
                            loadMoreClips: e.props.loadMoreClips,
                            "data-target": "clips-card-view",
                            "data-a-target": "clips-card-" + n
                        }))
                    })
                }, t = u.__decorate([Object(l.c)("ClipCards")], t)
            }(a.Component),
            q = Object(s.a)(null, function(e) {
                return Object(c.bindActionCreators)({
                    showModal: d.d
                }, e)
            })(z),
            $ = function(e) {
                return a.createElement(_.V, null, a.createElement(_.V, {
                    display: _.H.Flex,
                    flexWrap: _.K.NoWrap,
                    justifyContent: _.U.Between,
                    margin: {
                        bottom: 2
                    },
                    fullWidth: !0
                }, a.createElement(_.V, {
                    display: _.H.Flex,
                    flexWrap: _.K.NoWrap
                }, e.pageType === D.b.Game && a.createElement(_.V, {
                    margin: {
                        right: 1
                    }
                }, a.createElement(o.a, null)), a.createElement(_.V, null, a.createElement(W.c, {
                    updateTimeFilter: e.updateTimeFilter,
                    timeFilterValue: e.timeFilterValue
                }))), a.createElement(_.u, {
                    linkTo: "https://twitch.tv/manager/clips",
                    targetBlank: !0,
                    type: _.z.Hollow,
                    "data-a-target": "manage-clips-button"
                }, Object(r.d)("Manage my clips", "TopClips"))), a.createElement(_.V, null, e.isLoading ? a.createElement(_.Z, {
                    fillContent: !0
                }) : a.createElement(q, {
                    clips: e.clips,
                    pageType: e.pageType,
                    loadMoreClips: e.loadMoreClips,
                    updateTimeFilter: e.updateTimeFilter,
                    timeFilterValue: e.timeFilterValue
                })))
            },
            Q = Object(l.c)("TopClips", {
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
                                    value: "uploadID"
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
            l = n("Odds"),
            s = (n("ZdVn"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(o.a, {
                        allowedFileTypes: this.props.allowedFileTypes,
                        onFilesSubmitted: this.props.processFiles,
                        error: !!this.props.errorMessage
                    }, a.createElement(l.V, {
                        className: "image-uploader",
                        textAlign: l._24.Center,
                        display: l.H.Flex,
                        flexDirection: l.J.Column,
                        alignItems: l.c.Center,
                        justifyContent: l.U.Center,
                        position: l._4.Relative,
                        fullHeight: !0,
                        fullWidth: !0
                    }, this.renderErrorMessage(), a.createElement(l.V, {
                        position: l._4.Relative
                    }, a.createElement(l.V, {
                        className: "image-uploader__upload-svg--anim-backfill"
                    }, a.createElement(l._10, {
                        asset: l._11.Upload,
                        type: l._12.Alt2,
                        width: this.props.iconWidth || 99,
                        height: this.props.iconWidth || 76
                    })), a.createElement(l.V, {
                        className: "image-uploader__upload-svg--anim-fill",
                        position: l._4.Absolute,
                        display: this.props.isLoading ? l.H.Block : l.H.Hide,
                        attachTop: !0
                    }, a.createElement(l._10, {
                        asset: l._11.Upload,
                        type: l._12.Brand,
                        width: this.props.iconWidth || 99,
                        height: this.props.iconHeight || 76
                    }))), this.props.isLoading ? this.renderLoadingState() : this.renderNormalState()))
                }, t.prototype.renderLoadingState = function() {
                    return a.createElement(l.V, {
                        margin: 1,
                        "data-test-selector": "image-uploader-loading"
                    }, a.createElement(l._23, {
                        type: l._28.H4
                    }, Object(r.d)("Uploading", "ImageUploader")))
                }, t.prototype.renderNormalState = function() {
                    var e = Object(r.d)("Browse", "ImageUploader");
                    return a.createElement(l.V, null, a.createElement(l.V, null, a.createElement(l._23, {
                        type: l._28.H4
                    }, Object(r.d)("Drag and drop your image here", "ImageUploader"))), a.createElement(l.V, {
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            x: 1,
                            y: 0
                        },
                        fullWidth: !0,
                        "data-test-selector": "image-uploader-hint"
                    }, a.createElement(l._23, {
                        type: l._28.P,
                        fontSize: l.L.Size7,
                        color: l.F.Alt2
                    }, this.props.hintMessage)), a.createElement(l.V, null, a.createElement(l.u, {
                        ariaLabel: e,
                        type: l.z.Hollow
                    }, e)))
                }, t.prototype.renderErrorMessage = function() {
                    if (this.props.errorMessage) return a.createElement(l.V, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "image-uploader-error"
                    }, a.createElement(l._23, {
                        type: l._28.H5,
                        color: l.F.Error,
                        bold: !0
                    }, this.props.errorMessage))
                }, t
            }(a.Component)),
            c = n("SiVO"),
            d = n("wXwV"),
            u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isLoading: !1,
                        errorMessage: "",
                        hintMessage: "",
                        allowedFileTypes: c.b
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
                                            errorMessage: Object(d.b)(this.state.allowedFileTypes),
                                            isLoading: !1
                                        }), [3, 5]);
                                    case 1:
                                        return this.isFileSizeAcceptable(t) ? [3, 2] : (this.setState({
                                            errorMessage: Object(d.a)(),
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
                    e = this.props.isRequiredImageDimensions ? Object(d.g)(this.props.imageDimensions, this.props.maxFileSizeMegabytes) : Object(d.f)(this.props.imageDimensions, this.props.maxFileSizeMegabytes), this.setState({
                        hintMessage: e
                    })
                }, t.prototype.render = function() {
                    return a.createElement(s, {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("U7vG"),
            a = n("6sO2"),
            r = n("yWCw"),
            o = n("Odds"),
            l = function() {
                return i.createElement(r.a, {
                    message: Object(a.d)("Sorry. Unless you’ve got a time machine, that content is unavailable.", "PageNotFound")
                }, i.createElement(o.V, {
                    margin: {
                        top: 2
                    }
                }, i.createElement(o.u, {
                    linkTo: "/directory",
                    "data-a-target": "browse-channels-button"
                }, Object(a.d)("Browse channels", "PageNotFound"))))
            };
        n.d(t, "PageNotFound", function() {
            return l
        })
    },
    "6yQB": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("iJpA"),
            o = n("c8Oh"),
            l = n("TToO"),
            s = n("U7vG"),
            c = n("6sO2"),
            d = n("zCIC"),
            u = n("+Znq"),
            m = n("D9fv"),
            p = n("CSlQ"),
            g = n("Odds"),
            h = (n("vQzq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            i = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        i && t.props.updateLanguagePreferences(i, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return s.createElement(g.V, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, s.createElement(g.E, {
                            label: e.label,
                            checked: t.props.languagePreferences.includes(e.code),
                            "data-language-code": e.code,
                            "data-a-target": "language-filter-" + e.code + "-checkbox",
                            onChange: t.handleLanguageChange
                        }))
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.languagePreferences.length;
                    return s.createElement(g.V, {
                        className: "language-select-menu"
                    }, s.createElement(u.a, null, s.createElement(g.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: g.z.Hollow
                    }, s.createElement(g.V, {
                        display: g.H.Flex
                    }, Object(c.d)("Language", "LanguageSelectMenu"), s.createElement(g.V, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && s.createElement(g._1, {
                        type: g._2.Brand,
                        label: e.toString()
                    })))), s.createElement(g.p, {
                        direction: g.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, s.createElement(d.b, {
                        className: "language-select-menu__balloon"
                    }, s.createElement(g.V, {
                        padding: .5
                    }, Object(m.b)().map(this.renderLanguageOption))), s.createElement(g._19, {
                        background: g.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, s.createElement(g.u, {
                        type: g.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(c.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = l.__decorate([Object(p.c)("LanguageSelectMenu")], t)
            }(s.Component)),
            v = Object(i.a)(function(e) {
                return {
                    languagePreferences: Object(o.a)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    updateLanguagePreferences: r.c,
                    clearLanguagePreferences: r.a
                }, e)
            })(h);
        n.d(t, "a", function() {
            return v
        })
    },
    "7FW4": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = i.createElement(o.V, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.J.Column,
                justifyContent: o.U.Center,
                display: o.H.Flex
            }, i.createElement(o._23, {
                color: o.F.Link,
                fontSize: o.L.Size4,
                noWrap: !0
            }, Object(r.d)("View All", "Following--ViewAllButton")), i.createElement(o._23, {
                color: o.F.Alt2,
                fontSize: o.L.Size4,
                noWrap: !0
            }, e.subHeader));
            return e.linkTo && (t = i.createElement(a.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t)), i.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": s
            }, i.createElement(o.V, null, i.createElement(o.j, {
                ratio: e.aspectRatio
            }, i.createElement(o._19, {
                background: o.m.Alt2,
                fullHeight: !0
            }, t))))
        };
        var i = n("U7vG"),
            a = (n.n(i), n("F8kA")),
            r = n("6sO2"),
            o = n("Odds"),
            l = n("oHn4"),
            s = (n.n(l), "view-all-button-selector")
    },
    "7yeK": function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                type: _,
                csgoMap: e
            }
        }

        function a(e) {
            return {
                type: C,
                leagueChampion: e
            }
        }

        function r(e) {
            var t = this;
            return function(n) {
                return f.__awaiter(t, void 0, void 0, function() {
                    return f.__generator(this, function(t) {
                        return S.l.set(E, e), n(i(e)), [2]
                    })
                })
            }
        }

        function o() {
            var e = this;
            return function(t) {
                return f.__awaiter(e, void 0, void 0, function() {
                    return f.__generator(this, function(e) {
                        return S.l.remove(E), t(i("")), [2]
                    })
                })
            }
        }

        function l(e) {
            var t = this;
            return function(n) {
                return f.__awaiter(t, void 0, void 0, function() {
                    return f.__generator(this, function(t) {
                        return S.l.set(N, e), n(a(e)), [2]
                    })
                })
            }
        }

        function s() {
            var e = this;
            return function(t) {
                return f.__awaiter(e, void 0, void 0, function() {
                    return f.__generator(this, function(e) {
                        return S.l.remove(N), t(a(w)), [2]
                    })
                })
            }
        }

        function c() {
            return {
                csgoMap: S.l.get(E, ""),
                leagueChampion: S.l.get(N, w)
            }
        }

        function d(e) {
            return e.gameFilters.csgoMap
        }

        function u(e) {
            return e.gameFilters.leagueChampion
        }

        function m(e) {
            for (var t = "", n = [], i = 0, a = de.length; i < a && n.length <= 1; i++) t = de[i], n = e.split(t).map(function(e) {
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

        function p() {
            return {
                type: Ke
            }
        }

        function g() {
            return {
                type: Xe
            }
        }

        function h(e) {
            return e.directoryHeader.isEditingEnabled
        }

        function v() {
            var e = this;
            return Object(I.a)(tt, {
                props: function(t) {
                    return {
                        createUploadURLMutation: function(n, i, a) {
                            return f.__awaiter(e, void 0, void 0, function() {
                                var e;
                                return f.__generator(this, function(r) {
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
        var f = n("TToO"),
            y = n("U7vG"),
            k = n("RH2O"),
            b = n("c8Oh"),
            S = n("6sO2"),
            _ = "core.game-filters.CSGO_MAP_PREFERENCES_UPDATED",
            C = "core.game-filters.LEAGUE_CHAMPION_PREFERENCES_UPDATED",
            E = "csgoMapFilter",
            N = "leagueChampionFilter",
            w = 0;
        S.n.store.registerReducer("gameFilters", function(e, t) {
            switch (void 0 === e && (e = c()), t.type) {
                case _:
                    return f.__assign({}, e, {
                        csgoMap: t.csgoMap
                    });
                case C:
                    return f.__assign({}, e, {
                        leagueChampion: t.leagueChampion
                    });
                default:
                    return e
            }
        });
        var D, O = n("6yQB"),
            F = n("yWCw"),
            T = n("DtWM"),
            I = n("7vx8"),
            V = n("j7/Y"),
            L = n("oIkB"),
            A = n("w9tK"),
            R = n("Us7i"),
            j = n("vH/s"),
            x = n("/+to"),
            P = n("QG7y"),
            M = n("CSlQ"),
            U = n("Jwld"),
            B = n("v5ho"),
            G = function(e) {
                return e.startsWith("/communities") || e.startsWith("/directory/communities") ? B.a.Communities : B.a.Games
            },
            H = n("2KeS"),
            W = n("zCIC"),
            z = n("+Znq"),
            q = n("Odds"),
            $ = (n("IDLB"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.balloonOpen = !1, t.onChangeSearchTerm = function(e) {
                        t.props.onSearch(e.currentTarget.value)
                    }, t.onToggle = function(e) {
                        return t.balloonOpen = !e
                    }, t.renderSections = function() {
                        return t.props.sections ? t.props.sections.map(function(e) {
                            return [y.createElement(q.Q, {
                                padding: {
                                    x: 1,
                                    top: .5
                                },
                                key: "header"
                            }, y.createElement(q._23, {
                                color: q.F.Alt2
                            }, e.title)), e.items]
                        }) : null
                    }, t.renderSelected = function() {
                        return t.props.selected ? y.createElement(q._19, {
                            borderBottom: !0
                        }, y.createElement(q.Q, {
                            padding: {
                                x: 1,
                                top: .5
                            }
                        }, y.createElement(q._23, {
                            color: q.F.Alt2
                        }, t.props.selectedTitle)), t.props.selected) : null
                    }, t.setSearchRef = function(e) {
                        t.props.searchRefDelegate && t.props.searchRefDelegate(e)
                    }, t.setToggleRef = function(e) {
                        return t.toggleRef = e
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    (!this.props.selected && e.selected || this.props.selected && !e.selected) && this.balloonOpen && this.toggleRef && this.toggleRef.toggleBalloon(!1)
                }, t.prototype.render = function() {
                    return this.props.isError ? null : this.props.isLoading ? y.createElement(q.V, {
                        display: q.H.Flex,
                        justifyContent: q.U.Center,
                        alignItems: q.c.Center
                    }, y.createElement(q._3, {
                        width: 70,
                        height: 30
                    })) : y.createElement(q.V, {
                        className: "selectable-filter"
                    }, y.createElement(z.a, {
                        onToggle: this.onToggle,
                        ref: this.setToggleRef
                    }, y.createElement(q.u, f.__assign({
                        dropdown: !0,
                        type: q.z.Hollow
                    }, Object(q._40)(this.props)), y.createElement(q.V, {
                        display: q.H.Flex
                    }, this.props.title)), y.createElement(q.p, {
                        direction: q.q.BottomLeft,
                        noTail: !0
                    }, y.createElement(q.V, {
                        className: "selectable-filter__balloon",
                        padding: {
                            y: .5
                        }
                    }, y.createElement(q._19, {
                        padding: 1,
                        borderBottom: !0
                    }, y.createElement(q._13, {
                        refDelegate: this.setSearchRef,
                        onChange: this.onChangeSearchTerm,
                        placeholder: this.props.searchPlaceholder
                    })), this.renderSelected(), y.createElement(W.b, {
                        className: "selectable-filter__scroll-container"
                    }, y.createElement(q.V, null, this.renderSections()))))))
                }, t
            }(y.Component)),
            Q = (n("zu64"), function(e) {
                return y.createElement(q.T, f.__assign({
                    onClick: e.onClick,
                    key: e.key,
                    disabled: e.disabled
                }, Object(q._40)(e)), y.createElement(q.V, {
                    className: "selectable-filter-item",
                    display: q.H.Flex,
                    flexDirection: q.J.Row,
                    alignItems: q.c.Center,
                    margin: {
                        y: .5,
                        x: 1
                    },
                    flexWrap: q.K.NoWrap
                }, e.spriteWidth && y.createElement(q.V, {
                    className: "selectable-filter-item__avatar-container",
                    flexShrink: 0
                }, y.createElement("div", {
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
                })), y.createElement(q.Q, {
                    margin: {
                        left: 1
                    },
                    flexGrow: 1,
                    ellipsis: !0
                }, y.createElement(q._23, {
                    fontSize: q.L.Size5
                }, e.name)), e.withClose && y.createElement(q._10, {
                    asset: q._11.Close
                })))
            }),
            J = [{
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
            Y = function(e) {
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
                        return f.__awaiter(t, void 0, void 0, function() {
                            return f.__generator(this, function(e) {
                                return this.state.isLoading || this.state.isError || this.state.content ? [2] : (this.setState({
                                    content: J
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
                        return void 0 === n && (n = !1), y.createElement(Q, {
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
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (this.props.firstPageLoaded && this.loadData(), this.props.csgoMap) {
                        var t = J[0].Maps.find(function(t) {
                            return t.name === e.props.csgoMap
                        });
                        t && this.setState({
                            selected: t
                        })
                    }
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return y.createElement($, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(S.d)("Search by Map", "CSGOMapFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(S.d)("Selected Map", "CSGOMapFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(S.d)("Map", "CSGOMapFilter"),
                        "data-test-selector": "csgo-filter-selector"
                    })
                }, t
            }(y.Component),
            K = Object(k.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    csgoMap: d(e)
                }
            }, function(e) {
                return Object(H.bindActionCreators)({
                    updateCSGOMapPreference: r,
                    clearCSGOMapPreference: o
                }, e)
            })(Y),
            X = n("iOr9"),
            Z = n("HW6M"),
            ee = function() {
                var e = function() {
                    return y.createElement(q.V, {
                        className: "featured-events-layout__column",
                        margin: {
                            bottom: 3
                        }
                    }, y.createElement(q.V, {
                        margin: {
                            bottom: 1
                        }
                    }, y.createElement(q._3, {
                        height: 60
                    })), y.createElement(q._23, null, y.createElement(q._3, {
                        width: 130
                    })), y.createElement(q._23, null, y.createElement(q._3, {
                        width: 105
                    })))
                };
                return y.createElement(q.V, {
                    fullWidth: !0
                }, y.createElement(q.V, {
                    margin: {
                        bottom: 2
                    }
                }, y.createElement(q._23, null, y.createElement(q._3, {
                    width: 150
                }))), [1, 2, 3].map(function(t) {
                    return y.createElement(e, {
                        key: t
                    })
                }))
            },
            te = (n("tmqW"), Object(M.c)("EventCard", {
                autoReportInteractive: !0
            })(function(e) {
                var t = {
                    backgroundImage: "url(" + e.imageURL + ")"
                };
                return y.createElement(q._19, {
                    className: "event",
                    margin: {
                        bottom: 1
                    },
                    border: !0
                }, y.createElement("div", {
                    className: "event__header",
                    style: t
                }, y.createElement("div", {
                    className: "event__header-overlay"
                }, y.createElement(q._23, {
                    type: q._28.H5,
                    bold: !0
                }, e.title))), e.children)
            })),
            ne = Object(M.c)("LiveEvents", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.events.map(function(e, t) {
                    if (!e.owner) return null;
                    var n = e.owner.stream;
                    if (!n) return null;
                    var i = {
                        pathname: "/" + e.owner.login,
                        state: {
                            medium: j.PageviewMedium.Game,
                            content: j.PageviewContent.EventLive,
                            content_index: t
                        }
                    };
                    return y.createElement(te, {
                        key: e.id,
                        title: e.title,
                        imageURL: e.coverImageURL,
                        eventIDs: [e.id]
                    }, y.createElement(q.V, {
                        padding: 1,
                        alignItems: q.c.Baseline,
                        display: q.H.Flex,
                        justifyContent: q.U.Between
                    }, y.createElement(q._23, {
                        type: q._28.P
                    }, Object(S.d)("{viewerCount, number} viewers", {
                        viewerCount: n.viewersCount
                    }, "Events"), " - ", e.owner.displayName), y.createElement(q.u, {
                        linkTo: i
                    }, Object(S.d)("Watch Now", "Events"))))
                });
                return y.createElement(q.V, null, t)
            }),
            ie = n("mi6k"),
            ae = Object(M.c)("PastEvents", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.events.map(function(e, t) {
                    if (0 === e.videos.length) return null;
                    var n = e.videos.map(function(n, i) {
                        var a = Object(ie.a)(n.lengthSeconds || 0),
                            r = i === e.videos.length - 1 ? "event__video-last" : "",
                            o = {
                                pathname: "/videos/" + n.id,
                                state: {
                                    medium: j.PageviewMedium.Game,
                                    content: j.PageviewContent.EventPast,
                                    content_index: t
                                }
                            };
                        return y.createElement(q.T, {
                            key: n.id,
                            linkTo: o,
                            alpha: !0
                        }, y.createElement(q.V, {
                            className: "event__video " + r,
                            padding: 1
                        }, y.createElement(q.V, {
                            className: "event__video-card"
                        }, y.createElement(q.A, {
                            row: !0
                        }, y.createElement(q.C, {
                            imageSrc: n.thumbnailURL,
                            imageAlt: n.title,
                            size: q.D.Size6
                        }), y.createElement(q.B, null, y.createElement(q.V, {
                            padding: {
                                left: 1
                            }
                        }, y.createElement(q._23, {
                            type: q._28.H6
                        }, n.title), y.createElement(q.V, {
                            className: "event__broadcast-details"
                        }, y.createElement(q._23, {
                            type: q._28.P
                        }, Object(S.d)("{viewCount, number} views", {
                            viewCount: n.viewCount
                        }, "Events"), " · ", a))))))))
                    });
                    return y.createElement(te, {
                        key: e.id,
                        title: e.title,
                        imageURL: e.imageURL,
                        eventIDs: [e.id]
                    }, n)
                });
                return y.createElement(q.V, null, t)
            }),
            re = n("Aj/L"),
            oe = n("AMWC"),
            le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.unfollowEvent = function(e) {
                        e && (e.stopPropagation(), e.preventDefault()), t.props.updateEventBroadcastNotifications(Object(L.a)({
                            eventID: t.props.eventID,
                            emailEnabled: !1
                        })), S.n.tracking.track(j.SpadeEventType.EventFollowing, {
                            action: "email_reminder_off",
                            event_id: t.props.eventID,
                            location: "directory"
                        })
                    }, t.followEvent = function(e) {
                        e && (e.stopPropagation(), e.preventDefault()), t.props.updateEventBroadcastNotifications(Object(L.a)({
                            eventID: t.props.eventID,
                            emailEnabled: !0
                        })), S.n.tracking.track(j.SpadeEventType.EventFollowing, {
                            action: "email_reminder_on",
                            event_id: t.props.eventID,
                            location: "directory"
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.isLoggedIn) return null;
                    var e = q._11.Heart,
                        t = this.followEvent,
                        n = Object(S.d)("Remind Me", "Events");
                    return this.props.areNotificationsEnabled && (e = q._11.FollowCheck, t = this.unfollowEvent, n = Object(S.d)("Reminder Set", "Events")), y.createElement(q._31, {
                        label: n,
                        align: q._32.Right
                    }, y.createElement(q.v, {
                        size: q.x.Default,
                        icon: e,
                        onClick: t,
                        ariaLabel: n
                    }))
                }, t = f.__decorate([Object(I.a)(oe, {
                    name: "updateEventBroadcastNotifications"
                }), Object(M.c)("NotifyMeComponent")], t)
            }(y.Component),
            se = Object(k.a)(function(e) {
                return {
                    isLoggedIn: Object(re.d)(e)
                }
            })(le),
            ce = Object(M.c)("UpcomingEvents", {
                autoReportInteractive: !0
            })(function(e) {
                var t = 0,
                    n = e.events.map(function(e) {
                        var n = e.broadcasts.map(function(n, i) {
                                return y.createElement(q.T, {
                                    key: n.id,
                                    linkTo: function(e, t, n) {
                                        return e + "?tt_medium=" + j.PageviewMedium.Game + "&tt_content=" + t + "&tt_content_index=" + n
                                    }("https://twitch.tv/events/" + n.id, j.PageviewContent.EventUpcoming, t++),
                                    alpha: !0
                                }, y.createElement(q.V, {
                                    className: "event__broadcast-wrapper"
                                }, y.createElement(q.V, {
                                    className: Z("event__broadcast", {
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
                                    display: q.H.Flex,
                                    flexWrap: q.K.NoWrap,
                                    justifyContent: q.U.Between
                                }, y.createElement(q.V, {
                                    display: q.H.Flex,
                                    flexShrink: 1
                                }, y.createElement(q.V, {
                                    className: "event__broadcast-header",
                                    fullWidth: !0
                                }, y.createElement(q._23, {
                                    bold: !0
                                }, Object(S.c)(n.startAt, "medium"), n.title && " - ", n.title)), y.createElement(q.V, {
                                    className: "event__broadcast-details"
                                }, Object(S.d)("{start,time,short} - {end,time,short}", {
                                    start: n.startAt,
                                    end: n.endAt
                                }, "UpcomingEvents"))), y.createElement(q.V, {
                                    display: q.H.Flex,
                                    flexShrink: 0,
                                    margin: {
                                        left: 1
                                    },
                                    alignSelf: q.d.Center
                                }, y.createElement(se, {
                                    eventID: n.id,
                                    areNotificationsEnabled: n.notificationsEnabled
                                })))))
                            }),
                            i = e.broadcasts.map(function(e) {
                                return e.id
                            });
                        return y.createElement(te, {
                            key: i.join(""),
                            imageURL: e.imageURL,
                            title: e.title,
                            eventIDs: i
                        }, n)
                    });
                return y.createElement(q.V, null, n)
            }),
            de = [" | ", " - "],
            ue = n("hcPX"),
            me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tracked = !1, t
                }
                return f.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return y.createElement(ee, null);
                    if (this.props.data.error || null === this.props.data.game) return y.createElement(q._19, {
                        color: q.F.Alt2,
                        display: q.H.Flex,
                        justifyContent: q.U.Center,
                        alignItems: q.c.Center,
                        fullWidth: !0
                    }, y.createElement(q._10, {
                        asset: q._11.DeadGlitch,
                        width: 46,
                        height: 48
                    }));
                    var e = !1,
                        t = null,
                        n = this.props.data.game.featuredEventBroadcasts.live.filter(this.isNotNull);
                    0 !== n.length && (e = !0, t = y.createElement(q.V, {
                        margin: {
                            bottom: 3
                        }
                    }, y.createElement(q.V, {
                        margin: {
                            bottom: 1
                        }
                    }, y.createElement(q._23, {
                        type: q._28.H4
                    }, Object(S.d)("Live Events", "Events"))), y.createElement(q.V, null, y.createElement(ne, {
                        events: n
                    }))));
                    var i = null,
                        a = this.props.data.game.featuredEventBroadcasts.future.filter(this.isNotNull),
                        r = this.convertUpcomingEvents(a);
                    0 !== r.length && (e = !0, i = y.createElement(q.V, {
                        margin: {
                            bottom: 3
                        }
                    }, y.createElement(q.V, {
                        margin: {
                            bottom: 1
                        }
                    }, y.createElement(q._23, {
                        type: q._28.H4
                    }, Object(S.d)("Upcoming Events", "Events"))), y.createElement(q.V, null, y.createElement(ce, {
                        events: r
                    }))));
                    var o = null,
                        l = this.props.data.game.featuredEventBroadcasts.past.filter(this.isNotNull),
                        s = this.convertPastEvents(l);
                    return 0 !== s.length && (e = !0, o = y.createElement(q.V, {
                        margin: {
                            bottom: 3
                        }
                    }, y.createElement(q.V, {
                        margin: {
                            bottom: 1
                        }
                    }, y.createElement(q._23, {
                        type: q._28.H4
                    }, Object(S.d)("Recent Events", "Events"))), y.createElement(q.V, null, y.createElement(ae, {
                        events: s
                    })))), y.createElement(q.V, {
                        className: Z({
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
                    S.n.tracking.track(j.SpadeEventType.FeaturedEventPresentation, {
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
                            var n = m(e.title),
                                i = t.get(n.prefix) || [];
                            i.push(e), t.has(n.prefix) || t.set(n.prefix, i)
                        }), t.forEach(function(e, t) {
                            n.push({
                                title: t,
                                imageURL: e[0].coverImageURL,
                                broadcasts: e.map(function(e) {
                                    return {
                                        id: e.id,
                                        title: m(e.title).postfix,
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
                            for (var t = "", n = [], i = 0, a = 0, r = de.length; a < r && i <= 1; a++) t = de[a], n = e.map(function(e) {
                                return e.split(t).map(function(e) {
                                    return e.trim()
                                }).filter(function(e) {
                                    return e.length
                                })
                            }), i = Math.min.apply(Math, n.map(function(e) {
                                return e.length
                            }));
                            for (var o = 0, l = -1, s = function(e) {
                                    var t = n.reduce(function(t, i, a) {
                                        for (var r = 0; r < a; r++) {
                                            var o = n[r];
                                            i[e] !== o[e] && (t += 1)
                                        }
                                        return t
                                    }, 0);
                                    t > o && (o = t, l = e)
                                }, c = 0; c < i; c++) s(c);
                            return -1 === l ? e.map(function(e) {
                                return {
                                    full: e,
                                    identifier: m(e).best
                                }
                            }) : e.map(function(e, t) {
                                return {
                                    full: e,
                                    identifier: n[t][l]
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
                }, t = f.__decorate([Object(I.a)(ue, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.gameName
                            }
                        }
                    }
                })], t)
            }(y.Component),
            pe = n("AadB"),
            ge = (n("SG0P"), "directory-container"),
            he = "direectory-grid-grid-layout",
            ve = "directory-grid-sidebar-layout",
            fe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderAdLessGrid = function() {
                        return t.renderGrid(!1)
                    }, t.renderGrid = function(e) {
                        void 0 === e && (e = !0);
                        var n = null;
                        return e && (n = y.createElement(x.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: P.d.directory,
                            slotID: P.b.directory.rectangle,
                            adSize: P.c.directory.rectangle,
                            targeting: {
                                pagetype: P.a.games,
                                game: t.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        })), y.createElement(q.V, {
                            flexShrink: 0,
                            "data-target": ge,
                            "data-test-selector": he
                        }, y.createElement(q._34, {
                            gutterSize: q._36.Small,
                            childWidth: q._35.Large,
                            placeholderItems: 20
                        }, n, t.props.children), y.createElement(W.a, {
                            enabled: t.props.canLoadMore,
                            loadMore: t.props.loadMore,
                            pixelThreshold: 200
                        }))
                    }, t.renderSidebar = function() {
                        return y.createElement(q.V, {
                            display: q.H.Flex,
                            flexWrap: q.K.NoWrap,
                            "data-test-selector": ve
                        }, y.createElement(q.V, {
                            flexGrow: 1,
                            display: q.H.Flex
                        }, y.createElement(q.V, {
                            flexShrink: 0
                        }, y.createElement(q._34, {
                            gutterSize: q._36.Small,
                            childWidth: q._35.Medium,
                            placeholderItems: 20
                        }, t.props.children), y.createElement(W.a, {
                            enabled: t.props.canLoadMore,
                            loadMore: t.props.loadMore,
                            pixelThreshold: 200
                        }))), y.createElement(q.V, {
                            display: q.H.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            margin: {
                                left: 3
                            }
                        }, y.createElement(q.V, {
                            display: q.H.Flex,
                            flexDirection: q.J.Column
                        }, y.createElement(x.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 0,
                                width: 320,
                                height: 250
                            },
                            adUnit: P.d.directory,
                            slotID: P.b.directory.rectangle,
                            adSize: P.c.directory.rectangle,
                            targeting: {
                                pagetype: P.a.games,
                                game: t.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        }), t.props.firstPageLoaded ? y.createElement(me, {
                            gameName: t.props.communityName
                        }) : y.createElement(ee, null))))
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + ge + '"]'),
                            t = document.querySelector('[data-target="' + pe.a + '"]'),
                            n = document.querySelector("#" + P.b.directory.rectangle);
                        if (t && e && n) {
                            var i = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== i && "0" !== i && (n.style.order = i)
                        }
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        return y.createElement(X.a, {
                            name: "TWILIGHT_EVENT_GAME_DIRECTORY",
                            assignments: e,
                            loader: t
                        })
                    }
                    return this.renderGrid()
                }, t.prototype.isEventApprovedDirectory = function(e) {
                    return S.n.dynamicSettings.get("event_directory_enabled_games", []).includes(e.toLowerCase())
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t
            }(y.Component),
            ye = Object(M.c)("DirectoryGrid")(fe),
            ke = Object(k.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(ye),
            be = n("NY9D"),
            Se = function(e) {
                return e === B.a.Communities ? "COMMUNITY" : "GAME"
            },
            _e = n("7FW4"),
            Ce = n("peXu"),
            Ee = n("F3Wg"),
            Ne = n("SN3I"),
            we = n("MMhf"),
            De = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory || this.props.data.error || !this.props.data.directory) return null;
                    var t, n = Object(we.a)(this.props.languageCode),
                        i = this.props.directoryWidth,
                        a = this.props.directoryType === B.a.Communities ? j.PageviewMedium.Community : j.PageviewMedium.Game,
                        r = this.props.data.directory.streams.edges || [];
                    if (i && i > 0) {
                        var o = Object(Ce.a)(i, 240, 2);
                        o < r.length && (r = r.slice(0, o - 1), t = y.createElement("div", {
                            style: {
                                order: r.length
                            }
                        }, y.createElement(_e.a, {
                            subHeader: n,
                            linkTo: {
                                pathname: this.getViewAllPath(),
                                state: {
                                    medium: a,
                                    content: j.PageviewContent.Game
                                }
                            }
                        })))
                    }
                    var l = r.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(t, n) {
                        var i = t.node;
                        return y.createElement(pe.b, {
                            directoryName: decodeURIComponent(e.props.directoryName),
                            directoryType: e.props.directoryType,
                            streamIndex: n,
                            streamNode: i,
                            key: i.id,
                            trackingMedium: a
                        })
                    });
                    return y.createElement("div", null, y.createElement(Ne.a, {
                        languageCode: this.props.languageCode
                    }), y.createElement(q._34, {
                        gutterSize: q._36.Small,
                        childWidth: q._35.Medium,
                        placeholderItems: 20
                    }, l, t))
                }, t.prototype.getViewAllPath = function() {
                    return this.props.directoryType === B.a.Communities ? Object(be.a)(this.props.directoryName) + "/" + this.props.languageCode : Object(be.c)(this.props.directoryName) + "/" + this.props.languageCode
                }, t = f.__decorate([Object(I.a)(Ee, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.directoryName),
                                limit: 30,
                                languages: [e.languageCode],
                                type: Se(e.directoryType)
                            }
                        }
                    }
                }), Object(M.c)("DirectoryInternationalSection", {
                    autoReportInteractive: !0
                })], t)
            }(y.Component),
            Oe = n("/SNv"),
            Fe = n.n(Oe),
            Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = S.n.logger.withCategory("hearthstone-class-filter"), t.getSections = function() {
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
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            }, !0)
                        }
                    }, t.loadData = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return f.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, n.e(72).then(n.bind(null, "e/M0"))];
                                    case 2:
                                        return e = i.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = i.sent(), this.logger.error(t, "Failed to load Hearthstone class data"), this.setState({
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
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.class)
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), y.createElement(Q, {
                            key: e.name,
                            name: e.class,
                            onClick: t,
                            spriteAsset: Fe.a,
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
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return y.createElement($, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(S.d)("Search by Class", "HearthstoneClassFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(S.d)("Selected Class", "HearthstoneClassFilter"),
                        title: this.state.selected ? this.state.selected.class : Object(S.d)("Class", "HearthstoneClassFilter")
                    })
                }, t
            }(y.Component),
            Ie = Object(k.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(Te),
            Ve = n("Ehh8"),
            Le = n.n(Ve),
            Ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = S.n.logger.withCategory("hearthstone-mode-filter"), t.getSections = function() {
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
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            }, !0)
                        }
                    }, t.loadData = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return f.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, n.e(71).then(n.bind(null, "Dan5"))];
                                    case 2:
                                        return e = i.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = i.sent(), this.logger.error(t, "Failed to load Hearthstone mode data"), this.setState({
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
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.name)
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), y.createElement(Q, {
                            key: e.name,
                            name: e.display_name,
                            onClick: t,
                            spriteAsset: Le.a,
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
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return y.createElement($, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(S.d)("Search by Mode", "HearthstoneModeFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(S.d)("Selected Mode", "HearthstoneModeFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(S.d)("Mode", "HearthstoneModeFilter")
                    })
                }, t
            }(y.Component),
            Re = Object(k.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(Ae),
            je = n("OAwv"),
            xe = n("9u8h"),
            Pe = "en_US",
            Me = {
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
            Ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = S.n.logger.withCategory("league-filter"), t.getSections = function() {
                        var e = [],
                            n = [];
                        if (t.state.content) {
                            var i = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                a = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            Object.keys(t.state.content.data).forEach(function(r) {
                                if (t.state.content) {
                                    var o = t.state.content.data[r];
                                    if (t.state.selected && t.state.selected.name === o.name) return;
                                    if (i && !o.name.match(i) && a && !o.name.match(a)) return;
                                    var l = t.renderCharacter(o, function() {
                                        return t.onSelect(o)
                                    });
                                    o.channels > 0 ? e.push(l) : n.push(l)
                                }
                            })
                        }
                        var r = [];
                        return e.length > 0 && r.push({
                            title: Object(S.d)("Champions Online", "LeagueFilter"),
                            items: e
                        }), n.length > 0 && r.push({
                            title: Object(S.d)("Champions Offline", "LeagueFilter"),
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
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, a, r, o = this;
                            return f.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), l.label = 1;
                                    case 1:
                                        return l.trys.push([1, 3, , 4]), e = S.n.intl.getLanguageCode(), t = e ? Me[e] || Pe : Pe, n = xe.a.getAPIURL("/api/lol/champions?" + je.stringify({
                                            locale: t,
                                            on_site: 1
                                        })).toString(), i = this.setState, a = {}, [4, xe.a.get(n)];
                                    case 2:
                                        return i.apply(this, [(a.content = l.sent().body, a.isLoading = !1, a), function() {
                                            o.props.leagueChampion && o.state.content && Object.keys(o.state.content.data).forEach(function(e) {
                                                if (o.state.content) {
                                                    var t = o.state.content.data[e];
                                                    t.id === o.props.leagueChampion && o.setState({
                                                        selected: t
                                                    })
                                                }
                                            })
                                        }]), [3, 4];
                                    case 3:
                                        return r = l.sent(), this.logger.error(r, "Failed to load LoL champion data"), this.setState({
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
                            t.searchRef && (t.searchRef.value = ""), t.props.updateLeagueChampionPreference(e.id)
                        })
                    }, t.renderCharacter = function(e, n, i) {
                        void 0 === i && (i = !1);
                        var a = "https://ddragon.leagueoflegends.com/cdn/" + t.state.content.version + "/img/sprite/" + e.image.sprite,
                            r = e.name.replace(/[.']/g, "").replace(/ /g, "").toLowerCase();
                        return y.createElement(Q, {
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
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return y.createElement($, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(S.d)("Search by Champion", "LeagueFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(S.d)("Selected Champion", "LeagueFilter"),
                        title: this.state.selected ? this.state.selected.name : Object(S.d)("Champion", "LeagueFilter"),
                        "data-a-target": "league-champion-filter-dropdown"
                    })
                }, t
            }(y.Component),
            Be = Object(k.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    leagueChampion: u(e)
                }
            }, function(e) {
                return Object(H.bindActionCreators)({
                    updateLeagueChampionPreference: l,
                    clearLeagueChampionPreference: s
                }, e)
            })(Ue),
            Ge = n("Vr3l"),
            He = n.n(Ge),
            We = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = S.n.logger.withCategory("overwatch-filter"), t.getSections = function() {
                        var e = [],
                            n = [],
                            i = [],
                            a = [];
                        if (t.state.content) {
                            var r = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                o = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null,
                                l = function(e, n) {
                                    t.state.selected && t.state.selected.character === e.character || r && !e.display_name.match(r) && o && !e.display_name.match(o) || n.push(t.renderCharacter(e, function() {
                                        return t.onSelectCharacter(e)
                                    }))
                                };
                            t.state.content[0].Offense.forEach(function(t) {
                                return l(t, e)
                            }), t.state.content[1].Defense.forEach(function(e) {
                                return l(e, n)
                            }), t.state.content[2].Tank.forEach(function(e) {
                                return l(e, i)
                            }), t.state.content[3].Support.forEach(function(e) {
                                return l(e, a)
                            })
                        }
                        var s = [];
                        return e.length > 0 && s.push({
                            title: Object(S.d)("Offense", "OverwatchFilter"),
                            items: e
                        }), n.length > 0 && s.push({
                            title: Object(S.d)("Defense", "OverwatchFilter"),
                            items: n
                        }), i.length > 0 && s.push({
                            title: Object(S.d)("Tank", "OverwatchFilter"),
                            items: i
                        }), a.length > 0 && s.push({
                            title: Object(S.d)("Support", "OverwatchFilter"),
                            items: a
                        }), s
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            return t.renderCharacter(t.state.selected, function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            }, !0)
                        }
                    }, t.loadData = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return f.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, n.e(70).then(n.bind(null, "sQp1"))];
                                    case 2:
                                        return e = i.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = i.sent(), this.logger.error(t, "Failed to load Overwatch character data"), this.setState({
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
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.character)
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), y.createElement(Q, {
                            key: e.character,
                            name: e.display_name,
                            onClick: t,
                            spriteAsset: He.a,
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
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return y.createElement($, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(S.d)("Search by Hero", "OverwatchFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(S.d)("Selected Hero", "OverwatchFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(S.d)("Hero", "OverwatchFilter")
                    })
                }, t
            }(y.Component),
            ze = Object(k.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(We),
            qe = n("qw9S");
        ! function(e) {
            e.Hearthstone = "hearthstone", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
        }(D || (D = {}));
        var $e = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getAdditionalFilters = function() {
                        var e = [];
                        if (n.props.match.params.encodedLanguage || e.push(y.createElement(O.a, null)), n.state.directoryType === B.a.Communities) return e;
                        switch (decodeURI(n.props.match.params.encodedCommunityName).toLowerCase()) {
                            case D.Hearthstone:
                                e.push(y.createElement(Ie, {
                                    onSelect: n.props.onSelectHearthstoneClass
                                }), y.createElement(Re, {
                                    onSelect: n.props.onSelectHearthstoneMode
                                }));
                                break;
                            case D.League:
                                e.push(y.createElement(Be, null));
                                break;
                            case D.Overwatch:
                                e.push(y.createElement(ze, {
                                    onSelect: n.props.onSelectOverwatchCharacter
                                }));
                                break;
                            case D.CSGO:
                                e.push(y.createElement(K, null))
                        }
                        return e
                    }, n.styleFilters = function() {
                        return n.getAdditionalFilters().map(function(e, t) {
                            return y.createElement(q.V, {
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
                            return t === Object.keys(P.b.directory).length && R.a.display(P.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, n.state = {
                        directoryType: G(t.match.path),
                        directoryWidth: -1,
                        numSlotsAdded: 0
                    }, n
                }
                return f.__extends(t, e), t.prototype.componentWillMount = function() {
                    P.g.addListener(P.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.match.path !== e.match.path && this.setState({
                        directoryType: G(e.match.path)
                    })
                }, t.prototype.componentWillUnmount = function() {
                    P.g.removeListener(P.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory) return y.createElement(q.V, {
                        margin: 2
                    }, y.createElement(q.Z, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return y.createElement(F.a, {
                        message: Object(S.d)("Error loading data.", "DirectoryGamePage")
                    });
                    if (!this.props.data.directory) return y.createElement(F.a, {
                        message: Object(S.d)("Game does not exist", "DirectoryGamePage")
                    });
                    var t = null,
                        n = null;
                    this.props.match.params.encodedLanguage ? n = y.createElement(Ne.a, {
                        languageCode: this.props.match.params.encodedLanguage
                    }) : "en" !== this.props.languageCode && (n = y.createElement(q.V, {
                        margin: {
                            bottom: 2
                        }
                    }, y.createElement(q._23, {
                        type: q._28.H4,
                        color: q.F.Alt2,
                        fontSize: q.L.Size5,
                        transform: q._27.Uppercase,
                        "data-a-target": "international-section-header"
                    }, Object(S.d)("All Channels", "DirectoryInternationalSection"))), t = y.createElement(De, {
                        directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        directoryType: G(this.props.match.path),
                        directoryWidth: this.state.directoryWidth,
                        languageCode: this.props.languageCode
                    }));
                    var i, a = this.props.data.directory.streams.edges.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(t, n) {
                        var i = t.node;
                        return y.createElement(pe.b, {
                            directoryName: decodeURIComponent(e.props.match.params.encodedCommunityName),
                            directoryType: e.state.directoryType,
                            streamIndex: n,
                            streamNode: i,
                            key: i.id
                        })
                    });
                    if (a.length > 0) {
                        var r = !this.props.data.loading && !this.props.data.error && "" !== this.props.data.directory.id && !!this.props.data.directory.streams.pageInfo.hasNextPage;
                        i = y.createElement(ke, {
                            directoryName: this.props.data.directory.displayName,
                            communityName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                            canLoadMore: r,
                            loadMore: this.props.loadMore
                        }, a)
                    } else {
                        var o = Object(S.d)("There are currently no channels streaming to this community", "DirectoryGamePage");
                        this.state.directoryType === B.a.Games && (o = Object(S.d)("No live channels for this game", "DirectoryGamePage")), i = y.createElement(q.V, {
                            display: q.H.Flex,
                            alignItems: q.c.Center,
                            justifyContent: q.U.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, y.createElement(q._23, {
                            color: q.F.Alt2,
                            fontSize: q.L.Size4,
                            italic: !0
                        }, o))
                    }
                    return y.createElement(q.V, null, y.createElement(q.V, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, y.createElement(x.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: P.d.directory,
                        slotID: P.b.directory.banner,
                        adSize: P.c.directory.banner,
                        targeting: {
                            pagetype: P.a.games,
                            game: this.props.data.directory.displayName
                        },
                        autoEnable: !1
                    }), t, y.createElement(q.V, {
                        margin: {
                            bottom: 2
                        },
                        display: q.H.Flex,
                        flexDirection: q.J.Row
                    }, this.styleFilters()), n, i, y.createElement(T.a, {
                        onResize: this.onResize
                    })), this.props.firstPageLoaded && y.createElement(U.a, {
                        gameID: this.props.data.directory.id
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || (this.props.latencyTracking.reportInteractive(), this.props.data.directory && S.n.setPageTitle(this.props.data.directory.displayName))
                }, t = f.__decorate([Object(I.a)(qe, {
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
                                    hearthstoneBroadcasterHeroClass: e.hearthstoneClass || "",
                                    hearthstoneGameMode: e.hearthstoneMode || "",
                                    overwatchBroadcasterCharacter: e.overwatchCharacter || "",
                                    leagueOfLegendsChampionID: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === D.League && e.leagueChampion ? e.leagueChampion.toString() : "",
                                    counterStrikeMap: decodeURI(e.match.params.encodedCommunityName).toLowerCase() === D.CSGO ? e.csgoMap : "",
                                    counterStrikeSkill: ""
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return f.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: qe,
                                    variables: f.__assign({}, e.data.variables, {
                                        cursor: e.data.directory.streams.edges[e.data.directory.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            directory: f.__assign({}, n.directory, {
                                                streams: f.__assign({}, n.directory.streams, {
                                                    edges: Object(L.b)(e.directory.streams.edges, n.directory.streams.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(M.c)("DirectoryGamePage", {
                    destination: A.a.DirectoryGameIndex
                }), Object(V.a)({
                    location: j.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            game: e.data.directory ? e.data.directory.displayName : null
                        }
                    }
                })], t)
            }(y.Component),
            Qe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onSelectHearthstoneClass = function(e) {
                        return t.setState({
                            hearthstoneClass: e
                        })
                    }, t.onSelectHearthstoneMode = function(e) {
                        return t.setState({
                            hearthstoneMode: e
                        })
                    }, t.onSelectOverwatchCharacter = function(e) {
                        return t.setState({
                            overwatchCharacter: e
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e = $e;
                    return y.createElement(e, f.__assign({
                        hearthstoneClass: this.state.hearthstoneClass,
                        hearthstoneMode: this.state.hearthstoneMode,
                        leagueChampion: this.state.leagueChampion,
                        csgoMap: this.state.csgoMap,
                        onSelectHearthstoneClass: this.onSelectHearthstoneClass,
                        onSelectHearthstoneMode: this.onSelectHearthstoneMode,
                        onSelectOverwatchCharacter: this.onSelectOverwatchCharacter,
                        overwatchCharacter: this.state.overwatchCharacter
                    }, this.props))
                }, t
            }(y.Component),
            Je = Object(k.a)(function(e) {
                return {
                    languagePreferences: Object(b.a)(e),
                    sideNavExpanded: e.ui.sideNavExpanded,
                    languageCode: e.session.languageCode,
                    firstPageLoaded: e.session.firstPageLoaded,
                    csgoMap: d(e),
                    leagueChampion: u(e)
                }
            })(Qe),
            Ye = n("CIox"),
            Ke = "header.DIRECTORY_HEADER_EDIT_ENABLED",
            Xe = "header.DIRECTORY_HEADER_EDIT_DISABLED";
        S.n.store.registerReducer("directoryHeader", function(e, t) {
            switch (void 0 === e && (e = {
                isEditingEnabled: !1
            }), t.type) {
                case Ke:
                    return f.__assign({}, e, {
                        isEditingEnabled: !0
                    });
                case Xe:
                    return f.__assign({}, e, {
                        isEditingEnabled: !1
                    });
                default:
                    return e
            }
        });
        var Ze, et = n("V5M+"),
            tt = n("5eRk");
        ! function(e) {
            e.AVATAR = "AVATAR", e.BANNER = "BANNER"
        }(Ze || (Ze = {}));
        var nt, it = "directory-avatar-edit-menu",
            at = "directory-avatar-overlay",
            rt = "directory-avatar-remover",
            ot = "directory-avatar-uploader",
            lt = "directory-banner-edit-menu",
            st = "directory-banner-overlay",
            ct = "directory-banner-remover",
            dt = "directory-banner-uploader",
            ut = "https://static-cdn.jtvnw.net/community-images/defaults/avatar-285x380.png",
            mt = "https://static-cdn.jtvnw.net/community-images/defaults/banner-1200x180.png",
            pt = function() {
                return Object(S.d)("Upload new image", "DirectoryHeader")
            },
            gt = function() {
                return Object(S.d)("Remove", "DirectoryHeader")
            },
            ht = "https://api.twitch.tv/kraken/communities/",
            vt = function(e) {
                return "" + ht + e + "/images/avatar"
            },
            ft = function(e) {
                return "" + ht + e + "/images/cover"
            },
            yt = n("+8VM"),
            kt = n("66ch"),
            bt = (n("wB6A"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return y.createElement(q._19, {
                        className: "image-uploader-modal",
                        background: q.m.Base
                    }, y.createElement(kt.a, f.__assign({}, this.props)), y.createElement(yt.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(y.Component)),
            St = Object(k.a)(null, function(e) {
                return Object(H.bindActionCreators)({
                    onClose: et.c
                }, e)
            })(bt),
            _t = n("TFaR"),
            Ct = n("HZww"),
            Et = n("SiVO"),
            Nt = n("wXwV"),
            wt = 1e4,
            Dt = function() {
                return function(e, t) {
                    var n = this;
                    this.getUploadURL = e, this.onFinishUploading = t, this.uploadFile = function(e) {
                        return new Promise(function(t, i) {
                            return f.__awaiter(n, void 0, void 0, function() {
                                var n, a, r, o, l, s = this;
                                return f.__generator(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            return c.trys.push([0, 3, , 4]), [4, this.getUploadURL(e)];
                                        case 1:
                                            return n = c.sent(), a = n.url, r = n.uploadID, [4, fetch(a, {
                                                body: e,
                                                method: "PUT"
                                            })];
                                        case 2:
                                            return (o = c.sent()).status > 300 && i(new Error(Object(Nt.e)(o.status))), this.unsubscribe = S.j.subscribe({
                                                topic: Object(Ct.k)(r),
                                                success: function() {
                                                    s.timeoutID = setTimeout(function() {
                                                        s.unsubscribe(), i(new Error(Object(Nt.d)()))
                                                    }, wt)
                                                },
                                                failure: function() {
                                                    clearTimeout(s.timeoutID), i(new Error(Object(Nt.d)()))
                                                },
                                                onMessage: function(e) {
                                                    if (e.upload_id === r) {
                                                        switch (clearTimeout(s.timeoutID), e.status) {
                                                            case _t.a.POSTPROCESS_COMPLETE:
                                                                s.onFinishUploading && s.onFinishUploading(), t();
                                                                break;
                                                            case _t.a.WIDTH_VALIDATION_FAILED:
                                                            case _t.a.HEIGHT_VALIDATION_FAILED:
                                                                i(new Error(Object(Nt.c)()));
                                                                break;
                                                            case _t.a.FILE_SIZE_VALIDATION_FAILED:
                                                                i(new Error(Object(Nt.a)()));
                                                                break;
                                                            case _t.a.IS_IMAGE_VALIDATION_FAILED:
                                                                i(new Error(Object(Nt.b)(Et.b)));
                                                                break;
                                                            default:
                                                                i(new Error(Object(Nt.d)()))
                                                        }
                                                        s.unsubscribe && s.unsubscribe()
                                                    }
                                                }
                                            }), [3, 4];
                                        case 3:
                                            return l = c.sent(), S.i.error(l, "unable to upload image"), i(new Error(Object(Nt.d)())), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }
                }
            }(),
            Ot = n("YADZ"),
            Ft = (n("IMj1"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingAvatar: !1
                    }, t.renderAvatarEditMode = function() {
                        return t.props.headerEditMode ? y.createElement(q.V, null, y.createElement("div", {
                            onClick: t.onAvatarClick
                        }, y.createElement(q.V, {
                            "data-test-selector": at,
                            className: "directory-header__overlay",
                            flexDirection: q.J.Column,
                            textAlign: q._24.Center,
                            display: q.H.Flex,
                            position: q._4.Absolute,
                            alignItems: q.c.Center,
                            justifyContent: q.U.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, y.createElement(q._19, {
                            color: q.F.Overlay
                        }, y.createElement(q._10, {
                            asset: q._11.Edit
                        })), y.createElement(q._23, {
                            color: q.F.Overlay,
                            type: q._28.P
                        }, Object(S.d)("Change avatar", "DirectoryHeader")))), t.renderAvatarEditMenu()) : null
                    }, t.renderAvatarEditMenu = function() {
                        return t.state.isEditingAvatar ? y.createElement(q.p, {
                            "data-test-selector": it,
                            direction: q.q.BottomLeft,
                            show: !0
                        }, y.createElement(q.T, {
                            "data-test-selector": ot,
                            onClick: t.onAvatarUploadClick
                        }, y.createElement(q.V, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, pt())), y.createElement(q.T, {
                            "data-test-selector": rt,
                            onClick: t.onAvatarDeleteClick
                        }, y.createElement(q.V, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, gt()))) : null
                    }, t.trackAvatarEdit = function(e) {
                        S.n.tracking.track(j.SpadeEventType.CommunityEdit, {
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
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return f.__generator(this, function(n) {
                                return this.props.data && this.props.data.directory && this.props.data.directory.id && this.props.createUploadURLMutation ? (e = new Dt(this.getAvatarUploadURL, this.onAvatarDoneUploading), t = {
                                    imageDimensions: "600x800",
                                    maxFileSizeMegabytes: 1,
                                    isRequiredImageDimensions: !0,
                                    provider: e
                                }, this.props.onShowModal(St, t), [2]) : [2, null]
                            })
                        })
                    }, t.onAvatarDeleteClick = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return f.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, xe.a.delete(vt(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackAvatarEdit(), e = function(e) {
                                            return e.directory.avatarURL = ut, e
                                        }, Object(L.d)(Ot, {
                                            name: this.props.directoryName,
                                            type: Se(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.getAvatarUploadURL = function(e) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return f.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = 0, n = Et.b, a.label = 1;
                                    case 1:
                                        return t < n.length ? (i = n[t], e.type !== i ? [3, 3] : [4, this.props.createUploadURLMutation(this.props.data.directory.id, Ze.AVATAR, i)]) : [3, 4];
                                    case 2:
                                        return [2, a.sent()];
                                    case 3:
                                        return t++, [3, 1];
                                    case 4:
                                        throw new Error(Object(Nt.b)(Et.b))
                                }
                            })
                        })
                    }, t.onAvatarDoneUploading = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            return f.__generator(this, function(e) {
                                return this.props.data.refetch(), this.props.onCloseModal(), [2]
                            })
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading || this.props.data.error || !this.props.data.directory ? y.createElement(q._3, {
                        width: 80,
                        height: 112,
                        overlay: !0
                    }) : y.createElement(q.C, {
                        imageAlt: "",
                        imageSrc: this.props.data.directory.avatarURL,
                        size: q.D.Size8,
                        aspect: q.k.BoxArt
                    }), y.createElement(q.V, {
                        className: "directory-header__avatar",
                        margin: {
                            left: 3,
                            bottom: 1
                        },
                        position: q._4.Absolute,
                        attachBottom: !0
                    }, e, this.renderAvatarEditMode())
                }, t = f.__decorate([Object(I.a)(Ot, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Se(e.directoryType)
                            }
                        }
                    }
                }), v(), Object(M.c)("DirectoryAvatar", {
                    autoReportInteractive: !0
                })], t)
            }(y.Component)),
            Tt = Object(k.a)(function(e) {
                return {
                    headerEditMode: e.directoryHeader.isEditingEnabled
                }
            }, function(e) {
                return Object(H.bindActionCreators)({
                    onCloseModal: et.c,
                    onShowModal: et.d
                }, e)
            })(Ft),
            It = n("F8kA"),
            Vt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    if ("GAMES" !== this.props.directoryType) return null;
                    var e, t = null;
                    if ("irl" === this.props.directoryName.toLowerCase()) {
                        var n = Object(S.d)("New to IRL?", "DirectoryHeader"),
                            i = Object(S.d)("Learn More", "DirectoryHeader"),
                            a = void 0;
                        a = y.createElement("a", {
                            target: "_blank",
                            href: "http://link.twitch.tv/irldirectorytooltip",
                            className: "directory-header__link",
                            rel: "noopener noreferrer"
                        }, i), e = y.createElement("span", null, n, " ", a)
                    } else "always on" === this.props.directoryName.toLowerCase() && (e = Object(S.d)("24/7 streaming from your favorite brands. Watch together.", "DirectoryHeader"));
                    return e && (t = y.createElement(q._23, {
                        color: q.F.Overlay,
                        type: q._28.P,
                        "data-test-selector": "directory-game-descriptor"
                    }, e)), t
                }, t
            }(y.Component),
            Lt = n("8UKc"),
            At = (n("zSAx"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingBanner: !1
                    }, t.renderBannerEditMode = function() {
                        return t.props.headerEditMode ? y.createElement(q.V, null, y.createElement("div", {
                            onClick: t.onBannerClick
                        }, y.createElement(q.V, {
                            "data-test-selector": st,
                            className: "directory-header__overlay",
                            flexDirection: q.J.Column,
                            display: q.H.Flex,
                            position: q._4.Absolute,
                            alignItems: q.c.Center,
                            justifyContent: q.U.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, y.createElement(q.V, {
                            position: q._4.Relative
                        }, y.createElement(q._19, {
                            color: q.F.Overlay,
                            textAlign: q._24.Center
                        }, y.createElement(q._10, {
                            asset: q._11.Edit
                        })), y.createElement(q._23, {
                            color: q.F.Overlay,
                            type: q._28.P
                        }, Object(S.d)("Change cover image", "DirectoryHeader")), t.renderBannerEditMenu()))), y.createElement(q.V, {
                            alignContent: q.b.End,
                            position: q._4.Absolute,
                            textAlign: q._24.Right,
                            margin: 3,
                            attachBottom: !0,
                            attachRight: !0
                        }, y.createElement(q.u, {
                            icon: q._11.Check,
                            onClick: t.onDoneClick
                        }, Object(S.d)("Done", "DirectoryHeader")))) : null
                    }, t.renderBannerEditMenu = function() {
                        return t.state.isEditingBanner ? y.createElement(q.p, {
                            "data-test-selector": lt,
                            direction: q.q.BottomCenter,
                            show: !0
                        }, y.createElement(q.T, {
                            "data-test-selector": dt,
                            onClick: t.onBannerUploadClick
                        }, y.createElement(q.V, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, pt())), y.createElement(q.T, {
                            "data-test-selector": ct,
                            onClick: t.onBannerDeleteClick
                        }, y.createElement(q.V, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, gt()))) : null
                    }, t.trackBannerEdit = function(e) {
                        S.n.tracking.track(j.SpadeEventType.CommunityEdit, {
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
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return f.__generator(this, function(n) {
                                return this.props.data && this.props.data.directory && this.props.data.directory.id && this.props.createUploadURLMutation ? (e = new Dt(this.getBannerUploadURL, this.onBannerDoneUploading), t = {
                                    imageDimensions: "600x800",
                                    maxFileSizeMegabytes: 1,
                                    isRequiredImageDimensions: !0,
                                    provider: e
                                }, this.props.onShowModal(St, t), [2]) : [2, null]
                            })
                        })
                    }, t.onBannerDeleteClick = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return f.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, xe.a.delete(ft(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackBannerEdit(), e = function(e) {
                                            return e.directory.coverURL = mt, e
                                        }, Object(L.d)(Lt, {
                                            name: this.props.directoryName,
                                            type: Se(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.getBannerUploadURL = function(e) {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return f.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = 0, n = Et.b, a.label = 1;
                                    case 1:
                                        return t < n.length ? (i = n[t], e.type !== i ? [3, 3] : [4, this.props.createUploadURLMutation(this.props.data.directory.id, Ze.BANNER, i)]) : [3, 4];
                                    case 2:
                                        return [2, a.sent()];
                                    case 3:
                                        return t++, [3, 1];
                                    case 4:
                                        throw new Error(Object(Nt.b)(Et.b))
                                }
                            })
                        })
                    }, t.onBannerDoneUploading = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            return f.__generator(this, function(e) {
                                return this.props.data.refetch(), this.props.onCloseModal(), [2]
                            })
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    var e;
                    if (this.props.data.loading || this.props.data.error || !this.props.data.directory) e = y.createElement(q._3, {
                        width: 200,
                        height: 20,
                        overlay: !0
                    });
                    else {
                        var t = Object(S.d)("{followerCount,number} Followers", {
                                followerCount: this.props.data.directory.followersCount
                            }, "DirectoryHeader"),
                            n = Object(S.d)("{viewerCount,number} Viewers", {
                                viewerCount: this.props.data.directory.viewersCount
                            }, "DirectoryHeader");
                        e = y.createElement(q._23, {
                            color: q.F.Overlay,
                            type: q._28.P
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
                    var r = Z("directory-header__banner", {
                        "directory-header__banner--blur": i
                    });
                    return y.createElement(q.V, {
                        position: q._4.Relative,
                        overflow: q._0.Hidden
                    }, y.createElement("div", {
                        className: r,
                        style: a,
                        "data-test-selector": "directory-banner-image"
                    }), y.createElement(q.V, {
                        className: "directory-header__title",
                        position: q._4.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, y.createElement(It.a, {
                        to: {
                            pathname: this.props.lastBrowsePath
                        },
                        className: "directory-header__link"
                    }, y.createElement(q._10, {
                        asset: q._11.AngleLeft,
                        height: 10
                    }), Object(S.d)("Browse", "DirectoryHeader")), y.createElement(q._23, {
                        color: q.F.Overlay,
                        type: q._28.H2
                    }, this.props.data && this.props.data.directory && this.props.data.directory.displayName), y.createElement(Vt, f.__assign({}, this.props)), e), this.renderBannerEditMode())
                }, t = f.__decorate([Object(I.a)(Lt, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Se(e.directoryType)
                            }
                        }
                    }
                }), v(), Object(M.c)("DirectoryBanner", {
                    autoReportInteractive: !0
                })], t)
            }(y.Component)),
            Rt = n("mmuw"),
            jt = Object(k.a)(function(e) {
                return {
                    headerEditMode: e.directoryHeader.isEditingEnabled,
                    lastBrowsePath: Object(Rt.c)(e)
                }
            }, function(e) {
                return Object(H.bindActionCreators)({
                    onCloseModal: et.c,
                    onDisableDirectoryHeaderEdit: g,
                    onShowModal: et.d
                }, e)
            })(At),
            xt = n("+xm8"),
            Pt = n("f2i/"),
            Mt = n("qs/O"),
            Ut = n("odW7"),
            Bt = n("d+bE"),
            Gt = function(e) {
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
                            var n = "follow" === e ? j.SpadeEventType.CommunityFollow : j.SpadeEventType.CommunityUnfollow;
                            S.n.tracking.track(n, {
                                community_id: t.props.data.community.id,
                                name: t.props.data.community.name,
                                is_official: !1,
                                user_id: t.props.data.currentUser && t.props.data.currentUser.id
                            })
                        }
                    }, t.followChannel = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return f.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.props.followCommunity && this.props.data ? (e = f.__assign({}, Object(L.a)({
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
                                        }, Object(L.d)(Mt, {
                                            name: this.props.directoryName
                                        }, n), [2]
                                }
                            })
                        })
                    }, t.unfollowChannel = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return f.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.props.unfollowCommunity && this.props.data ? (e = f.__assign({}, Object(L.a)({
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
                                        }, Object(L.d)(Mt, {
                                            name: this.props.directoryName
                                        }, t), [2]
                                }
                            })
                        })
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && !e.data.loading && !e.data.error && e.data.community && this.setState({
                        isFollowing: e.data.community.self && null !== e.data.community.self.follow
                    })
                }, t.prototype.render = function() {
                    var e = Object(S.d)("Follow", "DirectoryFollowButton");
                    return this.props.isLoggedIn ? !this.props.data || this.props.data.loading ? y.createElement(q._3, {
                        width: 70,
                        height: 30
                    }) : this.communityDataLoaded() ? this.state.isFollowing ? y.createElement(q.V, {
                        display: q.H.Flex,
                        margin: {
                            left: 1
                        },
                        className: "directory-follow-btn"
                    }, y.createElement(q.v, {
                        ariaLabel: Object(S.d)("Unfollow", "DirectoryFollowButton"),
                        onClick: this.toggleFollowing,
                        "data-a-target": "directory-unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: q._11.Heart,
                        statusAlertIcon: q._11.Unheart
                    })) : y.createElement(q.u, f.__assign({
                        ariaLabel: e,
                        "data-a-target": "directory-follow-button",
                        "data-test-selector": "follow-button",
                        icon: q._11.Heart,
                        onClick: this.toggleFollowing
                    }, Object(q._40)(this.props)), e) : null : y.createElement(q.u, {
                        ariaLabel: e,
                        icon: q._11.Heart,
                        onClick: this.props.login,
                        "data-a-target": "directory-follow-button"
                    }, e)
                }, t.prototype.reportInteractive = function() {
                    this.props.isLoggedIn ? this.props.directoryName && !this.communityDataLoaded() || this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive()
                }, t = f.__decorate([Object(I.a)(Mt, {
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
                }), Object(I.a)(Ut, {
                    name: "followCommunity"
                }), Object(I.a)(Bt, {
                    name: "unfollowCommunity"
                }), Object(M.c)("DirectoryFollowButton")], t)
            }(y.Component),
            Ht = Object(k.a)(function(e) {
                return {
                    isLoggedIn: Object(re.d)(e)
                }
            }, function(e) {
                return Object(H.bindActionCreators)({
                    login: function() {
                        return Object(Pt.f)(xt.a.DirectoryFollowButton)
                    }
                }, e)
            })(Gt),
            Wt = n("jetF"),
            zt = n("czpb"),
            qt = n("oSFp"),
            $t = n("LjAQ"),
            Qt = n("mw/a"),
            Jt = n("BhyV"),
            Yt = (n("vxr0"), n("0zzo")),
            Kt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tosBanCommunity = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return f.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.tosBanCommunity ? (e = f.__assign({}, Object(L.a)({
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
                return f.__extends(t, e), t.prototype.render = function() {
                    return y.createElement(q.Q, {
                        position: q._4.Relative
                    }, y.createElement(q._19, {
                        background: q.m.Base,
                        className: "community-ban-modal"
                    }, y.createElement(q.V, {
                        padding: 2
                    }, y.createElement(q.V, {
                        margin: {
                            bottom: 2
                        }
                    }, y.createElement(q._23, {
                        type: q._28.H4
                    }, Object(S.d)("Are you sure you want to ban {name}?", {
                        name: this.props.communityName
                    }, "CommunityBanModal"))), y.createElement(q._19, {
                        borderTop: !0
                    }, y.createElement(q.V, {
                        padding: {
                            top: 2
                        },
                        textAlign: q._24.Center
                    }, y.createElement(q.V, {
                        display: q.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, y.createElement(q.u, {
                        type: q.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(S.d)("Cancel", "CommunityBanModal"))), y.createElement(q.V, {
                        display: q.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, y.createElement(q.u, {
                        onClick: this.tosBanCommunity,
                        "data-test-selector": "ban-button"
                    }, Object(S.d)("Ban", "CommunityBanModal")))))), y.createElement(yt.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(y.Component),
            Xt = Object(Jt.compose)(Object(I.a)(Yt, {
                name: "tosBanCommunity"
            }))(Kt),
            Zt = Object(k.a)(null, function(e) {
                return Object(H.bindActionCreators)({
                    onCloseModal: et.c
                }, e)
            })(Xt),
            en = n("9VER"),
            tn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingCommunity: !1
                    }, t.openReportModal = function() {
                        t.props.isLoggedIn ? t.props.onShowModal(qt.a, {
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentID: t.props.data.community.id,
                                contentType: Qt.a.Community,
                                targetUserID: t.props.data.community.owner.id,
                                extra: t.props.communityName
                            },
                            title: Object(S.d)("Report {communityName}", {
                                communityName: t.props.communityName
                            }, "CommunitiesSettingsCog")
                        }) : t.props.login()
                    }, t.openBanModal = function() {
                        t.props.onShowModal(Zt, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName
                        })
                    }, t.onEditModeToggle = function() {
                        t.props.isHeaderEditEnabled ? t.props.onDisableDirectoryHeaderEdit() : (S.n.history.push(Object(be.a)(t.props.communityName) + "/details"), t.props.onEnableDirectoryHeaderEdit())
                    }, t.handleReportModalClose = function(e) {
                        (e === $t.b.MutationError || e === $t.b.Success) && t.props.history.push("/")
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && this.props.data.error ? null : y.createElement(q.V, {
                        position: q._4.Relative
                    }, y.createElement(Wt.a, null, y.createElement(q.v, {
                        ariaLabel: Object(S.d)("Settings", "CommunitiesSettingsCog"),
                        icon: q._11.Gear
                    }), y.createElement(q.p, {
                        direction: q.q.BottomRight,
                        size: q.r.ExtraSmall,
                        offsetX: "0.5rem"
                    }, this.renderModerationInteractable(), this.renderEditInteractable(), y.createElement(q.T, {
                        onClick: this.openReportModal,
                        "data-test-selector": "report-selector"
                    }, y.createElement(q.V, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(S.d)("Report", "CommunitiesSettingsCog"))), this.renderBanInteractable())))
                }, t.prototype.renderEditInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.editing ? null : y.createElement(q.T, {
                        onClick: this.onEditModeToggle,
                        "data-test-selector": "edit-selector"
                    }, y.createElement(q.V, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(S.d)("Edit", "CommunitiesSettingsCog")))
                }, t.prototype.renderModerationInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.banning ? null : y.createElement(q.T, {
                        linkTo: Object(zt.a)("/communities/" + this.props.communityName + "/moderation/log"),
                        "data-test-selector": "moderation-selector"
                    }, y.createElement(q.V, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(S.d)("Moderation", "CommunitiesSettingsCog")))
                }, t.prototype.renderBanInteractable = function() {
                    if (!this.props.data || this.props.data.loading || !this.props.data.community || !this.props.data.community.id) return null;
                    return this.props.data && this.props.data.currentUser && this.props.data.currentUser.roles && (this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin) ? y.createElement(q.T, {
                        onClick: this.openBanModal,
                        "data-test-selector": "ban-selector"
                    }, y.createElement(q.V, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(S.d)("Ban", "CommunitiesSettingsCog"))) : null
                }, t = f.__decorate([Object(I.a)(en, {
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
                }), Object(M.c)("SettingsCog", {
                    autoReportInteractive: !0
                })], t)
            }(y.Component),
            nn = Object(k.a)(function(e) {
                return {
                    isHeaderEditEnabled: h(e),
                    isLoggedIn: Object(re.d)(e)
                }
            }, function(e) {
                return Object(H.bindActionCreators)({
                    login: function() {
                        return Object(Pt.f)(xt.a.ReportChannel)
                    },
                    onShowModal: et.d,
                    onCloseModal: et.c,
                    onEnableDirectoryHeaderEdit: p,
                    onDisableDirectoryHeaderEdit: g
                }, e)
            })(Object(It.f)(tn)),
            an = n("/XPz"),
            rn = n("D88i"),
            on = (n("5yZy"), "directory-tabs__item"),
            ln = on + "--selected";
        ! function(e) {
            e[e.DirectoryPage = 0] = "DirectoryPage", e[e.DirectoryVideosPage = 1] = "DirectoryVideosPage", e[e.DirectoryClipsPage = 2] = "DirectoryClipsPage", e[e.DirectoryDetailsPage = 3] = "DirectoryDetailsPage"
        }(nt || (nt = {}));
        var sn, cn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return y.createElement(q.V, {
                        className: "directory-tabs"
                    }, y.createElement(q.V, {
                        display: q.H.Flex,
                        justifyContent: q.U.Between,
                        flexWrap: q.K.NoWrap,
                        fullHeight: !0
                    }, y.createElement(q.V, {
                        display: q.H.Flex,
                        alignItems: q.c.Stretch,
                        flexShrink: 0,
                        flexWrap: q.K.NoWrap
                    }, this.renderTabs(), this.renderGameDetailsTab()), y.createElement(q.V, {
                        display: q.H.Flex,
                        alignItems: q.c.Center,
                        flexShrink: 0,
                        flexWrap: q.K.NoWrap,
                        padding: {
                            x: 2
                        }
                    }, this.renderSettingsCog(), this.renderFollowButton())))
                }, t.prototype.renderTabs = function() {
                    var e = this,
                        t = this.props.directoryType === B.a.Games ? Object(be.c)(this.props.directoryName) : Object(be.a)(this.props.directoryName);
                    return this.getDirectoryTabs().map(function(n, i) {
                        var a = n.label.replace(/ /g, "-").toLowerCase(),
                            r = Z(on, (o = {}, o["directory-tabs__item--first"] = 0 === i, o[ln] = n.isSelected, o));
                        return y.createElement(q.Q, {
                            key: on + "--" + n.label,
                            display: q.H.Flex,
                            alignItems: q.c.Center,
                            flexShrink: 0,
                            "data-a-target": "game-directory-" + a + "-tab"
                        }, y.createElement(It.a, {
                            className: r,
                            to: "" + t + n.path
                        }, e.renderTabData(n.label)));
                        var o
                    })
                }, t.prototype.renderTabData = function(e) {
                    return y.createElement(q.V, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: q.H.Flex
                    }, y.createElement(q._23, {
                        type: q._28.Span,
                        fontSize: q.L.Size5
                    }, e))
                }, t.prototype.renderGameDetailsTab = function() {
                    if (this.props.data.loading && !this.props.data.directory) return null;
                    if (this.props.data.error || !this.props.data.directory) return null;
                    if (this.props.data.directory && !this.props.data.directory.product) return null;
                    var e = Z(on, (i = {}, i[ln] = this.props.activeTab === nt.DirectoryDetailsPage, i)),
                        t = Object(S.d)("Game Details", "DirectoryGameTabs"),
                        n = Object(be.c)(this.props.directoryName) + "/details";
                    return y.createElement(q.Q, {
                        display: q.H.Flex,
                        alignItems: q.c.Center,
                        flexShrink: 0
                    }, y.createElement(It.a, {
                        className: e,
                        to: n
                    }, this.renderTabData(t)));
                    var i
                }, t.prototype.renderSettingsCog = function() {
                    return this.props.directoryType !== B.a.Communities ? null : y.createElement(nn, {
                        communityName: this.props.directoryName
                    })
                }, t.prototype.renderFollowButton = function() {
                    switch (this.props.directoryType) {
                        case B.a.Communities:
                            return y.createElement(q.V, {
                                margin: {
                                    left: 1
                                }
                            }, y.createElement(Ht, {
                                directoryName: this.props.directoryName
                            }));
                        case B.a.Games:
                            return y.createElement(q.V, {
                                margin: {
                                    left: 1
                                }
                            }, y.createElement(an.a, {
                                gameName: this.props.directoryName,
                                src: "directory"
                            }));
                        default:
                            return null
                    }
                }, t.prototype.getDirectoryTabs = function() {
                    var e = this;
                    return [{
                        label: Object(S.d)("Live Channels", "DirectoryGameTabs"),
                        path: "",
                        isSelected: this.props.activeTab === nt.DirectoryPage,
                        whitelistDirectories: [B.a.Communities, B.a.Games]
                    }, {
                        label: Object(S.d)("Videos", "DirectoryGameTabs"),
                        path: "/videos/all",
                        isSelected: this.props.activeTab === nt.DirectoryVideosPage,
                        whitelistDirectories: [B.a.Games]
                    }, {
                        label: Object(S.d)("Clips", "DirectoryGameTabs"),
                        path: "/clips",
                        isSelected: this.props.activeTab === nt.DirectoryClipsPage,
                        whitelistDirectories: [B.a.Games]
                    }, {
                        label: Object(S.d)("Details", "DirectoryHeader"),
                        path: "/details",
                        isSelected: this.props.activeTab === nt.DirectoryDetailsPage,
                        whitelistDirectories: [B.a.Communities]
                    }].filter(function(t) {
                        return t.whitelistDirectories.includes(e.props.directoryType)
                    })
                }, t = f.__decorate([Object(I.a)(rn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.directoryName),
                                type: Se(e.directoryType)
                            }
                        }
                    }
                }), Object(M.c)("DirectoryGameTabs")], t)
            }(y.Component),
            dn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return y.createElement(q.V, {
                        position: q._4.Relative
                    }, y.createElement(jt, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), y.createElement(Tt, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), y.createElement(cn, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName,
                        activeTab: this.props.activeTab
                    }))
                }, t = f.__decorate([Object(M.c)("DirectoryHeader", {
                    autoReportInteractive: !0
                })], t)
            }(y.Component),
            un = n("eXld"),
            mn = n("lfvs"),
            pn = n("dH4b"),
            gn = n("J4ib"),
            hn = n("QYm2"),
            vn = n("2nSg"),
            fn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        buttonState: q.y.Default,
                        description: "",
                        rules: "",
                        summary: ""
                    }, t.onDescriptionChange = function(e) {
                        t.setState({
                            buttonState: q.y.Default,
                            description: e.target.value
                        })
                    }, t.onRulesChange = function(e) {
                        t.setState({
                            buttonState: q.y.Default,
                            rules: e.target.value
                        })
                    }, t.onSummaryChange = function(e) {
                        t.setState({
                            buttonState: q.y.Default,
                            summary: e.target.value
                        })
                    }, t.onSaveClick = function() {
                        if (t.props.editCommunity && t.props.data) {
                            var e = t.state.description,
                                n = t.state.rules,
                                i = t.state.summary,
                                a = f.__assign({}, Object(L.a)({
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
                                buttonState: q.y.Loading
                            }), t.props.editCommunity(a).then(function(e) {
                                Object(L.d)(hn, {
                                    name: decodeURIComponent(t.props.communityName)
                                }, function(n) {
                                    return ["description", "summary", "rules"].forEach(function(i) {
                                        var a = n.community[i],
                                            r = e.data.editCommunity.community[i];
                                        a !== r && S.n.tracking.track(j.SpadeEventType.CommunityEdit, {
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
                                        buttonState: q.y.Success
                                    }), n
                                })
                            })
                        }
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.data.loading || e.data.error || !e.data.community || this.setState({
                        description: e.data.community.description,
                        rules: e.data.community.rules,
                        summary: e.data.community.summary
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.props.isHeaderEditEnabled && this.props.onDisableDirectoryHeaderEdit()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? y.createElement(q._34, {
                        childWidth: q._35.Large
                    }, this.renderPlaceholder(), this.renderPlaceholder()) : this.props.data.error ? null : y.createElement(q._34, {
                        childWidth: q._35.Large
                    }, y.createElement(q.V, null, this.renderSummary(), this.renderDetailsPanel({
                        title: Object(gn.d)("Description", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.description,
                        onChangeHandler: this.onDescriptionChange
                    })), y.createElement(q.V, null, this.renderDetailsPanel({
                        title: Object(gn.d)("Rules", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.rules,
                        onChangeHandler: this.onRulesChange
                    }), this.props.isHeaderEditEnabled ? this.renderSaveButton() : null))
                }, t.prototype.renderDetailsPanel = function(e) {
                    var t = y.createElement(q._37, null, y.createElement(mn, f.__assign({
                        source: e.data
                    }, pn.a)));
                    return this.props.isHeaderEditEnabled && (t = y.createElement(q._25, {
                        defaultValue: e.data,
                        onChange: e.onChangeHandler,
                        rows: e.rows || 15,
                        maxLength: e.maxLength
                    })), y.createElement(q._19, {
                        background: q.m.Base,
                        border: !0,
                        margin: {
                            bottom: 2
                        }
                    }, y.createElement(q._19, {
                        borderBottom: !0
                    }, y.createElement(q.V, {
                        padding: 1
                    }, y.createElement(q._23, {
                        transform: q._27.Uppercase,
                        type: q._28.H5
                    }, e.title))), y.createElement(q.V, {
                        padding: 1
                    }, t))
                }, t.prototype.renderSummary = function() {
                    return this.props.isHeaderEditEnabled ? this.renderDetailsPanel({
                        title: Object(gn.d)("Summary", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.summary,
                        onChangeHandler: this.onSummaryChange,
                        rows: 5,
                        maxLength: 160
                    }) : null
                }, t.prototype.renderSaveButton = function() {
                    return y.createElement(q.V, {
                        margin: {
                            top: 1
                        },
                        textAlign: q._24.Right
                    }, y.createElement(q.u, {
                        state: this.state.buttonState,
                        onClick: this.onSaveClick,
                        disabled: !this.state.description || !this.state.rules || !this.state.summary,
                        "data-test-selector": "save-button"
                    }, Object(gn.d)("Save", "DirectoryCommunityDetailsContent")))
                }, t.prototype.renderPlaceholder = function() {
                    return y.createElement(q.V, null, y.createElement(q._19, {
                        background: q.m.Base,
                        border: !0
                    }, y.createElement(q._19, {
                        borderBottom: !0
                    }, y.createElement(q.V, {
                        padding: 1
                    }, y.createElement(q._3, {
                        lineCount: 6
                    })))))
                }, t = f.__decorate([Object(I.a)(hn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(I.a)(vn, {
                    name: "editCommunity"
                }), Object(M.c)("DirectoryCommunityDetailsComponent", {
                    autoReportInteractive: !0
                })], t)
            }(y.Component),
            yn = Object(k.a)(function(e) {
                return {
                    isHeaderEditEnabled: h(e)
                }
            }, function(e) {
                return Object(H.bindActionCreators)({
                    onDisableDirectoryHeaderEdit: g
                }, e)
            })(fn),
            kn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        directoryType: G(t.match.path)
                    }, n
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), S.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    return y.createElement(q.V, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, y.createElement(yn, {
                        communityName: decodeURIComponent(this.props.match.params.encodedCommunityName)
                    }))
                }, t = f.__decorate([Object(M.c)("DirectoryCommunityDetailsPage", {
                    destination: A.a.DirectoryCommunityDetails
                })], t)
            }(y.Component),
            bn = n("QAcM"),
            Sn = n("5bwi"),
            _n = n("WNmM"),
            Cn = n("TLUY"),
            En = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.loadMoreTopClips = function() {
                        return f.__awaiter(t, void 0, void 0, function() {
                            return f.__generator(this, function(e) {
                                return this.canLoadMore() ? [2, this.props.loadMore()] : [2]
                            })
                        })
                    }, t.canLoadMore = function() {
                        var e = t.props.data;
                        return !e.loading && !e.error && "" !== t.props.gameName && e.game && e.game.clips.pageInfo.hasNextPage
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.game) return y.createElement(q.Z, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return y.createElement(F.a, {
                        message: Object(gn.d)("Error loading data.", "DirectoryGameClipsContent")
                    });
                    if (this.props.data.game) {
                        var e = bn.a[this.props.timeFilterValue];
                        return y.createElement(q.V, {
                            padding: {
                                top: 2,
                                bottom: 3,
                                x: 3
                            }
                        }, y.createElement(Sn.a, {
                            clips: this.props.data.game.clips.edges.map(function(e) {
                                return e.node
                            }),
                            pageType: _n.b.Game,
                            timeFilterValue: this.props.timeFilterValue,
                            updateTimeFilter: this.props.updateTimeFilter,
                            loadMoreClips: this.loadMoreTopClips,
                            isLoading: !1
                        }), y.createElement(W.a, {
                            enabled: this.canLoadMore(),
                            key: e,
                            loadMore: this.props.loadMore
                        }))
                    }
                    return y.createElement(F.a, {
                        message: Object(gn.d)("Game does not exist", "DirectoryGameClipsContent")
                    })
                }, t = f.__decorate([Object(M.c)("DirectoryGameClipsContent", {
                    autoReportInteractive: !0
                }), Object(I.a)(Cn, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: decodeURIComponent(e.gameName),
                                limit: 20,
                                criteria: {
                                    languages: e.languagePreferences,
                                    filter: bn.a[e.timeFilterValue]
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return f.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: Cn,
                                    variables: f.__assign({}, e.data.variables, {
                                        cursor: e.data.game.clips.edges[e.data.game.clips.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            game: f.__assign({}, n.game, {
                                                clips: f.__assign({}, n.game.clips, {
                                                    edges: Object(L.b)(e.game.clips.edges, n.game.clips.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                })], t)
            }(y.Component),
            Nn = Object(k.a)(function(e) {
                return {
                    languagePreferences: Object(b.a)(e)
                }
            })(En),
            wn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateTimeFilter = function(e) {
                        n.setState({
                            timeFilterValue: e
                        })
                    }, n.state = {
                        directoryType: G(t.match.path),
                        timeFilterValue: bn.b.Day
                    }, n
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), S.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    return y.createElement(Nn, {
                        gameName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        updateTimeFilter: this.updateTimeFilter,
                        timeFilterValue: this.state.timeFilterValue
                    })
                }, t = f.__decorate([Object(M.c)("DirectoryGameClipsPage", {
                    destination: A.a.DirectoryGameClips
                }), Object(V.a)({
                    location: j.PageviewLocation.ClipsGame
                })], t)
            }(y.Component),
            Dn = n("68hr"),
            On = n("oAfo"),
            Fn = n("4Tv+"),
            Tn = n("J5Bm"),
            In = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        var e = t.props && t.props.referrer;
                        Object(Fn.a)(t.props.content.info, e, t.props.game, j.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.content,
                        t = e.description,
                        n = e.info,
                        i = e.tags,
                        a = n.description,
                        r = n.imageURL,
                        o = n.title,
                        l = i.join(", "),
                        s = {
                            info: n,
                            countryCode: this.props.countryCode,
                            crates: n.crateASINs,
                            isInGameContent: !0,
                            userHasPrime: this.props.hasPrime
                        };
                    return y.createElement(q.G, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 6
                        }
                    }, y.createElement(q.V, {
                        margin: {
                            bottom: 3
                        }
                    }, y.createElement(q.O, {
                        gutterSize: q.P.Default
                    }, y.createElement(q.G, {
                        cols: 4
                    }, y.createElement(q.j, {
                        ratio: q.k.Aspect1x1
                    }, y.createElement("img", {
                        src: r
                    }))), y.createElement(q.G, {
                        cols: 8
                    }, y.createElement(q._23, {
                        type: q._28.P,
                        fontSize: q.L.Size4,
                        title: o
                    }, o), y.createElement(q._23, {
                        type: q._28.P,
                        color: q.F.Alt2,
                        title: l
                    }, l), y.createElement(q.V, {
                        display: q.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: q.K.NoWrap,
                        padding: {
                            bottom: 1,
                            top: 2
                        }
                    }, y.createElement(Tn.a, {
                        onClickBuyNow: this.onBuyInGameContentNow,
                        options: s
                    })), y.createElement(q._37, null, y.createElement(mn, {
                        source: a || t
                    }))))))
                }, t
            }(y.Component),
            Vn = Object(M.c)("FeaturedContent")(In),
            Ln = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.alt ? q.m.Alt : q.m.Base;
                    return y.createElement(q._19, {
                        background: e,
                        border: !0,
                        padding: {
                            left: 3,
                            right: 3
                        }
                    }, this.props.children)
                }, t
            }(y.Component),
            An = Object(M.c)("GameDetailsSection")(Ln),
            Rn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return y.createElement(q.V, {
                        margin: {
                            bottom: 1
                        }
                    }, y.createElement(q._23, {
                        type: q._28.H3
                    }, this.props.title))
                }, t
            }(y.Component),
            jn = Object(M.c)("GameDetailsTitle")(Rn),
            xn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.contentList;
                    if (0 === t.length) return null;
                    var n = t.map(function(t, n) {
                        return y.createElement(Vn, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            refetchData: e.props.refetchData,
                            key: n,
                            referrer: e.props.referrer
                        })
                    });
                    return y.createElement(An, {
                        alt: !0
                    }, y.createElement(jn, {
                        title: Object(S.d)("Game Add-Ons", "FeaturedContentRow")
                    }), y.createElement(q.O, {
                        gutterSize: q.P.Large
                    }, n))
                }, t
            }(y.Component),
            Pn = Object(M.c)("FeaturedContentRow")(xn),
            Mn = n("aFoJ"),
            Un = (n("nAt9"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSeparator = function() {
                        return y.createElement(q._19, {
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
                        n && Object(Fn.a)(n, e, t.props.game, j.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onClaimPrimeOffer = function(e) {
                        t.props.claimPrimeOffer && t.props.claimPrimeOffer(Object(L.a)({
                            offerID: e
                        })).then(function(e) {
                            t.props.refetchData && t.props.refetchData()
                        })
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t.renderNewWindowLink = function(e) {
                        return y.createElement("a", {
                            href: e.href,
                            target: "_blank"
                        }, e.children)
                    }, t.renderSharedRevenueLink = function(e) {
                        return y.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2771293-how-to-buy-games-on-twitch#partners",
                            "data-test-selector": "fuel-shared-revenue-link",
                            target: "_blank"
                        }, e)
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.game,
                        t = e ? e.product : void 0;
                    if (!e || !t) return y.createElement(An, {
                        alt: !0
                    }, y.createElement(q._19, {
                        className: "game-details-box",
                        padding: {
                            top: 2,
                            right: 1,
                            bottom: 2,
                            left: 1
                        },
                        flexDirection: q.J.Row,
                        display: q.H.Flex,
                        justifyContent: q.U.Between,
                        alignItems: q.c.Center
                    }, y.createElement(q.V, {
                        display: q.H.Flex,
                        flexDirection: q.J.Row,
                        alignItems: q.c.Center
                    }, y.createElement(q.V, null, y.createElement(q._3, {
                        width: 175,
                        height: 36
                    })), this.renderSeparator(), y.createElement(q.V, null, y.createElement(q._3, {
                        width: 22,
                        height: 30
                    })), y.createElement(q.V, null, y.createElement(q._3, {
                        width: 50,
                        height: 15
                    }))), y.createElement(q.V, null, y.createElement(q._3, {
                        width: 290,
                        height: 20
                    }))));
                    var n = this.props.countryCode,
                        i = !(!this.props.currentUser || !this.props.currentUser.hasPrime),
                        a = {
                            info: t.info,
                            crates: t.info.crateASINs,
                            size: q.x.Large,
                            externalAcquisition: t.acquisition,
                            countryCode: n,
                            userHasPrime: i
                        },
                        r = t.supportedPlatforms.map(function(e) {
                            return y.createElement("img", {
                                "data-test-selector": "game-details-box-platform-" + e.name,
                                alt: e.name,
                                src: e.iconURL,
                                key: "platform:" + e.name
                            })
                        }),
                        o = null;
                    if (this.props.referrer && this.props.referrer.settings.isCommerceRevShareEnabled) {
                        var l = Object(S.d)("Purchase revenue <x:link>will be shared</x:link> with {channel}", {
                            channel: y.createElement(q._23, {
                                bold: !0,
                                type: q._28.Span
                            }, this.props.referrer.displayName),
                            "x:link": this.renderSharedRevenueLink
                        }, "GameDetailsBox");
                        o = y.createElement(q._23, {
                            "data-test-selector": "fuel-shared-revenue"
                        }, l)
                    }
                    return y.createElement(An, {
                        alt: !0
                    }, y.createElement(q._19, {
                        className: "game-details-box",
                        padding: {
                            top: 2,
                            right: 1,
                            bottom: 2,
                            left: 1
                        },
                        flexDirection: q.J.Row,
                        display: q.H.Flex,
                        justifyContent: q.U.Between,
                        alignItems: q.c.Center
                    }, y.createElement(q.V, {
                        display: q.H.Flex,
                        flexDirection: q.J.Row,
                        alignItems: q.c.Center
                    }, y.createElement(Tn.a, {
                        onClickBuyNow: this.onBuyNowClick,
                        onClickClaimPrimeOffer: this.onClaimPrimeOffer,
                        options: a,
                        "data-test-selector": "game-details-box-fuel-buy-button"
                    }), this.renderSeparator(), y.createElement("img", {
                        alt: Object(S.d)("Maturity Rating", "GameDetailsBox"),
                        src: t.esrbRating.iconURL,
                        "data-test-selector": "game-details-box-rating",
                        className: "game-details-box__rating"
                    }), r, y.createElement(mn, {
                        "data-test-selector": "game-details-box-launch-platform",
                        source: t.launchPlatform.description,
                        renderers: {
                            Link: this.renderNewWindowLink
                        }
                    })), o))
                }, t
            }(y.Component)),
            Bn = Object(M.c)("GameDetailBox")(Un),
            Gn = Object(I.a)(Mn, {
                name: "claimPrimeOffer"
            })(Bn),
            Hn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
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
                            return y.createElement("li", {
                                key: t
                            }, y.createElement(mn, {
                                source: e
                            }))
                        }),
                        l = i.map(function(e, t) {
                            return [y.createElement(q.G, {
                                key: t + "lang",
                                cols: 3
                            }, y.createElement(q.V, null, e.language)), y.createElement(q.G, {
                                key: t + "int",
                                cols: 3
                            }, y.createElement(q._19, {
                                textAlign: q._24.Center
                            }, e.hasInterface && y.createElement(q._10, {
                                asset: q._11.Check,
                                type: q._12.Success
                            }))), y.createElement(q.G, {
                                key: t + "audio",
                                cols: 3
                            }, y.createElement(q._19, {
                                textAlign: q._24.Center
                            }, e.hasAudio && y.createElement(q._10, {
                                asset: q._11.Check,
                                type: q._12.Success
                            }))), y.createElement(q.G, {
                                key: t + "subs",
                                cols: 3
                            }, y.createElement(q._19, {
                                textAlign: q._24.Center
                            }, e.hasSubtitles && y.createElement(q._10, {
                                asset: q._11.Check,
                                type: q._12.Success
                            }))), y.createElement(q.G, {
                                key: t + "hr",
                                cols: 12
                            }, y.createElement(q._19, {
                                margin: {
                                    top: .5,
                                    bottom: .5
                                },
                                borderBottom: !0,
                                alignContent: q.b.Stretch
                            }))]
                        }),
                        s = this.renderSystemRequirements(a),
                        c = this.renderSystemRequirements(r);
                    return y.createElement(An, null, y.createElement(q.O, {
                        gutterSize: q.P.Large
                    }, y.createElement(q.G, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, y.createElement(q.V, {
                        margin: {
                            top: 4
                        }
                    }, y.createElement(jn, {
                        title: Object(S.d)("Description", "DirectoryGameDetailsPage")
                    }), y.createElement(q._37, null, y.createElement(mn, {
                        source: t.description
                    }))), y.createElement(q.V, {
                        margin: {
                            top: 4
                        }
                    }, y.createElement(jn, {
                        title: Object(S.d)("Features", "DirectoryGameDetailsPage")
                    }), y.createElement(q._37, null, y.createElement("ul", null, o))), y.createElement(q._19, {
                        margin: {
                            top: 4
                        },
                        fontSize: q.L.Size6
                    }, y.createElement(jn, {
                        title: Object(S.d)("Information", "DirectoryGameDetailsPage")
                    }), this.renderRow(Object(S.d)("Title: ", "DirectoryGameDetailsPage"), t.title), this.renderRow(Object(S.d)("Developer: ", "DirectoryGameDetailsPage"), e.developer), this.renderRow(Object(S.d)("Publisher: ", "DirectoryGameDetailsPage"), e.publisher), this.renderRowLink(Object(S.d)("More Info: ", "DirectoryGameDetailsPage"), Object(S.d)("Website", "DirectoryGameDetailsPage"), e.websiteURL), e.eulaURL && this.renderRowLink(Object(S.d)("License Agreement: ", "DirectoryGameDetailsPage"), Object(S.d)("Check out the EULA", "DirectoryGameDetailsPage"), e.eulaURL), this.renderRowLink(Object(S.d)("Need Help? ", "DirectoryGameDetailsPage"), Object(S.d)("Contact Support", "DirectoryGameDetailsPage"), e.supportURL))), y.createElement(q.G, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, y.createElement(q.V, {
                        margin: {
                            top: 4
                        }
                    }, y.createElement(jn, {
                        title: Object(S.d)("Hardware Requirements", "DirectoryGameDetailsPage")
                    }), y.createElement(q.V, {
                        padding: {
                            bottom: 1
                        }
                    }, y.createElement(q._23, {
                        type: q._28.H4,
                        bold: !0
                    }, Object(S.d)("Minimum", "DirectoryGameDetailsPage"))), s, y.createElement(q.V, {
                        padding: {
                            top: 1,
                            bottom: 1
                        }
                    }, y.createElement(q._23, {
                        type: q._28.H4,
                        bold: !0
                    }, Object(S.d)("Recommended", "DirectoryGameDetailsPage"))), c), y.createElement(q.V, {
                        margin: {
                            top: 4
                        }
                    }, y.createElement(jn, {
                        title: Object(S.d)("Language Support", "DirectoryGameDetailsPage")
                    }), y.createElement(q.O, null, y.createElement(q.G, {
                        cols: 3
                    }, y.createElement(q._19, {
                        color: q.F.Alt2
                    }, Object(S.d)("Language", "DirectoryGameDetailsPage"))), y.createElement(q.G, {
                        cols: 3
                    }, y.createElement(q._19, {
                        color: q.F.Alt2,
                        textAlign: q._24.Center
                    }, Object(S.d)("Audio", "DirectoryGameDetailsPage"))), y.createElement(q.G, {
                        cols: 3
                    }, y.createElement(q._19, {
                        color: q.F.Alt2,
                        textAlign: q._24.Center
                    }, Object(S.d)("Interface", "DirectoryGameDetailsPage"))), y.createElement(q.G, {
                        cols: 3
                    }, y.createElement(q._19, {
                        color: q.F.Alt2,
                        textAlign: q._24.Center
                    }, Object(S.d)("Subtitles", "DirectoryGameDetailsPage"))), y.createElement(q.G, {
                        cols: 12
                    }, y.createElement(q._19, {
                        borderBottom: !0,
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    })), l)))))
                }, t.prototype.renderSystemRequirements = function(e) {
                    return y.createElement(q.V, null, this.renderRow(Object(S.d)("OS:", "DirectoryGameDetailsPage"), e.osVersion), this.renderRow(Object(S.d)("Processor:", "DirectoryGameDetailsPage"), e.processor), this.renderRow(Object(S.d)("Memory:", "DirectoryGameDetailsPage"), e.ram), this.renderRow(Object(S.d)("Graphics Card:", "DirectoryGameDetailsPage"), e.videoCard), this.renderRow(Object(S.d)("DirectX:", "DirectoryGameDetailsPage"), e.directXVersion), this.renderRow(Object(S.d)("Hard Drive Space:", "DirectoryGameDetailsPage"), e.hardDriveSpace), this.renderRow(Object(S.d)("Other:", "DirectoryGameDetailsPage"), e.other))
                }, t.prototype.renderRow = function(e, t) {
                    return t ? y.createElement(q.V, {
                        display: q.H.Flex,
                        flexDirection: q.J.Row,
                        flexWrap: q.K.NoWrap
                    }, y.createElement(q._19, {
                        color: q.F.Alt2,
                        padding: {
                            right: 1
                        },
                        display: q.H.Flex,
                        flexShrink: 0
                    }, e), y.createElement(q.V, {
                        display: q.H.Flex,
                        flexGrow: 1
                    }, t)) : null
                }, t.prototype.renderRowLink = function(e, t, n) {
                    return this.renderRow(e, y.createElement("a", {
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, t))
                }, t
            }(y.Component),
            Wn = Object(M.c)("GameInfoSection")(Hn),
            zn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return y.createElement(q._19, {
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, y.createElement("img", {
                        src: this.props.screenshotURL
                    }), y.createElement(yt.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, t
            }(y.Component),
            qn = Object(H.compose)(Object(k.a)(null, function(e) {
                return Object(H.bindActionCreators)({
                    closeModal: et.c
                }, e)
            }))(zn),
            $n = n("Ervg"),
            Qn = n("KqsW"),
            Jn = (n("OOh8"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderItems = function() {
                        if (!t.props.videos && !t.props.thumbnailURLs) return [0, 1, 2, 3].map(function(e) {
                            return y.createElement(q.V, {
                                key: "placeholder-" + e,
                                padding: {
                                    right: 2
                                }
                            }, y.createElement(q._3, {
                                width: 460,
                                height: 260
                            }))
                        });
                        var e = (t.props.videos || []).map(function(e) {
                                return y.createElement(q.V, {
                                    className: "game-media__video",
                                    padding: {
                                        right: 2
                                    },
                                    key: e.id
                                }, y.createElement($n.a, {
                                    video: e
                                }))
                            }),
                            n = (t.props.thumbnailURLs || []).map(function(e, n) {
                                return y.createElement(q.V, {
                                    className: "game-media__image",
                                    padding: {
                                        right: 2
                                    },
                                    key: e
                                }, y.createElement(q.T, {
                                    onClick: t.handleOpenModal,
                                    "data-full": t.props.screenshotURLs[n],
                                    ariaLabel: Object(S.d)("Screenshot", "DirectoryGameDetailsGameMedia")
                                }, y.createElement(q.j, {
                                    ratio: q.k.Aspect16x9
                                }, y.createElement("img", {
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
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return y.createElement(An, null, y.createElement(jn, {
                        title: Object(S.d)("Videos and Screenshots", "DirectoryGameDetailsPage")
                    }), y.createElement(q.Q, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, y.createElement(Qn.a, {
                        items: this.renderItems()
                    })))
                }, t = f.__decorate([Object(M.c)("GameMedia")], t)
            }(y.Component)),
            Yn = Object(k.a)(function() {
                return {}
            }, function(e) {
                return Object(H.bindActionCreators)({
                    showImageViewerModal: function(e) {
                        var t = f.__rest(e, []);
                        return Object(et.d)(qn, t)
                    }
                }, e)
            })(Jn),
            Kn = (n("UJ+F"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        var e = t.props && t.props.referrer;
                        Object(Fn.a)(t.props.content.info, e, t.props.game, j.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = this.props.content,
                        n = t.info,
                        i = t.tags,
                        a = n.crateASINs,
                        r = n.imageURL,
                        o = n.price,
                        l = n.title,
                        s = i.join(", "),
                        c = {
                            info: n,
                            countryCode: this.props.countryCode,
                            crates: n.crateASINs,
                            isInGameContent: !0,
                            userHasPrime: this.props.hasPrime
                        },
                        d = y.createElement(Tn.a, {
                            onClickBuyNow: this.onBuyInGameContentNow,
                            options: c
                        });
                    if (a.length > 1) {
                        var u = Object(S.d)("{numCrates} Twitch Crates", {
                            numCrates: a.length
                        }, "InGameContentCrateReward");
                        e = y.createElement(q._19, {
                            className: "in-game-content__crates",
                            attachBottom: !0,
                            padding: {
                                left: 1,
                                right: 1
                            },
                            position: q._4.Absolute,
                            textAlign: q._24.Right
                        }, u)
                    }
                    return y.createElement(q.V, {
                        margin: {
                            bottom: 3
                        }
                    }, y.createElement(q._19, {
                        className: "in-game-content",
                        border: !0,
                        fullHeight: !0,
                        position: q._4.Relative
                    }, y.createElement(q.j, {
                        ratio: q.k.Aspect1x1
                    }, y.createElement("img", {
                        src: r
                    })), y.createElement(q._19, {
                        background: q.m.Base,
                        padding: 1
                    }, y.createElement(q.V, {
                        className: "in-game-content__info-header"
                    }, y.createElement(q._23, {
                        type: q._28.P,
                        fontSize: q.L.Size5,
                        bold: !0,
                        title: l
                    }, l), y.createElement(q._23, {
                        type: q._28.P,
                        color: q.F.Alt2,
                        title: s
                    }, s)), y.createElement(q.V, {
                        className: "in-game-content__price",
                        position: q._4.Relative
                    }, y.createElement("p", {
                        title: o
                    }, o), e), y.createElement(q.V, {
                        className: "in-game-content__buy-button",
                        position: q._4.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        margin: {
                            left: 1,
                            bottom: 1,
                            right: 1
                        }
                    }, d))))
                }, t
            }(y.Component)),
            Xn = Object(M.c)("InGameContent")(Kn),
            Zn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.contentList;
                    if (0 === t.length) return null;
                    var n = t.map(function(t, n) {
                        return y.createElement(Xn, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            refetchData: e.props.refetchData,
                            key: n,
                            referrer: e.props.referrer
                        })
                    });
                    return y.createElement(An, {
                        alt: !0
                    }, y.createElement(jn, {
                        title: Object(S.d)("In-Game Content", "FeaturedContentRow")
                    }), y.createElement(q._34, {
                        childWidth: q._35.Medium,
                        gutterSize: q._36.Small,
                        noGrow: !0
                    }, n))
                }, t
            }(y.Component),
            ei = Object(M.c)("InGameContentRow")(Zn),
            ti = n("FEHb"),
            ni = n("xCTX"),
            ii = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        sortedInGameContent: []
                    }, t.refetchData = function() {
                        t.props.data && t.props.data.refetch && t.props.data.refetch()
                    }, t
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), S.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data && e.data.game,
                        n = t && t.product;
                    if (n) {
                        var i = n.inGameContent.slice().sort(On.a);
                        this.setState({
                            sortedInGameContent: i
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.props.data.loading) {
                        if (this.props.data.error) return y.createElement(F.a, {
                            message: Object(S.d)("Error loading data.", "DirectoryGameDetailsPage")
                        });
                        if (!this.props.data.game || !this.props.data.game.product || !this.props.data.game.product.id) return y.createElement(Dn.PageNotFound, null)
                    }
                    var e = null,
                        t = null,
                        n = null;
                    this.props.data.game && this.props.data.game.product && (e = this.props.data.game.product.media.screenshotURLs, t = this.props.data.game.product.media.thumbnailURLs, n = this.props.data.game.product.media.videos);
                    var i = this.props.data,
                        a = i.currentUser,
                        r = i.game,
                        o = a && a.hasPrime,
                        l = this.props.referrerData && this.props.referrerData.user,
                        s = "";
                    this.props.data.requestInfo && (s = this.props.data.requestInfo.countryCode);
                    var c = [],
                        d = [];
                    return this.state.sortedInGameContent.forEach(function(e) {
                        e.info.isFeatured ? c.push(e) : d.push(e)
                    }), y.createElement(q.V, null, y.createElement(Gn, {
                        game: this.props.data.game,
                        referrer: l,
                        countryCode: s,
                        currentUser: this.props.data.currentUser,
                        refetchData: this.refetchData
                    }), y.createElement(Yn, {
                        screenshotURLs: e,
                        thumbnailURLs: t,
                        videos: n
                    }), y.createElement(Pn, {
                        contentList: c,
                        countryCode: s,
                        game: r,
                        hasPrime: o,
                        refetchData: this.refetchData,
                        referrer: l
                    }), y.createElement(ei, {
                        contentList: d,
                        countryCode: s,
                        game: r,
                        hasPrime: o,
                        refetchData: this.refetchData,
                        referrer: l
                    }), y.createElement(Wn, {
                        game: this.props.data.game
                    }))
                }, t = f.__decorate([Object(I.a)(ni, {
                    options: function(e) {
                        return {
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName)
                            }
                        }
                    }
                }), Object(I.a)(ti, {
                    name: "referrerData",
                    skip: function(e) {
                        var t = je.parse(e.location.search),
                            n = t.br_name,
                            i = t.br_id;
                        return !(n || i)
                    },
                    options: function(e) {
                        var t = je.parse(e.location.search),
                            n = t.br_name,
                            i = t.br_id;
                        return {
                            variables: {
                                login: n || null,
                                id: i || null
                            }
                        }
                    }
                }), Object(M.c)("DirectoryGameDetailsPage", {
                    destination: A.a.DirectoryGameDetails
                }), Object(V.a)({
                    location: j.PageviewLocation.GameDetail
                })], t)
            }(y.Component),
            ai = n("JpYe"),
            ri = n("n2E0"),
            oi = n("VDV3"),
            li = n("3yQz"),
            si = n("JtGN"),
            ci = li.b,
            di = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onVideoSortChange = function(e) {
                        Object(ai.d)("/directory/game/" + n.props.match.params.encodedCommunityName + "/videos", n.props, void 0, e)
                    }, n.onVideoFilterChange = function(e) {
                        Object(ai.d)("/directory/game/" + n.props.match.params.encodedCommunityName + "/videos", n.props, e)
                    }, n.state = {
                        directoryType: G(t.match.path)
                    }, n
                }
                return f.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), S.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    var e = null,
                        t = decodeURIComponent(this.props.match.params.encodedCommunityName),
                        n = Object(ai.c)(this.props) || ci,
                        i = Object(ai.b)(this.props);
                    if (this.props.data.error) {
                        var a = Object(S.d)("{gameName} videos are temporarily unavailable.", {
                            gameName: t
                        }, "DirectoryVideosPage");
                        return y.createElement(F.a, {
                            message: a
                        })
                    }
                    if (!this.props.data.loading && null === this.props.data.game) {
                        a = Object(S.d)("{gameName} does not exist.", {
                            gameName: t
                        }, "DirectoryVideosPage");
                        return y.createElement(F.a, {
                            message: a
                        })
                    }
                    return this.props.data.game && this.props.data.game.videos && (e = this.props.data.game.videos.edges.map(function(e) {
                        return e.node
                    })), y.createElement(q.V, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, y.createElement(oi.a, {
                        onVideoSortChange: this.onVideoSortChange,
                        onVideoFilterChange: this.onVideoFilterChange,
                        selectedSort: n,
                        broadcastType: i
                    }), y.createElement(oi.b, {
                        hideGameArt: !0,
                        trackingContent: Object(ri.a)(n),
                        trackingMedium: j.PageviewMedium.GameVideos,
                        videos: e
                    }), y.createElement(W.a, {
                        enabled: this.enablePagination(),
                        key: "directory-game-videos-page-" + i + "-" + n,
                        loadMore: this.props.loadMore
                    }))
                }, t.prototype.enablePagination = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.game && this.props.data.game.videos && !!this.props.data.game.videos.pageInfo.hasNextPage
                }, t = f.__decorate([Object(I.a)(si, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                gameName: decodeURIComponent(e.match.params.encodedCommunityName),
                                videoLimit: 30,
                                languages: e.languagePreferences,
                                broadcastTypes: e.match.params.filter && "all" !== e.match.params.filter ? [e.match.params.filter] : void 0,
                                videoSort: Object(ai.c)(e) || li.b
                            }
                        }
                    },
                    props: function(e) {
                        return f.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: si,
                                    variables: f.__assign({}, e.data.variables, {
                                        followedCursor: e.data.game && e.data.game.videos.edges.length > 0 ? e.data.game.videos.edges[e.data.game.videos.edges.length - 1].cursor : void 0
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            game: f.__assign({}, n.game, {
                                                videos: f.__assign({}, n.game.videos, {
                                                    edges: Object(L.b)(e.game.videos.edges, n.game.videos.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(M.c)("DirectoryGameVideosPage", {
                    destination: A.a.DirectoryGameVideos
                }), Object(V.a)({
                    location: j.PageviewLocation.Directory,
                    properties: function(e) {
                        return {
                            content_type: j.PageviewDirectoryContentType.Videos,
                            game: decodeURIComponent(e.match.params.encodedCommunityName)
                        }
                    }
                })], t)
            }(y.Component),
            ui = Object(k.a)(function(e) {
                return {
                    languagePreferences: Object(b.a)(e)
                }
            })(di);
        ! function(e) {
            e.CLIPS = "clips-scroller", e.DEFAULT = "directory-root-scroller", e.GAME = "game-scroller"
        }(sn || (sn = {}));
        var mi = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return f.__extends(t, e), t.prototype.render = function() {
                var e = this.props.match.path.startsWith("/communities") ? B.a.Communities : B.a.Games;
                return y.createElement(q.V, {
                    "data-a-target": this.getScrollerName()
                }, y.createElement(un.b, {
                    suppressScrollX: !0,
                    addPaddingWhenPlayerIsPersisting: !0
                }), y.createElement(dn, {
                    directoryType: e,
                    directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                    activeTab: this.getActiveTab()
                }), y.createElement(Ye.d, null, y.createElement(Ye.b, {
                    path: "/communities/:encodedCommunityName/details",
                    component: kn
                }), y.createElement(Ye.b, {
                    path: "/communities/:encodedCommunityName/:encodedLanguage",
                    component: Je
                }), y.createElement(Ye.b, {
                    path: "/communities/:encodedCommunityName",
                    component: Je
                }), y.createElement(Ye.b, {
                    path: "/directory/game/:encodedCommunityName/clips",
                    component: wn
                }), y.createElement(Ye.b, {
                    path: "/directory/game/:encodedCommunityName/details",
                    component: ii
                }), y.createElement(Ye.b, {
                    path: "/directory/game/:encodedCommunityName/videos/:filter",
                    component: ui
                }), y.createElement(Ye.b, {
                    path: "/directory/game/:encodedCommunityName/:encodedLanguage",
                    component: Je
                }), y.createElement(Ye.b, {
                    path: "/directory/game/:encodedCommunityName",
                    component: Je
                })))
            }, t.prototype.getActiveTab = function() {
                var e = void 0;
                return this.isClipsPage() ? e = nt.DirectoryClipsPage : this.isDetailsPage() ? e = nt.DirectoryDetailsPage : this.isVideosPage() ? e = nt.DirectoryVideosPage : this.isMainPage() && (e = nt.DirectoryPage), e
            }, t.prototype.getScrollerName = function() {
                var e = sn.DEFAULT;
                return this.isClipsPage() ? e = sn.CLIPS : this.isMainPage() && (e = sn.GAME), e
            }, t.prototype.isMainPage = function() {
                return "/communities/:encodedCommunityName" === this.props.match.path || "/directory/game/:encodedCommunityName" === this.props.match.path
            }, t.prototype.isClipsPage = function() {
                return "/directory/game/:encodedCommunityName/clips" === this.props.match.path
            }, t.prototype.isDetailsPage = function() {
                return "/communities/:encodedCommunityName/details" === this.props.match.path || "/directory/game/:encodedCommunityName/details" === this.props.match.path
            }, t.prototype.isVideosPage = function() {
                return "/directory/game/:encodedCommunityName/videos/:filter" === this.props.match.path
            }, t
        }(y.Component);
        n.d(t, "DirectoryGamePage", function() {
            return Je
        }), n.d(t, "DirectoryRootPage", function() {
            return mi
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
                                    value: "followersCount"
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
                                        kind: "IntValue",
                                        value: "1"
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
                                    value: "roles"
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
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
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
            l = n("yDzg"),
            s = "https://www.facebook.com/sharer/sharer.php",
            c = "https://www.twitter.com/share",
            d = "https://www.reddit.com/submit",
            u = "https://vk.com/share.php",
            m = n("Odds");
        n("bdk8");
        n.d(t, "b", function() {
            return p
        }), n.d(t, "a", function() {
            return g
        });
        var p;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(p || (p = {}));
        var g = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? a.createElement("a", i.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(m._40)(n.props)), n.renderIcon()) : a.createElement("button", i.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(m._40)(n.props)), n.renderIcon())
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
                    return a.createElement(m.V, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, a.createElement(m._10, {
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
                            return m._11.Twitter;
                        case p.Facebook:
                            return m._11.Facebook;
                        case p.VKontakte:
                            return m._11.VKontakte;
                        case p.Reddit:
                            return m._11.Reddit;
                        case p.Copy:
                        default:
                            return m._11.Copy
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
                                return Object(l.a)(d, {
                                    url: e,
                                    title: t
                                })
                            }(a, r);
                        case p.VKontakte:
                            return function(e) {
                                return Object(l.a)(u, {
                                    url: e
                                })
                            }(a);
                        case p.Facebook:
                            return function(e) {
                                return Object(l.a)(s, {
                                    u: e
                                })
                            }(a);
                        case p.Twitter:
                            return function(e, t) {
                                return Object(l.a)(c, {
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
                return a.createElement(m.V, {
                    className: "social-button"
                }, a.createElement(m._31, {
                    label: this.getTooltipFromType(),
                    direction: m._33.Top
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
                                            value: "id"
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
                                                    value: "editing"
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
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
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
            return l
        });
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("Aj/L"),
            o = "application/json; charset=UTF-8",
            l = function() {
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
                    var l = Object(r.c)(n);
                    return l && (i.Authorization = "OAuth " + l.authToken, l.legacyCSRFToken && (i["Twitch-Api-Token"] = l.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e
            }()
    },
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
                                alias: null,
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
                                                    value: "emailEnabled"
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
            l = n("SZoP"),
            s = n("NY9D"),
            c = n("vH/s"),
            d = n("v5ho"),
            u = n("RH2O"),
            m = n("2KeS"),
            p = n("V5M+"),
            g = n("jetF"),
            h = n("7vx8"),
            v = n("CSlQ"),
            f = n("BhyV"),
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
            S = n("Odds"),
            _ = n("nC3l"),
            C = (n("sJt0"), "error-message"),
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? a.createElement(S.V, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(S._23, {
                            color: S.F.Error,
                            type: S._28.H4,
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
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (r.n.tracking.track(c.SpadeEventType.CommunityModeration, {
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
                    return a.createElement(S.Q, {
                        position: S._4.Relative
                    }, a.createElement(S._19, {
                        background: S.m.Base,
                        className: "stream-ban-modal"
                    }, a.createElement(S.V, {
                        padding: 2
                    }, this.renderErrorMessage(), a.createElement(S.V, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(S._23, {
                        type: S._28.H4
                    }, Object(r.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), a.createElement(S._19, {
                        borderTop: !0
                    }, a.createElement(S.V, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(S._23, {
                        bold: !0
                    }, Object(r.d)("Reason (Required)", "StreamBanModal")), a.createElement(S.R, {
                        type: S.S.Text,
                        placeholder: Object(r.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), a.createElement(S._19, {
                        borderTop: !0
                    }, a.createElement(S.V, {
                        padding: {
                            top: 2
                        },
                        textAlign: S._24.Center
                    }, a.createElement(S.V, {
                        display: S.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(S.u, {
                        type: S.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(r.d)("Cancel", "StreamBanModal"))), a.createElement(S.V, {
                        display: S.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(S.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(r.d)("Ban", "StreamBanModal")))))), a.createElement(y.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(a.Component),
            N = Object(f.compose)(Object(h.a)(_, {
                name: "banUserFromCommunity"
            }))(E),
            w = Object(u.a)(null, function(e) {
                return Object(m.bindActionCreators)({
                    onCloseModal: p.c
                }, e)
            })(N),
            D = (n("npyu"), n("plcU")),
            O = "error-message",
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? a.createElement(S.V, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(S._23, {
                            color: S.F.Error,
                            type: S._28.H4,
                            "data-test-selector": O
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
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (r.n.tracking.track(c.SpadeEventType.CommunityModeration, {
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
                    return a.createElement(S.Q, {
                        position: S._4.Relative
                    }, a.createElement(S._19, {
                        background: S.m.Base,
                        className: "stream-timeout-modal"
                    }, a.createElement(S.V, {
                        padding: 2
                    }, this.renderErrorMessage(), a.createElement(S.V, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(S._23, {
                        type: S._28.H4
                    }, Object(r.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), a.createElement(S._19, {
                        borderTop: !0
                    }, a.createElement(S.V, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(S._23, {
                        bold: !0
                    }, Object(r.d)("Reason (Required)", "StreamTimeoutModal")), a.createElement(S.R, {
                        type: S.S.Text,
                        placeholder: Object(r.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), a.createElement(S.V, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(S._23, {
                        bold: !0
                    }, Object(r.d)("Duration", "StreamTimeoutModal")), a.createElement(S._16, {
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
                    }, Object(r.d)("24 hours", "StreamTimeoutModal")))), a.createElement(S._19, {
                        borderTop: !0
                    }, a.createElement(S.V, {
                        padding: {
                            top: 2
                        },
                        textAlign: S._24.Center
                    }, a.createElement(S.V, {
                        display: S.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(S.u, {
                        type: S.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(r.d)("Cancel", "StreamTimeoutModal"))), a.createElement(S.V, {
                        display: S.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, a.createElement(S.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(r.d)("Timeout", "StreamTimeoutModal")))))), a.createElement(y.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(a.Component),
            T = Object(f.compose)(Object(h.a)(D, {
                name: "timeoutUserFromCommunity"
            }))(F),
            I = Object(u.a)(null, function(e) {
                return Object(m.bindActionCreators)({
                    onCloseModal: p.c
                }, e)
            })(T),
            V = n("PO03"),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(l.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(w, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(l.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(I, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? a.createElement(g.a, null, a.createElement(S.v, {
                        ariaLabel: Object(r.d)("Moderation", "DirectoryGamePage"),
                        icon: S._11.ChatRiskFlag
                    }), a.createElement(S.p, {
                        direction: S.q.BottomRight,
                        size: S.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? a.createElement(S.T, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, a.createElement(S.V, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(r.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? a.createElement(S.T, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, a.createElement(S.V, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(r.d)("Timeout", "StreamFlag"))) : null
                }, t = i.__decorate([Object(h.a)(V, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(v.c)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component),
            A = Object(u.a)(null, function(e) {
                return Object(m.bindActionCreators)({
                    onShowModal: p.d
                }, e)
            })(L),
            R = n("PLRK"),
            j = (n("GiGb"), "directory-game__card_container"),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getLinkTo = function(e, n) {
                        var i = t.props.trackingContent ? t.props.trackingContent : c.PageviewContent.Live,
                            a = t.props.directoryType === d.a.Communities ? c.PageviewMedium.Community : c.PageviewMedium.Game;
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
                        return e.broadcaster ? t.props.directoryType === d.a.Communities && t.props.directoryName ? a.createElement(S.V, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: S._4.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, a.createElement(A, {
                            communityName: t.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, t.shouldShowGame = function(e) {
                        return t.props.directoryType !== d.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
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
                    }, a.createElement(S.V, {
                        className: "stream-thumbnail__card",
                        position: S._4.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": j
                    }, a.createElement(o.a, {
                        imageSrc: e.previewImageURL || r.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || R.a,
                        channelName: Object(l.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: this.shouldShowGame("boxArtURL") || r.a.defaultBoxArtURL,
                        gameTitle: this.shouldShowGame("name"),
                        gameLinkTo: this.getLinkTo(Object(s.c)(this.shouldShowGame("name")), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type,
                        "data-a-target": "card-" + t,
                        "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                    }), this.renderStreamFlag())) : null
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return j
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
                            value: "asin"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "crateASINs"
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
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "isEntitled"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "isFeatured"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "isForSale"
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
                            value: "primeOffer"
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
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "purchaseURL"
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
                                            value: "product"
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
    Ervg: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("4mYF"),
            o = n("CSlQ"),
            l = n("fc0G"),
            s = function(e) {
                var t = e.video,
                    n = t.id,
                    o = t.lengthSeconds,
                    s = t.publishedAt,
                    c = t.previewThumbnailURL,
                    d = t.viewCount,
                    u = {
                        vodID: n,
                        disableTheatreButton: !0,
                        playerTypeOverride: e.playerTypeOverride
                    };
                return a.createElement(r.a, {
                    createdAt: s,
                    lengthSeconds: o,
                    type: r.b.Video,
                    thumbnailURL: c,
                    viewCount: d
                }, a.createElement(l.c, i.__assign({}, u)))
            },
            c = Object(o.c)("VideoEmbed", {
                autoReportInteractive: !0
            })(s);
        n.d(t, !1, function() {
            return s
        }), n.d(t, "a", function() {
            return c
        })
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
                    },
                    defaultValue: null
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
                                    value: "settings"
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
                                            value: "isCommerceRevShareEnabled"
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
            l = n("HW6M"),
            s = n("U7vG"),
            c = n("6sO2"),
            d = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), i = {}, i[d.a.Live] = "stream-type-indicator--live", i[d.a.Premiere] = "stream-type-indicator--premiere", i[d.a.Rerun] = "stream-type-indicator--rerun", i[d.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = (a = {}, a[d.a.Premiere] = u._11.VideoPremiere, a[d.a.Rerun] = u._11.VideoRerun, a[d.a.WatchParty] = u._11.VideoRerun, a),
            g = (r = {}, r[d.a.Premiere] = u._12.Live, r[d.a.Rerun] = u._12.Inherit, r[d.a.WatchParty] = u._12.Inherit, r),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(u._19, {
                        className: this.getClassNames(),
                        color: u.F.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.H.Flex
                    }, s.createElement(u.V, {
                        display: u.H.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), s.createElement(u._23, {
                        type: u._28.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, l(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? s.createElement(u._19, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === d.a.Live ? s.createElement(u.V, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.H.Flex,
                        alignItems: u.c.Center
                    }, s.createElement(u.X, {
                        size: u.Y.Small
                    })) : s.createElement(u._10, {
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
            }(s.Component);
        n.d(t, "a", function() {
            return h
        })
    },
    ISok: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("CSlQ"),
            r = n("81qH"),
            o = n("XYqD"),
            l = n("Odds"),
            s = function(e) {
                var t = [];
                if (null === e.videos)
                    for (var n = void 0 === e.placeholderCount ? 20 : e.placeholderCount, a = 0; a < n; a++) t.push(i.createElement(o.a, {
                        key: a
                    }));
                else t = e.videos.map(function(t, n) {
                    return i.createElement(l.V, {
                        "data-a-target": "video-tower-card-" + n,
                        key: "video-" + n,
                        padding: {
                            bottom: .5
                        }
                    }, i.createElement(r.VideoPreviewCard, {
                        hideGameArt: e.hideGameArt,
                        tracking: {
                            content: e.trackingContent,
                            content_index: n,
                            medium: e.trackingMedium
                        },
                        video: t
                    }))
                });
                return i.createElement(l._34, {
                    gutterSize: l._36.Small,
                    childWidth: e.videoCardSize || l._35.Large,
                    placeholderItems: 20
                }, t)
            },
            c = Object(a.c)("VideoTower", {
                autoReportInteractive: !0
            })(s);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return s
        }), n.d(t, "a", function() {
            return c
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "publisher"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "websiteURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "eulaURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "supportURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                                    value: "backgroundImageURL"
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
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                directives: [],
                                selectionSet: null
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
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                    }, {
                        kind: "Field",
                        alias: null,
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
                        alias: null,
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
                        alias: null,
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
            l = n("S1vB"),
            s = n("Odds"),
            c = (n("PlCc"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        balloonOpen: !1
                    }, t.renderUnavailableText = function() {
                        var e = t.props.options.isInGameContent ? Object(o.d)("This content is currently unavailable", "FuelBuyButton") : Object(o.d)("This game is currently unavailable", "FuelBuyButton");
                        return a.createElement(s._23, {
                            italic: !0,
                            "data-target": "fuel-buy-button-unavailable"
                        }, e)
                    }, t.renderBuyNowButton = function(e, n, i, r) {
                        void 0 === r && (r = s.x.Default);
                        var l = null;
                        if (n && n.length > 1) {
                            var c = Object(o.d)("Includes {crates} Twitch Crates!", {
                                crates: n.length
                            }, "FuelBuyButton");
                            l = a.createElement(s._23, {
                                className: "fuel-buy-button__crates",
                                "data-target": "fuel-buy-button-crates"
                            }, c)
                        }
                        var d = i ? "fuel-buy-button-content" : "fuel-buy-button";
                        return a.createElement(s.V, {
                            alignItems: s.c.Center
                        }, a.createElement(s.u, {
                            fullWidth: !0,
                            icon: n && n.length > 0 ? s._11.Crate : void 0,
                            purchase: e,
                            onClick: t.props.onClickBuyNow,
                            "data-target": d,
                            size: r
                        }, Object(o.d)("Buy Now", "FuelBuyButton")), l)
                    }, t.renderPrimeTreatment = function(e, n) {
                        var i = [],
                            r = a.createElement(s._10, {
                                asset: s._11.Crown,
                                type: s._12.Prime,
                                width: 16,
                                height: 16,
                                key: "fuel-crown"
                            });
                        return e ? i = [r, a.createElement("div", {
                            className: "fuel-buy-button__prime-button",
                            key: "fuel-claim"
                        }, a.createElement(s.u, {
                            onClick: t.onClickClaimPrimeOffer
                        }, Object(o.d)("Claim Offer", "FuelBuyButton")))] : n && (i = [n]), a.createElement(s.V, {
                            flexDirection: s.J.Row,
                            display: s.H.Flex,
                            alignItems: s.c.Center,
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
                        c = e.crates,
                        d = e.userHasPrime,
                        u = e.isInGameContent,
                        m = e.size,
                        p = t.primeOffer,
                        g = n && Object(l.a)(n),
                        h = !p || !g;
                    return t.isEntitled ? a.createElement(s._23, {
                        "data-target": "fuel-buy-button-purchased"
                    }, Object(o.d)("Purchased", "FuelBuyButton")) : 0 === t.price.length && i && i.isExternal ? a.createElement("div", {
                        "data-target": "fuel-buy-button-external"
                    }, a.createElement(r, {
                        source: i.description,
                        renderers: {
                            Link: this.renderExternalAcquisitionLink
                        }
                    })) : !t.isForSale && h ? this.renderUnavailableText() : p && !d ? this.renderPrimeTreatment(d, this.renderBuyNowButton(t.price, c, u, m)) : p ? this.renderPrimeTreatment(d) : this.renderBuyNowButton(t.price, c, u, m)
                }, t
            }(a.Component));
        n.d(t, "a", function() {
            return c
        })
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n("TToO"),
            a = n("U7vG"),
            r = (n.n(a), n("Odds")),
            o = n("yU6t"),
            l = (n.n(o), function(e) {
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
                        e.preventDefault(), t.finalizeSelections(e.target.files)
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(r.I, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, a.createElement(r.Q, {
                        position: r._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: r._39.Above
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
            return r(l.parse(e.location.search).sort || "")
        }

        function a(e) {
            switch (e.match.params.filter) {
                case c.a.Archive.toLowerCase():
                    return c.a.Archive;
                case c.a.Highlight.toLowerCase():
                    return c.a.Highlight;
                case c.a.Upload.toLowerCase():
                    return c.a.Upload;
                case c.a.PastPremiere.toLowerCase():
                    return c.a.PastPremiere;
                default:
                    return
            }
        }

        function r(e) {
            switch (e.toUpperCase()) {
                case d.b:
                    return d.b;
                case d.a:
                    return d.a;
                default:
                    return null
            }
        }
        t.d = function(e, t, n, r) {
            var l = r || i(t),
                c = "";
            l && (c = "?sort=" + function(e) {
                switch (e) {
                    case d.b:
                        return o.Popular;
                    case d.a:
                        return o.Newest;
                    default:
                        var t = e;
                        return t
                }
            }(l));
            var u = n ? n.toLowerCase() : function(e) {
                var t = a(e);
                return t ? t.toLowerCase() : "all"
            }(t);
            s.n.history.push(e + "/" + u + c)
        }, t.c = i, t.b = a, t.a = function(e) {
            var t = l.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }, t.e = r;
        var o, l = n("OAwv"),
            s = (n.n(l), n("6sO2")),
            c = n("6WAQ"),
            d = n("3yQz");
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                                    value: "gameName"
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
            return g
        });
        var i, a = n("TToO"),
            r = n("HW6M"),
            o = (n.n(r), n("U7vG")),
            l = (n.n(o), n("6sO2")),
            s = n("CSlQ"),
            c = n("Odds"),
            d = n("M4d4"),
            u = (n.n(d), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(i || (i = {}));
        var m, p = (m = {}, m[i.Previous] = c._11.AngleLeft, m[i.Next] = c._11.AngleRight, m),
            g = function(e) {
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
                        var s = (u = {}, u[i.Previous] = Object(l.d)("previous", "MediaCarouselNavButton"), u[i.Next] = Object(l.d)("next", "MediaCarouselNavButton"), u),
                            d = r("media-carousel__button", {
                                "media-carousel__button--previous": e === i.Previous,
                                "media-carousel__button--next": e === i.Next,
                                "media-carousel__button--disabled": n
                            }, {
                                "media-carousel__button--inset": !0 === t.props.insetStyle
                            });
                        return o.createElement(c.V, {
                            className: d,
                            position: c._4.Relative,
                            display: c.H.Flex,
                            alignItems: c.c.Stretch
                        }, o.createElement(c.v, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: a,
                            disabled: n,
                            ariaLabel: s[e],
                            icon: p[e],
                            size: c.x.Large
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
                    return o.createElement(c.Q, a.__assign({}, this.props, {
                        position: c._4.Relative
                    }), o.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, o.createElement(c.V, {
                        className: "media-carousel__child-container",
                        overflow: c._0.Hidden,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, o.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            marginLeft: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, o.createElement(c.Q, {
                        className: "media-carousel__content",
                        display: c.H.Flex,
                        flexWrap: c.K.NoWrap,
                        flexDirection: c.J.Row,
                        alignItems: c.c.Center,
                        "data-js-selector": "carousel-content"
                    }, o.createElement("div", {
                        style: {
                            width: "max-content"
                        }
                    }, this.props.items)))), o.createElement(c.V, {
                        className: "media-carousel__nav",
                        display: c.H.Flex,
                        alignItems: c.c.Center,
                        position: c._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), o.createElement(c.V, {
                        className: "media-carousel__nav",
                        display: c.H.Flex,
                        alignItems: c.c.Center,
                        position: c._4.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                }, t = a.__decorate([Object(s.c)("MediaCarousel", {
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "tags"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
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
                                alias: null,
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
            l = n("Ejve"),
            s = "legacy_routes_enabled",
            c = function(e) {
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
                                        s = o.a.buildType === l.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + s + e.pathname + "?" + r;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: c
                                    }), void window.location.replace(c)
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
                    }, n.isEnabled = o.b.get(s, !1), n.logger = o.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
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
            return s
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return c
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
            l = Object(r.d)("Untitled Broadcast", "StreamThumbnail"),
            s = function(e) {
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
            return l
        }), n.d(t, !1, function() {
            return s
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
            l = n("+Znq"),
            s = n("CSlQ"),
            c = n("Odds");
        ! function(e) {
            e[e.All = 0] = "All", e[e.Month = 1] = "Month", e[e.Week = 2] = "Week", e[e.Day = 3] = "Day", e[e.Trending = 4] = "Trending"
        }(i || (i = {}));
        var d, u, m = (d = {}, d[i.All] = "ALL_TIME", d[i.Day] = "LAST_DAY", d[i.Week] = "LAST_WEEK", d[i.Month] = "LAST_MONTH", d[i.Trending] = "TRENDING", d),
            p = (u = {}, u[i.Trending] = "", u[i.Day] = Object(o.d)("24h", "TopClipsTimeFilter"), u[i.Week] = Object(o.d)("7d", "TopClipsTimeFilter"), u[i.Month] = Object(o.d)("30d", "TopClipsTimeFilter"), u[i.All] = Object(o.d)("all", "TopClipsTimeFilter"), u),
            g = [i.Trending, i.Day, i.Week, i.Month, i.All],
            h = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderFilterButton = function(e) {
                        return r.createElement(c.T, {
                            key: e,
                            onClick: n.updateFilterFuncs[e],
                            "data-a-target": "time-filter-option-" + p[e],
                            selected: e === n.props.timeFilterValue
                        }, r.createElement(c.V, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, n.renderFilterText(e)))
                    }, n.state = {
                        isShowingMenu: !1
                    }, n.updateFilterFuncs = g.reduce(function(e, t) {
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
                    return r.createElement(c.V, {
                        className: "top-clips-time-filter"
                    }, r.createElement(l.a, null, r.createElement(c.u, {
                        dropdown: !0,
                        type: c.z.Hollow,
                        "data-a-target": "time-filter-selection"
                    }, this.renderFilterText(this.props.timeFilterValue)), r.createElement(c.p, {
                        direction: c.q.BottomLeft,
                        noTail: !0
                    }, r.createElement(c.V, {
                        padding: {
                            y: .5
                        }
                    }, g.map(this.renderFilterButton)))))
                }, t.prototype.renderFilterText = function(e) {
                    return e === i.Trending ? r.createElement("span", null, Object(o.d)("Trending", "TopClipsTimeFilter")) : r.createElement(c.V, {
                        display: c.H.Flex
                    }, Object(o.d)("Top", "TopClipsTimeFilter"), r.createElement(c.V, {
                        margin: {
                            left: .5
                        }
                    }, r.createElement(c._1, {
                        type: c._2.Brand,
                        label: p[e]
                    })))
                }, t
            }(r.Component),
            v = Object(s.c)("TopClipsTimeFilter")(h)
    },
    QG7y: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "d", function() {
            return l
        }), n.d(t, "a", function() {
            return s
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
            l = {
                directory: "/" + a.a.dfpNetworkCode + "/twitch/directory",
                channel: "/" + a.a.dfpNetworkCode + "/twitch/channels",
                frontpage: "/" + a.a.dfpNetworkCode + "/twitch/homepage",
                sizzle: "/" + a.a.dfpNetworkCode + "/twitch/sizzle_strip"
            },
            s = {
                games: "games",
                channel: "channel",
                frontpage: "homepage"
            },
            c = "ads.slot-render-end",
            d = "ads.slot-ready",
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
                                    value: "rules"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "summary"
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
                                    value: "roles"
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
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
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
                return i.createElement(r.V, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(r._23, {
                    type: r._28.H4,
                    color: r.F.Alt2,
                    fontSize: r.L.Size5,
                    transform: r._27.Uppercase,
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
                            value: "criteria"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "GameClipsInput"
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
                                    value: "gameName"
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
                                    }, {
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
                                                            value: "curator"
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
                                                                directives: [],
                                                                selectionSet: null
                                                            }]
                                                        }
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
                                                            value: "thumbnailURL"
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
                                                            value: "durationSeconds"
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
            l = n("6yQB"),
            s = n("+Znq"),
            c = n("6WAQ"),
            d = n("JpYe"),
            u = n("3yQz"),
            m = n("Odds"),
            p = (n("C2pI"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortChangeHandler = function(e) {
                        n.props.onVideoSortChange(e.target.value)
                    }, n.renderLanguageSelector = function() {
                        return n.props.hideLanguageSelector ? null : r.createElement(m.V, {
                            display: m.H.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(l.a, null))
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
                        l = Object(o.d)("Highlights", "VideoFilter"),
                        p = Object(o.d)("Uploads", "VideoFilter"),
                        g = this.props.selectedSort && Object(d.e)(this.props.selectedSort) || u.a;
                    switch (this.props.broadcastType) {
                        case c.a.PastPremiere:
                            e = n;
                            break;
                        case c.a.Archive:
                            e = i;
                            break;
                        case c.a.Highlight:
                            e = l;
                            break;
                        case c.a.Upload:
                            e = p;
                            break;
                        default:
                            e = t
                    }
                    var h = {
                            "video-filters": !0,
                            "video-filters--active": !0
                        },
                        v = {
                            "video-filters": !0
                        },
                        f = null;
                    return this.state.isPremiereExperimentActive && (f = r.createElement(m.T, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": c.a.PastPremiere,
                        "data-a-target": "video-type-filter-past-premieres"
                    }, r.createElement(m.V, {
                        className: a(this.props.broadcastType === c.a.PastPremiere ? h : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-past-premiere"
                    }, n))), r.createElement(m.V, {
                        margin: {
                            bottom: 2
                        },
                        display: m.H.Flex,
                        justifyContent: m.U.Between
                    }, r.createElement("div", null, this.renderLanguageSelector(), r.createElement(m.V, {
                        display: m.H.InlineFlex
                    }, r.createElement(s.a, {
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
                    }, r.createElement(m.V, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, r.createElement(m.T, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": "all",
                        "data-a-target": "video-type-filter-all"
                    }, r.createElement(m.V, {
                        className: a(this.props.broadcastType ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-all"
                    }, t)), f, r.createElement(m.T, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": c.a.Archive,
                        "data-a-target": "video-type-filter-past-broadcasts"
                    }, r.createElement(m.V, {
                        className: a(this.props.broadcastType === c.a.Archive ? h : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-archive"
                    }, i)), r.createElement(m.T, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": c.a.Highlight,
                        "data-a-target": "video-type-filter-highlights"
                    }, r.createElement(m.V, {
                        className: a(this.props.broadcastType === c.a.Highlight ? h : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-highlight"
                    }, l)), r.createElement(m.T, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": c.a.Upload,
                        "data-a-target": "video-type-filter-uploads"
                    }, r.createElement(m.V, {
                        className: a(this.props.broadcastType === c.a.Upload ? h : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-upload"
                    }, p))))))), r.createElement("div", null, r.createElement(m._16, {
                        name: "sort",
                        onChange: this.sortChangeHandler,
                        value: g,
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
            g = n("ISok");
        n.d(t, "a", function() {
            return p
        }), n.d(t, "b", function() {
            return g.a
        }), n.d(t, !1, function() {})
    },
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-062a1df5ff2aaa76eb8e129940ef964a.png"
    },
    WNmM: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return u
        });
        var i, a = n("6sO2"),
            r = n("8Wuk"),
            o = n("vH/s"),
            l = (i = {}, i[r.b.Twitter] = "twitter", i[r.b.Reddit] = "reddit", i[r.b.VKontakte] = "vkontakte", i[r.b.Facebook] = "facebook", i[r.b.Copy] = "link", i[r.b.CopyInput] = "option_link", i),
            s = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            c = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            d = {
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
                        share_platform: l[n],
                        location: d[t],
                        game: e.game ? e.game.name : null,
                        channel_id: Number(e.broadcaster.id),
                        channel: e.broadcaster.login,
                        live: null
                    })
                }
            }
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
                }, i.createElement(a._3, null)), i.createElement(a.B, null, i.createElement(a.V, {
                    display: a.H.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a.V, {
                    display: a.H.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._3, {
                    width: 40,
                    height: 56
                })), i.createElement(a.V, {
                    display: a.H.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a._23, null, i.createElement(a._3, {
                    width: 150
                })), i.createElement(a._23, {
                    fontSize: a.L.Size7
                }, i.createElement(a._3, {
                    width: 100
                }))))))
            }
    },
    Y6wo: function(e, t, n) {
        "use strict";

        function i() {
            var e = r.k.get(l, {});
            return a.__assign({
                sortBy: o.a.Popularity
            }, e)
        }
        t.a = i, t.b = function(e, t) {
            var n = i();
            n[e] = t, r.k.set(l, n)
        };
        var a = n("TToO"),
            r = n("6sO2"),
            o = n("r4vp"),
            l = "browseSettings"
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
                                directives: [],
                                selectionSet: null
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
                                    value: "roles"
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
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
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
    ZoyS: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ModerationMenu_User"
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
                                    value: "isSiteAdmin"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isStaff"
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
                end: 68
            }
        };
        n.loc.source = {
            body: "query ModerationMenu_User {\ncurrentUser {\nid\nisSiteAdmin\nisStaff\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return h
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("OAwv")),
            o = (n.n(r), n("U7vG")),
            l = (n.n(o), n("F8kA")),
            s = n("6sO2"),
            c = n("SZoP"),
            d = n("mi6k"),
            u = n("CSlQ"),
            m = n("Odds"),
            p = n("a0ve"),
            g = (n.n(p), function(e) {
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
                    return null !== t && (e = o.createElement(m.V, {
                        position: m._4.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, o.createElement(m._7, {
                        size: m._8.Small,
                        value: t,
                        mask: !0
                    }))), o.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(m._40)(this.props)), o.createElement(m.A, null, o.createElement(m.V, {
                        fullWidth: !0
                    }, o.createElement(m.j, {
                        overflow: !0
                    }, o.createElement("div", null, o.createElement(m._19, {
                        display: m.H.InlineFlex,
                        position: m._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: m._39.Default,
                        fontSize: m.L.Size6,
                        background: m.m.Overlay,
                        color: m.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._18, {
                        "data-test-selector": "video-view-count",
                        icon: m._11.GlyphViews,
                        label: Object(s.d)("views", "VideoPreviewCard"),
                        value: Object(s.f)(this.props.video.viewCount)
                    })), o.createElement(m._19, {
                        display: m.H.InlineFlex,
                        position: m._4.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: m._39.Default,
                        fontSize: m.L.Size6,
                        background: m.m.Overlay,
                        color: m.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._18, {
                        "data-test-selector": "video-length",
                        icon: m._11.GlyphLength,
                        label: Object(s.d)("length", "VideoPreviewCard"),
                        value: Object(d.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), o.createElement(m.B, null, o.createElement(m.V, {
                        display: m.H.Flex,
                        flexDirection: m.J.Row,
                        flexWrap: m.K.NoWrap,
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
                    }, o.createElement(l.a, {
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
                    }, o.createElement(m.Q, {
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
                    return o.createElement(m.V, {
                        "data-test-selector": "game-box-art",
                        display: m.H.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(l.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(m.Q, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(m._31, {
                        display: m.H.Block,
                        direction: m._33.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(m.C, {
                        aspect: m.k.BoxArt,
                        imageAlt: e.name,
                        imageSrc: e.boxArtURL || s.a.defaultBoxArtURL
                    })))))))
                }, t.prototype.videoMetaData = function() {
                    var e = Object(s.c)(new Date(this.props.video.publishedAt), "medium"),
                        t = null;
                    if (this.props.video.owner) {
                        var n = {
                            pathname: "/" + this.props.video.owner.login,
                            state: this.getLinkState()
                        };
                        t = o.createElement(l.a, {
                            to: n,
                            className: "video-preview-card__owner-display-name",
                            "data-a-target": "video-preview-card-channel-link",
                            "data-test-selector": "video-owner",
                            title: Object(c.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(c.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return o.createElement(m.V, {
                        display: m.H.Flex,
                        flexDirection: m.J.Column
                    }, o.createElement(m.V, {
                        "data-test-selector": "video-title",
                        overflow: m._0.Hidden,
                        position: m._4.Relative
                    }, o.createElement(m._23, {
                        color: m.F.Base,
                        fontSize: m.L.Size5,
                        lineHeight: m.W.Heading
                    }, o.createElement(l.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(m.V, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(m._23, {
                        type: m._28.Span,
                        color: m.F.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(m.Q, {
                        padding: {
                            x: .5
                        }
                    }, o.createElement("span", null, "·")), t)))
                }, t.prototype.getVideoPreviousWatchPercentage = function() {
                    return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                }, t.prototype.showGameArt = function() {
                    return !this.props.hideGameArt && this.props.video.game && "" !== this.props.video.game.name
                }, t.prototype.formatTitle = function(e) {
                    if (this.props.video.owner) return e + " · " + Object(c.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                }, t.prototype.getLinkState = function() {
                    return {
                        content: this.props.tracking.content,
                        content_index: this.props.tracking.content_index,
                        medium: this.props.tracking.medium
                    }
                }, t
            }(o.Component)),
            h = Object(u.c)("VideoPreviewCard")(g)
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
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
            var t = e.match(s);
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
                r.n.tracking.track(l.SpadeEventType.FuelBuyButton, i)
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
            r.n.tracking.track(l.SpadeEventType.FuelOfferView, t)
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
            r.n.tracking.track(l.SpadeEventType.FuelOfferInteraction, n)
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
            return e.inGameContent.forEach(function(e, l) {
                r.igc[e.id] = {
                    game: t,
                    user: n,
                    item: e,
                    impressionGroupID: i,
                    offerCount: a,
                    impressionID: Object(o.b)(),
                    index: l + 1,
                    offerType: "fuel"
                }
            }), r
        }, t.b = function(e, t, n) {
            var i = Object(o.b)(),
                a = e.length,
                r = {};
            return e.forEach(function(e, l) {
                r[e.id] = {
                    impressionGroupID: i,
                    index: l,
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
            l = n("vH/s"),
            s = /tag=(.*?)(&|$)/;
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
                                    value: "featuredEventBroadcasts"
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
                                                            value: "emailEnabled"
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
                                                                            value: "lengthSeconds"
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
                                                                            value: "lengthSeconds"
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
                            value: "startAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "endAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
            return r.k.get(s, []).filter(function(e) {
                return o.a.has(e)
            })
        }
        t.c = function(e, t) {
            var n = this;
            return function(o) {
                return a.__awaiter(n, void 0, void 0, function() {
                    var n, c;
                    return a.__generator(this, function(a) {
                        return n = new Set(i()), t ? n.add(e) : n.delete(e), c = Array.from(n), r.k.set(s, c), o(Object(l.b)(c)), [2]
                    })
                })
            }
        }, t.a = function() {
            var e = this;
            return function(t) {
                return a.__awaiter(e, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        return r.k.set(s, []), t(Object(l.b)([])), [2]
                    })
                })
            }
        }, t.b = i;
        var a = n("TToO"),
            r = n("6sO2"),
            o = n("D9fv"),
            l = n("V9YC"),
            s = "languageDirectoryFilters"
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "osVersion"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "processor"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "ram"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "videoCard"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "directXVersion"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hardDriveSpace"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "other"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
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
                                i.tracked = !0, s.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    o = r.content,
                                    l = r.medium,
                                    c = r.content_index;
                                s.n.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
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
                return Object(l.f)(n)
            }
        }
        var a = n("TToO"),
            r = n("OAwv"),
            o = n("U7vG"),
            l = n("F8kA"),
            s = n("6sO2");
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
            l = n("UAN1"),
            s = n("dzKs");
        a.n.store.registerReducer("browse", function(e, t) {
            switch (void 0 === e && (e = function() {
                var e = Object(o.a)();
                return i.__assign({
                    browseType: s.a.GamesAndCommunities,
                    lastBrowsePath: "/directory",
                    sortBy: r.a.Popularity
                }, e)
            }()), t.type) {
                case l.a:
                    return i.__assign({}, e, {
                        browseType: t.browseType
                    });
                case l.b:
                    return i.__assign({}, e, {
                        lastBrowsePath: t.lastBrowsePath
                    });
                case l.c:
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
                            value: "hasInterface"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hasAudio"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hasSubtitles"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "animatedPreviewURL"
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
                                    value: "viewingHistory"
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
                                            value: "position"
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
                            value: "filters"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "StreamMetadataFilterInput"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
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
                                                                    value: "type"
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
                                                                    value: "type"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 798
            }
        };
        n.loc.source = {
            body: "query GamePage_Game($name: String! $type: DirectoryType! $limit: Int $languages: [String!] $cursor: Cursor $filters: StreamMetadataFilterInput) {\ndirectory(name: $name type: $type) {\nid\ndisplayName\n... on Community {\nid\nstreams(first: $limit after: $cursor languages: $languages) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n... on Game {\nid\nstreams(first: $limit after: $cursor languages: $languages filters: $filters) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}\n}",
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
            l = n("rCmJ"),
            s = n("Odds"),
            c = (n("XITx"), {
                TITLE: "clips-modal-title",
                MAIN_BODY: "clips-modal-main-body",
                SUCCESS_BODY: "clips-modal-success-body",
                ERROR_BODY: "clips-modal-error-body",
                SUBMIT_BUTTON: "clips-modal-submit-button",
                CANCEL_BUTTON: "clips-modal-cancel-button"
            }),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSuccess = function() {
                        return t.props.successContent ? r.createElement(s._19, {
                            "data-test-selector": c.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.m.Alt,
                            fullWidth: !0
                        }, r.createElement(s._23, {
                            type: s._28.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? r.createElement(s._19, {
                            "data-test-selector": c.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.m.Alt,
                            fullWidth: !0
                        }, r.createElement(s._23, {
                            type: s._28.Strong,
                            color: s.F.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? r.createElement(l.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(s._19, {
                        padding: 2,
                        background: s.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), r.createElement(s.V, {
                        display: s.H.Flex,
                        justifyContent: s.U.Center
                    }, r.createElement(s.V, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(o.d)("Close", "ClipsModal")))))) : r.createElement(l.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(s._19, {
                        padding: 2,
                        background: s.m.Base,
                        className: "clip-modal"
                    }, r.createElement(s._19, {
                        "data-test-selector": c.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), r.createElement(s._19, {
                        "data-test-selector": c.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), r.createElement(s.V, {
                        display: s.H.Flex,
                        justifyContent: s.U.Center
                    }, r.createElement(s.V, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        type: s.z.Text,
                        onClick: this.props.onClose
                    }, Object(o.d)("Cancel", "ClipsModal"))), r.createElement(s.V, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": c.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : s.z.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && r.createElement(s.Z, {
                        delay: 0
                    })))))
                }, t
            }(r.Component),
            u = n("1OO3"),
            m = n("CSlQ"),
            p = 86400,
            g = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            h = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderTitle = function() {
                        return t.props.isTemporary ? r.createElement(s._23, {
                            type: s._28.H5,
                            ellipsis: !0
                        }, Object(o.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(s._23, {
                            type: s._28.H5,
                            ellipsis: !0
                        }, Object(o.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? r.createElement(s._23, null, Object(o.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.clip.curator.displayName
                        }, "ClipsModalBanUser")) : r.createElement(s._23, null, Object(o.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
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
                    }, t.state = g, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(d, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            v = Object(m.c)("ClipsModalBanUser")(Object(u.a)(function(e) {
                return {
                    channelID: e.clip.broadcaster.id
                }
            })(h)),
            f = n("7vx8"),
            y = n("wnjK"),
            k = (n("lTii"), this),
            b = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            S = function(e) {
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
                    var e = [r.createElement(s._23, {
                            key: "title",
                            type: s._28.H4
                        }, Object(o.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(s.V, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, r.createElement(s._23, {
                            type: s._28.P,
                            color: s.F.Alt2
                        }, Object(o.d)("This clip will be permanently deleted.", "ClipsModalDelete")))],
                        t = r.createElement(s._19, {
                            display: s.H.Flex,
                            flexWrap: s.K.NoWrap
                        }, r.createElement(s.V, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(s.j, {
                            ratio: s.k.Aspect16x9
                        }, r.createElement("img", {
                            src: this.props.clip.thumbnailURL
                        }))), r.createElement(s.V, null, r.createElement(s._23, {
                            type: s._28.H5
                        }, this.props.clip.title), r.createElement(s._23, {
                            color: s.F.Alt2
                        }, Object(o.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsModalDelete"), " • ", Object(o.d)("Clipped by {curator}", {
                            curator: this.props.clip.curator.login
                        }, "ClipsModalDelete")), r.createElement(s._23, {
                            color: s.F.Alt2
                        }, Object(o.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsModalDelete"))));
                    return r.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(o.d)("Delete", "ClipsModalDelete"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(o.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            _ = i({
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
            })(S),
            C = n("BhyV"),
            E = n("wqRA"),
            N = this,
            w = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            D = function(e) {
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
                    var e = r.createElement(s._23, {
                        type: s._28.P
                    }, Object(o.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return r.createElement(d, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: r.createElement(s._23, {
                            type: s._28.H4
                        }, Object(o.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(o.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(r.Component),
            O = Object(C.compose)(Object(m.c)("ClipsModalDeleteAll"), i({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return a.__awaiter(N, void 0, void 0, function() {
                                var i, r, l;
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
                                            throw l = a.sent(), o.i.error(l, "Failed to delete clips from VOD"), l;
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
            }))(D),
            F = this,
            T = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            I = function(e) {
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
                    var e = r.createElement(s._23, {
                            type: s._28.H4
                        }, Object(o.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = r.createElement(s._23, {
                            type: s._28.P
                        }, Object(o.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return r.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(o.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(r.Component),
            V = i({
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
            })(I);
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return v
        }), n.d(t, "d", function() {
            return _
        }), n.d(t, "e", function() {
            return O
        }), n.d(t, "c", function() {
            return V
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
    w9tK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseGamesAndCommunities: "browse.games-and-communities",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardExtensions: "channel.dashboard.extensions",
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
            DirectoryPopularByLanguage: "directory.popular.language",
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
            ForYou: "for-you",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            SettingsChannel: "private/embed-components",
            SettingsConnections: "private/embed-components",
            SettingsNotifications: "settings.notifications",
            SettingsPrime: "settings.prime",
            SettingsProfile: "settings.profile",
            SettingsSecurity: "private/embed-components",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardSettings: "teams.dashboard.settings",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    wB6A: function(e, t) {},
    wXwV: function(e, t, n) {
        "use strict";
        n.d(t, "f", function() {
            return o
        }), n.d(t, "g", function() {
            return l
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "c", function() {
            return c
        }), n.d(t, "a", function() {
            return d
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
            l = function(e, t) {
                return Object(a.d)("Required image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            s = function(e) {
                return Object(a.d)("Couldn't upload image. Request returned {statusCode, number}", {
                    statusCode: e
                }, "ImageUploader")
            },
            c = function() {
                return Object(a.d)("The privided image does not have the required dimensions.", "ImageUploader")
            },
            d = function() {
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
                            value: "acquisition"
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
                                    value: "isExternal"
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
                            value: "developer"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                                    value: "details"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "iconURL"
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
                            value: "featureDetails"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "genres"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                        alias: null,
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
                        alias: null,
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
                                    value: "isExternal"
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
                            value: "supportedPlatforms"
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
                                    value: "iconURL"
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
                                alias: null,
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
                                            value: "slug"
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
                                            value: "id"
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
                                    value: "broadcast"
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
                                    value: "hasPrime"
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
//# sourceMappingURL=pages.directory-game-74e6524c76ee9954d5bfd1f70209fa69.js.map