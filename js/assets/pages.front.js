webpackJsonp([46], {
    1e3: function(e, t, n) {
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
    1001: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        }), n.d(t, "e", function() {
            return a
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
        var i, r = "TWILIGHT_WEB_ONBOARDING_CHANNEL_RANKING",
            a = "TWILIGHT_WEB_ONBOARDING_FOR_YOU",
            o = "TWILIGHT_WEB_ONBOARDING",
            s = "control";
        ! function(e) {
            e.Skip = "skip", e.NoSkip = "no_skip"
        }(i || (i = {}));
        var l, c = new Set([i.Skip.toString(), i.NoSkip.toString()]);
        ! function(e) {
            e.First = "first", e.Last = "last"
        }(l || (l = {}));
        var u, d = new Set([l.First.toString(), l.Last.toString()]);
        ! function(e) {
            e.Yes = "yes"
        }(u || (u = {}));
        var m = function(e) {
                return !!e && d.has(e)
            },
            p = function(e, t) {
                return !!e && c.has(e) && m(t)
            },
            f = function(e, t, n) {
                return !!e && c.has(e) && m(t) && n === u.Yes
            },
            g = function(e) {
                return e.getTime() >= h().getTime()
            },
            h = function() {
                return new Date((new Date).getTime() - 12096e5)
            }
    },
    1002: function(e, t, n) {
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
    1003: function(e, t, n) {
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
        r.definitions = r.definitions.concat(i(n(908).definitions)), r.definitions = r.definitions.concat(i(n(1025).definitions)), r.definitions = r.definitions.concat(i(n(930).definitions)), r.definitions = r.definitions.concat(i(n(1026).definitions)), e.exports = r
    },
    1024: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(5),
            o = n(275),
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
                        c = {
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
                    }, c)) : n ? r.createElement(o.c, i.__assign({
                        vodID: n
                    }, c)) : r.createElement(s.U, null)
                }, t.prototype.postMessageIsWheelEvent = function(e) {
                    return "player.embed.client" === e.data.namespace && "bridgeplayereventwithpayload" === e.data.method && e.data.args.length > 0 && "wheel" === e.data.args[0].event
                }, t = i.__decorate([Object(a.c)("EmbedVideoPlayer")], t)
            }(r.Component),
            c = l;
        n.d(t, !1, function() {
            return "player.embed.client"
        }), n.d(t, !1, function() {
            return "bridgeplayereventwithpayload"
        }), n.d(t, "a", function() {
            return c
        })
    },
    1025: function(e, t, n) {
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
        }(n(930).definitions)), e.exports = i
    },
    1026: function(e, t, n) {
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
        }(n(930).definitions)), e.exports = i
    },
    1054: function(e, t, n) {
        "use strict";

        function i() {
            return {
                isPlayerInitialized: !1
            }
        }

        function r(e, t) {
            switch (void 0 === e && (e = i()), t.type) {
                case h.b:
                    return p = t.player, f.__assign({}, e, {
                        isPlayerInitialized: !0
                    });
                case h.c:
                    return p = null, f.__assign({}, e, {
                        isPlayerInitialized: !1
                    });
                case h.a:
                    return e.isPlayerInitialized && p && p.pause(), e;
                default:
                    return e
            }
        }

        function a(e) {
            switch (e.type) {
                case b.b.Stream:
                    return _.createElement(D.c, {
                        channelLogin: e.id,
                        vodID: "",
                        disableTheatreButton: !0,
                        playerTypeOverride: D.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy
                    });
                case b.b.Vod:
                    return _.createElement(D.c, {
                        channelLogin: "",
                        vodID: e.id,
                        disableTheatreButton: !0,
                        playerTypeOverride: D.b.Frontpage,
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
            }), g.m.track(L.SpadeEventType.FrontPageCarouselDisplay, t)
        }

        function l(e) {
            g.m.track(L.SpadeEventType.FrontPageCarouselClick, e)
        }

        function c(e, t) {
            var n = f.__assign({
                clicked_element: t
            }, e);
            g.m.track(L.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
        }

        function u(e) {
            g.m.track(L.SpadeEventType.FrontPageCarouselPromotionCardView, e)
        }

        function d(e) {
            g.m.track(L.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        }

        function m(e) {
            return Object(k.bindActionCreators)({
                registerCarousel: h.e,
                unregisterCarousel: h.f
            }, e)
        }
        var p, f = n(0),
            g = n(2),
            h = n(1e3);
        g.n.store.registerReducer("carouselPlayer", r);
        var v = n(6),
            k = n(9),
            y = n(4),
            _ = n(1),
            b = n(873),
            S = n(5),
            N = n(3),
            E = (n(1282), "carousel-card-live"),
            w = "carousel-card-vod",
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLiveCounts = function() {
                        return t.props.showCounts ? _.createElement(N.U, {
                            className: "carousel-nav__meta",
                            alignItems: N.c.Center,
                            attachBottom: !0,
                            margin: {
                                left: .5
                            },
                            zIndex: N._38.Above
                        }, t.renderIndicator(), _.createElement(N.U, {
                            display: N.H.InlineFlex,
                            margin: {
                                left: .5
                            }
                        }, _.createElement(N._21, {
                            color: N.F.Overlay,
                            type: N._26.Span
                        }, Object(g.e)(t.props.item.content.viewersCount)))) : null
                    }, t.renderIndicator = function() {
                        return t.props.item.content.type === b.b.Stream ? _.createElement(N.V, {
                            size: N.W.Small,
                            "data-test-selector": E
                        }) : _.createElement(N._8, {
                            asset: N._9.GlyphViews,
                            "data-test-selector": w
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
                    return _.createElement(N.U, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: N._2.Relative
                    }, _.createElement(N._30, {
                        label: (this.props.item.isSponsored ? Object(g.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: N._32.Top,
                        display: N.H.Block
                    }, _.createElement(N.S, f.__assign({
                        onClick: this.itemClick
                    }, Object(N._39)(this.props)), _.createElement(N.j, {
                        ratio: N.k.Aspect16x9
                    }, this.renderLiveCounts(), _.createElement(N.U, {
                        className: "carousel-nav__img-container"
                    }, _.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? _.createElement(N.U, {
                        position: N._2.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, _.createElement(N._8, {
                        asset: N._9.Featured,
                        type: N._10.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = f.__decorate([Object(S.c)("CarouselCard")], t)
            }(_.Component),
            O = C,
            x = n(65),
            U = n(10),
            F = n(48),
            D = n(275),
            R = (n(1283), {
                content: "carousel",
                medium: "twitch_home"
            }),
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = y("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(g.d)("playing {game}", {
                                game: _.createElement(U.a, {
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
                        return _.createElement(N._17, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: N.H.Flex,
                            flexDirection: N.J.Row,
                            color: N.F.Alt
                        }, _.createElement(N.U, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, _.createElement(N.U, {
                            className: "horizontal-carousel-player__video",
                            position: N._2.Relative,
                            overflow: N.Y.Hidden
                        }, a(i))), _.createElement(N.U, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, _.createElement(N.U, {
                            display: N.H.Flex,
                            flexWrap: N.K.NoWrap,
                            textAlign: N._22.Left,
                            alignItems: N.c.Start
                        }, _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, _.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, _.createElement(U.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: R
                            },
                            "data-a-target": "carousel-profile-image"
                        }, _.createElement(N.l, {
                            imageSrc: t.props.item.broadcaster.profileImageURL,
                            imageAlt: Object(g.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, _.createElement(N._21, {
                            fontSize: N.L.Size4,
                            color: N.F.Base,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(F.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), _.createElement(N._21, {
                            fontSize: N.L.Size6,
                            color: N.F.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, _.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), _.createElement(N.U, {
                            margin: {
                                y: 1
                            }
                        }, _.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, _.createElement(U.a, {
                            to: t.getLinkForTitle()
                        }, _.createElement(N._21, {
                            type: N._26.Span,
                            "data-a-target": b.a,
                            fontSize: N.L.Size3
                        }, t.props.item.title)))), _.createElement(x, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === b.b.Stream) return {
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
                        return _.createElement(N.U, {
                            display: N.H.Flex,
                            flexWrap: N.K.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, _.createElement(N.U, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, _.createElement(N.j, {
                            ratio: N.k.Aspect16x9
                        }, _.createElement(N._1, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), _.createElement(N.U, {
                            className: y(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, _.createElement(N.U, {
                            display: N.H.Flex,
                            flexWrap: N.K.NoWrap,
                            textAlign: N._22.Left,
                            alignItems: N.c.Start
                        }, _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, _.createElement(N._1, {
                            width: 40,
                            height: 40
                        })), _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, _.createElement(N._21, null, _.createElement(N._1, {
                            width: 70
                        })), _.createElement(N._21, null, _.createElement(N._1, {
                            width: 70
                        })))), _.createElement(N.U, {
                            margin: {
                                y: 1
                            }
                        }, _.createElement(N._21, null, _.createElement(N._1, {
                            lineCount: 1
                        })), _.createElement(N._21, null, _.createElement(N._1, {
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
            }(_.Component),
            T = n(114),
            A = (n(1284), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = y("vertical-carousel-player__details", {
                                "vertical-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(g.d)("{login} playing {game}", {
                                login: _.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "display_name")
                                }, _.createElement(U.a, {
                                    to: "/" + t.props.item.broadcaster.login,
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(F.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: _.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, _.createElement(U.a, {
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
                        return _.createElement(N._17, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: N.F.Alt
                        }, _.createElement(N.U, {
                            className: "vertical-carousel-player__video",
                            position: N._2.Relative,
                            overflow: N.Y.Hidden
                        }, a(i)), _.createElement(N.U, {
                            className: y(e),
                            display: N.H.Flex,
                            flexWrap: N.K.NoWrap,
                            textAlign: N._22.Left,
                            alignItems: N.c.Center,
                            padding: {
                                y: 1
                            }
                        }, _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, _.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, _.createElement(U.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, _.createElement(N.l, {
                            imageSrc: t.props.item.broadcaster.profileImageURL,
                            imageAlt: Object(g.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, _.createElement(N._21, {
                            "data-a-target": b.a,
                            fontSize: N.L.Size5,
                            color: N.F.Base,
                            bold: !0
                        }, t.props.item.title), _.createElement(N._21, {
                            fontSize: N.L.Size6,
                            color: N.F.Base
                        }, n)), _.createElement(N.U, {
                            flexShrink: 0
                        }, t.props.firstPageLoaded ? _.createElement(T.a, {
                            showLoadingPlaceholder: !0,
                            channelLogin: t.props.item.broadcaster.login,
                            "data-a-target": "carousel-follow-button"
                        }) : _.createElement(N._1, {
                            width: 70,
                            height: 30
                        }))), _.createElement(x, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return _.createElement(N.U, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, _.createElement(N.j, {
                            ratio: N.k.Aspect16x9
                        }, _.createElement(N._1, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), _.createElement(N.U, {
                            display: N.H.Flex,
                            flexWrap: N.K.NoWrap,
                            textAlign: N._22.Left,
                            alignItems: N.c.Center,
                            padding: {
                                y: 1
                            }
                        }, _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, _.createElement(N._1, {
                            width: 40,
                            height: 40
                        })), _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, _.createElement(N._21, null, _.createElement(N._1, {
                            width: 150
                        })), _.createElement(N._21, null, _.createElement(N._1, {
                            width: 100
                        }))), _.createElement(N.U, {
                            flexShrink: 0
                        }, _.createElement(N._1, {
                            width: 70,
                            height: 30
                        }))), _.createElement(N._21, null, _.createElement(N._1, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return f.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(_.Component)),
            j = Object(v.a)(o)(A),
            L = n(12),
            P = (n(1285), 6),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > P) {
                            var e = t.state.startingIndex > 0;
                            return _.createElement(N.U, {
                                display: N.H.Flex,
                                alignItems: N.c.Stretch
                            }, _.createElement(N.v, {
                                ariaLabel: Object(g.d)("Page Left", "CarouselPlayerComponent"),
                                icon: N._9.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": b.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > P) {
                            var e = t.props.items.length > t.state.startingIndex + P;
                            return _.createElement(N.U, {
                                display: N.H.Flex,
                                alignItems: N.c.Stretch
                            }, _.createElement(N.v, {
                                ariaLabel: Object(g.d)("Page Right", "CarouselPlayerComponent"),
                                icon: N._9.AngleRight,
                                onClick: t.handlePageRight,
                                "data-test-selector": b.e,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.getCardsRender = function() {
                        if (t.state.activeItem) {
                            t.displayEventFired || (s(t.props.items), t.displayEventFired = !0);
                            return t.props.items.slice(t.state.startingIndex, t.state.startingIndex + P).map(function(e, n) {
                                return _.createElement(O, {
                                    key: e.content.id,
                                    item: e,
                                    itemClick: t.selectContent,
                                    itemActive: e.content.id === t.state.activeItem.content.id,
                                    showCounts: t.props.showCounts,
                                    "data-a-target": "carousel-card-" + n
                                })
                            })
                        }
                        for (var e = [], n = 0; n < P; n++) e.push(_.createElement(N.U, {
                            key: n,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, _.createElement(N.j, {
                            ratio: N.k.Aspect16x9
                        }, _.createElement(N._1, null)), _.createElement(N.U, {
                            margin: {
                                top: .5
                            }
                        }, _.createElement(N._1, {
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
                            case b.c.Vertical:
                                return _.createElement(j, f.__assign({}, e));
                            default:
                                return _.createElement(I, f.__assign({}, e))
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
                        c({
                            broadcast_type: r.subType,
                            carousel_index: t.props.items.indexOf(t.state.activeItem),
                            channel: i.displayName,
                            game: r.gameName,
                            promotion_was_scheduled: a,
                            views: r.viewersCount
                        }, n)
                    }, t.trackPromotionView = function(e) {
                        u({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - P;
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
                    return _.createElement(N.U, {
                        className: y("carousel-player", {
                            "theme--dark": this.props.darkTheme
                        })
                    }, this.getLayoutRender(), _.createElement(N._17, {
                        background: N.m.Alt
                    }, _.createElement(N.U, {
                        display: N.H.Flex,
                        flexWrap: N.K.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = f.__decorate([Object(S.c)("CarouselPlayer")], t)
            }(_.Component),
            B = V,
            M = Object(v.a)(null, m)(B);
        n.d(t, "a", function() {
            return M
        })
    },
    1055: function(e, t, n) {
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
        var o = n(873)
    },
    1057: function(e, t, n) {
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
    1062: function(e, t, n) {
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
            return u
        }), n.d(t, "c", function() {
            return d
        });
        var i, r = n(2),
            a = n(12);
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
            c = function(e) {
                var t = {
                    source: i.HomepageCTA,
                    action: e
                };
                r.m.track(a.SpadeEventType.OnboardingEvent, t)
            },
            u = function(e, t) {
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
    1075: function(e, t, n) {
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
            c = l;
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return c
        })
    },
    1076: function(e, t) {},
    1253: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(S.bindActionCreators)({
                pauseCarousel: N.d
            }, e)
        }

        function r(e) {
            return Object(S.bindActionCreators)({
                pauseCarousel: N.d
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
                isLoggedIn: Object(Q.d)(e)
            }
        }

        function l(e) {
            return Object(S.bindActionCreators)({
                login: function() {
                    return Object(K.f)($.a.FeedReactionToggle)
                }
            }, e)
        }

        function c(e, t) {
            return {
                emoteID: e.emoteID,
                from: e.from - t,
                to: e.to - t,
                setID: e.setID
            }
        }

        function u(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var i = e[n];
                switch (i.type) {
                    case ye.a.ClipLink:
                        t.push(g.createElement("a", {
                            key: n,
                            href: i.content.url,
                            target: "_blank"
                        }, i.content.url));
                        break;
                    case ye.a.VideoLink:
                    case ye.a.Link:
                        i.content.url.match(be) ? t.push(g.createElement(C.a, {
                            key: n,
                            to: i.content.url.replace(be, "")
                        }, i.content.displayText)) : t.push(g.createElement("a", {
                            key: n,
                            href: i.content.url,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, i.content.displayText));
                        break;
                    case ye.a.Mention:
                        t.push(g.createElement(C.a, {
                            key: n,
                            to: "/" + i.content.recipient
                        }, i.content.recipient));
                        break;
                    case ye.a.Emote:
                        i.content.images.themed || t.push(g.createElement("img", {
                            key: n,
                            src: i.content.images.sources["1x"],
                            alt: i.content.alt
                        }));
                        break;
                    case ye.a.Text:
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

        function m(e, t, n) {
            void 0 === t && (t = []);
            for (var i, r = [], a = e.split(/\n/), o = 0, s = 0; o < a.length; o++) ! function(e, o) {
                e > 0 && (o += a[e - 1].length + 1);
                var s = t.map(function(e) {
                        return c(e, o)
                    }).filter(function(t) {
                        return !d(t, a[e].length)
                    }),
                    l = Object(ee.f)(a[e], Object(_e.b)(s), 0, {}, !1, n);
                r.push(g.createElement(_._21, {
                    key: e
                }, u(l))), i = o
            }(o, s), s = i;
            return r
        }

        function p(e) {
            return Object(I.d)("{dateTime, date, medium} {dateTime, time, short}", {
                dateTime: e
            }, "PostDate")
        }

        function f(e) {
            return void 0 !== Ce[e]
        }
        var g = n(1),
            h = n(0),
            v = n(902),
            k = n(870),
            y = n(5),
            _ = n(3),
            b = n(6),
            S = n(9),
            N = n(1e3),
            E = n(15),
            w = n(926),
            C = n(10),
            O = function(e) {
                var t = e.author,
                    n = e.title,
                    i = e.description,
                    r = null,
                    a = null;
                return t && (r = g.createElement(_.U, {
                    margin: {
                        right: 1
                    },
                    flexShrink: 0
                }, g.createElement(C.a, {
                    to: "/" + t.login,
                    "data-a-target": "pulse-profile-picture"
                }, g.createElement(_.P, {
                    flexShrink: 0
                }, g.createElement(_.l, {
                    size: 40,
                    imageSrc: t.profileImageURL,
                    imageAlt: "User profile picture"
                })))), a = g.createElement(_._21, {
                    fontSize: _.L.Size6,
                    color: _.F.Alt
                }, g.createElement(C.a, {
                    to: "/" + t.login,
                    "data-a-target": "pulse-displayname-link"
                }, t.displayName))), g.createElement(_._17, {
                    display: _.H.Flex,
                    flexWrap: _.K.NoWrap,
                    padding: 1,
                    background: _.m.Base
                }, r, g.createElement(_.U, {
                    flexGrow: 1,
                    overflow: _.Y.Hidden
                }, a, g.createElement(_._21, {
                    fontSize: _.L.Size6,
                    color: _.F.Base,
                    bold: !0,
                    ellipsis: !0
                }, n), i && g.createElement(_._21, {
                    fontSize: _.L.Size6,
                    color: _.F.Alt2,
                    noWrap: !0
                }, i)))
            },
            x = Object(y.c)("EmbedInfo", {
                autoReportInteractive: !0
            })(O),
            U = n(1024),
            F = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    r = n.clipTitle,
                    a = n.clipCreatedAt,
                    o = n.durationSeconds,
                    s = n.embedURL,
                    l = n.thumbnailURL,
                    c = n.video,
                    u = n.viewCount,
                    d = c && c.game ? c.game.name : "",
                    m = function() {
                        e.pauseCarousel && e.pauseCarousel(), Object(k.c)(e, t.feedTrackingProps)
                    };
                return g.createElement(_.U, null, g.createElement(w.a, {
                    createdAt: a,
                    lengthSeconds: o,
                    onClick: m,
                    thumbnailURL: l,
                    type: w.b.Clip,
                    viewCount: u
                }, g.createElement(U.a, {
                    embedURL: s
                })), g.createElement(x, {
                    author: i,
                    title: r,
                    description: d
                }))
            };
        F.contextTypes = {
            feedTrackingProps: E.object
        };
        var D = Object(y.c)("ClipEmbed", {
                autoReportInteractive: !0
            })(F),
            R = Object(b.a)(null, i)(D),
            I = n(2),
            T = function(e) {
                var t = e.embed,
                    n = t.inputURL,
                    i = t.thumbnail,
                    r = t.providerName;
                return g.createElement("a", {
                    href: "" + n,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, g.createElement(_.j, {
                    ratio: _.k.Aspect16x9
                }, g.createElement(_.U, null, g.createElement(_.P, {
                    fullWidth: !0,
                    fullHeight: !0,
                    position: _._2.Absolute
                }, g.createElement("img", {
                    src: i && i.url || I.n.config.defaultStreamPreviewURL
                })))), g.createElement(x, {
                    title: r
                }))
            },
            A = Object(y.c)("PhotoOEmbed", {
                autoReportInteractive: !0
            })(T),
            j = function(e, t) {
                var n = e.embed,
                    i = n.broadcaster,
                    r = n.game,
                    a = n.title,
                    o = n.previewImageURL,
                    s = n.viewersCount,
                    l = r ? r.name : "",
                    c = function() {
                        Object(k.c)(e, t.feedTrackingProps)
                    };
                return g.createElement(_.U, null, g.createElement(w.a, {
                    onClick: c,
                    thumbnailURL: o,
                    type: w.b.Stream,
                    viewCount: s
                }, g.createElement(U.a, {
                    channelLogin: i.login
                })), g.createElement(x, {
                    author: i,
                    title: a,
                    description: l
                }))
            };
        j.contextTypes = {
            feedTrackingProps: E.object
        };
        var L = Object(y.c)("StreamEmbed", {
                autoReportInteractive: !0
            })(j),
            P = function(e, t) {
                var n = e.embed,
                    i = n.id,
                    r = n.owner,
                    a = n.lengthSeconds,
                    o = n.game,
                    s = n.publishedAt,
                    l = n.previewThumbnailURL,
                    c = n.title,
                    u = n.videoViewCount,
                    d = o ? o.name : "",
                    m = function() {
                        e.pauseCarousel && e.pauseCarousel(), Object(k.c)(e, t.feedTrackingProps)
                    };
                return g.createElement(_.U, null, g.createElement(w.a, {
                    createdAt: s,
                    lengthSeconds: a,
                    onClick: m,
                    thumbnailURL: l,
                    type: w.b.Video,
                    viewCount: u
                }, g.createElement(U.a, {
                    vodID: i
                })), g.createElement(x, {
                    author: r,
                    title: c,
                    description: d
                }))
            };
        P.contextTypes = {
            feedTrackingProps: E.object
        };
        var V = Object(y.c)("VideoEmbed", {
                autoReportInteractive: !0
            })(P),
            B = Object(b.a)(null, r)(V),
            M = (n(1317), function(e, t) {
                var n = e.embed,
                    i = n.html,
                    r = n.thumbnail,
                    a = n.providerName,
                    o = i.replace("autoplay=false", "autoplay=true"),
                    s = function() {
                        Object(k.c)(e, t.feedTrackingProps)
                    };
                return g.createElement(_.U, null, g.createElement(w.a, {
                    thumbnailURL: r && r.url || I.n.config.defaultStreamPreviewURL,
                    type: w.b.VideoOEmbed,
                    onClick: s
                }, g.createElement("div", {
                    className: "video-oembed-container",
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                })), g.createElement(x, {
                    title: a
                }))
            });
        M.contextTypes = {
            feedTrackingProps: E.object
        };
        var H, q = Object(y.c)("VideoOEmbed", {
                autoReportInteractive: !0
            })(M),
            z = {
                PhotoOEmbed: A,
                VideoOEmbed: q,
                Clip: R,
                Stream: L,
                Video: B
            },
            W = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onImpression = function(e) {
                        Object(k.b)({
                            embed: t.props.embed
                        }, e)
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.impressionTracking.onImpression(this.onImpression)
                }, t.prototype.render = function() {
                    var e = z[this.props.embed.__typename];
                    return e ? g.createElement(e, {
                        embed: this.props.embed
                    }) : g.createElement(_.U, null)
                }, t = h.__decorate([Object(y.c)("Embed"), Object(v.c)()], t)
            }(g.Component),
            G = W,
            $ = n(54),
            K = n(39),
            Q = n(17),
            Y = n(64),
            J = n(7),
            Z = n(20),
            X = n(91),
            ee = n(134),
            te = (n(1318), function(e) {
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
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setState({
                        hasReacted: e.reaction.self.hasReacted
                    })
                }, t.prototype.render = function() {
                    var e = this.props.reaction.emote,
                        t = e.token;
                    return parseInt(e.id, 10) < 15 && (t = Object(X.c)(e.token)), g.createElement("div", h.__assign({
                        onClick: this.toggleReaction
                    }, Object(_._39)(this.props)), g.createElement(_._30, {
                        label: 0 === this.state.reactionCount ? e.token : this.state.reactionCount + " " + t,
                        direction: _._32.Top,
                        align: _._31.Center
                    }, g.createElement(_.U, {
                        className: this.state.hasReacted ? "activity-reaction activity-reaction--active" : "activity-reaction"
                    }, g.createElement(_.U, {
                        className: "activity-reaction__emote-contain"
                    }, g.createElement("img", {
                        src: Object(ee.e)("endorse" === e.id ? "1" : e.id, 3),
                        alt: t,
                        className: "activity-reaction__emote"
                    })))))
                }, t = h.__decorate([Object(y.c)("Reaction")], t)
            }(g.Component)),
            ne = te,
            ie = function(e) {
                var t = e.reactions.map(function(t, n) {
                    return g.createElement(_.U, {
                        key: n,
                        margin: {
                            right: 1,
                            bottom: 1
                        }
                    }, g.createElement(ne, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "additional-reaction-" + n
                    }))
                });
                return g.createElement(_.U, {
                    position: _._2.Relative
                }, g.createElement(_.p, {
                    direction: _.q.TopCenter,
                    size: _.r.Small,
                    show: !0
                }, g.createElement(_._17, {
                    display: _.H.Flex,
                    padding: {
                        left: 1,
                        top: 1
                    }
                }, t)))
            },
            re = Object(y.c)("AdditionalReactions", {
                autoReportInteractive: !0
            })(ie),
            ae = function(e) {
                var t = e.reactions.map(function(t, n) {
                    return g.createElement(_.U, {
                        key: n,
                        margin: {
                            right: 1
                        }
                    }, g.createElement(ne, {
                        key: n,
                        reaction: t,
                        addReaction: e.addReaction,
                        removeReaction: e.removeReaction,
                        "data-a-target": "top-reaction-" + n
                    }))
                });
                return g.createElement(_._17, {
                    display: _.H.Flex
                }, t)
            },
            oe = Object(y.c)("TopReactions", {
                autoReportInteractive: !0
            })(ae),
            se = n(1319),
            le = n(1320),
            ce = n(276),
            ue = (n(1321), function(e) {
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
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = g.createElement("div", {
                        onClick: this.toggleEmoteSelector,
                        "data-a-target": "add-reaction-button"
                    }, this.props.children);
                    return this.state.emoteSelectorVisible || (e = g.createElement(_._30, {
                        label: Object(I.d)("Add a Reaction", "ReactionSelector"),
                        direction: _._32.Top,
                        align: _._31.Center
                    }, e)), g.createElement(_.U, {
                        className: "reaction-selector",
                        position: _._2.Relative
                    }, g.createElement(Y.a, {
                        onClickOut: this.closeEmoteSelector
                    }, this.state.emoteSelectorVisible && g.createElement(ce.a, {
                        onClickEmote: this.onEmoteSelect,
                        visible: this.state.emoteSelectorVisible && this.state.emotesLoaded,
                        toggleVisibility: this.toggleEmoteSelector,
                        onLoad: this.emotesLoaded,
                        direction: _.q.TopLeft
                    }), e))
                }, t = h.__decorate([Object(y.c)("ReactionSelector")], t)
            }(g.Component)),
            de = ue;
        ! function(e) {
            e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
        }(H || (H = {}));
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
            pe = 4,
            fe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        totalReactionCount: 0,
                        additionalReactionsVisible: !1
                    }, t.addReaction = function(e, n) {
                        return t.toggleReaction(H.Add, e, n)
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
                        return t.toggleReaction(H.Remove, e, n)
                    }, t.toggleAdditional = function(e, n) {
                        n.preventDefault(), e.length <= pe || t.setState(function(e) {
                            return {
                                additionalReactionsVisible: !e.additionalReactionsVisible
                            }
                        })
                    }, t.toggleReaction = function(e, n, i) {
                        if (!t.props.isLoggedIn) return t.props.login(), Promise.reject(new Error("user not logged in"));
                        var r = i;
                        return parseInt(n, 10) < 15 && (r = Object(X.c)(i)), e === H.Add ? (t.setState(function(e) {
                            return {
                                totalReactionCount: e.totalReactionCount + 1
                            }
                        }), t.props.addReaction(Object(Z.a)({
                            entityID: t.props.parentEntity,
                            emoteID: n
                        })).then(function(e) {
                            var i = {
                                action: v.a.Create,
                                entity: t.props.parentEntity,
                                reactionInt: n,
                                reactionText: r
                            };
                            return Object(k.f)(i, t.context.feedTrackingProps), e
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
                        }), t.props.removeReaction(Object(Z.a)({
                            entityID: t.props.parentEntity,
                            emoteID: n
                        })).then(function(e) {
                            var i = {
                                action: v.a.Remove,
                                entity: t.props.parentEntity,
                                reactionInt: n,
                                reactionText: r
                            };
                            return Object(k.f)(i, t.context.feedTrackingProps), e
                        }, function(e) {
                            return t.setState(function(e) {
                                return {
                                    totalReactionCount: e.totalReactionCount + 1
                                }
                            }), Promise.reject(e)
                        }))
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.countTotalReactions(), this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = a(this.props.reactions);
                    0 !== t.length && t[0].emote.id === me.emote.id || (t = [me].concat(t));
                    var n = function(n) {
                            return e.toggleAdditional(t, n)
                        },
                        i = null;
                    this.state.additionalReactionsVisible && (i = g.createElement(re, {
                        reactions: t.slice(pe),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction
                    }));
                    var r = null;
                    r = g.createElement(oe, {
                        reactions: t.slice(0, pe),
                        addReaction: this.addReaction,
                        removeReaction: this.removeReaction
                    });
                    var o = null;
                    this.props.reactions && this.state.totalReactionCount > 0 && (o = this.props.reactions.length >= pe ? g.createElement("a", {
                        href: "#",
                        onClick: n,
                        "data-test-selector": "additional-toggle-tracking"
                    }, this.state.totalReactionCount) : g.createElement("span", {
                        "data-test-selector": "additional-toggle-tracking",
                        "data-a-target": "pulse-reaction-count"
                    }, this.state.totalReactionCount)), this.state.additionalReactionsVisible || (o = g.createElement(_._30, {
                        label: Object(I.d)("Total Reactions", "ReactionList"),
                        direction: _._32.Top,
                        align: _._31.Center
                    }, o));
                    var s = null;
                    return this.props.isLoggedIn && (s = g.createElement(_.U, {
                        margin: {
                            right: 1
                        }
                    }, g.createElement(de, {
                        onEmoteSelect: this.addReaction
                    }, g.createElement(_._8, {
                        asset: _._9.AddReaction,
                        type: _._10.Brand,
                        width: 24,
                        height: 24
                    })))), g.createElement(_._17, {
                        display: _.H.Flex,
                        alignItems: _.c.Center,
                        padding: 1
                    }, r, g.createElement(_.U, {
                        margin: {
                            right: 1
                        }
                    }, s), g.createElement(Y.a, {
                        onClickOut: this.hideAdditional
                    }, i, o))
                }, t.contextTypes = {
                    feedTrackingProps: E.object
                }, t = h.__decorate([Object(J.a)(se, {
                    name: "addReaction"
                }), Object(J.a)(le, {
                    name: "removeReaction"
                }), Object(y.c)("Reactions")], t)
            }(g.Component),
            ge = fe,
            he = Object(b.a)(s, l)(ge),
            ve = function(e) {
                var t = e.content,
                    n = t.slug,
                    i = t.reactions;
                return g.createElement(_.U, null, g.createElement(G, {
                    embed: e.content
                }), g.createElement(he, {
                    parentEntity: "clip:" + n,
                    reactions: i
                }))
            },
            ke = Object(y.c)("ClipContent", {
                autoReportInteractive: !0
            })(ve),
            ye = n(264),
            _e = n(907),
            be = /^(https?:\/\/)?(www.)?twitch\.tv/,
            Se = (n(1322), function(e) {
                var t = e.content,
                    n = t.author,
                    i = t.body,
                    r = t.createdAt,
                    a = t.embeds,
                    o = t.id,
                    s = t.reactions;
                return g.createElement(_.U, null, g.createElement(_._17, {
                    display: _.H.Flex,
                    alignItems: _.c.Center,
                    padding: 1,
                    borderBottom: !0
                }, g.createElement(_.U, {
                    margin: {
                        right: 1
                    }
                }, g.createElement(C.a, {
                    to: {
                        pathname: "/" + n.login,
                        state: {
                            content: "author_avatar",
                            medium: "pulse_card"
                        }
                    },
                    "data-a-target": "pulse-profile-picture"
                }, g.createElement(_.l, {
                    size: 40,
                    imageSrc: n.profileImageURL,
                    imageAlt: "User profile picture"
                }))), g.createElement(_.U, {
                    flexGrow: 1
                }, g.createElement(_.U, {
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, g.createElement(C.a, {
                    to: {
                        pathname: "/" + n.login,
                        state: {
                            content: "author_name",
                            medium: "pulse_card"
                        }
                    }
                }, g.createElement(_._21, {
                    fontSize: _.L.Size4,
                    color: _.F.Base,
                    bold: !0
                }, n.displayName)), g.createElement(C.a, {
                    to: "/" + n.login + "/p/" + o,
                    "data-a-target": "pulse-post-link"
                }, g.createElement(_._30, {
                    label: p(new Date(r)),
                    direction: _._32.Bottom
                }, g.createElement(_._21, {
                    fontSize: _.L.Size6,
                    color: _.F.Alt2
                }, Object(I.g)(new Date(r)))))))), i && g.createElement(_._17, {
                    padding: 1,
                    className: "feed-item-text"
                }, m(i.content, i.emotes, n.login)), g.createElement(_.U, null, a && a.slice(0, 1).map(function(e, t) {
                    return g.createElement(G, {
                        key: t,
                        embed: e
                    })
                })), g.createElement(he, {
                    parentEntity: "post:" + o,
                    reactions: s
                }))
            }),
            Ne = Object(y.c)("PostContent", {
                autoReportInteractive: !0
            })(Se),
            Ee = function(e) {
                var t = e.content,
                    n = t.id,
                    i = t.reactions;
                return g.createElement(_.U, null, g.createElement(G, {
                    embed: e.content
                }), g.createElement(he, {
                    parentEntity: "vod:" + n,
                    reactions: i
                }))
            },
            we = Object(y.c)("VideoContent", {
                autoReportInteractive: !0
            })(Ee),
            Ce = {
                Clip: ke,
                Post: Ne,
                Video: we,
                Stream: function(e) {
                    return g.createElement(G, {
                        embed: e.content
                    })
                }
            },
            Oe = function(e) {
                var t = Ce[e.content.__typename];
                return g.createElement(t, {
                    content: e.content
                })
            };
        n.d(t, "b", function() {
            return f
        }), n.d(t, "a", function() {
            return Oe
        })
    },
    1254: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.__typename === O
        }

        function r(e) {
            return {
                user: Object(m.c)(e)
            }
        }

        function a(e) {
            return Object(l.bindActionCreators)({
                showReportUserModal: function(e) {
                    var t = o.__rest(e, []);
                    return Object(u.d)(p.a, t)
                },
                login: function() {
                    return Object(d.f)(c.a.FeedReactionToggle)
                }
            }, e)
        }
        var o = n(0),
            s = n(6),
            l = n(9),
            c = n(54),
            u = n(37),
            d = n(39),
            m = n(17),
            p = n(382),
            f = n(15),
            g = n(1),
            h = n(2),
            v = n(64),
            k = n(902),
            y = n(870),
            _ = n(5),
            b = n(265),
            S = n(3),
            N = n(1323),
            E = (n(1324), "delete"),
            w = "delete-confirm",
            C = "report",
            O = "Post",
            x = function(e) {
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
                                    action: k.a.Remove,
                                    postID: t
                                };
                                Object(y.d)(e, n.context.feedTrackingProps)
                            })
                        }
                    }, n.getDeleteConfirmView = function() {
                        return g.createElement(S.U, {
                            padding: 1
                        }, g.createElement(S.S, {
                            onClick: n.deletePost
                        }, g.createElement(S.U, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            className: w
                        }, Object(h.d)("Yes", "FeedItemOptions"))), g.createElement(S.S, {
                            onClick: n.showOptionView
                        }, g.createElement(S.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(h.d)("No", "FeedItemOptions"))))
                    }, n.getDeleteEl = function() {
                        var e = null;
                        return n.state.userCanDelete && n.props.deletePost && (e = g.createElement(S.S, {
                            onClick: n.showDeleteConfirmView
                        }, g.createElement(S.U, {
                            className: E,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(h.d)("Delete", "FeedItemOptions")))), e
                    }, n.getOptionView = function() {
                        return n.state.loadingPermissions ? null : g.createElement(S.U, {
                            padding: 1
                        }, g.createElement(S.S, {
                            onClick: n.showReportModal,
                            "data-a-target": "pulse-post-report"
                        }, g.createElement(S.U, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            className: C
                        }, Object(h.d)("Report", "FeedItemOptions"))), n.getDeleteEl())
                    }, n.getPostPermissions = function() {
                        return o.__awaiter(n, void 0, void 0, function() {
                            var e, t, n;
                            return o.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.setState({
                                            loadingPermissions: !0
                                        }), e = this.props.content.id.split(":"), [4, h.n.apollo.client.query({
                                            query: N,
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
                        if (!n.props.user) return void n.props.login();
                        n.props.showReportUserModal({
                            reportContext: n.getReportContext(n.props.content),
                            title: Object(h.d)("Report {itemType}", {
                                itemType: n.props.content.__typename
                            }, "ReportFeedPost")
                        })
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
                        a = t.content,
                        s = t.deletePost,
                        l = t.user;
                    return s && l && i(a) && l.id === a.author.id && (r = !0), n.state = {
                        loadingPermissions: !1,
                        permissionQueryData: void 0,
                        showDeleteConfirmView: !1,
                        showOptionView: !1,
                        userCanDelete: r
                    }, n
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return (this.state.showDeleteConfirmView || this.state.showOptionView && !this.state.loadingPermissions) && (e = g.createElement(S.p, {
                        direction: S.q.Left,
                        size: S.r.Small,
                        show: !0
                    }, this.state.showOptionView && this.getOptionView(), this.state.showDeleteConfirmView && this.getDeleteConfirmView())), g.createElement(S.U, {
                        position: S._2.Relative
                    }, g.createElement(v.a, {
                        onClickOut: this.closeViews
                    }, e, g.createElement("div", {
                        className: this.state.showOptionView || this.state.showDeleteConfirmView ? "button-icon--show" : "button-icon"
                    }, g.createElement(S.v, {
                        icon: S._9.Gear,
                        ariaLabel: Object(h.d)("Post Options", "FeedPostOptions"),
                        onClick: this.toggleOptionView,
                        "data-a-target": "pulse-post-options"
                    }))))
                }, t.prototype.getReportContext = function(e) {
                    switch (e.__typename) {
                        case "Clip":
                            var t = e;
                            return {
                                contentType: b.a.Clip,
                                targetUserID: t.broadcaster.id,
                                contentID: t.id
                            };
                        case O:
                            var n = e;
                            return {
                                contentType: b.a.ChannelFeedPost,
                                targetUserID: n.author.id,
                                contentID: n.id
                            };
                        case "Stream":
                            var i = e;
                            return {
                                contentType: b.a.User,
                                targetUserID: i.broadcaster.id
                            };
                        case "Video":
                            var r = e;
                            return {
                                contentType: b.a.Vod,
                                targetUserID: r.owner.id,
                                contentID: r.id
                            };
                        default:
                            return {
                                contentType: b.a.User,
                                targetUserID: ""
                            }
                    }
                }, t.contextTypes = {
                    feedTrackingProps: f.object
                }, t = o.__decorate([Object(_.c)("FeedItemOptions")], t)
            }(g.Component),
            U = x,
            F = Object(s.a)(r, a)(U);
        n.d(t, "a", function() {
            return F
        })
    },
    1255: function(e, t, n) {
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
    1256: function(e, t, n) {
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
        }(n(930).definitions)), e.exports = i
    },
    1281: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(2),
            o = n(914),
            s = n(116),
            l = n(74),
            c = n(75),
            u = n(548),
            d = function(e) {
                var t = {
                    name: "TWILIGHT_VIDEO_FEATURO_EN",
                    assignments: {
                        fallback: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 74))
                            }, "FeaturedBroadcasters")(i.__assign({}, e))
                        },
                        mixed: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 548))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !0
                            }))
                        },
                        last: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 548))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !1
                            }))
                        }
                    },
                    loader: function() {
                        return Object(c.placeholderFeaturedBroadcasters)(e.renderContext)
                    }
                };
                return "en" === a.n.intl.getLanguageCode() ? r.createElement(o.a, i.__assign({}, t)) : r.createElement(l.FeaturedBroadcasters, {
                    renderContext: e.renderContext
                })
            };
        n.d(t, "a", function() {
            return u.FeaturedBroadcastersRenderContext
        }), n.d(t, "b", function() {
            return d
        })
    },
    1282: function(e, t) {},
    1283: function(e, t) {},
    1284: function(e, t) {},
    1285: function(e, t) {},
    1286: function(e, t) {
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
    1287: function(e, t) {
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
    1315: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }
        var r, a = n(0),
            o = n(1),
            s = n(2),
            l = n(64),
            c = n(47),
            u = n(133),
            d = n(387),
            m = n(902),
            p = n(870),
            f = n(5),
            g = n(3),
            h = Object(u.a)("/settings/profile");
        ! function(e) {
            e.HomePage = "home", e.Channel = "channel", e.Dashboard = "dashboard", e.Contextual = "contextual"
        }(r || (r = {}));
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
                                r = {
                                    action: m.a.Create,
                                    postID: i[i.length - 1],
                                    postContent: n.body && n.body.content || void 0,
                                    composerLocation: t.props.composerLocation
                                };
                            Object(p.e)(r)
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
                        direction: g.q.BottomRight
                    }));
                    var i, r = o.createElement(l.a, {
                        onClickOut: this.onEmotePickerClickOut
                    }, t, n);
                    return i = this.props.isConnectedToTwitter ? o.createElement(g.E, {
                        "data-test-selector": "twitter-checkbox",
                        id: "share-twitter-toggle",
                        label: Object(s.d)("Share Posts to Twitter", "TwitterShare"),
                        onChange: this.toggleShareActivity,
                        checked: this.state.shareToTwitter
                    }) : o.createElement("a", {
                        href: h
                    }, Object(s.d)("Connect Twitter", "ConnectTwitter")), o.createElement(g._17, {
                        elevation: 1,
                        padding: 1,
                        margin: {
                            bottom: 1
                        },
                        background: g.m.Base,
                        position: g._2.Relative,
                        "data-a-target": "pulse-post-container"
                    }, o.createElement("div", {
                        onMouseEnter: this.onMouseEnter
                    }, o.createElement(g._23, {
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
                        overflow: g.Y.Hidden
                    }), o.createElement(g._17, {
                        textAlign: g._22.Right,
                        position: g._2.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, r), o.createElement(g.U, {
                        display: g.H.Flex,
                        margin: {
                            top: 1
                        }
                    }, o.createElement(g.U, {
                        flexGrow: 1
                    }), o.createElement(g.U, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(l.a, {
                        onClickOut: this.closeTwitterBubble
                    }, o.createElement(c.a, null, o.createElement(g.v, {
                        icon: g._9.Gear,
                        ariaLabel: Object(s.d)("Composer Settings", "ComposerSettings"),
                        "data-test-selector": "composer-setting",
                        "data-a-target": "pulse-settings"
                    }), o.createElement(g.p, {
                        direction: g.q.Left
                    }, o.createElement(g.U, {
                        padding: 1
                    }, i))))), o.createElement(g.U, null, o.createElement(g.u, {
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
            k = v,
            y = n(6),
            _ = Object(y.a)(i)(k);
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
            return k
        }), n.d(t, "a", function() {
            return _
        })
    },
    1316: function(e, t, n) {
        "use strict";
        var i = n(1),
            r = n(2),
            a = n(0),
            o = n(902),
            s = n(870),
            l = n(5),
            c = n(3),
            u = n(1253),
            d = n(1254),
            m = n(1075),
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.impressionTracking.onImpression(this.onImpression)
                }, t.prototype.render = function() {
                    return Object(u.b)(this.props.item.content.__typename) ? i.createElement(c._17, a.__assign({
                        elevation: 1,
                        margin: {
                            bottom: 1
                        },
                        background: c.m.Base,
                        position: c._2.Relative
                    }, Object(c._39)(this.props), {
                        className: "feed-item"
                    }), i.createElement(c.U, {
                        position: c._2.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: {
                            top: .5,
                            right: .5
                        }
                    }, i.createElement(d.a, {
                        content: this.props.item.content,
                        deletePost: this.props.deletePost
                    })), i.createElement(m.a, {
                        reasons: this.props.item.reasons
                    }), i.createElement(u.a, {
                        content: this.props.item.content
                    })) : i.createElement(c.U, null)
                }, t = a.__decorate([Object(l.c)("FeedItem"), Object(o.d)(function(e) {
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
            f = p,
            g = function(e) {
                var t = e.items.edges.filter(function(e) {
                    return e.node.content.id
                }).map(function(t, n) {
                    var r = t.node;
                    return i.createElement(f, {
                        key: r.content.id,
                        item: r,
                        index: n,
                        "data-a-target": "pulse-item-" + n,
                        deletePost: e.deletePost
                    })
                });
                return e.latencyTracking.reportInteractive(t.length), t.length ? i.createElement(c.U, null, t) : i.createElement(c.U, {
                    textAlign: c._22.Center
                }, i.createElement(c._21, {
                    color: c.F.Alt2
                }, Object(r.d)("There are no feed posts.", "ChannelFeedComponent")))
            },
            h = Object(l.c)("Feed")(g);
        n.d(t, "a", function() {
            return h
        })
    },
    1317: function(e, t) {},
    1318: function(e, t) {},
    1319: function(e, t, n) {
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
        r.definitions = r.definitions.concat(i(n(1025).definitions)), r.definitions = r.definitions.concat(i(n(1003).definitions)), r.definitions = r.definitions.concat(i(n(1026).definitions)), e.exports = r
    },
    1320: function(e, t, n) {
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
        }(n(1003).definitions)), e.exports = i
    },
    1321: function(e, t) {},
    1322: function(e, t) {},
    1323: function(e, t) {
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
                end: 174
            }
        };
        n.loc.source = {
            body: "query PostPermissions($id: ID!) {\n  feedItemContent(id: $id) {\n    ...on Post {\n      id\n      self {\n        permissions {\n          canDelete\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1324: function(e, t) {},
    1325: function(e, t, n) {
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
        }(n(1003).definitions)), e.exports = i
    },
    1326: function(e, t, n) {
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
                end: 674
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/feed/models/post-fragment.gql"\n#import "twilight/features/feed/models/clip-fragment.gql"\n#import "twilight/features/feed/models/video-fragment.gql"\n#import "twilight/features/feed/models/stream-fragment.gql"\n\nfragment feed on FeedItemConnection {\n  edges {\n    node {\n      content {\n        ...feedItemClip\n        ...feedItemPost\n        ...feedItemStream\n        ...feedItemVideo\n      }\n      reasons {\n        ... on FeedItemReason {\n          reason\n        }\n      }\n      tracking {\n        batchID\n        cardImpressionID\n        recGenerationID\n        recGenerationIndex\n      }\n    }\n    cursor\n  }\n  pageInfo {\n    hasNextPage\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n(1003).definitions)), r.definitions = r.definitions.concat(i(n(1025).definitions)), r.definitions = r.definitions.concat(i(n(1026).definitions)), r.definitions = r.definitions.concat(i(n(1256).definitions)), e.exports = r
    },
    133: function(e, t, n) {
        "use strict";

        function i(e) {
            return a.b.get(s.a, !1) || a.a.buildType !== o.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? l + e : l + e.pathname
        }

        function r() {
            return !a.b.get(s.a, !1) && a.a.buildType === o.a.Production
        }
        var a = n(2),
            o = n(14),
            s = n(267);
        t.a = i, t.b = r;
        var l = "https://www.twitch.tv"
    },
    136: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = r.b.get(l, "https://twitch.amazon.com/prime"),
                i = "";
            try {
                i = btoa(t)
            } catch (e) {
                c.error(e, "Could not decode location pathname substring for redirect")
            }
            return i ? n + "?ref_=" + e + "&redirectRoute=" + i : n + "?ref_=" + e
        }
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        }), t.d = i;
        var r = n(2),
            a = "sm_tw_tup_ntp_t_all",
            o = "sm_tw_thp_blue_t_all",
            s = "sm_w_tup_ntp_t_c",
            l = "prime_landing_page_base_url",
            c = r.i.withCategory("PrimeUtilsLogger")
    },
    1372: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(926),
            o = n(5),
            s = n(275),
            l = function(e) {
                var t = e.video,
                    n = t.id,
                    o = t.lengthSeconds,
                    l = t.publishedAt,
                    c = t.previewThumbnailURL,
                    u = t.viewCount,
                    d = {
                        vodID: n,
                        disableTheatreButton: !0,
                        playerTypeOverride: e.playerTypeOverride
                    };
                return r.createElement(a.a, {
                    createdAt: l,
                    lengthSeconds: o,
                    type: a.b.Video,
                    thumbnailURL: c,
                    viewCount: u
                }, r.createElement(s.c, i.__assign({}, d)))
            },
            c = Object(o.c)("VideoEmbed")(l);
        n.d(t, !1, function() {
            return l
        }), n.d(t, "a", function() {
            return c
        })
    },
    139: function(e, t, n) {
        "use strict";

        function i(e) {
            return S.debug("Updating activity", e), E = f.__assign({}, E, {
                activity: e
            }), m()
        }

        function r(e) {
            S.debug("Updating visibility", e), p(e)
        }

        function a(e) {
            S.debug("Saving current availability", e), E = f.__assign({}, E, {
                availability: e
            })
        }

        function o() {
            a(h.a.Online)
        }

        function s() {
            a(h.a.Idle)
        }

        function l() {
            S.debug("Clearing activity"), E = f.__assign({}, E, {
                activity: null
            }), m()
        }

        function c() {
            return f.__awaiter(this, void 0, void 0, function() {
                var e;
                return f.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            S.debug("Clearing previous session"), E = {
                                sessionID: u(),
                                availability: h.a.Online,
                                activity: null
                            }, t.label = 1;
                        case 1:
                            return t.trys.push([1, 4, , 5]), [4, m()];
                        case 2:
                            return t.sent(), S.debug("Setting new session"), E = f.__assign({}, E, {
                                sessionID: g.n.session.tabID
                            }), d(g.n.session.tabID), [4, m()];
                        case 3:
                            return [2, t.sent()];
                        case 4:
                            return e = t.sent(), [2, e];
                        case 5:
                            return [2]
                    }
                })
            })
        }

        function u() {
            return g.k.get(_, "")
        }

        function d(e) {
            g.k.set(_, e)
        }

        function m() {
            return f.__awaiter(this, void 0, void 0, function() {
                return f.__generator(this, function(e) {
                    return Object(v.d)(g.n.store.getState()) ? (S.debug("Setting status on server", {
                        state: E
                    }), b && clearTimeout(b), [2, g.n.apollo.client.mutate({
                        mutation: k,
                        variables: {
                            input: E
                        }
                    }).then(function(e) {
                        S.debug("Status scheduled to be set again", {
                            seconds: e.data.setSessionStatus.setAgainInSeconds
                        }), b = setTimeout(m, 1e3 * e.data.setSessionStatus.setAgainInSeconds)
                    }, function(e) {
                        S.warn("Failed to update status. Trying again in 60 seconds.", e), b = setTimeout(m, 6e4)
                    })]) : [2]
                })
            })
        }

        function p(e) {
            Object(v.d)(g.n.store.getState()) && (S.debug("Setting visibility on server", {
                visibility: e
            }), g.n.apollo.client.mutate({
                mutation: y,
                variables: {
                    input: {
                        visibility: e
                    }
                }
            }).then(function(e) {
                S.debug("Visibility set", {
                    visibility: e.data.updateVisibility.user.availability
                })
            }, function(e) {
                S.warn("Failed to update visibility.", e)
            }))
        }
        t.f = i, t.e = r, t.c = a, t.b = o, t.d = s, t.a = l, t.g = c;
        var f = n(0),
            g = n(2),
            h = n(50),
            v = n(17),
            k = n(420),
            y = (n.n(k), n(421)),
            _ = (n.n(y), "twilight.sessionID"),
            b = 0,
            S = g.i.withCategory("Session Status"),
            N = {
                sessionID: g.n.session.tabID,
                availability: "",
                activity: null
            },
            E = N
    },
    1914: function(e, t) {
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
    1915: function(e, t) {
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
    1916: function(e, t) {
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
                end: 214
            }
        };
        n.loc.source = {
            body: "query VideoEmbedLoader_Video($id: ID!, $height: Int, $width: Int) {\n  video(id: $id) {\n    id\n    lengthSeconds\n    previewThumbnailURL(width: $width, height: $height)\n    publishedAt\n    title\n    viewCount\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1917: function(e, t) {
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
    1918: function(e, t) {
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
    1919: function(e, t, n) {
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
        r.definitions = r.definitions.concat(i(n(1326).definitions)), r.definitions = r.definitions.concat(i(n(930).definitions)), e.exports = r
    },
    1920: function(e, t) {
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
    1921: function(e, t) {},
    2070: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function r(e, t) {
            var n = new Set(e.map(function(e) {
                return e.node.content.id
            }));
            return e.concat(t.filter(function(e) {
                return !n.has(e.node.content.id)
            }))
        }

        function a(e) {
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
        var o = n(0),
            s = n(1),
            l = n(2),
            c = n(28),
            u = n(913),
            d = n(823),
            m = n(821),
            p = n(115),
            f = n(12),
            g = n(884),
            h = n(385),
            v = n(1281),
            k = n(5),
            y = n(6),
            _ = n(35),
            b = n(7),
            S = n(1001),
            N = n(1062),
            E = n(67),
            w = n(10),
            C = n(381),
            O = n(3),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = s.createElement(O.U, {
                            padding: 1
                        }, s.createElement(O._21, {
                            fontSize: O.L.Size5,
                            color: O.F.Alt2
                        }, Object(l.d)("{title}", {
                            title: e.title
                        }, "GameListComponent"))),
                        n = s.createElement(O._17, {
                            background: O.m.Alt,
                            padding: 1
                        }, s.createElement(O.P, {
                            fullWidth: !0,
                            fullHeight: !0,
                            display: O.H.Block
                        }, s.createElement(w.a, o.__assign({
                            to: e.viewAllLinkTo
                        }, Object(O._39)(e)), Object(l.d)("View All", "GameListComponent")))),
                        i = [];
                    if (e.loading)
                        for (var r = 0; r < e.limit; r++) i.push(s.createElement(O.U, {
                            key: r,
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(O.j, {
                            ratio: O.k.Aspect3x4
                        }, s.createElement(O._1, null)), s.createElement(O.U, null, s.createElement(O._21, null, s.createElement(O._1, {
                            width: 100
                        })), s.createElement(O._21, null, s.createElement(O._1, {
                            width: 70
                        })))));
                    else e.items && e.items.length > 0 && (i = e.items.map(function(e, t) {
                        if (!e) return null;
                        var n = e.id,
                            i = e.name,
                            r = e.viewersCount,
                            a = e.boxArtURL;
                        return s.createElement(O.U, {
                            key: n,
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(O.t, {
                            linkTo: Object(C.d)(i),
                            title: i,
                            imageAlt: i + " cover image",
                            imageSrc: a,
                            info: Object(l.d)("{viewerCount,number} viewers", {
                                viewerCount: r
                            }, "GameListComponent"),
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + i.replace(/ /g, "")
                        }))
                    }));
                    return s.createElement(O._17, {
                        elevation: 1,
                        background: O.m.Base,
                        display: O.H.Hide,
                        breakpointMedium: {
                            display: O.H.Block
                        }
                    }, t, s.createElement(O.U, {
                        padding: {
                            x: 1
                        }
                    }, s.createElement(O._33, {
                        gutterSize: O._35.ExtraSmall,
                        childWidth: O._34.ExtraSmall,
                        placeholderItems: 18
                    }, i)), n)
                }, t = o.__decorate([Object(k.c)("GameList", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component),
            U = x,
            F = n(1914),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = [];
                    return this.props.data.error ? s.createElement(E.a, {
                        message: Object(l.d)("Followed Games are unavailable at this time.", "FollowedGamesCompoment")
                    }) : (this.props.data.loading || (e = this.props.data.currentUser.followedGames && this.props.data.currentUser.followedGames.nodes || []), this.props.data.loading || e && e.length > 0 ? s.createElement(U, {
                        "data-a-target": "view-all-followed-games-link",
                        items: e,
                        limit: 18,
                        loading: this.props.data.loading,
                        title: Object(l.d)("Followed Games", "FollowedGamesCompoment"),
                        viewAllLinkTo: "/directory/following/games"
                    }) : null)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = o.__decorate([Object(b.a)(F, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    }
                }), Object(k.c)("FollowedGames")], t)
            }(s.Component),
            R = D,
            I = n(1915),
            T = "twilight_onboarding",
            A = "twilight_onboarding-prompt_dismissed",
            j = {
                domain: window.location.hostname.endsWith(".twitch.tv") ? ".twitch.tv" : void 0,
                secure: "https:" === window.location.protocol
            },
            L = o.__assign({}, j, {
                expires: 365
            }),
            P = new Map([
                ["skip", 1],
                ["no_skip", 3]
            ]),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isOnboardingDismissedCookieSet: void 0 !== _.get(A)
                    }, t.handleAutoOnboardingRedirect = function() {
                        void 0 === _.get(T) && Object(S.i)(new Date(t.props.data.currentUser.createdAt)) && (_.set(T, !0, L), t.redirectToOnboarding(N.b.NewSignup))
                    }, t.startOnboarding = function() {
                        t.redirectToOnboarding(N.b.HomepageCTA)
                    }, t.redirectToOnboarding = function(e) {
                        Object(N.g)({
                            source: e
                        }), window.location.assign("/hi" + location.search)
                    }, t.dismissOnboardingPrompt = function() {
                        Object(N.e)(), _.set(A, !0, L), t.setState({
                            isOnboardingDismissedCookieSet: !0
                        })
                    }, t.followedGamesForUserHasLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.currentUser
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, l.n.experiments.getAssignment("TWILIGHT_WEB_ONBOARDING")];
                                case 1:
                                    return e = t.sent(), e && P.has(e) && this.setState({
                                        experimentAssignment: e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return this.state.isOnboardingDismissedCookieSet || !this.followedGamesForUserHasLoaded() || !this.state.experimentAssignment || this.props.data.currentUser.followedGames.nodes.length >= (P.get(this.state.experimentAssignment) || 0) || !Object(S.i)(new Date(this.props.data.currentUser.createdAt)) ? null : (this.handleAutoOnboardingRedirect(), s.createElement(O._17, {
                        "data-test-selector": "onboarding-prompt",
                        background: O.m.Base,
                        display: O.H.Flex,
                        elevation: 3,
                        margin: {
                            bottom: 1
                        },
                        padding: 1,
                        borderMarked: !0
                    }, s.createElement(O._17, {
                        display: O.H.Flex,
                        flexWrap: O.K.NoWrap,
                        textAlign: O._22.Left,
                        alignItems: O.c.Center,
                        fullWidth: !0,
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(O.U, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, s.createElement(O._21, {
                        type: O._26.H5,
                        color: O.F.Base,
                        bold: !0
                    }, Object(l.d)("Welcome to your homepage, {displayName}!", {
                        displayName: this.props.data.currentUser.displayName
                    }, "OnboardingPrompt"))), s.createElement(O.U, {
                        flexShrink: 0
                    }, s.createElement(O.v, {
                        "data-test-selector": "onboarding-prompt__dismiss",
                        ariaLabel: Object(l.d)("dismiss onboarding", "OnboardingPrompt"),
                        type: O.w.Default,
                        onClick: this.dismissOnboardingPrompt,
                        icon: O._9.Close
                    }))), s.createElement(O.U, {
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(O._21, null, Object(l.d)("Here you can find your Pulse Feed and popular content on Twitch. Take a moment to personalize this page to your interests.", "OnboardingPrompt"))), s.createElement(O.U, {
                        margin: {
                            y: .5
                        }
                    }, s.createElement(O.u, {
                        "data-test-selector": "onboarding-prompt__start",
                        onClick: this.startOnboarding
                    }, s.createElement(O.U, {
                        padding: {
                            x: 1
                        }
                    }, Object(l.d)("Start", "OnboardingPrompt"))))))
                }, t = o.__decorate([Object(k.c)("OnboardingPrompt", {
                    autoReportInteractive: !0
                }), Object(b.a)(I, {
                    options: {
                        variables: {
                            limit: 18
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                })], t)
            }(s.Component),
            B = V,
            M = Object(y.a)(i)(B),
            H = n(926),
            q = n(1372),
            z = n(1916),
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.height || 540,
                        t = this.props.width || 960;
                    return this.props.data.loading ? s.createElement(O._1, {
                        height: e,
                        width: t
                    }) : this.props.data.error || !this.props.data.video ? s.createElement(O._1, {
                        height: e,
                        width: t
                    }) : s.createElement(q.a, {
                        video: this.props.data.video,
                        playerTypeOverride: this.props.playerTypeOverride
                    })
                }, t
            }(s.Component),
            G = Object(k.c)("LoadingVideoEmbed")(W),
            $ = Object(b.a)(z, {
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
            })(G),
            K = $,
            Q = n(1057),
            Y = n(1024),
            J = new Map([
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
            Z = Array.from(J.keys()),
            X = ["28036688", "30672745", "31582795", "51533859", "63321379", "62983472", "29400754"],
            ee = n(275),
            te = n(1917),
            ne = function(e) {
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
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error ? (this.props.data.error && l.i.warn("StreamerTrailer data error:", this.props.data.error), null) : s.createElement(O._17, {
                        background: O.m.Base,
                        elevation: 1,
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            x: .5,
                            y: 1
                        },
                        display: O.H.Flex,
                        flexDirection: O.J.Column,
                        flexWrap: O.K.NoWrap
                    }, s.createElement(O.U, {
                        margin: {
                            bottom: .5
                        },
                        padding: {
                            left: .5
                        }
                    }, s.createElement(O._21, {
                        fontSize: O.L.Size5,
                        color: O.F.Alt2
                    }, "Streamers You May Like")), s.createElement(O.U, {
                        display: O.H.Flex,
                        flexDirection: O.J.Row,
                        flexWrap: O.K.NoWrap
                    }, this.renderStreamerVideos()))
                }, t.prototype.renderStatusLink = function(e, t, n) {
                    var i = e.login,
                        r = e.displayName,
                        a = e.stream,
                        o = s.createElement(w.a, {
                            to: "/" + i
                        }, r);
                    return "" === a.id && "" !== n.id && void 0 !== n.game && "" !== n.game.name && !1 === this.props.showTrailers ? s.createElement(O.U, null, s.createElement(O._21, {
                        fontSize: O.L.Size6,
                        ellipsis: !0
                    }, o, " "), s.createElement(O._21, {
                        fontSize: O.L.Size6,
                        color: O.F.Base,
                        ellipsis: !0
                    }, "was playing ", s.createElement(w.a, {
                        to: "/directory/game/" + n.game.name
                    }, n.game.name))) : "" !== t ? s.createElement(O.U, null, s.createElement(O._21, {
                        fontSize: O.L.Size6,
                        ellipsis: !0
                    }, o, " "), s.createElement(O._21, {
                        fontSize: O.L.Size6,
                        color: O.F.Base,
                        ellipsis: !0
                    }, "playing ", s.createElement(w.a, {
                        to: "/directory/game/" + t
                    }, t))) : s.createElement(O._21, {
                        fontSize: O.L.Size6,
                        color: O.F.Base,
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
                        var l = r.edges[0].node || e.blankVideo;
                        return s.createElement(O.U, {
                            className: "streamer-trailer",
                            margin: .5,
                            fullHeight: !0,
                            fullWidth: !0,
                            key: a,
                            "data-test-selector": t.selector
                        }, e.mapStreamToEmbed(t), e.renderStreamerInfo(t.userData, o, l))
                    })
                }, t.prototype.mapStreamToEmbed = function(e) {
                    var t = e.userData,
                        n = t.login,
                        i = t.stream,
                        r = t.videos,
                        a = e.videoID,
                        o = r.edges[0].node;
                    return !0 === this.props.showTrailers ? s.createElement(K, {
                        width: 211,
                        height: 118,
                        playerTypeOverride: ee.b.Frontpage,
                        videoID: a
                    }) : "" === i.id ? s.createElement(K, {
                        width: 211,
                        height: 118,
                        playerTypeOverride: ee.b.Frontpage,
                        videoID: o.id
                    }) : s.createElement(H.a, {
                        type: H.b.Stream,
                        viewCount: i.viewersCount,
                        thumbnailURL: i.previewImageURL
                    }, s.createElement(Y.a, {
                        channelLogin: n,
                        playerTypeOverride: ee.b.Frontpage
                    }))
                }, t.prototype.renderStreamerInfo = function(e, t, n) {
                    var i = e.login,
                        r = e.profileImageURL,
                        a = e.stream;
                    return s.createElement(O.U, {
                        "data-test-selector": i + "-streamer-trailer",
                        display: O.H.Flex,
                        flexGrow: 0,
                        alignItems: O.c.Start,
                        flexWrap: O.K.NoWrap,
                        margin: {
                            top: 1
                        }
                    }, s.createElement(O.U, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, s.createElement(w.a, {
                        to: "/" + i
                    }, s.createElement(O.l, {
                        imageSrc: r,
                        imageAlt: "Profile Image",
                        size: 40
                    }))), s.createElement(O.U, {
                        margin: {
                            x: 1
                        },
                        flexGrow: 1,
                        "data-a-target": "streamer-trailer-playing-message"
                    }, this.renderStatusLink(e, t, n)), s.createElement(O.U, {
                        display: O.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, s.createElement(O.u, {
                        type: O.z.Hollow,
                        linkTo: "/" + i
                    }, this.renderViewLinkText(a.id))))
                }, t.prototype.getLiveUsersInRandomOrder = function() {
                    for (var e = [], t = 0, n = this.props.data.users; t < n.length; t++) {
                        var i = n[t];
                        this.userIDToData.set(i.id, i), "" !== i.stream.id && e.push(i.id)
                    }
                    return Object(Q.a)(e)
                }, t.prototype.addLiveUsersToUsedStreamerTrailers = function(e) {
                    for (var t = 0; t < e.length && !(t >= 4); t++) {
                        var n = e[t],
                            i = J.get(n) || "",
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
                    for (var t = e.length, n = 0; t < 4 && n < X.length; n++) {
                        for (var i = !0, r = X[n], a = 0, o = e; a < o.length; a++) {
                            if (r === o[a]) {
                                i = !1;
                                break
                            }
                        }
                        if (i) {
                            var s = J.get(r) || "",
                                l = this.userIDToData.get(r) || this.blankUser;
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
                }, t = o.__decorate([Object(k.c)("StreamerTrailer"), Object(b.a)(te, {
                    options: {
                        variables: {
                            ids: Z
                        }
                    }
                })], t)
            }(s.Component),
            ie = ne,
            re = n(1918),
            ae = ["control", "on"],
            oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        assignmentDetermined: !1,
                        assignment: ""
                    }, t.didUnmount = !1, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.props.latencyTracking.reportInteractive(), [4, l.n.experiments.getAssignment("STREAMER_TRAILERS", {})];
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
                            if (new Date(e.createdAt) > this.getStartDate() && "en" === e.language && this.validAssignment()) return s.createElement(ie, {
                                showTrailers: "on" === this.state.assignment
                            })
                        }
                    }
                    return null
                }, t.prototype.getStartDate = function() {
                    var e = l.b.get("streamer_trailers_start_date", "2017-10-05T20:00:26.75536206Z");
                    return isNaN(Date.parse(e)) ? (l.i.warn("Date", e, "is not a valid date"), new Date("2017-10-05T20:00:26.75536206Z")) : new Date(e)
                }, t.prototype.validAssignment = function() {
                    var e = this.state.assignment || "";
                    return void 0 !== ae.find(function(t) {
                        return t === e
                    })
                }, t = o.__decorate([Object(k.c)("StreamerTrailersExperiment"), Object(b.a)(re)], t)
            }(s.Component),
            se = oe,
            le = n(451),
            ce = n(390),
            ue = n(20),
            de = n(1315),
            me = n(1316),
            pe = n(1325),
            fe = n(902),
            ge = n(1255),
            he = function(e) {
                for (var t = e.cardCount, n = [], i = 0; i < t; i++) 1 === i ? n.push(s.createElement(ge.b, {
                    key: i
                })) : n.push(s.createElement(ge.a, {
                    key: i
                }));
                return s.createElement(O.U, null, n)
            },
            ve = n(1919),
            ke = Object(fe.d)(function() {
                return {
                    feed_type: "rec"
                }
            })(me.a),
            ye = {
                limit: 5
            },
            _e = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCreatePost = function(e, n) {
                        return void 0 === n && (n = !1), t.props.createPost(e, n)
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? s.createElement(he, {
                        cardCount: 5
                    }) : this.props.data.error ? s.createElement(E.a, {
                        message: Object(l.d)("Error loading data.", "PulseComponent")
                    }) : s.createElement(O.U, null, s.createElement(de.a, {
                        placeholder: Object(l.d)("Share a clip or video with your followers by adding links from Twitch, Vimeo, and YouTube.", "PulseComposer"),
                        onCreate: this.onCreatePost,
                        isConnectedToTwitter: this.props.data.currentUser.isConnectedToTwitter,
                        userID: this.props.data.currentUser.id,
                        composerLocation: de.b.HomePage
                    }), s.createElement(ke, {
                        items: this.props.data.currentUser.pulseFeed.items
                    }), s.createElement(c.a, {
                        enabled: !this.props.data.loading && !this.props.data.error,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 100
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = o.__decorate([Object(b.a)(ve, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: ye
                    },
                    props: function(e) {
                        return o.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data.currentUser.pulseFeed.items.edges;
                                return e.data.fetchMore({
                                    query: ve,
                                    variables: {
                                        limit: 5,
                                        cursor: t[t.length - 1].cursor
                                    },
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            i = n;
                                        return {
                                            currentUser: o.__assign({}, i.currentUser, {
                                                pulseFeed: o.__assign({}, i.currentUser.pulseFeed, {
                                                    items: o.__assign({}, i.currentUser.pulseFeed.items, {
                                                        edges: r(e.currentUser.pulseFeed.items.edges, i.currentUser.pulseFeed.items.edges)
                                                    })
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(b.a)(pe, {
                    props: function(e) {
                        return {
                            createPost: function(t, n) {
                                return e.mutate(o.__assign({}, Object(ue.a)({
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
                                            query: ve,
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
                                            query: ve,
                                            data: n,
                                            variables: ye
                                        })
                                    }
                                }))
                            }
                        }
                    }
                }), Object(k.c)("Pulse")], t)
            }(s.Component),
            be = _e,
            Se = n(1920),
            Ne = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = [];
                    return this.props.data.error ? s.createElement(E.a, {
                        message: Object(l.d)("Top Games are unavailable at this time.", "TopGamesCompoment")
                    }) : (this.props.data.loading || (e = a(this.props.data)), s.createElement(U, {
                        title: Object(l.d)("Top Games", "TopGamesCompoment"),
                        items: e,
                        loading: this.props.data.loading,
                        limit: 18,
                        viewAllLinkTo: "/directory",
                        "data-a-target": "view-all-link"
                    }))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = o.__decorate([Object(b.a)(Se, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: e.count || 18
                            }
                        }
                    }
                }), Object(k.c)("TopGames")], t)
            }(s.Component),
            Ee = Ne,
            we = (n(1921), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(h.b.front).length && p.a.display(h.b.front.leaderboard), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentWillMount = function() {
                    h.g.addListener(h.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender(), l.n.setPageTitle()
                }, t.prototype.render = function() {
                    return s.createElement(O.U, {
                        fullHeight: !0
                    }, s.createElement(le.b, {
                        suppressScrollX: !0,
                        disableDebounce: !0
                    }), s.createElement(u.a, null, s.createElement(ce.a, null)), s.createElement(O.U, {
                        padding: 3
                    }, s.createElement(g.a, {
                        adSize: h.c.front.leaderboard,
                        adUnit: h.d.frontpage,
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
                    }), s.createElement(se, null), s.createElement(O.U, {
                        className: "front-page",
                        display: O.H.Flex,
                        flexDirection: O.J.ColumnReverse,
                        breakpointMedium: {
                            flexDirection: O.J.Row
                        },
                        flexWrap: O.K.NoWrap,
                        margin: {
                            x: "auto"
                        }
                    }, s.createElement(O.U, {
                        className: "front-page__main-col",
                        flexGrow: 0,
                        flexShrink: 0
                    }, s.createElement(M, null), s.createElement(be, null)), s.createElement(O.U, {
                        flexGrow: 1,
                        breakpointMedium: {
                            padding: {
                                left: 2
                            }
                        }
                    }, s.createElement(c.c, {
                        bottomPixelThreshold: 20,
                        disableStickinessBelowWidth: 1127
                    }, s.createElement(O.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(v.b, {
                        renderContext: v.a.Front
                    })), s.createElement(O.U, {
                        display: O.H.Hide,
                        breakpointMedium: {
                            display: O.H.Block
                        }
                    }, s.createElement(g.a, {
                        adSize: h.c.front.rightTop,
                        adUnit: h.d.frontpage,
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
                    })), s.createElement(O.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(R, null)), s.createElement(Ee, null), s.createElement(O.U, {
                        display: O.H.Hide,
                        breakpointMedium: {
                            display: O.H.Block
                        }
                    }, s.createElement(g.a, {
                        adSize: h.c.front.rightBottom,
                        adUnit: h.d.frontpage,
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
                }, t = o.__decorate([Object(k.c)("FrontPage", {
                    destination: m.a.Index
                }), Object(d.a)({
                    location: f.PageviewLocation.FrontPage
                })], t)
            }(s.Component)),
            Ce = we;
        n.d(t, "FrontPage", function() {
            return Ce
        })
    },
    267: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(21),
            a = n(1),
            o = n(2),
            s = n(14),
            l = "legacy_routes_enabled",
            c = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        return n.isEnabled ? "REPLACE" === t ? void n.logger.debug("Skipping legacy route processing, due to history replace.") : e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), void n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var i = "" !== e.search ? r.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var a = r.stringify(i),
                                        l = o.a.buildType === s.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + l + e.pathname + "?" + a;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: c
                                    }), void window.location.replace(c)
                                }
                            } catch (e) {
                                o.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : void n.logger.debug("Unable to process history change. Path is null or empty.") : void n.logger.debug("Legacy routing not enabled.")
                    }, n.processRedirectParam = function(e) {
                        if (e && e.pathname && e.search) {
                            var t = "" !== e.search ? r.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var i = r.stringify(t),
                                    a = "";
                                i.length > 0 && (a = "?" + i), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: a
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
                        var r = i[n];
                        try {
                            var a = new RegExp(r, "i");
                            t.push(a)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: r,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(a.Component),
            u = c;
        n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return u
        })
    },
    383: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = Math.floor(e % 60),
                i = Math.floor(e % 3600 / 60),
                a = Math.floor(e / 3600);
            return t && t.zeroPadAll ? r(a, 2) + ":" + r(i, 2) + ":" + r(n, 2) : a ? a + ":" + r(i, 2) + ":" + r(n, 2) : i + ":" + r(n, 2)
        }

        function r(e, t) {
            return t -= e.toString().length, t > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.a = i
    },
    385: function(e, t, n) {
        "use strict";

        function i(e) {
            p.emit(d, e)
        }

        function r(e) {
            p.emit(m, e)
        }
        n.d(t, "b", function() {
            return s
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "d", function() {
            return c
        }), n.d(t, "a", function() {
            return u
        }), n.d(t, "f", function() {
            return d
        }), n.d(t, "e", function() {
            return m
        }), n.d(t, "g", function() {
            return p
        }), t.i = i, t.h = r;
        var a = n(24),
            o = (n.n(a), n(2)),
            s = {
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
            l = {
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
            c = {
                directory: "/" + o.a.dfpNetworkCode + "/twitch/directory",
                channel: "/" + o.a.dfpNetworkCode + "/twitch/channels",
                frontpage: "/" + o.a.dfpNetworkCode + "/twitch/homepage",
                sizzle: "/" + o.a.dfpNetworkCode + "/twitch/sizzle_strip"
            },
            u = {
                games: "games",
                channel: "channel",
                frontpage: "homepage"
            },
            d = "ads.slot-render-end",
            m = "ads.slot-ready",
            p = new a.EventEmitter
    },
    389: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(2),
            o = n(7),
            s = n(56),
            l = n(3),
            c = n(410),
            u = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(l.S, i.__assign({
                        onClick: this.props.onClick,
                        linkTo: this.props.linkTo,
                        hover: this.props.hover,
                        tabIndex: -1,
                        key: this.props.id
                    }, Object(s.a)(this.props)), r.createElement(l.U, {
                        className: "search-game-result-card",
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(l.A, {
                        row: !0
                    }, r.createElement(l.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.data && !this.props.data.loading && this.props.data.game ? this.props.data.game.boxArtURL : a.a.defaultBoxArtURL,
                        size: l.D.Size4,
                        aspect: l.k.BoxArt
                    }), r.createElement(l.B, null, r.createElement(l.P, {
                        padding: {
                            x: 1
                        }
                    }, r.createElement(l._21, {
                        type: l._26.H5,
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
            }(r.Component);
        n.d(t, "a", function() {
            return u
        })
    },
    390: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                firstPageLoaded: !!e.session.firstPageLoaded
            }
        }
        var r = n(6),
            a = n(0),
            o = n(21),
            s = n(1),
            l = n(2),
            c = n(47),
            u = n(7),
            d = n(109),
            m = n(5),
            p = n(3),
            f = (n(425), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p.U, null, s.createElement(p._17, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: p.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(p.U, {
                        flexGrow: 1
                    }, s.createElement(p._21, {
                        bold: !0,
                        type: p._26.H6
                    }, Object(l.d)("Free with Prime", "PrimeOfferHeader")))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return s.createElement(p._17, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: p.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(p.U, {
                        fullWidth: !0,
                        display: p.H.Flex
                    }, s.createElement(p.U, {
                        flexGrow: 1
                    }, s.createElement(p._21, {
                        bold: !0,
                        type: p._26.H6
                    }, Object(l.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(p.U, {
                        className: "prime-offer__new-offer-header-count",
                        display: p.H.Flex,
                        alignItems: p.c.Center,
                        textAlign: p._22.Center
                    }, s.createElement(p._17, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: p.m.Base,
                        color: p.F.Base
                    }, s.createElement(p._21, null, e.toString())))))
                }, t = a.__decorate([Object(m.c)("PrimeOfferHeader")], t)
            }(s.Component)),
            g = f,
            h = n(28),
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(l.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: s.createElement(p._21, {
                            italic: !0,
                            type: p._26.Span
                        }, Object(l.d)("Hearthstone", "PrimeEmpty")),
                        smite: s.createElement(p._21, {
                            italic: !0,
                            type: p._26.Span
                        }, Object(l.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return s.createElement(p.U, {
                        className: "prime-empty",
                        margin: 2
                    }, s.createElement(p.U, {
                        textAlign: p._22.Center,
                        margin: 2
                    }, s.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(l.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), s.createElement(p._21, {
                        type: p._26.P,
                        bold: !0
                    }, Object(l.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), s.createElement("div", null, e))
                }, t = a.__decorate([Object(m.c)("PrimeEmpty")], t)
            }(s.Component),
            k = v,
            y = n(65),
            _ = n(20),
            b = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            },
            S = function(e, t) {
                return e + "-" + t
            },
            N = function() {
                return x("claimedOffers")
            },
            E = function(e) {
                l.k.set("claimedOffers", e)
            },
            w = function() {
                return x("seenOffers")
            },
            C = function(e) {
                l.k.set("seenOffers", e)
            },
            O = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            x = function(e) {
                return l.k.get(e, [])
            },
            U = function() {
                var e = location.search,
                    t = o.parse(e);
                return t && t.dateOverride || void 0
            },
            F = (n(426), n(427)),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p.U, {
                        className: "prime-claim-button"
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        n = s.createElement(p.u, {
                            fullWidth: !0,
                            state: this.props.claiming ? p.y.Loading : p.y.Default,
                            disabled: this.props.claiming,
                            onClick: this.props.claimCallback,
                            "data-a-target": "prime-claim-button"
                        }, t);
                    return e.offerType === b.EXTERNAL_OFFER ? s.createElement(p.u, {
                        fullWidth: !0,
                        linkTo: e.offerLinkUri,
                        targetBlank: !0
                    }, t) : s.createElement(p.U, {
                        position: p._2.Relative
                    }, n)
                }, t.prototype.getButtonText = function() {
                    return this.props.offerType === b.CLAIM_CODE ? Object(l.d)("Get Code", "PrimeClaimButton") : this.props.offerType === b.EXTERNAL_OFFER ? Object(l.d)("Learn More", "PrimeClaimButton") : Object(l.d)("Claim Offer", "PrimeClaimButton")
                }, t = a.__decorate([Object(u.a)(F), Object(m.c)("PrimeClaimButton")], t)
            }(s.Component),
            R = D,
            I = function(e) {
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
                    return s.createElement(p.U, {
                        className: "prime-claim-description",
                        margin: {
                            top: 1
                        }
                    }, s.createElement(p.u, {
                        fullWidth: !0,
                        type: p.z.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText()), this.getDescriptionBlock())
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(l.d)("Close Info", "PrimeClaimDescription") : Object(l.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function() {
                    var e = null;
                    return this.state.showDescription && (e = s.createElement(p._17, {
                        className: "prime-claim-description__body",
                        background: p.m.Alt2,
                        border: !0
                    }, s.createElement(p.U, {
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, s.createElement(y, {
                        source: this.props.description || ""
                    })))), e
                }, t = a.__decorate([Object(m.c)("PrimeClaimDescription")], t)
            }(s.Component),
            T = I,
            A = n(136),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.getLink = function() {
                    return this.props.externalUri ? this.props.externalUri : Object(A.d)(A.c, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return s.createElement(p.U, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, s.createElement(p.u, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0
                    }, Object(l.d)("Start Your Free Trial", "PrimeUpsellButton")))
                }, t = a.__decorate([Object(m.c)("PrimeUpsellButton")], t)
            }(s.Component),
            L = j,
            P = n(428),
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p.U, {
                        className: "prime-claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.hasPrime ? s.createElement(R, {
                        offerType: this.props.offerType,
                        offerId: this.props.offerId,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        offerLinkUri: this.props.externalUri
                    }) : s.createElement(L, {
                        externalUri: this.props.externalUri
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    return this.props.offerType === b.EXTERNAL_OFFER ? null : s.createElement(T, {
                        description: this.props.offerDescription
                    })
                }, t = a.__decorate([Object(u.a)(P), Object(m.c)("PrimeInstructions")], t)
            }(s.Component),
            B = V,
            M = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p._17, {
                        background: p.m.Alt2,
                        display: p.H.Flex,
                        justifyContent: p.T.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: p._22.Center
                    }, s.createElement(p._21, {
                        type: p._26.H4,
                        align: p._37.Middle
                    }, s.createElement(p._17, {
                        padding: 1,
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center,
                        fontSize: this.props.fontSize ? this.props.fontSize : p.L.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, s.createElement(p.U, {
                        margin: {
                            right: 1
                        },
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center
                    }, s.createElement(p._8, {
                        asset: p._9.DeadGlitch,
                        type: p._10.Alert,
                        width: 20,
                        height: 20
                    })), Object(l.d)("Something has gone wrong. Please try again later.", "PrimeError"))))
                }, t = a.__decorate([Object(m.c)("PrimeError")], t)
            }(s.Component),
            H = M,
            q = (n(429), function(e) {
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
                    var e = this.state.copied ? Object(l.d)("copied", "CopyButton") : Object(l.d)("copy", "CopyButton");
                    return s.createElement(p.U, {
                        className: "copy-button copy-btn",
                        display: p.H.Flex
                    }, s.createElement(p.P, {
                        className: "copy-button__btn"
                    }, s.createElement(p.u, {
                        onClick: this.copy,
                        type: this.state.copied ? p.z.Success : p.z.Default
                    }, e)), s.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t = a.__decorate([Object(m.c)("CopyButton")], t)
            }(s.Component)),
            z = q,
            W = function(e) {
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
                    return this.state && this.state.value ? s.createElement(p.U, {
                        className: "copyable-item",
                        display: p.H.Flex,
                        flexGrow: 1
                    }, s.createElement(p.U, {
                        flexGrow: 1
                    }, s.createElement(p.Q, {
                        type: p.R.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), s.createElement(p.U, null, s.createElement(z, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = a.__decorate([Object(m.c)("CopyableItem")], t)
            }(s.Component),
            G = W,
            $ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p._17, {
                        className: "prime-claim-instructions",
                        background: p.m.Alt2,
                        border: !0,
                        padding: 1,
                        fontSize: p.L.Size6
                    }, s.createElement(p._36, null, s.createElement(y, {
                        source: this.props.claimInstructions || "",
                        escapeHtml: !0
                    })))
                }, t = a.__decorate([Object(m.c)("PrimeClaimInstructions")], t)
            }(s.Component),
            K = $,
            Q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p.U, {
                        className: "prime-redeem",
                        margin: {
                            top: 1
                        }
                    }, this.getCodeOrConfirmation(), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function() {
                    return this.props.code && this.props.deliveryMethod === b.CLAIM_CODE ? s.createElement(p.U, null, s.createElement(G, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    })) : s.createElement(p._17, {
                        background: p.m.Alt2,
                        display: p.H.Flex,
                        justifyContent: p.T.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(p._21, {
                        type: p._26.H4,
                        align: p._37.Middle
                    }, s.createElement(p.U, {
                        padding: 1,
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center,
                        "data-a-target": "prime-redeem-check"
                    }, s.createElement(p.U, {
                        margin: {
                            right: 1
                        },
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center
                    }, s.createElement(p._8, {
                        asset: p._9.Check,
                        type: p._10.Success,
                        width: 20,
                        height: 20
                    })), Object(l.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t.prototype.getPrimeClaimInstructions = function() {
                    if (this.props.claimInstructions) return s.createElement(K, {
                        claimInstructions: this.props.claimInstructions || ""
                    })
                }, t = a.__decorate([Object(m.c)("PrimeRedeem")], t)
            }(s.Component),
            Y = Q,
            J = n(430),
            Z = (n(431), n(432)),
            X = function(e) {
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
                            r = t.props.data || {},
                            a = r.currentUser || {};
                        if (t.state.error) return s.createElement(H, {
                            fontSize: p.L.Size6
                        });
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && a && a.hasPrime) {
                            var o = t.state.claimData || i.claimData;
                            return s.createElement(Y, {
                                claimInstructions: e.claimInstructions,
                                code: o,
                                deliveryMethod: e.deliveryMethod
                            })
                        }
                        return s.createElement(B, {
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
                                r = t.props.offer,
                                a = Object(_.a)({
                                    offerID: r.id
                                });
                            t.props.claimPrimeOffer(a).then(function(e) {
                                var n = e.data || {},
                                    a = n.claimPrimeOffer || {},
                                    o = a.self || {};
                                o && r && t.setState({
                                    claimData: o.claimData
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
                            i = S(n.id, e),
                            r = N();
                        r.push(i), E(r), t.setState({
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
                            r = n.categories || [];
                        return s.createElement(p._17, {
                            className: "prime-offer",
                            alignItems: p.c.Center,
                            borderBottom: !t,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, s.createElement(p.U, {
                            className: "prime-offer__title",
                            padding: {
                                y: .5
                            }
                        }, s.createElement(y, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), s.createElement("img", {
                            src: e.imageURL
                        }), s.createElement(p.U, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, s.createElement(p._21, {
                            type: p._26.P
                        }, i.name, " ", r[0])), s.createElement(p.U, {
                            className: "prime-offer__publisher"
                        }, s.createElement(p._21, {
                            type: p._26.P,
                            color: p.F.Alt2,
                            fontSize: p.L.Size7
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
                            i = S(t.id, n);
                        return N().includes(i)
                    }
                }, t = a.__decorate([Object(u.a)(Z, {
                    name: "data"
                }), Object(u.a)(J, {
                    name: "claimPrimeOffer"
                }), Object(m.c)("PrimeOffer")], t)
            }(s.Component),
            ee = X,
            te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p._17, {
                        className: "prime-offer-placeholder",
                        alignItems: p.c.Center,
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, s.createElement(p.U, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, s.createElement(p._1, {
                        height: 20
                    })), s.createElement(p._1, {
                        height: 160
                    }), s.createElement(p.U, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, s.createElement(p._1, {
                        height: 20,
                        width: 160
                    })), s.createElement(p.U, {
                        className: "prime-offer-placeholder__publisher"
                    }, s.createElement(p._1, {
                        height: 20,
                        width: 80
                    })), s.createElement(p.U, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, s.createElement(p._1, {
                        height: 40
                    })))
                }, t = a.__decorate([Object(m.c)("PrimeOfferPlaceholder")], t)
            }(s.Component),
            ne = te,
            ie = (n(433), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p._17, {
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: p.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, s.createElement(p._21, {
                        type: p._26.H4
                    }, Object(l.d)("Claim With Twitch Prime", "PrimeUpsell")), s.createElement(p.U, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: p._22.Center
                    }, s.createElement(p._8, {
                        asset: p._9.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: p._10.Brand
                    })), s.createElement(p._21, {
                        type: p._26.P
                    }, Object(l.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), s.createElement(L, null))
                }, t = a.__decorate([Object(m.c)("PrimeUpsell")], t)
            }(s.Component)),
            re = ie,
            ae = n(434),
            oe = (n(435), n(436)),
            se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shouldShowPlaceholders = function() {
                        var e = t.props.offersData,
                            n = e.primeOffers,
                            i = void 0 === n || null === n;
                        return e.loading || !e.error && i && t.props.showByDefault
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], t = 0; t < 3; ++t) e.push(s.createElement(ne, {
                            key: t
                        }));
                        return e
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props.offersData;
                    e && e.primeOffers && this.props.latencyTracking.reportInteractive(e.primeOffers.length)
                }, t.prototype.render = function() {
                    return s.createElement(h.b, {
                        className: "prime-offer-listing"
                    }, s.createElement(p.U, {
                        className: "prime-offer-listing__content",
                        alignItems: p.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            left: 1,
                            right: 1
                        }
                    }, this.renderUpsell(), this.renderOfferExperience()))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!e.loading && !e.error && !this.currentUserHasPrime(e)) return s.createElement(re, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!e.error && e.primeOffers && e.primeOffers.length) {
                        var t = this.getSortedOffers(),
                            n = t[t.length - 1];
                        return t.map(function(e) {
                            return s.createElement(ee, {
                                key: e.id,
                                offer: e,
                                isLast: n.id === e.id
                            })
                        })
                    }
                    return s.createElement(k, null)
                }, t.prototype.getSortedOffers = function() {
                    var e = this.props.offersData.primeOffers,
                        t = this.getUserId();
                    if (t) {
                        var n = N(),
                            i = e.filter(function(e) {
                                return !n.includes(S(e.id, t))
                            }).sort(O),
                            r = e.filter(function(e) {
                                return !i.includes(e)
                            }).sort(O);
                        return i.concat(r)
                    }
                    return e.slice().sort(O)
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t.prototype.currentUserHasPrime = function(e) {
                    var t = e.currentUser;
                    return t && t.hasPrime
                }, t = a.__decorate([Object(u.a)(ae, {
                    name: "offersData"
                }), Object(u.a)(oe, {
                    name: "userData"
                }), Object(m.c)("PrimeOfferList")], t)
            }(s.Component),
            le = se,
            ce = n(437),
            ue = (n(438), n(439)),
            de = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            n = o.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var i = n.primeOffers || [],
                                r = w();
                            t.setState({
                                numOfUnseenOffers: i.filter(function(e) {
                                    return !(r.includes(e.id) || t.offerIsClaimed(e))
                                }).length
                            })
                        }
                    }, t.offerIsClaimed = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var n = e.primeOffers || [],
                                i = n.map(function(e) {
                                    return "" + e.id
                                });
                            C(i)
                        }
                    }, t.renderOfferList = function() {
                        var e = t.props.offersData,
                            n = t.showOffersByDefault() || !1;
                        return e && !e.loading && !e.error || n ? s.createElement(p.U, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, s.createElement(g, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), s.createElement(le, {
                            showByDefault: n
                        })) : null
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getUnseenOffers(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getUnseenOffers(e)
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(d.b)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: p._31.Center,
                        direction: p._32.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(l.d)("New Prime Loot", "PrimeOffers") : n.label = Object(l.d)("Prime Loot", "PrimeOffers"), s.createElement(p.U, {
                        className: "prime-offers",
                        position: p._2.Relative
                    }, s.createElement(c.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, s.createElement(p.v, {
                        ariaLabel: Object(l.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: p.x.Large,
                        icon: p._9.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    }), s.createElement(p.p, {
                        direction: p.q.BottomRight,
                        size: p.r.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e) return s.createElement(p.U, {
                        className: "prime-offers__pill",
                        position: p._2.Absolute
                    }, s.createElement(p.e, {
                        type: p.i.BounceIn,
                        duration: p.g.Medium,
                        timing: p.h.EaseIn,
                        enabled: e > 0
                    }, s.createElement(p.Z, {
                        label: e.toString(),
                        type: p._0.Notification
                    })))
                }, t = a.__decorate([Object(u.a)(ce, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(u.a)(ue, {
                    name: "userData"
                }), Object(m.c)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component),
            me = de,
            pe = Object(r.a)(i)(me),
            fe = (n(440), n(441)),
            ge = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.requestInfo && Object(d.b)(this.props.data.requestInfo.countryCode);
                    if (this.props.data.currentUser && this.props.data.currentUser.hasPrime || !e) return null;
                    if (this.props.data.loading) return null;
                    var t = Object(A.d)(A.a, ""),
                        n = Object(l.d)("Twitch Prime", "BlueBar"),
                        i = s.createElement("span", null, Object(l.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        r = Object(A.d)(A.a, ""),
                        a = Object(l.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var o = this.props.data;
                        o && o.primePromotions && o.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    t = e.externalURL, n = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    i = s.createElement(y, {
                                        source: e.text,
                                        renderers: {
                                            Link: function(e) {
                                                return s.createElement("a", {
                                                    href: e.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                }, e.children)
                                            }
                                        }
                                    });
                                    break;
                                case "twitch.prime.bluebar.right1":
                                    r = e.externalURL, a = e.text
                            }
                        })
                    }
                    return s.createElement(p._17, {
                        color: p.F.Base,
                        className: "blue-bar",
                        position: p._2.Relative,
                        fullWidth: !0
                    }, s.createElement(p.U, {
                        className: "blue-bar__bar",
                        display: p.H.Flex,
                        alignItems: p.c.Center,
                        justifyContent: p.T.Between,
                        flexWrap: p.K.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, s.createElement(p.U, {
                        display: p.H.InlineFlex,
                        alignItems: p.c.Center,
                        padding: {
                            right: .5
                        }
                    }, s.createElement(p.U, {
                        className: "blue-bar__logo",
                        display: p.H.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, s.createElement(p._8, {
                        asset: p._9.Crown,
                        width: 20,
                        height: 13
                    })), s.createElement(p._21, {
                        bold: !0,
                        type: p._26.Span,
                        noWrap: !0,
                        fontSize: p.L.Size6
                    }, s.createElement(p.P, {
                        padding: {
                            x: 1
                        }
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: t,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, n))), s.createElement(p._21, {
                        className: "blue-bar__headline",
                        type: p._26.Span,
                        fontSize: p.L.Size6
                    }, i)), s.createElement(p.U, {
                        display: p.H.InlineFlex,
                        flexShrink: 0
                    }, s.createElement(p._21, {
                        bold: !0,
                        type: p._26.Span,
                        noWrap: !0,
                        fontSize: p.L.Size6,
                        color: p.F.Base
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: r,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, a)))))
                }, t = a.__decorate([Object(u.a)(fe, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: U()
                            }
                        }
                    }
                }), Object(m.c)("BlueBarComponent")], t)
            }(s.Component),
            he = ge;
        n.d(t, "b", function() {
            return pe
        }), n.d(t, "a", function() {
            return he
        }), n.d(t, "c", function() {
            return U
        })
    },
    392: function(e, t, n) {
        "use strict";

        function i(e) {
            return function() {
                Object(l.c)(e), window.location.reload(!0)
            }
        }

        function r() {
            return {}
        }

        function a(e) {
            return Object(s.bindActionCreators)({
                changeLanguage: i
            }, e)
        }
        var o = n(6),
            s = n(9),
            l = n(73),
            c = n(0),
            u = n(1),
            d = n(2),
            m = n(3),
            p = (n(400), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        var n = function() {
                            return t.props.changeLanguage(e.languageCode)
                        };
                        return u.createElement(m.S, {
                            key: e.languageCode,
                            onClick: n,
                            "data-target": "language-selector-link"
                        }, u.createElement(m.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, e.name))
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Math.floor(d.a.locales.length / 2);
                    return u.createElement(m.U, {
                        className: "language-selector",
                        display: m.H.Flex,
                        padding: {
                            y: 1
                        }
                    }, u.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right"
                    }, d.a.locales.slice(0, e).map(this.renderLink)), u.createElement("div", {
                        className: "language-selector__list"
                    }, d.a.locales.slice(e).map(this.renderLink)))
                }, t
            }(u.Component)),
            f = Object(o.a)(r, a)(p);
        n.d(t, "a", function() {
            return f
        })
    },
    393: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = {},
                i = o(e);
            if (!i) return n;
            var s;
            try {
                s = new URL(i)
            } catch (t) {
                return b.i.error(t.toString(), i + " was malformed from notification id:[" + e.id + "]"), n
            }
            return a(e.type, s) ? n.linkTo = {
                pathname: s.pathname,
                search: s.search,
                state: {
                    content: e.type,
                    medium: t
                }
            } : (n.linkTo = r(s.toString(), e.type, t), n.targetBlank = !0), n
        }

        function r(e, t, n) {
            var i = e.split("?");
            if (1 === i.length) return e + "?tt_content=" + t + "&tt_medium=" + n;
            var r = y.parse(i[1]);
            return r.tt_content = r.tt_content ? r.tt_content : t, r.tt_medium = r.tt_medium ? r.tt_medium : n, [i[0], y.stringify(r, {
                encode: !1
            })].join("?")
        }

        function a(e, t) {
            return !L.has(e) && "https://www.twitch.tv" === t.origin
        }

        function o(e) {
            var t = e.actions.filter(function(e) {
                return "click" === e.type
            });
            return t.length > 0 ? t[0].url : ""
        }

        function s(e, t) {
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

        function l(e) {
            return {
                currentUser: Object(ae.c)(e)
            }
        }

        function c(e, t) {
            for (var n = [], i = 0; i < e.length; i += t) {
                var r = e.slice(i, i + t);
                n.push(r)
            }
            return n
        }

        function u(e) {
            return e.type === C.c.OnsiteNotificationsRead
        }

        function d(e) {
            return e.type === C.c.OnsiteNotificationCreate || e.type === C.c.OnsiteNotificationUpdate
        }

        function m(e) {
            return e.type === C.c.OnsiteNotificationDelete
        }

        function p(e, t) {
            return pe.debug("Received pubsub summary update", e), t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.summary && e.data.summary ? (t.currentUser.notifications.summary.lastSeenAt = e.data.summary.last_seen_at, t.currentUser.notifications.summary.unseenCount = e.data.summary.unseen_view_count, t) : t
        }

        function f(e, t) {
            if (pe.debug("Received pubsub notification update", e), !(t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.edges && t.currentUser.notifications.edges)) return t;
            if (u(e)) {
                var n = new Set(e.data.notification_ids),
                    i = t.currentUser.notifications.edges.map(function(e) {
                        return n.has(e.node.id) ? k.__assign({}, e, {
                            node: k.__assign({}, e.node, {
                                isRead: !0
                            })
                        }) : e
                    });
                t.currentUser.notifications.edges = i
            } else if (d(e)) {
                if (e.data.persistent) {
                    var r = s(e.data.notification, !0),
                        i = g(t.currentUser.notifications.edges, r.id);
                    i.unshift({
                        cursor: null,
                        node: r,
                        __typename: "OnsiteNotificationEdge"
                    }), t.currentUser.notifications.edges = i
                }
            } else m(e) && (t.currentUser.notifications.edges = g(t.currentUser.notifications.edges, e.data.notification_id));
            return t
        }

        function g(e, t) {
            return e.filter(function(e) {
                return e.node.id !== t
            })
        }

        function h() {
            return function(e) {
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
                    return k.__extends(n, t), n.prototype.render = function() {
                        var t = {
                            shouldDefer: this.state.shouldDefer,
                            stopDeferring: this.stopDeferring
                        };
                        return _.createElement(e, k.__assign({}, this.props, t))
                    }, n
                }(_.Component)
            }
        }
        var v, k = n(0),
            y = n(21),
            _ = n(1),
            b = n(2),
            S = n(47),
            N = n(7),
            E = n(110),
            w = n(14),
            C = n(38),
            O = n(20),
            x = n(30),
            U = n(5),
            F = n(28),
            D = n(32),
            R = n(402),
            I = n.n(R),
            T = n(15),
            A = n(65),
            j = n(12),
            L = new Set(["affiliateinvite", "feedcomment", "friendrequests", "partneragreementupdate", "partnerinvite"]),
            P = {
                Center: "center",
                Toast: "toast",
                Browser: "browser"
            },
            V = {
                Open: "open",
                Close: "close",
                MarkAllRead: "mark_all_read"
            },
            B = {
                PrimaryCta: "primary_cta",
                Dismiss: "dismiss"
            },
            M = function(e) {
                var t = {
                    notification_id: e.notification.id,
                    notification_type: e.notification.type,
                    ui_context: e.uiContext
                };
                b.m.track(j.SpadeEventType.NotificationImpression, t)
            },
            H = function(e) {
                var t = {
                    unseen_view_count: e.unseenCount,
                    action: e.action
                };
                b.m.track(j.SpadeEventType.NotificationCenterInteraction, t)
            },
            q = function(e) {
                var t = {
                    notification_id: e.notification.id,
                    notification_type: e.notification.type,
                    ui_context: e.uiContext,
                    action: e.action
                };
                b.m.track(j.SpadeEventType.NotificationInteraction, t)
            },
            z = n(3),
            W = (n(403), "persistent-notification__delete"),
            G = function(e) {
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
                        q({
                            uiContext: P.Center,
                            notification: t.props.data,
                            action: B.Dismiss
                        }), t.props.onDeleteNotification(t.props.data.id)
                    }, t.clickNotification = function() {
                        q({
                            uiContext: P.Center,
                            notification: t.props.data,
                            action: B.PrimaryCta
                        }), t.props.onViewNotification(t.props.data.id)
                    }, t.renderDeleteNotification = function() {
                        return _.createElement(z.U, {
                            className: "persistent-notification__delete",
                            padding: {
                                top: 1,
                                left: 1,
                                right: .5
                            },
                            position: z._2.Absolute
                        }, _.createElement(z.U, {
                            display: z.H.Flex,
                            flexWrap: z.K.NoWrap,
                            alignItems: z.c.Start
                        }, _.createElement(z.v, {
                            ariaLabel: "delete-notification",
                            "data-test-selector": W,
                            icon: z._9.Close,
                            size: z.x.Small,
                            onClick: t.deleteNotification
                        })))
                    }, t
                }
                return k.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive();
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : b.i.warn("<PersistentNotification /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return _.createElement(z.U, {
                        className: "persistent-notification",
                        position: z._2.Relative,
                        refDelegate: this.setRef,
                        "data-test-selector": "persistent-notification"
                    }, _.createElement(z._17, {
                        display: z.H.Flex,
                        className: this.props.data.isRead ? "persistent-notification__read" : "persistent-notification__unread",
                        borderBottom: !0,
                        flexWrap: z.K.NoWrap
                    }, _.createElement(z.S, k.__assign({
                        "data-test-selector": "persistent-notification__click",
                        onClick: this.clickNotification
                    }, i(this.props.data, j.PageviewMedium.NotificationCenter), {
                        alpha: !0
                    }), _.createElement(z.U, {
                        className: "persistent-notification__area",
                        display: z.H.Flex,
                        flexWrap: z.K.NoWrap,
                        padding: {
                            top: 1,
                            bottom: 1,
                            left: 1,
                            right: 3
                        }
                    }, _.createElement(z.C, {
                        aspect: z.k.Aspect1x1,
                        imageSrc: this.props.data.thumbnailURL,
                        imageAlt: Object(b.d)("Notification center item thumbnail", "OnsiteNotifications"),
                        size: z.D.Size4
                    }), _.createElement(z.U, {
                        display: z.H.Flex,
                        flexDirection: z.J.Column,
                        flexWrap: z.K.NoWrap,
                        margin: {
                            x: 1
                        }
                    }, _.createElement(z.U, {
                        className: "persistent-notification__body",
                        overflow: z.Y.Hidden,
                        "data-test-selector": "persistent-notification__body"
                    }, _.createElement(z._21, {
                        type: z._26.Span,
                        color: z.F.Alt
                    }, _.createElement(A, {
                        source: this.props.data.body || ""
                    }))), _.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        flexShrink: 0,
                        margin: {
                            top: .5
                        }
                    }, _.createElement(z._8, {
                        asset: z._9.MessagesSC,
                        height: 12,
                        width: 12,
                        type: z._10.Alt2
                    }), _.createElement(z.U, {
                        margin: {
                            left: .5
                        }
                    }, _.createElement(z._21, {
                        type: z._26.Span,
                        color: z.F.Alt2
                    }, Object(b.g)(new Date(this.props.data.updatedAt)))))))), this.renderDeleteNotification()))
                }, t.prototype.checkVisible = function(e) {
                    return k.__awaiter(this, void 0, void 0, function() {
                        return k.__generator(this, function(t) {
                            return !this.impressionEventFired && this.isVisible(e) && (M({
                                uiContext: P.Center,
                                notification: this.props.data
                            }), this.impressionEventFired = !0), [2]
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: T.func
                }, t = k.__decorate([Object(U.c)("PersistentNotification")], t)
            }(_.Component),
            $ = G,
            K = n(404),
            Q = n(405),
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isRead: !1
                    }, t.createNotificationData = function() {
                        return {
                            id: "friendrequests",
                            type: "friendrequests",
                            body: Object(b.d)("{count, plural, one {You have # new friend request} other {You have # new friend requests}}", {
                                count: t.props.count
                            }, "FriendRequestsNotification"),
                            createdAt: t.props.date,
                            updatedAt: t.props.date,
                            isRead: t.props.isOldNotification || t.state.isRead,
                            thumbnailURL: I.a,
                            actions: [{
                                body: "View",
                                type: "click",
                                url: "https://www.twitch.tv/friends/requests"
                            }]
                        }
                    }, t.clearUnseenCount = function() {
                        Object(O.d)(Q, {}, function(e) {
                            return e.currentUser.incomingFriendRequests.totalUnreadCount = 0, e
                        }), t.props.clearUnreadFriendRequests().then(function() {}).catch(function(e) {
                            return b.i.error(e, "[FriendRequestsNotification] Failed to clear unread requests.")
                        })
                    }, t.viewFriendRequests = function() {
                        t.setState({
                            isRead: !0
                        })
                    }, t
                }
                return k.__extends(t, e), t.prototype.render = function() {
                    return _.createElement($, {
                        key: "friendRequestsNotification",
                        data: this.createNotificationData(),
                        onDeleteNotification: this.clearUnseenCount,
                        onViewNotification: this.viewFriendRequests
                    })
                }, t
            }(_.Component),
            J = Object(D.compose)(Object(N.a)(K, {
                name: "clearUnreadFriendRequests"
            }))(Y),
            Z = (n(406), "center-window__empty"),
            X = "center-window__content-footer",
            ee = "center-window__footer__text",
            te = "center-window__read-all",
            ne = function(e) {
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
                        var e = !t.props.hasInitiallyLoaded || t.state.isLoadingMore ? _.createElement(z.X, {
                            delay: 0,
                            fillContent: !0
                        }) : _.createElement(z._8, {
                            asset: z._9.LogoGlitch,
                            width: 24,
                            height: 24,
                            type: z._10.Alt2
                        });
                        return _.createElement(z.U, {
                            className: "center-window__content-footer",
                            key: "center-window__content-footer",
                            "data-test-selector": X,
                            display: z.H.Flex,
                            flexDirection: z.J.Column,
                            justifyContent: z.T.Center,
                            alignItems: z.c.Center,
                            textAlign: z._22.Center,
                            padding: 1,
                            flexGrow: 1
                        }, e)
                    }, t.mapPersistentNotificationElements = function() {
                        var e = t.props.data.map(function(e) {
                            return _.createElement($, {
                                key: "onsite-notification-" + e.node.id,
                                data: e.node,
                                onDeleteNotification: t.props.onDeleteNotification,
                                onViewNotification: t.props.onViewNotification
                            })
                        });
                        return t.props.friendRequestsData && e.unshift(_.createElement(J, k.__assign({}, t.props.friendRequestsData))), e
                    }, t.renderEmptyCenterWindowElement = function() {
                        return _.createElement(z._17, {
                            "data-test-selector": Z,
                            className: "center-window__empty-state",
                            background: z.m.Alt,
                            display: z.H.Flex,
                            justifyContent: z.T.Center,
                            alignItems: z.c.Center,
                            textAlign: z._22.Center,
                            flexDirection: z.J.Column,
                            padding: 2,
                            fullWidth: !0
                        }, _.createElement(z._8, {
                            asset: z._9.LogoGlitch,
                            width: 100,
                            height: 100,
                            type: z._10.Placeholder
                        }), _.createElement(z.U, {
                            margin: {
                                top: 1
                            }
                        }, _.createElement(z._21, {
                            type: z._26.H5,
                            color: z.F.Alt2
                        }, Object(b.d)("Hooray! You're in the clear!", "OnsiteNotifications"))))
                    }, t.renderMarkAsRead = function() {
                        return 0 !== t.props.data.length || t.props.friendRequestsData ? _.createElement(z.u, {
                            "data-test-selector": te,
                            type: z.z.Text,
                            size: z.x.Small,
                            disabled: 0 === t.props.data.length && !t.props.friendRequestsData,
                            onClick: t.props.onReadAllNotifications
                        }, Object(b.d)("Mark All as Read", "OnsiteNotifications")) : null
                    }, t.renderNotificationsHeaderElement = function() {
                        return _.createElement(z._17, {
                            className: "center-window__header",
                            background: z.m.Alt,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            display: z.H.Flex,
                            alignItems: z.c.Center,
                            justifyContent: z.T.Between,
                            borderBottom: !0
                        }, _.createElement(z._21, {
                            type: z._26.H6,
                            color: z.F.Alt2,
                            bold: !0
                        }, Object(b.d)("Notifications", "OnsiteNotifications")), t.renderMarkAsRead())
                    }, t.renderUnreadNotificationsFooterElement = function() {
                        var e = 0 === t.props.newNotificationsCount ? null : _.createElement(z._21, {
                            "data-test-selector": ee,
                            type: z._26.H6,
                            color: z.F.Alt2
                        }, Object(b.d)("{num, plural, one {1 New Notification} other {{num, number} New Notifications} }", {
                            num: t.props.newNotificationsCount
                        }, "OnsiteNotifications"));
                        return _.createElement(z._17, {
                            className: "center-window__footer",
                            background: z.m.Alt,
                            padding: .5,
                            alignItems: z.c.Center,
                            textAlign: z._22.Center,
                            borderTop: !0
                        }, e)
                    }, t.loadMore = function() {
                        return k.__awaiter(t, void 0, void 0, function() {
                            var e = this;
                            return k.__generator(this, function(t) {
                                return this.state.isLoadingMore ? [2] : (this.setState({
                                    isLoadingMore: !0
                                }), [2, this.props.onLoadMore().then(function() {
                                    return e.setState({
                                        isLoadingMore: !1
                                    })
                                })])
                            })
                        })
                    }, t
                }
                return k.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return _.createElement(z._17, {
                        className: "center-window",
                        "data-test-selector": "center-window",
                        background: z.m.Alt
                    }, this.renderNotificationsHeaderElement(), _.createElement(F.b, {
                        className: "center-window__scroll",
                        contentClassName: "center-window__scroll-container"
                    }, _.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        flexDirection: z.J.Column,
                        flexGrow: 1,
                        flexWrap: z.K.NoWrap
                    }, this.renderContent(), _.createElement(F.a, {
                        enabled: this.props.data.length > 0 && !!this.props.data[this.props.data.length - 1].cursor,
                        contentLength: this.props.data.length,
                        loadMore: this.loadMore,
                        pixelThreshold: 200
                    }))), this.renderUnreadNotificationsFooterElement())
                }, t = k.__decorate([Object(U.c)("OnsiteNotificationsCenterWindow")], t)
            }(_.Component),
            ie = ne,
            re = n(6),
            ae = n(17),
            oe = n(90),
            se = (n(407), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.closeTimeout = 0, t.close = function() {
                        q({
                            uiContext: P.Toast,
                            notification: t.props.item,
                            action: B.Dismiss
                        }), t.props.close(t.props.index)
                    }, t.onMouseEnter = function() {
                        t.cancelCloseTimer()
                    }, t.onMouseLeave = function() {
                        t.scheduleCloseTimer()
                    }, t.view = function() {
                        q({
                            uiContext: P.Toast,
                            notification: t.props.item,
                            action: B.PrimaryCta
                        }), t.props.view(t.props.index)
                    }, t
                }
                return k.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.scheduleCloseTimer()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), M({
                        uiContext: P.Toast,
                        notification: this.props.item
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.cancelCloseTimer()
                }, t.prototype.render = function() {
                    return _.createElement(z.e, {
                        type: z.i.BounceIn,
                        duration: z.g.Medium,
                        enabled: !0
                    }, _.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        "data-test-selector": "onsite-notification-toast__mouse-enter-detector"
                    }, _.createElement(z._17, {
                        className: "onsite-notification-toast",
                        background: z.m.Base,
                        display: z.H.Flex,
                        flexWrap: z.K.NoWrap,
                        margin: {
                            bottom: 1
                        },
                        border: !0
                    }, _.createElement(z.S, k.__assign({
                        onClick: this.view,
                        alpha: !0
                    }, i(this.props.item, j.PageviewMedium.NotificationToast)), _.createElement(z.U, {
                        className: "onsite-notification-toast__container",
                        display: z.H.Flex,
                        flexWrap: z.K.NoWrap
                    }, _.createElement(z.U, {
                        padding: {
                            y: 1,
                            left: 1
                        },
                        display: z.H.Flex,
                        flexShrink: 0
                    }, _.createElement(z.C, {
                        aspect: z.k.Aspect1x1,
                        imageSrc: this.props.item.thumbnailURL,
                        imageAlt: Object(b.d)("Notification toast thumbnail", "OnsiteNotifications"),
                        size: z.D.Size4
                    })), _.createElement(z.U, {
                        display: z.H.Flex,
                        flexDirection: z.J.Column,
                        flexWrap: z.K.NoWrap,
                        flexGrow: 1,
                        padding: 1
                    }, _.createElement(z.U, {
                        className: "onsite-notification-toast__body",
                        overflow: z.Y.Hidden
                    }, _.createElement(z._17, {
                        color: z.F.Alt
                    }, _.createElement(A, {
                        source: this.props.item.body
                    }))), _.createElement(z.U, {
                        margin: {
                            top: .5
                        },
                        flexShrink: 0
                    }, _.createElement(z._17, {
                        color: z.F.Alt2
                    }, Object(b.g)(new Date(this.props.item.updatedAt))))))), this.renderActions())))
                }, t.prototype.renderActions = function() {
                    return _.createElement(z._17, {
                        className: "onsite-notification-toast__action-wrapper",
                        display: z.H.Flex,
                        alignContent: z.b.Stretch,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexDirection: z.J.Column,
                        borderLeft: !0
                    }, _.createElement(z._17, {
                        className: "onsite-notification-toast__action",
                        display: z.H.Flex,
                        alignContent: z.b.Stretch,
                        flexGrow: 1,
                        borderBottom: !0
                    }, _.createElement(z.S, k.__assign({
                        onClick: this.view,
                        "data-test-selector": "onsite-notification-toast__view",
                        alpha: !0
                    }, i(this.props.item, j.PageviewMedium.NotificationToast)), _.createElement(z._17, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        justifyContent: z.T.Center,
                        fullHeight: !0,
                        flexGrow: 1,
                        padding: .5
                    }, _.createElement(z._21, {
                        color: z.F.Link
                    }, this.primaryCTAText())))), _.createElement(z._17, {
                        className: "onsite-notification-toast__action",
                        display: z.H.Flex,
                        alignContent: z.b.Stretch,
                        flexGrow: 1
                    }, _.createElement(z.S, {
                        onClick: this.close,
                        "data-test-selector": "onsite-notification-toast__close",
                        alpha: !0
                    }, _.createElement(z._17, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        justifyContent: z.T.Center,
                        fullHeight: !0,
                        flexGrow: 1,
                        padding: .5
                    }, _.createElement(z._21, {
                        color: z.F.Alt2
                    }, Object(b.d)("Close", "OnsiteNotifications"))))))
                }, t.prototype.primaryCTAText = function() {
                    var e = this.props.item.actions.find(function(e) {
                        return "click" === e.type
                    });
                    return e ? e.body : Object(b.d)("View", "OnsiteNotifications")
                }, t.prototype.scheduleCloseTimer = function() {
                    var e = this;
                    this.cancelCloseTimer(), this.closeTimeout = setTimeout(function() {
                        e.props.close(e.props.index), e.closeTimeout = 0
                    }, 1e4)
                }, t.prototype.cancelCloseTimer = function() {
                    this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = 0)
                }, t
            }(_.Component)),
            le = Object(U.c)("OnsiteNotificationToast")(se),
            ce = le,
            ue = (n(408), b.i.withCategory("toast-manager")),
            de = function(e) {
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
                return k.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.conditionallyInsertTestData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.pubsub.messages.info,
                        n = e.pubsub.messages.info;
                    if (n && n.data.toast && (!t || n.data.notification.id !== t.data.notification.id || n.data.notification.updated_at !== t.data.notification.updated_at)) {
                        ue.debug("Received pubsub update", e.pubsub.messages.info);
                        var i = s(n.data.notification, n.data.persistent);
                        this.onNewNotification(i)
                    }
                }, t.prototype.render = function() {
                    return _.createElement(z.U, {
                        className: "onsite-notifications-toast-manager",
                        position: z._2.Absolute,
                        margin: {
                            top: 5
                        },
                        "data-test-selector": "onsite-notifications-toast-manager"
                    }, this.renderToasts())
                }, t.prototype.conditionallyInsertTestData = function() {
                    return k.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return k.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return b.a.buildType !== w.a.Production && y.parse(window.location.search).onsite_test_data ? [4, n.e(35).then(n.bind(null, 2050))] : [3, 2];
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
                            return _.createElement(ce, {
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
                }, t = k.__decorate([Object(U.c)("OnsiteNotificationToastManager"), Object(oe.a)([{
                    topic: function(e) {
                        return Object(x.e)("" + (e.currentUser && e.currentUser.id))
                    },
                    mapMessageTypesToProps: (v = {}, v[C.c.OnsiteNotificationCreate] = "info", v[C.c.OnsiteNotificationUpdate] = "info", v),
                    skip: function(e) {
                        return !e.currentUser
                    }
                }])], t)
            }(_.Component),
            me = Object(re.a)(l)(de),
            pe = b.i.withCategory("onsite-pubsub-mutators"),
            fe = n(394),
            ge = n(395),
            he = n(396),
            ve = n(397),
            ke = n(398);
        n(409);
        n.d(t, "a", function() {
            return Ne
        }), n.d(t, "b", function() {
            return xe
        });
        var ye = b.i.withCategory("onsite-notifications"),
            _e = "onsite-notifications__badge",
            be = "99+",
            Se = 5e3,
            Ne = 10,
            Ee = 100,
            we = {
                align: z._31.Center,
                direction: z._32.Bottom,
                label: ""
            },
            Ce = {
                limit: Ne,
                cursor: ""
            },
            Oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        newNotificationsCount: 0,
                        newFriendRequestsBadgeCount: 0,
                        isFriendRequestsNotificationUnread: !1
                    }, t.newNotificationsCountTimer = 0, t.hasInsertedSummaryData = !1, t.hasInsertedListNotificationsData = !1, t.viewNotification = function(e, n) {
                        void 0 === n && (n = !0), t.centerWindowToggleBalloon.toggleBalloon(!1), n && t.readNotification(e)
                    }, t.conditionallyInsertSummaryTestData = function() {
                        t.summaryDataLoaded(t.props) && !t.hasInsertedSummaryData && b.a.buildType !== w.a.Production && y.parse(window.location.search).onsite_test_data && (t.hasInsertedSummaryData = !0, Object(O.d)(ve, k.__assign({}, t.props.summaryData.variables), function(e) {
                            return e.currentUser.notifications.summary.unseenCount = y.parse(window.location.search).onsite_test_data, e
                        }))
                    }, t.conditionallyInsertListNotificationsTestData = function() {
                        return k.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return k.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.listDataLoaded() && !this.hasInsertedListNotificationsData && b.a.buildType !== w.a.Production && y.parse(window.location.search).onsite_test_data ? (this.hasInsertedListNotificationsData = !0, [4, n.e(35).then(n.bind(null, 2050))]) : [3, 2];
                                    case 1:
                                        e = t.sent().MockOnsiteNotifications, Object(O.d)(ge, k.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = e.getMockOnsiteNotificationEdges(y.parse(window.location.search).onsite_test_data), t
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
                        e || (t.props.stopDeferring(), t.getUnseenNotificationsAndApplyTimer(), t.viewNotifications()), H({
                            unseenCount: t.getUnseenNotificationsCount(t.props),
                            action: e ? V.Close : V.Open
                        })
                    }, t.getUnseenNotificationsAndApplyTimer = function() {
                        var e = t.state.newNotificationsCount;
                        t.summaryDataLoaded(t.props) && (e = t.getUnseenNotificationsCount(t.props), t.setState({
                            newNotificationsCount: e
                        })), t.clearTimeout(), e > 0 && (t.newNotificationsCountTimer = setTimeout(function() {
                            t.setState({
                                newNotificationsCount: 0
                            }), t.clearTimeout()
                        }, Se))
                    }, t.viewNotifications = function() {
                        if (t.summaryDataLoaded(t.props)) {
                            t.setState({
                                newFriendRequestsBadgeCount: 0
                            });
                            var e = k.__assign({}, Object(O.a)({}), {
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
                            });
                            Object(O.d)(ve, k.__assign({}, t.props.summaryData.variables), function(e) {
                                return e.currentUser.notifications.summary.unseenCount = 0, e
                            }), t.props.viewNotifications(e).then(function() {}).catch(function(e) {
                                return ye.error(e, "failure to read message... ")
                            })
                        }
                    }, t.getUnseenNotificationsCount = function(e) {
                        return t.summaryDataLoaded(e) ? e.summaryData.currentUser.notifications.summary.unseenCount + t.state.newFriendRequestsBadgeCount : 0
                    }, t.renderUnseenNotificationsBadge = function() {
                        var e = t.getUnseenNotificationsCount(t.props);
                        if (e > 0) {
                            var n = e >= 100 ? be : e.toString();
                            return _.createElement(z.U, {
                                className: "onsite-notifications__badge",
                                "data-test-selector": _e,
                                position: z._2.Absolute
                            }, _.createElement(z.Z, {
                                label: n,
                                type: z._0.Notification
                            }))
                        }
                    }, t.deleteNotification = function(e) {
                        var n = k.__assign({}, Object(O.a)({
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
                        });
                        return Object(O.d)(ge, k.__assign({}, t.props.listData.variables), function(t) {
                            return t.currentUser.notifications.edges = t.currentUser.notifications.edges.filter(function(t) {
                                return t.node.id !== e
                            }), t
                        }), t.props.deleteOnsiteNotification(n).then(function() {}).catch(function(t) {
                            ye.error(t, "Unable to delete notification " + e)
                        })
                    }, t.readAllNotifications = function() {
                        if (t.setState({
                                isFriendRequestsNotificationUnread: !1
                            }), t.listDataLoaded()) {
                            H({
                                unseenCount: t.getUnseenNotificationsCount(t.props),
                                action: V.MarkAllRead
                            });
                            var e = t.props.listData.currentUser.notifications.edges.filter(function(e) {
                                return !e.node.isRead
                            }).map(function(e) {
                                return e.node.id
                            });
                            if (0 !== e.length) {
                                for (var n = c(e, Ee), i = 0, r = n; i < r.length; i++) {
                                    var a = r[i];
                                    t.markIDsAsRead(a)
                                }
                                Object(O.d)(ge, k.__assign({}, t.props.listData.variables), function(e) {
                                    return e.currentUser.notifications.edges = e.currentUser.notifications.edges.map(function(e) {
                                        return k.__assign({}, e, {
                                            node: k.__assign({}, e.node, {
                                                isRead: !0
                                            })
                                        })
                                    }), e
                                })
                            }
                        }
                    }, t.markIDsAsRead = function(e) {
                        return k.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return k.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = e.map(function(e) {
                                            return {
                                                id: e,
                                                isRead: !0,
                                                __typename: "OnsiteNotification"
                                            }
                                        }), n = k.__assign({}, Object(O.a)({
                                            ids: e
                                        }), {
                                            optimisticResponse: {
                                                readNotifications: {
                                                    __typename: "ReadNotificationsPayload",
                                                    notifications: t,
                                                    count: e.length
                                                }
                                            }
                                        }), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.readOnsiteNotification(n)];
                                    case 2:
                                        return r.sent(), [3, 4];
                                    case 3:
                                        return i = r.sent(), ye.error(i, "Unable to read notifications", {
                                            ids: e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.readNotification = function(e) {
                        return k.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return k.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = k.__assign({}, Object(O.a)({
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
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.readOnsiteNotification(t)];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return n = i.sent(), ye.error(n, "Unable to read notification", {
                                            id: e
                                        }), [3, 4];
                                    case 4:
                                        return this.listDataLoaded() && Object(O.d)(ge, k.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = t.currentUser.notifications.edges.map(function(t) {
                                                return t.node.id === e ? k.__assign({}, t, {
                                                    node: k.__assign({}, t.node, {
                                                        isRead: !0
                                                    })
                                                }) : t
                                            }), t
                                        }), [2]
                                }
                            })
                        })
                    }, t.loadMore = function() {
                        return k.__awaiter(t, void 0, void 0, function() {
                            return k.__generator(this, function(e) {
                                return this.props.listData.loading ? [2] : [2, this.props.loadMore()]
                            })
                        })
                    }, t.clearTimeout = function() {
                        t.newNotificationsCountTimer && (clearTimeout(t.newNotificationsCountTimer), t.newNotificationsCountTimer = 0)
                    }, t.saveCenterWindowToggleBalloonRef = function(e) {
                        return t.centerWindowToggleBalloon = e
                    }, t
                }
                return k.__extends(t, e), t.prototype.componentDidUpdate = function() {
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
                        }), b.n.setBadgeCount(this.getUnseenNotificationsCount(e))
                    }
                }, t.prototype.render = function() {
                    var e = this.props.shouldDefer || !this.listDataLoaded() ? [] : this.props.listData.currentUser.notifications.edges;
                    return we.label = Object(b.d)("Notifications", "OnsiteNotificationsToolTip"), _.createElement(z.U, {
                        className: "onsite-notifications"
                    }, _.createElement(me, {
                        onViewNotification: this.viewNotification
                    }), _.createElement(z.U, {
                        position: z._2.Relative
                    }, _.createElement(S.a, {
                        onToggle: this.toggleCenter,
                        ref: this.saveCenterWindowToggleBalloonRef,
                        tooltipProps: we
                    }, _.createElement(z.v, {
                        ariaLabel: Object(b.d)("Open Notifications", "OnsiteNotifications"),
                        size: z.x.Large,
                        icon: z._9.NotificationBell,
                        overlay: !0
                    }), _.createElement(z.p, {
                        "data-test-selector": "center-window__balloon",
                        direction: z.q.BottomRight,
                        size: z.r.Large,
                        offsetX: "10px"
                    }, _.createElement(ie, {
                        newNotificationsCount: this.state.newNotificationsCount,
                        hasInitiallyLoaded: this.listDataLoaded(),
                        data: e,
                        friendRequestsData: this.getFriendRequestsData(),
                        onLoadMore: this.loadMore,
                        onViewNotification: this.viewNotification,
                        onReadAllNotifications: this.readAllNotifications,
                        onDeleteNotification: this.deleteNotification
                    }))), this.renderUnseenNotificationsBadge()))
                }, t = k.__decorate([h(), Object(N.a)(ve, {
                    name: "summaryData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(N.a)(ke, {
                    name: "viewNotifications"
                }), Object(N.a)(ge, {
                    name: "listData",
                    options: function(e) {
                        return {
                            variables: k.__assign({}, Ce, {
                                language: e.languageCode
                            })
                        }
                    },
                    skip: function(e) {
                        return e.shouldDefer
                    },
                    props: function(e) {
                        return k.__assign({}, e, {
                            loadMore: function() {
                                return e.listData.fetchMore({
                                    query: ge,
                                    variables: k.__assign({}, e.listData.variables, {
                                        cursor: e.listData.currentUser ? e.listData.currentUser.notifications.edges[e.listData.currentUser.notifications.edges.length - 1].cursor : ""
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            i = n;
                                        return {
                                            currentUser: k.__assign({}, i.currentUser, {
                                                notifications: k.__assign({}, i.currentUser.notifications, {
                                                    edges: e.currentUser.notifications.edges.concat(i.currentUser.notifications.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(N.a)(fe, {
                    name: "deleteOnsiteNotification"
                }), Object(N.a)(he, {
                    name: "readOnsiteNotification"
                }), Object(E.a)(function(e) {
                    return {
                        query: ve,
                        skip: !e.currentUser,
                        topic: Object(x.e)("" + (e.currentUser && e.currentUser.id)),
                        types: [C.c.OnsiteNotificationSummaryUpdate, C.c.OnsiteNotificationUpdate, C.c.OnsiteNotificationCreate, C.c.OnsiteNotificationDelete],
                        mutator: p
                    }
                }), Object(E.a)(function(e) {
                    return {
                        query: ge,
                        variables: k.__assign({}, Ce, {
                            language: e.languageCode
                        }),
                        skip: !e.currentUser,
                        topic: Object(x.e)("" + (e.currentUser && e.currentUser.id)),
                        types: [C.c.OnsiteNotificationsRead, C.c.OnsiteNotificationUpdate, C.c.OnsiteNotificationCreate, C.c.OnsiteNotificationDelete],
                        mutator: f
                    }
                }), Object(U.c)("OnsiteNotifications", {
                    autoReportInteractive: !0
                })], t)
            }(_.Component),
            xe = Oe
    },
    394: function(e, t) {
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
                end: 162
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_DeleteNotification($input: DeleteNotificationInput!) {\n  deleteNotification(input: $input) {\n    notification {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    395: function(e, t) {
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
                end: 514
            }
        };
        n.loc.source = {
            body: "query OnsiteNotifications_ListNotifications($limit: Int, $cursor: Cursor, $language: String) {\n  currentUser {\n    id\n    notifications(first: $limit, after: $cursor, language: $language) {\n      pageInfo {\n        hasNextPage\n      }\n      edges {\n        cursor\n        node {\n          id\n          type\n          body\n          createdAt\n          updatedAt\n          isRead\n          thumbnailURL\n          actions {\n            body\n            type\n            url\n          }\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    396: function(e, t) {
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
                end: 167
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_ReadNotifications($input: ReadNotificationsInput!) {\n readNotifications(input: $input) {\n   notifications {\n     id\n     isRead\n   }\n }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    397: function(e, t) {
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
                end: 267
            }
        };
        n.loc.source = {
            body: "query OnsiteNotifications_Summary {\n  currentUser {\n    id\n    notifications {\n      summary {\n        unseenCount\n        lastSeenAt\n      }\n    }\n    incomingFriendRequests(first: 1) {\n      totalUnreadCount\n      newestEdge {\n        createdAt\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    398: function(e, t) {
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
                end: 184
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_View {\n  viewedNotifications {\n    user {\n      notifications {\n        summary {\n          unseenCount\n          lastSeenAt\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    399: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded,
                languageCode: e.session.languageCode,
                currentUser: Object(g.c)(e)
            }
        }

        function r(e) {
            return {
                isLoggedIn: Object(g.d)(e)
            }
        }

        function a(e) {
            return {
                theme: Object(_e.a)(e),
                firstPageLoaded: e.session.firstPageLoaded,
                initialUserAvailabilityIsSet: e.session.initialUserAvailabilityIsSet
            }
        }

        function o(e) {
            return Object(m.bindActionCreators)({
                changeTheme: ye.b,
                initialUserAvailabilitySet: ke.g
            }, e)
        }

        function s(e) {
            return Object(m.bindActionCreators)({
                login: function() {
                    return Object(f.f)(p.a.TopNavSignupButton)
                },
                logout: f.g,
                signup: function() {
                    return Object(f.h)(p.a.TopNavSignupButton)
                }
            }, e)
        }

        function l(e) {
            return {
                isLoggedIn: Object(g.d)(e)
            }
        }
        var c, u = n(6),
            d = n(10),
            m = n(9),
            p = n(54),
            f = n(39),
            g = n(17),
            h = n(0),
            v = n(1),
            k = n(2),
            y = n(392),
            _ = n(47),
            b = n(12),
            S = n(5),
            N = n(393),
            E = Object(u.a)(i)(N.b),
            w = n(22),
            C = n(40),
            O = n(18),
            x = n(111),
            U = n(270),
            F = n(64),
            D = n(4),
            R = n(28),
            I = n(133),
            T = n(48),
            A = n(383),
            j = n(389),
            L = n(7),
            P = n(56),
            V = n(3),
            B = (n(411), n(412)),
            M = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.render = function() {
                    var e, t = {
                        "search-live-result-card": !0,
                        "search-live-result-card--hover": this.props.borderHover
                    };
                    return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.user.stream && (e = this.props.data.user.stream.previewImageURL), v.createElement(V.U, {
                        className: D(t),
                        key: this.props.id,
                        fullWidth: !0
                    }, v.createElement(V.S, h.__assign({
                        linkTo: this.props.linkTo,
                        hover: this.props.borderHover,
                        tabIndex: -1,
                        "data-a-target": "search-live-result-card-link"
                    }, Object(P.a)(this.props)), v.createElement(V.A, null, v.createElement(V.U, {
                        className: "search-live-result-card__wrapper",
                        position: V._2.Relative,
                        overflow: V.Y.Hidden,
                        fullWidth: !0
                    }, v.createElement(V.C, {
                        imageSrc: e || k.a.defaultStreamPreviewURL,
                        imageAlt: this.props.imageAlt,
                        aspect: V.k.Aspect16x9
                    }), v.createElement(V._17, {
                        className: "search-live-result-card__overlay",
                        position: V._2.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        display: V.H.Flex,
                        flexDirection: V.J.Column,
                        justifyContent: V.T.End,
                        overflow: V.Y.Hidden,
                        color: V.F.Overlay
                    }, v.createElement(V.B, null, v.createElement(V.U, {
                        className: "search-live-result-card__body",
                        padding: .5
                    }, v.createElement(V._21, {
                        type: V._26.H5,
                        ellipsis: !0,
                        className: "search-live-result-card__title"
                    }, this.props.channelName), v.createElement(V.U, {
                        className: "search-live-result-card__viewer-count-container",
                        display: V.H.Flex,
                        alignItems: V.c.Center
                    }, v.createElement(V.U, {
                        margin: {
                            right: .5
                        },
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        flexShrink: 0
                    }, v.createElement(V._8, {
                        asset: V._9.GlyphLive,
                        type: V._10.Live,
                        width: 14,
                        height: 14
                    })), v.createElement(V._21, {
                        className: "search-live-result-card__viewer-count",
                        ellipsis: !0
                    }, Object(k.e)(this.props.viewerCount))), v.createElement(V._21, {
                        className: "search-live-result-card__info",
                        ellipsis: !0
                    }, this.props.title))))))))
                }, t = h.__decorate([Object(L.a)(B, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(v.Component),
            H = (n(413), function(e) {
                var t, n, i;
                e.title && (e.hitsCount && e.hitsCount > 0 ? t = Object(k.d)("more", "SearchResultSection") : e.totalHitsCount && e.totalHitsCount > 0 && (t = Object(k.d)("Show", "SearchResultSection")), void 0 !== e.totalHitsCount && (i = v.createElement(V.Z, {
                    type: V._0.Brand,
                    label: e.totalHitsCount < 100 ? Object(k.e)(e.totalHitsCount) : "99+"
                })), n = v.createElement(V.S, h.__assign({
                    onClick: e.onHeaderClick,
                    tabIndex: -1
                }, Object(V._39)(e), {
                    "data-ts_selectable": !0
                }), v.createElement(V.U, {
                    className: "search-result-view__titlesep search-result-view--no-hover",
                    display: V.H.Flex,
                    justifyContent: V.T.Between
                }, v.createElement("div", null, v.createElement(V.U, {
                    display: V.H.Inline,
                    margin: {
                        right: 1
                    }
                }, v.createElement(V._21, {
                    type: V._26.Span,
                    color: V.F.Link,
                    fontSize: V.L.Size7,
                    transform: V._25.Uppercase
                }, e.title)), i), v.createElement(V._21, {
                    fontSize: V.L.Size7,
                    transform: V._25.Uppercase
                }, t))));
                var r;
                return (Array.isArray(e.children) && e.children.length > 0 || e.children && !Array.isArray(e.children)) && (r = v.createElement(V.U, {
                    className: "search-result-view__listing-wrapper",
                    margin: {
                        top: .5,
                        bottom: .5
                    }
                }, e.children)), v.createElement("div", {
                    className: "search-result-view__block"
                }, n, r)
            }),
            q = (n(414), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.render = function() {
                    return v.createElement(V.U, {
                        className: "search-title-bar " + (this.props.showBack ? "search-title-bar--show" : ""),
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        "data-a-target": "nav-search-title-bar"
                    }, v.createElement(V._17, {
                        className: "search-title-bar__back-container",
                        display: V.H.Flex,
                        alignItems: V.c.Stretch,
                        borderRight: !0
                    }, v.createElement(V.v, {
                        icon: V._9.AngleLeft,
                        type: V.w.Secondary,
                        size: V.x.Large,
                        onClick: this.props.onBackClick,
                        ariaLabel: Object(k.d)("Back button", "SearchTitleBar"),
                        "data-ts_selectable": this.props.showBack,
                        "data-a-target": "nav-search-back"
                    })), v.createElement(V.U, {
                        className: "search-title-bar__title"
                    }, v.createElement(V._21, {
                        fontSize: V.L.Size5
                    }, this.props.title)))
                }, t
            }(v.Component)),
            z = n(274),
            W = function(e) {
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
                return h.__extends(t, e), t.prototype.render = function() {
                    return v.createElement(V._17, {
                        className: "search__video-filters",
                        background: V.m.Alt,
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, v.createElement(V.P, {
                        display: V.H.Flex,
                        justifyContent: V.T.Between
                    }, v.createElement("form", {
                        onInput: this.handleOptionChange
                    }, v.createElement(V.U, {
                        flexShrink: 0
                    }, v.createElement(V.U, {
                        display: V.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V._14, {
                        name: "type"
                    }, v.createElement("option", {
                        value: z.c.AllVideos
                    }, Object(k.d)("All Videos", "search__video-filters")), v.createElement("option", {
                        value: z.c.PastBroadcasts
                    }, Object(k.d)("Past Broadcasts", "search__video-filters")), v.createElement("option", {
                        value: z.c.Uploads
                    }, Object(k.d)("Uploads", "search__video-filters")), v.createElement("option", {
                        value: z.c.Highlights
                    }, Object(k.d)("Highlights", "search__video-filters")))), v.createElement(V.U, {
                        display: V.H.InlineFlex
                    }, v.createElement(V._14, {
                        name: "video_length"
                    }, v.createElement("option", {
                        value: z.a.AnyLength
                    }, Object(k.d)("Any Length", "search__video-filters")), v.createElement("option", {
                        value: z.a.Short
                    }, Object(k.d)("Short", "search__video-filters")), v.createElement("option", {
                        value: z.a.Long
                    }, Object(k.d)("Long", "search__video-filters"))))), v.createElement(V.U, {
                        display: V.H.InlineFlex,
                        flexShrink: 0
                    }, v.createElement(V._14, {
                        name: "sort"
                    }, v.createElement("option", {
                        value: z.b.Popular
                    }, Object(k.d)("Popular", "search__video-filters")), v.createElement("option", {
                        value: z.b.Newest
                    }, Object(k.d)("Newest", "search__video-filters")))))))
                }, t
            }(v.Component),
            G = n(66),
            $ = (n(415), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBackClick = function() {
                        return t.headerSelect(null)
                    }, t.gameHeaderSelect = function() {
                        return t.headerSelect(G.a.Games)
                    }, t.liveHeaderSelect = function() {
                        return t.headerSelect(G.a.Channels)
                    }, t.userHeaderSelect = function() {
                        return t.headerSelect(G.a.Users)
                    }, t.videoHeaderSelect = function() {
                        return t.headerSelect(G.a.Videos)
                    }, t.communityHeaderSelect = function() {
                        return t.headerSelect(G.a.Communities)
                    }, t.headerSelect = function(e) {
                        t.props.onCategorySelected(e)
                    }, t.onClick = function(e) {
                        if (e.nativeEvent.stopImmediatePropagation(), e.target !== e.currentTarget) {
                            var n = e.target,
                                i = n.querySelector("a"),
                                r = i ? i.querySelector("[data-tt_content]") : null;
                            r || (i = n.closest("a")), r = i && i.dataset.tt_content ? i : null, r && t.props.onResultSelected()
                        }
                    }, t.setScrollRef = function(e) {
                        return t.scroll = e
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.previousCategory !== this.props.currentCategory && (this.previousCategory = this.props.currentCategory, this.scroll.scrollToTop())
                }, t.prototype.render = function() {
                    var e, t = {
                        "search-result-view": !0,
                        "search-result-view--active": !0,
                        "search-result-view--filtered": this.props.currentCategory === G.a.Videos
                    };
                    e = this.props.currentCategory && null !== this.props.currentCategory ? v.createElement(q, {
                        title: this.getCategoryTitle(this.props.currentCategory),
                        showBack: !0,
                        onBackClick: this.onBackClick
                    }) : v.createElement(q, {
                        title: Object(k.d)("Top Results", "SearchResultPanel__titlebar"),
                        showBack: !1
                    });
                    var n;
                    n = this.props.isWaiting ? v.createElement(V.X, {
                        fillContent: !0
                    }) : this.props.isErrored ? this.getErrorMessage() : this.props.currentCategory && null !== this.props.currentCategory ? this.getCategoryDrillDown(this.props.currentCategory) : this.props.gameResults && this.props.gameResults.totalHits > 0 || this.props.userResults && this.props.userResults.totalHits > 0 || this.props.communityResults && this.props.communityResults.totalHits > 0 || this.props.videoResults && this.props.videoResults.totalHits > 0 || this.props.liveResults && this.props.liveResults.totalHits > 0 ? this.getResultSections() : this.getNoResultsMessage();
                    var i;
                    return this.props.currentCategory === G.a.Videos && (i = v.createElement(W, {
                        key: "video-filters",
                        onOptionsChange: this.props.onVideoOptionsChange
                    })), v.createElement("div", {
                        className: "search-panel " + (this.props.isOpen ? "" : "search-panel--closed"),
                        tabIndex: 0,
                        onKeyDown: this.props.onKeyDown
                    }, e, i, v.createElement(V._17, {
                        className: D(t),
                        background: V.m.Base,
                        position: V._2.Absolute,
                        overflow: V.Y.Hidden,
                        display: V.H.Block
                    }, v.createElement(R.b, {
                        className: "search-result-view__wrapper",
                        contentClassName: "search-result-view__scroll-container",
                        onClick: this.onClick,
                        scrollRef: this.setScrollRef,
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, v.createElement(V.U, {
                        fullWidth: !0
                    }, n, v.createElement(R.a, {
                        key: this.props.currentCategory || "none",
                        enabled: !this.props.isWaiting && this.props.isOpen,
                        loadMore: this.props.loadMore
                    })))))
                }, t.prototype.getResultSections = function() {
                    var e, t = [],
                        n = [],
                        i = this.getGameCards(),
                        r = this.getUserCards(),
                        a = this.getCommunityCards(),
                        o = this.getVideoCards(),
                        s = this.getLiveCards();
                    return s.length > 0 && (e = v.createElement(V.U, {
                        className: "search-result-view__live",
                        margin: {
                            y: 1,
                            x: 1
                        }
                    }, v.createElement(V.N, null, s))), this.getResultSection("games-section", G.a.Games, this.gameHeaderSelect, this.props.gameResults, i.length, i, n, t), this.getResultSection("live-section", G.a.Channels, this.liveHeaderSelect, this.props.liveResults, s.length, e, n, t), this.getResultSection("channels-section", G.a.Users, this.userHeaderSelect, this.props.userResults, r.length, r, n, t), this.getResultSection("videos-section", G.a.Videos, this.videoHeaderSelect, this.props.videoResults, o.length, o, n, t), this.getResultSection("communities-section", G.a.Communities, this.communityHeaderSelect, this.props.communityResults, a.length, a, n, t), t.concat(n)
                }, t.prototype.getResultSection = function(e, t, n, i, r, a, o, s) {
                    var l = v.createElement(H, {
                        key: e,
                        totalHitsCount: i ? i.totalHits : 0,
                        hitsCount: r,
                        title: this.getCategoryTitle(t),
                        onHeaderClick: n,
                        "data-a-target": e
                    }, a);
                    0 === r ? o.push(l) : s.push(l)
                }, t.prototype.getGameCards = function() {
                    return this.props.gameResults ? this.props.gameResults.results.map(function(e) {
                        return v.createElement(j.a, {
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
                        return v.createElement(V.G, {
                            key: "live_" + e.id,
                            cols: 6
                        }, v.createElement(V.U, {
                            margin: {
                                bottom: 1
                            }
                        }, v.createElement(M, {
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
                        return v.createElement(V.S, {
                            linkTo: e.linkTo,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: e.id
                        }, v.createElement(V.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, v.createElement(V.A, {
                            row: !0
                        }, v.createElement(V.C, {
                            imageAlt: e.thumbnailAltText,
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            size: V.D.Size4,
                            aspect: V.k.Aspect1x1
                        }), v.createElement(V.B, null, v.createElement(V.P, {
                            padding: {
                                x: 1
                            }
                        }, v.createElement(V._21, {
                            type: V._26.H5,
                            ellipsis: !0
                        }, t))))))
                    }) : []
                }, t.prototype.getVideoCards = function() {
                    return this.props.videoResults ? this.props.videoResults.results.map(function(e) {
                        var t = Object(T.a)(e.login || "", e.name || ""),
                            n = Object(A.a)(e.length || 0);
                        return v.createElement(V.S, {
                            key: "video_" + e.id,
                            linkTo: e.linkTo,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, v.createElement(V.U, {
                            className: "search-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, v.createElement(V.A, {
                            row: !0
                        }, v.createElement(V.C, {
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            imageAlt: e.thumbnailAltText,
                            size: V.D.Size8,
                            aspect: V.k.Aspect16x9
                        }), v.createElement(V.B, null, v.createElement(V.P, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(V._21, {
                            type: V._26.H5,
                            ellipsis: !0
                        }, e.title)), v.createElement(V.P, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(V._21, {
                            className: "search-panel__link",
                            ellipsis: !0
                        }, e.createdAt ? Object(k.c)(new Date(1e3 * e.createdAt), "medium") : "", " · ", n || "", " · ", v.createElement(V._21, {
                            className: "search-pannel__highlight-link",
                            type: V._26.Span
                        }, t)))))))
                    }) : []
                }, t.prototype.getCommunityCards = function() {
                    return this.props.communityResults ? this.props.communityResults.results.map(function(e) {
                        return v.createElement(V.S, {
                            key: "community_" + e.id,
                            targetBlank: Object(I.b)(),
                            linkTo: Object(I.a)(e.linkTo),
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, v.createElement(V.U, {
                            className: "search-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, v.createElement(V.A, {
                            row: !0
                        }, v.createElement(V.C, {
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            imageAlt: e.thumbnailAltText,
                            size: V.D.Size4,
                            aspect: V.k.BoxArt
                        }), v.createElement(V.B, null, v.createElement(V.P, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(V._21, {
                            type: V._26.H5,
                            ellipsis: !0
                        }, e.name)), v.createElement(V.P, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(V._21, {
                            className: "search-panel__link",
                            ellipsis: !0
                        }, Object(k.d)("{viewerCount,number} Viewers", {
                            viewerCount: e.viewerCount || 0
                        }, "SearchResultPanel")))))))
                    }) : []
                }, t.prototype.getCategoryDrillDown = function(e) {
                    var t;
                    switch (e) {
                        case G.a.Games:
                            if (!this.props.gameResults || 0 === this.props.gameResults.totalHits) return this.getNoResultsMessage();
                            t = this.getGameCards();
                            break;
                        case G.a.Users:
                            if (!this.props.userResults || 0 === this.props.userResults.totalHits) return this.getNoResultsMessage();
                            t = this.getUserCards();
                            break;
                        case G.a.Communities:
                            if (!this.props.communityResults || 0 === this.props.communityResults.totalHits) return this.getNoResultsMessage();
                            t = this.getCommunityCards();
                            break;
                        case G.a.Videos:
                            if (!this.props.videoResults || 0 === this.props.videoResults.totalHits) return this.getNoResultsMessage();
                            t = this.getVideoCards();
                            break;
                        case G.a.Channels:
                            if (!this.props.liveResults || 0 === this.props.liveResults.totalHits) return this.getNoResultsMessage();
                            t = [v.createElement(V.U, {
                                className: "search-result-view__live",
                                margin: {
                                    x: 1
                                },
                                key: "live_drill-down-container"
                            }, v.createElement(V.N, null, this.getLiveCards()))];
                            break;
                        default:
                            return this.getNoResultsMessage()
                    }
                    return v.createElement(H, null, t)
                }, t.prototype.getCategoryTitle = function(e) {
                    switch (e) {
                        case G.a.Games:
                            return Object(k.d)("Games", "SearchResultPanel");
                        case G.a.Users:
                            return Object(k.d)("Channels", "SearchResultPanel");
                        case G.a.Communities:
                            return Object(k.d)("Communities", "SearchResultPanel");
                        case G.a.Videos:
                            return Object(k.d)("Videos", "SearchResultPanel");
                        case G.a.Channels:
                            return Object(k.d)("Live", "SearchResultPanel");
                        default:
                            return Object(k.d)("Top Results", "SearchResultPanel")
                    }
                }, t.prototype.getNoResultsMessage = function() {
                    return v.createElement(V.U, {
                        display: V.H.Flex,
                        flexDirection: V.J.Column,
                        justifyContent: V.T.Center,
                        alignItems: V.c.Center,
                        className: "notice-wrap aspect__fill"
                    }, v.createElement(V.U, {
                        className: "notice-wrap__visual",
                        textAlign: V._22.Center,
                        flexShrink: 1
                    }, v.createElement(V._8, {
                        asset: V._9.SearchNoResults,
                        width: 46,
                        height: 48
                    })), v.createElement("h4", {
                        className: "notice-wrap__title flex__item",
                        "data-test-selector": "panel-body-no-results"
                    }, Object(k.d)("No results found", "SearchResultPanel")), v.createElement("p", {
                        className: "notice-wrap__text flex__item"
                    }, Object(k.d)("They're probably in another castle", "SearchResultPanel")))
                }, t.prototype.getErrorMessage = function() {
                    return v.createElement(V.U, {
                        display: V.H.Flex,
                        flexDirection: V.J.Column,
                        justifyContent: V.T.Center,
                        alignItems: V.c.Center,
                        className: "notice-wrap aspect__fill"
                    }, v.createElement(V.U, {
                        className: "notice-wrap__visual",
                        textAlign: V._22.Center,
                        flexShrink: 1
                    }, v.createElement(V._8, {
                        asset: V._9.DeadGlitch,
                        width: 46,
                        height: 48
                    })), v.createElement("h4", {
                        "data-test-selector": "search-error-message",
                        className: "notice-wrap__title flex__item"
                    }, Object(k.d)("Search is not available at this time", "SearchResultPanel")), v.createElement("p", {
                        className: "notice-wrap__text flex__item"
                    }, Object(k.d)("Please try again later", "SearchResultPanel")))
                }, t
            }(v.Component)),
            K = (n(416), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isAnimating: !1,
                        currentCategory: t.currentCategory
                    }, n
                }
                return h.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
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
                    return this.props.isVisible || this.state.isAnimating ? v.createElement(V.U, {
                        className: "search-tag"
                    }, v.createElement(V.e, {
                        enabled: !0,
                        type: this.props.isVisible ? V.i.BounceIn : V.i.BounceOut
                    }, v.createElement(V._20, {
                        label: this.state.currentCategory,
                        icon: e,
                        onClose: this.props.onClick,
                        "data-test-selector": "filter-icon",
                        "data-a-target": "nav-search-clear"
                    }))) : null
                }, t.prototype.getAssetName = function(e) {
                    switch (e) {
                        case G.a.Games:
                            return V._9.NavGames;
                        case G.a.Users:
                            return V._9.NavProfile;
                        case G.a.Communities:
                            return V._9.Communities;
                        case G.a.Videos:
                            return V._9.NavVideos;
                        case G.a.Channels:
                        default:
                            return V._9.NavChannels
                    }
                }, t
            }(v.Component)),
            Q = (n(417), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t.categoryTagClicked = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.props.onCategorySelected(null)
                    }, t
                }
                return h.__extends(t, e), t.prototype.render = function() {
                    return v.createElement("div", null, v.createElement("div", {
                        className: "top-nav__search-container",
                        "data-click-out-id": "nav-search-balloon"
                    }, v.createElement(F.a, {
                        onClickOut: this.props.onClickOut
                    }, v.createElement(V._11, {
                        onChange: this.handleChange,
                        onFocus: this.props.onFocus,
                        onKeyDown: this.props.onKeyDown,
                        placeholder: Object(k.d)("Search", "NavSearch"),
                        id: "nav-search-input",
                        "data-a-target": "nav-search-input",
                        spellCheck: !1
                    }), v.createElement(V.p, {
                        direction: V.q.Bottom,
                        noTail: !0,
                        size: V.r.Large,
                        show: this.props.isOpen,
                        offsetY: "5px",
                        "data-a-target": "nav-search-balloon"
                    }, v.createElement($, {
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
                    })), v.createElement(K, {
                        isVisible: this.props.isOpen && !!this.props.currentCategory,
                        currentCategory: this.props.currentCategory,
                        onClick: this.categoryTagClicked
                    }))))
                }, t
            }(v.Component)),
            Y = 50,
            J = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onCategorySelected = function(e) {
                        t.setState(h.__assign({}, t.getEmptyState(), {
                            term: t.state.term,
                            currentCategory: e,
                            isOpen: !0,
                            isWaiting: !0
                        }), function() {
                            t.doSearch(t.state.term)
                        })
                    }, t.onChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return void t.setState(t.getEmptyState());
                        t.setState({
                            topGameResults: null,
                            topUserResults: null,
                            topLiveResults: null,
                            topVideoResults: null,
                            topCommunityResults: null,
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, Y)
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
                        t.state.term && (e.keyCode === C.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === C.a.Up ? t.focusNext(-1) : e.keyCode === C.a.Down && t.focusNext(1))
                    }, t.onResultSelected = function() {
                        t.setState({
                            isOpen: !1
                        })
                    }, t.loadMore = function() {
                        return h.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return h.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.state.queryID || null === this.state.currentCategory || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(this.state.currentCategory, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = r.sent(), [3, 4];
                                    case 3:
                                        return n = r.sent(), k.i.error(n, "Algolia page search failed"), this.setState(h.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2];
                                    case 4:
                                        return t ? (i = Object(U.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentGameResults: this.state.currentGameResults,
                                            currentUserResults: this.state.currentUserResults,
                                            currentCommunityResults: this.state.currentCommunityResults,
                                            currentVideoResults: this.state.currentVideoResults,
                                            currentLiveResults: this.state.currentLiveResults
                                        }), this.setState(h.__assign({}, i, {
                                            term: this.state.term,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: i.exhaustedHits
                                        })), [2]) : (this.setState(h.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.changeVideoOptions = function(e) {
                        return h.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return h.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = O.a(), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryVideos(this.state.term, t, e)];
                                    case 2:
                                        return n = r.sent(), n.hits && this.setState({
                                            currentVideoResults: {
                                                totalHits: n.totalHits,
                                                results: n.hits.map(U.a)
                                            },
                                            queryID: ""
                                        }), [3, 4];
                                    case 3:
                                        return i = r.sent(), k.i.error(i, "Algolia video search failed"), this.setState({
                                            isErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.searchClient = new x.a(k.a.algoliaApplicationID, k.a.algoliaAPIKey), t.state = t.getEmptyState(), t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentDidUpdate = function() {
                    !this.state.focusSelectable || this.state.queryID || this.inputTimer || (this.focusNext(1), this.setState({
                        focusSelectable: !1
                    }))
                }, t.prototype.render = function() {
                    return v.createElement(Q, {
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
                        r = Array.prototype.indexOf.call(n, i);
                    if (t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e, t < 0 && (t = 0), !(t >= n.length)) {
                        var a = n.item(t);
                        a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: a
                        })
                    }
                }, t.prototype.doSearch = function(e) {
                    return h.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, r, a, o;
                        return h.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = O.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 6, , 7]), this.state.currentCategory && null !== this.state.currentCategory ? (t = 0, [4, this.searchClient.queryForType(this.state.currentCategory, e, n)]) : [3, 3];
                                case 2:
                                    return r = s.sent(), [3, 5];
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
                                    r = s.sent(), s.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return a = s.sent(), k.i.error(a, "Algolia top results search failed"), this.setState(h.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2];
                                case 7:
                                    return r ? this.state.queryID !== r.id ? [2] : (o = Object(U.b)({
                                        searchResults: r,
                                        append: !1,
                                        currentGameResults: this.state.currentGameResults,
                                        currentUserResults: this.state.currentUserResults,
                                        currentCommunityResults: this.state.currentCommunityResults,
                                        currentVideoResults: this.state.currentVideoResults,
                                        currentLiveResults: this.state.currentLiveResults
                                    }), this.state.currentCategory && null === this.state.currentCategory && (o = h.__assign({}, o, {
                                        topGameResults: o.currentGameResults,
                                        topUserResults: o.currentUserResults,
                                        topLiveResults: o.currentLiveResults,
                                        topVideoResults: o.currentVideoResults,
                                        topCommunityResults: o.currentCommunityResults,
                                        exhaustedHits: o.exhaustedHits
                                    })), this.setState(function(n) {
                                        return h.__assign({}, n, o, {
                                            queryID: "",
                                            term: e,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(h.__assign({}, this.getEmptyState(), {
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
                }, t = h.__decorate([Object(S.c)("NavSearch")], t)
            }(v.Component),
            Z = Object(w.e)(J),
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t.onSignUpClick = function(e) {
                        e.preventDefault(), t.props.signup()
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return v.createElement(V.U, {
                        className: "anon-user",
                        flexWrap: V.K.NoWrap,
                        display: V.H.Flex,
                        margin: {
                            left: 1
                        },
                        "data-a-target": "user-card"
                    }, v.createElement(V.U, {
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V.u, {
                        onClick: this.onLoginClick,
                        "data-a-target": "login-button"
                    }, Object(k.d)("Log in", "top-nav"))), v.createElement(V.U, {
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V.u, {
                        onClick: this.onSignUpClick,
                        "data-a-target": "signup-button"
                    }, Object(k.d)("Sign up", "top-nav"))))
                }, t = h.__decorate([Object(S.c)("AnonUser")], t)
            }(v.Component),
            ee = X,
            te = n(418),
            ne = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.render = function() {
                    var e = !1;
                    if (this.props.data) {
                        if (this.props.data.loading || this.props.data.error) return null;
                        e = !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    }
                    return !this.props.isLoggedIn || e ? v.createElement(d.b, {
                        to: {
                            pathname: "/store/merch",
                            state: {
                                medium: b.PageviewMedium.TopNav,
                                content: b.PageviewContent.Games
                            }
                        },
                        className: "top-nav__nav-link",
                        "data-a-target": "store-link",
                        activeClassName: "active"
                    }, Object(k.d)("Store", "TopNavStore")) : null
                }, t = h.__decorate([Object(L.a)(te, {
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(S.c)("TopNavStoreComponent", {
                    autoReportInteractive: !0
                })], t)
            }(v.Component),
            ie = ne,
            re = Object(u.a)(r)(ie),
            ae = n(109),
            oe = n(136),
            se = n(419),
            le = Object(I.a)("/products/turbo?ref=top_nav"),
            ce = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return null;
                    var e = this.props.data.requestInfo && !Object(ae.b)(this.props.data.requestInfo.countryCode),
                        t = !this.props.data.currentUser || !this.props.data.currentUser.hasTurbo;
                    if (e && t) return v.createElement("a", {
                        href: le,
                        target: "_blank",
                        className: "top-nav__nav-link",
                        "data-a-target": "try-prime-link"
                    }, Object(k.d)("Go Turbo", "TopNavUpsell"));
                    if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                        var n = Object(oe.d)(oe.b, window.location.pathname.substring(1));
                        return v.createElement("a", {
                            href: n,
                            target: "_blank",
                            className: "top-nav__nav-link",
                            "data-a-target": "try-prime-link"
                        }, Object(k.d)("Try Prime", "TopNavUpsell"))
                    }
                    return null
                }, t = h.__decorate([Object(L.a)(se), Object(S.c)("TopNavUpsellComponent")], t)
            }(v.Component),
            ue = ce,
            de = n(90),
            me = n(110),
            pe = n(50),
            fe = n(38),
            ge = n(20),
            he = n(30),
            ve = n(139),
            ke = n(52),
            ye = n(135),
            _e = n(51),
            be = function() {
                return v.createElement(V.U, {
                    display: V.H.Flex,
                    flexGrow: 1,
                    alignItems: V.c.Center,
                    fullHeight: !0,
                    className: "top-nav__user-card",
                    "data-a-target": "user-card"
                }, v.createElement(V.U, {
                    display: V.H.Flex,
                    flexWrap: V.K.NoWrap,
                    alignItems: V.c.Center,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    fullHeight: !0,
                    className: "top-nav__user-card-wrapper"
                }, v.createElement(V.U, {
                    margin: {
                        x: 1
                    }
                }, v.createElement(S.a, {
                    size: 30,
                    imageSrc: k.a.defaultAvatarURL,
                    imageAlt: Object(k.d)("User Avatar", "UserError"),
                    "data-a-target": "top-nav-avatar"
                })), v.createElement(V.U, {
                    flexGrow: 1
                }, v.createElement(V._17, {
                    color: V.F.Base,
                    className: "top-nav__username"
                }, ""))))
            },
            Se = function() {
                return v.createElement(V.U, {
                    display: V.H.Flex,
                    flexGrow: 1,
                    alignItems: V.c.Center,
                    fullHeight: !0,
                    className: "top-nav__user-card top-nav__user-card--placeholder",
                    "data-a-target": "user-card"
                }, v.createElement(V.U, {
                    display: V.H.Flex,
                    flexWrap: V.K.NoWrap,
                    alignItems: V.c.Center,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    fullHeight: !0,
                    className: "top-nav__user-card-wrapper"
                }, v.createElement(V.U, {
                    margin: {
                        x: 1
                    }
                }, v.createElement("div", {
                    className: "top-nav__user-card-placeholder-avatar"
                })), v.createElement(V.U, {
                    flexGrow: 1,
                    display: V.H.Flex,
                    flexDirection: V.J.Column,
                    justifyContent: V.T.Center
                }, v.createElement(V._17, {
                    color: V.F.Base,
                    className: "top-nav__username"
                }, v.createElement("div", {
                    className: "top-nav__user-card-placeholder-name"
                })), v.createElement(V.U, {
                    className: "top-nav__user-status"
                }, v.createElement(V.U, {
                    ellipsis: !0,
                    display: V.H.Flex,
                    alignItems: V.c.Center
                }, v.createElement(V.U, {
                    display: V.H.InlineFlex,
                    margin: {
                        right: .5
                    }
                }, v.createElement("div", {
                    className: "top-nav__user-card-placeholder-presence"
                })), v.createElement(V._17, {
                    display: V.H.InlineFlex,
                    color: V.F.Alt
                }, v.createElement("div", {
                    className: "top-nav__user-card-placeholder-status"
                }))))), v.createElement(V.U, {
                    display: V.H.Flex,
                    flexShrink: 0,
                    className: "top-nav__user-card-dropdown-arrow top-nav__user-card-dropdown-arrow--presence",
                    "data-a-target": "top-nav-dropdown-arrow"
                }, v.createElement(V._8, {
                    asset: V._9.GlyphArrDown
                }))))
            },
            Ne = n(31),
            Ee = n(71),
            we = (n(422), function(e) {
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
                        var e = n.props.theme === Ne.a.Dark ? Ne.a.Light : Ne.a.Dark;
                        n.props.changeTheme(e, ye.a.UserMenu)
                    }, n.onOnlineClick = function(e) {
                        e && e.stopPropagation(), n.props.toggleVisibility(pe.a.Online)
                    }, n.onInvisibleClick = function(e) {
                        e && e.stopPropagation(), n.props.toggleVisibility(pe.a.Offline)
                    }, n.unsubscribeFromHistory = n.props.history.listen(function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }), n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return h.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory()
                }, t.prototype.render = function() {
                    var e = this.props.gqlData.currentUser.profileImageURL || k.a.defaultAvatarURL,
                        t = D("top-nav__dropdown-wrapper", {
                            toggled: this.state.dropdownOpen
                        }),
                        n = D("top-nav__user-card", "theme--dark", {
                            "top-nav__dropdown-open": this.state.dropdownOpen
                        }),
                        i = this.state.dropdownOpen ? "dropdown-down" : "dropdown-up",
                        r = this.state.dropdownOpen ? "dropdown-down" : "dropdown-up",
                        a = this.props.gqlData.currentUser.availability === pe.a.Offline ? V.F.Base : V.F.Alt2,
                        o = this.props.gqlData.currentUser.availability === pe.a.Online ? V.F.Base : V.F.Alt2,
                        s = this.props.gqlData.currentUser.settings.isSharingActivity,
                        l = this.props.gqlData.currentUser.availability || this.props.gqlData.currentUser.settings.visibility,
                        c = v.createElement(V.U, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, v.createElement(V.E, {
                            id: "dark-mode-toggle",
                            label: Object(k.d)("Dark Mode", "TopNavUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === Ne.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }));
                    return v.createElement(V.U, {
                        position: V._2.Relative,
                        display: V.H.Flex,
                        flexGrow: 1,
                        alignItems: V.c.Stretch,
                        fullHeight: !0
                    }, v.createElement(F.a, {
                        onClickOut: this.onClickOut,
                        className: n
                    }, v.createElement(V.U, {
                        display: V.H.Flex,
                        flexGrow: 1,
                        alignItems: V.c.Stretch,
                        fullHeight: !0
                    }, v.createElement(V.S, {
                        onClick: this.onCardClick,
                        "data-a-target": "user-menu-toggle",
                        "data-test-selector": "user-menu-toggle"
                    }, v.createElement(V.U, {
                        display: V.H.Flex,
                        flexWrap: V.K.NoWrap,
                        alignItems: V.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0,
                        className: "top-nav__user-card-wrapper"
                    }, v.createElement(V.U, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, v.createElement(V.U, {
                        className: "top-nav__user-card-avatar-container"
                    }, v.createElement(S.a, {
                        size: 30,
                        imageSrc: e,
                        imageAlt: "User avatar",
                        "data-a-target": "top-nav-avatar"
                    }))), v.createElement(V.U, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: V.J.Column
                    }, v.createElement(V._17, {
                        color: V.F.Base,
                        className: "top-nav__username",
                        "data-a-target": "user-display-name"
                    }, this.props.gqlData.currentUser.displayName), v.createElement(V.U, {
                        className: "top-nav__user-status",
                        ellipsis: !0,
                        fullWidth: !0,
                        alignItems: V.c.Center,
                        display: V.H.Flex,
                        flexWrap: V.K.NoWrap
                    }, v.createElement(V.U, {
                        display: V.H.Flex,
                        flexShrink: 0,
                        margin: {
                            right: .5
                        }
                    }, v.createElement(Ee.a, {
                        availability: l
                    })), v.createElement(V._17, {
                        ellipsis: !0,
                        color: V.F.Alt
                    }, v.createElement(V._21, {
                        type: V._26.Span,
                        noWrap: !0,
                        "data-a-target": "online-status"
                    }, this.props.gqlData.currentUser && v.createElement(Ee.b, {
                        activity: this.props.gqlData.currentUser.activity,
                        availability: l === pe.a.Offline ? pe.a.Invisible : l
                    }))))), v.createElement(V._17, {
                        display: V.H.Flex,
                        flexShrink: 0,
                        color: V.F.Base,
                        className: "user-card-wrapper__dropdown-arrow",
                        "data-a-target": "top-nav-dropdown-arrow"
                    }, v.createElement(V._8, {
                        asset: V._9.GlyphArrDown
                    }))))), v.createElement(V._17, {
                        fullWidth: !0,
                        overflow: V.Y.Hidden,
                        position: V._2.Absolute,
                        className: t,
                        background: V.m.Base,
                        color: V.F.Base,
                        "data-a-target": i,
                        "data-test-selector": r
                    }, v.createElement(V._17, {
                        padding: {
                            y: 1
                        },
                        background: V.m.Alt
                    }, v.createElement(V.S, {
                        onClick: this.onOnlineClick,
                        "data-a-target": "online-dropdown-button",
                        "data-test-selector": "online-dropdown-button"
                    }, v.createElement(V._17, {
                        color: V.F.Alt2,
                        display: V.H.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(V.U, {
                        alignItems: V.c.Center,
                        display: V.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V._3, {
                        status: V._4.Online
                    })), v.createElement(V._21, {
                        bold: this.props.gqlData.currentUser.availability === pe.a.Online,
                        color: o
                    }, Object(k.d)("Online", "TopNavUser")))), v.createElement(V.S, {
                        onClick: this.onInvisibleClick,
                        "data-a-target": "invisible-dropdown-button",
                        "data-test-selector": "invisible-dropdown-button"
                    }, v.createElement(V._17, {
                        color: V.F.Base,
                        display: V.H.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(V.U, {
                        alignItems: V.c.Center,
                        display: V.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V._3, {
                        status: V._4.Invisible
                    })), v.createElement(V._21, {
                        bold: this.props.gqlData.currentUser.availability === pe.a.Offline,
                        color: a
                    }, Object(k.d)("Invisible", "TopNavUser")))), v.createElement(V.U, {
                        margin: {
                            x: 2,
                            bottom: 1,
                            top: .5
                        }
                    }, v.createElement(V.E, {
                        id: "share-activity-toggle",
                        label: Object(k.d)("Share my activity", "TopNavUser"),
                        "data-a-target": "share-activity-toggle",
                        "data-test-selector": "share-activity-toggle",
                        "data-a-value": s,
                        checked: s,
                        onChange: this.onShareCheckboxClick,
                        disabled: this.props.gqlData.currentUser.availability === pe.a.Offline
                    }), v.createElement(V._21, {
                        type: V._26.Span,
                        color: V.F.Alt
                    }, Object(k.d)("Share what you're watching, playing, or streaming with your friends.", "TopNavUser"))), v.createElement(V._17, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), c), v.createElement(V.U, {
                        margin: {
                            y: 1
                        }
                    }, v.createElement(V.S, {
                        linkTo: {
                            pathname: "/" + this.props.gqlData.currentUser.login,
                            state: {
                                content: "self-channel",
                                medium: "twitch-topnav"
                            }
                        },
                        "data-a-target": "channel-dropdown-link"
                    }, v.createElement(V._17, {
                        color: V.F.Alt,
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V._8, {
                        asset: V._9.NavMyChannel,
                        height: 18,
                        width: 18
                    })), v.createElement(V._21, null, Object(k.d)("Channel", "TopNavUser")))), v.createElement(V.S, {
                        linkTo: Object(I.a)("/" + this.props.gqlData.currentUser.login + "/manager/past_broadcasts"),
                        "data-a-target": "video-manager-dropdown-link"
                    }, v.createElement(V._17, {
                        color: V.F.Alt,
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V._8, {
                        asset: V._9.NavManager,
                        height: 18,
                        width: 18
                    })), v.createElement(V._21, null, Object(k.d)("Video Manager", "TopNavUser")))), v.createElement(V.S, {
                        linkTo: Object(I.a)("/" + this.props.gqlData.currentUser.login + "/dashboard"),
                        "data-a-target": "dashboard-dropdown-link"
                    }, v.createElement(V._17, {
                        color: V.F.Alt,
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V._8, {
                        asset: V._9.NavDashboard,
                        height: 18,
                        width: 18
                    })), v.createElement(V._21, null, Object(k.d)("Dashboard", "TopNavUser")))), v.createElement(V._17, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), v.createElement(V.S, {
                        targetBlank: Object(I.b)(),
                        linkTo: Object(I.a)("/friends"),
                        "data-a-target": "friends-dropdown-link"
                    }, v.createElement(V._17, {
                        color: V.F.Alt,
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V._8, {
                        asset: V._9.Friends,
                        height: 18,
                        width: 18
                    })), v.createElement(V._21, null, Object(k.d)("Friends", "TopNavUser")))), v.createElement(V.S, {
                        targetBlank: Object(I.b)(),
                        linkTo: Object(I.a)("/messages/inbox"),
                        "data-a-target": "inbox-dropdown-link"
                    }, v.createElement(V._17, {
                        color: V.F.Alt,
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V._8, {
                        asset: V._9.NavMessages,
                        height: 18,
                        width: 18
                    })), v.createElement(V._21, null, Object(k.d)("Messages", "TopNavUser")))), v.createElement(V.S, {
                        targetBlank: Object(I.b)(),
                        linkTo: Object(I.a)("/subscriptions"),
                        "data-a-target": "subscriptions-dropdown-link"
                    }, v.createElement(V._17, {
                        color: V.F.Alt,
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V._8, {
                        asset: V._9.NavBackpack,
                        height: 18,
                        width: 18
                    })), v.createElement(V._21, null, Object(k.d)("Subscriptions", "TopNavUser")))), v.createElement(V.S, {
                        targetBlank: Object(I.b)(),
                        linkTo: Object(I.a)("/inventory"),
                        "data-a-target": "inventory-dropdown-link"
                    }, v.createElement(V._17, {
                        color: V.F.Alt,
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V._8, {
                        asset: V._9.Crate,
                        height: 18,
                        width: 18
                    })), v.createElement(V._21, null, Object(k.d)("Inventory", "TopNavUser")))), v.createElement(V._17, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), v.createElement(V.S, {
                        targetBlank: Object(I.b)(),
                        linkTo: Object(I.a)("/settings/profile"),
                        "data-a-target": "settings-dropdown-link"
                    }, v.createElement(V._17, {
                        color: V.F.Alt,
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V._8, {
                        asset: V._9.NavSettings,
                        height: 18,
                        width: 18
                    })), v.createElement(V._21, null, Object(k.d)("Settings", "TopNavUser")))), v.createElement(V.S, {
                        "data-a-target": "dropdown-logout",
                        onClick: this.onLogoutClick
                    }, v.createElement(V._17, {
                        color: V.F.Alt,
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(V.U, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V._8, {
                        asset: V._9.NavLogout,
                        height: 18,
                        width: 18
                    })), v.createElement(V._21, null, Object(k.d)("Log Out", "TopNavUser"))))))))
                }, t
            }(v.Component)),
            Ce = Object(w.e)(we),
            Oe = n(423),
            xe = n(424),
            Ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isSettingNewSession = !1, t.dataIsReady = function(e) {
                        return e.data && !e.data.loading && !e.data.error
                    }, t.setUserToOffline = function() {
                        Object(ve.c)(pe.a.Offline), Object(ve.a)()
                    }, t.toggleShareActivity = function() {
                        var e = !t.props.data.currentUser.settings.isSharingActivity,
                            n = h.__assign({}, Object(ge.a)({
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
                        t.dataIsReady(t.props) && Object(ve.e)(e)
                    }, t.setNewSession = function() {
                        return h.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return h.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.isSettingNewSession) return [2];
                                        this.isSettingNewSession = !0, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, 4, 5]), [4, Object(ve.g)()];
                                    case 2:
                                        return t.sent(), this.props.initialUserAvailabilitySet(), [3, 5];
                                    case 3:
                                        return e = t.sent(), k.i.warn("Failed to set new user availability session.", e), [3, 5];
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
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.maybeRefetchData(this.props), this.props.firstPageLoaded && this.dataIsReady(this.props) && !this.props.initialUserAvailabilityIsSet && this.setNewSession(), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.maybeRefetchData(e), e.firstPageLoaded && this.dataIsReady(e) && !e.initialUserAvailabilityIsSet && this.setNewSession()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.setUserToOffline()
                }, t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.currentUser ? this.props.data.error ? v.createElement(be, null) : v.createElement(Ce, {
                        gqlData: this.props.data,
                        toggleShareActivity: this.toggleShareActivity,
                        toggleVisibility: this.toggleVisibility,
                        changeTheme: this.props.changeTheme,
                        firstPageLoaded: this.props.firstPageLoaded,
                        logout: this.props.logout,
                        theme: this.props.theme
                    }) : v.createElement(Se, null)
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = h.__decorate([Object(L.a)(Oe), Object(L.a)(xe, {
                    name: "updateIsSharingActivity"
                }), Object(me.a)(function(e) {
                    return {
                        query: Oe,
                        topic: e.data.currentUser ? Object(he.f)(e.data.currentUser.id) : "",
                        skip: !(e.data && !e.data.loading && !e.data.error && e.data.currentUser),
                        type: fe.c.PresenceSettings,
                        mutator: function(e, t) {
                            return t.currentUser.settings.visibility = e.data.availability_override.toUpperCase(), t.currentUser.settings.isSharingActivity = e.data.share_activity, t
                        }
                    }
                }), Object(de.a)([{
                    topic: function(e) {
                        return Object(he.f)(e.data.currentUser.id)
                    },
                    mapMessageTypesToProps: (c = {}, c[fe.c.Presence] = "presence", c),
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }]), Object(S.c)("User")], t)
            }(v.Component),
            Fe = Object(u.a)(a, o)(Object(d.f)(Ue)),
            De = n(390),
            Re = (n(442), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOnsiteNotifications = function() {
                        return t.props.isLoggedIn ? v.createElement(V.U, {
                            flexGrow: 0,
                            alignSelf: V.d.Center,
                            flexWrap: V.K.NoWrap,
                            padding: {
                                left: .5,
                                right: 1
                            },
                            flexShrink: 0
                        }, v.createElement(E, null)) : null
                    }, t.renderTwitchPrimeCrown = function(e) {
                        return v.createElement(V.U, {
                            className: "top-nav__prime",
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                x: .5
                            },
                            alignSelf: V.d.Center,
                            flexWrap: V.K.NoWrap
                        }, !e && v.createElement(De.b, null))
                    }, t.saveEllipsisRef = function(e) {
                        return t.ellipsisMenu = e
                    }, t.onNavigationClicked = function() {
                        t.ellipsisMenu.toggleBalloon(!1)
                    }, t.renderBrowseLink = function(e) {
                        var t = e.match,
                            n = t && "following" !== t.params.subpage,
                            i = Object(k.d)("Browse", "TopNav");
                        return v.createElement(d.a, {
                            className: "top-nav__nav-link" + (n ? " active" : ""),
                            "data-a-target": "browse-link",
                            title: i,
                            to: {
                                pathname: "/directory",
                                state: {
                                    medium: b.PageviewMedium.TopNav,
                                    content: b.PageviewContent.Games
                                }
                            }
                        }, i)
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    if (this.props.isLoggedIn) {
                        var t = Object(k.d)("Following", "TopNav");
                        e = v.createElement(d.b, {
                            activeClassName: "active",
                            to: {
                                pathname: "/directory/following",
                                state: {
                                    medium: b.PageviewMedium.TopNav,
                                    content: b.PageviewContent.Following
                                }
                            },
                            className: "top-nav__nav-link",
                            "data-a-target": "following-link",
                            title: t
                        }, t)
                    }
                    return v.createElement(V.P, {
                        position: V._2.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, v.createElement("nav", {
                        className: "top-nav",
                        "data-a-target": "top-nav-container",
                        style: {
                            height: "5rem"
                        }
                    }, v.createElement(V.U, {
                        className: "top-nav__menu",
                        display: V.H.Flex,
                        alignItems: V.c.Stretch,
                        flexWrap: V.K.NoWrap
                    }, v.createElement(V.P, {
                        display: V.H.InlineFlex,
                        alignItems: V.c.Center,
                        flexShrink: 0
                    }, v.createElement(d.a, {
                        to: {
                            pathname: "/",
                            state: {
                                medium: b.PageviewMedium.TopNav,
                                content: b.PageviewContent.Logo
                            }
                        },
                        className: "top-nav__home-link",
                        "data-a-target": "home-link"
                    }, v.createElement(V._8, {
                        asset: V._9.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), v.createElement(V.U, {
                        className: "top-nav__nav-items-container",
                        display: V.H.Flex,
                        flexGrow: 1,
                        flexWrap: V.K.NoWrap,
                        flexShrink: 0
                    }, e, v.createElement(d.d, {
                        path: "/directory/:subpage?",
                        children: this.renderBrowseLink
                    }), v.createElement("a", {
                        href: "https://app.twitch.tv/download",
                        "data-a-target": "get-desktop-link",
                        className: "top-nav__nav-link"
                    }, Object(k.d)("Get Desktop", "TopNav")), v.createElement(ue, null), v.createElement(re, null), v.createElement(V.U, {
                        className: "top-nav__ellipsis-button",
                        display: V.H.Flex,
                        alignItems: V.c.Center
                    }, v.createElement(_.a, {
                        ref: this.saveEllipsisRef
                    }, v.createElement(V.v, {
                        icon: V._9.NavMore,
                        overlay: !0,
                        ariaLabel: Object(k.d)("More nav items", "TopNav"),
                        "data-a-target": "ellipsis-button"
                    }), v.createElement(V.p, {
                        direction: V.q.Bottom,
                        tailOffset: 7,
                        size: V.r.Small,
                        "data-a-target": "overflow-menu"
                    }, v.createElement(V.U, {
                        padding: 1
                    }, v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/about",
                        "data-a-target": "about-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("About", "TopNav"))), v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "http://twitchadvertising.tv/",
                        "data-a-target": "advertisers-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Advertisers", "TopNav"))), v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "https://blog.twitch.tv/",
                        "data-a-target": "blog-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Blog", "TopNav"))), v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/legal/community-guidelines",
                        "data-a-target": "community-guidelines-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Community Guidelines", "TopNav"))), v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/cookie-policy",
                        "data-a-target": "cookie-policy-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Cookie Policy", "TopNav"))), v.createElement(V.S, {
                        onClick: this.onNavigationClicked,
                        linkTo: "/directory/game/Creative",
                        "data-a-target": "creative-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Creative", "TopNav"))), v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "https://dev.twitch.tv/",
                        "data-a-target": "developers-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Developers", "TopNav"))), v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/",
                        "data-a-target": "help-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Help", "TopNav"))), v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/jobs",
                        "data-a-target": "jobs-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Jobs", "TopNav"))), v.createElement(_.a, {
                        display: V.H.Block
                    }, v.createElement(V.S, {
                        "data-target": "language-selector-click",
                        "data-a-target": "language-selector"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Language", "TopNav"))), v.createElement(V.p, {
                        size: V.r.Small,
                        direction: V.q.Right,
                        offsetY: "4px",
                        offsetX: "20px",
                        "data-target": "language-selector",
                        "data-a-target": "language-selector-menu"
                    }, v.createElement(y.a, null))), v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "https://music.twitch.tv/",
                        "data-a-target": "music-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Music", "TopNav"))), v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/partners",
                        "data-a-target": "partners-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Partners", "TopNav"))), v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/press",
                        "data-a-target": "press-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Press", "TopNav"))), v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "https://twitch.tv/p/security",
                        "data-a-target": "security-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Security", "TopNav"))), v.createElement(V.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/terms-of-service",
                        "data-a-target": "terms-link"
                    }, v.createElement(V.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(k.d)("Terms", "TopNav"))))))), v.createElement(V.U, {
                        className: "top-nav__search",
                        flexGrow: 1,
                        alignSelf: V.d.Center
                    }, v.createElement(Z, null))), this.renderTwitchPrimeCrown(), this.renderOnsiteNotifications(), v.createElement(V.U, {
                        className: "top-nav__nav-items-container",
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        flexWrap: V.K.NoWrap,
                        flexGrow: 0,
                        flexShrink: 0
                    }, this.props.isLoggedIn ? v.createElement(Fe, {
                        logout: this.props.logout
                    }) : v.createElement(ee, {
                        login: this.props.login,
                        signup: this.props.signup
                    })))))
                }, t = h.__decorate([Object(S.c)("TopNav")], t)
            }(v.Component)),
            Ie = Re,
            Te = Object(d.f)(Object(u.a)(l, s)(Ie));
        n.d(t, "a", function() {
            return "5rem"
        }), n.d(t, "b", function() {
            return Te
        })
    },
    400: function(e, t) {},
    402: function(e, t, n) {
        e.exports = n.p + "assets/friend_requests-aec9595d7e19764bc23d982c8c0f43d9.png"
    },
    403: function(e, t) {},
    404: function(e, t) {
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
                end: 106
            }
        };
        n.loc.source = {
            body: "mutation FriendRequestsNotification_Clear {\n  clearUnreadFriendRequests {\n    user {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    405: function(e, t) {
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
                end: 138
            }
        };
        n.loc.source = {
            body: "query FriendRequestsNotification_Query {\n  currentUser {\n    id\n    incomingFriendRequests(first: 1) {\n      totalUnreadCount\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    406: function(e, t) {},
    407: function(e, t) {},
    408: function(e, t) {},
    409: function(e, t) {},
    410: function(e, t) {
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
                end: 128
            }
        };
        n.loc.source = {
            body: "query Search_SearchGameResultCard_Game($name: String!) {\n  game(name: $name) {\n    id\n    boxArtURL(width: 40 height: 55)\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    411: function(e, t) {},
    412: function(e, t) {
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
                end: 174
            }
        };
        n.loc.source = {
            body: "query Search_SearchLiveResultCard_UserStream($login: String!) {\n  user(login: $login) {\n    id\n    stream {\n      id\n      previewImageURL(width: 156 height: 88)\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    413: function(e, t) {},
    414: function(e, t) {},
    415: function(e, t) {},
    416: function(e, t) {},
    417: function(e, t) {},
    418: function(e, t) {
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
                end: 75
            }
        };
        n.loc.source = {
            body: "query TopNav_Store_CurrentUser {\n  currentUser {\n    id\n    hasPrime\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    419: function(e, t) {
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
                end: 130
            }
        };
        n.loc.source = {
            body: "query TopNav_PrimeUpsell_CurrentUser {\n  currentUser {\n    id\n    hasPrime\n    hasTurbo\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    420: function(e, t) {
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
                end: 136
            }
        };
        n.loc.source = {
            body: "mutation ChannelPage_SetSessionStatus($input: SetSessionStatusInput!) {\n  setSessionStatus(input: $input) {\n    setAgainInSeconds\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    421: function(e, t) {
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
                end: 159
            }
        };
        n.loc.source = {
            body: "mutation TopNav_User_UpdateVisibility($input: UpdateVisibilityInput!) {\n  updateVisibility(input: $input) {\n    user {\n      id\n      availability\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    422: function(e, t) {},
    423: function(e, t) {
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
                end: 710
            }
        };
        n.loc.source = {
            body: "query TopNav_User_User {\n  currentUser {\n    id\n    displayName\n    profileImageURL(width: 70)\n    login\n    availability\n    settings {\n      isSharingActivity\n      visibility\n    }\n    activity {\n      type\n      ... on Watching {\n        user {\n          displayName\n          stream {\n            game {\n              name\n            }\n          }\n          hosting {\n            displayName\n            stream {\n              game {\n                name\n              }\n            }\n          }\n        }\n      }\n      ... on Streaming {\n        stream {\n          game {\n            name\n          }\n        }\n      }\n      ... on Playing {\n        game {\n          name\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    424: function(e, t) {
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
                end: 212
            }
        };
        n.loc.source = {
            body: "mutation TopNav_User_UpdateIsSharingActivity($input: UpdateIsSharingActivityInput!) {\n  updateIsSharingActivity(input: $input) {\n    user {\n      id\n      settings {\n        isSharingActivity\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    425: function(e, t) {},
    426: function(e, t) {},
    427: function(e, t) {
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    428: function(e, t) {
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
                end: 63
            }
        };
        n.loc.source = {
            body: "query Current_User {\n  currentUser {\n    id\n    hasPrime\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    429: function(e, t) {},
    430: function(e, t) {
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
                end: 153
            }
        };
        n.loc.source = {
            body: "mutation claimPrimeOffer($input: ClaimPrimeOfferInput!) {\n  claimPrimeOffer(input: $input) {\n    self {\n      claimData\n      hasEntitlement\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    431: function(e, t) {},
    432: function(e, t) {
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
                end: 63
            }
        };
        n.loc.source = {
            body: "query Current_User {\n  currentUser {\n    id\n    hasPrime\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    433: function(e, t) {},
    434: function(e, t) {
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
                end: 333
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOfferList_PrimeOffers {\n  primeOffers {\n    id\n    title\n    imageURL\n    claimInstructions\n    description\n    deliveryMethod\n    priority\n    content {\n      game {\n        id\n        name\n      }\n      externalURL\n      publisher\n      categories\n    }\n    self {\n      hasEntitlement\n      claimData\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    435: function(e, t) {},
    436: function(e, t) {
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
                end: 63
            }
        };
        n.loc.source = {
            body: "query Current_User {\n  currentUser {\n    id\n    hasPrime\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    437: function(e, t) {
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
                end: 123
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_PrimeOfferIds {\n  primeOffers {\n    id\n    self {\n      hasEntitlement\n      claimData\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    438: function(e, t) {},
    439: function(e, t) {
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
                end: 116
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_CurrentUser {\n  currentUser {\n    id\n    hasPrime\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    440: function(e, t) {},
    441: function(e, t) {
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
                end: 274
            }
        };
        n.loc.source = {
            body: "query Prime_BlueBar_CurrentUser($stringIds: [ID!], $dateOverride: Time) {\n  currentUser {\n    id\n    hasPrime\n  }\n  primePromotions (ids: $stringIds, dateOverride: $dateOverride) {\n    id\n    text\n    externalURL\n    isExternalLink\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    442: function(e, t) {},
    455: function(e, t) {
        function n(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (e) {}
            return t
        }

        function i(e) {
            return !!e && "object" == typeof e
        }

        function r(e) {
            if (!i(e) || d.call(e) != a || n(e)) return !1;
            var t = m(e);
            if (null === t) return !0;
            var r = c.call(t, "constructor") && t.constructor;
            return "function" == typeof r && r instanceof r && l.call(r) == u
        }
        var a = "[object Object]",
            o = Function.prototype,
            s = Object.prototype,
            l = o.toString,
            c = s.hasOwnProperty,
            u = l.call(Object),
            d = s.toString,
            m = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }(Object.getPrototypeOf, Object);
        e.exports = r
    },
    548: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            switch (t) {
                case m.FeaturedBroadcastersRenderContext.AnonFront:
                    return s.createElement(u.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Horizontal,
                        showCounts: !0,
                        darkTheme: !0
                    });
                default:
                    return s.createElement(h._17, {
                        className: "featured-content",
                        background: h.m.Base,
                        elevation: 1
                    }, s.createElement(h.U, {
                        padding: 1
                    }, r(n)), s.createElement(u.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Vertical,
                        showCounts: !0
                    }))
            }
        }

        function r(e) {
            return e ? s.createElement(h._21, {
                fontSize: h.L.Size5,
                color: h.F.Alt2
            }, s.createElement(h._1, {
                width: 100
            })) : s.createElement(h._21, {
                fontSize: h.L.Size5,
                color: h.F.Alt2
            }, Object(l.d)("Featured", "FeaturedContentComponent"))
        }

        function a(e) {
            return i([], e, !0)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.placeholderFeaturedBroadcasters = a, n.d(t, "FeaturedContent", function() {
            return k
        });
        var o = n(0),
            s = n(1),
            l = (n.n(s), n(2)),
            c = n(7),
            u = n(1054),
            d = n(873),
            m = n(74),
            p = n(1287),
            f = (n.n(p), n(1055)),
            g = n(5),
            h = n(3);
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return m.FeaturedBroadcastersRenderContext
        });
        var v = function(e) {
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
                }, t = o.__decorate([Object(c.a)(p, {
                    options: function() {
                        return {
                            variables: {
                                language: l.n.intl.getLanguageCode()
                            }
                        }
                    }
                }), Object(g.c)("FeaturedContent")], t)
            }(s.Component),
            k = v
    },
    74: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            r = n(1),
            a = n(914),
            o = n(116),
            s = n(75),
            l = function(e) {
                var t = {
                    name: "TWILIGHT_EXPANDO_FEATURO",
                    assignments: {
                        fallback: function() {
                            return o.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 75))
                            }, "FeaturedBroadcasters")(i.__assign({}, e, {
                                streamCount: 6,
                                showCounts: !1
                            }))
                        },
                        expanded: function() {
                            return o.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 75))
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
    75: function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            switch (t) {
                case a.AnonFront:
                    return s.createElement(u.a, {
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
                    }, Object(l.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), s.createElement(u.a, {
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
            return v
        });
        var a, o = n(0),
            s = n(1),
            l = (n.n(s), n(2)),
            c = n(7),
            u = n(1054),
            d = n(873),
            m = n(1055),
            p = n(5),
            f = n(3),
            g = n(1286);
        n.n(g);
        ! function(e) {
            e[e.AnonFront = 1] = "AnonFront", e[e.Front = 2] = "Front"
        }(a || (a = {}));
        var h = function(e) {
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
                        t = Object(m.a)(e);
                    return this.getRender(t)
                }, t.prototype.postRender = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t = o.__decorate([Object(c.a)(g, {
                    options: function(e) {
                        return {
                            variables: {
                                language: l.n.intl.getLanguageCode(),
                                first: e.streamCount || 6
                            }
                        }
                    }
                }), Object(p.c)("FeaturedBroadcasters")], t)
            }(s.Component),
            v = h
    },
    818: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention", e[e.Ban = 3] = "Ban", e[e.Timeout = 4] = "Timeout", e[e.AutoModRejectedPrompt = 5] = "AutoModRejectedPrompt", e[e.AutoModMessageRejected = 6] = "AutoModMessageRejected", e[e.AutoModMessageAllowed = 7] = "AutoModMessageAllowed", e[e.AutoModMessageDenied = 8] = "AutoModMessageDenied", e[e.Connected = 9] = "Connected", e[e.Disconnected = 10] = "Disconnected", e[e.Reconnect = 11] = "Reconnect", e[e.Hosting = 12] = "Hosting", e[e.Unhost = 13] = "Unhost", e[e.Subscription = 14] = "Subscription", e[e.Resubscription = 15] = "Resubscription", e[e.SubGift = 16] = "SubGift", e[e.Clear = 17] = "Clear", e[e.SubscriberOnlyMode = 18] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 19] = "FollowerOnlyMode", e[e.SlowMode = 20] = "SlowMode", e[e.EmoteOnlyMode = 21] = "EmoteOnlyMode", e[e.RoomMods = 22] = "RoomMods", e[e.RoomState = 23] = "RoomState", e[e.Raid = 24] = "Raid", e[e.Unraid = 25] = "Unraid", e[e.Notice = 26] = "Notice", e[e.Info = 27] = "Info", e[e.BadgesUpdated = 28] = "BadgesUpdated", e[e.Purchase = 29] = "Purchase"
        }(i || (i = {}))
    },
    821: function(e, t, n) {
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
    823: function(e, t, n) {
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
                                    c = a.content_index;
                                l.n.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: c,
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
            s = n(10),
            l = n(2);
        n.d(t, "a", function() {
            return i
        })
    },
    830: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
        }(i || (i = {}))
    },
    870: function(e, t, n) {
        "use strict";
        var i = n(12),
            r = n(1075),
            a = n(925),
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
            l = n(1002),
            c = function(e, t) {
                var n = u(e.embed);
                Object(a.c)(i.SpadeEventType.FeedCardEmbedImpression, n, t)
            },
            u = function(e) {
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
                var n = m(e.embed);
                Object(a.c)(i.SpadeEventType.FeedCardEmbedPlay, n, t)
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
            p = n(2),
            f = function(e, t) {
                var n = {
                    action: e.action,
                    entity: "post:" + e.postID,
                    post_id: e.postID,
                    post_content: e.postContent,
                    composer_location: e.composerLocation
                };
                Object(a.c)(i.SpadeEventType.FeedPost, n, t)
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
            h = function(e, t) {
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
            };
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return d
        }), n.d(t, "d", function() {
            return f
        }), n.d(t, "e", function() {
            return g
        }), n.d(t, "f", function() {
            return h
        })
    },
    871: function(e, t, n) {
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

                function c(e, t) {
                    for (var n = -1, i = null == e ? 0 : e.length; ++n < i && !1 !== t(e[n], n, e););
                    return e
                }

                function u(e, t) {
                    for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
                    return e
                }

                function d(e, t) {
                    for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                        if (!t(e[n], n, e)) return !1;
                    return !0
                }

                function m(e, t) {
                    for (var n = -1, i = null == e ? 0 : e.length, r = 0, a = []; ++n < i;) {
                        var o = e[n];
                        t(o, n, e) && (a[r++] = o)
                    }
                    return a
                }

                function p(e, t) {
                    return !!(null == e ? 0 : e.length) && E(e, t, 0) > -1
                }

                function f(e, t, n) {
                    for (var i = -1, r = null == e ? 0 : e.length; ++i < r;)
                        if (n(t, e[i])) return !0;
                    return !1
                }

                function g(e, t) {
                    for (var n = -1, i = null == e ? 0 : e.length, r = Array(i); ++n < i;) r[n] = t(e[n], n, e);
                    return r
                }

                function h(e, t) {
                    for (var n = -1, i = t.length, r = e.length; ++n < i;) e[r + n] = t[n];
                    return e
                }

                function v(e, t, n, i) {
                    var r = -1,
                        a = null == e ? 0 : e.length;
                    for (i && a && (n = e[++r]); ++r < a;) n = t(n, e[r], r, e);
                    return n
                }

                function k(e, t, n, i) {
                    var r = null == e ? 0 : e.length;
                    for (i && r && (n = e[--r]); r--;) n = t(n, e[r], r, e);
                    return n
                }

                function y(e, t) {
                    for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                        if (t(e[n], n, e)) return !0;
                    return !1
                }

                function _(e) {
                    return e.split("")
                }

                function b(e) {
                    return e.match(Bt) || []
                }

                function S(e, t, n) {
                    var i;
                    return n(e, function(e, n, r) {
                        if (t(e, n, r)) return i = n, !1
                    }), i
                }

                function N(e, t, n, i) {
                    for (var r = e.length, a = n + (i ? 1 : -1); i ? a-- : ++a < r;)
                        if (t(e[a], a, e)) return a;
                    return -1
                }

                function E(e, t, n) {
                    return t === t ? J(e, t, n) : N(e, C, n)
                }

                function w(e, t, n, i) {
                    for (var r = n - 1, a = e.length; ++r < a;)
                        if (i(e[r], t)) return r;
                    return -1
                }

                function C(e) {
                    return e !== e
                }

                function O(e, t) {
                    var n = null == e ? 0 : e.length;
                    return n ? R(e, t) / n : Ae
                }

                function x(e) {
                    return function(t) {
                        return null == t ? re : t[e]
                    }
                }

                function U(e) {
                    return function(t) {
                        return null == e ? re : e[t]
                    }
                }

                function F(e, t, n, i, r) {
                    return r(e, function(e, r, a) {
                        n = i ? (i = !1, e) : t(n, e, r, a)
                    }), n
                }

                function D(e, t) {
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

                function I(e, t) {
                    for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                    return i
                }

                function T(e, t) {
                    return g(t, function(t) {
                        return [t, e[t]]
                    })
                }

                function A(e) {
                    return function(t) {
                        return e(t)
                    }
                }

                function j(e, t) {
                    return g(t, function(t) {
                        return e[t]
                    })
                }

                function L(e, t) {
                    return e.has(t)
                }

                function P(e, t) {
                    for (var n = -1, i = e.length; ++n < i && E(t, e[n], 0) > -1;);
                    return n
                }

                function V(e, t) {
                    for (var n = e.length; n-- && E(t, e[n], 0) > -1;);
                    return n
                }

                function B(e, t) {
                    for (var n = e.length, i = 0; n--;) e[n] === t && ++i;
                    return i
                }

                function M(e) {
                    return "\\" + xn[e]
                }

                function H(e, t) {
                    return null == e ? re : e[t]
                }

                function q(e) {
                    return yn.test(e)
                }

                function z(e) {
                    return _n.test(e)
                }

                function W(e) {
                    for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                    return n
                }

                function G(e) {
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
                        o !== t && o !== ue || (e[n] = ue, a[r++] = n)
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

                function J(e, t, n) {
                    for (var i = n - 1, r = e.length; ++i < r;)
                        if (e[i] === t) return i;
                    return -1
                }

                function Z(e, t, n) {
                    for (var i = n + 1; i--;)
                        if (e[i] === t) return i;
                    return i
                }

                function X(e) {
                    return q(e) ? te(e) : Wn(e)
                }

                function ee(e) {
                    return q(e) ? ne(e) : _(e)
                }

                function te(e) {
                    for (var t = vn.lastIndex = 0; vn.test(e);) ++t;
                    return t
                }

                function ne(e) {
                    return e.match(vn) || []
                }

                function ie(e) {
                    return e.match(kn) || []
                }
                var re, ae = 200,
                    oe = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                    se = "Expected a function",
                    le = "__lodash_hash_undefined__",
                    ce = 500,
                    ue = "__lodash_placeholder__",
                    de = 1,
                    me = 2,
                    pe = 4,
                    fe = 1,
                    ge = 2,
                    he = 1,
                    ve = 2,
                    ke = 4,
                    ye = 8,
                    _e = 16,
                    be = 32,
                    Se = 64,
                    Ne = 128,
                    Ee = 256,
                    we = 512,
                    Ce = 30,
                    Oe = "...",
                    xe = 800,
                    Ue = 16,
                    Fe = 1,
                    De = 2,
                    Re = 1 / 0,
                    Ie = 9007199254740991,
                    Te = 1.7976931348623157e308,
                    Ae = NaN,
                    je = 4294967295,
                    Le = je - 1,
                    Pe = je >>> 1,
                    Ve = [
                        ["ary", Ne],
                        ["bind", he],
                        ["bindKey", ve],
                        ["curry", ye],
                        ["curryRight", _e],
                        ["flip", we],
                        ["partial", be],
                        ["partialRight", Se],
                        ["rearg", Ee]
                    ],
                    Be = "[object Arguments]",
                    Me = "[object Array]",
                    He = "[object AsyncFunction]",
                    qe = "[object Boolean]",
                    ze = "[object Date]",
                    We = "[object DOMException]",
                    Ge = "[object Error]",
                    $e = "[object Function]",
                    Ke = "[object GeneratorFunction]",
                    Qe = "[object Map]",
                    Ye = "[object Number]",
                    Je = "[object Null]",
                    Ze = "[object Object]",
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
                    ct = "[object Float32Array]",
                    ut = "[object Float64Array]",
                    dt = "[object Int8Array]",
                    mt = "[object Int16Array]",
                    pt = "[object Int32Array]",
                    ft = "[object Uint8Array]",
                    gt = "[object Uint8ClampedArray]",
                    ht = "[object Uint16Array]",
                    vt = "[object Uint32Array]",
                    kt = /\b__p \+= '';/g,
                    yt = /\b(__p \+=) '' \+/g,
                    _t = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                    bt = /&(?:amp|lt|gt|quot|#39);/g,
                    St = /[&<>"']/g,
                    Nt = RegExp(bt.source),
                    Et = RegExp(St.source),
                    wt = /<%-([\s\S]+?)%>/g,
                    Ct = /<%([\s\S]+?)%>/g,
                    Ot = /<%=([\s\S]+?)%>/g,
                    xt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    Ut = /^\w*$/,
                    Ft = /^\./,
                    Dt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    Rt = /[\\^$.*+?()[\]{}|]/g,
                    It = RegExp(Rt.source),
                    Tt = /^\s+|\s+$/g,
                    At = /^\s+/,
                    jt = /\s+$/,
                    Lt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                    Pt = /\{\n\/\* \[wrapped with (.+)\] \*/,
                    Vt = /,? & /,
                    Bt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                    Mt = /\\(\\)?/g,
                    Ht = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                    qt = /\w*$/,
                    zt = /^[-+]0x[0-9a-f]+$/i,
                    Wt = /^0b[01]+$/i,
                    Gt = /^\[object .+?Constructor\]$/,
                    $t = /^0o[0-7]+$/i,
                    Kt = /^(?:0|[1-9]\d*)$/,
                    Qt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                    Yt = /($^)/,
                    Jt = /['\n\r\u2028\u2029\\]/g,
                    Zt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                    Xt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                    en = "[" + Xt + "]",
                    tn = "[" + Zt + "]",
                    nn = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                    rn = "[^\\ud800-\\udfff" + Xt + "\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                    an = "\\ud83c[\\udffb-\\udfff]",
                    on = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    sn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    ln = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                    cn = "(?:" + nn + "|" + rn + ")",
                    un = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
                    dn = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", on, sn].join("|") + ")[\\ufe0e\\ufe0f]?" + un + ")*",
                    mn = "[\\ufe0e\\ufe0f]?" + un + dn,
                    pn = "(?:" + ["[\\u2700-\\u27bf]", on, sn].join("|") + ")" + mn,
                    fn = "(?:" + ["[^\\ud800-\\udfff]" + tn + "?", tn, on, sn, "[\\ud800-\\udfff]"].join("|") + ")",
                    gn = RegExp("['’]", "g"),
                    hn = RegExp(tn, "g"),
                    vn = RegExp(an + "(?=" + an + ")|" + fn + mn, "g"),
                    kn = RegExp([ln + "?" + nn + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [en, ln, "$"].join("|") + ")", "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [en, ln + cn, "$"].join("|") + ")", ln + "?" + cn + "+(?:['’](?:d|ll|m|re|s|t|ve))?", ln + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", "\\d+", pn].join("|"), "g"),
                    yn = RegExp("[\\u200d\\ud800-\\udfff" + Zt + "\\ufe0e\\ufe0f]"),
                    _n = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                    bn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                    Sn = -1,
                    Nn = {};
                Nn[ct] = Nn[ut] = Nn[dt] = Nn[mt] = Nn[pt] = Nn[ft] = Nn[gt] = Nn[ht] = Nn[vt] = !0, Nn[Be] = Nn[Me] = Nn[st] = Nn[qe] = Nn[lt] = Nn[ze] = Nn[Ge] = Nn[$e] = Nn[Qe] = Nn[Ye] = Nn[Ze] = Nn[et] = Nn[tt] = Nn[nt] = Nn[at] = !1;
                var En = {};
                En[Be] = En[Me] = En[st] = En[lt] = En[qe] = En[ze] = En[ct] = En[ut] = En[dt] = En[mt] = En[pt] = En[Qe] = En[Ye] = En[Ze] = En[et] = En[tt] = En[nt] = En[it] = En[ft] = En[gt] = En[ht] = En[vt] = !0, En[Ge] = En[$e] = En[at] = !1;
                var wn = {
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
                    Cn = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    },
                    On = {
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&#39;": "'"
                    },
                    xn = {
                        "\\": "\\",
                        "'": "'",
                        "\n": "n",
                        "\r": "r",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                    },
                    Un = parseFloat,
                    Fn = parseInt,
                    Dn = "object" == typeof e && e && e.Object === Object && e,
                    Rn = "object" == typeof self && self && self.Object === Object && self,
                    In = Dn || Rn || Function("return this")(),
                    Tn = "object" == typeof t && t && !t.nodeType && t,
                    An = Tn && "object" == typeof i && i && !i.nodeType && i,
                    jn = An && An.exports === Tn,
                    Ln = jn && Dn.process,
                    Pn = function() {
                        try {
                            return Ln && Ln.binding && Ln.binding("util")
                        } catch (e) {}
                    }(),
                    Vn = Pn && Pn.isArrayBuffer,
                    Bn = Pn && Pn.isDate,
                    Mn = Pn && Pn.isMap,
                    Hn = Pn && Pn.isRegExp,
                    qn = Pn && Pn.isSet,
                    zn = Pn && Pn.isTypedArray,
                    Wn = x("length"),
                    Gn = U(wn),
                    $n = U(Cn),
                    Kn = U(On),
                    Qn = function e(t) {
                        function n(e) {
                            if (al(e) && !hm(e) && !(e instanceof _)) {
                                if (e instanceof r) return e;
                                if (hu.call(e, "__wrapped__")) return to(e)
                            }
                            return new r(e)
                        }

                        function i() {}

                        function r(e, t) {
                            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = re
                        }

                        function _(e) {
                            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = je, this.__views__ = []
                        }

                        function U() {
                            var e = new _(this.__wrapped__);
                            return e.__actions__ = Lr(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Lr(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Lr(this.__views__), e
                        }

                        function J() {
                            if (this.__filtered__) {
                                var e = new _(this);
                                e.__dir__ = -1, e.__filtered__ = !0
                            } else e = this.clone(), e.__dir__ *= -1;
                            return e
                        }

                        function te() {
                            var e = this.__wrapped__.value(),
                                t = this.__dir__,
                                n = hm(e),
                                i = t < 0,
                                r = n ? e.length : 0,
                                a = Ca(0, r, this.__views__),
                                o = a.start,
                                s = a.end,
                                l = s - o,
                                c = i ? s : o - 1,
                                u = this.__iteratees__,
                                d = u.length,
                                m = 0,
                                p = Gu(l, this.__takeCount__);
                            if (!n || !i && r == l && p == l) return kr(e, this.__actions__);
                            var f = [];
                            e: for (; l-- && m < p;) {
                                c += t;
                                for (var g = -1, h = e[c]; ++g < d;) {
                                    var v = u[g],
                                        k = v.iteratee,
                                        y = v.type,
                                        _ = k(h);
                                    if (y == De) h = _;
                                    else if (!_) {
                                        if (y == Fe) continue e;
                                        break e
                                    }
                                }
                                f[m++] = h
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

                        function Bt() {
                            this.__data__ = nd ? nd(null) : {}, this.size = 0
                        }

                        function Zt(e) {
                            var t = this.has(e) && delete this.__data__[e];
                            return this.size -= t ? 1 : 0, t
                        }

                        function Xt(e) {
                            var t = this.__data__;
                            if (nd) {
                                var n = t[e];
                                return n === le ? re : n
                            }
                            return hu.call(t, e) ? t[e] : re
                        }

                        function en(e) {
                            var t = this.__data__;
                            return nd ? t[e] !== re : hu.call(t, e)
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
                            return !(n < 0) && (n == t.length - 1 ? t.pop() : Fu.call(t, n, 1), --this.size, !0)
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

                        function cn(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var i = e[t];
                                this.set(i[0], i[1])
                            }
                        }

                        function un() {
                            this.size = 0, this.__data__ = {
                                hash: new ne,
                                map: new(Zu || nn),
                                string: new ne
                            }
                        }

                        function dn(e) {
                            var t = Sa(this, e).delete(e);
                            return this.size -= t ? 1 : 0, t
                        }

                        function mn(e) {
                            return Sa(this, e).get(e)
                        }

                        function pn(e) {
                            return Sa(this, e).has(e)
                        }

                        function fn(e, t) {
                            var n = Sa(this, e),
                                i = n.size;
                            return n.set(e, t), this.size += n.size == i ? 0 : 1, this
                        }

                        function vn(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.__data__ = new cn; ++t < n;) this.add(e[t])
                        }

                        function kn(e) {
                            return this.__data__.set(e, le), this
                        }

                        function yn(e) {
                            return this.__data__.has(e)
                        }

                        function _n(e) {
                            var t = this.__data__ = new nn(e);
                            this.size = t.size
                        }

                        function wn() {
                            this.__data__ = new nn, this.size = 0
                        }

                        function Cn(e) {
                            var t = this.__data__,
                                n = t.delete(e);
                            return this.size = t.size, n
                        }

                        function On(e) {
                            return this.__data__.get(e)
                        }

                        function xn(e) {
                            return this.__data__.has(e)
                        }

                        function Dn(e, t) {
                            var n = this.__data__;
                            if (n instanceof nn) {
                                var i = n.__data__;
                                if (!Zu || i.length < ae - 1) return i.push([e, t]), this.size = ++n.size, this;
                                n = this.__data__ = new cn(i)
                            }
                            return n.set(e, t), this.size = n.size, this
                        }

                        function Rn(e, t) {
                            var n = hm(e),
                                i = !n && gm(e),
                                r = !n && !i && km(e),
                                a = !n && !i && !r && Nm(e),
                                o = n || i || r || a,
                                s = o ? I(e.length, cu) : [],
                                l = s.length;
                            for (var c in e) !t && !hu.call(e, c) || o && ("length" == c || r && ("offset" == c || "parent" == c) || a && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Ta(c, l)) || s.push(c);
                            return s
                        }

                        function Tn(e) {
                            var t = e.length;
                            return t ? e[Xi(0, t - 1)] : re
                        }

                        function An(e, t) {
                            return Ja(Lr(e), ni(t, 0, e.length))
                        }

                        function Ln(e) {
                            return Ja(Lr(e))
                        }

                        function Pn(e, t, n) {
                            (n === re || Ws(e[t], n)) && (n !== re || t in e) || ei(e, t, n)
                        }

                        function Wn(e, t, n) {
                            var i = e[t];
                            hu.call(e, t) && Ws(i, n) && (n !== re || t in e) || ei(e, t, n)
                        }

                        function Yn(e, t) {
                            for (var n = e.length; n--;)
                                if (Ws(e[n][0], t)) return n;
                            return -1
                        }

                        function Jn(e, t, n, i) {
                            return fd(e, function(e, r, a) {
                                t(i, e, n(e), a)
                            }), i
                        }

                        function Zn(e, t) {
                            return e && Pr(t, Bl(t), e)
                        }

                        function Xn(e, t) {
                            return e && Pr(t, Ml(t), e)
                        }

                        function ei(e, t, n) {
                            "__proto__" == t && Tu ? Tu(e, t, {
                                configurable: !0,
                                enumerable: !0,
                                value: n,
                                writable: !0
                            }) : e[t] = n
                        }

                        function ti(e, t) {
                            for (var n = -1, i = t.length, r = nu(i), a = null == e; ++n < i;) r[n] = a ? re : Ll(e, t[n]);
                            return r
                        }

                        function ni(e, t, n) {
                            return e === e && (n !== re && (e = e <= n ? e : n), t !== re && (e = e >= t ? e : t)), e
                        }

                        function ii(e, t, n, i, r, a) {
                            var o, s = t & de,
                                l = t & me,
                                u = t & pe;
                            if (n && (o = r ? n(e, i, r, a) : n(e)), o !== re) return o;
                            if (!rl(e)) return e;
                            var d = hm(e);
                            if (d) {
                                if (o = Ua(e), !s) return Lr(e, o)
                            } else {
                                var m = Cd(e),
                                    p = m == $e || m == Ke;
                                if (km(e)) return wr(e, s);
                                if (m == Ze || m == Be || p && !r) {
                                    if (o = l || p ? {} : Fa(e), !s) return l ? Br(e, Xn(o, e)) : Vr(e, Zn(o, e))
                                } else {
                                    if (!En[m]) return r ? e : {};
                                    o = Da(e, m, ii, s)
                                }
                            }
                            a || (a = new _n);
                            var f = a.get(e);
                            if (f) return f;
                            a.set(e, o);
                            var g = u ? l ? ka : va : l ? Ml : Bl,
                                h = d ? re : g(e);
                            return c(h || e, function(i, r) {
                                h && (r = i, i = e[r]), Wn(o, r, ii(i, t, n, r, e, a))
                            }), o
                        }

                        function ri(e) {
                            var t = Bl(e);
                            return function(n) {
                                return ai(n, e, t)
                            }
                        }

                        function ai(e, t, n) {
                            var i = n.length;
                            if (null == e) return !i;
                            for (e = su(e); i--;) {
                                var r = n[i],
                                    a = t[r],
                                    o = e[r];
                                if (o === re && !(r in e) || !a(o)) return !1
                            }
                            return !0
                        }

                        function oi(e, t, n) {
                            if ("function" != typeof e) throw new uu(se);
                            return Ud(function() {
                                e.apply(re, n)
                            }, t)
                        }

                        function si(e, t, n, i) {
                            var r = -1,
                                a = p,
                                o = !0,
                                s = e.length,
                                l = [],
                                c = t.length;
                            if (!s) return l;
                            n && (t = g(t, A(n))), i ? (a = f, o = !1) : t.length >= ae && (a = L, o = !1, t = new vn(t));
                            e: for (; ++r < s;) {
                                var u = e[r],
                                    d = null == n ? u : n(u);
                                if (u = i || 0 !== u ? u : 0, o && d === d) {
                                    for (var m = c; m--;)
                                        if (t[m] === d) continue e;
                                    l.push(u)
                                } else a(t, d, i) || l.push(u)
                            }
                            return l
                        }

                        function li(e, t) {
                            var n = !0;
                            return fd(e, function(e, i, r) {
                                return n = !!t(e, i, r)
                            }), n
                        }

                        function ci(e, t, n) {
                            for (var i = -1, r = e.length; ++i < r;) {
                                var a = e[i],
                                    o = t(a);
                                if (null != o && (s === re ? o === o && !hl(o) : n(o, s))) var s = o,
                                    l = a
                            }
                            return l
                        }

                        function ui(e, t, n, i) {
                            var r = e.length;
                            for (n = Sl(n), n < 0 && (n = -n > r ? 0 : r + n), i = i === re || i > r ? r : Sl(i), i < 0 && (i += r), i = n > i ? 0 : Nl(i); n < i;) e[n++] = t;
                            return e
                        }

                        function di(e, t) {
                            var n = [];
                            return fd(e, function(e, i, r) {
                                t(e, i, r) && n.push(e)
                            }), n
                        }

                        function mi(e, t, n, i, r) {
                            var a = -1,
                                o = e.length;
                            for (n || (n = Ia), r || (r = []); ++a < o;) {
                                var s = e[a];
                                t > 0 && n(s) ? t > 1 ? mi(s, t - 1, n, i, r) : h(r, s) : i || (r[r.length] = s)
                            }
                            return r
                        }

                        function pi(e, t) {
                            return e && hd(e, t, Bl)
                        }

                        function fi(e, t) {
                            return e && vd(e, t, Bl)
                        }

                        function gi(e, t) {
                            return m(t, function(t) {
                                return tl(e[t])
                            })
                        }

                        function hi(e, t) {
                            t = Nr(t, e);
                            for (var n = 0, i = t.length; null != e && n < i;) e = e[Za(t[n++])];
                            return n && n == i ? e : re
                        }

                        function vi(e, t, n) {
                            var i = t(e);
                            return hm(e) ? i : h(i, n(e))
                        }

                        function ki(e) {
                            return null == e ? e === re ? rt : Je : Iu && Iu in su(e) ? wa(e) : Wa(e)
                        }

                        function yi(e, t) {
                            return e > t
                        }

                        function _i(e, t) {
                            return null != e && hu.call(e, t)
                        }

                        function bi(e, t) {
                            return null != e && t in su(e)
                        }

                        function Si(e, t, n) {
                            return e >= Gu(t, n) && e < Wu(t, n)
                        }

                        function Ni(e, t, n) {
                            for (var i = n ? f : p, r = e[0].length, a = e.length, o = a, s = nu(a), l = 1 / 0, c = []; o--;) {
                                var u = e[o];
                                o && t && (u = g(u, A(t))), l = Gu(u.length, l), s[o] = !n && (t || r >= 120 && u.length >= 120) ? new vn(o && u) : re
                            }
                            u = e[0];
                            var d = -1,
                                m = s[0];
                            e: for (; ++d < r && c.length < l;) {
                                var h = u[d],
                                    v = t ? t(h) : h;
                                if (h = n || 0 !== h ? h : 0, !(m ? L(m, v) : i(c, v, n))) {
                                    for (o = a; --o;) {
                                        var k = s[o];
                                        if (!(k ? L(k, v) : i(e[o], v, n))) continue e
                                    }
                                    m && m.push(v), c.push(h)
                                }
                            }
                            return c
                        }

                        function Ei(e, t, n, i) {
                            return pi(e, function(e, r, a) {
                                t(i, n(e), r, a)
                            }), i
                        }

                        function wi(e, t, n) {
                            t = Nr(t, e), e = $a(e, t);
                            var i = null == e ? e : e[Za(bo(t))];
                            return null == i ? re : s(i, e, n)
                        }

                        function Ci(e) {
                            return al(e) && ki(e) == Be
                        }

                        function Oi(e) {
                            return al(e) && ki(e) == st
                        }

                        function xi(e) {
                            return al(e) && ki(e) == ze
                        }

                        function Ui(e, t, n, i, r) {
                            return e === t || (null == e || null == t || !al(e) && !al(t) ? e !== e && t !== t : Fi(e, t, n, i, Ui, r))
                        }

                        function Fi(e, t, n, i, r, a) {
                            var o = hm(e),
                                s = hm(t),
                                l = o ? Me : Cd(e),
                                c = s ? Me : Cd(t);
                            l = l == Be ? Ze : l, c = c == Be ? Ze : c;
                            var u = l == Ze,
                                d = c == Ze,
                                m = l == c;
                            if (m && km(e)) {
                                if (!km(t)) return !1;
                                o = !0, u = !1
                            }
                            if (m && !u) return a || (a = new _n), o || Nm(e) ? pa(e, t, n, i, r, a) : fa(e, t, l, n, i, r, a);
                            if (!(n & fe)) {
                                var p = u && hu.call(e, "__wrapped__"),
                                    f = d && hu.call(t, "__wrapped__");
                                if (p || f) {
                                    var g = p ? e.value() : e,
                                        h = f ? t.value() : t;
                                    return a || (a = new _n), r(g, h, n, i, a)
                                }
                            }
                            return !!m && (a || (a = new _n), ga(e, t, n, i, r, a))
                        }

                        function Di(e) {
                            return al(e) && Cd(e) == Qe
                        }

                        function Ri(e, t, n, i) {
                            var r = n.length,
                                a = r,
                                o = !i;
                            if (null == e) return !a;
                            for (e = su(e); r--;) {
                                var s = n[r];
                                if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
                            }
                            for (; ++r < a;) {
                                s = n[r];
                                var l = s[0],
                                    c = e[l],
                                    u = s[1];
                                if (o && s[2]) {
                                    if (c === re && !(l in e)) return !1
                                } else {
                                    var d = new _n;
                                    if (i) var m = i(c, u, l, e, t, d);
                                    if (!(m === re ? Ui(u, c, fe | ge, i, d) : m)) return !1
                                }
                            }
                            return !0
                        }

                        function Ii(e) {
                            return !(!rl(e) || Va(e)) && (tl(e) ? Su : Gt).test(Xa(e))
                        }

                        function Ti(e) {
                            return al(e) && ki(e) == et
                        }

                        function Ai(e) {
                            return al(e) && Cd(e) == tt
                        }

                        function ji(e) {
                            return al(e) && il(e.length) && !!Nn[ki(e)]
                        }

                        function Li(e) {
                            return "function" == typeof e ? e : null == e ? Fc : "object" == typeof e ? hm(e) ? qi(e[0], e[1]) : Hi(e) : Pc(e)
                        }

                        function Pi(e) {
                            if (!Ba(e)) return zu(e);
                            var t = [];
                            for (var n in su(e)) hu.call(e, n) && "constructor" != n && t.push(n);
                            return t
                        }

                        function Vi(e) {
                            if (!rl(e)) return za(e);
                            var t = Ba(e),
                                n = [];
                            for (var i in e)("constructor" != i || !t && hu.call(e, i)) && n.push(i);
                            return n
                        }

                        function Bi(e, t) {
                            return e < t
                        }

                        function Mi(e, t) {
                            var n = -1,
                                i = Gs(e) ? nu(e.length) : [];
                            return fd(e, function(e, r, a) {
                                i[++n] = t(e, r, a)
                            }), i
                        }

                        function Hi(e) {
                            var t = Na(e);
                            return 1 == t.length && t[0][2] ? Ha(t[0][0], t[0][1]) : function(n) {
                                return n === e || Ri(n, e, t)
                            }
                        }

                        function qi(e, t) {
                            return ja(e) && Ma(t) ? Ha(Za(e), t) : function(n) {
                                var i = Ll(n, e);
                                return i === re && i === t ? Vl(n, e) : Ui(t, i, fe | ge)
                            }
                        }

                        function zi(e, t, n, i, r) {
                            e !== t && hd(t, function(a, o) {
                                if (rl(a)) r || (r = new _n), Wi(e, t, o, n, zi, i, r);
                                else {
                                    var s = i ? i(e[o], a, o + "", e, t, r) : re;
                                    s === re && (s = a), Pn(e, o, s)
                                }
                            }, Ml)
                        }

                        function Wi(e, t, n, i, r, a, o) {
                            var s = e[n],
                                l = t[n],
                                c = o.get(l);
                            if (c) return void Pn(e, n, c);
                            var u = a ? a(s, l, n + "", e, t, o) : re,
                                d = u === re;
                            if (d) {
                                var m = hm(l),
                                    p = !m && km(l),
                                    f = !m && !p && Nm(l);
                                u = l, m || p || f ? hm(s) ? u = s : $s(s) ? u = Lr(s) : p ? (d = !1, u = wr(l, !0)) : f ? (d = !1, u = Rr(l, !0)) : u = [] : pl(l) || gm(l) ? (u = s, gm(s) ? u = wl(s) : (!rl(s) || i && tl(s)) && (u = Fa(l))) : d = !1
                            }
                            d && (o.set(l, u), r(u, l, i, a, o), o.delete(l)), Pn(e, n, u)
                        }

                        function Gi(e, t) {
                            var n = e.length;
                            if (n) return t += t < 0 ? n : 0, Ta(t, n) ? e[t] : re
                        }

                        function $i(e, t, n) {
                            var i = -1;
                            return t = g(t.length ? t : [Fc], A(ba())), D(Mi(e, function(e, n, r) {
                                return {
                                    criteria: g(t, function(t) {
                                        return t(e)
                                    }),
                                    index: ++i,
                                    value: e
                                }
                            }), function(e, t) {
                                return Tr(e, t, n)
                            })
                        }

                        function Ki(e, t) {
                            return Qi(e, t, function(t, n) {
                                return Vl(e, n)
                            })
                        }

                        function Qi(e, t, n) {
                            for (var i = -1, r = t.length, a = {}; ++i < r;) {
                                var o = t[i],
                                    s = hi(e, o);
                                n(s, o) && ar(a, Nr(o, e), s)
                            }
                            return a
                        }

                        function Yi(e) {
                            return function(t) {
                                return hi(t, e)
                            }
                        }

                        function Ji(e, t, n, i) {
                            var r = i ? w : E,
                                a = -1,
                                o = t.length,
                                s = e;
                            for (e === t && (t = Lr(t)), n && (s = g(e, A(n))); ++a < o;)
                                for (var l = 0, c = t[a], u = n ? n(c) : c;
                                    (l = r(s, u, l, i)) > -1;) s !== e && Fu.call(s, l, 1), Fu.call(e, l, 1);
                            return e
                        }

                        function Zi(e, t) {
                            for (var n = e ? t.length : 0, i = n - 1; n--;) {
                                var r = t[n];
                                if (n == i || r !== a) {
                                    var a = r;
                                    Ta(r) ? Fu.call(e, r, 1) : gr(e, r)
                                }
                            }
                            return e
                        }

                        function Xi(e, t) {
                            return e + Vu(Qu() * (t - e + 1))
                        }

                        function er(e, t, n, i) {
                            for (var r = -1, a = Wu(Pu((t - e) / (n || 1)), 0), o = nu(a); a--;) o[i ? a : ++r] = e, e += n;
                            return o
                        }

                        function tr(e, t) {
                            var n = "";
                            if (!e || t < 1 || t > Ie) return n;
                            do {
                                t % 2 && (n += e), (t = Vu(t / 2)) && (e += e)
                            } while (t);
                            return n
                        }

                        function nr(e, t) {
                            return Fd(Ga(e, t, Fc), e + "")
                        }

                        function ir(e) {
                            return Tn(Xl(e))
                        }

                        function rr(e, t) {
                            var n = Xl(e);
                            return Ja(n, ni(t, 0, n.length))
                        }

                        function ar(e, t, n, i) {
                            if (!rl(e)) return e;
                            t = Nr(t, e);
                            for (var r = -1, a = t.length, o = a - 1, s = e; null != s && ++r < a;) {
                                var l = Za(t[r]),
                                    c = n;
                                if (r != o) {
                                    var u = s[l];
                                    c = i ? i(u, l, s) : re, c === re && (c = rl(u) ? u : Ta(t[r + 1]) ? [] : {})
                                }
                                Wn(s, l, c), s = s[l]
                            }
                            return e
                        }

                        function or(e) {
                            return Ja(Xl(e))
                        }

                        function sr(e, t, n) {
                            var i = -1,
                                r = e.length;
                            t < 0 && (t = -t > r ? 0 : r + t), n = n > r ? r : n, n < 0 && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
                            for (var a = nu(r); ++i < r;) a[i] = e[i + t];
                            return a
                        }

                        function lr(e, t) {
                            var n;
                            return fd(e, function(e, i, r) {
                                return !(n = t(e, i, r))
                            }), !!n
                        }

                        function cr(e, t, n) {
                            var i = 0,
                                r = null == e ? i : e.length;
                            if ("number" == typeof t && t === t && r <= Pe) {
                                for (; i < r;) {
                                    var a = i + r >>> 1,
                                        o = e[a];
                                    null !== o && !hl(o) && (n ? o <= t : o < t) ? i = a + 1 : r = a
                                }
                                return r
                            }
                            return ur(e, t, Fc, n)
                        }

                        function ur(e, t, n, i) {
                            t = n(t);
                            for (var r = 0, a = null == e ? 0 : e.length, o = t !== t, s = null === t, l = hl(t), c = t === re; r < a;) {
                                var u = Vu((r + a) / 2),
                                    d = n(e[u]),
                                    m = d !== re,
                                    p = null === d,
                                    f = d === d,
                                    g = hl(d);
                                if (o) var h = i || f;
                                else h = c ? f && (i || m) : s ? f && m && (i || !p) : l ? f && m && !p && (i || !g) : !p && !g && (i ? d <= t : d < t);
                                h ? r = u + 1 : a = u
                            }
                            return Gu(a, Le)
                        }

                        function dr(e, t) {
                            for (var n = -1, i = e.length, r = 0, a = []; ++n < i;) {
                                var o = e[n],
                                    s = t ? t(o) : o;
                                if (!n || !Ws(s, l)) {
                                    var l = s;
                                    a[r++] = 0 === o ? 0 : o
                                }
                            }
                            return a
                        }

                        function mr(e) {
                            return "number" == typeof e ? e : hl(e) ? Ae : +e
                        }

                        function pr(e) {
                            if ("string" == typeof e) return e;
                            if (hm(e)) return g(e, pr) + "";
                            if (hl(e)) return md ? md.call(e) : "";
                            var t = e + "";
                            return "0" == t && 1 / e == -Re ? "-0" : t
                        }

                        function fr(e, t, n) {
                            var i = -1,
                                r = p,
                                a = e.length,
                                o = !0,
                                s = [],
                                l = s;
                            if (n) o = !1, r = f;
                            else if (a >= ae) {
                                var c = t ? null : Sd(e);
                                if (c) return Q(c);
                                o = !1, r = L, l = new vn
                            } else l = t ? [] : s;
                            e: for (; ++i < a;) {
                                var u = e[i],
                                    d = t ? t(u) : u;
                                if (u = n || 0 !== u ? u : 0, o && d === d) {
                                    for (var m = l.length; m--;)
                                        if (l[m] === d) continue e;
                                    t && l.push(d), s.push(u)
                                } else r(l, d, n) || (l !== s && l.push(d), s.push(u))
                            }
                            return s
                        }

                        function gr(e, t) {
                            return t = Nr(t, e), null == (e = $a(e, t)) || delete e[Za(bo(t))]
                        }

                        function hr(e, t, n, i) {
                            return ar(e, t, n(hi(e, t)), i)
                        }

                        function vr(e, t, n, i) {
                            for (var r = e.length, a = i ? r : -1;
                                (i ? a-- : ++a < r) && t(e[a], a, e););
                            return n ? sr(e, i ? 0 : a, i ? a + 1 : r) : sr(e, i ? a + 1 : 0, i ? r : a)
                        }

                        function kr(e, t) {
                            var n = e;
                            return n instanceof _ && (n = n.value()), v(t, function(e, t) {
                                return t.func.apply(t.thisArg, h([e], t.args))
                            }, n)
                        }

                        function yr(e, t, n) {
                            var i = e.length;
                            if (i < 2) return i ? fr(e[0]) : [];
                            for (var r = -1, a = nu(i); ++r < i;)
                                for (var o = e[r], s = -1; ++s < i;) s != r && (a[r] = si(a[r] || o, e[s], t, n));
                            return fr(mi(a, 1), t, n)
                        }

                        function _r(e, t, n) {
                            for (var i = -1, r = e.length, a = t.length, o = {}; ++i < r;) {
                                var s = i < a ? t[i] : re;
                                n(o, e[i], s)
                            }
                            return o
                        }

                        function br(e) {
                            return $s(e) ? e : []
                        }

                        function Sr(e) {
                            return "function" == typeof e ? e : Fc
                        }

                        function Nr(e, t) {
                            return hm(e) ? e : ja(e, t) ? [e] : Dd(Ol(e))
                        }

                        function Er(e, t, n) {
                            var i = e.length;
                            return n = n === re ? i : n, !t && n >= i ? e : sr(e, t, n)
                        }

                        function wr(e, t) {
                            if (t) return e.slice();
                            var n = e.length,
                                i = Cu ? Cu(n) : new e.constructor(n);
                            return e.copy(i), i
                        }

                        function Cr(e) {
                            var t = new e.constructor(e.byteLength);
                            return new wu(t).set(new wu(e)), t
                        }

                        function Or(e, t) {
                            var n = t ? Cr(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.byteLength)
                        }

                        function xr(e, t, n) {
                            return v(t ? n(G(e), de) : G(e), a, new e.constructor)
                        }

                        function Ur(e) {
                            var t = new e.constructor(e.source, qt.exec(e));
                            return t.lastIndex = e.lastIndex, t
                        }

                        function Fr(e, t, n) {
                            return v(t ? n(Q(e), de) : Q(e), o, new e.constructor)
                        }

                        function Dr(e) {
                            return dd ? su(dd.call(e)) : {}
                        }

                        function Rr(e, t) {
                            var n = t ? Cr(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.length)
                        }

                        function Ir(e, t) {
                            if (e !== t) {
                                var n = e !== re,
                                    i = null === e,
                                    r = e === e,
                                    a = hl(e),
                                    o = t !== re,
                                    s = null === t,
                                    l = t === t,
                                    c = hl(t);
                                if (!s && !c && !a && e > t || a && o && l && !s && !c || i && o && l || !n && l || !r) return 1;
                                if (!i && !a && !c && e < t || c && n && r && !i && !a || s && n && r || !o && r || !l) return -1
                            }
                            return 0
                        }

                        function Tr(e, t, n) {
                            for (var i = -1, r = e.criteria, a = t.criteria, o = r.length, s = n.length; ++i < o;) {
                                var l = Ir(r[i], a[i]);
                                if (l) {
                                    if (i >= s) return l;
                                    return l * ("desc" == n[i] ? -1 : 1)
                                }
                            }
                            return e.index - t.index
                        }

                        function Ar(e, t, n, i) {
                            for (var r = -1, a = e.length, o = n.length, s = -1, l = t.length, c = Wu(a - o, 0), u = nu(l + c), d = !i; ++s < l;) u[s] = t[s];
                            for (; ++r < o;)(d || r < a) && (u[n[r]] = e[r]);
                            for (; c--;) u[s++] = e[r++];
                            return u
                        }

                        function jr(e, t, n, i) {
                            for (var r = -1, a = e.length, o = -1, s = n.length, l = -1, c = t.length, u = Wu(a - s, 0), d = nu(u + c), m = !i; ++r < u;) d[r] = e[r];
                            for (var p = r; ++l < c;) d[p + l] = t[l];
                            for (; ++o < s;)(m || r < a) && (d[p + n[o]] = e[r++]);
                            return d
                        }

                        function Lr(e, t) {
                            var n = -1,
                                i = e.length;
                            for (t || (t = nu(i)); ++n < i;) t[n] = e[n];
                            return t
                        }

                        function Pr(e, t, n, i) {
                            var r = !n;
                            n || (n = {});
                            for (var a = -1, o = t.length; ++a < o;) {
                                var s = t[a],
                                    l = i ? i(n[s], e[s], s, n, e) : re;
                                l === re && (l = e[s]), r ? ei(n, s, l) : Wn(n, s, l)
                            }
                            return n
                        }

                        function Vr(e, t) {
                            return Pr(e, Ed(e), t)
                        }

                        function Br(e, t) {
                            return Pr(e, wd(e), t)
                        }

                        function Mr(e, t) {
                            return function(n, i) {
                                var r = hm(n) ? l : Jn,
                                    a = t ? t() : {};
                                return r(n, e, ba(i, 2), a)
                            }
                        }

                        function Hr(e) {
                            return nr(function(t, n) {
                                var i = -1,
                                    r = n.length,
                                    a = r > 1 ? n[r - 1] : re,
                                    o = r > 2 ? n[2] : re;
                                for (a = e.length > 3 && "function" == typeof a ? (r--, a) : re, o && Aa(n[0], n[1], o) && (a = r < 3 ? re : a, r = 1), t = su(t); ++i < r;) {
                                    var s = n[i];
                                    s && e(t, s, i, a)
                                }
                                return t
                            })
                        }

                        function qr(e, t) {
                            return function(n, i) {
                                if (null == n) return n;
                                if (!Gs(n)) return e(n, i);
                                for (var r = n.length, a = t ? r : -1, o = su(n);
                                    (t ? a-- : ++a < r) && !1 !== i(o[a], a, o););
                                return n
                            }
                        }

                        function zr(e) {
                            return function(t, n, i) {
                                for (var r = -1, a = su(t), o = i(t), s = o.length; s--;) {
                                    var l = o[e ? s : ++r];
                                    if (!1 === n(a[l], l, a)) break
                                }
                                return t
                            }
                        }

                        function Wr(e, t, n) {
                            function i() {
                                return (this && this !== In && this instanceof i ? a : e).apply(r ? n : this, arguments)
                            }
                            var r = t & he,
                                a = Kr(e);
                            return i
                        }

                        function Gr(e) {
                            return function(t) {
                                t = Ol(t);
                                var n = q(t) ? ee(t) : re,
                                    i = n ? n[0] : t.charAt(0),
                                    r = n ? Er(n, 1).join("") : t.slice(1);
                                return i[e]() + r
                            }
                        }

                        function $r(e) {
                            return function(t) {
                                return v(wc(ac(t).replace(gn, "")), e, "")
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
                                var n = pd(e.prototype),
                                    i = e.apply(n, t);
                                return rl(i) ? i : n
                            }
                        }

                        function Qr(e, t, n) {
                            function i() {
                                for (var a = arguments.length, o = nu(a), l = a, c = _a(i); l--;) o[l] = arguments[l];
                                var u = a < 3 && o[0] !== c && o[a - 1] !== c ? [] : K(o, c);
                                return (a -= u.length) < n ? oa(e, t, Zr, i.placeholder, re, o, u, re, re, n - a) : s(this && this !== In && this instanceof i ? r : e, this, o)
                            }
                            var r = Kr(e);
                            return i
                        }

                        function Yr(e) {
                            return function(t, n, i) {
                                var r = su(t);
                                if (!Gs(t)) {
                                    var a = ba(n, 3);
                                    t = Bl(t), n = function(e) {
                                        return a(r[e], e, r)
                                    }
                                }
                                var o = e(t, n, i);
                                return o > -1 ? r[a ? t[o] : o] : re
                            }
                        }

                        function Jr(e) {
                            return ha(function(t) {
                                var n = t.length,
                                    i = n,
                                    a = r.prototype.thru;
                                for (e && t.reverse(); i--;) {
                                    var o = t[i];
                                    if ("function" != typeof o) throw new uu(se);
                                    if (a && !s && "wrapper" == ya(o)) var s = new r([], !0)
                                }
                                for (i = s ? i : n; ++i < n;) {
                                    o = t[i];
                                    var l = ya(o),
                                        c = "wrapper" == l ? Nd(o) : re;
                                    s = c && Pa(c[0]) && c[1] == (Ne | ye | be | Ee) && !c[4].length && 1 == c[9] ? s[ya(c[0])].apply(s, c[3]) : 1 == o.length && Pa(o) ? s[l]() : s.thru(o)
                                }
                                return function() {
                                    var e = arguments,
                                        i = e[0];
                                    if (s && 1 == e.length && hm(i)) return s.plant(i).value();
                                    for (var r = 0, a = n ? t[r].apply(this, e) : i; ++r < n;) a = t[r].call(this, a);
                                    return a
                                }
                            })
                        }

                        function Zr(e, t, n, i, r, a, o, s, l, c) {
                            function u() {
                                for (var v = arguments.length, k = nu(v), y = v; y--;) k[y] = arguments[y];
                                if (f) var _ = _a(u),
                                    b = B(k, _);
                                if (i && (k = Ar(k, i, r, f)), a && (k = jr(k, a, o, f)), v -= b, f && v < c) {
                                    var S = K(k, _);
                                    return oa(e, t, Zr, u.placeholder, n, k, S, s, l, c - v)
                                }
                                var N = m ? n : this,
                                    E = p ? N[e] : e;
                                return v = k.length, s ? k = Ka(k, s) : g && v > 1 && k.reverse(), d && l < v && (k.length = l), this && this !== In && this instanceof u && (E = h || Kr(E)), E.apply(N, k)
                            }
                            var d = t & Ne,
                                m = t & he,
                                p = t & ve,
                                f = t & (ye | _e),
                                g = t & we,
                                h = p ? re : Kr(e);
                            return u
                        }

                        function Xr(e, t) {
                            return function(n, i) {
                                return Ei(n, e, t(i), {})
                            }
                        }

                        function ea(e, t) {
                            return function(n, i) {
                                var r;
                                if (n === re && i === re) return t;
                                if (n !== re && (r = n), i !== re) {
                                    if (r === re) return i;
                                    "string" == typeof n || "string" == typeof i ? (n = pr(n), i = pr(i)) : (n = mr(n), i = mr(i)), r = e(n, i)
                                }
                                return r
                            }
                        }

                        function ta(e) {
                            return ha(function(t) {
                                return t = g(t, A(ba())), nr(function(n) {
                                    var i = this;
                                    return e(t, function(e) {
                                        return s(e, i, n)
                                    })
                                })
                            })
                        }

                        function na(e, t) {
                            t = t === re ? " " : pr(t);
                            var n = t.length;
                            if (n < 2) return n ? tr(t, e) : t;
                            var i = tr(t, Pu(e / X(t)));
                            return q(t) ? Er(ee(i), 0, e).join("") : i.slice(0, e)
                        }

                        function ia(e, t, n, i) {
                            function r() {
                                for (var t = -1, l = arguments.length, c = -1, u = i.length, d = nu(u + l), m = this && this !== In && this instanceof r ? o : e; ++c < u;) d[c] = i[c];
                                for (; l--;) d[c++] = arguments[++t];
                                return s(m, a ? n : this, d)
                            }
                            var a = t & he,
                                o = Kr(e);
                            return r
                        }

                        function ra(e) {
                            return function(t, n, i) {
                                return i && "number" != typeof i && Aa(t, n, i) && (n = i = re), t = bl(t), n === re ? (n = t, t = 0) : n = bl(n), i = i === re ? t < n ? 1 : -1 : bl(i), er(t, n, i, e)
                            }
                        }

                        function aa(e) {
                            return function(t, n) {
                                return "string" == typeof t && "string" == typeof n || (t = El(t), n = El(n)), e(t, n)
                            }
                        }

                        function oa(e, t, n, i, r, a, o, s, l, c) {
                            var u = t & ye,
                                d = u ? o : re,
                                m = u ? re : o,
                                p = u ? a : re,
                                f = u ? re : a;
                            t |= u ? be : Se, (t &= ~(u ? Se : be)) & ke || (t &= ~(he | ve));
                            var g = [e, t, r, p, d, f, m, s, l, c],
                                h = n.apply(re, g);
                            return Pa(e) && xd(h, g), h.placeholder = i, Qa(h, e, t)
                        }

                        function sa(e) {
                            var t = ou[e];
                            return function(e, n) {
                                if (e = El(e), n = null == n ? 0 : Gu(Sl(n), 292)) {
                                    var i = (Ol(e) + "e").split("e");
                                    return i = (Ol(t(i[0] + "e" + (+i[1] + n))) + "e").split("e"), +(i[0] + "e" + (+i[1] - n))
                                }
                                return t(e)
                            }
                        }

                        function la(e) {
                            return function(t) {
                                var n = Cd(t);
                                return n == Qe ? G(t) : n == tt ? Y(t) : T(t, e(t))
                            }
                        }

                        function ca(e, t, n, i, r, a, o, s) {
                            var l = t & ve;
                            if (!l && "function" != typeof e) throw new uu(se);
                            var c = i ? i.length : 0;
                            if (c || (t &= ~(be | Se), i = r = re), o = o === re ? o : Wu(Sl(o), 0), s = s === re ? s : Sl(s), c -= r ? r.length : 0, t & Se) {
                                var u = i,
                                    d = r;
                                i = r = re
                            }
                            var m = l ? re : Nd(e),
                                p = [e, t, n, i, r, u, d, a, o, s];
                            if (m && qa(p, m), e = p[0], t = p[1], n = p[2], i = p[3], r = p[4], s = p[9] = p[9] === re ? l ? 0 : e.length : Wu(p[9] - c, 0), !s && t & (ye | _e) && (t &= ~(ye | _e)), t && t != he) f = t == ye || t == _e ? Qr(e, t, s) : t != be && t != (he | be) || r.length ? Zr.apply(re, p) : ia(e, t, n, i);
                            else var f = Wr(e, t, n);
                            return Qa((m ? kd : xd)(f, p), e, t)
                        }

                        function ua(e, t, n, i) {
                            return e === re || Ws(e, pu[n]) && !hu.call(i, n) ? t : e
                        }

                        function da(e, t, n, i, r, a) {
                            return rl(e) && rl(t) && (a.set(t, e), zi(e, t, re, da, a), a.delete(t)), e
                        }

                        function ma(e) {
                            return pl(e) ? re : e
                        }

                        function pa(e, t, n, i, r, a) {
                            var o = n & fe,
                                s = e.length,
                                l = t.length;
                            if (s != l && !(o && l > s)) return !1;
                            var c = a.get(e);
                            if (c && a.get(t)) return c == t;
                            var u = -1,
                                d = !0,
                                m = n & ge ? new vn : re;
                            for (a.set(e, t), a.set(t, e); ++u < s;) {
                                var p = e[u],
                                    f = t[u];
                                if (i) var g = o ? i(f, p, u, t, e, a) : i(p, f, u, e, t, a);
                                if (g !== re) {
                                    if (g) continue;
                                    d = !1;
                                    break
                                }
                                if (m) {
                                    if (!y(t, function(e, t) {
                                            if (!L(m, t) && (p === e || r(p, e, n, i, a))) return m.push(t)
                                        })) {
                                        d = !1;
                                        break
                                    }
                                } else if (p !== f && !r(p, f, n, i, a)) {
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
                                    return !(e.byteLength != t.byteLength || !a(new wu(e), new wu(t)));
                                case qe:
                                case ze:
                                case Ye:
                                    return Ws(+e, +t);
                                case Ge:
                                    return e.name == t.name && e.message == t.message;
                                case et:
                                case nt:
                                    return e == t + "";
                                case Qe:
                                    var s = G;
                                case tt:
                                    var l = i & fe;
                                    if (s || (s = Q), e.size != t.size && !l) return !1;
                                    var c = o.get(e);
                                    if (c) return c == t;
                                    i |= ge, o.set(e, t);
                                    var u = pa(s(e), s(t), i, r, a, o);
                                    return o.delete(e), u;
                                case it:
                                    if (dd) return dd.call(e) == dd.call(t)
                            }
                            return !1
                        }

                        function ga(e, t, n, i, r, a) {
                            var o = n & fe,
                                s = va(e),
                                l = s.length;
                            if (l != va(t).length && !o) return !1;
                            for (var c = l; c--;) {
                                var u = s[c];
                                if (!(o ? u in t : hu.call(t, u))) return !1
                            }
                            var d = a.get(e);
                            if (d && a.get(t)) return d == t;
                            var m = !0;
                            a.set(e, t), a.set(t, e);
                            for (var p = o; ++c < l;) {
                                u = s[c];
                                var f = e[u],
                                    g = t[u];
                                if (i) var h = o ? i(g, f, u, t, e, a) : i(f, g, u, e, t, a);
                                if (!(h === re ? f === g || r(f, g, n, i, a) : h)) {
                                    m = !1;
                                    break
                                }
                                p || (p = "constructor" == u)
                            }
                            if (m && !p) {
                                var v = e.constructor,
                                    k = t.constructor;
                                v != k && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof k && k instanceof k) && (m = !1)
                            }
                            return a.delete(e), a.delete(t), m
                        }

                        function ha(e) {
                            return Fd(Ga(e, re, po), e + "")
                        }

                        function va(e) {
                            return vi(e, Bl, Ed)
                        }

                        function ka(e) {
                            return vi(e, Ml, wd)
                        }

                        function ya(e) {
                            for (var t = e.name + "", n = rd[t], i = hu.call(rd, t) ? n.length : 0; i--;) {
                                var r = n[i],
                                    a = r.func;
                                if (null == a || a == e) return r.name
                            }
                            return t
                        }

                        function _a(e) {
                            return (hu.call(n, "placeholder") ? n : e).placeholder
                        }

                        function ba() {
                            var e = n.iteratee || Dc;
                            return e = e === Dc ? Li : e, arguments.length ? e(arguments[0], arguments[1]) : e
                        }

                        function Sa(e, t) {
                            var n = e.__data__;
                            return La(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                        }

                        function Na(e) {
                            for (var t = Bl(e), n = t.length; n--;) {
                                var i = t[n],
                                    r = e[i];
                                t[n] = [i, r, Ma(r)]
                            }
                            return t
                        }

                        function Ea(e, t) {
                            var n = H(e, t);
                            return Ii(n) ? n : re
                        }

                        function wa(e) {
                            var t = hu.call(e, Iu),
                                n = e[Iu];
                            try {
                                e[Iu] = re;
                                var i = !0
                            } catch (e) {}
                            var r = yu.call(e);
                            return i && (t ? e[Iu] = n : delete e[Iu]), r
                        }

                        function Ca(e, t, n) {
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
                                        t = Gu(t, e + o);
                                        break;
                                    case "takeRight":
                                        e = Wu(e, t - o)
                                }
                            }
                            return {
                                start: e,
                                end: t
                            }
                        }

                        function Oa(e) {
                            var t = e.match(Pt);
                            return t ? t[1].split(Vt) : []
                        }

                        function xa(e, t, n) {
                            t = Nr(t, e);
                            for (var i = -1, r = t.length, a = !1; ++i < r;) {
                                var o = Za(t[i]);
                                if (!(a = null != e && n(e, o))) break;
                                e = e[o]
                            }
                            return a || ++i != r ? a : !!(r = null == e ? 0 : e.length) && il(r) && Ta(o, r) && (hm(e) || gm(e))
                        }

                        function Ua(e) {
                            var t = e.length,
                                n = e.constructor(t);
                            return t && "string" == typeof e[0] && hu.call(e, "index") && (n.index = e.index, n.input = e.input), n
                        }

                        function Fa(e) {
                            return "function" != typeof e.constructor || Ba(e) ? {} : pd(Ou(e))
                        }

                        function Da(e, t, n, i) {
                            var r = e.constructor;
                            switch (t) {
                                case st:
                                    return Cr(e);
                                case qe:
                                case ze:
                                    return new r(+e);
                                case lt:
                                    return Or(e, i);
                                case ct:
                                case ut:
                                case dt:
                                case mt:
                                case pt:
                                case ft:
                                case gt:
                                case ht:
                                case vt:
                                    return Rr(e, i);
                                case Qe:
                                    return xr(e, i, n);
                                case Ye:
                                case nt:
                                    return new r(e);
                                case et:
                                    return Ur(e);
                                case tt:
                                    return Fr(e, i, n);
                                case it:
                                    return Dr(e)
                            }
                        }

                        function Ra(e, t) {
                            var n = t.length;
                            if (!n) return e;
                            var i = n - 1;
                            return t[i] = (n > 1 ? "& " : "") + t[i], t = t.join(n > 2 ? ", " : " "), e.replace(Lt, "{\n/* [wrapped with " + t + "] */\n")
                        }

                        function Ia(e) {
                            return hm(e) || gm(e) || !!(Du && e && e[Du])
                        }

                        function Ta(e, t) {
                            return !!(t = null == t ? Ie : t) && ("number" == typeof e || Kt.test(e)) && e > -1 && e % 1 == 0 && e < t
                        }

                        function Aa(e, t, n) {
                            if (!rl(n)) return !1;
                            var i = typeof t;
                            return !!("number" == i ? Gs(n) && Ta(t, n.length) : "string" == i && t in n) && Ws(n[t], e)
                        }

                        function ja(e, t) {
                            if (hm(e)) return !1;
                            var n = typeof e;
                            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !hl(e)) || (Ut.test(e) || !xt.test(e) || null != t && e in su(t))
                        }

                        function La(e) {
                            var t = typeof e;
                            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                        }

                        function Pa(e) {
                            var t = ya(e),
                                i = n[t];
                            if ("function" != typeof i || !(t in _.prototype)) return !1;
                            if (e === i) return !0;
                            var r = Nd(i);
                            return !!r && e === r[0]
                        }

                        function Va(e) {
                            return !!ku && ku in e
                        }

                        function Ba(e) {
                            var t = e && e.constructor;
                            return e === ("function" == typeof t && t.prototype || pu)
                        }

                        function Ma(e) {
                            return e === e && !rl(e)
                        }

                        function Ha(e, t) {
                            return function(n) {
                                return null != n && (n[e] === t && (t !== re || e in su(n)))
                            }
                        }

                        function qa(e, t) {
                            var n = e[1],
                                i = t[1],
                                r = n | i,
                                a = r < (he | ve | Ne),
                                o = i == Ne && n == ye || i == Ne && n == Ee && e[7].length <= t[8] || i == (Ne | Ee) && t[7].length <= t[8] && n == ye;
                            if (!a && !o) return e;
                            i & he && (e[2] = t[2], r |= n & he ? 0 : ke);
                            var s = t[3];
                            if (s) {
                                var l = e[3];
                                e[3] = l ? Ar(l, s, t[4]) : s, e[4] = l ? K(e[3], ue) : t[4]
                            }
                            return s = t[5], s && (l = e[5], e[5] = l ? jr(l, s, t[6]) : s, e[6] = l ? K(e[5], ue) : t[6]), s = t[7], s && (e[7] = s), i & Ne && (e[8] = null == e[8] ? t[8] : Gu(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = r, e
                        }

                        function za(e) {
                            var t = [];
                            if (null != e)
                                for (var n in su(e)) t.push(n);
                            return t
                        }

                        function Wa(e) {
                            return yu.call(e)
                        }

                        function Ga(e, t, n) {
                            return t = Wu(t === re ? e.length - 1 : t, 0),
                                function() {
                                    for (var i = arguments, r = -1, a = Wu(i.length - t, 0), o = nu(a); ++r < a;) o[r] = i[t + r];
                                    r = -1;
                                    for (var l = nu(t + 1); ++r < t;) l[r] = i[r];
                                    return l[t] = n(o), s(e, this, l)
                                }
                        }

                        function $a(e, t) {
                            return t.length < 2 ? e : hi(e, sr(t, 0, -1))
                        }

                        function Ka(e, t) {
                            for (var n = e.length, i = Gu(t.length, n), r = Lr(e); i--;) {
                                var a = t[i];
                                e[i] = Ta(a, n) ? r[a] : re
                            }
                            return e
                        }

                        function Qa(e, t, n) {
                            var i = t + "";
                            return Fd(e, Ra(i, eo(Oa(i), n)))
                        }

                        function Ya(e) {
                            var t = 0,
                                n = 0;
                            return function() {
                                var i = $u(),
                                    r = Ue - (i - n);
                                if (n = i, r > 0) {
                                    if (++t >= xe) return arguments[0]
                                } else t = 0;
                                return e.apply(re, arguments)
                            }
                        }

                        function Ja(e, t) {
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

                        function Za(e) {
                            if ("string" == typeof e || hl(e)) return e;
                            var t = e + "";
                            return "0" == t && 1 / e == -Re ? "-0" : t
                        }

                        function Xa(e) {
                            if (null != e) {
                                try {
                                    return gu.call(e)
                                } catch (e) {}
                                try {
                                    return e + ""
                                } catch (e) {}
                            }
                            return ""
                        }

                        function eo(e, t) {
                            return c(Ve, function(n) {
                                var i = "_." + n[0];
                                t & n[1] && !p(e, i) && e.push(i)
                            }), e.sort()
                        }

                        function to(e) {
                            if (e instanceof _) return e.clone();
                            var t = new r(e.__wrapped__, e.__chain__);
                            return t.__actions__ = Lr(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                        }

                        function no(e, t, n) {
                            t = (n ? Aa(e, t, n) : t === re) ? 1 : Wu(Sl(t), 0);
                            var i = null == e ? 0 : e.length;
                            if (!i || t < 1) return [];
                            for (var r = 0, a = 0, o = nu(Pu(i / t)); r < i;) o[a++] = sr(e, r, r += t);
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
                            for (var t = nu(e - 1), n = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                            return h(hm(n) ? Lr(n) : [n], mi(t, 1))
                        }

                        function ao(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? (t = n || t === re ? 1 : Sl(t), sr(e, t < 0 ? 0 : t, i)) : []
                        }

                        function oo(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? (t = n || t === re ? 1 : Sl(t), t = i - t, sr(e, 0, t < 0 ? 0 : t)) : []
                        }

                        function so(e, t) {
                            return e && e.length ? vr(e, ba(t, 3), !0, !0) : []
                        }

                        function lo(e, t) {
                            return e && e.length ? vr(e, ba(t, 3), !0) : []
                        }

                        function co(e, t, n, i) {
                            var r = null == e ? 0 : e.length;
                            return r ? (n && "number" != typeof n && Aa(e, t, n) && (n = 0, i = r), ui(e, t, n, i)) : []
                        }

                        function uo(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var r = null == n ? 0 : Sl(n);
                            return r < 0 && (r = Wu(i + r, 0)), N(e, ba(t, 3), r)
                        }

                        function mo(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var r = i - 1;
                            return n !== re && (r = Sl(n), r = n < 0 ? Wu(i + r, 0) : Gu(r, i - 1)), N(e, ba(t, 3), r, !0)
                        }

                        function po(e) {
                            return (null == e ? 0 : e.length) ? mi(e, 1) : []
                        }

                        function fo(e) {
                            return (null == e ? 0 : e.length) ? mi(e, Re) : []
                        }

                        function go(e, t) {
                            return (null == e ? 0 : e.length) ? (t = t === re ? 1 : Sl(t), mi(e, t)) : []
                        }

                        function ho(e) {
                            for (var t = -1, n = null == e ? 0 : e.length, i = {}; ++t < n;) {
                                var r = e[t];
                                i[r[0]] = r[1]
                            }
                            return i
                        }

                        function vo(e) {
                            return e && e.length ? e[0] : re
                        }

                        function ko(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var r = null == n ? 0 : Sl(n);
                            return r < 0 && (r = Wu(i + r, 0)), E(e, t, r)
                        }

                        function yo(e) {
                            return (null == e ? 0 : e.length) ? sr(e, 0, -1) : []
                        }

                        function _o(e, t) {
                            return null == e ? "" : qu.call(e, t)
                        }

                        function bo(e) {
                            var t = null == e ? 0 : e.length;
                            return t ? e[t - 1] : re
                        }

                        function So(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var r = i;
                            return n !== re && (r = Sl(n), r = r < 0 ? Wu(i + r, 0) : Gu(r, i - 1)), t === t ? Z(e, t, r) : N(e, C, r, !0)
                        }

                        function No(e, t) {
                            return e && e.length ? Gi(e, Sl(t)) : re
                        }

                        function Eo(e, t) {
                            return e && e.length && t && t.length ? Ji(e, t) : e
                        }

                        function wo(e, t, n) {
                            return e && e.length && t && t.length ? Ji(e, t, ba(n, 2)) : e
                        }

                        function Co(e, t, n) {
                            return e && e.length && t && t.length ? Ji(e, t, re, n) : e
                        }

                        function Oo(e, t) {
                            var n = [];
                            if (!e || !e.length) return n;
                            var i = -1,
                                r = [],
                                a = e.length;
                            for (t = ba(t, 3); ++i < a;) {
                                var o = e[i];
                                t(o, i, e) && (n.push(o), r.push(i))
                            }
                            return Zi(e, r), n
                        }

                        function xo(e) {
                            return null == e ? e : Yu.call(e)
                        }

                        function Uo(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? (n && "number" != typeof n && Aa(e, t, n) ? (t = 0, n = i) : (t = null == t ? 0 : Sl(t), n = n === re ? i : Sl(n)), sr(e, t, n)) : []
                        }

                        function Fo(e, t) {
                            return cr(e, t)
                        }

                        function Do(e, t, n) {
                            return ur(e, t, ba(n, 2))
                        }

                        function Ro(e, t) {
                            var n = null == e ? 0 : e.length;
                            if (n) {
                                var i = cr(e, t);
                                if (i < n && Ws(e[i], t)) return i
                            }
                            return -1
                        }

                        function Io(e, t) {
                            return cr(e, t, !0)
                        }

                        function To(e, t, n) {
                            return ur(e, t, ba(n, 2), !0)
                        }

                        function Ao(e, t) {
                            if (null == e ? 0 : e.length) {
                                var n = cr(e, t, !0) - 1;
                                if (Ws(e[n], t)) return n
                            }
                            return -1
                        }

                        function jo(e) {
                            return e && e.length ? dr(e) : []
                        }

                        function Lo(e, t) {
                            return e && e.length ? dr(e, ba(t, 2)) : []
                        }

                        function Po(e) {
                            var t = null == e ? 0 : e.length;
                            return t ? sr(e, 1, t) : []
                        }

                        function Vo(e, t, n) {
                            return e && e.length ? (t = n || t === re ? 1 : Sl(t), sr(e, 0, t < 0 ? 0 : t)) : []
                        }

                        function Bo(e, t, n) {
                            var i = null == e ? 0 : e.length;
                            return i ? (t = n || t === re ? 1 : Sl(t), t = i - t, sr(e, t < 0 ? 0 : t, i)) : []
                        }

                        function Mo(e, t) {
                            return e && e.length ? vr(e, ba(t, 3), !1, !0) : []
                        }

                        function Ho(e, t) {
                            return e && e.length ? vr(e, ba(t, 3)) : []
                        }

                        function qo(e) {
                            return e && e.length ? fr(e) : []
                        }

                        function zo(e, t) {
                            return e && e.length ? fr(e, ba(t, 2)) : []
                        }

                        function Wo(e, t) {
                            return t = "function" == typeof t ? t : re, e && e.length ? fr(e, re, t) : []
                        }

                        function Go(e) {
                            if (!e || !e.length) return [];
                            var t = 0;
                            return e = m(e, function(e) {
                                if ($s(e)) return t = Wu(e.length, t), !0
                            }), I(t, function(t) {
                                return g(e, x(t))
                            })
                        }

                        function $o(e, t) {
                            if (!e || !e.length) return [];
                            var n = Go(e);
                            return null == t ? n : g(n, function(e) {
                                return s(t, re, e)
                            })
                        }

                        function Ko(e, t) {
                            return _r(e || [], t || [], Wn)
                        }

                        function Qo(e, t) {
                            return _r(e || [], t || [], ar)
                        }

                        function Yo(e) {
                            var t = n(e);
                            return t.__chain__ = !0, t
                        }

                        function Jo(e, t) {
                            return t(e), e
                        }

                        function Zo(e, t) {
                            return t(e)
                        }

                        function Xo() {
                            return Yo(this)
                        }

                        function es() {
                            return new r(this.value(), this.__chain__)
                        }

                        function ts() {
                            this.__values__ === re && (this.__values__ = _l(this.value()));
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
                            if (e instanceof _) {
                                var t = e;
                                return this.__actions__.length && (t = new _(this)), t = t.reverse(), t.__actions__.push({
                                    func: Zo,
                                    args: [xo],
                                    thisArg: re
                                }), new r(t, this.__chain__)
                            }
                            return this.thru(xo)
                        }

                        function as() {
                            return kr(this.__wrapped__, this.__actions__)
                        }

                        function os(e, t, n) {
                            var i = hm(e) ? d : li;
                            return n && Aa(e, t, n) && (t = re), i(e, ba(t, 3))
                        }

                        function ss(e, t) {
                            return (hm(e) ? m : di)(e, ba(t, 3))
                        }

                        function ls(e, t) {
                            return mi(fs(e, t), 1)
                        }

                        function cs(e, t) {
                            return mi(fs(e, t), Re)
                        }

                        function us(e, t, n) {
                            return n = n === re ? 1 : Sl(n), mi(fs(e, t), n)
                        }

                        function ds(e, t) {
                            return (hm(e) ? c : fd)(e, ba(t, 3))
                        }

                        function ms(e, t) {
                            return (hm(e) ? u : gd)(e, ba(t, 3))
                        }

                        function ps(e, t, n, i) {
                            e = Gs(e) ? e : Xl(e), n = n && !i ? Sl(n) : 0;
                            var r = e.length;
                            return n < 0 && (n = Wu(r + n, 0)), gl(e) ? n <= r && e.indexOf(t, n) > -1 : !!r && E(e, t, n) > -1
                        }

                        function fs(e, t) {
                            return (hm(e) ? g : Mi)(e, ba(t, 3))
                        }

                        function gs(e, t, n, i) {
                            return null == e ? [] : (hm(t) || (t = null == t ? [] : [t]), n = i ? re : n, hm(n) || (n = null == n ? [] : [n]), $i(e, t, n))
                        }

                        function hs(e, t, n) {
                            var i = hm(e) ? v : F,
                                r = arguments.length < 3;
                            return i(e, ba(t, 4), n, r, fd)
                        }

                        function vs(e, t, n) {
                            var i = hm(e) ? k : F,
                                r = arguments.length < 3;
                            return i(e, ba(t, 4), n, r, gd)
                        }

                        function ks(e, t) {
                            return (hm(e) ? m : di)(e, Rs(ba(t, 3)))
                        }

                        function ys(e) {
                            return (hm(e) ? Tn : ir)(e)
                        }

                        function _s(e, t, n) {
                            return t = (n ? Aa(e, t, n) : t === re) ? 1 : Sl(t), (hm(e) ? An : rr)(e, t)
                        }

                        function bs(e) {
                            return (hm(e) ? Ln : or)(e)
                        }

                        function Ss(e) {
                            if (null == e) return 0;
                            if (Gs(e)) return gl(e) ? X(e) : e.length;
                            var t = Cd(e);
                            return t == Qe || t == tt ? e.size : Pi(e).length
                        }

                        function Ns(e, t, n) {
                            var i = hm(e) ? y : lr;
                            return n && Aa(e, t, n) && (t = re), i(e, ba(t, 3))
                        }

                        function Es(e, t) {
                            if ("function" != typeof t) throw new uu(se);
                            return e = Sl(e),
                                function() {
                                    if (--e < 1) return t.apply(this, arguments)
                                }
                        }

                        function ws(e, t, n) {
                            return t = n ? re : t, t = e && null == t ? e.length : t, ca(e, Ne, re, re, re, re, t)
                        }

                        function Cs(e, t) {
                            var n;
                            if ("function" != typeof t) throw new uu(se);
                            return e = Sl(e),
                                function() {
                                    return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = re), n
                                }
                        }

                        function Os(e, t, n) {
                            t = n ? re : t;
                            var i = ca(e, ye, re, re, re, re, re, t);
                            return i.placeholder = Os.placeholder, i
                        }

                        function xs(e, t, n) {
                            t = n ? re : t;
                            var i = ca(e, _e, re, re, re, re, re, t);
                            return i.placeholder = xs.placeholder, i
                        }

                        function Us(e, t, n) {
                            function i(t) {
                                var n = m,
                                    i = p;
                                return m = p = re, k = t, g = e.apply(i, n)
                            }

                            function r(e) {
                                return k = e, h = Ud(s, t), y ? i(e) : g
                            }

                            function a(e) {
                                var n = e - v,
                                    i = e - k,
                                    r = t - n;
                                return _ ? Gu(r, f - i) : r
                            }

                            function o(e) {
                                var n = e - v,
                                    i = e - k;
                                return v === re || n >= t || n < 0 || _ && i >= f
                            }

                            function s() {
                                var e = rm();
                                if (o(e)) return l(e);
                                h = Ud(s, a(e))
                            }

                            function l(e) {
                                return h = re, b && m ? i(e) : (m = p = re, g)
                            }

                            function c() {
                                h !== re && bd(h), k = 0, m = v = p = h = re
                            }

                            function u() {
                                return h === re ? g : l(rm())
                            }

                            function d() {
                                var e = rm(),
                                    n = o(e);
                                if (m = arguments, p = this, v = e, n) {
                                    if (h === re) return r(v);
                                    if (_) return h = Ud(s, t), i(v)
                                }
                                return h === re && (h = Ud(s, t)), g
                            }
                            var m, p, f, g, h, v, k = 0,
                                y = !1,
                                _ = !1,
                                b = !0;
                            if ("function" != typeof e) throw new uu(se);
                            return t = El(t) || 0, rl(n) && (y = !!n.leading, _ = "maxWait" in n, f = _ ? Wu(El(n.maxWait) || 0, t) : f, b = "trailing" in n ? !!n.trailing : b), d.cancel = c, d.flush = u, d
                        }

                        function Fs(e) {
                            return ca(e, we)
                        }

                        function Ds(e, t) {
                            if ("function" != typeof e || null != t && "function" != typeof t) throw new uu(se);
                            var n = function() {
                                var i = arguments,
                                    r = t ? t.apply(this, i) : i[0],
                                    a = n.cache;
                                if (a.has(r)) return a.get(r);
                                var o = e.apply(this, i);
                                return n.cache = a.set(r, o) || a, o
                            };
                            return n.cache = new(Ds.Cache || cn), n
                        }

                        function Rs(e) {
                            if ("function" != typeof e) throw new uu(se);
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

                        function Is(e) {
                            return Cs(2, e)
                        }

                        function Ts(e, t) {
                            if ("function" != typeof e) throw new uu(se);
                            return t = t === re ? t : Sl(t), nr(e, t)
                        }

                        function As(e, t) {
                            if ("function" != typeof e) throw new uu(se);
                            return t = null == t ? 0 : Wu(Sl(t), 0), nr(function(n) {
                                var i = n[t],
                                    r = Er(n, 0, t);
                                return i && h(r, i), s(e, this, r)
                            })
                        }

                        function js(e, t, n) {
                            var i = !0,
                                r = !0;
                            if ("function" != typeof e) throw new uu(se);
                            return rl(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), Us(e, t, {
                                leading: i,
                                maxWait: t,
                                trailing: r
                            })
                        }

                        function Ls(e) {
                            return ws(e, 1)
                        }

                        function Ps(e, t) {
                            return um(Sr(t), e)
                        }

                        function Vs() {
                            if (!arguments.length) return [];
                            var e = arguments[0];
                            return hm(e) ? e : [e]
                        }

                        function Bs(e) {
                            return ii(e, pe)
                        }

                        function Ms(e, t) {
                            return t = "function" == typeof t ? t : re, ii(e, pe, t)
                        }

                        function Hs(e) {
                            return ii(e, de | pe)
                        }

                        function qs(e, t) {
                            return t = "function" == typeof t ? t : re, ii(e, de | pe, t)
                        }

                        function zs(e, t) {
                            return null == t || ai(e, t, Bl(t))
                        }

                        function Ws(e, t) {
                            return e === t || e !== e && t !== t
                        }

                        function Gs(e) {
                            return null != e && il(e.length) && !tl(e)
                        }

                        function $s(e) {
                            return al(e) && Gs(e)
                        }

                        function Ks(e) {
                            return !0 === e || !1 === e || al(e) && ki(e) == qe
                        }

                        function Qs(e) {
                            return al(e) && 1 === e.nodeType && !pl(e)
                        }

                        function Ys(e) {
                            if (null == e) return !0;
                            if (Gs(e) && (hm(e) || "string" == typeof e || "function" == typeof e.splice || km(e) || Nm(e) || gm(e))) return !e.length;
                            var t = Cd(e);
                            if (t == Qe || t == tt) return !e.size;
                            if (Ba(e)) return !Pi(e).length;
                            for (var n in e)
                                if (hu.call(e, n)) return !1;
                            return !0
                        }

                        function Js(e, t) {
                            return Ui(e, t)
                        }

                        function Zs(e, t, n) {
                            n = "function" == typeof n ? n : re;
                            var i = n ? n(e, t) : re;
                            return i === re ? Ui(e, t, re, n) : !!i
                        }

                        function Xs(e) {
                            if (!al(e)) return !1;
                            var t = ki(e);
                            return t == Ge || t == We || "string" == typeof e.message && "string" == typeof e.name && !pl(e)
                        }

                        function el(e) {
                            return "number" == typeof e && Hu(e)
                        }

                        function tl(e) {
                            if (!rl(e)) return !1;
                            var t = ki(e);
                            return t == $e || t == Ke || t == He || t == Xe
                        }

                        function nl(e) {
                            return "number" == typeof e && e == Sl(e)
                        }

                        function il(e) {
                            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Ie
                        }

                        function rl(e) {
                            var t = typeof e;
                            return null != e && ("object" == t || "function" == t)
                        }

                        function al(e) {
                            return null != e && "object" == typeof e
                        }

                        function ol(e, t) {
                            return e === t || Ri(e, t, Na(t))
                        }

                        function sl(e, t, n) {
                            return n = "function" == typeof n ? n : re, Ri(e, t, Na(t), n)
                        }

                        function ll(e) {
                            return ml(e) && e != +e
                        }

                        function cl(e) {
                            if (Od(e)) throw new ru(oe);
                            return Ii(e)
                        }

                        function ul(e) {
                            return null === e
                        }

                        function dl(e) {
                            return null == e
                        }

                        function ml(e) {
                            return "number" == typeof e || al(e) && ki(e) == Ye
                        }

                        function pl(e) {
                            if (!al(e) || ki(e) != Ze) return !1;
                            var t = Ou(e);
                            if (null === t) return !0;
                            var n = hu.call(t, "constructor") && t.constructor;
                            return "function" == typeof n && n instanceof n && gu.call(n) == _u
                        }

                        function fl(e) {
                            return nl(e) && e >= -Ie && e <= Ie
                        }

                        function gl(e) {
                            return "string" == typeof e || !hm(e) && al(e) && ki(e) == nt
                        }

                        function hl(e) {
                            return "symbol" == typeof e || al(e) && ki(e) == it
                        }

                        function vl(e) {
                            return e === re
                        }

                        function kl(e) {
                            return al(e) && Cd(e) == at
                        }

                        function yl(e) {
                            return al(e) && ki(e) == ot
                        }

                        function _l(e) {
                            if (!e) return [];
                            if (Gs(e)) return gl(e) ? ee(e) : Lr(e);
                            if (Ru && e[Ru]) return W(e[Ru]());
                            var t = Cd(e);
                            return (t == Qe ? G : t == tt ? Q : Xl)(e)
                        }

                        function bl(e) {
                            if (!e) return 0 === e ? e : 0;
                            if ((e = El(e)) === Re || e === -Re) {
                                return (e < 0 ? -1 : 1) * Te
                            }
                            return e === e ? e : 0
                        }

                        function Sl(e) {
                            var t = bl(e),
                                n = t % 1;
                            return t === t ? n ? t - n : t : 0
                        }

                        function Nl(e) {
                            return e ? ni(Sl(e), 0, je) : 0
                        }

                        function El(e) {
                            if ("number" == typeof e) return e;
                            if (hl(e)) return Ae;
                            if (rl(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = rl(t) ? t + "" : t
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = e.replace(Tt, "");
                            var n = Wt.test(e);
                            return n || $t.test(e) ? Fn(e.slice(2), n ? 2 : 8) : zt.test(e) ? Ae : +e
                        }

                        function wl(e) {
                            return Pr(e, Ml(e))
                        }

                        function Cl(e) {
                            return e ? ni(Sl(e), -Ie, Ie) : 0 === e ? e : 0
                        }

                        function Ol(e) {
                            return null == e ? "" : pr(e)
                        }

                        function xl(e, t) {
                            var n = pd(e);
                            return null == t ? n : Zn(n, t)
                        }

                        function Ul(e, t) {
                            return S(e, ba(t, 3), pi)
                        }

                        function Fl(e, t) {
                            return S(e, ba(t, 3), fi)
                        }

                        function Dl(e, t) {
                            return null == e ? e : hd(e, ba(t, 3), Ml)
                        }

                        function Rl(e, t) {
                            return null == e ? e : vd(e, ba(t, 3), Ml)
                        }

                        function Il(e, t) {
                            return e && pi(e, ba(t, 3))
                        }

                        function Tl(e, t) {
                            return e && fi(e, ba(t, 3))
                        }

                        function Al(e) {
                            return null == e ? [] : gi(e, Bl(e))
                        }

                        function jl(e) {
                            return null == e ? [] : gi(e, Ml(e))
                        }

                        function Ll(e, t, n) {
                            var i = null == e ? re : hi(e, t);
                            return i === re ? n : i
                        }

                        function Pl(e, t) {
                            return null != e && xa(e, t, _i)
                        }

                        function Vl(e, t) {
                            return null != e && xa(e, t, bi)
                        }

                        function Bl(e) {
                            return Gs(e) ? Rn(e) : Pi(e)
                        }

                        function Ml(e) {
                            return Gs(e) ? Rn(e, !0) : Vi(e)
                        }

                        function Hl(e, t) {
                            var n = {};
                            return t = ba(t, 3), pi(e, function(e, i, r) {
                                ei(n, t(e, i, r), e)
                            }), n
                        }

                        function ql(e, t) {
                            var n = {};
                            return t = ba(t, 3), pi(e, function(e, i, r) {
                                ei(n, i, t(e, i, r))
                            }), n
                        }

                        function zl(e, t) {
                            return Wl(e, Rs(ba(t)))
                        }

                        function Wl(e, t) {
                            if (null == e) return {};
                            var n = g(ka(e), function(e) {
                                return [e]
                            });
                            return t = ba(t), Qi(e, n, function(e, n) {
                                return t(e, n[0])
                            })
                        }

                        function Gl(e, t, n) {
                            t = Nr(t, e);
                            var i = -1,
                                r = t.length;
                            for (r || (r = 1, e = re); ++i < r;) {
                                var a = null == e ? re : e[Za(t[i])];
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
                            var i = hm(e),
                                r = i || km(e) || Nm(e);
                            if (t = ba(t, 4), null == n) {
                                var a = e && e.constructor;
                                n = r ? i ? new a : [] : rl(e) && tl(a) ? pd(Ou(e)) : {}
                            }
                            return (r ? c : pi)(e, function(e, i, r) {
                                return t(n, e, i, r)
                            }), n
                        }

                        function Yl(e, t) {
                            return null == e || gr(e, t)
                        }

                        function Jl(e, t, n) {
                            return null == e ? e : hr(e, t, Sr(n))
                        }

                        function Zl(e, t, n, i) {
                            return i = "function" == typeof i ? i : re, null == e ? e : hr(e, t, Sr(n), i)
                        }

                        function Xl(e) {
                            return null == e ? [] : j(e, Bl(e))
                        }

                        function ec(e) {
                            return null == e ? [] : j(e, Ml(e))
                        }

                        function tc(e, t, n) {
                            return n === re && (n = t, t = re), n !== re && (n = El(n), n = n === n ? n : 0), t !== re && (t = El(t), t = t === t ? t : 0), ni(El(e), t, n)
                        }

                        function nc(e, t, n) {
                            return t = bl(t), n === re ? (n = t, t = 0) : n = bl(n), e = El(e), Si(e, t, n)
                        }

                        function ic(e, t, n) {
                            if (n && "boolean" != typeof n && Aa(e, t, n) && (t = n = re), n === re && ("boolean" == typeof t ? (n = t, t = re) : "boolean" == typeof e && (n = e, e = re)), e === re && t === re ? (e = 0, t = 1) : (e = bl(e), t === re ? (t = e, e = 0) : t = bl(t)), e > t) {
                                var i = e;
                                e = t, t = i
                            }
                            if (n || e % 1 || t % 1) {
                                var r = Qu();
                                return Gu(e + r * (t - e + Un("1e-" + ((r + "").length - 1))), t)
                            }
                            return Xi(e, t)
                        }

                        function rc(e) {
                            return Qm(Ol(e).toLowerCase())
                        }

                        function ac(e) {
                            return (e = Ol(e)) && e.replace(Qt, Gn).replace(hn, "")
                        }

                        function oc(e, t, n) {
                            e = Ol(e), t = pr(t);
                            var i = e.length;
                            n = n === re ? i : ni(Sl(n), 0, i);
                            var r = n;
                            return (n -= t.length) >= 0 && e.slice(n, r) == t
                        }

                        function sc(e) {
                            return e = Ol(e), e && Et.test(e) ? e.replace(St, $n) : e
                        }

                        function lc(e) {
                            return e = Ol(e), e && It.test(e) ? e.replace(Rt, "\\$&") : e
                        }

                        function cc(e, t, n) {
                            e = Ol(e), t = Sl(t);
                            var i = t ? X(e) : 0;
                            if (!t || i >= t) return e;
                            var r = (t - i) / 2;
                            return na(Vu(r), n) + e + na(Pu(r), n)
                        }

                        function uc(e, t, n) {
                            e = Ol(e), t = Sl(t);
                            var i = t ? X(e) : 0;
                            return t && i < t ? e + na(t - i, n) : e
                        }

                        function dc(e, t, n) {
                            e = Ol(e), t = Sl(t);
                            var i = t ? X(e) : 0;
                            return t && i < t ? na(t - i, n) + e : e
                        }

                        function mc(e, t, n) {
                            return n || null == t ? t = 0 : t && (t = +t), Ku(Ol(e).replace(At, ""), t || 0)
                        }

                        function pc(e, t, n) {
                            return t = (n ? Aa(e, t, n) : t === re) ? 1 : Sl(t), tr(Ol(e), t)
                        }

                        function fc() {
                            var e = arguments,
                                t = Ol(e[0]);
                            return e.length < 3 ? t : t.replace(e[1], e[2])
                        }

                        function gc(e, t, n) {
                            return n && "number" != typeof n && Aa(e, t, n) && (t = n = re), (n = n === re ? je : n >>> 0) ? (e = Ol(e), e && ("string" == typeof t || null != t && !bm(t)) && !(t = pr(t)) && q(e) ? Er(ee(e), 0, n) : e.split(t, n)) : []
                        }

                        function hc(e, t, n) {
                            return e = Ol(e), n = null == n ? 0 : ni(Sl(n), 0, e.length), t = pr(t), e.slice(n, n + t.length) == t
                        }

                        function vc(e, t, i) {
                            var r = n.templateSettings;
                            i && Aa(e, t, i) && (t = re), e = Ol(e), t = xm({}, t, r, ua);
                            var a, o, s = xm({}, t.imports, r.imports, ua),
                                l = Bl(s),
                                c = j(s, l),
                                u = 0,
                                d = t.interpolate || Yt,
                                m = "__p += '",
                                p = lu((t.escape || Yt).source + "|" + d.source + "|" + (d === Ot ? Ht : Yt).source + "|" + (t.evaluate || Yt).source + "|$", "g"),
                                f = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++Sn + "]") + "\n";
                            e.replace(p, function(t, n, i, r, s, l) {
                                return i || (i = r), m += e.slice(u, l).replace(Jt, M), n && (a = !0, m += "' +\n__e(" + n + ") +\n'"), s && (o = !0, m += "';\n" + s + ";\n__p += '"), i && (m += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), u = l + t.length, t
                            }), m += "';\n";
                            var g = t.variable;
                            g || (m = "with (obj) {\n" + m + "\n}\n"), m = (o ? m.replace(kt, "") : m).replace(yt, "$1").replace(_t, "$1;"), m = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + m + "return __p\n}";
                            var h = Ym(function() {
                                return au(l, f + "return " + m).apply(re, c)
                            });
                            if (h.source = m, Xs(h)) throw h;
                            return h
                        }

                        function kc(e) {
                            return Ol(e).toLowerCase()
                        }

                        function yc(e) {
                            return Ol(e).toUpperCase()
                        }

                        function _c(e, t, n) {
                            if ((e = Ol(e)) && (n || t === re)) return e.replace(Tt, "");
                            if (!e || !(t = pr(t))) return e;
                            var i = ee(e),
                                r = ee(t);
                            return Er(i, P(i, r), V(i, r) + 1).join("")
                        }

                        function bc(e, t, n) {
                            if ((e = Ol(e)) && (n || t === re)) return e.replace(jt, "");
                            if (!e || !(t = pr(t))) return e;
                            var i = ee(e);
                            return Er(i, 0, V(i, ee(t)) + 1).join("")
                        }

                        function Sc(e, t, n) {
                            if ((e = Ol(e)) && (n || t === re)) return e.replace(At, "");
                            if (!e || !(t = pr(t))) return e;
                            var i = ee(e);
                            return Er(i, P(i, ee(t))).join("")
                        }

                        function Nc(e, t) {
                            var n = Ce,
                                i = Oe;
                            if (rl(t)) {
                                var r = "separator" in t ? t.separator : r;
                                n = "length" in t ? Sl(t.length) : n, i = "omission" in t ? pr(t.omission) : i
                            }
                            e = Ol(e);
                            var a = e.length;
                            if (q(e)) {
                                var o = ee(e);
                                a = o.length
                            }
                            if (n >= a) return e;
                            var s = n - X(i);
                            if (s < 1) return i;
                            var l = o ? Er(o, 0, s).join("") : e.slice(0, s);
                            if (r === re) return l + i;
                            if (o && (s += l.length - s), bm(r)) {
                                if (e.slice(s).search(r)) {
                                    var c, u = l;
                                    for (r.global || (r = lu(r.source, Ol(qt.exec(r)) + "g")), r.lastIndex = 0; c = r.exec(u);) var d = c.index;
                                    l = l.slice(0, d === re ? s : d)
                                }
                            } else if (e.indexOf(pr(r), s) != s) {
                                var m = l.lastIndexOf(r);
                                m > -1 && (l = l.slice(0, m))
                            }
                            return l + i
                        }

                        function Ec(e) {
                            return e = Ol(e), e && Nt.test(e) ? e.replace(bt, Kn) : e
                        }

                        function wc(e, t, n) {
                            return e = Ol(e), t = n ? re : t, t === re ? z(e) ? ie(e) : b(e) : e.match(t) || []
                        }

                        function Cc(e) {
                            var t = null == e ? 0 : e.length,
                                n = ba();
                            return e = t ? g(e, function(e) {
                                if ("function" != typeof e[1]) throw new uu(se);
                                return [n(e[0]), e[1]]
                            }) : [], nr(function(n) {
                                for (var i = -1; ++i < t;) {
                                    var r = e[i];
                                    if (s(r[0], this, n)) return s(r[1], this, n)
                                }
                            })
                        }

                        function Oc(e) {
                            return ri(ii(e, de))
                        }

                        function xc(e) {
                            return function() {
                                return e
                            }
                        }

                        function Uc(e, t) {
                            return null == e || e !== e ? t : e
                        }

                        function Fc(e) {
                            return e
                        }

                        function Dc(e) {
                            return Li("function" == typeof e ? e : ii(e, de))
                        }

                        function Rc(e) {
                            return Hi(ii(e, de))
                        }

                        function Ic(e, t) {
                            return qi(e, ii(t, de))
                        }

                        function Tc(e, t, n) {
                            var i = Bl(t),
                                r = gi(t, i);
                            null != n || rl(t) && (r.length || !i.length) || (n = t, t = e, e = this, r = gi(t, Bl(t)));
                            var a = !(rl(n) && "chain" in n && !n.chain),
                                o = tl(e);
                            return c(r, function(n) {
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
                                    return i.apply(e, h([this.value()], arguments))
                                })
                            }), e
                        }

                        function Ac() {
                            return In._ === this && (In._ = bu), this
                        }

                        function jc() {}

                        function Lc(e) {
                            return e = Sl(e), nr(function(t) {
                                return Gi(t, e)
                            })
                        }

                        function Pc(e) {
                            return ja(e) ? x(Za(e)) : Yi(e)
                        }

                        function Vc(e) {
                            return function(t) {
                                return null == e ? re : hi(e, t)
                            }
                        }

                        function Bc() {
                            return []
                        }

                        function Mc() {
                            return !1
                        }

                        function Hc() {
                            return {}
                        }

                        function qc() {
                            return ""
                        }

                        function zc() {
                            return !0
                        }

                        function Wc(e, t) {
                            if ((e = Sl(e)) < 1 || e > Ie) return [];
                            var n = je,
                                i = Gu(e, je);
                            t = ba(t), e -= je;
                            for (var r = I(i, t); ++n < e;) t(n);
                            return r
                        }

                        function Gc(e) {
                            return hm(e) ? g(e, Za) : hl(e) ? [e] : Lr(Dd(Ol(e)))
                        }

                        function $c(e) {
                            var t = ++vu;
                            return Ol(e) + t
                        }

                        function Kc(e) {
                            return e && e.length ? ci(e, Fc, yi) : re
                        }

                        function Qc(e, t) {
                            return e && e.length ? ci(e, ba(t, 2), yi) : re
                        }

                        function Yc(e) {
                            return O(e, Fc)
                        }

                        function Jc(e, t) {
                            return O(e, ba(t, 2))
                        }

                        function Zc(e) {
                            return e && e.length ? ci(e, Fc, Bi) : re
                        }

                        function Xc(e, t) {
                            return e && e.length ? ci(e, ba(t, 2), Bi) : re
                        }

                        function eu(e) {
                            return e && e.length ? R(e, Fc) : 0
                        }

                        function tu(e, t) {
                            return e && e.length ? R(e, ba(t, 2)) : 0
                        }
                        t = null == t ? In : Qn.defaults(In.Object(), t, Qn.pick(In, bn));
                        var nu = t.Array,
                            iu = t.Date,
                            ru = t.Error,
                            au = t.Function,
                            ou = t.Math,
                            su = t.Object,
                            lu = t.RegExp,
                            cu = t.String,
                            uu = t.TypeError,
                            du = nu.prototype,
                            mu = au.prototype,
                            pu = su.prototype,
                            fu = t["__core-js_shared__"],
                            gu = mu.toString,
                            hu = pu.hasOwnProperty,
                            vu = 0,
                            ku = function() {
                                var e = /[^.]+$/.exec(fu && fu.keys && fu.keys.IE_PROTO || "");
                                return e ? "Symbol(src)_1." + e : ""
                            }(),
                            yu = pu.toString,
                            _u = gu.call(su),
                            bu = In._,
                            Su = lu("^" + gu.call(hu).replace(Rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            Nu = jn ? t.Buffer : re,
                            Eu = t.Symbol,
                            wu = t.Uint8Array,
                            Cu = Nu ? Nu.allocUnsafe : re,
                            Ou = $(su.getPrototypeOf, su),
                            xu = su.create,
                            Uu = pu.propertyIsEnumerable,
                            Fu = du.splice,
                            Du = Eu ? Eu.isConcatSpreadable : re,
                            Ru = Eu ? Eu.iterator : re,
                            Iu = Eu ? Eu.toStringTag : re,
                            Tu = function() {
                                try {
                                    var e = Ea(su, "defineProperty");
                                    return e({}, "", {}), e
                                } catch (e) {}
                            }(),
                            Au = t.clearTimeout !== In.clearTimeout && t.clearTimeout,
                            ju = iu && iu.now !== In.Date.now && iu.now,
                            Lu = t.setTimeout !== In.setTimeout && t.setTimeout,
                            Pu = ou.ceil,
                            Vu = ou.floor,
                            Bu = su.getOwnPropertySymbols,
                            Mu = Nu ? Nu.isBuffer : re,
                            Hu = t.isFinite,
                            qu = du.join,
                            zu = $(su.keys, su),
                            Wu = ou.max,
                            Gu = ou.min,
                            $u = iu.now,
                            Ku = t.parseInt,
                            Qu = ou.random,
                            Yu = du.reverse,
                            Ju = Ea(t, "DataView"),
                            Zu = Ea(t, "Map"),
                            Xu = Ea(t, "Promise"),
                            ed = Ea(t, "Set"),
                            td = Ea(t, "WeakMap"),
                            nd = Ea(su, "create"),
                            id = td && new td,
                            rd = {},
                            ad = Xa(Ju),
                            od = Xa(Zu),
                            sd = Xa(Xu),
                            ld = Xa(ed),
                            cd = Xa(td),
                            ud = Eu ? Eu.prototype : re,
                            dd = ud ? ud.valueOf : re,
                            md = ud ? ud.toString : re,
                            pd = function() {
                                function e() {}
                                return function(t) {
                                    if (!rl(t)) return {};
                                    if (xu) return xu(t);
                                    e.prototype = t;
                                    var n = new e;
                                    return e.prototype = re, n
                                }
                            }();
                        n.templateSettings = {
                            escape: wt,
                            evaluate: Ct,
                            interpolate: Ot,
                            variable: "",
                            imports: {
                                _: n
                            }
                        }, n.prototype = i.prototype, n.prototype.constructor = n, r.prototype = pd(i.prototype), r.prototype.constructor = r, _.prototype = pd(i.prototype), _.prototype.constructor = _, ne.prototype.clear = Bt, ne.prototype.delete = Zt, ne.prototype.get = Xt, ne.prototype.has = en, ne.prototype.set = tn, nn.prototype.clear = rn, nn.prototype.delete = an, nn.prototype.get = on, nn.prototype.has = sn, nn.prototype.set = ln, cn.prototype.clear = un, cn.prototype.delete = dn, cn.prototype.get = mn, cn.prototype.has = pn, cn.prototype.set = fn, vn.prototype.add = vn.prototype.push = kn, vn.prototype.has = yn, _n.prototype.clear = wn, _n.prototype.delete = Cn, _n.prototype.get = On, _n.prototype.has = xn, _n.prototype.set = Dn;
                        var fd = qr(pi),
                            gd = qr(fi, !0),
                            hd = zr(),
                            vd = zr(!0),
                            kd = id ? function(e, t) {
                                return id.set(e, t), e
                            } : Fc,
                            yd = Tu ? function(e, t) {
                                return Tu(e, "toString", {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: xc(t),
                                    writable: !0
                                })
                            } : Fc,
                            _d = nr,
                            bd = Au || function(e) {
                                return In.clearTimeout(e)
                            },
                            Sd = ed && 1 / Q(new ed([, -0]))[1] == Re ? function(e) {
                                return new ed(e)
                            } : jc,
                            Nd = id ? function(e) {
                                return id.get(e)
                            } : jc,
                            Ed = Bu ? function(e) {
                                return null == e ? [] : (e = su(e), m(Bu(e), function(t) {
                                    return Uu.call(e, t)
                                }))
                            } : Bc,
                            wd = Bu ? function(e) {
                                for (var t = []; e;) h(t, Ed(e)), e = Ou(e);
                                return t
                            } : Bc,
                            Cd = ki;
                        (Ju && Cd(new Ju(new ArrayBuffer(1))) != lt || Zu && Cd(new Zu) != Qe || Xu && "[object Promise]" != Cd(Xu.resolve()) || ed && Cd(new ed) != tt || td && Cd(new td) != at) && (Cd = function(e) {
                            var t = ki(e),
                                n = t == Ze ? e.constructor : re,
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
                                case cd:
                                    return at
                            }
                            return t
                        });
                        var Od = fu ? tl : Mc,
                            xd = Ya(kd),
                            Ud = Lu || function(e, t) {
                                return In.setTimeout(e, t)
                            },
                            Fd = Ya(yd),
                            Dd = function(e) {
                                var t = Ds(e, function(e) {
                                        return n.size === ce && n.clear(), e
                                    }),
                                    n = t.cache;
                                return t
                            }(function(e) {
                                var t = [];
                                return Ft.test(e) && t.push(""), e.replace(Dt, function(e, n, i, r) {
                                    t.push(i ? r.replace(Mt, "$1") : n || e)
                                }), t
                            }),
                            Rd = nr(function(e, t) {
                                return $s(e) ? si(e, mi(t, 1, $s, !0)) : []
                            }),
                            Id = nr(function(e, t) {
                                var n = bo(t);
                                return $s(n) && (n = re), $s(e) ? si(e, mi(t, 1, $s, !0), ba(n, 2)) : []
                            }),
                            Td = nr(function(e, t) {
                                var n = bo(t);
                                return $s(n) && (n = re), $s(e) ? si(e, mi(t, 1, $s, !0), re, n) : []
                            }),
                            Ad = nr(function(e) {
                                var t = g(e, br);
                                return t.length && t[0] === e[0] ? Ni(t) : []
                            }),
                            jd = nr(function(e) {
                                var t = bo(e),
                                    n = g(e, br);
                                return t === bo(n) ? t = re : n.pop(), n.length && n[0] === e[0] ? Ni(n, ba(t, 2)) : []
                            }),
                            Ld = nr(function(e) {
                                var t = bo(e),
                                    n = g(e, br);
                                return t = "function" == typeof t ? t : re, t && n.pop(), n.length && n[0] === e[0] ? Ni(n, re, t) : []
                            }),
                            Pd = nr(Eo),
                            Vd = ha(function(e, t) {
                                var n = null == e ? 0 : e.length,
                                    i = ti(e, t);
                                return Zi(e, g(t, function(e) {
                                    return Ta(e, n) ? +e : e
                                }).sort(Ir)), i
                            }),
                            Bd = nr(function(e) {
                                return fr(mi(e, 1, $s, !0))
                            }),
                            Md = nr(function(e) {
                                var t = bo(e);
                                return $s(t) && (t = re), fr(mi(e, 1, $s, !0), ba(t, 2))
                            }),
                            Hd = nr(function(e) {
                                var t = bo(e);
                                return t = "function" == typeof t ? t : re, fr(mi(e, 1, $s, !0), re, t)
                            }),
                            qd = nr(function(e, t) {
                                return $s(e) ? si(e, t) : []
                            }),
                            zd = nr(function(e) {
                                return yr(m(e, $s))
                            }),
                            Wd = nr(function(e) {
                                var t = bo(e);
                                return $s(t) && (t = re), yr(m(e, $s), ba(t, 2))
                            }),
                            Gd = nr(function(e) {
                                var t = bo(e);
                                return t = "function" == typeof t ? t : re, yr(m(e, $s), re, t)
                            }),
                            $d = nr(Go),
                            Kd = nr(function(e) {
                                var t = e.length,
                                    n = t > 1 ? e[t - 1] : re;
                                return n = "function" == typeof n ? (e.pop(), n) : re, $o(e, n)
                            }),
                            Qd = ha(function(e) {
                                var t = e.length,
                                    n = t ? e[0] : 0,
                                    i = this.__wrapped__,
                                    a = function(t) {
                                        return ti(t, e)
                                    };
                                return !(t > 1 || this.__actions__.length) && i instanceof _ && Ta(n) ? (i = i.slice(n, +n + (t ? 1 : 0)), i.__actions__.push({
                                    func: Zo,
                                    args: [a],
                                    thisArg: re
                                }), new r(i, this.__chain__).thru(function(e) {
                                    return t && !e.length && e.push(re), e
                                })) : this.thru(a)
                            }),
                            Yd = Mr(function(e, t, n) {
                                hu.call(e, n) ? ++e[n] : ei(e, n, 1)
                            }),
                            Jd = Yr(uo),
                            Zd = Yr(mo),
                            Xd = Mr(function(e, t, n) {
                                hu.call(e, n) ? e[n].push(t) : ei(e, n, [t])
                            }),
                            em = nr(function(e, t, n) {
                                var i = -1,
                                    r = "function" == typeof t,
                                    a = Gs(e) ? nu(e.length) : [];
                                return fd(e, function(e) {
                                    a[++i] = r ? s(t, e, n) : wi(e, t, n)
                                }), a
                            }),
                            tm = Mr(function(e, t, n) {
                                ei(e, n, t)
                            }),
                            nm = Mr(function(e, t, n) {
                                e[n ? 0 : 1].push(t)
                            }, function() {
                                return [
                                    [],
                                    []
                                ]
                            }),
                            im = nr(function(e, t) {
                                if (null == e) return [];
                                var n = t.length;
                                return n > 1 && Aa(e, t[0], t[1]) ? t = [] : n > 2 && Aa(t[0], t[1], t[2]) && (t = [t[0]]), $i(e, mi(t, 1), [])
                            }),
                            rm = ju || function() {
                                return In.Date.now()
                            },
                            am = nr(function(e, t, n) {
                                var i = he;
                                if (n.length) {
                                    var r = K(n, _a(am));
                                    i |= be
                                }
                                return ca(e, i, t, n, r)
                            }),
                            om = nr(function(e, t, n) {
                                var i = he | ve;
                                if (n.length) {
                                    var r = K(n, _a(om));
                                    i |= be
                                }
                                return ca(t, i, e, n, r)
                            }),
                            sm = nr(function(e, t) {
                                return oi(e, 1, t)
                            }),
                            lm = nr(function(e, t, n) {
                                return oi(e, El(t) || 0, n)
                            });
                        Ds.Cache = cn;
                        var cm = _d(function(e, t) {
                                t = 1 == t.length && hm(t[0]) ? g(t[0], A(ba())) : g(mi(t, 1), A(ba()));
                                var n = t.length;
                                return nr(function(i) {
                                    for (var r = -1, a = Gu(i.length, n); ++r < a;) i[r] = t[r].call(this, i[r]);
                                    return s(e, this, i)
                                })
                            }),
                            um = nr(function(e, t) {
                                var n = K(t, _a(um));
                                return ca(e, be, re, t, n)
                            }),
                            dm = nr(function(e, t) {
                                var n = K(t, _a(dm));
                                return ca(e, Se, re, t, n)
                            }),
                            mm = ha(function(e, t) {
                                return ca(e, Ee, re, re, re, t)
                            }),
                            pm = aa(yi),
                            fm = aa(function(e, t) {
                                return e >= t
                            }),
                            gm = Ci(function() {
                                return arguments
                            }()) ? Ci : function(e) {
                                return al(e) && hu.call(e, "callee") && !Uu.call(e, "callee")
                            },
                            hm = nu.isArray,
                            vm = Vn ? A(Vn) : Oi,
                            km = Mu || Mc,
                            ym = Bn ? A(Bn) : xi,
                            _m = Mn ? A(Mn) : Di,
                            bm = Hn ? A(Hn) : Ti,
                            Sm = qn ? A(qn) : Ai,
                            Nm = zn ? A(zn) : ji,
                            Em = aa(Bi),
                            wm = aa(function(e, t) {
                                return e <= t
                            }),
                            Cm = Hr(function(e, t) {
                                if (Ba(t) || Gs(t)) return void Pr(t, Bl(t), e);
                                for (var n in t) hu.call(t, n) && Wn(e, n, t[n])
                            }),
                            Om = Hr(function(e, t) {
                                Pr(t, Ml(t), e)
                            }),
                            xm = Hr(function(e, t, n, i) {
                                Pr(t, Ml(t), e, i)
                            }),
                            Um = Hr(function(e, t, n, i) {
                                Pr(t, Bl(t), e, i)
                            }),
                            Fm = ha(ti),
                            Dm = nr(function(e) {
                                return e.push(re, ua), s(xm, re, e)
                            }),
                            Rm = nr(function(e) {
                                return e.push(re, da), s(Lm, re, e)
                            }),
                            Im = Xr(function(e, t, n) {
                                e[t] = n
                            }, xc(Fc)),
                            Tm = Xr(function(e, t, n) {
                                hu.call(e, t) ? e[t].push(n) : e[t] = [n]
                            }, ba),
                            Am = nr(wi),
                            jm = Hr(function(e, t, n) {
                                zi(e, t, n)
                            }),
                            Lm = Hr(function(e, t, n, i) {
                                zi(e, t, n, i)
                            }),
                            Pm = ha(function(e, t) {
                                var n = {};
                                if (null == e) return n;
                                var i = !1;
                                t = g(t, function(t) {
                                    return t = Nr(t, e), i || (i = t.length > 1), t
                                }), Pr(e, ka(e), n), i && (n = ii(n, de | me | pe, ma));
                                for (var r = t.length; r--;) gr(n, t[r]);
                                return n
                            }),
                            Vm = ha(function(e, t) {
                                return null == e ? {} : Ki(e, t)
                            }),
                            Bm = la(Bl),
                            Mm = la(Ml),
                            Hm = $r(function(e, t, n) {
                                return t = t.toLowerCase(), e + (n ? rc(t) : t)
                            }),
                            qm = $r(function(e, t, n) {
                                return e + (n ? "-" : "") + t.toLowerCase()
                            }),
                            zm = $r(function(e, t, n) {
                                return e + (n ? " " : "") + t.toLowerCase()
                            }),
                            Wm = Gr("toLowerCase"),
                            Gm = $r(function(e, t, n) {
                                return e + (n ? "_" : "") + t.toLowerCase()
                            }),
                            $m = $r(function(e, t, n) {
                                return e + (n ? " " : "") + Qm(t)
                            }),
                            Km = $r(function(e, t, n) {
                                return e + (n ? " " : "") + t.toUpperCase()
                            }),
                            Qm = Gr("toUpperCase"),
                            Ym = nr(function(e, t) {
                                try {
                                    return s(e, re, t)
                                } catch (e) {
                                    return Xs(e) ? e : new ru(e)
                                }
                            }),
                            Jm = ha(function(e, t) {
                                return c(t, function(t) {
                                    t = Za(t), ei(e, t, am(e[t], e))
                                }), e
                            }),
                            Zm = Jr(),
                            Xm = Jr(!0),
                            ep = nr(function(e, t) {
                                return function(n) {
                                    return wi(n, e, t)
                                }
                            }),
                            tp = nr(function(e, t) {
                                return function(n) {
                                    return wi(e, n, t)
                                }
                            }),
                            np = ta(g),
                            ip = ta(d),
                            rp = ta(y),
                            ap = ra(),
                            op = ra(!0),
                            sp = ea(function(e, t) {
                                return e + t
                            }, 0),
                            lp = sa("ceil"),
                            cp = ea(function(e, t) {
                                return e / t
                            }, 1),
                            up = sa("floor"),
                            dp = ea(function(e, t) {
                                return e * t
                            }, 1),
                            mp = sa("round"),
                            pp = ea(function(e, t) {
                                return e - t
                            }, 0);
                        return n.after = Es, n.ary = ws, n.assign = Cm, n.assignIn = Om, n.assignInWith = xm, n.assignWith = Um, n.at = Fm, n.before = Cs, n.bind = am, n.bindAll = Jm, n.bindKey = om, n.castArray = Vs, n.chain = Yo, n.chunk = no, n.compact = io, n.concat = ro, n.cond = Cc, n.conforms = Oc, n.constant = xc, n.countBy = Yd, n.create = xl, n.curry = Os, n.curryRight = xs, n.debounce = Us, n.defaults = Dm, n.defaultsDeep = Rm, n.defer = sm, n.delay = lm, n.difference = Rd, n.differenceBy = Id, n.differenceWith = Td, n.drop = ao, n.dropRight = oo, n.dropRightWhile = so, n.dropWhile = lo, n.fill = co, n.filter = ss, n.flatMap = ls, n.flatMapDeep = cs, n.flatMapDepth = us, n.flatten = po, n.flattenDeep = fo, n.flattenDepth = go, n.flip = Fs, n.flow = Zm, n.flowRight = Xm, n.fromPairs = ho, n.functions = Al, n.functionsIn = jl, n.groupBy = Xd, n.initial = yo, n.intersection = Ad, n.intersectionBy = jd, n.intersectionWith = Ld, n.invert = Im, n.invertBy = Tm, n.invokeMap = em, n.iteratee = Dc, n.keyBy = tm, n.keys = Bl, n.keysIn = Ml, n.map = fs, n.mapKeys = Hl, n.mapValues = ql, n.matches = Rc, n.matchesProperty = Ic, n.memoize = Ds, n.merge = jm, n.mergeWith = Lm, n.method = ep, n.methodOf = tp, n.mixin = Tc, n.negate = Rs, n.nthArg = Lc, n.omit = Pm, n.omitBy = zl, n.once = Is, n.orderBy = gs, n.over = np, n.overArgs = cm, n.overEvery = ip, n.overSome = rp, n.partial = um, n.partialRight = dm, n.partition = nm, n.pick = Vm, n.pickBy = Wl, n.property = Pc, n.propertyOf = Vc, n.pull = Pd, n.pullAll = Eo, n.pullAllBy = wo, n.pullAllWith = Co, n.pullAt = Vd, n.range = ap, n.rangeRight = op, n.rearg = mm, n.reject = ks, n.remove = Oo, n.rest = Ts, n.reverse = xo, n.sampleSize = _s, n.set = $l, n.setWith = Kl, n.shuffle = bs, n.slice = Uo, n.sortBy = im, n.sortedUniq = jo, n.sortedUniqBy = Lo, n.split = gc, n.spread = As, n.tail = Po, n.take = Vo, n.takeRight = Bo, n.takeRightWhile = Mo, n.takeWhile = Ho, n.tap = Jo, n.throttle = js, n.thru = Zo, n.toArray = _l, n.toPairs = Bm, n.toPairsIn = Mm, n.toPath = Gc, n.toPlainObject = wl, n.transform = Ql, n.unary = Ls, n.union = Bd, n.unionBy = Md, n.unionWith = Hd, n.uniq = qo, n.uniqBy = zo, n.uniqWith = Wo, n.unset = Yl, n.unzip = Go, n.unzipWith = $o, n.update = Jl, n.updateWith = Zl, n.values = Xl, n.valuesIn = ec, n.without = qd, n.words = wc, n.wrap = Ps, n.xor = zd, n.xorBy = Wd, n.xorWith = Gd, n.zip = $d, n.zipObject = Ko, n.zipObjectDeep = Qo, n.zipWith = Kd, n.entries = Bm, n.entriesIn = Mm, n.extend = Om, n.extendWith = xm, Tc(n, n), n.add = sp, n.attempt = Ym, n.camelCase = Hm, n.capitalize = rc, n.ceil = lp, n.clamp = tc, n.clone = Bs, n.cloneDeep = Hs, n.cloneDeepWith = qs, n.cloneWith = Ms, n.conformsTo = zs, n.deburr = ac, n.defaultTo = Uc, n.divide = cp, n.endsWith = oc, n.eq = Ws, n.escape = sc, n.escapeRegExp = lc, n.every = os, n.find = Jd, n.findIndex = uo, n.findKey = Ul, n.findLast = Zd, n.findLastIndex = mo, n.findLastKey = Fl, n.floor = up, n.forEach = ds, n.forEachRight = ms, n.forIn = Dl, n.forInRight = Rl, n.forOwn = Il, n.forOwnRight = Tl, n.get = Ll, n.gt = pm, n.gte = fm, n.has = Pl, n.hasIn = Vl, n.head = vo, n.identity = Fc, n.includes = ps, n.indexOf = ko, n.inRange = nc, n.invoke = Am, n.isArguments = gm, n.isArray = hm, n.isArrayBuffer = vm, n.isArrayLike = Gs, n.isArrayLikeObject = $s, n.isBoolean = Ks, n.isBuffer = km, n.isDate = ym, n.isElement = Qs, n.isEmpty = Ys, n.isEqual = Js, n.isEqualWith = Zs, n.isError = Xs, n.isFinite = el, n.isFunction = tl, n.isInteger = nl, n.isLength = il, n.isMap = _m, n.isMatch = ol, n.isMatchWith = sl, n.isNaN = ll, n.isNative = cl, n.isNil = dl, n.isNull = ul, n.isNumber = ml, n.isObject = rl, n.isObjectLike = al, n.isPlainObject = pl, n.isRegExp = bm, n.isSafeInteger = fl, n.isSet = Sm, n.isString = gl, n.isSymbol = hl, n.isTypedArray = Nm, n.isUndefined = vl, n.isWeakMap = kl, n.isWeakSet = yl, n.join = _o, n.kebabCase = qm, n.last = bo, n.lastIndexOf = So, n.lowerCase = zm, n.lowerFirst = Wm, n.lt = Em, n.lte = wm, n.max = Kc, n.maxBy = Qc, n.mean = Yc, n.meanBy = Jc, n.min = Zc, n.minBy = Xc, n.stubArray = Bc, n.stubFalse = Mc, n.stubObject = Hc, n.stubString = qc, n.stubTrue = zc, n.multiply = dp, n.nth = No, n.noConflict = Ac, n.noop = jc, n.now = rm, n.pad = cc, n.padEnd = uc, n.padStart = dc, n.parseInt = mc, n.random = ic, n.reduce = hs, n.reduceRight = vs, n.repeat = pc, n.replace = fc, n.result = Gl, n.round = mp, n.runInContext = e, n.sample = ys, n.size = Ss, n.snakeCase = Gm, n.some = Ns, n.sortedIndex = Fo, n.sortedIndexBy = Do, n.sortedIndexOf = Ro, n.sortedLastIndex = Io, n.sortedLastIndexBy = To, n.sortedLastIndexOf = Ao, n.startCase = $m, n.startsWith = hc, n.subtract = pp, n.sum = eu, n.sumBy = tu, n.template = vc, n.times = Wc, n.toFinite = bl, n.toInteger = Sl, n.toLength = Nl, n.toLower = kc, n.toNumber = El, n.toSafeInteger = Cl, n.toString = Ol, n.toUpper = yc, n.trim = _c, n.trimEnd = bc, n.trimStart = Sc, n.truncate = Nc, n.unescape = Ec, n.uniqueId = $c, n.upperCase = Km, n.upperFirst = Qm, n.each = ds, n.eachRight = ms, n.first = vo, Tc(n, function() {
                            var e = {};
                            return pi(n, function(t, i) {
                                hu.call(n.prototype, i) || (e[i] = t)
                            }), e
                        }(), {
                            chain: !1
                        }), n.VERSION = "4.17.4", c(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                            n[e].placeholder = n
                        }), c(["drop", "take"], function(e, t) {
                            _.prototype[e] = function(n) {
                                n = n === re ? 1 : Wu(Sl(n), 0);
                                var i = this.__filtered__ && !t ? new _(this) : this.clone();
                                return i.__filtered__ ? i.__takeCount__ = Gu(n, i.__takeCount__) : i.__views__.push({
                                    size: Gu(n, je),
                                    type: e + (i.__dir__ < 0 ? "Right" : "")
                                }), i
                            }, _.prototype[e + "Right"] = function(t) {
                                return this.reverse()[e](t).reverse()
                            }
                        }), c(["filter", "map", "takeWhile"], function(e, t) {
                            var n = t + 1,
                                i = n == Fe || 3 == n;
                            _.prototype[e] = function(e) {
                                var t = this.clone();
                                return t.__iteratees__.push({
                                    iteratee: ba(e, 3),
                                    type: n
                                }), t.__filtered__ = t.__filtered__ || i, t
                            }
                        }), c(["head", "last"], function(e, t) {
                            var n = "take" + (t ? "Right" : "");
                            _.prototype[e] = function() {
                                return this[n](1).value()[0]
                            }
                        }), c(["initial", "tail"], function(e, t) {
                            var n = "drop" + (t ? "" : "Right");
                            _.prototype[e] = function() {
                                return this.__filtered__ ? new _(this) : this[n](1)
                            }
                        }), _.prototype.compact = function() {
                            return this.filter(Fc)
                        }, _.prototype.find = function(e) {
                            return this.filter(e).head()
                        }, _.prototype.findLast = function(e) {
                            return this.reverse().find(e)
                        }, _.prototype.invokeMap = nr(function(e, t) {
                            return "function" == typeof e ? new _(this) : this.map(function(n) {
                                return wi(n, e, t)
                            })
                        }), _.prototype.reject = function(e) {
                            return this.filter(Rs(ba(e)))
                        }, _.prototype.slice = function(e, t) {
                            e = Sl(e);
                            var n = this;
                            return n.__filtered__ && (e > 0 || t < 0) ? new _(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== re && (t = Sl(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n)
                        }, _.prototype.takeRightWhile = function(e) {
                            return this.reverse().takeWhile(e).reverse()
                        }, _.prototype.toArray = function() {
                            return this.take(je)
                        }, pi(_.prototype, function(e, t) {
                            var i = /^(?:filter|find|map|reject)|While$/.test(t),
                                a = /^(?:head|last)$/.test(t),
                                o = n[a ? "take" + ("last" == t ? "Right" : "") : t],
                                s = a || /^find/.test(t);
                            o && (n.prototype[t] = function() {
                                var t = this.__wrapped__,
                                    l = a ? [1] : arguments,
                                    c = t instanceof _,
                                    u = l[0],
                                    d = c || hm(t),
                                    m = function(e) {
                                        var t = o.apply(n, h([e], l));
                                        return a && p ? t[0] : t
                                    };
                                d && i && "function" == typeof u && 1 != u.length && (c = d = !1);
                                var p = this.__chain__,
                                    f = !!this.__actions__.length,
                                    g = s && !p,
                                    v = c && !f;
                                if (!s && d) {
                                    t = v ? t : new _(this);
                                    var k = e.apply(t, l);
                                    return k.__actions__.push({
                                        func: Zo,
                                        args: [m],
                                        thisArg: re
                                    }), new r(k, p)
                                }
                                return g && v ? e.apply(this, l) : (k = this.thru(m), g ? a ? k.value()[0] : k.value() : k)
                            })
                        }), c(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                            var t = du[e],
                                i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                r = /^(?:pop|shift)$/.test(e);
                            n.prototype[e] = function() {
                                var e = arguments;
                                if (r && !this.__chain__) {
                                    var n = this.value();
                                    return t.apply(hm(n) ? n : [], e)
                                }
                                return this[i](function(n) {
                                    return t.apply(hm(n) ? n : [], e)
                                })
                            }
                        }), pi(_.prototype, function(e, t) {
                            var i = n[t];
                            if (i) {
                                var r = i.name + "";
                                (rd[r] || (rd[r] = [])).push({
                                    name: t,
                                    func: i
                                })
                            }
                        }), rd[Zr(re, ve).name] = [{
                            name: "wrapper",
                            func: re
                        }], _.prototype.clone = U, _.prototype.reverse = J, _.prototype.value = te, n.prototype.at = Qd, n.prototype.chain = Xo, n.prototype.commit = es, n.prototype.next = ts, n.prototype.plant = is, n.prototype.reverse = rs, n.prototype.toJSON = n.prototype.valueOf = n.prototype.value = as, n.prototype.first = n.prototype.head, Ru && (n.prototype[Ru] = ns), n
                    }();
                In._ = Qn, (r = function() {
                    return Qn
                }.call(t, n, t, i)) !== re && (i.exports = r)
            }).call(this)
        }).call(t, n(34), n(447)(e))
    },
    873: function(e, t, n) {
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
    884: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        }
        var r = n(6),
            a = n(0),
            o = n(1),
            s = n(2),
            l = n(115),
            c = n(385),
            u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            m = function(e) {
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
                                        return t = i.sent(), Object(c.h)(t.getSlotElementId()), this.setState({
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
                            if (n.props.slotID === c.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === c.b.directory.banner) {
                                var i = n.slotRef.querySelector(u);
                                return void(i && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === c.b.directory.rectangle) {
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
                    c.g.addListener(c.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
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
            p = m,
            f = Object(r.a)(i)(p);
        n.d(t, "a", function() {
            return f
        })
    },
    902: function(e, t, n) {
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
                        if (!t) return void c.i.warn("<FeedItem /> initialized missing a <ScrollableArea /> provider");
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
        var a = n(925),
            o = n(0),
            s = n(15),
            l = n(1),
            c = n(2);
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
    907: function(e, t, n) {
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
                                "1x": Object(c.e)(e.emoteID, 1),
                                "2x": Object(c.e)(e.emoteID, 2),
                                "4x": Object(c.e)(e.emoteID, 4)
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
                }, Object(u.a)(e.authorName, e.author.login)),
                messageParts: Object(c.f)(e.body.content, r, e.bitsUsed, t, n, e.authorName)
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
            s = n(830),
            l = n(818),
            c = n(134),
            u = n(386)
    },
    908: function(e, t) {
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
    913: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                sideNavCollapsed: !e.ui.sideNavExpanded,
                rightColumnCollapsed: !e.ui.rightColumnExpanded
            }
        }
        var r = n(6),
            a = n(0),
            o = n(1),
            s = n(384),
            l = n(146),
            c = n(147),
            u = n(399),
            d = n(452),
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
                    var e = document.querySelector("." + d.b),
                        t = 0,
                        n = 0;
                    e ? (t = e.getBoundingClientRect().left, n = window.innerWidth - e.getBoundingClientRect().right) : n = window.innerWidth;
                    var i = {
                        position: "fixed",
                        top: u.a,
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
                    setRootScrollableOffsetHeight: o.PropTypes.func,
                    resetRootScrollableOffsetHeight: o.PropTypes.func
                }, t
            }(o.Component),
            p = Object(r.a)(i)(m);
        n.d(t, "a", function() {
            return p
        })
    },
    914: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(2),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        assignmentDetermined: !1,
                        assignment: ""
                    }, t.logger = a.n.logger.withCategory("component-experiment"), t.didUnmount = !1, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a.n.experiments.getAssignment(this.props.name, this.props.channel ? {
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
            }(r.Component),
            s = o;
        n.d(t, "a", function() {
            return s
        })
    },
    925: function(e, t, n) {
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
                    var i = t.split(":");
                    return {
                        type: s.c,
                        id: i[i.length - 1]
                    };
                case "Stream":
                    var r = e.content;
                    return {
                        type: s.d,
                        id: r.broadcaster.id + ":" + t
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
        var r, a = n(871),
            o = (n.n(a), n(2)),
            s = n(1002);
        ! function(e) {
            e.Create = "create", e.Remove = "remove"
        }(r || (r = {}));
        var l = function(e, t, n) {
            o.m.track(e, Object(a.merge)(t, n))
        }
    },
    926: function(e, t, n) {
        "use strict";
        var i, r = n(0),
            a = n(1),
            o = n(2),
            s = n(383),
            l = n(5),
            c = n(3),
            u = (n(1076), "embed-overlay");
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
                            m = e.viewCount,
                            p = r && r > 0 ? Object(s.a)(r) : "";
                        return a.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": u
                        }, a.createElement(c.j, {
                            ratio: c.k.Aspect16x9
                        }, a.createElement(c.U, null, a.createElement(c.P, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: c._2.Absolute
                        }, a.createElement("img", {
                            src: l
                        })), a.createElement(c.U, {
                            className: "embed-card__overlay",
                            position: c._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, a.createElement(c.U, {
                            className: "embed-card__play",
                            display: c.H.Flex,
                            justifyContent: c.T.Center,
                            position: c._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, a.createElement(c._8, {
                            asset: c._9.Play,
                            width: 50,
                            height: 50
                        })), a.createElement(c.U, {
                            position: c._2.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && a.createElement(c._21, null, Object(o.c)(new Date(n), "medium")), a.createElement(c.U, null, d === i.Stream && a.createElement(c.U, {
                            display: c.H.Inline,
                            margin: {
                                right: .5
                            }
                        }, a.createElement(c.V, null)), m && a.createElement("span", null, t.getFormattedViewCount(m, d)))), a.createElement(c.U, {
                            position: c._2.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, p && a.createElement(c.U, null, a.createElement(c._21, null, p)))), a.createElement(c._17, {
                            position: c._2.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: c.L.Size5
                        }, d === i.Stream && a.createElement(c.Z, {
                            label: Object(o.d)("Live", "EmbedOverlayPill"),
                            type: c._0.Live
                        }), d === i.Video && a.createElement(c.Z, {
                            label: Object(o.d)("Video", "EmbedOverlayPill"),
                            type: c._0.Overlay
                        }), d === i.Clip && a.createElement(c.Z, {
                            label: Object(o.d)("Clip", "EmbedOverlayPill"),
                            type: c._0.Overlay
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
                    return this.state.showOverlay ? this.getOverlayComponent() : a.createElement(c.j, {
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
            }(a.Component),
            m = Object(l.c)("EmbedOverlay")(d),
            p = m;
        n.d(t, !1, function() {
            return u
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return p
        })
    },
    930: function(e, t) {
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
    }
});
//# sourceMappingURL=pages.front-35b67f6d40aeac271190c22b8234c5c4.js.map