(window.webpackJsonp = window.webpackJsonp || []).push([
    [57], {
        "8lI2": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "inventoryDropAward"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "DropAward"
                        }
                    },
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
                }],
                loc: {
                    start: 0,
                    end: 150
                }
            };
            n.loc.source = {
                body: "fragment inventoryDropAward on DropAward {\nnode {\ngame {\nname\n}\nimageURL\nid @include (if: $itemNamesEnabled)\nname @include (if: $itemNamesEnabled)\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
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
        CgqK: function(e, t, n) {
            var i = {
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
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "inventoryDropAward"
                                                            },
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
                    end: 217
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/inventory/components/drops-list/drop-award.gql"\nquery Inventory_DropsList_CurrentUser($itemNamesEnabled: Boolean!) {\ncurrentUser {\nid\ninventory {\ndrops {\nnodes {\n...inventoryDropAward\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("8lI2").definitions)), e.exports = i
        },
        Dm7F: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Inventory_Crates"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 114
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/fuel/models/crate.gql"\nquery Inventory_Crates {\ncurrentUser{\nid\ncrates {\n...crate\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("9fCB").definitions)), e.exports = i
        },
        HHZh: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Inventory_BadgeList"
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "inventoryBadge"
                                            },
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 167
                }
            };
            i.loc.source = {
                body: '#import "twilight/pages/inventory/components/badges-list/badge.gql"\nquery Inventory_BadgeList {\ncurrentUser{\nid\navailableBadges(domains:CRATE){\n...inventoryBadge\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("wwz6").definitions)), e.exports = i
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
                return d
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "d", function() {
                return v
            });
            var i = n("mrSG"),
                a = n("lZdE"),
                r = n("cpJf"),
                o = {
                    "B-?\\)": "B)",
                    "\\:-?[z|Z|\\|]": ":|",
                    "\\:-?\\)": ":)",
                    "\\:-?\\(": ":(",
                    "\\:-?(p|P)": ":P",
                    "\\;-?(p|P)": ";P",
                    "\\:-?[\\\\/]": ":/",
                    "\\;-?\\)": ";)",
                    "R-?\\)": "R)",
                    ":>": ":>",
                    "\\:\\&gt\\;": ":>",
                    "[oO](_|\\.)[oO]": "O_o",
                    "\\:-?D": ":D",
                    "\\:-?(o|O)": ":O",
                    ">\\\\(": ">(",
                    ":-?(?:7|L)": ":7",
                    "\\:-?(S|s)": ":S",
                    "#-?[\\\\/]": "#/",
                    "<\\]": "<]",
                    "<3": "<3",
                    "\\&lt\\;3": "<3",
                    "\\&lt\\;\\]": "<]",
                    "\\&gt\\;\\(": ">("
                },
                s = ["1.0", "2.0", "3.0"],
                c = new Set([457, 33, 42, 0]);

            function d(e) {
                for (var t = [], n = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var n = o[e.token] || e.token,
                            a = s.reduce(function(t, n) {
                                var i = t;
                                return i && (i = i.concat(", ")), i.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x")
                            }, "");
                        t.push(i.__assign({
                            displayName: n,
                            srcSet: a
                        }, e))
                    }, a = 0, r = e; a < r.length; a++) {
                    n(r[a])
                }
                return t
            }

            function l(e, t) {
                var n = d(e);
                return t && (n = function(e, t) {
                    return e.map(function(e) {
                        return i.__assign({}, e, {
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
                for (var t = [], n = 0, i = e; n < i.length; n++) {
                    var a = i[n];
                    if (a && a.id && a.emotes) {
                        for (var r = {
                                id: a.id,
                                emotes: []
                            }, o = 0, s = a.emotes; o < s.length; o++) {
                            var c = s[o];
                            c && c.id && c.token && r.emotes.push(c)
                        }
                        t.push(r)
                    }
                }
                return t
            }

            function p(e) {
                for (var t = [], n = [], i = 0, a = e; i < a.length; i++) {
                    var r = a[i];
                    if (r && r.id && r.emotes) {
                        var o = {
                            id: r.id,
                            emotes: l(m(r.emotes), r.id)
                        };
                        r.owner && (o.owner = r.owner), c.has(parseInt(r.id, 10)) ? t.push(o) : n.push(o)
                    }
                }
                return n.concat(t)
            }
            var f = function(e, t, n) {
                    var i = n || r.d,
                        o = [],
                        s = [],
                        c = [],
                        d = new RegExp("^" + Object(a.a)(t), "i");
                    return e.forEach(function(e) {
                        i[e.token] ? c.push(e) : e.token.match(d) ? o.push(e) : s.push(e)
                    }), o.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), s.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), c.sort(function(e, t) {
                        return i[t.token].count - i[e.token].count
                    }), c.concat(o).concat(s)
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
            var i, a = n("/MKj"),
                r = n("fvjX"),
                o = n("1/iK"),
                s = n("y5D0"),
                c = n("kRBY"),
                d = n("mrSG"),
                l = n("q1tI"),
                m = n("/7QA"),
                u = n("ZDlU"),
                p = n("yR8l"),
                f = n("V+GM"),
                v = n("NvVO"),
                g = n("2xye"),
                h = n("GnwI"),
                k = n("Ue10"),
                b = n("HHZh");
            ! function(e) {
                e.BadgeCount = "inventory_badge_count", e.BadgeImg = "inventory_badge_img", e.BadgeTitle = "inventory_badge_title"
            }(i || (i = {}));
            var y = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderBadge = function(e) {
                            return l.createElement(k.Xa, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, l.createElement(k.o, {
                                ratio: k.p.Aspect1x1
                            }, l.createElement(k.Eb, {
                                fullHeight: !0,
                                fullWidth: !0,
                                display: k.X.Flex,
                                padding: 2,
                                border: !0
                            }, l.createElement(k.Pa, {
                                fullHeight: !0,
                                fullWidth: !0
                            }, l.createElement("img", {
                                "data-test-selector": i.BadgeImg,
                                src: e.imageURL,
                                title: e.title,
                                alt: e.title
                            })))), l.createElement(k.W, {
                                "data-test-selector": i.BadgeTitle,
                                type: k.Vb.Strong
                            }, e.title))
                        }, t.data.refetch && t.refetchDataRef && t.refetchDataRef(t.data.refetch), n
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading) return l.createElement(k.Za, {
                            fillContent: !0
                        });
                        if (!this.props.data.currentUser || !this.props.data.currentUser.availableBadges) return null;
                        var e = this.props.data.currentUser.availableBadges,
                            t = e.map(this.renderBadge);
                        return l.createElement(k.Xa, {
                            margin: {
                                y: 1
                            }
                        }, l.createElement(k.Xa, {
                            display: k.X.Flex,
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(k.Xa, {
                            margin: {
                                right: 1
                            }
                        }, l.createElement(k.W, {
                            type: k.Vb.H3
                        }, Object(m.d)("Badges from Crates", "BadgesList"))), l.createElement(k.W, {
                            "data-test-selector": i.BadgeCount,
                            type: k.Vb.H3,
                            color: k.O.Alt2
                        }, Object(m.f)(e.length))), l.createElement(k.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(k.W, null, Object(m.d)('You can find your chat badge in Chat Settings under "Edit Appearance".', "BadgesList"))), l.createElement(k.bc, {
                            childWidth: k.cc.Small,
                            placeholderItems: 8
                        }, t))
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.refetchDataRef && this.props.data.refetch && !e.data.refetch && this.props.refetchDataRef(this.props.data.refetch)
                    }, t
                }(l.Component),
                E = Object(r.compose)(Object(h.b)("BadgesList", {
                    autoReportInteractive: !0
                }), Object(p.a)(b))(y),
                S = n("SDEh"),
                N = n("edgk");
            var D, O = n("Dm7F");
            ! function(e) {
                e.Wrapper = "crates-list__wrapper", e.CrateImg = "crates-list__img"
            }(D || (D = {}));
            var R, F = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderCrate = function(e) {
                            return l.createElement(k.Xa, {
                                key: e.id
                            }, l.createElement(k.Ua, {
                                onClick: n.handleOpenClick,
                                "data-open-url": e.openURL
                            }, l.createElement(k.o, {
                                ratio: k.p.Aspect1x1
                            }, l.createElement(k.Eb, {
                                fullHeight: !0,
                                fullWidth: !0,
                                display: k.X.Flex,
                                padding: 2,
                                border: !0
                            }, l.createElement(k.Pa, {
                                fullHeight: !0,
                                fullWidth: !0
                            }, l.createElement("img", {
                                "data-test-selector": D.CrateImg,
                                alt: Object(m.d)("Crate", "CratesList"),
                                src: e.iconURL
                            })))), l.createElement(k.W, null, Object(m.d)("Open Now", "CratesList"))))
                        }, n.handleOpenClick = function(e) {
                            ! function(e, t) {
                                var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                                n && !Object(S.a)() && (n.focus(), Object(N.a)(n, function(e) {
                                    t(e)
                                }))
                            }(e.currentTarget.dataset.openUrl || "", n.reload)
                        }, n.reload = function() {
                            n.props.onCrateOpened && n.props.onCrateOpened()
                        }, t.data.refetch && t.refetchDataRef && t.refetchDataRef(t.data.refetch), n
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading) return l.createElement(k.Za, {
                            fillContent: !0
                        });
                        if (!this.props.data.currentUser || !this.props.data.currentUser.crates) return null;
                        var e = this.props.data.currentUser.crates,
                            t = e.map(this.renderCrate);
                        return l.createElement(k.Xa, {
                            "data-test-selector": D.Wrapper,
                            margin: {
                                y: 1
                            }
                        }, l.createElement(k.Xa, {
                            display: k.X.Flex,
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(k.Xa, {
                            margin: {
                                right: 1
                            }
                        }, l.createElement(k.W, {
                            type: k.Vb.H3
                        }, Object(m.d)("Twitch Crates", "CratesList"))), l.createElement(k.W, {
                            type: k.Vb.H3,
                            color: k.O.Alt2
                        }, Object(m.f)(e.length))), l.createElement(k.bc, {
                            childWidth: k.cc.Small,
                            placeholderItems: 8
                        }, t))
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.refetchDataRef && this.props.data.refetch && !e.data.refetch && this.props.refetchDataRef(this.props.data.refetch)
                    }, t
                }(l.Component),
                C = Object(r.compose)(Object(h.b)("CratesList", {
                    autoReportInteractive: !0
                }), Object(p.a)(O))(F),
                w = n("CgqK");
            n("HWNB");
            ! function(e) {
                e.Drop = "drops-list__drop", e.DropName = "drops-list__drop-name", e.Wrapper = "drops-list__wrapper"
            }(R || (R = {}));
            var L, U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.itemNamesEnabled = m.b.get("drops_itemnames_enabled", !1), t.getDropsDescription = function(e) {
                            return e < 1 ? Object(m.d)("Drops are a fun new way to get in-game loot just for watching your favorite channels on Twitch! <x:link>Learn more</x:link>", {
                                "x:link": function(e) {
                                    return l.createElement("a", {
                                        href: "https://help.twitch.tv/customer/en/portal/topics/301257-getting-started/articles",
                                        target: "_blank"
                                    }, e)
                                }
                            }, "DropsList") : Object(m.d)("Drops you have received are accessed within their corresponding games. Log into the game to experience your new content.", "DropsList")
                        }, t.renderDrop = function(e) {
                            var n = e.drop.node;
                            if (!n) return null;
                            var i = t.itemNamesEnabled ? n.name : n.game && n.game.name;
                            return i ? l.createElement(k.Xa, {
                                key: i,
                                margin: {
                                    bottom: 2
                                },
                                "data-test-selector": R.Drop
                            }, l.createElement(k.Eb, {
                                display: k.X.Flex,
                                alignItems: k.f.Center,
                                justifyContent: k.Wa.Center,
                                padding: 1,
                                border: !0,
                                position: k.jb.Relative
                            }, l.createElement("img", {
                                src: n.imageURL,
                                alt: Object(m.d)("Drop image for {gameName}", {
                                    gameName: i
                                }, "DropsListPresentation")
                            }), l.createElement(k.Eb, {
                                position: k.jb.Absolute,
                                attachBottom: !0,
                                attachRight: !0,
                                className: "drops-list__count",
                                color: k.O.Overlay,
                                borderRadius: k.x.Small,
                                padding: .5
                            }, l.createElement(k.W, {
                                fontSize: k.Ca.Size4,
                                ariaLabel: Object(m.d)("Count of Drops awarded for {gameName}", {
                                    gameName: i
                                }, "DropsListPresentation")
                            }, e.count))), l.createElement(k.W, {
                                type: k.Vb.Strong,
                                "data-test-selector": R.DropName
                            }, i)) : null
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.postRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.postRender()
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.props.data.loading) return l.createElement(k.Za, {
                            fillContent: !0
                        });
                        if (!this.props.data || this.props.data.error || !this.drops || !this.drops.nodes) return null;
                        var t = this.drops.nodes,
                            n = t.reduce(function(t, n) {
                                if (!n || !n.node) return t;
                                if (e.itemNamesEnabled) {
                                    var i = n.node.id;
                                    return t.hasOwnProperty(i) ? t[i].count++ : t[n.node.id] = {
                                        count: 1,
                                        drop: n
                                    }, t
                                }
                                if (n.node.game) {
                                    var a = n.node.game.name;
                                    return t.hasOwnProperty(a) ? t[a].count++ : t[n.node.game.name] = {
                                        count: 1,
                                        drop: n
                                    }, t
                                }
                                return t
                            }, {}),
                            i = Object.keys(n).map(function(t) {
                                return e.renderDrop(n[t])
                            });
                        return l.createElement(k.Xa, {
                            "data-test-selector": R.Wrapper,
                            margin: {
                                y: 1
                            }
                        }, l.createElement(k.Xa, {
                            display: k.X.Flex
                        }, l.createElement(k.Xa, {
                            margin: {
                                right: 1
                            }
                        }, l.createElement(k.W, {
                            type: k.Vb.H3
                        }, Object(m.d)("Drops", "DropsList"))), l.createElement(k.W, {
                            type: k.Vb.H3,
                            color: k.O.Alt2
                        }, Object(m.f)(t.length))), l.createElement(k.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(k.W, null, this.getDropsDescription(t ? t.length : 0))), l.createElement(k.bc, {
                            childWidth: k.cc.Small,
                            noGrow: !0
                        }, i))
                    }, Object.defineProperty(t.prototype, "drops", {
                        get: function() {
                            return this.props.data && this.props.data.currentUser && this.props.data.currentUser.inventory && this.props.data.currentUser.inventory.drops
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.postRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(l.Component),
                j = Object(r.compose)(Object(p.a)(w, {
                    name: "data",
                    options: function() {
                        return {
                            variables: {
                                itemNamesEnabled: m.b.get("drops_itemnames_enabled", !1)
                            }
                        }
                    }
                }), Object(h.b)("DropsList"))(U),
                B = n("OpME"),
                I = n("seyA");
            (L || (L = {})).Emote = "emoticons-list-emote";
            var _ = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderEmote = function(e) {
                            var t = Object(B.b)([e])[0],
                                n = t.srcSet.split(", ").pop().split(" ").shift();
                            return l.createElement(k.Xa, {
                                "data-test-selector": L.Emote,
                                key: t.id,
                                margin: {
                                    bottom: 2
                                }
                            }, l.createElement(k.o, {
                                ratio: k.p.Aspect1x1
                            }, l.createElement(k.Eb, {
                                fullHeight: !0,
                                fullWidth: !0,
                                display: k.X.Flex,
                                padding: 2,
                                border: !0
                            }, l.createElement(k.Pa, {
                                fullHeight: !0,
                                fullWidth: !0
                            }, l.createElement("img", {
                                src: n,
                                title: t.displayName,
                                alt: t.displayName
                            })))), l.createElement(k.W, {
                                type: k.Vb.Strong
                            }, t.displayName))
                        }, t.data.refetch && t.refetchDataRef && t.refetchDataRef(t.data.refetch), n
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading) return l.createElement(k.Za, {
                            fillContent: !0
                        });
                        if (!this.props.data.currentUser || !this.props.data.currentUser.emoteSets) return null;
                        var e = new Map;
                        this.props.data.currentUser.emoteSets.forEach(function(t) {
                            t && t.emotes && t.emotes.forEach(function(t) {
                                t && t.id && e.set(t.id, t)
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
                        return l.createElement(k.Xa, {
                            margin: {
                                y: 1
                            }
                        }, l.createElement(k.Xa, {
                            display: k.X.Flex,
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(k.Xa, {
                            margin: {
                                right: 1
                            }
                        }, l.createElement(k.W, {
                            type: k.Vb.H3
                        }, Object(m.d)("Emotes from Crates", "EmoticonsList"))), l.createElement(k.W, {
                            type: k.Vb.H3,
                            color: k.O.Alt2
                        }, Object(m.f)(t.length))), l.createElement(k.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(k.W, null, Object(m.d)("You can find your new emote in the emote selector for Chat, Pulse, Feeds, and Whispers.", "EmoticonsList"))), l.createElement(k.bc, {
                            childWidth: k.cc.Small,
                            placeholderItems: 8
                        }, t))
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.refetchDataRef && this.props.data.refetch && !e.data.refetch && this.props.refetchDataRef(this.props.data.refetch)
                    }, t
                }(l.Component),
                x = Object(r.compose)(Object(h.b)("EmoticonsList", {
                    autoReportInteractive: !0
                }), Object(p.a)(I))(_),
                W = n("eJ65"),
                X = n("VeT4"),
                A = n("4h+t"),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.bitsConfig = Object(A.a)(), t
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.amazonMarketplaces) return null;
                        var e = Object(m.d)("Inventory", "InventoryTitleBar");
                        if (this.props.loading) return l.createElement(k.Eb, {
                            className: "title-bar",
                            display: k.X.Flex,
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            }
                        }, l.createElement(k.Xa, {
                            flexGrow: 1
                        }, l.createElement(k.W, {
                            type: k.Vb.H2
                        }, e)), l.createElement(k.Xa, {
                            display: k.X.Flex,
                            margin: {
                                right: 3
                            },
                            alignItems: k.f.Center
                        }, l.createElement(k.ib, {
                            width: 135,
                            height: 30
                        })), l.createElement(k.Xa, {
                            alignSelf: k.g.Baseline
                        }, l.createElement(k.ib, {
                            width: 180,
                            height: 30
                        })));
                        var t = this.props.amazonMarketplaces.map(function(e) {
                                return e ? l.createElement(k.Ua, {
                                    key: e.id,
                                    linkTo: "https://" + e.orderHistoryRedirectURL,
                                    targetBlank: !0
                                }, e.displayText) : null
                            }),
                            n = Object(m.d)("You have {bitsComponent}", {
                                bitsComponent: l.createElement(X.a, {
                                    count: this.props.bitsBalance,
                                    bitsConfig: this.bitsConfig,
                                    withImage: !0,
                                    withText: !0
                                })
                            }, "InventoryTitleBar");
                        return l.createElement(k.Eb, {
                            className: "title-bar",
                            display: k.X.Flex,
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            }
                        }, l.createElement(k.Xa, {
                            flexGrow: 1
                        }, l.createElement(k.W, {
                            type: k.Vb.H2
                        }, e)), l.createElement(k.Xa, {
                            display: k.X.Flex,
                            margin: {
                                right: 3
                            },
                            alignItems: k.f.Center
                        }, l.createElement(k.W, null, n)), l.createElement(k.Xa, {
                            alignSelf: k.g.Baseline
                        }, l.createElement(W.a, null, l.createElement(k.z, {
                            type: k.F.Hollow
                        }, Object(m.d)("View your Twitch Order History", "InventoryTitleBar")), l.createElement(k.u, null, l.createElement(k.Xa, {
                            padding: 1
                        }, t)))))
                    }, t
                }(l.Component),
                H = Object(r.compose)(Object(h.b)("TitleBar", {
                    autoReportInteractive: !0
                }))(T),
                V = n("wdoW"),
                q = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.refetchDataRefs = [], n.setRefetchDataRef = function(e) {
                            n.refetchDataRefs.push(e)
                        }, n.onCrateOpened = function() {
                            n.refetchDataRefs.forEach(function(e) {
                                e()
                            })
                        }, m.p.setPageTitle(Object(m.d)("Inventory", "InventoryPage")), t.data.refetch && n.refetchDataRefs.push(t.data.refetch), n
                    }
                    return d.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        this.props.data.refetch && !e.data.refetch && this.refetchDataRefs.push(this.props.data.refetch)
                    }, t.prototype.componentWillUnmount = function() {
                        this.refetchDataRefs = []
                    }, t.prototype.render = function() {
                        if (!this.props.isLoggedIn) return this.props.onAnonymousVisit(), l.createElement(u.a, {
                            message: Object(m.d)("You must be logged in to view this page", "InventoryPage")
                        });
                        var e = !0,
                            t = [],
                            n = 0;
                        return this.props.data.loading || this.props.data.error || !this.props.data.currentUser || (e = !1, t = this.props.data.currentUser.amazonMarketplaces || [], n = this.props.data.currentUser.bitsBalance || 0), l.createElement(k.Xa, {
                            className: "inventory",
                            padding: 3
                        }, l.createElement(H, {
                            bitsBalance: n,
                            loading: e,
                            amazonMarketplaces: t
                        }), l.createElement(C, {
                            onCrateOpened: this.onCrateOpened,
                            refetchDataRef: this.setRefetchDataRef
                        }), l.createElement(x, {
                            refetchDataRef: this.setRefetchDataRef
                        }), l.createElement(E, {
                            refetchDataRef: this.setRefetchDataRef
                        }), l.createElement(j, null))
                    }, t
                }(l.Component),
                P = Object(r.compose)(Object(h.b)("InventoryPage", {
                    autoReportInteractive: !0,
                    destination: v.a.Inventory
                }), Object(f.a)({
                    location: g.PageviewLocation.Inventory
                }), Object(p.a)(V))(q);
            var z = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(c.f)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    onAnonymousVisit: function() {
                        return Object(s.e)(o.a.InventoryPage)
                    }
                }, e)
            })(P);
            n.d(t, "InventoryPage", function() {
                return z
            })
        },
        cpJf: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "d", function() {
                    return r
                }), n.d(t, "c", function() {
                    return o
                }), n.d(t, "b", function() {
                    return a
                }),
                function(e) {
                    e.Chat = "stream_chat", e.Feeds = "feeds", e.Room = "chatroom", e.Whisper = "whisper", e.VodChat = "vod-chat"
                }(i || (i = {}));
            var a, r = {
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
            }(a || (a = {}))
        },
        lZdE: function(e, t, n) {
            "use strict";

            function i(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            n.d(t, "a", function() {
                return i
            })
        },
        seyA: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Inventory_EmoticonsList"
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
                    end: 101
                }
            };
            n.loc.source = {
                body: "query Inventory_EmoticonsList {\ncurrentUser{\nid\nemoteSets(domains:CRATE){\nid\nemotes{\nid\ntoken\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        wdoW: function(e, t, n) {
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 156
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/fuel/models/amazon-marketplace.gql"\nquery Inventory {\ncurrentUser{\nid\namazonMarketplaces {\n...amazonMarketplace\n}\nbitsBalance\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("JCeY").definitions)), e.exports = i
        },
        wwz6: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "inventoryBadge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Badge"
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
                }],
                loc: {
                    start: 0,
                    end: 70
                }
            };
            n.loc.source = {
                body: "fragment inventoryBadge on Badge {\nid\nimageURL(size:QUADRUPLE)\ntitle\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        }
    }
]);