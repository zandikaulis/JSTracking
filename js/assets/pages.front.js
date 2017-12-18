webpackJsonp([44], {
    "+e5i": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FriendRequestsNotification_Clear"
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
                            value: "clearUnreadFriendRequests"
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
                end: 87
            }
        };
        n.loc.source = {
            body: "mutation FriendRequestsNotification_Clear {\nclearUnreadFriendRequests {\nuser {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "/+to": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("TToO"),
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("Us7i"),
            l = n("QG7y"),
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
                                return void((i = n.slotRef.querySelector(c)) && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === l.b.directory.rectangle) {
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
            m = Object(i.a)(function(e) {
                return {
                    trackingSet: e.ads.trackingSet
                }
            })(u);
        n.d(t, "a", function() {
            return m
        })
    },
    "/0cZ": function(e, t, n) {
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
                end: 271
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/feed/models/feed-fragment.gql"\n#import "twilight/features/feed/models/user-fragment.gql"\nquery Pulse($limit: Int $cursor: Cursor) {\ncurrentUser {\n...feedUser\nisConnectedToTwitter\npulseFeed {\nitems(first: $limit after: $cursor) {\n...feed\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("VMA7").definitions)), a.definitions = a.definitions.concat(i(n("Lq4d").definitions)), e.exports = a
    },
    "/7C1": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        }), t.e = function(e) {
            return {
                type: i,
                player: e
            }
        }, t.f = function() {
            return {
                type: a
            }
        }, t.d = function() {
            return {
                type: r
            }
        };
        var i = "carouselPlayer.CAROUSEL_REGISTERED",
            a = "carouselPlayer.CAROUSEL_UNREGISTERED",
            r = "carouselPlayer.CAROUSEL_PAUSED"
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
    "1XdE": function(e, t) {},
    "24qG": function(e, t) {},
    "2Nqs": function(e, t) {},
    "4mYF": function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("mi6k"),
            l = n("CSlQ"),
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
                            l = e.thumbnailURL,
                            u = e.type,
                            m = e.viewCount,
                            p = a && a > 0 ? Object(s.a)(a) : "";
                        return r.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": d
                        }, r.createElement(c.j, {
                            ratio: c.k.Aspect16x9
                        }, r.createElement(c.U, null, r.createElement(c.P, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: c._3.Absolute
                        }, r.createElement("img", {
                            src: l
                        })), r.createElement(c.U, {
                            className: "embed-card__overlay",
                            position: c._3.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(c.U, {
                            className: "embed-card__play",
                            display: c.H.Flex,
                            justifyContent: c.T.Center,
                            position: c._3.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(c._9, {
                            asset: c._10.Play,
                            width: 50,
                            height: 50
                        })), r.createElement(c.U, {
                            position: c._3.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && r.createElement(c._22, null, Object(o.c)(new Date(n), "medium")), r.createElement(c.U, null, u === i.Stream && r.createElement(c.U, {
                            display: c.H.Inline,
                            margin: {
                                right: .5
                            }
                        }, r.createElement(c.W, null)), m && r.createElement("span", null, t.getFormattedViewCount(m, u)))), r.createElement(c.U, {
                            position: c._3.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, p && r.createElement(c.U, null, r.createElement(c._22, null, p)))), r.createElement(c._18, {
                            position: c._3.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: c.L.Size5
                        }, u === i.Stream && r.createElement(c._0, {
                            label: Object(o.d)("Live", "EmbedOverlayPill"),
                            type: c._1.Live
                        }), u === i.Video && r.createElement(c._0, {
                            label: Object(o.d)("Video", "EmbedOverlayPill"),
                            type: c._1.Overlay
                        }), u === i.Clip && r.createElement(c._0, {
                            label: Object(o.d)("Clip", "EmbedOverlayPill"),
                            type: c._1.Overlay
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
            m = Object(l.c)("EmbedOverlay")(u);
        n.d(t, !1, function() {
            return d
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return m
        })
    },
    "65au": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "6Agf": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
        }(i || (i = {}))
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
            r.m.track(e, a.__assign({}, t, n))
        }
    },
    "6yAw": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_CurrentUser"
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
                end: 56
            }
        };
        n.loc.source = {
            body: "query TopNav_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "73jS": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SetSessionStatus"
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
                                value: "SetSessionStatusInput"
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
                            value: "setSessionStatus"
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
                                    value: "setAgainInSeconds"
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
            body: "mutation ChannelPage_SetSessionStatus($input: SetSessionStatusInput!) {\nsetSessionStatus(input: $input) {\nsetAgainInSeconds\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "7L7x": function(e, t) {},
    "7LBo": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "TopNav_User_UpdateVisibility"
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
                                value: "UpdateVisibilityInput"
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
                            value: "updateVisibility"
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
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "availability"
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
                end: 134
            }
        };
        n.loc.source = {
            body: "mutation TopNav_User_UpdateVisibility($input: UpdateVisibilityInput!) {\nupdateVisibility(input: $input) {\nuser {\nid\navailability\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "7Nlu": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("7vx8"),
            s = n("5kgt"),
            l = n("Odds"),
            c = n("rZAm"),
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(l.S, i.__assign({
                        onClick: this.props.onClick,
                        linkTo: this.props.linkTo,
                        hover: this.props.hover,
                        tabIndex: -1,
                        key: this.props.id
                    }, Object(s.a)(this.props)), a.createElement(l.U, {
                        className: "search-game-result-card",
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, a.createElement(l.A, {
                        row: !0
                    }, a.createElement(l.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.data && !this.props.data.loading && this.props.data.game ? this.props.data.game.boxArtURL : r.a.defaultBoxArtURL,
                        size: l.D.Size4,
                        aspect: l.k.BoxArt
                    }), a.createElement(l.B, null, a.createElement(l.P, {
                        padding: {
                            x: 1
                        }
                    }, a.createElement(l._22, {
                        type: l._27.H5,
                        ellipsis: !0
                    }, this.props.title))))))
                }, t = i.__decorate([Object(o.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                })], t)
            }(a.Component);
        n.d(t, "a", function() {
            return d
        })
    },
    "86JD": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("iOr9"),
            s = n("bZTi"),
            l = n("o8Pq"),
            c = n("bNhH"),
            d = n("Wjt1"),
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
                        return Object(c.placeholderFeaturedBroadcasters)(e.renderContext)
                    }
                };
                return "en" === r.n.intl.getLanguageCode() ? a.createElement(o.a, i.__assign({}, t)) : a.createElement(l.FeaturedBroadcasters, {
                    renderContext: e.renderContext
                })
            };
        n.d(t, "a", function() {
            return d.FeaturedBroadcastersRenderContext
        }), n.d(t, "b", function() {
            return u
        })
    },
    "8PKe": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("TToO"),
            r = n("OAwv"),
            o = n("U7vG"),
            s = n("6sO2"),
            l = n("+Znq"),
            c = n("7vx8"),
            d = n("S1vB"),
            u = n("CSlQ"),
            m = n("Odds"),
            p = (n("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m.U, null, o.createElement(m._18, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: m.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o.createElement(m._22, {
                        bold: !0,
                        type: m._27.H6
                    }, Object(s.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return o.createElement(m._18, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: m.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o.createElement(m.U, {
                        fullWidth: !0,
                        display: m.H.Flex,
                        alignItems: m.c.Center
                    }, o.createElement(m.U, {
                        flexGrow: 1
                    }, o.createElement(m._22, {
                        bold: !0,
                        type: m._27.H6
                    }, Object(s.d)("New Prime Loot", "PrimeOfferHeader"))), o.createElement(m.U, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: m._23.Center
                    }, o.createElement(m._18, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: m.m.Base,
                        color: m.F.Base,
                        display: m.H.Flex,
                        alignItems: m.c.Center,
                        justifyContent: m.T.Center
                    }, o.createElement(m._22, null, e.toString())))))
                }, t = a.__decorate([Object(u.c)("PrimeOfferHeader")], t)
            }(o.Component)),
            f = n("zCIC"),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(s.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: o.createElement(m._22, {
                            italic: !0,
                            type: m._27.Span
                        }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                        smite: o.createElement(m._22, {
                            italic: !0,
                            type: m._27.Span
                        }, Object(s.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return o.createElement(m.U, {
                        className: "prime-empty",
                        margin: 2
                    }, o.createElement(m.U, {
                        textAlign: m._23.Center,
                        margin: 2
                    }, o.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), o.createElement(m._22, {
                        type: m._27.P,
                        bold: !0
                    }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), o.createElement("div", null, e))
                }, t = a.__decorate([Object(u.c)("PrimeEmpty")], t)
            }(o.Component),
            v = n("lfvs"),
            h = n("oIkB"),
            k = n("R0Kh"),
            y = (n("w/8h"), n("sq7i")),
            b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m.U, {
                        className: "prime-claim-button"
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        n = o.createElement(m.u, {
                            fullWidth: !0,
                            state: this.props.claiming ? m.y.Loading : m.y.Default,
                            disabled: this.props.claiming,
                            onClick: this.props.claimCallback,
                            "data-a-target": "prime-claim-button"
                        }, t);
                    return e.offerType === k.a.EXTERNAL_OFFER ? o.createElement(m.u, {
                        fullWidth: !0,
                        linkTo: e.offerLinkUri,
                        targetBlank: !0
                    }, t) : o.createElement(m.U, {
                        position: m._3.Relative
                    }, n)
                }, t.prototype.getButtonText = function() {
                    return this.props.offerType === k.a.CLAIM_CODE ? Object(s.d)("Get Code", "PrimeClaimButton") : this.props.offerType === k.a.EXTERNAL_OFFER ? Object(s.d)("Learn More", "PrimeClaimButton") : Object(s.d)("Claim Offer", "PrimeClaimButton")
                }, t = a.__decorate([Object(c.a)(y), Object(u.c)("PrimeClaimButton")], t)
            }(o.Component),
            S = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.toggleShowDescription = function() {
                        t.setState({
                            showDescription: !t.state.showDescription
                        })
                    }, t.state = {
                        showDescription: !1
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m.U, {
                        className: "prime-claim-description",
                        margin: {
                            top: 1
                        }
                    }, o.createElement(m.u, {
                        fullWidth: !0,
                        type: m.z.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText()), this.getDescriptionBlock())
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimDescription") : Object(s.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function() {
                    var e = null;
                    return this.state.showDescription && (e = o.createElement(m._18, {
                        className: "prime-claim-description__body",
                        background: m.m.Alt2,
                        border: !0
                    }, o.createElement(m.U, {
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, o.createElement(v, {
                        source: this.props.description || ""
                    })))), e
                }, t = a.__decorate([Object(u.c)("PrimeClaimDescription")], t)
            }(o.Component),
            _ = n("Hs3O"),
            N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.getLink = function() {
                    return this.props.externalUri ? this.props.externalUri : Object(_.d)(_.c, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return o.createElement(m.U, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(m.u, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0
                    }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton")))
                }, t = a.__decorate([Object(u.c)("PrimeUpsellButton")], t)
            }(o.Component),
            E = n("e2wA"),
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m.U, {
                        className: "prime-claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.hasPrime ? o.createElement(b, {
                        offerType: this.props.offerType,
                        offerId: this.props.offerId,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        offerLinkUri: this.props.externalUri
                    }) : o.createElement(N, {
                        externalUri: this.props.externalUri
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    return this.props.offerType === k.a.EXTERNAL_OFFER ? null : o.createElement(S, {
                        description: this.props.offerDescription
                    })
                }, t = a.__decorate([Object(c.a)(E), Object(u.c)("PrimeInstructions")], t)
            }(o.Component),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m._18, {
                        background: m.m.Alt2,
                        display: m.H.Flex,
                        justifyContent: m.T.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: m._23.Center
                    }, o.createElement(m._22, {
                        type: m._27.H4,
                        align: m._37.Middle
                    }, o.createElement(m._18, {
                        padding: 1,
                        display: m.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: m.K.NoWrap,
                        alignItems: m.c.Center,
                        fontSize: this.props.fontSize ? this.props.fontSize : m.L.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, o.createElement(m.U, {
                        margin: {
                            right: 1
                        },
                        display: m.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: m.K.NoWrap,
                        alignItems: m.c.Center
                    }, o.createElement(m._9, {
                        asset: m._10.DeadGlitch,
                        type: m._11.Alert,
                        width: 20,
                        height: 20
                    })), Object(s.d)("Something has gone wrong. Please try again later.", "PrimeError"))))
                }, t = a.__decorate([Object(u.c)("PrimeError")], t)
            }(o.Component),
            O = (n("nFc2"), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.setRef = function(e) {
                        t.setState({
                            clipboardInput: e
                        })
                    }, t.copy = function() {
                        var e;
                        try {
                            t.state.clipboardInput && t.state.clipboardInput.select(), e = document.execCommand("copy")
                        } catch (t) {
                            e = !1
                        }
                        return t.setState({
                            copied: e
                        }), e
                    }, t.state = {
                        copied: !1,
                        clipboardInput: void 0
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.state.copied ? Object(s.d)("copied", "CopyButton") : Object(s.d)("copy", "CopyButton");
                    return o.createElement(m.U, {
                        className: "copy-button copy-btn",
                        display: m.H.Flex
                    }, o.createElement(m.P, {
                        className: "copy-button__btn"
                    }, o.createElement(m.u, {
                        onClick: this.copy,
                        type: this.state.copied ? m.z.Success : m.z.Default
                    }, e)), o.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t = a.__decorate([Object(u.c)("CopyButton")], t)
            }(o.Component)),
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.setState({
                            value: e.currentTarget.value,
                            copied: !1
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillMount = function() {
                    this.props.initialText && this.setState({
                        value: this.props.initialText,
                        copied: !1
                    })
                }, t.prototype.render = function() {
                    return this.state && this.state.value ? o.createElement(m.U, {
                        className: "copyable-item",
                        display: m.H.Flex,
                        flexGrow: 1
                    }, o.createElement(m.U, {
                        flexGrow: 1
                    }, o.createElement(m.Q, {
                        type: m.R.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), o.createElement(m.U, null, o.createElement(O, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = a.__decorate([Object(u.c)("CopyableItem")], t)
            }(o.Component),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m._18, {
                        className: "prime-claim-instructions",
                        background: m.m.Alt2,
                        border: !0,
                        padding: 1,
                        fontSize: m.L.Size6
                    }, o.createElement(m._36, null, o.createElement(v, {
                        source: this.props.claimInstructions || "",
                        escapeHtml: !0
                    })))
                }, t = a.__decorate([Object(u.c)("PrimeClaimInstructions")], t)
            }(o.Component),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m.U, {
                        className: "prime-redeem",
                        margin: {
                            top: 1
                        }
                    }, this.getCodeOrConfirmation(), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function() {
                    return this.props.code && this.props.deliveryMethod === k.a.CLAIM_CODE ? o.createElement(m.U, null, o.createElement(U, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    })) : o.createElement(m._18, {
                        background: m.m.Alt2,
                        display: m.H.Flex,
                        justifyContent: m.T.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(m._22, {
                        type: m._27.H4,
                        align: m._37.Middle
                    }, o.createElement(m.U, {
                        padding: 1,
                        display: m.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: m.K.NoWrap,
                        alignItems: m.c.Center,
                        "data-a-target": "prime-redeem-check"
                    }, o.createElement(m.U, {
                        margin: {
                            right: 1
                        },
                        display: m.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: m.K.NoWrap,
                        alignItems: m.c.Center
                    }, o.createElement(m._9, {
                        asset: m._10.Check,
                        type: m._11.Success,
                        width: 20,
                        height: 20
                    })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t.prototype.getPrimeClaimInstructions = function() {
                    if (this.props.claimInstructions) return o.createElement(F, {
                        claimInstructions: this.props.claimInstructions || ""
                    })
                }, t = a.__decorate([Object(u.c)("PrimeRedeem")], t)
            }(o.Component),
            T = n("el3o"),
            D = (n("v+rJ"), n("rM0q")),
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        claimed: !1,
                        claiming: !1,
                        error: !1,
                        claimData: ""
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var n = e.content || {},
                            i = e.self || {
                                claimData: ""
                            },
                            a = (t.props.data || {}).currentUser || {};
                        if (t.state.error) return o.createElement(w, {
                            fontSize: m.L.Size6
                        });
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && a && a.hasPrime) {
                            var r = t.state.claimData || i.claimData;
                            return o.createElement(x, {
                                claimInstructions: e.claimInstructions,
                                code: r,
                                deliveryMethod: e.deliveryMethod
                            })
                        }
                        return o.createElement(C, {
                            offerId: e.id,
                            offerDescription: e.description || "",
                            offerType: e.deliveryMethod || "",
                            externalUri: n.externalURL || "",
                            claimCallback: t.claimOffer,
                            claiming: t.state.claiming
                        })
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser.id) {
                            var i = n.currentUser.id,
                                a = t.props.offer,
                                r = Object(h.a)({
                                    offerID: a.id
                                });
                            t.props.claimPrimeOffer(r).then(function(e) {
                                var n = ((e.data || {}).claimPrimeOffer || {}).self || {};
                                n && a && t.setState({
                                    claimData: n.claimData
                                }), t.markAsClaimedInLocalStorage(i)
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: !0
                                })
                            })
                        }
                    }, t.markAsClaimedInLocalStorage = function(e) {
                        var n = t.props.offer,
                            i = k.b(n.id, e),
                            a = k.c();
                        a.push(i), k.f(a), t.setState({
                            claiming: !1,
                            claimed: !0,
                            error: !1
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.offer,
                        t = this.props.isLast || !1;
                    if (e) {
                        var n = e.content || {},
                            i = n.game || {},
                            a = n.categories || [];
                        return o.createElement(m._18, {
                            className: "prime-offer",
                            alignItems: m.c.Center,
                            borderBottom: !t,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, o.createElement(m.U, {
                            className: "prime-offer__title",
                            padding: {
                                y: .5
                            }
                        }, o.createElement(v, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), o.createElement("img", {
                            src: e.imageURL
                        }), o.createElement(m.U, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, o.createElement(m._22, {
                            type: m._27.P
                        }, i.name, " ", a[0])), o.createElement(m.U, {
                            className: "prime-offer__publisher"
                        }, o.createElement(m._22, {
                            type: m._27.P,
                            color: m.F.Alt2,
                            fontSize: m.L.Size7
                        }, n.publisher)), this.renderRedeemUpsellOrClaimSection(e))
                    }
                    return null
                }, t.prototype.isCurrentOfferClaimed = function(e) {
                    return (e.self || {
                        hasEntitlement: !1
                    }).hasEntitlement || this.isCurrentOfferClaimedInLocalStorage()
                }, t.prototype.isCurrentOfferClaimedInLocalStorage = function() {
                    var e = this.props.data,
                        t = this.props.offer;
                    if (!e.loading && !e.error && e.currentUser) {
                        var n = e.currentUser.id,
                            i = k.b(t.id, n);
                        return k.c().includes(i)
                    }
                }, t = a.__decorate([Object(c.a)(D, {
                    name: "data"
                }), Object(c.a)(T, {
                    name: "claimPrimeOffer"
                }), Object(u.c)("PrimeOffer")], t)
            }(o.Component),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m._18, {
                        className: "prime-offer-placeholder",
                        alignItems: m.c.Center,
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, o.createElement(m.U, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, o.createElement(m._2, {
                        height: 20
                    })), o.createElement(m._2, {
                        height: 160
                    }), o.createElement(m.U, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, o.createElement(m._2, {
                        height: 20,
                        width: 160
                    })), o.createElement(m.U, {
                        className: "prime-offer-placeholder__publisher"
                    }, o.createElement(m._2, {
                        height: 20,
                        width: 80
                    })), o.createElement(m.U, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(m._2, {
                        height: 40
                    })))
                }, t = a.__decorate([Object(u.c)("PrimeOfferPlaceholder")], t)
            }(o.Component),
            L = (n("7L7x"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m._18, {
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: m.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(m._22, {
                        type: m._27.H4
                    }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), o.createElement(m.U, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: m._23.Center
                    }, o.createElement(m._9, {
                        asset: m._10.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: m._11.Brand
                    })), o.createElement(m._22, {
                        type: m._27.P
                    }, Object(s.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), o.createElement(N, null))
                }, t = a.__decorate([Object(u.c)("PrimeUpsell")], t)
            }(o.Component)),
            P = n("eY4D"),
            A = (n("DgR+"), n("65au")),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shouldShowPlaceholders = function() {
                        var e = t.props.offersData,
                            n = e.primeOffers,
                            i = void 0 === n || null === n;
                        return e.loading || !e.error && i && t.props.showByDefault
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], t = 0; t < 3; ++t) e.push(o.createElement(R, {
                            key: t
                        }));
                        return e
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props.offersData;
                    e && e.primeOffers && this.props.latencyTracking.reportInteractive(e.primeOffers.length)
                }, t.prototype.render = function() {
                    return o.createElement(f.b, {
                        className: "prime-offer-listing"
                    }, o.createElement(m.U, {
                        className: "prime-offer-listing__content",
                        alignItems: m.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            left: 1,
                            right: 1
                        }
                    }, this.renderUpsell(), this.renderOfferExperience()))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!e.loading && !e.error && !this.currentUserHasPrime(e)) return o.createElement(L, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!e.error && e.primeOffers && e.primeOffers.length) {
                        var t = this.getSortedOffers(),
                            n = t[t.length - 1];
                        return t.map(function(e) {
                            return o.createElement(I, {
                                key: e.id,
                                offer: e,
                                isLast: n.id === e.id
                            })
                        })
                    }
                    return o.createElement(g, null)
                }, t.prototype.getSortedOffers = function() {
                    var e = this.props.offersData.primeOffers,
                        t = this.getUserId();
                    if (t) {
                        var n = Object(k.c)(),
                            i = e.filter(function(e) {
                                return !n.includes(Object(k.b)(e.id, t))
                            }).sort(k.i),
                            a = e.filter(function(e) {
                                return !i.includes(e)
                            }).sort(k.i);
                        return i.concat(a)
                    }
                    return e.slice().sort(k.i)
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t.prototype.currentUserHasPrime = function(e) {
                    var t = e.currentUser;
                    return t && t.hasPrime
                }, t = a.__decorate([Object(c.a)(P, {
                    name: "offersData"
                }), Object(c.a)(A, {
                    name: "userData"
                }), Object(u.c)("PrimeOfferList")], t)
            }(o.Component),
            V = n("tTbW"),
            H = (n("9856"), n("wjhu")),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            n = r.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var i = n.primeOffers || [],
                                a = k.e();
                            t.setState({
                                numOfUnseenOffers: i.filter(function(e) {
                                    return !(a.includes(e.id) || t.offerIsClaimed(e))
                                }).length
                            })
                        }
                    }, t.offerIsClaimed = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var n = (e.primeOffers || []).map(function(e) {
                                return "" + e.id
                            });
                            k.g(n)
                        }
                    }, t.renderOfferList = function() {
                        var e = t.props.offersData,
                            n = t.showOffersByDefault() || !1;
                        return e && !e.loading && !e.error || n ? o.createElement(m.U, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, o.createElement(p, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), o.createElement(j, {
                            showByDefault: n
                        })) : null
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getUnseenOffers(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getUnseenOffers(e)
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(d.a)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: m._31.Center,
                        direction: m._32.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(s.d)("New Prime Loot", "PrimeOffers") : n.label = Object(s.d)("Prime Loot", "PrimeOffers"), o.createElement(m.U, {
                        className: "prime-offers",
                        position: m._3.Relative
                    }, o.createElement(l.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, o.createElement(m.v, {
                        ariaLabel: Object(s.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: m.x.Large,
                        icon: m._10.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    }), o.createElement(m.p, {
                        direction: m.q.BottomRight,
                        size: m.r.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e) return o.createElement(m.U, {
                        className: "prime-offers__pill",
                        position: m._3.Absolute
                    }, o.createElement(m.e, {
                        type: m.i.BounceIn,
                        duration: m.g.Medium,
                        timing: m.h.EaseIn,
                        enabled: e > 0
                    }, o.createElement(m._0, {
                        label: e.toString(),
                        type: m._1.Notification
                    })))
                }, t = a.__decorate([Object(c.a)(V, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(c.a)(H, {
                    name: "userData"
                }), Object(u.c)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component),
            B = Object(i.a)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(M),
            q = (n("1XdE"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(m._18, {
                        className: "net-neutrality-bar",
                        position: m._3.Relative,
                        fullWidth: !0
                    }, o.createElement(m.U, {
                        className: "net-neutrality-bar__bar",
                        display: m.H.Flex,
                        alignItems: m.c.Center,
                        justifyContent: m.T.Between,
                        flexWrap: m.K.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, o.createElement(m.U, {
                        display: m.H.InlineFlex,
                        alignItems: m.c.Center,
                        padding: {
                            right: .5
                        }
                    }, o.createElement(m.P, {
                        display: m.H.InlineFlex,
                        alignItems: m.c.Center,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement("svg", {
                        width: 20,
                        height: 20,
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        x: "0px",
                        y: "0px"
                    }, o.createElement("path", {
                        "fill-rule": "nonzero",
                        d: "M12,17 L12,18 L10,20 L8,18 L8,17 L3,17 L1,15 L1,4 L3,2 L17,2 L19,4 L19,15 L17,17 L12,17 Z M9,13 L9,15 L11,15 L11,13 L9,13 Z M9,11 L11,11 L12,4 L8,4 L9,11 Z"
                    })))), o.createElement(m._22, {
                        type: m._27.Span,
                        fontSize: m.L.Size6
                    }, Object(s.d)("<x:bold>Help us save the Internet!</x:bold> If Net Neutrality rules are repealed, it could mean a lot more loading spinners.", {
                        "x:bold": function(e) {
                            return o.createElement("strong", null, e)
                        }
                    }, "NetNeutralityBar"))), o.createElement(m.U, {
                        display: m.H.InlineFlex,
                        flexShrink: 0
                    }, o.createElement(m.u, {
                        type: m.z.Hollow,
                        overlay: !0,
                        linkTo: "http://link.twitch.tv/netneutrality",
                        targetBlank: !0
                    }, Object(s.d)("Take Action!", "NetNeutralityBar")))))
                }, t
            }(o.Component)),
            G = (n("ukY1"), n("F1v6")),
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode,
                        n = Object(k.h)(e, t);
                    if (s.b.get("net_neutrality_visible", !1) && this.props.data.currentUser && this.props.data.requestInfo && "US" === this.props.data.requestInfo.countryCode) return o.createElement(q, null);
                    if (!n) return null;
                    if (this.props.data.loading) return null;
                    var i = Object(_.d)(_.a, ""),
                        a = Object(s.d)("Twitch Prime", "BlueBar"),
                        r = o.createElement("span", null, Object(s.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        l = Object(_.d)(_.a, ""),
                        c = Object(s.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var d = this.props.data;
                        d && d.primePromotions && d.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    i = e.externalURL, a = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    r = o.createElement(v, {
                                        source: e.text,
                                        renderers: {
                                            Link: function(e) {
                                                return o.createElement("a", {
                                                    href: e.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                }, e.children)
                                            }
                                        }
                                    });
                                    break;
                                case "twitch.prime.bluebar.right1":
                                    l = e.externalURL, c = e.text
                            }
                        })
                    }
                    return o.createElement(m._18, {
                        color: m.F.Base,
                        className: "blue-bar",
                        position: m._3.Relative,
                        fullWidth: !0
                    }, o.createElement(m.U, {
                        className: "blue-bar__bar",
                        display: m.H.Flex,
                        alignItems: m.c.Center,
                        justifyContent: m.T.Between,
                        flexWrap: m.K.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, o.createElement(m.U, {
                        display: m.H.InlineFlex,
                        alignItems: m.c.Center,
                        padding: {
                            right: .5
                        }
                    }, o.createElement(m.U, {
                        className: "blue-bar__logo",
                        display: m.H.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, o.createElement(m._9, {
                        asset: m._10.Crown,
                        width: 20,
                        height: 13
                    })), o.createElement(m._22, {
                        bold: !0,
                        type: m._27.Span,
                        noWrap: !0,
                        fontSize: m.L.Size6
                    }, o.createElement(m.P, {
                        padding: {
                            x: 1
                        }
                    }, o.createElement("a", {
                        className: "blue-bar__link",
                        href: i,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, a))), o.createElement(m._22, {
                        className: "blue-bar__headline",
                        type: m._27.Span,
                        fontSize: m.L.Size6
                    }, r)), o.createElement(m.U, {
                        display: m.H.InlineFlex,
                        flexShrink: 0
                    }, o.createElement(m._22, {
                        bold: !0,
                        type: m._27.Span,
                        noWrap: !0,
                        fontSize: m.L.Size6,
                        color: m.F.Base
                    }, o.createElement("a", {
                        className: "blue-bar__link",
                        href: l,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, c)))))
                }, t = a.__decorate([Object(c.a)(G, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(k.d)()
                            }
                        }
                    }
                }), Object(u.c)("BlueBarComponent")], t)
            }(o.Component);
        n.d(t, "b", function() {
            return B
        }), n.d(t, "a", function() {
            return W
        }), n.d(t, "c", function() {
            return k.d
        })
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
    9856: function(e, t) {},
    A0YJ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_User_User"
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
                                    value: "availability"
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
                                            value: "isSharingActivity"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "visibility"
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
                                    value: "activity"
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
                                            value: "type"
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
                                                value: "Watching"
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
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
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
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Streaming"
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
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Playing"
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
            }],
            loc: {
                start: 0,
                end: 357
            }
        };
        n.loc.source = {
            body: "query TopNav_User_User {\ncurrentUser {\nid\ndisplayName\nprofileImageURL(width: 70)\nlogin\navailability\nsettings {\nisSharingActivity\nvisibility\n}\nactivity {\ntype\n... on Watching {\nuser {\ndisplayName\nstream {\ngame {\nname\n}\n}\nhosting {\ndisplayName\nstream {\ngame {\nname\n}\n}\n}\n}\n}\n... on Streaming {\nstream {\ngame {\nname\n}\n}\n}\n... on Playing {\ngame {\nname\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    BLXQ: function(e, t) {},
    "C/8M": function(e, t, n) {
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
                        var e = this.context.registerReceiver;
                        e ? this.unregister = e(this) : c.i.warn("<FeedItem /> initialized missing a <ScrollableArea /> provider")
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
                            var t;
                            return o.__generator(this, function(n) {
                                return this.element ? (t = this.element.getBoundingClientRect(), t.top < e.bottom && t.bottom > e.top && !this.state.impressionEventFired && this.triggerImpressionEvent(), [2]) : [2]
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

        function a(e) {
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
        var r = n("6hXa"),
            o = n("TToO"),
            s = n("KSGD"),
            l = n("U7vG"),
            c = n("6sO2");
        n.d(t, "a", function() {
            return r.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return r.b
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "d", function() {
            return a
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
                                                            value: "canDelete"
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
    DBTH: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return a
        }), n.d(t, "e", function() {
            return r
        }), n.d(t, "d", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "g", function() {
            return m
        }), n.d(t, "h", function() {
            return p
        }), n.d(t, "f", function() {
            return f
        }), n.d(t, "i", function() {
            return g
        });
        var i, a = "TWILIGHT_WEB_ONBOARDING_CHANNEL_RANKING",
            r = "TWILIGHT_WEB_ONBOARDING_FOLLOWING_FOR_YOU",
            o = "TWILIGHT_WEB_ONBOARDING",
            s = "control";
        ! function(e) {
            e.Skip = "skip", e.NoSkip = "no_skip"
        }(i || (i = {}));
        var l, c = new Set([i.Skip.toString(), i.NoSkip.toString()]);
        ! function(e) {
            e.First = "first", e.Last = "last"
        }(l || (l = {}));
        var d, u = new Set([l.First.toString(), l.Last.toString()]);
        (d || (d = {})).Yes = "yes";
        var m = function(e) {
                return !!e && u.has(e)
            },
            p = function(e, t) {
                return !!e && c.has(e) && m(t)
            },
            f = function(e, t, n) {
                return !!e && c.has(e) && m(t) && n === d.Yes
            },
            g = function(e) {
                return e.getTime() >= v().getTime()
            },
            v = function() {
                return new Date((new Date).getTime() - 12096e5)
            }
    },
    DEPb: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_Store_CurrentUser"
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
                end: 62
            }
        };
        n.loc.source = {
            body: "query TopNav_Store_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "DgR+": function(e, t) {},
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
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("S0OZ").definitions)), e.exports = i
    },
    EImC: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("Odds"),
            r = function() {
                return i.createElement(a._18, {
                    elevation: 1,
                    margin: {
                        bottom: 2
                    },
                    background: a.m.Base
                }, i.createElement(a._18, {
                    display: a.H.Flex,
                    flexWrap: a.K.NoWrap,
                    padding: 1,
                    background: a.m.Base,
                    borderBottom: !0
                }, i.createElement(a.U, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(a._22, null, i.createElement(a._2, {
                    width: 40,
                    height: 40
                }))), i.createElement(a.U, {
                    flexGrow: 1
                }, i.createElement(a._22, {
                    fontSize: a.L.Size6
                }, i.createElement(a._2, {
                    width: 100
                })), i.createElement(a._22, {
                    fontSize: a.L.Size7
                }, i.createElement(a._2, {
                    width: 120
                })))), i.createElement(a.U, {
                    margin: {
                        bottom: .5
                    },
                    padding: 1
                }, i.createElement(a._22, {
                    fontSize: a.L.Size6
                }, i.createElement(a._2, null)), i.createElement(a._22, {
                    fontSize: a.L.Size6
                }, i.createElement(a._2, null)), i.createElement(a._22, {
                    fontSize: a.L.Size6
                }, i.createElement(a._2, {
                    width: 280
                }))))
            },
            o = function() {
                return i.createElement(a._18, {
                    elevation: 1,
                    margin: {
                        bottom: 2
                    },
                    background: a.m.Base
                }, i.createElement(a.U, {
                    margin: {
                        bottom: .5
                    }
                }, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._2, null))), i.createElement(a._18, {
                    display: a.H.Flex,
                    flexWrap: a.K.NoWrap,
                    padding: 1,
                    background: a.m.Base
                }, i.createElement(a.U, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(a._22, null, i.createElement(a._2, {
                    width: 40,
                    height: 40
                }))), i.createElement(a.U, {
                    flexGrow: 1
                }, i.createElement(a._22, {
                    fontSize: a.L.Size6
                }, i.createElement(a._2, {
                    width: 100
                })), i.createElement(a._22, {
                    fontSize: a.L.Size6
                }, i.createElement(a._2, {
                    width: 140
                })), i.createElement(a._22, {
                    fontSize: a.L.Size6
                }, i.createElement(a._2, {
                    width: 120
                })))))
            };
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        })
    },
    Ervg: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("4mYF"),
            o = n("CSlQ"),
            s = n("fc0G"),
            l = function(e) {
                var t = e.video,
                    n = t.id,
                    o = t.lengthSeconds,
                    l = t.publishedAt,
                    c = t.previewThumbnailURL,
                    d = t.viewCount,
                    u = {
                        vodID: n,
                        disableTheatreButton: !0,
                        playerTypeOverride: e.playerTypeOverride
                    };
                return a.createElement(r.a, {
                    createdAt: l,
                    lengthSeconds: o,
                    type: r.b.Video,
                    thumbnailURL: c,
                    viewCount: d
                }, a.createElement(s.c, i.__assign({}, u)))
            },
            c = Object(o.c)("VideoEmbed")(l);
        n.d(t, !1, function() {
            return l
        }), n.d(t, "a", function() {
            return c
        })
    },
    F1v6: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_BlueBar_CurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "stringIds"
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
                }, {
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
                            value: "primePromotions"
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
                                    value: "stringIds"
                                }
                            }
                        }, {
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
                                    value: "text"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "externalURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isExternalLink"
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
                end: 231
            }
        };
        n.loc.source = {
            body: "query Prime_BlueBar_CurrentUser($stringIds: [ID!] $dateOverride: Time) {\ncurrentUser {\nid\nhasPrime\n}\nprimePromotions (ids: $stringIds dateOverride: $dateOverride) {\nid\ntext\nexternalURL\nisExternalLink\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    FLwB: function(e, t, n) {
        "use strict";

        function i(e) {
            p.debug("Saving current availability", e), g = r.__assign({}, g, {
                availability: e
            })
        }

        function a() {
            return r.__awaiter(this, void 0, void 0, function() {
                return r.__generator(this, function(e) {
                    return Object(l.d)(o.n.store.getState()) ? (p.debug("Setting status on server", {
                        state: g
                    }), m && clearTimeout(m), [2, o.n.apollo.client.mutate({
                        mutation: c,
                        variables: {
                            input: g
                        }
                    }).then(function(e) {
                        p.debug("Status scheduled to be set again", {
                            seconds: e.data.setSessionStatus.setAgainInSeconds
                        }), m = setTimeout(a, 1e3 * e.data.setSessionStatus.setAgainInSeconds)
                    }, function(e) {
                        p.warn("Failed to update status. Trying again in 60 seconds.", e), m = setTimeout(a, 6e4)
                    })]) : [2]
                })
            })
        }
        t.f = function(e) {
            return p.debug("Updating activity", e), g = r.__assign({}, g, {
                activity: e
            }), a()
        }, t.e = function(e) {
            p.debug("Updating visibility", e),
                function(e) {
                    Object(l.d)(o.n.store.getState()) && (p.debug("Setting visibility on server", {
                        visibility: e
                    }), o.n.apollo.client.mutate({
                        mutation: d,
                        variables: {
                            input: {
                                visibility: e
                            }
                        }
                    }).then(function(e) {
                        p.debug("Visibility set", {
                            visibility: e.data.updateVisibility.user.availability
                        })
                    }, function(e) {
                        p.warn("Failed to update visibility.", e)
                    }))
                }(e)
        }, t.c = i, t.b = function() {
            i(s.a.Online)
        }, t.d = function() {
            i(s.a.Idle)
        }, t.a = function() {
            p.debug("Clearing activity"), g = r.__assign({}, g, {
                activity: null
            }), a()
        }, t.g = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e;
                return r.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            p.debug("Clearing previous session"), g = {
                                sessionID: o.k.get(u, ""),
                                availability: s.a.Online,
                                activity: null
                            }, t.label = 1;
                        case 1:
                            return t.trys.push([1, 4, , 5]), [4, a()];
                        case 2:
                            return t.sent(), p.debug("Setting new session"), g = r.__assign({}, g, {
                                    sessionID: o.n.session.tabID
                                }),
                                function(e) {
                                    o.k.set(u, e)
                                }(o.n.session.tabID), [4, a()];
                        case 3:
                            return [2, t.sent()];
                        case 4:
                            return e = t.sent(), [2, e];
                        case 5:
                            return [2]
                    }
                })
            })
        };
        var r = n("TToO"),
            o = n("6sO2"),
            s = n("l4QG"),
            l = n("Aj/L"),
            c = n("73jS"),
            d = (n.n(c), n("7LBo")),
            u = (n.n(d), "twilight.sessionID"),
            m = 0,
            p = o.i.withCategory("Session Status"),
            f = {
                sessionID: o.n.session.tabID,
                availability: "",
                activity: null
            },
            g = f
    },
    FroJ: function(e, t) {},
    GtMZ: function(e, t) {},
    H9qc: function(e, t) {},
    "HTB+": function(e, t) {},
    HgOP: function(e, t) {},
    Hs3O: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        }), t.d = function(e, t) {
            var n = i.b.get(s, "https://twitch.amazon.com/prime"),
                a = "";
            try {
                a = btoa(t)
            } catch (e) {
                l.error(e, "Could not decode location pathname substring for redirect")
            }
            return a ? n + "?ref_=" + e + "&redirectRoute=" + a : n + "?ref_=" + e
        };
        var i = n("6sO2"),
            a = "sm_tw_tup_ntp_t_all",
            r = "sm_tw_thp_blue_t_all",
            o = "sm_w_tup_ntp_t_c",
            s = "prime_landing_page_base_url",
            l = i.i.withCategory("PrimeUtilsLogger")
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
                end: 331
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/feed/models/user-fragment.gql"\nfragment feedItemClip on Clip {\nid\nclipCreatedAt: createdAt\nembedURL\nthumbnailURL(width:480 height:272)\nviewCount\nslug\ndurationSeconds\nclipTitle: title\nbroadcaster {\n...feedUser\n}\nreactions {\nemote {\nid\ntoken\nsetID\n}\ncount\nself {\nhasReacted\n}\n}\nvideo {\ngame {\nid\nname\n}\n}\n}',
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
        }(n("Lq4d").definitions)), e.exports = i
    },
    IOEW: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("zCIC"),
            s = n("kVlN"),
            l = n("j7/Y"),
            c = n("w9tK"),
            d = n("Us7i"),
            u = n("vH/s"),
            m = n("/+to"),
            p = n("QG7y"),
            f = n("86JD"),
            g = n("CSlQ"),
            v = n("RH2O"),
            h = n("lbHh"),
            k = n("7vx8"),
            y = n("DBTH"),
            b = n("S4HN"),
            S = n("yWCw"),
            _ = n("F8kA"),
            N = n("NY9D"),
            E = n("Odds"),
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = a.createElement(E.U, {
                            padding: 1
                        }, a.createElement(E._22, {
                            fontSize: E.L.Size5,
                            color: E.F.Alt2
                        }, Object(r.d)("{title}", {
                            title: e.title
                        }, "GameListComponent"))),
                        n = a.createElement(E._18, {
                            background: E.m.Alt,
                            padding: 1
                        }, a.createElement(E.P, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: E.H.Block
                        }, a.createElement(_.a, i.__assign({
                            to: e.viewAllLinkTo
                        }, Object(E._39)(e)), Object(r.d)("View All", "GameListComponent")))),
                        o = [];
                    if (e.loading)
                        for (var s = 0; s < e.limit; s++) o.push(a.createElement(E.U, {
                            key: s,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(E.j, {
                            ratio: E.k.Aspect3x4
                        }, a.createElement(E._2, null)), a.createElement(E.U, null, a.createElement(E._22, null, a.createElement(E._2, {
                            width: 100
                        })), a.createElement(E._22, null, a.createElement(E._2, {
                            width: 70
                        })))));
                    else e.items && e.items.length > 0 && (o = e.items.map(function(e, t) {
                        if (!e) return null;
                        var n = e.id,
                            i = e.name,
                            o = e.viewersCount,
                            s = e.boxArtURL;
                        return a.createElement(E.U, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(E.t, {
                            linkTo: Object(N.c)(i),
                            title: i,
                            imageAlt: i + " cover image",
                            imageSrc: s,
                            info: Object(r.d)("{viewerCount,number} viewers", {
                                viewerCount: o
                            }, "GameListComponent"),
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + i.replace(/ /g, "")
                        }))
                    }));
                    return a.createElement(E._18, {
                        elevation: 1,
                        background: E.m.Base,
                        display: E.H.Hide,
                        breakpointMedium: {
                            display: E.H.Block
                        }
                    }, t, a.createElement(E.U, {
                        padding: {
                            x: 1
                        }
                    }, a.createElement(E._33, {
                        gutterSize: E._35.ExtraSmall,
                        childWidth: E._34.ExtraSmall,
                        placeholderItems: 18
                    }, o)), n)
                }, t = i.__decorate([Object(g.c)("GameList", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component),
            w = n("OkeX"),
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = [];
                    return this.props.data.error ? a.createElement(S.a, {
                        message: Object(r.d)("Followed Games are unavailable at this time.", "FollowedGamesCompoment")
                    }) : (this.props.data.loading || (e = this.props.data.currentUser.followedGames && this.props.data.currentUser.followedGames.nodes || []), this.props.data.loading || e && e.length > 0 ? a.createElement(C, {
                        "data-a-target": "view-all-followed-games-link",
                        items: e,
                        limit: 18,
                        loading: this.props.data.loading,
                        title: Object(r.d)("Followed Games", "FollowedGamesCompoment"),
                        viewAllLinkTo: "/directory/following/games"
                    }) : null)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(k.a)(w, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    }
                }), Object(g.c)("FollowedGames")], t)
            }(a.Component),
            U = n("Y4Yc"),
            F = "twilight_onboarding",
            x = "twilight_onboarding-prompt_dismissed",
            T = {
                domain: window.location.hostname.endsWith(".twitch.tv") ? ".twitch.tv" : void 0,
                secure: "https:" === window.location.protocol
            },
            D = i.__assign({}, T, {
                expires: 365
            }),
            I = new Map([
                ["skip", 1],
                ["no_skip", 3]
            ]),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isOnboardingDismissedCookieSet: void 0 !== h.get(x)
                    }, t.handleAutoOnboardingRedirect = function() {
                        void 0 === h.get(F) && Object(y.i)(new Date(t.props.data.currentUser.createdAt)) && (h.set(F, !0, D), t.redirectToOnboarding(b.b.NewSignup))
                    }, t.startOnboarding = function() {
                        t.redirectToOnboarding(b.b.HomepageCTA)
                    }, t.redirectToOnboarding = function(e) {
                        Object(b.g)({
                            source: e
                        }), window.location.assign("/hi" + location.search)
                    }, t.dismissOnboardingPrompt = function() {
                        Object(b.e)(), h.set(x, !0, D), t.setState({
                            isOnboardingDismissedCookieSet: !0
                        })
                    }, t.followedGamesForUserHasLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.currentUser
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.n.experiments.getAssignment("TWILIGHT_WEB_ONBOARDING")];
                                case 1:
                                    return (e = t.sent()) && I.has(e) && this.setState({
                                        experimentAssignment: e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return this.state.isOnboardingDismissedCookieSet || !this.followedGamesForUserHasLoaded() || !this.state.experimentAssignment || this.props.data.currentUser.followedGames.nodes.length >= (I.get(this.state.experimentAssignment) || 0) || !Object(y.i)(new Date(this.props.data.currentUser.createdAt)) ? null : (this.handleAutoOnboardingRedirect(), a.createElement(E._18, {
                        "data-test-selector": "onboarding-prompt",
                        background: E.m.Base,
                        display: E.H.Flex,
                        elevation: 3,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        borderMarked: !0
                    }, a.createElement(E._18, {
                        display: E.H.Flex,
                        flexWrap: E.K.NoWrap,
                        textAlign: E._23.Left,
                        alignItems: E.c.Center,
                        fullWidth: !0,
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(E.U, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, a.createElement(E._22, {
                        type: E._27.H5,
                        color: E.F.Base,
                        bold: !0
                    }, Object(r.d)("Welcome to your homepage, {displayName}!", {
                        displayName: this.props.data.currentUser.displayName
                    }, "OnboardingPrompt"))), a.createElement(E.U, {
                        flexShrink: 0
                    }, a.createElement(E.v, {
                        "data-test-selector": "onboarding-prompt__dismiss",
                        ariaLabel: Object(r.d)("dismiss onboarding", "OnboardingPrompt"),
                        type: E.w.Default,
                        onClick: this.dismissOnboardingPrompt,
                        icon: E._10.Close
                    }))), a.createElement(E.U, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(E._22, null, Object(r.d)("Here you can find your Pulse Feed and popular content on Twitch. Take a moment to personalize this page to your interests.", "OnboardingPrompt"))), a.createElement(E.U, {
                        margin: {
                            y: .5
                        }
                    }, a.createElement(E.u, {
                        "data-test-selector": "onboarding-prompt__start",
                        onClick: this.startOnboarding
                    }, a.createElement(E.U, {
                        padding: {
                            x: 1
                        }
                    }, Object(r.d)("Start", "OnboardingPrompt"))))))
                }, t = i.__decorate([Object(g.c)("OnboardingPrompt", {
                    autoReportInteractive: !0
                }), Object(k.a)(U, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                })], t)
            }(a.Component),
            L = Object(v.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(R),
            P = n("4mYF"),
            A = n("Ervg"),
            j = n("vXPJ"),
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.height || 540,
                        t = this.props.width || 960;
                    return this.props.data.loading ? a.createElement(E._2, {
                        height: e,
                        width: t
                    }) : this.props.data.error || !this.props.data.video ? a.createElement(E._2, {
                        height: e,
                        width: t
                    }) : a.createElement(A.a, {
                        video: this.props.data.video,
                        playerTypeOverride: this.props.playerTypeOverride
                    })
                }, t
            }(a.Component),
            H = Object(g.c)("LoadingVideoEmbed")(V),
            M = Object(k.a)(j, {
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
            })(H),
            B = n("T0IN"),
            q = n("NqVV"),
            G = new Map([
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
            W = Array.from(G.keys()),
            z = ["28036688", "30672745", "31582795", "51533859", "63321379", "62983472", "29400754"],
            Q = n("fc0G"),
            K = n("yw9L"),
            $ = function(e) {
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error ? (this.props.data.error && r.i.warn("StreamerTrailer data error:", this.props.data.error), null) : a.createElement(E._18, {
                        background: E.m.Base,
                        elevation: 1,
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            x: .5,
                            y: 1
                        },
                        display: E.H.Flex,
                        flexDirection: E.J.Column,
                        flexWrap: E.K.NoWrap
                    }, a.createElement(E.U, {
                        margin: {
                            bottom: .5
                        },
                        padding: {
                            left: .5
                        }
                    }, a.createElement(E._22, {
                        fontSize: E.L.Size5,
                        color: E.F.Alt2
                    }, "Streamers You May Like")), a.createElement(E.U, {
                        display: E.H.Flex,
                        flexDirection: E.J.Row,
                        flexWrap: E.K.NoWrap
                    }, this.renderStreamerVideos()))
                }, t.prototype.renderStatusLink = function(e, t, n) {
                    var i = e.login,
                        r = e.displayName,
                        o = e.stream,
                        s = a.createElement(_.a, {
                            to: "/" + i
                        }, r);
                    return "" === o.id && "" !== n.id && void 0 !== n.game && "" !== n.game.name && !1 === this.props.showTrailers ? a.createElement(E.U, null, a.createElement(E._22, {
                        fontSize: E.L.Size6,
                        ellipsis: !0
                    }, s, " "), a.createElement(E._22, {
                        fontSize: E.L.Size6,
                        color: E.F.Base,
                        ellipsis: !0
                    }, "was playing ", a.createElement(_.a, {
                        to: "/directory/game/" + n.game.name
                    }, n.game.name))) : "" !== t ? a.createElement(E.U, null, a.createElement(E._22, {
                        fontSize: E.L.Size6,
                        ellipsis: !0
                    }, s, " "), a.createElement(E._22, {
                        fontSize: E.L.Size6,
                        color: E.F.Base,
                        ellipsis: !0
                    }, "playing ", a.createElement(_.a, {
                        to: "/directory/game/" + t
                    }, t))) : a.createElement(E._22, {
                        fontSize: E.L.Size6,
                        color: E.F.Base,
                        ellipsis: !0
                    }, "Meet ", s)
                }, t.prototype.renderViewLinkText = function(e) {
                    return "" === e ? "View Channel" : "View Stream"
                }, t.prototype.renderStreamerVideos = function() {
                    var e = this;
                    return this.getStreamerTrailerVideos().map(function(t) {
                        var n = t.userData,
                            i = n.stream,
                            r = n.videos,
                            o = t.videoID,
                            s = "";
                        "" !== i.id && void 0 !== i.game && "" !== i.game.name && (s = i.game.name);
                        var l = r.edges[0].node || e.blankVideo;
                        return a.createElement(E.U, {
                            className: "streamer-trailer",
                            margin: .5,
                            fullHeight: !0,
                            fullWidth: !0,
                            key: o,
                            "data-test-selector": t.selector
                        }, e.mapStreamToEmbed(t), e.renderStreamerInfo(t.userData, s, l))
                    })
                }, t.prototype.mapStreamToEmbed = function(e) {
                    var t = e.userData,
                        n = t.login,
                        i = t.stream,
                        r = t.videos,
                        o = e.videoID,
                        s = r.edges[0].node;
                    return !0 === this.props.showTrailers ? a.createElement(M, {
                        width: 211,
                        height: 118,
                        playerTypeOverride: Q.b.Frontpage,
                        videoID: o
                    }) : "" === i.id ? a.createElement(M, {
                        width: 211,
                        height: 118,
                        playerTypeOverride: Q.b.Frontpage,
                        videoID: s.id
                    }) : a.createElement(P.a, {
                        type: P.b.Stream,
                        viewCount: i.viewersCount,
                        thumbnailURL: i.previewImageURL
                    }, a.createElement(q.a, {
                        channelLogin: n,
                        playerTypeOverride: Q.b.Frontpage
                    }))
                }, t.prototype.renderStreamerInfo = function(e, t, n) {
                    var i = e.login,
                        r = e.profileImageURL,
                        o = e.stream;
                    return a.createElement(E.U, {
                        "data-test-selector": i + "-streamer-trailer",
                        display: E.H.Flex,
                        flexGrow: 0,
                        alignItems: E.c.Start,
                        flexWrap: E.K.NoWrap,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(E.U, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(_.a, {
                        to: "/" + i
                    }, a.createElement(E.l, {
                        imageSrc: r,
                        imageAlt: "Profile Image",
                        size: 40
                    }))), a.createElement(E.U, {
                        margin: {
                            x: 1
                        },
                        flexGrow: 1,
                        "data-a-target": "streamer-trailer-playing-message"
                    }, this.renderStatusLink(e, t, n)), a.createElement(E.U, {
                        display: E.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(E.u, {
                        type: E.z.Hollow,
                        linkTo: "/" + i
                    }, this.renderViewLinkText(o.id))))
                }, t.prototype.getLiveUsersInRandomOrder = function() {
                    for (var e = [], t = 0, n = this.props.data.users; t < n.length; t++) {
                        var i = n[t];
                        this.userIDToData.set(i.id, i), "" !== i.stream.id && e.push(i.id)
                    }
                    return Object(B.a)(e)
                }, t.prototype.addLiveUsersToUsedStreamerTrailers = function(e) {
                    for (var t = 0; t < e.length && !(t >= 4); t++) {
                        var n = e[t],
                            i = G.get(n) || "",
                            a = this.userIDToData.get(n) || this.blankUser;
                        if ("" !== i) {
                            var r = this.props.showTrailers ? "online-streamer-trailer" : "online-stream-trailer";
                            this.usedStreamerTrailers.push({
                                videoID: i,
                                userData: a,
                                selector: r
                            })
                        }
                    }
                }, t.prototype.addTopOfflineUsersToUsedStreamerTrailers = function(e) {
                    for (var t = e.length, n = 0; t < 4 && n < z.length; n++) {
                        for (var i = !0, a = z[n], r = 0, o = e; r < o.length; r++) {
                            if (a === o[r]) {
                                i = !1;
                                break
                            }
                        }
                        if (i) {
                            var s = G.get(a) || "",
                                l = this.userIDToData.get(a) || this.blankUser;
                            if (void 0 !== s && "" !== l.login) {
                                var c = this.props.showTrailers ? "offline-streamer-trailer" : "offline-streamer-video";
                                this.usedStreamerTrailers.push({
                                    videoID: s,
                                    userData: l,
                                    selector: c
                                }), t++
                            }
                        }
                    }
                }, t.prototype.getStreamerTrailerVideos = function() {
                    if (this.usedStreamerTrailers.length > 0) return this.usedStreamerTrailers;
                    var e = this.getLiveUsersInRandomOrder();
                    return this.addLiveUsersToUsedStreamerTrailers(e), this.addTopOfflineUsersToUsedStreamerTrailers(e), this.usedStreamerTrailers
                }, t = i.__decorate([Object(g.c)("StreamerTrailer"), Object(k.a)(K, {
                    options: {
                        variables: {
                            ids: W
                        }
                    }
                })], t)
            }(a.Component),
            Z = n("ZPDF"),
            Y = ["control", "on"],
            X = "2017-10-05T20:00:26.75536206Z",
            J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        assignmentDetermined: !1,
                        assignment: ""
                    }, t.didUnmount = !1, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.latencyTracking.reportInteractive(), [4, r.n.experiments.getAssignment("STREAMER_TRAILERS", {})];
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
                            if (new Date(e.createdAt) > this.getStartDate() && "en" === e.language && this.validAssignment()) return a.createElement($, {
                                showTrailers: "on" === this.state.assignment
                            })
                        }
                    }
                    return null
                }, t.prototype.getStartDate = function() {
                    var e = r.b.get("streamer_trailers_start_date", X);
                    return isNaN(Date.parse(e)) ? (r.i.warn("Date", e, "is not a valid date"), new Date(X)) : new Date(e)
                }, t.prototype.validAssignment = function() {
                    var e = this.state.assignment || "";
                    return void 0 !== Y.find(function(t) {
                        return t === e
                    })
                }, t = i.__decorate([Object(g.c)("StreamerTrailersExperiment"), Object(k.a)(Z)], t)
            }(a.Component),
            ee = n("eXld"),
            te = n("8PKe"),
            ne = n("oIkB"),
            ie = n("VFqp"),
            ae = n("cYgC"),
            re = n("ojlS"),
            oe = n("C/8M"),
            se = n("EImC"),
            le = function(e) {
                for (var t = e.cardCount, n = [], i = 0; i < t; i++) 1 === i ? n.push(a.createElement(se.b, {
                    key: i
                })) : n.push(a.createElement(se.a, {
                    key: i
                }));
                return a.createElement(E.U, null, n)
            },
            ce = n("/0cZ"),
            de = Object(oe.d)(function() {
                return {
                    feed_type: "rec"
                }
            })(ae.a),
            ue = {
                limit: 5
            },
            me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCreatePost = function(e, n) {
                        return void 0 === n && (n = !1), t.props.createPost(e, n)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? a.createElement(le, {
                        cardCount: 5
                    }) : this.props.data.error ? a.createElement(S.a, {
                        message: Object(r.d)("Error loading data.", "PulseComponent")
                    }) : a.createElement(E.U, null, a.createElement(ie.a, {
                        placeholder: Object(r.d)("Share a clip or video with your followers by adding links from Twitch, Vimeo, and YouTube.", "PulseComposer"),
                        onCreate: this.onCreatePost,
                        isConnectedToTwitter: this.props.data.currentUser.isConnectedToTwitter,
                        userID: this.props.data.currentUser.id,
                        composerLocation: ie.b.HomePage
                    }), a.createElement(de, {
                        items: this.props.data.currentUser.pulseFeed.items
                    }), a.createElement(o.a, {
                        enabled: !this.props.data.loading && !this.props.data.error,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 100
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(k.a)(ce, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: ue
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data.currentUser.pulseFeed.items.edges;
                                return e.data.fetchMore({
                                    query: ce,
                                    variables: {
                                        limit: 5,
                                        cursor: t[t.length - 1].cursor
                                    },
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            currentUser: i.__assign({}, n.currentUser, {
                                                pulseFeed: i.__assign({}, n.currentUser.pulseFeed, {
                                                    items: i.__assign({}, n.currentUser.pulseFeed.items, {
                                                        edges: function(e, t) {
                                                            var n = new Set(e.map(function(e) {
                                                                return e.node.content.id
                                                            }));
                                                            return e.concat(t.filter(function(e) {
                                                                return !n.has(e.node.content.id)
                                                            }))
                                                        }(e.currentUser.pulseFeed.items.edges, n.currentUser.pulseFeed.items.edges)
                                                    })
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(k.a)(re, {
                    props: function(e) {
                        return {
                            createPost: function(t, n) {
                                return e.mutate(i.__assign({}, Object(ne.a)({
                                    channelID: e.ownProps.data.currentUser.id,
                                    body: t,
                                    postToTwitter: n
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
                                            query: ce,
                                            variables: ue
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
                                            query: ce,
                                            data: n,
                                            variables: ue
                                        })
                                    }
                                }))
                            }
                        }
                    }
                }), Object(g.c)("Pulse")], t)
            }(a.Component),
            pe = n("L46p"),
            fe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = [];
                    return this.props.data.error ? a.createElement(S.a, {
                        message: Object(r.d)("Top Games are unavailable at this time.", "TopGamesCompoment")
                    }) : (this.props.data.loading || (e = function(e) {
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
                    }(this.props.data)), a.createElement(C, {
                        title: Object(r.d)("Top Games", "TopGamesCompoment"),
                        items: e,
                        loading: this.props.data.loading,
                        limit: 18,
                        viewAllLinkTo: "/directory",
                        "data-a-target": "view-all-link"
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(k.a)(pe, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: e.count || 18
                            }
                        }
                    }
                }), Object(g.c)("TopGames")], t)
            }(a.Component),
            ge = (n("jPY3"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(p.b.front).length && d.a.display(p.b.front.leaderboard), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    p.g.addListener(p.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender(), r.n.setPageTitle()
                }, t.prototype.render = function() {
                    return a.createElement(E.U, {
                        fullHeight: !0
                    }, a.createElement(ee.b, {
                        suppressScrollX: !0,
                        disableDebounce: !0
                    }), a.createElement(s.a, null, a.createElement(te.a, null)), a.createElement(E.U, {
                        padding: 3
                    }, a.createElement(m.a, {
                        adSize: p.c.front.leaderboard,
                        adUnit: p.d.frontpage,
                        slotID: p.b.front.leaderboard,
                        targeting: {
                            pagetype: p.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginBottom: "2rem"
                        },
                        autoEnable: !1
                    }), a.createElement(J, null), a.createElement(E.U, {
                        className: "front-page",
                        display: E.H.Flex,
                        flexDirection: E.J.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: E.J.Row
                        },
                        flexWrap: E.K.NoWrap,
                        margin: {
                            x: "auto"
                        }
                    }, a.createElement(E.U, {
                        className: "front-page__main-col",
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(L, null), a.createElement(me, null)), a.createElement(E.U, {
                        flexGrow: 1,
                        breakpointMedium: {
                            padding: {
                                left: 2
                            }
                        }
                    }, a.createElement(o.c, {
                        bottomPixelThreshold: 20,
                        disableStickinessBelowWidth: 1127
                    }, a.createElement(E.U, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(f.b, {
                        renderContext: f.a.Front
                    })), a.createElement(E.U, {
                        display: E.H.Hide,
                        breakpointMedium: {
                            display: E.H.Block
                        }
                    }, a.createElement(m.a, {
                        adSize: p.c.front.rightTop,
                        adUnit: p.d.frontpage,
                        slotID: p.b.front.rightTop,
                        targeting: {
                            pagetype: p.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginBottom: "1rem"
                        },
                        autoEnable: !1
                    })), a.createElement(E.U, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(O, null)), a.createElement(fe, null), a.createElement(E.U, {
                        display: E.H.Hide,
                        breakpointMedium: {
                            display: E.H.Block
                        }
                    }, a.createElement(m.a, {
                        adSize: p.c.front.rightBottom,
                        adUnit: p.d.frontpage,
                        slotID: p.b.front.rightBottom,
                        targeting: {
                            pagetype: p.a.frontpage
                        },
                        injectStyles: {
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1rem"
                        },
                        autoEnable: !1
                    })))))))
                }, t.prototype.componentWillUnmount = function() {
                    p.g.removeListener(p.e, this.onSlotAdded)
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(g.c)("FrontPage", {
                    destination: c.a.Index
                }), Object(l.a)({
                    location: u.PageviewLocation.FrontPage
                })], t)
            }(a.Component));
        n.d(t, "FrontPage", function() {
            return ge
        })
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
    L6HU: function(e, t) {},
    LUP9: function(e, t, n) {
        "use strict";

        function i(e) {
            switch (e) {
                case o.RECOMMENDATION_VIEWED:
                    return Object(r.d)("Because of your viewing history", "FeedItemReason");
                case o.RECOMMENDATION_FOLLOWED:
                    return Object(r.d)("Because of who you follow", "FeedItemReason");
                case o.RECOMMENDATION_POPULAR:
                    return Object(r.d)("Because it's popular", "FeedItemReason");
                default:
                    return ""
            }
        }
        var a = n("U7vG"),
            r = n("6sO2"),
            o = {
                RECOMMENDATION_FOLLOWED: "followed",
                RECOMMENDATION_VIEWED: "viewed",
                RECOMMENDATION_POPULAR: "popular"
            },
            s = n("Odds"),
            l = function(e) {
                if (0 === e.reasons.length) return a.createElement(s.U, null);
                var t = i(e.reasons[0].reason);
                return "" === t ? a.createElement(s.U, null) : a.createElement(s.U, {
                    padding: 1
                }, t)
            };
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return l
        })
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
    MSvX: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("Ejve"),
            l = "legacy_routes_enabled",
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
                                        l = o.a.buildType === s.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + l + e.pathname + "?" + r;
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
            return c
        })
    },
    MTWZ: function(e, t) {},
    Mlfg: function(e, t, n) {
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
                end: 319
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/post-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\nmutation Reaction_Add($input: AddReactionInput!) {\naddReaction(input: $input) {\ncontent {\n...feedItemClip\n...feedItemPost\n...feedItemVideo\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("I5q7").definitions)), a.definitions = a.definitions.concat(i(n("S0OZ").definitions)), a.definitions = a.definitions.concat(i(n("fWQn").definitions)), e.exports = a
    },
    MnLQ: function(e, t) {},
    NhfZ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_PrimeUpsell_CurrentUser"
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
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasTurbo"
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
                end: 105
            }
        };
        n.loc.source = {
            body: "query TopNav_PrimeUpsell_CurrentUser {\ncurrentUser {\nid\nhasPrime\nhasTurbo\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    NqVV: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("CSlQ"),
            o = n("fc0G"),
            s = n("Odds"),
            l = "bridgeplayereventwithpayload",
            c = function(e) {
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
                    }, a.createElement(s.j, {
                        ratio: s.k.Aspect16x9
                    }, this.getVideoEmbedComponent()))
                }, t.prototype.getVideoEmbedComponent = function() {
                    var e = this.props,
                        t = e.channelLogin,
                        n = e.vodID,
                        r = e.embedURL,
                        l = e.playerTypeOverride,
                        c = {
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
                    }, c)) : n ? a.createElement(o.c, i.__assign({
                        vodID: n
                    }, c)) : a.createElement(s.U, null)
                }, t.prototype.postMessageIsWheelEvent = function(e) {
                    return "player.embed.client" === e.data.namespace && e.data.method === l && e.data.args.length > 0 && "wheel" === e.data.args[0].event
                }, t = i.__decorate([Object(r.c)("EmbedVideoPlayer")], t)
            }(a.Component);
        n.d(t, !1, function() {
            return "player.embed.client"
        }), n.d(t, !1, function() {
            return l
        }), n.d(t, "a", function() {
            return c
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
            c = "ads.slot-render-end",
            d = "ads.slot-ready",
            u = new i.EventEmitter
    },
    Qk3C: function(e, t, n) {
        "use strict";

        function i(e) {
            return function() {
                Object(o.c)(e), window.location.reload(!0)
            }
        }
        var a = n("RH2O"),
            r = n("2KeS"),
            o = n("FuaS"),
            s = n("TToO"),
            l = n("U7vG"),
            c = n("6sO2"),
            d = n("Odds"),
            u = (n("2Nqs"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        return l.createElement(d.S, {
                            key: e.languageCode,
                            onClick: function() {
                                return t.props.changeLanguage(e.languageCode)
                            },
                            "data-target": "language-selector-link"
                        }, l.createElement(d.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, e.name))
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = Math.floor(c.a.locales.length / 2);
                    return l.createElement(d.U, {
                        className: "language-selector",
                        display: d.H.Flex,
                        padding: {
                            y: 1
                        }
                    }, l.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right"
                    }, c.a.locales.slice(0, e).map(this.renderLink)), l.createElement("div", {
                        className: "language-selector__list"
                    }, c.a.locales.slice(e).map(this.renderLink)))
                }, t
            }(l.Component)),
            m = Object(a.a)(function() {
                return {}
            }, function(e) {
                return Object(r.bindActionCreators)({
                    changeLanguage: i
                }, e)
            })(u);
        n.d(t, "a", function() {
            return m
        })
    },
    R0Kh: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "f", function() {
            return c
        }), n.d(t, "e", function() {
            return d
        }), n.d(t, "g", function() {
            return u
        }), n.d(t, "i", function() {
            return m
        }), n.d(t, "h", function() {
            return f
        }), n.d(t, "d", function() {
            return g
        });
        var i = n("OAwv"),
            a = (n.n(i), n("6sO2")),
            r = n("S1vB"),
            o = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            },
            s = function(e, t) {
                return e + "-" + t
            },
            l = function() {
                return p("claimedOffers")
            },
            c = function(e) {
                a.k.set("claimedOffers", e)
            },
            d = function() {
                return p("seenOffers")
            },
            u = function(e) {
                a.k.set("seenOffers", e)
            },
            m = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            p = function(e) {
                return a.k.get(e, [])
            },
            f = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(r.a)(t))
            },
            g = function() {
                var e = location.search,
                    t = i.parse(e);
                return t && t.dateOverride || void 0
            }
    },
    S0OZ: function(e, t, n) {
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
                end: 609
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/chat/models/embedded-emote-fragment.gql"\n#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/user-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\nfragment feedItemPost on Post {\nid\ncreatedAt\nbody {\ncontent\nemotes {\n...embeddedEmote\n}\n}\nreactions {\nemote {\nid\ntoken\nsetID\n}\ncount\nself {\nhasReacted\n}\n}\nembeds {\n...feedItemClip\n...feedItemVideo\n... on PhotoOEmbed {\ntitle\ninputURL\nproviderName\nthumbnail {\nurl\n}\n}\n... on VideoOEmbed {\ntitle\ninputURL\nproviderName\nthumbnail {\nurl\n}\nhtml\n}\n}\nauthor {\n...feedUser\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("0ImK").definitions)), a.definitions = a.definitions.concat(i(n("I5q7").definitions)), a.definitions = a.definitions.concat(i(n("Lq4d").definitions)), a.definitions = a.definitions.concat(i(n("fWQn").definitions)), e.exports = a
    },
    S4HN: function(e, t, n) {
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
            return c
        }), n.d(t, "d", function() {
            return d
        }), n.d(t, "c", function() {
            return u
        });
        var i, a = n("6sO2"),
            r = n("vH/s");
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
                a.m.track(r.SpadeEventType.OnboardingEvent, t)
            },
            l = function() {
                var e = {
                    source: i.HomepageCTA,
                    action: o.Dismissed
                };
                a.m.track(r.SpadeEventType.OnboardingEvent, e)
            },
            c = function(e) {
                var t = {
                    source: i.HomepageCTA,
                    action: e
                };
                a.m.track(r.SpadeEventType.OnboardingEvent, t)
            },
            d = function(e, t) {
                var n = {
                    src: r.SpadeEventType.OnboardingEvent,
                    game: t
                };
                a.m.track(e, n)
            },
            u = function(e) {
                a.m.track(r.SpadeEventType.BrowseForYou, e)
            }
    },
    T0IN: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            for (var t = e.length - 1; t > 0; t--) {
                var n = Math.floor(Math.random() * (t + 1)),
                    i = e[t];
                e[t] = e[n], e[n] = i
            }
            return e
        }
    },
    TP6L: function(e, t, n) {
        "use strict";
        var i, a = n("RH2O"),
            r = n("F8kA"),
            o = n("2KeS"),
            s = n("+xm8"),
            l = n("f2i/"),
            c = n("Aj/L"),
            d = n("TToO"),
            u = n("U7vG"),
            m = n("6sO2"),
            p = n("Qk3C"),
            f = n("+Znq"),
            g = n("7vx8"),
            v = n("vH/s"),
            h = n("0Mfl"),
            k = n("CSlQ"),
            y = n("DBTH"),
            b = n("U3i2"),
            S = Object(a.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    languageCode: e.session.languageCode,
                    currentUser: Object(c.c)(e)
                }
            })(b.b),
            _ = n("CIox"),
            N = n("6BvN"),
            E = n("HM6l"),
            C = n("MAZT"),
            w = n("uTyw"),
            O = n("rCmJ"),
            U = n("HW6M"),
            F = n("zCIC"),
            x = n("czpb"),
            T = n("SZoP"),
            D = n("mi6k"),
            I = n("7Nlu"),
            R = n("5kgt"),
            L = n("Odds"),
            P = (n("afun"), n("y+bN")),
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e, t = {
                        "search-live-result-card": !0,
                        "search-live-result-card--hover": this.props.borderHover
                    };
                    return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.user.stream && (e = this.props.data.user.stream.previewImageURL), u.createElement(L.U, {
                        className: U(t),
                        key: this.props.id,
                        fullWidth: !0
                    }, u.createElement(L.S, d.__assign({
                        linkTo: this.props.linkTo,
                        hover: this.props.borderHover,
                        tabIndex: -1,
                        "data-a-target": "search-live-result-card-link"
                    }, Object(R.a)(this.props)), u.createElement(L.A, null, u.createElement(L.U, {
                        className: "search-live-result-card__wrapper",
                        position: L._3.Relative,
                        overflow: L.Z.Hidden,
                        fullWidth: !0
                    }, u.createElement(L.C, {
                        imageSrc: e || m.a.defaultStreamPreviewURL,
                        imageAlt: this.props.imageAlt,
                        aspect: L.k.Aspect16x9
                    }), u.createElement(L._18, {
                        className: "search-live-result-card__overlay",
                        position: L._3.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        display: L.H.Flex,
                        flexDirection: L.J.Column,
                        justifyContent: L.T.End,
                        overflow: L.Z.Hidden,
                        color: L.F.Overlay
                    }, u.createElement(L.B, null, u.createElement(L.U, {
                        className: "search-live-result-card__body",
                        padding: .5
                    }, u.createElement(L._22, {
                        type: L._27.H5,
                        ellipsis: !0,
                        className: "search-live-result-card__title"
                    }, this.props.channelName), u.createElement(L.U, {
                        className: "search-live-result-card__viewer-count-container",
                        display: L.H.Flex,
                        alignItems: L.c.Center
                    }, u.createElement(L.U, {
                        margin: {
                            right: .5
                        },
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        flexShrink: 0
                    }, u.createElement(L._9, {
                        asset: L._10.GlyphLive,
                        type: L._11.Live,
                        width: 14,
                        height: 14
                    })), u.createElement(L._22, {
                        className: "search-live-result-card__viewer-count",
                        ellipsis: !0
                    }, Object(m.e)(this.props.viewerCount))), u.createElement(L._22, {
                        className: "search-live-result-card__info",
                        ellipsis: !0
                    }, this.props.title))))))))
                }, t = d.__decorate([Object(g.a)(P, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(u.Component),
            j = (n("H9qc"), function(e) {
                var t, n, i;
                e.title && (e.hitsCount && e.hitsCount > 0 ? t = Object(m.d)("more", "SearchResultSection") : e.totalHitsCount && e.totalHitsCount > 0 && (t = Object(m.d)("Show", "SearchResultSection")), void 0 !== e.totalHitsCount && (i = u.createElement(L._0, {
                    type: L._1.Brand,
                    label: e.totalHitsCount < 100 ? Object(m.e)(e.totalHitsCount) : "99+"
                })), n = u.createElement(L.S, d.__assign({
                    onClick: e.onHeaderClick,
                    tabIndex: -1
                }, Object(L._39)(e), {
                    "data-ts_selectable": !0
                }), u.createElement(L.U, {
                    className: "search-result-view__titlesep search-result-view--no-hover",
                    display: L.H.Flex,
                    justifyContent: L.T.Between
                }, u.createElement("div", null, u.createElement(L.U, {
                    display: L.H.Inline,
                    margin: {
                        right: 1
                    }
                }, u.createElement(L._22, {
                    type: L._27.Span,
                    color: L.F.Link,
                    fontSize: L.L.Size7,
                    transform: L._26.Uppercase
                }, e.title)), i), u.createElement(L._22, {
                    fontSize: L.L.Size7,
                    transform: L._26.Uppercase
                }, t))));
                var a;
                return (Array.isArray(e.children) && e.children.length > 0 || e.children && !Array.isArray(e.children)) && (a = u.createElement(L.U, {
                    className: "search-result-view__listing-wrapper",
                    margin: {
                        top: .5,
                        bottom: .5
                    }
                }, e.children)), u.createElement("div", {
                    className: "search-result-view__block"
                }, n, a)
            }),
            V = (n("oI0V"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(L.U, {
                        className: "search-title-bar " + (this.props.showBack ? "search-title-bar--show" : ""),
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        "data-a-target": "nav-search-title-bar"
                    }, u.createElement(L._18, {
                        className: "search-title-bar__back-container",
                        display: L.H.Flex,
                        alignItems: L.c.Stretch,
                        borderRight: !0
                    }, u.createElement(L.v, {
                        icon: L._10.AngleLeft,
                        type: L.w.Secondary,
                        size: L.x.Large,
                        onClick: this.props.onBackClick,
                        ariaLabel: Object(m.d)("Back button", "SearchTitleBar"),
                        "data-ts_selectable": this.props.showBack,
                        "data-a-target": "nav-search-back"
                    })), u.createElement(L.U, {
                        className: "search-title-bar__title"
                    }, u.createElement(L._22, {
                        fontSize: L.L.Size5
                    }, this.props.title)))
                }, t
            }(u.Component)),
            H = n("PHcJ"),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleOptionChange = function(e) {
                        var n = e.currentTarget.elements;
                        t.props.onOptionsChange({
                            type: +n.type.value,
                            length: +n.video_length.value,
                            sort: +n.sort.value
                        })
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(L._18, {
                        className: "search__video-filters",
                        background: L.m.Alt,
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, u.createElement(L.P, {
                        display: L.H.Flex,
                        justifyContent: L.T.Between
                    }, u.createElement("form", {
                        onInput: this.handleOptionChange
                    }, u.createElement(L.U, {
                        flexShrink: 0
                    }, u.createElement(L.U, {
                        display: L.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L._15, {
                        name: "type"
                    }, u.createElement("option", {
                        value: H.c.AllVideos
                    }, Object(m.d)("All Videos", "search__video-filters")), u.createElement("option", {
                        value: H.c.PastBroadcasts
                    }, Object(m.d)("Past Broadcasts", "search__video-filters")), u.createElement("option", {
                        value: H.c.Uploads
                    }, Object(m.d)("Uploads", "search__video-filters")), u.createElement("option", {
                        value: H.c.Highlights
                    }, Object(m.d)("Highlights", "search__video-filters")))), u.createElement(L.U, {
                        display: L.H.InlineFlex
                    }, u.createElement(L._15, {
                        name: "video_length"
                    }, u.createElement("option", {
                        value: H.a.AnyLength
                    }, Object(m.d)("Any Length", "search__video-filters")), u.createElement("option", {
                        value: H.a.Short
                    }, Object(m.d)("Short", "search__video-filters")), u.createElement("option", {
                        value: H.a.Long
                    }, Object(m.d)("Long", "search__video-filters"))))), u.createElement(L.U, {
                        display: L.H.InlineFlex,
                        flexShrink: 0
                    }, u.createElement(L._15, {
                        name: "sort"
                    }, u.createElement("option", {
                        value: H.b.Popular
                    }, Object(m.d)("Popular", "search__video-filters")), u.createElement("option", {
                        value: H.b.Newest
                    }, Object(m.d)("Newest", "search__video-filters")))))))
                }, t
            }(u.Component),
            B = n("5LoI"),
            q = (n("FroJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBackClick = function() {
                        return t.headerSelect(null)
                    }, t.gameHeaderSelect = function() {
                        return t.headerSelect(B.a.Games)
                    }, t.liveHeaderSelect = function() {
                        return t.headerSelect(B.a.Channels)
                    }, t.userHeaderSelect = function() {
                        return t.headerSelect(B.a.Users)
                    }, t.videoHeaderSelect = function() {
                        return t.headerSelect(B.a.Videos)
                    }, t.communityHeaderSelect = function() {
                        return t.headerSelect(B.a.Communities)
                    }, t.headerSelect = function(e) {
                        t.props.onCategorySelected(e)
                    }, t.onClick = function(e) {
                        if (e.nativeEvent.stopImmediatePropagation(), e.target !== e.currentTarget) {
                            var n = e.target,
                                i = n.querySelector("a"),
                                a = i ? i.querySelector("[data-tt_content]") : null;
                            a || (i = n.closest("a")), (a = i && i.dataset.tt_content ? i : null) && t.props.onResultSelected()
                        }
                    }, t.setScrollRef = function(e) {
                        return t.scroll = e
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.previousCategory !== this.props.currentCategory && (this.previousCategory = this.props.currentCategory, this.scroll.scrollToTop())
                }, t.prototype.render = function() {
                    var e, t = {
                        "search-result-view": !0,
                        "search-result-view--active": !0,
                        "search-result-view--filtered": this.props.currentCategory === B.a.Videos
                    };
                    e = this.props.currentCategory && null !== this.props.currentCategory ? u.createElement(V, {
                        title: this.getCategoryTitle(this.props.currentCategory),
                        showBack: !0,
                        onBackClick: this.onBackClick
                    }) : u.createElement(V, {
                        title: Object(m.d)("Top Results", "SearchResultPanel__titlebar"),
                        showBack: !1
                    });
                    var n;
                    n = this.props.isWaiting ? u.createElement(L.Y, {
                        fillContent: !0
                    }) : this.props.isErrored ? this.getErrorMessage() : this.props.currentCategory && null !== this.props.currentCategory ? this.getCategoryDrillDown(this.props.currentCategory) : this.props.gameResults && this.props.gameResults.totalHits > 0 || this.props.userResults && this.props.userResults.totalHits > 0 || this.props.communityResults && this.props.communityResults.totalHits > 0 || this.props.videoResults && this.props.videoResults.totalHits > 0 || this.props.liveResults && this.props.liveResults.totalHits > 0 ? this.getResultSections() : this.getNoResultsMessage();
                    var i;
                    return this.props.currentCategory === B.a.Videos && (i = u.createElement(M, {
                        key: "video-filters",
                        onOptionsChange: this.props.onVideoOptionsChange
                    })), u.createElement("div", {
                        className: "search-panel " + (this.props.isOpen ? "" : "search-panel--closed"),
                        tabIndex: 0,
                        onKeyDown: this.props.onKeyDown
                    }, e, i, u.createElement(L._18, {
                        className: U(t),
                        background: L.m.Base,
                        position: L._3.Absolute,
                        overflow: L.Z.Hidden,
                        display: L.H.Block
                    }, u.createElement(F.b, {
                        className: "search-result-view__wrapper",
                        contentClassName: "search-result-view__scroll-container",
                        onClick: this.onClick,
                        scrollRef: this.setScrollRef,
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, u.createElement(L.U, {
                        fullWidth: !0
                    }, n, u.createElement(F.a, {
                        key: this.props.currentCategory || "none",
                        enabled: !this.props.isWaiting && this.props.isOpen,
                        loadMore: this.props.loadMore
                    })))))
                }, t.prototype.getResultSections = function() {
                    var e, t = [],
                        n = [],
                        i = this.getGameCards(),
                        a = this.getUserCards(),
                        r = this.getCommunityCards(),
                        o = this.getVideoCards(),
                        s = this.getLiveCards();
                    return s.length > 0 && (e = u.createElement(L.U, {
                        className: "search-result-view__live",
                        margin: {
                            y: 1,
                            x: 1
                        }
                    }, u.createElement(L.N, null, s))), this.getResultSection("games-section", B.a.Games, this.gameHeaderSelect, this.props.gameResults, i.length, i, n, t), this.getResultSection("live-section", B.a.Channels, this.liveHeaderSelect, this.props.liveResults, s.length, e, n, t), this.getResultSection("channels-section", B.a.Users, this.userHeaderSelect, this.props.userResults, a.length, a, n, t), this.getResultSection("videos-section", B.a.Videos, this.videoHeaderSelect, this.props.videoResults, o.length, o, n, t), this.getResultSection("communities-section", B.a.Communities, this.communityHeaderSelect, this.props.communityResults, r.length, r, n, t), t.concat(n)
                }, t.prototype.getResultSection = function(e, t, n, i, a, r, o, s) {
                    var l = u.createElement(j, {
                        key: e,
                        totalHitsCount: i ? i.totalHits : 0,
                        hitsCount: a,
                        title: this.getCategoryTitle(t),
                        onHeaderClick: n,
                        "data-a-target": e
                    }, r);
                    0 === a ? o.push(l) : s.push(l)
                }, t.prototype.getGameCards = function() {
                    return this.props.gameResults ? this.props.gameResults.results.map(function(e) {
                        return u.createElement(I.a, {
                            id: "game_" + e.id,
                            key: "game_" + e.id,
                            imageAlt: e.thumbnailAltText,
                            linkTo: e.linkTo,
                            title: e.title,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        })
                    }) : []
                }, t.prototype.getLiveCards = function() {
                    return this.props.liveResults ? this.props.liveResults.results.map(function(e) {
                        var t = Object(T.a)(e.login || "", e.name || "");
                        return u.createElement(L.G, {
                            key: "live_" + e.id,
                            cols: 6
                        }, u.createElement(L.U, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(A, {
                            id: "live_" + e.id,
                            imageAlt: e.thumbnailAltText,
                            linkTo: e.linkTo,
                            title: e.status || "",
                            login: e.login ? e.login : "",
                            channelName: t,
                            viewerCount: e.viewerCount || 0,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        })))
                    }) : []
                }, t.prototype.getUserCards = function() {
                    return this.props.userResults ? this.props.userResults.results.map(function(e) {
                        var t = Object(T.a)(e.login || "", e.name || "");
                        return u.createElement(L.S, {
                            linkTo: e.linkTo,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: e.id
                        }, u.createElement(L.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u.createElement(L.A, {
                            row: !0
                        }, u.createElement(L.C, {
                            imageAlt: e.thumbnailAltText,
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            size: L.D.Size4,
                            aspect: L.k.Aspect1x1
                        }), u.createElement(L.B, null, u.createElement(L.P, {
                            padding: {
                                x: 1
                            }
                        }, u.createElement(L._22, {
                            type: L._27.H5,
                            ellipsis: !0
                        }, t))))))
                    }) : []
                }, t.prototype.getVideoCards = function() {
                    return this.props.videoResults ? this.props.videoResults.results.map(function(e) {
                        var t = Object(T.a)(e.login || "", e.name || ""),
                            n = Object(D.a)(e.length || 0);
                        return u.createElement(L.S, {
                            key: "video_" + e.id,
                            linkTo: e.linkTo,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, u.createElement(L.U, {
                            className: "search-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u.createElement(L.A, {
                            row: !0
                        }, u.createElement(L.C, {
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            imageAlt: e.thumbnailAltText,
                            size: L.D.Size8,
                            aspect: L.k.Aspect16x9
                        }), u.createElement(L.B, null, u.createElement(L.P, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(L._22, {
                            type: L._27.H5,
                            ellipsis: !0
                        }, e.title)), u.createElement(L.P, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(L._22, {
                            className: "search-panel__link",
                            ellipsis: !0
                        }, e.createdAt ? Object(m.c)(new Date(1e3 * e.createdAt), "medium") : "", " · ", n || "", " · ", u.createElement(L._22, {
                            className: "search-pannel__highlight-link",
                            type: L._27.Span
                        }, t)))))))
                    }) : []
                }, t.prototype.getCommunityCards = function() {
                    return this.props.communityResults ? this.props.communityResults.results.map(function(e) {
                        return u.createElement(L.S, {
                            key: "community_" + e.id,
                            targetBlank: Object(x.b)(),
                            linkTo: Object(x.a)(e.linkTo),
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, u.createElement(L.U, {
                            className: "search-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u.createElement(L.A, {
                            row: !0
                        }, u.createElement(L.C, {
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            imageAlt: e.thumbnailAltText,
                            size: L.D.Size4,
                            aspect: L.k.BoxArt
                        }), u.createElement(L.B, null, u.createElement(L.P, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(L._22, {
                            type: L._27.H5,
                            ellipsis: !0
                        }, e.name)), u.createElement(L.P, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(L._22, {
                            className: "search-panel__link",
                            ellipsis: !0
                        }, Object(m.d)("{viewerCount,number} Viewers", {
                            viewerCount: e.viewerCount || 0
                        }, "SearchResultPanel")))))))
                    }) : []
                }, t.prototype.getCategoryDrillDown = function(e) {
                    var t;
                    switch (e) {
                        case B.a.Games:
                            if (!this.props.gameResults || 0 === this.props.gameResults.totalHits) return this.getNoResultsMessage();
                            t = this.getGameCards();
                            break;
                        case B.a.Users:
                            if (!this.props.userResults || 0 === this.props.userResults.totalHits) return this.getNoResultsMessage();
                            t = this.getUserCards();
                            break;
                        case B.a.Communities:
                            if (!this.props.communityResults || 0 === this.props.communityResults.totalHits) return this.getNoResultsMessage();
                            t = this.getCommunityCards();
                            break;
                        case B.a.Videos:
                            if (!this.props.videoResults || 0 === this.props.videoResults.totalHits) return this.getNoResultsMessage();
                            t = this.getVideoCards();
                            break;
                        case B.a.Channels:
                            if (!this.props.liveResults || 0 === this.props.liveResults.totalHits) return this.getNoResultsMessage();
                            t = [u.createElement(L.U, {
                                className: "search-result-view__live",
                                margin: {
                                    x: 1
                                },
                                key: "live_drill-down-container"
                            }, u.createElement(L.N, null, this.getLiveCards()))];
                            break;
                        default:
                            return this.getNoResultsMessage()
                    }
                    return u.createElement(j, null, t)
                }, t.prototype.getCategoryTitle = function(e) {
                    switch (e) {
                        case B.a.Games:
                            return Object(m.d)("Games", "SearchResultPanel");
                        case B.a.Users:
                            return Object(m.d)("Channels", "SearchResultPanel");
                        case B.a.Communities:
                            return Object(m.d)("Communities", "SearchResultPanel");
                        case B.a.Videos:
                            return Object(m.d)("Videos", "SearchResultPanel");
                        case B.a.Channels:
                            return Object(m.d)("Live", "SearchResultPanel");
                        default:
                            return Object(m.d)("Top Results", "SearchResultPanel")
                    }
                }, t.prototype.getNoResultsMessage = function() {
                    return u.createElement(L.U, {
                        display: L.H.Flex,
                        flexDirection: L.J.Column,
                        justifyContent: L.T.Center,
                        alignItems: L.c.Center,
                        fullHeight: !0,
                        className: "notice-wrap"
                    }, u.createElement(L.U, {
                        className: "notice-wrap__visual",
                        textAlign: L._23.Center,
                        flexShrink: 1
                    }, u.createElement(L._9, {
                        asset: L._10.SearchNoResults,
                        width: 46,
                        height: 48
                    })), u.createElement("h4", {
                        className: "notice-wrap__title flex__item",
                        "data-test-selector": "panel-body-no-results"
                    }, Object(m.d)("No results found", "SearchResultPanel")), u.createElement("p", {
                        className: "notice-wrap__text flex__item"
                    }, Object(m.d)("They're probably in another castle", "SearchResultPanel")))
                }, t.prototype.getErrorMessage = function() {
                    return u.createElement(L.U, {
                        display: L.H.Flex,
                        flexDirection: L.J.Column,
                        justifyContent: L.T.Center,
                        alignItems: L.c.Center,
                        fullHeight: !0,
                        className: "notice-wrap"
                    }, u.createElement(L.U, {
                        className: "notice-wrap__visual",
                        textAlign: L._23.Center,
                        flexShrink: 1
                    }, u.createElement(L._9, {
                        asset: L._10.DeadGlitch,
                        width: 46,
                        height: 48
                    })), u.createElement("h4", {
                        "data-test-selector": "search-error-message",
                        className: "notice-wrap__title flex__item"
                    }, Object(m.d)("Search is not available at this time", "SearchResultPanel")), u.createElement("p", {
                        className: "notice-wrap__text flex__item"
                    }, Object(m.d)("Please try again later", "SearchResultPanel")))
                }, t
            }(u.Component)),
            G = (n("GtMZ"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isAnimating: !1,
                        currentCategory: t.currentCategory
                    }, n
                }
                return d.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this;
                    e.currentCategory && e.currentCategory !== this.props.currentCategory && this.setState({
                        currentCategory: e.currentCategory
                    }), this.props.isVisible !== e.isVisible && (this.animationTimeout && window.clearTimeout(this.animationTimeout), this.setState({
                        isAnimating: !0
                    }), this.animationTimeout = window.setTimeout(function() {
                        t.setState({
                            isAnimating: !1
                        })
                    }, 300))
                }, t.prototype.componentWillUnmount = function() {
                    this.animationTimeout && window.clearTimeout(this.animationTimeout)
                }, t.prototype.render = function() {
                    if (!this.state.currentCategory) return null;
                    var e = this.getAssetName(this.state.currentCategory);
                    return this.props.isVisible || this.state.isAnimating ? u.createElement(L.U, {
                        className: "search-tag"
                    }, u.createElement(L.e, {
                        enabled: !0,
                        type: this.props.isVisible ? L.i.BounceIn : L.i.BounceOut
                    }, u.createElement(L._21, {
                        label: this.state.currentCategory,
                        icon: e,
                        onClose: this.props.onClick,
                        "data-test-selector": "filter-icon",
                        "data-a-target": "nav-search-clear"
                    }))) : null
                }, t.prototype.getAssetName = function(e) {
                    switch (e) {
                        case B.a.Games:
                            return L._10.NavGames;
                        case B.a.Users:
                            return L._10.NavProfile;
                        case B.a.Communities:
                            return L._10.Communities;
                        case B.a.Videos:
                            return L._10.NavVideos;
                        case B.a.Channels:
                        default:
                            return L._10.NavChannels
                    }
                }, t
            }(u.Component)),
            W = (n("p6Rc"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t.categoryTagClicked = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.props.onCategorySelected(null)
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return u.createElement("div", null, u.createElement("div", {
                        className: "top-nav__search-container",
                        "data-click-out-id": "nav-search-balloon"
                    }, u.createElement(O.a, {
                        onClickOut: this.props.onClickOut
                    }, u.createElement(L._12, {
                        onChange: this.handleChange,
                        onFocus: this.props.onFocus,
                        onKeyDown: this.props.onKeyDown,
                        placeholder: Object(m.d)("Search", "NavSearch"),
                        id: "nav-search-input",
                        "data-a-target": "nav-search-input",
                        spellCheck: !1
                    }), u.createElement(L.p, {
                        direction: L.q.Bottom,
                        noTail: !0,
                        size: L.r.Large,
                        show: this.props.isOpen,
                        offsetY: "5px",
                        "data-a-target": "nav-search-balloon"
                    }, u.createElement(q, {
                        isOpen: this.props.isOpen,
                        gameResults: this.props.gameResults,
                        userResults: this.props.userResults,
                        communityResults: this.props.communityResults,
                        videoResults: this.props.videoResults,
                        liveResults: this.props.liveResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        onResultSelected: this.props.onResultSelected,
                        onCategorySelected: this.props.onCategorySelected,
                        currentCategory: this.props.currentCategory,
                        onVideoOptionsChange: this.props.onVideoOptionsChange,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown
                    })), u.createElement(G, {
                        isVisible: this.props.isOpen && !!this.props.currentCategory,
                        currentCategory: this.props.currentCategory,
                        onClick: this.categoryTagClicked
                    }))))
                }, t
            }(u.Component)),
            z = 50,
            Q = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onCategorySelected = function(e) {
                        t.setState(d.__assign({}, t.getEmptyState(), {
                            term: t.state.term,
                            currentCategory: e,
                            isOpen: !0,
                            isWaiting: !0
                        }), function() {
                            t.doSearch(t.state.term)
                        })
                    }, t.onChange = function(e) {
                        t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), e ? (t.setState({
                            topGameResults: null,
                            topUserResults: null,
                            topLiveResults: null,
                            topVideoResults: null,
                            topCommunityResults: null,
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, z)) : t.setState(t.getEmptyState())
                    }, t.onHistoryChange = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        })
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        })
                    }, t.onFocus = function() {
                        t.state.term && !t.state.isOpen && t.setState({
                            isOpen: !0
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === N.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === N.a.Up ? t.focusNext(-1) : e.keyCode === N.a.Down && t.focusNext(1))
                    }, t.onResultSelected = function() {
                        t.setState({
                            isOpen: !1
                        })
                    }, t.loadMore = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return d.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.queryID || null === this.state.currentCategory || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(this.state.currentCategory, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), m.i.error(n, "Algolia page search failed"), this.setState(d.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2];
                                    case 4:
                                        return t ? (i = Object(w.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentGameResults: this.state.currentGameResults,
                                            currentUserResults: this.state.currentUserResults,
                                            currentCommunityResults: this.state.currentCommunityResults,
                                            currentVideoResults: this.state.currentVideoResults,
                                            currentLiveResults: this.state.currentLiveResults
                                        }), this.setState(d.__assign({}, i, {
                                            term: this.state.term,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: i.exhaustedHits
                                        })), [2]) : (this.setState(d.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.changeVideoOptions = function(e) {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return d.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = E.a(), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryVideos(this.state.term, t, e)];
                                    case 2:
                                        return (n = a.sent()).hits && this.setState({
                                            currentVideoResults: {
                                                totalHits: n.totalHits,
                                                results: n.hits.map(w.a)
                                            },
                                            queryID: ""
                                        }), [3, 4];
                                    case 3:
                                        return i = a.sent(), m.i.error(i, "Algolia video search failed"), this.setState({
                                            isErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.searchClient = new C.a(m.a.algoliaApplicationID, m.a.algoliaAPIKey), t.state = t.getEmptyState(), t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentDidUpdate = function() {
                    !this.state.focusSelectable || this.state.queryID || this.inputTimer || (this.focusNext(1), this.setState({
                        focusSelectable: !1
                    }))
                }, t.prototype.render = function() {
                    return u.createElement(W, {
                        onChange: this.onChange,
                        onClickOut: this.onClickOut,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        onResultSelected: this.onResultSelected,
                        gameResults: this.state.currentGameResults,
                        userResults: this.state.currentUserResults,
                        communityResults: this.state.currentCommunityResults,
                        videoResults: this.state.currentVideoResults,
                        liveResults: this.state.currentLiveResults,
                        isOpen: this.state.isOpen,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onCategorySelected: this.onCategorySelected,
                        currentCategory: this.state.currentCategory,
                        onVideoOptionsChange: this.changeVideoOptions,
                        loadMore: this.loadMore
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                        i = document.activeElement,
                        a = Array.prototype.indexOf.call(n, i);
                    if ((t = a < 0 ? e > 0 ? 0 : n.length - 1 : a + e) < 0 && (t = 0), !(t >= n.length)) {
                        var r = n.item(t);
                        r.focus(), r.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: r
                        })
                    }
                }, t.prototype.doSearch = function(e) {
                    return d.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, a, r, o;
                        return d.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = E.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 6, , 7]), this.state.currentCategory && null !== this.state.currentCategory ? (t = 0, [4, this.searchClient.queryForType(this.state.currentCategory, e, n)]) : [3, 3];
                                case 2:
                                    return a = s.sent(), [3, 5];
                                case 3:
                                    return this.state.topGameResults && this.state.topUserResults && this.state.topLiveResults && this.state.topVideoResults && this.state.topCommunityResults ? (this.setState({
                                        currentGameResults: this.state.topGameResults,
                                        currentUserResults: this.state.topUserResults,
                                        currentLiveResults: this.state.topLiveResults,
                                        currentVideoResults: this.state.topVideoResults,
                                        currentCommunityResults: this.state.topCommunityResults,
                                        queryID: "",
                                        term: e,
                                        isOpen: !0,
                                        isWaiting: !1,
                                        currentPage: t
                                    }), [2]) : [4, this.searchClient.queryTopResults(e, n)];
                                case 4:
                                    a = s.sent(), s.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return r = s.sent(), m.i.error(r, "Algolia top results search failed"), this.setState(d.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2];
                                case 7:
                                    return a ? this.state.queryID !== a.id ? [2] : (o = Object(w.b)({
                                        searchResults: a,
                                        append: !1,
                                        currentGameResults: this.state.currentGameResults,
                                        currentUserResults: this.state.currentUserResults,
                                        currentCommunityResults: this.state.currentCommunityResults,
                                        currentVideoResults: this.state.currentVideoResults,
                                        currentLiveResults: this.state.currentLiveResults
                                    }), this.state.currentCategory && null === this.state.currentCategory && (o = d.__assign({}, o, {
                                        topGameResults: o.currentGameResults,
                                        topUserResults: o.currentUserResults,
                                        topLiveResults: o.currentLiveResults,
                                        topVideoResults: o.currentVideoResults,
                                        topCommunityResults: o.currentCommunityResults,
                                        exhaustedHits: o.exhaustedHits
                                    })), this.setState(function(n) {
                                        return d.__assign({}, n, o, {
                                            queryID: "",
                                            term: e,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(d.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t.prototype.getEmptyState = function() {
                    return {
                        term: "",
                        currentGameResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentLiveResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentCommunityResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentVideoResults: {
                            totalHits: 0,
                            results: []
                        },
                        isOpen: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentCategory: null,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1
                    }
                }, t = d.__decorate([Object(k.c)("NavSearch")], t)
            }(u.Component),
            K = Object(_.e)(Q),
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t.onSignUpClick = function(e) {
                        e.preventDefault(), t.props.signup()
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return u.createElement(L.U, {
                        className: "anon-user",
                        flexWrap: L.K.NoWrap,
                        display: L.H.Flex,
                        margin: {
                            left: 1
                        },
                        "data-a-target": "user-card"
                    }, u.createElement(L.U, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L.u, {
                        onClick: this.onLoginClick,
                        "data-a-target": "login-button"
                    }, Object(m.d)("Log in", "top-nav"))), u.createElement(L.U, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L.u, {
                        onClick: this.onSignUpClick,
                        "data-a-target": "signup-button"
                    }, Object(m.d)("Sign up", "top-nav"))))
                }, t = d.__decorate([Object(k.c)("AnonUser")], t)
            }(u.Component),
            Z = n("DEPb"),
            Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e = !1;
                    if (this.props.data) {
                        if (this.props.data.loading || this.props.data.error) return null;
                        e = !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    }
                    return !this.props.isLoggedIn || e ? u.createElement("a", {
                        href: h.a,
                        target: "_blank",
                        className: "top-nav__nav-link",
                        "data-a-target": "store-link"
                    }, Object(m.d)("Store", "TopNavStore")) : null
                }, t = d.__decorate([Object(g.a)(Z, {
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(k.c)("TopNavStoreComponent", {
                    autoReportInteractive: !0
                })], t)
            }(u.Component),
            X = Object(a.a)(function(e) {
                return {
                    isLoggedIn: Object(c.d)(e)
                }
            })(Y),
            J = n("S1vB"),
            ee = n("Hs3O"),
            te = n("NhfZ"),
            ne = Object(x.a)("/products/turbo?ref=top_nav"),
            ie = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return null;
                    var e = this.props.data.requestInfo && !Object(J.a)(this.props.data.requestInfo.countryCode),
                        t = !this.props.data.currentUser || !this.props.data.currentUser.hasTurbo;
                    if (e && t) return u.createElement("a", {
                        href: ne,
                        target: "_blank",
                        className: "top-nav__nav-link",
                        "data-a-target": "try-prime-link"
                    }, Object(m.d)("Go Turbo", "TopNavUpsell"));
                    if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                        var n = Object(ee.d)(ee.b, window.location.pathname.substring(1));
                        return u.createElement("a", {
                            href: n,
                            target: "_blank",
                            className: "top-nav__nav-link",
                            "data-a-target": "try-prime-link"
                        }, Object(m.d)("Try Prime", "TopNavUpsell"))
                    }
                    return null
                }, t = d.__decorate([Object(g.a)(te), Object(k.c)("TopNavUpsellComponent")], t)
            }(u.Component),
            ae = n("RweG"),
            re = n("WIs4"),
            oe = n("l4QG"),
            se = n("C8Io"),
            le = n("oIkB"),
            ce = n("HZww"),
            de = n("FLwB"),
            ue = n("ZaD5"),
            me = n("NikC"),
            pe = n("0nzt"),
            fe = function() {
                return u.createElement(L.U, {
                    display: L.H.Flex,
                    flexGrow: 1,
                    alignItems: L.c.Center,
                    fullHeight: !0,
                    className: "top-nav__user-card",
                    "data-a-target": "user-card"
                }, u.createElement(L.U, {
                    display: L.H.Flex,
                    flexWrap: L.K.NoWrap,
                    alignItems: L.c.Center,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    fullHeight: !0,
                    className: "top-nav__user-card-wrapper"
                }, u.createElement(L.U, {
                    margin: {
                        x: 1
                    }
                }, u.createElement(k.a, {
                    size: 30,
                    imageSrc: m.a.defaultAvatarURL,
                    imageAlt: Object(m.d)("User Avatar", "UserError"),
                    "data-a-target": "top-nav-avatar"
                })), u.createElement(L.U, {
                    flexGrow: 1
                }, u.createElement(L._18, {
                    color: L.F.Base,
                    className: "top-nav__username"
                }, ""))))
            },
            ge = function() {
                return u.createElement(L.U, {
                    display: L.H.Flex,
                    flexGrow: 1,
                    alignItems: L.c.Center,
                    fullHeight: !0,
                    className: "top-nav__user-card top-nav__user-card--placeholder",
                    "data-a-target": "user-card"
                }, u.createElement(L.U, {
                    display: L.H.Flex,
                    flexWrap: L.K.NoWrap,
                    alignItems: L.c.Center,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    fullHeight: !0,
                    className: "top-nav__user-card-wrapper"
                }, u.createElement(L.U, {
                    margin: {
                        x: 1
                    }
                }, u.createElement("div", {
                    className: "top-nav__user-card-placeholder-avatar"
                })), u.createElement(L.U, {
                    flexGrow: 1,
                    display: L.H.Flex,
                    flexDirection: L.J.Column,
                    justifyContent: L.T.Center
                }, u.createElement(L._18, {
                    color: L.F.Base,
                    className: "top-nav__username"
                }, u.createElement("div", {
                    className: "top-nav__user-card-placeholder-name"
                })), u.createElement(L.U, {
                    className: "top-nav__user-status"
                }, u.createElement(L.U, {
                    ellipsis: !0,
                    display: L.H.Flex,
                    alignItems: L.c.Center
                }, u.createElement(L.U, {
                    display: L.H.InlineFlex,
                    margin: {
                        right: .5
                    }
                }, u.createElement("div", {
                    className: "top-nav__user-card-placeholder-presence"
                })), u.createElement(L._18, {
                    display: L.H.InlineFlex,
                    color: L.F.Alt
                }, u.createElement("div", {
                    className: "top-nav__user-card-placeholder-status"
                }))))), u.createElement(L.U, {
                    display: L.H.Flex,
                    flexShrink: 0,
                    className: "top-nav__user-card-dropdown-arrow top-nav__user-card-dropdown-arrow--presence",
                    "data-a-target": "top-nav-dropdown-arrow"
                }, u.createElement(L._9, {
                    asset: L._10.GlyphArrDown
                }))))
            },
            ve = n("NXs7"),
            he = n("VAT8"),
            ke = n("2Hj/"),
            ye = (n("YSdr"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onCardClick = function() {
                        n.setState({
                            dropdownOpen: !n.state.dropdownOpen
                        })
                    }, n.onClickOut = function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }, n.onLogoutClick = function(e) {
                        e.preventDefault(), n.props.logout()
                    }, n.onShareCheckboxClick = function() {
                        n.props.toggleShareActivity()
                    }, n.onDarkModeCheckboxClick = function() {
                        var e = n.props.theme === ve.a.Dark ? ve.a.Light : ve.a.Dark;
                        n.props.changeTheme(e, me.a.UserMenu)
                    }, n.onOnlineClick = function(e) {
                        e && e.stopPropagation(), n.props.toggleVisibility(oe.a.Online)
                    }, n.onInvisibleClick = function(e) {
                        e && e.stopPropagation(), n.props.toggleVisibility(oe.a.Offline)
                    }, n.unsubscribeFromHistory = n.props.history.listen(function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }), n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return d.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory()
                }, t.prototype.render = function() {
                    var e = this.props.gqlData.currentUser.profileImageURL || m.a.defaultAvatarURL,
                        t = U("top-nav__dropdown-wrapper", {
                            toggled: this.state.dropdownOpen
                        }),
                        n = U("top-nav__user-card", Object(he.c)(ve.a.Dark), {
                            "top-nav__dropdown-open": this.state.dropdownOpen
                        }),
                        i = this.state.dropdownOpen ? "dropdown-down" : "dropdown-up",
                        a = this.state.dropdownOpen ? "dropdown-down" : "dropdown-up",
                        r = this.props.gqlData.currentUser.availability === oe.a.Offline ? L.F.Base : L.F.Alt2,
                        o = this.props.gqlData.currentUser.availability === oe.a.Online ? L.F.Base : L.F.Alt2,
                        s = this.props.gqlData.currentUser.settings.isSharingActivity,
                        l = this.props.gqlData.currentUser.availability || this.props.gqlData.currentUser.settings.visibility,
                        c = u.createElement(L.U, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, u.createElement(L.E, {
                            id: "dark-mode-toggle",
                            label: Object(m.d)("Dark Mode", "TopNavUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === ve.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }));
                    return u.createElement(L.U, {
                        position: L._3.Relative,
                        display: L.H.Flex,
                        flexGrow: 1,
                        alignItems: L.c.Stretch,
                        fullHeight: !0
                    }, u.createElement(O.a, {
                        onClickOut: this.onClickOut,
                        className: n
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        flexGrow: 1,
                        alignItems: L.c.Stretch,
                        fullHeight: !0
                    }, u.createElement(L.S, {
                        onClick: this.onCardClick,
                        "data-a-target": "user-menu-toggle",
                        "data-test-selector": "user-menu-toggle"
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        flexWrap: L.K.NoWrap,
                        alignItems: L.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0,
                        className: "top-nav__user-card-wrapper"
                    }, u.createElement(L.U, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, u.createElement(L.U, {
                        className: "top-nav__user-card-avatar-container"
                    }, u.createElement(k.a, {
                        size: 30,
                        imageSrc: e,
                        imageAlt: "User avatar",
                        "data-a-target": "top-nav-avatar"
                    }))), u.createElement(L.U, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: L.J.Column
                    }, u.createElement(L._18, {
                        color: L.F.Base,
                        className: "top-nav__username",
                        "data-a-target": "user-display-name"
                    }, this.props.gqlData.currentUser.displayName), u.createElement(L.U, {
                        className: "top-nav__user-status",
                        ellipsis: !0,
                        fullWidth: !0,
                        alignItems: L.c.Center,
                        display: L.H.Flex,
                        flexWrap: L.K.NoWrap
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        flexShrink: 0,
                        margin: {
                            right: .5
                        }
                    }, u.createElement(ke.a, {
                        availability: l
                    })), u.createElement(L._18, {
                        ellipsis: !0,
                        color: L.F.Alt
                    }, u.createElement(L._22, {
                        type: L._27.Span,
                        noWrap: !0,
                        "data-a-target": "online-status"
                    }, this.props.gqlData.currentUser && u.createElement(ke.b, {
                        activity: this.props.gqlData.currentUser.activity,
                        availability: l === oe.a.Offline ? oe.a.Invisible : l
                    }))))), u.createElement(L._18, {
                        display: L.H.Flex,
                        flexShrink: 0,
                        color: L.F.Base,
                        className: "user-card-wrapper__dropdown-arrow",
                        "data-a-target": "top-nav-dropdown-arrow"
                    }, u.createElement(L._9, {
                        asset: L._10.GlyphArrDown
                    }))))), u.createElement(L._18, {
                        fullWidth: !0,
                        overflow: L.Z.Hidden,
                        position: L._3.Absolute,
                        className: t,
                        background: L.m.Base,
                        color: L.F.Base,
                        "data-a-target": i,
                        "data-test-selector": a
                    }, u.createElement(F.b, {
                        className: "top-nav__user-scroll",
                        suppressScrollX: !0
                    }, u.createElement(L.U, null, u.createElement(L._18, {
                        padding: {
                            y: 1
                        },
                        background: L.m.Alt
                    }, u.createElement(L.S, {
                        onClick: this.onOnlineClick,
                        "data-a-target": "online-dropdown-button",
                        "data-test-selector": "online-dropdown-button"
                    }, u.createElement(L._18, {
                        color: L.F.Alt2,
                        display: L.H.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(L.U, {
                        alignItems: L.c.Center,
                        display: L.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L._4, {
                        status: L._5.Online
                    })), u.createElement(L._22, {
                        bold: this.props.gqlData.currentUser.availability === oe.a.Online,
                        color: o
                    }, Object(m.d)("Online", "TopNavUser")))), u.createElement(L.S, {
                        onClick: this.onInvisibleClick,
                        "data-a-target": "invisible-dropdown-button",
                        "data-test-selector": "invisible-dropdown-button"
                    }, u.createElement(L._18, {
                        color: L.F.Base,
                        display: L.H.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(L.U, {
                        alignItems: L.c.Center,
                        display: L.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L._4, {
                        status: L._5.Invisible
                    })), u.createElement(L._22, {
                        bold: this.props.gqlData.currentUser.availability === oe.a.Offline,
                        color: r
                    }, Object(m.d)("Invisible", "TopNavUser")))), u.createElement(L.U, {
                        margin: {
                            x: 2,
                            bottom: 1,
                            top: .5
                        }
                    }, u.createElement(L.E, {
                        id: "share-activity-toggle",
                        label: Object(m.d)("Share my activity", "TopNavUser"),
                        "data-a-target": "share-activity-toggle",
                        "data-test-selector": "share-activity-toggle",
                        "data-a-value": s,
                        checked: s,
                        onChange: this.onShareCheckboxClick,
                        disabled: this.props.gqlData.currentUser.availability === oe.a.Offline
                    }), u.createElement(L._22, {
                        type: L._27.Span,
                        color: L.F.Alt
                    }, Object(m.d)("Share what you're watching, playing, or streaming with your friends.", "TopNavUser"))), u.createElement(L._18, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), c), u.createElement(L.U, {
                        margin: {
                            y: 1
                        }
                    }, u.createElement(L.S, {
                        linkTo: {
                            pathname: "/" + this.props.gqlData.currentUser.login,
                            state: {
                                content: "self-channel",
                                medium: "twitch-topnav"
                            }
                        },
                        "data-a-target": "channel-dropdown-link"
                    }, u.createElement(L._18, {
                        color: L.F.Alt,
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L._9, {
                        asset: L._10.NavMyChannel,
                        height: 18,
                        width: 18
                    })), u.createElement(L._22, null, Object(m.d)("Channel", "TopNavUser")))), u.createElement(L.S, {
                        linkTo: Object(x.a)("/" + this.props.gqlData.currentUser.login + "/manager/past_broadcasts"),
                        "data-a-target": "video-manager-dropdown-link"
                    }, u.createElement(L._18, {
                        color: L.F.Alt,
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L._9, {
                        asset: L._10.NavManager,
                        height: 18,
                        width: 18
                    })), u.createElement(L._22, null, Object(m.d)("Video Manager", "TopNavUser")))), u.createElement(L.S, {
                        linkTo: Object(x.a)("/" + this.props.gqlData.currentUser.login + "/dashboard"),
                        "data-a-target": "dashboard-dropdown-link"
                    }, u.createElement(L._18, {
                        color: L.F.Alt,
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L._9, {
                        asset: L._10.NavDashboard,
                        height: 18,
                        width: 18
                    })), u.createElement(L._22, null, Object(m.d)("Dashboard", "TopNavUser")))), u.createElement(L._18, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), u.createElement(L.S, {
                        targetBlank: Object(x.b)(),
                        linkTo: Object(x.a)("/friends"),
                        "data-a-target": "friends-dropdown-link"
                    }, u.createElement(L._18, {
                        color: L.F.Alt,
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L._9, {
                        asset: L._10.Friends,
                        height: 18,
                        width: 18
                    })), u.createElement(L._22, null, Object(m.d)("Friends", "TopNavUser")))), u.createElement(L.S, {
                        targetBlank: Object(x.b)(),
                        linkTo: Object(x.a)("/messages/inbox"),
                        "data-a-target": "inbox-dropdown-link"
                    }, u.createElement(L._18, {
                        color: L.F.Alt,
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L._9, {
                        asset: L._10.NavMessages,
                        height: 18,
                        width: 18
                    })), u.createElement(L._22, null, Object(m.d)("Messages", "TopNavUser")))), u.createElement(L.S, {
                        targetBlank: Object(x.b)(),
                        linkTo: Object(x.a)("/subscriptions"),
                        "data-a-target": "subscriptions-dropdown-link"
                    }, u.createElement(L._18, {
                        color: L.F.Alt,
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L._9, {
                        asset: L._10.NavBackpack,
                        height: 18,
                        width: 18
                    })), u.createElement(L._22, null, Object(m.d)("Subscriptions", "TopNavUser")))), u.createElement(L.S, {
                        targetBlank: Object(x.b)(),
                        linkTo: Object(x.a)("/inventory"),
                        "data-a-target": "inventory-dropdown-link"
                    }, u.createElement(L._18, {
                        color: L.F.Alt,
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L._9, {
                        asset: L._10.Crate,
                        height: 18,
                        width: 18
                    })), u.createElement(L._22, null, Object(m.d)("Inventory", "TopNavUser")))), u.createElement(L._18, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), u.createElement(L.S, {
                        targetBlank: Object(x.b)(),
                        linkTo: Object(x.a)("/settings/profile"),
                        "data-a-target": "settings-dropdown-link"
                    }, u.createElement(L._18, {
                        color: L.F.Alt,
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L._9, {
                        asset: L._10.NavSettings,
                        height: 18,
                        width: 18
                    })), u.createElement(L._22, null, Object(m.d)("Settings", "TopNavUser")))), u.createElement(L.S, {
                        "data-a-target": "dropdown-logout",
                        onClick: this.onLogoutClick
                    }, u.createElement(L._18, {
                        color: L.F.Alt,
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(L._9, {
                        asset: L._10.NavLogout,
                        height: 18,
                        width: 18
                    })), u.createElement(L._22, null, Object(m.d)("Log Out", "TopNavUser"))))))))))
                }, t
            }(u.Component)),
            be = Object(_.e)(ye),
            Se = n("A0YJ"),
            _e = n("ilq7"),
            Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isSettingNewSession = !1, t.dataIsReady = function(e) {
                        return e.data && !e.data.loading && !e.data.error
                    }, t.setUserToOffline = function() {
                        Object(de.c)(oe.a.Offline), Object(de.a)()
                    }, t.toggleShareActivity = function() {
                        var e = !t.props.data.currentUser.settings.isSharingActivity,
                            n = d.__assign({}, Object(le.a)({
                                isSharingActivity: e
                            }), {
                                optimisticResponse: {
                                    updateIsSharingActivity: {
                                        __typename: "UpdateIsSharingActivityPayload",
                                        user: {
                                            __typename: "User",
                                            id: t.props.data.currentUser.id,
                                            settings: {
                                                isSharingActivity: e,
                                                __typename: "UserSettings"
                                            }
                                        }
                                    }
                                }
                            });
                        t.props.updateIsSharingActivity(n)
                    }, t.toggleVisibility = function(e) {
                        t.dataIsReady(t.props) && Object(de.e)(e)
                    }, t.setNewSession = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return d.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.isSettingNewSession) return [2];
                                        this.isSettingNewSession = !0, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, 4, 5]), [4, Object(de.g)()];
                                    case 2:
                                        return t.sent(), this.props.initialUserAvailabilitySet(), [3, 5];
                                    case 3:
                                        return e = t.sent(), m.i.warn("Failed to set new user availability session.", e), [3, 5];
                                    case 4:
                                        return this.isSettingNewSession = !1, [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.maybeRefetchData = function(e) {
                        var n = e.pubsub.messages.presence;
                        n && e.data.currentUser.id && n.data.user_id === +e.data.currentUser.id && t.props.pubsub.messages.presence !== n && e.data.refetch()
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.maybeRefetchData(this.props), this.props.firstPageLoaded && this.dataIsReady(this.props) && !this.props.initialUserAvailabilityIsSet && this.setNewSession(), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.maybeRefetchData(e), e.firstPageLoaded && this.dataIsReady(e) && !e.initialUserAvailabilityIsSet && this.setNewSession()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.setUserToOffline()
                }, t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.currentUser ? this.props.data.error ? u.createElement(fe, null) : u.createElement(be, {
                        gqlData: this.props.data,
                        toggleShareActivity: this.toggleShareActivity,
                        toggleVisibility: this.toggleVisibility,
                        changeTheme: this.props.changeTheme,
                        firstPageLoaded: this.props.firstPageLoaded,
                        logout: this.props.logout,
                        theme: this.props.theme
                    }) : u.createElement(ge, null)
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = d.__decorate([Object(g.a)(Se), Object(g.a)(_e, {
                    name: "updateIsSharingActivity"
                }), Object(re.a)(function(e) {
                    return {
                        query: Se,
                        topic: e.data.currentUser ? Object(ce.f)(e.data.currentUser.id) : "",
                        skip: !(e.data && !e.data.loading && !e.data.error && e.data.currentUser),
                        type: se.c.PresenceSettings,
                        mutator: function(e, t) {
                            return t.currentUser.settings.visibility = e.data.availability_override.toUpperCase(), t.currentUser.settings.isSharingActivity = e.data.share_activity, t
                        }
                    }
                }), Object(ae.a)([{
                    topic: function(e) {
                        return Object(ce.f)(e.data.currentUser.id)
                    },
                    mapMessageTypesToProps: (i = {}, i[se.c.Presence] = "presence", i),
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }]), Object(k.c)("User")], t)
            }(u.Component),
            Ee = Object(a.a)(function(e) {
                return {
                    theme: Object(pe.a)(e),
                    firstPageLoaded: e.session.firstPageLoaded,
                    initialUserAvailabilityIsSet: e.session.initialUserAvailabilityIsSet
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    changeTheme: me.b,
                    initialUserAvailabilitySet: ue.g
                }, e)
            })(Object(r.f)(Ne)),
            Ce = n("8PKe"),
            we = n("6yAw"),
            Oe = (n("HTB+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.renderOnsiteNotifications = function() {
                        return t.props.isLoggedIn ? u.createElement(L.U, {
                            flexGrow: 0,
                            alignSelf: L.d.Center,
                            flexWrap: L.K.NoWrap,
                            padding: {
                                left: .5,
                                right: 1
                            },
                            flexShrink: 0
                        }, u.createElement(S, null)) : null
                    }, t.renderTwitchPrimeCrown = function(e) {
                        return u.createElement(L.U, {
                            className: "top-nav__prime",
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                x: .5
                            },
                            alignSelf: L.d.Center,
                            flexWrap: L.K.NoWrap
                        }, !e && u.createElement(Ce.b, null))
                    }, t.renderStoreLink = function() {
                        var e = !1;
                        if (t.props.data) {
                            if (t.props.data.loading || t.props.data.error) return null;
                            e = !!t.props.data.currentUser && t.props.data.currentUser.hasPrime
                        }
                        return !t.props.isLoggedIn || e ? null : u.createElement(L.S, {
                            targetBlank: !0,
                            linkTo: h.a,
                            "data-a-target": "store-link-dropdown",
                            "data-test-selector": "store-link-dropdown"
                        }, u.createElement(L.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(m.d)("Store", "TopNav")))
                    }, t.saveEllipsisRef = function(e) {
                        return t.ellipsisMenu = e
                    }, t.onNavigationClicked = function() {
                        t.ellipsisMenu.toggleBalloon(!1)
                    }, t.renderBrowseLink = function(e) {
                        var t = e.match,
                            n = t && "following" !== t.params.subpage,
                            i = Object(m.d)("Browse", "TopNav");
                        return u.createElement(r.a, {
                            className: "top-nav__nav-link" + (n ? " active" : ""),
                            "data-a-target": "browse-link",
                            title: i,
                            to: {
                                pathname: "/directory",
                                state: {
                                    medium: v.PageviewMedium.TopNav,
                                    content: v.PageviewContent.Games
                                }
                            }
                        }, i)
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    return d.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return d.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.props.latencyTracking.reportInteractive(), [4, m.n.experiments.getAssignment(y.d)];
                                case 1:
                                    return e = n.sent(), [4, m.n.experiments.getAssignment(y.e)];
                                case 2:
                                    return t = n.sent(), Object(y.h)(e, t) && this.setState({
                                        forYouAssignment: t
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    if (this.props.isLoggedIn) {
                        var t = Object(m.d)("Following", "TopNav"),
                            n = this.state.forYouAssignment === y.b.First ? "/directory/following/foryou" : "/directory/following";
                        e = u.createElement(r.b, {
                            activeClassName: "active",
                            to: {
                                pathname: n,
                                state: {
                                    medium: v.PageviewMedium.TopNav,
                                    content: v.PageviewContent.Following
                                }
                            },
                            className: "top-nav__nav-link",
                            "data-a-target": "following-link",
                            title: t
                        }, t)
                    }
                    return u.createElement(L.P, {
                        position: L._3.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, u.createElement("nav", {
                        className: "top-nav",
                        "data-a-target": "top-nav-container",
                        style: {
                            height: "5rem"
                        }
                    }, u.createElement(L.U, {
                        className: "top-nav__menu",
                        display: L.H.Flex,
                        alignItems: L.c.Stretch,
                        flexWrap: L.K.NoWrap,
                        fullHeight: !0
                    }, u.createElement(L.P, {
                        display: L.H.InlineFlex,
                        alignItems: L.c.Center,
                        flexShrink: 0
                    }, u.createElement(r.a, {
                        to: {
                            pathname: "/",
                            state: {
                                medium: v.PageviewMedium.TopNav,
                                content: v.PageviewContent.Logo
                            }
                        },
                        className: "top-nav__home-link",
                        "data-a-target": "home-link"
                    }, u.createElement(L._9, {
                        asset: L._10.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), u.createElement(L.U, {
                        className: "top-nav__nav-items-container",
                        display: L.H.Flex,
                        alignItems: L.c.Stretch,
                        flexGrow: 1,
                        flexWrap: L.K.NoWrap,
                        flexShrink: 0
                    }, e, u.createElement(r.d, {
                        path: "/directory/:subpage?",
                        children: this.renderBrowseLink
                    }), u.createElement("a", {
                        href: "https://app.twitch.tv/download",
                        "data-a-target": "get-desktop-link",
                        className: "top-nav__nav-link"
                    }, Object(m.d)("Get Desktop", "TopNav")), u.createElement(ie, null), u.createElement(X, null), u.createElement(L.U, {
                        className: "top-nav__ellipsis-button",
                        display: L.H.Flex,
                        alignItems: L.c.Center
                    }, u.createElement(f.a, {
                        ref: this.saveEllipsisRef
                    }, u.createElement(L.v, {
                        icon: L._10.NavMore,
                        overlay: !0,
                        ariaLabel: Object(m.d)("More nav items", "TopNav"),
                        "data-a-target": "ellipsis-button"
                    }), u.createElement(L.p, {
                        direction: L.q.Bottom,
                        tailOffset: 7,
                        size: L.r.Small,
                        "data-a-target": "overflow-menu"
                    }, u.createElement(L.U, {
                        padding: 1
                    }, u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/about",
                        "data-a-target": "about-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("About", "TopNav"))), u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "http://twitchadvertising.tv/",
                        "data-a-target": "advertisers-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Advertisers", "TopNav"))), u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "https://blog.twitch.tv/",
                        "data-a-target": "blog-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Blog", "TopNav"))), u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/legal/community-guidelines",
                        "data-a-target": "community-guidelines-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Community Guidelines", "TopNav"))), u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/cookie-policy",
                        "data-a-target": "cookie-policy-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Cookie Policy", "TopNav"))), u.createElement(L.S, {
                        onClick: this.onNavigationClicked,
                        linkTo: "/directory/game/Creative",
                        "data-a-target": "creative-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Creative", "TopNav"))), u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "https://dev.twitch.tv/",
                        "data-a-target": "developers-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Developers", "TopNav"))), u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/",
                        "data-a-target": "help-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Help", "TopNav"))), u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/jobs",
                        "data-a-target": "jobs-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Jobs", "TopNav"))), u.createElement(f.a, {
                        display: L.H.Block
                    }, u.createElement(L.S, {
                        "data-target": "language-selector-click",
                        "data-a-target": "language-selector"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Language", "TopNav"))), u.createElement(L.p, {
                        size: L.r.Small,
                        direction: L.q.Right,
                        offsetY: "4px",
                        offsetX: "20px",
                        "data-target": "language-selector",
                        "data-a-target": "language-selector-menu"
                    }, u.createElement(p.a, null))), u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "https://music.twitch.tv/",
                        "data-a-target": "music-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Music", "TopNav"))), this.renderStoreLink(), u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/partners",
                        "data-a-target": "partners-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Partners", "TopNav"))), u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/press",
                        "data-a-target": "press-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Press", "TopNav"))), u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "https://twitch.tv/p/security",
                        "data-a-target": "security-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Security", "TopNav"))), u.createElement(L.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/terms-of-service",
                        "data-a-target": "terms-link"
                    }, u.createElement(L.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Terms", "TopNav"))))))), u.createElement(L.U, {
                        className: "top-nav__search",
                        flexGrow: 1,
                        alignSelf: L.d.Center
                    }, u.createElement(K, null))), this.renderTwitchPrimeCrown(), this.renderOnsiteNotifications(), u.createElement(L.U, {
                        className: "top-nav__nav-items-container",
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        flexWrap: L.K.NoWrap,
                        flexGrow: 0,
                        flexShrink: 0
                    }, this.props.isLoggedIn ? u.createElement(Ee, {
                        logout: this.props.logout
                    }) : u.createElement($, {
                        login: this.props.login,
                        signup: this.props.signup
                    })))))
                }, t = d.__decorate([Object(g.a)(we, {
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(k.c)("TopNav")], t)
            }(u.Component)),
            Ue = Object(r.f)(Object(a.a)(function(e) {
                return {
                    isLoggedIn: Object(c.d)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    login: function() {
                        return Object(l.f)(s.a.TopNavSignupButton)
                    },
                    logout: l.g,
                    signup: function() {
                        return Object(l.h)(s.a.TopNavSignupButton)
                    }
                }, e)
            })(Oe));
        n.d(t, "a", function() {
            return "5rem"
        }), n.d(t, "b", function() {
            return "9.5rem"
        }), n.d(t, "c", function() {
            return Ue
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
            return t.length < 2 ? {
                type: "",
                id: ""
            } : {
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
    U3i2: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = {},
                i = function(e) {
                    var t = e.actions.filter(function(e) {
                        return "click" === e.type
                    });
                    return t.length > 0 ? t[0].url : ""
                }(e);
            if (!i) return n;
            var a;
            try {
                a = new URL(i)
            } catch (t) {
                return m.i.error(t.toString(), i + " was malformed from notification id:[" + e.id + "]"), n
            }
            return ! function(e, t) {
                if (U.has(e)) return !1;
                return "https://www.twitch.tv" === t.origin
            }(e.type, a) ? (n.linkTo = function(e, t, n) {
                var i = e.split("?");
                if (1 === i.length) return e + "?tt_content=" + t + "&tt_medium=" + n;
                var a = d.parse(i[1]);
                return a.tt_content = a.tt_content ? a.tt_content : t, a.tt_medium = a.tt_medium ? a.tt_medium : n, [i[0], d.stringify(a, {
                    encode: !1
                })].join("?")
            }(a.toString(), e.type, t), n.targetBlank = !0) : n.linkTo = {
                pathname: a.pathname,
                search: a.search,
                state: {
                    content: e.type,
                    medium: t
                }
            }, n
        }

        function a(e, t) {
            return {
                id: e.id,
                body: e.body_md,
                type: e.type,
                thumbnailURL: e.thumbnail_url,
                createdAt: e.created_at,
                updatedAt: e.updated_at,
                isRead: e.read,
                actions: e.actions.map(function(e) {
                    return {
                        body: e.body,
                        type: e.type,
                        url: e.url,
                        __typename: "OnsiteNotificationAction"
                    }
                }),
                isTransient: !t,
                __typename: "OnsiteNotification"
            }
        }

        function r(e, t) {
            return ne.debug("Received pubsub summary update", e), t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.summary && e.data.summary ? (t.currentUser.notifications.summary.lastSeenAt = e.data.summary.last_seen_at, t.currentUser.notifications.summary.unseenCount = e.data.summary.unseen_view_count, t) : t
        }

        function o(e, t) {
            if (ne.debug("Received pubsub notification update", e), !(t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.edges && t.currentUser.notifications.edges)) return t;
            if (function(e) {
                    return e.type === h.c.OnsiteNotificationsRead
                }(e)) {
                var n = new Set(e.data.notification_ids),
                    i = t.currentUser.notifications.edges.map(function(e) {
                        return n.has(e.node.id) ? c.__assign({}, e, {
                            node: c.__assign({}, e.node, {
                                isRead: !0
                            })
                        }) : e
                    });
                t.currentUser.notifications.edges = i
            } else if (function(e) {
                    return e.type === h.c.OnsiteNotificationCreate || e.type === h.c.OnsiteNotificationUpdate
                }(e)) {
                if (e.data.persistent) {
                    var r = a(e.data.notification, !0);
                    (i = s(t.currentUser.notifications.edges, r.id)).unshift({
                        cursor: null,
                        node: r,
                        __typename: "OnsiteNotificationEdge"
                    }), t.currentUser.notifications.edges = i
                }
            } else(function(e) {
                return e.type === h.c.OnsiteNotificationDelete
            })(e) && (t.currentUser.notifications.edges = s(t.currentUser.notifications.edges, e.data.notification_id));
            return t
        }

        function s(e, t) {
            return e.filter(function(e) {
                return e.node.id !== t
            })
        }
        var l, c = n("TToO"),
            d = n("OAwv"),
            u = n("U7vG"),
            m = n("6sO2"),
            p = n("+Znq"),
            f = n("7vx8"),
            g = n("WIs4"),
            v = n("Ejve"),
            h = n("C8Io"),
            k = n("oIkB"),
            y = n("HZww"),
            b = n("CSlQ"),
            S = n("zCIC"),
            _ = n("BhyV"),
            N = n("gIPD"),
            E = n.n(N),
            C = n("KSGD"),
            w = n("lfvs"),
            O = n("vH/s"),
            U = new Set(["affiliateinvite", "feedcomment", "friendrequests", "partneragreementupdate", "partnerinvite"]),
            F = {
                Center: "center",
                Toast: "toast",
                Browser: "browser"
            },
            x = {
                Open: "open",
                Close: "close",
                MarkAllRead: "mark_all_read"
            },
            T = {
                PrimaryCta: "primary_cta",
                Dismiss: "dismiss"
            },
            D = function(e) {
                var t = {
                    notification_id: e.notification.id,
                    notification_type: e.notification.type,
                    ui_context: e.uiContext
                };
                m.m.track(O.SpadeEventType.NotificationImpression, t)
            },
            I = function(e) {
                var t = {
                    unseen_view_count: e.unseenCount,
                    action: e.action
                };
                m.m.track(O.SpadeEventType.NotificationCenterInteraction, t)
            },
            R = function(e) {
                var t = {
                    notification_id: e.notification.id,
                    notification_type: e.notification.type,
                    ui_context: e.uiContext,
                    action: e.action
                };
                m.m.track(O.SpadeEventType.NotificationInteraction, t)
            },
            L = n("Odds"),
            P = (n("UW/+"), "persistent-notification__delete"),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.impressionEventFired = !1, t.isVisible = function(e) {
                        if (null !== t.element) {
                            var n = t.element.getBoundingClientRect();
                            return n.top < e.bottom && n.bottom > e.top
                        }
                        return !1
                    }, t.setRef = function(e) {
                        return t.element = e
                    }, t.deleteNotification = function() {
                        R({
                            uiContext: F.Center,
                            notification: t.props.data,
                            action: T.Dismiss
                        }), t.props.onDeleteNotification(t.props.data.id)
                    }, t.clickNotification = function() {
                        R({
                            uiContext: F.Center,
                            notification: t.props.data,
                            action: T.PrimaryCta
                        }), t.props.onViewNotification(t.props.data.id)
                    }, t.renderDeleteNotification = function() {
                        return u.createElement(L.U, {
                            className: "persistent-notification__delete",
                            padding: {
                                top: 1,
                                left: 1,
                                right: .5
                            },
                            position: L._3.Absolute
                        }, u.createElement(L.U, {
                            display: L.H.Flex,
                            flexWrap: L.K.NoWrap,
                            alignItems: L.c.Start
                        }, u.createElement(L.v, {
                            ariaLabel: "delete-notification",
                            "data-test-selector": P,
                            icon: L._10.Close,
                            size: L.x.Small,
                            onClick: t.deleteNotification
                        })))
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive();
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : m.i.warn("<PersistentNotification /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return u.createElement(L.U, {
                        className: "persistent-notification",
                        position: L._3.Relative,
                        refDelegate: this.setRef,
                        "data-test-selector": "persistent-notification"
                    }, u.createElement(L._18, {
                        display: L.H.Flex,
                        className: this.props.data.isRead ? "persistent-notification__read" : "persistent-notification__unread",
                        borderBottom: !0,
                        flexWrap: L.K.NoWrap
                    }, u.createElement(L.S, c.__assign({
                        "data-test-selector": "persistent-notification__click",
                        onClick: this.clickNotification
                    }, i(this.props.data, O.PageviewMedium.NotificationCenter), {
                        alpha: !0
                    }), u.createElement(L.U, {
                        className: "persistent-notification__area",
                        display: L.H.Flex,
                        flexWrap: L.K.NoWrap,
                        padding: {
                            top: 1,
                            bottom: 1,
                            left: 1,
                            right: 3
                        }
                    }, u.createElement(L.C, {
                        aspect: L.k.Aspect1x1,
                        imageSrc: this.props.data.thumbnailURL,
                        imageAlt: Object(m.d)("Notification center item thumbnail", "OnsiteNotifications"),
                        size: L.D.Size4
                    }), u.createElement(L.U, {
                        display: L.H.Flex,
                        flexDirection: L.J.Column,
                        flexWrap: L.K.NoWrap,
                        margin: {
                            x: 1
                        }
                    }, u.createElement(L.U, {
                        className: "persistent-notification__body",
                        overflow: L.Z.Hidden,
                        "data-test-selector": "persistent-notification__body"
                    }, u.createElement(L._22, {
                        type: L._27.Span,
                        color: L.F.Alt
                    }, u.createElement(w, {
                        source: this.props.data.body || ""
                    }))), u.createElement(L.U, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        flexShrink: 0,
                        margin: {
                            top: .5
                        }
                    }, u.createElement(L._9, {
                        asset: L._10.MessagesSC,
                        height: 12,
                        width: 12,
                        type: L._11.Alt2
                    }), u.createElement(L.U, {
                        margin: {
                            left: .5
                        }
                    }, u.createElement(L._22, {
                        type: L._27.Span,
                        color: L.F.Alt2
                    }, Object(m.g)(new Date(this.props.data.updatedAt)))))))), this.renderDeleteNotification()))
                }, t.prototype.checkVisible = function(e) {
                    return c.__awaiter(this, void 0, void 0, function() {
                        return c.__generator(this, function(t) {
                            return !this.impressionEventFired && this.isVisible(e) && (D({
                                uiContext: F.Center,
                                notification: this.props.data
                            }), this.impressionEventFired = !0), [2]
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: C.func
                }, t = c.__decorate([Object(b.c)("PersistentNotification")], t)
            }(u.Component),
            j = n("+e5i"),
            V = n("UUPo"),
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isRead: !1
                    }, t.createNotificationData = function() {
                        return {
                            id: "friendrequests",
                            type: "friendrequests",
                            body: Object(m.d)("{count, plural, one {You have # new friend request} other {You have # new friend requests}}", {
                                count: t.props.count
                            }, "FriendRequestsNotification"),
                            createdAt: t.props.date,
                            updatedAt: t.props.date,
                            isRead: t.props.isOldNotification || t.state.isRead,
                            thumbnailURL: E.a,
                            actions: [{
                                body: "View",
                                type: "click",
                                url: "https://www.twitch.tv/friends/requests"
                            }]
                        }
                    }, t.clearUnseenCount = function() {
                        Object(k.d)(V, {}, function(e) {
                            return e.currentUser.incomingFriendRequests.totalUnreadCount = 0, e
                        }), t.props.clearUnreadFriendRequests().then(function() {}).catch(function(e) {
                            return m.i.error(e, "[FriendRequestsNotification] Failed to clear unread requests.")
                        })
                    }, t.viewFriendRequests = function() {
                        t.setState({
                            isRead: !0
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(A, {
                        key: "friendRequestsNotification",
                        data: this.createNotificationData(),
                        onDeleteNotification: this.clearUnseenCount,
                        onViewNotification: this.viewFriendRequests
                    })
                }, t
            }(u.Component),
            M = Object(_.compose)(Object(f.a)(j, {
                name: "clearUnreadFriendRequests"
            }))(H),
            B = (n("cLQP"), "center-window__empty"),
            q = "center-window__content-footer",
            G = "center-window__footer__text",
            W = "center-window__read-all",
            z = m.i.withCategory("onsite-notifications-center-window"),
            Q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoadingMore: !1
                    }, t.renderContent = function() {
                        if (!t.props.hasInitiallyLoaded || t.props.data.length || t.props.friendRequestsData) {
                            return [t.mapPersistentNotificationElements(), t.renderContentFooter()]
                        }
                        return t.renderEmptyCenterWindowElement()
                    }, t.renderContentFooter = function() {
                        var e = !t.props.hasInitiallyLoaded || t.state.isLoadingMore ? u.createElement(L.Y, {
                            delay: 0,
                            fillContent: !0
                        }) : u.createElement(L._9, {
                            asset: L._10.LogoGlitch,
                            width: 24,
                            height: 24,
                            type: L._11.Alt2
                        });
                        return u.createElement(L.U, {
                            className: "center-window__content-footer",
                            key: "center-window__content-footer",
                            "data-test-selector": q,
                            display: L.H.Flex,
                            flexDirection: L.J.Column,
                            justifyContent: L.T.Center,
                            alignItems: L.c.Center,
                            textAlign: L._23.Center,
                            padding: 1,
                            flexGrow: 1
                        }, e)
                    }, t.mapPersistentNotificationElements = function() {
                        var e = t.props.data.map(function(e) {
                            return u.createElement(A, {
                                key: "onsite-notification-" + e.node.id,
                                data: e.node,
                                onDeleteNotification: t.props.onDeleteNotification,
                                onViewNotification: t.props.onViewNotification
                            })
                        });
                        return t.props.friendRequestsData && e.unshift(u.createElement(M, c.__assign({}, t.props.friendRequestsData))), e
                    }, t.renderEmptyCenterWindowElement = function() {
                        return u.createElement(L._18, {
                            "data-test-selector": B,
                            className: "center-window__empty-state",
                            background: L.m.Alt,
                            display: L.H.Flex,
                            justifyContent: L.T.Center,
                            alignItems: L.c.Center,
                            textAlign: L._23.Center,
                            flexDirection: L.J.Column,
                            padding: 2,
                            fullWidth: !0
                        }, u.createElement(L._9, {
                            asset: L._10.LogoGlitch,
                            width: 100,
                            height: 100,
                            type: L._11.Placeholder
                        }), u.createElement(L.U, {
                            margin: {
                                top: 1
                            }
                        }, u.createElement(L._22, {
                            type: L._27.H5,
                            color: L.F.Alt2
                        }, Object(m.d)("Hooray! You're in the clear!", "OnsiteNotifications"))))
                    }, t.renderMarkAsRead = function() {
                        return 0 !== t.props.data.length || t.props.friendRequestsData ? u.createElement(L.u, {
                            "data-test-selector": W,
                            type: L.z.Text,
                            size: L.x.Small,
                            disabled: 0 === t.props.data.length && !t.props.friendRequestsData,
                            onClick: t.props.onReadAllNotifications
                        }, Object(m.d)("Mark All as Read", "OnsiteNotifications")) : null
                    }, t.renderNotificationsHeaderElement = function() {
                        return u.createElement(L._18, {
                            className: "center-window__header",
                            background: L.m.Alt,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            display: L.H.Flex,
                            alignItems: L.c.Center,
                            justifyContent: L.T.Between,
                            borderBottom: !0
                        }, u.createElement(L._22, {
                            type: L._27.H6,
                            color: L.F.Alt2,
                            bold: !0
                        }, Object(m.d)("Notifications", "OnsiteNotifications")), t.renderMarkAsRead())
                    }, t.renderUnreadNotificationsFooterElement = function() {
                        var e = 0 === t.props.newNotificationsCount ? null : u.createElement(L._22, {
                            "data-test-selector": G,
                            type: L._27.H6,
                            color: L.F.Alt2
                        }, Object(m.d)("{num, plural, one {1 New Notification} other {{num, number} New Notifications} }", {
                            num: t.props.newNotificationsCount
                        }, "OnsiteNotifications"));
                        return u.createElement(L._18, {
                            className: "center-window__footer",
                            background: L.m.Alt,
                            padding: .5,
                            alignItems: L.c.Center,
                            textAlign: L._23.Center,
                            borderTop: !0
                        }, e)
                    }, t.loadMore = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.state.isLoadingMore) return [3, 5];
                                        this.setState({
                                            isLoadingMore: !0
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.onLoadMore()];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        return e = t.sent(), z.error(e, "unexpected loadMore failure"), [3, 4];
                                    case 4:
                                        this.setState({
                                            isLoadingMore: !1
                                        }), t.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return u.createElement(L._18, {
                        className: "center-window",
                        "data-test-selector": "center-window",
                        background: L.m.Alt
                    }, this.renderNotificationsHeaderElement(), u.createElement(S.b, {
                        className: "center-window__scroll",
                        contentClassName: "center-window__scroll-container",
                        suppressScrollX: !0
                    }, u.createElement(L.U, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        flexDirection: L.J.Column,
                        flexGrow: 1,
                        flexWrap: L.K.NoWrap
                    }, this.renderContent(), u.createElement(S.a, {
                        enabled: this.props.data.length > 0 && !!this.props.data[this.props.data.length - 1].cursor,
                        contentLength: this.props.data.length,
                        loadMore: this.loadMore,
                        pixelThreshold: 200
                    }))), this.renderUnreadNotificationsFooterElement())
                }, t = c.__decorate([Object(b.c)("OnsiteNotificationsCenterWindow")], t)
            }(u.Component),
            K = n("RH2O"),
            $ = n("Aj/L"),
            Z = n("RweG"),
            Y = (n("MnLQ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.closeTimeout = 0, t.close = function() {
                        R({
                            uiContext: F.Toast,
                            notification: t.props.item,
                            action: T.Dismiss
                        }), t.props.close(t.props.index)
                    }, t.onMouseEnter = function() {
                        t.cancelCloseTimer()
                    }, t.onMouseLeave = function() {
                        t.scheduleCloseTimer()
                    }, t.view = function() {
                        R({
                            uiContext: F.Toast,
                            notification: t.props.item,
                            action: T.PrimaryCta
                        }), t.props.view(t.props.index)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.scheduleCloseTimer()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), D({
                        uiContext: F.Toast,
                        notification: this.props.item
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.cancelCloseTimer()
                }, t.prototype.render = function() {
                    return u.createElement(L.e, {
                        type: L.i.BounceIn,
                        duration: L.g.Medium,
                        enabled: !0
                    }, u.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        "data-test-selector": "onsite-notification-toast__mouse-enter-detector"
                    }, u.createElement(L._18, {
                        className: "onsite-notification-toast",
                        background: L.m.Base,
                        display: L.H.Flex,
                        flexWrap: L.K.NoWrap,
                        margin: {
                            bottom: 1
                        },
                        border: !0
                    }, u.createElement(L.S, c.__assign({
                        onClick: this.view,
                        alpha: !0
                    }, i(this.props.item, O.PageviewMedium.NotificationToast)), u.createElement(L.U, {
                        className: "onsite-notification-toast__container",
                        display: L.H.Flex,
                        flexWrap: L.K.NoWrap
                    }, u.createElement(L.U, {
                        padding: {
                            y: 1,
                            left: 1
                        },
                        display: L.H.Flex,
                        flexShrink: 0
                    }, u.createElement(L.C, {
                        aspect: L.k.Aspect1x1,
                        imageSrc: this.props.item.thumbnailURL,
                        imageAlt: Object(m.d)("Notification toast thumbnail", "OnsiteNotifications"),
                        size: L.D.Size4
                    })), u.createElement(L.U, {
                        display: L.H.Flex,
                        flexDirection: L.J.Column,
                        flexWrap: L.K.NoWrap,
                        flexGrow: 1,
                        padding: 1
                    }, u.createElement(L.U, {
                        className: "onsite-notification-toast__body",
                        overflow: L.Z.Hidden
                    }, u.createElement(L._18, {
                        color: L.F.Alt
                    }, u.createElement(w, {
                        source: this.props.item.body
                    }))), u.createElement(L.U, {
                        margin: {
                            top: .5
                        },
                        flexShrink: 0
                    }, u.createElement(L._18, {
                        color: L.F.Alt2
                    }, Object(m.g)(new Date(this.props.item.updatedAt))))))), this.renderActions())))
                }, t.prototype.renderActions = function() {
                    return u.createElement(L._18, {
                        className: "onsite-notification-toast__action-wrapper",
                        display: L.H.Flex,
                        alignContent: L.b.Stretch,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexDirection: L.J.Column,
                        borderLeft: !0
                    }, u.createElement(L._18, {
                        className: "onsite-notification-toast__action",
                        display: L.H.Flex,
                        alignContent: L.b.Stretch,
                        flexGrow: 1,
                        borderBottom: !0
                    }, u.createElement(L.S, c.__assign({
                        onClick: this.view,
                        "data-test-selector": "onsite-notification-toast__view",
                        alpha: !0
                    }, i(this.props.item, O.PageviewMedium.NotificationToast)), u.createElement(L._18, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        justifyContent: L.T.Center,
                        fullHeight: !0,
                        flexGrow: 1,
                        padding: .5
                    }, u.createElement(L._22, {
                        color: L.F.Link
                    }, this.primaryCTAText())))), u.createElement(L._18, {
                        className: "onsite-notification-toast__action",
                        display: L.H.Flex,
                        alignContent: L.b.Stretch,
                        flexGrow: 1
                    }, u.createElement(L.S, {
                        onClick: this.close,
                        "data-test-selector": "onsite-notification-toast__close",
                        alpha: !0
                    }, u.createElement(L._18, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        justifyContent: L.T.Center,
                        fullHeight: !0,
                        flexGrow: 1,
                        padding: .5
                    }, u.createElement(L._22, {
                        color: L.F.Alt2
                    }, Object(m.d)("Close", "OnsiteNotifications"))))))
                }, t.prototype.primaryCTAText = function() {
                    var e = this.props.item.actions.find(function(e) {
                        return "click" === e.type
                    });
                    return e ? e.body : Object(m.d)("View", "OnsiteNotifications")
                }, t.prototype.scheduleCloseTimer = function() {
                    var e = this;
                    this.cancelCloseTimer(), this.closeTimeout = setTimeout(function() {
                        e.props.close(e.props.index), e.closeTimeout = 0
                    }, 1e4)
                }, t.prototype.cancelCloseTimer = function() {
                    this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = 0)
                }, t
            }(u.Component)),
            X = Object(b.c)("OnsiteNotificationToast")(Y),
            J = (n("L6HU"), m.i.withCategory("toast-manager")),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        notifications: []
                    }, t.view = function(e) {
                        var n = t.state.notifications[e];
                        t.props.onViewNotification(n.id, !n.isTransient), t.close(e)
                    }, t.close = function(e) {
                        var n = t.state.notifications.slice();
                        n.splice(e, 1), t.setState({
                            notifications: n
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.conditionallyInsertTestData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.pubsub.messages.info,
                        n = e.pubsub.messages.info;
                    if (n && n.data.toast && (!t || n.data.notification.id !== t.data.notification.id || n.data.notification.updated_at !== t.data.notification.updated_at)) {
                        J.debug("Received pubsub update", e.pubsub.messages.info);
                        var i = a(n.data.notification, n.data.persistent);
                        this.onNewNotification(i)
                    }
                }, t.prototype.render = function() {
                    return u.createElement(L.U, {
                        className: "onsite-notifications-toast-manager",
                        position: L._3.Absolute,
                        margin: {
                            top: 5
                        },
                        "data-test-selector": "onsite-notifications-toast-manager"
                    }, this.renderToasts())
                }, t.prototype.conditionallyInsertTestData = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return c.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return m.a.buildType !== v.a.Production && d.parse(window.location.search).onsite_test_data ? [4, n.e(31).then(n.bind(null, "SFZn"))] : [3, 2];
                                case 1:
                                    e = i.sent().MockOnsiteNotifications, t = e.getMockOnsiteNotificationModels(3), this.setState({
                                        notifications: t
                                    }), i.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.renderToasts = function() {
                    var e = this,
                        t = this.state.notifications.map(function(t, n) {
                            return u.createElement(X, {
                                key: t.id,
                                item: t,
                                index: n,
                                view: e.view,
                                close: e.close
                            })
                        });
                    return 0 === t.length ? null : t
                }, t.prototype.onNewNotification = function(e) {
                    var t = this.state.notifications.slice(),
                        n = t.findIndex(function(t) {
                            return t.id === e.id
                        });
                    n > -1 && t.splice(n, 1), t.unshift(e), t.length > 3 && t.pop(), this.setState({
                        notifications: t
                    })
                }, t = c.__decorate([Object(b.c)("OnsiteNotificationToastManager"), Object(Z.a)([{
                    topic: function(e) {
                        return Object(y.e)("" + (e.currentUser && e.currentUser.id))
                    },
                    mapMessageTypesToProps: (l = {}, l[h.c.OnsiteNotificationCreate] = "info", l[h.c.OnsiteNotificationUpdate] = "info", l),
                    skip: function(e) {
                        return !e.currentUser
                    }
                }])], t)
            }(u.Component),
            te = Object(K.a)(function(e) {
                return {
                    currentUser: Object($.c)(e)
                }
            })(ee),
            ne = m.i.withCategory("onsite-pubsub-mutators"),
            ie = n("XF1M"),
            ae = n("UhWx"),
            re = n("WfBs"),
            oe = n("c8sn"),
            se = n("wHbv");
        n("adox");
        n.d(t, "a", function() {
            return me
        }), n.d(t, "b", function() {
            return ve
        });
        var le = m.i.withCategory("onsite-notifications"),
            ce = "onsite-notifications__badge",
            de = "99+",
            ue = 5e3,
            me = 10,
            pe = 100,
            fe = {
                align: L._31.Center,
                direction: L._32.Bottom,
                label: ""
            },
            ge = {
                limit: me,
                cursor: ""
            },
            ve = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        newNotificationsCount: 0,
                        newFriendRequestsBadgeCount: 0,
                        isFriendRequestsNotificationUnread: !1
                    }, t.newNotificationsCountTimer = 0, t.hasInsertedSummaryData = !1, t.hasInsertedListNotificationsData = !1, t.viewNotification = function(e, n) {
                        void 0 === n && (n = !0), t.centerWindowToggleBalloon.toggleBalloon(!1), n && t.readNotification(e)
                    }, t.conditionallyInsertSummaryTestData = function() {
                        t.summaryDataLoaded(t.props) && !t.hasInsertedSummaryData && m.a.buildType !== v.a.Production && d.parse(window.location.search).onsite_test_data && (t.hasInsertedSummaryData = !0, Object(k.d)(oe, c.__assign({}, t.props.summaryData.variables), function(e) {
                            return e.currentUser.notifications.summary.unseenCount = d.parse(window.location.search).onsite_test_data, e
                        }))
                    }, t.conditionallyInsertListNotificationsTestData = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.listDataLoaded() && !this.hasInsertedListNotificationsData && m.a.buildType !== v.a.Production && d.parse(window.location.search).onsite_test_data ? (this.hasInsertedListNotificationsData = !0, [4, n.e(31).then(n.bind(null, "SFZn"))]) : [3, 2];
                                    case 1:
                                        e = t.sent().MockOnsiteNotifications, Object(k.d)(ae, c.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = e.getMockOnsiteNotificationEdges(d.parse(window.location.search).onsite_test_data), t
                                        }), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.summaryDataLoaded = function(e) {
                        return e.summaryData && !e.summaryData.loading && !e.summaryData.error && e.summaryData.currentUser && e.summaryData.currentUser.notifications && e.summaryData.currentUser.notifications.summary && e.summaryData.currentUser.incomingFriendRequests
                    }, t.listDataLoaded = function() {
                        return t.props.listData && t.props.listData.currentUser && t.props.listData.currentUser.notifications && void 0 !== t.props.listData.currentUser.notifications.edges
                    }, t.hasNewFriendRequests = function(e) {
                        var t = e.summaryData.currentUser;
                        if (t.incomingFriendRequests && t.incomingFriendRequests.newestEdge && t.incomingFriendRequests.newestEdge.createdAt) {
                            var n = new Date(t.incomingFriendRequests.newestEdge.createdAt),
                                i = new Date(t.notifications.summary.lastSeenAt);
                            return t.incomingFriendRequests.totalUnreadCount > 0 && n > i
                        }
                        return !1
                    }, t.getFriendRequestsData = function() {
                        if (t.summaryDataLoaded(t.props)) {
                            var e = t.props.summaryData.currentUser;
                            if (e.incomingFriendRequests && e.incomingFriendRequests.newestEdge) {
                                var n = e.incomingFriendRequests.totalUnreadCount,
                                    i = e.incomingFriendRequests.newestEdge.createdAt;
                                return n && i ? {
                                    count: n,
                                    date: i,
                                    isOldNotification: !t.state.isFriendRequestsNotificationUnread
                                } : void 0
                            }
                        }
                    }, t.toggleCenter = function(e) {
                        e || (t.props.stopDeferring(), t.getUnseenNotificationsAndApplyTimer(), t.viewNotifications()), I({
                            unseenCount: t.getUnseenNotificationsCount(t.props),
                            action: e ? x.Close : x.Open
                        })
                    }, t.getUnseenNotificationsAndApplyTimer = function() {
                        var e = t.state.newNotificationsCount;
                        t.summaryDataLoaded(t.props) && (e = t.getUnseenNotificationsCount(t.props), t.setState({
                            newNotificationsCount: e
                        })), t.clearTimeout(), e > 0 && (t.newNotificationsCountTimer = setTimeout(function() {
                            t.setState({
                                newNotificationsCount: 0
                            }), t.clearTimeout()
                        }, ue))
                    }, t.viewNotifications = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.summaryDataLoaded(this.props)) return [2];
                                        this.setState({
                                            newFriendRequestsBadgeCount: 0
                                        }), e = c.__assign({}, Object(k.a)({}), {
                                            optimisticResponse: {
                                                viewedNotifications: {
                                                    user: {
                                                        notifications: {
                                                            summary: {
                                                                unseenCount: 0,
                                                                lastSeenAt: new Date,
                                                                __typename: "OnsiteNotificationsSummary"
                                                            },
                                                            __typename: "OnsiteNotificationConnection"
                                                        },
                                                        __typename: "User"
                                                    },
                                                    __typename: "ViewedNotificationsPayload"
                                                }
                                            }
                                        }), Object(k.d)(oe, c.__assign({}, this.props.summaryData.variables), function(e) {
                                            return e.currentUser.notifications.summary.unseenCount = 0, e
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.props.viewNotifications(e)];
                                    case 2:
                                        return n.sent(), [3, 4];
                                    case 3:
                                        return t = n.sent(), le.error(t, "failure to read message..."), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.getUnseenNotificationsCount = function(e) {
                        return t.summaryDataLoaded(e) ? e.summaryData.currentUser.notifications.summary.unseenCount + t.state.newFriendRequestsBadgeCount : 0
                    }, t.renderUnseenNotificationsBadge = function() {
                        var e = t.getUnseenNotificationsCount(t.props);
                        if (e > 0) {
                            var n = e >= 100 ? de : e.toString();
                            return u.createElement(L.U, {
                                className: "onsite-notifications__badge",
                                "data-test-selector": ce,
                                position: L._3.Absolute
                            }, u.createElement(L._0, {
                                label: n,
                                type: L._1.Notification
                            }))
                        }
                    }, t.deleteNotification = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = c.__assign({}, Object(k.a)({
                                            id: e
                                        }), {
                                            optimisticResponse: {
                                                deleteNotification: {
                                                    __typename: "DeleteNotificationPayload",
                                                    notification: {
                                                        __typename: "OnsiteNotification",
                                                        id: e
                                                    }
                                                }
                                            }
                                        }), this.listDataLoaded() && Object(k.d)(ae, c.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = t.currentUser.notifications.edges.filter(function(t) {
                                                return t.node.id !== e
                                            }), t
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.deleteOnsiteNotification(t)];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return n = i.sent(), le.error(n, "Unable to delete notification " + e), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.readAllNotifications = function() {
                        if (t.setState({
                                isFriendRequestsNotificationUnread: !1
                            }), t.listDataLoaded()) {
                            I({
                                unseenCount: t.getUnseenNotificationsCount(t.props),
                                action: x.MarkAllRead
                            });
                            var e = t.props.listData.currentUser.notifications.edges.filter(function(e) {
                                return !e.node.isRead
                            }).map(function(e) {
                                return e.node.id
                            });
                            if (0 !== e.length) {
                                var n = function(e, t) {
                                    for (var n = [], i = 0; i < e.length; i += t) {
                                        var a = e.slice(i, i + t);
                                        n.push(a)
                                    }
                                    return n
                                }(e, pe);
                                Object(k.d)(ae, c.__assign({}, t.props.listData.variables), function(e) {
                                    return e.currentUser.notifications.edges = e.currentUser.notifications.edges.map(function(e) {
                                        return c.__assign({}, e, {
                                            node: c.__assign({}, e.node, {
                                                isRead: !0
                                            })
                                        })
                                    }), e
                                });
                                for (var i = 0, a = n; i < a.length; i++) {
                                    var r = a[i];
                                    t.markIDsAsRead(r)
                                }
                            }
                        }
                    }, t.markIDsAsRead = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = e.map(function(e) {
                                            return {
                                                id: e,
                                                isRead: !0,
                                                __typename: "OnsiteNotification"
                                            }
                                        }), n = c.__assign({}, Object(k.a)({
                                            ids: e
                                        }), {
                                            optimisticResponse: {
                                                readNotifications: {
                                                    __typename: "ReadNotificationsPayload",
                                                    notifications: t,
                                                    count: e.length
                                                }
                                            }
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.readOnsiteNotification(n)];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return i = a.sent(), le.error(i, "Unable to read notifications", {
                                            ids: e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.readNotification = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = c.__assign({}, Object(k.a)({
                                            ids: [e]
                                        }), {
                                            optimisticResponse: {
                                                readNotifications: {
                                                    __typename: "ReadNotificationsPayload",
                                                    notifications: [{
                                                        id: e,
                                                        isRead: !0,
                                                        __typename: "OnsiteNotification"
                                                    }],
                                                    count: 1
                                                }
                                            }
                                        }), this.listDataLoaded() && Object(k.d)(ae, c.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = t.currentUser.notifications.edges.map(function(t) {
                                                return t.node.id === e ? c.__assign({}, t, {
                                                    node: c.__assign({}, t.node, {
                                                        isRead: !0
                                                    })
                                                }) : t
                                            }), t
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.readOnsiteNotification(t)];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return n = i.sent(), le.error(n, "Unable to read notification", {
                                            id: e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.loadMore = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(e) {
                                return this.props.listData.loading ? [2] : [2, this.props.loadMore()]
                            })
                        })
                    }, t.clearTimeout = function() {
                        t.newNotificationsCountTimer && (clearTimeout(t.newNotificationsCountTimer), t.newNotificationsCountTimer = 0)
                    }, t.saveCenterWindowToggleBalloonRef = function(e) {
                        return t.centerWindowToggleBalloon = e
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.conditionallyInsertSummaryTestData(), this.conditionallyInsertListNotificationsTestData()
                }, t.prototype.componentWillUnmount = function() {
                    this.clearTimeout()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (this.summaryDataLoaded(e)) {
                        var t = this.hasNewFriendRequests(e);
                        this.setState({
                            newFriendRequestsBadgeCount: t ? 1 : 0
                        }), this.summaryDataLoaded(this.props) || this.setState({
                            isFriendRequestsNotificationUnread: t
                        }), m.n.setBadgeCount(this.getUnseenNotificationsCount(e))
                    }
                }, t.prototype.render = function() {
                    var e = this.props.shouldDefer || !this.listDataLoaded() ? [] : this.props.listData.currentUser.notifications.edges;
                    return fe.label = Object(m.d)("Notifications", "OnsiteNotificationsToolTip"), u.createElement(L.U, {
                        className: "onsite-notifications"
                    }, u.createElement(te, {
                        onViewNotification: this.viewNotification
                    }), u.createElement(L.U, {
                        position: L._3.Relative
                    }, u.createElement(p.a, {
                        onToggle: this.toggleCenter,
                        ref: this.saveCenterWindowToggleBalloonRef,
                        tooltipProps: fe
                    }, u.createElement(L.v, {
                        ariaLabel: Object(m.d)("Open Notifications", "OnsiteNotifications"),
                        size: L.x.Large,
                        icon: L._10.NotificationBell,
                        overlay: !0
                    }), u.createElement(L.p, {
                        "data-test-selector": "center-window__balloon",
                        direction: L.q.BottomRight,
                        size: L.r.Large,
                        offsetX: "10px"
                    }, u.createElement(Q, {
                        newNotificationsCount: this.state.newNotificationsCount,
                        hasInitiallyLoaded: this.listDataLoaded(),
                        data: e,
                        friendRequestsData: this.getFriendRequestsData(),
                        onLoadMore: this.loadMore,
                        onViewNotification: this.viewNotification,
                        onReadAllNotifications: this.readAllNotifications,
                        onDeleteNotification: this.deleteNotification
                    }))), this.renderUnseenNotificationsBadge()))
                }, t = c.__decorate([function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.state = {
                                shouldDefer: !0
                            }, e.stopDeferring = function() {
                                e.state.shouldDefer && e.setState({
                                    shouldDefer: !1
                                })
                            }, e
                        }
                        return c.__extends(n, t), n.prototype.render = function() {
                            var t = {
                                shouldDefer: this.state.shouldDefer,
                                stopDeferring: this.stopDeferring
                            };
                            return u.createElement(e, c.__assign({}, this.props, t))
                        }, n
                    }(u.Component)
                }, Object(f.a)(oe, {
                    name: "summaryData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(f.a)(se, {
                    name: "viewNotifications"
                }), Object(f.a)(ae, {
                    name: "listData",
                    options: function(e) {
                        return {
                            variables: c.__assign({}, ge, {
                                language: e.languageCode
                            })
                        }
                    },
                    skip: function(e) {
                        return e.shouldDefer
                    },
                    props: function(e) {
                        return c.__assign({}, e, {
                            loadMore: function() {
                                return e.listData.fetchMore({
                                    query: ae,
                                    variables: c.__assign({}, e.listData.variables, {
                                        cursor: e.listData.currentUser ? e.listData.currentUser.notifications.edges[e.listData.currentUser.notifications.edges.length - 1].cursor : ""
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            currentUser: c.__assign({}, n.currentUser, {
                                                notifications: c.__assign({}, n.currentUser.notifications, {
                                                    edges: e.currentUser.notifications.edges.concat(n.currentUser.notifications.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(f.a)(ie, {
                    name: "deleteOnsiteNotification"
                }), Object(f.a)(re, {
                    name: "readOnsiteNotification"
                }), Object(g.a)(function(e) {
                    return {
                        query: oe,
                        skip: !e.currentUser,
                        topic: Object(y.e)("" + (e.currentUser && e.currentUser.id)),
                        types: [h.c.OnsiteNotificationSummaryUpdate, h.c.OnsiteNotificationUpdate, h.c.OnsiteNotificationCreate, h.c.OnsiteNotificationDelete],
                        mutator: r
                    }
                }), Object(g.a)(function(e) {
                    return {
                        query: ae,
                        variables: c.__assign({}, ge, {
                            language: e.languageCode
                        }),
                        skip: !e.currentUser,
                        topic: Object(y.e)("" + (e.currentUser && e.currentUser.id)),
                        types: [h.c.OnsiteNotificationsRead, h.c.OnsiteNotificationUpdate, h.c.OnsiteNotificationCreate, h.c.OnsiteNotificationDelete],
                        mutator: o
                    }
                }), Object(b.c)("OnsiteNotifications", {
                    autoReportInteractive: !0
                })], t)
            }(u.Component)
    },
    UUPo: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FriendRequestsNotification_Query"
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
                                    value: "incomingFriendRequests"
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
                                            value: "totalUnreadCount"
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
                end: 115
            }
        };
        n.loc.source = {
            body: "query FriendRequestsNotification_Query {\ncurrentUser {\nid\nincomingFriendRequests(first: 1) {\ntotalUnreadCount\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "UW/+": function(e, t) {},
    UhWx: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_ListNotifications"
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
                                    value: "notifications"
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
                                        value: "language"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "language"
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
                                                            value: "body"
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
                                                            value: "updatedAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isRead"
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
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "actions"
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
                                                                    value: "body"
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
                                                                    value: "url"
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
                end: 311
            }
        };
        n.loc.source = {
            body: "query OnsiteNotifications_ListNotifications($limit: Int $cursor: Cursor $language: String) {\ncurrentUser {\nid\nnotifications(first: $limit after: $cursor language: $language) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\nid\ntype\nbody\ncreatedAt\nupdatedAt\nisRead\nthumbnailURL\nactions {\nbody\ntype\nurl\n}\n}\n}\n}\n}\n}",
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
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("rCmJ"),
            l = n("+Znq"),
            c = n("czpb"),
            d = n("ieBa"),
            u = n("C/8M"),
            m = n("rzuL"),
            p = n("CSlQ"),
            f = n("Odds"),
            g = Object(c.a)("/settings/profile");
        ! function(e) {
            e.HomePage = "home", e.Channel = "channel", e.Dashboard = "dashboard", e.Contextual = "contextual"
        }(i || (i = {}));
        var v = function(e) {
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
                                a = {
                                    action: u.a.Create,
                                    postID: i[i.length - 1],
                                    postContent: n.body && n.body.content || void 0,
                                    composerLocation: t.props.composerLocation
                                };
                            Object(m.e)(a)
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
                        t = r.createElement(d.b, {
                            key: "emote-picker",
                            onClick: this.toggleEmotePicker
                        }),
                        n = null;
                    this.state.hasInteractedOrPageload && (n = r.createElement(d.c, {
                        channelOwnerID: this.props.userID,
                        onClickEmote: this.onClickEmote,
                        toggleVisibility: this.toggleEmotePicker,
                        visible: this.state.isEmotePickerMenuVisible && !this.state.disabled,
                        direction: f.q.BottomRight
                    }));
                    var i, a = r.createElement(s.a, {
                        onClickOut: this.onEmotePickerClickOut
                    }, t, n);
                    return i = this.props.isConnectedToTwitter ? r.createElement(f.E, {
                        "data-test-selector": "twitter-checkbox",
                        id: "share-twitter-toggle",
                        label: Object(o.d)("Share Posts to Twitter", "TwitterShare"),
                        onChange: this.toggleShareActivity,
                        checked: this.state.shareToTwitter
                    }) : r.createElement("a", {
                        href: g
                    }, Object(o.d)("Connect Twitter", "ConnectTwitter")), r.createElement(f._18, {
                        elevation: 1,
                        padding: 1,
                        margin: {
                            bottom: 1
                        },
                        background: f.m.Base,
                        position: f._3.Relative,
                        "data-a-target": "pulse-post-container"
                    }, r.createElement("div", {
                        onMouseEnter: this.onMouseEnter
                    }, r.createElement(f._24, {
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
                        overflow: f.Z.Hidden
                    }), r.createElement(f._18, {
                        textAlign: f._23.Right,
                        position: f._3.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, a), r.createElement(f.U, {
                        display: f.H.Flex,
                        margin: {
                            top: 1
                        }
                    }, r.createElement(f.U, {
                        flexGrow: 1
                    }), r.createElement(f.U, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(s.a, {
                        onClickOut: this.closeTwitterBubble
                    }, r.createElement(l.a, null, r.createElement(f.v, {
                        icon: f._10.Gear,
                        ariaLabel: Object(o.d)("Composer Settings", "ComposerSettings"),
                        "data-test-selector": "composer-setting",
                        "data-a-target": "pulse-settings"
                    }), r.createElement(f.p, {
                        direction: f.q.Left
                    }, r.createElement(f.U, {
                        padding: 1
                    }, i))))), r.createElement(f.U, null, r.createElement(f.u, {
                        "data-test-selector": "submit-post",
                        disabled: this.state.disabled,
                        ariaLabel: e,
                        onClick: this.onSubmit,
                        "data-a-target": "pulse-post-button"
                    }, e)))))
                }, t.prototype.resize = function() {
                    this.textArea && (this.textArea.style.height = this.minHeight + "px", this.textArea.style.height = this.textArea.scrollHeight + "px")
                }, t = a.__decorate([Object(p.c)("Composer")], t)
            }(r.Component),
            h = n("RH2O"),
            k = Object(h.a)(function(e, t) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(v);
        n.d(t, !1, function() {
            return "composer"
        }), n.d(t, !1, function() {
            return "submit-post"
        }), n.d(t, !1, function() {
            return "twitter-checkbox"
        }), n.d(t, !1, function() {
            return "composer-setting"
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, !1, function() {
            return v
        }), n.d(t, "a", function() {
            return k
        })
    },
    VMA7: function(e, t, n) {
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
            }],
            loc: {
                start: 0,
                end: 522
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/feed/models/post-fragment.gql"\n#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\n#import "twilight/features/feed/models/stream-fragment.gql"\nfragment feed on FeedItemConnection {\nedges {\nnode {\ncontent {\n...feedItemClip\n...feedItemPost\n...feedItemStream\n...feedItemVideo\n}\nreasons {\n... on FeedItemReason {\nreason\n}\n}\ntracking {\nbatchID\ncardImpressionID\nrecGenerationID\nrecGenerationIndex\n}\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("S0OZ").definitions)), a.definitions = a.definitions.concat(i(n("I5q7").definitions)), a.definitions = a.definitions.concat(i(n("fWQn").definitions)), a.definitions = a.definitions.concat(i(n("rogX").definitions)), e.exports = a
    },
    WKwZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "b", function() {
            return s
        });
        var i, a = "carousel-player__main-description",
            r = "carousel-player-left-button",
            o = "carousel-player-right-button";
        ! function(e) {
            e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
        }(i || (i = {}));
        var s;
        ! function(e) {
            e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
        }(s || (s = {}))
    },
    WfBs: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_ReadNotifications"
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
                                value: "ReadNotificationsInput"
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
                            value: "readNotifications"
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
                                    value: "notifications"
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
                                            value: "isRead"
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
                end: 148
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_ReadNotifications($input: ReadNotificationsInput!) {\nreadNotifications(input: $input) {\nnotifications {\nid\nisRead\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Wjt1: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            switch (t) {
                case d.FeaturedBroadcastersRenderContext.AnonFront:
                    return r.createElement(l.a, {
                        items: e,
                        isLoading: n,
                        layout: c.c.Horizontal,
                        showCounts: !0,
                        darkTheme: !0
                    });
                default:
                    return r.createElement(f._18, {
                        className: "featured-content",
                        background: f.m.Base,
                        elevation: 1
                    }, r.createElement(f.U, {
                        padding: 1
                    }, function(e) {
                        return e ? r.createElement(f._22, {
                            fontSize: f.L.Size5,
                            color: f.F.Alt2
                        }, r.createElement(f._2, {
                            width: 100
                        })) : r.createElement(f._22, {
                            fontSize: f.L.Size5,
                            color: f.F.Alt2
                        }, Object(o.d)("Featured", "FeaturedContentComponent"))
                    }(n)), r.createElement(l.a, {
                        items: e,
                        isLoading: n,
                        layout: c.c.Vertical,
                        showCounts: !0
                    }))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.placeholderFeaturedBroadcasters = function(e) {
            return i([], e, !0)
        }, n.d(t, "FeaturedContent", function() {
            return g
        });
        var a = n("TToO"),
            r = n("U7vG"),
            o = (n.n(r), n("6sO2")),
            s = n("7vx8"),
            l = n("g91j"),
            c = n("WKwZ"),
            d = n("o8Pq"),
            u = n("8atL"),
            m = (n.n(u), n("Xg86")),
            p = n("CSlQ"),
            f = n("Odds");
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return d.FeaturedBroadcastersRenderContext
        });
        var g = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return a.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(m.a)(e),
                    n = this.props.data.featuredVideos || [],
                    a = Object(m.b)(n);
                if (t.length > 0 && t.splice(t.length - a.length), this.props.shouldMixContent && a.length > 0) {
                    var r = 6 - a.length,
                        o = t.splice(r);
                    t = t.concat(a).concat(o)
                } else t = t.concat(a);
                var s = !(!this.props.data.loading && !this.props.data.error);
                return i(t, this.props.renderContext, s)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = a.__decorate([Object(s.a)(u, {
                options: function() {
                    return {
                        variables: {
                            language: o.n.intl.getLanguageCode()
                        }
                    }
                }
            }), Object(p.c)("FeaturedContent")], t)
        }(r.Component)
    },
    XF1M: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_DeleteNotification"
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
                                value: "DeleteNotificationInput"
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
                            value: "deleteNotification"
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
                                    value: "notification"
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
                end: 143
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_DeleteNotification($input: DeleteNotificationInput!) {\ndeleteNotification(input: $input) {\nnotification {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Xg86: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.replace(/\[\]\(.+\)/, "")
        }
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
                        type: a.b.Stream,
                        subType: e.stream ? e.stream.type : "",
                        viewersCount: e.stream ? e.stream.viewersCount : 0
                    },
                    description: i(e.description || ""),
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
                        type: a.b.Vod,
                        subType: "video",
                        viewersCount: e.video ? e.video.viewCount : 0
                    },
                    description: i(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        };
        var a = n("WKwZ")
    },
    "Xh/U": function(e, t, n) {
        "use strict";

        function i(e) {
            var t = [];
            return e && 0 !== e.length && (t = e.slice().sort(function(e, t) {
                return function(e, t) {
                    if (e.emote.id === Z.emote.id) return -1;
                    if (t.emote.id === Z.emote.id) return 1;
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

        function a(e, t, n) {
            void 0 === t && (t = []);
            for (var i, a = [], r = e.split(/\n/), s = function(e, s) {
                    e > 0 && (s += r[e - 1].length + 1);
                    var l = t.map(function(e) {
                            return function(e, t) {
                                return {
                                    emoteID: e.emoteID,
                                    from: e.from - t,
                                    to: e.to - t,
                                    setID: e.setID
                                }
                            }(e, s)
                        }).filter(function(t) {
                            return ! function(e, t) {
                                return e.from < 0 || e.from >= t || e.to < 0 || e.to >= t
                            }(t, r[e].length)
                        }),
                        c = Object(M.f)(r[e], Object(ne.b)(l), 0, {}, !1, n);
                    a.push(o.createElement(u._22, {
                        key: e
                    }, function(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var i = e[n];
                            switch (i.type) {
                                case te.a.ClipLink:
                                    t.push(o.createElement("a", {
                                        key: n,
                                        href: i.content.url,
                                        target: "_blank"
                                    }, i.content.url));
                                    break;
                                case te.a.VideoLink:
                                case te.a.Link:
                                    i.content.url.match(ie) ? t.push(o.createElement(h.a, {
                                        key: n,
                                        to: i.content.url.replace(ie, "")
                                    }, i.content.displayText)) : t.push(o.createElement("a", {
                                        key: n,
                                        href: i.content.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, i.content.displayText));
                                    break;
                                case te.a.Mention:
                                    t.push(o.createElement(h.a, {
                                        key: n,
                                        to: "/" + i.content.recipient
                                    }, i.content.recipient));
                                    break;
                                case te.a.Emote:
                                    i.content.images.themed || t.push(o.createElement("img", {
                                        key: n,
                                        src: i.content.images.sources["1x"],
                                        alt: i.content.alt
                                    }));
                                    break;
                                case te.a.Text:
                                    t.push(o.createElement("span", {
                                        key: n
                                    }, i.content))
                            }
                        }
                        return t
                    }(c))), i = s
                }, l = 0, c = 0; l < r.length; l++) s(l, c), c = i;
            return a
        }

        function r(e) {
            return void 0 !== ae[e]
        }
        var o = n("U7vG"),
            s = n("TToO"),
            l = n("C/8M"),
            c = n("rzuL"),
            d = n("CSlQ"),
            u = n("Odds"),
            m = n("RH2O"),
            p = n("2KeS"),
            f = n("/7C1"),
            g = n("KSGD"),
            v = n("4mYF"),
            h = n("F8kA"),
            k = Object(d.c)("EmbedInfo", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.author,
                    n = e.title,
                    i = e.description,
                    a = null,
                    r = null;
                return t && (a = o.createElement(u.U, {
                    margin: {
                        right: 1
                    },
                    flexShrink: 0
                }, o.createElement(h.a, {
                    to: "/" + t.login,
                    "data-a-target": "pulse-profile-picture"
                }, o.createElement(u.P, {
                    flexShrink: 0
                }, o.createElement(u.l, {
                    size: 40,
                    imageSrc: t.profileImageURL,
                    imageAlt: "User profile picture"
                })))), r = o.createElement(u._22, {
                    fontSize: u.L.Size6,
                    color: u.F.Alt
                }, o.createElement(h.a, {
                    to: "/" + t.login,
                    "data-a-target": "pulse-displayname-link"
                }, t.displayName))), o.createElement(u._18, {
                    display: u.H.Flex,
                    flexWrap: u.K.NoWrap,
                    padding: 1,
                    background: u.m.Base
                }, a, o.createElement(u.U, {
                    flexGrow: 1,
                    overflow: u.Z.Hidden
                }, r, o.createElement(u._22, {
                    fontSize: u.L.Size6,
                    color: u.F.Base,
                    bold: !0,
                    ellipsis: !0
                }, n), i && o.createElement(u._22, {
                    fontSize: u.L.Size6,
                    color: u.F.Alt2,
                    noWrap: !0
                }, i)))
            }),
            y = n("NqVV"),
            b = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    a = n.clipTitle,
                    r = n.clipCreatedAt,
                    s = n.durationSeconds,
                    l = n.embedURL,
                    d = n.thumbnailURL,
                    m = n.video,
                    p = n.viewCount,
                    f = m && m.game ? m.game.name : "";
                return o.createElement(u.U, null, o.createElement(v.a, {
                    createdAt: r,
                    lengthSeconds: s,
                    onClick: function() {
                        e.pauseCarousel && e.pauseCarousel(), Object(c.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: d,
                    type: v.b.Clip,
                    viewCount: p
                }, o.createElement(y.a, {
                    embedURL: l
                })), o.createElement(k, {
                    author: i,
                    title: a,
                    description: f
                }))
            };
        b.contextTypes = {
            feedTrackingProps: g.object
        };
        var S = Object(d.c)("ClipEmbed", {
                autoReportInteractive: !0
            })(b),
            _ = Object(m.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    pauseCarousel: f.d
                }, e)
            })(S),
            N = n("6sO2"),
            E = Object(d.c)("PhotoOEmbed", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.embed,
                    n = t.inputURL,
                    i = t.thumbnail,
                    a = t.providerName;
                return o.createElement("a", {
                    href: "" + n,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, o.createElement(u.j, {
                    ratio: u.k.Aspect16x9
                }, o.createElement(u.U, null, o.createElement(u.P, {
                    fullWidth: !0,
                    fullHeight: !0,
                    position: u._3.Absolute
                }, o.createElement("img", {
                    src: i && i.url || N.n.config.defaultStreamPreviewURL
                })))), o.createElement(k, {
                    title: a
                }))
            }),
            C = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    a = n.game,
                    r = n.title,
                    s = n.previewImageURL,
                    l = n.viewersCount,
                    d = a ? a.name : "";
                return o.createElement(u.U, null, o.createElement(v.a, {
                    onClick: function() {
                        Object(c.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: s,
                    type: v.b.Stream,
                    viewCount: l
                }, o.createElement(y.a, {
                    channelLogin: i.login
                })), o.createElement(k, {
                    author: i,
                    title: r,
                    description: d
                }))
            };
        C.contextTypes = {
            feedTrackingProps: g.object
        };
        var w = Object(d.c)("StreamEmbed", {
                autoReportInteractive: !0
            })(C),
            O = function(e, t) {
                var n = e.embed,
                    i = n.id,
                    a = n.owner,
                    r = n.lengthSeconds,
                    s = n.game,
                    l = n.publishedAt,
                    d = n.previewThumbnailURL,
                    m = n.title,
                    p = n.videoViewCount,
                    f = s ? s.name : "";
                return o.createElement(u.U, null, o.createElement(v.a, {
                    createdAt: l,
                    lengthSeconds: r,
                    onClick: function() {
                        e.pauseCarousel && e.pauseCarousel(), Object(c.c)(e, t.feedTrackingProps)
                    },
                    thumbnailURL: d,
                    type: v.b.Video,
                    viewCount: p
                }, o.createElement(y.a, {
                    vodID: i
                })), o.createElement(k, {
                    author: a,
                    title: m,
                    description: f
                }))
            };
        O.contextTypes = {
            feedTrackingProps: g.object
        };
        var U = Object(d.c)("VideoEmbed", {
                autoReportInteractive: !0
            })(O),
            F = Object(m.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    pauseCarousel: f.d
                }, e)
            })(U),
            x = (n("HgOP"), function(e, t) {
                var n = e.embed,
                    i = n.html,
                    a = n.thumbnail,
                    r = n.providerName,
                    s = i.replace("autoplay=false", "autoplay=true");
                return o.createElement(u.U, null, o.createElement(v.a, {
                    thumbnailURL: a && a.url || N.n.config.defaultStreamPreviewURL,
                    type: v.b.VideoOEmbed,
                    onClick: function() {
                        Object(c.c)(e, t.feedTrackingProps)
                    }
                }, o.createElement("div", {
                    className: "video-oembed-container",
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                })), o.createElement(k, {
                    title: r
                }))
            });
        x.contextTypes = {
            feedTrackingProps: g.object
        };
        var T, D = {
                PhotoOEmbed: E,
                VideoOEmbed: Object(d.c)("VideoOEmbed", {
                    autoReportInteractive: !0
                })(x),
                Clip: _,
                Stream: w,
                Video: F
            },
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onImpression = function(e) {
                        Object(c.b)({
                            embed: t.props.embed
                        }, e)
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.impressionTracking.onImpression(this.onImpression)
                }, t.prototype.render = function() {
                    var e = D[this.props.embed.__typename];
                    return e ? o.createElement(e, {
                        embed: this.props.embed
                    }) : o.createElement(u.U, null)
                }, t = s.__decorate([Object(d.c)("Embed"), Object(l.c)()], t)
            }(o.Component),
            R = n("+xm8"),
            L = n("f2i/"),
            P = n("Aj/L"),
            A = n("rCmJ"),
            j = n("7vx8"),
            V = n("oIkB"),
            H = n("Tzcg"),
            M = n("l21v"),
            B = (n("kaF0"), function(e) {
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
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setState({
                        hasReacted: e.reaction.self.hasReacted
                    })
                }, t.prototype.render = function() {
                    var e = this.props.reaction.emote,
                        t = e.token;
                    return parseInt(e.id, 10) < 15 && (t = Object(H.c)(e.token)), o.createElement("div", s.__assign({
                        onClick: this.toggleReaction
                    }, Object(u._39)(this.props)), o.createElement(u._30, {
                        label: 0 === this.state.reactionCount ? e.token : this.state.reactionCount + " " + t,
                        direction: u._32.Top,
                        align: u._31.Center
                    }, o.createElement(u.U, {
                        className: this.state.hasReacted ? "activity-reaction activity-reaction--active" : "activity-reaction"
                    }, o.createElement(u.U, {
                        className: "activity-reaction__emote-contain"
                    }, o.createElement("img", {
                        src: Object(M.e)("endorse" === e.id ? "1" : e.id, 3),
                        alt: t,
                        className: "activity-reaction__emote"
                    })))))
                }, t = s.__decorate([Object(d.c)("Reaction")], t)
            }(o.Component)),
            q = Object(d.c)("AdditionalReactions", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.reactions.map(function(t, n) {
                    return o.createElement(u.U, {
                        key: n,
                        margin: {
                            right: 1,
                            bottom: 1
                        }
                    }, o.createElement(B, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "additional-reaction-" + n
                    }))
                });
                return o.createElement(u.U, {
                    position: u._3.Relative
                }, o.createElement(u.p, {
                    direction: u.q.TopCenter,
                    size: u.r.Small,
                    show: !0
                }, o.createElement(u._18, {
                    display: u.H.Flex,
                    padding: {
                        left: 1,
                        top: 1
                    }
                }, t)))
            }),
            G = Object(d.c)("TopReactions", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.reactions.map(function(t, n) {
                    return o.createElement(u.U, {
                        key: n,
                        margin: {
                            right: 1
                        }
                    }, o.createElement(B, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "top-reaction-" + n
                    }))
                });
                return o.createElement(u._18, {
                    display: u.H.Flex
                }, t)
            }),
            W = n("Mlfg"),
            z = n("Dqkc"),
            Q = n("P+j/"),
            K = (n("24qG"), function(e) {
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
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = o.createElement("div", {
                        onClick: this.toggleEmoteSelector,
                        "data-a-target": "add-reaction-button"
                    }, this.props.children);
                    return this.state.emoteSelectorVisible || (e = o.createElement(u._30, {
                        label: Object(N.d)("Add a Reaction", "ReactionSelector"),
                        direction: u._32.Top,
                        align: u._31.Center
                    }, e)), o.createElement(u.U, {
                        className: "reaction-selector",
                        position: u._3.Relative
                    }, o.createElement(A.a, {
                        onClickOut: this.closeEmoteSelector
                    }, this.state.emoteSelectorVisible && o.createElement(Q.a, {
                        onClickEmote: this.onEmoteSelect,
                        visible: this.state.emoteSelectorVisible && this.state.emotesLoaded,
                        toggleVisibility: this.toggleEmoteSelector,
                        onLoad: this.emotesLoaded,
                        direction: u.q.TopLeft
                    }), e))
                }, t = s.__decorate([Object(d.c)("ReactionSelector")], t)
            }(o.Component));
        ! function(e) {
            e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
        }(T || (T = {}));
        var $ = "additional-toggle-tracking",
            Z = {
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
            Y = 4,
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        totalReactionCount: 0,
                        additionalReactionsVisible: !1
                    }, t.addReaction = function(e, n) {
                        return t.toggleReaction(T.Add, e, n)
                    }, t.countTotalReactions = function() {
                        var e = 0;
                        if (t.props.reactions)
                            for (var n = 0, i = t.props.reactions; n < i.length; n++) {
                                e += i[n].count
                            }
                        t.setState({
                            totalReactionCount: e
                        })
                    }, t.hideAdditional = function() {
                        t.setState({
                            additionalReactionsVisible: !1
                        })
                    }, t.removeReaction = function(e, n) {
                        return t.toggleReaction(T.Remove, e, n)
                    }, t.toggleAdditional = function(e, n) {
                        n.preventDefault(), e.length <= Y || t.setState(function(e) {
                            return {
                                additionalReactionsVisible: !e.additionalReactionsVisible
                            }
                        })
                    }, t.toggleReaction = function(e, n, i) {
                        if (!t.props.isLoggedIn) return t.props.login(), Promise.reject(new Error("user not logged in"));
                        var a = i;
                        return parseInt(n, 10) < 15 && (a = Object(H.c)(i)), e === T.Add ? (t.setState(function(e) {
                            return {
                                totalReactionCount: e.totalReactionCount + 1
                            }
                        }), t.props.addReaction(Object(V.a)({
                            entityID: t.props.parentEntity,
                            emoteID: n
                        })).then(function(e) {
                            var i = {
                                action: l.a.Create,
                                entity: t.props.parentEntity,
                                reactionInt: n,
                                reactionText: a
                            };
                            return Object(c.f)(i, t.context.feedTrackingProps), e
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
                        }), t.props.removeReaction(Object(V.a)({
                            entityID: t.props.parentEntity,
                            emoteID: n
                        })).then(function(e) {
                            var i = {
                                action: l.a.Remove,
                                entity: t.props.parentEntity,
                                reactionInt: n,
                                reactionText: a
                            };
                            return Object(c.f)(i, t.context.feedTrackingProps), e
                        }, function(e) {
                            return t.setState(function(e) {
                                return {
                                    totalReactionCount: e.totalReactionCount + 1
                                }
                            }), Promise.reject(e)
                        }))
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.countTotalReactions(), this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = i(this.props.reactions);
                    0 !== t.length && t[0].emote.id === Z.emote.id || (t = [Z].concat(t));
                    var n = function(n) {
                            return e.toggleAdditional(t, n)
                        },
                        a = null;
                    this.state.additionalReactionsVisible && (a = o.createElement(q, {
                        reactions: t.slice(Y),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction
                    }));
                    var r = null;
                    r = o.createElement(G, {
                        reactions: t.slice(0, Y),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction
                    });
                    var s = null;
                    this.props.reactions && this.state.totalReactionCount > 0 && (s = this.props.reactions.length >= Y ? o.createElement("a", {
                        href: "#",
                        onClick: n,
                        "data-test-selector": $
                    }, this.state.totalReactionCount) : o.createElement("span", {
                        "data-test-selector": $,
                        "data-a-target": "pulse-reaction-count"
                    }, this.state.totalReactionCount)), this.state.additionalReactionsVisible || (s = o.createElement(u._30, {
                        label: Object(N.d)("Total Reactions", "ReactionList"),
                        direction: u._32.Top,
                        align: u._31.Center
                    }, s));
                    var l = null;
                    return this.props.isLoggedIn && (l = o.createElement(u.U, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(K, {
                        onEmoteSelect: this.addReaction
                    }, o.createElement(u._9, {
                        asset: u._10.AddReaction,
                        type: u._11.Brand,
                        width: 24,
                        height: 24
                    })))), o.createElement(u._18, {
                        display: u.H.Flex,
                        alignItems: u.c.Center,
                        padding: 1
                    }, r, o.createElement(u.U, {
                        margin: {
                            right: 1
                        }
                    }, l), o.createElement(A.a, {
                        onClickOut: this.hideAdditional
                    }, a, s))
                }, t.contextTypes = {
                    feedTrackingProps: g.object
                }, t = s.__decorate([Object(j.a)(W, {
                    name: "addReaction"
                }), Object(j.a)(z, {
                    name: "removeReaction"
                }), Object(d.c)("Reactions")], t)
            }(o.Component),
            J = Object(m.a)(function(e) {
                return {
                    isLoggedIn: Object(P.d)(e)
                }
            }, function(e) {
                return Object(p.bindActionCreators)({
                    login: function() {
                        return Object(L.f)(R.a.FeedReactionToggle)
                    }
                }, e)
            })(X),
            ee = Object(d.c)("ClipContent", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.content,
                    n = t.slug,
                    i = t.reactions;
                return o.createElement(u.U, null, o.createElement(I, {
                    embed: e.content
                }), o.createElement(J, {
                    parentEntity: "clip:" + n,
                    reactions: i
                }))
            }),
            te = n("mwvJ"),
            ne = n("dQj3"),
            ie = /^(https?:\/\/)?(www.)?twitch\.tv/,
            ae = (n("MTWZ"), {
                Clip: ee,
                Post: Object(d.c)("PostContent", {
                    autoReportInteractive: !0
                })(function(e) {
                    var t = e.content,
                        n = t.author,
                        i = t.body,
                        r = t.createdAt,
                        s = t.embeds,
                        l = t.id,
                        c = t.reactions;
                    return o.createElement(u.U, null, o.createElement(u._18, {
                        display: u.H.Flex,
                        alignItems: u.c.Center,
                        padding: 1,
                        borderBottom: !0
                    }, o.createElement(u.U, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(h.a, {
                        to: {
                            pathname: "/" + n.login,
                            state: {
                                content: "author_avatar",
                                medium: "pulse_card"
                            }
                        },
                        "data-a-target": "pulse-profile-picture"
                    }, o.createElement(u.l, {
                        size: 40,
                        imageSrc: n.profileImageURL,
                        imageAlt: "User profile picture"
                    }))), o.createElement(u.U, {
                        flexGrow: 1
                    }, o.createElement(u.U, {
                        display: u.H.Flex,
                        flexDirection: u.J.Column
                    }, o.createElement(h.a, {
                        to: {
                            pathname: "/" + n.login,
                            state: {
                                content: "author_name",
                                medium: "pulse_card"
                            }
                        }
                    }, o.createElement(u._22, {
                        fontSize: u.L.Size4,
                        color: u.F.Base,
                        bold: !0
                    }, n.displayName)), o.createElement(h.a, {
                        to: "/" + n.login + "/p/" + l,
                        "data-a-target": "pulse-post-link"
                    }, o.createElement(u._30, {
                        label: function(e) {
                            return Object(N.d)("{dateTime, date, medium} {dateTime, time, short}", {
                                dateTime: e
                            }, "PostDate")
                        }(new Date(r)),
                        direction: u._32.Bottom
                    }, o.createElement(u._22, {
                        fontSize: u.L.Size6,
                        color: u.F.Alt2
                    }, Object(N.g)(new Date(r)))))))), i && o.createElement(u._18, {
                        padding: 1,
                        className: "feed-item-text"
                    }, a(i.content, i.emotes, n.login)), o.createElement(u.U, null, s && s.slice(0, 1).map(function(e, t) {
                        return o.createElement(I, {
                            key: t,
                            embed: e
                        })
                    })), o.createElement(J, {
                        parentEntity: "post:" + l,
                        reactions: c
                    }))
                }),
                Video: Object(d.c)("VideoContent", {
                    autoReportInteractive: !0
                })(function(e) {
                    var t = e.content,
                        n = t.id,
                        i = t.reactions;
                    return o.createElement(u.U, null, o.createElement(I, {
                        embed: e.content
                    }), o.createElement(J, {
                        parentEntity: "vod:" + n,
                        reactions: i
                    }))
                }),
                Stream: function(e) {
                    return o.createElement(I, {
                        embed: e.content
                    })
                }
            }),
            re = function(e) {
                var t = ae[e.content.__typename];
                return o.createElement(t, {
                    content: e.content
                })
            };
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return re
        })
    },
    Y4Yc: function(e, t) {
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
                end: 131
            }
        };
        n.loc.source = {
            body: "query OnboardingPrompt_User($limit: Int) {\ncurrentUser {\nid\ndisplayName\ncreatedAt\nfollowedGames(first: $limit) {\nnodes {\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    YSdr: function(e, t) {},
    ZPDF: function(e, t) {
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
                end: 74
            }
        };
        n.loc.source = {
            body: "query StreamerTrailersExperiment {\ncurrentUser {\nid\nlanguage\ncreatedAt\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    adox: function(e, t) {},
    afun: function(e, t) {},
    bNhH: function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            switch (t) {
                case a.AnonFront:
                    return o.createElement(c.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Horizontal,
                        showCounts: i,
                        darkTheme: !0
                    });
                default:
                    return o.createElement(p._18, {
                        className: "featured-broadcasters",
                        background: p.m.Base,
                        elevation: 1
                    }, o.createElement(p.U, {
                        padding: 1
                    }, o.createElement(p._22, {
                        fontSize: p.L.Size5,
                        color: p.F.Alt2
                    }, Object(s.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), o.createElement(c.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Vertical,
                        showCounts: i
                    }))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return a
        }), t.placeholderFeaturedBroadcasters = function(e) {
            return i([], e, !0)
        }, n.d(t, "FeaturedBroadcasters", function() {
            return g
        });
        var a, r = n("TToO"),
            o = n("U7vG"),
            s = (n.n(o), n("6sO2")),
            l = n("7vx8"),
            c = n("g91j"),
            d = n("WKwZ"),
            u = n("Xg86"),
            m = n("CSlQ"),
            p = n("Odds"),
            f = n("uckt");
        n.n(f);
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
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(u.a)(e);
                return this.getRender(t)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = r.__decorate([Object(l.a)(f, {
                options: function(e) {
                    return {
                        variables: {
                            language: s.n.intl.getLanguageCode(),
                            first: e.streamCount || 6
                        }
                    }
                }
            }), Object(m.c)("FeaturedBroadcasters")], t)
        }(o.Component)
    },
    c8sn: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_Summary"
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
                                    value: "notifications"
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
                                            value: "summary"
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
                                                    value: "unseenCount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "lastSeenAt"
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
                                    value: "incomingFriendRequests"
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
                                            value: "totalUnreadCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "newestEdge"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 188
            }
        };
        n.loc.source = {
            body: "query OnsiteNotifications_Summary {\ncurrentUser {\nid\nnotifications {\nsummary {\nunseenCount\nlastSeenAt\n}\n}\nincomingFriendRequests(first: 1) {\ntotalUnreadCount\nnewestEdge {\ncreatedAt\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    cLQP: function(e, t) {},
    cYgC: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("6sO2"),
            r = n("TToO"),
            o = n("C/8M"),
            s = n("rzuL"),
            l = n("CSlQ"),
            c = n("Odds"),
            d = n("Xh/U"),
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
                    return Object(d.b)(this.props.item.content.__typename) ? i.createElement(c._18, r.__assign({
                        elevation: 1,
                        margin: {
                            bottom: 1
                        },
                        background: c.m.Base,
                        position: c._3.Relative
                    }, Object(c._39)(this.props), {
                        className: "feed-item"
                    }), i.createElement(c.U, {
                        position: c._3.Absolute,
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
                    }), i.createElement(d.a, {
                        content: this.props.item.content
                    })) : i.createElement(c.U, null)
                }, t = r.__decorate([Object(l.c)("FeedItem"), Object(o.d)(function(e) {
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
            }(i.Component),
            f = Object(l.c)("Feed")(function(e) {
                var t = e.items.edges.filter(function(e) {
                    return e.node.content.id
                }).map(function(t, n) {
                    var a = t.node;
                    return i.createElement(p, {
                        key: a.content.id,
                        item: a,
                        index: n,
                        "data-a-target": "pulse-item-" + n,
                        deletePost: e.deletePost
                    })
                });
                return e.latencyTracking.reportInteractive(t.length), t.length ? i.createElement(c.U, null, t) : i.createElement(c.U, {
                    textAlign: c._23.Center
                }, i.createElement(c._22, {
                    color: c.F.Alt2
                }, Object(a.d)("There are no feed posts.", "ChannelFeedComponent")))
            });
        n.d(t, "a", function() {
            return f
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
    dQj3: function(e, t, n) {
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
                                "1x": Object(s.e)(e.emoteID, 1),
                                "2x": Object(s.e)(e.emoteID, 2),
                                "4x": Object(s.e)(e.emoteID, 4)
                            }
                        }
                    }
                }
            }), t
        }
        t.b = i, t.a = function(e, t, n) {
            var c = i(e.body.emotes),
                d = e.badges.reduce(function(e, t) {
                    return e[t.setID] = t.version, e
                }, {});
            return {
                type: o.a.Post,
                id: e.id,
                badges: d,
                bits: e.bitsUsed,
                timestamp: 0,
                deleted: !1,
                user: a.__assign({
                    userID: e.author.id,
                    userLogin: e.author.login,
                    userType: r.a.User,
                    color: e.authorColor
                }, Object(l.a)(e.authorName, e.author.login)),
                messageParts: Object(s.f)(e.body.content, c, e.bitsUsed, t, n, e.authorName)
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
        var a = n("TToO"),
            r = n("6Agf"),
            o = n("qkCi"),
            s = n("l21v"),
            l = n("e1CU")
    },
    e2wA: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    eY4D: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOfferList_PrimeOffers"
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
                            value: "primeOffers"
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
                                    value: "claimInstructions"
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
                                    value: "deliveryMethod"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priority"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
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
                                            value: "externalURL"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
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
                                            value: "categories"
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
                end: 226
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOfferList_PrimeOffers {\nprimeOffers {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    el3o: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "claimPrimeOffer"
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
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "hasEntitlement"
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
                end: 128
            }
        };
        n.loc.source = {
            body: "mutation claimPrimeOffer($input: ClaimPrimeOfferInput!) {\nclaimPrimeOffer(input: $input) {\nself {\nclaimData\nhasEntitlement\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    f8UT: function(e, t) {},
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
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("Lq4d").definitions)), e.exports = i
    },
    g91j: function(e, t, n) {
        "use strict";

        function i(e) {
            switch (e.type) {
                case g.b.Stream:
                    return m.createElement(E.c, {
                        channelLogin: e.id,
                        vodID: "",
                        disableTheatreButton: !0,
                        playerTypeOverride: E.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy
                    });
                case g.b.Vod:
                    return m.createElement(E.c, {
                        channelLogin: "",
                        vodID: e.id,
                        disableTheatreButton: !0,
                        playerTypeOverride: E.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy,
                        onVideoTimeChange: e.onVideoTimeChange
                    });
                default:
                    return null
            }
        }

        function a(e) {
            s.m.track(x.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        }
        var r, o = n("TToO"),
            s = n("6sO2"),
            l = n("/7C1");
        s.n.store.registerReducer("carouselPlayer", function(e, t) {
            switch (void 0 === e && (e = {
                isPlayerInitialized: !1
            }), t.type) {
                case l.b:
                    return r = t.player, o.__assign({}, e, {
                        isPlayerInitialized: !0
                    });
                case l.c:
                    return r = null, o.__assign({}, e, {
                        isPlayerInitialized: !1
                    });
                case l.a:
                    return e.isPlayerInitialized && r && r.pause(), e;
                default:
                    return e
            }
        });
        var c = n("RH2O"),
            d = n("2KeS"),
            u = n("HW6M"),
            m = n("U7vG"),
            p = n("NXs7"),
            f = n("VAT8"),
            g = n("WKwZ"),
            v = n("CSlQ"),
            h = n("Odds"),
            k = (n("TUg1"), "carousel-card-live"),
            y = "carousel-card-vod",
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLiveCounts = function() {
                        return t.props.showCounts ? m.createElement(h.U, {
                            className: "carousel-nav__meta",
                            alignItems: h.c.Center,
                            attachBottom: !0,
                            margin: {
                                left: .5
                            },
                            zIndex: h._38.Above
                        }, t.renderIndicator(), m.createElement(h.U, {
                            display: h.H.InlineFlex,
                            margin: {
                                left: .5
                            }
                        }, m.createElement(h._22, {
                            color: h.F.Overlay,
                            type: h._27.Span
                        }, Object(s.e)(t.props.item.content.viewersCount)))) : null
                    }, t.renderIndicator = function() {
                        return t.props.item.content.type === g.b.Stream ? m.createElement(h.W, {
                            size: h.X.Small,
                            "data-test-selector": k
                        }) : m.createElement(h._9, {
                            asset: h._10.GlyphViews,
                            "data-test-selector": y
                        })
                    }, t.itemClick = function() {
                        t.props.itemClick(t.props.item)
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = u({
                        "carousel-nav__item": !0,
                        "carousel-nav__item--active": this.props.itemActive
                    });
                    return m.createElement(h.U, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: h._3.Relative
                    }, m.createElement(h._30, {
                        label: (this.props.item.isSponsored ? Object(s.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: h._32.Top,
                        display: h.H.Block
                    }, m.createElement(h.S, o.__assign({
                        onClick: this.itemClick
                    }, Object(h._39)(this.props)), m.createElement(h.j, {
                        ratio: h.k.Aspect16x9
                    }, this.renderLiveCounts(), m.createElement(h.U, {
                        className: "carousel-nav__img-container"
                    }, m.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? m.createElement(h.U, {
                        position: h._3.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, m.createElement(h._9, {
                        asset: h._10.Featured,
                        type: h._11.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = o.__decorate([Object(v.c)("CarouselCard")], t)
            }(m.Component),
            S = n("lfvs"),
            _ = n("F8kA"),
            N = n("SZoP"),
            E = n("fc0G"),
            C = (n("i6UE"), {
                content: "carousel",
                medium: "twitch_home"
            }),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = u("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(s.d)("playing {game}", {
                                game: m.createElement(_.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: C
                                    }
                                }, t.props.item.content.gameName)
                            }, "HorizontalCarouselPlayer"),
                            a = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy,
                                onVideoTimeChange: t.onVideoTimeChange
                            };
                        return m.createElement(h._18, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: h.H.Flex,
                            flexDirection: h.J.Row,
                            color: h.F.Alt
                        }, m.createElement(h.U, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, m.createElement(h.U, {
                            className: "horizontal-carousel-player__video",
                            position: h._3.Relative,
                            overflow: h.Z.Hidden
                        }, i(a))), m.createElement(h.U, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, m.createElement(h.U, {
                            display: h.H.Flex,
                            flexWrap: h.K.NoWrap,
                            textAlign: h._23.Left,
                            alignItems: h.c.Center,
                            padding: {
                                bottom: .5
                            }
                        }, m.createElement(h.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, m.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, m.createElement(_.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: C
                            },
                            "data-a-target": "carousel-profile-image"
                        }, m.createElement(h.l, {
                            imageSrc: t.props.item.broadcaster.profileImageURL,
                            imageAlt: Object(s.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), m.createElement(h.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, m.createElement(h._22, {
                            fontSize: h.L.Size4,
                            color: h.F.Base,
                            lineHeight: h.V.Heading,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(N.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), m.createElement(h._22, {
                            fontSize: h.L.Size6,
                            color: h.F.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, m.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), m.createElement(h.U, {
                            margin: {
                                y: 1
                            }
                        }, m.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, m.createElement(_.a, {
                            to: t.getLinkForTitle()
                        }, m.createElement(h._22, {
                            type: h._27.Span,
                            "data-a-target": g.a,
                            fontSize: h.L.Size3,
                            lineHeight: h.V.Heading
                        }, t.props.item.title)))), m.createElement(S, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === g.b.Stream) return {
                            pathname: "/" + t.props.item.broadcaster.login,
                            state: C
                        };
                        var e = t.state ? t.state.videoOffset || 0 : 0;
                        return {
                            pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                            state: C
                        }
                    }, t.getPlaceholderRender = function() {
                        var e = u("horizontal-carousel-player__details", {
                            "horizontal-carousel-player__details--overlay": t.props.darkTheme
                        });
                        return m.createElement(h.U, {
                            display: h.H.Flex,
                            flexWrap: h.K.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, m.createElement(h.U, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, m.createElement(h.j, {
                            ratio: h.k.Aspect16x9
                        }, m.createElement(h._2, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), m.createElement(h.U, {
                            className: u(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, m.createElement(h.U, {
                            display: h.H.Flex,
                            flexWrap: h.K.NoWrap,
                            textAlign: h._23.Left,
                            alignItems: h.c.Start
                        }, m.createElement(h.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, m.createElement(h._2, {
                            width: 40,
                            height: 40
                        })), m.createElement(h.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, m.createElement(h._22, null, m.createElement(h._2, {
                            width: 70
                        })), m.createElement(h._22, null, m.createElement(h._2, {
                            width: 70
                        })))), m.createElement(h.U, {
                            margin: {
                                y: 1
                            }
                        }, m.createElement(h._22, null, m.createElement(h._2, {
                            lineCount: 1
                        })), m.createElement(h._22, null, m.createElement(h._2, {
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
                return o.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                    e.item !== this.props.item && this.props.onPromotionCardView(e.item)
                }, t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(m.Component),
            O = n("hdYS"),
            U = (n("0v28"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = u("vertical-carousel-player__details", {
                                "vertical-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(s.d)("{login} playing {game}", {
                                login: m.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "display_name")
                                }, m.createElement(_.a, {
                                    to: "/" + t.props.item.broadcaster.login,
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(N.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: m.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, m.createElement(_.a, {
                                    to: "/directory/game/" + t.props.item.content.gameName,
                                    "data-a-target": "carousel-broadcaster-game-name"
                                }, t.props.item.content.gameName))
                            }, "VerticalCarouselPlayer"),
                            a = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy
                            };
                        return m.createElement(h._18, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: h.F.Alt
                        }, m.createElement(h.U, {
                            className: "vertical-carousel-player__video",
                            position: h._3.Relative,
                            overflow: h.Z.Hidden
                        }, i(a)), m.createElement(h.U, {
                            className: u(e),
                            display: h.H.Flex,
                            flexWrap: h.K.NoWrap,
                            textAlign: h._23.Left,
                            alignItems: h.c.Center,
                            padding: {
                                y: 1
                            }
                        }, m.createElement(h.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, m.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, m.createElement(_.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, m.createElement(h.l, {
                            imageSrc: t.props.item.broadcaster.profileImageURL,
                            imageAlt: Object(s.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), m.createElement(h.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, m.createElement(h._22, {
                            "data-a-target": g.a,
                            fontSize: h.L.Size5,
                            color: h.F.Base,
                            bold: !0
                        }, t.props.item.title), m.createElement(h._22, {
                            fontSize: h.L.Size6,
                            color: h.F.Base
                        }, n)), m.createElement(h.U, {
                            flexShrink: 0
                        }, t.props.firstPageLoaded ? m.createElement(O.a, {
                            showLoadingPlaceholder: !0,
                            channelLogin: t.props.item.broadcaster.login,
                            "data-a-target": "carousel-follow-button"
                        }) : m.createElement(h._2, {
                            width: 70,
                            height: 30
                        }))), m.createElement(S, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return m.createElement(h.U, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, m.createElement(h.j, {
                            ratio: h.k.Aspect16x9
                        }, m.createElement(h._2, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), m.createElement(h.U, {
                            display: h.H.Flex,
                            flexWrap: h.K.NoWrap,
                            textAlign: h._23.Left,
                            alignItems: h.c.Center,
                            padding: {
                                y: 1
                            }
                        }, m.createElement(h.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, m.createElement(h._2, {
                            width: 40,
                            height: 40
                        })), m.createElement(h.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, m.createElement(h._22, null, m.createElement(h._2, {
                            width: 150
                        })), m.createElement(h._22, null, m.createElement(h._2, {
                            width: 100
                        }))), m.createElement(h.U, {
                            flexShrink: 0
                        }, m.createElement(h._2, {
                            width: 70,
                            height: 30
                        }))), m.createElement(h._22, null, m.createElement(h._2, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(m.Component)),
            F = Object(c.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(U),
            x = n("vH/s"),
            T = (n("0OPT"), 6),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > T) {
                            var e = t.state.startingIndex > 0;
                            return m.createElement(h.U, {
                                display: h.H.Flex,
                                alignItems: h.c.Stretch
                            }, m.createElement(h.v, {
                                ariaLabel: Object(s.d)("Page Left", "CarouselPlayerComponent"),
                                icon: h._10.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": g.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > T) {
                            var e = t.props.items.length > t.state.startingIndex + T;
                            return m.createElement(h.U, {
                                display: h.H.Flex,
                                alignItems: h.c.Stretch
                            }, m.createElement(h.v, {
                                ariaLabel: Object(s.d)("Page Right", "CarouselPlayerComponent"),
                                icon: h._10.AngleRight,
                                onClick: t.handlePageRight,
                                "data-test-selector": g.e,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.getCardsRender = function() {
                        if (t.state.activeItem) {
                            t.displayEventFired || (! function(e) {
                                var t = {};
                                e.forEach(function(e, n) {
                                    t["carousel_slot_" + n + "_channel"] = e.broadcaster.login, t["carousel_slot_" + n + "_priority"] = e.priorityLevel, t["carousel_slot_" + n + "_game"] = e.content.gameName, t["carousel_slot_" + n + "_ccu"] = e.content.viewersCount, t["carousel_slot_" + n + "_type"] = e.content.subType
                                }), s.m.track(x.SpadeEventType.FrontPageCarouselDisplay, t)
                            }(t.props.items), t.displayEventFired = !0);
                            return t.props.items.slice(t.state.startingIndex, t.state.startingIndex + T).map(function(e, n) {
                                return m.createElement(b, {
                                    key: e.content.id,
                                    item: e,
                                    itemClick: t.selectContent,
                                    itemActive: e.content.id === t.state.activeItem.content.id,
                                    showCounts: t.props.showCounts,
                                    "data-a-target": "carousel-card-" + n
                                })
                            })
                        }
                        for (var e = [], n = 0; n < T; n++) e.push(m.createElement(h.U, {
                            key: n,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, m.createElement(h.j, {
                            ratio: h.k.Aspect16x9
                        }, m.createElement(h._2, null)), m.createElement(h.U, {
                            margin: {
                                top: .5
                            }
                        }, m.createElement(h._2, {
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
                            case g.c.Vertical:
                                return m.createElement(F, o.__assign({}, e));
                            default:
                                return m.createElement(w, o.__assign({}, e))
                        }
                    }, t.registerCarousel = function(e) {
                        t.props.registerCarousel && t.props.registerCarousel(e)
                    }, t.unregisterCarousel = function() {
                        t.props.unregisterCarousel && t.props.unregisterCarousel()
                    }, t.selectContent = function(e) {
                        t.setState({
                            activeItem: e
                        });
                        ! function(e) {
                            s.m.track(x.SpadeEventType.FrontPageCarouselClick, e)
                        }({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.trackPromotionClick = function(e, n) {
                        var i = e.broadcaster,
                            a = e.content,
                            r = e.isScheduled;
                        ! function(e, t) {
                            var n = o.__assign({
                                clicked_element: t
                            }, e);
                            s.m.track(x.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
                        }({
                            broadcast_type: a.subType,
                            carousel_index: t.props.items.indexOf(t.state.activeItem),
                            channel: i.displayName,
                            game: a.gameName,
                            promotion_was_scheduled: r,
                            views: a.viewersCount
                        }, n)
                    }, t.trackPromotionView = function(e) {
                        ! function(e) {
                            s.m.track(x.SpadeEventType.FrontPageCarouselPromotionCardView, e)
                        }({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - T;
                        e !== t.state.startingIndex && (a("next"), t.setState({
                            startingIndex: e
                        }))
                    }, t.handlePageLeft = function() {
                        t.state.startingIndex > 0 && (a("prev"), t.setState({
                            startingIndex: 0
                        }))
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUpdate = function(e) {
                    !this.state.activeItem && e.items.length > 0 && this.setState({
                        activeItem: e.items[0]
                    })
                }, t.prototype.render = function() {
                    var e;
                    return this.props.darkTheme && (e = Object(f.c)(p.a.Dark)), m.createElement(h.U, {
                        className: u("carousel-player", e)
                    }, this.getLayoutRender(), m.createElement(h._18, {
                        background: h.m.Alt
                    }, m.createElement(h.U, {
                        display: h.H.Flex,
                        flexWrap: h.K.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = o.__decorate([Object(v.c)("CarouselPlayer")], t)
            }(m.Component),
            I = Object(c.a)(null, function(e) {
                return Object(d.bindActionCreators)({
                    registerCarousel: l.e,
                    unregisterCarousel: l.f
                }, e)
            })(D);
        n.d(t, "a", function() {
            return I
        })
    },
    gIPD: function(e, t, n) {
        e.exports = n.p + "assets/friend_requests-aec9595d7e19764bc23d982c8c0f43d9.png"
    },
    i6UE: function(e, t) {},
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
    ilq7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "TopNav_User_UpdateIsSharingActivity"
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
                                value: "UpdateIsSharingActivityInput"
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
                            value: "updateIsSharingActivity"
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
                                                    value: "isSharingActivity"
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
                end: 173
            }
        };
        n.loc.source = {
            body: "mutation TopNav_User_UpdateIsSharingActivity($input: UpdateIsSharingActivityInput!) {\nupdateIsSharingActivity(input: $input) {\nuser {\nid\nsettings {\nisSharingActivity\n}\n}\n}\n}",
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
                                i.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    o = r.content,
                                    s = r.medium,
                                    c = r.content_index;
                                l.n.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: c,
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
    jPY3: function(e, t) {},
    kVlN: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("TToO"),
            r = n("KSGD"),
            o = n("U7vG"),
            s = n("DtWM"),
            l = n("cuT/"),
            c = n("LiYP"),
            d = n("TP6L"),
            u = n("hfrE"),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.resizeAnimationFrame = 0, t.collapseOnBreakpoint = function() {
                        var e = window.innerWidth,
                            n = {
                                sideNavCollapsedFromCSS: e < c.d,
                                rightColumnCollapsedFromCSS: e < l.b
                            };
                        t.state.sideNavCollapsedFromCSS === n.sideNavCollapsedFromCSS && t.state.rightColumnCollapsedFromCSS === n.rightColumnCollapsedFromCSS || t.setState(n), t.resizeAnimationFrame = 0
                    }, t.handleWindowResize = function() {
                        t.resizeAnimationFrame || (t.resizeAnimationFrame = requestAnimationFrame(t.collapseOnBreakpoint))
                    }, t.onInnerChildrenResize = function(e, n) {
                        t.context.setRootScrollableOffsetHeight(n / 10 + "rem")
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.handleWindowResize)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.handleWindowResize), this.context.resetRootScrollableOffsetHeight(), this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame)
                }, t.prototype.render = function() {
                    var e = document.querySelector("." + u.b),
                        t = 0,
                        n = 0;
                    e ? (t = e.getBoundingClientRect().left, n = window.innerWidth - e.getBoundingClientRect().right) : n = window.innerWidth;
                    var i = {
                        position: "fixed",
                        top: this.props.topNavNotificationBarEnabled ? d.b : d.a,
                        left: t,
                        right: n,
                        zIndex: 500
                    };
                    return o.createElement("div", {
                        style: i
                    }, o.createElement(s.a, {
                        onResize: this.onInnerChildrenResize
                    }), this.props.children)
                }, t.contextTypes = {
                    setRootScrollableOffsetHeight: r.func,
                    resetRootScrollableOffsetHeight: r.func
                }, t
            }(o.Component),
            p = Object(i.a)(function(e) {
                return {
                    sideNavCollapsed: !e.ui.sideNavExpanded,
                    rightColumnCollapsed: !e.ui.rightColumnExpanded,
                    topNavNotificationBarEnabled: e.ui.topNavNotificationBarEnabled
                }
            })(m);
        n.d(t, "a", function() {
            return p
        })
    },
    kaF0: function(e, t) {},
    kuCN: function(e, t) {},
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
    nFc2: function(e, t) {},
    o8Pq: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("iOr9"),
            o = n("bZTi"),
            s = n("bNhH"),
            l = function(e) {
                var t = {
                    name: "TWILIGHT_EXPANDO_FEATURO",
                    assignments: {
                        fallback: function() {
                            return o.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "bNhH"))
                            }, "FeaturedBroadcasters")(i.__assign({}, e, {
                                streamCount: 6,
                                showCounts: !1
                            }))
                        },
                        expanded: function() {
                            return o.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "bNhH"))
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
                return a.createElement(r.a, i.__assign({}, t))
            };
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return s.FeaturedBroadcastersRenderContext
        }), n.d(t, "FeaturedBroadcasters", function() {
            return l
        })
    },
    oI0V: function(e, t) {},
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
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("S0OZ").definitions)), e.exports = i
    },
    p6Rc: function(e, t) {},
    qVoH: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.__typename === C
        }
        var a = n("TToO"),
            r = n("RH2O"),
            o = n("2KeS"),
            s = n("+xm8"),
            l = n("V5M+"),
            c = n("f2i/"),
            d = n("Aj/L"),
            u = n("oSFp"),
            m = n("KSGD"),
            p = n("U7vG"),
            f = n("6sO2"),
            g = n("rCmJ"),
            v = n("C/8M"),
            h = n("rzuL"),
            k = n("CSlQ"),
            y = n("mw/a"),
            b = n("Odds"),
            S = n("CX2/"),
            _ = (n("BLXQ"), "delete"),
            N = "delete-confirm",
            E = "report",
            C = "Post",
            w = function(e) {
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
                        return p.createElement(b.U, {
                            padding: 1
                        }, p.createElement(b.S, {
                            onClick: n.deletePost
                        }, p.createElement(b.U, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            className: N
                        }, Object(f.d)("Yes", "FeedItemOptions"))), p.createElement(b.S, {
                            onClick: n.showOptionView
                        }, p.createElement(b.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(f.d)("No", "FeedItemOptions"))))
                    }, n.getDeleteEl = function() {
                        var e = null;
                        return n.state.userCanDelete && n.props.deletePost && (e = p.createElement(b.S, {
                            onClick: n.showDeleteConfirmView
                        }, p.createElement(b.U, {
                            className: _,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(f.d)("Delete", "FeedItemOptions")))), e
                    }, n.getOptionView = function() {
                        return n.state.loadingPermissions ? null : p.createElement(b.U, {
                            padding: 1
                        }, p.createElement(b.S, {
                            onClick: n.showReportModal,
                            "data-a-target": "pulse-post-report"
                        }, p.createElement(b.U, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            className: E
                        }, Object(f.d)("Report", "FeedItemOptions"))), n.getDeleteEl())
                    }, n.getPostPermissions = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e, t, n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.setState({
                                            loadingPermissions: !0
                                        }), e = this.props.content.id.split(":"), [4, f.n.apollo.client.query({
                                            query: S,
                                            variables: {
                                                id: "post:" + e[e.length - 1]
                                            }
                                        })];
                                    case 1:
                                        return t = i.sent(), n = t.data.feedItemContent, this.setState({
                                            loadingPermissions: !1,
                                            permissionQueryData: t,
                                            userCanDelete: n && n.self.permissions.canDelete
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
                            title: Object(f.d)("Report {itemType}", {
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
                        }), !1 === n.state.userCanDelete && i(n.props.content) && !n.state.permissionQueryData && n.getPostPermissions()
                    };
                    var r = !1,
                        o = t.content,
                        s = t.deletePost,
                        l = t.user;
                    return s && l && i(o) && l.id === o.author.id && (r = !0), n.state = {
                        loadingPermissions: !1,
                        permissionQueryData: void 0,
                        showDeleteConfirmView: !1,
                        showOptionView: !1,
                        userCanDelete: r
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return (this.state.showDeleteConfirmView || this.state.showOptionView && !this.state.loadingPermissions) && (e = p.createElement(b.p, {
                        direction: b.q.Left,
                        size: b.r.Small,
                        show: !0
                    }, this.state.showOptionView && this.getOptionView(), this.state.showDeleteConfirmView && this.getDeleteConfirmView())), p.createElement(b.U, {
                        position: b._3.Relative
                    }, p.createElement(g.a, {
                        onClickOut: this.closeViews
                    }, e, p.createElement("div", {
                        className: this.state.showOptionView || this.state.showDeleteConfirmView ? "button-icon--show" : "button-icon"
                    }, p.createElement(b.v, {
                        icon: b._10.Gear,
                        ariaLabel: Object(f.d)("Post Options", "FeedPostOptions"),
                        onClick: this.toggleOptionView,
                        "data-a-target": "pulse-post-options"
                    }))))
                }, t.prototype.getReportContext = function(e) {
                    switch (e.__typename) {
                        case "Clip":
                            var t = e;
                            return {
                                contentType: y.a.Clip,
                                targetUserID: t.broadcaster.id,
                                contentID: t.id
                            };
                        case C:
                            var n = e;
                            return {
                                contentType: y.a.ChannelFeedPost,
                                targetUserID: n.author.id,
                                contentID: n.id
                            };
                        case "Stream":
                            var i = e;
                            return {
                                contentType: y.a.User,
                                targetUserID: i.broadcaster.id
                            };
                        case "Video":
                            var a = e;
                            return {
                                contentType: y.a.Vod,
                                targetUserID: a.owner.id,
                                contentID: a.id
                            };
                        default:
                            return {
                                contentType: y.a.User,
                                targetUserID: ""
                            }
                    }
                }, t.contextTypes = {
                    feedTrackingProps: m.object
                }, t = a.__decorate([Object(k.c)("FeedItemOptions")], t)
            }(p.Component),
            O = Object(r.a)(function(e) {
                return {
                    user: Object(d.c)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    showReportUserModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(l.d)(u.a, t)
                    },
                    login: function() {
                        return Object(c.f)(s.a.FeedReactionToggle)
                    }
                }, e)
            })(w);
        n.d(t, "a", function() {
            return O
        })
    },
    qkCi: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention", e[e.Ban = 3] = "Ban", e[e.Timeout = 4] = "Timeout", e[e.AutoModRejectedPrompt = 5] = "AutoModRejectedPrompt", e[e.AutoModMessageRejected = 6] = "AutoModMessageRejected", e[e.AutoModMessageAllowed = 7] = "AutoModMessageAllowed", e[e.AutoModMessageDenied = 8] = "AutoModMessageDenied", e[e.Connected = 9] = "Connected", e[e.Disconnected = 10] = "Disconnected", e[e.Reconnect = 11] = "Reconnect", e[e.Hosting = 12] = "Hosting", e[e.Unhost = 13] = "Unhost", e[e.Subscription = 14] = "Subscription", e[e.Resubscription = 15] = "Resubscription", e[e.SubGift = 16] = "SubGift", e[e.Clear = 17] = "Clear", e[e.SubscriberOnlyMode = 18] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 19] = "FollowerOnlyMode", e[e.SlowMode = 20] = "SlowMode", e[e.EmoteOnlyMode = 21] = "EmoteOnlyMode", e[e.RoomMods = 22] = "RoomMods", e[e.RoomState = 23] = "RoomState", e[e.Raid = 24] = "Raid", e[e.Unraid = 25] = "Unraid", e[e.Notice = 26] = "Notice", e[e.Info = 27] = "Info", e[e.BadgesUpdated = 28] = "BadgesUpdated", e[e.Purchase = 29] = "Purchase", e[e.BitsCharity = 30] = "BitsCharity", e[e.CrateGift = 31] = "CrateGift"
        }(i || (i = {}))
    },
    rM0q: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    rZAm: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Search_SearchGameResultCard_Game"
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
                                        value: "55"
                                    }
                                }],
                                directives: [],
                                selectionSet: null
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
            body: "query Search_SearchGameResultCard_Game($name: String!) {\ngame(name: $name) {\nid\nboxArtURL(width: 40 height: 55)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("Lq4d").definitions)), e.exports = i
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
            l = n("TWJL"),
            c = function(e, t) {
                var n = d(e.embed);
                Object(r.c)(i.SpadeEventType.FeedCardEmbedImpression, n, t)
            },
            d = function(e) {
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
            f = function(e, t) {
                var n = {
                    action: e.action,
                    entity: "post:" + e.postID,
                    post_id: e.postID,
                    post_content: e.postContent,
                    composer_location: e.composerLocation
                };
                Object(r.c)(i.SpadeEventType.FeedPost, n, t)
            },
            g = function(e) {
                var t = {
                    action: e.action,
                    entity: "post:" + e.postID,
                    post_id: e.postID,
                    post_content: e.postContent,
                    composer_location: e.composerLocation
                };
                p.m.track(i.SpadeEventType.FeedPost, t)
            },
            v = function(e, t) {
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
            return c
        }), n.d(t, "c", function() {
            return u
        }), n.d(t, "d", function() {
            return f
        }), n.d(t, "e", function() {
            return g
        }), n.d(t, "f", function() {
            return v
        })
    },
    sq7i: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 41
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    tTbW: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_PrimeOfferIds"
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
                            value: "primeOffers"
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
                end: 94
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_PrimeOfferIds {\nprimeOffers {\nid\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    ukY1: function(e, t) {},
    "v+rJ": function(e, t) {},
    vXPJ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoEmbedLoader_Video"
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
                end: 182
            }
        };
        n.loc.source = {
            body: "query VideoEmbedLoader_Video($id: ID! $height: Int $width: Int) {\nvideo(id: $id) {\nid\nlengthSeconds\npreviewThumbnailURL(width: $width height: $height)\npublishedAt\ntitle\nviewCount\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "w/8h": function(e, t) {},
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
    wHbv: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_View"
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
                            value: "viewedNotifications"
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
                                            value: "notifications"
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
                                                    value: "summary"
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
                                                            value: "unseenCount"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "lastSeenAt"
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
                end: 123
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_View {\nviewedNotifications {\nuser {\nnotifications {\nsummary {\nunseenCount\nlastSeenAt\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    wjhu: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_CurrentUser"
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
                end: 95
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "y+bN": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Search_SearchLiveResultCard_UserStream"
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
                                                value: "156"
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "88"
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
                end: 145
            }
        };
        n.loc.source = {
            body: "query Search_SearchLiveResultCard_UserStream($login: String!) {\nuser(login: $login) {\nid\nstream {\nid\npreviewImageURL(width: 156 height: 88)\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    yw9L: function(e, t) {
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
                end: 274
            }
        };
        n.loc.source = {
            body: "query StreamerTrailer_GetLiveStreams($ids: [ID!]) {\nusers(ids: $ids) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\nstream {\nid\nviewersCount\npreviewImageURL(width: 320 height: 180)\ngame {\nid\nname\n}\n}\nvideos(first: 1 sort: TIME) {\nedges {\nnode {\nid\ngame {\nname\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.front-756143a96b870d162896d8aa5b36ff78.js.map