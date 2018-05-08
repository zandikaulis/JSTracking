webpackJsonp([68], {
    DZCb: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("+xm8"),
            o = n("f2i/"),
            l = n("Aj/L"),
            s = n("TToO"),
            c = n("GiK3"),
            d = n("6sO2"),
            m = n("yWCw"),
            u = n("7vx8"),
            p = n("j7/Y"),
            g = n("w9tK"),
            v = n("vH/s"),
            f = n("CSlQ"),
            h = n("Odds"),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBadge = function(e) {
                        return c.createElement(h._8, {
                            key: e.id,
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(h.k, {
                            ratio: h.l.Aspect1x1
                        }, c.createElement(h._35, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: h.R.Flex,
                            padding: 2,
                            border: !0
                        }, c.createElement(h._2, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, c.createElement("img", {
                            src: e.imageURL,
                            title: e.title,
                            alt: e.title
                        })))), c.createElement(h.Q, {
                            type: h._49.Strong
                        }, e.title))
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return c.createElement(h._10, {
                        fillContent: !0
                    });
                    if (!this.props.badges) return null;
                    var e = this.props.badges,
                        t = e.map(this.renderBadge);
                    return c.createElement(h._8, {
                        margin: {
                            y: 1
                        }
                    }, c.createElement(h._8, {
                        display: h.R.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h._8, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(h.Q, {
                        type: h._49.H3
                    }, Object(d.d)("Badges from Crates", "BadgesList"))), c.createElement(h.Q, {
                        type: h._49.H3,
                        color: h.K.Alt2
                    }, Object(d.e)(e.length))), c.createElement(h._8, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h.Q, null, Object(d.d)('You can find your chat badge in Chat Settings under "Edit Appearance".', "BadgesList"))), c.createElement(h._55, {
                        childWidth: h._56.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(c.Component),
            y = Object(r.d)(Object(f.d)("BadgesList", {
                autoReportInteractive: !0
            }))(k),
            _ = n("Ouuk"),
            E = n("jF7o");
        var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCrate = function(e) {
                        return c.createElement(h._8, {
                            key: e.id
                        }, c.createElement(h._6, {
                            onClick: t.handleOpenClick,
                            "data-open-url": e.openURL
                        }, c.createElement(h.k, {
                            ratio: h.l.Aspect1x1
                        }, c.createElement(h._35, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: h.R.Flex,
                            padding: 2,
                            border: !0
                        }, c.createElement(h._2, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, c.createElement("img", {
                            alt: Object(d.d)("Crate", "CratesList"),
                            src: e.iconURL
                        })))), c.createElement(h.Q, null, "Open Now")))
                    }, t.handleOpenClick = function(e) {
                        ! function(e, t) {
                            var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                            n && !Object(_.a)() && (n.focus(), Object(E.a)(n, function(e) {
                                t(e)
                            }))
                        }(e.currentTarget.dataset.openUrl || "", t.reload)
                    }, t.reload = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return c.createElement(h._10, {
                        fillContent: !0
                    });
                    if (!this.props.crates) return null;
                    var e = this.props.crates,
                        t = e.map(this.renderCrate);
                    return c.createElement(h._8, {
                        "data-test-selector": "crates-list__wrapper",
                        margin: {
                            y: 1
                        }
                    }, c.createElement(h._8, {
                        display: h.R.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h._8, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(h.Q, {
                        type: h._49.H3
                    }, Object(d.d)("Twitch Crates", "CratesList"))), c.createElement(h.Q, {
                        type: h._49.H3,
                        color: h.K.Alt2
                    }, Object(d.e)(e.length))), c.createElement(h._55, {
                        childWidth: h._56.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(c.Component),
            S = Object(r.d)(Object(f.d)("CratesList", {
                autoReportInteractive: !0
            }))(b),
            O = n("bdhb"),
            N = (n("Jc4Y"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDropsDescription = function(e) {
                        return e.length < 1 ? Object(d.d)("Drops are a fun new way to get in-game loot just for watching your favorite channels on Twitch! <x:link>Learn more</x:link>", {
                            "x:link": function(e) {
                                return c.createElement("a", {
                                    href: "https://help.twitch.tv/customer/en/portal/topics/301257-getting-started/articles",
                                    target: "_blank"
                                }, e)
                            }
                        }, "DropsList") : Object(d.d)("Drops you have received are accessed within their corresponding games. Log into the game to experience your new content.", "DropsList")
                    }, t.renderDrop = function(e) {
                        var t = e.drop.node,
                            n = t.game.name;
                        return c.createElement(h._8, {
                            key: n,
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(h._35, {
                            display: h.R.Flex,
                            alignItems: h.c.Center,
                            justifyContent: h._7.Center,
                            padding: 1,
                            border: !0,
                            position: h._15.Relative
                        }, c.createElement("img", {
                            src: t.imageURL,
                            alt: Object(d.d)("Drop image for {gameName}", {
                                gameName: n
                            }, "DropsListPresentation")
                        }), c.createElement(h._35, {
                            position: h._15.Absolute,
                            attachBottom: !0,
                            attachRight: !0,
                            className: "drops-list__count",
                            color: h.K.Overlay,
                            borderRadius: h.t.Small,
                            padding: .5
                        }, c.createElement(h.Q, {
                            fontSize: h.V.Size4,
                            "aria-label": Object(d.d)("Count of Drops awarded for {gameName}", {
                                gameName: n
                            }, "DropsListPresentation")
                        }, e.count))), c.createElement(h.Q, {
                            type: h._49.Strong
                        }, n))
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading) return c.createElement(h._10, {
                        fillContent: !0
                    });
                    if (!this.props.data || this.props.data.error || !this.props.data.currentUser || !this.props.data.currentUser.inventory.drops.nodes) return null;
                    var t = this.props.data.currentUser.inventory.drops.nodes,
                        n = t.reduce(function(e, t) {
                            var n = t.node.game.name;
                            return e.hasOwnProperty(n) ? e[n].count++ : e[t.node.game.name] = {
                                count: 1,
                                drop: t
                            }, e
                        }, {}),
                        i = Object.keys(n).map(function(t) {
                            return e.renderDrop(n[t])
                        });
                    return c.createElement(h._8, {
                        "data-test-selector": "drops-list_wrapper",
                        margin: {
                            y: 1
                        }
                    }, c.createElement(h._8, {
                        display: h.R.Flex
                    }, c.createElement(h._8, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(h.Q, {
                        type: h._49.H3
                    }, Object(d.d)("Drops", "DropsList"))), c.createElement(h.Q, {
                        type: h._49.H3,
                        color: h.K.Alt2
                    }, Object(d.e)(t.length))), c.createElement(h._8, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h.Q, null, this.getDropsDescription(t))), c.createElement(h._55, {
                        childWidth: h._56.Small,
                        noGrow: !0
                    }, i))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(u.a)(O)], t)
            }(c.Component)),
            j = Object(r.d)(Object(f.d)("DropsList"))(N),
            C = n("Tzcg"),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderEmote = function(e) {
                        var t = Object(C.b)([e])[0],
                            n = t.srcSet.split(", ").pop().split(" ").shift();
                        return c.createElement(h._8, {
                            key: t.id,
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(h.k, {
                            ratio: h.l.Aspect1x1
                        }, c.createElement(h._35, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: h.R.Flex,
                            padding: 2,
                            border: !0
                        }, c.createElement(h._2, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, c.createElement("img", {
                            src: n,
                            title: t.displayName,
                            alt: t.displayName
                        })))), c.createElement(h.Q, {
                            type: h._49.Strong
                        }, t.displayName))
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return c.createElement(h._10, {
                        fillContent: !0
                    });
                    if (!this.props.emoteSets) return null;
                    var e = new Map;
                    this.props.emoteSets.forEach(function(t) {
                        t.emotes.forEach(function(t) {
                            e.set(t.id, t)
                        })
                    });
                    var t = Array.from(e).sort(function(e, t) {
                        var n = e[0],
                            i = t[0];
                        return n.localeCompare(i)
                    }).map(function(e) {
                        e[0];
                        return e[1]
                    }).map(this.renderEmote);
                    return c.createElement(h._8, {
                        margin: {
                            y: 1
                        }
                    }, c.createElement(h._8, {
                        display: h.R.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h._8, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(h.Q, {
                        type: h._49.H3
                    }, Object(d.d)("Emotes from Crates", "EmoticonsList"))), c.createElement(h.Q, {
                        type: h._49.H3,
                        color: h.K.Alt2
                    }, Object(d.e)(t.length))), c.createElement(h._8, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h.Q, null, Object(d.d)("You can find your new emote in the emote selector for Chat, Pulse, Feeds, and Whispers.", "EmoticonsList"))), c.createElement(h._55, {
                        childWidth: h._56.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(c.Component),
            L = Object(r.d)(Object(f.d)("EmoticonsList", {
                autoReportInteractive: !0
            }))(F),
            R = n("+Znq"),
            x = n("iMOk"),
            w = n("CFVp"),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bitsConfig = Object(w.a)(), t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Inventory", "InventoryTitleBar");
                    if (this.props.loading) return c.createElement(h._35, {
                        className: "title-bar",
                        display: h.R.Flex,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, c.createElement(h._8, {
                        flexGrow: 1
                    }, c.createElement(h.Q, {
                        type: h._49.H2
                    }, e)), c.createElement(h._8, {
                        display: h.R.Flex,
                        margin: {
                            right: 3
                        },
                        alignItems: h.c.Center
                    }, c.createElement(h._14, {
                        width: 135,
                        height: 30
                    })), c.createElement(h._8, {
                        alignSelf: h.d.Baseline
                    }, c.createElement(h._14, {
                        width: 180,
                        height: 30
                    })));
                    var t = this.props.amazonMarketplaces.map(function(e) {
                            return c.createElement(h._6, {
                                key: e.id,
                                linkTo: "https://" + e.orderHistoryRedirectURL,
                                targetBlank: !0
                            }, e.displayText)
                        }),
                        n = Object(d.d)("You have {bitsComponent}", {
                            bitsComponent: c.createElement(x.a, {
                                count: this.props.bitsBalance,
                                bitsConfig: this.bitsConfig,
                                withImage: !0,
                                withText: !0
                            })
                        }, "InventoryTitleBar");
                    return c.createElement(h._35, {
                        className: "title-bar",
                        display: h.R.Flex,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, c.createElement(h._8, {
                        flexGrow: 1
                    }, c.createElement(h.Q, {
                        type: h._49.H2
                    }, e)), c.createElement(h._8, {
                        display: h.R.Flex,
                        margin: {
                            right: 3
                        },
                        alignItems: h.c.Center
                    }, c.createElement(h.Q, null, n)), c.createElement(h._8, {
                        alignSelf: h.d.Baseline
                    }, c.createElement(R.a, null, c.createElement(h.v, {
                        type: h.B.Hollow
                    }, Object(d.d)("View your Twitch Order History", "InventoryTitleBar")), c.createElement(h.q, null, c.createElement(h._8, {
                        padding: 1
                    }, t)))))
                }, t
            }(c.Component),
            T = Object(r.d)(Object(f.d)("TitleBar", {
                autoReportInteractive: !0
            }))(D),
            U = n("xpYL"),
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refetchData = function() {
                        t.props.data && t.props.data.refetch && t.props.data.refetch()
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.o.setPageTitle(Object(d.d)("Inventory", "InventoryPage"))
                }, t.prototype.render = function() {
                    if (!this.props.isLoggedIn) return this.props.onAnonymousVisit(), c.createElement(m.a, {
                        message: Object(d.d)("You must be logged in to view this page", "InventoryPage")
                    });
                    var e = !0,
                        t = [],
                        n = 0,
                        i = [],
                        r = [],
                        a = [];
                    return this.props.data.loading || this.props.data.error || (e = !1, t = this.props.data.currentUser.amazonMarketplaces, n = this.props.data.currentUser.bitsBalance, i = this.props.data.currentUser.availableBadges, r = this.props.data.currentUser.crates, a = this.props.data.currentUser.emoteSets), c.createElement(h._8, {
                        className: "inventory",
                        padding: 3
                    }, c.createElement(T, {
                        bitsBalance: n,
                        loading: e,
                        amazonMarketplaces: t
                    }), c.createElement(S, {
                        refetchData: this.refetchData,
                        crates: r,
                        loading: e
                    }), c.createElement(L, {
                        emoteSets: a,
                        loading: e
                    }), c.createElement(y, {
                        badges: i,
                        loading: e
                    }), c.createElement(j, null))
                }, t = s.__decorate([Object(u.a)(U)], t)
            }(c.Component),
            A = Object(r.d)(Object(f.d)("InventoryPage", {
                autoReportInteractive: !0,
                destination: g.a.Inventory
            }), Object(p.a)({
                location: v.PageviewLocation.Inventory
            }))(I);
        var Q = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(l.d)(e)
            }
        }, function(e) {
            return Object(r.b)({
                onAnonymousVisit: function() {
                    return Object(o.f)(a.a.InventoryPage)
                }
            }, e)
        })(A);
        n.d(t, "InventoryPage", function() {
            return Q
        })
    },
    Jc4Y: function(e, t) {},
    UP6l: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "amazonMarketplace"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "AmazonMarketplace"
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
                            value: "displayText"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "orderHistoryRedirectURL"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 90
            }
        };
        n.loc.source = {
            body: "fragment amazonMarketplace on AmazonMarketplace {\nid\ndisplayText\norderHistoryRedirectURL\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bdhb: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Inventory_DropsList_CurrentUser"
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
                                    value: "inventory"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "drops"
                                        },
                                        arguments: [],
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
                                                                    value: "imageURL"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 126
            }
        };
        n.loc.source = {
            body: "query Inventory_DropsList_CurrentUser {\ncurrentUser {\nid\ninventory {\ndrops {\nnodes {\nnode {\ngame {\nname\n}\nimageURL\n}\n}\n}\n}\n}\n}",
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
        var i = n("TToO"),
            r = n("OAwv"),
            a = n("GiK3"),
            o = n("F8kA"),
            l = n("6sO2");

        function s(e) {
            return function(t) {
                var n = function(n) {
                    function o(t) {
                        var r = n.call(this, t) || this;
                        return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                            if (!(r.tracked || e.skip && e.skip(r.props))) {
                                r.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, r.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = r.referenceTracking,
                                    o = a.content,
                                    s = a.medium,
                                    c = a.content_index;
                                l.o.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                    }
                    return i.__extends(o, n), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return a.createElement(t, i.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
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
                    }, o
                }(a.Component);
                return Object(o.f)(n)
            }
        }
        n.d(t, "a", function() {
            return s
        })
    },
    l83l: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "crate"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Crate"
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
                            value: "iconURL"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "openURL"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "iconType"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 61
            }
        };
        n.loc.source = {
            body: "fragment crate on Crate {\nid\ntitle\niconURL\nopenURL\niconType\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    xpYL: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Inventory"
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
                                    value: "amazonMarketplaces"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "amazonMarketplace"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "crates"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "crate"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "availableBadges"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "domains"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "CRATE"
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
                                            value: "imageURL"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "size"
                                            },
                                            value: {
                                                kind: "EnumValue",
                                                value: "QUADRUPLE"
                                            }
                                        }],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "title"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "emoteSets"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "domains"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "CRATE"
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
                                            value: "emotes"
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
                                                    value: "token"
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
                end: 344
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/amazon-marketplace.gql"\n#import "twilight/features/fuel/models/crate.gql"\nquery Inventory {\ncurrentUser{\nid\namazonMarketplaces {\n...amazonMarketplace\n}\nbitsBalance\ncrates {\n...crate\n}\navailableBadges(domains:CRATE){\nid\nimageURL(size:QUADRUPLE)\ntitle\n}\nemoteSets(domains:CRATE){\nid\nemotes{\nid\ntoken\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};

        function a(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(a(n("UP6l").definitions)), i.definitions = i.definitions.concat(a(n("l83l").definitions)), e.exports = i
    }
});
//# sourceMappingURL=pages.inventory-852fc856494020ea0ef135261933b830.js.map