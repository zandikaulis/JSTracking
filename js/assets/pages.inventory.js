webpackJsonp([58], {
    "1pvm": function(e, t) {},
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
                        return c.createElement(h._7, {
                            key: e.id,
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(h.j, {
                            ratio: h.k.Aspect1x1
                        }, c.createElement(h._30, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: h.Q.Flex,
                            padding: 2,
                            border: !0
                        }, c.createElement(h._1, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, c.createElement("img", {
                            src: e.imageURL,
                            title: e.title,
                            alt: e.title
                        })))), c.createElement(h.P, {
                            type: h._44.Strong
                        }, e.title))
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return c.createElement(h._9, {
                        fillContent: !0
                    });
                    if (!this.props.badges) return null;
                    var e = this.props.badges,
                        t = e.map(this.renderBadge);
                    return c.createElement(h._7, {
                        margin: {
                            y: 1
                        }
                    }, c.createElement(h._7, {
                        display: h.Q.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h._7, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(h.P, {
                        type: h._44.H3
                    }, Object(d.d)("Badges from Crates", "BadgesList"))), c.createElement(h.P, {
                        type: h._44.H3,
                        color: h.J.Alt2
                    }, Object(d.e)(e.length))), c.createElement(h._7, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h.P, null, Object(d.d)('You can find your chat badge in Chat Settings under "Edit Appearance".', "BadgesList"))), c.createElement(h._50, {
                        childWidth: h._51.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(c.Component),
            b = Object(a.d)(Object(f.d)("BadgesList", {
                autoReportInteractive: !0
            }))(k),
            y = n("Ouuk"),
            E = n("jF7o");
        var _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCrate = function(e) {
                        return c.createElement(h._7, {
                            key: e.id
                        }, c.createElement(h._5, {
                            onClick: t.handleOpenClick,
                            "data-open-url": e.openURL
                        }, c.createElement(h.j, {
                            ratio: h.k.Aspect1x1
                        }, c.createElement(h._30, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: h.Q.Flex,
                            padding: 2,
                            border: !0
                        }, c.createElement(h._1, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, c.createElement("img", {
                            alt: Object(d.d)("Crate", "CratesList"),
                            src: e.iconURL
                        })))), c.createElement(h.P, null, "Open Now")))
                    }, t.handleOpenClick = function(e) {
                        ! function(e, t) {
                            var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                            n && !Object(y.a)() && (n.focus(), Object(E.a)(n, function(e) {
                                t(e)
                            }))
                        }(e.currentTarget.dataset.openUrl || "", t.reload)
                    }, t.reload = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return c.createElement(h._9, {
                        fillContent: !0
                    });
                    if (!this.props.crates) return null;
                    var e = this.props.crates,
                        t = e.map(this.renderCrate);
                    return c.createElement(h._7, {
                        "data-test-selector": "crates-list__wrapper",
                        margin: {
                            y: 1
                        }
                    }, c.createElement(h._7, {
                        display: h.Q.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h._7, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(h.P, {
                        type: h._44.H3
                    }, Object(d.d)("Twitch Crates", "CratesList"))), c.createElement(h.P, {
                        type: h._44.H3,
                        color: h.J.Alt2
                    }, Object(d.e)(e.length))), c.createElement(h._50, {
                        childWidth: h._51.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(c.Component),
            S = Object(a.d)(Object(f.d)("CratesList", {
                autoReportInteractive: !0
            }))(_),
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
                        return c.createElement(h._7, {
                            key: n,
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(h._30, {
                            display: h.Q.Flex,
                            alignItems: h.c.Center,
                            justifyContent: h._6.Center,
                            padding: 1,
                            border: !0,
                            position: h._14.Relative
                        }, c.createElement("img", {
                            src: t.imageURL,
                            alt: Object(d.d)("Drop image for {gameName}", {
                                gameName: n
                            }, "DropsListPresentation")
                        }), c.createElement(h._30, {
                            position: h._14.Absolute,
                            attachBottom: !0,
                            attachRight: !0,
                            className: "drops-list__count",
                            color: h.J.Overlay,
                            borderRadius: h.s.Small,
                            padding: .5
                        }, c.createElement(h.P, {
                            fontSize: h.U.Size4,
                            "aria-label": Object(d.d)("Count of Drops awarded for {gameName}", {
                                gameName: n
                            }, "DropsListPresentation")
                        }, e.count))), c.createElement(h.P, {
                            type: h._44.Strong
                        }, n))
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading) return c.createElement(h._9, {
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
                    return c.createElement(h._7, {
                        "data-test-selector": "drops-list_wrapper",
                        margin: {
                            y: 1
                        }
                    }, c.createElement(h._7, {
                        display: h.Q.Flex
                    }, c.createElement(h._7, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(h.P, {
                        type: h._44.H3
                    }, Object(d.d)("Drops", "DropsList"))), c.createElement(h.P, {
                        type: h._44.H3,
                        color: h.J.Alt2
                    }, Object(d.e)(t.length))), c.createElement(h._7, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h.P, null, this.getDropsDescription(t))), c.createElement(h._50, {
                        childWidth: h._51.Small,
                        noGrow: !0
                    }, i))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(u.a)(O)], t)
            }(c.Component)),
            j = Object(a.d)(Object(f.d)("DropsList"))(N),
            C = n("Tzcg"),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderEmote = function(e) {
                        var t = Object(C.b)([e])[0],
                            n = t.srcSet.split(", ").pop().split(" ").shift();
                        return c.createElement(h._7, {
                            key: t.id,
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(h.j, {
                            ratio: h.k.Aspect1x1
                        }, c.createElement(h._30, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: h.Q.Flex,
                            padding: 2,
                            border: !0
                        }, c.createElement(h._1, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, c.createElement("img", {
                            src: n,
                            title: t.displayName,
                            alt: t.displayName
                        })))), c.createElement(h.P, {
                            type: h._44.Strong
                        }, t.displayName))
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return c.createElement(h._9, {
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
                    return c.createElement(h._7, {
                        margin: {
                            y: 1
                        }
                    }, c.createElement(h._7, {
                        display: h.Q.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h._7, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(h.P, {
                        type: h._44.H3
                    }, Object(d.d)("Emotes from Crates", "EmoticonsList"))), c.createElement(h.P, {
                        type: h._44.H3,
                        color: h.J.Alt2
                    }, Object(d.e)(t.length))), c.createElement(h._7, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h.P, null, Object(d.d)("You can find your new emote in the emote selector for Chat, Pulse, Feeds, and Whispers.", "EmoticonsList"))), c.createElement(h._50, {
                        childWidth: h._51.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(c.Component),
            L = Object(a.d)(Object(f.d)("EmoticonsList", {
                autoReportInteractive: !0
            }))(F),
            x = n("+Znq"),
            w = n("iMOk"),
            D = n("CFVp"),
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bitsConfig = Object(D.a)(), t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Inventory", "InventoryTitleBar");
                    if (this.props.loading) return c.createElement(h._30, {
                        className: "title-bar",
                        display: h.Q.Flex,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, c.createElement(h._7, {
                        flexGrow: 1
                    }, c.createElement(h.P, {
                        type: h._44.H2
                    }, e)), c.createElement(h._7, {
                        display: h.Q.Flex,
                        margin: {
                            right: 3
                        },
                        alignItems: h.c.Center
                    }, c.createElement(h._13, {
                        width: 135,
                        height: 30
                    })), c.createElement(h._7, {
                        alignSelf: h.d.Baseline
                    }, c.createElement(h._13, {
                        width: 180,
                        height: 30
                    })));
                    var t = this.props.amazonMarketplaces.map(function(e) {
                            return c.createElement(h._5, {
                                key: e.id,
                                linkTo: "https://" + e.orderHistoryRedirectURL,
                                targetBlank: !0
                            }, e.displayText)
                        }),
                        n = Object(d.d)("You have {bitsComponent}", {
                            bitsComponent: c.createElement(w.a, {
                                count: this.props.bitsBalance,
                                bitsConfig: this.bitsConfig,
                                withImage: !0,
                                withText: !0
                            })
                        }, "InventoryTitleBar");
                    return c.createElement(h._30, {
                        className: "title-bar",
                        display: h.Q.Flex,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, c.createElement(h._7, {
                        flexGrow: 1
                    }, c.createElement(h.P, {
                        type: h._44.H2
                    }, e)), c.createElement(h._7, {
                        display: h.Q.Flex,
                        margin: {
                            right: 3
                        },
                        alignItems: h.c.Center
                    }, c.createElement(h.P, null, n)), c.createElement(h._7, {
                        alignSelf: h.d.Baseline
                    }, c.createElement(x.a, null, c.createElement(h.u, {
                        type: h.A.Hollow
                    }, Object(d.d)("View your Twitch Order History", "InventoryTitleBar")), c.createElement(h.p, null, c.createElement(h._7, {
                        padding: 1
                    }, t)))))
                }, t
            }(c.Component),
            R = Object(a.d)(Object(f.d)("TitleBar", {
                autoReportInteractive: !0
            }))(U),
            P = n("xpYL"),
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
                        a = [],
                        r = [];
                    return this.props.data.loading || this.props.data.error || (e = !1, t = this.props.data.currentUser.amazonMarketplaces, n = this.props.data.currentUser.bitsBalance, i = this.props.data.currentUser.availableBadges, a = this.props.data.currentUser.crates, r = this.props.data.currentUser.emoteSets), c.createElement(h._7, {
                        className: "inventory",
                        padding: 3
                    }, c.createElement(R, {
                        bitsBalance: n,
                        loading: e,
                        amazonMarketplaces: t
                    }), c.createElement(S, {
                        refetchData: this.refetchData,
                        crates: a,
                        loading: e
                    }), c.createElement(L, {
                        emoteSets: r,
                        loading: e
                    }), c.createElement(b, {
                        badges: i,
                        loading: e
                    }), c.createElement(j, null))
                }, t = s.__decorate([Object(u.a)(P)], t)
            }(c.Component),
            A = Object(a.d)(Object(f.d)("InventoryPage", {
                autoReportInteractive: !0,
                destination: g.a.Inventory
            }), Object(p.a)({
                location: v.PageviewLocation.Inventory
            }))(I);
        var T = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(l.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                onAnonymousVisit: function() {
                    return Object(o.f)(r.a.InventoryPage)
                }
            }, e)
        })(A);
        n.d(t, "InventoryPage", function() {
            return T
        })
    },
    Jc4Y: function(e, t) {},
    Ouuk: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            e || (e = navigator.userAgent);
            return !!i.exec(e)
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
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("NXs7"),
            o = n("3iBR"),
            l = n("iydZ"),
            s = n("CFVp"),
            c = n("qe65");
        n("1pvm");

        function d(e) {
            var t, n = Object(a.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var d = e.bitsConfig.indexedActions[o.g];
                d || (d = Object(s.b)());
                var m = d.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (m) {
                    var u = Object(l.b)(m, void 0, e.animated);
                    return void 0 !== e.themeOverride && (e.themeOverride === r.a.Light ? u.dark = u.light : u.light = u.dark), t = i.createElement(c.a, {
                        className: "bits-count--img",
                        sources: u
                    }), i.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, i.createElement("span", null, t, " ", e.withText ? n : ""))
                }
            }
            return i.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, i.createElement("span", null, n))
        }
        n.d(t, "a", function() {
            return d
        })
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (!e) return void i.j.warn("[onPopupClose] Attempted to observe a window that failed to open.");
            var n = setInterval(function() {
                var i = !1,
                    a = !1;
                try {
                    i = e.closed, a = !!e.success
                } catch (e) {}
                if (i || a) {
                    t(a);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(n)
                }
            }, 500)
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
//# sourceMappingURL=pages.inventory-7a8c464a97c123d124bc64b29f66f024.js.map