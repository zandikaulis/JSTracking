(window.webpackJsonp = window.webpackJsonp || []).push([
    [197], {
        "/2Fp": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "MysteryGiftGiver"
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
                body: "query MysteryGiftGiver($id: ID!) {\nuser(id: $id) {\nid\ndisplayName\nlogin\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Gnts: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("fvjX"),
                a = n("x7UT"),
                s = n("0Log"),
                u = n("/aPz"),
                p = n("/7QA"),
                d = n("V6PS"),
                c = n.n(d),
                l = n("yR8l"),
                m = n("QVaV"),
                y = [5, 10, 20, 30, 40, 50, 60];

            function f(e) {
                var t = p.b.get("community_sub_gifting_banner_timeouts", y);
                return t.length !== y.length && (t = y), e < 5 ? t[0] : e <= 10 ? t[1] : e <= 30 ? t[2] : e <= 50 ? t[3] : e <= 70 ? t[4] : e <= 90 ? t[5] : t[6]
            }
            var h, g = n("GnwI"),
                b = n("0WFu"),
                v = n("Ue10"),
                C = (n("xYER"), {
                    "data-test-selector": "countdown-fill-width"
                }),
                G = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this,
                            t = this.props.startPolling || setInterval;
                        this.intervalID = t(function() {
                            return e.forceUpdate()
                        }, 1e3)
                    }, t.prototype.componentWillUnmount = function() {
                        clearInterval(this.intervalID)
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.getRemainingTime() <= 0 && this.props.onCountdownEnd()
                    }, t.prototype.render = function() {
                        var e = this.countdownPercentage + "%";
                        return r.createElement("div", {
                            className: "persistent-countdown-bar"
                        }, r.createElement("div", i.__assign({
                            className: "persistent-countdown-bar__fill",
                            style: {
                                width: e
                            }
                        }, C)))
                    }, Object.defineProperty(t.prototype, "countdownPercentage", {
                        get: function() {
                            return this.props.getRemainingTime() / this.props.totalCountdownTime * 100
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.PureComponent),
                k = n("/2Fp"),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.bannerDuration = 1e3 * f(t.props.mysteryGiftCount), t.start = Date.now(), t.getBannerText = function() {
                            var e = null,
                                n = null;
                            t.props.data && t.props.data.user && (t.props.data.user.displayName && (e = t.props.data.user.displayName), t.props.data.user.login && (n = t.props.data.user.login));
                            var i = Object(b.b)(t.props.tier) || "";
                            return n || e ? Object(p.d)("{mysteryGiftCount, plural,          one {{displayName} is giving out {mysteryGiftCount} Tier {tier} Community Sub Gift!}          other {{displayName} is giving out {mysteryGiftCount} Tier {tier} Community Sub Gifts!}}", {
                                displayName: r.createElement(v.W, {
                                    bold: !0,
                                    color: v.O.Link,
                                    type: v.Wb.Span
                                }, Object(m.a)(n, e)),
                                mysteryGiftCount: t.props.mysteryGiftCount,
                                tier: i
                            }, "MysteryGiftChatBanner") : Object(p.d)("{mysteryGiftCount, plural,        one {An anonymous gifter is giving out {mysteryGiftCount} Tier {tier} Community Sub Gift!}        other {An anonymous gifter is giving out {mysteryGiftCount} Tier {tier} Community Sub Gifts!}}", {
                                mysteryGiftCount: t.props.mysteryGiftCount,
                                tier: i
                            }, "MysteryGiftChatBanner")
                        }, t.getRemainingTime = function() {
                            return t.start + t.bannerDuration - Date.now()
                        }, t.handleCountdownEnd = function() {
                            t.props.onCountdownEnd(t.props.uuid)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.mysteryGiftCount !== e.mysteryGiftCount && (this.bannerDuration = 1e3 * f(this.props.mysteryGiftCount), this.start = Date.now())
                    }, t.prototype.render = function() {
                        return r.createElement(r.Fragment, null, r.createElement(v.Ya, {
                            alignItems: v.f.Center,
                            display: v.X.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, r.createElement(v.Ya, {
                            padding: {
                                right: 1
                            }
                        }, r.createElement(v.S, {
                            src: c.a,
                            alt: Object(p.d)("Mystery gifts being given out!", "MysteryGiftChatBanner")
                        })), r.createElement(v.W, null, this.getBannerText())), r.createElement(G, {
                            getRemainingTime: this.getRemainingTime,
                            onCountdownEnd: this.handleCountdownEnd,
                            totalCountdownTime: this.bannerDuration
                        }))
                    }, t
                }(r.Component),
                D = Object(o.compose)(Object(l.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                id: e.userID
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.userID
                    }
                }), Object(g.b)("MysteryGiftChatBanner"))(w),
                T = function(e) {
                    return 0 === e.purchases.length ? null : r.createElement(v.Fb, {
                        background: v.r.Base,
                        fullWidth: !0
                    }, e.purchases.slice(0, 2).map(function(t) {
                        return r.createElement(D, {
                            key: "MysteryGiftChatBanner-" + t.uuid,
                            mysteryGiftCount: t.count,
                            onCountdownEnd: e.handleCountdownEnd,
                            tier: t.tier,
                            userID: t.user_id,
                            uuid: t.uuid
                        })
                    }))
                },
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            lastMessageUUID: null,
                            purchases: []
                        }, t.handleCountdownEnd = function(e) {
                            t.setState(function(t) {
                                return {
                                    purchases: t.purchases.filter(function(t) {
                                        return t.uuid !== e
                                    })
                                }
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        var e = this.props.pubsub.status[Object(u.r)(this.props.channelID)];
                        !e || e.isSubscribing || e.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.pubsub.messages.purchase || null;
                        t && this.setState(function(e) {
                            if (!(t.uuid !== e.lastMessageUUID)) return e;
                            var n = i.__assign({}, t, {
                                humanizedTier: Object(b.b)(t.tier) || 0
                            });
                            return {
                                lastMessageUUID: n.uuid,
                                purchases: e.purchases.concat([n]).sort(function(e, t) {
                                    return t.humanizedTier === e.humanizedTier ? t.count - e.count : t.humanizedTier - e.humanizedTier
                                })
                            }
                        })
                    }, t.prototype.render = function() {
                        return r.createElement(T, {
                            handleCountdownEnd: this.handleCountdownEnd,
                            purchases: this.state.purchases
                        })
                    }, t
                }(r.Component),
                N = Object(o.compose)(Object(a.a)([{
                    mapMessageTypesToProps: (h = {}, h[s.PubsubMessageType.MysteryGiftPurchase] = "purchase", h),
                    topic: function(e) {
                        return Object(u.r)(e.channelID)
                    }
                }]), Object(g.b)("MysteryGiftChatBannerQueue"))(E);
            n.d(t, "MysteryGiftChatBannersQueueContainer", function() {
                return E
            }), n.d(t, "MysteryGiftChatBannerQueue", function() {
                return N
            })
        },
        V6PS: function(e, t, n) {
            e.exports = n.p + "assets/community-gift-cf438a1a78c449fd2d4a.svg"
        },
        xYER: function(e, t, n) {}
    }
]);