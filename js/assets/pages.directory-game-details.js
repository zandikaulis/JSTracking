(window.webpackJsonp = window.webpackJsonp || []).push([
    [131], {
        "2rRr": function(e, t, n) {
            "use strict";
            var i, a = n("/MKj"),
                r = n("fvjX"),
                o = n("S1Za"),
                l = n("AKMF"),
                s = n("mrSG"),
                c = n("q1tI"),
                d = n("/7QA"),
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
                            return c.createElement("a", {
                                href: "#",
                                onClick: t.handleClick,
                                "data-test-selector": i.Overlay
                            }, c.createElement(f.o, {
                                ratio: f.p.Aspect16x9
                            }, c.createElement(f.Xa, null, c.createElement(f.Pa, {
                                fullWidth: !0,
                                fullHeight: !0,
                                position: f.hb.Absolute
                            }, c.createElement("img", {
                                src: r
                            })), c.createElement(f.Xa, {
                                className: "embed-card__overlay",
                                position: f.hb.Absolute,
                                attachLeft: !0,
                                attachTop: !0,
                                fullWidth: !0,
                                fullHeight: !0
                            }, c.createElement(f.Xa, {
                                className: "embed-card__play",
                                display: f.X.Flex,
                                justifyContent: f.Wa.Center,
                                position: f.hb.Absolute,
                                attachLeft: !0,
                                attachTop: !0,
                                fullWidth: !0,
                                fullHeight: !0
                            }, c.createElement(f.qb, {
                                asset: f.rb.Play,
                                width: 50,
                                height: 50
                            })), c.createElement(f.Xa, {
                                position: f.hb.Absolute,
                                padding: 1,
                                attachBottom: !0,
                                attachLeft: !0
                            }, n && c.createElement(f.W, null, Object(d.c)(new Date(n), "medium")), c.createElement(f.Xa, null, o === v.Stream && c.createElement(f.Xa, {
                                display: f.X.Inline,
                                margin: {
                                    right: .5
                                }
                            }, c.createElement(f.K, {
                                status: f.M.Live
                            })), void 0 !== l && c.createElement("span", null, t.getFormattedViewCount(l, o)))), c.createElement(f.Xa, {
                                position: f.hb.Absolute,
                                padding: 1,
                                attachBottom: !0,
                                attachRight: !0
                            }, s && c.createElement(f.Xa, null, c.createElement(f.W, null, s)))), c.createElement(f.Cb, {
                                position: f.hb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                margin: 1,
                                fontSize: f.Ca.Size5
                            }, o === v.Stream && c.createElement(f.eb, {
                                label: Object(d.d)("Live", "EmbedOverlayPill"),
                                type: f.fb.Live
                            }), o === v.Video && c.createElement(f.eb, {
                                label: Object(d.d)("Video", "EmbedOverlayPill"),
                                type: f.fb.Overlay
                            }), o === v.Clip && c.createElement(f.eb, {
                                label: Object(d.d)("Clip", "EmbedOverlayPill"),
                                type: f.fb.Overlay
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
                        return this.state.showOverlay ? this.getOverlayComponent() : c.createElement(f.o, {
                            ratio: f.p.Aspect16x9
                        }, c.createElement("div", {
                            "data-test-selector": i.Wrapper
                        }, this.props.children))
                    }, t.prototype.getFormattedViewCount = function(e, t) {
                        switch (t) {
                            case v.Stream:
                                return Object(d.d)("{viewCount,number} viewers", {
                                    viewCount: e
                                }, "OverlayViewCount");
                            case v.Clip:
                            case v.Video:
                                return Object(d.d)("{viewCount,number} views", {
                                    viewCount: e
                                }, "OverlayViewCount");
                            default:
                                return ""
                        }
                    }, t
                }(c.Component),
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
                c = n("LA8z"),
                d = n("yR8l"),
                u = n("V+GM"),
                m = n("NvVO"),
                p = n("2xye"),
                f = n("cras"),
                v = n("U697"),
                g = n("GnwI"),
                h = n("rShu"),
                k = n("6x+I"),
                b = n("y2lK"),
                y = n("ugLo"),
                C = n("Ue10"),
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBuyInGameContentNow = function() {
                            var e = t.props && t.props.referrer;
                            Object(b.a)(t.props.content.info, e, t.props.game, p.PageviewLocation.GameDetail, t.onPopupClose)
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
                            c = {
                                info: n,
                                countryCode: this.props.countryCode,
                                crates: n.crateASINs,
                                isInGameContent: !0,
                                userHasPrime: !!this.props.hasPrime
                            };
                        return r.createElement(C.P, {
                            cols: {
                                default: 6,
                                xs: 12,
                                sm: 6,
                                md: 6,
                                lg: 6
                            }
                        }, r.createElement(C.Xa, {
                            margin: {
                                bottom: 3
                            }
                        }, r.createElement(C.Ja, {
                            gutterSize: C.Ka.Default
                        }, r.createElement(C.P, {
                            cols: 4
                        }, r.createElement(C.o, {
                            ratio: C.p.Aspect1x1
                        }, r.createElement("img", {
                            src: o || ""
                        }))), r.createElement(C.P, {
                            cols: 8
                        }, r.createElement(C.W, {
                            type: C.Tb.P,
                            fontSize: C.Ca.Size4,
                            title: l
                        }, l), r.createElement(C.W, {
                            type: C.Tb.P,
                            color: C.O.Alt2,
                            title: s
                        }, s), r.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            flexWrap: C.Ba.NoWrap,
                            padding: {
                                bottom: 1,
                                top: 2
                            }
                        }, r.createElement(y.a, {
                            onClickBuyNow: this.onBuyInGameContentNow,
                            options: c
                        })), r.createElement(C.cc, null, r.createElement(k, {
                            source: a || t
                        }))))))
                    }, t
                }(r.Component),
                N = Object(g.b)("FeaturedContent")(E),
                S = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.alt ? C.r.Alt : C.r.Base;
                        return r.createElement(C.Cb, {
                            background: e,
                            border: !0,
                            padding: {
                                left: 3,
                                right: 3
                            }
                        }, this.props.children)
                    }, t
                }(r.Component),
                D = Object(g.b)("GameDetailsSection")(S),
                O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(C.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(C.W, {
                            type: C.Tb.H3
                        }, this.props.title))
                    }, t
                }(r.Component),
                F = Object(g.b)("GameDetailsTitle")(O),
                w = function(e) {
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
                            return r.createElement(N, {
                                content: t,
                                countryCode: e.props.countryCode,
                                game: e.props.game,
                                hasPrime: e.props.hasPrime,
                                refetchData: e.props.refetchData,
                                key: n,
                                referrer: e.props.referrer
                            })
                        });
                        return r.createElement(D, {
                            alt: !0
                        }, r.createElement(F, {
                            title: Object(l.d)("Game Add-Ons", "FeaturedContentRow")
                        }), r.createElement(C.Ja, {
                            gutterSize: C.Ka.Large
                        }, n))
                    }, t
                }(r.Component),
                R = Object(g.b)("FeaturedContentRow")(w),
                P = n("geRD"),
                x = n("GkoH"),
                _ = (n("rQvP"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderSeparator = function() {
                            return r.createElement(C.Cb, {
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
                            var e = t.props && t.props.referrer,
                                n = t.props && t.props.game && t.props.game.product && t.props.game.product.info;
                            n && Object(b.a)(n, e, t.props.game, p.PageviewLocation.GameDetail, t.onPopupClose)
                        }, t.onClaimPrimeOffer = function(e) {
                            t.props.claimPrimeOffer && t.props.claimPrimeOffer(Object(P.a)({
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
                        var e = this.props.game,
                            t = e ? e.product : void 0;
                        if (!e || !t) return r.createElement(D, {
                            alt: !0
                        }, r.createElement(C.Cb, {
                            className: "game-details-box",
                            padding: {
                                top: 2,
                                right: 1,
                                bottom: 2,
                                left: 1
                            },
                            flexDirection: C.Aa.Row,
                            display: C.X.Flex,
                            justifyContent: C.Wa.Between,
                            alignItems: C.f.Center
                        }, r.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexDirection: C.Aa.Row,
                            alignItems: C.f.Center
                        }, r.createElement(C.Xa, null, r.createElement(C.gb, {
                            width: 175,
                            height: 36
                        })), this.renderSeparator(), r.createElement(C.Xa, null, r.createElement(C.gb, {
                            width: 22,
                            height: 30
                        })), r.createElement(C.Xa, null, r.createElement(C.gb, {
                            width: 50,
                            height: 15
                        }))), r.createElement(C.Xa, null, r.createElement(C.gb, {
                            width: 290,
                            height: 20
                        }))));
                        var n = this.props.countryCode,
                            i = !(!this.props.currentUser || !this.props.currentUser.hasPrime),
                            a = {
                                info: t.info,
                                crates: t.info.crateASINs,
                                size: C.D.Large,
                                externalAcquisition: t.acquisition,
                                countryCode: n,
                                userHasPrime: i
                            },
                            o = t.supportedPlatforms.map(function(e) {
                                return r.createElement("img", {
                                    "data-test-selector": "game-details-box-platform-" + e.name,
                                    alt: e.name,
                                    src: e.iconURL,
                                    key: "platform:" + e.name
                                })
                            }),
                            s = null;
                        if (this.props.referrer && this.props.referrer.settings && this.props.referrer.settings.isCommerceRevShareEnabled) {
                            var c = Object(l.d)("Purchase revenue <x:link>will be shared</x:link> with {channel}", {
                                channel: r.createElement(C.W, {
                                    key: "game-details-bold",
                                    bold: !0,
                                    type: C.Tb.Span
                                }, this.props.referrer.displayName),
                                "x:link": this.renderSharedRevenueLink
                            }, "GameDetailsBox");
                            s = r.createElement(C.W, {
                                key: "fuel-shared-revenue-game-details",
                                "data-test-selector": "fuel-shared-revenue"
                            }, c)
                        }
                        var d = null;
                        t.esrbRating && (d = r.createElement("img", {
                            alt: Object(l.d)("Maturity Rating", "GameDetailsBox"),
                            src: t.esrbRating.iconURL,
                            "data-test-selector": "game-details-box-rating",
                            className: "game-details-box__rating"
                        }));
                        var u = null;
                        return t.launchPlatform && (u = r.createElement(k, {
                            "data-test-selector": "game-details-box-launch-platform",
                            source: t.launchPlatform.description,
                            renderers: {
                                Link: this.renderNewWindowLink
                            }
                        })), r.createElement(D, {
                            alt: !0
                        }, r.createElement(C.Cb, {
                            className: "game-details-box",
                            padding: {
                                top: 2,
                                right: 1,
                                bottom: 2,
                                left: 1
                            },
                            flexDirection: C.Aa.Row,
                            display: C.X.Flex,
                            justifyContent: C.Wa.Between,
                            alignItems: C.f.Center
                        }, r.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexDirection: C.Aa.Row,
                            alignItems: C.f.Center
                        }, r.createElement(y.a, {
                            onClickBuyNow: this.onBuyNowClick,
                            onClickClaimPrimeOffer: this.onClaimPrimeOffer,
                            options: a,
                            "data-test-selector": "game-details-box-fuel-buy-button"
                        }), this.renderSeparator(), d, o, u), s))
                    }, t
                }(r.Component)),
                I = Object(g.b)("GameDetailBox")(_),
                L = Object(d.a)(x, {
                    name: "claimPrimeOffer"
                })(I),
                G = function(e) {
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
                                }, r.createElement(k, {
                                    source: e
                                }))
                            }),
                            c = i.map(function(e, t) {
                                return [r.createElement(C.P, {
                                    key: t + "lang",
                                    cols: 3
                                }, r.createElement(C.Xa, null, e.language)), r.createElement(C.P, {
                                    key: t + "audio",
                                    cols: 3
                                }, r.createElement(C.Cb, {
                                    textAlign: C.Pb.Center
                                }, e.hasAudio && r.createElement(C.qb, {
                                    asset: C.rb.Check,
                                    type: C.sb.Success
                                }))), r.createElement(C.P, {
                                    key: t + "int",
                                    cols: 3
                                }, r.createElement(C.Cb, {
                                    textAlign: C.Pb.Center
                                }, e.hasInterface && r.createElement(C.qb, {
                                    asset: C.rb.Check,
                                    type: C.sb.Success
                                }))), r.createElement(C.P, {
                                    key: t + "subs",
                                    cols: 3
                                }, r.createElement(C.Cb, {
                                    textAlign: C.Pb.Center
                                }, e.hasSubtitles && r.createElement(C.qb, {
                                    asset: C.rb.Check,
                                    type: C.sb.Success
                                }))), r.createElement(C.P, {
                                    key: t + "hr",
                                    cols: 12
                                }, r.createElement(C.Cb, {
                                    margin: {
                                        top: .5,
                                        bottom: .5
                                    },
                                    borderBottom: !0,
                                    alignContent: C.e.Stretch
                                }))]
                            }),
                            d = this.renderSystemRequirements(a),
                            u = this.renderSystemRequirements(o);
                        return r.createElement(D, null, r.createElement(C.Ja, {
                            gutterSize: C.Ka.Large
                        }, r.createElement(C.P, {
                            cols: {
                                default: 6,
                                xs: 12,
                                sm: 6
                            }
                        }, r.createElement(C.Xa, {
                            margin: {
                                top: 4
                            }
                        }, r.createElement(F, {
                            title: Object(l.d)("Description", "DirectoryGameDetailsPage")
                        }), r.createElement(C.cc, null, r.createElement(k, {
                            source: t.description
                        }))), r.createElement(C.Xa, {
                            margin: {
                                top: 4
                            }
                        }, r.createElement(F, {
                            title: Object(l.d)("Features", "DirectoryGameDetailsPage")
                        }), r.createElement(C.cc, null, r.createElement("ul", null, s))), r.createElement(C.Cb, {
                            margin: {
                                top: 4
                            },
                            fontSize: C.Ca.Size6
                        }, r.createElement(F, {
                            title: Object(l.d)("Information", "DirectoryGameDetailsPage")
                        }), this.renderRow(Object(l.d)("Title: ", "DirectoryGameDetailsPage"), t.title), this.renderRow(Object(l.d)("Developer: ", "DirectoryGameDetailsPage"), e.developer), this.renderRow(Object(l.d)("Publisher: ", "DirectoryGameDetailsPage"), e.publisher), this.renderRowLink(Object(l.d)("More Info: ", "DirectoryGameDetailsPage"), Object(l.d)("Website", "DirectoryGameDetailsPage"), e.websiteURL), e.eulaURL && this.renderRowLink(Object(l.d)("License Agreement: ", "DirectoryGameDetailsPage"), Object(l.d)("Check out the EULA", "DirectoryGameDetailsPage"), e.eulaURL), this.renderRowLink(Object(l.d)("Need Help? ", "DirectoryGameDetailsPage"), Object(l.d)("Contact Support", "DirectoryGameDetailsPage"), e.supportURL))), r.createElement(C.P, {
                            cols: {
                                default: 6,
                                xs: 12,
                                sm: 6
                            }
                        }, r.createElement(C.Xa, {
                            margin: {
                                top: 4
                            }
                        }, r.createElement(F, {
                            title: Object(l.d)("Hardware Requirements", "DirectoryGameDetailsPage")
                        }), r.createElement(C.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(C.W, {
                            type: C.Tb.H4,
                            bold: !0
                        }, Object(l.d)("Minimum", "DirectoryGameDetailsPage"))), d, r.createElement(C.Xa, {
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, r.createElement(C.W, {
                            type: C.Tb.H4,
                            bold: !0
                        }, Object(l.d)("Recommended", "DirectoryGameDetailsPage"))), u), r.createElement(C.Xa, {
                            margin: {
                                top: 4
                            }
                        }, r.createElement(F, {
                            title: Object(l.d)("Language Support", "DirectoryGameDetailsPage")
                        }), r.createElement(C.Ja, null, r.createElement(C.P, {
                            cols: 3
                        }, r.createElement(C.Cb, {
                            color: C.O.Alt2
                        }, Object(l.d)("Language", "DirectoryGameDetailsPage"))), r.createElement(C.P, {
                            cols: 3
                        }, r.createElement(C.Cb, {
                            color: C.O.Alt2,
                            textAlign: C.Pb.Center
                        }, Object(l.d)("Audio", "DirectoryGameDetailsPage"))), r.createElement(C.P, {
                            cols: 3
                        }, r.createElement(C.Cb, {
                            color: C.O.Alt2,
                            textAlign: C.Pb.Center
                        }, Object(l.d)("Interface", "DirectoryGameDetailsPage"))), r.createElement(C.P, {
                            cols: 3
                        }, r.createElement(C.Cb, {
                            color: C.O.Alt2,
                            textAlign: C.Pb.Center
                        }, Object(l.d)("Subtitles", "DirectoryGameDetailsPage"))), r.createElement(C.P, {
                            cols: 12
                        }, r.createElement(C.Cb, {
                            borderBottom: !0,
                            margin: {
                                top: .5,
                                bottom: .5
                            }
                        })), c)))))
                    }, t.prototype.renderSystemRequirements = function(e) {
                        return e ? r.createElement(C.Xa, null, this.renderRow(Object(l.d)("OS:", "DirectoryGameDetailsPage"), e.osVersion), this.renderRow(Object(l.d)("Processor:", "DirectoryGameDetailsPage"), e.processor), this.renderRow(Object(l.d)("Memory:", "DirectoryGameDetailsPage"), e.ram), this.renderRow(Object(l.d)("Graphics Card:", "DirectoryGameDetailsPage"), e.videoCard), this.renderRow(Object(l.d)("DirectX:", "DirectoryGameDetailsPage"), e.directXVersion), this.renderRow(Object(l.d)("Hard Drive Space:", "DirectoryGameDetailsPage"), e.hardDriveSpace), this.renderRow(Object(l.d)("Other:", "DirectoryGameDetailsPage"), e.other)) : null
                    }, t.prototype.renderRow = function(e, t) {
                        return t ? r.createElement(C.Xa, {
                            display: C.X.Flex,
                            flexDirection: C.Aa.Row,
                            flexWrap: C.Ba.NoWrap
                        }, r.createElement(C.Cb, {
                            color: C.O.Alt2,
                            padding: {
                                right: 1
                            },
                            display: C.X.Flex,
                            flexShrink: 0
                        }, e), r.createElement(C.Xa, {
                            display: C.X.Flex,
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
                j = Object(g.b)("GameInfoSection")(G),
                A = n("/MKj"),
                B = n("fvjX"),
                T = n("aCAx"),
                U = n("cZKs"),
                X = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(C.Cb, {
                            padding: {
                                x: 2,
                                y: 3
                            },
                            background: C.r.Base
                        }, r.createElement("img", {
                            src: this.props.screenshotURL
                        }), r.createElement(U.a, {
                            closeOnBackdropClick: !0,
                            closeOnPageNavigation: !0
                        }))
                    }, t
                }(r.Component);
            var q = Object(B.compose)(Object(A.connect)(null, function(e) {
                    return Object(B.bindActionCreators)({
                        closeModal: T.c
                    }, e)
                }))(X),
                V = n("2rRr"),
                W = n("eFQ3"),
                M = Object(g.b)("VideoEmbed", {
                    autoReportInteractive: !0
                })(function(e) {
                    var t = e.video,
                        n = t.id,
                        a = t.lengthSeconds,
                        o = t.publishedAt,
                        l = t.previewThumbnailURL,
                        s = t.viewCount,
                        c = {
                            vodID: n,
                            disableTheatreButton: !0,
                            playerTypeOverride: e.playerTypeOverride
                        };
                    return r.createElement(V.a, {
                        createdAt: o,
                        lengthSeconds: a,
                        type: V.b.Video,
                        thumbnailURL: l,
                        viewCount: s
                    }, r.createElement(W.b, i.__assign({}, c)))
                }),
                z = n("VQbD"),
                H = (n("vu7R"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderItems = function() {
                            if (!t.props.videos && !t.props.thumbnailURLs) return [0, 1, 2, 3].map(function(e) {
                                return r.createElement(C.Xa, {
                                    key: "placeholder-" + e,
                                    padding: {
                                        right: 2
                                    }
                                }, r.createElement(C.gb, {
                                    width: 460,
                                    height: 260
                                }))
                            });
                            var e = (t.props.videos || []).map(function(e) {
                                    return e ? r.createElement(C.Xa, {
                                        className: "game-media__video",
                                        padding: {
                                            right: 2
                                        },
                                        key: e.id
                                    }, r.createElement(M, {
                                        video: e
                                    })) : null
                                }),
                                n = (t.props.thumbnailURLs || []).map(function(e, n) {
                                    return r.createElement(C.Xa, {
                                        className: "game-media__image",
                                        padding: {
                                            right: 2
                                        },
                                        key: e
                                    }, r.createElement(C.Ua, {
                                        onClick: t.handleOpenModal,
                                        "data-full": t.props.screenshotURLs[n],
                                        ariaLabel: Object(l.d)("Screenshot", "DirectoryGameDetailsGameMedia")
                                    }, r.createElement(C.o, {
                                        ratio: C.p.Aspect16x9
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
                        return r.createElement(D, null, r.createElement(F, {
                            title: Object(l.d)("Videos and Screenshots", "DirectoryGameDetailsPage")
                        }), r.createElement(C.Pa, {
                            margin: {
                                bottom: 3,
                                top: 1
                            }
                        }, r.createElement(z.a, {
                            items: this.renderItems()
                        })))
                    }, t = i.__decorate([Object(g.b)("GameMedia")], t)
                }(r.Component));
            var Q = Object(A.connect)(function() {
                    return {}
                }, function(e) {
                    return Object(B.bindActionCreators)({
                        showImageViewerModal: function(e) {
                            var t = i.__rest(e, []);
                            return Object(T.d)(q, t)
                        }
                    }, e)
                })(H),
                $ = (n("RGoB"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBuyInGameContentNow = function() {
                            var e = t.props && t.props.referrer;
                            Object(b.a)(t.props.content.info, e, t.props.game, p.PageviewLocation.GameDetail, t.onPopupClose)
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
                            c = n.title,
                            d = i.join(", "),
                            u = {
                                info: n,
                                countryCode: this.props.countryCode,
                                crates: n.crateASINs,
                                isInGameContent: !0,
                                userHasPrime: this.props.hasPrime
                            },
                            m = r.createElement(y.a, {
                                onClickBuyNow: this.onBuyInGameContentNow,
                                options: u
                            });
                        if (a.length > 1) {
                            var p = Object(l.d)("{numCrates} Twitch Crates", {
                                numCrates: a.length
                            }, "InGameContentCrateReward");
                            e = r.createElement(C.Cb, {
                                className: "in-game-content__crates",
                                attachBottom: !0,
                                padding: {
                                    left: 1,
                                    right: 1
                                },
                                position: C.hb.Absolute,
                                textAlign: C.Pb.Right
                            }, p)
                        }
                        var f = o ? r.createElement(C.o, {
                            ratio: C.p.Aspect1x1
                        }, r.createElement("img", {
                            src: o
                        })) : null;
                        return r.createElement(C.Xa, {
                            margin: {
                                bottom: 3
                            }
                        }, r.createElement(C.Cb, {
                            className: "in-game-content",
                            border: !0,
                            fullHeight: !0,
                            position: C.hb.Relative
                        }, f, r.createElement(C.Cb, {
                            background: C.r.Base,
                            padding: 1
                        }, r.createElement(C.Xa, {
                            className: "in-game-content__info-header"
                        }, r.createElement(C.W, {
                            type: C.Tb.P,
                            fontSize: C.Ca.Size5,
                            bold: !0,
                            title: c
                        }, c), r.createElement(C.W, {
                            type: C.Tb.P,
                            color: C.O.Alt2,
                            title: d
                        }, d)), r.createElement(C.Xa, {
                            className: "in-game-content__price",
                            position: C.hb.Relative
                        }, r.createElement("p", {
                            title: s
                        }, s), e), r.createElement(C.Xa, {
                            className: "in-game-content__buy-button",
                            position: C.hb.Absolute,
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
                J = Object(g.b)("InGameContent")($),
                K = function(e) {
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
                            return r.createElement(J, {
                                content: t,
                                countryCode: e.props.countryCode,
                                game: e.props.game,
                                hasPrime: e.props.hasPrime,
                                refetchData: e.props.refetchData,
                                key: n,
                                referrer: e.props.referrer
                            })
                        });
                        return r.createElement(D, {
                            alt: !0
                        }, r.createElement(F, {
                            title: Object(l.d)("In-Game Content", "FeaturedContentRow")
                        }), r.createElement(C.Zb, {
                            childWidth: C.ac.Medium,
                            gutterSize: C.bc.Small,
                            noGrow: !0
                        }, n))
                    }, t
                }(r.Component),
                Z = Object(g.b)("InGameContentRow")(K),
                Y = n("HStj"),
                ee = n("FBjy"),
                te = n("6qyE"),
                ne = (n("JzX6"), function(e) {
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
                            var i = n.inGameContent.slice().sort(v.a);
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
                        if (!n || !n.product || !n.product.id) return this.props.data.loading ? null : r.createElement(c.a, null);
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
                        var d = !(!t || !t.hasPrime),
                            u = this.props.referrerData && this.props.referrerData.user,
                            m = "";
                        this.props.data.requestInfo && (m = this.props.data.requestInfo.countryCode);
                        var p = [],
                            v = [];
                        this.state.sortedInGameContent.forEach(function(e) {
                            e.info.isFeatured ? p.push(e) : v.push(e)
                        });
                        var g = r.createElement(C.Xa, {
                            className: "directory-game-details-page__filters",
                            display: C.X.Flex,
                            padding: {
                                top: 1,
                                bottom: 2,
                                right: 3
                            }
                        }, r.createElement(f.a, {
                            buttonSize: C.D.Large,
                            contentType: Y.a.GameDetails,
                            directoryType: h.a.Games,
                            directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName)
                        }));
                        return r.createElement(C.Xa, null, g, r.createElement(L, {
                            game: n,
                            referrer: u,
                            countryCode: m,
                            currentUser: this.props.data.currentUser,
                            refetchData: this.refetchData
                        }), r.createElement(Q, {
                            screenshotURLs: i,
                            thumbnailURLs: a,
                            videos: o
                        }), r.createElement(R, {
                            contentList: p,
                            countryCode: m,
                            game: n,
                            hasPrime: d,
                            refetchData: this.refetchData,
                            referrer: u
                        }), r.createElement(Z, {
                            contentList: v,
                            countryCode: m,
                            game: n,
                            hasPrime: d,
                            refetchData: this.refetchData,
                            referrer: u
                        }), r.createElement(j, {
                            game: n
                        }))
                    }, t
                }(r.Component)),
                ie = Object(o.compose)(Object(d.a)(te, {
                    options: function(e) {
                        return {
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName)
                            }
                        }
                    }
                }), Object(d.a)(ee, {
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
                }), Object(g.b)("DirectoryGameDetailsPage", {
                    destination: m.a.DirectoryGameDetails
                }), Object(u.a)({
                    location: p.PageviewLocation.GameDetail
                }))(ne);
            n.d(t, "DirectoryGameDetailsPage", function() {
                return ie
            })
        },
        RGoB: function(e, t, n) {},
        U697: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = /^\$[\d]+.[\d]{2}$/;

            function a(e, t) {
                var n = i.test(e.info.price),
                    a = i.test(t.info.price);
                if (n && a) {
                    var r = +e.info.price.replace("$", "") - +t.info.price.replace("$", "");
                    return 0 !== r ? r : e.info.title.localeCompare(t.info.title)
                }
                return n && !a ? -1 : a ? 1 : e.info.price.localeCompare(t.info.price)
            }
        },
        VQbD: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return p
            });
            var i, a, r = n("mrSG"),
                o = n("TSYQ"),
                l = n("q1tI"),
                s = n("/7QA"),
                c = n("GnwI"),
                d = n("Ue10"),
                u = (n("J4PI"), "[data-js-selector=carousel-content]");
            ! function(e) {
                e.Previous = "previous", e.Next = "next"
            }(a || (a = {}));
            var m = ((i = {})[a.Previous] = d.rb.AngleLeft, i[a.Next] = d.rb.AngleRight, i),
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
                            var r, c = ((r = {})[a.Previous] = Object(s.d)("previous", "MediaCarouselNavButton"), r[a.Next] = Object(s.d)("next", "MediaCarouselNavButton"), r),
                                u = o("media-carousel__button", {
                                    "media-carousel__button--previous": e === a.Previous,
                                    "media-carousel__button--next": e === a.Next,
                                    "media-carousel__button--disabled": n
                                }, {
                                    "media-carousel__button--inset": !0 === t.props.insetStyle
                                });
                            return l.createElement(d.Xa, {
                                className: u,
                                position: d.hb.Relative,
                                display: d.X.Flex,
                                alignItems: d.f.Stretch
                            }, l.createElement(d.A, {
                                "data-test-selector": e + "-button",
                                "data-a-target": e + "-button",
                                onClick: i,
                                disabled: n,
                                ariaLabel: c[e],
                                icon: m[e],
                                size: d.B.Large
                            }))
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
                        return l.createElement(d.Pa, r.__assign({}, this.props, {
                            position: d.hb.Relative
                        }), l.createElement("div", {
                            className: "media-carousel",
                            ref: this.refHandler,
                            "data-test-selector": "carousel-container"
                        }, l.createElement(d.Xa, {
                            className: "media-carousel__child-container",
                            overflow: d.cb.Hidden,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, l.createElement("div", {
                            className: "media-carousel__body",
                            style: {
                                marginLeft: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, l.createElement(d.Pa, {
                            className: "media-carousel__content",
                            display: d.X.Flex,
                            flexWrap: d.Ba.NoWrap,
                            flexDirection: d.Aa.Row,
                            alignItems: d.f.Center,
                            "data-js-selector": "carousel-content"
                        }, l.createElement("div", {
                            style: {
                                width: "max-content"
                            }
                        }, this.props.items)))), l.createElement(d.Xa, {
                            className: "media-carousel__nav",
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            position: d.hb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), l.createElement(d.Xa, {
                            className: "media-carousel__nav",
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            position: d.hb.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            fullHeight: !0
                        }, this.renderNavButton(a.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                    }, t = r.__decorate([Object(c.b)("MediaCarousel", {
                        autoReportInteractive: !0
                    })], t)
                }(l.Component)
        },
        XMq5: function(e, t, n) {},
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
        "s/8O": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "a", function() {
                return u
            });
            var i, a = n("/7QA"),
                r = n("f00E"),
                o = n("2xye"),
                l = /tag=(.*?)(&|$)/;

            function s(e) {
                var t = e.match(l);
                return t && t.length >= 2 ? t[1] : ""
            }

            function c(e) {
                if (e.game && e.product) {
                    var t, n;
                    e.user && (t = e.user.displayName, n = e.user.id);
                    var i = {
                        location: e.location,
                        game_id: e.game.id,
                        game_name: e.game.name,
                        developer: e.product.developer,
                        genre: e.product.genres,
                        asin: e.info.asin,
                        channel: t,
                        channel_id: n,
                        crate: e.info.crateASINs
                    };
                    a.p.tracking.track(o.SpadeEventType.FuelBuyButton, i)
                }
            }

            function d(e) {
                var t = {
                    asin: e.item.info.asin,
                    price: e.item.info.price,
                    channel_id: e.user && e.user.id || null,
                    channel: e.user && e.user.login || null,
                    game_id: e.game.id,
                    game_name: e.game.name,
                    impression_group_id: e.impressionGroupID,
                    impression_id: e.impressionID,
                    item_index: e.index,
                    max_index: e.offerCount,
                    offer_type: e.offerType,
                    store_id: s(e.item.info.purchaseURL)
                };
                a.p.tracking.track(o.SpadeEventType.FuelOfferView, t)
            }

            function u(e, t, n) {
                var i = Object(r.b)(),
                    a = e.inGameContent.length + 1,
                    o = {
                        product: {
                            game: t,
                            user: n,
                            item: e,
                            impressionGroupID: i,
                            offerCount: a,
                            impressionID: Object(r.b)(),
                            index: 0,
                            offerType: "fuel"
                        },
                        igc: {}
                    };
                return e.inGameContent.forEach(function(e, l) {
                    e && (o.igc[e.id] = {
                        game: t,
                        user: n,
                        item: e,
                        impressionGroupID: i,
                        offerCount: a,
                        impressionID: Object(r.b)(),
                        index: l + 1,
                        offerType: "fuel"
                    })
                }), o
            }! function(e) {
                e.Hover = "hover", e.ViewDetails = "view_asin_detail", e.ClickToAmazon = "click_to_amazon"
            }(i || (i = {}))
        },
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
        ugLo: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("6x+I"),
                o = n("/7QA"),
                l = n("ht6z"),
                s = n("Ue10"),
                c = (n("XMq5"), "https://twitch.amazon.com/prime/?ref_=sm_w_tup_ln_t_c"),
                d = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            balloonOpen: !1
                        }, t.renderUnavailableText = function() {
                            var e = t.props.options.isInGameContent ? Object(o.d)("This content is currently unavailable", "FuelBuyButton") : Object(o.d)("This game is currently unavailable", "FuelBuyButton");
                            return a.createElement(s.W, {
                                italic: !0,
                                "data-target": "fuel-buy-button-unavailable"
                            }, e)
                        }, t.renderBuyNowButton = function(e, n, i, r) {
                            void 0 === r && (r = s.D.Default);
                            var l = null;
                            if (n && n.length > 1) {
                                var c = Object(o.d)("Includes {crates} Twitch Crates!", {
                                    crates: n.length
                                }, "FuelBuyButton");
                                l = a.createElement(s.W, {
                                    className: "fuel-buy-button__crates",
                                    "data-target": "fuel-buy-button-crates"
                                }, c)
                            }
                            var d = i ? "fuel-buy-button-content" : "fuel-buy-button";
                            return a.createElement(s.Xa, {
                                alignItems: s.f.Center
                            }, a.createElement(s.z, {
                                fullWidth: !0,
                                icon: n && n.length > 0 ? s.rb.Crate : void 0,
                                purchase: e,
                                onClick: t.props.onClickBuyNow,
                                "data-target": d,
                                size: r
                            }, Object(o.d)("Buy Now", "FuelBuyButton")), l)
                        }, t.renderPrimeTreatment = function(e, n) {
                            var i = [],
                                r = a.createElement(s.qb, {
                                    asset: s.rb.Crown,
                                    type: s.sb.Prime,
                                    width: 16,
                                    height: 16,
                                    key: "fuel-crown"
                                });
                            return i = e ? [r, a.createElement("div", {
                                className: "fuel-buy-button__prime-button",
                                key: "fuel-claim"
                            }, a.createElement(s.z, {
                                onClick: t.onClickClaimPrimeOffer
                            }, Object(o.d)("Claim Offer", "FuelBuyButton")))] : [r, a.createElement(s.Xa, {
                                padding: {
                                    x: 1
                                },
                                key: "fuel-free-label"
                            }, a.createElement(s.W, {
                                type: s.Tb.Strong
                            }, Object(o.d)("Free", "FuelBuyButton"))), a.createElement("div", {
                                className: "fuel-buy-button__prime-trial-button",
                                key: "fuel-trial"
                            }, a.createElement(s.z, {
                                linkTo: c,
                                targetBlank: !0,
                                "data-target": "fuel-buy-button-prime-trial"
                            }, Object(o.d)("Start Your Free Trial", "FuelBuyButton")))], a.createElement(s.Xa, {
                                flexDirection: s.Aa.Row,
                                display: s.X.Flex,
                                alignItems: s.f.Center,
                                "data-target": "fuel-buy-button-prime"
                            }, i)
                        }, t.onClickClaimPrimeOffer = function() {
                            if (t.props.onClickClaimPrimeOffer) {
                                var e = t.props.options.info.primeOffer;
                                e && t.props.onClickClaimPrimeOffer(e.id)
                            }
                        }, t.renderExternalAcquisitionLink = function(e) {
                            return a.createElement("a", {
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
                            c = e.crates,
                            d = e.userHasPrime,
                            u = e.isInGameContent,
                            m = e.size,
                            p = t.primeOffer,
                            f = n && Object(l.a)(n),
                            v = !p || !f;
                        if (t.isEntitled) return a.createElement(s.W, {
                            "data-target": "fuel-buy-button-purchased"
                        }, Object(o.d)("Purchased", "FuelBuyButton"));
                        if (!t.isForSale && i && i.isExternal) return a.createElement("div", {
                            "data-target": "fuel-buy-button-external"
                        }, a.createElement(r, {
                            source: i.description,
                            renderers: {
                                Link: this.renderExternalAcquisitionLink
                            }
                        }));
                        if (!t.isForSale && v) return this.renderUnavailableText();
                        if (p && !d) {
                            var g = t.isForSale ? this.renderBuyNowButton(t.price, c, u, m) : void 0;
                            return this.renderPrimeTreatment(d, g)
                        }
                        return p ? this.renderPrimeTreatment(d) : this.renderBuyNowButton(t.price, c, u, m)
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return d
            })
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
        },
        y2lK: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("SDEh"),
                a = n("edgk"),
                r = n("s/8O");

            function o(e, t, n, o, l) {
                var s = n && n.product;
                if (n && s) {
                    Object(r.b)({
                        user: t,
                        game: n,
                        product: s,
                        info: e,
                        location: o
                    });
                    var c = "";
                    t && t.settings && t.settings.isCommerceRevShareEnabled && (c = "&br_id=" + t.id),
                        function(e, t) {
                            var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                            if (!n || Object(i.a)()) return;
                            n.focus(), Object(a.a)(n, function(e) {
                                t(e)
                            })
                        }(e.purchaseURL + c, l)
                }
            }
        }
    }
]);