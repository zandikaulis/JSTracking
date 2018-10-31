(window.webpackJsonp = window.webpackJsonp || []).push([
    [58], {
        "9fCB": function(e, t) {
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
        CgqK: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Inventory_DropsList_CurrentUser"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "itemNamesEnabled"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "id"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [{
                                                                        kind: "Directive",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "include"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "if"
                                                                            },
                                                                            value: {
                                                                                kind: "Variable",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "itemNamesEnabled"
                                                                                }
                                                                            }
                                                                        }]
                                                                    }]
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "name"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [{
                                                                        kind: "Directive",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "include"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "if"
                                                                            },
                                                                            value: {
                                                                                kind: "Variable",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "itemNamesEnabled"
                                                                                }
                                                                            }
                                                                        }]
                                                                    }]
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
                    end: 229
                }
            };
            n.loc.source = {
                body: "query Inventory_DropsList_CurrentUser($itemNamesEnabled: Boolean!) {\ncurrentUser {\nid\ninventory {\ndrops {\nnodes {\nnode {\ngame {\nname\n}\nimageURL\nid @include (if: $itemNamesEnabled)\nname @include (if: $itemNamesEnabled)\n}\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        HWNB: function(e, t, n) {},
        JCeY: function(e, t) {
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
        OpME: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "f", function() {
                return g
            }), n.d(t, "d", function() {
                return v
            });
            var a = n("mrSG"),
                i = n("lZdE"),
                r = n("cpJf"),
                o = {
                    "^B-?\\)$": "B)",
                    "^:-?[z|Z|\\|]$": ":|",
                    "^:-?\\)$": ":)",
                    "^:-?\\($": ":(",
                    "^:-?(p|P)$": ":P",
                    "^;-?(p|P)$": ";P",
                    "^:-?[\\\\/]$": ":/",
                    "^;-?\\)$": ";)",
                    "^R-?\\)$": "R)",
                    "^:>$": ":>",
                    "^:&gt;$": ":>",
                    "^[oO](_|\\.)[oO]$": "O_o",
                    "^:-?D$": ":D",
                    "^:-?(o|O)$": ":O",
                    "^>\\($": ">(",
                    "^:-?(?:7|L)$": ":7",
                    "^:-?(S|s)$": ":S",
                    "^#-?[\\\\/]$": "#/",
                    "^<\\]$": "<]",
                    "^<3$": "<3",
                    "^&lt;3$": "<3",
                    "^&lt;\\]$": "<]",
                    "^&gt;\\($": ">("
                },
                l = ["1.0", "2.0", "3.0"],
                c = new Set([457, 33, 42, 0]);

            function s(e) {
                for (var t = [], n = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var n = f(e.token),
                            i = o[n] || n,
                            r = l.reduce(function(t, n) {
                                var a = t;
                                return a && (a = a.concat(", ")), a.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x")
                            }, "");
                        t.push(a.__assign({
                            displayName: i,
                            srcSet: r
                        }, e))
                    }, i = 0, r = e; i < r.length; i++) {
                    n(r[i])
                }
                return t
            }

            function d(e, t) {
                var n = s(e);
                return t && (n = function(e, t) {
                    return e.map(function(e) {
                        return a.__assign({}, e, {
                            setID: t
                        })
                    })
                }(n, t)), n
            }

            function m(e) {
                return e.filter(function(e) {
                    return !!e && !!e.id && !!e.token
                }).sort(function(e, t) {
                    return parseInt(e.id, 10) - parseInt(t.id, 10)
                })
            }

            function u(e) {
                for (var t = [], n = 0, a = e; n < a.length; n++) {
                    var i = a[n];
                    if (i && i.id && i.emotes) {
                        for (var r = {
                                id: i.id,
                                emotes: []
                            }, o = 0, l = i.emotes; o < l.length; o++) {
                            var c = l[o];
                            c && c.id && c.token && r.emotes.push(c)
                        }
                        t.push(r)
                    }
                }
                return t
            }

            function p(e) {
                for (var t = [], n = [], a = 0, i = e; a < i.length; a++) {
                    var r = i[a];
                    if (r && r.id && r.emotes) {
                        var o = {
                            id: r.id,
                            emotes: d(m(r.emotes), r.id)
                        };
                        r.owner && (o.owner = r.owner), c.has(parseInt(r.id, 10)) ? t.push(o) : n.push(o)
                    }
                }
                return n.concat(t)
            }
            var f = function(e) {
                    return function(e) {
                        return /[\|\\\^\$\*\+\?\:\#]/.test(e)
                    }(e) ? "^" + e.replace(/\\(?=[&;:])/g, "") + "$" : e
                },
                g = function(e, t, n) {
                    var a = n || r.d,
                        o = [],
                        l = [],
                        c = [],
                        s = new RegExp("^" + Object(i.a)(t), "i");
                    return e.forEach(function(e) {
                        a[e.token] ? c.push(e) : e.token.match(s) ? o.push(e) : l.push(e)
                    }), o.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), l.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), c.sort(function(e, t) {
                        return a[t.token].count - a[e.token].count
                    }), c.concat(o).concat(l)
                },
                v = function(e) {
                    var t = {};
                    return e.filter(function(e) {
                        return !t.hasOwnProperty(e.token) && (t[e.token] = !0)
                    })
                }
        },
        UqZg: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                i = n("fvjX"),
                r = n("1/iK"),
                o = n("y5D0"),
                l = n("kRBY"),
                c = n("mrSG"),
                s = n("q1tI"),
                d = n("/7QA"),
                m = n("ZDlU"),
                u = n("yR8l"),
                p = n("V+GM"),
                f = n("NvVO"),
                g = n("2xye"),
                v = n("GnwI"),
                k = n("Ue10"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderBadge = function(e) {
                            return s.createElement(k.Xa, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, s.createElement(k.o, {
                                ratio: k.p.Aspect1x1
                            }, s.createElement(k.Cb, {
                                fullHeight: !0,
                                fullWidth: !0,
                                display: k.X.Flex,
                                padding: 2,
                                border: !0
                            }, s.createElement(k.Pa, {
                                fullHeight: !0,
                                fullWidth: !0
                            }, s.createElement("img", {
                                src: e.imageURL,
                                title: e.title,
                                alt: e.title
                            })))), s.createElement(k.W, {
                                type: k.Sb.Strong
                            }, e.title))
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        if (this.props.loading) return s.createElement(k.Za, {
                            fillContent: !0
                        });
                        if (!this.props.badges) return null;
                        var e = this.props.badges,
                            t = e.map(this.renderBadge);
                        return s.createElement(k.Xa, {
                            margin: {
                                y: 1
                            }
                        }, s.createElement(k.Xa, {
                            display: k.X.Flex,
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(k.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(k.W, {
                            type: k.Sb.H3
                        }, Object(d.d)("Badges from Crates", "BadgesList"))), s.createElement(k.W, {
                            type: k.Sb.H3,
                            color: k.O.Alt2
                        }, Object(d.f)(e.length))), s.createElement(k.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(k.W, null, Object(d.d)('You can find your chat badge in Chat Settings under "Edit Appearance".', "BadgesList"))), s.createElement(k.Yb, {
                            childWidth: k.Zb.Small,
                            placeholderItems: 8
                        }, t))
                    }, t
                }(s.Component),
                b = Object(i.compose)(Object(v.b)("BadgesList", {
                    autoReportInteractive: !0
                }))(h),
                y = n("SDEh"),
                E = n("edgk");
            var S, N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCrate = function(e) {
                            return s.createElement(k.Xa, {
                                key: e.id
                            }, s.createElement(k.Ua, {
                                onClick: t.handleOpenClick,
                                "data-open-url": e.openURL
                            }, s.createElement(k.o, {
                                ratio: k.p.Aspect1x1
                            }, s.createElement(k.Cb, {
                                fullHeight: !0,
                                fullWidth: !0,
                                display: k.X.Flex,
                                padding: 2,
                                border: !0
                            }, s.createElement(k.Pa, {
                                fullHeight: !0,
                                fullWidth: !0
                            }, s.createElement("img", {
                                alt: Object(d.d)("Crate", "CratesList"),
                                src: e.iconURL
                            })))), s.createElement(k.W, null, Object(d.d)("Open Now", "CratesList"))))
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
                    return c.__extends(t, e), t.prototype.render = function() {
                        if (this.props.loading) return s.createElement(k.Za, {
                            fillContent: !0
                        });
                        if (!this.props.crates) return null;
                        var e = this.props.crates,
                            t = e.map(this.renderCrate);
                        return s.createElement(k.Xa, {
                            "data-test-selector": "crates-list__wrapper",
                            margin: {
                                y: 1
                            }
                        }, s.createElement(k.Xa, {
                            display: k.X.Flex,
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(k.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(k.W, {
                            type: k.Sb.H3
                        }, Object(d.d)("Twitch Crates", "CratesList"))), s.createElement(k.W, {
                            type: k.Sb.H3,
                            color: k.O.Alt2
                        }, Object(d.f)(e.length))), s.createElement(k.Yb, {
                            childWidth: k.Zb.Small,
                            placeholderItems: 8
                        }, t))
                    }, t
                }(s.Component),
                O = Object(i.compose)(Object(v.b)("CratesList", {
                    autoReportInteractive: !0
                }))(N),
                C = n("CgqK");
            n("HWNB");
            ! function(e) {
                e.Drop = "drops-list__drop", e.DropName = "drops-list__drop-name", e.Wrapper = "drops-list__wrapper"
            }(S || (S = {}));
            var F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.itemNamesEnabled = d.b.get("drops_itemnames_enabled", !1), t.getDropsDescription = function(e) {
                            return e.length < 1 ? Object(d.d)("Drops are a fun new way to get in-game loot just for watching your favorite channels on Twitch! <x:link>Learn more</x:link>", {
                                "x:link": function(e) {
                                    return s.createElement("a", {
                                        href: "https://help.twitch.tv/customer/en/portal/topics/301257-getting-started/articles",
                                        target: "_blank"
                                    }, e)
                                }
                            }, "DropsList") : Object(d.d)("Drops you have received are accessed within their corresponding games. Log into the game to experience your new content.", "DropsList")
                        }, t.renderDrop = function(e) {
                            var n = e.drop.node,
                                a = t.itemNamesEnabled ? n.name : n.game.name;
                            return s.createElement(k.Xa, {
                                key: a,
                                margin: {
                                    bottom: 2
                                },
                                "data-test-selector": S.Drop
                            }, s.createElement(k.Cb, {
                                display: k.X.Flex,
                                alignItems: k.f.Center,
                                justifyContent: k.Wa.Center,
                                padding: 1,
                                border: !0,
                                position: k.hb.Relative
                            }, s.createElement("img", {
                                src: n.imageURL,
                                alt: Object(d.d)("Drop image for {gameName}", {
                                    gameName: a
                                }, "DropsListPresentation")
                            }), s.createElement(k.Cb, {
                                position: k.hb.Absolute,
                                attachBottom: !0,
                                attachRight: !0,
                                className: "drops-list__count",
                                color: k.O.Overlay,
                                borderRadius: k.x.Small,
                                padding: .5
                            }, s.createElement(k.W, {
                                fontSize: k.Ca.Size4,
                                ariaLabel: Object(d.d)("Count of Drops awarded for {gameName}", {
                                    gameName: a
                                }, "DropsListPresentation")
                            }, e.count))), s.createElement(k.W, {
                                type: k.Sb.Strong,
                                "data-test-selector": S.DropName
                            }, a))
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.postRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.postRender()
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.props.data.loading) return s.createElement(k.Za, {
                            fillContent: !0
                        });
                        if (!this.props.data || this.props.data.error || !this.props.data.currentUser || !this.props.data.currentUser.inventory.drops.nodes) return null;
                        var t = this.props.data.currentUser.inventory.drops.nodes,
                            n = t.reduce(function(t, n) {
                                if (e.itemNamesEnabled) {
                                    var a = n.node.id;
                                    return t.hasOwnProperty(a) ? t[a].count++ : t[n.node.id] = {
                                        count: 1,
                                        drop: n
                                    }, t
                                }
                                var i = n.node.game.name;
                                return t.hasOwnProperty(i) ? t[i].count++ : t[n.node.game.name] = {
                                    count: 1,
                                    drop: n
                                }, t
                            }, {}),
                            a = Object.keys(n).map(function(t) {
                                return e.renderDrop(n[t])
                            });
                        return s.createElement(k.Xa, {
                            "data-test-selector": S.Wrapper,
                            margin: {
                                y: 1
                            }
                        }, s.createElement(k.Xa, {
                            display: k.X.Flex
                        }, s.createElement(k.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(k.W, {
                            type: k.Sb.H3
                        }, Object(d.d)("Drops", "DropsList"))), s.createElement(k.W, {
                            type: k.Sb.H3,
                            color: k.O.Alt2
                        }, Object(d.f)(t.length))), s.createElement(k.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(k.W, null, this.getDropsDescription(t))), s.createElement(k.Yb, {
                            childWidth: k.Zb.Small,
                            noGrow: !0
                        }, a))
                    }, t.prototype.postRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(s.Component),
                D = Object(i.compose)(Object(u.a)(C, {
                    name: "data",
                    options: function() {
                        return {
                            variables: {
                                itemNamesEnabled: d.b.get("drops_itemnames_enabled", !1)
                            }
                        }
                    }
                }), Object(v.b)("DropsList"))(F),
                w = n("OpME"),
                j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderEmote = function(e) {
                            var t = Object(w.b)([e])[0],
                                n = t.srcSet.split(", ").pop().split(" ").shift();
                            return s.createElement(k.Xa, {
                                key: t.id,
                                margin: {
                                    bottom: 2
                                }
                            }, s.createElement(k.o, {
                                ratio: k.p.Aspect1x1
                            }, s.createElement(k.Cb, {
                                fullHeight: !0,
                                fullWidth: !0,
                                display: k.X.Flex,
                                padding: 2,
                                border: !0
                            }, s.createElement(k.Pa, {
                                fullHeight: !0,
                                fullWidth: !0
                            }, s.createElement("img", {
                                src: n,
                                title: t.displayName,
                                alt: t.displayName
                            })))), s.createElement(k.W, {
                                type: k.Sb.Strong
                            }, t.displayName))
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        if (this.props.loading) return s.createElement(k.Za, {
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
                                a = t[0];
                            return n.localeCompare(a)
                        }).map(function(e) {
                            e[0];
                            return e[1]
                        }).map(this.renderEmote);
                        return s.createElement(k.Xa, {
                            margin: {
                                y: 1
                            }
                        }, s.createElement(k.Xa, {
                            display: k.X.Flex,
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(k.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(k.W, {
                            type: k.Sb.H3
                        }, Object(d.d)("Emotes from Crates", "EmoticonsList"))), s.createElement(k.W, {
                            type: k.Sb.H3,
                            color: k.O.Alt2
                        }, Object(d.f)(t.length))), s.createElement(k.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(k.W, null, Object(d.d)("You can find your new emote in the emote selector for Chat, Pulse, Feeds, and Whispers.", "EmoticonsList"))), s.createElement(k.Yb, {
                            childWidth: k.Zb.Small,
                            placeholderItems: 8
                        }, t))
                    }, t
                }(s.Component),
                L = Object(i.compose)(Object(v.b)("EmoticonsList", {
                    autoReportInteractive: !0
                }))(j),
                R = n("eJ65"),
                W = n("VeT4"),
                I = n("4h+t"),
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.bitsConfig = Object(I.a)(), t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        var e = Object(d.d)("Inventory", "InventoryTitleBar");
                        if (this.props.loading) return s.createElement(k.Cb, {
                            className: "title-bar",
                            display: k.X.Flex,
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(k.Xa, {
                            flexGrow: 1
                        }, s.createElement(k.W, {
                            type: k.Sb.H2
                        }, e)), s.createElement(k.Xa, {
                            display: k.X.Flex,
                            margin: {
                                right: 3
                            },
                            alignItems: k.f.Center
                        }, s.createElement(k.gb, {
                            width: 135,
                            height: 30
                        })), s.createElement(k.Xa, {
                            alignSelf: k.g.Baseline
                        }, s.createElement(k.gb, {
                            width: 180,
                            height: 30
                        })));
                        var t = this.props.amazonMarketplaces.map(function(e) {
                                return s.createElement(k.Ua, {
                                    key: e.id,
                                    linkTo: "https://" + e.orderHistoryRedirectURL,
                                    targetBlank: !0
                                }, e.displayText)
                            }),
                            n = Object(d.d)("You have {bitsComponent}", {
                                bitsComponent: s.createElement(W.a, {
                                    count: this.props.bitsBalance,
                                    bitsConfig: this.bitsConfig,
                                    withImage: !0,
                                    withText: !0
                                })
                            }, "InventoryTitleBar");
                        return s.createElement(k.Cb, {
                            className: "title-bar",
                            display: k.X.Flex,
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(k.Xa, {
                            flexGrow: 1
                        }, s.createElement(k.W, {
                            type: k.Sb.H2
                        }, e)), s.createElement(k.Xa, {
                            display: k.X.Flex,
                            margin: {
                                right: 3
                            },
                            alignItems: k.f.Center
                        }, s.createElement(k.W, null, n)), s.createElement(k.Xa, {
                            alignSelf: k.g.Baseline
                        }, s.createElement(R.a, null, s.createElement(k.z, {
                            type: k.F.Hollow
                        }, Object(d.d)("View your Twitch Order History", "InventoryTitleBar")), s.createElement(k.u, null, s.createElement(k.Xa, {
                            padding: 1
                        }, t)))))
                    }, t
                }(s.Component),
                X = Object(i.compose)(Object(v.b)("TitleBar", {
                    autoReportInteractive: !0
                }))(U),
                _ = n("wdoW"),
                x = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.refetchData = function() {
                            t.props.data && t.props.data.refetch && t.props.data.refetch()
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.componentDidMount = function() {
                        d.p.setPageTitle(Object(d.d)("Inventory", "InventoryPage"))
                    }, t.prototype.render = function() {
                        if (!this.props.isLoggedIn) return this.props.onAnonymousVisit(), s.createElement(m.a, {
                            message: Object(d.d)("You must be logged in to view this page", "InventoryPage")
                        });
                        var e = !0,
                            t = [],
                            n = 0,
                            a = [],
                            i = [],
                            r = [];
                        return this.props.data.loading || this.props.data.error || (e = !1, t = this.props.data.currentUser.amazonMarketplaces, n = this.props.data.currentUser.bitsBalance, a = this.props.data.currentUser.availableBadges, i = this.props.data.currentUser.crates, r = this.props.data.currentUser.emoteSets), s.createElement(k.Xa, {
                            className: "inventory",
                            padding: 3
                        }, s.createElement(X, {
                            bitsBalance: n,
                            loading: e,
                            amazonMarketplaces: t
                        }), s.createElement(O, {
                            refetchData: this.refetchData,
                            crates: i,
                            loading: e
                        }), s.createElement(L, {
                            emoteSets: r,
                            loading: e
                        }), s.createElement(b, {
                            badges: a,
                            loading: e
                        }), s.createElement(D, null))
                    }, t = c.__decorate([Object(u.a)(_)], t)
                }(s.Component),
                B = Object(i.compose)(Object(v.b)("InventoryPage", {
                    autoReportInteractive: !0,
                    destination: f.a.Inventory
                }), Object(p.a)({
                    location: g.PageviewLocation.Inventory
                }))(x);
            var A = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(l.f)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    onAnonymousVisit: function() {
                        return Object(o.e)(r.a.InventoryPage)
                    }
                }, e)
            })(B);
            n.d(t, "InventoryPage", function() {
                return A
            })
        },
        cpJf: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "d", function() {
                    return r
                }), n.d(t, "c", function() {
                    return o
                }), n.d(t, "b", function() {
                    return i
                }),
                function(e) {
                    e.Chat = "stream_chat", e.Feeds = "feeds", e.Room = "chatroom", e.Whisper = "whisper", e.VodChat = "vod-chat"
                }(a || (a = {}));
            var i, r = {
                    TriHard: {
                        count: 196568036
                    },
                    Kappa: {
                        count: 192158118
                    },
                    "4Head": {
                        count: 155758710
                    },
                    PogChamp: {
                        count: 151485090
                    },
                    cmonBruh: {
                        count: 146352878
                    },
                    BibleThump: {
                        count: 56472964
                    },
                    WutFace: {
                        count: 45069031
                    },
                    Kreygasm: {
                        count: 41387580
                    },
                    DansGame: {
                        count: 38097659
                    },
                    hi5F: {
                        count: 34986404
                    },
                    SMOrc: {
                        count: 34734484
                    },
                    KappaPride: {
                        count: 34262839
                    },
                    VoHiYo: {
                        count: 27886434
                    },
                    SwiftRage: {
                        count: 24561900
                    },
                    ResidentSleeper: {
                        count: 24438298
                    },
                    EleGiggle: {
                        count: 19891526
                    },
                    FailFish: {
                        count: 19118343
                    },
                    NotLikeThis: {
                        count: 18802905
                    },
                    Keepo: {
                        count: 18351415
                    },
                    BabyRage: {
                        count: 18220906
                    },
                    MingLee: {
                        count: 18026207
                    },
                    pbfSSH: {
                        count: 16911241
                    },
                    forsenE: {
                        count: 14960299
                    },
                    HeyGuys: {
                        count: 14851569
                    },
                    ANELE: {
                        count: 14648986
                    },
                    PJSalt: {
                        count: 14438861
                    }
                },
                o = ["354", "49106", "4339", "48", "25", "55338", "70433", "1902", "68856", "81103", "76171", "27509"];
            ! function(e) {
                e.Web = "WEB", e.IOS = "IOS", e.Android = "ANDROID"
            }(i || (i = {}))
        },
        lZdE: function(e, t, n) {
            "use strict";

            function a(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            n.d(t, "a", function() {
                return a
            })
        },
        wdoW: function(e, t, n) {
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
            a.loc.source = {
                body: '#import "twilight/features/fuel/models/amazon-marketplace.gql"\n#import "twilight/features/fuel/models/crate.gql"\nquery Inventory {\ncurrentUser{\nid\namazonMarketplaces {\n...amazonMarketplace\n}\nbitsBalance\ncrates {\n...crate\n}\navailableBadges(domains:CRATE){\nid\nimageURL(size:QUADRUPLE)\ntitle\n}\nemoteSets(domains:CRATE){\nid\nemotes{\nid\ntoken\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }
            a.definitions = a.definitions.concat(r(n("JCeY").definitions)), a.definitions = a.definitions.concat(r(n("9fCB").definitions)), e.exports = a
        }
    }
]);