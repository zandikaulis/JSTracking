webpackJsonp([53], {
    "1pvm": function(e, t) {},
    DZCb: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            l = n("TToO"),
            c = n("U7vG"),
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
                        return c.createElement(h.Z, {
                            key: e.id,
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(h.j, {
                            ratio: h.k.Aspect1x1
                        }, c.createElement(h._21, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: h.L.Flex,
                            padding: 2,
                            border: !0
                        }, c.createElement(h.U, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, c.createElement("img", {
                            src: e.imageURL,
                            title: e.title,
                            alt: e.title
                        })))), c.createElement(h._25, {
                            type: h._30.Strong
                        }, e.title))
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return c.createElement(h._1, {
                        fillContent: !0
                    });
                    if (!this.props.badges) return null;
                    var e = this.props.badges,
                        t = e.map(this.renderBadge);
                    return c.createElement(h.Z, {
                        margin: {
                            y: 1
                        }
                    }, c.createElement(h.Z, {
                        display: h.L.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h.Z, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(h._25, {
                        type: h._30.H3
                    }, Object(d.d)("Badges from Crates", "BadgesList"))), c.createElement(h._25, {
                        type: h._30.H3,
                        color: h.I.Alt2
                    }, Object(d.e)(e.length))), c.createElement(h.Z, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h._25, null, Object(d.d)('You can find your chat badge in Chat Settings under "Edit Appearance".', "BadgesList"))), c.createElement(h._36, {
                        childWidth: h._37.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(c.Component),
            y = Object(r.d)(Object(f.d)("BadgesList", {
                autoReportInteractive: !0
            }))(k),
            b = n("Ouuk"),
            E = n("jF7o"),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCrate = function(e) {
                        return c.createElement(h.Z, {
                            key: e.id
                        }, c.createElement(h.X, {
                            onClick: t.handleOpenClick,
                            "data-open-url": e.openURL
                        }, c.createElement(h.j, {
                            ratio: h.k.Aspect1x1
                        }, c.createElement(h._21, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: h.L.Flex,
                            padding: 2,
                            border: !0
                        }, c.createElement(h.U, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, c.createElement("img", {
                            alt: Object(d.d)("Crate", "CratesList"),
                            src: e.iconURL
                        })))), c.createElement(h._25, null, "Open Now")))
                    }, t.handleOpenClick = function(e) {
                        ! function(e, t) {
                            var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                            n && !Object(b.a)() && (n.focus(), Object(E.a)(n, function(e) {
                                t(e)
                            }))
                        }(e.currentTarget.dataset.openUrl || "", t.reload)
                    }, t.reload = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return c.createElement(h._1, {
                        fillContent: !0
                    });
                    if (!this.props.crates) return null;
                    var e = this.props.crates,
                        t = e.map(this.renderCrate);
                    return c.createElement(h.Z, {
                        "data-test-selector": "crates-list__wrapper",
                        margin: {
                            y: 1
                        }
                    }, c.createElement(h.Z, {
                        display: h.L.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h.Z, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(h._25, {
                        type: h._30.H3
                    }, Object(d.d)("Twitch Crates", "CratesList"))), c.createElement(h._25, {
                        type: h._30.H3,
                        color: h.I.Alt2
                    }, Object(d.e)(e.length))), c.createElement(h._36, {
                        childWidth: h._37.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(c.Component),
            O = Object(r.d)(Object(f.d)("CratesList", {
                autoReportInteractive: !0
            }))(_),
            S = n("bdhb"),
            L = (n("Jc4Y"), "drops-list_drop-award"),
            N = function(e) {
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
                    }, t.renderDrop = function(e, t) {
                        return c.createElement(h.Z, {
                            key: t,
                            className: "drops-list__drop-award",
                            "data-test-selector": L,
                            margin: {
                                right: 2,
                                bottom: 1
                            },
                            display: h.L.InlineFlex,
                            flexDirection: h.N.Column
                        }, c.createElement(h._21, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: h.L.Flex,
                            justifyContent: h.Y.Center,
                            padding: 2,
                            border: !0
                        }, c.createElement("img", {
                            alt: Object(d.d)("Drop image", "DropsListPresentation"),
                            src: e.node.imageURL
                        })), c.createElement(h.Z, {
                            padding: {
                                y: .5
                            }
                        }, c.createElement(h._25, {
                            bold: !0,
                            ellipsis: !0
                        }, e.node.game.name)))
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading) return c.createElement(h._1, {
                        fillContent: !0
                    });
                    if (!this.props.data || this.props.data.error || !this.props.data.currentUser || !this.props.data.currentUser.inventory.drops.nodes) return null;
                    var t = this.props.data.currentUser.inventory.drops.nodes,
                        n = t.map(function(t, n) {
                            return e.renderDrop(t, n)
                        });
                    return c.createElement(h.Z, {
                        "data-test-selector": "drops-list_wrapper",
                        margin: {
                            y: 1
                        }
                    }, c.createElement(h.Z, {
                        display: h.L.Flex
                    }, c.createElement(h.Z, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(h._25, {
                        type: h._30.H3
                    }, Object(d.d)("Drops", "DropsList"))), c.createElement(h._25, {
                        type: h._30.H3,
                        color: h.I.Alt2
                    }, Object(d.e)(t.length))), c.createElement(h.Z, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h._25, null, this.getDropsDescription(t))), n)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = l.__decorate([Object(u.a)(S)], t)
            }(c.Component),
            j = Object(r.d)(Object(f.d)("DropsList"))(N),
            C = n("Tzcg"),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderEmote = function(e) {
                        var t = Object(C.b)([e])[0],
                            n = t.srcSet.split(", ").pop().split(" ").shift();
                        return c.createElement(h.Z, {
                            key: t.id,
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(h.j, {
                            ratio: h.k.Aspect1x1
                        }, c.createElement(h._21, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: h.L.Flex,
                            padding: 2,
                            border: !0
                        }, c.createElement(h.U, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, c.createElement("img", {
                            src: n,
                            title: t.displayName,
                            alt: t.displayName
                        })))), c.createElement(h._25, {
                            type: h._30.Strong
                        }, t.displayName))
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return c.createElement(h._1, {
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
                    return c.createElement(h.Z, {
                        margin: {
                            y: 1
                        }
                    }, c.createElement(h.Z, {
                        display: h.L.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h.Z, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(h._25, {
                        type: h._30.H3
                    }, Object(d.d)("Emotes from Crates", "EmoticonsList"))), c.createElement(h._25, {
                        type: h._30.H3,
                        color: h.I.Alt2
                    }, Object(d.e)(t.length))), c.createElement(h.Z, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h._25, null, Object(d.d)("You can find your new emote in the emote selector for Chat, Pulse, Feeds, and Whispers.", "EmoticonsList"))), c.createElement(h._36, {
                        childWidth: h._37.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(c.Component),
            x = Object(r.d)(Object(f.d)("EmoticonsList", {
                autoReportInteractive: !0
            }))(F),
            w = n("+Znq"),
            U = n("iMOk"),
            T = n("CFVp"),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bitsConfig = Object(T.a)(), t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Inventory", "InventoryTitleBar");
                    if (this.props.loading) return c.createElement(h._21, {
                        className: "title-bar",
                        display: h.L.Flex,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, c.createElement(h.Z, {
                        flexGrow: 1
                    }, c.createElement(h._25, {
                        type: h._30.H2
                    }, e)), c.createElement(h.Z, {
                        display: h.L.Flex,
                        margin: {
                            right: 3
                        },
                        alignItems: h.c.Center
                    }, c.createElement(h._5, {
                        width: 135,
                        height: 30
                    })), c.createElement(h.Z, {
                        alignSelf: h.d.Baseline
                    }, c.createElement(h._5, {
                        width: 180,
                        height: 30
                    })));
                    var t = this.props.amazonMarketplaces.map(function(e) {
                            return c.createElement(h.X, {
                                key: e.id,
                                linkTo: "https://" + e.orderHistoryRedirectURL,
                                targetBlank: !0
                            }, e.displayText)
                        }),
                        n = Object(d.d)("You have {bitsComponent}", {
                            bitsComponent: c.createElement(U.a, {
                                count: this.props.bitsBalance,
                                bitsConfig: this.bitsConfig,
                                withImage: !0,
                                withText: !0
                            })
                        }, "InventoryTitleBar");
                    return c.createElement(h._21, {
                        className: "title-bar",
                        display: h.L.Flex,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, c.createElement(h.Z, {
                        flexGrow: 1
                    }, c.createElement(h._25, {
                        type: h._30.H2
                    }, e)), c.createElement(h.Z, {
                        display: h.L.Flex,
                        margin: {
                            right: 3
                        },
                        alignItems: h.c.Center
                    }, c.createElement(h._25, null, n)), c.createElement(h.Z, {
                        alignSelf: h.d.Baseline
                    }, c.createElement(w.a, null, c.createElement(h.u, {
                        type: h.z.Hollow
                    }, Object(d.d)("View your Twitch Order History", "InventoryTitleBar")), c.createElement(h.p, null, c.createElement(h.Z, {
                        padding: 1
                    }, t)))))
                }, t
            }(c.Component),
            I = Object(r.d)(Object(f.d)("TitleBar", {
                autoReportInteractive: !0
            }))(D),
            R = n("xpYL"),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refetchData = function() {
                        t.props.data && t.props.data.refetch && t.props.data.refetch()
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.n.setPageTitle(Object(d.d)("Inventory", "InventoryPage"))
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
                    return this.props.data.loading || this.props.data.error || (e = !1, t = this.props.data.currentUser.amazonMarketplaces, n = this.props.data.currentUser.bitsBalance, i = this.props.data.currentUser.availableBadges, r = this.props.data.currentUser.crates, a = this.props.data.currentUser.emoteSets), c.createElement(h.Z, {
                        className: "inventory",
                        padding: 3
                    }, c.createElement(I, {
                        bitsBalance: n,
                        loading: e,
                        amazonMarketplaces: t
                    }), c.createElement(O, {
                        refetchData: this.refetchData,
                        crates: r,
                        loading: e
                    }), c.createElement(x, {
                        emoteSets: a,
                        loading: e
                    }), c.createElement(y, {
                        badges: i,
                        loading: e
                    }), c.createElement(j, null))
                }, t = l.__decorate([Object(u.a)(R)], t)
            }(c.Component),
            Z = Object(r.d)(Object(f.d)("InventoryPage", {
                autoReportInteractive: !0,
                destination: g.a.Inventory
            }), Object(p.a)({
                location: v.PageviewLocation.Inventory
            }))(A),
            B = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e)
                }
            }, function(e) {
                return Object(r.b)({
                    onAnonymousVisit: function() {
                        return Object(o.f)(a.a.InventoryPage)
                    }
                }, e)
            })(Z);
        n.d(t, "InventoryPage", function() {
            return B
        })
    },
    Jc4Y: function(e, t) {},
    Ouuk: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e || (e = navigator.userAgent), !!i.exec(e)
        };
        var i = /\scurse\/\d/
    },
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
    iMOk: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, n = Object(a.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var i = e.bitsConfig.indexedActions[s.f];
                i || (i = Object(c.b)());
                var m = i.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (m) {
                    var u = Object(l.b)(m);
                    return void 0 !== e.themeOverride && (e.themeOverride === o.a.Light ? u.dark = u.light : u.light = u.dark), t = r.createElement(d.a, {
                        className: "bits-count--img",
                        sources: u
                    }), r.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, r.createElement("span", null, t, " ", e.withText ? n : ""))
                }
            }
            return r.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, r.createElement("span", null, n))
        }
        var r = n("U7vG"),
            a = n("6sO2"),
            o = n("NXs7"),
            s = n("3iBR"),
            l = n("iydZ"),
            c = n("CFVp"),
            d = n("qe65");
        n("1pvm");
        n.d(t, "a", function() {
            return i
        })
    },
    "j7/Y": function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0;
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
        var r = n("TToO"),
            a = n("OAwv"),
            o = n("U7vG"),
            s = n("F8kA"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e) var n = setInterval(function() {
                var i = !1,
                    r = !1;
                try {
                    i = e.closed, r = !!e.success
                } catch (e) {}
                if (i || r) {
                    t(r);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(n)
                }
            }, 500);
            else i.i.warn("[onPopupClose] Attempted to observe a window that failed to open.")
        };
        var i = n("6sO2")
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
        r.loc.source = {
            body: '#import "twilight/features/fuel/models/amazon-marketplace.gql"\n#import "twilight/features/fuel/models/crate.gql"\nquery Inventory {\ncurrentUser{\nid\namazonMarketplaces {\n...amazonMarketplace\n}\nbitsBalance\ncrates {\n...crate\n}\navailableBadges(domains:CRATE){\nid\nimageURL(size:QUADRUPLE)\ntitle\n}\nemoteSets(domains:CRATE){\nid\nemotes{\nid\ntoken\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n("UP6l").definitions)), r.definitions = r.definitions.concat(i(n("l83l").definitions)), e.exports = r
    }
});
//# sourceMappingURL=pages.inventory-5c648443273d02fdc4ec8bd512db2d14.js.map