(window.webpackJsonp = window.webpackJsonp || []).push([
    [143], {
        "2rRr": function(e, t, n) {
            "use strict";
            var i, a = n("/MKj"),
                r = n("fvjX"),
                o = n("S1Za"),
                l = n("AKMF"),
                s = n("mrSG"),
                d = n("q1tI"),
                c = n("/7QA"),
                u = n("hyVY"),
                m = n("f00E"),
                p = n("GnwI"),
                f = n("Ue10");
            n("FkHV");
            ! function(e) {
                e.Overlay = "embed-overlay", e.ViewCount = "embed-overlay__view-count", e.Wrapper = "embed-overlay__wrapper"
            }(i || (i = {}));
            var v;
            ! function(e) {
                e[e.Clip = 0] = "Clip", e[e.Video = 1] = "Video", e[e.Stream = 2] = "Stream", e[e.VideoOEmbed = 3] = "VideoOEmbed"
            }(v || (v = {}));
            var g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showOverlay: !0,
                            playerRefID: Object(m.a)()
                        }, t.getOverlayComponent = function() {
                            var e = t.props,
                                n = e.createdAt,
                                a = e.lengthSeconds,
                                r = e.thumbnailURL,
                                o = e.type,
                                l = e.viewCount,
                                s = a && a > 0 ? Object(u.b)(a) : "";
                            return d.createElement("a", {
                                href: "#",
                                onClick: t.handleClick,
                                "data-test-selector": i.Overlay
                            }, d.createElement(f.o, {
                                ratio: f.p.Aspect16x9
                            }, d.createElement(f.Ya, null, d.createElement(f.Qa, {
                                fullWidth: !0,
                                fullHeight: !0,
                                position: f.kb.Absolute
                            }, d.createElement("img", {
                                src: r
                            })), d.createElement(f.Ya, {
                                className: "embed-card__overlay",
                                position: f.kb.Absolute,
                                attachLeft: !0,
                                attachTop: !0,
                                fullWidth: !0,
                                fullHeight: !0
                            }, d.createElement(f.Ya, {
                                className: "embed-card__play",
                                display: f.X.Flex,
                                justifyContent: f.Xa.Center,
                                position: f.kb.Absolute,
                                attachLeft: !0,
                                attachTop: !0,
                                fullWidth: !0,
                                fullHeight: !0
                            }, d.createElement(f.tb, {
                                asset: f.ub.Play,
                                width: 50,
                                height: 50
                            })), d.createElement(f.Ya, {
                                position: f.kb.Absolute,
                                padding: 1,
                                attachBottom: !0,
                                attachLeft: !0
                            }, n && d.createElement(f.W, null, Object(c.c)(new Date(n), "medium")), d.createElement(f.Ya, null, o === v.Stream && d.createElement(f.Ya, {
                                display: f.X.Inline,
                                margin: {
                                    right: .5
                                }
                            }, d.createElement(f.K, {
                                status: f.M.Live
                            })), void 0 !== l && d.createElement("span", null, t.getFormattedViewCount(l, o)))), d.createElement(f.Ya, {
                                position: f.kb.Absolute,
                                padding: 1,
                                attachBottom: !0,
                                attachRight: !0
                            }, s && d.createElement(f.Ya, null, d.createElement(f.W, null, s)))), d.createElement(f.Fb, {
                                position: f.kb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                margin: 1,
                                fontSize: f.Ca.Size5
                            }, o === v.Stream && d.createElement(f.hb, {
                                label: Object(c.d)("Live", "EmbedOverlayPill"),
                                type: f.ib.Live
                            }), o === v.Video && d.createElement(f.hb, {
                                label: Object(c.d)("Video", "EmbedOverlayPill"),
                                type: f.ib.Overlay
                            }), o === v.Clip && d.createElement(f.hb, {
                                label: Object(c.d)("Clip", "EmbedOverlayPill"),
                                type: f.ib.Overlay
                            })))))
                        }, t.handleClick = function(e) {
                            e.preventDefault(), t.setState({
                                showOverlay: !1
                            }), t.props.type === v.Clip && t.props.reportPlayerInstanceStarted(t.state.playerRefID), t.props.onClick && t.props.onClick()
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        if (this.props.type === v.Clip) {
                            var t = e.activeVideoPlayerRefID;
                            t === this.state.playerRefID ? this.setState({
                                showOverlay: !1
                            }) : this.props.activeVideoPlayerRefID === t || t === this.state.playerRefID || this.state.showOverlay || this.setState({
                                showOverlay: !0
                            })
                        }
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.state.showOverlay ? this.getOverlayComponent() : d.createElement(f.o, {
                            ratio: f.p.Aspect16x9
                        }, d.createElement("div", {
                            "data-test-selector": i.Wrapper
                        }, this.props.children))
                    }, t.prototype.getFormattedViewCount = function(e, t) {
                        switch (t) {
                            case v.Stream:
                                return Object(c.d)("{viewCount,number} viewers", {
                                    viewCount: e
                                }, "OverlayViewCount");
                            case v.Clip:
                            case v.Video:
                                return Object(c.d)("{viewCount,number} views", {
                                    viewCount: e
                                }, "OverlayViewCount");
                            default:
                                return ""
                        }
                    }, t
                }(d.Component),
                h = Object(p.b)("EmbedOverlay")(g);
            var k = Object(a.connect)(function(e) {
                return {
                    activeVideoPlayerRefID: Object(l.a)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    reportPlayerInstanceStarted: o.b
                }, e)
            })(h);
            n.d(t, "a", function() {
                return k
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return "embed-overlay"
            }), n.d(t, !1, function() {
                return "embed-overlay-wrapper"
            }), n.d(t, "b", function() {
                return v
            }), n.d(t, !1, function() {
                return g
            }), n.d(t, !1, function() {
                return h
            })
        },
        "3L77": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "productLangauge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ProductLanguage"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "hasInterface"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "hasAudio"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "hasSubtitles"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 91
                }
            };
            n.loc.source = {
                body: "fragment productLangauge on ProductLanguage {\nlanguage\nhasInterface\nhasAudio\nhasSubtitles\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "3ncn": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "productInfo"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ProductInfo"
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
                                value: "asin"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "crateASINs"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "description"
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
                                    kind: "IntValue",
                                    value: "256"
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isEntitled"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isFeatured"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isForSale"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "price"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "primeOffer"
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "purchaseURL"
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
                }],
                loc: {
                    start: 0,
                    end: 164
                }
            };
            n.loc.source = {
                body: "fragment productInfo on ProductInfo {\nid\nasin\ncrateASINs\ndescription\nimageURL(size: 256)\nisEntitled\nisFeatured\nisForSale\nprice\nprimeOffer {\nid\n}\npurchaseURL\ntitle\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "6qyE": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryGameDetails"
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
                                        value: "product"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "fuelProductFull"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "fuelGame"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
                                    },
                                    arguments: [],
                                    directives: []
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasPrime"
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
                    end: 283
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/fuel/models/fuel-product-full.gql"\n#import "twilight/features/fuel/models/fuel-game.gql"\nquery DirectoryGameDetails($name: String!) {\ngame(name: $name) {\nproduct {\n...fuelProductFull\n}\n...fuelGame\n}\nrequestInfo {\ncountryCode\n}\ncurrentUser {\nid\nhasPrime\n}\n}',
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
            i.definitions = i.definitions.concat(r(n("sFUC").definitions)), i.definitions = i.definitions.concat(r(n("wiBv").definitions)), e.exports = i
        },
        "9jdh": function(e, t, n) {},
        FBjy: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryGameDetails_RENAME2"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "login"
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
                                value: "id"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "login"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "id"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "settings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isCommerceRevShareEnabled"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
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
                    end: 150
                }
            };
            n.loc.source = {
                body: "query DirectoryGameDetails_RENAME2($login: String! $id: ID!) {\nuser(login: $login id: $id) {\ndisplayName\nsettings {\nisCommerceRevShareEnabled\n}\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        FkHV: function(e, t, n) {},
        GkoH: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Fuel_ClaimPrimeOffer"
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
                                    value: "ClaimPrimeOfferInput"
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
                                value: "claimPrimeOffer"
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
                                                value: "hasEntitlement"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "claimData"
                                            },
                                            arguments: [],
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
                    end: 133
                }
            };
            n.loc.source = {
                body: "mutation Fuel_ClaimPrimeOffer($input: ClaimPrimeOfferInput!) {\nclaimPrimeOffer(input: $input) {\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        J4PI: function(e, t, n) {},
        JzX6: function(e, t, n) {},
        M0lL: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "fuelProduct"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "GameProduct"
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
                                value: "acquisition"
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
                                        value: "description"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isExternal"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "developer"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "esrbRating"
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
                                        value: "details"
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
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "featureDetails"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "genres"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "inGameContent"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "inGameContent"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "info"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "productInfo"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "launchPlatform"
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
                                        value: "description"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isExternal"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "supportedPlatforms"
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
                                        value: "iconURL"
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
                    end: 410
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/fuel/models/product-info.gql"\n#import "twilight/features/fuel/models/in-game-content.gql"\nfragment fuelProduct on GameProduct {\nid\nacquisition {\nid\ndescription\nisExternal\n}\ndeveloper\nesrbRating {\nid\ndetails\niconURL\n}\nfeatureDetails\ngenres\ninGameContent {\n...inGameContent\n}\ninfo {\n...productInfo\n}\nlaunchPlatform {\nid\ndescription\nisExternal\n}\nsupportedPlatforms {\nid\nname\niconURL\n}\n}',
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
            i.definitions = i.definitions.concat(r(n("3ncn").definitions)), i.definitions = i.definitions.concat(r(n("mM0V").definitions)), e.exports = i
        },
        N7a1: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                a = n("cr+I"),
                r = n("q1tI"),
                o = n("oJmH"),
                l = n("/7QA"),
                s = n("ZDlU"),
                d = n("LA8z"),
                c = n("yR8l"),
                u = n("V+GM"),
                m = n("NvVO"),
                p = n("2xye"),
                f = n("cras"),
                v = /^\$[\d]+.[\d]{2}$/;

            function g(e, t) {
                var n = v.test(e.info.price),
                    i = v.test(t.info.price);
                if (n && i) {
                    var a = +e.info.price.replace("$", "") - +t.info.price.replace("$", "");
                    return 0 !== a ? a : e.info.title.localeCompare(t.info.title)
                }
                return n && !i ? -1 : i ? 1 : e.info.price.localeCompare(t.info.price)
            }
            var h, k = n("GnwI"),
                b = n("6x+I"),
                y = n("ht6z"),
                E = n("Ue10"),
                C = (n("9jdh"), "https://twitch.amazon.com/prime/?ref_=sm_w_tup_ln_t_c"),
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            balloonOpen: !1
                        }, t.renderUnavailableText = function() {
                            var e = t.props.options.isInGameContent ? Object(l.d)("This content is currently unavailable", "FuelBuyButton") : Object(l.d)("This game is currently unavailable", "FuelBuyButton");
                            return r.createElement(E.W, {
                                italic: !0,
                                "data-target": "fuel-buy-button-unavailable"
                            }, e)
                        }, t.renderBuyNowButton = function(e, n, i, a) {
                            void 0 === a && (a = E.D.Default);
                            var o = null;
                            if (n && n.length > 1) {
                                var s = Object(l.d)("Includes {crates} Twitch Crates!", {
                                    crates: n.length
                                }, "FuelBuyButton");
                                o = r.createElement(E.W, {
                                    className: "fuel-buy-button__crates",
                                    "data-target": "fuel-buy-button-crates"
                                }, s)
                            }
                            var d = i ? "fuel-buy-button-content" : "fuel-buy-button";
                            return r.createElement(E.Ya, {
                                alignItems: E.f.Center
                            }, r.createElement(E.z, {
                                fullWidth: !0,
                                icon: n && n.length > 0 ? E.ub.Crate : void 0,
                                purchase: e,
                                onClick: t.props.onClickBuyNow,
                                "data-target": d,
                                size: a
                            }, Object(l.d)("Buy Now", "FuelBuyButton")), o)
                        }, t.renderPrimeTreatment = function(e, n) {
                            var i = [],
                                a = r.createElement(E.tb, {
                                    asset: E.ub.Crown,
                                    type: E.vb.Prime,
                                    width: 16,
                                    height: 16,
                                    key: "fuel-crown"
                                });
                            return i = e ? [a, r.createElement("div", {
                                className: "fuel-buy-button__prime-button",
                                key: "fuel-claim"
                            }, r.createElement(E.z, {
                                onClick: t.onClickClaimPrimeOffer
                            }, Object(l.d)("Claim Offer", "FuelBuyButton")))] : [a, r.createElement(E.Ya, {
                                padding: {
                                    x: 1
                                },
                                key: "fuel-free-label"
                            }, r.createElement(E.W, {
                                type: E.Wb.Strong
                            }, Object(l.d)("Free", "FuelBuyButton"))), r.createElement("div", {
                                className: "fuel-buy-button__prime-trial-button",
                                key: "fuel-trial"
                            }, r.createElement(E.z, {
                                linkTo: C,
                                targetBlank: !0,
                                "data-target": "fuel-buy-button-prime-trial"
                            }, Object(l.d)("Start Your Free Trial", "FuelBuyButton")))], r.createElement(E.Ya, {
                                flexDirection: E.Aa.Row,
                                display: E.X.Flex,
                                alignItems: E.f.Center,
                                "data-target": "fuel-buy-button-prime"
                            }, i)
                        }, t.onClickClaimPrimeOffer = function() {
                            if (t.props.onClickClaimPrimeOffer) {
                                var e = t.props.options.info.primeOffer;
                                e && t.props.onClickClaimPrimeOffer(e.id)
                            }
                        }, t.renderExternalAcquisitionLink = function(e) {
                            return r.createElement("a", {
                                href: e.href,
                                target: "_blank"
                            }, e.children)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.options,
                            t = e.info,
                            n = e.countryCode,
                            i = e.externalAcquisition,
                            a = e.crates,
                            o = e.userHasPrime,
                            s = e.isInGameContent,
                            d = e.size,
                            c = t.primeOffer,
                            u = n && Object(y.a)(n),
                            m = !c || !u;
                        if (t.isEntitled) return r.createElement(E.W, {
                            "data-target": "fuel-buy-button-purchased"
                        }, Object(l.d)("Purchased", "FuelBuyButton"));
                        if (!t.isForSale && i && i.isExternal) return r.createElement("div", {
                            "data-target": "fuel-buy-button-external"
                        }, r.createElement(b, {
                            source: i.description,
                            renderers: {
                                Link: this.renderExternalAcquisitionLink
                            }
                        }));
                        if (!t.isForSale && m) return this.renderUnavailableText();
                        if (c && !o) {
                            var p = t.isForSale ? this.renderBuyNowButton(t.price, a, s, d) : void 0;
                            return this.renderPrimeTreatment(o, p)
                        }
                        return c ? this.renderPrimeTreatment(o) : this.renderBuyNowButton(t.price, a, s, d)
                    }, t
                }(r.Component),
                S = n("SDEh"),
                D = n("edgk");

            function F(e, t, n, i, a, r, o) {
                var s = e && e.product;
                if (e && s) {
                    ! function(e) {
                        if (e.game && e.product) {
                            var t = {
                                location: e.location,
                                game_id: e.game.id,
                                game_name: e.game.name,
                                developer: e.product.developer,
                                genre: e.product.genres,
                                asin: e.info.asin,
                                channel: e.userLogin,
                                channel_id: e.userID,
                                crate: e.info.crateASINs
                            };
                            l.p.tracking.track(p.SpadeEventType.FuelBuyButton, t)
                        }
                    }({
                        userID: a,
                        userLogin: r,
                        game: e,
                        product: s,
                        info: t,
                        location: i
                    });
                    var d = "";
                    n && (d = "&br_id=" + a),
                        function(e, t) {
                            var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                            if (!n || Object(S.a)()) return;
                            n.focus(), Object(D.a)(n, function(e) {
                                t(e)
                            })
                        }(t.purchaseURL + d, o)
                }
            }! function(e) {
                e.Hover = "hover", e.ViewDetails = "view_asin_detail", e.ClickToAmazon = "click_to_amazon"
            }(h || (h = {}));
            var R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBuyInGameContentNow = function() {
                            var e = t.props,
                                n = e.content,
                                i = e.referrer;
                            F(e.game, n.info, i && i.settings && i.settings.isCommerceRevShareEnabled, p.PageviewLocation.GameDetail, i && i.id, i && i.displayName, t.onPopupClose)
                        }, t.onPopupClose = function() {
                            t.props.refetchData && t.props.refetchData()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.content,
                            t = e.description,
                            n = e.info,
                            i = e.tags,
                            a = n.description,
                            o = n.imageURL,
                            l = n.title,
                            s = i.join(", "),
                            d = {
                                info: n,
                                countryCode: this.props.countryCode,
                                crates: n.crateASINs,
                                isInGameContent: !0,
                                userHasPrime: !!this.props.hasPrime
                            };
                        return r.createElement(E.P, {
                            cols: {
                                default: 6,
                                xs: 12,
                                sm: 6,
                                md: 6,
                                lg: 6
                            }
                        }, r.createElement(E.Ya, {
                            margin: {
                                bottom: 3
                            }
                        }, r.createElement(E.Ja, {
                            gutterSize: E.Ka.Default
                        }, r.createElement(E.P, {
                            cols: 4
                        }, r.createElement(E.o, {
                            ratio: E.p.Aspect1x1
                        }, r.createElement("img", {
                            src: o || ""
                        }))), r.createElement(E.P, {
                            cols: 8
                        }, r.createElement(E.W, {
                            type: E.Wb.P,
                            fontSize: E.Ca.Size4,
                            title: l
                        }, l), r.createElement(E.W, {
                            type: E.Wb.P,
                            color: E.O.Alt2,
                            title: s
                        }, s), r.createElement(E.Ya, {
                            display: E.X.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            flexWrap: E.Ba.NoWrap,
                            padding: {
                                bottom: 1,
                                top: 2
                            }
                        }, r.createElement(N, {
                            onClickBuyNow: this.onBuyInGameContentNow,
                            options: d
                        })), r.createElement(E.fc, null, r.createElement(b, {
                            source: a || t
                        }))))))
                    }, t
                }(r.Component),
                w = Object(k.b)("FeaturedContent")(R),
                O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.alt ? E.r.Alt : E.r.Base;
                        return r.createElement(E.Fb, {
                            background: e,
                            border: !0,
                            padding: {
                                left: 3,
                                right: 3
                            }
                        }, this.props.children)
                    }, t
                }(r.Component),
                P = Object(k.b)("GameDetailsSection")(O),
                x = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(E.Ya, {
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, r.createElement(E.W, {
                            type: E.Wb.H3
                        }, this.props.title))
                    }, t
                }(r.Component),
                L = Object(k.b)("GameDetailsTitle")(x),
                I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.contentList;
                        if (0 === t.length) return null;
                        var n = t.map(function(t, n) {
                            return r.createElement(w, {
                                content: t,
                                countryCode: e.props.countryCode,
                                game: e.props.game,
                                hasPrime: e.props.hasPrime,
                                refetchData: e.props.refetchData,
                                key: n,
                                referrer: e.props.referrer
                            })
                        });
                        return r.createElement(P, {
                            alt: !0
                        }, r.createElement(L, {
                            title: Object(l.d)("Game Add-Ons", "FeaturedContentRow")
                        }), r.createElement(E.Ja, {
                            gutterSize: E.Ka.Large
                        }, n))
                    }, t
                }(r.Component),
                _ = Object(k.b)("FeaturedContentRow")(I),
                G = n("geRD"),
                j = n("GkoH"),
                B = (n("rQvP"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderSeparator = function() {
                            return r.createElement(E.Fb, {
                                borderRight: !0,
                                padding: {
                                    left: .5
                                },
                                margin: {
                                    right: 1
                                },
                                className: "game-details-box__separator"
                            })
                        }, t.onBuyNowClick = function() {
                            var e = t.props,
                                n = e.referrer,
                                i = e.game,
                                a = i && i.product && i.product.info;
                            a && F(i, a, n && n.settings && n.settings.isCommerceRevShareEnabled, p.PageviewLocation.GameDetail, n && n.id, n && n.displayName, t.onPopupClose)
                        }, t.onClaimPrimeOffer = function(e) {
                            t.props.claimPrimeOffer && t.props.claimPrimeOffer(Object(G.a)({
                                offerID: e
                            })).then(function(e) {
                                t.props.refetchData && t.props.refetchData()
                            })
                        }, t.onPopupClose = function() {
                            t.props.refetchData && t.props.refetchData()
                        }, t.renderNewWindowLink = function(e) {
                            return r.createElement("a", {
                                href: e.href,
                                target: "_blank"
                            }, e.children)
                        }, t.renderSharedRevenueLink = function(e) {
                            return r.createElement("a", {
                                href: "https://help.twitch.tv/customer/portal/articles/2771293-how-to-buy-games-on-twitch#partners",
                                "data-test-selector": "fuel-shared-revenue-link",
                                target: "_blank"
                            }, e)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.countryCode,
                            n = e.game,
                            i = e.hasPrime,
                            a = n ? n.product : void 0;
                        if (!n || !a) return r.createElement(P, {
                            alt: !0
                        }, r.createElement(E.Fb, {
                            className: "game-details-box",
                            padding: {
                                top: 2,
                                right: 1,
                                bottom: 2,
                                left: 1
                            },
                            flexDirection: E.Aa.Row,
                            display: E.X.Flex,
                            justifyContent: E.Xa.Between,
                            alignItems: E.f.Center
                        }, r.createElement(E.Ya, {
                            display: E.X.Flex,
                            flexDirection: E.Aa.Row,
                            alignItems: E.f.Center
                        }, r.createElement(E.Ya, null, r.createElement(E.jb, {
                            width: 175,
                            height: 36
                        })), this.renderSeparator(), r.createElement(E.Ya, null, r.createElement(E.jb, {
                            width: 22,
                            height: 30
                        })), r.createElement(E.Ya, null, r.createElement(E.jb, {
                            width: 50,
                            height: 15
                        }))), r.createElement(E.Ya, null, r.createElement(E.jb, {
                            width: 290,
                            height: 20
                        }))));
                        var o = {
                                info: a.info,
                                crates: a.info.crateASINs,
                                size: E.D.Large,
                                externalAcquisition: a.acquisition,
                                countryCode: t,
                                userHasPrime: i
                            },
                            s = a.supportedPlatforms.map(function(e) {
                                return r.createElement("img", {
                                    "data-test-selector": "game-details-box-platform-" + e.name,
                                    alt: e.name,
                                    src: e.iconURL,
                                    key: "platform:" + e.name
                                })
                            }),
                            d = null;
                        if (this.props.referrer && this.props.referrer.settings && this.props.referrer.settings.isCommerceRevShareEnabled) {
                            var c = Object(l.d)("Purchase revenue <x:link>will be shared</x:link> with {channel}", {
                                channel: r.createElement(E.W, {
                                    key: "game-details-bold",
                                    bold: !0,
                                    type: E.Wb.Span
                                }, this.props.referrer.displayName),
                                "x:link": this.renderSharedRevenueLink
                            }, "GameDetailsBox");
                            d = r.createElement(E.W, {
                                key: "fuel-shared-revenue-game-details",
                                "data-test-selector": "fuel-shared-revenue"
                            }, c)
                        }
                        var u = null;
                        a.esrbRating && (u = r.createElement("img", {
                            alt: Object(l.d)("Maturity Rating", "GameDetailsBox"),
                            src: a.esrbRating.iconURL,
                            "data-test-selector": "game-details-box-rating",
                            className: "game-details-box__rating"
                        }));
                        var m = null;
                        return a.launchPlatform && (m = r.createElement(b, {
                            "data-test-selector": "game-details-box-launch-platform",
                            source: a.launchPlatform.description,
                            renderers: {
                                Link: this.renderNewWindowLink
                            }
                        })), r.createElement(P, {
                            alt: !0
                        }, r.createElement(E.Fb, {
                            className: "game-details-box",
                            padding: {
                                top: 2,
                                right: 1,
                                bottom: 2,
                                left: 1
                            },
                            flexDirection: E.Aa.Row,
                            display: E.X.Flex,
                            justifyContent: E.Xa.Between,
                            alignItems: E.f.Center
                        }, r.createElement(E.Ya, {
                            display: E.X.Flex,
                            flexDirection: E.Aa.Row,
                            alignItems: E.f.Center
                        }, r.createElement(N, {
                            onClickBuyNow: this.onBuyNowClick,
                            onClickClaimPrimeOffer: this.onClaimPrimeOffer,
                            options: o,
                            "data-test-selector": "game-details-box-fuel-buy-button"
                        }), this.renderSeparator(), u, s, m), d))
                    }, t
                }(r.Component)),
                A = Object(k.b)("GameDetailBox")(B),
                U = Object(c.a)(j, {
                    name: "claimPrimeOffer"
                })(A),
                T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.game || !this.props.game.product || !this.props.game.product.info) return null;
                        var e = this.props.game.product,
                            t = e.info,
                            n = e.featureDetails,
                            i = e.supportedLanguages,
                            a = e.minimumSystemRequirement,
                            o = e.recommendedSystemRequirement,
                            s = n.map(function(e, t) {
                                return r.createElement("li", {
                                    key: t
                                }, r.createElement(b, {
                                    source: e
                                }))
                            }),
                            d = i.map(function(e, t) {
                                return [r.createElement(E.P, {
                                    key: t + "lang",
                                    cols: 3
                                }, r.createElement(E.Ya, null, e.language)), r.createElement(E.P, {
                                    key: t + "audio",
                                    cols: 3
                                }, r.createElement(E.Fb, {
                                    textAlign: E.Sb.Center
                                }, e.hasAudio && r.createElement(E.tb, {
                                    asset: E.ub.Check,
                                    type: E.vb.Success
                                }))), r.createElement(E.P, {
                                    key: t + "int",
                                    cols: 3
                                }, r.createElement(E.Fb, {
                                    textAlign: E.Sb.Center
                                }, e.hasInterface && r.createElement(E.tb, {
                                    asset: E.ub.Check,
                                    type: E.vb.Success
                                }))), r.createElement(E.P, {
                                    key: t + "subs",
                                    cols: 3
                                }, r.createElement(E.Fb, {
                                    textAlign: E.Sb.Center
                                }, e.hasSubtitles && r.createElement(E.tb, {
                                    asset: E.ub.Check,
                                    type: E.vb.Success
                                }))), r.createElement(E.P, {
                                    key: t + "hr",
                                    cols: 12
                                }, r.createElement(E.Fb, {
                                    margin: {
                                        top: .5,
                                        bottom: .5
                                    },
                                    borderBottom: !0,
                                    alignContent: E.e.Stretch
                                }))]
                            }),
                            c = this.renderSystemRequirements(a),
                            u = this.renderSystemRequirements(o);
                        return r.createElement(P, null, r.createElement(E.Ya, {
                            padding: {
                                bottom: 4
                            }
                        }, r.createElement(E.Ja, {
                            gutterSize: E.Ka.Large
                        }, r.createElement(E.P, {
                            cols: {
                                default: 6,
                                xs: 12,
                                sm: 6
                            }
                        }, r.createElement(E.Ya, {
                            margin: {
                                top: 2
                            }
                        }, r.createElement(L, {
                            title: Object(l.d)("Description", "DirectoryGameDetailsPage")
                        }), r.createElement(E.fc, null, r.createElement(b, {
                            source: t.description
                        }))), r.createElement(E.Ya, {
                            margin: {
                                top: 2
                            }
                        }, r.createElement(L, {
                            title: Object(l.d)("Features", "DirectoryGameDetailsPage")
                        }), r.createElement(E.fc, null, r.createElement("ul", null, s))), r.createElement(E.Fb, {
                            margin: {
                                top: 2
                            },
                            fontSize: E.Ca.Size6
                        }, r.createElement(L, {
                            title: Object(l.d)("Information", "DirectoryGameDetailsPage")
                        }), this.renderRow(Object(l.d)("Title: ", "DirectoryGameDetailsPage"), t.title), this.renderRow(Object(l.d)("Developer: ", "DirectoryGameDetailsPage"), e.developer), this.renderRow(Object(l.d)("Publisher: ", "DirectoryGameDetailsPage"), e.publisher), this.renderRowLink(Object(l.d)("More Info: ", "DirectoryGameDetailsPage"), Object(l.d)("Website", "DirectoryGameDetailsPage"), e.websiteURL), e.eulaURL && this.renderRowLink(Object(l.d)("License Agreement: ", "DirectoryGameDetailsPage"), Object(l.d)("Check out the EULA", "DirectoryGameDetailsPage"), e.eulaURL), this.renderRowLink(Object(l.d)("Need Help? ", "DirectoryGameDetailsPage"), Object(l.d)("Contact Support", "DirectoryGameDetailsPage"), e.supportURL))), r.createElement(E.P, {
                            cols: {
                                default: 6,
                                xs: 12,
                                sm: 6
                            }
                        }, r.createElement(E.Ya, {
                            margin: {
                                top: 2
                            }
                        }, r.createElement(L, {
                            title: Object(l.d)("Hardware Requirements", "DirectoryGameDetailsPage")
                        }), r.createElement(E.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(E.W, {
                            type: E.Wb.H4,
                            bold: !0
                        }, Object(l.d)("Minimum", "DirectoryGameDetailsPage"))), c, r.createElement(E.Ya, {
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, r.createElement(E.W, {
                            type: E.Wb.H4,
                            bold: !0
                        }, Object(l.d)("Recommended", "DirectoryGameDetailsPage"))), u), r.createElement(E.Ya, {
                            margin: {
                                top: 2
                            }
                        }, r.createElement(L, {
                            title: Object(l.d)("Language Support", "DirectoryGameDetailsPage")
                        }), r.createElement(E.Ja, null, r.createElement(E.P, {
                            cols: 3
                        }, r.createElement(E.Fb, {
                            color: E.O.Alt2
                        }, Object(l.d)("Language", "DirectoryGameDetailsPage"))), r.createElement(E.P, {
                            cols: 3
                        }, r.createElement(E.Fb, {
                            color: E.O.Alt2,
                            textAlign: E.Sb.Center
                        }, Object(l.d)("Audio", "DirectoryGameDetailsPage"))), r.createElement(E.P, {
                            cols: 3
                        }, r.createElement(E.Fb, {
                            color: E.O.Alt2,
                            textAlign: E.Sb.Center
                        }, Object(l.d)("Interface", "DirectoryGameDetailsPage"))), r.createElement(E.P, {
                            cols: 3
                        }, r.createElement(E.Fb, {
                            color: E.O.Alt2,
                            textAlign: E.Sb.Center
                        }, Object(l.d)("Subtitles", "DirectoryGameDetailsPage"))), r.createElement(E.P, {
                            cols: 12
                        }, r.createElement(E.Fb, {
                            borderBottom: !0,
                            margin: {
                                top: .5,
                                bottom: .5
                            }
                        })), d))))))
                    }, t.prototype.renderSystemRequirements = function(e) {
                        return e ? r.createElement(E.Ya, null, this.renderRow(Object(l.d)("OS:", "DirectoryGameDetailsPage"), e.osVersion), this.renderRow(Object(l.d)("Processor:", "DirectoryGameDetailsPage"), e.processor), this.renderRow(Object(l.d)("Memory:", "DirectoryGameDetailsPage"), e.ram), this.renderRow(Object(l.d)("Graphics Card:", "DirectoryGameDetailsPage"), e.videoCard), this.renderRow(Object(l.d)("DirectX:", "DirectoryGameDetailsPage"), e.directXVersion), this.renderRow(Object(l.d)("Hard Drive Space:", "DirectoryGameDetailsPage"), e.hardDriveSpace), this.renderRow(Object(l.d)("Other:", "DirectoryGameDetailsPage"), e.other)) : null
                    }, t.prototype.renderRow = function(e, t) {
                        return t ? r.createElement(E.Ya, {
                            display: E.X.Flex,
                            flexDirection: E.Aa.Row,
                            flexWrap: E.Ba.NoWrap
                        }, r.createElement(E.Fb, {
                            color: E.O.Alt2,
                            padding: {
                                right: 1
                            },
                            display: E.X.Flex,
                            flexShrink: 0
                        }, e), r.createElement(E.Ya, {
                            display: E.X.Flex,
                            flexGrow: 1
                        }, t)) : null
                    }, t.prototype.renderRowLink = function(e, t, n) {
                        return n ? this.renderRow(e, r.createElement("a", {
                            href: n,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, t)) : null
                    }, t
                }(r.Component),
                q = Object(k.b)("GameInfoSection")(T),
                V = n("/MKj"),
                W = n("fvjX"),
                Y = n("aCAx"),
                M = n("cZKs"),
                z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(E.Fb, {
                            padding: {
                                x: 2,
                                y: 3
                            },
                            background: E.r.Base
                        }, r.createElement("img", {
                            src: this.props.screenshotURL
                        }), r.createElement(M.a, {
                            closeOnBackdropClick: !0,
                            closeOnPageNavigation: !0
                        }))
                    }, t
                }(r.Component);
            var X = Object(W.compose)(Object(V.connect)(null, function(e) {
                    return Object(W.bindActionCreators)({
                        closeModal: Y.c
                    }, e)
                }))(z),
                H = n("2rRr"),
                Q = n("eFQ3"),
                $ = Object(k.b)("VideoEmbed", {
                    autoReportInteractive: !0
                })(function(e) {
                    var t = e.video,
                        n = t.id,
                        a = t.lengthSeconds,
                        o = t.publishedAt,
                        l = t.previewThumbnailURL,
                        s = t.viewCount,
                        d = {
                            vodID: n,
                            disableTheatreButton: !0,
                            playerTypeOverride: e.playerTypeOverride
                        };
                    return r.createElement(H.a, {
                        createdAt: o,
                        lengthSeconds: a,
                        type: H.b.Video,
                        thumbnailURL: l,
                        viewCount: s
                    }, r.createElement(Q.b, i.__assign({}, d)))
                }),
                J = n("VQbD"),
                K = (n("vu7R"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderItems = function() {
                            if (!t.props.videos && !t.props.thumbnailURLs) return [0, 1, 2, 3].map(function(e) {
                                return r.createElement(E.Ya, {
                                    key: "placeholder-" + e,
                                    padding: {
                                        right: 2
                                    }
                                }, r.createElement(E.jb, {
                                    width: 460,
                                    height: 260
                                }))
                            });
                            var e = (t.props.videos || []).map(function(e) {
                                    return e ? r.createElement(E.Ya, {
                                        className: "game-media__video",
                                        padding: {
                                            right: 2
                                        },
                                        key: e.id
                                    }, r.createElement($, {
                                        video: e
                                    })) : null
                                }),
                                n = (t.props.thumbnailURLs || []).map(function(e, n) {
                                    return r.createElement(E.Ya, {
                                        className: "game-media__image",
                                        padding: {
                                            right: 2
                                        },
                                        key: e
                                    }, r.createElement(E.Va, {
                                        onClick: t.handleOpenModal,
                                        "data-full": t.props.screenshotURLs[n],
                                        ariaLabel: Object(l.d)("Screenshot", "DirectoryGameDetailsGameMedia")
                                    }, r.createElement(E.o, {
                                        ratio: E.p.Aspect16x9
                                    }, r.createElement("img", {
                                        src: e
                                    }))))
                                });
                            return e.concat(n)
                        }, t.handleOpenModal = function(e) {
                            var n = e.currentTarget.dataset.full || "";
                            t.props.showImageViewerModal({
                                onClose: t.handleCloseModal,
                                screenshotURL: n
                            })
                        }, t.handleCloseModal = function() {}, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(P, null, r.createElement(L, {
                            title: Object(l.d)("Videos and Screenshots", "DirectoryGameDetailsPage")
                        }), r.createElement(E.Qa, {
                            margin: {
                                bottom: 3,
                                top: 1
                            }
                        }, r.createElement(J.a, {
                            items: this.renderItems()
                        })))
                    }, t = i.__decorate([Object(k.b)("GameMedia")], t)
                }(r.Component));
            var Z = Object(V.connect)(function() {
                    return {}
                }, function(e) {
                    return Object(W.bindActionCreators)({
                        showImageViewerModal: function(e) {
                            var t = i.__rest(e, []);
                            return Object(Y.d)(X, t)
                        }
                    }, e)
                })(K),
                ee = (n("RGoB"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBuyInGameContentNow = function() {
                            var e = t.props,
                                n = e.content,
                                i = e.game,
                                a = e.referrer;
                            F(i, n.info, a && a.settings && a.settings.isCommerceRevShareEnabled, p.PageviewLocation.GameDetail, a && a.id, a && a.displayName, t.onPopupClose)
                        }, t.onPopupClose = function() {
                            t.props.refetchData && t.props.refetchData()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e, t = this.props.content,
                            n = t.info,
                            i = t.tags,
                            a = n.crateASINs,
                            o = n.imageURL,
                            s = n.price,
                            d = n.title,
                            c = i.join(", "),
                            u = {
                                info: n,
                                countryCode: this.props.countryCode,
                                crates: n.crateASINs,
                                isInGameContent: !0,
                                userHasPrime: this.props.hasPrime
                            },
                            m = r.createElement(N, {
                                onClickBuyNow: this.onBuyInGameContentNow,
                                options: u
                            });
                        if (a.length > 1) {
                            var p = Object(l.d)("{numCrates} Twitch Crates", {
                                numCrates: a.length
                            }, "InGameContentCrateReward");
                            e = r.createElement(E.Fb, {
                                className: "in-game-content__crates",
                                attachBottom: !0,
                                padding: {
                                    left: 1,
                                    right: 1
                                },
                                position: E.kb.Absolute,
                                textAlign: E.Sb.Right
                            }, p)
                        }
                        var f = o ? r.createElement(E.o, {
                            ratio: E.p.Aspect1x1
                        }, r.createElement("img", {
                            src: o
                        })) : null;
                        return r.createElement(E.Ya, {
                            margin: {
                                bottom: 3
                            }
                        }, r.createElement(E.Fb, {
                            className: "in-game-content",
                            border: !0,
                            fullHeight: !0,
                            position: E.kb.Relative
                        }, f, r.createElement(E.Fb, {
                            background: E.r.Base,
                            padding: 1
                        }, r.createElement(E.Ya, {
                            className: "in-game-content__info-header"
                        }, r.createElement(E.W, {
                            type: E.Wb.P,
                            fontSize: E.Ca.Size5,
                            bold: !0,
                            title: d
                        }, d), r.createElement(E.W, {
                            type: E.Wb.P,
                            color: E.O.Alt2,
                            title: c
                        }, c)), r.createElement(E.Ya, {
                            className: "in-game-content__price",
                            position: E.kb.Relative
                        }, r.createElement("p", {
                            title: s
                        }, s), e), r.createElement(E.Ya, {
                            className: "in-game-content__buy-button",
                            position: E.kb.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            margin: {
                                left: 1,
                                bottom: 1,
                                right: 1
                            }
                        }, m))))
                    }, t
                }(r.Component)),
                te = Object(k.b)("InGameContent")(ee),
                ne = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.contentList;
                        if (0 === t.length) return null;
                        var n = t.map(function(t, n) {
                            return r.createElement(te, {
                                content: t,
                                countryCode: e.props.countryCode,
                                game: e.props.game,
                                hasPrime: e.props.hasPrime,
                                refetchData: e.props.refetchData,
                                key: n,
                                referrer: e.props.referrer
                            })
                        });
                        return r.createElement(P, {
                            alt: !0
                        }, r.createElement(L, {
                            title: Object(l.d)("In-Game Content", "FeaturedContentRow")
                        }), r.createElement(E.cc, {
                            childWidth: E.dc.Medium,
                            gutterSize: E.ec.Small,
                            noGrow: !0
                        }, n))
                    }, t
                }(r.Component),
                ie = Object(k.b)("InGameContentRow")(ne),
                ae = n("HStj"),
                re = n("FBjy"),
                oe = n("6qyE"),
                le = (n("JzX6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            sortedInGameContent: []
                        }, t.refetchData = function() {
                            t.props.data && t.props.data.refetch && t.props.data.refetch()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), l.p.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.data && e.data.game,
                            n = t && t.product;
                        if (n) {
                            var i = n.inGameContent.slice().sort(g);
                            this.setState({
                                sortedInGameContent: i
                            })
                        }
                    }, t.prototype.render = function() {
                        if (!this.props.data.loading && this.props.data.error) return r.createElement(s.a, {
                            message: Object(l.d)("Error loading data.", "DirectoryGameDetailsPage")
                        });
                        var e = this.props.data,
                            t = e.currentUser,
                            n = e.game;
                        if (!n || !n.product || !n.product.id) return this.props.data.loading ? null : r.createElement(d.a, null);
                        var i = null,
                            a = null,
                            o = null;
                        n.product && n.product.media && (i = n.product.media.screenshotURLs, a = n.product.media.thumbnailURLs, o = (n.product.media.videos || []).map(function(e) {
                            return e ? {
                                id: e.id,
                                lengthSeconds: e.lengthSeconds || 0,
                                previewThumbnailURL: e.previewThumbnailURL || "",
                                publishedAt: e.publishedAt || "",
                                title: e.title || "",
                                viewCount: e.viewCount || 0
                            } : null
                        }));
                        var c = !(!t || !t.hasPrime),
                            u = this.props.referrerData && this.props.referrerData.user,
                            m = "";
                        this.props.data.requestInfo && (m = this.props.data.requestInfo.countryCode);
                        var p = [],
                            v = [];
                        this.state.sortedInGameContent.forEach(function(e) {
                            e.info.isFeatured ? p.push(e) : v.push(e)
                        });
                        var g = r.createElement(E.Ya, {
                            className: "directory-game-details-page__filters",
                            display: E.X.Flex,
                            padding: {
                                top: 1,
                                bottom: 2,
                                right: 3
                            }
                        }, r.createElement(f.a, {
                            buttonSize: E.D.Large,
                            contentType: ae.a.GameDetails,
                            directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName)
                        }));
                        return r.createElement(E.Ya, null, g, r.createElement(U, {
                            game: n,
                            referrer: u,
                            countryCode: m,
                            hasPrime: c,
                            refetchData: this.refetchData
                        }), r.createElement(Z, {
                            screenshotURLs: i,
                            thumbnailURLs: a,
                            videos: o
                        }), r.createElement(_, {
                            contentList: p,
                            countryCode: m,
                            game: n,
                            hasPrime: c,
                            refetchData: this.refetchData,
                            referrer: u
                        }), r.createElement(ie, {
                            contentList: v,
                            countryCode: m,
                            game: n,
                            hasPrime: c,
                            refetchData: this.refetchData,
                            referrer: u
                        }), r.createElement(q, {
                            game: n
                        }))
                    }, t
                }(r.Component)),
                se = Object(o.compose)(Object(c.a)(oe, {
                    options: function(e) {
                        return {
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName)
                            }
                        }
                    }
                }), Object(c.a)(re, {
                    name: "referrerData",
                    skip: function(e) {
                        var t = a.parse(e.location.search),
                            n = t.br_name,
                            i = t.br_id;
                        return !(n || i)
                    },
                    options: function(e) {
                        var t = a.parse(e.location.search),
                            n = t.br_name,
                            i = t.br_id;
                        return {
                            variables: {
                                login: n || null,
                                id: i || null
                            }
                        }
                    }
                }), Object(k.b)("DirectoryGameDetailsPage", {
                    destination: m.a.DirectoryGameDetails
                }), Object(u.a)({
                    location: p.PageviewLocation.GameDetail
                }))(le);
            n.d(t, "DirectoryGameDetailsPage", function() {
                return se
            })
        },
        RGoB: function(e, t, n) {},
        VQbD: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return p
            });
            var i, a, r = n("mrSG"),
                o = n("TSYQ"),
                l = n("q1tI"),
                s = n("/7QA"),
                d = n("GnwI"),
                c = n("Ue10"),
                u = (n("J4PI"), "[data-js-selector=carousel-content]");
            ! function(e) {
                e.Previous = "previous", e.Next = "next"
            }(a || (a = {}));
            var m = ((i = {})[a.Previous] = c.ub.AngleLeft, i[a.Next] = c.ub.AngleRight, i),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentElementIndex: 0,
                            childrenRendered: !1,
                            windowWidth: window.innerWidth
                        }, t.onResize = function() {
                            t.setState({
                                windowWidth: window.innerWidth
                            })
                        }, t.moveCarouselForward = function() {
                            if (!t.isForwardButtonDisabled() && t.props.items) {
                                for (var e = t.getCarouselChildren(), n = t.getCarouselWidth(), i = t.state.currentElementIndex + 1, a = i; a < e.length; a++) {
                                    if (e[a].getBoundingClientRect().right - t.getBaseOffset() > n) {
                                        i = a;
                                        break
                                    }
                                }
                                t.setState({
                                    currentElementIndex: i
                                })
                            }
                        }, t.moveCarouselBackward = function() {
                            if (!t.isBackButtonDisabled()) {
                                for (var e = t.getCarouselChildren(), n = t.getCarouselWidth(), i = t.state.currentElementIndex - 1, a = i - 1; a >= 0; a--) {
                                    if (n < -1 * (e[a].getBoundingClientRect().left - t.getBaseOffset())) break;
                                    i = a
                                }
                                t.setState({
                                    currentElementIndex: i
                                })
                            }
                        }, t.isForwardButtonDisabled = function() {
                            if (!t.carouselContainerRef) return !0;
                            if (t.props.items) {
                                var e = t.getCarouselWidth(),
                                    n = t.getCarouselChildren();
                                if (t.state.currentElementIndex >= n.length - 1) return !0;
                                var i = n[t.state.currentElementIndex].getBoundingClientRect().left;
                                if (n[n.length - 1].getBoundingClientRect().right - i > e) return !1
                            }
                            return !0
                        }, t.isBackButtonDisabled = function() {
                            return 0 === t.state.currentElementIndex
                        }, t.getCarouselChildren = function() {
                            if (!t.carouselContainerRef) return [];
                            var e = t.getCarouselSlider();
                            return e && e.children.length ? Array.prototype.slice.call(e.children) : []
                        }, t.getCarouselSlider = function() {
                            return t.carouselContainerRef.querySelector(u)
                        }, t.getCarouselWidth = function() {
                            return t.carouselContainerRef ? t.carouselContainerRef.getBoundingClientRect().width : 0
                        }, t.getBaseOffset = function() {
                            return t.carouselContainerRef ? t.carouselContainerRef.getBoundingClientRect().left : 0
                        }, t.getSliderOffset = function() {
                            if (!t.carouselContainerRef) return 0;
                            var e = t.getCarouselSlider();
                            return e ? e.getBoundingClientRect().left : 0
                        }, t.getChildOffset = function(e) {
                            var n = t.getCarouselChildren();
                            return 0 === n.length || n.length <= e ? 0 : n[e].getBoundingClientRect().left
                        }, t.transformString = function() {
                            return -1 * (t.getChildOffset(t.state.currentElementIndex) - t.getSliderOffset()) + "px"
                        }, t.refHandler = function(e) {
                            return t.state.childrenRendered || null === t.props.items || t.setState({
                                childrenRendered: !0
                            }), t.carouselContainerRef = e
                        }, t.renderNavButton = function(e, n, i) {
                            var r, d = ((r = {})[a.Previous] = Object(s.d)("previous", "MediaCarouselNavButton"), r[a.Next] = Object(s.d)("next", "MediaCarouselNavButton"), r),
                                u = o("media-carousel__button", {
                                    "media-carousel__button--previous": e === a.Previous,
                                    "media-carousel__button--next": e === a.Next,
                                    "media-carousel__button--disabled": n
                                }, {
                                    "media-carousel__button--inset": !0 === t.props.insetStyle
                                });
                            return l.createElement(c.Ya, {
                                display: c.X.Flex,
                                alignItems: c.f.Center,
                                position: c.kb.Absolute,
                                attachTop: !0,
                                attachLeft: e && e === a.Previous,
                                attachRight: e && e === a.Next,
                                fullHeight: !0
                            }, l.createElement(c.Fb, {
                                className: u,
                                position: c.kb.Relative,
                                display: c.X.Flex,
                                borderRadius: c.x.Medium,
                                background: n ? c.r.Base : void 0
                            }, l.createElement(c.Va, {
                                ariaLabel: d[e],
                                blurAfterClick: !0,
                                "data-test-selector": e + "-button",
                                "data-a-target": e + "-button",
                                disabled: n,
                                onClick: i,
                                type: c.Wa.Base,
                                borderRadius: t.props.insetStyle ? c.x.None : c.x.Medium,
                                border: t.props.insetStyle
                            }, l.createElement(c.Fb, {
                                color: c.O.Link,
                                display: c.X.InlineFlex,
                                padding: {
                                    x: .5,
                                    y: 2
                                }
                            }, l.createElement(c.La, {
                                asset: m[e]
                            })))))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.state.childrenRendered || null === this.props.items || this.setState({
                            childrenRendered: !0
                        })
                    }, t.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.onResize)
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onResize)
                    }, t.prototype.render = function() {
                        return l.createElement(c.Qa, r.__assign({}, this.props, {
                            position: c.kb.Relative
                        }), l.createElement("div", {
                            className: "media-carousel",
                            ref: this.refHandler,
                            "data-test-selector": "carousel-container"
                        }, l.createElement(c.Ya, {
                            className: "media-carousel__child-container",
                            overflow: c.db.Hidden,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, l.createElement("div", {
                            className: "media-carousel__body",
                            style: {
                                marginLeft: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, l.createElement(c.Qa, {
                            className: "media-carousel__content",
                            display: c.X.Flex,
                            flexWrap: c.Ba.NoWrap,
                            flexDirection: c.Aa.Row,
                            alignItems: c.f.Center,
                            "data-js-selector": "carousel-content"
                        }, l.createElement("div", {
                            style: {
                                width: "max-content"
                            }
                        }, this.props.items)))), l.createElement(c.Ya, {
                            className: "media-carousel__nav",
                            display: c.X.Flex,
                            alignItems: c.f.Center,
                            position: c.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), l.createElement(c.Ya, {
                            className: "media-carousel__nav",
                            display: c.X.Flex,
                            alignItems: c.f.Center,
                            position: c.kb.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                    }, t = r.__decorate([Object(d.b)("MediaCarousel", {
                        autoReportInteractive: !0
                    })], t)
                }(l.Component)
        },
        eBTk: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "systemRequirement"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "SystemRequirement"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "osVersion"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "processor"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "ram"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "videoCard"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "directXVersion"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "hardDriveSpace"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "other"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 121
                }
            };
            n.loc.source = {
                body: "fragment systemRequirement on SystemRequirement {\nosVersion\nprocessor\nram\nvideoCard\ndirectXVersion\nhardDriveSpace\nother\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        mM0V: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "inGameContent"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "InGameContent"
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
                                value: "description"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "info"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "productInfo"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "tags"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 144
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/fuel/models/product-info.gql"\nfragment inGameContent on InGameContent {\nid\ndescription\ninfo {\n...productInfo\n}\ntags\n}',
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
            }(n("3ncn").definitions)), e.exports = i
        },
        rQvP: function(e, t, n) {},
        sFUC: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "fuelProductFull"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "GameProduct"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: "fuelProduct"
                            },
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "publisher"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "websiteURL"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "eulaURL"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "supportURL"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "media"
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
                                        value: "backgroundImageURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "boxArtURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "screenshotURLs"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "1920"
                                        }
                                    }],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    alias: {
                                        kind: "Name",
                                        value: "thumbnailURLs"
                                    },
                                    name: {
                                        kind: "Name",
                                        value: "screenshotURLs"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "460"
                                        }
                                    }],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "videos"
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
                                                value: "lengthSeconds"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "previewThumbnailURL"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "width"
                                                },
                                                value: {
                                                    kind: "IntValue",
                                                    value: "460"
                                                }
                                            }, {
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "height"
                                                },
                                                value: {
                                                    kind: "IntValue",
                                                    value: "260"
                                                }
                                            }],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "publishedAt"
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
                                                value: "viewCount"
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
                                value: "minimumSystemRequirement"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "systemRequirement"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "recommendedSystemRequirement"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "systemRequirement"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "supportedLanguages"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "productLangauge"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 636
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/fuel/models/fuel-product.gql"\n#import "twilight/features/fuel/models/product-language.gql"\n#import "twilight/features/fuel/models/system-requirement.gql"\nfragment fuelProductFull on GameProduct {\n...fuelProduct\npublisher\nwebsiteURL\neulaURL\nsupportURL\nmedia {\nid\nbackgroundImageURL\nboxArtURL\nscreenshotURLs(width: 1920)\nthumbnailURLs: screenshotURLs(width:460)\nvideos {\nid\nlengthSeconds\npreviewThumbnailURL(width: 460 height: 260)\npublishedAt\ntitle\nviewCount\n}\n}\nminimumSystemRequirement {\n...systemRequirement\n}\nrecommendedSystemRequirement {\n...systemRequirement\n}\nsupportedLanguages {\n...productLangauge\n}\n}',
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
            i.definitions = i.definitions.concat(r(n("M0lL").definitions)), i.definitions = i.definitions.concat(r(n("3L77").definitions)), i.definitions = i.definitions.concat(r(n("eBTk").definitions)), e.exports = i
        },
        vu7R: function(e, t, n) {},
        wiBv: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "fuelGame"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Game"
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
                                value: "name"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "product"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "fuelProduct"
                                    },
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
            i.loc.source = {
                body: '#import "twilight/features/fuel/models/fuel-product.gql"\nfragment fuelGame on Game {\nid\nname\nproduct {\n...fuelProduct\n}\n}',
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
            }(n("M0lL").definitions)), e.exports = i
        }
    }
]);