webpackJsonp([72], {
    "+I3D": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("U7vG"),
            i = n("6sO2"),
            o = n("CSlQ"),
            s = n("XhYx"),
            l = n("2qz3"),
            m = n("Odds"),
            d = "onboarding-follow-category-button-component",
            c = function(e) {
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
                        "data-test-selector": d,
                        icon: m._11.Heart,
                        onClick: this.onUnfollow,
                        statusAlertIcon: m._11.Unheart
                    });
                    var e = Object(i.d)("Follow All", "OnboardingFollowCategory");
                    return r.createElement(m.u, {
                        icon: m._11.Heart,
                        ariaLabel: e,
                        "data-test-selector": d,
                        onClick: this.onFollow
                    }, e)
                }, t
            }(r.Component),
            u = n("DBTH"),
            p = n("v5ho"),
            g = "community-category__title",
            f = 3,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        categoryChange: null,
                        isFollowCategoriesExperimentEnabled: !1
                    }, t.renderCategoryContent = function() {
                        if (t.props.withStreams) {
                            var e = t.props.data.games.slice(0, f);
                            return r.createElement(l.a, {
                                names: e,
                                withAd: t.props.withAd,
                                directoryType: p.a.Games,
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
                            directoryType: p.a.Games,
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
                                    return [4, i.n.experiments.getAssignment(u.l)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        isFollowCategoriesExperimentEnabled: e === u.d.ENABLED
                                    }), this.props.latencyTracking.reportInteractive(), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return r.createElement(m.V, {
                        "data-test-selector": "community-category",
                        flexShrink: 0
                    }, r.createElement(m.V, {
                        alignItems: m.c.Center,
                        display: m.H.Flex,
                        flexWrap: m.K.NoWrap
                    }, r.createElement(m.V, {
                        margin: {
                            x: 1,
                            bottom: .5
                        }
                    }, r.createElement(m._23, {
                        "data-test-selector": g,
                        color: m.F.Base,
                        fontSize: m.L.Size3,
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
                    }(this.props.data.name))), this.state.isFollowCategoriesExperimentEnabled && !this.props.withStreams && !this.props.withBoxArtGameCards && r.createElement(m._19, {
                        margin: {
                            left: 2
                        }
                    }, r.createElement(c, {
                        category: this.props.data,
                        onFollowCategoryChange: this.onFollowCategoryChange,
                        isFollowingAllGamesInCategory: this.props.isFollowingAllGamesInCategory
                    }))), r.createElement(m.V, null, r.createElement(m.Q, {
                        flexGrow: 1
                    }, this.renderCategoryContent())))
                }, t
            }(r.Component),
            y = Object(o.d)("CommunityCategory")(h);
        n.d(t, !1, function() {
            return "community-category"
        }), n.d(t, !1, function() {
            return g
        }), n.d(t, !1, function() {
            return h
        }), n.d(t, "a", function() {
            return y
        })
    },
    "2b/B": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            r = n("2KeS"),
            i = n("+xm8"),
            o = n("f2i/"),
            s = n("NikC"),
            l = n("Aj/L"),
            m = n("TToO"),
            d = n("HW6M"),
            c = n("U7vG"),
            u = n("6sO2"),
            p = n("rCmJ"),
            g = n("7vx8"),
            f = n("NXs7"),
            h = n("VAT8"),
            y = n("CSlQ"),
            v = n("Odds"),
            k = n("Kkxm"),
            b = (n("e6tx"), function(e) {
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
                        var e = n.props.theme === f.a.Dark ? f.a.Light : f.a.Dark;
                        n.props.changeTheme(e, s.a.UserMenu)
                    }, n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return c.createElement(v._3, null);
                    if (this.props.isOnboarding) return c.createElement(v.V, {
                        display: v.H.Flex,
                        className: "minimal-top-nav__user",
                        fullHeight: !0
                    }, c.createElement(v.V, {
                        display: v.H.Flex,
                        flexWrap: v.K.NoWrap,
                        alignItems: v.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0
                    }, c.createElement(v.V, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, c.createElement(v.V, null, c.createElement(v.l, {
                        size: 30,
                        imageSrc: this.props.data.currentUser.profileImageURL,
                        imageAlt: "User avatar"
                    }))), c.createElement(v.V, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: v.J.Column,
                        ellipsis: !0
                    }, c.createElement(v._19, {
                        className: "minimal-top-nav__username"
                    }, this.props.data.currentUser.displayName))));
                    if (this.props.isLoggedIn) {
                        var e = null;
                        this.props.darkModeEnabled && (e = c.createElement(v._19, {
                            borderBottom: !0,
                            margin: {
                                y: 1
                            }
                        }, c.createElement(v.V, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, c.createElement(v.E, {
                            id: "dark-mode-toggle",
                            label: Object(u.d)("Dark Mode", "MinimalUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === f.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }))));
                        var t = d(Object(h.c)(f.a.Dark), {
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }),
                            n = d({
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }, {
                                "minimal-top-nav__dropdown": !this.state.dropdownOpen
                            });
                        return c.createElement(p.a, {
                            onClickOut: this.onClickOut,
                            className: t
                        }, c.createElement(v.V, {
                            display: v.H.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, c.createElement(v.T, {
                            onClick: this.onCardClick,
                            "data-test-selector": "user-menu-toggle"
                        }, c.createElement(v.V, {
                            display: v.H.Flex,
                            flexWrap: v.K.NoWrap,
                            alignItems: v.c.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, c.createElement(v.V, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, c.createElement(v.V, null, c.createElement(v.l, {
                            size: 30,
                            imageSrc: this.props.data.currentUser.profileImageURL,
                            imageAlt: "User avatar"
                        }))), c.createElement(v.V, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: v.J.Column,
                            ellipsis: !0
                        }, c.createElement(v._19, {
                            className: "minimal-top-nav__username"
                        }, this.props.data.currentUser.displayName)), c.createElement(v._19, {
                            display: v.H.Flex,
                            flexShrink: 0,
                            className: "minimal-top-nav__expand"
                        }, c.createElement(v._10, {
                            asset: v._11.GlyphArrDown
                        }))))), c.createElement(v._19, {
                            fullWidth: !0,
                            overflow: v._0.Hidden,
                            position: v._4.Absolute,
                            padding: {
                                y: 1
                            },
                            background: v.m.Base,
                            className: n,
                            "data-test-selector": "dropdown-down"
                        }, e, c.createElement(v.T, {
                            onClick: this.onLogoutClick
                        }, c.createElement(v._19, {
                            color: v.F.Alt,
                            display: v.H.Flex,
                            alignItems: v.c.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, c.createElement(v.V, {
                            display: v.H.Flex,
                            alignItems: v.c.Center,
                            margin: {
                                right: 1
                            }
                        }, c.createElement(v._10, {
                            asset: v._11.NavLogout,
                            height: 18,
                            width: 18
                        })), c.createElement(v._23, null, Object(u.d)("Log Out", "MinimalUser"))))))
                    }
                    return c.createElement(v.V, {
                        margin: 1
                    }, c.createElement(v.u, {
                        onClick: this.onLoginClick
                    }, Object(u.d)("Log in", "MinimalUser")))
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = m.__decorate([Object(y.d)("MinimalUser"), Object(g.a)(k)], t)
            }(c.Component)),
            S = Object(a.b)(function(e) {
                return {
                    isLoggedIn: Object(l.d)(e),
                    theme: e.ui.theme
                }
            }, function(e) {
                return Object(r.b)({
                    logout: o.g,
                    login: function() {
                        return o.f(i.a.TopNavLoginButton)
                    },
                    changeTheme: s.b
                }, e)
            })(b);
        n.d(t, "a", function() {
            return S
        })
    },
    "2qz3": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("U7vG"),
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
            f = n("S4HN"),
            h = n("AadB"),
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
                            action: f.a.Impression,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(f.c)(e)
                    }, t.trackClickEvent = function() {
                        var e = {
                            channel_id: t.props.streamNode.id,
                            action: f.a.Click,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(f.c)(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : g.i.warn("<StreamThumbnailWithTrackingComponent /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return r.createElement("div", {
                        onClick: this.trackClickEvent
                    }, r.createElement(y.V, {
                        refDelegate: this.setRef
                    }, r.createElement(h.b, {
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
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderStream = function() {
                        return t.props.data ? r.createElement(y.V, {
                            "data-test-selector": b,
                            position: y._4.Relative
                        }, r.createElement(y.V, {
                            padding: .5,
                            position: y._4.Absolute,
                            zIndex: y._39.Above
                        }, r.createElement(c.a, {
                            type: u.a.Live
                        })), r.createElement(v, {
                            key: t.props.data.id,
                            trackingMedium: t.props.trackingMedium,
                            directoryName: t.props.directoryName,
                            directoryType: t.props.directoryType,
                            streamIndex: t.props.index,
                            streamNode: t.props.data
                        })) : r.createElement(y.V, {
                            "data-test-selector": k,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(y.V, {
                            margin: {
                                bottom: .5
                            }
                        }, r.createElement(y.j, {
                            ratio: y.k.Aspect16x9
                        }, r.createElement(y._3, null))), r.createElement(y._23, null, r.createElement(y._3, {
                            width: 150
                        })), r.createElement(y._23, {
                            fontSize: y.L.Size7
                        }, r.createElement(y._3, {
                            width: 100
                        })))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(y.V, null, this.renderStream())
                }, t
            }(r.Component),
            _ = n("eqtY"),
            C = function(e) {
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
                    return r.createElement(S, {
                        data: e,
                        index: this.props.index,
                        directoryName: t,
                        directoryType: this.props.directoryType,
                        trackingMedium: this.props.trackingMedium
                    })
                }, t = a.__decorate([Object(l.a)(_, {
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
            w = "community-streams-row__ad",
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.renderStreamGridWithAdSlot = function() {
                        var e = r.createElement(y.V, {
                                key: "ad",
                                "data-test-selector": w,
                                display: y.H.Flex,
                                flexGrow: 1,
                                justifyContent: y.U.Center,
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
                                return r.createElement(y.G, {
                                    key: "stream-" + t.toString(),
                                    cols: 4
                                }, e)
                            });
                        return n.splice(2, 0, e), r.createElement(y.V, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(y.O, {
                            gutterSize: y.P.Medium
                        }, n))
                    }, t.renderStreams = function() {
                        if (t.props.data) {
                            var e = t.props.data;
                            return t.props.withAd && t.state.adDisplayed && (e = e.slice(0, 2)), e.map(function(e, n) {
                                return r.createElement(S, {
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
                                return r.createElement(C, {
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
                    return r.createElement(y.V, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(y._34, {
                        gutterSize: y._36.Small,
                        childWidth: y._35.Large,
                        placeholderItems: e,
                        noWrap: !0
                    }, this.renderStreams()))
                }, t
            }(r.Component),
            N = Object(s.d)("CommunityStreamsRow")(E);
        n.d(t, !1, function() {
            return w
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

        function a(e, t, n, a) {
            void 0 === n && (n = {});
            var r = e.readQuery({
                query: t,
                variables: n
            });
            if (r) {
                var i = l(r, function(e) {
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
        var r = n("TToO"),
            i = n("U7vG"),
            o = n("7vx8"),
            s = n("oIkB"),
            l = n("LIeg"),
            m = n("Odds"),
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
                    return r.__awaiter(t, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
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
            return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                !e.categoryChange || this.props.categoryChange && this.props.categoryChange.timestampMs === e.categoryChange.timestampMs || !e.categoryChange.category.games.includes(this.props.title) || this.isFollowing() !== e.categoryChange.shouldFollow && this.onClick()
            }, t.prototype.render = function() {
                var e;
                return this.state.inProgress ? e = i.createElement("div", {
                    className: "follow-game-card__overlay"
                }, i.createElement(m.Z, {
                    fillContent: !0
                })) : this.state.hovered ? e = i.createElement("div", {
                    className: "follow-game-card__overlay"
                }, i.createElement(m._10, {
                    width: 50,
                    height: 50,
                    asset: this.isFollowing() ? m._11.Unheart : m._11.Heart
                })) : this.isFollowing() && (e = i.createElement("div", {
                    className: "follow-game-card__overlay follow-game-card__overlay--followed",
                    "data-a-target": "follow-game-card--followed"
                }, i.createElement(m._10, {
                    width: 50,
                    height: 50,
                    asset: m._11.Heart
                }))), i.createElement(m.Q, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement("div", r.__assign({
                    className: "follow-game-card",
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    onClick: this.onClick
                }, Object(m._40)(this.props)), i.createElement(m.A, {
                    key: this.props.title
                }, i.createElement(m.V, {
                    position: m._4.Relative
                }, e, i.createElement(m.C, {
                    aspect: m.k.Aspect3x4,
                    imageAlt: this.props.imageAlt,
                    imageSrc: this.props.imageSrc
                })), i.createElement(m.B, null, i.createElement(m.V, {
                    margin: {
                        top: .5,
                        bottom: 1
                    }
                }, i.createElement(m._23, {
                    color: m.F.Base,
                    fontSize: m.L.Size5
                }, this.props.title), i.createElement(m._23, {
                    color: m.F.Alt,
                    fontSize: m.L.Size6
                }, this.props.info))))))
            }, t.prototype.followGame = function(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return r.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.__assign({}, Object(s.a)({
                                    gameID: e
                                }), {
                                    update: function(e, t) {
                                        var r = t.data.followGame;
                                        a(e, c, {
                                            name: n.props.title
                                        }, function(e) {
                                            return e.game && r && r.game ? (e.game.self.follow = r.game.self.follow, e) : e
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
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, n = this;
                    return r.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                t = r.__assign({}, Object(s.a)({
                                    gameID: e
                                }), {
                                    update: function(e, t) {
                                        var r = t.data.unfollowGame;
                                        a(e, c, {
                                            name: n.props.title
                                        }, function(e) {
                                            return e.game && r && r.game ? (e.game.self.follow = r.game.self.follow, e) : e
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
            }, t = r.__decorate([Object(o.a)(c, {
                options: function(e) {
                    return {
                        variables: {
                            name: e.title
                        }
                    }
                }
            }), Object(o.a)(d, {
                name: "followGame"
            }), Object(o.a)(u, {
                name: "unfollowGame"
            })], t)
        }(i.Component)
    },
    "7rq1": function(e, t) {},
    "7tMz": function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                latencyTracking: function(e, t) {
                    return new l.a(e, t)
                }(e),
                rootLatencyTracker: r()
            }
        }

        function r() {
            return new l.a("Root")
        }

        function i(e, t) {
            return function(t) {
                return function(n) {
                    function r() {
                        return null !== n && n.apply(this, arguments) || this
                    }
                    return o.__extends(r, n), r.prototype.render = function() {
                        return s.createElement(t, o.__assign({}, this.props, a(e)))
                    }, r
                }(s.Component)
            }
        }
        var o = n("TToO"),
            s = n("U7vG"),
            l = n("75D5");
        n("MRMr");
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return i
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
                        return [2, n.e(79).then(n.bind(null, "Revh"))]
                    })
                })
            }
    },
    AadB: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("U7vG"),
            i = n("6sO2"),
            o = n("+GT7"),
            s = n("SZoP"),
            l = n("NY9D"),
            m = n("vH/s"),
            d = n("v5ho"),
            c = n("RH2O"),
            u = n("2KeS"),
            p = n("V5M+"),
            g = n("jetF"),
            f = n("7vx8"),
            h = n("CSlQ"),
            y = n("3zLD"),
            v = n("+8VM"),
            k = n("oIkB"),
            b = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(i.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(i.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(i.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(i.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(i.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(i.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            },
            S = n("Odds"),
            _ = n("nC3l"),
            C = (n("sJt0"), "error-message"),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? r.createElement(S.V, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(S._23, {
                            color: S.F.Error,
                            type: S._28.H4,
                            "data-test-selector": C
                        }, b(t.state.error))) : null
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
                                        return this.props.banUserFromCommunity ? (e = a.__assign({}, Object(k.a)({
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
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (i.n.tracking.track(m.SpadeEventType.CommunityModeration, {
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
                    return r.createElement(S.Q, {
                        position: S._4.Relative
                    }, r.createElement(S._19, {
                        background: S.m.Base,
                        className: "stream-ban-modal"
                    }, r.createElement(S.V, {
                        padding: 2
                    }, this.renderErrorMessage(), r.createElement(S.V, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(S._23, {
                        type: S._28.H4
                    }, Object(i.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), r.createElement(S._19, {
                        borderTop: !0
                    }, r.createElement(S.V, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(S._23, {
                        bold: !0
                    }, Object(i.d)("Reason (Required)", "StreamBanModal")), r.createElement(S.R, {
                        type: S.S.Text,
                        placeholder: Object(i.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), r.createElement(S._19, {
                        borderTop: !0
                    }, r.createElement(S.V, {
                        padding: {
                            top: 2
                        },
                        textAlign: S._24.Center
                    }, r.createElement(S.V, {
                        display: S.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(S.u, {
                        type: S.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(i.d)("Cancel", "StreamBanModal"))), r.createElement(S.V, {
                        display: S.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(S.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(i.d)("Ban", "StreamBanModal")))))), r.createElement(v.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            E = Object(y.compose)(Object(f.a)(_, {
                name: "banUserFromCommunity"
            }))(w),
            N = Object(c.b)(null, function(e) {
                return Object(u.b)({
                    onCloseModal: p.c
                }, e)
            })(E),
            O = (n("npyu"), n("plcU")),
            F = "error-message",
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? r.createElement(S.V, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(S._23, {
                            color: S.F.Error,
                            type: S._28.H4,
                            "data-test-selector": F
                        }, b(t.state.error))) : null
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
                                        return this.props.timeoutUserFromCommunity ? (e = a.__assign({}, Object(k.a)({
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
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (i.n.tracking.track(m.SpadeEventType.CommunityModeration, {
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
                    return r.createElement(S.Q, {
                        position: S._4.Relative
                    }, r.createElement(S._19, {
                        background: S.m.Base,
                        className: "stream-timeout-modal"
                    }, r.createElement(S.V, {
                        padding: 2
                    }, this.renderErrorMessage(), r.createElement(S.V, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(S._23, {
                        type: S._28.H4
                    }, Object(i.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), r.createElement(S._19, {
                        borderTop: !0
                    }, r.createElement(S.V, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(S._23, {
                        bold: !0
                    }, Object(i.d)("Reason (Required)", "StreamTimeoutModal")), r.createElement(S.R, {
                        type: S.S.Text,
                        placeholder: Object(i.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), r.createElement(S.V, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(S._23, {
                        bold: !0
                    }, Object(i.d)("Duration", "StreamTimeoutModal")), r.createElement(S._16, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, r.createElement("option", {
                        value: "2"
                    }, Object(i.d)("2 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "4"
                    }, Object(i.d)("4 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "8"
                    }, Object(i.d)("8 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "12"
                    }, Object(i.d)("12 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "24"
                    }, Object(i.d)("24 hours", "StreamTimeoutModal")))), r.createElement(S._19, {
                        borderTop: !0
                    }, r.createElement(S.V, {
                        padding: {
                            top: 2
                        },
                        textAlign: S._24.Center
                    }, r.createElement(S.V, {
                        display: S.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(S.u, {
                        type: S.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(i.d)("Cancel", "StreamTimeoutModal"))), r.createElement(S.V, {
                        display: S.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(S.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(i.d)("Timeout", "StreamTimeoutModal")))))), r.createElement(v.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            x = Object(y.compose)(Object(f.a)(O, {
                name: "timeoutUserFromCommunity"
            }))(T),
            G = Object(c.b)(null, function(e) {
                return Object(u.b)({
                    onCloseModal: p.c
                }, e)
            })(x),
            D = n("PO03"),
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(s.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(N, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(s.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(G, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? r.createElement(g.a, null, r.createElement(S.v, {
                        ariaLabel: Object(i.d)("Moderation", "DirectoryGamePage"),
                        icon: S._11.ChatRiskFlag
                    }), r.createElement(S.p, {
                        direction: S.q.BottomRight,
                        size: S.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? r.createElement(S.T, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, r.createElement(S.V, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(i.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? r.createElement(S.T, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, r.createElement(S.V, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(i.d)("Timeout", "StreamFlag"))) : null
                }, t = a.__decorate([Object(f.a)(D, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(h.d)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component),
            j = Object(c.b)(null, function(e) {
                return Object(u.b)({
                    onShowModal: p.d
                }, e)
            })(I),
            U = n("PLRK"),
            A = (n("GiGb"), "directory-game__card_container"),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getLinkTo = function(e, n) {
                        var a = t.props.trackingContent ? t.props.trackingContent : m.PageviewContent.Live,
                            r = t.props.directoryType === d.a.Communities ? m.PageviewMedium.Community : m.PageviewMedium.Game;
                        return t.props.trackingMedium && (r = t.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: r,
                                content: a,
                                content_index: n
                            }
                        }
                    }, t.renderStreamFlag = function() {
                        var e = t.props.streamNode;
                        return e.broadcaster ? t.props.directoryType === d.a.Communities && t.props.directoryName ? r.createElement(S.V, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: S._4.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, r.createElement(j, {
                            communityName: t.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, t.shouldShowGame = function(e) {
                        return t.props.directoryType !== d.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.streamNode,
                        t = this.props.streamIndex;
                    return e.broadcaster ? r.createElement("div", {
                        className: "stream-thumbnail",
                        "data-target": t ? "" : "directory-first-item",
                        style: {
                            order: t
                        }
                    }, r.createElement(S.V, {
                        className: "stream-thumbnail__card",
                        position: S._4.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": A
                    }, r.createElement(o.a, {
                        imageSrc: e.previewImageURL || i.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || U.a,
                        channelName: Object(s.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: this.shouldShowGame("boxArtURL") || i.a.defaultBoxArtURL,
                        gameTitle: this.shouldShowGame("name"),
                        gameLinkTo: this.getLinkTo(Object(l.c)(this.shouldShowGame("name")), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type,
                        streamMetadata: e.streamMetadata,
                        "data-a-target": "card-" + t,
                        "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                    }), this.renderStreamFlag())) : null
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return A
        }), n.d(t, "b", function() {
            return M
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
    Kkxm: function(e, t) {
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
    ND9m: function(e, t) {},
    PLRK: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("U7vG"),
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
            return o
        }), n.d(t, "g", function() {
            return s
        }), n.d(t, "e", function() {
            return l
        }), n.d(t, "f", function() {
            return m
        }), n.d(t, "d", function() {
            return d
        }), n.d(t, "c", function() {
            return c
        });
        var a, r = n("6sO2"),
            i = n("vH/s");
        ! function(e) {
            e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
        }(a || (a = {}));
        var o;
        ! function(e) {
            e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed", e.Skipped = "skipped"
        }(o || (o = {}));
        var s = function(e) {
                var t = {
                    source: e.source,
                    action: o.Start
                };
                r.m.track(i.SpadeEventType.OnboardingEvent, t)
            },
            l = function() {
                var e = {
                    source: a.HomepageCTA,
                    action: o.Dismissed
                };
                r.m.track(i.SpadeEventType.OnboardingEvent, e)
            },
            m = function(e) {
                var t = {
                    source: a.HomepageCTA,
                    action: e
                };
                r.m.track(i.SpadeEventType.OnboardingEvent, t)
            },
            d = function(e, t) {
                var n = {
                    src: i.SpadeEventType.OnboardingEvent,
                    game: t
                };
                r.m.track(e, n)
            },
            c = function(e) {
                r.m.track(i.SpadeEventType.BrowseForYou, e)
            }
    },
    XhYx: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("U7vG"),
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
            f = n("k2jn"),
            h = n("Odds"),
            y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return null === this.props.game ? r.createElement(h.V, {
                        "data-test-selector": "community-card__placeholder",
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(h.V, {
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(h.j, {
                        ratio: h.k.BoxArt
                    }, r.createElement(h._3, null)))) : this.props.followGameCardOptions ? r.createElement(h.V, {
                        key: this.props.followGameCardOptions.category + "-game-" + this.props.game.id
                    }, r.createElement(g.a, {
                        "data-a-target": "follow-game-card-" + this.props.game.id,
                        "data-test-selector": f.c,
                        info: this.props.game.viewersCount ? Object(u.d)("{viewerCount,number} viewers", {
                            viewerCount: this.props.game.viewersCount
                        }, "CommunitySelectionFollowCard") : "",
                        title: this.props.game.name,
                        imageAlt: this.props.game.name,
                        imageSrc: this.props.game.boxArtURL,
                        onFollow: this.props.followGameCardOptions.onFollow,
                        onUnfollow: this.props.followGameCardOptions.onUnfollow,
                        categoryChange: this.props.followGameCardOptions.categoryChange
                    })) : r.createElement(h.V, {
                        key: "game-" + this.props.game.id,
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(h.t, {
                        title: this.props.game.name,
                        info: this.props.game.viewersCount ? Object(u.d)("{viewerCount,number} viewers", {
                            viewerCount: this.props.game.viewersCount
                        }, "CommunitySelectionBoxCard") : "",
                        linkTo: this.props.isCommunity ? Object(p.a)(this.props.game.name) : Object(p.c)(this.props.game.name),
                        imageAlt: this.props.game.name + " cover image",
                        imageSrc: this.props.game.boxArtURL
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
            S = n("yEZg"),
            _ = "community-card-row__ad",
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.renderCards = function(e) {
                        return t.props.withAd ? t.renderCardGridWithAdSlot() : t.renderCardsWithoutAdSlot(e)
                    }, t.renderCardsWithoutAdSlot = function(e) {
                        var n = t.renderCardsFromProps(),
                            a = 1 === n.length ? 1 : 0;
                        return r.createElement(h.V, {
                            padding: {
                                x: 1,
                                top: 2
                            }
                        }, r.createElement(h._34, {
                            gutterSize: h._36.Small,
                            childWidth: t.props.cardSize,
                            placeholderItems: a,
                            noWrap: e
                        }, n))
                    }, t.renderCardGridWithAdSlot = function() {
                        var e = r.createElement(h.V, {
                                key: "ad",
                                "data-test-selector": _,
                                display: h.H.Flex,
                                flexGrow: 1,
                                justifyContent: h.U.Center,
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
                                return r.createElement(h.G, {
                                    key: "game-" + t.toString(),
                                    cols: 2
                                }, e)
                            });
                        return n.splice(4, 0, e), r.createElement(h.V, {
                            padding: {
                                x: 1
                            }
                        }, r.createElement(h.O, null, n))
                    }, t.renderCardsFromProps = function() {
                        if (t.props.games) {
                            var e = t.props.games;
                            return t.props.withAd && !t.state.adDisplayed && (e = e.slice(0, S.GAME_DISPLAY_LIMIT)), e.map(function(e, n) {
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
                            return t.props.withAd && !t.state.adDisplayed && (n = n.slice(0, S.GAME_DISPLAY_LIMIT)), n.map(function(e, n) {
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
            w = Object(l.d)("CommunityCardRow")(C);
        n.d(t, !1, function() {
            return _
        }), n.d(t, !1, function() {
            return C
        }), n.d(t, "a", function() {
            return w
        })
    },
    e6tx: function(e, t) {},
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
        var a = n("TToO"),
            r = n("U7vG"),
            i = n("3zLD"),
            o = n("6sO2"),
            s = n("zCIC"),
            l = n("Th9g"),
            m = n("7vx8"),
            d = n("j7/Y"),
            c = n("NXs7"),
            u = n("VAT8"),
            p = n("w9tK"),
            g = n("vH/s"),
            f = n("CSlQ"),
            h = n("XhYx"),
            y = n("+I3D"),
            v = n("RH2O"),
            k = n("Aj/L"),
            b = n("2b/B"),
            S = n("Odds"),
            _ = (n("l5N5"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? r.createElement(S.Q, {
                        position: S._4.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement("nav", {
                        className: "top-nav",
                        "data-a-target": "top-nav-container"
                    }, r.createElement(S.V, {
                        className: "top-nav__menu",
                        display: S.H.Flex,
                        alignItems: S.c.Stretch,
                        flexWrap: S.K.NoWrap,
                        fullHeight: !0
                    }, r.createElement(S.Q, {
                        display: S.H.InlineFlex,
                        alignItems: S.c.Center,
                        flexShrink: 0
                    }, r.createElement("span", {
                        className: "top-nav__home-link"
                    }, r.createElement(S._10, {
                        asset: S._11.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), r.createElement(S.V, {
                        className: "top-nav__nav-items-container",
                        display: S.H.Flex,
                        flexGrow: 1,
                        flexWrap: S.K.NoWrap,
                        flexShrink: 0
                    }, ""), r.createElement(S.V, {
                        className: "top-nav__nav-items-container",
                        display: S.H.Flex,
                        alignItems: S.c.Stretch,
                        flexWrap: S.K.NoWrap,
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(b.a, {
                        isOnboarding: !0
                    }))))) : (o.i.warn("OnboardingTopNavComponent is only meant to be used for logged in users."), null)
                }, t = a.__decorate([Object(f.d)("OnboardingTopNav")], t)
            }(r.Component)),
            C = Object(v.b)(function(e) {
                return {
                    isLoggedIn: Object(k.d)(e)
                }
            })(_),
            w = n("DBTH"),
            E = n("S4HN"),
            N = n("v5ho"),
            O = n("hfrE"),
            F = n("wd/y");
        n("ND9m");
        n.d(t, "c", function() {
            return T
        }), n.d(t, "a", function() {
            return G
        }), n.d(t, "b", function() {
            return U
        });
        var T = "onboarding_game",
            x = "onboarding-community-selection__search",
            G = 100,
            D = 500,
            I = 3,
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        experimentAssigned: !1
                    }, t.doneInitialRedirectCheck = !1, t.gameToCategories = {}, t.onFollow = function(e) {
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
                        }), Object(E.d)(g.SpadeEventType.GameFollow, e)
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
                        }), Object(E.d)(g.SpadeEventType.GameUnfollow, e)
                    }, t.skipOnboarding = function() {
                        Object(E.f)(E.a.Skipped), t.redirectToFrontPage()
                    }, t.redirectAfterCompletion = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return Object(E.f)(E.a.Completed), [4, o.n.experiments.getAssignment(w.k)];
                                    case 1:
                                        return e = t.sent(), Object(w.p)(e) ? this.redirectToForYouPage() : this.redirectToFrontPage(), [2]
                                }
                            })
                        })
                    }, t.redirectToFrontPage = function() {
                        window.location.assign("/" + location.search)
                    }, t.redirectToForYouPage = function() {
                        var e = "" === location.search ? "?tt_medium=onboarding" : location.search + "&tt_medium=onboarding";
                        window.location.assign("/directory/following/foryou" + e)
                    }, t.isButtonDisabled = function() {
                        return "skip" !== t.state.assignment && t.getNumFollowedGames() < I
                    }, t.renderGameCardsOrCategories = function() {
                        if (t.props.gameData) {
                            var e = {
                                onFollow: t.onFollow,
                                onUnfollow: t.onUnfollow
                            };
                            return r.createElement(h.a, {
                                games: t.props.gameData,
                                directoryType: N.a.Games,
                                cardSize: S._35.Medium,
                                followGameCardOptions: e
                            })
                        }
                        if (t.props.categoryData) {
                            var n = t.getCategoryFollowCounts();
                            return t.props.categoryData.map(function(e) {
                                var a = !!n && (n[e.name] || 0) === e.games.length;
                                return r.createElement(y.a, {
                                    key: e.name,
                                    data: e,
                                    cardSize: S._35.ExtraSmall,
                                    trackingMedium: g.PageviewMedium.BrowseForYou,
                                    isFollowingAllGamesInCategory: a,
                                    onFollow: t.onFollow,
                                    onUnfollow: t.onUnfollow
                                })
                            })
                        }
                    }, t.onGameInputChange = function(e) {
                        e.persist(), t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), t.inputTimer = setTimeout(function() {
                            t.props.onSearchChange(e.target.value), t.inputTimer = 0
                        }, D)
                    }, t.userFollowedGamesDataLoaded = function(e) {
                        return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return o.n.setPageTitle(Object(o.d)("Welcome", "CommunitySelectionPage")), [4, o.n.experiments.getAssignment(w.j)];
                                case 1:
                                    return e = t.sent() || w.a, this.setState({
                                        assignment: e,
                                        experimentAssigned: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.userFollowedGamesDataLoaded(e) && ((t.assignment === w.a || !this.doneInitialRedirectCheck && this.shouldRedirect(e)) && this.redirectToFrontPage(), this.doneInitialRedirectCheck = !0), (!this.props.categoryData && e.categoryData || this.props.categoryData && e.categoryData && this.props.categoryData.length !== e.categoryData.length) && this.mapGamesToCategories(e.categoryData)
                }, t.prototype.componentDidUpdate = function() {
                    this.userFollowedGamesDataLoaded(this.props) && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.userFollowedGamesDataLoaded(this.props) && this.state.experimentAssigned ? r.createElement(S.V, {
                        display: S.H.Flex,
                        flexWrap: S.K.NoWrap,
                        fullHeight: !0,
                        fullWidth: !0,
                        position: S._4.Relative,
                        className: Object(u.c)(c.a.Dark)
                    }, r.createElement(C, null), r.createElement(S.Q, {
                        position: S._4.Relative,
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement("main", {
                        className: O.b
                    }, r.createElement(S._19, {
                        className: "community-selection-page " + Object(u.c)(c.a.Dark),
                        "data-a-target": "community-selection-page",
                        background: S.m.Base,
                        "data-test-selector": "onboarding-community-selection",
                        fullHeight: !0
                    }, r.createElement(S.V, {
                        fullWidth: !0,
                        className: "community-selection-page__progress-container"
                    }, r.createElement(S._7, {
                        size: S._8.Small,
                        value: this.calculateProgress()
                    })), r.createElement(S.V, {
                        display: S.H.Flex,
                        alignItems: S.c.Center,
                        justifyContent: S.U.Center,
                        flexDirection: S.J.Column,
                        breakpointLarge: {
                            flexDirection: S.J.Row
                        },
                        padding: {
                            x: 2,
                            top: 2,
                            bottom: 1
                        },
                        fullWidth: !0
                    }, r.createElement(S.V, {
                        className: "community-selection-page__search"
                    }, r.createElement(S._13, {
                        id: x,
                        "data-a-target": x,
                        onChange: this.onGameInputChange,
                        placeholder: "Search Games",
                        spellCheck: !1
                    })), r.createElement(S.V, {
                        display: S.H.Flex,
                        alignItems: S.c.Center,
                        flexGrow: 1,
                        flexDirection: S.J.Column,
                        margin: 1,
                        breakpointLarge: {
                            margin: {
                                x: 2,
                                y: 1
                            }
                        }
                    }, r.createElement(S._19, {
                        color: S.F.Base,
                        fontSize: S.L.Size3,
                        textAlign: S._24.Center,
                        breakpointExtraLarge: {
                            fontSize: S.L.Size2
                        }
                    }, Object(o.d)("Pick three or more you’d like to watch.", "CommunitySelectionPage")), r.createElement(S._19, {
                        textAlign: S._24.Center,
                        margin: {
                            top: .5
                        },
                        display: S.H.Hide,
                        breakpointLarge: {
                            display: S.H.Flex
                        }
                    }, r.createElement(S._19, {
                        fontSize: S.L.Size4,
                        color: S.F.Alt,
                        breakpointExtraLarge: {
                            fontSize: S.L.Size3
                        }
                    }, Object(o.d)("We have tons of games, hobbies, and activities being streamed right now.", "CommunitySelectionPage")))), r.createElement(S.V, {
                        className: "community-selection-page__cta-container",
                        display: S.H.Flex,
                        justifyContent: S.U.Center,
                        breakpointLarge: {
                            justifyContent: S.U.End
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, this.renderCTA())), r.createElement(s.b, null, r.createElement(S.V, {
                        className: "community-selection-page__list",
                        overflow: S._0.Hidden,
                        padding: {
                            x: 1,
                            bottom: 1
                        }
                    }, this.renderGameCardsOrCategories(), r.createElement(s.a, {
                        enabled: this.props.categoriesInfiniteScrollEnabled,
                        loadMore: this.props.onLoadMoreCategories,
                        orientation: l.b.Down,
                        pixelThreshold: 20
                    }))))))) : this.props.data.error ? (o.i.warn("Data Error in Onboarding Community Selection", this.props.data.error), r.createElement(S.V, {
                        display: S.H.Flex
                    }, r.createElement(S._23, {
                        fontSize: S.L.Size5,
                        color: S.F.Alt
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
                    return Math.min(1 + this.getNumFollowedGames() / I * 99, 100)
                }, t.prototype.shouldRedirect = function(e) {
                    return !e.data.currentUser || e.data.currentUser.followedGames.nodes.length >= 10
                }, t.prototype.renderCTA = function() {
                    return "skip" === this.state.assignment && this.getNumFollowedGames() < 1 ? r.createElement(S.u, {
                        "data-test-selector": "onboarding_cta",
                        size: S.x.Large,
                        type: S.z.Hollow,
                        onClick: this.skipOnboarding
                    }, Object(o.d)("Skip for Now", "CommunitySelectionPage")) : r.createElement(S.u, {
                        size: S.x.Large,
                        "data-test-selector": "onboarding_cta",
                        disabled: this.isButtonDisabled(),
                        onClick: this.redirectAfterCompletion
                    }, Object(o.d)("Done", "CommunitySelectionPage"))
                }, t
            }(r.Component),
            U = Object(i.compose)(Object(m.a)(F, {
                options: {
                    variables: {
                        limit: 10
                    }
                }
            }), Object(f.d)("CommunitySelectionPage", {
                destination: p.a.OnboardingIndex
            }), Object(d.a)({
                location: g.PageviewLocation.OnboardingCommunitySelection
            }))(j)
    },
    l5N5: function(e, t) {},
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
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
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
            r = n("U7vG"),
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
                        return t.props.withStreams ? (e = Object(o.d)("Featured Genres", "FeaturedGenres"), n = Object(o.d)("Watch your favorite games on Twitch", "FeaturedGenres")) : (e = Object(o.d)("Featured Games", "FeaturedGenres"), n = Object(o.d)("Find your favorite games on Twitch", "FeaturedGenres")), r.createElement(c.V, {
                            alignItems: c.c.Baseline,
                            display: c.H.Flex,
                            flexDirection: c.J.Row,
                            margin: {
                                left: 1,
                                bottom: 1
                            }
                        }, r.createElement(c._23, {
                            fontSize: c.L.Size2,
                            color: c.F.Base
                        }, e), r.createElement(c.V, {
                            className: "anon-featured-genres__subheader",
                            margin: {
                                left: 2
                            }
                        }, r.createElement(c._23, {
                            fontSize: c.L.Size3,
                            color: c.F.Alt2
                        }, n)))
                    }, t.renderContent = function() {
                        return t.state.categoryData.map(function(e, n) {
                            return r.createElement(m.a, {
                                key: e.name,
                                data: e,
                                cardSize: c._35.ExtraSmall,
                                withAd: 0 === n,
                                trackingMedium: t.props.trackingMedium,
                                withStreams: t.props.withStreams,
                                withBoxArtGameCards: !t.props.withStreams,
                                isFollowingAllGamesInCategory: !1
                            })
                        })
                    }, t.renderFooter = function() {
                        return r.createElement(c.V, {
                            display: c.H.Flex,
                            justifyContent: c.U.End
                        }, r.createElement(c.Q, {
                            display: c.H.Flex,
                            alignItems: c.c.Center
                        }, r.createElement(i.a, {
                            to: "/directory"
                        }, r.createElement(c._23, {
                            fontSize: c.L.Size4
                        }, Object(o.d)("See all live games", "FeaturedGenres")), r.createElement(c._19, {
                            alignItems: c.c.Center,
                            color: c.F.Link,
                            display: c.H.InlineFlex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(c._10, {
                            asset: c._11.AngleRight,
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
                    }) : r.createElement(c.V, null, this.renderHeader(), this.renderContent(), this.renderFooter())
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
                                    return n = a.sent(), o.i.error(n, "Unable to fetch categories."), this.setState({
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
//# sourceMappingURL=pages.anon-front.components.featured-genres-93005321e254005ba870f6d3d0d8d55a.js.map