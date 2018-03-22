webpackJsonp([59], {
    "7WFF": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, s, a = n("TToO"),
            r = n("GiK3"),
            o = n("CIox"),
            l = n("3zLD"),
            d = n("7vx8"),
            u = n("rqhk"),
            p = n("6sO2"),
            c = n("oIkB");
        ! function(e) {
            e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration"
        }(i || (i = {})),
        function(e) {
            e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
        }(s || (s = {}));
        var f, m = 5,
            h = 60,
            g = n("Odds"),
            v = n("isxN"),
            y = {
                publishState: s.Unsent,
                errorMessage: ""
            },
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = y, t.onPublish = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.setState({
                                                publishState: s.Sending
                                            }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < m || e > h) return this.setState({
                                            publishState: s.Error,
                                            errorMessage: i.InvalidDuration
                                        }), [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.publishClip(Object(c.a)({
                                            segments: [{
                                                offsetSeconds: this.props.startOffset,
                                                durationSeconds: this.props.endOffset - this.props.startOffset,
                                                speed: 1
                                            }],
                                            slug: this.props.slug,
                                            title: this.props.title
                                        }))];
                                    case 2:
                                        return (t = a.sent()).data.publishClip && t.data.publishClip.error && t.data.publishClip.error.message ? (n = t.data.publishClip.error.message.toLocaleLowerCase(), this.setState({
                                            publishState: s.Error,
                                            errorMessage: n
                                        })) : (this.setState({
                                            publishState: s.Successful
                                        }), this.props.history.push("/" + this.props.slug)), [3, 4];
                                    case 3:
                                        return a.sent(), this.setState({
                                            publishState: s.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.state.publishState === s.Error && e.title.length > 0 && this.props.title !== e.title && this.setState(y)
                }, t.prototype.render = function() {
                    var e = this.props.title.length < 1 || this.state.publishState === s.Error,
                        t = !this.props.isClipResolved || this.state.publishState === s.Sending;
                    return r.createElement(g._4, null, this.props.slug, r.createElement(g.u, {
                        onClick: this.onPublish,
                        disabled: e,
                        state: t ? g.z.Loading : g.z.Default,
                        size: g.y.Large,
                        blurAfterClick: !0
                    }, Object(p.d)("Publish", "ClipsPublishButton")))
                }, t = a.__decorate([Object(d.a)(v, {
                    name: "publishClip"
                })], t)
            }(r.Component),
            S = Object(o.e)(k);
        ! function(e) {
            e.creating = "creating", e.created = "created", e.failed = "failed"
        }(f || (f = {}));
        var b = n("vwd7"),
            P = n("f8OD"),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isPollingTimedOut: !1,
                        isPlayerIframeLoaded: !1
                    }, t.timeoutID = 0, t.hasSentEditClip = !1, t.onLoaded = function() {
                        t.setState({
                            isPlayerIframeLoaded: !0
                        })
                    }, t.getIsClipResolved = function(e) {
                        var n = t.getRawMediaStatus(e);
                        return t.getRawMediaExists(e) && (n === f.created || n === f.failed)
                    }, t.getIsCreationFailed = function(e) {
                        return t.getRawMediaExists(e) && t.getRawMediaStatus(e) === f.failed
                    }, t.getRawMediaStatus = function(e) {
                        return e.data.clip && e.data.clip.rawMedia && e.data.clip.rawMedia.status || ""
                    }, t.getRawMediaExists = function(e) {
                        return Boolean(e.data.clip && e.data.clip.rawMedia)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.getIsClipResolved(this.props) ? this.props.data.stopPolling() : this.timeoutID = setTimeout(function() {
                        return e.setState({
                            isPollingTimedOut: !0
                        })
                    }, 7e4)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getIsClipResolved(e) && (this.props.data.stopPolling(), clearTimeout(this.timeoutID))
                }, t.prototype.componentWillUnmount = function() {
                    this.timeoutID && clearTimeout(this.timeoutID), this.props.data.stopPolling()
                }, t.prototype.componentDidUpdate = function() {
                    var e = this.getIsClipResolved(this.props) && !this.getIsCreationFailed(this.props);
                    !this.hasSentEditClip && e && this.state.isPlayerIframeLoaded && this.props.data.clip && this.props.data.clip.rawMedia && (this.props.playerConnection.sendMessage(Object(u.r)(this.props.data.clip.rawMedia)), this.hasSentEditClip = !0)
                }, t.prototype.render = function() {
                    if (this.state.isPollingTimedOut || this.getIsCreationFailed(this.props)) return r.createElement(o.a, {
                        to: "/500"
                    });
                    var e = this.props.data.clip;
                    if (!e || !e.rawMedia) return r.createElement(g._4, null);
                    var t, n, i = (t = e.rawMedia.defaultClipInitialOffset, n = e.rawMedia.duration - e.rawMedia.defaultClipInitialOffset, {
                        startOffset: t,
                        endOffset: t + n
                    });
                    return r.createElement(g._4, null, r.createElement(b.b, {
                        slug: this.props.slug,
                        onLoaded: this.onLoaded,
                        playerType: b.a.Editing
                    }), r.createElement(S, {
                        isClipResolved: this.getIsClipResolved(this.props),
                        slug: this.props.slug,
                        title: "Hi!!",
                        startOffset: i.startOffset,
                        endOffset: i.endOffset
                    }))
                }, t
            }(r.Component),
            O = Object(l.compose)(Object(u.t)({
                playerId: function(e) {
                    return e.slug
                }
            }), Object(d.a)(P, {
                options: function(e) {
                    return {
                        pollInterval: 1e3,
                        fetchPolicy: "network",
                        variables: {
                            slug: e.slug
                        }
                    }
                }
            }))(C),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return "/:slug/edit" === this.props.match.path ? (e = this.props.match.params.slug, r.createElement(o.a, {
                        to: {
                            pathname: "/create",
                            state: {
                                slug: e
                            }
                        }
                    })) : this.props.location.state && this.props.location.state.slug ? (e = this.props.location.state.slug, r.createElement(g._4, null, r.createElement(O, {
                        slug: e
                    }))) : r.createElement(o.a, {
                        to: "/"
                    })
                }, t
            }(r.Component);
        n.d(t, "ClipsCreate", function() {
            return E
        })
    },
    f8OD: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsRawMedia"
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
                                    value: "rawMedia"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "defaultClipInitialOffset"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "duration"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "filmStripFrames"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "filmStripSecondsPerFrame"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "frameHeight"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "frameWidth"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "spritesheetURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "status"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "videoURL"
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
                end: 199
            }
        };
        n.loc.source = {
            body: "query ClipsRawMedia($slug: ID!) {\nclip(slug: $slug) {\nrawMedia {\ndefaultClipInitialOffset\nduration\nfilmStripFrames\nfilmStripSecondsPerFrame\nframeHeight\nframeWidth\nspritesheetURL\nstatus\nvideoURL\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    icZh: function(e, t, n) {
        "use strict";
        t.a = r, t.b = function(e) {
            var t = r();
            t && t.length >= a && (t = t.slice(1, a));
            i.l.set(s, JSON.stringify(t.concat([e])))
        };
        var i = n("6sO2"),
            s = "MOST_RECENT_CLIPS_WATCHED_STORAGE_KEY",
            a = 10;

        function r() {
            return JSON.parse(i.l.get(s, "[]"))
        }
    },
    isxN: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "PublishClip"
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
                                value: "PublishClipInput"
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
                            value: "publishClip"
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
                                    value: "clip"
                                },
                                arguments: [],
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
                                            value: "slug"
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
                                            value: "message"
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
                end: 120
            }
        };
        n.loc.source = {
            body: "mutation PublishClip($input: PublishClipInput!) {\npublishClip(input: $input) {\nclip {\ntitle\nslug\n}\nerror {\nmessage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    rqhk: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            s = n("GiK3"),
            a = n("kJau");

        function r(e) {
            return function(t) {
                return function(n) {
                    function o(t) {
                        var s = n.call(this, t) || this;
                        return s.messageHandlers = [], s.handlePlayerAdded = function() {
                            s.getPlayer() && !s.isConnected && (s.isConnected = !0, p.off(d, s.handlePlayerAdded), p.on(u, s.handlePlayerRemoved), window.addEventListener("message", s.onIncomingPlayerMessage))
                        }, s.handlePlayerRemoved = function() {
                            !s.getPlayer() && s.isConnected && (s.isConnected = !1, p.off(u, s.handlePlayerRemoved), p.on(d, s.handlePlayerAdded), window.removeEventListener("message", s.onIncomingPlayerMessage))
                        }, s.sendMessage = function(e) {
                            var t = s.getPlayer();
                            t && t.postMessage(e, a.a)
                        }, s.onIncomingPlayerMessage = function(e) {
                            e.origin === a.a && e.data.namespace === M && s.messageHandlers.forEach(function(t) {
                                t(e.data)
                            })
                        }, s.updatePlayerProps = function(t) {
                            if (e.requestedPlayerProps && (t.method === _ || t.method === I)) {
                                var n = t.args[0],
                                    a = e.requestedPlayerProps.reduce(function(e, t) {
                                        var i = n[t];
                                        return void 0 !== i && s.state.playerProps[t] !== i && (e[t] = i), e
                                    }, {});
                                Object.keys(a).length && s.setState({
                                    playerProps: i.__assign({}, s.state.playerProps, a)
                                })
                            }
                        }, e.requestedPlayerProps && s.messageHandlers.push(s.updatePlayerProps), s.state = {
                            playerProps: {}
                        }, s
                    }
                    return i.__extends(o, n), o.prototype.componentWillMount = function() {
                        p.on(d, this.handlePlayerAdded)
                    }, o.prototype.componentWillUnmount = function() {
                        p.off(d, this.handlePlayerAdded), p.off(u, this.handlePlayerRemoved)
                    }, o.prototype.render = function() {
                        var e = {
                            playerConnection: {
                                sendMessage: this.sendMessage,
                                registerMessageHandler: this.registerMessageHandler,
                                playerProps: this.state.playerProps
                            }
                        };
                        return s.createElement(t, i.__assign({}, this.props, e))
                    }, o.prototype.getPlayer = function() {
                        return l[e.playerId(this.props)]
                    }, o.prototype.registerMessageHandler = function(e) {
                        this.messageHandlers.push(e)
                    }, o.displayName = r.name + "(" + (t.displayName || t.name) + ")", o
                }(s.Component)
            }
        }
        var o = n("BzvE"),
            l = {},
            d = "player-storage-added",
            u = "player-storage-removed",
            p = new o.EventEmitter;

        function c(e, t) {
            l[e] = t, p.emit(d)
        }

        function f(e) {
            delete l[e], p.emit(u)
        }

        function m(e) {
            return {
                args: [void 0 === e.arg ? {} : e.arg],
                method: e.method,
                namespace: void 0 === e.namespace ? w : e.namespace
            }
        }

        function h() {
            return m({
                method: "pause"
            })
        }

        function g() {
            return m({
                method: "play"
            })
        }

        function v(e) {
            return m({
                method: "closeModeration",
                arg: e
            })
        }

        function y() {
            return m({
                method: C
            })
        }

        function k(e) {
            return m({
                method: E,
                arg: e
            })
        }

        function S(e) {
            return m({
                method: O,
                arg: e
            })
        }

        function b() {
            return m({
                method: "fullscreen",
                arg: !1
            })
        }

        function P(e) {
            return m({
                method: "setEditClip",
                arg: e
            })
        }
        var C = "subscribe",
            O = "setclip",
            E = "setAutoplay",
            _ = "bridgestateupdate",
            I = "bridgestorestateupdate",
            w = "player.embed.host",
            M = "player.embed.client";
        n.d(t, "t", function() {
            return r
        }), n.d(t, "p", function() {
            return l
        }), n.d(t, "n", function() {
            return d
        }), n.d(t, "o", function() {
            return u
        }), n.d(t, "i", function() {
            return p
        }), n.d(t, "s", function() {
            return c
        }), n.d(t, "q", function() {
            return f
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, !1, function() {
            return g
        }), n.d(t, "h", function() {
            return v
        }), n.d(t, "m", function() {
            return y
        }), n.d(t, "k", function() {
            return k
        }), n.d(t, "l", function() {
            return S
        }), n.d(t, "j", function() {
            return b
        }), n.d(t, "r", function() {
            return P
        }), n.d(t, "g", function() {
            return C
        }), n.d(t, "f", function() {
            return O
        }), n.d(t, "e", function() {
            return E
        }), n.d(t, "c", function() {
            return _
        }), n.d(t, "d", function() {
            return I
        }), n.d(t, "b", function() {
            return w
        }), n.d(t, "a", function() {
            return M
        }), n.d(t, !1, function() {
            return "report"
        }), n.d(t, !1, function() {
            return "delete"
        }), n.d(t, !1, function() {
            return "deleteAll"
        })
    },
    vtXo: function(e, t) {},
    vwd7: function(e, t, n) {
        "use strict";
        var i, s = n("TToO"),
            a = n("GiK3"),
            r = n("CSlQ"),
            o = n("rqhk"),
            l = n("kJau"),
            d = n("icZh"),
            u = n("Odds");
        n("vtXo");
        ! function(e) {
            e.Viewing = "clips-viewing", e.Editing = "clips-editing"
        }(i || (i = {}));
        var p = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.hasSetPlayerRef = !1, n.setInitialSlug = function(e) {
                    n.state.initialSlug || (n.setState({
                        initialSlug: e
                    }), Object(d.b)(e))
                }, n.setPlayerRef = function(e) {
                    n.playerRef = e
                }, n.setIsLoaded = function() {
                    n.setState({
                        isLoaded: !0
                    }), n.props.onLoaded && n.props.onLoaded()
                };
                var i = n.props.slug;
                return n.state = {
                    initialSlug: i,
                    isLoaded: !1
                }, i && Object(d.b)(i), n
            }
            return s.__extends(t, e), t.prototype.componentDidMount = function() {
                this.setInitialSlug(this.props.slug)
            }, t.prototype.componentWillReceiveProps = function(e) {
                this.state.initialSlug || this.setInitialSlug(e.slug), this.props.slug !== e.slug && e.slug && this.setClip(e.slug)
            }, t.prototype.componentWillUnmount = function() {
                Object(o.q)(this.props.slug)
            }, t.prototype.componentDidUpdate = function() {
                !this.hasSetPlayerRef && this.playerRef && (this.hasSetPlayerRef = !0, Object(o.s)(this.props.slug, this.playerRef.contentWindow), this.playerRef.contentWindow.postMessage(Object(o.m)(), l.a))
            }, t.prototype.render = function() {
                return this.state.initialSlug ? a.createElement(u._27, {
                    className: "clips-video-iframe",
                    position: u._11.Relative,
                    fullWidth: !0
                }, a.createElement(u.j, {
                    ratio: u.k.Aspect16x9
                }, a.createElement(u._27, {
                    display: this.state.isLoaded ? u.P.Hide : u.P.Flex,
                    color: u.J.Overlay,
                    alignItems: u.c.Center,
                    justifyContent: u._3.Center
                }, a.createElement(u._6, {
                    size: u._25.Large,
                    inheritColor: !0
                })), a.createElement(u.Y, {
                    display: this.state.isLoaded ? u.P.Block : u.P.HideAccessible
                }, a.createElement("iframe", {
                    src: l.a + "/?player=" + this.props.playerType + "&clip=" + this.state.initialSlug + "&origin=" + window.location.origin + "&branding=false",
                    frameBorder: "0",
                    scrolling: "no",
                    allowFullScreen: !0,
                    ref: this.setPlayerRef,
                    onLoad: this.setIsLoaded
                })))) : null
            }, t.prototype.setClip = function(e) {
                this.playerRef && (this.playerRef.contentWindow.postMessage(Object(o.l)(e), l.a), Object(d.b)(e))
            }, t = s.__decorate([Object(r.d)("ClipsVideoIframe", {
                autoReportInteractive: !0
            })], t)
        }(a.Component);
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return p
        })
    }
});
//# sourceMappingURL=sites.clips.pages.create-fde535a0d588964e35041ae16c041241.js.map