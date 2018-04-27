webpackJsonp([65], {
    DZCb: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("+xm8"),
            o = n("f2i/"),
            l = n("Aj/L"),
            s = n("TToO"),
            d = n("GiK3"),
            c = n("6sO2"),
            m = n("yWCw"),
            u = n("7vx8"),
            p = n("j7/Y"),
            g = n("w9tK"),
            v = n("vH/s"),
            f = n("CSlQ"),
            k = n("Odds"),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBadge = function(e) {
                        return d.createElement(k._8, {
                            key: e.id,
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(k.k, {
                            ratio: k.l.Aspect1x1
                        }, d.createElement(k._33, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: k.R.Flex,
                            padding: 2,
                            border: !0
                        }, d.createElement(k._2, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, d.createElement("img", {
                            src: e.imageURL,
                            title: e.title,
                            alt: e.title
                        })))), d.createElement(k.Q, {
                            type: k._47.Strong
                        }, e.title))
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return d.createElement(k._10, {
                        fillContent: !0
                    });
                    if (!this.props.badges) return null;
                    var e = this.props.badges,
                        t = e.map(this.renderBadge);
                    return d.createElement(k._8, {
                        margin: {
                            y: 1
                        }
                    }, d.createElement(k._8, {
                        display: k.R.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(k._8, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(k.Q, {
                        type: k._47.H3
                    }, Object(c.d)("Badges from Crates", "BadgesList"))), d.createElement(k.Q, {
                        type: k._47.H3,
                        color: k.K.Alt2
                    }, Object(c.e)(e.length))), d.createElement(k._8, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(k.Q, null, Object(c.d)('You can find your chat badge in Chat Settings under "Edit Appearance".', "BadgesList"))), d.createElement(k._53, {
                        childWidth: k._54.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(d.Component),
            y = Object(a.d)(Object(f.d)("BadgesList", {
                autoReportInteractive: !0
            }))(h),
            E = n("Ouuk"),
            b = n("jF7o");
        var _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCrate = function(e) {
                        return d.createElement(k._8, {
                            key: e.id
                        }, d.createElement(k._6, {
                            onClick: t.handleOpenClick,
                            "data-open-url": e.openURL
                        }, d.createElement(k.k, {
                            ratio: k.l.Aspect1x1
                        }, d.createElement(k._33, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: k.R.Flex,
                            padding: 2,
                            border: !0
                        }, d.createElement(k._2, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, d.createElement("img", {
                            alt: Object(c.d)("Crate", "CratesList"),
                            src: e.iconURL
                        })))), d.createElement(k.Q, null, "Open Now")))
                    }, t.handleOpenClick = function(e) {
                        ! function(e, t) {
                            var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                            n && !Object(E.a)() && (n.focus(), Object(b.a)(n, function(e) {
                                t(e)
                            }))
                        }(e.currentTarget.dataset.openUrl || "", t.reload)
                    }, t.reload = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return d.createElement(k._10, {
                        fillContent: !0
                    });
                    if (!this.props.crates) return null;
                    var e = this.props.crates,
                        t = e.map(this.renderCrate);
                    return d.createElement(k._8, {
                        "data-test-selector": "crates-list__wrapper",
                        margin: {
                            y: 1
                        }
                    }, d.createElement(k._8, {
                        display: k.R.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(k._8, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(k.Q, {
                        type: k._47.H3
                    }, Object(c.d)("Twitch Crates", "CratesList"))), d.createElement(k.Q, {
                        type: k._47.H3,
                        color: k.K.Alt2
                    }, Object(c.e)(e.length))), d.createElement(k._53, {
                        childWidth: k._54.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(d.Component),
            S = Object(a.d)(Object(f.d)("CratesList", {
                autoReportInteractive: !0
            }))(_),
            O = n("bdhb"),
            N = (n("Jc4Y"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDropsDescription = function(e) {
                        return e.length < 1 ? Object(c.d)("Drops are a fun new way to get in-game loot just for watching your favorite channels on Twitch! <x:link>Learn more</x:link>", {
                            "x:link": function(e) {
                                return d.createElement("a", {
                                    href: "https://help.twitch.tv/customer/en/portal/topics/301257-getting-started/articles",
                                    target: "_blank"
                                }, e)
                            }
                        }, "DropsList") : Object(c.d)("Drops you have received are accessed within their corresponding games. Log into the game to experience your new content.", "DropsList")
                    }, t.renderDrop = function(e) {
                        var t = e.drop.node,
                            n = t.game.name;
                        return d.createElement(k._8, {
                            key: n,
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(k._33, {
                            display: k.R.Flex,
                            alignItems: k.c.Center,
                            justifyContent: k._7.Center,
                            padding: 1,
                            border: !0,
                            position: k._15.Relative
                        }, d.createElement("img", {
                            src: t.imageURL,
                            alt: Object(c.d)("Drop image for {gameName}", {
                                gameName: n
                            }, "DropsListPresentation")
                        }), d.createElement(k._33, {
                            position: k._15.Absolute,
                            attachBottom: !0,
                            attachRight: !0,
                            className: "drops-list__count",
                            color: k.K.Overlay,
                            borderRadius: k.t.Small,
                            padding: .5
                        }, d.createElement(k.Q, {
                            fontSize: k.V.Size4,
                            "aria-label": Object(c.d)("Count of Drops awarded for {gameName}", {
                                gameName: n
                            }, "DropsListPresentation")
                        }, e.count))), d.createElement(k.Q, {
                            type: k._47.Strong
                        }, n))
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading) return d.createElement(k._10, {
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
                    return d.createElement(k._8, {
                        "data-test-selector": "drops-list_wrapper",
                        margin: {
                            y: 1
                        }
                    }, d.createElement(k._8, {
                        display: k.R.Flex
                    }, d.createElement(k._8, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(k.Q, {
                        type: k._47.H3
                    }, Object(c.d)("Drops", "DropsList"))), d.createElement(k.Q, {
                        type: k._47.H3,
                        color: k.K.Alt2
                    }, Object(c.e)(t.length))), d.createElement(k._8, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(k.Q, null, this.getDropsDescription(t))), d.createElement(k._53, {
                        childWidth: k._54.Small,
                        noGrow: !0
                    }, i))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(u.a)(O)], t)
            }(d.Component)),
            F = Object(a.d)(Object(f.d)("DropsList"))(N),
            j = n("Tzcg"),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderEmote = function(e) {
                        var t = Object(j.b)([e])[0],
                            n = t.srcSet.split(", ").pop().split(" ").shift();
                        return d.createElement(k._8, {
                            key: t.id,
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(k.k, {
                            ratio: k.l.Aspect1x1
                        }, d.createElement(k._33, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: k.R.Flex,
                            padding: 2,
                            border: !0
                        }, d.createElement(k._2, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, d.createElement("img", {
                            src: n,
                            title: t.displayName,
                            alt: t.displayName
                        })))), d.createElement(k.Q, {
                            type: k._47.Strong
                        }, t.displayName))
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return d.createElement(k._10, {
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
                    return d.createElement(k._8, {
                        margin: {
                            y: 1
                        }
                    }, d.createElement(k._8, {
                        display: k.R.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(k._8, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(k.Q, {
                        type: k._47.H3
                    }, Object(c.d)("Emotes from Crates", "EmoticonsList"))), d.createElement(k.Q, {
                        type: k._47.H3,
                        color: k.K.Alt2
                    }, Object(c.e)(t.length))), d.createElement(k._8, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(k.Q, null, Object(c.d)("You can find your new emote in the emote selector for Chat, Pulse, Feeds, and Whispers.", "EmoticonsList"))), d.createElement(k._53, {
                        childWidth: k._54.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(d.Component),
            R = Object(a.d)(Object(f.d)("EmoticonsList", {
                autoReportInteractive: !0
            }))(C),
            L = n("+Znq"),
            D = n("iMOk"),
            x = n("CFVp"),
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bitsConfig = Object(x.a)(), t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = Object(c.d)("Inventory", "InventoryTitleBar");
                    if (this.props.loading) return d.createElement(k._33, {
                        className: "title-bar",
                        display: k.R.Flex,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(k._8, {
                        flexGrow: 1
                    }, d.createElement(k.Q, {
                        type: k._47.H2
                    }, e)), d.createElement(k._8, {
                        display: k.R.Flex,
                        margin: {
                            right: 3
                        },
                        alignItems: k.c.Center
                    }, d.createElement(k._14, {
                        width: 135,
                        height: 30
                    })), d.createElement(k._8, {
                        alignSelf: k.d.Baseline
                    }, d.createElement(k._14, {
                        width: 180,
                        height: 30
                    })));
                    var t = this.props.amazonMarketplaces.map(function(e) {
                            return d.createElement(k._6, {
                                key: e.id,
                                linkTo: "https://" + e.orderHistoryRedirectURL,
                                targetBlank: !0
                            }, e.displayText)
                        }),
                        n = Object(c.d)("You have {bitsComponent}", {
                            bitsComponent: d.createElement(D.a, {
                                count: this.props.bitsBalance,
                                bitsConfig: this.bitsConfig,
                                withImage: !0,
                                withText: !0
                            })
                        }, "InventoryTitleBar");
                    return d.createElement(k._33, {
                        className: "title-bar",
                        display: k.R.Flex,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(k._8, {
                        flexGrow: 1
                    }, d.createElement(k.Q, {
                        type: k._47.H2
                    }, e)), d.createElement(k._8, {
                        display: k.R.Flex,
                        margin: {
                            right: 3
                        },
                        alignItems: k.c.Center
                    }, d.createElement(k.Q, null, n)), d.createElement(k._8, {
                        alignSelf: k.d.Baseline
                    }, d.createElement(L.a, null, d.createElement(k.v, {
                        type: k.B.Hollow
                    }, Object(c.d)("View your Twitch Order History", "InventoryTitleBar")), d.createElement(k.q, null, d.createElement(k._8, {
                        padding: 1
                    }, t)))))
                }, t
            }(d.Component),
            w = Object(a.d)(Object(f.d)("TitleBar", {
                autoReportInteractive: !0
            }))(U),
            I = n("xpYL"),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refetchData = function() {
                        t.props.data && t.props.data.refetch && t.props.data.refetch()
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.o.setPageTitle(Object(c.d)("Inventory", "InventoryPage"))
                }, t.prototype.render = function() {
                    if (!this.props.isLoggedIn) return this.props.onAnonymousVisit(), d.createElement(m.a, {
                        message: Object(c.d)("You must be logged in to view this page", "InventoryPage")
                    });
                    var e = !0,
                        t = [],
                        n = 0,
                        i = [],
                        a = [],
                        r = [];
                    return this.props.data.loading || this.props.data.error || (e = !1, t = this.props.data.currentUser.amazonMarketplaces, n = this.props.data.currentUser.bitsBalance, i = this.props.data.currentUser.availableBadges, a = this.props.data.currentUser.crates, r = this.props.data.currentUser.emoteSets), d.createElement(k._8, {
                        className: "inventory",
                        padding: 3
                    }, d.createElement(w, {
                        bitsBalance: n,
                        loading: e,
                        amazonMarketplaces: t
                    }), d.createElement(S, {
                        refetchData: this.refetchData,
                        crates: a,
                        loading: e
                    }), d.createElement(R, {
                        emoteSets: r,
                        loading: e
                    }), d.createElement(y, {
                        badges: i,
                        loading: e
                    }), d.createElement(F, null))
                }, t = s.__decorate([Object(u.a)(I)], t)
            }(d.Component),
            Q = Object(a.d)(Object(f.d)("InventoryPage", {
                autoReportInteractive: !0,
                destination: g.a.Inventory
            }), Object(p.a)({
                location: v.PageviewLocation.Inventory
            }))(T);
        var B = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(l.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                onAnonymousVisit: function() {
                    return Object(o.f)(r.a.InventoryPage)
                }
            }, e)
        })(Q);
        n.d(t, "InventoryPage", function() {
            return B
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
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("UP6l").definitions)), i.definitions = i.definitions.concat(r(n("l83l").definitions)), e.exports = i
    }
});
//# sourceMappingURL=pages.inventory-d39ec6af0b2d31b7bff2885ebdc69995.js.map