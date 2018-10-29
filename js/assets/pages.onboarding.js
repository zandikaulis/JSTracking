(window.webpackJsonp = window.webpackJsonp || []).push([
    [78], {
        "2mE7": function(e, t, n) {},
        "3H/7": function(e, t) {
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
                    end: 133
                }
            };
            n.loc.source = {
                body: "query CommunityCard_CommunityDetails($name: String!) {\ngame(name: $name) {\nid\nname\navatarURL(width: 285 height: 380)\nviewersCount\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "4ErZ": function(e, t) {
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
        "8n14": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                i = n("q1tI"),
                o = n("/MKj"),
                r = n("/7QA"),
                l = n("yR8l"),
                s = n("V+GM"),
                d = n("f00E"),
                c = n("D7An"),
                m = n("NvVO"),
                u = n("2xye"),
                p = n("kRBY"),
                g = n("GnwI"),
                f = n("H/lO"),
                h = n("NZDK"),
                v = n("9kXc"),
                k = n("roU9"),
                y = n("jkql"),
                b = n("oJmH"),
                S = n("8/mp"),
                w = n("Uive"),
                C = n("cTNz"),
                _ = n("0OKo"),
                N = n("kduP"),
                E = n("yziQ"),
                D = n("Ue10"),
                G = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return null === this.props.game ? i.createElement(D.Xa, {
                            "data-test-selector": "community-card__placeholder",
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(D.Xa, {
                            margin: {
                                bottom: .5
                            }
                        }, i.createElement(D.o, {
                            ratio: D.p.BoxArt
                        }, i.createElement(D.gb, null)))) : this.props.followGameCardOptions ? i.createElement(D.Xa, {
                            key: this.props.followGameCardOptions.category + "-game-" + this.props.game.id
                        }, i.createElement(E.a, {
                            "data-a-target": "follow-game-card-" + this.props.game.id,
                            "data-test-selector": X,
                            info: this.props.game.viewersCount ? Object(r.d)("{viewerCount,number} viewers", {
                                viewerCount: this.props.game.viewersCount
                            }, "CommunitySelectionFollowCard") : "",
                            title: this.props.game.name,
                            imageAlt: this.props.game.name,
                            imageSrc: this.props.game.boxArtURL,
                            onFollow: this.props.followGameCardOptions.onFollow,
                            onUnfollow: this.props.followGameCardOptions.onUnfollow
                        })) : i.createElement(D.Xa, {
                            key: "game-" + this.props.game.id,
                            padding: {
                                bottom: 1
                            }
                        }, i.createElement(D.y, {
                            title: this.props.game.name,
                            info: this.props.game.viewersCount ? Object(r.d)("{viewerCount,number} viewers", {
                                viewerCount: this.props.game.viewersCount
                            }, "CommunitySelectionBoxCard") : "",
                            linkTo: this.props.isCommunity ? Object(N.a)(this.props.game.name) : Object(N.c)(this.props.game.name),
                            alt: this.props.game.name + " cover image",
                            src: this.props.game.boxArtURL
                        }))
                    }, t
                }(i.Component),
                O = n("rShu"),
                x = n("3H/7"),
                F = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null;
                        if (this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.game) e = {
                            id: this.props.data.game.id,
                            name: this.props.data.game.name,
                            boxArtURL: this.props.data.game.avatarURL,
                            viewersCount: this.props.data.game.viewersCount
                        };
                        else if (null === this.props.data.game) return null;
                        return i.createElement(G, {
                            game: e,
                            isCommunity: this.props.directoryType === O.a.Communities,
                            followGameCardOptions: this.props.followGameCardOptions
                        })
                    }, t = a.__decorate([Object(l.a)(x, {
                        options: function(e) {
                            return {
                                variables: {
                                    name: e.name
                                }
                            }
                        }
                    }), Object(_.a)("CommunityCard")], t)
                }(i.Component),
                I = "community-card-row__ad",
                U = 6,
                A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            adDisplayed: !1
                        }, t.renderCards = function(e) {
                            return t.props.withAd ? t.renderCardGridWithAdSlot() : t.renderCardsWithoutAdSlot(e)
                        }, t.renderCardsWithoutAdSlot = function(e) {
                            var n = t.renderCardsFromProps(),
                                a = 1 === n.length ? 1 : 0;
                            return i.createElement(D.Xa, {
                                padding: {
                                    x: 1,
                                    top: 2
                                }
                            }, i.createElement(D.Xb, {
                                gutterSize: D.Zb.Small,
                                childWidth: t.props.cardSize,
                                placeholderItems: t.props.placeholderItems ? t.props.placeholderItems : a,
                                noWrap: e
                            }, n))
                        }, t.renderCardGridWithAdSlot = function() {
                            var e = i.createElement(D.Xa, {
                                    key: "ad",
                                    "data-test-selector": I,
                                    display: D.X.Flex,
                                    flexGrow: 1,
                                    justifyContent: D.Wa.Center,
                                    padding: {
                                        bottom: t.state.adDisplayed ? 2 : 0,
                                        left: t.state.adDisplayed ? 1 : 0
                                    }
                                }, i.createElement(w.a, {
                                    adSize: C.c.anonFront.rect,
                                    adUnit: C.d.frontpage,
                                    slotID: C.b.anonFront.rect,
                                    targeting: {
                                        pagetype: C.a.frontpage
                                    },
                                    slotRendered: t.onSlotRendered,
                                    autoEnable: !1
                                })),
                                n = t.renderCardsFromProps().map(function(e, t) {
                                    return i.createElement(D.P, {
                                        key: "game-" + t.toString(),
                                        cols: 2
                                    }, e)
                                });
                            return n.splice(4, 0, e), i.createElement(D.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, i.createElement(D.Ja, null, n))
                        }, t.renderCardsFromProps = function() {
                            if (t.props.games) {
                                var e = t.props.games;
                                return t.props.withAd && !t.state.adDisplayed && (e = e.slice(0, U)), e.map(function(e, n) {
                                    return i.createElement(G, {
                                        key: "community-card-" + e.id + "-" + n,
                                        game: e,
                                        isCommunity: t.props.directoryType === O.a.Communities,
                                        followGameCardOptions: t.props.followGameCardOptions
                                    })
                                })
                            }
                            if (t.props.names) {
                                var n = t.props.names;
                                return t.props.withAd && !t.state.adDisplayed && (n = n.slice(0, U)), n.map(function(e, n) {
                                    return i.createElement(F, {
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
                        return this.props.isScrollable ? i.createElement(S.b, null, this.renderCards(!0)) : this.renderCards(!1)
                    }, t
                }(i.Component),
                T = Object(g.b)("CommunityCardRow")(A),
                R = n("TDc0"),
                L = n("AO3T"),
                j = n("R+eK"),
                X = (n("JJ+Z"), "onboarding_game"),
                W = 100,
                P = 500,
                M = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.doneInitialRedirectCheck = !1, n.onFollow = function(e) {
                            n.props.data.updateQuery(function(t) {
                                if (t.currentUser && t.currentUser.followedGames && t.currentUser.followedGames.nodes) {
                                    var n = {
                                            id: e,
                                            name: e,
                                            __typename: "Game"
                                        },
                                        i = t.currentUser.followedGames.nodes.slice();
                                    return i.push(n), a.__assign({}, t, {
                                        currentUser: a.__assign({}, t.currentUser, {
                                            followedGames: a.__assign({}, t.currentUser.followedGames, {
                                                nodes: i
                                            })
                                        })
                                    })
                                }
                                return t
                            }), Object(L.c)(u.SpadeEventType.GameFollow, e)
                        }, n.onUnfollow = function(e) {
                            n.props.data.updateQuery(function(t) {
                                return t.currentUser && t.currentUser.followedGames && t.currentUser.followedGames.nodes ? a.__assign({}, t, {
                                    currentUser: a.__assign({}, t.currentUser, {
                                        followedGames: a.__assign({}, t.currentUser.followedGames, {
                                            nodes: t.currentUser.followedGames.nodes.filter(function(t) {
                                                return t.name !== e
                                            })
                                        })
                                    })
                                }) : t
                            }), Object(L.c)(u.SpadeEventType.GameUnfollow, e)
                        }, n.moveNextToChannelSurfing = function() {
                            r.p.history.push("/hi/surf" + location.search)
                        }, n.redirectToFrontPage = function() {
                            window.location.assign("/" + location.search)
                        }, n.onGameInputChange = function(e) {
                            e.persist(), n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), n.inputTimer = setTimeout(function() {
                                n.props.onSearchChange(e.target.value), n.inputTimer = 0
                            }, P)
                        }, n.userFollowedGamesDataLoaded = function(e) {
                            return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                        };
                        var i = r.p.experiments.getAssignment(c.b.WebOnboarding);
                        return n.state = {
                            inOnboardingExperiment: Object(R.a)(i)
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.shouldRedirect(this.props, this.state) && this.redirectToFrontPage(), r.p.setPageTitle(Object(r.d)("Welcome", "CommunitySelectionPage"))
                    }, t.prototype.componentWillUpdate = function(e, t) {
                        this.shouldRedirect(e, t) && this.redirectToFrontPage()
                    }, t.prototype.componentDidUpdate = function() {
                        this.userFollowedGamesDataLoaded(this.props) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.userFollowedGamesDataLoaded(this.props) && this.state.inOnboardingExperiment ? i.createElement(D.Bb, {
                            className: "community-selection-page",
                            "data-a-target": "community-selection-page",
                            "data-test-selector": "onboarding-community-selection",
                            background: D.r.Alt2,
                            display: D.X.Flex,
                            flexDirection: D.Aa.Column,
                            fullHeight: !0
                        }, i.createElement(D.Bb, {
                            background: D.r.Alt,
                            display: D.X.Flex,
                            alignItems: D.f.Center,
                            padding: {
                                x: 1,
                                y: 1
                            },
                            breakpointMedium: {
                                padding: {
                                    x: 2
                                }
                            },
                            justifyContent: D.Wa.Between,
                            flexShrink: 0,
                            fullWidth: !0,
                            borderBottom: !0
                        }, i.createElement(D.Xa, {
                            className: "community-selection-page__search",
                            margin: {
                                left: 1
                            },
                            flexShrink: 1,
                            attachLeft: !0
                        }, i.createElement(D.tb, {
                            id: "onboarding-community-selection__search",
                            "data-a-target": "onboarding-community-selection__search",
                            onChange: this.onGameInputChange,
                            placeholder: Object(r.d)("Search Games", "CommunitySelectionPage"),
                            spellCheck: !1
                        })), this.renderTitleText(), this.renderCTA()), i.createElement(D.kb, {
                            size: D.mb.Small,
                            value: this.calculateProgress()
                        }), i.createElement(S.b, null, i.createElement(D.Bb, {
                            background: D.r.Alt2,
                            overflow: D.cb.Hidden,
                            padding: {
                                left: 1,
                                y: 2
                            },
                            fullHeight: !0
                        }, this.renderGameCards()))) : this.props.data.error ? (r.k.warn("Data Error in Onboarding Community Selection", this.props.data.error), i.createElement(D.Xa, {
                            display: D.X.Flex
                        }, i.createElement(D.W, {
                            fontSize: D.Ca.Size5,
                            color: D.O.Alt
                        }, Object(r.d)("Hmm...having trouble loading right now.", "CommunitySelectionPage")))) : null
                    }, t.prototype.getNumFollowedGames = function() {
                        return this.props.data.currentUser.followedGames.nodes.length
                    }, t.prototype.calculateProgress = function() {
                        return Math.min(1 + this.getNumFollowedGames() / 3 * 99, 100)
                    }, t.prototype.shouldRedirect = function(e, t) {
                        return !(!this.userFollowedGamesDataLoaded(e) || !(!1 === t.inOnboardingExperiment || !this.doneInitialRedirectCheck && !e.data.currentUser || e.data.currentUser.followedGames.nodes.length >= 10)) && (this.doneInitialRedirectCheck = !0, !0)
                    }, t.prototype.renderTitleText = function() {
                        return i.createElement(D.Xa, {
                            display: D.X.Flex,
                            alignItems: D.f.Center,
                            flexDirection: D.Aa.Column,
                            flexShrink: 1
                        }, i.createElement(D.Xa, {
                            margin: {
                                top: .5,
                                x: 1
                            }
                        }, i.createElement(D.W, {
                            color: D.O.Alt,
                            fontSize: D.Ca.Size5,
                            breakpointLarge: {
                                fontSize: D.Ca.Size4
                            },
                            breakpointExtraExtraLarge: {
                                fontSize: D.Ca.Size3
                            }
                        }, Object(r.d)("First, pick three or more you’d like to watch.", "CommunitySelectionPage"))), i.createElement(D.Xa, {
                            margin: {
                                y: .5
                            },
                            display: D.X.Hide,
                            breakpointMedium: {
                                display: D.X.Block
                            }
                        }, i.createElement(D.W, {
                            color: D.O.Alt2,
                            fontSize: D.Ca.Size6,
                            breakpointLarge: {
                                fontSize: D.Ca.Size5
                            },
                            breakpointExtraExtraLarge: {
                                fontSize: D.Ca.Size4
                            }
                        }, Object(r.d)("We have tons of games, hobbies, and activities being streamed right now.", "CommunitySelectionPage"))))
                    }, t.prototype.renderCTA = function() {
                        return i.createElement(D.Xa, {
                            margin: {
                                right: 1
                            },
                            attachRight: !0
                        }, i.createElement(D.z, {
                            size: D.D.Large,
                            "data-test-selector": "onboarding_cta",
                            disabled: this.getNumFollowedGames() < 3,
                            onClick: this.moveNextToChannelSurfing
                        }, Object(r.d)("Next", "CommunitySelectionPage")))
                    }, t.prototype.renderGameCards = function() {
                        if (this.props.gameData) {
                            var e = {
                                onFollow: this.onFollow,
                                onUnfollow: this.onUnfollow
                            };
                            return i.createElement(T, {
                                games: this.props.gameData,
                                directoryType: O.a.Games,
                                cardSize: D.Yb.Small,
                                followGameCardOptions: e,
                                placeholderItems: 99
                            })
                        }
                    }, t
                }(i.Component),
                z = Object(b.compose)(Object(l.a)(j, {
                    options: {
                        variables: {
                            limit: 10
                        }
                    }
                }), Object(g.b)("CommunitySelectionPageComponent"))(M),
                q = "285x380";
            var V = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            searching: !1
                        }, n.getData = function() {
                            return n.state.searching && n.state.searchGameResults ? n.state.searchGameResults.map(function(e) {
                                return n.mapDataToGame(e.title, e.popularity, e.id)
                            }) : n.gameDataLoaded() ? n.props.data.games.edges.map(function(e) {
                                return {
                                    id: e.node.id,
                                    name: e.node.name,
                                    boxArtURL: e.node.boxArtURL,
                                    viewersCount: e.node.viewersCount
                                }
                            }) : void 0
                        }, n.gameDataLoaded = function() {
                            return n.props.data && !n.props.data.loading && !n.props.data.error && n.props.data.games && n.props.data.games.edges
                        }, n.onSearchChange = function(e) {
                            e ? (n.setState({
                                searching: !0
                            }), n.doGameSearch(e).then(function() {})) : n.setState({
                                searching: !1
                            })
                        }, n.doGameSearch = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t, n, i, o;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            t = Object(d.a)(), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(f.a.Games, e, t, {
                                                hitsPerPage: W
                                            })];
                                        case 2:
                                            return (n = a.sent()) && (i = Object(v.b)({
                                                searchResults: n
                                            }), this.setState({
                                                searchGameResults: i.currentGameResults ? i.currentGameResults.results : []
                                            })), [3, 4];
                                        case 3:
                                            return o = a.sent(), r.k.error(o, "Algolia top results search failed"), this.setState({
                                                searchGameResults: []
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.mapDataToGame = function(e, t, n) {
                            return {
                                id: n || e.toString(),
                                name: e,
                                boxArtURL: k.a + "/" + encodeURIComponent(e) + "-" + q + ".jpg",
                                viewersCount: t
                            }
                        }, n.searchClient = new h.a({
                            appId: r.a.algoliaApplicationID,
                            apiKey: r.a.algoliaAPIKey,
                            apolloClient: r.p.apollo.client,
                            logger: r.k,
                            config: r.a,
                            stats: r.p.stats
                        }), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (!this.props.isLoggedIn) return this.props.latencyTracking.reportInteractive(), void window.location.assign("/" + location.search);
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return i.createElement(z, {
                            gameData: this.getData(),
                            onSearchChange: this.onSearchChange
                        })
                    }, t = a.__decorate([Object(l.a)(y, {
                        options: function(e) {
                            var t = "enabled" === r.p.experiments.getAssignment(c.b.LocalizeOnboardingGamesQuery);
                            return {
                                variables: {
                                    limit: W,
                                    locale: t ? e.locale : void 0
                                }
                            }
                        },
                        skip: function(e) {
                            return !e.isLoggedIn
                        }
                    }), Object(s.a)({
                        location: u.PageviewLocation.OnboardingCommunitySelection
                    }), Object(g.b)("CommunitySelectionPage", {
                        destination: m.a.OnboardingIndex
                    })], t)
                }(i.Component),
                B = Object(o.connect)(function(e) {
                    return {
                        isLoggedIn: Object(p.f)(e),
                        locale: Object(p.d)(e)
                    }
                })(V),
                H = n("wIs1"),
                Q = n("jKe7"),
                $ = n("2INN"),
                K = n("ZS2+"),
                Z = n("/8Zs"),
                J = n("W2HU"),
                Y = (n("T6t+"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.isLoggedIn ? i.createElement(D.Pa, {
                            position: D.hb.Relative,
                            attachTop: !0,
                            fullWidth: !0
                        }, i.createElement("nav", {
                            className: "top-nav",
                            "data-a-target": "top-nav-container"
                        }, i.createElement(D.Xa, {
                            className: "top-nav__menu",
                            display: D.X.Flex,
                            alignItems: D.f.Stretch,
                            flexWrap: D.Ba.NoWrap,
                            fullHeight: !0
                        }, i.createElement(D.Pa, {
                            display: D.X.InlineFlex,
                            alignItems: D.f.Center,
                            flexShrink: 0
                        }, i.createElement("span", {
                            className: "top-nav__home-link"
                        }, i.createElement(D.qb, {
                            asset: D.rb.LogoGlitch,
                            width: 30,
                            height: 30
                        }))), i.createElement(D.Xa, {
                            className: "top-nav__nav-items-container",
                            display: D.X.Flex,
                            flexGrow: 1,
                            flexWrap: D.Ba.NoWrap,
                            flexShrink: 0
                        }, ""), i.createElement(D.Xa, {
                            className: "top-nav__nav-items-container",
                            display: D.X.Flex,
                            alignItems: D.f.Stretch,
                            flexWrap: D.Ba.NoWrap,
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(J.a, {
                            isOnboarding: !0
                        }))))) : (r.k.warn("OnboardingTopNavComponent is only meant to be used for logged in users."), null)
                    }, t = a.__decorate([Object(g.b)("OnboardingTopNav")], t)
                }(i.Component));
            var ee = Object(o.connect)(function(e) {
                    return {
                        isLoggedIn: Object(p.f)(e)
                    }
                })(Y),
                te = K.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(165)]).then(n.bind(null, "6tis"))
                }, "ChannelSurfingPage"),
                ne = K.a.wrap(function() {
                    return Promise.resolve().then(n.bind(null, "8n14"))
                }, "CommunitySelectionPage"),
                ae = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.isLoggedIn || window.location.assign("/" + location.search)
                    }, t.prototype.render = function() {
                        return i.createElement(D.Xa, {
                            display: D.X.Flex,
                            flexDirection: D.Aa.Column,
                            flexWrap: D.Ba.NoWrap,
                            fullHeight: !0,
                            fullWidth: !0
                        }, i.createElement(ee, null), i.createElement(D.Xa, {
                            display: D.X.Flex,
                            flexWrap: D.Ba.NoWrap,
                            position: D.hb.Relative,
                            fullHeight: !0,
                            fullWidth: !0
                        }, i.createElement(D.Pa, {
                            overflow: D.cb.Hidden,
                            position: D.hb.Relative,
                            display: D.X.Flex,
                            flexDirection: D.Aa.Column,
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0
                        }, i.createElement("main", {
                            className: Z.a
                        }, i.createElement(Q.a, null, i.createElement($.a, {
                            path: "/hi/surf",
                            component: te
                        }), i.createElement($.a, {
                            path: "/hi",
                            component: ne
                        }))))))
                    }, t = a.__decorate([Object(g.b)("OnboardingRoot", {
                        autoReportInteractive: !0
                    })], t)
                }(i.Component);
            var ie = Object(H.a)(Object(o.connect)(function(e) {
                return {
                    isLoggedIn: Object(p.f)(e)
                }
            })(ae));
            n.d(t, "CommunitySelectionPage", function() {
                return B
            }), n.d(t, "OnboardingRoot", function() {
                return ie
            })
        },
        "8zqa": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "MinimalTopNav_MinimalUser"
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
                                        value: "displayName"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 93
                }
            };
            n.loc.source = {
                body: "query MinimalTopNav_MinimalUser {\ncurrentUser {\nid\ndisplayName\nprofileImageURL(width: 70)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        AO3T: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return d
            });
            var a, i, o = n("/7QA"),
                r = n("2xye");
            ! function(e) {
                e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
            }(a || (a = {})),
            function(e) {
                e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed"
            }(i || (i = {}));
            var l = function(e) {
                    var t = {
                        source: e.source,
                        action: i.Start
                    };
                    o.o.track(r.SpadeEventType.OnboardingEvent, t)
                },
                s = function() {
                    var e = {
                        source: a.HomepageCTA,
                        action: i.Completed
                    };
                    o.o.track(r.SpadeEventType.OnboardingEvent, e)
                },
                d = function(e, t) {
                    var n = {
                        src: r.SpadeEventType.OnboardingEvent,
                        game: t
                    };
                    o.o.track(e, n)
                }
        },
        AXwV: function(e, t, n) {},
        "JJ+Z": function(e, t, n) {},
        "R+eK": function(e, t) {
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
        "T6t+": function(e, t, n) {},
        TDc0: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "b", function() {
                    return o
                }),
                function(e) {
                    e.NoSkip = "no_skip"
                }(a || (a = {}));
            var i = function(e) {
                    return e === a.NoSkip
                },
                o = function(e) {
                    return e.getTime() >= r().getTime()
                },
                r = function() {
                    return new Date((new Date).getTime() - 12096e5)
                }
        },
        Uive: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                i = n("mrSG"),
                o = n("q1tI"),
                r = n("/7QA"),
                l = n("N0BP"),
                s = n("MPw5"),
                d = n("cTNz"),
                c = n("KxT4"),
                m = n("YUvD"),
                u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
                p = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
                g = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.logger = r.k.withCategory("ad-slot"), n.createSlot = function(e) {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (this.state.slotCreated) return [2];
                                            this.setState({
                                                slotCreated: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, s.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable, e.gdpr.blockConsentRequiredContent)];
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
                                                autoEnable: e.autoEnable,
                                                blockConsentRequiredContent: e.gdpr.blockConsentRequiredContent
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
                                var a;
                                if (n.props.slotID === d.b.directory.banner) return void((a = n.slotRef.querySelector(u)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }));
                                if (n.props.slotID === d.b.directory.rectangle) return void((a = n.slotRef.querySelector(p)) && 1 !== a.clientWidth && n.setState({
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
                        }, n.shouldCreateSlot = function(e) {
                            return e.gdpr.status !== c.b.Loading && e.trackingSet
                        }, n.state = {
                            shouldDisplay: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        d.g.addListener(d.f, this.onSlotRenderEnd), this.shouldCreateSlot(this.props) ? (this.logger.debug("Consent ready. Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Consent not ready or Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.state.slotCreated || (!this.shouldCreateSlot(e) || e.gdpr.status === this.props.gdpr.status && e.trackingSet === this.props.trackingSet ? this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID) : (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)))
                    }, t.prototype.componentWillUnmount = function() {
                        this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), d.g.removeListener(d.f, this.onSlotRenderEnd), this.state.slot && s.a.destroySlot(this.state.slot)
                    }, t.prototype.shouldComponentUpdate = function(e, t) {
                        return t.shouldDisplay !== this.state.shouldDisplay
                    }, t.prototype.render = function() {
                        var e = i.__assign({}, this.props.injectStyles);
                        return this.state.shouldDisplay || (e.display = "none"), o.createElement("div", i.__assign({
                            style: e,
                            id: this.props.slotID,
                            ref: this.setRef
                        }, Object(l.a)(this.props)))
                    }, t
                }(o.Component),
                f = Object(m.a)(c.c.Amazon)(g);
            var h = Object(a.connect)(function(e) {
                return {
                    trackingSet: e.ads.trackingSet
                }
            })(f);
            n.d(t, "a", function() {
                return h
            })
        },
        W2HU: function(e, t, n) {
            "use strict";
            var a, i = n("/MKj"),
                o = n("fvjX"),
                r = n("1/iK"),
                l = n("y5D0"),
                s = n("jZLd"),
                d = n("kRBY"),
                c = n("mrSG"),
                m = n("TSYQ"),
                u = n("q1tI"),
                p = n("/7QA"),
                g = n("u5aL"),
                f = n("yR8l"),
                h = n("/0dD"),
                v = n("76Lv"),
                k = n("GnwI"),
                y = n("Ue10"),
                b = n("8zqa");
            n("2mE7");
            ! function(e) {
                e.DarkModeToggle = "minimal-user__dark-mode-toggle", e.DropdownDown = "minimal-user__dropdown-down", e.UserMenu = "minimal-user__user-menu-toggle", e.Logout = "minimal-user__logout", e.Login = "minimal-user__login"
            }(a || (a = {}));
            var S = function(e) {
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
                        }, n.onLoginClick = function(e) {
                            e.preventDefault(), n.props.login()
                        }, n.onLogoutClick = function(e) {
                            e.preventDefault(), n.props.logout()
                        }, n.onDarkModeCheckboxClick = function() {
                            var e = n.props.theme === h.a.Dark ? h.a.Light : h.a.Dark;
                            n.props.changeTheme(e, s.a.UserMenu)
                        }, n.state = {
                            dropdownOpen: !1
                        }, n
                    }
                    return c.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || !this.props.data.currentUser || this.props.data.error) return u.createElement(y.gb, null);
                        if (this.props.isOnboarding) return u.createElement(y.Xa, {
                            display: y.X.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, u.createElement(y.Xa, {
                            display: y.X.Flex,
                            flexWrap: y.Ba.NoWrap,
                            alignItems: y.f.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, u.createElement(y.Xa, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, u.createElement(y.Xa, null, this.renderAvatar())), u.createElement(y.Xa, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: y.Aa.Column,
                            ellipsis: !0
                        }, u.createElement(y.W, {
                            className: "minimal-top-nav__username",
                            ellipsis: !0
                        }, this.props.data.currentUser.displayName))));
                        if (this.props.isLoggedIn) {
                            var e = null;
                            this.props.darkModeEnabled && (e = u.createElement(y.Bb, {
                                borderBottom: !0,
                                margin: {
                                    y: 1
                                }
                            }, u.createElement(y.Xa, {
                                margin: {
                                    x: 2,
                                    bottom: 1
                                }
                            }, u.createElement(y.N, {
                                id: "dark-mode-toggle",
                                label: Object(p.d)("Dark Mode", "MinimalUser"),
                                "data-a-target": "dark-mode-toggle",
                                "data-test-selector": a.DarkModeToggle,
                                "data-a-value": this.props.theme,
                                checked: this.props.theme === h.a.Dark,
                                onChange: this.onDarkModeCheckboxClick
                            }))));
                            var t = m(Object(v.b)(h.a.Dark), {
                                    "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                                }),
                                n = m({
                                    "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                                }, {
                                    "minimal-top-nav__dropdown": !this.state.dropdownOpen
                                });
                            return u.createElement(g.a, {
                                onClickOut: this.onClickOut,
                                className: t
                            }, u.createElement(y.Xa, {
                                display: y.X.Flex,
                                className: "minimal-top-nav__user",
                                fullHeight: !0
                            }, u.createElement(y.Ua, {
                                onClick: this.onCardClick,
                                "data-test-selector": a.UserMenu
                            }, u.createElement(y.Xa, {
                                display: y.X.Flex,
                                flexWrap: y.Ba.NoWrap,
                                alignItems: y.f.Center,
                                flexGrow: 1,
                                padding: {
                                    right: 1
                                },
                                fullHeight: !0
                            }, u.createElement(y.Xa, {
                                margin: {
                                    x: 1
                                },
                                flexShrink: 0
                            }, u.createElement(y.Xa, null, this.renderAvatar())), u.createElement(y.Xa, {
                                flexGrow: 1,
                                flexShrink: 1,
                                flexDirection: y.Aa.Column,
                                ellipsis: !0
                            }, u.createElement(y.W, {
                                className: "minimal-top-nav__username",
                                "data-a-target": "user-display-name",
                                ellipsis: !0
                            }, this.props.data.currentUser.displayName)), u.createElement(y.Bb, {
                                display: y.X.Flex,
                                flexShrink: 0,
                                className: "minimal-top-nav__expand"
                            }, u.createElement(y.qb, {
                                asset: y.rb.GlyphArrDown
                            }))))), u.createElement(y.Bb, {
                                fullWidth: !0,
                                overflow: y.cb.Hidden,
                                position: y.hb.Absolute,
                                padding: {
                                    y: 1
                                },
                                background: y.r.Base,
                                className: n,
                                "data-test-selector": a.DropdownDown
                            }, e, u.createElement(y.Ua, {
                                onClick: this.onLogoutClick,
                                "data-test-selector": a.Logout
                            }, u.createElement(y.Bb, {
                                color: y.O.Alt,
                                display: y.X.Flex,
                                alignItems: y.f.Center,
                                padding: {
                                    x: 2,
                                    y: .5
                                }
                            }, u.createElement(y.Xa, {
                                display: y.X.Flex,
                                alignItems: y.f.Center,
                                margin: {
                                    right: 1
                                }
                            }, u.createElement(y.qb, {
                                asset: y.rb.NavLogout,
                                height: 20,
                                width: 20
                            })), u.createElement(y.W, null, Object(p.d)("Log Out", "MinimalUser"))))))
                        }
                        return u.createElement(y.Xa, {
                            margin: 1
                        }, u.createElement(y.z, {
                            onClick: this.onLoginClick,
                            "data-test-selector": a.Login
                        }, Object(p.d)("Log in", "MinimalUser")))
                    }, t.prototype.renderAvatar = function() {
                        return this.props.data.currentUser ? u.createElement(y.q, {
                            size: 30,
                            src: this.props.data.currentUser.profileImageURL,
                            alt: Object(p.d)("Your Avatar", "Minimaluser")
                        }) : null
                    }, t.prototype.reportInteractive = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t
                }(u.Component),
                w = Object(o.compose)(Object(k.b)("MinimalUser"), Object(f.a)(b))(S);
            var C = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(d.f)(e),
                    theme: e.ui.theme
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    logout: l.f,
                    login: function() {
                        return l.e(r.a.TopNavLoginButton)
                    },
                    changeTheme: s.b
                }, e)
            })(w);
            n.d(t, "a", function() {
                return C
            })
        },
        bSYX: function(e, t) {
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
        "g3/t": function(e, t) {
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
        jkql: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CommunitySelectionPage"
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
                                value: "locale"
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
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "locale"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "locale"
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
                                                        value: "viewersCount"
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
                    end: 176
                }
            };
            n.loc.source = {
                body: "query CommunitySelectionPage($limit: Int $locale: String) {\ngames(first: $limit locale: $locale) {\nedges {\nnode {\nid\nname\nboxArtURL(width: 285 height: 380)\nviewersCount\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        rShu: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Games = "GAMES", e.Communities = "COMMUNITIES"
                }(a || (a = {}))
        },
        roU9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            });
            var a = "//static-cdn.jtvnw.net/ttv-boxart",
                i = "52x72"
        },
        yziQ: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                o = n("yR8l"),
                r = n("geRD"),
                l = n("G1cX");

            function s(e, t, n, a) {
                void 0 === n && (n = {});
                var i = e.readQuery({
                    query: t,
                    variables: n
                });
                if (i) {
                    var o = l(i, function(e) {
                        return e
                    }, function(e) {
                        return a(e)
                    });
                    e.writeQuery({
                        query: t,
                        variables: n,
                        data: o
                    })
                }
            }
            var d = n("Ue10"),
                c = n("4ErZ"),
                m = n("bSYX"),
                u = (n("AXwV"), n("g3/t"));
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(d.Pa, {
                        position: d.hb.Relative,
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement("div", a.__assign({
                        className: "follow-game-card",
                        "data-test-selector": "follow-game-card",
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onClick: this.onClick
                    }, Object(d.fc)(this.props)), i.createElement(d.G, {
                        key: this.props.title
                    }, i.createElement(d.Xa, {
                        position: d.hb.Relative
                    }, this.renderOverlay(), i.createElement(d.I, {
                        aspect: d.p.Aspect3x4,
                        alt: this.props.imageAlt,
                        src: this.props.imageSrc
                    })), i.createElement(d.H, null, i.createElement(d.Xa, {
                        margin: {
                            top: .5,
                            bottom: 1
                        }
                    }, i.createElement(d.W, {
                        color: d.O.Base,
                        fontSize: d.Ca.Size5
                    }, this.props.title), i.createElement(d.W, {
                        color: d.O.Alt,
                        fontSize: d.Ca.Size6
                    }, this.props.info))))))
                }, t.prototype.renderOverlay = function() {
                    var e, t = this.isFollowing();
                    return this.state.inProgress ? e = i.createElement(d.Za, {
                        delay: 0
                    }) : this.state.hovered ? e = i.createElement(d.qb, {
                        width: 50,
                        height: 50,
                        asset: t ? d.rb.Unheart : d.rb.Heart
                    }) : t && (e = i.createElement(d.qb, {
                        width: 50,
                        height: 50,
                        asset: d.rb.Heart
                    })), e ? i.createElement(d.Bb, {
                        className: "follow-game-card__overlay " + (t ? "follow-game-card__overlay--followed" : ""),
                        background: d.r.Overlay,
                        color: d.O.Overlay,
                        "data-a-target": t ? "follow-game-card--followed" : "",
                        display: d.X.Flex,
                        alignItems: d.f.Center,
                        justifyContent: d.Wa.Center,
                        position: d.hb.Absolute,
                        zIndex: d.ec.Above,
                        attachBottom: !0,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, e) : null
                }, t.prototype.followGame = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n = this;
                        return a.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    t = a.__assign({}, Object(r.a)({
                                        gameID: e
                                    }), {
                                        update: function(e, t) {
                                            var a = t.data.followGame;
                                            s(e, m, {
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
                                    }), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, this.props.followGame(t)];
                                case 2:
                                    return i.sent(), this.setState({
                                        inProgress: !1
                                    }, function() {
                                        n.props.onFollow && n.props.onFollow(n.props.title)
                                    }), [3, 4];
                                case 3:
                                    return i.sent(), this.setState({
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
                        return a.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    t = a.__assign({}, Object(r.a)({
                                        gameID: e
                                    }), {
                                        update: function(e, t) {
                                            var a = t.data.unfollowGame;
                                            s(e, m, {
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
                                    }), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, this.props.unfollowGame(t)];
                                case 2:
                                    return i.sent(), this.setState({
                                        inProgress: !1
                                    }, function() {
                                        n.props.onUnfollow && n.props.onUnfollow(n.props.title)
                                    }), [3, 4];
                                case 3:
                                    return i.sent(), this.setState({
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
                }, t = a.__decorate([Object(o.a)(m, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                }), Object(o.a)(c, {
                    name: "followGame"
                }), Object(o.a)(u, {
                    name: "unfollowGame"
                })], t)
            }(i.Component)
        }
    }
]);