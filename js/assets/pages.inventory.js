webpackJsonp([55], {
    "1pvm": function(e, t) {},
    "8RY4": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Inventory_TitleBar"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 166
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/amazon-marketplace.gql"\nquery Inventory_TitleBar {\ncurrentUser {\nid\namazonMarketplaces {\n...amazonMarketplace\n}\nbitsBalance\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("UP6l").definitions)), e.exports = i
    },
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
            c = n("TToO"),
            d = n("U7vG"),
            l = n("6sO2"),
            p = n("yWCw"),
            m = n("j7/Y"),
            u = n("w9tK"),
            g = n("vH/s"),
            v = n("CSlQ"),
            f = n("7vx8"),
            k = n("Odds"),
            h = n("bdhb"),
            y = (n("Jc4Y"), "drops-list_drop-award"),
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getDropsDescription = function(e) {
                        return e.length < 1 ? Object(l.d)("Drops are a fun new way to get in-game loot just for watching your favorite channels on Twitch! <x:link>Learn more</x:link>", {
                            "x:link": function(e) {
                                return d.createElement("a", {
                                    href: "https://help.twitch.tv/customer/en/portal/topics/301257-getting-started/articles",
                                    target: "_blank"
                                }, e)
                            }
                        }, "DropsList") : Object(l.d)("Drops you have received are accessed within their corresponding games. Log into the game to experience your new content.", "DropsList")
                    }, t.renderDrop = function(e, t) {
                        return d.createElement(k.V, {
                            key: t,
                            className: "drops-list__drop-award",
                            "data-test-selector": y,
                            margin: {
                                right: 2,
                                bottom: 1
                            },
                            display: k.H.InlineFlex,
                            flexDirection: k.J.Column
                        }, d.createElement(k._19, {
                            fullHeight: !0,
                            fullWidth: !0,
                            display: k.H.Flex,
                            justifyContent: k.U.Center,
                            padding: 2,
                            border: !0
                        }, d.createElement("img", {
                            alt: Object(l.d)("Drop image", "DropsListPresentation"),
                            src: e.node.imageURL
                        })), d.createElement(k.V, {
                            padding: {
                                y: .5
                            }
                        }, d.createElement(k._23, {
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
                    if (this.props.data.loading) return d.createElement(k.Z, {
                        fillContent: !0
                    });
                    if (!this.props.data || this.props.data.error || !this.props.data.currentUser || !this.props.data.currentUser.inventory.drops.nodes) return null;
                    var t = this.props.data.currentUser.inventory.drops.nodes,
                        n = t.map(function(t, n) {
                            return e.renderDrop(t, n)
                        });
                    return d.createElement(k.V, {
                        "data-test-selector": "drops-list_wrapper",
                        margin: {
                            y: 1
                        }
                    }, d.createElement(k.V, {
                        display: k.H.Flex
                    }, d.createElement(k.V, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(k._23, {
                        type: k._28.H3
                    }, Object(l.d)("Drops", "DropsList"))), d.createElement(k._23, {
                        type: k._28.H3,
                        color: k.F.Alt2
                    }, Object(l.e)(t.length))), d.createElement(k.V, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(k._23, null, this.getDropsDescription(t))), n)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(f.a)(h)], t)
            }(d.Component),
            _ = Object(r.d)(Object(v.d)("DropsList"))(b),
            O = n("+Znq"),
            E = n("iMOk"),
            S = n("CFVp"),
            x = n("8RY4"),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bitsConfig = Object(S.a)(), t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = Object(l.d)("Inventory", "InventoryTitleBar");
                    if (this.props.data.loading || this.props.data.error) return d.createElement(k._19, {
                        className: "title-bar",
                        display: k.H.Flex,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(k.V, {
                        flexGrow: 1
                    }, d.createElement(k._23, {
                        type: k._28.H2
                    }, e)), d.createElement(k.V, {
                        display: k.H.Flex,
                        margin: {
                            right: 3
                        },
                        alignItems: k.c.Center
                    }, d.createElement(k._3, {
                        width: 135,
                        height: 30
                    })), d.createElement(k.V, {
                        alignSelf: k.d.Baseline
                    }, d.createElement(k._3, {
                        width: 180,
                        height: 30
                    })));
                    var t = this.props.data.currentUser.amazonMarketplaces.map(function(e) {
                            return d.createElement(k.T, {
                                key: e.id,
                                linkTo: "https://" + e.orderHistoryRedirectURL,
                                targetBlank: !0
                            }, e.displayText)
                        }),
                        n = Object(l.d)("You have {bitsComponent}", {
                            bitsComponent: d.createElement(E.a, {
                                count: this.props.data.currentUser.bitsBalance,
                                bitsConfig: this.bitsConfig,
                                withImage: !0,
                                withText: !0
                            })
                        }, "InventoryTitleBar");
                    return d.createElement(k._19, {
                        className: "title-bar",
                        display: k.H.Flex,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(k.V, {
                        flexGrow: 1
                    }, d.createElement(k._23, {
                        type: k._28.H2
                    }, e)), d.createElement(k.V, {
                        display: k.H.Flex,
                        margin: {
                            right: 3
                        },
                        alignItems: k.c.Center
                    }, d.createElement(k._23, null, n)), d.createElement(k.V, {
                        alignSelf: k.d.Baseline
                    }, d.createElement(O.a, null, d.createElement(k.u, {
                        type: k.z.Hollow
                    }, Object(l.d)("View your Twitch Order History", "InventoryTitleBar")), d.createElement(k.p, null, d.createElement(k.V, {
                        padding: 1
                    }, t)))))
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t
            }(d.Component),
            w = Object(r.d)(Object(v.d)("TitleBar"), Object(f.a)(x))(T),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    l.n.setPageTitle(Object(l.d)("Inventory", "InventoryPage"))
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? d.createElement(k.V, {
                        className: "inventory",
                        padding: 3
                    }, d.createElement(w, null), d.createElement(_, null)) : (this.props.onAnonymousVisit(), d.createElement(p.a, {
                        message: Object(l.d)("You must be logged in to view this page", "InventoryPage")
                    }))
                }, t
            }(d.Component),
            j = Object(r.d)(Object(v.d)("InventoryPage", {
                autoReportInteractive: !0,
                destination: u.a.Inventory
            }), Object(m.a)({
                location: g.PageviewLocation.Inventory
            }))(D),
            N = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e)
                }
            }, function(e) {
                return Object(r.b)({
                    onAnonymousVisit: function() {
                        return Object(o.f)(a.a.InventoryPage)
                    }
                }, e)
            })(j);
        n.d(t, "InventoryPage", function() {
            return N
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
    iMOk: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, n = Object(a.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var i = e.bitsConfig.indexedActions[s.f];
                i || (i = Object(d.b)());
                var p = i.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (p) {
                    var m = Object(c.b)(p);
                    return void 0 !== e.themeOverride && (e.themeOverride === o.a.Light ? m.dark = m.light : m.light = m.dark), t = r.createElement(l.a, {
                        className: "bits-count--img",
                        sources: m
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
            c = n("iydZ"),
            d = n("CFVp"),
            l = n("qe65");
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
                                    d = a.content_index;
                                c.n.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, c.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
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
            c = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
    }
});
//# sourceMappingURL=pages.inventory-564a346adca8ca14721fdfb776532ed2.js.map