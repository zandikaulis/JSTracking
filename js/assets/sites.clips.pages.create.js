webpackJsonp([59], {
    "7WFF": function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, s, a = i("TToO"),
            r = i("GiK3"),
            o = i("CIox"),
            l = i("3zLD"),
            d = i("7vx8"),
            u = i("rqhk"),
            p = i("6sO2"),
            c = i("oIkB");
        ! function(e) {
            e.AlreadyPublished = "already_published", e.EditingWindowExpired = "editing_window_expired", e.InvalidSpeedDuration = "invalid_speed_duration", e.InvalidDuration = "invalid_duration"
        }(n || (n = {})),
        function(e) {
            e.Unsent = "unsent", e.Sending = "sending", e.Error = "error", e.Successful = "successful"
        }(s || (s = {}));
        var f, m = 5,
            h = 60,
            g = i("Odds"),
            v = i("isxN"),
            y = {
                publishState: s.Unsent,
                errorMessage: ""
            },
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = y, t.onPublish = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, i;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.setState({
                                                publishState: s.Sending
                                            }), e = this.props.endOffset - this.props.startOffset, this.props.startOffset > this.props.endOffset || e < m || e > h) return this.setState({
                                            publishState: s.Error,
                                            errorMessage: n.InvalidDuration
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
                                        return (t = a.sent()).data.publishClip && t.data.publishClip.error && t.data.publishClip.error.message ? (i = t.data.publishClip.error.message.toLocaleLowerCase(), this.setState({
                                            publishState: s.Error,
                                            errorMessage: i
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
                    return r.createElement(g._6, null, this.props.slug, r.createElement(g.u, {
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
            k = Object(o.f)(b);
        ! function(e) {
            e.creating = "creating", e.created = "created", e.failed = "failed"
        }(f || (f = {}));
        var S = i("vwd7"),
            P = i("f8OD"),
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
                        var i = t.getRawMediaStatus(e);
                        return t.getRawMediaExists(e) && (i === f.created || i === f.failed)
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
                    if (this.state.isPollingTimedOut || this.getIsCreationFailed(this.props)) return r.createElement(o.b, {
                        to: "/500"
                    });
                    var e = this.props.data.clip;
                    if (!e || !e.rawMedia) return r.createElement(g._6, null);
                    var t, i, n = (t = e.rawMedia.defaultClipInitialOffset, i = e.rawMedia.duration - e.rawMedia.defaultClipInitialOffset, {
                        startOffset: t,
                        endOffset: t + i
                    });
                    return r.createElement(g._6, null, r.createElement(S.b, {
                        slug: this.props.slug,
                        onLoaded: this.onLoaded,
                        playerType: S.a.Editing
                    }), r.createElement(k, {
                        isClipResolved: this.getIsClipResolved(this.props),
                        slug: this.props.slug,
                        title: "Hi!!",
                        startOffset: n.startOffset,
                        endOffset: n.endOffset
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
            _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return "/:slug/edit" === this.props.match.path ? (e = this.props.match.params.slug, r.createElement(o.b, {
                        to: {
                            pathname: "/create",
                            state: {
                                slug: e
                            }
                        }
                    })) : this.props.location.state && this.props.location.state.slug ? (e = this.props.location.state.slug, r.createElement(g._6, null, r.createElement(O, {
                        slug: e
                    }))) : r.createElement(o.b, {
                        to: "/"
                    })
                }, t
            }(r.Component);
        i.d(t, "ClipsCreate", function() {
            return _
        })
    },
    f8OD: function(e, t) {
        var i = {
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
        i.loc.source = {
            body: "query ClipsRawMedia($slug: ID!) {\nclip(slug: $slug) {\nrawMedia {\ndefaultClipInitialOffset\nduration\nfilmStripFrames\nfilmStripSecondsPerFrame\nframeHeight\nframeWidth\nspritesheetURL\nstatus\nvideoURL\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    icZh: function(e, t, i) {
        "use strict";
        t.a = r, t.b = function(e) {
            var t = r();
            t && t.length >= a && (t = t.slice(1, a));
            n.l.set(s, JSON.stringify(t.concat([e])))
        };
        var n = i("6sO2"),
            s = "MOST_RECENT_CLIPS_WATCHED_STORAGE_KEY",
            a = 10;

        function r() {
            return JSON.parse(n.l.get(s, "[]"))
        }
    },
    isxN: function(e, t) {
        var i = {
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
        i.loc.source = {
            body: "mutation PublishClip($input: PublishClipInput!) {\npublishClip(input: $input) {\nclip {\ntitle\nslug\n}\nerror {\nmessage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    rqhk: function(e, t, i) {
        "use strict";
        var n = i("TToO"),
            s = i("GiK3"),
            a = i("kJau");

        function r(e) {
            return function(t) {
                return function(i) {
                    function o(t) {
                        var s = i.call(this, t) || this;
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
                            if (e.requestedPlayerProps && (t.method === E || t.method === I)) {
                                var i = t.args[0],
                                    a = e.requestedPlayerProps.reduce(function(e, t) {
                                        var n = i[t];
                                        return void 0 !== n && s.state.playerProps[t] !== n && (e[t] = n), e
                                    }, {});
                                Object.keys(a).length && s.setState({
                                    playerProps: n.__assign({}, s.state.playerProps, a)
                                })
                            }
                        }, e.requestedPlayerProps && s.messageHandlers.push(s.updatePlayerProps), s.state = {
                            playerProps: {}
                        }, s
                    }
                    return n.__extends(o, i), o.prototype.componentWillMount = function() {
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
                        return s.createElement(t, n.__assign({}, this.props, e))
                    }, o.prototype.getPlayer = function() {
                        return l[e.playerId(this.props)]
                    }, o.prototype.registerMessageHandler = function(e) {
                        this.messageHandlers.push(e)
                    }, o.displayName = r.name + "(" + (t.displayName || t.name) + ")", o
                }(s.Component)
            }
        }
        var o = i("BzvE"),
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

        function b(e) {
            return m({
                method: _,
                arg: e
            })
        }

        function k(e) {
            return m({
                method: O,
                arg: e
            })
        }

        function S() {
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
            _ = "setAutoplay",
            E = "bridgestateupdate",
            I = "bridgestorestateupdate",
            w = "player.embed.host",
            M = "player.embed.client";
        i.d(t, "t", function() {
            return r
        }), i.d(t, "p", function() {
            return l
        }), i.d(t, "n", function() {
            return d
        }), i.d(t, "o", function() {
            return u
        }), i.d(t, "i", function() {
            return p
        }), i.d(t, "s", function() {
            return c
        }), i.d(t, "q", function() {
            return f
        }), i.d(t, !1, function() {
            return m
        }), i.d(t, !1, function() {
            return h
        }), i.d(t, !1, function() {
            return g
        }), i.d(t, "h", function() {
            return v
        }), i.d(t, "m", function() {
            return y
        }), i.d(t, "k", function() {
            return b
        }), i.d(t, "l", function() {
            return k
        }), i.d(t, "j", function() {
            return S
        }), i.d(t, "r", function() {
            return P
        }), i.d(t, "g", function() {
            return C
        }), i.d(t, "f", function() {
            return O
        }), i.d(t, "e", function() {
            return _
        }), i.d(t, "c", function() {
            return E
        }), i.d(t, "d", function() {
            return I
        }), i.d(t, "b", function() {
            return w
        }), i.d(t, "a", function() {
            return M
        }), i.d(t, !1, function() {
            return "report"
        }), i.d(t, !1, function() {
            return "delete"
        }), i.d(t, !1, function() {
            return "deleteAll"
        })
    },
    vtXo: function(e, t) {},
    vwd7: function(e, t, i) {
        "use strict";
        var n, s = i("TToO"),
            a = i("GiK3"),
            r = i("CSlQ"),
            o = i("rqhk"),
            l = i("kJau"),
            d = i("icZh"),
            u = i("46tX"),
            p = i("Odds");
        i("vtXo");
        ! function(e) {
            e.Viewing = "clips-viewing", e.Editing = "clips-editing"
        }(n || (n = {}));
        var c = function(e) {
            function t(t) {
                var i = e.call(this, t) || this;
                i.hasSetPlayerRef = !1, i.setInitialSlug = function(e) {
                    i.state.initialSlug || (i.setState({
                        initialSlug: e
                    }), Object(d.b)(e))
                }, i.setPlayerRef = function(e) {
                    i.playerRef = e
                }, i.setIsLoaded = function() {
                    i.setState({
                        isLoaded: !0
                    }), i.props.onLoaded && i.props.onLoaded()
                };
                var n = i.props.slug;
                return i.state = {
                    initialSlug: n,
                    isLoaded: !1
                }, n && Object(d.b)(n), i
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
                return this.state.initialSlug ? a.createElement(p._29, {
                    className: "clips-video-iframe",
                    position: p._13.Relative,
                    fullWidth: !0,
                    fullHeight: !0
                }, a.createElement(p._29, {
                    display: this.state.isLoaded ? p.P.Hide : p.P.Flex,
                    color: p.J.Overlay,
                    alignItems: p.c.Center,
                    justifyContent: p._5.Center,
                    position: p._13.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                }, a.createElement(p._8, {
                    size: p._27.Large,
                    inheritColor: !0
                })), a.createElement(p._0, {
                    display: this.state.isLoaded ? p.P.Block : p.P.HideAccessible,
                    position: p._13.Absolute,
                    fullHeight: !0,
                    fullWidth: !0
                }, a.createElement("iframe", {
                    src: l.a + "/?player=" + this.props.playerType + "&clip=" + this.state.initialSlug + "&origin=" + window.location.origin + "&branding=false&externalfullscreen=" + !Object(u.c)(navigator.userAgent),
                    frameBorder: "0",
                    scrolling: "no",
                    allowFullScreen: !0,
                    ref: this.setPlayerRef,
                    onLoad: this.setIsLoaded
                }))) : null
            }, t.prototype.setClip = function(e) {
                this.playerRef && (this.playerRef.contentWindow.postMessage(Object(o.l)(e), l.a), Object(d.b)(e))
            }, t = s.__decorate([Object(r.d)("ClipsVideoIframe", {
                autoReportInteractive: !0
            })], t)
        }(a.Component);
        i.d(t, "a", function() {
            return n
        }), i.d(t, "b", function() {
            return c
        })
    }
});
//# sourceMappingURL=sites.clips.pages.create-f5cde57becd3af98385cd8d5dca27583.js.map