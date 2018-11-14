(window.webpackJsonp = window.webpackJsonp || []).push([
    [162], {
        "+ygM": function(e, t, n) {},
        "0vlg": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "HighlighterClips"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "clipUserIDs"
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
                                        value: "videoID"
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
                                        value: "clips"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "curatorIDs"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "clipUserIDs"
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
                                            value: "100"
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
                                                                value: "slug"
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
                                                                        value: "displayName"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "videoOffsetSeconds"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 288
                }
            };
            n.loc.source = {
                body: "query HighlighterClips($videoID: ID! $clipUserIDs: [ID!] $cursor: Cursor) {\nvideo(id: $videoID) {\nid\nclips (curatorIDs: $clipUserIDs first: 100 after: $cursor) {\nedges {\nnode {\nid\nslug\ntitle\ncurator {\nid\ndisplayName\n}\nvideoOffsetSeconds\ncreatedAt\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "17YR": function(e, t, n) {
            "use strict";

            function a(e) {
                return e.map(function(e) {
                    return e.join(",")
                }).join("\n")
            }

            function i(e) {
                for (var t = [], n = e[0].length, a = function(n) {
                        t.push(e.map(function(e) {
                            return e[n]
                        }))
                    }, i = 0; i < n; i++) a(i);
                return t
            }

            function r(e, t) {
                if ("function" == typeof window.navigator.msSaveBlob) {
                    var n = new Blob([t], {
                        type: "text/csv;charset=utf-8;"
                    });
                    return window.navigator.msSaveBlob(n, e)
                }
                var a = document.createElement("a"),
                    i = encodeURIComponent(t);
                void 0 === a.download ? a.href = "data:attachment/csv;charset=utf-8," + i : (a.href = "data:text/csv;charset=utf-8," + i, a.download = e), a.target = "_blank", a.setAttribute("style", "visibility: hidden"), document.body.appendChild(a), a.click(), document.body.removeChild(a)
            }
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            })
        },
        "1K88": function(e, t, n) {},
        "2MXt": function(e, t, n) {},
        "2dAP": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "videoFields"
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
                                value: "title"
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
                                value: "language"
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
                                value: "tags"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 85
                }
            };
            n.loc.source = {
                body: "fragment videoFields on Video {\nid\ntitle\ndescription\nlanguage\ngame {\nid\nname\n}\ntags\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "3QTW": function(e, t, n) {},
        "5MA6": function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i, r = n("mrSG"),
                s = n("q1tI"),
                o = n("/MKj"),
                l = n("/7QA"),
                d = n("ZDlU"),
                c = n("VwyG"),
                u = n("aCAx"),
                p = n("LWYa"),
                f = n("mLw1"),
                m = n("fvjX"),
                h = n("gvGA"),
                g = n("8/mp"),
                v = n("yR8l"),
                S = n("V+GM"),
                b = n("QzU5"),
                O = n("kduP"),
                y = n("UWbL"),
                k = n("NvVO"),
                D = n("2xye"),
                E = n("GnwI");
            ! function(e) {
                e.TrackingID = "trackingID", e.GameName = "game", e.GameID = "gameID", e.Title = "title", e.Start = "start", e.End = "end"
            }(a || (a = {})),
            function(e) {
                e.VideoStartTime = "t"
            }(i || (i = {}));
            var C, I = n("eFQ3"),
                w = function(e) {
                    return s.createElement(I.b, {
                        vodID: e.videoID,
                        disableTheatreButton: !0,
                        playerTypeOverride: I.a.Highlighter,
                        paused: e.paused,
                        editing: e.editing,
                        nextVideoOffset: e.nextVideoOffset,
                        onVideoTimeChange: e.onVideoTimeChange,
                        onSeek: e.onVideoTimeChange,
                        onPauseToggled: e.onPauseToggled,
                        onSeeking: e.onVideoTimeChange
                    })
                },
                x = n("u5aL"),
                N = n("geRD"),
                T = n("hyVY"),
                F = n("TSYQ"),
                _ = n("Ue10");
            n("rxTZ");
            ! function(e) {
                e.Container = "Container", e.Fill = "Fill"
            }(C || (C = {}));
            var V, H = function(e) {
                    var t = e.sourceVideoDuration,
                        n = e.segment.startOffsetSeconds,
                        a = (e.segment.endOffsetSeconds - n) / t * 100,
                        i = 0 === n ? 0 : n / t * 100,
                        r = F({
                            "mini-timeline": !0,
                            "mini-timeline__active": e.active,
                            "mini-timeline__inactive": !e.active
                        });
                    return s.createElement(_.Ya, {
                        fullWidth: !0,
                        className: r,
                        "data-test-selector": C.Container
                    }, s.createElement("div", {
                        className: "mini-timeline__fill",
                        "data-test-selector": C.Fill,
                        style: {
                            left: i + "%",
                            width: a + "%"
                        }
                    }))
                },
                P = (n("+ygM"), function(e) {
                    return s.createElement(_.Ya, {
                        className: "numbered-thumbnail"
                    }, s.createElement(_.o, {
                        ratio: _.p.Aspect16x9
                    }, s.createElement(_.Fb, {
                        background: _.r.AccentAlt2,
                        display: _.X.Flex,
                        alignItems: _.f.Center,
                        justifyContent: _.Xa.Center
                    }, s.createElement(_.W, {
                        color: _.O.OverlayAlt,
                        fontSize: _.Ca.Size4,
                        type: _.Wb.H4
                    }, e.displayNumber))))
                }),
                R = (n("9H5I"), function(e) {
                    var t = null;
                    return e.error ? t = s.createElement(_.Fb, {
                        color: _.O.Error,
                        display: _.X.Flex,
                        alignItems: _.f.Center
                    }, s.createElement(_.tb, {
                        asset: _.ub.NotificationError
                    })) : e.finished && (t = s.createElement(_.Fb, {
                        className: "status-thumbnail__icon--success",
                        display: _.X.Flex,
                        alignItems: _.f.Center
                    }, s.createElement(_.tb, {
                        asset: _.ub.NotificationSuccess
                    }))), s.createElement(_.Ya, {
                        className: "status-thumbnail"
                    }, s.createElement(_.o, {
                        ratio: _.p.Aspect16x9
                    }, s.createElement(_.Fb, {
                        background: _.r.AccentAlt2,
                        display: _.X.Flex,
                        alignItems: _.f.Center,
                        justifyContent: _.Xa.Center
                    }, t)))
                });
            ! function(e) {
                e.Title = "queue-card-title", e.Thumbnail = "queue-card-thumbnail", e.Timeline = "queue-card-timeline", e.Timestamps = "queue-card-timestamps", e.Game = "queue-card-game", e.SourceTitle = "queue-card-source-title"
            }(V || (V = {}));
            var M, A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getDurationLength = function() {
                            return t.props.offsets.endOffsetSeconds - t.props.offsets.startOffsetSeconds
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e;
                        return e = this.props.finished ? s.createElement(R, {
                            finished: !0
                        }) : this.props.error ? s.createElement(R, {
                            error: !0
                        }) : s.createElement(P, {
                            displayNumber: this.props.listIndex + 1
                        }), s.createElement(_.Fb, {
                            padding: 1,
                            borderBottom: !0
                        }, s.createElement(_.Ya, {
                            "data-test-selector": V.Title,
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: _.db.Hidden,
                            padding: {
                                top: .5,
                                bottom: 1
                            }
                        }, s.createElement(_.W, {
                            ellipsis: !0
                        }, this.props.title || "<" + Object(l.e)("Untitled", "HighlightQueueCard") + ">")), s.createElement(_.Fb, {
                            display: _.X.Flex
                        }, s.createElement(_.Ya, {
                            "data-test-selector": V.Thumbnail,
                            margin: {
                                right: 1
                            }
                        }, e), s.createElement(_.Ya, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: _.db.Hidden,
                            flexWrap: _.Ba.Wrap,
                            margin: {
                                bottom: .5
                            }
                        }, s.createElement(_.Fb, {
                            "data-test-selector": V.Timeline,
                            margin: {
                                bottom: .5
                            }
                        }, !this.props.finished && s.createElement(H, {
                            active: !1,
                            segment: this.props.offsets,
                            sourceVideoDuration: this.props.sourceVideoDuration
                        })), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            flexWrap: _.Ba.Wrap
                        }, s.createElement(_.Ya, {
                            "data-test-selector": V.Timestamps,
                            display: _.X.Flex,
                            margin: {
                                right: 1
                            },
                            overflow: _.db.Hidden
                        }, s.createElement(_.Fb, {
                            padding: {
                                right: .5
                            },
                            color: _.O.Alt2,
                            display: _.X.Flex
                        }, s.createElement(_.tb, {
                            asset: _.ub.GlyphLength,
                            width: 16,
                            height: 16
                        })), s.createElement(_.W, {
                            ellipsis: !0,
                            color: _.O.Alt2
                        }, Object(T.b)(this.getDurationLength()) + " (" + Object(T.b)(this.props.offsets.startOffsetSeconds) + " - " + Object(T.b)(this.props.offsets.endOffsetSeconds) + ")")), this.props.game && s.createElement(_.Ya, {
                            "data-test-selector": V.Game,
                            display: _.X.Flex,
                            margin: {
                                right: 1
                            },
                            overflow: _.db.Hidden
                        }, s.createElement(_.Fb, {
                            padding: {
                                right: .5
                            },
                            color: _.O.Alt2,
                            display: _.X.Flex
                        }, s.createElement(_.tb, {
                            asset: _.ub.NavGames,
                            width: 16,
                            height: 16
                        })), s.createElement(_.W, {
                            ellipsis: !0,
                            color: _.O.Alt2
                        }, this.props.game.name)), s.createElement(_.Ya, {
                            "data-test-selector": V.SourceTitle,
                            display: _.X.Flex,
                            margin: {
                                right: 1
                            },
                            overflow: _.db.Hidden
                        }, s.createElement(_.Fb, {
                            padding: {
                                right: .5
                            },
                            color: _.O.Alt2,
                            display: _.X.Flex
                        }, s.createElement(_.tb, {
                            asset: _.ub.NavVideos,
                            width: 16,
                            height: 16
                        })), s.createElement(_.W, {
                            ellipsis: !0,
                            color: _.O.Alt2
                        }, this.props.sourceVideoTitle || "<" + Object(l.e)("Untitled Source", "HighlightQueueCard") + ">"))))))
                    }, t
                }(s.Component),
                j = n("Rw/r");
            n("nT7z");
            ! function(e) {
                e.TitleInput = "queue-card-title-input", e.Thumbnail = "queue-card-thumbnail", e.Timeline = "queue-card-timeline", e.GameSelector = "queue-card-game-selector", e.SourceTitle = "queue-card-source-title", e.DeleteButton = "queue-card-delete-button"
            }(M || (M = {}));
            var B, L = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getDurationLength = function() {
                            return n.props.offsets.endOffsetSeconds - n.props.offsets.startOffsetSeconds
                        }, n.onTitleChange = function(e) {
                            var t = e.currentTarget.value;
                            n.setState({
                                validTitle: !0,
                                currentTitle: t
                            }, function() {
                                n.isTitleValid(t) ? n.setState({
                                    validTitle: !0
                                }, function() {
                                    n.props.onTitleChange(n.props.listIndex, t)
                                }) : n.setState({
                                    validTitle: !1
                                })
                            })
                        }, n.onGameChange = function(e) {
                            e.objectID && n.props.onGameChange(n.props.listIndex, {
                                name: e.name,
                                id: e.objectID
                            })
                        }, n.onDelete = function() {
                            n.props.onDelete(n.props.listIndex)
                        }, n.state = {
                            validTitle: !0,
                            currentTitle: t.title || "<" + Object(l.e)("Untitled", "HighlightQueueEditCard") + ">"
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.title !== this.props.title && this.setState({
                            currentTitle: this.props.title
                        })
                    }, t.prototype.render = function() {
                        return s.createElement(_.Fb, {
                            className: "highlight-queue-edit-card highlight-queue-edit-card__card",
                            padding: 1,
                            background: _.r.Alt2,
                            borderBottom: !0
                        }, s.createElement(_.Ya, {
                            "data-test-selector": M.TitleInput,
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(_.Sa, {
                            autoFocus: !0,
                            value: this.state.currentTitle,
                            error: !this.state.validTitle,
                            type: _.Ua.Text,
                            placeholder: Object(l.e)("Highlight Video Title", "HighlightQueueEditCard"),
                            maxLength: 140,
                            onChange: this.onTitleChange
                        })), s.createElement(_.Ya, {
                            "data-test-selector": M.GameSelector,
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(j.a, {
                            currentGameTitle: this.props.game && this.props.game.name || "",
                            onChange: this.onGameChange,
                            compact: !0
                        })), s.createElement(_.Fb, {
                            display: _.X.Flex
                        }, s.createElement(_.Ya, {
                            "data-test-selector": M.Thumbnail,
                            margin: {
                                right: 1
                            }
                        }, this.props.error ? s.createElement(R, {
                            error: !0
                        }) : s.createElement(P, {
                            displayNumber: this.props.listIndex + 1
                        })), s.createElement(_.Ya, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: _.db.Hidden,
                            margin: {
                                bottom: .5
                            }
                        }, s.createElement(_.Fb, {
                            "data-test-selector": M.Timeline,
                            margin: {
                                bottom: .5
                            }
                        }, s.createElement(H, {
                            active: !0,
                            sourceVideoDuration: this.props.sourceVideoDuration,
                            segment: this.props.offsets
                        })), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            flexWrap: _.Ba.Wrap
                        }, s.createElement(_.Ya, {
                            display: _.X.Flex,
                            margin: {
                                right: 1
                            },
                            overflow: _.db.Hidden
                        }, s.createElement(_.Fb, {
                            padding: {
                                right: .5
                            },
                            color: _.O.Alt2,
                            display: _.X.Flex
                        }, s.createElement(_.tb, {
                            asset: _.ub.GlyphLength,
                            width: 16,
                            height: 16
                        })), s.createElement(_.W, {
                            ellipsis: !0,
                            color: _.O.Alt2
                        }, Object(T.b)(this.getDurationLength()) + " (" + Object(T.b)(this.props.offsets.startOffsetSeconds) + " - " + Object(T.b)(this.props.offsets.endOffsetSeconds) + ")")), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            margin: {
                                right: 1
                            },
                            overflow: _.db.Hidden
                        }, s.createElement(_.Fb, {
                            "data-test-selector": M.SourceTitle,
                            padding: {
                                right: .5
                            },
                            color: _.O.Alt2,
                            display: _.X.Flex
                        }, s.createElement(_.tb, {
                            asset: _.ub.NavVideos,
                            width: 16,
                            height: 16
                        })), s.createElement(_.W, {
                            ellipsis: !0,
                            color: _.O.Alt2
                        }, this.props.sourceVideoTitle || "<" + Object(l.e)("Untitled Source", "HighlightQueueEditCard") + ">"))))), s.createElement(_.Fb, {
                            "data-test-selector": M.DeleteButton,
                            display: _.X.Flex,
                            justifyContent: _.Xa.End
                        }, s.createElement(_.A, {
                            ariaLabel: Object(l.e)("Remove highlight from queue", "HighlightQueueEditCard"),
                            icon: _.ub.Trash,
                            blurAfterClick: !0,
                            onClick: this.onDelete
                        })))
                    }, t.prototype.isTitleValid = function(e) {
                        var t = !(e && e.replace(/\s/g, "").length > 0),
                            n = Boolean(e && e.length > 140);
                        return !(t || n)
                    }, t
                }(s.Component),
                X = n("zAC8");
            n("3QTW");
            ! function(e) {
                e.AddButtonDropdown = "segmentqueue-addbuttondropdown", e.ErrorNotification = "segmentqueue-errornotification", e.ChangeVideoButton = "segmentqueue-changevideobutton", e.NoItems = "segmentqueue-noitems", e.SaveButton = "segmentqueue-savebutton", e.SegmentQueue = "segmentqueue-segmentqueue", e.SelectHighlightButton = "segmentqueue-selecthighlight", e.MaxQueueSizeTooltip = "segmentqueue-maxtooltip"
            }(B || (B = {}));
            var U, W, G, Y, q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            addDropdownOpen: !1
                        }, t.scrollableAreaRef = null, t.successfulHighlightIDs = [], t.scrollRefHandler = function(e) {
                            t.scrollableAreaRef = e
                        }, t.selectSegmentFromQueue = function(e) {
                            var n = e.currentTarget.getAttribute("data-id");
                            n && n !== t.props.activeID && t.props.onChangeActiveSegment(n)
                        }, t.closeAddDropdown = function() {
                            t.setState({
                                addDropdownOpen: !1
                            })
                        }, t.toggleAddDropdown = function() {
                            t.setState(function(e) {
                                return {
                                    addDropdownOpen: !e.addDropdownOpen
                                }
                            })
                        }, t.createHighlights = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, a, i, s, o = this;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            e = this.props.queue, this.state.failedSegments && (e = e.filter(function(e) {
                                                return o.state.failedSegments && !!o.state.failedSegments[e.tempID]
                                            })), t = e.map(function(e, t) {
                                                return o.createHighlight(e, t)
                                            }), n = [], r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, Promise.all(t)];
                                        case 2:
                                            return n = r.sent(), [3, 4];
                                        case 3:
                                            return a = r.sent(), l.k.error(a, "Unexpected error creating highlights"), [3, 4];
                                        case 4:
                                            return this.successfulHighlightIDs = this.successfulHighlightIDs.concat(n.map(function(e) {
                                                return e.success && e.success.id || ""
                                            }).filter(function(e) {
                                                return "" !== e
                                            })), 0 === (i = n.filter(function(e) {
                                                return !e.success
                                            })).length ? (this.props.onSaveSuccess(this.successfulHighlightIDs), this.props.onPostSaveFinishAndNavigate(this.successfulHighlightIDs)) : (s = i.reduce(function(e, t) {
                                                return e[t.segment.tempID] = t.segment, e
                                            }, {}), this.setState({
                                                failedSegments: s
                                            }), this.props.onChangeActiveSegment(i[0].segment.tempID)), [2]
                                    }
                                })
                            })
                        }, t.createHighlight = function(e, n) {
                            return r.__awaiter(t, void 0, Promise, function() {
                                var t, a, i, s;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            t = {
                                                segmentsIndex: n,
                                                segment: e
                                            }, a = {
                                                sourceVideoID: e.sourceVideoDetails.id,
                                                startOffsetSeconds: e.segments[0].startOffsetSeconds,
                                                endOffsetSeconds: e.segments[0].endOffsetSeconds,
                                                metadata: {
                                                    description: e.metadata.description,
                                                    language: e.metadata.language,
                                                    tags: e.metadata.tags,
                                                    title: e.metadata.title,
                                                    game: e.metadata.game ? e.metadata.game.id : null
                                                }
                                            }, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.createHighlight(Object(N.a)(a))];
                                        case 2:
                                            return (i = r.sent().data) && i.createVideoHighlight && i.createVideoHighlight.highlight && (t.success = i.createVideoHighlight.highlight), [3, 4];
                                        case 3:
                                            return s = r.sent(), l.k.error(s, "HighlighterHighlightCreatorModalContainer"), [3, 4];
                                        case 4:
                                            return [2, t]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(_.Fb, {
                            background: _.r.Base,
                            display: _.X.Flex,
                            flexDirection: _.Aa.Column,
                            fullHeight: !0
                        }, s.createElement(_.Fb, {
                            background: _.r.Base,
                            borderBottom: !0,
                            padding: 1,
                            display: _.X.Flex,
                            justifyContent: _.Xa.Between,
                            alignItems: _.f.Center,
                            className: "highlighter__card-header"
                        }, s.createElement(_.W, {
                            fontSize: _.Ca.Size5,
                            lines: 1
                        }, Object(l.e)("Highlight Queue V3", "HighlighterVideoSegmentQueue")), this.renderAddMore()), this.renderErrorMessage(), s.createElement(_.Qa, {
                            flexGrow: 1,
                            flexShrink: 1,
                            className: "highlight__segment-queue"
                        }, this.props.queue.length > 0 ? this.renderSegments() : this.renderEmptyQueue()), s.createElement(_.Ya, {
                            padding: 1
                        }, s.createElement(_.z, {
                            blurAfterClick: !0,
                            disabled: 0 === this.props.queue.length,
                            fullWidth: !0,
                            onClick: this.createHighlights,
                            "data-test-selectors": B.SaveButton
                        }, this.state.failedSegments ? Object(l.e)("Retry Creating Highlights", "HighlighterVideoSegmentQueue") : Object(l.e)("Create Highlights", "HighlighterVideoSegmentQueue"))))
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.queue.length > e.queue.length && this.scrollableAreaRef ? this.scrollableAreaRef.scrollToBottom() : this.state.failedSegments && this.successfulHighlightIDs.length > 0 && this.successfulHighlightIDs.length === this.props.queue.length ? this.props.onPostSaveFinishAndNavigate(this.successfulHighlightIDs) : this.state.failedSegments && 0 === this.successfulHighlightIDs.length && 0 === this.props.queue.length && this.setState({
                            failedSegments: void 0
                        })
                    }, t.prototype.renderEmptyQueue = function() {
                        return s.createElement(_.Ya, {
                            "data-test-selector": B.NoItems,
                            display: _.X.Flex,
                            flexDirection: _.Aa.Column,
                            alignItems: _.f.Center,
                            justifyContent: _.Xa.Center,
                            padding: 3,
                            fullWidth: !0,
                            fullHeight: !0
                        }, s.createElement(_.Ya, {
                            padding: 1
                        }, s.createElement(_.tb, {
                            asset: _.ub.Scissors,
                            type: _.vb.Alt2,
                            height: 25,
                            width: 25
                        })), s.createElement(_.Ya, {
                            textAlign: _.Sb.Center
                        }, s.createElement(_.W, null, Object(l.e)("No highlights are queued. Click the New Highlight button above to start highlighting.", "HighlighterVideoSegmentQueue"))))
                    }, t.prototype.renderSegments = function() {
                        var e = this,
                            t = this.props.queue.map(function(t, n) {
                                return t.tempID === e.props.activeID ? s.createElement(L, {
                                    game: t.metadata.game,
                                    key: t.tempID,
                                    listIndex: n,
                                    offsets: {
                                        startOffsetSeconds: t.segments[0].startOffsetSeconds,
                                        endOffsetSeconds: t.segments[0].endOffsetSeconds
                                    },
                                    sourceVideoDuration: t.sourceVideoDetails.lengthSeconds,
                                    sourceVideoTitle: t.sourceVideoDetails.title,
                                    title: t.metadata.title,
                                    onDelete: e.props.onSegmentDelete,
                                    onGameChange: e.props.onGameChange,
                                    onTitleChange: e.props.onTitleChange,
                                    error: e.state.failedSegments && !!e.state.failedSegments[t.tempID]
                                }) : s.createElement(_.Va, {
                                    type: _.Wa.Alpha,
                                    blurAfterClick: !0,
                                    key: t.tempID,
                                    onClick: e.selectSegmentFromQueue,
                                    "data-id": t.tempID,
                                    disabled: e.state.failedSegments && !e.state.failedSegments[t.tempID]
                                }, s.createElement(A, {
                                    game: t.metadata.game,
                                    listIndex: n,
                                    offsets: {
                                        startOffsetSeconds: t.segments[0].startOffsetSeconds,
                                        endOffsetSeconds: t.segments[0].endOffsetSeconds
                                    },
                                    sourceVideoDuration: t.sourceVideoDetails.lengthSeconds,
                                    sourceVideoTitle: t.sourceVideoDetails.title,
                                    title: t.metadata.title,
                                    finished: e.state.failedSegments && !e.state.failedSegments[t.tempID],
                                    error: e.state.failedSegments && !!e.state.failedSegments[t.tempID]
                                }))
                            });
                        return s.createElement(g.b, {
                            autoHide: !1,
                            suppressScrollX: !0,
                            scrollRef: this.scrollRefHandler,
                            "data-test-selector": B.SegmentQueue
                        }, s.createElement(_.Ya, {
                            margin: {
                                bottom: 5
                            }
                        }, t))
                    }, t.prototype.renderAddMore = function() {
                        var e = s.createElement(_.Ya, {
                            className: "highlight-vod-select",
                            position: _.kb.Relative,
                            display: _.X.Flex,
                            flexWrap: _.Ba.NoWrap
                        }, s.createElement(_.z, {
                            blurAfterClick: !0,
                            "data-test-selector": B.SelectHighlightButton,
                            type: _.F.Hollow,
                            icon: _.ub.Plus,
                            onClick: this.props.onAddNewHighlight,
                            disabled: this.props.queue.length >= 25 || !!this.state.failedSegments
                        }, Object(l.e)("New Highlight", "HighlighterVideoSegmentQueue")), s.createElement(x.a, {
                            onClickOut: this.closeAddDropdown,
                            className: "highlight-select-dropdown__clickout"
                        }, s.createElement(_.z, {
                            icon: _.ub.GlyphArrDown,
                            type: _.F.Hollow,
                            onClick: this.toggleAddDropdown,
                            "data-test-selector": B.AddButtonDropdown,
                            disabled: this.props.queue.length >= 25 || !!this.state.failedSegments
                        }), s.createElement(_.u, {
                            direction: _.v.BottomRight,
                            noTail: !0,
                            show: this.state.addDropdownOpen,
                            offsetY: "0"
                        }, s.createElement(_.Va, {
                            disabled: this.props.queue.length >= 25,
                            onClick: this.props.onChangeVideo,
                            "data-test-selector": B.ChangeVideoButton
                        }, s.createElement(_.Ya, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(_.W, {
                            noWrap: !0
                        }, Object(l.e)("New Highlight from Another Broadcast", "HighlighterVideoSegmentQueue")))))));
                        return this.props.queue.length >= 25 ? s.createElement(_.Zb, {
                            "data-test-selector": B.MaxQueueSizeTooltip,
                            label: Object(l.e)("You can only create at most {max} highlights at once.", {
                                max: 25
                            }, "VideoSegmentQueue")
                        }, e) : e
                    }, t.prototype.renderErrorMessage = function() {
                        if (this.state.failedSegments) return s.createElement(_.Fb, {
                            "data-test-selector": B.ErrorNotification,
                            borderBottom: !0
                        }, s.createElement(_.Fb, {
                            className: "highlight__segment-queue-error",
                            background: _.r.Alt2,
                            color: _.O.Error,
                            padding: 1,
                            margin: 1,
                            display: _.X.Flex,
                            justifyContent: _.Xa.Start,
                            alignItems: _.f.Center
                        }, s.createElement(_.tb, {
                            asset: _.ub.NotificationWarning
                        }), s.createElement(_.Qa, {
                            margin: {
                                left: 1,
                                right: .5
                            }
                        }, s.createElement(_.W, {
                            color: _.O.Base,
                            type: _.Wb.Span,
                            bold: !0
                        }, Object(l.e)("Error Processing", "VideoSegmentQueue"))), s.createElement(_.W, {
                            color: _.O.Base,
                            type: _.Wb.Span
                        }, Object(l.e)("Retry again below.", "VideoSegmentQueue"))))
                    }, t
                }(s.Component),
                Q = Object(v.a)(X, {
                    name: "createHighlight"
                })(q),
                z = n("oJmH"),
                K = n("8Ad5");

            function $(e, t, n) {
                return e * n / t
            }

            function Z(e) {
                l.o.track(D.SpadeEventType.StreamBookmarkClick, e)
            }

            function J(e) {
                l.o.track(D.SpadeEventType.StreamBookmarkListDownload, e)
            }! function(e) {
                e.Clip = "Clip", e.Mark = "Mark"
            }(U || (U = {})),
            function(e) {
                e.Creator = "creator", e.Editor = "editor"
            }(W || (W = {})),
            function(e) {
                e.Marker = "marker", e.Clip = "clip_marker"
            }(G || (G = {})),
            function(e) {
                e.Clips = "clips", e.Markers = "stream_markers"
            }(Y || (Y = {}));
            n("RoGO");
            var ee = 18,
                te = 25,
                ne = -23,
                ae = 18,
                ie = -25,
                re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            clusterData: [],
                            hoveredClusterIndex: -1
                        }, t.renderCluster = function(e, n, a) {
                            return s.createElement("div", {
                                key: "cluster-" + n
                            }, s.createElement("div", {
                                onMouseEnter: function() {
                                    t.setState({
                                        hoveredClusterIndex: n
                                    })
                                },
                                onMouseLeave: t.mouseLeaveListener
                            }, t.renderIcon(e, n, a)), e.pins.map(function(e, n) {
                                return t.renderPin(e, n)
                            }))
                        }, t.renderIcon = function(e, n, a) {
                            var i, r = (e.pins[0].pixelX + e.pins[e.pins.length - 1].pixelX) / 2,
                                o = r - ee / 2,
                                l = e.pins.length > 1,
                                d = $(t.props.activeSegment.startOffset, t.props.pinOffsetMax, a),
                                c = $(t.props.activeSegment.endOffset, t.props.pinOffsetMax, a),
                                u = r >= d && r < c,
                                p = ne + "px";
                            if (l) {
                                p = ie + "px";
                                var f = {
                                    width: ee + "px",
                                    height: ee + "px"
                                };
                                i = s.createElement(_.Qa, {
                                    textAlign: _.Sb.Center
                                }, s.createElement("div", {
                                    className: "dynamic-pins__cluster",
                                    style: f
                                }, e.pins.length > 9 ? "9+" : e.pins.length))
                            } else i = e.pins[0].type === U.Clip ? s.createElement(_.tb, {
                                width: ee,
                                height: ee,
                                asset: _.ub.Clip
                            }) : s.createElement(_.tb, {
                                width: te,
                                height: te,
                                asset: _.ub.GlyphArrDown
                            });
                            var m = {
                                    width: ee + "px",
                                    height: ee + "px",
                                    left: o + "px",
                                    top: p
                                },
                                h = {
                                    color: u ? "#FFB300" : "#a49fad"
                                };
                            return s.createElement(_.Qa, {
                                position: _.kb.Absolute,
                                display: _.X.Flex,
                                justifyContent: _.Xa.Center
                            }, s.createElement("div", {
                                style: m
                            }, t.state.hoveredClusterIndex === n && t.renderClusterData(e), s.createElement("div", {
                                className: "dynamic-pins__cluster-icon",
                                style: h,
                                onClick: function() {
                                    var n = e.pins[0];
                                    t.props.requestPlayerTimeChange(n.videoOffset), Z(t.trackingFieldsForPin(n, e.pins.length))
                                }
                            }, i)))
                        }, t.renderPin = function(e, n) {
                            var a = e.videoOffset >= t.props.activeSegment.startOffset && e.videoOffset < t.props.activeSegment.endOffset,
                                i = {
                                    left: e.pixelX + "px",
                                    backgroundColor: a ? "#FFB300" : "#a49fad"
                                };
                            return s.createElement(_.Qa, {
                                className: "dynamic-pins__pin",
                                key: "pin-" + n,
                                position: _.kb.Absolute
                            }, s.createElement("div", {
                                style: i
                            }))
                        }, t.renderClusterData = function(e) {
                            return s.createElement(_.Ya, {
                                position: _.kb.Relative
                            }, s.createElement(_.u, {
                                show: !0,
                                direction: _.v.TopCenter,
                                size: _.w.Small,
                                offsetX: "8px"
                            }, s.createElement(g.b, {
                                className: "dynamic-pins__popup"
                            }, s.createElement(_.Ya, {
                                padding: 1
                            }, e.pins.map(function(e, n) {
                                return s.createElement(_.Ya, {
                                    display: _.X.Flex,
                                    key: "cluster-pin-" + n
                                }, s.createElement(_.Ya, {
                                    className: "dynamic-pins__inner-icon",
                                    flexGrow: 0,
                                    margin: {
                                        right: 1
                                    }
                                }, s.createElement(_.tb, {
                                    width: ae,
                                    height: ae,
                                    asset: e.type === U.Clip ? _.ub.Clip : _.ub.GlyphArrDown
                                })), s.createElement(_.Ya, {
                                    flexGrow: 0,
                                    margin: {
                                        right: 1
                                    }
                                }, s.createElement(_.U, {
                                    onClick: function() {
                                        t.props.requestPlayerTimeChange(e.videoOffset), Z(t.trackingFieldsForPin(e, 1))
                                    }
                                }, Object(T.b)(e.videoOffset))), s.createElement(_.Ya, {
                                    display: _.X.Flex,
                                    flexDirection: _.Aa.Column,
                                    flexGrow: 1
                                }, s.createElement(_.Ya, null, e.title), s.createElement(_.W, {
                                    color: _.O.Alt2
                                }, e.creatorDisplayName)))
                            })))))
                        }, t.recalculateClusters = function(e) {
                            if (void 0 === e && (e = t.props), t.parentRef) {
                                var n = t.parentRef.clientWidth,
                                    a = function(e, t) {
                                        var n = -1 / 0,
                                            a = [];
                                        if (!e || 0 === e.length) return [];
                                        var i = {
                                            pins: [e[0]]
                                        };
                                        return e.slice(1).forEach(function(e) {
                                            n = i.pins.reduce(function(e, t) {
                                                return e + t.pixelX
                                            }, 0) / i.pins.length + t, e.pixelX - t <= n ? i.pins.push(e) : (a.push(i), i = {
                                                pins: [e]
                                            })
                                        }), a.push(i), a
                                    }(function(e, t, n) {
                                        return e.map(function(e) {
                                            return r.__assign({}, e, {
                                                pixelX: $(e.videoOffset, t, n)
                                            })
                                        })
                                    }(e.pins, e.pinOffsetMax, t.parentRef.clientWidth).filter(function(e) {
                                        return !(e.pixelX < 0 || e.pixelX > n)
                                    }), ee / 2);
                                t.setState({
                                    clusterData: a
                                })
                            }
                        }, t.assignParentRef = function(e) {
                            t.parentRef = e
                        }, t.mouseLeaveListener = function() {
                            t.setState({
                                hoveredClusterIndex: -1
                            })
                        }, t.trackingFieldsForPin = function(e, n) {
                            return {
                                channel_id: t.props.channelID,
                                vod_id: t.props.videoID,
                                user_type: t.props.channelID === t.props.userID ? W.Creator : W.Editor,
                                seconds_since_stream_start: e.videoOffset,
                                first_marker_id: e.id,
                                first_marker_type: e.type === U.Clip ? G.Clip : G.Marker,
                                cluster_count: n
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.recalculateClusters(), window.addEventListener("resize", function() {
                            return e.recalculateClusters()
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        var e = this;
                        window.removeEventListener("resize", function() {
                            return e.recalculateClusters()
                        })
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.pins !== this.props.pins && this.recalculateClusters(e)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.parentRef && this.parentRef.clientWidth;
                        return s.createElement(_.Ya, {
                            position: _.kb.Relative
                        }, s.createElement("div", {
                            ref: this.assignParentRef
                        }, null !== t && s.createElement("div", null, this.state.clusterData.map(function(n, a) {
                            return e.renderCluster(n, a, t)
                        })), this.props.children))
                    }, t
                }(s.Component),
                se = n("0vlg"),
                oe = n("QClN");

            function le(e) {
                var t = null;
                if (e && e.length) {
                    var n = e[e.length - 1];
                    t = n ? n.cursor : null
                }
                return t
            }
            var de, ce = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            sortedFilteredPins: []
                        }, t.convertClipToPin = function(e) {
                            return e && e.node ? {
                                id: e.node.id,
                                title: e.node.title,
                                videoOffset: e.node.videoOffsetSeconds || 0,
                                type: U.Clip,
                                creatorDisplayName: e.node.curator && e.node.curator.displayName || "",
                                creatorId: e.node.curator && e.node.curator.id || ""
                            } : null
                        }, t.convertMarkerToPin = function(e) {
                            return e && e.node ? {
                                id: e.node.id,
                                title: e.node.description,
                                videoOffset: e.node.positionSeconds,
                                type: U.Mark,
                                creatorId: e.node.user ? e.node.user.id : "",
                                creatorDisplayName: e.node.user ? e.node.user.displayName : ""
                            } : null
                        }, t.setSortedFilteredPins = function(e) {
                            var n = e.dataClips && e.dataClips.video,
                                a = e.dataMarkers.video,
                                i = n && n.clips && n.clips.edges ? n.clips.edges.map(t.convertClipToPin) : [],
                                r = a && a.bookmarks && a.bookmarks.edges ? a.bookmarks.edges.map(t.convertMarkerToPin) : [],
                                s = i.filter(function(t) {
                                    return e.clipUserIDs.includes(t.creatorId)
                                }),
                                o = r.filter(function(t) {
                                    return e.markUserIDs.includes(t.creatorId)
                                }),
                                l = s.concat(o).sort(function(e, t) {
                                    return e.videoOffset - t.videoOffset
                                });
                            (function(e, t) {
                                if (e.length !== t.length) return !1;
                                for (var n = e.length - 1; n >= 0; n--)
                                    if (e[n] !== t[n]) return !1;
                                return !0
                            })(t.state.sortedFilteredPins.map(function(e) {
                                return e.id
                            }), l.map(function(e) {
                                return e.id
                            })) || t.props.updateDownloadData(s, o), t.setState({
                                sortedFilteredPins: l
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive(this.props), this.setSortedFilteredPins(this.props)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.dataClips && this.props.dataClips.video,
                            n = e.dataClips && e.dataClips.video,
                            a = le(t && t.clips && t.clips.edges),
                            i = n && n.clips && n.clips.edges,
                            r = le(i),
                            s = n && n.clips && n.clips.pageInfo && n.clips.pageInfo.hasNextPage;
                        !((i ? i.length : 0) >= 500) && s && a !== r && this.props.clipsLoadMore && this.props.clipsLoadMore(r);
                        var o = this.props.dataMarkers.video,
                            l = e.dataMarkers.video,
                            d = le(o && o.bookmarks && o.bookmarks.edges),
                            c = l && l.bookmarks && l.bookmarks.edges,
                            u = le(c),
                            p = l && l.bookmarks && l.bookmarks.pageInfo && l.bookmarks.pageInfo.hasNextPage;
                        !((c ? c.length : 0) >= 500) && p && d !== u && this.props.markersLoadMore(u), this.reportInteractive(e), this.setSortedFilteredPins(e)
                    }, t.prototype.render = function() {
                        return 0 === this.state.sortedFilteredPins.length ? this.renderChildrenWithoutPins() : s.createElement(_.Ya, {
                            className: "highlighter-pins"
                        }, s.createElement(re, {
                            pins: this.state.sortedFilteredPins,
                            pinOffsetMax: this.props.videoDuration,
                            requestPlayerTimeChange: this.props.requestPlayerTimeChange,
                            videoID: this.props.videoID,
                            channelID: this.props.channelID,
                            userID: this.props.userID,
                            activeSegment: this.props.activeSegment
                        }, this.props.children))
                    }, t.prototype.renderChildrenWithoutPins = function() {
                        return s.createElement(_.Ya, {
                            className: "highlighter-pins"
                        }, this.props.children)
                    }, t.prototype.reportInteractive = function(e) {
                        var t = e.dataClips && e.dataClips.video,
                            n = e.dataMarkers.video;
                        t && t.clips && t.clips.edges && n && e.latencyTracking.reportInteractive()
                    }, t
                }(s.Component),
                ue = Object(m.compose)(Object(E.b)("HighlighterPins"), Object(v.a)(se, {
                    name: "dataClips",
                    skip: function(e) {
                        return e.clipUserIDs.length < 1
                    },
                    props: function(e) {
                        return r.__assign({}, e, {
                            clipsLoadMore: function(t) {
                                return e.dataClips.fetchMore({
                                    query: se,
                                    variables: r.__assign({}, e.dataClips.variables, {
                                        cursor: t
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = [],
                                            i = [];
                                        return e.video && e.video.clips && e.video.clips.edges && (a = e.video.clips.edges), n.video && n.video.clips && n.video.clips.edges && (i = n.video.clips.edges), {
                                            video: r.__assign({}, n.video, {
                                                clips: r.__assign({}, n.video && n.video.clips ? n.video.clips : {}, {
                                                    edges: Object(N.c)(a, i)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(v.a)(oe, {
                    name: "dataMarkers",
                    props: function(e) {
                        return r.__assign({}, e, {
                            markersLoadMore: function(t) {
                                return e.dataMarkers.fetchMore({
                                    query: oe,
                                    variables: r.__assign({}, e.dataMarkers.variables, {
                                        cursor: t
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = [],
                                            i = [];
                                        return e.video && e.video.bookmarks && e.video.bookmarks.edges && (a = e.video.bookmarks.edges), n.video && n.video.bookmarks && n.video.bookmarks.edges && (i = n.video.bookmarks.edges), {
                                            video: r.__assign({}, n.video, {
                                                bookmarks: r.__assign({}, n.video && n.video.bookmarks ? n.video.bookmarks : {}, {
                                                    edges: Object(N.c)(a, i)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }))(ce),
                pe = n("eJ65");
            ! function(e) {
                e.Self = "Self", e.Owner = "Owner", e.Editor = "Editor"
            }(de || (de = {}));
            var fe, me = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderOption = function(e) {
                            var n = !0 === t.props.selectedCreators[e];
                            return s.createElement(_.Ya, {
                                key: e,
                                padding: {
                                    x: 1
                                },
                                margin: {
                                    bottom: 1
                                }
                            }, s.createElement(_.N, {
                                onChange: function() {
                                    t.props.updateSelectedOption(e, !n)
                                },
                                checked: n,
                                label: t.getSelectableName(e)
                            }))
                        }, t.getSelectableName = function(e) {
                            switch (e) {
                                case de.Self:
                                    return Object(l.e)("Me", "PinFilters");
                                case de.Owner:
                                    return t.props.broadcasterDisplayName;
                                case de.Editor:
                                    return Object(l.e)("All Editors", "PinFilters");
                                default:
                                    return e
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.selectedCreators,
                            t = Object.keys(e).filter(function(t) {
                                return e[t]
                            }),
                            n = 0 === this.props.dataCount && t.length === Object.keys(e).length,
                            a = s.createElement(s.Fragment, null, s.createElement(pe.a, {
                                display: _.X.InlineFlex
                            }, s.createElement(_.z, {
                                type: _.F.Hollow,
                                "data-test-selector": "pin-filters-button",
                                disabled: n
                            }, s.createElement(_.Ya, {
                                display: _.X.Flex,
                                alignItems: _.f.Center
                            }, s.createElement(_.W, {
                                color: _.O.Alt2
                            }, this.props.name), s.createElement(_.tb, {
                                asset: _.ub.GlyphArrDown
                            }))), s.createElement(_.u, {
                                show: !0,
                                direction: _.v.TopRight,
                                tailOffset: 10,
                                size: _.w.Small
                            }, s.createElement(_.Ya, null, s.createElement(_.Fb, {
                                margin: 1
                            }, s.createElement(_.W, {
                                color: _.O.Alt
                            }, this.props.description)), s.createElement(_.Fb, null, Object.keys(e).map(this.renderOption))))));
                        return n && (a = s.createElement(_.Zb, {
                            direction: _.bc.Top,
                            label: this.props.disabledMessage
                        }, a)), s.createElement(_.Ya, {
                            position: _.kb.Relative,
                            display: _.X.InlineFlex,
                            margin: {
                                left: 1
                            }
                        }, a)
                    }, t
                }(s.Component),
                he = n("pZqW"),
                ge = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            markUserIDs: [],
                            clipUserIDs: []
                        }, t.getUpdatedUserIDs = function(e, t) {
                            var n = t.channelID,
                                a = t.data.user,
                                i = t.userID,
                                r = a && a.editors && a.editors.edges,
                                s = [];
                            return e[de.Self] && i && s.push(i), e[de.Owner] && s.push(n), e[de.Editor] && r && r.forEach(function(e) {
                                e.node && e.node.id && s.push(e.node.id)
                            }), s
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setUserIDs()
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.channelID !== e.channelID && this.setUserIDs()
                    }, t.prototype.render = function() {
                        return s.createElement(_.Ya, {
                            className: "highlighter-pins"
                        }, s.createElement(ue, {
                            channelID: this.props.channelID,
                            markUserIDs: this.state.markUserIDs,
                            clipUserIDs: this.state.clipUserIDs,
                            userID: this.props.userID,
                            videoID: this.props.videoID,
                            videoDuration: this.props.videoDuration,
                            requestPlayerTimeChange: this.props.requestPlayerTimeChange,
                            updateDownloadData: this.props.updateDownloadData,
                            activeSegment: this.props.activeSegment
                        }, this.props.children))
                    }, t.prototype.setUserIDs = function() {
                        var e = this;
                        this.setState(function(t, n) {
                            return {
                                clipUserIDs: e.getUpdatedUserIDs(n.selectedClipCreators, n),
                                markUserIDs: e.getUpdatedUserIDs(n.selectedMarkerCreators, n)
                            }
                        })
                    }, t
                }(s.Component),
                ve = Object(v.a)(he, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID,
                                includeEditors: e.channelID === e.userID
                            }
                        }
                    }
                })(ge);
            n("cOfD");
            ! function(e) {
                e.PlayheadPin = "playhead-pin", e.PlayheadDraggable = "playhead-draggable", e.PlayheadIcon = "playhead-icon"
            }(fe || (fe = {}));
            var Se, be = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(s.Fragment, null, this.renderPin(), this.renderIcon())
                }, t.prototype.renderPin = function() {
                    var e = {
                        left: this.props.pixelX + "px"
                    };
                    return s.createElement(_.Ra, {
                        zIndex: _.jc.Above,
                        color: _.O.Link,
                        className: "playhead-pin__pin",
                        position: _.kb.Absolute
                    }, s.createElement("div", {
                        style: e,
                        "data-test-selector": fe.PlayheadPin
                    }))
                }, t.prototype.renderIcon = function() {
                    var e = s.createElement(_.tb, {
                            width: 14,
                            height: 14,
                            asset: _.ub.DragHandle,
                            "data-test-selector": fe.PlayheadIcon
                        }),
                        t = {
                            left: this.props.pixelX - 36 + "px",
                            top: "82px",
                            display: "inline-flex"
                        };
                    return s.createElement(_.Ra, {
                        color: _.O.Link,
                        display: _.X.Flex,
                        padding: {
                            right: .5
                        },
                        className: "playhead-pin__draggable",
                        borderRadius: _.x.Medium,
                        position: _.kb.Absolute,
                        zIndex: _.jc.Above
                    }, s.createElement("div", {
                        style: t,
                        ref: this.props.iconRef,
                        onMouseDown: this.props.onMouseDownHandler,
                        "data-test-selector": fe.PlayheadDraggable
                    }, s.createElement(_.Fb, {
                        display: _.X.Flex,
                        justifyContent: _.Xa.Between,
                        alignItems: _.f.Stretch,
                        className: "playhead-pin__icon",
                        borderRadius: _.x.Medium
                    }, e, s.createElement(_.W, {
                        className: "playhead-pin__text"
                    }, Object(T.b)(this.props.currentPlayheadTime, {
                        zeroPadAll: !0
                    })))))
                }, t
            }(s.Component);
            n("fUVR");
            ! function(e) {
                e.PlayheadDropdownIcon = "playhead-dropdown-icon", e.PlayheadDropdownBalloon = "playhead-dropdown-balloon", e.PlayheadDropdownStart = "playhead-dropdown-start", e.PlayheadDropdownEnd = "playhead-dropdown-end", e.PlayheadDropdownStyle = "playhead-dropdown-style"
            }(Se || (Se = {}));
            var Oe, ye, ke, De, Ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !1
                    }, t.renderBalloon = function() {
                        return s.createElement(x.a, {
                            onClickOut: t.closeBalloon
                        }, s.createElement(_.u, {
                            show: t.state.showBalloon,
                            size: _.w.Small,
                            "data-test-selector": Se.PlayheadDropdownBalloon
                        }, s.createElement(_.Ya, {
                            display: _.X.Flex,
                            flexDirection: _.Aa.Column,
                            alignItems: _.f.Center,
                            justifyContent: _.Xa.Between
                        }, t.renderInteractableSelection(t.startSegmentUpdate, Object(l.e)("Start segment here", "HighlightPlayheadDropdown"), Object(l.e)("ALT + <", "HighlightPlayheadDropdown"), Se.PlayheadDropdownStart), t.renderInteractableSelection(t.endSegmentUpdate, Object(l.e)("End segment here", "HighlightPlayheadDropdown"), Object(l.e)("ALT + >", "HighlightPlayheadDropdown"), Se.PlayheadDropdownEnd), t.renderInteractableSelection(t.splitSegment, Object(l.e)("Split segment", "HighlightPlayheadDropdown"), Object(l.e)("ALT + L", "HighlightPlayheadDropdown"), ""), t.renderInteractableSelection(t.deleteSegment, Object(l.e)("Delete Segment", "HighlightPlayheadDropdown"), Object(l.e)("ALT + ;", "HighlightPlayheadDropdown"), ""), t.renderInteractableSelection(t.newSegment, Object(l.e)("Add a new segment", "HighlightPlayheadDropdown"), Object(l.e)("ALT + N", "HighlightPlayheadDropdown"), ""))))
                    }, t.updateShowBalloon = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon
                            }
                        })
                    }, t.startSegmentUpdate = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon
                            }
                        }, function() {
                            return t.props.onUpdate({
                                startOffset: t.props.currentPlayheadTime,
                                endOffset: t.props.activeSegment.endOffset
                            })
                        })
                    }, t.endSegmentUpdate = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon
                            }
                        }, function() {
                            return t.props.onUpdate({
                                startOffset: t.props.activeSegment.startOffset,
                                endOffset: t.props.currentPlayheadTime
                            })
                        })
                    }, t.splitSegment = function() {}, t.deleteSegment = function() {}, t.newSegment = function() {}, t.closeBalloon = function() {
                        t.state.showBalloon && t.setState({
                            showBalloon: !1
                        })
                    }, t.renderInteractableSelection = function(e, t, n, a) {
                        return s.createElement(_.Va, {
                            type: _.Wa.Alpha,
                            borderRadius: _.x.Medium,
                            onClick: e,
                            "data-test-selector": a
                        }, s.createElement(_.Ya, {
                            fullWidth: !0,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            display: _.X.InlineFlex,
                            justifyContent: _.Xa.Between
                        }, s.createElement(_.W, {
                            color: _.O.Base
                        }, t), s.createElement(_.Fb, {
                            padding: {
                                x: .5
                            },
                            display: _.X.InlineFlex,
                            borderRadius: _.x.Small
                        }, s.createElement(_.hb, {
                            label: n
                        }))))
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.dragging !== this.props.dragging && e.dragging && this.state.showBalloon && this.setState({
                        showBalloon: !1
                    })
                }, t.prototype.render = function() {
                    if (!this.props.paused) return null;
                    var e = s.createElement(_.tb, {
                            width: 10,
                            height: 10,
                            asset: _.ub.Carat
                        }),
                        t = {
                            left: this.props.pixelX + 36 + "px",
                            top: "85px"
                        };
                    return s.createElement(_.Ra, {
                        zIndex: _.jc.Above,
                        alignItems: _.f.Center,
                        className: "playhead-dropdown__dropdown",
                        display: _.X.InlineFlex,
                        borderRadius: _.x.Medium,
                        position: _.kb.Absolute
                    }, s.createElement("div", {
                        style: t,
                        "data-test-selector": Se.PlayheadDropdownStyle
                    }, s.createElement(_.Va, {
                        blurAfterClick: !0,
                        type: _.Wa.Alpha,
                        selected: !1,
                        onClick: this.updateShowBalloon,
                        "data-test-selector": Se.PlayheadDropdownIcon
                    }, s.createElement(_.Fb, {
                        padding: {
                            x: .5
                        },
                        alignItems: _.f.Center,
                        justifyContent: _.Xa.Center,
                        display: _.X.InlineFlex,
                        className: "playhead-dropdown__icon",
                        borderRadius: _.x.Small
                    }, s.createElement("div", null, e))), this.renderBalloon()))
                }, t
            }(s.Component);
            ! function(e) {
                e.Toolbar = "toolbar", e.Timeline = "timeline"
            }(Oe || (Oe = {})),
            function(e) {
                e.Playhead = "playhead"
            }(ye || (ye = {})),
            function(e) {
                e.CenterPlayhead = "center_playhead", e.ResetZoom = "reset_zoom", e.ZoomIn = "zoom_in", e.ZoomOut = "zoom_out"
            }(ke || (ke = {})),
            function(e) {
                e.PlayheadWrapper = "highlight-playhead-wrapper", e.Playhead = "playhead"
            }(De || (De = {}));
            var Ce, Ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentPlayerOffset: 0,
                            dragging: !1,
                            previousPosition: null,
                            startOffset: 0,
                            previousBaseValue: null,
                            parentRefWidth: null,
                            sliderOffset: 0
                        }, t.convertPixelsToOffsetUnits = function(e) {
                            return t.parentRef && t.state.parentRefWidth && 0 !== t.state.parentRefWidth ? e * (t.props.videoDuration / t.state.parentRefWidth) : 0
                        }, t.assignParentRef = function(e) {
                            t.parentRef = e
                        }, t.assignIconRef = function(e) {
                            t.iconRef = e
                        }, t.onMouseMove = function(e) {
                            var n = e.clientX;
                            if (t.state.dragging) {
                                var a = t.calculateOffset(n);
                                t.setState(function() {
                                    return {
                                        startOffset: a,
                                        currentPlayerOffset: a
                                    }
                                }, function() {
                                    t.props.requestPlayerTimeChange(a), t.props.paused || t.props.onPauseToggled(!0)
                                }), e.preventDefault()
                            }
                        }, t.onMouseDown = function(e) {
                            var n = e.clientX;
                            t.setState(function(e) {
                                return {
                                    previousPosition: n,
                                    previousBaseValue: e.startOffset,
                                    dragging: !0
                                }
                            }, function() {
                                t.addHandleListeners()
                            }), e.preventDefault(), t.props.trackingParams && function(e) {
                                l.o.track(D.SpadeEventType.HighlighterInteraction, r.__assign({}, e, {
                                    platform: "web"
                                }))
                            }(t.props.trackingParams)
                        }, t.onMouseUp = function() {
                            t.setState(function() {
                                return {
                                    previousPosition: null,
                                    previousBaseValue: null,
                                    dragging: !1
                                }
                            }, function() {
                                t.removeHandleListeners()
                            })
                        }, t.calculateOffset = function(e) {
                            if (null === t.state.previousPosition || null === t.state.previousBaseValue) return 0;
                            var n = t.convertPixelsToOffsetUnits(e - t.state.previousPosition),
                                a = t.state.previousBaseValue + n;
                            return a = Math.max(a, 0), a = Math.min(a, t.props.videoDuration)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        this.resizeUpdate(), window.addEventListener("resize", function() {
                            e.resizeUpdate()
                        })
                    }, t.prototype.componentWillUnmount = function() {
                        var e = this;
                        window.removeEventListener("resize", function() {
                            e.resizeUpdate()
                        })
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        if (e.currentVideoOffset && e.currentVideoOffset !== this.props.currentVideoOffset) this.setState({
                            currentPlayerOffset: e.currentVideoOffset,
                            startOffset: e.currentVideoOffset
                        });
                        else if (e.activeSegment !== this.props.activeSegment) {
                            var t = null;
                            return e.activeSegment.startOffset !== this.props.activeSegment.startOffset && e.activeSegment.endOffset !== this.props.activeSegment.endOffset ? t = e.currentVideoOffset : e.activeSegment.startOffset !== this.props.activeSegment.startOffset ? t = e.activeSegment.startOffset : e.activeSegment.endOffset !== this.props.activeSegment.endOffset && (t = e.activeSegment.endOffset), void(t && this.setState({
                                sliderOffset: t,
                                startOffset: t,
                                currentPlayerOffset: t
                            }))
                        }
                    }, t.prototype.render = function() {
                        var e = this.parentRef && this.state.parentRefWidth;
                        return s.createElement(_.Ya, {
                            position: _.kb.Relative
                        }, s.createElement("div", {
                            ref: this.assignParentRef,
                            "data-test-selector": De.PlayheadWrapper
                        }, null !== e && s.createElement(s.Fragment, null, s.createElement(be, {
                            "data-test-selector": De.Playhead,
                            pixelX: this.calculatePlayheadLocation(),
                            currentPlayheadTime: this.calculatePlayheadTime(),
                            onMouseDownHandler: this.onMouseDown,
                            iconRef: this.assignIconRef
                        }), s.createElement(_.Ya, null, s.createElement(Ee, {
                            pixelX: this.calculatePlayheadLocation(),
                            currentPlayheadOffset: this.state.currentPlayerOffset,
                            currentPlayheadTime: this.calculatePlayheadTime(),
                            onUpdate: this.props.onUpdate,
                            paused: this.props.paused,
                            dragging: this.state.dragging,
                            activeSegment: this.props.activeSegment
                        }))), this.props.children))
                    }, t.prototype.resizeUpdate = function() {
                        this.updateParentWidth(), this.calculatePlayheadLocation()
                    }, t.prototype.updateParentWidth = function() {
                        this.parentRef && this.setState({
                            parentRefWidth: this.parentRef.clientWidth
                        })
                    }, t.prototype.calculatePlayheadLocation = function() {
                        return this.parentRef && this.state.parentRefWidth ? $(this.calculatePlayheadTime(), this.props.videoDuration, this.state.parentRefWidth) : 0
                    }, t.prototype.calculatePlayheadTime = function() {
                        return this.state.dragging ? this.state.startOffset : this.props.isDraggingSlider ? this.state.sliderOffset : this.state.currentPlayerOffset
                    }, t.prototype.addHandleListeners = function() {
                        this.iconRef && (document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUp))
                    }, t.prototype.removeHandleListeners = function() {
                        this.iconRef && (document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseup", this.onMouseUp))
                    }, t
                }(s.Component),
                we = (n("m3Yj"), 25),
                xe = 150,
                Ne = 200,
                Te = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            clientWidth: 0,
                            realTickSpacing: 0,
                            ticks: []
                        }, t.resizeDebounce = 0, t.finalizeTimer = null, t.timelineRefCallback = function(e) {
                            t.timelineRef = e
                        }, t.onWindowResize = function() {
                            var e = Date.now();
                            t.finalizeTimer && clearTimeout(t.finalizeTimer), t.finalizeTimer = setTimeout(t.finalizeWidth, xe), e - t.resizeDebounce > Ne && (t.resizeDebounce = e, t.finalizeWidth())
                        }, t.finalizeWidth = function() {
                            var e = t.timelineRef && t.timelineRef.clientWidth || 0;
                            if (e !== t.state.clientWidth && 0 !== e) {
                                var n = e / we,
                                    a = t.getNearestScaledMultipleOf5(e, we, t.getDuration(), t.getDuration() / n * 4) / t.getDuration() * e / 4;
                                t.setState({
                                    clientWidth: e,
                                    realTickSpacing: a,
                                    ticks: t.renderTickClusters(e, a, t.getDuration())
                                })
                            }
                        }, t.renderTickClusters = function(e, n, a) {
                            if (0 === e || 0 === n) return [];
                            for (var i = e / n, r = [], o = 0; o < i; o++)
                                if (o % 4 == 0) {
                                    var l = Math.round(o / i * a),
                                        d = t.getNearestScaledMultipleOf5(e, n, a, l);
                                    r.push(s.createElement(_.Ya, {
                                        key: o,
                                        className: "timeline-ruler__big-tick",
                                        position: _.kb.Relative
                                    }, s.createElement("div", {
                                        className: "timeline-ruler__tick"
                                    }), s.createElement(_.Fb, {
                                        className: "timeline-ruler__timestamp",
                                        color: _.O.Alt2,
                                        position: _.kb.Absolute
                                    }, Object(T.b)(d, {
                                        zeroPadAll: !0
                                    }))))
                                } else r.push(s.createElement("div", {
                                    key: o,
                                    className: "timeline-ruler__little-tick"
                                }));
                            return r
                        }, t.getNearestScaledMultipleOf5 = function(e, t, n, a) {
                            var i = n / (e / t),
                                r = a % (i = i < 60 ? 5 : i < 3600 ? 300 : 18e3);
                            return r < i / 2 ? a - r : a + (i - a % i)
                        }, t.getDuration = function() {
                            return t.props.endOffset - t.props.startOffset
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.onWindowResize), this.finalizeWidth()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onWindowResize)
                    }, t.prototype.render = function() {
                        return s.createElement(_.Ya, {
                            className: "timeline-ruler",
                            display: _.X.Flex
                        }, s.createElement(_.Ya, {
                            className: "timeline-ruler__tick-container",
                            refDelegate: this.timelineRefCallback,
                            display: _.X.Flex,
                            flexGrow: 4,
                            position: _.kb.Relative,
                            justifyContent: _.Xa.Between
                        }, this.state.ticks), s.createElement("div", {
                            className: "timeline-ruler__ruler-spacer",
                            style: {
                                width: this.state.clientWidth % this.state.realTickSpacing || 0
                            }
                        }))
                    }, t
                }(s.Component),
                Fe = n("ig/l"),
                _e = (n("1K88"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            left: this.props.segmentOffsets.startOffset / this.props.segmentOffsets.maxOffset * 100 + "%",
                            width: (this.props.segmentOffsets.endOffset - this.props.segmentOffsets.startOffset) / this.props.segmentOffsets.maxOffset * 100 + "%"
                        };
                        return s.createElement(_.Ra, {
                            className: "unfocused-segment",
                            background: _.r.Accent,
                            position: _.kb.Absolute,
                            attachTop: !0,
                            fullHeight: !0
                        }, s.createElement("div", {
                            onClick: this.props.onClick,
                            style: e
                        }))
                    }, t
                }(s.Component)),
                Ve = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDrag = function(e) {
                            var n = t.props.segments[t.props.focusedSegmentIndex];
                            e.startOffset === n.startOffset && e.endOffset === n.endOffset || t.props.onOffsetChange(e, t.props.focusedSegmentIndex)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        for (var e = this, t = [], n = null, a = function(a) {
                                var r = i.props.segments[a];
                                if (i.props.focusedSegmentIndex === a) {
                                    var o = r.minOffset,
                                        l = r.maxOffset;
                                    a > 0 && (o = i.props.segments[a - 1].endOffset), a < i.props.segments.length - 1 && (l = i.props.segments[a + 1].startOffset), n = s.createElement(Fe.a, {
                                        key: a,
                                        color: Fe.c.Orange,
                                        handleSize: Fe.b.Small,
                                        startOffset: r.startOffset,
                                        endOffset: r.endOffset,
                                        maxOffset: r.maxOffset,
                                        minOffset: r.minOffset,
                                        onLeftDrag: i.onDrag,
                                        onLeftDragStart: i.props.onStartOffsetFocus,
                                        onLeftDragEnd: i.props.onDragEnd,
                                        onRightDrag: i.onDrag,
                                        onRightDragStart: i.props.onEndOffsetFocus,
                                        onRightDragEnd: i.props.onDragEnd,
                                        showTransition: i.props.showTransition,
                                        sliderMin: o,
                                        sliderMax: l
                                    }, s.createElement(_.Fb, {
                                        alignItems: _.f.Center,
                                        display: _.X.Flex,
                                        fullWidth: !0,
                                        justifyContent: _.Xa.Center,
                                        padding: {
                                            y: 3
                                        },
                                        textAlign: _.Sb.Center
                                    }))
                                } else {
                                    t.push(s.createElement(_e, {
                                        key: a,
                                        segmentOffsets: r,
                                        onClick: function() {
                                            return e.props.onFocusSegment(a)
                                        }
                                    }))
                                }
                            }, i = this, r = 0; r < this.props.segments.length; r++) a(r);
                        return s.createElement(_.Ya, {
                            position: _.kb.Relative,
                            fullHeight: !0,
                            fullWidth: !0
                        }, t, n)
                    }, t
                }(s.Component),
                He = Object(z.compose)(Object(E.b)("VideoSegmentEditor", {
                    autoReportInteractive: !0
                }))(Ve),
                Pe = n("5zf8"),
                Re = n("17YR");
            ! function(e) {
                e.Broadcaster = "Broadcaster", e.Editor = "Editor"
            }(Ce || (Ce = {}));
            var Me, Ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.downloadClipsData = function() {
                            t.downloadDataHelper(t.props.clipsData), J(t.getTrackingData(Y.Clips))
                        }, t.downloadMarkersData = function() {
                            t.downloadDataHelper(t.props.markersData), J(t.getTrackingData(Y.Markers))
                        }, t.getTrackingData = function(e) {
                            return {
                                channel_id: t.props.channelID,
                                vod_id: t.props.videoID,
                                user_type: t.props.userID === t.props.channelID ? W.Creator : W.Editor,
                                list_type: e
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(pe.a, null, s.createElement(_.A, {
                            icon: _.ub.More,
                            ariaLabel: Object(l.e)("Marker Settings", "HighlighterPinsDownload")
                        }), s.createElement(_.u, {
                            size: _.w.Small,
                            direction: _.v.TopRight
                        }, s.createElement(_.Va, {
                            onClick: this.downloadMarkersData
                        }, s.createElement(_.Ya, {
                            padding: 1
                        }, Object(l.e)("Download Stream Markers (.csv)", "HighlighterPinsDownload"))), s.createElement(_.Va, {
                            onClick: this.downloadClipsData
                        }, s.createElement(_.Ya, {
                            padding: 1
                        }, Object(l.e)("Download Clips data (.csv)", "HighlighterPinsDownload")))))
                    }, t.prototype.downloadDataHelper = function(e) {
                        Object(Re.a)("download.csv", function(e, t) {
                            return e.reduce(function(e, n) {
                                return "" + e + [Object(Pe.b)(n.videoOffset, Pe.a.ClockHMS), n.creatorId === t ? Ce.Broadcaster : Ce.Editor, n.creatorDisplayName, n.title].join(",") + "\n"
                            }, "")
                        }(e, this.props.channelID))
                    }, t
                }(s.Component),
                je = (n("DAV8"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showBalloon: !1
                        }, t.renderBalloon = function() {
                            return s.createElement(_.Fb, {
                                zIndex: _.jc.Above,
                                position: _.kb.Relative
                            }, s.createElement(x.a, {
                                onClickOut: t.closeBalloon
                            }, s.createElement(_.u, {
                                show: t.state.showBalloon,
                                size: _.w.Small,
                                direction: _.v.TopLeft
                            }, s.createElement(_.Ya, {
                                display: _.X.Flex,
                                flexDirection: _.Aa.Column,
                                alignItems: _.f.Center,
                                justifyContent: _.Xa.Between
                            }, t.renderInteractableSelection(Object(l.e)("Full Length", "HighlighterToolbar")), t.renderInteractableSelection(Object(l.e)("2 hours", "HighlighterToolbar")), t.renderInteractableSelection(Object(l.e)("1 hour", "HighlighterToolbar")), t.renderInteractableSelection(Object(l.e)("30 minutes", "HighlighterToolbar")), t.renderInteractableSelection(Object(l.e)("15 minutes", "HighlighterToolbar")), t.renderInteractableSelection(Object(l.e)("1 minute", "HighlighterToolbar"))))))
                        }, t.updateShowBalloon = function() {
                            t.setState(function(e) {
                                return {
                                    showBalloon: !e.showBalloon
                                }
                            })
                        }, t.closeBalloon = function() {
                            t.state.showBalloon && t.setState({
                                showBalloon: !1
                            })
                        }, t.renderInteractableSelection = function(e) {
                            return s.createElement(_.Va, {
                                type: _.Wa.Alpha,
                                borderRadius: _.x.Medium
                            }, s.createElement(_.Ya, {
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                display: _.X.InlineFlex,
                                justifyContent: _.Xa.Between
                            }, s.createElement(_.W, {
                                color: _.O.Base
                            }, e)))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(_.Fb, {
                            display: _.X.Flex,
                            flexDirection: _.Aa.Row,
                            justifyContent: _.Xa.Between,
                            fullWidth: !0,
                            fullHeight: !0,
                            className: "video-timeline-bottom-toolbar__background",
                            border: !0
                        }, s.createElement(_.Ya, {
                            display: _.X.Flex,
                            flexDirection: _.Aa.Row,
                            justifyContent: _.Xa.Between,
                            alignItems: _.f.Center,
                            className: "video-timeline-bottom-toolbar__interactable-description"
                        }, s.createElement(_.W, {
                            noWrap: !0,
                            color: _.O.OverlayAlt
                        }, Object(l.e)("Zoom Range", "HighlighterToolbar"))), this.renderBalloon(), s.createElement(_.Fb, {
                            display: _.X.Flex,
                            borderRight: !0,
                            justifyContent: _.Xa.Center
                        }, s.createElement(_.Va, {
                            onClick: this.updateShowBalloon,
                            blurAfterClick: !0,
                            type: _.Wa.Alpha,
                            selected: !1
                        }, s.createElement(_.Ya, {
                            display: _.X.Flex,
                            flexDirection: _.Aa.Row,
                            justifyContent: _.Xa.Between,
                            fullHeight: !0,
                            padding: {
                                x: 1
                            }
                        }, s.createElement(_.Ya, {
                            padding: {
                                right: 3
                            }
                        }, s.createElement(_.W, {
                            noWrap: !0,
                            color: _.O.Link
                        }, Object(l.e)("Full Highlight", "HighlighterToolbar"))), s.createElement(_.tb, {
                            asset: _.ub.Carat,
                            height: 15,
                            width: 15,
                            type: _.vb.Brand
                        })))), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Start,
                            className: "video-timeline-bottom-toolbar__button"
                        }, s.createElement(_.tb, {
                            asset: _.ub.ZoomIn,
                            type: _.vb.Brand
                        })), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Start,
                            className: "video-timeline-bottom-toolbar__button"
                        }, s.createElement(_.tb, {
                            asset: _.ub.GlyphArrRight,
                            height: 15,
                            width: 10,
                            type: _.vb.Brand
                        }), s.createElement(_.tb, {
                            asset: _.ub.Roman1,
                            height: 15,
                            width: 10,
                            type: _.vb.Brand
                        }), s.createElement(_.tb, {
                            asset: _.ub.GlyphArrLeft,
                            height: 15,
                            width: 10,
                            type: _.vb.Brand
                        })), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Start,
                            className: "video-timeline-bottom-toolbar__button"
                        }, s.createElement(_.tb, {
                            asset: _.ub.ZoomOut,
                            type: _.vb.Brand
                        })), s.createElement(_.Ya, {
                            flexGrow: 4
                        }), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            flexDirection: _.Aa.Row,
                            justifyContent: _.Xa.Between,
                            alignItems: _.f.Center,
                            className: "video-timeline-bottom-toolbar__interactable-description"
                        }, this.renderPinFilters()))
                    }, t.prototype.renderPinFilters = function() {
                        return s.createElement(_.Ya, {
                            display: _.X.Flex
                        }, s.createElement(_.Ya, {
                            margin: {
                                top: .5
                            }
                        }, s.createElement(_.W, {
                            noWrap: !0,
                            color: _.O.OverlayAlt
                        }, Object(l.e)("Display", "VideoTimeline"))), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.End,
                            flexDirection: _.Aa.Column,
                            breakpointMedium: {
                                flexDirection: _.Aa.Row,
                                justifyContent: _.Xa.Start
                            }
                        }, s.createElement(me, {
                            name: Object(l.e)("Markers", "VideoTimeline"),
                            description: Object(l.e)("Added by", "VideoTimeline"),
                            broadcasterDisplayName: this.props.channelDisplayName,
                            selectedCreators: this.props.selectedMarkerCreators,
                            updateSelectedOption: this.props.updateSelectedMarkerFilters,
                            dataCount: this.props.markersDownloadData.length,
                            disabledMessage: Object(l.e)("No Stream Markers available", "VideoTimeline")
                        }), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            margin: {
                                top: 1
                            },
                            breakpointMedium: {
                                margin: {
                                    top: 0
                                }
                            }
                        }, s.createElement(me, {
                            name: Object(l.e)("Clips", "VideoTimeline"),
                            description: Object(l.e)("Clipped by", "VideoTimeline"),
                            broadcasterDisplayName: this.props.channelDisplayName,
                            selectedCreators: this.props.selectedClipCreators,
                            updateSelectedOption: this.props.updateSelectedClipsFilters,
                            dataCount: this.props.clipsDownloadData.length,
                            disabledMessage: Object(l.e)("No Clip Markers available", "VideoTimeline")
                        }), s.createElement(_.Ya, {
                            margin: {
                                left: .5
                            }
                        }, s.createElement(Ae, {
                            userID: this.props.userID,
                            channelID: this.props.channelID,
                            videoID: this.props.videoID,
                            clipsData: this.props.clipsDownloadData,
                            markersData: this.props.markersDownloadData
                        })))))
                    }, t
                }(s.Component));
            n("Mqpi");
            ! function(e) {
                e[e.PrecisionTooltip = 0] = "PrecisionTooltip", e[e.StartSelection = 1] = "StartSelection", e[e.EndSelection = 2] = "EndSelection", e[e.UseVideoTimeButton = 3] = "UseVideoTimeButton", e[e.SelectHighlightButton = 4] = "SelectHighlightButton", e[e.StartInput = 5] = "StartInput", e[e.EndInput = 6] = "EndInput", e[e.StartDisplay = 7] = "StartDisplay", e[e.EndDisplay = 8] = "EndDisplay"
            }(Me || (Me = {}));
            var Be = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.showStartInput = function() {
                            n.setState({
                                showStartInput: !0
                            })
                        }, n.hideStartInput = function() {
                            n.setState({
                                showStartInput: !1
                            })
                        }, n.showEndInput = function() {
                            n.setState({
                                showEndInput: !0
                            })
                        }, n.hideEndInput = function() {
                            n.setState({
                                showEndInput: !1
                            })
                        }, n.onUpdateStartToCurrentVideoTime = function() {
                            n.setState(function(e, t) {
                                if (null !== t.currentVideoOffset) return r.__assign({}, e, {
                                    startOffset: Object(T.b)(t.currentVideoOffset),
                                    endOffset: Object(T.b)(t.segment.endOffset)
                                })
                            }, function() {
                                n.props.onUpdate({
                                    startOffset: Object(T.a)(n.state.startOffset),
                                    endOffset: Object(T.a)(n.state.endOffset)
                                })
                            })
                        }, n.onUpdateEndToCurrentVideoTime = function() {
                            n.setState(function(e, t) {
                                if (null !== t.currentVideoOffset) return r.__assign({}, e, {
                                    startOffset: Object(T.b)(t.segment.startOffset),
                                    endOffset: Object(T.b)(t.currentVideoOffset)
                                })
                            }, function() {
                                n.props.onUpdate({
                                    startOffset: Object(T.a)(n.state.startOffset),
                                    endOffset: Object(T.a)(n.state.endOffset)
                                })
                            })
                        }, n.onStartChange = function(e) {
                            n.setState({
                                startOffset: e.currentTarget.value
                            })
                        }, n.onEndChange = function(e) {
                            n.setState({
                                endOffset: e.currentTarget.value
                            })
                        }, n.onKeyDown = function(e) {
                            e.keyCode === K.a.Enter && n.update()
                        }, n.onInputBlur = function() {
                            n.update()
                        }, n.getTooltipLabel = function() {
                            return Object(l.e)("Use Playhead Time", "HighlighterOffsetSelector")
                        }, n.state = {
                            startOffset: Object(T.b)(t.segment.startOffset),
                            endOffset: Object(T.b)(t.segment.endOffset),
                            areOffsetsValid: !0,
                            showStartInput: !1,
                            showEndInput: !1
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                        return this.state.startOffset !== t.startOffset || this.state.endOffset !== t.endOffset || this.state.areOffsetsValid !== t.areOffsetsValid || this.props.segment.startOffset !== e.segment.startOffset || this.props.segment.endOffset !== e.segment.endOffset || this.state.showEndInput !== t.showEndInput || this.state.showStartInput !== t.showStartInput
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.props.segment,
                            n = e.segment,
                            a = t.startOffset !== n.startOffset,
                            i = t.endOffset !== n.endOffset,
                            r = Object(T.b)(n.startOffset),
                            s = Object(T.b)(n.endOffset),
                            o = r !== this.state.startOffset,
                            l = s !== this.state.endOffset,
                            d = !1,
                            c = this.state.startOffset,
                            u = this.state.endOffset;
                        a && i ? (c = r, u = s) : a ? (c = r, d = l) : i && (u = s, d = o);
                        var p = {
                            startOffset: c,
                            endOffset: u,
                            areOffsetsValid: this.state.areOffsetsValid,
                            showStartInput: this.state.showStartInput,
                            showEndInput: this.state.showEndInput
                        };
                        if (a || i) {
                            var f = this.checkOffsetsWithinBounds({
                                startSeconds: Object(T.a)(c),
                                endSeconds: Object(T.a)(u),
                                startBound: n.minOffset,
                                endBound: n.maxOffset
                            });
                            p.areOffsetsValid = f, d && f && this.props.onUpdate({
                                startOffset: Object(T.a)(c),
                                endOffset: Object(T.a)(u)
                            })
                        }
                        this.setState(p)
                    }, t.prototype.render = function() {
                        var e = Object(T.a)(this.state.endOffset) - Object(T.a)(this.state.startOffset);
                        return (isNaN(e) || e < 0) && (e = 0), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Start,
                            alignItems: _.f.Center,
                            breakpointMedium: {
                                flexDirection: _.Aa.Row
                            }
                        }, this.renderStartInput(), this.renderEndInput())
                    }, t.prototype.renderStartInput = function() {
                        return s.createElement(_.Ya, {
                            display: _.X.Flex,
                            alignItems: _.f.Center,
                            justifyContent: _.Xa.Center,
                            "data-test-selector": Me.StartSelection,
                            padding: {
                                x: 1
                            }
                        }, s.createElement(_.Qa, {
                            display: _.X.InlineFlex,
                            alignItems: _.f.Center
                        }, s.createElement("label", null, s.createElement(x.a, {
                            onClickOut: this.hideStartInput
                        }, s.createElement("div", {
                            onClick: this.showStartInput,
                            "data-test-selector": Me.StartInput
                        }, s.createElement(_.Ya, {
                            className: "offset-selector__input-label",
                            display: _.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(_.W, {
                            color: _.O.OverlayAlt
                        }, Object(l.e)("Start", "HighlighterOffsetSelector"))), s.createElement(_.Ya, {
                            className: "offset-selector__offset-input",
                            display: _.X.InlineFlex,
                            "data-test-selector": Me.StartDisplay
                        }, this.renderStartDisplay()))))), s.createElement(_.Zb, {
                            label: this.getTooltipLabel()
                        }, s.createElement(_.z, {
                            type: _.F.Hollow,
                            onClick: this.onUpdateStartToCurrentVideoTime,
                            icon: _.ub.Timer,
                            "data-test-selector": Me.UseVideoTimeButton
                        })))
                    }, t.prototype.renderEndInput = function() {
                        return s.createElement(_.Ya, {
                            display: _.X.Flex,
                            alignItems: _.f.Center,
                            justifyContent: _.Xa.Center,
                            "data-test-selector": Me.EndSelection
                        }, s.createElement(_.Qa, {
                            display: _.X.InlineFlex,
                            alignItems: _.f.Center,
                            textAlign: _.Sb.Right
                        }, s.createElement("label", null, s.createElement(x.a, {
                            onClickOut: this.hideEndInput
                        }, s.createElement("div", {
                            onClick: this.showEndInput,
                            "data-test-selector": Me.EndInput
                        }, s.createElement(_.Ya, {
                            className: "offset-selector__input-label",
                            display: _.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(_.W, {
                            color: _.O.OverlayAlt
                        }, Object(l.e)("End", "HighlighterOffsetSelector"))), s.createElement(_.Ya, {
                            display: _.X.InlineFlex,
                            className: "offset-selector__offset-input",
                            "data-test-selector": Me.EndDisplay
                        }, this.renderEndDisplay()))))), s.createElement(_.Zb, {
                            label: this.getTooltipLabel()
                        }, s.createElement(_.z, {
                            type: _.F.Hollow,
                            onClick: this.onUpdateEndToCurrentVideoTime,
                            icon: _.ub.Timer,
                            "data-test-selector": Me.UseVideoTimeButton
                        })))
                    }, t.prototype.renderStartDisplay = function() {
                        var e = this.state.startOffset,
                            t = !this.validClockValue(e) || Object(T.a)(e) >= this.props.segment.endOffset;
                        return this.state.showStartInput ? s.createElement(_.Sa, {
                            error: t,
                            onBlur: this.onInputBlur,
                            onChange: this.onStartChange,
                            onKeyDown: this.onKeyDown,
                            required: !0,
                            type: _.Ua.Text,
                            value: e
                        }) : s.createElement(_.W, {
                            bold: !0
                        }, e)
                    }, t.prototype.renderEndDisplay = function() {
                        var e = this.state.endOffset,
                            t = !this.validClockValue(e) || Object(T.a)(e) <= this.props.segment.startOffset;
                        return this.state.showEndInput ? s.createElement(_.Sa, {
                            error: t,
                            onBlur: this.onInputBlur,
                            onChange: this.onEndChange,
                            onKeyDown: this.onKeyDown,
                            required: !0,
                            type: _.Ua.Text,
                            value: e
                        }) : s.createElement(_.W, {
                            bold: !0
                        }, e)
                    }, t.prototype.validClockValue = function(e) {
                        var t = Object(T.a)(e);
                        return !isNaN(t)
                    }, t.prototype.canUpdate = function() {
                        if (!(this.validClockValue(this.state.startOffset) && this.validClockValue(this.state.endOffset))) return this.setState({
                            areOffsetsValid: !1
                        }), !1;
                        var e = this.props.segment,
                            t = Object(T.a)(this.state.startOffset),
                            n = Object(T.a)(this.state.endOffset),
                            a = this.checkOffsetsWithinBounds({
                                startSeconds: t,
                                endSeconds: n,
                                startBound: e.minOffset,
                                endBound: e.maxOffset
                            });
                        return this.setState({
                            areOffsetsValid: a
                        }), (t !== e.startOffset || n !== e.endOffset) && a
                    }, t.prototype.checkOffsetsWithinBounds = function(e) {
                        return !isNaN(e.startSeconds) && !isNaN(e.endSeconds) && (!(e.startSeconds < e.startBound || e.endSeconds > e.endBound) && !(e.endSeconds <= e.startSeconds))
                    }, t.prototype.update = function() {
                        this.canUpdate() && this.props.onManualInputChange({
                            startOffset: Object(T.a)(this.state.startOffset),
                            endOffset: Object(T.a)(this.state.endOffset)
                        })
                    }, t
                }(s.Component),
                Le = (n("q4CU"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(_.Fb, {
                            display: _.X.Flex,
                            flexDirection: _.Aa.Row,
                            justifyContent: _.Xa.Between,
                            fullWidth: !0,
                            className: "video-timeline-top-toolbar__background",
                            border: !0
                        }, s.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Start,
                            className: "video-timeline-top-toolbar__button"
                        }, s.createElement(_.tb, {
                            asset: _.ub.Play,
                            type: _.vb.Brand
                        })), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Start,
                            className: "video-timeline-top-toolbar__button"
                        }, s.createElement(_.tb, {
                            asset: _.ub.More,
                            height: 15,
                            width: 10,
                            type: _.vb.Brand
                        }), s.createElement(_.tb, {
                            asset: _.ub.Play,
                            height: 15,
                            width: 10,
                            type: _.vb.Brand
                        }), s.createElement(_.tb, {
                            asset: _.ub.More,
                            height: 15,
                            width: 10,
                            type: _.vb.Brand
                        })), s.createElement(_.Ya, {
                            flexGrow: 4
                        }), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Center,
                            className: "video-timeline-top-toolbar__button"
                        }, s.createElement(_.Va, {
                            onClick: this.props.addSegment,
                            type: _.Wa.Overlay
                        }, s.createElement(_.tb, {
                            asset: _.ub.AddReaction,
                            type: _.vb.Brand
                        }))), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Center,
                            className: "video-timeline-top-toolbar__button"
                        }, s.createElement(_.Va, {
                            onClick: this.props.splitSegment,
                            type: _.Wa.Overlay
                        }, s.createElement(_.tb, {
                            asset: _.ub.Scissors,
                            type: _.vb.Brand
                        }))), s.createElement(Be, {
                            onManualInputChange: this.props.onManualInputChange,
                            onUpdate: this.props.onUpdate,
                            segment: this.props.segment,
                            currentVideoOffset: this.props.currentVideoOffset
                        }), s.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Center,
                            className: "video-timeline-top-toolbar__button"
                        }, s.createElement(_.Va, {
                            onClick: this.props.removeSegment,
                            type: _.Wa.Overlay
                        }, s.createElement(_.tb, {
                            asset: _.ub.Trash,
                            type: _.vb.Brand
                        }))))
                    }, t
                }(s.Component)),
                Xe = function(e) {
                    return Math.floor(15 * e / 100)
                },
                Ue = function(e) {
                    return Math.ceil(85 * e / 100)
                };
            n("2MXt");
            var We = 250,
                Ge = function(e) {
                    function t(t) {
                        var n, a = e.call(this, t) || this;
                        a.addTransition = function() {
                            a.setState(function() {
                                return {
                                    isTransitioning: !0
                                }
                            }, function() {
                                setTimeout(function() {
                                    a.setState({
                                        isTransitioning: !1
                                    })
                                }, We)
                            })
                        }, a.onOffsetChange = function(e) {
                            a.addTransition();
                            var t = e;
                            if (a.props.activeHighlight && null !== a.props.currentVideoOffset) {
                                var n = a.props.activeHighlight.segments[a.state.focusedSegmentIndex];
                                e.startOffset !== n.startOffsetSeconds ? t = function(e, t) {
                                    var n = e.endOffset;
                                    return t > e.endOffset && (n = Math.min(e.maxOffset, t + (e.endOffset - e.startOffset))), {
                                        startOffset: t,
                                        endOffset: n
                                    }
                                }(a.formatTimelineSegment(n), a.props.currentVideoOffset) : e.endOffset !== n.endOffsetSeconds && (t = function(e, t) {
                                    var n = e.startOffset;
                                    return t < e.startOffset && (n = Math.max(e.minOffset, t - (e.endOffset - e.startOffset))), {
                                        startOffset: n,
                                        endOffset: t
                                    }
                                }(a.formatTimelineSegment(n), a.props.currentVideoOffset))
                            }
                            a.props.onTimelineOffsetChange(t, a.state.focusedSegmentIndex)
                        }, a.onManualInputChange = function(e) {
                            a.addTransition(), a.props.onTimelineOffsetChange(e, a.state.focusedSegmentIndex)
                        }, a.formatTimelineSegment = function(e) {
                            return {
                                startOffset: e.startOffsetSeconds,
                                endOffset: e.endOffsetSeconds,
                                minOffset: 0,
                                maxOffset: a.props.videoLengthSeconds
                            }
                        }, a.updateSelectedMarkerFilters = function(e, t) {
                            a.setState(function(n) {
                                var a;
                                return {
                                    selectedMarkerCreators: r.__assign({}, n.selectedMarkerCreators, (a = {}, a[e] = t, a))
                                }
                            })
                        }, a.updateSelectedClipsFilters = function(e, t) {
                            a.setState(function(n) {
                                var a;
                                return {
                                    selectedClipCreators: r.__assign({}, n.selectedClipCreators, (a = {}, a[e] = t, a))
                                }
                            })
                        }, a.updateDownloadData = function(e, t) {
                            a.setState({
                                clipsDownloadData: e,
                                markersDownloadData: t
                            })
                        }, a.onLeftSliderDrag = function(e) {
                            a.setState({
                                isDraggingSlider: !0
                            }, function() {
                                a.props.onStartOffsetFocus(e)
                            })
                        }, a.onRightSliderDrag = function(e) {
                            a.setState({
                                isDraggingSlider: !0
                            }, function() {
                                a.props.onEndOffsetFocus(e)
                            })
                        }, a.onSliderDragEnd = function() {
                            a.setState({
                                isDraggingSlider: !1
                            })
                        }, a.onFocusSegment = function(e) {
                            a.setState({
                                focusedSegmentIndex: e
                            })
                        }, a.addNewSegmentAtOffset = function() {
                            if (null !== a.props.currentVideoOffset) {
                                var e = a.props.addNewSegmentAtOffset(a.props.currentVideoOffset); - 1 !== e && a.setState({
                                    focusedSegmentIndex: e
                                })
                            }
                        }, a.removeCurrentSegment = function() {
                            a.props.activeHighlight && a.props.activeHighlight.segments.length > 1 && (a.setState(function(e) {
                                return {
                                    focusedSegmentIndex: Math.max(e.focusedSegmentIndex - 1, 0)
                                }
                            }), a.props.removeSegmentAtIndex(a.state.focusedSegmentIndex))
                        }, a.splitCurrentSegment = function() {
                            null !== a.props.currentVideoOffset && (-1 !== a.props.splitSegmentAtIndex(a.state.focusedSegmentIndex, a.props.currentVideoOffset) && a.setState(function(e) {
                                return {
                                    focusedSegmentIndex: e.focusedSegmentIndex + 1
                                }
                            }))
                        }, a.handleHotkeys = function(e) {
                            if (a.props.activeHighlight && null !== a.props.currentVideoOffset && e.target && "INPUT" !== e.target.tagName) switch (e.charCode || e.keyCode) {
                                case K.a.Comma:
                                    if (!e.altKey) break;
                                    a.onOffsetChange({
                                        startOffset: a.props.currentVideoOffset,
                                        endOffset: a.props.activeHighlight.segments[a.state.focusedSegmentIndex].endOffsetSeconds
                                    }), a.preventDefaultBehavior(e);
                                    break;
                                case K.a.Period:
                                    if (!e.altKey) break;
                                    a.onOffsetChange({
                                        startOffset: a.props.activeHighlight.segments[a.state.focusedSegmentIndex].startOffsetSeconds,
                                        endOffset: a.props.currentVideoOffset
                                    }), a.preventDefaultBehavior(e);
                                    break;
                                case K.a.Space:
                                    a.props.onPauseToggled(!a.props.paused), a.preventDefaultBehavior(e)
                            }
                        }, a.preventDefaultBehavior = function(e) {
                            e.preventDefault(), e.stopPropagation()
                        };
                        var i = t.userID === t.channelID,
                            s = ((n = {})[de.Self] = !0, n);
                        return i ? s[de.Editor] = !0 : s[de.Owner] = !0, a.state = {
                            isTransitioning: !1,
                            selectedMarkerCreators: r.__assign({}, s),
                            selectedClipCreators: r.__assign({}, s),
                            clipsDownloadData: [],
                            markersDownloadData: [],
                            isDraggingSlider: !1,
                            focusedSegmentIndex: 0
                        }, a
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("keydown", this.handleHotkeys)
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("keydown", this.handleHotkeys)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.activeHighlight && e.activeHighlight && this.props.activeHighlight.tempID !== e.activeHighlight.tempID && this.addTransition()
                    }, t.prototype.render = function() {
                        if (!this.props.activeHighlight) return null;
                        var e;
                        this.props.userID && (e = {
                            channel_id: parseInt(this.props.channelID, 10),
                            element_name: Oe.Timeline,
                            element_sub_name: ye.Playhead,
                            user_id: parseInt(this.props.userID, 10),
                            vod_id: this.props.videoID,
                            vod_type: this.props.videoType
                        });
                        var t = this.formatTimelineSegment(this.props.activeHighlight.segments[this.state.focusedSegmentIndex]);
                        return s.createElement(_.Ya, {
                            fullWidth: !0,
                            fullHeight: !0
                        }, s.createElement(_.Ya, {
                            alignItems: _.f.Center,
                            display: _.X.Flex,
                            justifyContent: _.Xa.Between
                        }, s.createElement(Le, {
                            onManualInputChange: this.onManualInputChange,
                            onUpdate: this.onOffsetChange,
                            segment: this.formatTimelineSegment(this.props.activeHighlight.segments[this.state.focusedSegmentIndex]),
                            currentVideoOffset: this.props.currentVideoOffset,
                            addSegment: this.addNewSegmentAtOffset,
                            removeSegment: this.removeCurrentSegment,
                            splitSegment: this.splitCurrentSegment
                        })), s.createElement(Ie, {
                            currentVideoOffset: this.props.currentVideoOffset,
                            videoDuration: this.props.videoLengthSeconds,
                            requestPlayerTimeChange: this.props.requestPlayerTimeChange,
                            onPauseToggled: this.props.onPauseToggled,
                            trackingParams: e,
                            onUpdate: this.onOffsetChange,
                            paused: this.props.paused,
                            activeSegment: t,
                            isDraggingSlider: this.state.isDraggingSlider
                        }, s.createElement(ve, {
                            userID: this.props.userID,
                            channelID: this.props.channelID,
                            videoID: this.props.videoID,
                            videoDuration: this.props.videoLengthSeconds,
                            selectedClipCreators: this.state.selectedClipCreators,
                            selectedMarkerCreators: this.state.selectedMarkerCreators,
                            requestPlayerTimeChange: this.props.requestPlayerTimeChange,
                            updateDownloadData: this.updateDownloadData,
                            activeSegment: t
                        }, s.createElement(_.Fb, {
                            className: "video-timeline__background",
                            border: !0,
                            fullHeight: !0
                        }, s.createElement(He, {
                            onStartOffsetFocus: this.onLeftSliderDrag,
                            onEndOffsetFocus: this.onRightSliderDrag,
                            onOffsetChange: this.props.onTimelineOffsetChange,
                            segments: this.props.activeHighlight.segments.map(this.formatTimelineSegment),
                            onFocusSegment: this.onFocusSegment,
                            focusedSegmentIndex: this.state.focusedSegmentIndex,
                            showTransition: this.state.isTransitioning,
                            duration: this.props.videoLengthSeconds,
                            onDragEnd: this.onSliderDragEnd
                        }), s.createElement(Te, {
                            startOffset: 0,
                            endOffset: this.props.videoLengthSeconds
                        })))), s.createElement(_.Ya, {
                            alignItems: _.f.Center,
                            display: _.X.Flex,
                            justifyContent: _.Xa.Between
                        }, s.createElement(je, {
                            channelDisplayName: this.props.channelDisplayName,
                            selectedMarkerCreators: this.state.selectedMarkerCreators,
                            updateSelectedMarkerFilters: this.updateSelectedMarkerFilters,
                            selectedClipCreators: this.state.selectedClipCreators,
                            updateSelectedClipsFilters: this.updateSelectedClipsFilters,
                            userID: this.props.userID,
                            channelID: this.props.channelID,
                            videoID: this.props.videoID,
                            clipsDownloadData: this.state.clipsDownloadData,
                            markersDownloadData: this.state.markersDownloadData
                        })))
                    }, t
                }(s.Component),
                Ye = Object(z.compose)(Object(E.b)("VideoTimeline", {
                    autoReportInteractive: !0
                }))(Ge);

            function qe(e) {
                return {
                    channel: e.channelLogin,
                    channel_id: e.channelID,
                    source_video_id: e.sourceVideoID,
                    user_id: e.userID,
                    referrer_clip_id: e.referrerClipID
                }
            }

            function Qe(e) {
                var t = function(e) {
                    var t = Math.round((e.endTime.getTime() - e.startTime.getTime()) / 1e3);
                    return r.__assign({}, qe(e), {
                        curation_duration: t,
                        generated_video_count: e.generatedVideoIDs.length,
                        generated_video_ids: e.generatedVideoIDs.join(",")
                    })
                }(e);
                l.o.track(D.SpadeEventType.HighlighterCurationFinish, t)
            }

            function ze() {
                return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }
            var Ke, $e = n("8QND"),
                Ze = (n("SMTm"), 0),
                Je = -1;
            ! function(e) {
                e[e.SourceVideoTitle = 0] = "SourceVideoTitle", e[e.SourceVideoDate = 1] = "SourceVideoDate", e[e.SourceVideoViews = 2] = "SourceVideoViews", e[e.SourceVideoGame = 3] = "SourceVideoGame"
            }(Ke || (Ke = {}));
            var et, tt = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        if (n.state = {
                                activeID: "",
                                currentSegmentOffsets: {
                                    startOffset: 0,
                                    endOffset: 0
                                },
                                lastVideoOffset: null,
                                requestedPlayerOffset: Ze,
                                shouldPlayerPause: !1,
                                highlightQueue: [],
                                userMadeChanges: !1
                            }, n.paramOverrides = function(e) {
                                var t, n = new URLSearchParams(e),
                                    r = n.get(a.Start),
                                    s = n.get(a.End),
                                    o = n.get(i.VideoStartTime);
                                return (t = {})[a.TrackingID] = n.get(a.TrackingID), t[a.GameName] = n.get(a.GameName), t[a.GameID] = n.get(a.GameID), t[a.Title] = n.get(a.Title), t[a.Start] = null !== r ? Number(r) : null, t[a.End] = null !== s ? Number(s) : null, t[i.VideoStartTime] = o ? Object(y.a)(o) : null, t
                            }(window.location.search), n.hasConsumedParams = !1, n.onChangeVODClick = function() {
                                n.props.showSelectVODModal()
                            }, n.onAddNewHighlight = function() {
                                n.setState(function(e) {
                                    var t = n.props.data.video;
                                    if (!t) return e;
                                    var a = n.getHighlightByID(n.state.activeID),
                                        i = Xe(t.lengthSeconds),
                                        s = Ue(t.lengthSeconds);
                                    a && Math.ceil(a.segments[0].endOffsetSeconds) !== t.lengthSeconds && (i = Math.ceil(a.segments[0].endOffsetSeconds), s = t.lengthSeconds);
                                    var o = {};
                                    a && a.metadata.game && (o = {
                                        game: a.metadata.game
                                    });
                                    var l = {
                                            tempID: ze(),
                                            sourceVideoDetails: {
                                                id: t.id,
                                                lengthSeconds: t.lengthSeconds,
                                                title: t.title
                                            },
                                            metadata: n.formatSourceVideoFields(t, o),
                                            segments: [{
                                                startOffsetSeconds: i,
                                                endOffsetSeconds: s
                                            }]
                                        },
                                        d = e.highlightQueue;
                                    return r.__assign({}, e, {
                                        requestedPlayerOffset: l.segments[0].startOffsetSeconds,
                                        highlightQueue: d.concat(l),
                                        activeID: l.tempID,
                                        userMadeChanges: !0,
                                        currentSegmentOffsets: {
                                            startOffset: i,
                                            endOffset: s
                                        }
                                    })
                                })
                            }, n.onPostSaveFinishAndNavigate = function(e) {
                                n.setState({
                                    highlightQueue: []
                                }, function() {
                                    n.props.history.push("/" + n.props.match.params.channelName + "/manager/edit/" + e[0], {
                                        vodIDs: e
                                    })
                                })
                            }, n.onRemoveSegment = function(e) {
                                n.setState(function(t) {
                                    var n = t.highlightQueue.slice();
                                    n.splice(e, 1);
                                    var a = e - 1;
                                    return 0 === n.length ? a = null : a < 0 && (a = 0), {
                                        activeID: null === a ? "" : n[a].tempID,
                                        highlightQueue: n
                                    }
                                }, function() {
                                    var e = n.getHighlightByID(n.state.activeID);
                                    e && n.updateHighlighterURL(e.sourceVideoDetails.id)
                                })
                            }, n.onSaveSuccess = function(e) {
                                var t = n.props.data;
                                if (t.video) {
                                    var i = n.curationStartTime || new Date,
                                        r = t.video.owner;
                                    Qe({
                                        channelLogin: r ? r.login : null,
                                        channelID: r ? r.id : null,
                                        generatedVideoIDs: e,
                                        endTime: new Date,
                                        userID: t.currentUser ? t.currentUser.id : null,
                                        sourceVideoID: t.video.id,
                                        startTime: i,
                                        referrerClipID: n.paramOverrides[a.TrackingID] || null
                                    })
                                }
                            }, n.onBeforeunloadHandler = function(e) {
                                if (0 === n.state.highlightQueue.length || !n.state.userMadeChanges) return !1;
                                var t = confirm(n.discardChangesMessage());
                                return e.returnValue = t, t
                            }, n.onTimelineStartOffsetFocus = function(e) {
                                n.setState({
                                    currentSegmentOffsets: e,
                                    requestedPlayerOffset: e.startOffset,
                                    shouldPlayerPause: !0
                                })
                            }, n.onTimelineEndOffsetFocus = function(e) {
                                n.setState({
                                    currentSegmentOffsets: e,
                                    requestedPlayerOffset: e.endOffset,
                                    shouldPlayerPause: !0
                                })
                            }, n.onTimelineOffsetChange = function(e, t) {
                                var a = n.getHighlightByID(n.state.activeID);
                                a && (t > 0 && e.startOffset < a.segments[t - 1].endOffsetSeconds || t < a.segments.length - 1 && e.endOffset > a.segments[t + 1].startOffsetSeconds) || (Math.floor(e.startOffset) === Math.ceil(e.endOffset) && (e.startOffset !== n.state.currentSegmentOffsets.startOffset ? e.startOffset-- : e.endOffset++), n.updateSegmentsState(e, t), n.updateCurrentSegmentOffsets(e))
                            }, n.updateSegmentsState = function(e, t) {
                                n.setState(function(n) {
                                    var a = n.highlightQueue.slice(),
                                        i = a.find(function(e) {
                                            return e.tempID === n.activeID
                                        });
                                    if (!n.activeID || !i) return n;
                                    var s = Math.floor(e.startOffset),
                                        o = Math.ceil(e.endOffset);
                                    return i.segments[t].startOffsetSeconds = s, i.segments[t].endOffsetSeconds = o, r.__assign({}, n, {
                                        highlightQueue: a,
                                        userMadeChanges: !0
                                    })
                                })
                            }, n.updateCurrentSegmentOffsets = function(e) {
                                if (null !== n.state.currentSegmentOffsets) {
                                    var t = n.state.currentSegmentOffsets,
                                        a = {};
                                    e.startOffset !== t.startOffset && (a.currentSegmentOffsets = e, a.requestedPlayerOffset = e.startOffset), e.endOffset !== t.endOffset && (a.currentSegmentOffsets = e, a.requestedPlayerOffset = e.endOffset), e.startOffset !== t.startOffset && e.endOffset !== t.endOffset && (a.requestedPlayerOffset = n.state.requestedPlayerOffset), n.setState(r.__assign({}, n.state, a))
                                }
                            }, n.onPlayerPauseToggle = function(e) {
                                n.setState({
                                    shouldPlayerPause: e
                                })
                            }, n.requestPlayerTimeChange = function(e) {
                                n.setState({
                                    requestedPlayerOffset: e
                                })
                            }, n.onPlayerTimeChange = function(e) {
                                var t = Math.floor(e);
                                t !== n.state.lastVideoOffset ? t !== n.activeOffsetWorkaround().endOffset || !0 === n.state.shouldPlayerPause ? n.setState({
                                    lastVideoOffset: t
                                }) : n.setState({
                                    shouldPlayerPause: !0,
                                    lastVideoOffset: t
                                }) : n.state.requestedPlayerOffset === t && n.setState({
                                    requestedPlayerOffset: Je
                                })
                            }, n.onChangeActiveSegment = function(e) {
                                var t = n.getHighlightByID(e);
                                t && n.setState({
                                    activeID: e,
                                    currentSegmentOffsets: {
                                        startOffset: t.segments[0].startOffsetSeconds,
                                        endOffset: t.segments[0].endOffsetSeconds
                                    }
                                }, function() {
                                    n.updateHighlighterURL(t.sourceVideoDetails.id)
                                })
                            }, n.updateHighlighterURL = function(e) {
                                l.p.history.push("/" + n.props.match.params.channelName + "/manager/highlighter/" + e)
                            }, n.onTitleChange = function(e, t) {
                                n.setState(function(a) {
                                    var i = a.highlightQueue[e];
                                    return i.metadata.title = t, n.updateSegmentInState(e, a, i)
                                })
                            }, n.onGameChange = function(e, t) {
                                n.setState(function(a) {
                                    var i = a.highlightQueue[e];
                                    return i.metadata.game = t, n.updateSegmentInState(e, a, i)
                                })
                            }, n.updateSegmentInState = function(e, t, n, a) {
                                void 0 === a && (a = {});
                                var i = t.highlightQueue.slice(0, e).concat([n], t.highlightQueue.slice(e + 1, t.highlightQueue.length));
                                return r.__assign({}, t, a, {
                                    highlightQueue: i
                                })
                            }, n.shouldAllowNavigation = function(e) {
                                return !!e.pathname.match("/manager/highlighter") || n.discardChangesMessage()
                            }, n.setParamSourcedDefaultsOnce = function() {
                                n.hasConsumedParams || (n.hasConsumedParams = !0, 0 !== Object.keys(n.paramOverrides).length && (l.p.history.replace(l.p.history.location.pathname), n.setState(function(e) {
                                    var t = e.highlightQueue[0],
                                        a = n.paramOverrides,
                                        i = a.title,
                                        r = a.gameID,
                                        s = a.game,
                                        o = a.start,
                                        l = a.end;
                                    return r && s && (t.metadata.game = {
                                        id: r,
                                        name: s
                                    }), i && (t.metadata.title = i), null !== o && (t.segments[0].startOffsetSeconds = o), null !== l && (t.segments[0].endOffsetSeconds = l), n.updateSegmentInState(0, e, t, {})
                                })))
                            }, n.addNewSegmentAtOffset = function(e) {
                                var t = n.getHighlightByID(n.state.activeID);
                                if (!t) return -1;
                                for (var a = 0, i = t.segments; a < i.length; a++) {
                                    var s = i[a];
                                    if (e >= s.startOffsetSeconds && e <= s.endOffsetSeconds) return -1
                                }
                                var o = r.__assign({}, t),
                                    l = {
                                        startOffsetSeconds: e,
                                        endOffsetSeconds: Math.min(e + .05 * o.sourceVideoDetails.lengthSeconds, o.sourceVideoDetails.lengthSeconds)
                                    },
                                    d = o.segments.findIndex(function(t) {
                                        return e < t.startOffsetSeconds
                                    }); - 1 === d ? d = o.segments.length : l.endOffsetSeconds = Math.min(l.endOffsetSeconds, o.segments[d].startOffsetSeconds - 1), o.segments.splice(d, 0, l);
                                var c = n.state.highlightQueue.slice(),
                                    u = c.findIndex(function(e) {
                                        return e.tempID === o.tempID
                                    });
                                return c.splice(u, 1, o), n.setState({
                                    highlightQueue: c
                                }), d
                            }, n.removeSegmentAtIndex = function(e) {
                                var t = n.getHighlightByID(n.state.activeID);
                                if (t) {
                                    var a = r.__assign({}, t);
                                    a.segments.splice(e, 1);
                                    var i = n.state.highlightQueue.slice(),
                                        s = i.findIndex(function(e) {
                                            return e.tempID === a.tempID
                                        });
                                    i.splice(s, 1, a), n.setState({
                                        highlightQueue: i
                                    })
                                }
                            }, n.splitSegmentAtIndex = function(e, t) {
                                var a = n.getHighlightByID(n.state.activeID);
                                if (a && t > a.segments[e].startOffsetSeconds && t < a.segments[e].endOffsetSeconds) {
                                    var i = r.__assign({}, a),
                                        s = i.segments,
                                        o = r.__assign({}, s[e]);
                                    s[e].endOffsetSeconds = t - 1, o.startOffsetSeconds = t, s.splice(e + 1, 0, o);
                                    var l = n.state.highlightQueue.slice(),
                                        d = l.findIndex(function(e) {
                                            return e.tempID === i.tempID
                                        });
                                    return l.splice(d, 1, i), n.setState({
                                        highlightQueue: l
                                    }), e + 1
                                }
                                return -1
                            }, !t.data.loading && !t.data.error && t.data.video) {
                            var s = n.videoSegmentFromSource(t.data.video);
                            n.state.currentSegmentOffsets = {
                                startOffset: Xe(t.data.video.lengthSeconds),
                                endOffset: Ue(t.data.video.lengthSeconds)
                            }, n.state.highlightQueue = [s];
                            var o = n.paramOverrides[i.VideoStartTime] || n.paramOverrides[a.Start] || 0;
                            n.state.requestedPlayerOffset = o < t.data.video.lengthSeconds ? o : 0, n.state.activeID = s.tempID
                        }
                        return n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("beforeunload", this.onBeforeunloadHandler), this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("beforeunload", this.onBeforeunloadHandler)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = this,
                            n = this.props.data.loading && !e.data.loading;
                        if ((n || !e.data.error) && e.data.video) {
                            if (n && !this.props.data.video && e.data.video && e.data.video.owner) {
                                var s = e.data.video.owner.displayName;
                                l.p.setPageTitle(Object(l.e)("{ownerDisplayName} - Highlighter", {
                                    ownerDisplayName: s
                                }, "HighlighterPageComponent"))
                            }
                            this.setState(function(n) {
                                if (!e.data.video) return n;
                                var s = r.__assign({}, n, {
                                        currentSegmentOffsets: {
                                            startOffset: Xe(e.data.video.lengthSeconds),
                                            endOffset: Ue(e.data.video.lengthSeconds)
                                        }
                                    }),
                                    o = t.props.data.video && e.data.video.id !== t.props.data.video.id,
                                    l = 0 === t.state.highlightQueue.length,
                                    d = !o && t.props.match.params.videoID !== e.match.params.videoID,
                                    c = t.getHighlightByID(t.state.activeID),
                                    u = !!(e.data.video && o && c && t.props.data.video && c.sourceVideoDetails.id === t.props.data.video.id),
                                    p = e.data.video && !d && (!t.props.data.video || l);
                                if (u || p) {
                                    var f = t.videoSegmentFromSource(e.data.video);
                                    s.highlightQueue = t.state.highlightQueue.concat(f);
                                    var m = t.paramOverrides[i.VideoStartTime] || t.paramOverrides[a.Start] || 0;
                                    s.requestedPlayerOffset = m < e.data.video.lengthSeconds ? m : 0, s.activeID = f.tempID
                                } else c && (s.requestedPlayerOffset = c.segments[0].startOffsetSeconds, s.currentSegmentOffsets = {
                                    startOffset: c.segments[0].startOffsetSeconds,
                                    endOffset: c.segments[0].endOffsetSeconds
                                });
                                return s
                            }, this.setParamSourcedDefaultsOnce)
                        }
                    }, t.prototype.componentDidUpdate = function() {
                        var e = this.props.data;
                        if (!this.curationStartTime && e.video) {
                            this.curationStartTime = new Date;
                            var t = e.video.owner;
                            ! function(e) {
                                l.o.track(D.SpadeEventType.HighlighterCurationStart, qe(e))
                            }({
                                channelID: t ? t.id : null,
                                channelLogin: t ? t.login : null,
                                currentTime: this.curationStartTime,
                                userID: e.currentUser ? e.currentUser.id : null,
                                sourceVideoID: e.video.id,
                                referrerClipID: this.paramOverrides[a.TrackingID] || null
                            })
                        }
                    }, t.prototype.render = function() {
                        if (this.props.data.loading && !this.props.data.video) return null;
                        var e = this.props.match.params.channelName;
                        if (e && (e = e.toLowerCase()), this.props.data.video && "" === this.props.data.video.id) return s.createElement(f.a, {
                            to: Object(O.d)(e)
                        });
                        if (!this.props.data.video || this.props.data.error || !this.props.data.video.owner) return s.createElement(d.a, {
                            message: Object(l.e)("Error loading video data. Please try again later.", "HighlighterPageComponent")
                        });
                        if (this.props.data.video.broadcastType !== b.a.Archive) return s.createElement(d.a, {
                            message: Object(l.e)("You can only highlight past broadcasts.", "HighlighterPageComponent")
                        });
                        if (this.props.data.video.owner && this.props.data.video.owner.login !== e) return s.createElement(d.a, {
                            message: Object(l.e)("The selected video to highlight does not exist.", "HighlighterPageComponent")
                        });
                        var t = this.activeOffsetWorkaround(),
                            n = s.createElement(d.a, {
                                message: Object(l.e)("Oops, something went wrong.", "HighlighterPageComponent")
                            });
                        return s.createElement(h.a, {
                            content: n
                        }, s.createElement(g.b, null, s.createElement(_.sb, {
                            centered: !0
                        }, s.createElement(_.Fb, {
                            alignItems: _.f.Stretch,
                            background: _.r.Alt,
                            className: "highlighter-page",
                            display: _.X.Flex,
                            flexDirection: _.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0,
                            padding: {
                                x: 3,
                                top: 4
                            }
                        }, s.createElement(_.Ja, {
                            gutterSize: _.Ka.Medium
                        }, s.createElement(_.P, {
                            cols: {
                                default: 12,
                                sm: 5,
                                md: 4
                            }
                        }, s.createElement(_.Ya, {
                            className: "highlighter-page__queue",
                            display: _.X.Flex,
                            fullHeight: !0,
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(_.Fb, {
                            fullHeight: !0,
                            fullWidth: !0,
                            elevation: 1,
                            background: _.r.Base
                        }, s.createElement(Q, {
                            activeID: this.state.activeID,
                            queue: this.state.highlightQueue,
                            onChangeActiveSegment: this.onChangeActiveSegment,
                            onChangeVideo: this.onChangeVODClick,
                            onGameChange: this.onGameChange,
                            onPostSaveFinishAndNavigate: this.onPostSaveFinishAndNavigate,
                            onSaveSuccess: this.onSaveSuccess,
                            onSegmentDelete: this.onRemoveSegment,
                            onAddNewHighlight: this.onAddNewHighlight,
                            onTitleChange: this.onTitleChange
                        }), s.createElement(p.a, {
                            when: 0 !== this.state.highlightQueue.length && this.state.userMadeChanges,
                            message: this.shouldAllowNavigation
                        })))), s.createElement(_.P, {
                            cols: {
                                default: 12,
                                sm: 7,
                                md: 8
                            }
                        }, s.createElement(_.Ya, {
                            fullHeight: !0,
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(_.Fb, {
                            elevation: 1,
                            background: _.r.Base,
                            fullHeight: !0
                        }, s.createElement(_.Ya, {
                            padding: 1,
                            display: _.X.Flex,
                            className: "highlighter__card-header",
                            alignItems: _.f.Center
                        }, s.createElement(_.W, {
                            fontSize: _.Ca.Size5
                        }, Object(l.e)("Source Video", "HighlighterPageComponent"))), s.createElement(_.o, {
                            ratio: _.p.Aspect16x9
                        }, s.createElement(w, {
                            videoID: this.props.data.video.id,
                            paused: this.state.shouldPlayerPause,
                            onVideoTimeChange: this.onPlayerTimeChange,
                            nextVideoOffset: this.state.requestedPlayerOffset,
                            onPauseToggled: this.onPlayerPauseToggle,
                            editing: t
                        })), s.createElement(_.Ya, {
                            padding: 1
                        }, this.renderSourceVideoInfo(this.props.data.video)))))), s.createElement(_.Ya, {
                            margin: {
                                y: 4
                            }
                        }, s.createElement(Ye, {
                            activeHighlight: this.getHighlightByID(this.state.activeID),
                            onStartOffsetFocus: this.onTimelineStartOffsetFocus,
                            onEndOffsetFocus: this.onTimelineEndOffsetFocus,
                            onTimelineOffsetChange: this.onTimelineOffsetChange,
                            requestPlayerTimeChange: this.requestPlayerTimeChange,
                            videoLengthSeconds: this.props.data.video.lengthSeconds,
                            currentVideoOffset: this.state.lastVideoOffset,
                            channelDisplayName: this.props.data.video.owner.displayName,
                            videoID: this.props.data.video.id,
                            videoType: this.props.data.video.broadcastType,
                            channelID: this.props.data.video.owner.id,
                            userID: this.props.data.currentUser ? this.props.data.currentUser.id : null,
                            onPauseToggled: this.onPlayerPauseToggle,
                            paused: this.state.shouldPlayerPause,
                            addNewSegmentAtOffset: this.addNewSegmentAtOffset,
                            removeSegmentAtIndex: this.removeSegmentAtIndex,
                            splitSegmentAtIndex: this.splitSegmentAtIndex
                        }))))))
                    }, t.prototype.renderSourceVideoInfo = function(e) {
                        return s.createElement(_.Ya, {
                            display: _.X.Flex,
                            justifyContent: _.Xa.Between
                        }, s.createElement(_.Ya, null, s.createElement(_.W, {
                            "data-test-selector": Ke.SourceVideoTitle,
                            fontSize: _.Ca.Size5,
                            italic: !e.title,
                            lines: 2,
                            ellipsis: !0
                        }, e.title || Object(l.e)("Untitled Broadcast", "HighlighterSourceVideoInfo")), s.createElement(_.Ya, {
                            display: _.X.Flex
                        }, e.publishedAt && s.createElement(_.Ya, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(_.W, {
                            "data-test-selector": Ke.SourceVideoDate,
                            type: _.Wb.Span
                        }, Object(l.c)(new Date(e.publishedAt), "medium"))), e.game && s.createElement(_.Ya, {
                            display: _.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(_.Fb, {
                            padding: {
                                right: .5
                            },
                            color: _.O.Alt2,
                            display: _.X.Flex
                        }, s.createElement(_.tb, {
                            asset: _.ub.NavGames,
                            width: 16,
                            height: 16
                        })), s.createElement(_.W, {
                            color: _.O.Alt2,
                            "data-test-selector": Ke.SourceVideoGame
                        }, e.game.name)), null !== e.viewCount && s.createElement(_.Ya, {
                            display: _.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(_.Fb, {
                            padding: {
                                right: .5
                            },
                            color: _.O.Alt2,
                            display: _.X.Flex
                        }, s.createElement(_.tb, {
                            asset: _.ub.GlyphViews,
                            width: 16,
                            height: 16
                        })), s.createElement(_.W, {
                            color: _.O.Alt2,
                            "data-test-selector": Ke.SourceVideoViews
                        }, Object(l.f)(e.viewCount))))))
                    }, t.prototype.getHighlightByID = function(e) {
                        return this.state.highlightQueue.find(function(t) {
                            return t.tempID === e
                        }) || null
                    }, t.prototype.formatSourceVideoFields = function(e, t) {
                        var n = r.__assign({}, e, t);
                        return {
                            description: n.description || "",
                            game: n.game,
                            language: n.language,
                            tags: n.tags,
                            title: Object(l.e)("Highlight: {videoTitle}", {
                                videoTitle: n.title
                            }, "HighlighterPageComponent")
                        }
                    }, t.prototype.videoSegmentFromSource = function(e) {
                        return {
                            tempID: ze(),
                            sourceVideoDetails: {
                                id: e.id,
                                lengthSeconds: e.lengthSeconds,
                                title: e.title
                            },
                            metadata: this.formatSourceVideoFields(e),
                            segments: [{
                                startOffsetSeconds: Xe(e.lengthSeconds),
                                endOffsetSeconds: Ue(e.lengthSeconds)
                            }]
                        }
                    }, t.prototype.discardChangesMessage = function() {
                        return Object(l.e)("Your highlights have not been created. Are you sure you want to leave?", "HighlighterPageComponent")
                    }, t.prototype.activeOffsetWorkaround = function() {
                        var e = {
                                startOffset: 0,
                                endOffset: 0
                            },
                            t = this.getHighlightByID(this.state.activeID);
                        return t && (e = {
                            startOffset: t.segments[0].startOffsetSeconds,
                            endOffset: t.segments[0].endOffsetSeconds
                        }), e
                    }, t
                }(s.Component),
                nt = Object(m.compose)(Object(v.a)($e, {
                    options: function(e) {
                        return {
                            variables: {
                                videoID: e.match.params.videoID
                            }
                        }
                    }
                }), Object(E.b)("HighlighterPage", {
                    destination: k.a.VideoManagerHighlighter
                }), Object(S.a)({
                    location: D.PageviewLocation.VideoManagerHighlighter,
                    properties: function(e) {
                        var t = null;
                        return e.data.video && e.data.video.owner && e.data.video.owner.id && (t = Number(e.data.video.owner.id)), {
                            channel_id: t
                        }
                    },
                    skip: function(e) {
                        return e.data.loading
                    }
                }))(tt),
                at = n("cZKs"),
                it = n("YJDT");
            ! function(e) {
                e.ARCHIVE = "ARCHIVE", e.HIGHLIGHT = "HIGHLIGHT", e.PAST_PREMIERE = "PAST_PREMIERE", e.PREMIERE_UPLOAD = "PREMIERE_UPLOAD", e.UPLOAD = "UPLOAD"
            }(et || (et = {}));
            var rt, st = n("o4ss");
            n("meYm");
            ! function(e) {
                e[e.VideoCard = 0] = "VideoCard"
            }(rt || (rt = {}));
            var ot = 200,
                lt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onLoadMoreHandler = function() {
                            if (!(t.props.data && t.props.data.user && t.props.data.user.searchVideos && t.props.data.user.searchVideos.edges)) return Promise.reject(new Error("Encountered unexpected null value for user or searchVideos, cannot load more."));
                            var e = t.props.data.user.searchVideos.edges.length - 1,
                                n = t.props.data.user.searchVideos.edges[e];
                            if (!n) return Promise.reject(new Error("Encountered unexpected null value for last video, cannot load more."));
                            var a = n.cursor;
                            return t.props.data.fetchMore({
                                query: st,
                                variables: {
                                    creatorLogin: t.props.channelName,
                                    after: a
                                },
                                updateQuery: dt
                            }).then(function() {})
                        }, t.onSearchInputChangeHandler = function(e) {
                            var n = e.currentTarget.value;
                            t.state.searchChangeTimeoutID && clearTimeout(t.state.searchChangeTimeoutID);
                            var a = setTimeout(function() {
                                return r.__awaiter(t, void 0, void 0, function() {
                                    return r.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return e.trys.push([0, , 2, 3]), [4, this.props.data.refetch({
                                                    creatorLogin: this.props.channelName,
                                                    search: {
                                                        term: n
                                                    }
                                                })];
                                            case 1:
                                                return e.sent(), [3, 3];
                                            case 2:
                                                return this.setState({
                                                    searchChangeTimeoutID: void 0
                                                }), [7];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }, ot);
                            t.setState({
                                searchChangeTimeoutID: a
                            })
                        }, t.onVideoClick = function(e) {
                            l.p.history.push("/" + t.props.channelName + "/manager/highlighter/" + e.id), t.props.closeModal()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = !!(this.props.data.user && this.props.data.user.searchVideos && this.props.data.user.searchVideos.pageInfo && this.props.data.user.searchVideos.pageInfo.hasNextPage);
                        return s.createElement(_.i, {
                            type: _.n.FadeIn,
                            delay: _.j.Medium,
                            duration: _.k.Medium,
                            enabled: !0
                        }, s.createElement(_.Fb, {
                            background: _.r.Base,
                            className: "highlighter-vod-selector",
                            display: _.X.Flex,
                            flexDirection: _.Aa.Column,
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(_.Ya, {
                            padding: {
                                x: 3,
                                y: 2
                            }
                        }, s.createElement(_.W, {
                            fontSize: _.Ca.Size4
                        }, Object(l.e)("Select a Past Broadcast", "HighlighterVODSelectModal")), s.createElement(_.Ya, {
                            padding: {
                                y: 1
                            }
                        }, s.createElement(_.Ea, {
                            label: Object(l.e)("Search your videos", "HighlighterVODSelectModal")
                        }, s.createElement(_.wb, {
                            onChange: this.onSearchInputChangeHandler,
                            placeholder: Object(l.e)("Filter by video title", "HighlighterVODSelectModal")
                        })))), s.createElement(g.b, {
                            suppressScrollX: !0
                        }, s.createElement(_.Ya, {
                            display: _.X.Flex,
                            flexDirection: _.Aa.Column
                        }, this.renderVideos(), s.createElement(g.a, {
                            enabled: e,
                            loadMore: this.onLoadMoreHandler
                        }))), s.createElement(at.a, {
                            closeOnBackdropClick: !0
                        })))
                    }, t.prototype.renderVideos = function() {
                        var e = this;
                        if (this.state.searchChangeTimeoutID || this.props.data.loading) return s.createElement(_.ab, {
                            fillContent: !0,
                            delay: 500
                        });
                        if (this.props.data.error || !this.props.data.user || !this.props.data.user.searchVideos) return s.createElement(_.Ya, {
                            alignSelf: _.g.Center,
                            justifyContent: _.Xa.Center
                        }, Object(l.e)("There was an error searching your videos. Please try again.", "HighlighterVODSelectModal"));
                        var t = this.props.data.user.searchVideos.edges && this.props.data.user.searchVideos.edges.map(function(e) {
                            return e && e.node
                        }).filter(function(e) {
                            return null !== e && e.broadcastType === et.ARCHIVE
                        });
                        return t && 0 !== t.length ? t.map(function(t, n) {
                            var a = !(!t || t.id !== e.props.currentVideoID);
                            return s.createElement(_.Va, {
                                key: n,
                                onClick: e.onVideoClick.bind(e, t),
                                "data-test-selector": rt.VideoCard,
                                disabled: a
                            }, s.createElement(_.Fb, {
                                alignItems: _.f.Center,
                                display: _.X.Flex,
                                flexDirection: _.Aa.Row,
                                flexGrow: 1,
                                padding: {
                                    x: 3,
                                    y: .5
                                }
                            }, s.createElement(_.Ya, {
                                flexGrow: 1,
                                flexShrink: 1,
                                padding: {
                                    right: .5
                                },
                                ellipsis: !0
                            }, s.createElement(it.a, {
                                video: t,
                                selected: a
                            }))))
                        }) : s.createElement(_.Ya, {
                            alignSelf: _.g.Center,
                            justifyContent: _.Xa.Center
                        }, Object(l.e)("No results found.", "HighlighterVODSelectModal"))
                    }, t
                }(s.Component),
                dt = function(e, t) {
                    if (!t.fetchMoreResult) return e;
                    var n = t.fetchMoreResult;
                    if (!n.user || !n.user.searchVideos) return e;
                    var a = (n.user.searchVideos.edges || []).filter(function(e) {
                        return null !== e
                    });
                    return {
                        user: r.__assign({}, n.user, {
                            searchVideos: r.__assign({}, n.user.searchVideos, {
                                edges: Object(N.c)(e.user.searchVideos.edges, a)
                            })
                        }),
                        collection: e.collection
                    }
                },
                ct = Object(v.a)(st, {
                    options: function(e) {
                        return {
                            variables: {
                                creatorLogin: e.channelName
                            }
                        }
                    }
                })(lt);
            var ut = Object(o.connect)(null, function(e) {
                return Object(m.bindActionCreators)({
                    closeModal: u.c
                }, e)
            })(ct);
            var pt = Object(o.connect)(null, function(e, t) {
                return {
                    showSelectVODModal: function() {
                        e(Object(u.d)(ut, {
                            channelName: t.match.params.channelName,
                            currentVideoID: t.match.params.videoID
                        }))
                    }
                }
            })(function(e) {
                return s.createElement(c.a, {
                    ownerLogin: e.match.params.channelName,
                    permittedRoles: {
                        editor: !0,
                        staff: !0
                    }
                }, function(t) {
                    var n = t.loading,
                        a = t.permitted;
                    return n || a ? s.createElement(nt, r.__assign({}, e)) : s.createElement(d.a, {
                        message: Object(l.e)("Something went wrong. Please try again.", "HighlighterErrorPage")
                    })
                })
            });
            n.d(t, "HighlighterPage", function() {
                return pt
            })
        },
        "6FuP": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Orange = "orange", e.Blue = "blue"
                }(a || (a = {}))
        },
        "8QND": function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "HighlighterPage_Video"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
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
                                        value: "videoID"
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
                                        value: "broadcastType"
                                    },
                                    arguments: [],
                                    directives: []
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
                                            value: "160"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "90"
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
                                        value: "viewCount"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "videoFields"
                                    },
                                    directives: []
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
                    end: 311
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/video-field-editor/models/video-fields-fragment.gql"\nquery HighlighterPage_Video($videoID: ID!) {\nvideo(id: $videoID) {\nid\nbroadcastType\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\npreviewThumbnailURL(width: 160 height: 90)\npublishedAt\nviewCount\n...videoFields\n}\ncurrentUser {\nid\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("2dAP").definitions)), e.exports = a
        },
        "9H5I": function(e, t, n) {},
        DAV8: function(e, t, n) {},
        Mqpi: function(e, t, n) {},
        QClN: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "HighlighterMarkers"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoID"
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
                                        value: "videoID"
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
                                        value: "bookmarks"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "100"
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
                                                                value: "positionSeconds"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
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
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "description"
                                                            },
                                                            arguments: [],
                                                            directives: []
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 233
                }
            };
            n.loc.source = {
                body: "query HighlighterMarkers($videoID: ID! $cursor: Cursor) {\nvideo(id: $videoID) {\nid\nbookmarks(first: 100 after: $cursor) {\nedges {\nnode {\nid\npositionSeconds\nuser {\nid\ndisplayName\n}\ndescription\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        RoGO: function(e, t, n) {},
        "Rw/r": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("9kXc"),
                s = n("Ue10"),
                o = n("eNO8"),
                l = n("/7QA"),
                d = n("H/lO"),
                c = n("NZDK"),
                u = 10,
                p = function() {
                    return function() {
                        var e = this;
                        this.searchCode = function(t, n) {
                            return a.__awaiter(e, void 0, Promise, function() {
                                var e;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, this.searchClient.queryForType(d.a.Games, t, t, {
                                                hitsPerPage: u,
                                                page: n
                                            })];
                                        case 1:
                                            return [2, a.sent()];
                                        case 2:
                                            throw e = a.sent(), l.k.error(e, "Algolia type results search failed"), e;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, this.searchClient = new c.a({
                            appId: l.a.algoliaApplicationID,
                            apiKey: l.a.algoliaAPIKey,
                            apolloClient: l.p.apollo.client,
                            logger: l.k,
                            config: l.a,
                            stats: l.p.stats
                        })
                    }
                }(),
                f = [],
                m = {
                    objectID: "",
                    name: ""
                },
                h = function(e) {
                    return {
                        objectID: "",
                        name: e
                    }
                },
                g = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.startNewSearch = function(e) {
                            n.setState({
                                isSearchPending: !0,
                                searchTerm: e,
                                nextAlgoliaPage: 0
                            }, n.triggerLoadMore)
                        }, n.triggerLoadMore = function() {
                            return n.searchClient.searchCode(n.state.searchTerm, n.state.nextAlgoliaPage).then(function(e) {
                                n.resolveLoadMore(e)
                            })
                        }, n.resolveLoadMore = function(e) {
                            if (!e || e.id === n.state.searchTerm) {
                                var t = void 0;
                                if (e) {
                                    var a = void 0;
                                    n.state.gameResults && (a = {
                                        totalHits: n.state.gameResults.length,
                                        results: n.state.gameResults
                                    });
                                    var i = Object(r.b)({
                                        searchResults: e,
                                        append: n.state.nextAlgoliaPage > 0,
                                        currentGameResults: a
                                    }).currentGameResults;
                                    t = i ? i.results : f
                                }
                                n.setState({
                                    gameResults: t,
                                    isSearchPending: !1,
                                    nextAlgoliaPage: n.state.nextAlgoliaPage + 1
                                })
                            }
                        }, n.selectGame = function(e) {
                            if (n.state.gameResults && n.state.gameResults.length && n.state.gameResults[e] && n.state.gameResults[e].title) {
                                var t = n.state.gameResults[e];
                                if (t.title) {
                                    var a = {
                                        objectID: t.id,
                                        name: t.title
                                    };
                                    n.setselectedGametate(a)
                                } else n.selectEmptyGame()
                            } else n.selectEmptyGame()
                        }, n.selectGameByName = function(e) {
                            n.setselectedGametate(h(e))
                        }, n.selectEmptyGame = function() {
                            n.setselectedGametate(m)
                        }, n.setselectedGametate = function(e) {
                            n.setState({
                                selectedGame: e,
                                searchTerm: n.props.clearOnSelect ? "" : e.name,
                                redrawKey: Math.random()
                            }, n.fireChangeGame)
                        }, n.fireChangeGame = function() {
                            n.props.onChange(n.state.selectedGame)
                        }, n.searchClient = new p, n.state = n.getInitialState(t), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.startNewSearch(this.props.currentGameTitle)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.currentGameTitle !== this.props.currentGameTitle && this.setState(this.getInitialState(e))
                    }, t.prototype.render = function() {
                        return this.props.disabled ? i.createElement("div", {
                            className: "game-selector__search-container"
                        }, i.createElement(s.Sa, {
                            value: this.props.currentGameTitle,
                            type: s.Ua.Text,
                            icon: s.ub.NavGames,
                            disabled: !0
                        })) : i.createElement(o.a, {
                            redrawKey: this.state.redrawKey,
                            searchTerm: this.state.searchTerm,
                            initialGameTitle: this.state.selectedGame.name,
                            gameResults: this.state.gameResults,
                            isSearchPending: this.state.isSearchPending,
                            startNewSearch: this.startNewSearch,
                            selectGame: this.selectGame,
                            selectEmptyGame: this.selectEmptyGame,
                            selectGameByName: this.selectGameByName,
                            triggerLoadMore: this.triggerLoadMore,
                            compact: this.props.compact
                        })
                    }, t.prototype.getInitialState = function(e) {
                        return {
                            searchTerm: e.currentGameTitle,
                            gameResults: f,
                            isSearchPending: !1,
                            nextAlgoliaPage: 0,
                            selectedGame: h(e.currentGameTitle),
                            redrawKey: Math.random()
                        }
                    }, t
                }(i.Component);
            n.d(t, !1, function() {
                return f
            }), n.d(t, !1, function() {
                return m
            }), n.d(t, "a", function() {
                return g
            })
        },
        SMTm: function(e, t, n) {},
        UWbL: function(e, t, n) {
            "use strict";

            function a(e) {
                var t = /^((\d+)[Hh])?((\d+)[Mm])?((\d+)[Ss])?$/.exec(e || "");
                return t ? 3600 * (parseInt(t[2], 10) || 0) + 60 * (parseInt(t[4], 10) || 0) + (parseInt(t[6], 10) || 0) : 0
            }
            n.d(t, "a", function() {
                return a
            })
        },
        VwyG: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                i = n("kRBY"),
                r = n("mrSG"),
                s = n("q1tI"),
                o = n("oJmH"),
                l = n("/7QA"),
                d = n("yR8l"),
                c = n("GnwI"),
                u = n("nt5g"),
                p = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = l.k.withCategory("role-restricted"), n.state = {
                            loading: t.isLoggedIn,
                            permitted: !1,
                            roles: {
                                staff: !1,
                                editor: !1,
                                owner: !1
                            },
                            error: null
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = e.data && e.data.loading,
                            n = this.props.data && this.props.data.loading;
                        (!this.props.isLoggedIn || t && !n) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.maybeSetRoleState(e)
                    }, t.prototype.componentDidMount = function() {
                        this.maybeSetRoleState(this.props)
                    }, t.prototype.render = function() {
                        return this.props.children(this.state)
                    }, t.prototype.maybeSetRoleState = function(e) {
                        if (e.isLoggedIn && e.data) {
                            var t = function(e) {
                                    var t = e.data,
                                        n = {
                                            staff: !1,
                                            editor: !1,
                                            owner: !1
                                        };
                                    t && !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id);
                                    return n
                                }(e),
                                n = {
                                    loading: e.data.loading,
                                    permitted: function(e, t) {
                                        if (e.owner) return !0;
                                        if (e.staff && t.staff) return !0;
                                        if (e.editor && t.editor) return !0;
                                        return !1
                                    }(t, e.permittedRoles),
                                    roles: t,
                                    error: null
                                };
                            e.data.error ? (n.error = new Error(e.data.error.toString()), this.logger.warn("Unable to retrieve data from GraphQL.", {
                                err: n.error
                            })) : e.data.loading || e.data.user && e.data.currentUser || (n.error = new Error("Failed to fetch user information"), this.logger.warn("Failed to fetch user information.", {
                                err: n.error
                            })), this.setState(n)
                        }
                    }, t
                }(s.Component);
            var f = Object(o.compose)(Object(d.a)(u, {
                options: function(e) {
                    return {
                        variables: {
                            contentOwnerLogin: e.ownerLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn
                }
            }), Object(c.b)("RoleRestricted"))(p);
            var m = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(i.f)(e)
                }
            })(f);
            n.d(t, "a", function() {
                return m
            })
        },
        YJDT: function(e, t, n) {
            "use strict";
            n("y8/E");
            var a = n("z3cX");
            n.d(t, "a", function() {
                return a.a
            })
        },
        cOfD: function(e, t, n) {},
        dW6f: function(e, t, n) {},
        eNO8: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("TSYQ"),
                s = n("q1tI"),
                o = n("/7QA"),
                l = n("u5aL"),
                d = n("8/mp"),
                c = n("8Ad5"),
                u = n("Ue10"),
                p = function(e) {
                    return s.createElement(u.Ya, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column,
                        justifyContent: u.Xa.Center,
                        alignItems: u.f.Center,
                        position: u.kb.Absolute
                    }, s.createElement(u.Ya, {
                        textAlign: u.Sb.Center,
                        flexShrink: 1
                    }, s.createElement(u.tb, {
                        asset: e.icon,
                        width: 46,
                        height: 48,
                        type: u.vb.Alt2
                    })), s.createElement(u.Ya, {
                        margin: {
                            top: 1
                        },
                        textAlign: u.Sb.Center
                    }, s.createElement(u.W, {
                        type: u.Wb.H4,
                        color: u.O.Alt2
                    }, e.titleText)), s.createElement(u.Ya, {
                        textAlign: u.Sb.Center
                    }, s.createElement(u.W, {
                        type: u.Wb.P,
                        color: u.O.Alt2
                    }, e.subText)))
                },
                f = n("N0BP"),
                m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(u.Va, i.__assign({
                            onClick: this.props.onClick,
                            linkTo: this.props.linkTo,
                            hover: this.props.hover,
                            tabIndex: -1,
                            key: this.props.id
                        }, Object(f.a)(this.props)), s.createElement(u.Ya, {
                            className: "search-game-result-card",
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, s.createElement(u.G, {
                            row: !0
                        }, s.createElement(u.H, {
                            overflow: u.db.Hidden
                        }, s.createElement(u.Qa, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement(u.W, {
                            type: u.Wb.H5,
                            ellipsis: !0
                        }, this.props.title))))))
                    }, t
                }(s.Component),
                h = n("fk61");
            n("tK6h");
            n.d(t, "a", function() {
                    return v
                }),
                function(e) {
                    e[e.Confirm = 1] = "Confirm", e[e.Dismiss = 2] = "Dismiss", e[e.Up = 3] = "Up", e[e.Down = 4] = "Down"
                }(a || (a = {}));
            var g = {};
            g[c.a.Esc] = a.Dismiss, g[c.a.Enter] = a.Confirm, g[c.a.Tab] = a.Confirm, g[c.a.Up] = a.Up, g[c.a.Down] = a.Down;
            var v = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onFocus = function() {
                        n.props.searchTerm && n.setState({
                            isOpen: !0
                        })
                    }, n.onClickOut = function() {
                        n.state.isOpen && n.handleInteraction(a.Dismiss)
                    }, n.onKeyDown = function(e) {
                        var t = g[e.keyCode];
                        t && n.handleInteraction(t)
                    }, n.handleInteraction = function(e) {
                        switch (e) {
                            case a.Dismiss:
                                "" === n.props.searchTerm ? n.props.selectEmptyGame() : n.props.initialGameTitle && n.props.initialGameTitle !== n.props.searchTerm && n.props.gameResults && n.props.gameResults[0] && n.props.gameResults[0].title === n.props.searchTerm ? n.props.selectGame(0) : n.props.initialGameTitle ? n.props.selectGameByName(n.props.initialGameTitle) : n.props.gameResults && n.props.gameResults.length > 0 && n.props.selectGame(n.state.highlightedGameIndex), n.setState({
                                    isOpen: !1
                                });
                                break;
                            case a.Confirm:
                                n.props.searchTerm && n.props.gameResults ? n.props.selectGame(n.state.highlightedGameIndex) : n.props.selectEmptyGame(), n.setState({
                                    isOpen: !1
                                });
                                break;
                            case a.Up:
                                if (!n.props.gameResults) return;
                                n.setState({
                                    highlightedGameIndex: Math.max(0, n.state.highlightedGameIndex - 1)
                                });
                                break;
                            case a.Down:
                                if (!n.props.gameResults) return;
                                n.setState({
                                    highlightedGameIndex: Math.min(n.props.gameResults.length - 1, n.state.highlightedGameIndex + 1)
                                })
                        }
                    }, n.onChange = function(e) {
                        var t = e.target.value;
                        n.setState({
                            isOpen: !!t,
                            highlightedGameIndex: 0
                        }, function() {
                            n.props.startNewSearch(t)
                        })
                    }, n.onClickGame = function(e) {
                        var t = parseInt(e.currentTarget.getAttribute("data-game-index"), 10);
                        n.props.selectGame(t), n.setState({
                            isOpen: !1
                        })
                    }, n.state = n.state = {
                        isOpen: !1,
                        highlightedGameIndex: 0
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return s.createElement("div", {
                        className: "game-selector__search-container",
                        "data-click-out-id": "game-selector-search-balloon",
                        onKeyDown: this.onKeyDown
                    }, s.createElement(l.a, {
                        onClickOut: this.onClickOut
                    }, s.createElement(u.Sa, {
                        key: this.props.initialGameTitle + "-" + this.props.redrawKey,
                        type: u.Ua.Text,
                        icon: u.ub.NavGames,
                        name: "game",
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        defaultValue: this.props.searchTerm,
                        placeholder: Object(o.d)("Type to search and add games", "VideoManagerEdit"),
                        autoComplete: "off"
                    }), s.createElement(u.u, {
                        direction: u.v.Bottom,
                        noTail: !0,
                        size: this.props.compact ? u.w.Medium : u.w.Large,
                        show: this.state.isOpen,
                        offsetY: "5px",
                        "data-a-target": "game-selector-search-balloon"
                    }, this.renderSearchResult())))
                }, t.prototype.renderSearchResult = function() {
                    var e = r("game-selector__search-panel", {
                            "game-selector__search-panel--closed": !this.state.isOpen
                        }),
                        t = null;
                    return 0 === this.props.searchTerm.length || (t = this.props.gameResults ? this.props.gameResults.length > 0 ? this.renderGameResults(this.props.gameResults, this.state.highlightedGameIndex) : this.props.isSearchPending ? s.createElement(u.ab, {
                        fillContent: !0
                    }) : s.createElement(p, {
                        icon: u.ub.SearchNoResults,
                        titleText: Object(o.d)("No results found", "GameSelector"),
                        subText: Object(o.d)("They're probably in another castle", "GameSelector")
                    }) : s.createElement(p, {
                        icon: u.ub.DeadGlitch,
                        titleText: Object(o.d)("Search is not available at this time", "GameSelector"),
                        subText: Object(o.d)("Please try again later", "GameSelector")
                    })), s.createElement("div", {
                        className: e,
                        tabIndex: 0
                    }, s.createElement(u.Fb, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        background: u.r.Base,
                        position: u.kb.Absolute,
                        overflow: u.db.Hidden,
                        display: u.X.Block
                    }, s.createElement(d.b, {
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, s.createElement(u.Ya, {
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    }, t, s.createElement(d.a, {
                        enabled: this.state.isOpen,
                        loadMore: this.props.triggerLoadMore,
                        pixelThreshold: 50
                    })))))
                }, t.prototype.renderGameResults = function(e, t) {
                    var n = this;
                    return e.map(function(e, a, i) {
                        var r = i[t] === i[a];
                        return n.props.compact ? s.createElement(m, {
                            id: "game_" + e.title,
                            key: "game_" + e.title,
                            onClick: n.onClickGame,
                            title: e.title ? e.title : "",
                            hover: r,
                            "data-game-highlighted": r,
                            "data-game-index": a
                        }) : s.createElement(h.a, {
                            id: "game_" + e.title,
                            key: "game_" + e.title,
                            imageAlt: e.thumbnailAltText,
                            onClick: n.onClickGame,
                            title: e.title ? e.title : "",
                            hover: r,
                            "data-game-highlighted": r,
                            "data-game-index": a
                        })
                    })
                }, t
            }(s.Component)
        },
        fUVR: function(e, t, n) {},
        hudZ: function(e, t, n) {},
        "ig/l": function(e, t, n) {
            "use strict";
            var a, i, r = n("6FuP"),
                s = n("mrSG"),
                o = n("TSYQ"),
                l = n("q1tI"),
                d = n("uy8m"),
                c = n("mzKw"),
                u = n("Ue10");
            n("hudZ");
            ! function(e) {
                e.LeftHandle = "left-handle", e.Overlay = "overlay", e.RightHandle = "right-handle", e.SelectedSection = "section", e.Slider = "slider"
            }(a || (a = {})),
            function(e) {
                e.LeftHandle = "leftHandle", e.Slider = "slider", e.RightHandle = "rightHandle"
            }(i || (i = {}));
            var p = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.leftHandleRef = null, n.containerRef = null, n.rightHandleRef = null, n.sliderHandleRef = null, n.getHandleHandlers = function(e) {
                        switch (e) {
                            case i.LeftHandle:
                                return {
                                    handleRef: n.leftHandleRef,
                                    mouseMoveHandler: n.onLeftMouseMove,
                                    mouseUpHandler: n.onLeftMouseUp
                                };
                            case i.RightHandle:
                                return {
                                    handleRef: n.rightHandleRef,
                                    mouseMoveHandler: n.onRightMouseMove,
                                    mouseUpHandler: n.onRightMouseUp
                                };
                            case i.Slider:
                                return {
                                    handleRef: n.sliderHandleRef,
                                    mouseMoveHandler: n.onSliderMouseMove,
                                    mouseUpHandler: n.onSliderMouseUp
                                };
                            default:
                                return e
                        }
                    }, n.addHandleListeners = function(e) {
                        var t = n.getHandleHandlers(e),
                            a = t.handleRef,
                            i = t.mouseMoveHandler,
                            r = t.mouseUpHandler;
                        a && (n.preventUserSelect(), a.ownerDocument.addEventListener("mousemove", i), a.ownerDocument.addEventListener("mouseup", r))
                    }, n.removeHandleListeners = function(e) {
                        var t = n.getHandleHandlers(e),
                            a = t.handleRef,
                            i = t.mouseMoveHandler,
                            r = t.mouseUpHandler;
                        a && (n.allowUserSelect(), a.ownerDocument.removeEventListener("mousemove", i), a.ownerDocument.removeEventListener("mouseup", r))
                    }, n.leftHandleRefHandler = function(e) {
                        n.leftHandleRef = e
                    }, n.onLeftMouseDown = function(e) {
                        if (n.shouldHandleClick(e.button)) {
                            var t = e.clientX;
                            n.setState(function(e) {
                                return {
                                    previousPosition: t,
                                    previousBaseValue: e.startOffset
                                }
                            }, function() {
                                n.props.onLeftDragStart && n.props.onLeftDragStart({
                                    startOffset: n.state.startOffset,
                                    endOffset: n.state.endOffset
                                }), n.addHandleListeners(i.LeftHandle)
                            })
                        }
                    }, n.onLeftMouseUp = function() {
                        n.setState({
                            previousPosition: null,
                            previousBaseValue: null
                        }, function() {
                            n.props.onLeftDragEnd && n.props.onLeftDragEnd({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            }), n.removeHandleListeners(i.LeftHandle)
                        })
                    }, n.onLeftMouseMove = function(e) {
                        var t = e.clientX,
                            a = void 0 === n.props.minLength ? 0 : n.props.minLength,
                            i = void 0 === n.props.maxLength ? n.props.maxOffset - n.props.minOffset : n.props.maxLength,
                            r = void 0 === n.props.sliderMin ? 0 : n.props.sliderMin;
                        n.setState(function(e, s) {
                            return {
                                startOffset: n.calculateOffset(t, {
                                    startBoundary: Math.max(s.minOffset, e.endOffset - i, r),
                                    endBoundary: Math.min(e.endOffset, e.endOffset - a),
                                    currentValue: e.startOffset
                                }),
                                endOffset: e.endOffset
                            }
                        }, function() {
                            n.props.onLeftDrag && n.props.onLeftDrag({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            })
                        })
                    }, n.rightHandleRefHandler = function(e) {
                        n.rightHandleRef = e
                    }, n.onRightMouseDown = function(e) {
                        if (n.shouldHandleClick(e.button)) {
                            var t = e.clientX;
                            n.setState(function(e) {
                                return {
                                    previousPosition: t,
                                    previousBaseValue: e.endOffset
                                }
                            }, function() {
                                n.props.onRightDragStart && n.props.onRightDragStart({
                                    startOffset: n.state.startOffset,
                                    endOffset: n.state.endOffset
                                }), n.addHandleListeners(i.RightHandle)
                            })
                        }
                    }, n.onRightMouseUp = function() {
                        n.setState({
                            previousPosition: null,
                            previousBaseValue: null
                        }, function() {
                            n.props.onRightDragEnd && n.props.onRightDragEnd({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            }), n.removeHandleListeners(i.RightHandle)
                        })
                    }, n.onRightMouseMove = function(e) {
                        var t = e.clientX,
                            a = void 0 === n.props.minLength ? 0 : n.props.minLength,
                            i = void 0 === n.props.maxLength ? n.props.maxOffset - n.props.minOffset : n.props.maxLength,
                            r = void 0 === n.props.sliderMax ? n.props.maxOffset : n.props.sliderMax;
                        n.setState(function(e, s) {
                            return {
                                startOffset: e.startOffset,
                                endOffset: n.calculateOffset(t, {
                                    startBoundary: Math.max(s.minOffset, e.startOffset + a),
                                    endBoundary: Math.min(s.maxOffset, e.startOffset + i, r),
                                    currentValue: e.endOffset
                                })
                            }
                        }, function() {
                            n.props.onRightDrag && n.props.onRightDrag({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            })
                        })
                    }, n.sliderHandleRefHandler = function(e) {
                        n.sliderHandleRef = e
                    }, n.onSliderMouseDown = function(e) {
                        if (n.shouldHandleClick(e.button)) {
                            var t = e.clientX;
                            n.setState(function(e) {
                                return {
                                    previousPosition: t,
                                    previousBaseValue: e.startOffset
                                }
                            }, function() {
                                n.props.onSliderDragStart && n.props.onSliderDragStart({
                                    startOffset: n.state.startOffset,
                                    endOffset: n.state.endOffset
                                }), n.addHandleListeners(i.Slider)
                            })
                        }
                    }, n.onSliderMouseUp = function() {
                        n.setState({
                            previousPosition: null,
                            previousBaseValue: null
                        }, function() {
                            n.props.onSliderDragEnd && n.props.onSliderDragEnd({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            }), n.removeHandleListeners(i.Slider)
                        })
                    }, n.onSliderMouseMove = function(e) {
                        var t = e.clientX;
                        n.setState(function(e, a) {
                            var i = e.endOffset - e.startOffset,
                                r = n.calculateOffset(t, {
                                    startBoundary: a.minOffset,
                                    endBoundary: a.maxOffset - i,
                                    currentValue: e.startOffset
                                });
                            return {
                                startOffset: r,
                                endOffset: r + i
                            }
                        }, function() {
                            n.props.onSliderDrag && n.props.onSliderDrag({
                                startOffset: n.state.startOffset,
                                endOffset: n.state.endOffset
                            })
                        })
                    }, n.calculateOffset = function(e, t) {
                        if (null === n.state.previousPosition || null === n.state.previousBaseValue) return t.currentValue;
                        var a = n.convertPixelsToOffsetUnits(e - n.state.previousPosition),
                            i = n.state.previousBaseValue + a;
                        return i < t.startBoundary ? t.startBoundary : i > t.endBoundary ? t.endBoundary : i
                    }, n.convertPixelsToOffsetUnits = function(e) {
                        return n.containerRef ? 0 === n.containerRef.clientWidth ? 0 : e * ((n.props.maxOffset - n.props.minOffset) / n.containerRef.clientWidth) : 0
                    }, n.addFocus = function() {
                        n.setState({
                            showFocus: !0
                        })
                    }, n.removeFocus = function() {
                        n.setState({
                            showFocus: !1
                        })
                    }, n.preventUserSelect = function() {
                        document.body.style.userSelect = "none"
                    }, n.allowUserSelect = function() {
                        document.body.style.userSelect = "auto"
                    }, n.handleContainerRef = function(e) {
                        n.containerRef = e
                    }, n.state = {
                        startOffset: t.startOffset,
                        endOffset: t.endOffset,
                        previousBaseValue: null,
                        previousPosition: null,
                        showFocus: !1
                    }, n
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.startOffset === this.state.startOffset && e.endOffset === this.state.endOffset || this.setState({
                        startOffset: e.startOffset,
                        endOffset: e.endOffset
                    })
                }, t.prototype.render = function() {
                    var e = function(e) {
                            var t = e.maxOffset - e.minOffset,
                                n = (e.endOffset - e.startOffset) / t * 100,
                                a = e.startOffset / t * 100;
                            return {
                                width: "calc(" + n + "% + " + 2 * e.handleSize + "px)",
                                marginLeft: "calc(" + a + "% - " + e.handleSize + "px)"
                            }
                        }({
                            handleSize: this.props.handleSize ? this.props.handleSize : c.c.Small,
                            minOffset: this.props.minOffset,
                            maxOffset: this.props.maxOffset,
                            startOffset: this.state.startOffset,
                            endOffset: this.state.endOffset
                        }),
                        t = o("draggable-slider__wrapper", {
                            "draggable-slider__wrapper--transition": this.props.showTransition
                        }),
                        n = o("draggable-slider__content", {
                            "draggable-slider__content--blue": this.props.color === r.a.Blue,
                            "draggable-slider__content--orange": this.props.color === r.a.Orange,
                            "draggable-slider__content--focus": this.props.isSliderEnabled && this.state.showFocus
                        });
                    return l.createElement("div", {
                        ref: this.handleContainerRef
                    }, l.createElement(u.Qa, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement("div", {
                        className: t,
                        "data-test-selector": a.SelectedSection,
                        style: e
                    }, l.createElement(u.Ya, {
                        className: "draggable-slider__container",
                        position: u.kb.Relative,
                        display: u.X.Flex,
                        justifyContent: u.Xa.Center
                    }, l.createElement(u.Ya, {
                        position: u.kb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, l.createElement(u.Ya, {
                        position: u.kb.Relative,
                        attachTop: !0,
                        fullWidth: !0,
                        display: u.X.Flex,
                        justifyContent: u.Xa.Center
                    }, l.createElement(u.Ya, {
                        position: u.kb.Absolute,
                        attachBottom: !0,
                        margin: {
                            bottom: 1
                        },
                        zIndex: u.jc.Above
                    }, this.props.popover))), l.createElement(u.Fb, {
                        className: n,
                        fullWidth: !0,
                        display: u.X.Flex,
                        justifyContent: u.Xa.Between
                    }, l.createElement(c.a, {
                        "data-test-selector": a.LeftHandle,
                        color: this.props.color,
                        handlePosition: c.b.Left,
                        onRef: this.leftHandleRefHandler,
                        onMouseDown: this.onLeftMouseDown,
                        size: this.props.handleSize
                    }), this.renderSliderContent(), l.createElement(c.a, {
                        "data-test-selector": a.RightHandle,
                        color: this.props.color,
                        handlePosition: c.b.Right,
                        onRef: this.rightHandleRefHandler,
                        onMouseDown: this.onRightMouseDown,
                        size: this.props.handleSize
                    }))))))
                }, t.prototype.renderSliderContent = function() {
                    var e = this.props.children;
                    this.props.isSliderEnabled && (e = l.createElement("div", {
                        onMouseDown: this.onSliderMouseDown,
                        onMouseEnter: this.addFocus,
                        onMouseLeave: this.removeFocus,
                        ref: this.sliderHandleRefHandler,
                        "data-test-selector": a.Slider
                    }, this.props.children));
                    var t = o("draggable-slider__overlay", {
                        "draggable-slider__overlay--sliding-enabled": this.props.isSliderEnabled,
                        "draggable-slider__overlay--blue": this.props.color === r.a.Blue,
                        "draggable-slider__overlay--orange": this.props.color === r.a.Orange
                    });
                    return l.createElement(u.Ya, {
                        className: t,
                        display: u.X.InlineBlock,
                        overflow: u.db.Hidden,
                        "data-test-selector": a.Overlay,
                        fullWidth: !0
                    }, e)
                }, t.prototype.shouldHandleClick = function(e) {
                    return e === d.a.Left
                }, t
            }(l.Component);
            n.d(t, "c", function() {
                return r.a
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, !1, function() {}), n.d(t, "b", function() {
                return c.c
            })
        },
        m3Yj: function(e, t, n) {},
        meYm: function(e, t, n) {},
        mzKw: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return c
            });
            var a, i, r, s = n("TSYQ"),
                o = n("q1tI"),
                l = n("6FuP"),
                d = n("Ue10");
            n("dW6f");
            ! function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(a || (a = {})),
            function(e) {
                e[e.Handle = 0] = "Handle"
            }(i || (i = {})),
            function(e) {
                e[e.Small = 15] = "Small", e[e.Medium = 25] = "Medium"
            }(r || (r = {}));
            var c = function(e) {
                var t = s("draggable-slider-handle", {
                    "draggable-slider-handle--left": e.handlePosition === a.Left,
                    "draggable-slider-handle--right": e.handlePosition === a.Right,
                    "draggable-slider-handle--blue": e.color === l.a.Blue,
                    "draggable-slider-handle--orange": e.color === l.a.Orange
                });
                return o.createElement(d.Qa, {
                    flexGrow: 0,
                    flexShrink: 0,
                    className: t,
                    display: d.X.Flex,
                    fullHeight: !0
                }, o.createElement("div", {
                    "data-test-selector": i.Handle,
                    onMouseDown: e.onMouseDown,
                    ref: e.onRef
                }, o.createElement(d.tb, {
                    asset: d.ub.DragHandle,
                    width: e.size
                })))
            }
        },
        nT7z: function(e, t, n) {},
        nt5g: function(e, t) {
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
        o4ss: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "HighlighterVODSelector_SearchCreatorVideos"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "creatorLogin"
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
                                value: "after"
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
                                value: "search"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "VideoConnectionSearchParams"
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
                                    value: "login"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "creatorLogin"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "searchVideos"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "20"
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
                                                value: "after"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "search"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "search"
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
                                                                value: "lengthSeconds"
                                                            },
                                                            arguments: [],
                                                            directives: []
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
                                                                    value: "160"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "90"
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
                                                                value: "broadcastType"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 369
                }
            };
            n.loc.source = {
                body: "query HighlighterVODSelector_SearchCreatorVideos($creatorLogin: String! $after: Cursor $search: VideoConnectionSearchParams) {\nuser(login: $creatorLogin) {\nid\nlogin\nsearchVideos(first: 20 after: $after search: $search) {\nedges {\ncursor\nnode {\nid\nlengthSeconds\npreviewThumbnailURL(width: 160 height: 90)\npublishedAt\ntitle\nbroadcastType\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        pZqW: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "HighlighterEditors"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "includeEditors"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                        value: "channelID"
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
                                        value: "editors"
                                    },
                                    arguments: [],
                                    directives: [{
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "include"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "if"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "includeEditors"
                                                }
                                            }
                                        }]
                                    }],
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
                    end: 163
                }
            };
            n.loc.source = {
                body: "query HighlighterEditors($channelID: ID! $includeEditors: Boolean!) {\nuser(id: $channelID) {\nid\neditors @include(if: $includeEditors) {\nedges {\nnode {\nid\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        q4CU: function(e, t, n) {},
        rxTZ: function(e, t, n) {},
        tK6h: function(e, t, n) {},
        uy8m: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.Left = 0] = "Left", e[e.Middle = 1] = "Middle", e[e.Right = 2] = "Right", e[e.Back = 3] = "Back", e[e.Forward = 4] = "Forward"
                }(a || (a = {}))
        },
        "y8/E": function(e, t) {},
        z3cX: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var a, i = n("q1tI"),
                r = n("/7QA"),
                s = n("hyVY"),
                o = n("Ue10");
            ! function(e) {
                e[e.Metadata = 0] = "Metadata", e[e.Overlay = 1] = "Overlay"
            }(a || (a = {}));
            var l = function(e) {
                    var t, n = Object(s.b)(e.video.lengthSeconds);
                    return t = e.video.publishedAt ? i.createElement(o.W, {
                        fontSize: o.Ca.Size7
                    }, Object(r.c)(new Date(e.video.publishedAt), "medium"), i.createElement("span", null, " · "), n) : i.createElement(o.W, {
                        fontSize: o.Ca.Size7
                    }, n), i.createElement(o.Ya, {
                        alignItems: o.f.Stretch,
                        display: o.X.Flex,
                        flexDirection: o.Aa.Row,
                        flexGrow: 1,
                        padding: .5
                    }, i.createElement(o.Ya, {
                        flexGrow: 0,
                        flexShrink: 0,
                        position: o.kb.Relative
                    }, i.createElement(o.I, {
                        alt: e.video.title,
                        aspect: o.p.Aspect16x9,
                        size: o.J.Size8,
                        src: e.video.previewThumbnailURL
                    }), d(e.selected)), i.createElement(o.Ya, {
                        alignItems: o.f.Start,
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column,
                        flexGrow: 1,
                        flexShrink: 1,
                        justifyContent: o.Xa.Center,
                        padding: {
                            x: 1
                        },
                        overflow: o.db.Hidden
                    }, i.createElement(o.Ya, {
                        fullWidth: !0,
                        overflow: o.db.Hidden
                    }, i.createElement(o.W, {
                        type: o.Wb.H3,
                        fontSize: o.Ca.Size6,
                        title: e.video.title,
                        ellipsis: !0
                    }, e.video.title)), i.createElement("div", {
                        "data-test-selector": a.Metadata
                    }, t)))
                },
                d = function(e) {
                    return e ? i.createElement(o.Fb, {
                        background: o.r.Overlay,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        position: o.kb.Absolute,
                        alignItems: o.f.Center,
                        "data-test-selector": a.Overlay,
                        display: o.X.Flex,
                        flexDirection: o.Aa.Column,
                        justifyContent: o.Xa.Center
                    }, i.createElement(o.tb, {
                        asset: o.ub.Check
                    })) : null
                }
        },
        zAC8: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Highlighter_CreateHighlights"
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
                                    value: "CreateVideoHighlightInput"
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
                                value: "createVideoHighlight"
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
                                        value: "highlight"
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
                                                value: "lengthSeconds"
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
                    end: 154
                }
            };
            n.loc.source = {
                body: "mutation Highlighter_CreateHighlights($input: CreateVideoHighlightInput!) {\ncreateVideoHighlight(input: $input) {\nhighlight {\nid\ntitle\nlengthSeconds\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        }
    }
]);