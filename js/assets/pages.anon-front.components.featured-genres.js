webpackJsonp([78], {
    "+I3D": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("6sO2"),
            o = n("CSlQ"),
            s = n("XhYx"),
            l = n("2qz3"),
            m = n("Odds"),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onFollow = function() {
                        t.props.onFollowCategoryChange(t.props.category, !0)
                    }, t.onUnfollow = function() {
                        t.props.onFollowCategoryChange(t.props.category, !1)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (this.props.isFollowingAllGamesInCategory) return r.createElement(m.v, {
                        ariaLabel: Object(i.d)("Unfollow All", "OnboardingFollowCategory"),
                        "data-test-selector": "onboarding-follow-category-button-component",
                        icon: m._21.Heart,
                        onClick: this.onUnfollow,
                        statusAlertIcon: m._21.Unheart
                    });
                    var e = Object(i.d)("Follow All", "OnboardingFollowCategory");
                    return r.createElement(m.u, {
                        icon: m._21.Heart,
                        ariaLabel: e,
                        "data-test-selector": "onboarding-follow-category-button-component",
                        onClick: this.onFollow
                    }, e)
                }, t
            }(r.Component),
            c = n("DBTH"),
            u = n("v5ho"),
            p = 3,
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        categoryChange: null,
                        isFollowCategoriesExperimentEnabled: !1
                    }, t.renderCategoryContent = function() {
                        if (t.props.withStreams) {
                            var e = t.props.data.games.slice(0, p);
                            return r.createElement(l.a, {
                                names: e,
                                withAd: t.props.withAd,
                                directoryType: u.a.Games,
                                trackingMedium: t.props.trackingMedium
                            })
                        }
                        var n = void 0;
                        return t.props.withStreams || t.props.withBoxArtGameCards || (n = {
                            category: t.props.data.name,
                            categoryChange: t.state.categoryChange,
                            onFollow: t.props.onFollow,
                            onUnfollow: t.props.onUnfollow
                        }), r.createElement(s.a, {
                            names: t.props.data.games,
                            directoryType: u.a.Games,
                            cardSize: t.props.cardSize,
                            withAd: t.props.withAd,
                            followGameCardOptions: n,
                            isScrollable: !0
                        })
                    }, t.onFollowCategoryChange = function(e, n) {
                        t.setState({
                            categoryChange: {
                                timestampMs: Date.now(),
                                shouldFollow: n,
                                category: e
                            }
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, i.o.experiments.getAssignment(c.j)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        isFollowCategoriesExperimentEnabled: e === c.d.ENABLED
                                    }), this.props.latencyTracking.reportInteractive(), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return r.createElement(m._7, {
                        "data-test-selector": "community-category",
                        flexShrink: 0
                    }, r.createElement(m._7, {
                        alignItems: m.c.Center,
                        display: m.Q.Flex,
                        flexWrap: m.T.NoWrap
                    }, r.createElement(m._7, {
                        margin: {
                            x: 1,
                            bottom: .5
                        }
                    }, r.createElement(m.P, {
                        "data-test-selector": "community-category__title",
                        color: m.J.Base,
                        fontSize: m.U.Size3,
                        bold: !0
                    }, function(e) {
                        switch (e) {
                            case "MOBA":
                                return Object(i.d)("MOBA", "format-category");
                            case "Survival":
                                return Object(i.d)("Survival", "format-category");
                            case "Sandbox":
                                return Object(i.d)("Sandbox", "format-category");
                            case "Strategy":
                                return Object(i.d)("Strategy", "format-category");
                            case "FPS":
                                return Object(i.d)("FPS", "format-category");
                            case "Open World":
                                return Object(i.d)("Open World", "format-category");
                            case "MMORPG":
                                return Object(i.d)("MMORPG", "format-category");
                            case "Science Fiction":
                                return Object(i.d)("Science Fiction", "format-category");
                            case "Hack and Slash":
                                return Object(i.d)("Hack and Slash", "format-category");
                            case "Sports":
                                return Object(i.d)("Sports", "format-category");
                            case "Platform":
                                return Object(i.d)("Platform", "format-category");
                            case "Indie":
                                return Object(i.d)("Indie", "format-category");
                            case "RPG":
                                return Object(i.d)("RPG", "format-category");
                            case "Stealth":
                                return Object(i.d)("Stealth", "format-category");
                            case "Horror":
                                return Object(i.d)("Horror", "format-category");
                            case "Third-Person Shooter":
                                return Object(i.d)("Third-Person Shooter", "format-category");
                            case "Fighting":
                                return Object(i.d)("Fighting", "format-category");
                            case "Historical":
                                return Object(i.d)("Historical", "format-category");
                            case "Music":
                                return Object(i.d)("Music", "format-category");
                            case "Simulator":
                                return Object(i.d)("Simulator", "format-category");
                            case "Adventure":
                                return Object(i.d)("Adventure", "format-category");
                            case "Anime":
                                return Object(i.d)("Anime", "format-category");
                            case "Party":
                                return Object(i.d)("Party", "format-category");
                            case "Rogue-like":
                                return Object(i.d)("Rogue-like", "format-category");
                            case "Racing":
                                return Object(i.d)("Racing", "format-category");
                            case "Puzzle":
                                return Object(i.d)("Puzzle", "format-category");
                            default:
                                return e
                        }
                    }(this.props.data.name))), this.state.isFollowCategoriesExperimentEnabled && !this.props.withStreams && !this.props.withBoxArtGameCards && r.createElement(m._30, {
                        margin: {
                            left: 2
                        }
                    }, r.createElement(d, {
                        category: this.props.data,
                        onFollowCategoryChange: this.onFollowCategoryChange,
                        isFollowingAllGamesInCategory: this.props.isFollowingAllGamesInCategory
                    }))), r.createElement(m._7, null, r.createElement(m._1, {
                        flexGrow: 1
                    }, this.renderCategoryContent())))
                }, t
            }(r.Component),
            h = Object(o.d)("CommunityCategory")(g);
        n.d(t, !1, function() {
            return "community-category"
        }), n.d(t, !1, function() {
            return "community-category__title"
        }), n.d(t, !1, function() {
            return g
        }), n.d(t, "a", function() {
            return h
        })
    },
    "2qz3": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("/+to"),
            o = n("QG7y"),
            s = n("CSlQ"),
            l = n("7vx8"),
            m = n("jkA6"),
            d = n("7tMz"),
            c = n("IOwa"),
            u = n("2o2f"),
            p = n("KSGD"),
            g = n("6sO2"),
            h = n("S4HN"),
            f = n("AadB"),
            y = n("Odds"),
            v = function(e) {
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
                            channel_id: t.props.streamNode.id,
                            action: h.a.Impression,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(h.c)(e)
                    }, t.trackClickEvent = function() {
                        var e = {
                            channel_id: t.props.streamNode.id,
                            action: h.a.Click,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(h.c)(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : g.j.warn("<StreamThumbnailWithTrackingComponent /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return r.createElement("div", {
                        onClick: this.trackClickEvent
                    }, r.createElement(y._7, {
                        refDelegate: this.setRef
                    }, r.createElement(f.b, {
                        key: this.props.streamIndex,
                        directoryName: this.props.directoryName,
                        directoryType: this.props.directoryType,
                        streamIndex: this.props.streamIndex,
                        streamNode: this.props.streamNode,
                        trackingMedium: this.props.trackingMedium
                    })))
                }, t.prototype.checkVisible = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            return !this.impressionEventFired && this.isVisible(e) && (this.trackImpression(), this.impressionEventFired = !0), [2]
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: p.func
                }, t
            }(r.Component),
            k = "community-stream__placeholder",
            b = "community-stream",
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderStream = function() {
                        return t.props.data ? r.createElement(y._7, {
                            "data-test-selector": b,
                            position: y._14.Relative
                        }, r.createElement(y._7, {
                            padding: .5,
                            position: y._14.Absolute,
                            zIndex: y._57.Above
                        }, r.createElement(c.a, {
                            type: u.a.Live
                        })), r.createElement(v, {
                            key: t.props.data.id,
                            trackingMedium: t.props.trackingMedium,
                            directoryName: t.props.directoryName,
                            directoryType: t.props.directoryType,
                            streamIndex: t.props.index,
                            streamNode: t.props.data
                        })) : r.createElement(y._7, {
                            "data-test-selector": k,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(y._7, {
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(y.j, {
                            ratio: y.k.Aspect16x9
                        }, r.createElement(y._13, null))), r.createElement(y.P, null, r.createElement(y._13, {
                            width: 150
                        })), r.createElement(y.P, {
                            fontSize: y.U.Size7
                        }, r.createElement(y._13, {
                            width: 100
                        })))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(y._7, null, this.renderStream())
                }, t
            }(r.Component),
            S = n("eqtY"),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = "/directory";
                    if (this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.directory && this.props.data.directory.streams && this.props.data.directory.streams.edges) {
                        t = this.props.data.directory.name;
                        var n = this.props.data.directory.streams.edges.filter(function(e) {
                            var t = e.node;
                            return t.broadcaster && t.broadcaster.login
                        }).slice(0, 1).map(function(e) {
                            return e.node
                        });
                        n.length && (e = n[0])
                    }
                    return r.createElement(_, {
                        data: e,
                        index: this.props.index,
                        directoryName: t,
                        directoryType: this.props.directoryType,
                        trackingMedium: this.props.trackingMedium
                    })
                }, t = a.__decorate([Object(l.a)(S, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.name,
                                limit: e.limit ? e.limit : 3,
                                type: Object(m.a)(e.directoryType)
                            }
                        }
                    }
                }), Object(d.a)("CommunityStream")], t)
            }(r.Component),
            C = "community-streams-row__ad",
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.renderStreamGridWithAdSlot = function() {
                        var e = r.createElement(y._7, {
                                key: "ad",
                                "data-test-selector": C,
                                display: y.Q.Flex,
                                flexGrow: 1,
                                justifyContent: y._6.Center,
                                padding: {
                                    bottom: t.state.adDisplayed ? 2 : 0,
                                    left: t.state.adDisplayed ? .5 : 0
                                }
                            }, r.createElement(i.a, {
                                adSize: o.c.anonFront.rect,
                                adUnit: o.d.frontpage,
                                slotID: o.b.anonFront.rect,
                                targeting: {
                                    pagetype: o.a.frontpage
                                },
                                slotRendered: t.onSlotRendered,
                                autoEnable: !1
                            })),
                            n = t.renderStreams().map(function(e, t) {
                                return r.createElement(y.K, {
                                    key: "stream-" + t.toString(),
                                    cols: 4
                                }, e)
                            });
                        return n.splice(2, 0, e), r.createElement(y._7, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(y.X, {
                            gutterSize: y.Y.Medium
                        }, n))
                    }, t.renderStreams = function() {
                        if (t.props.data) {
                            var e = t.props.data;
                            return t.props.withAd && t.state.adDisplayed && (e = e.slice(0, 2)), e.map(function(e, n) {
                                return r.createElement(_, {
                                    key: e.id,
                                    data: e,
                                    index: n,
                                    directoryName: e.title,
                                    directoryType: t.props.directoryType,
                                    trackingMedium: t.props.trackingMedium
                                })
                            })
                        }
                        if (t.props.names) {
                            var n = t.props.names;
                            return t.props.withAd && t.state.adDisplayed && (n = n.slice(0, 2)), n.map(function(e, n) {
                                return r.createElement(w, {
                                    key: e,
                                    name: e,
                                    index: n,
                                    directoryType: t.props.directoryType,
                                    trackingMedium: t.props.trackingMedium
                                })
                            })
                        }
                        throw new Error("Need to pass either data or names into CommunityStreamsRow")
                    }, t.onSlotRendered = function() {
                        t.state.adDisplayed || t.setState({
                            adDisplayed: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.withAd) return this.renderStreamGridWithAdSlot();
                    var e = this.props.data && 1 === this.props.data.length || this.props.names && 1 === this.props.names.length ? 1 : 0;
                    return r.createElement(y._7, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(y._50, {
                        gutterSize: y._52.Small,
                        childWidth: y._51.Large,
                        placeholderItems: e,
                        noWrap: !0
                    }, this.renderStreams()))
                }, t
            }(r.Component),
            N = Object(s.d)("CommunityStreamsRow")(E);
        n.d(t, !1, function() {
            return C
        }), n.d(t, !1, function() {
            return E
        }), n.d(t, "a", function() {
            return N
        })
    },
    "508y": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityCard_CommunityDetails"
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
                    }
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 172
            }
        };
        n.loc.source = {
            body: "query CommunityCard_CommunityDetails($name: String! $type: DirectoryType!) {\ndirectory(name: $name type: $type) {\nid\nname\navatarURL(width: 285 height: 380)\nviewersCount\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "5G5w": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("7vx8"),
            o = n("oIkB"),
            s = n("LIeg");

        function l(e, t, n, a) {
            void 0 === n && (n = {});
            var r = e.readQuery({
                query: t,
                variables: n
            });
            if (r) {
                var i = s(r, function(e) {
                    return e
                }, function(e) {
                    return a(e)
                });
                e.writeQuery({
                    query: t,
                    variables: n,
                    data: i
                })
            }
        }
        var m = n("Odds"),
            d = n("xGL+"),
            c = n("E+ZP"),
            u = (n("AtoX"), n("RuaR"));
        n.d(t, "a", function() {
            return p
        });
        var p = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    hovered: !1,
                    inProgress: !1
                }, t.onClick = function() {
                    t.state.inProgress || t.setState({
                        inProgress: !0
                    }, t.mutateFollowGame)
                }, t.mutateFollowGame = function() {
                    return a.__awaiter(t, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.followGameDataLoadedWithoutError() && this.props.data.game ? this.isFollowing() ? [3, 2] : [4, this.followGame(this.props.data.game.id)] : [2];
                                case 1:
                                    return e.sent(), [3, 4];
                                case 2:
                                    return [4, this.unfollowGame(this.props.data.game.id)];
                                case 3:
                                    e.sent(), e.label = 4;
                                case 4:
                                    return [2]
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
            return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                !e.categoryChange || this.props.categoryChange && this.props.categoryChange.timestampMs === e.categoryChange.timestampMs || !e.categoryChange.category.games.includes(this.props.title) || this.isFollowing() !== e.categoryChange.shouldFollow && this.onClick()
            }, t.prototype.render = function() {
                return r.createElement(m._1, {
                    position: m._14.Relative,
                    margin: {
                        bottom: 1
                    }
                }, r.createElement("div", a.__assign({
                    className: "follow-game-card",
                    "data-test-selector": "follow-game-card",
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    onClick: this.onClick
                }, Object(m._58)(this.props)), r.createElement(m.B, {
                    key: this.props.title
                }, r.createElement(m._7, {
                    position: m._14.Relative
                }, this.renderOverlay(), r.createElement(m.D, {
                    aspect: m.k.Aspect3x4,
                    alt: this.props.imageAlt,
                    src: this.props.imageSrc
                })), r.createElement(m.C, null, r.createElement(m._7, {
                    margin: {
                        top: .5,
                        bottom: 1
                    }
                }, r.createElement(m.P, {
                    color: m.J.Base,
                    fontSize: m.U.Size5
                }, this.props.title), r.createElement(m.P, {
                    color: m.J.Alt,
                    fontSize: m.U.Size6
                }, this.props.info))))))
            }, t.prototype.renderOverlay = function() {
                var e, t = this.isFollowing();
                return this.state.inProgress ? e = r.createElement(m._9, {
                    delay: 0
                }) : this.state.hovered ? e = r.createElement(m._20, {
                    width: 50,
                    height: 50,
                    asset: t ? m._21.Unheart : m._21.Heart
                }) : t && (e = r.createElement(m._20, {
                    width: 50,
                    height: 50,
                    asset: m._21.Heart
                })), e ? r.createElement(m._30, {
                    className: "follow-game-card__overlay " + (t ? "follow-game-card__overlay--followed" : ""),
                    background: m.m.Overlay,
                    color: m.J.Overlay,
                    "data-a-target": t ? "follow-game-card--followed" : "",
                    display: m.Q.Flex,
                    alignItems: m.c.Center,
                    justifyContent: m._6.Center,
                    position: m._14.Absolute,
                    zIndex: m._57.Above,
                    attachBottom: !0,
                    attachTop: !0,
                    attachLeft: !0,
                    attachRight: !0
                }, e) : null
            }, t.prototype.followGame = function(e) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return a.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                t = a.__assign({}, Object(o.a)({
                                    gameID: e
                                }), {
                                    update: function(e, t) {
                                        var a = t.data.followGame;
                                        l(e, c, {
                                            name: n.props.title
                                        }, function(e) {
                                            return e.game && a && a.game ? (e.game.self.follow = a.game.self.follow, e) : e
                                        })
                                    },
                                    optimisticResponse: {
                                        followGame: {
                                            __typename: "FollowGamePayload",
                                            game: {
                                                __typename: "Game",
                                                self: {
                                                    __typename: "GameSelfConnection",
                                                    follow: {
                                                        __typename: "GameFollow",
                                                        followedAt: (new Date).toISOString()
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.props.followGame(t)];
                            case 2:
                                return r.sent(), this.setState({
                                    inProgress: !1
                                }, function() {
                                    n.props.onFollow && n.props.onFollow(n.props.title)
                                }), [3, 4];
                            case 3:
                                return r.sent(), this.setState({
                                    inProgress: !1
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype.unfollowGame = function(e) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return a.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                t = a.__assign({}, Object(o.a)({
                                    gameID: e
                                }), {
                                    update: function(e, t) {
                                        var a = t.data.unfollowGame;
                                        l(e, c, {
                                            name: n.props.title
                                        }, function(e) {
                                            return e.game && a && a.game ? (e.game.self.follow = a.game.self.follow, e) : e
                                        })
                                    },
                                    optimisticResponse: {
                                        unfollowGame: {
                                            __typename: "UnfollowGamePayload",
                                            game: {
                                                __typename: "Game",
                                                self: {
                                                    __typename: "GameSelfConnection",
                                                    follow: null
                                                }
                                            }
                                        }
                                    }
                                }), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.props.unfollowGame(t)];
                            case 2:
                                return r.sent(), this.setState({
                                    inProgress: !1
                                }, function() {
                                    n.props.onUnfollow && n.props.onUnfollow(n.props.title)
                                }), [3, 4];
                            case 3:
                                return r.sent(), this.setState({
                                    inProgress: !1
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype.isFollowing = function() {
                return !!(this.followGameDataLoadedWithoutError() && this.props.data.game && this.props.data.game.self && this.props.data.game.self.follow)
            }, t.prototype.followGameDataLoadedWithoutError = function() {
                return !(!this.props || !this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.game)
            }, t = a.__decorate([Object(i.a)(c, {
                options: function(e) {
                    return {
                        variables: {
                            name: e.title
                        }
                    }
                }
            }), Object(i.a)(d, {
                name: "followGame"
            }), Object(i.a)(u, {
                name: "unfollowGame"
            })], t)
        }(r.Component)
    },
    "7rq1": function(e, t) {},
    "7tMz": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("75D5");

        function o(e) {
            return {
                latencyTracking: function(e, t) {
                    return new i.a(e, t)
                }(e),
                rootLatencyTracker: s()
            }
        }

        function s() {
            return new i.a("Root")
        }
        n("MRMr");

        function l(e, t) {
            return function(t) {
                return function(n) {
                    function i() {
                        return null !== n && n.apply(this, arguments) || this
                    }
                    return a.__extends(i, n), i.prototype.render = function() {
                        return r.createElement(t, a.__assign({}, this.props, o(e)))
                    }, i
                }(r.Component)
            }
        }
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return l
        })
    },
    A9VK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var a = n("TToO"),
            r = this,
            i = function() {
                return a.__awaiter(r, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        return [2, n.e(85).then(n.bind(null, "Revh"))]
                    })
                })
            }
    },
    AadB: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("O27J"),
            o = n("6sO2"),
            s = n("iOr9"),
            l = n("+GT7"),
            m = n("vKFS"),
            d = n("6BvN"),
            c = n("SZoP"),
            u = n("NY9D"),
            p = n("vH/s"),
            g = n("HW6M"),
            h = n("Odds"),
            f = (n("ehrk"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = g("live-channel-preview-card", {
                        "live-channel-preview-card--loading": !this.props.streamLoaded
                    });
                    return r.createElement("div", a.__assign({
                        className: e,
                        "data-test-selector": "live-channel-preview-card"
                    }, Object(h._58)(this.props)), r.createElement(l.a, a.__assign({}, this.props), r.createElement(h.j, {
                        ratio: h.k.Aspect16x9
                    }, this.props.videoPlayer)))
                }, t
            }(r.Component)),
            y = n("81qH"),
            v = n("v5ho"),
            k = n("RH2O"),
            b = n("2KeS"),
            _ = n("V5M+"),
            S = n("jetF"),
            w = n("7vx8"),
            C = n("CSlQ"),
            E = n("3zLD"),
            N = n("+8VM"),
            T = n("oIkB"),
            O = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(o.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(o.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(o.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(o.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(o.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(o.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            },
            F = n("nC3l"),
            G = (n("sJt0"), "error-message"),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? r.createElement(h._7, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(h.P, {
                            color: h.J.Error,
                            type: h._44.H4,
                            "data-test-selector": G
                        }, O(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.banUserFromCommunity = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.banUserFromCommunity ? (e = a.__assign({}, Object(T.a)({
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
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (o.o.tracking.track(p.SpadeEventType.CommunityModeration, {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(h._1, {
                        position: h._14.Relative
                    }, r.createElement(h._30, {
                        background: h.m.Base,
                        className: "stream-ban-modal"
                    }, r.createElement(h._7, {
                        padding: 2
                    }, this.renderErrorMessage(), r.createElement(h._7, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(h.P, {
                        type: h._44.H4
                    }, Object(o.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), r.createElement(h._30, {
                        borderTop: !0
                    }, r.createElement(h._7, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(h.P, {
                        bold: !0
                    }, Object(o.d)("Reason (Required)", "StreamBanModal")), r.createElement(h._3, {
                        type: h._4.Text,
                        placeholder: Object(o.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), r.createElement(h._30, {
                        borderTop: !0
                    }, r.createElement(h._7, {
                        padding: {
                            top: 2
                        },
                        textAlign: h._40.Center
                    }, r.createElement(h._7, {
                        display: h.Q.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(h.u, {
                        type: h.A.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(o.d)("Cancel", "StreamBanModal"))), r.createElement(h._7, {
                        display: h.Q.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(h.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(o.d)("Ban", "StreamBanModal")))))), r.createElement(N.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            x = Object(E.compose)(Object(w.a)(F, {
                name: "banUserFromCommunity"
            }))(D);
        var I = Object(k.b)(null, function(e) {
                return Object(b.b)({
                    onCloseModal: _.c
                }, e)
            })(x),
            A = (n("npyu"), n("plcU")),
            j = "error-message",
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? r.createElement(h._7, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(h.P, {
                            color: h.J.Error,
                            type: h._44.H4,
                            "data-test-selector": j
                        }, O(t.state.error))) : null
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.timeoutUserFromCommunity ? (e = a.__assign({}, Object(T.a)({
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
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (o.o.tracking.track(p.SpadeEventType.CommunityModeration, {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(h._1, {
                        position: h._14.Relative
                    }, r.createElement(h._30, {
                        background: h.m.Base,
                        className: "stream-timeout-modal"
                    }, r.createElement(h._7, {
                        padding: 2
                    }, this.renderErrorMessage(), r.createElement(h._7, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(h.P, {
                        type: h._44.H4
                    }, Object(o.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), r.createElement(h._30, {
                        borderTop: !0
                    }, r.createElement(h._7, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(h.P, {
                        bold: !0
                    }, Object(o.d)("Reason (Required)", "StreamTimeoutModal")), r.createElement(h._3, {
                        type: h._4.Text,
                        placeholder: Object(o.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), r.createElement(h._7, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(h.P, {
                        bold: !0
                    }, Object(o.d)("Duration", "StreamTimeoutModal")), r.createElement(h._26, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, r.createElement("option", {
                        value: "2"
                    }, Object(o.d)("2 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "4"
                    }, Object(o.d)("4 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "8"
                    }, Object(o.d)("8 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "12"
                    }, Object(o.d)("12 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "24"
                    }, Object(o.d)("24 hours", "StreamTimeoutModal")))), r.createElement(h._30, {
                        borderTop: !0
                    }, r.createElement(h._7, {
                        padding: {
                            top: 2
                        },
                        textAlign: h._40.Center
                    }, r.createElement(h._7, {
                        display: h.Q.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(h.u, {
                        type: h.A.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(o.d)("Cancel", "StreamTimeoutModal"))), r.createElement(h._7, {
                        display: h.Q.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(h.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(o.d)("Timeout", "StreamTimeoutModal")))))), r.createElement(N.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            M = Object(E.compose)(Object(w.a)(A, {
                name: "timeoutUserFromCommunity"
            }))(U);
        var L = Object(k.b)(null, function(e) {
                return Object(b.b)({
                    onCloseModal: _.c
                }, e)
            })(M),
            P = n("PO03"),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(c.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(I, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(c.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(L, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? r.createElement(S.a, null, r.createElement(h.v, {
                        ariaLabel: Object(o.d)("Moderation", "DirectoryGamePage"),
                        icon: h._21.ChatRiskFlag
                    }), r.createElement(h.p, {
                        direction: h.q.BottomRight,
                        size: h.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? r.createElement(h._5, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, r.createElement(h._7, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? r.createElement(h._5, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, r.createElement(h._7, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(o.d)("Timeout", "StreamFlag"))) : null
                }, t = a.__decorate([Object(w.a)(P, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.communityName
                            }
                        }
                    }
                }), Object(C.d)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component);
        var B = Object(k.b)(null, function(e) {
                return Object(b.b)({
                    onShowModal: _.d
                }, e)
            })(R),
            V = n("vKYI"),
            z = n("PLRK"),
            H = (n("GiGb"), "directory-first-item"),
            Q = "directory-game__card_container",
            W = 5e3,
            q = 300,
            Y = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderVariation = function() {
                        var e = n.props.streamNode,
                            t = n.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var i = {
                            context: n.props.directoryType === v.a.Games ? m.b.SingleGameList : m.b.MixedGameAndChannelList,
                            title: e.title || z.a,
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            thumbnailImageProps: {
                                src: e.previewImageURL || o.a.defaultStreamPreviewURL,
                                alt: "" + e.broadcaster.login
                            },
                            channelLogin: e.broadcaster.login || "",
                            channelLoginLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            channelImageProps: {
                                src: e.broadcaster.profileImageURL || "",
                                alt: "" + e.broadcaster.login
                            },
                            gameTitle: n.shouldShowGame("name"),
                            gameTitleLinkTo: n.getLinkTo(Object(u.c)(n.shouldShowGame("name")), t),
                            gameBoxArtImageProps: {
                                src: n.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                                alt: n.shouldShowGame("name")
                            },
                            playerMetadata: e.streamMetadata || void 0,
                            playerMetadataGame: e.streamMetadata ? n.props.directoryName : void 0,
                            streamType: e.type,
                            currentViewerCount: e.viewersCount || 0,
                            enableLivePreview: n.props.showPreview
                        };
                        return r.createElement("div", {
                            className: "stream-thumbnail",
                            ref: n.setRef,
                            "data-target": t ? "" : H,
                            style: {
                                order: t
                            }
                        }, r.createElement(h._7, {
                            className: "stream-thumbnail__card",
                            position: h._14.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": Q
                        }, r.createElement(m.a, a.__assign({}, i, {
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        })), n.renderStreamFlag()))
                    }, n.renderFallback = function() {
                        var e = n.props.streamNode,
                            t = n.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var a = n.props.showPreview && n.state.hovered && n.state.loadingPreview && !n.state.streamLoaded && !n.state.previewTimedOut,
                            i = n.props.showPreview && n.state.hovered && (n.state.loadingPreview || n.state.streamLoaded) && !n.state.previewTimedOut;
                        return r.createElement("div", {
                            className: "stream-thumbnail",
                            ref: n.setRef,
                            "data-target": t ? "" : H,
                            onKeyDown: n.onKeyDown,
                            onMouseLeave: n.onMouseLeaveHandler,
                            style: {
                                order: t
                            }
                        }, r.createElement(h._7, {
                            className: "stream-thumbnail__card",
                            position: h._14.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": Q
                        }, a && r.createElement(h._30, {
                            attachRight: !0,
                            attachTop: !0,
                            background: h.m.Overlay,
                            borderRadius: h.s.Small,
                            color: h.J.OverlayAlt,
                            margin: .5,
                            padding: .5,
                            position: h._14.Absolute,
                            zIndex: h._57.Above
                        }, r.createElement(h._9, {
                            fillContent: !0,
                            inheritColor: !0,
                            size: h._28.Small
                        })), !n.state.streamLoaded && r.createElement(l.a, {
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || z.a,
                            channelName: Object(c.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                            gameImageSrc: n.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                            gameTitle: n.shouldShowGame("name"),
                            gameLinkTo: n.getLinkTo(Object(u.c)(n.shouldShowGame("name")), t),
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            channelNameLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            streamType: e.type,
                            streamMetadata: e.streamMetadata,
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        }), i && r.createElement(f, {
                            streamLoaded: n.state.streamLoaded,
                            imageSrc: e.previewImageURL || o.a.defaultStreamPreviewURL,
                            imageAlt: e.broadcaster.login + " cover image",
                            viewerCount: e.viewersCount || 0,
                            title: e.title || z.a,
                            channelName: Object(c.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                            gameImageSrc: n.shouldShowGame("boxArtURL") || o.a.defaultBoxArtURL,
                            gameTitle: n.shouldShowGame("name"),
                            gameLinkTo: n.getLinkTo(Object(u.c)(n.shouldShowGame("name")), t),
                            linkTo: n.getLinkTo("/" + e.broadcaster.login, t),
                            channelNameLinkTo: n.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            streamType: e.type,
                            streamMetadata: e.streamMetadata,
                            videoPlayer: n.getVideoPlayer(),
                            hideTooltip: !0
                        }), n.renderStreamFlag()))
                    }, n.getLinkTo = function(e, t) {
                        var a = n.props.trackingContent ? n.props.trackingContent : p.PageviewContent.Live,
                            r = n.props.directoryType === v.a.Communities ? p.PageviewMedium.Community : p.PageviewMedium.Game;
                        return n.props.trackingMedium && (r = n.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: r,
                                content: a,
                                content_index: t
                            }
                        }
                    }, n.renderStreamFlag = function() {
                        var e = n.props.streamNode;
                        return e.broadcaster ? n.props.directoryType === v.a.Communities && n.props.directoryName ? r.createElement(h._7, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: h._14.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, r.createElement(B, {
                            communityName: n.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, n.shouldShowGame = function(e) {
                        return n.props.directoryType !== v.a.Games && n.props.streamNode.game ? n.props.streamNode.game[e] : ""
                    }, n.onMouseEnterHandler = function() {
                        !n.props.showPreview || n.state.hovered && !n.state.previewTimedOut || (n.removeThumbnailListener(), n.clearTimeouts(), n.setState({
                            hovered: !0
                        }, function() {
                            n.hoverTimeout = setTimeout(function() {
                                n.state.hovered && n.setState({
                                    loadingPreview: !0,
                                    previewTimedOut: !1,
                                    streamLoaded: !1
                                })
                            }, q)
                        }))
                    }, n.onFocusHandler = function() {
                        n.setState({
                            focused: !0
                        }), n.onMouseEnterHandler()
                    }, n.onMouseLeaveHandler = function() {
                        n.state.hovered && n.props.showPreview && (n.clearTimeouts(), n.setState({
                            hovered: !1,
                            focused: !1,
                            loadingPreview: !1,
                            previewTimedOut: !1,
                            streamLoaded: !1
                        }, function() {
                            n.addThumbnailListener()
                        }))
                    }, n.onKeyDown = function(e) {
                        n.state.focused && ((e.charCode || e.keyCode) === d.a.Tab && n.onMouseLeaveHandler())
                    }, n.onStreamLoaded = function() {
                        n.state.hovered && (n.setState({
                            streamLoaded: !0,
                            loadingPreview: !1
                        }), n.createPreviewTimeout())
                    }, n.createPreviewTimeout = function() {
                        n.previewTimeout && window.clearTimeout(n.previewTimeout), n.previewTimeout = setTimeout(function() {
                            n.state.hovered && n.setState({
                                previewTimedOut: !0,
                                streamLoaded: !1,
                                loadingPreview: !1
                            })
                        }, W)
                    }, n.setRef = function(e) {
                        e && (n.thumbnailNode = i.findDOMNode(e), n.addThumbnailListener())
                    }, n.getVideoPlayer = function() {
                        var e = {
                            onPlayerPlaying: n.onStreamLoaded
                        };
                        if (n.props.showPreview && n.state.hovered && n.props.streamNode.broadcaster && n.props.streamNode.broadcaster.login) return r.createElement(V.a, a.__assign({
                            channelLogin: n.props.streamNode.broadcaster.login
                        }, e))
                    }, n.clearTimeouts = function() {
                        n.hoverTimeout && window.clearTimeout(n.hoverTimeout), n.createPreviewTimeout && window.clearTimeout(n.previewTimeout)
                    }, n.addThumbnailListener = function() {
                        n.thumbnailNode && n.props.showPreview && n.thumbnailNode.getElementsByClassName("tw-card-img")[0] && (n.thumbnailNode.getElementsByClassName("tw-card-img")[0].addEventListener("mouseenter", n.onMouseEnterHandler), n.thumbnailNode.getElementsByClassName("tw-card-img")[0].parentElement.addEventListener("focus", n.onFocusHandler))
                    }, n.removeThumbnailListener = function() {
                        n.thumbnailNode && n.props.showPreview && n.thumbnailNode.getElementsByClassName("tw-card-img")[0] && (n.thumbnailNode.getElementsByClassName("tw-card-img")[0].removeEventListener("mouseenter", n.onMouseEnterHandler), n.thumbnailNode.getElementsByClassName("tw-card-img")[0].parentElement.removeEventListener("focus", n.onFocusHandler))
                    }, n.state = {
                        focused: !1,
                        streamLoaded: !1,
                        hovered: !1,
                        previewTimedOut: !1,
                        loadingPreview: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.showPreview && this.addThumbnailListener()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.focused && this.thumbnailNode.getElementsByTagName("a").length && this.thumbnailNode.getElementsByTagName("a")[0].focus()
                }, t.prototype.componentWillUnmount = function() {
                    this.clearTimeouts(), this.removeThumbnailListener()
                }, t.prototype.render = function() {
                    var e = {
                        assignments: {
                            fallback: this.renderFallback,
                            variation: this.renderVariation
                        },
                        loader: function() {
                            return r.createElement(y.VideoPreviewCardPlaceholder, null)
                        },
                        name: "TWILIGHT_VIDEO_CARD_UPDATES"
                    };
                    return r.createElement(s.a, a.__assign({}, e))
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return H
        }), n.d(t, !1, function() {
            return Q
        }), n.d(t, "b", function() {
            return Y
        })
    },
    AtoX: function(e, t) {},
    "E+ZP": function(e, t) {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                            value: "follow"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "followedAt"
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
                end: 100
            }
        };
        n.loc.source = {
            body: "query Game_FollowGameCard($name: String) {\ngame(name: $name) {\nid\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    GiGb: function(e, t) {},
    ND9m: function(e, t) {},
    PLRK: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("6sO2"),
            o = function(e, t) {
                return Object(i.d)("{viewerCount,number} viewers on {channel}", {
                    viewerCount: e,
                    channel: t
                }, "DirectoryGamePage")
            },
            s = Object(i.d)("Untitled Broadcast", "StreamThumbnail"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", null, Object(i.d)("View All", "DirectoryInternationalSection"))
                }, t
            }(r.Component);
        n.d(t, !1, function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, !1, function() {
            return l
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                                    value: "banning"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "timingOut"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
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
    RuaR: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameCard_UnfollowGame"
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                                    value: "follow"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "followedAt"
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
                end: 140
            }
        };
        n.loc.source = {
            body: "mutation FollowGameCard_UnfollowGame($input: UnfollowGameInput!) {\nunfollowGame(input: $input) {\ngame {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    S4HN: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "g", function() {
            return s
        }), n.d(t, "f", function() {
            return l
        }), n.d(t, "d", function() {
            return m
        }), n.d(t, "e", function() {
            return d
        }), n.d(t, "c", function() {
            return c
        });
        var a, r, i = n("6sO2"),
            o = n("vH/s");
        ! function(e) {
            e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
        }(a || (a = {})),
        function(e) {
            e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
        }(r || (r = {}));
        var s = function(e) {
                var t = {
                    source: e.source,
                    action: r.Start
                };
                i.n.track(o.SpadeEventType.OnboardingEvent, t)
            },
            l = function() {
                var e = {
                    source: a.HomepageCTA,
                    action: r.Dismissed
                };
                i.n.track(o.SpadeEventType.OnboardingEvent, e)
            },
            m = function() {
                var e = {
                    source: a.HomepageCTA,
                    action: r.Completed
                };
                i.n.track(o.SpadeEventType.OnboardingEvent, e)
            },
            d = function(e, t) {
                var n = {
                    src: o.SpadeEventType.OnboardingEvent,
                    game: t
                };
                i.n.track(e, n)
            },
            c = function(e) {
                i.n.track(o.SpadeEventType.BrowseForYou, e)
            }
    },
    XhYx: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("zCIC"),
            o = n("/+to"),
            s = n("QG7y"),
            l = n("CSlQ"),
            m = n("7vx8"),
            d = n("jkA6"),
            c = n("7tMz"),
            u = n("6sO2"),
            p = n("NY9D"),
            g = n("5G5w"),
            h = n("k2jn"),
            f = n("Odds"),
            y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return null === this.props.game ? r.createElement(f._7, {
                        "data-test-selector": "community-card__placeholder",
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(f._7, {
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(f.j, {
                        ratio: f.k.BoxArt
                    }, r.createElement(f._13, null)))) : this.props.followGameCardOptions ? r.createElement(f._7, {
                        key: this.props.followGameCardOptions.category + "-game-" + this.props.game.id
                    }, r.createElement(g.a, {
                        "data-a-target": "follow-game-card-" + this.props.game.id,
                        "data-test-selector": h.c,
                        info: this.props.game.viewersCount ? Object(u.d)("{viewerCount,number} viewers", {
                            viewerCount: this.props.game.viewersCount
                        }, "CommunitySelectionFollowCard") : "",
                        title: this.props.game.name,
                        imageAlt: this.props.game.name,
                        imageSrc: this.props.game.boxArtURL,
                        onFollow: this.props.followGameCardOptions.onFollow,
                        onUnfollow: this.props.followGameCardOptions.onUnfollow,
                        categoryChange: this.props.followGameCardOptions.categoryChange
                    })) : r.createElement(f._7, {
                        key: "game-" + this.props.game.id,
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(f.t, {
                        title: this.props.game.name,
                        info: this.props.game.viewersCount ? Object(u.d)("{viewerCount,number} viewers", {
                            viewerCount: this.props.game.viewersCount
                        }, "CommunitySelectionBoxCard") : "",
                        linkTo: this.props.isCommunity ? Object(p.a)(this.props.game.name) : Object(p.c)(this.props.game.name),
                        alt: this.props.game.name + " cover image",
                        src: this.props.game.boxArtURL
                    }))
                }, t
            }(r.Component),
            v = n("v5ho"),
            k = n("508y"),
            b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    if (this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.directory) e = {
                        id: this.props.data.directory.id,
                        name: this.props.data.directory.name,
                        boxArtURL: this.props.data.directory.avatarURL,
                        viewersCount: this.props.data.directory.viewersCount
                    };
                    else if (null === this.props.data.directory) return null;
                    return r.createElement(y, {
                        game: e,
                        isCommunity: this.props.directoryType === v.a.Communities,
                        followGameCardOptions: this.props.followGameCardOptions
                    })
                }, t = a.__decorate([Object(m.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.name,
                                type: Object(d.a)(e.directoryType)
                            }
                        }
                    }
                }), Object(c.a)("CommunityCard")], t)
            }(r.Component),
            _ = n("yEZg"),
            S = "community-card-row__ad",
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.renderCards = function(e) {
                        return t.props.withAd ? t.renderCardGridWithAdSlot() : t.renderCardsWithoutAdSlot(e)
                    }, t.renderCardsWithoutAdSlot = function(e) {
                        var n = t.renderCardsFromProps(),
                            a = 1 === n.length ? 1 : 0;
                        return r.createElement(f._7, {
                            padding: {
                                x: 1,
                                top: 2
                            }
                        }, r.createElement(f._50, {
                            gutterSize: f._52.Small,
                            childWidth: t.props.cardSize,
                            placeholderItems: t.props.placeholderItems ? t.props.placeholderItems : a,
                            noWrap: e
                        }, n))
                    }, t.renderCardGridWithAdSlot = function() {
                        var e = r.createElement(f._7, {
                                key: "ad",
                                "data-test-selector": S,
                                display: f.Q.Flex,
                                flexGrow: 1,
                                justifyContent: f._6.Center,
                                padding: {
                                    bottom: t.state.adDisplayed ? 2 : 0,
                                    left: t.state.adDisplayed ? 1 : 0
                                }
                            }, r.createElement(o.a, {
                                adSize: s.c.anonFront.rect,
                                adUnit: s.d.frontpage,
                                slotID: s.b.anonFront.rect,
                                targeting: {
                                    pagetype: s.a.frontpage
                                },
                                slotRendered: t.onSlotRendered,
                                autoEnable: !1
                            })),
                            n = t.renderCardsFromProps().map(function(e, t) {
                                return r.createElement(f.K, {
                                    key: "game-" + t.toString(),
                                    cols: 2
                                }, e)
                            });
                        return n.splice(4, 0, e), r.createElement(f._7, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(f.X, null, n))
                    }, t.renderCardsFromProps = function() {
                        if (t.props.games) {
                            var e = t.props.games;
                            return t.props.withAd && !t.state.adDisplayed && (e = e.slice(0, _.GAME_DISPLAY_LIMIT)), e.map(function(e, n) {
                                return r.createElement(y, {
                                    key: "community-card-" + e.id + "-" + n,
                                    game: e,
                                    isCommunity: t.props.directoryType === v.a.Communities,
                                    followGameCardOptions: t.props.followGameCardOptions
                                })
                            })
                        }
                        if (t.props.names) {
                            var n = t.props.names;
                            return t.props.withAd && !t.state.adDisplayed && (n = n.slice(0, _.GAME_DISPLAY_LIMIT)), n.map(function(e, n) {
                                return r.createElement(b, {
                                    key: "community-card-" + e + "-" + n,
                                    name: e,
                                    directoryType: t.props.directoryType,
                                    followGameCardOptions: t.props.followGameCardOptions
                                })
                            })
                        }
                        throw new Error("Need to pass either games or names into CommunityCardRow")
                    }, t.onSlotRendered = function() {
                        t.state.adDisplayed || t.setState({
                            adDisplayed: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.isScrollable ? r.createElement(i.b, null, this.renderCards(!0)) : this.renderCards(!1)
                }, t
            }(r.Component),
            C = Object(l.d)("CommunityCardRow")(w);
        n.d(t, !1, function() {
            return S
        }), n.d(t, !1, function() {
            return w
        }), n.d(t, "a", function() {
            return C
        })
    },
    ehrk: function(e, t) {},
    eqtY: function(e, t) {
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
                    }
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                                            value: "title"
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
                                                            value: "type"
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
                end: 364
            }
        };
        n.loc.source = {
            body: "query CommunityStreams_Streams($name: String! $type: DirectoryType! $limit: Int) {\ndirectory(name: $name type: $type) {\nid\nname\nstreams(first: $limit) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 285 height: 380)\nname\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jkA6: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var a = n("v5ho"),
            r = function(e) {
                return e === a.a.Communities ? "COMMUNITY" : "GAME"
            }
    },
    k2jn: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return S
        }), n.d(t, "a", function() {
            return w
        }), n.d(t, "b", function() {
            return N
        });
        var a = n("TToO"),
            r = n("GiK3"),
            i = (n.n(r), n("3zLD")),
            o = (n.n(i), n("6sO2")),
            s = n("zCIC"),
            l = n("Th9g"),
            m = n("7vx8"),
            d = n("j7/Y"),
            c = n("w9tK"),
            u = n("vH/s"),
            p = n("CSlQ"),
            g = n("XhYx"),
            h = n("+I3D"),
            f = n("DBTH"),
            y = n("S4HN"),
            v = n("v5ho"),
            k = n("Odds"),
            b = n("wd/y"),
            _ = (n.n(b), n("ND9m")),
            S = (n.n(_), "onboarding_game"),
            w = 100,
            C = 500,
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.doneInitialRedirectCheck = !1, t.gameToCategories = {}, t.onFollow = function(e) {
                        t.props.data.updateQuery(function(t) {
                            if (t.currentUser && t.currentUser.followedGames && t.currentUser.followedGames.nodes) {
                                var n = {
                                        id: e,
                                        name: e,
                                        __typename: "Game"
                                    },
                                    r = t.currentUser.followedGames.nodes.slice();
                                return r.push(n), a.__assign({}, t, {
                                    currentUser: a.__assign({}, t.currentUser, {
                                        followedGames: a.__assign({}, t.currentUser.followedGames, {
                                            nodes: r
                                        })
                                    })
                                })
                            }
                            return t
                        }), Object(y.e)(u.SpadeEventType.GameFollow, e)
                    }, t.onUnfollow = function(e) {
                        t.props.data.updateQuery(function(t) {
                            return t.currentUser && t.currentUser.followedGames && t.currentUser.followedGames.nodes ? a.__assign({}, t, {
                                currentUser: a.__assign({}, t.currentUser, {
                                    followedGames: a.__assign({}, t.currentUser.followedGames, {
                                        nodes: t.currentUser.followedGames.nodes.filter(function(t) {
                                            return t.name !== e
                                        })
                                    })
                                })
                            }) : t
                        }), Object(y.e)(u.SpadeEventType.GameUnfollow, e)
                    }, t.completeAndRedirectToForYou = function() {
                        Object(y.d)();
                        var e = "" === location.search ? "?tt_medium=onboarding" : location.search + "&tt_medium=onboarding";
                        window.location.assign("/directory/following/foryou" + e)
                    }, t.moveNextToChannelSurfing = function() {
                        o.o.history.push("/hi/surf" + location.search)
                    }, t.redirectToFrontPage = function() {
                        window.location.assign("/" + location.search)
                    }, t.onGameInputChange = function(e) {
                        e.persist(), t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), t.inputTimer = setTimeout(function() {
                            t.props.onSearchChange(e.target.value), t.inputTimer = 0
                        }, C)
                    }, t.userFollowedGamesDataLoaded = function(e) {
                        return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return o.o.setPageTitle(Object(o.d)("Welcome", "CommunitySelectionPage")), [4, o.o.experiments.getAssignment(f.i)];
                                case 1:
                                    return e = n.sent(), [4, o.o.experiments.getAssignment(f.h)];
                                case 2:
                                    return t = n.sent(), this.setState({
                                        inOnboardingExperiment: Object(f.n)(e),
                                        inChannelSurfingExperiment: Object(f.m)(e, t)
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.userFollowedGamesDataLoaded(e) && ((!1 === t.inOnboardingExperiment || !this.doneInitialRedirectCheck && this.shouldRedirect(e)) && this.redirectToFrontPage(), this.doneInitialRedirectCheck = !0), (!this.props.categoryData && e.categoryData || this.props.categoryData && e.categoryData && this.props.categoryData.length !== e.categoryData.length) && this.mapGamesToCategories(e.categoryData)
                }, t.prototype.componentDidUpdate = function() {
                    this.userFollowedGamesDataLoaded(this.props) && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.userFollowedGamesDataLoaded(this.props) && this.state.inOnboardingExperiment ? r.createElement(k._30, {
                        className: "community-selection-page",
                        "data-a-target": "community-selection-page",
                        "data-test-selector": "onboarding-community-selection",
                        fullHeight: !0,
                        position: k._14.Relative
                    }, r.createElement(k._7, {
                        className: "community-selection-page__progress-container",
                        fullWidth: !0,
                        position: k._14.Absolute,
                        attachTop: !0
                    }, r.createElement(k._17, {
                        size: k._18.Small,
                        value: this.calculateProgress()
                    })), r.createElement(k._30, {
                        display: k.Q.Flex,
                        alignItems: k.c.Center,
                        justifyContent: k._6.Center,
                        flexDirection: k.S.Column,
                        borderBottom: !0,
                        background: k.m.Base,
                        padding: 2,
                        breakpointMedium: {
                            flexDirection: k.S.Row,
                            padding: {
                                x: 2,
                                top: 2,
                                bottom: 1
                            }
                        },
                        fullWidth: !0
                    }, r.createElement(k._7, {
                        className: "community-selection-page__search",
                        position: k._14.Relative,
                        flexOrder: 3,
                        margin: {
                            top: 2
                        },
                        breakpointMedium: {
                            flexOrder: 1,
                            margin: {
                                top: 0
                            }
                        }
                    }, r.createElement(k._23, {
                        id: "onboarding-community-selection__search",
                        "data-a-target": "onboarding-community-selection__search",
                        onChange: this.onGameInputChange,
                        placeholder: "Search Games",
                        spellCheck: !1
                    })), this.renderTitleText(), this.renderCTA()), r.createElement(s.b, null, r.createElement(k._30, {
                        className: "community-selection-page__list",
                        background: k.m.Alt2,
                        overflow: k._10.Hidden,
                        padding: {
                            x: 1,
                            y: 2
                        }
                    }, this.renderGameCardsOrCategories(), r.createElement(s.a, {
                        enabled: this.props.categoriesInfiniteScrollEnabled,
                        loadMore: this.props.onLoadMoreCategories,
                        orientation: l.b.Down,
                        pixelThreshold: 20
                    })))) : this.props.data.error ? (o.j.warn("Data Error in Onboarding Community Selection", this.props.data.error), r.createElement(k._7, {
                        display: k.Q.Flex
                    }, r.createElement(k.P, {
                        fontSize: k.U.Size5,
                        color: k.J.Alt
                    }, Object(o.d)("Hmm...having trouble loading right now.", "CommunitySelectionPage")))) : null
                }, t.prototype.getNumFollowedGames = function() {
                    return this.props.data.currentUser.followedGames.nodes.length
                }, t.prototype.mapGamesToCategories = function(e) {
                    var t = this;
                    this.gameToCategories = {}, e.forEach(function(e) {
                        e.games.forEach(function(n) {
                            t.gameToCategories[n] || (t.gameToCategories[n] = []), t.gameToCategories[n].push(e.name)
                        })
                    })
                }, t.prototype.getCategoryFollowCounts = function() {
                    var e = this,
                        t = {};
                    return this.props.data.currentUser.followedGames.nodes.forEach(function(n) {
                        e.gameToCategories[n.name] && e.gameToCategories[n.name].forEach(function(e) {
                            t[e] || (t[e] = 0), t[e]++
                        })
                    }), t
                }, t.prototype.calculateProgress = function() {
                    return Math.min(1 + this.getNumFollowedGames() / 3 * 99, 100)
                }, t.prototype.shouldRedirect = function(e) {
                    return !e.data.currentUser || e.data.currentUser.followedGames.nodes.length >= 10
                }, t.prototype.renderTitleText = function() {
                    return r.createElement(k._7, {
                        display: k.Q.Flex,
                        alignItems: k.c.Center,
                        flexGrow: 1,
                        flexDirection: k.S.Column,
                        textAlign: k._40.Center,
                        margin: 1,
                        flexOrder: 2,
                        breakpointMedium: {
                            flexOrder: 1
                        },
                        breakpointLarge: {
                            margin: {
                                x: 2,
                                y: 1
                            }
                        }
                    }, r.createElement(k._30, {
                        color: k.J.Base,
                        fontSize: k.U.Size4,
                        breakpointMedium: {
                            fontSize: k.U.Size3
                        },
                        breakpointExtraLarge: {
                            fontSize: k.U.Size2
                        }
                    }, Object(o.d)("First, pick three or more you’d like to watch.", "CommunitySelectionPage")), r.createElement(k._30, {
                        color: k.J.Alt,
                        margin: {
                            top: .5
                        },
                        display: k.Q.Hide,
                        breakpointMedium: {
                            fontSize: k.U.Size4,
                            display: k.Q.Block
                        },
                        breakpointExtraLarge: {
                            fontSize: k.U.Size3
                        }
                    }, Object(o.d)("We have tons of games, hobbies, and activities being streamed right now.", "CommunitySelectionPage")))
                }, t.prototype.renderCTA = function() {
                    return r.createElement(k._7, {
                        className: "community-selection-page__cta-container",
                        display: k.Q.Flex,
                        justifyContent: k._6.Center,
                        breakpointLarge: {
                            justifyContent: k._6.End
                        },
                        flexGrow: 0,
                        flexShrink: 0,
                        flexOrder: 2,
                        breakpointMedium: {
                            flexOrder: 3
                        }
                    }, r.createElement(k.u, {
                        size: k.y.Large,
                        "data-test-selector": "onboarding_cta",
                        disabled: this.getNumFollowedGames() < 3,
                        onClick: this.state.inChannelSurfingExperiment ? this.moveNextToChannelSurfing : this.completeAndRedirectToForYou
                    }, this.state.inChannelSurfingExperiment ? Object(o.d)("Next", "CommunitySelectionPage") : Object(o.d)("Done", "CommunitySelectionPage")))
                }, t.prototype.renderGameCardsOrCategories = function() {
                    var e = this;
                    if (this.props.gameData) {
                        var t = {
                            onFollow: this.onFollow,
                            onUnfollow: this.onUnfollow
                        };
                        return r.createElement(g.a, {
                            games: this.props.gameData,
                            directoryType: v.a.Games,
                            cardSize: k._51.Medium,
                            followGameCardOptions: t,
                            placeholderItems: 99
                        })
                    }
                    if (this.props.categoryData) {
                        var n = this.getCategoryFollowCounts();
                        return this.props.categoryData.map(function(t) {
                            var a = !!n && (n[t.name] || 0) === t.games.length;
                            return r.createElement(h.a, {
                                key: t.name,
                                data: t,
                                cardSize: k._51.ExtraSmall,
                                trackingMedium: u.PageviewMedium.BrowseForYou,
                                isFollowingAllGamesInCategory: a,
                                onFollow: e.onFollow,
                                onUnfollow: e.onUnfollow
                            })
                        })
                    }
                }, t
            }(r.Component),
            N = Object(i.compose)(Object(m.a)(b, {
                options: {
                    variables: {
                        limit: 10
                    }
                }
            }), Object(p.d)("CommunitySelectionPage", {
                destination: c.a.OnboardingIndex
            }), Object(d.a)({
                location: u.PageviewLocation.OnboardingCommunitySelection
            }))(E)
    },
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                name: {
                                    kind: "Name",
                                    value: "error"
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                    value: "error"
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
    sJt0: function(e, t) {},
    v5ho: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
            }(a || (a = {}))
    },
    "wd/y": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunitySelectionPage_User"
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
                end: 120
            }
        };
        n.loc.source = {
            body: "query CommunitySelectionPage_User($limit: Int) {\ncurrentUser {\nid\nfollowedGames(first: $limit) {\nnodes {\nid\nname\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "xGL+": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameCard_FollowGame"
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                                    value: "follow"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "followedAt"
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
                end: 134
            }
        };
        n.loc.source = {
            body: "mutation FollowGameCard_FollowGame($input: FollowGameInput!) {\nfollowGame(input: $input) {\ngame {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    yEZg: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("F8kA"),
            o = n("6sO2"),
            s = n("yWCw"),
            l = n("CSlQ"),
            m = n("+I3D"),
            d = n("A9VK"),
            c = n("Odds"),
            u = (n("7rq1"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        categoryData: []
                    }, t.renderHeader = function() {
                        var e, n;
                        return t.props.withStreams ? (e = Object(o.d)("Featured Genres", "FeaturedGenres"), n = Object(o.d)("Watch your favorite games on Twitch", "FeaturedGenres")) : (e = Object(o.d)("Featured Games", "FeaturedGenres"), n = Object(o.d)("Find your favorite games on Twitch", "FeaturedGenres")), r.createElement(c._7, {
                            alignItems: c.c.Baseline,
                            display: c.Q.Flex,
                            flexDirection: c.S.Row,
                            margin: {
                                left: 1,
                                bottom: 1
                            }
                        }, r.createElement(c.P, {
                            fontSize: c.U.Size2,
                            color: c.J.Base
                        }, e), r.createElement(c._7, {
                            className: "anon-featured-genres__subheader",
                            margin: {
                                left: 2
                            }
                        }, r.createElement(c.P, {
                            fontSize: c.U.Size3,
                            color: c.J.Alt2
                        }, n)))
                    }, t.renderContent = function() {
                        return t.state.categoryData.map(function(e, n) {
                            return r.createElement(m.a, {
                                key: e.name,
                                data: e,
                                cardSize: c._51.ExtraSmall,
                                withAd: 0 === n,
                                trackingMedium: t.props.trackingMedium,
                                withStreams: t.props.withStreams,
                                withBoxArtGameCards: !t.props.withStreams,
                                isFollowingAllGamesInCategory: !1
                            })
                        })
                    }, t.renderFooter = function() {
                        return r.createElement(c._7, {
                            display: c.Q.Flex,
                            justifyContent: c._6.End
                        }, r.createElement(c._1, {
                            display: c.Q.Flex,
                            alignItems: c.c.Center
                        }, r.createElement(i.a, {
                            to: "/directory"
                        }, r.createElement(c.P, {
                            fontSize: c.U.Size4
                        }, Object(o.d)("See all live games", "FeaturedGenres")), r.createElement(c._30, {
                            alignItems: c.c.Center,
                            color: c.J.Link,
                            display: c.Q.InlineFlex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(c._20, {
                            asset: c._21.AngleRight,
                            width: 14,
                            height: 14
                        })))))
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.fetchCategories()];
                                case 1:
                                    return e.sent(), this.props.latencyTracking.reportInteractive(), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return null === this.state.categoryData ? r.createElement(s.a, {
                        message: Object(o.d)("Featured Genres are unavailable at this time.", "FeaturedGenres")
                    }) : r.createElement(c._7, null, this.renderHeader(), this.renderContent(), this.renderFooter())
                }, t.prototype.fetchCategories = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, Object(d.a)()];
                                case 1:
                                    return e = a.sent(), t = e.slice(0, 3).map(function(e, t) {
                                        return {
                                            name: e.name,
                                            games: e.games.slice(0, 0 === t ? 10 : 6)
                                        }
                                    }), this.setState({
                                        categoryData: t
                                    }), [3, 3];
                                case 2:
                                    return n = a.sent(), o.j.error(n, "Unable to fetch categories."), this.setState({
                                        categoryData: null
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t = a.__decorate([Object(l.d)("FeaturedGenres")], t)
            }(r.Component));
        n.d(t, "GENRE_DISPLAY_LIMIT", function() {
            return 3
        }), n.d(t, "GAME_DISPLAY_LIMIT", function() {
            return 6
        }), n.d(t, "GAME_DISPLAY_WITH_AD_LIMIT", function() {
            return 10
        }), n.d(t, "FeaturedGenres", function() {
            return u
        })
    }
});
//# sourceMappingURL=pages.anon-front.components.featured-genres-a402a59faf1498eed0061682f753a1fb.js.map