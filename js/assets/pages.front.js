webpackJsonp([51], {
    "+2of": function(e, t) {},
    "/+aa": function(e, t) {},
    "/+to": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("TToO"),
            r = n("GiK3"),
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
                            var i;
                            if (n.props.slotID === d.b.directory.banner) return void((i = n.slotRef.querySelector(c)) && 1 !== i.clientWidth && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === d.b.directory.rectangle) return void((i = n.slotRef.querySelector(u)) && 1 !== i.clientWidth && n.setState({
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
                    d.g.addListener(d.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet && !this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), d.g.removeListener(d.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = a.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), r.createElement("div", a.__assign({
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    }, Object(s.a)(this.props)))
                }, t
            }(r.Component);
        var p = Object(i.b)(function(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        })(m);
        n.d(t, "a", function() {
            return p
        })
    },
    "/0cZ": function(e, t, n) {
        var i = {
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
                                name: {
                                    kind: "Name",
                                    value: "isConnectedToTwitter"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                end: 271
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/feed-fragment.gql"\n#import "twilight/features/feed/models/user-fragment.gql"\nquery Pulse($limit: Int $cursor: Cursor) {\ncurrentUser {\n...feedUser\nisConnectedToTwitter\npulseFeed {\nitems(first: $limit after: $cursor) {\n...feed\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("VMA7").definitions)), i.definitions = i.definitions.concat(r(n("Lq4d").definitions)), e.exports = i
    },
    "/SNv": function(e, t, n) {
        e.exports = n.p + "assets/hearthstone-classes-b3b59eedbe78268cf62299a41ec09be1.png"
    },
    "0ImK": function(e, t) {
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
                        name: {
                            kind: "Name",
                            value: "emoteID"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "setID"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "from"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "to"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 65
            }
        };
        n.loc.source = {
            body: "fragment embeddedEmote on EmbeddedEmote {\nemoteID\nsetID\nfrom\nto\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "0OPT": function(e, t) {},
    "0v28": function(e, t) {},
    "1OO3": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("7vx8"),
            r = 60,
            o = 60 * r,
            s = 24 * o,
            l = 7 * s,
            d = 4 * l;
        var c, u = n("MApH");
        n.d(t, "a", function() {
                return c
            }), t.b = function(e) {
                var t = this;
                return Object(a.a)(u, {
                    props: function(n) {
                        return {
                            banUserMutation: function(a, c) {
                                return void 0 === c && (c = null), i.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: a,
                                                            expiresIn: c && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > d) {
                                                                    var i = Math.floor(t / d);
                                                                    t -= i * d, n += i + "mo"
                                                                }
                                                                if (t > l) {
                                                                    var a = Math.floor(t / l);
                                                                    t -= a * l, n += a + "w"
                                                                }
                                                                if (t > s) {
                                                                    var c = Math.floor(t / s);
                                                                    t -= c * s, n += c + "d"
                                                                }
                                                                if (t > o) {
                                                                    var u = Math.floor(t / o);
                                                                    t -= u * o, n += u + "h"
                                                                }
                                                                if (t > r) {
                                                                    var m = Math.floor(t / r);
                                                                    t -= m * r, n += m + "m"
                                                                }
                                                                return t > 0 && (n += t + "s"), n
                                                            }(c)
                                                        }
                                                    }
                                                })];
                                            case 2:
                                                return [2, i.sent().data];
                                            case 3:
                                                throw i.sent(), new Error("Unable to ban user");
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                throw new Error("Ban user mutation is not ready");
                                            case 6:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            },
            function(e) {
                e.Forbidden = "FORBIDDEN", e.TargetNotFound = "TARGET_NOT_FOUND", e.TargetIsSelf = "TARGET_IS_SELF", e.TargetIsAnonymous = "TARGET_IS_ANONYMOUS", e.TargetIsMod = "TARGET_IS_MOD", e.TargetIsBroadcaster = "TARGET_IS_BROADCASTER", e.TargetIsStaff = "TARGET_IS_STAFF", e.TargetIsAdmin = "TARGET_IS_ADMIN", e.TargetIsGlobalMod = "TARGET_IS_GLOBAL_MOD", e.TargetIsAlreadyBanned = "TARGET_ALREADY_BANNED", e.DurationInvalid = "DURATION_INVALID"
            }(c || (c = {}))
    },
    "1jVX": function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, c) {
            void 0 === t && (t = []);
            for (var u, m = [], p = e.split(/\n/), g = function(e, g) {
                    if (e > 0 && (g += p[e - 1].length + 1), c && "" === p[e]) return m.push(i.createElement(l.Q, {
                        key: e
                    }, "\n")), u = g, "continue";
                    var v = t.map(function(e) {
                            return function(e, t) {
                                return {
                                    emoteID: e.emoteID,
                                    from: e.from - t,
                                    to: e.to - t,
                                    setID: e.setID
                                }
                            }(e, g)
                        }).filter(function(t) {
                            return ! function(e, t) {
                                return e.from < 0 || e.from >= t || e.to < 0 || e.to >= t
                            }(t, p[e].length)
                        }),
                        h = Object(o.g)(p[e], Object(s.b)(v), 0, {}, !1, n);
                    m.push(i.createElement(l.Q, {
                        key: e
                    }, function(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var o = e[n];
                            switch (o.type) {
                                case r.a.ClipLink:
                                    t.push(i.createElement("a", {
                                        key: n,
                                        href: o.content.url,
                                        target: "_blank"
                                    }, o.content.url));
                                    break;
                                case r.a.VideoLink:
                                case r.a.Link:
                                    o.content.url.match(d) ? t.push(i.createElement(a.a, {
                                        key: n,
                                        to: o.content.url.replace(d, "")
                                    }, o.content.displayText)) : t.push(i.createElement("a", {
                                        key: n,
                                        href: o.content.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, o.content.displayText));
                                    break;
                                case r.a.Mention:
                                    t.push(i.createElement(a.a, {
                                        key: n,
                                        to: "/" + o.content.recipient
                                    }, o.content.recipient));
                                    break;
                                case r.a.Emote:
                                    o.content.images.themed || t.push(i.createElement("img", {
                                        key: n,
                                        src: o.content.images.sources["1x"],
                                        alt: o.content.alt
                                    }));
                                    break;
                                case r.a.Text:
                                    t.push(i.createElement("span", {
                                        key: n
                                    }, o.content))
                            }
                        }
                        return t
                    }(h))), u = g
                }, v = 0, h = 0; v < p.length; v++) g(v, h), h = u;
            return m
        };
        var i = n("GiK3"),
            a = (n.n(i), n("F8kA")),
            r = n("mwvJ"),
            o = n("l21v"),
            s = n("dQj3"),
            l = n("Odds"),
            d = /^(https?:\/\/)?(www.)?twitch\.tv/
    },
    "1qqv": function(e, t, n) {
        "use strict";
        var i, a, r = n("RH2O"),
            o = n("2KeS"),
            s = n("V5M+"),
            l = n("TToO"),
            d = n("HW6M"),
            c = n("GiK3"),
            u = n("6sO2"),
            m = n("+8VM"),
            p = n("sikP"),
            g = n("CSlQ"),
            v = n("oSFp"),
            h = n("mw/a"),
            f = n("6BvN"),
            k = n("F8kA"),
            b = n("rCmJ"),
            y = n("4Gcm"),
            _ = n("8Wuk"),
            S = n("2hJ3"),
            w = n("NY9D"),
            C = n("HM6l"),
            E = n("sEID"),
            N = n("jetF"),
            T = n("7vx8"),
            O = n("J4ib"),
            I = n("Kckb");
        ! function(e) {
            e.AR = "AR", e.ASL = "ASL", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.OTHER = "OTHER", e.PL = "PL", e.PT = "PT", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH"
        }(i || (i = {})),
        function(e) {
            e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
        }(a || (a = {}));
        var F = n("Odds"),
            L = n("6fIs"),
            R = [a.Delete, a.DeleteAll],
            x = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.clipsMaintenance = Object(I.a)(), n.renderMenuItem = function(e) {
                        var t = n.menuData.get(e);
                        return e && t ? c.createElement(F._6, {
                            key: t.display,
                            onClick: t.destinationHandler,
                            "data-a-target": "clip-moderation-button-" + t.display,
                            disabled: n.clipsMaintenance && R.includes(e)
                        }, c.createElement(F._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, t.display)) : null
                    }, n.menuData = new Map([
                        [a.Report, {
                            display: Object(O.d)("Report", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(a.Report)
                            }
                        }],
                        [a.Delete, {
                            display: Object(O.d)("Delete", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(a.Delete)
                            }
                        }],
                        [a.DeleteAll, {
                            display: Object(O.d)("Delete All Clips from Video", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(a.DeleteAll)
                            }
                        }],
                        [a.Ban, {
                            display: Object(O.d)("Ban User", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(a.Ban)
                            }
                        }],
                        [a.Timeout, {
                            display: Object(O.d)("Timeout User (24 hr)", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(a.Timeout)
                            }
                        }]
                    ]), n
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = this.props.clip;
                    if (!e || !e.currentUser) return null;
                    var n = e.currentUser.isStaff || e.currentUser.isSiteAdmin,
                        i = !!t.curator && e.currentUser.id === t.curator.id,
                        r = !!t.broadcaster && e.currentUser.id === t.broadcaster.id,
                        o = i || r || n,
                        s = r || n,
                        l = [a.Report];
                    return o && l.push(a.Delete), s && (l.push(a.DeleteAll), t.curator && t.broadcaster && (l.push(a.Ban), l.push(a.Timeout))), c.createElement(F._8, {
                        className: "moderation-menu"
                    }, c.createElement(N.a, null, c.createElement(F.v, {
                        type: F.B.Hollow,
                        icon: F._25.More,
                        ariaLabel: Object(O.d)("More Options", "ModerationMenu"),
                        "data-a-target": "moderation-menu-button"
                    }), c.createElement(F.q, {
                        direction: F.r.TopRight
                    }, c.createElement(F._8, {
                        padding: {
                            y: .5
                        }
                    }, this.moderationMenuRender(l)))))
                }, t.prototype.moderationMenuRender = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        return t.renderMenuItem(e)
                    })
                }, t = l.__decorate([Object(T.a)(L), Object(g.d)("ModerationMenu")], t)
            }(c.Component),
            D = n("WNmM"),
            P = (n("MjlB"), 2e3),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingBalloon: !1,
                        playerRefID: Object(C.a)()
                    }, t.timeoutID = null, t.copyClipURL = function() {
                        var e;
                        try {
                            e = Object(S.a)(t.props.clip.url)
                        } catch (e) {
                            return void u.j.warn("Failed to copy", e)
                        }
                        e && (t.setState({
                            isShowingBalloon: !0
                        }), t.timeoutID = setTimeout(function() {
                            t.setState({
                                isShowingBalloon: !1
                            })
                        }, P), Object(D.c)(t.props.clip.id, t.props.clip.game && t.props.clip.game.name, t.props.clip.broadcaster && t.props.clip.broadcaster.id, t.props.clip.broadcaster && t.props.clip.broadcaster.login, t.props.pageType)(_.b.CopyInput))
                    }, t.dismissBalloon = function() {
                        t.setState({
                            isShowingBalloon: !1
                        }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.reportPlayerInstanceStarted(this.state.playerRefID)
                }, t.prototype.render = function() {
                    var e, t = this.props.clip.broadcaster && c.createElement(k.a, {
                        to: "/" + this.props.clip.broadcaster.login,
                        onClick: this.props.closeModal,
                        "data-a-target": "clip-modal-broadcaster-link"
                    }, this.props.clip.broadcaster.login);
                    return e = this.props.clip.game && t ? Object(u.d)("{broadcaster} playing {game}", {
                        broadcaster: t,
                        game: c.createElement(k.a, {
                            to: "" + Object(w.c)(this.props.clip.game.name),
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-game-link"
                        }, this.props.clip.game.name)
                    }, "ClipsViewModalContent") : t, c.createElement(F._35, {
                        className: "clips-view-modal-content",
                        background: F.n.Base
                    }, c.createElement(F._8, {
                        padding: {
                            bottom: 2
                        }
                    }, c.createElement(F.k, {
                        ratio: F.l.Aspect16x9
                    }, c.createElement("iframe", {
                        src: this.props.clip.embedURL,
                        width: "100%",
                        height: "100%",
                        allowFullScreen: !0
                    }))), c.createElement(F._8, {
                        padding: {
                            x: 2,
                            bottom: 2
                        }
                    }, c.createElement(F._8, {
                        display: F.R.Flex,
                        flexWrap: F.U.NoWrap
                    }, c.createElement(F._8, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, c.createElement(b.a, {
                        onClickOut: this.dismissBalloon
                    }, c.createElement(y.a, {
                        text: this.props.clip.url,
                        icon: !0,
                        iconAsset: F._25.Link,
                        onSelection: this.copyClipURL,
                        "data-a-target": "clip-share-input"
                    }, c.createElement(F.q, {
                        show: this.state.isShowingBalloon,
                        direction: F.r.TopRight
                    }, c.createElement(F._6, {
                        onClick: this.dismissBalloon
                    }, c.createElement(F._8, {
                        padding: 1
                    }, c.createElement(F.Q, {
                        bold: !0
                    }, Object(u.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), c.createElement(E.a, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    }), c.createElement(x, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState
                    }))), c.createElement(F._8, {
                        padding: {
                            x: 2,
                            bottom: 2
                        },
                        display: F.R.Flex,
                        flexWrap: F.U.NoWrap,
                        justifyContent: F._7.Between,
                        fullWidth: !0,
                        overflow: F._11.Hidden
                    }, c.createElement(F._8, {
                        flexGrow: 1,
                        ellipsis: !0
                    }, c.createElement(F._2, {
                        ellipsis: !0
                    }, c.createElement(F._35, {
                        display: F.R.Flex,
                        fontSize: F.V.Size5
                    }, c.createElement(F._8, {
                        ellipsis: !0
                    }, this.props.clip.title), c.createElement(F._8, {
                        flexShrink: 0
                    }, c.createElement(F.Q, {
                        type: F._49.Span,
                        color: F.K.Alt2
                    }, " • ", Object(u.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsViewModalContent"))))), c.createElement(F._2, {
                        ellipsis: !0
                    }, c.createElement(F._35, {
                        color: F.K.Alt2
                    }, e, e && !!this.props.clip.curator && c.createElement("span", null, " • "), this.props.clip.curator && Object(u.d)("Clipped by {curator}", {
                        curator: c.createElement(k.a, {
                            to: "/" + this.props.clip.curator.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-curator-link"
                        }, this.props.clip.curator.login)
                    }, "ClipsViewModalContent")))), c.createElement(F._35, {
                        display: F.R.Flex,
                        padding: {
                            bottom: 2,
                            left: 2
                        },
                        fontSize: F.V.Size5,
                        color: F.K.Alt2,
                        flexShrink: 0
                    }, c.createElement(F._8, {
                        margin: {
                            right: .5
                        },
                        alignItems: F.c.Center,
                        display: F.R.Flex
                    }, c.createElement(F._24, {
                        asset: F._25.GlyphViews
                    })), Object(u.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsViewModalContent"))))
                }, t = l.__decorate([Object(g.d)("ClipsViewModalContent")], t)
            }(c.Component),
            V = n("Hjbq");
        var j = Object(r.b)(null, function(e) {
                return Object(o.b)({
                    reportPlayerInstanceStarted: V.b
                }, e)
            })(A),
            M = (n("GOrw"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onKeyDown = function(e) {
                        var n = e.charCode || e.keyCode;
                        n === f.a.Left ? t.updateClipBackward() : n === f.a.Right && t.updateClipForward()
                    }, t.updateClipForward = function() {
                        t.updateClipIndex(t.props.clipIndex + 1)
                    }, t.updateClipBackward = function() {
                        t.updateClipIndex(t.props.clipIndex - 1)
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.setUpArrowListeners()
                }, t.prototype.render = function() {
                    var e = null,
                        t = null;
                    this.props.clipIndex > 0 && (e = c.createElement(F._8, {
                        position: F._15.Absolute,
                        display: F.R.Flex,
                        alignItems: F.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--left"
                    }, c.createElement(F.w, {
                        ariaLabel: Object(u.d)("Previous clip", "ClipsViewModalNavigation"),
                        type: F.y.Primary,
                        icon: F._25.AngleLeft,
                        onClick: this.updateClipBackward,
                        "data-test-selector": "clips-view-modal-navigation-back"
                    })));
                    var n = this.props.getClips();
                    return this.props.loadMoreClips && n.length - this.props.clipIndex < 4 && this.props.loadMoreClips(), this.props.clipIndex < n.length - 1 && (t = c.createElement(F._8, {
                        position: F._15.Absolute,
                        display: F.R.Flex,
                        alignItems: F.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--right"
                    }, c.createElement(F.w, {
                        ariaLabel: Object(u.d)("Next clip", "ClipsViewModalNavigation"),
                        type: F.y.Primary,
                        icon: F._25.AngleRight,
                        onClick: this.updateClipForward,
                        "data-test-selector": "clips-view-modal-navigation-forward"
                    }))), c.createElement(F._8, {
                        className: "clips-view-modal-navigation"
                    }, e, c.createElement(j, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState,
                        pageType: this.props.pageType,
                        closeModal: this.props.closeModal
                    }), t)
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("keydown", this.onKeyDown)
                }, t.prototype.setUpArrowListeners = function() {
                    document.addEventListener("keydown", this.onKeyDown)
                }, t.prototype.updateClipIndex = function(e) {
                    var t = Math.max(0, e),
                        n = this.props.getClips();
                    n.length - t < 4 && this.props.loadMoreClips && this.props.loadMoreClips(), t < n.length && this.props.showModal(H, {
                        getClips: this.props.getClips,
                        clip: n[t],
                        clipIndex: t,
                        loadMoreClips: this.props.loadMoreClips,
                        pageType: this.props.pageType
                    })
                }, t
            }(c.Component)),
            U = Object(g.d)("ClipsViewModalNavigation")(M);
        var G = Object(r.b)(null, function(e) {
                return Object(o.b)({
                    showModal: s.d,
                    closeModal: s.c
                }, e)
            })(U),
            B = (n("/+aa"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        modalView: a.View
                    }, t.setToViewState = function() {
                        t.updateClipsModalViewState(a.View)
                    }, t.updateClipsModalViewState = function(e) {
                        t.setState({
                            modalView: e
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t, n = ((t = {})["clips-modal-view"] = !0, t["clips-modal-view--wide"] = !1, t);
                    switch (this.state.modalView) {
                        case a.Report:
                            e = c.createElement(v.a, {
                                title: Object(u.d)("Report this Clip", "ClipsViewModal"),
                                reportContext: {
                                    contentType: h.a.Clip,
                                    contentID: this.props.clip.slug,
                                    targetUserID: this.props.clip.broadcaster && this.props.clip.broadcaster.id || "",
                                    additionalTrackingID: this.props.clip.curator && this.props.clip.curator.id || ""
                                },
                                onClose: this.setToViewState
                            });
                            break;
                        case a.Delete:
                            e = c.createElement(p.d, {
                                slug: this.props.clip.slug,
                                onClose: this.setToViewState
                            });
                            break;
                        case a.DeleteAll:
                            e = c.createElement(p.e, {
                                slug: this.props.clip.slug,
                                onClose: this.setToViewState
                            });
                            break;
                        case a.Ban:
                        case a.Timeout:
                            if (this.props.clip.curator && this.props.clip.broadcaster) {
                                e = c.createElement(p.b, {
                                    targetUser: {
                                        displayName: this.props.clip.curator.displayName || "",
                                        login: this.props.clip.curator.login || ""
                                    },
                                    broadcasterID: this.props.clip.broadcaster.id || "",
                                    isTemporary: this.state.modalView === a.Timeout,
                                    onClose: this.setToViewState
                                });
                                break
                            }
                        default:
                            e = c.createElement(G, {
                                getClips: this.props.getClips,
                                clip: this.props.clip,
                                clipIndex: this.props.clipIndex,
                                updateModalViewState: this.updateClipsModalViewState,
                                loadMoreClips: this.props.loadMoreClips,
                                pageType: this.props.pageType
                            }), n["clips-modal-view--wide"] = !0
                    }
                    return c.createElement(F._8, {
                        className: d(n)
                    }, e, c.createElement(m.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, t = l.__decorate([Object(g.d)("ClipsViewModal")], t)
            }(c.Component));
        var H = Object(r.b)(null, function(e) {
            return Object(o.b)({
                showModal: s.d
            }, e)
        })(B);
        n.d(t, "a", function() {
            return H
        })
    },
    "24qG": function(e, t) {},
    "2hJ3": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.fontSize = "12pt", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
            var n = !0;
            try {
                n = document.execCommand("copy")
            } catch (e) {
                n = !1
            }
            return document.body.removeChild(t), n
        }
    },
    "4Gcm": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        });
        var i = n("TToO"),
            a = n("GiK3"),
            r = (n.n(a), n("2KeS")),
            o = n("CSlQ"),
            s = n("Odds"),
            l = n("Jg0G"),
            d = (n.n(l), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectOnFocus = function(e) {
                        e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(s._8, i.__assign({
                        position: s._15.Relative,
                        className: "selectable-input-wrapper"
                    }, Object(s._63)(this.props)), a.createElement(s._4, {
                        type: s._5.Text,
                        value: this.props.text,
                        readOnly: !0,
                        onFocus: this.selectOnFocus,
                        icon: this.props.iconAsset,
                        id: this.props.id
                    }), this.props.children)
                }, t
            }(a.Component)),
            c = Object(r.d)(Object(o.d)("SelectableInput"))(d)
    },
    "4mYF": function(e, t, n) {
        "use strict";
        var i, a = n("RH2O"),
            r = n("2KeS"),
            o = n("Hjbq"),
            s = n("j0cR"),
            l = n("TToO"),
            d = n("GiK3"),
            c = n("6sO2"),
            u = n("mi6k"),
            m = n("HM6l"),
            p = n("CSlQ"),
            g = n("Odds"),
            v = (n("kuCN"), "embed-overlay");
        ! function(e) {
            e[e.Clip = 0] = "Clip", e[e.Video = 1] = "Video", e[e.Stream = 2] = "Stream", e[e.VideoOEmbed = 3] = "VideoOEmbed"
        }(i || (i = {}));
        var h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showOverlay: !0,
                        playerRefID: Object(m.a)()
                    }, t.getOverlayComponent = function() {
                        var e = t.props,
                            n = e.createdAt,
                            a = e.lengthSeconds,
                            r = e.thumbnailURL,
                            o = e.type,
                            s = e.viewCount,
                            l = a && a > 0 ? Object(u.b)(a) : "";
                        return d.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": v
                        }, d.createElement(g.k, {
                            ratio: g.l.Aspect16x9
                        }, d.createElement(g._8, null, d.createElement(g._2, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: g._15.Absolute
                        }, d.createElement("img", {
                            src: r
                        })), d.createElement(g._8, {
                            className: "embed-card__overlay",
                            position: g._15.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, d.createElement(g._8, {
                            className: "embed-card__play",
                            display: g.R.Flex,
                            justifyContent: g._7.Center,
                            position: g._15.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, d.createElement(g._24, {
                            asset: g._25.Play,
                            width: 50,
                            height: 50
                        })), d.createElement(g._8, {
                            position: g._15.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && d.createElement(g.Q, null, Object(c.c)(new Date(n), "medium")), d.createElement(g._8, null, o === i.Stream && d.createElement(g._8, {
                            display: g.R.Inline,
                            margin: {
                                right: .5
                            }
                        }, d.createElement(g.G, {
                            status: g.I.Live
                        })), void 0 !== s && d.createElement("span", null, t.getFormattedViewCount(s, o)))), d.createElement(g._8, {
                            position: g._15.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, l && d.createElement(g._8, null, d.createElement(g.Q, null, l)))), d.createElement(g._35, {
                            position: g._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: g.V.Size5
                        }, o === i.Stream && d.createElement(g._12, {
                            label: Object(c.d)("Live", "EmbedOverlayPill"),
                            type: g._13.Live
                        }), o === i.Video && d.createElement(g._12, {
                            label: Object(c.d)("Video", "EmbedOverlayPill"),
                            type: g._13.Overlay
                        }), o === i.Clip && d.createElement(g._12, {
                            label: Object(c.d)("Clip", "EmbedOverlayPill"),
                            type: g._13.Overlay
                        })))))
                    }, t.handleClick = function(e) {
                        e.preventDefault(), t.setState({
                            showOverlay: !1
                        }), t.props.type === i.Clip && t.props.reportPlayerInstanceStarted(t.state.playerRefID), t.props.onClick && t.props.onClick()
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    if (this.props.type === i.Clip) {
                        var t = e.activeVideoPlayerRefID;
                        t === this.state.playerRefID ? this.setState({
                            showOverlay: !1
                        }) : this.props.activeVideoPlayerRefID === t || t === this.state.playerRefID || this.state.showOverlay || this.setState({
                            showOverlay: !0
                        })
                    }
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.state.showOverlay ? this.getOverlayComponent() : d.createElement(g.k, {
                        ratio: g.l.Aspect16x9
                    }, d.createElement("div", {
                        "data-test-selector": "embed-overlay-wrapper"
                    }, this.props.children))
                }, t.prototype.getFormattedViewCount = function(e, t) {
                    switch (t) {
                        case i.Stream:
                            return Object(c.d)("{viewCount,number} viewers", {
                                viewCount: e
                            }, "OverlayViewCount");
                        case i.Clip:
                        case i.Video:
                            return Object(c.d)("{viewCount,number} views", {
                                viewCount: e
                            }, "OverlayViewCount");
                        default:
                            return ""
                    }
                }, t
            }(d.Component),
            f = Object(p.d)("EmbedOverlay")(h);
        var k = Object(a.b)(function(e) {
            return {
                activeVideoPlayerRefID: Object(s.a)(e)
            }
        }, function(e) {
            return Object(r.b)({
                reportPlayerInstanceStarted: o.b
            }, e)
        })(f);
        n.d(t, "a", function() {
            return k
        }), n.d(t, !1, function() {
            return v
        }), n.d(t, !1, function() {
            return "embed-overlay-wrapper"
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, !1, function() {
            return f
        })
    },
    "5DPx": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return k
        });
        var i, a = n("TToO"),
            r = n("6sO2"),
            o = n("YUUt"),
            s = n.n(o),
            l = n("/SNv"),
            d = n.n(l),
            c = n("Vr3l"),
            u = n.n(c),
            m = n("PPNL"),
            p = n("nyge"),
            g = n("EOpv"),
            v = n("LgcN"),
            h = this,
            f = r.o.logger.withCategory("metadata-info");
        ! function(e) {
            e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
        }(i || (i = {}));
        var k = function(e, t) {
                return a.__awaiter(h, void 0, void 0, function() {
                    var n, i, o, s, l, d;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return n = t.toLowerCase(), i = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, i && n === p.a.CounterStrike ? [4, b(i)] : [3, 2];
                            case 1:
                                return [2, a.sent()];
                            case 2:
                                return o && n === p.a.Hearthstone ? [4, y(o)] : [3, 4];
                            case 3:
                                return [2, a.sent()];
                            case 4:
                                return l && n === p.a.Overwatch ? [4, _(l)] : [3, 6];
                            case 5:
                                return [2, a.sent()];
                            case 6:
                                if (s && n === p.a.LeagueOfLegends && (d = r.o.store.getState()).directory)
                                    if (d.directory.leagueOfLegends.championsMap) {
                                        if (d.directory.leagueOfLegends.championsMap) return [2, S(s, d.directory.leagueOfLegends.championsMap, d.directory.leagueOfLegends.version)]
                                    } else r.o.store.dispatch(Object(m.a)());
                                a.label = 7;
                            case 7:
                                return [2, null]
                        }
                    })
                })
            },
            b = function(e) {
                return a.__awaiter(h, void 0, void 0, function() {
                    var t, n, i;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, Object(v.a)()];
                            case 1:
                                return t = a.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
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
                                return i = a.sent(), f.error(i, "Failed to load Counter-Strike skill group data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            y = function(e) {
                return a.__awaiter(h, void 0, void 0, function() {
                    var t, n, i;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, Object(v.b)()];
                            case 1:
                                return t = a.sent(), n = {}, t[0].Class.forEach(function(e) {
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
                                return i = a.sent(), f.error(i, "Failed to load Hearthstone class data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            _ = function(e) {
                return a.__awaiter(h, void 0, void 0, function() {
                    var t, n, i, r, o, s, l, d, c, m, p, h;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, Object(v.d)()];
                            case 1:
                                for (t = a.sent(), n = void 0, i = 0, r = t; i < r.length; i++)
                                    for (o in n = r[i])
                                        if (n.hasOwnProperty(o))
                                            for (s = n[o], l = 0, d = s; l < d.length; l++)
                                                if ((c = d[l]).character === e) return (h = {})[c.character] = c, [2, {
                                                    name: (m = h)[e].display_name,
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
                                return p = a.sent(), f.error(p, "Failed to load Overwatch character data"), [2, null];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            S = function(e, t, n) {
                if (!t || !e) return null;
                var i = t[e],
                    a = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + i.image.sprite;
                return {
                    name: i.name,
                    label: Object(g.b)(g.a.LeagueChampion),
                    spriteDetails: {
                        imageWidth: i.image.w,
                        imageHeight: i.image.h,
                        spriteOffsetX: i.image.x,
                        spriteOffsetY: i.image.y,
                        spriteURL: a
                    }
                }
            }
    },
    "6Agf": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
            }(i || (i = {}))
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
    "6hXa": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.b = function(e) {
            var t = e.content.id;
            switch (e.content.__typename) {
                case "Clip":
                    var n = e.content;
                    return {
                        type: o.a,
                        id: n.slug
                    };
                case "Post":
                    var i = t.split(":");
                    return {
                        type: o.c,
                        id: i[i.length - 1]
                    };
                case "Stream":
                    var a = e.content;
                    return {
                        type: o.d,
                        id: a.broadcaster.id + ":" + t
                    };
                case "Video":
                    return {
                        type: o.e,
                        id: t
                    };
                default:
                    return {
                        type: "",
                        id: ""
                    }
            }
        }, n.d(t, "c", function() {
            return s
        });
        var i, a = n("TToO"),
            r = n("6sO2"),
            o = n("TWJL");
        ! function(e) {
            e.Create = "create", e.Remove = "remove"
        }(i || (i = {}));
        var s = function(e, t, n) {
            r.n.track(e, a.__assign({}, t, n))
        }
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
    "86JD": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("iOr9"),
            s = n("bZTi"),
            l = n("o8Pq"),
            d = n("bNhH"),
            c = n("Wjt1"),
            u = function(e) {
                var t = {
                    name: "TWILIGHT_VIDEO_FEATURO_EN",
                    assignments: {
                        fallback: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "o8Pq"))
                            }, "FeaturedBroadcasters")(i.__assign({}, e))
                        },
                        mixed: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "Wjt1"))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !0
                            }))
                        },
                        last: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "Wjt1"))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !1
                            }))
                        }
                    },
                    loader: function() {
                        return Object(d.c)(e.renderContext)
                    }
                };
                return "en" === r.o.intl.getLanguageCode() ? a.createElement(o.a, i.__assign({}, t)) : a.createElement(l.FeaturedBroadcasters, {
                    renderContext: e.renderContext
                })
            };
        n.d(t, "a", function() {
            return c.FeaturedBroadcastersRenderContext
        }), n.d(t, "b", function() {
            return u
        })
    },
    "8Wuk": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        });
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = (n.n(r), n("6sO2")),
            s = n("2hJ3"),
            l = n("f6Cj"),
            d = n("Odds"),
            c = n("bdk8");
        n.n(c);
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
        }(i || (i = {}));
        var u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.props.type === i.Download ? r.createElement("a", a.__assign({
                        href: n.props.url,
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(d._63)(n.props), {
                        download: n.props.text
                    }), n.renderIcon()) : n.isLink() ? r.createElement("a", a.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(d._63)(n.props)), n.renderIcon()) : r.createElement("button", a.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(d._63)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(s.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType(),
                        t = n.getAssetSizeFromType();
                    return r.createElement(d._8, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                        display: d.R.Flex,
                        justifyContent: d._7.Center,
                        alignItems: d.c.Center
                    }, r.createElement(d._24, {
                        asset: e,
                        width: t,
                        height: t
                    }))
                }, n.isLink = function() {
                    return n.props.type !== i.Copy
                }, n.getAssetSizeFromType = function() {
                    switch (n.props.type) {
                        case i.Download:
                            return 20;
                        default:
                            return 30
                    }
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return "Twitter";
                        case i.Reddit:
                            return "Reddit";
                        case i.Facebook:
                            return "Facebook";
                        case i.VKontakte:
                            return "VKontakte";
                        case i.Download:
                            return Object(o.d)("Download", "SocialButton");
                        case i.Copy:
                            return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return d._25.Twitter;
                        case i.Facebook:
                            return d._25.Facebook;
                        case i.VKontakte:
                            return d._25.VKontakte;
                        case i.Reddit:
                            return d._25.Reddit;
                        case i.Download:
                            return d._25.Download;
                        case i.Copy:
                        default:
                            return d._25.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case i.Twitter:
                            return e + "--twitter";
                        case i.Reddit:
                            return e + "--reddit";
                        case i.Facebook:
                            return e + "--facebook";
                        case i.VKontakte:
                            return e + "--vkontakte";
                        case i.Download:
                            return e + "--download";
                        case i.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        a = e.type,
                        r = n.getUrl(),
                        o = t || "";
                    switch (a) {
                        case i.Reddit:
                            return Object(l.b)(r, o);
                        case i.VKontakte:
                            return Object(l.d)(r);
                        case i.Facebook:
                            return Object(l.a)(r);
                        case i.Twitter:
                            return Object(l.c)(r, o);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return r.createElement(d._8, {
                    className: "social-button"
                }, r.createElement(d._52, {
                    label: this.getTooltipFromType(),
                    direction: d._54.Bottom
                }, this.renderLink()))
            }, t
        }(r.Component)
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
    "9Fb+": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("KSGD"),
            r = n("GiK3"),
            o = n("6sO2");

        function s(e, t) {
            return function(n) {
                return function(s) {
                    function l() {
                        var e = null !== s && s.apply(this, arguments) || this;
                        return e.state = {
                            hadImpression: !1,
                            didScroll: !1
                        }, e.logger = o.j.withCategory("with-impression-listener"), e.setRef = function(t) {
                            return e.element = t
                        }, e.registerImpressionCallback = function(t) {
                            e.reportImpression = t
                        }, e
                    }
                    return i.__extends(l, s), l.prototype.componentDidMount = function() {
                        this.scrollContext = this.context;
                        var n = this.scrollContext.registerReceiver;
                        n ? t && void 0 !== t.percentage && void 0 !== t.pixels ? this.logger.warn("<" + e + " /> should only be initialized with percentage or pixel thresholds, not both") : this.unregister = n(this) : this.logger.warn("<" + e + " /> initialized missing a <ScrollableArea /> provider")
                    }, l.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, l.prototype.render = function() {
                        var e = {
                            impressionListener: {
                                hadImpression: this.state.hadImpression,
                                didScroll: this.state.didScroll,
                                registerImpressionCallback: this.registerImpressionCallback
                            }
                        };
                        return r.createElement("div", {
                            ref: this.setRef
                        }, r.createElement(n, i.__assign({}, this.props, e)))
                    }, l.prototype.checkVisible = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n;
                            return i.__generator(this, function(i) {
                                return this.state.hadImpression || (t = this.isVisible(e)) && (n = this.isScrolled(), this.setState({
                                    hadImpression: t,
                                    didScroll: n
                                }), this.reportImpression && this.reportImpression(n)), [2]
                            })
                        })
                    }, l.prototype.isVisible = function(e) {
                        if (!this.element) return !1;
                        var n = this.element.getBoundingClientRect();
                        if (n.left < e.right && n.right > e.left && n.top < e.bottom && n.bottom > e.top) {
                            if (!t || 0 === t.percentage || 0 === t.pixels) return !0;
                            var i = t.percentage,
                                a = t.pixels,
                                r = n.bottom - n.top,
                                o = e.bottom - e.top,
                                s = Math.min(e.bottom - n.top, r, o);
                            if (a) {
                                if (r >= a) return s >= a;
                                i = 100
                            }
                            return !i || 100 * (s / r) >= i
                        }
                        return !1
                    }, l.prototype.isScrolled = function() {
                        if (!this.scrollContext) return !1;
                        var e = this.scrollContext.getScrollContent();
                        return !(!e || 0 === e.scrollTop)
                    }, l.contextTypes = {
                        registerReceiver: a.func,
                        getScrollContent: a.func
                    }, l
                }(r.Component)
            }
        }
        n.d(t, "a", function() {
            return s
        })
    },
    "9MIX": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "game"
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
                            value: "viewersCount"
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
            }],
            loc: {
                start: 0,
                end: 92
            }
        };
        n.loc.source = {
            body: "fragment game on Game {\nid\nname\nviewersCount\ndisplayName\nboxArtURL(width: 285 height: 380)\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Av7x: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FrontPageNew_User"
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
                                    value: "createdAt"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                end: 115
            }
        };
        n.loc.source = {
            body: "query FrontPageNew_User($limit: Int) {\ncurrentUser {\nid\ncreatedAt\nfollowedGames(first: $limit) {\nnodes {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    BJwU: function(e, t) {},
    BLXQ: function(e, t) {},
    "C/8M": function(e, t, n) {
        "use strict";
        var i = n("6hXa"),
            a = n("TToO"),
            r = n("KSGD"),
            o = n("GiK3"),
            s = n("6sO2");

        function l() {
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
                    return a.__extends(n, t), n.prototype.componentDidMount = function() {
                        if (this.context.feedImpressionSettings && this.context.feedImpressionSettings.autoReport) return this.triggerImpressionEvent();
                        var e = this.context.registerReceiver;
                        e ? this.unregister = e(this) : s.j.warn("<FeedItem /> initialized missing a <ScrollableArea /> provider")
                    }, n.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, n.prototype.render = function() {
                        var t = {
                            impressionTracking: {
                                onImpression: this.setImpressionEvent
                            }
                        };
                        return o.createElement("div", {
                            ref: this.setRef
                        }, o.createElement(e, a.__assign({}, this.props, t)))
                    }, n.prototype.checkVisible = function(e) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                return this.element ? (t = this.element.getBoundingClientRect(), t.top < e.bottom && t.bottom > e.top && !this.state.impressionEventFired && this.triggerImpressionEvent(), [2]) : [2]
                            })
                        })
                    }, n.contextTypes = {
                        registerReceiver: r.func,
                        feedTrackingProps: r.object,
                        feedImpressionSettings: r.object
                    }, n
                }(o.Component)
            }
        }

        function d(e) {
            return function(t) {
                return function(n) {
                    function i() {
                        var t = null !== n && n.apply(this, arguments) || this;
                        return t.getChildContext = function() {
                            var n = e(t.props);
                            return {
                                feedTrackingProps: a.__assign({}, t.context.feedTrackingProps, n)
                            }
                        }, t
                    }
                    return a.__extends(i, n), i.prototype.render = function() {
                        var e = {
                            feedTrackingProps: this.getChildContext().feedTrackingProps
                        };
                        return o.createElement(t, a.__assign({}, this.props, e))
                    }, i.contextTypes = {
                        feedTrackingProps: r.object
                    }, i.childContextTypes = {
                        feedTrackingProps: r.object
                    }, i
                }(o.Component)
            }
        }
        n.d(t, "a", function() {
            return i.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return i.b
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "d", function() {
            return d
        })
    },
    "CX2/": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PostPermissions"
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
                            value: "feedItemContent"
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
                                kind: "InlineFragment",
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
                                                            value: "canDelete"
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
                end: 117
            }
        };
        n.loc.source = {
            body: "query PostPermissions($id: ID!) {\nfeedItemContent(id: $id) {\n...on Post {\nid\nself {\npermissions {\ncanDelete\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    CybZ: function(e, t) {},
    Dqkc: function(e, t, n) {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                end: 211
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/post-fragment.gql"\nmutation Reaction_Remove($input: RemoveReactionInput!) {\nremoveReaction(input: $input) {\ncontent {\n...feedItemClip\n...feedItemPost\n...feedItemVideo\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("S0OZ").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    EImC: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("Odds"),
            r = function() {
                return i.createElement(a._35, {
                    elevation: 1,
                    margin: {
                        bottom: 2
                    },
                    background: a.n.Base
                }, i.createElement(a._35, {
                    display: a.R.Flex,
                    flexWrap: a.U.NoWrap,
                    padding: 1,
                    background: a.n.Base,
                    borderBottom: !0
                }, i.createElement(a._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(a.Q, null, i.createElement(a._14, {
                    width: 40,
                    height: 40
                }))), i.createElement(a._8, {
                    flexGrow: 1
                }, i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, {
                    width: 100
                })), i.createElement(a.Q, {
                    fontSize: a.V.Size7
                }, i.createElement(a._14, {
                    width: 120
                })))), i.createElement(a._8, {
                    margin: {
                        bottom: .5
                    },
                    padding: 1
                }, i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, null)), i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, null)), i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, {
                    width: 280
                }))))
            },
            o = function() {
                return i.createElement(a._35, {
                    elevation: 1,
                    margin: {
                        bottom: 2
                    },
                    background: a.n.Base
                }, i.createElement(a._8, {
                    margin: {
                        bottom: .5
                    }
                }, i.createElement(a.k, {
                    ratio: a.l.Aspect16x9
                }, i.createElement(a._14, null))), i.createElement(a._35, {
                    display: a.R.Flex,
                    flexWrap: a.U.NoWrap,
                    padding: 1,
                    background: a.n.Base
                }, i.createElement(a._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(a.Q, null, i.createElement(a._14, {
                    width: 40,
                    height: 40
                }))), i.createElement(a._8, {
                    flexGrow: 1
                }, i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, {
                    width: 100
                })), i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, {
                    width: 140
                })), i.createElement(a.Q, {
                    fontSize: a.V.Size6
                }, i.createElement(a._14, {
                    width: 120
                })))))
            };
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        })
    },
    EOpv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        });
        var i, a = n("6sO2");
        ! function(e) {
            e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
        }(i || (i = {}));
        var r = function(e) {
            switch (e) {
                case i.CSGOMap:
                    return Object(a.d)("Map", "CSGOMapFilter");
                case i.CSGOSkillGroup:
                    return Object(a.d)("Rank", "CSGORankFilter");
                case i.HearthstoneClass:
                    return Object(a.d)("Class", "HearthstoneClassFilter");
                case i.HearthstoneMode:
                    return Object(a.d)("Mode", "HearthstoneModeFilter");
                case i.LeagueChampion:
                    return Object(a.d)("Champion", "LeagueFilter");
                case i.OverwatchCharacter:
                    return Object(a.d)("Hero", "OverwatchFilter");
                default:
                    return ""
            }
        }
    },
    GH5m: function(e, t) {},
    GOrw: function(e, t) {},
    HgOP: function(e, t) {},
    "Hjo/": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Shelves"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "requestID"
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
                            value: "platform"
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
                            value: "langWeightedCCU"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Boolean"
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
                            value: "itemsPerRow"
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
                            value: "shelves"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "requestID"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "requestID"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "platform"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "platform"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "langWeightedCCU"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "langWeightedCCU"
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
                                value: "itemsPerRow"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "itemsPerRow"
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
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "shelf"
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
                end: 331
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/front/v2/queries/shelf-fragment.gql"\nquery Shelves($requestID: String! $platform: String! $langWeightedCCU: Boolean $limit: Int $itemsPerRow: Int) {\nshelves(requestID: $requestID platform: $platform langWeightedCCU: $langWeightedCCU first: $limit itemsPerRow: $itemsPerRow) {\nedges {\nnode {\n...shelf\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("bHBY").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    I5q7: function(e, t, n) {
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
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: []
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
                            value: "slug"
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
                                            value: "token"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "setID"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "count"
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
                                            value: "hasReacted"
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
                            }]
                        }
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
        i.loc.source = {
            body: '#import "twilight/features/feed/models/user-fragment.gql"\nfragment feedItemClip on Clip {\nid\nclipCreatedAt: createdAt\nembedURL\nthumbnailURL(width:480 height:272)\nviewCount\nslug\ndurationSeconds\nclipTitle: title\nbroadcaster {\n...feedUser\n}\nreactions {\nemote {\nid\ntoken\nsetID\n}\ncount\nself {\nhasReacted\n}\n}\nvideo {\ngame {\nid\nname\n}\n}\ncurator {\nid\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("Lq4d").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    IJO1: function(e, t) {},
    IOEW: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = n("TToO"),
            r = n("lbHh"),
            o = n("GiK3"),
            s = n("3zLD"),
            l = n("6sO2"),
            d = n("iOr9"),
            c = n("7vx8"),
            u = n("j7/Y"),
            m = n("w9tK"),
            p = n("Us7i"),
            g = n("vH/s"),
            v = n("/+to"),
            h = n("QG7y"),
            f = n("2KeS"),
            k = n("o6H2"),
            b = n("p+bz"),
            y = n("CSlQ"),
            _ = n("Odds"),
            S = n("ey2H");
        n("mbhu");
        ! function(e) {
            e.CarouselCard = "carousel-card", e.VideoCard = "video-card", e.NextButton = "next-button", e.PreviousButton = "previous-button", e.Placeholder = "placeholder"
        }(i || (i = {}));
        var w = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    currentIndex: 6
                }, t.carouselItems = [], t.displayTracked = !1, t.trackCarouselClick = function(e) {
                    var n = {
                        broadcast_type: e.content.subType,
                        carousel_index: t.carouselItems.indexOf(e),
                        channel: e.broadcaster.login,
                        game: e.content.gameName,
                        promotion_was_scheduled: e.isScheduled,
                        views: e.content.viewersCount
                    };
                    Object(k.b)(n)
                }, t.trackPromotionView = function(e) {
                    var n = {
                        broadcast_type: e.content.subType,
                        carousel_index: t.activeIndex,
                        channel: e.broadcaster.login,
                        game: e.content.gameName,
                        promotion_was_scheduled: e.isScheduled,
                        views: e.content.viewersCount
                    };
                    Object(k.e)(n)
                }, t.onClickCard = function(e, n) {
                    return function() {
                        t.trackCarouselClick(n), t.setState(function(n) {
                            return {
                                currentIndex: n.currentIndex + e - 2 < 0 ? t.carouselItems.length - 1 : n.currentIndex + e - 2
                            }
                        })
                    }
                }, t.onPreviousButtonClicked = function() {
                    var e = 0 === t.activeIndex ? t.activeIndex + t.carouselItems.length - 1 : t.activeIndex - 1;
                    t.trackCarouselClick(t.carouselItems[e]), t.setState(function(e) {
                        return {
                            currentIndex: 0 === e.currentIndex ? e.currentIndex + t.carouselItems.length - 1 : e.currentIndex - 1
                        }
                    })
                }, t.onNextButtonClicked = function() {
                    var e = t.activeIndex === t.carouselItems.length - 1 ? 0 : t.activeIndex + 1;
                    t.trackCarouselClick(t.carouselItems[e]), t.setState(function(e) {
                        return {
                            currentIndex: e.currentIndex + 1
                        }
                    })
                }, t
            }
            return a.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                return this.props.data && !this.props.data.loading && this.props.data.featuredStreams ? this.props.data.error ? null : o.createElement(_._8, {
                    display: _.R.Flex,
                    justifyContent: _._7.Center,
                    className: "logged-in-featured-content"
                }, o.createElement(_._8, {
                    display: _.R.Flex,
                    flexGrow: 0,
                    alignItems: _.c.Center,
                    margin: {
                        right: 3
                    }
                }, this.renderPreviousButton()), this.renderCards(), o.createElement(_._8, {
                    display: _.R.Flex,
                    flexGrow: 0,
                    alignItems: _.c.Center,
                    margin: {
                        left: 3
                    }
                }, this.renderNextButton())) : this.renderPlaceholders()
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t.prototype.renderCards = function() {
                var e = this.props.data.featuredStreams;
                this.carouselItems = Object(b.a)(e), this.displayTracked || (Object(k.a)(this.carouselItems), this.displayTracked = !0);
                for (var t = [], n = 0; n < C(this.carouselItems.length); n++) {
                    var a = this.carouselItems[(n + this.state.currentIndex) % E(this.carouselItems.length)],
                        r = n;
                    if (3 === this.carouselItems.length || 4 === this.carouselItems.length ? r += 1 : 2 !== this.carouselItems.length && 1 !== this.carouselItems.length || (r += 2), 2 === r) {
                        var s = (n + this.state.currentIndex) % E(this.carouselItems.length);
                        s !== this.activeIndex && (this.activeIndex = s, this.trackPromotionView(a));
                        var l = {
                            type: a.content.type,
                            id: a.content.id,
                            showChannelInfoOnHover: !0
                        };
                        t.push(o.createElement(_._8, {
                            key: "carousel-" + n,
                            flexGrow: 0,
                            "data-test-selector": i.VideoCard
                        }, o.createElement(_._8, {
                            className: "logged-in-featured-content__item logged-in-featured-content__item--video",
                            overflow: _._11.Hidden
                        }, Object(b.c)(l))))
                    } else {
                        var d = 0 === r || 4 === r ? "logged-in-featured-content__item logged-in-featured-content__item--410" : "logged-in-featured-content__item logged-in-featured-content__item--480",
                            c = a.content.previewImageURL || "",
                            u = a.imageURL || "";
                        t.push(o.createElement(_._8, {
                            key: "carousel-" + n,
                            display: _.R.Flex,
                            flexShrink: 1,
                            overflow: _._11.Hidden,
                            alignItems: _.c.Center
                        }, o.createElement("button", {
                            className: "logged-in-featured-content__featured-button",
                            onClick: this.onClickCard(n, a),
                            "data-test-selector": i.CarouselCard
                        }, o.createElement(_._8, {
                            display: _.R.Flex,
                            className: "logged-in-featured-content__contain logged-in-featured-content__contain--pos-" + r
                        }, o.createElement(_._8, {
                            className: "logged-in-featured-content__thumb"
                        }, o.createElement(_.N, {
                            className: "logged-in-featured-content__thumb--img",
                            src: u,
                            alt: a.broadcaster.displayName
                        })), o.createElement(_._8, {
                            className: d,
                            flexShrink: 0
                        }, o.createElement(_.N, {
                            className: "logged-in-featured-content__item--img",
                            src: c,
                            alt: a.broadcaster.displayName
                        }))))))
                    }
                }
                return t
            }, t.prototype.renderPlaceholders = function() {
                return o.createElement(_._8, {
                    display: _.R.Flex,
                    className: "logged-in-featured-content",
                    "data-test-selector": i.Placeholder
                }, o.createElement(_._8, {
                    display: _.R.Flex,
                    flexGrow: 0,
                    alignItems: _.c.Center,
                    margin: {
                        right: 3
                    }
                }, o.createElement(_._8, {
                    className: "logged-in-featured-content__button",
                    display: _.R.Flex,
                    alignItems: _.c.Center,
                    justifyContent: _._7.Center
                })), o.createElement(_._8, {
                    className: "logged-in-featured-content__contain logged-in-featured-content__contain--pos-0",
                    display: _.R.Flex,
                    flexShrink: 1,
                    overflow: _._11.Hidden,
                    alignItems: _.c.Center
                }, o.createElement(_._8, {
                    className: "logged-in-featured-content__item logged-in-featured-content__item--410",
                    key: "carousel-0",
                    flexShrink: 0
                }, o.createElement(_._14, {
                    width: 410,
                    height: 230
                }))), o.createElement(_._8, {
                    className: "logged-in-featured-content__contain logged-in-featured-content__contain--pos-1",
                    display: _.R.Flex,
                    flexShrink: 1,
                    overflow: _._11.Hidden,
                    alignItems: _.c.Center
                }, o.createElement(_._8, {
                    className: "logged-in-featured-content__item logged-in-featured-content__item--480",
                    flexShrink: 0
                }, o.createElement(_._14, {
                    width: 480,
                    height: 270
                }))), o.createElement(_._8, {
                    flexGrow: 0
                }, o.createElement(_._8, {
                    className: "logged-in-featured-content__item logged-in-featured-content__item--video"
                }, o.createElement(_._14, {
                    width: 550,
                    height: 310
                }))), o.createElement(_._8, {
                    className: "logged-in-featured-content__contain logged-in-featured-content__contain--pos-3",
                    display: _.R.Flex,
                    flexShrink: 1,
                    overflow: _._11.Hidden,
                    alignItems: _.c.Center
                }, o.createElement(_._8, {
                    className: "logged-in-featured-content__item logged-in-featured-content__item--480",
                    flexShrink: 0
                }, o.createElement(_._14, {
                    width: 480,
                    height: 270
                }))), o.createElement(_._8, {
                    className: "logged-in-featured-content__contain logged-in-featured-content__contain--pos-4",
                    display: _.R.Flex,
                    flexShrink: 1,
                    overflow: _._11.Hidden,
                    alignItems: _.c.Center
                }, o.createElement(_._8, {
                    className: "logged-in-featured-content__item logged-in-featured-content__item--410",
                    flexShrink: 0
                }, o.createElement(_._14, {
                    width: 410,
                    height: 230
                }))), o.createElement(_._8, {
                    display: _.R.Flex,
                    flexGrow: 0,
                    alignItems: _.c.Center,
                    margin: {
                        left: 3
                    }
                }, o.createElement(_._8, {
                    className: "logged-in-featured-content__button",
                    display: _.R.Flex,
                    alignItems: _.c.Center,
                    justifyContent: _._7.Center
                })))
            }, t.prototype.renderPreviousButton = function() {
                return o.createElement(_.O, {
                    onClick: this.onPreviousButtonClicked,
                    "data-test-selector": i.PreviousButton
                }, o.createElement(_._8, {
                    className: "logged-in-featured-content__button",
                    display: _.R.Flex,
                    alignItems: _.c.Center,
                    justifyContent: _._7.Center
                }, o.createElement(_._24, {
                    asset: _._25.AngleLeft,
                    width: 24,
                    height: 24
                })))
            }, t.prototype.renderNextButton = function() {
                return o.createElement(_.O, {
                    onClick: this.onNextButtonClicked,
                    "data-test-selector": i.NextButton
                }, o.createElement(_._8, {
                    className: "logged-in-featured-content__button",
                    display: _.R.Flex,
                    alignItems: _.c.Center,
                    justifyContent: _._7.Center
                }, o.createElement(_._24, {
                    asset: _._25.AngleRight,
                    width: 24,
                    height: 24
                })))
            }, t
        }(o.Component);

        function C(e) {
            var t = 5;
            return 3 !== e && 4 !== e || (t = 3), 1 !== e && 2 !== e || (t = 1), t
        }

        function E(e) {
            var t = e;
            return 3 !== e && 4 !== e || (t = 3), 1 !== e && 2 !== e || (t = 1), t
        }
        var N = Object(f.d)(Object(c.a)(S, {
                options: function() {
                    return {
                        variables: {
                            language: l.o.intl.getLanguageCode(),
                            first: 8
                        }
                    }
                }
            }), Object(y.d)("LoggedInCarousel"))(w),
            T = n("S4HN"),
            O = function(e) {
                Object(T.g)({
                    source: e
                }), window.location.assign("/hi" + location.search)
            },
            I = "twilight_onboarding-prompt_dismissed",
            F = {
                domain: window.location.hostname.endsWith(".twitch.tv") ? ".twitch.tv" : void 0,
                secure: "https:" === window.location.protocol
            },
            L = a.__assign({}, F, {
                expires: 365
            }),
            R = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.startOnboarding = function() {
                        O(T.b.HomepageCTA)
                    }, n.dismissOnboardingPrompt = function() {
                        Object(T.f)(), r.set(I, "true", L), n.setState({
                            isOnboardingDismissedCookieSet: !0
                        })
                    }, n.state = {
                        isOnboardingDismissedCookieSet: void 0 !== r.get(I)
                    }, n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.state.isOnboardingDismissedCookieSet ? null : o.createElement(_._35, {
                        "data-test-selector": "onboarding-prompt",
                        background: _.n.Base,
                        display: _.R.Flex,
                        flexDirection: _.T.Row,
                        margin: {
                            bottom: 1
                        },
                        elevation: 3,
                        borderMarked: !0
                    }, o.createElement(_._8, {
                        display: _.R.Flex,
                        flexDirection: _.T.Column,
                        flexWrap: _.U.NoWrap,
                        textAlign: _._45.Left,
                        padding: 1,
                        fullWidth: !0
                    }, o.createElement(_.Q, {
                        type: _._49.H5,
                        color: _.K.Base,
                        bold: !0
                    }, Object(l.d)("Welcome to your homepage, {displayName}!", {
                        displayName: this.props.displayName || ""
                    }, "OnboardingPrompt")), o.createElement(_._8, {
                        margin: {
                            y: 1
                        }
                    }, o.createElement(_.Q, null, Object(l.d)("Here you can find your Pulse Feed and popular content on Twitch. Take a moment to personalize this page to your interests.", "OnboardingPrompt"))), o.createElement(_._8, {
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(_.v, {
                        "data-test-selector": "onboarding-prompt__start",
                        onClick: this.startOnboarding
                    }, Object(l.d)("Start", "OnboardingPrompt")))), o.createElement(_._8, {
                        flexShrink: 0,
                        margin: {
                            top: .5
                        }
                    }, o.createElement(_.w, {
                        "data-test-selector": "onboarding-prompt__dismiss",
                        ariaLabel: Object(l.d)("dismiss onboarding", "OnboardingPrompt"),
                        type: _.y.Default,
                        icon: _._25.Close,
                        onClick: this.dismissOnboardingPrompt
                    })))
                }, t = a.__decorate([Object(y.d)("OnboardingPrompt", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component),
            x = n("eXld"),
            D = n("2aoH"),
            P = n("8PKe"),
            A = n("yWCw"),
            V = n("F8kA"),
            j = n("NY9D"),
            M = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = o.createElement(_._8, {
                            padding: 1
                        }, o.createElement(_.Q, {
                            fontSize: _.V.Size5,
                            color: _.K.Alt2
                        }, Object(l.d)("{title}", {
                            title: e.title
                        }, "GameListComponent"))),
                        n = o.createElement(_._35, {
                            background: _.n.Alt,
                            padding: 1
                        }, o.createElement(_._2, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: _.R.Block
                        }, o.createElement(V.a, a.__assign({
                            to: e.viewAllLinkTo
                        }, Object(_._63)(e)), Object(l.d)("View All", "GameListComponent")))),
                        i = [];
                    if (e.loading)
                        for (var r = 0; r < e.limit; r++) i.push(o.createElement(_._8, {
                            key: r,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(_.k, {
                            ratio: _.l.Aspect3x4
                        }, o.createElement(_._14, null)), o.createElement(_._8, null, o.createElement(_.Q, null, o.createElement(_._14, {
                            width: 100
                        })), o.createElement(_.Q, null, o.createElement(_._14, {
                            width: 70
                        })))));
                    else e.items && e.items.length > 0 && (i = e.items.map(function(e, t) {
                        if (!e) return null;
                        var n = e.id,
                            i = e.name,
                            a = e.viewersCount,
                            r = e.boxArtURL;
                        return o.createElement(_._8, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(_.u, {
                            linkTo: Object(j.c)(i),
                            title: i,
                            alt: i + " cover image",
                            src: r,
                            info: Object(l.d)("{viewerCount,number} viewers", {
                                viewerCount: a
                            }, "GameListComponent"),
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + i.replace(/ /g, "")
                        }))
                    }));
                    return o.createElement(_._35, {
                        elevation: 1,
                        background: _.n.Base,
                        display: _.R.Hide,
                        breakpointMedium: {
                            display: _.R.Block
                        }
                    }, t, o.createElement(_._8, {
                        padding: {
                            x: 1
                        }
                    }, o.createElement(_._55, {
                        gutterSize: _._57.ExtraSmall,
                        childWidth: _._56.ExtraSmall,
                        placeholderItems: 18
                    }, i)), n)
                }, t = a.__decorate([Object(y.d)("GameList", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component),
            U = n("OkeX");
        var G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e, t, n = [];
                    return this.props.data.error ? o.createElement(A.a, {
                        message: Object(l.d)("Followed Games are unavailable at this time.", "FollowedGamesCompoment")
                    }) : (this.props.data.loading || (e = this.props.data, t = [], (e.currentUser.followedGames && e.currentUser.followedGames.nodes || []).forEach(function(e) {
                        return e && e.id && t.push({
                            id: e.id,
                            name: e.name,
                            viewersCount: e.viewersCount,
                            boxArtURL: e.boxArtURL
                        })
                    }), n = t), this.props.data.loading || n && n.length > 0 ? o.createElement(M, {
                        "data-a-target": "view-all-followed-games-link",
                        items: n,
                        limit: 18,
                        loading: this.props.data.loading,
                        title: Object(l.d)("Followed Games", "FollowedGamesCompoment"),
                        viewAllLinkTo: "/directory/following/games"
                    }) : null)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(c.a)(U, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    }
                }), Object(y.d)("FollowedGames")], t)
            }(o.Component),
            B = n("RH2O"),
            H = n("o5l+"),
            q = n("zCIC"),
            W = n("HM6l"),
            z = n("86JD");
        var Q = Object(B.b)(function(e) {
                return {
                    displayName: e.session.user && e.session.user.displayName
                }
            })(R),
            K = n("oIkB"),
            Y = n("VFqp"),
            $ = n("cYgC"),
            X = n("ojlS"),
            J = n("C/8M"),
            Z = n("EImC"),
            ee = function(e) {
                for (var t = e.cardCount, n = [], i = 0; i < t; i++) 1 === i ? n.push(o.createElement(Z.b, {
                    key: i
                })) : n.push(o.createElement(Z.a, {
                    key: i
                }));
                return o.createElement(_._8, null, n)
            },
            te = n("/0cZ"),
            ne = Object(J.d)(function() {
                return {
                    feed_type: "rec"
                }
            })($.a),
            ie = {
                limit: 5
            },
            ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCreatePost = function(e, n, i) {
                        return void 0 === i && (i = !1), t.props.createPost(e, n, i)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? o.createElement(ee, {
                        cardCount: 5
                    }) : this.props.data.error ? (this.props.onDataError && this.props.onDataError(), o.createElement(_._8, {
                        margin: {
                            top: 3
                        }
                    }, o.createElement(A.a, {
                        message: Object(l.d)("Error loading data.", "PulseComponent")
                    }), ";")) : o.createElement(_._8, null, o.createElement(Y.a, {
                        placeholder: Object(l.d)("Share a clip or video with your followers by adding links from Twitch, Vimeo, and YouTube.", "PulseComposer"),
                        onCreate: this.onCreatePost,
                        isConnectedToTwitter: this.props.data.currentUser.isConnectedToTwitter,
                        userID: this.props.data.currentUser.id,
                        composerLocation: Y.b.HomePage
                    }), o.createElement(ne, {
                        items: this.props.data.currentUser.pulseFeed.items || []
                    }), o.createElement(q.a, {
                        enabled: !this.props.data.loading && !this.props.data.error,
                        loadMore: this.props.loadMore,
                        contentLength: this.props.data.currentUser.pulseFeed.items.edges.length,
                        pixelThreshold: 100
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(c.a)(te, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: ie
                    },
                    props: function(e) {
                        return a.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data.currentUser.pulseFeed.items.edges;
                                return e.data.fetchMore({
                                    query: te,
                                    variables: {
                                        limit: 5,
                                        cursor: t[t.length - 1].cursor
                                    },
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            currentUser: a.__assign({}, n.currentUser, {
                                                pulseFeed: a.__assign({}, n.currentUser.pulseFeed, {
                                                    items: a.__assign({}, n.currentUser.pulseFeed.items, {
                                                        edges: e.currentUser.pulseFeed.items.edges.concat(n.currentUser.pulseFeed.items.edges)
                                                    })
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(c.a)(X, {
                    props: function(e) {
                        return {
                            createPost: function(t, n, i) {
                                return e.mutate(a.__assign({}, Object(K.a)({
                                    channelID: e.ownProps.data.currentUser.id,
                                    body: t,
                                    embedURLs: n.map(function(e) {
                                        return e.sourceURL
                                    }),
                                    postToTwitter: i
                                }), {
                                    optimisticResponse: {
                                        createPost: {
                                            post: {
                                                id: "" + +new Date,
                                                createdAt: (new Date).toISOString(),
                                                body: {
                                                    content: t,
                                                    emotes: [],
                                                    __typename: "MessageBody"
                                                },
                                                author: e.ownProps.data.currentUser,
                                                embeds: n.map(function(e) {
                                                    return e.embed
                                                }),
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
                                            query: te,
                                            variables: ie
                                        });
                                        n && (n.currentUser.pulseFeed.items.edges = [{
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
                                            query: te,
                                            data: n,
                                            variables: ie
                                        }))
                                    }
                                }))
                            }
                        }
                    }
                }), Object(y.d)("Pulse")], t)
            }(o.Component),
            re = n("L46p");
        var oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e, t, n = [];
                    return this.props.data.error ? o.createElement(A.a, {
                        message: Object(l.d)("Top Games are unavailable at this time.", "TopGamesCompoment")
                    }) : (this.props.data.loading || (e = this.props.data, t = [], e.games.edges.map(function(e) {
                        var n = e.node;
                        return n && n.id && t.push({
                            id: n.id,
                            name: n.name,
                            viewersCount: n.viewersCount,
                            boxArtURL: n.boxArtURL
                        })
                    }), n = t), o.createElement(M, {
                        title: Object(l.d)("Top Games", "TopGamesCompoment"),
                        items: n,
                        loading: this.props.data.loading,
                        limit: 18,
                        viewAllLinkTo: "/directory",
                        "data-a-target": "view-all-link"
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(c.a)(re, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: e.count || 18
                            }
                        }
                    }
                }), Object(y.d)("TopGames")], t)
            }(o.Component),
            se = n("DBTH"),
            le = function(e, t) {
                var n = l.o.experiments.getAssignment(se.j);
                return !r.get(I) && Object(se.p)(n) && e < 3 && Object(se.q)(new Date(t))
            },
            de = n("Hjo/"),
            ce = n("PY9L"),
            ue = (n("jPY3"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0,
                        pulseDataError: !1
                    }, t.logger = l.o.logger.withCategory("front-page"), t.recQueryFired = !1, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(h.b.front).length && p.a.display(h.b.front.leaderboard), {
                                numSlotsAdded: t
                            }
                        })
                    }, t.onPulseDataError = function() {
                        t.setState({
                            pulseDataError: !0
                        })
                    }, t.fireRecommendationsQuery = function(e) {
                        if (!t.recQueryFired && e.firstPageLoaded && "experiment" === l.o.experiments.getAssignment("TWILIGHT_NEW_HOMEPAGE")) {
                            t.recQueryFired = !0;
                            var n = Object(W.b)().substring(0, 16);
                            l.o.apollo.client.query({
                                query: de,
                                fetchPolicy: "network-only",
                                variables: {
                                    requestID: n,
                                    platform: "all",
                                    itemsPerRow: 12
                                }
                            }).then(function(e) {
                                var t = e.data;
                                t.currentUser && t.currentUser.login && l.o.tracking.track(g.SpadeEventType.RecRequestClient, {
                                    login: t.currentUser.login,
                                    request_id: n,
                                    endpoint: "recs_live",
                                    section: "twitch_home"
                                })
                            }).catch(function(e) {
                                t.logger.error(e, "Unable to query recommendation data")
                            })
                        }
                    }, t.shouldShowOnboarding = function() {
                        return t.followedGamesForUserHasLoaded() && le(t.props.data.currentUser.followedGames.nodes.length, t.props.data.currentUser.createdAt)
                    }, t.followedGamesForUserHasLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.currentUser && t.props.data.currentUser.followedGames
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    h.g.addListener(h.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender(), l.o.setPageTitle(), this.fireRecommendationsQuery(this.props), this.props.data.loading || !this.shouldShowOnboarding() || r.get("twilight_onboarding") || (r.set("twilight_onboarding", "true", L), O(T.b.NewSignup))
                }, t.prototype.componentDidUpdate = function(e) {
                    !this.props.data.loading && e.data.loading && this.shouldShowOnboarding() && !r.get("twilight_onboarding") && (r.set("twilight_onboarding", "true", L), O(T.b.NewSignup))
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.fireRecommendationsQuery(e)
                }, t.prototype.render = function() {
                    return o.createElement(_._8, {
                        fullHeight: !0
                    }, o.createElement(x.b, {
                        suppressScrollX: !0,
                        disableDebounce: !0
                    }), o.createElement(D.a, null, o.createElement(P.a, null)), o.createElement(_._8, {
                        padding: 3
                    }, o.createElement(v.a, {
                        adSize: h.c.front.leaderboard,
                        adUnit: h.d.frontpage,
                        "data-a-target": "frontpage-leaderboard-ad-slot",
                        slotID: h.b.front.leaderboard,
                        targeting: {
                            pagetype: h.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginBottom: "2rem"
                        },
                        autoEnable: !1
                    }), o.createElement(_._8, {
                        className: "front-page",
                        display: _.R.Flex,
                        flexDirection: _.T.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: _.T.Row
                        },
                        flexWrap: _.U.NoWrap,
                        margin: {
                            x: "auto"
                        }
                    }, o.createElement(_._8, {
                        className: "front-page__main-col",
                        flexGrow: 0,
                        flexShrink: 0
                    }, !this.props.data.loading && this.shouldShowOnboarding() && o.createElement(Q, null), o.createElement(ae, {
                        onDataError: this.onPulseDataError
                    })), o.createElement(_._8, {
                        flexGrow: 1,
                        breakpointMedium: {
                            padding: {
                                left: 2
                            }
                        }
                    }, o.createElement(q.c, {
                        bottomPixelThreshold: 20,
                        disableStickinessBelowWidth: 1127,
                        disableStickiness: this.state.pulseDataError
                    }, o.createElement(_._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(z.b, {
                        renderContext: z.a.Front
                    })), o.createElement(_._8, {
                        display: _.R.Hide,
                        breakpointMedium: {
                            display: _.R.Block
                        }
                    }, o.createElement(v.a, {
                        adSize: h.c.front.rightTop,
                        adUnit: h.d.frontpage,
                        "data-a-target": "frontpage-right-top-ad-slot",
                        slotID: h.b.front.rightTop,
                        targeting: {
                            pagetype: h.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginBottom: "1rem"
                        },
                        autoEnable: !1
                    })), o.createElement(_._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(G, null)), o.createElement(H.a, null, o.createElement(oe, null)), o.createElement(_._8, {
                        display: _.R.Hide,
                        breakpointMedium: {
                            display: _.R.Block
                        }
                    }, o.createElement(v.a, {
                        adSize: h.c.front.rightBottom,
                        adUnit: h.d.frontpage,
                        "data-a-target": "frontpage-right-bottom-ad-slot",
                        slotID: h.b.front.rightBottom,
                        targeting: {
                            pagetype: h.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1rem"
                        },
                        autoEnable: !1
                    })))))))
                }, t.prototype.componentWillUnmount = function() {
                    h.g.removeListener(h.e, this.onSlotAdded)
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(y.d)("FrontPage", {
                    destination: m.a.Index
                }), Object(u.a)({
                    location: g.PageviewLocation.FrontPage
                }), Object(c.a)(ce, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    }
                })], t)
            }(o.Component));
        var me, pe = Object(B.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(ue),
            ge = n("DtWM"),
            ve = n("peXu");
        ! function(e) {
            e.GreatNewClipsYouMayHaveMissed = "GreatNewClipsYouMayHaveMissed", e.PopularClips = "PopularClips", e.PopularVideos = "PopularVideos", e.RecommendedBecauseYouWatchX = "RecommendedBecauseYouWatchX", e.RecommendedBecauseYouFollowX = "RecommendedBecauseYouFollowX", e.TopChannelsPlayingGame = "TopChannelsPlayingGame", e.TopGames = "TopGames", e.TopGamesForYou = "TopGamesForYou", e.TopLiveChannels = "TopLiveChannels", e.TopLiveChannelsYouMayLike = "TopLiveChannelsYouMayLike", e.TopNewVideosYouMayHaveMissed = "TopNewVideosYouMayHaveMissed"
        }(me || (me = {}));
        var he, fe, ke, be, ye, _e = function() {
            return Object(W.b)().substring(0, 16)
        };
        ! function(e) {
            e.TwitchHome = "twitch_home"
        }(he || (he = {})),
        function(e) {
            e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
        }(fe || (fe = {})),
        function(e) {
            e.Followed = "followed", e.Watched = "watched", e.Popularity = "popularity", e.Personalized = "personalized"
        }(ke || (ke = {})),
        function(e) {
            e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game"
        }(be || (be = {})),
        function(e) {
            e.Live = "recs_live", e.Vod = "recs_vod", e.Clip = "recs_clip"
        }(ye || (ye = {}));
        var Se, we = ((Se = {})[me.TopLiveChannels] = function(e) {
            return {
                reasonType: ke.Popularity,
                reasonTarget: null,
                reasonTargetType: be.Live,
                rowName: e
            }
        }, Se[me.TopGames] = function(e) {
            return {
                reasonType: ke.Popularity,
                reasonTarget: null,
                reasonTargetType: be.Game,
                rowName: e
            }
        }, Se[me.TopChannelsPlayingGame] = function(e, t) {
            return {
                reasonType: ke.Popularity,
                reasonTarget: t.context && t.context.id || null,
                reasonTargetType: be.Game,
                rowName: e
            }
        }, Se[me.TopLiveChannelsYouMayLike] = function(e) {
            return {
                reasonType: ke.Personalized,
                reasonTarget: null,
                reasonTargetType: be.Live,
                rowName: e
            }
        }, Se[me.TopGamesForYou] = function(e) {
            return {
                reasonType: ke.Personalized,
                reasonTarget: null,
                reasonTargetType: be.Game,
                rowName: e
            }
        }, Se[me.RecommendedBecauseYouWatchX] = function(e, t) {
            return {
                reasonType: ke.Watched,
                reasonTarget: t.context && t.context.id || null,
                reasonTargetType: be.Game,
                rowName: e
            }
        }, Se[me.RecommendedBecauseYouFollowX] = function(e, t) {
            return {
                reasonType: ke.Followed,
                reasonTarget: t.context && t.context.id || null,
                reasonTargetType: null,
                rowName: e
            }
        }, Se[me.GreatNewClipsYouMayHaveMissed] = function(e) {
            return {
                reasonType: ke.Popularity,
                reasonTarget: null,
                reasonTargetType: be.Clip,
                rowName: e
            }
        }, Se[me.TopNewVideosYouMayHaveMissed] = function(e) {
            return {
                reasonType: ke.Popularity,
                reasonTarget: null,
                reasonTargetType: be.Vod,
                rowName: e
            }
        }, Se);

        function Ce(e) {
            var t = e.key;
            return we[t] ? we[t](t, e) : {
                reasonType: null,
                reasonTarget: "",
                reasonTargetType: null,
                rowName: t
            }
        }

        function Ee(e) {
            var t, n, i, a = e.contentEdge.node && e.contentEdge.node.id || "";
            switch (e.contentEdge.node && e.contentEdge.node.__typename) {
                case "Stream":
                    n = (t = e.contentEdge.node).broadcaster && t.broadcaster.id, i = fe.Live, a = String(t.broadcaster && t.broadcaster.id);
                    break;
                case "Clip":
                    n = (t = e.contentEdge.node).broadcaster && t.broadcaster.id, i = fe.Clip;
                    break;
                case "Video":
                    n = (t = e.contentEdge.node).owner && t.owner.id, i = fe.Vod;
                    break;
                case "Game":
                    t = e.contentEdge.node, n = null, i = fe.Game;
                    break;
                default:
                    n = null, i = null
            }
            return {
                client_time: Date.now(),
                request_id: e.requestID,
                section: he.TwitchHome,
                tracking_id: e.contentEdge.trackingID,
                item_id: a,
                channel_id: null === n ? null : Number(n),
                position: e.position,
                row_position: e.rowPosition,
                content_type: i,
                reason_type: e.reasonType,
                reason_target: e.reasonTarget,
                reason_target_type: e.reasonTargetType,
                row_name: e.rowName
            }
        }
        var Ne = n("KSGD");
        var Te = n("81qH"),
            Oe = n("LIeg");
        var Ie = n("V5M+"),
            Fe = n("1qqv"),
            Le = function(e) {
                return a.__assign({}, e, {
                    title: e.clipTitle,
                    viewCount: e.clipViewCount,
                    createdAt: e.clipCreatedAt
                })
            },
            Re = n("vKFS"),
            xe = n("2o2f"),
            De = n("9Fb+"),
            Pe = n("5kgt"),
            Ae = function(e) {
                return o.createElement("div", a.__assign({}, Object(Pe.a)(e)), o.createElement(_.C, {
                    key: e.title
                }, o.createElement(_.O, {
                    onClick: e.boxArtOnClick,
                    to: e.boxArtLinkTo,
                    "data-test-selector": "box-art-link-selector"
                }, o.createElement(_.E, {
                    alt: e.alt,
                    aspect: _.l.BoxArt,
                    src: e.src
                })), o.createElement(_.D, null, o.createElement(_._8, {
                    margin: {
                        top: .5
                    }
                }, o.createElement(_.O, {
                    onClick: e.titleOnClick,
                    to: e.titleLinkTo,
                    type: _.P.Inherit,
                    "data-test-selector": "title-link-selector"
                }, o.createElement(_.Q, {
                    type: _._49.H3,
                    fontSize: _.V.Size5,
                    lineHeight: _._9.Body,
                    ellipsis: !0
                }, e.title)), o.createElement(_.Q, {
                    color: _.K.Alt2,
                    ellipsis: !0
                }, e.info)))))
            },
            Ve = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.typeToPropMappings = {
                        Clip: t.getShelfCardClipProps.bind(t),
                        Game: t.getShelfCardGameProps.bind(t),
                        Stream: t.getShelfCardStreamProps.bind(t),
                        Video: t.getShelfCardVideoProps.bind(t)
                    }, t.getShelfCardProps = function(e, n) {
                        return e.node && t.typeToPropMappings[e.node.__typename] ? t.typeToPropMappings[e.node.__typename](e, n) : null
                    }, t.trackImpression = function() {
                        t.props.trackImpression(t.props.shelf, t.props.contentEdge, t.props.position)
                    }, t.trackClick = function() {
                        t.props.trackClick(t.props.shelf, t.props.contentEdge, t.props.position)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                }, t.prototype.render = function() {
                    var e = this.getShelfCardProps(this.props.contentEdge, this.props.position);
                    if (!e || !this.props.contentEdge.node) return null;
                    var t = this.isShelfGameBoxArtCardProps(e) ? o.createElement(Ae, a.__assign({
                        "data-a-target": "card-" + this.props.position
                    }, e)) : o.createElement(Re.a, a.__assign({}, e));
                    return o.createElement(_._8, {
                        key: this.props.contentEdge.node.id,
                        padding: {
                            bottom: 2
                        },
                        "data-test-selector": "shelf-card-selector"
                    }, t)
                }, t.prototype.isShelfGameBoxArtCardProps = function(e) {
                    return void 0 !== e.boxArtLinkTo
                }, t.prototype.getShelfCardStreamProps = function(e) {
                    var t = e.node,
                        n = this.props.shelf.title.key !== me.RecommendedBecauseYouWatchX ? {
                            gameTitle: t.game && t.game.displayName || void 0,
                            gameTitleLinkTo: {
                                pathname: t.game ? Object(j.c)(t.game.name) : void 0,
                                state: {
                                    content: g.PageviewContent.ShelfGameMetadata,
                                    medium: g.PageviewMedium.TwitchHome
                                }
                            },
                            gameTitleOnClick: this.trackClick
                        } : {};
                    return a.__assign({
                        context: Re.b.MixedGameAndChannelList,
                        title: t.broadcaster && t.broadcaster.broadcastSettings && t.broadcaster.broadcastSettings.title,
                        linkTo: t.broadcaster && t.broadcaster.login && {
                            pathname: t.broadcaster.login,
                            state: {
                                content: g.PageviewContent.ShelfVideoTitle,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        } || void 0,
                        videoTitleLinkTo: t.broadcaster && t.broadcaster.login ? {
                            pathname: t.broadcaster.login,
                            state: {
                                content: g.PageviewContent.ShelfVideoTitle,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        } : void 0,
                        thumbnailLinkTo: t.broadcaster && t.broadcaster.login ? {
                            pathname: t.broadcaster.login,
                            state: {
                                content: g.PageviewContent.ShelfVideoThumbnail,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        } : void 0,
                        onClick: this.trackClick,
                        thumbnailImageProps: t.previewImageURL && t.broadcaster && t.broadcaster.broadcastSettings && t.broadcaster.broadcastSettings.title ? {
                            src: t.previewImageURL,
                            alt: t.broadcaster.broadcastSettings.title
                        } : void 0,
                        channelImageProps: t.broadcaster && t.broadcaster.profileImageURL && t.broadcaster.displayName ? {
                            src: t.broadcaster && t.broadcaster.profileImageURL,
                            alt: t.broadcaster && t.broadcaster.displayName
                        } : void 0,
                        channelLogin: t.broadcaster && t.broadcaster.login,
                        channelLoginLinkTo: t.broadcaster ? {
                            pathname: t.broadcaster.login + "/videos",
                            state: {
                                content: g.PageviewContent.ShelfChannelMetadata,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        } : void 0,
                        channelImageLinkTo: t.broadcaster ? {
                            pathname: t.broadcaster.login + "/videos",
                            state: {
                                content: g.PageviewContent.ShelfUserThumbnail,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        } : void 0,
                        channelLoginOnClick: this.trackClick,
                        streamType: function(e) {
                            switch (e) {
                                case xe.a.Live:
                                    return xe.a.Live;
                                case xe.a.Premiere:
                                    return xe.a.Premiere;
                                case xe.a.Rerun:
                                    return xe.a.Rerun;
                                case xe.a.WatchParty:
                                    return xe.a.WatchParty;
                                default:
                                    return null
                            }
                        }(t.type) || xe.a.Live,
                        currentViewerCount: t.viewersCount || 0
                    }, n)
                }, t.prototype.getShelfCardClipProps = function(e, t) {
                    var n = this,
                        i = e.node;
                    return {
                        context: Re.b.MixedGameAndChannelList,
                        title: i.clipTitle,
                        linkTo: i.embedURL,
                        onClick: function(e) {
                            if (n.trackClick(), e.preventDefault(), n.props.shelf.content && n.props.shelf.content.edges) {
                                var a = n.props.shelf.content.edges.map(function(e) {
                                    return e.node
                                });
                                n.props.showClipsModal(i, t, n.props.shelf.content.edges, function() {
                                    return a
                                })
                            }
                        },
                        thumbnailImageProps: {
                            src: i.thumbnailURL,
                            alt: i.clipTitle
                        },
                        channelImageProps: i.broadcaster && i.broadcaster.profileImageURL && i.broadcaster.displayName ? {
                            src: i.broadcaster && i.broadcaster.profileImageURL,
                            alt: i.broadcaster && i.broadcaster.displayName
                        } : void 0,
                        channelLogin: i.broadcaster && i.broadcaster.login,
                        channelLoginLinkTo: i.broadcaster ? {
                            pathname: i.broadcaster.login + "/videos",
                            state: {
                                content: g.PageviewContent.ShelfChannelMetadata,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        } : void 0,
                        channelImageLinkTo: i.broadcaster ? {
                            pathname: i.broadcaster.login + "/videos",
                            state: {
                                content: g.PageviewContent.ShelfUserThumbnail,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        } : void 0,
                        channelLoginOnClick: this.trackClick,
                        datePublished: i.clipCreatedAt,
                        viewCount: i.clipViewCount,
                        durationInSeconds: i.durationSeconds,
                        clipCreatedByChannelLogin: i.curator && i.curator.login,
                        gameTitle: i.game && i.game.displayName || void 0,
                        gameTitleLinkTo: {
                            pathname: i.game && Object(j.c)(i.game.name) || void 0,
                            state: {
                                content: g.PageviewContent.ShelfGameMetadata,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        },
                        gameTitleOnClick: this.trackClick
                    }
                }, t.prototype.getShelfCardVideoProps = function(e) {
                    var t = e.node;
                    return {
                        context: Re.b.MixedGameAndChannelList,
                        title: t.title,
                        linkTo: {
                            pathname: "/videos/" + t.id,
                            state: {
                                content: g.PageviewContent.ShelfVideoTitle,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        },
                        videoTitleLinkTo: t.owner && {
                            pathname: "/videos/" + t.id,
                            state: {
                                content: g.PageviewContent.ShelfVideoTitle,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        },
                        thumbnailLinkTo: t.owner && {
                            pathname: "/videos/" + t.id,
                            state: {
                                content: g.PageviewContent.ShelfVideoThumbnail,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        },
                        onClick: this.trackClick,
                        thumbnailImageProps: t.title && t.previewThumbnailURL && {
                            src: t.previewThumbnailURL,
                            alt: t.title
                        },
                        channelImageProps: t.owner && t.owner.profileImageURL && t.owner.profileImageURL && {
                            src: t.owner && t.owner.profileImageURL,
                            alt: t.owner && t.owner.displayName
                        },
                        channelLogin: t.owner && t.owner.login,
                        channelLoginLinkTo: t.owner && {
                            pathname: t.owner.login + "/videos",
                            state: {
                                content: g.PageviewContent.ShelfChannelMetadata,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        },
                        channelImageLinkTo: t.owner && {
                            pathname: t.owner.login + "/videos",
                            state: {
                                content: g.PageviewContent.ShelfUserThumbnail,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        },
                        channelLoginOnClick: this.trackClick,
                        datePublished: t.publishedAt,
                        viewCount: t.viewCount,
                        durationInSeconds: t.lengthSeconds,
                        watchedProgressPercent: 0,
                        gameTitle: t.game && t.game.displayName,
                        gameTitleLinkTo: {
                            pathname: t.game && Object(j.c)(t.game.name) || void 0,
                            state: {
                                content: g.PageviewContent.ShelfGameMetadata,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        },
                        gameTitleOnClick: this.trackClick
                    }
                }, t.prototype.getShelfCardGameProps = function(e, t) {
                    var n = e.node,
                        i = {
                            pathname: Object(j.c)(n.name),
                            state: {
                                content: g.PageviewContent.ShelfGameBoxart,
                                content_index: t,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        },
                        a = {
                            pathname: Object(j.c)(n.name),
                            state: {
                                content: g.PageviewContent.ShelfGameMetadata,
                                content_index: t,
                                medium: g.PageviewMedium.TwitchHome
                            }
                        };
                    return {
                        boxArtLinkTo: i,
                        boxArtOnClick: this.trackClick,
                        titleLinkTo: a,
                        titleOnClick: this.trackClick,
                        title: n.displayName,
                        alt: Object(l.d)("{displayName} cover image", {
                            displayName: n.displayName
                        }, "ShelfComponent"),
                        src: n.boxArtURL || "",
                        info: Object(l.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                            viewerCount: n.viewersCount || 0
                        }, "ShelfComponent")
                    }
                }, t
            }(o.Component),
            je = Object(s.compose)(Object(y.d)("ShelfCardComponent", {
                autoReportInteractive: !0
            }), Object(De.a)("ShelfComponent", {
                percentage: 75
            }), function(e) {
                return function(t) {
                    function n() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return a.__extends(n, t), n.prototype.render = function() {
                        var t = {
                            trackImpression: this.context.trackImpression,
                            trackClick: this.context.trackClick
                        };
                        return o.createElement(e, a.__assign({}, this.props, t))
                    }, n.contextTypes = {
                        trackImpression: Ne.func,
                        trackClick: Ne.func
                    }, n
                }(o.Component)
            })(Ve);
        var Me, Ue = Object(B.b)(null, function(e) {
                return Object(f.b)({
                    showClipsModal: function(e, t, n) {
                        return Object(Ie.d)(Fe.a, {
                            getClips: function() {
                                return n.map(function(e) {
                                    return Le(e.node)
                                })
                            },
                            clip: Le(e),
                            clipIndex: t,
                            pageType: "TopClipsGame"
                        })
                    }
                }, e)
            })(je),
            Ge = (n("yF5J"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getEdges = function(e) {
                        if (e.content && e.content.edges) {
                            var n = t.props.itemsToDisplay;
                            return e.title.key.includes("TopGames") && (n = t.props.itemsToDisplay * ze), e.content.edges.filter(function(e) {
                                return e && e.node && e.node.id
                            }).slice(0, n)
                        }
                        return []
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.getShelfTitle(this.props.shelf.title)) {
                        var e = this.getEdges(this.props.shelf);
                        this.props.latencyTracking.reportInteractive(e.length)
                    } else this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.shelf,
                        t = this.getShelfTitle(e.title);
                    if (!t) return null;
                    var n = 0,
                        i = _._56.Medium,
                        a = [];
                    if (e.content && e.content.edges) {
                        e.title.key.includes("TopGames") && (i = _._56.ExtraSmall);
                        var r = this.getEdges(e),
                            s = Oe(e, function(e) {
                                return e.content.edges || []
                            }, function() {
                                return r
                            });
                        r.forEach(function(e, t) {
                            e && e.node && a.push(o.createElement(Ue, {
                                key: e.node.id,
                                shelf: s,
                                contentEdge: e,
                                position: t
                            }))
                        }), this.props.itemsToDisplay > e.content.edges.length && (n = this.props.itemsToDisplay - e.content.edges.length)
                    }
                    return o.createElement(_._8, {
                        key: e.id
                    }, o.createElement(_._8, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(_.Q, {
                        type: _._49.H4,
                        color: _.K.Alt2
                    }, t)), o.createElement(_._55, {
                        childWidth: i,
                        gutterSize: _._57.Small,
                        noWrap: !0,
                        placeholderItems: n
                    }, a))
                }, t.prototype.getShelfTitle = function(e) {
                    var t, n = ((t = {})[me.TopLiveChannels] = function() {
                        return Object(l.d)("Popular <x:bold>Live Channels</x:bold>", {
                            "x:bold": function(e) {
                                return o.createElement("strong", {
                                    key: e
                                }, e)
                            }
                        }, "ShelfComponent")
                    }, t[me.TopGames] = function() {
                        return Object(l.d)("Popular <x:bold>Games</x:bold>", {
                            "x:bold": function(e) {
                                return o.createElement("strong", {
                                    key: e
                                }, e)
                            }
                        }, "ShelfComponent")
                    }, t[me.PopularVideos] = function() {
                        return Object(l.d)("Popular <x:bold>Videos</x:bold>", {
                            "x:bold": function(e) {
                                return o.createElement("strong", {
                                    key: e
                                }, e)
                            }
                        }, "ShelfComponent")
                    }, t[me.PopularClips] = function() {
                        return Object(l.d)("Popular <x:bold>Clips</x:bold>", {
                            "x:bold": function(e) {
                                return o.createElement("strong", {
                                    key: e
                                }, e)
                            }
                        }, "ShelfComponent")
                    }, t[me.TopChannelsPlayingGame] = function() {
                        return Object(l.d)("Popular <x:bold1>Live Channels</x:bold1> in <x:bold2>{game}</x:bold2>", {
                            game: e.context ? e.context.name : "",
                            "x:bold1": function(e) {
                                return o.createElement("strong", {
                                    key: e
                                }, e)
                            },
                            "x:bold2": function(e) {
                                return o.createElement("strong", {
                                    key: e
                                }, e)
                            }
                        }, "ShelfComponent")
                    }, t[me.TopLiveChannelsYouMayLike] = function() {
                        return Object(l.d)("<x:bold>Live Channels</x:bold> You May Like", {
                            "x:bold": function(e) {
                                return o.createElement("strong", {
                                    key: e
                                }, e)
                            }
                        }, "ShelfComponent")
                    }, t[me.TopGamesForYou] = function() {
                        return Object(l.d)("<x:bold>Games</x:bold> You May Like", {
                            "x:bold": function(e) {
                                return o.createElement("strong", {
                                    key: e
                                }, e)
                            }
                        }, "ShelfComponent")
                    }, t[me.RecommendedBecauseYouWatchX] = function() {
                        return Object(l.d)("You May Like <x:bold>{game}</x:bold>", {
                            game: e.context ? e.context.name : "",
                            "x:bold": function(e) {
                                return o.createElement("strong", {
                                    key: e
                                }, e)
                            }
                        }, "ShelfComponent")
                    }, t[me.RecommendedBecauseYouFollowX] = function() {
                        return Object(l.d)("Because You Follow <x:bold>{name}</x:bold>", {
                            name: e.context ? e.context.name : "",
                            "x:bold": function(e) {
                                return o.createElement("strong", {
                                    key: e
                                }, e)
                            }
                        }, "ShelfComponent")
                    }, t[me.GreatNewClipsYouMayHaveMissed] = function() {
                        return Object(l.d)("<x:bold>Clips</x:bold> You May Like", {
                            "x:bold": function(e) {
                                return o.createElement("strong", {
                                    key: e
                                }, e)
                            }
                        }, "ShelfComponent")
                    }, t[me.TopNewVideosYouMayHaveMissed] = function() {
                        return Object(l.d)("<x:bold>Videos</x:bold> You May Like", {
                            "x:bold": function(e) {
                                return o.createElement("strong", {
                                    key: e
                                }, e)
                            }
                        }, "ShelfComponent")
                    }, t);
                    return n[e.key] ? n[e.key]() : null
                }, t
            }(o.Component)),
            Be = Object(s.compose)(Object(y.d)("ShelfComponent"), function(e) {
                return function(t) {
                    function n(e) {
                        var n = t.call(this, e) || this;
                        return n.getChildContext = function() {
                            return {
                                trackImpression: n.trackImpression,
                                trackClick: n.trackClick
                            }
                        }, n.mapShelfCardsToRequestIDs = function(e, t, n) {
                            return void 0 === n && (n = {}), e.reduce(function(e, n) {
                                return n.node && !e[n.node.id] && (e[n.node.id] = t), e
                            }, n)
                        }, n.trackImpression = function(e, t, i) {
                            if (t.node && !n.state.impressions.has(t.node.id)) {
                                var a = Ce(e.title),
                                    r = a.reasonType,
                                    o = a.reasonTarget,
                                    s = a.reasonTargetType,
                                    d = a.rowName;
                                ! function(e) {
                                    var t = Ee(e);
                                    l.n.track(g.SpadeEventType.ItemDisplay, t)
                                }({
                                    contentEdge: t,
                                    position: i,
                                    reasonType: r,
                                    reasonTarget: o,
                                    reasonTargetType: s,
                                    requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                    rowName: d,
                                    rowPosition: n.props.position
                                }), n.setState(function(e) {
                                    var n = e.impressions;
                                    return n.add(t.node.id), {
                                        impressions: n
                                    }
                                })
                            }
                        }, n.trackClick = function(e, t, i) {
                            if (t.node) {
                                var a = n.state.cardIDtoRequestIDMap,
                                    r = Ce(e.title),
                                    o = r.reasonType,
                                    s = r.reasonTarget,
                                    d = r.reasonTargetType,
                                    c = r.rowName;
                                ! function(e) {
                                    var t = Ee(e);
                                    l.n.track(g.SpadeEventType.ItemClick, t)
                                }({
                                    contentEdge: t,
                                    requestID: a[t.node.id],
                                    position: i,
                                    rowPosition: n.props.position,
                                    reasonType: o,
                                    reasonTarget: s,
                                    reasonTargetType: d,
                                    rowName: c
                                })
                            }
                        }, n.state = {
                            impressions: new Set,
                            cardIDtoRequestIDMap: n.mapShelfCardsToRequestIDs(e.shelf.content.edges || [], e.requestID, {})
                        }, n
                    }
                    return a.__extends(n, t), n.prototype.componentWillReceiveProps = function(e) {
                        var t = this,
                            n = e.shelf,
                            i = e.requestID;
                        n.content.edges !== this.props.shelf.content.edges && this.setState(function(e) {
                            return {
                                cardIDtoRequestIDMap: t.mapShelfCardsToRequestIDs(n.content.edges || [], i, e.cardIDtoRequestIDMap)
                            }
                        })
                    }, n.prototype.render = function() {
                        var t = {
                            trackImpression: this.getChildContext().trackImpression,
                            trackClick: this.getChildContext().trackClick
                        };
                        return o.createElement(e, a.__assign({}, this.props, t))
                    }, n.childContextTypes = {
                        trackImpression: Ne.func,
                        trackClick: Ne.func
                    }, n
                }(o.Component)
            })(Ge);
        ! function(e) {
            e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
        }(Me || (Me = {}));
        var He = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        requestID: t.props.initialRequestID
                    }, t.trackRecRequest = function(e) {
                        ! function(e) {
                            var t = {
                                endpoint: e.endpoint,
                                request_id: e.requestID,
                                section: e.section
                            };
                            l.n.track(g.SpadeEventType.RecRequestClient, t)
                        }({
                            endpoint: ye.Live,
                            requestID: e,
                            section: he.TwitchHome
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackRecRequest(this.state.requestID)
                }, t.prototype.componentDidUpdate = function(e) {
                    if (!this.props.data.loading && this.props.data.shelves && this.props.data.shelves.edges && (this.props.latencyTracking.reportInteractive(this.props.data.shelves.edges.length), e.itemsToDisplay !== this.props.itemsToDisplay)) {
                        for (var t = [], n = 0, i = this.props.data.shelves.edges; n < i.length; n++) {
                            var a = i[n];
                            a && a.node && a.node.content && a.node.content.edges && t.push(a.node.content.edges.length)
                        }
                        if (this.props.itemsToDisplay * ze > Math.min.apply(Math, t)) {
                            var r = _e();
                            this.props.loadMore(r), this.trackRecRequest(r), this.setState({
                                requestID: r
                            })
                        }
                    }
                }, t.prototype.render = function() {
                    var e = this;
                    if (!this.props.data.shelves || !this.props.data.shelves.edges) return this.props.data.loading ? this.renderLoading() : this.props.data.error ? this.renderError() : null;
                    var t = this.props.data.shelves.edges.map(function(t, n) {
                        return o.createElement(Be, {
                            key: t.node.id,
                            shelf: t.node,
                            position: n,
                            itemsToDisplay: e.props.itemsToDisplay,
                            requestID: e.state.requestID
                        })
                    });
                    return t.splice(4, 0, this.renderAds(h.c.newFront.after4thShelf, h.b.newFront.after4thShelf)), t.splice(2, 0, this.renderAds(h.c.newFront.after2ndShelf, h.b.newFront.after2ndShelf)), o.createElement(o.Fragment, null, t)
                }, t.prototype.renderLoading = function() {
                    for (var e = this.props.itemsToDisplay, t = [], n = [], i = 0; i < e; i++) n.push(o.createElement(Te.VideoPreviewCardPlaceholder, {
                        key: "frontpage-thumbnails-placeholder-" + i
                    }));
                    for (i = 0; i < 4; i++) t.push(o.createElement(_._8, {
                        margin: {
                            bottom: 2
                        },
                        key: "frontpage-shelves-placeholder-" + i
                    }, o.createElement(_._8, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(_._14, {
                        height: 25,
                        width: 150
                    })), o.createElement(_._55, {
                        gutterSize: _._57.Small,
                        childWidth: _._56.Medium,
                        placeholderItems: 0
                    }, n)));
                    return o.createElement(o.Fragment, null, t)
                }, t.prototype.renderError = function() {
                    var e = Object(l.d)("Error loading data.", "NewFrontPageComponent");
                    return o.createElement(A.a, {
                        inline: !0,
                        message: e
                    })
                }, t.prototype.renderAds = function(e, t) {
                    return o.createElement(v.a, {
                        adSize: e,
                        adUnit: h.d.frontpage,
                        autoEnable: !1,
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "2rem"
                        },
                        key: t,
                        slotID: t,
                        targeting: {
                            pagetype: h.a.frontpage
                        }
                    })
                }, t
            }(o.Component),
            qe = Object(f.d)(Object(c.a)(de, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            requestID: e.initialRequestID,
                            platform: Me.all,
                            itemsPerRow: e.initialItemsToFetch
                        }
                    }
                },
                props: function(e) {
                    return a.__assign({}, e, {
                        loadMore: function(t) {
                            return e.data.fetchMore({
                                query: de,
                                variables: {
                                    itemsPerRow: e.ownProps.itemsToDisplay * ze,
                                    platform: Me.all,
                                    requestID: t
                                },
                                updateQuery: function(e, t) {
                                    return function(e, t) {
                                        return Oe(e, function(e) {
                                            return e && e.shelves && e.shelves.edges
                                        }, function(e) {
                                            return e && t && t.shelves && t.shelves.edges ? (t.shelves.edges.forEach(function(t) {
                                                for (var n = !1, i = 0; i < e.length; i++)
                                                    if (e[i].node.id === t.node.id) {
                                                        n = !0, e[i] = Oe(e[i], function(e) {
                                                            return e.node.content.edges
                                                        }, function(e) {
                                                            return e && t && t.node && t.node.content && t.node.content.edges ? Object(K.c)(e, t.node.content.edges) : null
                                                        });
                                                        break
                                                    }
                                                n || e.push(t)
                                            }), e) : null
                                        })
                                    }(e, t.fetchMoreResult)
                                }
                            })
                        }
                    })
                }
            }), Object(y.d)("RecommendedContent"))(He),
            We = 2,
            ze = 2,
            Qe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        initialItemsToFetch: 0,
                        itemsToDisplay: 0
                    }, t.onResize = function(e) {
                        var n = Object(ve.a)(e, 240, 1),
                            i = Math.max(We, n);
                        t.state.initialRequestID ? i !== t.state.itemsToDisplay && t.setState({
                            itemsToDisplay: i
                        }) : t.setState({
                            initialItemsToFetch: i * ze,
                            initialRequestID: _e(),
                            itemsToDisplay: i
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.state.initialItemsToFetch > 0 && this.state.initialRequestID ? o.createElement(qe, {
                        itemsToDisplay: this.state.itemsToDisplay,
                        initialItemsToFetch: this.state.initialItemsToFetch,
                        initialRequestID: this.state.initialRequestID
                    }) : null;
                    return o.createElement(o.Fragment, null, e, o.createElement(ge.a, {
                        onResize: this.onResize
                    }))
                }, t
            }(o.Component),
            Ke = (n("+2of"), "showFrontPageWelcomeMessage"),
            Ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showWelcomeMessage: !0
                    }, t.onClickHideMessage = function() {
                        t.setState({
                            showWelcomeMessage: !1
                        }), l.l.set(Ke, !1)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setState({
                        showWelcomeMessage: l.l.get(Ke, !0)
                    })
                }, t.prototype.render = function() {
                    if (!this.state.showWelcomeMessage) return null;
                    var e = Object(l.d)("Welcome to your new front page, where you can now discover new streams we think you'll like. These recommended streams and videos are auto-generated based on what <x:italic>you</x:italic> watch on Twitch. This update is rolling out to everyone throughout June.", {
                            "x:italic": function(e) {
                                return o.createElement(_.Q, {
                                    key: "italic",
                                    type: _._49.Span,
                                    italic: !0
                                }, e)
                            }
                        }, "NewFrontPageWelcomeMessage"),
                        t = o.createElement(_._8, {
                            position: _._15.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, o.createElement(_.w, {
                            ariaLabel: Object(l.d)("Close", "NewFrontPageWelcomeMessage"),
                            icon: _._25.Close,
                            type: _.y.Secondary,
                            size: _.x.Default,
                            onClick: this.onClickHideMessage
                        }));
                    return o.createElement(_._35, {
                        background: _.n.Alt2,
                        borderRadius: _.t.Large,
                        display: _.R.Flex,
                        margin: {
                            bottom: 2,
                            x: "auto"
                        },
                        padding: {
                            y: 1,
                            left: 1,
                            right: 3
                        },
                        position: _._15.Relative,
                        className: "front-page__welcome-message"
                    }, t, o.createElement(_._8, {
                        alignItems: _.c.Center,
                        display: _.R.Flex,
                        className: "front-page__welcome-message-icon"
                    }, o.createElement(_._24, {
                        asset: _._25.NotificationInfo,
                        height: 30,
                        width: 30
                    })), o.createElement(_._8, {
                        alignItems: _.c.Center,
                        display: _.R.Flex,
                        padding: {
                            left: .5
                        }
                    }, o.createElement(_.Q, {
                        fontSize: _.V.Size5
                    }, e)))
                }, t
            }(o.Component),
            $e = n("Av7x"),
            Xe = (n("GH5m"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(h.b.newFront).length && p.a.display(h.b.newFront.top), {
                                numSlotsAdded: t
                            }
                        })
                    }, t.shouldShowOnboarding = function() {
                        return t.followedGamesForUserHasLoaded() && le(t.props.data.currentUser.followedGames.nodes.length, t.props.data.currentUser.createdAt)
                    }, t.followedGamesForUserHasLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.currentUser && t.props.data.currentUser.followedGames
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    l.o.setPageTitle(), h.g.addListener(h.e, this.onSlotAdded), this.props.data.loading || !this.shouldShowOnboarding() || r.get("twilight_onboarding") || (r.set("twilight_onboarding", "true", L), O(T.b.NewSignup))
                }, t.prototype.componentWillUnmount = function() {
                    h.g.removeListener(h.e, this.onSlotAdded)
                }, t.prototype.componentDidUpdate = function(e) {
                    !this.props.data.loading && e.data.loading && this.shouldShowOnboarding() && !r.get("twilight_onboarding") && (r.set("twilight_onboarding", "true", L), O(T.b.NewSignup))
                }, t.prototype.render = function() {
                    return o.createElement(_._8, {
                        fullHeight: !0
                    }, o.createElement(x.b, {
                        suppressScrollX: !0,
                        disableDebounce: !0
                    }), o.createElement(D.a, null, o.createElement(P.a, null)), o.createElement(_._8, {
                        padding: 3,
                        className: "front-page-carousel"
                    }, o.createElement(v.a, {
                        adSize: h.c.newFront.top,
                        adUnit: h.d.frontpage,
                        autoEnable: !1,
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "3rem"
                        },
                        slotID: h.b.newFront.top,
                        targeting: {
                            pagetype: h.a.frontpage
                        }
                    }), o.createElement(N, null)), o.createElement(_._8, {
                        margin: 3
                    }, o.createElement(Ye, null), o.createElement(Qe, null)))
                }, t
            }(o.Component)),
            Je = Object(s.compose)(Object(y.d)("FrontPage", {
                autoReportInteractive: !0,
                destination: m.a.Index
            }), Object(u.a)({
                location: g.PageviewLocation.FrontPage
            }), Object(c.a)($e, {
                options: {
                    variables: {
                        limit: 18
                    }
                }
            }))(Xe),
            Ze = function(e) {
                return o.createElement(d.a, {
                    name: "TWILIGHT_DISCOVERY_FRONTPAGE_MVP",
                    assignments: {
                        fallback: function() {
                            return o.createElement(pe, a.__assign({}, e))
                        },
                        variant: function() {
                            return o.createElement(Je, a.__assign({}, e))
                        }
                    }
                })
            };
        n.d(t, "FrontPage", function() {
            return Ze
        })
    },
    IOwa: function(e, t, n) {
        "use strict";
        var i, a, r, o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            d = n("6sO2"),
            c = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), (i = {})[c.a.Live] = "stream-type-indicator--live", i[c.a.Premiere] = "stream-type-indicator--premiere", i[c.a.Rerun] = "stream-type-indicator--rerun", i[c.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = ((a = {})[c.a.Premiere] = u._25.VideoPremiere, a[c.a.Rerun] = u._25.VideoRerun, a[c.a.WatchParty] = u._25.VideoRerun, a),
            g = ((r = {})[c.a.Premiere] = u._26.Live, r[c.a.Rerun] = u._26.Inherit, r[c.a.WatchParty] = u._26.Inherit, r),
            v = function(e) {
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
            return v
        })
    },
    Jg0G: function(e, t) {},
    KQs2: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("C/8M"),
            o = n("rzuL"),
            s = n("CSlQ"),
            l = n("Odds"),
            d = n("KSGD"),
            c = n("4mYF"),
            u = n("F8kA"),
            m = Object(s.d)("EmbedInfo", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.title,
                    n = e.author,
                    i = e.externalAuthorName,
                    r = e.description,
                    o = null,
                    s = null;
                return n ? (o = a.createElement(l._8, {
                    margin: {
                        right: 1
                    },
                    flexShrink: 0
                }, a.createElement(u.a, {
                    to: "/" + n.login,
                    "data-a-target": "pulse-profile-picture"
                }, a.createElement(l._2, {
                    flexShrink: 0
                }, a.createElement(l.m, {
                    size: 40,
                    src: n.profileImageURL,
                    alt: "User profile picture"
                })))), s = a.createElement(l.Q, {
                    fontSize: l.V.Size6,
                    color: l.K.Alt
                }, a.createElement(u.a, {
                    to: "/" + n.login,
                    "data-a-target": "pulse-displayname-link"
                }, n.displayName))) : i && "" !== i && (s = a.createElement(l.Q, {
                    fontSize: l.V.Size6,
                    color: l.K.Alt
                }, i)), a.createElement(l._35, {
                    display: l.R.Flex,
                    flexWrap: l.U.NoWrap,
                    padding: 1,
                    background: l.n.Base
                }, o, a.createElement(l._8, {
                    flexGrow: 1,
                    overflow: l._11.Hidden
                }, s, a.createElement(l.Q, {
                    fontSize: l.V.Size6,
                    color: l.K.Base,
                    bold: !0,
                    ellipsis: !0
                }, t), r && a.createElement(l.Q, {
                    fontSize: l.V.Size6,
                    color: l.K.Alt2,
                    noWrap: !0
                }, r)))
            }),
            p = n("NqVV"),
            g = n("fc0G"),
            v = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    r = n.clipTitle,
                    s = n.clipCreatedAt,
                    d = n.durationSeconds,
                    u = n.embedURL,
                    v = n.thumbnailURL,
                    h = n.video,
                    f = n.viewCount,
                    k = h && h.game ? h.game.name : "";
                return a.createElement(l._8, null, a.createElement(c.a, {
                    createdAt: s,
                    lengthSeconds: d,
                    onClick: function() {
                        Object(o.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: v,
                    type: c.b.Clip,
                    viewCount: f
                }, a.createElement(p.a, {
                    embedURL: u,
                    playerTypeOverride: g.b.Feed
                })), a.createElement(m, {
                    author: i,
                    title: r,
                    description: k
                }))
            };
        v.contextTypes = {
            feedTrackingProps: d.object
        };
        var h = Object(s.d)("ClipEmbed", {
                autoReportInteractive: !0
            })(v),
            f = n("6sO2"),
            k = Object(s.d)("PhotoOEmbed", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.embed,
                    n = t.title,
                    i = t.inputURL,
                    r = t.providerName,
                    o = t.authorName,
                    s = t.thumbnail;
                return a.createElement("a", {
                    href: "" + i,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, a.createElement(l.k, {
                    ratio: l.l.Aspect16x9
                }, a.createElement(l._8, null, a.createElement(l._2, {
                    fullWidth: !0,
                    fullHeight: !0,
                    position: l._15.Absolute
                }, a.createElement("img", {
                    src: s && s.url || f.o.config.defaultStreamPreviewURL
                })))), a.createElement(m, {
                    externalAuthorName: o || "",
                    title: n || "",
                    description: r || ""
                }))
            }),
            b = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    r = n.game,
                    s = n.title,
                    d = n.previewImageURL,
                    u = n.viewersCount,
                    v = r ? r.name : "";
                return a.createElement(l._8, null, a.createElement(c.a, {
                    onClick: function() {
                        Object(o.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: d,
                    type: c.b.Stream,
                    viewCount: u
                }, a.createElement(p.a, {
                    channelLogin: i.login,
                    playerTypeOverride: g.b.Feed
                })), a.createElement(m, {
                    author: i,
                    title: s,
                    description: v
                }))
            };
        b.contextTypes = {
            feedTrackingProps: d.object
        };
        var y = Object(s.d)("StreamEmbed", {
                autoReportInteractive: !0
            })(b),
            _ = function(e, t) {
                var n = e.embed,
                    i = n.id,
                    r = n.owner,
                    s = n.lengthSeconds,
                    d = n.game,
                    u = n.publishedAt,
                    v = n.previewThumbnailURL,
                    h = n.title,
                    f = n.videoViewCount,
                    k = d ? d.name : "";
                return a.createElement(l._8, null, a.createElement(c.a, {
                    createdAt: u || "",
                    lengthSeconds: s || 0,
                    onClick: function() {
                        Object(o.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: v,
                    type: c.b.Video,
                    viewCount: f
                }, a.createElement(p.a, {
                    vodID: i,
                    playerTypeOverride: g.b.Feed
                })), a.createElement(m, {
                    author: r,
                    title: h || "",
                    description: k || ""
                }))
            };
        _.contextTypes = {
            feedTrackingProps: d.object
        };
        var S = Object(s.d)("VideoEmbed", {
                autoReportInteractive: !0
            })(_),
            w = (n("HgOP"), function(e, t) {
                var n = e.embed,
                    i = n.title,
                    r = n.providerName,
                    s = n.authorName,
                    d = n.html,
                    u = n.thumbnail,
                    p = d.replace("autoplay=false", "autoplay=true");
                return a.createElement(l._8, null, a.createElement(c.a, {
                    thumbnailURL: u && u.url || f.o.config.defaultStreamPreviewURL,
                    type: c.b.VideoOEmbed,
                    onClick: function() {
                        Object(o.c)(e, t.feedTrackingProps)
                    }
                }, a.createElement("div", {
                    className: "video-oembed-container",
                    dangerouslySetInnerHTML: {
                        __html: p
                    }
                })), a.createElement(m, {
                    externalAuthorName: s || "",
                    title: i || "",
                    description: r || ""
                }))
            });
        w.contextTypes = {
            feedTrackingProps: d.object
        };
        var C = {
                PhotoOEmbed: k,
                VideoOEmbed: Object(s.d)("VideoOEmbed", {
                    autoReportInteractive: !0
                })(w),
                Clip: h,
                Stream: y,
                Video: S
            },
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onImpression = function(e) {
                        Object(o.b)({
                            embed: t.props.embed
                        }, e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.impressionTracking.onImpression(this.onImpression)
                }, t.prototype.render = function() {
                    var e = C[this.props.embed.__typename];
                    return e ? a.createElement(e, {
                        embed: this.props.embed
                    }) : a.createElement(l._8, null)
                }, t = i.__decorate([Object(s.d)("Embed"), Object(r.c)()], t)
            }(a.Component);
        n.d(t, "a", function() {
            return E
        })
    },
    Kckb: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "variant1" === i.o.experiments.getAssignment("TWILIGHT_CLIPS_ON_THE_BRAIN")
        };
        var i = n("6sO2")
    },
    L46p: function(e, t) {
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
                    }
                }],
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
                end: 136
            }
        };
        n.loc.source = {
            body: "query TopGames_Games($limit: Int) {\ngames(first: $limit) {\nedges {\nnode {\nid\nname\nviewersCount\nboxArtURL(width: 285 height: 380)\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    LUP9: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = {
                RECOMMENDATION_FOLLOWED: "followed",
                RECOMMENDATION_VIEWED: "viewed",
                RECOMMENDATION_POPULAR: "popular"
            },
            o = n("Odds");

        function s(e) {
            switch (e) {
                case r.RECOMMENDATION_VIEWED:
                    return Object(a.d)("Because of your viewing history", "FeedItemReason");
                case r.RECOMMENDATION_FOLLOWED:
                    return Object(a.d)("Because of who you follow", "FeedItemReason");
                case r.RECOMMENDATION_POPULAR:
                    return Object(a.d)("Because it's popular", "FeedItemReason");
                default:
                    return ""
            }
        }
        var l = function(e) {
            if (0 === e.reasons.length) return i.createElement(o._8, null);
            var t = s(e.reasons[0].reason);
            return "" === t ? i.createElement(o._8, null) : i.createElement(o._8, {
                padding: 1
            }, t)
        };
        n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return l
        })
    },
    LgcN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
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
        var i = n("TToO"),
            a = this,
            r = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(128).then(n.bind(null, "tk3B"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            o = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(127).then(n.bind(null, "e/M0"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            s = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(126).then(n.bind(null, "Dan5"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            l = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(125).then(n.bind(null, "sQp1"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            d = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(124).then(n.bind(null, "+kKy"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            },
            c = function() {
                return i.__awaiter(a, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, n.e(123).then(n.bind(null, "2NJ8"))];
                            case 1:
                                return [2, e.sent().items]
                        }
                    })
                })
            }
    },
    LnKh: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Clips_ModalDelete"
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
                                    }]
                                }
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
                                    value: "viewCount"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 143
            }
        };
        n.loc.source = {
            body: "query Clips_ModalDelete($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ncurator {\nid\nlogin\n}\nthumbnailURL\ncreatedAt\nviewCount\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Lq4d: function(e, t) {
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
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 76
            }
        };
        n.loc.source = {
            body: "fragment feedUser on User {\nid\ndisplayName\nlogin\nprofileImageURL(width:70)\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Lwev: function(e, t) {},
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
                end: 126
            }
        };
        n.loc.source = {
            body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    MTWZ: function(e, t) {},
    McFO: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("Aj/L"),
            r = n("TToO"),
            o = n("GiK3"),
            s = n("Snvs"),
            l = n("bhVC"),
            d = n("7vx8"),
            c = n("WNmM"),
            u = n("U2Sd"),
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.data.clip,
                        n = "";
                    if (t && t.videoQualities) {
                        var i = t.videoQualities[0];
                        n = i.sourceURL
                    }
                    var a = this.props,
                        r = a.broadcasterId,
                        d = a.broadcasterLogin,
                        u = a.forceShow;
                    return o.createElement(s.a, {
                        ownerLogin: this.props.broadcasterLogin,
                        permittedRoles: {
                            editor: !0,
                            staff: !0
                        }
                    }, function(i) {
                        var a = i.permitted;
                        return n && (a || u) ? o.createElement(l.a, {
                            type: l.b.Download,
                            text: e.props.slug,
                            url: n,
                            onShareClick: t ? Object(c.c)(t.id, t.game && t.game.name, r, d, e.props.pageType) : void 0
                        }) : null
                    })
                }, t
            }(o.Component),
            p = Object(d.a)(u)(m);
        var g = Object(i.b)(function(e) {
            var t = Object(a.c)(e);
            return {
                userLogin: t ? t.login : ""
            }
        })(p);
        n.d(t, "a", function() {
            return g
        })
    },
    MjlB: function(e, t) {},
    Mlfg: function(e, t, n) {
        var i = {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                end: 319
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/post-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\nmutation Reaction_Add($input: AddReactionInput!) {\naddReaction(input: $input) {\ncontent {\n...feedItemClip\n...feedItemPost\n...feedItemVideo\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("I5q7").definitions)), i.definitions = i.definitions.concat(r(n("S0OZ").definitions)), i.definitions = i.definitions.concat(r(n("fWQn").definitions)), e.exports = i
    },
    NqVV: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("CSlQ"),
            o = n("fc0G"),
            s = n("Odds"),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChannelStatus = function() {}, t.onWheelPostMessage = function(e) {
                        if (t.postMessageIsWheelEvent(e) && t.componentEl) {
                            var n = e.data.args[0].data,
                                a = new WheelEvent("wheel", i.__assign({
                                    bubbles: !0
                                }, n));
                            t.componentEl.dispatchEvent(a)
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
                    return a.createElement("div", {
                        ref: this.setComponentRef
                    }, a.createElement(s.k, {
                        ratio: s.l.Aspect16x9
                    }, this.getVideoEmbedComponent()))
                }, t.prototype.getVideoEmbedComponent = function() {
                    var e = this.props,
                        t = e.channelLogin,
                        n = e.vodID,
                        r = e.embedURL,
                        l = e.playerTypeOverride,
                        d = {
                            disableTheatreButton: !0,
                            onChannelStatus: this.onChannelStatus,
                            playerTypeOverride: l || o.b.Frontpage
                        };
                    return r ? a.createElement("iframe", {
                        src: r,
                        width: "100%",
                        height: "100%",
                        allowFullScreen: !0
                    }) : t ? a.createElement(o.c, i.__assign({
                        channelLogin: t
                    }, d)) : n ? a.createElement(o.c, i.__assign({
                        vodID: n
                    }, d)) : a.createElement(s._8, null)
                }, t.prototype.postMessageIsWheelEvent = function(e) {
                    return "player.embed.client" === e.data.namespace && "bridgeplayereventwithpayload" === e.data.method && e.data.args.length > 0 && "wheel" === e.data.args[0].event
                }, t = i.__decorate([Object(r.d)("EmbedVideoPlayer")], t)
            }(a.Component);
        n.d(t, !1, function() {
            return "player.embed.client"
        }), n.d(t, !1, function() {
            return "bridgeplayereventwithpayload"
        }), n.d(t, "a", function() {
            return l
        })
    },
    OkeX: function(e, t) {
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
                end: 156
            }
        };
        n.loc.source = {
            body: "query FollowedGames_Games($limit: Int) {\ncurrentUser{\nid\nfollowedGames(first: $limit){\nnodes{\nid\nname\nviewersCount\nboxArtURL(width: 285 height: 380)\n}\n}\n}\n}",
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
                return e && s[e] || "en_US"
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
                                    e = r.o.logger.withCategory("leagueoflegends-api"), t(Object(d.e)(!0)), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), n = r.o.intl.getLanguageCode(), s = l(n), c = o.a.getAPIURL("/api/lol/champions?" + a.stringify({
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
    PY9L: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FrontPage_User"
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
                                    value: "createdAt"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                end: 112
            }
        };
        n.loc.source = {
            body: "query FrontPage_User($limit: Int) {\ncurrentUser {\nid\ncreatedAt\nfollowedGames(first: $limit) {\nnodes {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    S0OZ: function(e, t, n) {
        var i = {
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
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
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
                                name: {
                                    kind: "Name",
                                    value: "content"
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
                                            value: "token"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "setID"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "count"
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
                                            value: "hasReacted"
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
                                            value: "inputURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "providerName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "authorName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
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
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
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
                                            value: "inputURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "providerName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "authorName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
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
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "html"
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
                end: 631
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/chat/models/embedded-emote-fragment.gql"\n#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/user-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\nfragment feedItemPost on Post {\nid\ncreatedAt\nbody {\ncontent\nemotes {\n...embeddedEmote\n}\n}\nreactions {\nemote {\nid\ntoken\nsetID\n}\ncount\nself {\nhasReacted\n}\n}\nembeds {\n...feedItemClip\n...feedItemVideo\n... on PhotoOEmbed {\ntitle\ninputURL\nproviderName\nauthorName\nthumbnail {\nurl\n}\n}\n... on VideoOEmbed {\ntitle\ninputURL\nproviderName\nauthorName\nthumbnail {\nurl\n}\nhtml\n}\n}\nauthor {\n...feedUser\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("0ImK").definitions)), i.definitions = i.definitions.concat(r(n("I5q7").definitions)), i.definitions = i.definitions.concat(r(n("Lq4d").definitions)), i.definitions = i.definitions.concat(r(n("fWQn").definitions)), e.exports = i
    },
    S4HN: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "g", function() {
            return s
        }), n.d(t, "f", function() {
            return l
        }), n.d(t, "d", function() {
            return d
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "c", function() {
            return u
        });
        var i, a, r = n("6sO2"),
            o = n("vH/s");
        ! function(e) {
            e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
        }(i || (i = {})),
        function(e) {
            e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
        }(a || (a = {}));
        var s = function(e) {
                var t = {
                    source: e.source,
                    action: a.Start
                };
                r.n.track(o.SpadeEventType.OnboardingEvent, t)
            },
            l = function() {
                var e = {
                    source: i.HomepageCTA,
                    action: a.Dismissed
                };
                r.n.track(o.SpadeEventType.OnboardingEvent, e)
            },
            d = function() {
                var e = {
                    source: i.HomepageCTA,
                    action: a.Completed
                };
                r.n.track(o.SpadeEventType.OnboardingEvent, e)
            },
            c = function(e, t) {
                var n = {
                    src: o.SpadeEventType.OnboardingEvent,
                    game: t
                };
                r.n.track(e, n)
            },
            u = function(e) {
                r.n.track(o.SpadeEventType.BrowseForYou, e)
            }
    },
    Snvs: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("3zLD"),
            o = n("6sO2"),
            s = n("7vx8"),
            l = n("CSlQ"),
            d = n("acVP"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        loading: !0,
                        permitted: !1,
                        roles: {
                            staff: !1,
                            editor: !1,
                            owner: !1
                        },
                        error: null
                    }, t.logger = o.j.withCategory("role-restricted"), t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = m(e),
                        n = {
                            loading: e.data.loading,
                            permitted: u(t, e.permittedRoles),
                            roles: t,
                            error: null
                        };
                    e.data.error ? (n.error = new Error(e.data.error.toString()), this.logger.warn("Unable to retrieve data from GraphQL.", {
                        err: n.error
                    })) : e.data.loading || e.data.user && e.data.currentUser || (n.error = new Error("Failed to fetch user information"), this.logger.warn("Failed to fetch user information.", {
                        err: n.error
                    })), this.setState(n)
                }, t.prototype.render = function() {
                    return this.props.children(this.state)
                }, t
            }(a.Component);

        function u(e, t) {
            return !!e.owner || (!(!e.staff || !t.staff) || !(!e.editor || !t.editor))
        }

        function m(e) {
            var t = e.data,
                n = {
                    staff: !1,
                    editor: !1,
                    owner: !1
                };
            return !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id), n
        }
        var p = Object(r.compose)(Object(s.a)(d, {
            options: function(e) {
                return {
                    variables: {
                        contentOwnerLogin: e.ownerLogin
                    }
                }
            }
        }), Object(l.d)("RoleRestricted"))(c);
        n.d(t, !1, function() {
            return c
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return p
        })
    },
    TUg1: function(e, t) {},
    TWJL: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return o
        }), n.d(t, "e", function() {
            return s
        }), t.f = function(e) {
            var t = e.split(":");
            if (t.length < 2) return {
                type: "",
                id: ""
            };
            return {
                type: t[0],
                id: t[1]
            }
        };
        var i = "clip",
            a = "url",
            r = "post",
            o = "stream",
            s = "vod"
    },
    Tg4T: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            s = n("Odds");
        ! function(e) {
            e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
        }(i || (i = {}));
        var l = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.render = function() {
                if (!(this.props.restriction && this.props.restriction.productName && this.props.restriction.title && this.props.videoID)) return null;
                var e = Object(o.d)("Get It Now", "VideoPreviewCardRestriction"),
                    t = this.props.restriction.canViewRestricted,
                    n = t ? Object(o.d)("unlocked", "VideoPreviewCardRestriction") : Object(o.d)("locked", "VideoPreviewCardRestriction"),
                    a = t ? s._25.Unlock : s._25.Lock;
                return r.createElement(s._8, null, !t && r.createElement(s._35, {
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
                }, r.createElement(s._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(s.Q, {
                    color: s.K.Overlay,
                    fontSize: s.V.Size5,
                    "data-test-selector": i.UpsellSelector
                }, Object(o.d)("View with {title}", {
                    title: this.props.restriction.title
                }, "VideoPreviewCardRestriction"))), r.createElement(s._8, null, r.createElement(s.v, {
                    type: s.B.Hollow,
                    ariaLabel: e,
                    targetBlank: !0,
                    disabled: "" === this.props.restriction.productName,
                    linkTo: "https://www.twitch.tv/products/" + this.props.restriction.productName,
                    overlay: !0
                }, e))), r.createElement(s._35, {
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
                }, r.createElement(s._52, {
                    direction: this.props.attachTop ? s._54.Bottom : s._54.Top,
                    align: s._53.Right,
                    label: n
                }, r.createElement(s._24, {
                    asset: a,
                    height: 20,
                    width: 20
                }))))
            }, t
        }(r.PureComponent);
        n.d(t, !1, function() {
            return i
        }), n.d(t, "a", function() {
            return l
        })
    },
    U2Sd: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsDownloadButton"
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
                                    value: "videoQualities"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "sourceURL"
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
                end: 131
            }
        };
        n.loc.source = {
            body: "query ClipsDownloadButton($slug: ID!) {\nclip(slug: $slug) {\nid\nbroadcaster {\nid\n}\ngame {\nid\nname\n}\nvideoQualities {\nsourceURL\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    VFqp: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = n("6sO2"),
            s = n("rCmJ"),
            l = n("+Znq"),
            d = n("czpb"),
            c = n("ieBa"),
            u = n("C/8M"),
            m = n("rzuL"),
            p = n("CSlQ"),
            g = n("Odds"),
            v = n("KQs2"),
            h = n("7vx8"),
            f = n("Z/A0"),
            k = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data && this.props.data.embed && this.props.onLoad(this.props.url, this.props.data.embed)
                }, t.prototype.render = function() {
                    return null
                }, t = a.__decorate([Object(h.a)(f, {
                    skip: function(e) {
                        return !e.url
                    },
                    options: function(e) {
                        return {
                            variables: {
                                url: e.url
                            }
                        }
                    }
                })], t)
            }(r.Component),
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        cachedEmbeds: {}
                    }, t.onEmbedLoad = function(e, n) {
                        var i;
                        t.setState({
                            cachedEmbeds: a.__assign({}, t.state.cachedEmbeds, (i = {}, i[e] = n, i))
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.state.cachedEmbeds[this.props.url];
                    e && this.props.onLoad(this.props.url, e)
                }, t.prototype.render = function() {
                    var e = this.props.url;
                    return !e || this.state.cachedEmbeds[e] ? null : r.createElement(k, {
                        url: e,
                        onLoad: this.onEmbedLoad
                    })
                }, t
            }(r.Component),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        embed: void 0,
                        removedEmbedURL: ""
                    }, t.onEmbedLoad = function(e, n) {
                        t.state.embed !== n && (t.setState({
                            embed: n
                        }), t.props.onSetEmbed({
                            embed: n,
                            sourceURL: e
                        }))
                    }, t.removeEmbed = function() {
                        t.setState({
                            embed: void 0,
                            removedEmbedURL: t.props.embedURL
                        }), t.props.onSetEmbed()
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    !this.props.embedURL && this.state.removedEmbedURL && this.setState({
                        removedEmbedURL: ""
                    })
                }, t.prototype.render = function() {
                    var e = this.props.embedURL;
                    return (this.state.embed || this.state.removedEmbedURL === this.props.embedURL) && (e = ""), r.createElement(g._8, null, this.state.embed && r.createElement(g._8, {
                        position: g._15.Relative,
                        margin: {
                            top: 1
                        }
                    }, r.createElement(g._8, {
                        className: "embed-preview-close",
                        position: g._15.Absolute,
                        zIndex: g._62.Default,
                        attachTop: !0,
                        attachRight: !0
                    }, r.createElement(g.w, {
                        onClick: this.removeEmbed,
                        overlay: !0,
                        icon: g._25.Close,
                        ariaLabel: Object(o.d)("Close", "EmbedPreview")
                    })), r.createElement(v.a, {
                        embed: this.state.embed
                    })), r.createElement(b, {
                        url: e,
                        onLoad: this.onEmbedLoad
                    }))
                }, t
            }(r.Component),
            _ = Object(d.a)("/settings/profile"),
            S = /(?:https?:\/\/)?(?:[-a-zA-Z0-9@:%_\+~#=]+\.)+[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        ! function(e) {
            e.HomePage = "home", e.Channel = "channel", e.Dashboard = "dashboard", e.Contextual = "contextual"
        }(i || (i = {}));
        var w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasInteractedOrPageload: t.props.firstPageLoaded,
                        disabled: !1,
                        shareToTwitter: !1,
                        isEmotePickerMenuVisible: !1,
                        isTwitterBubbleVisible: !1,
                        embed: void 0,
                        inputEmbedURL: ""
                    }, t.minHeight = 50, t.setTextArea = function(e) {
                        t.textArea = e, t.resize()
                    }, t.handleSetEmbed = function(e) {
                        t.setState({
                            embed: e
                        })
                    }, t.parseEmbeds = function() {
                        if (t.textArea) {
                            var e = t.textArea.value.match(S);
                            t.setState({
                                inputEmbedURL: e && e.length ? e[0] : ""
                            })
                        }
                    }, t.onKeyDown = function(e) {
                        (e.metaKey || e.ctrlKey) && "Enter" === e.key && t.onSubmit()
                    }, t.resize = function() {
                        t.textArea && (t.textArea.style.height = t.minHeight + "px", t.textArea.style.height = t.textArea.scrollHeight + "px")
                    }, t.onChange = function(e) {
                        t.resize(), t.parseEmbeds()
                    }, t.onSubmit = function() {
                        var e = t.textArea.value.trim();
                        if (!t.state.disabled && e) {
                            t.disableComposer();
                            var n = [],
                                i = t.state.embed || {
                                    sourceURL: "",
                                    embed: void 0
                                };
                            i && i.sourceURL && i.embed && n.push(i), t.props.onCreate(e, n, t.state.shareToTwitter).then(function(e) {
                                t.resetComposer();
                                var n = e.data.createPost.post,
                                    i = n.id.split(":"),
                                    a = {
                                        action: u.a.Create,
                                        postID: i[i.length - 1],
                                        postContent: n.body && n.body.content || void 0,
                                        composerLocation: t.props.composerLocation
                                    };
                                Object(m.e)(a)
                            }, function() {
                                t.enableComposer()
                            })
                        }
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
                            shareToTwitter: !1,
                            embed: void 0,
                            inputEmbedURL: ""
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
                            a = t.textArea.value.substring(0, t.textArea.selectionStart) + e + t.textArea.value.substring(t.textArea.selectionEnd, t.textArea.value.length);
                        t.textArea.value = a, t.textArea.focus(), t.textArea.selectionStart = i, t.textArea.selectionEnd = i
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.setState({
                        hasInteractedOrPageload: !0
                    })
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(o.d)("Post", "Composer"),
                        t = r.createElement(c.b, {
                            key: "emote-picker",
                            onClick: this.toggleEmotePicker
                        }),
                        n = null;
                    this.state.hasInteractedOrPageload && (n = r.createElement(c.c, {
                        channelOwnerID: this.props.userID,
                        onClickEmote: this.onClickEmote,
                        toggleVisibility: this.toggleEmotePicker,
                        visible: this.state.isEmotePickerMenuVisible && !this.state.disabled,
                        direction: g.r.BottomRight
                    }));
                    var i, a = r.createElement(s.a, {
                        onClickOut: this.onEmotePickerClickOut
                    }, t, n);
                    return i = this.props.isConnectedToTwitter ? r.createElement(g.J, {
                        "data-test-selector": "twitter-checkbox",
                        id: "share-twitter-toggle",
                        label: Object(o.d)("Share Posts to Twitter", "TwitterShare"),
                        onChange: this.toggleShareActivity,
                        checked: this.state.shareToTwitter
                    }) : r.createElement("a", {
                        href: _
                    }, Object(o.d)("Connect Twitter", "ConnectTwitter")), r.createElement(g._35, {
                        elevation: 1,
                        padding: 1,
                        margin: {
                            bottom: 1
                        },
                        background: g.n.Base,
                        position: g._15.Relative,
                        "data-a-target": "pulse-post-container"
                    }, r.createElement("div", {
                        onMouseEnter: this.onMouseEnter
                    }, r.createElement(g._46, {
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
                        overflow: g._11.Hidden
                    }), r.createElement(g._35, {
                        textAlign: g._45.Right,
                        position: g._15.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, a), r.createElement(g._8, {
                        display: g.R.Flex,
                        margin: {
                            top: 1
                        }
                    }, r.createElement(g._8, {
                        flexGrow: 1
                    }), r.createElement(g._8, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(s.a, {
                        onClickOut: this.closeTwitterBubble
                    }, r.createElement(l.a, null, r.createElement(g.w, {
                        icon: g._25.Gear,
                        ariaLabel: Object(o.d)("Composer Settings", "ComposerSettings"),
                        "data-test-selector": "composer-setting",
                        "data-a-target": "pulse-settings"
                    }), r.createElement(g.q, {
                        direction: g.r.Left
                    }, r.createElement(g._8, {
                        padding: 1
                    }, i))))), r.createElement(g._8, null, r.createElement(g.v, {
                        "data-test-selector": "submit-post",
                        disabled: this.state.disabled,
                        ariaLabel: e,
                        onClick: this.onSubmit,
                        "data-a-target": "pulse-post-button"
                    }, e)))), !this.state.disabled && r.createElement(y, {
                        embedURL: this.state.inputEmbedURL,
                        onSetEmbed: this.handleSetEmbed
                    }))
                }, t = a.__decorate([Object(p.d)("Composer")], t)
            }(r.Component),
            C = n("RH2O");
        var E = Object(C.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })(w);
        n.d(t, !1, function() {
            return "composer"
        }), n.d(t, !1, function() {
            return "submit-post"
        }), n.d(t, !1, function() {
            return "twitter-checkbox"
        }), n.d(t, !1, function() {
            return "composer-setting"
        }), n.d(t, !1, function() {
            return S
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, !1, function() {
            return w
        }), n.d(t, "a", function() {
            return E
        })
    },
    VMA7: function(e, t, n) {
        var i = {
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
                                                        name: {
                                                            kind: "Name",
                                                            value: "reason"
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
                                            value: "tracking"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "batchID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cardImpressionID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "recGenerationID"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "recGenerationIndex"
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
                                    value: "cursor"
                                },
                                arguments: [],
                                directives: []
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
            }],
            loc: {
                start: 0,
                end: 522
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/post-fragment.gql"\n#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\n#import "twilight/features/feed/models/stream-fragment.gql"\nfragment feed on FeedItemConnection {\nedges {\nnode {\ncontent {\n...feedItemClip\n...feedItemPost\n...feedItemStream\n...feedItemVideo\n}\nreasons {\n... on FeedItemReason {\nreason\n}\n}\ntracking {\nbatchID\ncardImpressionID\nrecGenerationID\nrecGenerationIndex\n}\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("S0OZ").definitions)), i.definitions = i.definitions.concat(r(n("I5q7").definitions)), i.definitions = i.definitions.concat(r(n("fWQn").definitions)), i.definitions = i.definitions.concat(r(n("rogX").definitions)), e.exports = i
    },
    Vr3l: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-9fc82f039194a365a8d6d2bf2797e041.png"
    },
    WKwZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "d", function() {
            return o
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        });
        var i, a, r = "carousel-player__main-description",
            o = "carousel-player-left-button",
            s = "carousel-player-right-button";
        ! function(e) {
            e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
        }(i || (i = {})),
        function(e) {
            e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
        }(a || (a = {}))
    },
    WNmM: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return m
        });
        var i, a, r = n("6sO2"),
            o = n("8Wuk"),
            s = n("vH/s"),
            l = ((i = {})[o.b.Twitter] = "twitter", i[o.b.Reddit] = "reddit", i[o.b.VKontakte] = "vkontakte", i[o.b.Facebook] = "facebook", i[o.b.Copy] = "link", i[o.b.CopyInput] = "option_link", i[o.b.Download] = "download", i),
            d = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            c = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            u = ((a = {
                MyClips: s.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: s.PageviewLocation.ChannelClipsManager,
                TopClipsGame: s.PageviewLocation.ClipsGame,
                TopClipsChannel: s.PageviewLocation.ChannelClips
            })[s.PageviewLocation.ClipsEditing] = s.PageviewLocation.ClipsEditing, a[s.PageviewLocation.ClipsViewing] = s.PageviewLocation.ClipsViewing, a),
            m = function(e, t, n, i, a) {
                return function(o) {
                    r.o.tracking.track(s.SpadeEventType.VideoShare, {
                        vod_id: e,
                        vod_type: "clip",
                        share_platform: l[o],
                        location: u[a],
                        game: t,
                        channel_id: Number(n || 0),
                        channel: i,
                        live: null
                    })
                }
            }
    },
    Wjt1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.placeholderFeaturedBroadcasters = function(e) {
            return g([], e, !0)
        }, n.d(t, "FeaturedContent", function() {
            return v
        });
        var i = n("TToO"),
            a = n("GiK3"),
            r = (n.n(a), n("6sO2")),
            o = n("7vx8"),
            s = n("g91j"),
            l = n("WKwZ"),
            d = n("o8Pq"),
            c = n("8atL"),
            u = (n.n(c), n("Xg86")),
            m = n("CSlQ"),
            p = n("Odds");
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return d.FeaturedBroadcastersRenderContext
        });

        function g(e, t, n) {
            switch (t) {
                case d.FeaturedBroadcastersRenderContext.AnonFront:
                    return a.createElement(s.a, {
                        items: e,
                        isLoading: n,
                        layout: l.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return a.createElement(p._35, {
                        className: "featured-content",
                        background: p.n.Base,
                        elevation: 1
                    }, a.createElement(p._8, {
                        padding: 1
                    }, function(e) {
                        return e ? a.createElement(p.Q, {
                            fontSize: p.V.Size5,
                            color: p.K.Alt2
                        }, a.createElement(p._14, {
                            width: 100
                        })) : a.createElement(p.Q, {
                            fontSize: p.V.Size5,
                            color: p.K.Alt2
                        }, Object(r.d)("Featured", "FeaturedContentComponent"))
                    }(n)), a.createElement(s.a, {
                        items: e,
                        isLoading: n,
                        layout: l.c.Vertical
                    }))
            }
        }
        var v = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(u.a)(e),
                    n = this.props.data.featuredVideos || [],
                    i = Object(u.b)(n);
                if (t.length > 0 && t.splice(t.length - i.length), this.props.shouldMixContent && i.length > 0) {
                    var a = 6 - i.length,
                        r = t.splice(a);
                    t = t.concat(i).concat(r)
                } else t = t.concat(i);
                var o = !(!this.props.data.loading && !this.props.data.error);
                return g(t, this.props.renderContext, o)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(o.a)(c, {
                options: function() {
                    return {
                        variables: {
                            language: r.o.intl.getLanguageCode()
                        }
                    }
                }
            }), Object(m.d)("FeaturedContent")], t)
        }(a.Component)
    },
    XITx: function(e, t) {},
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            a = (n.n(i), n("Odds")),
            r = function() {
                return i.createElement(a.C, null, i.createElement(a.k, {
                    ratio: a.l.Aspect16x9
                }, i.createElement(a._14, null)), i.createElement(a.D, null, i.createElement(a._8, {
                    display: a.R.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a._8, {
                    display: a.R.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._14, {
                    width: 40,
                    height: 56
                })), i.createElement(a._8, {
                    display: a.R.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a.Q, null, i.createElement(a._14, {
                    width: 150
                })), i.createElement(a.Q, {
                    fontSize: a.V.Size7
                }, i.createElement(a._14, {
                    width: 100
                }))))))
            }
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
                        type: i.b.Stream,
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
                        type: i.b.Vod,
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
        var i = n("WKwZ");

        function a(e) {
            return e.replace(/\[\]\(.+\)/, "")
        }
    },
    "Xh/U": function(e, t, n) {
        "use strict";
        var i, a = n("GiK3"),
            r = n("KQs2"),
            o = n("RH2O"),
            s = n("2KeS"),
            l = n("+xm8"),
            d = n("f2i/"),
            c = n("Aj/L"),
            u = n("TToO"),
            m = n("KSGD"),
            p = n("6sO2"),
            g = n("rCmJ"),
            v = n("7vx8"),
            h = n("Tzcg"),
            f = n("l21v");
        ! function(e) {
            e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
        }(i || (i = {}));
        var k = n("CSlQ"),
            b = n("Odds"),
            y = (n("kaF0"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        disabled: !1
                    }, t.toggleReaction = function() {
                        if (!t.state.disabled) {
                            var e, n = t.props.reaction.self.hasReacted ? i.Remove : i.Add,
                                a = ((e = {})[i.Add] = t.props.addReaction, e[i.Remove] = t.props.removeReaction, e);
                            t.setState({
                                disabled: !0
                            }), a[n](t.props.reaction.emote.id, t.props.reaction.emote.token).then(function() {
                                return t.setState({
                                    disabled: !1
                                })
                            }, function() {
                                return t.setState({
                                    disabled: !1
                                })
                            })
                        }
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.reaction,
                        t = e.count,
                        n = e.emote,
                        i = e.self,
                        r = n.token;
                    return parseInt(n.id, 10) < 15 && (r = Object(h.c)(n.token)), a.createElement("div", u.__assign({
                        onClick: this.toggleReaction
                    }, Object(b._63)(this.props)), a.createElement(b._52, {
                        label: 0 === t ? r : t + " " + r,
                        direction: b._54.Top,
                        align: b._53.Center
                    }, a.createElement(b._8, {
                        alignItems: b.c.Center,
                        className: i.hasReacted ? "activity-reaction activity-reaction--active" : "activity-reaction",
                        display: b.R.Flex
                    }, a.createElement(b._8, {
                        className: "activity-reaction__emote-contain"
                    }, a.createElement("img", u.__assign({
                        alt: r,
                        className: "activity-reaction__emote"
                    }, Object(f.e)("endorse" === n.id ? "1" : n.id)))))))
                }, t = u.__decorate([Object(k.d)("Reaction")], t)
            }(a.Component)),
            _ = Object(k.d)("AdditionalReactions", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.reactions.map(function(t, n) {
                    return a.createElement(b._8, {
                        key: n,
                        margin: {
                            right: 1,
                            bottom: 1
                        }
                    }, a.createElement(y, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "additional-reaction-" + n
                    }))
                });
                return a.createElement(b.q, {
                    direction: e.position || b.r.TopCenter,
                    size: b.s.Small,
                    show: !0
                }, a.createElement(b._35, {
                    display: b.R.Flex,
                    flexWrap: b.U.Wrap,
                    padding: {
                        left: 1,
                        top: 1
                    }
                }, t))
            }),
            S = Object(k.d)("TopReactions", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.reactions.map(function(t, n) {
                    return a.createElement(b._8, {
                        key: n,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(y, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "top-reaction-" + n
                    }))
                });
                return a.createElement(b._35, {
                    display: b.R.Flex
                }, t)
            });

        function w(e) {
            var t = [];
            return e && 0 !== e.length && (t = e.slice().sort(function(e, t) {
                return function(e, t) {
                    if (e.emote.id === R.emote.id) return -1;
                    if (t.emote.id === R.emote.id) return 1;
                    var n = e.self.hasReacted,
                        i = t.self.hasReacted;
                    if (e.count === t.count) {
                        if (n && !i) return -1;
                        if (!n && i) return 1
                    }
                    return t.count - e.count
                }(e, t)
            })), t
        }
        var C = n("oIkB");
        var E = function(e, t, n) {
                return function(a, r, o, s) {
                    var l, d = (t = t || []).map(function(e) {
                            return e.emote.id
                        }).indexOf(r),
                        c = t.slice();
                    return d > -1 ? c[d] = u.__assign({}, t[d], {
                        count: t[d].count + function(e, t) {
                            return e === i.Add && t.self.hasReacted ? 0 : e === i.Add ? 1 : -1
                        }(e, t[d]),
                        self: u.__assign({}, t[d].self, {
                            hasReacted: e === i.Add
                        })
                    }) : e === i.Add && c.push(u.__assign({}, R, {
                        emote: u.__assign({}, R.emote, {
                            id: r,
                            token: o
                        }),
                        count: 1,
                        self: u.__assign({}, R.self, {
                            hasReacted: !0
                        })
                    })), n(u.__assign({}, Object(C.a)({
                        entityID: a,
                        emoteID: r
                    }), {
                        optimisticResponse: (l = {}, l[e === i.Add ? "addReaction" : "removeReaction"] = {
                            content: u.__assign({}, s, {
                                reactions: c
                            }),
                            __typename: e === i.Add ? "AddReactionPayload" : "RemoveReactionPayload"
                        }, l)
                    }))
                }
            },
            N = n("C/8M"),
            T = n("rzuL"),
            O = n("Mlfg"),
            I = n("Dqkc"),
            F = n("P+j/"),
            L = (n("24qG"), function(e) {
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
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = a.createElement("div", {
                        onClick: this.toggleEmoteSelector,
                        "data-a-target": "add-reaction-button"
                    }, this.props.children);
                    return this.state.emoteSelectorVisible || (e = a.createElement(b._52, {
                        label: Object(p.d)("Add a Reaction", "ReactionSelector"),
                        direction: b._54.Top,
                        align: b._53.Center
                    }, e)), a.createElement(b._8, {
                        className: "reaction-selector",
                        position: b._15.Relative
                    }, a.createElement(g.a, {
                        onClickOut: this.closeEmoteSelector
                    }, this.state.emoteSelectorVisible && a.createElement(F.a, {
                        onClickEmote: this.onEmoteSelect,
                        visible: this.state.emoteSelectorVisible && this.state.emotesLoaded,
                        toggleVisibility: this.toggleEmoteSelector,
                        onLoad: this.emotesLoaded,
                        direction: this.props.position || b.r.TopLeft
                    }), e))
                }, t = u.__decorate([Object(k.d)("ReactionSelector")], t)
            }(a.Component)),
            R = {
                emote: {
                    id: "9",
                    token: "<3",
                    setID: "",
                    __typename: "Emote"
                },
                count: 0,
                self: {
                    hasReacted: !1,
                    __typename: "ReactionSelfConnection"
                },
                __typename: "Reaction"
            },
            x = 4,
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        additionalReactionsVisible: !1
                    }, t.addReaction = function(e, n) {
                        return t.toggleReaction(i.Add, e, n)
                    }, t.hideAdditional = function() {
                        t.setState({
                            additionalReactionsVisible: !1
                        })
                    }, t.removeReaction = function(e, n) {
                        return t.toggleReaction(i.Remove, e, n)
                    }, t.toggleAdditional = function(e, n) {
                        n.preventDefault(), e.length <= x || t.setState(function(e) {
                            return {
                                additionalReactionsVisible: !e.additionalReactionsVisible
                            }
                        })
                    }, t.toggleReaction = function(e, n, a) {
                        if (!t.props.isLoggedIn) return t.props.login(), Promise.reject(new Error("user not logged in"));
                        var r = a;
                        return parseInt(n, 10) < 15 && (r = Object(h.c)(a)), (e === i.Add ? t.props.addReaction : t.props.removeReaction)(t.props.parentEntity, n, a, t.props.parent).then(function(a) {
                            var o = {
                                action: e === i.Add ? N.a.Create : N.a.Remove,
                                entity: t.props.parentEntity,
                                reactionInt: n,
                                reactionText: r
                            };
                            return Object(T.f)(o, t.context.feedTrackingProps), a
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = w(this.props.reactions);
                    0 !== t.length && t[0].emote.id === R.emote.id || (t = [R].concat(t));
                    var n = this.props.emoteSelectorAndOverflowPos && this.props.emoteSelectorAndOverflowPos === b.r.Bottom ? b.r.BottomCenter : b.r.TopCenter,
                        i = null;
                    this.state.additionalReactionsVisible && (i = a.createElement(_, {
                        reactions: t.slice(x),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction,
                        position: n
                    }));
                    var r = this.props.reactions ? this.props.reactions.reduce(function(e, t) {
                            return e + t.count
                        }, 0) : 0,
                        o = null;
                    this.props.reactions && r > 0 && (o = this.props.reactions.length >= x ? a.createElement("a", {
                        href: "#",
                        onClick: function(n) {
                            return e.toggleAdditional(t, n)
                        },
                        "data-test-selector": "additional-toggle-tracking"
                    }, r) : a.createElement("span", {
                        "data-test-selector": "additional-toggle-tracking",
                        "data-a-target": "pulse-reaction-count"
                    }, r)), this.state.additionalReactionsVisible || (o = a.createElement(b._52, {
                        label: Object(p.d)("Total Reactions", "ReactionList"),
                        direction: b._54.Top,
                        align: b._53.Center
                    }, o)), n = this.props.emoteSelectorAndOverflowPos && this.props.emoteSelectorAndOverflowPos === b.r.Bottom ? b.r.BottomLeft : b.r.TopLeft;
                    var s = null;
                    return this.props.isLoggedIn && (s = a.createElement(b._8, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement(L, {
                        onEmoteSelect: this.addReaction,
                        position: n
                    }, a.createElement(b._24, {
                        asset: b._25.AddReaction,
                        type: b._26.Brand,
                        width: 24,
                        height: 24
                    })))), a.createElement(b._35, {
                        display: b.R.Flex,
                        alignItems: b.c.Center,
                        padding: 1
                    }, a.createElement(S, {
                        reactions: t.slice(0, x),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction
                    }), a.createElement(b._8, {
                        margin: {
                            right: 1
                        }
                    }, s), a.createElement(b._2, {
                        position: b._15.Relative
                    }, a.createElement(g.a, {
                        onClickOut: this.hideAdditional
                    }, i, o)))
                }, t.contextTypes = {
                    feedTrackingProps: m.object
                }, t = u.__decorate([Object(v.a)(O, {
                    props: function(e) {
                        return {
                            addReaction: E(i.Add, e.ownProps.reactions, e.mutate)
                        }
                    }
                }), Object(v.a)(I, {
                    props: function(e) {
                        return {
                            removeReaction: E(i.Remove, e.ownProps.reactions, e.mutate)
                        }
                    }
                }), Object(k.d)("Reactions")], t)
            }(a.Component);
        var P = Object(o.b)(function(e) {
                return {
                    isLoggedIn: Object(c.d)(e)
                }
            }, function(e) {
                return Object(s.b)({
                    login: function() {
                        return Object(d.f)(l.a.FeedReactionToggle)
                    }
                }, e)
            })(D),
            A = Object(k.d)("ClipContent", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.content,
                    n = t.slug,
                    i = t.reactions;
                return a.createElement(b._8, null, a.createElement(r.a, {
                    embed: e.content
                }), a.createElement(P, {
                    parentEntity: "clip:" + n,
                    reactions: i,
                    parent: e.content
                }))
            }),
            V = n("F8kA"),
            j = n("1jVX");
        n("MTWZ");
        var M = {
            Clip: A,
            Post: Object(k.d)("PostContent", {
                autoReportInteractive: !0
            })(function(e) {
                var t, n = e.content,
                    i = n.author,
                    o = n.body,
                    s = n.createdAt,
                    l = n.embeds,
                    d = n.id,
                    c = n.reactions;
                return a.createElement(b._8, null, a.createElement(b._35, {
                    display: b.R.Flex,
                    alignItems: b.c.Center,
                    padding: 1,
                    borderBottom: !0
                }, a.createElement(b._8, {
                    margin: {
                        right: 1
                    }
                }, a.createElement(V.a, {
                    to: {
                        pathname: "/" + i.login,
                        state: {
                            content: "author_avatar",
                            medium: "pulse_card"
                        }
                    },
                    "data-a-target": "pulse-profile-picture"
                }, a.createElement(b.m, {
                    size: 40,
                    src: i.profileImageURL,
                    alt: "User profile picture"
                }))), a.createElement(b._8, {
                    flexGrow: 1
                }, a.createElement(b._8, {
                    display: b.R.Flex,
                    flexDirection: b.T.Column
                }, a.createElement(V.a, {
                    to: {
                        pathname: "/" + i.login,
                        state: {
                            content: "author_name",
                            medium: "pulse_card"
                        }
                    }
                }, a.createElement(b.Q, {
                    fontSize: b.V.Size4,
                    color: b.K.Base,
                    bold: !0
                }, i.displayName)), a.createElement(V.a, {
                    to: "/" + i.login + "/p/" + d,
                    "data-a-target": "pulse-post-link"
                }, a.createElement(b._52, {
                    label: (t = new Date(s), Object(p.d)("{dateTime, date, medium} {dateTime, time, short}", {
                        dateTime: t
                    }, "PostDate")),
                    direction: b._54.Bottom
                }, a.createElement(b.Q, {
                    fontSize: b.V.Size6,
                    color: b.K.Alt2
                }, Object(p.h)(new Date(s)))))))), o && a.createElement(b._35, {
                    padding: 1,
                    className: "feed-item-text"
                }, Object(j.a)(o.content.trim(), o.emotes, i.login)), a.createElement(b._8, null, l && l.slice(0, 1).map(function(e, t) {
                    return a.createElement(r.a, {
                        key: t,
                        embed: e
                    })
                })), a.createElement(P, {
                    parentEntity: "post:" + d,
                    reactions: c,
                    emoteSelectorAndOverflowPos: e.emoteSelectorAndOverflowPos,
                    parent: e.content
                }))
            }),
            Video: Object(k.d)("VideoContent", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.content,
                    n = t.id,
                    i = t.reactions;
                return a.createElement(b._8, null, a.createElement(r.a, {
                    embed: e.content
                }), a.createElement(P, {
                    parentEntity: "vod:" + n,
                    reactions: i,
                    parent: e.content
                }))
            }),
            Stream: function(e) {
                return a.createElement(r.a, {
                    embed: e.content
                })
            }
        };

        function U(e) {
            return void 0 !== M[e]
        }
        var G = function(e) {
            var t = M[e.content.__typename];
            return a.createElement(t, {
                content: e.content,
                emoteSelectorAndOverflowPos: e.emoteSelectorAndOverflowPos
            })
        };
        n.d(t, "b", function() {
            return U
        }), n.d(t, "a", function() {
            return G
        })
    },
    YUUt: function(e, t, n) {
        e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc37349dfbde7c720.png"
    },
    YVIF: function(e, t) {},
    "Z/A0": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Feed_Embed"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "url"
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
                        alias: {
                            kind: "Name",
                            value: "embed"
                        },
                        name: {
                            kind: "Name",
                            value: "feedEmbed"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "url"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "url"
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
                                            value: "inputURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "providerName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "authorName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
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
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
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
                                            value: "inputURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "providerName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "authorName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
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
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "html"
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
                end: 382
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\nquery Feed_Embed($url: String!) {\nembed: feedEmbed(url: $url) {\n...feedItemClip\n...feedItemVideo\n... on PhotoOEmbed {\ntitle\ninputURL\nproviderName\nauthorName\nthumbnail {\nurl\n}\n}\n... on VideoOEmbed {\ntitle\ninputURL\nproviderName\nauthorName\nthumbnail {\nurl\n}\nhtml\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("I5q7").definitions)), i.definitions = i.definitions.concat(r(n("fWQn").definitions)), e.exports = i
    },
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return _
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("OAwv")),
            o = (n.n(r), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("6sO2"),
            d = n("iOr9"),
            c = n("vKFS"),
            u = n("SZoP"),
            m = n("mi6k"),
            p = n("CSlQ"),
            g = n("81qH"),
            v = n("Tg4T"),
            h = n("Odds"),
            f = n("a0ve"),
            k = (n.n(f), "video-view-count"),
            b = "video-length",
            y = function(e) {
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
                        null !== n && (e = o.createElement(h._8, {
                            position: h._15.Absolute,
                            attachBottom: !0,
                            fullWidth: !0
                        }, o.createElement(h._18, {
                            size: h._20.Small,
                            value: n,
                            mask: !0
                        })));
                        var a = {
                            productName: t.props.video.restriction && t.props.video.restriction.productName,
                            title: t.props.video.restriction && t.props.video.restriction.productTitle,
                            canViewRestricted: t.props.video.self && !t.props.video.self.isRestricted || !1
                        };
                        return o.createElement("div", i.__assign({
                            onClick: t.onClickHandler,
                            onMouseEnter: t.onMouseEnterHandler,
                            onMouseLeave: t.onMouseLeaveHandler
                        }, Object(h._63)(t.props)), o.createElement(h.C, null, o.createElement(h._8, {
                            fullWidth: !0
                        }, o.createElement(h.k, {
                            overflow: !0
                        }, o.createElement("div", null, o.createElement(v.a, {
                            videoID: t.props.video.id,
                            restriction: a
                        }), o.createElement(h._35, {
                            display: h.R.InlineFlex,
                            position: h._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: .5,
                            zIndex: h._62.Default,
                            fontSize: h.V.Size6,
                            background: h.n.Overlay,
                            color: h.K.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(h._34, {
                            "data-test-selector": k,
                            icon: h._25.GlyphViews,
                            label: Object(l.d)("views", "VideoPreviewCard"),
                            value: Object(l.f)(t.props.video.viewCount)
                        })), o.createElement(h._35, {
                            display: h.R.InlineFlex,
                            position: h._15.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            margin: .5,
                            zIndex: h._62.Default,
                            fontSize: h.V.Size6,
                            background: h.n.Overlay,
                            color: h.K.Overlay,
                            className: "video-preview-card__preview-overlay-stat"
                        }, o.createElement(h._34, {
                            "data-test-selector": b,
                            icon: h._25.GlyphLength,
                            label: Object(l.d)("length", "VideoPreviewCard"),
                            value: Object(m.b)(t.props.video.lengthSeconds)
                        })), t.videoPreviewImage(), e))), o.createElement(h.D, null, o.createElement(h._8, {
                            display: h.R.Flex,
                            flexDirection: h.T.Row,
                            flexWrap: h.U.NoWrap,
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
                            return o.createElement(g.VideoPreviewCardPlaceholder, null)
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return o.createElement(d.a, i.__assign({}, e))
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
                    return o.createElement(h.k, {
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
                    }, o.createElement(h._2, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(h.k, {
                        ratio: h.l.Aspect16x9
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
                        n = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        });
                    return o.createElement(h._8, {
                        "data-test-selector": "game-box-art",
                        display: h.R.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(h._2, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(h._52, {
                        display: h.R.Block,
                        direction: h._54.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(h.E, {
                        aspect: h.l.BoxArt,
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
                    return o.createElement(h._8, {
                        display: h.R.Flex,
                        flexDirection: h.T.Column,
                        overflow: h._11.Hidden
                    }, o.createElement(h._8, {
                        "data-test-selector": "video-title",
                        overflow: h._11.Hidden,
                        position: h._15.Relative
                    }, o.createElement(h.Q, {
                        color: h.K.Base,
                        fontSize: h.V.Size5,
                        lineHeight: h._9.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(h._8, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(h.Q, {
                        type: h._49.Span,
                        color: h.K.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(h._2, {
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
            _ = Object(p.d)("VideoPreviewCard")(y)
    },
    acVP: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "RoleRestricted"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "contentOwnerLogin"
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
                                    }]
                                }
                            }]
                        }
                    }, {
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
                                    value: "contentOwnerLogin"
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
                                            value: "isEditor"
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
                end: 147
            }
        };
        n.loc.source = {
            body: "query RoleRestricted($contentOwnerLogin: String!) {\ncurrentUser {\nid\nroles {\nisStaff\n}\n}\nuser(login: $contentOwnerLogin) {\nid\nself {\nisEditor\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bHBY: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "shelf"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Shelf"
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
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "shelfTitle"
                                },
                                directives: []
                            }]
                        }
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
                                    value: "edges"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "shelfContentEdge"
                                        },
                                        directives: []
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
                    value: "shelfTitle"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "ShelfTitle"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "key"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "context"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "game"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "shelfContentEdge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "ShelfContentEdge"
                    }
                },
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
                                    value: "shelfClip"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "video"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "stream"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "game"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "trackingID"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 518
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/front/v2/queries/clip-fragment.gql"\n#import "twilight/pages/front/v2/queries/video-fragment.gql"\n#import "twilight/pages/front/v2/queries/stream-fragment.gql"\n#import "twilight/pages/front/v2/queries/game-fragment.gql"\nfragment shelf on Shelf {\nid\ntitle {\n...shelfTitle\n}\ncontent {\nedges {\n...shelfContentEdge\n}\n}\n}\nfragment shelfTitle on ShelfTitle {\nkey\ncontext {\n...game\n}\n}\nfragment shelfContentEdge on ShelfContentEdge {\ncursor\nnode {\n...shelfClip\n...video\n...stream\n...game\n}\ntrackingID\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("ddhI").definitions)), i.definitions = i.definitions.concat(r(n("c36g").definitions)), i.definitions = i.definitions.concat(r(n("blAa").definitions)), i.definitions = i.definitions.concat(r(n("9MIX").definitions)), e.exports = i
    },
    bNhH: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), t.c = function(e) {
            return g([], e, !0)
        }, n.d(t, "a", function() {
            return v
        });
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = (n.n(r), n("6sO2")),
            s = n("7vx8"),
            l = n("g91j"),
            d = n("WKwZ"),
            c = n("Xg86"),
            u = n("CSlQ"),
            m = n("Odds"),
            p = n("uckt");
        n.n(p);
        ! function(e) {
            e[e.AnonFront = 1] = "AnonFront", e[e.Front = 2] = "Front"
        }(i || (i = {}));

        function g(e, t, n) {
            switch (t) {
                case i.AnonFront:
                    return r.createElement(l.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return r.createElement(m._35, {
                        className: "featured-broadcasters",
                        background: m.n.Base,
                        elevation: 1
                    }, r.createElement(m._8, {
                        padding: 1
                    }, r.createElement(m.Q, {
                        fontSize: m.V.Size5,
                        color: m.K.Alt2
                    }, Object(o.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), r.createElement(l.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Vertical
                    }))
            }
        }
        var v = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getRender = function(e) {
                    var n = !(!t.props.data.loading && !t.props.data.error);
                    return g(e, t.props.renderContext, n)
                }, t
            }
            return a.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(c.a)(e);
                return this.getRender(t)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = a.__decorate([Object(s.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            language: o.o.intl.getLanguageCode(),
                            first: e.streamCount || 8
                        }
                    }
                }
            }), Object(u.d)("FeaturedBroadcasters")], t)
        }(r.Component)
    },
    bdk8: function(e, t) {},
    bhVC: function(e, t, n) {
        "use strict";
        var i = n("8Wuk");
        n.d(t, "a", function() {
            return i.a
        }), n.d(t, "b", function() {
            return i.b
        })
    },
    blAa: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "stream"
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
                                    value: "user"
                                },
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "game"
                                },
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
                            value: "type"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 261
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/front/v2/queries/user-fragment.gql"\n#import "twilight/pages/front/v2/queries/game-fragment.gql"\nfragment stream on Stream {\nid\nbroadcaster {\n...user\n}\ngame {\n...game\n}\nviewersCount\npreviewImageURL(width: 480 height: 272)\ncreatedAt\ntype\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("y9X2").definitions)), i.definitions = i.definitions.concat(r(n("9MIX").definitions)), e.exports = i
    },
    c36g: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "video"
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "game"
                                },
                                directives: []
                            }]
                        }
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "user"
                                },
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
            }],
            loc: {
                start: 0,
                end: 271
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/front/v2/queries/user-fragment.gql"\n#import "twilight/pages/front/v2/queries/game-fragment.gql"\nfragment video on Video {\nid\ngame {\n...game\n}\nlengthSeconds\nowner {\n...user\n}\npreviewThumbnailURL(width: 480 height: 272)\npublishedAt\ntitle\nviewCount\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("y9X2").definitions)), i.definitions = i.definitions.concat(r(n("9MIX").definitions)), e.exports = i
    },
    cYgC: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("TToO"),
            o = n("C/8M"),
            s = n("rzuL"),
            l = n("CSlQ"),
            d = n("Odds"),
            c = n("Xh/U"),
            u = n("qVoH"),
            m = n("LUP9"),
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onImpression = function(e) {
                        var n = {
                            feedPresentation: "inline",
                            item: t.props.item
                        };
                        Object(s.a)(n, e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.impressionTracking.onImpression(this.onImpression)
                }, t.prototype.render = function() {
                    return Object(c.b)(this.props.item.content.__typename) ? i.createElement(d._35, r.__assign({
                        elevation: 1,
                        margin: {
                            bottom: 1
                        },
                        background: d.n.Base,
                        position: d._15.Relative
                    }, Object(d._63)(this.props), {
                        className: "feed-item"
                    }), i.createElement(d._8, {
                        position: d._15.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: .5,
                            right: .5
                        }
                    }, i.createElement(u.a, {
                        content: this.props.item.content,
                        deletePost: this.props.deletePost
                    })), i.createElement(m.a, {
                        reasons: this.props.item.reasons
                    }), i.createElement(c.a, {
                        content: this.props.item.content
                    })) : i.createElement(d._8, null)
                }, t = r.__decorate([Object(l.d)("FeedItem"), Object(o.d)(function(e) {
                    var t = e.item,
                        n = e.index,
                        i = Object(o.b)(t);
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
                }), Object(o.c)()], t)
            }(i.Component);
        var g = Object(l.d)("Feed")(function(e) {
            var t, n, r = (t = e.items.edges, n = new Set, t.filter(function(e) {
                if (!e.node.content || !e.node.content.id) return !1;
                var t = n.has(e.node.content.id);
                return t || n.add(e.node.content.id), !t
            })).map(function(t, n) {
                var a = t.node;
                return i.createElement(p, {
                    key: a.content.id,
                    item: a,
                    index: n,
                    "data-a-target": "pulse-item-" + n,
                    deletePost: e.deletePost
                })
            });
            return e.latencyTracking.reportInteractive(r.length), r.length ? i.createElement(d._8, null, r) : i.createElement(d._8, {
                textAlign: d._45.Center
            }, i.createElement(d.Q, {
                color: d.K.Alt2
            }, Object(a.d)("There are no feed posts.", "ChannelFeedComponent")))
        });
        n.d(t, "a", function() {
            return g
        })
    },
    dQj3: function(e, t, n) {
        "use strict";
        t.b = l, t.a = function(e, t, n) {
            if (!e.author) return null;
            var d = l(e.body.emotes),
                c = e.badges.reduce(function(e, t) {
                    return e[t.setID] = t.version, e
                }, {});
            return {
                type: r.b.Message,
                messageType: r.c.Post,
                id: e.id,
                badges: c,
                bits: e.bitsUsed,
                timestamp: 0,
                deleted: !1,
                user: i.__assign({
                    userID: e.author.id,
                    userLogin: e.author.login,
                    userType: a.a.User,
                    color: e.authorColor
                }, Object(s.a)(e.authorName, e.author.login)),
                messageParts: Object(o.g)(e.body.content, d, e.bitsUsed, t, n, e.authorName)
            }
        }, t.c = function(e) {
            if (null === e.tags || null === e.message || null === e.bits_used) return null;
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
        };
        var i = n("TToO"),
            a = n("6Agf"),
            r = n("qkCi"),
            o = n("l21v"),
            s = n("e1CU");

        function l(e) {
            var t = [];
            return e.forEach(function(e) {
                t[e.from] = {
                    startIndex: e.from,
                    endIndex: e.to + 1,
                    data: {
                        images: {
                            themed: !1,
                            sources: {
                                "1x": Object(o.f)(e.emoteID, 1),
                                "2x": Object(o.f)(e.emoteID, 2),
                                "4x": Object(o.f)(e.emoteID, 4)
                            }
                        }
                    }
                }
            }), t
        }
    },
    ddhI: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "shelfClip"
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
                        alias: {
                            kind: "Name",
                            value: "clipTitle"
                        },
                        name: {
                            kind: "Name",
                            value: "title"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "clipViewCount"
                        },
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
                            value: "curator"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "user"
                                },
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "game"
                                },
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "user"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
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
                        directives: []
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
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "durationSeconds"
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
                            value: "champBadge"
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
                end: 377
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/front/v2/queries/user-fragment.gql"\n#import "twilight/pages/front/v2/queries/game-fragment.gql"\nfragment shelfClip on Clip {\nid\nslug\nurl\nembedURL\nclipTitle: title\nclipViewCount: viewCount\ncurator {\n...user\n}\ngame {\n...game\n}\nbroadcaster {\n...user\n}\nthumbnailURL(width:480 height:272)\nclipCreatedAt: createdAt\ndurationSeconds\nlanguage\nchampBadge {\nid\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("y9X2").definitions)), i.definitions = i.definitions.concat(r(n("9MIX").definitions)), e.exports = i
    },
    ea7N: function(e, t) {},
    ey2H: function(e, t) {
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
                end: 318
            }
        };
        n.loc.source = {
            body: "query FeaturedStreams($language: String $first: Int) {\nfeaturedStreams(language: $language first: $first) {\nimageURL\nisScheduled\nisSponsored\npriorityLevel\nstream {\nbroadcaster {\ndisplayName\nid\nprofileImageURL(width: 150)\nlogin\n}\ngame {\nid\nname\n}\nid\ntype\nviewersCount\npreviewImageURL(width: 320 height: 180)\n}\ntitle\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    f6Cj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return Object(i.a)(a, {
                u: e
            })
        }, t.c = function(e, t) {
            return Object(i.a)(r, {
                url: e,
                text: t
            })
        }, t.b = function(e, t) {
            return Object(i.a)(o, {
                url: e,
                title: t
            })
        }, t.d = function(e) {
            return Object(i.a)(s, {
                url: e
            })
        };
        var i = n("yDzg"),
            a = "https://www.facebook.com/sharer/sharer.php",
            r = "https://www.twitter.com/share",
            o = "https://www.reddit.com/submit",
            s = "https://vk.com/share.php"
    },
    fWQn: function(e, t, n) {
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
                            value: "reactions"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
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
                                            value: "token"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "setID"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "count"
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
                                            value: "hasReacted"
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
                        alias: {
                            kind: "Name",
                            value: "videoViewCount"
                        },
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
                end: 316
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/user-fragment.gql"\nfragment feedItemVideo on Video {\nid\ndescription\ngame {\nid\nname\n}\nlengthSeconds\nowner {\n...feedUser\n}\npreviewThumbnailURL(width: 480 height: 272)\npublishedAt\nreactions {\nemote {\nid\ntoken\nsetID\n}\ncount\nself {\nhasReacted\n}\n}\ntitle\nvideoViewCount: viewCount #\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("Lq4d").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    g91j: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("GiK3"),
            o = n("6sO2"),
            s = n("NXs7"),
            l = n("VAT8"),
            d = n("WKwZ"),
            c = n("CSlQ"),
            u = n("Odds"),
            m = (n("TUg1"), "carousel-card-live"),
            p = "carousel-card-vod",
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderIndicator = function() {
                        return t.props.item.content.type === d.b.Stream ? r.createElement(u.G, {
                            status: u.I.Live,
                            size: u.H.Small,
                            "data-test-selector": m
                        }) : r.createElement(u._24, {
                            asset: u._25.GlyphViews,
                            "data-test-selector": p
                        })
                    }, t.itemClick = function() {
                        t.props.itemClick(t.props.item)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = a({
                        "carousel-nav__item": !0,
                        "carousel-nav__item--active": this.props.itemActive
                    });
                    return r.createElement(u._8, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: u._15.Relative
                    }, r.createElement(u._52, {
                        label: (this.props.item.isSponsored ? Object(o.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: u._54.Top,
                        display: u.R.Block
                    }, r.createElement(u._6, i.__assign({
                        onClick: this.itemClick
                    }, Object(u._63)(this.props)), r.createElement(u.k, {
                        ratio: u.l.Aspect16x9
                    }, r.createElement(u._8, {
                        className: "carousel-nav__meta",
                        alignItems: u.c.Center,
                        attachBottom: !0,
                        margin: {
                            left: .5
                        },
                        zIndex: u._62.Above
                    }, this.renderIndicator(), r.createElement(u._8, {
                        display: u.R.InlineFlex,
                        margin: {
                            left: .5
                        }
                    }, r.createElement(u.Q, {
                        color: u.K.Overlay,
                        type: u._49.Span
                    }, Object(o.e)(this.props.item.content.viewersCount)))), r.createElement(u._8, {
                        className: "carousel-nav__img-container"
                    }, r.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? r.createElement(u._8, {
                        position: u._15.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, r.createElement(u._24, {
                        asset: u._25.Featured,
                        type: u._26.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = i.__decorate([Object(c.d)("CarouselCard")], t)
            }(r.Component),
            v = n("lfvs"),
            h = n("F8kA"),
            f = n("SZoP"),
            k = n("p+bz"),
            b = (n("i6UE"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = a("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(o.d)("playing {game}", {
                                game: r.createElement(h.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: Object(k.b)(t.props.item.isScheduled)
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
                        return r.createElement(u._35, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: u.R.Flex,
                            flexDirection: u.T.Row,
                            color: u.K.Alt
                        }, r.createElement(u._8, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, r.createElement(u._8, {
                            className: "horizontal-carousel-player__video",
                            position: u._15.Relative,
                            overflow: u._11.Hidden
                        }, Object(k.c)(i))), r.createElement(u._8, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, r.createElement(u._8, {
                            display: u.R.Flex,
                            flexWrap: u.U.NoWrap,
                            textAlign: u._45.Left,
                            alignItems: u.c.Center,
                            padding: {
                                bottom: .5
                            }
                        }, r.createElement(u._8, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, r.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, r.createElement(h.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: Object(k.b)(t.props.item.isScheduled)
                            },
                            "data-a-target": "carousel-profile-image"
                        }, r.createElement(u.m, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(o.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), r.createElement(u._8, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, r.createElement(u.Q, {
                            fontSize: u.V.Size4,
                            color: u.K.Base,
                            lineHeight: u._9.Heading,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(f.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), r.createElement(u.Q, {
                            fontSize: u.V.Size6,
                            color: u.K.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, r.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), r.createElement(u._8, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, r.createElement(h.a, {
                            to: t.getLinkForTitle()
                        }, r.createElement(u.Q, {
                            type: u._49.Span,
                            "data-a-target": d.a,
                            fontSize: u.V.Size3,
                            lineHeight: u._9.Heading
                        }, t.props.item.title)))), r.createElement(v, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === d.b.Stream) return {
                            pathname: "/" + t.props.item.broadcaster.login,
                            state: Object(k.b)(t.props.item.isScheduled)
                        };
                        var e = t.state && t.state.videoOffset || 0;
                        return {
                            pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                            state: Object(k.b)(t.props.item.isScheduled)
                        }
                    }, t.getPlaceholderRender = function() {
                        var e = a("horizontal-carousel-player__details", {
                            "horizontal-carousel-player__details--overlay": t.props.darkTheme
                        });
                        return r.createElement(u._8, {
                            display: u.R.Flex,
                            flexWrap: u.U.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u._8, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, r.createElement(u.k, {
                            ratio: u.l.Aspect16x9
                        }, r.createElement(u._14, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), r.createElement(u._8, {
                            className: a(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, r.createElement(u._8, {
                            display: u.R.Flex,
                            flexWrap: u.U.NoWrap,
                            textAlign: u._45.Left,
                            alignItems: u.c.Start
                        }, r.createElement(u._8, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, r.createElement(u._14, {
                            width: 40,
                            height: 40
                        })), r.createElement(u._8, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, r.createElement(u.Q, null, r.createElement(u._14, {
                            width: 70
                        })), r.createElement(u.Q, null, r.createElement(u._14, {
                            width: 70
                        })))), r.createElement(u._8, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(u.Q, null, r.createElement(u._14, {
                            lineCount: 1
                        })), r.createElement(u.Q, null, r.createElement(u._14, {
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
                return i.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                    e.item !== this.props.item && this.props.onPromotionCardView(e.item)
                }, t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(r.Component)),
            y = n("RH2O"),
            _ = n("hdYS"),
            S = (n("0v28"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = a("vertical-carousel-player__details", {
                                "vertical-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(o.d)("{login} playing {game}", {
                                login: r.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "display_name")
                                }, r.createElement(h.a, {
                                    to: {
                                        pathname: "/" + t.props.item.broadcaster.login,
                                        state: Object(k.b)(t.props.item.isScheduled)
                                    },
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(f.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: r.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, r.createElement(h.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: Object(k.b)(t.props.item.isScheduled)
                                    },
                                    "data-a-target": "carousel-broadcaster-game-name"
                                }, t.props.item.content.gameName))
                            }, "VerticalCarouselPlayer"),
                            i = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy
                            };
                        return r.createElement(u._35, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: u.K.Alt
                        }, r.createElement(u._8, {
                            className: "vertical-carousel-player__video",
                            position: u._15.Relative,
                            overflow: u._11.Hidden
                        }, Object(k.c)(i)), r.createElement(u._8, {
                            className: a(e),
                            display: u.R.Flex,
                            flexWrap: u.U.NoWrap,
                            textAlign: u._45.Left,
                            alignItems: u.c.Center,
                            padding: {
                                y: 1
                            }
                        }, r.createElement(u._8, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, r.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, r.createElement(h.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, r.createElement(u.m, {
                            src: t.props.item.broadcaster.profileImageURL,
                            alt: Object(o.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), r.createElement(u._8, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, r.createElement(u.Q, {
                            "data-a-target": d.a,
                            fontSize: u.V.Size5,
                            color: u.K.Base,
                            bold: !0
                        }, t.props.item.title), r.createElement(u.Q, {
                            fontSize: u.V.Size6,
                            color: u.K.Base
                        }, n)), r.createElement(u._8, {
                            flexShrink: 0
                        }, t.renderFollowButton())), r.createElement(v, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return r.createElement(u._8, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, r.createElement(u.k, {
                            ratio: u.l.Aspect16x9
                        }, r.createElement(u._14, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), r.createElement(u._8, {
                            display: u.R.Flex,
                            flexWrap: u.U.NoWrap,
                            textAlign: u._45.Left,
                            alignItems: u.c.Center,
                            padding: {
                                y: 1
                            }
                        }, r.createElement(u._8, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, r.createElement(u._14, {
                            width: 40,
                            height: 40
                        })), r.createElement(u._8, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, r.createElement(u.Q, null, r.createElement(u._14, {
                            width: 150
                        })), r.createElement(u.Q, null, r.createElement(u._14, {
                            width: 100
                        }))), r.createElement(u._8, {
                            flexShrink: 0
                        }, r.createElement(u._14, {
                            width: 70,
                            height: 30
                        }))), r.createElement(u.Q, null, r.createElement(u._14, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t.prototype.renderFollowButton = function() {
                    return this.props.firstPageLoaded ? r.createElement(_.a, {
                        "data-a-target": "carousel-follow-button",
                        channelLogin: this.props.item.broadcaster.login,
                        followUIType: _.b.IconAndText,
                        unfollowUIType: _.b.IconOnly,
                        showLoadingPlaceholder: !0
                    }) : r.createElement(u._14, {
                        width: 70,
                        height: 30
                    })
                }, t
            }(r.Component));
        var w = Object(y.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(S),
            C = n("o6H2"),
            E = (n("0OPT"), 6),
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > E) {
                            var e = t.state.startingIndex > 0;
                            return r.createElement(u._8, {
                                display: u.R.Flex,
                                alignItems: u.c.Stretch
                            }, r.createElement(u.w, {
                                ariaLabel: Object(o.d)("Page Left", "CarouselPlayerComponent"),
                                icon: u._25.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": d.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > E) {
                            var e = t.props.items.length > t.state.startingIndex + E;
                            return r.createElement(u._8, {
                                display: u.R.Flex,
                                alignItems: u.c.Stretch
                            }, r.createElement(u.w, {
                                ariaLabel: Object(o.d)("Page Right", "CarouselPlayerComponent"),
                                icon: u._25.AngleRight,
                                onClick: t.handlePageRight,
                                "data-test-selector": d.e,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.getCardsRender = function() {
                        if (t.state.activeItem) return t.displayEventFired || (Object(C.a)(t.props.items), t.displayEventFired = !0), t.props.items.slice(t.state.startingIndex, t.state.startingIndex + E).map(function(e, n) {
                            return r.createElement(g, {
                                key: e.content.id,
                                item: e,
                                itemClick: t.selectContent,
                                itemActive: e.content.id === t.state.activeItem.content.id,
                                "data-a-target": "carousel-card-" + n
                            })
                        });
                        for (var e = [], n = 0; n < E; n++) e.push(r.createElement(u._8, {
                            key: n,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, r.createElement(u.k, {
                            ratio: u.l.Aspect16x9
                        }, r.createElement(u._14, null)), r.createElement(u._8, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(u._14, {
                            height: 4
                        }))));
                        return e
                    }, t.getLayoutRender = function() {
                        var e = {
                            darkTheme: t.props.darkTheme || !1,
                            item: t.state.activeItem,
                            onPromotionCardClick: t.trackPromotionClick,
                            onPromotionCardView: t.trackPromotionView
                        };
                        switch (t.props.layout) {
                            case d.c.Vertical:
                                return r.createElement(w, i.__assign({}, e));
                            default:
                                return r.createElement(b, i.__assign({}, e))
                        }
                    }, t.selectContent = function(e) {
                        t.setState({
                            activeItem: e
                        });
                        var n = {
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        };
                        Object(C.b)(n)
                    }, t.trackPromotionClick = function(e, n) {
                        var i = e.broadcaster,
                            a = e.content,
                            r = e.isScheduled,
                            o = {
                                broadcast_type: a.subType,
                                carousel_index: t.props.items.indexOf(t.state.activeItem),
                                channel: i.displayName,
                                game: a.gameName,
                                promotion_was_scheduled: r,
                                views: a.viewersCount
                            };
                        Object(C.d)(o, n)
                    }, t.trackPromotionView = function(e) {
                        var n = {
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        };
                        Object(C.e)(n)
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - E;
                        e !== t.state.startingIndex && (Object(C.c)("next"), t.setState({
                            startingIndex: e
                        }))
                    }, t.handlePageLeft = function() {
                        t.state.startingIndex > 0 && (Object(C.c)("prev"), t.setState({
                            startingIndex: 0
                        }))
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUpdate = function(e) {
                    !this.state.activeItem && e.items.length > 0 && this.setState({
                        activeItem: e.items[0]
                    })
                }, t.prototype.render = function() {
                    var e;
                    return this.props.darkTheme && (e = Object(l.c)(s.a.Dark)), r.createElement(u._8, {
                        className: a("carousel-player", e)
                    }, this.getLayoutRender(), r.createElement(u._35, {
                        background: u.n.Alt
                    }, r.createElement(u._8, {
                        display: u.R.Flex,
                        flexWrap: u.U.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = i.__decorate([Object(c.d)("CarouselPlayer")], t)
            }(r.Component);
        n.d(t, "a", function() {
            return N
        })
    },
    i6UE: function(e, t) {},
    jPY3: function(e, t) {},
    jpZi: function(e, t) {},
    kaF0: function(e, t) {},
    kuCN: function(e, t) {},
    lTii: function(e, t) {},
    mbhu: function(e, t) {},
    nUXg: function(e, t) {},
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
    o6H2: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = {};
            e.forEach(function(e, n) {
                t["carousel_slot_" + n + "_channel"] = e.broadcaster.login, t["carousel_slot_" + n + "_priority"] = e.priorityLevel, t["carousel_slot_" + n + "_game"] = e.content.gameName, t["carousel_slot_" + n + "_ccu"] = e.content.viewersCount, t["carousel_slot_" + n + "_type"] = e.content.subType, e.isScheduled ? t["carousel_slot_" + n + "_source"] = o : t["carousel_slot_" + n + "_source"] = s
            }), a.n.track(r.SpadeEventType.FrontPageCarouselDisplay, t)
        }, t.b = function(e) {
            a.n.track(r.SpadeEventType.FrontPageCarouselClick, e)
        }, t.d = function(e, t) {
            var n = i.__assign({
                clicked_element: t
            }, e);
            a.n.track(r.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
        }, t.e = function(e) {
            a.n.track(r.SpadeEventType.FrontPageCarouselPromotionCardView, e)
        }, t.c = function(e) {
            a.n.track(r.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        };
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("vH/s"),
            o = "google_calendar",
            s = "backfill"
    },
    o8Pq: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("bNhH");
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return i.b
        }), n.d(t, "placeholderFeaturedBroadcasters", function() {
            return i.c
        }), n.d(t, "FeaturedBroadcasters", function() {
            return i.a
        })
    },
    ojlS: function(e, t, n) {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                name: {
                                    kind: "Name",
                                    value: "tweetStatus"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "tweet"
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
                end: 194
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/post-fragment.gql"\nmutation Feed_Composer_CreatePost($input: CreatePostInput!) {\ncreatePost(input: $input) {\npost {\n...feedItemPost\n}\ntweetStatus\ntweet\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("S0OZ").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    "p+bz": function(e, t, n) {
        "use strict";
        t.c = function(e) {
            switch (e.type) {
                case a.b.Stream:
                    return i.createElement(r.c, {
                        channelLogin: e.id,
                        vodID: "",
                        showChannelInfoOnHover: e.showChannelInfoOnHover,
                        disableTheatreButton: !0,
                        playerTypeOverride: r.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy
                    });
                case a.b.Vod:
                    return i.createElement(r.c, {
                        channelLogin: "",
                        vodID: e.id,
                        disableTheatreButton: !0,
                        playerTypeOverride: r.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy,
                        onVideoTimeChange: e.onVideoTimeChange
                    });
                default:
                    return null
            }
        }, t.a = function(e) {
            return e.map(function(e) {
                var t = "",
                    n = null;
                return e.stream && e.stream.game && null !== e.stream.game.name && (t = e.stream.game.name), e.stream && e.stream.broadcaster && (n = e.stream.broadcaster), {
                    broadcaster: {
                        displayName: n && n.displayName ? n.displayName : "",
                        id: n && n.id ? n.id : "",
                        login: n && n.login ? n.login : "",
                        profileImageURL: n && n.profileImageURL ? n.profileImageURL : ""
                    },
                    content: {
                        id: n && n.login ? n.login : "",
                        gameName: t,
                        previewImageURL: e.stream && e.stream.previewImageURL ? e.stream.previewImageURL : "",
                        type: a.b.Stream,
                        subType: e.stream && e.stream.type ? e.stream.type : "",
                        viewersCount: e.stream && e.stream.viewersCount ? e.stream.viewersCount : 0
                    },
                    description: "",
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel || 10,
                    title: e.title || ""
                }
            })
        }, t.b = function(e) {
            return {
                medium: "twitch_home",
                content: e ? "carousel_promo" : "carousel_backfill"
            }
        };
        var i = n("GiK3"),
            a = (n.n(i), n("WKwZ")),
            r = n("fc0G")
    },
    peXu: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            void 0 === n && (n = 1);
            if (!t || !e) return -1;
            var a = window.getComputedStyle(document.documentElement).fontSize || i.toString(),
                r = parseFloat(a) / i;
            return Math.floor(e / (t * r)) * n
        };
        var i = 10
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
    qVoH: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("RH2O"),
            r = n("2KeS"),
            o = n("+xm8"),
            s = n("V5M+"),
            l = n("f2i/"),
            d = n("Aj/L"),
            c = n("oSFp"),
            u = n("KSGD"),
            m = n("GiK3"),
            p = n("6sO2"),
            g = n("rCmJ"),
            v = n("C/8M"),
            h = n("rzuL"),
            f = n("CSlQ"),
            k = n("mw/a"),
            b = n("Odds"),
            y = n("CX2/"),
            _ = (n("BLXQ"), "delete"),
            S = "delete-confirm",
            w = "report",
            C = "Post";

        function E(e) {
            return e.__typename === C
        }
        var N = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.closeViews = function() {
                    n.setState({
                        showDeleteConfirmView: !1,
                        showOptionView: !1
                    })
                }, n.deletePost = function() {
                    if (n.props.deletePost) {
                        var e = n.props.content.id.split(":"),
                            t = e[e.length - 1];
                        n.props.deletePost(t).then(function() {
                            var e = {
                                action: v.a.Remove,
                                postID: t
                            };
                            Object(h.d)(e, n.context.feedTrackingProps)
                        })
                    }
                }, n.getDeleteConfirmView = function() {
                    return m.createElement(b._8, {
                        padding: 1
                    }, m.createElement(b._6, {
                        onClick: n.deletePost
                    }, m.createElement(b._8, {
                        padding: {
                            y: .5,
                            x: 1
                        },
                        className: S
                    }, Object(p.d)("Yes", "FeedItemOptions"))), m.createElement(b._6, {
                        onClick: n.showOptionView
                    }, m.createElement(b._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(p.d)("No", "FeedItemOptions"))))
                }, n.getDeleteEl = function() {
                    var e = null;
                    return n.state.userCanDelete && n.props.deletePost && (e = m.createElement(b._6, {
                        onClick: n.showDeleteConfirmView
                    }, m.createElement(b._8, {
                        className: _,
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(p.d)("Delete", "FeedItemOptions")))), e
                }, n.getOptionView = function() {
                    return n.state.loadingPermissions ? null : m.createElement(b._8, {
                        padding: 1
                    }, m.createElement(b._6, {
                        onClick: n.showReportModal,
                        "data-a-target": "pulse-post-report"
                    }, m.createElement(b._8, {
                        padding: {
                            y: .5,
                            x: 1
                        },
                        className: w
                    }, Object(p.d)("Report", "FeedItemOptions"))), n.getDeleteEl())
                }, n.getPostPermissions = function() {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var e, t, n;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.setState({
                                        loadingPermissions: !0
                                    }), e = this.props.content.id.split(":"), [4, p.o.apollo.client.query({
                                        query: y,
                                        variables: {
                                            id: "post:" + e[e.length - 1]
                                        }
                                    })];
                                case 1:
                                    return t = i.sent(), n = t.data.feedItemContent, this.setState({
                                        loadingPermissions: !1,
                                        permissionQueryData: t,
                                        userCanDelete: n && n.self && n.self.permissions && n.self.permissions.canDelete || !1
                                    }), [2]
                            }
                        })
                    })
                }, n.showDeleteConfirmView = function() {
                    n.setState({
                        showDeleteConfirmView: !0,
                        showOptionView: !1
                    })
                }, n.showReportModal = function() {
                    n.props.user ? n.props.showReportUserModal({
                        reportContext: n.getReportContext(n.props.content),
                        title: Object(p.d)("Report {itemType}", {
                            itemType: n.props.content.__typename
                        }, "ReportFeedPost")
                    }) : n.props.login()
                }, n.showOptionView = function() {
                    n.setState({
                        showDeleteConfirmView: !1,
                        showOptionView: !0
                    })
                }, n.toggleOptionView = function() {
                    n.state.showDeleteConfirmView || n.state.showOptionView ? n.closeViews() : n.state.showOptionView || n.setState({
                        showOptionView: !0
                    }), !1 === n.state.userCanDelete && E(n.props.content) && !n.state.permissionQueryData && n.getPostPermissions()
                };
                var a = !1,
                    r = t.content,
                    o = t.deletePost,
                    s = t.user;
                return o && s && E(r) && s.id === r.author.id && (a = !0), n.state = {
                    loadingPermissions: !1,
                    permissionQueryData: void 0,
                    showDeleteConfirmView: !1,
                    showOptionView: !1,
                    userCanDelete: a
                }, n
            }
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                this.props.latencyTracking.reportInteractive()
            }, t.prototype.render = function() {
                var e = null;
                return (this.state.showDeleteConfirmView || this.state.showOptionView && !this.state.loadingPermissions) && (e = m.createElement(b.q, {
                    direction: b.r.Left,
                    size: b.s.Small,
                    show: !0
                }, this.state.showOptionView && this.getOptionView(), this.state.showDeleteConfirmView && this.getDeleteConfirmView())), m.createElement(b._8, {
                    position: b._15.Relative
                }, m.createElement(g.a, {
                    onClickOut: this.closeViews
                }, e, m.createElement("div", {
                    className: this.state.showOptionView || this.state.showDeleteConfirmView ? "button-icon--show" : "button-icon"
                }, m.createElement(b.w, {
                    icon: b._25.Gear,
                    ariaLabel: Object(p.d)("Post Options", "FeedPostOptions"),
                    onClick: this.toggleOptionView,
                    "data-a-target": "pulse-post-options"
                }))))
            }, t.prototype.getReportContext = function(e) {
                switch (e.__typename) {
                    case "Clip":
                        var t = e;
                        return {
                            contentType: k.a.Clip,
                            targetUserID: t.broadcaster && t.broadcaster.id || "",
                            contentID: t.slug,
                            additionalTrackingID: t.curator ? t.curator.id : ""
                        };
                    case C:
                        var n = e;
                        return {
                            contentType: k.a.ChannelFeedPost,
                            targetUserID: n.author.id,
                            contentID: n.id
                        };
                    case "Stream":
                        var i = e;
                        return {
                            contentType: k.a.User,
                            targetUserID: i.broadcaster.id
                        };
                    case "Video":
                        var a = e;
                        return {
                            contentType: k.a.Vod,
                            targetUserID: a.owner && a.owner.id || "",
                            contentID: a.id
                        };
                    default:
                        return {
                            contentType: k.a.User,
                            targetUserID: ""
                        }
                }
            }, t.contextTypes = {
                feedTrackingProps: u.object
            }, t = i.__decorate([Object(f.d)("FeedItemOptions")], t)
        }(m.Component);
        var T = Object(a.b)(function(e) {
            return {
                user: Object(d.c)(e)
            }
        }, function(e) {
            return Object(r.b)({
                showReportUserModal: function(e) {
                    var t = i.__rest(e, []);
                    return Object(s.d)(c.a, t)
                },
                login: function() {
                    return Object(l.f)(o.a.FeedReactionToggle)
                }
            }, e)
        })(N);
        n.d(t, "a", function() {
            return T
        })
    },
    qkCi: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "e", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        });
        var i, a, r, o, s = n("aMxy");
        n.o(s, "ModerationActions") && n.d(t, "d", function() {
                return s.ModerationActions
            }),
            function(e) {
                e[e.Message = 0] = "Message", e[e.Moderation = 1] = "Moderation", e[e.ModerationAction = 2] = "ModerationAction", e[e.TargetedModerationAction = 3] = "TargetedModerationAction", e[e.AutoMod = 4] = "AutoMod", e[e.Connected = 5] = "Connected", e[e.Disconnected = 6] = "Disconnected", e[e.Reconnect = 7] = "Reconnect", e[e.Hosting = 8] = "Hosting", e[e.Unhost = 9] = "Unhost", e[e.Hosted = 10] = "Hosted", e[e.Subscription = 11] = "Subscription", e[e.Resubscription = 12] = "Resubscription", e[e.SubGift = 13] = "SubGift", e[e.Clear = 14] = "Clear", e[e.SubscriberOnlyMode = 15] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 16] = "FollowerOnlyMode", e[e.SlowMode = 17] = "SlowMode", e[e.EmoteOnlyMode = 18] = "EmoteOnlyMode", e[e.RoomMods = 19] = "RoomMods", e[e.RoomState = 20] = "RoomState", e[e.Raid = 21] = "Raid", e[e.Unraid = 22] = "Unraid", e[e.Ritual = 23] = "Ritual", e[e.Notice = 24] = "Notice", e[e.Info = 25] = "Info", e[e.BadgesUpdated = 26] = "BadgesUpdated", e[e.Purchase = 27] = "Purchase", e[e.BitsCharity = 28] = "BitsCharity", e[e.CrateGift = 29] = "CrateGift", e[e.RewardGift = 30] = "RewardGift"
            }(i || (i = {})),
            function(e) {
                e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention"
            }(a || (a = {})),
            function(e) {
                e[e.Ban = 0] = "Ban", e[e.Timeout = 1] = "Timeout"
            }(r || (r = {})),
            function(e) {
                e[e.MessageRejectedPrompt = 0] = "MessageRejectedPrompt", e[e.MessageRejected = 1] = "MessageRejected", e[e.MessageAllowed = 2] = "MessageAllowed", e[e.MessageDenied = 3] = "MessageDenied"
            }(o || (o = {}))
    },
    rogX: function(e, t, n) {
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
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 212
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/user-fragment.gql"\nfragment feedItemStream on Stream {\nid\ntitle\nbroadcaster {\n...feedUser\n}\ngame {\nid\nname\n}\nviewersCount\npreviewImageURL(width: 480 height: 272)\ncreatedAt\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("Lq4d").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    rzuL: function(e, t, n) {
        "use strict";
        var i = n("vH/s"),
            a = n("LUP9"),
            r = n("6hXa"),
            o = function(e, t) {
                var n = s(e);
                Object(r.c)(i.SpadeEventType.FeedCardImpression, n, t)
            },
            s = function(e) {
                var t = e.item.reasons[0] ? Object(a.b)(e.item.reasons[0].reason) : "";
                switch (e.item.content.__typename) {
                    case "Clip":
                        var n = e.item.content;
                        return {
                            card_author_id: n.broadcaster && n.broadcaster.id || "",
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
                        var i = e.item.content;
                        return {
                            card_author_id: i.owner && i.owner.id || "",
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
            l = n("TWJL"),
            d = function(e, t) {
                var n = c(e.embed);
                Object(r.c)(i.SpadeEventType.FeedCardEmbedImpression, n, t)
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
                        var a = e;
                        return {
                            embed_entity: l.e + ":" + a.id,
                            embed_id: a.id,
                            embed_type: l.e,
                            media_type: "video"
                        };
                    case "VideoOEmbed":
                        var r = e;
                        return {
                            embed_entity: l.b + ":" + r.inputURL,
                            embed_id: r.inputURL,
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
            u = function(e, t) {
                var n = m(e.embed);
                Object(r.c)(i.SpadeEventType.FeedCardEmbedPlay, n, t)
            },
            m = function(e) {
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
                        var a = e;
                        return {
                            action: "play",
                            embed_entity: l.b + ":" + a.inputURL,
                            embed_id: a.inputURL,
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
            p = n("6sO2"),
            g = function(e, t) {
                var n = {
                    action: e.action,
                    entity: "post:" + e.postID,
                    post_id: e.postID,
                    post_content: e.postContent,
                    composer_location: e.composerLocation
                };
                Object(r.c)(i.SpadeEventType.FeedPost, n, t)
            },
            v = function(e) {
                var t = {
                    action: e.action,
                    entity: "post:" + e.postID,
                    post_id: e.postID,
                    post_content: e.postContent,
                    composer_location: e.composerLocation
                };
                p.n.track(i.SpadeEventType.FeedPost, t)
            },
            h = function(e, t) {
                var n = Object(l.f)(e.entity),
                    a = {
                        action: e.action,
                        reaction_int: e.reactionInt,
                        reaction_text: e.reactionText,
                        target_entity: e.entity,
                        target_id: n.id,
                        target_type: n.type
                    };
                Object(r.c)(i.SpadeEventType.FeedReaction, a, t)
            };
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, "c", function() {
            return u
        }), n.d(t, "d", function() {
            return g
        }), n.d(t, "e", function() {
            return v
        }), n.d(t, "f", function() {
            return h
        })
    },
    sEID: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return d
        }), n.d(t, "a", function() {
            return c
        });
        var i = n("GiK3"),
            a = (n.n(i), n("8Wuk")),
            r = n("yDzg"),
            o = n("WNmM"),
            s = n("McFO"),
            l = n("Odds"),
            d = [{
                type: a.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: a.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: a.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: a.b.Copy
            }],
            c = function(e) {
                return i.createElement(l._8, {
                    className: "clips-social-share",
                    display: l.R.Flex,
                    flexWrap: l.U.NoWrap
                }, i.createElement(l._8, {
                    display: l.R.InlineBlock,
                    margin: {
                        right: 1
                    }
                }, i.createElement(s.a, {
                    broadcasterLogin: e.clip.broadcaster && e.clip.broadcaster.login || "",
                    broadcasterId: e.clip.broadcaster && e.clip.broadcaster.id || "",
                    slug: e.clip.slug,
                    pageType: e.pageType
                })), d.map(function(t) {
                    return i.createElement(l._8, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(a.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(r.a)(e.clip.url, t.params),
                        onShareClick: Object(o.c)(e.clip.id, e.clip.game && e.clip.game.name, e.clip.broadcaster && e.clip.broadcaster.id, e.clip.broadcaster && e.clip.broadcaster.login, e.pageType)
                    }))
                }))
            }
    },
    sikP: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("rCmJ"),
            s = n("Odds"),
            l = (n("XITx"), {
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
                        return t.props.successContent ? a.createElement(s._35, {
                            "data-test-selector": l.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.n.Alt,
                            fullWidth: !0
                        }, a.createElement(s.Q, {
                            type: s._49.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? a.createElement(s._35, {
                            "data-test-selector": l.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.n.Alt,
                            fullWidth: !0
                        }, a.createElement(s.Q, {
                            type: s._49.Strong,
                            color: s.K.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? a.createElement(o.a, {
                        onClickOut: this.props.onClose
                    }, a.createElement(s._35, {
                        padding: 2,
                        background: s.n.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), a.createElement(s._8, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center
                    }, a.createElement(s._8, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(s.v, {
                        "data-test-selector": l.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(r.d)("Close", "ClipsModal")))))) : a.createElement(o.a, {
                        onClickOut: this.props.onClose
                    }, a.createElement(s._35, {
                        padding: 2,
                        background: s.n.Base,
                        className: "clip-modal"
                    }, a.createElement(s._35, {
                        "data-test-selector": l.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), a.createElement(s._35, {
                        "data-test-selector": l.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), a.createElement(s._8, {
                        display: s.R.Flex,
                        justifyContent: s._7.Center
                    }, a.createElement(s._8, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(s.v, {
                        "data-test-selector": l.CANCEL_BUTTON,
                        type: s.B.Text,
                        onClick: this.props.onClose
                    }, Object(r.d)("Cancel", "ClipsModal"))), a.createElement(s._8, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(s.v, {
                        "data-test-selector": l.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : s.B.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && a.createElement(s._10, {
                        delay: 0
                    })))))
                }, t
            }(a.Component),
            c = n("1OO3"),
            u = n("CSlQ"),
            m = 86400,
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        hasErrored: !1,
                        hasSucceeded: !1
                    }, t.renderTitle = function() {
                        return t.props.isTemporary ? a.createElement(s.Q, {
                            type: s._49.H5,
                            ellipsis: !0
                        }, Object(r.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : a.createElement(s.Q, {
                            type: s._49.H5,
                            ellipsis: !0
                        }, Object(r.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? a.createElement(s.Q, null, Object(r.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser")) : a.createElement(s.Q, null, Object(r.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.targetUser.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(r.d)("Timeout User", "ClipsModalBanUser") : Object(r.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(r.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(r.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                    }, t.banUser = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e = this.props.targetUser.login, t = this.props.isTemporary ? this.props.banUserMutation(e, m) : this.props.banUserMutation(e), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, t];
                                    case 2:
                                        return n.sent().banUserFromChatRoom.error ? this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }) : this.setState({
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
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(d, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(a.Component),
            g = Object(u.d)("ClipsModalBanUser")(Object(c.b)(function(e) {
                return {
                    channelID: e.broadcasterID
                }
            })(p)),
            v = n("7vx8"),
            h = n("wnjK");

        function f(e) {
            return Object(v.a)(h, e)
        }
        var k = n("LnKh"),
            b = (n("lTii"), this),
            y = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            _ = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onDeleteClick = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), this.props.data.clip ? [4, this.props.deleteClip(this.props.slug)] : [2];
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
                    }, n.state = y, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = [a.createElement(s.Q, {
                        key: "title",
                        type: s._49.H4
                    }, Object(r.d)("Delete This Clip", "ClipsModalDelete")), a.createElement(s._8, {
                        key: "message",
                        margin: {
                            top: 1
                        }
                    }, a.createElement(s.Q, {
                        type: s._49.P,
                        color: s.K.Alt2
                    }, Object(r.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                    if (!this.props.data.clip) return null;
                    var t = null;
                    this.props.data.clip.curator && (t = a.createElement("span", null, " • ", Object(r.d)("Clipped by {curator}", {
                        curator: this.props.data.clip.curator.login
                    }, "ClipsModalDelete")));
                    var n = a.createElement(s._35, {
                        display: s.R.Flex,
                        flexWrap: s.U.NoWrap
                    }, a.createElement(s._8, {
                        className: "clips-modal-delete__thumb",
                        margin: {
                            right: 1
                        }
                    }, a.createElement(s.k, {
                        ratio: s.l.Aspect16x9
                    }, a.createElement("img", {
                        src: this.props.data.clip.thumbnailURL
                    }))), a.createElement(s._8, null, a.createElement(s.Q, {
                        type: s._49.H5
                    }, this.props.data.clip.title), a.createElement(s.Q, {
                        color: s.K.Alt2
                    }, Object(r.d)("{created, date, medium}", {
                        created: new Date(this.props.data.clip.createdAt)
                    }, "ClipsModalDelete"), t), a.createElement(s.Q, {
                        color: s.K.Alt2
                    }, Object(r.d)("{viewCount, number} views", {
                        viewCount: this.props.data.clip.viewCount
                    }, "ClipsModalDelete"))));
                    return a.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: n,
                        buttonContent: Object(r.d)("Delete", "ClipsModalDelete"),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(r.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(a.Component),
            S = Object(v.a)(k)(f({
                props: function(e) {
                    return {
                        deleteClip: function(t) {
                            return i.__awaiter(b, void 0, void 0, function() {
                                var n;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: [t]
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return i.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                        case 2:
                                            throw n = i.sent(), r.j.error(n, "Failed to delete clip"), n;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })(_)),
            w = n("3zLD"),
            C = n("wqRA"),
            E = this,
            N = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            T = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.deleteAll = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
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
                    }, n.renderSuccess = function() {
                        return n.state.hasSucceeded ? Object(r.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                    }, n.renderFailure = function() {
                        return n.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                    }, n.state = N, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = a.createElement(s.Q, {
                        type: s._49.P
                    }, Object(r.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return a.createElement(d, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: a.createElement(s.Q, {
                            type: s._49.H4
                        }, Object(r.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(r.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(a.Component),
            O = Object(w.compose)(Object(u.d)("ClipsModalDeleteAll"), f({
                props: function(e) {
                    return {
                        deleteAllClips: function(t, n) {
                            return i.__awaiter(E, void 0, void 0, function() {
                                var a, o, s;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return i.trys.push([0, 6, , 7]), a = void 0, n ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        videoID: n
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return o = i.sent(), a = o.data, [3, 5];
                                        case 2:
                                            return t ? [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        broadcastID: t
                                                    }
                                                }
                                            })] : [3, 4];
                                        case 3:
                                            return o = i.sent(), a = o.data, [3, 5];
                                        case 4:
                                            throw new Error("Invalid broadcastID specified for deleteAllClips");
                                        case 5:
                                            return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(a.deleteClips.clips), [3, 7];
                                        case 6:
                                            throw s = i.sent(), r.j.error(s, "Failed to delete clips from VOD"), s;
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            }), Object(v.a)(C, {
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
                            slug: e.slug
                        }
                    }
                }
            }))(T),
            I = this,
            F = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            L = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderSuccess = function() {
                        return n.state.hasSucceeded ? Object(r.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, n.renderError = function() {
                        return n.state.hasErrored ? Object(r.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                    }, n.onDeleteClick = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
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
                    }, n.state = F, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a.createElement(s.Q, {
                            type: s._49.H4
                        }, Object(r.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = a.createElement(s.Q, {
                            type: s._49.P
                        }, Object(r.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return a.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(r.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: s.B.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(a.Component),
            R = f({
                props: function(e) {
                    return {
                        deleteClips: function() {
                            return i.__awaiter(I, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                                variables: {
                                                    input: {
                                                        slugs: e.ownProps.clipSlugs
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                        case 2:
                                            throw t = n.sent(), r.j.error(t, "Failed to delete clips"), t;
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
            return d
        }), n.d(t, "b", function() {
            return g
        }), n.d(t, "d", function() {
            return S
        }), n.d(t, "e", function() {
            return O
        }), n.d(t, "c", function() {
            return R
        })
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
    vKFS: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("RH2O"),
            s = n("HW6M"),
            l = n("nyge"),
            d = n("Odds"),
            c = (n("Lwev"), function(e) {
                var t, n = e.spriteDetails,
                    i = e.game.toLowerCase(),
                    r = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = i === l.a.CounterStrike, t)),
                    o = i === l.a.CounterStrike ? 40 : 20;
                return a.createElement(d._8, {
                    className: r
                }, a.createElement("div", {
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
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
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
                                        return t = n.sent(), r.j.error(t, "Failed to get metadata details."), [3, 4];
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
                    return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? a.createElement(d._8, {
                        className: "preview-card-appendage",
                        display: d.R.Flex
                    }, a.createElement(d._8, {
                        className: "preview-card-appendage__image-wrapper",
                        flexGrow: 0,
                        flexShrink: 0,
                        display: d.R.Flex,
                        alignItems: d.c.Center,
                        justifyContent: d._7.End
                    }, a.createElement("div", null, a.createElement(c, {
                        game: this.props.game,
                        spriteDetails: this.state.metadataDetails.spriteDetails
                    }))), a.createElement(d._35, {
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
                    }, a.createElement(d._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: d._11.Hidden
                    }, a.createElement(d.Q, {
                        ellipsis: !0
                    }, this.state.metadataDetails.name)), a.createElement(d._8, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(d.Q, null, this.state.metadataDetails.label)))) : null
                }, t
            }(a.Component));
        var p = Object(o.b)(function(e) {
                return {
                    leagueOfLegends: {
                        championsMap: e.directory.leagueOfLegends.championsMap
                    }
                }
            })(m),
            g = (n("YVIF"), function(e) {
                var t = a.createElement(d._35, {
                    className: "preview-card-iconic-image__wrapper",
                    borderRadius: d.t.Small,
                    overflow: d._11.Hidden
                }, a.createElement(d.k, {
                    ratio: e.aspect || d.l.BoxArt,
                    align: d.a.Center
                }, a.createElement(d.N, i.__assign({}, e.imageProps))));
                return e.linkTo && (t = a.createElement(d.O, {
                    to: e.linkTo,
                    onClick: e.onClick
                }, t)), t
            });
        g.displayName = "PreviewCardIconicImage";
        n("IJO1");
        var v, h = function(e) {
                var t = .5,
                    n = null;
                return "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachBottom: !0,
                    fullWidth: !0
                }, a.createElement(d._18, {
                    size: d._20.Small,
                    value: e.progressBarPercent,
                    mask: !0
                })), t = 1), a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    fullWidth: !0,
                    fullHeight: !0,
                    className: "preview-card-overlay"
                }, n, a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    margin: 1,
                    "data-test-selector": "top-left-selector"
                }, e.topLeft), a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    attachRight: !0,
                    margin: 1,
                    "data-test-selector": "top-right-selector"
                }, e.topRight), a.createElement(d._8, {
                    position: d._15.Absolute,
                    attachBottom: !0,
                    attachLeft: !0,
                    margin: {
                        x: .5,
                        y: t
                    },
                    "data-test-selector": "bottom-left-selector"
                }, e.bottomLeft), a.createElement(d._8, {
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
                var t = e.icon && a.createElement(d._8, {
                    display: d.R.Flex
                }, a.createElement(d._24, {
                    asset: e.icon,
                    width: 14,
                    height: 14
                }));
                return e.withBackground ? a.createElement(d._35, {
                    alignItems: d.c.Center,
                    background: d.n.Overlay,
                    borderRadius: d.t.Small,
                    className: "preview-card-stat",
                    color: d.K.Overlay,
                    display: d.R.Flex,
                    fontSize: d.V.Size6,
                    justifyContent: d._7.Center
                }, t, a.createElement(d.Q, null, e.value)) : a.createElement(d._35, {
                    className: "preview-card-stat",
                    color: d.K.Overlay,
                    display: d.R.Flex,
                    padding: {
                        x: .5
                    }
                }, t, a.createElement(d.Q, null, e.value))
            }),
            k = n("vKYI"),
            b = (n("jpZi"), 300),
            y = 5e3,
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
                        }, y)
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
                    }), a.createElement("div", i.__assign({}, e, {
                        onClick: this.props.onClick
                    }), this.renderLoadingSpinner(), a.createElement(d._35, {
                        background: d.n.Alt2
                    }, a.createElement(d.k, {
                        ratio: this.props.aspectRatio
                    }, this.renderImage())))
                }, t.prototype.renderImage = function() {
                    var e, t, n = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                        r = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e["preview-card-thumbnail__image--hidden"] = this.shouldShowLiveVideoPreview() && this.state.isLiveVideoPreviewLoaded, e));
                    return this.shouldShowLiveVideoPreview() ? [a.createElement("div", {
                        key: "player-key",
                        className: s((t = {}, t["preview-card-thumbnail__image--hidden"] = !this.state.isLiveVideoPreviewLoaded, t))
                    }, a.createElement(k.a, {
                        channelLogin: this.props.liveChannelLogin || void 0,
                        onPlayerPlaying: this.onLivePreviewLoaded
                    })), a.createElement("div", {
                        key: "image-key",
                        className: r
                    }, a.createElement(d.N, i.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": _
                    })))] : n && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                        className: r
                    }, a.createElement(d.N, i.__assign({}, this.props.animatedImageProps, {
                        onLoad: this.onImageLoad,
                        onError: this.onImageLoadError,
                        "data-test-selector": _
                    }))) : a.createElement("div", {
                        className: r
                    }, a.createElement(d.N, i.__assign({}, this.props.staticImageProps, {
                        "data-test-selector": _
                    })))
                }, t.prototype.renderLoadingSpinner = function() {
                    if (this.shouldShowLiveVideoPreview() && !this.state.isLiveVideoPreviewLoaded) return a.createElement(d._35, {
                        attachRight: !0,
                        attachTop: !0,
                        background: d.n.Overlay,
                        borderRadius: d.t.Small,
                        color: d.K.OverlayAlt,
                        margin: .5,
                        padding: .5,
                        position: d._15.Absolute,
                        zIndex: d._62.Above
                    }, a.createElement(d._10, {
                        fillContent: !0,
                        inheritColor: !0,
                        size: d._33.Small,
                        delay: 0
                    }))
                }, t
            }(a.Component),
            w = (n("ea7N"), function(e) {
                var t = null;
                return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                    return a.createElement(d._8, {
                        key: t,
                        "data-test-selector": "preview-card-titles__subtitle"
                    }, a.createElement(d.Q, {
                        color: d.K.Alt,
                        ellipsis: !0
                    }, "string" == typeof e ? e : a.createElement(d.O, {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: d.P.Inherit
                    }, e.text)))
                })), a.createElement("div", null, a.createElement(d.O, {
                    to: e.linkTo,
                    onClick: e.onClick,
                    type: d.P.Inherit,
                    "data-test-selector": "preview-card-titles__primary-link"
                }, a.createElement(d.Q, {
                    type: d._49.H3,
                    fontSize: d.V.Size5,
                    lines: 1,
                    bold: !0,
                    ellipsis: !0
                }, e.title)), a.createElement(d._8, {
                    className: "preview-card-titles__subtitle-wrapper"
                }, t))
            }),
            C = n("IOwa"),
            E = n("mi6k"),
            N = n("Tg4T");

        function T(e) {
            return void 0 !== e.streamType
        }

        function O(e) {
            return void 0 !== e.watchedProgressPercent
        }

        function I(e) {
            return void 0 !== e.clipCreatedByChannelLogin
        }! function(e) {
            e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
        }(v || (v = {}));
        var F = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement("div", {
                    className: "preview-card"
                }, a.createElement(d._8, {
                    position: d._15.Relative
                }, O(this.props) && a.createElement(N.a, {
                    videoID: this.props.videoID || "",
                    restriction: this.props.restriction,
                    attachTop: !0
                }), a.createElement(d.O, {
                    to: this.props.thumbnailLinkTo || this.props.linkTo,
                    onClick: this.props.onThumbnailClick || this.props.onClick
                }, this.props.thumbnailImageProps && a.createElement(S, {
                    staticImageProps: this.props.thumbnailImageProps,
                    animatedImageProps: O(this.props) && this.props.animatedImageProps || void 0,
                    liveChannelLogin: T(this.props) && this.props.enableLivePreview ? this.props.channelLogin : null
                }), this.renderOverlay())), a.createElement(d._8, {
                    display: d.R.Flex,
                    flexWrap: d.U.NoWrap,
                    margin: {
                        top: 1
                    }
                }, a.createElement(d._8, {
                    flexGrow: 0,
                    flexShrink: 0
                }, this.renderIconicImage()), a.createElement(d._8, {
                    flexGrow: 1,
                    flexShrink: 1,
                    overflow: d._11.Hidden
                }, this.renderTitles())), this.renderAppendages())
            }, t.prototype.renderOverlay = function() {
                return T(this.props) ? a.createElement(h, {
                    topLeft: a.createElement(C.a, {
                        type: this.props.streamType,
                        hosting: !!this.props.hostedByChannelLogin
                    }),
                    topRight: void 0,
                    bottomLeft: a.createElement(f, {
                        value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                            viewerCount: this.props.currentViewerCount
                        }, "VideoPreviewCard")
                    }),
                    bottomRight: void 0
                }) : O(this.props) ? a.createElement(h, {
                    topLeft: a.createElement(f, {
                        value: Object(E.b)(this.props.durationInSeconds),
                        icon: d._25.GlyphArrRight,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: a.createElement(f, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: a.createElement(f, {
                        value: Object(r.c)(new Date(this.props.datePublished), "medium")
                    }),
                    progressBarPercent: this.props.watchedProgressPercent
                }) : I(this.props) ? a.createElement(h, {
                    topLeft: a.createElement(f, {
                        value: Object(E.b)(this.props.durationInSeconds),
                        icon: d._25.Clip,
                        withBackground: !0
                    }),
                    topRight: void 0,
                    bottomLeft: a.createElement(f, {
                        value: this.getViewCountLabel()
                    }),
                    bottomRight: a.createElement(f, {
                        value: Object(r.c)(new Date(this.props.datePublished), "medium")
                    })
                }) : void 0
            }, t.prototype.getViewCountLabel = function() {
                return O(this.props) || I(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                    viewerCount: this.props.viewCount
                }, "VideoPreviewCard") : ""
            }, t.prototype.renderIconicImage = function() {
                return this.props.context === v.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(d._8, {
                    margin: {
                        right: 1
                    }
                }, a.createElement(g, {
                    imageProps: this.props.gameBoxArtImageProps,
                    linkTo: this.props.gameBoxArtImageLinkTo || this.props.gameTitleLinkTo,
                    onClick: this.props.gameTitleOnClick,
                    aspect: d.l.BoxArt
                })) : (this.props.context === v.SingleGameList || this.props.context === v.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(d._8, {
                    margin: {
                        right: 1
                    }
                }, a.createElement(g, {
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
                return I(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? e.push({
                    text: Object(r.d)("Clipped by {userName}", {
                        userName: this.props.clipCreatedByChannelLogin || ""
                    }, "VideoPreviewCard"),
                    linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                    onClick: this.props.clipCreatedByChannelLoginOnClick
                }) : this.props.context !== v.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && e.push({
                    text: this.props.gameTitle,
                    linkTo: this.props.gameTitleLinkTo,
                    onClick: this.props.gameTitleOnClick
                }), a.createElement(w, {
                    title: this.props.title,
                    onClick: this.props.onVideoTitleClick || this.props.onClick,
                    linkTo: this.props.videoTitleLinkTo || this.props.linkTo,
                    subtitles: e
                })
            }, t.prototype.renderAppendages = function() {
                if (this.props.playerMetadata && this.props.playerMetadataGame) return a.createElement(p, {
                    streamMetadata: this.props.playerMetadata,
                    game: this.props.playerMetadataGame
                })
            }, t
        }(a.Component);
        n.d(t, "b", function() {
            return v
        }), n.d(t, "a", function() {
            return F
        })
    },
    vKYI: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("BwgW"),
            r = n("GiK3"),
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
                return r.createElement("div", {
                    className: "video-player",
                    "data-test-selector": "thumbnail-video-player"
                }, r.createElement("div", {
                    className: "video-player__container",
                    ref: this.attachRef
                }))
            }, t.prototype.componentWillUnmount = function() {
                var e = this;
                this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), window.removeEventListener("beforeunload", function() {
                    return e.resetVolume()
                }), this.resetVolume(), this.player && (this.player.removeEventListener(d.a.PlayerReady, this.onPlayerReady), this.player.removeEventListener(l.a.Play, this.onPlayerPlay), this.player.removeEventListener(l.a.Playing, this.onPlayerPlaying), a.extensionService.unregisterPlayer(), this.player.destroy())
            }, t.prototype.initializePlayer = function() {
                var e = c;
                this.props.channelLogin && (e.channel = this.props.channelLogin);
                var t = new window.Twitch.Player(this.playerRef, e);
                this.player = t, t.addEventListener(d.a.PlayerReady, this.onPlayerReady), t.addEventListener(l.a.Play, this.onPlayerPlay), t.addEventListener(l.a.Playing, this.onPlayerPlaying), a.extensionService.registerPlayer(this.player)
            }, t.prototype.resetVolume = function() {
                this.userVolumeSetting && window.localStorage.setItem("volume", this.userVolumeSetting), this.userMuteSetting && window.localStorage.setItem("muted", this.userMuteSetting)
            }, t.tagInjected = !1, t = n = i.__decorate([Object(o.d)("LiveChannelPreviewCard")], t);
            var n
        }(r.Component);
        n.d(t, !1, function() {
            return "thumbnail-video-player"
        }), n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return m
        })
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
    y9X2: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "user"
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
                            value: "broadcastSettings"
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
                            }]
                        }
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
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 103
            }
        };
        n.loc.source = {
            body: "fragment user on User {\nid\nbroadcastSettings {\nid\ntitle\n}\ndisplayName\nlogin\nprofileImageURL(width:70)\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    yF5J: function(e, t) {}
});
//# sourceMappingURL=pages.front-a48d6db92b93e460da2fe0cf33794c44.js.map