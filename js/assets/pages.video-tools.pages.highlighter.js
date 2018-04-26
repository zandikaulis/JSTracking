webpackJsonp([97], {
    "/1dg": function(e, t, n) {
        "use strict";
        var r, i = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            s = n("qLt5"),
            l = n("Odds"),
            d = ",",
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        var n = [],
                            r = e.currentTarget.value;
                        r && (n = r.split(d)), t.props.onChange(n)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(l.W, {
                        id: "video-tags",
                        label: Object(o.d)("Tags", "VideoManagerEdit")
                    }, a.createElement(l._4, {
                        disabled: this.props.disabled,
                        value: this.props.tags.join(d),
                        type: l._5.Text,
                        onChange: this.onChange,
                        name: "tags",
                        placeholder: Object(o.d)("speedrun", "VideoManagerEdit") + ", " + Object(o.d)("2016", "VideoManagerEdit") + ", " + Object(o.d)("kappa", "VideoManagerEdit") + "..."
                    }))
                }, t
            }(a.PureComponent);
        ! function(e) {
            e[e.FormGroup = 0] = "FormGroup", e[e.Input = 1] = "Input"
        }(r || (r = {}));
        var u, p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onInputChange = function(e) {
                        t.props.onChange(e.currentTarget.value)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Object(o.d)("{currentLength} of {maxLength} characters.", {
                            currentLength: this.props.title.length.toString(),
                            maxLength: 140..toString()
                        }, "TitleEditor"),
                        t = "";
                    return this.props.error ? t = this.props.error : "" === this.props.title && (t = Object(o.d)("A title is required.", "TitleEditor")), a.createElement(l.W, {
                        "data-test-selector": r.FormGroup,
                        hint: e,
                        label: Object(o.d)("Title", "VideoManagerEdit"),
                        error: !!t,
                        errorMessage: t
                    }, a.createElement(l._4, {
                        "data-test-selector": r.Input,
                        disabled: this.props.disabled,
                        maxLength: 140,
                        onChange: this.onInputChange,
                        required: !0,
                        type: l._5.Text,
                        value: this.props.title
                    }))
                }, t
            }(a.Component),
            f = n("uTyw"),
            m = n("HW6M"),
            h = n("rCmJ"),
            g = n("zCIC"),
            v = n("6BvN"),
            S = n("7Nlu"),
            b = (n("12gq"), function(e) {
                return a.createElement(l._8, {
                    attachTop: !0,
                    attachRight: !0,
                    attachLeft: !0,
                    attachBottom: !0,
                    fullHeight: !0,
                    fullWidth: !0,
                    display: l.R.Flex,
                    flexDirection: l.T.Column,
                    justifyContent: l._7.Center,
                    alignItems: l.c.Center,
                    position: l._15.Absolute
                }, a.createElement(l._8, {
                    textAlign: l._42.Center,
                    flexShrink: 1
                }, a.createElement(l._22, {
                    asset: e.icon,
                    width: 46,
                    height: 48,
                    type: l._24.Alt2
                })), a.createElement(l._8, {
                    margin: {
                        top: 1
                    },
                    textAlign: l._42.Center
                }, a.createElement(l.Q, {
                    type: l._46.H4,
                    color: l.K.Alt2
                }, e.titleText)), a.createElement(l._8, {
                    textAlign: l._42.Center
                }, a.createElement(l.Q, {
                    type: l._46.P,
                    color: l.K.Alt2
                }, e.subText)))
            });
        ! function(e) {
            e[e.Confirm = 1] = "Confirm", e[e.Dismiss = 2] = "Dismiss", e[e.Up = 3] = "Up", e[e.Down = 4] = "Down"
        }(u || (u = {}));
        var k = {};
        k[v.a.Esc] = u.Dismiss, k[v.a.Enter] = u.Confirm, k[v.a.Tab] = u.Confirm, k[v.a.Up] = u.Up, k[v.a.Down] = u.Down;
        var y, O = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onFocus = function() {
                        n.props.searchTerm && n.setState({
                            isOpen: !0
                        })
                    }, n.onClickOut = function() {
                        n.state.isOpen && n.handleInteraction(u.Dismiss)
                    }, n.onKeyDown = function(e) {
                        var t = k[e.keyCode];
                        t && n.handleInteraction(t)
                    }, n.handleInteraction = function(e) {
                        switch (e) {
                            case u.Dismiss:
                                "" === n.props.searchTerm ? n.props.selectEmptyGame() : n.props.initialGameTitle ? n.props.selectGameByName(n.props.initialGameTitle) : n.props.gameResults && n.props.gameResults.length > 0 && n.props.selectGame(n.state.highlightedGameIndex), n.setState({
                                    isOpen: !1
                                });
                                break;
                            case u.Confirm:
                                n.props.searchTerm && n.props.gameResults ? n.props.selectGame(n.state.highlightedGameIndex) : n.props.selectEmptyGame(), n.setState({
                                    isOpen: !1
                                });
                                break;
                            case u.Up:
                                if (!n.props.gameResults) return;
                                n.setState({
                                    highlightedGameIndex: Math.max(0, n.state.highlightedGameIndex - 1)
                                });
                                break;
                            case u.Down:
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
                    return a.createElement("div", {
                        className: "game-selector__search-container",
                        "data-click-out-id": "game-selector-search-balloon",
                        onKeyDown: this.onKeyDown
                    }, a.createElement(h.a, {
                        onClickOut: this.onClickOut
                    }, a.createElement(l._4, {
                        key: this.props.initialGameTitle + "-" + this.props.redrawKey,
                        type: l._5.Text,
                        icon: l._23.NavGames,
                        name: "game",
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        defaultValue: this.props.searchTerm,
                        placeholder: Object(o.d)("Type to search and add games", "VideoManagerEdit")
                    }), a.createElement(l.q, {
                        direction: l.r.Bottom,
                        noTail: !0,
                        size: l.s.Large,
                        show: this.state.isOpen,
                        offsetY: "5px",
                        "data-a-target": "game-selector-search-balloon"
                    }, this.renderSearchResult())))
                }, t.prototype.renderSearchResult = function() {
                    var e = m("game-selector__search-panel", {
                            "game-selector__search-panel--closed": !this.state.isOpen
                        }),
                        t = null;
                    return 0 === this.props.searchTerm.length || (t = this.props.gameResults ? this.props.gameResults.length > 0 ? this.renderGameResults(this.props.gameResults, this.state.highlightedGameIndex) : this.props.isSearchPending ? a.createElement(l._10, {
                        fillContent: !0
                    }) : a.createElement(b, {
                        icon: l._23.SearchNoResults,
                        titleText: Object(o.d)("No results found", "GameSelector"),
                        subText: Object(o.d)("They're probably in another castle", "GameSelector")
                    }) : a.createElement(b, {
                        icon: l._23.DeadGlitch,
                        titleText: Object(o.d)("Search is not available at this time", "GameSelector"),
                        subText: Object(o.d)("Please try again later", "GameSelector")
                    })), a.createElement("div", {
                        className: e,
                        tabIndex: 0
                    }, a.createElement(l._32, {
                        attachTop: !0,
                        attachRight: !0,
                        attachLeft: !0,
                        attachBottom: !0,
                        background: l.n.Base,
                        position: l._15.Absolute,
                        overflow: l._11.Hidden,
                        display: l.R.Block
                    }, a.createElement(g.b, {
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, a.createElement(l._8, {
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    }, t, a.createElement(g.a, {
                        enabled: this.state.isOpen,
                        loadMore: this.props.triggerLoadMore,
                        pixelThreshold: 50
                    })))))
                }, t.prototype.renderGameResults = function(e, t) {
                    var n = this;
                    return e.map(function(e, r, i) {
                        var o = i[t] === i[r];
                        return a.createElement(S.a, {
                            id: "game_" + e.title,
                            key: "game_" + e.title,
                            imageAlt: e.thumbnailAltText,
                            onClick: n.onClickGame,
                            title: e.title ? e.title : "",
                            hover: o,
                            "data-game-highlighted": o,
                            "data-game-index": r
                        })
                    })
                }, t
            }(a.Component),
            _ = n("5LoI"),
            C = n("MAZT"),
            E = 10,
            x = function() {
                return function() {
                    var e = this;
                    this.searchCode = function(t, n) {
                        return i.__awaiter(e, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.searchClient.queryForType(_.a.Games, t, t, {
                                            hitsPerPage: E,
                                            page: n
                                        })];
                                    case 1:
                                        return [2, r.sent()];
                                    case 2:
                                        throw e = r.sent(), o.j.error(e, "Algolia type results search failed"), e;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, this.searchClient = new C.a({
                        appId: o.a.algoliaApplicationID,
                        apiKey: o.a.algoliaAPIKey,
                        apolloClient: o.o.apollo.client,
                        logger: o.j,
                        config: o.a
                    })
                }
            }(),
            w = [],
            T = {
                objectID: "",
                name: ""
            },
            D = function(e) {
                return {
                    objectID: "",
                    name: e
                }
            },
            V = function(e) {
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
                                var r = void 0;
                                n.state.gameResults && (r = {
                                    totalHits: n.state.gameResults.length,
                                    results: n.state.gameResults
                                });
                                var i = Object(f.b)({
                                    searchResults: e,
                                    append: n.state.nextAlgoliaPage > 0,
                                    currentGameResults: r
                                }).currentGameResults;
                                t = i ? i.results : w
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
                                var r = {
                                    objectID: t.id,
                                    name: t.title
                                };
                                n.setselectedGametate(r)
                            } else n.selectEmptyGame()
                        } else n.selectEmptyGame()
                    }, n.selectGameByName = function(e) {
                        n.setselectedGametate(D(e))
                    }, n.selectEmptyGame = function() {
                        n.setselectedGametate(T)
                    }, n.setselectedGametate = function(e) {
                        n.setState({
                            selectedGame: e,
                            searchTerm: e.name,
                            redrawKey: Math.random()
                        }, n.fireChangeGame)
                    }, n.fireChangeGame = function() {
                        n.props.onChange(n.state.selectedGame)
                    }, n.searchClient = new x, n.state = n.state = {
                        searchTerm: t.currentGameTitle,
                        gameResults: w,
                        isSearchPending: !1,
                        nextAlgoliaPage: 0,
                        selectedGame: D(t.currentGameTitle),
                        redrawKey: Math.random()
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.startNewSearch(this.props.currentGameTitle)
                }, t.prototype.render = function() {
                    return this.props.disabled ? a.createElement("div", {
                        className: "game-selector__search-container"
                    }, a.createElement(l._4, {
                        value: this.props.currentGameTitle,
                        type: l._5.Text,
                        icon: l._23.NavGames,
                        disabled: !0
                    })) : a.createElement(O, {
                        redrawKey: this.state.redrawKey,
                        searchTerm: this.state.searchTerm,
                        initialGameTitle: this.state.selectedGame.name,
                        gameResults: this.state.gameResults,
                        isSearchPending: this.state.isSearchPending,
                        startNewSearch: this.startNewSearch,
                        selectGame: this.selectGame,
                        selectEmptyGame: this.selectEmptyGame,
                        selectGameByName: this.selectGameByName,
                        triggerLoadMore: this.triggerLoadMore
                    })
                }, t
            }(a.Component),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onGameSelect = function(e) {
                        var n = null;
                        "" !== e.objectID && (n = {
                            id: e.objectID,
                            name: e.name
                        }), t.props.onChange(n)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(l.W, {
                        id: "video-game",
                        label: Object(o.d)("Category / Game", "VideoManagerEdit")
                    }, a.createElement(V, {
                        onChange: this.onGameSelect,
                        disabled: this.props.disabled,
                        currentGameTitle: this.props.game ? this.props.game.name : ""
                    }))
                }, t
            }(a.PureComponent);
        n.d(t, "a", function() {
                return H
            }),
            function(e) {
                e[e.EditDescription = 0] = "EditDescription"
            }(y || (y = {}));
        var H = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.onDescriptionChangeHandler = function(e) {
                    t.props.onChange(i.__assign({}, t.props.video, {
                        description: e.currentTarget.value
                    }))
                }, t.onGameChangeHandler = function(e) {
                    t.props.onChange(i.__assign({}, t.props.video, {
                        game: e
                    }))
                }, t.onLanguageChangeHandler = function(e) {
                    t.props.onChange(i.__assign({}, t.props.video, {
                        language: e
                    }))
                }, t.onTagsChangeHandler = function(e) {
                    t.props.onChange(i.__assign({}, t.props.video, {
                        tags: e
                    }))
                }, t.onTitleChangeHandler = function(e) {
                    t.props.onChange(i.__assign({}, t.props.video, {
                        title: e
                    }))
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.video,
                    n = e.disabled;
                return a.createElement(l._8, {
                    display: l.R.Flex,
                    flexDirection: l.T.Column
                }, a.createElement(l._8, {
                    margin: {
                        bottom: 2
                    },
                    flexGrow: 1
                }, a.createElement(p, {
                    disabled: n,
                    error: this.props.titleError,
                    onChange: this.onTitleChangeHandler,
                    title: t.title
                })), a.createElement(l._8, {
                    margin: {
                        bottom: 2
                    },
                    flexGrow: 1,
                    position: l._15.Relative
                }, a.createElement(l.W, {
                    label: Object(o.d)("Description", "VideoManagerEdit")
                }, a.createElement(l._43, {
                    "data-test-selector": y.EditDescription,
                    disabled: n,
                    onChange: this.onDescriptionChangeHandler,
                    placeholder: Object(o.d)("Describe your video", "VideoManagerEdit"),
                    rows: 6,
                    value: t.description
                })), a.createElement(l._8, {
                    position: l._15.Absolute,
                    attachTop: !0,
                    attachRight: !0
                }, Object(o.d)("Supports <x:link>Markdown</x:link> (No HTML)", {
                    "x:link": function(e) {
                        return a.createElement(l.O, {
                            key: "markdown-link",
                            to: "https://help.twitch.tv/customer/portal/articles/839490-markdown-basics",
                            targetBlank: !0
                        }, e)
                    }
                }, "VideoManagerEdit"))), a.createElement(l._8, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(s.a, {
                    defaultLanguage: t.language,
                    disabled: n,
                    label: Object(o.d)("Language", "VideoManagerEdit"),
                    onChange: this.onLanguageChangeHandler
                })), a.createElement(l._8, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(R, {
                    disabled: n,
                    game: t.game,
                    onChange: this.onGameChangeHandler
                })), a.createElement(c, {
                    disabled: n,
                    onChange: this.onTagsChangeHandler,
                    tags: t.tags
                }))
            }, t
        }(a.Component)
    },
    "09xK": function(e, t, n) {
        "use strict";
        var r, i = n("TToO"),
            a = n("GiK3"),
            o = n("CIox"),
            s = n("NY9D"),
            l = n("6sO2"),
            d = n("yWCw"),
            c = n("Snvs"),
            u = n("3zLD"),
            p = n("zCIC"),
            f = n("7vx8"),
            m = n("j7/Y"),
            h = n("6WAQ"),
            g = n("mi6k"),
            v = n("w9tK"),
            S = n("vH/s"),
            b = n("CSlQ"),
            k = n("fc0G"),
            y = function(e) {
                return a.createElement(k.c, {
                    vodID: e.videoID,
                    disableTheatreButton: !0,
                    playerTypeOverride: k.b.Highlighter,
                    paused: e.paused,
                    nextVideoOffset: e.nextVideoOffset,
                    onVideoTimeChange: e.onVideoTimeChange,
                    onPauseToggled: e.onPauseToggled
                })
            },
            O = n("RH2O"),
            _ = n("V5M+"),
            C = n("+8VM"),
            E = n("oIkB"),
            x = n("d0Y8"),
            w = n("Odds"),
            T = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e;
                    if (this.props.offsets) {
                        var t = this.props.offsets;
                        e = Object(g.b)(this.props.lengthSeconds) + " (" + Object(g.b)(t.startOffsetSeconds) + " - " + Object(g.b)(t.endOffsetSeconds) + ")"
                    } else e = Object(g.b)(this.props.lengthSeconds);
                    return a.createElement(w._32, {
                        ellipsis: !0
                    }, a.createElement(w.Q, {
                        ellipsis: !0,
                        "data-test-selector": r.Title,
                        fontSize: w.V.Size6,
                        title: this.props.title
                    }, this.props.title || "<" + Object(l.d)("Untitled", "VideoSegment") + ">"), a.createElement(w._8, {
                        display: w.R.Flex,
                        alignItems: w.c.Center
                    }, a.createElement(w._22, {
                        asset: w._23.GlyphLength,
                        height: 12,
                        width: 12
                    }), " ", a.createElement(w.Q, {
                        "data-test-selector": r.Duration,
                        type: w._46.Span,
                        fontSize: w.V.Size7
                    }, e)))
                }, t
            }(a.Component);
        n("bJlE");
        ! function(e) {
            e[e.Duration = 0] = "Duration", e[e.ErrorIcon = 1] = "ErrorIcon", e[e.Index = 2] = "Index", e[e.Game = 3] = "Game", e[e.Title = 4] = "Title"
        }(r || (r = {}));
        var D, V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return this.props.error && (e = a.createElement(w._22, {
                        asset: w._23.Warning,
                        "data-test-selector": r.ErrorIcon,
                        height: 28,
                        type: w._24.Live,
                        width: 28
                    })), a.createElement(w._8, {
                        alignItems: w.c.Stretch,
                        display: w.R.Flex,
                        fullWidth: !0,
                        flexDirection: w.T.Row,
                        padding: 1
                    }, a.createElement(w._8, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(w._32, {
                        alignItems: w.c.Center,
                        background: w.n.AccentAlt2,
                        className: "video-segment__item-index",
                        display: w.R.Flex,
                        fullHeight: !0,
                        justifyContent: w._7.Center
                    }, a.createElement(w.Q, {
                        color: w.K.Overlay,
                        "data-test-selector": r.Index,
                        fontSize: w.V.Size4,
                        type: w._46.H4
                    }, "" + (this.props.listIndex + 1)))), a.createElement(w._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        padding: {
                            left: 1
                        },
                        ellipsis: !0
                    }, a.createElement(T, {
                        lengthSeconds: this.props.lengthSeconds,
                        offsets: this.props.offsets,
                        title: this.props.title
                    })), e)
                }, t
            }(a.Component),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.segments.map(function(t, n) {
                            return a.createElement(w._6, {
                                alert: !!t.error,
                                blurAfterClick: !0,
                                disabled: e.props.disabled,
                                key: n,
                                onClick: function() {
                                    e.props.onSegmentSelect(n)
                                },
                                selected: n === e.props.selectedSegmentIndex
                            }, a.createElement(w._8, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, a.createElement(V, {
                                lengthSeconds: t.endOffsetSeconds - t.startOffsetSeconds,
                                listIndex: n,
                                offsets: {
                                    startOffsetSeconds: t.startOffsetSeconds,
                                    endOffsetSeconds: t.endOffsetSeconds
                                },
                                title: t.metadata.title
                            })))
                        });
                    return a.createElement(p.b, {
                        suppressScrollX: !0
                    }, a.createElement("div", null, t))
                }, t
            }(a.Component);
        ! function(e) {
            e[e.CreateButton = 0] = "CreateButton", e[e.SaveError = 1] = "SaveError"
        }(D || (D = {}));
        var H, L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedSegmentIndex: 0
                    }, t.onSegmentSelect = function(e) {
                        t.setState({
                            selectedSegmentIndex: e
                        })
                    }, t.onSegmentVideoFieldChange = function(e) {
                        var n = i.__assign({}, t.selectedSegment(), {
                            metadata: e
                        });
                        t.props.onSegmentUpdate(n, t.state.selectedSegmentIndex)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(w._8, {
                        alignItems: w.c.Stretch,
                        display: w.R.Flex,
                        flexDirection: w.T.Row,
                        fullHeight: !0,
                        fullWidth: !0
                    }, this.renderLeftColumn(), this.renderRightColumn())
                }, t.prototype.renderLeftColumn = function() {
                    var e = -1 !== this.props.segments.findIndex(function(e) {
                            return !!e.error
                        }),
                        t = null;
                    return this.props.saveError && (t = a.createElement(w.e, {
                        delay: w.f.Short,
                        type: w.j.BounceIn,
                        enabled: !0
                    }, a.createElement(w._32, {
                        background: w.n.Base,
                        border: !0,
                        color: w.K.Error,
                        margin: {
                            bottom: 1
                        },
                        padding: 1
                    }, a.createElement(w.Q, {
                        color: w.K.Error,
                        "data-test-selector": D.SaveError
                    }, this.props.saveError)))), a.createElement(w._32, {
                        border: !0,
                        className: "highlight-creator-modal__left-column",
                        display: w.R.Flex,
                        flexDirection: w.T.Column,
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(w._32, {
                        background: w.n.Alt2,
                        borderBottom: !0,
                        padding: 1,
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(w.Q, {
                        color: w.K.Alt2,
                        fontSize: w.V.Size4
                    }, Object(l.d)("Highlight Creator", "HighlightCreatorModal"))), a.createElement(w._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        position: w._15.Relative
                    }, a.createElement(w._8, {
                        position: w._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, a.createElement(R, {
                        onSegmentSelect: this.onSegmentSelect,
                        disabled: this.props.saving,
                        segments: this.props.segments,
                        selectedSegmentIndex: this.state.selectedSegmentIndex
                    }))), a.createElement(w._32, {
                        alignItems: w.c.Center,
                        background: w.n.Alt2,
                        borderTop: !0,
                        display: w.R.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(w._8, {
                        margin: 1,
                        fullWidth: !0
                    }, t, a.createElement(w.v, {
                        "data-test-selector": D.CreateButton,
                        disabled: this.props.saving || e,
                        onClick: this.props.onCreateRequest,
                        fullWidth: !0,
                        state: this.props.saving ? w.A.Loading : w.A.Default
                    }, Object(l.d)("Create Highlights", "HighlightCreatorModal")))))
                }, t.prototype.renderRightColumn = function() {
                    return a.createElement(w._8, {
                        padding: {
                            x: 3,
                            y: 2
                        },
                        flexGrow: 1,
                        flexShrink: 1
                    }, a.createElement(x.VideoFieldEditor, {
                        onChange: this.onSegmentVideoFieldChange,
                        disabled: this.props.saving,
                        video: this.selectedSegment().metadata
                    }))
                }, t.prototype.selectedSegment = function() {
                    return this.props.segments[this.state.selectedSegmentIndex]
                }, t
            }(a.Component),
            I = n("zAjo"),
            N = n("sJBK");
        n("zECu");
        ! function(e) {
            e[e.Highlight = 0] = "Highlight", e[e.VideoManagerLink = 1] = "VideoManagerLink"
        }(H || (H = {}));
        var j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.highlights.map(function(t, n) {
                            return a.createElement(w._32, {
                                alignItems: w.c.Center,
                                background: w.n.Base,
                                className: "save-success-highlight",
                                "data-test-selector": H.Highlight,
                                display: w.R.Flex,
                                elevation: 1,
                                flexGrow: 0,
                                flexShrink: 0,
                                fullWidth: !0,
                                justifyContent: w._7.Center,
                                key: n,
                                margin: {
                                    y: 1
                                },
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            }, a.createElement(w._8, {
                                flexGrow: 1,
                                flexShrink: 1,
                                ellipsis: !0
                            }, a.createElement(V, {
                                lengthSeconds: t.lengthSeconds,
                                listIndex: n,
                                title: t.title
                            })), a.createElement(w._8, {
                                flexGrow: 0,
                                flexShrink: 0,
                                padding: {
                                    left: 2
                                }
                            }, a.createElement(I.a, {
                                balloonDirection: w.r.RightCenter,
                                buttonType: w.B.Hollow,
                                content: {
                                    type: N.a.Video,
                                    id: t.id,
                                    owner: {
                                        id: e.props.owner.id,
                                        displayName: e.props.owner.displayName
                                    },
                                    title: t.title
                                },
                                tracking: {
                                    location: S.PageviewLocation.VideoManagerHighlighter
                                }
                            })))
                        });
                    return a.createElement(w._32, {
                        alignItems: w.c.Center,
                        background: w.n.Alt,
                        display: w.R.Flex,
                        flexDirection: w.T.Column,
                        fullHeight: !0,
                        fullWidth: !0,
                        justifyContent: w._7.Center,
                        padding: 3
                    }, a.createElement(w._8, {
                        alignItems: w.c.Center,
                        display: w.R.Flex,
                        flexDirection: w.T.Column,
                        flexGrow: 0,
                        flexShrink: 0,
                        fullWidth: !0,
                        justifyContent: w._7.End
                    }, a.createElement(w.Q, {
                        type: w._46.H3
                    }, Object(l.d)("Success!", "SaveSuccessOverview")), a.createElement(w._8, {
                        padding: {
                            top: 1
                        }
                    }, this.renderVideoManagerLink())), a.createElement(w._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        fullWidth: !0,
                        margin: {
                            x: 2,
                            top: 1
                        },
                        overflow: w._11.Hidden,
                        position: w._15.Relative
                    }, a.createElement(w._2, {
                        fullWidth: !0,
                        position: w._15.Absolute
                    }, a.createElement(p.b, {
                        autoHide: !1,
                        suppressScrollX: !0
                    }, a.createElement(w._8, {
                        alignItems: w.c.Center,
                        display: w.R.Flex,
                        flexDirection: w.T.Column,
                        justifyContent: w._7.Center,
                        padding: 5
                    }, t)))), a.createElement(w._8, {
                        flexGrow: 0,
                        flexShrink: 0,
                        padding: {
                            top: 1
                        }
                    }, a.createElement(w.v, {
                        onClick: this.props.onComplete
                    }, Object(l.d)("Continue editing", "SaveSuccessOverview"))))
                }, t.prototype.renderVideoManagerLink = function() {
                    var e = this;
                    return Object(l.d)("Visit the <x:link>Video Producer</x:link> to view the created highlight(s).", {
                        "x:link": function(t) {
                            return a.createElement(w.O, {
                                "data-test-selector": H.VideoManagerLink,
                                key: "video-manager-link",
                                onClick: e.props.onComplete,
                                to: {
                                    pathname: "/" + e.props.owner.login + "/manager",
                                    state: {
                                        content: S.PageviewContent.HighlighterSuccess,
                                        medium: S.PageviewMedium.VideoManagerHighlighter
                                    }
                                }
                            }, t)
                        }
                    }, "SaveSuccessOverview")
                }, t
            }(a.Component),
            F = n("H6Wp"),
            P = (n("cJkA"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.onSegmentUpdate = function(e, t) {
                        "" === e.metadata.title ? e.error = Object(l.d)("A highlight must have a title", "HighlightCreatorModal") : e.error = void 0, n.setState(function(n) {
                            var r = n.segmentsSnapshot.slice(0);
                            return r.splice(t, 1, e), {
                                segmentsSnapshot: r
                            }
                        })
                    }, n.onCancel = function() {
                        n.props.onCompletion(n.state.segmentsSnapshot)
                    }, n.onCreateHighlightsRequest = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var e = this;
                            return i.__generator(this, function(t) {
                                return this.setState({
                                    saveError: null,
                                    saving: !0
                                }, function() {
                                    return e.createHighlights()
                                }), [2]
                            })
                        })
                    };
                    var r = t.segments.map(function(e) {
                        return i.__assign({}, e, {
                            metadata: i.__assign({}, e.metadata, {
                                tags: e.metadata.tags.slice()
                            })
                        })
                    });
                    return n.state = {
                        saveError: null,
                        savedHighlights: [],
                        saving: !1,
                        segmentsSnapshot: r
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t = this;
                    if (this.state.savedHighlights.length > 0 && 0 === this.state.segmentsSnapshot.length) {
                        e = a.createElement(j, {
                            onComplete: function() {
                                t.props.onCompletion([])
                            },
                            owner: this.props.owner,
                            highlights: this.state.savedHighlights
                        })
                    } else e = a.createElement(L, {
                        onCreateRequest: this.onCreateHighlightsRequest,
                        onSegmentUpdate: this.onSegmentUpdate,
                        segments: this.state.segmentsSnapshot,
                        saving: this.state.saving,
                        saveError: this.state.saveError
                    });
                    return a.createElement(w.e, {
                        type: w.j.FadeIn,
                        delay: w.f.Medium,
                        duration: w.g.Medium,
                        enabled: !0
                    }, a.createElement(w._32, {
                        background: w.n.Base,
                        className: "highlight-creator-modal"
                    }, e), a.createElement(C.a, {
                        onClose: this.onCancel
                    }))
                }, t.prototype.createHighlights = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r, a, o, s, d = this;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = this.state.segmentsSnapshot.map(function(e, t) {
                                        return d.createHighlight(e, t)
                                    }), t = [], i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, Promise.all(e)];
                                case 2:
                                    return t = i.sent(), [3, 4];
                                case 3:
                                    return n = i.sent(), l.j.error(n, "Unexpected error creating highlights"), [3, 4];
                                case 4:
                                    return r = t.reduce(function(e, t) {
                                        return t.success && e.push(t.success), e
                                    }, []), a = t.sort(function(e, t) {
                                        return e.segmentsIndex - t.segmentsIndex
                                    }), o = a.reduce(function(e, t) {
                                        return t.success || e.push(t.segment), e
                                    }, []), s = null, o.length > 0 && (s = Object(l.d)("Some or all of your highlights have failed to save. These have been returned to your creation queue. Please try again.", "HighlightCreatorModalContainer")), this.setState({
                                        segmentsSnapshot: o,
                                        saving: !1,
                                        saveError: s,
                                        savedHighlights: r
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.createHighlight = function(e, t) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var n, r, a, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    n = {
                                        segmentsIndex: t,
                                        segment: e
                                    }, r = {
                                        sourceVideoID: e.sourceVideoID,
                                        startOffsetSeconds: e.startOffsetSeconds,
                                        endOffsetSeconds: e.endOffsetSeconds,
                                        metadata: {
                                            description: e.metadata.description,
                                            language: e.metadata.language,
                                            tags: e.metadata.tags,
                                            title: e.metadata.title
                                        }
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, this.props.createHighlight(Object(E.a)(r))];
                                case 2:
                                    return a = i.sent().data, n.success = a.createVideoHighlight.highlight, [3, 4];
                                case 3:
                                    return o = i.sent(), l.j.error(o, "HighlightCreatorModalContainer"), [3, 4];
                                case 4:
                                    return [2, n]
                            }
                        })
                    })
                }, t
            }(a.Component)),
            M = Object(f.a)(F, {
                name: "createHighlight"
            })(P);
        var G, B = Object(O.b)(null, function(e, t) {
            return {
                onCompletion: function(n) {
                    t.onCompletion(n), e(Object(_.c)())
                }
            }
        })(M);
        n("YBPv");
        ! function(e) {
            e[e.NoItems = 0] = "NoItems"
        }(G || (G = {}));
        var A = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.scrollableAreaRef = null, t.scrollRefHandler = function(e) {
                    t.scrollableAreaRef = e
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement(w._32, {
                    alignItems: w.c.Stretch,
                    background: w.n.Base,
                    borderRadius: w.t.Small,
                    border: !0,
                    display: w.R.Flex,
                    elevation: 2,
                    flexDirection: w.T.Column,
                    fullHeight: !0
                }, a.createElement(w._32, {
                    background: w.n.Alt,
                    borderBottom: !0,
                    padding: 1
                }, a.createElement(w.Q, {
                    fontSize: w.V.Size5
                }, Object(l.d)("Highlights", "VideoSegmentQueue"))), a.createElement(w._2, {
                    flexGrow: 1,
                    flexShrink: 1
                }, a.createElement(p.b, {
                    autoHide: !1,
                    suppressScrollX: !0,
                    scrollRef: this.scrollRefHandler
                }, a.createElement("div", null, this.renderSegments()))), a.createElement(w._32, {
                    padding: {
                        x: 1,
                        y: .5
                    }
                }, a.createElement(w.v, {
                    onClick: this.props.onSaveClick,
                    disabled: 0 === this.props.queue.length,
                    fullWidth: !0,
                    type: w.B.Hollow
                }, Object(l.d)("Save Highlights", "VideoSegmentQueue"))))
            }, t.prototype.componentDidUpdate = function(e) {
                this.props.queue.length > e.queue.length && this.scrollableAreaRef && this.scrollableAreaRef.scrollToBottom()
            }, t.prototype.renderSegments = function() {
                var e = this;
                return 0 === this.props.queue.length ? a.createElement(w._8, {
                    alignItems: w.c.Center,
                    "data-test-selector": G.NoItems,
                    display: w.R.Flex,
                    fullHeight: !0,
                    fullWidth: !0,
                    justifyContent: w._7.Center,
                    padding: 1
                }, a.createElement(w.Q, {
                    color: w.K.Alt2
                }, Object(l.d)("No highlights queued for export.", "VideoSegmentQueue"))) : this.props.queue.map(function(t, n) {
                    return a.createElement(w._32, {
                        className: "video-segment-queue__video-card",
                        alignItems: w.c.Center,
                        borderBottom: !0,
                        display: w.R.Flex,
                        flexDirection: w.T.Row,
                        key: n
                    }, a.createElement(w._8, {
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: w._11.Hidden
                    }, a.createElement(V, {
                        listIndex: n,
                        lengthSeconds: t.endOffsetSeconds - t.startOffsetSeconds,
                        offsets: {
                            startOffsetSeconds: t.startOffsetSeconds,
                            endOffsetSeconds: t.endOffsetSeconds
                        },
                        title: t.metadata.title
                    })), a.createElement(w._8, {
                        className: "video-segment-queue__delete-button",
                        flexGrow: 0,
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(w.w, {
                        ariaLabel: Object(l.d)("Remove highlight from queue", "VideoSegmentQueue"),
                        icon: w._23.Trash,
                        onClick: function() {
                            e.props.onSegmentDelete(n)
                        },
                        size: w.x.Small,
                        type: w.y.Secondary
                    })))
                })
            }, t
        }(a.Component);
        var U, q = Object(O.b)(null, function(e, t) {
                return {
                    onSaveClick: function() {
                        t.onSaveClick(), e(Object(_.d)(B, {
                            onCompletion: t.onQueueChange,
                            owner: t.owner,
                            segments: t.queue
                        }))
                    }
                }
            })(A),
            K = n("+Znq"),
            Q = n("6BvN");
        ! function(e) {
            e[e.EndFormGroup = 0] = "EndFormGroup", e[e.Offsets = 1] = "Offsets", e[e.StartFormGroup = 2] = "StartFormGroup", e[e.UpdateButton = 3] = "UpdateButton"
        }(U || (U = {}));
        var W, z = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onStartChange = function(e) {
                        n.setState({
                            startOffset: e.currentTarget.value
                        })
                    }, n.onEndChange = function(e) {
                        n.setState({
                            endOffset: e.currentTarget.value
                        })
                    }, n.onKeyDown = function(e) {
                        e.keyCode === Q.a.Enter && n.update()
                    }, n.onInputBlur = function() {
                        n.update()
                    }, n.onUpdateClick = function() {
                        n.update()
                    }, n.state = {
                        startOffset: Object(g.b)(t.segment.startOffset),
                        endOffset: Object(g.b)(t.segment.endOffset)
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.segment,
                        n = e.segment,
                        r = !1,
                        i = this.state.startOffset,
                        a = this.state.endOffset;
                    t.startOffset !== n.startOffset && (i = Object(g.b)(n.startOffset), r = !0), t.endOffset !== n.endOffset && (a = Object(g.b)(n.endOffset), r = !0), r && this.setState({
                        startOffset: i,
                        endOffset: a
                    })
                }, t.prototype.render = function() {
                    var e = this.props.segment;
                    return a.createElement(K.a, null, a.createElement(w.v, {
                        type: w.B.Text
                    }, a.createElement(w._8, {
                        display: w.R.Flex,
                        justifyContent: w._7.Center
                    }, a.createElement(w._22, {
                        asset: w._23.Edit
                    }), a.createElement(w._8, {
                        padding: {
                            left: .5
                        }
                    }, a.createElement(w.Q, {
                        align: w._56.Middle,
                        "data-test-selector": U.Offsets,
                        type: w._46.Span
                    }, Object(g.b)(e.startOffset) + " - " + Object(g.b)(e.endOffset))))), a.createElement(w.q, {
                        direction: w.r.BottomCenter
                    }, a.createElement(w._8, {
                        display: w.R.Flex,
                        flexDirection: w.T.Column,
                        margin: .5
                    }, a.createElement(w._8, {
                        padding: {
                            bottom: .5
                        }
                    }, this.renderStartInput()), a.createElement(w._8, {
                        padding: {
                            bottom: .5
                        }
                    }, this.renderEndInput()), a.createElement(w.v, {
                        blurAfterClick: !0,
                        "data-test-selector": U.UpdateButton,
                        disabled: !this.canUpdate(),
                        onClick: this.onUpdateClick
                    }, Object(l.d)("Update", "OffsetBalloonButton")))))
                }, t.prototype.renderStartInput = function() {
                    var e = this.state.startOffset,
                        t = !this.validClockValue(e);
                    return a.createElement(w.W, {
                        "data-test-selector": U.StartFormGroup,
                        error: t,
                        label: Object(l.d)("Start time", "OffsetBalloonButton")
                    }, a.createElement(w._4, {
                        error: t,
                        onBlur: this.onInputBlur,
                        onChange: this.onStartChange,
                        onKeyDown: this.onKeyDown,
                        required: !0,
                        type: w._5.Text,
                        value: this.state.startOffset
                    }))
                }, t.prototype.renderEndInput = function() {
                    var e = this.state.endOffset,
                        t = !this.validClockValue(e);
                    return a.createElement(w.W, {
                        "data-test-selector": U.EndFormGroup,
                        error: t,
                        label: Object(l.d)("End time", "OffsetBalloonButton")
                    }, a.createElement(w._4, {
                        error: t,
                        onBlur: this.onInputBlur,
                        onChange: this.onEndChange,
                        onKeyDown: this.onKeyDown,
                        required: !0,
                        type: w._5.Text,
                        value: e
                    }))
                }, t.prototype.validClockValue = function(e) {
                    var t = Object(g.a)(e);
                    return !isNaN(t)
                }, t.prototype.canUpdate = function() {
                    if (!(this.validClockValue(this.state.startOffset) && this.validClockValue(this.state.endOffset))) return !1;
                    var e = this.props.segment,
                        t = Object(g.a)(this.state.startOffset),
                        n = Object(g.a)(this.state.endOffset);
                    return (t !== e.startOffset || n !== e.endOffset) && (!(t < e.minOffset || n > e.maxOffset) && !(n <= t))
                }, t.prototype.update = function() {
                    this.canUpdate() && this.props.onUpdate({
                        startOffset: Object(g.a)(this.state.startOffset),
                        endOffset: Object(g.a)(this.state.endOffset)
                    })
                }, t
            }(a.Component),
            J = n("3HXW");
        ! function(e) {
            e[e.SegmentLength = 0] = "SegmentLength"
        }(W || (W = {}));
        var X, $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSelectSegmentClick = function() {
                        t.props.onSelectSegmentClick({
                            startOffset: t.props.segment.startOffset,
                            endOffset: t.props.segment.endOffset
                        })
                    }, t.onStartOffsetDragEndHandler = function() {
                        t.props.onStartOffsetDragEnd({
                            startOffset: t.props.segment.startOffset,
                            endOffset: t.props.segment.endOffset
                        })
                    }, t.onEndOffsetDragEndHandler = function() {
                        t.props.onEndOffsetDragEnd({
                            startOffset: t.props.segment.startOffset,
                            endOffset: t.props.segment.endOffset
                        })
                    }, t.renderQueueSegmentButton = function() {
                        return a.createElement(w.v, {
                            onClick: t.onSelectSegmentClick,
                            blurAfterClick: !0
                        }, Object(l.d)("Select Highlight", "VideoSegmentSelector"))
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.segment,
                        t = Object(g.b)(e.endOffset - e.startOffset);
                    return a.createElement(J.a, {
                        color: J.b.Orange,
                        onLeftDragStart: this.props.onDragStart,
                        onRightDragStart: this.props.onDragStart,
                        onLeftDrag: this.props.onOffsetChange,
                        onRightDrag: this.props.onOffsetChange,
                        onLeftDragEnd: this.onStartOffsetDragEndHandler,
                        onRightDragEnd: this.onEndOffsetDragEndHandler,
                        startOffset: e.startOffset,
                        endOffset: e.endOffset,
                        minOffset: e.minOffset,
                        maxOffset: e.maxOffset,
                        popover: this.renderQueueSegmentButton()
                    }, a.createElement(w._32, {
                        alignItems: w.c.Center,
                        display: w.R.Flex,
                        fullWidth: !0,
                        justifyContent: w._7.Center,
                        padding: {
                            y: 2
                        },
                        textAlign: w._42.Center
                    }, a.createElement(w._22, {
                        asset: w._23.GlyphLength
                    }), a.createElement(w._8, {
                        margin: {
                            left: .5
                        }
                    }, a.createElement(w.Q, {
                        "data-test-selector": W.SegmentLength,
                        align: w._56.Middle
                    }, t))))
                }, t
            }(a.Component),
            Y = Object(u.compose)(Object(b.d)("VideoSegmentEditor", {
                autoReportInteractive: !0
            }))($),
            Z = n("Kj+b");
        ! function(e) {
            e[e.ErrorMessage = 0] = "ErrorMessage"
        }(X || (X = {}));
        var ee, te = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderTimelineSegments = function() {
                        return n.props.data.loading ? a.createElement(w._8, {
                            padding: {
                                y: 3
                            },
                            display: w.R.Flex,
                            flexDirection: w.T.Column,
                            alignItems: w.c.Center
                        }, a.createElement(w._10, null)) : !n.props.data.error && (n.props.data.loading || n.props.data.video && n.props.data.video.id) ? n.state.timelineSegments.map(function(e) {
                            return a.createElement(Y, {
                                key: e.createdAt,
                                onDragStart: n.props.onDragStart,
                                onEndOffsetDragEnd: n.props.onEndOffsetDragEnd,
                                onOffsetChange: n.onActiveSegmentOffsetChange,
                                onSelectSegmentClick: n.props.onSelectSegmentClick,
                                onStartOffsetDragEnd: n.props.onStartOffsetDragEnd,
                                segment: e
                            })
                        }) : a.createElement(w._8, {
                            "data-test-selector": X.ErrorMessage,
                            padding: {
                                y: 3
                            },
                            textAlign: w._42.Center
                        }, a.createElement(w.Q, {
                            fontSize: w.V.Size4
                        }, Object(l.d)("Video data failed to load. Please try again later.", "VideoTimeline")))
                    }, n.onActiveSegmentOffsetChange = function(e) {
                        n.updateActiveSegmentOffsets(e)
                    }, n.props.data && !n.props.data.loading && n.props.data.video ? n.state = {
                        timelineSegments: [n.getInitialTimelineSegment(t)],
                        activeIndex: 0
                    } : n.state = {
                        timelineSegments: [n.getPlaceholderTimelineSegment()],
                        activeIndex: 0
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.props.data.loading && !e.data.loading && e.data.video && (this.state = {
                        timelineSegments: [this.getInitialTimelineSegment(e)],
                        activeIndex: 0
                    })
                }, t.prototype.render = function() {
                    return a.createElement(w._32, {
                        background: w.n.Base,
                        elevation: 2,
                        fullWidth: !0,
                        margin: {
                            top: 1
                        },
                        padding: {
                            top: 3
                        }
                    }, a.createElement(w._32, {
                        background: w.n.Alt2,
                        elevation: 1
                    }, this.renderTimelineSegments()), a.createElement(w._8, {
                        alignItems: w.c.Center,
                        display: w.R.Flex,
                        justifyContent: w._7.Center,
                        padding: {
                            y: 1
                        }
                    }, a.createElement(z, {
                        onUpdate: this.onActiveSegmentOffsetChange,
                        segment: this.state.timelineSegments[this.state.activeIndex]
                    })))
                }, t.prototype.updateActiveSegmentOffsets = function(e) {
                    var t = this;
                    this.setState(function(n) {
                        var r = i.__assign({}, t.state.timelineSegments[t.state.activeIndex], {
                                startOffset: Math.floor(e.startOffset),
                                endOffset: Math.ceil(e.endOffset)
                            }),
                            a = n.timelineSegments.slice();
                        return a[t.state.activeIndex] = r, {
                            timelineSegments: a
                        }
                    })
                }, t.prototype.getInitialTimelineSegment = function(e) {
                    return {
                        minOffset: 0,
                        maxOffset: e.data.video.lengthSeconds,
                        startOffset: Math.floor(15 * e.data.video.lengthSeconds / 100),
                        endOffset: Math.ceil(85 * e.data.video.lengthSeconds / 100),
                        createdAt: Date.now()
                    }
                }, t.prototype.getPlaceholderTimelineSegment = function() {
                    return {
                        minOffset: 0,
                        maxOffset: 0,
                        startOffset: 0,
                        endOffset: 0,
                        createdAt: Date.now()
                    }
                }, t
            }(a.Component),
            ne = Object(u.compose)(Object(f.a)(Z, {
                options: function(e) {
                    return {
                        variables: {
                            videoID: e.videoID
                        }
                    }
                }
            }), Object(b.d)("VideoTimeline", {
                autoReportInteractive: !0
            }))(te),
            re = n("91s2"),
            ie = 0,
            ae = -1,
            oe = 2;
        ! function(e) {
            e[e.SourceVideoTitle = 0] = "SourceVideoTitle", e[e.SourceVideoDate = 1] = "SourceVideoDate", e[e.SourceVideoLength = 2] = "SourceVideoLength"
        }(ee || (ee = {}));
        var se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        endHighlightOffset: null,
                        lastVideoOffset: null,
                        requestedVideoOffset: ie,
                        shouldPlayerPause: !1,
                        videoSegmentQueue: []
                    }, t.renderSourceVideoInfo = function() {
                        return a.createElement(w._8, {
                            padding: {
                                top: .5
                            }
                        }, a.createElement(w.Q, {
                            "data-test-selector": ee.SourceVideoTitle,
                            fontSize: w.V.Size6,
                            italic: !t.props.data.video.title,
                            lines: 2,
                            ellipsis: !0
                        }, t.props.data.video.title || Object(l.d)("Untitled Broadcast", "SourceVideoInfo")), a.createElement(w._8, {
                            display: w.R.Flex
                        }, t.props.data.video.publishedAt && a.createElement(w.Q, {
                            "data-test-selector": ee.SourceVideoDate,
                            color: w.K.Alt2,
                            fontSize: w.V.Size7,
                            type: w._46.Span
                        }, Object(l.c)(new Date(t.props.data.video.publishedAt), "medium"), " "), a.createElement(w._22, {
                            asset: w._23.GlyphLength,
                            type: w._24.Alt2,
                            width: 12,
                            height: 12
                        }), a.createElement(w.Q, {
                            "data-test-selector": ee.SourceVideoLength,
                            color: w.K.Alt2,
                            fontSize: w.V.Size7,
                            type: w._46.Span
                        }, " ", Object(g.b)(t.props.data.video.lengthSeconds))))
                    }, t.onSelectHighlightClick = function(e) {
                        t.setState(function(n) {
                            var r = n.videoSegmentQueue,
                                a = t.props.data.video,
                                o = {
                                    sourceVideoID: a.id,
                                    startOffsetSeconds: e.startOffset,
                                    endOffsetSeconds: e.endOffset,
                                    metadata: {
                                        description: a.description || "",
                                        game: a.game,
                                        language: a.language,
                                        tags: a.tags,
                                        title: Object(l.d)("Highlight: {videoTitle}", {
                                            videoTitle: a.title
                                        }, "HighlighterPage")
                                    }
                                };
                            return i.__assign({}, n, {
                                videoSegmentQueue: r.concat(o)
                            })
                        })
                    }, t.onQueueChangeHandler = function(e) {
                        t.setState({
                            videoSegmentQueue: e
                        })
                    }, t.onQueueSaveHandler = function() {
                        t.setState({
                            shouldPlayerPause: !0
                        })
                    }, t.onRemoveSegment = function(e) {
                        t.setState(function(t) {
                            var n = t.videoSegmentQueue.slice();
                            return n.splice(e, 1), {
                                videoSegmentQueue: n
                            }
                        })
                    }, t.onBeforeunloadHandler = function(e) {
                        if (0 === t.state.videoSegmentQueue.length) return !1;
                        var n = confirm(t.discardChangesMessage());
                        return e.returnValue = n, n
                    }, t.onDragStart = function() {
                        t.setState({
                            shouldPlayerPause: !0
                        })
                    }, t.onStartOffsetDragEnd = function(e) {
                        t.setState({
                            requestedVideoOffset: e.startOffset,
                            shouldPlayerPause: !1,
                            endHighlightOffset: e.endOffset
                        })
                    }, t.onEndOffsetDragEnd = function(e) {
                        t.setState({
                            requestedVideoOffset: e.endOffset - oe,
                            shouldPlayerPause: !1,
                            endHighlightOffset: e.endOffset
                        })
                    }, t.onPauseToggled = function(e) {
                        t.setState({
                            shouldPlayerPause: e
                        })
                    }, t.onVideoTimeChange = function(e) {
                        var n = Math.floor(e);
                        n !== t.state.lastVideoOffset ? n !== t.state.endHighlightOffset || !0 === t.state.shouldPlayerPause ? t.setState({
                            lastVideoOffset: n
                        }) : t.setState({
                            shouldPlayerPause: !0,
                            lastVideoOffset: n
                        }) : t.state.requestedVideoOffset === n && t.setState({
                            requestedVideoOffset: ae
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("beforeunload", this.onBeforeunloadHandler), this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data.loading !== this.props.data.loading && e.data.video && this.setState({
                        endHighlightOffset: e.data.video.lengthSeconds
                    })
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("beforeunload", this.onBeforeunloadHandler)
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return null;
                    var e = this.props.match.params.channelName;
                    return this.props.data.video && "" === this.props.data.video.id ? a.createElement(o.b, {
                        to: Object(s.d)(e)
                    }) : !this.props.data.error && this.props.data.video && this.props.data.video.owner ? this.props.data.video.broadcastType !== h.a.Archive ? a.createElement(d.a, {
                        message: Object(l.d)("You can only highlight past broadcasts.", "HighlighterPage")
                    }) : this.props.data.video.owner && this.props.data.video.owner.login !== e ? a.createElement(d.a, {
                        message: Object(l.d)("The selected video to highlight does not exist.", "HighlighterPage")
                    }) : a.createElement(p.b, null, a.createElement(w._32, {
                        alignItems: w.c.Stretch,
                        background: w.n.Alt,
                        display: w.R.Flex,
                        flexDirection: w.T.Column,
                        fullHeight: !0,
                        fullWidth: !0,
                        padding: {
                            x: 3,
                            y: 4
                        }
                    }, a.createElement(w.Y, {
                        justifyContent: w._7.Center
                    }, a.createElement(w.L, {
                        cols: {
                            default: 1
                        }
                    }), a.createElement(w.L, {
                        cols: {
                            default: 6
                        }
                    }, a.createElement(w.k, {
                        ratio: w.l.Aspect16x9
                    }, a.createElement(y, {
                        videoID: this.props.data.video.id,
                        paused: this.state.shouldPlayerPause,
                        onVideoTimeChange: this.onVideoTimeChange,
                        nextVideoOffset: this.state.requestedVideoOffset,
                        onPauseToggled: this.onPauseToggled
                    }))), a.createElement(w.L, {
                        cols: {
                            default: 4
                        }
                    }, a.createElement(w._8, {
                        fullHeight: !0,
                        fullWidth: !0,
                        position: w._15.Relative
                    }, a.createElement(w._8, {
                        position: w._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, a.createElement(q, {
                        queue: this.state.videoSegmentQueue,
                        onSegmentDelete: this.onRemoveSegment,
                        onQueueChange: this.onQueueChangeHandler,
                        onSaveClick: this.onQueueSaveHandler,
                        owner: {
                            displayName: this.props.data.video.owner.displayName,
                            id: this.props.data.video.owner.id,
                            login: e
                        }
                    }), a.createElement(o.a, {
                        when: this.state.videoSegmentQueue.length > 0,
                        message: this.discardChangesMessage()
                    })))), a.createElement(w.L, {
                        cols: {
                            default: 1
                        }
                    }), a.createElement(w.L, {
                        cols: {
                            default: 1
                        }
                    }), a.createElement(w.L, {
                        cols: {
                            default: 6
                        }
                    }, this.renderSourceVideoInfo()), a.createElement(w.L, {
                        cols: {
                            default: 5
                        }
                    })), a.createElement(w._8, {
                        alignSelf: w.d.Center,
                        padding: {
                            y: 1
                        },
                        fullWidth: !0
                    }, a.createElement(ne, {
                        onDragStart: this.onDragStart,
                        onStartOffsetDragEnd: this.onStartOffsetDragEnd,
                        onEndOffsetDragEnd: this.onEndOffsetDragEnd,
                        videoID: this.props.data.video.id,
                        onSelectSegmentClick: this.onSelectHighlightClick
                    })))) : a.createElement(d.a, {
                        message: Object(l.d)("Error loading video data. Please try again later.", "HighlighterPage")
                    })
                }, t.prototype.discardChangesMessage = function() {
                    return Object(l.d)("Your highlights have not been created. Are you sure you want to leave?", "HighlighterPage")
                }, t
            }(a.Component),
            le = Object(u.compose)(Object(f.a)(re, {
                options: function(e) {
                    return {
                        variables: {
                            videoID: e.match.params.videoID
                        }
                    }
                }
            }), Object(b.d)("HighlighterPage", {
                destination: v.a.VideoManagerHighlighter
            }), Object(m.a)({
                location: S.PageviewLocation.VideoManagerHighlighter
            }))(se),
            de = function(e) {
                return a.createElement(c.a, {
                    ownerLogin: e.match.params.channelName,
                    permittedRoles: {
                        editor: !0,
                        staff: !0
                    }
                }, function(t) {
                    var n = t.loading,
                        r = t.permitted;
                    return n || r ? a.createElement(le, i.__assign({}, e)) : a.createElement(d.a, {
                        message: Object(l.d)("Something went wrong. Please try again.", "HighlighterPageContainer")
                    })
                })
            },
            ce = n("PRb0");
        n.d(t, "b", function() {
            return ue
        }), n.d(t, "a", function() {
            return pe
        });
        var ue = function(e) {
                return a.createElement(o.b, {
                    to: Object(s.d)(e.match.params.channelName)
                })
            },
            pe = function(e) {
                return Object(ce.a)() ? a.createElement(de, i.__assign({}, e)) : a.createElement(ue, i.__assign({}, e))
            }
    },
    "12gq": function(e, t) {},
    "164Z": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoShareBox_TrackingVideoContext"
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
                                                    value: "isPartner"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 156
            }
        };
        n.loc.source = {
            body: "query VideoShareBox_TrackingVideoContext($videoID: ID!) {\nvideo(id: $videoID) {\nid\nbroadcastType\nowner {\nid\nlogin\nroles {\nisPartner\n}\n}\ngame {\nid\nname\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
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
    "3HXW": function(e, t, n) {
        "use strict";
        var r, i, a = n("TToO"),
            o = n("GiK3"),
            s = n("HW6M"),
            l = n("kLf9"),
            d = n("Odds");
        n("cJZy");
        ! function(e) {
            e.LeftHandle = "left-handle", e.Overlay = "overlay", e.Slider = "slider", e.RightHandle = "right-handle"
        }(r || (r = {})),
        function(e) {
            e.LeftHandle = "leftHandle", e.Slider = "slider", e.RightHandle = "rightHandle"
        }(i || (i = {}));
        var c, u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.leftHandleRef = null, n.rightHandleRef = null, n.sliderHandleRef = null, n.getHandleHandlers = function(e) {
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
                        r = t.handleRef,
                        i = t.mouseMoveHandler,
                        a = t.mouseUpHandler;
                    r && (n.preventUserSelect(), r.ownerDocument.addEventListener("mousemove", i), r.ownerDocument.addEventListener("mouseup", a))
                }, n.removeHandleListeners = function(e) {
                    var t = n.getHandleHandlers(e),
                        r = t.handleRef,
                        i = t.mouseMoveHandler,
                        a = t.mouseUpHandler;
                    r && (n.allowUserSelect(), r.ownerDocument.removeEventListener("mousemove", i), r.ownerDocument.removeEventListener("mouseup", a))
                }, n.leftHandleRefHandler = function(e) {
                    n.leftHandleRef = e
                }, n.onLeftMouseDown = function(e) {
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
                    var t = e.clientX;
                    n.setState(function(e, r) {
                        return {
                            startOffset: n.calculateOffset(t, {
                                startBoundary: Math.max(r.minOffset, e.endOffset - r.maxLength),
                                endBoundary: Math.min(e.endOffset, e.endOffset - r.minLength),
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
                    var t = e.clientX;
                    n.setState(function(e, r) {
                        return {
                            startOffset: e.startOffset,
                            endOffset: n.calculateOffset(t, {
                                startBoundary: Math.max(r.minOffset, e.startOffset + r.minLength),
                                endBoundary: Math.min(r.maxOffset, e.startOffset + r.maxLength),
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
                    n.setState(function(e, r) {
                        var i = e.endOffset - e.startOffset,
                            a = n.calculateOffset(t, {
                                startBoundary: r.minOffset,
                                endBoundary: r.maxOffset - i,
                                currentValue: e.startOffset
                            });
                        return {
                            startOffset: a,
                            endOffset: a + i
                        }
                    }, function() {
                        n.props.onSliderDrag && n.props.onSliderDrag({
                            startOffset: n.state.startOffset,
                            endOffset: n.state.endOffset
                        })
                    })
                }, n.calculateOffset = function(e, t) {
                    if (null === n.state.previousPosition || null === n.state.previousBaseValue) return t.currentValue;
                    var r = n.convertPixelsToOffsetUnits(e - n.state.previousPosition),
                        i = n.state.previousBaseValue + r;
                    return i < t.startBoundary ? t.startBoundary : i > t.endBoundary ? t.endBoundary : i
                }, n.convertPixelsToOffsetUnits = function(e) {
                    return n.props.parentContainerRef ? 0 === n.props.parentContainerRef.clientWidth ? 0 : e * ((n.props.maxOffset - n.props.minOffset) / n.props.parentContainerRef.clientWidth) : 0
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
                }, n.state = {
                    startOffset: t.startOffset,
                    endOffset: t.endOffset,
                    previousPosition: null,
                    previousBaseValue: null,
                    showFocus: !1
                }, n
            }
            return a.__extends(t, e), t.prototype.render = function() {
                var e = s("draggable-slider__content", {
                    "draggable-slider__content--blue": this.props.color === c.Blue,
                    "draggable-slider__content--orange": this.props.color === c.Orange,
                    "draggable-slider__content--focus": this.props.isSliderEnabled && this.state.showFocus
                });
                return o.createElement(d._8, {
                    className: "draggable-slider__container",
                    position: d._15.Relative,
                    display: d.R.Flex,
                    justifyContent: d._7.Center
                }, o.createElement(d._8, {
                    position: d._15.Absolute,
                    attachTop: !0,
                    fullWidth: !0
                }, o.createElement(d._8, {
                    position: d._15.Relative,
                    attachTop: !0,
                    fullWidth: !0,
                    display: d.R.Flex,
                    justifyContent: d._7.Center
                }, o.createElement(d._8, {
                    position: d._15.Absolute,
                    attachBottom: !0,
                    margin: {
                        bottom: 1
                    }
                }, this.props.popover))), o.createElement(d._32, {
                    className: e,
                    fullWidth: !0,
                    display: d.R.Flex,
                    justifyContent: d._7.Between
                }, o.createElement(l.a, {
                    "data-test-selector": r.LeftHandle,
                    color: this.props.color,
                    handlePosition: l.b.Left,
                    onRef: this.leftHandleRefHandler,
                    onMouseDown: this.onLeftMouseDown,
                    size: this.props.handleSize
                }), this.renderSliderContent(), o.createElement(l.a, {
                    "data-test-selector": r.RightHandle,
                    color: this.props.color,
                    handlePosition: l.b.Right,
                    onRef: this.rightHandleRefHandler,
                    onMouseDown: this.onRightMouseDown,
                    size: this.props.handleSize
                })))
            }, t.prototype.renderSliderContent = function() {
                var e = this.props.children;
                this.props.isSliderEnabled && (e = o.createElement("div", {
                    onMouseDown: this.onSliderMouseDown,
                    onMouseEnter: this.addFocus,
                    onMouseLeave: this.removeFocus,
                    ref: this.sliderHandleRefHandler,
                    "data-test-selector": r.Slider
                }, this.props.children));
                var t = s("draggable-slider__overlay", {
                    "draggable-slider__overlay--sliding-enabled": this.props.isSliderEnabled,
                    "draggable-slider__overlay--blue": this.props.color === c.Blue,
                    "draggable-slider__overlay--orange": this.props.color === c.Orange
                });
                return o.createElement(d._8, {
                    className: t,
                    display: d.R.InlineBlock,
                    overflow: d._11.Hidden,
                    "data-test-selector": r.Overlay,
                    fullWidth: !0
                }, e)
            }, t
        }(o.Component);
        ! function(e) {
            e.Orange = "orange", e.Blue = "blue"
        }(c || (c = {}));
        var p, f = c.Orange;
        ! function(e) {
            e[e.SelectedSection = 0] = "SelectedSection"
        }(p || (p = {}));
        var m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    startOffset: t.props.startOffset,
                    endOffset: t.props.endOffset
                }, t.handleParentContainerRef = function(e) {
                    t.parentContainerRef = e
                }, t
            }
            return a.__extends(t, e), t.prototype.render = function() {
                var e = this.props.handleSize ? this.props.handleSize : l.c.Small,
                    t = void 0 === this.props.minLength ? 0 : this.props.minLength,
                    n = void 0 === this.props.maxLength ? this.props.maxOffset - this.props.minOffset : this.props.maxLength,
                    r = {
                        width: "calc(" + this.calculateWidthPercentage() + "% + " + 2 * e + "px)",
                        marginLeft: "calc(" + this.calculateOffsetPercentage() + "% - " + e + "px)"
                    };
                return o.createElement("div", {
                    ref: this.handleParentContainerRef
                }, o.createElement(d._2, {
                    flexGrow: 0,
                    flexShrink: 0
                }, o.createElement("div", {
                    "data-test-selector": p.SelectedSection,
                    style: r
                }, o.createElement(u, {
                    color: this.props.color || f,
                    minOffset: this.props.minOffset,
                    maxOffset: this.props.maxOffset,
                    startOffset: this.props.startOffset,
                    maxLength: n,
                    minLength: t,
                    endOffset: this.props.endOffset,
                    parentContainerRef: this.parentContainerRef,
                    onLeftDragStart: this.props.onLeftDragStart,
                    onLeftDrag: this.props.onLeftDrag,
                    onLeftDragEnd: this.props.onLeftDragEnd,
                    onRightDragStart: this.props.onRightDragStart,
                    onRightDrag: this.props.onRightDrag,
                    onRightDragEnd: this.props.onRightDragEnd,
                    onSliderDragStart: this.props.onSliderDragStart,
                    onSliderDrag: this.props.onSliderDrag,
                    onSliderDragEnd: this.props.onSliderDragEnd,
                    popover: this.props.popover,
                    isSliderEnabled: this.props.isSliderEnabled,
                    handleSize: e
                }, this.props.children))))
            }, t.prototype.calculateOffsetPercentage = function() {
                return this.props.startOffset / this.getTotalLength() * 100
            }, t.prototype.calculateWidthPercentage = function() {
                return (this.props.endOffset - this.props.startOffset) / this.getTotalLength() * 100
            }, t.prototype.getTotalLength = function() {
                return this.props.maxOffset - this.props.minOffset
            }, t
        }(o.Component);
        n.d(t, "b", function() {
            return c
        }), n.d(t, !1, function() {
            return f
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return m
        })
    },
    "6rqt": function(e, t) {},
    "73mz": function(e, t) {
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
    "8Wuk": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return u
        });
        var r, i = n("TToO"),
            a = n("GiK3"),
            o = (n.n(a), n("6sO2")),
            s = n("2hJ3"),
            l = n("f6Cj"),
            d = n("Odds"),
            c = n("bdk8");
        n.n(c);
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(r || (r = {}));
        var u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? a.createElement("a", i.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(d._60)(n.props)), n.renderIcon()) : a.createElement("button", i.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(d._60)(n.props)), n.renderIcon())
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
                    var e = n.getAssetFromType();
                    return a.createElement(d._8, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, a.createElement(d._22, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== r.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case r.Twitter:
                            return "Twitter";
                        case r.Reddit:
                            return "Reddit";
                        case r.Facebook:
                            return "Facebook";
                        case r.VKontakte:
                            return "VKontakte";
                        case r.Copy:
                            return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case r.Twitter:
                            return d._23.Twitter;
                        case r.Facebook:
                            return d._23.Facebook;
                        case r.VKontakte:
                            return d._23.VKontakte;
                        case r.Reddit:
                            return d._23.Reddit;
                        case r.Copy:
                        default:
                            return d._23.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case r.Twitter:
                            return e + "--twitter";
                        case r.Reddit:
                            return e + "--reddit";
                        case r.Facebook:
                            return e + "--facebook";
                        case r.VKontakte:
                            return e + "--vkontakte";
                        case r.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        i = e.type,
                        a = n.getUrl(),
                        o = t || "";
                    switch (i) {
                        case r.Reddit:
                            return Object(l.b)(a, o);
                        case r.VKontakte:
                            return Object(l.d)(a);
                        case r.Facebook:
                            return Object(l.a)(a);
                        case r.Twitter:
                            return Object(l.c)(a, o);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement(d._8, {
                    className: "social-button"
                }, a.createElement(d._49, {
                    label: this.getTooltipFromType(),
                    direction: d._51.Top
                }, this.renderLink()))
            }, t
        }(a.Component)
    },
    "91s2": function(e, t, n) {
        var r = {
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "videoFields"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 279
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/video-field-editor/models/video-fields-fragment.gql"\nquery HighlighterPage_Video($videoID: ID!) {\nvideo(id: $videoID) {\nbroadcastType\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\npreviewThumbnailURL(width: 160 height: 90)\npublishedAt\n...videoFields\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        r.definitions = r.definitions.concat(n("73mz").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !i[t] && (i[t] = !0, !0)
        })), e.exports = r
    },
    AoO8: function(e, t, n) {
        "use strict";
        t.c = l, t.b = function(e, t) {
            return d(l(e), t)
        }, t.a = d;
        var r = n("TToO"),
            i = n("OAwv"),
            a = (n.n(i), n("6sO2")),
            o = n("JpYe"),
            s = {
                height: 378,
                width: 620,
                allowScrolling: !0,
                allowFullscreen: !0
            };

        function l(e) {
            e.video && (e.video = Object(o.b)(e.video));
            var t = i.stringify(e);
            return a.o.config.playerBaseURL + "/?" + t
        }

        function d(e, t) {
            void 0 === t && (t = s);
            var n, i, a = r.__assign({}, s, t),
                o = '<iframe src="' + e + '" frameborder="0" ' + (a.allowFullscreen ? 'allowfullscreen="true" ' : "") + (a.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + a.height + '" width="' + a.width + '"></iframe>';
            return a.textLink && (o += (n = a.textLink.url, i = a.textLink.text, '<a href="' + n + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + i + "</a>")), o
        }
    },
    CBaN: function(e, t) {},
    D9fv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.b = function() {
            var e = r.o.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return i.slice().sort(function(e, n) {
                var r = t(e),
                    i = t(n);
                return r !== i ? r - i : r + ":" + e.label < i + ":" + n.label ? -1 : 1
            }).concat(a(!0))
        };
        var r = n("6sO2"),
            i = [{
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
            }];

        function a(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(r.d)("Other", "broadcaster-languages") : "Other"
            }]
        }
        var o = new Set(i.concat(a()).map(function(e) {
            return e.code
        }))
    },
    H6Wp: function(e, t) {
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
    },
    Il1C: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("09xK");
        n.d(t, "HighlighterPage", function() {
            return r.a
        })
    },
    "Kj+b": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "HighlighterVideoTimeline_Video"
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
                                    value: "lengthSeconds"
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
                end: 96
            }
        };
        n.loc.source = {
            body: "query HighlighterVideoTimeline_Video($videoID: ID!) {\nvideo(id: $videoID) {\nid\nlengthSeconds\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    PRb0: function(e, t, n) {
        "use strict";
        t.a = function() {
            if (i.a.buildType === a.a.Dev) return !0;
            var e = i.b.get(s, r.Dev);
            switch (e) {
                case r.Dev:
                    return !1;
                case r.Staff:
                    var t = Object(o.c)(i.o.store.getState());
                    return !!(t && t.roles && t.roles.isStaff);
                case r.Everyone:
                    return !0;
                default:
                    var n = e;
                    return n
            }
        };
        var r, i = n("6sO2"),
            a = n("Ejve"),
            o = n("Aj/L"),
            s = "twilight_moonstone";
        ! function(e) {
            e.Dev = "dev", e.Staff = "staff", e.Everyone = "everyone"
        }(r || (r = {}))
    },
    Snvs: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("3zLD"),
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
                return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = p(e),
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
            }(i.Component);

        function u(e, t) {
            return !!e.owner || (!(!e.staff || !t.staff) || !(!e.editor || !t.editor))
        }

        function p(e) {
            var t = e.data,
                n = {
                    staff: !1,
                    editor: !1,
                    owner: !1
                };
            return !t.error && !t.loading && t.user && t.currentUser && (n.staff = !(!t.currentUser.roles || !t.currentUser.roles.isStaff), n.editor = !(!t.user.self || !t.user.self.isEditor), n.owner = t.user.id === t.currentUser.id), n
        }
        var f = Object(a.compose)(Object(s.a)(d, {
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
            return p
        }), n.d(t, "a", function() {
            return f
        })
    },
    YBPv: function(e, t) {},
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
    bJlE: function(e, t) {},
    bdk8: function(e, t) {},
    bhVC: function(e, t, n) {
        "use strict";
        var r = n("8Wuk");
        n.d(t, "a", function() {
            return r.a
        }), n.d(t, "b", function() {
            return r.b
        })
    },
    cAee: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.c = function e(t, n, r) {
            return i.__awaiter(this, void 0, void 0, function() {
                var l, c, u, p;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, r.query({
                                query: d,
                                variables: {
                                    videoID: t.id
                                }
                            })];
                        case 1:
                            return l = i.sent().data, c = function(e, t) {
                                return {
                                    id: e.id,
                                    owner: t.owner,
                                    broadcastType: t.broadcastType,
                                    game: t.game
                                }
                            }(t, l.video), u = {
                                channel: c.owner ? c.owner.login : null,
                                channel_id: Number(t.owner.id),
                                game: c.game ? c.game.name : null,
                                partner: !!c.owner && c.owner.roles.isPartner,
                                location: n.location,
                                share_context: n.collectionID ? o.ShareItemContext.Collection : null,
                                share_platform: n.platform,
                                shared_item_id: n.collectionID ? n.collectionID : c.id,
                                shared_item_type: n.collectionID ? o.ShareItemType.Collection : Object(s.a)(c.broadcastType),
                                shared_item_url: n.shareURL,
                                source_item_id: c.id,
                                source_item_type: Object(s.a)(c.broadcastType)
                            }, a.o.tracking.track(o.SpadeEventType.ShareItem, u), [3, 3];
                        case 2:
                            return p = i.sent(), a.j.error(p.toString(), e.name), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        }, t.b = function e(t, n, r) {
            return i.__awaiter(this, void 0, void 0, function() {
                var s, d, c;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, r.query({
                                query: l,
                                variables: {
                                    creatorID: t.owner.id
                                }
                            })];
                        case 1:
                            return s = i.sent().data, d = {
                                channel: s.user ? s.user.login : null,
                                channel_id: Number(t.owner.id),
                                game: null,
                                partner: !!s.user && s.user.roles.isPartner,
                                location: n.location,
                                share_context: null,
                                share_platform: n.platform,
                                shared_item_id: t.id,
                                shared_item_type: o.ShareItemType.Collection,
                                shared_item_url: n.shareURL,
                                source_item_id: t.id,
                                source_item_type: o.SourceItemType.Collection
                            }, a.o.tracking.track(o.SpadeEventType.ShareItem, d), [3, 3];
                        case 2:
                            return c = i.sent(), a.j.error(c.toString(), e.name), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        };
        var r, i = n("TToO"),
            a = n("6sO2"),
            o = n("vH/s"),
            s = n("xrVp"),
            l = n("mvQ0"),
            d = (n.n(l), n("164Z"));
        n.n(d);
        ! function(e) {
            e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk"
        }(r || (r = {}))
    },
    cJZy: function(e, t) {},
    cJkA: function(e, t) {},
    d0Y8: function(e, t, n) {
        "use strict";
        var r = n("6rqt"),
            i = (n.n(r), n("/1dg"));
        n.d(t, "VideoFieldEditor", function() {
            return i.a
        })
    },
    f6Cj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return Object(r.a)(i, {
                u: e
            })
        }, t.c = function(e, t) {
            return Object(r.a)(a, {
                url: e,
                text: t
            })
        }, t.b = function(e, t) {
            return Object(r.a)(o, {
                url: e,
                title: t
            })
        }, t.d = function(e) {
            return Object(r.a)(s, {
                url: e
            })
        };
        var r = n("yDzg"),
            i = "https://www.facebook.com/sharer/sharer.php",
            a = "https://www.twitter.com/share",
            o = "https://www.reddit.com/submit",
            s = "https://vk.com/share.php"
    },
    kLf9: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "a", function() {
            return u
        });
        var r, i, a, o = n("HW6M"),
            s = (n.n(o), n("GiK3")),
            l = (n.n(s), n("3HXW")),
            d = n("Odds"),
            c = n("CBaN");
        n.n(c);
        ! function(e) {
            e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
        }(r || (r = {})),
        function(e) {
            e[e.Handle = 0] = "Handle"
        }(i || (i = {})),
        function(e) {
            e[e.Small = 15] = "Small", e[e.Medium = 25] = "Medium"
        }(a || (a = {}));
        var u = function(e) {
            var t = o("draggable-slider-handle", {
                "draggable-slider-handle--left": e.handlePosition === r.Left,
                "draggable-slider-handle--right": e.handlePosition === r.Right,
                "draggable-slider-handle--blue": e.color === l.b.Blue,
                "draggable-slider-handle--orange": e.color === l.b.Orange
            });
            return s.createElement(d._2, {
                flexGrow: 0,
                flexShrink: 0,
                className: t,
                display: d.R.Flex,
                fullHeight: !0
            }, s.createElement("div", {
                "data-test-selector": i.Handle,
                onMouseDown: e.onMouseDown,
                ref: e.onRef
            }, s.createElement(d._22, {
                asset: d._23.DragHandle,
                width: e.size
            })))
        }
    },
    mvQ0: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoShareBox_CollectionTrackingMeta"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "creatorID"
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
                                    value: "creatorID"
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
                                            value: "isPartner"
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
                end: 117
            }
        };
        n.loc.source = {
            body: "query VideoShareBox_CollectionTrackingMeta($creatorID: ID!) {\nuser(id: $creatorID) {\nid\nlogin\nroles {\nisPartner\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    qLt5: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("D9fv"),
            o = n("Odds"),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.props.onChange(e.currentTarget.value)
                    }, t.renderLanguageOption = function(e) {
                        return i.createElement("option", {
                            key: e.code,
                            value: e.code
                        }, e.label)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = i.createElement(o._28, {
                        onChange: this.onChange,
                        disabled: this.props.disabled,
                        defaultValue: this.props.defaultLanguage
                    }, Object(a.b)().map(this.renderLanguageOption));
                    return this.props.label && (e = i.createElement(o.W, {
                        label: this.props.label
                    }, e)), e
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return s
        })
    },
    sJBK: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e[e.Collection = 0] = "Collection", e[e.Video = 1] = "Video"
            }(r || (r = {}))
    },
    xX9u: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("Odds"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClickHandler = function(e) {
                        t.props.onClick && t.props.onClick(), e.currentTarget.select()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(a._4, {
                        readOnly: !0,
                        type: a._5.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    zAjo: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = n("+Znq"),
            s = n("xX9u"),
            l = n("OAwv"),
            d = n("Ryxq");

        function c(e, t) {
            var n = new URL("https://www.twitch.tv/collections/" + e);
            return t && (n.search = l.stringify(t)), n.toString()
        }

        function u(e, t) {
            var n = new URL("https://www.twitch.tv/videos/" + e);
            return t && (n.search = l.stringify(r.__assign({}, t, {
                t: "number" == typeof t.t ? Object(d.a)(t.t) : void 0
            }))), n.toString()
        }
        var p = n("Odds"),
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = c(this.props.collection.id);
                    return i.createElement("div", null, i.createElement(p.Q, null, Object(a.d)("Collection Link", "VideoShareBox")), i.createElement(s.a, {
                        onClick: function() {
                            e.props.onClick(t)
                        },
                        value: t
                    }))
                }, t
            }(i.Component),
            m = n("cAee"),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function(e) {
                        var n = {
                            location: t.props.tracking.location,
                            platform: m.a.Link,
                            shareURL: e
                        };
                        Object(m.b)(t.props.collection, n, a.o.apollo.client)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(f, r.__assign({}, this.props, {
                        onClick: this.onClickHandler
                    }))
                }, t
            }(i.Component),
            g = n("AoO8"),
            v = n("vH/s"),
            S = n("sJBK");
        var b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.content,
                        n = this.getEmbedPlayerContentURL(t);
                    return i.createElement("div", null, i.createElement(p.Q, null, Object(a.d)("Embed Video", "VideoShareBox")), i.createElement(s.a, {
                        onClick: function() {
                            e.props.onClick(n)
                        },
                        value: this.getEmbedPlayerCode(t)
                    }))
                }, t.prototype.getEmbedPlayerCode = function(e) {
                    var t = function(e, t) {
                            var n = {
                                autoplay: !1
                            };
                            switch (e.type) {
                                case S.a.Collection:
                                    e.currentVideo ? (n.video = e.currentVideo.id, n.t = t ? Object(d.a)(t) : void 0) : n.collection = e.id;
                                    break;
                                case S.a.Video:
                                    n.video = e.id, n.t = t ? Object(d.a)(t) : void 0
                            }
                            return n
                        }(e, null !== this.props.selectedVideoStartTime ? this.props.selectedVideoStartTime : void 0),
                        n = e.owner.displayName,
                        r = e.title,
                        i = Object(a.d)("Watch {title} from {displayName} on www.twitch.tv", {
                            displayName: n,
                            title: r
                        }, "VideoShareBox");
                    return Object(g.b)(t, {
                        textLink: {
                            url: this.getEmbedPlayerContentURL(e),
                            text: i
                        },
                        allowScrolling: !1,
                        allowFullscreen: !0
                    })
                }, t.prototype.getEmbedPlayerContentURL = function(e) {
                    switch (e.type) {
                        case S.a.Collection:
                            return e.currentVideo ? u(e.currentVideo.id, {
                                tt_medium: v.PageviewMedium.VideoEmbed,
                                tt_content: v.PageviewContent.TextLink,
                                t: this.props.selectedVideoStartTime
                            }) : c(e.id, {
                                tt_medium: v.PageviewMedium.VideoEmbed,
                                tt_content: v.PageviewContent.TextLink
                            });
                        case S.a.Video:
                            return u(e.id, {
                                tt_medium: v.PageviewMedium.VideoEmbed,
                                tt_content: v.PageviewContent.TextLink,
                                t: this.props.selectedVideoStartTime
                            });
                        default:
                            return e
                    }
                }, t
            }(i.Component),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function(e) {
                        var n = t.props.content;
                        switch (n.type) {
                            case S.a.Collection:
                                n.currentVideo ? t.trackVideoShare(e, n.currentVideo) : t.trackCollectionShare(e, n);
                                break;
                            case S.a.Video:
                                t.trackVideoShare(e, n);
                                break;
                            default:
                                return n
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(b, r.__assign({}, this.props, {
                        onClick: this.onClickHandler
                    }))
                }, t.prototype.trackCollectionShare = function(e, t) {
                    var n = {
                        location: this.props.tracking.location,
                        platform: m.a.Embed,
                        shareURL: e
                    };
                    Object(m.b)(t, n, a.o.apollo.client)
                }, t.prototype.trackVideoShare = function(e, t) {
                    var n = {
                        location: this.props.tracking.location,
                        platform: m.a.Embed,
                        shareURL: e
                    };
                    Object(m.c)(t, n, a.o.apollo.client)
                }, t
            }(i.Component),
            y = n("bhVC"),
            O = [{
                type: y.b.Twitter,
                selector: "twitter-button"
            }, {
                type: y.b.Facebook,
                selector: "fb-button"
            }, {
                type: y.b.VKontakte,
                selector: "vk-button"
            }, {
                type: y.b.Reddit,
                selector: "reddit-button"
            }, {
                type: y.b.Copy,
                selector: "copy-link-button"
            }],
            _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.content,
                        n = this.getContentURL(t),
                        r = this.getSocialShareContextTitle(t),
                        a = O.map(function(t) {
                            return i.createElement(y.a, {
                                "data-test-selector": t.selector,
                                key: t.type,
                                onShareClick: function(t) {
                                    e.props.onClick(n, t)
                                },
                                text: r,
                                type: t.type,
                                url: n
                            })
                        });
                    return i.createElement(p._8, {
                        display: p.R.Flex,
                        justifyContent: p._7.Between
                    }, a)
                }, t.prototype.getSocialShareContextTitle = function(e) {
                    return Object(a.d)("Check out {title} from {displayName} on www.twitch.tv", {
                        displayName: e.owner.displayName,
                        title: e.title
                    }, "VideoShareBox")
                }, t.prototype.getContentURL = function(e) {
                    switch (e.type) {
                        case S.a.Collection:
                            return e.currentVideo ? u(e.currentVideo.id, {
                                collection: e.id,
                                t: this.props.selectedVideoStartTime
                            }) : c(e.id);
                        case S.a.Video:
                            return u(e.id, {
                                t: this.props.selectedVideoStartTime
                            });
                        default:
                            return e
                    }
                }, t
            }(i.Component),
            C = function(e) {
                switch (e) {
                    case y.b.Twitter:
                        return m.a.Twitter;
                    case y.b.Reddit:
                        return m.a.Reddit;
                    case y.b.VKontakte:
                        return m.a.VKontakte;
                    case y.b.Facebook:
                        return m.a.Facebook;
                    case y.b.Copy:
                        return m.a.Copy;
                    case y.b.CopyInput:
                        return m.a.Link;
                    default:
                        return e
                }
            },
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function(e, n) {
                        var r = t.props.content;
                        switch (r.type) {
                            case S.a.Collection:
                                r.currentVideo ? t.trackVideoShare(e, r.currentVideo, n, r.id) : t.trackCollectionShare(e, r, n);
                                break;
                            case S.a.Video:
                                t.trackVideoShare(e, r, n);
                                break;
                            default:
                                return r
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(_, r.__assign({}, this.props, {
                        onClick: this.onClickHandler
                    }))
                }, t.prototype.trackCollectionShare = function(e, t, n) {
                    var r = {
                        location: this.props.tracking.location,
                        platform: C(n),
                        shareURL: e
                    };
                    Object(m.b)(t, r, a.o.apollo.client)
                }, t.prototype.trackVideoShare = function(e, t, n, r) {
                    var i = {
                        collectionID: r,
                        location: this.props.tracking.location,
                        platform: C(n),
                        shareURL: e
                    };
                    Object(m.c)(t, i, a.o.apollo.client)
                }, t
            }(i.Component),
            x = n("mi6k"),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onShareTimestampClick = function(e) {
                        void 0 !== t.props.currentVideoTime && t.props.onVideoStartTimeChange(e.currentTarget.checked ? t.props.currentVideoTime : void 0)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = {};
                    this.props.collectionID && (t.collection = this.props.collectionID), this.props.selectedVideoStartTime && (t.t = this.props.selectedVideoStartTime);
                    var n = u(this.props.video.id, t);
                    return i.createElement("div", null, i.createElement(p.Q, null, Object(a.d)("Video Link", "VideoShareBox")), i.createElement(s.a, {
                        onClick: function() {
                            e.props.onInputClick(n)
                        },
                        value: n
                    }), this.renderCurrentVideoOffsetLinkOption())
                }, t.prototype.renderCurrentVideoOffsetLinkOption = function() {
                    if (void 0 === this.props.currentVideoTime) return null;
                    var e = this.props.selectedVideoStartTime || this.props.currentVideoTime,
                        t = Object(x.b)(e);
                    return i.createElement(p._8, {
                        padding: {
                            top: .5
                        }
                    }, i.createElement(p.J, {
                        id: "video-share-timestamp-toggle",
                        label: Object(a.d)("Skip to {deeplinkTimestamp}", {
                            deeplinkTimestamp: t
                        }, "VideoShareBox"),
                        "data-a-target": "video-share-timestamp-toggle",
                        "data-a-value": void 0 !== this.props.selectedVideoStartTime,
                        checked: !!this.props.selectedVideoStartTime,
                        onChange: this.onShareTimestampClick
                    }))
                }, t
            }(i.Component),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function(e, n) {
                        var r = {
                            collectionID: n,
                            location: t.props.tracking.location,
                            platform: m.a.Link,
                            shareURL: e
                        };
                        Object(m.c)(t.props.video, r, a.o.apollo.client)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(w, r.__assign({}, this.props, {
                        onInputClick: this.onClickHandler
                    }))
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return D
        });
        var D = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {}, t.onVideoStartTimeChangeHandler = function(e) {
                    t.setState({
                        selectedVideoStartTime: e
                    })
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = null;
                return this.props.content && (e = this.shareBalloonContent(this.props.content)), i.createElement(o.a, null, i.createElement(p.v, {
                    disabled: !this.props.content,
                    icon: p._23.Share,
                    type: this.props.buttonType
                }, Object(a.d)("Share", "VideoShareBox")), i.createElement(p.q, {
                    direction: this.props.balloonDirection,
                    size: p.s.Small
                }, e))
            }, t.prototype.shareBalloonContent = function(e) {
                return i.createElement(p._8, {
                    padding: 1
                }, i.createElement(E, {
                    content: e,
                    selectedVideoStartTime: this.state.selectedVideoStartTime,
                    tracking: this.props.tracking
                }), this.renderCollectionShareInput(e), this.renderVideoShareInput(e), this.renderEmbedPlayerInput(e))
            }, t.prototype.renderCollectionShareInput = function(e) {
                return e.type !== S.a.Collection ? null : i.createElement(p._8, {
                    padding: {
                        top: 1
                    }
                }, i.createElement(h, {
                    collection: e,
                    tracking: this.props.tracking
                }))
            }, t.prototype.renderVideoShareInput = function(e) {
                var t, n;
                if (e.type === S.a.Collection) {
                    if (!e.currentVideo) return null;
                    n = e.id, t = e.currentVideo
                } else t = e;
                return i.createElement(p._8, {
                    padding: {
                        top: 1
                    }
                }, i.createElement(T, {
                    collectionID: n,
                    currentVideoTime: this.props.currentVideoTime,
                    onVideoStartTimeChange: this.onVideoStartTimeChangeHandler,
                    selectedVideoStartTime: this.state.selectedVideoStartTime,
                    tracking: this.props.tracking,
                    video: t
                }))
            }, t.prototype.renderEmbedPlayerInput = function(e) {
                return i.createElement(p._8, {
                    padding: {
                        top: 1
                    }
                }, i.createElement(k, {
                    content: e,
                    selectedVideoStartTime: this.state.selectedVideoStartTime,
                    tracking: this.props.tracking
                }))
            }, t
        }(i.Component)
    },
    zECu: function(e, t) {}
});
//# sourceMappingURL=pages.video-tools.pages.highlighter-5ab11952056cd404bb33c2185fb635de.js.map