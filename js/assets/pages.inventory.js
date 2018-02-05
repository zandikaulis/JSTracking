webpackJsonp([53], {
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
            s = n("Aj/L"),
            c = n("TToO"),
            l = n("U7vG"),
            d = n("6sO2"),
            m = n("yWCw"),
            u = n("7vx8"),
            p = n("j7/Y"),
            v = n("w9tK"),
            g = n("vH/s"),
            k = n("CSlQ"),
            f = n("Ouuk"),
            h = n("jF7o"),
            y = n("Odds"),
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCrate = function(e) {
                        return l.createElement(y.W, {
                            key: e.id
                        }, l.createElement(y.U, {
                            onClick: t.handleOpenClick,
                            "data-open-url": e.openURL
                        }, l.createElement(y.j, {
                            ratio: y.k.Aspect1x1
                        }, l.createElement(y._20, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: y.I.Flex,
                            padding: 2,
                            border: !0
                        }, l.createElement(y.R, {
                            fullHeight: !0,
                            fullWidth: !0
                        }, l.createElement("img", {
                            alt: Object(d.d)("Crate", "CratesList"),
                            src: e.iconURL
                        })))), l.createElement(y._24, null, "Open Now")))
                    }, t.handleOpenClick = function(e) {
                        ! function(e, t) {
                            var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                            n && !Object(f.a)() && (n.focus(), Object(h.a)(n, function(e) {
                                t(e)
                            }))
                        }(e.currentTarget.dataset.openUrl || "", t.reload)
                    }, t.reload = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (this.props.loading) return l.createElement(y._0, {
                        fillContent: !0
                    });
                    if (!this.props.crates) return null;
                    var e = this.props.crates,
                        t = e.map(this.renderCrate);
                    return l.createElement(y.W, {
                        "data-test-selector": "crates-list__wrapper",
                        margin: {
                            y: 1
                        }
                    }, l.createElement(y.W, {
                        display: y.I.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(y.W, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(y._24, {
                        type: y._29.H3
                    }, Object(d.d)("Crates", "CratesList"))), l.createElement(y._24, {
                        type: y._29.H3,
                        color: y.F.Alt2
                    }, Object(d.e)(e.length))), l.createElement(y._35, {
                        childWidth: y._36.Small,
                        placeholderItems: 8
                    }, t))
                }, t
            }(l.Component),
            _ = Object(a.d)(Object(k.d)("CratesList", {
                autoReportInteractive: !0
            }))(b),
            E = n("bdhb"),
            O = (n("Jc4Y"), "drops-list_drop-award"),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDropsDescription = function(e) {
                        return e.length < 1 ? Object(d.d)("Drops are a fun new way to get in-game loot just for watching your favorite channels on Twitch! <x:link>Learn more</x:link>", {
                            "x:link": function(e) {
                                return l.createElement("a", {
                                    href: "https://help.twitch.tv/customer/en/portal/topics/301257-getting-started/articles",
                                    target: "_blank"
                                }, e)
                            }
                        }, "DropsList") : Object(d.d)("Drops you have received are accessed within their corresponding games. Log into the game to experience your new content.", "DropsList")
                    }, t.renderDrop = function(e, t) {
                        return l.createElement(y.W, {
                            key: t,
                            className: "drops-list__drop-award",
                            "data-test-selector": O,
                            margin: {
                                right: 2,
                                bottom: 1
                            },
                            display: y.I.InlineFlex,
                            flexDirection: y.K.Column
                        }, l.createElement(y._20, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: y.I.Flex,
                            justifyContent: y.V.Center,
                            padding: 2,
                            border: !0
                        }, l.createElement("img", {
                            alt: Object(d.d)("Drop image", "DropsListPresentation"),
                            src: e.node.imageURL
                        })), l.createElement(y.W, {
                            padding: {
                                y: .5
                            }
                        }, l.createElement(y._24, {
                            bold: !0,
                            ellipsis: !0
                        }, e.node.game.name)))
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading) return l.createElement(y._0, {
                        fillContent: !0
                    });
                    if (!this.props.data || this.props.data.error || !this.props.data.currentUser || !this.props.data.currentUser.inventory.drops.nodes) return null;
                    var t = this.props.data.currentUser.inventory.drops.nodes,
                        n = t.map(function(t, n) {
                            return e.renderDrop(t, n)
                        });
                    return l.createElement(y.W, {
                        "data-test-selector": "drops-list_wrapper",
                        margin: {
                            y: 1
                        }
                    }, l.createElement(y.W, {
                        display: y.I.Flex
                    }, l.createElement(y.W, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(y._24, {
                        type: y._29.H3
                    }, Object(d.d)("Drops", "DropsList"))), l.createElement(y._24, {
                        type: y._29.H3,
                        color: y.F.Alt2
                    }, Object(d.e)(t.length))), l.createElement(y.W, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(y._24, null, this.getDropsDescription(t))), n)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(u.a)(E)], t)
            }(l.Component),
            N = Object(a.d)(Object(k.d)("DropsList"))(S),
            F = n("+Znq"),
            C = n("iMOk"),
            w = n("CFVp"),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bitsConfig = Object(w.a)(), t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Inventory", "InventoryTitleBar");
                    if (this.props.loading) return l.createElement(y._20, {
                        className: "title-bar",
                        display: y.I.Flex,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(y.W, {
                        flexGrow: 1
                    }, l.createElement(y._24, {
                        type: y._29.H2
                    }, e)), l.createElement(y.W, {
                        display: y.I.Flex,
                        margin: {
                            right: 3
                        },
                        alignItems: y.c.Center
                    }, l.createElement(y._4, {
                        width: 135,
                        height: 30
                    })), l.createElement(y.W, {
                        alignSelf: y.d.Baseline
                    }, l.createElement(y._4, {
                        width: 180,
                        height: 30
                    })));
                    var t = this.props.amazonMarketplaces.map(function(e) {
                            return l.createElement(y.U, {
                                key: e.id,
                                linkTo: "https://" + e.orderHistoryRedirectURL,
                                targetBlank: !0
                            }, e.displayText)
                        }),
                        n = Object(d.d)("You have {bitsComponent}", {
                            bitsComponent: l.createElement(C.a, {
                                count: this.props.bitsBalance,
                                bitsConfig: this.bitsConfig,
                                withImage: !0,
                                withText: !0
                            })
                        }, "InventoryTitleBar");
                    return l.createElement(y._20, {
                        className: "title-bar",
                        display: y.I.Flex,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(y.W, {
                        flexGrow: 1
                    }, l.createElement(y._24, {
                        type: y._29.H2
                    }, e)), l.createElement(y.W, {
                        display: y.I.Flex,
                        margin: {
                            right: 3
                        },
                        alignItems: y.c.Center
                    }, l.createElement(y._24, null, n)), l.createElement(y.W, {
                        alignSelf: y.d.Baseline
                    }, l.createElement(F.a, null, l.createElement(y.u, {
                        type: y.z.Hollow
                    }, Object(d.d)("View your Twitch Order History", "InventoryTitleBar")), l.createElement(y.p, null, l.createElement(y.W, {
                        padding: 1
                    }, t)))))
                }, t
            }(l.Component),
            j = Object(a.d)(Object(k.d)("TitleBar", {
                autoReportInteractive: !0
            }))(x),
            L = n("xpYL"),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refetchData = function() {
                        t.props.data && t.props.data.refetch && t.props.data.refetch()
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.n.setPageTitle(Object(d.d)("Inventory", "InventoryPage"))
                }, t.prototype.render = function() {
                    if (!this.props.isLoggedIn) return this.props.onAnonymousVisit(), l.createElement(m.a, {
                        message: Object(d.d)("You must be logged in to view this page", "InventoryPage")
                    });
                    var e = !0,
                        t = [],
                        n = 0,
                        i = [];
                    return this.props.data.loading || this.props.data.error || (e = !1, t = this.props.data.currentUser.amazonMarketplaces, n = this.props.data.currentUser.bitsBalance, i = this.props.data.currentUser.crates), l.createElement(y.W, {
                        className: "inventory",
                        padding: 3
                    }, l.createElement(j, {
                        bitsBalance: n,
                        loading: e,
                        amazonMarketplaces: t
                    }), l.createElement(_, {
                        refetchData: this.refetchData,
                        crates: i,
                        loading: e
                    }), l.createElement(N, null))
                }, t = c.__decorate([Object(u.a)(L)], t)
            }(l.Component),
            D = Object(a.d)(Object(k.d)("InventoryPage", {
                autoReportInteractive: !0,
                destination: v.a.Inventory
            }), Object(p.a)({
                location: g.PageviewLocation.Inventory
            }))(T),
            I = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e)
                }
            }, function(e) {
                return Object(a.b)({
                    onAnonymousVisit: function() {
                        return Object(o.f)(r.a.InventoryPage)
                    }
                }, e)
            })(D);
        n.d(t, "InventoryPage", function() {
            return I
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
            var t, n = Object(r.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var i = e.bitsConfig.indexedActions[s.f];
                i || (i = Object(l.b)());
                var m = i.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (m) {
                    var u = Object(c.b)(m);
                    return void 0 !== e.themeOverride && (e.themeOverride === o.a.Light ? u.dark = u.light : u.light = u.dark), t = a.createElement(d.a, {
                        className: "bits-count--img",
                        sources: u
                    }), a.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, a.createElement("span", null, t, " ", e.withText ? n : ""))
                }
            }
            return a.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, a.createElement("span", null, n))
        }
        var a = n("U7vG"),
            r = n("6sO2"),
            o = n("NXs7"),
            s = n("3iBR"),
            c = n("iydZ"),
            l = n("CFVp"),
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
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    o = r.content,
                                    s = r.medium,
                                    l = r.content_index;
                                c.n.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: l,
                                    location: e.location
                                }, t))
                            }
                        }, c.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return o.createElement(t, a.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
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
                    }, i
                }(o.Component);
                return Object(s.f)(n)
            }
        }
        var a = n("TToO"),
            r = n("OAwv"),
            o = n("U7vG"),
            s = n("F8kA"),
            c = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e) var n = setInterval(function() {
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
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
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
                end: 328
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/fuel/models/amazon-marketplace.gql"\n#import "twilight/features/fuel/models/crate.gql"\nquery Inventory {\ncurrentUser{\nid\namazonMarketplaces {\n...amazonMarketplace\n}\nbitsBalance\ncrates {\n...crate\n}\navailableBadges(domains:CRATE){\nid\nimageURL\ntitle\n}\nemoteSets(domains:CRATE){\nid\nemotes{\nid\ntoken\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("UP6l").definitions)), a.definitions = a.definitions.concat(i(n("l83l").definitions)), e.exports = a
    }
});
//# sourceMappingURL=pages.inventory-5038d5f2481d1e4b67018f3c617a29f4.js.map